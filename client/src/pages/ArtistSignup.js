import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Button from '@mui/material/Button';

const ArtistSignup = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            console.log('!!', data)
            Auth.login(data.addUser.token);

        } catch (e) {
            console.error(e);
        }

    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="signup-pg">
            <div class="container">
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
                            <h2 className="">Signup</h2>
                            <p>Already have an account? <span><a href="/login" className='card-login'> Login</a></span></p>
                                <div>
                                    <input
                                    placeholder="username"
                                    name="username"
                                    type="username"
                                    id="username"
                                    onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <input
                                    placeholder="youremail@email.com"
                                    name="email"
                                    type="email"
                                    id="email"
                                    onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <input
                                    placeholder="********"
                                    name="password"
                                    type="password"
                                    id="pwd"
                                    onChange={handleChange}
                                    />
                                </div>
                        
                                <div className="flex-row flex-end login-btn">
                                    <Button type="submit">Submit</Button>
                                </div>
                                {error && <div>Sign up failed</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistSignup;
