import React from 'react';
import Sidebar from '../Sidebar';


function Header() {
    return (
        <section>
            <header className="canvas-header">
                <Sidebar> </Sidebar>
                <h1>CANVAS</h1>
                <div className="header-links">
                    <a href="#login">Login  </a>
                    <a href="signup">Sign-Up</a>
                </div>
            </header>
        </section>
    );
}

export default Header;