export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [idxSig: string]: any;
}

const firstTeacher: Teacher = {
  firstName: 'Soufiane',
  lastName: 'Sadgali',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

const secondTeacher: Teacher = {
  firstName: 'Malik',
  lastName: 'Lavender',
  fullTimeEmployee: true,
  location: 'Vancouver',
  contract: true,
  profeciency: 'Physics',
};

export const teachersList: Teacher[] = [firstTeacher, secondTeacher];

//console.log(firstTeacher);
//console.log(secondTeacher);
console.log(teachersList[0]);
console.log(teachersList[1]);
