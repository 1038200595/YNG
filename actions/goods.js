import axios from 'axios';
export const getListData = (data) => {
    return {
        type: 'GETLISTS',
        payload: data
    }
}
export function fetchList() {
    return (dispatch) => {
        // const url = `http://localhost:3000/goods/list`;   ---------------这台电脑上运行使用这个链接
        const url = `http://122.152.201.95:3000/goods/list`;     //服务器端使用这个链接
        axios({
            url: url,
            method: 'post'
        }).then(res => {
            dispatch(getListData(res.data));
        })
    }
}