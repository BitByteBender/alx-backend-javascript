export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: "Soufiane",
  lastName: "Sadgali",
  age: 30,
  location: "Malta"
};

const secondStudent: Student = {
  firstName: "Sung",
  lastName: "Woo-jin",
  age: 21,
  location: "Seoul"
};

export const studentsList: Student[] = [firstStudent, secondStudent];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
  const row = document.createElement('tr');
  const firstStName = document.createElement('td');
  const loc = document.createElement('td');

  firstStName.textContent = student.firstName;
  loc.textContent = student.location;

  row.appendChild(firstStName);
  row.appendChild(loc);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
