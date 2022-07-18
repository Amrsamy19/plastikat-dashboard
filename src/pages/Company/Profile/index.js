import { useTranslation } from "react-i18next";
import { Navbar } from "../../../components/Navbar";
import { LINKS } from "../navlinks";

export const Profile = () => {
	const { i18n } = useTranslation();
	const company = JSON.parse(localStorage.getItem("company"));

	return (
		<section
			className={`w-screen flex ${
				i18n.language === "ar" ? "font-Noto" : "font-Comfortaa"
			}`}
		>
			<Navbar links={LINKS} />
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">{i18n.t("Company.Profile.Title")}</h1>
				</div>
				<div className="flex flex-col justify-around h-96 m-12 p4">
					<div className="text-xl">
						<p>
							{i18n.t("Company.Profile.Name")}:{" "}
							<strong className="font-Comfortaa text-green-800">
								{company.name}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Company.Profile.Email")}:{" "}
							<strong className="font-Comfortaa text-green-800">
								{company.email}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Company.Profile.District")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{company.contact.address.district}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Company.Profile.Governorate")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{company.contact.address.governorate}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Company.Profile.Phone")}
							{": "}
							<strong className="font-Comfortaa text-green-800">
								{company.contact.phone}
							</strong>
						</p>
					</div>
					<div className="text-xl">
						<p>
							{i18n.t("Company.Profile.NumberOfDelegates")}
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
