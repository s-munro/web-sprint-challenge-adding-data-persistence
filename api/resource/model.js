// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = { getAll, postResource };

function getAll() {
  return db("resources");
}

function postResource(resource) {
  // code
  return db("resources")
    .insert(resource)
    .then(([id]) => {
      return (
        db("resources")
          .where("resource_id", id)
          // .select("resource_name")
          .first()
      );
    });
}
