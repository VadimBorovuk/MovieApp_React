import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {removeUser} from "../../redux/slices_old_js/userSlice";
import {selectUserInfo} from "../../redux/userInfo/selectors";
import {useAppDispatch} from "../../redux/store";

export function useAuth() {
    const {email, id, token} = useSelector(selectUserInfo)
    const location = useLocation();
    const dispatch = useAppDispatch()

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
