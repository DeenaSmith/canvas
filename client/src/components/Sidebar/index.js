import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom'
import Auth from '../../utils/auth';

const logout = (event) => {
    event.preventDefault();
    Auth.logout();
}

const loggedIn = Auth.loggedIn();

function Sidebar() {
    return (
        <Menu>
            <NavLink exact='true' to='/profile' className="menu-item">
                <h1>Profile</h1>    
            </NavLink> 
            <NavLink exact='true' to='/gallery' className='menu-item'>
                <h1>Gallery</h1>
            </NavLink>
            <NavLink exact='true' to='/login' className='menu-item'>
                <h1>Login</h1>
            </NavLink>
            <NavLink exact='true' to='/signup' className='menu-item'>
                <h1>Signup</h1>
            </NavLink>
            {loggedIn && (
                <div>
                <h1 className="menu-item" onClick={logout}>Logout</h1>
            </div>
            )}
            
        </Menu>
    );
};

export default Sidebar;