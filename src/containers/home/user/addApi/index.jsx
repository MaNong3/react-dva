/*
 * @Author: songmingjie 
 * @Date: 2019-03-13 13:34:03 
 * @Last Modified by: mikey.liujiaxu
 * @Last Modified time: 2019-03-17 20:07:55
 */
import React, { Component } from 'react'
import "../index.css"
import {
  Form, Icon, Input, Button,message
} from 'antd';
import {addApiAuthority} from '@/services/user'
import {connect} from 'dva'

const mapState = store => {
  window.store = store;
  return { ...store.userShow }
}
@connect(mapState)
 class AddIdentity extends Component {
 
   handleChange(value) {
     console.log(value.key)
      this.setState({
        identity_id: value.key
      }) 
      // { key: "lucy", label: "Lucy (101)" }
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          //console.log(values);
          addApiAuthority({
            params:{
              api_authority_text:values.apiUsername,
              api_authority_url:values.apiUrl,
              api_authority_method:values.api
            }
          }).then(res=>{
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
      <p>添加api接口权限</p>
        <Form.Item>
          {getFieldDecorator('apiUsername', {
            rules: [{ required: true, message: 'Please input your apiUsername!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入api接口权限名称" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('apiUrl', {
            rules: [{ required: true, message: 'Please input your apiUrl!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入api接口URL" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('api', {
            rules: [{ required: true, message: 'Please input your api!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入api接口方法" />
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