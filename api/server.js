// build your server here
const express = require("express");

const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

server.use(express.json());

server.use("/api/project", projectRouter);
server.use("/api/resource", resourceRouter);
server.use("/api/task", taskRouter);

module.exports = server;
