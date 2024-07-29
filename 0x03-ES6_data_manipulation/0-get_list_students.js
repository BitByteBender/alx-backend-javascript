export default function getListStudents() {
  const Student = {
    id: [1, 2, 5],
    firstName: ['Guillaume', 'James', 'Serena'],
    location: ['San Francisco', 'Columbia', 'San Francisco'],
  };

  return Student.id.map((id, idx) => ({
    id,
    firstName: Student.firstName[idx],
    location: Student.location[idx],
  }));
}
