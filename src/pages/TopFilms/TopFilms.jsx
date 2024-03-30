import React, {useCallback, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTopFilms} from "../../store/slices/filmsListSlice";
import usePagination from "../../hooks/fetchHooks/usePagination";
import useQuery from "../../hooks/fetchHooks/useQuery";
import {Backdrop, CircularProgress} from "@mui/material";
import View from "../../components/FilmsView/View";
import {ContentBlock, ContentTop, MainTop} from "./style";

const TopFilmsPage = () => {
    const {genres} = useSelector(state => state.sliceGenreList)

    const {films, loading} = useSelector(state => state.sliceFilms)
    const dispatch = useDispatch()

    // const count = 300 / 20
    const [page, handlePage] = usePagination(1)
    const pages = useMemo(() => {
        return Array.from({length: films.total_pages}, (_, index) => index + 1)
    }, [films])

    const query = useQuery({
        page,
        language: localStorage.getItem('lang')
    })

    const handlePagination = (page) => {
        handlePage(page)
        getTopFilms({
            ...query,
            page
        })
    }

    const getTopFilms = useCallback((params) => {
        if (params) {
            dispatch(fetchTopFilms(params))
        }
    }, [])


    useEffect(() => {
        getTopFilms(query)
    }, [query])

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
                            pages={pages}
                            genres={genres}
                            handlePagination={handlePagination}
                            films={films}
                        />
                    </ContentBlock>
                }

            </ContentTop>

        </MainTop>
    );
};

export default TopFilmsPage
