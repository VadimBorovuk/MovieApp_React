import React, {useEffect, useMemo} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {fetchFilms} from "../../store/slices/filmsPopularSlice";
import Pagination from "../../components/Pagination";
import usePagination from "../../hooks/fetchHooks/usePagination";

const LinkItem = styled.span`
    margin-left: 10px;
    text-decoration: underline;
    font-size: 16px;
`

const Films = () => {

    const [page, handlePage] = usePagination(1)

    const handlePagination = (page, count) => {
        if (!count) {
            handlePage(page)
        } else {
            if (count === 'prev') {
                handlePage(page, -1)
            } else {
                handlePage(page, 1)
            }
        }
        setTimeout(() => {
        }, 200)
    }

    const {films, loading, error} = useSelector(state => state.sliceFilms)
    const dispatch = useDispatch()

    const pages = useMemo(() => {
        return Array.from({length: 200 / 20}, (_, index) => index + 1)
    }, [films])

    useEffect(()=>{
        dispatch(fetchFilms(page))
        console.log('films', page)
    },[page])
    return (
        <div>
            <h1>Films catalog</h1>
            <div>
                {error ? error : <div>
                    {loading ? 'Loading...' : <div>
                        <Pagination
                            count={200 / 20}
                            page={page}
                            pages={pages}
                            handlePagination={handlePagination}
                        />
                        <h2>page {films.page}</h2>
                        {films.results.map(film => {
                            return <LinkItem key={film.id}>
                                <img
                                    style={{height: 200, width: 200}}
                                    src={`${process.env.REACT_APP_API_PATH_IMAGE}/${film.poster_path}`} alt="not found image"/>
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