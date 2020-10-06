// TODO: Write code to define and export the Employee class
const Employee = require("../lib/Employee");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.export = Employee;

// // The project must prompt the user to build an engineering team. An engineering team consists of a manager, and any number of engineers and interns.
// addManager();
// {
//   inquirer
//     .prompt([
//       {
//         type: "confirm",
//         name: "choice",
//         message: "To build your team, add a manager",
//       },
//     ])
//     .then((val) => {
//       if (val.choice) {
//         // if confirm to add manager go to addEngineer()
//         this.addEngineer();
//       } else {
//         // else go back to addManager
//         this.addManager();
//       }
//     });
// }

// addEngineer();
// {
//   inquirer
//     .prompt([
//       {
//         type: "confirm",
//         name: "choice",
//         message: "Would you like to add an engineer?",
//       },
//     ])
//     .then((val) => {
//       //   if confirm to add engineer, ask if they want another one
//       if (val.choice) {
//         this.addEngineer();
//       } else {
//         // if they don't want anymore engineers, go to addIntern()
//         this.addIntern();
//       }
//     });
// }

// addIntern();
// {
//   inquirer
//     .prompt([
//       {
//         type: "confirm",
//         name: "choice",
//         message: "Would you like to add an Intern?",
//       },
//     ])
//     .then((val) => {
//       //   if confirm to add Intern, ask if they want another one
//       if (val.choice) {
//         this.addIntern();
//       } else {
//         //   if they don't want anymore interns, go to addIntern()
//         this.buildTeam();
//       }
//     });
// }
