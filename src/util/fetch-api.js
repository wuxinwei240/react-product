/**
 * 自己封装的异步请求函数
 * APP中的所有请求都将汇聚于此
 * **/

import axios from "axios"; // 封装了fetch请求的库

export default class ApiService {

    /** fetch请求(用的axios.js)
     * @param url 请求的地址
     * @param bodyObj 请求的参数对象
     */
    static newFetch(url, bodyObj = {}) {
        return axios({
            url,
            method: "post",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            withCredentials: true,
            data: JSON.stringify(bodyObj)
        });
    }
}