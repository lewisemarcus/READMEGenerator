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

function authorFormat(contributors, primeAuth) {
  let users = `` 
  for (let each of contributors) {
    if(each.trim().length == 0) users += ``
    else users += `- [${each}](https://github.com/${each})\r\n\r\n`
  }
  return `- [${primeAuth}](https://github.com/${primeAuth})\r\n\r\n` + users
}

function instructionFormat(instructions, invoke) {
  const pkgManager = instructions[0]
  instructions.shift()
  let instr = `Use the package manager [${pkgManager}] to install ${instructions}.\r\n`
  let install = ``
  for (let each of instructions) {
    install += `${pkgManager} install ${each}\r\n`
  }
  return `${instr}\`\`\`bash\r\n\r\n${install}\r\n# To run:\r\n${invoke}\r\n\r\n\`\`\``
}

function contactInfo(firstLastUser) {
  const userInfo = firstLastUser.split(",")
  return `## Questions
  \r\n- [${capitalizeFirstLetter(userInfo[0])} ${capitalizeFirstLetter(userInfo[1])}](https://github.com/${userInfo[2]}) - Lead Author's GitHub Link
  \r\n- If you would like to email me for further questions, please send one to: <${userInfo[3]}>`
}

function formatWalkthrough(data) {
  if (data.walkthroughBool === "No") return ''
  else return `Here is a link to a video going over the steps to use the application: [${data.title} Demo](${data.walkthrough})\r\n`
}

function formatContribute(contributing) {
  if (contributing.trim() == '') return 'N/A'
  else return `${contributing}\r\n`
}

function formatUsage(usage) {
  let usageList = ``
  if (usage.trim() == '') return 'N/A'
  else {
    for (let each of usage.split(",")) {
      usageList += `${each}\r\n`
    }
    return `\`\`\`js\r\n\r\n${usageList}\r\n\r\n\`\`\``
  } 
}

function formatTests(test) {
  let testList = ``
  if (test.trim() == '') return 'N/A'
  else {
    for (let each of test.split(",")) {
      testList += `${each}\r\n`
    }
    return `\`\`\`js\r\n\r\n${testList}\r\n\r\n\`\`\``
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let authors
  const primeAuth = data.firstLastUser.split(",")[2]
  if (data.authorBool === "Yes") {authors = data.authors.split(",")}
  else {authors = ''}
  let instructions = data.instructions.split(",")
  return `#  ${capitalizeFirstLetter(data.title)}\r\n
  ${renderLicenseBadge(data.license.split("(")[0])}\r\n
  ## Description\r\n
  ${data.description}\r\n
  ## Table of Contents\r\n
  - [Installation](#installation)\r\n
  - [Walkthrough](#walkthrough)\r\n
  - [Usage](#usage)\r\n
  - [Author(s)](#author(s))\r\n
  - [Contributing](#contributing)\r\n
  - [License](#license)\r\n
  - [Questions](#questions)\r\n
  ## Installation\r\n
  ${instructionFormat(instructions, data.invoke)}\r\n
  ## Walkthrough\r\n
  ${formatWalkthrough(data)}
  ## Usage
  \r\n${formatUsage(data.usage)}\r\n
  ## Author(s)\r\n
  ${authorFormat(authors, primeAuth)}
  \r\n## Tests
  \r\n${formatTests(data.test)}\r\n
  ## Contributing\r\n 
  ${formatContribute(data.contributing)}
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
