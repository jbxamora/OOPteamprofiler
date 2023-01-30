const Manager = require("./assets/staff/Manager.js");
const Engineer = require("./assets/staff/Engineer.js");
const Intern = require("./assets/staff/Intern.js")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Team = [];

function createTeam() {
    inquirer.prompt([{
        type: "list",
        message: "What type of employee are you adding to the team?"
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "Cancel"]
    }]).then(function (userInput) {
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
            case "cancel":
                return;
        }
    })
    AddAnother();
}

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's Employee ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number"
        }

    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        Team.push(manager);
        createTeam();
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's Employee ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub UserName?"
        }

    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        Team.push(engineer);
        createTeam();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's Employee ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school did the intern attend?"
        }

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        Team.push(intern);
        createTeam();
    })
}

function AddAnother() {
    inquirer.prompt{
        [
            {
                type: "list",
                name: "addAnother",
                message: "Would you like to add another team member?",
                choices: ["Yes", "No"],
            },
        ]
    }.then(function (answer) {
        if (answer.AddAnother === "Yes") {
            createTeam();
        } else {
            console.log("Creating Team...");
        }
    });
}
