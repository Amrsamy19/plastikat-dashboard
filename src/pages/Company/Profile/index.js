import { Link } from "react-router-dom";
import { Navbar } from "../../../components/Navbar";

export const Profile = () => {
	return (
		<section className="font-Comfortaa w-screen flex">
			<Navbar />
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">Profile</h1>
				</div>
				<div className="flex flex-col justify-around h-96 m-12 p4">
					<div className="text-xl">
						<p>
							Name: <strong>Walker Inc</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							District: <strong>Hasna</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							Government: <strong>North Sinai</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							Number of delegates: <strong>18</strong>
						</p>
					</div>
					<div className="text-xl">
						<Link to="/edit-profile">
							<button className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
								Edit Profile
							</button>
						</Link>
					</div>
				</div>
			</main>
		</section>
	);
};
