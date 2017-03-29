<template>
    <div>
        <!-- <el-row v-if='userInfo.isLogin'> -->
        <el-col :span='4'>
            <el-input v-model="username" placeholder="未注册用户取个名"></el-input>
        </el-col>
        <el-col :span='16'>
            <el-input v-model="msg" placeholder="请输入聊天信息" @keyup.enter.native="send"></el-input>
        </el-col>
        <el-col :span='2'>
            <el-button class='btn-send' @click='send'>发送</el-button>
        </el-col>
        <el-col :span='2'>
            <el-button v-if='userInfo.isLogin' class='btn-send' @click='clear'>清空</el-button>
        </el-col>
        <!-- </el-row> -->
        <!-- <el-row v-else>
            <span>登陆后方可发送信息</span>
        </el-row> -->
    </div>
</template>

<script>
    import {send, clear} from 'services/msg.service'

    export default {
        data: () => ({
            msg: null,
            username: null
        }),
        computed: {
            userInfo () {
                return this.$store.state.userInfo
            }
        },
        methods: {
            send () {
                if (!this.msg || !this.msg.trim()) {
                    this.$message('消息加空判断了')
                    return
                }

                let uname = this.$store.state.userInfo.name || this.username || '超级懒'
                send(this.msg, uname).then(() => {
                    this.msg = null
                }).catch(e => {
                    this.$message('发送失败，应该是人品问题！')
                })
            },
            clear () {
                clear().catch(() => {
                    this.$message('清空失败！')
                })
            }
        }
    }
</script>

<style scoped>
    .btn-send {
        margin-left: 1rem;
    }
</style>
