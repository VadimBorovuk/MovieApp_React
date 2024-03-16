import React, {useCallback, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentFilm} from "../../store/slices/filmCurrentSlice";
import ReactPlayer from 'react-player'
import {CircularProgress} from "@mui/material";
import {
    Movie, MovieData, MovieFields, MovieGenres,
    MovieHead, MovieInfo, MovieView, Poster, Image, MovieRating,
    MovieDuration, MovieVoices,
    GenresStyled, GenreStyled, MovieVideo, View, ButtonBack
} from "./styled";
import StarIcon from '@mui/icons-material/Star';
import moment from "moment/moment";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {fetchVideos} from "../../store/slices/videoListSlice";


const Film = () => {
    const {id} = useParams()
    const movie = useSelector(state => state.sliceCurrentFilm)
    const videos = useSelector(state => state.sliceVideoList)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const generateData = useCallback((date) => {
        return moment(date).format('DD.MM.YYYY')
    }, [movie.current.release_date])

    const generateRunTime = useCallback((time) => {
        const date = moment().startOf('day').add(time, 'minutes');
        const hour = date.hour();
        const minutes = date.minute();

        return `${hour} hour ${minutes} min`
    }, [movie.current.runtime])

    useEffect(() => {
        dispatch(fetchCurrentFilm({id, language: localStorage.getItem('lang')}))
        dispatch(fetchVideos({id, language: localStorage.getItem('lang')}))
    }, [id]);


    return (
        <MovieView>
            {movie.error ? movie.error : <div style={{height: '100%'}}>
                {movie.loading ? <CircularProgress/> :
                    <View>
                        {/*<ButtonBack variant="outlined"*/}
                        {/*            onClick={() => navigate(-1)}*/}
                        {/*            startIcon={<ArrowBackIcon/>}>*/}
                        {/*    Back*/}
                        {/*</ButtonBack>*/}

                        <Movie>
                            <Poster>
                                <Image src={`${process.env.REACT_APP_API_PATH_IMAGE}/${movie.current.poster_path}`}
                                       alt="not found"/>
                            </Poster>
                            <MovieData>
                                <MovieInfo>
                                    <MovieHead>{movie.current.title}</MovieHead>
                                    <MovieRating>
                                        <MovieVoices>
                                            <StarIcon/>
                                            <span>{movie.current.vote_average}</span>
                                        </MovieVoices>
                                        <MovieDuration>
                                        <span>
                                            {generateRunTime(movie.current.runtime)}
                                        </span>
                                            <span>/</span>
                                            <span>
                                            {generateData(movie.current.release_date)}
                                        </span>
                                        </MovieDuration>
                                    </MovieRating>
                                </MovieInfo>

                                <MovieGenres>
                                    <h2 className="title">
                                        The genres
                                    </h2>
                                    <GenresStyled>
                                        {movie.current && movie.current.genres && movie.current.genres.map(item => {
                                            return <GenreStyled key={item.id}>{item.name}</GenreStyled>
                                        })}
                                    </GenresStyled>
                                </MovieGenres>

                                <MovieFields>
                                    <h2 className="title">
                                        Synopsis
                                    </h2>
                                    <p className="description">
                                        {movie.current.overview}
                                    </p>
                                </MovieFields>


                                <MovieVideo>
                                    <h2 className="title">
                                        Trailers
                                    </h2>

                                    {videos.loading ?
                                        <></> :
                                        !videos.results.length ? <div>
                                                No videos
                                            </div> :
                                            <ReactPlayer
                                                height={450}
                                                width={'100%'}
                                                controls={true}
                                                url={videos.results}
                                            />
                                    }
                                </MovieVideo>
                            </MovieData>
                        </Movie>
                    </View>
                }
            </div>
            }
        </MovieView>
    );
};

export default Film;
