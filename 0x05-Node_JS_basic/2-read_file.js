/*
 * Reading a file synchronously with NodeJS
 */
const fs = require('fs');
const displayMessage = require('./0-console');

function countStudents(path) {
  if (!(fs.existsSync(path) && fs.statSync(path).isFile())) throw Error('Cannot load the database');

  const dt = fs.readFileSync(path, 'utf-8').trim();

  if (!dt) {
    displayMessage('Number of students: 0');
    return;
  }

  const ln = dt.split('\n').filter((ln) => ln.trim() !== '');

  const students = ln.slice(1);
  displayMessage(`Number of students: ${students.length}`);

  const fields = {};

  students.map((std) => {
    const [firstname, , , field] = std.split(',');
    return { firstname, field };
  })
    .filter(({ firstname, field }) => firstname && field)
    .forEach(({ firstname, field }) => {
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

  for (const [field, names] of Object.entries(fields)) {
    displayMessage(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
