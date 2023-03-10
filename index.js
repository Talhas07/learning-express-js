import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mongoose.connection;
connection.once("connected", () => console.log("Database Connected ~"));
connection.on("error", (error) => console.log("Database Error: ", error));
mongoose.connect("mongodb://localhost:27017/express-validation", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use("/user", userRouter);

app.listen(2000, () => console.log("Server Started ~"));
