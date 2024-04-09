import {Navigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth/use-auth";
import ContentView from "../components/ContentView/ContentView";

const PrivateRoutes = () => {


    const {isAuth} = useAuth()

    return (
        isAuth ? <ContentView/> : <Navigate to="login"/>
    );
};

export default PrivateRoutes;
