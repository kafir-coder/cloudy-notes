import { connect } from '../db';
import { createUser } from './create-user';
const make_sut = () => {
	const sut = new createUser();
	return sut;
};
describe('create user tests suite', () => {
	beforeAll(() => {
		connect().then(() => {
			console.log('connected');
		});
	});
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
	test("should ensure incomming data shouldn't be in absence with a required field", async () => {
		const sut = make_sut();
		const imcomplete_incomming_data = {
			username: 'Caio',
			// password: ''
		};
		//@ts-ignore
		const result = await sut.handle(imcomplete_incomming_data);
		expect(result).toEqual({
			status: 400,
			body: new Error('incomming body is imcomplete'),
		});
	});
});
