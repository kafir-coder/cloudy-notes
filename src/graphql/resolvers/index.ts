import { createUser } from '../../controllers/create-user';
import { IncommingData } from '../../controllers/utils/protocols';

const resolvers = {
	Query: {
		users: () => users,
	},
	Mutation: {
		addUser(_: any, args: IncommingData) {
			const user = new createUser();
			return user.handle(args);
		},
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
