import app from '@/app';
import dynamic from 'dva/dynamic';
export default [{
  path: "/login",
  component: dynamic({
    app,
    model: [() => import('@/models/login')],
    component: () => import('view/login/index.jsx')//登录
  }),
  title: '登录'
},
{
  path: '/home',
  component: dynamic({
    app,
    component: () => import('view/home/home.jsx')//主页
  }),
  auth: true,
  title: '主页',
  children: [
    {
      title: '查看试题',
      path: '/home/TestList',
      component: dynamic({
        app,
        component: () => import('view/home/examTest/testList')
      }),
      auth: true
    },
   

    {
      title: '添加试题',
      path: '/home/add',
      component: dynamic({
        app,
        component: () => import('view/home/examTest/addExam')
      }),
      auth: true
    },
    {
      title: '试题分类',
      path: '/home/look',
      component: dynamic({
        app,
        component: () => import('view/home/examTest/lookExam')
      }),
      auth: true
    },
    {
      title: '展示用户',
      path: '/home/showUser',
      component: dynamic({
        app,
        component: () => import('view/home/user/userShow')
      }),
      auth: true
    },
    {
      title: '添加用户',
      path: '/home/addUser',
      component: dynamic({
        app,
        component: () => import('view/home/user/addUser')
      }),
      auth: true
    },
    {
      title: '添加Api接口权限',
      path: '/home/addApi',
      component: dynamic({
        app,
        component: () => import('view/home/user/addApi')
      }),
      auth: true
    },
    {
      title: '设置身份Api接口',
      path: '/home/addApiAuthorit',
      component: dynamic({
        app,
        component: () => import('view/home/user/addApiAuthorit')
      }),
      auth: true
    },
    {
      title: '设置身份视图权限',
      path: '/home/addIdentityView',
      component: dynamic({
        app,
        component: () => import('view/home/user/addIdentityView')
      }),
      auth: true
    },
    {
      title: '添加身份',
      path: '/home/addTdentity',
      component: dynamic({
        app,
        component: () => import('view/home/user/addTdentity')
      }),
      auth: true
    },
    {
      title: '添加视图接口权限',
      path: '/home/addView',
      component: dynamic({
        app,
        component: () => import('view/home/user/addView')
      }),
      auth: true
    },
    {
      title: '添加考试',
      path: '/home/addTest',
      component: dynamic({
        app,
        component: () => import('view/home/test/addTest')
      }),
      auth: true
    },
    {
      title: '试题列表',
      path: '/home/testLists',
      component: dynamic({
        app,
        component: () => import('view/home/test/testLists')
      }),
      auth: true
    },
    {
      title: '学生管理',
      path: '/home/studentInfo',
      component: dynamic({
        app,
        component: () => import('view/home/studentInfo')
      }),
      auth: true
    },
  ]
}];
