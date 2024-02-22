import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const RootLayout = () => {

    return (
        <div className="root-layout">
            <nav>
                <NavLink key="home" to="/">Home</NavLink>
                <NavLink key="films" to="films">films</NavLink>
                <NavLink
                    key="about" to="about"
                    className={({isActive}) => {
                        return isActive ? 'active' : ''
                    }}
                >
                    About
                </NavLink>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default RootLayout;