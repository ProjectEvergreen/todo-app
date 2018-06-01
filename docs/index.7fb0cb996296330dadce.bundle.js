!function(t){var e={};function s(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},s.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=8)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var s=function(t,e){var s=t[1]||"",o=t[3];if(!o)return s;if(e&&"function"==typeof btoa){var n=(r=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[s].concat(i).concat([n]).join("\n")}var r;return[s].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+s+"}":s}).join("")},e.i=function(t,s){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<t.length;n++){var r=t[n];"number"==typeof r[0]&&o[r[0]]||(s&&!r[2]?r[2]=s:s&&(r[2]="("+r[2]+") and ("+s+")"),e.push(r))}},e}},function(t,e,s){var o=s(9);t.exports="string"==typeof o?o:o.toString()},function(t,e,s){var o=s(10);t.exports="string"==typeof o?o:o.toString()},function(t,e,s){var o=s(11);t.exports="string"==typeof o?o:o.toString()},function(t,e,s){var o=s(12);t.exports="string"==typeof o?o:o.toString()},function(t,e,s){var o=s(13);t.exports="string"==typeof o?o:o.toString()},function(t,e,s){var o=s(14);t.exports="string"==typeof o?o:o.toString()},function(t,e,s){var o=s(15);t.exports="string"==typeof o?o:o.toString()},function(t,e,s){"use strict";s.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new Map,n=(t,...e)=>new i(t,e,"html");class i{constructor(t,e,s,o=_){this.strings=t,this.values=e,this.type=s,this.partCallback=o}getHTML(){const t=this.strings.length-1;let e="",s=!0;for(let o=0;o<t;o++){const t=this.strings[o];e+=t;const n=h(t);e+=(s=n>-1?n<t.length:s)?l:a}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}function r(t,e,s=function(t){let e=o.get(t.type);void 0===e&&(e=new Map,o.set(t.type,e));let s=e.get(t.strings);return void 0===s&&(s=new p(t,t.getTemplateElement()),e.set(t.strings,s)),s}){const n=s(t);let i=e.__templateInstance;if(void 0!==i&&i.template===n&&i._partCallback===t.partCallback)return void i.update(t.values);i=new N(n,t.partCallback,s),e.__templateInstance=i;const r=i._clone();i.update(t.values),w(e,e.firstChild),e.appendChild(r)}const a=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${a}--\x3e`,c=new RegExp(`${a}|${l}`),d=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;function h(t){const e=t.lastIndexOf(">");return t.indexOf("<",e+1)>-1?t.length:e}class u{constructor(t,e,s,o,n){this.type=t,this.index=e,this.name=s,this.rawName=o,this.strings=n}}class p{constructor(t,e){this.parts=[],this.element=e;const s=this.element.content,o=document.createTreeWalker(s,133,null,!1);let n=-1,i=0;const r=[];let l,h;for(;o.nextNode();){n++,l=h;const e=h=o.currentNode;if(1===e.nodeType){if(!e.hasAttributes())continue;const s=e.attributes;let o=0;for(let t=0;t<s.length;t++)s[t].value.indexOf(a)>=0&&o++;for(;o-- >0;){const o=t.strings[i],r=d.exec(o)[1],a=s.getNamedItem(r),l=a.value.split(c);this.parts.push(new u("attribute",n,a.name,r,l)),e.removeAttribute(a.name),i+=l.length-1}}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(a)<0)continue;const s=e.parentNode,o=t.split(c),l=o.length-1;i+=l;for(let t=0;t<l;t++)s.insertBefore(""===o[t]?document.createComment(""):document.createTextNode(o[t]),e),this.parts.push(new u("node",n++));s.insertBefore(""===o[l]?document.createComment(""):document.createTextNode(o[l]),e),r.push(e)}else if(8===e.nodeType&&e.nodeValue===a){const t=e.parentNode,s=e.previousSibling;null===s||s!==l||s.nodeType!==Node.TEXT_NODE?t.insertBefore(document.createComment(""),e):n--,this.parts.push(new u("node",n++)),r.push(e),null===e.nextSibling?t.insertBefore(document.createComment(""),e):n--,h=l,i++}}for(const t of r)t.parentNode.removeChild(t)}}const m=(t,e)=>x(e)?(e=e(t),g):null===e?void 0:e,f=t=>(t.__litDirective=!0,t),x=t=>"function"==typeof t&&!0===t.__litDirective,g={},v=t=>null===t||!("object"==typeof t||"function"==typeof t);class b{constructor(t,e,s,o){this.instance=t,this.element=e,this.name=s,this.strings=o,this.size=o.length-1,this._previousValues=[]}_interpolate(t,e){const s=this.strings,o=s.length-1;let n="";for(let i=0;i<o;i++){n+=s[i];const o=m(this,t[e+i]);if(o&&o!==g&&(Array.isArray(o)||"string"!=typeof o&&o[Symbol.iterator]))for(const t of o)n+=t;else n+=o}return n+s[o]}_equalToPreviousValues(t,e){for(let s=e;s<e+this.size;s++)if(this._previousValues[s]!==t[s]||!v(t[s]))return!1;return!0}setValue(t,e){if(this._equalToPreviousValues(t,e))return;const s=this.strings;let o;2===s.length&&""===s[0]&&""===s[1]?(o=m(this,t[e]),Array.isArray(o)&&(o=o.join(""))):o=this._interpolate(t,e),o!==g&&this.element.setAttribute(this.name,o),this._previousValues=t}}class y{constructor(t,e,s){this.instance=t,this.startNode=e,this.endNode=s,this._previousValue=void 0}setValue(t){if((t=m(this,t))!==g)if(v(t)){if(t===this._previousValue)return;this._setText(t)}else t instanceof i?this._setTemplateResult(t):Array.isArray(t)||t[Symbol.iterator]?this._setIterable(t):t instanceof Node?this._setNode(t):void 0!==t.then?this._setPromise(t):this._setText(t)}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_setNode(t){this._previousValue!==t&&(this.clear(),this._insert(t),this._previousValue=t)}_setText(t){const e=this.startNode.nextSibling;t=void 0===t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._setNode(document.createTextNode(t)),this._previousValue=t}_setTemplateResult(t){const e=this.instance._getTemplate(t);let s;this._previousValue&&this._previousValue.template===e?s=this._previousValue:(s=new N(e,this.instance._partCallback,this.instance._getTemplate),this._setNode(s._clone()),this._previousValue=s),s.update(t.values)}_setIterable(t){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);const e=this._previousValue;let s=0;for(const o of t){let t=e[s];if(void 0===t){let o=this.startNode;if(s>0){o=e[s-1].endNode=document.createTextNode(""),this._insert(o)}t=new y(this.instance,o,this.endNode),e.push(t)}t.setValue(o),s++}if(0===s)this.clear(),this._previousValue=void 0;else if(s<e.length){const t=e[s-1];e.length=s,this.clear(t.endNode.previousSibling),t.endNode=this.endNode}}_setPromise(t){this._previousValue=t,t.then(e=>{this._previousValue===t&&this.setValue(e)})}clear(t=this.startNode){w(this.startNode.parentNode,t.nextSibling,this.endNode)}}const _=(t,e,s)=>{if("attribute"===e.type)return new b(t,s,e.name,e.strings);if("node"===e.type)return new y(t,s,s.nextSibling);throw new Error(`Unknown part type ${e.type}`)};class N{constructor(t,e,s){this._parts=[],this.template=t,this._partCallback=e,this._getTemplate=s}update(t){let e=0;for(const s of this._parts)void 0===s.size?(s.setValue(t[e]),e++):(s.setValue(t,e),e+=s.size)}_clone(){const t=document.importNode(this.template.element.content,!0),e=this.template.parts;if(e.length>0){const s=document.createTreeWalker(t,133,null,!1);let o=-1;for(let t=0;t<e.length;t++){const n=e[t];for(;o<n.index;)o++,s.nextNode();this._parts.push(this._partCallback(this,n,s.currentNode))}}return t}}const T=(t,e,s=null,o=null)=>{let n=e;for(;n!==s;){const e=n.nextSibling;t.insertBefore(n,o),n=e}},w=(t,e,s=null)=>{let o=e;for(;o!==s;){const e=o.nextSibling;t.removeChild(o),o=e}};var E=s(7),k=s.n(E);customElements.define("pe-header",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"}),r(this.template(),this.root)}template(){return n`
      <style>
        ${k.a}
      </style>
      
      <header>        

        <h2 class="header-text">Todo App Example</h2>
    
      </header>
    `}});var V=s(6),S=s.n(V);customElements.define("pe-footer",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"}),r(this.template(),this.root)}template(){return n`
      <style>
        ${S.a}
      </style>
      
      <footer>
        <a href="https://projectevergreen.github.io">Project Evergreen</a>
      </footer>
    `}});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const $=(t,...e)=>new i(t,e,"html",C),C=(t,e,s)=>{if("attribute"===e.type){if("on-"===e.rawName.substr(0,3)){return new class{constructor(t,e,s){this.instance=t,this.element=e,this.eventName=s}setValue(t){const e=m(this,t);e!==this._listener&&(null==e?this.element.removeEventListener(this.eventName,this):null==this._listener&&this.element.addEventListener(this.eventName,this),this._listener=e)}handleEvent(t){"function"==typeof this._listener?this._listener.call(this.element,t):"function"==typeof this._listener.handleEvent&&this._listener.handleEvent(t)}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(t,s,e.rawName.slice(3))}const o=e.name.substr(e.name.length-1);if("$"===o){const o=e.name.slice(0,-1);return new b(t,s,o,e.strings)}if("?"===o){return new class extends b{setValue(t,e){const s=this.strings;if(2!==s.length||""!==s[0]||""!==s[1])throw new Error("boolean attributes can only contain a single expression");{const s=m(this,t[e]);if(s===g)return;s?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}}(t,s,e.name.slice(0,-1),e.strings)}return new class extends b{setValue(t,e){const s=this.strings;let o;this._equalToPreviousValues(t,e)||((o=2===s.length&&""===s[0]&&""===s[1]?m(this,t[e]):this._interpolate(t,e))!==g&&(this.element[this.name]=o),this._previousValues=t)}}(t,s,e.rawName,e.strings)}return _(t,e,s)};const M=new WeakMap;function A(t,e,s){t.startNode.parentNode||s.delete(e)}var L=class{static isValidTextInput(t){return t&&""!==t}},j=s(5),I=s.n(j);customElements.define("pe-badge",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"}),this._counter=0,this._condition="unmet",r(this.template(),this.root)}static get observedAttributes(){return["counter","condition"]}attributeChangedCallback(t,e,s){switch(t){case"counter":this._counter=parseInt(s,10)||0;break;case"condition":this._condition="true"===s?"met":"unmet"}r(this.template(),this.root)}template(){return $`
      <style>
        ${I.a}
      </style>

      <span class$=${this._condition}>${this._counter}</span>
    `}});var O=s(4),H=s.n(O);customElements.define("pe-todo-list-item",class extends HTMLElement{constructor(){super(),this._todo={},this.root=this.attachShadow({mode:"closed"}),r(this.template(),this.root)}static get observedAttributes(){return["todo"]}attributeChangedCallback(t,e,s=[]){switch(t){case"todo":this._todo=s?JSON.parse(s):{}}r(this.template(),this.root)}dispatchCompleteTodoEvent(){const t=new CustomEvent("completeTodo",{detail:this._todo.id});document.dispatchEvent(t)}dispatchDeleteTodoEvent(){const t=new CustomEvent("deleteTodo",{detail:this._todo.id});document.dispatchEvent(t)}template(){const t=this._todo.completed,e=t?"✅":"⛔";return $` 
      <style>
        ${H.a}
      </style>

      <span>
        ${this._todo.task}

        <input class="complete-todo" type="checkbox" checked=${t} onchange=${this.dispatchCompleteTodoEvent.bind(this)} />
        <span>${e}</span>
            
        <span class="delete-todo" onclick=${this.dispatchDeleteTodoEvent.bind(this)}>❌</span>
      </span>
    `}});var P=s(3),z=s.n(P);customElements.define("pe-todo-list",class extends HTMLElement{constructor(){super(),this.todos=[],this.root=this.attachShadow({mode:"closed"}),document.addEventListener("deleteTodo",t=>this.deleteTodo(t.detail)),document.addEventListener("completeTodo",t=>this.completeTodo(t.detail)),r(this.template(),this.root)}addTodo(){const t=this.root.getElementById("todo-input"),e=t.value;if(L.isValidTextInput(e)){const s=(new Date).getTime();this.todos.push({completed:!1,task:e,id:s,created:s}),t.value="",r(this.template(),this.root)}else console.warn("invalid input, please try again")}deleteTodo(t){this.todos=this.todos.filter(e=>e.id!==parseInt(t,10)),r(this.template(),this.root)}completeTodo(t){this.todos=this.todos.map(e=>(e.completed=e.id===parseInt(t,10)?!e.completed:e.completed,e)),r(this.template(),this.root)}template(){const t=this.todos.filter(t=>t.completed),e=0!==t.length&&t.length===this.todos.length;return $`
      <style>
        ${z.a}
      </style>
      
      <div>
        <h3><u>My Todo List 📝</u></h3>

        <h5>Completed Todos:<pe-badge counter$=${t.length} 
                                      condition$=${e}></pe-badge></h5>
        
        <form onsubmit=${()=>(this.addTodo(),!1)}>
          <input id="todo-input" type="text" placeholder="Food Shopping" required/>
          <button id="add-todo" type="submit">+ Add</button>
        </form>

        <ol>
          ${function(t,e,s){let o;return 2===arguments.length?s=e:3===arguments.length&&(o=e),f(e=>{if(!(e instanceof y))throw new Error("repeat can only be used on NodeParts");let n=M.get(e);void 0===n&&(n=new Map,M.set(e,n));const i=e.startNode.parentNode;let r=-1,a=e.startNode.nextSibling;for(const l of t){let t,c;try{t=s(l,++r),c=o?o(l):r}catch(t){console.error(t);continue}let d=n.get(c);if(void 0===d){const t=document.createTextNode(""),s=document.createTextNode("");i.insertBefore(t,a),i.insertBefore(s,a),d=new y(e.instance,t,s),void 0!==c&&n.set(c,d)}else if(a!==d.startNode){const t=d.endNode.nextSibling;a!==t&&T(i,d.startNode,t,a)}else a=d.endNode.nextSibling;d.setValue(t)}a!==e.endNode&&(w(i,a,e.endNode),n.forEach(A))})}(this.todos,t=>t.id,t=>$`
            <li><pe-todo-list-item todo$=${JSON.stringify(t)}></pe-todo-list-item></li>`)}
        </ol>
    
      </div>
    `}});var B=s(2),R=s.n(B);customElements.define("pe-home",class extends HTMLElement{constructor(){super(),this.todos=[],this.root=this.attachShadow({mode:"closed"}),r(this.template(),this.root)}template(){return n`
      <style>
        ${R.a}
      </style>

      <div>

        <pe-todo-list></pe-todo-list>

      </div>
    `}});var D=s(1),q=s.n(D);customElements.define("pe-app",class extends HTMLElement{constructor(){super(),this.root=this.attachShadow({mode:"closed"}),r(this.template(),this.root)}template(){return n`
      <style>
        ${q.a}
      </style>

      <div id="container">

        <section>
          <pe-header></pe-header>
        </section>
        
        <section>
          <pe-home></pe-home>
        </section>

        <section>
          <pe-footer></pe-footer>
        </section>

      </div>
    `}})},function(t,e,s){(t.exports=s(0)(!1)).push([t.i,"*{font-family:Raleway,sans-serif;font-size:1.2em}#container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}",""])},function(t,e,s){(t.exports=s(0)(!1)).push([t.i,":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin-bottom:15px}:host h3{margin:10px;text-decoration:underline}",""])},function(t,e,s){(t.exports=s(0)(!1)).push([t.i,":host li{text-align:left;padding-left:10px;font-size:.8em}",""])},function(t,e,s){(t.exports=s(0)(!1)).push([t.i,":host span.delete-todo{cursor:pointer}",""])},function(t,e,s){(t.exports=s(0)(!1)).push([t.i,":host{border-radius:20px;width:20px;display:inline-block;text-align:center}:host .met{background-color:#90ee90}:host .unmet{background-color:none}",""])},function(t,e,s){(t.exports=s(0)(!1)).push([t.i,":host{color:gray;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin:40px 0 0}:host a{font-size:.5em}",""])},function(t,e,s){(t.exports=s(0)(!1)).push([t.i,":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin-bottom:40px;cursor:pointer}:host .header-text{margin:0 auto}",""])}]);