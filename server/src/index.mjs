import { ApolloServer } from '@apollo/server';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs, resolvers } from './schema.mjs';
import casual from 'casual';
import fetch from 'node-fetch';

//fetch api and return prop.url from the https://picsum.photos/200/300/ response handleRequest.s.includeCookies
const getImage = async () => {
  const response = await fetch('https://picsum.photos/200/300/', {
    method: 'GET',
    headers: {
      'Content-Type': 'text/html',
    },
      });
  const data = response;
  return data.url;
};


const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)] }),
  Track: () => ({
    id: () => `track_${casual.uuid}`,
    title: () => casual.title,
    author: () => {
      return {
        name: casual.name,
       photo: getImage()
          
      };
    },
    thumbnail: getImage(),
    length: () => 1210,
    modulesCount: () => 6
  })
};
const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs }), mocks
  }),
  });

  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);




