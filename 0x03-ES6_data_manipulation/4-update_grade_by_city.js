export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const obj = newGrades.find((grade) => grade.studentId === student.id);
      return { ...student, grade: obj ? obj.grade : 'N/A' };
    });
}
