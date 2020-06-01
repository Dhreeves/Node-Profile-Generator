//jshint esversion:8
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const api = require("userApi");
const markdown = require("generateMarkdown");
const filename = "README.md";

const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },

    {
        type: "input",
        name: "title",
        message: "What is the Project Title?",

    },

    {
        type: "input",
        name: "description",
        message: "Write a description of your Project. ",
    },

    {
        type: "input",
        name: "installation",
        message: "What are the steps to install your project?",
    },

    {
        type: "input",
        name: "usage",
        message: "Provide usage info.",
    },

    {
        type: "input",
        name: "license",
        message: "What license would like to use?"
    },

    {
        type: "input",
        name: "contributor",
        message: "List your contributors."
    },

    {
        type: "input",
        name: "tests",
        message: "Add test info."
    },

    {
        type: "editor",
        name: "faq",
        message: "Add FAQ to text editor and save."
    },

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw "You made an Error";
    });
}

function init() {
    return inquirer.prompt(questions)
        .then(function (answers) {
            markdown(answers);
            const userMdown = markdown(answers);
            api.getUser(answers.username);
            writeToFile(`${answers.fileName}.md`, userMdown);
            console.log("Success!");
        })
        .catch(function (err) {
            console.log(err);

        });

}

init();