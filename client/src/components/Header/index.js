import React from 'react';
import Sidebar from '../Sidebar';


function Header() {
    return (
        <section>
            <header className="canvas-header">
                <div>
                    <Sidebar> </Sidebar>
                </div>
                <div>
                    <h1 className="header-h1">Canvas</h1>
                </div>
                <div className="login-button">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </header>
        </section>
    );
}

export default Header;