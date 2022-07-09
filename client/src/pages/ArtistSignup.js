import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


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
            // const token = mutationResponse.data.addUser.token;
            // Auth.login(token);

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

    // const [userName, setUserName] = useState('')
    // const [userEmail, setUserEmail] = useState('')
    // const [userPassword, setUserPassword] = useState('')

    // const [addUser, { error }] = useMutation(ADD_USER);

    // // submit form
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     localStorage.clear();

    //     localStorage.setItem('userName', userName)
    //     localStorage.setItem('userEmail', userEmail)
    //     localStorage.setItem('userPassword', userPassword)

    //     try {
    //         const { data } = await addUser({
    //             variables: { 
    //                 'username' : userName, 
    //                 'email' : userEmail,
    //                 'password' : userPassword 
    //             },

    //         });


    //         Auth.login(data.addUser.token);

    //     } catch (e) {
    //         console.error(e);
    //     }

    // };

    return (

        <div className="container my-1">
            {/* <Link to="/login">← Go to Login</Link> */}

            <h2>Signup</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="userName">User Name:</label>
                    <input
                        placeholder="First"
                        name="userName"
                        type="userName"
                        id="userName"
                        onChange={handleChange}
                    />
                </div>

                <div className="flex-row space-between my-2">
                    <label htmlFor="email">Email:</label>
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
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row flex-end">
                    <button type="submit">Submit</button>
                </div>
            </form>
            {error && <div>Sign up failed</div>}
        </div>
        //   );
        // <main className="flex-row justify-center mb-4">
        //     <div className="col-12 col-md-6">
        //         <div className="card">
        //             <h4 className="card-header">Sign Up Here</h4>
        //             <div className="card-body">
        //                 <form onSubmit={handleFormSubmit}>
        //                     <input
        //                         className="form-input"
        //                         placeholder="Your artist/username"
        //                         name="username"
        //                         type="username"
        //                         id="username"
        //                         value={userName}
        //                         onChange={(e) => setUserName(e.target.value)}
        //                     />
        //                     <input
        //                         className="form-input"
        //                         placeholder="Enter Your Email"
        //                         name="email"
        //                         type="email"
        //                         id="email"
        //                         value={userEmail}
        //                         onChange={(e) => setUserEmail(e.target.value)}
        //                     />
        //                     <input
        //                         className="form-input"
        //                         placeholder="Enter Your Password"
        //                         name="password"
        //                         type="password"
        //                         id="password"
        //                         value={userPassword}
        //                         onChange={(e) => setUserPassword(e.target.value)}
        //                     />
        //                     <button className="btn d-block w-100" type="submit">
        //                         Submit
        //                     </button>
        //                 </form>

        //                 {error && <div>Signup failed, try again!</div>}
        //             </div>
        //         </div>
        //     </div>
        // </main>
    );
};

export default ArtistSignup;