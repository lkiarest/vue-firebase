/**
 * 信息相关 service
 */

// msg ref
const msgRef = firebase.database().ref('msg')

/**
 * send msg
 */
export const send = (content, user) => {
    let time = firebase.database.ServerValue.TIMESTAMP
    return msgRef.push({content, user, time})
}

/**
 * remove one message by uuid
 */
export const remove = (uuid) => {
    return msgRef.update({[uuid]: null})
}

/**
 * clear all messages
 */
export const clear = () => {
    return msgRef.remove()
}

/**
 * listen to message list change
 */
export const listen = (callbacks) => {
    if (!callbacks) {
        return
    }

    if (callbacks.onValueChange) {
        msgRef.on('value', snapshot => {
            callbacks.onValueChange(snapshot.val())
        })
    }
}

/**
 * stop listening
 */
export const stopListen = () => {
    msgRef.off()
}
