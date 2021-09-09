import { createNote } from '../../controllers/create-note';
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
		async addNote(_: any, args: IncommingData) {
			console.log(args);
			const note = new createNote();
			const result = await note.handle(args);

			console.log(result);
			return result;
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
