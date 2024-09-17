import readDatabase from '../utils';

const enMAJORS = Object.freeze({
  CS: 'CS',
  SWE: 'SWE',
});

class StudentsController {
  static getAllStudents(req, res) {
    const path = process.argv[2] || '';

    readDatabase(path).then((studentCls) => {
      let content = 'This is the list of our students\n';
      const fields = Object.keys(studentCls).sort();

      fields.forEach((field) => {
        content += `Number of students in ${field}: ${studentCls[field].length}. List: ${studentCls[field].join(', ')}\n`;
      });
      res.status(200).send(content.trim());
    }).catch((err) => res.status(500).send(err.message));
  }

  static getAllStudentsByMajor(req, res) {
    const path = process.argv[2] || '';
    const { major } = req.params;

    if (!Object.values(enMAJORS).includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(path).then((studentCls) => {
      const ByMajor = studentCls[major];
      if (ByMajor) {
        return res.status(200).send(`List: ${ByMajor.join(', ')}`);
      }
      return res.status(200).send('List:');
    }).catch(() => res.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
