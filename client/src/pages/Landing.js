import React from "react";
import { NavLink } from "react-router-dom";

function Landing() {

    return (
        <>
            <div className="landing">
                <NavLink exact='true' to='/'>
                <button id="landing-tattoo-btn" className="btn rounded" type="submit">
                    C
                    <br/>
                    A
                    <br/>
                    N
                    <br/>
                    V
                    <br/>
                    A
                    <br/>
                    S
                    <br/>
                </button>
                </NavLink>
            </div>
        </>
    )
}

export default Landing