import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

export const typeDefs: DocumentNode = gql`
	type Mutation {
		addUser(username: String, password: String): user
	}
	type user {
		id: String
		username: String
		password: String
	}
	type Query {
		users: [user]
	}
`;

export default typeDefs;
