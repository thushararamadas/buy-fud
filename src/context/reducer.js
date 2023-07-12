import {
    SETUP_USER_BEGIN,
    SETUP_USER_ERORR,
    SETUP_USER_SUCCESS,
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case SETUP_USER_BEGIN:
            return { ...state, loading: true };

        case SETUP_USER_SUCCESS:
            return { ...state, token: action.payload.token, loading: false };
        case SETUP_USER_ERORR:
            return { ...state, error: action.payload.message, loading: false };
        case "CART_DATA":
            return {
                ...state,
                cartdata: action.cartdata,
            };
        default:
            return { ...state };
    }
};
