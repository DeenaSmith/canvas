import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom'


function Sidebar() {
    return (
        <Menu>
            <NavLink exact='true' to="/home" className="menu-item">
                <h1>Home</h1>  
            </NavLink>
            <NavLink exact='true' to='/profile' className="menu-item">
                <h1>Profile</h1>    
            </NavLink> 
            <NavLink exact='true' to='/gallery' className='menu-item'>
                <h1>Gallery</h1>
            </NavLink>
        </Menu>
    );
};

export default Sidebar;