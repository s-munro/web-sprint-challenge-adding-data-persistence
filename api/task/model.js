// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
  getAll,
  postTask,
};

function getAll() {
  return db("tasks as t")
    .join("projects as p", "p.project_id", "t.project_id")
    .select(
      "p.project_id",
      "t.task_completed",
      "t.task_description",
      "t.task_id",
      "t.task_notes",
      "p.project_name",
      "p.project_description"
    );
}

function postTask(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => {
      return db("tasks").where("task_id", id);
    });
}
