import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {removeUser} from "../../store/slices/userSlice";

export function useAuth() {
    const dispatch = useDispatch()
    const {email, id, token} = useSelector(state => state.sliceUser)
    const location = useLocation();

    useEffect(() => {
        const checkTokenExpiration = () => {
            const tokenExpiration = localStorage.getItem('tokenExpiration');
            if (!tokenExpiration) return;

            const now = new Date();
            const expirationTime = new Date(tokenExpiration);
            const isExpired = now > expirationTime;

            if (isExpired) {
                dispatch(removeUser())
            }
        };

        if (email !== 'admin.admin@gmail.com') {
            checkTokenExpiration();
        }

    }, [location.pathname]);

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}
