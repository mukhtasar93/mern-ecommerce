const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
	try {
		const conn = await mongoose.connect(`${process.env.MONGODB_URI}`, {
			useNewUrlParser: true,
		});
		console.log(`MongoDB Connected to: ${conn.connection.host}`);
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

module.exports = dbConnect;
