import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import axios from "axios";
import { SETUP_USER_BEGIN } from "./actions";

const initialState = {
    loading: false,
    isLogedIn: false,
};

const AppContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const authFetch = axios.create({
        baseURL: "https://fakestoreapi.com",
    });

    const LoginUser = async () => {
        dispatch({ type: SETUP_USER_BEGIN });
    };

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
