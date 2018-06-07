import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import app from "./firebase/base";

//import authentication pages
import LogIn from "./LogIn";
import SignUp from './SignUp';

//import pages
import Home from "./Home/Home";

class App extends Component {
	state = {
		loading: true,
		authenticated: false,
		user: null
	};

	componentWillMount() {
		app.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({
					authenticated: true,
					currentUser: user,
					loading: false
				});
			} else {
				this.setState({
					authenticated: false,
					currentUser: null,
					loading: false
				});
			}
		});
	}

	render() {
		const { authenticated, loading } = this.state;

		if (loading) {
			return <p>Loading..</p>
		}

		return (
			<Router>
				<div>
					<PrivateRoute
						exact
						path="/"
						component={Home}
						authenticated={authenticated}
					/>
					<Route exact path="/login" component={LogIn} />
					<Route exact path="/signup" component={SignUp} />
				</div>
			</Router>
		)		
	}
}

export default App;