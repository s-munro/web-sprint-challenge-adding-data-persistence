// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
  getAll,
  postTask,
};

function getAll() {
  return db("tasks");
}

function postTask(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => {
      return db("tasks").where("task_id", id);
    });
}
