import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Switch = () => {
	const { i18n } = useTranslation();
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
		i18n.changeLanguage(!checked ? "en" : "ar");
	};

	return (
		<label for="check" className="bg-gray-200 cursor-pointer relative w-20 h-10 rounded-full">
			<input type="checkbox" id="check" onClick={() => { handleChange()}} class="sr-only peer" />
			<span className="w-2/5 h-4/5 bg-green-600 absolute rounded-full left-1 top-1 peer-checked:left-11 transition-all duration-500"></span>
			<p className="font-Comfortaa font-medium text-sm absolute mt-2.5 left-12 peer-checked:left-2 transition-all duration-500">{checked ? "EN" : "AR"}</p>
		</label>
	);
};

export default Switch;