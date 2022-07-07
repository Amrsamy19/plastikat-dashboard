import { Navbar } from "../../Navbar";

const offers = [
	{ Id: 1, type: "DASANI", date: "2020-01-01", status: "Pending" },
	{ Id: 2, type: "DASANI", date: "2020-01-01", status: "Pending" },
	{ Id: 3, type: "DASANI", date: "2020-01-01", status: "Pending" },
	{ Id: 4, type: "DASANI", date: "2020-01-01", status: "Pending" },
	{ Id: 5, type: "DASANI", date: "2020-01-01", status: "Pending" },
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
									<th scope="col" className="px-6 py-3">
										ID
									</th>
									<th scope="col" className="px-6 py-3">
										Type
									</th>
									<th scope="col" className="px-6 py-3">
										Date
									</th>
									<th scope="col" className="px-6 py-3">
										Status
									</th>
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
											{offer.Id}
										</th>
										<td className="px-6 py-4">{offer.type}</td>
										<td className="px-6 py-4">{offer.date}</td>
										<td className="px-6 py-4">{offer.status}</td>
										<td className="px-6 py-4">
											<button className="m-2 bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
												Accept
											</button>
											<button className="bg-red-600 hover:bg-red-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
												Reject
											</button>
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
