import React, {FC, useState} from 'react';
import StarIcon from "@mui/icons-material/Star";

import {Rating} from "@mui/material";

import './style.scss'
import {
  DescriptionStyled,
  GenresStyled,
  GenreStyled,
  LinkItem,
  RatingInfoStyled,
  RatingStyled,
  TextStyled
} from "./styled";
import moment from "moment";
import {useLocation} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";
import {GenresProps} from "./View";
import {LangI118Type} from "../Navbar/Pages";
import {MovieDataProps} from "../../redux/discoverMovies/types";

type CardMovieProps = {
  t: LangI118Type
  addToFavorite: (data: string, id: number, status: string) => void
  film: MovieDataProps
  genres: GenresProps[]
  setSwitchTitle: (value: string) => void
  switchTitle: string
}

const CardMovie: FC<CardMovieProps> = ({t, addToFavorite, film, genres, setSwitchTitle, switchTitle}) => {

  const [disableIcon, setDisableIcon] = useState(false)

  const location = useLocation()

  const getGenre = (film: MovieDataProps) => {

    const genreMap = genres.reduce((acc: any, genre: any) => {
      acc[genre.id] = genre.name;
      return acc;
    }, {});
    const res = film.genre_ids || []
    return res.map((id: number) => genreMap[id]);

  }

  const changeIcon = (newValue: string) => {
    setSwitchTitle(newValue)
    setDisableIcon(true)
    addToFavorite(
        newValue,
        film.id,
        location.pathname !== '/favorite' ? 'change' : 'remove'
    );


    setTimeout(() => {
      setDisableIcon(false)
    }, location.pathname !== '/favorite' ? 500 : 1000)

  }

  const generateData = () => {
    return moment(film.release_date).format('DD.MM.YYYY')
  }

  return (
      <div className="single-img">
        <img
            className="image"
            src={`${process.env.REACT_APP_API_PATH_IMAGE}/${film.poster_path}`}
            alt="not found"/>

        <Tooltip title={location.pathname !== '/favorite' ? !switchTitle ?
            t(('t.add.favorite')) : t(('t.remove.favorite')) : t(('t.remove.favorite'))}>
          <RatingStyled
              disabled={disableIcon}
              max={1}
              icon={
                location.pathname !== '/favorite' ?
                    <FavoriteIcon fontSize="inherit"/> :
                    <DeleteIcon style={{opacity: 0.55}} fontSize="inherit"/>
              }
              onChange={(event: any, newValue: string) => changeIcon(newValue)}
              emptyIcon={
                location.pathname !== '/favorite' ?
                    <FavoriteIcon style={{opacity: 0.55}} fontSize="inherit"/> :
                    <DeleteIcon style={{opacity: 0.55}} fontSize="inherit"/>
              }
          />
        </Tooltip>

        <LinkItem className="img-overlay" to={`/movie/${film.id}`} target="_blank">
          <DescriptionStyled>
            <p className="text">{film.title}</p>
            <p className="year">{generateData()}</p>

            <GenresStyled>
              {getGenre(film).map((item: number, idx: number) => (<GenreStyled key={idx}>{item}</GenreStyled>))}
            </GenresStyled>

            <RatingInfoStyled>
              <Rating
                  name="text-feedback"
                  value={film.vote_average}
                  readOnly
                  max={10}
                  precision={0.1}
                  emptyIcon={
                    <StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
              />
              <GenreStyled> {Number(film.vote_average?.toFixed(1))} / 10</GenreStyled>
            </RatingInfoStyled>
            <TextStyled>
              {film.overview.substring(0, 120) + '...'}
            </TextStyled>
          </DescriptionStyled>
        </LinkItem>
      </div>
  );
}

export default CardMovie;
