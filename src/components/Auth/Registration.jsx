import React from 'react';
import {useDispatch} from "react-redux";
import Form from "./Form";

import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../store/slices/userSlice";
import {useNavigate} from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRegister = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <div>
            <Form
                title="Sign up"
                handleClick={handleRegister}
            />
        </div>
    );
};

export default Registration;