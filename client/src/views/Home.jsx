import React from 'react'
import logo from "../images/appname_big.png"
import { Link } from 'react-router-dom'

const Home = (props) => {
	return (
		<div className="homeContainer text-center">
			<h1><strong className="text-white">Welcome to</strong></h1>
			<br></br>
			<img src={logo} alt="website logo" width="80%" height="auto" />
			<hr className="my-4" style={{ border: "3px solid red", margin: "15%" }} />
			<br></br>
			<h4><strong className="text-white">Please sign in below to continue...</strong></h4>
			<br></br>
			<br></br>
				<button className="selBtn">
				<Link to="/login">Log In</Link>
					</button>
					<br>
					</br>
					<br>
					</br>
				<button className="selBtn">
				<Link to="/signup">Sign Up</Link>
				</button>
		</div>
	)
}

export default Home