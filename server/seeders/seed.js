const db = require("../config/connection");
const { Project } = require("../models");
const projectSeeds = require("./projectSeeds.json");

db.once("open", async () => {
  try {
    await db.dropDatabase();

    await Project.create(projectSeeds);
    console.log("projects seeding done");

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
