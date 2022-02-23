import express from "express";
import mongoose from "mongoose";
import cors from  "cors";
import userRouter from "./routes/user.js"
import path from "path";
import "dotenv/config";
const app = express();
const mongo_url = process.env.MONGO_URI;

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


mongoose.connect(mongo_url).then(() => {
	console.log("Mongodb connected...")
}).catch((err) => console.log(err));


app.use(userRouter);


// if (process.env.NODE_ENV == "production") {
let __dirname = path.dirname(new URL(import.meta.url).pathname);
__dirname = __dirname.replace("/", "");
app.use(express.static(path.resolve(__dirname, "../frontend/dist")));
app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html")));
// }


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Backend is running at port ${port}`) );
