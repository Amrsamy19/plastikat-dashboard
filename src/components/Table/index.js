import React from "react";
import { Link } from "react-router-dom";

const COLUMNS = [
	{ Header: "id" },
	{ Header: "Name" },
	{ Header: "Number of Offers" },
	{ Header: "Assembled Plastic" },
];

export const Table = (props) => {
	return (
		<div>
			<table className="w-full shadow-md text-md text-left">
				<thead className="text-xl border-b-2 border-green-800">
					<tr>
						{COLUMNS.map((column) => {
							return (
								<th scope="col" className="px-6 py-3">
									{column.Header}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{props.data.map((delegate) => {
						return (
							<tr className="border-b">
								<td className="px-6 py-4 font-medium whitespace-nowrap">
									{delegate.id}
								</td>
								<td className="px-6 py-4 font-medium whitespace-nowrap">
									{delegate.name}
								</td>
								<td className="px-6 py-4 font-medium whitespace-nowrap">
									{delegate.totalOffers}
								</td>
								<td className="px-6 py-4 font-medium whitespace-nowrap">
									{delegate.assembledPlastic}
								</td>
								<td>
									<Link to={`/delegate/${delegate.id}`} className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold m-4 py-2 px-4 rounded-lg">
										Show
									</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
