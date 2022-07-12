import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar';

function Header(props) {
    const {
        categories=[],
        setCurrentCategory,
        currentCategory,
    } = props


    return (
      <section>
        <header className="canvas-header">
          <Sidebar> </Sidebar>
          <h1>CANVAS</h1>
          <div className="header-links">
            <NavLink exact="true" to="/login" className="header-links">
              <h3>Login</h3>
            </NavLink>
            <NavLink exact="true" to="/signup" className="header-links">
              <h3>Signup</h3>
            </NavLink>
          </div>
          <div>
            <nav>
            <ul>
              {categories.map((category) => (
                <li
                  className={`mx-1 ${currentCategory.name === category.name}`}
                  key={category.name}
                >
                  <span
                    onClick={() => {
                      setCurrentCategory(category);
                    }}
                  >
                    {category.name}
                  </span>
                </li>
              ))}
            </ul>
            </nav>
          </div>
        </header>
      </section>
    );
}
export default Header;