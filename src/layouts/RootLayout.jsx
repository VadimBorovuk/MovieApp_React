import React from 'react';
import PrivateRoutes from "../router/privateRoutes";

import './style.scss'

const RootLayout = () => {
    return (
        <div className="root-layout">
            <PrivateRoutes/>
        </div>
    );
};

export default RootLayout;