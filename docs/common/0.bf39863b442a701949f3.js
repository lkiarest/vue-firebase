webpackJsonp([0],[,,,,,function(e,t,n){n(34),n(33);var r=n(6)(n(44),n(29),"data-v-8b5ea334",null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var o,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,s=e.default);var a="function"==typeof s?s.options:s;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var u=Object.create(a.computed||null);Object.keys(r).forEach(function(e){var t=r[e];u[e]=function(){return t}}),a.computed=u}return{esModule:o,exports:s,options:a}}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(s(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function s(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var s=p++;r=d||(d=o()),t=i.bind(null,r,s,!1),n=i.bind(null,r,s,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(37),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=c(e,t);return r(o),function(t){for(var n=[],s=0;s<o.length;s++){var i=o[s],a=l[i.id];a.refs--,n.push(a)}t?(o=c(e,t),r(o)):o=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete l[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return s}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return a});var o=firebase.database().ref("msg"),s=function(e,t){var n=firebase.database.ServerValue.TIMESTAMP;return o.push({content:e,user:t,time:n})},i=function(e){return o.update(r({},e,null))},a=function(e){e&&e.onValueChange&&o.on("value",function(t){e.onValueChange(t.val())})}},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(e,t){firebase.auth().onAuthStateChanged(function(t){t?t.getToken().then(function(n){e&&e({isLogin:!0,uid:t.uid,name:t.displayName,email:t.email,token:n})}):e&&e()},function(e){console.log(e),t&&t()})},o=function(){return firebase.auth().signOut()}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(l(r.parts[s],t))}else{for(var i=[],s=0;s<r.parts.length;s++)i.push(l(r.parts[s],t));h[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],s=o[0],i=o[1],a=o[2],u=o[3],c={css:i,media:a,sourceMap:u};n[s]?n[s].parts.push(c):t.push(n[s]={id:s,parts:[c]})}return t}function s(e,t){var n=g(),r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),s(e,t),t}function u(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),s(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,o;if(t.singleton){var s=x++;n=b||(b=a(t)),r=f.bind(null,n,s,!1),o=f.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n,t),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=d.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,o=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||s)&&(r=C(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var h={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},m=v(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),g=v(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,x=0,y=[],C=n(12);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},void 0===t.singleton&&(t.singleton=m()),void 0===t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var s=[],i=0;i<n.length;i++){var a=n[i],u=h[a.id];u.refs--,s.push(u)}if(e){r(o(e),t)}for(var i=0;i<s.length;i++){var u=s[i];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete h[u.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url *\( *(.+?) *\)/g,function(e,t){var o=t.replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var s;return s=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(s)+")"})}},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]);n(11)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(7)(),t.push([e.i,"html,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\nhtml {\n  font-size: 62.5%;\n}\nbody {\n  font-size: 1.6rem;\n}\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n",""])},function(e,t,n){t=e.exports=n(7)(),t.push([e.i,".msg-item[data-v-1d0f1a1c]{margin:.4rem 0;overflow:hidden}.msg-item .user[data-v-1d0f1a1c]{width:100px;color:#666;line-height:1.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.msg-item .content[data-v-1d0f1a1c]{overflow:hidden;line-height:1.5rem;margin-left:.4rem}",""])},function(e,t,n){t=e.exports=n(7)(),t.push([e.i,"#app{height:100%}",""])},function(e,t,n){t=e.exports=n(7)(),t.push([e.i,".wechat[data-v-8b5ea334]{height:100%;display:flex;flex-direction:column}.wechat .header[data-v-8b5ea334]{height:3rem;line-height:3rem;background-color:#eee;border-bottom:1px solid #ddd;box-sizing:border-box}.wechat .message[data-v-8b5ea334]{margin-top:1.5rem;flex-grow:1;overflow:auto}.wechat .footer[data-v-8b5ea334]{line-height:4rem;background-color:#eee;box-sizing:border-box}",""])},function(e,t,n){t=e.exports=n(7)(),t.push([e.i,".logout[data-v-93784bd8]{color:#c00;cursor:pointer}",""])},function(e,t,n){t=e.exports=n(7)(),t.push([e.i,".btn-send[data-v-c26d6606]{margin-left:1rem}",""])},,function(e,t,n){n(35);var r=n(6)(n(39),n(30),"data-v-93784bd8",null);e.exports=r.exports},function(e,t,n){n(32);var r=n(6)(n(41),n(25),"data-v-1d0f1a1c",null);e.exports=r.exports},function(e,t,n){var r=n(6)(n(42),n(26),null,null);e.exports=r.exports},function(e,t,n){n(36);var r=n(6)(n(43),n(31),"data-v-c26d6606",null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"msg-item"},[n("div",{staticClass:"user pull-left",attrs:{title:e.item.user}},[e._v(e._s(e.item.user))]),e._v(" "),n("div",{staticClass:"content"},[e._v(e._s(e.item.content))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"msglist"},e._l(e.msgs,function(e){return n("msg-item",{key:e.uuid,attrs:{item:e}})}))},staticRenderFns:[]}},,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wechat"},[n("el-row",{staticClass:"header"},[n("el-col",{attrs:{span:20,offset:2}},[n("userinfo")],1)],1),e._v(" "),n("el-row",{ref:"msgCol",staticClass:"message"},[n("el-col",{staticClass:"msg-col",attrs:{span:20,offset:2}},[n("msg-list",{on:{listchange:e.msgChanged}})],1)],1),e._v(" "),n("el-row",{staticClass:"footer"},[n("el-col",{attrs:{span:20,offset:2}},[n("sender")],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.userInfo.isLogin?n("div",[e._v(e._s(e.userInfo.name)+" "),n("span",{staticClass:"logout",on:{click:e.logout}},[e._v("注销")])]):n("div",[n("router-link",{attrs:{to:"/login"}},[e._v("登陆")]),e._v(" "),n("span",[e._v("（登陆需要代理访问google服务）")])],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-col",{attrs:{span:4}},[n("el-input",{attrs:{placeholder:"未注册用户取个名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),n("el-col",{attrs:{span:16}},[n("el-input",{attrs:{placeholder:"请输入聊天信息"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.send(t)}},model:{value:e.msg,callback:function(t){e.msg=t},expression:"msg"}})],1),e._v(" "),n("el-col",{attrs:{span:4}},[n("el-button",{staticClass:"btn-send",on:{click:e.send}},[e._v("发送")])],1)],1)},staticRenderFns:[]}},function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(8)("5a95b300",r,!0)},function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(8)("7df224e2",r,!0)},function(e,t,n){var r=n(17);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(8)("49f175c2",r,!0)},function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(8)("a0ed83d6",r,!0)},function(e,t,n){var r=n(19);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(8)("684457d3",r,!0)},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],i=s[0],a=s[1],u=s[2],c=s[3],l={id:e+":"+o,css:a,media:u,sourceMap:c};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);t.default={computed:{userInfo:function(){return this.$store.state.userInfo}},methods:{logout:function(){var e=this;n.i(r.b)().then(function(){e.$message("成功注销")},function(){return e.$message("注销失败")})}},created:function(){this.$store.dispatch("getUser")}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9);t.default={props:{item:{type:Object,required:!0}},methods:{del:function(e){var t=this;n.i(r.c)(e).catch(function(e){t.$message("删除失败:"+e)})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=n(22),s=n.n(o);t.default={data:function(){return{msgs:[]}},mounted:function(){var e=this;r.b({onValueChange:function(t){var n=[];for(var r in t)n.push(Object.assign({uuid:r},t[r]));e.msgs=n,e.$emit("listchange")}})},components:{MsgItem:s.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9);t.default={data:function(){return{msg:null,username:null}},computed:{userInfo:function(){return this.$store.state.userInfo}},methods:{send:function(){var e=this;if(!this.msg||!this.msg.trim())return void this.$message("消息加空判断了");var t=this.$store.state.userInfo.name||this.username||"超级懒";n.i(r.a)(this.msg,t).then(function(){e.msg=null}).catch(function(t){e.$message("发送失败，应该是人品问题！")})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(13),o=(n.n(r),n(45)),s=n(21),i=n.n(s),a=n(23),u=n.n(a),c=n(24),l=n.n(c);t.default={data:function(){return{loading:null}},methods:{msgChanged:function(){this.loading&&(this.loading.close(),this.loading=null);var e=this.$refs.msgCol.$el;this.$nextTick(function(){e.scrollTop=e.scrollHeight})}},mounted:function(){this.loading=this.$loading({target:this.$refs.msgCol.$el,lock:!0})},beforeCreate:function(){console.log("before create")},components:{Userinfo:i.a,MsgList:u.a,Sender:l.a},store:o.a}},function(e,t,n){"use strict";var r=n(10),o={userInfo:{isLogin:!1}},s={USER_INFO:function(e,t){e.userInfo=t}},i={getUser:function(e){var t=e.commit;n.i(r.a)(function(e){t("USER_INFO",e||{isLogin:!1})})}};t.a=new Vuex.Store({state:o,mutations:s,actions:i})}]);