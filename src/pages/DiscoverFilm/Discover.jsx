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

const DiscoverPage = () => {
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

    const query = useQuery({
        page,
        language: localStorage.getItem('lang')
    })

    const handleChangeGenre = (event) => {
        const {target: {value}} = event;
        setGenreName(
            typeof value === 'string' ? value.split(',') : value,
        );
        getDiscoverFilms({
            ...query,
            page: 1,
            with_genres: value.join(','),
            primary_release_year: yearLabel,
            sort_by: sortLabel,
        })
        handlePage(1)
    };

    const handleChangeYear = (event) => {
        const {target: {value}} = event;
        setYearLabel(value);
        getDiscoverFilms({
            ...query,
            page: 1,
            primary_release_year: value,
            with_genres: genreName.join(','),
            sort_by: sortLabel
        })
        handlePage(1)
    };

    const handleChangeSort = (event) => {
        const {target: {value}} = event;
        setSortLabel(value);
        getDiscoverFilms({
            ...query,
            page: 1,
            sort_by: value,
            primary_release_year: yearLabel,
            with_genres: genreName.join(',')
        })
        handlePage(1)
    };

    const clearFilters = () => {
        handlePage(1)
        setGenreName([])
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
                                genres={genres}
                                genreName={genreName}
                                handleChange={handleChangeGenre}
                            />
                            <SelectYears
                                yearLabel={yearLabel}
                                handleChange={handleChangeYear}
                            />
                            <SelectSort
                                sortLabel={sortLabel}
                                handleChange={handleChangeSort}
                            />
                            <ButtonStyled variant="contained"
                                          onClick={() => clearFilters()}>
                                clear
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
