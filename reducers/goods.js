function goods(state = [], action) {
    switch (action.type) {
        case "GETLISTS":
            console.log(action.payload,'++++++++++++++++++++++++++++')
            return [ ...state, ...action.payload.limit ];
        default:
            return state;
    }
}

export default goods;