import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {fetchFilms, searchFilms} from "../../store/slices/filmsPopularSlice";
import Pagination from "../../components/Pagination";
import usePagination from "../../hooks/fetchHooks/usePagination";
import useQuery from "../../hooks/fetchHooks/useQuery";
import useDebounce from "../../hooks/fetchHooks/useDebounce";
import {useTranslation} from "react-i18next";

const LinkItem = styled.span`
    margin-left: 10px;
    text-decoration: underline;
    font-size: 16px;
`

const Films = () => {
    const {t, i18n} = useTranslation();
    const [searchFilm, setSearchFilm] = useState('')

    const debouncedSearchTerm = useDebounce(searchFilm, 500);

    const {films, loading, error} = useSelector(state => state.sliceFilms)
    const dispatch = useDispatch()

    // const count = 300 / 20
    const [page, handlePage] = usePagination(1)
    const pages = useMemo(() => {
        return Array.from({length: films.total_pages}, (_, index) => index + 1)
    }, [films])

    const query = useQuery({page})

    const handlePagination = (page) => {
        handlePage(page)
    }

    const changeLang = (lang) => {
        localStorage.setItem('lang', lang)
        i18n.changeLanguage(lang)
    }

    useEffect(() => {
        if (debouncedSearchTerm) {
            dispatch(searchFilms({
                page,
                query: debouncedSearchTerm,
                include_adult: false
            }))
        } else {
            dispatch(fetchFilms(query))
        }
    }, [debouncedSearchTerm]);

    useEffect(() => {
        dispatch(fetchFilms(query))
    }, [page, query])

    return (
        <div>
            <h1>{t('t.title')}</h1>
            <button onClick={() => changeLang('en')}>en</button>
            <button onClick={() => changeLang('uk')}>uk</button>
            <div>
                <input type="text" value={searchFilm} onChange={e => setSearchFilm(e.target.value)}/>

                {error ? error : <div>
                    {loading ? 'Loading...' : <div>
                        <Pagination
                            count={+films.total_pages}
                            page={page}
                            pages={pages}
                            handlePagination={handlePagination}
                        />
                        <h2>page {films.page}</h2>
                        {films.results.map(film => {
                            return <LinkItem key={film.id}>
                                <img
                                    style={{height: 200, width: 200}}
                                    src={`${process.env.REACT_APP_API_PATH_IMAGE}/${film.poster_path}`}
                                    alt="not found image"/>
                                <NavLink to={`${film.id}`}>{film.title}</NavLink>
                            </LinkItem>
                        })}
                    </div>
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default Films