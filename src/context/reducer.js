export const reducer = (state, action) => {
    switch (action.type) {
        case "o":
            return { ...state, ...action.payload };

        default:
            return { ...state };
    }
};
