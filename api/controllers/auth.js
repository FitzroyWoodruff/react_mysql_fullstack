//we import our DB settings
import { db } from "../db.js";
// we use this to encrypt the users password before storing it in the database
import bcrypt from "bcryptjs";

/*NOTE: this is the registration function. It creates the user in the database.
 * Unless this was a microblog service an Admin account would register users and give them
 * access to the site.
 */
export const register = (req, res) => {
	// check for existing user by checking for the existance of the same user name or email in the database
	const q = "SELECT * FROM users WHERE email = ? OR username = ?";

	/*we create our query by submitting our query string for 'q', an array for the values and a callback function
	 * didnt create an array for the values at this time because we have not HASHed the password yet
	 *
	 */
	db.query(q, [req.body.email, req.body.username], (err, data) => {
		if (err) return res.status(500).json(err);
		if (data.length) return res.status(409).json("User already exists!");

		// ENCRYPT PASSWORD
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(req.body.password, salt);

		//Our query string
		const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
		const values = [req.body.username, req.body.email, hash];

		// THIS query actually inserts `username`,`email`,`password` into the users table
		db.query(q, [values], (err, data) => {
			if (err) return res.status(500).json(err);
			return res.status(200).json("User has been created");
		});
	});
};

//NOTE: this is the login function. let the users login to get access to the blog
export const login = (req, res) => {};
export const logout = (req, res) => {};
