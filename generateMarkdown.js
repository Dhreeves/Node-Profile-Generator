//jshint esversion:8
function generateMarkdown(data) {
    return `
   ![GitHub Activity](https://img.shields.io/github/commit-activity/m/dhreeves/Node-Profile-Generator?style=flat-square)
  
   
  # ${data.userName}  
  # ${data.title}
  * ${data.description}
  ## __Table of Contents__  
  * [Installation](#installation)               
  * [Usage](#usage)                    
  * [License](#license)                      
  * [Contributor](#contributor)                 
  * [Test](#test)
  * [faq](#faq)    
  ## __Installation__ :               
  * ${data.installation}
  ## __Usage__ :                   
  * ${data.usage}
  ## __License__ :                    
  * ${data.license}
  ## __Contributor__ :              
  * ${data.contributor}
  ## __Test__ :                      
  * ${data.tests}
  ## __FAQ__ :                      
  * ${data.faq}
  ## Team Members
<img align="left" src="${res[0].data.avatar_url}" width=96> &nbsp;${res[0].data.name} <br>&nbsp;<${data.uEmail}><br>&nbsp;<${res[0].data.location}>
<br>
`;
}

module.exports = generateMarkdown;