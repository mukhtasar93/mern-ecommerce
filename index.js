const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const authRouter = require("./routes/authRoute");

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user", authRouter);

// app.use("/", (req, res) => {
// 	res.send("Hello, This is server side running");
// });

app.listen(PORT, () => {
	console.log(`Server Running at Port ${PORT}`);
});
