import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import "./pages/Language/i18n";
import { Home } from "./pages/Company/Offers";
import { Profile } from "./pages/Company/Profile";
import { Delegates } from "./pages/Company/Delegates";
import { Edit } from "./pages/Company/Profile/Edit";
import { Login } from "./pages/Login";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/delegates" element={<Delegates />} />
				<Route path="/edit-profile" element={<Edit />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
