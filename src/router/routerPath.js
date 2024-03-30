import {createBrowserRouter} from "react-router-dom";

import {lazy, Suspense} from "react";

const RootLayoutLazy = lazy(() => import("../layouts/RootLayout"))
const PageNotFoundLazy = lazy(() => import("../pages/404/index"))
const FavoriteFilmsLazy = lazy(() => import("../pages/FavoriteFilms/FavoriteFilms"))
const TopFilmsLazy = lazy(() => import("../pages/TopFilms/TopFilms"))
const DiscoverLazy = lazy(() => import("../pages/DiscoverFilm/Discover"))
const FilmPageLazy = lazy(() => import("../pages/Film"))
const SignInLazy = lazy(() => import("../pages/SignIn"))
const SignUpLazy = lazy(() => import("../pages/SignUp"))


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<></>}><RootLayoutLazy/></Suspense>,
        errorElement: <PageNotFoundLazy/>,
        children: [
            {
                path: "/",
                element: <DiscoverLazy/>,
            },
            {
                path: "top",
                element: <TopFilmsLazy/>,
            },
            {
                path: "favorite",
                element: <FavoriteFilmsLazy/>,
            },
            {
                path: "film/:id",
                element: <FilmPageLazy/>,
            }
        ]
    },
    {
        path: "login",
        errorElement: <PageNotFoundLazy/>,
        element: <Suspense fallback={<></>}><SignInLazy/></Suspense>
    },
    {
        path: "register",
        errorElement: <PageNotFoundLazy/>,
        element: <Suspense fallback={<></>}><SignUpLazy/></Suspense>
    }
]);
