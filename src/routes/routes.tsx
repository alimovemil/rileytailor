import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Main from "../pages/main/Main";
import ProductLayout from "../layouts/ProductLayout";
import Modern from "../pages/banner/Modern";
import DefaultLayout from "../layouts/DefaultLayout";
import CheckOut from "../pages/checkout";
import Payment from "../pages/payment";
import CollectionItem from "../pages/collection/CollectionItem";
import Collection from "../pages/collection";
import CollectionLayout from "../layouts/CollectionLayout";

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
                    <Route path="product/:id" element={ <Modern/> }/>
                    {/*<Route path="guarantee" element={ <Modern/> }/>*/}
                    {/*<Route path="pay" element={ <Modern/> }/>*/}
                </Route>

                <Route path="checkout" element={ <CheckOut/> }/>
                <Route path="payment" element={ <Payment/> }/>

                <Route element={<CollectionLayout/>}>
                    <Route path="collection" element={ <CollectionItem/> }/>
                </Route>

            </Routes>

        </BrowserRouter>
    )
}

export default RoutesComponent