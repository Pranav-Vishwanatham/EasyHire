import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      // Send a request to your backend to initiate the password reset
    //   const response = await axios.post('/api/forgot-password', { email });

      // Display the response message to the user
    //   setMessage(response.data.message);
    const response = await fetch('/forgot-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    });
    } catch (error) {
      console.error('Error:', error.response.data);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <p>Enter your email to receive a password reset link.</p>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleForgotPassword}>Reset Password</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
