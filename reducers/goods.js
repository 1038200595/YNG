function goods(state = [], action) {
    switch (action.type) {
        case "GETLISTS":
            return [ ...state, ...action.payload.limit ];
        default:
            return state;
    }
}

export default goods;