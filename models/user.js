import mongoose from "mongoose";
const schema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	image: { type: String },
	password: { type: String, required: true },
});
export default mongoose.model("User", schema);