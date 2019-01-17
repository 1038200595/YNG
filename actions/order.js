
/* *******************订单列表************************ */
export const order = data => {
    return{
        type: "ORDER",
        payload: data
    }
};

/* *******************订单完成后******************* */
export const over = (carts) => {
    return {
        type: 'OVER',
        payload: carts
    }
}