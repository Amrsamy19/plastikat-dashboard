import { Link } from "react-router-dom";
import { Navbar } from "../../../components/Navbar";

export const offers = [
	{
		id: 1,
		itemName: "DASANI",
		itemType: "SMALL_BOTTLE",
		quantity: 15,
		date: "2020-01-01",
		district: "Giza",
		clientName: "خلود العلايمي - Khalod Alalaaiamai",
		clientGender: "Female",
		status: "Pending",
	},
	{
		id: 2,
		itemName: "DASANI",
		itemType: "SMALL_BOTTLE",
		date: "2020-01-01",
		district: "Giza",
		clientName: "خلود العلايمي - Khalod Alalaaiamai",
		clientGender: "Female",
		status: "Pending",
	},
	{
		id: 3,
		itemName: "DASANI",
		itemType: "SMALL_BOTTLE",
		date: "2020-01-01",
		district: "Giza",
		clientName: "خلود العلايمي - Khalod Alalaaiamai",
		clientGender: "Female",
		status: "Pending",
	},
	{
		id: 4,
		itemName: "DASANI",
		itemType: "SMALL_BOTTLE",
		date: "2020-01-01",
		district: "Giza",
		clientName: "خلود العلايمي - Khalod Alalaaiamai",
		clientGender: "Female",
		status: "Pending",
	},
	{
		id: 5,
		itemName: "DASANI",
		itemType: "SMALL_BOTTLE",
		date: "2020-01-01",
		district: "Giza",
		clientName: "خلود العلايمي - Khalod Alalaaiamai",
		clientGender: "Female",
		status: "Pending",
	},
];

const COLUMNS = [
	{ Header: "id" },
	{ Header: "Item Name" },
	{ Header: "Item Type" },
	{ Header: "Client Name" },
	{ Header: "Status" },
];

export const Home = () => {
	return (
		<section className="font-Comfortaa flex">
			<Navbar />
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">Recent Offers</h1>
				</div>
				<div className="flex items-start justify-center px-12">
					<div className="w-full shadow-md">
						<table className="w-full text-md text-left">
							<thead className="text-lg uppercase border-b-2 border-green-800">
								<tr>
									{COLUMNS.map((column) => {
										return (
											<th scope="col" className="px-6 py-3">
												{column.Header}
											</th>
										);
									})}
									<th scope="col" className="px-6 py-3">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody>
								{offers.map((offer) => (
									<tr className="border-b">
										<th
											scope="row"
											className="px-6 py-4 font-medium whitespace-nowrap"
										>
											{offer.id}
										</th>
										<td className="px-6 py-4">{offer.itemName}</td>
										<td className="px-6 py-4">{offer.itemType}</td>
										<td className="px-6 py-4">{offer.clientName}</td>
										<td className="px-6 py-4">{offer.status}</td>
										<td className="px-6 py-4">
											<Link to={`/offer/${offer.id}`}>
												<button className="m-2 bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
													Show Offer
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
