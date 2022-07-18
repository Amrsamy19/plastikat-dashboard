import React, { useState, useEffect } from "react";
import { Table } from "../../../components/Table";
import { Navbar } from "../../../components/Navbar";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import { LINKS } from "../navlinks";

export const Delegates = () => {
	const { user, getAccessTokenSilently } = useAuth0();
	const { i18n } = useTranslation();
	const [delegates, setDelegates] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const token = await getAccessTokenSilently();
				const response = await fetch(
					`http://164.92.248.132/api/companies/${user.sub}/delegates`,
					{
						method: "GET",
						headers: {
							cache: "no-store",
							Authorization: `Bearer ${token}`,
						},
					}
				);
				if (response.status === 200) {
					const json = await response.json();
					setDelegates(json.data);
				}
			} catch (e) {
				console.log(e);
			}
		})();
	}, [getAccessTokenSilently, user.sub]);

	return (
		<section
			className={`flex ${
				i18n.language === "ar" ? "font-Noto" : "font-Comfortaa"
			}`}
		>
			<Navbar
				links={LINKS}
				data={JSON.parse(localStorage.getItem("company")).name}
			/>
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">{i18n.t("Company.Delegates.Title")}</h1>
				</div>
				<div className="flex items-start justify-center px-12">
					<Table data={delegates} />
				</div>
				<div className="text-xl m-12">
					<Link to="/add-delegate">
						<button className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
							{i18n.t("Company.Delegates.Add")}
						</button>
					</Link>
				</div>
			</main>
		</section>
	);
};
