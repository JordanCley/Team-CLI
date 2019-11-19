const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const generateHTML = require("./generateHTML.js");
const questions = require("./lib/questions.js");

let htmlIntern = "";
let htmlEngineer = "";
let htmlManager = "";

// COMBINING ALL TEMPLATE HTML STRINGS INTO ONE TO CREATE INDEX.HTML
function generateFinal(){
  const combinedHTML = generateHTML.headerHtml + htmlEngineer + htmlIntern + htmlManager + generateHTML.footerHtml;
  fs.writeFile('./output/team.html', combinedHTML, (err) => {
    if(err) throw err;
    console.log("team.html was created");
  })
}

// PROMPTING USER FOR INPUT USING INQUIRER
function promptUser() {
  return inquirer.prompt(questions).then(answers => {
    // IF USER SELECTS ENGINEER, INSTANTIATE ENGINEER OBJECT
    if(answers.title == 'Engineer'){
      let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      engineer.getRole();
      htmlEngineer += generateHTML.generateEngineer(answers);
      // IF USER SELECTS INTERN, INSTANTIATE INTERN OBJECT
    } if(answers.title == 'Intern'){
      let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      intern.getRole();
      htmlIntern += generateHTML.generateIntern(answers);
     // IF USER SELECTS MANAGER, INSTANTIATE MANAGER OBJECT
    } if(answers.title == 'Manager'){
      let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      manager.getRole();
      htmlManager += generateHTML.generateManager(answers);
    }
      console.log("Success!");
      return answers;
      });
}

// ASYNC INIT FUNCTION
async function init(){
  try{
    // ASSIGNING INPUT TO ANSWERS
    const answers = await promptUser();
    // IF USER SELECTS TO ADD ANOTHER MEMBER RECALL INIT
    if(answers.addMember){
      init();
    } else {
      // CALLING FINAL HTML TO BE WRITTEN
      generateFinal();
    }
  } catch (error) {
    console.error(error);
  }
}


init();

