/*
 * @Author: mikey.liujiaxu 
 * @Date: 2019-03-14 14:58:11 
 * @Last Modified by: songmingjie
 * @Last Modified time: 2019-03-16 14:32:55
 */
let reducers = {
    saveSubjectList(state,payload){
        return { ...state, ...payload };
    },
    saveExamTypesList(state,payload){
        return { ...state, ...payload };
    },
    saveQuestionTypesList(state, payload) {
        return { ...state, ...payload };
    },
    saveAllTestList(state, payload) {
        return { ...state, ...payload};
    },
    saveTestTypeList(state, payload) {
        return { ...state, ...payload};
    }
}
export default reducers