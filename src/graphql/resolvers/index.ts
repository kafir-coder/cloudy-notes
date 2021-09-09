const books = [
	{
		title: 'The Awakening',
		author: 'Kate Chopin',
	},
	{
		title: 'City of Glass',
		author: 'Paul Auster',
	},
];

const resolvers = {
	Query: {
		books: () => books,
		users: () => users,
	},
};

const users = [
	{
		id: 'asçfkjasdlfkjasdklfj',
		username: 'Kate Chopin',
		password: 'sdlfkjalsdkjf',
	},
	{
		id: 'asçfkjasdlfkjasdklfj',
		username: 'Kate Chopin',
		password: 'sdlfkjalsdkjf',
	},
];

export default resolvers;
