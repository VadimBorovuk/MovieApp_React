import {useCallback, useState} from "react";

export default function usePagination(current: number) {

    const [page, setPage] = useState(current)

    const handlePage = useCallback((page: number) => {
        setPage(page)
    }, [])

    return [page, handlePage]
}
