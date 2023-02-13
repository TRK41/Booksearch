const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount:Int
    savedBooks:[Book]
  }

  type Book {
    bookId: ID
    authors: String
    description: String
    title: String
    image:string
    link:string
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
   me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookId: String!): User
    removeBook(bookid!): Book
    
  }
`;

module.exports = typeDefs;
