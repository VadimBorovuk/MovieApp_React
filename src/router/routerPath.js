import {createBrowserRouter} from "react-router-dom";

import PageNotFound from "../pages/404/index";
import RootLayout from "../layouts/RootLayout";
import Films from "../pages/Films/Films";
import Film from "../pages/Films/components/Film";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: "films",
                element: <Films />,
            },
            {
                path: "films/:id",
                element: <Film />,
            },
        ]
    },
    {
        path: "login",
        element: <Home/>
    }

]);