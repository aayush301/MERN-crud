import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	name: String,
	email: String,
	phone: Number
});

const User = mongoose.model("user", userSchema);
export default User;