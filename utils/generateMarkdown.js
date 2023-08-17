// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, color) {
  return `[![License](https://img.shields.io/badge/${license}-${color}.svg)]`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return (
    renderLicenseBadge(data.License, data.color) +
    `
  
  # ${data.Title}
  
  ## Table of Contents
  [Purpose](#Purpose) <br>
  [Build](#Build) <br>
  [Contributors](#Contributors) <br>
  [Testing](#Testing) <br>
  [Contact Us](#Contact) <br>
  
  ## Purpose:
  ${data.Purpose}

  ## Build: 
  ${data.Build}

  ## Contributors: 
  ${data.Contributors}

  ## Testing: 
  ${data.Testing}

  ## Contact! 
  Feel free to reach us at ${data.Email} or find us at Github at ${data.Github_account}`
  );
}

module.exports = generateMarkdown;
