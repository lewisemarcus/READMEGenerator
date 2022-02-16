// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if () {

  // }
  // else return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if () {

  // }
  // else return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if () {

  // }
  // else return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ` + capitalizeFirstLetter(data.title) + ` \r\n
  ![License: ${data.license}](https://img.shields.io/badge/License-` + encodeURIComponent(data.license.trim()) +`-informational) \r\n
  ## Description \r\n
  ${data.description} \r\n
  ## Table of Contents \r\n
  - [Installation](#installation) \r\n
  - [Usage](#usage)\r\n
  - [Credits](#credits)\r\n
  - [License](#license)\r\n
  ## Installation \r\n
  \`\`\` \r\n \r\n ${data.instructions} \r\n \r\n \`\`\` \r\n
  ## Usage \r\n
  \`\`\` \r\n \r\n ${data.usage} \r\n \r\n \`\`\` \r\n
  ## Credits \r\n
  ${data.contributors} \r\n
  ## License \r\n
  

  `
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = {
  generateMarkdown,
  capitalizeFirstLetter
}  
