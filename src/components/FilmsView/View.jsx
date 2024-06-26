import React, {useState} from 'react';
import {Alert, Grid, Snackbar} from "@mui/material";
import Pagination from "../Pagination";
import {useDispatch} from "react-redux";
import {AddFavoriteFilms, fetchFavoriteFilms} from "../../store/slices/filmsFavoriteSlice";
import CardMovie from "./CardMovie";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const View = ({films, page, pages, handlePagination, genres}) => {
    const [switchTitle, setSwitchTitle] = useState('')
    const {t} = useTranslation();
    const location = useLocation()
    const [message, setMessage] = useState(false)

    const dispatch = useDispatch()

    const addToFavorite = (data, id, status) => {
        dispatch(AddFavoriteFilms({
            "media_type": "movie",
            "media_id": id,
            "favorite": status === 'change' ? !!data : false
        }))
        setMessage(true)
        setTimeout(() => {
            dispatch(fetchFavoriteFilms({page: 1, language: localStorage.getItem('lang')}))
        }, 800)
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
                +films.total_results < 20 ? <></> : <Pagination
                    count={+films.total_pages}
                    page={page}
                    pages={pages}
                    handlePagination={handlePagination}
                />
            }
        </div>
    )
};

export default View;
