import { createSlice } from '@reduxjs/toolkit';
import { RootState } from "redux/store";

interface SetAuthenticatedAction {
    type: typeof setAuthenticated.type;
}

interface SetUnauthenticatedAction {
    type: typeof setUnauthenticated.type;
}

interface AuthState {
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state) => {
            state.isAuthenticated = true;
        },
        setUnauthenticated: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export const { setAuthenticated, setUnauthenticated } = authSlice.actions;

export type AuthActionTypes = SetAuthenticatedAction | SetUnauthenticatedAction;

export default authSlice.reducer;
