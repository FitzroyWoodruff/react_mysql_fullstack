import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";

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

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "../client/public/upload");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + file.originalname);
	},
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
	const file = req.file;
	res.status(200).json(file.filename);
});
//We utilize our routes each of which has a controller function
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
	console.log(
		`Server listening on port ${PORT}\n================================`
	);
});
