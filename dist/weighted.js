!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Weighted=e()}}(function(){return function e(t,r,n){function o(i,a){if(!r[i]){if(!t[i]){var l="function"==typeof require&&require;if(!a&&l)return l(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var c=r[i]={exports:{}};t[i][0].call(c.exports,function(e){var r=t[i][1][e];return o(r?r:e)},c,c.exports,e,t,r,n)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,u=t,i=r;a=f=l=void 0,n=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,u);if(void 0!==a){if("value"in a)return a.value;var l=a.get;return void 0===l?void 0:l.call(i)}var f=Object.getPrototypeOf(o);if(null===f)return void 0;e=f,t=u,r=i,n=!0}},f=e("react"),c=n(f),p=function(e){var t=function(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)};return u(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.weight,r=e.size;return c["default"].createElement("div",i({style:{flexGrow:t,flexBasis:r}},this.props))}}]),t}(c["default"].Component);r["default"]=p,t.exports=r["default"]},{react:"react"}],2:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,u=t,i=r;a=f=l=void 0,n=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,u);if(void 0!==a){if("value"in a)return a.value;var l=a.get;return void 0===l?void 0:l.call(i)}var f=Object.getPrototypeOf(o);if(null===f)return void 0;e=f,t=u,r=i,n=!0}},f=e("react"),c=n(f),p=e("."),s=n(p),v=function(e){var t=function(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)};return u(t,e),a(t,[{key:"render",value:function(){return c["default"].createElement(s["default"],i({column:!0},this.props))}}]),t}(c["default"].Component);r["default"]=v,t.exports=r["default"]},{".":3,react:"react"}],3:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){o=!0,u=l}finally{try{!n&&a["return"]&&a["return"]()}finally{if(o)throw u}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=function(e,t,r){for(var n=!0;n;){var o=e,u=t,i=r;a=f=l=void 0,n=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,u);if(void 0!==a){if("value"in a)return a.value;var l=a.get;return void 0===l?void 0:l.call(i)}var f=Object.getPrototypeOf(o);if(null===f)return void 0;e=f,t=u,r=i,n=!0}},p=e("react"),s=n(p),v=e("./row"),d=n(v),y=e("./column"),b=n(y),h=e("./cell"),g=n(h),w=function(e){function t(){u(this,t),c(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.state={}}return i(t,e),f(t,[{key:"render",value:function(){var e,t=this.props,r=t.children,n=void 0===r?[]:r,u=t.column,i=t.reverse,f=t.weight,c=t.size,p=(u?"column":"row")+(i?"-reverse":""),v=u?["height","width"]:["width","height"],d=l(v,2),y=d[0],b=d[1],h=this.props[y],g=this.props[b];return delete t.width,delete t.height,delete t.weight,delete t.row,delete t.column,s["default"].createElement("div",a({style:(e={display:"inline-flex",flexDirection:p,flexGrow:f,flexBasis:c},o(e,y,h||"100%"),o(e,b,g),e)},this.props),n)}}]),t}(s["default"].Component);r["default"]=w,r.Row=d["default"],r.Column=b["default"],r.Cell=g["default"]},{"./cell":1,"./column":2,"./row":4,react:"react"}],4:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,u=t,i=r;a=f=l=void 0,n=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,u);if(void 0!==a){if("value"in a)return a.value;var l=a.get;return void 0===l?void 0:l.call(i)}var f=Object.getPrototypeOf(o);if(null===f)return void 0;e=f,t=u,r=i,n=!0}},f=e("react"),c=n(f),p=e("."),s=n(p),v=function(e){var t=function(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)};return u(t,e),a(t,[{key:"render",value:function(){return c["default"].createElement(s["default"],i({row:!0},this.props))}}]),t}(c["default"].Component);r["default"]=v,t.exports=r["default"]},{".":3,react:"react"}]},{},[3])(3)});