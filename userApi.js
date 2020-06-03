//jshint esversion:8
const axios = require("axios");

const api = {
    getUser(userName) {
        return axios.get(`https://api.github.com/users/${userName}`);
    }
};

module.exports = api;