/**
 * 页面内路由定义
 */
const wechat = resolve => require(['./wechat'], resolve)
const login = resolve => require(['./login/login'], resolve)

export default [
    {
        path: '/',
        component: wechat,
        meta: {title: '首页'}
    },
    {
        path: '/login',
        component: login,
        meta: {title: '用户登陆'}
    }
]
