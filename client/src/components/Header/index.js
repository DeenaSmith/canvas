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
<<<<<<< HEAD
                    <a href="#login">Login  </a>
                    <a href="signup">Sign-Up</a>
=======
                    <a href="/login">Login  </a>
                    <a href="/signup">Sign-Up</a>
>>>>>>> feature/signup
=======
                    <a href="/login">Login  </a>
                    <a href="/signup">Sign-Up</a>
>>>>>>> 851013fa82a94708a8ad59f2eff38d136544e76d
                </div>
            </header>
        </section>
    );
}

export default Header;