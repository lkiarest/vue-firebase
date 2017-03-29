/**
 * 信息相关 service
 */

// msg 数据库记录引用
const msgRef = firebase.database().ref('msg')

/**
 * 发送信息
 */
export const send = (content, user) => {
    let time = firebase.database.ServerValue.TIMESTAMP
    msgRef.push({content, user, time})
}

/**
 * 删除信息
 */
export const remove = (uuid) => {
    return msgRef.update({[uuid]: null})
}

/**
 * 监听数据变化
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
 * 停止监听
 */
export const stopListen = () => {
    msgRef.off()
}
