import React, {useMemo, useRef} from 'react';
import useRequest from "../hooks/fetchHooks/useRequest";
import usePagination from "../hooks/fetchHooks/usePagination";
import useQuery from "../hooks/fetchHooks/useQuery";
import useLoader from "../hooks/fetchHooks/useLoader";
import Todos from "./Todos";
import Pagination from "./Todos/Pagination";

const ComponentFetching = () => {
    const limit = 200
    const pageLimit = 3
    const count = Math.round(limit / pageLimit)

    const [page, handlePage] = usePagination(1)
    const query = useQuery({_page: page, _limit: pageLimit})
    const [loader, handlePreloader] = useLoader()

    const [todos, error, loading] = useRequest('https://jsonplaceholder.typicode.com/todos?', query)

    const handlePagination = (page, count) => {
        handlePreloader(true)
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
            handlePreloader(false)
        }, 200)
    }

    const pages = useMemo(() => {
        return Array.from({length: count}, (_, index) => index + 1)
    }, [todos])

    return (
        <div style={{background: loader ? 'rgba(0,0,0, .8)' : '', padding: 25}}>
            <p style={{fontSize: "30px", padding: "15px 0", margin: 0}}>
                useHooks: Pagination, Query, Request, Loader
            </p>
            <Pagination
                count={count}
                page={page}
                pages={pages}
                handlePagination={handlePagination}
            />
            {loading}
            {error}
            <Todos todos={todos}/>

        </div>
    );
};

export default ComponentFetching;