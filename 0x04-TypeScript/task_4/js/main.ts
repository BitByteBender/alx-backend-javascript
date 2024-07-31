import { Subjects } from './subjects/Cpp';
import { Cpp } from './subjects/Cpp';
import { React } from './subjects/React';
import { Java } from './subjects/Java';

export const cpp = new Cpp(new Subjects.Teacher());
export const java = new Java(new Subjects.Teacher());
export const react = new React(new Subjects.Teacher());

const cTeacher: Subjects.Teacher = {
  firstName: 'Mariane',
  lastName: 'Triniti',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
