const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// function promptUser() {
//   return inquirer.prompt([
//       {
//         type: "checkbox",
//         message: "What is your role in the company?",
//         name: "stack",
//         choices: ["Manager", "Employee", "Intern"]
//       }
//     ]).
//     then(answers => {
//         console.log("Success!");
//         return answers;
//       });
// }

// async function init(){
//   try{
//     const answers = await promptUser();
//     console.log(answers.stack);
//   } catch (error) {
//     console.error(error);
//   }
// }

// // promptUser();
// init();

const Engineer1 = new Engineer("Jordan", 26, "Jordan@hotmial.com", "JordanCley");
const Intern1 = new Intern("Brandon", 24, "dan@hotmial.com", "BrandonCley");
const Manager1 = new Manager("Thomas", 35, "geee@gee.com", "GeeWilks");

Intern1.getName("Bob");
Engineer1.getRole();
Manager1.getRole();
 console.log(Engineer1.email);
 console.log(Intern1.name);
 console.log(Manager1.title);