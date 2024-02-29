import React from 'react';
import {NavLink} from "react-router-dom";
import PrivateRoutes from "../router/privateRoutes";

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
                </NavLink>
            </nav>
            <main>
               <PrivateRoutes/>
            </main>
        </div>
    );
};

export default RootLayout;