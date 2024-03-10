import React from 'react';
import Login from "../../components/Auth/Login";
import {Link} from "react-router-dom";

const SignInPage = () => {
    return (
        <div>
            login page
            <Login/>
            <Link to="/register">sign up</Link>
        </div>
    );
};

export default SignInPage;