import styled from "styled-components";
import {Rating} from "@mui/material";
import {NavLink} from "react-router-dom";

export const LinkItem = styled(NavLink)`
    text-decoration: none;
    border-radius: 15px;
`

export const DescriptionStyled = styled.div`
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const RatingStyled = styled(Rating)`
    position: absolute !important;
    top: 0;
    right: 0;
    z-index: 2;
    padding: 7px;
    background-color: rgba(255, 255, 255, .5);
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;

    & .MuiRating-iconFilled {
        color: #ff565f
    }

    & .MuiRating-iconHover {
        color: #ff3d47
    }
`

export const RatingInfoStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const GenresStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 7px 0;
`
export const GenreStyled = styled.span`
    color: #fff;
    font-size: 13px;
    margin-right: 5px;
    margin-bottom: 5px;
    background-color: rgba(255, 255, 255, .5);
    border-radius: 20px;
    padding: 4px 8px;
`

export const TextStyled = styled.div`
    margin-top: 5px;
    font-size: 13px;
    color: #fff;
`
