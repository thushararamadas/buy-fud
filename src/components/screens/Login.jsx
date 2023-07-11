import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FromRow from "../includes/FromRow";
import { useAppContext } from "../../context/Store";

function Login() {
    const [userDetails, setUserDetails] = useState({
        userName: "mor_2314",
        password: "83r5^_",
    });
    const navigate = useNavigate();

    const { loading, loginUser, token } = useAppContext();

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
        const { userName, password } = userDetails;
        if (userName && password) {
            loginUser(userDetails);
        }
    };

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token, navigate]);

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <FromRow
                    name="userName"
                    type="text"
                    handleChange={handleChange}
                    value={userDetails.userName}
                />
                <FromRow
                    name="password"
                    type="password"
                    handleChange={handleChange}
                    value={userDetails.password}
                />
                <button disabled={loading} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;
