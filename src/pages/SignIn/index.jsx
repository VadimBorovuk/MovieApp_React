import React from 'react';
import Login from "../../components/Auth/Login";
import {LoginPageStyled, LoginTitleStyled,LinkAuthStyled, LoginViewStyled} from "./styled";


const SignInPage = () => {
    return (
        <LoginPageStyled>
            <LoginViewStyled>
                <LoginTitleStyled>
                    login page
                </LoginTitleStyled>
                <Login/>
                <LinkAuthStyled to="/register">
                    sign up
                </LinkAuthStyled>
            </LoginViewStyled>
        </LoginPageStyled>
    );
};

export default SignInPage;
