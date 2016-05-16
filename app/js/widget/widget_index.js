function gotoPin(t){var e=$(".wrapper .pin");e.removeClass("current").eq(t).addClass("current")}var Zepto=function(){function t(t){return null==t?String(t):B[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return P.call(t,function(t){return null!=t})}function c(t){return t.length>0?C.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in N?N[t]:N[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||A[u(t)]?e:e+"px"}function h(t){var e,n;return O[t]||(e=_.createElement(t),_.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),O[t]=n),O[t]}function p(t){return"children"in t?k.call(t.children):C.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(E in e)n&&(o(e[E])||Y(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),Y(e[E])&&!Y(t[E])&&(t[E]=[]),d(t[E],e[E],n)):e[E]!==b&&(t[E]=e[E])}function m(t,e){return null==e?C(t):C(t).filter(e)}function v(t,n,i,r){return e(n)?n.call(t,i,r):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",i=n&&n.baseVal!==b;return e===b?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function w(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?C.parseJSON(t):t):t}catch(e){return t}}function x(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)x(t.childNodes[n],e)}var b,E,C,j,S,$,T=[],k=T.slice,P=T.filter,_=window.document,O={},N={},A={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},L=/^\s*<(\w+|!)[^>]*>/,M=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,q=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Z=/^(?:body|html)$/i,D=/([A-Z])/g,R=["val","css","html","text","data","width","height","offset"],z=["after","prepend","before","append"],H=_.createElement("table"),F=_.createElement("tr"),I={tr:_.createElement("tbody"),tbody:H,thead:H,tfoot:H,td:F,th:F,"*":_.createElement("div")},U=/complete|loaded|interactive/,V=/^[\w-]*$/,B={},J=B.toString,X={},W=_.createElement("div"),Q={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return X.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=W).appendChild(t),i=~X.qsa(r,e).indexOf(t),o&&W.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},$=function(t){return P.call(t,function(e,n){return t.indexOf(e)==n})},X.fragment=function(t,e,n){var i,r,a;return M.test(t)&&(i=C(_.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(q,"<$1></$2>")),e===b&&(e=L.test(t)&&RegExp.$1),e in I||(e="*"),a=I[e],a.innerHTML=""+t,i=C.each(k.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=C(i),C.each(n,function(t,e){R.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},X.Z=function(t,e){return t=t||[],t.__proto__=C.fn,t.selector=e||"",t},X.isZ=function(t){return t instanceof X.Z},X.init=function(t,n){var i;if(!t)return X.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&L.test(t))i=X.fragment(t,RegExp.$1,n),t=null;else{if(n!==b)return C(n).find(t);i=X.qsa(_,t)}else{if(e(t))return C(_).ready(t);if(X.isZ(t))return t;if(Y(t))i=s(t);else if(r(t))i=[t],t=null;else if(L.test(t))i=X.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==b)return C(n).find(t);i=X.qsa(_,t)}}return X.Z(i,t)},C=function(t,e){return X.init(t,e)},C.extend=function(t){var e,n=k.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},X.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],a=r||o?e.slice(1):e,s=V.test(a);return i(t)&&s&&r?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:k.call(s&&!r?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},C.contains=_.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},C.type=t,C.isFunction=e,C.isWindow=n,C.isArray=Y,C.isPlainObject=o,C.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},C.inArray=function(t,e,n){return T.indexOf.call(e,t,n)},C.camelCase=S,C.trim=function(t){return null==t?"":String.prototype.trim.call(t)},C.uuid=0,C.support={},C.expr={},C.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return c(o)},C.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},C.grep=function(t,e){return P.call(t,e)},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){B["[object "+e+"]"]=e.toLowerCase()}),C.fn={forEach:T.forEach,reduce:T.reduce,push:T.push,sort:T.sort,indexOf:T.indexOf,concat:T.concat,map:function(t){return C(C.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return C(k.apply(this,arguments))},ready:function(t){return U.test(_.readyState)&&_.body?t(C):_.addEventListener("DOMContentLoaded",function(){t(C)},!1),this},get:function(t){return t===b?k.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return T.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):C(P.call(this,function(e){return X.matches(e,t)}))},add:function(t,e){return C($(this.concat(C(t,e))))},is:function(t){return this.length>0&&X.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==b)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?k.call(t):C(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return C(n)},has:function(t){return this.filter(function(){return r(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:C(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:C(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?C(t).filter(function(){var t=this;return T.some.call(n,function(e){return C.contains(e,t)})}):1==this.length?C(X.qsa(this[0],t)):this.map(function(){return X.qsa(this,t)}):C()},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=C(t));n&&!(r?r.indexOf(n)>=0:X.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return C(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=C.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m($(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return k.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return P.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=C(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){C(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t));for(var e;(e=t.children()).length;)t=e.first();C(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=C(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=C(this);(t===b?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;C(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(E in t)g(this,E,t[E]);else g(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:b},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){g(this,t)},this)})},prop:function(t,e){return t=Q[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(D,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?w(i):b},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=C(this),i=v(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i,r=this[0];if(!r)return;if(i=getComputedStyle(r,""),"string"==typeof e)return r.style[S(e)]||i.getPropertyValue(e);if(Y(e)){var o={};return C.each(e,function(t,e){o[e]=r.style[S(e)]||i.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(E in e)e[E]||0===e[E]?a+=u(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(u(E))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?T.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){j=[];var n=y(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){C(this).hasClass(t)||j.push(t)},this),j.length&&y(this,n+(n?" ":"")+j.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===b)return y(this,"");j=y(this),v(this,t,e,j).split(/\s+/g).forEach(function(t){j=j.replace(l(t)," ")}),y(this,j.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=C(this),r=v(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===b?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===b?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===b?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=Z.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(C(t).css("margin-top"))||0,n.left-=parseFloat(C(t).css("margin-left"))||0,i.top+=parseFloat(C(e[0]).css("border-top-width"))||0,i.left+=parseFloat(C(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||_.body;t&&!Z.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});C.fn[t]=function(r){var o,a=this[0];return r===b?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=C(this),a.css(t,v(this,r,e,a[t]()))})}}),z.forEach(function(e,n){var i=n%2;C.fn[e]=function(){var e,r,o=C.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:X.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=C.contains(_.documentElement,r);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return C(t).remove();r.insertBefore(t,e),s&&x(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},C.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return C(t)[e](this),this}}),X.Z.prototype=C.fn,X.uniq=$,X.deserializeValue=w,C.zepto=X,C}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(v[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in w||!!e}function a(t){return x[t]||y&&w[t]||t}function s(n,r,s,c,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=l,r.e in x&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var d=h||s;r.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,p))})}function c(t,i,r,s,c){var u=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete v[u][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,c))})})}function u(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(j,function(t,i){var r=n[t];e[t]=function(){return this[i]=b,r&&r.apply(n,arguments)},e[i]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function l(t){var e,n={originalEvent:t};for(e in t)C.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,w={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:c},t.proxy=function(n,i){var r=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(i,r?r.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var b=function(){return!0},E=function(){return!1},C=/^([A-Z]|returnValue$|layer[XY]$)/,j={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,u,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||d(r)||r===!1||(r=i,i=n,n=f),(d(i)||i===!1)&&(r=i,i=f),r===!1&&(r=E),h.each(function(f,h){o&&(a=function(t){return c(h,t.type,r),r.apply(this,arguments)}),n&&(u=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||r).apply(o,[i].concat(p.call(arguments,1)))):void 0}),s(h,e,r,i,n,u||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=E),r.each(function(){c(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){e.type in w&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l(m(e)?t.Event(e):e),r._args=i,r.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),u(n)}}(Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context,a="success";i.success.call(o,t,a,e),r&&r.resolveWith(o,[t,a,e]),n(i,o,"ajaxSuccess",[e,i,t]),c(a,e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),c(e,i,r)}function c(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==C?"html":t==E?"json":x.test(t)?"script":b.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function d(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(c.name,c.value):"array"==o||!i&&"object"==o?d(e,c,i,n):e.add(n,c)})}var m,v,g=0,y=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,b=/^(?:text|application)\/xml/i,E="application/json",C="text/html",j=/^\s*$/,S=y.createElement("a");S.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++g,l=y.createElement("script"),f=window[u],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,c){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?a(i[0],p,e,n):s(null,c||"error",p,e,n),window[u]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(p,e)===!1?(h("abort"),p):(window[u]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,r=t.extend({},e||{}),c=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===r[m]&&(r[m]=t.ajaxSettings[m]);i(r),r.crossDomain||(n=y.createElement("a"),n.href=r.url,n.href=n.href,r.crossDomain=S.protocol+"//"+S.host!=n.protocol+"//"+n.host),r.url||(r.url=window.location.toString()),h(r);var p=r.dataType,d=/\?.+=\?/.test(r.url);if(d&&(p="jsonp"),r.cache!==!1&&(e&&e.cache===!0||"script"!=p&&"jsonp"!=p)||(r.url=f(r.url,"_="+Date.now())),"jsonp"==p)return d||(r.url=f(r.url,r.jsonp?r.jsonp+"=?":r.jsonp===!1?"":"callback=?")),t.ajaxJSONP(r,c);var g,w=r.accepts[p],x={},b=function(t,e){x[t.toLowerCase()]=[t,e]},E=/^([\w-]+:)\/\//.test(r.url)?RegExp.$1:window.location.protocol,C=r.xhr(),$=C.setRequestHeader;if(c&&c.promise(C),r.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",w||"*/*"),(w=r.mimeType||w)&&(w.indexOf(",")>-1&&(w=w.split(",",2)[0]),C.overrideMimeType&&C.overrideMimeType(w)),(r.contentType||r.contentType!==!1&&r.data&&"GET"!=r.type.toUpperCase())&&b("Content-Type",r.contentType||"application/x-www-form-urlencoded"),r.headers)for(v in r.headers)b(v,r.headers[v]);if(C.setRequestHeader=b,C.onreadystatechange=function(){if(4==C.readyState){C.onreadystatechange=u,clearTimeout(g);var e,n=!1;if(C.status>=200&&C.status<300||304==C.status||0==C.status&&"file:"==E){p=p||l(r.mimeType||C.getResponseHeader("content-type")),e=C.responseText;try{"script"==p?(0,eval)(e):"xml"==p?e=C.responseXML:"json"==p&&(e=j.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?s(n,"parsererror",C,r,c):a(e,C,r,c)}else s(C.statusText||null,C.status?"error":"abort",C,r,c)}},o(C,r)===!1)return C.abort(),s(null,"abort",C,r,c),C;if(r.xhrFields)for(v in r.xhrFields)C[v]=r.xhrFields[v];var T="async"in r?r.async:!0;C.open(r.type,r.url,T,r.username,r.password);for(v in x)$.apply(C,x[v]);return r.timeout>0&&(g=setTimeout(function(){C.onreadystatechange=u,C.abort(),s(null,"timeout",C,r,c)},r.timeout)),C.send(r.data?r.data:null),C},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=p(e,n,i),c=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(w,"")).find(r):e),c&&c.apply(o,arguments)},t.ajax(s),this};var $=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push($(e)+"="+$(n))},d(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(){"use strict";function t(t,e){var n=[],i=this.options;return i.onProgress&&t&&i.onProgress.call(this,t,e,this.completed.length),this.completed.length+this.errors.length===this.queue.length&&(n.push(this.completed),this.errors.length&&n.push(this.errors),i.onComplete.apply(this,n)),this}var e="addEventListener"in new Image,n=function(t,e){this.options={pipeline:!1,auto:!0,prefetch:!1,onComplete:function(){}},e&&"object"==typeof e&&this.setOptions(e),this.addQueue(t),this.queue.length&&this.options.auto&&this.processQueue()};n.prototype.setOptions=function(t){var e,n=this.options;for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return this},n.prototype.addQueue=function(t){return this.queue=t.slice(),this},n.prototype.reset=function(){return this.completed=[],this.errors=[],this},n.prototype.addEvents=function(n,i,r){var o=this,a=this.options,s=function(){e?(this.removeEventListener("error",c),this.removeEventListener("abort",c),this.removeEventListener("load",u)):this.onerror=this.onabort=this.onload=null},c=function(){s.call(this),o.errors.push(i),a.onError&&a.onError.call(o,i),t.call(o,i),a.pipeline&&o.loadNext(r)},u=function(){s.call(this),o.completed.push(i),t.call(o,i,this),a.pipeline&&o.loadNext(r)};e?(n.addEventListener("error",c,!1),n.addEventListener("abort",c,!1),n.addEventListener("load",u,!1)):(n.onerror=n.onabort=c,n.onload=u)},n.prototype.load=function(t,e){var n=new Image;return this.addEvents(n,t,e),n.src=t,this},n.prototype.loadNext=function(t){return t++,this.queue[t]&&this.load(this.queue[t],t),this},n.prototype.processQueue=function(){var t=0,e=this.queue,n=e.length;if(this.reset(),this.options.pipeline)this.load(e[0],0);else for(;n>t;++t)this.load(e[t],t);return this},"function"==typeof define&&define.amd?define(function(){return n}):this.preLoader=n}.call(this),function(t,e){var n=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",r=function(){var t=n.clientWidth;window.innerHeight;t&&(n.style.fontSize=50*(t/375)+"px")};t.addEventListener&&(e.addEventListener(i,r,!1),r())}(document,window),Api={isFollow:function(t){$.ajax({url:"/api/status",type:"POST",dataType:"json",success:function(e){return t(e)}})},isLogin:function(t){$.ajax({url:"/api/islogin",type:"POST",dataType:"json",success:function(e){return t(e)}})},ifShared:function(t){$.ajax({url:"/api/share",type:"POST",dataType:"json",success:function(e){return t(e)}})},coupon:function(t){$.ajax({url:"/api/card",type:"POST",dataType:"json",success:function(e){return t(e)}})}},function(){var t=(navigator.userAgent.toLowerCase(),{goHomepage:function(){gotoPin(0)},msgBox:function(t,e){e?$("body").append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+t+"</div></div>"):$("body").append('<div class="ajaxpop msgbox"><div class="loading"><div class="icon-loading"></div>'+t+"</div></div>")},errorMsg:{add:function(t,e){t.find(".error").length?t.find(".error").html(e):t.append('<div class="error">'+e+"</div>")},remove:function(t){t.find(".error").length&&t.find(".error").remove()}}});this.Common=t}.call(this),function(){"use strict";var t=function(){this.curPage=0,this.selectedColor=""};t.prototype={init:function(){var t=this;$(".loading-wrap").addClass("show");var e="/app",n=[e+"/images/coach-avatar.png",e+"/images/coupon.png",e+"/images/input-wx-bg.png",e+"/images/link-terms.png",e+"/images/loading-logo.png",e+"/images/qrcode-follow-text.png",e+"/images/qrcode-follow.png",e+"/images/qrcode-share-text.png",e+"/images/qrcode-share.png",e+"/images/share-guide.png"];new preLoader(n,{onProgress:function(){},onComplete:function(){$(".preloading").remove(1e3),_hmt.push(["_trackEvent","page","load","页面PV - 1"]),Common.goHomepage(),$("#input-tocoach").keypress(function(e){if("13"==e.keyCode){_hmt.push(["_trackEvent","button","click","Submit"]);var n=$(this).val();n.length&&(t.outputMsg(1,headimgurl,n),t.compareCommand(n),$(this).val(""),$(".pin-inner").scrollTop($(".conversation-list").height()))}}),$("#input-tocoach").on("focusout",function(){var e=$(this).val();e.length&&(_hmt.push(["_trackEvent","button","click","Submit"]),t.outputMsg(1,headimgurl,e),t.compareCommand(e),$(this).val(""),$(".pin-inner").scrollTop($(".conversation-list").height()))}),$(".wrapper").on("click",".btn-share",function(){_hmt.push(["_trackEvent","button","click","Share"]),$(".popup").addClass("hide"),$(".share-pop").removeClass("hide"),t.showShareQrcode()}),$(".wrapper").on("click",".item-coupon",function(){_hmt.push(["_trackEvent","button","click","Redeem"]),t.addCouppon(1)}),t.closePop(),$(".qrcode-share-pop .link-terms").on("click",function(){_hmt.push(["_trackEvent","button","click","Terms1"]),$(".details-pop").removeClass("hide")})}})},compareCommand:function(t){for(var e=this,n=["520","1314","5201314"],i=0;i<n.length;i++){if(t==n[i])return e.outputMsg(2,"/app/images/coach-avatar.png","么么哒~COACH收到你的真情告白啦，马上为你送上专属的520优惠券，爱你哟！"),e.outputMsg(3,"/app/images/coach-avatar.png","么么哒~COACH收到你的真情告白啦，马上为你送上专属的520优惠券，爱你哟！"),void e.outputMsg(2,"/app/images/coach-avatar.png",'点击领取卡券，呼朋唤友来<span class="btn-share">告白</span>,即可参加Coach 520抢现金红包活动哦！');i==n.length-1&&e.outputMsg(2,"/app/images/coach-avatar.png","爱的信号有误，COACH无法回应你的爱意哦！")}},outputMsg:function(t,e,n){var i="";1==t?i='<li class="item item-right animate fade"><div class="avatar"><img src="'+e+'" alt=""/></div><div class="words">'+n+"</div></li>":2==t?i='<li class="item item-left animate fade"><div class="avatar"><img src="'+e+'" alt=""/></div><div class="words">'+n+"</div></li>":3==t&&(i='<li class="item item-left item-coupon animate fade"><img src="/app/images/coupon.png" alt=""/></li>'),$(".conversation-list").append(i)},showShareQrcode:function(){var t=this;wx.ready(function(){wx.onMenuShareTimeline({title:"520，告白Coach即可抢现金红包",link:window.location.href,imgUrl:window.location.origin+"/app/images/wx-share.jpg",success:function(){_hmt.push(["_trackEvent","button","click","Share to Moments"]),t.shareApi()},cancel:function(){}}),wx.onMenuShareAppMessage({title:"520，告白Coach即可抢现金红包",desc:"520没有被发红包？没关系，快来Coach微信告白，现金红包抢抢抢！",link:window.location.href,imgUrl:window.location.origin+"/app/images/wx-share.jpg",type:"",dataUrl:"",success:function(){_hmt.push(["_trackEvent","button","click","Share to friend"]),t.shareApi()},cancel:function(){}})})},shareApi:function(){Api.ifShared(function(t){1==t.status?(_hmt.push(["_trackEvent","page","load","页面PV - 6"]),$(".popup").addClass("hide"),$(".qrcode-share-pop").removeClass("hide")):2==t.status?(_hmt.push(["_trackEvent","page","load","页面PV - 10"]),$(".popup").addClass("hide"),$(".redpacket-pop").removeClass("hide"),$(".got-redpacket").addClass("hide"),$(".no-redpacket").removeClass("hide")):4==t.status&&(_hmt.push(["_trackEvent","page","load","页面PV - 11"]),$(".popup").addClass("hide"),$(".redpacket-pop").removeClass("hide"),$(".no-redpacket").addClass("hide"),
$(".got-redpacket").removeClass("hide"))})},closePop:function(){$(".btn-close").on("click",function(){$(this).parent().hasClass("inner")?$(this).parent().parent().addClass("hide"):$(this).parent().addClass("hide")})},addCouppon:function(t){Api.coupon(function(e){if(e.status){var n=e.msg;wx.addCard({cardList:[{cardId:n[t-1].cardId,cardExt:'{"timestamp":"'+n[t-1].cardExt.timestamp+'","signature":"'+n[t-1].cardExt.signature+'"}'}],success:function(t){t.cardList},fail:function(t){},complete:function(t){},cancel:function(t){},trigger:function(t){}})}})}},"function"==typeof define&&define.amd?define(function(){return t}):this.controller=t}.call(this),$(document).ready(function(t){var e=new controller;e.init()}),$(document).ready(function(){wx.ready(function(){wx.onMenuShareTimeline({title:"520，告白Coach即可抢现金红包",link:window.location.href,imgUrl:window.location.origin+"/app/images/wx-share.jpg",success:function(){_hmt.push(["_trackEvent","button","click","Share to Moments"])},cancel:function(){}}),wx.onMenuShareAppMessage({title:"520，告白Coach即可抢现金红包",desc:"520没有被发红包？没关系，快来Coach微信告白，现金红包抢抢抢！",link:window.location.href,imgUrl:window.location.origin+"/app/images/wx-share.jpg",type:"",dataUrl:"",success:function(){_hmt.push(["_trackEvent","button","click","Share to friend"])},cancel:function(){}})})});