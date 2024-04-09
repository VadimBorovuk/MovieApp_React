import React from 'react';
import Login from "../../components/Auth/Login";
import {LoginPageStyled, LoginTitleStyled, LinkAuthStyled, LoginViewStyled} from "./styled";
import cinemaBackground from "../../assets/images/cinemaBack.jpg";


const SignInPage = () => {
    return (
        <LoginPageStyled background={cinemaBackground}>
            <article>
                <LoginViewStyled>
                    <LoginTitleStyled>
                        login page
                    </LoginTitleStyled>
                    <Login/>
                    <LinkAuthStyled to="/register">
                        sign up
                    </LinkAuthStyled>
                </LoginViewStyled>
            </article>
            <article/>
        </LoginPageStyled>
    );
};

export default SignInPage;
