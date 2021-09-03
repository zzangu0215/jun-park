const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: "Project should have a unique name.",
    trim: true,
  },
  thumbnail: {
    type: String,
    required: "Must have a thumbnail!",
    trim: true,
  },
  description: {
    type: String,
    required: "Project should have a description.",
    trim: true,
    maxLength: 350,
  },
  github_link: {
    type: String,
    required: "Github link is required",
    trim: true,
  },
  ext_link: {
    type: String,
    required: "Either youtube link or deployed link is needed.",
    trim: true,
  },
  technologies: {
    type: String,
    trim: true,
  },
});

const Project = model("Project", projectSchema);

module.exports = Project;
