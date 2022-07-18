import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navbar } from "../../../components/Navbar";
import { LINKS } from "../navlinks";

const COLUMNS = [
	{ Header: "ID" },
	{ Header: "Name" },
	{ Header: "NumberOfBranches" },
];

export const Partners = () => {
	const { i18n } = useTranslation();
	const { user, getAccessTokenSilently } = useAuth0();
	const [partners, setPartners] = useState([]);

	const handleSubmit = async (partnerID) => {
		try {
			const token = await getAccessTokenSilently();
			const response = await fetch(`http://164.92.248.132/api/partners/${partnerID}`, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 204) {
				alert("Partner has been deleted Successfully");
				window.location.reload();
			}
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const token = await getAccessTokenSilently();
				const response = await fetch(`http://164.92.248.132/api/partners/`, {
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				if (response.status === 200 || response.status === 304) {
					const json = await response.json();
					setPartners(json.data);
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
			<Navbar links={LINKS} data={""} />
			<main className="max-h-screen overflow-auto w-full ml-auto">
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">{i18n.t("Shareholder.Partners.Title")}</h1>
				</div>
				<div className="flex items-start justify-center px-12">
					<div className="w-full shadow-md">
						<table className="w-full text-md text-left">
							<thead className="text-lg border-b-2 border-green-800">
								<tr>
									{COLUMNS.map((column) => {
										return (
											<th
												key={i18n.t(
													`Shareholder.Partners.Headers.${column.Header}`
												)}
												scope="col"
												className="text-center px-6 py-3"
											>
												{i18n.t(
													`Shareholder.Partners.Headers.${column.Header}`
												)}
											</th>
										);
									})}
									<th scope="col" className="px-6 py-3">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className="font-Comfortaa" key="tbody">
								{partners.map((partner) => (
									<tr key={partner._id} className="border-b">
										<th
											scope="row"
											className="px-6 py-4 font-medium whitespace-nowrap"
										>
											{partner._id}
										</th>
										<td className="text-center px-6 py-4">{partner.name}</td>
										<td className="text-center px-6 py-4">
											{partner.branches}
										</td>
										<td className="text-center px-6 py-4">
											<Link to={`/partner/${partner._id}`}>
												<button className="m-2 bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
													{i18n.t("Shareholder.Partners.Show")}
												</button>
											</Link>
										</td>
										<td>
											<button
												onClick={() => handleSubmit(partner._id)}
												className="bg-red-600 hover:bg-red-800 transition-all duration-300 text-white font-bold m-4 py-2 px-4 rounded-lg"
											>
												{i18n.t("Shareholder.Partners.Delete")}
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className="text-xl m-12">
					<Link to="/add-partner">
						<button className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
							{i18n.t("Shareholder.Partners.Add")}
						</button>
					</Link>
				</div>
			</main>
		</section>
	);
};
