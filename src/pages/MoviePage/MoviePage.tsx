import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import moment from "moment/moment";
import {useSelector} from "react-redux";

import {fetchCurrentMovie} from '../../redux/currentMovie/asyncActions'

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
import {useAppDispatch} from "../../redux/store";
import {selectCurrentMovie} from "../../redux/currentMovie/selectors";
import {AddFavoriteMovie} from "../../redux/favoriteMovies/asyncActions";
import {selectActorsList} from "../../redux/actorsList/selectors";
import {fetchActorsList} from "../../redux/actorsList/asyncActions";
import {selectVideosList} from "../../redux/videoList/selectors";
import {fetchVideoList} from "../../redux/videoList/asyncActions";

const MoviePage = () => {
    const {id} = useParams<string>();

    const {t} = useTranslation();
    const [message, setMessage] = useState(false)
    const [switchFavorite, setSwitchFavorite] = useState(false)
    const [messageCopy, setMessageCopy] = useState(false)

    const movie = useSelector(selectCurrentMovie)
    const videos = useSelector(selectVideosList)
    const actors = useSelector(selectActorsList)
    const paramsDefault = {id, language: localStorage.getItem('lang') || 'en'}

    const dispatch = useAppDispatch()

    const copyLinkMovie = () => {
        setMessageCopy(true)
    }

    const generateData = (date: string | undefined) => {
        return moment(date).format('DD.MM.YYYY')
    }

    const generateRunTime = (time: number | undefined) => {
        const date = moment().startOf('day').add(time, 'minutes');
        const hour = date.hour();
        const minutes = date.minute();

        return `${hour != 0 ? `${hour} hour` : ''}  ${minutes} min`
    }

    const changeIcon = (newValue: boolean, id: number | undefined) => {
        setMessage(true)
        setSwitchFavorite(newValue)
        dispatch(AddFavoriteMovie({
            "media_type": "movie",
            "media_id": id || 0,
            "favorite": !!newValue
        }))
    }

    useEffect(() => {
        dispatch(fetchCurrentMovie(paramsDefault))
        dispatch(fetchVideoList(paramsDefault))
        dispatch(fetchActorsList(paramsDefault))
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

export default MoviePage;
