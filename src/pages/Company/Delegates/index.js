import Navbar from "../../Navbar";

const columnTitles = [
	"ID",
	"Name",
	"Gender",
	"Number of Offers",
	"Assembled Plastic",
	"Rating",
];

const delegates = [
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

const Delegate = (props) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items center">
			<div className="bg-white p-2 rounded">
				<div className="flex flex-col justify-around h-96 m-12 p4">
					<div className="text-xl">
						<p>
							Name: <strong>{props.name}</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							Gender: <strong>{props.gender}</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							Number of Offers Collected: <strong>{props.totalOffers}</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							Assembled Plastic: <strong>{props.assembledPlastic}</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							Rating: <strong>{props.rating}</strong>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Delegates = () => {
	return (
		<section className="font-Comfortaa flex">
			<Navbar />
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">Delegates</h1>
				</div>
				<div className="flex items-start justify-center px-12">
					<div className="w-full shadow-md">
						<table className="w-full text-md text-left">
							<thead className="text-xl uppercase border-b-2 border-green-800">
								<tr>
									{columnTitles.map((title) => (
										<th scope="col" className="px-6 py-3">
											{title}
										</th>
									))}
									<th scope="col" className="px-6 py-3">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody>
								{delegates.map((delegate) => (
									<tr className="border-b">
										<th
											scope="row"
											className="px-6 py-4 font-medium whitespace-nowrap"
										>
											{delegate.id}
										</th>
										<td className="px-6 text-center text-lg py-4">
											{delegate.name}
										</td>
										<td className="px-6 text-center text-lg py-4">
											{delegate.gender}
										</td>
										<td className="px-6 text-center text-lg py-4">
											{delegate.totalOffers}
										</td>
										<td className="px-6 text-center text-lg py-4">
											{delegate.assembledPlastic}
										</td>
										<td className="px-6 text-center text-lg py-4">
											{delegate.rating}
										</td>
										<td className="px-6 text-center text-lg py-4">
											<button>Show</button>
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

export default Delegates;
