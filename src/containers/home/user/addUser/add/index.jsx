/*
 * @Author: songmingjie 
 * @Date: 2019-03-13 13:34:03 
 * @Last Modified by: songmingjie
 * @Last Modified time: 2019-03-15 20:32:47
 */

import React, { Component } from 'react'
import {addUser} from '@/services/user'
import {
  Form, Icon, Input, Button,message
} from 'antd';
import { Select } from 'element-react';

 class Add extends Component {
   constructor(props){
     super(props)
     this.state={
      identity_id: "",
      user_name: "",
      user_pwd: ""
     }
   }
   success(){
    message.success('添加成功！', 3);
  };
    setUser(opt){
      const {identity_id,userName, passWord}=opt
     // console.log(identity_id)
       addUser({
            identity_id:identity_id,
            user_name: userName,
            user_pwd: passWord
        }).then(res=>{
            console.log(res)
            if(res.data.code===1){
               this.success()
            }else{
              message.error(res.data.msg, 3);
            }
        })
    }
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
         // console.log(values);
          this.setUser(values)
        }
      });
    }
  render() {
    const { getFieldDecorator } = this.props.form;
    const {Identity}=this.props;
    //console.log(Identity)
    return (
           <Form onSubmit={this.handleSubmit} className="login-form">
          <p>添加用户</p>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('passWord', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Select labelInValue  style={{ width: '100%' }} onChange={(e)=>{
              Identity.filter(el=>{
                  if(e===el.identity_text){
                      this.setState({
                        identity_id:el.identity_id
                      })
                  }
                  return el.identity_text
              })
          } }>
        
            {
              Identity!==undefined && Identity.map(el => {
                  
                    return <Select.Option key={el.identity_id} label={el.identity_text} value={el.identity_text} />
                })
            }
          </Select>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              确定
            </Button>
            <Button type="primary"  className="login-form-button">
              重置
            </Button>
          </Form.Item>
      </Form>   
    )
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Add);
export default WrappedNormalLoginForm
