import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const addFilm = () => {
        // if (name.length) {
        //     dispatch({
        //         type: ADD_FILM,
        //         payload: {
        //             id: Date.now(),
        //             name
        //         }
        //     })
        //     navigate('/films')
        //     setName('')
        // }

    }

    useEffect(() => {
        console.log('env', process.env.REACT_APP_SECRET_NAME)
    }, []);

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={addFilm}>add</button>
        </div>
    );
};

export default Home;