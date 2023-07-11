import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import axios from "axios";
import {
    SETUP_USER_BEGIN,
    SETUP_USER_ERORR,
    SETUP_USER_SUCCESS,
} from "./actions";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
    loading: false,
    isLogedIn: false,
    token: token || "",
};

const AppContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const authFetch = axios.create({
        baseURL: "https://fakestoreapi.com",
    });

    const loginUser = async ({ userName, password }) => {
        dispatch({ type: SETUP_USER_BEGIN });
        try {
            const res = await authFetch.post("/auth/login", {
                username: userName,
                password: password,
            });
            console.log(res);
            localStorage.setItem("token", JSON.stringify(res.data.token));
            dispatch({ type: SETUP_USER_SUCCESS, payload: res.data });
        } catch (err) {
            dispatch({
                type: SETUP_USER_ERORR,
                payload: { message: "something went wrong" },
            });
        }
    };

    return (
        <AppContext.Provider value={{ ...state, loginUser }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
