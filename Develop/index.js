// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project? ",
    "Please enter a description of your project (be detailed and remember to save before exiting!): ",
    "Please enter the installation instructions (please allow one empty line space between each instruction, and remember to save before exiting!): ",
    "Please enter the usage information (please allow one space between each example of usage, and remember to save before exiting!): ",
    "Please choose a license for your application: ",
    "Please enter the test instructions (please allow one empty line space between each instruction, and remember to save before exiting!): ",
    "Please enter your first and last name, your GitHub username, and your email address (same line): ",
    "Please enter a list of contributors, with first and last name followed by their GitHub username (please allow one empty line space between each contributor, and remember to save before exiting!): "];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //Empty previous README file.
    fs.writeFile(fileName.path, '', function (error) {
        error ? console.error(error) : console.log('Previous README cleared... ')
    })
    //Begin adding new data to README file.
    //console.log(generateMarkdown.generateMarkdown(data))
    fileName.write(generateMarkdown.capitalizeFirstLetter(`# ${data.title}`) + ` \r\n`)
    fileName.write(`## Description \r\n`)
    fileName.write(`${data.description} \r\n`)
    fileName.write(`## Instructions \r\n`)
    fileName.write(` \`\`\` \r\n \r\n ${data.instructions} \r\n \r\n \`\`\` \r\n`)
    fileName.write(`## Usage \r\n`)
    fileName.write(` \`\`\` \r\n \r\n ${data.usage} \r\n \r\n \`\`\` \r\n`)
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title'
            },
            {
                type: 'editor',
                message: questions[1],
                name: 'description'
            },
            {
                type: 'editor',
                message: questions[2],
                name: 'instructions'
            },
            {
                type: 'editor',
                message: questions[3],
                name: 'usage'
            },
            {
                type: 'list',
                message: questions[4],
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
            },
            {
                type: 'editor',
                message: questions[5],
                name: 'test'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'firstLastUser'
            },
            {
                type: 'editor',
                message: questions[7],
                name: 'contributors'
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
