import Axios from '@/utils/axios'

//用户登录
export function userLogin(data) {
  //console.log(data)
  return Axios.post('/api/user/login', data);
}


//获取用户信息
export function getUserInfo() {

  //console.log(data)
  return Axios.get('/api/user/userInfo');
}

//展示用户数据
export function getUsers() {

  //console.log(data)
  return Axios.get('/api/user/user');
}

//添加用户
export function addUser(data) {
  //console.log(data)
  return Axios.post('/api/user', data);
}

//添加身份
export function addEdit(data) {

  //console.log(data)
  return Axios.get('/api/user/identity/edit', data);
}


//获取所有身份ID
export function getIdentity() {
  return Axios.get('/api/user/identity')
}

//添加api接口权限
export function addApiAuthority(data){
    console.log(data)
  return Axios.get('/api/user/authorityApi/edit',data)
}

//获取所有视图权限
export function getViewAuthority(){
  return Axios.get('/api/user/view_authority')
}

//获取所有视图权限
export function addViewAuthority(data){
  return Axios.get('/api/user/authorityView/edit',data)
}

//给身份设置api接口
export function addIdentityAuthority(data){
  return Axios.post('/api/user/setIdentityApi',data)
}

//展示用户身份
export function getUserIdentity(){
  return Axios.get('/api/user/identity')
}

//展示api接口权限
export function getApiAuthority(){
  return Axios.get('/api/user/api_authority')
}

//给身份设定api接口权限
export function addIdentityApi(data){
  return Axios.post('/api/user/setIdentityApi',data)
}

//身份和api接口关系
export function getIdentityToApi(){
  return Axios.get('/api/user/identity_api_authority_relation')
}

//展示身份和视图权限关系
export function getAuthorityRelation(){
  return Axios.get('/api/user/identity_view_authority_relation')
}