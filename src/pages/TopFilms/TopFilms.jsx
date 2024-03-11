import React, {Suspense, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTopFilms} from "../../store/slices/filmsListSlice";
import usePagination from "../../hooks/fetchHooks/usePagination";
import useQuery from "../../hooks/fetchHooks/useQuery";
import {Backdrop, CircularProgress} from "@mui/material";
import View from "../../components/FilmsView/View";

const TopFilmsPage = () => {
    const [loader, setLoader] = useState(true)

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

    useEffect(() => {
        if(query){
            dispatch(fetchTopFilms(query))
        }

        setTimeout(() => {
            setLoader(false)
        }, 500)
        setLoader(true)
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
                    {error ? error : <div>
                        {loading ? <>loading...</> : <div className="content">
                            <View
                                page={page}
                                pages={pages}
                                handlePagination={handlePagination}
                                films={films}
                            />
                        </div>
                        }
                    </div>
                    }
                </div>

            </Suspense>
        </div>
    );
};

export default TopFilmsPage