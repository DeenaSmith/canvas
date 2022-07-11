import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
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
        <div className="container signup-card">
        <Box sx={{ minWidth: 'auto', maxWidth:'300px', margin:'auto', float: 'none', marginBottom:'auto', marginTop: 'auto' }}>
        {/*<Card>
        <CardContent>*/}
            <div>
                <div className="col-12">
                    <form onSubmit={handleFormSubmit} className="box">
                    <h2 className="">Signup</h2>
                    <p>Already have an account? <span><a href="/login" className='card-login'> Login</a></span></p>
                        <div>
                            {/*<label htmlFor="username">Username:</label>*/}
                            <input
                                placeholder="username"
                                name="username"
                                type="username"
                                id="username"
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            {/*<label htmlFor="email">Email:</label>*/}
                            <input
                                placeholder="youremail@email.com"
                                name="email"
                                type="email"
                                id="email"
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            {/*<label htmlFor="pwd">Password:</label>*/}
                            <input
                                placeholder="********"
                                name="password"
                                type="password"
                                id="pwd"
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="flex-row flex-end">
                            {/*<CardActions >*/}
                            <Button type="submit">Submit</Button>
                            {/*</CardActions>*/}
                        </div>
                    </form>
                </div>
        </div>
            {error && <div>Sign up failed</div>}
        {/*</CardContent>
        </Card>*/}
        </Box>
        </div>
        </div>
    );
};

export default ArtistSignup;
