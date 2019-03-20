import Axios from '@/utils/axios'

//创建试卷
export function addTest(data){
  return Axios.post('/api/exam/exam',data)
}

//获取试卷列表
export function TestList(data){
  return Axios.get('/api/exam/exam',data)
}