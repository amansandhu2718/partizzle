import React, { Component } from 'react'
import "./Login.css"
import Navbar from '../../comps/header/Navbar'

export default class Login extends Component {
    render() {
        return (
            <>
            
            <Navbar />
            <div className="logincontainer">
                <div className="box">
		<h2>Login</h2>
		<form>
			<div className="inputBox">
				<input type="text" name="" required="" />
				<label>Username</label>
			</div>
			<div className="inputBox">
				<input type="password" name="" required="" />
				<label>Password</label>
			</div>
			<input type="Submit" name="" value="Submit" className="w-100" />
		</form>
		<a href="#" className="a ">Forget Password</a>
		<h5>Sign Up Using</h5>
		<ul>
			<li>
			<a href="#">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<i className="fa fa-facebook"></i>
			</a>
		</li>
		<li>
			<a href="#">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<i className="fa fa-google"></i>
			</a>
		</li>
		</ul>
		<h4>Create account? <a href="#">Sign Up</a></h4>
	</div>
            </div>
            </>
        )
    }
}
