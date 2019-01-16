/* ******************添加到购物车************************** */
export const addCarts = (value,item) => {
    return {
        type: 'ADD_CART',
        quantity:value,
        payload:item
    }
}

/* ***********************购物车加号和减号************************* */
export const minus = (id, num) => {
    return {
        type: 'MINUS',
        payload: {
            _id: id,
            quantity: num
        }
    }
}

/* ******************商品选中按钮******************** */
export const changeCheck = (currItem)=>{
    return{
        type:'CHANGE_CHECK',
        payload: currItem
    }
}

/* ******************全选按钮******************** */
export const checkAll = (allflag) => {
    allflag=!allflag;
    return {
        type: 'CHECK_ALL',
        payload: allflag
    }
}

/* ****************删除按钮*********************** */
export const remove = (id) => {
    return {
        type: 'REMOVE',
        payload: id
    }
}

/* ******************全选删除******************** */
export const checkAllDelete = (e) => {
    return {
        type: 'CHECK_ALL_DELETE',
        payload: e
    }
}










