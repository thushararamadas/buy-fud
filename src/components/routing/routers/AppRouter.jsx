import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login } from "../../screens";
import PrivateRoute from "../routes/PrivateRoute";
import MoreProducts from "../../screens/MoreProducts";
import AddtoCart from "../../screens/AddtoCart";

function AppRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/more" element={<MoreProducts />} />
            <Route path="/cart" element={<AddtoCart />} />
        </Routes>
    );
}

export default AppRouter;
