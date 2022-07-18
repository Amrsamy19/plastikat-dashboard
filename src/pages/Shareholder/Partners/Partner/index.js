import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { Navbar } from "../../../../components/Navbar";
import { LINKS } from "../../navlinks";
import { useParams } from "react-router-dom";

export const Partner = () => {
	const { i18n } = useTranslation();
	const { partnerID } = useParams();
	const { user, getAccessTokenSilently } = useAuth0();
	const [partner, setPartner] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const token = await getAccessTokenSilently();
				const response = await fetch(
					`http://164.92.248.132/api/partners/${partnerID}`,
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				const json = await response.json();
				if (response.status === 200 || response.status === 304) {
					setPartner(json.data);
				}
			} catch (e) {
				console.log(e);
			}
		})();
	}, [getAccessTokenSilently, partnerID, user.sub]);

	if (!partner) return <div>Loading</div>;

	return (
		<section
			className={`flex ${
				i18n.language === "ar" ? "font-Noto" : "font-Comfortaa"
			}`}
		>
			<Navbar links={LINKS} data={""} />
			<main className="max-h-screen overflow-auto w-full ml-auto">
				<div className="w-fit m-10 p-4">
					<h1 className="text-3xl">
						{i18n.t("Shareholder.Partners.PartnerProfile.Title")}
					</h1>
				</div>
				<div className="flex flex-col justify-around h-48 mx-10 p-4">
					<div className="text-xl">
						<p>
							{i18n.t("Shareholder.Partners.PartnerProfile.ID")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{partner._id}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Shareholder.Partners.PartnerProfile.Name")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{partner.name}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Shareholder.Partners.PartnerProfile.Description")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{partner.name}
							</strong>
						</p>
					</div>
				</div>
				<div className="w-fit m-10 p-4">
					<h1 className="text-3xl">
						{i18n.t("Shareholder.Partners.PartnerProfile.Rewards")}
					</h1>
				</div>
				<div className="h-60 m-10 p-4">
					{partner.rewards.map((reward) => {
						return (
							<div className="inline-grid gap-4 grid-col-2 m-2">
								<div className="text-xl">
									<p>
										{i18n.t("Shareholder.Partners.PartnerProfile.Reward.ID")}
										{": "}
										<strong className="font-Comfortaa text-green-800">
											{reward._id}
										</strong>
									</p>
								</div>
								<div className="text-xl">
									<p>
										{i18n.t("Shareholder.Partners.PartnerProfile.Reward.Name")}
										{": "}
										<strong className="font-Comfortaa text-green-800">
											{reward.name}
										</strong>
									</p>
								</div>
								<div className="text-xl">
									<p>
										{i18n.t(
											"Shareholder.Partners.PartnerProfile.Reward.Points"
										)}
										{": "}
										<strong className="font-Comfortaa text-green-800">
											{reward.points}
										</strong>
									</p>
								</div>
								<div className="text-xl">
									<p>
										{i18n.t(
											"Shareholder.Partners.PartnerProfile.Reward.Status"
										)}
										{": "}
										<strong className="font-Comfortaa text-green-800">
											{reward.status}
										</strong>
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</main>
		</section>
	);
};
