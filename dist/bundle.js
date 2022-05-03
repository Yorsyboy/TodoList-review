(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),d=t.n(i)()(o());d.push([n.id,"* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: content-box;\r\n}\r\n\r\n:root {\r\n  --dflex: flex;\r\n}\r\n\r\n#container {\r\n  display: var(--dflex);\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 5% 10%;\r\n  border: 1px solid #e7e6e6;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.heading {\r\n  display: var(--dflex);\r\n  justify-content: space-between;\r\n  padding: 20px 40px;\r\n}\r\n\r\n.heading h1 {\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n}\r\n\r\n.heading button {\r\n  border: none;\r\n  background-color: transparent;\r\n  color: dimgrey;\r\n  width: 30px;\r\n}\r\n\r\nhr {\r\n  border: 1px solid #e7e6e6;\r\n}\r\n\r\n.add-new-todo {\r\n  display: var(--dflex);\r\n  justify-content: space-between;\r\n  padding: 20px 40px;\r\n}\r\n\r\n.add-new-todo input {\r\n  width: 80%;\r\n  border: none;\r\n}\r\n\r\n.add-new-todo input:enabled {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.add-new-todo button {\r\n  border: none;\r\n  background-color: transparent;\r\n  color: dimgrey;\r\n  width: 30px;\r\n}\r\n\r\n.action {\r\n  display: var(--dflex);\r\n  gap: 0 10px;\r\n}\r\n\r\n.action > button {\r\n  background-color: #6969691c !important;\r\n  padding: 7px 1px;\r\n  border-radius: 100%;\r\n}\r\n\r\n#todo-list {\r\n  list-style: none;\r\n}\r\n\r\n#todo-list .todo {\r\n  display: var(--dflex);\r\n  justify-content: space-between;\r\n  padding: 20px 40px;\r\n  align-items: center;\r\n}\r\n\r\n#todo-list .todo h2 {\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n}\r\n\r\n#todo-list .todo div {\r\n  display: var(--dflex);\r\n  justify-content: space-between;\r\n  gap: 15px;\r\n  align-items: center;\r\n}\r\n\r\n#todo-list .todo button {\r\n  border: none;\r\n  background-color: transparent;\r\n  color: dimgrey;\r\n  width: 30px;\r\n}\r\n\r\n#clear-completed-button {\r\n  padding: 20px 40px;\r\n  border: none;\r\n  background-color: #f5f5f5;\r\n}\r\n",""]);const a=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var d={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},d=[],a=0;a<n.length;a++){var c=n[a],s=r.base?c[0]+r.base:c[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,r);r.byIndex=a,e.splice(a,0,{identifier:p,updater:g,references:1})}d.push(p)}return d}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var d=0;d<i.length;d++){var a=t(i[d]);e[a].references--}for(var c=r(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),d=t.n(i),a=t(565),c=t.n(a),s=t(216),l=t.n(s),p=t(589),u=t.n(p),f=t(426),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=d().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const m=()=>{const n=localStorage.getItem("todoList");return JSON.parse(n)},b=()=>{const n=m(),e=document.getElementById("todo-list");e.innerHTML="",n&&n.forEach((n=>{e.innerHTML+=`\n          <li><hr></li>\n          <li class="todo ${n.editable?"active":""}" >\n              <div>\n                <input type="checkbox" name="checkbox" id="checkbox_${n.id}" ${n.completed?"checked":""}>\n                <input id="input_${n.id}" ${n.editable?"":'disabled="true"'} value="${n.description}" class="borderless ${n.completed?"edit":""} " />\n              </div>\n              <section class="action">\n                <button type="button" ${n.editable?"hidden":""} id="toggleMode_${n.id}" class="fa fa-pencil"></button>\n                <button type="button" ${n.editable?"":"hidden"} id="save_${n.id}" class="fa fa-check"></button>\n                <button  type="button" ${n.editable?"":"hidden"} id="delete_${n.id}" class="fa fa-close"></button>\n              </section>\n          </li>\n        `}))};b();const v=n=>{n.length>0?localStorage.setItem("todoList",JSON.stringify(n)):localStorage.clear()},h=(n,e)=>{const t=m(),r=t.findIndex((t=>`${e}_${t.id}`===n));t[r].editable=!t[r].editable,v(t),b()};document.addEventListener("DOMContentLoaded",(()=>{document.querySelector("form").addEventListener("submit",(n=>{n.preventDefault();(n=>{const e={completed:!1,description:n,id:Math.random().toString(16).slice(2),editable:!1,index:1},t=m();let r=[];null!==t?(e.index=t.length+1,r=[...m(),e]):r.push(e),v(r),document.getElementById("todoListInput").value="",b()})(new FormData(n.target).get("new-todo"))})),document.getElementById("todo-list").addEventListener("click",(n=>{if("checkbox"===n.target.type)(n=>{const e=m(),t=document.getElementById(n).checked,r=e.findIndex((e=>`checkbox_${e.id}`===n));e[r].completed=t,v(e),b()})(n.target.id);else if("button"===n.target.type){const e=String(n.target.id);-1!==e.indexOf("save")&&((n,e)=>{const t=document.getElementById(`input_${n.split("_")[1]}`),r=m(),o=r.findIndex((e=>`save_${e.id}`===n));r[o].description=t.value,v(r),h(`toggleMode_${n.split("_")[1]}`,"toggleMode")})(n.target.id),-1!==e.indexOf("delete")&&((n,e)=>{const t=m(),r=t.findIndex((e=>`delete_${e.id}`===n));t.splice(r,1);for(let n=0;n<t.length;n+=1)t[n].index=n+1;v(t),b()})(n.target.id),-1!==e.indexOf("toggleMode")&&h(n.target.id,"toggleMode")}})),document.getElementById("clear-completed-button").addEventListener("click",(()=>{(()=>{const n=m();if(n){let e=n.length;for(;e>0;)n[e-1].completed&&n.filter(e-1,1),e-=1;v(n),b()}})()}))})),document.addEventListener("load",b())})()})();