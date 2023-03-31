// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Import module created in generateMarkdown.js project to generate the README template
const generateReadme = require('./generateMarkdown');

// Array of questions for user input into the README.md
inquirer
.prompt ([
    {
        name: `title`,
        type: `input`,
        message: "What is the title of your project?"
    
    },

    {
        name: `description`,
        type: `input`,
        message: "Provide details of the project?"
    
    },
    {
        name: `installation`,
        type: `input`,
        message: "How do you install this application?"
    
    },
    {
        name: `usage`,
        type: `input`,
        message: "What is this application used for?"
    
    },
    {
        name: `contribution`,
        type: `checkbox`,
        message: "Please click all that apply:",
        choices: ['https://github.com/SBoudrias/Inquirer.js', 'Starter code provided by: https://git.bootcampcontent.com/new-brunswick/UNB-VIRT-FSF-PT-01-2023-U-LOLC/', 'https://gist.github.com/ulises-jeremias/ebcacbc50c64d4e04bc8b161e2fa44a9'],
         
    },
    {
        name: `license`,
        type: `list`,
        message: "Choose your license:",
        choices: [`Apache`,`Eclipse`,`GNU`,`MIT`],

    },

  ])


.then((answers) => {
 const readMe = generateReadme (answers)
    // // Write the answers to the README.md
    fs.writeFile('README.md', readMe, (err) =>{
    if (err) {
    
        console.log ("There's been an error");
    } 
    else{
        console.log('README.md created!');
    }
  
  });



});




// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

