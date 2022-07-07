import Navbar from "../../../Navbar";

const Edit = () => {
	return (
		<form className="font-Comfortaa w-screen flex">
			<Navbar />
			<main>
				<div className="w-fit m-12 p-4">
					<h1 className="text-3xl">Edit Profile</h1>
				</div>
				<div className="flex flex-col justify-around h-96 m-12 p4">
					<div className="flex items-center text-xl">
						<p>Name:</p>
						<div class="relative border-b-2 ml-8 focus-within:border-green-500">
							<input
								type="text"
								name="name"
								placeholder=" "
								class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
							/>
							<label
								for="name"
								class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Walker Inc
							</label>
						</div>
					</div>
					<div className="flex items-center text-xl">
						<p>District:</p>
						<div class="relative border-b-2 ml-8 focus-within:border-green-500">
							<input
								type="text"
								name="district"
								placeholder=" "
								class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
							/>
							<label
								for="district"
								class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Hasna
							</label>
						</div>
					</div>
					<div className="flex items-center  text-xl">
						<p>Government:</p>
						<div class="relative border-b-2 ml-8 focus-within:border-green-500">
							<input
								type="text"
								name="government"
								placeholder=" "
								class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
							/>
							<label
								for="government"
								class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								North Sinai
							</label>
						</div>
					</div>
					<div className="flex items-center  text-xl">
						<p>
							Number of delegates: <strong>18</strong>
						</p>
					</div>
					<div className="text-xl">
						<button className="bg-green-600 hover:bg-green-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded-lg">
							Save
						</button>
					</div>
				</div>
			</main>
		</form>
	);
};

export default Edit;
