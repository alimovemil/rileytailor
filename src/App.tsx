import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoading, stopLoading } from './redux/reducers/basket/reducerLoading';
import RoutesComponent from "./routes/routes";
import Spinner from "./container/icons/Spinner";
import { selectLoading } from './redux/reducers/basket/reducerLoading';

const App = () => {
    const dispatch = useDispatch();
    const loadingIsActive = useSelector(selectLoading);

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
            {loadingIsActive ? (
                <div className="spinner__wrapper">
                    <div className="spinner-block">
                        <Spinner />
                    </div>
                </div>
            ) : (
                <RoutesComponent />
            )}
        </>
    );
};

export default App;
