import React from 'react';
import '../css/login.css';

const handleSubmit = async () => {
    const emailInput = document.getElementById('email-txt');
    const passwordInput = document.getElementById('password');
        const email = emailInput.value;
        const password = passwordInput.value;
        
        // Do something with the email and password, for example, log them to the console
        console.log('Email:', email);
        console.log('Password:', password);
        
        // You can perform other operations here, like sending this information to the server for validation.
        try {
            const response = await fetch(`/yourServerURL/login/${email}/${password}`, {
                method: 'GET',
                // You can pass the password as well, using a POST request and body
                // body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                const userData = await response.json();
                // Do something with userData, like redirecting to a dashboard or storing it in the client-side session.
                console.log(userData);
                alert("Success!!!!");
            } else {
                const errorMessage = await response.text();
                alert(`Error: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }

}


function Login() {
    return (
        <div>
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h2>Welcome Back</h2>
                    </div>
                    <form className="login-form">
                        <input type="email" id='email-txt' placeholder="Email Address" required />
                        <input type="password" id='password' placeholder="Password" required />
                        <br/><br/>
                        <button type="submit" onClick={handleSubmit}>LOG IN</button>
                    </form>
                    <br/>
                    <a href="#" className="forgot-password">FORGOT PASSWORD?</a>
                </div>
            </div>
        </div>
    );
    
}

export default Login;