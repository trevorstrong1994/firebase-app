import React, {Component} from 'react';
import app from "../firebase/base";

class Home extends Component {
	state = { currentUser: null }

    componentDidMount() {
    	const { currentUser } = app.auth();
    	this.setState({ currentUser })
    }

    handleLogin = () => {
    	app
    		.auth()
    		.signOut()
    }

	render() {
		const { currentUser } = this.state;
		return(
			<div className="mainContent">
				<h1>Home</h1>
				<button onClick={this.handleLogin}>
					logout
				</button>
				<p> {currentUser && currentUser.email} </p> 
			</div>
		)
	}
}

export default Home;