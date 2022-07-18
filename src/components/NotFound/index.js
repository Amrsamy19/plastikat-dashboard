import errorIcon from "../../assets/error.svg"
import { Navbar } from "../Navbar";

export const NotFound = (props) => {
	return (
		<section className="font-Comfortaa w-screen flex">
			<Navbar data={JSON.parse(localStorage.getItem("company")).name} />
			<main className="flex items-center justify-center h-screen m-auto">
				<div className="m-24 p-4 flex flex-col items-center">
					<img className="w-20 m-4" src={errorIcon} alt="Error" />
					<h1 className="text-4xl font-Comfortaa">{props.data}</h1>
				</div>
			</main>
		</section>
	);
};
