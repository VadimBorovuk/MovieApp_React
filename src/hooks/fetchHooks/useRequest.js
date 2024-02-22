import {useEffect, useState} from "react";

export default function useRequest(url, query) {
    // console.log(query)
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    useEffect(() => {
        setLoading('loading')
        if ((url + query).includes('_limit')) {
            fetchData()
            setError('')
            setLoading('')
        } else {
            setError('some bags with query')
            setLoading('')
        }
    }, [query])

    const fetchData = (page) => {

        fetch(url + query)
            .then(response => response.json())
            .then(json => setData(json))
            .catch((e) =>{
                setData([])
                setError('some bags with api')
                setLoading('loading...')
            })
    }


    return [data, error, loading]
}