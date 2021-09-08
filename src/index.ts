import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/index';
import { connect } from './db/index';
const server = new ApolloServer({ typeDefs, resolvers });
const PORT = process.env.PORT;
const url = 'home:' + PORT;
connect()
	.then(() => console.log('🔥  MongoDb server running from Atlas'))
	.catch((err: Error) => console.log(err));
server.listen(PORT).then(() => {
	//@ts-ignore
	console.log(`🔥  Server ready at ${url}`);
});
