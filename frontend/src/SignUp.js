import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const SignUp = () => {
    const [form, setForm] = useState({
        firstName: '', lastName: '', email: '', password: '',
        address: '', city: '', state: '', zip: '', terms: false
    });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (form.terms) {
            firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
                .then(() => {
                    history.push('/');
                })
                .catch(error => {
                    console.error('Error signing up:', error.code, error.message);
                });
        } else {
            alert('You must agree to the terms of service.');
        }
    };

    return (
        <div id="box">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
                <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} required />
                <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} required />
                <input type="text" name="zip" placeholder="Zip Code" value={form.zip} onChange={handleChange} required />
                <label>
                    <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} required />
                    By checking this box, you are agreeing to our terms of service.
                </label>
                <button type="submit">Sign Up</button>
            </form>
            <a href="/">Back to Login</a>
        </div>
    );
};

export default SignUp;
