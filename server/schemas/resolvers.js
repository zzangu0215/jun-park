const { Project } = require("../models");

const resolvers = {
  Query: {
    Projects: async () => {
      return await Project.find();
    },
  },
};

module.exports = resolvers;
