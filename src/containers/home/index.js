/** 主页 **/

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, } from "react-router-dom";
import P from "prop-types";

import { onTestAdd } from '../../actions/app-action';
@connect(
  state => ({
      userinfo: state.app.userinfo, // 从store中获取userinfo
      num: state.app.num,
  }),
  dispatch => ({
    actions: bindActionCreators({ onTestAdd }, dispatch)
  })
)
export default class HomePageContainer extends React.Component {
  static propTypes = {
    userinfo: P.any,
      num: P.number,
    location: P.any,
    history: P.any,
    actions: P.any
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onAdd = () => {
      const n = this.props.num+1;
      this.props.actions.onTestAdd(n);
  };

  render() {
    return (
        <div>
            <h2>Hello, {this.props.userinfo.username}</h2>
            <div>
                <span>{this.props.num}</span><br/>
                <button onClick={this.onAdd}>+1</button>
            </div>
            <Link to="/login">去登录页</Link>
        </div>
    );
  }
}