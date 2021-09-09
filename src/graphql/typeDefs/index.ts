import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

export const typeDefs: DocumentNode = gql`
	type Book {
		title: String
		author: String
	}

	type user {
		id: String
		username: String
		password: String
	}
	type Query {
		users: [user]
		books: [Book]
	}
	type Query {
		books: [Book]
	}
`;

export default typeDefs;
