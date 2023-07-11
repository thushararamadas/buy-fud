import React, { useState } from "react";
import FromRow from "../includes/FromRow";

function Login() {
    const userDetails = useState({
        name: "",
        email: "",
        password: "",
    });
    return (
        <div>
            <FromRow name="email" />
        </div>
    );
}

export default Login;
