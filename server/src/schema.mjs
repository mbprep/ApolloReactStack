// The GraphQL schema
export const typeDefs = `#graphql
 "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
"The name of the group of modules for the course"
    title: String!
    "The author of the course"
    author: Author!
    "The main illustration to display in track card or track page detail"
    thumbnail: String
    "The length of the track to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
type Author {
  id: ID!
  name: String!
  photo: String
}

    type Query {
        "List of available tracks for the learning platform"
        tracksForHome: [Track!]!
    }
`;

// A map of functions which return data for the schema.
export const resolvers = {
    Query: {
      hello: () => 'world',
    },
  };

  

  