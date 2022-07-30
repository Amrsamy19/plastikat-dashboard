import { Navbar } from "../../../../components/Navbar";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { LINKS } from "../../navlinks";

export const AddDelegate = () => {
	const { user, getAccessTokenSilently } = useAuth0();
	const { i18n } = useTranslation();
	const delegateName = useRef();
	const gender = useRef();
	const birthdate = useRef();
	const phoneNumber = useRef();

	const AddNewDelegate = async () => {
		const data = JSON.stringify({
			name: delegateName.current.value,
			gender: gender.current.value,
			birth_date: birthdate.current.value,
			phone: phoneNumber.current.value,
		});
		const token = await getAccessTokenSilently();

		const response = await fetch(
			`http://164.92.248.132/api/companies/${user.sub}/delegates`,
			{
				method: "POST",
				mode: "cors",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: data,
			}
		);
		const json = await response.json();
		if (response.ok) {
			alert(`Delegate Email: ${json.data.email}\nDelegate Password: ${json.data.password}`)
			window.location.href = "http://localhost:3000/delegates";
		}
	};

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
			<main className="ml-64">
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">
						{i18n.t("Company.Delegates.AddDelegate.AddNewDelegate")}
					</h1>
				</div>
				<div className="flex flex-col justify-around h-96 w-full m-20 p4">
					<div className="flex justify-around">
						<div className="flex flex-col justify-around">
							<div className="flex items-center m-6 text-xl">
								<p>{i18n.t("Company.Delegates.AddDelegate.Name")}:</p>
								<div className="relative border-b-2 ml-8 focus-within:border-green-500">
									<input
										type="text"
										name="name"
										ref={delegateName}
										placeholder=" "
										className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
										required
									/>
									<label
										htmlFor="name"
										className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										{i18n.t("Company.Delegates.AddDelegate.EnterName")}
									</label>
								</div>
							</div>
							<div className="flex items-center m-6 text-xl">
								<label
									htmlFor="gender"
									className="text-md font-medium text-black"
								>
									{i18n.t("Company.Delegates.AddDelegate.Gender")}:
								</label>
								<select
									id="gender"
									name="gender"
									ref={gender}
									className="bg-transparent border border-green-500 text-gray-900 text-md rounded-lg focus:ring-green-700 focus:border-green-700 w-4/6 ml-8 p-2.5"
									defaultValue={i18n.t("Company.Delegates.AddDelegate.Choose")}
									required
								>
									<option disabled>
										{i18n.t("Company.Delegates.AddDelegate.Choose")}
									</option>
									<option value="MALE">
										{i18n.t("Company.Delegates.AddDelegate.Male")}
									</option>
									<option value="FEMALE">
										{i18n.t("Company.Delegates.AddDelegate.Female")}
									</option>
								</select>
							</div>
						</div>
						<div className="flex flex-col justify-around">
							<div className="flex items-center m-6 text-xl">
								<label
									htmlFor="birthdate"
									className="block mb-2 text-md font-medium text-black"
								>
									{i18n.t("Company.Delegates.AddDelegate.Birth")}:
								</label>
								<input
									id="birthdate"
									name="birthdate"
									ref={birthdate}
									type="date"
									className="font-Comfortaa block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
									required
								/>
							</div>
							<div className="flex items-center m-6 text-xl">
								<p>{i18n.t("Company.Delegates.AddDelegate.Phone")}:</p>
								<div className="relative border-b-2 ml-8 focus-within:border-green-500">
									<input
										type="text"
										pattern="\+(201)[0|1|2|5][0-9]{8}$"
										name="phone"
										ref={phoneNumber}
										placeholder=" "
										className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
										title="Enter 9 numbers after +201"
										required
									/>
									<label
										htmlFor="phone"
										className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										{i18n.t("Company.Delegates.AddDelegate.EnterPhone")}
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-around">
						<div className="text-xl">
							<button
								onClick={AddNewDelegate}
								className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg"
							>
								{i18n.t("Company.Delegates.AddDelegate.Add")}
							</button>
						</div>
						<div className="text-xl">
							<Link to="/company/delegates">
								<button className="bg-red-600 hover:bg-red-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
									{i18n.t("Company.Delegates.AddDelegate.Cancel")}
								</button>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
};
