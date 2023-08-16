// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    question: 'What is the title of your project?',
    name:'Title',
    default: 'Not Provided'
},
{   type: 'input',
    question: "Purpose or motivation of building this project?",
    name: 'Purpose',
    default: 'Not Provided'},
{   type: 'input',
    question: "What needs to be installed in order to proceed on this build?",
    name: 'Build',
    default: 'Not Provided'},
{   type: 'list',
    question: 'Which license are you using?',
    name: 'License',
    choices: ['License-Apache_2.0', 'License-Boost_1.0','License-BSD_3--Clause'],
},
{   type: 'list',
    question: 'What color do you want the license to be?',
    name: 'color',
    choices: ['blue', 'lightblue', 'orange'],
},
{   type: 'input',
    question: "What email should they use to contact you?",
    name: 'Email',
    default: 'Not Provided'},
{   type: 'input',
    name: 'Github account',
    question: "Github account?",
    default: 'Not Provided'}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>{
        console.log(answers)
    })
}

// Function call to initialize app
init();
