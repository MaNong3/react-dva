import {
  getUserInfo,//获取用户信息
  getUsers,//更新用户数据
  getIdentity,//获取所有身份ID
  getViewAuthority,//获取所有视图权限
  getUserIdentity,//展示用户身份
  getApiAuthority,//展示api接口权限
  getIdentityToApi,//身份和api接口关系
  getAuthorityRelation//获取展示身份和视图权限关系
} from '@/services/user';

export default {
  namespace: 'userShow',
  state: {
      UserInfoList:[],
      UsersList:[],
      IdentityList:[],
      ViewAuthorityList:[],
      UsersIdentityList:[],
      ApiAuthority:[],
      IdentityToApiList:[],
      AuthorityRelationList:[]
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getUserInfoList({ payload }, { call, put }) {  // eslint-disable-line
      //console.log(payload)
      let result = yield call(getUserInfo);
      if (result.data.code === 1) {
          yield put({ type: 'saveUserInfoList', UserInfoList: result.data.data })
      }
    },
    *getUsersList({ payload }, { call, put }){
     
      let result = yield call(getUsers);
      if (result.data.code === 1) {
          yield put({ type: 'saveUsersList' ,UsersList:result.data.data});
      }
    },
    *getIdentityList({ payload }, { call, put }){
      //console.log(payload)
      let result = yield call(getIdentity);
      console.log(result)
      if (result.data.code === 1) {
          yield put({ type: 'saveIdentityList' ,IdentityList:result.data.data});
      }
    },
    *getViewAuthorityList({ payload }, { call, put }){
      //console.log(payload)
      let result = yield call(getViewAuthority);
      if (result.data.code === 1) {
          yield put({ type: 'saveViewAuthorityList' ,ViewAuthorityList:result.data.data});
      }
    },
    *getUsersIdentityList({ payload }, { call, put }){
      //console.log(payload)
      let result = yield call(getUserIdentity);
      if (result.data.code === 1) {
          yield put({ type: 'saveUsersIdentityList' ,UsersIdentityList:result.data.data});
      }
    },
    *getApiAuthorityList({ payload }, { call, put }){
      //console.log(payload)
      let result = yield call(getApiAuthority);
      if (result.data.code === 1) {
          yield put({ type: 'saveApiAuthorityList' ,ApiAuthorityList:result.data.data});
      }
    },
    *getIdentityToApiList({ payload }, { call, put }){
      //console.log(payload)
      let result = yield call(getIdentityToApi);
      if (result.data.code === 1) {
          yield put({ type: 'saveIdentityToApiList' ,IdentityToApiList:result.data.data});
      }
    },
    *getAuthorityRelationList({ payload }, { call, put }){
      //console.log(payload)
      let result = yield call(getAuthorityRelation);
      if (result.data.code === 1) {
          yield put({ type: 'saveAuthorityRelationList' ,AuthorityRelationList:result.data.data});
      }
    }
  },
  reducers: {
      saveUserInfoList(state,payload){
          return { ...state, ...payload };
      },
      saveUsersList(state,payload){
          return { ...state, ...payload };
      },
      saveIdentityList(state, payload) {
          return { ...state, ...payload };
      },
      saveViewAuthorityList(state, payload) {
          return { ...state, ...payload};
      },
      saveUsersIdentityList(state, payload) {
          return { ...state, ...payload};
      },
      saveApiAuthorityList(state, payload) {
          return { ...state, ...payload};
      },
      saveIdentityToApiList(state, payload) {
          return { ...state, ...payload};
      },
      saveAuthorityRelationList(state, payload){
          return { ...state, ...payload};
      }
  },

};
