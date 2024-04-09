import styled from "styled-components";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export const LinkItem = styled(NavLink)`
    display: flex;
    align-items: center;
    margin-right: 15px;
    text-decoration: none;
    font-size: 16px;
    color: #fff;

    &.active {
        background: white;
        border-radius: 15px;
        padding: 5px 7px;
        color: #000000;
    }
`;

export const ButtonLangStyled = styled(Button)`
    color: #fff;
    height: 47px;
    width: 47px;

    img {
        max-width: 100%;
        height: 100%;
    }
`


export const LangItemStyled = styled(MenuItem)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;

    img {
        max-width: 100%;
        height: 100%;
        margin-right: 10px;
    }
`
