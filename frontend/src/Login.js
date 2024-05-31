import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/home');
            })
            .catch(error => {
                console.error('Error signing in:', error.code, error.message);
            });
    };

    return (
        <div id="box">
            <h1>Neighborhood Safety App</h1>
            <p>Enhance safety and build stronger community connections with the Neighborhood Safety App – your go-to platform for real-time alerts, neighborhood watch coordination, and seamless communication.</p>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <div id="links">
                <a href="/signup">Sign Up</a>
                <a href="/forgot-password">Forgot Password?</a>
            </div>
        </div>
    );
};

export default Login;
