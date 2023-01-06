import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Sidebar = ({ cat }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/posts/?cat=${cat}`);
				setPosts(res.data);
			} catch (err) {
				console.log(err);
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
		<div>
			<h2 className="text-3xl font-Oswald font-bold uppercase">Recent Posts</h2>

			{posts.map((post) => (
				<div className="post flex flex-col gap-2 pb-5" key={post.id}>
					<img
						src={`../upload/${post.img}`}
						alt=""
						className="w-full object-cover h-[200px]"
					/>
					<h3 className="text-xl font-Oswald font-bold uppercase">
						{post.title}
					</h3>
					<p className=" line-clamp-2">{post.desc}</p>
					<Link to={`/post/${post.id}`}>
						<button className="bg-slate-800 px-3 py-1 cursor-pointer text-white font-Oswald font bold text-lg  rounded-lg">
							Read More...
						</button>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Sidebar;
