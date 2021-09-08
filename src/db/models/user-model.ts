import mongoose from 'mongoose';
const { Schema } = mongoose;
const user_schema = new Schema({
	username: {
		type: String,
		default: 'Ordinary_user',
	},
	password: {
		type: String,
		select: false,
	},
});

export const user = mongoose.model('user', user_schema);
