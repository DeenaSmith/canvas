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
        <>
        <Box sx={{ minWidth: 'auto', maxWidth:'300px', margin:'0 auto', float: 'none', marginBottom:'10px', marginTop: '30px' }}>
        <Card variant='outlined'>
        <CardContent>
        <div className="container my-1">
            {/* <Link to="/login">← Go to Login</Link> */}
            <div className="row">
                <div className="col-8">
                    <h2>Signup</h2>
                    <form onSubmit={handleFormSubmit} className="col-8">
                        <div className="">
                            <label htmlFor="username">User Name:</label>
                            <br />
                            <input
                                placeholder="First"
                                name="username"
                                type="username"
                                id="username"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="">
                            <label htmlFor="email">Email:</label>
                            <br />
                            <input
                                placeholder="youremail@test.com"
                                name="email"
                                type="email"
                                id="email"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex-row space-between my-2">
                            <label htmlFor="pwd">Password:</label>
                            <br />
                            <input
                                placeholder="******"
                                name="password"
                                type="password"
                                id="pwd"
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="flex-row flex-end">
                            <CardActions >
                            <Button type="submit">Submit</Button>
                            </CardActions>
                        </div>
                    </form>
                <img alt="red background" className="col-4 signup-img p-0" src="https://i.postimg.cc/ncN4LsQF/Screen-Shot-2022-07-09-at-9-17-46-PM.jpg"></img>
                <img alt="flower tattoo" className="col-4 signup-img-2 p-0" src ="https://i.pinimg.com/originals/e8/0c/01/e80c01003d7bb9ef0357dd053135cded.png"></img>
            </div>
        </div>
            {error && <div>Sign up failed</div>}
        </div>
        </CardContent>
        </Card>
        </Box>
        </>
    );
};

export default ArtistSignup;