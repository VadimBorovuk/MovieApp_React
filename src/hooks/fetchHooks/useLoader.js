import {useState} from "react";

export default function useLoader() {

    const [load, setLoad] = useState(false)

    const handleLoader = (bool) => {
        setLoad(bool)
    }

    return [load, handleLoader]

}