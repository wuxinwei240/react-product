/** 初始值 **/
const initState = {
    num: 0, // 页面测试数据 初始值0
    userinfo: {}, // 存放登录后的用户信息
};

/** 对应的reducer处理函数，改变store中的值 **/
const actDefault = state => state;

const add = (state, {
    payload
}) => {
    return Object.assign({}, state, {
        num: payload
    });
};

const login = (state, {
    payload
}) => {
    return Object.assign({}, state, {
        userinfo: payload
    });
};

/** 接收action触发的dispatch, 执行对应的reducer处理函数 **/
const reducerFn = (state = initState, action) => {
    switch (action.type) {
        case "APP::add": // 用户点击按钮数字+1
            return add(state, action);
        case "APP::LOGIN": // 用户登录
            return login(state, action);
        default:
            return actDefault(state, action);
    }
};

export default reducerFn;