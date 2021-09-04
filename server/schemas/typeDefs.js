const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Project {
    _id: ID
    projectName: String
    isTeamProject: Boolean
    filename: String
    description: String
    github_link: String
    ext_link: String
    technologies: String
  }

  type Query {
    Projects: [Project]
  }
`;

module.exports = typeDefs;
