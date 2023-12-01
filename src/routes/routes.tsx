import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Main from "../pages/main/Main";
import ProductLayout from "../layouts/ProductLayout";
import Modern from "../pages/banner/Modern";
import DefaultLayout from "../layouts/DefaultLayout";
import CheckOut from "../pages/checkout";
import Payment from "../pages/payment";
import CollectionItem from "../pages/collection/CollectionItem";
import CollectionLayout from "../layouts/CollectionLayout";
import SignLog from "../pages/header/SignLog";
import SignRedactor from "../pages/header/SignRedactor";
import AllProduct from "../components/pages-2/AllProduct/AllProduct";
import AllLayout from "../layouts/AllLayout";

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

                <Route path="sign">
                    <Route path="" element={ <SignLog/> }/>
                    <Route path="edit" element={ <SignRedactor/> }/>
                </Route>

                <Route element={ <ProductLayout/> }>
                    <Route path="product/:id" element={ <Modern/> }/>
                </Route>

                <Route path="checkout" element={ <CheckOut/> }/>
                <Route path="payment" element={ <Payment/> }/>

                <Route element={ <CollectionLayout/> }>
                    <Route path="collection" element={ <CollectionItem/> }/>
                </Route>

                <Route element={ <AllLayout/> }>
                    <Route path="shop" element={ <AllProduct/> }/>
                </Route>

            </Routes>

        </BrowserRouter>
    )
}

export default RoutesComponent