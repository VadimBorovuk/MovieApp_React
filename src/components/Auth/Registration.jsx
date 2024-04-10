import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import Form from "./Form";

import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../store/slices/userSlice";
import {useNavigate} from "react-router-dom";

const Registration = () => {
    const [error, setError] = useState('')
    const [errBool, setErrBool] = useState(false)

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRegister = (email, password, name) => {
        const auth = getAuth()
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    name,
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                setLoading(false)
                navigate('/')
            })

            .catch((error)=>{
                setError(error.message)
                setErrBool(true)
                setLoading(false)
            })
    }

    return (
        <Form
            title="Sign up"
            loading={loading}
            error={error}
            errBool={errBool}
            setErrBool={()=> setErrBool(false)}
            handleClick={handleRegister}
        />
    );
};

export default Registration;
