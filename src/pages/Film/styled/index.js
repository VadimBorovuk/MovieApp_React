import styled from "styled-components";
import Button from "@mui/material/Button";

export const MovieView = styled.div`
    background: #ffffff;
    padding: 10px 30px 50px;
    width: 100%;
    border-radius: 15px;
    //height: 800px;
`

export const View = styled.div``
export const ButtonBack = styled(Button)`
    margin: 15px 0 0 0!important;
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
    height: 800px;
    max-width: 40%;
    flex: 1 1 40%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
`
export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: fill;
    border-radius: 11px;
    box-shadow: 0 16px 48px;
`
export const MovieData = styled.div`
    width: 100%;
    max-width: 57%;
    flex: 1 1 57%;
`
export const MovieInfo = styled.div``

export const MovieFields = styled.div`
    color: #000;
    font-weight: 700;
    margin-bottom: 16px;
    font-size: 23px;

    .title {
        font-size: 24px;
        //color: dimgray;
        color: #000;
        text-transform: uppercase;
    }

    .description {
        font-size: 20px;
        color: dimgray;
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
        color: #000;
        text-transform: uppercase;
    }
`

export const MovieHead = styled.h2`
    font-size: 52px;
    font-weight: 200;
    line-height: 1.2;
    margin-top: 10px;
    color: #565b5e;
    letter-spacing: -0.5px;
    text-transform: uppercase;
    margin-bottom: 8px;

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

    span {
        font-size: 18px;
        font-weight: bold;
        margin-left: 5px;
    }
`

export const MovieDuration = styled.div`
    display: flex;
    align-items: center;

    span {
        font-style: italic;
        font-size: 16px;
        color: #707070;
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
    color: #000;
    font-weight: 700;
    margin-bottom: 16px;
    font-size: 23px;

    .title {
        font-size: 24px;
        color: #000;
        text-transform: uppercase;
    }
    
`
