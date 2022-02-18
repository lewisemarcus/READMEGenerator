const inquirer = require('inquirer')

const questions = [
  {
    type: "number",
    name: "children_count",
    message: "How many children do you have?",
  },
  {
    type: "input",
    name: "first_child_name",
    message: "What is the eldest child's name?",
  },
  {
    type: "confirm",
    name: "is_finished",
    message: "Are you done?",
  },
];

function getAnswers() {
  return inquirer.prompt(questions).then((answers) => {
    if (answers.is_finished) {
      return answers;
    } else {
      return getAnswers();
    }
  });
}

getAnswers()
  .then(console.log)
  .catch((error) => {});