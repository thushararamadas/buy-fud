import React, { useState } from "react";
import FromRow from "../includes/FromRow";

function Login() {
    const [userDetails, setUserDetails] = useState({
        userName: "",
        password: "",
    });

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
    };

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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
