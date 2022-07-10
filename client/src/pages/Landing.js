import React from "react";
import { NavLink } from "react-router-dom";

function Landing() {

    return (
        <>
            <div className="landing">
                <NavLink exact='true' to='/'>
                <button type="submit">
                    T
                    <br/>
                    A
                    <br/>
                    T
                    <br/>
                    T
                    <br/>
                    O
                    <br/>
                    O
                    <br/>
                </button>
                </NavLink>
            </div>
        </>
    )
}

export default Landing