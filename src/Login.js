import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login(){

    return(
        <div className="login">
            <Link>
                <img className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                 alt="" />
            </Link> 
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password" />
                    <button type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By signing-in, you agree to Amazon's Terms and Conditions</p>
                <button className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )

}

export default Login