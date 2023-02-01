// Class
const Manager = require("./staff/Manager");
const Engineer = require("./staff/Engineer");
const Intern = require("./staff/Intern");
// Dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// Paths
const OUTPUT = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT, "team.html");
const generateTeam = require("./outpath/template");
new Manager()
// Create an empty array to hold team data
const team = [];

// Create a team
function createTeam() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What type of employee are you adding to the team?",
                name: "addEmployeePrompt",
                choices: ["Manager", "Engineer", "Intern", "Finish"],
            },
        ])
        .then(function (userInput) {
            switch (userInput.addEmployeePrompt) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Finish":
                    buildHTML();
                    return;
                default:
                return;
            }
        });
}

// Adds a manager class using the prompts
function addManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's Employee ID?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?",
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number",
            },
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNumber
            );
            team.push(manager);
            createTeam();
        });
}
// Creats an engineer class using prompts
function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's Employee ID?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email address?",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub UserName?",
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGithub
            );
            team.push(engineer);
            createTeam();
        });
}
// Creates an intern class using prompts
function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?",
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's Employee ID?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address?",
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school did the intern attend?",
            },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool
            );
            team.push(intern);
            createTeam();
        });
}

// Generate HTML File
function buildHTML() {
    fs.writeFileSync(outputPath, generateTeam(team), "utf-8");
    console.log("team Created!");
}

createTeam();

