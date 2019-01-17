function clear(state = [], action) {
    switch (action.type) {
        case "CLEAR":
            return [...action.payload];
           
        default:
            return state;
    }
}

export default clear;


