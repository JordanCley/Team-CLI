const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
let htmlIntern = "";
let htmlEngineer = "";
let htmlManager = "";


// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

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

function generateEngineer(answers) {
  return `
  <div class="card bg-dark mb-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title text-white text-center">${answers.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted text-center">${answers.title}</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item">
        Email: <a href="#" class="card-link">${answers.email}</a>
      </li>
      <li class="list-group-item">
        Github: <a href="https://github.com/${answers.github}" class="card-link">${answers.github}</a>
      </li>
    </ul>
  </div>
</div>

`
};

function generateIntern(answers) {
  return `
  <div class="card bg-dark mb-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title text-white text-center">${answers.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted text-center">${answers.title}</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item">
        Email: <a href="#" class="card-link">${answers.email}</a>
      </li>
      <li class="list-group-item">
        School: ${answers.school} 
      </li>
    </ul>
  </div>
</div>

`
};

function generateManager(answers){
  return `
  <div class="card bg-dark mb-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title text-white text-center">${answers.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted text-center">${answers.title}</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item">
        Email: <a href="#" class="card-link">${answers.email}</a>
      </li>
      <li class="list-group-item">
        Office Number: ${answers.officeNumber}
      </li>
    </ul>
  </div>
</div>

`
}

const headerHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Main</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="jumbotron">
      <h1 class="display-2 text-center">Engineering Team</h1>
    </div>

    <div class="card-deck" style="width: 80rem; margin: auto;">`;

    const footerHtml = `</div>

    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
    </body>
    </html>`;

function generateFinal(){
  const combinedHTML = headerHtml + htmlEngineer + htmlIntern + htmlManager + footerHtml;
  fs.writeFile('./output/team.html', combinedHTML, (err) => {
    if(err) throw err;
    console.log("team.html was created");
  })
  // console.log(combinedHTML);
}

function deleteFiles(){
  fs.unlink('./templates/engineer.html', (err) => {
    if(err) throw err;
    // console.log("engineer.html deleted");
  })
  fs.unlink('./templates/intern.html', (err) => {
    if(err) throw err;
    // console.log("intern.html deleted");
  })
  fs.unlink('./templates/manager.html', (err) => {
    if(err) throw err;
    // console.log("manager.html deleted");
  })
  return;
}

function promptUser() {
  return inquirer.prompt(questions).then(answers => {
    if(answers.title == 'Engineer'){
      let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      engineer.getRole();
      htmlEngineer += generateEngineer(answers);
      // fs.appendFile('./templates/engineer.html', html, (err) => {
      //   if(err) throw err;
      //   console.log("file has been saved");
      // })
      // teamMembers.push(engineer);
      // console.log(teamMembers);

    } if(answers.title == 'Intern'){
      let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      intern.getRole();
      htmlIntern += generateIntern(answers);
     
      // fs.appendFile('./templates/intern.html', html, (err) => {
      //   if(err) throw err;
      //   console.log("file has been saved");
      // })
      // teamMembers.push(intern);
      // console.log(teamMembers);

    } if(answers.title == 'Manager'){
      let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      manager.getRole();
      htmlManager += generateManager(answers);
      // fs.appendFile('./templates/manager.html', html, (err) => {
      //   if(err) throw err;
      //   console.log("file has been saved");
      // })
      // teamMembers.push(manager);
      // console.log(teamMembers);
    }
      console.log("Success!");
      return answers;
      });
}

async function init(){
  try{
    // await deleteFiles();
    const answers = await promptUser();
    if(answers.addMember){
      init();
    } else {
      generateFinal();
    }

    
    
    // await generateFinal();
    // console.log(teamMembers[0].name);
    
    // console.log(answers);
  } catch (error) {
    console.error(error);
  }
}


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