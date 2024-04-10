import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchDiscoverFilms} from "../../store/slices/filmsListSlice";

import usePagination from "../../hooks/fetchHooks/usePagination";
import useQuery from "../../hooks/fetchHooks/useQuery";

import {Backdrop, CircularProgress} from "@mui/material";
import View from "../../components/FilmsView/View";
import SelectGenres from "../../components/UI/Select/SelectGenres";
import SelectYears from "../../components/UI/Select/SelectYears";
import SelectSort from "../../components/UI/Select/SelectSort";
import {ButtonStyled, ContentBlock, ContentDiscover, FiltersStyled, MainDiscover} from "./styled";
import {useTranslation} from "react-i18next";
import {useSearchParams} from "react-router-dom";

const DiscoverPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {t} = useTranslation();

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
    const [sortLabel, setSortLabel] = useState([]);

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

    const showFilters = () => {
        let queryData = {
            ...query,
            page: 1,
            with_genres: genreName.join(','),
            primary_release_year: yearLabel,
            sort_by: sortLabel,
        }
        getDiscoverFilms(queryData)
        setSearchParams(queryData)
        handlePage(1)
    }

    const handleChangeGenre = (event) => {
        const {target: {value}} = event;
        setGenreName(
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

    const clearFilters = () => {
        handlePage(1)
        setGenreName([])
        setSearchParams({})
        setYearLabel(null)
        setSortLabel(null)

        getDiscoverFilms(query)
    }

    const handlePagination = (page) => {
        handlePage(page)
        getDiscoverFilms({
            ...query,
            page,
            with_genres: genreName.join(','),
            primary_release_year: yearLabel,
            sort_by: sortLabel
        })
    }

    const getDiscoverFilms = useCallback((params) => {
        if (params) {
            dispatch(fetchDiscoverFilms(params))
        }
    }, [])

    useEffect(() => {
        if(searchParams.get('with_genres')){
            setGenreName([searchParams.get('with_genres')])
        }
        if(searchParams.get('primary_release_year')){
            setYearLabel([searchParams.get('primary_release_year')])
        }
        if(searchParams.get('sort_by')){
            setSortLabel([searchParams.get('sort_by')])
        }
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
                        <FiltersStyled>
                            <SelectGenres
                                t={t}
                                genres={genres}
                                genreName={genreName}
                                handleChange={handleChangeGenre}
                            />
                            <SelectYears
                                t={t}
                                yearLabel={yearLabel}
                                handleChange={handleChangeYear}
                            />
                            <SelectSort
                                t={t}
                                sortLabel={sortLabel}
                                handleChange={handleChangeSort}
                            />
                            <ButtonStyled variant="contained"
                                          color="success"
                                          onClick={() => showFilters()}>
                                {t('t.filters.show')}
                            </ButtonStyled>

                            <ButtonStyled variant="contained"
                                          color="error"
                                          onClick={() => clearFilters()}>
                                {t('t.filters.clear')}
                            </ButtonStyled>
                        </FiltersStyled>

                        <View
                            title="discover"
                            page={page}
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
