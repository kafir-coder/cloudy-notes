import { createUser } from './create-user';
const make_sut = () => {
	const sut = new createUser();
	return sut;
};
describe('create user tests suite', () => {
	test("should ensures incomming data isn't empty", async () => {
		const sut = make_sut();
		const empty_incomming_data = {};
		//@ts-ignore
		const result = await sut.handle(empty_incomming_data);
		expect(result).toEqual({
			status: 400,
			body: new Error('incomming body empty'),
		});
	});
});
