import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import RileyHeader from "../pages/components/layouts/AdminLayouts";

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={ <RileyHeader/> }
                >
                    <Route path="/">
                            <Route path={''} element={''}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent