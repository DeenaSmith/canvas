
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });
            console.log('data', data)
            Auth.login(data.login.token);

        
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    if (Auth.loggedIn()) {
        return <Navigate to="/gallery" />;
    }

    return (
        <main className="signup-pg">
            <div className="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h3 class="animate-charcter">CANVAS</h3>
                    </div>
                </div>
            </div>
            <div className="container signup-card">
                <div>
                    <div className="col-12">
                        <form onSubmit={handleFormSubmit} className="box">
                            <h2 className="card-header">Login</h2>
                            <p>Don't have an account? <span><a href="/signup" className='card-login'> Signup</a></span></p>
                            <input
                                className="form-input"
                                placeholder="Email"
                                name="email"
                                type="email"
                                id="email"
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input
                                className="form-input"
                                placeholder="Password"
                                name="password"
                                type="password"
                                id="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <button className="btn d-block w-100 flex-row flex-end login-btn" type="submit">
                                SUBMIT
                            </button>
                            {error && <div>Login failed, try again!</div>}
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};



export default Login;