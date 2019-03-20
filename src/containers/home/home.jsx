/*
 * @Author: mikey.liujiaxu 
 * @Date: 2019-03-17 19:46:48 
 * @Last Modified by: mikey.liujiaxu
 * @Last Modified time: 2019-03-18 09:21:54
 */

import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import {NavLink} from 'react-router-dom';
import {connect} from 'dva'
import RouterView from '@/router/routerView';
import {getUserInfo} from '@/services/user'
import moment from 'moment'
import "./index.css"
import {setSession,getSession} from '@/utils/index.js'
import routes from '@/router/routes.js';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

const mapState = store => {
    window.store = store;
    return { ...store.userShow }
  }
  @connect(mapState)

 class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            time:'',
            identity:'',
            flag:true,
            collapsed: false,
            data:[],
            slidebar:{}
        }
     }
    _getUserInfo(){//获取用户信息
        getUserInfo().then(res=>{
          let day=moment(res.data.data.signTime).format('YYYY-MM-DD:HH:MM:SS')
            this.setState({time:day})
            if(res.data.data.identity_text!=='管理员'){
                this.setState({
                    flag:false
                })
            }
            setSession('identityId',res.data.data.identity_id)
            setSession('userId',res.data.data.user_id)
            this.setState({
                data:res.data.data,
                identity:res.data.data.identity_text
            })
        })
    }
    isLogin(){
        this.setState({user:getSession('user')})
        let token=getSession('token')
         if(!token){
              this.props.history.push('/login')
         }
    }
    componentWillReceiveProps(nextProps){
        let slidebar=this.filter(nextProps)
        this.setState({
            slidebar,
        })
      }
      filter(props){
         let {AuthorityRelationList}=props;
         let data=this.state.data;
          let rout=routes[1].children
          let dataObj={};
          AuthorityRelationList.forEach((obj,index)=>{
          for(let i=0;i<rout.length;i++){
              if(data.identity_text===obj.identity_text&&rout[i].title===obj.view_authority_text){
                  let key=rout[i].groupName;
                  dataObj[key]= dataObj[key]?dataObj[key]:[]
                  dataObj[key].push(rout[i])
              }
          }
      })
        return dataObj;
      }
    componentDidMount(){
       this._getUserInfo()
       this.props.dispatch({ type: 'userShow/getAuthorityRelationList' });
       this.isLogin()
    }
   toggle = () => {
    this.setState({
       collapsed: !this.state.collapsed,
     });
   }
   showDeleteConfirm() {
    sessionStorage.clear()
    }  
  render() {
   const {routes}=this.props;
   const {user,time,identity,flag,slidebar}=this.state;
    return (
      <div className="shouye" style={{
       display: 'flex'}}> 
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="home" />
             <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className="nav_box">
                <SubMenu
                key="sub1"
                title={<span><Icon type="team" /><span>试题管理</span></span>}
                >
                        <Menu.Item key="1">
                            <NavLink to="/home/add" >添加试题</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/home/look">试题分类</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to="/home/testList">查看试题</NavLink>
                        </Menu.Item>
                </SubMenu>
                {
                    flag ? <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span>用户管理</span></span>}
                >
                        <Menu.Item key="1">
                            <NavLink to="/home/addUser">添加用户</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/home/addTdentity">添加身份</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to="/home/addApi">添加Api接口权限</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <NavLink to="/home/addView">添加视图接口权限</NavLink>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <NavLink to="/home/addApiAuthorit">设置身份api接口</NavLink>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <NavLink to="/home/addIdentityView">设置身份视图权限</NavLink>
                        </Menu.Item>
                        <Menu.Item key="7">
                        <NavLink to="/home/showUser">用户展示</NavLink>
                        </Menu.Item>
                </SubMenu> : null
                }
                <SubMenu
                key="sub3"
                title={<span><Icon type="team" /><span>考试管理</span></span>}
                >
                        <Menu.Item key="1">
                            <NavLink to="/home/addTest">添加考试</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/home/testLists">试卷列表</NavLink>
                        </Menu.Item>
                </SubMenu>
                <SubMenu
                key="sub4"
                title={<span><Icon type="team" /><span>班级管理</span></span>}
                >
                        <Menu.Item key="1">
                            <NavLink to="/home/add">班级管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/home/look">教室管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to="/home/testList">学生管理</NavLink>
                        </Menu.Item>
                </SubMenu>
                <SubMenu
                key="sub5"
                title={<span><Icon type="team" /><span>菜单管理</span></span>}
                >
                        <Menu.Item key="1">
                            <NavLink to="/home/add">添加菜单</NavLink>
                        </Menu.Item>
                </SubMenu>
                <SubMenu
                key="sub6"
                title={<span><Icon type="team" /><span>学生管理</span></span>}
                >
                        <Menu.Item key="1">
                            <NavLink to="/home/studentInfo">查看学生</NavLink>
                        </Menu.Item>
                </SubMenu>
              
            </Menu>
         </Sider>
         <Layout>
          <Header className="header">
             <div className="logo" />
             <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <span className="content">北京八维研修学院</span>
            <span className="content">欢迎亲爱的<b style={{color:'red'}}>{identity}{user}回家!</b>!</span>
            <span className="content">您上次登录的时间是{time}</span>
            <NavLink  to='/login' tag="span" onClick={()=>{
                this.showDeleteConfirm()
            }}>退出</NavLink>
         </Header>
           <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            <RouterView Routes={routes}></RouterView>
          </Content>
        </Layout>
      </div>
    );
  }
}
export default connect()(Home)