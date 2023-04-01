// // Renders the license badge when user makes a choice or defaults to empty string
function renderLicenseBadge(license) {
 switch(license) {
    case'Apache':
        return "[![License Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";

    case 'Eclipse':
        return "[![License Eclipse](https://img.shields.io/badge/License-EPL%201.0-red.svg)]";

    case 'GNU':
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]";

    case 'MIT':
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";

    default:
      return '';
 }

}

// // A function that renders the license link when user makes a choice or defaults to an empty string
function renderLicenseLink(license) {
    switch(license) {
       case'Apache':
           return "[![License: Apache](https://opensource.org/licenses/Apache-2.0)]";
   
       case 'Eclipse':
           return "[![License: Eclipse](https://opensource.org/licenses/EPL-1.0)]";
   
       case 'GNU':
           return "[![License: GPL v3](http://www.gnu.org/licenses/gpl-3.0)]";
   
       case 'MIT':
           return "[![License: MIT](https://opensource.org/licenses/MIT)]";
   
        default:
          return '';
    }
}


// Generates Markdown for the README.md
function generateReadme(answers){
    const licenseBadge = renderLicenseBadge(answers.license);
    const licenseLink = renderLicenseLink(answers.license)


  return `

  # ${answers.title}

  ${licenseBadge}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

    
  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Questions
  ${answers.questions}
  ${answers.questionsTwo}

  ## Credits
  ${answers.credits}

  ## License
  ${answers.license}
  ${licenseLink}

`;

}

module.exports= generateReadme;
