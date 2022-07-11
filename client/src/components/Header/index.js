import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar';
function Header() {
    return (
        <section>
            <header className="canvas-header">
                <Sidebar> </Sidebar>
                <h1>CANVAS</h1>
                <div className="header-links">
                    <NavLink exact='true' to="/login" className="header-links">
                        <h3>Login</h3>
                    </NavLink>
                    <NavLink exact='true' to='/signup' className="header-links">
                        <h3>Signup</h3>
                    </NavLink>
                </div>
            </header>
        </section>
    );
}
export default Header;