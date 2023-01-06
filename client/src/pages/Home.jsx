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
	// const fakePostd = [
	// 	{
	// 		id: 1,
	// 		title: "Why Are there so many Home Alone movies?",
	// 		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe excepturi quam fuga harum, iusto eaque nam consequuntur incidunt sequi explicabo! Laboriosam reiciendis quasi nostrum sit et temporibus asperiores corporis!
	// 		Animi maxime tenetur, eum laudantium libero quaerat minima voluptate quibusdam quae ipsum possimus molestiae non quo nihil suscipit culpa, mollitia vitae quidem ullam! Assumenda quasi perferendis libero ex architecto maxime.
	// 		Nostrum blanditiis quia sapiente repudiandae ipsam pariatur accusamus? Quaerat sit nulla labore at repellat autem. Vero voluptatibus, corrupti eligendi fuga libero harum a enim tempore unde beatae non ea perferendis.`,
	// 		img: "https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Is Banana Bread Enough To Save A Marraige?",
	// 		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe excepturi quam fuga harum, iusto eaque nam consequuntur incidunt sequi explicabo! Laboriosam reiciendis quasi nostrum sit et temporibus asperiores corporis!
	// 		Animi maxime tenetur, eum laudantium libero quaerat minima voluptate quibusdam quae ipsum possimus molestiae non quo nihil suscipit culpa, mollitia vitae quidem ullam! Assumenda quasi perferendis libero ex architecto maxime.
	// 		Nostrum blanditiis quia sapiente repudiandae ipsam pariatur accusamus? Quaerat sit nulla labore at repellat autem. Vero voluptatibus, corrupti eligendi fuga libero harum a enim tempore unde beatae non ea perferendis.`,
	// 		img: "https://images.pexels.com/photos/6829488/pexels-photo-6829488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "You were wrong about that thing.",
	// 		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe excepturi quam fuga harum, iusto eaque nam consequuntur incidunt sequi explicabo! Laboriosam reiciendis quasi nostrum sit et temporibus asperiores corporis!
	// 		Animi maxime tenetur, eum laudantium libero quaerat minima voluptate quibusdam quae ipsum possimus molestiae non quo nihil suscipit culpa, mollitia vitae quidem ullam! Assumenda quasi perferendis libero ex architecto maxime.
	// 		Nostrum blanditiis quia sapiente repudiandae ipsam pariatur accusamus? Quaerat sit nulla labore at repellat autem. Vero voluptatibus, corrupti eligendi fuga libero harum a enim tempore unde beatae non ea perferendis.`,
	// 		img: "https://images.pexels.com/photos/13986931/pexels-photo-13986931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Brand loyalty or family?",
	// 		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe excepturi quam fuga harum, iusto eaque nam consequuntur incidunt sequi explicabo! Laboriosam reiciendis quasi nostrum sit et temporibus asperiores corporis!
	// 		Animi maxime tenetur, eum laudantium libero quaerat minima voluptate quibusdam quae ipsum possimus molestiae non quo nihil suscipit culpa, mollitia vitae quidem ullam! Assumenda quasi perferendis libero ex architecto maxime.
	// 		Nostrum blanditiis quia sapiente repudiandae ipsam pariatur accusamus? Quaerat sit nulla labore at repellat autem. Vero voluptatibus, corrupti eligendi fuga libero harum a enim tempore unde beatae non ea perferendis.`,
	// 		img: "https://images.pexels.com/photos/6621317/pexels-photo-6621317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	// 	},
	// 	{
	// 		id: 5,
	// 		title: "Nah",
	// 		desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe excepturi quam fuga harum, iusto eaque nam consequuntur incidunt sequi explicabo! Laboriosam reiciendis quasi nostrum sit et temporibus asperiores corporis!
	// 		Animi maxime tenetur, eum laudantium libero quaerat minima voluptate quibusdam quae ipsum possimus molestiae non quo nihil suscipit culpa, mollitia vitae quidem ullam! Assumenda quasi perferendis libero ex architecto maxime.
	// 		Nostrum blanditiis quia sapiente repudiandae ipsam pariatur accusamus? Quaerat sit nulla labore at repellat autem. Vero voluptatibus, corrupti eligendi fuga libero harum a enim tempore unde beatae non ea perferendis.`,
	// 		img: "https://images.pexels.com/photos/14686142/pexels-photo-14686142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	// 	},
	// ];

	return (
		<main className=" bg-red-300 flex ">
			<div className="flex flex-col bg-slate-300 md:w-5/6 mx-auto p-5 gap-9">
				{posts.map((post) => (
					<div className="post flex flex-col gap-3" key={post.id}>
						<div className="img basis-1/4">
							<img
								src={post.img}
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
							<p>{post.desc}</p>
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
