<template>
    <div class='wechat'>
        <el-row class='header'>
            <el-col :span='20' :offset='2'>
                <userinfo></userinfo>
            </el-col>
        </el-row>
        <el-row class='message' ref='msgCol'>
            <el-col class='msg-col' :span='20' :offset='2'>
                <msg-list @listchange='msgChanged'></msg-list>
            </el-col>
        </el-row>
        <el-row class='footer'>
            <el-col :span='20' :offset='2'>
                <sender></sender>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import 'statics/style/common.less'
    import store from 'vuex/store'
    import Userinfo from 'components/userinfo'
    import MsgList from './message/msgList'
    import Sender from './message/sender'

    export default {
        data: () => ({
            loading: null
        }),
        methods: {
            msgChanged () {
                if (this.loading) {
                    this.loading.close()
                    this.loading = null
                }

                let msgCol = this.$refs.msgCol.$el
                this.$nextTick(() => {
                    msgCol.scrollTop = msgCol.scrollHeight
                })
            }
        },
        mounted () {
            this.loading = this.$loading({
                target: this.$refs.msgCol.$el,
                lock: true
            })
        },
        beforeCreate () {
            console.log('before create')
        },
        components: {Userinfo, MsgList, Sender},
        store
    }
</script>

<style scoped lang="less">
    .wechat {
        height: 100%;
        display: flex;
        flex-direction: column;

        .header {
            height: 3rem;
            line-height: 3rem;
            background-color: #eee;
            border-bottom: 1px solid #ddd;
            box-sizing: border-box;
        }

        .message {
            margin-top: 1.5rem;
            flex-grow: 1;
            overflow: auto;
        }

        .footer {
            line-height: 4rem;
            background-color: #eee;
            box-sizing: border-box;
        }
    }
</style>

<style type="text/css">
    #app {
        height: 100%;
    }
</style>
