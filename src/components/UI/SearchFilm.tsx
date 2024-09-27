import React, {FC, useMemo} from 'react';
import {useNavigate} from "react-router-dom";
import {CardFilm, PreviewImage} from "./styled";
import {GenresSearchStyled, GenreStyled} from "../FilmsView/styled";
import {useSelector} from "react-redux";
import moment from "moment/moment";
import {LangI118Type} from "../Navbar/Pages";
import {MovieDataProps} from "../../redux/discoverMovies/types";
import {selectGenreLists} from "../../redux/genreList/selectors";

type SearchFilmProps = {
    t: LangI118Type
    film: MovieDataProps
    toggleDrawer: () => void
}

const SearchFilm: FC<SearchFilmProps> = ({t, film, toggleDrawer}) => {

    const {genres} = useSelector(selectGenreLists)

    const navigate = useNavigate()

    const getGenre = (film: MovieDataProps) => {

        const genreMap = genres.reduce((acc: any, genre: any) => {
            acc[genre.id] = genre.name;
            return acc;
        }, {});

        return film.genre_ids.map((id: number) => genreMap[id]);
    }

    const generateDate = useMemo(() => {
        return moment(film.release_date).format('YYYY')
    }, [film.id])

    const openFilmPath = () => {
        toggleDrawer()
        setTimeout(() => {
            navigate(`movie/${film.id}`)
        }, 0)
    }

    return (
        <CardFilm onClick={openFilmPath}>
            <PreviewImage background={`${process.env.REACT_APP_API_PATH_IMAGE}/${film.backdrop_path}`}>das</PreviewImage>
            <div className="search-info">
                <div className="search-poster">
                    <img src={`${process.env.REACT_APP_API_PATH_IMAGE}/${film.poster_path}`} alt=""/>
                </div>
                <div className="search-description">
                    <h3 className="description-title">{film.title}</h3>
                    <GenresSearchStyled>
                        {getGenre(film).map((item: number, idx: number) => (<GenreStyled key={idx}>{item}</GenreStyled>))}
                    </GenresSearchStyled>
                    <div className="desc-contact">
                        <div className="desc-info">
                            <span className="desc-info__value">{generateDate}</span>
                            <span className="desc-info__label">
                                   {t('t.search.year')}
                            </span>
                        </div>
                        <div className="desc-info">
                            <span className="desc-info__value">{film.vote_average}</span>
                            <span className="desc-info__label">
                                   {t('t.search.popular')}
                            </span>
                        </div>
                        <div className="desc-info">
                            <span className="desc-info__value">{film.vote_count}</span>
                            <span className="desc-info__label">{t('t.search.vote')}</span>
                        </div>
                    </div>

                </div>
            </div>
        </CardFilm>
    );
};

export default SearchFilm;
