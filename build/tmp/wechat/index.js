import router from 'router'
import routes from 'src/pages/wechat/routes'
import fbConf from 'conf/firebase.conf'
// import index from 'src/pages/wechat/wechat';

// 初始化 firebase 环境
firebase.initializeApp(fbConf)

// 启用 vue 开发者工具
if (process.env.NODE_ENV === 'development') {
    Vue.config.devtools = true
}

router(routes, '#app')
