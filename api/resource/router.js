// build your `/api/resources` router here
const express = require("express");

const router = express.Router();

const Resources = require("./model");

router.post("/", (req, res) => {
  const body = req.body;
  if (!body.resource_name) {
    res.status(400).json({ message: "missing required fields" });
  }
  Resources.postResource(body)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", (req, res) => {
  Resources.getAll()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
