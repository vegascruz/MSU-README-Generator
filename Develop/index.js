// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//this is a file created to generate the markdown code
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
      },
      {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
      },
      {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
      },
      {
        type: 'input',
        name: 'problemSolved',
        message: 'What problem does it solve?',
      },
      {
        type: 'input',
        name: 'thingsLearned',
        message: 'What did you learn?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
      },
      {
        type: 'input',
        name: 'usageInformation',
        message: 'What is the usage instructions for your project?',
      },
      {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Who are the contributors of your project?',
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the test instructions for your website?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license is used for your website?',
        choices:['MIT', 'GPL', 'BSD']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileContent) {
    return new Promise((res, rej) => 
        fs.writeFile('./professionalREADME.md', fileContent, function(err){
            if(err){
                console.log(err);
            }else{
                console.log('You have now successfully created a README.md file!');
            }
        }       
    ))
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data){
            console.log(data);
        var fileContent = generateMarkdown(data);
        writeToFile(fileContent);
        });
}

// Function call to initialize app
init();
