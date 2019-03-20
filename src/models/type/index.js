/*
 * @Author: mikey.liujiaxu 
 * @Date: 2019-03-14 14:58:15 
 * @Last Modified by: songmingjie
 * @Last Modified time: 2019-03-16 14:32:30
 */
import {
    getQuestionsType,
    getSubject,
    getExamType,
    getAllTest,
    getTestType
} from '@/services/exam';

let type = {
    *getSubjectList(payload, { call, put }) {
        let result = yield call(getSubject);
        //console.log(result)
        if (result.data.code === 1) {
            yield put({ type: 'saveSubjectList', subjectsList: result.data.data })
        }
    },
    *getTestTypeList(payload, { call, put }) {
        let result = yield call(getTestType);
        //console.log(result)
        if (result.data.code === 1) {
            yield put({ type: 'saveTestTypeList', getTestTypeList: result.data.data })
        }
    },
    *getExamTypeList(payload, { call, put }) {
        let result = yield call(getExamType);
        if (result.data.code === 1) {
            yield put({ type: 'saveExamTypesList', examTypesList: result.data.data })
        }
    },
    *getQuestionsTypeList(payload, { call, put }) {
        let result = yield call(getQuestionsType);
        if (result.data.code === 1) {
            yield put({ type: 'saveQuestionTypesList', questionTypesList: result.data.data })
        }
    },
    *getAllTestList(payload, { call, put }) {
        let result = yield call(getAllTest);
        //console.log(result)
        if (result.data.code === 1) {
            yield put({ type: 'saveAllTestList', getAllTestList: result.data.data })
        }
    }
}
export default type