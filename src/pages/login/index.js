import { useState } from "react";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
	const { i18n } = useTranslation();
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
		i18n.changeLanguage(!checked ? "en" : "ar");
	};

	return (
		<div className="p-20 flex flex-col items-center rounded-lg shadow-gray-900">
			<div className="w-fit space-y-8">
				<h1 className="mt-6 text-center text-5xl font-Comfortaa font-normal text-green-600">
					Plastikat
				</h1>
			</div>
			<form action="/" className="mt-8 space-y-6">
				<div className="relative z-0 w-full group">
					<input
						type="email"
						id="email"
						className="block py-2.5 px-0 w-full text-lg font-Comfortaa text-gray-900 bg-transparent border-0 border-b-2 border-green-600 focus:outline-none focus:ring-0 focus:border-green-700 peer"
						placeholder=""
						required
					/>
					<label
						htmlFor="email"
						className="peer-focus:font-medium absolute font-Comfortaa text-lg text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						{i18n.t("Login.Email")}
					</label>
				</div>
				<div className="relative z-0 w-full group">
					<input
						type="password"
						id="password"
						className="block py-2.5 px-0 w-full font-Comfortaa text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-600 focus:outline-none focus:ring-0 focus:border-green-700 peer"
						placeholder=""
						minLength={8}
						required
					/>
					<label
						htmlFor="password"
						className="peer-focus:font-medium font-Comfortaa absolute text-lg text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						{i18n.t("Login.Password")}
					</label>
				</div>
				<div className="relative z-0 w-full group">
					<div className="flex justify-center items-center">
						<label forhtml="check" className="cursor-pointer">
							<input
								type="checkbox"
								id="check"
								onClick={() => {
									handleChange();
								}}
								className="sr-only peer"
							/>
							<p className="font-Comfortaa font-medium text-md transition-all duration-500">
								{checked ? "English" : "العربية"}
							</p>
						</label>
					</div>
				</div>
				<div className="relative z-0 w-full group">
					<button
						type="submit"
						className="transition duration-150 relative w-full py-2 px-4 
							border border-transparent text-lg font-Comfortaa font-medium
							rounded-md text-white bg-green-600 hover:bg-green-700
							focus:outline-none focus:ring-2 focus:ring-offset-2
							focus:ring-green-500"
					>
						{i18n.t("Login.Login")}
					</button>
				</div>
			</form>
		</div>
	);
};

const LoginCard = () => {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center">
			<div className="bg-green-600 w-full h-full p-8">
				<div className="bg-white flex flex-col items-center justify-center w-full h-full p-24">
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default LoginCard;
