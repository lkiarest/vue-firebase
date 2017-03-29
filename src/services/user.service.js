/**
 * 用户/授权相关 servcie
 */

/**
 * 监听用户登陆状态变化
 */
export const authStateChange = (onSuccess, onError) => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            user.getToken().then(accessToken => {
                onSuccess && onSuccess({
                    isLogin: true,
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    token: accessToken
                })
            })
        } else {
            onSuccess && onSuccess()
        }
    }, err => {
        console.log(err)
        onError && onError()
    })
}

/**
 * 用户注销
 */
export const logOut = () => {
    return firebase.auth().signOut()
}
