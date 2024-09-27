import React, {FC} from 'react';
import {GenresStyled, GenreStyled, MovieGenres} from "./styled";
import {LangI118Type} from "../../components/Navbar/Pages";
import {GenresProps} from "../../redux/genreList/types";
import {currentMovieApi} from "../../redux/currentMovie/types";

type MovieGenreProps = {
  t: LangI118Type
  movie: currentMovieApi
}

const MovieGenre:FC<MovieGenreProps> = ({t, movie}) => {
    return (
        <MovieGenres>
            <p className="title">
                {t('t.key.movie.genres')}
            </p>
            <GenresStyled>
                {movie.current && movie.current.genres && movie.current.genres.map((item: GenresProps) => {
                    return <GenreStyled key={item.id}>{item.name}</GenreStyled>
                })}
            </GenresStyled>
        </MovieGenres>
    );
};

export default MovieGenre;
