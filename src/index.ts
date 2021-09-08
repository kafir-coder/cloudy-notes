import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/index';

const server = new ApolloServer({ typeDefs, resolvers });
const PORT = process.env.PORT;
const url = 'home:' + PORT;
server.listen(PORT).then(() => {
	//@ts-ignore
	console.log(`🚀  Server ready at ${url}`);
});
