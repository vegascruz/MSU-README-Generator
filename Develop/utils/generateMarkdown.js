//required modules
const fs = require('fs');
const inquirer = require('inquirer');
const indexFile = require('../index');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  //based on the info received in the console... it will set the badge to a icon link
  if (license == 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license == 'GPL'){
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)'
  } else if (license == 'BSD'){
    badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  } else{
    badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT'){
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  }else if (license === 'GPL'){
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.html'
  } else if (license === 'BSD'){
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
  } else {
    licenseLink = ""
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'None'){
    licenseSection = ''
  } else {
    licenseSection = `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //this is basically a string that will load into the new README file based on 
  //user input
  return `
  # ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  ###  * [Installation](#installation)
  ###  * [Usage](#usageInformation)
  ###  * [Motivation](#motivation)
  ###  * [Why](#why)
  ###  * [Problem Solved](#problemSolved)
  ###  * [Things Learned](#thingsLearned)
  ###  * [Contributors](#contributionGuidelines)
  ###  * [Tests](#testInstructions)
  ###  * [License](#license)
  ###  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usageInformation}

  ## Motivation
  ${data.motivation}

  ## Why?
  ${data.why}

  ## Problem Solved?
  ${data.problemSolved}

  ## Things Learned
  ${data.thingsLearned}

  ## Contributors
  ${data.contributionGuidelines}

  ## Tests
  ${data.testInstructions}

  ## License
  ${data.license}
  
  ## Questions? Feel free to email or message me.
  ### GitHub: https://github.com/${data.github}
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
