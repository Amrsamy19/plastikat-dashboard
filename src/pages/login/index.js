const Login = () => {
	return (
		<div className="h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="m-auto bg-white shadow-2xl rounded p-16 bg-green-600">
				<div className="max-w-md w-full space-y-8">
					<h1 className="mt-6 text-center text-5xl font-Comfortaa font-semibold text-green-600">
						Plastikat
					</h1>
				</div>
				<form className="mt-8 space-y-6">
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="email"
							name="email"
							id="email"
							className="block py-2.5 px-0 w-full text-lg font-Comfortaa text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none focus:outline-none focus:ring-0 focus:border-green-700 peer"
							placeholder=""
							required
						/>
						<label
							for="email"
							className="peer-focus:font-medium absolute font-Comfortaa text-lg text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Email
						</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="password"
							name="password"
							id="password"
							className="block py-2.5 px-0 w-full font-Comfortaa text-lg text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none focus:outline-none focus:ring-0 focus:border-green-700 peer"
							placeholder=""
							minLength={8}
							required
						/>
						<label
							for="password"
							className="peer-focus:font-medium font-Comfortaa absolute text-lg text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>
							Password
						</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<button
							type="submit"
							className="group relative w-full flex justify-center
							py-2 px-4 border border-transparent text-lg font-Comfortaa font-medium
							rounded-md text-white bg-green-600 hover:bg-green-700
							focus:outline-none focus:ring-2 focus:ring-offset-2
							focus:ring-green-500"
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
