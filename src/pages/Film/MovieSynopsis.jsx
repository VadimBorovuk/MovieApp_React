import React from 'react';
import {MovieFields} from "./styled";

const MovieSynopsis = ({t, movie}) => {
    return (
        <MovieFields>
            <p className="title">
                {t('t.key.movie.synopsis')}
            </p>
            <p className="description">
                {movie.current.overview}
            </p>
        </MovieFields>
    );
};

export default MovieSynopsis;
