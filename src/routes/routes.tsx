import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import AdminLayout from "../components/layouts/AdminLayouts";
import Main from "../pages/main/Main";
import BannerItem from "../components/layouts/AdminContent";

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={ <AdminLayout/> }
                >
                    <Route path="/">
                        <Route path="pages" element={ <Main/> }/>
                    </Route>
                </Route>

                <Route path="modern" element={<BannerItem/>}/>

                {/*<Route path="riley-tailor" element={<BannerItem/>}/>*/}

            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent