import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
	const { i18n } = useTranslation();
	const [checked, setChecked] = useState(false);
	const { loginWithRedirect } = useAuth0();

	const handleChange = () => {
		setChecked(!checked);
		i18n.changeLanguage(!checked ? "en" : "ar");
		localStorage.setItem("lang", i18n.language);
	};

	return (
		<div
			className={`p-20 flex flex-col items-center rounded-lg shadow-gray-900 ${
				i18n.language === "ar" ? "font-Noto" : "font-Comfortaa"
			}`}
		>
			<div className="w-fit space-y-8">
				<h1 className="mt-6 text-center text-5xl font-Comfortaa font-normal text-green-600">
					Plastikat
				</h1>
			</div>
			<div action="/" className="mt-8 space-y-6">
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
								{checked ? "العربية" : "English"}
							</p>
						</label>
					</div>
				</div>
				<div className="relative z-0 w-full group">
					<button
						type="submit"
						onClick={() => loginWithRedirect()}
						className="transition duration-150 relative w-full py-2 px-4 
							border border-transparent text-lg font-medium
							rounded-md text-white bg-green-600 hover:bg-green-700
							focus:outline-none focus:ring-2 focus:ring-offset-2
							focus:ring-green-500"
					>
						{i18n.t("Login.Login")}
					</button>
				</div>
			</div>
		</div>
	);
};

export const Login = () => {
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
