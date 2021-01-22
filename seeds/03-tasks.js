exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_description: "task description1",
          task_notes: "task_notes1",
          task_completed: false,
          project_id: 1,
        },
        {
          task_description: "task description2",
          task_notes: "task_notes2",
          task_completed: false,
          project_id: 2,
        },
        {
          task_description: "task description3",
          task_notes: "task_notes3",
          task_completed: false,
          project_id: 3,
        },
      ]);
    });
};
