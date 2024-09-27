import React, {FC} from 'react';
import {MovieFields} from "./styled";
import {LangI118Type} from "../../components/Navbar/Pages";
import {currentMovieApi} from "../../redux/currentMovie/types";

type MovieSynopsisProps = {
  t: LangI118Type
  movie: currentMovieApi
}

const MovieSynopsis: FC<MovieSynopsisProps> = ({t, movie}) => {
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
