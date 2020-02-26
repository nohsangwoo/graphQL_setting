import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const server = new GraphQLServer({
  typeDefs: 'graphql/scheme.graphql', // 추가된 코드
  resolvers // 추가된 코드
});
server.start(() => console.log('Server is running on localhost:4000'));
