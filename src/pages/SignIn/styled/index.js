import styled from "styled-components";
import {Link} from "react-router-dom";

export const LoginPageStyled = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: url(${props => props.background}) no-repeat top center;
    background-size: cover;
    article{
        flex: 1 1 50%;
        max-width: 50%; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const LoginViewStyled = styled.div`
    width: 400px;
    min-height: 450px;
    border-radius: 15px;
    border: 1px solid #ededed;
    background: #fff;
    padding: 15px;
`
export const LoginTitleStyled = styled.h3`
  text-transform: uppercase;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    margin-bottom: 40px;
`

export const LinkAuthStyled = styled(Link)`
    margin-top: 15px;
    width: 100%;
    text-align: center;
    text-decoration: underline;
    font-size: 20px;
    display: block;
    color: #000;
    
`

