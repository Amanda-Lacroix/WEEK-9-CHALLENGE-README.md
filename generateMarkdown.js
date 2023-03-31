// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 switch(choices) {
    case'Apache':
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";

    case 'Eclipse':
        return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]";

    case 'GNU':
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]";

    case 'MIT':
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";

    default:
 }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(choices) {
       case'Apache':
           return "[![License](https://opensource.org/licenses/Apache-2.0)]";
   
       case 'Eclipse':
           return "[![License](https://opensource.org/licenses/EPL-1.0)]";
   
       case 'GNU':
           return "[![License: GPL v3](http://www.gnu.org/licenses/gpl-3.0)]";
   
       case 'MIT':
           return "[![License: MIT](https://opensource.org/licenses/MIT)]";
   
       default:
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateReadme(answers){
  return `

  # ${answers.Title}

  ## Table of Contents

    
  ## Description
  ${answers.Description}

  ## Installation
  ${answers.Installation}

  ## Usage
  ${answers.Usage}

  ## Contribution
  ${answers.Contribution}

  ## License
  ${answers.License}

`;

}

module.exports= generateReadme;
