import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchDiscoverFilms} from "../../store/slices/filmsListSlice";

import usePagination from "../../hooks/fetchHooks/usePagination";
import useQuery from "../../hooks/fetchHooks/useQuery";

import {Backdrop, CircularProgress} from "@mui/material";
import View from "../../components/FilmsView/View";
import {ContentBlock, ContentDiscover, MainDiscover} from "./styled";
import {useTranslation} from "react-i18next";
import {useSearchParams} from "react-router-dom";
import Filters from "../../components/FilmsView/Filters";

const DiscoverPage = () => {
    const [genreLabel, setGenreLabel] = useState([]);
    const [yearLabel, setYearLabel] = useState([]);
    const [sortLabel, setSortLabel] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const {t} = useTranslation();
    const [page, handlePage] = usePagination(1)

    const {genres} = useSelector(state => state.sliceGenreList)
    const {films, loading} = useSelector(state => state.sliceFilms)
    const dispatch = useDispatch()

    const pages = useMemo(() => {
        return Array.from({length: films.total_pages}, (_, index) => index + 1)
    }, [films])


    const query = useQuery(searchParams.get('page') ? {
        page: searchParams.get('page'),
        with_genres: searchParams.get('with_genres'),
        primary_release_year: searchParams.get('primary_release_year'),
        sort_by: searchParams.get('sort_by'),
        language: localStorage.getItem('lang')
    } : {
        page,
        language: localStorage.getItem('lang')
    })

    const handleChangeGenre = (event) => {
        const {target: {value}} = event;
        setGenreLabel(
            typeof value === 'string' ? value.split(',') : value,
        );
        // getDiscoverFilms({
        //     ...query,
        //     page: 1,
        //     with_genres: value.join(','),
        //     primary_release_year: yearLabel,
        //     sort_by: sortLabel,
        // })
    };

    const handleChangeYear = (event) => {
        const {target: {value}} = event;
        setYearLabel(value);
    };

    const handleChangeSort = (event) => {
        const {target: {value}} = event;
        setSortLabel(value);
    };


    const handlePagination = (page) => {
        handlePage(page)
        let queryData = {
            ...query,
            page,
            with_genres: genreLabel.join(','),
            primary_release_year: yearLabel,
            sort_by: sortLabel
        }
        getDiscoverFilms(queryData)
        setSearchParams(queryData)
    }

    const showFilters = () => {
        let queryData = {
            ...query,
            page: 1,
            with_genres: genreLabel.join(','),
            primary_release_year: yearLabel,
            sort_by: sortLabel,
        }
        getDiscoverFilms(queryData)
        setSearchParams(queryData)
        handlePage(1)
    }

    const clearFilters = () => {
        handlePage(1)
        setGenreLabel([])
        setSearchParams({})
        setYearLabel('')
        setSortLabel('')

        getDiscoverFilms({
            page: 1,
            language: localStorage.getItem('lang')
        })
    }

    const loadQueryParams = () => {
        if (searchParams.get('with_genres')) {
            setGenreLabel(searchParams.get('with_genres').split(',').map(g => +g))
        }
        if (searchParams.get('primary_release_year')) {
            setYearLabel(searchParams.get('primary_release_year'))
        }
        if (searchParams.get('sort_by')) {
            setSortLabel(searchParams.get('sort_by'))
        }
    }

    const getDiscoverFilms = useCallback((params) => {
        if (params) {
            dispatch(fetchDiscoverFilms(params))
        }
    }, [])

    useEffect(() => {
        loadQueryParams()
        getDiscoverFilms(query)
    }, [query])


    return (
        <MainDiscover>
            <ContentDiscover>
                {loading ? <Backdrop
                        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                        open={true}
                    >
                        <CircularProgress color="inherit"/>
                    </Backdrop> :
                    <ContentBlock maxWidth="xl">

                        <Filters
                            t={t}
                            genres={genres}
                            genreLabel={genreLabel}
                            yearLabel={yearLabel}
                            sortLabel={sortLabel}
                            handleChangeGenre={handleChangeGenre}
                            handleChangeYear={handleChangeYear}
                            handleChangeSort={handleChangeSort}
                            showFilters={showFilters}
                            clearFilters={clearFilters}
                        />

                        <View
                            title="discover"
                            page={+searchParams.get('page') || page}
                            pages={pages}
                            genres={genres}
                            handlePagination={handlePagination}
                            films={films}
                        />
                    </ContentBlock>
                }
            </ContentDiscover>

        </MainDiscover>
    );
};

export default DiscoverPage
