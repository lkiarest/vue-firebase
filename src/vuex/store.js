/**
 * 全局唯一 store，做状态共享
 */
// Vue.use(Vuex); // 使用 js include 引入 vuex 不需要此语句
import {authStateChange} from 'services/user.service'

// 应用状态
const state = {
    userInfo: {
        isLogin: false
    }
}

// 状态变更函数
const mutations = {
    // mutation 的第一个参数是当前的 state
    // 你可以在函数里修改 state
    USER_INFO (state, userInfo) {
        state.userInfo = userInfo
    }
}

const actions = {
    getUser ({commit}) {
        authStateChange(user => {
            let userInfo = user || {
                isLogin: false
            }

            commit('USER_INFO', userInfo)
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
