import styled from "styled-components";
import {NavLink} from "react-router-dom";

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
