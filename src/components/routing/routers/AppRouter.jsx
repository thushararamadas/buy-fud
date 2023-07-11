import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login } from "../../screens";
import PrivateRoute from "../routes/PrivateRoute";

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
        </Routes>
    );
}

export default AppRouter;
