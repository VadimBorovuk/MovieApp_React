import React, {Suspense} from 'react';
import {RouterProvider} from "react-router-dom";
import './App.scss'

import {router} from "./router/routerPath";

const App = () => {
    return (
        <div>
            <Suspense fallback={<></>}>
                <RouterProvider router={router}/>
            </Suspense>
        </div>
    );
};

export default App;
