import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Main from "../pages/main/Main";
import ProductLayout from "../layouts/ProductLayout";
import Modern from "../pages/banner/Modern";
import DefaultLayout from "../layouts/DefaultLayout";

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={ <DefaultLayout/> }
                >
                    <Route path="/">
                        <Route path="pages" element={ <Main/> }/>
                    </Route>
                </Route>

                <Route element={ <ProductLayout/> }>
                    <Route path="product" element={ <Modern/> }/>
                    <Route path="guarantee" element={ <Modern/> }/>
                    <Route path="pay" element={ <Modern/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent