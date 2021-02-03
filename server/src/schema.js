const { gql } = require('apollo-server');

const typeDefs = gql`

  type Query {
    "Query to get tracks array for the homepage grid" 
    tracksForHome: [Track!]!
  }


  "A track is a group of modules that teach a specific topic" 
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    "length in minutes" 
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    "url to the photo" 
    photo: String
  }

`;

module.exports = typeDefs;