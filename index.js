// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Import module created in generateMarkdown.js project to generate the README template
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
        type: `checkbox`,
        message: "Please click all that apply:",
        choices: ['https://github.com/SBoudrias/Inquirer.js', 'Starter code provided by: https://git.bootcampcontent.com/new-brunswick/UNB-VIRT-FSF-PT-01-2023-U-LOLC/','https://gist.github.com/ulises-jeremias/ebcacbc50c64d4e04bc8b161e2fa44a9'],
          
    },
    {
        name: `License`,
        type: `list`,
        message: "Choose your license:",
        choices: [`Apache`,`Eclipse`,`GNU`,`MIT`]
            // switch () {
            //         case 'Apache':
            //             return += ("[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
            //             break;
            //         case 'Eclipse':
            //             return += ("[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)");
            //             break;
            //         case 'GNU':
            //             return += ("[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)");
            //             break;
            //         case 'MIT':
            //             return += ("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
            //             break;
            //         default:
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

