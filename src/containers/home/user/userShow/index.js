/*
 * @Author: songmingjie 
 * @Date: 2019-03-13 13:33:53 
 * @Last Modified by: mikey.liujiaxu
 * @Last Modified time: 2019-03-17 20:08:56
 */

import React, { Component } from 'react'
import {connect} from 'dva'
import { Table, Tabs} from 'antd';
import "../index.css"
const TabPane = Tabs.TabPane;

const { Column} = Table;

const mapState = store => {
  window.store = store;
  return { ...store.userShow }
}
@connect(mapState)

 class ShowUser extends Component {
    componentDidMount(){
      this.props.dispatch({ type: 'userShow/getUsersList' });
      this.props.dispatch({ type: 'userShow/getApiAuthorityList' });
      this.props.dispatch({ type: 'userShow/getIdentityToApiList' });
      this.props.dispatch({ type: 'userShow/getViewAuthorityList' });
      this.props.dispatch({ type: 'userShow/getAuthorityRelationList' });
    }
    callback(key) {
      //console.log(key);
    }

  render() {
      const {UsersList,ApiAuthorityList,IdentityToApiList,ViewAuthorityList,AuthorityRelationList}=this.props;
      console.log(AuthorityRelationList)
    return (
        <div>
            <Tabs onChange={this.callback} type="card">
              <TabPane tab="用户数据" key="1">
                  <Table dataSource={UsersList} rowKey="user_id">
                       
                        <Column
                          title="用户名"
                          dataIndex="user_name"
                          key="user_name"
                        />
                        <Column
                          title="用户密码"
                          dataIndex="user_pwd"
                          key="user_pwd"
                        />
                  </Table>
              </TabPane>
              <TabPane tab="身份数据" key="2">
                    <Table dataSource={UsersList} rowKey="user_id">
                          <Column
                            title="身份"
                            dataIndex="identity_text"
                            key="identity_text"
                          />
                        
                          <Column
                            title="用户ID"
                            dataIndex="user_id"
                            key="user_id"
                          />
                    </Table>
              </TabPane>
              <TabPane tab="api接口权限" key="3">
                     <Table dataSource={ApiAuthorityList} rowKey="api_authority_id">
                          <Column
                            title="apiID"
                            dataIndex="api_authority_id"
                            key="api_authority_id"
                          />
                        
                          <Column
                            title="api名称"
                            dataIndex="api_authority_text"
                            key="api_authority_text"
                          />
                          <Column
                            title="api地址"
                            dataIndex="api_authority_url"
                            key="api_authority_url"
                          />
                    </Table>
              </TabPane>
              <TabPane tab="身份和api接口关系" key="4">
                    <Table dataSource={IdentityToApiList} rowKey="identity_api_authority_relation_id">
                          <Column
                            title="身份名称"
                            dataIndex="identity_text"
                            key="identity_text"
                          />
                          <Column
                            title="请求方式"
                            dataIndex="api_authority_method"
                            key="pi_authority_method"
                          />
                          <Column
                            title="身份权限"
                            dataIndex="api_authority_text"
                            key="api_authority_text"
                          />
                           <Column
                            title="权限ID"
                            dataIndex="identity_api_authority_relation_id"
                            key="identity_api_authority_relation_id"
                          />
                           <Column
                            title="权限api"
                            dataIndex="api_authority_url"
                            key="api_authority_url"
                          />
                    </Table>
              </TabPane>
              <TabPane tab="视图接口权限" key="5">
                    <Table dataSource={ViewAuthorityList} rowKey="view_id">
                          <Column
                            title="视图名称"
                            dataIndex="view_authority_text"
                            key="view_authority_text"
                          />
                          <Column
                            title="视图ID"
                            dataIndex="view_id"
                            key="view_id"
                          />
                          <Column
                            title="权限ID"
                            dataIndex="view_authority_id"
                            key="view_authority_id"
                          />
                    </Table>
              </TabPane>
              <TabPane tab="身份视图权限关系" key="6">
                    <Table dataSource={AuthorityRelationList} rowKey="identity_view_authority_relation_id">
                          <Column
                            title="身份名称"
                            dataIndex="identity_text"
                            key="identity_text"
                          />
                          <Column
                            title="身份权限ID"
                            dataIndex="identity_view_authority_relation_id"
                            key="identity_view_authority_relation_id"
                          />
                          <Column
                            title="视图名称"
                            dataIndex="view_authority_text"
                            key="view_authority_text"
                          />
                          <Column
                            title="视图ID"
                            dataIndex="view_id"
                            key="view_id"
                          />
                    </Table>

              </TabPane>
            </Tabs>  
        </div>
        
      
    )
  }
}


export default ShowUser
