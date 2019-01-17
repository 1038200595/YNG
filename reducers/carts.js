import _ from 'lodash';
var initialState = [];
function carts(state = initialState, action) {

    switch (action.type) {
        case "ADD_CART":
            var pos = _.findIndex(state, { _id: action.payload._id });
            if (pos != -1) {
                state[pos].quantity = state[pos].quantity + action.quantity;
                return [...state];
            } else {
                var product = { ...action.payload, quantity: action.quantity };
                return [...state,product];
            }   

        case "MINUS":
            state.map(element => {
                if (element._id == action.payload._id) {
                    element.quantity = action.payload.quantity;
                }
            })
            return [...state];


        //**********************点击checkbox按钮**************
        case "CHANGE_CHECK":
            state.map(element => {
                if (element._id == action.payload._id) {
                    element.choose = !element.choose;
                }
            })
            return [...state];

        /* ******************全选按钮******************** */
        case "CHECK_ALL":
            state.map((element, i) => {
                element.choose = action.payload;
            })
            return [...state];

        /* ****************删除按钮*********************** */
        case "REMOVE":
            state.map((element, i) => {
                if (element._id == action.payload) {
                    state.splice(i, 1);
                }
            })
            return [...state];
        
        /* ******************删除多个******************** */
        case "CHECK_ALL_DELETE":
            var arr;
            state.forEach((element) => {
                arr = _.filter(state, back => back.choose == false);
                state = arr;
            })
            return [...state];


        /* *****************购物车中未结算的************************* */
        case "OVER":
            // console.log(state, '-----------------all----------------------');
            // console.log(action.payload, '-----------reducer---------------------');
            var arr
            action.payload.forEach((element) => {
                arr = _.filter(state, back => back._id !== element._id);
                state = arr;
            })
            // console.log(state, '-------------购物车还剩下的----------------------')
            return [...state];

        default:
            return [...state];
    }
}

export default carts;