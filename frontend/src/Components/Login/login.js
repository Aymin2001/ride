import React from 'react';
import backArrow from '../../assets/back.png'
import truckLogo from "../../assets/truck-logo.png"
import './login.css'

function Login() {
  return (
    <>
    <div className="signin-container">
      <div className='Signin-left'>
     
      <form className='form-container'>
      <div className='back-container'>
        <img src={backArrow} alt="Back" />
        <span>Back</span>
      </div>
        <h3>Sign In</h3>
        <p>Enter your email and password to sign in!</p>
        <div className="separator">
          <span>or</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder='mail@simmmple.com' />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder='Min. 8 characters' />
        </div>
        <div className=" checkbox">
            <div className='checkbox-group'>
            <input type="checkbox" id="keepLoggedIn" name="keepLoggedIn" />
          <label htmlFor="keepLoggedIn">Keep me logged in</label>
            </div>
            <a href="/forgot-password">Forgot Password?</a>

          
        </div>

        <button className="submit" type="submit">Sign In</button>
        <p className="register-text">
            Not registered yet? <span><a href="/create-account">Create an Account</a></span>
          </p>
      </form>
      </div>
      <div className='Signin-right'>
      <div className='spark'>
      <img src={truckLogo} alt="Back" />
      <p>Spark</p>
      </div>
      <div className='learn-more'>
        <h3>Learn more about Air Drive on</h3>
        <span>Spark.pl</span>
      </div>
      </div>
    </div>
     
    </>
  );
}

export default Login;