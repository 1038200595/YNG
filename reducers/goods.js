function goods(state = { lists: [] }, action) {
    switch (action.type) {
        case "GETLISTS":
            return { ...state, lists: action.payload };
        default:
            return state;
    }
}

export default goods;