import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const COLUMNS = [
	{ Header: "ID" },
	{ Header: "Name" },
	{ Header: "NumberOfOffers" },
	{ Header: "Rating" },
];

export const Table = (props) => {
	const { user, getAccessTokenSilently } = useAuth0();
	const { i18n } = useTranslation();

	const handleSubmit = async (id) => {
		try {
			const token = await getAccessTokenSilently();

			const response = await fetch(
				`http://164.92.248.132/api/companies/${user.sub}/delegates/${id}`,
				{
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.ok) {
				window.location.reload();
			}
		} catch (e) {
			alert(e);
		}
	};

	return (
		<>
			<table className="w-full shadow-md text-md text-left">
				<thead key="thead" className="text-xl border-b-2 border-green-800">
					<tr>
						{COLUMNS.map((column) => {
							return (
								<th scope="col" className="px-6 py-3">
									{i18n.t(`Company.Delegates.Headers.${column.Header}`)}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody className="font-Comfortaa" key="tbody">
					{props.data.map((prop) => {
						return (
							<tr className="border-b">
								<td className="px-6 py-4 font-medium whitespace-nowrap">
									{prop._id}
								</td>
								<td className="px-6 py-4 font-medium whitespace-nowrap">
									{prop.name}
								</td>
								<td className="px-6 py-4 font-medium whitespace-nowrap">
									{prop.offers.length}
								</td>
								<td className="px-6 py-4 font-medium whitespace-nowrap">
									{prop.rating}
								</td>
								<td>
									<Link
										to={`/delegate/${prop._id}`}
										className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold m-4 py-2 px-4 rounded-lg"
									>
										{i18n.t("Company.Delegates.Show")}
									</Link>
								</td>
								<td>
									<button
										onClick={() => handleSubmit(prop._id)}
										className="bg-red-600 hover:bg-red-800 transition-all duration-300 text-white font-bold m-4 py-2 px-4 rounded-lg"
									>
										{i18n.t("Company.Delegates.Delete")}
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};
