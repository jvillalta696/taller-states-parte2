import React from "react";
import Employee from "./Employee";
import EmployeeForm from "./EmployeeForm";

class EmployeeList extends React.Component {
  state = {
    employees: [
      {
        id: 1,
        name: "Manuel",
        position: "manager",
      },
      {
        id: 2,
        name: "Daniel",
        position: "CEO",
      },
      {
        id: 3,
        name: "Maria",
        position: "Developer",
      },
    ],
  };
  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee, index) => (
              <Employee
                key={index}
                id={employee.id}
                name={employee.name}
                position={employee.position}
                fire={this.fireEmployee}
              />
            ))}
          </tbody>
        </table>
        <hr />
        <EmployeeForm hire={this.hireEmployee} />
      </>
    );
  }

  fireEmployee = (id) => {
    const { employees } = this.state;
    this.setState({
      employees: employees.filter((employee) => employee.id !== id),
    });
  };

  hireEmployee = employee => {
    this.setState(
      { employees: [...this.state.employees, employee] });
  };
}

export default EmployeeList;
