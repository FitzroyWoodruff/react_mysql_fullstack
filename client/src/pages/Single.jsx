import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";

const Single = () => {
	const [post, setPost] = useState({});

	const location = useLocation();
	const navigate = useNavigate();

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

	const handleDelete = async () => {
		try {
			await axios.delete(`/posts/${postId}`);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	const getText = (html) => {
		const doc = new DOMParser().parseFromString(html, "text/html");
		return doc.body.textContent;
	};

	return (
		<main className=" bg-red-300 flex ">
			<div className="flex flex-col md:flex-row bg-slate-300 w-full md:w-5/6 mx-auto p-5 gap-9">
				<div className="content md:basis-3/4">
					<img
						className="w-[100%] h-[450px] object-cover "
						src={`../upload/${post?.img}`}
						alt={post?.title}
					/>
					<div className="user flex items-center gap-3 mt-4">
						{post.userImg && (
							<img
								className="w-[50px] h-[50px] object-cover rounded-full"
								src={post?.userImg}
								alt=""
							/>
						)}
						<div className="info">
							<span className="text-xl font-Oswald font-bold uppercase">
								{post.username}
							</span>
							<p>Posted {moment(post.date).fromNow()}</p>
						</div>
						{currentUser?.username === post.username && (
							<div>
								<div className="edit">
									<Link to={`/write?edit=2`}>Edit Post</Link>
								</div>
								<div className="delete" onClick={handleDelete}>
									Delete Post
								</div>
							</div>
						)}
					</div>
					<h1 className="text-3xl font-Oswald font-bold uppercase">
						{post.title}
					</h1>
					<p
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(post.desc),
						}}
					></p>
				</div>
				<div className="sidebar md:basis-1/4">
					<Sidebar cat={post.cat} />
				</div>
			</div>
		</main>
	);
};

export default Single;
