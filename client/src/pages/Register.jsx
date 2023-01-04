import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const url = "http://localhost:5000/api";

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(`${url}/auth/register`, inputs);
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex mx-auto items-center h-screen  justify-center bg-red-700 w-full p-[40px]">
			<div className="flex flex-col mx-auto  bg-orange-600 justify-center md:w-5/6 py-4 rounded-lg">
				<h2 className="text-2xl text-center font-Oswald font-bold">Register</h2>
				<form className="flex mx-auto flex-col w-5/6  p-4">
					<input
						required
						type="text"
						placeholder="Username"
						className="my-2 p-4 rounded-lg"
						name="username"
						onChange={handleChange}
					/>
					<input
						required
						type="email"
						placeholder="Email"
						name="email"
						className="my-2 p-4 rounded-lg"
						onChange={handleChange}
					/>
					<input
						required
						type="password"
						placeholder="Password"
						name="password"
						className="my-2 p-4 rounded-lg"
						onChange={handleChange}
					/>
					<button
						onClick={handleSubmit}
						className=" bg-slate-800 px-4 py-4 cursor-pointer text-white font-Oswald font bold text-xl  rounded-lg"
					>
						Submit
					</button>
					<p className=" font-bold">Error Signing In!!</p>
					<span className="pt-4">
						Already have an account?<span> </span>
						<Link to="/login" className=" cursor-pointer text-white">
							Login Here
						</Link>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Register;
