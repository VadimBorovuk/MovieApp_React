import styled from "styled-components";
import Button from "@mui/material/Button";
import {Accordion} from "@mui/material";

export const MovieView = styled.div`
    padding: 10px 30px 50px;
    width: 100%;
    border-radius: 15px;
    background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${props => props.background}) no-repeat top center;
    background-size: cover;
`

export const View = styled.div``
export const ButtonBack = styled(Button)`
    margin: 15px 0 0 0 !important;
`

export const Movie = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin-top: 36px;
    transition: all 600ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
`
export const Poster = styled.div`
    height: 750px;
    max-width: 40%;
    flex: 1 1 40%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
    box-shadow: 0 8px 18px #1976d2;
    border-radius: 20px;
`
export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: fill;
    box-shadow: 0 16px 48px;
    border-radius: 20px;
`
export const MovieData = styled.div`
    width: 100%;
    max-width: 57%;
    flex: 1 1 57%;
`
export const MovieInfo = styled.div`
    background-color: rgba(255, 255, 255, .2);
    padding: 1rem;
    border-radius: 20px;
    box-shadow: 0 8px 18px #1976d2;
`

export const MovieFields = styled.div`
    color: #fff;
    font-weight: 700;
    margin-bottom: 16px;
    font-size: 23px;

    .title {
        font-size: 24px;
        color: #fff;
        text-transform: uppercase;
    }

    .description {
        font-size: 20px;
        color: #fff;
    }
`

export const MovieGenres = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 16px;
    flex-wrap: wrap;

    .title {
        font-size: 24px;
        color: #fff;
        text-transform: uppercase;
    }
`

export const MovieHead = styled.h2`
    margin-top: 10px;
    margin-bottom: 8px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    .title {
        letter-spacing: -0.5px;
        margin: 0;
        font-size: 52px;
        font-weight: 200;
        line-height: 1.2;
        text-transform: uppercase;
        flex: 1 1 85%;
        max-width: 85%;
    }
    .badget-votes{
        flex: 1 1 13%;
        max-width: 13%;
        align-items: flex-end;
        justify-content: flex-end;
        position: relative;
    }
`

export const MovieRating = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const MovieVoices = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    background-color: rgba(0, 0, 0, .3);
    padding: 4px 8px;
    border-radius: 6px;

    span {
        font-size: 18px;
        font-weight: bold;
        margin-left: 5px;
    }
`

export const MovieDuration = styled.div`
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, .3);
    padding: 4px 8px;
    border-radius: 6px;

    span {
        font-style: italic;
        font-size: 18px;
        color: #fff;
    }

    span:nth-child(2) {
        margin: 0 3px;
    }
`

export const GenresStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 7px 0;
`

export const ActorsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 7px 0;
`

export const GenreStyled = styled.span`
    color: #fff;
    font-size: 18px;
    margin-right: 14px;
    margin-bottom: 5px;
    background-color: rgba(0, 0, 0, .3);
    border-radius: 20px;
    padding: 6px 12px;
`

export const MovieVideo = styled.div`
    color: #fff;
    font-weight: 700;
    margin-bottom: 16px;
    font-size: 23px;

    .title {
        text-align: center;
        font-size: 24px;
        color: #fff;
        text-transform: uppercase;
    }
`

export const CompanyStyled = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 7px 0;
    width: 100%;
    border-radius: 5px;
    padding: 10px 0;
`

export const IconCompany = styled.div`
    background-color: rgba(255, 255, 255, .4);
    height: 70px;
    width: 140px;
    margin: 0 13px 26px;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0 8px 18px #1976d2;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
