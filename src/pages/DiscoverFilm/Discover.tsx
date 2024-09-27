import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import useQuery from "../../hooks/fetchHooks/useQuery";

import {Alert, Backdrop, CircularProgress, Snackbar} from "@mui/material";
import View from "../../components/FilmsView/View";
import {ContentBlock, ContentDiscover, MainDiscover} from "./styled";
import {useTranslation} from "react-i18next";
import {useSearchParams} from "react-router-dom";
import Filters from "../../components/FilmsView/Filters";
import {useAppDispatch} from "../../redux/store";
import {fetchDiscoverMovies} from "../../redux/discoverMovies/asyncActions";
import {selectDiscoverMovies} from "../../redux/discoverMovies/selectors";
import {selectGenreLists} from "../../redux/genreList/selectors";

import {FilterSliceState} from "../../redux/filter/types";
import {SelectChangeEvent} from "@mui/material/Select";

const DiscoverPage = () => {
  const {t} = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const queryPage = searchParams.get('page')
  const queryYear = searchParams.get('primary_release_year')
  const queryGenre = searchParams.get('with_genres')
  const querySort = searchParams.get('sort_by')

  const [filtersCopy, setFiltersCopy] = useState<boolean>(false)
  const [errEmptyFilters, setErrEmptyFilters] = useState<boolean>(false)

  const [genreLabel, setGenreLabel] = useState<number[]>([]);
  const [yearLabel, setYearLabel] = useState<string>('');
  const [sortLabel, setSortLabel] = useState<string>('');
  const [page, handlePage] = useState<number>(1)

  const [query, setQueryData] = useState({})

  const {genres} = useSelector(selectGenreLists)

  const {loading, movies} = useSelector(selectDiscoverMovies)
  const dispatch = useAppDispatch()


  const queryData = useQuery(queryPage ? {
    page: queryPage,
    with_genres: queryGenre,
    primary_release_year: queryYear,
    sort_by: querySort,
    language: localStorage.getItem('lang')
  } : {
    page,
    language: localStorage.getItem('lang')
  })

  const handleChangeGenre = (event: SelectChangeEvent<number[]>) => {
    // SelectChangeEvent<number[] | string>
    const {target: {value}} = event;
    setGenreLabel(value as number[])
    // setGenreLabel(
    //     typeof value === 'string' ? value.split(',') : value,
    // );
  };

  const handleChangeYear = (event: SelectChangeEvent<string>) => {
    const {target: {value}} = event;
    setYearLabel(value);
  };

  const handleChangeSort = (event: SelectChangeEvent<string>) => {
    const {target: {value}} = event;
    setSortLabel(value);
  };


  const handlePagination = (page: number) => {
    handlePage(page)
    let queryData = {
      language: localStorage.getItem('lang') || 'en',
      page,
      with_genres: genreLabel.join(','),
      primary_release_year: yearLabel,
      sort_by: sortLabel
    }
    getDiscoverFilms(queryData)
    setSearchParams(queryData as any)
  }

  const showFilters = () => {
    if (!!genreLabel.length || (!!yearLabel.length || yearLabel) || !!sortLabel.length) {
      let queryData: FilterSliceState = {
        language: localStorage.getItem('lang') || 'en',
        page: 1
      }
      if(!!genreLabel.length){
        queryData.with_genres = genreLabel.join(',')
      }
      if(yearLabel){
        queryData.primary_release_year = yearLabel
      }
      if(sortLabel){
        queryData.sort_by = sortLabel
      }

      getDiscoverFilms(queryData)
      setSearchParams(queryData as any)
      handlePage(1)
      setErrEmptyFilters(false)
    } else {
      setErrEmptyFilters(true)
    }
  }

  const clearFilters = () => {
    handlePage(1)
    setGenreLabel([])
    setSearchParams({})
    setYearLabel('')
    setSortLabel('')

    getDiscoverFilms({
      page: 1,
      language: localStorage.getItem('lang') || 'en'
    })
  }

  const loadQueryParams = () => {
    if (queryGenre !== null) {
      setGenreLabel(queryGenre.split(',').map(g => +g))
    }
    if (queryYear !== null) {
      setYearLabel(queryYear)
    }
    if (querySort !== null) {
      setSortLabel(querySort)
    }
  }

  const getDiscoverFilms = (params: FilterSliceState) => {
    if (params) {
      dispatch(fetchDiscoverMovies(params))
    }
  }

  useEffect(() => {
    loadQueryParams()
    if (!!Object.keys(query).length){
      getDiscoverFilms(query)
    }
  }, [query])

  useEffect(() => {
    if (!!Object.keys(queryData).length){
      setQueryData(queryData)
    }

  }, [queryData]);


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
                    setFiltersCopy={setFiltersCopy}
                    filtersCopy={filtersCopy}
                />

                <View
                    title="discover"
                    page={Number(searchParams.get('page')) || page}
                    genres={genres}
                    handlePagination={handlePagination}
                    films={movies}
                />
              </ContentBlock>
          }
        </ContentDiscover>

        <Snackbar
            open={filtersCopy}
            autoHideDuration={2000}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            onClose={() => setFiltersCopy(false)}>
          <Alert
              onClose={() => setFiltersCopy(false)}
              severity={'success'}
              variant="filled"
              sx={{width: '100%'}}
          >
            {t('t.tip.copy.filters')}
          </Alert>
        </Snackbar>

        <Snackbar
            open={errEmptyFilters}
            autoHideDuration={3000}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            onClose={() => setErrEmptyFilters(false)}>
          <Alert
              onClose={() => setErrEmptyFilters(false)}
              severity={'error'}
              variant="filled"
              sx={{width: '100%'}}
          >
            {t('t.err.empty.filters')}
          </Alert>
        </Snackbar>
      </MainDiscover>
  );
};

export default DiscoverPage
