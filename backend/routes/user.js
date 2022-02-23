import express from "express";
const router = express.Router();
import User from "../models/user.js";


router.get("/api/users", async (req,res) => {
	try
	{
		const users = await User.find();
		res.status(200).json({status: true, users});
	}
	catch(err)
	{
		res.status(500).json({status: false, msg: "Internal Server Error"});
	}
});

router.get("/api/users/:id", async (req,res) => {
	try
	{
		const id = req.params.id;
		const user = await User.findById(id);
		if(!user)
		{
			res.json({msg: "User not found"});
		}
		else
		{
			res.status(200).json({status: true, msg: "User found", user});
		}
	}
	catch(err)
	{
		res.status(500).json({status: false, msg: "Internal Server Error"});
	}
});

router.post("/api/users", async (req,res) => {
	try
	{
		const user = req.body;
		await User.create(user);
		res.status(200).json({status: true, msg: "User created successfully"});
	}
	catch(err)
	{
		res.status(500).json({status: false, msg: "Internal Server Error"});
	}
});

router.put("/api/users/:id", async (req,res) => {
	try
	{
		const id = req.params.id;
		const user = req.body;
		await User.findByIdAndUpdate(id, user);
		res.status(200).json({status: true, msg: "User updated successfully"});
	}
	catch(err)
	{
		res.status(500).json({status: false, msg: "Internal Server Error"});
	}
});

router.delete("/api/users/:id", async (req,res) => {
	try
	{
		const id = req.params.id;
		await User.findByIdAndDelete(id);
		res.status(200).json({status: true, msg: "User deleted successfully"});
	}
	catch(err)
	{
		res.status(500).json({status: false, msg: "Internal Server Error"});
	}
});

export default router;