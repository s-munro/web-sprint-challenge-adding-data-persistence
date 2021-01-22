exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { project_name: "name1", project_description: "description1" },
        { project_name: "name2", project_description: "description2" },
        { project_name: "name3", project_description: "description3" },
      ]);
    });
};
