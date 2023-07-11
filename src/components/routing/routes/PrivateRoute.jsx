import React from "react";
import { useAppContext } from "../../../context/Store";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { token } = useAppContext();

    return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
