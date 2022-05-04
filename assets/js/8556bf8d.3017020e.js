"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[188],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=r.createContext({}),k=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},u=function(t){var e=k(t.components);return r.createElement(s.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=k(n),f=l,g=m["".concat(s,".").concat(f)]||m[f]||i[f]||a;return n?r.createElement(g,p(p({ref:e},u),{},{components:n})):r.createElement(g,p({ref:e},u))}));function f(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,p=new Array(a);p[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,p[1]=o;for(var k=2;k<a;k++)p[k]=n[k];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4556:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return k},toc:function(){return i}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),p=["components"],o={sidebar_position:9},s="Node.JS",k={permalink:"/sev/blog/Node.JS",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Node.JS.md",source:"@site/blog/Node.JS.md",title:"Node.JS",description:"Node.js  \u662f\u4e00\u4e2a\u80fd\u591f\u5728\u670d\u52a1\u7aef\u8fd0\u884c\u7684 Javascript \u8fd0\u884c\u73af\u5883\uff0cNode \u5927\u90e8\u5206\u57fa\u672c\u6a21\u5757\u90fd\u7528 Javascript \u7f16\u5199\u3002\u8fd0\u884c\u5728 Node.jS \u4e2d\u7684 JS \u7684\u7528\u9014\u662f\u64cd\u4f5c\u78c1\u76d8\u6587\u4ef6\u6216\u642d\u5efaHTTP\u670d\u52a1\u5668\uff0cNodeJS\u5c31\u76f8\u5e94\u63d0\u4f9b\u4e86fs\u3001http\u7b49\u5185\u7f6e\u5bf9\u8c61\u3002",date:"2022-05-04T02:43:11.000Z",formattedDate:"May 4, 2022",tags:[],readingTime:15.985,truncated:!1,authors:[],frontMatter:{sidebar_position:9},nextItem:{title:"for Js",permalink:"/sev/blog/for Js"}},u={authorsImageUrls:[]},i=[{value:"<strong>\u6a21\u5757\u5316</strong>",id:"\u6a21\u5757\u5316",level:3},{value:"<strong>\u6a21\u5757\u5316\u4f18\u70b9\uff1a</strong>",id:"\u6a21\u5757\u5316\u4f18\u70b9",level:4},{value:"<strong>CommonJS \u89c4\u8303</strong>",id:"commonjs-\u89c4\u8303",level:4},{value:"<strong>require</strong>",id:"require",level:4},{value:"<strong>exports</strong>",id:"exports",level:4},{value:"module",id:"module",level:4},{value:"\u5305 package",id:"\u5305-package",level:4},{value:"<strong>Node \u5305\u7ba1\u7406\u5668 npm</strong>",id:"node-\u5305\u7ba1\u7406\u5668-npm",level:4},{value:"<strong>\u6a21\u5757\u521d\u59cb\u5316</strong>",id:"\u6a21\u5757\u521d\u59cb\u5316",level:4},{value:"<strong>Buffer(\u7f13\u51b2\u533a)</strong>",id:"buffer\u7f13\u51b2\u533a",level:3},{value:"<strong>fs ( \u6587\u4ef6\u7cfb\u7edf )</strong>",id:"fs--\u6587\u4ef6\u7cfb\u7edf-",level:3},{value:"<strong>\u540c\u6b65\u548c\u5f02\u6b65</strong>",id:"\u540c\u6b65\u548c\u5f02\u6b65",level:4},{value:"\u540c\u6b65",id:"\u540c\u6b65",level:5},{value:"\u5f02\u6b65",id:"\u5f02\u6b65",level:5},{value:"\u5b9e\u7528(\u5e38\u7528)\u5199\u5165\u6587\u4ef6\u64cd\u4f5c",id:"\u5b9e\u7528\u5e38\u7528\u5199\u5165\u6587\u4ef6\u64cd\u4f5c",level:5},{value:"\u6d41\u5f0f\u6587\u4ef6\u5199\u5165",id:"\u6d41\u5f0f\u6587\u4ef6\u5199\u5165",level:5},{value:"\u6587\u4ef6\u7684\u8bfb\u53d6",id:"\u6587\u4ef6\u7684\u8bfb\u53d6",level:5},{value:"<strong>pipe()</strong>",id:"pipe",level:5},{value:"\ud83e\udde8\u5176\u5b83\u64cd\u4f5c",id:"\u5176\u5b83\u64cd\u4f5c",level:5}],m={toc:i};function f(t){var e=t.components,o=(0,l.Z)(t,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Node.js  \u662f\u4e00\u4e2a\u80fd\u591f",(0,a.kt)("strong",{parentName:"p"},"\u5728\u670d\u52a1\u7aef\u8fd0\u884c"),"\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Javascript \u8fd0\u884c\u73af\u5883"),"\uff0cNode \u5927\u90e8\u5206\u57fa\u672c\u6a21\u5757\u90fd\u7528 Javascript \u7f16\u5199\u3002\u8fd0\u884c\u5728 Node.jS \u4e2d\u7684 JS \u7684\u7528\u9014\u662f",(0,a.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u78c1\u76d8\u6587\u4ef6"),"\u6216",(0,a.kt)("strong",{parentName:"p"},"\u642d\u5efaHTTP\u670d\u52a1\u5668"),"\uff0cNodeJS\u5c31\u76f8\u5e94\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"fs"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\u7b49\u5185\u7f6e\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NodeJs \u9ad8\u6027\u80fd Web \u670d\u52a1\u5668\u3001JS\u3001\u5355\u7ebf\u7a0b\u3001\u5f02\u6b65\u3001V8\u5f15\u64ce\u3001\u786c\u4ef6\u8981\u6c42\u4f4e")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"V8\u5f15\u64ce\uff0c\u76ee\u524d\u901f\u5ea6\u6700\u5feb\u7684 JS\u5f15\u64ce")),(0,a.kt)("p",null,"\ud83d\ude95",(0,a.kt)("em",{parentName:"p"},"\u5947\u6570\u4e3a\u6d4b\u8bd5\u7248\u3001\u5076\u6570\u4e3a\u7a33\u5b9a\u7248")),(0,a.kt)("p",null,"\u53ef\u4ee5\u505a\u4ec0\u4e48???"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Web \u670d\u52a1\u5668\u540e\u53f0"),(0,a.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u5de5\u5177",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"npm"),(0,a.kt)("li",{parentName:"ol"},"git"),(0,a.kt)("li",{parentName:"ol"},"hexo"),(0,a.kt)("li",{parentName:"ol"},"......"))),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9\u6a21\u5757( \u81ea\u5df1\u5199\u7684\u5c11,\u4e3b\u8981\u4f7f\u7528\u522b\u4eba\u5f00\u53d1\u7684\u7b2c\u4e09\u65b9\u5e93 )",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"webpack"),(0,a.kt)("li",{parentName:"ol"},"npm"),(0,a.kt)("li",{parentName:"ol"},"gulp")))),(0,a.kt)("p",null,"\ud83e\udd5e",(0,a.kt)("strong",{parentName:"p"},"\u5728 Node \u4e2d\u6709\u4e00\u4e2a\u5168\u5c40\u5bf9\u8c61 (global)\uff0c\u4e0e\u6d4f\u89c8\u5668\u5168\u5c40\u5bf9\u8c61 (window) \u7c7b\u4f3c")),(0,a.kt)("h3",{id:"\u6a21\u5757\u5316"},(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("a",{parentName:"strong",href:"https://www.jianshu.com/p/fb96179c40bf"},"\u6a21\u5757\u5316"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CommonJS\u3001AMD\u3001CMD\u3001ES6\u6a21\u5757\u5316")),(0,a.kt)("h4",{id:"\u6a21\u5757\u5316\u4f18\u70b9"},(0,a.kt)("strong",{parentName:"h4"},"\u6a21\u5757\u5316\u4f18\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u907f\u514d\u547d\u540d\u51b2\u7a81"),"\uff0c\u51cf\u5c11\u547d\u540d\u7a7a\u95f4\u6c61\u67d3"),(0,a.kt)("li",{parentName:"ol"},"\u66f4\u597d\u7684\u6587\u4ef6\u5206\u79bb\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u6309\u9700\u52a0\u8f7d")),(0,a.kt)("li",{parentName:"ol"},"\u66f4\u9ad8\u7684",(0,a.kt)("strong",{parentName:"li"},"\u590d\u7528\u6027")),(0,a.kt)("li",{parentName:"ol"},"\u66f4\u9ad8\u7684",(0,a.kt)("strong",{parentName:"li"},"\u7ef4\u62a4\u6027"))),(0,a.kt)("h4",{id:"commonjs-\u89c4\u8303"},(0,a.kt)("strong",{parentName:"h4"},"CommonJS \u89c4\u8303")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\ud83d\ude84\u5728 Node \u4e2d , \u6bcf\u4e00\u4e2a js \u6587\u4ef6\u4e2d\u7684\u4ee3\u7801\u90fd\u662f\u72ec\u7acb\u8fd0\u884c\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d\u7684(\u51fd\u6570\u5305\u88f9\u4ee3\u7801 IIEF) , \u3010\u4e0d\u662f\u5168\u5c40\u4f5c\u7528\u57df\u7684\u3011, \u6a21\u5757\u4e2d\u7684\u53d8\u91cf\u548c\u51fd\u6570\u5728\u5176\u5b83\u6a21\u5757\u4e2d\u662f\u65e0\u6cd5\u8bbf\u95ee\u7684")),(0,a.kt)("h4",{id:"require"},(0,a.kt)("strong",{parentName:"h4"},"require")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6a21\u5757\u5f15\u5165"),"\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u5728 node \u4e2d"),",\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},"require \u51fd\u6570\u6765\u5f15\u5165"),"\u5916\u90e8\u7684\u6a21\u5757"),(0,a.kt)("p",null,"require() \u5f15\u5165\u7684\u6a21\u5757\u3010\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5bf9\u8c61\u3011\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u4ee3\u8868\u7684\u662f\u5f15\u5165\u7684\u6a21\u5757\u5185\u5bb9"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u76f8\u5bf9\u8def\u5f84\u5fc5\u987b\u4ee5 ",(0,a.kt)("strong",{parentName:"p"},"./  ../"),"  \u5f00\u5934"),(0,a.kt)("h4",{id:"exports"},(0,a.kt)("strong",{parentName:"h4"},"exports")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6a21\u5757\u5bfc\u51fa\uff1a"),"\u6a21\u5757\u4e2d\u5411\u5916\u90e8\u3010\u66b4\u9732\u5c5e\u6027\u548c\u65b9\u6cd5 ",(0,a.kt)("strong",{parentName:"p"},"/")," \u4f7f\u7528 exports \u5c5e\u6027\u3011"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"exports.xxx=yyy"))),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u52a0\u8f7d\u6a21\u5757\u662f\u540c\u6b65\u7684"),"\uff0c\u53ea\u6709\u52a0\u8f7d\u5b8c\u540e\u624d\u80fd\u6267\u884c\u540e\u9762\u7684\u64cd\u4f5c\uff1b",(0,a.kt)("strong",{parentName:"p"},"\u73b0\u52a0\u8f7d\u73b0\u7528"),"\uff0c\u5728\u670d\u52a1\u5668\u7aef\u7f16\u7a0b\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u52a0\u8f7d\u7684\u6a21\u5757\u4e00\u822c\u5b58\u5728\u672c\u5730\u786c\u76d8\u91cc\uff0c\u52a0\u8f7d\u8d77\u6765\u6bd4\u8f83\u5feb\uff0c\u4e0d\u7528\u8003\u8651\u5f02\u6b65\u52a0\u8f7d\u7684\u95ee\u9898\uff0c\u56e0\u4e3a CommonJS \u89c4\u8303\u6bd4\u8f83\u9002\u7528\u3002"),"\u7136\u540e\uff0c\u5e76\u4e0d\u9002\u7528\u4e8e\u6d4f\u89c8\u5668\u73af\u5883\uff0c\u540c\u6b65\u610f\u5473\u7740\u963b\u585e\u7ebf\u7a0b\uff0c\u6d4f\u89c8\u5668\u8d44\u6e90\u7684\u52a0\u8f7d\u65b9\u5f0f\u662f\u5f02\u6b65\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6a21\u5757\u7684\u6807\u8bc6\uff1a"),"\u4f7f\u7528 require() \u5f15\u5165\u5916\u90e8\u6a21\u5757\u65f6\uff0c\u4f7f\u7528\u7684\u5c31\u662f\u6a21\u5757\u6807\u8bc6 require('\u6a21\u5757\u6807\u8bc6')  \uff0c\u53ef\u4ee5\u901a\u8fc7\u6a21\u5757\u6807\u8bc6\u6765\u627e\u5230\u6307\u5b9a\u7684\u6a21\u5757\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6a21\u5757\u4e3b\u8981\u5206\u4e24\u5927\u7c7b:"),"\u6838\u5fc3\u6a21\u5757",(0,a.kt)("strong",{parentName:"p"},"\uff1a-\u7531 node \u5f15\u64ce\u63d0\u4f9b\u7684\u6a21\u5757\uff0c\u6838\u5fc3\u6a21\u5757\u7684\u6807\u8bc6\u5c31\u662f\u6a21\u5757\u7684\u540d\u5b57 require('\u6a21\u5757\u540d')"),"\u6587\u4ef6\u6a21\u5757**\uff1a\u7531\u5f00\u53d1\u8005\u521b\u5efa\u7684\u6a21\u5757\uff0c\u6587\u4ef6\u6a21\u5757\u7684\u6807\u8bc6\u5c31\u662f\u6a21\u5757\u7684\u76f8\u5bf9\u8def\u5f84 require('\u76f8\u5bf9\u8def\u5f84') "),(0,a.kt)("p",null,"\u6a21\u5757\u6587\u4ef6\u7ed3\u6784\uff1a\u5f53 Node \u5728\u6267\u884c\u4ee3\u7801\u65f6\u4f1a\u81ea\u52a8\u7528\u4e0b\u9762\u51fd\u6570\u5c06\u5185\u5bb9\u5305\u88f9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function (exports, require, module, __filename, __dirname){\n    .../\u6587\u4ef6\u5185\u5bb9\n}\n")),(0,a.kt)("p",null,"\ud83c\udf64\u6ce8\u610f\uff1a\u4ece\u8fd9\u4e2a\u51fd\u6570\u53ef\u4ee5\u770b\u51fa\uff0c\u5f00\u53d1\u8005\u4f7f\u7528\u7684 exports , require , module .exports \u90fd\u662f\u8fd9\u4e2a\u51fd\u6570\u63d0\u4f9b\u7684\uff0c\u5728\u51fd\u6570\u6267\u884c\u65f6\u4f20\u9012\u8fdb\u53bb\u7684\u4e94\u4e2a\u5b9e\u53c2\uff0c\u800c\u4e0d\u662f\u5728\u5168\u5c40\u4e2d\u7684\uff0c"),(0,a.kt)("p",null,"exports\uff1a- \u8be5\u5bf9\u8c61\u7528\u6765\u5c06\u53d8\u91cf\u6216\u51fd\u6570\u66b4\u9732\u5230\u5916\u90e8"),(0,a.kt)("p",null,"require\uff1a- \u51fd\u6570\uff0c\u7528\u6765\u5f15\u5165\u5916\u90e8\u7684\u6a21\u5757"),(0,a.kt)("p",null," module:- \u4ee3\u8868\u7684\u662f\u6a21\u5757\u672c\u8eab\uff0cexports \u5b9e\u9645\u4e0a\u5c31\u662f module \u7684\u5c5e\u6027"),(0,a.kt)("p",null,"__filename:- \u5f53\u524d\u6a21\u5757\u7684\u3010\u5b8c\u6574\u8def\u5f84\u3011"),(0,a.kt)("p",null,"__dirname:- \u5f53\u524d\u6a21\u5757\u7684\u6240\u5904\u7684\u3010\u6587\u4ef6\u5939\u540d\u3011"),(0,a.kt)("h4",{id:"module"},"module"),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"module"),"\u5bf9\u8c61\u53ef\u4ee5\u8bbf\u95ee\u5230\u5f53\u524d\u6a21\u5757\u7684\u4e00\u4e9b\u76f8\u5173\u4fe1\u606f\uff0c\u4f46\u6700\u591a\u7684\u7528\u9014\u662f\u66ff\u6362\u5f53\u524d\u6a21\u5757\u7684\u5bfc\u51fa\u5bf9\u8c61\u3002\u4f8b\u5982\u6a21\u5757\u5bfc\u51fa\u5bf9\u8c61\u9ed8\u8ba4\u662f\u4e00\u4e2a\u666e\u901a\u5bf9\u8c61\uff0c\u5982\u679c\u60f3\u6539\u6210\u4e00\u4e2a\u51fd\u6570\u7684\u8bdd\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"obj.a --- module.exports\na=obj.a --- exports=module.exports\n\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5728\u5806\u6808\u4e2d\u7684\u5173\u7cfb\nexports\u53ea\u80fd\u901a\u8fc7 . \u6765\u66b4\u9732\u6570\u636e\nmodule.exports\u65e2\u53ef\u4ee5\u901a\u8fc7 . \u7684\u5f62\u66b4\u9732\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8d4b\u503c\n\n\u9519\u8bef\ud83c\udf73\uff1a\nexports={xxx=yyy,aaa(){}}\n\u6b63\u786e\ud83c\udf56\uff1aexports.xxx=yyy \u6216\u8005\n       module.exports={xxx=yyy,aaa(){}} \u6216\u8005\n       module.exports.xxx=yyy\n")),(0,a.kt)("h4",{id:"\u5305-package"},"\u5305 package"),(0,a.kt)("p",null,"Common.Js \u7684\u5305\u89c4\u8303\u5141\u8bb8",(0,a.kt)("strong",{parentName:"p"},"\u5c06\u4e00\u7ec4\u6a21\u5757\u7ec4\u5408\u5230\u4e00\u8d77\uff0c\u5f62\u6210\u4e00\u7ec4\u5b8c\u6574\u7684\u5de5\u5177\u3002")),(0,a.kt)("p",null,"\u7ec4\u6210\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u5305\u7ed3\u6784\u3001\u5305\u63cf\u8ff0\u6587\u4ef6")),(0,a.kt)("p",null,"\u5305\u7ed3\u6784\uff1a-\u7528\u4e8e\u7ec4\u7ec7\u5305\u4e2d\u7684\u5404\u79cd\u6587\u4ef6( \u538b\u7f29\u6587\u4ef6\uff0c\u89e3\u538b\u4ee5\u540e\u8fd8\u539f\u4e3a\u76ee\u5f55 )"),(0,a.kt)("p",null,"\u200b\t\t\u89c4\u8303\u76ee\u5f55\uff1a"),(0,a.kt)("p",null,"\u200b\t\t\t\t\t",(0,a.kt)("strong",{parentName:"p"},"-package.js\t-\u63cf\u8ff0\u6587\u4ef6( \u5fc5\u987b )")),(0,a.kt)("p",null,"\u200b\t\t\t\t\t-bin\t\t\t\t  -\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,a.kt)("p",null,"\u200b\t\t\t\t\t-lib\t\t\t\t\t-js \u4ee3\u7801"),(0,a.kt)("p",null,"\u200b\t\t\t\t\t-docc\t\t\t\t-\u6587\u6863"),(0,a.kt)("p",null,"\u200b\t\t\t\t\t-test\t\t\t\t  -\u5355\u5143\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u5305\u63cf\u8ff0\u6587\u4ef6\uff1a-\u63cf\u8ff0\u5305\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u4ee5\u4f9b\u5916\u90e8\u8bfb\u53d6\u5206\u6790"),(0,a.kt)("h4",{id:"node-\u5305\u7ba1\u7406\u5668-npm"},(0,a.kt)("strong",{parentName:"h4"},"Node \u5305\u7ba1\u7406\u5668 npm")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"npm -v //\u67e5\u770b\u7248\u672c\u53f7\nnpm version //\u67e5\u770b\u6240\u6709\u4f9d\u8d56\u7248\u672c\u53f7\nnpm search \u5305\u540d //\u641c\u7d22\u5305\nnpm install/i \u5305\u540d //\u5b89\u88c5\u5305\nnpm remove/r \u5305\u540d //\u5220\u9664\u5305\n//\u5b89\u88c5\u5305\u5e76\u6dfb\u52a0\u5230\u4f9d\u8d56\u4e2d(package.json\u6587\u4ef6\u4e2d),\u53ef\u4ee5\u67e5\u770b\u4fdd\u8bc1\u6211\u4eec\u9700\u8981\u7684\u5305\u7248\u672c\n//\u73b0\u57287.7.6\u7248\u672c\u4e0d\u9700\u8981\u63d0\u4ea4 --save (\u81ea\u52a8\u6dfb\u52a0)\nnpm install \u5305\u540d --save \nnpm install \u5305\u540d -g //\u5168\u5c40\u5b89\u88c5\u5305(\u4e00\u822c\u662f\u4e00\u4e9b\u5de5\u5177)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f53\u628a\u5305\u63d0\u4ea4\u5230\u4f9d\u8d56\u4e2d( package.json )"),",\u5728\u5b89\u5305\u65f6\u5c31\u4e0d\u9700\u8981\u4e00\u4e2a\u4e2a\u53bb install \u5b89\u88c5,",(0,a.kt)("strong",{parentName:"p"},"\u53ea\u9700\u8981 npm install \u5c31\u53ef\u4ee5")),(0,a.kt)("h4",{id:"\u6a21\u5757\u521d\u59cb\u5316"},(0,a.kt)("strong",{parentName:"h4"},"\u6a21\u5757\u521d\u59cb\u5316")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\ud83e\udd69"),"\uff1a\u4e00\u4e2a\u6a21\u5757\u4e2d\u7684 JS \u4ee3\u7801\u4ec5\u5728\u6a21\u5757",(0,a.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b21\u88ab\u4f7f\u7528\u65f6\u6267\u884c\u4e00\u6b21"),"\uff0c\u5e76\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u521d\u59cb\u5316\u6a21\u5757\u7684\u5bfc\u51fa\u5bf9\u8c61\u3002\u4e4b\u540e\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u7f13\u5b58\u8d77\u6765"),"\u7684\u5bfc\u51fa\u5bf9\u8c61\u88ab",(0,a.kt)("strong",{parentName:"p"},"\u91cd\u590d\u5229\u7528"),"\u3002"),(0,a.kt)("h3",{id:"buffer\u7f13\u51b2\u533a"},(0,a.kt)("strong",{parentName:"h3"},"Buffer(\u7f13\u51b2\u533a)")),(0,a.kt)("p",null,"\u7528\u6237\u53d1\u9001\u63a5\u6536\u7684\u6570\u636e(2\u8fdb\u5236)\uff0c\u5728\u670d\u52a1\u5668\u7aef\u8fd9\u91cc\u5b83\u5b58\u653e\u5728\u54ea\uff1f\uff1f\uff1f --- Buffer"),(0,a.kt)("p",null,"\u5728 Node.js\u4e2d\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e2a Buffer \u7c7b\uff0c\u8be5\u7c7b\u7528\u6765\u521b\u5efa\u4e00\u4e2a\ud83c\udf5c",(0,a.kt)("strong",{parentName:"p"},"\u4e13\u95e8\u5b58\u653e\u4e8c\u8fdb\u5236\u6570\u636e"),"\u7684\u7f13\u5b58\u533a\u3002\u4e00\u4e2a Buffer ",(0,a.kt)("strong",{parentName:"p"},"\u7c7b\u4f3c\u4e8e\u4e00\u4e2a\u6570\u7ec4"),"\uff0c\u4f46\u5b83\u5bf9\u5e94\u4e8e V8 \u5806\u5185\u5b58",(0,a.kt)("strong",{parentName:"p"},"\u4e4b\u5916\u7684\u4e00\u5757\u539f\u59cb\u5185\u5b58\u3002"),"Buffer \u5e93\u4e3a Node.js \u5e26\u6765\u4e86\u4e00\u79cd",(0,a.kt)("strong",{parentName:"p"},"\u5b58\u50a8\u539f\u59cb\u6570\u636e\u7684\u65b9\u6cd5"),"\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\ud83e\udd6b\uff1a\u5728Unicode\u7f16\u7801\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5b58\u50a8\u65f6\u4e3a\u4e8c\u8fdb\u5236\u3001\u663e\u793a\u65f6\u4e3a\u5341\u516d\u673a\u5236(0x)\u3001\u8bfb\u53d6\u65f6\u4e3a\u5341\u8fdb\u5236(\u65e5\u5e38\u4f7f\u7528)")),(0,a.kt)("p",null,"\u76ee\u524d\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"new Buffer()\u6784\u9020\u51fd\u6570"),"\u6765\u521b\u5efa\u5bf9\u8c61\u5b9e\u4f8b\u5df2\u5e9f\u5f03\uff08Buffer\u5bf9\u5185\u5b58\u7684\u6743\u9650\u64cd\u4f5c\u76f8\u6bd4\u5f88\u5927\uff0c\u53ef\u4ee5\u76f4\u63a5\u6355\u83b7\u4e00\u4e9b\u654f\u611f\u4fe1\u606f\uff09\uff0c\u76ee\u524d\u5b98\u65b9\u6587\u6863\u91cc\u9762",(0,a.kt)("strong",{parentName:"p"},"\u5efa\u8bae\u4f7f\u7528Buffer.from()\u63a5\u53e3\u53bb\u521b\u5efaBuffer\u5bf9\u8c61"),"\u3002"),(0,a.kt)("p",null,"Buffer.from(str)  \u4ee3\u66ff new Buffer(str) \u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32\u4fdd\u5b58\u5230Buffer\u4e2d"),(0,a.kt)("p",null,"Buffer.alloc(10) \u4ee3\u66ff new Buffer(10) \u8bbe\u7f6e10\u4e2a\u5b57\u8282\u7684Buffer"),(0,a.kt)("p",null,"\u6027\u80fd\ud83c\udf56\uff1aBuffer.alloc(\u6e05\u7a7a\u518d\u5206\u914d\u7a7a\u95f4) > Buffer.allocUnsafe(\u4e0d\u4f1a\u6e05\u7a7a\u518d\u5206\u914d\u7a7a\u95f4\uff0c\u53ef\u80fd\u5305\u542b\u654f\u611f\u6570\u636e)"),(0,a.kt)("p",null,"Buffer \u4e00\u65e6\u5927\u5c0f\u786e\u5b9a\uff0c\u5219\u4e0d\u80fd\u4fee\u6539\uff0c\u56e0\u4e3a Buffer \u5b9e\u9645\u4e0a\u662f\u5bf9\u5e95\u5c42\u7684\u5185\u5b58\u7684\u76f4\u63a5\u64cd\u4f5c"),(0,a.kt)("p",null,"buffer.length   -\u5360\u7528\u5185\u5b58\u7684\u5927\u5c0f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e2d\u6587\u53603\u4e2a\u5b57\u8282(byte)\u5185\u5b58")),(0,a.kt)("p",null,"buffer\u4e2d\u6bcf\u4e2a\u5143\u7d20\u7684\u8303\u56f4\u662f\u4ece 00-ff(16\u8fdb\u5236)\u3001  0-255(10\u8fdb\u5236)\u3001  00000000- 11111111(2\u8fdb\u5236)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53ea\u8981\u6570\u5b57\u5728\u63a7\u5236\u53f0\u6216\u8005\u9875\u9762\u8f93\u51fa\u90fd\u662f\u4e00\u4e2a 10\u8fdb\u5236 \u7684\u6570\u636e( \u81ea\u52a8\u8f6c\u5316 )")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let str = "\u4f60\u597d node!";\nlet buffer = Buffer.from(str);\n/* \u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32\u4fdd\u5b58\u5230Buffer\u4e2d */\nBuffer.from(str);\n\nconsole.log(str.length); //8 -\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\nconsole.log(buffer.length); //12 -\u5360\u7528\u5185\u5b58\u7684\u5927\u5c0f\n\n// 00000000 \u6216 11111111\n\n// \u8ba1\u7b97\u673a \u4e00\u4e2a0 \u6216 \u4e00\u4e2a1 \u6211\u4eec\u79f0\u4e3a1\u4f4d\uff08bit\uff09\n\n/* \n    8bit=1byte(\u5b57\u8282)\n    1024byte=1kb\n    1024kb=1mb\n    1024mb=1gb\n    1024gb=1tb\n    \ud83c\udf55buffer \u91cc\u7684\u4e00\u4e2a\u5143\u7d20\u5360\u7528\u5185\u5b58\u4e00\u4e2a\u5b57\u8282\n*/\n')),(0,a.kt)("p",null,"Buffer \u5b9e\u4f8b\u4e0e\u666e\u901a\u7684 JavaScript \u5b57\u7b26\u4e32\u4e4b\u95f4\u8fdb\u884c",(0,a.kt)("strong",{parentName:"p"},"\u76f8\u4e92\u8f6c\u6362 toString()")),(0,a.kt)("h3",{id:"fs--\u6587\u4ef6\u7cfb\u7edf-"},(0,a.kt)("strong",{parentName:"h3"},"fs ( \u6587\u4ef6\u7cfb\u7edf )")),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u7684\u672c\u8d28\u5c31\u662f\u5c06\u672c\u5730\u7684\u6587\u4ef6\u53d1\u9001\u7ed9\u8fdc\u7a0b\u7684\u5ba2\u6237\u7aef\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u901a\u8fc7 Node \u6765\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684\u6587\u4ef6\uff0cNode\u901a\u8fc7fs \u6a21\u5757\u6765\u548c\u6587\u4ef6\u7cfb\u7edf\u8fdb\u884c\u4ea4\u4e92\u3002")),(0,a.kt)("p",null,"fs \u6a21\u5757\u63d0\u4f9b\u4e86\u4e00\u4e9b\u6807\u51c6\u6587\u4ef6\u8bbf\u95ee\u7684 API \u6765\u6253\u5f00\u3001\u8bfb\u53d6\u3001\u5199\u5165\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\uff1a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"const fs = require('fs')"))),(0,a.kt)("h4",{id:"\u540c\u6b65\u548c\u5f02\u6b65"},(0,a.kt)("strong",{parentName:"h4"},"\u540c\u6b65\u548c\u5f02\u6b65")),(0,a.kt)("p",null,"\u8c03\u7528 fs \u6a21\u5757\u4e2d\u6240\u6709\u7684\u64cd\u4f5c\u90fd",(0,a.kt)("strong",{parentName:"p"},"\u6709\u4e24\u79cd\u5f62\u5f0f\u53ef\u4f9b\u9009\u62e9\u540c\u6b65\u548c\u5f02\u6b65\u3002")),(0,a.kt)("p",null,"\u540c\u6b65\u6587\u4ef6\u7cfb\u7edf\u4f1a",(0,a.kt)("strong",{parentName:"p"},"\u963b\u585e"),"\u7a0b\u5e8f\u7684\u6267\u884c,\u4e5f\u5c31\u662f\u9664\u975e\u64cd\u4f5c\u5b8c\u6bd5,\u5426\u5219\u4e0d\u4f1a\u5411\u4e0b\u6267\u884c\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u5f02\u6b65\u6587\u4ef6\u7cfb\u7edf\u4e0d\u4f1a\u963b\u585e\u7a0b\u5e8f\u7684\u6267\u884c,\u800c\u662f\u5728\u64cd\u4f5c\u5b8c\u6210\u65f6,\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u5c06\u7ed3\u679c\u8fd4\u56de\u3002 "),(0,a.kt)("p",null,"\u533a\u522b\uff1a\ud83d\udef9"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u540c\u6b65\uff1a",(0,a.kt)("em",{parentName:"strong"},"const fd =")," fs.\u65b9\u6cd5\u540dSync ( path ","[, mode]"," )")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f02\u6b65\uff1afs.\u65b9\u6cd5\u540d ( path ","[, mode]"," , ",(0,a.kt)("em",{parentName:"strong"},"callback"),")")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f02\u6b65\u65b9\u6cd5"),"\u65e0\u9700\u8d4b\u503c\u7ed9\u53d8\u91cf( ",(0,a.kt)("strong",{parentName:"p"},"\u65e0\u8fd4\u56de\u503c")," )\uff0c\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u8fd4\u56de\u503c"),(0,a.kt)("p",null,"Sync :\u540c\u6b65;\tcallbck:\u56de\u8c03;"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6027\u80fd\uff1a\u5f02\u6b65 > \u540c\u6b65")),(0,a.kt)("p",null,"\u6587\u4ef6\u7684\u5199\u5165:\ud83d\ude97"),(0,a.kt)("p",null,"---\u624b\u52a8\u64cd\u4f5c\u7684\u6b65\u9aa4"),(0,a.kt)("h5",{id:"\u540c\u6b65"},"\u540c\u6b65"),(0,a.kt)("p",null,"\u200b\t\t\t1.\u6253\u5f00\u6587\u4ef6"),(0,a.kt)("p",null,"\u200b\t\t\t",(0,a.kt)("strong",{parentName:"p"},"fs. openSync (path, flagsI, model)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"path\u8981\u6253\u5f00\u6587\u4ef6\u7684\u8def\u5f84")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"flags\u6253\u5f00\u6587\u4ef6\u8981\u505a\u7684\u64cd\u4f5c\u7684\u7c7b\u578b"),(0,a.kt)("p",{parentName:"li"},"r\u53ea\u8bfb\u7684"),(0,a.kt)("p",{parentName:"li"},"w\u53ef\u5199\u7684")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"mode \u8bbe\u7f6e\u6587\u4ef6\u7684\u64cd\u4f5c\u6743\u9650,\u4e00\u822c\u4e0d\u4f20")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56de\u503c\uff1a---\u8be5\u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6587\u4ef6\u7684\u63cf\u8ff0\u7b26\u4f5c\u4e3a\u7ed3\u679c,\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bfb\u63cf\u8ff0\u7b26\u6765\u5bf9\u6587\u4ef6\u8fdb\u884c\u5404\u79cd\u64cd\u4f5c"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},'fs. openSync ("path", "w/r")')))),(0,a.kt)("p",null,"\u200b\t\t\t2.\u5411\u6587\u4ef6\u4e2d\u5199\u5165\u5185\u5bb9"),(0,a.kt)("p",null,"\u200b\t\t\t",(0,a.kt)("strong",{parentName:"p"},"fs.writeSync(fd, string[, position","[, encoding]","])")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fd\uff1a\u6587\u4ef6\u7684\u63cf\u8ff0\u7b26")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"string\uff1a\u5199\u5165\u5f97\u5230\u5185\u5bb9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"position\uff1a\u521d\u59cb\u4f4d\u7f6e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"encoding\uff1a\u5199\u5165\u7684\u7f16\u7801,\u9ed8\u8ba4 utf-8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56de:  number \u5199\u5165\u7684\u5b57\u8282\u6570\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"fs.writeSync( fd , '\u5185\u5bb9')")),(0,a.kt)("p",{parentName:"li"},"\u6ce8\u610f\ud83d\ude92\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u6b64\u65f6\u5982\u679c\u4e0d\u5173\u95ed\u6587\u4ef6\uff0c\u6587\u4ef6\u4e00\u76f4\u5b58\u5728 \u5185\u5b58 \u4e2d\u5f97\u4e0d\u5230\u91ca\u653e")))),(0,a.kt)("p",null,"\u200b\t\t\t3.\u4fdd\u5b58\u5e76\u5173\u95ed\u6587\u4ef6"),(0,a.kt)("p",null,"\u200b\t\t\t",(0,a.kt)("strong",{parentName:"p"},"fs.closeSync( fd )")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fd\uff1a\u6587\u4ef6\u7684\u63cf\u8ff0\u7b26")),(0,a.kt)("h5",{id:"\u5f02\u6b65"},"\u5f02\u6b65"),(0,a.kt)("p",null,"\u200b\t\t\t1.\u6253\u5f00\u6587\u4ef6"),(0,a.kt)("p",null,"\u200b\t\t\t",(0,a.kt)("strong",{parentName:"p"},"fs. open (path, flagsl, model, callback)")),(0,a.kt)("p",null,"\u200b\t\t\t-\u7528\u6765\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u4e00\u5f02\u6b65\u8c03\u7528\u7684\u65b9\u6cd5\uff0c\u7ed3\u679c\u90fd\u662f\u901a\u8fc7\u56de\u8c03\u51fd\u8f7d\t\t\t\u7684\u53c2\u6551\u8fd4\u56de\u7684"),(0,a.kt)("p",null,"\u200b\t\t\t-\u56de\u8c03\u51fd\u6570\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,a.kt)("p",null,"\u200b\t\t\t\t\terr \u9519\u8bef\u5bf9\u8c61\uff0c\u5982\u679c",(0,a.kt)("strong",{parentName:"p"},"\u6ca1\u6709\u9519\u8bef\u5219\u4e3anull")),(0,a.kt)("p",null,"\u200b\t\t\t\t\tfd \u6587\u4ef6\u7684\u63cf\u8ff0\u7b26 \u4e2a"),(0,a.kt)("p",null,"\u200b\t\t\t",(0,a.kt)("strong",{parentName:"p"},"fs. open (path, flagsl, model, ",(0,a.kt)("em",{parentName:"strong"},"functiom( fd , err ){}"),")")),(0,a.kt)("p",null,"\u200b\t\t\t2.\u5411\u6587\u4ef6\u4e2d\u5199\u5165\u5185\u5bb9"),(0,a.kt)("p",null,"\u200b\t\t\t",(0,a.kt)("strong",{parentName:"p"},"fs.write(fd, string[, position","[, encoding]","], functiom( err ){})")),(0,a.kt)("p",null,"\u200b\t\t\t3.\u4fdd\u5b58\u5e76\u5173\u95ed\u6587\u4ef6"),(0,a.kt)("p",null,"\u200b\t\t\t",(0,a.kt)("strong",{parentName:"p"},"fs.close( fd, functiom( err ){} )")),(0,a.kt)("h5",{id:"\u5b9e\u7528\u5e38\u7528\u5199\u5165\u6587\u4ef6\u64cd\u4f5c"},"\u5b9e\u7528(\u5e38\u7528)\u5199\u5165\u6587\u4ef6\u64cd\u4f5c"),(0,a.kt)("p",null,"\u4e0a\u9762\u4e24\u79cd\u65b9\u5f0f\u7684\u64cd\u4f5c\u5e76\u4e0d\u5b9e\u7528"),(0,a.kt)("p",null,"\u5f02\u6b65\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"fs.writeFile(file, data","[, {options}]",", ",(0,a.kt)("em",{parentName:"strong"},"callback"),")")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(7530).Z,width:"534",height:"283"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"fs.writeFile(file, data, ",(0,a.kt)("em",{parentName:"strong"},"{flag:'w'}"),", ",(0,a.kt)("em",{parentName:"strong"},"functiom( err ){}")," )")),(0,a.kt)("p",null,"options\u914d\u7f6e\uff1a \u5e38\u7528 r \u3001 w \u3001 a ",(0,a.kt)("img",{loading:"lazy",src:n(9612).Z,width:"593",height:"346"})),(0,a.kt)("p",null,"\u77e5\u8bc6\u70b9\u8865\u5145\uff1a\u5f53\u51fa\u73b0\u8def\u5f84 C:\\ \u65f6\uff0c\u4f1a\u62a5\u9519\u8bef\u3002\u89e3\u51b3\u65b9\u6cd5\uff1a"),(0,a.kt)("p",null,"1\u3001\u4f7f\u7528 \\ \u8f6c\u4e49\uff1aC:","\\","\\"),(0,a.kt)("p",null,"2\u3001\u4f7f\u7528 / : C:/"),(0,a.kt)("p",null,"\u540c\u6b65\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"fs.writeFileSync(file, data","[, options]",")")),(0,a.kt)("h5",{id:"\u6d41\u5f0f\u6587\u4ef6\u5199\u5165"},"\u6d41\u5f0f\u6587\u4ef6\u5199\u5165"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u6301\u7eed\u5199\u5165"),"(\u7d2f\u52a0)"),(0,a.kt)("p",null,"\u540c\u6b65\u3001\u5f02\u6b65\u6216\u8005\u7b80\u5355\u6587\u4ef6\u5199\u5165( ",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u6b21\u6027\u5199\u5165"),"\uff0c\u6d88\u8017",(0,a.kt)("strong",{parentName:"p"},"\u6027\u80fd\u5927"),"\uff0c\u5bb9\u6613\u5bfc\u81f4",(0,a.kt)("strong",{parentName:"p"},"\u5185\u5b58\u6ea2\u51fa")," )\u90fd\u4e0d\u9002\u5408\u64cd\u4f5c\u5927\u6587\u4ef6"),(0,a.kt)("p",null,"\u4f7f\u7528\uff1a"),(0,a.kt)("p",null,"--- \u521b\u5efa\u4e00\u4e2a\u53ef\u5199\u6d41( \u63a5\u6c34\u7ba1,\u5f80\u6c34\u7f38\u653e\u6570\u636e )"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"fs.createWriteStream(path","[, options]",")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//\u521b\u5efa\u4e00\u4e2a\u53ef\u5199\u6d41\nconst ws = fs.createWriteStream("./public/test.txt");\n\n// \u53ef\u4ee5\u901a\u8fc7\u76d1\u542c\u6d41\u7684open\u548cclose\u4e8b\u4ef6\u6765\u76d1\u542c\u6d41\u7684\u6253\u5f00\u548c\u5173\u95ed\n\nws.once("open", function () {\n  console.log("\u6d41\u5f0f\u6253\u5f00\u4e86");\n});\n\nws.once("close", function () {\n  console.log("\u6d41\u5f0f\u5173\u95ed\u4e86");\n});\n\n// \u5f80\u6587\u4ef6\u91cc\u6dfb\u52a0\u6570\u636e,\u53ef\u4ee5\u8fde\u7eed\u6301\u7eed\u6dfb\u52a0\nws.write("1!");\nws.write("2!");\nws.write("3!");\nws.write("4!");\n\n// \u5173\u95ed\u6d41\n// ws.close();  ---\u5c3e\u90e8\u5173\u95ed\n// ws.end();  ---\u5934\u90e8\u5173\u95ed\nws.end();\n')),(0,a.kt)("p",null,"on(\u4e8b\u4ef6\u5b57\u7b26\u4e32,\u56de\u8c03\u51fd\u6570)-\u53ef\u4ee5\u4e3a\u5bf9\u8c61\u7ed1\u5b9a\u4e00\u4e2a\u4e8b\u4ef6"),(0,a.kt)("p",null,"once(\u4e8b\u4ef6\u5b57\u7b26\u4e32,\u56de\u8c03\u51fd\u6570)-\u53ef\u4ee5\u4e3a\u5bf9\u8c61\u7ed1\u5b9a\u4e00\u4e2a\u4e00\u6b21\u6027\u7684\u4e8b\u4ef6\uff0c\u8be5\u4e8b\u4ef6\u5c06\u4f1a\u5728\u89e6\u53d1\u4e00\u6b21\u4ee5\u540e\u81ea\u52a8\u5931\u6548"),(0,a.kt)("p",null,"\u5173\u95ed\u6d41"),(0,a.kt)("h5",{id:"\u6587\u4ef6\u7684\u8bfb\u53d6"},"\u6587\u4ef6\u7684\u8bfb\u53d6"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"fs.readFile \u5f02\u6b65;\tfs.readFileSync \u540c\u6b65;"),"\t---\u53c2\u6570\u4e0e\u5199\u5165\u7c7b\u4f3c"),(0,a.kt)("p",null,"\u8fd4\u56de\u7684\u662f\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"Buffer \u7c7b\u578b\u7684\u6570\u636e"),"\uff0c\u9700\u8981",(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528 toString() \u8f6c\u5316")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6d41\u5f0f\u6587\u4ef6\u5199\u5165")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"fs.createReadStream(path","[, options]",")")),(0,a.kt)("p",null,"\u5982\u679c\u8981\u8bfb\u53d6\u4e00\u4e2a\u53ef\u8bfb\u6d41\u4e2d\u7684\u6570\u636e,",(0,a.kt)("strong",{parentName:"p"},"\u5fc5\u987b\u8981\u4e3a\u53ef\u8bfb\u6d41\u7ed1\u5b9a\u4e00\u4e2adata\u4e8b\u4ef6"),", data\u4e8b\u4ef6\u7ed1\u5b9a\u5b8c\u6bd5,\u5b83\u4f1a",(0,a.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u5f00\u59cb\u8bfb\u53d6\u6570\u636e"),",",(0,a.kt)("strong",{parentName:"p"},"\u8bfb\u53d6\u5b8c\u6bd5\u5c31\u4f1a\u81ea\u52a8\u5173\u95ed\u6d41")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/* \u6d41\u5f0f\u6587\u4ef6\u7684\u8bfb\u5199 */\nconst fs = require("fs");\n//\u521b\u5efa\u4e00\u4e2a\u53ef\u8bfb\u6d41\nconst rs = fs.createReadStream(\n  "./public/#\u96c4\u72ee\u5c11\u5e74 18\u5c81\u7684\u4ed6\u8fdc\u8d70\u4ed6\u4e61\uff0c\u9760\u4e00\u4eba\u6491\u8d77\u6574\u4e2a\u5bb6\uff01\u518d\u82e6\u518d\u7d2f\uff0c\u4ed6\u4e5f\u6ca1\u6709\u653e.mp4"\n);\n//\u521b\u5efa\u4e00\u4e2a\u53ef\u5199\u6d41\nconst ws = fs.createWriteStream("./public/test.mp4");\n\n// \u53ef\u4ee5\u901a\u8fc7\u76d1\u542c \u53ef\u5199\u6d41 \u7684open\u548cclose\u4e8b\u4ef6\u6765\u76d1\u542c\u6d41\u7684\u6253\u5f00\u548c\u5173\u95ed\nws.once("open", function () {\n  console.log("\u53ef\u5199\u6d41\u6253\u5f00\u4e86");\n});\n\nws.once("close", function () {\n  console.log("\u53ef\u5199\u6d41\u5173\u95ed\u4e86");\n});\n\n// \u53ef\u4ee5\u901a\u8fc7\u76d1\u542c \u53ef\u8bfb\u6d41 \u7684open\u548cclose\u4e8b\u4ef6\u6765\u76d1\u542c\u6d41\u7684\u6253\u5f00\u548c\u5173\u95ed\nrs.once("open", function () {\n  console.log("\u53ef\u8bfb\u6d41\u6253\u5f00\u4e86");\n});\n//\u8fd9\u91cc\u7684close\u4e8b\u4ef6 \u53ef\u8bfb\u6d41\u8bfb\u53d6\u5b8c\u6bd5\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u65e0\u9700\u624b\u52a8\u8c03\u7528 end/close \u5173\u95ed\nrs.once("close", function () {\n  console.log("\u53ef\u8bfb\u6d41\u5173\u95ed\u4e86");\n  // \u5173\u95ed\u53ef\u5199\u6d41\n  ws.end();\n});\n\n//\u5f53\u8bfb\u53d6\u5927\u6587\u4ef6\u4e0d\u662f\u4e00\u6b21\u6027\u8bfb\u53d6\u7684\uff0c\u4f1a\u4e00\u6b21\u8bfb\u53d6xxx\u5b57\u8282\u5927\u5c0f(\u7d2f\u52a0)\nrs.on("data", function (data) {\n  // console.log(data);\n  // \u5728\u8fd9\u91cc\u8fdb\u884c\u5199\u5165\u6587\u4ef6\u64cd\u4f5c\n  ws.write(data);\n  //  ### \u4e0d\u80fd\u5728\u8fd9\u91cc\u5c06\u53ef\u5199\u6d41\u5173\u95ed\uff0c\u56e0\u4e3a\u6570\u636e\u662f\u4e00\u6bb5\u4e00\u6bb5\u8bfb\u53d6\u7684\n});\n// ws.close();  ---\u5c3e\u90e8\u5173\u95ed\n// ws.end();  ---\u5934\u90e8\u5173\u95ed\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u66f4\u52a0\u7b80\u5355\u7684\u65b9\u6cd5"),"\uff1a"),(0,a.kt)("h5",{id:"pipe"},(0,a.kt)("strong",{parentName:"h5"},"pipe()")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"pipe()\u53ef\u4ee5\u5c06\u53ef\u8bfb\u6d41\u4e2d\u7684\u5185\u5bb9\uff0c\u76f4\u63a5\u8f93\u51fa\u5230\u53ef\u5199\u6d41\u4e2d")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"rs.pipe (ws) ;"))),(0,a.kt)("p",null,"\u76f4\u63a5 pipe \u65e0\u9700\u518d\u7ed1\u5b9a data \u4e8b\u4ef6\u518d\u5199\u5165\uff0c\u81ea\u52a8\u5f00\u542f\u5173\u95ed\u8bfb/\u5199\u6d41"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(595).Z,width:"825",height:"337"})),(0,a.kt)("h5",{id:"\u5176\u5b83\u64cd\u4f5c"},"\ud83e\udde8\u5176\u5b83\u64cd\u4f5c"),(0,a.kt)("p",null,"fs.stat \u68c0\u6d4b\u662f\u6587\u4ef6\u8fd8\u662f\u76ee\u5f55"),(0,a.kt)("p",null,"fs.mkdir \u521b\u5efa\u76ee\u5f55"),(0,a.kt)("p",null,"fs.writeFile \u521b\u5efa\u5199\u5165\u6587\u4ef6"),(0,a.kt)("p",null,"fs.appendFile \u8ffd\u52a0\u6587\u4ef6"),(0,a.kt)("p",null,"fs.readFile \u8bfb\u53d6\u6587\u4ef6"),(0,a.kt)("p",null,"fs. readdir \u8bfb\u53d6\u76ee\u5f55"),(0,a.kt)("p",null,"fs.unlink \u5220\u9664\u6587\u4ef6"),(0,a.kt)("p",null,"fs.rmdir(Sync) \u5220\u9664\u76ee\u5f55"),(0,a.kt)("p",null,"\u91cd\u547d\u540d\u6587\u4ef6\u548c\u76ee\u5f55(\u526a\u5207) fs.renmae"),(0,a.kt)("p",null,"\u76d1\u89c6\u6587\u4ef6\u66f4\u6539\u5199\u5165 fs.watchFile"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://nodejs.cn/api/"},"http://nodejs.cn/api/")))}f.isMDXComponent=!0},7530:function(t,e,n){e.Z=n.p+"assets/images/1-6628e97dff80aa2e44566819af483891.png"},9612:function(t,e,n){e.Z=n.p+"assets/images/2-d8a2e853a9c21a45f04f932d462fdb23.png"},595:function(t,e,n){e.Z=n.p+"assets/images/3-97f72769950ced12aed21a76d085d731.png"}}]);