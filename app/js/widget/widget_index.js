function gotoPin(t){var e=$(".wrapper .pin");e.removeClass("current").eq(t).addClass("current")}var Zepto=function(){function t(t){return null==t?String(t):B[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return O.call(t,function(t){return null!=t})}function c(t){return t.length>0?E.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in L?L[t]:L[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||A[u(t)]?e:e+"px"}function p(t){var e,n;return k[t]||(e=N.createElement(t),N.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),k[t]=n),k[t]}function h(t){return"children"in t?P.call(t.children):E.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(C in e)n&&(o(e[C])||Y(e[C]))?(o(e[C])&&!o(t[C])&&(t[C]={}),Y(e[C])&&!Y(t[C])&&(t[C]=[]),d(t[C],e[C],n)):e[C]!==b&&(t[C]=e[C])}function m(t,e){return null==e?E(t):E(t).filter(e)}function g(t,n,i,r){return e(n)?n.call(t,i,r):n}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",i=n&&n.baseVal!==b;return e===b?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function w(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?E.parseJSON(t):t):t}catch(e){return t}}function x(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)x(t.childNodes[n],e)}var b,C,E,$,j,S,T=[],P=T.slice,O=T.filter,N=window.document,k={},L={},A={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},M=/^\s*<(\w+|!)[^>]*>/,q=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Z=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,_=/^(?:body|html)$/i,D=/([A-Z])/g,z=["val","css","html","text","data","width","height","offset"],H=["after","prepend","before","append"],R=N.createElement("table"),F=N.createElement("tr"),I={tr:N.createElement("tbody"),tbody:R,thead:R,tfoot:R,td:F,th:F,"*":N.createElement("div")},U=/complete|loaded|interactive/,V=/^[\w-]*$/,B={},J=B.toString,X={},W=N.createElement("div"),Q={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return X.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=W).appendChild(t),i=~X.qsa(r,e).indexOf(t),o&&W.removeChild(t),i},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},S=function(t){return O.call(t,function(e,n){return t.indexOf(e)==n})},X.fragment=function(t,e,n){var i,r,a;return q.test(t)&&(i=E(N.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(Z,"<$1></$2>")),e===b&&(e=M.test(t)&&RegExp.$1),e in I||(e="*"),a=I[e],a.innerHTML=""+t,i=E.each(P.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=E(i),E.each(n,function(t,e){z.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},X.Z=function(t,e){return t=t||[],t.__proto__=E.fn,t.selector=e||"",t},X.isZ=function(t){return t instanceof X.Z},X.init=function(t,n){var i;if(!t)return X.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&M.test(t))i=X.fragment(t,RegExp.$1,n),t=null;else{if(n!==b)return E(n).find(t);i=X.qsa(N,t)}else{if(e(t))return E(N).ready(t);if(X.isZ(t))return t;if(Y(t))i=s(t);else if(r(t))i=[t],t=null;else if(M.test(t))i=X.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==b)return E(n).find(t);i=X.qsa(N,t)}}return X.Z(i,t)},E=function(t,e){return X.init(t,e)},E.extend=function(t){var e,n=P.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},X.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],a=r||o?e.slice(1):e,s=V.test(a);return i(t)&&s&&r?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:P.call(s&&!r?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},E.contains=N.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},E.type=t,E.isFunction=e,E.isWindow=n,E.isArray=Y,E.isPlainObject=o,E.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},E.inArray=function(t,e,n){return T.indexOf.call(e,t,n)},E.camelCase=j,E.trim=function(t){return null==t?"":String.prototype.trim.call(t)},E.uuid=0,E.support={},E.expr={},E.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return c(o)},E.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},E.grep=function(t,e){return O.call(t,e)},window.JSON&&(E.parseJSON=JSON.parse),E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){B["[object "+e+"]"]=e.toLowerCase()}),E.fn={forEach:T.forEach,reduce:T.reduce,push:T.push,sort:T.sort,indexOf:T.indexOf,concat:T.concat,map:function(t){return E(E.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return E(P.apply(this,arguments))},ready:function(t){return U.test(N.readyState)&&N.body?t(E):N.addEventListener("DOMContentLoaded",function(){t(E)},!1),this},get:function(t){return t===b?P.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return T.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):E(O.call(this,function(e){return X.matches(e,t)}))},add:function(t,e){return E(S(this.concat(E(t,e))))},is:function(t){return this.length>0&&X.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==b)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?P.call(t):E(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return E(n)},has:function(t){return this.filter(function(){return r(t)?E.contains(this,t):E(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:E(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:E(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?E(t).filter(function(){var t=this;return T.some.call(n,function(e){return E.contains(e,t)})}):1==this.length?E(X.qsa(this[0],t)):this.map(function(){return X.qsa(this,t)}):E()},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=E(t));n&&!(r?r.indexOf(n)>=0:X.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return E(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=E.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(S(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return h(this)}),t)},contents:function(){return this.map(function(){return P.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return O.call(h(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return E.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=E(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){E(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){E(this[0]).before(t=E(t));for(var e;(e=t.children()).length;)t=e.first();E(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=E(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){E(this).replaceWith(E(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=E(this);(t===b?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return E(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return E(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;E(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(C in t)v(this,C,t[C]);else v(this,t,g(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:b},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){v(this,t)},this)})},prop:function(t,e){return t=Q[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(D,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?w(i):b},val:function(t){return 0 in arguments?this.each(function(e){this.value=g(this,t,e,this.value)}):this[0]&&(this[0].multiple?E(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=E(this),i=g(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i,r=this[0];if(!r)return;if(i=getComputedStyle(r,""),"string"==typeof e)return r.style[j(e)]||i.getPropertyValue(e);if(Y(e)){var o={};return E.each(e,function(t,e){o[e]=r.style[j(e)]||i.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(C in e)e[C]||0===e[C]?a+=u(C)+":"+f(C,e[C])+";":this.each(function(){this.style.removeProperty(u(C))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(E(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?T.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){$=[];var n=y(this),i=g(this,t,e,n);i.split(/\s+/g).forEach(function(t){E(this).hasClass(t)||$.push(t)},this),$.length&&y(this,n+(n?" ":"")+$.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===b)return y(this,"");$=y(this),g(this,t,e,$).split(/\s+/g).forEach(function(t){$=$.replace(l(t)," ")}),y(this,$.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=E(this),r=g(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===b?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===b?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===b?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=_.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(E(t).css("margin-top"))||0,n.left-=parseFloat(E(t).css("margin-left"))||0,i.top+=parseFloat(E(e[0]).css("border-top-width"))||0,i.left+=parseFloat(E(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||N.body;t&&!_.test(t.nodeName)&&"static"==E(t).css("position");)t=t.offsetParent;return t})}},E.fn.detach=E.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});E.fn[t]=function(r){var o,a=this[0];return r===b?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=E(this),a.css(t,g(this,r,e,a[t]()))})}}),H.forEach(function(e,n){var i=n%2;E.fn[e]=function(){var e,r,o=E.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:X.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=E.contains(N.documentElement,r);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return E(t).remove();r.insertBefore(t,e),s&&x(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},E.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return E(t)[e](this),this}}),X.Z.prototype=E.fn,X.uniq=S,X.deserializeValue=w,E.zepto=X,E}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=p++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in w||!!e}function a(t){return x[t]||y&&w[t]||t}function s(n,r,s,c,l,p,h){var d=e(n),m=g[d]||(g[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=l,r.e in x&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=p;var d=p||s;r.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,h))})}function c(t,i,r,s,c){var u=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete g[u][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,c))})})}function u(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each($,function(t,i){var r=n[t];e[t]=function(){return this[i]=b,r&&r.apply(n,arguments)},e[i]=C}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function l(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var f,p=1,h=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,w={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:c},t.proxy=function(n,i){var r=2 in arguments&&h.call(arguments,2);if(d(n)){var o=function(){return n.apply(i,r?r.concat(h.call(arguments)):arguments)};return o._zid=e(n),o}if(m(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var b=function(){return!0},C=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,$={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,u,p=this;return e&&!m(e)?(t.each(e,function(t,e){p.on(t,n,i,e,o)}),p):(m(n)||d(r)||r===!1||(r=i,i=n,n=f),(d(i)||i===!1)&&(r=i,i=f),r===!1&&(r=C),p.each(function(f,p){o&&(a=function(t){return c(p,t.type,r),r.apply(this,arguments)}),n&&(u=function(e){var i,o=t(e.target).closest(n,p).get(0);return o&&o!==p?(i=t.extend(l(e),{currentTarget:o,liveFired:p}),(a||r).apply(o,[i].concat(h.call(arguments,1)))):void 0}),s(p,e,r,i,n,u||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=C),r.each(function(){c(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){e.type in w&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l(m(e)?t.Event(e):e),r._args=i,r.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),u(n)}}(Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context,a="success";i.success.call(o,t,a,e),r&&r.resolveWith(o,[t,a,e]),n(i,o,"ajaxSuccess",[e,i,t]),c(a,e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),c(e,i,r)}function c(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==C?"json":x.test(t)?"script":b.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function p(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function h(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function d(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(c.name,c.value):"array"==o||!i&&"object"==o?d(e,c,i,n):e.add(n,c)})}var m,g,v=0,y=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,b=/^(?:text|application)\/xml/i,C="application/json",E="text/html",$=/^\s*$/,j=y.createElement("a");j.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++v,l=y.createElement("script"),f=window[u],p=function(e){t(l).triggerHandler("error",e||"abort")},h={abort:p};return n&&n.promise(h),t(l).on("load error",function(o,c){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?a(i[0],h,e,n):s(null,c||"error",h,e,n),window[u]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(h,e)===!1?(p("abort"),h):(window[u]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){p("timeout")},e.timeout)),h)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:C,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,r=t.extend({},e||{}),c=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===r[m]&&(r[m]=t.ajaxSettings[m]);i(r),r.crossDomain||(n=y.createElement("a"),n.href=r.url,n.href=n.href,r.crossDomain=j.protocol+"//"+j.host!=n.protocol+"//"+n.host),r.url||(r.url=window.location.toString()),p(r);var h=r.dataType,d=/\?.+=\?/.test(r.url);if(d&&(h="jsonp"),r.cache!==!1&&(e&&e.cache===!0||"script"!=h&&"jsonp"!=h)||(r.url=f(r.url,"_="+Date.now())),"jsonp"==h)return d||(r.url=f(r.url,r.jsonp?r.jsonp+"=?":r.jsonp===!1?"":"callback=?")),t.ajaxJSONP(r,c);var v,w=r.accepts[h],x={},b=function(t,e){x[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(r.url)?RegExp.$1:window.location.protocol,E=r.xhr(),S=E.setRequestHeader;if(c&&c.promise(E),r.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",w||"*/*"),(w=r.mimeType||w)&&(w.indexOf(",")>-1&&(w=w.split(",",2)[0]),E.overrideMimeType&&E.overrideMimeType(w)),(r.contentType||r.contentType!==!1&&r.data&&"GET"!=r.type.toUpperCase())&&b("Content-Type",r.contentType||"application/x-www-form-urlencoded"),r.headers)for(g in r.headers)b(g,r.headers[g]);if(E.setRequestHeader=b,E.onreadystatechange=function(){if(4==E.readyState){E.onreadystatechange=u,clearTimeout(v);var e,n=!1;if(E.status>=200&&E.status<300||304==E.status||0==E.status&&"file:"==C){h=h||l(r.mimeType||E.getResponseHeader("content-type")),e=E.responseText;try{"script"==h?(0,eval)(e):"xml"==h?e=E.responseXML:"json"==h&&(e=$.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?s(n,"parsererror",E,r,c):a(e,E,r,c)}else s(E.statusText||null,E.status?"error":"abort",E,r,c)}},o(E,r)===!1)return E.abort(),s(null,"abort",E,r,c),E;if(r.xhrFields)for(g in r.xhrFields)E[g]=r.xhrFields[g];var T="async"in r?r.async:!0;E.open(r.type,r.url,T,r.username,r.password);for(g in x)S.apply(E,x[g]);return r.timeout>0&&(v=setTimeout(function(){E.onreadystatechange=u,E.abort(),s(null,"timeout",E,r,c)},r.timeout)),E.send(r.data?r.data:null),E},t.get=function(){return t.ajax(h.apply(null,arguments))},t.post=function(){var e=h.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=h.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=h(e,n,i),c=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(w,"")).find(r):e),c&&c.apply(o,arguments)},t.ajax(s),this};var S=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(S(e)+"="+S(n))},d(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(){"use strict";function t(t,e){var n=[],i=this.options;return i.onProgress&&t&&i.onProgress.call(this,t,e,this.completed.length),this.completed.length+this.errors.length===this.queue.length&&(n.push(this.completed),this.errors.length&&n.push(this.errors),i.onComplete.apply(this,n)),this}var e="addEventListener"in new Image,n=function(t,e){this.options={pipeline:!1,auto:!0,prefetch:!1,onComplete:function(){}},e&&"object"==typeof e&&this.setOptions(e),this.addQueue(t),this.queue.length&&this.options.auto&&this.processQueue()};n.prototype.setOptions=function(t){var e,n=this.options;for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return this},n.prototype.addQueue=function(t){return this.queue=t.slice(),this},n.prototype.reset=function(){return this.completed=[],this.errors=[],this},n.prototype.addEvents=function(n,i,r){var o=this,a=this.options,s=function(){e?(this.removeEventListener("error",c),this.removeEventListener("abort",c),this.removeEventListener("load",u)):this.onerror=this.onabort=this.onload=null},c=function(){s.call(this),o.errors.push(i),a.onError&&a.onError.call(o,i),t.call(o,i),a.pipeline&&o.loadNext(r)},u=function(){s.call(this),o.completed.push(i),t.call(o,i,this),a.pipeline&&o.loadNext(r)};e?(n.addEventListener("error",c,!1),n.addEventListener("abort",c,!1),n.addEventListener("load",u,!1)):(n.onerror=n.onabort=c,n.onload=u)},n.prototype.load=function(t,e){var n=new Image;return this.addEvents(n,t,e),n.src=t,this},n.prototype.loadNext=function(t){return t++,this.queue[t]&&this.load(this.queue[t],t),this},n.prototype.processQueue=function(){var t=0,e=this.queue,n=e.length;if(this.reset(),this.options.pipeline)this.load(e[0],0);else for(;n>t;++t)this.load(e[t],t);return this},"function"==typeof define&&define.amd?define(function(){return n}):this.preLoader=n}.call(this),function(t,e){var n=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",r=function(){var t=n.clientWidth;window.innerHeight;t&&(n.style.fontSize=50*(t/375)+"px")};t.addEventListener&&(e.addEventListener(i,r,!1),r())}(document,window),Api={isFollow:function(t){$.ajax({url:"/api/status",type:"POST",dataType:"json",success:function(e){return t(e)}})},isLogin:function(t){$.ajax({url:"/api/islogin",type:"POST",dataType:"json",success:function(e){return t(e)}})},ifShared:function(t){$.ajax({url:"/api/share",type:"POST",dataType:"json",success:function(e){return t(e)}})},coupon:function(t){$.ajax({url:"/api/card",type:"POST",dataType:"json",success:function(e){return t(e)}})}},function(){var t=(navigator.userAgent.toLowerCase(),{goHomepage:function(){gotoPin(0)},msgBox:function(t,e){e?$("body").append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+t+"</div></div>"):$("body").append('<div class="ajaxpop msgbox"><div class="loading"><div class="icon-loading"></div>'+t+"</div></div>")},errorMsg:{add:function(t,e){t.find(".error").length?t.find(".error").html(e):t.append('<div class="error">'+e+"</div>")},remove:function(t){t.find(".error").length&&t.find(".error").remove()}}});this.Common=t}.call(this),function(){"use strict";var t=function(){this.curPage=0,this.selectedColor=""};t.prototype={init:function(){var t=this;$(".loading-wrap").addClass("show");var e="/app",n=[e+"/images/coach-avatar.png",e+"/images/coupon.png",e+"/images/input-wx-bg.png",e+"/images/link-terms.png",e+"/images/loading-logo.png",e+"/images/qrcode-follow-text.png",e+"/images/qrcode-follow.png",e+"/images/qrcode-share-text.png",e+"/images/qrcode-share.png",e+"/images/share-guide.png"];new preLoader(n,{onProgress:function(){},onComplete:function(){$(".preloading").remove(1e3),Common.goHomepage(),$("#input-tocoach").keypress(function(e){if("13"==e.keyCode){var n=$(this).val();n.length&&(t.outputMsg(1,headimgurl,n),t.compareCommand(n),$(this).val(""),$(".pin-inner").scrollTop($(".conversation-list").height()))}}),$("#input-tocoach").on("focusout",function(){var e=$(this).val();e.length&&(t.outputMsg(1,headimgurl,e),t.compareCommand(e),$(this).val(""),$(".pin-inner").scrollTop($(".conversation-list").height()))}),$(".wrapper").on("click",".btn-share",function(){$(".popup").addClass("hide"),$(".share-pop").removeClass("hide"),t.showShareQrcode()}),$(".wrapper").on("click",".item-coupon",function(){t.addCouppon(1)}),$(".wrapper").on("click",".share-1",function(){Api.ifShared(function(t){1==t.status?($(".popup").addClass("hide"),$(".qrcode-share-pop").removeClass("hide")):2==t.status?($(".redpacket-pop").removeClass("hide"),$(".got-redpacket").addClass("hide"),$(".no-redpacket").removeClass("hide")):4==t.status&&(alert("红包已经领过"),$(".redpacket-pop").removeClass("hide"),$(".no-redpacket").addClass("hide"),$(".got-redpacket").removeClass("hide"))})}),t.closePop()}})},compareCommand:function(t){for(var e=this,n=["520","1314","5201314"],i=0;i<n.length;i++){if(t==n[i])return e.outputMsg(2,"/app/images/coach-avatar.png","么么哒~COACH收到你的真情告白啦，马上为你送上专属的520优惠券，爱你哟！"),e.outputMsg(3,"/app/images/coach-avatar.png","么么哒~COACH收到你的真情告白啦，马上为你送上专属的520优惠券，爱你哟！"),void e.outputMsg(2,"/app/images/coach-avatar.png",'点击领取卡券，呼朋唤友来<span class="btn-share">告白</span>,即可参加Coach 520抢现金红包活动哦！');i==n.length-1&&e.outputMsg(2,"/app/images/coach-avatar.png","爱的信号有误，COACH无法回应你的爱意哦！")}},outputMsg:function(t,e,n){var i="";1==t?i='<li class="item item-right animate fade"><div class="avatar"><img src="'+e+'" alt=""/></div><div class="words">'+n+"</div></li>":2==t?i='<li class="item item-left animate fade"><div class="avatar"><img src="'+e+'" alt=""/></div><div class="words">'+n+"</div></li>":3==t&&(i='<li class="item item-left item-coupon animate fade"><img src="/app/images/coupon.png" alt=""/></li>'),$(".conversation-list").append(i)},showShareQrcode:function(){wx.ready(function(){wx.onMenuShareTimeline({title:"520，告白Coach即可抢现金红包",link:window.location.href,imgUrl:window.location.origin+"/app/images/wx-share.png",success:function(){Api.ifShared(function(t){1==t.status?($(".popup").addClass("hide"),$(".qrcode-share-pop").removeClass("hide")):2==t.status?($(".redpacket-pop").removeClass("hide"),$(".got-redpacket").addClass("hide"),$(".no-redpacket").removeClass("hide")):4==t.status&&(alert("红包已经领过"),$(".redpacket-pop").removeClass("hide"),$(".no-redpacket").addClass("hide"),$(".got-redpacket").removeClass("hide"))})},cancel:function(){}}),wx.onMenuShareAppMessage({title:"520，告白Coach即可抢现金红包",desc:"520没有被发红包？没关系，快来Coach微信告白，现金红包抢抢抢！",link:window.location.href,imgUrl:window.location.origin+"/app/images/wx-share.png",type:"",dataUrl:"",success:function(){$(".popup").addClass("hide"),$(".qrcode-share-pop").removeClass("hide")},cancel:function(){}})})},closePop:function(){$(".btn-close").on("click",function(){$(this).parent().hasClass("inner")?$(this).parent().parent().addClass("hide"):$(this).parent().addClass("hide")})},addCouppon:function(t){Api.coupon(function(e){if(e.status){
var n=e.msg;wx.addCard({cardList:[{cardId:n[t-1].cardId,cardExt:'{"timestamp":"'+n[t-1].cardExt.timestamp+'","signature":"'+n[t-1].cardExt.signature+'"}'}],success:function(t){t.cardList},fail:function(t){},complete:function(t){},cancel:function(t){},trigger:function(t){}})}})}},"function"==typeof define&&define.amd?define(function(){return t}):this.controller=t}.call(this),$(document).ready(function(t){var e=new controller;e.init()}),$(document).ready(function(){wx.ready(function(){wx.onMenuShareTimeline({title:"520，告白Coach即可抢现金红包",link:window.location.href,imgUrl:window.location.origin+"/app/images/wx-share.png",success:function(){},cancel:function(){}}),wx.onMenuShareAppMessage({title:"520，告白Coach即可抢现金红包",desc:"520没有被发红包？没关系，快来Coach微信告白，现金红包抢抢抢！",link:window.location.href,imgUrl:window.location.origin+"/app/images/wx-share.png",type:"",dataUrl:"",success:function(){},cancel:function(){}})})});