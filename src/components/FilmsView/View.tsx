import React, {FC, useState} from 'react';
import {Alert, Grid, Snackbar} from "@mui/material";
import Pagination from "../Pagination/Pagination";
import CardMovie from "./CardMovie";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {MoviesResultsProps} from "../../redux/discoverMovies/types";
import {AddFavoriteMovie, fetchFavoriteMovies} from "../../redux/favoriteMovies/asyncActions";
import {useAppDispatch} from "../../redux/store";

export type GenresProps = {
  id: number
  name: string
}

interface ViewProps {
  title: string
  films: MoviesResultsProps
  page: number
  handlePagination: (page: number) => void
  genres: GenresProps[]
}


const View: FC<ViewProps> = ({title, films, page, handlePagination, genres}) => {
  const [switchTitle, setSwitchTitle] = useState('')
  const {t} = useTranslation();
  const location = useLocation()
  const [message, setMessage] = useState(false)

  const dispatch = useAppDispatch()

  const addToFavorite = (data: string, id: number, status: string) => {
    dispatch(AddFavoriteMovie({
      "media_type": "movie",
      "media_id": id,
      "favorite": status === 'change' ? !!data : false
    }))
    setMessage(true)
    if (title === 'favorite'){
      setTimeout(() => {
        dispatch(fetchFavoriteMovies({page: 1, language: localStorage.getItem('lang') || 'en'}))
      }, 800)
    }
  }

  return (
      <div>
        <Snackbar
            open={message}
            autoHideDuration={800}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            onClose={() => setMessage(false)}>
          <Alert
              onClose={() => setMessage(false)}
              severity={location.pathname !== '/favorite' ? !switchTitle ? 'error' : 'success' : 'error'}
              variant="filled"
              sx={{width: '100%'}}
          >
            {
              location.pathname !== '/favorite' ? !switchTitle ?
                  t(('t.message.remove.favorite')) : t(('t.message.add.favorite')) : t(('t.message.remove.favorite'))
            }
          </Alert>
        </Snackbar>

        <Grid container spacing={2}>
          {films && films.results.map(film => {
            return <Grid item xs={12} sm={6} md={4} lg={3} key={film.id}>
              <CardMovie
                  t={t}
                  setSwitchTitle={setSwitchTitle}
                  addToFavorite={addToFavorite}
                  switchTitle={switchTitle}
                  genres={genres}
                  film={film}
              />
            </Grid>
          })}
        </Grid>

        {
            +films.total_results > 20 && <Pagination
                count={+films.total_pages}
                page={page}
                handlePagination={handlePagination}
            />
        }
      </div>
  )
};

export default View;
