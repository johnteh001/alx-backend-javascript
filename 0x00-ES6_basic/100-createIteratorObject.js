export default function createIteratorObject(report) {
    const employees = report.allEmployees;
    const departments = Object.keys(employees);

    function* employeeGenerator() {
        for (const department of departments) {
            for (const employee of employees[department]) {
                yield employee;
            }
        }
    }

    return employeeGenerator();
}
