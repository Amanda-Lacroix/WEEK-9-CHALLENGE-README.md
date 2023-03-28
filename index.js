// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// Import module created in generateMarkdown.js projectto generate the README template
const generateReadme = require('./generateMarkdown');

// Array of questions for user input into the README.md
inquirer
.prompt ([
    {
        name: `Title`,
        type: `input`,
        message: "What is the title of your project?"
    
    },

    {
        name: `License`,
        type: `list`,
        message: "Choose your license:",
        choices: [`Apache`,`Eclipse`,`GNU`,`MIT`]
    
    },
 
    {
        name: `Description`,
        type: `input`,
        message: "Provide details of the project?"
    
    },
    {
        name: `Installation`,
        type: `input`,
        message: "How do you install this application?"
    
    },
    {
        name: `Usage`,
        type: `input`,
        message: "What is this application used for?"
    
    },
    {
        name: `Contibution`,
        type: `input`,
        message: "Outline resources used:"
    
    },
    {
        name: `Tests`,
        type: `input`,
        message: "?????:"
    
    },
 
  ])

 
// // Write the README.md
prompt,(answers)=> {
fs.writeFile('README.md', generateReadme, answers)};



// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

