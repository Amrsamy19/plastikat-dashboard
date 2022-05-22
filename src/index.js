import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";

import "./pages/Language/i18n";
import Login from "./pages/login";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
