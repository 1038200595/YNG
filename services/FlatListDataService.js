import { urlPrefix } from '../constant/constant';

/* 
    async 异步操作模块
    es7 async异步操作的语法
*/

// const apiGetAllFlatListData=urlPrefix+`people/list?_sort=id&_order=desc`;
const apiGetAllFlatListData=urlPrefix+`people/list`;
const apiGetAllAdvertisement=urlPrefix+`goods/list?_sort=id&_order=desc`;

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

/* 限制长度，每页3条 */
export const getPageFlatListData = async(params={page:1})=>{
    try {
        let response = await fetch(apiGetAllFlatListData, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: `limit=3&page=${params.page}`
        });
        let responseData = await response.json();
        return responseData.limit;
    } catch (error) {
        console.log(error);
    }
}


/* 限制长度，每页3条 */
export const getPageAdvertisement = async(params={page:1})=>{
    try {
        let response = await fetch(apiGetAllAdvertisement, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: `limit=9&page=${params.page}`
        });
        let responseData = await response.json();
        return responseData.limit;
    } catch (error) {
        console.log(error);
    }
}
