import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../../../components/Navbar";
import { offers } from "..";

export const Offer = () => {
	const URLParams = useParams();

	const offer = offers[URLParams.offerID - 1];

	return (
		<section className="font-Comfortaa w-screen flex">
			<Navbar />
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">{`${offer.clientName}'s Offer`}</h1>
				</div>
				<div className="flex justify-between h-96 w-full m-12 p4">
					<div className="flex flex-col justify-around">
						<div className="text-xl">
							<p>
								id: <strong>{offer.id}</strong>
							</p>
						</div>
						<div className="text-xl">
							<p>
								Client Gender: <strong>{offer.clientGender}</strong>
							</p>
						</div>
						<div className="text-xl">
							<p>
								District: <strong>{offer.district}</strong>
							</p>
						</div>
						<div className="text-xl">
							<p>
								Item Name: <strong>{offer.itemName}</strong>
							</p>
						</div>
						<div className="text-xl">
							<p>
								Item Type: <strong>{offer.itemType}</strong>
							</p>
						</div>
						<div className="text-xl">
							<p>
								Plastic Quantity: <strong>{offer.quantity}</strong>
							</p>
						</div>
					</div>
					<form
						action=""
						method="POST"
						className="flex flex-col justify-around text-xl"
					>
						<div className="flex items-center text-xl">
							<p>Offer ID:</p>
							<div className="relative border-b-2 ml-8 focus-within:border-green-500">
								<input
									type="text"
									name="offerID"
									placeholder=" "
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
									disabled
								/>
								<label
									htmlFor="offerID"
									className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									{offer.id}
								</label>
							</div>
						</div>
						<div className="flex items-center text-xl">
							<p>Delegate ID:</p>
							<div className="relative border-b-2 ml-8 focus-within:border-green-500">
								<input
									type="text"
									name="delegateID"
									placeholder=" "
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
								/>
								<label
									htmlFor="delegateID"
									className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									Enter delegate id
								</label>
							</div>
						</div>
						<button className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
							Assign to Delegate
						</button>
					</form>
				</div>
			</main>
		</section>
	);
};
