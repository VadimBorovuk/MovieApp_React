import React from 'react';
import {Link} from 'react-router-dom'
import Registration from "../../components/Auth/Registration";

const SignUpPage = () => {
    return (
        <div>
            sign up page
            <Registration/>
            <Link to="/login">sign in</Link>
        </div>
    );
};

export default SignUpPage;