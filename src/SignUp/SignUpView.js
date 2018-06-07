import React from "react";
import { Link } from 'react-router-dom';
import LogInView from '../LogIn/LogInView';

//get the 'onSubmit' handler as one of the props
//and attach it to our form
const SignUpView = ({ onSubmit }) => {
	return (
		<div>
			<h1>Sign up</h1>
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
				<button type="submit">Sign Up</button>
			</form>
			<div>
				<p>Have an Account?</p>
				<button><Link to="/LogIn">Sign In</Link></button>
			</div>
		</div>
	);
};

export default SignUpView;