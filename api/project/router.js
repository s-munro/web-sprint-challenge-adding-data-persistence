// build your `/api/projects` router here
// build your `/api/resources` router here
const express = require("express");

const router = express.Router();

const Projects = require("./model");

router.post("/", (req, res) => {
  const body = req.body;
  if (!body.project_name) {
    res.status(400);
  }
  Projects.postProject(body)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", (req, res) => {
  Projects.getAll()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
