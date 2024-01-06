import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Main from "../pages/main/Main";
import ProductLayout from "../layouts/ProductLayout";
import Modern from "../pages/banner/Modern";
import CheckOut from "../pages/checkout";
import Payment from "../pages/payment";
import CollectionItem from "../pages/collection/CollectionItem";
import CollectionLayout from "../layouts/CollectionLayout";
import SignLog from "../pages/header/SignLog";
import AllProduct from "../components/pages-2/AllProduct/AllProduct";
import AllLayout from "../layouts/AllLayout";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../components/dashboard/Dashboard";

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />

                <Route path="sign" element={<SignLog />} />

                <Route path="checkout" element={<CheckOut />} />
                <Route path="payment" element={<Payment />} />

                <Route path="collection/:key" element={<CollectionLayout />}>
                    <Route path="" element={<CollectionItem />} />
                    <Route path="product/:id" element={<Modern />} />
                </Route>

                <Route element={<ProductLayout />}>
                    <Route path="product/:id" element={<Modern />} />
                </Route>

                <Route element={<AllLayout />}>
                    <Route path="shop" element={<AllProduct />} />
                </Route>

                <Route path="admin" element={<AdminLayout />}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;