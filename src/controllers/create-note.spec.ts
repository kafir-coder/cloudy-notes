import { connect } from '../db';
import { createNote } from './create-note';

const make_sut = () => {
	const sut = new createNote();
	return sut;
};
describe('create note tests suite', () => {
	beforeAll(() => {
		connect().then();
	});
	test("should ensure incomming data isn't empty", async () => {
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
