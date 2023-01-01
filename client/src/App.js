import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home.jsx";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// CREATE LAYOUT FOR SINGLE BLOG POSTS, POST COMPOSITION, AND RANDOM PAGES
const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

//DEFINING INITIAL ROUTES
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/post/:id",
				element: <Single />,
			},
			{
				path: "/write",
				element: <Write />,
			},
		],
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

function App() {
	return (
		<div>
			<div>
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;
