import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navbar } from "../../../components/Navbar";
import { LINKS } from "../navlinks";

const COLUMNS = [
	{ Header: "ID" },
	{ Header: "NumberOfItems" },
	{ Header: "DelegateName" },
	{ Header: "ClientName" },
];

const STATUS = [
	"DELEGATE_ASSIGNED",
	"COMPANY_ASSIGNED",
	"COMPLETED",
	"CANCELED",
];

export const Home = () => {
	const { i18n } = useTranslation();
	const { user, getAccessTokenSilently } = useAuth0();
	const [company, setCompany] = useState({});
	const [offers, setOffers] = useState([]);
	const [filteredOffers, setFilteredOffers] = useState([]);

	const getOffers = async (token, companyID) => {
		try {
			const response = await fetch(
				`http://164.92.248.132/api/companies/${companyID}/offers`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const json = await response.json();
			if (response.status === 200 || response.status === 304) {
				setOffers(json.data);
			}
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const token = await getAccessTokenSilently();
				const response = await fetch(
					`http://164.92.248.132/api/companies/${user.sub}`,
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				if (response.status === 200 || response.status === 304) {
					const json = await response.json();
					setCompany(json.data);
					getOffers(token, user.sub);
				}
			} catch (e) {
				console.log(e);
			}
		})();
	}, [getAccessTokenSilently, user.sub]);

	const handleFilter = (event) => {
		event.target.value === i18n.t("Company.Home.Headers.Status")
			? setFilteredOffers(offers)
			: setFilteredOffers(
					offers.filter((offer) => offer.status === event.target.value)
			  );
	};

	localStorage.setItem("company", JSON.stringify(company));

	return (
		<section
			className={`flex ${
				i18n.language === "ar" ? "font-Noto" : "font-Comfortaa"
			}`}
		>
			<Navbar links={LINKS} data={company.name} />
			<main className="max-h-screen overflow-auto w-full ml-auto">
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">{i18n.t("Company.Home.Title")}</h1>
				</div>
				<div className="flex items-start justify-center px-12">
					<div className="w-full shadow-md">
						<table id="offers" className="w-full text-md text-left">
							<thead className="text-lg border-b-2 border-green-800">
								<tr>
									{COLUMNS.map((column) => {
										return (
											<th
												key={i18n.t(`Company.Home.Headers.${column.Header}`)}
												scope="col"
												className="text-center px-6 py-3"
											>
												{i18n.t(`Company.Home.Headers.${column.Header}`)}
											</th>
										);
									})}
									<th scope="col" className="text-center px-6 py-3">
										<select
											className="w-fit"
											onChange={handleFilter}
											defaultValue={i18n.t("Company.Home.Headers.Status")}
										>
											<option value={i18n.t("Company.Home.Headers.Status")}>
												{i18n.t("Company.Home.Headers.Status")}
											</option>
											{STATUS.map((status) => {
												return (
													<option key={status} value={status} className="font-Comfortaa">
														{status}
													</option>
												);
											})}
										</select>
									</th>
									<th scope="col" className="px-6 py-3">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className="font-Comfortaa" key="tbody">
								{filteredOffers.map((offer) => (
									<tr key={offer._id} className="border-b">
										<th
											scope="row"
											className="px-6 py-4 font-medium whitespace-nowrap"
										>
											{offer._id}
										</th>
										<td className="text-center px-6 py-4">
											{offer.items.length}
										</td>
										<td className="text-center px-6 py-4">
											{offer.delegate === null
												? "Not Yet Assigned"
												: offer.delegate.name}
										</td>
										<td className="text-center px-6 py-4">
											{offer.client.name}
										</td>
										<td className="text-center px-6 py-4">{offer.status}</td>
										<td className="text-center px-6 py-4">
											<Link to={`/offer/${offer._id}`}>
												<button className="m-2 bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
													{i18n.t("Company.Home.Show")}
												</button>
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</main>
		</section>
	);
};
