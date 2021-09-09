import { controller, IncommingData } from './utils/protocols';
import * as R from 'ramda';
import { make_response } from './utils/helpers';
import { user } from '../db/models';
export class createUser implements controller {
	async handle(incommingData: IncommingData): Promise<any> {
		const required_fields = ['username', 'password'];
		if (R.isEmpty(incommingData)) {
			return make_response(400, new Error('incomming body empty'));
		}
		for (const iterator of required_fields) {
			//@ts-ignore
			if (!incommingData[iterator]) {
				return make_response(
					400,
					new Error('incomming body is imcomplete'),
				);
			}
		}
		const exists = await user.exists({
			//@ts-ignore
			username: incommingData['username'],
		});
		if (exists) {
			return make_response(400, new Error('user already exists'));
		}
	}
}
