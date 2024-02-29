// import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
// import RootLayout from "../layouts/RootLayout";
// import Home from "../pages/Home/Home";
// import FilmsLayout from "../layouts/FilmsLayout";
// import Film from "../pages/Films/components/Film";
//
// import Films from "../pages/Films/Films";
// import PrivateRoutes from "./privateRoutes";
//
// export const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route>
//             <Route element={<PrivateRoutes/>}>
//                 <Route path="/" element={<RootLayout/>}>
//                     <Route index element={<Home/>}/>
//                     <Route path="films" element={<FilmsLayout/>}>
//                         <Route index element={<Films/>}/>
//                         <Route path=":id" element={<Film/>}/>
//                     </Route>
//                 </Route>
//             </Route>
//             <Route path="login" element={<div>login</div>}/>
//             <Route path="*" element={<div>Not found</div>}/>
//         </Route>
//
//     )
// )