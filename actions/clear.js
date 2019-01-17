import _ from 'lodash';

/* *******************结算************************ */
export const clear = data => {
    var arr;
    data.forEach((element) => {
        arr = _.filter(data, back => back.choose == true);
        data = arr;
    })
    return {
        type: "CLEAR",
        payload: data
    };
};


