const mongoose = require('mongoose');

export async function connect() {
	await mongoose.connect(
		'mongodb+srv://kafir-coder:^Kirinomago2018$@cluster0.xb0g2.mongodb.net/cloudy-notes?retryWrites=true&w=majority',
	);
}
