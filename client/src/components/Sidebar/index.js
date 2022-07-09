import React from 'react';
import { slide as Menu } from 'react-burger-menu';


function Sidebar() {
    return (
        <Menu>
            <a className="menu-item" href="/Home">
                Home
            </a>

            <a className="menu-item" href="#profile">
                Profile
            </a>            
        </Menu>
    );
};

export default Sidebar;