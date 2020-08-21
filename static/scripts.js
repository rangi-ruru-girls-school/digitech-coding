!function(){"use strict";function t(e,n,i){return n=void 0===n?1:n,i=i||n+1,i-n<=1?function(){if(arguments.length<=n||"string"===r.type(arguments[n]))return e.apply(this,arguments);var t,i=arguments[n];for(var o in i){var s=Array.prototype.slice.call(arguments);s.splice(n,1,o,i[o]),t=e.apply(this,s)}return t}:t(t(e,n+1,i),n,i-1)}function e(t,r,i){var o=n(i);if("string"===o){var s=Object.getOwnPropertyDescriptor(r,i);!s||s.writable&&s.configurable&&s.enumerable&&!s.get&&!s.set?t[i]=r[i]:(delete t[i],Object.defineProperty(t,i,s))}else if("array"===o)i.forEach(function(n){n in r&&e(t,r,n)});else for(var a in r)i&&("regexp"===o&&!i.test(a)||"function"===o&&!i.call(r,a))||e(t,r,a);return t}function n(t){if(null===t)return"null";if(void 0===t)return"undefined";var e=(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase();return"number"==e&&isNaN(t)?"nan":e}var r=self.Bliss=e(function(t,e){return 2==arguments.length&&!e||!t?null:"string"===r.type(t)?(e||document).querySelector(t):t||null},self.Bliss);e(r,{extend:e,overload:t,type:n,property:r.property||"_",listeners:self.WeakMap?new WeakMap:new Map,original:{addEventListener:(self.EventTarget||Node).prototype.addEventListener,removeEventListener:(self.EventTarget||Node).prototype.removeEventListener},sources:{},noop:function(){},$:function(t,e){return t instanceof Node||t instanceof Window?[t]:2!=arguments.length||e?Array.prototype.slice.call("string"==typeof t?(e||document).querySelectorAll(t):t||[]):[]},defined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},create:function(t,e){return t instanceof Node?r.set(t,e):(1===arguments.length&&("string"===r.type(t)?e={}:(e=t,t=e.tag,e=r.extend({},e,function(t){return"tag"!==t}))),r.set(document.createElement(t||"div"),e))},each:function(t,e,n){n=n||{};for(var r in t)n[r]=e.call(t,r,t[r]);return n},ready:function(t,e,n){if("function"!=typeof t||e||(e=t,t=void 0),t=t||document,e&&("loading"!==t.readyState?e():r.once(t,"DOMContentLoaded",function(){e()})),!n)return new Promise(function(e){r.ready(t,e,!0)})},Class:function(t){var e,n=["constructor","extends","abstract","static"].concat(Object.keys(r.classProps)),i=t.hasOwnProperty("constructor")?t.constructor:r.noop;2==arguments.length?(e=arguments[0],t=arguments[1]):(e=function(){if(this.constructor.__abstract&&this.constructor===e)throw new Error("Abstract classes cannot be directly instantiated.");e["super"]&&e["super"].apply(this,arguments),i.apply(this,arguments)},e["super"]=t["extends"]||null,e.prototype=r.extend(Object.create(e["super"]?e["super"].prototype:Object),{constructor:e}),e.prototype["super"]=e["super"]?e["super"].prototype:null,e.__abstract=!!t["abstract"]);var o=function(t){return this.hasOwnProperty(t)&&n.indexOf(t)===-1};if(t["static"]){r.extend(e,t["static"],o);for(var s in r.classProps)s in t["static"]&&r.classProps[s](e,t["static"][s])}r.extend(e.prototype,t,o);for(var s in r.classProps)s in t&&r.classProps[s](e.prototype,t[s]);return e},classProps:{lazy:t(function(t,e,n){return Object.defineProperty(t,e,{get:function(){var t=n.call(this);return Object.defineProperty(this,e,{value:t,configurable:!0,enumerable:!0,writable:!0}),t},set:function(t){Object.defineProperty(this,e,{value:t,configurable:!0,enumerable:!0,writable:!0})},configurable:!0,enumerable:!0}),t}),live:t(function(t,e,n){return"function"===r.type(n)&&(n={set:n}),Object.defineProperty(t,e,{get:function(){var t=this["_"+e],r=n.get&&n.get.call(this,t);return void 0!==r?r:t},set:function(t){var r=this["_"+e],i=n.set&&n.set.call(this,t,r);this["_"+e]=void 0!==i?i:t},configurable:n.configurable,enumerable:n.enumerable}),t})},include:function(){var t=arguments[arguments.length-1],e=2===arguments.length&&arguments[0],n=document.createElement("script");return e?Promise.resolve():new Promise(function(e,i){r.set(n,{async:!0,onload:function(){e(n),n.parentNode&&n.parentNode.removeChild(n)},onerror:function(){i(n)},src:t,inside:document.head})})},load:function o(t,e){e=e?new URL(e,location.href):location.href,t=new URL(t,e);var n=o.loading=o.loading||{};return n[t+""]?n[t+""]:/\.css$/.test(t.pathname)?n[t+""]=new Promise(function(e,n){var i=r.create("link",{href:t,rel:"stylesheet",inside:document.head,onload:function(){e(i)},onerror:function(){n(i)}})}):n[t+""]=r.include(t)},fetch:function(t,n){if(!t)throw new TypeError("URL parameter is mandatory and cannot be "+t);var i=e({url:new URL(t,location),data:"",method:"GET",headers:{},xhr:new XMLHttpRequest},n);i.method=i.method.toUpperCase(),r.hooks.run("fetch-args",i),"GET"===i.method&&i.data&&(i.url.search+=i.data),document.body.setAttribute("data-loading",i.url),i.xhr.open(i.method,i.url.href,i.async!==!1,i.user,i.password);for(var o in n)if("upload"===o)i.xhr.upload&&"object"==typeof n[o]&&r.extend(i.xhr.upload,n[o]);else if(o in i.xhr)try{i.xhr[o]=n[o]}catch(s){self.console&&console.error(s)}var a=Object.keys(i.headers).map(function(t){return t.toLowerCase()});"GET"!==i.method&&a.indexOf("content-type")===-1&&i.xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");for(var c in i.headers)void 0!==i.headers[c]&&i.xhr.setRequestHeader(c,i.headers[c]);var u=new Promise(function(t,e){i.xhr.onload=function(){document.body.removeAttribute("data-loading"),0===i.xhr.status||i.xhr.status>=200&&i.xhr.status<300||304===i.xhr.status?t(i.xhr):e(r.extend(Error(i.xhr.statusText),{xhr:i.xhr,get status(){return this.xhr.status}}))},i.xhr.onerror=function(){document.body.removeAttribute("data-loading"),e(r.extend(Error("Network Error"),{xhr:i.xhr}))},i.xhr.ontimeout=function(){document.body.removeAttribute("data-loading"),e(r.extend(Error("Network Timeout"),{xhr:i.xhr}))},i.xhr.send("GET"===i.method?null:i.data)});return u.xhr=i.xhr,u},value:function(t){var e="string"!=typeof t;return r.$(arguments).slice(+e).reduce(function(t,e){return t&&t[e]},e?t:self)}}),r.Hooks=new r.Class({add:function(t,e,n){if("string"==typeof arguments[0])(Array.isArray(t)?t:[t]).forEach(function(t){this[t]=this[t]||[],e&&this[t][n?"unshift":"push"](e)},this);else for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1])},run:function(t,e){this[t]=this[t]||[],this[t].forEach(function(t){t.call(e&&e.context?e.context:e,e)})}}),r.hooks=new r.Hooks;r.property;r.Element=function(t){this.subject=t,this.data={},this.bliss={}},r.Element.prototype={set:t(function(t,e){t in r.setProps?r.setProps[t].call(this,e):t in this?this[t]=e:this.setAttribute(t,e)},0),transition:function(t,e){return new Promise(function(n,i){if("transition"in this.style&&0!==e){var o=r.extend({},this.style,/^transition(Duration|Property)$/);r.style(this,{transitionDuration:(e||400)+"ms",transitionProperty:Object.keys(t).join(", ")}),r.once(this,"transitionend",function(){clearTimeout(s),r.style(this,o),n(this)});var s=setTimeout(n,e+50,this);r.style(this,t)}else r.style(this,t),n(this)}.bind(this))},fire:function(t,e){var n=document.createEvent("HTMLEvents");return n.initEvent(t,!0,!0),this.dispatchEvent(r.extend(n,e))},bind:t(function(t,e){if(arguments.length>1&&("function"===r.type(e)||e.handleEvent)){var n=e;e="object"===r.type(arguments[2])?arguments[2]:{capture:!!arguments[2]},e.callback=n}var i=r.listeners.get(this)||{};t.trim().split(/\s+/).forEach(function(t){if(t.indexOf(".")>-1){t=t.split(".");var n=t[1];t=t[0]}i[t]=i[t]||[],0===i[t].filter(function(t){return t.callback===e.callback&&t.capture==e.capture}).length&&i[t].push(r.extend({className:n},e)),r.original.addEventListener.call(this,t,e.callback,e)},this),r.listeners.set(this,i)},0),unbind:t(function(t,e){if(e&&("function"===r.type(e)||e.handleEvent)){var n=e;e=arguments[2]}"boolean"==r.type(e)&&(e={capture:e}),e=e||{},e.callback=e.callback||n;var i=r.listeners.get(this);(t||"").trim().split(/\s+/).forEach(function(t){if(t.indexOf(".")>-1){t=t.split(".");var n=t[1];t=t[0]}if(i){for(var o in i)if(!t||o===t)for(var s,a=0;s=i[o][a];a++)n&&n!==s.className||e.callback&&e.callback!==s.callback||!!e.capture!=!!s.capture&&(t||e.callback||void 0!==e.capture)||(i[o].splice(a,1),r.original.removeEventListener.call(this,o,s.callback,s.capture),a--)}else if(t&&e.callback)return r.original.removeEventListener.call(this,t,e.callback,e.capture)},this)},0),when:function(t,e){var n=this;return new Promise(function(r){n.addEventListener(t,function i(n){e&&!e.call(this,n)||(this.removeEventListener(t,i),r(n))})})},toggleAttribute:function(t,e,n){arguments.length<3&&(n=null!==e),n?this.setAttribute(t,e):this.removeAttribute(t)}},r.setProps={style:function(t){for(var e in t)e in this.style?this.style[e]=t[e]:this.style.setProperty(e,t[e])},attributes:function(t){for(var e in t)this.setAttribute(e,t[e])},properties:function(t){r.extend(this,t)},events:function(t){if(1!=arguments.length||!t||!t.addEventListener)return r.bind.apply(this,[this].concat(r.$(arguments)));var e=this;if(r.listeners){var n=r.listeners.get(t);for(var i in n)n[i].forEach(function(t){r.bind(e,i,t.callback,t.capture)})}for(var o in t)0===o.indexOf("on")&&(this[o]=t[o])},once:t(function(t,e){var n=this,i=function(){return r.unbind(n,t,i),e.apply(n,arguments)};r.bind(this,t,i,{once:!0})},0),delegate:t(function(t,e,n){r.bind(this,t,function(t){t.target.closest(e)&&n.call(this,t)})},0,2),contents:function(t){(t||0===t)&&(Array.isArray(t)?t:[t]).forEach(function(t){var e=r.type(t);/^(string|number)$/.test(e)?t=document.createTextNode(t+""):"object"===e&&(t=r.create(t)),t instanceof Node&&this.appendChild(t)},this)},inside:function(t){t&&t.appendChild(this)},before:function(t){t&&t.parentNode.insertBefore(this,t)},after:function(t){t&&t.parentNode.insertBefore(this,t.nextSibling)},start:function(t){t&&t.insertBefore(this,t.firstChild)},around:function(t){t&&t.parentNode&&r.before(this,t),this.appendChild(t)}},r.Array=function(t){this.subject=t},r.Array.prototype={all:function(t){var e=r.$(arguments).slice(1);return this[t].apply(this,e)}},r.add=t(function(t,e,n,i){n=r.extend({$:!0,element:!0,array:!0},n),"function"==r.type(e)&&(!n.element||t in r.Element.prototype&&i||(r.Element.prototype[t]=function(){return this.subject&&r.defined(e.apply(this.subject,arguments),this.subject)}),!n.array||t in r.Array.prototype&&i||(r.Array.prototype[t]=function(){var t=arguments;return this.subject.map(function(n){return n&&r.defined(e.apply(n,t),n)})}),n.$&&(r.sources[t]=r[t]=e,(n.array||n.element)&&(r[t]=function(){var e=[].slice.apply(arguments),i=e.shift(),o=n.array&&Array.isArray(i)?"Array":"Element";return r[o].prototype[t].apply({subject:i},e)})))},0),r.add(r.Array.prototype,{element:!1}),r.add(r.Element.prototype),r.add(r.setProps),r.add(r.classProps,{element:!1,array:!1});var i=document.createElement("_");r.add(r.extend({},HTMLElement.prototype,function(t){return"function"===r.type(i[t])}),null,!0)}();
/* jsep v0.3.4 (http://jsep.from.so/) */
!function(e){"use strict";var C="Compound",U="MemberExpression",w="Literal",k=function(e,r){var t=new Error(e+" at character "+r);throw t.index=r,t.description=e,t},O={"-":!0,"!":!0,"~":!0,"+":!0},S={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},r=function(e){var r,t=0;for(var n in e)(r=n.length)>t&&e.hasOwnProperty(n)&&(t=r);return t},j=r(O),A=r(S),P={true:!0,false:!1,null:null},L=function(e){return S[e]||0},B=function(e,r,t){return{type:"||"===e||"&&"===e?"LogicalExpression":"BinaryExpression",operator:e,left:r,right:t}},M=function(e){return 48<=e&&e<=57},q=function(e){return 36===e||95===e||65<=e&&e<=90||97<=e&&e<=122||128<=e&&!S[String.fromCharCode(e)]},J=function(e){return 36===e||95===e||65<=e&&e<=90||97<=e&&e<=122||48<=e&&e<=57||128<=e&&!S[String.fromCharCode(e)]},t=function(n){for(var e,r,p=0,t=n.charAt,o=n.charCodeAt,i=function(e){return t.call(n,e)},u=function(e){return o.call(n,e)},s=n.length,f=function(){for(var e=u(p);32===e||9===e||10===e||13===e;)e=u(++p)},c=function(){var e,r,t=a();return f(),63!==u(p)?t:(p++,(e=c())||k("Expected expression",p),f(),58===u(p)?(p++,(r=c())||k("Expected expression",p),{type:"ConditionalExpression",test:t,consequent:e,alternate:r}):void k("Expected :",p))},l=function(){f();for(var e=n.substr(p,A),r=e.length;0<r;){if(S.hasOwnProperty(e)&&(!q(u(p))||p+e.length<n.length&&!J(u(p+e.length))))return p+=r,e;e=e.substr(0,--r)}return!1},a=function(){var e,r,t,n,o,i,a,u,s;if(i=h(),!(r=l()))return i;for(o={value:r,prec:L(r)},(a=h())||k("Expected expression after "+r,p),n=[i,o,a];(r=l())&&0!==(t=L(r));){for(o={value:r,prec:t},s=r;2<n.length&&t<=n[n.length-2].prec;)a=n.pop(),r=n.pop().value,i=n.pop(),e=B(r,i,a),n.push(e);(e=h())||k("Expected expression after "+s,p),n.push(o,e)}for(e=n[u=n.length-1];1<u;)e=B(n[u-1].value,n[u-2],e),u-=2;return e},h=function(){var e,r,t;if(f(),e=u(p),M(e)||46===e)return d();if(39===e||34===e)return v();if(91===e)return b();for(t=(r=n.substr(p,j)).length;0<t;){if(O.hasOwnProperty(r)&&(!q(u(p))||p+r.length<n.length&&!J(u(p+r.length))))return p+=t,{type:"UnaryExpression",operator:r,argument:h(),prefix:!0};r=r.substr(0,--t)}return!(!q(e)&&40!==e)&&g()},d=function(){for(var e,r,t="";M(u(p));)t+=i(p++);if(46===u(p))for(t+=i(p++);M(u(p));)t+=i(p++);if("e"===(e=i(p))||"E"===e){for(t+=i(p++),"+"!==(e=i(p))&&"-"!==e||(t+=i(p++));M(u(p));)t+=i(p++);M(u(p-1))||k("Expected exponent ("+t+i(p)+")",p)}return r=u(p),q(r)?k("Variable names cannot start with a number ("+t+i(p)+")",p):46===r&&k("Unexpected period",p),{type:w,value:parseFloat(t),raw:t}},v=function(){for(var e,r="",t=i(p++),n=!1;p<s;){if((e=i(p++))===t){n=!0;break}if("\\"===e)switch(e=i(p++)){case"n":r+="\n";break;case"r":r+="\r";break;case"t":r+="\t";break;case"b":r+="\b";break;case"f":r+="\f";break;case"v":r+="\v";break;default:r+=e}else r+=e}return n||k('Unclosed quote after "'+r+'"',p),{type:w,value:r,raw:t+r+t}},x=function(){var e,r=u(p),t=p;for(q(r)?p++:k("Unexpected "+i(p),p);p<s&&(r=u(p),J(r));)p++;return e=n.slice(t,p),P.hasOwnProperty(e)?{type:w,value:P[e],raw:e}:"this"===e?{type:"ThisExpression"}:{type:"Identifier",name:e}},y=function(e){for(var r,t,n=[],o=!1,i=0;p<s;){if(f(),(r=u(p))===e){o=!0,p++,41===e&&i&&i>=n.length&&k("Unexpected token "+String.fromCharCode(e),p);break}if(44===r){if(p++,++i!==n.length)if(41===e)k("Unexpected token ,",p);else if(93===e)for(var a=n.length;a<i;a++)n.push(null)}else(t=c())&&t.type!==C||k("Expected comma",p),n.push(t)}return o||k("Expected "+String.fromCharCode(e),p),n},g=function(){var e,r;for(r=40===(e=u(p))?m():x(),f(),e=u(p);46===e||91===e||40===e;)p++,46===e?(f(),r={type:U,computed:!1,object:r,property:x()}):91===e?(r={type:U,computed:!0,object:r,property:c()},f(),93!==(e=u(p))&&k("Unclosed [",p),p++):40===e&&(r={type:"CallExpression",arguments:y(41),callee:r}),f(),e=u(p);return r},m=function(){p++;var e=c();if(f(),41===u(p))return p++,e;k("Unclosed (",p)},b=function(){return p++,{type:"ArrayExpression",elements:y(93)}},E=[];p<s;)59===(e=u(p))||44===e?p++:(r=c())?E.push(r):p<s&&k('Unexpected "'+i(p)+'"',p);return 1===E.length?E[0]:{type:C,body:E}};if(t.version="0.3.4",t.toString=function(){return"JavaScript Expression Parser (JSEP) v"+t.version},t.addUnaryOp=function(e){return j=Math.max(e.length,j),O[e]=!0,this},t.addBinaryOp=function(e,r){return A=Math.max(e.length,A),S[e]=r,this},t.addLiteral=function(e,r){return P[e]=r,this},t.removeUnaryOp=function(e){return delete O[e],e.length===j&&(j=r(O)),this},t.removeAllUnaryOps=function(){return O={},j=0,this},t.removeBinaryOp=function(e){return delete S[e],e.length===A&&(A=r(S)),this},t.removeAllBinaryOps=function(){return S={},A=0,this},t.removeLiteral=function(e){return delete P[e],this},t.removeAllLiterals=function(){return P={},this},"undefined"==typeof exports){var n=e.jsep;(e.jsep=t).noConflict=function(){return e.jsep===t&&(e.jsep=n),t}}else"undefined"!=typeof module&&module.exports?exports=module.exports=t:exports.parse=t}(this);
//# sourceMappingURL=jsep.min.js.map
!function(){if(self.Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||null),Element.prototype.matches)){var p=self.Stretchy={selectors:{base:'textarea, select:not([size]), input:not([type]), input[type="'+"text number url email tel".split(" ").join('"], input[type="')+'"]',filter:"*"},script:document.currentScript||t("script").pop(),resize:function(e){if(p.resizes(e)){var t,i=getComputedStyle(e),n=0;!e.value&&e.placeholder&&(t=!0,e.value=e.placeholder);var o=e.nodeName.toLowerCase();if("textarea"==o)e.style.height="0","border-box"==i.boxSizing?n=e.offsetHeight:"content-box"==i.boxSizing&&(n=-e.clientHeight+parseFloat(i.minHeight)),e.style.height=e.scrollHeight+n+"px";else if("input"==o)if(e.style.width="1000px",e.offsetWidth){e.style.width="0",
"border-box"==i.boxSizing?n=e.offsetWidth:"padding-box"==i.boxSizing?n=e.clientWidth:"content-box"==i.boxSizing&&(n=parseFloat(i.minWidth));var r=Math.max(n,e.scrollWidth-e.clientWidth);e.style.width=r+"px";for(var l=0;l<10&&(e.scrollLeft=1e10,0!=e.scrollLeft);l++)r+=e.scrollLeft,e.style.width=r+"px"}else e.style.width=e.value.length+1+"ch";else if("select"==o){var s,c=0<e.selectedIndex?e.selectedIndex:0,a=document.createElement("_");for(var d in a.textContent=e.options[c].textContent,e.parentNode.insertBefore(a,e.nextSibling),i){var h=i[d];/^(width|webkitLogicalWidth|length)$/.test(d)||"string"!=typeof h||(a.style[d]=h,/appearance$/i.test(d)&&(s=d))}a.style.width="",0<a.offsetWidth&&(e.style.width=a.offsetWidth+"px",i[s]&&"none"===i[s]||(e.style.width="calc("+e.style.width+" + 2em)")),a.parentNode.removeChild(a),a=null}t&&(e.value="")}},resizeAll:function(e){t(e||p.selectors.base).forEach(function(e){p.resize(e)})},active:!0,resizes:function(e){
return e&&e.parentNode&&e.matches&&e.matches(p.selectors.base)&&e.matches(p.selectors.filter)},init:function(){p.selectors.filter=p.script.getAttribute("data-filter")||(t("[data-stretchy-filter]").pop()||document.body).getAttribute("data-stretchy-filter")||p.selectors.filter,p.resizeAll(),self.MutationObserver&&!p.observer&&(p.observer=new MutationObserver(function(e){p.active&&e.forEach(function(e){"childList"==e.type&&p.resizeAll(e.addedNodes)})}),p.observer.observe(document.documentElement,{childList:!0,subtree:!0}))},$$:t};"loading"!==document.readyState?requestAnimationFrame(p.init):document.addEventListener("DOMContentLoaded",p.init),window.addEventListener("load",function(){p.resizeAll()});var e=function(e){p.active&&p.resize(e.target)};document.documentElement.addEventListener("input",e),document.documentElement.addEventListener("change",e)}function t(e,t){return e instanceof Node||e instanceof Window?[e]:[].slice.call("string"==typeof e?(t||document).querySelectorAll(e):e||[])
}}();
//# sourceMappingURL=stretchy.min.js.map

/**
 * Mavo: Create web applications by writing HTML and CSS!
 * @author Lea Verou and contributors
 * @version v0.2.1
 */

 Stretchy.selectors.filter = ".mv-editor:not([property]), .mv-autosize";

(async function ($, $$) {

// Define $ and $$ if they are not already defined
// Primarily for backwards compat since we used to use Bliss Full.
self.$ = self.$ || $;
self.$$ = self.$$ || $$;

var _ = self.Mavo = $.Class({
	constructor: function (element) {
		this.treeBuilt = Mavo.promise();
		this.dataLoaded = Mavo.promise();
		this.deleted = [];

		this.element = element;

		this.inProgress = false;

		// Index among other mavos in the page, 1 is first
		this.index = Object.keys(_.all).length + 1;
		Object.defineProperty(_.all, this.index - 1, {value: this, configurable: true});

		// Convert any data-mv-* attributes to mv-*
		Mavo.attributeStartsWith("data-mv-", this.element).forEach(attribute => {
			var element = attribute.ownerElement;
			var name = attribute.name.replace("data-", "");

			if (!element.attributes[name]) {
				element.setAttribute(name, attribute.value);
			}
		});

		// Assign a unique (for the page) id to this mavo instance
		this.id = Mavo.getAttribute(this.element, "mv-app", "id") || `mavo${this.index}`;

		if (this.id in _.all) {
			// Duplicate app name
			for (var i=2; this.id + i in _.all; i++) {}
			this.id = this.id + i;
		}

		_.all[this.id] = this;
		this.element.setAttribute("mv-app", this.id);

		this.observe({attribute: "lang", deep: false}, () => {
			var lang = Mavo.getClosestAttribute(this.element, "lang") || Mavo.locale;
			this.locale = Mavo.Locale.get(lang);
		})();

		// Should we start in edit mode?
		this.autoEdit = this.element.classList.contains("mv-autoedit");

		// Should we save automatically?
		this.autoSave = this.element.hasAttribute("mv-autosave");
		this.autoSaveDelay = (this.element.getAttribute("mv-autosave") || 0) * 1000;

		Mavo.setAttributeShy(this.element, "typeof", "");

		Mavo.hooks.run("init-start", this);

		// ----- Heuristic for groups ------

		// First, add property attributes to mv-multiple elements without one
		$$(_.selectors.multiple, this.element).forEach(element => {
			_.setAttributeShy(element, "property", "");
		});

		// Now, turn properties that contain other properties into groups
		$$(_.selectors.primitive, this.element).forEach(element => {
			if ($(_.selectors.property, element)) { // contains other properties
				var config = Mavo.Primitive.getConfig(element);

				if (!config.attribute && !config.hasChildren || Mavo.is("multiple", element)) {
					Mavo.setAttributeShy(element, "typeof", "");
				}
			}
		});

		this.expressions = new Mavo.Expressions(this);

		this.observer = new Mavo.Observer(this.element, null, records => {
			if (!this.observers && !_.observers) {
				return;
			}

			let observers = [
				...(this.observers?.entries() ?? []),
				...(_.observers?.entries() ?? []),
			];

			for (let r of records) {
				let node = Mavo.Node.get(r.target, true);

				for (let [o, callback] of observers) {
					if (o.active === false) {
						continue;
					}

					if (o.attribute) {
						// We are monitoring attribute changes only
						if (r.type !== "attributes") {
							// Not an attribute change
							continue;
						}

						if (o.attribute !== true && o.attribute !== r.attributeName) {
							// We are monitoring a specific attribute, and a different one changed
							continue;
						}
					}
					else if (r.type === "attributes" && o.attribute === false) {
						// We explicitly opted out monitoring attributes, and an attribute has changed
						continue;
					}

					if (o.deep === false && r.target !== this.element) {
						continue;
					}

					callback.call(this, {
						node,
						type: r.type,
						attribute: r.attributeName,
						element: r.target,
						record: r
					});

					if (o.once) {
						(o.static? _ : this).unobserve(o, callback);
					}
				}
			}
		}, {
			characterData: true,
			childList: true,
			subtree: true,
			attributes: true
		});

		// Build mavo objects
		Mavo.hooks.run("init-tree-before", this);

		this.root = new Mavo.Group(this.element, this);
		this.treeBuilt.resolve();

		Mavo.hooks.run("init-tree-after", this);

		this.permissions = new Mavo.Permissions();

		var backendTypes = ["source", "storage", "init", "uploads"]; // order is significant!

		// Figure out backends for storage, data reads, and initialization respectively
		backendTypes.forEach(role => this.updateBackend(role));

		this.observe({deep: false, attribute: true}, ({attribute}) => {
			if (attribute.indexOf("mv-") === 0) {
				let role = attribute?.replace(/^mv-/, "");

				if (backendTypes.includes(role)) {
					this.updateBackend(role);

					// Do we need to re-load data?
					if (role === "source" || (!this.source && (role === "storage" || role === "init" && !this.root.data))) {
						this.load();
					}
				}
			}

		});

		this.permissions.can("login", () => {
			// We also support a URL param to trigger login, in case the user doesn't want visible login UI
			if (Mavo.Functions.url("login") !== null && this.index == 1 || Mavo.Functions.url(this.id + "-login") !== null) {
				this.primaryBackend.login();
			}
		});

		// Update login status
		$.bind(this.element, "mv-login.mavo", evt => {
			if (evt.backend == (this.source || this.storage)) {
				// If last time we rendered we got nothing, maybe now we'll have better luck?
				if (!this.root.data && !this.unsavedChanges) {
					this.load();
				}
			}
		});

		this.bar = new Mavo.UI.Bar(this);

		// Is there any control that requires an edit button?
		this.needsEdit = this.calculateNeedsEdit();

		this.setUnsavedChanges(false);

		this.permissions.onchange(({action, value}) => {
			var permissions = this.element.getAttribute("mv-permissions") || "";
			permissions = permissions.trim().split(/\s+/).filter(a => a != action);

			if (value) {
				permissions.push(action);
			}

			this.element.setAttribute("mv-permissions", permissions.join(" "));
		});

		this.permissions.can(["edit", "add", "delete"], () => {
			if (this.autoEdit) {
				this.edit();
			}
		});

		// Observe entire tree for mv-mode changes
		this.observe({attribute: "mv-mode"}, ({element}) => {
			if (!this.permissions.edit && !this.permissions.add && !this.permissions.delete) {
				return;
			}

			let nodes = _.Node.children(element);

			nodeloop: for (let i=0; i<nodes.length; i++) {
				let node = nodes[i];
				let previousMode = node.mode, mode;

				if (node.element == element) {
					// If attribute set directly on a Mavo node, then it forces it into that mode
					// otherwise, descendant nodes still inherit, unless they are also mode-restricted
					mode = node.element.getAttribute("mv-mode");
					node.modes = mode;
				}
				else {
					// Inherited
					if (node.modes) {
						// Mode-restricted, we cannot change to the other mode
						continue nodeloop;
					}

					mode = _.getStyle(node.element.parentNode, "--mv-mode");
				}

				node.mode = mode;

				if (previousMode != node.mode) {
					node[node.mode == "edit"? "edit" : "done"]();
				}
			}
		});


		if (this.storage || this.source) {
			// Fetch existing data
			this.permissions.can("read", () => this.load());
		}
		else {
			// No storage or source
			requestAnimationFrame(() => {
				this.dataLoaded.resolve();
				this.expressions.update();
				$.fire(this.element, "mv-load");
			});
		}

		// Dynamic ids
		$.bind(this.element, "mv-load.mavo", evt => {
			if (location.hash) {
				var callback = () => {
					var target = document.getElementById(location.hash.slice(1));

					if (target || !location.hash) {
						if (this.element.contains(target)) {
							requestAnimationFrame(() => { // Give the browser a chance to render
								Mavo.scrollIntoViewIfNeeded(target);
							});
						}
					}

					return target;
				};

				if (!callback()) {
					// No target, perhaps not yet?
					this.observe({attribute: "id", once: true}, callback);
					// FIXME if expressions take multiple cycles to resolve, this will not scroll to the proper id
					// FIXME also, if the user has started interacting with the document, we shouldn't scroll
				}
			}

			requestAnimationFrame(() => Stretchy.resizeAll());
		});


		if (this.autoSave) {
			this.dataLoaded.then(evt => {
				var debouncedSave = _.debounce(() => {
					this.save();
				}, this.autoSaveDelay);

				var callback = evt => {
					if (evt.node.saved) {
						debouncedSave();
					}
				};

				requestAnimationFrame(() => {
					this.permissions.can("save", () => {
						$.bind(this.element, "mv-change.mavo:autosave", callback);
					}, () => {
						$.unbind(this.element, "mv-change.mavo:autosave", callback);
					});
				});
			});
		}

		// Keyboard navigation
		this.element.addEventListener("keydown", evt => {
			var element = evt.target;

			// Ctrl + S or Cmd + S to save
			if (this.permissions.save && evt.key == "S" && evt[_.superKey] && !evt.altKey) {
				evt.preventDefault();
				this.save();
			}
			else if (evt.key === "ArrowUp" || evt.key === "ArrowDown") {
				if (element.matches("textarea, input[type=range], input[type=number]")) {
					// Up/down arrow keys are meaningful here
					return;
				}

				if (element.matches(".mv-editor")) {
					var editor = true;
					element = element.parentNode;
				}

				var node = Mavo.Node.get(element);

				if (node?.closestCollection) {
					var nextNode = node.getCousin(evt.key === "ArrowUp"? -1 : 1, {wrap: true});

					if (nextNode) {
						if (editor && nextNode.editing) {
							nextNode.edit();
							nextNode.editor.focus();
						}
						else {
							nextNode.element.focus();
						}

						evt.preventDefault();
					}
				}
			}
		});

		$.bind(this.element, "click submit", _.Actions.listener);

		Mavo.hooks.run("init-end", this);
	},

	get editing() {
		return this.root.editing;
	},

	observe (o = {}, callback) {
		this.observers = this.observers ?? new Map();
		this.observers.set(o, callback);
		return callback;
	},

	unobserve (options, callback, observers) {
		_.unobserve(options, callback, this.observers);
	},

	// Run a callback without triggering certain observers
	sneak (options = {}, callback) {
		let observers = new Map([
			...(this.observers?.entries() ?? []),
			...(_.observers?.entries() ?? []),
		]);

		if (observers.size === 0 || !this.observer) {
			return callback();
		}

		this.observer.flush();

		let matches = _.findObservers(options, undefined, observers);

		for (let [o, c] of matches.entries()) {
			o._active = o.active !== false && o._active !== false;
			o.active = false;
		}

		let ret = callback();

		this.observer.flush();

		for (let [o, c] of matches.entries()) {
			o.active = o.active || o._active;
			delete o._active;
		}

		return ret;
	},

	getData: function(o) {
		let env = {context: this, options: o};
		env.data = this.root.getData(o);
		_.hooks.run("getdata-end", env);
		return env.data;
	},

	toJSON: function() {
		return _.toJSON(this.getData());
	},

	message: function(message, options = {}) {
		return new _.UI.Message(this, message, options);
	},

	error: function(message, ...log) {
		this.message(message, {
			type: "error",
			dismiss: ["button", "timeout"]
		});

		// Log more info for programmers
		if (log.length > 0) {
			console.log(`%c${this.id}: ${message}`, "color: red; font-weight: bold", ...log);
		}
	},

	render: function(data) {
		var env = {context: this, data};
		_.hooks.run("render-start", env);

		if (env.data) {
			this.root.render(env.data);
		}

		this.unsavedChanges = false;

		_.hooks.run("render-end", env);
	},

	edit: function() {
		this.root.edit();

		// Highlight collection item when item controls are hovered
		$.bind(this.element, "mouseenter.mavo:edit mouseleave.mavo:edit", evt => {
			if (evt.target.matches(_.selectors.multiple)) {
				evt.target.classList.remove("mv-has-hovered-item");

				var parent = evt.target.parentNode.closest(_.selectors.multiple);

				if (parent) {
					parent.classList.toggle("mv-has-hovered-item", evt.type == "mouseenter");
				}
			}
		}, true);

		this.setUnsavedChanges();
	},

	// Conclude editing
	done: function() {
		this.root.done();
		$.unbind(this.element, ".mavo:edit");
		this.unsavedChanges = false;
	},

	/**
	 * Set this mavo instanceâ€™s unsavedChanges flag.
	 * @param {Boolean} [value]
	 *        If true, just sets the flag to true, no traversal.
	 *        If false, sets the flag of the Mavo instance and every tree node to false
	 *        If not provided, traverses the tree and recalculates the flag value.
	 */
	setUnsavedChanges: function(value) {
		var unsavedChanges = !!value;

		if (!value) {
			this.walk(obj => {
				if (obj.unsavedChanges) {
					unsavedChanges = true;

					if (value === false) {
						obj.unsavedChanges = false;
					}

					return false;
				}
			});
		}

		return this.unsavedChanges = unsavedChanges;
	},

	/**
	 * Update the backend for a given role
	 * @return {Boolean} true if a change occurred, false otherwise
	 */
	updateBackend: function(role) {
		var previous = this[role], backend, changed;

		if (this.index == 1) {
			backend = _.Functions.url(role);
		}

		if (!backend) {
			backend =  _.Functions.url(`${this.id}-${role}`) || this.element.getAttribute("mv-" + role) || null;
		}

		if (backend) {
			backend = backend.trim();

			if (backend == "none") {
				backend = null;
			}
		}

		if (backend && (!previous || !previous.equals(backend))) {
			// We have a string, convert to a backend object if different than existing
			this[role] = backend = _.Backend.create(backend, {
				mavo: this,
				format: this.element.getAttribute(`mv-${role}-format`) || this.element.getAttribute("mv-format")
			}, this.element.getAttribute(`mv-${role}-type`), this[role]);

			changed = true;
		}
		else if (!backend) {
			// We had a backend and now we will un-have it
			this[role] = null;
		}

		changed = changed || (backend? !backend.equals(previous) : !!previous);

		if (changed) {
			// A change occured
			if (!this.storage && !this.source && this.init) {
				// If init is present with no storage and no source, init is equivalent to source
				this.source = this.init;
				this.init = null;
			}

			var permissions = this.storage? this.storage.permissions : new Mavo.Permissions({edit: true, save: false});
			permissions.parent = this.source?.permissions;
			this.permissions.parent = permissions;

			this.primaryBackend = this.storage || this.source;
		}

		return changed;
	},

	/**
	 * load - Fetch data from source and render it.
	 *
	 * @return {Promise}  A promise that resolves when the data is loaded.
	 */
	async load () {
		var backend = this.source || this.storage;

		if (!backend) {
			return;
		}

		this.inProgress = "Loading";

		await backend.ready;

		let data = await backend.load()
		.catch(err => {
			// Try again with init
			if (this.init && this.init != backend) {
				backend = this.init;
				return this.init.ready.then(() => this.init.load());
			}

			// No init, propagate error
			return Promise.reject(err);
		})
		.catch(err => {
			if (err) {
				var xhr = err instanceof XMLHttpRequest? err : err.xhr;

				if (xhr?.status == 404) {
					this.render(null);
				}
				else {
					var message = this._("problem-loading");

					if (xhr) {
						message += xhr.status? this._("http-error", err) : ": " + this._("cant-connect");
					}

					this.error(message, err);
				}
			}
			return null;
		});

		this.render(data);

		this.inProgress = false;

		await Mavo.defer();

		this.dataLoaded.resolve();
		$.fire(this.element, "mv-load");
	},

	async store () {
		if (!this.storage) {
			return;
		}

		this.inProgress = "Saving";

		let saved;

		try {
			saved = await this.storage.store(this.getData());
		}
		catch (err) {
			if (err) {
				var message = this._("problem-saving");

				if (err instanceof XMLHttpRequest) {
					message += ": " + (err.status? this._("http-error", err) : this._("cant-connect"));
				}

				this.error(message, err);
			}

			saved = null;
		}

		this.inProgress = false;
		return saved;
	},

	upload: function(file, path = "images/" + file.name) {
		if (!this.uploadBackend) {
			return Promise.reject();
		}

		this.inProgress = this._("uploading");

		return this.uploadBackend.upload(file, path)
			.then(url => {
				this.inProgress = false;
				return url;
			})
			.catch(err => {
				this.error(this._("error-uploading"), err);
				this.inProgress = false;
				return null;
			});
	},

	async save () {
		_.hooks.run("save-start", this);
		let saved = await this.store();

		if (saved) {
			$.fire(this.element, "mv-save", saved);

			this.lastSaved = Date.now();
			this.root.save();
			this.unsavedChanges = false;
		}
	},

	walk: function() {
		return this.root.walk(...arguments);
	},

	calculateNeedsEdit: function() {
		var needsEdit = false;

		this.walk((obj, path) => {
			if (needsEdit) {
				// If already true, no need to descend further
				return false;
			}

			// True if both modes are allowed and node is not group
			needsEdit = !obj.modes && !(obj instanceof Mavo.Group);

			return !obj.modes;
		}, undefined, {descentReturn: true});

		return needsEdit;
	},

	changed: function(change) {
		if (!this.root) {
			// No tree yet
			return;
		}

		if (this.expressions.active) {
			this.expressions.updateThrottled(change);
		}
	},

	setDeleted: function(...nodes) {
		// Clear previous deleted item(s)
		this.deleted.forEach(node => node.destroy());
		this.deleted.length = [];

		this.deletionNotice?.close();

		if (!nodes.length) {
			return;
		}

		this.deleted.push(...nodes);

		if (nodes.length == 1) {
			var phrase = nodes[0].name;
		}
		else { // Multiple items deleted, possibly from multiple collections
			var counts = {}, ret = [];

			nodes.forEach(n => {
				counts[n.name] = (counts[n.name] || 0) + 1;
			});

			for (var name in counts) {
				ret.push(this._("n-items", {name, n: counts[name]}));
			}

			var phrase = ret.join(", ");
		}

		var notice = this.deletionNotice = this.message(
			[
				this._("item-deleted", {name: phrase}),
				{
					tag: "button",
					type: "button",
					textContent: this._("undo"),
					events: {
						click: evt => {
							this.undoDelete();
							this.deletionNotice.close(true);
						}
					}
				}
			], {
				classes: "mv-deleted",
				dismiss: {
					button: true,
					timeout: 20000
				}
			});

		notice.closed.then(undone => {
			if (!undone && this.deleted.length) {
				// Gone forever now
				this.deleted.forEach(node => node.destroy());
				this.deleted.length = 0;
			}

			if (this.deletionNotice == notice) {
				this.deletionNotice = null;
			}
		});
	},

	undoDelete: function() {
		this.deleted.forEach(node => node.collection.add(node, node.index));
		this.deleted.length = 0;
	},

	// A lot of this is inspired by @hopeful2's work in https://github.com/mavoweb/mavo/pull/430
	destroy () {
		Mavo.hooks.run("mavo-destroy-start", this);

		if (this.editing) {
			this.done();
		}

		// first remove observers.
		this.observer.destroy();

		this.bar?.destroy();

		// .index starts from 1, .all starts from 0
		// ISSUE Should we just delete this and rearrange the other indices?
		Mavo.all[this.id] = Mavo.all[this.index - 1] = null;

		this.root.destroy();

		Mavo.hooks.run("mavo-destroy-end", this);
	},

	live: {
		inProgress: function(value) {
			$.toggleAttribute(this.element, "mv-progress", value, value);
			$.toggleAttribute(this.element, "aria-busy", !!value, !!value);
			this.element.style.setProperty("--mv-progress-text", value? `"${this._(value)}"` : "");
		},

		unsavedChanges: function(value) {
			this.element.classList.toggle("mv-unsaved-changes", value);
		},

		needsEdit: function(value) {
			if (this.bar) {
				this.bar.toggle("edit", value && this.permissions.edit);
			}
		},

		storage: function(value) {
			if (value !== this._storage && !value) {
				var permissions = new Mavo.Permissions({edit: true, save: false});
				permissions.parent = this.permissions.parent;
				this.permissions.parent = permissions;
			}
		},

		primaryBackend: function(value) {
			value = value || null;

			if (value != this._primaryBackend) {
				return value;
			}
		},

		uploadBackend: {
			get: function () {
				const backend = this.uploads;

				if (backend?.upload) {
					// We need to authenticate a user if we haven't done that earlier
					if (backend.permissions.login) {
						backend.login();
					}

					return this.uploads;
				}

				if (this.storage?.upload) {
					// Prioritize storage
					return this.storage;
				}
			}
		}
	},

	static: {
		version: "v0.2.1",

		all: {},

		get: function(id) {
			if (id instanceof Element) {
				// Get by element
				for (var name in _.all) {
					if (_.all[name].element == id) {
						return _.all[name];
					}
				}

				return null;
			}

			var name = typeof id === "number"? Object.keys(_.all)[id] : id;

			return _.all[name] || null;
		},

		superKey: navigator.platform.indexOf("Mac") === 0? "metaKey" : "ctrlKey",
		base: location.protocol == "about:"? (document.currentScript? document.currentScript.src : "http://mavo.io") : location,
		dependencies: [
			// Plugins.load() must be run after DOM load to pick up all mv-plugins attributes
			$.ready().then(() => _.Plugins.load()),
		],

		// Only naive tests here (no false positives, but false negatives are ok).
		// polyfill.io will do more proper checking
		polyfillsNeeded: {
			"blissfuljs": Array.from && document.documentElement.closest && self.URL && "searchParams" in URL.prototype,
			"Intl.~locale.en": self.Intl,
			"IntersectionObserver": self.IntersectionObserver,
			"Symbol": self.Symbol,
			"Element.prototype.remove": Element.prototype.remove,
			"Element.prototype.before": Element.prototype.before,
			"Element.prototype.after": Element.prototype.after,
			"Element.prototype.prepend": Element.prototype.prepend,
			"Array.prototype.flat": Array.prototype.flat,
			"Array.prototype.flatMap": Array.prototype.flatMap,
		},
		polyfills: [],

		init: function(container = document) {
			var mavos = Array.isArray(arguments[0])? arguments[0] : $$(_.selectors.init, container);

			var ret = mavos.filter(element => !_.get(element)) // not already inited
				.map(element => new _(element));

			return ret;
		},

		observe (options, callback) {
			_.observers = _.observers ?? new Map();
			options.static = true;
			_.observers.set(options, callback);
			return callback;
		},

		unobserve (options, callback, observers = _.observers) {
			if (!observers) {
				return;
			}

			let matches = _.findObservers(options, callback, observers);

			for (let [o, c] of matches.entries()) {
				observers.delete(o);
			}
		},

		// Look up observers that match certain options and/or callback
		findObservers (options, callback, observers = _.observers) {
			let keys = Object.keys(options);
			let ret = new Map();

			for (let [o, c] of observers.entries()) {
				if (callback && callback !== c) {
					continue;
				}

				if (keys.every(k => o[k] === options[k])) {
					ret.set(o, c);
				}
			}

			return ret;
		},

		warn: function warn(message, o = {}) {
			warn.history = warn.history || new Set();

			if (!_.warn.history.has(message)) {
				console.warn(message);
			}

			if (o.once !== false) {
				warn.history.add(message);
			}
		},

		/**
		 * Similar to Promise.all() but can handle post-hoc additions
		 * and does not reject if one promise rejects.
		 */
		thenAll: function(iterable) {
			// Turn rejected promises into resolved ones
			$$(iterable).forEach(promise => {
				if ($.type(promise) == "promise") {
					promise = promise.catch(err => err);
				}
			});

			return Promise.all(iterable).then(resolved => {
				if (iterable.length != resolved.length) {
					// The list of promises or values changed. Return a new Promise.
					// The original promise won't resolve until the new one does.
					return _.thenAll(iterable);
				}

				// The list of promises or values stayed the same.
				// Return results immediately.
				return resolved;
			});
		},

		promise: function(constructor) {
			var res, rej;

			var promise = new Promise((resolve, reject) => {
				if (typeof constructor === "function") {
					constructor(resolve, reject);
				}
				else if (constructor instanceof Promise) {
					constructor.then(resolve);
					constructor.catch(reject);
				}

				res = resolve;
				rej = reject;
			});

			promise.resolve = a => {
				res(a);
				return promise;
			};

			promise.reject = a => {
				rej(a);
				return promise;
			};

			return promise;
		},

		defer: delay => new Promise(resolve => delay === undefined? requestAnimationFrame(resolve) : setTimeout(resolve, delay)),

		UI: {},

		hooks: new $.Hooks(),

		// Will be filled with a union of all properties across all Mavos
		properties: new Set(),

		attributes: [
			"mv-app", "mv-storage", "mv-source", "mv-init", "mv-path", "mv-multiple-path", "mv-format",
			"mv-attribute", "mv-default", "mv-mode", "mv-edit", "mv-permisssions",
			"mv-rel", "mv-value"
		],

		lazy: {
			locale: () => document.documentElement.lang || "en-GB"
		}
	}
});

// Define symbols
// These are lazy to give the Symbol polyfill a chance to load if needed
["toNode", "isProxy", "route", "parent", "property", "mavo", "groupedBy", "as"].forEach(symbol => {
	$.lazy(_, symbol, () => Symbol(symbol));
});

Object.defineProperty(_.all, "length", {
	get: function() {
		return Object.keys(this).length;
	}
});

{

let s = _.selectors = {
	init: "[mv-app], [data-mv-app]",
	property: "[property]",
	specificProperty: name => `[property=${name}]`,
	group: "[typeof], [mv-group]",
	primitive: "[property]:not([typeof]):not([mv-group])",
	childGroup: "[typeof][property], [mv-group][property]",
	multiple: "[mv-multiple]",
	formControl: "input, select, option, textarea",
	textInput: ["text", "email", "url", "tel", "search", "number"].map(t => `input[type=${t}]`).join(", ") + ", input:not([type]), textarea",
	ui: ".mv-ui",
	container: {
		// "li": "ul, ol",
		"tr": "table",
		"option": "select",
		// "dt": "dl",
		// "dd": "dl"
	}
};

$.extend(_.selectors, {
	item: s.multiple + ", " + s.group,
	output: s.specificProperty("output") + ", .mv-output"
});

}

$.each(_.polyfillsNeeded, (id, supported) => {
	if (!supported) {
		_.polyfills.push(id);
	}
});

_.ready = _.thenAll(_.dependencies);
_.inited = _.promise();

// Init mavo. Async to give other scripts a chance to modify stuff.
await _.defer();

if (_.polyfills.length > 0) {
	var polyfillURL = "https://cdn.polyfill.io/v2/polyfill.min.js?unknown=polyfill&features=" + _.polyfills.map(a => a + "|gated").join(",");
	_.dependencies.push($.include(polyfillURL));
}

await $.ready();

$$(_.selectors.init).forEach(function(elem) {
	// Skip if an instance has been created, for example by another script.
	if (!_.get(elem)) {
		elem.setAttribute("mv-progress", "Loading");
	}
});

await _.ready;

_.init();
_.inited.resolve();

})(Bliss, Bliss.$);

(function ($, $$) {

var _ = $.extend(Mavo, {
	/**
	 * Load a file, only once
	 */
	load: (url, base = document.currentScript?.src ?? location) => {
		return $.load(url, base);
	},

	readFile: (file, format = "DataURL") => {
		var reader = new FileReader();

		return new Promise((resolve, reject) => {
			reader.onload = f => resolve(reader.result);
			reader.onerror = reader.onabort = reject;
			reader["readAs" + format](file);
		});
	},

	toJSON: data => {
		if (data === null) {
			return "";
		}

		if (typeof data === "string") {
			// Do not stringify twice!
			return data;
		}

		try {
			return JSON.stringify(data, null, "\t");
		}
		catch (e) {
			return e;
		}
	},

	/**
	 * toJSON without cycles
	 */
	safeToJSON: function(o) {
		var cache = new WeakSet();

		return JSON.stringify(o, (key, value) => {
			if (typeof value === "object" && value !== null) {
				// No circular reference found

				if (cache.has(value)) {
					return; // Circular reference found!
				}

				cache.add(value);
			}

			return value;
		});
	},

	// Detect if this is a plain object, not an instance of some other class
	isPlainObject: o => {
		if ($.type(o) !== "object") {
			return false;
		}

		var proto = Object.getPrototypeOf(o);
		return proto.constructor?.name === "Object";
	},

	// Specifiy a primitive fallback for an object
	primitivify: (object, primitive) => {
		if (object) {
			if (primitive && typeof primitive === "object") {
				// Primitive is objectified, must copy its metadata to avoid losing it
				Object.assign(object, primitive);
				primitive = Mavo.value(primitive);
			}

			object.valueOf = object.toJSON = object[Symbol.toPrimitive] = () => primitive;
		}

		return object;
	},

	objectify: (value, properties) => {
		var primitive = Mavo.value(value);

		if (typeof value !== "object" || value === null) {
			if (value === null) {
				value = {
					[Symbol.toStringTag]: "Null",
					toJSON: () => null
				};
			}
			else {
				var constructor = value.constructor;
				value = new constructor(primitive);
				value[Symbol.toStringTag] = constructor.name;
			}

			_.primitivify(value, primitive);
		}

		return $.extend(value, properties);
	},

	value: value => value?.valueOf? value.valueOf() : value,

	/**
	 * Array & set utlities
	 */

	// If the passed value is not an array, convert to an array
	toArray: arr => {
		return arr === undefined? [] : Array.isArray(arr)? arr : [arr];
	},

	// Delete an element from an array
	// @param all {Boolean} Delete more than one?
	delete: (arr, element, all) => {
		do {
			var index = arr && arr.indexOf(element);

			if (index > -1) {
				arr.splice(index, 1);
			}
		} while (index > -1 && all);
	},

	// Push an item to an array iff it's not already in there
	pushUnique: (arr, item) => {
		if (arr.indexOf(item) === -1) {
			arr.push(item);
		}
	},

	// Adds items from set2 into set1, turns set1 into a set if it's not
	union: (set1, set2) => {
		if (set1 instanceof Set && set2) {
			set2.forEach(x => set1.add(x));
			return set1;
		}

		return new Set([...(set1 || []), ...(set2 || [])]);
	},

	// Filter an array in place
	// TODO add index to callback
	filter: (arr, callback) => {
		for (var i=0; i<arr.length; i++) {
			if (!callback(arr[i])) {
				arr.splice(i, 1);
				i--;
			}
		}
	},

	/**
	 * DOM element utilities
	 */

	is: function(thing, ...elements) {
		for (let i=0, element; i < elements.length; i++) {
			if (elements?.[i]?.matches?.(_.selectors[thing])) {
				return true;
			}
		}

		return false;
	},

	/**
	 * Get the current value of a CSS property on an element
	 */
	getStyle: (element, property) => {
		if (element) {
			var value = getComputedStyle(element).getPropertyValue(property);

			return value?.trim();
		}
	},
	/**
	 * Get/set data on an element
	 */
	data: function(element, name, value) {
		if (!element) {
			return null;
		}

		var data = _.elementData.get(element) || {}, ret;

		if (arguments.length == 2) {
			ret = data[name];
		}
		else if (value === undefined) {
			delete data[name];
		}
		else {
			ret = data[name] = value;
		}

		_.elementData.set(element, data);
		return ret;
	},

	elementData: new WeakMap(),

	/**
	 * Get node from path or get path of a node to an ancestor
	 * For maximum robustness, all but the last path segment refer to elements only.
	 * The last part of the path is a decimal: the integer part of the decimal is element index,
	 * the decimal part is node index *after* that element and starts from 1.
	 * If the node has no previous element sibling, the integer part of the index will be -1.
	 */
	elementPath: function (ancestor, element) {
		if (Array.isArray(element)) {
			// Get element by path
			var path = element;

			var ret = path.reduce((acc, cur) => {
				return acc.children[cur >> 0] || acc;
			}, ancestor);

			var last = path[path.length - 1];

			if (last != (last >> 0)) {
				// We are returning a non-element node
				var offset = +(last + "").split(".")[1];

				if (last >> 0 < 0) {
					ret = ret.firstChild;
					offset--;
				}

				for (var i=0; i<offset; i++) {
					ret = ret.nextSibling;
				}
			}

			return ret;
		}
		else {
			// Get path
			var path = [];

			for (var parent = element; parent && parent != ancestor; parent = parent.parentNode) {
				var index = 0;
				var countNonElementSiblings = parent === element && element.nodeType !== 1;
				var offset = countNonElementSiblings? 1 : 0;
				var sibling = parent;

				while (sibling = sibling[`previous${countNonElementSiblings? "" : "Element"}Sibling`]) {
					if (countNonElementSiblings) {
						offset++;

						if (sibling.nodeType == 1) {
							countNonElementSiblings = false;
						}
					}
					else {
						index++;
					}
				}

				if (offset > 0) {
					index = index - 1 + "." + offset;
				}

				path.unshift(index);
			}

			return parent? path : null;
		}
	},

	/**
	 * Revocably add/remove elements from the DOM
	 */
	revocably: {
		add: function(element, insert) {
			var comment = _.revocably.isRemoved(element);

			if (comment?.parentNode) {
				comment.parentNode.replaceChild(element, comment);
			}
			else if (element && insert && !element.parentNode) {
				// Has not been revocably removed because it has never even been added
				if (typeof insert === "function") {
					insert(element);
				}
				else {
					insert.appendChild(element);
				}
			}

			return comment;
		},

		remove: function(element, commentText) {
			if (!element) {
				return;
			}

			var comment = _.data(element, "commentstub");

			if (!comment) {
				commentText = commentText || element.id || element.className || element.nodeName;
				comment = _.data(element, "commentstub", document.createComment(commentText));
			}

			if (element.parentNode) {
				// In DOM, remove
				element.parentNode.replaceChild(comment, element);
			}

			return comment;
		},

		isRemoved: function(element) {
			if (!element || element.parentNode) {
				return false;
			}

			var comment = _.data(element, "commentstub");

			if (comment?.parentNode) {
				return comment;
			}

			return false;
		},

		setAttribute: function(element, attribute, value) {
			var previousValue = _.data(element, "attribute-" + attribute);

			if (previousValue === undefined) {
				// Only set this when there's no old value stored, otherwise
				// if called multiple times, it could result in losing the original value
				_.data(element, "attribute-" + attribute, element.getAttribute(attribute));
			}

			element.setAttribute(attribute, value);
		},

		restoreAttribute: function(element, attribute) {
			var previousValue = _.data(element, "attribute-" + attribute);

			if (previousValue !== undefined) {
				$.toggleAttribute(element, attribute, previousValue);
				_.data(element, "attribute-" + attribute, undefined);
			}
		}
	},

	inView: {
		is: element => {
			var r = element.getBoundingClientRect();

			return (0 <= r.bottom && r.bottom <= innerHeight || 0 <= r.top && r.top <= innerHeight) // vertical
			       && (0 <= r.right && r.right <= innerWidth || 0 <= r.left && r.left <= innerWidth); // horizontal
		},

		when: (element, rootMargin = `${innerHeight / 2}px ${innerWidth/2}px`) => {
			var observer = _.inView.observer = _.inView.observer || new IntersectionObserver(function(entries, observer) {
				entries.forEach(entry => {
					if (entry.intersectionRatio > 0) {
						observer.unobserve(entry.target);
						$.fire(entry.target, "mv-inview", {entry});
					}
				});
			}, {rootMargin});

			return new Promise(resolve => {
				if (_.is(element)) {
					resolve();
				}

				observer.observe(element);

				var callback = evt => {
					element.removeEventListener("mv-inview", callback);
					evt.stopPropagation();
					resolve();
				};

				element.addEventListener("mv-inview", callback);
			});
		}
	},

	scrollIntoViewIfNeeded: element => {
		if (element && !Mavo.inView.is(element)) {
			element.scrollIntoView({behavior: "smooth"});
		}
	},

	/**
	 * Set attribute only if it doesnâ€™t exist
	 */
	setAttributeShy: function(element, attribute, value) {
		if (!element.hasAttribute(attribute)) {
			element.setAttribute(attribute, value);
		}
	},

	/**
	 * Get the value of an attribute, with fallback attributes in priority order.
	 */
	getAttribute: function(element, ...attributes) {
		for (let i=0, attribute; attribute = attributes[i]; i++) {
			let value = element.getAttribute(attribute);

			if (value) {
				return value;
			}
		}

		return null;
	},

	getClosestAttribute: function(element, attribute) {
		return element.closest(`[${attribute}]`)?.getAttribute(attribute) ?? null;
	},

	/**
	 * Get the element identified by the URL hash
	 */
	getTarget: function() {
		var id = location.hash.substr(1);
		return document.getElementById(id);
	},

	XPath: function(query, context = document) {
		var doc = context.ownerDocument || context;
		var ret = [], node;

		if (doc.evaluate) {
			var result = doc.evaluate(query, context, null, XPathResult.ANY_TYPE, null);

			while (node = result.iterateNext()) {
				ret.push(node);
			}
		}

		return ret;
	},

	// Returns attribute nodes that start with str
	// Use .ownerElement to get element
	attributeStartsWith: function(str, context) {
		return _.XPath(`.//@*[starts-with(name(), "${str}")]`, context);
	},

	/**
	 * Object utilities
	 */

	/**
	 * Check if property exists in object. Like the in operator but more robust and does not throw.
	 * Why not just in? E.g. "foo".length is 3 but "length" in "foo" throws
	 */
	in: function(property, obj) {
		if (obj) {
			return (typeof obj === "object" && property in obj) || obj[property] !== undefined;
		}
	},

	/**
	 * Get real property name from case insensitive property
	 */
	getCanonicalProperty: function(obj, property) {
		if (obj && (property || property === 0)) {
			// Property in object?
			if (_.in(property, obj)) {
				return property;
			}

			if (property.toLowerCase) {
				// Lowercase property in object?
				var propertyL = property.toLowerCase();

				if (_.in(propertyL, obj)) {
					return propertyL;
				}

				// Any case property in object?
				var properties = Object.keys(obj);
				var i = properties.map(p => p.toLowerCase()).indexOf(propertyL);

				if (i > -1) {
					return properties[i];
				}
			}
		}
	},

	subset: function(obj, path, value) {
		if (arguments.length == 3) {
			// Put
			if (path.length) {
				var last = path[path.length - 1];
				var parent = $.value(obj, ...path.slice(0, -1));

				if (Array.isArray(parent) && Array.isArray(value)) {
					// Merge arrays instead of adding array inside array
					parent.splice(last, 1, ...value);
				}
				else if (parent) {
					parent[path[path.length - 1]] = value;
				}

				return obj;
			}

			return value;
		}
		else if (typeof obj == "object" && path?.length) { // Get
			return path.reduce((obj, property, i) => {
				var meta = {};
				var ret = Mavo.Functions.get(obj, property, meta);

				// We don't yet support multiple properties at the same level
				// i.e. the path can't be for the 2nd and 3rd item
				path[i] = Array.isArray(meta.property)? meta.property[0] : meta.property;

				if (ret === undefined && meta.query) {
					// Not found, return dummy if query
					ret = {[meta.query.property]: meta.query.value};
				}

				return ret;
			}, obj);
		}
		else {
			return obj;
		}
	},

	clone: function(o) {
		if (!o || typeof o !== "object") {
			return o;
		}

		return JSON.parse(_.safeToJSON(o));
	},

	// Will not work for symbols
	shallowClone: function(o) {
		if (!o || typeof o !== "object") {
			return o;
		}

		if (Array.isArray(o)) {
			return [...o];
		}

		return $.extend({}, o);
	},

	// Credit: https://remysharp.com/2010/07/21/throttling-function-calls
	debounce: function (fn, delay) {
		if (!delay) {
			// No throttling
			return fn;
		}

		var timer = null, code;

		return function () {
			var context = this, args = arguments;

			code = function () {
				fn.apply(context, args);
				removeEventListener("beforeunload", code);
			};

			clearTimeout(timer);
			timer = setTimeout(code, delay);
			addEventListener("beforeunload", code);
		};
	},

	escapeRegExp: s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),

	observeResize: function(element, callbackOrObserver) {
		if (!self.ResizeObserver) {
			return;
		}

		var previousRect = null;
		var ro = callbackOrObserver instanceof ResizeObserver? callbackOrObserver : new ResizeObserver(entries => {
			var contentRect = entries[entries.length - 1].contentRect;

			if (previousRect
				&& previousRect.width == contentRect.width
				&& previousRect.height == contentRect.height) {
				return;
			}

			callbackOrObserver(entries);

			previousRect = contentRect;
		});

		ro.observe(element);

		return ro;
	},

	Observer: class Observer {
		constructor (element, attribute, callback, o = {}) {
			if (callback instanceof MutationObserver) {
				this.observer = callback;
			}

			this.observer = this.observer || new MutationObserver(callback);
			this.callback = callback;
			this.update(element, attribute, o);

			this.run();
		}

		update (element, attribute, options) {
			this.element = element;
			this.attribute = attribute;
			this.options = $.extend({}, options);

			// We use the user-provided options object verbatim if it exists and
			// is valid, i.e. has at least one of the required properties
			if (options === undefined || !options.attributes && !options.childList && !options.characterData) {
				if (this.attribute) {
					Object.assign(this.options, {
						attributes: true,
						attributeFilter: this.attribute == "all"? undefined : Mavo.toArray(this.attribute),
						attributeOldValue: !!options.oldValue
					});
				}

				if (!this.attribute || this.attribute == "all") {
					Object.assign(this.options, {
						characterData: true,
						childList: true,
						subtree: true,
						characterDataOldValue: !!options.oldValue
					});
				}
			}

			if (this.observer?.running) {
				this.stop();
				this.run();
			}
		}

		flush () {
			let records = this.observer?.takeRecords();

			if (records) {
				this.callback(records);
			}
		}

		stop () {
			this.observer?.disconnect();
			this.running = false;
			return this;
		}

		run () {
			if (this.observer) {
				this.observer.observe(this.element, this.options);
				this.running = true;
			}

			return this;
		}

		/**
		 * Disconnect an observer, run some code, then observe again
		 */
		sneak (callback) {
			if (this.running) {
				console.log("sneak", callback);
				this.stop();
				var ret = callback();
				this.run();
			}
			else {
				var ret = callback();
			}

			return ret;
		}

		destroy () {
			this.stop();
			this.observer = this.element = null;
		}

		static sneak (observer, callback) {
			return observer? observer.sneak(callback) : callback();
		}
	},

	/**
	 * Run & Return a function
	 */
	rr: function(f) {
		f();
		return f;
	},

	// Get out of bounds array index to wrap around
	wrap: (index, length) => index < 0? length - 1 : index >= length? 0 : index,

	/**
	 * Parses a simple CSS-like text format for declaring key-value options:
	 * Pairs are comma or semicolon-separated, key and value are colon separated.
	 * Escapes are supported, via backslash. Useful for attributes.
	 */
	options: str => {
		var ret = {};

		str.trim().match(/(?:\\[,;]|[^,;])+/g)?.forEach(option => {
			if (option) {
				option = option.trim().replace(/\\([,;])/g, "$1");
				var pair = option.match(/^\s*((?:\\:|[^:])+?)\s*:\s*(.+)$/);

				if (pair) {
					ret[pair[1].replace(/\\:/g, ":")] = pair[2];
				}
				else {
					// If no value, it's boolean
					ret[option] = true;
				}
			}
		});

		return ret;
	},

	/**
	 * Map that can hold multiple values per key
	 */
	BucketMap: class BucketMap {
		constructor({arrays = false} = {}) {
			this.map = new Map();
			this[Symbol.iterator] = this.map[Symbol.iterator];
			this.arrays = arrays;
		}

		set(key, value) {
			if (this.arrays) {
				var values = this.map.get(key) || [];
				values.push(value);
			}
			else {
				var values = this.map.get(key) || new Set();
				values.add(value);
			}

			this.map.set(key, values);
		}

		delete(key, value) {
			if (arguments.length == 2) {
				var values = this.map.get(key);

				if (values) {
					if (this.arrays) {
						_.delete(values, value);
					}
					else {
						values.delete(value);
					}
				}
			}
			else {
				this.map.delete(key);
			}
		}

		forEach(...args) {
			return this.map.forEach(...args);
		}
	}
});

// Bliss plugins

// Provide shortcuts to long property chains
$.proxy = $.classProps.proxy = $.overload(function(obj, property, proxy) {
	Object.defineProperty(obj, property, {
		get: function() {
			return this[proxy][property];
		},
		set: function(value) {
			this[proxy][property] = value;
		},
		configurable: true,
		enumerable: true
	});

	return obj;
});

// :target-within shim
function updateTargetWithin() {
	var element = _.getTarget();
	const cl = "mv-target-within";

	$$("." + cl).forEach(el => el.classList.remove(cl));

	while (element?.classList) {
		element.classList.add(cl);
		element = element.parentNode;
	}
};

document.addEventListener("mv-load", updateTargetWithin);
addEventListener("hashchange", updateTargetWithin);
Mavo.observe({attribute: "id"}, updateTargetWithin);

})(Bliss, Bliss.$);

(function($, $$) {

var _ = Mavo.Locale = $.Class({
	constructor: function(lang, phrases) {
		this.lang = lang;
		this.phrases = {};
		this.extend(phrases);
	},

	get fallback() {
		// TODO should we fallback to other dialects? I.e. should en-US fallback to en-GB if en didn't exist?
		if (_.all[this.baseLang]) {
			return _.all[this.baseLang];
		}

		if (this !== _.default) {
			return _.default;
		}
	},

	extend: function(phrases) {
		$.extend(this.phrases, phrases);
	},

	phrase: function(id, vars) {
		var key = id.toLowerCase();
		var phrase = this.phrases[key];

		if (phrase === undefined && this.fallback) {
			phrase = this.fallback.phrase(key);
		}

		if (phrase === undefined) {
			// Everything failed, use id
			phrase = key.replace(/\b-\b/g, " ");
		}
		else if (vars) {
			var keys = phrase.match(/\{\w+(?=\})/g)?.map(v => v.slice(1)) ?? [];
			Mavo.Functions.unique(keys).forEach(name => {
				if (name in vars) {
					phrase = phrase.replace(RegExp(`{${name}}`, "gi"), vars[name]);
				}
			});
		}

		return phrase;
	},

	live: {
		lang: function(lang) {
			this.baseLang = _.getBaseLang(lang);

			if (lang == this.baseLang) {
				this.baseLang = null;
			}
		}
	},

	static: {
		all: {},

		/**
		 * Register new locale or extend existing locale
		 */
		register: function(lang, phrases) {
			if (_.all[lang]) {
				_.all[lang].extend(phrases);
			}
			else {
				_.all[lang] = new _(lang, phrases);
			}
		},

		// Get locale for a given language, use its base as fallback
		match: function(lang = "") {
			return _.all[lang] || _.all[_.getBaseLang(lang)];
		},

		// Get locale for a given language, use its base as fallback, and the default locale if nothing exists
		get: function(lang) {
			return _.match(lang) || _.default;
		},

		getBaseLang: function(lang) {
			return lang.split("-")[0];
		},

		lazy: {
			default: () => {
				return _.match(Mavo.locale) || _.all.en;
			}
		}
	}
});

/**
 * Use phrase
 */
Mavo.prototype._ = function(id, vars) {
	return this.locale && id? this.locale.phrase(id, vars) : id;
};

Mavo.ready.then(() => {
	$$("datalist.mv-phrases[lang]").forEach(datalist => {
		var phrases = $$("option", datalist).reduce((o, option) => {
			o[option.value] = option.textContent.trim();
			return o;
		}, {});

		Mavo.Locale.register(datalist.lang, phrases);
	});
});

})(Bliss, Bliss.$);

Mavo.Locale.register("en", {
	"second": "second",
	"seconds": "seconds",
	"minute": "minute",
	"minutes": "minutes",
	"hour": "hour",
	"hours": "hours",
	"day": "day",
	"days": "days",
	"week": "week",
	"weeks": "weeks",
	"month": "month",
	"months": "months",
	"year": "year",
	"years": "years",
	"edit": "Edit",
	"editing": "Editing",
	"save": "Save",
	"import": "Import",
	"export": "Export",
	"logout": "Logout",
	"login": "Login",
	"loading": "Loading",
	"uploading": "Uploading",
	"saving": "Saving",
	"dismiss": "Dismiss",
	"logged-in-as": "Logged in to {id} as ",
	"login-to": "Login to {id}",
	"error-uploading": "Error uploading file",
	"cannot-load-uploaded-file": "Cannot load uploaded file",
	"filename": "Filename?",
	"problem-saving": "Problem saving data",
	"problem-loading": "Problem loading data",
	"cannot-parse": "Canâ€™t understand this file",
	"http-error": "HTTP error {status}: {statusText}",
	"cant-connect": "Canâ€™t connect to the Internet",
	"add-item": "Add {name}",
	"add-item-before": "Add new {name} before",
	"add-item-after": "Add new {name} after",
	"drag-to-reorder": "Drag to reorder {name}",
	"delete-item": "Delete this {name}",
	"item-deleted": "{name} deleted",
	"n-items": "{n} {name} items",
	"undo": "Undo",
	"gh-updated-file": "Updated {name}",
	"gh-login-fork-options": "You have your own copy of this page, would you like to use it?",
	"gh-use-my-fork": "Yes, show me my data."
});

(function ($, $$) {

Mavo.attributes.push("mv-plugins");

var _ = Mavo.Plugins = {
	loaded: {},

	async load () {
		_.plugins = new Set();

		$$("[mv-plugins]").forEach(element => {
			element
				.getAttribute("mv-plugins").trim().split(/\s+/)
				.forEach(plugin => _.plugins.add(plugin));
		});

		if (!_.plugins.size) {
			return;
		}

		// Fetch plugin index
		let response = await fetch(_.url + "/plugins.json");
		let json = await response.json();
		let plugin = json.plugin;

		// Fetch plugins
		return Mavo.thenAll(plugin
			.filter(plugin => _.plugins.has(plugin.id))
			.map(plugin => {
				if (_.loaded[plugin.id]) {
					return Promise.resolve();
				}

				// Load plugin
				var filename = `mavo-${plugin.id}.js`;

				if (plugin.repo) {
					// Plugin hosted in a separate repo
					var url = `https://cdn.jsdelivr.net/gh/${plugin.repo}@master/${filename}`;
				}
				else {
					// Plugin hosted in the mavo-plugins repo
					var url = `${_.url}/${plugin.id}/${filename}`;
				}

				return $.include(_.loaded[plugin.id], url);
			}));
	},

	register: function(name, o = {}) {
		if (_.loaded[name]) {
			// Do not register same plugin twice
			return;
		}

		Mavo.hooks.add(o.hooks);

		for (let Class in o.extend) {
			let existing = Class == "Mavo"? Mavo : Mavo[Class];

			if ($.type(existing) === "function") {
				$.Class(existing, o.extend[Class]);
			}
			else {
				$.extend(existing, o.extend[Class]);
			}
		}

		var ready = [];

		if (o.ready) {
			ready.push(o.ready);
		}

		if (o.dependencies) {
			var base = document.currentScript? document.currentScript.src : location;
			var dependencies = o.dependencies.map(url => Mavo.load(url, base));
			ready.push(...dependencies);
		}

		if (ready.length) {
			Mavo.dependencies.push(...ready);
		}

		_.loaded[name] = o;

		if (o.init) {
			Promise.all(ready).then(() => o.init());
		}
	},

	url: "https://plugins.mavo.io"
};

})(Bliss, Bliss.$);

(function ($, $$) {

Mavo.attributes.push("mv-bar");

var _ = Mavo.UI.Bar = $.Class({
	constructor: function(mavo) {
		this.mavo = mavo;

		this.element = $(".mv-bar", this.mavo.element);
		this.template = this.mavo.element.getAttribute("mv-bar") || "";

		if (this.element) {
			this.custom = true;
			this.template += " " + (this.element.getAttribute("mv-bar") || "");
			this.template = this.template.trim();

			for (let id in _.controls) {
				this[id] = $(`.mv-${id}`, this.element);

				if (this[id]) {
					this.template = this.template || "with";
					this.template += ` ${id}`;
				}
			}
		}
		else {
			this.element = $.create({
				className: "mv-bar mv-ui",
				start: this.mavo.element,
				innerHTML: "<button>&nbsp;</button>"
			});
		}

		if (this.element.classList.contains("mv-compact")) {
			this.noResize = true;
		}

		this.controls = _.getControls(this.template);

		if (this.controls.length) {
			// Measure height of 1 row
			this.targetHeight = this.element.offsetHeight;
		}

		if (!this.custom) {
			this.element.innerHTML = "";
		}

		this.controls.forEach(id => {
			let o = _.controls[id];

			if (this[id]) {
				// Custom control, remove to not mess up order
				this[id].remove();
			}

			if (o.create) {
				this[id] = o.create.call(this.mavo, this[id]);
			}
			else if (!this[id]) {
				this[id] = $.create("button", {
					type: "button",
					className: `mv-${id}`,
					textContent: this.mavo._(id)
				});
			}

			// We initially add all of them to retain order,
			// then we remove revocably when/if needed
			this.add(id);

			if (o.permission) {
				this.permissions.can(o.permission, () => {
					this.toggle(id, !o.condition || o.condition.call(this.mavo));
				}, () => {
					this.remove(id);
				});
			}
			else if (o.condition && !o.condition.call(this.mavo)) {
				this.remove(id);
			}

			for (var events in o.events) {
				$.bind(this[id], events, o.events[events].bind(this.mavo));
			}
		});

		for (let id in _.controls) {
			let o = _.controls[id];

			if (o.action) {
				$.delegate(this.mavo.element, "click", ".mv-" + id, evt => {
					if (!o.permission || this.permissions.is(o.permission)) {
						o.action.call(this.mavo);
						evt.preventDefault();
					}
				});
			}
		}

		if (this.controls.length && !this.noResize) {
			this.resize();

			if (self.ResizeObserver) {
				this.resizeObserver = Mavo.observeResize(this.element, entries => {
					this.resize();
				});
			}
		}
	},

	resize: function() {
		if (!this.targetHeight) {
			// We don't have a correct measurement for target height, abort
			this.targetHeight = this.element.offsetHeight;
			return;
		}

		this.resizeObserver?.disconnect();

		this.element.classList.remove("mv-compact", "mv-tiny");

		// Remove pointless tooltips
		$$("button, .mv-button", this.element).forEach(button => {
			if (button.title === button.textContent) {
				button.title = "";
			}
		});

		// Exceeded single row?
		if (this.element.offsetHeight > this.targetHeight * 1.6) {
			this.element.classList.add("mv-compact");

			if (this.element.offsetHeight > this.targetHeight * 1.2) {
				// Still too tall
				this.element.classList.add("mv-tiny");

				// Add tooltips, since only icons will be visible
				$$("button, .mv-button", this.element).forEach(button => {
					if (!button.title) {
						button.title = button.textContent;
					}
				});
			}
		}

		this.resizeObserver?.observe(this.element);
	},

	add: function(id) {
		var o = _.controls[id];

		if (o.prepare) {
			o.prepare.call(this.mavo);
		}

		Mavo.revocably.add(this[id], this.element);

		if (!this.resizeObserver && !this.noResize) {
			requestAnimationFrame(() => this.resize());
		}
	},

	remove: function(id) {
		var o =_.controls[id];

		Mavo.revocably.remove(this[id], "mv-" + id);

		if (o.cleanup) {
			o.cleanup.call(this.mavo);
		}

		if (!this.resizeObserver && !this.noResize) {
			requestAnimationFrame(() => this.resize());
		}
	},

	toggle: function(id, add) {
		return this[add? "add" : "remove"](id);
	},

	proxy: {
		"permissions": "mavo"
	},

	destroy () {
		this.resizeObserver.disconnect();
		this.resizeObserver = null;
	},

	static: {
		getControls: function(template) {
			var all = Object.keys(_.controls);

			if (template && (template = template.trim())) {
				if (template == "none") {
					return [];
				}

				var relative = /^with\s|\b(yes|no)-\w+\b/.test(template);
				template = template.replace(/\byes-|^with\s+/g, "");
				var ids = template.split(/\s+/);

				// Drop duplicates (last one wins)
				ids = Mavo.Functions.unique(ids.reverse()).reverse();

				if (relative) {
					return all.filter(id => {
						var positive = ids.lastIndexOf(id);
						var negative = ids.lastIndexOf("no-" + id);
						var keep = positive > Math.max(-1, negative);
						var drop = negative > Math.max(-1, positive);

						return keep || (!_.controls[id].optional && !drop);
					});
				}

				return ids;
			}

			// No template, return default set
			return all.filter(id => !_.controls[id].optional);
		},

		controls: {
			status: {
				create: function(custom) {
					return custom || $.create({
						className: "mv-status"
					});
				},
				prepare: function() {
					var backend = this.primaryBackend;

					if (backend?.user) {
						var user = backend.user;
						var html = [user.name || ""];

						if (user.avatar) {
							html.unshift($.create("img", {
								className: "mv-avatar",
								src: user.avatar
							}), " ");
						}

						if (user.url) {
							html = [$.create("a", {
								href: user.url,
								target: "_blank",
								contents: html
							})];
						}

						this.bar.status.textContent = "";
						$.contents(this.bar.status, [
							{tag: "span", innerHTML: this._("logged-in-as", backend)},
							" ",
							...html
						]);
					}
				},
				permission: "logout"
			},

			edit: {
				action: function() {
					if (this.editing) {
						this.done();
						this.bar.edit.textContent = this._("edit");
					}
					else {
						this.edit();
						this.bar.edit.textContent = this._("editing");
					}
				},
				permission: ["edit", "add", "delete"],
				cleanup: function() {
					if (this.editing) {
						this.done();

						if (this.bar?.edit) {
							this.bar.edit.textContent = this._("edit");
						}
					}
				},
				condition: function() {
					return this.needsEdit;
				}
			},

			save: {
				action: function() {
					this.save();
				},
				events: {
					"mouseenter focus": function() {
						this.element.classList.add("mv-highlight-unsaved");
					},
					"mouseleave blur": function() {
						this.element.classList.remove("mv-highlight-unsaved");
					}
				},
				permission: "save",
				condition: function() {
					return !this.autoSave || this.autoSaveDelay > 0;
				}
			},

			export: {
				create: function(custom) {
					var a;

					if (custom) {
						a = custom.matches("a")? custom : $.create("a", {
							className: "mv-button",
							around: custom
						});
					}
					else {
						a = $.create("a", {
							className: "mv-export mv-button",
							textContent: this._("export")
						});
					}

					a.setAttribute("download", this.id + ".json");

					return a;
				},
				events: {
					mousedown: function() {
						this.bar.export.href = "data:application/json;charset=UTF-8," + encodeURIComponent(this.toJSON());
					}
				},
				permission: "edit",
				optional: true
			},

			import: {
				create: function(custom) {
					var button = custom || $.create("span", {
						role: "button",
						tabIndex: "0",
						className: "mv-import mv-button",
						textContent: this._("import"),
						events: {
							focus: evt => {
								input.focus();
							}
						}
					});

					var input = $.create("input", {
						type: "file",
						inside: button,
						events: {
							change: evt => {
								var file = evt.target.files[0];

								if (file) {
									var reader = $.extend(new FileReader(), {
										onload: evt => {
											this.inProgress = false;

											try {
												var json = JSON.parse(reader.result);
												this.render(json);
											}
											catch (e) {
												this.error(this._("cannot-parse"));
											}
										},
										onerror: evt => {
											this.error(this._("problem-loading"));
										}
									});

									this.inProgress = this._("uploading");
									reader.readAsText(file);
								}
							}
						}
					});

					return button;
				},
				optional: true
			},

			login: {
				action: function() {
					this.primaryBackend.login();
				},
				permission: "login"
			},

			logout: {
				action: function() {
					this.primaryBackend.logout();
				},
				permission: "logout"
			}
		},
	}
});

})(Bliss, Bliss.$);

(function ($, $$) {

var _ = Mavo.UI.Message = $.Class({
	constructor: function(mavo, message, o = {}) {
		this.mavo = mavo;
		this.message = message;
		this.closed = Mavo.promise();
		this.options = o;

		this.element = $.create({
			className: "mv-ui mv-message" + (o.type? " mv-" + o.type : ""),
			[$.type(this.message) == "string"? "innerHTML" : "contents"]: this.message,
			events: {
				click: e => Mavo.scrollIntoViewIfNeeded(this.mavo.element)
			},
			[this.mavo.bar? "after" : "start"]: (this.mavo.bar || this.mavo).element
		});

		if (o.style) {
			$.style(this.element, o.style);
		}

		if (o.classes) {
			this.element.classList.add(...o.classes.split(/\s+/));
		}

		if (o.type == "error") {
			this.element.setAttribute("role", "alert");
		}
		else {
			this.element.setAttribute("aria-live", "polite");
		}

		o.dismiss = o.dismiss || {};

		if (typeof o.dismiss == "string" || Array.isArray(o.dismiss)) {
			var dismiss = {};

			Mavo.toArray(o.dismiss).forEach(prop => {
				dismiss[prop] = true;
			});

			o.dismiss = dismiss;
		}

		if (o.dismiss.button) {
			$.create("button", {
				type: "button",
				className: "mv-close mv-ui",
				textContent: "Ã—",
				events: {
					"click": evt => this.close()
				},
				start: this.element,
				title: this.mavo._("dismiss")
			});
		}

		if (o.dismiss.timeout) {
			var timeout = typeof o.dismiss.timeout === "number"? o.dismiss.timeout : 5000;

			$.bind(this.element, {
				mouseenter: e => clearTimeout(this.closeTimeout),
				mouseleave: Mavo.rr(e => this.closeTimeout = setTimeout(() => this.close(), timeout)),
			});
		}

		if (o.dismiss.submit) {
			this.element.addEventListener("submit", evt => {
				evt.preventDefault();
				this.close(evt.target);
			});
		}
	},

	async close (resolve) {
		// clearTimeout, make the callback available for garbage collection, and make it easier to debug memory issues
		// it does nothing if there is no timeout callback.
		clearTimeout(this.closeTimeout);
		var duration = this.element.style.transition ? 1000 * parseFloat(window.getComputedStyle(this.element, null).transitionDuration) : 400;
		await $.transition(this.element, {opacity: 0}, duration);

		$.remove(this.element);
		this.closed.resolve(resolve);
	}
});

})(Bliss, Bliss.$);

(function($, $$) {

var _ = Mavo.Permissions = $.Class({
	constructor: function(o) {
		this.triggers = [];
		this.hooks = new $.Hooks();

		// If we donâ€™t do this, there is no way to retrieve this from inside parentChanged
		this.parentChanged = _.prototype.parentChanged.bind(this);

		this.set(o);
	},

	// Set multiple permissions at once
	set: function(o) {
		for (var action in o) {
			this[action] = o[action];
		}
	},

	// Set a bunch of permissions to true. Chainable.
	on: function(actions) {
		Mavo.toArray(actions).forEach(action => this[action] = true);

		return this;
	},

	// Set a bunch of permissions to false. Chainable.
	off: function(actions) {
		actions = Array.isArray(actions)? actions : [actions];

		actions.forEach(action => this[action] = false);

		return this;
	},

	// Fired once at least one of the actions passed can be performed
	// Kind of like a Promise that can be resolved multiple times.
	can: function(actions, callback, cannot) {
		this.observe(actions, true, callback);

		if (cannot) {
			// Fired once the action cannot be done anymore, even though it could be done before
			this.cannot(actions, cannot);
		}
	},

	// Fired once NONE of the actions can be performed
	cannot: function(actions, callback) {
		this.observe(actions, false, callback);
	},

	// Schedule a callback for when a set of permissions changes value
	observe: function(actions, value, callback) {
		actions = Mavo.toArray(actions);

		if (this.is(actions, value)) {
			// Should be fired immediately
			callback();
		}

		// For future transitions
		this.triggers.push({ actions, value, callback, active: true });
	},

	// Compare a set of permissions with true or false
	// If comparing with true, we want at least one to be true, i.e. OR
	// If comparing with false, we want ALL to be false, i.e. NOR
	is: function(actions, able = true) {
		var or = Mavo.toArray(actions).map(action => !!this[action])
		                .reduce((prev, current) => prev || current);

		return able? or : !or;
	},

	// Monitor all changes
	onchange: function(callback) {
		// Future changes
		this.hooks.add("change", callback);

		// Fire for current values
		_.actions.forEach(action => {
			callback.call(this, {action, value: this[action]});
		});
	},

	parentChanged: function(o = {}) {
		var localValue = this["_" + o.action];

		if (localValue !== undefined || o.from == o.value) {
			// We have a local value so we donâ€™t care about parent changes OR nothing changed
			return;
		}

		this.fireTriggers(o.action);

		this.hooks.run("change", $.extend({context: this}, o));
	},

	// A single permission changed value
	changed: function(action, value, from) {
		from = !!from;
		value = !!value;

		if (value == from) {
			// Nothing changed
			return;
		}

		// $.live() calls the setter before the actual property is set so we
		// need to set it manually, otherwise it still has its previous value
		this["_" + action] = value;

		this.fireTriggers(action);

		this.hooks.run("change", {action, value, from, context: this});
	},

	fireTriggers: function(action) {
		this.triggers.forEach(trigger => {
			var match = this.is(trigger.actions, trigger.value);

			if (trigger.active && trigger.actions.indexOf(action) > -1 && match) {

				trigger.active = false;
				trigger.callback();
			}
			else if (!match) {
				// This is so that triggers can only be executed in an actual transition
				// And that if there is a trigger for [a,b] it won't be executed twice
				// if a and b are set to true one after the other
				trigger.active = true;
			}
		});
	},

	or: function(permissions) {
		_.actions.forEach(action => {
			this[action] = this[action] || permissions[action];
		});

		return this;
	},

	live: {
		parent: function(parent) {
			var oldParent = this._parent;

			if (oldParent == parent) {
				return;
			}

			this._parent = parent;

			// Remove previous trigger, if any
			if (oldParent) {
				Mavo.delete(oldParent.hooks.change, this.parentChanged);
			}

			// What changes does this cause? Fire triggers for them
			_.actions.forEach(action => {
				this.parentChanged({
					action,
					value: parent? parent[action] : undefined,
					from: oldParent? oldParent[action] : undefined
				});
			});

			if (parent) {
				// Add new trigger
				parent.onchange(this.parentChanged);
			}
		}
	},

	static: {
		actions: [],

		// Register a new permission type
		register: function(action, setter) {
			if (Array.isArray(action)) {
				action.forEach(action => _.register(action, setter));
				return;
			}

			$.live(_.prototype, action, {
				get: function() {
					var ret = this["_" + action];

					if (ret === undefined && this.parent) {
						return this.parent[action];
					}

					return ret;
				},
				set: function(able, previous) {
					if (setter) {
						setter.call(this, able, previous);
					}

					this.changed(action, able, previous);
				}
			});

			_.actions.push(action);
		}
	}
});

_.register(["read", "save"]);

_.register("login", function(can) {
	if (can && this.logout) {
		this.logout = false;
	}
});

_.register("logout", function(can) {
	if (can && this.login) {
		this.login = false;
	}
});

_.register("edit", function(can) {
	if (can) {
		this.add = this.delete = true;
	}
});

_.register(["add", "delete"], function(can) {
	if (!can) {
		this.edit = false;
	}
});

})(Bliss, Bliss.$);

(function($, $$) {

/**
 * Base class for all backends
 */
var _ = Mavo.Backend = $.Class({
	constructor: function(url, o = {}) {
		this.update(url, o);

		// Permissions of this particular backend.
		this.permissions = new Mavo.Permissions();
	},

	update: function(url, o = {}) {
		this.source = url;
		this.url = new URL(this.source, Mavo.base);
		this.mavo = o.mavo;
		this.format = Mavo.Formats.create(o.format, this);
	},

	async get (url = new URL(this.url)) {
		if (url.protocol != "data:") {
			url.searchParams.set("timestamp", Date.now()); // ensure fresh copy
		}

		try {
			let xhr = await $.fetch(url.href);
			return xhr.responseText;
		}
		catch (e) {
			return null;
		}
	},

	async load () {
		await this.ready;
		let response = await this.get();

		if (typeof response != "string") {
			// Backend did the parsing, we're done here
			return response;
		}

		response = response.replace(/^\ufeff/, ""); // Remove Unicode BOM

		return this.format.parse(response);
	},

	async store (data, {path, format = this.format} = {}) {
		await this.ready;

		var serialized = typeof data === "string"? data : await format.stringify(data);
		await this.put(serialized, path);

		return {data, serialized};
	},

	// To be be overriden by subclasses
	ready: Promise.resolve(),
	login: () => Promise.resolve(),
	logout: () => Promise.resolve(),
	put: () => Promise.reject(),

	isAuthenticated: function() {
		return !!this.accessToken;
	},

	// Any extra params to be passed to the oAuth URL.
	oAuthParams: () => "",

	toString: function() {
		return `${this.id} (${this.url})`;
	},

	equals: function(backend) {
		return backend === this || (backend && this.id == backend.id && this.source == backend.source);
	},

	/**
	 * Helper for making OAuth requests with JSON-based APIs.
	 */
	request: function(call, data, method = "GET", req = {}) {
		req = $.extend({}, req); // clone
		req.method = req.method || method;
		req.responseType = req.responseType || "json";

		req.headers = $.extend({
			"Content-Type": "application/json; charset=utf-8"
		}, req.headers || {});

		if (this.isAuthenticated()) {
			req.headers["Authorization"] = req.headers["Authorization"] || `Bearer ${this.accessToken}`;
		}

		req.data = data;

		call = new URL(call, this.constructor.apiDomain);

		// Prevent getting a cached response. Cache-control is often not allowed via CORS
		if (req.method == "GET") {
			call.searchParams.set("timestamp", Date.now());
		}

		if ($.type(req.data) === "object") {
			if (req.method == "GET") {
				for (let p in req.data) {
					let action = req.data[p] === undefined? "delete" : "set";
					call.searchParams[action](p, req.data[p]);
				}

				delete req.data;
			}
			else {
				req.data = JSON.stringify(req.data);
			}
		}

		return $.fetch(call, req)
			.catch(err => {
				if (err?.xhr) {
					return Promise.reject(err.xhr);
				}
				else {
					this.mavo.error("Something went wrong while connecting to " + this.id, err);
				}
			})
			.then(xhr => req.method == "HEAD"? xhr : xhr.response);
	},

	/**
	 * Helper method for authenticating in OAuth APIs
	 */
	oAuthenticate: function(passive) {
		return this.ready.then(() => {
			if (this.isAuthenticated()) {
				return Promise.resolve();
			}

			return new Promise((resolve, reject) => {
				var id = this.id.toLowerCase();

				if (passive) {
					this.accessToken = localStorage[`mavo:${id}token`];

					if (this.accessToken) {
						resolve(this.accessToken);
					}
				}
				else {
					// Show window
					var popup = {
						width: Math.min(1000, innerWidth - 100),
						height: Math.min(800, innerHeight - 100)
					};

					popup.top = (screen.height - popup.height)/2;
					popup.left = (screen.width - popup.width)/2;

					var state = {
						url: location.href,
						backend: this.id
					};

					this.authPopup = open(`${this.constructor.oAuth}?client_id=${this.key}&state=${encodeURIComponent(JSON.stringify(state))}` + this.oAuthParams(),
						"popup", `width=${popup.width},height=${popup.height},left=${popup.left},top=${popup.top}`);

					if (!this.authPopup) {
						var message = "Login popup was blocked! Please check your popup blocker settings.";
						this.mavo.error(message);
						reject(Error(message));
					}

					addEventListener("message", evt => {
						if (evt.source === this.authPopup) {
							if (evt.data.backend == this.id) {
								this.accessToken = localStorage[`mavo:${id}token`] = evt.data.token;
							}

							if (!this.accessToken) {
								reject(Error("Authentication error"));
							}

							resolve(this.accessToken);

							// Log in to other similar backends that are logged out
							for (var appid in Mavo.all) {
								var storage = Mavo.all[appid].primaryBackend;

								if (storage
									&& storage.id === this.id
									&& storage !== this
									&& !storage.isAuthenticated()) {
										storage.login(true);
								}
							}
						}
					});
				}
			});
		});
	},

	/**
	 * oAuth logout helper
	 */
	oAuthLogout: function() {
		if (this.isAuthenticated()) {
			var id = this.id.toLowerCase();

			localStorage.removeItem(`mavo:${id}token`);
			delete this.accessToken;

			this.permissions.off(["edit", "add", "delete", "save"]).on("login");

			$.fire(this.mavo.element, "mv-logout", {backend: this});
		}

		return Promise.resolve();
	},

	static: {
		// Return the appropriate backend(s) for this url
		create: function(url, o, type, existing) {
			var Backend;

			if (type) {
				Backend = Mavo.Functions.get(_, type);
			}

			if (url && !Backend) {
				Backend = _.types.filter(Backend => Backend.test(url))[0] || _.Remote;
			}

			// Can we re-use the existing object perhaps?
			if (Backend && existing?.constructor === Backend && existing.constructor.prototype.hasOwnProperty("update")) {
				existing.update(url, o);
				return existing;
			}

			return Backend? new Backend(url, o) : null;
		},

		types: [],

		register: function(Class) {
			_[Class.prototype.id] = Class;
			_.types.push(Class);
			return Class;
		}
	}
});

/**
 * Save in an HTML element
 */
_.register($.Class({
	id: "Element",
	extends: _,
	constructor: function () {
		this.permissions.on(["read", "edit", "save"]);
	},

	update: function(url, o) {
		this.super.update.call(this, url, o);

		this.element = $(this.source) || $.create("script", {
			type: "application/json",
			id: this.source.slice(1),
			inside: document.body
		});
	},

	get: function() {
		return Promise.resolve(this.element.textContent);
	},

	put: function(serialized) {
		return Promise.resolve(this.element.textContent = serialized);
	},

	static: {
		test: url => url.indexOf("#") === 0
	}
}));

// Load from a remote URL, no save
_.register($.Class({
	id: "Remote",
	extends: _,
	constructor: function() {
		this.permissions.on("read");
	},

	static: {
		test: url => false
	}
}));

// Save in localStorage
_.register($.Class({
	extends: _,
	id: "Local",
	constructor: function() {
		this.permissions.on(["read", "edit", "save"]);
		this.key = this.mavo.id;
	},

	get: function() {
		return Promise[this.key in localStorage? "resolve" : "reject"](localStorage[this.key]);
	},

	put: function(serialized) {
		if (!serialized) {
			delete localStorage[this.key];
		}
		else {
			localStorage[this.key] = serialized;
		}

		return Promise.resolve(serialized);
	},

	static: {
		test: value => value == "local"
	}
}));

})(Bliss, Bliss.$);

(function($, $$) {

var _ = Mavo.Formats = {};

var base = _.Base = $.Class({
	abstract: true,
	constructor: function(backend) {
		this.backend = backend;
	},
	proxy: {
		"mavo": "backend"
	},

	// So that child classes can only override the static methods if they don't
	// need access to any instance variables.
	parse: function(content) {
		return this.constructor.parse(content, this);
	},
	stringify: function(data) {
		return this.constructor.stringify(data, this);
	},

	static: {
		parse: serialized => Promise.resolve(serialized),
		stringify: data => Promise.resolve(data),
		extensions: [],
		dependencies: [],
		ready: function() {
			return Promise.all(this.dependencies.map(d => $.include(d.test(), d.url)));
		}
	}
});

var json = _.JSON = $.Class({
	extends: _.Base,
	static: {
		parse: serialized => Promise.resolve(serialized? JSON.parse(serialized) : null),
		stringify: data => Promise.resolve(Mavo.toJSON(data)),
		extensions: [".json", ".jsonld"]
	}
});

var text = _.Text = $.Class({
	extends: _.Base,
	constructor: function(backend) {
		this.property = this.mavo.root.getNames("Primitive")[0];
	},

	static: {
		extensions: [".txt"],
		parse: (serialized, me) => Promise.resolve({[me? me.property : "content"]: serialized}),
		stringify: (data, me) => Promise.resolve(data[me? me.property : "content"])
	}
});

var csv = _.CSV = $.Class({
	extends: _.Base,
	constructor: function(backend) {
		this.property = this.mavo.root.getNames("Collection")[0];
		this.options = $.extend({}, _.CSV.defaultOptions);
	},

	static: {
		extensions: [".csv", ".tsv"],
		defaultOptions: {
			header: true,
			dynamicTyping: true,
			skipEmptyLines: true
		},
		dependencies: [{
			test: () => self.Papa,
			url: "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.1.4/papaparse.min.js"
		}],
		ready: base.ready,
		parse: async (serialized, me) => {
			await csv.ready();
			var data = Papa.parse(serialized, csv.defaultOptions);
			var property = me? me.property : "content";

			if (me) {
				// Get delimiter & linebreak for serialization
				me.options.delimiter = data.meta.delimiter;
				me.options.linebreak = data.meta.linebreak;
			}

			if (data.meta.aborted) {
				throw data.meta.errors.pop();
			}

			return {
				[property]: data.data
			};
		},

		stringify: async (data, me) => {
			await csv.ready();
			var property = me? me.property : "content";
			var options = me? me.options : csv.defaultOptions;
			return Papa.unparse(data[property], options);
		}
	}
});

Object.defineProperty(_, "create", {
	value: function(format, backend) {
		if (format && typeof format === "object") {
			return format;
		}

		if (typeof format === "string") {
			// Search by id
			format = format.toLowerCase();

			for (var id in _) {
				var Format = _[id];

				if (id.toLowerCase() == format) {
					return new Format(backend);
				}
			}
		}

		if (!format) {
			var url = backend.url? backend.url.pathname : backend.source;
			var extension = url.match(/\.\w+$/)?.[0] ?? ".json";
			var Format = _.JSON;

			for (var id in _) {
				if (_[id].extensions.indexOf(extension) > -1) {
					// Do not return match, as we may find another match later
					// and last match wins
					Format = _[id];
				}
			}

			return new Format(backend);
		}
	}
});

})(Bliss, Bliss.$);

(function($, $$) {

var _ = Mavo.Node = class Node {
	constructor (element, mavo, options = {}) {
		if (!element || !mavo) {
			throw new Error("Mavo.Node constructor requires an element argument and a mavo object");
		}

		var env = {context: this, options};

		// Set these first, for debug reasons
		this.uid = _.all.push(this) - 1;
		this.property = null;
		this.element = element;
		this.isHelperVariable = this.element.matches("meta");

		$.extend(this, env.options);

		_.elements.set(element, [...(_.elements.get(this.element) || []), this]);

		this.mavo = mavo;
		this.group = this.parent = this.parentGroup = env.options.group;

		this.template = env.options.template;

		this.alias = this.element.getAttribute("mv-alias");

		if (this.template) {
			this.template.copies.push(this);
		}
		else {
			// First (or only) of its kind
			this.copies = [];
		}

		if (!this.fromTemplate("property", "type", "storage", "path")) {
			this.property = _.getProperty(element);
			this.type = Mavo.Group.normalize(element);
			this.storage = this.element.getAttribute("mv-storage");
			this.path = this.getPath();
		}

		this.modes = this.element.getAttribute("mv-mode");

		Mavo.hooks.run("node-init-start", env);

		this.mode = Mavo.getStyle(this.element, "--mv-mode") || "read";

		this.collection = env.options.collection;

		if (this.collection) {
			// This is a collection item
			this.group = this.parentGroup = this.collection.parentGroup;
		}

		// Must run before collections have a marker which messes up paths
		var template = this.template;

		if (template?.expressions) {
			// We know which expressions we have, don't traverse again
			this.expressions = template.expressions.map(et => new Mavo.DOMExpression({
				template: et,
				item: this,
				mavo: this.mavo
			}));
		}

		if (this instanceof Mavo.Group || this.collection) {
			// Handle mv-value
			// TODO integrate with the code in Primitive that decides whether this is a computed property
			var et = Mavo.DOMExpression.search(this.element).filter(et => et.originalAttribute == "mv-value")[0];

			if (et) {
				et.mavoNode = this;
				this.expressionText = et;
				this.storage = this.storage || "none";
				this.modes = "read";

				if (this.collection) {
					this.collection.expressions = [...(this.collection.expressions || []), et];
					et.mavoNode = this.collection;
					this.collection.storage = this.collection.storage || "none";
					this.collection.modes = "read";
				}
			}
		}

		Mavo.hooks.run("node-init-end", env);
	}

	get editing() {
		return this.mode == "edit";
	}

	get isRoot() {
		return !this.property;
	}

	get name() {
		return Mavo.Functions.readable(this.property || this.type).toLowerCase();
	}

	get saved() {
		return this.storage !== "none";
	}

	get properties() {
		return Object.keys(this.liveData.data[Mavo.route]);
	}

	/**
	 * Runs after the constructor is done (including the constructor of the inheriting class), synchronously
	 */
	postInit () {
		if (this.modes == "edit") {
			this.edit();
		}
	}

	destroy () {
		if (this.template) {
			Mavo.delete(this.template.copies, this);
		}

		if (this.expressions) {
			this.expressions.forEach(expression => expression.destroy());
		}

		if (this.itembar) {
			this.itembar.destroy();
		}

		delete _.all[this.uid];

		this.propagate("destroy");
	}

	getLiveData () {
		return this.liveData.proxy;
	}

	isDataNull (o = {}) {
		var env = {
			context: this,
			options: o,
			result: !this.saved && !o.live
		};

		Mavo.hooks.run("node-isdatanull", env);

		return env.result;
	}

	/**
	 * Execute a callback on every node of the Mavo tree
	 * If callback returns (strict) false, walk stops.
	 * @param callback {Function}
	 * @param path {Array} Initial path. Mostly used internally.
	 * @param o {Object} Options:
	 * 			- descentReturn {Boolean} If callback returns false, just don't descend
	 * 			                Otherwise, if callback returns false, it stops.
	 * @return false if was stopped via a false return value, true otherwise
	 */
	walk (callback, path = [], o = {}) {
		var walker = (obj, path) => {
			var ret = callback(obj, path);

			if (ret !== false) {
				for (let i in obj.children) {
					let node = obj.children[i];

					if (node instanceof Mavo.Node) {
						var ret = walker.call(node, node, [...path, i]);

						if (ret === false && !o.descentReturn) {
							return false;
						}
					}
				}
			}

			return ret !== false;
		};

		return walker(this, path);
	}

	walkUp (callback) {
		var group = this;

		while (group = group.parentGroup) {
			var ret = callback(group);

			if (ret !== undefined) {
				return ret;
			}
		}
	}

	edit () {
		this.mode = "edit";

		if (this.mode != "edit") {
			return false;
		}

		$.fire(this.element, "mv-edit", {
			mavo: this.mavo,
			node: this
		});

		Mavo.hooks.run("node-edit-end", this);
	}

	done () {
		this.mode = Mavo.getStyle(this.element.parentNode, "--mv-mode") || "read";

		if (this.mode != "read") {
			return false;
		}

		$.unbind(this.element, ".mavo:edit");

		$.fire(this.element, "mv-done", {
			mavo: this.mavo,
			node: this
		});

		this.propagate("done");

		Mavo.hooks.run("node-done-end", this);
	}

	save () {
		this.unsavedChanges = false;

		this.propagate("save");
	}

	propagate (callback) {
		for (let i in this.children) {
			let node = this.children[i];

			if (node instanceof Mavo.Node) {
				if (typeof callback === "function") {
					callback.call(node, node);
				}
				else if (callback in node) {
					node[callback]();
				}
			}
		}
	}

	fromTemplate (...properties) {
		if (this.template) {
			properties.forEach(property => this[property] = this.template[property]);
		}

		return !!this.template;
	}

	render (data, o = {}) {
		o.live = o.live || Mavo.in(Mavo.isProxy, data);
		o.root = o.root || this;

		if (o.live) {
			// Drop proxy
			data = Mavo.clone(data);
		}

		this.oldData = this.data;
		this.data = data;

		if (!o.live) {
			data = Mavo.subset(data, this.inPath);
		}

		var env = {context: this, data, options: o};

		Mavo.hooks.run("node-render-start", env);

		if (!this.isHelperVariable) {
			if (!Array.isArray(this.children) && Array.isArray(env.data)) {
				// We are rendering an array on a singleton, what to do?
				if (this.isRoot) {
					// Get the name of the first property that is a collection without mv-value
					// OR if there is a collection with property="main", prioritize that
					var mainProperty = this.children.main instanceof Mavo.Collection? "main" : this.getNames((p, n) => {
						return n instanceof Mavo.Collection && !n.expressions?.[0]?.isDynamicObject;
					})[0];

					if (mainProperty) {
						env.data = {
							[mainProperty]: env.data
						};
					}
				}

				if (!this.isRoot || !mainProperty) {
					// Otherwise, render first item
					this.inPath.push("0");
					env.data = env.data[0];
				}
			}
			else if (this.childrenNames?.length == 1 && this.childrenNames[0] === this.property
			         && env.data !== null && Mavo.isPlainObject(env.data)) {
				// {foo: {foo: 5}} should become {foo: 5}
				env.data = env.data[this.property];
			}
		}

		if (this === o.root) {
			this.expressionsEnabled = false;
		}

		var editing = this.editing;

		if (editing) {
			this.done();
		}

		var changed = this.dataRender(env.data, o);

		if (editing) {
			this.edit();
		}

		if (this === o.root) {
			this.save();

			this.expressionsEnabled = true;

			if (changed) {
				requestAnimationFrame(() => this.mavo.expressions.update(this));
			}
		}

		Mavo.hooks.run("node-render-end", env);

		return changed;
	}

	dataChanged (action, o = {}) {
		var change = $.extend({
			action,
			property: this.property,
			mavo: this.mavo,
			node: this
		}, o);

		$.fire(o.element || this.element, "mv-change", change);
		this.mavo.changed(change);
	}

	toString () {
		return `#${this.uid}: ${this.constructor.name} (${this.property})`;
	}

	getClosestCollection () {
		var closestItem = this.closestItem;

		return closestItem? closestItem.collection : null;
	}

	getClosestItem () {
		if (Array.isArray(this.collection?.children)) {
			return this;
		}

		return this.parentGroup?.closestItem || null;
	}

	getPath () {
		var path = this.parent?.path || [];
		return this.property? [...path, this.property] : path;
	}

	pathFrom (node) {
		var path = this.path;
		var nodePath = node.path;

		for (var i = 0; i<path.length && nodePath[i] == path[i]; i++) {}

		return path.slice(i);
	}

	getDescendant (path) {
		return path.reduce((acc, cur) => acc.children[cur], this);
	}

	/**
	 * Get same node in other item in same collection
	 * E.g. for same node in the next item, use an offset of -1
	 */
	getCousin (offset, o = {}) {
		if (!this.closestCollection) {
			return null;
		}

		var collection = this.closestCollection;
		var distance = Math.abs(offset);
		var direction =  offset < 0? -1 : 1;

		if (collection.length < distance + 1) {
			return null;
		}

		var index = this.closestItem.index + offset;

		if (o.wrap) {
			index = Mavo.wrap(index, collection.length);
		}

		for (var i = 0; i<collection.length; i++) {
			var ind = index + i * direction;

			if (o.wrap) {
				ind = Mavo.wrap(ind, collection.length);
			}

			var item = collection.children[ind];

			if (item) {
				break;
			}
		}

		if (!item || item == this.closestItem) {
			return null;
		}

		if (this.collection) {
			return item;
		}

		var relativePath = this.pathFrom(this.closestItem);
		return item.getDescendant(relativePath);
	}

	contains (node) {
		do {
			if (node === this) {
				return true;
			}

			node = node.parent;
		}
		while (node);

		return false;
	}

	// Evaluate expression on the fly with this node as context
	eval(expr, o) {
		return new Mavo.Expression(expr).eval(this.getLiveData(), o);
	}

	static create (element, mavo, o = {}) {
		if (Mavo.is("multiple", element) && !o.collection) {
			return new Mavo.Collection(element, mavo, o);
		}

		return new Mavo[Mavo.is("group", element)? "Group" : "Primitive"](element, mavo, o);
	}

	/**
	 * Get & normalize property name, if exists
	 */
	static getProperty (element) {
		var property = element.getAttribute("property") || element.getAttribute("itemprop");

		if (!property) {
			var multiple = element.getAttribute("mv-multiple");

			if (element.hasAttribute("property")) { // property used without a value
				property = multiple || element.name || element.id || element.classList[0];

				if (!property) {
					property = _.generatePropertyName(multiple === null? "prop" : "collection", element);
				}
			}
		}

		if (property) {
			element.setAttribute("property", property);
		}

		return property;
	}

	static generatePropertyName(prefix, element = document.documentElement) {
		var root = element.closest(Mavo.selectors.init);

		for (var i=""; i<10000; i++) { // 1000 is just a failsafe
			var name = prefix + i;

			if (!$(Mavo.selectors.specificProperty(name), root)) {
				return name;
			}
		}
	}

	static get (element, prioritizePrimitive) {
		var nodes = (_.elements.get(element) || []).filter(node => !(Array.isArray(node.children)));

		if (nodes.length < 2 || !prioritizePrimitive) {
			return nodes[0];
		}

		if (nodes[0] instanceof Mavo.Group) {
			return nodes[1];
		}
	}

	static getClosest (element, prioritizePrimitive) {
		var node;

		do {
			node = _.get(element, prioritizePrimitive);
		} while (!node && (element = element.parentNode));

		return node;
	}

	static getClosestItem (element) {
		var item = _.getClosest(element);

		if (item instanceof Mavo.Primitive && !item.collection) {
			return item.parent;
		}

		return item;
	}

	/**
	 * Get all properties that are inside an element but not nested into other properties
	 */
	static children (element) {
		var ret = Mavo.Node.get(element);

		if (ret) {
			// element is a Mavo node
			return [ret];
		}

		ret = $$(Mavo.selectors.property, element)
			.map(e => Mavo.Node.get(e))
			.filter(e => !element.contains(e.parentGroup.element)) // drop nested properties
			.map(e => e.collection || e);

		return Mavo.Functions.unique(ret);
	}
};

$.Class(_, {
	toJSON: Mavo.prototype.toJSON,

	lazy: {
		closestCollection: function() {
			return this.getClosestCollection();
		},

		closestItem: function() {
			return this.getClosestItem();
		},

		// Are we only rendering and editing a subset of the data?
		inPath: function() {
			var attribute = this instanceof Mavo.Collection? "mv-multiple-path" : "mv-path";

			return (this.element.getAttribute(attribute) || "").split("/").filter(p => p.length);
		}
	},

	live: {
		store: function(value) {
			$.toggleAttribute(this.element, "mv-storage", value);
		},

		unsavedChanges: function(value) {
			if (value && (!this.saved || !this.editing)) {
				value = false;
			}

			if (!Array.isArray(this.children)) {
				this.element.classList.toggle("mv-unsaved-changes", value);
			}

			return value;
		},

		mode: function (value) {
			if (this._mode != value) {
				// Is it allowed?
				if (this.modes && value != this.modes) {
					value = this.modes;
				}

				// If we don't do this, setting the attribute below will
				// result in infinite recursion
				this._mode = value;

				if (!Array.isArray(this.children) && [null, "", "read", "edit"].indexOf(this.element.getAttribute("mv-mode")) > -1) {
					// If attribute is not one of the recognized values, leave it alone
					var set = this.modes || value == "edit";
					this.mavo.sneak({attribute: "mv-mode"}, () => {
						$.toggleAttribute(this.element, "mv-mode", value, set);
					});
				}

				return value;
			}
		},

		modes: function(value) {
			if (value && value != "read" && value != "edit") {
				return null;
			}

			this._modes = value;

			if (value && this.mode != value) {
				this.mode = value;
			}
		},

		collection: function(value) {
			// These only change when collection changes
			this.parent = value || this.parentGroup;
		},

		index: function(value) {
			if (this._index !== value) {
				this._index = value;
				this.liveData.updateKey();
			}
		},

		expressionsEnabled: {
			get: function() {
				if (this._expressionsEnabled === false) {
					return false;
				}
				else {
					return this.parent? this.parent.expressionsEnabled : true;
				}
			}
		}
	},

	static: {
		all: [],
		elements: new WeakMap()
	}
});

Mavo.observe({attribute: "mv-storage"}, function({node}) {
	// Handle dynamic mv-storage on Mavo nodes (Fix for #576)
	if (node) {
		node.storage = node.element.getAttribute("mv-storage");
	}
});

})(Bliss, Bliss.$);

(function($, $$) {

var _ = Mavo.Group = class Group extends Mavo.Node {
	constructor (element, mavo, o) {
		super(element, mavo, o);

		this.children = {};

		this.group = this;

		Mavo.hooks.run("group-init-start", this);

		// Should this element also create a primitive?
		if (Mavo.Primitive.getValueAttribute(this.element)) {
			var obj = this.children[this.property] = new Mavo.Primitive(this.element, this.mavo, {group: this});
		}

		// Create Mavo objects for all properties in this group (primitives or groups),
		// but not properties in descendant groups (they will be handled by their group)
		var properties = $$(Mavo.selectors.property + ", " + Mavo.selectors.multiple, this.element).filter(element => {
			return this.element === (element.parentNode.closest(Mavo.selectors.childGroup) || this.mavo.element);
		});

		// Figure out which properties are mv-multiple
		var collections = {};
		properties.forEach(element => {
			var property = Mavo.Node.getProperty(element);

			if (collections[property] !== "multiple") {
				collections[property] = Mavo.is("multiple", element)? "multiple" : (collections[property] || 0) + 1;
			}
		});

		// Now create the node objects
		properties.forEach((element, i) => {
			var property = Mavo.Node.getProperty(element);
			var template = this.template? this.template.children[property] : null;
			var options = {template, group: this};
			var isCollection = collections[property];

			if (isCollection === "multiple") {
				var existing = this.children[property];

				if (existing instanceof Mavo.Collection) {
					existing.add(element);
				}
				else if (Mavo.is("multiple", element)) {
					// We must create the collection with the element that actually has mv-multiple
					// otherwise the template will be all wrong
					this.children[property] = new Mavo.Collection(element, this.mavo, options);
					(existing || []).forEach((e, i) => this.children[property].add(e, i));
				}
				else {
					this.children[property] = [...(existing || []), element];
				}
			}
			else if (isCollection > 1) {
				if (!this.children[property]) {
					this.children[property] = new Mavo.ImplicitCollection(element, this.mavo, options);
				}
				else {
					this.children[property].add(element);
				}
			}
			else {
				// Normal case
				this.children[property] = Mavo.Node.create(element, this.mavo, options);
			}
		});

		this.childrenNames = Object.keys(this.children);

		this.vocab = Mavo.getClosestAttribute(this.element, "vocab");

		this.postInit();

		Mavo.hooks.run("group-init-end", this);
	}

	get isRoot() {
		return !this.property;
	}

	getNames (type = "Node") {
		var filter = typeof type === "function"? type : (p, n) => n instanceof Mavo[type];
		return Object.keys(this.children).filter(p => filter(p, this.children[p]));
	}

	getData (o = {}) {
		var env = {
			context: this,
			options: o
		};

		if (this.isDataNull(o)) {
			return null;
		}

		env.data = Mavo.shallowClone(Mavo.subset(this.data, this.inPath)) || {};

		for (var property in this.children) {
			var obj = this.children[property];

			if (obj.saved) {
				var data = obj.getData(env.options);
			}

			if (obj.saved && Mavo.value(data) !== null) {
				env.data[obj.property] = data;
			}
			else {
				delete env.data[obj.property];
			}
		}

		if (!this.childrenNames.length && !this.isRoot && !this.collection) {
			// Avoid {} in the data
			env.data = null;
		}
		else if (this.childrenNames.length === 1 && this.property in this.children) {
			env.data = env.data[this.property];
		}
		else if (env.data && typeof env.data === "object") {
			// Add JSON-LD stuff
			if (this.type && this.type != _.DEFAULT_TYPE) {
				env.data["@type"] = this.type;
			}

			if (this.vocab) {
				env.data["@context"] = this.vocab;
			}
		}

		// If storing, use the rendered data too
		env.data = Mavo.subset(this.data, this.inPath, env.data);

		Mavo.hooks.run("node-getdata-end", env);

		return env.data;
	}

	edit (o = {}) {
		if (super.edit() === false) {
			return false;
		}

		return Promise.all(Object.keys(this.children).map(prop => this.children[prop].edit(o)));
	}

	dataRender (data, o = {}) {
		if (!data) {
			return;
		}

		var changed = false;

		// What if data is not an object?
		if (typeof data !== "object") {
			var wasPrimitive = true;

			// Data is a primitive, render it on this.property or failing that, any writable property
			if (this.property in this.children) {
				var property = this.property;
			}
			else {
				var type = $.type(data);
				var score = prop => (this.children[prop] instanceof Mavo.Primitive) + (this.children[prop].datatype == type);

				var property = Object.keys(this.children)
					.filter(p => !this.children[p].expressionText)
					.sort((prop1, prop2) => score(prop1) - score(prop2))
					.reverse()[0];
			}

			if (!property) {
				// No appropriate property found, use this.property
				property = this.property;
				var noWriteableProperty = true;
			}
			
			data = {[property]: data};

			this.data = Mavo.subset(this.data, this.inPath, data);
		}

		var copy; // to handle renaming

		this.propagate(obj => {
			var propertyData = data[obj.property];

			// find first alias with data, load that data, and set to be copied
			if (obj.alias) {
				var aliasesArr = obj.alias.split(" ");

				for (let i = 0; i < aliasesArr.length; i++) {
					var currentAlias = aliasesArr[i];

					if (data[currentAlias] !== undefined) {
						obj.currentAlias = currentAlias;
						copy = copy || $.extend({}, data);
						propertyData = data[obj.currentAlias];
						break;
					}

				}

			}

			changed = obj.render(propertyData, o) || changed;
		});

		// Rename properties. This needs to be done separately to handle swapping.
		if (copy) {
			this.propagate(obj => {
				if (obj.currentAlias) {
					data[obj.property] = copy[obj.currentAlias];

					if (!(obj.currentAlias in this.children)) {
						delete data[obj.currentAlias];
					}
				}
			});
		}

		if (!wasPrimitive || noWriteableProperty) {
			// Fire mv-change events for properties not in the template,
			// since nothing else will and they can still be referenced in expressions
			var oldData = Mavo.subset(this.oldData, this.inPath);

			for (var property in data) {
				if (!(property in this.children)) {
					var value = data[property];
					changed = changed || data[property] !== this.liveData.data[property];

					this.liveData.set(property, value);

					if (typeof value != "object" && (!oldData || oldData[property] != value)) {
						// Property actually changed. Why != "object" though?
						this.dataChanged("propertychange", {property});
					}
				}
			}
		}

		return changed;
	}

	static normalize (element) {
		// Get & normalize typeof name, if exists
		if (Mavo.is("group", element)) {
			var type = Mavo.getAttribute(element, "typeof", "mv-group") || _.DEFAULT_TYPE;

			element.setAttribute("typeof", type);

			return type;
		}

		return null;
	}
};

$.Class(_, {
	lazy: {
		liveData: function() {
			return new Mavo.Data(this, {});
		}
	},

	static: {
		all: new WeakMap(),

		DEFAULT_TYPE: "Item"
	}
});

})(Bliss, Bliss.$);

(function($, $$) {

var _ = Mavo.Primitive = class Primitive extends Mavo.Node {
	constructor(element, mavo, o) {
		super(element, mavo, o);

		this.liveData = new Mavo.Data(this);

		if (!this.fromTemplate("config", "attribute", "templateValue", "originalEditor")) {
			this.config = _.getConfig(element);

			// Which attribute holds the data, if any?
			// "null" or null for none (i.e. data is in content).
			this.attribute = this.config.attribute;

			// HTML attribute names are case insensitive (Fix for #515)
			if (this.attribute && !document.xmlVersion) {
				this.attribute = this.attribute.toLowerCase();
			}
		}

		this.datatype = this.config.datatype;

		if ("modes" in this.config) {
			// If modes are related to element type, this overrides everything
			// because it means the other mode makes no sense for that element
			this.modes = this.config.modes;
			this.element.setAttribute("mv-mode", this.config.modes);
		}

		Mavo.hooks.run("primitive-init-start", this);

		// Link primitive with its expressionText object
		// We need to do this before any editing UI is generated
		this.expressionText = this.expressionText || Mavo.DOMExpression.search(this.element, this.attribute);

		if (this.expressionText && !this.expressionText.mavoNode) {
			// Computed property
			this.expressionText.primitive = this;
			this.storage = this.storage || "none";
			this.modes = "read";
			this.element.setAttribute("aria-live", "polite");
		}

		/**
		 * Set up input widget
		 */

		 // Linked widgets
		if (!this.editor && this.element.hasAttribute("mv-edit")) {
			if (!this.originalEditor) {
				this.originalEditor = $(this.element.getAttribute("mv-edit"));
			}

			if (this.originalEditor) {
				// Update editor if original mutates
				// This means that expressions on mv-edit for individual collection items will not be picked up
				if (!this.template) {
					this.originalEditorObserver = new Mavo.Observer(this.originalEditor, "all", records => {
						this.copies.concat(this).forEach(primitive => {
							if (primitive.defaultSource == "editor") {
								primitive.default = this.originalEditor.value;
							}

							if (primitive.editor) {
								primitive.editor = this.originalEditor.cloneNode(true);
							}

							primitive.setValue(primitive.value, {force: true, silent: true});
						});
					});
				}
			}
		}

		// Nested widgets
		if (!this.editor && !this.originalEditor && !this.attribute) {
			this.editor = $$(this.element.children).filter(function (el) {
			    return el.matches(Mavo.selectors.formControl) && !el.matches(Mavo.selectors.property);
			})[0];

			if (this.editor) {
				$.remove(this.editor);
			}
		}

		var editorValue = this.editorValue;

		if (!this.datatype && (typeof editorValue == "number" || typeof editorValue == "boolean")) {
			this.datatype = typeof editorValue;
		}

		if (this.config.init) {
			this.config.init.call(this, this.element);
		}

		if (this.config.changeEvents) {
			$.bind(this.element, this.config.changeEvents, evt => {
				if (evt.target === this.element) {
					this.value = this.getValue();
				}
			});
		}

		if (this.expressionText) {
			this.setValue(this.expressionText.value, {silent: true});
		}
		else {
			this.templateValue = this.getValue();

			this._default = this.element.getAttribute("mv-default");

			if (this.default === null) { // no mv-default
				this._default = this.modes? this.templateValue : editorValue;
				this.defaultSource = this.modes? "template" : "editor";
			}
			else if (this.default === "") { // mv-default exists, no value, default is template value
				this._default = this.templateValue;
				this.defaultSource = "template";
			}
			else { // mv-default with value
				this.defaultExpression = Mavo.DOMExpression.search(this.element, "mv-default");

				if (this.defaultExpression) {
					// To preserve type, e.g. booleans should stay booleans, not become strings
					this.defaultExpression.output = value => this.default = value;
				}

				this.defaultSource = "attribute";
			}

			var keepTemplateValue = !this.template // not in a collection or first item
			                        || this.template.templateValue != this.templateValue // or different template value than first item
									|| this.modes == "edit"; // or is always edited

			if (this.default === undefined && keepTemplateValue) {
				this.initialValue = this.templateValue;
			}
			else {
				this.initialValue = this.default;
			}

			if (this.initialValue === undefined) {
				this.initialValue = this.emptyValue;
			}

			this.setValue(this.initialValue, {silent: true});

			if (this.element.hasAttribute("aria-label")) {
				// Custom label
				this.label = this.element.getAttribute("aria-label");
			}
			else {
				this.label = Mavo.Functions.readable(this.property);
				this.sneak(() => {
					this.element.setAttribute("aria-label", this.label);
				});
			}
		}

		this.postInit();

		Mavo.hooks.run("primitive-init-end", this);
	}

	get editorValue() {
		var editor = this.editor || this.originalEditor;

		if (editor) {
			if (editor.matches(Mavo.selectors.formControl)) {
				return _.getValue(editor, {datatype: this.datatype});
			}

			// if we're here, this.editor is an entire HTML structure
			var output = $(Mavo.selectors.output + ", " + Mavo.selectors.formControl, editor);

			if (output) {
				return _.getValue(output);
			}
		}
	}

	set editorValue(value) {
		if (this.config.setEditorValue && this.datatype !== "boolean") {
			return this.config.setEditorValue.call(this, value);
		}

		if (this.editor) {
			if (this.editor.matches(Mavo.selectors.formControl)) {
				_.setValue(this.editor, value, {config: this.editorDefaults});
			}
			else {
				// if we're here, this.editor is an entire HTML structure
				var output = $(Mavo.selectors.output + ", " + Mavo.selectors.formControl, this.editor);

				if (output) {
					_.setValue(output, value);
				}
			}
		}
	}

	destroy () {
		super.destroy();
		this.originalEditorObserver?.destroy();
	}

	isDataNull(o) {
		return super.isDataNull(o) || this._value === null || this._value === undefined;
	}

	getData (o = {}) {
		var env = {
			context: this,
			options: o
		};

		if (this.isDataNull(o)) {
			return null;
		}

		env.data = this.value;

		if (env.data === "" && (!this.templateValue || this.initialValue !== this.templateValue)) {
			env.data = null;
		}

		if (this.inPath.length) {
			env.data = Mavo.subset(this.data, this.inPath, env.data);
		}

		Mavo.hooks.run("node-getdata-end", env);

		return env.data;
	}

	sneak (callback) {
		return this.mavo.sneak({id: "primitive"}, callback);
	}

	save() {
		this.savedValue = this.value;
		this.unsavedChanges = false;
	}

	// Called only the first time this primitive is edited
	initEdit () {
		if (!this.editor && this.originalEditor) {
			this.editor = this.originalEditor.cloneNode(true);
		}

		if (!this.editor) {
			// No editor provided, use default for element type
			// Find default editor for datatype
			var editor = this.config.editor;

			if (!editor || this.datatype == "boolean") {
				editor = Mavo.Elements.defaultConfig[this.datatype || "string"].editor;
			}

			this.editor = $.create($.type(editor) === "function"? editor.call(this) : editor);
			this.editorValue = this.value;
		}

		$.bind(this.editor, {
			"input change": evt => {
				this.value = this.editorValue;
			},
			"mv-change": evt => {
				if (evt.property === "output") {
					evt.stopPropagation();
					$.fire(this.editor, "input");
				}
			}
		});

		var multiline = this.editor.matches("textarea");

		if (!multiline) {
			this.editor.addEventListener("focus", evt => {
				this.editor.select?.();
			});
		}

		if ("placeholder" in this.editor) {
			this.editor.placeholder = `(${this.label})`;
		}

		// Copy any mv-edit-* attributes from the element to the editor
		Mavo.attributeStartsWith("mv-edit-", this.element).forEach(attribute => {
			this.editor.setAttribute(attribute.name.replace("mv-edit-", ""), attribute.value);
		});

		if (this.attribute || this.config.popup) {
			this.popup = new Mavo.UI.Popup(this);
		}

		if (!this.popup) {
			this.editor.classList.add("mv-editor");
		}

		this.initEdit = null;
	}

	edit (o = {}) {
		var wasEditing = this.editing;

		if (super.edit() === false) {
			// Invalid edit
			return false;
		}

		if (wasEditing && !this.initEdit) {
			// Already being edited
			return true;
		}

		if (!wasEditing) {
			// Make element focusable, so it can actually receive focus
			if (this.element.tabIndex === -1) {
				Mavo.revocably.setAttribute(this.element, "tabindex", "0");
			}

			// Prevent default actions while editing
			// e.g. following links etc
			if (!this.modes) {
				$.bind(this.element, "click.mavo:edit", evt => evt.preventDefault());
			}
		}

		if (this.config.edit) {
			this.config.edit.call(this);
			this.initEdit = null;
			return true;
		}

		this.sneak(() => {
			// Actual edit

			if (this.initEdit) {
				this.initEdit();
			}

			if (this.popup) {
				this.popup.prepare();

				var events = "mousedown focus dragover dragenter".split(" ").map(e => e + ".mavo:edit").join(" ");

				$.bind(this.element, events, _ => this.popup.show());
			}
			else {
				if (!this.attribute) {
					if (this.editor.parentNode != this.element) {
						this.editorValue = this.value;

						if (this.config.hasChildren) {
							this.element.textContent = "";
						}
						else {
							_.setText(this.element, "");
						}

						this.element.prepend(this.editor);
					}

					if (!this.collection) {
						Mavo.revocably.restoreAttribute(this.element, "tabindex");
					}
				}

				if (this.closestCollection && this.editor && this.editor.matches(Mavo.selectors.textInput)) {
					// If pasting text with line breaks and this is a single-line input
					// Insert them as multiple items
					var multiline = this.editor.matches("textarea");

					if (!multiline) {
						$.bind(this.editor, "paste.mavo:edit", evt => {
							if (!this.closestCollection.editing || !evt.clipboardData) {
								return;
							}

							var text = evt.clipboardData.getData("text/plain");
							const CRLF = /\r?\n|\r/;

							if (CRLF.test(text)) {
								evt.preventDefault();

								var lines = text.split(CRLF);

								// "Paste" first line where the cursor is
								this.editor.setRangeText(lines[0]);
								$.fire(this.editor, "input");

								// Insert the rest of the lines as new items
								// FIXME DRYfy the repetition between this code and the one below
								var collection = this.closestCollection;
								var index = closestItem?.index || 0;

								for (var i=1; i<lines.length; i++) {
									var closestItem = this.closestItem;
									var next = collection.add(undefined, index + i);
									collection.editItem(next); // TODO add() should take care of this

									var copy = this.getCousin(i);
									copy.render(lines[i]);
								}

							}
						});
					}

					$.bind(this.editor, "keydown.mavo:edit", evt => {
						if (!this.closestCollection.editing || !["Backspace", "Enter"].indexOf(evt.key) === -1) {
							return;
						}

						if (evt.key == "Enter" && (evt.shiftKey || !multiline)) {
							if (this.bottomUp) {
								return;
							}

							var closestItem = this.closestItem;
							var next = this.closestCollection.add(undefined, closestItem?.index + 1);
							this.closestCollection.editItem(next);

							var copy = this.getCousin(1);
							requestAnimationFrame(() => {
								copy.edit();
								copy.editor.focus();
							});

							if (multiline) {
								evt.preventDefault();
							}
						}
						else if (evt.key == "Backspace" && (this.empty || evt[Mavo.superKey])) {
							// Focus on sibling afterwards
							var sibling = this.getCousin(1) || this.getCousin(-1);

							// Backspace on empty primitive or Cmd/Ctrl + Backspace should delete item
							this.closestCollection.delete(this.closestItem);

							if (sibling) {
								sibling.edit();
								sibling.editor.focus();
							}

							evt.preventDefault();
						}
					});
				}
			}
		});

		return true;
	} // edit

	done () {
		if (super.done() === false) {
			return false;
		}

		$.unbind(this.element, ".mavo:edit");

		this.sneak(() => {
			if (this.config.done) {
				this.config.done.call(this);
				return;
			}

			if (this.popup) {
				this.popup.close();
			}
			else if (!this.attribute && this.editor) {
				$.remove(this.editor);

				_.setValue(this.element, this.editorValue, {
					config: this.config,
					attribute: this.attribute,
					datatype: this.datatype,
					map: this.originalEditor || this.editor,
					node: this
				});
			}
		});

		if (!this.collection) {
			Mavo.revocably.restoreAttribute(this.element, "tabindex");
		}
	}

	dataRender (data, {live, root} = {}) {
		var previousValue = this._value;

		if ($.type(data) === "object") {
			if (Symbol.toPrimitive in data) {
				data = data[Symbol.toPrimitive]("default");
			}
			else if (!this.isHelperVariable && Mavo.isPlainObject(data)) {
				// Candidate properties to get a value from
				var properties = Object.keys(data), property;

				if (properties.length === 1) {
					property = properties[0];
				}
				else {
					for (let p of [this.property, "value", "content"]) {
						if (p in data) {
							property = p;
							break;
						}
					}

					// Failing that, any property with the same datatype
					for (let p in data) {
						let type = $.type(data[p]);

						if (type === this.datatype || !this.datatype && type == "string") {
							property = p;
							break;
						}
					}
				}

				if (property) {
					data = data[property];

					if (!live) {
						this.inPath.push(property);
					}
				}
			}
		}

		if (data === undefined) {
			// New property has been added to the schema and nobody has saved since
			if (!this.modes && this.value === this.templateValue) {
				this.value = this.closestCollection? this.default : this.templateValue;
			}
		}
		else {
			this.value = data;
		}

		return this._value !== previousValue;
	}

	find (property, o = {}) {
		if (this.property == property && o.exclude !== this) {
			return this;
		}
	}

	/**
	 * Get value from the DOM
	 */
	getValue (o) {
		return _.getValue(this.element, {
			config: this.config,
			attribute: this.attribute,
			datatype: this.datatype
		});
	}

	setValue (value, o = {}) {
		if (value === undefined) {
			value = null;
		}

		var oldDatatype = this.datatype;

		// If there's no datatype, adopt that of the value
		if (!this.datatype && (typeof value == "number" || typeof value == "boolean")) {
			this.datatype = typeof value;
		}

		value = _.safeCast(value, this.datatype);

		if (!o.force && value === this._value && oldDatatype == this.datatype) {
			// Do nothing if value didn't actually change, unless forced to
			return value;
		}

		this.sneak(() => {
			if (this.editor && this.editorValue != value) {
				// If an editor is present, set its value to match
				this.editorValue = value;
			}

			// Also set DOM value if either using a popup, or there's no editor
			// or the editor is not inside the element (e.g. it could be a nested editor that is now detached)
			if (this.popup || !this.editor || (this.editor !== document.activeElement && !this.element.contains(this.editor))) {
				if (this.config.setValue) {
					this.config.setValue.call(this, this.element, value);
				}
				else if (!o.dataOnly) {
					_.setValue(this.element, value, {
						config: this.config,
						attribute: this.attribute,
						datatype: this.datatype,
						map: this.originalEditor || this.editor,
						node: this
					});
				}
			}

			this.empty = !value && value !== 0;

			this._value = value;

			this.liveData.update();

			if (!o.silent) {
				if (this.saved) {
					this.unsavedChanges = this.mavo.unsavedChanges = true;
				}

				this.dataChanged("propertychange", {value});
			}
		});

		return value;
	}

	dataChanged (action = "propertychange", o) {
		return super.dataChanged(action, o);
	}

	async upload (file, name = file.name) {
		if (!this.mavo.uploadBackend || !self.FileReader) {
			return;
		}

		var tempURL = URL.createObjectURL(file);

		// FIXME what if there's no attribute?
		this.sneak(() => this.element.setAttribute(this.attribute, tempURL));

		var path = this.element.getAttribute("mv-upload-path") || "";
		var relative = path + "/" + name;

		let url = await this.mavo.upload(file, relative);
		// Do we have a URL override?
		var base = Mavo.getClosestAttribute(this.element, "mv-upload-url");

		if (base) {
			// Throw away backend-provided URL and use the override instead
			url = new URL(relative, new URL(base, location)) + "";
		}

		this.value = url;

		if (!this.element.matches("a")) {
			// <a> should get the proper URL immediately, because hovering would reveal what it is
			// for other types, we should keep the temporary URL because the real one may not have deployed yet
			// If the editor is manually edited, this will change anyway
			this.sneak(() => this.element.setAttribute(this.attribute, tempURL));
		}
	}

	createUploadPopup (type, kind = "file", ext) {
		var env = { context: this, type, kind, ext };

		env.mainInput = $.create("input", {
			"type": "url",
			"placeholder": `http://example.com/${kind}.${ext}`,
			"className": "mv-output",
			"aria-label": `URL to ${kind}`
		});

		if (this.mavo.uploadBackend && self.FileReader) {
			var checkType = file => file && (!type || file.type.indexOf(type.replace("*", "")) === 0);

			env.events = {
				"paste": evt => {
					// Look for the first file in the clipboard
					var item = Array.from(evt.clipboardData.items).find(item => item.kind === "file");
					var ext = item?.type.split("/")[1];

					if (item && checkType(item)) {
						// Is a file of the correct type, upload!
						// First, try to find its name in the clipboard
						var defaultName = evt.clipboardData.getData("text") || `pasted-${kind}-${Date.now()}.${ext}`;
						var name = prompt(this.mavo._("filename"), defaultName);

						if (name === "") {
							name = defaultName;
						}

						if (name !== null) {
							this.upload(item.getAsFile(), name, type);
							evt.preventDefault();
						}
					}
				},
				"drag dragstart dragend dragover dragenter dragleave drop": evt => {
					evt.preventDefault();
					evt.stopPropagation();
				},
				"dragover dragenter": evt => {
					env.popup.classList.add("mv-dragover");
					this.element.classList.add("mv-dragover");
				},
				"dragleave dragend drop": evt => {
					env.popup.classList.remove("mv-dragover");
					this.element.classList.remove("mv-dragover");
				},
				"drop": evt => {
					var file = evt.dataTransfer.files[0];

					if (file && checkType(file)) {
						this.upload(file);
					}
				}
			};

			Mavo.hooks.run("primitive-createuploadpopup-beforecreate", env);

			env.popup = $.create({
				className: "mv-upload-popup",
				contents: [
					env.mainInput, {
						tag: "input",
						type: "file",
						"aria-label": `Upload ${kind}`,
						accept: type,
						events: {
							change: evt => {
								var file = evt.target.files[0];

								if (file && checkType(file)) {
									this.upload(file);
								}
							}
						}
					}, {
						className: "mv-tip",
						innerHTML: "<strong>Tip:</strong> You can also drag & drop or paste!"
					}
				],
				events: env.events
			});

			// Drag & Drop should also work on the <img> element itself
			$.bind(this.element, env.events);

			Mavo.hooks.run("primitive-createuploadpopup-beforereturn", env);

			return env.popup;
		}
		else {
			return env.mainInput;
		}
	}

	static getText (element) {
		var node = element.nodeType === Node.TEXT_NODE? element : element.firstChild;

		if (node?.nodeType === Node.TEXT_NODE) {
			return node.nodeValue;
		}
		else {
			return "";
		}
	}

	static setText (element, text) {
		var node = element.nodeType === Node.TEXT_NODE? element : element.firstChild;

		if (node?.nodeType === Node.TEXT_NODE) {
			node.nodeValue = text;
		}
		else {
			element.prepend(text);
		}
	}

	static getValueAttribute (element, config = Mavo.Elements.search(element)) {
		var ret = element.getAttribute("mv-attribute") || config.attribute;

		if (!ret || ret === "null" || ret === "none") {
			ret = null;
		}

		return ret;
	}

	/**
	 * Only cast if conversion is lossless
	 */
	static safeCast (value, datatype) {
		var existingType = typeof value;
		var cast = _.cast(value, datatype);

		if (datatype == "boolean") {
			if (!value) {
				return false;
			}

			if (value === "true" || value > 0) {
				return true;
			}

			return value;
		}

		if (datatype == "number") {
			if (/^[-+]?[0-9.e]+$/i.test(value + "")) {
				return cast;
			}

			return value;
		}

		if (value === null || value === undefined) {
			return value;
		}

		return cast;
	}

	/**
	 * Cast to a different primitive datatype
	 */
	static cast (value, datatype) {
		switch (datatype) {
			case "number": return +value;
			case "boolean": return !!value;
			case "string": return value + "";
		}

		return value;
	}

	static getValue (element, {config, attribute, datatype} = {}) {
		if (!config) {
			config = _.getConfig(element, attribute);
		}

		attribute = config.attribute;
		datatype = config.datatype;

		if (config.getValue && attribute == config.attribute) {
			return config.getValue(element);
		}

		var ret;

		if (attribute in element && _.useProperty(element, attribute)) {
			// Returning properties (if they exist) instead of attributes
			// is needed for dynamic elements such as checkboxes, sliders etc
			ret = element[attribute];
		}
		else if (attribute) {
			ret = element.getAttribute(attribute);
		}
		else {
			ret = element.getAttribute("content") || _.getText(element) || null;
		}

		return _.safeCast(ret, datatype);
	}

	static getConfig (element, attribute, datatype) {
		if (attribute === undefined) {
			attribute = element.getAttribute("mv-attribute") || undefined;
		}

		if (attribute == "null" || attribute == "none") {
			attribute = null;
		}

		var isAttributeDefault = attribute === undefined || attribute == _.getValueAttribute(element);

		if (!datatype && isAttributeDefault) {
			datatype = element.getAttribute("datatype") || undefined;
		}

		var config = Mavo.Elements.search(element, attribute, datatype);
		config = Object.assign({}, config);

		if (config.attribute === undefined) {
			config.attribute = attribute || null;
		}

		if (config.datatype === undefined) {
			config.datatype = datatype;
		}

		return config;
	}

	static setValue (element, value, o = {}) {
		if (element.nodeType === 1) {
			if (!o.config) {
				o.config = _.getConfig(element, o.attribute);
			}

			o.attribute = o.attribute !== undefined? o.attribute : o.config.attribute;
			o.datatype = o.datatype !== undefined? o.datatype : o.config.datatype;

			if (o.config.setValue && o.attribute == o.config.attribute) {
				return o.config.setValue(element, value, o.attribute);
			}
		}

		if (value === null && !o.datatype) {
			value = "";
		}

		if (o.attribute) {
			if (o.attribute in element && _.useProperty(element, o.attribute) && element[o.attribute] !== value) {
				// Setting properties (if they exist) instead of attributes
				// is needed for dynamic elements such as checkboxes, sliders etc
				try {
					var previousValue = element[o.attribute];
					var newValue = element[o.attribute] = value;
				}
				catch (e) {}

				if (previousValue != newValue && o.config.changeEvents) {
					o.config.changeEvents.split(/\s+/).forEach(type => $.fire(element, type));
				}
			}

			// Set attribute anyway, even if we set a property because when
			// they're not in sync it gets really fucking confusing.
			if (o.datatype == "boolean") {
				if (value != element.hasAttribute(o.attribute)) {
					$.toggleAttribute(element, o.attribute, value, value);
				}
			}
			else if (element.getAttribute(o.attribute) != value) {  // intentionally non-strict, e.g. "3." !== 3
				element.setAttribute(o.attribute, value);
			}
		}
		else {
			var presentational = _.format(value, o);

			if (o.node && !o.config.hasChildren) {
				_.setText(element, presentational);
			}
			else {
				element.textContent = presentational;
			}


			if (presentational !== value && element.setAttribute) {
				element.setAttribute("content", value);
			}
		}
	}

	/**
	 *  Set/get a property or an attribute?
	 * @return {Boolean} true to use a property, false to use the attribute
	 */
	static useProperty (element, attribute) {
		if (["href", "src"].indexOf(attribute) > -1) {
			// URL properties resolve "" as location.href, fucking up emptiness checks
			return false;
		}

		if (element.namespaceURI == "http://www.w3.org/2000/svg") {
			// SVG has a fucked up DOM, do not use these properties
			return false;
		}

		return true;
	}

	static format (value, o = {}) {
		if (o.map && /^select$/i.test(o.map.nodeName)) {
			for (var i=0, option; option = o.map.options[i]; i++) {
				if (option.value == value) {
					return option.textContent;
				}

				if (option.classList.contains("mv-volatile")) {
					option.remove();
				}
			}

			// If we're here, the option is not present, add it
			$.create("option", {
				className: "mv-volatile",
				textContent: value,
				inside: o.map
			});

			return value;
		}

		if (($.type(value) === "number" || o.datatype == "number")) {
			if (value === null) {
				return "";
			}

			var skipNumberFormatting = o.attribute || o.element?.matches("style, pre");

			if (!skipNumberFormatting) {
				return _.formatNumber(value);
			}
		}

		if (Array.isArray(value)) {
			return value.map(_.format).join(", ");
		}

		if ($.type(value) === "object") {
			// Oops, we have an object. Print something more useful than [object Object]
			return Mavo.toJSON(value);
		}

		return value;
	}
};

$.Class(_, {
	lazy: {
		emptyValue: function() {
			switch (this.datatype) {
				case "boolean":
					return false;
				case "number":
					return 0;
			}

			return "";
		},

		editorDefaults: function() {
			return this.editor && _.getConfig(this.editor);
		}
	},

	live: {
		default: function (value) {
			if (this.value == this._default) {
				this.value = value;
			}
		},

		value: function (value) {
			return this.setValue(value);
		},

		datatype: function (value) {
			if (value !== this._datatype) {
				if (value == "boolean" && !this.attribute) {
					this.attribute = Mavo.Elements.defaultConfig.boolean.attribute;
				}

				$.toggleAttribute(this.element, "datatype", value, value && value !== "string");
			}
		},

		empty: function (value) {
			var hide = value && // is empty
			           !this.modes && // and supports both modes
			           (!this.attribute || !$(Mavo.selectors.property, this.element)) && // and has no property inside
					   // and is not boolean OR if it is, its attribute is the default boolean attribute (see #464)
			           (this.datatype !== "boolean" || this.attribute === Mavo.Elements.defaultConfig.boolean.attribute);

			this.element.classList.toggle("mv-empty", !!hide);
		}
	},

	static: {
		all: new WeakMap(),

		lazy: {
			formatNumber: () => {
				var numberFormat = new Intl.NumberFormat(Mavo.locale, {maximumFractionDigits:2});

				return function(value) {
					if (value === Infinity || value === -Infinity) {
						// Pretty print infinity
						return value < 0? "-âˆž" : "âˆž";
					}

					return numberFormat.format(value);
				};
			}
		}
	}
});

Mavo.observe({id: "primitive"}, function({node, type, attribute, record, element}) {
	if (node instanceof Mavo.Primitive && node.config) {
		if (attribute === "mv-default" && !node.defaultExpression) {
			node.default = element.getAttribute("mv-default");
		}
		else if (attribute === "aria-label") {
			node.label = element.getAttribute("aria-label");

			if (Mavo.in("placeholder", node.editor)) {
				node.editor.placeholder = `(${node.label})`;
			}
		}
		else if (attribute && attribute.indexOf("mv-edit-") === 0) {
			node.editor?.setAttribute(attribute.slice(8), element.getAttribute(attribute));
		}
		else if (node.config.observer !== false
			&& (
				node.config.subtree
				|| (attribute === node.attribute || type === "characterData" && !node.attribute)
				   && !node.editing
			)
		) {
			// Main value observer
			node.value = node.getValue();
		}
	}
});

})(Bliss, Bliss.$);

(function($, $$) {

var _ = Mavo.UI.Popup = $.Class({
	constructor: function(primitive) {
		this.primitive = primitive;

		// Need to be defined here so that this is what expected
		this.position = evt => {
			var bounds = this.primitive.element.getBoundingClientRect();
			var x = bounds.left;
			var y = bounds.bottom;
			var pointDown = false;

			if (this.element.offsetHeight) {
				// Is in the DOM, check if it fits
				this.height = this.element.getBoundingClientRect().height || this.height;
			}

			if (this.height + y + 20 > innerHeight) {
				// Normal positioning means the popup would be cut off or too close to the edge, adjust

				// Perhaps placing it above is better
				if (bounds.top - this.height > 20) {
					var pointDown = true;
					y = bounds.top - this.height - 20;
				}
				else {
					// Nah, just raise it a bit
					y = innerHeight - this.height - 20;
				}
			}

			this.element.classList.toggle("mv-point-down", pointDown);

			$.style(this.element, { top:  `${y}px`, left: `${x}px` });
		};

		this.element = $.create("div", {
			className: "mv-popup",
			hidden: true,
			contents: {
				tag: "fieldset",
				contents: [
					{
						tag: "legend",
						textContent: this.primitive.label + ":"
					},
					this.editor
				]
			},
			events: {
				keyup: evt => {
					if (evt.keyCode == 13 || evt.keyCode == 27) {
						if (this.element.contains(document.activeElement)) {
							this.primitive.element.focus();
						}

						evt.stopPropagation();
						this.hide();
					}
				},
				transitionend: this.position
			}
		});

		// No point in having a dropdown in a popup
		if (this.editor.matches("select")) {
			this.editor.size = Math.min(10, this.editor.children.length);
		}
		this.hideCallback = evt => {
			if (!this.element.contains(evt.target) && !this.primitive.element.contains(evt.target)) {
				this.hide();
			}
		};
	},

	show: function() {
		$.unbind([this.primitive.element, this.element], ".mavo:showpopup");

		this.shown = true;

		this.element.style.transition = "none";
		this.element.removeAttribute("hidden");

		this.position();

		this.element.setAttribute("hidden", "");
		this.element.style.transition = "";

		document.body.appendChild(this.element);

		setTimeout(() => {
			this.element.removeAttribute("hidden");
		}, 100); // trigger transition. rAF or timeouts < 100 don't seem to, oddly.

		$.bind(document, "focus click", this.hideCallback, true);
		window.addEventListener("scroll", this.position, {passive: true});
	},

	hide: function() {
		$.unbind(document, "focus click", this.hideCallback, true);
		window.removeEventListener("scroll", this.position, {passive: true});
		this.element.setAttribute("hidden", ""); // trigger transition
		this.shown = false;

		setTimeout(() => {
			$.remove(this.element);
		}, parseFloat(getComputedStyle(this.element).transitionDuration) * 1000 || 400); // TODO transition-duration could override this
	},

	prepare: function() {
		$.bind(this.primitive.element, {
			"click.mavo:edit": evt => {
				this.show();
			},
			"keyup.mavo:edit": evt => {
				if ([13, 113].indexOf(evt.keyCode) > -1) { // Enter or F2
					this.show();
					this.editor.focus();
				}
			}
		});
	},

	close: function() {
		this.hide();
		$.unbind(this.primitive.element, ".mavo:edit .mavo:preedit .mavo:showpopup");
	},

	proxy: {
		"editor": "primitive"
	}
});

})(Bliss, Bliss.$);

/**
 * Configuration for different types of elements. Options:
 * - attribute {String}
 * - useProperty {Boolean}
 * - datatype {"number"|"boolean"|"string"} Default is "string"
 * - modes
 * - editor {Object|Function}
 * - setEditorValue temporary
 * - edit
 * - done
 * - observe
 * - default: If there is no attribute, can we use that rule to pick one?
 * @
 */
(function($, $$) {

var _ = Mavo.Elements = {};

Object.defineProperties(_, {
	"register": {
		value: function(id, config) {
			if (typeof arguments[0] === "object") {
				// Multiple definitions
				for (let s in arguments[0]) {
					_.register(s, arguments[0][s]);
				}

				return;
			}

			if (config.extend) {
				var base = _[config.extend];

				config = $.extend($.extend({}, base), config);
			}

			if (id.indexOf("@") > -1) {
				var parts = id.split("@");

				config.selector = config.selector || parts[0] || "*";

				if (config.attribute === undefined) {
					config.attribute = parts[1];
				}
			}

			config.selector = config.selector || id;
			config.id = id;

			if (Array.isArray(config.attribute)) {
				config.attribute.forEach(attribute => {
					var o = $.extend({}, config);
					o.attribute = attribute;

					_[`${id}@${attribute}`] = o;
				});
			}
			else {
				_[id] = config;
			}

			return _;
		}
	},
	"search": {
		value: function(element, attribute, datatype) {
			var matches = _.matches(element, attribute, datatype);

			if (matches.length === 0 && datatype) {
				// 0 matches, try again without datatype
				matches = _.matches(element, attribute);
			}

			var lastMatch = matches[matches.length - 1];

			if (lastMatch) {
				return lastMatch;
			}

			var config = $.extend({}, _.defaultConfig[datatype || "string"]);
			config.attribute = attribute === undefined? config.attribute : attribute;

			return config;
		}
	},
	"matches": {
		value: function(element, attribute, datatype) {
			var matches = [];

			selectorloop: for (var id in _) {
				var o = _[id];

				// Passes attribute test?
				var attributeMatches = attribute === undefined && o.default || attribute === o.attribute;

				if (!attributeMatches) {
					continue;
				}

				// Passes datatype test?
				if (datatype !== undefined && datatype !== "string" && datatype !== o.datatype) {
					continue;
				}

				// Passes selector test?
				var selector = o.selector || id;

				if (!element.matches(selector)) {
					continue;
				}

				// Passes arbitrary test?
				if (o.test && !o.test(element, attribute, datatype)) {
					continue;
				}

				// All tests have passed
				matches.push(o);
			}

			return matches;
		}
	},

	isSVG: {
		value: e => e.namespaceURI == "http://www.w3.org/2000/svg"
	},

	defaultConfig: {
		value: {
			"string":  {
				editor: { tag: "input" }
			},
			"number":  {
				editor: { tag: "input", type: "number" }
			},
			"boolean": {
				attribute: "content",
				editor: { tag: "input", type: "checkbox" }
			}
		}
	}
});

_.register({
	"@hidden": {
		datatype: "boolean"
	},

	"@y": {
		test: _.isSVG,
		datatype: "number"
	},

	"@x": {
		default: true,
		test: _.isSVG,
		datatype: "number"
	},

	"media": {
		default: true,
		selector: "img, video, audio",
		attribute: "src",
		editor: function() {
			var kind = this.element.nodeName.toLowerCase();
			kind = kind == "img"? "image" : kind;
			Mavo.setAttributeShy(this.element, "mv-upload-path", kind + "s");

			return this.createUploadPopup(kind + "/*", kind, "png");
		}
	},

	"a, link": {
		default: true,
		attribute: "href"
	},

	"a[mv-upload-path], link[mv-upload-path]": {
		default: true,
		attribute: "href",
		editor: function() {
			var type = this.element.getAttribute("type");
			var ext = type && !/\/\*$/.test(type)? type.split("/")[1] : "pdf";
			return this.createUploadPopup(type, undefined, ext);
		}
	},

	"video, audio": {
		attribute: ["autoplay", "buffered", "loop"],
		datatype: "boolean"
	},

	"details": {
		attribute: "open",
		datatype: "boolean"
	},

	"input, select, button, textarea": {
		attribute: "disabled",
		datatype: "boolean"
	},

	"formControl": {
		selector: "input",
		default: true,
		attribute: "value",
		modes: "edit",
		changeEvents: "input change",
		edit: () => {},
		done: () => {},
		init: function() {
			this.editor = this.element;
		}
	},

	"select": {
		extend: "formControl",
		selector: "select",
		subtree: true
	},

	"select[multiple]": {
		extend: "select",
		selector: "select[multiple]",
		getValue: element => {
			return Array.from(element.selectedOptions).map(option => option.value).join();
		},
		setValue: (element, value) => {
			// Why +""? If the value is being set via mv-value and is a number,
			// we must convert it to a string to avoid extra checks.
			value = Array.isArray(value)? value : (value + "").split(/\s*,/);

			Array.from(element.options).forEach(option => {
				// Why? If the value is being set via mv-value,
				// we want the element to reflect the changes properly.
				option.selected = false;

				// Why +""? Options' values are strings, so we want "1" instead of 1.
				value = value.map(v => v + "");

				if (value.includes(option.value)) {
					option.selected = true;
				}
			});
		}
	},

	"option": {
		attribute: null,
		modes: "read",
		default: true
	},

	"textarea": {
		extend: "formControl",
		selector: "textarea",
		attribute: null,
		getValue: element => element.value,
		setValue: (element, value) => element.value = value
	},

	"formNumber": {
		extend: "formControl",
		selector: "input[type=range], input[type=number]",
		datatype: "number",
		setValue: function(element, value) {
			element.value = value;
			element.setAttribute("value", value);

			var attribute = value > element.value? "max" : "min";

			if (!isNaN(value) && element.value != value && !Mavo.data(element, "boundObserver")) {
				// Value out of bounds, maybe race condition? See #295
				// Observe min/max attrs until user interaction or data change
				var observer = new Mavo.Observer(element, attribute, r => {
					element.value = value;
				});

				requestAnimationFrame(() => {
					$.bind(element, "input mv-change", function handler() {
						observer.destroy();
						Mavo.data(element, "boundObserver", undefined);
						$.unbind(element, "input mv-change", handler);
					});
				});

				// Prevent creating same observer twice
				Mavo.data(element, "boundObserver", observer);
			}
		}
	},

	"checkbox": {
		extend: "formControl",
		selector: "input[type=checkbox]",
		attribute: "checked",
		datatype: "boolean",
		changeEvents: "click"
	},

	"radio": {
		extend: "formControl",
		selector: "input[type=radio]",
		attribute: "checked",
		modes: "edit",
		getValue: element => {
			if (element.form) {
				return element.form[element.name].value;
			}

			var checked = $(`input[type=radio][name="${element.name}"]:checked`);
			return checked && checked.value;
		},
		setValue: (element, value) => {
			if (element.form) {
				element.form[element.name].value = value;
				return;
			}

			var toCheck = $(`input[type=radio][name="${element.name}"][value="${value}"]`);
			$.properties(toCheck, {checked: true});
		},
		init: function(element) {
			this.mavo.element.addEventListener("change", evt => {
				if (evt.target.name == element.name) {
					this.value = this.getValue();
				}
			});
		}
	},

	"counter": {
		extend: "formControl",
		selector: "button, .counter",
		attribute: "mv-clicked",
		datatype: "number",
		init: function(element) {
			if (this.attribute === "mv-clicked") {
				element.setAttribute("mv-clicked", "0");

				element.addEventListener("click", evt => {
					let clicked = +element.getAttribute("mv-clicked") || 0;
					this.value = ++clicked;
				});
			}
		}
	},

	"meter, progress": {
		default: true,
		attribute: "value",
		datatype: "number",
		edit: function() {
			var min = +this.element.getAttribute("min") || 0;
			var max = +this.element.getAttribute("max") || 1;
			var range = max - min;
			var step = +this.element.getAttribute("mv-edit-step") || (range > 1? 1 : range/100);

			$.bind(this.element, "mousemove.mavo:edit", evt => {
				// Change property as mouse moves
				var left = this.element.getBoundingClientRect().left;
				var offset = Math.max(0, (evt.clientX - left) / this.element.offsetWidth);
				var newValue = min + range * offset;
				var mod = newValue % step;

				newValue += mod > step/2? step - mod : -mod;
				newValue = Math.max(min, Math.min(newValue, max));

				this.sneak(() => this.element.setAttribute("value", newValue));
			});

			$.bind(this.element, "mouseleave.mavo:edit", evt => {
				// Return to actual value
				this.sneak(() => this.element.setAttribute("value", this.value));
			});

			$.bind(this.element, "click.mavo:edit", evt => {
				// Register change
				this.value = this.getValue();
			});

			$.bind(this.element, "keydown.mavo:edit", evt => {
				// Edit with arrow keys
				if (evt.target == this.element && (evt.keyCode == 37 || evt.keyCode == 39)) {
					var increment = step * (evt.keyCode == 39? 1 : -1) * (evt.shiftKey? 10 : 1);
					var newValue = this.value + increment;
					newValue = Math.max(min, Math.min(newValue, max));

					this.element.setAttribute("value", newValue);

					evt.preventDefault();
				}
			});
		},
		done: function() {
			$.unbind(this.element, ".mavo:edit");
		}
	},

	"meta": {
		default: true,
		attribute: "content"
	},

	"block": {
		default: true,
		selector: "p, div, dt, dd, h1, h2, h3, h4, h5, h6, article, section, address, pre",
		editor: function() {
			var cs = getComputedStyle(this.element);
			var display = cs.display;
			var tag = display.indexOf("inline") === 0? "input" : "textarea";
			var editor = $.create(tag);

			if (tag == "textarea") {
				// Actually multiline
				var width = this.element.offsetWidth;

				if (width) {
					editor.width = width;
				}

				// We cannot collapse whitespace because then users
				// are adding characters they donâ€™t see (#300).
				editor.style.whiteSpace = ({
					"normal": "pre-wrap",
					"nowrap": "pre"
				})[cs.whiteSpace] || "inherit";
			}

			return editor;
		},

		setEditorValue: function(value) {
			if (this.datatype && this.datatype != "string") {
				value = value + "";
			}

			var cs = getComputedStyle(this.element);
			value = value || "";

			if (["normal", "nowrap"].indexOf(cs.whiteSpace) > -1) {
				// Collapse lines
				value = value.replace(/\r?\n/g, " ");
			}

			if (["normal", "nowrap", "pre-line"].indexOf(cs.whiteSpace) > -1) {
				// Collapse whitespace
				value = value.replace(/^[ \t]+|[ \t]+$/gm, "").replace(/[ \t]+/g, " ");
			}

			this.editor.value = value;
			return true;
		}
	},

	"time": {
		attribute: "datetime",
		default: true,
		init: function() {
			if (!this.fromTemplate("dateType")) {
				var dateFormat = Mavo.DOMExpression.search(this.element, null);
				var datetime = this.element.getAttribute("datetime") || "YYYY-MM-DD";

				for (var type in this.config.dateTypes) {
					if (this.config.dateTypes[type].test(datetime)) {
						break;
					}
				}

				this.dateType = type;

				if (!dateFormat) {
					// TODO what about mv-expressions?
					this.element.textContent = this.config.defaultFormats[this.dateType](this.property);
					this.mavo.expressions.extract(this.element, null);

					if (dateFormat = Mavo.DOMExpression.search(this.element, null)) {
						this.mavo.treeBuilt.then(() => {
							dateFormat.update();
						});
					}
				}
			}
		},
		dateTypes: {
			"month": /^[Y\d]{4}-[M\d]{2}$/i,
			"time": /^[H\d]{2}:[M\d]{2}/i,
			"datetime-local": /^[Y\d]{4}-[M\d]{2}-[D\d]{2} [H\d]{2}:[Mi\d]{2}/i,
			"date": /^[Y\d]{4}-[M\d]{2}-[D\d]{2}$/i,
		},
		defaultFormats: {
			"date": name => `[day(${name})] [month(${name}, 'shortname')] [year(${name})]`,
			"month": name => `[month(${name}, 'name')] [year(${name})]`,
			"time": name => `[hour(${name}, '00')]:[minute(${name}, '00')]`,
			"datetime-local": function(name) {
				return this.date(name) + " " + this.time(name);
			}
		},
		editor: function() {
			return {tag: "input", type: this.dateType};
		}
	},

	"circle@r": {
		default: true,
		datatype: "number"
	},

	"circle": {
		attribute: ["cx", "cy"],
		datatype: "number"
	},

	"text": {
		default: true,
		popup: true
	},

	".mv-toggle": {
		default: true,
		attribute: "aria-checked",
		datatype: "boolean",
		edit: function() {
			Mavo.revocably.setAttribute(this.element, "role", "checkbox");

			$.bind(this.element, "click.mavo:edit keyup.mavo:edit keydown.mavo:edit", evt => {
				if (evt.type == "click" || evt.key == " " || evt.key == "Enter") {
					if (evt.type != "keydown") {
						this.value = !this.value;
					}

					evt.preventDefault();
					evt.stopPropagation();
				}
			});
		},
		done: function() {
			Mavo.revocably.restoreAttribute(this.element, "role");

			$.unbind(this.element, ".mavo:edit");
		}
	}
});

})(Bliss, Bliss.$);

(function($, $$) {

Mavo.attributes.push("mv-multiple", "mv-order", "mv-accepts", "mv-initial-items", "mv-like");

var _ = Mavo.Collection = class Collection extends Mavo.Node {
	constructor (element, mavo, o) {
		super(element, mavo, o);

		/*
		 * Create the template, remove it from the DOM and store it
		 */
		this.templateElement = this.element;

		this.children = [];
		this.liveData = new Mavo.Data(this, []);

		// Keep position of the template in the DOM, since we might remove it
		this.marker = document.createComment("mv-marker");
		Mavo.data(this.marker, "collection", this);

		this.templateElement.after(this.marker);
		this.addButton = this.createAddButton();

		if (this.mavo.root || !this.templateElement.hasAttribute("mv-like")) {
			// Synchronous init
			this.init();
		}
		else {
			// Async init, we're borrowing the template from elsewhere so we need
			// to give the rest of the tree a chance to initialize
			this.mavo.treeBuilt.then(() => this.init());
		}
	}

	createAddButton() {
		// Find add button if provided, or generate one
		var selector = `button.mv-add-${this.property}`;
		var group = this.parentGroup.element;

		var button = $$(selector, group).filter(button => {
			return !this.templateElement.contains(button)  // is outside the template element
				&& !Mavo.data(button, "collection"); // and does not belong to another collection
		})[0];

		if (button) {
			// Custom add button
			if (button.compareDocumentPosition(this.marker) & Node.DOCUMENT_POSITION_FOLLOWING) {
				// Button precedes collection, make collection bottom-up if no mv-order is set
				Mavo.setAttributeShy(this.templateElement, "mv-order", "desc");
			}

			Mavo.revocably.remove(button);
		}
		else {
			button = $.create("button", {
				type: "button",
				className: "mv-ui",
				textContent: this.mavo._("add-item", this)
			});
		};

		button.classList.add("mv-add", `mv-add-${this.property}`);
		Mavo.data(button, "collection", this);

		Mavo.setAttributeShy(button, "mv-action", `add(${this.property})`);

		return button;
	}

	init () {
		if (!this.fromTemplate("templateElement", "accepts", "initialItems", "like", "likeNode")) {
			this.like = this.templateElement.getAttribute("mv-like");

			if (this.like) {
				var candidates = [];
				this.mavo.walk(obj => {
					if (obj instanceof _ && obj.property === this.like && obj !== this) {
						candidates.push(obj);
					}
				});

				if (candidates.length > 0) {
					// If there are multiple collections that match,
					// compare the paths and select the one that has the most overlap
					this.likeNode = candidates.sort((a, b) => {
						return a.pathFrom(this).length - b.pathFrom(this).length;
					})[0];

					this.likeNode = this.likeNode.likeNode || this.likeNode;
					this.likeNode = this.likeNode.template || this.likeNode;
				}
				else {
					this.like = null;
				}
			}

			this.accepts = this.templateElement.getAttribute("mv-accepts");
			this.accepts = new Set(this.accepts?.split(/\s+/));

			this.initialItems = +(this.templateElement.getAttribute("mv-initial-items") || (this.like? 0 : 1));

			// Must clone because otherwise once expressions are parsed on the template element
			// we will not be able to pick them up from subsequent items
			this.templateElement = this.templateElement.cloneNode(true);
		}

		if (this.likeNode) {
			this.itemTemplate = this.likeNode.itemTemplate || this.likeNode;

			var templateElement = this.likeNode.templateElement || this.likeNode.collection?.templateElement || this.likeNode.element;
			this.templateElement = templateElement.cloneNode(true);
			this.templateElement.setAttribute("property", this.property);

			if (!this.accepts.size) {
				this.accepts = this.likeNode.accepts || this.accepts;
			}
		}
		else if (this.initialItems > 0 || !this.template) {
			var item = this.createItem(this.element);
			this.add(item, undefined, {silent: true});
		}

		this.mavo.treeBuilt.then(() => {
			if (!this.initialItems) {
				if (item) {
					this.delete(item, {silent: true});
				}
				else {
					// No item to delete
					this.element.remove();
				}
			}
			else if (this.initialItems > 1) {
				// Add extra items
				for (let i=1; i<this.initialItems; i++) {
					this.add();
				}
			}
		});

		this.postInit();

		Mavo.hooks.run("collection-init-end", this);
	}

	get length() {
		return this.children.length;
	}

	getData (o = {}) {
		var env = {
			context: this,
			options: o
		};

		env.data = this.children.map(item => item.getData(env.options))
		                     .filter(itemData => Mavo.value(itemData) !== null);
		env.data = Mavo.subset(this.data, this.inPath, env.data);

		Mavo.hooks.run("node-getdata-end", env);

		return env.data;
	}

	// Create item but don't insert it anywhere
	// Mostly used internally
	createItem (element) {
		if (!element) {
			element = this.templateElement.cloneNode(true);
		}

		var template = this.itemTemplate || this.template?.itemTemplate || null;

		var item = Mavo.Node.create(element, this.mavo, {
			collection: this,
			template,
			property: this.property,
			type: this.type
		});

		if (!this.itemTemplate) {
			this.itemTemplate = template || item;
		}

		return item;
	}

	/**
	 * Add a new item to this collection
	 * @param item {Node|Mavo.Node} Optional. Element or Mavo object for the new item
	 * @param index {Number} Optional. Index of existing item, will be added opposite to list direction
	 * @param silent {Boolean} Optional. Throw a datachange event? Mainly used internally.
	 */
	add (item, index, o = {}) {
		if (item instanceof Node) {
			item = Mavo.Node.get(item) || this.createItem(item);
		}
		else {
			item = item || this.createItem();
		}

		if (item.collection != this) {
			this.adopt(item);
		}

		if (index === undefined) {
			index = this.bottomUp? 0 : this.length;
		}

		// Add it to the DOM, or fix its place
		var rel = this.children?.[index]?.element ?? this.marker;
		$.before(item.element, rel);

		var env = {context: this, item};

		env.previousIndex = item.index;

		// Update internal data model
		env.changed = this.splice({
			remove: env.item
		}, {
			index: index,
			add: env.item
		});

		if (this.mavo.expressions.active && !o.silent) {
			requestAnimationFrame(() => {
				env.changed.forEach(i => {
					i.dataChanged(i == env.item && env.previousIndex === undefined? "add" : "move");
					i.unsavedChanges = true;
				});

				this.unsavedChanges = this.mavo.unsavedChanges = true;

				this.mavo.expressions.update(env.item);
			});
		}

		Mavo.hooks.run("collection-add-end", env);

		return env.item;
	}

	splice (...actions) {
		actions.forEach(action => {
			if (action.index === undefined && action.remove && isNaN(action.remove)) {
				// Remove is an item
				action.index = this.children.indexOf(action.remove);
				action.remove = 1;
			}
		});

		// Sort in reverse index order
		actions.sort((a, b) => b.index - a.index);

		var changed = [], deleted = [];

		// FIXME this could still result in buggy behavior.
		// Think of e.g. adding items on i, then removing > 1 items on i-1.
		// The new items would get removed instead of the old ones.
		// Not a pressing issue though since we always remove 1 max when adding things too.
		actions.forEach(action => {
			if (action.index > -1 && (action.remove || action.add)) {
				action.remove = action.remove || 0;
				action.add = Mavo.toArray(action.add);
				deleted.push(...this.children.splice(action.index, +action.remove, ...action.add));
			}
		});

		deleted = new Set(deleted);

		// Update indices
		for (let i = 0; i < this.length; i++) {
			let item = this.children[i];
			deleted.delete(item);

			if (item && item.index !== i) {
				item.index = i;
				changed.push(item);
			}
		}

		// Unregister expressions for deleted items
		deleted.forEach(item => {
			item.expressions?.forEach(domexpression => {
				item.mavo.expressions.unregister(domexpression);
			});
		});

		this.liveData.update();

		return changed;
	}

	// Move item to this collection from another collection
	adopt (item) {
		if (item.collection) {
			// It belongs to another collection, delete from there first
			item.collection.splice({remove: item});
			item.collection.dataChanged("delete");
		}

		item.collection = this;

		 // Update collection & closestCollection properties
		this.walk(obj => {
			if (obj.closestCollection === item.collection) {
				obj.closestCollection = this;
			}

			// Belongs to another Mavo?
			if (item.mavo != this.mavo) {
				obj.mavo = this.mavo;
			}

			obj.path = obj.getPath();
		});

		// Adjust templates and their copies
		if (item.template) {
			Mavo.delete(item.template.copies, item);

			item.template = this.itemTemplate;
		}
	}

	async delete (item, {silent, undoable = !silent, transition = !silent, destroy = !undoable} = {}) {
		item.element.classList.remove("mv-highlight");

		this.splice({remove: item});

		if (!silent && transition) {
			await $.transition(item.element, {opacity: 0});
			item.element.style.opacity = "";
		}

		$.remove(item.element);

		if (!silent) {
			this.unsavedChanges = item.unsavedChanges = this.mavo.unsavedChanges = true;

			item.collection.dataChanged("delete", {index: item.index});
		}

		if (undoable) {
			this.mavo.setDeleted(item);
		}
		else if (destroy) {
			item.destroy();
		}

		return item;
	}

	/**
	 * Move existing item to a new position. Wraps around if position is out of bounds.
	 * @offset relative position
	 */
	move (item, offset) {
		var index = item.index + offset + (offset > 0);

		index = Mavo.wrap(index, this.children.length + 1);

		this.add(item, index);
	}

	editItem (item, o = {}) {
		// Get rid of old promise and replace it with new promise
		item.preEdit?.resolve("abort");

		let immediately = o.immediately || Mavo.inView.is(item.element);

		item.preEdit = Mavo.promise(immediately? Promise.resolve() : Mavo.inView.when(item.element));

		return item.preEdit.then(value => {
			if (value === "abort") {
				return;
			}

			if (!item.itembar) {
				item.itembar = new Mavo.UI.Itembar(item);
			}

			item.itembar.add();

			return item.edit(o);
		});
	}

	doneItem (item) {
		item.itembar?.remove();
		item.preEdit?.resolve("abort");
	}

	edit (o = {}) {
		if (super.edit() === false) {
			return false;
		}

		// Insert the add button if it's not already in the DOM
		if (!this.addButton.parentNode) {
			var tag = this.element.tagName.toLowerCase();

			if (tag in Mavo.selectors.container) {
				var rel = this.marker.parentNode.closest(Mavo.selectors.container[tag]);
			}
			else if (this.bottomUp && this.children[0]) {
				var rel = this.children[0].element;
			}

			rel = rel || this.marker;
			Mavo.revocably.add(this.addButton, e => $[this.bottomUp? "before" : "after"](e, rel));
		}

		// Set up drag & drop
		_.dragula.then(() => {
			this.getDragula();
		});

		// Edit items, maybe insert item bar
		return Promise.all(this.children.map(item => this.editItem(item, o)));
	}

	done () {
		if (super.done() === false) {
			return false;
		}

		Mavo.revocably.remove(this.addButton);

		this.propagate(item => this.doneItem(item));
	}

	dataChanged (action, o = {}) {
		o.element = o.element || this.marker;
		return super.dataChanged(action, o);
	}

	dataRender (data, o = {}) {
		if (data === undefined) {
			return;
		}

		data = data === null? [] : Mavo.toArray(data).filter(i => i !== null);
		var changed = false;

		// First render on existing items
		for (var i = 0; i < this.children.length; i++) {
			var item = this.children[i];

			if (i < data.length) {
				changed = item.render(data[i], o) || changed;
			}
			else {
				changed = true;
				this.delete(item, {silent: true});
				i--;
			}
		}

		if (data.length > i) {
			// There are still remaining items
			// Using document fragments improves performance by 60%
			var fragment = document.createDocumentFragment();

			for (var j = i; j < data.length; j++) {
				var item = this.createItem();

				changed = item.render(data[j], o) || changed;

				this.children.push(item);
				item.index = j;

				fragment.appendChild(item.element);

				var env = {context: this, item};
				Mavo.hooks.run("collection-add-end", env);

			}

			this.marker.before(fragment);
		}

		this.liveData.update();

		if (data.length > i) {
			for (var j = i; j < this.children.length; j++) {
				this.children[j].dataChanged("add");
			}
		}

		return changed;
	}

	isCompatible (c) {
		return c && this.itemTemplate.constructor == c.itemTemplate.constructor && (c === this
		       || c.template == this || this.template == c || this.template && this.template == c.template
		       || this.accepts.has(c.property) > -1);
	}

	// Make sure to remove reference to .dragula
	// it seems to cause problem on OS chrome.
	destroy () {
		super.destroy();

		this.dragula?.destroy();
		this.dragula = null;

		this.propagate("destroy");
	}

	// Make sure to only call after dragula has loaded
	getDragula () {
		if (this.dragula) {
			return this.dragula;
		}

		if (this.template) {
			Mavo.pushUnique(this.template.getDragula().containers, this.marker.parentNode);
			return this.dragula = this.template.dragula || this.template.getDragula();
		}

		this.dragula = dragula({
			containers: [this.marker.parentNode],
			isContainer: el => {
				if (this.accepts.size) {
					return Array.from(el.childNodes).some(child => {
						var collection = _.get(child);  // Map children to any associated collections

						return collection && this.accepts.has(collection.property);
					});
				}

				return false;
			},
			moves: (el, container, handle) => {
				return handle.classList.contains("mv-drag-handle") && handle.closest(Mavo.selectors.multiple) == el;
			},
			accepts: function(el, target, source, next) {
				if (el.contains(target)) {
					return false;
				}

				var previous = next?.previousElementSibling ?? target.lastElementChild;

				var collection = _.get(previous) || _.get(next);

				if (!collection) {
					return false;
				}

				var item = Mavo.Node.get(el);

				return item?.collection.isCompatible(collection);
			}
		});

		this.dragula.on("drop", (el, target, source) => {
			var item = Mavo.Node.get(el);
			// var oldIndex = item && item.index;
			var next = el.nextElementSibling;
			var previous = el.previousElementSibling;
			var collection = _.get(previous) || _.get(next);
			var closestItem = Mavo.Node.get(previous) || Mavo.Node.get(next);

			if (closestItem && closestItem.collection != collection) {
				closestItem = null;
			}

			if (item.collection.isCompatible(collection)) {
				var index = closestItem? closestItem.index + (closestItem.element === previous) : collection.length;
				collection.add(item, index);
			}
			else {
				return this.dragula.cancel(true);
			}
		});

		_.dragulas.push(this.dragula);

		return this.dragula;
	}

	getClosestCollection () {
		return this;
	}

	static get (element) {
		// Is it an add button or a marker?
		var collection = Mavo.data(element, "collection");

		if (collection) {
			return collection;
		}

		// Maybe it's a collection item?
		var item = Mavo.Node.get(element);

		return item?.collection || null;
	}

	// Delete multiple items from potentially multiple collections or even multiple mavos
	static delete (nodes, o = {}) {
		var deleted = new Mavo.BucketMap({arrays: true}); // Mavos and deleted items
		var collections = new Set(); // Collections items were deleted from
		var options = {silent: true, undoable: false, destroy: false};
		var promises = nodes
			.filter(node => !!node.collection) // Drop nodes that are not collection items
			.map(node => {
				collections.add(node.collection);
				return node.collection.delete(node, options)
				           .then(node => deleted.set(node.mavo, node));
			});

		if (!o.silent) {
			Promise.all(promises).then(() => {
				collections.forEach(collection => {
					collection.dataChanged("delete");
				});

				if (o.undoable !== false) {
					deleted.forEach((nodes, mavo) => {
						mavo.setDeleted(...nodes);
					});
				}
			});
		}
	}
};

$.Class(_, {
	lazy: {
		bottomUp: function() {
			/**
			 * Add new items at the top or bottom?
			 */

			return /^desc\b/i.test(this.templateElement.getAttribute("mv-order"));
		}
	},

	static: {
		dragulas: [],

		lazy: {
			dragula: () => $.include(self.dragula, "https://cdnjs.cloudflare.com/ajax/libs/dragula/3.7.2/dragula.min.js")
		}
	}
});

})(Bliss, Bliss.$);

(function($, $$) {

var _ = Mavo.ImplicitCollection = class ImplicitCollection extends Mavo.Node {
	constructor (element, mavo, o) {
		super(element, mavo, o);

		this.children = [];
		this.liveData = new Mavo.Data(this, []);

		this.add(element);
		this.postInit();

		Mavo.hooks.run("implicit-collection-init-end", this);
	}

	get length() {
		return this.children.length;
	}

	getData (o = {}) {
		var env = {
			context: this,
			options: o,
			data: []
		};

		this.children.forEach(node => {
			if (!node.isDataNull()) {
				env.data.push(node.getData(o));
			}
		});

		if (this.data) {
			// Maybe rendered data had more items than we could show? Add it back.
			var rendered = Mavo.toArray(Mavo.subset(this.data, this.inPath));

			if (rendered.length > env.data.length) {
				env.data = env.data.concat(rendered.slice(env.data.length));
			}
		}

		if (Array.isArray(env.data) && env.data.length <= 1) {
			env.data = env.data.length === 1? env.data[0] : null;
		}

		env.data = Mavo.subset(this.data, this.inPath, env.data);

		Mavo.hooks.run("node-getdata-end", env);

		return env.data;
	}

	/**
	 * Add a new item to this collection
	 * @param item Element or Mavo object for the new item
	 */
	add (element) {
		var item = Mavo.Node.create(element, this.mavo, {
			collection: this,
			template: this.template?.children?.[this.length] ?? null,
			property: this.property,
			type: this.type
		});

		item.index = this.length;
		this.children.push(item);

		// item may have tried to propagate updates to us when we created it,
		// but that wouldn't have worked since item was not yet in
		// this.children, so we need to update manually.
		this.liveData.update();

		return item;
	}

	edit (o = {}) {
		if (super.edit() === false) {
			return false;
		}

		// Edit items
		return Promise.all(this.children.map(item => item.edit(o)));
	}

	dataRender (data, o = {}) {
		if (data !== undefined) {
			data = data === null? [] : Mavo.toArray(data).filter(i => i !== null);
			var changed = data.length !== this.liveData.length;

			this.children.forEach((item, i) => changed = item.render(data?.[i], o) ?? changed);
		}

		this.liveData.update();
	}
};

})(Bliss, Bliss.$);

(function($, $$) {

var _ = Mavo.UI.Itembar = $.Class({
	constructor: function(item) {
		this.item = item;

		this.element = $$(`.mv-item-bar:not([mv-rel]), .mv-item-bar[mv-rel="${this.item.property}"]`, this.item.element).filter(el => {
				// Ignore item controls meant for other collections
				return el.closest(Mavo.selectors.multiple) == this.item.element && !Mavo.data(el, "item");
			})[0];

		if (!this.element && this.item.template?.itembar) {
			// We can clone the buttons from the template
			this.element = this.item.template.itembar.element.cloneNode(true);
			this.dragHandle = $(".mv-drag-handle", this.element) || this.item.element;
		}
		else {
			// First item of this type
			this.element = this.element || $.create({
				className: "mv-item-bar mv-ui"
			});

			var bottomUp = this.collection.bottomUp;
			var args = `$item${bottomUp? ", $index + 1" : ""}`;
			var buttons = [
				{
					tag: "button",
					type: "button",
					title: this.mavo._("delete-item", this.item),
					className: "mv-delete",
					// Why $item and not this.collection.property?
					// If there's a nested property with the same name, the name will refer to that
					// However, this means that if we place the item bar inside another item, the button will not work anymore
					// It's a tradeoff, and perhaps if it proves to be a problem we can start detecting which one is best
					"mv-action": "delete($item)"
				}, {
					tag: "button",
					type: "button",
					title: this.mavo._(`add-item-${bottomUp? "after" : "before"}`, this.item),
					className: "mv-add",
					"mv-action": `if($cmd, add($item, ${args}), add(${args}))`
				}
			];

			if (this.item instanceof Mavo.Group) {
				this.dragHandle = $.create({
					tag: "button",
					type: "button",
					title: this.mavo._("drag-to-reorder", this.item),
					className: "mv-drag-handle"
				});

				buttons.push(this.dragHandle);
			}
			else {
				this.dragHandle = this.item.element;
			}

			$.set(this.element, {
				"mv-rel": this.item.property,
				contents: buttons
			});
		}

		this.element.setAttribute("hidden", "");

		$.bind([this.item.element, this.element], "focusin mouseover", this);

		$.bind(this.element, {
			mouseenter: evt => {
				this.item.element.classList.add("mv-highlight");
			},
			mouseleave: evt => {
				this.item.element.classList.remove("mv-highlight");
			}
		});

		this.dragHandle.addEventListener("keydown", evt => {
			if (evt.target === this.dragHandle && this.item.editing && evt.keyCode >= 37 && evt.keyCode <= 40) {
				// Arrow keys
				this.collection.move(this.item, evt.keyCode <= 38? -1 : 1);

				evt.stopPropagation();
				evt.preventDefault();
				evt.target.focus();
			}
		});

		if (this.dragHandle !== this.item.element) {
			this.dragHandle.addEventListener("click", evt => evt.target.focus());
		}

		Mavo.data(this.element, "item", this.item);
	},

	destroy: function() {
		this.hide();
	},

	show: function(sticky) {
		_.visible.forEach(instance => {
			if (instance != this && (!this.sticky || instance.sticky)) {
				clearTimeout(instance.hideTimeout);
				instance.hide(sticky, _.DELAY);
			}
		});

		_.visible.add(this);

		if (this.element.hasAttribute("hidden") || sticky && !this.sticky) {
			this.element.removeAttribute("hidden");
			this.sticky = this.sticky || sticky;
			$.bind([this.item.element, this.element], "focusout mouseleave", this);
		}
	},

	hide: function(sticky, timeout = 0) {
		if (!this.sticky || sticky) {
			if (timeout) {
				this.hideTimeout = setTimeout(() => this.hide(sticky), timeout);
			}
			else {
				this.element.setAttribute("hidden", "");
				$.unbind([this.item.element, this.element], "focusout mouseleave", this);
				this.sticky = false;
				_.visible.delete(this);
			}

		}
	},

	handleEvent: function(evt) {
		var sticky = evt.type.indexOf("mouse") === -1;

		if (this.isWithinItem(evt.target)) {
			clearTimeout(this.hideTimeout);

			if (["mouseleave", "focusout", "blur"].indexOf(evt.type) > -1) {
				if (!this.isWithinItem(evt.relatedTarget)) {
					this.hide(sticky, _.DELAY);
				}
			}
			else {
				this.show(sticky);
				evt.stopPropagation();
			}
		}
	},

	isWithinItem: function(element) {
		if (!element) {
			return false;
		}

		var itemBar = element.closest(".mv-item-bar");
		return itemBar? itemBar === this.element : element.closest(Mavo.selectors.item) === this.item.element;
	},

	add: function() {
		if (!this.element.parentNode && !Mavo.revocably.add(this.element)) {
			// Has not been added before
			var tag = this.item.element.nodeName.toLowerCase();

			if (tag in _.container) {
				var rel = $(_.container[tag], this.item.element);
			}

			(rel || this.item.element).appendChild(this.element);
		}

		if (this.dragHandle == this.item.element) {
			this.item.element.classList.add("mv-drag-handle");
		}
	},

	remove: function() {
		Mavo.revocably.remove(this.element);

		if (this.dragHandle == this.item.element) {
			this.item.element.classList.remove("mv-drag-handle");
		}
	},

	live: {
		sticky: function(v) {
			this.element.classList.toggle("mv-sticky", v);
		}
	},

	proxy: {
		collection: "item",
		mavo: "item"
	},

	static: {
		DELAY: 100,
		visible: new Set(),
		container: {
			"details": "summary"
		}
	}
});

})(Bliss, Bliss.$);

(function() {

var _ = Mavo.Expression = class Expression {
	constructor (expression, options = {}) {
		this.options = options;
		this.expression = expression;
	}

	eval (data = Mavo.Data.stub) {
		Mavo.hooks.run("expression-eval-beforeeval", this);

		if (this.function instanceof Error) {
			// Previous compilation error
			return this.function;
		}

		try {
			return this.function(data);
		}
		catch (error) {
			// Runtime error
			this.error(`Something went wrong with the expression ${this.expression}`,
				error.message,
				`Data was: ${JSON.stringify(data)}`
			);

			Mavo.hooks.run("expression-eval-error", {context: this, error});

			return error;
		}
	}

	error (title, ...message) {
		message = message.join("\n");
		console.info(`%cOops! ðŸ˜³ ${title}:`, "color: #c04; font-weight: bold;", message);
	}

	toString () {
		return this.expression;
	}

	changedBy (evt) {
		return _.changedBy(this.identifiers, evt);
	}
};

Bliss.Class(_, {
	live: {
		expression: function(value) {
			try {
				this.function = Mavo.Script.compile(value, this.options);
			}
			catch (error) {
				// Compilation error
				this.error(`There is something wrong with the expression ${value}`,
					error.message,
					"Not an expression? See https://mavo.io/docs/expressions/#disabling-expressions for information on how to disable expressions."
				);

				Mavo.hooks.run("expression-compile-error", {context: this, error});

				return this.function = error;
			}

			this.ast = this.options.ast;
			delete this.options.ast;

			if (this.ast) {
				// Traverse AST to find potential identifiers
				let identifiers = new Set();

				Mavo.Script.walk(this.ast, (n, property, parent) => {
					if (n.type === "Identifier" && property !== "callee") {
						identifiers.add(n.name);
					}
					else if (n.type === "MemberExpression") {
						if (n.object.name) {
							identifiers.add(n.object.name);
						}

						identifiers.add(n.property.name);
					}
				});

				this.identifiers = [...identifiers];
			}
		}
	}
});

_.Syntax = class Syntax {
	constructor (start, end) {
		this.start = start;
		this.end = end;
		// Try to parse anything between start and end as an expression. Note
		// that this parses text that we don't want to treat as expressions,
		// including the empty expression, but we want to parse them out anyway
		// and only later decide not to evaluate them as expressions so that we
		// don't parse, say, [][1] as a single expression containing "][1".

		// Regex note: "[\S\s]" matches all characters, unlike ".", which
		// doesn't match newlines.
		this.regex = RegExp(`${Mavo.escapeRegExp(start)}([\\S\\s]*?)${Mavo.escapeRegExp(end)}`, "gi");
	}

	test (str) {
		this.regex.lastIndex = 0;

		return this.regex.test(str);
	}

	tokenize (str) {
		var match, ret = [], lastIndex = 0;

		this.regex.lastIndex = 0;

		while ((match = this.regex.exec(str)) !== null) {
			// Literal before the expression
			if (match.index > lastIndex) {
				ret.push(str.substring(lastIndex, match.index));
			}

			lastIndex = this.regex.lastIndex;

			if (/\S/.test(match[1])) {
				ret.push(new Mavo.Expression(match[1]));
			}
			else {
				// If the matched expression is empty or consists only of
				// whitespace, don't treat it as an expression.
				ret.push(match[0]);
			}
		}

		// Literal at the end
		if (lastIndex < str.length) {
			ret.push(str.substring(lastIndex));
		}

		return ret;
	}

	static create (element) {
		if (element) {
			var syntax = element.getAttribute("mv-expressions");

			if (syntax) {
				syntax = syntax.trim();
				return /\s/.test(syntax)? new _.Syntax(...syntax.split(/\s+/)) : _.Syntax.ESCAPE;
			}
		}
	}
};

_.Syntax.ESCAPE = -1;
_.Syntax.default = new _.Syntax("[", "]");

})();

(function($, $$) {

var _ = Mavo.DOMExpression = $.Class({
	constructor: function(o = {}) {
		this.mavo = o.mavo;
		this.template = o.template?.template || o.template;

		for (let prop of ["item", "path", "syntax", "fallback", "attribute", "originalAttribute", "expression", "parsed", "identifiers"]) {
			this[prop] = o[prop] === undefined && this.template? this.template[prop] : o[prop];
		}

		this.node = o.node;

		if (!this.node) {
			// No node provided, figure it out from path
			this.node = Mavo.elementPath(this.item.element, this.path);
		}

		this.element = this.node;
		this.attribute = this.attribute || null;

		Mavo.hooks.run("domexpression-init-start", this);

		if (this.attribute == "mv-value") {
			this.originalAttribute = "mv-value";
			this.attribute = Mavo.Primitive.getValueAttribute(this.element);
			this.fallback = this.fallback || Mavo.Primitive.getValue(this.element, {attribute: this.attribute});
			var expression = this.element.getAttribute("mv-value");
			this.element.removeAttribute("mv-value");
			this.parsed = [new Mavo.Expression(expression)];
			this.expression = this.syntax.start + expression + this.syntax.end;
		}

		if (this.node.nodeType === 3 && this.element === this.node) {
			this.element = this.node.parentNode;

			// If no element siblings make this.node the element, which is more robust
			// Same if attribute, there are no attributes on a text node!
			if (!this.node.parentNode.children.length || this.attribute) {
				this.node = this.element;
				this.element.normalize();
			}
		}

		if (!this.expression) { // Still unhandled?
			if (this.attribute) {
				// Some web components (e.g. AFrame) hijack getAttribute()
				var value = Element.prototype.getAttribute.call(this.node, this.attribute);

				this.expression = (value || "").trim();
			}
			else {
				// Move whitespace outside to prevent it from messing with types
				this.node.normalize();

				if (this.node.childNodes.length === 1 && this.node?.firstChild?.nodeType === 3) {
					var whitespace = this.node.firstChild.textContent.match(/^\s*|\s*$/g);

					if (whitespace[1]) {
						this.node.firstChild.splitText(this.node.firstChild.textContent.length - whitespace[1].length);
						this.node.after(this.node.lastChild);
					}

					if (whitespace[0]) {
						this.node.firstChild.splitText(whitespace[0].length);
						this.node.parentNode.insertBefore(this.node.firstChild, this.node);
					}
				}

				this.expression = this.node.textContent;
			}

			this.parsed = this.template? this.template.parsed : this.syntax.tokenize(this.expression);
		}

		this.oldValue = this.value = this.parsed.map(x => x instanceof Mavo.Expression? "" : x);

		// Cache identifiers
		this.identifiers = this.identifiers || this.parsed.flatMap(x => x.identifiers || []);

		// Any identifiers that need additional updating?
		_.special.add(this);

		this.mavo.treeBuilt.then(() => {
			if (!this.template && !this.item) {
				// Only collection items and groups can have their own expressions arrays
				this.item = Mavo.Node.getClosestItem(this.element);
			}

			if (this.originalAttribute == "mv-value" && this.mavoNode && this.mavoNode == this.item.collection) {
				Mavo.delete(this.item.expressions, this);
			}

			this.mavo.expressions.register(this);

			Mavo.hooks.run("domexpression-init-treebuilt", this);
		});

		Mavo.hooks.run("domexpression-init-end", this);

		_.elements.set(this.element, [...(_.elements.get(this.element) || []), this]);
	},

	destroy: function() {
		_.special.delete(this);
		this.mavo.expressions.unregister(this);
	},

	get isDynamicObject() {
		return this.originalAttribute == "mv-value"
		       && this.mavoNode
			   && !(this.mavoNode instanceof Mavo.Primitive);
	},

	changedBy: function(evt) {
		if (this.isDynamicObject) {
			// Just prevent the same node from triggering changes, everything else is game
			return !evt || !this.mavoNode.contains(evt.node);
		}

		return Mavo.Expression.changedBy(this.identifiers, evt);
	},

	update: function() {
		var env = {context: this};
		var parentEnv = env;

		if (this.item) {
			var scope = this.isDynamicObject? this.item.parent : this.item;
			var data = this.data = scope.getLiveData();
		}
		else {
			var data = this.data === undefined? Mavo.Data.stub : this.data;
		}

		Mavo.hooks.run("domexpression-update-start", env);

		this.oldValue = this.value;
		var changed = false;

		env.value = this.value = this.parsed.map((expr, i) => {
			if (expr instanceof Mavo.Expression) {
				var env = {context: this, expr, parentEnv};

				Mavo.hooks.run("domexpression-update-beforeeval", env);

				env.value = Mavo.value(env.expr.eval(data));

				Mavo.hooks.run("domexpression-update-aftereval", env);

				changed = true;

				if (env.value instanceof Error) {
					return this.fallback !== undefined? this.fallback : this.syntax.start + env.expr.expression + this.syntax.end;
				}

				if (env.value === undefined || env.value === null) {
					// Donâ€™t print things like "undefined" or "null"
					return "";
				}

				return env.value;
			}

			return expr;
		});

		if (!changed) {
			// If nothing changed, no need to do anything
			return;
		}

		if (env.value.length === 1) {
			env.value = env.value[0];
		}
		else {
			env.value = env.value.map(v => Mavo.Primitive.format(v, {
				attribute: this.attribute,
				element: this.element
			})).join("");
		}

		this.output(env.value);

		Mavo.hooks.run("domexpression-update-end", env);
	},

	output: function(value) {
		if (this.primitive) {
			if (Mavo.in(Mavo.isProxy, value)) {
				value = Mavo.clone(value); // Drop proxy
			}

			this.primitive.value = value;
		}
		else if (this.mavoNode) {
			this.mavoNode.render(value);
		}
		else {
			Mavo.Primitive.setValue(this.node, value, {attribute: this.attribute});
		}
	},

	live: {
		item: function(item) {
			if (item && this._item != item) {
				if (this._item) {
					// Previous item, delete from its expressions
					Mavo.delete(this._item.expressions, this);
				}

				item.expressions = item.expressions || [];
				item.expressions.push(this);
			}
		}
	},

	static: {
		elements: new WeakMap(),

		/**
		 * Search for Mavo.DOMExpression object(s) associated with a given element
		 * and optionally an attribute.
		 *
		 * @return If one argument, array of matching DOMExpression objects.
		 *         If two arguments, the matching DOMExpression object or null
		 */
		search: function (element, attribute) {
			if (element === null) {
				return element;
			}

			// HTML attributes are case-insensitive (fix for #515)
			if (attribute && !element.ownerDocument.xmlVersion) {
				attribute = attribute.toLowerCase();
			}

			var all = _.elements.get(element) || [];

			if (arguments.length > 1) {
				if (!all.length) {
					return null;
				}

				return all.filter(et => et.attribute === attribute)[0] || null;
			}

			return all;
		},

		special: {
			add: function(domexpression, name) {
				if (name) {
					var o = this.vars[name];
					var hasName = domexpression.identifiers.indexOf(name) > -1;
					var hasUnprefixedName = (name.startsWith("$") &&
						domexpression.identifiers.indexOf(name.substr(1)) > -1);

					if (o && (hasName || hasUnprefixedName)) {
						o.all = o.all || new Set();
						o.all.add(domexpression);

						if (o.all.size === 1) {
							o.observe();
						}
						else if (!o.all.size) {
							o.unobserve();
						}
					}
				}
				else {
					// All names
					for (var name in this.vars) {
						this.add(domexpression, name);
					}
				}
			},

			delete: function(domexpression, name) {
				if (name) {
					var o = this.vars[name];

					o.all = o.all || new Set();
					o.all.delete(domexpression);

					if (!o.all.size) {
						o.unobserve();
					}
				}
				else {
					// All names
					for (var name in this.vars) {
						this.delete(domexpression, name);
					}
				}
			},

			update: function() {
				this.update?.(...arguments);

				this.all.forEach(domexpression => domexpression.update());
			},

			event: function(name, {type, update, target = document} = {}) {
				this.vars[name] = {
					observe: function() {
						this.callback = this.callback || _.special.update.bind(this);
						target.addEventListener(type, this.callback);
					},
					unobserve: function() {
						target.removeEventListener(type, this.callback);
					}
				};

				if (update) {
					this.vars[name].update = function(evt) {
						Mavo.Functions[name] = update(evt);
					};
				}
			},

			vars: {
				"$now": {
					observe: function() {
						var callback = () => {
							_.special.update.call(this);
							this.timer = requestAnimationFrame(callback);
						};

						this.timer = requestAnimationFrame(callback);
					},
					unobserve: function() {
						cancelAnimationFrame(this.timer);
					}
				}
			}
		}
	}
});

_.special.event("$mouse", {
	type: "mousemove",
	update: function(evt) {
		return {x: evt.clientX, y: evt.clientY};
	}
});

_.special.event("$hash", {
	type: "hashchange",
	target: window
});

})(Bliss, Bliss.$);

(function($, $$) {

Mavo.attributes.push("mv-expressions");

var _ = Mavo.Expressions = $.Class({
	async constructor (mavo) {
		this.mavo = mavo;
		this.active = true;

		this.expressions = [];
		this.identifiers = {};

		var syntax = Mavo.Expression.Syntax.create(this.mavo.element.closest("[mv-expressions]")) || Mavo.Expression.Syntax.default;
		this.traverse(this.mavo.element, undefined, syntax);

		this.scheduled = {};

		await this.mavo.treeBuilt;

		this.expressions = [];
		this.update();
	},

	register: function(domexpression) {
		var ids = this.identifiers;
		domexpression.registeredApp = domexpression.registeredApp || new Set();
		domexpression.identifiers.forEach(id => {
			if (!(ids[id] instanceof Set)) {
				ids[id] = new Set();
			}

			ids[id].add(domexpression);

			if (Mavo.all[id] instanceof Mavo && Mavo.all[id] !== this.mavo && !domexpression.registeredApp.has(id) ) {
				// Cross-mavo expressions, make sure to track app id before calling register.
				domexpression.registeredApp.add(id);
				Mavo.all[id].expressions.register(domexpression);
			}
		});
	},

	unregister: function(domexpression) {
		var ids = this.identifiers;

		domexpression.identifiers.forEach(id => {
			if (ids[id]) {
				ids[id].delete(domexpression);
			}

			// just in case domexpresssion has been destroyed by another app during the loop
			// when another app is destroyed.
			if (id in Mavo.all && typeof domexpresssion !== "undefined") {
				// Cross-mavo expressions
				Mavo.all[id].expressions.unregister(domexpresssion);
			}
		});
	},

	updateThrottled: function(evt) {
		if (!this.active) {
			return;
		}

		var scheduled = this.scheduled[evt.action] = this.scheduled[evt.action] || new Set();

		if (evt.node.template) {
			// Throttle events in collections and events from other Mavos
			if (!scheduled.has(evt.node.template)) {
				setTimeout(() => {
					scheduled.delete(evt.node.template);
					this.update(evt);
				}, _.THROTTLE);

				scheduled.add(evt.node.template);
			}
		}
		else {
			requestAnimationFrame(() => this.update(evt));
		}
	},

	update: function(evt) {
		if (!this.active) {
			return;
		}

		var root, rootObject;

		if (evt instanceof Mavo.Node) {
			rootObject = evt;
		}
		else if (evt instanceof Element) {
			root = evt.closest(Mavo.selectors.item);
			rootObject = Mavo.Node.get(root);
		}
		else if (evt) {
			// Specific data change
			var cache = {
				updated: new Set()
			};

			this.updateByIdThrottled(evt.property, evt, cache);

			if (evt.action == "propertychange") {
				if (evt.node?.path) {
					// Ensure that [collectionName] updates when changing children
					this.updateByIdThrottled(evt.node.path, evt, cache);
				}
			}
			else {
				// Collection modifications (add, delete, move etc)
				this.updateById(Object.keys(Mavo.Data.special), evt, cache);

				var collection = evt.node.collection || evt.node;

				this.updateById(collection.properties, evt, cache);
			}

			return;
		}
		else {
			rootObject = this.mavo.root;
		}

		rootObject.walk((obj, path) => {
			if (!obj.expressionsEnabled) {
				return false;
			}

			obj.expressions?.forEach(et => {
				// Prevent mv-value loops
				if (!evt || et.mavoNode !== evt) {
					et.update();
				}
			});
		});
	},

	updateByIdThrottled: function(property, evt, cache) {
		if (!property) {
			return;
		}

		if (property.forEach) {
			property.forEach(property => this.updateByIdThrottled(property, evt, cache));
		}
		else {
			var scheduled = this.scheduledIds = this.scheduledIds || new Set();

			if (!scheduled.has(property)) {
				setTimeout(() => {
					scheduled.delete(property);

					this.updateById(property, evt, cache);
				}, _.THROTTLE);

				scheduled.add(property);
			}
		}
	},

	updateById: function(property, evt, cache) {
		if (property.forEach) {
			// Multiple properties
			property.forEach(p => this.updateById(p, evt, cache));
			return;
		}

		var exprs = this.identifiers[property];

		if (exprs) {
			exprs.forEach(expr => {
				// Prevent the same node from triggering changes, everything else is game
				if (expr.originalAttribute == "mv-value" && expr.mavoNode && !(expr.mavoNode instanceof Mavo.Primitive) && expr.mavoNode.contains(evt.node)) {
					return;
				}

				if (!cache.updated.has(expr)) {
					expr.update();
				}
			});
		}
	},

	extract: function(node, attribute, path, syntax = Mavo.Expression.Syntax.default) {
		if (attribute && _.skip.indexOf(attribute.name) > -1) {
			return;
		}

		if (attribute && _.directives.indexOf(attribute.name) > -1 ||
		    syntax !== Mavo.Expression.Syntax.ESCAPE && syntax.test(attribute? attribute.value : node.textContent)
		) {
			if (path === undefined) {
				path = Mavo.elementPath(node.closest(Mavo.selectors.item), node);
			}

			this.expressions.push(new Mavo.DOMExpression({
				node, syntax, path,
				attribute: attribute?.name,
				mavo: this.mavo
			}));
		}
	},

	// Traverse an element, including attribute nodes, text nodes and all descendants
	traverse: function(node, path = [], syntax) {
		if (node.nodeType === 8) {
			// We don't want expressions to be picked up from comments!
			// Commenting stuff out is a common debugging technique
			return;
		}

		if (node.nodeType === 3) { // Text node
			// Leaf node, extract references from content
			this.extract(node, null, path, syntax);
		}
		else {
			node.normalize();

			syntax = Mavo.Expression.Syntax.create(node) || syntax;

			if (Mavo.is("item", node)) {
				path = [];
			}

			if (node.hasAttribute("mv-expressions-ignore")) {
				var ignore = new Set(node.getAttribute("mv-expressions-ignore").trim().split(/\s*,\s*/));
			}

			$$(node.attributes).forEach(attribute => {
				if (!ignore || !ignore.has(attribute.name)) {
					this.extract(node, attribute, path, syntax);
				}
			});

			var index = -1, offset = 0;

			if (!node.matches("script:not([mv-expressions])")) {
				$$(node.childNodes).forEach(child => {
					if (child.nodeType == 1) {
						offset = 0;
						index++;
					}
					else {
						offset++;
					}

					if (child.nodeType == 1 || child.nodeType == 3) {
						var segment = offset > 0? `${index}.${offset}` : index;
						this.traverse(child, [...path || [], segment], syntax);
					}
				});
			}
		}
	},

	static: {
		directives: [
			"mv-value"
		],

		skip: ["mv-expressions", "mv-action"],

		THROTTLE: 50,

		directive: function(name, o) {
			_.directives.push(name);
			Mavo.attributes.push(name);
			Mavo.Plugins.register(name, o);
		}
	}
});

})(Bliss, Bliss.$);

// mv-if plugin
(function($, $$) {

Mavo.Expressions.directive("mv-if", {
	extend: {
		"Primitive": {
			live: {
				"hidden": function(value) {
					if (this._hidden !== value) {
						this._hidden = value;
						this.liveData.update();
						this.dataChanged();
					}
				}
			}
		},
		"DOMExpression": {
			lazy: {
				"childProperties": function() {
					var properties = $$(Mavo.selectors.property, this.element)
									.filter(el => el.closest("[mv-if]") == this.element)
									.map(el => Mavo.Node.get(el));

					// When the element is detached, mv-change events from properties
					// do not propagate up to the group so expressions do not recalculate.
					// We must do this manually.
					this.element.addEventListener("mv-change", evt => {
						// Cannot redispatch synchronously [why??]
						requestAnimationFrame(() => {
							if (!this.element.parentNode) { // out of the DOM?
							this.item.element.dispatchEvent(evt);
						}
						});
					});

					return properties;
				}
			}
		}
	},
	hooks: {
		"domexpression-init-start": function() {
			if (this.attribute != "mv-if") {
				return;
			}

			if (!Mavo.Node.prototype.fromTemplate.call(this, "parsed", "expression")) {
				this.expression = this.element.getAttribute("mv-if");
				this.parsed = [new Mavo.Expression(this.expression)];
				this.expression = this.syntax.start + this.expression + this.syntax.end;
			}

			this.parentIf = this.element.parentNode && Mavo.DOMExpression.search(this.element.parentNode.closest("[mv-if]"), "mv-if");

			if (this.parentIf) {
				this.parentIf.childIfs = (this.parentIf.childIfs || new Set()).add(this);
			}
		},
		"domexpression-update-end": async function() {
			if (this.attribute !== "mv-if") {
				return;
			}

			var value = this.value[0];
			var oldValue = this.oldValue[0];

			// Only apply this after the tree is built, otherwise any properties inside the if will go missing!
			await this.item.mavo.treeBuilt;

			if (this.parentIf) {
				var parentValue = this.parentIf.value[0];
				this.value[0] = value = value && parentValue;
			}

			if (parentValue !== false) { // If parent if was false, it wouldn't matter whether this is in the DOM or not
				if (value) {
					// Is removed from the DOM and needs to get back
					Mavo.revocably.add(this.element);
				}
				else if (this.element.parentNode) {
					// Is in the DOM and needs to be removed
					Mavo.revocably.remove(this.element, "mv-if");
				}
			}

			if (value !== oldValue) {
				// Mark any properties inside as hidden or not
				this.childProperties?.forEach(property => property.hidden = !value);
				this.childIfs?.forEach(childIf => childIf.update());
			}
		},
		"node-isdatanull": function(env) {
			env.result = env.result || (this.hidden && env.options.live);
		}
	}
});

})(Bliss, Bliss.$);

/**
 * Functions available inside Mavo expressions
 */

(function($, val) {

var _ = Mavo.Functions = {
	operators: {
		"=": "eq"
	},

	/**
	 * Get a property of an object. Used by the . operator to prevent TypeErrors
	 */
	get: function(obj, property, meta = {}) {
		property = meta.property = val(property);

		// Get same case property name if it exists,
		// otherwise do a case insensitive search among properties
		var canonicalProperty = Mavo.getCanonicalProperty(obj, property);

		if (canonicalProperty !== undefined) {
			meta.property = canonicalProperty;
			var ret = obj[canonicalProperty];

			if (typeof ret === "function" && ret.name.indexOf("bound") !== 0) {
				return ret.bind(obj);
			}

			return ret;
		}

		if (Array.isArray(obj) && property && isNaN(property)) {
			// Array and non-numerical property
			var eqIndex = property.indexOf("=");

			if (eqIndex > -1) {
				// propertyName=value is used as a query for arrays of objects
				// This is mainly useful for mv-path
				meta.query = {
					property: property.slice(0, eqIndex),
					value: property.slice(eqIndex + 1)
				};

				meta.property = [];

				ret = obj.filter((e, i) => {
					var passes = _.get(e, meta.query.property) == meta.query.value;

					if (passes) {
						meta.property.push(i);
					}

					return passes;
				});

				if (meta.query.property == "id") {
					meta.property = meta.property[0];
					ret = ret[0];
				}

				if (ret === undefined) {
					meta.property = obj.length;
				}
				else if (ret.length === 0) {
					meta.property = [obj.length];
				}

				return ret;
			}
			else {
				// Not a property query, get from objects inside
				// TODO meta.property = ??
				return obj.map(e => _.get(e, property));
			}
		}

		// Not found :(
		return null;
	},

	url: (id, url = location) => {
		if (id === undefined) {
			return location.href;
		}

		if (id) {
			id = str(id).replace(/[^\w-:]/g);

			var ret = url.search.match(RegExp(`[?&]${id}(?:=(.+?))?(?=$|&)`))
			       || url.pathname.match(RegExp(`(?:^|\\/)${id}\\/([^\\/]*)`));
		}

		if (ret === null || !id) {
			return null;
		}

		return decodeURIComponent(ret[1] || "");
	},

	first: (n, arr) => {
		if (arr === undefined) {
			arr = n;
			n = undefined;
		}

		if (arr === undefined) {
			return null;
		}

		if (!Array.isArray(arr)) {
			return n !== undefined ? [arr] : arr;
		}

		if (n < 0) {
			return _.last(Math.abs(n), arr);
		}
		else {
			var ret = [];
			var numReturn = n === undefined ? 1 : Math.floor(n);

			for (var i = 0; i<arr.length && ret.length<numReturn; i++) {
				if (Mavo.value(arr[i]) !== null) {
					ret.push(arr[i]);
				}
			}

			if (n === undefined) {
				return ret[0] !== undefined ? ret[0] : null;
			}

			return ret;
		}
	},
	last: (n, arr) => {
		if (arr === undefined) {
			arr = n;
			n = undefined;
		}

		if (arr === undefined) {
			return null;
		}

		if (!Array.isArray(arr)) {
			return n !== undefined ? [arr] : arr;
		}

		if (n < 0) {
			return _.first(Math.abs(n), arr);
		}
		else {
			var ret = [];
			var numReturn = n === undefined ? 1 : Math.floor(n);

			for (var i = arr.length-1; i>=0 && ret.length<numReturn; i--) {
				if (Mavo.value(arr[i]) !== null) {
					ret.push(arr[i]);
				}
			}

			if (n === undefined) {
				return ret[0] !== undefined ? ret[0] : null;
			}

			return ret;
		}
	},
	// Get rid of empty values in array. Same as first(count(arr), arr)
	condense: (arr) => {
		return _.first(arr.length, arr);
	},

	unique: function(arr) {
		if (!Array.isArray(arr)) {
			return arr;
		}

		return [...new Set(arr.map(val))];
	},

	/**
	 * Do two arrays or sets have a non-empty intersection?
	 * @return {Boolean}
	 */
	intersects: function(arr1, arr2) {
		if (arr1 && arr2) {
			var set2 = new Set(Mavo.toArray(arr2).map(val));
			arr1 = Mavo.toArray(arr1).map(val);

			return !arr1.every(el => !set2.has(el));
		}
	},

	/*********************
	 * Number functions
	 *********************/

	/**
	 * Aggregate sum
	 */
	sum: $.extend(function(array) {
		return $u.numbers(array, arguments).reduce((prev, current) => {
			return +prev + (+current || 0);
		}, 0);
	}, {
		isAggregate: true
	}),

	/**
	 * Average of an array of numbers
	 */
	average: $.extend(function(array) {
		array = $u.numbers(array, arguments);
		return array.length && _.sum(array) / array.length;
	}, {
		isAggregate: true,
		alias: "avg"
	}),

	/**
	 * Median of an array of numbers
	 */
	median: $.extend(function(array) {
		array = $u.numbers(array, arguments).sort((a, b) => a - b);
		var mi = (array.length - 1) / 2;
		[m1, m2] = [array[Math.floor(mi)], array[Math.ceil(mi)]];
		return (m1 + m2) / 2 || 0;
	}, {
		isAggregate: true
	}),

	/**
	 * Min of an array of numbers
	 */
	min: $.extend(function(array) {
		return Math.min(...$u.numbers(array, arguments));
	}, {
		isAggregate: true
	}),

	/**
	 * Max of an array of numbers
	 */
	max: $.extend(function(array) {
		return Math.max(...$u.numbers(array, arguments));
	}, {
		isAggregate: true
	}),

	atan2: $.extend((dividend, divisor) => Math.atan2(dividend, divisor), {
		multiValued: true,
		rightUnary: b => b,
		default: 1
	}),

	pow: $.extend((base, exponent) => Math.pow(base, exponent), {
		multiValued: true,
		default: 1
	}),

	imul: $.extend((a, b) => Math.imul(a, b), {
		multiValued: true,
		default: 1
	}),

	count: $.extend(function(array) {
		return Mavo.toArray(array).filter(a => !empty(a)).length;
	}, {
		isAggregate: true
	}),

	reverse: function(array) {
		return Mavo.toArray(array).slice().reverse();
	},

	round: $.extend((num, decimals) => {
		if (not(num) || not(decimals) || !isFinite(num)) {
			return Math.round(num);
		}

		return +(+num).toLocaleString("en-US", {
			useGrouping: false,
			maximumFractionDigits: decimals
		});
	}, {
		multiValued: true,
		rightUnary: b => b,
		default: 0
	}),

	ordinal: $.extend((num) => {
		if (empty(num)) {
			return "";
		}

		if (num < 10 || num > 20) {
			var ord = ["th", "st", "nd", "rd", "th"][num % 10];
		}

		return ord || "th";
	}, {
		multiValued: true,
		alias: "th"
	}),

	digits: $.extend((digits, decimals, num) => {
		if (num === undefined) {
			num = decimals;
			decimals = undefined;
		}

		if (isNaN(num)) {
			return null;
		}

		var parts = (num + "").split(".");

		// If it has more digits than n = digits, only keep the last n digits.
		parts[0] = parts[0].slice(-digits);

		// Chop extra decimals without rounding
		if (decimals !== undefined && parts[1]) {
			parts[1] = parts[1].slice(0, decimals);
		}

		num = +parts.join(".");

		// This is mainly for padding with zeroes, we've done the rest already
		return num.toLocaleString("en", {
			useGrouping: false, // we want something that can be converted to a number again
			minimumIntegerDigits: digits,
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals || 20
		});
	}, {
		multiValued: true
	}),

	iff: function(condition, iftrue=condition, iffalse=null) {
		if (Array.isArray(condition)) {
			return condition.map((c, i) => {
				var ret = val(c)? iftrue : iffalse;

				return Array.isArray(ret)? ret[Math.min(i, ret.length - 1)] : ret;
			});
		}

		return val(condition)? iftrue : iffalse;
	},

	group: (...objects) => Object.assign(...objects),
	list: (...items) => items.flat(),

	// FIXME if step=0 returns NaN
	random: $.extend((min = 0, max = 100, step = 1) => {
		if (arguments.length == 1) {
			max = min;
			min = 0;
		}

		var rand = Math.random();
		var range = (max - min)  / step;
		return Math.floor(rand * (range + 1)) * step + min;
	}, {
		multiValued: true
	}),

	range: (a, b, step) => {
		if (step === undefined) {
			if (b === undefined) {
				b = a;
				a = b >= 0? 1 : -1;
			}

			step = a <= b? 1 : -1;
		}

		var steps = Math.floor((b - a)/step + 1);

		if (steps <= 0 || !isFinite(steps)) {
			return [a];
		}

		var ret = [];

		for (let i = 0, n = a; i++ < steps; n += step) {
			ret.push(n);
		}

		return ret;
	},

	shuffle: list => {
		if (Array.isArray(list)) {
			// Fisher-Yates shuffle
			var ret = list.slice();

			for (var i = ret.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				[ret[i], ret[j]] = [ret[j], ret[i]];
			}

			return ret;
		}
		else {
			return list;
		}
	},

	/*********************
	 * String functions
	 *********************/

	/**
	 * Replace all occurences of a string with another string
	 */
	replace: $.extend((haystack, needle, replacement = "", iterations = 1) => {
		if (Array.isArray(haystack)) {
			return haystack.map(item => _.replace(item, needle, replacement));
		}

		// Simple string replacement
		var needleRegex = RegExp(Mavo.escapeRegExp(needle), "g");
		var ret = haystack, prev;
		var counter = 0;

		while (ret != prev && (counter++ < iterations)) {
			prev = ret;
			ret = ret.replace(needleRegex, replacement);
		}

		return ret;
	}, {
		multiValued: true
	}),

	len: $.extend(text => str(text).length, {
		multiValued: true
	}),

	/**
	 * Search if a group, collection, or primitive contains a string
	 * @returns Boolean if a haystack AND needle of object or primitive are passed
	 * @returns Array of booleans if either a haystack OR needle of array is passed
	 */
	contains: $.extend((haystack, needle) => {
		let ret;
		let haystackType = $.type(haystack);

		if ($.type(needle) === "object") {
			return JSON.stringify(haystack).indexOf(JSON.stringify(needle)) >= 0;
		}

		if (haystackType === "object" || haystackType === "array") {
			for (let property in haystack) {
				ret = _.contains(haystack[property], needle);

				if (Array.isArray(ret)) {
					ret = Mavo.Functions.or(ret);
				}
				if (ret) {
					return true;
				}
			}
		}
		else {
			return _.search(haystack, needle) >= 0;
		}

		return ret;
	}, {
		multiValued: true
	}),

	/**
	 * Case insensitive search
	 */
	search: $.extend((haystack, needle) => {
		haystack = str(haystack);
		needle = str(needle);
		return haystack && needle? haystack.toLowerCase().indexOf(needle.toLowerCase()) : -1;
	}, {
		multiValued: true,
	}),

	starts: $.extend((haystack, needle) => _.search(str(haystack), str(needle)) === 0, {
		multiValued: true,
	}),

	ends: $.extend((haystack, needle) => {
		[haystack, needle] = [str(haystack), str(needle)];

		var i = _.search(haystack, needle);
		return  i > -1 && i === haystack.length - needle.length;
	}, {
		multiValued: true,
	}),

	join: function(array, glue) {
		return Mavo.toArray(array).filter(a => !empty(a)).join(str(glue));
	},

	idify: $.extend(readable => {
		return str(readable)
			.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Convert accented letters to ASCII
			.replace(/[^\w\s-]/g, "") // Remove remaining non-ASCII characters
			.trim().replace(/\s+/g, "-") // Convert whitespace to hyphens
			.toLowerCase();
	}, {
		multiValued: true
	}),

	// Convert an identifier to readable text that can be used as a label
	readable: $.extend(identifier => {
		// Is it camelCase?
		return str(identifier)
				.replace(/([a-z])([A-Z])(?=[a-z])/g, ($0, $1, $2) => $1 + " " + $2.toLowerCase()) // camelCase?
				.replace(/([a-z0-9])[_\/-](?=[a-z0-9])/g, "$1 ") // Hyphen-separated / Underscore_separated?
				.replace(/^[a-z]/, $0 => $0.toUpperCase()); // Capitalize
	}, {
		multiValued: true
	}),

	uppercase: $.extend(text => str(text).toUpperCase(), {
		multiValued: true
	}),
	lowercase: $.extend(text => str(text).toLowerCase(), {
		multiValued: true
	}),

	from: $.extend((haystack, needle) => _.between(haystack, needle), {
		multiValued: true,
	}),

	fromlast: $.extend((haystack, needle) => _.between(haystack, needle, "", true), {
		multiValued: true,
	}),

	to: $.extend((haystack, needle) => _.between(haystack, "", needle), {
		multiValued: true,
	}),

	tofirst: $.extend((haystack, needle) => _.between(haystack, "", needle, true), {
		multiValued: true,
	}),

	between: $.extend((haystack, from, to, tight) => {
		[haystack, from, to] = [str(haystack), str(from), str(to)];

		var i1 = from? haystack[tight? "lastIndexOf" : "indexOf"](from) : -1;
		var i2 = haystack[tight? "indexOf" : "lastIndexOf"](to);

		if (from && i1 === -1 || i2 === -1) {
			return "";
		}

		return haystack.slice(i1 + 1, i2 === -1 || !to? haystack.length : i2);
	}, {
		multiValued: true
	}),

	phrase: $.extend(function($this, id, vars, lang) {
		if (arguments.length === 3 && $.type(vars) === "string") {
			[lang, vars] = [vars];
		}

		var locale = lang? Mavo.Locale.get(lang) : ($this?.[Mavo.mavo]?.locale ?? Mavo.Locale.default);

		return locale.phrase(id, vars);
	}, {
		needsContext: true
	}),

	filename: $.extend(url => new URL(str(url), Mavo.base).pathname.match(/[^/]+?$/)?.[0], {
		multiValued: true
	}),

	json: data => Mavo.safeToJSON(data),

	split: $.extend((text, separator = /\s+/) => {
		text = str(text);

		return text.split(separator);
	}, {
		multiValued: true
	}),

	// Log to the console and return
	log: (...args) => {
		console.log(...args.map(val));
		return args[0];
	},

	// Other special variables (some updated via events)
	$mouse: {x: 0, y: 0},

	get $hash() {
		return location.hash.slice(1);
	},

	get $alt() {
		return _.$evt? _.$evt.altKey : false;
	},

	get $ctrl() {
		return _.$evt? _.$evt.ctrlKey : false;
	},

	get $shift() {
		return _.$evt? _.$evt.shiftKey : false;
	},

	get $cmd() {
		return _.$evt? _.$evt[Mavo.superKey] : false;
	},

	// "Private" helpers
	util: {
		numbers: function(array, args) {
			array = Array.isArray(array)? array : (args? $$(args) : [array]);

			return array.filter(number => !isNaN(number) && val(number) !== "" && val(number) !== null).map(n => +n);
		},

		// Implement function metadata
		postProcess: function(callback) {
			var multiValued = callback.multiValued;
			var newCallback;

			if (multiValued === true || multiValued?.length === 2) {
				newCallback = (...args) => {
					// Define index of multiValued arguments
					// Fallback to first 2 arguments if not explicitly defined
					var idxA = multiValued[0] || 0;
					var idxB = multiValued[1] || 1;

					return Mavo.Script.binaryOperation(args[idxA], args[idxB], {
						scalar: (a, b) => {
							// Replace multiValued argument with its individual elements
							if (idxA in args) {
								args[idxA] = a;
							}

							if (idxB in args) {
								args[idxB] = b;
							}

							return callback(...args);
						},
						...callback
					});
				};
			}
			else if (callback.isAggregate) {
				newCallback = function(array) {
					if (Mavo.in(Mavo.groupedBy, array)) { // grouped structures
						return array.map(e => newCallback(e.$items));
					}

					var ret = callback.call(this, ...arguments);

					return ret === undefined? array : ret;
				};
			}

			if (newCallback) {
				// Preserve function metadata
				$.extend(newCallback, callback);
				newCallback.original = callback;
			}

			if (callback.alias) {
				for (let alias of Mavo.toArray(callback.alias)) {
					Mavo.Functions[alias] = newCallback || callback;
				}
			}

			return newCallback;
		}
	}
};

var $u = _.util;

/**
 * After plugins are loaded, enable
 * multi-valued arguments of Mavo and Math functions
 */
Mavo.ready.then(() => {
	Object.getOwnPropertyNames(Mavo.Functions).forEach(property => {
		var newCallback = $u.postProcess(Mavo.Functions[property]);

		if (newCallback) {
			Mavo.Functions[property] = newCallback;
		}
	});

	// Deal with Math functions that have 1 argument
	Object.getOwnPropertyNames(Math).forEach(property => {
		if (Math[property].length === 1 && !Mavo.Functions.hasOwnProperty(property)) {
			Mavo.Functions[property] = operand => Mavo.Script.unaryOperation(operand, operand => Math[property](operand));
		}
	});
});

/**
 * Private helper methods
 */

// Convert argument to string
function str(str = "") {
	str = val(str);
	return !str && str !== 0? "" : str + "";
}

function empty(v) {
	v = Mavo.value(v);
	return v === null || v === false || v === "";
}

function not(v) {
	return !val(v);
}

})(Bliss, Mavo.value);

/**
 * Date Functions available inside Mavo expressions
 */

(function($, val, _, $u = _.util) {

var s = {seconds: 1, minutes: 60};
s.hours  = s.minutes * 60;
s.days   = s.hours   * 24;
s.weeks  = s.days    * 7;
s.months = s.days    * 30.4368;
s.years  = s.weeks  * 52;

var numeric = {
	year: d => d.getFullYear(),
	month: d => d.getMonth() + 1,
	day: d => d.getDate(),
	weekday: d => d.getDay() || 7,
	hour: d => d.getHours(),
	minute: d => d.getMinutes(),
	second: d => d.getSeconds(),
	ms: d => d.getMilliseconds()
};

$.extend(_, {
	get $now() {
		return new Date();
	},

	$startup: new Date(), // Like $now, but doesn't update

	get $today() {
		return _.date(new Date());
	},

	year: $.extend(function() {
		return $u.dateComponent("year", ...arguments);
	}, {multiValued: true}),

	month: $.extend(function() {
		return $u.dateComponent("month", ...arguments);
	}, {multiValued: true}),

	week: () => s.weeks * 1000,

	day: $.extend(function() {
		return $u.dateComponent("day", ...arguments);
	}, {multiValued: true}),

	weekday: $.extend(function() {
		return $u.dateComponent("weekday", ...arguments);
	}, {multiValued: true}),

	hour: $.extend(function() {
		return $u.dateComponent("hour", ...arguments);
	}, {multiValued: true}),

	minute: $.extend(function() {
		return $u.dateComponent("minute", ...arguments);
	}, {multiValued: true}),

	second: $.extend(function() {
		return $u.dateComponent("second", ...arguments);
	}, {multiValued: true}),

	ms: $.extend(function() {
		return $u.dateComponent("ms", ...arguments);
	}, {multiValued: true}),

	date: $.extend(date => {
		date = $u.date(date);

		return date? `${_.year(date)}-${_.month(date, "00")}-${_.day(date, "00")}` : "";
	}, {multiValued: true}),

	time: $.extend((date, precision = "seconds") => {
		date = $u.date(date);

		if (!date) {
			return "";
		}

		var ret = `${_.hour(date, "00")}:${precision == "hours"? "00" : _.minute(date, "00")}`;

		if (precision == "seconds" || precision == "ms") {
			ret += `:${_.second(date, "00")}`;

			if (precision == "ms") {
				ret += `.${_.ms(date)}`;
			}
		}

		return ret;
	}, {multiValued: true}),

	localTimezone: -(new Date()).getTimezoneOffset(),
});

_.msTo = (what, ms) => Math.floor(Math.abs(ms) / (s[what] * 1000)) || 0;

for (let unit in s) {
	_[unit] = $.extend(function(ms) {
		if (arguments.length === 0) {
			return s[unit] * 1000;
		}

		return _.msTo(unit, ms);
	}, {multiValued: true});
}

_.duration = $.extend(function($this, ms) {
	if (arguments.length === 1) {
		[ms, $this] = [$this, null];
	}

	var count = ms || 0;
	var unit = "ms";

	for (let nextUnit in s) {
		var nextCount = _.msTo(nextUnit, ms);

		if (nextCount === 0) {
			break;
		}

		count = nextCount;
		unit = nextUnit;
	}

	unit = count === 1 && unit !== "ms"? unit.slice(0, -1) : unit;

	return count + " " + _.phrase($this, unit);
}, {
	needsContext: true
});

$.extend(_.util, {
	fixDateString: function(date) {
		date = date.trim();

		var hasDate = /^\d{4}-\d{2}(-\d{2})?/.test(date);
		var hasTime = date.indexOf(":") > -1;

		if (!hasDate && !hasTime) {
			return null;
		}

		// Fix up time format
		if (!hasDate) {
			// No date, add todayâ€™s
			date = _.$today + " " + date;
		}
		else {
			// Only year-month, add day
			date = date.replace(/^(\d{4}-\d{2})(?!-\d{2})/, "$1-01");
		}

		if (!hasTime) {
			// Add a time if one doesn't exist
			date += "T00:00:00";
		}
		else {
			// Make sure time starts with T, due to Safari bug
			date = date.replace(/\-(\d{2})\s+(?=\d{2}:)/, "-$1T");
		}

		// Remove all whitespace
		date = date.replace(/\s+/g, "");

		return date;
	},

	dateComponent: function(component, date, format) {
		if (arguments.length === 1 && component + "s" in s) {
			return _[component + "s"]();
		}

		var dateO = $u.date(date);

		if (component === "year") {
			// Why +""? We don't want years to be formatted like 2,017!
			// Why the .match()? For incomplete dates, see #226
			date = date && date.match? date : date + "";
			var ret = dateO? dateO.getFullYear() + "" : (date.match(/\b[1-9]\d\d\b|\d+/) || [])[0];
		}

		if (!ret && !dateO) {
			return "";
		}

		var ret = ret || numeric[component](dateO);

		if (format) {
			if (/^0+$/.test(format)) {
				// Leading zeroes
				return (ret + "").padStart(format.length, "0").slice(-format.length);
			}
			else {
				format = {name: "long", shortname: "short"}[format] || format;
				ret = dateO.toLocaleString(Mavo.locale, {[component]: format});
				ret = ret.replace(/\u200e/g, ""); // Stupid Edge bug

				return ret;
			}
		}

		return component === "year"? ret : +ret;
	},

	date: function(date) {
		date = val(date);

		if (!date) {
			return null;
		}

		var object = new Date(date);

		// Either arg is not string or is exactly the same as a re-serialization of it as a date
		if ($.type(date) !== "string" || !isNaN(object) && (object + "" == date)) {
			return object;
		}

		date = $u.fixDateString(date);

		if (date === null) {
			return null;
		}

		var timezone = date.match(/[+-]\d{2}:?\d{2}|Z$/)?.[0];

		if (timezone) {
			// parse as ISO format
			date = new Date(date);
		}
		else {
			// construct date in local timezone
			var fields = date.match(/\d+/g);

			date = new Date(
				// year, month, date,
				fields[0], (fields[1] || 1) - 1, fields[2] || 1,
				// hours, minutes, seconds, milliseconds,
				fields[3] || 0, fields[4] || 0, fields[5] || 0, fields[6] || 0
			);
		}

		return isNaN(date)? null : date;
	}
});

})(Bliss, Mavo.value, Mavo.Functions);

(function($, val, $u) {

var _ = Mavo.Script = {
	$fn: self.Proxy? new Proxy({[Symbol.unscopables]: {undefined: true}}, {
		get: (data, property) => {
			var propertyL = property.toLowerCase(), ret;

			// Is this a data action function?
			if (propertyL in Mavo.Actions.Functions) {
				if (Mavo.Actions.running) {
					ret = Mavo.Actions.Functions[propertyL];
				}
				else {
					ret = Mavo.Actions.nope;
				}
			}

			// Is this a Mavo function?
			if (ret === undefined) {
				if (propertyL in Mavo.Functions) {
					ret = Mavo.Functions[propertyL];
				}
				else {
					// Maybe it's a Math function?
					ret = Math[property] || Math[propertyL];
				}
			}

			return ret;
		},

		has: (data, property) => {
			var propertyL = property.toLowerCase();

			return propertyL in Mavo.Functions || propertyL in Mavo.Actions.Functions
				   || property in Math || propertyL in Math;
		}
	}) : Mavo.Functions,

	addUnaryOperator: function(name, o) {
		if (o.symbol) {
			// Build map of symbols to function names for easy rewriting
			Mavo.toArray(o.symbol).forEach(symbol => {
				_.unarySymbols[symbol] = name;
				jsep.addUnaryOp(symbol);
			});
		}

		return operand => _.unaryOperation(operand, operand => o.scalar(val(operand)));
	},

	unaryOperation: function(operand, scalar) {
		if (Array.isArray(operand)) {
			return operand.map(scalar);
		}
		else {
			return scalar(operand);
		}
	},

	binaryOperation: function(a, b, o = {}) {
		o.scalar = typeof o === "function" ? o : o.scalar;
		var result;

		if (Array.isArray(b)) {
			if (Array.isArray(a)) {
				result = [];
				var max = Math.max(a.length, b.length);
				var leftUnary = o.leftUnary || o.unary;
				var rightUnary = o.rightUnary || o.unary;
				var leftDefault = o.leftDefault === undefined ? o.default : o.leftDefault;
				var rightDefault = o.rightDefault === undefined ? o.default : o.rightDefault;

				for (let i = 0; i < max; i++) {
					if (o.comparison && (a[i] === undefined || b[i] === undefined)) {
						result[i] = o.default;
					}
					else if (a[i] === undefined) {
						result[i] = rightUnary ? rightUnary(b[i]) : o.scalar(leftDefault, b[i]);
					}
					else if (b[i] === undefined) {
						result[i] = leftUnary ? leftUnary(a[i]) : o.scalar(a[i], rightDefault);
					}
					else {
						result[i] = o.scalar(a[i], b[i]);
					}
				}
			}
			else {
				result = b.map(n => o.scalar(a, n));
			}
		}
		else if (Array.isArray(a)) {
			result = a.map(n => o.scalar(n, b));
		}
		else {
			result = o.scalar(a, b);
		}

		return result;
	},

	/**
	 * Extend a scalar operator to arrays, or arrays and scalars
	 * The operation between arrays is applied element-wise.
	 * The operation operation between a scalar and an array will result in
	 * the operation being applied between the scalar and every array element.
	 */
	addBinaryOperator: function(name, o) {
		if (o.symbol) {
			// Build map of symbols to function names for easy rewriting
			Mavo.toArray(o.symbol).forEach(symbol => {
				_.symbols[symbol] = name;

				if (o.precedence) {
					jsep.addBinaryOp(symbol, o.precedence);
				}
			});
		}

		o.default = o.default === undefined? 0 : o.default;

		return o.code || function(...operands) {
			if (operands.length === 1) {
				if (Array.isArray(operands[0])) {
					// Operand is an array of operands, expand it out
					operands = [...operands[0]];
				}
			}

			if (!o.raw) {
				operands = operands.map(val);
			}

			var prev = o.comparison ? true : operands[0], result;

			for (let i = 1; i < operands.length; i++) {
				let a = o.comparison? operands[i - 1] : prev;
				let b = operands[i];

				if (Array.isArray(b) && typeof o.default == "number") {
					b = $u.numbers(b);
				}

				var result = _.binaryOperation(a, b, o);

				if (o.comparison) {
					prev = _.binaryOperation(prev, result, _.operators["and"]);
				}
				else {
					prev = result;
				}
			}

			return prev;
		};
	},

	/**
	 * Mapping of operator symbols (strings) to function names (strings).
	 * Populated via addOperator() and addLogicalOperator()
	 */
	symbols: {},
	unarySymbols: {},

	getOperatorName: (op, unary) => _[unary? "unarySymbols" : "symbols"][op] || op,

	isComparisonOperator: (op) => {
		// decides if op, a string, is a comparison operator like < or <=
		if (op) {
			let operatorDefinition = _.operators[_.symbols[op]];
			return operatorDefinition && operatorDefinition.comparison;
		}
	},

	// Is this variable?
	// E.g. foo or foo.bar is not static whereas "foo" or bar() is
	isStatic: node => {
		if (node.type === "Identifier") {
			return false;
		}

		for (let property of _.childProperties) {
			if (node[property] && property !== "callee") {
				if (!_.isStatic(node[property])) {
					return false;
				}
			}
		}

		return true;
	},

	/**
	 * Operations for elements and scalars.
	 * Operations between arrays happen element-wise.
	 * Operations between a scalar and an array will result in the operation being performed between the scalar and every array element.
	 * Ordered by precedence (higher to lower)
	 * @param scalar {Function} The operation between two scalars
	 * @param unary/leftUnary/rightUnary Custom versions of scalar for when there is only 1 operand.
	 * @param precedence {Number}
	 * @param symbol {String} The operator's symbol
	 * @param default The operationâ€™s default/identity element. Defaults to 0.
	 *                There are also leftDefault and rightDefault options if needed.
	 * @param export {Boolean} Whether to add the resulting function to Mavo.Functions. It will always be available on Mavo.Script.operators[name].code anyway. Default: true
	 * @param code {Function} The full implementation of the operator (including handling for array operands), if one prefers to provide instead of have it be generated.
	 * @param transformation {Function}
	 * @param postFlattenTransformation {Function}
	 * @param raw {Boolean} If true, do not use Mavo.value() on operands
	 */
	operators: {
		"not": {
			symbol: "!",
			scalar: a => !val(a)
		},
		"multiply": {
			scalar: (a, b) => a * b,
			default: 1,
			symbol: "*"
		},
		"divide": {
			scalar: (a, b) => a / b,
			rightUnary: b => b,
			default: 1,
			symbol: "/"
		},
		"addition": {
			scalar: (a, b) => {
				if (isNaN(a) || isNaN(b)) {
					// Handle dates
					var dateA = $u.date(a), dateB = $u.date(b);

					if (dateA || dateB) {
						return +dateA + +dateB;
					}
				}

				return +a + +b;
			},
			symbol: "+"
		},
		"plus": {
			scalar: a => +a,
			symbol: "+"
		},
		"subtract": {
			scalar: (a, b) => {
				if (isNaN(a) || isNaN(b)) {
					// Handle dates
					var dateA = $u.date(a), dateB = $u.date(b);

					if (dateA && dateB) {
						return dateA - dateB;
					}
				}

				return a - b;
			},
			symbol: "-"
		},
		"minus": {
			scalar: a => -a,
			symbol: "-"
		},
		"mod": {
			scalar: (a, b) => {
				var ret = a % b;
				ret += ret < 0? b : 0;
				return ret;
			},
			symbol: "mod",
			precedence: 10
		},
		"lte": {
			comparison: true,
			scalar: (a, b) => {
				[a, b] = _.getNumericalOperands(a, b);
				return a <= b;
			},
			default: false,
			symbol: "<="
		},
		"lt": {
			comparison: true,
			scalar: (a, b) => {
				[a, b] = _.getNumericalOperands(a, b);
				return a < b;
			},
			default: false,
			symbol: "<"
		},
		"gte": {
			comparison: true,
			scalar: (a, b) => {
				[a, b] = _.getNumericalOperands(a, b);
				return a >= b;
			},
			default: false,
			symbol: ">="
		},
		"gt": {
			comparison: true,
			scalar: (a, b) => {
				[a, b] = _.getNumericalOperands(a, b);
				return a > b;
			},
			default: false,
			symbol: ">"
		},
		"eq": {
			comparison: true,
			scalar: (a, b) => {
				return a == b || Mavo.safeToJSON(a) === Mavo.safeToJSON(b);
			},
			symbol: ["=", "=="],
			default: false,
			precedence: 7 // to match other comparison operators in jsep
		},
		"neq": {
			comparison: true,
			scalar: (a, b) => {
				return a != b && Mavo.safeToJSON(a) !== Mavo.safeToJSON(b);
			},
			symbol: ["!="],
			default: true,
			precedence: 7 // to match other comparison operators in jsep
		},
		"and": {
			scalar: (a, b) => a && b,
			default: false,
			symbol: ["&&", "and"],
			precedence: 2
		},
		"or": {
			scalar: (a, b) => a || b,
			default: false,
			symbol: ["||", "or"],
			precedence: 2
		},
		"concatenate": {
			symbol: "&",
			default: "",
			scalar: (a, b) => "" + (a || "") + (b || ""),
			precedence: 10
		},
		"keyvalue": {
			symbol: ":",
			code: (...operands) => {
				var i = operands.length - 1;
				var value = operands[i];

				while (i--) {
					value = {[operands[i]]: value};
				}

				return value;
			},
			transformation: node => {
				// Allow unquoted property names, just like JS
				if (node.left.type == "Identifier") {
					node.left = {
						type: "Literal",
						value: node.left.name,
						raw: JSON.stringify(node.left.name)
					};
				}
			},
			precedence: 4
		},
		"filter": {
			symbol: "where",
			code: (a, ...filters) => {
				for (let b of filters) {
					if (Array.isArray(a)) {
						if (Array.isArray(b)) {
							a = a.map((v, i) => val(b[i])? v : null);
						}
						else {
							b = val(b);

							if (typeof b === "boolean") {
								// foo where true/false should equal foo/null respectively
								a = b? a : a.map(v => null);
							}
							else {
								// foo where 5 should equal foo where foo = 5
								a = a.map(v => v == b? v : null);
							}
						}
					}
					else {
						a = val(b)? a : null;
					}
				}

				return a;
			},
			precedence: 1,
			postFlattenTransformation: node => {
				// Scope all identifiers (likely properties) in the where clause to the thing we're filtering from.
				// For example, assume you have a list of people and a list of cats, both with names and ages.
				// Without this, cat where age > 3 would return nonsensical results
				var object = node.arguments[0];

				for (let i=1; i<node.arguments.length; i++) {
					if (!_.isStatic(node.arguments[i])) {
						node.arguments[i] = Object.assign(_.parse("scope()"), {
							arguments: [
								object,
								node.arguments[i]
							]
						});
					}
				}
			}
		},
		"range": {
			symbol: "..",
			scalar: (a, b) => Mavo.Functions.range(a, b),
			precedence: 2,
			export: false
		},
		"has": {
			symbol: "in",
			code: function(needle, ...haystacks) {
				var ret;
				haystacks.map(b => {
					if (Array.isArray(b)) {
						var op =  a => {
							// If object, comparison will fail because references. Must serialize first.
							var fn = $.type(val(a)) === "object"? Mavo.safeToJSON : val;

							return b.map(fn).indexOf(fn(a)) > -1;
						};
					}
					else if ($.type(b) === "object") {
						// Mimic JS' in operator
						var op = a => Mavo.in(val(a), b);
					}
					else {
						var op = a => Mavo.Functions.eq(a, b);
					}

					var result = Mavo.Script.unaryOperation(needle, op);
					ret = ret === undefined? result : Mavo.Functions.and(result, ret);
				});
				return ret;
			},
			precedence: 3
		},
		"groupby": {
			symbol: "by",
			code: (array, key) => {
				array = Mavo.toArray(array);
				key = Mavo.toArray(key);
				var property = key[Mavo.as] || key[0]?.[Mavo.toNode]?.property;
				var groups = new Mavo.BucketMap({arrays: true});
				var ret = [];
				ret[Mavo.groupedBy] = true;

				array.forEach((item, i) => {
					let k = i < key.length ? Mavo.value(key[i]) : null;
					groups.set(k, item);
				});

				if (Mavo.in(Mavo.route, array)) {
					ret[Mavo.route] = Object.assign({}, array[Mavo.route]);
				}

				groups.forEach((items, value) => {
					var obj = {
						$value: value,
						[property || "$value"]: value,
						$items: items
					};

					if (Mavo.in(Mavo.route, array)) {
						items[Mavo.route] = obj[Mavo.route] = Object.assign({}, array[Mavo.route]);
						obj[Mavo.route] = $.each(items[Mavo.route], (p, v) => new Set(["$items"]));
					}

					ret.push(obj);
				});

				return Mavo.Data.proxify(ret);
			},
			precedence: 2
		},
		"as": {
			symbol: "as",
			code: (property, name) => {
				if (property !== undefined && $.type(property) === "array" && name !== undefined) {
					var ret = property.slice();

					if (!Array.isArray(name) && name?.[Mavo.toNode]?.property !== undefined) {
						ret[Mavo.as] = name?.[Mavo.toNode]?.property;
						return ret;
					}

					if ($.type(name) === "string") {
						ret[Mavo.as] = name;
						return ret;
					}

					if (name[0]?.[Mavo.toNode]?.property !== undefined) {
						ret[Mavo.as] = name[0]?.[Mavo.toNode]?.property;
						return ret;
					}

					return property;
				}
				return property;
			},
			precedence: 3
		},
	},

	getNumericalOperands: function(a, b) {
		if (isNaN(a) || isNaN(b)) {
			// Try comparing as dates
			var da = $u.date(a), db = $u.date(b);

			if (da && db) {
				// Both valid dates
				return [da, db];
			}
		}

		return [a, b];
	},

	childProperties: [
		"arguments", "callee", // CallExpression
		"left", "right", // BinaryExpression, LogicalExpression
		"argument", // UnaryExpression
		"elements", // ArrayExpression
		"test", "consequent", "alternate", // ConditionalExpression
		"object",  "property", // MemberExpression
		"body"
	],

	/**
	 * Recursively execute a callback on this node and all its children
	 * Caveat: For CallExpression arguments, it will call callback with an array
	 * callback needs to take care of iterating over the array
	 */
	walk: function(node, callback, o = {}, property, parent) {
		if (!o.type || node.type === o.type) {
			var ret = callback(node, property, parent);
		}

		if (!o.ignore || o.ignore.indexOf(node.type) === -1) {
			if (Array.isArray(node)) {
				for (let n of node) {
					_.walk(n, callback, o, property, node);
				}
			}
			else {
				_.childProperties.forEach(property => {
					if (node[property]) {
						_.walk(node[property], callback, o, property, node);
					}
				});
			}
		}

		if (ret !== undefined && parent) {
			// Apply transformations after walking, otherwise it may recurse infinitely
			parent[property] = ret;
		}

		return ret;
	},

	/**
	 * These serializers transform the AST into JS
	 */
	serializers: {
		"BinaryExpression": node => `${_.serialize(node.left, node)} ${node.operator} ${_.serialize(node.right, node)}`,
		"UnaryExpression": node => `${node.operator}${_.serialize(node.argument, node)}`,
		"CallExpression": node => {
			var nameSerialized = _.serialize(node.callee, node);
			var argsSerialized = node.arguments.map(n => _.serialize(n, node));

			if (node.callee.type == "Identifier") {
				// Clashes with native prototype methods? If so, look first in Function trap
				var name = node.callee.name;

				if (name === "scope") {
					return _.serializeScopeCall(node.arguments);
				}
				else if (name in Mavo.Script.$fn) {
					return `$fn.${name}(${argsSerialized.join(", ")})`;
				}
			}

			return `${nameSerialized}(${argsSerialized.join(", ")})`;
		},
		"ConditionalExpression": node => `${_.serialize(node.test, node)}? ${_.serialize(node.consequent, node)} : ${_.serialize(node.alternate, node)}`,
		"MemberExpression": (node, parent) => {
			let plainSerialize = (node.object.type === "Identifier" && node.object.name === "$fn")
				// Leave members in function calls as-is unless the object is $fn (handled above)
				|| _.closest(node, "CallExpression");

			if (plainSerialize) {
				var property = node.computed? `[${_.serialize(node.property, node)}]` : `.${node.property.name}`;
				return `${_.serialize(node.object, node)}${property}`;
			}

			var property = node.computed? _.serialize(node.property, node) : `"${node.property.name}"`;
			return `$fn.get(${_.serialize(node.object, node)}, ${property})`;
		},
		"ArrayExpression": node => `[${node.elements.map(n => _.serialize(n, node)).join(", ")}]`,
		"Literal": node => node.raw.replace(/\r/g, "\\r").replace(/\n/g, "\\n"),
		"Identifier": node => node.name,
		"ThisExpression": node => "this",
		"Compound": node => node.body.map(n => _.serialize(n, node)).join(", ")
	},

	/**
	 * These are run before the serializers and transform the expression to support MavoScript
	 */
	transformations: {
		"BinaryExpression": node => {
			let name = _.getOperatorName(node.operator);
			let def = _.operators[name];

			// Operator-specific transformations
			def.transformation?.(node);

			var nodeLeft = node;
			var ret = {
				type: "CallExpression",
				arguments: [],
				callee: {type: "Identifier", name}
			};

			if (def.comparison) {
				// Flatten comparison operator calls. If all comparison
				// operators are the same, flatten into one call (to maintain
				// simplicity of output):
				// 3 < 4 < 5 becomes lt(3, 4, 5).
				// Otherwise, assemble an argument list like so:
				// 3 < 4 = 5 becomes compare(3, "lt", 4, "eq", 5).

				// Create list of {comparison, operand} objects
				let comparisonOperands = [];
				do {
					let operatorName = _.getOperatorName(nodeLeft.operator); // e.g. "lt"
					comparisonOperands.unshift({
						comparison: operatorName,
						operand: nodeLeft.right
					});
					nodeLeft = nodeLeft.left;
				} while (def.flatten !== false && _.isComparisonOperator(nodeLeft.operator));

				// Determine if all comparison operators are the same
				let comparisonsHeterogeneous = false;
				for (let i = 0; i < comparisonOperands.length - 1; i++) {
					if (comparisonOperands[i].comparison != comparisonOperands[i+1].comparison) {
						comparisonsHeterogeneous = true;
						break;
					}
				}

				// Assemble final callee and argument list
				ret.arguments.push(nodeLeft); // first operand
				if (comparisonsHeterogeneous) {
					ret.callee.name = "compare";
					comparisonOperands.forEach(co => {
						ret.arguments.push({
							type: "Literal",
							value: co.comparison,
							raw: `"${co.comparison}"`,
						});
						ret.arguments.push(co.operand);
					});
				}
				else {
					comparisonOperands.forEach(co => {
						ret.arguments.push(co.operand);
					});
				}
			}
			else {
				// Flatten same operator calls
				do {
					ret.arguments.unshift(nodeLeft.right);
					nodeLeft = nodeLeft.left;
				} while (def.flatten !== false && _.getOperatorName(nodeLeft.operator) === name);

				ret.arguments.unshift(nodeLeft);
			}

			// Operator-specific transformations
			def.postFlattenTransformation?.(ret);

			return ret;
		},
		"UnaryExpression": node => {
			var name = _.getOperatorName(node.operator, true);

			if (name) {
				return {
					type: "CallExpression",
					arguments: [node.argument],
					callee: {type: "Identifier", name}
				};
			}
		},
		"CallExpression": node => {
			if (node.callee.type == "Identifier") {
				if (node.callee.name == "if") {
					node.callee.name = "iff";

					// Traverse data actions inside if() and rewrite them to their *if() counterpart
					var condition = node.arguments[0];

					for (let i=1; i<node.arguments.length; i++) {
						if (i == 2) {
							// Else, negate condition
							condition = _.parse("not()");
							condition.arguments.push(node.arguments[0]);
						}

						_.walk(node.arguments[i], n => {
							var name = n.callee.name;

							if (Mavo.Actions.Functions.hasOwnProperty(name) // is a data action
							    && !/if$/.test(name) // and not already the *if() version of itself
							) {
								n.callee.name += "if";

								// Add condition as first argument of *if() function
								n.arguments.unshift(condition);
							}
						}, {type: "CallExpression"});
					}
				}
				else if (node.callee.name == "delete") {
					node.callee.name = "clear";
				}
				else {
					var def = Mavo.Functions[node.callee.name];

					if (def && def.needsContext) {
						// Why not function.call(...)? Because it's a more drastic change.
						node.arguments.unshift({type: "Identifier", name: "$this"});
					}
				}
			}
		},
		"ThisExpression": node => {
			return {type: "Identifier", name: "$this"};
		}
	},

	closest (node, type) {
		let n = node;

		do {
			if (n.type === type) {
				return n;
			}
		} while (n = n.parent);

		return null;
	},

	serialize: (node, parent) => {
		if (typeof node === "string") {
			return node; // already serialized
		}

		if (parent) {
			node.parent = parent;
		}

		var ret = _.transformations[node.type]?.(node, parent);

		if (typeof ret == "object" && ret?.type) {
			node = ret;
		}
		else if (ret !== undefined) {
			return ret;
		}

		return _.serializers[node.type](node, parent);
	},

	rewrite: function(code, o) {
		try {
			let ast = _.parse(code);

			if (o) {
				o.ast = ast;
			}

			return _.serialize(ast);
		}
		catch (e) {
			// Parsing as MavoScript failed, falling back to plain JS
			return code;
		}
	},

	compile: function(code, o) {
		if (!/\S/.test(code)) {
			// If code contains only whitespace, including in particular if
			// code is just the empty string, treat it as an expression that
			// evaluates to an empty string. This is consistent with
			// interpreting bare words as their corresponding strings.
			return () => "";
		}

		code = _.rewrite(code, o);

		code = `with (Mavo.Data.stub)
	with (data || {}) {
		let $fn = Mavo.Script.$fn;
		return (${code});
	}`;

		if (o?.actions) {
			// Yes this is a horrible, horrible hack and Iâ€™m truly ashamed.
			// If you understand the reasons and can think of a better way, be my guest!
			code = `
Mavo.Actions._running = Mavo.Actions.running;
Mavo.Actions.running = true;
${code}
Mavo.Actions.running = Mavo.Actions._running;`;
		}

		return new Function("data", code);
	},

	parse: self.jsep,

	// scope() rewriting
	serializeScopeCall: (args) => {
		var withCode = `with (Mavo.Script.subScope(scope, $this) || {}) { return (${_.serialize(args[1])}); }`;
		return `(function() {
	var scope = ${_.serialize(args[0])};
	if (Array.isArray(scope)) {
		return scope.map(function(scope) {
			${withCode}
		});
	}

	${withCode}
})()`;
	},

	// This is used for scope() rewriting, to support $this passing through
	subScope: (proxy, $this) => {
		var unscopables = Object.keys($this).reduce((o, k) => {
			o[k] = true;
			return o;
		}, {$this: true});

		if (!proxy || typeof proxy !== "object") {
			return proxy;
		}

		return new Proxy(proxy, {
			get: (t, property, r) => {
				if (property === Symbol.unscopables) {
					return unscopables;
				}

				return Reflect.get(t, property, r);
			}
		});
	}
};

_.serializers.LogicalExpression = _.serializers.BinaryExpression;
_.transformations.LogicalExpression = _.transformations.BinaryExpression;

for (let name in _.operators) {
	let details = _.operators[name];

	if (details.scalar?.length < 2) {
		var ret = _.addUnaryOperator(name, details);
	}
	else {
		var ret = _.addBinaryOperator(name, details);
	}

	details.code = details.code || ret;

	if (ret && details.export !== false) {
		Mavo.Functions[name] = ret;
	}
}

// Takes a list of arguments that consist of interleaved operands and strings
// representing comparison operations, and returns the result of evaluating the
// chained comparison.
// e.g. compare(3, "lt", 4, "lt", 5) means 3 < 4 < 5, or (3 < 4) && (4 < 5)
Mavo.Functions.compare = function(...operands) {
	let result = true;

	for (let i = 2; i < operands.length; i += 2) {
		let a = operands[i - 2];
		let op = operands[i - 1];
		let b = operands[i];
		let term = _.binaryOperation(a, b, Mavo.Script.operators[op]);
		result = _.binaryOperation(result, term, Mavo.Script.operators["and"]);
	}

	return result;
};

})(Bliss, Mavo.value, Mavo.Functions.util);

(function($, $$) {

Mavo.attributes.push("mv-action");

var _ = Mavo.Actions = {
	listener: evt => {
		var tag = evt.type === "submit"? "form" : ":not(form)";
		var element = evt.target.closest(tag + "[mv-action]");

		if (!element) {
			return; // Not an action
		}

		var node = Mavo.Node.get(element);

		if (node?.editing) {
			// If this is a node, and being edited, we don't want to have the action interfering.
			return;
		}

		if (evt.type === "submit") {
			evt.preventDefault();
		}

		if (element) {
			_.run(element.getAttribute("mv-action"), element, evt);
		}
	},

	run: (code, element, evt) => {
		if (code) {
			var node = Mavo.Node.getClosest(element);

			if (node) {
				var expression = new Mavo.Expression(code, {actions: true});

				var previousEvt = Mavo.Functions.$evt;
				Mavo.Functions.$evt = evt;

				var ret = expression.eval(node.getLiveData());

				Mavo.Functions.$evt = previousEvt;

				return ret;
			}
		}
	},

	getNodes: ref => {
		var node = _.getNode(ref);

		if (node) {
			return [node];
		}

		return Mavo.toArray(ref).map(n => _.getNode(n)).filter(n => n !== undefined);
	},

	getNode: node => {
		if (node instanceof Mavo.Node) {
			return node;
		}
		else if (node?.[Mavo.toNode]) {
			return node[Mavo.toNode];
		}
	},

	getCollection: ref => {
		var collection = _.getNode(ref);

		if (collection instanceof Mavo.Collection) {
			return collection;
		}

		// ref is not a collection. Either it's an item or we don't have a collection
		return collection?.collection ?? null;
	},

	// Function to run instead of actions if actions are called outside mv-action
	nope: () => {
		var actions = Object.keys(_.Functions).map(name => `${name}()`);
		Mavo.warn(`Mavo actions (${actions}) can only be used in the mv-action attribute.`);
	},

	Functions: {
		/**
		 * @param data (Optional) data of new item(s)
		 * @param ref Collection to add to
		 * @param index {Number} index of new item(s).
		 * @returns Newly added item(s)
		 */
		add: function(data, ref, index) {
			if (arguments.length < 3) {
				if (arguments.length <= 1) {
					// add(ref) signature used
					[data, ref] = [undefined, data];
				}
				else if (arguments.length === 2) {
					// Is it (data, ref) or (ref, index)?
					// ref might be a number, if collection of numbers!
					var collection = _.getCollection(ref);

					if (!collection) {
						// No collection from ref, must be (ref, index)
						collection = _.getCollection(data);

						if (collection) {
							// Yup, it's (ref, index)
							[data, ref, index] = [undefined, data, ref];
						}
					}
				}
			}

			if (!ref) {
				return;
			}

			collection = collection || _.getCollection(ref);

			if (!collection) {
				Mavo.warn("No collection or collection item provided to add().", {once: false});
				return data;
			}

			if (index === undefined) {
				// If there is no index and item provided instead of collection,
				// get index from collection item
				var node = _.getNode(ref);

				if (node !== collection) {
					index = node.index;
				}
			}

			return (Array.isArray(data)? data : [data]).map(datum => {
				var item = collection.add(undefined, index);

				if (datum !== undefined) {
					item.render(datum);
				}

				if (collection.editing) {
					collection.editItem(item);
				}

				return item.getLiveData();
			});
		},

		/**
		 * @param from {Mavo.Node|Array<Mavo.Node>} one or more items to move
		 * @param to where to move to, item or collection. Optional
		 * @param index {Number} index. Optional
		 * @returns Moved item(s)
		 */
		move: (from, to, index) => {
			if (!from || to === undefined) {
				return;
			}

			if ($.type(to) == "number" && !(toNode?.collection)) {
				// If to is a number and not a collection item, it's an index
				[index, to] = [to];
			}

			var toNode = _.getNode(to);
			var fromNodes = Mavo.toArray(from).map(_.getNode).filter(n => n?.closestCollection);
			var collection = (toNode || fromNodes[0]).closestCollection;

			if (!fromNodes.length) {
				if (collection) {
					Mavo.warn("First parameter of move() was not a collection or collection item, using add() instead.", {once: false});
					return _.Functions.add(from, collection, index);
				}
				else {
					Mavo.warn("You need to provide at least one collection or collection item for move() to have something to do.", {once: false});
					return from;
				}
			}

			var ret = _.Functions.add(from, collection, index);
			Mavo.Collection.delete(fromNodes, {silent: true});
			return ret;
		},

		/**
		 * @param ref Items to delete
		 */
		clear: (...ref) => {
			if (!ref.length || !ref[0]) {
				return;
			}

			var nodes = _.getNodes(ref.flat());
			var itemsToDelete = [];

			nodes.forEach(node => {
				if (!node) {
					return;
				}

				if (node instanceof Mavo.Collection) {
					// Clear collection
					itemsToDelete.push(...node.children);
				}
				else if (node.collection) {
					// Collection item, delete
					itemsToDelete.push(node);
				}
				else {
					// Ordinary node, just clear its data
					node.walk(n => {
						if (n instanceof Mavo.Primitive) {
							n.value = null;
						}
						else if (n !== node) {
							_.clear(n);
						}
					});
				}
			});

			Mavo.Collection.delete(itemsToDelete);

			return nodes.map(n => n.getLiveData());
		},

		clearif: (condition, ...targets) => {
			targets = targets.map(t => Mavo.Functions.iff(condition, t));
			return _.Functions.clear(...targets);
		},

		/**
		 * Set node(s) to value(s)
		 * If ref is a single node or a collection, render values on it
		 * If ref is multiple nodes, set it to corresponding value
		 * If ref is multiple nodes and values is not an array, set all nodes to values
		 */
		set: (ref, values) => {
			if (!ref) {
				return;
			}

			var node = _.getNode(ref);

			if (node) {
				// Single node, render values on it
				node.render(values);
			}
			else {
				var wasArray = Array.isArray(ref);
				var nodes = _.getNodes(ref);

				if (!nodes.length) {
					Mavo.warn(`The first parameter of set() needs to be one or more existing properties, ${Mavo.safeToJSON(ref)} is not.`);
				}
				else {
					Mavo.Script.binaryOperation(wasArray? nodes : nodes[0], values, {
						scalar: (node, value) => {
							return node ? node.render(value) : null;
						}
					});
				}
			}

			return values;
		}
	}
};

// Create *if() versions of data actions
for (let name in _.Functions) {
	let nameif = name + "if";

	if (!(nameif in _.Functions)) {
		_.Functions[nameif] = (condition, target, ...rest) => {
			target = Mavo.Functions.iff(condition, target);
			return Mavo.value(condition)? _.Functions[name](target, ...rest) : null;
		};
	}
}

_.Functions.deleteif = _.Functions.clearif;

})(Bliss, Bliss.$);

(function($, $$) {

var _ = Mavo.Data = $.Class(class Data {
	constructor(node, data) {
		this.node = node;

		if (data !== undefined) {
			this.data = data;
		}
	}

	get parent() {
		var parent = this.node.parent;
		return parent?.liveData ?? null;
	}

	get collection() {
		return this.node.collection;
	}

	get key() {
		return this._key = this.collection? this.node.index : this.node.property;
	}

	proxify() {
		return _.proxify(this.data);
	}

	update() {
		if (this.node instanceof Mavo.Collection || this.node instanceof Mavo.ImplicitCollection) {
			// TODO eventually we should do more granular updates than this O(N) stuff
			this.data.length = 0;

			for (var i=0; i<this.node.children.length; i++) {
				this.data[i] = this.node.children[i].liveData.data;
			}

			if (this.node instanceof Mavo.ImplicitCollection) {
				// Implicit collections drop nulls
				Mavo.filter(this.data, data => Mavo.value(data) !== null);

				// Implicit collections can alternate between arrays and singletons
				// depending on which items are null
				this.updateParent();
			}
		}
		else if (this.node instanceof Mavo.Primitive) {
			var value = this.node.value;

			if (this.node.isDataNull({live: true})) {
				value = null;
			}

			this.data = Mavo.objectify(value);

			if (Mavo.isPlainObject(value) || Array.isArray(value)) {
				// Object rendered on a primitive, we should traverse it and store its properties
				// Why check prototype instead of just type == "object"? Because instances of ES6 classes also return "object"
				_.computeRoutes(this.data);
			}
			else {
				_.computeMetadata(this.data, this.key, this.parent);
			}

			this.updateParent();
		}
	}

	updateParent() {
		if (!this.parent) {
			return;
		}

		if (this.node instanceof Mavo.ImplicitCollection) {
			// Is implicit collection
			// See https://github.com/LeaVerou/mavo/issues/50#issuecomment-266079652
			var data = this.data.length === 1? this.data[0] : this.data;
			this.parent.set(this.node.property, data, true);
		}
		else if (this.collection instanceof Mavo.ImplicitCollection) {
			// Is implicit collection *Item*
			this.parent.update();
		}
		else {
			var key = this.key, isDeleted = false;

			if (this.collection instanceof Mavo.Collection) {
				// Is collection item, check if deleted
				isDeleted = this.collection.children[this.node.index] !== this.node;
			}

			if (key !== undefined && !isDeleted) {
				this.parent.set(key, this.data, true);
			}
		}
	}

	set(property, value, shallow) {
		this.data[property] = value;
		_["computeRoute" + (shallow? "" : "s")](value, property, this.data);
	}

	updateKey() {
		var oldKey = this._key;

		if (this.parent[oldKey] === this.data) {
			delete this.parent[oldKey];
		}

		this.updateParent();
	}

	resolve(property) {
		return _.resolve(property, this.data);
	}
}, {
	live: {
		data: function(data) {
			if (data !== this._data) {
				this.isArray = Array.isArray(data);

				this._data = data;

				data[Mavo.toNode] = this.node;
				data[Mavo.parent] = this.parent?.data;
				data[Mavo.mavo] = this.node.mavo;

				this.proxy = this.proxify();

				this.updateParent();

				return this._data;
			}
		}
	},

	static: {
		// The context for expression evaluation
		stub: self.Proxy? new Proxy({[Symbol.unscopables]: {data: true, undefined: true}}, {
			get: (data, property) => {
				var ret = Reflect.get(data, property);

				if (ret !== undefined || typeof property !== "string") {
					return ret;
				}

				var propertyL = property.toLowerCase();

				if (propertyL[0] === "$" && propertyL in Mavo.Functions) {
					// Non-data $specialProperty
					return Mavo.Functions[propertyL];
				}
				else {
					var propertyU = property.toUpperCase();
					if (propertyU in Math) {
						// Math constants
						return Math[propertyU];
					}
				}

				// Still not found? Maybe it's a global
				if (typeof window !== "undefined" && window.hasOwnProperty(property)) {
					// hasOwnProperty to avoid elements with ids clobbering globals
					return window[property];
				}

				// Still not found? Maybe it's a special property used without a $ (see #343)
				if (property[0] !== "$") {
					var $property = "$" + property.toLowerCase();

					if ($property in Mavo.Functions) {
						return Mavo.Functions[$property];
					}
				}

				// Prevent undefined at all costs
				return property;
			},
			has: (data, property) => {
				return Reflect.has(data, property) || typeof property === "string";
			}
		}) : Mavo.Functions,

		isItem: function(data) {
			return Array.isArray(data?.[Mavo.parent]);
		},

		closest(obj, test) {
			var path = [];
			do {
				if (test(obj)) {
					return {value: obj, path};
				}

				path.push(obj[Mavo.property]);
			} while (obj = obj[Mavo.parent]);

			return {value: null, path};
		},

		root(obj) {
			return _.closest(obj, o => !o[Mavo.parent]);
		},

		closestItem(obj) {
			return _.closest(obj, _.isItem);
		},

		closestArray(obj) {
			return _.closest(obj, Array.isArray);
		},

		getProperty: function(data) {
			var ret = _.isItem(data)? data[Mavo.parent] : data;

			return ret[Mavo.property];
		},

		find: function(property, data, o = {}) {
			if (!data || o.exclude === data) {
				return;
			}

			if (Mavo.in(property, data) && o.exclude !== data[property]) {
				return data[property];
			}

			if (!data[Mavo.route] || !Mavo.in(property, data[Mavo.route])) {
				if (data[Mavo.property] === property) {
					return data;
				}

				if (_.isItem(data) && _.getProperty(data) === property) {
					// Inside collection items we want their property name
					// to return the current item, not the entire collection
					return data;
				}

				if (Array.isArray(data)) {
					// Perhaps it's an array of nodes, such as the one created with deep references?
					var ret = data.map(a => _.find(property, a))
					              .filter(x => x !== undefined);

					if (ret.length) {
						return ret.flat();
					}
				}

				return;
			}

			var results = [], returnArray = Array.isArray(data), ret;

			results[Mavo.route] = {};
			results[Mavo.mavo] = data[Mavo.mavo];

			var findDown = prop => {
				var ret = _.find(property, data[prop], o);

				if (ret !== undefined) {
					// FIXME How do we set a sensible Mavo.route when the returned array is empty?
					// E.g. because we were pointing to inner elements of a collection that currently has no items.
					if (Mavo.in(Mavo.route, ret)) {
						for (var p in ret[Mavo.route]) {
							results[Mavo.route][p] = true;
						}
					}

					if (Array.isArray(ret)) {
						results.push(...ret);
						returnArray = true;
					}
					else {
						results.push(ret);
					}
				}
			};

			if (Array.isArray(data) || data[Mavo.route][property] === true) {
				for (var prop in data) {
					findDown(prop);
				}
			}
			else {
				data[Mavo.route][property].forEach(findDown);
			}

			return returnArray || results.length > 1? results : results[0];
		},

		// First look in descendants, then ancestors and their descendants
		// one level up at a time (excluding the subtree we've already explored)
		findUp: function(property, data) {
			var parent = data;
			var child;

			do {
				var ret = _.find(property, parent, {exclude: child});

				if (ret !== undefined) {
					return ret;
				}

				if (_.getProperty(parent) === property) {
					return parent;
				}

				child = parent;
				parent = parent[Mavo.parent];
			} while (parent);
		},

		resolve: function(property, data) {
			if (property === Mavo.isProxy) {
				return true;
			}

			if (typeof property === "symbol") {
				// We can't do much for symbols
				return data[property];
			}

			var ret;
			var propertyIsNumeric = !isNaN(property);

			if (property in data) {
				ret = data[property];
			}
			else if (!propertyIsNumeric) {
				// Property does not exist on data, if non-numeric, look for it elsewhere
				if (property in _.special) { // $special properties
					ret = _.special[property](data);
				}
				else if (data[Mavo.mavo]) {
					var all = data[Mavo.mavo].root.liveData.data[Mavo.route];

					if (Mavo.in(property, all)) {
						ret = _.findUp(property, data);
					}
				}
				else if (Mavo.in(Mavo.route, data) && Mavo.in(property, data[Mavo.route])) {
					ret = _.find(property, data);
				}
			}

			if (!propertyIsNumeric) {
				var propertyL = property.toLowerCase();
			}

			if (ret !== undefined) {
				// Should we proxify value before returning it? Is it data?
				var proxify = ret !== null && typeof ret === "object" // Can be a proxy
				              && (Mavo.route in ret || Mavo.toNode in ret); // Either has a route or comes from a node

				return !proxify? ret : _.proxify(ret);
			}

			if (!propertyIsNumeric) {
				// Does it reference another Mavo?
				if (isNaN(property) && Mavo.all?.[property]?.root) {
					return Mavo.all[property].root.getLiveData();
				}

				// Still not found? Maybe it's a special property used without a $ (see #343)
				if (property[0] !== "$") {
					var $property = "$" + propertyL;

					if ($property in _.special) {
						return _.resolve($property, data);
					}
				}
			}
		},

		has (property, data) {
			// We don't care about priority here, just whether they exist
			// so we'll make the fastest searches first.
			if (property === Mavo.isProxy) {
				return true;
			}

			if (typeof property !== "string") {
				return Reflect.has(data, property);
			}

			var objects = [data, Mavo.all, _.special];

			if (objects.some(obj => property in obj)) {
				return true;
			}

			if (typeof property === "string") {
				var propertyL = property.toLowerCase();

				if (propertyL !== property && objects.some(obj => propertyL in obj)) {
					return true;
				};

				if (propertyL[0] !== "$" && "$" + propertyL in _.special) {
					return true;
				}
			}

			// Slowest search last: Is the property present anywhere in the data?
			if (data[Mavo.mavo]) {
				return Mavo.in(property, data[Mavo.mavo].root.liveData.data[Mavo.route]);
			}
		},

		proxify(data) {
			if (!data || typeof data !== "object" || !self.Proxy || data[Mavo.isProxy]) {
				// Data is a primitive, proxies are not supported, or is already a proxy
				return data;
			}

			return new Proxy(data, {
				get: (data, property, proxy) => {
					return _.resolve(property, data);
				},

				has: (data, property) => {
					return _.has(property, data);
				},

				set: function(data, property = "", value) {
					if (typeof property !== "symbol") {
						Mavo.warn(`You cannot set data via expressions. Attempt to set ${property.toString()} to ${value} ignored.`);
						return value;
					}

					return Reflect.set(data, property, value);
				}
			});
		},

		computeMetadata(object, property, parent) {
			if (object && typeof object === "object") { // not primitive
				if (property !== undefined) {
					object[Mavo.property] = property;
				}

				if (parent && !object[Mavo.parent]) {
					object[Mavo.parent] = parent;
				}
			}
		},

		computeRoute(object, property, parent) {
			if (typeof object === "function") {
				return;
			}

			_.computeMetadata(object, property, parent);

			if (Mavo.isPlainObject(object) === Object.prototype || Array.isArray(object)) {
				if (!object[Mavo.route]) {
					object[Mavo.route] = {};
				}
			}

			if ($.type(property) !== "number") {
				var child = object;

				while (parent) {
					if (!parent[Mavo.route]) {
						parent[Mavo.route] = {};
					}

					// parent[up] = child
					var up = child?.[Mavo.property];

					if (up && parent[Mavo.route][property] !== true) {
						if (!parent[Mavo.route][property]) {
							parent[Mavo.route][property] = new Set();
						}

						if (parent[Mavo.route][property].has(up)) {
							// We've already computed routes on this subtree
							break;
						}

						parent[Mavo.route][property].add(up);
					}
					else {
						parent[Mavo.route][property] = true;
					}

					child = parent;
					parent = parent[Mavo.parent];
				}
			}
		},

		computeRoutes(object, property, parent) {
			_.traverse(_.computeRoute, object, property, parent);
		},

		// Recursively traverse a JSON structure
		// Warning: No cycle detection. Will loop infinitely if there are cycles
		traverseDown(callback, object, property, parent) {
			if (Array.isArray(object)) {
				object.forEach((item, i) => _.traverse(callback, item, i, object));
			}
			else if ($.type(object) === "object") {
				for (var prop in object) {
					_.traverse(callback, object[prop], prop, object);
				}
			}
		},

		traverse(callback, object, property, parent) {
			callback(object, property, parent);
			_.traverseDown(callback, object, property, parent);
		},

		special: {
			$index: function(obj) {
				var closestItem = _.closestItem(obj).value;

				if (!closestItem) {
					return -1;
				}

				var property = closestItem[Mavo.property];

				if (isNaN(property)) {
					// Is an array item but its property is not a number! Search the array.
					// This happens with Implicit Collections of only 1 item.
					return closestItem[Mavo.parent].indexOf(closestItem);
				}

				return property;
			},

			$item: function(obj) {
				return _.closestItem(obj).value;
			},

			$all: function(obj) {
				var arr = _.closestArray(obj);
				var path = arr.path.reverse().slice(1); // Drop index
				var ret = arr.value.map(a => $.value(a, ...path));

				if (ret.length > 0 && ret[0][Mavo.route]) {
					ret[Mavo.route] = $.each(ret[0][Mavo.route], (p, v) => true);
					ret[Mavo.mavo] = ret[0][Mavo.mavo];
				}

				return ret;
			},

			$next: function(obj) {
				var arr = _.closestArray(obj);
				var path = arr.path.reverse();
				var index = arr.path[0];
				path = path.slice(1);
				var nextClosestItem = arr.value?.[index + 1];

				return nextClosestItem? $.value(nextClosestItem, ...path) : null;
			},

			$previous: function(obj) {
				var arr = _.closestArray(obj);
				var path = arr.path.reverse();
				var index = arr.path[0];
				path = path.slice(1);
				var prevClosestItem = arr.value?.[index - 1];

				return prevClosestItem? $.value(prevClosestItem, ...path) : null;
			},

			$this: function(obj) {
				return obj;
			}
		}
	}
});

})(Bliss, Bliss.$);

(function($, $$) {

var _ = Mavo.Backend.register($.Class({
	extends: Mavo.Backend,
	id: "Dropbox",
	constructor: function() {
		this.permissions.on(["login", "read"]);

		this.key = this.mavo.element.getAttribute("mv-dropbox-key") || "2mx6061p054bpbp";

		this.login(true);
	},

	update: function(url, o) {
		this.super.update.call(this, url, o);

		this.url = _.fixShareURL(this.url);
	},

	async upload (file, path) {
		path = this.path.replace(/[^/]+$/, "") + path;

		await this.put(file, path);
		return this.getURL(path);
	},

	async getURL (path) {
		let shareInfo = await this.request("sharing/create_shared_link_with_settings", {path}, "POST");
		return _.fixShareURL(shareInfo.url);
	},

	/**
	 * Saves a file to the backend.
	 * @param {Object} file - An object with name & data keys
	 * @return {Promise} A promise that resolves when the file is saved.
	 */
	put (serialized, path = this.path, o = {}) {
		return this.request("https://content.dropboxapi.com/2/files/upload", serialized, "POST", {
			headers: {
				"Dropbox-API-Arg": JSON.stringify({
					path,
					mode: "overwrite"
				}),
				"Content-Type": "application/octet-stream"
			}
		});
	},

	oAuthParams: () => `&redirect_uri=${encodeURIComponent("https://auth.mavo.io")}&response_type=code`,

	async getUser () {
		if (this.user) {
			return this.user;
		}

		let info = await this.request("users/get_current_account", "null", "POST");

		this.user = {
			username: info.email,
			name: info.name.display_name,
			avatar: info.profile_photo_url,
			info
		};

		$.fire(this.mavo.element, "mv-login", { backend: this });
	},

	async login (passive) {
		await this.oAuthenticate(passive);
		await this.getUser();

		if (this.user) {
			this.permissions.logout = true;

			// Check if can actually edit the file
			let info = await this.request("sharing/get_shared_link_metadata", {
				"url": this.source
			}, "POST");

			this.path = info.path_lower;
			this.permissions.on(["edit", "save"]);
		}
	},

	logout: function() {
		return this.oAuthLogout();
	},

	static: {
		apiDomain: "https://api.dropboxapi.com/2/",
		oAuth: "https://www.dropbox.com/oauth2/authorize",

		test: function(url) {
			url = new URL(url, Mavo.base);
			return /dropbox.com/.test(url.host);
		},

		// Transform the dropbox shared URL into something raw and CORS-enabled
		fixShareURL: url => {
			url = new URL(url, Mavo.base);
			url.hostname = "dl.dropboxusercontent.com";
			url.search = url.search.replace(/\bdl=0|^$/, "raw=1");
			return url;
		}
	}
}));

})(Bliss, Bliss.$);

(function($, $$) {

var _ = Mavo.Backend.register($.Class({
	extends: Mavo.Backend,
	id: "Github",
	constructor: function() {
		this.permissions.on(["login", "read"]);

		this.key = this.mavo.element.getAttribute("mv-github-key") || "7e08e016048000bc594e";

		// Extract info for username, repo, branch, filepath from URL
		var extension = this.format.constructor.extensions[0] || ".json";

		this.defaults = {
			repo: "mv-data",
			filename: `${this.mavo.id}${extension}`
		};

		this.info = _.parseURL(this.source, this.defaults);
		$.extend(this, this.info);

		this.login(true);
	},

	update: function(url, o) {
		this.super.update.call(this, url, o);

		this.info = _.parseURL(this.source, this.defaults);
		$.extend(this, this.info);
	},

	get: function(url) {
		if (this.isAuthenticated() || !this.path || url) {
			// Authenticated or raw API call
			var info = url? _.parseURL(url) : this.info;

			if (info.apiData) {
				// GraphQL
				return this.request(info.apiCall, info.apiData, "POST")
					.then(response => {
						if (response.errors?.length) {
							return Promise.reject(response.errors.map(x => x.message).join("\n"));
						}

						return response.data;
					});
			}

			return this.request(info.apiCall, {ref:this.branch}, "GET", {
					headers: {
						"Accept": "application/vnd.github.squirrel-girl-preview"
					}
				}).then(response => Promise.resolve(info.repo? _.atob(response.content) : response));
		}
		else {
			// Unauthenticated, use simple GET request to avoid rate limit
			url = new URL(`https://raw.githubusercontent.com/${this.username}/${this.repo}/${this.branch || "master"}/${this.path}`);
			url.searchParams.set("timestamp", Date.now()); // ensure fresh copy

			return $.fetch(url.href).then(xhr => Promise.resolve(xhr.responseText), () => Promise.resolve(null));
		}
	},

	upload: function(file, path = this.path) {
		return Mavo.readFile(file).then(dataURL => {
				var base64 = dataURL.slice(5); // remove data:
				var media = base64.match(/^\w+\/[\w+]+/)[0];
				media = media.replace("+", "\\+"); // Fix for #608
				base64 = base64.replace(RegExp(`^${media}(;base64)?,`), "");
				path = this.path.replace(/[^/]+$/, "") + path; // make upload path relative to existing path

				return this.put(base64, path, {isEncoded: true});
			})
			.then(fileInfo => this.getURL(path, fileInfo.commit.sha));
	},

	/**
	 * Saves a file to the backend.
	 * @param {String} serialized - Serialized data
	 * @param {String} path - Optional file path
	 * @return {Promise} A promise that resolves when the file is saved.
	 */
	put: function(serialized, path = this.path, o = {}) {
		if (!path) {
			// Raw API calls are read-only for now
			return;
		}

		var repoCall = `repos/${this.username}/${this.repo}`;
		var fileCall = `${repoCall}/contents/${path}`;
		var commitPrefix = this.mavo.element.getAttribute("mv-github-commit-prefix") || "";

		// Create repo if it doesnâ€™t exist
		var repoInfo = this.repoInfo?
		               Promise.resolve(this.repoInfo)
		             : this.request("user/repos", {name: this.repo}, "POST").then(repoInfo => this.repoInfo = repoInfo);

		serialized = o.isEncoded? serialized : _.btoa(serialized);

		return repoInfo.then(repoInfo => {
				if (!this.canPush()) {
					// Does not have permission to commit, create a fork
					return this.request(`${repoCall}/forks`, {name: this.repo}, "POST")
						.then(forkInfo => {
							fileCall = `repos/${forkInfo.full_name}/contents/${path}`;
							return this.forkInfo = forkInfo;
						})
						.then(forkInfo => {
							// Ensure that fork is created (they take a while)
							var timeout;
							var test = (resolve, reject) => {
								clearTimeout(timeout);
								this.request(`repos/${forkInfo.full_name}/commits`, {until: "1970-01-01T00:00:00Z"}, "HEAD")
									.then(x => {
										resolve(forkInfo);
									})
									.catch(x => {
										// Try again after 1 second
										timeout = setTimeout(test, 1000);
									});
							};

							return new Promise(test);
						});
				}

				return repoInfo;
			})
			.then(repoInfo => {
				return this.request(fileCall, {
					ref: this.branch
				}).then(fileInfo => this.request(fileCall, {
					message: commitPrefix + this.mavo._("gh-updated-file", {name: fileInfo.name || "file"}),
					content: serialized,
					branch: this.branch,
					sha: fileInfo.sha
				}, "PUT"), xhr => {
					if (xhr.status == 404) {
						// File does not exist, create it
						return this.request(fileCall, {
							message: commitPrefix + "Created file",
							content: serialized,
							branch: this.branch
						}, "PUT");
					}

					return xhr;
				});
			})
			.then(fileInfo => {
				const env = {context: this, fileInfo};

				Mavo.hooks.run("gh-after-commit", env);

				return env.fileInfo;
			});
	},

	login: function(passive) {
		return this.oAuthenticate(passive)
			.then(() => this.getUser())
			.catch(xhr => {
				if (xhr.status == 401) {
					// Unauthorized. Access token we have is invalid, discard it
					this.logout();
				}
			})
			.then(u => {
				if (this.user) {

					this.permissions.on("logout");

					if (this.info.path) {
						this.permissions.on(["edit", "save"]);
					}

					if (this.repo) {
						return this.request(`repos/${this.username}/${this.repo}`)
						.then(repoInfo => {
							if (this.branch === undefined) {
								this.branch = repoInfo.default_branch;
							}

							this.repoInfo = repoInfo;

							if (!this.mavo.source) { // if url doesn't have source, check for forks
								if (!this.canPush()) { // Check if current user has a fork of this repo, and display dialog to switch
									if (this.user.info.public_repos < repoInfo.forks) { // graphql search of current user's forks
										var query = `query {
													  viewer {
													    name
													      repositories(last: 100, isFork: true) {
													      nodes {
													        url
													        parent {
													          nameWithOwner
													        }
													      }
													    }
													  }
													}`;
										return this.request("https://api.github.com/graphql", {query: query}, "POST")
										.then(data => {
											var repos = data.data.viewer.repositories.nodes;

											for (var i in repos) {
												if (repos[i].parent.nameWithOwner === repoInfo.full_name) {
													this.switchToMyForkDialog(repos[i].url);

													return repoInfo;
												}
											}

											return repoInfo;
										});
									}
									else { // search forks of this repo
										return this.request(repoInfo.forks_url)
										.then(forks => {
											for (var i in forks) {
												if (forks[i].owner.login === this.user.username) {
													this.switchToMyForkDialog(forks[i].html_url);

													return repoInfo;
												}
											}
											return repoInfo;
										});
									}
								}
							}
							return repoInfo;
						}).then(repoInfo => {
							const env = { context: this, repoInfo };
								
							Mavo.hooks.run("gh-after-login", env);
							
							return env.repoInfo
						});
					}
				}
			});
	},

	canPush: function() {
		if (this.repoInfo) {
			return this.repoInfo.permissions.push;
		}

		// Repo does not exist so we can't check permissions
		// Just check if authenticated user is the same as our URL username
		return this.user?.username?.toLowerCase() == this.username.toLowerCase();
	},

	oAuthParams: () => "&scope=repo",

	logout: function() {
		return this.oAuthLogout().then(() => {
			this.user = null;
		});
	},

	getUser: function() {
		if (this.user) {
			return Promise.resolve(this.user);
		}

		return this.request("user").then(info => {
			this.user = {
				username: info.login,
				name: info.name || info.login,
				avatar: info.avatar_url,
				url: "https://github.com/" + info.login,
				info
			};

			$.fire(this.mavo.element, "mv-login", { backend: this });
		});
	},

	getURL: function(path = this.path, sha) {
		var repoInfo = this.forkInfo || this.repoInfo;
		var repo = repoInfo.full_name;
		path = path.replace(/ /g, "%20");

		repoInfo.pagesInfo = repoInfo.pagesInfo || this.request(`repos/${repo}/pages`, {}, "GET", {
			headers: {
				"Accept": "application/vnd.github.mister-fantastic-preview+json"
			}
		});

		return repoInfo.pagesInfo.then(pagesInfo => pagesInfo.html_url + path)
			.catch(xhr => {
				// No Github Pages, return jsdelivr URLs
				return `https://cdn.jsdelivr.net/gh/${repo}@${sha || this.branch || "latest"}/${path}`;
			});
	},

	switchToMyForkDialog: function(forkURL) {
			let params = (new URL(location)).searchParams;
			params.append("storage", forkURL + "/" + this.path);

			this.notice = this.mavo.message(`
			${this.mavo._("gh-login-fork-options")}
			<form onsubmit="return false">
				<a href="${location.pathname}?${params}"><button>${this.mavo._("gh-use-my-fork")}</button></a>
			</form>`, {
				classes: "mv-inline",
				dismiss: ["button", "submit"]
			});

			this.notice.closed.then(form => {
				if (!form) {
					return;
				}

				history.pushState({}, "", `${location.pathname}?${params}`);
				location.replace(`${location.pathname}?${params}`);

			});
			return;
	},

	static: {
		apiDomain: "https://api.github.com/",
		oAuth: "https://github.com/login/oauth/authorize",

		test: function(url) {
			url = new URL(url, Mavo.base);
			return /^((api\.)?github\.com|raw\.githubusercontent\.com)/.test(url.host);
		},

		/**
		 * Parse Github URLs, return username, repo, branch, path
		 */
		parseURL: function(source, defaults = {}) {
			var ret = {};
			var url = new URL(source, Mavo.base);
			var path = url.pathname.slice(1).split("/");

			ret.username = path.shift();
			ret.repo = path.shift() || defaults.repo;

			if (/raw.githubusercontent.com$/.test(url.host)) {
				ret.branch = path.shift();
			}
			else if (/api.github.com$/.test(url.host)) {
				// Raw API call
				var apiCall = url.pathname.slice(1) + url.search;
				var data = Mavo.Functions.from(source, "#"); // url.* drops line breaks

				return {
					apiCall,
					apiData: apiCall == "graphql"? {query: data} : data
				};
			}
			else if (path[0] == "blob") {
				path.shift();
				ret.branch = path.shift();
			}

			var lastSegment = path[path.length - 1];

			if (/\.\w+$/.test(lastSegment)) {
				ret.filename = lastSegment;
				path.splice(path.length - 1, 1);
			}
			else {
				ret.filename = defaults.filename;
			}

			ret.filepath = path.join("/") || defaults.filepath || "";
			ret.path = (ret.filepath? ret.filepath + "/" : "") + ret.filename;

			ret.apiCall = `repos/${ret.username}/${ret.repo}/contents/${ret.path}`;

			return ret;
		},

		// Fix atob() and btoa() so they can handle Unicode
		btoa: str => btoa(unescape(encodeURIComponent(str))),
		atob: str => decodeURIComponent(escape(window.atob(str)))
	}
}));

})(Bliss, Bliss.$);

//# sourceMappingURL=maps/mavo-nodeps.js.map

//# sourceMappingURL=maps/mavo.js.map


/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

 /*
 * # Fomantic UI - 2.8.6
 * https://github.com/fomantic/Fomantic-UI
 * http://fomantic-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(p,h,v,b){p.isFunction=p.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},p.site=p.fn.site=function(e){var s,l,i=(new Date).getTime(),o=[],t=e,n="string"==typeof t,c=[].slice.call(arguments,1),u=p.isPlainObject(e)?p.extend(!0,{},p.site.settings,e):p.extend({},p.site.settings),a=u.namespace,d=u.error,r="module-"+a,f=p(v),m=this,g=f.data(r);return s={initialize:function(){s.instantiate()},instantiate:function(){s.verbose("Storing instance of site",s),g=s,f.data(r,s)},normalize:function(){s.fix.console(),s.fix.requestAnimationFrame()},fix:{console:function(){s.debug("Normalizing window.console"),console!==b&&console.log!==b||(s.verbose("Console not available, normalizing events"),s.disable.console()),void 0!==console.group&&void 0!==console.groupEnd&&void 0!==console.groupCollapsed||(s.verbose("Console group not available, normalizing events"),h.console.group=function(){},h.console.groupEnd=function(){},h.console.groupCollapsed=function(){}),void 0===console.markTimeline&&(s.verbose("Mark timeline not available, normalizing events"),h.console.markTimeline=function(){})},consoleClear:function(){s.debug("Disabling programmatic console clearing"),h.console.clear=function(){}},requestAnimationFrame:function(){s.debug("Normalizing requestAnimationFrame"),h.requestAnimationFrame===b&&(s.debug("RequestAnimationFrame not available, normalizing event"),h.requestAnimationFrame=h.requestAnimationFrame||h.mozRequestAnimationFrame||h.webkitRequestAnimationFrame||h.msRequestAnimationFrame||function(e){setTimeout(e,0)})}},moduleExists:function(e){return p.fn[e]!==b&&p.fn[e].settings!==b},enabled:{modules:function(e){var n=[];return e=e||u.modules,p.each(e,function(e,t){s.moduleExists(t)&&n.push(t)}),n}},disabled:{modules:function(e){var n=[];return e=e||u.modules,p.each(e,function(e,t){s.moduleExists(t)||n.push(t)}),n}},change:{setting:function(o,a,e,r){e="string"==typeof e?"all"===e?u.modules:[e]:e||u.modules,r=r===b||r,p.each(e,function(e,t){var n,i=!s.moduleExists(t)||(p.fn[t].settings.namespace||!1);s.moduleExists(t)&&(s.verbose("Changing default setting",o,a,t),p.fn[t].settings[o]=a,r&&i&&0<(n=p(":data(module-"+i+")")).length&&(s.verbose("Modifying existing settings",n),n[t]("setting",o,a)))})},settings:function(i,e,o){e="string"==typeof e?[e]:e||u.modules,o=o===b||o,p.each(e,function(e,t){var n;s.moduleExists(t)&&(s.verbose("Changing default setting",i,t),p.extend(!0,p.fn[t].settings,i),o&&a&&0<(n=p(":data(module-"+a+")")).length&&(s.verbose("Modifying existing settings",n),n[t]("setting",i)))})}},enable:{console:function(){s.console(!0)},debug:function(e,t){e=e||u.modules,s.debug("Enabling debug for modules",e),s.change.setting("debug",!0,e,t)},verbose:function(e,t){e=e||u.modules,s.debug("Enabling verbose debug for modules",e),s.change.setting("verbose",!0,e,t)}},disable:{console:function(){s.console(!1)},debug:function(e,t){e=e||u.modules,s.debug("Disabling debug for modules",e),s.change.setting("debug",!1,e,t)},verbose:function(e,t){e=e||u.modules,s.debug("Disabling verbose debug for modules",e),s.change.setting("verbose",!1,e,t)}},console:function(e){if(e){if(g.cache.console===b)return void s.error(d.console);s.debug("Restoring console function"),h.console=g.cache.console}else s.debug("Disabling console function"),g.cache.console=h.console,h.console={clear:function(){},error:function(){},group:function(){},groupCollapsed:function(){},groupEnd:function(){},info:function(){},log:function(){},markTimeline:function(){},warn:function(){}}},destroy:function(){s.verbose("Destroying previous site for",f),f.removeData(r)},cache:{},setting:function(e,t){if(p.isPlainObject(e))p.extend(!0,u,e);else{if(t===b)return u[e];u[e]=t}},internal:function(e,t){if(p.isPlainObject(e))p.extend(!0,s,e);else{if(t===b)return s[e];s[e]=t}},debug:function(){u.debug&&(u.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,u.name+":"),s.debug.apply(console,arguments)))},verbose:function(){u.verbose&&u.debug&&(u.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),s.verbose.apply(console,arguments)))},error:function(){s.error=Function.prototype.bind.call(console.error,console,u.name+":"),s.error.apply(console,arguments)},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(i||t),i=t,o.push({Element:m,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=u.name+":",n=0;i=!1,clearTimeout(s.performance.timer),p.each(o,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",(console.group!==b||console.table!==b)&&0<o.length&&(console.groupCollapsed(e),console.table?console.table(o):p.each(o,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),o=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||c,t=m||t,"string"==typeof i&&r!==b&&(i=i.split(/[\. ]/),o=i.length-1,p.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(p.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==b)return a=r[n],!1;if(!p.isPlainObject(r[t])||e==o)return r[t]!==b?a=r[t]:s.error(d.method,i),!1;r=r[t]}})),p.isFunction(a)?n=a.apply(t,e):a!==b&&(n=a),Array.isArray(l)?l.push(n):l!==b?l=[l,n]:n!==b&&(l=n),a}},n?(g===b&&s.initialize(),s.invoke(t)):(g!==b&&s.destroy(),s.initialize()),l!==b?l:this},p.site.settings={name:"Site",namespace:"site",error:{console:"Console cannot be restored, most likely it was overwritten outside of module",method:"The method you called is not defined."},debug:!1,verbose:!1,performance:!0,modules:["accordion","api","calendar","checkbox","dimmer","dropdown","embed","form","modal","nag","popup","slider","rating","shape","sidebar","state","sticky","tab","toast","transition","visibility","visit"],siteNamespace:"site",namespaceStub:{cache:{},config:{},sections:{},section:{},utilities:{}}},p.extend(p.expr[":"],{data:p.expr.createPseudo?p.expr.createPseudo(function(t){return function(e){return!!p.data(e,t)}}):function(e,t,n){return!!p.data(e,n[3])}})}(jQuery,window,document),function(M,I,j,q){"use strict";M.isFunction=M.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},I=void 0!==I&&I.Math==Math?I:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),M.fn.form=function(k){var T,S=M(this),D=S.selector||"",A=(new Date).getTime(),E=[],F=k,P=arguments[1],O="string"==typeof F,R=[].slice.call(arguments,1);return S.each(function(){var n,f,t,e,g,l,m,p,h,i,u,o,a,s,c,v,d=M(this),b=this,y=[],x=!1,r=!1,C=!1,w=["clean","clean"];(v={initialize:function(){v.get.settings(),O?(c===q&&v.instantiate(),v.invoke(F)):(c!==q&&c.invoke("destroy"),v.verbose("Initializing form validation",d,g),v.bindEvents(),v.set.defaults(),g.autoCheckRequired&&v.set.autoCheck(),v.instantiate())},instantiate:function(){v.verbose("Storing instance of module",v),c=v,d.data(a,v)},destroy:function(){v.verbose("Destroying previous module",c),v.removeEvents(),d.removeData(a)},refresh:function(){v.verbose("Refreshing selector cache"),n=d.find(p.field),f=d.find(p.group),t=d.find(p.message),d.find(p.prompt),e=d.find(p.submit),d.find(p.clear),d.find(p.reset)},submit:function(){v.verbose("Submitting form",d),r=!0,d.submit()},attachEvents:function(e,t){t=t||"submit",M(e).on("click"+s,function(e){v[t](),e.preventDefault()})},bindEvents:function(){v.verbose("Attaching form events"),d.on("submit"+s,v.validate.form).on("blur"+s,p.field,v.event.field.blur).on("click"+s,p.submit,v.submit).on("click"+s,p.reset,v.reset).on("click"+s,p.clear,v.clear),g.keyboardShortcuts&&d.on("keydown"+s,p.field,v.event.field.keydown),n.each(function(e,t){var n=M(t),i=n.prop("type"),o=v.get.changeEvent(i,n);n.on(o+s,v.event.field.change)}),g.preventLeaving&&M(I).on("beforeunload"+s,v.event.beforeUnload),n.on("change click keyup keydown blur",function(e){M(this).triggerHandler(e.type+".dirty")}),n.on("change.dirty click.dirty keyup.dirty keydown.dirty blur.dirty",v.determine.isDirty),d.on("dirty"+s,function(e){g.onDirty.call()}),d.on("clean"+s,function(e){g.onClean.call()})},clear:function(){n.each(function(e,t){var n=M(t),i=n.parent(),o=n.closest(f),a=o.find(p.prompt),r=n.closest(p.uiCalendar),s=n.data(m.defaultValue)||"",l=i.is(p.uiCheckbox),c=i.is(p.uiDropdown)&&v.can.useElement("dropdown"),u=0<r.length&&v.can.useElement("calendar");o.hasClass(h.error)&&(v.verbose("Resetting error on field",o),o.removeClass(h.error),a.remove()),c?(v.verbose("Resetting dropdown value",i,s),i.dropdown("clear",!0)):l?n.prop("checked",!1):u?r.calendar("clear"):(v.verbose("Resetting field value",n,s),n.val(""))})},reset:function(){n.each(function(e,t){var n=M(t),i=n.parent(),o=n.closest(f),a=n.closest(p.uiCalendar),r=o.find(p.prompt),s=n.data(m.defaultValue),l=i.is(p.uiCheckbox),c=i.is(p.uiDropdown)&&v.can.useElement("dropdown"),u=0<a.length&&v.can.useElement("calendar"),d=o.hasClass(h.error);s!==q&&(d&&(v.verbose("Resetting error on field",o),o.removeClass(h.error),r.remove()),c?(v.verbose("Resetting dropdown value",i,s),i.dropdown("restore defaults",!0)):l?(v.verbose("Resetting checkbox value",i,s),n.prop("checked",s)):u?a.calendar("set date",s):(v.verbose("Resetting field value",n,s),n.val(s)))}),v.determine.isDirty()},determine:{isValid:function(){var n=!0;return M.each(l,function(e,t){v.validate.field(t,e,!0)||(n=!1)}),n},isDirty:function(e){var o=!1;n.each(function(e,t){var n,i=M(t);n=0<i.filter(p.checkbox).length?v.is.checkboxDirty(i):v.is.fieldDirty(i),i.data(g.metadata.isDirty,n),o|=n}),o?v.set.dirty():v.set.clean(),e&&"dirty"===e.namespace&&(e.stopImmediatePropagation(),e.preventDefault())}},is:{bracketedRule:function(e){return e.type&&e.type.match(g.regExp.bracket)},shorthandFields:function(e){var t=e[Object.keys(e)[0]];return v.is.shorthandRules(t)},shorthandRules:function(e){return"string"==typeof e||Array.isArray(e)},empty:function(e){return!e||0===e.length||(e.is(p.checkbox)?!e.is(":checked"):v.is.blank(e))},blank:function(e){return""===String(e.val()).trim()},valid:function(e){var n=!0;return e?(v.verbose("Checking if field is valid",e),v.validate.field(l[e],e,!1)):(v.verbose("Checking if form is valid"),M.each(l,function(e,t){v.is.valid(e)||(n=!1)}),n)},dirty:function(){return C},clean:function(){return!C},fieldDirty:function(e){var t=e.data(m.defaultValue);null==t&&(t="");var n=e.val();null==n&&(n="");var i=/^(true|false)$/i;return i.test(t)&&i.test(n)?!new RegExp("^"+t+"$","i").test(n):n!==t},checkboxDirty:function(e){return e.data(m.defaultValue)!==e.is(":checked")},justDirty:function(){return"dirty"===w[0]},justClean:function(){return"clean"===w[0]}},removeEvents:function(){d.off(s),n.off(s),e.off(s),n.off(s)},event:{field:{keydown:function(e){var t=M(this),n=e.which,i=t.is(p.input),o=t.is(p.checkbox),a=0<t.closest(p.uiDropdown).length,r=13;n==27&&(v.verbose("Escape key pressed blurring field"),t.blur()),e.ctrlKey||n!=r||!i||a||o||(x||(t.one("keyup"+s,v.event.field.keyup),v.submit(),v.debug("Enter pressed on input submitting form")),x=!0)},keyup:function(){x=!1},blur:function(e){var t=M(this),n=t.closest(f),i=v.get.validation(t);n.hasClass(h.error)?(v.debug("Revalidating field",t,i),i&&v.validate.field(i)):"blur"==g.on&&i&&v.validate.field(i)},change:function(e){var t=M(this),n=t.closest(f),i=v.get.validation(t);i&&("change"==g.on||n.hasClass(h.error)&&g.revalidate)&&(clearTimeout(v.timer),v.timer=setTimeout(function(){v.debug("Revalidating field",t,v.get.validation(t)),v.validate.field(i)},g.delay))}},beforeUnload:function(e){if(v.is.dirty()&&!r)return(e=e||I.event)&&(e.returnValue=g.text.leavingMessage),g.text.leavingMessage}},get:{ancillaryValue:function(e){return!(!e.type||!e.value&&!v.is.bracketedRule(e))&&(e.value!==q?e.value:e.type.match(g.regExp.bracket)[1]+"")},ruleName:function(e){return v.is.bracketedRule(e)?e.type.replace(e.type.match(g.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":v.get.inputEvent()},inputEvent:function(){return j.createElement("input").oninput!==q?"input":j.createElement("input").onpropertychange!==q?"propertychange":"keyup"},fieldsFromShorthand:function(e){var i={};return M.each(e,function(n,e){"string"==typeof e&&(e=[e]),i[n]={rules:[]},M.each(e,function(e,t){i[n].rules.push({type:t})})}),i},prompt:function(e,t){var n,i,o=v.get.ruleName(e),a=v.get.ancillaryValue(e),r=v.get.field(t.identifier),s=r.val(),l=M.isFunction(e.prompt)?e.prompt(s):e.prompt||g.prompt[o]||g.text.unspecifiedRule,c=-1!==l.search("{value}"),u=-1!==l.search("{name}");return c&&(l=l.replace(/\{value\}/g,r.val())),u&&(i=1==(n=r.closest(p.group).find("label").eq(0)).length?n.text():r.prop("placeholder")||g.text.unspecifiedField,l=l.replace(/\{name\}/g,i)),l=(l=l.replace(/\{identifier\}/g,t.identifier)).replace(/\{ruleValue\}/g,a),e.prompt||v.verbose("Using default validation prompt for type",l,o),l},settings:function(){if(M.isPlainObject(k)){var e=Object.keys(k);0<e.length&&(k[e[0]].identifier!==q&&k[e[0]].rules!==q)?(g=M.extend(!0,{},M.fn.form.settings,P),l=M.extend({},M.fn.form.settings.defaults,k),v.error(g.error.oldSyntax,b),v.verbose("Extending settings from legacy parameters",l,g)):(k.fields&&v.is.shorthandFields(k.fields)&&(k.fields=v.get.fieldsFromShorthand(k.fields)),g=M.extend(!0,{},M.fn.form.settings,k),l=M.extend({},M.fn.form.settings.defaults,g.fields),v.verbose("Extending settings",l,g))}else g=M.fn.form.settings,l=M.fn.form.settings.defaults,v.verbose("Using default form validation",l,g);o=g.namespace,m=g.metadata,p=g.selector,h=g.className,i=g.regExp,u=g.error,a="module-"+o,s="."+o,c=d.data(a),v.refresh()},field:function(e){var t;return v.verbose("Finding field with identifier",e),e=v.escape.string(e),0<(t=n.filter("#"+e)).length?t:0<(t=n.filter('[name="'+e+'"]')).length?t:0<(t=n.filter('[name="'+e+'[]"]')).length?t:0<(t=n.filter("[data-"+m.validate+'="'+e+'"]')).length?t:M("<input/>")},fields:function(e){var n=M();return M.each(e,function(e,t){n=n.add(v.get.field(t))}),n},validation:function(i){var o,a;return!!l&&(M.each(l,function(e,n){a=n.identifier||e,M.each(v.get.field(a),function(e,t){if(t==i[0])return n.identifier=a,o=n,!1})}),o||!1)},value:function(e){var t=[];return t.push(e),v.get.values.call(b,t)[e]},values:function(e){var t=Array.isArray(e)?v.get.fields(e):n,m={};return t.each(function(e,t){var n=M(t),i=n.closest(p.uiCalendar),o=n.prop("name"),a=n.val(),r=n.is(p.checkbox),s=n.is(p.radio),l=-1!==o.indexOf("[]"),c=0<i.length&&v.can.useElement("calendar"),u=!!r&&n.is(":checked");if(o)if(l)o=o.replace("[]",""),m[o]||(m[o]=[]),r?u?m[o].push(a||!0):m[o].push(!1):m[o].push(a);else if(s)m[o]!==q&&!1!==m[o]||(m[o]=!!u&&(a||!0));else if(r)m[o]=!!u&&(a||!0);else if(c){var d=i.calendar("get date");if(null!==d){if("date"==g.dateHandling)m[o]=d;else if("input"==g.dateHandling)m[o]=i.calendar("get input date");else if("formatter"==g.dateHandling){var f=i.calendar("setting","type");switch(f){case"date":m[o]=g.formatter.date(d);break;case"datetime":m[o]=g.formatter.datetime(d);break;case"time":m[o]=g.formatter.time(d);break;case"month":m[o]=g.formatter.month(d);break;case"year":m[o]=g.formatter.year(d);break;default:v.debug("Wrong calendar mode",i,f),m[o]=""}}}else m[o]=""}else m[o]=a}),m},dirtyFields:function(){return n.filter(function(e,t){return M(t).data(m.isDirty)})}},has:{field:function(e){return v.verbose("Checking for existence of a field with identifier",e),"string"!=typeof(e=v.escape.string(e))&&v.error(u.identifier,e),0<n.filter("#"+e).length||(0<n.filter('[name="'+e+'"]').length||0<n.filter("[data-"+m.validate+'="'+e+'"]').length)}},can:{useElement:function(e){return M.fn[e]!==q||(v.error(u.noElement.replace("{element}",e)),!1)}},escape:{string:function(e){return(e=String(e)).replace(i.escape,"\\$&")}},add:{rule:function(e,t){v.add.field(e,t)},field:function(n,e){l[n]!==q&&l[n].rules!==q||(l[n]={rules:[]});var i={rules:[]};v.is.shorthandRules(e)?(e=Array.isArray(e)?e:[e],M.each(e,function(e,t){i.rules.push({type:t})})):i.rules=e.rules,M.each(i.rules,function(e,t){0==M.grep(l[n].rules,function(e){return e.type==t.type}).length&&l[n].rules.push(t)}),v.debug("Adding rules",i.rules,l)},fields:function(e){var t;t=e&&v.is.shorthandFields(e)?v.get.fieldsFromShorthand(e):e,l=M.extend({},l,t)},prompt:function(e,t,n){var i=v.get.field(e).closest(f),o=i.children(p.prompt),a=0!==o.length;t="string"==typeof t?[t]:t,v.verbose("Adding field error state",e),n||i.addClass(h.error),g.inline&&(a||(o=g.templates.prompt(t,h.label)).appendTo(i),o.html(t[0]),a?v.verbose("Inline errors are disabled, no inline error added",e):g.transition&&v.can.useElement("transition")&&d.transition("is supported")?(v.verbose("Displaying error with css transition",g.transition),o.transition(g.transition+" in",g.duration)):(v.verbose("Displaying error with fallback javascript animation"),o.fadeIn(g.duration)))},errors:function(e){v.debug("Adding form error messages",e),v.set.error(),t.html(g.templates.error(e))}},remove:{rule:function(n,e){var i=Array.isArray(e)?e:[e];if(l[n]!==q&&Array.isArray(l[n].rules))return e===q?(v.debug("Removed all rules"),void(l[n].rules=[])):void M.each(l[n].rules,function(e,t){t&&-1!==i.indexOf(t.type)&&(v.debug("Removed rule",t.type),l[n].rules.splice(e,1))})},field:function(e){var t=Array.isArray(e)?e:[e];M.each(t,function(e,t){v.remove.rule(t)})},rules:function(e,n){Array.isArray(e)?M.each(e,function(e,t){v.remove.rule(t,n)}):v.remove.rule(e,n)},fields:function(e){v.remove.field(e)},prompt:function(e){var t=v.get.field(e).closest(f),n=t.children(p.prompt);t.removeClass(h.error),g.inline&&n.is(":visible")&&(v.verbose("Removing prompt for field",e),g.transition&&v.can.useElement("transition")&&d.transition("is supported")?n.transition(g.transition+" out",g.duration,function(){n.remove()}):n.fadeOut(g.duration,function(){n.remove()}))}},set:{success:function(){d.removeClass(h.error).addClass(h.success)},defaults:function(){n.each(function(e,t){var n=M(t),i=n.parent(),o=0<n.filter(p.checkbox).length,a=i.is(p.uiDropdown)&&v.can.useElement("dropdown"),r=n.closest(p.uiCalendar),s=0<r.length&&v.can.useElement("calendar"),l=o?n.is(":checked"):n.val();a?i.dropdown("save defaults"):s&&r.calendar("refresh"),n.data(m.defaultValue,l),n.data(m.isDirty,!1)})},error:function(){d.removeClass(h.success).addClass(h.error)},value:function(e,t){var n={};return n[e]=t,v.set.values.call(b,n)},values:function(e){M.isEmptyObject(e)||M.each(e,function(e,t){var n,i=v.get.field(e),o=i.parent(),a=i.closest(p.uiCalendar),r=Array.isArray(t),s=o.is(p.uiCheckbox)&&v.can.useElement("checkbox"),l=o.is(p.uiDropdown)&&v.can.useElement("dropdown"),c=i.is(p.radio)&&s,u=0<a.length&&v.can.useElement("calendar");0<i.length&&(r&&s?(v.verbose("Selecting multiple",t,i),o.checkbox("uncheck"),M.each(t,function(e,t){n=i.filter('[value="'+t+'"]'),o=n.parent(),0<n.length&&o.checkbox("check")})):c?(v.verbose("Selecting radio value",t,i),i.filter('[value="'+t+'"]').parent(p.uiCheckbox).checkbox("check")):s?(v.verbose("Setting checkbox value",t,o),!0===t||1===t?o.checkbox("check"):o.checkbox("uncheck")):l?(v.verbose("Setting dropdown value",t,o),o.dropdown("set selected",t)):u?a.calendar("set date",t):(v.verbose("Setting field value",t,i),i.val(t)))})},dirty:function(){v.verbose("Setting state dirty"),C=!0,w[0]=w[1],w[1]="dirty",v.is.justClean()&&d.trigger("dirty")},clean:function(){v.verbose("Setting state clean"),C=!1,w[0]=w[1],w[1]="clean",v.is.justDirty()&&d.trigger("clean")},asClean:function(){v.set.defaults(),v.set.clean()},asDirty:function(){v.set.defaults(),v.set.dirty()},autoCheck:function(){v.debug("Enabling auto check on required fields"),n.each(function(e,t){var n=M(t),i=M(t).closest(f),o=0<n.filter(p.checkbox).length,a=n.prop("required")||i.hasClass(h.required)||i.parent().hasClass(h.required),r=n.is(":disabled")||i.hasClass(h.disabled)||i.parent().hasClass(h.disabled),s=v.get.validation(n),l=!!s&&0!==M.grep(s.rules,function(e){return"empty"==e.type}),c=s.identifier||n.attr("id")||n.attr("name")||n.data(m.validate);!a||r||l||c===q||(o?(v.verbose("Adding 'checked' rule on field",c),v.add.rule(c,"checked")):(v.verbose("Adding 'empty' rule on field",c),v.add.rule(c,"empty")))})}},validate:{form:function(e,t){var n=v.get.values();if(x)return!1;if(y=[],v.determine.isValid()){if(v.debug("Form has no validation errors, submitting"),v.set.success(),!0!==t)return g.onSuccess.call(b,e,n)}else if(v.debug("Form has errors"),v.set.error(),g.inline||v.add.errors(y),e&&d.data("moduleApi")!==q&&e.stopImmediatePropagation(),!0!==t)return g.onFailure.call(b,y,n)},field:function(i,e,o){o=o===q||o,"string"==typeof i&&(v.verbose("Validating field",i),i=l[e=i]);var a=i.identifier||e,t=v.get.field(a),n=!!i.depends&&v.get.field(i.depends),r=!0,s=[];return i.identifier||(v.debug("Using field name as identifier",a),i.identifier=a),!t.filter(":not(:disabled)").length?v.debug("Field is disabled. Skipping",a):i.optional&&v.is.blank(t)?v.debug("Field is optional and blank. Skipping",a):i.depends&&v.is.empty(n)?v.debug("Field depends on another value that is not present or empty. Skipping",n):i.rules!==q&&(t.closest(f).removeClass(h.error),M.each(i.rules,function(e,t){if(v.has.field(a)){var n=v.validate.rule(i,t,!0)||[];0<n.length&&(v.debug("Field is invalid",a,t.type),s.push(v.get.prompt(t,i)),r=!1,o&&M(n).closest(f).addClass(h.error))}})),r?(o&&(v.remove.prompt(a,s),g.onValid.call(t)),!0):(o&&(y=y.concat(s),v.add.prompt(a,s,!0),g.onInvalid.call(t,s)),!1)},rule:function(e,t,n){function i(e){var t=c?M(e).filter(":checked").val():M(e).val();return t=t===q||""===t||null===t?"":g.shouldTrim?String(t+"").trim():String(t+""),s.call(e,t,a,d)}var o=v.get.field(e.identifier),a=v.get.ancillaryValue(t),r=v.get.ruleName(t),s=g.rules[r],l=[],c=o.is(p.checkbox);if(M.isFunction(s))return c?i(o)||(l=o):M.each(o,function(e,t){i(t)||l.push(t)}),n?l:!(0<l.length);v.error(u.noRule,r)}},setting:function(e,t){if(M.isPlainObject(e))M.extend(!0,g,e);else{if(t===q)return g[e];g[e]=t}},internal:function(e,t){if(M.isPlainObject(e))M.extend(!0,v,e);else{if(t===q)return v[e];v[e]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?v.performance.log(arguments):(v.debug=Function.prototype.bind.call(console.info,console,g.name+":"),v.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?v.performance.log(arguments):(v.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),v.verbose.apply(console,arguments)))},error:function(){g.silent||(v.error=Function.prototype.bind.call(console.error,console,g.name+":"),v.error.apply(console,arguments))},performance:{log:function(e){var t,n;g.performance&&(n=(t=(new Date).getTime())-(A||t),A=t,E.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:b,"Execution Time":n})),clearTimeout(v.performance.timer),v.performance.timer=setTimeout(v.performance.display,500)},display:function(){var e=g.name+":",n=0;A=!1,clearTimeout(v.performance.timer),M.each(E,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",D&&(e+=" '"+D+"'"),1<S.length&&(e+=" ("+S.length+")"),(console.group!==q||console.table!==q)&&0<E.length&&(console.groupCollapsed(e),console.table?console.table(E):M.each(E,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),E=[]}},invoke:function(i,e,t){var o,a,n,r=c;return e=e||R,t=b||t,"string"==typeof i&&r!==q&&(i=i.split(/[\. ]/),o=i.length-1,M.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(M.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==q)return a=r[n],!1;if(!M.isPlainObject(r[t])||e==o)return r[t]!==q&&(a=r[t]),!1;r=r[t]}})),M.isFunction(a)?n=a.apply(t,e):a!==q&&(n=a),Array.isArray(T)?T.push(n):T!==q?T=[T,n]:n!==q&&(T=n),a}}).initialize()}),T!==q?T:this},M.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,shouldTrim:!0,transition:"scale",duration:200,autoCheckRequired:!1,preventLeaving:!1,dateHandling:"date",onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},onDirty:function(){},onClean:function(){},metadata:{defaultValue:"default",validate:"validate",isDirty:"isDirty"},regExp:{htmlID:/^[a-zA-Z][\w:.-]*$/g,bracket:/\[(.*)\]/i,decimal:/^\d+\.?\d*$/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|:,=@]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field",leavingMessage:"There are unsaved changes on this page which will be discarded if you continue."},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} must contain "{ruleValue}"',containExactly:'{name} must contain exactly "{ruleValue}"',doesntContain:'{name} cannot contain  "{ruleValue}"',doesntContainExactly:'{name} cannot contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown",uiCalendar:".ui.calendar"},className:{error:"error",label:"ui basic red pointing prompt label",pressed:"down",success:"success",required:"required",disabled:"disabled"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically.",noElement:"This module requires ui {element}"},templates:{error:function(e){var n='<ul class="list">';return M.each(e,function(e,t){n+="<li>"+t+"</li>"}),M(n+="</ul>")},prompt:function(e,t){return M("<div/>").addClass(t).html(e[0])}},formatter:{date:function(e){return Intl.DateTimeFormat("en-GB").format(e)},datetime:function(e){return Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},time:function(e){return Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},month:function(e){return Intl.DateTimeFormat("en-GB",{month:"2-digit",year:"numeric"}).format(e)},year:function(e){return Intl.DateTimeFormat("en-GB",{year:"numeric"}).format(e)}},rules:{empty:function(e){return!(e===q||""===e||Array.isArray(e)&&0===e.length)},checked:function(){return 0<M(this).filter(":checked").length},email:function(e){return M.fn.form.settings.regExp.email.test(e)},url:function(e){return M.fn.form.settings.regExp.url.test(e)},regExp:function(e,t){if(t instanceof RegExp)return e.match(t);var n,i=t.match(M.fn.form.settings.regExp.flags);return i&&(t=2<=i.length?i[1]:t,n=3<=i.length?i[2]:""),e.match(new RegExp(t,n))},integer:function(e,t){var n,i,o,a=M.fn.form.settings.regExp.integer;return t&&-1===["",".."].indexOf(t)&&(-1==t.indexOf("..")?a.test(t)&&(n=i=t-0):(o=t.split("..",2),a.test(o[0])&&(n=o[0]-0),a.test(o[1])&&(i=o[1]-0))),a.test(e)&&(n===q||n<=e)&&(i===q||e<=i)},decimal:function(e){return M.fn.form.settings.regExp.decimal.test(e)},number:function(e){return M.fn.form.settings.regExp.number.test(e)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,(e="string"==typeof e?e.toLowerCase():e)==t},isExactly:function(e,t){return e==t},not:function(e,t){return(e="string"==typeof e?e.toLowerCase():e)!=(t="string"==typeof t?t.toLowerCase():t)},notExactly:function(e,t){return e!=t},contains:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1!==e.search(new RegExp(t,"i"))},containsExactly:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1!==e.search(new RegExp(t))},doesntContain:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1===e.search(new RegExp(t,"i"))},doesntContainExactly:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1===e.search(new RegExp(t))},minLength:function(e,t){return e!==q&&e.length>=t},length:function(e,t){return e!==q&&e.length>=t},exactLength:function(e,t){return e!==q&&e.length==t},maxLength:function(e,t){return e!==q&&e.length<=t},match:function(e,t,n){var i,o;return 0<(o=n.find('[data-validate="'+t+'"]')).length?i=o.val():0<(o=n.find("#"+t)).length?i=o.val():0<(o=n.find('[name="'+t+'"]')).length?i=o.val():0<(o=n.find('[name="'+t+'[]"]')).length&&(i=o),i!==q&&e.toString()==i.toString()},different:function(e,t,n){var i,o;return 0<(o=n.find('[data-validate="'+t+'"]')).length?i=o.val():0<(o=n.find("#"+t)).length?i=o.val():0<(o=n.find('[name="'+t+'"]')).length?i=o.val():0<(o=n.find('[name="'+t+'[]"]')).length&&(i=o),i!==q&&e.toString()!==i.toString()},creditCard:function(n,e){var t,i,o={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},a={},r=!1,s="string"==typeof e&&e.split(",");if("string"==typeof n&&0!==n.length){if(n=n.replace(/[\-]/g,""),s&&(M.each(s,function(e,t){(i=o[t])&&(a={length:-1!==M.inArray(n.length,i.length),pattern:-1!==n.search(i.pattern)}).length&&a.pattern&&(r=!0)}),!r))return!1;if((t={number:-1!==M.inArray(n.length,o.unionPay.length),pattern:-1!==n.search(o.unionPay.pattern)}).number&&t.pattern)return!0;for(var l=n.length,c=0,u=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],d=0;l--;)d+=u[c][parseInt(n.charAt(l),10)],c^=1;return d%10==0&&0<d}},minCount:function(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t)},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&-1===e.search(","):e.split(",").length==t},maxCount:function(e,t){return 0!=t&&(1==t?-1===e.search(","):e.split(",").length<=t)}}}}(jQuery,window,document),function(k,T,e,S){"use strict";k.isFunction=k.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},T=void 0!==T&&T.Math==Math?T:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),k.fn.accordion=function(a){var v,r=k(this),b=(new Date).getTime(),y=[],x=a,C="string"==typeof x,w=[].slice.call(arguments,1);return r.each(function(){var e,c,u=k.isPlainObject(a)?k.extend(!0,{},k.fn.accordion.settings,a):k.extend({},k.fn.accordion.settings),d=u.className,t=u.namespace,f=u.selector,s=u.error,n="."+t,i="module-"+t,o=r.selector||"",m=k(this),g=m.find(f.title),p=m.find(f.content),l=this,h=m.data(i);c={initialize:function(){c.debug("Initializing",m),c.bind.events(),u.observeChanges&&c.observeChanges(),c.instantiate()},instantiate:function(){h=c,m.data(i,c)},destroy:function(){c.debug("Destroying previous instance",m),m.off(n).removeData(i)},refresh:function(){g=m.find(f.title),p=m.find(f.content)},observeChanges:function(){"MutationObserver"in T&&((e=new MutationObserver(function(e){c.debug("DOM tree modified, updating selector cache"),c.refresh()})).observe(l,{childList:!0,subtree:!0}),c.debug("Setting up mutation observer",e))},bind:{events:function(){c.debug("Binding delegated events"),m.on(u.on+n,f.trigger,c.event.click)}},event:{click:function(){c.toggle.call(this)}},toggle:function(e){var t=e!==S?"number"==typeof e?g.eq(e):k(e).closest(f.title):k(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating),o=n.hasClass(d.active),a=o&&!i,r=!o&&i;c.debug("Toggling visibility of content",t),a||r?u.collapsible?c.close.call(t):c.debug("Cannot close accordion content collapsing is disabled"):c.open.call(t)},open:function(e){var t=e!==S?"number"==typeof e?g.eq(e):k(e).closest(f.title):k(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating);n.hasClass(d.active)||i?c.debug("Accordion already open, skipping",n):(c.debug("Opening accordion content",t),u.onOpening.call(n),u.onChanging.call(n),u.exclusive&&c.closeOthers.call(t),t.addClass(d.active),n.stop(!0,!0).addClass(d.animating),u.animateChildren&&(k.fn.transition!==S&&m.transition("is supported")?n.children().transition({animation:"fade in",queue:!1,useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration,skipInlineHidden:!0,onComplete:function(){n.children().removeClass(d.transition)}}):n.children().stop(!0,!0).animate({opacity:1},u.duration,c.resetOpacity)),n.slideDown(u.duration,u.easing,function(){n.removeClass(d.animating).addClass(d.active),c.reset.display.call(this),u.onOpen.call(this),u.onChange.call(this)}))},close:function(e){var t=e!==S?"number"==typeof e?g.eq(e):k(e).closest(f.title):k(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating),o=n.hasClass(d.active);!o&&!(!o&&i)||o&&i||(c.debug("Closing accordion content",n),u.onClosing.call(n),u.onChanging.call(n),t.removeClass(d.active),n.stop(!0,!0).addClass(d.animating),u.animateChildren&&(k.fn.transition!==S&&m.transition("is supported")?n.children().transition({animation:"fade out",queue:!1,useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration,skipInlineHidden:!0}):n.children().stop(!0,!0).animate({opacity:0},u.duration,c.resetOpacity)),n.slideUp(u.duration,u.easing,function(){n.removeClass(d.animating).removeClass(d.active),c.reset.display.call(this),u.onClose.call(this),u.onChange.call(this)}))},closeOthers:function(e){var t,n,i,o=e!==S?g.eq(e):k(this).closest(f.title),a=o.parents(f.content).prev(f.title),r=o.closest(f.accordion),s=f.title+"."+d.active+":visible",l=f.content+"."+d.active+":visible";i=u.closeNested?(t=r.find(s).not(a)).next(p):(t=r.find(s).not(a),n=r.find(l).find(s).not(a),(t=t.not(n)).next(p)),0<t.length&&(c.debug("Exclusive enabled, closing other content",t),t.removeClass(d.active),i.removeClass(d.animating).stop(!0,!0),u.animateChildren&&(k.fn.transition!==S&&m.transition("is supported")?i.children().transition({animation:"fade out",useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration,skipInlineHidden:!0}):i.children().stop(!0,!0).animate({opacity:0},u.duration,c.resetOpacity)),i.slideUp(u.duration,u.easing,function(){k(this).removeClass(d.active),c.reset.display.call(this)}))},reset:{display:function(){c.verbose("Removing inline display from element",this),k(this).css("display",""),""===k(this).attr("style")&&k(this).attr("style","").removeAttr("style")},opacity:function(){c.verbose("Removing inline opacity from element",this),k(this).css("opacity",""),""===k(this).attr("style")&&k(this).attr("style","").removeAttr("style")}},setting:function(e,t){if(c.debug("Changing setting",e,t),k.isPlainObject(e))k.extend(!0,u,e);else{if(t===S)return u[e];k.isPlainObject(u[e])?k.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(c.debug("Changing internal",e,t),t===S)return c[e];k.isPlainObject(e)?k.extend(!0,c,e):c[e]=t},debug:function(){!u.silent&&u.debug&&(u.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,u.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),c.verbose.apply(console,arguments)))},error:function(){u.silent||(c.error=Function.prototype.bind.call(console.error,console,u.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:l,"Execution Time":n})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var e=u.name+":",n=0;b=!1,clearTimeout(c.performance.timer),k.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",o&&(e+=" '"+o+"'"),(console.group!==S||console.table!==S)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):k.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=h;return e=e||w,t=l||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,k.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(k.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!k.isPlainObject(r[t])||e==o)return r[t]!==S?a=r[t]:c.error(s.method,i),!1;r=r[t]}})),k.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),Array.isArray(v)?v.push(n):v!==S?v=[v,n]:n!==S&&(v=n),a}},C?(h===S&&c.initialize(),c.invoke(x)):(h!==S&&h.invoke("destroy"),c.initialize())}),v!==S?v:this},k.fn.accordion.settings={name:"Accordion",namespace:"accordion",silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",observeChanges:!0,exclusive:!0,collapsible:!0,closeNested:!1,animateChildren:!0,duration:350,easing:"easeOutQuad",onOpening:function(){},onClosing:function(){},onChanging:function(){},onOpen:function(){},onClose:function(){},onChange:function(){},error:{method:"The method you called is not defined"},className:{active:"active",animating:"animating",transition:"transition"},selector:{accordion:".accordion",title:".title",trigger:".title",content:".content"}},k.extend(k.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document),function(pe,e,k,T){"use strict";pe.isFunction=pe.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),pe.fn.calendar=function(o){var h,e=pe(this),a=e.selector||"",v=(new Date).getTime(),b=[],y=o,x="string"==typeof y,C=[].slice.call(arguments,1),w={5:{row:4,column:3},10:{row:3,column:2},15:{row:2,column:2},20:{row:3,column:1},30:{row:2,column:1}};return e.each(function(){var f,le,ce=pe.isPlainObject(o)?pe.extend(!0,{},pe.fn.calendar.settings,o):pe.extend({},pe.fn.calendar.settings),ue=ce.className,e=ce.namespace,r=ce.selector,de=ce.formatter,n=ce.parser,fe=ce.metadata,me=w[ce.minTimeGap],s=ce.error,t="."+e,i="module-"+e,l=pe(this),c=l.find(r.input),ge=l.find(r.popup),u=l.find(r.activator),d=this,m=l.data(i),g=!1,p=!1;le={initialize:function(){le.debug("Initializing calendar for",d,l),f=le.get.isTouch(),le.setup.config(),le.setup.popup(),le.setup.inline(),le.setup.input(),le.setup.date(),le.create.calendar(),le.bind.events(),le.instantiate()},instantiate:function(){le.verbose("Storing instance of calendar"),m=le,l.data(i,m)},destroy:function(){le.verbose("Destroying previous calendar for",d),l.removeData(i),le.unbind.events()},setup:{config:function(){null!==le.get.minDate()&&le.set.minDate(l.data(fe.minDate)),null!==le.get.maxDate()&&le.set.maxDate(l.data(fe.maxDate)),le.setting("type",le.get.type()),le.setting("on",ce.on||(c.length?"focus":"click"))},popup:function(){if(!ce.inline&&(u.length||(u=l.children().first()).length))if(pe.fn.popup!==T){if(!ge.length){var e=u.parent(),t=0!==e.closest(r.append).length?"appendTo":"prependTo";ge=pe("<div/>").addClass(ue.popup)[t](e)}ge.addClass(ue.calendar);var n=ce.onVisible,i=ce.onHidden;c.length||(ge.attr("tabindex","0"),n=function(){return le.focus(),ce.onVisible.apply(ge,arguments)},i=function(){return le.blur(),ce.onHidden.apply(ge,arguments)});var o=le.setting("on"),a=pe.extend({},ce.popupOptions,{popup:ge,on:o,hoverable:"hover"===o,closable:"click"===o,onShow:function(){return le.set.focusDate(le.get.date()),le.set.mode(ce.startMode),ce.onShow.apply(ge,arguments)},onVisible:n,onHide:ce.onHide,onHidden:i});le.popup(a)}else le.error(s.popup)},inline:function(){u.length&&!ce.inline||(ge=pe("<div/>").addClass(ue.calendar).appendTo(l),c.length||ge.attr("tabindex","0"))},input:function(){ce.touchReadonly&&c.length&&f&&c.prop("readonly",!0)},date:function(){var e;ce.initialDate?e=n.date(ce.initialDate,ce):l.data(fe.date)!==T?e=n.date(l.data(fe.date),ce):c.length&&(e=n.date(c.val(),ce)),le.set.date(e,ce.formatInput,!1)}},create:{calendar:function(){var e,t,n,i,o,a,r,s=le.get.mode(),l=new Date,c=le.get.date(),u=le.get.focusDate(),d=le.helper.dateInRange(u||c||ce.initialDate||l);u||(u=d,le.set.focusDate(u,!1,!1));var f="year"===s,m="month"===s,g="day"===s,p="hour"===s,h="minute"===s,v="time"===ce.type,b=Math.max(ce.multiMonth,1),y=g?le.get.monthOffset():0,x=d.getMinutes(),C=d.getHours(),w=d.getDate(),k=d.getMonth()+y,T=d.getFullYear(),S=g?ce.showWeekNumbers?8:7:p?4:me.column,D=g||p?6:me.row,A=g?b:1,E=ge,F=E.hasClass("left")?"right center":"left center";for(E.empty(),1<A&&(r=pe("<div/>").addClass(ue.grid).appendTo(E)),i=0;i<A;i++){if(1<A)E=pe("<div/>").addClass(ue.column).appendTo(r);var P=k+i,O=(new Date(T,P,1).getDay()-ce.firstDayOfWeek%7+7)%7;if(!ce.constantHeight&&g){var R=new Date(T,P+1,0).getDate()+O;D=Math.ceil(R/7)}var M=f?10:m?1:0,I=g?1:0,j=p||h?1:0,q=p||h?w:1,L=new Date(T-M,P-I,q-j,C),V=new Date(T+M,P+I,q+j,C),z=f?new Date(10*Math.ceil(T/10)-9,0,0):m?new Date(T,0,0):g?new Date(T,P,0):new Date(T,P,w,-1),N=f?new Date(10*Math.ceil(T/10)+1,0,1):m?new Date(T+1,0,1):g?new Date(T,P+1,1):new Date(T,P,w+1),H=s;g&&ce.showWeekNumbers&&(H+=" andweek");var U=pe("<table/>").addClass(ue.table).addClass(H).appendTo(E),B=S;if(!v){var W=pe("<thead/>").appendTo(U);o=pe("<tr/>").appendTo(W),a=pe("<th/>").attr("colspan",""+S).appendTo(o);var Y=f||m?new Date(T,0,1):g?new Date(T,P,1):new Date(T,P,w,C,x),Q=pe("<span/>").addClass(ue.link).appendTo(a);Q.text(de.header(Y,s,ce));var X=m?ce.disableYear?"day":"year":g?ce.disableMonth?"year":"month":"day";if(Q.data(fe.mode,X),0===i){var $=pe("<span/>").addClass(ue.prev).appendTo(a);$.data(fe.focusDate,L),$.toggleClass(ue.disabledCell,!le.helper.isDateInRange(z,s)),pe("<i/>").addClass(ue.prevIcon).appendTo($)}if(i===A-1){var G=pe("<span/>").addClass(ue.next).appendTo(a);G.data(fe.focusDate,V),G.toggleClass(ue.disabledCell,!le.helper.isDateInRange(N,s)),pe("<i/>").addClass(ue.nextIcon).appendTo(G)}if(g)for(o=pe("<tr/>").appendTo(W),ce.showWeekNumbers&&((a=pe("<th/>").appendTo(o)).text(ce.text.weekNo),a.addClass(ue.weekCell),B--),e=0;e<B;e++)(a=pe("<th/>").appendTo(o)).text(de.dayColumnHeader((e+ce.firstDayOfWeek)%7,ce))}var K=pe("<tbody/>").appendTo(U);for(e=f?10*Math.ceil(T/10)-9:g?1-O:0,t=0;t<D;t++)for(o=pe("<tr/>").appendTo(K),g&&ce.showWeekNumbers&&((a=pe("<th/>").appendTo(o)).text(le.get.weekOfYear(T,P,e+1-ce.firstDayOfWeek)),a.addClass(ue.weekCell)),n=0;n<B;n++,e++){var J=f?new Date(e,P,1,C,x):m?new Date(T,e,1,C,x):g?new Date(T,P,e,C,x):p?new Date(T,P,w,e):new Date(T,P,w,C,e*ce.minTimeGap),Z=f?e:m?ce.text.monthsShort[e]:g?J.getDate():de.time(J,ce,!0);(a=pe("<td/>").addClass(ue.cell).appendTo(o)).text(Z),a.data(fe.date,J);var _=g&&J.getMonth()!==(P+12)%12,ee=!ce.selectAdjacentDays&&_||!le.helper.isDateInRange(J,s)||ce.isDisabled(J,s)||le.helper.isDisabled(J,s)||!le.helper.isEnabled(J,s);if(ee){var te=le.helper.findDayAsObject(J,s,ce.disabledDates);null!==te&&te[fe.message]&&(a.attr("data-tooltip",te[fe.message]),a.attr("data-position",F))}else{var ne=le.helper.findDayAsObject(J,s,ce.eventDates);null!==ne&&(a.addClass(ne[fe.class]||ce.eventClass),ne[fe.message]&&(a.attr("data-tooltip",ne[fe.message]),a.attr("data-position",F)))}var ie=le.helper.dateEqual(J,c,s),oe=le.helper.dateEqual(J,l,s);a.toggleClass(ue.adjacentCell,_),a.toggleClass(ue.disabledCell,ee),a.toggleClass(ue.activeCell,ie&&!_),p||h||a.toggleClass(ue.todayCell,!_&&oe);var ae={mode:s,adjacent:_,disabled:ee,active:ie,today:oe};de.cell(a,J,ae),le.helper.dateEqual(J,u,s)&&le.set.focusDate(J,!1,!1)}if(ce.today){var re=pe("<tr/>").appendTo(K),se=pe("<td/>").attr("colspan",""+S).addClass(ue.today).appendTo(re);se.text(de.today(ce)),se.data(fe.date,l)}le.update.focus(!1,U)}}},update:{focus:function(e,t){t=t||ge;var s=le.get.mode(),n=le.get.date(),l=le.get.focusDate(),c=le.get.startDate(),u=le.get.endDate(),d=(e?l:null)||n||(f?null:l);t.find("td").each(function(){var e=pe(this),t=e.data(fe.date);if(t){var n=e.hasClass(ue.disabledCell),i=e.hasClass(ue.activeCell),o=e.hasClass(ue.adjacentCell),a=le.helper.dateEqual(t,l,s),r=!!d&&(!!c&&le.helper.isDateInRange(t,s,c,d)||!!u&&le.helper.isDateInRange(t,s,d,u));e.toggleClass(ue.focusCell,a&&(!f||g)&&(!o||ce.selectAdjacentDays&&o)&&!n),le.helper.isTodayButton(e)||e.toggleClass(ue.rangeCell,r&&!i&&!n)}})}},refresh:function(){le.create.calendar()},bind:{events:function(){le.debug("Binding events"),ge.on("mousedown"+t,le.event.mousedown),ge.on("touchstart"+t,le.event.mousedown),ge.on("mouseup"+t,le.event.mouseup),ge.on("touchend"+t,le.event.mouseup),ge.on("mouseover"+t,le.event.mouseover),c.length?(c.on("input"+t,le.event.inputChange),c.on("focus"+t,le.event.inputFocus),c.on("blur"+t,le.event.inputBlur),c.on("keydown"+t,le.event.keydown)):ge.on("keydown"+t,le.event.keydown)}},unbind:{events:function(){le.debug("Unbinding events"),ge.off(t),c.length&&c.off(t)}},event:{mouseover:function(e){var t=pe(e.target).data(fe.date),n=1===e.buttons;t&&le.set.focusDate(t,!1,!0,n)},mousedown:function(e){c.length&&e.preventDefault(),g=0<=e.type.indexOf("touch");var t=pe(e.target).data(fe.date);t&&le.set.focusDate(t,!1,!0,!0)},mouseup:function(e){le.focus(),e.preventDefault(),e.stopPropagation(),g=!1;var t=pe(e.target);if(!t.hasClass("disabled")){var n=t.parent();(n.data(fe.date)||n.data(fe.focusDate)||n.data(fe.mode))&&(t=n);var i=t.data(fe.date),o=t.data(fe.focusDate),a=t.data(fe.mode);if(i&&!1!==ce.onSelect.call(d,i,le.get.mode())){var r=t.hasClass(ue.today);le.selectDate(i,r)}else o?le.set.focusDate(o):a&&le.set.mode(a)}},keydown:function(e){var t=e.which;if(27!==t&&9!==t||le.popup("hide"),le.popup("is visible"))if(37===t||38===t||39===t||40===t){var n="day"===(d=le.get.mode())?7:"hour"===d?4:"minute"===d?me.column:3,i=37===t?-1:38===t?-n:39==t?1:n;i*="minute"===d?ce.minTimeGap:1;var o=le.get.focusDate()||le.get.date()||new Date,a=o.getFullYear()+("year"===d?i:0),r=o.getMonth()+("month"===d?i:0),s=o.getDate()+("day"===d?i:0),l=o.getHours()+("hour"===d?i:0),c=o.getMinutes()+("minute"===d?i:0),u=new Date(a,r,s,l,c);"time"===ce.type&&(u=le.helper.mergeDateTime(o,u)),le.helper.isDateInRange(u,d)&&le.set.focusDate(u)}else if(13===t){var d=le.get.mode(),f=le.get.focusDate();f&&!ce.isDisabled(f,d)&&!le.helper.isDisabled(f,d)&&le.helper.isEnabled(f,d)&&le.selectDate(f),e.preventDefault(),e.stopPropagation()}38!==t&&40!==t||(e.preventDefault(),le.popup("show"))},inputChange:function(){var e=c.val(),t=n.date(e,ce);le.set.date(t,!1)},inputFocus:function(){ge.addClass(ue.active)},inputBlur:function(){if(ge.removeClass(ue.active),ce.formatInput){var e=le.get.date(),t=de.datetime(e,ce);c.val(t)}}},get:{weekOfYear:function(e,t,n){var i,o,a;return i=Date.UTC(e,t,n+3)/864e5,o=Math.floor(i/7),a=new Date(6048e5*o).getUTCFullYear(),o-Math.floor(Date.UTC(a,0,7)/6048e5)+1},date:function(){return le.helper.sanitiseDate(l.data(fe.date))||null},inputDate:function(){return c.val()},focusDate:function(){return l.data(fe.focusDate)||null},startDate:function(){var e=le.get.calendarModule(ce.startCalendar);return(e?e.get.date():l.data(fe.startDate))||null},endDate:function(){var e=le.get.calendarModule(ce.endCalendar);return(e?e.get.date():l.data(fe.endDate))||null},minDate:function(){return l.data(fe.minDate)||null},maxDate:function(){return l.data(fe.maxDate)||null},monthOffset:function(){return l.data(fe.monthOffset)||0},mode:function(){var e=l.data(fe.mode)||ce.startMode,t=le.get.validModes();return 0<=pe.inArray(e,t)?e:"time"===ce.type?"hour":"month"===ce.type?"month":"year"===ce.type?"year":"day"},type:function(){return l.data(fe.type)||ce.type},validModes:function(){var e=[];return"time"!==ce.type&&(ce.disableYear&&"year"!==ce.type||e.push("year"),(ce.disableMonth||"year"===ce.type)&&"month"!==ce.type||e.push("month"),0<=ce.type.indexOf("date")&&e.push("day")),0<=ce.type.indexOf("time")&&(e.push("hour"),ce.disableMinute||e.push("minute")),e},isTouch:function(){try{return k.createEvent("TouchEvent"),!0}catch(e){return!1}},calendarModule:function(e){return e?(e instanceof pe||(e=pe(e).first()),e.data(i)):null}},set:{date:function(e,t,n){t=!1!==t,n=!1!==n,e=le.helper.sanitiseDate(e),e=le.helper.dateInRange(e);var i=le.get.mode(),o=de.datetime(e,ce);if(n&&!1===ce.onBeforeChange.call(d,e,o,i))return!1;if(le.set.focusDate(e),ce.isDisabled(e,i))return!1;var a=le.get.endDate();a&&e&&a<e&&le.set.endDate(T),le.set.dataKeyValue(fe.date,e),t&&c.length&&c.val(o),n&&ce.onChange.call(d,e,o,i)},startDate:function(e,t){e=le.helper.sanitiseDate(e);var n=le.get.calendarModule(ce.startCalendar);n&&n.set.date(e),le.set.dataKeyValue(fe.startDate,e,t)},endDate:function(e,t){e=le.helper.sanitiseDate(e);var n=le.get.calendarModule(ce.endCalendar);n&&n.set.date(e),le.set.dataKeyValue(fe.endDate,e,t)},focusDate:function(e,t,n,i){e=le.helper.sanitiseDate(e),e=le.helper.dateInRange(e);var o="day"===le.get.mode(),a=le.get.focusDate();if(o&&e&&a){var r=12*(e.getFullYear()-a.getFullYear())+e.getMonth()-a.getMonth();if(r){var s=le.get.monthOffset()-r;le.set.monthOffset(s,!1)}}var l=le.set.dataKeyValue(fe.focusDate,e,t);n=!1!==n&&l&&!1===t||p!=i,p=i,n&&le.update.focus(i)},minDate:function(e){e=le.helper.sanitiseDate(e),null!==ce.maxDate&&ce.maxDate<=e?le.verbose("Unable to set minDate variable bigger that maxDate variable",e,ce.maxDate):(le.setting("minDate",e),le.set.dataKeyValue(fe.minDate,e))},maxDate:function(e){e=le.helper.sanitiseDate(e),null!==ce.minDate&&ce.minDate>=e?le.verbose("Unable to set maxDate variable lower that minDate variable",e,ce.minDate):(le.setting("maxDate",e),le.set.dataKeyValue(fe.maxDate,e))},monthOffset:function(e,t){var n=Math.max(ce.multiMonth,1);e=Math.max(1-n,Math.min(0,e)),le.set.dataKeyValue(fe.monthOffset,e,t)},mode:function(e,t){le.set.dataKeyValue(fe.mode,e,t)},dataKeyValue:function(e,t,n){var i=l.data(e),o=i===t||i<=t&&t<=i;return t?l.data(e,t):l.removeData(e),(n=!1!==n&&!o)&&le.refresh(),!o}},selectDate:function(e,t){le.verbose("New date selection",e);var n=le.get.mode();if(t||"minute"===n||ce.disableMinute&&"hour"===n||"date"===ce.type&&"day"===n||"month"===ce.type&&"month"===n||"year"===ce.type&&"year"===n){if(!(!1===le.set.date(e))&&ce.closable){le.popup("hide");var i=le.get.calendarModule(ce.endCalendar);i&&("focus"!==i.setting("on")&&i.popup("show"),i.focus())}}else{var o="year"===n?ce.disableMonth?"day":"month":"month"===n?"day":"day"===n?"hour":"minute";le.set.mode(o),"hour"===n||"day"===n&&le.get.date()?le.set.date(e,!0,!1):le.set.focusDate(e)}},changeDate:function(e){le.set.date(e)},clear:function(){le.set.date(T)},popup:function(){return u.popup.apply(u,arguments)},focus:function(){c.length?c.focus():ge.focus()},blur:function(){c.length?c.blur():ge.blur()},helper:{isDisabled:function(n,i){return("day"===i||"month"===i||"year"===i)&&(-1!==ce.disabledDaysOfWeek.indexOf(n.getDay())||ce.disabledDates.some(function(e){if("string"==typeof e&&(e=le.helper.sanitiseDate(e)),e instanceof Date)return le.helper.dateEqual(n,e,i);if(null!==e&&"object"==typeof e)if(e[fe.year]){if("number"==typeof e[fe.year])return n.getFullYear()==e[fe.year];if(Array.isArray(e[fe.year]))return-1<e[fe.year].indexOf(n.getFullYear())}else if(e[fe.month]){if("number"==typeof e[fe.month])return n.getMonth()==e[fe.month];if(Array.isArray(e[fe.month]))return-1<e[fe.month].indexOf(n.getMonth());if(e[fe.month]instanceof Date){var t=le.helper.sanitiseDate(e[fe.month]);return n.getMonth()==t.getMonth()&&n.getFullYear()==t.getFullYear()}}else if(e[fe.date]&&"day"===i){if(e[fe.date]instanceof Date)return le.helper.dateEqual(n,le.helper.sanitiseDate(e[fe.date]),i);if(Array.isArray(e[fe.date]))return e[fe.date].some(function(e){return le.helper.dateEqual(n,e,i)})}}))},isEnabled:function(t,n){return"day"!==n||(0===ce.enabledDates.length||ce.enabledDates.some(function(e){return"string"==typeof e&&(e=le.helper.sanitiseDate(e)),e instanceof Date?le.helper.dateEqual(t,e,n):null!==e&&"object"==typeof e&&e[fe.date]?le.helper.dateEqual(t,le.helper.sanitiseDate(e[fe.date]),n):void 0}))},findDayAsObject:function(t,n,e){if("day"===n||"month"===n||"year"===n)for(var i,o=0;o<e.length;o++){if("string"==typeof(i=e[o])&&(i=le.helper.sanitiseDate(i)),i instanceof Date&&le.helper.dateEqual(t,i,n)){var a={};return a[fe.date]=i,a}if(null!==i&&"object"==typeof i)if(i[fe.year]){if("number"==typeof i[fe.year]&&t.getFullYear()==i[fe.year])return i;if(Array.isArray(i[fe.year])&&-1<i[fe.year].indexOf(t.getFullYear()))return i}else if(i[fe.month]){if("number"==typeof i[fe.month]&&t.getMonth()==i[fe.month])return i;if(Array.isArray(i[fe.month])){if(-1<i[fe.month].indexOf(t.getMonth()))return i}else if(i[fe.month]instanceof Date){var r=le.helper.sanitiseDate(i[fe.month]);if(t.getMonth()==r.getMonth()&&t.getFullYear()==r.getFullYear())return i}}else if(i[fe.date]&&"day"===n){if(i[fe.date]instanceof Date&&le.helper.dateEqual(t,le.helper.sanitiseDate(i[fe.date]),n))return i;if(Array.isArray(i[fe.date])&&i[fe.date].some(function(e){return le.helper.dateEqual(t,e,n)}))return i}}return null},sanitiseDate:function(e){return e?(e instanceof Date||(e=n.date(""+e,ce)),!e||null===e||isNaN(e.getTime())?T:e):T},dateDiff:function(e,t,n){n=n||"day";var i="time"===ce.type,o="year"===n,a=o||"month"===n,r="minute"===n,s=r||"hour"===n;return e=new Date(i?2e3:e.getFullYear(),i?0:o?0:e.getMonth(),i?1:a?1:e.getDate(),s?e.getHours():0,r?ce.minTimeGap*Math.floor(e.getMinutes()/ce.minTimeGap):0),(t=new Date(i?2e3:t.getFullYear(),i?0:o?0:t.getMonth(),i?1:a?1:t.getDate(),s?t.getHours():0,r?ce.minTimeGap*Math.floor(t.getMinutes()/ce.minTimeGap):0)).getTime()-e.getTime()},dateEqual:function(e,t,n){return!!e&&!!t&&0===le.helper.dateDiff(e,t,n)},isDateInRange:function(e,t,n,i){if(!n&&!i){var o=le.get.startDate();n=o&&ce.minDate?new Date(Math.max(o,ce.minDate)):o||ce.minDate,i=ce.maxDate}return n=n&&new Date(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),ce.minTimeGap*Math.ceil(n.getMinutes()/ce.minTimeGap)),!(!e||n&&0<le.helper.dateDiff(e,n,t)||i&&0<le.helper.dateDiff(i,e,t))},dateInRange:function(e,t,n){if(!t&&!n){var i=le.get.startDate();t=i&&ce.minDate?new Date(Math.max(i,ce.minDate)):i||ce.minDate,n=ce.maxDate}t=t&&new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),ce.minTimeGap*Math.ceil(t.getMinutes()/ce.minTimeGap));var o="time"===ce.type;return e?t&&0<le.helper.dateDiff(e,t,"minute")?o?le.helper.mergeDateTime(e,t):t:n&&0<le.helper.dateDiff(n,e,"minute")?o?le.helper.mergeDateTime(e,n):n:e:e},mergeDateTime:function(e,t){return e&&t?new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes()):t},isTodayButton:function(e){return e.text()===ce.text.today}},setting:function(e,t){if(le.debug("Changing setting",e,t),pe.isPlainObject(e))pe.extend(!0,ce,e);else{if(t===T)return ce[e];pe.isPlainObject(ce[e])?pe.extend(!0,ce[e],t):ce[e]=t}},internal:function(e,t){if(pe.isPlainObject(e))pe.extend(!0,le,e);else{if(t===T)return le[e];le[e]=t}},debug:function(){!ce.silent&&ce.debug&&(ce.performance?le.performance.log(arguments):(le.debug=Function.prototype.bind.call(console.info,console,ce.name+":"),le.debug.apply(console,arguments)))},verbose:function(){!ce.silent&&ce.verbose&&ce.debug&&(ce.performance?le.performance.log(arguments):(le.verbose=Function.prototype.bind.call(console.info,console,ce.name+":"),le.verbose.apply(console,arguments)))},error:function(){ce.silent||(le.error=Function.prototype.bind.call(console.error,console,ce.name+":"),le.error.apply(console,arguments))},performance:{log:function(e){var t,n;ce.performance&&(n=(t=(new Date).getTime())-(v||t),v=t,b.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:d,"Execution Time":n})),clearTimeout(le.performance.timer),le.performance.timer=setTimeout(le.performance.display,500)},display:function(){var e=ce.name+":",n=0;v=!1,clearTimeout(le.performance.timer),pe.each(b,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",a&&(e+=" '"+a+"'"),(console.group!==T||console.table!==T)&&0<b.length&&(console.groupCollapsed(e),console.table?console.table(b):pe.each(b,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),b=[]}},invoke:function(i,e,t){var o,a,n,r=m;return e=e||C,t=d||t,"string"==typeof i&&r!==T&&(i=i.split(/[\. ]/),o=i.length-1,pe.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(pe.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==T)return a=r[n],!1;if(!pe.isPlainObject(r[t])||e==o)return r[t]!==T?a=r[t]:le.error(s.method,i),!1;r=r[t]}})),pe.isFunction(a)?n=a.apply(t,e):a!==T&&(n=a),Array.isArray(h)?h.push(n):h!==T?h=[h,n]:n!==T&&(h=n),a}},x?(m===T&&le.initialize(),le.invoke(y)):(m!==T&&m.invoke("destroy"),le.initialize())}),h!==T?h:this},pe.fn.calendar.settings={name:"Calendar",namespace:"calendar",silent:!1,debug:!1,verbose:!1,performance:!1,type:"datetime",firstDayOfWeek:0,constantHeight:!0,today:!1,closable:!0,monthFirst:!0,touchReadonly:!0,inline:!1,on:null,initialDate:null,startMode:!1,minDate:null,maxDate:null,ampm:!0,disableYear:!1,disableMonth:!1,disableMinute:!1,formatInput:!0,startCalendar:null,endCalendar:null,multiMonth:1,minTimeGap:5,showWeekNumbers:null,disabledDates:[],disabledDaysOfWeek:[],enabledDates:[],eventDates:[],centuryBreak:60,currentCentury:2e3,selectAdjacentDays:!1,popupOptions:{position:"bottom left",lastResort:"bottom left",prefer:"opposite",hideOnScroll:!1},text:{days:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",now:"Now",am:"AM",pm:"PM",weekNo:"Week"},formatter:{header:function(e,t,n){return"year"===t?n.formatter.yearHeader(e,n):"month"===t?n.formatter.monthHeader(e,n):"day"===t?n.formatter.dayHeader(e,n):"hour"===t?n.formatter.hourHeader(e,n):n.formatter.minuteHeader(e,n)},yearHeader:function(e,t){var n=10*Math.ceil(e.getFullYear()/10);return n-9+" - "+(2+n)},monthHeader:function(e,t){return e.getFullYear()},dayHeader:function(e,t){return t.text.months[e.getMonth()]+" "+e.getFullYear()},hourHeader:function(e,t){return t.formatter.date(e,t)},minuteHeader:function(e,t){return t.formatter.date(e,t)},dayColumnHeader:function(e,t){return t.text.days[e]},datetime:function(e,t){if(!e)return"";var n="time"===t.type?"":t.formatter.date(e,t),i=t.type.indexOf("time")<0?"":t.formatter.time(e,t,!1);return n+("datetime"===t.type?" ":"")+i},date:function(e,t){if(!e)return"";var n=e.getDate(),i=t.text.months[e.getMonth()],o=e.getFullYear();return"year"===t.type?o:"month"===t.type?i+" "+o:(t.monthFirst?i+" "+n:n+" "+i)+", "+o},time:function(e,t,n){if(!e)return"";var i=e.getHours(),o=e.getMinutes(),a="";return t.ampm&&(a=" "+(i<12?t.text.am:t.text.pm),i=0===i?12:12<i?i-12:i),i+":"+(o<10?"0":"")+o+a},today:function(e){return"date"===e.type?e.text.today:e.text.now},cell:function(e,t,n){}},parser:{date:function(e,t){if(e instanceof Date)return e;if(!e)return null;if(0===(e=String(e).trim()).length)return null;e.match(/^[0-9]{4}[\/\-\.][0-9]{2}[\/\-\.][0-9]{2}$/)&&(e+=" 00:00:00"),e=t.monthFirst||!e.match(/^[0-9]{2}[\/\-\.]/)?e:e.replace(/[\/\-\.]/g,"/").replace(/([0-9]+)\/([0-9]+)/,"$2/$1");var n,i,o,a=new Date(e);if(!isNaN(a.getDate()))return a;e=e.toLowerCase();var r,s,l,c=-1,u=-1,d=-1,f=-1,m=-1,g=T,p="time"===t.type,h=t.type.indexOf("time")<0,v=e.split(t.regExp.dateWords),b=e.split(t.regExp.dateNumbers);if(!h)for(g=0<=pe.inArray(t.text.am.toLowerCase(),v)||!(0<=pe.inArray(t.text.pm.toLowerCase(),v))&&T,n=0;n<b.length;n++)if(0<=(s=b[n]).indexOf(":")){if(u<0||c<0)for(l=s.split(":"),o=0;o<Math.min(2,l.length);o++)i=parseInt(l[o]),isNaN(i)&&(i=0),0===o?u=i%24:c=i%60;b.splice(n,1)}if(!p){for(n=0;n<v.length;n++)if(!((r=v[n]).length<=0)){for(i=0;i<t.text.months.length;i++)if(t.text.months[i].substring(0,r.length).toLowerCase()===r){f=i+1;break}if(0<=f)break}for(n=0;n<b.length;n++)if(i=parseInt(b[n]),!isNaN(i)&&i>=t.centuryBreak&&n===b.length-1){i<=99&&(i+=t.currentCentury-100),m=i,b.splice(n,1);break}if(f<0)for(n=0;n<b.length;n++)if(o=1<n||t.monthFirst?n:1===n?0:1,i=parseInt(b[o]),!isNaN(i)&&1<=i&&i<=12){f=i,b.splice(o,1);break}for(n=0;n<b.length;n++)if(i=parseInt(b[n]),!isNaN(i)&&1<=i&&i<=31){d=i,b.splice(n,1);break}if(m<0)for(n=b.length-1;0<=n;n--)if(i=parseInt(b[n]),!isNaN(i)){i<=99&&(i+=t.currentCentury),m=i,b.splice(n,1);break}}if(!h){if(u<0)for(n=0;n<b.length;n++)if(i=parseInt(b[n]),!isNaN(i)&&0<=i&&i<=23){u=i,b.splice(n,1);break}if(c<0)for(n=0;n<b.length;n++)if(i=parseInt(b[n]),!isNaN(i)&&0<=i&&i<=59){c=i,b.splice(n,1);break}}if(c<0&&u<0&&d<0&&f<0&&m<0)return null;c<0&&(c=0),u<0&&(u=0),d<0&&(d=1),f<0&&(f=1),m<0&&(m=(new Date).getFullYear()),g!==T&&(g?12===u&&(u=0):u<12&&(u+=12));var y=new Date(m,f-1,d,u,c);return y.getMonth()===f-1&&y.getFullYear()===m||(y=new Date(m,f,0,u,c)),isNaN(y.getTime())?null:y}},onBeforeChange:function(e,t,n){return!0},onChange:function(e,t,n){},onShow:function(){},onVisible:function(){},onHide:function(){},onHidden:function(){},onSelect:function(e,t){},isDisabled:function(e,t){return!1},selector:{popup:".ui.popup",input:"input",activator:"input",append:".inline.field,.inline.fields"},regExp:{dateWords:/[^A-Za-z\u00C0-\u024F]+/g,dateNumbers:/[^\d:]+/g},error:{popup:"UI Popup, a required component is not included in this page",method:"The method you called is not defined."},className:{calendar:"calendar",active:"active",popup:"ui popup",grid:"ui equal width grid",column:"column",table:"ui celled center aligned unstackable table",prev:"prev link",next:"next link",prevIcon:"chevron left icon",nextIcon:"chevron right icon",link:"link",cell:"link",disabledCell:"disabled",weekCell:"disabled",adjacentCell:"adjacent",activeCell:"active",rangeCell:"range",focusCell:"focus",todayCell:"today",today:"today link"},metadata:{date:"date",focusDate:"focusDate",startDate:"startDate",endDate:"endDate",minDate:"minDate",maxDate:"maxDate",mode:"mode",type:"type",monthOffset:"monthOffset",message:"message",class:"class",month:"month",year:"year"},eventClass:"blue"}}(jQuery,window,document),function(S,D,A,E){"use strict";S.isFunction=S.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},D=void 0!==D&&D.Math==Math?D:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),S.fn.checkbox=function(u){var d,e=S(this),f=e.selector||"",x=(new Date).getTime(),C=[],w=u,k="string"==typeof w,T=[].slice.call(arguments,1);return e.each(function(){var e,m,g=S.extend(!0,{},S.fn.checkbox.settings,u),t=g.className,n=g.namespace,p=g.selector,s=g.error,i="."+n,o="module-"+n,h=S(this),a=S(this).children(p.label),v=S(this).children(p.input),b=v[0],r=!1,y=!1,l=h.data(o),c=this;m={initialize:function(){m.verbose("Initializing checkbox",g),m.create.label(),m.bind.events(),m.set.tabbable(),m.hide.input(),m.observeChanges(),m.instantiate(),m.setup()},instantiate:function(){m.verbose("Storing instance of module",m),l=m,h.data(o,m)},destroy:function(){m.verbose("Destroying module"),m.unbind.events(),m.show.input(),h.removeData(o)},fix:{reference:function(){h.is(p.input)&&(m.debug("Behavior called on <input> adjusting invoked element"),h=h.closest(p.checkbox),m.refresh())}},setup:function(){m.set.initialLoad(),m.is.indeterminate()?(m.debug("Initial value is indeterminate"),m.indeterminate()):m.is.checked()?(m.debug("Initial value is checked"),m.check()):(m.debug("Initial value is unchecked"),m.uncheck()),m.remove.initialLoad()},refresh:function(){a=h.children(p.label),v=h.children(p.input),b=v[0]},hide:{input:function(){m.verbose("Modifying <input> z-index to be unselectable"),v.addClass(t.hidden)}},show:{input:function(){m.verbose("Modifying <input> z-index to be selectable"),v.removeClass(t.hidden)}},observeChanges:function(){"MutationObserver"in D&&((e=new MutationObserver(function(e){m.debug("DOM tree modified, updating selector cache"),m.refresh()})).observe(c,{childList:!0,subtree:!0}),m.debug("Setting up mutation observer",e))},attachEvents:function(e,t){var n=S(e);t=S.isFunction(m[t])?m[t]:m.toggle,0<n.length?(m.debug("Attaching checkbox events to element",e,t),n.on("click"+i,t)):m.error(s.notFound)},preventDefaultOnInputTarget:function(){"undefined"!=typeof event&&null!==event&&S(event.target).is(p.input)&&(m.verbose("Preventing default check action after manual check action"),event.preventDefault())},event:{change:function(e){m.should.ignoreCallbacks()||g.onChange.call(b)},click:function(e){var t=S(e.target);t.is(p.input)?m.verbose("Using default check action on initialized checkbox"):t.is(p.link)?m.debug("Clicking link inside checkbox, skipping toggle"):(m.toggle(),v.focus(),e.preventDefault())},keydown:function(e){var t=e.which,n=13,i=32,o=27,a=37,r=38,s=39,l=40,c=m.get.radios(),u=c.index(h),d=c.length,f=!1;if(t==a||t==r?f=(0===u?d:u)-1:t!=s&&t!=l||(f=u===d-1?0:u+1),!m.should.ignoreCallbacks()&&!1!==f){if(!1===g.beforeUnchecked.apply(b))return m.verbose("Option not allowed to be unchecked, cancelling key navigation"),!1;if(!1===g.beforeChecked.apply(S(c[f]).children(p.input)[0]))return m.verbose("Next option should not allow check, cancelling key navigation"),!1}y=t==o?(m.verbose("Escape key pressed blurring field"),v.blur(),!0):!(e.ctrlKey||!(t==i||t==n&&g.enableEnterKey))&&(m.verbose("Enter/space key pressed, toggling checkbox"),m.toggle(),!0)},keyup:function(e){y&&e.preventDefault()}},check:function(){m.should.allowCheck()&&(m.debug("Checking checkbox",v),m.set.checked(),m.should.ignoreCallbacks()||(g.onChecked.call(b),m.trigger.change()),m.preventDefaultOnInputTarget())},uncheck:function(){m.should.allowUncheck()&&(m.debug("Unchecking checkbox"),m.set.unchecked(),m.should.ignoreCallbacks()||(g.onUnchecked.call(b),m.trigger.change()),m.preventDefaultOnInputTarget())},indeterminate:function(){m.should.allowIndeterminate()?m.debug("Checkbox is already indeterminate"):(m.debug("Making checkbox indeterminate"),m.set.indeterminate(),m.should.ignoreCallbacks()||(g.onIndeterminate.call(b),m.trigger.change()))},determinate:function(){m.should.allowDeterminate()?m.debug("Checkbox is already determinate"):(m.debug("Making checkbox determinate"),m.set.determinate(),m.should.ignoreCallbacks()||(g.onDeterminate.call(b),m.trigger.change()))},enable:function(){m.is.enabled()?m.debug("Checkbox is already enabled"):(m.debug("Enabling checkbox"),m.set.enabled(),m.should.ignoreCallbacks()||(g.onEnable.call(b),g.onEnabled.call(b),m.trigger.change()))},disable:function(){m.is.disabled()?m.debug("Checkbox is already disabled"):(m.debug("Disabling checkbox"),m.set.disabled(),m.should.ignoreCallbacks()||(g.onDisable.call(b),g.onDisabled.call(b),m.trigger.change()))},get:{radios:function(){var e=m.get.name();return S('input[name="'+e+'"]').closest(p.checkbox)},otherRadios:function(){return m.get.radios().not(h)},name:function(){return v.attr("name")}},is:{initialLoad:function(){return r},radio:function(){return v.hasClass(t.radio)||"radio"==v.attr("type")},indeterminate:function(){return v.prop("indeterminate")!==E&&v.prop("indeterminate")},checked:function(){return v.prop("checked")!==E&&v.prop("checked")},disabled:function(){return v.prop("disabled")!==E&&v.prop("disabled")},enabled:function(){return!m.is.disabled()},determinate:function(){return!m.is.indeterminate()},unchecked:function(){return!m.is.checked()}},should:{allowCheck:function(){return m.is.determinate()&&m.is.checked()&&!m.is.initialLoad()?(m.debug("Should not allow check, checkbox is already checked"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeChecked.apply(b))||(m.debug("Should not allow check, beforeChecked cancelled"),!1)},allowUncheck:function(){return m.is.determinate()&&m.is.unchecked()&&!m.is.initialLoad()?(m.debug("Should not allow uncheck, checkbox is already unchecked"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeUnchecked.apply(b))||(m.debug("Should not allow uncheck, beforeUnchecked cancelled"),!1)},allowIndeterminate:function(){return m.is.indeterminate()&&!m.is.initialLoad()?(m.debug("Should not allow indeterminate, checkbox is already indeterminate"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeIndeterminate.apply(b))||(m.debug("Should not allow indeterminate, beforeIndeterminate cancelled"),!1)},allowDeterminate:function(){return m.is.determinate()&&!m.is.initialLoad()?(m.debug("Should not allow determinate, checkbox is already determinate"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeDeterminate.apply(b))||(m.debug("Should not allow determinate, beforeDeterminate cancelled"),!1)},ignoreCallbacks:function(){return r&&!g.fireOnInit}},can:{change:function(){return!(h.hasClass(t.disabled)||h.hasClass(t.readOnly)||v.prop("disabled")||v.prop("readonly"))},uncheck:function(){return"boolean"==typeof g.uncheckable?g.uncheckable:!m.is.radio()}},set:{initialLoad:function(){r=!0},checked:function(){m.verbose("Setting class to checked"),h.removeClass(t.indeterminate).addClass(t.checked),m.is.radio()&&m.uncheckOthers(),m.is.indeterminate()||!m.is.checked()?(m.verbose("Setting state to checked",b),v.prop("indeterminate",!1).prop("checked",!0)):m.debug("Input is already checked, skipping input property change")},unchecked:function(){m.verbose("Removing checked class"),h.removeClass(t.indeterminate).removeClass(t.checked),m.is.indeterminate()||!m.is.unchecked()?(m.debug("Setting state to unchecked"),v.prop("indeterminate",!1).prop("checked",!1)):m.debug("Input is already unchecked")},indeterminate:function(){m.verbose("Setting class to indeterminate"),h.addClass(t.indeterminate),m.is.indeterminate()?m.debug("Input is already indeterminate, skipping input property change"):(m.debug("Setting state to indeterminate"),v.prop("indeterminate",!0))},determinate:function(){m.verbose("Removing indeterminate class"),h.removeClass(t.indeterminate),m.is.determinate()?m.debug("Input is already determinate, skipping input property change"):(m.debug("Setting state to determinate"),v.prop("indeterminate",!1))},disabled:function(){m.verbose("Setting class to disabled"),h.addClass(t.disabled),m.is.disabled()?m.debug("Input is already disabled, skipping input property change"):(m.debug("Setting state to disabled"),v.prop("disabled","disabled"))},enabled:function(){m.verbose("Removing disabled class"),h.removeClass(t.disabled),m.is.enabled()?m.debug("Input is already enabled, skipping input property change"):(m.debug("Setting state to enabled"),v.prop("disabled",!1))},tabbable:function(){m.verbose("Adding tabindex to checkbox"),v.attr("tabindex")===E&&v.attr("tabindex",0)}},remove:{initialLoad:function(){r=!1}},trigger:{change:function(){var e=A.createEvent("HTMLEvents"),t=v[0];t&&(m.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},create:{label:function(){0<v.prevAll(p.label).length?(v.prev(p.label).detach().insertAfter(v),m.debug("Moving existing label",a)):m.has.label()||(a=S("<label>").insertAfter(v),m.debug("Creating label",a))}},has:{label:function(){return 0<a.length}},bind:{events:function(){m.verbose("Attaching checkbox events"),h.on("click"+i,m.event.click).on("change"+i,m.event.change).on("keydown"+i,p.input,m.event.keydown).on("keyup"+i,p.input,m.event.keyup)}},unbind:{events:function(){m.debug("Removing events"),h.off(i)}},uncheckOthers:function(){var e=m.get.otherRadios();m.debug("Unchecking other radios",e),e.removeClass(t.checked)},toggle:function(){m.can.change()?m.is.indeterminate()||m.is.unchecked()?(m.debug("Currently unchecked"),m.check()):m.is.checked()&&m.can.uncheck()&&(m.debug("Currently checked"),m.uncheck()):m.is.radio()||m.debug("Checkbox is read-only or disabled, ignoring toggle")},setting:function(e,t){if(m.debug("Changing setting",e,t),S.isPlainObject(e))S.extend(!0,g,e);else{if(t===E)return g[e];S.isPlainObject(g[e])?S.extend(!0,g[e],t):g[e]=t}},internal:function(e,t){if(S.isPlainObject(e))S.extend(!0,m,e);else{if(t===E)return m[e];m[e]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)))},error:function(){g.silent||(m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments))},performance:{log:function(e){var t,n;g.performance&&(n=(t=(new Date).getTime())-(x||t),x=t,C.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:c,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var e=g.name+":",n=0;x=!1,clearTimeout(m.performance.timer),S.each(C,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",f&&(e+=" '"+f+"'"),(console.group!==E||console.table!==E)&&0<C.length&&(console.groupCollapsed(e),console.table?console.table(C):S.each(C,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),C=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||T,t=c||t,"string"==typeof i&&r!==E&&(i=i.split(/[\. ]/),o=i.length-1,S.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(S.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==E)return a=r[n],!1;if(!S.isPlainObject(r[t])||e==o)return r[t]!==E?a=r[t]:m.error(s.method,i),!1;r=r[t]}})),S.isFunction(a)?n=a.apply(t,e):a!==E&&(n=a),Array.isArray(d)?d.push(n):d!==E?d=[d,n]:n!==E&&(d=n),a}},k?(l===E&&m.initialize(),m.invoke(w)):(l!==E&&l.invoke("destroy"),m.initialize())}),d!==E?d:this},S.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",silent:!1,debug:!1,verbose:!0,performance:!0,uncheckable:"auto",fireOnInit:!1,enableEnterKey:!0,onChange:function(){},beforeChecked:function(){},beforeUnchecked:function(){},beforeDeterminate:function(){},beforeIndeterminate:function(){},onChecked:function(){},onUnchecked:function(){},onDeterminate:function(){},onIndeterminate:function(){},onEnable:function(){},onDisable:function(){},onEnabled:function(){},onDisabled:function(){},className:{checked:"checked",indeterminate:"indeterminate",disabled:"disabled",hidden:"hidden",radio:"radio",readOnly:"read-only"},error:{method:"The method you called is not defined"},selector:{checkbox:".ui.checkbox",label:"label, .box",input:'input[type="checkbox"], input[type="radio"]',link:"a[href]"}}}(jQuery,window,document),function(k,e,T,S){"use strict";k.isFunction=k.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),k.fn.dimmer=function(p){var h,v=k(this),b=(new Date).getTime(),y=[],x=p,C="string"==typeof x,w=[].slice.call(arguments,1);return v.each(function(){var a,t,s,r=k.isPlainObject(p)?k.extend(!0,{},k.fn.dimmer.settings,p):k.extend({},k.fn.dimmer.settings),n=r.selector,e=r.namespace,i=r.className,l=r.error,o="."+e,c="module-"+e,u=v.selector||"",d="ontouchstart"in T.documentElement?"touchstart":"click",f=k(this),m=this,g=f.data(c);(s={preinitialize:function(){a=s.is.dimmer()?(t=f.parent(),f):(t=f,s.has.dimmer()?r.dimmerName?t.find(n.dimmer).filter("."+r.dimmerName):t.find(n.dimmer):s.create())},initialize:function(){s.debug("Initializing dimmer",r),s.bind.events(),s.set.dimmable(),s.instantiate()},instantiate:function(){s.verbose("Storing instance of module",s),g=s,f.data(c,g)},destroy:function(){s.verbose("Destroying previous module",a),s.unbind.events(),s.remove.variation(),t.off(o)},bind:{events:function(){"hover"==r.on?t.on("mouseenter"+o,s.show).on("mouseleave"+o,s.hide):"click"==r.on&&t.on(d+o,s.toggle),s.is.page()&&(s.debug("Setting as a page dimmer",t),s.set.pageDimmer()),s.is.closable()&&(s.verbose("Adding dimmer close event",a),t.on(d+o,n.dimmer,s.event.click))}},unbind:{events:function(){f.removeData(c),t.off(o)}},event:{click:function(e){s.verbose("Determining if event occured on dimmer",e),0!==a.find(e.target).length&&!k(e.target).is(n.content)||(s.hide(),e.stopImmediatePropagation())}},addContent:function(e){var t=k(e);s.debug("Add content to dimmer",t),t.parent()[0]!==a[0]&&t.detach().appendTo(a)},create:function(){var e=k(r.template.dimmer(r));return r.dimmerName&&(s.debug("Creating named dimmer",r.dimmerName),e.addClass(r.dimmerName)),e.appendTo(t),e},show:function(e){e=k.isFunction(e)?e:function(){},s.debug("Showing dimmer",a,r),s.set.variation(),s.is.dimmed()&&!s.is.animating()||!s.is.enabled()?s.debug("Dimmer is already shown or disabled"):(s.animate.show(e),r.onShow.call(m),r.onChange.call(m))},hide:function(e){e=k.isFunction(e)?e:function(){},s.is.dimmed()||s.is.animating()?(s.debug("Hiding dimmer",a),s.animate.hide(e),r.onHide.call(m),r.onChange.call(m)):s.debug("Dimmer is not visible")},toggle:function(){s.verbose("Toggling dimmer visibility",a),s.is.dimmed()?s.is.closable()&&s.hide():s.show()},animate:{show:function(e){e=k.isFunction(e)?e:function(){},r.useCSS&&k.fn.transition!==S&&a.transition("is supported")?(r.useFlex?(s.debug("Using flex dimmer"),s.remove.legacy()):(s.debug("Using legacy non-flex dimmer"),s.set.legacy()),"auto"!==r.opacity&&s.set.opacity(),a.transition({displayType:r.useFlex?"flex":"block",animation:r.transition+" in",queue:!1,duration:s.get.duration(),useFailSafe:!0,onStart:function(){s.set.dimmed()},onComplete:function(){s.set.active(),e()}})):(s.verbose("Showing dimmer animation with javascript"),s.set.dimmed(),"auto"==r.opacity&&(r.opacity=.8),a.stop().css({opacity:0,width:"100%",height:"100%"}).fadeTo(s.get.duration(),r.opacity,function(){a.removeAttr("style"),s.set.active(),e()}))},hide:function(e){e=k.isFunction(e)?e:function(){},r.useCSS&&k.fn.transition!==S&&a.transition("is supported")?(s.verbose("Hiding dimmer with css"),a.transition({displayType:r.useFlex?"flex":"block",animation:r.transition+" out",queue:!1,duration:s.get.duration(),useFailSafe:!0,onComplete:function(){s.remove.dimmed(),s.remove.variation(),s.remove.active(),e()}})):(s.verbose("Hiding dimmer with javascript"),a.stop().fadeOut(s.get.duration(),function(){s.remove.dimmed(),s.remove.active(),a.removeAttr("style"),e()}))}},get:{dimmer:function(){return a},duration:function(){return"object"==typeof r.duration?s.is.active()?r.duration.hide:r.duration.show:r.duration}},has:{dimmer:function(){return r.dimmerName?0<f.find(n.dimmer).filter("."+r.dimmerName).length:0<f.find(n.dimmer).length}},is:{active:function(){return a.hasClass(i.active)},animating:function(){return a.is(":animated")||a.hasClass(i.animating)},closable:function(){return"auto"==r.closable?"hover"!=r.on:r.closable},dimmer:function(){return f.hasClass(i.dimmer)},dimmable:function(){return f.hasClass(i.dimmable)},dimmed:function(){return t.hasClass(i.dimmed)},disabled:function(){return t.hasClass(i.disabled)},enabled:function(){return!s.is.disabled()},page:function(){return t.is("body")},pageDimmer:function(){return a.hasClass(i.pageDimmer)}},can:{show:function(){return!a.hasClass(i.disabled)}},set:{opacity:function(e){var t=a.css("background-color"),n=t.split(","),i=n&&3==n.length,o=n&&4==n.length;e=0===r.opacity?0:r.opacity||e,t=i||o?(n[3]=e+")",n.join(",")):"rgba(0, 0, 0, "+e+")",s.debug("Setting opacity to",e),a.css("background-color",t)},legacy:function(){a.addClass(i.legacy)},active:function(){a.addClass(i.active)},dimmable:function(){t.addClass(i.dimmable)},dimmed:function(){t.addClass(i.dimmed)},pageDimmer:function(){a.addClass(i.pageDimmer)},disabled:function(){a.addClass(i.disabled)},variation:function(e){(e=e||r.variation)&&a.addClass(e)}},remove:{active:function(){a.removeClass(i.active)},legacy:function(){a.removeClass(i.legacy)},dimmed:function(){t.removeClass(i.dimmed)},disabled:function(){a.removeClass(i.disabled)},variation:function(e){(e=e||r.variation)&&a.removeClass(e)}},setting:function(e,t){if(s.debug("Changing setting",e,t),k.isPlainObject(e))k.extend(!0,r,e);else{if(t===S)return r[e];k.isPlainObject(r[e])?k.extend(!0,r[e],t):r[e]=t}},internal:function(e,t){if(k.isPlainObject(e))k.extend(!0,s,e);else{if(t===S)return s[e];s[e]=t}},debug:function(){!r.silent&&r.debug&&(r.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,r.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!r.silent&&r.verbose&&r.debug&&(r.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,r.name+":"),s.verbose.apply(console,arguments)))},error:function(){r.silent||(s.error=Function.prototype.bind.call(console.error,console,r.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;r.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:m,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=r.name+":",n=0;b=!1,clearTimeout(s.performance.timer),k.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",u&&(e+=" '"+u+"'"),1<v.length&&(e+=" ("+v.length+")"),(console.group!==S||console.table!==S)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):k.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||w,t=m||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,k.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(k.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!k.isPlainObject(r[t])||e==o)return r[t]!==S?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),k.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),Array.isArray(h)?h.push(n):h!==S?h=[h,n]:n!==S&&(h=n),a}}).preinitialize(),C?(g===S&&s.initialize(),s.invoke(x)):(g!==S&&g.invoke("destroy"),s.initialize())}),h!==S?h:this},k.fn.dimmer.settings={name:"Dimmer",namespace:"dimmer",silent:!1,debug:!1,verbose:!1,performance:!0,useFlex:!0,dimmerName:!1,variation:!1,closable:"auto",useCSS:!0,transition:"fade",on:!1,opacity:"auto",duration:{show:500,hide:500},displayLoader:!1,loaderText:!1,loaderVariation:"",onChange:function(){},onShow:function(){},onHide:function(){},error:{method:"The method you called is not defined."},className:{active:"active",animating:"animating",dimmable:"dimmable",dimmed:"dimmed",dimmer:"dimmer",disabled:"disabled",hide:"hide",legacy:"legacy",pageDimmer:"page",show:"show",loader:"ui loader"},selector:{dimmer:"> .ui.dimmer",content:".ui.dimmer > .content, .ui.dimmer > .content > .center"},template:{dimmer:function(e){var t,n=k("<div/>").addClass("ui dimmer");return e.displayLoader&&(t=k("<div/>").addClass(e.className.loader).addClass(e.loaderVariation),e.loaderText&&(t.text(e.loaderText),t.addClass("text")),n.append(t)),n}}}}(jQuery,window,document),function(_,ee,te,ne){"use strict";_.isFunction=_.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},ee=void 0!==ee&&ee.Math==Math?ee:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),_.fn.dropdown=function(H){var U,B=_(this),W=_(te),Y=B.selector||"",Q="ontouchstart"in te.documentElement,X=Q?"touchstart":"click",$=(new Date).getTime(),G=[],K=H,J="string"==typeof K,Z=[].slice.call(arguments,1);return B.each(function(n){var c,e,t,i,o,a,r,s,p,g=_.isPlainObject(H)?_.extend(!0,{},_.fn.dropdown.settings,H):_.extend({},_.fn.dropdown.settings),h=g.className,u=g.message,l=g.fields,v=g.keys,b=g.metadata,d=g.namespace,f=g.regExp,y=g.selector,m=g.error,x=g.templates,C="."+d,w="module-"+d,k=_(this),T=_(g.context),S=k.find(y.text),D=k.find(y.search),A=k.find(y.sizer),E=k.find(y.input),F=k.find(y.icon),P=k.find(y.clearIcon),O=0<k.prev().find(y.text).length?k.prev().find(y.text):k.prev(),R=k.children(y.menu),M=R.find(y.item),I=g.hideDividers?M.parent().children(y.divider):_(),j=!1,q=!1,L=!1,V=!1,z=this,N=k.data(w);p={initialize:function(){p.debug("Initializing dropdown",g),p.is.alreadySetup()?p.setup.reference():(g.ignoreDiacritics&&!String.prototype.normalize&&(g.ignoreDiacritics=!1,p.error(m.noNormalize,z)),p.setup.layout(),g.values&&(p.set.initialLoad(),p.change.values(g.values),p.remove.initialLoad()),p.refreshData(),p.save.defaults(),p.restore.selected(),p.create.id(),p.bind.events(),p.observeChanges(),p.instantiate())},instantiate:function(){p.verbose("Storing instance of dropdown",p),N=p,k.data(w,p)},destroy:function(){p.verbose("Destroying previous dropdown",k),p.remove.tabbable(),p.remove.active(),R.transition("stop all"),R.removeClass(h.visible).addClass(h.hidden),k.off(C).removeData(w),R.off(C),W.off(o),p.disconnect.menuObserver(),p.disconnect.selectObserver()},observeChanges:function(){"MutationObserver"in ee&&(r=new MutationObserver(p.event.select.mutation),s=new MutationObserver(p.event.menu.mutation),p.debug("Setting up mutation observer",r,s),p.observe.select(),p.observe.menu())},disconnect:{menuObserver:function(){s&&s.disconnect()},selectObserver:function(){r&&r.disconnect()}},observe:{select:function(){p.has.input()&&r&&r.observe(k[0],{childList:!0,subtree:!0})},menu:function(){p.has.menu()&&s&&s.observe(R[0],{childList:!0,subtree:!0})}},create:{id:function(){a=(Math.random().toString(16)+"000000000").substr(2,8),o="."+a,p.verbose("Creating unique id for element",a)},userChoice:function(e){var n,i,o;return!!(e=e||p.get.userValues())&&(e=Array.isArray(e)?e:[e],_.each(e,function(e,t){!1===p.get.item(t)&&(o=g.templates.addition(p.add.variables(u.addResult,t)),i=_("<div />").html(o).attr("data-"+b.value,t).attr("data-"+b.text,t).addClass(h.addition).addClass(h.item),g.hideAdditions&&i.addClass(h.hidden),n=n===ne?i:n.add(i),p.verbose("Creating user choices for value",t,i))}),n)},userLabels:function(e){var t=p.get.userValues();t&&(p.debug("Adding user labels",t),_.each(t,function(e,t){p.verbose("Adding custom user value"),p.add.label(t,t)}))},menu:function(){R=_("<div />").addClass(h.menu).appendTo(k)},sizer:function(){A=_("<span />").addClass(h.sizer).insertAfter(D)}},search:function(e){e=e!==ne?e:p.get.query(),p.verbose("Searching for query",e),p.has.minCharacters(e)?p.filter(e):p.hide(null,!0)},select:{firstUnfiltered:function(){p.verbose("Selecting first non-filtered element"),p.remove.selectedItem(),M.not(y.unselectable).not(y.addition+y.hidden).eq(0).addClass(h.selected)},nextAvailable:function(e){var t=(e=e.eq(0)).nextAll(y.item).not(y.unselectable).eq(0),n=e.prevAll(y.item).not(y.unselectable).eq(0);0<t.length?(p.verbose("Moving selection to",t),t.addClass(h.selected)):(p.verbose("Moving selection to",n),n.addClass(h.selected))}},setup:{api:function(){var e={debug:g.debug,urlData:{value:p.get.value(),query:p.get.query()},on:!1};p.verbose("First request, initializing API"),k.api(e)},layout:function(){k.is("select")&&(p.setup.select(),p.setup.returnedObject()),p.has.menu()||p.create.menu(),p.is.selection()&&p.is.clearable()&&!p.has.clearItem()&&(p.verbose("Adding clear icon"),P=_("<i />").addClass("remove icon").insertBefore(S)),p.is.search()&&!p.has.search()&&(p.verbose("Adding search input"),D=_("<input />").addClass(h.search).prop("autocomplete","off").insertBefore(S)),p.is.multiple()&&p.is.searchSelection()&&!p.has.sizer()&&p.create.sizer(),g.allowTab&&p.set.tabbable()},select:function(){var e=p.get.selectValues();p.debug("Dropdown initialized on a select",e),k.is("select")&&(E=k),0<E.parent(y.dropdown).length?(p.debug("UI dropdown already exists. Creating dropdown menu only"),k=E.closest(y.dropdown),p.has.menu()||p.create.menu(),R=k.children(y.menu),p.setup.menu(e)):(p.debug("Creating entire dropdown from select"),k=_("<div />").attr("class",E.attr("class")).addClass(h.selection).addClass(h.dropdown).html(x.dropdown(e,l,g.preserveHTML,g.className)).insertBefore(E),E.hasClass(h.multiple)&&!1===E.prop("multiple")&&(p.error(m.missingMultiple),E.prop("multiple",!0)),E.is("[multiple]")&&p.set.multiple(),E.prop("disabled")&&(p.debug("Disabling dropdown"),k.addClass(h.disabled)),E.removeAttr("required").removeAttr("class").detach().prependTo(k)),p.refresh()},menu:function(e){R.html(x.menu(e,l,g.preserveHTML,g.className)),M=R.find(y.item),I=g.hideDividers?M.parent().children(y.divider):_()},reference:function(){p.debug("Dropdown behavior was called on select, replacing with closest dropdown"),k=k.parent(y.dropdown),N=k.data(w),z=k.get(0),p.refresh(),p.setup.returnedObject()},returnedObject:function(){var e=B.slice(0,n),t=B.slice(n+1);B=e.add(k).add(t)}},refresh:function(){p.refreshSelectors(),p.refreshData()},refreshItems:function(){M=R.find(y.item),I=g.hideDividers?M.parent().children(y.divider):_()},refreshSelectors:function(){p.verbose("Refreshing selector cache"),S=k.find(y.text),D=k.find(y.search),E=k.find(y.input),F=k.find(y.icon),O=0<k.prev().find(y.text).length?k.prev().find(y.text):k.prev(),R=k.children(y.menu),M=R.find(y.item),I=g.hideDividers?M.parent().children(y.divider):_()},refreshData:function(){p.verbose("Refreshing cached metadata"),M.removeData(b.text).removeData(b.value)},clearData:function(){p.verbose("Clearing metadata"),M.removeData(b.text).removeData(b.value),k.removeData(b.defaultText).removeData(b.defaultValue).removeData(b.placeholderText)},toggle:function(){p.verbose("Toggling menu visibility"),p.is.active()?p.hide():p.show()},show:function(e,t){if(e=_.isFunction(e)?e:function(){},!p.can.show()&&p.is.remote()&&(p.debug("No API results retrieved, searching before show"),p.queryRemote(p.get.query(),p.show)),p.can.show()&&!p.is.active()){if(p.debug("Showing dropdown"),!p.has.message()||p.has.maxSelections()||p.has.allResultsFiltered()||p.remove.message(),p.is.allFiltered())return!0;!1!==g.onShow.call(z)&&p.animate.show(function(){p.can.click()&&p.bind.intent(),p.has.search()&&!t&&p.focusSearch(),p.set.visible(),e.call(z)})}},hide:function(e,t){e=_.isFunction(e)?e:function(){},p.is.active()&&!p.is.animatingOutward()?(p.debug("Hiding dropdown"),!1!==g.onHide.call(z)&&p.animate.hide(function(){p.remove.visible(),p.is.focusedOnSearch()&&!0!==t&&D.blur(),e.call(z)})):p.can.click()&&p.unbind.intent(),V=!1},hideOthers:function(){p.verbose("Finding other dropdowns to hide"),B.not(k).has(y.menu+"."+h.visible).dropdown("hide")},hideMenu:function(){p.verbose("Hiding menu  instantaneously"),p.remove.active(),p.remove.visible(),R.transition("hide")},hideSubMenus:function(){var e=R.children(y.item).find(y.menu);p.verbose("Hiding sub menus",e),e.transition("hide")},bind:{events:function(){p.bind.keyboardEvents(),p.bind.inputEvents(),p.bind.mouseEvents()},keyboardEvents:function(){p.verbose("Binding keyboard events"),k.on("keydown"+C,p.event.keydown),p.has.search()&&k.on(p.get.inputEvent()+C,y.search,p.event.input),p.is.multiple()&&W.on("keydown"+o,p.event.document.keydown)},inputEvents:function(){p.verbose("Binding input change events"),k.on("change"+C,y.input,p.event.change)},mouseEvents:function(){p.verbose("Binding mouse events"),p.is.multiple()&&k.on(X+C,y.label,p.event.label.click).on(X+C,y.remove,p.event.remove.click),p.is.searchSelection()?(k.on("mousedown"+C,p.event.mousedown).on("mouseup"+C,p.event.mouseup).on("mousedown"+C,y.menu,p.event.menu.mousedown).on("mouseup"+C,y.menu,p.event.menu.mouseup).on(X+C,y.icon,p.event.icon.click).on(X+C,y.clearIcon,p.event.clearIcon.click).on("focus"+C,y.search,p.event.search.focus).on(X+C,y.search,p.event.search.focus).on("blur"+C,y.search,p.event.search.blur).on(X+C,y.text,p.event.text.focus),p.is.multiple()&&k.on(X+C,p.event.click)):("click"==g.on?k.on(X+C,y.icon,p.event.icon.click).on(X+C,p.event.test.toggle):"hover"==g.on?k.on("mouseenter"+C,p.delay.show).on("mouseleave"+C,p.delay.hide):k.on(g.on+C,p.toggle),k.on("mousedown"+C,p.event.mousedown).on("mouseup"+C,p.event.mouseup).on("focus"+C,p.event.focus).on(X+C,y.clearIcon,p.event.clearIcon.click),p.has.menuSearch()?k.on("blur"+C,y.search,p.event.search.blur):k.on("blur"+C,p.event.blur)),R.on((Q?"touchstart":"mouseenter")+C,y.item,p.event.item.mouseenter).on("mouseleave"+C,y.item,p.event.item.mouseleave).on("click"+C,y.item,p.event.item.click)},intent:function(){p.verbose("Binding hide intent event to document"),Q&&W.on("touchstart"+o,p.event.test.touch).on("touchmove"+o,p.event.test.touch),W.on(X+o,p.event.test.hide)}},unbind:{intent:function(){p.verbose("Removing hide intent event from document"),Q&&W.off("touchstart"+o).off("touchmove"+o),W.off(X+o)}},filter:function(e){function t(){p.is.multiple()&&p.filterActive(),(e||!e&&0==p.get.activeItem().length)&&p.select.firstUnfiltered(),p.has.allResultsFiltered()?g.onNoResults.call(z,n)?g.allowAdditions?g.hideAdditions&&(p.verbose("User addition with no menu, setting empty style"),p.set.empty(),p.hideMenu()):(p.verbose("All items filtered, showing message",n),p.add.message(u.noResults)):(p.verbose("All items filtered, hiding dropdown",n),p.hideMenu()):(p.remove.empty(),p.remove.message()),g.allowAdditions&&p.add.userSuggestion(p.escape.htmlEntities(e)),p.is.searchSelection()&&p.can.show()&&p.is.focusedOnSearch()&&p.show()}var n=e!==ne?e:p.get.query();g.useLabels&&p.has.maxSelections()||(g.apiSettings?p.can.useAPI()?p.queryRemote(n,function(){g.filterRemoteData&&p.filterItems(n);var e=E.val();Array.isArray(e)||(e=e&&""!==e?e.split(g.delimiter):[]),_.each(e,function(e,t){M.filter('[data-value="'+t+'"]').addClass(h.filtered)}),t()}):p.error(m.noAPI):(p.filterItems(n),t()))},queryRemote:function(e,n){var t={errorDuration:!1,cache:"local",throttle:g.throttle,urlData:{query:e},onError:function(){p.add.message(u.serverError),n()},onFailure:function(){p.add.message(u.serverError),n()},onSuccess:function(e){var t=e[l.remoteValues];Array.isArray(t)||(t=[]),p.remove.message(),p.setup.menu({values:t}),0!==t.length||g.allowAdditions||p.add.message(u.noResults),n()}};k.api("get request")||p.setup.api(),t=_.extend(!0,{},t,g.apiSettings),k.api("setting",t).api("query")},filterItems:function(e){var i=p.remove.diacritics(e!==ne?e:p.get.query()),o=null,t=p.escape.string(i),n=(g.ignoreSearchCase?"i":"")+"gm",a=new RegExp("^"+t,n);p.has.query()&&(o=[],p.verbose("Searching for matching values",i),M.each(function(){var e,t,n=_(this);if(n.hasClass(h.unfilterable))return o.push(this),!0;if("both"===g.match||"text"===g.match){if(-1!==(e=p.remove.diacritics(String(p.get.choiceText(n,!1)))).search(a))return o.push(this),!0;if("exact"===g.fullTextSearch&&p.exactSearch(i,e))return o.push(this),!0;if(!0===g.fullTextSearch&&p.fuzzySearch(i,e))return o.push(this),!0}if("both"===g.match||"value"===g.match){if(-1!==(t=p.remove.diacritics(String(p.get.choiceValue(n,e)))).search(a))return o.push(this),!0;if("exact"===g.fullTextSearch&&p.exactSearch(i,t))return o.push(this),!0;if(!0===g.fullTextSearch&&p.fuzzySearch(i,t))return o.push(this),!0}})),p.debug("Showing only matched items",i),p.remove.filteredItem(),o&&M.not(o).addClass(h.filtered),p.has.query()?!0===g.hideDividers?I.addClass(h.hidden):"empty"===g.hideDividers&&I.removeClass(h.hidden).filter(function(){var e=_(this).nextUntil(y.item);return 0===(e.length?e:_(this)).nextUntil(y.divider).filter(y.item+":not(."+h.filtered+")").length}).addClass(h.hidden):I.removeClass(h.hidden)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if(e=g.ignoreSearchCase?e.toLowerCase():e,t=g.ignoreSearchCase?t.toLowerCase():t,n<i)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},exactSearch:function(e,t){return e=g.ignoreSearchCase?e.toLowerCase():e,-1<(t=g.ignoreSearchCase?t.toLowerCase():t).indexOf(e)},filterActive:function(){g.useLabels&&M.filter("."+h.active).addClass(h.filtered)},focusSearch:function(e){p.has.search()&&!p.is.focusedOnSearch()&&(e?(k.off("focus"+C,y.search),D.focus(),k.on("focus"+C,y.search,p.event.search.focus)):D.focus())},blurSearch:function(){p.has.search()&&D.blur()},forceSelection:function(){var e=M.not(h.filtered).filter("."+h.selected).eq(0),t=M.not(h.filtered).filter("."+h.active).eq(0),n=0<e.length?e:t,i=0<n.length;g.allowAdditions||i&&!p.is.multiple()?(p.debug("Forcing partial selection to selected item",n),p.event.item.click.call(n,{},!0)):p.remove.searchTerm()},change:{values:function(e){g.allowAdditions||p.clear(),p.debug("Creating dropdown with specified values",e),p.setup.menu({values:e}),_.each(e,function(e,t){if(1==t.selected&&(p.debug("Setting initial selection to",t[l.value]),p.set.selected(t[l.value]),!p.is.multiple()))return!1}),p.has.selectInput()&&(p.disconnect.selectObserver(),E.html(""),E.append("<option disabled selected value></option>"),_.each(e,function(e,t){var n=g.templates.deQuote(t[l.value]),i=g.templates.escape(t[l.name]||"",g.preserveHTML);E.append('<option value="'+n+'">'+i+"</option>")}),p.observe.select())}},event:{change:function(){L||(p.debug("Input changed, updating selection"),p.set.selected())},focus:function(){g.showOnFocus&&!j&&p.is.hidden()&&!t&&p.show()},blur:function(e){t=te.activeElement===this,j||t||(p.remove.activeLabel(),p.hide())},mousedown:function(){p.is.searchSelection()?i=!0:j=!0},mouseup:function(){p.is.searchSelection()?i=!1:j=!1},click:function(e){_(e.target).is(k)&&(p.is.focusedOnSearch()?p.show():p.focusSearch())},search:{focus:function(e){j=!0,p.is.multiple()&&p.remove.activeLabel(),(g.showOnFocus||"focus"!==e.type&&"focusin"!==e.type)&&p.search()},blur:function(e){t=te.activeElement===this,p.is.searchSelection()&&!i&&(q||t||(g.forceSelection?p.forceSelection():g.allowAdditions||p.remove.searchTerm(),p.hide())),i=!1}},clearIcon:{click:function(e){p.clear(),p.is.searchSelection()&&p.remove.searchTerm(),p.hide(),e.stopPropagation()}},icon:{click:function(e){V=!0,p.has.search()?p.is.active()?p.blurSearch():g.showOnFocus?p.focusSearch():p.toggle():p.toggle()}},text:{focus:function(e){j=!0,p.focusSearch()}},input:function(e){(p.is.multiple()||p.is.searchSelection())&&p.set.filtered(),clearTimeout(p.timer),p.timer=setTimeout(p.search,g.delay.search)},label:{click:function(e){var t=_(this),n=k.find(y.label),i=n.filter("."+h.active),o=t.nextAll("."+h.active),a=t.prevAll("."+h.active),r=0<o.length?t.nextUntil(o).add(i).add(t):t.prevUntil(a).add(i).add(t);e.shiftKey?(i.removeClass(h.active),r.addClass(h.active)):e.ctrlKey?t.toggleClass(h.active):(i.removeClass(h.active),t.addClass(h.active)),g.onLabelSelect.apply(this,n.filter("."+h.active))}},remove:{click:function(){var e=_(this).parent();e.hasClass(h.active)?p.remove.activeLabels():p.remove.activeLabels(e)}},test:{toggle:function(e){var t=p.is.multiple()?p.show:p.toggle;p.is.bubbledLabelClick(e)||p.is.bubbledIconClick(e)||p.determine.eventOnElement(e,t)&&e.preventDefault()},touch:function(e){p.determine.eventOnElement(e,function(){"touchstart"==e.type?p.timer=setTimeout(function(){p.hide()},g.delay.touch):"touchmove"==e.type&&clearTimeout(p.timer)}),e.stopPropagation()},hide:function(e){p.determine.eventInModule(e,p.hide)&&z.id&&_(e.target).attr("for")===z.id&&e.preventDefault()}},select:{mutation:function(e){p.debug("<select> modified, recreating menu"),p.is.selectMutation(e)&&(p.disconnect.selectObserver(),p.refresh(),p.setup.select(),p.set.selected(),p.observe.select())}},menu:{mutation:function(e){var t=e[0],n=t.addedNodes?_(t.addedNodes[0]):_(!1),i=t.removedNodes?_(t.removedNodes[0]):_(!1),o=n.add(i),a=o.is(y.addition)||0<o.closest(y.addition).length,r=o.is(y.message)||0<o.closest(y.message).length;a||r?(p.debug("Updating item selector cache"),p.refreshItems()):(p.debug("Menu modified, updating selector cache"),p.refresh())},mousedown:function(){q=!0},mouseup:function(){q=!1}},item:{mouseenter:function(e){var t=_(e.target),n=_(this),i=n.children(y.menu),o=n.siblings(y.item).children(y.menu),a=0<i.length;0<i.find(t).length||!a||(clearTimeout(p.itemTimer),p.itemTimer=setTimeout(function(){p.verbose("Showing sub-menu",i),_.each(o,function(){p.animate.hide(!1,_(this))}),p.animate.show(!1,i)},g.delay.show),e.preventDefault())},mouseleave:function(e){var t=_(this).children(y.menu);0<t.length&&(clearTimeout(p.itemTimer),p.itemTimer=setTimeout(function(){p.verbose("Hiding sub-menu",t),p.animate.hide(!1,t)},g.delay.hide))},click:function(e,t){var n=_(this),i=_(e?e.target:""),o=n.find(y.menu),a=p.get.choiceText(n),r=p.get.choiceValue(n,a),s=0<o.length,l=0<o.find(i).length;"input"!==te.activeElement.tagName.toLowerCase()&&_(te.activeElement).blur(),l||s&&!g.allowCategorySelection||(p.is.searchSelection()&&(g.allowAdditions&&p.remove.userAddition(),p.remove.searchTerm(),p.is.focusedOnSearch()||1==t||p.focusSearch(!0)),g.useLabels||(p.remove.filteredItem(),p.set.scrollPosition(n)),p.determine.selectAction.call(this,a,r))}},document:{keydown:function(e){var t=e.which;if(p.is.inObject(t,v)){var n=k.find(y.label),i=n.filter("."+h.active),o=(i.data(b.value),n.index(i)),a=n.length,r=0<i.length,s=1<i.length,l=0===o,c=o+1==a,u=p.is.searchSelection(),d=p.is.focusedOnSearch(),f=p.is.focused(),m=d&&0===p.get.caretPosition(!1),g=m&&0!==p.get.caretPosition(!0);if(u&&!r&&!d)return;t==v.leftArrow?!f&&!m||r?r&&(e.shiftKey?p.verbose("Adding previous label to selection"):(p.verbose("Selecting previous label"),n.removeClass(h.active)),l&&!s?i.addClass(h.active):i.prev(y.siblingLabel).addClass(h.active).end(),e.preventDefault()):(p.verbose("Selecting previous label"),n.last().addClass(h.active)):t==v.rightArrow?(f&&!r&&n.first().addClass(h.active),r&&(e.shiftKey?p.verbose("Adding next label to selection"):(p.verbose("Selecting next label"),n.removeClass(h.active)),c?u?d?n.removeClass(h.active):p.focusSearch():s?i.next(y.siblingLabel).addClass(h.active):i.addClass(h.active):i.next(y.siblingLabel).addClass(h.active),e.preventDefault())):t==v.deleteKey||t==v.backspace?r?(p.verbose("Removing active labels"),c&&u&&!d&&p.focusSearch(),i.last().next(y.siblingLabel).addClass(h.active),p.remove.activeLabels(i),e.preventDefault()):!m||g||r||t!=v.backspace||(p.verbose("Removing last label on input backspace"),i=n.last().addClass(h.active),p.remove.activeLabels(i)):i.removeClass(h.active)}}},keydown:function(e){var t=e.which;if(p.is.inObject(t,v)){var n,i=M.not(y.unselectable).filter("."+h.selected).eq(0),o=R.children("."+h.active).eq(0),a=0<i.length?i:o,r=0<a.length?a.siblings(":not(."+h.filtered+")").addBack():R.children(":not(."+h.filtered+")"),s=a.children(y.menu),l=a.closest(y.menu),c=l.hasClass(h.visible)||l.hasClass(h.animating)||0<l.parent(y.menu).length,u=0<s.length,d=0<a.length,f=0<a.not(y.unselectable).length,m=t==v.delimiter&&g.allowAdditions&&p.is.multiple();if(g.allowAdditions&&g.hideAdditions&&(t==v.enter||m)&&f&&(p.verbose("Selecting item from keyboard shortcut",a),p.event.item.click.call(a,e),p.is.searchSelection()&&p.remove.searchTerm(),p.is.multiple()&&e.preventDefault()),p.is.visible()){if(t!=v.enter&&!m||(t==v.enter&&d&&u&&!g.allowCategorySelection?(p.verbose("Pressed enter on unselectable category, opening sub menu"),t=v.rightArrow):f&&(p.verbose("Selecting item from keyboard shortcut",a),p.event.item.click.call(a,e),p.is.searchSelection()&&(p.remove.searchTerm(),p.is.multiple()&&D.focus())),e.preventDefault()),d&&(t==v.leftArrow&&l[0]!==R[0]&&(p.verbose("Left key pressed, closing sub-menu"),p.animate.hide(!1,l),a.removeClass(h.selected),l.closest(y.item).addClass(h.selected),e.preventDefault()),t==v.rightArrow&&u&&(p.verbose("Right key pressed, opening sub-menu"),p.animate.show(!1,s),a.removeClass(h.selected),s.find(y.item).eq(0).addClass(h.selected),e.preventDefault())),t==v.upArrow){if(n=d&&c?a.prevAll(y.item+":not("+y.unselectable+")").eq(0):M.eq(0),r.index(n)<0)return p.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();p.verbose("Up key pressed, changing active item"),a.removeClass(h.selected),n.addClass(h.selected),p.set.scrollPosition(n),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(n),e.preventDefault()}if(t==v.downArrow){if(0===(n=d&&c?n=a.nextAll(y.item+":not("+y.unselectable+")").eq(0):M.eq(0)).length)return p.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();p.verbose("Down key pressed, changing active item"),M.removeClass(h.selected),n.addClass(h.selected),p.set.scrollPosition(n),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(n),e.preventDefault()}t==v.pageUp&&(p.scrollPage("up"),e.preventDefault()),t==v.pageDown&&(p.scrollPage("down"),e.preventDefault()),t==v.escape&&(p.verbose("Escape key pressed, closing dropdown"),p.hide())}else m&&e.preventDefault(),t!=v.downArrow||p.is.visible()||(p.verbose("Down key pressed, showing dropdown"),p.show(),e.preventDefault())}else p.has.search()||p.set.selectedLetter(String.fromCharCode(t))}},trigger:{change:function(){var e=te.createEvent("HTMLEvents"),t=E[0];t&&(p.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},determine:{selectAction:function(e,t){c=!0,p.verbose("Determining action",g.action),_.isFunction(p.action[g.action])?(p.verbose("Triggering preset action",g.action,e,t),p.action[g.action].call(z,e,t,this)):_.isFunction(g.action)?(p.verbose("Triggering user action",g.action,e,t),g.action.call(z,e,t,this)):p.error(m.action,g.action),c=!1},eventInModule:function(e,t){var n=_(e.target),i=0<n.closest(te.documentElement).length,o=0<n.closest(k).length;return t=_.isFunction(t)?t:function(){},i&&!o?(p.verbose("Triggering event",t),t(),!0):(p.verbose("Event occurred in dropdown, canceling callback"),!1)},eventOnElement:function(e,t){var n=_(e.target),i=n.closest(y.siblingLabel),o=te.body.contains(e.target),a=0===k.find(i).length||!(p.is.multiple()&&g.useLabels),r=0===n.closest(R).length;return t=_.isFunction(t)?t:function(){},o&&a&&r?(p.verbose("Triggering event",t),t(),!0):(p.verbose("Event occurred in dropdown menu, canceling callback"),!1)}},action:{nothing:function(){},activate:function(e,t,n){t=t!==ne?t:e,p.can.activate(_(n))&&(p.set.selected(t,_(n)),p.is.multiple()||p.hideAndClear())},select:function(e,t,n){t=t!==ne?t:e,p.can.activate(_(n))&&(p.set.value(t,e,_(n)),p.is.multiple()||p.hideAndClear())},combo:function(e,t,n){t=t!==ne?t:e,p.set.selected(t,_(n)),p.hideAndClear()},hide:function(e,t,n){p.set.value(t,e,_(n)),p.hideAndClear()}},get:{id:function(){return a},defaultText:function(){return k.data(b.defaultText)},defaultValue:function(){return k.data(b.defaultValue)},placeholderText:function(){return"auto"!=g.placeholder&&"string"==typeof g.placeholder?g.placeholder:k.data(b.placeholderText)||""},text:function(){return S.text()},query:function(){return String(D.val()).trim()},searchWidth:function(e){return e=e!==ne?e:D.val(),A.text(e),Math.ceil(A.width()+1)},selectionCount:function(){var e=p.get.values();return p.is.multiple()?Array.isArray(e)?e.length:0:""!==p.get.value()?1:0},transition:function(e){return"auto"==g.transition?p.is.upward(e)?"slide up":"slide down":g.transition},userValues:function(){var e=p.get.values();return!!e&&(e=Array.isArray(e)?e:[e],_.grep(e,function(e){return!1===p.get.item(e)}))},uniqueArray:function(n){return _.grep(n,function(e,t){return _.inArray(e,n)===t})},caretPosition:function(e){var t,n,i=D.get(0);return e&&"selectionEnd"in i?i.selectionEnd:!e&&"selectionStart"in i?i.selectionStart:te.selection?(i.focus(),n=(t=te.selection.createRange()).text.length,e?n:(t.moveStart("character",-i.value.length),t.text.length-n)):void 0},value:function(){var e=0<E.length?E.val():k.data(b.value),t=Array.isArray(e)&&1===e.length&&""===e[0];return e===ne||t?"":e},values:function(){var e=p.get.value();return""===e?"":!p.has.selectInput()&&p.is.multiple()?"string"==typeof e?p.escape.htmlEntities(e).split(g.delimiter):"":e},remoteValues:function(){var e=p.get.values(),i=!1;return e&&("string"==typeof e&&(e=[e]),_.each(e,function(e,t){var n=p.read.remoteData(t);p.verbose("Restoring value from session data",n,t),n&&((i=i||{})[t]=n)})),i},choiceText:function(e,t){if(t=t!==ne?t:g.preserveHTML,e)return 0<e.find(y.menu).length&&(p.verbose("Retrieving text of element with sub-menu"),(e=e.clone()).find(y.menu).remove(),e.find(y.menuIcon).remove()),e.data(b.text)!==ne?e.data(b.text):t?e.html().trim():e.text().trim()},choiceValue:function(e,t){return t=t||p.get.choiceText(e),!!e&&(e.data(b.value)!==ne?String(e.data(b.value)):"string"==typeof t?String(g.ignoreSearchCase?t.toLowerCase():t).trim():String(t))},inputEvent:function(){var e=D[0];return!!e&&(e.oninput!==ne?"input":e.onpropertychange!==ne?"propertychange":"keyup")},selectValues:function(){var r={},s=[];return r.values=[],k.find("option").each(function(){var e=_(this),t=e.html(),n=e.attr("disabled"),i=e.attr("value")!==ne?e.attr("value"):t,o=e.data(b.text)!==ne?e.data(b.text):t,a=e.parent("optgroup");"auto"===g.placeholder&&""===i?r.placeholder=t:(a.length===s.length&&a[0]===s[0]||(r.values.push({type:"header",divider:g.headerDivider,name:a.attr("label")||""}),s=a),r.values.push({name:t,value:i,text:o,disabled:n}))}),g.placeholder&&"auto"!==g.placeholder&&(p.debug("Setting placeholder value to",g.placeholder),r.placeholder=g.placeholder),g.sortSelect?(!0===g.sortSelect?r.values.sort(function(e,t){return e.name.localeCompare(t.name)}):"natural"===g.sortSelect?r.values.sort(function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())}):_.isFunction(g.sortSelect)&&r.values.sort(g.sortSelect),p.debug("Retrieved and sorted values from select",r)):p.debug("Retrieved values from select",r),r},activeItem:function(){return M.filter("."+h.active)},selectedItem:function(){var e=M.not(y.unselectable).filter("."+h.selected);return 0<e.length?e:M.eq(0)},itemWithAdditions:function(e){var t=p.get.item(e),n=p.create.userChoice(e);return n&&0<n.length&&(t=0<t.length?t.add(n):n),t},item:function(i,o){var e,a,r=!1;return i=i!==ne?i:p.get.values()!==ne?p.get.values():p.get.text(),e=(a=p.is.multiple()&&Array.isArray(i))?0<i.length:i!==ne&&null!==i,o=""===i||!1===i||!0===i||(o||!1),e&&M.each(function(){var e=_(this),t=p.get.choiceText(e),n=p.get.choiceValue(e,t);if(null!==n&&n!==ne)if(a)-1!==_.inArray(p.escape.htmlEntities(String(n)),i.map(function(e){return String(e)}))&&(r=r?r.add(e):e);else if(o){if(p.verbose("Ambiguous dropdown value using strict type check",e,i),n===i)return r=e,!0}else if(g.ignoreCase&&(n=n.toLowerCase(),i=i.toLowerCase()),p.escape.htmlEntities(String(n))===p.escape.htmlEntities(String(i)))return p.verbose("Found select item by value",n,i),r=e,!0}),r}},check:{maxSelections:function(e){return!g.maxSelections||((e=e!==ne?e:p.get.selectionCount())>=g.maxSelections?(p.debug("Maximum selection count reached"),g.useLabels&&(M.addClass(h.filtered),p.add.message(u.maxSelections)),!0):(p.verbose("No longer at maximum selection count"),p.remove.message(),p.remove.filteredItem(),p.is.searchSelection()&&p.filterItems(),!1))}},restore:{defaults:function(e){p.clear(e),p.restore.defaultText(),p.restore.defaultValue()},defaultText:function(){var e=p.get.defaultText();e===p.get.placeholderText?(p.debug("Restoring default placeholder text",e),p.set.placeholderText(e)):(p.debug("Restoring default text",e),p.set.text(e))},placeholderText:function(){p.set.placeholderText()},defaultValue:function(){var e=p.get.defaultValue();e!==ne&&(p.debug("Restoring default value",e),""!==e?(p.set.value(e),p.set.selected()):(p.remove.activeItem(),p.remove.selectedItem()))},labels:function(){g.allowAdditions&&(g.useLabels||(p.error(m.labels),g.useLabels=!0),p.debug("Restoring selected values"),p.create.userLabels()),p.check.maxSelections()},selected:function(){p.restore.values(),p.is.multiple()?(p.debug("Restoring previously selected values and labels"),p.restore.labels()):p.debug("Restoring previously selected values")},values:function(){p.set.initialLoad(),g.apiSettings&&g.saveRemoteData&&p.get.remoteValues()?p.restore.remoteValues():p.set.selected();var e=p.get.value();!e||""===e||Array.isArray(e)&&0===e.length?E.addClass(h.noselection):E.removeClass(h.noselection),p.remove.initialLoad()},remoteValues:function(){var e=p.get.remoteValues();p.debug("Recreating selected from session data",e),e&&(p.is.single()?_.each(e,function(e,t){p.set.text(t)}):_.each(e,function(e,t){p.add.label(e,t)}))}},read:{remoteData:function(e){var t;if(ee.Storage!==ne)return(t=sessionStorage.getItem(e))!==ne&&t;p.error(m.noStorage)}},save:{defaults:function(){p.save.defaultText(),p.save.placeholderText(),p.save.defaultValue()},defaultValue:function(){var e=p.get.value();p.verbose("Saving default value as",e),k.data(b.defaultValue,e)},defaultText:function(){var e=p.get.text();p.verbose("Saving default text as",e),k.data(b.defaultText,e)},placeholderText:function(){var e;!1!==g.placeholder&&S.hasClass(h.placeholder)&&(e=p.get.text(),p.verbose("Saving placeholder text as",e),k.data(b.placeholderText,e))},remoteData:function(e,t){ee.Storage!==ne?(p.verbose("Saving remote data to session storage",t,e),sessionStorage.setItem(t,e)):p.error(m.noStorage)}},clear:function(e){p.is.multiple()&&g.useLabels?p.remove.labels():(p.remove.activeItem(),p.remove.selectedItem(),p.remove.filteredItem()),p.set.placeholderText(),p.clearValue(e)},clearValue:function(e){p.set.value("",null,null,e)},scrollPage:function(e,t){var n,i,o=t||p.get.selectedItem(),a=o.closest(y.menu),r=a.outerHeight(),s=a.scrollTop(),l=M.eq(0).outerHeight(),c=Math.floor(r/l),u=(a.prop("scrollHeight"),"up"==e?s-l*c:s+l*c),d=M.not(y.unselectable);i="up"==e?d.index(o)-c:d.index(o)+c,0<(n=("up"==e?0<=i:i<d.length)?d.eq(i):"up"==e?d.first():d.last()).length&&(p.debug("Scrolling page",e,n),o.removeClass(h.selected),n.addClass(h.selected),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(n),a.scrollTop(u))},set:{filtered:function(){var e=p.is.multiple(),t=p.is.searchSelection(),n=e&&t,i=t?p.get.query():"",o="string"==typeof i&&0<i.length,a=p.get.searchWidth(),r=""!==i;e&&o&&(p.verbose("Adjusting input width",a,g.glyphWidth),D.css("width",a)),o||n&&r?(p.verbose("Hiding placeholder text"),S.addClass(h.filtered)):e&&(!n||r)||(p.verbose("Showing placeholder text"),S.removeClass(h.filtered))},empty:function(){k.addClass(h.empty)},loading:function(){k.addClass(h.loading)},placeholderText:function(e){e=e||p.get.placeholderText(),p.debug("Setting placeholder text",e),p.set.text(e),S.addClass(h.placeholder)},tabbable:function(){p.is.searchSelection()?(p.debug("Added tabindex to searchable dropdown"),D.val("").attr("tabindex",0),R.attr("tabindex",-1)):(p.debug("Added tabindex to dropdown"),k.attr("tabindex")===ne&&(k.attr("tabindex",0),R.attr("tabindex",-1)))},initialLoad:function(){p.verbose("Setting initial load"),e=!0},activeItem:function(e){g.allowAdditions&&0<e.filter(y.addition).length?e.addClass(h.filtered):e.addClass(h.active)},partialSearch:function(e){var t=p.get.query().length;D.val(e.substr(0,t))},scrollPosition:function(e,t){var n,i,o,a,r,s;n=(e=e||p.get.selectedItem()).closest(y.menu),i=e&&0<e.length,t=t!==ne&&t,0===p.get.activeItem().length&&(t=!1),e&&0<n.length&&i&&(e.position().top,n.addClass(h.loading),o=(a=n.scrollTop())-n.offset().top+e.offset().top,t||(s=a+n.height()<o+5,r=o-5<a),p.debug("Scrolling to active item",o),(t||r||s)&&n.scrollTop(o),n.removeClass(h.loading))},text:function(e){"combo"===g.action?(p.debug("Changing combo button text",e,O),g.preserveHTML?O.html(e):O.text(e)):"activate"===g.action&&(e!==p.get.placeholderText()&&S.removeClass(h.placeholder),p.debug("Changing text",e,S),S.removeClass(h.filtered),g.preserveHTML?S.html(e):S.text(e))},selectedItem:function(e){var t=p.get.choiceValue(e),n=p.get.choiceText(e,!1),i=p.get.choiceText(e,!0);p.debug("Setting user selection to item",e),p.remove.activeItem(),p.set.partialSearch(n),p.set.activeItem(e),p.set.selected(t,e),p.set.text(i)},selectedLetter:function(e){var t,n=M.filter("."+h.selected),i=0<n.length&&p.has.firstLetter(n,e),o=!1;i&&(t=n.nextAll(M).eq(0),p.has.firstLetter(t,e)&&(o=t)),o||M.each(function(){if(p.has.firstLetter(_(this),e))return o=_(this),!1}),o&&(p.verbose("Scrolling to next value with letter",e),p.set.scrollPosition(o),n.removeClass(h.selected),o.addClass(h.selected),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(o))},direction:function(e){"auto"==g.direction?(e?p.is.upward(e)&&p.remove.upward(e):p.remove.upward(),p.can.openDownward(e)?p.remove.upward(e):p.set.upward(e),p.is.leftward(e)||p.can.openRightward(e)||p.set.leftward(e)):"upward"==g.direction&&p.set.upward(e)},upward:function(e){(e||k).addClass(h.upward)},leftward:function(e){(e||R).addClass(h.leftward)},value:function(e,t,n,i){e===ne||""===e||Array.isArray(e)&&0===e.length?E.addClass(h.noselection):E.removeClass(h.noselection);var o=p.escape.value(e),a=0<E.length,r=p.get.values(),s=e!==ne?String(e):e;if(a){if(!g.allowReselection&&s==r&&(p.verbose("Skipping value update already same value",e,r),!p.is.initialLoad()))return;p.is.single()&&p.has.selectInput()&&p.can.extendSelect()&&(p.debug("Adding user option",e),p.add.optionValue(e)),p.debug("Updating input value",o,r),L=!0,E.val(o),!1===g.fireOnInit&&p.is.initialLoad()?p.debug("Input native change event ignored on initial load"):!0!==i&&p.trigger.change(),L=!1}else p.verbose("Storing value in metadata",o,E),o!==r&&k.data(b.value,s);!1===g.fireOnInit&&p.is.initialLoad()?p.verbose("No callback on initial load",g.onChange):!0!==i&&g.onChange.call(z,e,t,n)},active:function(){k.addClass(h.active)},multiple:function(){k.addClass(h.multiple)},visible:function(){k.addClass(h.visible)},exactly:function(e,t){p.debug("Setting selected to exact values"),p.clear(),p.set.selected(e,t)},selected:function(e,s){var l=p.is.multiple();(s=g.allowAdditions?s||p.get.itemWithAdditions(e):s||p.get.item(e))&&(p.debug("Setting selected menu item to",s),p.is.multiple()&&p.remove.searchWidth(),p.is.single()?(p.remove.activeItem(),p.remove.selectedItem()):g.useLabels&&p.remove.selectedItem(),s.each(function(){var e=_(this),t=p.get.choiceText(e),n=p.get.choiceValue(e,t),i=e.hasClass(h.filtered),o=e.hasClass(h.active),a=e.hasClass(h.addition),r=l&&1==s.length;l?!o||a?(g.apiSettings&&g.saveRemoteData&&p.save.remoteData(t,n),g.useLabels?(p.add.label(n,t,r),p.add.value(n,t,e),p.set.activeItem(e),p.filterActive(),p.select.nextAvailable(s)):(p.add.value(n,t,e),p.set.text(p.add.variables(u.count)),p.set.activeItem(e))):i||!g.useLabels&&!c||(p.debug("Selected active value, removing label"),p.remove.selected(n)):(g.apiSettings&&g.saveRemoteData&&p.save.remoteData(t,n),p.set.text(t),p.set.value(n,t,e),e.addClass(h.active).addClass(h.selected))}),p.remove.searchTerm())}},add:{label:function(e,t,n){var i,o=p.is.searchSelection()?D:S,a=p.escape.value(e);g.ignoreCase&&(a=a.toLowerCase()),i=_("<a />").addClass(h.label).attr("data-"+b.value,a).html(x.label(a,t,g.preserveHTML,g.className)),i=g.onLabelCreate.call(i,a,t),p.has.label(e)?p.debug("User selection already exists, skipping",a):(g.label.variation&&i.addClass(g.label.variation),!0===n?(p.debug("Animating in label",i),i.addClass(h.hidden).insertBefore(o).transition({animation:g.label.transition,debug:g.debug,verbose:g.verbose,duration:g.label.duration})):(p.debug("Adding selection label",i),i.insertBefore(o)))},message:function(e){var t=R.children(y.message),n=g.templates.message(p.add.variables(e));0<t.length?t.html(n):t=_("<div/>").html(n).addClass(h.message).appendTo(R)},optionValue:function(e){var t=p.escape.value(e);0<E.find('option[value="'+p.escape.string(t)+'"]').length||(p.disconnect.selectObserver(),p.is.single()&&(p.verbose("Removing previous user addition"),E.find("option."+h.addition).remove()),_("<option/>").prop("value",t).addClass(h.addition).html(e).appendTo(E),p.verbose("Adding user addition as an <option>",e),p.observe.select())},userSuggestion:function(e){var t,n=R.children(y.addition),i=p.get.item(e),o=i&&i.not(y.addition).length,a=0<n.length;g.useLabels&&p.has.maxSelections()||(""===e||o?n.remove():(a?(n.data(b.value,e).data(b.text,e).attr("data-"+b.value,e).attr("data-"+b.text,e).removeClass(h.filtered),g.hideAdditions||(t=g.templates.addition(p.add.variables(u.addResult,e)),n.html(t)),p.verbose("Replacing user suggestion with new value",n)):((n=p.create.userChoice(e)).prependTo(R),p.verbose("Adding item choice to menu corresponding with user choice addition",n)),g.hideAdditions&&!p.is.allFiltered()||n.addClass(h.selected).siblings().removeClass(h.selected),p.refreshItems()))},variables:function(e,t){var n,i,o=-1!==e.search("{count}"),a=-1!==e.search("{maxCount}"),r=-1!==e.search("{term}");return p.verbose("Adding templated variables to message",e),o&&(n=p.get.selectionCount(),e=e.replace("{count}",n)),a&&(n=p.get.selectionCount(),e=e.replace("{maxCount}",g.maxSelections)),r&&(i=t||p.get.query(),e=e.replace("{term}",i)),e},value:function(e,t,n){var i,o=p.get.values();p.has.value(e)?p.debug("Value already selected"):""!==e?(i=Array.isArray(o)?(i=o.concat([e]),p.get.uniqueArray(i)):[e],p.has.selectInput()?p.can.extendSelect()&&(p.debug("Adding value to select",e,i,E),p.add.optionValue(e)):(i=i.join(g.delimiter),p.debug("Setting hidden input to delimited value",i,E)),!1===g.fireOnInit&&p.is.initialLoad()?p.verbose("Skipping onadd callback on initial load",g.onAdd):g.onAdd.call(z,e,t,n),p.set.value(i,t,n),p.check.maxSelections()):p.debug("Cannot select blank values from multiselect")}},remove:{active:function(){k.removeClass(h.active)},activeLabel:function(){k.find(y.label).removeClass(h.active)},empty:function(){k.removeClass(h.empty)},loading:function(){k.removeClass(h.loading)},initialLoad:function(){e=!1},upward:function(e){(e||k).removeClass(h.upward)},leftward:function(e){(e||R).removeClass(h.leftward)},visible:function(){k.removeClass(h.visible)},activeItem:function(){M.removeClass(h.active)},filteredItem:function(){g.useLabels&&p.has.maxSelections()||(g.useLabels&&p.is.multiple()?M.not("."+h.active).removeClass(h.filtered):M.removeClass(h.filtered),g.hideDividers&&I.removeClass(h.hidden),p.remove.empty())},optionValue:function(e){var t=p.escape.value(e),n=E.find('option[value="'+p.escape.string(t)+'"]');0<n.length&&n.hasClass(h.addition)&&(r&&(r.disconnect(),p.verbose("Temporarily disconnecting mutation observer")),n.remove(),p.verbose("Removing user addition as an <option>",t),r&&r.observe(E[0],{childList:!0,subtree:!0}))},message:function(){R.children(y.message).remove()},searchWidth:function(){D.css("width","")},searchTerm:function(){p.verbose("Cleared search term"),D.val(""),p.set.filtered()},userAddition:function(){M.filter(y.addition).remove()},selected:function(e,t){if(!(t=g.allowAdditions?t||p.get.itemWithAdditions(e):t||p.get.item(e)))return!1;t.each(function(){var e=_(this),t=p.get.choiceText(e),n=p.get.choiceValue(e,t);p.is.multiple()?g.useLabels?(p.remove.value(n,t,e),p.remove.label(n)):(p.remove.value(n,t,e),0===p.get.selectionCount()?p.set.placeholderText():p.set.text(p.add.variables(u.count))):p.remove.value(n,t,e),e.removeClass(h.filtered).removeClass(h.active),g.useLabels&&e.removeClass(h.selected)})},selectedItem:function(){M.removeClass(h.selected)},value:function(e,t,n){var i,o=p.get.values();e=p.escape.htmlEntities(e),p.has.selectInput()?(p.verbose("Input is <select> removing selected option",e),i=p.remove.arrayValue(e,o),p.remove.optionValue(e)):(p.verbose("Removing from delimited values",e),i=(i=p.remove.arrayValue(e,o)).join(g.delimiter)),!1===g.fireOnInit&&p.is.initialLoad()?p.verbose("No callback on initial load",g.onRemove):g.onRemove.call(z,e,t,n),p.set.value(i,t,n),p.check.maxSelections()},arrayValue:function(t,e){return Array.isArray(e)||(e=[e]),e=_.grep(e,function(e){return t!=e}),p.verbose("Removed value from delimited string",t,e),e},label:function(e,t){var n=k.find(y.label).filter("[data-"+b.value+'="'+p.escape.string(g.ignoreCase?e.toLowerCase():e)+'"]');p.verbose("Removing label",n),n.remove()},activeLabels:function(e){e=e||k.find(y.label).filter("."+h.active),p.verbose("Removing active label selections",e),p.remove.labels(e)},labels:function(e){e=e||k.find(y.label),p.verbose("Removing labels",e),e.each(function(){var e=_(this),t=e.data(b.value),n=t!==ne?String(t):t,i=p.is.userValue(n);!1!==g.onLabelRemove.call(e,t)?(p.remove.message(),i?(p.remove.value(n),p.remove.label(n)):p.remove.selected(n)):p.debug("Label remove callback cancelled removal")})},tabbable:function(){p.is.searchSelection()?(p.debug("Searchable dropdown initialized"),D.removeAttr("tabindex")):(p.debug("Simple selection dropdown initialized"),k.removeAttr("tabindex")),R.removeAttr("tabindex")},diacritics:function(e){return g.ignoreDiacritics?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}},has:{menuSearch:function(){return p.has.search()&&0<D.closest(R).length},clearItem:function(){return 0<P.length},search:function(){return 0<D.length},sizer:function(){return 0<A.length},selectInput:function(){return E.is("select")},minCharacters:function(e){return g.minCharacters&&!V?(e=e!==ne?String(e):String(p.get.query())).length>=g.minCharacters:!(V=!1)},firstLetter:function(e,t){var n;return!(!e||0===e.length||"string"!=typeof t)&&(n=p.get.choiceText(e,!1),(t=t.toLowerCase())==String(n).charAt(0).toLowerCase())},input:function(){return 0<E.length},items:function(){return 0<M.length},menu:function(){return 0<R.length},message:function(){return 0!==R.children(y.message).length},label:function(e){var t=p.escape.value(e),n=k.find(y.label);return g.ignoreCase&&(t=t.toLowerCase()),0<n.filter("[data-"+b.value+'="'+p.escape.string(t)+'"]').length},maxSelections:function(){return g.maxSelections&&p.get.selectionCount()>=g.maxSelections},allResultsFiltered:function(){var e=M.not(y.addition);return e.filter(y.unselectable).length===e.length},userSuggestion:function(){return 0<R.children(y.addition).length},query:function(){return""!==p.get.query()},value:function(e){return g.ignoreCase?p.has.valueIgnoringCase(e):p.has.valueMatchingCase(e)},valueMatchingCase:function(e){var t=p.get.values();return!!(Array.isArray(t)?t&&-1!==_.inArray(e,t):t==e)},valueIgnoringCase:function(n){var e=p.get.values(),i=!1;return Array.isArray(e)||(e=[e]),_.each(e,function(e,t){if(String(n).toLowerCase()==String(t).toLowerCase())return!(i=!0)}),i}},is:{active:function(){return k.hasClass(h.active)},animatingInward:function(){return R.transition("is inward")},animatingOutward:function(){return R.transition("is outward")},bubbledLabelClick:function(e){return _(e.target).is("select, input")&&0<k.closest("label").length},bubbledIconClick:function(e){return 0<_(e.target).closest(F).length},alreadySetup:function(){return k.is("select")&&k.parent(y.dropdown).data(w)!==ne&&0===k.prev().length},animating:function(e){return e?e.transition&&e.transition("is animating"):R.transition&&R.transition("is animating")},leftward:function(e){return(e||R).hasClass(h.leftward)},clearable:function(){return k.hasClass(h.clearable)||g.clearable},disabled:function(){return k.hasClass(h.disabled)},focused:function(){return te.activeElement===k[0]},focusedOnSearch:function(){return te.activeElement===D[0]},allFiltered:function(){return(p.is.multiple()||p.has.search())&&!(0==g.hideAdditions&&p.has.userSuggestion())&&!p.has.message()&&p.has.allResultsFiltered()},hidden:function(e){return!p.is.visible(e)},initialLoad:function(){return e},inObject:function(n,e){var i=!1;return _.each(e,function(e,t){if(t==n)return i=!0}),i},multiple:function(){return k.hasClass(h.multiple)},remote:function(){return g.apiSettings&&p.can.useAPI()},single:function(){return!p.is.multiple()},selectMutation:function(e){var n=!1;return _.each(e,function(e,t){if(_(t.target).is("select")||_(t.addedNodes).is("select"))return!(n=!0)}),n},search:function(){return k.hasClass(h.search)},searchSelection:function(){return p.has.search()&&1===D.parent(y.dropdown).length},selection:function(){return k.hasClass(h.selection)},userValue:function(e){return-1!==_.inArray(e,p.get.userValues())},upward:function(e){return(e||k).hasClass(h.upward)},visible:function(e){return e?e.hasClass(h.visible):R.hasClass(h.visible)},verticallyScrollableContext:function(){var e=T.get(0)!==ee&&T.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=T.get(0)!==ee&&T.css("overflow-X");return"auto"==e||"scroll"==e}},can:{activate:function(e){return!!g.useLabels||(!p.has.maxSelections()||!(!p.has.maxSelections()||!e.hasClass(h.active)))},openDownward:function(e){var t,n,i=e||R,o=!0;return i.addClass(h.loading),n={context:{offset:T.get(0)===ee?{top:0,left:0}:T.offset(),scrollTop:T.scrollTop(),height:T.outerHeight()},menu:{offset:i.offset(),height:i.outerHeight()}},p.is.verticallyScrollableContext()&&(n.menu.offset.top+=n.context.scrollTop),o=(t={above:n.context.scrollTop<=n.menu.offset.top-n.context.offset.top-n.menu.height,below:n.context.scrollTop+n.context.height>=n.menu.offset.top-n.context.offset.top+n.menu.height}).below?(p.verbose("Dropdown can fit in context downward",t),!0):t.below||t.above?(p.verbose("Dropdown cannot fit below, opening upward",t),!1):(p.verbose("Dropdown cannot fit in either direction, favoring downward",t),!0),i.removeClass(h.loading),o},openRightward:function(e){var t,n,i=e||R,o=!0;return i.addClass(h.loading),n={context:{offset:T.get(0)===ee?{top:0,left:0}:T.offset(),scrollLeft:T.scrollLeft(),width:T.outerWidth()},menu:{offset:i.offset(),width:i.outerWidth()}},p.is.horizontallyScrollableContext()&&(n.menu.offset.left+=n.context.scrollLeft),(t=n.menu.offset.left-n.context.offset.left+n.menu.width>=n.context.scrollLeft+n.context.width)&&(p.verbose("Dropdown cannot fit in context rightward",t),o=!1),i.removeClass(h.loading),o},click:function(){return Q||"click"==g.on},extendSelect:function(){return g.allowAdditions||g.apiSettings},show:function(){return!p.is.disabled()&&(p.has.items()||p.has.message())},useAPI:function(){return _.fn.api!==ne}},animate:{show:function(e,t){var n,i=t||R,o=t?function(){}:function(){p.hideSubMenus(),p.hideOthers(),p.set.active()};e=_.isFunction(e)?e:function(){},p.verbose("Doing menu show animation",i),p.set.direction(t),n=p.get.transition(t),p.is.selection()&&p.set.scrollPosition(p.get.selectedItem(),!0),(p.is.hidden(i)||p.is.animating(i))&&("none"==n?(o(),i.transition("show"),e.call(z)):_.fn.transition!==ne&&k.transition("is supported")?i.transition({animation:n+" in",debug:g.debug,verbose:g.verbose,duration:g.duration,queue:!0,onStart:o,onComplete:function(){e.call(z)}}):p.error(m.noTransition,n))},hide:function(e,t){var n=t||R,i=t?function(){}:function(){p.can.click()&&p.unbind.intent(),p.remove.active()},o=p.get.transition(t);e=_.isFunction(e)?e:function(){},(p.is.visible(n)||p.is.animating(n))&&(p.verbose("Doing menu hide animation",n),"none"==o?(i(),n.transition("hide"),e.call(z)):_.fn.transition!==ne&&k.transition("is supported")?n.transition({animation:o+" out",duration:g.duration,debug:g.debug,verbose:g.verbose,queue:!1,onStart:i,onComplete:function(){e.call(z)}}):p.error(m.transition))}},hideAndClear:function(){p.remove.searchTerm(),p.has.maxSelections()||(p.has.search()?p.hide(function(){p.remove.filteredItem()}):p.hide())},delay:{show:function(){p.verbose("Delaying show event to ensure user intent"),clearTimeout(p.timer),p.timer=setTimeout(p.show,g.delay.show)},hide:function(){p.verbose("Delaying hide event to ensure user intent"),clearTimeout(p.timer),p.timer=setTimeout(p.hide,g.delay.hide)}},escape:{value:function(e){var t=Array.isArray(e),n="string"==typeof e,i=!n&&!t,o=n&&-1!==e.search(f.quote),a=[];return i||!o?e:(p.debug("Encoding quote values for use in select",e),t?(_.each(e,function(e,t){a.push(t.replace(f.quote,"&quot;"))}),a):e.replace(f.quote,"&quot;"))},string:function(e){return(e=String(e)).replace(f.escape,"\\$&")},htmlEntities:function(e){var t={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return t[e]}):e}},setting:function(e,t){if(p.debug("Changing setting",e,t),_.isPlainObject(e))_.extend(!0,g,e);else{if(t===ne)return g[e];_.isPlainObject(g[e])?_.extend(!0,g[e],t):g[e]=t}},internal:function(e,t){if(_.isPlainObject(e))_.extend(!0,p,e);else{if(t===ne)return p[e];p[e]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?p.performance.log(arguments):(p.debug=Function.prototype.bind.call(console.info,console,g.name+":"),p.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?p.performance.log(arguments):(p.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),p.verbose.apply(console,arguments)))},error:function(){g.silent||(p.error=Function.prototype.bind.call(console.error,console,g.name+":"),p.error.apply(console,arguments))},performance:{log:function(e){var t,n;g.performance&&(n=(t=(new Date).getTime())-($||t),$=t,G.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:z,"Execution Time":n})),clearTimeout(p.performance.timer),p.performance.timer=setTimeout(p.performance.display,500)},display:function(){var e=g.name+":",n=0;$=!1,clearTimeout(p.performance.timer),_.each(G,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",Y&&(e+=" '"+Y+"'"),(console.group!==ne||console.table!==ne)&&0<G.length&&(console.groupCollapsed(e),console.table?console.table(G):_.each(G,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),G=[]}},invoke:function(i,e,t){var o,a,n,r=N;return e=e||Z,t=z||t,"string"==typeof i&&r!==ne&&(i=i.split(/[\. ]/),o=i.length-1,_.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(_.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==ne)return a=r[n],!1;if(!_.isPlainObject(r[t])||e==o)return r[t]!==ne?a=r[t]:p.error(m.method,i),!1;r=r[t]}})),_.isFunction(a)?n=a.apply(t,e):a!==ne&&(n=a),Array.isArray(U)?U.push(n):U!==ne?U=[U,n]:n!==ne&&(U=n),a}},J?(N===ne&&p.initialize(),p.invoke(K)):(N!==ne&&N.invoke("destroy"),p.initialize())}),U!==ne?U:B},_.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",values:!1,clearable:!1,apiSettings:!1,selectOnKeydown:!0,minCharacters:0,filterRemoteData:!1,saveRemoteData:!0,throttle:200,context:ee,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,ignoreDiacritics:!1,hideDividers:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,ignoreCase:!1,ignoreSearchCase:!0,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,headerDivider:!0,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function(e,t,n){},onAdd:function(e,t,n){},onRemove:function(e,t,n){},onLabelSelect:function(e){},onLabelCreate:function(e,t){return _(this)},onLabelRemove:function(e){return!0},onNoResults:function(e){return!0},onShow:function(){},onHide:function(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",noNormalize:'"ignoreDiacritics" setting will be ignored. Browser does not support String().normalize(). You may consider including <https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js> as a polyfill.'},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s:=@]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text",type:"type",image:"image",imageClass:"imageClass",icon:"icon",iconClass:"iconClass",class:"class",divider:"divider"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",divider:".divider, .header",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> span.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered",clearIcon:"> .remove.icon"},className:{active:"active",addition:"addition",animating:"animating",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",icon:"icon",image:"image",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",leftward:"left",visible:"visible",clearable:"clearable",noselection:"noselection",delete:"delete",header:"header",divider:"divider",groupIcon:"",unfilterable:"unfilterable"}},_.fn.dropdown.settings.templates={deQuote:function(e){return String(e).replace(/"/g,"")},escape:function(e,t){if(t)return e;var n={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return n[e]}):e},dropdown:function(e,t,n,i){var o=e.placeholder||!1,a="",r=_.fn.dropdown.settings.templates.escape;return a+='<i class="dropdown icon"></i>',a+=o?'<div class="default text">'+r(o,n)+"</div>":'<div class="text"></div>',a+='<div class="'+i.menu+'">',a+=_.fn.dropdown.settings.templates.menu(e,t,n,i),a+="</div>"},menu:function(e,s,l,c){var t=e[s.values]||[],u="",d=_.fn.dropdown.settings.templates.escape,f=_.fn.dropdown.settings.templates.deQuote;return _.each(t,function(e,t){var n=t[s.type]?t[s.type]:"item";if("item"===n){var i=t[s.text]?' data-text="'+f(t[s.text])+'"':"",o=t[s.disabled]?c.disabled+" ":"";u+='<div class="'+o+(t[s.class]?f(t[s.class]):c.item)+'" data-value="'+f(t[s.value])+'"'+i+">",t[s.image]&&(u+='<img class="'+(t[s.imageClass]?f(t[s.imageClass]):c.image)+'" src="'+f(t[s.image])+'">'),t[s.icon]&&(u+='<i class="'+f(t[s.icon])+" "+(t[s.iconClass]?f(t[s.iconClass]):c.icon)+'"></i>'),u+=d(t[s.name]||"",l),u+="</div>"}else if("header"===n){var a=d(t[s.name]||"",l),r=t[s.icon]?f(t[s.icon]):c.groupIcon;""===a&&""===r||(u+='<div class="'+(t[s.class]?f(t[s.class]):c.header)+'">',""!==r&&(u+='<i class="'+r+" "+(t[s.iconClass]?f(t[s.iconClass]):c.icon)+'"></i>'),u+=a,u+="</div>"),t[s.divider]&&(u+='<div class="'+c.divider+'"></div>')}}),u},label:function(e,t,n,i){return(0,_.fn.dropdown.settings.templates.escape)(t,n)+'<i class="'+i.delete+' icon"></i>'},message:function(e){return e},addition:function(e){return e}}}(jQuery,window,document),function(T,e,t,S){"use strict";T.isFunction=T.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),T.fn.embed=function(p){var h,v=T(this),b=v.selector||"",y=(new Date).getTime(),x=[],C=p,w="string"==typeof C,k=[].slice.call(arguments,1);return v.each(function(){var s,i=T.isPlainObject(p)?T.extend(!0,{},T.fn.embed.settings,p):T.extend({},T.fn.embed.settings),e=i.selector,t=i.className,o=i.sources,l=i.error,a=i.metadata,n=i.namespace,r=i.templates,c="."+n,u="module-"+n,d=T(this),f=(d.find(e.placeholder),d.find(e.icon),d.find(e.embed)),m=this,g=d.data(u);s={initialize:function(){s.debug("Initializing embed"),s.determine.autoplay(),s.create(),s.bind.events(),s.instantiate()},instantiate:function(){s.verbose("Storing instance of module",s),g=s,d.data(u,s)},destroy:function(){s.verbose("Destroying previous instance of embed"),s.reset(),d.removeData(u).off(c)},refresh:function(){s.verbose("Refreshing selector cache"),d.find(e.placeholder),d.find(e.icon),f=d.find(e.embed)},bind:{events:function(){s.has.placeholder()&&(s.debug("Adding placeholder events"),d.on("click"+c,e.placeholder,s.createAndShow).on("click"+c,e.icon,s.createAndShow))}},create:function(){s.get.placeholder()?s.createPlaceholder():s.createAndShow()},createPlaceholder:function(e){var t=s.get.icon(),n=s.get.url();s.generate.embed(n);e=e||s.get.placeholder(),d.html(r.placeholder(e,t)),s.debug("Creating placeholder for embed",e,t)},createEmbed:function(e){s.refresh(),e=e||s.get.url(),f=T("<div/>").addClass(t.embed).html(s.generate.embed(e)).appendTo(d),i.onCreate.call(m,e),s.debug("Creating embed object",f)},changeEmbed:function(e){f.html(s.generate.embed(e))},createAndShow:function(){s.createEmbed(),s.show()},change:function(e,t,n){s.debug("Changing video to ",e,t,n),d.data(a.source,e).data(a.id,t),n?d.data(a.url,n):d.removeData(a.url),s.has.embed()?s.changeEmbed():s.create()},reset:function(){s.debug("Clearing embed and showing placeholder"),s.remove.data(),s.remove.active(),s.remove.embed(),s.showPlaceholder(),i.onReset.call(m)},show:function(){s.debug("Showing embed"),s.set.active(),i.onDisplay.call(m)},hide:function(){s.debug("Hiding embed"),s.showPlaceholder()},showPlaceholder:function(){s.debug("Showing placeholder image"),s.remove.active(),i.onPlaceholderDisplay.call(m)},get:{id:function(){return i.id||d.data(a.id)},placeholder:function(){return i.placeholder||d.data(a.placeholder)},icon:function(){return i.icon?i.icon:d.data(a.icon)!==S?d.data(a.icon):s.determine.icon()},source:function(e){return i.source?i.source:d.data(a.source)!==S?d.data(a.source):s.determine.source()},type:function(){var e=s.get.source();return o[e]!==S&&o[e].type},url:function(){return i.url?i.url:d.data(a.url)!==S?d.data(a.url):s.determine.url()}},determine:{autoplay:function(){s.should.autoplay()&&(i.autoplay=!0)},source:function(n){var i=!1;return(n=n||s.get.url())&&T.each(o,function(e,t){if(-1!==n.search(t.domain))return i=e,!1}),i},icon:function(){var e=s.get.source();return o[e]!==S&&o[e].icon},url:function(){var e,t=i.id||d.data(a.id),n=i.source||d.data(a.source);return(e=o[n]!==S&&o[n].url.replace("{id}",t))&&d.data(a.url,e),e}},set:{active:function(){d.addClass(t.active)}},remove:{data:function(){d.removeData(a.id).removeData(a.icon).removeData(a.placeholder).removeData(a.source).removeData(a.url)},active:function(){d.removeClass(t.active)},embed:function(){f.empty()}},encode:{parameters:function(e){var t,n=[];for(t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&amp;")}},generate:{embed:function(e){s.debug("Generating embed html");var t,n,i=s.get.source();return(e=s.get.url(e))?(n=s.generate.parameters(i),t=r.iframe(e,n)):s.error(l.noURL,d),t},parameters:function(e,t){var n=o[e]&&o[e].parameters!==S?o[e].parameters(i):{};return(t=t||i.parameters)&&(n=T.extend({},n,t)),n=i.onEmbed(n),s.encode.parameters(n)}},has:{embed:function(){return 0<f.length},placeholder:function(){return i.placeholder||d.data(a.placeholder)}},should:{autoplay:function(){return"auto"===i.autoplay?i.placeholder||d.data(a.placeholder)!==S:i.autoplay}},is:{video:function(){return"video"==s.get.type()}},setting:function(e,t){if(s.debug("Changing setting",e,t),T.isPlainObject(e))T.extend(!0,i,e);else{if(t===S)return i[e];T.isPlainObject(i[e])?T.extend(!0,i[e],t):i[e]=t}},internal:function(e,t){if(T.isPlainObject(e))T.extend(!0,s,e);else{if(t===S)return s[e];s[e]=t}},debug:function(){!i.silent&&i.debug&&(i.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,i.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!i.silent&&i.verbose&&i.debug&&(i.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),s.verbose.apply(console,arguments)))},error:function(){i.silent||(s.error=Function.prototype.bind.call(console.error,console,i.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;i.performance&&(n=(t=(new Date).getTime())-(y||t),y=t,x.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:m,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=i.name+":",n=0;y=!1,clearTimeout(s.performance.timer),T.each(x,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",b&&(e+=" '"+b+"'"),1<v.length&&(e+=" ("+v.length+")"),(console.group!==S||console.table!==S)&&0<x.length&&(console.groupCollapsed(e),console.table?console.table(x):T.each(x,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),x=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||k,t=m||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,T.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(T.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!T.isPlainObject(r[t])||e==o)return r[t]!==S?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),T.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),Array.isArray(h)?h.push(n):h!==S?h=[h,n]:n!==S&&(h=n),a}},w?(g===S&&s.initialize(),s.invoke(C)):(g!==S&&g.invoke("destroy"),s.initialize())}),h!==S?h:this},T.fn.embed.settings={name:"Embed",namespace:"embed",silent:!1,debug:!1,verbose:!1,performance:!0,icon:!1,source:!1,url:!1,id:!1,autoplay:"auto",color:"#444444",hd:!0,brandedUI:!1,parameters:!1,onDisplay:function(){},onPlaceholderDisplay:function(){},onReset:function(){},onCreate:function(e){},onEmbed:function(e){return e},metadata:{id:"id",icon:"icon",placeholder:"placeholder",source:"source",url:"url"},error:{noURL:"No URL specified",method:"The method you called is not defined"},className:{active:"active",embed:"embed"},selector:{embed:".embed",placeholder:".placeholder",icon:".icon"},sources:{youtube:{name:"youtube",type:"video",icon:"video play",domain:"youtube.com",url:"//www.youtube.com/embed/{id}",parameters:function(e){return{autohide:!e.brandedUI,autoplay:e.autoplay,color:e.color||S,hq:e.hd,jsapi:e.api,modestbranding:!e.brandedUI}}},vimeo:{name:"vimeo",type:"video",icon:"video play",domain:"vimeo.com",url:"//player.vimeo.com/video/{id}",parameters:function(e){return{api:e.api,autoplay:e.autoplay,byline:e.brandedUI,color:e.color||S,portrait:e.brandedUI,title:e.brandedUI}}}},templates:{iframe:function(e,t){var n=e;return t&&(n+="?"+t),'<iframe src="'+n+'" width="100%" height="100%" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'},placeholder:function(e,t){var n="";return t&&(n+='<i class="'+t+' icon"></i>'),e&&(n+='<img class="placeholder" src="'+e+'">'),n}},api:!1,onPause:function(){},onPlay:function(){},onStop:function(){}}}(jQuery,window,document),function(V,z,N,H){"use strict";V.isFunction=V.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},z=void 0!==z&&z.Math==Math?z:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),V.fn.modal=function(D){var A,e=V(this),E=V(z),F=V(N),P=V("body"),O=e.selector||"",R=(new Date).getTime(),M=[],I=D,j="string"==typeof I,q=[].slice.call(arguments,1),L=z.requestAnimationFrame||z.mozRequestAnimationFrame||z.webkitRequestAnimationFrame||z.msRequestAnimationFrame||function(e){setTimeout(e,0)};return e.each(function(){var o,a,e,i,n,r,s,t,l,c,u,d=V.isPlainObject(D)?V.extend(!0,{},V.fn.modal.settings,D):V.extend({},V.fn.modal.settings),f=d.selector,m=d.className,g=d.namespace,p=d.error,h="."+g,v="module-"+g,b=V(this),y=V(d.context),x=b.find(f.close),C=this,w=b.data(v),k=!1,T="",S="";u={initialize:function(){u.cache={},u.verbose("Initializing dimmer",y),u.create.id(),u.create.dimmer(),d.allowMultiple&&u.create.innerDimmer(),d.centered||b.addClass("top aligned"),u.refreshModals(),u.bind.events(),d.observeChanges&&u.observeChanges(),u.instantiate()},instantiate:function(){u.verbose("Storing instance of modal"),w=u,b.data(v,w)},create:{dimmer:function(){var e={debug:d.debug,dimmerName:"modals"},t=V.extend(!0,e,d.dimmerSettings);V.fn.dimmer!==H?(u.debug("Creating dimmer"),i=y.dimmer(t),d.detachable?(u.verbose("Modal is detachable, moving content into dimmer"),i.dimmer("add content",b)):u.set.undetached(),n=i.dimmer("get dimmer")):u.error(p.dimmer)},id:function(){l=(Math.random().toString(16)+"000000000").substr(2,8),t="."+l,u.verbose("Creating unique id for element",l)},innerDimmer:function(){0==b.find(f.dimmer).length&&b.prepend('<div class="ui inverted dimmer"></div>')}},destroy:function(){c&&c.disconnect(),u.verbose("Destroying previous modal"),b.removeData(v).off(h),E.off(t),n.off(t),x.off(h),y.dimmer("destroy")},observeChanges:function(){"MutationObserver"in z&&((c=new MutationObserver(function(e){u.debug("DOM tree modified, refreshing"),u.refresh()})).observe(C,{childList:!0,subtree:!0}),u.debug("Setting up mutation observer",c))},refresh:function(){u.remove.scrolling(),u.cacheSizes(),u.can.useFlex()||u.set.modalOffset(),u.set.screenHeight(),u.set.type()},refreshModals:function(){a=b.siblings(f.modal),o=a.add(b)},attachEvents:function(e,t){var n=V(e);t=V.isFunction(u[t])?u[t]:u.toggle,0<n.length?(u.debug("Attaching modal events to element",e,t),n.off(h).on("click"+h,t)):u.error(p.notFound,e)},bind:{events:function(){u.verbose("Attaching events"),b.on("click"+h,f.close,u.event.close).on("click"+h,f.approve,u.event.approve).on("click"+h,f.deny,u.event.deny),E.on("resize"+t,u.event.resize)},scrollLock:function(){i.get(0).addEventListener("touchmove",u.event.preventScroll,{passive:!1})}},unbind:{scrollLock:function(){i.get(0).removeEventListener("touchmove",u.event.preventScroll,{passive:!1})}},get:{id:function(){return(Math.random().toString(16)+"000000000").substr(2,8)}},event:{approve:function(){k||!1===d.onApprove.call(C,V(this))?u.verbose("Approve callback returned false cancelling hide"):(k=!0,u.hide(function(){k=!1}))},preventScroll:function(e){-1!==e.target.className.indexOf("dimmer")&&e.preventDefault()},deny:function(){k||!1===d.onDeny.call(C,V(this))?u.verbose("Deny callback returned false cancelling hide"):(k=!0,u.hide(function(){k=!1}))},close:function(){u.hide()},mousedown:function(e){var t=V(e.target),n=u.is.rtl();(r=0<t.closest(f.modal).length)&&u.verbose("Mouse down event registered inside the modal"),(s=u.is.scrolling()&&(!n&&V(z).outerWidth()-d.scrollbarWidth<=e.clientX||n&&d.scrollbarWidth>=e.clientX))&&u.verbose("Mouse down event registered inside the scrollbar")},mouseup:function(e){if(d.closable)if(r)u.debug("Dimmer clicked but mouse down was initially registered inside the modal");else if(s)u.debug("Dimmer clicked but mouse down was initially registered inside the scrollbar");else{var t=0<V(e.target).closest(f.modal).length,n=V.contains(N.documentElement,e.target);if(!t&&n&&u.is.active()&&b.hasClass(m.front)){if(u.debug("Dimmer clicked, hiding all modals"),d.allowMultiple){if(!u.hideAll())return}else if(!u.hide())return;u.remove.clickaway()}}else u.verbose("Dimmer clicked but closable setting is disabled")},debounce:function(e,t){clearTimeout(u.timer),u.timer=setTimeout(e,t)},keyboard:function(e){27==e.which&&(d.closable?(u.debug("Escape key pressed hiding modal"),b.hasClass(m.front)&&u.hide()):u.debug("Escape key pressed, but closable is set to false"),e.preventDefault())},resize:function(){i.dimmer("is active")&&(u.is.animating()||u.is.active())&&L(u.refresh)}},toggle:function(){u.is.active()||u.is.animating()?u.hide():u.show()},show:function(e){e=V.isFunction(e)?e:function(){},u.refreshModals(),u.set.dimmerSettings(),u.set.dimmerStyles(),u.showModal(e)},hide:function(e){return e=V.isFunction(e)?e:function(){},u.refreshModals(),u.hideModal(e)},showModal:function(e){e=V.isFunction(e)?e:function(){},u.is.animating()||!u.is.active()?(u.showDimmer(),u.cacheSizes(),u.set.bodyMargin(),u.can.useFlex()?u.remove.legacy():(u.set.legacy(),u.set.modalOffset(),u.debug("Using non-flex legacy modal positioning.")),u.set.screenHeight(),u.set.type(),u.set.clickaway(),!d.allowMultiple&&u.others.active()?u.hideOthers(u.showModal):(k=!1,d.allowMultiple&&(u.others.active()&&a.filter("."+m.active).find(f.dimmer).addClass("active"),d.detachable&&b.detach().appendTo(n)),d.onShow.call(C),d.transition&&V.fn.transition!==H&&b.transition("is supported")?(u.debug("Showing modal with css animations"),b.transition({debug:d.debug,animation:d.transition+" in",queue:d.queue,duration:d.duration,useFailSafe:!0,onComplete:function(){d.onVisible.apply(C),d.keyboardShortcuts&&u.add.keyboardShortcuts(),u.save.focus(),u.set.active(),d.autofocus&&u.set.autofocus(),e()}})):u.error(p.noTransition))):u.debug("Modal is already visible")},hideModal:function(e,t,n){var i=a.filter("."+m.active).last();if(e=V.isFunction(e)?e:function(){},u.debug("Hiding modal"),!1===d.onHide.call(C,V(this)))return u.verbose("Hide callback returned false cancelling hide"),k=!1;(u.is.animating()||u.is.active())&&(d.transition&&V.fn.transition!==H&&b.transition("is supported")?(u.remove.active(),b.transition({debug:d.debug,animation:d.transition+" out",queue:d.queue,duration:d.duration,useFailSafe:!0,onStart:function(){u.others.active()||u.others.animating()||t||u.hideDimmer(),d.keyboardShortcuts&&!u.others.active()&&u.remove.keyboardShortcuts()},onComplete:function(){u.unbind.scrollLock(),d.allowMultiple&&(i.addClass(m.front),b.removeClass(m.front),n?o.find(f.dimmer).removeClass("active"):i.find(f.dimmer).removeClass("active")),d.onHidden.call(C),u.remove.dimmerStyles(),u.restore.focus(),e()}})):u.error(p.noTransition))},showDimmer:function(){i.dimmer("is animating")||!i.dimmer("is active")?(u.save.bodyMargin(),u.debug("Showing dimmer"),i.dimmer("show")):u.debug("Dimmer already visible")},hideDimmer:function(){i.dimmer("is animating")||i.dimmer("is active")?(u.unbind.scrollLock(),i.dimmer("hide",function(){u.restore.bodyMargin(),u.remove.clickaway(),u.remove.screenHeight()})):u.debug("Dimmer is not visible cannot hide")},hideAll:function(n){var e=o.filter("."+m.active+", ."+m.animating);if(n=V.isFunction(n)?n:function(){},0<e.length){u.debug("Hiding all visible modals");var i=!0;return V(e.get().reverse()).each(function(e,t){i=i&&V(t).modal("hide modal",n,!1,!0)}),i&&u.hideDimmer(),i}},hideOthers:function(e){var t=a.filter("."+m.active+", ."+m.animating);e=V.isFunction(e)?e:function(){},0<t.length&&(u.debug("Hiding other modals",a),t.modal("hide modal",e,!0))},others:{active:function(){return 0<a.filter("."+m.active).length},animating:function(){return 0<a.filter("."+m.animating).length}},add:{keyboardShortcuts:function(){u.verbose("Adding keyboard shortcuts"),F.on("keyup"+h,u.event.keyboard)}},save:{focus:function(){0<V(N.activeElement).closest(b).length||(e=V(N.activeElement).blur())},bodyMargin:function(){T=P.css("margin-"+(u.can.leftBodyScrollbar()?"left":"right"));var e=parseInt(T.replace(/[^\d.]/g,"")),t=z.innerWidth-N.documentElement.clientWidth;S=e+t}},restore:{focus:function(){e&&0<e.length&&d.restoreFocus&&e.focus()},bodyMargin:function(){var e=u.can.leftBodyScrollbar()?"left":"right";P.css("margin-"+e,T),P.find(f.bodyFixed.replace("right",e)).css("padding-"+e,T)}},remove:{active:function(){b.removeClass(m.active)},legacy:function(){b.removeClass(m.legacy)},clickaway:function(){d.detachable||b.off("mousedown"+t),n.off("mousedown"+t),n.off("mouseup"+t)},dimmerStyles:function(){n.removeClass(m.inverted),i.removeClass(m.blurring)},bodyStyle:function(){""===P.attr("style")&&(u.verbose("Removing style attribute"),P.removeAttr("style"))},screenHeight:function(){u.debug("Removing page height"),P.css("height","")},keyboardShortcuts:function(){u.verbose("Removing keyboard shortcuts"),F.off("keyup"+h)},scrolling:function(){i.removeClass(m.scrolling),b.removeClass(m.scrolling)}},cacheSizes:function(){b.addClass(m.loading);var e=b.prop("scrollHeight"),t=b.outerWidth(),n=b.outerHeight();u.cache.pageHeight!==H&&0===n||(V.extend(u.cache,{pageHeight:V(N).outerHeight(),width:t,height:n+d.offset,scrollHeight:e+d.offset,contextHeight:"body"==d.context?V(z).height():i.height()}),u.cache.topOffset=-u.cache.height/2),b.removeClass(m.loading),u.debug("Caching modal and container sizes",u.cache)},can:{leftBodyScrollbar:function(){return u.cache.leftBodyScrollbar===H&&(u.cache.leftBodyScrollbar=u.is.rtl()&&(u.is.iframe&&!u.is.firefox()||u.is.safari()||u.is.edge()||u.is.ie())),u.cache.leftBodyScrollbar},useFlex:function(){return"auto"===d.useFlex?d.detachable&&!u.is.ie():(d.useFlex&&u.is.ie()?u.debug("useFlex true is not supported in IE"):d.useFlex&&!d.detachable&&u.debug("useFlex true in combination with detachable false is not supported"),d.useFlex)},fit:function(){var e=u.cache.contextHeight,t=u.cache.contextHeight/2,n=u.cache.topOffset,i=u.cache.scrollHeight,o=u.cache.height,a=d.padding;return o<i?t+n+i+a<e:o+2*a<e}},is:{active:function(){return b.hasClass(m.active)},ie:function(){if(u.cache.isIE===H){var e=!z.ActiveXObject&&"ActiveXObject"in z,t="ActiveXObject"in z;u.cache.isIE=e||t}return u.cache.isIE},animating:function(){return b.transition("is supported")?b.transition("is animating"):b.is(":visible")},scrolling:function(){return i.hasClass(m.scrolling)},modernBrowser:function(){return!(z.ActiveXObject||"ActiveXObject"in z)},rtl:function(){return u.cache.isRTL===H&&(u.cache.isRTL="rtl"===P.attr("dir")||"rtl"===P.css("direction")),u.cache.isRTL},safari:function(){return u.cache.isSafari===H&&(u.cache.isSafari=/constructor/i.test(z.HTMLElement)||!!z.ApplePaySession),u.cache.isSafari},edge:function(){return u.cache.isEdge===H&&(u.cache.isEdge=!!z.setImmediate&&!u.is.ie()),u.cache.isEdge},firefox:function(){return u.cache.isFirefox===H&&(u.cache.isFirefox=!!z.InstallTrigger),u.cache.isFirefox},iframe:function(){return!(self===top)}},set:{autofocus:function(){var e=b.find("[tabindex], :input").filter(":visible").filter(function(){return 0===V(this).closest(".disabled").length}),t=e.filter("[autofocus]"),n=0<t.length?t.first():e.first();0<n.length&&n.focus()},bodyMargin:function(){var e=u.can.leftBodyScrollbar()?"left":"right";(d.detachable||u.can.fit())&&P.css("margin-"+e,S+"px"),P.find(f.bodyFixed.replace("right",e)).css("padding-"+e,S+"px")},clickaway:function(){d.detachable||b.on("mousedown"+t,u.event.mousedown),n.on("mousedown"+t,u.event.mousedown),n.on("mouseup"+t,u.event.mouseup)},dimmerSettings:function(){if(V.fn.dimmer!==H){var e={debug:d.debug,dimmerName:"modals",closable:"auto",useFlex:u.can.useFlex(),duration:{show:d.duration,hide:d.duration}},t=V.extend(!0,e,d.dimmerSettings);d.inverted&&(t.variation=t.variation!==H?t.variation+" inverted":"inverted"),y.dimmer("setting",t)}else u.error(p.dimmer)},dimmerStyles:function(){d.inverted?n.addClass(m.inverted):n.removeClass(m.inverted),d.blurring?i.addClass(m.blurring):i.removeClass(m.blurring)},modalOffset:function(){if(d.detachable)b.css({marginTop:!b.hasClass("aligned")&&u.can.fit()?-u.cache.height/2:d.padding/2,marginLeft:-u.cache.width/2});else{var e=u.can.fit();b.css({top:!b.hasClass("aligned")&&e?V(N).scrollTop()+(u.cache.contextHeight-u.cache.height)/2:!e||b.hasClass("top")?V(N).scrollTop()+d.padding:V(N).scrollTop()+(u.cache.contextHeight-u.cache.height-d.padding),marginLeft:-u.cache.width/2})}u.verbose("Setting modal offset for legacy mode")},screenHeight:function(){u.can.fit()?P.css("height",""):b.hasClass("bottom")||(u.debug("Modal is taller than page content, resizing page height"),P.css("height",u.cache.height+2*d.padding))},active:function(){b.addClass(m.active+" "+m.front),a.filter("."+m.active).removeClass(m.front)},scrolling:function(){i.addClass(m.scrolling),b.addClass(m.scrolling),u.unbind.scrollLock()},legacy:function(){b.addClass(m.legacy)},type:function(){u.can.fit()?(u.verbose("Modal fits on screen"),u.others.active()||u.others.animating()||(u.remove.scrolling(),u.bind.scrollLock())):b.hasClass("bottom")?u.verbose("Bottom aligned modal not fitting on screen is unsupported for scrolling"):(u.verbose("Modal cannot fit on screen setting to scrolling"),u.set.scrolling())},undetached:function(){i.addClass(m.undetached)}},setting:function(e,t){if(u.debug("Changing setting",e,t),V.isPlainObject(e))V.extend(!0,d,e);else{if(t===H)return d[e];V.isPlainObject(d[e])?V.extend(!0,d[e],t):d[e]=t}},internal:function(e,t){if(V.isPlainObject(e))V.extend(!0,u,e);else{if(t===H)return u[e];u[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?u.performance.log(arguments):(u.debug=Function.prototype.bind.call(console.info,console,d.name+":"),u.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?u.performance.log(arguments):(u.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),u.verbose.apply(console,arguments)))},error:function(){d.silent||(u.error=Function.prototype.bind.call(console.error,console,d.name+":"),u.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(R||t),R=t,M.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:C,"Execution Time":n})),clearTimeout(u.performance.timer),u.performance.timer=setTimeout(u.performance.display,500)},display:function(){var e=d.name+":",n=0;R=!1,clearTimeout(u.performance.timer),V.each(M,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",O&&(e+=" '"+O+"'"),(console.group!==H||console.table!==H)&&0<M.length&&(console.groupCollapsed(e),console.table?console.table(M):V.each(M,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),M=[]}},invoke:function(i,e,t){var o,a,n,r=w;return e=e||q,t=C||t,"string"==typeof i&&r!==H&&(i=i.split(/[\. ]/),o=i.length-1,V.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(V.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==H)return a=r[n],!1;if(!V.isPlainObject(r[t])||e==o)return r[t]!==H&&(a=r[t]),!1;r=r[t]}})),V.isFunction(a)?n=a.apply(t,e):a!==H&&(n=a),Array.isArray(A)?A.push(n):A!==H?A=[A,n]:n!==H&&(A=n),a}},j?(w===H&&u.initialize(),u.invoke(I)):(w!==H&&w.invoke("destroy"),u.initialize())}),A!==H?A:this},V.fn.modal.settings={name:"Modal",namespace:"modal",useFlex:"auto",offset:0,silent:!1,debug:!1,verbose:!1,performance:!0,observeChanges:!1,allowMultiple:!1,detachable:!0,closable:!0,autofocus:!0,restoreFocus:!0,inverted:!1,blurring:!1,centered:!0,dimmerSettings:{closable:!1,useCSS:!0},keyboardShortcuts:!0,context:"body",queue:!1,duration:500,transition:"scale",padding:50,scrollbarWidth:10,onShow:function(){},onVisible:function(){},onHide:function(){return!0},onHidden:function(){},onApprove:function(){return!0},onDeny:function(){return!0},selector:{close:"> .close",approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel",modal:".ui.modal",dimmer:"> .ui.dimmer",bodyFixed:"> .ui.fixed.menu, > .ui.right.toast-container, > .ui.right.sidebar"},error:{dimmer:"UI Dimmer, a required component is not included in this page",method:"The method you called is not defined.",notFound:"The element you specified could not be found"},className:{active:"active",animating:"animating",blurring:"blurring",inverted:"inverted",legacy:"legacy",loading:"loading",scrolling:"scrolling",undetached:"undetached",front:"front"}}}(jQuery,window,document),function(y,x,e,C){"use strict";y.isFunction=y.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=void 0!==x&&x.Math==Math?x:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),y.fn.nag=function(d){var f,e=y(this),m=e.selector||"",g=(new Date).getTime(),p=[],h=d,v="string"==typeof h,b=[].slice.call(arguments,1);return e.each(function(){var s,i=y.isPlainObject(d)?y.extend(!0,{},y.fn.nag.settings,d):y.extend({},y.fn.nag.settings),e=i.selector,l=i.error,t=i.namespace,n="."+t,o=t+"-module",a=y(this),r=i.context?y(i.context):y("body"),c=this,u=a.data(o);s={initialize:function(){s.verbose("Initializing element"),a.on("click"+n,e.close,s.dismiss).data(o,s),i.detachable&&a.parent()[0]!==r[0]&&a.detach().prependTo(r),0<i.displayTime&&setTimeout(s.hide,i.displayTime),s.show()},destroy:function(){s.verbose("Destroying instance"),a.removeData(o).off(n)},show:function(){s.should.show()&&!a.is(":visible")&&(s.debug("Showing nag",i.animation.show),"fade"==i.animation.show?a.fadeIn(i.duration,i.easing):a.slideDown(i.duration,i.easing))},hide:function(){s.debug("Showing nag",i.animation.hide),"fade"==i.animation.show?a.fadeIn(i.duration,i.easing):a.slideUp(i.duration,i.easing)},onHide:function(){s.debug("Removing nag",i.animation.hide),a.remove(),i.onHide&&i.onHide()},dismiss:function(e){i.storageMethod&&s.storage.set(i.key,i.value),s.hide(),e.stopImmediatePropagation(),e.preventDefault()},should:{show:function(){return i.persist?(s.debug("Persistent nag is set, can show nag"),!0):s.storage.get(i.key)!=i.value.toString()?(s.debug("Stored value is not set, can show nag",s.storage.get(i.key)),!0):(s.debug("Stored value is set, cannot show nag",s.storage.get(i.key)),!1)}},get:{storageOptions:function(){var e={};return i.expires&&(e.expires=i.expires),i.domain&&(e.domain=i.domain),i.path&&(e.path=i.path),e}},clear:function(){s.storage.remove(i.key)},storage:{set:function(e,t){var n=s.get.storageOptions();if("localstorage"==i.storageMethod&&x.localStorage!==C)x.localStorage.setItem(e,t),s.debug("Value stored using local storage",e,t);else if("sessionstorage"==i.storageMethod&&x.sessionStorage!==C)x.sessionStorage.setItem(e,t),s.debug("Value stored using session storage",e,t);else{if(y.cookie===C)return void s.error(l.noCookieStorage);y.cookie(e,t,n),s.debug("Value stored using cookie",e,t,n)}},get:function(e,t){var n;return"localstorage"==i.storageMethod&&x.localStorage!==C?n=x.localStorage.getItem(e):"sessionstorage"==i.storageMethod&&x.sessionStorage!==C?n=x.sessionStorage.getItem(e):y.cookie!==C?n=y.cookie(e):s.error(l.noCookieStorage),"undefined"!=n&&"null"!=n&&n!==C&&null!==n||(n=C),n},remove:function(e){var t=s.get.storageOptions();"localstorage"==i.storageMethod&&x.localStorage!==C?x.localStorage.removeItem(e):"sessionstorage"==i.storageMethod&&x.sessionStorage!==C?x.sessionStorage.removeItem(e):y.cookie!==C?y.removeCookie(e,t):s.error(l.noStorage)}},setting:function(e,t){if(s.debug("Changing setting",e,t),y.isPlainObject(e))y.extend(!0,i,e);else{if(t===C)return i[e];y.isPlainObject(i[e])?y.extend(!0,i[e],t):i[e]=t}},internal:function(e,t){if(y.isPlainObject(e))y.extend(!0,s,e);else{if(t===C)return s[e];s[e]=t}},debug:function(){!i.silent&&i.debug&&(i.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,i.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!i.silent&&i.verbose&&i.debug&&(i.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),s.verbose.apply(console,arguments)))},error:function(){i.silent||(s.error=Function.prototype.bind.call(console.error,console,i.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;i.performance&&(n=(t=(new Date).getTime())-(g||t),g=t,p.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:c,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=i.name+":",n=0;g=!1,clearTimeout(s.performance.timer),y.each(p,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",m&&(e+=" '"+m+"'"),(console.group!==C||console.table!==C)&&0<p.length&&(console.groupCollapsed(e),console.table?console.table(p):y.each(p,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),p=[]}},invoke:function(i,e,t){var o,a,n,r=u;return e=e||b,t=c||t,"string"==typeof i&&r!==C&&(i=i.split(/[\. ]/),o=i.length-1,y.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(y.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==C)return a=r[n],!1;if(!y.isPlainObject(r[t])||e==o)return r[t]!==C?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),y.isFunction(a)?n=a.apply(t,e):a!==C&&(n=a),Array.isArray(f)?f.push(n):f!==C?f=[f,n]:n!==C&&(f=n),a}},v?(u===C&&s.initialize(),s.invoke(h)):(u!==C&&u.invoke("destroy"),s.initialize())}),f!==C?f:this},y.fn.nag.settings={name:"Nag",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"Nag",persist:!1,displayTime:0,animation:{show:"slide",hide:"slide"},context:!1,detachable:!1,expires:30,domain:!1,path:"/",storageMethod:"cookie",key:"nag",value:"dismiss",error:{noCookieStorage:"$.cookie is not included. A storage solution is required.",noStorage:"Neither $.cookie or store is defined. A storage solution is required for storing state",method:"The method you called is not defined."},className:{bottom:"bottom",fixed:"fixed"},selector:{close:".close.icon"},speed:500,easing:"easeOutQuad",onHide:function(){}},y.extend(y.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document),function(q,L,V,z){"use strict";q.isFunction=q.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},L=void 0!==L&&L.Math==Math?L:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),q.fn.popup=function(T){var S,e=q(this),D=q(V),A=q(L),E=q("body"),F=e.selector||"",P="ontouchstart"in V.documentElement?"touchstart":"click",O=(new Date).getTime(),R=[],M=T,I="string"==typeof M,j=[].slice.call(arguments,1);return e.each(function(){var u,d,e,t,n,f,m=q.isPlainObject(T)?q.extend(!0,{},q.fn.popup.settings,T):q.extend({},q.fn.popup.settings),o=m.selector,g=m.className,p=m.error,h=m.metadata,i=m.namespace,a="."+m.namespace,r="module-"+i,v=q(this),s=q(m.context),l=q(m.scrollContext),b=q(m.boundary),y=m.target?q(m.target):v,x=0,c=!1,C=!1,w=this,k=v.data(r);f={initialize:function(){f.debug("Initializing",v),f.createID(),f.bind.events(),!f.exists()&&m.preserve&&f.create(),m.observeChanges&&f.observeChanges(),f.instantiate()},instantiate:function(){f.verbose("Storing instance",f),k=f,v.data(r,k)},observeChanges:function(){"MutationObserver"in L&&((e=new MutationObserver(f.event.documentChanged)).observe(V,{childList:!0,subtree:!0}),f.debug("Setting up mutation observer",e))},refresh:function(){m.popup?u=q(m.popup).eq(0):m.inline&&(u=y.nextAll(o.popup).eq(0),m.popup=u),m.popup?(u.addClass(g.loading),d=f.get.offsetParent(),u.removeClass(g.loading),m.movePopup&&f.has.popup()&&f.get.offsetParent(u)[0]!==d[0]&&(f.debug("Moving popup to the same offset parent as target"),u.detach().appendTo(d))):d=m.inline?f.get.offsetParent(y):f.has.popup()?f.get.offsetParent(u):E,d.is("html")&&d[0]!==E[0]&&(f.debug("Setting page as offset parent"),d=E),f.get.variation()&&f.set.variation()},reposition:function(){f.refresh(),f.set.position()},destroy:function(){f.debug("Destroying previous module"),e&&e.disconnect(),u&&!m.preserve&&f.removePopup(),clearTimeout(f.hideTimer),clearTimeout(f.showTimer),f.unbind.close(),f.unbind.events(),v.removeData(r)},event:{start:function(e){var t=q.isPlainObject(m.delay)?m.delay.show:m.delay;clearTimeout(f.hideTimer),(!C||C&&m.addTouchEvents)&&(f.showTimer=setTimeout(f.show,t))},end:function(){var e=q.isPlainObject(m.delay)?m.delay.hide:m.delay;clearTimeout(f.showTimer),f.hideTimer=setTimeout(f.hide,e)},touchstart:function(e){C=!0,m.addTouchEvents&&f.show()},resize:function(){f.is.visible()&&f.set.position()},documentChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==w||0<q(e).find(w).length)&&(f.debug("Element removed from DOM, tearing down events"),f.destroy())})})},hideGracefully:function(e){var t=q(e.target),n=q.contains(V.documentElement,e.target),i=0<t.closest(o.popup).length;e&&!i&&n?(f.debug("Click occurred outside popup hiding popup"),f.hide()):f.debug("Click was inside popup, keeping popup open")}},create:function(){var e=f.get.html(),t=f.get.title(),n=f.get.content();e||n||t?(f.debug("Creating pop-up html"),e=e||m.templates.popup({title:t,content:n}),u=q("<div/>").addClass(g.popup).data(h.activator,v).html(e),m.inline?(f.verbose("Inserting popup element inline",u),u.insertAfter(v)):(f.verbose("Appending popup element to body",u),u.appendTo(s)),f.refresh(),f.set.variation(),m.hoverable&&f.bind.popup(),m.onCreate.call(u,w)):m.popup?(q(m.popup).data(h.activator,v),f.verbose("Used popup specified in settings"),f.refresh(),m.hoverable&&f.bind.popup()):0!==y.next(o.popup).length?(f.verbose("Pre-existing popup found"),m.inline=!0,m.popup=y.next(o.popup).data(h.activator,v),f.refresh(),m.hoverable&&f.bind.popup()):f.debug("No content specified skipping display",w)},createID:function(){n=(Math.random().toString(16)+"000000000").substr(2,8),t="."+n,f.verbose("Creating unique id for element",n)},toggle:function(){f.debug("Toggling pop-up"),f.is.hidden()?(f.debug("Popup is hidden, showing pop-up"),f.unbind.close(),f.show()):(f.debug("Popup is visible, hiding pop-up"),f.hide())},show:function(e){if(e=e||function(){},f.debug("Showing pop-up",m.transition),f.is.hidden()&&(!f.is.active()||!f.is.dropdown())){if(f.exists()||f.create(),!1===m.onShow.call(u,w))return void f.debug("onShow callback returned false, cancelling popup animation");m.preserve||m.popup||f.refresh(),u&&f.set.position()&&(f.save.conditions(),m.exclusive&&f.hideAll(),f.animate.show(e))}},hide:function(e){if(e=e||function(){},f.is.visible()||f.is.animating()){if(!1===m.onHide.call(u,w))return void f.debug("onHide callback returned false, cancelling popup animation");f.remove.visible(),f.unbind.close(),f.restore.conditions(),f.animate.hide(e)}},hideAll:function(){q(o.popup).filter("."+g.popupVisible).each(function(){q(this).data(h.activator).popup("hide")})},exists:function(){return!!u&&(m.inline||m.popup?f.has.popup():1<=u.closest(s).length)},removePopup:function(){f.has.popup()&&!m.popup&&(f.debug("Removing popup",u),u.remove(),u=z,m.onRemove.call(u,w))},save:{conditions:function(){f.cache={title:v.attr("title")},f.cache.title&&v.removeAttr("title"),f.verbose("Saving original attributes",f.cache.title)}},restore:{conditions:function(){return f.cache&&f.cache.title&&(v.attr("title",f.cache.title),f.verbose("Restoring original attributes",f.cache.title)),!0}},supports:{svg:function(){return"undefined"!=typeof SVGGraphicsElement}},animate:{show:function(e){e=q.isFunction(e)?e:function(){},m.transition&&q.fn.transition!==z&&v.transition("is supported")?(f.set.visible(),u.transition({animation:m.transition+" in",queue:!1,debug:m.debug,verbose:m.verbose,duration:m.duration,onComplete:function(){f.bind.close(),e.call(u,w),m.onVisible.call(u,w)}})):f.error(p.noTransition)},hide:function(e){e=q.isFunction(e)?e:function(){},f.debug("Hiding pop-up"),m.transition&&q.fn.transition!==z&&v.transition("is supported")?u.transition({animation:m.transition+" out",queue:!1,duration:m.duration,debug:m.debug,verbose:m.verbose,onComplete:function(){f.reset(),e.call(u,w),m.onHidden.call(u,w)}}):f.error(p.noTransition)}},change:{content:function(e){u.html(e)}},get:{html:function(){return v.removeData(h.html),v.data(h.html)||m.html},title:function(){return v.removeData(h.title),v.data(h.title)||m.title},content:function(){return v.removeData(h.content),v.data(h.content)||m.content||v.attr("title")},variation:function(){return v.removeData(h.variation),v.data(h.variation)||m.variation},popup:function(){return u},popupOffset:function(){return u.offset()},calculations:function(){var e,t=f.get.offsetParent(u),n=y[0],i=b[0]==L,o=y.offset(),a=m.inline||m.popup&&m.movePopup?y.offsetParent().offset():{top:0,left:0},r=i?{top:0,left:0}:b.offset(),s={},l=i?{top:A.scrollTop(),left:A.scrollLeft()}:{top:0,left:0};if(s={target:{element:y[0],width:y.outerWidth(),height:y.outerHeight(),top:o.top-a.top,left:o.left-a.left,margin:{}},popup:{width:u.outerWidth(),height:u.outerHeight()},parent:{width:d.outerWidth(),height:d.outerHeight()},screen:{top:r.top,left:r.left,scroll:{top:l.top,left:l.left},width:b.width(),height:b.height()}},t.get(0)!==d.get(0)){var c=t.offset();s.target.top-=c.top,s.target.left-=c.left,s.parent.width=t.outerWidth(),s.parent.height=t.outerHeight()}return m.setFluidWidth&&f.is.fluid()&&(s.container={width:u.parent().outerWidth()},s.popup.width=s.container.width),s.target.margin.top=m.inline?parseInt(L.getComputedStyle(n).getPropertyValue("margin-top"),10):0,s.target.margin.left=m.inline?f.is.rtl()?parseInt(L.getComputedStyle(n).getPropertyValue("margin-right"),10):parseInt(L.getComputedStyle(n).getPropertyValue("margin-left"),10):0,e=s.screen,s.boundary={top:e.top+e.scroll.top,bottom:e.top+e.scroll.top+e.height,left:e.left+e.scroll.left,right:e.left+e.scroll.left+e.width},s},id:function(){return n},startEvent:function(){return"hover"==m.on?"mouseenter":"focus"==m.on&&"focus"},scrollEvent:function(){return"scroll"},endEvent:function(){return"hover"==m.on?"mouseleave":"focus"==m.on&&"blur"},distanceFromBoundary:function(e,t){var n,i,o={};return n=(t=t||f.get.calculations()).popup,i=t.boundary,e&&(o={top:e.top-i.top,left:e.left-i.left,right:i.right-(e.left+n.width),bottom:i.bottom-(e.top+n.height)},f.verbose("Distance from boundaries determined",e,o)),o},offsetParent:function(e){var t=(e!==z?e[0]:y[0]).parentNode,n=q(t);if(t)for(var i="none"===n.css("transform"),o="static"===n.css("position"),a=n.is("body");t&&!a&&o&&i;)t=t.parentNode,i="none"===(n=q(t)).css("transform"),o="static"===n.css("position"),a=n.is("body");return n&&0<n.length?n:q()},positions:function(){return{"top left":!1,"top center":!1,"top right":!1,"bottom left":!1,"bottom center":!1,"bottom right":!1,"left center":!1,"right center":!1}},nextPosition:function(e){var t=e.split(" "),n=t[0],i=t[1],o="top"==n||"bottom"==n,a=!1,r=!1,s=!1;return c||(f.verbose("All available positions available"),c=f.get.positions()),f.debug("Recording last position tried",e),c[e]=!0,"opposite"===m.prefer&&(s=(s=[{top:"bottom",bottom:"top",left:"right",right:"left"}[n],i]).join(" "),a=!0===c[s],f.debug("Trying opposite strategy",s)),"adjacent"===m.prefer&&o&&(s=(s=[n,{left:"center",center:"right",right:"left"}[i]]).join(" "),r=!0===c[s],f.debug("Trying adjacent strategy",s)),(r||a)&&(f.debug("Using backup position",s),s={"top left":"top center","top center":"top right","top right":"right center","right center":"bottom right","bottom right":"bottom center","bottom center":"bottom left","bottom left":"left center","left center":"top left"}[e]),s}},set:{position:function(e,t){if(0!==y.length&&0!==u.length){var n,i,o,a,r,s,l,c;if(t=t||f.get.calculations(),e=e||v.data(h.position)||m.position,n=v.data(h.offset)||m.offset,i=m.distanceAway,o=t.target,a=t.popup,r=t.parent,f.should.centerArrow(t)&&(f.verbose("Adjusting offset to center arrow on small target element"),"top left"!=e&&"bottom left"!=e||(n+=o.width/2,n-=m.arrowPixelsFromEdge),"top right"!=e&&"bottom right"!=e||(n-=o.width/2,n+=m.arrowPixelsFromEdge)),0===o.width&&0===o.height&&!f.is.svg(o.element))return f.debug("Popup target is hidden, no action taken"),!1;switch(m.inline&&(f.debug("Adding margin to calculation",o.margin),"left center"==e||"right center"==e?(n+=o.margin.top,i+=-o.margin.left):"top left"==e||"top center"==e||"top right"==e?(n+=o.margin.left,i-=o.margin.top):(n+=o.margin.left,i+=o.margin.top)),f.debug("Determining popup position from calculations",e,t),f.is.rtl()&&(e=e.replace(/left|right/g,function(e){return"left"==e?"right":"left"}),f.debug("RTL: Popup position updated",e)),x==m.maxSearchDepth&&"string"==typeof m.lastResort&&(e=m.lastResort),e){case"top left":s={top:"auto",bottom:r.height-o.top+i,left:o.left+n,right:"auto"};break;case"top center":s={bottom:r.height-o.top+i,left:o.left+o.width/2-a.width/2+n,top:"auto",right:"auto"};break;case"top right":s={bottom:r.height-o.top+i,right:r.width-o.left-o.width-n,top:"auto",left:"auto"};break;case"left center":s={top:o.top+o.height/2-a.height/2+n,right:r.width-o.left+i,left:"auto",bottom:"auto"};break;case"right center":s={top:o.top+o.height/2-a.height/2+n,left:o.left+o.width+i,bottom:"auto",right:"auto"};break;case"bottom left":s={top:o.top+o.height+i,left:o.left+n,bottom:"auto",right:"auto"};break;case"bottom center":s={top:o.top+o.height+i,left:o.left+o.width/2-a.width/2+n,bottom:"auto",right:"auto"};break;case"bottom right":s={top:o.top+o.height+i,right:r.width-o.left-o.width-n,left:"auto",bottom:"auto"}}if(s===z&&f.error(p.invalidPosition,e),f.debug("Calculated popup positioning values",s),u.css(s).removeClass(g.position).addClass(e).addClass(g.loading),l=f.get.popupOffset(),c=f.get.distanceFromBoundary(l,t),!m.forcePosition&&f.is.offstage(c,e)){if(f.debug("Position is outside viewport",e),x<m.maxSearchDepth)return x++,e=f.get.nextPosition(e),f.debug("Trying new position",e),!!u&&f.set.position(e,t);if(!m.lastResort)return f.debug("Popup could not find a position to display",u),f.error(p.cannotPlace,w),f.remove.attempts(),f.remove.loading(),f.reset(),m.onUnplaceable.call(u,w),!1;f.debug("No position found, showing with last position")}return f.debug("Position is on stage",e),f.remove.attempts(),f.remove.loading(),m.setFluidWidth&&f.is.fluid()&&f.set.fluidWidth(t),!0}f.error(p.notFound)},fluidWidth:function(e){e=e||f.get.calculations(),f.debug("Automatically setting element width to parent width",e.parent.width),u.css("width",e.container.width)},variation:function(e){(e=e||f.get.variation())&&f.has.popup()&&(f.verbose("Adding variation to popup",e),u.addClass(e))},visible:function(){v.addClass(g.visible)}},remove:{loading:function(){u.removeClass(g.loading)},variation:function(e){(e=e||f.get.variation())&&(f.verbose("Removing variation",e),u.removeClass(e))},visible:function(){v.removeClass(g.visible)},attempts:function(){f.verbose("Resetting all searched positions"),x=0,c=!1}},bind:{events:function(){f.debug("Binding popup events to module"),"click"==m.on&&v.on(P+a,f.toggle),"hover"==m.on&&v.on("touchstart"+a,f.event.touchstart),f.get.startEvent()&&v.on(f.get.startEvent()+a,f.event.start).on(f.get.endEvent()+a,f.event.end),m.target&&f.debug("Target set to element",y),A.on("resize"+t,f.event.resize)},popup:function(){f.verbose("Allowing hover events on popup to prevent closing"),u&&f.has.popup()&&u.on("mouseenter"+a,f.event.start).on("mouseleave"+a,f.event.end)},close:function(){(!0===m.hideOnScroll||"auto"==m.hideOnScroll&&"click"!=m.on)&&f.bind.closeOnScroll(),f.is.closable()?f.bind.clickaway():"hover"==m.on&&C&&f.bind.touchClose()},closeOnScroll:function(){f.verbose("Binding scroll close event to document"),l.one(f.get.scrollEvent()+t,f.event.hideGracefully)},touchClose:function(){f.verbose("Binding popup touchclose event to document"),D.on("touchstart"+t,function(e){f.verbose("Touched away from popup"),f.event.hideGracefully.call(w,e)})},clickaway:function(){f.verbose("Binding popup close event to document"),D.on(P+t,function(e){f.verbose("Clicked away from popup"),f.event.hideGracefully.call(w,e)})}},unbind:{events:function(){A.off(t),v.off(a)},close:function(){D.off(t),l.off(t)}},has:{popup:function(){return u&&0<u.length}},should:{centerArrow:function(e){return!f.is.basic()&&e.target.width<=2*m.arrowPixelsFromEdge}},is:{closable:function(){return"auto"==m.closable?"hover"!=m.on:m.closable},offstage:function(e,n){var i=[];return q.each(e,function(e,t){t<-m.jitter&&(f.debug("Position exceeds allowable distance from edge",e,t,n),i.push(e))}),0<i.length},svg:function(e){return f.supports.svg()&&e instanceof SVGGraphicsElement},basic:function(){return v.hasClass(g.basic)},active:function(){return v.hasClass(g.active)},animating:function(){return u!==z&&u.hasClass(g.animating)},fluid:function(){return u!==z&&u.hasClass(g.fluid)},visible:function(){return u!==z&&u.hasClass(g.popupVisible)},dropdown:function(){return v.hasClass(g.dropdown)},hidden:function(){return!f.is.visible()},rtl:function(){return"rtl"===v.attr("dir")||"rtl"===v.css("direction")}},reset:function(){f.remove.visible(),m.preserve?q.fn.transition!==z&&u.transition("remove transition"):f.removePopup()},setting:function(e,t){if(q.isPlainObject(e))q.extend(!0,m,e);else{if(t===z)return m[e];m[e]=t}},internal:function(e,t){if(q.isPlainObject(e))q.extend(!0,f,e);else{if(t===z)return f[e];f[e]=t}},debug:function(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)))},error:function(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n;m.performance&&(n=(t=(new Date).getTime())-(O||t),O=t,R.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:w,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var e=m.name+":",n=0;O=!1,clearTimeout(f.performance.timer),q.each(R,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",F&&(e+=" '"+F+"'"),(console.group!==z||console.table!==z)&&0<R.length&&(console.groupCollapsed(e),console.table?console.table(R):q.each(R,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),R=[]}},invoke:function(i,e,t){var o,a,n,r=k;return e=e||j,t=w||t,"string"==typeof i&&r!==z&&(i=i.split(/[\. ]/),o=i.length-1,q.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(q.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==z)return a=r[n],!1;if(!q.isPlainObject(r[t])||e==o)return r[t]!==z&&(a=r[t]),!1;r=r[t]}})),q.isFunction(a)?n=a.apply(t,e):a!==z&&(n=a),Array.isArray(S)?S.push(n):S!==z?S=[S,n]:n!==z&&(S=n),a}},I?(k===z&&f.initialize(),f.invoke(M)):(k!==z&&k.invoke("destroy"),f.initialize())}),S!==z?S:this},q.fn.popup.settings={name:"Popup",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"popup",observeChanges:!0,onCreate:function(){},onRemove:function(){},onShow:function(){},onVisible:function(){},onHide:function(){},onUnplaceable:function(){},onHidden:function(){},on:"hover",boundary:L,addTouchEvents:!0,position:"top left",forcePosition:!1,variation:"",movePopup:!0,target:!1,popup:!1,inline:!1,preserve:!1,hoverable:!1,content:!1,html:!1,title:!1,closable:!0,hideOnScroll:"auto",exclusive:!1,context:"body",scrollContext:L,prefer:"opposite",lastResort:!1,arrowPixelsFromEdge:20,delay:{show:50,hide:70},setFluidWidth:!0,duration:200,transition:"scale",distanceAway:0,jitter:2,offset:0,maxSearchDepth:15,error:{invalidPosition:"The position you specified is not a valid position",cannotPlace:"Popup does not fit within the boundaries of the viewport",method:"The method you called is not defined.",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",notFound:"The target or popup you specified does not exist on the page"},metadata:{activator:"activator",content:"content",html:"html",offset:"offset",position:"position",title:"title",variation:"variation"},className:{active:"active",basic:"basic",animating:"animating",dropdown:"dropdown",fluid:"fluid",loading:"loading",popup:"ui popup",position:"top left center bottom right",visible:"visible",popupVisible:"visible"},selector:{popup:".ui.popup"},templates:{escape:function(e){var t={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return t[e]}):e},popup:function(e){var t="",n=q.fn.popup.settings.templates.escape;return typeof e!==z&&(typeof e.title!==z&&e.title&&(e.title=n(e.title),t+='<div class="header">'+e.title+"</div>"),typeof e.content!==z&&e.content&&(e.content=n(e.content),t+='<div class="content">'+e.content+"</div>")),t}}}}(jQuery,window,document),function(T,e,S,D){"use strict";T.isFunction=T.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),T.fn.progress=function(h){var v,e=T(this),b=e.selector||"",y=(new Date).getTime(),x=[],C=h,w="string"==typeof C,k=[].slice.call(arguments,1);return e.each(function(){var c,s=T.isPlainObject(h)?T.extend(!0,{},T.fn.progress.settings,h):T.extend({},T.fn.progress.settings),n=s.className,t=s.metadata,e=s.namespace,i=s.selector,l=s.error,o="."+e,a="module-"+e,u=T(this),d=T(this).find(i.bar),r=T(this).find(i.progress),f=T(this).find(i.label),m=this,g=u.data(a),p=!1;c={helper:{sum:function(e){return Array.isArray(e)?e.reduce(function(e,t){return e+Number(t)},0):0},derivePrecision:function(e,t){for(var n=0,i=1,o=e/t;n<10&&!(1<(o*=i));)i=Math.pow(10,n++);return i},forceArray:function(e){return Array.isArray(e)?e:isNaN(e)?"string"==typeof e?e.split(","):[]:[e]}},initialize:function(){c.set.duration(),c.set.transitionEvent(),c.debug(m),c.read.metadata(),c.read.settings(),c.instantiate()},instantiate:function(){c.verbose("Storing instance of progress",c),g=c,u.data(a,c)},destroy:function(){c.verbose("Destroying previous progress for",u),clearInterval(g.interval),c.remove.state(),u.removeData(a),g=D},reset:function(){c.remove.nextValue(),c.update.progress(0)},complete:function(e){(c.percent===D||c.percent<100)&&(c.remove.progressPoll(),!0!==e&&c.set.percent(100))},read:{metadata:function(){var e={percent:c.helper.forceArray(u.data(t.percent)),total:u.data(t.total),value:c.helper.forceArray(u.data(t.value))};e.total&&(c.debug("Total value set from metadata",e.total),c.set.total(e.total)),0<e.value.length&&(c.debug("Current value set from metadata",e.value),c.set.value(e.value),c.set.progress(e.value)),0<e.percent.length&&(c.debug("Current percent value set from metadata",e.percent),c.set.percent(e.percent))},settings:function(){!1!==s.total&&(c.debug("Current total set in settings",s.total),c.set.total(s.total)),!1!==s.value&&(c.debug("Current value set in settings",s.value),c.set.value(s.value),c.set.progress(c.value)),!1!==s.percent&&(c.debug("Current percent set in settings",s.percent),c.set.percent(s.percent))}},bind:{transitionEnd:function(t){var e=c.get.transitionEnd();d.one(e+o,function(e){clearTimeout(c.failSafeTimer),t.call(this,e)}),c.failSafeTimer=setTimeout(function(){d.triggerHandler(e)},s.duration+s.failSafeDelay),c.verbose("Adding fail safe timer",c.timer)}},increment:function(e){var t,n;e=c.has.total()?(t=c.get.value(),e||1):(t=c.get.percent(),e||c.get.randomValue()),n=t+e,c.debug("Incrementing percentage by",t,n,e),n=c.get.normalizedValue(n),c.set.progress(n)},decrement:function(e){var t,n;c.get.total()?(n=(t=c.get.value())-(e=e||1),c.debug("Decrementing value by",e,t)):(n=(t=c.get.percent())-(e=e||c.get.randomValue()),c.debug("Decrementing percentage by",e,t)),n=c.get.normalizedValue(n),c.set.progress(n)},has:{progressPoll:function(){return c.progressPoll},total:function(){return!1!==c.get.total()}},get:{text:function(e,t){var n=t||0,i=c.get.value(n),o=c.total||0,a=p?c.get.displayPercent(n):c.get.percent(n),r=0<c.total?o-i:100-a;return e=(e=e||"").replace("{value}",i).replace("{total}",o).replace("{left}",r).replace("{percent}",a).replace("{bar}",s.text.bars[n]||""),c.verbose("Adding variables to progress bar text",e),e},normalizedValue:function(e){if(e<0)return c.debug("Value cannot decrement below 0"),0;if(c.has.total()){if(e>c.total)return c.debug("Value cannot increment above total",c.total),c.total}else if(100<e)return c.debug("Value cannot increment above 100 percent"),100;return e},updateInterval:function(){return"auto"==s.updateInterval?s.duration:s.updateInterval},randomValue:function(){return c.debug("Generating random increment percentage"),Math.floor(Math.random()*s.random.max+s.random.min)},numericValue:function(e){return"string"==typeof e?""!==e.replace(/[^\d.]/g,"")&&+e.replace(/[^\d.]/g,""):e},transitionEnd:function(){var e,t=S.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==D)return n[e]},displayPercent:function(e){var t=T(d[e]),n=t.width(),i=u.width(),o=parseInt(t.css("min-width"),10)<n?n/i*100:c.percent;return 0<s.precision?Math.round(o*(10*s.precision))/(10*s.precision):Math.round(o)},percent:function(e){return c.percent&&c.percent[e||0]||0},value:function(e){return c.nextValue||c.value&&c.value[e||0]||0},total:function(){return c.total||!1}},create:{progressPoll:function(){c.progressPoll=setTimeout(function(){c.update.toNextValue(),c.remove.progressPoll()},c.get.updateInterval())}},is:{complete:function(){return c.is.success()||c.is.warning()||c.is.error()},success:function(){return u.hasClass(n.success)},warning:function(){return u.hasClass(n.warning)},error:function(){return u.hasClass(n.error)},active:function(){return u.hasClass(n.active)},visible:function(){return u.is(":visible")}},remove:{progressPoll:function(){c.verbose("Removing progress poll timer"),c.progressPoll&&(clearTimeout(c.progressPoll),delete c.progressPoll)},nextValue:function(){c.verbose("Removing progress value stored for next update"),delete c.nextValue},state:function(){c.verbose("Removing stored state"),delete c.total,delete c.percent,delete c.value},active:function(){c.verbose("Removing active state"),u.removeClass(n.active)},success:function(){c.verbose("Removing success state"),u.removeClass(n.success)},warning:function(){c.verbose("Removing warning state"),u.removeClass(n.warning)},error:function(){c.verbose("Removing error state"),u.removeClass(n.error)}},set:{barWidth:function(e){c.debug("set bar width with ",e),e=c.helper.forceArray(e);var o=-1,a=-1,r=c.helper.sum(e),s=d.length,l=1<s,t=e.map(function(e,t){var n=t===s-1&&0===r,i=T(d[t]);return 0===e&&l&&!n?i.css("display","none"):(l&&n&&i.css("background","transparent"),-1==o&&(o=t),a=t,i.css({display:"block",width:e+"%"})),parseFloat(e)});e.forEach(function(e,t){T(d[t]).css({borderTopLeftRadius:t==o?"":0,borderBottomLeftRadius:t==o?"":0,borderTopRightRadius:t==a?"":0,borderBottomRightRadius:t==a?"":0})}),u.attr("data-percent",t)},duration:function(e){e="number"==typeof(e=e||s.duration)?e+"ms":e,c.verbose("Setting progress bar transition duration",e),d.css({"transition-duration":e})},percent:function(e){e=c.helper.forceArray(e).map(function(e){return"string"==typeof e?+e.replace("%",""):e});var t=c.has.total(),n=c.helper.sum(e),i=1<e.length&&t,o=c.helper.sum(c.helper.forceArray(c.value));if(i&&o>c.total)c.error(l.sumExceedsTotal,o,c.total);else if(!i&&100<n)c.error(l.tooHigh,n);else if(n<0)c.error(l.tooLow,n);else{var a=0<s.precision?s.precision:i?c.helper.derivePrecision(Math.min.apply(null,c.value),c.total):D,r=e.map(function(e){return 0<a?Math.round(e*(10*a))/(10*a):Math.round(e)});c.percent=r,t||(c.value=r.map(function(e){return 0<a?Math.round(e/100*c.total*(10*a))/(10*a):Math.round(e/100*c.total*10)/10}),s.limitValues&&(c.value=c.value.map(function(e){return 100<e?100:c.value<0?0:c.value}))),c.set.barWidth(e),c.set.labelInterval(),c.set.labels()}s.onChange.call(m,e,c.value,c.total)},labelInterval:function(){clearInterval(c.interval),c.bind.transitionEnd(function(){c.verbose("Bar finished animating, removing continuous label updates"),clearInterval(c.interval),p=!1,c.set.labels()}),p=!0,c.interval=setInterval(function(){T.contains(S.documentElement,m)||(clearInterval(c.interval),p=!1),c.set.labels()},s.framerate)},labels:function(){c.verbose("Setting both bar progress and outer label text"),c.set.barLabel(),c.set.state()},label:function(e){(e=e||"")&&(e=c.get.text(e),c.verbose("Setting label to text",e),f.text(e))},state:function(e){100===(e=e!==D?e:c.helper.sum(c.percent))?s.autoSuccess&&1===d.length&&!(c.is.warning()||c.is.error()||c.is.success())?(c.set.success(),c.debug("Automatically triggering success at 100%")):(c.verbose("Reached 100% removing active state"),c.remove.active(),c.remove.progressPoll()):0<e?(c.verbose("Adjusting active progress bar label",e),c.set.active()):(c.remove.active(),c.set.label(s.text.active))},barLabel:function(i){r.map(function(e,t){var n=T(t);i!==D?n.text(c.get.text(i,e)):"ratio"==s.label&&c.total?(c.verbose("Adding ratio to bar label"),n.text(c.get.text(s.text.ratio,e))):"percent"==s.label&&(c.verbose("Adding percentage to bar label"),n.text(c.get.text(s.text.percent,e)))})},active:function(e){e=e||s.text.active,c.debug("Setting active state"),s.showActivity&&!c.is.active()&&u.addClass(n.active),c.remove.warning(),c.remove.error(),c.remove.success(),(e=s.onLabelUpdate("active",e,c.value,c.total))&&c.set.label(e),c.bind.transitionEnd(function(){s.onActive.call(m,c.value,c.total)})},success:function(e,t){e=e||s.text.success||s.text.active,c.debug("Setting success state"),u.addClass(n.success),c.remove.active(),c.remove.warning(),c.remove.error(),c.complete(t),e=s.text.success?s.onLabelUpdate("success",e,c.value,c.total):s.onLabelUpdate("active",e,c.value,c.total),c.set.label(e),c.bind.transitionEnd(function(){s.onSuccess.call(m,c.total)})},warning:function(e,t){e=e||s.text.warning,c.debug("Setting warning state"),u.addClass(n.warning),c.remove.active(),c.remove.success(),c.remove.error(),c.complete(t),(e=s.onLabelUpdate("warning",e,c.value,c.total))&&c.set.label(e),c.bind.transitionEnd(function(){s.onWarning.call(m,c.value,c.total)})},error:function(e,t){e=e||s.text.error,c.debug("Setting error state"),u.addClass(n.error),c.remove.active(),c.remove.success(),c.remove.warning(),c.complete(t),(e=s.onLabelUpdate("error",e,c.value,c.total))&&c.set.label(e),c.bind.transitionEnd(function(){s.onError.call(m,c.value,c.total)})},transitionEvent:function(){c.get.transitionEnd()},total:function(e){c.total=e},value:function(e){c.value=c.helper.forceArray(e)},progress:function(e){c.has.progressPoll()?(c.debug("Updated within interval, setting next update to use new value",e),c.set.nextValue(e)):(c.debug("First update in progress update interval, immediately updating",e),c.update.progress(e),c.create.progressPoll())},nextValue:function(e){c.nextValue=e}},update:{toNextValue:function(){var e=c.nextValue;e&&(c.debug("Update interval complete using last updated value",e),c.update.progress(e),c.remove.nextValue())},progress:function(e){var n=c.has.total();n&&c.set.value(e);var t=c.helper.forceArray(e).map(function(e){var t;return!1===(e=c.get.numericValue(e))&&c.error(l.nonNumeric,e),e=c.get.normalizedValue(e),n?(t=e/c.total*100,c.debug("Calculating percent complete from total",t)):(t=e,c.debug("Setting value to exact percentage value",t)),t});c.set.percent(t)}},setting:function(e,t){if(c.debug("Changing setting",e,t),T.isPlainObject(e))T.extend(!0,s,e);else{if(t===D)return s[e];T.isPlainObject(s[e])?T.extend(!0,s[e],t):s[e]=t}},internal:function(e,t){if(T.isPlainObject(e))T.extend(!0,c,e);else{if(t===D)return c[e];c[e]=t}},debug:function(){!s.silent&&s.debug&&(s.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,s.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!s.silent&&s.verbose&&s.debug&&(s.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,s.name+":"),c.verbose.apply(console,arguments)))},error:function(){s.silent||(c.error=Function.prototype.bind.call(console.error,console,s.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,n;s.performance&&(n=(t=(new Date).getTime())-(y||t),y=t,x.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:m,"Execution Time":n})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var e=s.name+":",n=0;y=!1,clearTimeout(c.performance.timer),T.each(x,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",b&&(e+=" '"+b+"'"),(console.group!==D||console.table!==D)&&0<x.length&&(console.groupCollapsed(e),console.table?console.table(x):T.each(x,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),x=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||k,t=m||t,"string"==typeof i&&r!==D&&(i=i.split(/[\. ]/),o=i.length-1,T.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(T.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==D)return a=r[n],!1;if(!T.isPlainObject(r[t])||e==o)return r[t]!==D?a=r[t]:c.error(l.method,i),!1;r=r[t]}})),T.isFunction(a)?n=a.apply(t,e):a!==D&&(n=a),Array.isArray(v)?v.push(n):v!==D?v=[v,n]:n!==D&&(v=n),a}},w?(g===D&&c.initialize(),c.invoke(C)):(g!==D&&g.invoke("destroy"),c.initialize())}),v!==D?v:this},T.fn.progress.settings={name:"Progress",namespace:"progress",silent:!1,debug:!1,verbose:!1,performance:!0,random:{min:2,max:5},duration:300,updateInterval:"auto",autoSuccess:!0,showActivity:!0,limitValues:!0,label:"percent",precision:0,framerate:1e3/30,percent:!1,total:!1,value:!1,failSafeDelay:100,onLabelUpdate:function(e,t,n,i){return t},onChange:function(e,t,n){},onSuccess:function(e){},onActive:function(e,t){},onError:function(e,t){},onWarning:function(e,t){},error:{method:"The method you called is not defined.",nonNumeric:"Progress value is non numeric",tooHigh:"Value specified is above 100%",tooLow:"Value specified is below 0%",sumExceedsTotal:"Sum of multple values exceed total"},regExp:{variable:/\{\$*[A-z0-9]+\}/g},metadata:{percent:"percent",total:"total",value:"value"},selector:{bar:"> .bar",label:"> .label",progress:".bar > .progress"},text:{active:!1,error:!1,success:!1,warning:!1,percent:"{percent}%",ratio:"{value} of {total}",bars:[""]},className:{active:"active",error:"error",success:"success",warning:"warning"}}}(jQuery,window,document),function(H,t,U,B){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),H.fn.slider=function(P){var O,e=H(this),R=H(t),M=e.selector||"",I=(new Date).getTime(),j=[],q=P,L="string"==typeof q,V=[].slice.call(arguments,1),z=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],N=0;return e.each(function(){var m,s,l,e,g,r,t,o,p,h,v,c,n,u,a,b,d=H.isPlainObject(P)?H.extend(!0,{},H.fn.slider.settings,P):H.extend({},H.fn.slider.settings),i=d.className,f=d.metadata,y=d.namespace,x=d.error,C=d.keys,w=d.interpretLabel,k=!1,T="."+y,S="module-"+y,D=H(this),A=this,E=D.data(S),F=1;b={initialize:function(){b.debug("Initializing slider",d),a=!0,t=N+=1,n=b.setup.testOutTouch(),b.setup.layout(),b.setup.labels(),b.is.disabled()||b.bind.events(),b.read.metadata(),b.read.settings(),a=!1,b.instantiate()},instantiate:function(){b.verbose("Storing instance of slider",b),E=b,D.data(S,b)},destroy:function(){b.verbose("Destroying previous slider for",D),clearInterval(E.interval),b.unbind.events(),b.unbind.slidingEvents(),D.removeData(S),E=B},setup:{layout:function(){D.attr("tabindex")===B&&D.attr("tabindex",0),0==D.find(".inner").length&&D.append("<div class='inner'><div class='track'></div><div class='track-fill'></div><div class='thumb'></div></div>"),c=b.get.precision(),s=D.find(".thumb:not(.second)"),m=s,b.is.range()&&(0==D.find(".thumb.second").length&&D.find(".inner").append("<div class='thumb second'></div>"),l=D.find(".thumb.second")),e=D.find(".track"),g=D.find(".track-fill"),v=s.width()/2},labels:function(){b.is.labeled()&&(0!=(r=D.find(".labels:not(.auto)")).length?b.setup.customLabel():b.setup.autoLabel(),d.showLabelTicks&&D.addClass(i.ticked))},testOutTouch:function(){try{return U.createEvent("TouchEvent"),!0}catch(e){return!1}},customLabel:function(){var n,e=r.find(".label"),i=e.length,o=b.get.min(),a=b.get.max();e.each(function(e){var t=H(this).attr("data-value");n=t?((t=a<t?a:t<o?o:t)-o)/(a-o):(e+1)/(i+1),b.update.labelPosition(n,H(this))})},autoLabel:function(){if(0!=b.get.step()){0!=(r=D.find(".labels")).length?r.empty():r=D.append('<ul class="auto labels"></ul>').find(".labels");for(var e=0,t=b.get.numLabels();e<=t;e++){var n=b.get.label(e),i=""!==n?e%b.get.gapRatio()?H('<li class="halftick label"></li>'):H('<li class="label">'+n+"</li>"):null,o=e/t;i&&(b.update.labelPosition(o,i),r.append(i))}}}},bind:{events:function(){b.bind.globalKeyboardEvents(),b.bind.keyboardEvents(),b.bind.mouseEvents(),b.is.touch()&&b.bind.touchEvents(),d.autoAdjustLabels&&b.bind.windowEvents()},keyboardEvents:function(){b.verbose("Binding keyboard events"),D.on("keydown"+T,b.event.keydown)},globalKeyboardEvents:function(){H(U).on("keydown"+T+t,b.event.activateFocus)},mouseEvents:function(){b.verbose("Binding mouse events"),D.find(".track, .thumb, .inner").on("mousedown"+T,function(e){e.stopImmediatePropagation(),e.preventDefault(),b.event.down(e)}),D.on("mousedown"+T,b.event.down),D.on("mouseenter"+T,function(e){k=!0}),D.on("mouseleave"+T,function(e){k=!1})},touchEvents:function(){b.verbose("Binding touch events"),D.find(".track, .thumb, .inner").on("touchstart"+T,function(e){e.stopImmediatePropagation(),e.preventDefault(),b.event.down(e)}),D.on("touchstart"+T,b.event.down)},slidingEvents:function(){b.verbose("Binding page wide events while handle is being draged"),b.is.touch()?(H(U).on("touchmove"+T,b.event.move),H(U).on("touchend"+T,b.event.up)):(H(U).on("mousemove"+T,b.event.move),H(U).on("mouseup"+T,b.event.up))},windowEvents:function(){R.on("resize"+T,b.event.resize)}},unbind:{events:function(){D.find(".track, .thumb, .inner").off("mousedown"+T),D.find(".track, .thumb, .inner").off("touchstart"+T),D.off("mousedown"+T),D.off("mouseenter"+T),D.off("mouseleave"+T),D.off("touchstart"+T),D.off("keydown"+T),D.off("focusout"+T),H(U).off("keydown"+T+t,b.event.activateFocus),R.off("resize"+T)},slidingEvents:function(){b.is.touch()?(H(U).off("touchmove"+T),H(U).off("touchend"+T)):(H(U).off("mousemove"+T),H(U).off("mouseup"+T))}},event:{down:function(e){if(e.preventDefault(),b.is.range()){var t=b.determine.eventPos(e),n=b.determine.pos(t);m=d.preventCrossover&&b.is.range()&&b.thumbVal===b.secondThumbVal?(u=n,B):b.determine.closestThumb(n)}b.is.disabled()||b.bind.slidingEvents()},move:function(e){e.preventDefault();var t=b.determine.valueFromEvent(e);if(m===B){var n=b.determine.eventPos(e),i=b.determine.pos(n);m=i<u?s:l}if(0==b.get.step()||b.is.smooth()){var o=b.thumbVal,a=b.secondThumbVal,r=b.determine.smoothValueFromEvent(e);m.hasClass("second")?(d.preventCrossover&&b.is.range()&&(t=Math.max(o,t),r=Math.max(o,r)),a=t):(d.preventCrossover&&b.is.range()&&(t=Math.min(a,t),r=Math.min(a,r)),o=t),t=Math.abs(o-(a||0)),b.update.position(r),d.onMove.call(A,t,o,a)}else b.update.value(t,function(e,t,n){d.onMove.call(A,e,t,n)})},up:function(e){e.preventDefault();var t=b.determine.valueFromEvent(e);b.set.value(t),b.unbind.slidingEvents()},keydown:function(e,t){if(d.preventCrossover&&b.is.range()&&b.thumbVal===b.secondThumbVal&&(m=B),b.is.focused()&&H(U).trigger(e),t||b.is.focused()){var n=b.determine.keyMovement(e);if(0!=n)switch(e.preventDefault(),n){case 1:b.takeStep();break;case 2:b.takeStep(b.get.multiplier());break;case-1:b.backStep();break;case-2:b.backStep(b.get.multiplier())}}},activateFocus:function(e){!b.is.focused()&&b.is.hover()&&0!=b.determine.keyMovement(e)&&(e.preventDefault(),b.event.keydown(e,!0),D.focus())},resize:function(e){F!=b.get.gapRatio()&&(b.setup.labels(),F=b.get.gapRatio())}},resync:function(){b.verbose("Resyncing thumb position based on value"),b.is.range()&&b.update.position(b.secondThumbVal,l),b.update.position(b.thumbVal,s),b.setup.labels()},takeStep:function(e){e=e!=B?e:1;var t=b.get.step(),n=b.get.currentThumbValue();if(b.verbose("Taking a step"),0<t)b.set.value(n+t*e);else if(0==t){var i=b.get.precision(),o=n+e/i;b.set.value(Math.round(o*i)/i)}},backStep:function(e){e=e!=B?e:1;var t=b.get.step(),n=b.get.currentThumbValue();if(b.verbose("Going back a step"),0<t)b.set.value(n-t*e);else if(0==t){var i=b.get.precision(),o=n-e/i;b.set.value(Math.round(o*i)/i)}},is:{range:function(){return D.hasClass(d.className.range)},hover:function(){return k},focused:function(){return D.is(":focus")},disabled:function(){return D.hasClass(d.className.disabled)},labeled:function(){return D.hasClass(d.className.labeled)},reversed:function(){return D.hasClass(d.className.reversed)},vertical:function(){return D.hasClass(d.className.vertical)},smooth:function(){return d.smooth||D.hasClass(d.className.smooth)},touch:function(){return n}},get:{trackOffset:function(){return b.is.vertical()?e.offset().top:e.offset().left},trackLength:function(){return b.is.vertical()?e.height():e.width()},trackLeft:function(){return b.is.vertical()?e.position().top:e.position().left},trackStartPos:function(){return b.is.reversed()?b.get.trackLeft()+b.get.trackLength():b.get.trackLeft()},trackEndPos:function(){return b.is.reversed()?b.get.trackLeft():b.get.trackLeft()+b.get.trackLength()},trackStartMargin:function(){return(b.is.vertical()?b.is.reversed()?D.css("padding-bottom"):D.css("padding-top"):b.is.reversed()?D.css("padding-right"):D.css("padding-left"))||"0px"},trackEndMargin:function(){return(b.is.vertical()?b.is.reversed()?D.css("padding-top"):D.css("padding-bottom"):b.is.reversed()?D.css("padding-left"):D.css("padding-right"))||"0px"},precision:function(){var e,t=b.get.step();if(0!=t){var n=String(t).split(".");e=2==n.length?n[1].length:0}else e=d.decimalPlaces;var i=Math.pow(10,e);return b.debug("Precision determined",i),i},min:function(){return d.min},max:function(){var e=b.get.step(),t=b.get.min(),n=0===e?0:Math.floor((d.max-t)/e);return 0==(0===e?0:(d.max-t)%e)?d.max:t+n*e},step:function(){return d.step},numLabels:function(){var e=Math.round((b.get.max()-b.get.min())/b.get.step());return b.debug("Determined that there should be "+e+" labels"),e},labelType:function(){return d.labelType},label:function(e){if(w)return w(e);switch(d.labelType){case d.labelTypes.number:return Math.round((e*b.get.step()+b.get.min())*c)/c;case d.labelTypes.letter:return z[e%26];default:return e}},value:function(){return o},currentThumbValue:function(){return m!==B&&m.hasClass("second")?b.secondThumbVal:b.thumbVal},thumbValue:function(e){switch(e){case"second":if(b.is.range())return b.secondThumbVal;b.error(x.notrange);break;case"first":default:return b.thumbVal}},multiplier:function(){return d.pageMultiplier},thumbPosition:function(e){switch(e){case"second":if(b.is.range())return h;b.error(x.notrange);break;case"first":default:return p}},gapRatio:function(){var e=1;if(d.autoAdjustLabels){var t=b.get.numLabels(),n=b.get.trackLength(),i=1;if(0<n)for(;n/t*i<d.labelDistance;)t%i||(e=i),i+=1}return e}},determine:{pos:function(e){return b.is.reversed()?b.get.trackStartPos()-e+b.get.trackOffset():e-b.get.trackOffset()-b.get.trackStartPos()},closestThumb:function(e){var t=parseFloat(b.determine.thumbPos(s)),n=Math.abs(e-t),i=parseFloat(b.determine.thumbPos(l)),o=Math.abs(e-i);return n===o&&b.get.thumbValue()===b.get.min()?l:n<=o?s:l},closestThumbPos:function(e){var t=parseFloat(b.determine.thumbPos(s)),n=Math.abs(e-t),i=parseFloat(b.determine.thumbPos(l));return n<=Math.abs(e-i)?t:i},thumbPos:function(e){return b.is.vertical()?b.is.reversed()?e.css("bottom"):e.css("top"):b.is.reversed()?e.css("right"):e.css("left")},positionFromValue:function(e){var t=b.get.min(),n=b.get.max(),i=(e=n<e?n:e<t?t:e,b.get.trackLength()),o=(e-t)/(n-t),a=Math.round(o*i);return b.verbose("Determined position: "+a+" from value: "+e),a},positionFromRatio:function(e){var t=b.get.trackLength(),n=b.get.step(),i=Math.round(e*t);return 0==n?i:Math.round(i/n)*n},valueFromEvent:function(e){var t=b.determine.eventPos(e),n=b.determine.pos(t);return t<b.get.trackOffset()?b.is.reversed()?b.get.max():b.get.min():t>b.get.trackOffset()+b.get.trackLength()?b.is.reversed()?b.get.min():b.get.max():b.determine.value(n)},smoothValueFromEvent:function(e){var t,n=b.get.min(),i=b.get.max(),o=b.get.trackLength(),a=b.determine.eventPos(e)-b.get.trackOffset();return t=(a=a<0?0:o<a?o:a)/o,b.is.reversed()&&(t=1-t),t*(i-n)+n},eventPos:function(e){if(b.is.touch()){var t=e.changedTouches?e:e.originalEvent,n=t.changedTouches[0]?t.changedTouches:t.touches,i=n[0].pageY,o=n[0].pageX;return b.is.vertical()?i:o}var a=e.pageY||e.originalEvent.pageY,r=e.pageX||e.originalEvent.pageX;return b.is.vertical()?a:r},value:function(e){var t=b.is.reversed()?b.get.trackEndPos():b.get.trackStartPos(),n=(e-t)/((b.is.reversed()?b.get.trackStartPos():b.get.trackEndPos())-t),i=b.get.max()-b.get.min(),o=b.get.step(),a=n*i,r=0==o?a:Math.round(a/o)*o;return b.verbose("Determined value based upon position: "+e+" as: "+a),a!=r&&b.verbose("Rounding value to closest step: "+r),r=Math.round(r*c)/c,b.verbose("Cutting off additional decimal places"),r+b.get.min()},keyMovement:function(e){var t=e.which,n=b.is.vertical()?b.is.reversed()?C.downArrow:C.upArrow:C.downArrow,i=b.is.vertical()?b.is.reversed()?C.upArrow:C.downArrow:C.upArrow,o=b.is.vertical()?C.leftArrow:b.is.reversed()?C.rightArrow:C.leftArrow,a=b.is.vertical()?C.rightArrow:b.is.reversed()?C.leftArrow:C.rightArrow;return t==n||t==o?-1:t==i||t==a?1:t==C.pageDown?-2:t==C.pageUp?2:0}},handleNewValuePosition:function(e){var t=b.get.min(),n=b.get.max();return e<=t?e=t:n<=e&&(e=n),b.determine.positionFromValue(e)},set:{value:function(e){b.update.value(e,function(e,t,n){a&&!d.fireOnInit||(d.onChange.call(A,e,t,n),d.onMove.call(A,e,t,n))})},rangeValue:function(e,t){if(b.is.range()){var n=b.get.min(),i=b.get.max();e<=n?e=n:i<=e&&(e=i),t<=n?t=n:i<=t&&(t=i),b.thumbVal=e,b.secondThumbVal=t,o=Math.abs(b.thumbVal-b.secondThumbVal),b.update.position(b.thumbVal,s),b.update.position(b.secondThumbVal,l),a&&!d.fireOnInit||(d.onChange.call(A,o,b.thumbVal,b.secondThumbVal),d.onMove.call(A,o,b.thumbVal,b.secondThumbVal))}else b.error(x.notrange)},position:function(e,t){var n=b.determine.value(e);switch(t){case"second":b.secondThumbVal=n,b.update.position(n,l);break;default:b.thumbVal=n,b.update.position(n,s)}o=Math.abs(b.thumbVal-(b.secondThumbVal||0)),b.set.value(o)}},update:{value:function(e,t){var n=b.get.min(),i=b.get.max();e<=n?e=n:i<=e&&(e=i),b.is.range()?(m===B&&(m=e<=b.get.currentThumbValue()?s:l),m.hasClass("second")?(d.preventCrossover&&b.is.range()&&(e=Math.max(b.thumbVal,e)),b.secondThumbVal=e):(d.preventCrossover&&b.is.range()&&(e=Math.min(b.secondThumbVal,e)),b.thumbVal=e),o=Math.abs(b.thumbVal-b.secondThumbVal)):(o=e,b.thumbVal=o),b.update.position(e),b.debug("Setting slider value to "+o),"function"==typeof t&&t(o,b.thumbVal,b.secondThumbVal)},position:function(e,t){var n=b.handleNewValuePosition(e),i=t!=B?t:m,o=b.thumbVal||b.get.min(),a=b.secondThumbVal||b.get.min();b.is.range()&&i.hasClass("second")?(h=n,a=e):(p=n,o=e);var r,s,l=b.get.min(),c=b.get.max(),u=100*(e-l)/(c-l),d=100*(Math.min(o,a)-l)/(c-l),f=100*(1-(Math.max(o,a)-l)/(c-l));r=b.is.vertical()?b.is.reversed()?(s={bottom:"calc("+u+"% - "+v+"px)",top:"auto"},{bottom:d+"%",top:f+"%"}):(s={top:"calc("+u+"% - "+v+"px)",bottom:"auto"},{top:d+"%",bottom:f+"%"}):b.is.reversed()?(s={right:"calc("+u+"% - "+v+"px)",left:"auto"},{right:d+"%",left:f+"%"}):(s={left:"calc("+u+"% - "+v+"px)",right:"auto"},{left:d+"%",right:f+"%"}),i.css(s),g.css(r),b.debug("Setting slider position to "+n)},labelPosition:function(e,t){var n=b.get.trackStartMargin(),i=b.get.trackEndMargin(),o=b.is.vertical()?b.is.reversed()?"bottom":"top":b.is.reversed()?"right":"left",a=b.is.reversed()&&!b.is.vertical()?" - ":" + ",r="(100% - "+n+" - "+i+") * "+e;t.css(o,"calc("+r+a+n+")")}},goto:{max:function(){b.set.value(b.get.max())},min:function(){b.set.value(b.get.min())}},read:{metadata:function(){var e={thumbVal:D.data(f.thumbVal),secondThumbVal:D.data(f.secondThumbVal)};e.thumbVal&&(b.is.range()&&e.secondThumbVal?(b.debug("Current value set from metadata",e.thumbVal,e.secondThumbVal),b.set.rangeValue(e.thumbVal,e.secondThumbVal)):(b.debug("Current value set from metadata",e.thumbVal),b.set.value(e.thumbVal)))},settings:function(){!1!==d.start&&(b.is.range()?(b.debug("Start position set from settings",d.start,d.end),b.set.rangeValue(d.start,d.end)):(b.debug("Start position set from settings",d.start),b.set.value(d.start)))}},setting:function(e,t){if(b.debug("Changing setting",e,t),H.isPlainObject(e))H.extend(!0,d,e);else{if(t===B)return d[e];H.isPlainObject(d[e])?H.extend(!0,d[e],t):d[e]=t}},internal:function(e,t){if(H.isPlainObject(e))H.extend(!0,b,e);else{if(t===B)return b[e];b[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,d.name+":"),b.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),b.verbose.apply(console,arguments)))},error:function(){d.silent||(b.error=Function.prototype.bind.call(console.error,console,d.name+":"),b.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(I||t),I=t,j.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:A,"Execution Time":n})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500)},display:function(){var e=d.name+":",n=0;I=!1,clearTimeout(b.performance.timer),H.each(j,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",M&&(e+=" '"+M+"'"),(console.group!==B||console.table!==B)&&0<j.length&&(console.groupCollapsed(e),console.table?console.table(j):H.each(j,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),j=[]}},invoke:function(i,e,t){var o,a,n,r=E;return e=e||V,t=A||t,"string"==typeof i&&r!==B&&(i=i.split(/[\. ]/),o=i.length-1,H.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(H.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==B)return a=r[n],!1;if(!H.isPlainObject(r[t])||e==o)return r[t]!==B?a=r[t]:b.error(x.method,i),!1;r=r[t]}})),H.isFunction(a)?n=a.apply(t,e):a!==B&&(n=a),H.isArray(O)?O.push(n):O!==B?O=[O,n]:n!==B&&(O=n),a}},L?(E===B&&b.initialize(),b.invoke(q)):(E!==B&&E.invoke("destroy"),b.initialize())}),O!==B?O:this},H.fn.slider.settings={silent:!1,debug:!1,verbose:!1,performance:!0,name:"Slider",namespace:"slider",error:{method:"The method you called is not defined.",notrange:"This slider is not a range slider"},metadata:{thumbVal:"thumbVal",secondThumbVal:"secondThumbVal"},min:0,max:20,step:1,start:0,end:20,labelType:"number",showLabelTicks:!1,smooth:!1,autoAdjustLabels:!0,labelDistance:100,preventCrossover:!0,fireOnInit:!1,decimalPlaces:2,pageMultiplier:2,selector:{},className:{reversed:"reversed",disabled:"disabled",labeled:"labeled",ticked:"ticked",vertical:"vertical",range:"range",smooth:"smooth"},keys:{pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},labelTypes:{number:"number",letter:"letter"},onChange:function(e,t,n){},onMove:function(e,t,n){}}}(jQuery,window,document),function(k,e,t,T){"use strict";k.isFunction=k.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),k.fn.rating=function(g){var p,h=k(this),v=h.selector||"",b=(new Date).getTime(),y=[],x=g,C="string"==typeof x,w=[].slice.call(arguments,1);return h.each(function(){var e,a,r=k.isPlainObject(g)?k.extend(!0,{},k.fn.rating.settings,g):k.extend({},k.fn.rating.settings),t=r.namespace,s=r.className,n=r.metadata,i=r.selector,l=r.cssVars,o="."+t,c="module-"+t,u=this,d=k(this).data(c),f=k(this),m=f.find(i.icon);a={initialize:function(){a.verbose("Initializing rating module",r),0===m.length&&a.setup.layout(),r.interactive&&!a.is.disabled()?a.enable():a.disable(),a.set.initialLoad(),a.set.rating(a.get.initialRating()),a.remove.initialLoad(),a.instantiate()},instantiate:function(){a.verbose("Instantiating module",r),d=a,f.data(c,a)},destroy:function(){a.verbose("Destroying previous instance",d),a.remove.events(),f.removeData(c)},refresh:function(){m=f.find(i.icon)},setup:{layout:function(){var e=a.get.maxRating(),t=a.get.icon(),n=k.fn.rating.settings.templates.icon(e,t);a.debug("Generating icon html dynamically"),f.html(n),a.refresh()}},event:{mouseenter:function(){var e=k(this);e.nextAll().removeClass(s.selected),f.addClass(s.selected),e.addClass(s.selected).prevAll().addClass(s.selected)},mouseleave:function(){f.removeClass(s.selected),m.removeClass(s.selected)},click:function(){var e=k(this),t=a.get.rating(),n=m.index(e)+1;("auto"==r.clearable?1===m.length:r.clearable)&&t==n?a.clearRating():a.set.rating(n)}},clearRating:function(){a.debug("Clearing current rating"),a.set.rating(0)},bind:{events:function(){a.verbose("Binding events"),f.on("mouseenter"+o,i.icon,a.event.mouseenter).on("mouseleave"+o,i.icon,a.event.mouseleave).on("click"+o,i.icon,a.event.click)}},remove:{events:function(){a.verbose("Removing events"),f.off(o)},initialLoad:function(){e=!1}},enable:function(){a.debug("Setting rating to interactive mode"),a.bind.events(),f.removeClass(s.disabled)},disable:function(){a.debug("Setting rating to read-only mode"),a.remove.events(),f.addClass(s.disabled)},is:{initialLoad:function(){return e},disabled:function(){return f.hasClass(s.disabled)}},get:{icon:function(){var e=f.data(n.icon);return e&&f.removeData(n.icon),e||r.icon},initialRating:function(){return f.data(n.rating)!==T?(f.removeData(n.rating),f.data(n.rating)):r.initialRating},maxRating:function(){return f.data(n.maxRating)!==T?(f.removeData(n.maxRating),f.data(n.maxRating)):r.maxRating},rating:function(){var e=m.filter("."+s.active).length;return a.verbose("Current rating retrieved",e),e}},set:{rating:function(e){var t=Math.floor(0<=e-1?e-1:0),n=m.eq(t),i=e<=1?n:n.next(),o=e%1*100;f.removeClass(s.selected),m.removeClass(s.selected).removeClass(s.active).removeClass(s.partiallyActive),0<e&&(a.verbose("Setting current rating to",e),n.prevAll().addBack().addClass(s.active),n.next()&&e%1!=0&&(i.addClass(s.partiallyActive).addClass(s.active),i.css(l.filledCustomPropName,o+"%"),"transparent"===i.css("backgroundColor")&&i.removeClass(s.partiallyActive).removeClass(s.active))),a.is.initialLoad()||r.onRate.call(u,e)},initialLoad:function(){e=!0}},setting:function(e,t){if(a.debug("Changing setting",e,t),k.isPlainObject(e))k.extend(!0,r,e);else{if(t===T)return r[e];k.isPlainObject(r[e])?k.extend(!0,r[e],t):r[e]=t}},internal:function(e,t){if(k.isPlainObject(e))k.extend(!0,a,e);else{if(t===T)return a[e];a[e]=t}},debug:function(){!r.silent&&r.debug&&(r.performance?a.performance.log(arguments):(a.debug=Function.prototype.bind.call(console.info,console,r.name+":"),a.debug.apply(console,arguments)))},verbose:function(){!r.silent&&r.verbose&&r.debug&&(r.performance?a.performance.log(arguments):(a.verbose=Function.prototype.bind.call(console.info,console,r.name+":"),a.verbose.apply(console,arguments)))},error:function(){r.silent||(a.error=Function.prototype.bind.call(console.error,console,r.name+":"),a.error.apply(console,arguments))},performance:{log:function(e){var t,n;r.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:u,"Execution Time":n})),clearTimeout(a.performance.timer),a.performance.timer=setTimeout(a.performance.display,500)},display:function(){var e=r.name+":",n=0;b=!1,clearTimeout(a.performance.timer),k.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",v&&(e+=" '"+v+"'"),1<h.length&&(e+=" ("+h.length+")"),(console.group!==T||console.table!==T)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):k.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=d;return e=e||w,t=u||t,"string"==typeof i&&r!==T&&(i=i.split(/[\. ]/),o=i.length-1,k.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(k.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==T)return a=r[n],!1;if(!k.isPlainObject(r[t])||e==o)return r[t]!==T&&(a=r[t]),!1;r=r[t]}})),k.isFunction(a)?n=a.apply(t,e):a!==T&&(n=a),Array.isArray(p)?p.push(n):p!==T?p=[p,n]:n!==T&&(p=n),a}},C?(d===T&&a.initialize(),a.invoke(x)):(d!==T&&d.invoke("destroy"),a.initialize())}),p!==T?p:this},k.fn.rating.settings={name:"Rating",namespace:"rating",icon:"star",silent:!1,debug:!1,verbose:!1,performance:!0,initialRating:0,interactive:!0,maxRating:4,clearable:"auto",fireOnInit:!1,onRate:function(e){},error:{method:"The method you called is not defined",noMaximum:"No maximum rating specified. Cannot generate HTML automatically"},metadata:{rating:"rating",maxRating:"maxRating",icon:"icon"},className:{active:"active",disabled:"disabled",selected:"selected",loading:"loading",partiallyActive:"partial"},cssVars:{filledCustomPropName:"--full"},selector:{icon:".icon"},templates:{icon:function(e,t){for(var n=1,i="";n<=e;)i+='<i class="'+t+' icon"></i>',n++;return i}}}}(jQuery,window,document),function(F,P,O,R){"use strict";F.isFunction=F.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},P=void 0!==P&&P.Math==Math?P:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),F.fn.search=function(x){var C,w=F(this),k=w.selector||"",T=(new Date).getTime(),S=[],D=x,A="string"==typeof D,E=[].slice.call(arguments,1);return F(this).each(function(){var f,u=F.isPlainObject(x)?F.extend(!0,{},F.fn.search.settings,x):F.extend({},F.fn.search.settings),m=u.className,c=u.metadata,i=u.regExp,a=u.fields,g=u.selector,d=u.error,e=u.namespace,o="."+e,t=e+"-module",p=F(this),h=p.find(g.prompt),n=p.find(g.searchButton),r=p.find(g.results),s=p.find(g.result),v=(p.find(g.category),this),l=p.data(t),b=!1,y=!1;f={initialize:function(){f.verbose("Initializing module"),f.get.settings(),f.determine.searchFields(),f.bind.events(),f.set.type(),f.create.results(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of module",f),l=f,p.data(t,f)},destroy:function(){f.verbose("Destroying instance"),p.off(o).removeData(t)},refresh:function(){f.debug("Refreshing selector cache"),h=p.find(g.prompt),n=p.find(g.searchButton),p.find(g.category),r=p.find(g.results),s=p.find(g.result)},refreshResults:function(){r=p.find(g.results),s=p.find(g.result)},bind:{events:function(){f.verbose("Binding events to search"),u.automatic&&(p.on(f.get.inputEvent()+o,g.prompt,f.event.input),h.attr("autocomplete","off")),p.on("focus"+o,g.prompt,f.event.focus).on("blur"+o,g.prompt,f.event.blur).on("keydown"+o,g.prompt,f.handleKeyboard).on("click"+o,g.searchButton,f.query).on("mousedown"+o,g.results,f.event.result.mousedown).on("mouseup"+o,g.results,f.event.result.mouseup).on("click"+o,g.result,f.event.result.click)}},determine:{searchFields:function(){x&&x.searchFields!==R&&(u.searchFields=x.searchFields)}},event:{input:function(){u.searchDelay?(clearTimeout(f.timer),f.timer=setTimeout(function(){f.is.focused()&&f.query()},u.searchDelay)):f.query()},focus:function(){f.set.focus(),u.searchOnFocus&&f.has.minimumCharacters()&&f.query(function(){f.can.show()&&f.showResults()})},blur:function(e){function t(){f.cancel.query(),f.remove.focus(),f.timer=setTimeout(f.hideResults,u.hideDelay)}var n=O.activeElement===this;n||(y=!1,f.resultsClicked?(f.debug("Determining if user action caused search to close"),p.one("click.close"+o,g.results,function(e){f.is.inMessage(e)||b?h.focus():(b=!1,f.is.animating()||f.is.hidden()||t())})):(f.debug("Input blurred without user action, closing results"),t()))},result:{mousedown:function(){f.resultsClicked=!0},mouseup:function(){f.resultsClicked=!1},click:function(e){f.debug("Search result selected");var t=F(this),n=t.find(g.title).eq(0),i=t.is("a[href]")?t:t.find("a[href]").eq(0),o=i.attr("href")||!1,a=i.attr("target")||!1,r=0<n.length&&n.text(),s=f.get.results(),l=t.data(c.result)||f.get.result(r,s);if(r&&f.set.value(r),F.isFunction(u.onSelect)&&!1===u.onSelect.call(v,l,s))return f.debug("Custom onSelect callback cancelled default select action"),void(b=!0);f.hideResults(),o&&(f.verbose("Opening search link found in result",i),"_blank"==a||e.ctrlKey?P.open(o):P.location.href=o)}}},ensureVisible:function(e){var t,n,i,o;n=(t=e.position().top)+e.outerHeight(!0),i=r.scrollTop(),o=r.height(),parseInt(r.css("paddingTop"),0),parseInt(r.css("paddingBottom"),0),t<0?r.scrollTop(i+t):o<n&&r.scrollTop(i+(n-o))},handleKeyboard:function(e){var t,n=p.find(g.result),i=p.find(g.category),o=n.filter("."+m.active),a=n.index(o),r=n.length,s=0<o.length,l=e.which,c=13,u=38,d=40;if(l==27&&(f.verbose("Escape key pressed, blurring search field"),f.hideResults(),y=!0),f.is.visible())if(l==c){if(f.verbose("Enter key pressed, selecting active result"),0<n.filter("."+m.active).length)return f.event.result.click.call(n.filter("."+m.active),e),e.preventDefault(),!1}else l==u&&s?(f.verbose("Up key pressed, changing active result"),t=a-1<0?a:a-1,i.removeClass(m.active),n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active),f.ensureVisible(n.eq(t)),e.preventDefault()):l==d&&(f.verbose("Down key pressed, changing active result"),t=r<=a+1?a:a+1,i.removeClass(m.active),n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active),f.ensureVisible(n.eq(t)),e.preventDefault());else l==c&&(f.verbose("Enter key pressed, executing query"),f.query(),f.set.buttonPressed(),h.one("keyup",f.remove.buttonFocus))},setup:{api:function(t,n){var e={debug:u.debug,on:!1,cache:u.cache,action:"search",urlData:{query:t},onSuccess:function(e){f.parse.response.call(v,e,t),n()},onFailure:function(){f.displayMessage(d.serverError),n()},onAbort:function(e){},onError:f.error};F.extend(!0,e,u.apiSettings),f.verbose("Setting up API request",e),p.api(e)}},can:{useAPI:function(){return F.fn.api!==R},show:function(){return f.is.focused()&&!f.is.visible()&&!f.is.empty()},transition:function(){return u.transition&&F.fn.transition!==R&&p.transition("is supported")}},is:{animating:function(){return r.hasClass(m.animating)},hidden:function(){return r.hasClass(m.hidden)},inMessage:function(e){if(e.target){var t=F(e.target);return F.contains(O.documentElement,e.target)&&0<t.closest(g.message).length}},empty:function(){return""===r.html()},visible:function(){return 0<r.filter(":visible").length},focused:function(){return 0<h.filter(":focus").length}},get:{settings:function(){F.isPlainObject(x)&&x.searchFullText&&(u.fullTextSearch=x.searchFullText,f.error(u.error.oldSearchSyntax,v)),u.ignoreDiacritics&&!String.prototype.normalize&&(u.ignoreDiacritics=!1,f.error(d.noNormalize,v))},inputEvent:function(){var e=h[0];return e!==R&&e.oninput!==R?"input":e!==R&&e.onpropertychange!==R?"propertychange":"keyup"},value:function(){return h.val()},results:function(){return p.data(c.results)},result:function(n,e){var i=!1;return n=n!==R?n:f.get.value(),e=e!==R?e:f.get.results(),"category"===u.type?(f.debug("Finding result that matches",n),F.each(e,function(e,t){if(Array.isArray(t.results)&&(i=f.search.object(n,t.results)[0]))return!1})):(f.debug("Finding result in results object",n),i=f.search.object(n,e)[0]),i||!1}},select:{firstResult:function(){f.verbose("Selecting first result"),s.first().addClass(m.active)}},set:{focus:function(){p.addClass(m.focus)},loading:function(){p.addClass(m.loading)},value:function(e){f.verbose("Setting search input value",e),h.val(e)},type:function(e){e=e||u.type,"category"==u.type&&p.addClass(u.type)},buttonPressed:function(){n.addClass(m.pressed)}},remove:{loading:function(){p.removeClass(m.loading)},focus:function(){p.removeClass(m.focus)},buttonPressed:function(){n.removeClass(m.pressed)},diacritics:function(e){return u.ignoreDiacritics?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}},query:function(e){e=F.isFunction(e)?e:function(){};var t=f.get.value(),n=f.read.cache(t);e=e||function(){},f.has.minimumCharacters()?(n?(f.debug("Reading result from cache",t),f.save.results(n.results),f.addResults(n.html),f.inject.id(n.results),e()):(f.debug("Querying for",t),F.isPlainObject(u.source)||Array.isArray(u.source)?(f.search.local(t),e()):f.can.useAPI()?f.search.remote(t,e):(f.error(d.source),e())),u.onSearchQuery.call(v,t)):f.hideResults()},search:{local:function(e){var t,n=f.search.object(e,u.source);f.set.loading(),f.save.results(n),f.debug("Returned full local search results",n),0<u.maxResults&&(f.debug("Using specified max results",n),n=n.slice(0,u.maxResults)),"category"==u.type&&(n=f.create.categoryResults(n)),t=f.generateResults({results:n}),f.remove.loading(),f.addResults(t),f.inject.id(n),f.write.cache(e,{html:t,results:n})},remote:function(e,t){t=F.isFunction(t)?t:function(){},p.api("is loading")&&p.api("abort"),f.setup.api(e,t),p.api("query")},object:function(o,t,e){o=f.remove.diacritics(String(o));function a(e,t){var n=-1==F.inArray(t,r),i=-1==F.inArray(t,l),o=-1==F.inArray(t,s);n&&i&&o&&e.push(t)}var r=[],s=[],l=[],n=o.replace(i.escape,"\\$&"),c=new RegExp(i.beginsWith+n,"i");return t=t||u.source,e=e!==R?e:u.searchFields,Array.isArray(e)||(e=[e]),t===R||!1===t?(f.error(d.source),[]):(F.each(e,function(e,i){F.each(t,function(e,t){var n;"string"!=typeof t[i]&&"number"!=typeof t[i]||(-1!==(n="string"==typeof t[i]?f.remove.diacritics(t[i]):t[i].toString()).search(c)?a(r,t):"exact"===u.fullTextSearch&&f.exactSearch(o,n)?a(s,t):1==u.fullTextSearch&&f.fuzzySearch(o,n)&&a(l,t))})}),F.merge(s,l),F.merge(r,s),r)}},exactSearch:function(e,t){return e=e.toLowerCase(),-1<(t=t.toLowerCase()).indexOf(e)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if("string"!=typeof e)return!1;if(e=e.toLowerCase(),t=t.toLowerCase(),n<i)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},parse:{response:function(e,t){if(Array.isArray(e)){var n={};n[a.results]=e,e=n}var i=f.generateResults(e);f.verbose("Parsing server response",e),e!==R&&t!==R&&e[a.results]!==R&&(f.addResults(i),f.inject.id(e[a.results]),f.write.cache(t,{html:i,results:e[a.results]}),f.save.results(e[a.results]))}},cancel:{query:function(){f.can.useAPI()&&p.api("abort")}},has:{minimumCharacters:function(){return f.get.value().length>=u.minCharacters},results:function(){return 0!==r.length&&""!=r.html()}},clear:{cache:function(e){var t=p.data(c.cache);e?e&&t&&t[e]&&(f.debug("Removing value from cache",e),delete t[e],p.data(c.cache,t)):(f.debug("Clearing cache",e),p.removeData(c.cache))}},read:{cache:function(e){var t=p.data(c.cache);return!!u.cache&&(f.verbose("Checking cache for generated html for query",e),"object"==typeof t&&t[e]!==R&&t[e])}},create:{categoryResults:function(e){var n={};return F.each(e,function(e,t){t.category&&(n[t.category]===R?(f.verbose("Creating new category of results",t.category),n[t.category]={name:t.category,results:[t]}):n[t.category].results.push(t))}),n},id:function(e,t){var n,i=e+1;return t!==R?(n=String.fromCharCode(97+t)+i,f.verbose("Creating category result id",n)):(n=i,f.verbose("Creating result id",n)),n},results:function(){0===r.length&&(r=F("<div />").addClass(m.results).appendTo(p))}},inject:{result:function(e,t,n){f.verbose("Injecting result into results");var i=n!==R?r.children().eq(n).children(g.results).first().children(g.result).eq(t):r.children(g.result).eq(t);f.verbose("Injecting results metadata",i),i.data(c.result,e)},id:function(e){f.debug("Injecting unique ids into results");var n=0,i=0;return"category"===u.type?F.each(e,function(e,t){0<t.results.length&&(i=0,F.each(t.results,function(e,t){t.id===R&&(t.id=f.create.id(i,n)),f.inject.result(t,i,n),i++}),n++)}):F.each(e,function(e,t){t.id===R&&(t.id=f.create.id(i)),f.inject.result(t,i),i++}),e}},save:{results:function(e){f.verbose("Saving current search results to metadata",e),p.data(c.results,e)}},write:{cache:function(e,t){var n=p.data(c.cache)!==R?p.data(c.cache):{};u.cache&&(f.verbose("Writing generated html to cache",e,t),n[e]=t,p.data(c.cache,n))}},addResults:function(e){if(F.isFunction(u.onResultsAdd)&&!1===u.onResultsAdd.call(r,e))return f.debug("onResultsAdd callback cancelled default action"),!1;e?(r.html(e),f.refreshResults(),u.selectFirstResult&&f.select.firstResult(),f.showResults()):f.hideResults(function(){r.empty()})},showResults:function(e){e=F.isFunction(e)?e:function(){},y||!f.is.visible()&&f.has.results()&&(f.can.transition()?(f.debug("Showing results with css animations"),r.transition({animation:u.transition+" in",debug:u.debug,verbose:u.verbose,duration:u.duration,onShow:function(){var e=p.find(g.result).eq(0);0<e.length&&f.ensureVisible(e)},onComplete:function(){e()},queue:!0})):(f.debug("Showing results with javascript"),r.stop().fadeIn(u.duration,u.easing)),u.onResultsOpen.call(r))},hideResults:function(e){e=F.isFunction(e)?e:function(){},f.is.visible()&&(f.can.transition()?(f.debug("Hiding results with css animations"),r.transition({animation:u.transition+" out",debug:u.debug,verbose:u.verbose,duration:u.duration,onComplete:function(){e()},queue:!0})):(f.debug("Hiding results with javascript"),r.stop().fadeOut(u.duration,u.easing)),u.onResultsClose.call(r))},generateResults:function(e){f.debug("Generating html from response",e);var t=u.templates[u.type],n=F.isPlainObject(e[a.results])&&!F.isEmptyObject(e[a.results]),i=Array.isArray(e[a.results])&&0<e[a.results].length,o="";return n||i?(0<u.maxResults&&(n?"standard"==u.type&&f.error(d.maxResults):e[a.results]=e[a.results].slice(0,u.maxResults)),F.isFunction(t)?o=t(e,a,u.preserveHTML):f.error(d.noTemplate,!1)):u.showNoResults&&(o=f.displayMessage(d.noResults,"empty",d.noResultsHeader)),u.onResults.call(v,e),o},displayMessage:function(e,t,n){return t=t||"standard",f.debug("Displaying message",e,t,n),f.addResults(u.templates.message(e,t,n)),u.templates.message(e,t,n)},setting:function(e,t){if(F.isPlainObject(e))F.extend(!0,u,e);else{if(t===R)return u[e];u[e]=t}},internal:function(e,t){if(F.isPlainObject(e))F.extend(!0,f,e);else{if(t===R)return f[e];f[e]=t}},debug:function(){!u.silent&&u.debug&&(u.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,u.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),f.verbose.apply(console,arguments)))},error:function(){u.silent||(f.error=Function.prototype.bind.call(console.error,console,u.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(T||t),T=t,S.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:v,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var e=u.name+":",n=0;T=!1,clearTimeout(f.performance.timer),F.each(S,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",k&&(e+=" '"+k+"'"),1<w.length&&(e+=" ("+w.length+")"),(console.group!==R||console.table!==R)&&0<S.length&&(console.groupCollapsed(e),console.table?console.table(S):F.each(S,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),S=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||E,t=v||t,"string"==typeof i&&r!==R&&(i=i.split(/[\. ]/),o=i.length-1,F.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(F.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==R)return a=r[n],!1;if(!F.isPlainObject(r[t])||e==o)return r[t]!==R&&(a=r[t]),!1;r=r[t]}})),F.isFunction(a)?n=a.apply(t,e):a!==R&&(n=a),Array.isArray(C)?C.push(n):C!==R?C=[C,n]:n!==R&&(C=n),a}},A?(l===R&&f.initialize(),f.invoke(D)):(l!==R&&l.invoke("destroy"),f.initialize())}),C!==R?C:this},F.fn.search.settings={name:"Search",namespace:"search",silent:!1,debug:!1,verbose:!1,performance:!0,type:"standard",minCharacters:1,selectFirstResult:!1,apiSettings:!1,source:!1,searchOnFocus:!0,searchFields:["id","title","description"],displayField:"",fullTextSearch:"exact",ignoreDiacritics:!1,automatic:!0,hideDelay:0,searchDelay:200,maxResults:7,cache:!0,showNoResults:!0,preserveHTML:!0,transition:"scale",duration:200,easing:"easeOutExpo",onSelect:!1,onResultsAdd:!1,onSearchQuery:function(e){},onResults:function(e){},onResultsOpen:function(){},onResultsClose:function(){},className:{animating:"animating",active:"active",empty:"empty",focus:"focus",hidden:"hidden",loading:"loading",results:"results",pressed:"down"},error:{source:"Cannot search. No source used, and Semantic API module was not included",noResultsHeader:"No Results",noResults:"Your search returned no results",logging:"Error in debug logging, exiting.",noEndpoint:"No search endpoint was specified",noTemplate:"A valid template name was not specified.",oldSearchSyntax:"searchFullText setting has been renamed fullTextSearch for consistency, please adjust your settings.",serverError:"There was an issue querying the server.",maxResults:"Results must be an array to use maxResults setting",method:"The method you called is not defined.",noNormalize:'"ignoreDiacritics" setting will be ignored. Browser does not support String().normalize(). You may consider including <https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js> as a polyfill.'},metadata:{cache:"cache",results:"results",result:"result"},regExp:{escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,beginsWith:"(?:s|^)"},fields:{categories:"results",categoryName:"name",categoryResults:"results",description:"description",image:"image",price:"price",results:"results",title:"title",url:"url",action:"action",actionText:"text",actionURL:"url"},selector:{prompt:".prompt",searchButton:".search.button",results:".results",message:".results > .message",category:".category",result:".result",title:".title, .name"},templates:{escape:function(e,t){if(t)return e;var n={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return n[e]}):e},message:function(e,t,n){var i="";return e!==R&&t!==R&&(i+='<div class="message '+t+'">',n&&(i+='<div class="header">'+n+"</div>"),i+=' <div class="description">'+e+"</div>",i+="</div>"),i},category:function(e,n,i){var o="",a=F.fn.search.settings.templates.escape;return e[n.categoryResults]!==R&&(F.each(e[n.categoryResults],function(e,t){t[n.results]!==R&&0<t.results.length&&(o+='<div class="category">',t[n.categoryName]!==R&&(o+='<div class="name">'+a(t[n.categoryName],i)+"</div>"),o+='<div class="results">',F.each(t.results,function(e,t){t[n.url]?o+='<a class="result" href="'+t[n.url].replace(/"/g,"")+'">':o+='<a class="result">',t[n.image]!==R&&(o+='<div class="image"> <img src="'+t[n.image].replace(/"/g,"")+'"></div>'),o+='<div class="content">',t[n.price]!==R&&(o+='<div class="price">'+a(t[n.price],i)+"</div>"),t[n.title]!==R&&(o+='<div class="title">'+a(t[n.title],i)+"</div>"),t[n.description]!==R&&(o+='<div class="description">'+a(t[n.description],i)+"</div>"),o+="</div>",o+="</a>"}),o+="</div>",o+="</div>")}),e[n.action]&&(!1===n.actionURL?o+='<div class="action">'+a(e[n.action][n.actionText],i)+"</div>":o+='<a href="'+e[n.action][n.actionURL].replace(/"/g,"")+'" class="action">'+a(e[n.action][n.actionText],i)+"</a>"),o)},standard:function(e,n,i){var o="",a=F.fn.search.settings.templates.escape;return e[n.results]!==R&&(F.each(e[n.results],function(e,t){t[n.url]?o+='<a class="result" href="'+t[n.url].replace(/"/g,"")+'">':o+='<a class="result">',t[n.image]!==R&&(o+='<div class="image"> <img src="'+t[n.image].replace(/"/g,"")+'"></div>'),o+='<div class="content">',t[n.price]!==R&&(o+='<div class="price">'+a(t[n.price],i)+"</div>"),t[n.title]!==R&&(o+='<div class="title">'+a(t[n.title],i)+"</div>"),t[n.description]!==R&&(o+='<div class="description">'+a(t[n.description],i)+"</div>"),o+="</div>",o+="</a>"}),e[n.action]&&(!1===n.actionURL?o+='<div class="action">'+a(e[n.action][n.actionText],i)+"</div>":o+='<a href="'+e[n.action][n.actionURL].replace(/"/g,"")+'" class="action">'+a(e[n.action][n.actionText],i)+"</a>"),o)}}}}(jQuery,window,document),function(A,e,E,F){"use strict";A.isFunction=A.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),A.fn.shape=function(b){var y,x=A(this),C=(new Date).getTime(),w=[],k=b,T="string"==typeof k,S=[].slice.call(arguments,1),D=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,0)};return x.each(function(){var i,o,r,t=x.selector||"",s=A.isPlainObject(b)?A.extend(!0,{},A.fn.shape.settings,b):A.extend({},A.fn.shape.settings),e=s.namespace,l=s.selector,n=s.error,c=s.className,a="."+e,u="module-"+e,d=A(this),f=d.find(">"+l.sides),m=f.find(">"+l.side),g=!1,p=this,h=d.data(u);if(r={initialize:function(){r.verbose("Initializing module for",p),r.set.defaultSide(),r.instantiate()},instantiate:function(){r.verbose("Storing instance of module",r),h=r,d.data(u,h)},destroy:function(){r.verbose("Destroying previous module for",p),d.removeData(u).off(a)},refresh:function(){r.verbose("Refreshing selector cache for",p),d=A(p),f=A(this).find(l.sides),m=A(this).find(l.side)},repaint:function(){r.verbose("Forcing repaint event");(f[0]||E.createElement("div")).offsetWidth},animate:function(e,t){r.verbose("Animating box with properties",e),t=t||function(e){r.verbose("Executing animation callback"),e!==F&&e.stopPropagation(),r.reset(),r.set.active()},s.beforeChange.call(o[0]),r.get.transitionEvent()?(r.verbose("Starting CSS animation"),d.addClass(c.animating),f.css(e).one(r.get.transitionEvent(),t),r.set.duration(s.duration),D(function(){d.addClass(c.animating),i.addClass(c.hidden)})):t()},queue:function(e){r.debug("Queueing animation of",e),f.one(r.get.transitionEvent(),function(){r.debug("Executing queued animation"),setTimeout(function(){d.shape(e)},0)})},reset:function(){r.verbose("Animating states reset"),d.removeClass(c.animating).attr("style","").removeAttr("style"),f.attr("style","").removeAttr("style"),m.attr("style","").removeAttr("style").removeClass(c.hidden),o.removeClass(c.animating).attr("style","").removeAttr("style")},is:{complete:function(){return m.filter("."+c.active)[0]==o[0]},animating:function(){return d.hasClass(c.animating)},hidden:function(){return 0<d.closest(":hidden").length}},set:{defaultSide:function(){i=m.filter("."+s.className.active),o=0<i.next(l.side).length?i.next(l.side):m.first(),g=!1,r.verbose("Active side set to",i),r.verbose("Next side set to",o)},duration:function(e){e="number"==typeof(e=e||s.duration)?e+"ms":e,r.verbose("Setting animation duration",e),!s.duration&&0!==s.duration||f.add(m).css({"-webkit-transition-duration":e,"-moz-transition-duration":e,"-ms-transition-duration":e,"-o-transition-duration":e,"transition-duration":e})},currentStageSize:function(){var e=m.filter("."+s.className.active),t=e.outerWidth(!0),n=e.outerHeight(!0);d.css({width:t,height:n})},stageSize:function(){var e=d.clone().addClass(c.loading),t=e.find(">"+l.sides+">"+l.side),n=t.filter("."+s.className.active),i=g?t.eq(g):0<n.next(l.side).length?n.next(l.side):t.first(),o="next"===s.width?i.outerWidth(!0):"initial"===s.width?d.width():s.width,a="next"===s.height?i.outerHeight(!0):"initial"===s.height?d.height():s.height;n.removeClass(c.active),i.addClass(c.active),e.insertAfter(d),e.remove(),"auto"!==s.width&&(d.css("width",o+s.jitter),r.verbose("Specifying width during animation",o)),"auto"!==s.height&&(d.css("height",a+s.jitter),r.verbose("Specifying height during animation",a))},nextSide:function(e){g=e,o=m.filter(e),g=m.index(o),0===o.length&&(r.set.defaultSide(),r.error(n.side)),r.verbose("Next side manually set to",o)},active:function(){r.verbose("Setting new side to active",o),m.removeClass(c.active),o.addClass(c.active),s.onChange.call(o[0]),r.set.defaultSide()}},flip:{to:function(e,t){if(r.is.hidden())r.debug("Module not visible",o);else if(!r.is.complete()||r.is.animating()||s.allowRepeats){var n=r.get.transform[e]();r.is.animating()?r.queue("flip "+e):(r.debug("Flipping "+e,o),r.set.stageSize(),r.stage[t](),r.animate(n))}else r.debug("Side already visible",o)},up:function(){r.flip.to("up","above")},down:function(){r.flip.to("down","below")},left:function(){r.flip.to("left","left")},right:function(){r.flip.to("right","right")},over:function(){r.flip.to("over","behind")},back:function(){r.flip.to("back","behind")}},get:{transform:{up:function(){var e=i.outerHeight(!0)/2;return{transform:"translateY("+(o.outerHeight(!0)-e)+"px) translateZ(-"+e+"px) rotateX(-90deg)"}},down:function(){var e=i.outerHeight(!0)/2;return{transform:"translateY(-"+e+"px) translateZ(-"+e+"px) rotateX(90deg)"}},left:function(){var e=i.outerWidth(!0)/2;return{transform:"translateX("+(o.outerWidth(!0)-e)+"px) translateZ(-"+e+"px) rotateY(90deg)"}},right:function(){var e=i.outerWidth(!0)/2;return{transform:"translateX(-"+e+"px) translateZ(-"+e+"px) rotateY(-90deg)"}},over:function(){return{transform:"translateX("+-(i.outerWidth(!0)-o.outerWidth(!0))/2+"px) rotateY(180deg)"}},back:function(){return{transform:"translateX("+-(i.outerWidth(!0)-o.outerWidth(!0))/2+"px) rotateY(-180deg)"}}},transitionEvent:function(){var e,t=E.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==F)return n[e]},nextSide:function(){return 0<i.next(l.side).length?i.next(l.side):m.first()}},stage:{above:function(){var e={origin:(i.outerHeight(!0)-o.outerHeight(!0))/2,depth:{active:o.outerHeight(!0)/2,next:i.outerHeight(!0)/2}};r.verbose("Setting the initial animation position as above",o,e),i.css({transform:"rotateX(0deg)"}),o.addClass(c.animating).css({top:e.origin+"px",transform:"rotateX(90deg) translateZ("+e.depth.next+"px) translateY(-"+e.depth.active+"px)"})},below:function(){var e={origin:(i.outerHeight(!0)-o.outerHeight(!0))/2,depth:{active:o.outerHeight(!0)/2,next:i.outerHeight(!0)/2}};r.verbose("Setting the initial animation position as below",o,e),i.css({transform:"rotateX(0deg)"}),o.addClass(c.animating).css({top:e.origin+"px",transform:"rotateX(-90deg) translateZ("+e.depth.next+"px) translateY("+e.depth.active+"px)"})},left:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};r.verbose("Setting the initial animation position as left",o,n),i.css({transform:"rotateY(0deg)"}),o.addClass(c.animating).css({left:n.origin+"px",transform:"rotateY(-90deg) translateZ("+n.depth.next+"px) translateX(-"+n.depth.active+"px)"})},right:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};r.verbose("Setting the initial animation position as right",o,n),i.css({transform:"rotateY(0deg)"}),o.addClass(c.animating).css({left:n.origin+"px",transform:"rotateY(90deg) translateZ("+n.depth.next+"px) translateX("+n.depth.active+"px)"})},behind:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};r.verbose("Setting the initial animation position as behind",o,n),i.css({transform:"rotateY(0deg)"}),o.addClass(c.animating).css({left:n.origin+"px",transform:"rotateY(-180deg)"})}},setting:function(e,t){if(r.debug("Changing setting",e,t),A.isPlainObject(e))A.extend(!0,s,e);else{if(t===F)return s[e];A.isPlainObject(s[e])?A.extend(!0,s[e],t):s[e]=t}},internal:function(e,t){if(A.isPlainObject(e))A.extend(!0,r,e);else{if(t===F)return r[e];r[e]=t}},debug:function(){!s.silent&&s.debug&&(s.performance?r.performance.log(arguments):(r.debug=Function.prototype.bind.call(console.info,console,s.name+":"),r.debug.apply(console,arguments)))},verbose:function(){!s.silent&&s.verbose&&s.debug&&(s.performance?r.performance.log(arguments):(r.verbose=Function.prototype.bind.call(console.info,console,s.name+":"),r.verbose.apply(console,arguments)))},error:function(){s.silent||(r.error=Function.prototype.bind.call(console.error,console,s.name+":"),r.error.apply(console,arguments))},performance:{log:function(e){var t,n;s.performance&&(n=(t=(new Date).getTime())-(C||t),C=t,w.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:p,"Execution Time":n})),clearTimeout(r.performance.timer),r.performance.timer=setTimeout(r.performance.display,500)},display:function(){var e=s.name+":",n=0;C=!1,clearTimeout(r.performance.timer),A.each(w,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",t&&(e+=" '"+t+"'"),1<x.length&&(e+=" ("+x.length+")"),(console.group!==F||console.table!==F)&&0<w.length&&(console.groupCollapsed(e),console.table?console.table(w):A.each(w,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),w=[]}},invoke:function(i,e,t){var o,a,n,r=h;return e=e||S,t=p||t,"string"==typeof i&&r!==F&&(i=i.split(/[\. ]/),o=i.length-1,A.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(A.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==F)return a=r[n],!1;if(!A.isPlainObject(r[t])||e==o)return r[t]!==F&&(a=r[t]),!1;r=r[t]}})),A.isFunction(a)?n=a.apply(t,e):a!==F&&(n=a),Array.isArray(y)?y.push(n):y!==F?y=[y,n]:n!==F&&(y=n),a}},T){h===F&&r.initialize();var v=d.find("input");0<v.length?(v.blur(),setTimeout(function(){r.invoke(k)},150)):r.invoke(k)}else h!==F&&h.invoke("destroy"),r.initialize()}),y!==F?y:this},A.fn.shape.settings={name:"Shape",silent:!1,debug:!1,verbose:!1,jitter:0,performance:!0,namespace:"shape",width:"initial",height:"initial",beforeChange:function(){},onChange:function(){},allowRepeats:!1,duration:!1,error:{side:"You tried to switch to a side that does not exist.",method:"The method you called is not defined"},className:{animating:"animating",hidden:"hidden",loading:"loading",active:"active"},selector:{sides:".sides",side:".side"}}}(jQuery,window,document),function(M,I,j,q){"use strict";M.isFunction=M.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},I=void 0!==I&&I.Math==Math?I:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),M.fn.sidebar=function(x){var C,e=M(this),w=M(I),k=M(j),T=M("html"),S=M("head"),D=e.selector||"",A=(new Date).getTime(),E=[],F=x,P="string"==typeof F,O=[].slice.call(arguments,1),R=I.requestAnimationFrame||I.mozRequestAnimationFrame||I.webkitRequestAnimationFrame||I.msRequestAnimationFrame||function(e){setTimeout(e,0)};return e.each(function(){var r,s,e,t,l,c,u=M.isPlainObject(x)?M.extend(!0,{},M.fn.sidebar.settings,x):M.extend({},M.fn.sidebar.settings),n=u.selector,a=u.className,i=u.namespace,o=u.regExp,d=u.error,f="."+i,m="module-"+i,g=M(this),p=M(u.context),h=g.children(n.sidebar),v=(p.children(n.fixed),p.children(n.pusher)),b=this,y=g.data(m);c={initialize:function(){c.debug("Initializing sidebar",x),c.create.id(),l=c.get.transitionEvent(),u.delaySetup?R(c.setup.layout):c.setup.layout(),R(function(){c.setup.cache()}),c.instantiate()},instantiate:function(){c.verbose("Storing instance of module",c),y=c,g.data(m,c)},create:{id:function(){e=(Math.random().toString(16)+"000000000").substr(2,8),s="."+e,c.verbose("Creating unique id for element",e)}},destroy:function(){c.verbose("Destroying previous module for",g),g.off(f).removeData(m),c.is.ios()&&c.remove.ios(),p.off(s),w.off(s),k.off(s)},event:{clickaway:function(e){if(u.closable){var t=0<v.find(e.target).length||v.is(e.target),n=p.is(e.target);t&&(c.verbose("User clicked on dimmed page"),c.hide()),n&&(c.verbose("User clicked on dimmable context (scaled out page)"),c.hide())}},touch:function(e){},containScroll:function(e){b.scrollTop<=0&&(b.scrollTop=1),b.scrollTop+b.offsetHeight>=b.scrollHeight&&(b.scrollTop=b.scrollHeight-b.offsetHeight-1)},scroll:function(e){0===M(e.target).closest(n.sidebar).length&&e.preventDefault()}},bind:{clickaway:function(){c.verbose("Adding clickaway events to context",p),p.on("click"+s,c.event.clickaway).on("touchend"+s,c.event.clickaway)},scrollLock:function(){u.scrollLock&&(c.debug("Disabling page scroll"),w.on("DOMMouseScroll"+s,c.event.scroll)),c.verbose("Adding events to contain sidebar scroll"),k.on("touchmove"+s,c.event.touch),g.on("scroll"+f,c.event.containScroll)}},unbind:{clickaway:function(){c.verbose("Removing clickaway events from context",p),p.off(s)},scrollLock:function(){c.verbose("Removing scroll lock from page"),k.off(s),w.off(s),g.off("scroll"+f)}},add:{inlineCSS:function(){var e,t=c.cache.width||g.outerWidth(),n=c.cache.height||g.outerHeight(),i=c.is.rtl(),o=c.get.direction(),a={left:t,right:-t,top:n,bottom:-n};i&&(c.verbose("RTL detected, flipping widths"),a.left=-t,a.right=t),e="<style>","left"===o||"right"===o?(c.debug("Adding CSS rules for animation distance",t),e+=" .ui.visible."+o+".sidebar ~ .fixed, .ui.visible."+o+".sidebar ~ .pusher {   -webkit-transform: translate3d("+a[o]+"px, 0, 0);           transform: translate3d("+a[o]+"px, 0, 0); }"):"top"!==o&&"bottom"!=o||(e+=" .ui.visible."+o+".sidebar ~ .fixed, .ui.visible."+o+".sidebar ~ .pusher {   -webkit-transform: translate3d(0, "+a[o]+"px, 0);           transform: translate3d(0, "+a[o]+"px, 0); }"),c.is.ie()&&("left"===o||"right"===o?(c.debug("Adding CSS rules for animation distance",t),e+=" body.pushable > .ui.visible."+o+".sidebar ~ .pusher:after {   -webkit-transform: translate3d("+a[o]+"px, 0, 0);           transform: translate3d("+a[o]+"px, 0, 0); }"):"top"!==o&&"bottom"!=o||(e+=" body.pushable > .ui.visible."+o+".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, "+a[o]+"px, 0);           transform: translate3d(0, "+a[o]+"px, 0); }"),e+=" body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, 0, 0);           transform: translate3d(0, 0, 0); }"),r=M(e+="</style>").appendTo(S),c.debug("Adding sizing css to head",r)}},refresh:function(){c.verbose("Refreshing selector cache"),p=M(u.context),h=p.children(n.sidebar),v=p.children(n.pusher),p.children(n.fixed),c.clear.cache()},refreshSidebars:function(){c.verbose("Refreshing other sidebars"),h=p.children(n.sidebar)},repaint:function(){c.verbose("Forcing repaint event"),b.style.display="none";b.offsetHeight;b.scrollTop=b.scrollTop,b.style.display=""},setup:{cache:function(){c.cache={width:g.outerWidth(),height:g.outerHeight()}},layout:function(){0===p.children(n.pusher).length&&(c.debug("Adding wrapper element for sidebar"),c.error(d.pusher),v=M('<div class="pusher" />'),p.children().not(n.omitted).not(h).wrapAll(v),c.refresh()),0!==g.nextAll(n.pusher).length&&g.nextAll(n.pusher)[0]===v[0]||(c.debug("Moved sidebar to correct parent element"),c.error(d.movedSidebar,b),g.detach().prependTo(p),c.refresh()),c.clear.cache(),c.set.pushable(),c.set.direction()}},attachEvents:function(e,t){var n=M(e);t=M.isFunction(c[t])?c[t]:c.toggle,0<n.length?(c.debug("Attaching sidebar events to element",e,t),n.on("click"+f,t)):c.error(d.notFound,e)},show:function(e){if(e=M.isFunction(e)?e:function(){},c.is.hidden()){if(c.refreshSidebars(),u.overlay&&(c.error(d.overlay),u.transition="overlay"),c.refresh(),c.othersActive())if(c.debug("Other sidebars currently visible"),u.exclusive){if("overlay"!=u.transition)return void c.hideOthers(c.show);c.hideOthers()}else u.transition="overlay";c.pushPage(function(){e.call(b),u.onShow.call(b)}),u.onChange.call(b),u.onVisible.call(b)}else c.debug("Sidebar is already visible")},hide:function(e){e=M.isFunction(e)?e:function(){},(c.is.visible()||c.is.animating())&&(c.debug("Hiding sidebar",e),c.refreshSidebars(),c.pullPage(function(){e.call(b),u.onHidden.call(b)}),u.onChange.call(b),u.onHide.call(b))},othersAnimating:function(){return 0<h.not(g).filter("."+a.animating).length},othersVisible:function(){return 0<h.not(g).filter("."+a.visible).length},othersActive:function(){return c.othersVisible()||c.othersAnimating()},hideOthers:function(e){var t=h.not(g).filter("."+a.visible),n=t.length,i=0;e=e||function(){},t.sidebar("hide",function(){++i==n&&e()})},toggle:function(){c.verbose("Determining toggled direction"),c.is.hidden()?c.show():c.hide()},pushPage:function(t){var e,n,i,o=c.get.transition(),a="overlay"===o||c.othersActive()?g:v;t=M.isFunction(t)?t:function(){},"scale down"==u.transition&&c.scrollToTop(),c.set.transition(o),c.repaint(),e=function(){c.bind.clickaway(),c.add.inlineCSS(),c.set.animating(),c.set.visible()},n=function(){c.set.dimmed()},i=function(e){e.target==a[0]&&(a.off(l+s,i),c.remove.animating(),c.bind.scrollLock(),t.call(b))},a.off(l+s),a.on(l+s,i),R(e),u.dimPage&&!c.othersVisible()&&R(n)},pullPage:function(t){var e,n,i=c.get.transition(),o="overlay"==i||c.othersActive()?g:v;t=M.isFunction(t)?t:function(){},c.verbose("Removing context push state",c.get.direction()),c.unbind.clickaway(),c.unbind.scrollLock(),e=function(){c.set.transition(i),c.set.animating(),c.remove.visible(),u.dimPage&&!c.othersVisible()&&v.removeClass(a.dimmed)},n=function(e){e.target==o[0]&&(o.off(l+s,n),c.remove.animating(),c.remove.transition(),c.remove.inlineCSS(),("scale down"==i||u.returnScroll&&c.is.mobile())&&c.scrollBack(),t.call(b))},o.off(l+s),o.on(l+s,n),R(e)},scrollToTop:function(){c.verbose("Scrolling to top of page to avoid animation issues"),t=M(I).scrollTop(),g.scrollTop(0),I.scrollTo(0,0)},scrollBack:function(){c.verbose("Scrolling back to original page position"),I.scrollTo(0,t)},clear:{cache:function(){c.verbose("Clearing cached dimensions"),c.cache={}}},set:{ios:function(){T.addClass(a.ios)},pushed:function(){p.addClass(a.pushed)},pushable:function(){p.addClass(a.pushable)},dimmed:function(){v.addClass(a.dimmed)},active:function(){g.addClass(a.active)},animating:function(){g.addClass(a.animating)},transition:function(e){e=e||c.get.transition(),g.addClass(e)},direction:function(e){e=e||c.get.direction(),g.addClass(a[e])},visible:function(){g.addClass(a.visible)},overlay:function(){g.addClass(a.overlay)}},remove:{inlineCSS:function(){c.debug("Removing inline css styles",r),r&&0<r.length&&r.remove()},ios:function(){T.removeClass(a.ios)},pushed:function(){p.removeClass(a.pushed)},pushable:function(){p.removeClass(a.pushable)},active:function(){g.removeClass(a.active)},animating:function(){g.removeClass(a.animating)},transition:function(e){e=e||c.get.transition(),g.removeClass(e)},direction:function(e){e=e||c.get.direction(),g.removeClass(a[e])},visible:function(){g.removeClass(a.visible)},overlay:function(){g.removeClass(a.overlay)}},get:{direction:function(){return g.hasClass(a.top)?a.top:g.hasClass(a.right)?a.right:g.hasClass(a.bottom)?a.bottom:a.left},transition:function(){var e,t=c.get.direction();return e=c.is.mobile()?"auto"==u.mobileTransition?u.defaultTransition.mobile[t]:u.mobileTransition:"auto"==u.transition?u.defaultTransition.computer[t]:u.transition,c.verbose("Determined transition",e),e},transitionEvent:function(){var e,t=j.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==q)return n[e]}},is:{ie:function(){return!I.ActiveXObject&&"ActiveXObject"in I||"ActiveXObject"in I},ios:function(){var e=navigator.userAgent,t=e.match(o.ios),n=e.match(o.mobileChrome);return!(!t||n)&&(c.verbose("Browser was found to be iOS",e),!0)},mobile:function(){var e=navigator.userAgent;return e.match(o.mobile)?(c.verbose("Browser was found to be mobile",e),!0):(c.verbose("Browser is not mobile, using regular transition",e),!1)},hidden:function(){return!c.is.visible()},visible:function(){return g.hasClass(a.visible)},open:function(){return c.is.visible()},closed:function(){return c.is.hidden()},vertical:function(){return g.hasClass(a.top)},animating:function(){return p.hasClass(a.animating)},rtl:function(){return c.cache.rtl===q&&(c.cache.rtl="rtl"===g.attr("dir")||"rtl"===g.css("direction")),c.cache.rtl}},setting:function(e,t){if(c.debug("Changing setting",e,t),M.isPlainObject(e))M.extend(!0,u,e);else{if(t===q)return u[e];M.isPlainObject(u[e])?M.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(M.isPlainObject(e))M.extend(!0,c,e);else{if(t===q)return c[e];c[e]=t}},debug:function(){!u.silent&&u.debug&&(u.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,u.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),c.verbose.apply(console,arguments)))},error:function(){u.silent||(c.error=Function.prototype.bind.call(console.error,console,u.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(A||t),A=t,E.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:b,"Execution Time":n})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var e=u.name+":",n=0;A=!1,clearTimeout(c.performance.timer),M.each(E,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",D&&(e+=" '"+D+"'"),(console.group!==q||console.table!==q)&&0<E.length&&(console.groupCollapsed(e),console.table?console.table(E):M.each(E,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),E=[]}},invoke:function(i,e,t){var o,a,n,r=y;return e=e||O,t=b||t,"string"==typeof i&&r!==q&&(i=i.split(/[\. ]/),o=i.length-1,M.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(M.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==q)return a=r[n],!1;if(!M.isPlainObject(r[t])||e==o)return r[t]!==q?a=r[t]:c.error(d.method,i),!1;r=r[t]}})),M.isFunction(a)?n=a.apply(t,e):a!==q&&(n=a),Array.isArray(C)?C.push(n):C!==q?C=[C,n]:n!==q&&(C=n),a}},P?(y===q&&c.initialize(),c.invoke(F)):(y!==q&&c.invoke("destroy"),c.initialize())}),C!==q?C:this},M.fn.sidebar.settings={name:"Sidebar",namespace:"sidebar",silent:!1,debug:!1,verbose:!1,performance:!0,transition:"auto",mobileTransition:"auto",defaultTransition:{computer:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"},mobile:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"}},context:"body",exclusive:!1,closable:!0,dimPage:!0,scrollLock:!1,returnScroll:!1,delaySetup:!1,duration:500,onChange:function(){},onShow:function(){},onHide:function(){},onHidden:function(){},onVisible:function(){},className:{active:"active",animating:"animating",dimmed:"dimmed",ios:"ios",pushable:"pushable",pushed:"pushed",right:"right",top:"top",left:"left",bottom:"bottom",visible:"visible"},selector:{fixed:".fixed",omitted:"script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",pusher:".pusher",sidebar:".ui.sidebar"},regExp:{ios:/(iPad|iPhone|iPod)/g,mobileChrome:/(CriOS)/g,mobile:/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g},error:{method:"The method you called is not defined.",pusher:"Had to add pusher element. For optimal performance make sure body content is inside a pusher element",movedSidebar:"Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",overlay:"The overlay setting is no longer supported, use animation: overlay",notFound:"There were no elements that matched the specified selector"}}}(jQuery,window,document),function(S,D,A,E){"use strict";S.isFunction=S.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},D=void 0!==D&&D.Math==Math?D:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),S.fn.sticky=function(v){var b,e=S(this),y=e.selector||"",x=(new Date).getTime(),C=[],w=v,k="string"==typeof w,T=[].slice.call(arguments,1);return e.each(function(){var t,i,e,n,d,f=S.isPlainObject(v)?S.extend(!0,{},S.fn.sticky.settings,v):S.extend({},S.fn.sticky.settings),o=f.className,a=f.namespace,r=f.error,s="."+a,l="module-"+a,c=S(this),u=S(D),m=S(f.scrollContext),g=c.data(l),p=D.requestAnimationFrame||D.mozRequestAnimationFrame||D.webkitRequestAnimationFrame||D.msRequestAnimationFrame||function(e){setTimeout(e,0)},h=this;d={initialize:function(){d.determineContainer(),d.determineContext(),d.verbose("Initializing sticky",f,t),d.save.positions(),d.checkErrors(),d.bind.events(),f.observeChanges&&d.observeChanges(),d.instantiate()},instantiate:function(){d.verbose("Storing instance of module",d),g=d,c.data(l,d)},destroy:function(){d.verbose("Destroying previous instance"),d.reset(),e&&e.disconnect(),n&&n.disconnect(),u.off("load"+s,d.event.load).off("resize"+s,d.event.resize),m.off("scrollchange"+s,d.event.scrollchange),c.removeData(l)},observeChanges:function(){"MutationObserver"in D&&(e=new MutationObserver(d.event.documentChanged),n=new MutationObserver(d.event.changed),e.observe(A,{childList:!0,subtree:!0}),n.observe(h,{childList:!0,subtree:!0}),n.observe(i[0],{childList:!0,subtree:!0}),d.debug("Setting up mutation observer",n))},determineContainer:function(){t=f.container?S(f.container):c.offsetParent()},determineContext:function(){0!==(i=f.context?S(f.context):t).length||d.error(r.invalidContext,f.context,c)},checkErrors:function(){if(d.is.hidden()&&d.error(r.visible,c),d.cache.element.height>d.cache.context.height)return d.reset(),void d.error(r.elementSize,c)},bind:{events:function(){u.on("load"+s,d.event.load).on("resize"+s,d.event.resize),m.off("scroll"+s).on("scroll"+s,d.event.scroll).on("scrollchange"+s,d.event.scrollchange)}},event:{changed:function(e){clearTimeout(d.timer),d.timer=setTimeout(function(){d.verbose("DOM tree modified, updating sticky menu",e),d.refresh()},100)},documentChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==h||0<S(e).find(h).length)&&(d.debug("Element removed from DOM, tearing down events"),d.destroy())})})},load:function(){d.verbose("Page contents finished loading"),p(d.refresh)},resize:function(){d.verbose("Window resized"),p(d.refresh)},scroll:function(){p(function(){m.triggerHandler("scrollchange"+s,m.scrollTop())})},scrollchange:function(e,t){d.stick(t),f.onScroll.call(h)}},refresh:function(e){d.reset(),f.context||d.determineContext(),e&&d.determineContainer(),d.save.positions(),d.stick(),f.onReposition.call(h)},supports:{sticky:function(){var e=S("<div/>");return e.addClass(o.supported),e.css("position").match("sticky")}},save:{lastScroll:function(e){d.lastScroll=e},elementScroll:function(e){d.elementScroll=e},positions:function(){var e={height:m.height()},t={margin:{top:parseInt(c.css("margin-top"),10),bottom:parseInt(c.css("margin-bottom"),10)},offset:c.offset(),width:c.outerWidth(),height:c.outerHeight()},n={offset:i.offset(),height:i.outerHeight()};d.is.standardScroll()||(d.debug("Non-standard scroll. Removing scroll offset from element offset"),e.top=m.scrollTop(),e.left=m.scrollLeft(),t.offset.top+=e.top,n.offset.top+=e.top,t.offset.left+=e.left,n.offset.left+=e.left),d.cache={fits:t.height+f.offset<=e.height,sameHeight:t.height==n.height,scrollContext:{height:e.height},element:{margin:t.margin,top:t.offset.top-t.margin.top,left:t.offset.left,width:t.width,height:t.height,bottom:t.offset.top+t.height},context:{top:n.offset.top,height:n.height,bottom:n.offset.top+n.height}},d.set.containerSize(),d.stick(),d.debug("Caching element positions",d.cache)}},get:{direction:function(e){var t="down";return e=e||m.scrollTop(),d.lastScroll!==E&&(d.lastScroll<e?t="down":d.lastScroll>e&&(t="up")),t},scrollChange:function(e){return e=e||m.scrollTop(),d.lastScroll?e-d.lastScroll:0},currentElementScroll:function(){return d.elementScroll?d.elementScroll:d.is.top()?Math.abs(parseInt(c.css("top"),10))||0:Math.abs(parseInt(c.css("bottom"),10))||0},elementScroll:function(e){e=e||m.scrollTop();var t=d.cache.element,n=d.cache.scrollContext,i=d.get.scrollChange(e),o=t.height-n.height+f.offset,a=d.get.currentElementScroll(),r=a+i;return a=d.cache.fits||r<0?0:o<r?o:r}},remove:{lastScroll:function(){delete d.lastScroll},elementScroll:function(e){delete d.elementScroll},minimumSize:function(){t.css("min-height","")},offset:function(){c.css("margin-top","")}},set:{offset:function(){d.verbose("Setting offset on element",f.offset),c.css("margin-top",f.offset)},containerSize:function(){var e=t.get(0).tagName;"HTML"===e||"body"==e?d.determineContainer():Math.abs(t.outerHeight()-d.cache.context.height)>f.jitter&&(d.debug("Context has padding, specifying exact height for container",d.cache.context.height),t.css({height:d.cache.context.height}))},minimumSize:function(){var e=d.cache.element;t.css("min-height",e.height)},scroll:function(e){d.debug("Setting scroll on element",e),d.elementScroll!=e&&(d.is.top()&&c.css("bottom","").css("top",-e),d.is.bottom()&&c.css("top","").css("bottom",e))},size:function(){0!==d.cache.element.height&&0!==d.cache.element.width&&(h.style.setProperty("width",d.cache.element.width+"px","important"),h.style.setProperty("height",d.cache.element.height+"px","important"))}},is:{standardScroll:function(){return m[0]==D},top:function(){return c.hasClass(o.top)},bottom:function(){return c.hasClass(o.bottom)},initialPosition:function(){return!d.is.fixed()&&!d.is.bound()},hidden:function(){return!c.is(":visible")},bound:function(){return c.hasClass(o.bound)},fixed:function(){return c.hasClass(o.fixed)}},stick:function(e){var t=e||m.scrollTop(),n=d.cache,i=n.fits,o=n.sameHeight,a=n.element,r=n.scrollContext,s=n.context,l=d.is.bottom()&&f.pushing?f.bottomOffset:f.offset,c=(e={top:t+l,bottom:t+l+r.height},i?0:d.get.elementScroll(e.top)),u=!i;0===a.height||o||(d.is.initialPosition()?e.top>=s.bottom?(d.debug("Initial element position is bottom of container"),d.bindBottom()):e.top>a.top&&(a.height+e.top-c>=s.bottom?(d.debug("Initial element position is bottom of container"),d.bindBottom()):(d.debug("Initial element position is fixed"),d.fixTop())):d.is.fixed()?d.is.top()?e.top<=a.top?(d.debug("Fixed element reached top of container"),d.setInitialPosition()):a.height+e.top-c>=s.bottom?(d.debug("Fixed element reached bottom of container"),d.bindBottom()):u&&(d.set.scroll(c),d.save.lastScroll(e.top),d.save.elementScroll(c)):d.is.bottom()&&(e.bottom-a.height<=a.top?(d.debug("Bottom fixed rail has reached top of container"),d.setInitialPosition()):e.bottom>=s.bottom?(d.debug("Bottom fixed rail has reached bottom of container"),d.bindBottom()):u&&(d.set.scroll(c),d.save.lastScroll(e.top),d.save.elementScroll(c))):d.is.bottom()&&(e.top<=a.top?(d.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"),d.setInitialPosition()):f.pushing?d.is.bound()&&e.bottom<=s.bottom&&(d.debug("Fixing bottom attached element to bottom of browser."),d.fixBottom()):d.is.bound()&&e.top<=s.bottom-a.height&&(d.debug("Fixing bottom attached element to top of browser."),d.fixTop())))},bindTop:function(){d.debug("Binding element to top of parent container"),d.remove.offset(),c.css({left:"",top:"",marginBottom:""}).removeClass(o.fixed).removeClass(o.bottom).addClass(o.bound).addClass(o.top),f.onTop.call(h),f.onUnstick.call(h)},bindBottom:function(){d.debug("Binding element to bottom of parent container"),d.remove.offset(),c.css({left:"",top:""}).removeClass(o.fixed).removeClass(o.top).addClass(o.bound).addClass(o.bottom),f.onBottom.call(h),f.onUnstick.call(h)},setInitialPosition:function(){d.debug("Returning to initial position"),d.unfix(),d.unbind()},fixTop:function(){d.debug("Fixing element to top of page"),f.setSize&&d.set.size(),d.set.minimumSize(),d.set.offset(),c.css({left:d.cache.element.left,bottom:"",marginBottom:""}).removeClass(o.bound).removeClass(o.bottom).addClass(o.fixed).addClass(o.top),f.onStick.call(h)},fixBottom:function(){d.debug("Sticking element to bottom of page"),f.setSize&&d.set.size(),d.set.minimumSize(),d.set.offset(),c.css({left:d.cache.element.left,bottom:"",marginBottom:""}).removeClass(o.bound).removeClass(o.top).addClass(o.fixed).addClass(o.bottom),f.onStick.call(h)},unbind:function(){d.is.bound()&&(d.debug("Removing container bound position on element"),d.remove.offset(),c.removeClass(o.bound).removeClass(o.top).removeClass(o.bottom))},unfix:function(){d.is.fixed()&&(d.debug("Removing fixed position on element"),d.remove.minimumSize(),d.remove.offset(),c.removeClass(o.fixed).removeClass(o.top).removeClass(o.bottom),f.onUnstick.call(h))},reset:function(){d.debug("Resetting elements position"),d.unbind(),d.unfix(),d.resetCSS(),d.remove.offset(),d.remove.lastScroll()},resetCSS:function(){c.css({width:"",height:""}),t.css({height:""})},setting:function(e,t){if(S.isPlainObject(e))S.extend(!0,f,e);else{if(t===E)return f[e];f[e]=t}},internal:function(e,t){if(S.isPlainObject(e))S.extend(!0,d,e);else{if(t===E)return d[e];d[e]=t}},debug:function(){!f.silent&&f.debug&&(f.performance?d.performance.log(arguments):(d.debug=Function.prototype.bind.call(console.info,console,f.name+":"),d.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?d.performance.log(arguments):(d.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),d.verbose.apply(console,arguments)))},error:function(){f.silent||(d.error=Function.prototype.bind.call(console.error,console,f.name+":"),d.error.apply(console,arguments))},performance:{log:function(e){var t,n;f.performance&&(n=(t=(new Date).getTime())-(x||t),x=t,C.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:h,"Execution Time":n})),clearTimeout(d.performance.timer),d.performance.timer=setTimeout(d.performance.display,0)},display:function(){var e=f.name+":",n=0;x=!1,clearTimeout(d.performance.timer),S.each(C,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",y&&(e+=" '"+y+"'"),(console.group!==E||console.table!==E)&&0<C.length&&(console.groupCollapsed(e),console.table?console.table(C):S.each(C,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),C=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||T,t=h||t,"string"==typeof i&&r!==E&&(i=i.split(/[\. ]/),o=i.length-1,S.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(S.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==E)return a=r[n],!1;if(!S.isPlainObject(r[t])||e==o)return r[t]!==E&&(a=r[t]),!1;r=r[t]}})),S.isFunction(a)?n=a.apply(t,e):a!==E&&(n=a),Array.isArray(b)?b.push(n):b!==E?b=[b,n]:n!==E&&(b=n),a}},k?(g===E&&d.initialize(),d.invoke(w)):(g!==E&&g.invoke("destroy"),d.initialize())}),b!==E?b:this},S.fn.sticky.settings={name:"Sticky",namespace:"sticky",silent:!1,debug:!1,verbose:!0,performance:!0,pushing:!1,context:!1,container:!1,scrollContext:D,offset:0,bottomOffset:0,jitter:5,setSize:!0,observeChanges:!1,onReposition:function(){},onScroll:function(){},onStick:function(){},onUnstick:function(){},onTop:function(){},onBottom:function(){},error:{container:"Sticky element must be inside a relative container",visible:"Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",method:"The method you called is not defined.",invalidContext:"Context specified does not exist",elementSize:"Sticky element is larger than its container, cannot create sticky."},className:{bound:"bound",fixed:"fixed",supported:"native",top:"top",bottom:"bottom"}}}(jQuery,window,document),function(P,O,R,M){"use strict";P.isWindow=P.isWindow||function(e){return null!=e&&e===e.window},P.isFunction=P.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},O=void 0!==O&&O.Math==Math?O:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),P.fn.tab=function(c){var u,d=P.isFunction(this)?P(O):P(this),f=d.selector||"",m=(new Date).getTime(),g=[],D=c,A="string"==typeof D,E=[].slice.call(arguments,1),F=!1;return d.each(function(){var p,a,h,v,b,y,x=P.isPlainObject(c)?P.extend(!0,{},P.fn.tab.settings,c):P.extend({},P.fn.tab.settings),C=x.className,w=x.metadata,t=x.selector,k=x.error,n=x.regExp,e="."+x.namespace,i="module-"+x.namespace,T=P(this),o={},S=!0,r=0,s=this,l=T.data(i);b={initialize:function(){b.debug("Initializing tab menu item",T),b.fix.callbacks(),b.determineTabs(),b.debug("Determining tabs",x.context,a),x.auto&&b.set.auto(),b.bind.events(),x.history&&!F&&(b.initializeHistory(),F=!0),x.autoTabActivation&&l===M&&null==b.determine.activeTab()&&(b.debug("No active tab detected, setting first tab active",b.get.initialPath()),b.changeTab(!0===x.autoTabActivation?b.get.initialPath():x.autoTabActivation)),b.instantiate()},instantiate:function(){b.verbose("Storing instance of module",b),l=b,T.data(i,b)},destroy:function(){b.debug("Destroying tabs",T),T.removeData(i).off(e)},bind:{events:function(){P.isWindow(s)||(b.debug("Attaching tab activation events to element",T),T.on("click"+e,b.event.click))}},determineTabs:function(){var e;"parent"===x.context?(0<T.closest(t.ui).length?(e=T.closest(t.ui),b.verbose("Using closest UI element as parent",e)):e=T,p=e.parent(),b.verbose("Determined parent element for creating context",p)):x.context?(p=P(x.context),b.verbose("Using selector for tab context",x.context,p)):p=P("body"),x.childrenOnly?(a=p.children(t.tabs),b.debug("Searching tab context children for tabs",p,a)):(a=p.find(t.tabs),b.debug("Searching tab context for tabs",p,a))},fix:{callbacks:function(){P.isPlainObject(c)&&(c.onTabLoad||c.onTabInit)&&(c.onTabLoad&&(c.onLoad=c.onTabLoad,delete c.onTabLoad,b.error(k.legacyLoad,c.onLoad)),c.onTabInit&&(c.onFirstLoad=c.onTabInit,delete c.onTabInit,b.error(k.legacyInit,c.onFirstLoad)),x=P.extend(!0,{},P.fn.tab.settings,c))}},initializeHistory:function(){if(b.debug("Initializing page state"),P.address===M)return b.error(k.state),!1;if("state"==x.historyType){if(b.debug("Using HTML5 to manage state"),!1===x.path)return b.error(k.path),!1;P.address.history(!0).state(x.path)}P.address.bind("change",b.event.history.change)},event:{click:function(e){var t=P(this).data(w.tab);t!==M?(x.history?(b.verbose("Updating page state",e),P.address.value(t)):(b.verbose("Changing tab",e),b.changeTab(t)),e.preventDefault()):b.debug("No tab specified")},history:{change:function(e){var t=e.pathNames.join("/")||b.get.initialPath(),n=x.templates.determineTitle(t)||!1;b.performance.display(),b.debug("History change event",t,e),y=e,t!==M&&b.changeTab(t),n&&P.address.title(n)}}},refresh:function(){h&&(b.debug("Refreshing tab",h),b.changeTab(h))},cache:{read:function(e){return e!==M&&o[e]},add:function(e,t){e=e||h,b.debug("Adding cached content for",e),o[e]=t},remove:function(e){e=e||h,b.debug("Removing cached content for",e),delete o[e]}},escape:{string:function(e){return(e=String(e)).replace(n.escape,"\\$&")}},set:{auto:function(){var e="string"==typeof x.path?x.path.replace(/\/$/,"")+"/{$tab}":"/{$tab}";b.verbose("Setting up automatic tab retrieval from server",e),P.isPlainObject(x.apiSettings)?x.apiSettings.url=e:x.apiSettings={url:e}},loading:function(e){var t=b.get.tabElement(e);t.hasClass(C.loading)||(b.verbose("Setting loading state for",t),t.addClass(C.loading).siblings(a).removeClass(C.active+" "+C.loading),0<t.length&&x.onRequest.call(t[0],e))},state:function(e){P.address.value(e)}},changeTab:function(d){var f=O.history&&O.history.pushState&&x.ignoreFirstLoad&&S,m=x.auto||P.isPlainObject(x.apiSettings),g=m&&!f?b.utilities.pathToArray(d):b.get.defaultPathArray(d);d=b.utilities.arrayToPath(g),P.each(g,function(e,t){var n,i,o,a,r=g.slice(0,e+1),s=b.utilities.arrayToPath(r),l=b.is.tab(s),c=e+1==g.length,u=b.get.tabElement(s);if(b.verbose("Looking for tab",t),l){if(b.verbose("Tab was found",t),h=s,v=b.utilities.filterArray(g,r),c?a=!0:(i=g.slice(0,e+2),o=b.utilities.arrayToPath(i),(a=!b.is.tab(o))&&b.verbose("Tab parameters found",i)),a&&m)return f?(b.debug("Ignoring remote content on first tab load",s),S=!1,b.cache.add(d,u.html()),b.activate.all(s),x.onFirstLoad.call(u[0],s,v,y),x.onLoad.call(u[0],s,v,y)):(b.activate.navigation(s),b.fetch.content(s,d)),!1;b.debug("Opened local tab",s),b.activate.all(s),b.cache.read(s)||(b.cache.add(s,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(u[0],s,v,y)),x.onLoad.call(u[0],s,v,y)}else{if(-1!=d.search("/")||""===d)return b.error(k.missingTab,T,p,s),!1;if(d=b.escape.string(d),s=(n=P("#"+d+', a[name="'+d+'"]')).closest("[data-tab]").data(w.tab),u=b.get.tabElement(s),n&&0<n.length&&s)return b.debug("Anchor link used, opening parent tab",u,n),u.hasClass(C.active)||setTimeout(function(){b.scrollTo(n)},0),b.activate.all(s),b.cache.read(s)||(b.cache.add(s,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(u[0],s,v,y)),x.onLoad.call(u[0],s,v,y),!1}})},scrollTo:function(e){var t=!!(e&&0<e.length)&&e.offset().top;!1!==t&&(b.debug("Forcing scroll to an in-page link in a hidden tab",t,e),P(R).scrollTop(t))},update:{content:function(e,t,n){var i=b.get.tabElement(e),o=i[0];n=n!==M?n:x.evaluateScripts,"string"==typeof x.cacheType&&"dom"==x.cacheType.toLowerCase()&&"string"!=typeof t?i.empty().append(P(t).clone(!0)):n?(b.debug("Updating HTML and evaluating inline scripts",e,t),i.html(t)):(b.debug("Updating HTML",e,t),o.innerHTML=t)}},fetch:{content:function(t,n){var e,i,o=b.get.tabElement(t),a={dataType:"html",encodeParameters:!1,on:"now",cache:x.alwaysRefresh,headers:{"X-Remote":!0},onSuccess:function(e){"response"==x.cacheType&&b.cache.add(n,e),b.update.content(t,e),t==h?(b.debug("Content loaded",t),b.activate.tab(t)):b.debug("Content loaded in background",t),x.onFirstLoad.call(o[0],t,v,y),x.onLoad.call(o[0],t,v,y),x.loadOnce?b.cache.add(n,!0):"string"==typeof x.cacheType&&"dom"==x.cacheType.toLowerCase()&&0<o.children().length?setTimeout(function(){var e=o.children().clone(!0);e=e.not("script"),b.cache.add(n,e)},0):b.cache.add(n,o.html())},urlData:{tab:n}},r=o.api("get request")||!1,s=r&&"pending"===r.state();n=n||t,i=b.cache.read(n),x.cache&&i?(b.activate.tab(t),b.debug("Adding cached content",n),x.loadOnce||("once"==x.evaluateScripts?b.update.content(t,i,!1):b.update.content(t,i)),x.onLoad.call(o[0],t,v,y)):s?(b.set.loading(t),b.debug("Content is already loading",n)):P.api!==M?(e=P.extend(!0,{},x.apiSettings,a),b.debug("Retrieving remote content",n,e),b.set.loading(t),o.api(e)):b.error(k.api)}},activate:{all:function(e){b.activate.tab(e),b.activate.navigation(e)},tab:function(e){var t=b.get.tabElement(e),n="siblings"==x.deactivate?t.siblings(a):a.not(t),i=t.hasClass(C.active);b.verbose("Showing tab content for",t),i||(t.addClass(C.active),n.removeClass(C.active+" "+C.loading),0<t.length&&x.onVisible.call(t[0],e))},navigation:function(e){var t=b.get.navElement(e),n="siblings"==x.deactivate?t.siblings(d):d.not(t),i=t.hasClass(C.active);b.verbose("Activating tab navigation for",t,e),i||(t.addClass(C.active),n.removeClass(C.active+" "+C.loading))}},deactivate:{all:function(){b.deactivate.navigation(),b.deactivate.tabs()},navigation:function(){d.removeClass(C.active)},tabs:function(){a.removeClass(C.active+" "+C.loading)}},is:{tab:function(e){return e!==M&&0<b.get.tabElement(e).length}},get:{initialPath:function(){return d.eq(0).data(w.tab)||a.eq(0).data(w.tab)},path:function(){return P.address.value()},defaultPathArray:function(e){return b.utilities.pathToArray(b.get.defaultPath(e))},defaultPath:function(e){var t=d.filter("[data-"+w.tab+'^="'+b.escape.string(e)+'/"]').eq(0).data(w.tab)||!1;if(t){if(b.debug("Found default tab",t),r<x.maxDepth)return r++,b.get.defaultPath(t);b.error(k.recursion)}else b.debug("No default tabs found for",e,a);return r=0,e},navElement:function(e){return e=e||h,d.filter("[data-"+w.tab+'="'+b.escape.string(e)+'"]')},tabElement:function(e){var t,n,i,o;return e=e||h,i=b.utilities.pathToArray(e),o=b.utilities.last(i),t=a.filter("[data-"+w.tab+'="'+b.escape.string(e)+'"]'),n=a.filter("[data-"+w.tab+'="'+b.escape.string(o)+'"]'),0<t.length?t:n},tab:function(){return h}},determine:{activeTab:function(){var i=null;return a.each(function(e,t){if(P(t).hasClass(C.active)){var n=P(this).data(w.tab);d.filter("[data-"+w.tab+'="'+b.escape.string(n)+'"]').hasClass(C.active)&&(i=n)}}),i}},utilities:{filterArray:function(e,t){return P.grep(e,function(e){return-1==P.inArray(e,t)})},last:function(e){return!!Array.isArray(e)&&e[e.length-1]},pathToArray:function(e){return e===M&&(e=h),"string"==typeof e?e.split("/"):[e]},arrayToPath:function(e){return!!Array.isArray(e)&&e.join("/")}},setting:function(e,t){if(b.debug("Changing setting",e,t),P.isPlainObject(e))P.extend(!0,x,e);else{if(t===M)return x[e];P.isPlainObject(x[e])?P.extend(!0,x[e],t):x[e]=t}},internal:function(e,t){if(P.isPlainObject(e))P.extend(!0,b,e);else{if(t===M)return b[e];b[e]=t}},debug:function(){!x.silent&&x.debug&&(x.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,x.name+":"),b.debug.apply(console,arguments)))},verbose:function(){!x.silent&&x.verbose&&x.debug&&(x.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,x.name+":"),b.verbose.apply(console,arguments)))},error:function(){x.silent||(b.error=Function.prototype.bind.call(console.error,console,x.name+":"),b.error.apply(console,arguments))},performance:{log:function(e){var t,n;x.performance&&(n=(t=(new Date).getTime())-(m||t),m=t,g.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:s,"Execution Time":n})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500)},display:function(){var e=x.name+":",n=0;m=!1,clearTimeout(b.performance.timer),P.each(g,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",f&&(e+=" '"+f+"'"),(console.group!==M||console.table!==M)&&0<g.length&&(console.groupCollapsed(e),console.table?console.table(g):P.each(g,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),g=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||E,t=s||t,"string"==typeof i&&r!==M&&(i=i.split(/[\. ]/),o=i.length-1,P.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(P.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==M)return a=r[n],!1;if(!P.isPlainObject(r[t])||e==o)return r[t]!==M?a=r[t]:b.error(k.method,i),!1;r=r[t]}})),P.isFunction(a)?n=a.apply(t,e):a!==M&&(n=a),Array.isArray(u)?u.push(n):u!==M?u=[u,n]:n!==M&&(u=n),a}},A?(l===M&&b.initialize(),b.invoke(D)):(l!==M&&l.invoke("destroy"),b.initialize())}),u!==M?u:this},P.tab=function(){P(O).tab.apply(this,arguments)},P.fn.tab.settings={name:"Tab",namespace:"tab",silent:!1,debug:!1,verbose:!1,performance:!0,auto:!1,history:!1,historyType:"hash",path:!1,context:!1,childrenOnly:!1,maxDepth:25,deactivate:"siblings",alwaysRefresh:!1,cache:!0,loadOnce:!1,cacheType:"response",ignoreFirstLoad:!1,apiSettings:!1,evaluateScripts:"once",autoTabActivation:!0,onFirstLoad:function(e,t,n){},onLoad:function(e,t,n){},onVisible:function(e,t,n){},onRequest:function(e,t,n){},templates:{determineTitle:function(e){}},error:{api:"You attempted to load content without API module",method:"The method you called is not defined",missingTab:"Activated tab cannot be found. Tabs are case-sensitive.",noContent:"The tab you specified is missing a content url.",path:"History enabled, but no path was specified",recursion:"Max recursive depth reached",legacyInit:"onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",legacyLoad:"onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",state:"History requires Asual's Address library <https://github.com/asual/jquery-address>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s:=@]/g},metadata:{tab:"tab",loaded:"loaded",promise:"promise"},className:{loading:"loading",active:"active"},selector:{tabs:".ui.tab",ui:".ui"}}}(jQuery,window,document),function(F,e,t,P){"use strict";F.isFunction=F.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),F.fn.toast=function(C){var w,e=F(this),k=e.selector||"",T=(new Date).getTime(),S=[],D=C,A="string"==typeof D,E=[].slice.call(arguments,1);return e.each(function(){var i,o,a,r,s,l,c,u,d=F.isPlainObject(C)?F.extend(!0,{},F.fn.toast.settings,C):F.extend({},F.fn.toast.settings),f=d.className,e=d.selector,m=d.error,t=d.namespace,g=d.fields,n="."+t,p=t+"-module",h=F(this),v=d.context?F(d.context):F("body"),b=h.hasClass("toast")||h.hasClass("message")||h.hasClass("card"),y=this,x=b?h.data(p):P;u={initialize:function(){u.verbose("Initializing element"),u.has.container()||u.create.container(),(b||""!==d.message||""!==d.title||""!==u.get.iconClass()||d.showImage||u.has.configActions())&&("string"==typeof d.showProgress&&-1!==[f.top,f.bottom].indexOf(d.showProgress)||(d.showProgress=!1),u.create.toast(),d.closeOnClick&&(d.closeIcon||0<F(o).find(e.input).length||u.has.configActions())&&(d.closeOnClick=!1),d.closeOnClick||i.addClass(f.unclickable),u.bind.events()),u.instantiate(),i&&u.show()},instantiate:function(){u.verbose("Storing instance of toast"),x=u,h.data(p,x)},destroy:function(){i&&(u.debug("Removing toast",i),u.unbind.events(),i.remove(),l=o=i=P,d.onRemove.call(i,y),c=s=r=P),h.removeData(p)},show:function(e){e=e||function(){},u.debug("Showing toast"),!1!==d.onShow.call(i,y)?u.animate.show(e):u.debug("onShow callback returned false, cancelling toast animation")},close:function(e){e=e||function(){},u.remove.visible(),u.unbind.events(),u.animate.close(e)},create:{container:function(){u.verbose("Creating container"),v.append(F("<div/>",{class:d.position+" "+f.container}))},toast:function(){if(i=F("<div/>",{class:f.box}),b)o=d.cloneModule?h.clone().removeAttr("id"):h,c=o.find("> i"+u.helpers.toClass(f.close)),d.closeIcon=0<c.length;else{u.verbose("Creating toast"),o=F("<div/>");var e=F("<div/>",{class:f.content}),t=u.get.iconClass();""!==t&&o.append(F("<i/>",{class:t+" "+f.icon})),d.showImage&&o.append(F("<img>",{class:f.image+" "+d.classImage,src:d.showImage})),""!==d.title&&e.append(F("<div/>",{class:f.title,text:d.title})),e.append(F("<div/>",{html:u.helpers.escape(d.message,d.preserveHTML)})),o.addClass(d.class+" "+f.toast).append(e),o.css("opacity",d.opacity),d.closeIcon&&((c=F("<i/>",{class:f.close+" "+("string"==typeof d.closeIcon?d.closeIcon:"")})).hasClass(f.left)?o.prepend(c):o.append(c))}if(o.hasClass(f.compact)&&(d.compact=!0),o.hasClass("card")&&(d.compact=!1),a=o.find(".actions"),u.has.configActions()&&(0===a.length&&(a=F("<div/>",{class:f.actions+" "+(d.classActions||"")}).appendTo(o)),o.hasClass("card")&&!a.hasClass(f.attached)&&(a.addClass(f.extraContent),a.hasClass(f.vertical)&&(a.removeClass(f.vertical),u.error(m.verticalCard))),d.actions.forEach(function(e){var t=e[g.icon]?'<i class="'+u.helpers.deQuote(e[g.icon])+' icon"></i>':"",n=u.helpers.escape(e[g.text]||"",d.preserveHTML),i=u.helpers.deQuote(e[g.class]||""),o=e[g.click]&&F.isFunction(e[g.click])?e[g.click]:function(){};a.append(F("<button/>",{html:t+n,class:f.button+" "+i,click:function(){!1!==o.call(y,h)&&u.close()}}))})),a&&a.hasClass(f.vertical)&&o.addClass(f.vertical),0<a.length&&!a.hasClass(f.attached)&&(!a||a.hasClass(f.basic)&&!a.hasClass(f.left)||o.addClass(f.actions)),"auto"===d.displayTime&&(d.displayTime=Math.max(d.minDisplayTime,o.text().split(" ").length/d.wordsPerMinute*6e4)),i.append(o),0<a.length&&a.hasClass(f.attached)&&(a.addClass(f.buttons),a.detach(),o.addClass(f.attached),a.hasClass(f.vertical)?(o.wrap(F("<div/>",{class:f.vertical+" "+f.attached+" "+(d.compact?f.compact:"")})),a.hasClass(f.left)?o.addClass(f.left).parent().addClass(f.left).prepend(a):o.parent().append(a)):a.hasClass(f.top)?(i.prepend(a),o.addClass(f.bottom)):(i.append(a),o.addClass(f.top))),h!==o&&(y=(h=o)[0]),0<d.displayTime){var n=f.progressing+" "+(d.pauseOnHover?f.pausable:"");d.showProgress&&(r=F("<div/>",{class:f.progress+" "+(d.classProgress||d.class),"data-percent":""}),d.classProgress||(o.hasClass("toast")&&!o.hasClass(f.inverted)?r.addClass(f.inverted):r.removeClass(f.inverted)),s=F("<div/>",{class:"bar "+(d.progressUp?"up ":"down ")+n}),r.addClass(d.showProgress).append(s),r.hasClass(f.top)?i.prepend(r):i.append(r),s.css("animation-duration",d.displayTime/1e3+"s")),(l=F("<span/>",{class:"wait "+n})).css("animation-duration",d.displayTime/1e3+"s"),l.appendTo(o)}d.compact&&(i.addClass(f.compact),o.addClass(f.compact),r&&r.addClass(f.compact)),d.newestOnTop?i.prependTo(u.get.container()):i.appendTo(u.get.container())}},bind:{events:function(){u.debug("Binding events to toast"),(d.closeOnClick||d.closeIcon)&&(d.closeIcon?c:o).on("click"+n,u.event.click),l&&l.on("animationend"+n,u.close),i.on("click"+n,e.approve,u.event.approve).on("click"+n,e.deny,u.event.deny)}},unbind:{events:function(){u.debug("Unbinding events to toast"),(d.closeOnClick||d.closeIcon)&&(d.closeIcon?c:o).off("click"+n),l&&l.off("animationend"+n),i.off("click"+n)}},animate:{show:function(e){e=F.isFunction(e)?e:function(){},d.transition&&u.can.useElement("transition")&&h.transition("is supported")&&(u.set.visible(),i.transition({animation:d.transition.showMethod+" in",queue:!1,debug:d.debug,verbose:d.verbose,duration:d.transition.showDuration,onComplete:function(){e.call(i,y),d.onVisible.call(i,y)}}))},close:function(e){e=F.isFunction(e)?e:function(){},u.debug("Closing toast"),!1!==d.onHide.call(i,y)?d.transition&&F.fn.transition!==P&&h.transition("is supported")?i.transition({animation:d.transition.hideMethod+" out",queue:!1,duration:d.transition.hideDuration,debug:d.debug,verbose:d.verbose,interval:50,onBeforeHide:function(e){e=F.isFunction(e)?e:function(){},""!==d.transition.closeEasing?i&&(i.css("opacity",0),i.wrap("<div/>").parent().slideUp(500,d.transition.closeEasing,function(){i&&(i.parent().remove(),e.call(i))})):e.call(i)},onComplete:function(){e.call(i,y),d.onHidden.call(i,y),u.destroy()}}):u.error(m.noTransition):u.debug("onHide callback returned false, cancelling toast animation")},pause:function(){l.css("animationPlayState","paused"),s&&s.css("animationPlayState","paused")},continue:function(){l.css("animationPlayState","running"),s&&s.css("animationPlayState","running")}},has:{container:function(){return u.verbose("Determining if there is already a container"),0<v.find(u.helpers.toClass(d.position)+e.container).length},toast:function(){return!!u.get.toast()},toasts:function(){return 0<u.get.toasts().length},configActions:function(){return Array.isArray(d.actions)&&0<d.actions.length}},get:{container:function(){return v.find(u.helpers.toClass(d.position)+e.container)[0]},toastBox:function(){return i||null},toast:function(){return o||null},toasts:function(){return F(u.get.container()).find(e.box)},iconClass:function(){return"string"==typeof d.showIcon?d.showIcon:d.showIcon&&d.icons[d.class]?d.icons[d.class]:""},remainingTime:function(){return l?l.css("opacity")*d.displayTime:0}},set:{visible:function(){o.addClass(f.visible)}},remove:{visible:function(){o.removeClass(f.visible)}},event:{click:function(e){0===F(e.target).closest("a").length&&(d.onClick.call(i,y),u.close())},approve:function(){!1!==d.onApprove.call(y,h)?u.close():u.verbose("Approve callback returned false cancelling close")},deny:function(){!1!==d.onDeny.call(y,h)?u.close():u.verbose("Deny callback returned false cancelling close")}},helpers:{toClass:function(e){var t=e.split(" "),n="";return t.forEach(function(e){n+="."+e}),n},deQuote:function(e){return String(e).replace(/"/g,"")},escape:function(e,t){if(t)return e;var n={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return n[e]}):e}},can:{useElement:function(e){return F.fn[e]!==P||(u.error(m.noElement.replace("{element}",e)),!1)}},setting:function(e,t){if(u.debug("Changing setting",e,t),F.isPlainObject(e))F.extend(!0,d,e);else{if(t===P)return d[e];F.isPlainObject(d[e])?F.extend(!0,d[e],t):d[e]=t}},internal:function(e,t){if(F.isPlainObject(e))F.extend(!0,u,e);else{if(t===P)return u[e];u[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?u.performance.log(arguments):(u.debug=Function.prototype.bind.call(console.info,console,d.name+":"),u.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?u.performance.log(arguments):(u.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),u.verbose.apply(console,arguments)))},error:function(){d.silent||(u.error=Function.prototype.bind.call(console.error,console,d.name+":"),u.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(T||t),T=t,S.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:y,"Execution Time":n})),clearTimeout(u.performance.timer),u.performance.timer=setTimeout(u.performance.display,500)},display:function(){var e=d.name+":",n=0;T=!1,clearTimeout(u.performance.timer),F.each(S,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",k&&(e+=" '"+k+"'"),(console.group!==P||console.table!==P)&&0<S.length&&(console.groupCollapsed(e),console.table?console.table(S):F.each(S,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),S=[]}},invoke:function(i,e,t){var o,a,n,r=x;return e=e||E,t=y||t,"string"==typeof i&&r!==P&&(i=i.split(/[\. ]/),o=i.length-1,F.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(F.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==P)return a=r[n],!1;if(!F.isPlainObject(r[t])||e==o)return r[t]!==P?a=r[t]:u.error(m.method,i),!1;r=r[t]}})),F.isFunction(a)?n=a.apply(t,e):a!==P&&(n=a),Array.isArray(w)?w.push(n):w!==P?w=[w,n]:n!==P&&(w=n),a}},A?(x===P&&u.initialize(),u.invoke(D)):(x!==P&&x.invoke("destroy"),u.initialize(),w=h)}),w!==P?w:this},F.fn.toast.settings={name:"Toast",namespace:"toast",silent:!1,debug:!1,verbose:!1,performance:!0,context:"body",position:"top right",class:"neutral",classProgress:!1,classActions:!1,classImage:"mini",title:"",message:"",displayTime:3e3,minDisplayTime:1e3,wordsPerMinute:120,showIcon:!1,newestOnTop:!1,showProgress:!1,pauseOnHover:!0,progressUp:!1,opacity:1,compact:!0,closeIcon:!1,closeOnClick:!0,cloneModule:!0,actions:!1,preserveHTML:!0,showImage:!1,transition:{showMethod:"scale",showDuration:500,hideMethod:"scale",hideDuration:500,closeEasing:"easeOutCubic"},error:{method:"The method you called is not defined.",noElement:"This module requires ui {element}",verticalCard:"Vertical but not attached actions are not supported for card layout"},className:{container:"ui toast-container",box:"floating toast-box",progress:"ui attached active progress",toast:"ui toast",icon:"centered icon",visible:"visible",content:"content",title:"ui header",actions:"actions",extraContent:"extra content",button:"ui button",buttons:"ui buttons",close:"close icon",image:"ui image",vertical:"vertical",attached:"attached",inverted:"inverted",compact:"compact",pausable:"pausable",progressing:"progressing",top:"top",bottom:"bottom",left:"left",basic:"basic",unclickable:"unclickable"},icons:{info:"info",success:"checkmark",warning:"warning",error:"times"},selector:{container:".ui.toast-container",box:".toast-box",toast:".ui.toast",input:'input:not([type="hidden"]), textarea, select, button, .ui.button, ui.dropdown',approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel"},fields:{class:"class",text:"text",icon:"icon",click:"click"},onShow:function(){},onVisible:function(){},onClick:function(){},onHide:function(){},onHidden:function(){},onRemove:function(){},onApprove:function(){},onDeny:function(){}},F.extend(F.easing,{easeOutBounce:function(e,t,n,i,o){return(t/=o)<1/2.75?i*(7.5625*t*t)+n:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+n:i*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeOutCubic:function(e){return--e*e*e+1}})}(jQuery,window,document),function(C,e,w,k){"use strict";C.isFunction=C.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),C.fn.transition=function(){var c,r=C(this),g=r.selector||"",p=(new Date).getTime(),h=[],v=arguments,b=v[0],y=[].slice.call(arguments,1),x="string"==typeof b;return r.each(function(i){var u,s,t,d,n,o,e,a,f,m=C(this),l=this;(f={initialize:function(){u=f.get.settings.apply(l,v),d=u.className,t=u.error,n=u.metadata,a="."+u.namespace,e="module-"+u.namespace,s=m.data(e)||f,o=f.get.animationEndEvent(),!1===(x=x&&f.invoke(b))&&(f.verbose("Converted arguments into settings object",u),u.interval?f.delay(u.animate):f.animate(),f.instantiate())},instantiate:function(){f.verbose("Storing instance of module",f),s=f,m.data(e,s)},destroy:function(){f.verbose("Destroying previous module for",l),m.removeData(e)},refresh:function(){f.verbose("Refreshing display type on next animation"),delete f.displayType},forceRepaint:function(){f.verbose("Forcing element repaint");var e=m.parent(),t=m.next();0===t.length?m.detach().appendTo(e):m.detach().insertBefore(t)},repaint:function(){f.verbose("Repainting element");l.offsetWidth},delay:function(e){var t,n=f.get.animationDirection();n=n||(f.can.transition()?f.get.direction():"static"),e=e!==k?e:u.interval,t="auto"==u.reverse&&n==d.outward||1==u.reverse?(r.length-i)*u.interval:i*u.interval,f.debug("Delaying animation by",t),setTimeout(f.animate,t)},animate:function(e){if(u=e||u,!f.is.supported())return f.error(t.support),!1;if(f.debug("Preparing animation",u.animation),f.is.animating()){if(u.queue)return!u.allowRepeats&&f.has.direction()&&f.is.occurring()&&!0!==f.queuing?f.debug("Animation is currently occurring, preventing queueing same animation",u.animation):f.queue(u.animation),!1;if(!u.allowRepeats&&f.is.occurring())return f.debug("Animation is already occurring, will not execute repeated animation",u.animation),!1;f.debug("New animation started, completing previous early",u.animation),s.complete()}f.can.animate()?f.set.animating(u.animation):f.error(t.noAnimation,u.animation,l)},reset:function(){f.debug("Resetting animation to beginning conditions"),f.remove.animationCallbacks(),f.restore.conditions(),f.remove.animating()},queue:function(e){f.debug("Queueing animation of",e),f.queuing=!0,m.one(o+".queue"+a,function(){f.queuing=!1,f.repaint(),f.animate.apply(this,u)})},complete:function(e){e&&e.target===l&&e.stopPropagation(),f.debug("Animation complete",u.animation),f.remove.completeCallback(),f.remove.failSafe(),f.is.looping()||(f.is.outward()?(f.verbose("Animation is outward, hiding element"),f.restore.conditions(),f.hide()):f.is.inward()?(f.verbose("Animation is outward, showing element"),f.restore.conditions(),f.show()):(f.verbose("Static animation completed"),f.restore.conditions(),u.onComplete.call(l)))},force:{visible:function(){var e=m.attr("style"),t=f.get.userStyle(e),n=f.get.displayType(),i=t+"display: "+n+" !important;",o=m[0].style.display;return!n||"none"===o&&u.skipInlineHidden||m[0].tagName.match(/(script|link|style)/i)?(f.remove.transition(),!1):(f.verbose("Overriding default display to show element",n),m.attr("style",i),!0)},hidden:function(){var e=m.attr("style"),t=m.css("display"),n=e===k||""===e;"none"===t||f.is.hidden()?n&&m.removeAttr("style"):(f.verbose("Overriding default display to hide element"),m.css("display","none"))}},has:{direction:function(e){var n=!1;return"string"==typeof(e=e||u.animation)&&(e=e.split(" "),C.each(e,function(e,t){t!==d.inward&&t!==d.outward||(n=!0)})),n},inlineDisplay:function(){var e=m.attr("style")||"";return Array.isArray(e.match(/display.*?;/,""))}},set:{animating:function(e){f.remove.completeCallback(),e=e||u.animation;var t=f.get.animationClass(e);f.save.animation(t),f.force.visible()&&(f.remove.hidden(),f.remove.direction(),f.start.animation(t))},duration:function(e,t){!(t="number"==typeof(t=t||u.duration)?t+"ms":t)&&0!==t||(f.verbose("Setting animation duration",t),m.css({"animation-duration":t}))},direction:function(e){(e=e||f.get.direction())==d.inward?f.set.inward():f.set.outward()},looping:function(){f.debug("Transition set to loop"),m.addClass(d.looping)},hidden:function(){m.addClass(d.transition).addClass(d.hidden)},inward:function(){f.debug("Setting direction to inward"),m.removeClass(d.outward).addClass(d.inward)},outward:function(){f.debug("Setting direction to outward"),m.removeClass(d.inward).addClass(d.outward)},visible:function(){m.addClass(d.transition).addClass(d.visible)}},start:{animation:function(e){e=e||f.get.animationClass(),f.debug("Starting tween",e),m.addClass(e).one(o+".complete"+a,f.complete),u.useFailSafe&&f.add.failSafe(),f.set.duration(u.duration),u.onStart.call(l)}},save:{animation:function(e){f.cache||(f.cache={}),f.cache.animation=e},displayType:function(e){"none"!==e&&m.data(n.displayType,e)},transitionExists:function(e,t){C.fn.transition.exists[e]=t,f.verbose("Saving existence of transition",e,t)}},restore:{conditions:function(){var e=f.get.currentAnimation();e&&(m.removeClass(e),f.verbose("Removing animation class",f.cache)),f.remove.duration()}},add:{failSafe:function(){var e=f.get.duration();f.timer=setTimeout(function(){m.triggerHandler(o)},e+u.failSafeDelay),f.verbose("Adding fail safe timer",f.timer)}},remove:{animating:function(){m.removeClass(d.animating)},animationCallbacks:function(){f.remove.queueCallback(),f.remove.completeCallback()},queueCallback:function(){m.off(".queue"+a)},completeCallback:function(){m.off(".complete"+a)},display:function(){m.css("display","")},direction:function(){m.removeClass(d.inward).removeClass(d.outward)},duration:function(){m.css("animation-duration","")},failSafe:function(){f.verbose("Removing fail safe timer",f.timer),f.timer&&clearTimeout(f.timer)},hidden:function(){m.removeClass(d.hidden)},visible:function(){m.removeClass(d.visible)},looping:function(){f.debug("Transitions are no longer looping"),f.is.looping()&&(f.reset(),m.removeClass(d.looping))},transition:function(){m.removeClass(d.transition).removeClass(d.visible).removeClass(d.hidden)}},get:{settings:function(e,t,n){return"object"==typeof e?C.extend(!0,{},C.fn.transition.settings,e):"function"==typeof n?C.extend({},C.fn.transition.settings,{animation:e,onComplete:n,duration:t}):"string"==typeof t||"number"==typeof t?C.extend({},C.fn.transition.settings,{animation:e,duration:t}):"object"==typeof t?C.extend({},C.fn.transition.settings,t,{animation:e}):"function"==typeof t?C.extend({},C.fn.transition.settings,{animation:e,onComplete:t}):C.extend({},C.fn.transition.settings,{animation:e})},animationClass:function(e){var t=e||u.animation,n=f.can.transition()&&!f.has.direction()?f.get.direction()+" ":"";return d.animating+" "+d.transition+" "+n+t},currentAnimation:function(){return!(!f.cache||f.cache.animation===k)&&f.cache.animation},currentDirection:function(){return f.is.inward()?d.inward:d.outward},direction:function(){return f.is.hidden()||!f.is.visible()?d.inward:d.outward},animationDirection:function(e){var n;return"string"==typeof(e=e||u.animation)&&(e=e.split(" "),C.each(e,function(e,t){t===d.inward?n=d.inward:t===d.outward&&(n=d.outward)})),n||!1},duration:function(e){return!1===(e=e||u.duration)&&(e=m.css("animation-duration")||0),"string"==typeof e?-1<e.indexOf("ms")?parseFloat(e):1e3*parseFloat(e):e},displayType:function(e){if(e=e===k||e,u.displayType)return u.displayType;if(e&&m.data(n.displayType)===k){var t=m.css("display");""===t||"none"===t?f.can.transition(!0):f.save.displayType(t)}return m.data(n.displayType)},userStyle:function(e){return(e=e||m.attr("style")||"").replace(/display.*?;/,"")},transitionExists:function(e){return C.fn.transition.exists[e]},animationStartEvent:function(){var e,t=w.createElement("div"),n={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(e in n)if(t.style[e]!==k)return n[e];return!1},animationEndEvent:function(){var e,t=w.createElement("div"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(e in n)if(t.style[e]!==k)return n[e];return!1}},can:{transition:function(e){var t,n,i,o,a,r,s=u.animation,l=f.get.transitionExists(s),c=f.get.displayType(!1);if(l===k||e){if(f.verbose("Determining whether animation exists"),t=m.attr("class"),n=m.prop("tagName"),o=(i=C("<"+n+" />").addClass(t).insertAfter(m)).addClass(s).removeClass(d.inward).removeClass(d.outward).addClass(d.animating).addClass(d.transition).css("animationName"),a=i.addClass(d.inward).css("animationName"),c||(c=i.attr("class",t).removeAttr("style").removeClass(d.hidden).removeClass(d.visible).show().css("display"),f.verbose("Determining final display state",c),f.save.displayType(c)),i.remove(),o!=a)f.debug("Direction exists for animation",s),r=!0;else{if("none"==o||!o)return void f.debug("No animation defined in css",s);f.debug("Static animation found",s,c),r=!1}f.save.transitionExists(s,r)}return l!==k?l:r},animate:function(){return f.can.transition()!==k}},is:{animating:function(){return m.hasClass(d.animating)},inward:function(){return m.hasClass(d.inward)},outward:function(){return m.hasClass(d.outward)},looping:function(){return m.hasClass(d.looping)},occurring:function(e){return e="."+(e=e||u.animation).replace(" ","."),0<m.filter(e).length},visible:function(){return m.is(":visible")},hidden:function(){return"hidden"===m.css("visibility")},supported:function(){return!1!==o}},hide:function(){f.verbose("Hiding element"),f.is.animating()&&f.reset(),l.blur(),f.remove.display(),f.remove.visible(),C.isFunction(u.onBeforeHide)?u.onBeforeHide.call(l,function(){f.hideNow()}):f.hideNow()},hideNow:function(){f.set.hidden(),f.force.hidden(),u.onHide.call(l),u.onComplete.call(l)},show:function(e){f.verbose("Showing element",e),f.force.visible()&&(f.remove.hidden(),f.set.visible(),u.onShow.call(l),u.onComplete.call(l))},toggle:function(){f.is.visible()?f.hide():f.show()},stop:function(){f.debug("Stopping current animation"),m.triggerHandler(o)},stopAll:function(){f.debug("Stopping all animation"),f.remove.queueCallback(),m.triggerHandler(o)},clear:{queue:function(){f.debug("Clearing animation queue"),f.remove.queueCallback()}},enable:function(){f.verbose("Starting animation"),m.removeClass(d.disabled)},disable:function(){f.debug("Stopping animation"),m.addClass(d.disabled)},setting:function(e,t){if(f.debug("Changing setting",e,t),C.isPlainObject(e))C.extend(!0,u,e);else{if(t===k)return u[e];C.isPlainObject(u[e])?C.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(C.isPlainObject(e))C.extend(!0,f,e);else{if(t===k)return f[e];f[e]=t}},debug:function(){!u.silent&&u.debug&&(u.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,u.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),f.verbose.apply(console,arguments)))},error:function(){u.silent||(f.error=Function.prototype.bind.call(console.error,console,u.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(p||t),p=t,h.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:l,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var e=u.name+":",n=0;p=!1,clearTimeout(f.performance.timer),C.each(h,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",g&&(e+=" '"+g+"'"),1<r.length&&(e+=" ("+r.length+")"),(console.group!==k||console.table!==k)&&0<h.length&&(console.groupCollapsed(e),console.table?console.table(h):C.each(h,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),h=[]}},invoke:function(i,e,t){var o,a,n,r=s;return e=e||y,t=l||t,"string"==typeof i&&r!==k&&(i=i.split(/[\. ]/),o=i.length-1,C.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(C.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==k)return a=r[n],!1;if(!C.isPlainObject(r[t])||e==o)return r[t]!==k&&(a=r[t]),!1;r=r[t]}})),C.isFunction(a)?n=a.apply(t,e):a!==k&&(n=a),Array.isArray(c)?c.push(n):c!==k?c=[c,n]:n!==k&&(c=n),a!==k&&a}}).initialize()}),c!==k?c:this},C.fn.transition.exists={},C.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,skipInlineHidden:!1,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document),function(E,F,e,P){"use strict";E.isWindow=E.isWindow||function(e){return null!=e&&e===e.window},F=void 0!==F&&F.Math==Math?F:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),E.api=E.fn.api=function(x){var C,e=E.isFunction(this)?E(F):E(this),w=e.selector||"",k=(new Date).getTime(),T=[],S=x,D="string"==typeof S,A=[].slice.call(arguments,1);return e.each(function(){var a,r,n,e,s,l,c=E.isPlainObject(x)?E.extend(!0,{},E.fn.api.settings,x):E.extend({},E.fn.api.settings),t=c.namespace,i=c.metadata,o=c.selector,u=c.error,d=c.className,f="."+t,m="module-"+t,g=E(this),p=g.closest(o.form),h=c.stateContext?E(c.stateContext):g,v=this,b=h[0],y=g.data(m);l={initialize:function(){D||l.bind.events(),l.instantiate()},instantiate:function(){l.verbose("Storing instance of module",l),y=l,g.data(m,y)},destroy:function(){l.verbose("Destroying previous module for",v),g.removeData(m).off(f)},bind:{events:function(){var e=l.get.event();e?(l.verbose("Attaching API events to element",e),g.on(e+f,l.event.trigger)):"now"==c.on&&(l.debug("Querying API endpoint immediately"),l.query())}},decode:{json:function(e){if(e!==P&&"string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}},read:{cachedResponse:function(e){var t;if(F.Storage!==P)return t=sessionStorage.getItem(e),l.debug("Using cached response",e,t),t=l.decode.json(t);l.error(u.noStorage)}},write:{cachedResponse:function(e,t){t&&""===t?l.debug("Response empty, not caching",t):F.Storage!==P?(E.isPlainObject(t)&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t),l.verbose("Storing cached response for url",e,t)):l.error(u.noStorage)}},query:function(){if(l.is.disabled())l.debug("Element is disabled API request aborted");else{if(l.is.loading()){if(!c.interruptRequests)return void l.debug("Cancelling request, previous request is still pending");l.debug("Interrupting previous request"),l.abort()}if(c.defaultData&&E.extend(!0,c.urlData,l.get.defaultData()),c.serializeForm&&(c.data=l.add.formData(c.data)),!1===(r=l.get.settings()))return l.cancelled=!0,void l.error(u.beforeSend);if(l.cancelled=!1,(n=l.get.templatedURL())||l.is.mocked()){if((n=l.add.urlData(n))||l.is.mocked()){if(r.url=c.base+n,a=E.extend(!0,{},c,{type:c.method||c.type,data:e,url:c.base+n,beforeSend:c.beforeXHR,success:function(){},failure:function(){},complete:function(){}}),l.debug("Querying URL",a.url),l.verbose("Using AJAX settings",a),"local"===c.cache&&l.read.cachedResponse(n))return l.debug("Response returned from local cache"),l.request=l.create.request(),void l.request.resolveWith(b,[l.read.cachedResponse(n)]);c.throttle?c.throttleFirstRequest||l.timer?(l.debug("Throttling request",c.throttle),clearTimeout(l.timer),l.timer=setTimeout(function(){l.timer&&delete l.timer,l.debug("Sending throttled request",e,a.method),l.send.request()},c.throttle)):(l.debug("Sending request",e,a.method),l.send.request(),l.timer=setTimeout(function(){},c.throttle)):(l.debug("Sending request",e,a.method),l.send.request())}}else l.error(u.missingURL)}},should:{removeError:function(){return!0===c.hideError||"auto"===c.hideError&&!l.is.form()}},is:{disabled:function(){return 0<g.filter(o.disabled).length},expectingJSON:function(){return"json"===c.dataType||"jsonp"===c.dataType},form:function(){return g.is("form")||h.is("form")},mocked:function(){return c.mockResponse||c.mockResponseAsync||c.response||c.responseAsync},input:function(){return g.is("input")},loading:function(){return!!l.request&&"pending"==l.request.state()},abortedRequest:function(e){return e&&e.readyState!==P&&0===e.readyState?(l.verbose("XHR request determined to be aborted"),!0):(l.verbose("XHR request was not aborted"),!1)},validResponse:function(e){return l.is.expectingJSON()&&E.isFunction(c.successTest)?(l.debug("Checking JSON returned success",c.successTest,e),c.successTest(e)?(l.debug("Response passed success test",e),!0):(l.debug("Response failed success test",e),!1)):(l.verbose("Response is not JSON, skipping validation",c.successTest,e),!0)}},was:{cancelled:function(){return l.cancelled||!1},succesful:function(){return l.verbose('This behavior will be deleted due to typo. Use "was successful" instead.'),l.was.successful()},successful:function(){return l.request&&"resolved"==l.request.state()},failure:function(){return l.request&&"rejected"==l.request.state()},complete:function(){return l.request&&("resolved"==l.request.state()||"rejected"==l.request.state())}},add:{urlData:function(o,a){var e,t;return o&&(e=o.match(c.regExp.required),t=o.match(c.regExp.optional),a=a||c.urlData,e&&(l.debug("Looking for required URL variables",e),E.each(e,function(e,t){var n=-1!==t.indexOf("$")?t.substr(2,t.length-3):t.substr(1,t.length-2),i=E.isPlainObject(a)&&a[n]!==P?a[n]:g.data(n)!==P?g.data(n):h.data(n)!==P?h.data(n):a[n];if(i===P)return l.error(u.requiredParameter,n,o),o=!1;l.verbose("Found required variable",n,i),i=c.encodeParameters?l.get.urlEncodedValue(i):i,o=o.replace(t,i)})),t&&(l.debug("Looking for optional URL variables",e),E.each(t,function(e,t){var n=-1!==t.indexOf("$")?t.substr(3,t.length-4):t.substr(2,t.length-3),i=E.isPlainObject(a)&&a[n]!==P?a[n]:g.data(n)!==P?g.data(n):h.data(n)!==P?h.data(n):a[n];o=i!==P?(l.verbose("Optional variable Found",n,i),o.replace(t,i)):(l.verbose("Optional variable not found",n),-1!==o.indexOf("/"+t)?o.replace("/"+t,""):o.replace(t,""))}))),o},formData:function(e){var t=E.fn.serializeObject!==P,n=t?p.serializeObject():p.serialize();return e=e||c.data,e=E.isPlainObject(e)?t?(l.debug("Extending existing data with form data",e,n),E.extend(!0,{},e,n)):(l.error(u.missingSerialize),l.debug("Cant extend data. Replacing data with form data",e,n),n):(l.debug("Adding form data",n),n)}},send:{request:function(){l.set.loading(),l.request=l.create.request(),l.is.mocked()?l.mockedXHR=l.create.mockedXHR():l.xhr=l.create.xhr(),c.onRequest.call(b,l.request,l.xhr)}},event:{trigger:function(e){l.query(),"submit"!=e.type&&"click"!=e.type||e.preventDefault()},xhr:{always:function(){},done:function(e,t,n){var i=this,o=(new Date).getTime()-s,a=c.loadingDuration-o,r=!!E.isFunction(c.onResponse)&&(l.is.expectingJSON()&&!c.rawResponse?c.onResponse.call(i,E.extend(!0,{},e)):c.onResponse.call(i,e));a=0<a?a:0,r&&(l.debug("Modified API response in onResponse callback",c.onResponse,r,e),e=r),0<a&&l.debug("Response completed early delaying state change by",a),setTimeout(function(){l.is.validResponse(e)?l.request.resolveWith(i,[e,n]):l.request.rejectWith(i,[n,"invalid"])},a)},fail:function(e,t,n){var i=this,o=(new Date).getTime()-s,a=c.loadingDuration-o;0<(a=0<a?a:0)&&l.debug("Response completed early delaying state change by",a),setTimeout(function(){l.is.abortedRequest(e)?l.request.rejectWith(i,[e,"aborted",n]):l.request.rejectWith(i,[e,"error",t,n])},a)}},request:{done:function(e,t){l.debug("Successful API Response",e),"local"===c.cache&&n&&(l.write.cachedResponse(n,e),l.debug("Saving server response locally",l.cache)),c.onSuccess.call(b,e,g,t)},complete:function(e,t){var n,i;l.was.successful()?(i=e,n=t):(n=e,i=l.get.responseFromXHR(n)),l.remove.loading(),c.onComplete.call(b,i,g,n)},fail:function(e,t,n){var i=l.get.responseFromXHR(e),o=l.get.errorFromRequest(i,t,n);if("aborted"==t)return l.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)",t,n),c.onAbort.call(b,t,g,e),!0;"invalid"==t?l.debug("JSON did not pass success test. A server-side error has most likely occurred",i):"error"==t&&e!==P&&(l.debug("XHR produced a server error",t,n),(e.status<200||300<=e.status)&&n!==P&&""!==n&&l.error(u.statusMessage+n,a.url),c.onError.call(b,o,g,e)),c.errorDuration&&"aborted"!==t&&(l.debug("Adding error state"),l.set.error(),l.should.removeError()&&setTimeout(l.remove.error,c.errorDuration)),l.debug("API Request failed",o,e),c.onFailure.call(b,i,g,e)}}},create:{request:function(){return E.Deferred().always(l.event.request.complete).done(l.event.request.done).fail(l.event.request.fail)},mockedXHR:function(){var e,t,n,i=c.mockResponse||c.response,o=c.mockResponseAsync||c.responseAsync;return n=E.Deferred().always(l.event.xhr.complete).done(l.event.xhr.done).fail(l.event.xhr.fail),i?(t=E.isFunction(i)?(l.debug("Using specified synchronous callback",i),i.call(b,r)):(l.debug("Using settings specified response",i),i),n.resolveWith(b,[t,!1,{responseText:t}])):E.isFunction(o)&&(e=function(e){l.debug("Async callback returned response",e),e?n.resolveWith(b,[e,!1,{responseText:e}]):n.rejectWith(b,[{responseText:e},!1,!1])},l.debug("Using specified async response callback",o),o.call(b,r,e)),n},xhr:function(){var e;return e=E.ajax(a).always(l.event.xhr.always).done(l.event.xhr.done).fail(l.event.xhr.fail),l.verbose("Created server request",e,a),e}},set:{error:function(){l.verbose("Adding error state to element",h),h.addClass(d.error)},loading:function(){l.verbose("Adding loading state to element",h),h.addClass(d.loading),s=(new Date).getTime()}},remove:{error:function(){l.verbose("Removing error state from element",h),h.removeClass(d.error)},loading:function(){l.verbose("Removing loading state from element",h),h.removeClass(d.loading)}},get:{responseFromXHR:function(e){return!!E.isPlainObject(e)&&(l.is.expectingJSON()?l.decode.json(e.responseText):e.responseText)},errorFromRequest:function(e,t,n){return E.isPlainObject(e)&&e.error!==P?e.error:c.error[t]!==P?c.error[t]:n},request:function(){return l.request||!1},xhr:function(){return l.xhr||!1},settings:function(){var e;return(e=c.beforeSend.call(g,c))&&(e.success!==P&&(l.debug("Legacy success callback detected",e),l.error(u.legacyParameters,e.success),e.onSuccess=e.success),e.failure!==P&&(l.debug("Legacy failure callback detected",e),l.error(u.legacyParameters,e.failure),e.onFailure=e.failure),e.complete!==P&&(l.debug("Legacy complete callback detected",e),l.error(u.legacyParameters,e.complete),e.onComplete=e.complete)),e===P&&l.error(u.noReturnedValue),!1===e?e:e!==P?E.extend(!0,{},e):E.extend(!0,{},c)},urlEncodedValue:function(e){var t=F.decodeURIComponent(e),n=F.encodeURIComponent(e);return t!==e?(l.debug("URL value is already encoded, avoiding double encoding",e),e):(l.verbose("Encoding value using encodeURIComponent",e,n),n)},defaultData:function(){var e={};return E.isWindow(v)||(l.is.input()?e.value=g.val():l.is.form()||(e.text=g.text())),e},event:function(){return E.isWindow(v)||"now"==c.on?(l.debug("API called without element, no events attached"),!1):"auto"==c.on?g.is("input")?v.oninput!==P?"input":v.onpropertychange!==P?"propertychange":"keyup":g.is("form")?"submit":"click":c.on},templatedURL:function(e){if(e=e||g.data(i.action)||c.action||!1,n=g.data(i.url)||c.url||!1)return l.debug("Using specified url",n),n;if(e){if(l.debug("Looking up url for action",e,c.api),c.api[e]===P&&!l.is.mocked())return void l.error(u.missingAction,c.action,c.api);n=c.api[e]}else l.is.form()&&(n=g.attr("action")||h.attr("action")||!1,l.debug("No url or action specified, defaulting to form action",n));return n}},abort:function(){var e=l.get.xhr();e&&"resolved"!==e.state()&&(l.debug("Cancelling API request"),e.abort())},reset:function(){l.remove.error(),l.remove.loading()},setting:function(e,t){if(l.debug("Changing setting",e,t),E.isPlainObject(e))E.extend(!0,c,e);else{if(t===P)return c[e];E.isPlainObject(c[e])?E.extend(!0,c[e],t):c[e]=t}},internal:function(e,t){if(E.isPlainObject(e))E.extend(!0,l,e);else{if(t===P)return l[e];l[e]=t}},debug:function(){!c.silent&&c.debug&&(c.performance?l.performance.log(arguments):(l.debug=Function.prototype.bind.call(console.info,console,c.name+":"),l.debug.apply(console,arguments)))},verbose:function(){!c.silent&&c.verbose&&c.debug&&(c.performance?l.performance.log(arguments):(l.verbose=Function.prototype.bind.call(console.info,console,c.name+":"),l.verbose.apply(console,arguments)))},error:function(){c.silent||(l.error=Function.prototype.bind.call(console.error,console,c.name+":"),l.error.apply(console,arguments))},performance:{log:function(e){var t,n;c.performance&&(n=(t=(new Date).getTime())-(k||t),k=t,T.push({Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(l.performance.timer),l.performance.timer=setTimeout(l.performance.display,500)},display:function(){var e=c.name+":",n=0;k=!1,clearTimeout(l.performance.timer),E.each(T,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",w&&(e+=" '"+w+"'"),(console.group!==P||console.table!==P)&&0<T.length&&(console.groupCollapsed(e),console.table?console.table(T):E.each(T,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),T=[]}},invoke:function(i,e,t){var o,a,n,r=y;return e=e||A,t=v||t,"string"==typeof i&&r!==P&&(i=i.split(/[\. ]/),o=i.length-1,E.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(E.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==P)return a=r[n],!1;if(!E.isPlainObject(r[t])||e==o)return r[t]!==P?a=r[t]:l.error(u.method,i),!1;r=r[t]}})),E.isFunction(a)?n=a.apply(t,e):a!==P&&(n=a),Array.isArray(C)?C.push(n):C!==P?C=[C,n]:n!==P&&(C=n),a}},D?(y===P&&l.initialize(),l.invoke(S)):(y!==P&&y.invoke("destroy"),l.initialize())}),C!==P?C:this},E.api.settings={name:"API",namespace:"api",debug:!1,verbose:!1,performance:!0,api:{},cache:!0,interruptRequests:!0,on:"auto",stateContext:!1,loadingDuration:0,hideError:"auto",errorDuration:2e3,encodeParameters:!0,action:!1,url:!1,base:"",urlData:{},defaultData:!0,serializeForm:!1,throttle:0,throttleFirstRequest:!0,method:"get",data:{},dataType:"json",mockResponse:!1,mockResponseAsync:!1,response:!1,responseAsync:!1,rawResponse:!1,beforeSend:function(e){return e},beforeXHR:function(e){},onRequest:function(e,t){},onResponse:!1,onSuccess:function(e,t){},onComplete:function(e,t){},onFailure:function(e,t){},onError:function(e,t){},onAbort:function(e,t){},successTest:!1,error:{beforeSend:"The before send function has aborted the request",error:"There was an error with your request",exitConditions:"API Request Aborted. Exit conditions met",JSONParse:"JSON could not be parsed during error handling",legacyParameters:"You are using legacy API success callback names",method:"The method you called is not defined",missingAction:"API action used but no url was defined",missingSerialize:"jquery-serialize-object is required to add form data to an existing data object",missingURL:"No URL specified for api event",noReturnedValue:"The beforeSend callback must return a settings object, beforeSend ignored.",noStorage:"Caching responses locally requires session storage",parseError:"There was an error parsing your request",requiredParameter:"Missing a required URL parameter: ",statusMessage:"Server gave an error: ",timeout:"Your request timed out"},regExp:{required:/\{\$*[A-z0-9]+\}/g,optional:/\{\/\$*[A-z0-9]+\}/g},className:{loading:"loading",error:"error"},selector:{disabled:".disabled",form:"form"},metadata:{action:"action",url:"url"}}}(jQuery,window,document),function(w,e,t,k){"use strict";w.isFunction=w.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),w.fn.state=function(m){var g,p=w(this),h=p.selector||"",v=(new Date).getTime(),b=[],y=m,x="string"==typeof y,C=[].slice.call(arguments,1);return p.each(function(){var s,o=w.isPlainObject(m)?w.extend(!0,{},w.fn.state.settings,m):w.extend({},w.fn.state.settings),l=o.error,n=o.metadata,t=o.className,e=o.namespace,i=o.states,a=o.text,r="."+e,c=e+"-module",u=w(this),d=this,f=u.data(c);s={initialize:function(){s.verbose("Initializing module"),o.automatic&&s.add.defaults(),o.context&&""!==h?w(o.context).on(h,"mouseenter"+r,s.change.text).on(h,"mouseleave"+r,s.reset.text).on(h,"click"+r,s.toggle.state):u.on("mouseenter"+r,s.change.text).on("mouseleave"+r,s.reset.text).on("click"+r,s.toggle.state),s.instantiate()},instantiate:function(){s.verbose("Storing instance of module",s),f=s,u.data(c,s)},destroy:function(){s.verbose("Destroying previous module",f),u.off(r).removeData(c)},refresh:function(){s.verbose("Refreshing selector cache"),u=w(d)},add:{defaults:function(){var n=m&&w.isPlainObject(m.states)?m.states:{};w.each(o.defaults,function(e,t){s.is[e]!==k&&s.is[e]()&&(s.verbose("Adding default states",e,d),w.extend(o.states,t,n))})}},is:{active:function(){return u.hasClass(t.active)},loading:function(){return u.hasClass(t.loading)},inactive:function(){return!u.hasClass(t.active)},state:function(e){return t[e]!==k&&u.hasClass(t[e])},enabled:function(){return!u.is(o.filter.active)},disabled:function(){return u.is(o.filter.active)},textEnabled:function(){return!u.is(o.filter.text)},button:function(){return u.is(".button:not(a, .submit)")},input:function(){return u.is("input")},progress:function(){return u.is(".ui.progress")}},allow:function(e){s.debug("Now allowing state",e),i[e]=!0},disallow:function(e){s.debug("No longer allowing",e),i[e]=!1},allows:function(e){return i[e]||!1},enable:function(){u.removeClass(t.disabled)},disable:function(){u.addClass(t.disabled)},setState:function(e){s.allows(e)&&u.addClass(t[e])},removeState:function(e){s.allows(e)&&u.removeClass(t[e])},toggle:{state:function(){var e;if(s.allows("active")&&s.is.enabled()){if(s.refresh(),w.fn.api!==k)if(e=u.api("get request"),u.api("was cancelled"))s.debug("API Request cancelled by beforesend"),o.activateTest=function(){return!1},o.deactivateTest=function(){return!1};else if(e)return void s.listenTo(e);s.change.state()}}},listenTo:function(e){s.debug("API request detected, waiting for state signal",e),e&&(a.loading&&s.update.text(a.loading),w.when(e).then(function(){"resolved"==e.state()?(s.debug("API request succeeded"),o.activateTest=function(){return!0},o.deactivateTest=function(){return!0}):(s.debug("API request failed"),o.activateTest=function(){return!1},o.deactivateTest=function(){return!1}),s.change.state()}))},change:{state:function(){s.debug("Determining state change direction"),s.is.inactive()?s.activate():s.deactivate(),o.sync&&s.sync(),o.onChange.call(d)},text:function(){s.is.textEnabled()&&(s.is.disabled()?(s.verbose("Changing text to disabled text",a.hover),s.update.text(a.disabled)):s.is.active()?a.hover?(s.verbose("Changing text to hover text",a.hover),s.update.text(a.hover)):a.deactivate&&(s.verbose("Changing text to deactivating text",a.deactivate),s.update.text(a.deactivate)):a.hover?(s.verbose("Changing text to hover text",a.hover),s.update.text(a.hover)):a.activate&&(s.verbose("Changing text to activating text",a.activate),s.update.text(a.activate)))}},activate:function(){o.activateTest.call(d)&&(s.debug("Setting state to active"),u.addClass(t.active),s.update.text(a.active),o.onActivate.call(d))},deactivate:function(){o.deactivateTest.call(d)&&(s.debug("Setting state to inactive"),u.removeClass(t.active),s.update.text(a.inactive),o.onDeactivate.call(d))},sync:function(){s.verbose("Syncing other buttons to current state"),s.is.active()?p.not(u).state("activate"):p.not(u).state("deactivate")},get:{text:function(){return o.selector.text?u.find(o.selector.text).text():u.html()},textFor:function(e){return a[e]||!1}},flash:{text:function(e,t,n){var i=s.get.text();s.debug("Flashing text message",e,t),e=e||o.text.flash,t=t||o.flashDuration,n=n||function(){},s.update.text(e),setTimeout(function(){s.update.text(i),n.call(d)},t)}},reset:{text:function(){var e=a.active||u.data(n.storedText),t=a.inactive||u.data(n.storedText);s.is.textEnabled()&&(s.is.active()&&e?(s.verbose("Resetting active text",e),s.update.text(e)):t&&(s.verbose("Resetting inactive text",e),s.update.text(t)))}},update:{text:function(e){var t=s.get.text();e&&e!==t?(s.debug("Updating text",e),o.selector.text?u.data(n.storedText,e).find(o.selector.text).text(e):u.data(n.storedText,e).html(e)):s.debug("Text is already set, ignoring update",e)}},setting:function(e,t){if(s.debug("Changing setting",e,t),w.isPlainObject(e))w.extend(!0,o,e);else{if(t===k)return o[e];w.isPlainObject(o[e])?w.extend(!0,o[e],t):o[e]=t}},internal:function(e,t){if(w.isPlainObject(e))w.extend(!0,s,e);else{if(t===k)return s[e];s[e]=t}},debug:function(){!o.silent&&o.debug&&(o.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,o.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!o.silent&&o.verbose&&o.debug&&(o.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,o.name+":"),s.verbose.apply(console,arguments)))},error:function(){o.silent||(s.error=Function.prototype.bind.call(console.error,console,o.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;o.performance&&(n=(t=(new Date).getTime())-(v||t),v=t,b.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:d,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=o.name+":",n=0;v=!1,clearTimeout(s.performance.timer),w.each(b,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",h&&(e+=" '"+h+"'"),(console.group!==k||console.table!==k)&&0<b.length&&(console.groupCollapsed(e),console.table?console.table(b):w.each(b,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),b=[]}},invoke:function(i,e,t){var o,a,n,r=f;return e=e||C,t=d||t,"string"==typeof i&&r!==k&&(i=i.split(/[\. ]/),o=i.length-1,w.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(w.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==k)return a=r[n],!1;if(!w.isPlainObject(r[t])||e==o)return r[t]!==k?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),w.isFunction(a)?n=a.apply(t,e):a!==k&&(n=a),Array.isArray(g)?g.push(n):g!==k?g=[g,n]:n!==k&&(g=n),a}},x?(f===k&&s.initialize(),s.invoke(y)):(f!==k&&f.invoke("destroy"),s.initialize())}),g!==k?g:this},w.fn.state.settings={name:"State",debug:!1,verbose:!1,namespace:"state",performance:!0,onActivate:function(){},onDeactivate:function(){},onChange:function(){},activateTest:function(){return!0},deactivateTest:function(){return!0},automatic:!0,sync:!1,flashDuration:1e3,filter:{text:".loading, .disabled",active:".disabled"},context:!1,error:{beforeSend:"The before send function has cancelled state change",method:"The method you called is not defined."},metadata:{promise:"promise",storedText:"stored-text"},className:{active:"active",disabled:"disabled",error:"error",loading:"loading",success:"success",warning:"warning"},selector:{text:!1},defaults:{input:{disabled:!0,loading:!0,active:!0},button:{disabled:!0,loading:!0,active:!0},progress:{active:!0,success:!0,warning:!0,error:!0}},states:{active:!0,disabled:!0,error:!0,loading:!0,success:!0,warning:!0},text:{disabled:!1,flash:!1,hover:!1,active:!1,inactive:!1,activate:!1,deactivate:!1}}}(jQuery,window,document),function(E,F,P,O){"use strict";E.isFunction=E.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},F=void 0!==F&&F.Math==Math?F:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),E.fn.visibility=function(b){var y,e=E(this),x=e.selector||"",C=(new Date).getTime(),w=[],k=b,T="string"==typeof k,S=[].slice.call(arguments,1),D=e.length,A=0;return e.each(function(){var e,t,n,s,o=E.isPlainObject(b)?E.extend(!0,{},E.fn.visibility.settings,b):E.extend({},E.fn.visibility.settings),i=o.className,a=o.namespace,l=o.error,r=o.metadata,c="."+a,u="module-"+a,d=E(F),f=E(this),m=E(o.context),g=f.data(u),p=F.requestAnimationFrame||F.mozRequestAnimationFrame||F.webkitRequestAnimationFrame||F.msRequestAnimationFrame||function(e){setTimeout(e,0)},h=this,v=!1;s={initialize:function(){s.debug("Initializing",o),s.setup.cache(),s.should.trackChanges()&&("image"==o.type&&s.setup.image(),"fixed"==o.type&&s.setup.fixed(),o.observeChanges&&s.observeChanges(),s.bind.events()),s.save.position(),s.is.visible()||s.error(l.visible,f),o.initialCheck&&s.checkVisibility(),s.instantiate()},instantiate:function(){s.debug("Storing instance",s),f.data(u,s),g=s},destroy:function(){s.verbose("Destroying previous module"),n&&n.disconnect(),t&&t.disconnect(),d.off("load"+c,s.event.load).off("resize"+c,s.event.resize),m.off("scroll"+c,s.event.scroll).off("scrollchange"+c,s.event.scrollchange),"fixed"==o.type&&(s.resetFixed(),s.remove.placeholder()),f.off(c).removeData(u)},observeChanges:function(){"MutationObserver"in F&&(t=new MutationObserver(s.event.contextChanged),n=new MutationObserver(s.event.changed),t.observe(P,{childList:!0,subtree:!0}),n.observe(h,{childList:!0,subtree:!0}),s.debug("Setting up mutation observer",n))},bind:{events:function(){s.verbose("Binding visibility events to scroll and resize"),o.refreshOnLoad&&d.on("load"+c,s.event.load),d.on("resize"+c,s.event.resize),m.off("scroll"+c).on("scroll"+c,s.event.scroll).on("scrollchange"+c,s.event.scrollchange)}},event:{changed:function(e){s.verbose("DOM tree modified, updating visibility calculations"),s.timer=setTimeout(function(){s.verbose("DOM tree modified, updating sticky menu"),s.refresh()},100)},contextChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==h||0<E(e).find(h).length)&&(s.debug("Element removed from DOM, tearing down events"),s.destroy())})})},resize:function(){s.debug("Window resized"),o.refreshOnResize&&p(s.refresh)},load:function(){s.debug("Page finished loading"),p(s.refresh)},scroll:function(){o.throttle?(clearTimeout(s.timer),s.timer=setTimeout(function(){m.triggerHandler("scrollchange"+c,[m.scrollTop()])},o.throttle)):p(function(){m.triggerHandler("scrollchange"+c,[m.scrollTop()])})},scrollchange:function(e,t){s.checkVisibility(t)}},precache:function(e,t){e instanceof Array||(e=[e]);for(var n=e.length,i=0,o=[],a=P.createElement("img"),r=function(){++i>=e.length&&E.isFunction(t)&&t()};n--;)(a=P.createElement("img")).onload=r,a.onerror=r,a.src=e[n],o.push(a)},enableCallbacks:function(){s.debug("Allowing callbacks to occur"),v=!1},disableCallbacks:function(){s.debug("Disabling all callbacks temporarily"),v=!0},should:{trackChanges:function(){return T?(s.debug("One time query, no need to bind events"),!1):(s.debug("Callbacks being attached"),!0)}},setup:{cache:function(){s.cache={occurred:{},screen:{},element:{}}},image:function(){var e=f.data(r.src);e&&(s.verbose("Lazy loading image",e),o.once=!0,o.observeChanges=!1,o.onOnScreen=function(){s.debug("Image on screen",h),s.precache(e,function(){s.set.image(e,function(){++A==D&&o.onAllLoaded.call(this),o.onLoad.call(this)})})})},fixed:function(){s.debug("Setting up fixed"),o.once=!1,o.observeChanges=!1,o.initialCheck=!0,o.refreshOnLoad=!0,b.transition||(o.transition=!1),s.create.placeholder(),s.debug("Added placeholder",e),o.onTopPassed=function(){s.debug("Element passed, adding fixed position",f),s.show.placeholder(),s.set.fixed(),o.transition&&E.fn.transition!==O&&f.transition(o.transition,o.duration)},o.onTopPassedReverse=function(){s.debug("Element returned to position, removing fixed",f),s.hide.placeholder(),s.remove.fixed()}}},create:{placeholder:function(){s.verbose("Creating fixed position placeholder"),e=f.clone(!1).css("display","none").addClass(i.placeholder).insertAfter(f)}},show:{placeholder:function(){s.verbose("Showing placeholder"),e.css("display","block").css("visibility","hidden")}},hide:{placeholder:function(){s.verbose("Hiding placeholder"),e.css("display","none").css("visibility","")}},set:{fixed:function(){s.verbose("Setting element to fixed position"),f.addClass(i.fixed).css({position:"fixed",top:o.offset+"px",left:"auto",zIndex:o.zIndex}),o.onFixed.call(h)},image:function(e,t){if(f.attr("src",e),o.transition)if(E.fn.transition!==O){if(f.hasClass(i.visible))return void s.debug("Transition already occurred on this image, skipping animation");f.transition(o.transition,o.duration,t)}else f.fadeIn(o.duration,t);else f.show()}},is:{onScreen:function(){return s.get.elementCalculations().onScreen},offScreen:function(){return s.get.elementCalculations().offScreen},visible:function(){return!(!s.cache||!s.cache.element)&&!(0===s.cache.element.width&&0===s.cache.element.offset.top)},verticallyScrollableContext:function(){var e=m.get(0)!==F&&m.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=m.get(0)!==F&&m.css("overflow-x");return"auto"==e||"scroll"==e}},refresh:function(){s.debug("Refreshing constants (width/height)"),"fixed"==o.type&&s.resetFixed(),s.reset(),s.save.position(),o.checkOnRefresh&&s.checkVisibility(),o.onRefresh.call(h)},resetFixed:function(){s.remove.fixed(),s.remove.occurred()},reset:function(){s.verbose("Resetting all cached values"),E.isPlainObject(s.cache)&&(s.cache.screen={},s.cache.element={})},checkVisibility:function(e){s.verbose("Checking visibility of element",s.cache.element),!v&&s.is.visible()&&(s.save.scroll(e),s.save.calculations(),s.passed(),s.passingReverse(),s.topVisibleReverse(),s.bottomVisibleReverse(),s.topPassedReverse(),s.bottomPassedReverse(),s.onScreen(),s.offScreen(),s.passing(),s.topVisible(),s.bottomVisible(),s.topPassed(),s.bottomPassed(),o.onUpdate&&o.onUpdate.call(h,s.get.elementCalculations()))},passed:function(e,t){var n=s.get.elementCalculations();if(e&&t)o.onPassed[e]=t;else{if(e!==O)return s.get.pixelsPassed(e)>n.pixelsPassed;n.passing&&E.each(o.onPassed,function(e,t){n.bottomVisible||n.pixelsPassed>s.get.pixelsPassed(e)?s.execute(t,e):o.once||s.remove.occurred(t)})}},onScreen:function(e){var t=s.get.elementCalculations(),n=e||o.onOnScreen;if(e&&(s.debug("Adding callback for onScreen",e),o.onOnScreen=e),t.onScreen?s.execute(n,"onScreen"):o.once||s.remove.occurred("onScreen"),e!==O)return t.onOnScreen},offScreen:function(e){var t=s.get.elementCalculations(),n=e||o.onOffScreen;if(e&&(s.debug("Adding callback for offScreen",e),o.onOffScreen=e),t.offScreen?s.execute(n,"offScreen"):o.once||s.remove.occurred("offScreen"),e!==O)return t.onOffScreen},passing:function(e){var t=s.get.elementCalculations(),n=e||o.onPassing;if(e&&(s.debug("Adding callback for passing",e),o.onPassing=e),t.passing?s.execute(n,"passing"):o.once||s.remove.occurred("passing"),e!==O)return t.passing},topVisible:function(e){var t=s.get.elementCalculations(),n=e||o.onTopVisible,i="topVisible";if(e&&(s.debug("Adding callback for top visible",e),o.onTopVisible=e),t.topVisible?s.execute(n,i):o.once||s.remove.occurred(i),e===O)return t.topVisible},bottomVisible:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomVisible,i="bottomVisible";if(e&&(s.debug("Adding callback for bottom visible",e),o.onBottomVisible=e),t.bottomVisible?s.execute(n,i):o.once||s.remove.occurred(i),e===O)return t.bottomVisible},topPassed:function(e){var t=s.get.elementCalculations(),n=e||o.onTopPassed;if(e&&(s.debug("Adding callback for top passed",e),o.onTopPassed=e),t.topPassed?s.execute(n,"topPassed"):o.once||s.remove.occurred("topPassed"),e===O)return t.topPassed},bottomPassed:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomPassed,i="bottomPassed";if(e&&(s.debug("Adding callback for bottom passed",e),o.onBottomPassed=e),t.bottomPassed?s.execute(n,i):o.once||s.remove.occurred(i),e===O)return t.bottomPassed},passingReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onPassingReverse,i="passingReverse";if(e&&(s.debug("Adding callback for passing reverse",e),o.onPassingReverse=e),t.passing?o.once||s.remove.occurred(i):s.get.occurred("passing")&&s.execute(n,i),e!==O)return!t.passing},topVisibleReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onTopVisibleReverse,i="topVisibleReverse";if(e&&(s.debug("Adding callback for top visible reverse",e),o.onTopVisibleReverse=e),t.topVisible?o.once||s.remove.occurred(i):s.get.occurred("topVisible")&&s.execute(n,i),e===O)return!t.topVisible},bottomVisibleReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomVisibleReverse,i="bottomVisibleReverse";if(e&&(s.debug("Adding callback for bottom visible reverse",e),o.onBottomVisibleReverse=e),t.bottomVisible?o.once||s.remove.occurred(i):s.get.occurred("bottomVisible")&&s.execute(n,i),e===O)return!t.bottomVisible},topPassedReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onTopPassedReverse,i="topPassedReverse";if(e&&(s.debug("Adding callback for top passed reverse",e),o.onTopPassedReverse=e),t.topPassed?o.once||s.remove.occurred(i):s.get.occurred("topPassed")&&s.execute(n,i),e===O)return!t.onTopPassed},bottomPassedReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomPassedReverse,i="bottomPassedReverse";if(e&&(s.debug("Adding callback for bottom passed reverse",e),o.onBottomPassedReverse=e),t.bottomPassed?o.once||s.remove.occurred(i):s.get.occurred("bottomPassed")&&s.execute(n,i),e===O)return!t.bottomPassed},execute:function(e,t){var n=s.get.elementCalculations(),i=s.get.screenCalculations();(e=e||!1)&&(o.continuous?(s.debug("Callback being called continuously",t,n),e.call(h,n,i)):s.get.occurred(t)||(s.debug("Conditions met",t,n),e.call(h,n,i))),s.save.occurred(t)},remove:{fixed:function(){s.debug("Removing fixed position"),f.removeClass(i.fixed).css({position:"",top:"",left:"",zIndex:""}),o.onUnfixed.call(h)},placeholder:function(){s.debug("Removing placeholder content"),e&&e.remove()},occurred:function(e){if(e){var t=s.cache.occurred;t[e]!==O&&!0===t[e]&&(s.debug("Callback can now be called again",e),s.cache.occurred[e]=!1)}else s.cache.occurred={}}},save:{calculations:function(){s.verbose("Saving all calculations necessary to determine positioning"),s.save.direction(),s.save.screenCalculations(),s.save.elementCalculations()},occurred:function(e){e&&(s.cache.occurred[e]!==O&&!0===s.cache.occurred[e]||(s.verbose("Saving callback occurred",e),s.cache.occurred[e]=!0))},scroll:function(e){e=e+o.offset||m.scrollTop()+o.offset,s.cache.scroll=e},direction:function(){var e,t=s.get.scroll(),n=s.get.lastScroll();return e=n<t&&n?"down":t<n&&n?"up":"static",s.cache.direction=e,s.cache.direction},elementPosition:function(){var e=s.cache.element,t=s.get.screenSize();return s.verbose("Saving element position"),e.fits=e.height<t.height,e.offset=f.offset(),e.width=f.outerWidth(),e.height=f.outerHeight(),s.is.verticallyScrollableContext()&&(e.offset.top+=m.scrollTop()-m.offset().top),s.is.horizontallyScrollableContext()&&(e.offset.left+=m.scrollLeft()-m.offset().left),s.cache.element=e},elementCalculations:function(){var e=s.get.screenCalculations(),t=s.get.elementPosition();return o.includeMargin?(t.margin={},t.margin.top=parseInt(f.css("margin-top"),10),t.margin.bottom=parseInt(f.css("margin-bottom"),10),t.top=t.offset.top-t.margin.top,t.bottom=t.offset.top+t.height+t.margin.bottom):(t.top=t.offset.top,t.bottom=t.offset.top+t.height),t.topPassed=e.top>=t.top,t.bottomPassed=e.top>=t.bottom,t.topVisible=e.bottom>=t.top&&!t.topPassed,t.bottomVisible=e.bottom>=t.bottom&&!t.bottomPassed,t.pixelsPassed=0,t.percentagePassed=0,t.onScreen=(t.topVisible||t.passing)&&!t.bottomPassed,t.passing=t.topPassed&&!t.bottomPassed,t.offScreen=!t.onScreen,t.passing&&(t.pixelsPassed=e.top-t.top,t.percentagePassed=(e.top-t.top)/t.height),s.cache.element=t,s.verbose("Updated element calculations",t),t},screenCalculations:function(){var e=s.get.scroll();return s.save.direction(),s.cache.screen.top=e,s.cache.screen.bottom=e+s.cache.screen.height,s.cache.screen},screenSize:function(){s.verbose("Saving window position"),s.cache.screen={height:m.height()}},position:function(){s.save.screenSize(),s.save.elementPosition()}},get:{pixelsPassed:function(e){var t=s.get.elementCalculations();return-1<e.search("%")?t.height*(parseInt(e,10)/100):parseInt(e,10)},occurred:function(e){return s.cache.occurred!==O&&s.cache.occurred[e]||!1},direction:function(){return s.cache.direction===O&&s.save.direction(),s.cache.direction},elementPosition:function(){return s.cache.element===O&&s.save.elementPosition(),s.cache.element},elementCalculations:function(){return s.cache.element===O&&s.save.elementCalculations(),s.cache.element},screenCalculations:function(){return s.cache.screen===O&&s.save.screenCalculations(),s.cache.screen},screenSize:function(){return s.cache.screen===O&&s.save.screenSize(),s.cache.screen},scroll:function(){return s.cache.scroll===O&&s.save.scroll(),s.cache.scroll},lastScroll:function(){return s.cache.screen===O?(s.debug("First scroll event, no last scroll could be found"),!1):s.cache.screen.top}},setting:function(e,t){if(E.isPlainObject(e))E.extend(!0,o,e);else{if(t===O)return o[e];o[e]=t}},internal:function(e,t){if(E.isPlainObject(e))E.extend(!0,s,e);else{if(t===O)return s[e];s[e]=t}},debug:function(){!o.silent&&o.debug&&(o.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,o.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!o.silent&&o.verbose&&o.debug&&(o.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,o.name+":"),s.verbose.apply(console,arguments)))},error:function(){o.silent||(s.error=Function.prototype.bind.call(console.error,console,o.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;o.performance&&(n=(t=(new Date).getTime())-(C||t),C=t,w.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:h,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=o.name+":",n=0;C=!1,clearTimeout(s.performance.timer),E.each(w,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",x&&(e+=" '"+x+"'"),(console.group!==O||console.table!==O)&&0<w.length&&(console.groupCollapsed(e),console.table?console.table(w):E.each(w,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),w=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||S,t=h||t,"string"==typeof i&&r!==O&&(i=i.split(/[\. ]/),o=i.length-1,E.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(E.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==O)return a=r[n],!1;if(!E.isPlainObject(r[t])||e==o)return r[t]!==O?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),E.isFunction(a)?n=a.apply(t,e):a!==O&&(n=a),Array.isArray(y)?y.push(n):y!==O?y=[y,n]:n!==O&&(y=n),a}},T?(g===O&&s.initialize(),g.save.scroll(),g.save.calculations(),s.invoke(k)):(g!==O&&g.invoke("destroy"),s.initialize())}),y!==O?y:this},E.fn.visibility.settings={name:"Visibility",namespace:"visibility",debug:!1,verbose:!1,performance:!0,observeChanges:!0,initialCheck:!0,refreshOnLoad:!0,refreshOnResize:!0,checkOnRefresh:!0,once:!0,continuous:!1,offset:0,includeMargin:!1,context:F,throttle:!1,type:!1,zIndex:"10",transition:"fade in",duration:1e3,onPassed:{},onOnScreen:!1,onOffScreen:!1,onPassing:!1,onTopVisible:!1,onBottomVisible:!1,onTopPassed:!1,onBottomPassed:!1,onPassingReverse:!1,onTopVisibleReverse:!1,onBottomVisibleReverse:!1,onTopPassedReverse:!1,onBottomPassedReverse:!1,onLoad:function(){},onAllLoaded:function(){},onFixed:function(){},onUnfixed:function(){},onUpdate:!1,onRefresh:function(){},metadata:{src:"src"},className:{fixed:"fixed",placeholder:"constraint",visible:"visible"},error:{method:"The method you called is not defined.",visible:"Element is hidden, you must call refresh after element becomes visible"}}}(jQuery,window,document);
