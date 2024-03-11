import React from 'react';
import {Box, Rating} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import './style.scss'


const LinkItem = styled(NavLink)`
    text-decoration: none;
    border-radius: 15px;
`

const DescriptionStyled = styled.div`
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const RatingStyled = styled(Rating)`
    position: absolute !important;
    top: 0;
    right: 0;
    z-index: 2;
    padding: 7px;
    background-color: rgba(255, 255, 255, .5);
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
`

const RatingInfoStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const GenresStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 7px 0;
`
const GenreStyled = styled.span`
    color: #fff;
    font-size: 13px;
    margin-right: 5px;
    margin-bottom: 5px;
    background-color: rgba(255, 255, 255, .5);
    border-radius: 20px;
    padding: 4px 8px;
`

const TextStyled = styled.div`
    margin-top: 10px;
    font-size: 13px;
    color: #fff;
`

const CardMovie = ({title, addToFavorite, film, genres}) => {

    const getGenre = ({genre_ids}) => {

        const genreMap = genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name;
            return acc;
        }, {});

        return genre_ids.map(id => genreMap[id]);

    }

    return (
        <div className="single-img">
            <img
                className="image"
                src={`${process.env.REACT_APP_API_PATH_IMAGE}/${film.poster_path}`}
                alt="not found"/>

            {title !== 'favorite' ?
                <RatingStyled
                    max={1}
                    onChange={(event, newValue) => {
                        addToFavorite(newValue, film.id);
                    }}
                    emptyIcon={<StarIcon style={{opacity: 0.55}}
                                         fontSize="inherit"/>}
                /> : ''
            }
            <LinkItem className="img-overlay" to={`/film/${film.id}`}>
                <DescriptionStyled>
                    <p className="text">{film.title}</p>

                    <GenresStyled>
                        {getGenre(film).map((item, idx) => (<GenreStyled key={idx}>{item}</GenreStyled>))}
                    </GenresStyled>

                    <RatingInfoStyled>
                        <Rating
                            name="text-feedback"
                            value={film.vote_average}
                            readOnly
                            max={10}
                            precision={0.1}
                            emptyIcon={
                                <StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                        />
                        <GenreStyled> {Number(film.vote_average.toFixed(1))} / 10</GenreStyled>
                    </RatingInfoStyled>
                    <TextStyled>
                        {film.overview.substring(0, 120) + '...'}
                    </TextStyled>
                </DescriptionStyled>
            </LinkItem>
        </div>
    );
};

export default CardMovie;