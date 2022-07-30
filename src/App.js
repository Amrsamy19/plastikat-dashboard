import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import React, { useEffect } from "react";
import { Login } from "./pages/Login";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import "./index.css";
import "./pages/Language/i18n";

/**
 * Company
 * omarabdelaziz@stud.cu.edu.eg
 * z9B.+ePwFP?^mjF!
 */
import { Home } from "./pages/Company/Offers";
import { Profile } from "./pages/Company/Profile";
import { Delegates } from "./pages/Company/Delegates";
import { Delegate } from "./pages/Company/Delegates/Delegate";
import { AddDelegate } from "./pages/Company/Delegates/Add Delegate";
import { Offer } from "./pages/Company/Offers/Offer";

/**
 * Shareholder
 * admin1@plastikat.com
 * cRGa6eQTREnHOdW6
 */
// import { Home } from "./pages/Shareholder/Companies";
// import { AddCompany } from "./pages/Shareholder/Companies/Add Company";
// import { Partners } from "./pages/Shareholder/Partners";
// import { AddPartner } from "./pages/Shareholder/Partners/Add Partner";
// import { Partner } from "./pages/Shareholder/Partners/Partner";
// import { Company } from "./pages/Shareholder/Companies/Company";

//Shareholder
// const authenticatedRoutes = (
// 	<>
// 		<Route exact path="/home" element={<Home />} />
// 		<Route path="/add-company" element={<AddCompany />} />
// 		<Route path="/company/:companyID" element={<Company />} />
// 		<Route path="/partners" element={<Partners />} />
// 		<Route path="/partner/:partnerID" element={<Partner />} />
// 		<Route path="/add-partner" element={<AddPartner />} />
// 		<Route path="*" element={<Navigate to={"/home"} replace />} />
// 	</>
// );

//Company
const authenticatedRoutes = (
	<>
		<Route exact path="/home" element={<Home />} />
		<Route path="/offer/:offerID" element={<Offer />} />
		<Route path="/profile" element={<Profile />} />
		<Route path="/delegates" element={<Delegates />} />
		<Route path="/delegate/:delegateID" element={<Delegate />} />
		<Route path="/add-delegate" element={<AddDelegate />} />
		<Route path="*" element={<Navigate to={"/home"} replace />} />
	</>
);

const unauthenticatedRoutes = (
	<>
		<Route path="/" element={<Login />} />
		<Route path="*" element={<Navigate to={"/"} replace />} />
	</>
);

export function App() {
	const { isAuthenticated, isLoading } = useAuth0();
	const { i18n } = useTranslation();

	const routes = !isAuthenticated ? unauthenticatedRoutes : authenticatedRoutes;

	useEffect(() => {
		document
			.getElementById("root")
			.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
	});

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	/**
	 * star1@example.com
	 * Mxj3zj-igfxwTcDP
	 */

	return (
		<Router>
			<Routes>{routes}</Routes>
		</Router>
	);
}
