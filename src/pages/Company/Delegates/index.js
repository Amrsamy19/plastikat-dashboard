import { Table } from "../../../components/Table";
import { Navbar } from "../../../components/Navbar";
import { Link } from "react-router-dom";

export const delegates = [
	{
		id: 1,
		name: "خلود العلايمي - Khalod Alalaaiamai",
		gender: "Female",
		totalOffers: 10,
		assembledPlastic: 100,
		rating: "3.0",
	},
	{
		id: 2,
		name: "بتول السقا - Btol Alsqa",
		gender: "Female",
		totalOffers: 10,
		assembledPlastic: 100,
		rating: "3.0",
	},
	{
		id: 3,
		name: "نوف بن عمر - Nof Bn Omar",
		gender: "Male",
		totalOffers: 10,
		assembledPlastic: 100,
		rating: "3.0",
	},
	{
		id: 4,
		name: "دكتور عنود النقاش - Dktoar Anod AlnqIsh",
		gender: "Male",
		totalOffers: 10,
		assembledPlastic: 100,
		rating: "3.0",
	},
	{
		id: 5,
		name: "خلود العواني - Khalod Alawanei",
		gender: "Female",
		totalOffers: 10,
		assembledPlastic: 100,
		rating: "3.0",
	},
];

export const Delegates = () => {
	return (
		<section className="font-Comfortaa flex">
			<Navbar />
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">Delegates</h1>
				</div>
				<div className="flex items-start justify-center px-12">
					<Table data={delegates} />
				</div>
				<div className="text-xl m-12">
					<Link to="/add-delegate">
						<button className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
							Add Delegate
						</button>
					</Link>
				</div>
			</main>
		</section>
	);
};
