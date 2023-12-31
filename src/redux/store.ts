import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import profileReducer from "./reducers/basket/basketRe"
import loadingSlice from "./slices/loadingSlice";
import filterReducer from './slices/filterSlice';
import authReducer from "./reducers/auth/authReducer";

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        loading: loadingSlice,
        filter: filterReducer,
        auth: authReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
