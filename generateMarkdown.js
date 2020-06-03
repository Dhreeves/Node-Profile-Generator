//jshint esversion:8
function generateMarkdown(userData, questionData) {
    return `
   ![GitHub Activity](https://img.shields.io/github/commit-activity/m/dhreeves/Node-Profile-Generator?style=flat-square)
  
   
  # ${userData.login}  
  # ${questionData.title}
  * ${questionData.description}
  ## __Table of Contents__  
  * [Installation](#installation)               
  * [Usage](#usage)                    
  * [License](#license)                      
  * [Contributor](#contributor)                 
  * [Test](#test)
  * [faq](#faq)    
  ## __Installation__ :               
  * ${questionData.installation}
  ## __Usage__ :                   
  * ${questionData.usage}
  ## __License__ :                    
  * ${questionData.license}
  ## __Contributor__ :              
  * ${questionData.contributor}
  ## __Test__ :                      
  * ${questionData.tests}
  ## __FAQ__ : 
 __Are README files helpful?__                      
  * ${questionData.faq}
  ## Team Members
<img align="left" src="${userData.avatar_url}" width=96> &nbsp;${userData.name} <br>&nbsp;<${userData.email}><br>&nbsp;<${userData.location}>
<br>
`;
}

module.exports = generateMarkdown;