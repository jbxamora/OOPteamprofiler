const Manager = require("./staff/Manager.js");
const Engineer = require("./staff/Engineer.js");
const Intern = require("./staff/Intern.js")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Team = [];

function createTeam () {
    inquirer.prompt([{
        type: "list",
        message: "What type of employee are you adding to the team?"
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "Cancel"]
    }]).then(function (userInput) {
        switch(userInput.addEmployeePrompt) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
        }
    })
}