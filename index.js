//jshint esversion:8
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const api = require("./userApi.js");
const markdown = require("./generateMarkdown");
const fileName = "README.md";
const path = require('path');

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
        type: "input",
        name: "faq",
        message: "Are Readme files helpful?"
    },

];

function writeToFile(fileName, data) {

    console.log(path.join(process.cwd(), fileName))
    fs.writeFile(fileName, data, function (err) {
        if (err) throw ("You made an Error");
    });
}

function init() {
    return inquirer.prompt(questions)
        .then(function (answers) {


            api.getUser(answers.userName).then(function (data) {
                let newUser = data;
                console.log(newUser.data);
                let userMdown = markdown(newUser.data, answers);
                writeToFile("README.md", userMdown);
                console.log("Success!");
            });

        })
        .catch(function (err) {
            console.log(err);

        });

}

init();


