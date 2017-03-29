<template>
    <div></div>
</template>

<script>
    import {uiconf} from 'conf/firebase.conf'

    const _init = (vm) => {
        var ui = new firebaseui.auth.AuthUI(firebase.auth())
        ui.start(vm.$el, uiconf)
    }

    export default {
        mounted () {
            _init(this)
        }
    }
</script>
