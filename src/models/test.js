import {
    addTest,
    TestList
  } from '@/services/test';
  
  export default {
    namespace: 'addTest',
    state: {
        addTestList:[],
        TestList:[]
    },
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *getaddTestList({ payload }, { call, put }) {  // eslint-disable-line
        //console.log(payload)
        let result = yield call(addTest);
        if (result.data.code === 1) {
            yield put({ type: 'saveUserInfoList', addTestList: result.data.data })
        }
      },
      *getTestList({ payload }, { call, put }) {  // eslint-disable-line
        //console.log(payload)
        let result = yield call(TestList);
        console.log(result)
        if (result.data.code === 1) {
            yield put({ type: 'saveTestList', TestList: result.data.exam })
        }
      }
    },
    reducers: {
        saveaddTestList(state,payload){
            return { ...state, ...payload };
        },
        saveTestList(state,payload){
          return { ...state, ...payload };
      }
    },
  
  };
  