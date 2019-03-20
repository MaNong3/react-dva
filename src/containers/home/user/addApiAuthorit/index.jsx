/*
 * @Author: songmingjie 
 * @Date: 2019-03-13 13:34:03 
 * @Last Modified by: mikey.liujiaxu
 * @Last Modified time: 2019-03-17 20:08:04
 */

import React, { Component } from 'react'
import "../index.css"
import {
  Form, Button,message
} from 'antd';
import { Select } from 'element-react';
import {addIdentityAuthority} from '@/services/user'
import {connect} from 'dva'

const mapState = store => {
  window.store = store;
  return { ...store.userShow }
}
@connect(mapState)
 class AddApiAuthorit extends Component {
   constructor(){
     super()
     this.state={
      identity_id:'',
      api_authority_id:''
     }
   }
   componentDidMount(){
    this.props.dispatch({ type: 'userShow/getUsersIdentityList' });
    this.props.dispatch({ type: 'userShow/getApiAuthorityList' });
    
   }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const {identity_id,api_authority_id}=this.state;
          addIdentityAuthority({
            identity_id:identity_id,
            api_authority_id:api_authority_id
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
    const {UsersIdentityList,ApiAuthorityList}=this.props
   
    return (
           <Form onSubmit={this.handleSubmit} className="login-form">
          <p>给身份设置api接口权限</p>
          <Select labelInValue  style={{ width: '100%' }} onChange={(e)=>{
              UsersIdentityList.filter(el=>{
                if(el.identity_text===e){
                    this.setState({
                      identity_id:el.identity_id
                    })
                }
                return el.identity_text
              })
          }}>
            {
              UsersIdentityList!==undefined && UsersIdentityList.map(el => { 
                    return <Select.Option key={el.identity_id} label={el.identity_text} value={el.identity_text} />
                })
            } 
          </Select>
          <Select labelInValue  style={{ width: '100%' }}  onChange={(e)=>{
              ApiAuthorityList.filter(el=>{
                if(el.api_authority_text===e){
                    this.setState({
                      api_authority_id:el.api_authority_id
                    })
                }
                return el.api_authority_text
              })
          }}>
            {
              ApiAuthorityList!==undefined && ApiAuthorityList.map(el => {  
                    return <Select.Option key={el.api_authority_id} label={el.api_authority_text} value={el.api_authority_text} />
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
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(AddApiAuthorit);
export default WrappedNormalLoginForm
