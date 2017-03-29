/**
 * firebase 的基本配置
 */

export const uiconf = {
    signInSuccessUrl: '/wechat/index.html#/login',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
        }
    ]
    // Terms of service url.
    // tosUrl: '<your-tos-url>'
}

export default {
    apiKey: 'AIzaSyDt2AKDy_of--S_4M1SK9SAq6H9bASG_KM',
    authDomain: 'wechat-8e07b.firebaseapp.com',
    databaseURL: 'https://wechat-8e07b.firebaseio.com',
    storageBucket: 'wechat-8e07b.appspot.com',
    messagingSenderId: '565726375007'
}
