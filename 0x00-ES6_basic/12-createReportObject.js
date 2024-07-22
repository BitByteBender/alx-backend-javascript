export default function createReportObject(employeesList) {
  const Mapper = new Map(Object.entries(employeesList));

  const Report = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Mapper.size;
    },
  };

  return Report;
}
