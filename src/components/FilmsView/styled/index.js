import styled from "styled-components";
import {CardContent, Rating} from "@mui/material";
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

export const GenresSearchStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
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

export const CardStyled = styled(CardContent)`
    height: 60px;
    background-color: rgba(0, 0, 0, .4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff
`

export const ActorStyled = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    flex: 1 1 21%;
    max-width: 21%;
    height: 260px;
    flex-wrap: wrap;
    background-color: rgba(255, 255, 255, .4);
    margin: 0 13px 26px;
    border-radius: 15px;
    box-shadow: 0 8px 18px #1976d2;

    img {
        height: 175px;
        width: 100%;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        object-fit: cover;
    }
    .info-actor{
        width: 100%;
        padding: 0 10px 20px;
        box-sizing: border-box;
    }
    .info-actor p{
        text-align: center;
        margin: 0 0 5px;
        font-size: 14px;
        font-weight: bold;
    }
`
