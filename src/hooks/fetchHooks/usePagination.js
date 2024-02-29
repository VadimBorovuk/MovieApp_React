import {useCallback, useState} from "react";

export default function usePagination(current) {

    const [page, setPage] = useState(current)

    const handlePage = useCallback((page) => {
        setPage(page)
    }, [])

    return [page, handlePage]
}