import {useEffect, useState} from "react";

export default function useQuery(queryData: any) {
    const [query, setQueryData] = useState('')

    useEffect(() => {
        setQueryData(queryData)
    }, [queryData.query]);

    return query
}
