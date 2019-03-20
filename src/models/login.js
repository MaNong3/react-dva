
export default {

    namespace: 'login',
  
    state: {
        userToken:""
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
      *saveToken({ payload }, { call, put }){
        console.log(payload)
        //console.log(put)
        yield put({ type: 'save' });
      }
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  