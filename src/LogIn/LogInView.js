import React from "react";
import { Link } from 'react-router-dom';
import SignUpView from '../SignUp/SignUpView';

//import styles
import './login.css';

//get the 'onSubmit' handler as one of the props
//and attach it to our form
const LogInView = ({ onSubmit }) => {
	return (
		<div className="loginSection">
			<h1>Sign In</h1>
			<form onSubmit={onSubmit}>
				<label> Email
					<input
						name="email"
						type="email"
						placeholder="Email"
					/>
				</label>
				<label> Password
					<input
						name="password"
						type="password"
						placeholder="Password"
					/>
				</label>
				<button type="submit">Sign In</button>
			</form>
			<div>
				<p>Don't have an account yet?</p>
				<button><Link to="/SignUp">Sign Up</Link></button>
			</div>
		</div>
	);
};

export default LogInView;