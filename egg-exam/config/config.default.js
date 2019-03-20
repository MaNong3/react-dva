const path = require('path');
exports.keys = 'tao';

exports.log = (con) => {
    console.log('----------------------');
    console.log(con);
    console.log('----------------------');
}

exports.security = {
    csrf: {
        enable:false
    },
}

exports.mysql = {
    client:{
        host:'localhost',
        port:3306,
        user:'root',
        password:'123321',
        database:'exam'
    }
}
exports.static = {
    prefix:'/public/'
}
exports.multipart = {
    mode: 'file',
};
exports.questionsRootPath = path.join(__dirname,'../questions_save'); //存放试题的根目录
exports.answersRootPath = path.join(__dirname,'../answers_save'); //存放考试答案的根目录


function route(url,method){
    return {url,method}
}

// 超级白名单，登录和身份都不需要验证
exports.whiteList = [
    route('/user/login','POST'),
    route('/student/login','POST'),
    route('/manger/student','POST'),
    route('/manger/grade','GET')
]
// 身份白名单，不需要验证身份
exports.identityWhiteList = [
    // 学生登陆
    route(/^\/student\/*/,'any'),
    // 学生提交试卷
    route('/exam/student','POST'),
    // 学生获取试卷
    route(/^\/exam\/unstart\/*/,'GET')
];
// 登录白名单，不需要验证登录
exports.loginWhiteList = [

]

