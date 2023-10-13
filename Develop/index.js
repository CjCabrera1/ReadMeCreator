// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter your project title:',
    },
    {
    type: 'input',
    name: 'projectDescription',
    message: 'Enter your project description:',
    },
    {
    type: 'input',
    name: 'projectInstall',
    message: 'Enter your installation instructions:',
    },
    {
    type: 'input',
    name: 'projectUsage',
    message: 'Enter usage information:',
    },
    {
    type: 'list',
    name: 'projectLicense',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
    type: 'input',
    name: 'projectContributing',
    message: 'Enter contribution guidelines:',
    },
    {
    type: 'input',
    name: 'projectTests',
    message: 'Enter test instructions:',
    },
    {
    type: 'input',
    name: 'projectGitHub',
    message: 'Enter your GitHub username:',
    },
    {
    type: 'input',
    name: 'projectEmail',
    message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error('Error writing to README:', err);
        } else {
          console.log('README.md successfully generated!');
        }
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const {projectTitle, projectDescription, projectInstall, projectUsage, projectLicense, projectContributing, projectTests, projectGitHub, projectEmail} = answers; // Extract answers
        
    const readmeContent = generateReadme({
        title: projectTitle,
        description: projectDescription,
        installation: projectInstall,
        usage: projectUsage,
        license: projectLicense,
        contributing: projectContributing,
        tests: projectTests,
        github: projectGitHub,
        email: projectEmail
    });  // Pass the extracted answers to generateMarkdown
    writeToFile('README.md', readmeContent);
  });

}

// Function call to initialize app
init();
