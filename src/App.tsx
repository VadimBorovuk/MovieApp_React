import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import './App.scss'

import MainLayout from "./layouts/MainLayout";

const DiscoverLazy = lazy(() => import("./pages/DiscoverFilm/Discover"))
// const DiscoverLazy = lazy(() => import("./pages/DiscoverFilm/Discover"))
const PageNotFoundLazy = lazy(() => import("./pages/404"))
const TopFilmsLazy = lazy(() => import("./pages/TopFilms/TopFilms"))
const FavoriteFilmsLazy = lazy(() => import("./pages/FavoriteFilms/FavoriteFilms"))
const FilmPageLazy = lazy(() => import("./pages/MoviePage/MoviePage"))
const SignInLazy = lazy(() => import("./pages/SignIn"))
const SignUpLazy = lazy(() => import("./pages/SignUp"))


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MainLayout/>}>

          <Route path="/" element={
            <Suspense fallback={<div>'Loading Movies...'</div>}>
              <DiscoverLazy/>
            </Suspense>
          }/>

          <Route path="top" element={
            <Suspense fallback={<div>'Loading TopFilmsLazy...'</div>}>
              <TopFilmsLazy/>
            </Suspense>
          }/>

          <Route path="favorite" element={
            <Suspense fallback={<div>'Loading FavoriteFilmsLazy...'</div>}>
              <FavoriteFilmsLazy/>
            </Suspense>
          }/>
          <Route path="movie/:id" element={
            <Suspense fallback={<div>'Loading FilmPageLazy...'</div>}>
              <FilmPageLazy/>
            </Suspense>
          }/>
        </Route>

        <Route path="login" element={
          <Suspense fallback={<div>'Loading SignInLazy...'</div>}>
            <SignInLazy/>
          </Suspense>
        }/>

        <Route path="register" element={
          <Suspense fallback={<div>'Loading SignUpLazy...'</div>}>
            <SignUpLazy/>
          </Suspense>
        }/>

        <Route path="*" element={
          <Suspense fallback={<div>'Not found...'</div>}>
            <PageNotFoundLazy/>
          </Suspense>
        }/>
      </Routes>
  );
};

export default App;
