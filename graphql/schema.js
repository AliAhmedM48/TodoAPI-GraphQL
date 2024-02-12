const { buildSchema } = require('graphql');
// !---------------------------------------------------
const { ApolloServer, gql } = require('apollo-server-express');

module.exports = gql
  `
     type Task {
    id: ID!
    title: String!
    status: String!
  }

  type Query {
    tasks: [Task]
     task(id: ID!): Task
  }

  type Mutation {
    createTask(title: String!): Task
    updateTaskStatus(id: ID!, status: String!): Task
    deleteTask(id: ID!): Task
  }
    `
  ;

// module.exports = buildSchema(
//   `
//      type Task {
//     id: ID!
//     title: String!
//     status: String!
//   }

//   type Query {
//     tasks: [Task]
//      task(id: ID!): Task
//   }

//   type Mutation {
//     createTask(title: String!): Task
//     updateTaskStatus(id: ID!, status: String!): Task
//     deleteTask(id: ID!): Task
//   }
//     `
// );