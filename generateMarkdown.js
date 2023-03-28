const fs = require('fs');
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

  ## Tests
  ${answers.Tests}

`;


}
fs.writeFile('readme.md', generateReadme, err);

console.log (generateReadme)

module.exports= generateReadme;
