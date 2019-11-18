const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your team member?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is their email address?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is their id?'
  },
  {
    type: 'checkbox',
    name: 'title',
    message: 'What is their title?',
    choices: ['Manager', 'Engineer', 'Intern'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is their github username?',
    when: function(answers){
      return answers.title == 'Engineer';
    }
  },
  {
    type: 'input',
    name: 'school',
    message: 'What school are they from?',
    when: function(answers){
      return answers.title == 'Intern';
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is their office number?',
    when: function(answers){
      return answers.title == 'Manager';
    }
  },
  {
    type: 'confirm',
    name: 'addMember',
    message: 'Add another team member?',
    default: true
  }
]

function promptUser() {
  return inquirer.prompt(questions).then(answers => {
    if(answers.title == 'Engineer'){
      let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      engineer.getRole();
      console.log(engineer);

    } if(answers.title == 'Intern'){
      let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      intern.getRole();
      console.log(intern);

    } if(answers.title == 'Manager'){
      let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      manager.getRole();
      console.log(manager);
    }
      console.log("Success!");
      return answers;
      });
}

async function init(){
  try{
    const answers = await promptUser();
    if(answers.addMember){
      init();
    }
    
    // console.log(answers);
  } catch (error) {
    console.error(error);
  }
}

// promptUser();
init();

// const Engineer1 = new Engineer("Jordan", 26, "Jordan@hotmial.com", "JordanCley");
// const Intern1 = new Intern("Brandon", 24, "dan@hotmial.com", "BrandonCley");
// const Manager1 = new Manager("Thomas", 35, "geee@gee.com", "GeeWilks");

// Intern1.getName("Bob");
// Engineer1.getRole();
// Manager1.getRole();
//  console.log(Engineer1.email);
//  console.log(Intern1.name);
//  console.log(Manager1.title);