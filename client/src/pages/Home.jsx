import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
	const [posts, setPosts] = useState([]);

	const cat = useLocation().search;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/posts${cat}`);
				setPosts(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [cat]);

	const getText = (html) => {
		const doc = new DOMParser().parseFromString(html, "text/html");
		return doc.body.textContent;
	};

	return (
		<main className=" bg-red-300 flex ">
			<div className="flex flex-col bg-slate-300 md:w-5/6 mx-auto p-5 gap-9">
				{posts.map((post) => (
					<div className="post flex flex-col gap-3" key={post.id}>
						<div className="img basis-1/4">
							<img
								src={`../upload/${post.img}`}
								alt={post.title}
								className="w-full object-cover h-full"
							/>
						</div>
						<div className="info basis-3/4">
							<Link to={`/post/${post.id}`}>
								<h2 className=" text-2xl font-Oswald font-bold uppercase">
									{post.title}
								</h2>
							</Link>
							<p>{getText(post.desc)}</p>
							<Link to={`/post/${post.id}`}>
								<button className="bg-slate-800 px-6 py-2 cursor-pointer text-white font-Oswald font bold text-xl  rounded-lg">
									Read More
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</main>
	);
};

export default Home;
