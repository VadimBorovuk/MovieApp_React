import styled from "styled-components";
import {Link} from "react-router-dom";

export const LoginPageStyled = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${props => props.background}) no-repeat top center;
    background-size: cover;

    .block-auth {
        flex: 1 1 50%;
        max-width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 560px) {
            flex: none;
            max-width: none;
        }
    }
`

export const LoginViewStyled = styled.div`
    width: 400px;
    min-height: 450px;
    border-radius: 15px;
    border: 1px solid #ededed;
    background: #fff;
    padding: 15px;

    @media screen and (max-width: 560px){
        width: 300px;
    }
`
export const LoginTitleStyled = styled.h3`
    text-transform: uppercase;
    letter-spacing: 1.4px;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    margin-bottom: 40px;

    @media screen and (max-width: 560px) {
        font-size: 19px;
    }
`

export const LinkAuthStyled = styled(Link)`
    margin-top: 15px;
    width: 100%;
    text-align: center;
    text-decoration: underline;
    font-size: 20px;
    display: block;
    color: #000;

    @media screen and (max-width: 560px) {
        font-size: 17px;
    }
`

