import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../../../components/Navbar";
import { LINKS } from "../../navlinks";
import { useTranslation } from "react-i18next";

export const Company = () => {
	const { companyID } = useParams();
	const { i18n } = useTranslation();
	const [company, setCompany] = useState(null);
	const { user, getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		(async () => {
			try {
				const token = await getAccessTokenSilently();
				const response = await fetch(
					`http://164.92.248.132/api/companies/${companyID}`,
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				const json = await response.json();
				if (response.status === 200 || response.status === 304) {
					setCompany(json.data);
				}
			} catch (e) {
				console.log(e);
			}
		})();
	}, [user.sub, getAccessTokenSilently, companyID]);

	if (!company) return <div>Loading</div>;

	return (
		<section
			className={`flex ${
				i18n.language === "ar" ? "font-Noto" : "font-Comfortaa"
			}`}
		>
			<Navbar links={LINKS} data={""} />
			<main>
				<div className="w-fit m-10 p-4">
					<h1 className="text-3xl">
						{i18n.t("Shareholder.Company.CompanyPage.Title")}
					</h1>
				</div>
				<div className="flex flex-col justify-around h-96 m-12 p4">
					<div className="text-xl">
						<p>
							{i18n.t("Shareholder.Company.CompanyPage.ID")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{company._id}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Shareholder.Company.CompanyPage.Name")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{company.name}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Shareholder.Company.CompanyPage.Email")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{company.email}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Shareholder.Company.CompanyPage.Phone")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{company.contact.phone}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Shareholder.Company.CompanyPage.District")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{company.contact.address.district}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Shareholder.Company.CompanyPage.Governorate")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{company.contact.address.governorate}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Shareholder.Company.CompanyPage.NumberOfDelegates")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{company.delegates.length}
							</strong>
						</p>
					</div>
				</div>
			</main>
		</section>
	);
};
