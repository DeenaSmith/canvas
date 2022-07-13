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
            <h1 className="context">CANVAS</h1>
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          <div className="area container">
            <div className="row">
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="col-12 style-choose d-flex justify-content-center">
              <nav>
                <h2 className="choose-style d-flex justify-content-center">Choose A Style:</h2>
                <ul>
                  {categories.map((category) => (
                    <li
                      className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`}
                      key={category.name}
                    >
                      <span
                        onClick={() => {
                          setCurrentCategory(category);
                        }}
                      >
                        {category.name + ' • '}
                      </span>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            </div>
            </div>
        </header>
      </section>
    );
}
export default Header;