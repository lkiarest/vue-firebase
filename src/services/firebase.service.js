/**
 * 基于 firebase 的 service
 */

export const addRecord = () => {
    let msgRef = firebase.database().ref('msg')
    msgRef.set({
        text: 'hello fb '
    })
}
