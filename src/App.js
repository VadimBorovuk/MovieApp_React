import React from 'react';
import {RouterProvider} from "react-router-dom";
import './App.scss'

import {router} from "./router/routerPath";

const App = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default App;
