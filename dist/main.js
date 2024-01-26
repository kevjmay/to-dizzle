(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);"]),a.push([n.id,'body {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    margin: 0;\n    background-color: #1a1a1c;\n    font-family: "Montserrat";\n}\n\n.nav {\n    background-color: #2f2c2b;\n    width: 400px;\n    height: 100vh;\n    border-radius: 12px;\n    overflow: hidden;\n    margin: 10px;\n}\n\n.userInformation {\n    color: white;\n    display: flex;\n    align-items: center;\n    background-color: #2f2c2b;\n    margin: 5px;\n}\n\n.userImage {\n    height: 70px;\n    padding: 10px;\n}\n\n.userName, .userTag {\n    color: white;\n    line-height: 5px;\n}\n\n.orderView {\n    color: white;\n    background-color: #2f2c2b;\n}\n\n.projectList {\n    color: white;\n}\n\nli {\n    list-style: none;\n    padding-left: 10px;\n}\n\n.projectContainer {\n    background-color: #2f2c2b;\n}\n.projectHeader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-right: 10%;\n}\n\n.projectHeader button {\n    border: none;\n    border-radius: 6px;\n    background-color: #424245;\n    color: white;\n    height: 1.5rem;\n    width: 2rem;\n}\n\nli:hover {\n    background-color: #424245;\n    border-radius: 8px;\n    margin-right: 10%;\n}\n\nhr {\n    width: 80%;\n    height: 1px;\n    color: #d6d8db;\n    background-color: #d6d8db;\n    border: none;\n}\n\n/* Project Container CSS below */\n\n.openProjectContainer {\n    width: 60vw;\n    height: 60vh;\n    margin: 10%;\n    /* border: 1px solid red; */\n}\n\n.tableTaskView {\n    background-color: #2f2c2b;\n    border-radius: 12px;\n    width: 60vw;\n    height: 60vh;\n    margin-top: 20px;\n}\n\n.openProjectContainer h1 {\n    color: white;\n    margin-left: 10px;\n}\n\n.openProjectContainer button {\n    margin-left: 10px;\n    border: none;\n    border-radius: 8px;\n    background-color: white;\n    color: black;\n    height: 2.5rem;\n    width: 6rem;\n}\n\n/* Table CSS */\ntable {\n    width: 50vw;\n    text-align: center;\n}\n\n.tablePosition{\n    padding-top: 3%;\n    padding-left: 5%;\n    padding-right: 5%;\n}\n\ntr {\n    display: grid;\n    grid-template-columns: 1fr 3fr 2fr 1fr;\n    justify-items: start;\n    align-items: center;\n    color: white;\n    height: 40px;\n}\n\n.tableDataRow:hover {\n    background-color: #1a1a1c;\n    border-radius: 8px;\n}\n\n.tableHeaderRow {\n    background-color: #424245;\n    color: rgb(196, 191, 191);\n    border-radius: 8px;\n    \n}\n\n#high {\n    border: 1px solid #1ac964;\n    border-radius: 12px;\n    color: #1ac964;\n    background-color: #1f3c2b;\n    height: 1.2rem;\n    width: 3rem;\n    font-family: "Poppins-thin";\n}\n\n#med {\n    border: 1px solid #f5a523;\n    border-radius: 12px;\n    color: #f5a523;\n    background-color: #453421;\n    height: 1.2rem;\n    width: 3rem;\n    font-family: "Poppins-thin";\n}\n\n#low {\n    border: 1px solid #f54281;\n    border-radius: 12px;\n    color: #f54281;\n    background-color: #451c2a;\n    height: 1.2rem;\n    width: 3rem;\n    font-family: "Montserrat-thin";\n}\n\ninput[type="checkbox"] {\n    appearance: none;\n    -webkit-appearance: none;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    font-size: 1rem;\n    padding: 0.1rem;\n    border: 0.1rem solid #3f3f46;\n    border-radius: 0.5rem;\n  }\n\n  input[type="checkbox"]::before {\n    content: "";\n    width: 0.6rem;\n    height: 0.6rem;\n    transform: scale(0);\n    background-color: #3f3f46;\n  }\n\n  input[type="checkbox"]:checked::before {\n    transform: scale(1);\n  }\n\n  input[type="checkbox"]:hover {\n    color: black;\n  }\n  .icons {\n    height: 15px;\n    padding-right: 5px;\n  }',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var s=t(n,o),d=0;d<i.length;d++){var l=r(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),c=r(565),s=r.n(c),d=r(216),l=r.n(d),p=r(589),u=r.n(p),f=r(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,r.p;const g=document.querySelector(".projectList");let m=["Project One","Project Two","Project Three"];console.log("Hello World from the main file!"),m.forEach((n=>{const e=document.createElement("li");e.classList.add("list-name"),e.innerHTML=n,g.appendChild(e)}))})()})();