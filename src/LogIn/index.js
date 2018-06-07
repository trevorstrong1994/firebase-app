import React, { Component } from "react";
import LogInView from "./LogInView";
import { withRouter } from "react-router";
import app from "../firebase/base";

class LogInContainer extends Component {
	handleSignIn = async event => {
		event.preventDefault();
		const { email, password } = event.target.elements;
		try {
			const user = await app
				.auth()
				.signInWithEmailAndPassword(email.value, password.value);
			this.props.history.push("/");	
		} catch (error) {
			alert(error);
		}
	};

	render() {
		return <LogInView onSubmit={this.handleSignIn} />
	}
}

export default withRouter(LogInContainer);