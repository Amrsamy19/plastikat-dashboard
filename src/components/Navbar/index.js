import delegatesIcon from "../../assets/delegates.svg";
import profileIcon from "../../assets/profile.svg";
import logoutIcon from "../../assets/logout.svg";
import homeIcon from "../../assets/home.svg";

import { NavLink } from "react-router-dom";

const navLinks = [
	{ link: "/", label: "Home", icon: homeIcon },
	{ link: "/profile", label: "Profile", icon: profileIcon },
	{ link: "/delegates", label: "Delegates", icon: delegatesIcon },
	{ link: "/login", label: "Logout", icon: logoutIcon },
];

export const Navbar = () => {
	return (
		<aside className="font-Comfortaa h-screen w-64" aria-label="Sidebar">
			<div className="flex flex-col justify-evenly py-4 px-3 bg-green-600 h-full">
				<div className="w-fit mb-5">
					<span className="w-fit break-words text-3xl text-white font-semibold">
						Welcome, <span className="text-2xl">Company</span>
					</span>
				</div>
				<ul className="space-y-8">
					{navLinks.map((link) => (
						<li key={link.label} className="flex items-center p-2 text-lg font-normal text-white rounded-lg hover:bg-green-900 transition-all duration-300">
							<div className="flex items-center justify-center">
								<img className="w-10" src={link.icon} alt={link.label} />
							</div>
							<NavLink className="ml-3" to={`${link.link}`}>
								{link.label}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};
