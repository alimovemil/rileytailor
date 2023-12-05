import React, { useEffect } from 'react';
import { useDispatch, } from 'react-redux';
import { startLoading, stopLoading } from './redux/reducers/basket/reducerLoading';
import RoutesComponent from "./routes/routes";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const initializeApp = async () => {
            try {
                dispatch(startLoading());
                await new Promise(resolve => setTimeout(resolve, 2000));

                dispatch(stopLoading());
            } catch (error) {
                dispatch(stopLoading());
            }
        };

        initializeApp();
    }, [dispatch]);

    return (
        <>

            <RoutesComponent />
        </>
    );
};

export default App;
