import { Table } from "../../../components/Table";
import { Navbar } from "../../Navbar";

export const Delegates = () => {
	return (
		<section className="font-Comfortaa flex">
			<Navbar />
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">Delegates</h1>
				</div>
				<div className="flex items-start justify-center px-12">
					<Table />
				</div>
			</main>
		</section>
	);
};
