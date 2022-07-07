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
import { Delegate } from "./pages/Company/Delegates/Delegate";
import { AddDelegate } from "./pages/Company/Delegates/Add Delegate";
import { Offer } from "./pages/Company/Offers/Offer";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/offer/:offerID" element={<Offer />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/delegates" element={<Delegates />} />
				<Route path="/delegate/:delegateID" element={<Delegate />} />
				<Route path="/add-delegate" element={<AddDelegate />} />
				<Route path="/edit-profile" element={<Edit />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
