<template>
    <div class='msg-item'>
        <div class='user pull-left' :title='item.user'>{{item.user}}：</div>
        <div class='content'>{{item.content}}</div>
        <!-- <el-button @click='del(item.uuid)'>删除</el-button> -->
    </div>
</template>

<script>
    import {remove} from 'services/msg.service'

    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        methods: {
            del (uuid) {
                remove(uuid).catch((e) => {
                    this.$message('删除失败:' + e)
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .msg-item {
        margin: 0.4rem 0;
        overflow: hidden;

        .user {
            width: 100px;
            color: #666;
            line-height: 1.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .content {
            overflow: hidden;
            line-height: 1.5rem;
        }
    }
</style>
