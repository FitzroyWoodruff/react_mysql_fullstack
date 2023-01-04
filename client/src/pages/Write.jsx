import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
	const [value, setValue] = useState("");
	return (
		<main className=" bg-red-300 flex ">
			<div className="flex flex-col md:flex-row bg-slate-300 w-full md:w-5/6 mx-auto p-5 gap-9">
				<div className="content md:basis-3/4 flex flex-col gap-5">
					<input
						type="text"
						placeholder="Title"
						className="my-2 p-4 rounded-lg"
					/>
					<div className="editorContainer">
						<ReactQuill
							theme="snow"
							value={value}
							onchange={setValue}
							className=" bg-white h-[350px] mb-12 overflow-scroll"
						/>
					</div>
				</div>
				<div className="sidebar md:basis-1/4">
					<div className="item">
						<h2 className="text-3xl font-Oswald font-bold uppercase">
							Publish
						</h2>
						<span>
							<b>Status: </b> Draft
						</span>
						<br />
						<span>
							<b>Visibility: </b>Public
						</span>
						<br />
						<input style={{ display: "none" }} type="file" name="" id="file" />
						<label htmlFor="file" className=" cursor-pointer">
							Upload Image
						</label>
						<div className="buttons">
							<button className="bg-slate-800 px-3 py-1 cursor-pointer text-white font-Oswald font bold text-lg  rounded-lg">
								Save as a draft
							</button>
							<button className="bg-slate-800 px-3 py-1 cursor-pointer text-white font-Oswald font bold text-lg  rounded-lg">
								Update
							</button>
						</div>
					</div>
					<div className="item flex flex-col justify-between">
						<h2 className="text-3xl font-Oswald font-bold uppercase">
							Category
						</h2>
						<div>
							<input type="radio" name="cat" id="tech" value="tech" />
							<label htmlFor="tech">Tech</label>
							<br />
							<input type="radio" name="cat" id="movies" value="movies" />
							<label htmlFor="movies">Movies</label>
							<br />
							<input type="radio" name="cat" id="books" value="books" />
							<label htmlFor="books">Books</label>
							<br />
							<input type="radio" name="cat" id="games" value="games" />
							<label htmlFor="games">Games</label>
							<br />
							<input type="radio" name="cat" id="opinion" value="opinion" />
							<label htmlFor="opinion">Opinion</label>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Write;
