import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../../../components/Navbar";
import { NotFound } from "../../../../components/NotFound";
import { useTranslation } from "react-i18next";
import { LINKS } from "../../navlinks";

const DelegateProfile = (props) => {
	const { i18n } = useTranslation();
	return (
		<section
			className={`w-screen flex ${
				i18n.language === "ar" ? "font-Noto" : "font-Comfortaa"
			}`}
		>
			<Navbar links={LINKS} data={JSON.parse(localStorage.getItem("company")).name} />
			<main>
				<div className="w-fit m-10 p-4">
					<h1 className="text-3xl">{i18n.t("Company.Profile.Title")}</h1>
				</div>
				<div className="flex flex-col justify-around h-96 m-12 p4">
					<div className="text-xl">
						<p>
							{i18n.t("Company.Delegates.DelegatePage.ID")}
							{": "}
							<strong className="font-Comfortaa text-green-800">{props.data._id}</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Company.Delegates.DelegatePage.Name")}
							{": "}
							<strong className="font-Comfortaa text-green-800">{props.data.name}</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Company.Delegates.DelegatePage.Email")}
							{": "}
							<strong className="font-Comfortaa text-green-800">{props.data.email}</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Company.Delegates.DelegatePage.Gender")}
							{": "}
							<strong className="font-Comfortaa text-green-800">{props.data.gender}</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Company.Delegates.DelegatePage.NumberOfOffers")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{props.data.total_offers_count}
							</strong>
						</p>
						<ul className="ml-12 list-disc">
							<li className="m-2">
								{i18n.t("Company.Delegates.DelegatePage.Completed")}
								{": "}
								<strong className="font-Comfortaa text-green-800">
									{props.data.completed_offers_count}
								</strong>
							</li>
							<li className="m-2">
								{i18n.t("Company.Delegates.DelegatePage.Canceled")}
								{": "}
								<strong className="font-Comfortaa text-green-800">
									{props.data.canceled_offers_count}
								</strong>
							</li>
						</ul>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Company.Delegates.DelegatePage.AssembledPlastic")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{props.data.plastic_collected}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Company.Delegates.DelegatePage.Rating")}
							{": "}
							<strong className="font-Comfortaa text-green-800">{props.data.rating}</strong>
						</p>
					</div>
				</div>
			</main>
		</section>
	);
};

export const Delegate = () => {
	const { delegateID } = useParams();
	const { user, getAccessTokenSilently } = useAuth0();
	const [delegate, setDelegate] = useState({});
	const [message, setMessage] = useState("");

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();
			const response = await fetch(
				`http://164.92.248.132/api/companies/${user.sub}/delegates/${delegateID}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const json = await response.json();
			if (response.status === 200 || response.status === 304) {
				setDelegate(json.data);
			} else {
				setMessage(json.error.message);
			}
		})();
	}, [user.sub, delegateID, getAccessTokenSilently]);

	return !(Object.keys(delegate).length === 0 && message.length !== 0) ? (
		<DelegateProfile data={delegate} />
	) : (
		<NotFound data={message} />
	);
};
