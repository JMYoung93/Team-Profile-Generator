const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./templates/main.js');

const teamMembers = [];

let manager;

function appWrap() {
function managerData(){
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Who is the Manager?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }]).then(managerAnswers => {
            manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.officeNumber);
            teamMembers.push(manager)
            console.log('Next we will get employee information.')
            newEmployeeData()
            console.log(teamMembers)
        })
    
};


function newEmployeeData(){
    inquirer.prompt([
        {
            type: "list",
            message: "What is this employee's position?",
            name: "employeeRole",
            choices: ["Intern", "Engineer"]
        },
        {
            type: "input",
            message: "Employee's name?",
            name: "employeeName"
        },
        {
            type: "input",
            message: "What is the employee's id?",
            name: "employeeId"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "employeeEmail"
        },
        {
            type: "input",
            message: "What is the Engineer's github link?",
            name: "github",
            when: (userInput) => userInput.employeeRole === "Engineer"
        },
        {
            type: "input",
            message: "What is the Intern's School?",
            name: "school",
            when: (userInput) => userInput.employeeRole === "Intern"
        },
        {
            type: "confirm",
            name: "newEmployee",
            message: "Would you like to add another member to your team?"
        },
    ]).then(answers => {

        if (answers.employeeRole === "Intern") {
             employee = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school);
            teamMembers.push(employee);
            console.log(employee)
        } else if (answers.employeeRole === "Engineer") {
            engineer1 = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github);
            teamMembers.push(engineer1)
            console.log(engineer1)
        }
        if (answers.newEmployee === true) {
          newEmployeeData()
        }
        else {
            //==================
            //renderHTML
            //==================
     
            buildTeam()
        
        }})
       function buildTeam() {
                // Create the output directory if the dist path doesn't exist
                if (!fs.existsSync(DIST_DIR)) {
                  fs.mkdirSync(DIST_DIR);
                }
                fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
              }
  
}
managerData();
}

appWrap();