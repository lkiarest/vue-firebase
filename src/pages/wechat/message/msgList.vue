<template>
    <div ref='msglist'>
        <msg-item v-for='msg in msgs' :item='msg' :key='msg.uuid'></msg-item>
    </div>
</template>

<script>
    import * as msgService from 'services/msg.service'
    import MsgItem from './msgItem'

    export default {
        data: () => ({
            msgs: []
        }),
        mounted () {
            msgService.listen({
                onValueChange: (data) => {
                    let msgs = []
                    for (var key in data) {
                        msgs.push(Object.assign({
                            uuid: key
                        }, data[key]))
                    }

                    this.msgs = msgs
                    this.$emit('listchange')
                }
            })
        },
        beforeDestroy () {
            msgService.stopListen();
        },
        components: {MsgItem}
    }
</script>
