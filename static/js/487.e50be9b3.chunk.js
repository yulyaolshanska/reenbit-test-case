(self.webpackChunkrickandmortyapi=self.webpackChunkrickandmortyapi||[]).push([[487],{500:function(e,t,r){"use strict";r.d(t,{W:function(){return a}});var n,l=r(168),a=r(6444).ZP.div(n||(n=(0,l.Z)(["\n  padding: 92px 24px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 360px;\n\n  @media "," {\n    padding: 86px 0px;\n    width: 768px;\n  }\n  @media screen and (min-width: 940px) {\n    width: 940px;\n  }\n\n  @media "," {\n    padding: 86px 20px;\n\n    margin-left: auto;\n    margin-right: auto;\n    width: 1060px;\n  }\n"])),(function(e){return e.theme.media.tablet}),(function(e){return e.theme.media.desktop}))},3487:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n,l,a,o,i,u,c=r(9439),f=r(2791),d=r(808),s=r(9101),p=r(7689),h=r(1313),b=r(500),g=r(168),y=r(6444),m=r(6355),O=y.ZP.div(n||(n=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),x=y.ZP.h1(l||(l=(0,g.Z)(["\n  margin-bottom: 30px;\n  text-align: center;\n"]))),v=y.ZP.span(a||(a=(0,g.Z)([""]))),w=y.ZP.button(o||(o=(0,g.Z)(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n  background-color: #4c69ba;\n  background-image: linear-gradient(#4c69ba, #3b55a0);\n  /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354c8c;\n  color: rgb(255, 255, 255);\n\n  height: 50px;\n  width: 240px;\n  border: none;\n  line-height: 34px;\n  text-align: center;\n  box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px 0px;\n  font-size: 16px;\n  border-radius: 1px;\n  transition: background-color 0.218s ease 0s, border-color 0.218s ease 0s,\n    box-shadow 0.218s ease 0s;\n  font-family: Roboto, arial, sans-serif;\n  cursor: pointer;\n  user-select: none;\n  &:hover,\n  :focus {\n    background-color: #5b7bd5;\n    background-image: linear-gradient(#5b7bd5, #4864b1);\n  }\n  /* &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-right: #364e92 1px solid;\n    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png")\n      6px 6px no-repeat;\n  } */\n']))),E=(0,y.ZP)(m.Am9)(i||(i=(0,g.Z)(["\n  margin-right: 16px;\n  width: 20px;\n  height: 20px;\n"]))),j=r(184),S=function(){var e=(0,p.s0)(),t=(0,h.C)((function(e){return e.auth.user.userName}));return(0,f.useEffect)((function(){""!==t&&e("/",{replace:!0})}),[t]),(0,j.jsxs)(b.W,{children:[(0,j.jsx)(x,{children:"Sign in to Rick&Morty"}),(0,j.jsxs)(O,{children:[(0,j.jsx)(d.ZP,{onClick:s.qj,children:"Sign in with google"}),(0,j.jsxs)(w,{onClick:s.DY,children:[(0,j.jsx)(E,{}),(0,j.jsx)(v,{children:"Sign in with facebook"})]})]})]})},C=y.ZP.div(u||(u=(0,g.Z)([""]))),P=r(6789),k=function(){var e=P.Gb.actions.logIn,t=(0,f.useState)(null),r=(0,c.Z)(t,2),n=r[0],l=r[1],a=(0,h.T)(),o=null;return(0,f.useEffect)((function(){n&&a(e(n))}),[n]),(0,f.useEffect)((function(){s.ZP.auth().onAuthStateChanged((function(e){null!==e&&(o={userName:null===e||void 0===e?void 0:e.displayName,userEmail:null===e||void 0===e?void 0:e.email},l(o))}))}),[]),(0,j.jsx)(C,{children:(0,j.jsx)(S,{})})}},888:function(e,t,r){"use strict";var n=r(9047);function l(){}function a(){}a.resetWarningCache=l,e.exports=function(){function e(e,t,r,l,a,o){if(o!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:l};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},160:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var a=n?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}r.default=e,t&&t.set(e,r);return r}(r(2791)),a=(n=r(2007))&&n.__esModule?n:{default:n},o=r(6647),i=r(8580);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(c,e);var t,r,n,a,u=(t=c,function(){var e,r=O(t);if(m()){var n=O(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return g(this,e)});function c(){var e;h(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return v(y(e=u.call.apply(u,[this].concat(r))),"state",{hovered:!1}),v(y(e),"getStyle",(function(t){var r="dark"===e.props.type?i.darkStyle:i.lightStyle;return e.state.hovered?p({},r,{},i.hoverStyle,{},t):e.props.disabled?p({},r,{},i.disabledStyle,{},t):p({},r,{},t)})),v(y(e),"mouseOver",(function(){e.props.disabled||e.setState({hovered:!0})})),v(y(e),"mouseOut",(function(){e.props.disabled||e.setState({hovered:!1})})),v(y(e),"click",(function(t){e.props.disabled||e.props.onClick(t)})),e}return r=c,(n=[{key:"render",value:function(){var e=this.props,t=e.label,r=e.style,n=d(e,["label","style"]);return l.default.createElement("div",f({},n,{role:"button",onClick:this.click,style:this.getStyle(r),onMouseOver:this.mouseOver,onMouseOut:this.mouseOut}),l.default.createElement(o.GoogleIcon,this.props),l.default.createElement("span",null,t))}}])&&b(r.prototype,n),a&&b(r,a),c}(l.PureComponent);t.default=w,v(w,"propTypes",{label:a.default.string,disabled:a.default.bool,tabIndex:a.default.number,onClick:a.default.func,type:a.default.oneOf(["light","dark"]),style:a.default.object}),v(w,"defaultProps",{label:"Sign in with Google",disabled:!1,type:"dark",tabIndex:0,onClick:function(){}})},6647:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleIcon=void 0;var n=o(r(2791)),l=o(r(2007)),a=r(8580);function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=n.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:a.svgStyle},n.default.createElement("defs",null,n.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},n.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),n.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),n.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),n.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),n.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),n.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),n.default.createElement("feMerge",null,n.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),n.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),n.default.createElement("feMergeNode",{in:"SourceGraphic"}))),n.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"}),n.default.createElement("rect",{id:"path-3",x:"5",y:"5",width:"38",height:"38",rx:"1"})),n.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -219.000000)"}),n.default.createElement("g",{id:"btn_google_dark_normal",transform:"translate(-1.000000, -1.000000)"},n.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},n.default.createElement("g",{id:"button-bg"},n.default.createElement("use",{fill:"#4285F4",fillRule:"evenodd"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}))),n.default.createElement("g",{id:"button-bg-copy"},n.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"})),n.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},n.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),n.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),n.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),n.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),n.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),n.default.createElement("g",{id:"handles_square"})))),d=n.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:a.svgStyle},n.default.createElement("defs",null,n.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},n.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),n.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),n.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),n.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),n.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),n.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),n.default.createElement("feMerge",null,n.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),n.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),n.default.createElement("feMergeNode",{in:"SourceGraphic"}))),n.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"})),n.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -160.000000)"}),n.default.createElement("g",{id:"btn_google_light_normal",transform:"translate(-1.000000, -1.000000)"},n.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},n.default.createElement("g",{id:"button-bg"},n.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}))),n.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},n.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),n.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),n.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),n.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),n.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),n.default.createElement("g",{id:"handles_square"})))),s=n.default.createElement("svg",{width:"46px",height:"46px",viewBox:"0 0 46 46",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:a.svgStyle},n.default.createElement("defs",null,n.default.createElement("rect",{id:"path-1",x:"0",y:"0",width:"40",height:"40",rx:"2"})),n.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.default.createElement("g",{id:"9-PATCH",transform:"translate(-788.000000, -219.000000)"}),n.default.createElement("g",{id:"btn_google_dark_disabled",transform:"translate(-1.000000, -1.000000)"},n.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)"},n.default.createElement("g",{id:"button-bg"},n.default.createElement("use",{fillOpacity:"0.08",fill:"#000000",fillRule:"evenodd"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}),n.default.createElement("use",{fill:"none"}))),n.default.createElement("path",{d:"M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z",id:"Shape-Copy",fillOpacity:"0.4",fill:"#000000"}),n.default.createElement("g",{id:"handles_square"})))),p=function(e){var t=e.disabled,r=e.type;return n.default.createElement("div",{style:t?u({},a.iconStyle,{},a.disabledIconStyle):a.iconStyle},t?s:"dark"===r?f:d)};t.GoogleIcon=p,p.propTypes={disabled:l.default.bool,type:l.default.oneOf(["light","dark"])},p.defaultProps={type:"dark"}},808:function(e,t,r){"use strict";Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return l.default}});var n,l=(n=r(160))&&n.__esModule?n:{default:n}},8580:function(e,t){"use strict";function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.disabledIconStyle=t.disabledStyle=t.hoverStyle=t.svgStyle=t.iconStyle=t.lightStyle=t.darkStyle=void 0;var a={height:"50px",width:"240px",border:"none",textAlign:"center",verticalAlign:"center",boxShadow:"0 2px 4px 0 rgba(0,0,0,.25)",fontSize:"16px",lineHeight:"48px",display:"block",borderRadius:"1px",transition:"background-color .218s, border-color .218s, box-shadow .218s",fontFamily:"Roboto,arial,sans-serif",cursor:"pointer",userSelect:"none"},o=n({backgroundColor:"#4285f4",color:"#fff"},a);t.darkStyle=o;var i=n({backgroundColor:"#fff",color:"rgba(0,0,0,.54)"},a);t.lightStyle=i;t.iconStyle={width:"48px",height:"48px",textAlign:"center",verticalAlign:"center",display:"block",marginTop:"1px",marginLeft:"1px",float:"left",backgroundColor:"#fff",borderRadius:"1px",whiteSpace:"nowrap"};t.svgStyle={width:"48px",height:"48px",display:"block"};t.hoverStyle={boxShadow:"0 0 3px 3px rgba(66,133,244,.3)",transition:"background-color .218s, border-color .218s, box-shadow .218s"};t.disabledStyle={backgroundColor:"rgba(37, 5, 5, .08)",color:"rgba(0, 0, 0, .40)",cursor:"not-allowed"};t.disabledIconStyle={backgroundColor:"transparent"}}}]);
//# sourceMappingURL=487.e50be9b3.chunk.js.map