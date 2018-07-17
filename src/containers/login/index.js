/** 登录页 **/

// ==================
// 所需的各种插件
// ==================
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import P from "prop-types";
import css from './index.scss';

import { serverLogin } from '../../actions/app-action'; // 引入需要用到的action

@connect(
  state => ({}),
  dispatch => ({
    actions: bindActionCreators({ serverLogin }, dispatch)  // 将需要用到的action挂载到redux中
  })
)
export default class LoginPageContainer extends React.Component {
  static propTypes = {
    location: P.any,
    history: P.any,
    actions: P.any
  };

  constructor(props) {
    super(props);
    this.state = {
        username: '',   // 用户名
        password: '',   // 密码
    };
  }

  onUserName = (v) => {
      this.setState({
          username: v.target.value,
      });
  };

  onPassword = (v) => {
      this.setState({
          password: v.target.value,
      });
  };

  onSubmit = () => {
      const params = {
          username: this.state.username,
          password: this.state.password,
      };
      console.log('触发：', params);
    this.props.actions.serverLogin(params).then((res) => {
        console.log('返回：', res);
        if(res.status === 200) {
            // 登录成功，跳转到主页
            sessionStorage.setItem("userInfo", true);
            this.props.history.push('/home');
        }
    });
  };

  render() {
    return (
        <div className={css.login}>
            <div>
                <h2>登录</h2>
                <input type="text" value={this.state.username} onInput={this.onUserName}/>
                <br/>
                <input type="password" value={this.state.password} onInput={this.onPassword}/>
                <br/>
                <button onClick={this.onSubmit}>提交</button>
            </div>
        </div>
    );
  }
}
