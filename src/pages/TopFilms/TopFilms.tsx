import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Backdrop, CircularProgress} from "@mui/material";
import View from "../../components/FilmsView/View";
import {ContentBlock, ContentTop, MainTop} from "./style";
import {selectTopMovies} from "../../redux/topMovies/selectors";
import {selectGenreLists} from "../../redux/genreList/selectors";
import {fetchTopMovie} from "../../redux/topMovies/asyncActions";
import {useAppDispatch} from "../../redux/store";
import {FilterSliceState} from "../../redux/filter/types";


const TopFilmsPage = () => {
    const {genres} = useSelector(selectGenreLists)

    const {movies, loading} = useSelector(selectTopMovies)
    const dispatch = useAppDispatch()

    // const count = 300 / 20
    const [page, handlePage] = useState<number>(1)
    const [query, setQueryData] = useState<FilterSliceState>({
        page: 1,
        language: localStorage.getItem('lang')  ||'en'
    })

    const handlePagination = (page: number) => {
        handlePage(page)
        setQueryData({
            page,
            language: localStorage.getItem('lang')  ||'en'
        })
    }

    const getTopFilms = (params: FilterSliceState) =>{
        if (params) {
            dispatch(fetchTopMovie(params))
        }
    }

    useEffect(() => {
        getTopFilms(query)
    }, [query]);

    return (
        <MainTop>
            <ContentTop>
                {loading ? <Backdrop
                        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                        open={true}
                    >
                        <CircularProgress color="inherit"/>
                    </Backdrop> :
                    <ContentBlock maxWidth="xl">
                        <View
                            title="top"
                            page={page}
                            genres={genres}
                            handlePagination={handlePagination}
                            films={movies}
                        />
                    </ContentBlock>
                }

            </ContentTop>

        </MainTop>
    );
};

export default TopFilmsPage
