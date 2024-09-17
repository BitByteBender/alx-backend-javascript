/**
 * Reads from file asynchronously
 */
import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile((path), 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const studentCls = {};
      const ln = data.trim().split('\n');

      let i = 1;
      while (i <= (ln.length - 1)) {
        const student = ln[i].split(',');
        const field = student[student.length - 1];
        const firstname = student[0];
        if (!studentCls[field]) {
          studentCls[field] = [];
        }
        studentCls[field].push(firstname);
        i += 1;
      }
      resolve(studentCls);
    }
  });
});

export default readDatabase;
