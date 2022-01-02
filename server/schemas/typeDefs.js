const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Run {
    runId: String
    comment: String
    date: String
    duration: Int
    bumpLeft: Int
    bumpRight: Int
    left: Int
    right: Int
  }
  type User {
    _id: ID
    username: String
    email: String
    runCount: Int
    savedRuns: [Run]
  }
  type Query {
    me: User
    user: User
  }
  type Auth {
    token: ID
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRun(runs: [ID!]): User
    removeRun(runId: String!): User
  }
`;

module.exports = typeDefs;
