// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project? ",
    "Please enter a description of your project (be detailed and remember to save before exiting!): ",
    "Please enter the installation instructions, code block markdown ACTIVE (please allow one empty line space between each instruction, and remember to save before exiting!): ",
    "Please enter the usage information, code block markdown ACTIVE (please allow one space between each example of usage, and remember to save before exiting!): ",
    "Please choose a license for your application: ",
    "Please enter the test instructions, code block markdown ACTIVE (please allow one empty line space between each instruction, and remember to save before exiting!): ",
    "Please enter your first and last name, your GitHub username, and your email address (separate each by a comma, no spaces!): ",
    "Are there contributors other than yourself? ",
    "Please enter the contributor's GitHub username, and separate multiple users with commas (no spaces!): "];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //Empty previous README file.
    fs.writeFile(fileName.path, data, function (error) {
        error ? console.error(error) : console.log('Previous README cleared, generating new...\n Success! ')
    })
}
//Prompt Questions
const prompts = [
    {
        type: 'input',
        message: questions[0],
        name: 'title',
        validate: (value) => {
            if (value) return true
            else return ('Please enter a title to continue: ')
        }
    },
    {
        type: 'editor',
        message: questions[1],
        name: 'description',
        validate: (value) => {
            if (value) return true
            else return ('Please enter a description to continue: ')
        }
    },
    {
        type: 'editor',
        message: questions[2],
        name: 'instructions',
        validate: (value) => {
            if (value) return true
            else return ('Please enter installation instructions to continue: ')
        }
    },
    {
        type: 'editor',
        message: questions[3],
        name: 'usage',
        validate: (value) => {
            if (value) return true
            else return ('Please enter usage instructions to continue: ')
        }
    },
    {
        type: 'list',
        message: questions[4],
        name: 'license',
        choices: ["No License",
            "Academic Free v3.0 (afl-3.0)",
            "Apache 2.0 (apache-2.0)",
            "Artistic 2.0 (artistic-2.0)",
            "Boost Software 1.0 (bsl-1.0)",
            "BSD 2--clause \"Simplified\" (bsd-2-clause)",
            "BSD 3--clause \"New\" or \"Revised\" (bsd-3-clause)",
            "BSD 3--clause Clear (bsd-3-clause-clear)",
            "Creative Commons family (cc)",
            "Creative Commons Zero v1.0 Universal (cc0-1.0)",
            "Creative Commons Attribution 4.0 (cc-by-4.0)",
            "Creative Commons Attribution Share Alike 4.0 (cc-by-sa-4.0)",
            "Do What The F*ck You Want To Public (wtfpl)",
            "Educational Community v2.0 (ecl-2.0)",
            "Eclipse Public 1.0 (epl-1.0)",
            "Eclipse Public 2.0 (epl-2.0)",
            "European Union Public 1.1 (eupl-1.1)",
            "GNU Affero General Public v3.0 (agpl-3.0)",
            "GNU General Public family (gpl)",
            "GNU General Public v2.0 (gpl-2.0)",
            "GNU General Publicv3.0 (gpl-3.0)",
            "GNU Lesser General Public family (lgpl)",
            "GNU Lesser General Public v2.1 (lgpl-2.1)",
            "GNU Lesser General Public v3.0 (lgpl-3.0)",
            "ISC (isc)",
            "LaTeX Project Public v1.3c (lppl-1.3c)",
            "Microsoft Public (ms-pl)",
            "MIT (mit)",
            "Mozilla Public 2.0 (mpl-2.0)",
            "Open Software 3.0 (osl-3.0)",
            "PostgreSQL (postgresql)",
            "SIL Open Font 1.1 (ofl-1.1)",
            "University of Illinois/NCSA Open Source (ncsa)",
            "The Unlicense (unlicense)",
            "zLib (zlib)"
        ],
        validate: (value) => {
            if (value) return true
            else return ('Please choose a license before continuing: ')
        }
    },
    {
        type: 'editor',
        message: questions[5],
        name: 'test',
        validate: (value) => {
            if (value) return true
            else return ('Please enter testing instructions before continuing: ')
        }
    },
    {
        type: 'input',
        message: questions[6],
        name: 'firstLastUser',
        validate: (value) => {
            if (value.split(",").length == 4) return true
            else return ('Please enter your first and last name, your username and your email address (please separate each by a comma, no spaces!): ')
        }
    },
    {
        type: 'list',
        message: questions[7],
        name: 'contributorBool',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        message: questions[8],
        name: 'contributors',
        when: (answers) => {
            return answers.contributorBool === 'Yes'
        },
        validate: (value) => {
            if (value) return true
            else return ('Please enter your contributor list separated by commas: ')
        }
    }
]
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(prompts)
        .then(function (data) {
            const readMe = fs.createWriteStream(`README.md`, {
                flags: 'a'
            })
            writeToFile(readMe, generateMarkdown.generateMarkdown(data))
        })
}
// Function call to initialize app
init();
//NOTES:
    //Alternate way to add info to files:
        //Begin adding new data to README file.
        //console.log(generateMarkdown.generateMarkdown(data))
        // fileName.write(generateMarkdown.capitalizeFirstLetter(`# ${data.title}`) + ` \r\n`)
        // fileName.write(`## Description \r\n`)
        // fileName.write(`${data.description} \r\n`)
        // fileName.write(`## Instructions \r\n`)
        // fileName.write(` \`\`\` \r\n \r\n ${data.instructions} \r\n \r\n \`\`\` \r\n`)
        // fileName.write(`## Usage \r\n`)
        // fileName.write(` \`\`\` \r\n \r\n ${data.usage} \r\n \r\n \`\`\` \r\n`)