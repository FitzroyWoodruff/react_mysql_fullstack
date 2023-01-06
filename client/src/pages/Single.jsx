import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import moment from "moment";

const Single = () => {
	const [post, setPost] = useState({});

	const location = useLocation();

	const postId = location.pathname.split("/")[2];

	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/posts/${postId}`);
				setPost(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [postId]);
	return (
		<main className=" bg-red-300 flex ">
			<div className="flex flex-col md:flex-row bg-slate-300 w-full md:w-5/6 mx-auto p-5 gap-9">
				<div className="content md:basis-3/4">
					<img
						className="w-[100%] h-[450px] object-cover "
						src={post?.img}
						alt={post?.title}
					/>
					<div className="user flex items-center gap-3 mt-4">
						<img
							className="w-[50px] h-[50px] object-cover rounded-full"
							src="https://images.pexels.com/photos/6621317/pexels-photo-6621317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt=""
						/>
						<div className="info">
							<span>{post.username}</span>
							<p>Posted {moment(post.date).fromNow()}</p>
						</div>
						{currentUser?.username === post.username && (
							<div>
								<div className="edit">
									<Link to={`/write?edit=2`}>Edit Post</Link>
								</div>
								<div className="delete">Delete Post</div>
							</div>
						)}
					</div>
					<h1 className="text-3xl font-Oswald font-bold uppercase">
						Why Are there so many Home Alone movies?
					</h1>
					<p className="text-justify leading-8">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
						illum praesentium ipsum voluptatum fugit dolorem tempora asperiores
						similique explicabo sed fugiat commodi iusto, quam, quo dolorum
						cumque ipsam obcaecati id! Assumenda neque repellendus adipisci
						placeat autem dolores commodi cum nemo, cumque corrupti. Odio nam
						similique eos libero molestias, in tenetur ratione! Dignissimos
						corrupti qui ipsa tempore id eligendi beatae provident? Rem fugit
						beatae corporis aliquid necessitatibus soluta quia ipsa dolorem
						magni dolor iusto explicabo nesciunt earum, neque sint debitis quos
						mollitia error vitae accusamus! Doloremque quisquam repudiandae amet
						cupiditate in. Officia, voluptate. Culpa corporis itaque cupiditate
						quasi deserunt, adipisci sit ad architecto repellendus nobis, ipsum
						temporibus a nihil tempore soluta quam. Quas at minus, provident
						suscipit repellat possimus? Iure, dicta? Quisquam fugiat
						necessitatibus optio soluta quod nihil, laborum vel omnis expedita
						aliquam in nemo enim. Illo impedit similique obcaecati fuga ducimus
						provident enim. Dolorem beatae esse quaerat. Fugiat, pariatur velit!
						Earum minus consectetur vero alias rerum delectus facilis incidunt
						molestias, officiis quasi aperiam quis necessitatibus ut saepe
						pariatur est voluptatem quibusdam. Quod explicabo officiis quas
						molestiae recusandae sed culpa facere. Possimus tenetur id
						voluptatum corrupti nisi quisquam fugiat ipsam est. Amet dicta dolor
						ullam, maxime provident molestias ratione eaque et quibusdam dolorum
						rerum tempora facilis ad qui non. Officia, excepturi. Voluptatibus
						aliquam optio adipisci dolores, nobis cupiditate, vitae dolorum
						repellat perferendis officia nulla, vel eos culpa numquam id. Eaque
						molestiae consequuntur at dignissimos esse. Quo architecto aliquam
						ducimus praesentium totam?
					</p>
				</div>
				<div className="sidebar md:basis-1/4">
					<Sidebar />
				</div>
			</div>
		</main>
	);
};

export default Single;
