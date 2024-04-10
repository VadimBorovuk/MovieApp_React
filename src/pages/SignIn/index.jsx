import React from 'react';
import Login from "../../components/Auth/Login";
import {LoginPageStyled, LoginTitleStyled, LinkAuthStyled, LoginViewStyled} from "./styled";
import cinemaBackground from "../../assets/images/cinemaBack.jpg";


const SignInPage = () => {
    return (
        <LoginPageStyled background={cinemaBackground}>
            <div className="block-auth">
                <LoginViewStyled>
                    <LoginTitleStyled>
                        login page
                    </LoginTitleStyled>
                    <Login/>
                    <LinkAuthStyled to="/register">
                        sign up
                    </LinkAuthStyled>
                </LoginViewStyled>
            </div>
            <div className="block-auth"></div>
        </LoginPageStyled>
    );
};

export default SignInPage;
