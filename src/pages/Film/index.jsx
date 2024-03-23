import React, {useCallback, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentFilm} from "../../store/slices/filmCurrentSlice";
import ReactPlayer from 'react-player'
import {CircularProgress, Badge, Accordion, AccordionSummary, AccordionDetails, Grid} from "@mui/material";
import {
    Movie, MovieData, MovieFields, MovieGenres,
    MovieHead, MovieInfo, MovieView, Poster, Image, MovieRating,
    MovieDuration, MovieVoices,
    GenresStyled, GenreStyled, MovieVideo, View, ButtonBack, IconCompany, CompanyStyled, ActorsStyled
} from "./styled";
import StarIcon from '@mui/icons-material/Star';
import moment from "moment/moment";
import {fetchVideos} from "../../store/slices/videoListSlice";

import AddReactionIcon from '@mui/icons-material/AddReaction';
import {fetchActors} from "../../store/slices/actorsListSlice";
import ActorCard from "../../components/FilmsView/ActorCard";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Film = () => {
    const {id} = useParams()
    const movie = useSelector(state => state.sliceCurrentFilm)
    const videos = useSelector(state => state.sliceVideoList)
    const actors = useSelector(state => state.sliceActorsList)
    const dispatch = useDispatch()

    // const navigate = useNavigate()

    const generateData = useCallback((date) => {
        return moment(date).format('DD.MM.YYYY')
    }, [movie.current.release_date])

    const generateRunTime = useCallback((time) => {
        const date = moment().startOf('day').add(time, 'minutes');
        const hour = date.hour();
        const minutes = date.minute();

        return `${hour != 0 ? `${hour} hour` : ''}  ${minutes} min`
    }, [movie.current.runtime])

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
                                    <MovieHead>
                                        <p className="title">
                                            {movie.current.title}
                                        </p>
                                        <Badge
                                            sx={{
                                                '.MuiBadge-badge': {
                                                    fontSize: '15px'
                                                },
                                                '.MuiSvgIcon-root': {
                                                    height: '1.3em',
                                                    width: '1.3em'
                                                }
                                            }}
                                            className="badget-votes"
                                            color="success"
                                            size="large"
                                            badgeContent={movie.current.vote_count} max={50000}>
                                            <AddReactionIcon/>
                                        </Badge>
                                    </MovieHead>
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

                                    <MovieGenres>
                                        <Accordion sx={{
                                            background: 'rgba(0, 0, 0, .3)',
                                           '.MuiAccordionSummary-expandIconWrapper': {
                                                color: '#fff'
                                           }
                                        }}>
                                            <AccordionSummary
                                                style={{color: '#fff'}}
                                                expandIcon={<ExpandMoreIcon/>}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                            >
                                                <p className="title" style={{fontSize: '22px'}}>
                                                    The main actors
                                                </p>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={2}>
                                                    {actors && actors.results.map(item => {
                                                        return <ActorCard key={item.id} {...item}/>
                                                    })}
                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                    </MovieGenres>

                                    <MovieGenres>
                                        <p className="title">
                                            The genres
                                        </p>
                                        <GenresStyled>
                                            {movie.current && movie.current.genres && movie.current.genres.map(item => {
                                                return <GenreStyled key={item.id}>{item.name}</GenreStyled>
                                            })}
                                        </GenresStyled>
                                    </MovieGenres>

                                    <MovieFields>
                                        <p className="title">
                                            Synopsis
                                        </p>
                                        <p className="description">
                                            {movie.current.overview}
                                        </p>
                                    </MovieFields>

                                    <MovieGenres>
                                        <p className="title">
                                            The production companies
                                        </p>
                                        <CompanyStyled>
                                            <Grid container spacing={2}>
                                                {movie.current && movie.current.production_companies && movie.current.production_companies.map(item => {
                                                    return (
                                                        item.logo_path ?
                                                            <Grid item xs={3} key={item.id}>
                                                                <IconCompany>
                                                                    <img
                                                                        src={`${process.env.REACT_APP_API_PATH_IMAGE}${item.logo_path}`}
                                                                        alt=""/>
                                                                </IconCompany>
                                                            </Grid>: ''
                                                    )
                                                })}
                                            </Grid>
                                        </CompanyStyled>
                                    </MovieGenres>

                                </MovieInfo>

                                <MovieVideo>
                                    <p className="title">
                                        Trailers
                                    </p>

                                    {videos.loading ?
                                        <></> :
                                        !videos.results.length ? <p className="title">
                                                No videos
                                            </p> :
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
