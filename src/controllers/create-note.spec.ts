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
	test("should ensure incomming data shouldn't be in absence with a required field", async () => {
		const sut = make_sut();
		const imcomplete_incomming_data = {
			islink: true,
			content: 'www.github.com/kafir-coder',
			//owner: '613a371b0ed7c3ebc9aa4c60',
		};
		//@ts-ignore
		const result = await sut.handle(imcomplete_incomming_data);
		expect(result).toEqual({
			status: 400,
			body: new Error('incomming body is imcomplete'),
		});
	});
});
