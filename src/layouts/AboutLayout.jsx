import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const AboutLayout = () => {
    return (
        <div className="about-layout">
            <nav>
                <NavLink key="faq" to="faq">Faq</NavLink>
                <NavLink key="contact" to="contact">
                    contact
                </NavLink>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default AboutLayout;