function order(state = [], action) {
    switch (action.type) {

        case "ORDER":
        // state=[];
        // return state;
        if(action.payload.length>0){
            return [...state,[...action.payload]];
        }else{
            return [[...state]];
        }
           
        default:
            return state;
    }
}

export default order;