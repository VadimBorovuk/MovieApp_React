import React, {Suspense, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import usePagination from "../../hooks/fetchHooks/usePagination";
import useQuery from "../../hooks/fetchHooks/useQuery";
import {Backdrop, Box, CircularProgress} from "@mui/material";
import View from "../../components/FilmsView/View";
import {fetchFavoriteFilms} from "../../store/slices/filmsFavoriteSlice";


const FavoritePage = () => {
    const [loader, setLoader] = useState(true)

    const {films, loading, error} = useSelector(state => state.sliceFavoriteFilms)
    const dispatch = useDispatch()

    // const count = 300 / 20
    const [page, handlePage] = usePagination(1)
    const pages = useMemo(() => {
        return Array.from({length: films.total_pages}, (_, index) => index + 1)
    }, [films])

    const query = useQuery({page, language: localStorage.getItem('lang')})

    const handlePagination = (page) => {
        handlePage(page)
    }

    useEffect(() => {
        dispatch(fetchFavoriteFilms(query))
        setTimeout(() => {
            setLoader(false)
        }, 500)
        setLoader(true)
    }, [query])

    return (
        <div style={{width: '100%'}}>
            <Suspense fallback={<>...</>}>

                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={loader}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>

                <div>
                    {loading ? <>loading...</> :
                        <div className="content">
                            <View
                                title="favorite"
                                page={page}
                                pages={pages}
                                handlePagination={handlePagination}
                                films={films}
                            />
                        </div>
                    }
                </div>

            </Suspense>
        </div>
    );
};

export default FavoritePage