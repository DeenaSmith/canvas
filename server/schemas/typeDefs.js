
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    reviews: [Reviews]
  }

  type Reviews {
    _id: ID
    reviewText: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    reviews(username: String): [Reviews]
    review(_id: ID!): Reviews
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(reviewText: String!): Reviews
  }
`;

module.exports = typeDefs;