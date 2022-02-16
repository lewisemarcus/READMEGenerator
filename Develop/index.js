// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project? ",
    "Please enter a description of your project (press enter on an empty line to continue): ",
    "Please enter the installation instructions (press enter on an empty line to continue): ",
    "Please enter the usage information (press enter on an empty line to continue): ",
    "Please choose a license for your application (press enter to continue): ",
    "Please enter the test instructions (press enter on an empty line to continue): ",
    "Please enter your first and last name, your GitHub username, and your email address (press enter to continue): ",
    "Please enter a list of contributors, with first and last name followed by their GitHub username (press enter on an empty line to continue): ",


];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //Empty previous README file.
    fs.writeFile(fileName.path, '', function () {console.log('Done!')})
    //Begin adding new data to README file.
    fileName.write(`# ${data.title} \r\n`)
    fileName.write(`## Description \r\n`)
    fileName.write(`${data.description} \r\n`)
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'editor',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'editor',
                message: questions[2],
                name: 'isntructions',
            },
            {
                type: 'editor',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'list',
                message: questions[3],
                name: 'license',
                choices: ["Academic Free License v3.0",
                    "Apache license 2.0",
                    "Artistic license 2.0",
                    "Boost Software License 1.0",
                    "BSD 2-clause \"Simplified\" license",
                    "BSD 3-clause \"New\" or \"Revised\" license",
                    "BSD 3-clause Clear license",
                    "Creative Commons license family",
                    "Creative Commons Zero v1.0 Universal",
                    "Creative Commons Attribution 4.0",
                    "Creative Commons Attribution Share Alike 4.0",
                    "Do What The F*ck You Want To Public License",
                    "Educational Community License v2.0",
                    "Eclipse Public License 1.0",
                    "Eclipse Public License 2.0",
                    "European Union Public License 1.1",
                    "GNU Affero General Public License v3.0",
                    "GNU General Public License family",
                    "GNU General Public License v2.0",
                    "GNU General Public License v3.0",
                    "GNU Lesser General Public License family",
                    "GNU Lesser General Public License v2.1",
                    "GNU Lesser General Public License v3.0",
                    "ISC",
                    "LaTeX Project Public License v1.3c",
                    "Microsoft Public License",
                    "MIT",
                    "Mozilla Public License 2.0",
                    "Open Software License 3.0",
                    "PostgreSQL License",
                    "SIL Open Font License 1.1",
                    "University of Illinois/NCSA Open Source License",
                    "The Unlicense",
                    "zLib License"
                ]
            }
        ])
        .then(function (data) {
            const readMe = fs.createWriteStream(`README.md`, {
                flags: 'a'
            })
            writeToFile(readMe, data)
        })
}
// Function call to initialize app
init();
