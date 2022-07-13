
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import americanTraditional from '../image/tattooIdeas/American Traditional/2.jpg'
import blackGrey from '../image/tattooIdeas/Black & Grey/4.jpg'
import realism from '../image/tattooIdeas/Realism/1.jpg'
import color from '../image/tattooIdeas/Color/0.jpg'

const Profile = (props) => {

    // const test = useQuery(QUERY_USER);
    const { loading, data } = useQuery(QUERY_USER)
    // const user = data?.me || data?.username || {};

    console.log('data',data)

    if (loading) {
        return <div>Loading...</div>;
    }

    // if (!user?.username) {
        if (!Auth.loggedIn()) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }


    return (
        <div>
            <h2>
                Your Portfolio
            </h2>
           <div>
            <img src={americanTraditional} alt='at' />
           
            <img src={blackGrey} alt='bg' />
          
            <img src={realism} alt='real' />
        
            <img src={color} alt='color' />
            </div>
        </div>
    );
};

export default Profile;
