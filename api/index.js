import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//controller route functions
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";

//initialize express as app
const app = express();
dotenv.config();
const PORT = process.env.PORT || 6000;

//We initialize json in express, cors for Cross-Origin Resource Sharing, and CookieParser
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//We utilize our routes each of which has a controller function
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
	console.log(
		`Server listening on port ${PORT}\n================================`
	);
});
