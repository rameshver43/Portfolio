import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "./firebase";

import "./Login.css";
function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signIn = (e) => {
		e.preventDefault(); //prevent from refreshing the page
		signInWithEmailAndPassword(auth, email, password)
			.then((auth) => {
				navigate("/");
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<div className="login_container">
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button type="submit" onClick={signIn} className="login_signInButton">
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
