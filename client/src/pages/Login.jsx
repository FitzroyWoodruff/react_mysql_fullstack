import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Login = () => {
	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const [error, setError] = useState(null);

	const navigate = useNavigate();

	const { login } = useContext(AuthContext);

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	//const url = "http://localhost:5000/api";

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await login(inputs);
			navigate("/");
		} catch (err) {
			setError(err.response.data);
		}
	};

	return (
		<div className="flex mx-auto items-center h-screen  justify-center bg-red-700 w-full p-[40px]">
			<div className="flex flex-col mx-auto  bg-orange-600 justify-center md:w-5/6 py-4 rounded-lg">
				<h2 className="text-2xl text-center font-Oswald font-bold">Sign In</h2>
				<form className="flex mx-auto flex-col w-5/6  p-4">
					<input
						required
						name="username"
						type="text"
						placeholder="Username"
						className="my-2 p-4 rounded-lg"
						onChange={handleChange}
					/>
					<input
						required
						name="password"
						type="password"
						placeholder="Password"
						className="my-2 p-4 rounded-lg"
						onChange={handleChange}
					/>
					<button
						onClick={handleSubmit}
						className=" bg-slate-800 px-4 py-4 cursor-pointer text-white font-Oswald font bold text-xl  rounded-lg"
					>
						Log In
					</button>
					{error && <p className=" font-bold">{error}</p>}
					<span className="pt-4">
						No account? No problem,<span> </span>
						<Link to="/register" className=" cursor-pointer text-white">
							Register Here.
						</Link>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Login;
