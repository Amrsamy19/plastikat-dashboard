const Login = () => {
	return (
		<div>
			<h1>Plastikat</h1>
			<form>
				<input type="text" placeholder="Username" />
				<input type="password" minLength={6} placeholder="Password" />
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
