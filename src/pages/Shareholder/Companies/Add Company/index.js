import { Navbar } from "../../../../components/Navbar";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { LINKS } from "../../navlinks";

export const AddCompany = () => {
	const { getAccessTokenSilently } = useAuth0();
	const { i18n } = useTranslation();
	const name = useRef();
	const email = useRef();
	const district = useRef();
	const governorate = useRef();

	const AddNewCompany = async () => {
		const data = JSON.stringify({
			name: name.current.value,
			email: email.current.value,
			contact: {
				address: {
					district: district.current.value,
					governorate: governorate.current.value,
				},
			},
		});
		const token = await getAccessTokenSilently();
		const response = await fetch(`http://164.92.248.132/api/companies`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: data,
		});

		const json = await response.json();
		if (response.ok) {
			alert(
				`Company has been added successfully\n Company's Email: ${json.data.email}\n Company's Password: ${json.data.password}`
			);
			window.location.href = "http://localhost:3000/companies";
		}
	};

	return (
		<section
			className={`w-screen flex ${
				i18n.language === "ar" ? "font-Noto" : "font-Comfortaa"
			}`}
		>
			<Navbar links={LINKS} data={""} />
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">
						{i18n.t("Shareholder.Company.AddCompany.AddNewCompany")}
					</h1>
				</div>
				<div className="flex flex-col justify-around h-96 w-full m-4 p4">
					<div className="flex justify-around">
						<div className="flex flex-col justify-around">
							<div className="flex items-center m-6 text-xl">
								<p className={`${i18n.language === "ar" ? "ml-2" : "mr-2"}`}>
									{i18n.t("Shareholder.Company.AddCompany.Name")}:
								</p>
								<div className="relative ml-8 focus-within:border-green-500">
									<input
										type="text"
										name="name"
										ref={name}
										placeholder=" "
										className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
										required
									/>
									<label
										htmlFor="name"
										className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										{i18n.t("Shareholder.Company.AddCompany.EnterName")}
									</label>
								</div>
							</div>
							<div className="flex items-center m-6 text-xl">
								<p className={`${i18n.language === "ar" ? "ml-2" : "mr-2"}`}>
									{i18n.t("Shareholder.Company.AddCompany.Email")}:
								</p>
								<div className="relative ml-8 focus-within:border-green-500">
									<input
										type="email"
										name="email"
										ref={email}
										placeholder=" "
										className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
										required
									/>
									<label
										htmlFor="email"
										className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										{i18n.t("Shareholder.Company.AddCompany.EnterEmail")}
									</label>
								</div>
							</div>
							<div className="flex items-center m-6 text-xl">
								<p className={`${i18n.language === "ar" ? "ml-2" : "mr-2"}`}>
									{i18n.t("Shareholder.Company.AddCompany.District")}:
								</p>
								<div className="relative ml-8 focus-within:border-green-500">
									<input
										type="text"
										name="district"
										ref={district}
										placeholder=" "
										className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
										title="Enter district"
										required
									/>
									<label
										htmlFor="district"
										className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										{i18n.t("Shareholder.Company.AddCompany.EnterDistrict")}
									</label>
								</div>
							</div>
							<div className="flex items-center m-6 text-xl">
								<p className={`${i18n.language === "ar" ? "ml-2" : "mr-2"}`}>
									{i18n.t("Shareholder.Company.AddCompany.Governorate")}:
								</p>
								<div className="relative ml-8 focus-within:border-green-500">
									<input
										type="text"
										name="governorate"
										ref={governorate}
										placeholder=" "
										className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
										title="Enter governorate"
										required
									/>
									<label
										htmlFor="governorate"
										className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										{i18n.t("Shareholder.Company.AddCompany.EnterGovernorate")}
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-around">
					<div className="text-xl">
						<button
							onClick={AddNewCompany}
							className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg"
						>
							{i18n.t("Shareholder.Company.AddCompany.Add")}
						</button>
					</div>
					<div className="text-xl">
						<Link to="/home">
							<button className="bg-red-600 hover:bg-red-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
								{i18n.t("Shareholder.Company.AddCompany.Cancel")}
							</button>
						</Link>
					</div>
				</div>
			</main>
		</section>
	);
};
