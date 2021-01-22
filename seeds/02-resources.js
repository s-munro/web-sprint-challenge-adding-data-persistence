exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resource_name: "resourcename1",
          resource_description: "resourcedescription1",
        },
        {
          resource_name: "resourcename2",
          resource_description: "resourcedescription2",
        },
        { resource_name: "resourcename3" },
      ]);
    });
};
