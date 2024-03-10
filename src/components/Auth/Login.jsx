import React from 'react';
import {useDispatch} from "react-redux";
import Form from "./Form";

import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../store/slices/userSlice";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = (email, password) => {
        const auth = getAuth()

        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate('/')
            })
            .catch((error)=> alert(error.message))
    }

    return (
        <div>
            <Form
                title="Login Form"
                handleClick={handleLogin}
            />
        </div>
    );
};

export default Login;