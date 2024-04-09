import React from 'react';
import Registration from "../../components/Auth/Registration";
import {LinkAuthStyled, LoginPageStyled, LoginTitleStyled, LoginViewStyled} from "../SignIn/styled";
import cinemaBackground from "../../assets/images/cinemaBack.jpg"

const SignUpPage = () => {
    return (
        <LoginPageStyled background={cinemaBackground}>
            <article>
                <LoginViewStyled>
                    <LoginTitleStyled>
                        Register page
                    </LoginTitleStyled>
                    <Registration/>
                    <LinkAuthStyled to="/login">
                        sign in
                    </LinkAuthStyled>
                </LoginViewStyled>
            </article>
            <article/>

        </LoginPageStyled>
    );
};

export default SignUpPage;
