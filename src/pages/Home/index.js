import React from "react";
import Logo from "../../assets/no-plastic-bottles.png";

const Home = () => {
	return (
		<section id="home" className="flex flex-col items-center justify-center h-screen">
			<div className="mb-10">
				<img className="w-60" src={Logo} alt="logo" />
			</div>
			<div>
				<h2 className="font-Comfortaa font-medium text-3xl">
					Better <span className="text-green-600">Green</span> World
				</h2>
			</div>
		</section>
	);
};

export default Home;
