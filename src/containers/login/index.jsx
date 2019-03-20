import {Component} from 'react';
import {connect} from 'dva';
import {userLogin} from '@/services/user'
import {setSession} from '@/utils'
import Login from 'ant-design-pro/lib/Login';
import { Alert, Checkbox,message } from 'antd';

import 'ant-design-pro/dist/ant-design-pro.css';
import "./login.css"
import "com/index.css"

const { Tab, UserName, Password, Submit } = Login;

class Logins extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'w916peach',
      pwd: 'Peach0126!',
      notice: '',
      type: 'tab1',
      autoLogin: true,
    }
  }
  onSubmit = (err, values) => {
    console.log('value collected ->', { ...values, autoLogin: this.state.autoLogin });
    if (this.state.type === 'tab1') {
      this.setState({
        notice: '',
      }, () => {
       
        console.log(this.state.user,this.state.pwd)
          userLogin({
              user_name:this.state.user,
              user_pwd: this.state.pwd
            })
            .then(res => {
              console.log(res)
              if (res.data.code === 1) {
               message.success('登陆成功')
               setSession('token',res.data.token)
               setSession('user', values.username)
                this.props.history.push("/home")
              } else {
                //console.log(res.data.msg)
                message.error(res.data.msg)
              }
            })
      });
    }
  }
  onTabChange = (key) => {
    this.setState({
      type: key,
    });
  }
  changeAutoLogin = (e) => {
    this.setState({
      autoLogin: e.target.checked,
    });
  }
render() {    
   return <div className = "login">
      <div className = "login-count">
        <div className = "left">
          <h1 > 八维网站考试系统 </h1>
          <p > 考试与班级管理一体化的整合式服务平台 </p>
        </div>
        <div className = "right" >
          <Login
              defaultActiveKey={this.state.type}
              onTabChange={this.onTabChange}
              onSubmit={this.onSubmit}
              >
              <Tab key="tab1" tab="登录">
              {
                  this.state.notice &&
                  <Alert style={{ marginBottom: 24 }} message={this.state.notice} type="error" showIcon closable />
              }
              <UserName name="username" />
              <Password name="password" />
              </Tab>
              
              <div>
              <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>Keep me logged in</Checkbox>
              
              </div>
              <Submit>Login</Submit>
              <div>
              
              <span className="icon icon-alipay" />
              <span className="icon icon-taobao" />
              <span className="icon icon-weibo" />
              </div>
          </Login>
        </div>
      </div>
    </div>
  
  }
}

export default connect()(Logins);
