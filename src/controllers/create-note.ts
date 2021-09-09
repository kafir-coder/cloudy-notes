import { controller, IncommingData } from './utils/protocols';
import * as R from 'ramda';
import { make_response } from './utils/helpers';
import { note } from '../db/models/note-model';
export class createNote implements controller {
	async handle(incommingData: IncommingData): Promise<any> {
		const required_fields = ['islink', 'content', 'owner'];
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
		const result = await note.create(incommingData);
		return result;
	}
}
