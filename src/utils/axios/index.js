import axios from 'axios';
import {message} from 'antd'
import codeMessage from "./status.js"
let token=sessionStorage.getItem('token')
// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (token) {  // 判断是否存在token，如果存在的话，则每个http headers都加上token
            config.headers.authorization= `${token}`;
            
        }else{
            message.error('请先登陆')
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    })

// http response 拦截器
axios.interceptors.response.use(
    response=>{
       if(response.status !== 200 ) return message.success('返回数据失败')
        return Promise.resolve(response);
    },error => {
        if (error.response) {
            message.error(codeMessage[error.response.status])
        }
        return Promise.reject(error);
    })
export default axios;



