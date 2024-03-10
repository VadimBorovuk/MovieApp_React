import React, {useEffect} from 'react';
import {Container, Grid} from "@mui/material";
import styled from "styled-components";
import Pagination from "../Pagination";
import {useDispatch, useSelector} from "react-redux";
import {AddFavoriteFilms} from "../../store/slices/filmsFavoriteSlice";
import CardMovie from "./CardMovie";
import {fetchGenres} from "../../store/slices/genreListSlice";

const ContentBlock = styled(Container)`
    border-radius: 25px;
    padding: 25px 0;
    background-color: #354160;
`

const View = ({title, films, page, pages, handlePagination}) => {
    const {genres, loading, error} = useSelector(state => state.sliceGenreList)

    const dispatch = useDispatch()

    const addToFavorite = (data, id) => {
        dispatch(AddFavoriteFilms({
            "media_type": "movie",
            "media_id": id,
            "favorite": !!data
        }))
    }


    const clearAll = () => {
        films.results.forEach(film => {
            dispatch(AddFavoriteFilms({
                "media_type": "movie",
                "media_id": film.id,
                "favorite": false
            }))
        })
    }

    useEffect(() => {
        dispatch(fetchGenres())
    }, []);

    return (
        <ContentBlock maxWidth="xl">
            {
                +films.total_results < 20 ? <></> : <Pagination
                    count={+films.total_pages}
                    page={page}
                    pages={pages}
                    handlePagination={handlePagination}
                />
            }

            {
                title === 'favorite' ?
                    <button onClick={() => clearAll()}>
                        clear all
                    </button>
                    : ''
            }

            <Grid container spacing={2}>
                {films && films.results.map(film => {
                    return <Grid item xs={12} sm={6} md={4} lg={3} key={film.id}>
                        <CardMovie
                            addToFavorite={addToFavorite}
                            genres={genres}
                            film={film}
                            title={title}
                        />
                    </Grid>
                })}
            </Grid>
        </ContentBlock>
    )
};

export default View;