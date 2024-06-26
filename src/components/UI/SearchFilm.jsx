import React, {useMemo} from 'react';
import {useNavigate} from "react-router-dom";
import {CardFilm, PreviewImage} from "./styled";
import {GenresSearchStyled, GenreStyled} from "../FilmsView/styled";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import moment from "moment/moment";


const SearchFilm = ({film, toggleDrawer}) => {
    const {t} = useTranslation();

    const {genres} = useSelector(state => state.sliceGenreList)

    const navigate = useNavigate()

    const getGenre = ({genre_ids}) => {

        const genreMap = genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name;
            return acc;
        }, {});

        return genre_ids.map(id => genreMap[id]);
    }

    const generateDate = useMemo(() => {
        return moment(film.release_date).format('YYYY')
    }, [film.id])

    const openFilmPath = () => {
        toggleDrawer()
        setTimeout(() => {
            navigate(`film/${film.id}`)
        }, 0)
    }

    return (
        <CardFilm onClick={openFilmPath}>
            <PreviewImage background={`${process.env.REACT_APP_API_PATH_IMAGE}/${film.backdrop_path}`}/>
            <div className="search-info">
                <div className="search-poster">
                    <img src={`${process.env.REACT_APP_API_PATH_IMAGE}/${film.poster_path}`} alt=""/>
                </div>
                <div className="search-description">
                    <h3 className="description-title">{film.title}</h3>
                    <GenresSearchStyled>
                        {getGenre(film).map((item, idx) => (<GenreStyled key={idx}>{item}</GenreStyled>))}
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
