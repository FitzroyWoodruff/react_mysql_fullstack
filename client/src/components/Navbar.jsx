import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className=" bg-red-600 py-2">
			<div className="flex flex-col md:w-5/6 md:flex-row  mx-auto justify-between items-center">
				<div className="logo">
					<Link to="/" className=" font-Oswald text-3xl">
						LOGO
					</Link>
				</div>
				<div className="links flex justify-between items-center uppercase">
					<Link
						to="/?cat=blog"
						className="link font-Oswald cursor-pointer px-4"
					>
						Blog
					</Link>
					<Link
						to="/?cat=blog"
						className="link font-Oswald cursor-pointer px-4"
					>
						Articles
					</Link>
					<Link
						to="/?cat=blog"
						className="link font-Oswald cursor-pointer px-4"
					>
						About
					</Link>
					<span className="font-Oswald px-4">Jackson</span>
					<span className="link font-Oswald text-slate-800 cursor-pointer px-4">
						Logout
					</span>
					<span className="link font-Oswald cursor-pointer px-4">
						<Link to="/write">
							<button className=" bg-slate-800 px-4 py-4 cursor-pointer text-white font-Oswald font bold text-xl  rounded-lg">
								Write
							</button>
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
