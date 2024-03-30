import React from 'react';
import Registration from "../../components/Auth/Registration";
import {LinkAuthStyled, LoginPageStyled, LoginTitleStyled, LoginViewStyled} from "../SignIn/styled";

const SignUpPage = () => {
    return (
        <LoginPageStyled>
            <LoginViewStyled>
                <LoginTitleStyled>
                    Register page
                </LoginTitleStyled>
                <Registration/>
                <LinkAuthStyled to="/login">
                    sign in
                </LinkAuthStyled>
            </LoginViewStyled>
        </LoginPageStyled>
    );
};

export default SignUpPage;
