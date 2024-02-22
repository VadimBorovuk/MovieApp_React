import {useEffect, useState} from "react";

export default function useQuery(queryData){
    const [query, setQuery] = useState('')

    useEffect(() => {
        setQuery(new URLSearchParams(queryData))
    }, [queryData._page]);

    return query
}