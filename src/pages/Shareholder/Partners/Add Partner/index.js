import { Navbar } from "../../../../components/Navbar";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LINKS } from "../../navlinks";

export const AddPartner = () => {
	const { getAccessTokenSilently } = useAuth0();
	const { i18n } = useTranslation();
	const [rewards, setRewards] = useState(1);

	const addReward = () => {
		setRewards(rewards + 1);
	};

	const addNewPartner = async (data) => {
		const token = await getAccessTokenSilently();
		const response = await fetch(`http://164.92.248.132/api/partners`, {
			method: "POST",
			mode: "cors",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: data,
		});
		if (response.ok) {
			window.location.href = "http://localhost:3000/partners";
		}
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();

		const form = ev.target;
		const data = new FormData(form);

		const payload = {
			name: data.get("name"),
			description: data.get("description"),
			branches: [],
			rewards: [],
		};

		for (let index = 0; index < rewards; index++) {
			payload.rewards.push({
				name: data.get(`rewardName${index}`),
				points: data.get(`rewardPoints${index}`),
			});
		}

		addNewPartner(JSON.stringify(payload));
	};

	return (
		<section
			className={`w-screen max-h-screen overflow-auto overflow-x-hidden flex ${
				i18n.language === "ar" ? "font-Noto" : "font-Comfortaa"
			}`}
		>
			<Navbar links={LINKS} data={""} />
			<main>
				<div className="w-fit m-10 p-4">
					<h1 className="text-3xl">
						{i18n.t("Shareholder.Partners.AddPartner.Title")}
					</h1>
				</div>
				<form
					className="grid gap-4 grid-cols-2 grid-rows-3 h-fit w-full m-4 p-8"
					onSubmit={handleSubmit}
				>
					<div className="flex items-center text-md">
						<p className={`${i18n.language === "ar" ? "ml-2" : "mr-2"}`}>
							{i18n.t("Shareholder.Partners.AddPartner.Name")}:
						</p>
						<div className="relative w-full ml-8 focus-within:border-green-500">
							<input
								type="text"
								name="name"
								placeholder=" "
								className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
								required
							/>
							<label
								htmlFor="name"
								className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								{i18n.t("Shareholder.Partners.AddPartner.EnterName")}
							</label>
						</div>
					</div>
					<div className="flex items-center text-md">
						<p className={`${i18n.language === "ar" ? "ml-2" : "mr-2"}`}>
							{i18n.t("Shareholder.Partners.AddPartner.Description")}:
						</p>
						<div className="relative w-full ml-8 focus-within:border-green-500">
							<textarea
								name="description"
								placeholder=""
								className="block resize-none py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
								required
							/>
							<label
								htmlFor="description"
								className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-10 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								{i18n.t("Shareholder.Partners.AddPartner.EnterDescription")}
							</label>
						</div>
					</div>
					{new Array(rewards).fill(null).map((_, index) => {
						return (
							<>
								<div className="flex items-center text-md">
									<p className={`${i18n.language === "ar" ? "ml-2" : "mr-2"}`}>
										{i18n.t("Shareholder.Partners.AddPartner.RewardName")}:
									</p>
									<div className="relative w-full ml-8 focus-within:border-green-500">
										<input
											type="text"
											name={`rewardName${index}`}
											placeholder=" "
											className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
											title="Enter Name"
											required
										/>
										<label
											htmlFor="rewardName"
											className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
										>
											{i18n.t(
												"Shareholder.Partners.AddPartner.EnterRewardName"
											)}
										</label>
									</div>
								</div>
								<div className="flex items-center text-md">
									<p className={`${i18n.language === "ar" ? "ml-2" : "mr-2"}`}>
										{i18n.t("Shareholder.Partners.AddPartner.RewardPoints")}:
									</p>
									<div className="relative w-full ml-8 focus-within:border-green-500">
										<input
											type="text"
											name={`rewardPoints${index}`}
											placeholder=" "
											className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
											title="Enter Points"
											required
										/>
										<label
											htmlFor="rewardPoints"
											className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
										>
											{i18n.t(
												"Shareholder.Partners.AddPartner.EnterRewardPoints"
											)}
										</label>
									</div>
								</div>
							</>
						);
					})}
					<div className="flex items-center justify-around">
						<div className="text-xl">
							<button
								className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg"
								onClick={addReward}
								type="button"
							>
								{i18n.t("Shareholder.Partners.AddPartner.AddReward")}
							</button>
						</div>
						<div className="text-xl">
							<button
								className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg"
								type="submit"
							>
								{i18n.t("Shareholder.Partners.AddPartner.Add")}
							</button>
						</div>
						<div className="text-xl">
							<Link to="/partners">
								<button className="bg-red-600 hover:bg-red-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
									{i18n.t("Shareholder.Partners.AddPartner.Cancel")}
								</button>
							</Link>
						</div>
					</div>
				</form>
			</main>
		</section>
	);
};
