// build your server here
const express = require("express");

const db = require("../data/dbConfig");

const server = express();

server.use(express.json());

module.exports = server;
