import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import FilmsLayout from "../layouts/FilmsLayout";
import Film from "../pages/Films/components/Film";
import AboutLayout from "../layouts/AboutLayout";
import Faq from "../pages/About/components/Faq";
import Contact from "../pages/About/components/Contact";
import Films from "../pages/Films/Films";
import About from "../pages/About/About";
import PrivateRoutes from "./privateRoutes";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<PrivateRoutes/>}>
                <Route path="/" element={<RootLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="films" element={<FilmsLayout/>}>
                        <Route index element={<Films/>}/>
                        <Route path=":id" element={<Film/>}/>
                    </Route>
                    <Route path="about" element={<AboutLayout/>}>
                        <Route index element={<About/>}/>
                        <Route path="faq" element={<Faq/>}/>
                        <Route path="contact" element={<Contact/>}/>
                    </Route>
                </Route>
            </Route>
            <Route path="login" element={<div>login</div>}/>
        </Route>

    )
)