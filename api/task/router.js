// build your `/api/tasks` router here
// build your `/api/resources` router here
const express = require("express");

const router = express.Router();

const Tasks = require("./model");

router.post("/", (req, res) => {
  const body = req.body;
  if (!body.task_description) {
    res.status(400);
  }
  Tasks.postTask(body)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", (req, res) => {
  Tasks.getAll()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
