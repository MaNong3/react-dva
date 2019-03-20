/*
 * @Author: mikey.liujiaxu 
 * @Date: 2019-03-17 19:54:24 
 * @Last Modified by: mikey.liujiaxu
 * @Last Modified time: 2019-03-17 20:08:13
 */

import React, { Component } from 'react'
import "../index.css"
import {
  Form, Icon, Input, Button,message
} from 'antd';
import {addEdit} from '@/services/user';
import {connect} from 'dva'

const mapState = store => {
  window.store = store;
  return { ...store.userShow }
}
@connect(mapState)

 class AddIdentity extends Component {
   handleChange(value) {
      // { key: "lucy", label: "Lucy (101)" }
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
         //s console.log(values);
          addEdit({
            params:{
              identity_text:values.identity
            }
          }).then(res=>{
            //console.log(res)
            if(res.data.code===1){
              message.success(res.data.msg)
            }else{
              message.error(res.data.msg)
            }
          })
        }
      });
    }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
      <p>添加身份</p>
        <Form.Item>
          {getFieldDecorator('identity', {
            rules: [{ required: true, message: 'Please input your identity!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Identity" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            确定
          </Button>
          <Button type="primary"  className="login-form-button">
            重置
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(AddIdentity);
export default WrappedNormalLoginForm