/*
 * @Author: mikey.liujiaxu 
 * @Date: 2019-03-14 13:45:29 
 * @Last Modified by: songmingjie
 * @Last Modified time: 2019-03-16 14:32:21
 */
import type from "./type"
import reducers from "./reducers"
  export default {
    namespace: 'exam',
    state: {
      subjectsList: [],
      examTypesList: [],
      questionTypesList: [],
      getAllTestList:[],
      getTestTypeList:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {
      },
    },
  
    effects: type,
    reducers: reducers
  
  };
  