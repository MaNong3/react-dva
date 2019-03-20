import Axios from '@/utils/axios'

//获取所有试题类型

export function studentInfo() {
  return Axios.get('/api/student/info')
}