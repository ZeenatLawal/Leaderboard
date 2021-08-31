(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(645),a=e.n(t)()((function(n){return n[1]}));a.push([n.id,"*,\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: white;\r\n}\r\n\r\nh1 {\r\n  padding: 20px 10px;\r\n  text-align: left;\r\n}\r\n\r\nh2 {\r\n  padding: 20px 0;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n.main {\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  margin: 120px 170px;\r\n}\r\n\r\n#board {\r\n  list-style-type: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 1px solid black;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#board li,\r\n.input {\r\n  padding: 10px;\r\n}\r\n\r\n#board li:nth-child(even) {\r\n  background-color: gray;\r\n}\r\n\r\nform {\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\n\r\n.scores {\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.card {\r\n  width: 45%;\r\n}\r\n\r\n.input {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.submit {\r\n  justify-content: flex-end;\r\n}\r\n\r\n#submitBtn,\r\n#refreshBtn {\r\n  margin: 10px;\r\n  padding: 8px;\r\n  border-radius: 6px;\r\n  width: 100px;\r\n}\r\n",""]);const o=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(t)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&a[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=e(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(r[p].references++,r[p].updater(f)):r.push({identifier:l,updater:a(f,t),references:1}),i.push(l)}return i}function a(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e.update(n=r)}else e.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=e(o[i]);r[s].references--}for(var c=t(n,a),d=0;d<o.length;d++){var u=e(o[d]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}o=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t=e.css,a=e.media,o=e.sourceMap;a?n.setAttribute("media",a):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(t,n)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var a=r[t];if(void 0!==a)return a.exports;var o=r[t]={id:t,exports:{}};return n[t](o,o.exports,e),o.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=e(379),r=e.n(n),t=e(795),a=e.n(t),o=e(569),i=e.n(o),s=e(565),c=e.n(s),d=e(216),u=e.n(d),l=e(589),p=e.n(l),f=e(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=document.getElementById("board"),h=[{name:"Zeenat",score:100},{name:"Safa",score:100},{name:"Aleks",score:100}];window.addEventListener("load",(()=>{v.innerHTML="",h.forEach((n=>{const r=`${n.name}: ${n.score}`,e=document.createElement("li");e.innerText=r,e.className="list-item",v.appendChild(e)}))}))})()})();