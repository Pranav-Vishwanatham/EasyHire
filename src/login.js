import React from 'react';
import './login.css';

function Login() {
    return (
//<<<<<<< navigationLinks
=======
        <div>
        <header>
        <div id="logo">EasyHire</div>
        <nav>
          <a href="#">HOME</a>
          <a href="#">BLOG</a>
          <a href="#">FAIRS</a>
          <a href="#">HELP</a>
          <a href="#" id="login-btn">
            Sign Up
          </a>
        </nav>
      </header>
//>>>>>>> main
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Welcome Back</h2>
                </div>
                <form className="login-form">
                    <input type="text" placeholder="Email Address" required />
                    <input type="password" placeholder="Password" required />
                    <br/><br/>
                    <button type="submit">LOG IN</button>
                </form>
                <br/>
                <a href="#" className="forgot-password">FORGOT PASSWORD?</a>
            </div>
        </div>
    );
}

export default Login;