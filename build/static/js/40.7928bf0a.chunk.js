(this["webpackJsonphimel-shop-client"]=this["webpackJsonphimel-shop-client"]||[]).push([[40],{214:function(t,e,r){"use strict";function n(t){var e,r,o="";if("string"===typeof t||"number"===typeof t)o+=t;else if("object"===typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=n(t[e]))&&(o&&(o+=" "),o+=r);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}e.a=function(){for(var t,e,r=0,o="";r<arguments.length;)(t=arguments[r++])&&(e=n(t))&&(o&&(o+=" "),o+=e);return o}},299:function(t,e,r){"use strict";r.d(e,"a",(function(){return k})),r.d(e,"b",(function(){return L}));var n=r(2),o=r.n(n),i=r(40),a=r.n(i),c=r(214);function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)}))}}function f(){return f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f.apply(this,arguments)}function l(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,p(t,e)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function m(t,e,r){return m=d()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&p(o,r.prototype),o},m.apply(null,arguments)}function y(t){var e="function"===typeof Map?new Map:void 0;return y=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return m(t,arguments,h(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),p(n,t)},y(t)}var g=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(T){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new R(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",m={};function y(){}function g(){}function v(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(N([])));x&&x!==r&&n.call(x,i)&&(b=x);var k=v.prototype=y.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=v,u(k,"constructor",v),u(v,"constructor",g),g.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},L(O.prototype),u(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(k),u(k,c,"Generator"),u(k,i,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}})),v=function(t){function e(e){var r;void 0===e&&(e="forcePromiseReject");for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return(r=t.call.apply(t,[this].concat(o))||this).createdAt=new Date,r.intention=e,r}return l(e,t),e}(y(Error));function b(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}b(".fadein {\n  animation-name: fadein;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fadein {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n");var w=["className"],x={isLoading:!1,error:""},k=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).state=f({},x),e._isMounted=!1,e.imgRef=o.a.createRef(),e.start=s(g.mark((function t(){var r,n,o,i;return g.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.props,n=r.src,o=r.fallback,i=r.delay,n&&o){t.next=6;break}return"src and fallback props must be provided.",e.setState({error:"src and fallback props must be provided."}),t.abrupt("return");case 6:i&&i>0?e.timeoutId=setTimeout((function(){e.timeoutId=void 0,!e.state.error&&e._isMounted&&e.setState({isLoading:!0})}),i):e.setState({isLoading:!0}),e.tryLoadImage();case 8:case"end":return t.stop()}}),t)}))),e.loadImage=s(g.mark((function t(){var r,n;return g.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.imgRef.current){t.next=3;break}return t.abrupt("return");case 3:return n=e.props.onLoad,t.abrupt("return",new Promise((function(t,o){e.forceReject=o;var i=function(){var e=s(g.mark((function e(){return g.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===r.decode){e.next=9;break}return e.prev=1,e.next=4,r.decode();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1);case 9:t(),n&&n(r);case 11:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();r.complete?i():r.onload=i,r.onerror=function(){o(new Error("An Error occurred while trying to download an image"))}})));case 5:case"end":return t.stop()}}),t)}))),e.tryLoadImage=s(g.mark((function t(){return g.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.loadImage();case 3:e._isMounted&&e.setState({isLoading:!1}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),t.t0 instanceof v||!e._isMounted||e.setState({error:t.t0,isLoading:!1});case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))),e}l(e,t);var r=e.prototype;return r.componentDidMount=function(){this._isMounted=!0,this.start()},r.componentDidUpdate=function(t){var e=this,r=this.props.src;r&&r!==t.src&&(this.safeClearTimeout(),this.forceReject&&this.forceReject(new v),this.setState(f({},x),(function(){return e.start()})))},r.componentWillUnmount=function(){this._isMounted=!1,this.forceReject=void 0,this.safeClearTimeout()},r.safeClearTimeout=function(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)},r.render=function(){var t=this.state,e=t.error,r=t.isLoading,n=this.props,i=n.src,a=n.fallback,u=n.errorFallback,s=n.fadeIn,f=n.NativeImgProps||{},l=f.className,h=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(f,w);return r?a:e?u?u(e):o.a.createElement("span",{role:"button","aria-label":"Image failed to load"},"\u274c"):i?o.a.createElement("img",Object.assign({},h,{className:Object(c.a)({fadein:s},l),ref:this.imgRef,decoding:"async",src:i})):null},e}(n.Component);k.propTypes={src:a.a.string.isRequired,fallback:a.a.element.isRequired,errorFallback:a.a.func,onLoad:a.a.func,delay:a.a.number,fadeIn:a.a.bool,NativeImgProps:a.a.object};b(":root {\n  --default-bg-color: #f6f7f8;\n  --default-bg-moving-gradient: linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(222, 222, 222) 18%,  rgb(238, 238, 238) 33%);\n}\n\n.shimmer {\n  background: var(--default-bg-color);\n\tbackground-image: var(--default-bg-moving-gradient);\n  background-repeat: no-repeat;\n  animation: shimmering forwards infinite ease-in-out, fadein 0.02s forwards;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes shimmering {\n\tfrom {\n\t\tbackground-position: top right;\n\t}\n\n\tto {\n\t\tbackground-position: top left;\n\t}\n}\n");var L=function(t){var e=t.className,r=t.duration,n=t.height,i=void 0===n?400:n,a=t.width,u=void 0===a?400:a,s=function(t,e,r){return void 0===r&&(r=1600),{backgroundSize:10*t+"px "+e+"px",animationDuration:(r/1e3).toFixed(1)+"s"}}(u,i,r),l=f({},s,{height:i,width:u});return o.a.createElement("div",{className:Object(c.a)("shimmer",e),style:l})};L.propTypes={height:a.a.number.isRequired,width:a.a.number.isRequired,className:a.a.string,duration:a.a.number};b(":root {\n  --default-bg-color: #e1e2e4;\n}\n\n.breathing {\n  width: 100%;\n  height: 100%;\n  background: var(--default-bg-color);\n  animation: breathing ease-in-out infinite alternate;\n}\n\n@keyframes breathing {\n  from {\n    opacity: 0.25;\n  }\n  to {\n    opacity: 1;\n  }\n}\n");a.a.string,a.a.number,a.a.string,a.a.number,a.a.string,a.a.number}}]);
//# sourceMappingURL=40.7928bf0a.chunk.js.map