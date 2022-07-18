import logoutIcon from "../../assets/logout.svg";

import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

export const Navbar = (props) => {
	const { i18n } = useTranslation();
	const { logout } = useAuth0();
	return (
		<aside
			className={`h-screen w-64 flex ${
				i18n.language === "ar" ? "font-Noto" : "font-Comfortaa"
			}`}
			aria-label="Sidebar"
		>
			<div className="flex flex-col justify-evenly py-4 px-3 bg-green-600 h-full">
				<div className="w-full mb-5">
					<span className="font-Comfortaa w-fit break-words text-3xl text-white font-semibold">
						{i18n.t("Navbar.Welcome")}
						{" "}
						<span className="text-2xl">{props.data}</span>
					</span>
				</div>
				<ul className="space-y-8">
					{props.links.map((link) => (
						<li
							key={link.Header}
							className="flex items-center p-2 text-xl font-normal text-white rounded-lg hover:bg-green-900 transition-all duration-300"
						>
							<div className="flex items-center justify-center">
								<img className="w-12" src={link.Icon} alt={link.Header} />
							</div>
							<NavLink className="h-full w-full m-3" to={`${link.Link}`}>
								{i18n.t(`Navbar.${link.Header}`)}
							</NavLink>
						</li>
					))}
					<li
						key="logout"
						className="flex items-center p-2 text-xl font-normal text-white rounded-lg hover:bg-green-900 transition-all duration-300"
					>
						<div className="flex items-center justify-center">
							<img className="w-12" src={logoutIcon} alt="logout" />
						</div>
						<button
							type="submit"
							className={`h-full w-full ${
								i18n.language === "ar" ? "text-right" : "text-left"
							} m-3`}
							onClick={() => logout()}
						>
							{i18n.t("Navbar.Logout")}
						</button>
					</li>
				</ul>
			</div>
		</aside>
	);
};
