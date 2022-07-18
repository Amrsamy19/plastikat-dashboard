import React, { useEffect, useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../../../components/Navbar";
import { useTranslation } from "react-i18next";
import { LINKS } from "../../navlinks";

export const Offer = () => {
	const { user, getAccessTokenSilently } = useAuth0();
	const [offer, setOffer] = useState(null);
	const { i18n } = useTranslation();
	const URLParams = useParams();
	const delegateID = useRef();

	const submitDelegate = async () => {
		const data = JSON.stringify({
			delegate: delegateID.current.value,
			operation_type: "ASSIGN_DELEGATE",
		});
		const token = await getAccessTokenSilently();

		const response = await fetch(
			`http://164.92.248.132/api/offers/${offer._id}`,
			{
				method: "PATCH",
				mode: "cors",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: data,
			}
		);

		if (response.ok) {
			alert("Delegate has been assigned successfully");
			window.location.href = "http://localhost:3000/company/offers/";
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const token = await getAccessTokenSilently();
				const response = await fetch(
					`http://164.92.248.132/api/companies/${user.sub}/offers/${URLParams.offerID}`,
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				const json = await response.json();
				if (response.status === 200 || response.status === 304) {
					setOffer(json.data);
				}
			} catch (e) {
				console.log(e);
			}
		})();
	}, [URLParams.offerID, getAccessTokenSilently, user.sub]);

	if (!offer) return <div>Loading</div>;

	return (
		<section
			className={`w-screen flex ${
				i18n.language === "ar" ? "font-Noto" : "font-Comfortaa"
			}`}
		>
			<Navbar
				links={LINKS}
				data={JSON.parse(localStorage.getItem("company")).name}
			/>
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">
						{i18n.language === "ar"
							? `${i18n.t("Company.Home.OfferPage.Title")} ${offer.client.name}`
							: `${offer.client.name}'s ${i18n.t(
									"Company.Home.OfferPage.Title"
							  )}`}
					</h1>
				</div>
				<div className="flex justify-between h-96 w-full m-12 p4">
					<div className="flex flex-col justify-around">
						<div className="text-xl">
							<p>
								{i18n.t("Company.Home.OfferPage.ID")}
								{" : "}
								<strong className="font-Comfortaa">{offer._id}</strong>
							</p>
						</div>
						<div className="text-xl">
							<p>
								{i18n.t("Company.Home.OfferPage.ClientEmail")}
								{" : "}
								<strong className="font-Comfortaa">{offer.client.email}</strong>
							</p>
						</div>
						<div className="text-xl">
							<p>
								{i18n.t("Company.Home.OfferPage.Delegate.ID")}
								{" : "}
								<strong
									className={`${
										i18n.language === "ar" ? "font-Noto" : "font-Comfortaa"
									}`}
								>
									{offer.delegate === null
										? i18n.t("Company.Home.OfferPage.Delegate.NotFound")
										: offer.delegate.ID}
								</strong>
							</p>
						</div>
						<div className="text-xl">
							<p>
								{i18n.t("Company.Home.OfferPage.Delegate.Name")}
								{" : "}
								<strong
									className={`${
										i18n.language === "ar" ? "font-Noto" : "font-Comfortaa"
									}`}
								>
									{offer.delegate === null
										? i18n.t("Company.Home.OfferPage.Delegate.NotFound")
										: offer.delegate.name}
								</strong>
							</p>
						</div>
						<div className="text-xl">
							<p>
								{i18n.t("Company.Home.OfferPage.Points")}
								{" : "}
								<strong className="font-Comfortaa">{offer.points}</strong>
							</p>
						</div>
						<div className="text-xl">
							<p>
								{i18n.t("Company.Home.OfferPage.Created")}
								{" : "}
								<strong className="font-Comfortaa">
									{new Intl.DateTimeFormat("en-GB", {
										dateStyle: "full",
										timeStyle: "long",
									}).format(new Date(offer.created_at))}
								</strong>
							</p>
						</div>
					</div>
					<div className="flex flex-col justify-around text-xl">
						<div className="flex items-center text-xl">
							<p>
								{i18n.t("Company.Home.OfferPage.OfferID")}
								{" : "}
							</p>
							<div className="relative ml-8 focus-within:border-green-500">
								<input
									type="text"
									name="offerID"
									placeholder=""
									value={offer._id}
									className="font-Comfortaa block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
									disabled
								/>
							</div>
						</div>
						<div className="flex items-center text-xl">
							<p>
								{i18n.t("Company.Home.OfferPage.DelegateID")}
								{" : "}
							</p>
							<div className="relative ml-8 focus-within:border-green-500">
								<input
									type="text"
									name="delegateID"
									value={offer.delegate !== null ? offer.delegate._id : ""}
									ref={delegateID}
									placeholder=" "
									className="font-Comfortaa block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
								/>
								<label
									htmlFor="delegateID"
									className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									{i18n.t("Company.Home.OfferPage.EnterDelegateID")}
								</label>
							</div>
						</div>
						<button
							disabled={offer.status !== "COMPANY_ASSIGNED" ? true : false}
							onClick={submitDelegate()}
							className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg"
						>
							{i18n.t("Company.Home.OfferPage.Assign")}
						</button>
					</div>
				</div>
			</main>
		</section>
	);
};
