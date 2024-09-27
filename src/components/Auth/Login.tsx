import React, {FC, useState} from 'react';
import Form from "./Form";

import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../redux/userInfo/slice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/store";

const Login: FC = () => {
    const [error, setError] = useState('')
    const [errBool, setErrBool] = useState(false)

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleLogin = (email: string, password: string, name: string) => {
        const auth = getAuth()
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
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
            .catch((error) => {
                setError(error.message)
                setErrBool(true)
                setLoading(false)
            })
    }

    return (
        <Form
            title="Sign in"
            loading={loading}
            error={error}
            errBool={errBool}
            setErrBool={()=> setErrBool(false)}
            handleClick={handleLogin}
        />
    );
};

export default Login;
