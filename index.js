const inquirer = require('inquirer');
const fs = require('fs');
const licenseBadge = require('./license.js');

const renderREADME = (answers) => {
    console.log(answers.license)
    const readme = `# ${answers.title}
${licenseBadge(answers.license)}
## Table of Contents
* [Description](#Description) 
* [Installation](#Installation)
* [Usage](#Usage)  
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [GitHub](#GitHub)
* [E-mail](#E-mail)
## Description
${answers.description} 
## Installation
${answers.installation}
## Usage
${answers.usage}
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## License
${answers.license}
## GitHub
GitHub: (https://github.com/${answers.gitHub})
## E-mail
* Contact me with questions: email: (mailto:${answers.email})
`
    fs.writeFile('README.md', readme, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Success');
        }
    });
};

const init = () => {
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is a description for your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation steps?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How should your project be used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please list any contributors to your project.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Which of the following license did you use in your project?',
        name: 'license',
        choices: ['MIT', 'GNU General Public License 3.0', 'Apache License 2.0'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email so users may reach you with additional question?',
        name: 'email',
    },
]).then(renderREADME);
};

init();