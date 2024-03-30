import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import Form from "./Form";

import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../store/slices/userSlice";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = (email, password, name) => {
        const auth = getAuth()
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
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
            .catch((error) => {
                setLoading(false)
                console.log(error.message)
            })
    }

    return (
        <Form
            title="Sign in"
            loading={loading}
            handleClick={handleLogin}
        />
    );
};

export default Login;
