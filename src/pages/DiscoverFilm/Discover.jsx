import React, {Suspense, useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchDiscoverFilms} from "../../store/slices/filmsListSlice";
import usePagination from "../../hooks/fetchHooks/usePagination";
import useQuery from "../../hooks/fetchHooks/useQuery";
import {Backdrop, CircularProgress, Container} from "@mui/material";
import View from "../../components/FilmsView/View";
import SelectGenres from "../../components/UI/SelectGenres";
import styled from "styled-components";
import SelectYears from "../../components/UI/SelectYears";

const ContentBlock = styled(Container)`
    border-radius: 25px;
    width: 100%;
    padding: 25px 0;
    background-color: #354160;
`

const DiscoverPage = () => {
    const [loader, setLoader] = useState(true)
    const {genres} = useSelector(state => state.sliceGenreList)
    const {films, loading} = useSelector(state => state.sliceFilms)
    const dispatch = useDispatch()

    // const count = 300 / 20
    const [page, handlePage] = usePagination(1)
    const pages = useMemo(() => {
        return Array.from({length: films.total_pages}, (_, index) => index + 1)
    }, [films])

    const [genreName, setGenreName] = useState([]);
    const [yearLabel, setYearLabel] = useState([]);

    const query = useQuery({
        page,
        with_genres: genreName.toString(),
        language: localStorage.getItem('lang'),
        sort_by: 'vote_count.desc',
        year: '2015,2016'
    })

    const handleChangeGenre = (event) => {
        const {target: { value }} = event;
        setGenreName(
            typeof value === 'string' ? value.split(',') : value,
        );
        getDiscoverFilms({
            ...query,
            with_genres: value.toString(),
            year: yearLabel.toString(),
        })
    };

    const handleChangeYear = (event) => {
        const {target: { value }} = event;
        setYearLabel(
            typeof value === 'string' ? value.split(',') : value,
        );
        getDiscoverFilms({
            ...query,
            year: value.toString(),
            with_genres: genreName.toString()
        })
    };

    const clearFilters = () => {
        setYearLabel([])
        setGenreName([])

        getDiscoverFilms(query)
    }

    const handlePagination = (page) => {
        handlePage(page)
    }

    const getDiscoverFilms = useCallback((params)=>{
        if (params) {
            dispatch(fetchDiscoverFilms(params))
            setTimeout(() => {
                setLoader(false)
            }, 500)
            setLoader(true)
        }
    }, [])

    useEffect(() => {

        getDiscoverFilms(query)

    }, [query])


    return (
        <div>
            <Suspense fallback={<>...</>}>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={loader}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>

                <div>
                    {loading ? <>loading...</> :
                        <ContentBlock maxWidth="xl">
                            <SelectGenres
                                genres={genres}
                                genreName={genreName}
                                handleChange={handleChangeGenre}
                            />
                            <SelectYears
                                yearLabel={yearLabel}
                                handleChange={handleChangeYear}
                            />
                            <button style={{
                                backgroundColor: 'blue',
                                padding: '10px 20px'
                            }} onClick={()=> clearFilters()}>clear</button>
                            <View
                                page={page}
                                pages={pages}
                                genres={genres}
                                handlePagination={handlePagination}
                                films={films}
                            />
                        </ContentBlock>

                    }
                </div>

            </Suspense>
        </div>
    );
};

export default DiscoverPage