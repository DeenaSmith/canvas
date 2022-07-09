import React from 'react';
import Sidebar from '../Sidebar';


function Header() {
    return (
        <section>
            <header className="canvas-header">
                <Sidebar> </Sidebar>
                <h1>CANVAS</h1>
                <div className="header-links">
<<<<<<< HEAD
                    <a href="#login">Login  </a>
                    <a href="signup">Sign-Up</a>
=======
                    <a href="/login">Login  </a>
                    <a href="/signup">Sign-Up</a>
>>>>>>> feature/signup
                </div>
            </header>
        </section>
    );
}

export default Header;