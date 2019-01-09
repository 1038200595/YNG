import { urlPrefix } from '../constant/constant';

/* 
    async 异步操作模块
    es7 async异步操作的语法
*/

const apiGetAllFlatListData=urlPrefix+`people?_sort=id&_order=desc`;

/* 根据id倒序 */
export const getAllFlatListData= async ()=>{
    try {
        let response = await fetch(apiGetAllFlatListData);
        let responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error);
    }
}

/* 限制长度，每页5条 */
export const getPageFlatListData = async(paramas={page:1})=>{
    try {
        let response = await fetch(apiGetAllFlatListData+'&_limit=5&_page='+paramas.page);
        let responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error);
    }
}