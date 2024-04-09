import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    lang: localStorage.getItem('lang') || 'en',
    email: localStorage.getItem('user_email') || null,
    token: localStorage.getItem('user_token') || null,
    id: localStorage.getItem('user_id') || null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;

            if (!localStorage.getItem('user_email')) {

                const tokenExpiration = new Date();
                tokenExpiration.setHours(tokenExpiration.getHours() + 24);
                localStorage.setItem('tokenExpiration', tokenExpiration.toString());
                localStorage.setItem('lang', 'en')
                localStorage.setItem('user_token', action.payload.token)
                localStorage.setItem('user_email', action.payload.email)
                localStorage.setItem('user_name', action.payload.name)
                localStorage.setItem('user_id', action.payload.id)
            }
        },
        removeUser(state) {
            state.name = null;
            state.email = null;
            state.token = null;
            state.id = null;

            if (localStorage.getItem('user_email')) {
                localStorage.removeItem('lang')
                localStorage.removeItem('user_email')
                localStorage.removeItem('currentAvatar')
                localStorage.removeItem('tokenExpiration')
                localStorage.removeItem('user_name')
                localStorage.removeItem('user_token')
                localStorage.removeItem('user_id')
            }
        }
    }
})
export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer
