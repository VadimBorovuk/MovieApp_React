import React, { useCallback, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import usePagination from "../../hooks/fetchHooks/usePagination";
import useQuery from "../../hooks/fetchHooks/useQuery";
import {Backdrop, CircularProgress} from "@mui/material";
import View from "../../components/FilmsView/View";
import {fetchFavoriteFilms} from "../../store/slices/filmsFavoriteSlice";
import {ContentBlock, ContentFavorite, MainFavorite} from "./style";

const FavoritePage = () => {
    const {genres} = useSelector(state => state.sliceGenreList)
    const {films, loading} = useSelector(state => state.sliceFavoriteFilms)
    const dispatch = useDispatch()

    // const count = 300 / 20
    const [page, handlePage] = usePagination(1)
    const pages = useMemo(() => {
        return Array.from({length: films.total_pages}, (_, index) => index + 1)
    }, [films])

    const query = useQuery({
        page, language: localStorage.getItem('lang')
    })

    const handlePagination = (page) => {
        handlePage(page)
        getFavoriteFilms({
            ...query,
            page
        })
    }

    const getFavoriteFilms = useCallback((params) => {
        if (params) {
            dispatch(fetchFavoriteFilms(params))
        }
    }, [])

    useEffect(() => {
        getFavoriteFilms(query)
    }, [query])

    return (
        <MainFavorite>

            <ContentFavorite>
                {loading ?  <Backdrop
                        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                        open={true}
                    >
                        <CircularProgress color="inherit"/>
                    </Backdrop> :
                    <ContentBlock maxWidth="xl">
                        <View
                            page={page}
                            pages={pages}
                            genres={genres}
                            handlePagination={handlePagination}
                            films={films}
                        />
                    </ContentBlock>
                }
            </ContentFavorite>

        </MainFavorite>
    );
};

export default FavoritePage
