import React from "react";
import ReactDOM from "react-dom";

import { Auth0Provider } from "@auth0/auth0-react";
import { App } from "./App";

//Shareholder
/* <Auth0Provider
	domain="plastikat.eu.auth0.com"
	clientId="ynmrMuZ4ZOFKiyCPaozkTs4U1rjylENb"
	redirectUri={window.location.origin}
	audience="plastikat-app-api"
	scope="openid profile email"
	useRefreshTokens={true}
	cacheLocation="localstorage"
>
	<App />
</Auth0Provider> */

//Company

/* <Auth0Provider
	domain="plastikat.eu.auth0.com"
	clientId="aCmW07HpL30ptqTh4EN83QKUff2QFSIA"
	redirectUri={window.location.origin}
	audience="plastikat-app-api"
	scope="openid profile email"
	useRefreshTokens={true}
	cacheLocation="localstorage"
>
	<App />
</Auth0Provider> */

ReactDOM.render(
	<Auth0Provider
		domain="plastikat.eu.auth0.com"
		clientId="ynmrMuZ4ZOFKiyCPaozkTs4U1rjylENb"
		redirectUri={window.location.origin}
		audience="plastikat-app-api"
		scope="openid profile email"
		useRefreshTokens={true}
		cacheLocation="localstorage"
	>
		<App />
	</Auth0Provider>,
	document.getElementById("root")
);
