/**
 * 一些公共的action可以写在这里，比如用户登录、退出登录、权限查询等
 * 其他的action可以按模块不同，创建不同的js文件
 * */

import FetchApi from "../util/fetch-api"; // 自己写的工具函数，封装了请求数据的通用接口

/** 测试：普通的分发触发reducer **/
export const onTestAdd = (params) => async dispatch => {
    dispatch({
        type: "APP::add",
        payload: params
    });
};

/** 测试：用户登录 **/
export const serverLogin = (params = {}) => async dispatch => {
    try {
        // const res = await FetchApi.newFetch("login.ajax", params);
        // 为了简便，这里直接使用假数据返回
        const res = {
            status: 200,
            data: {
                username: params.username,
                password: params.password
            },
            message: '登录成功'
        };
        dispatch({ // 内容分发
            type: "APP::LOGIN", // 会自动触发/src/reducers/app-reducer.js中对应的方法
            payload: res.data // 传递到reducer中的数据
        });
        console.log('到这里了吗', res);
        return res; // 同时也将数据直接return到页面组件中
    } catch (err) {
        console.error("网络错误，请重试");
    }
};