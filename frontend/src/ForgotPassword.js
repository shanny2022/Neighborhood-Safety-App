import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgotPassword = (e) => {
        e.preventDefault();
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                setMessage('An email will be sent to your email address to reset your password.');
            })
            .catch(error => {
                console.error('Error sending password reset email:', error.code, error.message);
                setMessage('Error sending password reset email.');
            });
    };

    return (
        <div id="box">
            <h1>Forgot Password</h1>
            <form onSubmit={handleForgotPassword}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Send Reset Email</button>
            </form>
            <p>{message}</p>
            <a href="/">Back to Login</a>
        </div>
    );
};

export default ForgotPassword;
