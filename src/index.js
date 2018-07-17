/** APP入口 **/
import React from "react";  // 必须引入
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Root from "./containers/root";

/** 数据中心 **/
import store from "./store";

/** 公共样式 **/

const rootDom = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    rootDom
);

if (module.hot) {
    module.hot.accept();
}