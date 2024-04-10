import React from 'react';
import {GenresStyled, GenreStyled, MovieGenres} from "./styled";

const MovieGenre = ({t, movie}) => {
    return (
        <MovieGenres>
            <p className="title">
                {t('t.key.movie.genres')}
            </p>
            <GenresStyled>
                {movie.current && movie.current.genres && movie.current.genres.map(item => {
                    return <GenreStyled key={item.id}>{item.name}</GenreStyled>
                })}
            </GenresStyled>
        </MovieGenres>
    );
};

export default MovieGenre;
