import React, {useState} from 'react';
import Form from "./Form";

import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../redux/userInfo/slice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/store";

const Registration = () => {
    const [error, setError] = useState('')
    const [errBool, setErrBool] = useState(false)

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleRegister = (email: string, password: string, name: string) => {
        const auth = getAuth()
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result: any) => {
                dispatch(setUser({
                    name,
                    email: result.user.email,
                    id: result.user.uid,
                    token: result.user.accessToken
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
