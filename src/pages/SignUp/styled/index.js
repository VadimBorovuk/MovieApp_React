import styled from "styled-components";
import {Link} from "react-router-dom";

export const LoginPageStyled = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

export const LoginViewStyled = styled.div`
   width: 350px;
    min-height: 400px;
    border-radius: 15px;
    border: 1px solid #ededed;
    padding: 15px;
`
export const LoginTitleStyled = styled.h3`
  text-transform: uppercase;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
`

export const LinkAuthStyled = styled(Link)`
    width: 100%;
    text-align: center;
    text-decoration: underline;
    font-size: 20px;
    display: block;
    color: #000;
    margin-top: 10px;
`

