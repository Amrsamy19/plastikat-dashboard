import React, { useState, useEffect } from "react";
import { Navbar } from "../../../components/Navbar";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import { LINKS } from "../navlinks";

const COLUMNS = [
	{ Header: "ID" },
	{ Header: "Name" },
	{ Header: "TotalOffers" },
];

export const Home = () => {
	const { user, getAccessTokenSilently } = useAuth0();
	const { i18n } = useTranslation();
	const [companies, setCompanies] = useState([]);

	const handleSubmit = async (companyID) => {
		try {
			const token = await getAccessTokenSilently();
			const response = await fetch(
				`http://164.92.248.132/api/companies/${companyID}`,
				{
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (response.status === 204) {
				alert("Company has been deleted Successfully");
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
				const response = await fetch(`http://164.92.248.132/api/companies/`, {
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				if (response.status === 200) {
					const json = await response.json();
					setCompanies(json.data);
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
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">{i18n.t("Shareholder.Title")}</h1>
				</div>
				<div className="flex items-start justify-center px-12">
					<table className="w-full shadow-md text-md text-left">
						<thead className="text-xl border-b-2 border-green-800">
							<tr>
								{COLUMNS.map((column) => {
									return (
										<th
											key={i18n.t(
												`Shareholder.Company.Headers.${column.Header}`
											)}
											scope="col"
											className="px-6 py-3"
										>
											{i18n.t(`Shareholder.Company.Headers.${column.Header}`)}
										</th>
									);
								})}
							</tr>
						</thead>
						<tbody className="font-Comfortaa" key="tbody">
							{companies.map((company) => {
								return (
									<tr key={company._id} className="border-b">
										<td className="px-6 py-4 font-medium whitespace-nowrap">
											{company._id}
										</td>
										<td className="px-6 py-4 font-medium whitespace-nowrap">
											{company.name}
										</td>
										<td className="px-6 py-4 font-medium whitespace-nowrap">
											{company.total_offers_count}
										</td>
										<td>
											<Link
												to={`/company/${company._id}`}
												className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold m-4 py-2 px-4 rounded-lg"
											>
												{i18n.t("Shareholder.Company.Show")}
											</Link>
										</td>
										<td>
											<button
												onClick={() => handleSubmit(company._id)}
												className="bg-red-600 hover:bg-red-800 transition-all duration-300 text-white font-bold m-4 py-2 px-4 rounded-lg"
											>
												{i18n.t("Shareholder.Company.Delete")}
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<div className="text-xl m-12">
					<Link to="/add-company">
						<button className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
							{i18n.t("Shareholder.Company.Add")}
						</button>
					</Link>
				</div>
			</main>
		</section>
	);
};
