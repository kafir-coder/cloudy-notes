import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

export const typeDefs: DocumentNode = gql`
	type Mutation {
		addUser(username: String, password: String): user
		addNote(islink: Boolean, content: String, owner: String): note
	}
	type user {
		id: String
		username: String
		password: String
	}
	type note {
		id: String
		islink: Boolean
		content: String
		owner: String
	}
	type Query {
		users: [user]
		notes: [note]
	}
`;

export default typeDefs;
