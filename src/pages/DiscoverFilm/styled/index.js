import styled from "styled-components";
import {Container} from "@mui/material";
import Button from "@mui/material/Button";

export const ContentBlock = styled(Container)`
    border-radius: 25px;
    width: 100%;
    padding: 25px 0;
    background-color: #354160;
`

export const ContentDiscover = styled.div`
    width: 100%;
`

export const FiltersStyled = styled.div`
    border-radius: 10px;
    padding: 15px 20px;
    background-color: #e3e3e3;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    box-shadow: 0 8px 18px #1976d2;
`

export const ButtonStyled = styled(Button)`
    margin-left: 20px;
`
