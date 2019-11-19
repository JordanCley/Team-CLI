const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your team member?"
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?"
  },
  {
    type: "input",
    name: "id",
    message: "What is their id?"
  },
  {
    type: "checkbox",
    name: "title",
    message: "What is their title?",
    choices: ["Manager", "Engineer", "Intern"]
  },
  {
    type: "input",
    name: "github",
    message: "What is their github username?",
    when: function(answers) {
      return answers.title == "Engineer";
    }
  },
  {
    type: "input",
    name: "school",
    message: "What school are they from?",
    when: function(answers) {
      return answers.title == "Intern";
    }
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is their office number?",
    when: function(answers) {
      return answers.title == "Manager";
    }
  },
  {
    type: "confirm",
    name: "addMember",
    message: "Add another team member?",
    default: true
  }
];

module.exports = questions;