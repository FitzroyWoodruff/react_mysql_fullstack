import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
					/>
					<input
						required
						type="email"
						placeholder="Email"
						className="my-2 p-4 rounded-lg"
					/>
					<input
						required
						type="password"
						placeholder="Password"
						className="my-2 p-4 rounded-lg"
					/>
					<button className=" bg-slate-800 px-4 py-4 cursor-pointer text-white font-Oswald font bold text-xl  rounded-lg">
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
