import React from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "../../../../components/Navbar";
import { delegates } from "..";

export const Delegate = () => {
	const URLParams = useParams();

	const delegate = delegates[URLParams.delegateID - 1];

	return (
		<section className="font-Comfortaa w-screen flex">
			<Navbar />
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">{`${delegate.name}Profile`}</h1>
				</div>
				<div className="flex flex-col justify-around h-96 m-12 p4">
					<div className="text-xl">
						<p>
							id: <strong>{delegate.id}</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							Gender: <strong>{delegate.gender}</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							Number of Offers Collected:{" "}
							<strong>{delegate.totalOffers}</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							Assembled Plastic: <strong>{delegate.assembledPlastic}</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							Rating: <strong>{delegate.rating}</strong>
						</p>
					</div>
					<div className="text-xl">
						<Link to="/add-delegate">
							<button className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
								Add Delegate
							</button>
						</Link>
					</div>
				</div>
			</main>
		</section>
	);
};
