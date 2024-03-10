import {useSelector} from "react-redux";

export function useAuth() {
    const {email, id, token} = useSelector(state => state.sliceUser)

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}