import mongoose from 'mongoose';
const { Schema } = mongoose;
const note_schema = new Schema({
	islink: {
		type: Boolean,
	},
	content: {
		type: String,
	},
	owner: {
		type: String,
	},
});

export const note = mongoose.model('user', note_schema);
