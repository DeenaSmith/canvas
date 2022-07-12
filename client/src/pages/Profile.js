
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';

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
            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                        
                </h2>

            </div>

        </div>
    );
};

export default Profile;
