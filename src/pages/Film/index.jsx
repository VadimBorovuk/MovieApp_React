import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import moment from "moment/moment";
import {fetchVideos} from "../../store/slices/videoListSlice";
import {fetchActors} from "../../store/slices/actorsListSlice";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentFilm} from "../../store/slices/filmCurrentSlice";
import {AddFavoriteFilms} from "../../store/slices/filmsFavoriteSlice";

import {
    Movie, MovieData, MovieInfo,
    MovieView, Poster, Image, View
} from "./styled";


import {useTranslation} from "react-i18next";
import MovieActors from "./MovieActors";
import MovieGenre from "./MovieGenre";
import MovieSynopsis from "./MovieSynopsis";
import MovieCompany from "./MovieCompany";
import MovieTrailer from "./MovieTrailer";
import SnackbarCopy from "./SnackbarCopy";
import SnackbarFavorite from "./SnackbarFavorite";
import MovieHeader from "./MovieHead";
import {CircularProgress} from "@mui/material";

const Film = () => {
    const {t} = useTranslation();
    const [message, setMessage] = useState(false)
    const [switchFavorite, setSwitchFavorite] = useState(false)

    const [messageCopy, setMessageCopy] = useState(false)

    const {id} = useParams()
    const movie = useSelector(state => state.sliceCurrentFilm)
    const videos = useSelector(state => state.sliceVideoList)
    const actors = useSelector(state => state.sliceActorsList)
    const dispatch = useDispatch()

    const copyLinkMovie = () => {
        setMessageCopy(true)
    }

    const generateData = useCallback((date) => {
        return moment(date).format('DD.MM.YYYY')
    }, [movie.current.release_date])

    const generateRunTime = useCallback((time) => {
        const date = moment().startOf('day').add(time, 'minutes');
        const hour = date.hour();
        const minutes = date.minute();

        return `${hour != 0 ? `${hour} hour` : ''}  ${minutes} min`
    }, [movie.current.runtime])

    const changeIcon = (newValue, {id}) => {
        setMessage(true)
        setSwitchFavorite(newValue)
        dispatch(AddFavoriteFilms({
            "media_type": "movie",
            "media_id": id,
            "favorite": !!newValue
        }))
    }

    useEffect(() => {
        dispatch(fetchCurrentFilm({id, language: localStorage.getItem('lang')}))
        dispatch(fetchVideos({id, language: localStorage.getItem('lang')}))
        dispatch(fetchActors({id, language: localStorage.getItem('lang')}))
    }, [id]);

    return (
        <MovieView background={`${process.env.REACT_APP_API_PATH_IMAGE}/${movie.current.backdrop_path}`}>
            {movie.error ? movie.error : <div style={{height: '100%'}}>
                {movie.loading ? <CircularProgress/> :
                    <View>
                        <Movie>
                            <Poster>
                                <Image src={`${process.env.REACT_APP_API_PATH_IMAGE}/${movie.current.poster_path}`}
                                       alt="not found"/>
                            </Poster>
                            <MovieData>
                                <MovieInfo>
                                    <MovieHeader
                                        t={t}
                                        movie={movie}
                                        switchFavorite={switchFavorite}
                                        changeIcon={changeIcon}
                                        copyLinkMovie={copyLinkMovie}
                                        generateRunTime={generateRunTime}
                                        generateData={generateData}
                                    />
                                    <MovieActors
                                        t={t}
                                        actors={actors}
                                    />
                                    <MovieGenre
                                        t={t}
                                        movie={movie}
                                    />

                                    <MovieSynopsis
                                        t={t}
                                        movie={movie}
                                    />

                                    <MovieCompany
                                        t={t}
                                        movie={movie}
                                    />
                                </MovieInfo>

                                <MovieTrailer
                                    t={t}
                                    videos={videos}
                                />
                            </MovieData>
                        </Movie>

                        <SnackbarCopy
                            t={t}
                            messageCopy={messageCopy}
                            setMessageCopy={setMessageCopy}
                        />

                        <SnackbarFavorite
                            t={t}
                            message={message}
                            setMessage={setMessage}
                            switchFavorite={switchFavorite}
                        />
                    </View>
                }
            </div>
            }
        </MovieView>
    );
};

export default Film;
