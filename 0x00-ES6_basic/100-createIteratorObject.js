export default function createIteratorObject(report) {
  const allEmployees = [];

  for (const dpt of Object.values(report.allEmployees)) {
    allEmployees.push(...dpt);
  }

  return allEmployees[Symbol.iterator]();
}
