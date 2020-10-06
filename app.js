const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// added empty arrays for data to be pushed into
const teamMembers = [];
const idArray = [];

function mainMenu() {
  function createManager() {
    console.log("Please build your team");
    inquirer
      .prompt([
        {
          // fill in more questions using this pattern
          type: "input",
          name: "managerName",
          message: "What is your manager's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a name";
          },
        },
      ])
      .then((answer) => {
        const manager = new Manager(answer.id);
        teamMembers.push(manager);
        idArray.push(answer.managerId);
        createEngineer();
      });
  }
  createManager();

  // Write code to use inquirer to gather information about the development team members,
  // and to create objects for each team member (using the correct classes as blueprints!)

  function createEngineer() {
    console.log("Pease build your team");
    inquirer
      .prompt([
        {
          // fill in more questions using this pattern
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a name";
          },
        },
      ])
      .then((answer) => {
        const engineer = new Engineer(answer.id);
        teamMembers.push(engineer);
        idArray.push(answer.engineerId);
        createIntern();
      });
  }

  function createIntern() {
    console.log("Pease build your team");
    inquirer
      .prompt([
        {
          // fill in more questions using this pattern
          type: "input",
          name: "internName",
          message: "What is your intern's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a name";
          },
        },
      ])
      .then((answer) => {
        const intern = new Intern(answer.id);
        teamMembers.push(intern);
        idArray.push(answer.internId);
        // call function here that fires next inquirer prompt
        buildTeam();
        // After the user has input all employees desired, call the `render` function (required
        // above) and pass in an array containing all employee objects; the `render` function will
        // generate and return a block of HTML including templated divs for each employee!
      });
    function buildTeam() {
      fs.writeFile(outputPath, render, "utf-8", function (err) {
        if (err) throw err;
        // passed in outputPath
        console.log(outputPath);
      });
    }
  }
}

// Your writeFile call will take three arguments. the outputPath, a call to the render function you imported on line 11 (passing in the array of team members), and then "utf-8"

mainMenu();

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
