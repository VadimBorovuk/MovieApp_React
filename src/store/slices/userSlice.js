import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: localStorage.getItem('user_email') || null,
    token: localStorage.getItem('user_token') || null,
    id: localStorage.getItem('user_id') || null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            // popo@popo.po popopopo
            if (!localStorage.getItem('user_email')) {
                localStorage.setItem('user_email', action.payload.email)
                localStorage.setItem('user_token', action.payload.token)
                localStorage.setItem('user_id', action.payload.id)
            }
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;

            if (localStorage.getItem('user_email')) {
                localStorage.removeItem('user_email')
                localStorage.removeItem('user_token')
                localStorage.removeItem('user_id')
            }
        }
    }
})
export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer