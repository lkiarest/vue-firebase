<template>
    <div>
        <div v-if='userInfo.isLogin'>{{userInfo.name}} <span class='logout' @click='logout'>注销</span></div>
        <div v-else>
            <router-link to='/login'>登陆</router-link>
            <span>（登陆需要代理访问google服务）</span>
        </div>
    </div>
</template>

<script>
    import {logOut} from 'services/user.service'

    export default {
        computed: {
            userInfo () {
                return this.$store.state.userInfo
            }
        },
        methods: {
            logout () {
                logOut().then(() => {
                    this.$message('成功注销')
                }, () => this.$message('注销失败'))
            }
        },
        created () {
            this.$store.dispatch('getUser')
        }
    }
</script>

<style scoped>
    .logout {
        color: #c00;
        cursor: pointer;
    }
</style>
