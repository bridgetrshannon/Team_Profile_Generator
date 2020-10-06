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
        {
          type: "input",
          name: "managerId",
          message: "What is your manager's ID?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an ID";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is your manager's email?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an email";
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is your manager's office number?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an office number";
          },
        },
      ])
      .then((answer) => {
        const manager = new Manager(
          answer.managerName,
          answer.managerId,
          answer.managerEmail,
          answer.managerOfficeNumber
        );
        teamMembers.push(manager);
        idArray.push(answer.managerId);
        // add function here for nextTeamMember
        nextTeamMember();
      });
  }
  createManager();

  function nextTeamMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamChoice",
          message: "Which team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add anymore team members",
          ],
        },
      ])
      .then((answer) => {
        console.log(answer.teamChoice);
        if (answer.teamChoice === "Engineer") {
          createEngineer();
        }
        if (answer.teamChoice === "Intern") {
          createIntern();
        }
        if (answer.teamChoice === "I don't want to add anymore team members") {
          fs.writeFile(outputPath, render(teamMembers), "utf-8", function (
            err
          ) {
            if (err) throw err;
            console.log(
              "Your team has been built! Access your roster in the browser"
            );
          });
        }
      });
  }

  function createEngineer() {
    console.log("Please build your team");

    inquirer
      .prompt([
        {
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
        {
          type: "input",
          name: "engineerId",
          message: "What is your engineer's ID?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an ID";
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an email";
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is your engineer's Github?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a Github";
          },
        },
      ])
      .then((answer) => {
        const engineer = new Engineer(
          answer.engineerName,
          answer.engineerId,
          answer.engineerEmail,
          answer.engineerGithub
        );
        teamMembers.push(engineer);
        idArray.push(answer.engineerId);
        nextTeamMember();
      });
  }

  function createIntern() {
    console.log("Please build your team");
    inquirer
      .prompt([
        {
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

        {
          type: "input",
          name: "internId",
          message: "What is your intern's ID?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an ID";
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter an email";
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is your intern's school?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a school";
          },
        },
      ])
      .then((answer) => {
        const intern = new Intern(
          answer.internName,
          answer.internId,
          answer.internEmail,
          answer.internSchool
        );
        teamMembers.push(intern);
        idArray.push(answer.internId);
        //function that asks user which team member they'd like to add, if any
        nextTeamMember();
      });
  }
}
mainMenu();
