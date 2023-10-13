// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `[License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ## License
  This project is licensed under the [${license}](LICENSE) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contributing, tests, github, email } = data;
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);

  return `
# ${title}
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [${licenseLink}](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

${licenseSection}

## Contributing

${contributing}

## Tests

${tests}

## Questions

For questions or additional information, contact the project creator:
- GitHub: [${github}](https://github.com/${github})
- Email: ${email}

${licenseBadge}
`;
}

module.exports = generateMarkdown;
