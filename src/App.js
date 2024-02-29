import React from 'react';
import {RouterProvider} from "react-router-dom";
import './App.scss'

import {router} from "./router/routerPath";

const App = () => {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;