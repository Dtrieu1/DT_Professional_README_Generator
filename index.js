// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
    default: "Not Provided",
  },
  {
    type: "input",
    message: "Description/Usage on building this project?",
    name: "Description",
    default: "Not Provided",
  },
  {
    type: "input",
    message: "What needs to be installed in order to proceed on this build?",
    name: "Build",
    default: "Not Provided",
  },
  {
    type: "list",
    message: "Which license are you using?",
    name: "License",
    choices: [
      "License-Apache_2.0",
      "License-Boost_1.0",
      "License-BSD_3--Clause",
    ],
    default: "Not Provided",
  },
  {
    type: "list",
    message: "What color do you want the license to be?",
    name: "color",
    choices: ["blue", "lightblue", "orange"],
    default: "Not Provided",
  },
  {
    type: "input",
    message: "Any other contributors who supported this?",
    name: "Contributors",
    default: "Not Provided",
  },
  {
    type: "input",
    message: "Any steps that we should be aware of when teting?",
    name: "Testing",
    default: "Not Provided",
  },
  {
    type: "input",
    message: "What email should they use to contact you if you have any questions?",
    name: "Email",
    default: "Not Provided",
  },
  {
    type: "input",
    name: "Github_account",
    message: "What is your Github account?",
    default: "Not Provided",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log(`${fileName} created!`)
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("testReadme.md", answers);
  });
}

// Function call to initialize app
init();
