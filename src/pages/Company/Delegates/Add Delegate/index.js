import { Navbar } from "../../../../components/Navbar";
import { Link } from "react-router-dom";

export const AddDelegate = () => {
	return (
		<form className="font-Comfortaa w-screen flex">
			<Navbar />
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">Add New Delegate</h1>
				</div>
				<div className="flex flex-col justify-around h-96 w-full m-20 p4">
					<div className="flex justify-around">
						<div className="flex flex-col justify-around">
							<div className="flex items-center m-6 text-xl">
								<p>Name:</p>
								<div className="relative border-b-2 ml-8 focus-within:border-green-500">
									<input
										type="text"
										name="name"
										placeholder=" "
										className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
									/>
									<label
										htmlFor="name"
										className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										Enter Name
									</label>
								</div>
							</div>
							<div className="flex items-center m-6 text-xl">
								<p>Company:</p>
								<div className="relative border-b-2 ml-8 focus-within:border-green-500">
									<input
										type="text"
										name="company"
										placeholder=" "
										className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
										disabled
									/>
									<label
										htmlFor="company"
										className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										Company Name
									</label>
								</div>
							</div>
							<div className="flex items-center m-6 text-xl">
								<label
									htmlFor="gender"
									className="text-md font-medium text-black"
								>
									Gender:
								</label>
								<select
									id="gender"
									name="gender"
									className="bg-transparent border border-green-500 text-gray-900 text-md rounded-lg focus:ring-green-700 focus:border-green-700 w-4/6 ml-8 p-2.5"
									defaultValue="Choose the gender"
								>
									<option disabled>Choose the gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
							</div>
						</div>
						<div className="flex flex-col justify-around">
							<div className="flex items-center m-6 text-xl">
								<label
									htmlFor="birthdate"
									className="block mb-2 text-md font-medium text-black"
								>
									Date of Birth:
								</label>
								<input
									id="birthdate"
									name="birthdate"
									type="date"
									className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
								/>
							</div>
							<div className="flex items-center m-6 text-xl">
								<p>Location:</p>
								<div className="relative border-b-2 ml-8 focus-within:border-green-500">
									<input
										type="text"
										name="location"
										placeholder=" "
										className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
									/>
									<label
										htmlFor="location"
										className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										Enter Location
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-around">
						<div className="text-xl">
							<button className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
								Add
							</button>
						</div>
						<div className="text-xl">
							<Link to="/delegates">
								<button className="bg-red-600 hover:bg-red-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
									Cancel
								</button>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</form>
	);
};
