// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") return ''
  else return `![License: ${license}](https://img.shields.io/badge/License-${encodeURIComponent(license.trim())}-informational)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === undefined) return ''
  else {
    const rLicense = license.replace(")", "")
    return `https://opensource.org/licenses/${rLicense}`}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") return ''
  else return `Licensed under the ${license.split("(")[0]}License (the "License"); you may not use this file except in compliance with the License.\r\n
  For more information on the License, please visit:  ${renderLicenseLink(license.split("(")[1])}`
}

function contributorFormat(contributors) {
  let users = ``
  for (let each of contributors) {
    if(each.trim().length == 0) users += ``
    else users += `- [${each}](https://github.com/${each})\r\n\r\n`
  }
  return users
}

function contactInfo(firstLastUser) {
  const userInfo = firstLastUser.split(",")
  return `## Contact
  \r\n- [${capitalizeFirstLetter(userInfo[0])} ${capitalizeFirstLetter(userInfo[1])}](https://github.com/${userInfo[2]})
  \r\n- <${userInfo[3]}>`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let contributors
  if (data.contributorBool === "Yes") {contributors = data.contributors.split(",")}
  else {contributors = ''}
  
  return `#  ${capitalizeFirstLetter(data.title)} \r\n
  ${renderLicenseBadge(data.license.split("(")[0])} \r\n
  ## Description \r\n
  ${data.description} \r\n
  ## Table of Contents \r\n
  - [Installation](#installation) \r\n
  - [Usage](#usage)\r\n
  - [Credits](#credits)\r\n
  - [License](#license)\r\n
  - [Contact](#contact)\r\n
  ## Installation \r\n
  \`\`\` \r\n \r\n ${data.instructions} \r\n \r\n \`\`\` \r\n
  ## Usage \r\n
  \`\`\` \r\n \r\n ${data.usage} \r\n \r\n \`\`\` \r\n
  ## Credits \r\n
  ${contributorFormat(contributors)}
  \r\n## License\r\n
  ${renderLicenseSection(data.license)}\r\n
  ${contactInfo(data.firstLastUser)}\r\n`
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = {
  generateMarkdown,
  capitalizeFirstLetter
}  
