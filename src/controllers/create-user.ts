import { controller, IncommingData } from './utils/protocols';
import * as R from 'ramda';
import { make_response } from './utils/helpers';
export class createUser implements controller {
	async handle(incommingData: IncommingData): Promise<any> {
		if (R.isEmpty(incommingData)) {
			return make_response(400, new Error('incomming body empty'));
		}
	}
}