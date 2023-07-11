import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
    isLogedIn: false,
};

const AppContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
