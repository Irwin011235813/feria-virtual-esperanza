(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function dI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var h_={exports:{}},lu={},d_={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),fI=Symbol.for("react.portal"),pI=Symbol.for("react.fragment"),mI=Symbol.for("react.strict_mode"),gI=Symbol.for("react.profiler"),yI=Symbol.for("react.provider"),_I=Symbol.for("react.context"),vI=Symbol.for("react.forward_ref"),wI=Symbol.for("react.suspense"),EI=Symbol.for("react.memo"),TI=Symbol.for("react.lazy"),xm=Symbol.iterator;function II(t){return t===null||typeof t!="object"?null:(t=xm&&t[xm]||t["@@iterator"],typeof t=="function"?t:null)}var f_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p_=Object.assign,m_={};function ts(t,e,n){this.props=t,this.context=e,this.refs=m_,this.updater=n||f_}ts.prototype.isReactComponent={};ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function g_(){}g_.prototype=ts.prototype;function Ad(t,e,n){this.props=t,this.context=e,this.refs=m_,this.updater=n||f_}var kd=Ad.prototype=new g_;kd.constructor=Ad;p_(kd,ts.prototype);kd.isPureReactComponent=!0;var Pm=Array.isArray,y_=Object.prototype.hasOwnProperty,xd={current:null},__={key:!0,ref:!0,__self:!0,__source:!0};function v_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)y_.call(e,r)&&!__.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Bo,type:t,key:s,ref:o,props:i,_owner:xd.current}}function SI(t,e){return{$$typeof:Bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bo}function RI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nm=/\/+/g;function gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?RI(""+t.key):e.toString(36)}function Xa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bo:case fI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+gc(o,0):r,Pm(i)?(n="",t!=null&&(n=t.replace(Nm,"$&/")+"/"),Xa(i,e,n,"",function(c){return c})):i!=null&&(Pd(i)&&(i=SI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+gc(s,l);o+=Xa(s,e,n,u,i)}else if(u=II(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+gc(s,l++),o+=Xa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(t,e,n){if(t==null)return t;var r=[],i=0;return Xa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function CI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Ja={transition:null},AI={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ja,ReactCurrentOwner:xd};function w_(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!Pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=ts;Z.Fragment=pI;Z.Profiler=gI;Z.PureComponent=Ad;Z.StrictMode=mI;Z.Suspense=wI;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AI;Z.act=w_;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=p_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)y_.call(e,u)&&!__.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Bo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:_I,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yI,_context:t},t.Consumer=t};Z.createElement=v_;Z.createFactory=function(t){var e=v_.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:vI,render:t}};Z.isValidElement=Pd;Z.lazy=function(t){return{$$typeof:TI,_payload:{_status:-1,_result:t},_init:CI}};Z.memo=function(t,e){return{$$typeof:EI,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ja.transition;Ja.transition={};try{t()}finally{Ja.transition=e}};Z.unstable_act=w_;Z.useCallback=function(t,e){return ht.current.useCallback(t,e)};Z.useContext=function(t){return ht.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ht.current.useEffect(t,e)};Z.useId=function(){return ht.current.useId()};Z.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ht.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};Z.useRef=function(t){return ht.current.useRef(t)};Z.useState=function(t){return ht.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ht.current.useTransition()};Z.version="18.3.1";d_.exports=Z;var b=d_.exports;const kI=dI(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xI=b,PI=Symbol.for("react.element"),NI=Symbol.for("react.fragment"),bI=Object.prototype.hasOwnProperty,DI=xI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OI={key:!0,ref:!0,__self:!0,__source:!0};function E_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bI.call(e,r)&&!OI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:PI,type:t,key:s,ref:o,props:i,_owner:DI.current}}lu.Fragment=NI;lu.jsx=E_;lu.jsxs=E_;h_.exports=lu;var E=h_.exports,ih={},T_={exports:{}},Ct={},I_={exports:{}},S_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var J=$.length;$.push(Q);e:for(;0<J;){var _e=J-1>>>1,le=$[_e];if(0<i(le,Q))$[_e]=Q,$[J]=le,J=_e;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],J=$.pop();if(J!==Q){$[0]=J;e:for(var _e=0,le=$.length,ke=le>>>1;_e<ke;){var fn=2*(_e+1)-1,pn=$[fn],mn=fn+1,gn=$[mn];if(0>i(pn,J))mn<le&&0>i(gn,pn)?($[_e]=gn,$[mn]=J,_e=mn):($[_e]=pn,$[fn]=J,_e=fn);else if(mn<le&&0>i(gn,J))$[_e]=gn,$[mn]=J,_e=mn;else break e}}return Q}function i($,Q){var J=$.sortIndex-Q.sortIndex;return J!==0?J:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,I=!1,A=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function x($){if(k=!1,w($),!A)if(n(u)!==null)A=!0,ms(L);else{var Q=n(c);Q!==null&&dn(x,Q.startTime-$)}}function L($,Q){A=!1,k&&(k=!1,g(v),v=-1),I=!0;var J=m;try{for(w(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||$&&!P());){var _e=p.callback;if(typeof _e=="function"){p.callback=null,m=p.priorityLevel;var le=_e(p.expirationTime<=Q);Q=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),w(Q)}else r(u);p=n(u)}if(p!==null)var ke=!0;else{var fn=n(c);fn!==null&&dn(x,fn.startTime-Q),ke=!1}return ke}finally{p=null,m=J,I=!1}}var M=!1,S=null,v=-1,T=5,R=-1;function P(){return!(t.unstable_now()-R<T)}function O(){if(S!==null){var $=t.unstable_now();R=$;var Q=!0;try{Q=S(!0,$)}finally{Q?C():(M=!1,S=null)}}else M=!1}var C;if(typeof y=="function")C=function(){y(O)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,Ar=xt.port2;xt.port1.onmessage=O,C=function(){Ar.postMessage(null)}}else C=function(){N(O,0)};function ms($){S=$,M||(M=!0,C())}function dn($,Q){v=N(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){A||I||(A=!0,ms(L))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return $()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=m;m=$;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function($,Q,J){var _e=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?_e+J:_e):J=_e,$){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,$={id:d++,callback:Q,priorityLevel:$,startTime:J,expirationTime:le,sortIndex:-1},J>_e?($.sortIndex=J,e(c,$),n(u)===null&&$===n(c)&&(k?(g(v),v=-1):k=!0,dn(x,J-_e))):($.sortIndex=le,e(u,$),A||I||(A=!0,ms(L))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var Q=m;return function(){var J=m;m=Q;try{return $.apply(this,arguments)}finally{m=J}}}})(S_);I_.exports=S_;var LI=I_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VI=b,Rt=LI;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R_=new Set,fo={};function ti(t,e){Ui(t,e),Ui(t+"Capture",e)}function Ui(t,e){for(fo[t]=e,t=0;t<e.length;t++)R_.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sh=Object.prototype.hasOwnProperty,MI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bm={},Dm={};function FI(t){return sh.call(Dm,t)?!0:sh.call(bm,t)?!1:MI.test(t)?Dm[t]=!0:(bm[t]=!0,!1)}function UI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jI(t,e,n,r){if(e===null||typeof e>"u"||UI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nd=/[\-:]([a-z])/g;function bd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nd,bd);qe[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nd,bd);qe[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nd,bd);qe[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dd(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jI(e,n,i,r)&&(n=null),r||i===null?FI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=VI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),mi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),oh=Symbol.for("react.profiler"),C_=Symbol.for("react.provider"),A_=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),ah=Symbol.for("react.suspense"),lh=Symbol.for("react.suspense_list"),Vd=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),k_=Symbol.for("react.offscreen"),Om=Symbol.iterator;function xs(t){return t===null||typeof t!="object"?null:(t=Om&&t[Om]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,yc;function js(t){if(yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+t}var _c=!1;function vc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?js(t):""}function BI(t){switch(t.tag){case 5:return js(t.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function uh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gi:return"Fragment";case mi:return"Portal";case oh:return"Profiler";case Od:return"StrictMode";case ah:return"Suspense";case lh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A_:return(t.displayName||"Context")+".Consumer";case C_:return(t._context.displayName||"Context")+".Provider";case Ld:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vd:return e=t.displayName||null,e!==null?e:uh(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return uh(t(e))}catch{}}return null}function $I(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uh(e);case 8:return e===Od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zI(t){var e=x_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ka(t){t._valueTracker||(t._valueTracker=zI(t))}function P_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=x_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ch(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N_(t,e){e=e.checked,e!=null&&Dd(t,"checked",e,!1)}function hh(t,e){N_(t,e);var n=mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dh(t,e.type,n):e.hasOwnProperty("defaultValue")&&dh(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dh(t,e,n){(e!=="number"||wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bs=Array.isArray;function ki(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Bs(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function b_(t,e){var n=mr(e.value),r=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function D_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ph(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?D_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,O_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},WI=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){WI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function L_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function V_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=L_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var HI=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mh(t,e){if(e){if(HI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function gh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yh=null;function Md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _h=null,xi=null,Pi=null;function Um(t){if(t=Wo(t)){if(typeof _h!="function")throw Error(j(280));var e=t.stateNode;e&&(e=fu(e),_h(t.stateNode,t.type,e))}}function M_(t){xi?Pi?Pi.push(t):Pi=[t]:xi=t}function F_(){if(xi){var t=xi,e=Pi;if(Pi=xi=null,Um(t),e)for(t=0;t<e.length;t++)Um(e[t])}}function U_(t,e){return t(e)}function j_(){}var wc=!1;function B_(t,e,n){if(wc)return t(e,n);wc=!0;try{return U_(t,e,n)}finally{wc=!1,(xi!==null||Pi!==null)&&(j_(),F_())}}function mo(t,e){var n=t.stateNode;if(n===null)return null;var r=fu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var vh=!1;if(Pn)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){vh=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{vh=!1}function qI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Js=!1,El=null,Tl=!1,wh=null,KI={onError:function(t){Js=!0,El=t}};function GI(t,e,n,r,i,s,o,l,u){Js=!1,El=null,qI.apply(KI,arguments)}function QI(t,e,n,r,i,s,o,l,u){if(GI.apply(this,arguments),Js){if(Js){var c=El;Js=!1,El=null}else throw Error(j(198));Tl||(Tl=!0,wh=c)}}function ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jm(t){if(ni(t)!==t)throw Error(j(188))}function YI(t){var e=t.alternate;if(!e){if(e=ni(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jm(i),t;if(s===r)return jm(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function z_(t){return t=YI(t),t!==null?W_(t):null}function W_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W_(t);if(e!==null)return e;t=t.sibling}return null}var H_=Rt.unstable_scheduleCallback,Bm=Rt.unstable_cancelCallback,XI=Rt.unstable_shouldYield,JI=Rt.unstable_requestPaint,Pe=Rt.unstable_now,ZI=Rt.unstable_getCurrentPriorityLevel,Fd=Rt.unstable_ImmediatePriority,q_=Rt.unstable_UserBlockingPriority,Il=Rt.unstable_NormalPriority,e1=Rt.unstable_LowPriority,K_=Rt.unstable_IdlePriority,uu=null,Zt=null;function t1(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:i1,n1=Math.log,r1=Math.LN2;function i1(t){return t>>>=0,t===0?32:31-(n1(t)/r1|0)|0}var Pa=64,Na=4194304;function $s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=$s(l):(s&=o,s!==0&&(r=$s(s)))}else o=n&~i,o!==0?r=$s(o):s!==0&&(r=$s(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),i=1<<n,r|=t[n],e&=~i;return r}function s1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=s1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Eh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function G_(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function Ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function a1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Q_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Y_,jd,X_,J_,Z_,Th=!1,ba=[],ir=null,sr=null,or=null,go=new Map,yo=new Map,Gn=[],l1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $m(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(e.pointerId)}}function Ns(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Wo(e),e!==null&&jd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function u1(t,e,n,r,i){switch(e){case"focusin":return ir=Ns(ir,t,e,n,r,i),!0;case"dragenter":return sr=Ns(sr,t,e,n,r,i),!0;case"mouseover":return or=Ns(or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return go.set(s,Ns(go.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yo.set(s,Ns(yo.get(s)||null,t,e,n,r,i)),!0}return!1}function ev(t){var e=Lr(t.target);if(e!==null){var n=ni(e);if(n!==null){if(e=n.tag,e===13){if(e=$_(n),e!==null){t.blockedOn=e,Z_(t.priority,function(){X_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yh=r,n.target.dispatchEvent(r),yh=null}else return e=Wo(n),e!==null&&jd(e),t.blockedOn=n,!1;e.shift()}return!0}function zm(t,e,n){Za(t)&&n.delete(e)}function c1(){Th=!1,ir!==null&&Za(ir)&&(ir=null),sr!==null&&Za(sr)&&(sr=null),or!==null&&Za(or)&&(or=null),go.forEach(zm),yo.forEach(zm)}function bs(t,e){t.blockedOn===e&&(t.blockedOn=null,Th||(Th=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,c1)))}function _o(t){function e(i){return bs(i,t)}if(0<ba.length){bs(ba[0],t);for(var n=1;n<ba.length;n++){var r=ba[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ir!==null&&bs(ir,t),sr!==null&&bs(sr,t),or!==null&&bs(or,t),go.forEach(e),yo.forEach(e),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)ev(n),n.blockedOn===null&&Gn.shift()}var Ni=Un.ReactCurrentBatchConfig,Rl=!0;function h1(t,e,n,r){var i=oe,s=Ni.transition;Ni.transition=null;try{oe=1,Bd(t,e,n,r)}finally{oe=i,Ni.transition=s}}function d1(t,e,n,r){var i=oe,s=Ni.transition;Ni.transition=null;try{oe=4,Bd(t,e,n,r)}finally{oe=i,Ni.transition=s}}function Bd(t,e,n,r){if(Rl){var i=Ih(t,e,n,r);if(i===null)Nc(t,e,r,Cl,n),$m(t,r);else if(u1(i,t,e,n,r))r.stopPropagation();else if($m(t,r),e&4&&-1<l1.indexOf(t)){for(;i!==null;){var s=Wo(i);if(s!==null&&Y_(s),s=Ih(t,e,n,r),s===null&&Nc(t,e,r,Cl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Nc(t,e,r,null,n)}}var Cl=null;function Ih(t,e,n,r){if(Cl=null,t=Md(r),t=Lr(t),t!==null)if(e=ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cl=t,null}function tv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZI()){case Fd:return 1;case q_:return 4;case Il:case e1:return 16;case K_:return 536870912;default:return 16}default:return 16}}var tr=null,$d=null,el=null;function nv(){if(el)return el;var t,e=$d,n=e.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return el=i.slice(t,1<r?1-r:void 0)}function tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function Wm(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:Wm,this.isPropagationStopped=Wm,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zd=At(ns),zo=Ee({},ns,{view:0,detail:0}),f1=At(zo),Tc,Ic,Ds,cu=Ee({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(Tc=t.screenX-Ds.screenX,Ic=t.screenY-Ds.screenY):Ic=Tc=0,Ds=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),Hm=At(cu),p1=Ee({},cu,{dataTransfer:0}),m1=At(p1),g1=Ee({},zo,{relatedTarget:0}),Sc=At(g1),y1=Ee({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),_1=At(y1),v1=Ee({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),w1=At(v1),E1=Ee({},ns,{data:0}),qm=At(E1),T1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S1[t])?!!e[t]:!1}function Wd(){return R1}var C1=Ee({},zo,{key:function(t){if(t.key){var e=T1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),A1=At(C1),k1=Ee({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=At(k1),x1=Ee({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),P1=At(x1),N1=Ee({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),b1=At(N1),D1=Ee({},cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),O1=At(D1),L1=[9,13,27,32],Hd=Pn&&"CompositionEvent"in window,Zs=null;Pn&&"documentMode"in document&&(Zs=document.documentMode);var V1=Pn&&"TextEvent"in window&&!Zs,rv=Pn&&(!Hd||Zs&&8<Zs&&11>=Zs),Gm=" ",Qm=!1;function iv(t,e){switch(t){case"keyup":return L1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yi=!1;function M1(t,e){switch(t){case"compositionend":return sv(e);case"keypress":return e.which!==32?null:(Qm=!0,Gm);case"textInput":return t=e.data,t===Gm&&Qm?null:t;default:return null}}function F1(t,e){if(yi)return t==="compositionend"||!Hd&&iv(t,e)?(t=nv(),el=$d=tr=null,yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rv&&e.locale!=="ko"?null:e.data;default:return null}}var U1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!U1[t.type]:e==="textarea"}function ov(t,e,n,r){M_(r),e=Al(e,"onChange"),0<e.length&&(n=new zd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var eo=null,vo=null;function j1(t){yv(t,0)}function hu(t){var e=wi(t);if(P_(e))return t}function B1(t,e){if(t==="change")return e}var av=!1;if(Pn){var Rc;if(Pn){var Cc="oninput"in document;if(!Cc){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),Cc=typeof Xm.oninput=="function"}Rc=Cc}else Rc=!1;av=Rc&&(!document.documentMode||9<document.documentMode)}function Jm(){eo&&(eo.detachEvent("onpropertychange",lv),vo=eo=null)}function lv(t){if(t.propertyName==="value"&&hu(vo)){var e=[];ov(e,vo,t,Md(t)),B_(j1,e)}}function $1(t,e,n){t==="focusin"?(Jm(),eo=e,vo=n,eo.attachEvent("onpropertychange",lv)):t==="focusout"&&Jm()}function z1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(vo)}function W1(t,e){if(t==="click")return hu(e)}function H1(t,e){if(t==="input"||t==="change")return hu(e)}function q1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:q1;function wo(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sh.call(e,i)||!Wt(t[i],e[i]))return!1}return!0}function Zm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eg(t,e){var n=Zm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zm(n)}}function uv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cv(){for(var t=window,e=wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wl(t.document)}return e}function qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function K1(t){var e=cv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&uv(n.ownerDocument.documentElement,n)){if(r!==null&&qd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=eg(n,s);var o=eg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var G1=Pn&&"documentMode"in document&&11>=document.documentMode,_i=null,Sh=null,to=null,Rh=!1;function tg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rh||_i==null||_i!==wl(r)||(r=_i,"selectionStart"in r&&qd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&wo(to,r)||(to=r,r=Al(Sh,"onSelect"),0<r.length&&(e=new zd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_i)))}function Oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vi={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},Ac={},hv={};Pn&&(hv=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function du(t){if(Ac[t])return Ac[t];if(!vi[t])return t;var e=vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hv)return Ac[t]=e[n];return t}var dv=du("animationend"),fv=du("animationiteration"),pv=du("animationstart"),mv=du("transitionend"),gv=new Map,ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){gv.set(t,e),ti(e,[t])}for(var kc=0;kc<ng.length;kc++){var xc=ng[kc],Q1=xc.toLowerCase(),Y1=xc[0].toUpperCase()+xc.slice(1);Tr(Q1,"on"+Y1)}Tr(dv,"onAnimationEnd");Tr(fv,"onAnimationIteration");Tr(pv,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(mv,"onTransitionEnd");Ui("onMouseEnter",["mouseout","mouseover"]);Ui("onMouseLeave",["mouseout","mouseover"]);Ui("onPointerEnter",["pointerout","pointerover"]);Ui("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function rg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,QI(r,e,void 0,t),t.currentTarget=null}function yv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;rg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;rg(i,l,c),s=u}}}if(Tl)throw t=wh,Tl=!1,wh=null,t}function de(t,e){var n=e[Ph];n===void 0&&(n=e[Ph]=new Set);var r=t+"__bubble";n.has(r)||(_v(e,t,2,!1),n.add(r))}function Pc(t,e,n){var r=0;e&&(r|=4),_v(n,t,r,e)}var La="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[La]){t[La]=!0,R_.forEach(function(n){n!=="selectionchange"&&(X1.has(n)||Pc(n,!1,t),Pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[La]||(e[La]=!0,Pc("selectionchange",!1,e))}}function _v(t,e,n,r){switch(tv(e)){case 1:var i=h1;break;case 4:i=d1;break;default:i=Bd}n=i.bind(null,e,n,t),i=void 0,!vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Nc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Lr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}B_(function(){var c=s,d=Md(n),p=[];e:{var m=gv.get(t);if(m!==void 0){var I=zd,A=t;switch(t){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":I=A1;break;case"focusin":A="focus",I=Sc;break;case"focusout":A="blur",I=Sc;break;case"beforeblur":case"afterblur":I=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=m1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=P1;break;case dv:case fv:case pv:I=_1;break;case mv:I=b1;break;case"scroll":I=f1;break;case"wheel":I=O1;break;case"copy":case"cut":case"paste":I=w1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Km}var k=(e&4)!==0,N=!k&&t==="scroll",g=k?m!==null?m+"Capture":null:m;k=[];for(var y=c,w;y!==null;){w=y;var x=w.stateNode;if(w.tag===5&&x!==null&&(w=x,g!==null&&(x=mo(y,g),x!=null&&k.push(To(y,x,w)))),N)break;y=y.return}0<k.length&&(m=new I(m,A,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==yh&&(A=n.relatedTarget||n.fromElement)&&(Lr(A)||A[Nn]))break e;if((I||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,I?(A=n.relatedTarget||n.toElement,I=c,A=A?Lr(A):null,A!==null&&(N=ni(A),A!==N||A.tag!==5&&A.tag!==6)&&(A=null)):(I=null,A=c),I!==A)){if(k=Hm,x="onMouseLeave",g="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(k=Km,x="onPointerLeave",g="onPointerEnter",y="pointer"),N=I==null?m:wi(I),w=A==null?m:wi(A),m=new k(x,y+"leave",I,n,d),m.target=N,m.relatedTarget=w,x=null,Lr(d)===c&&(k=new k(g,y+"enter",A,n,d),k.target=w,k.relatedTarget=N,x=k),N=x,I&&A)t:{for(k=I,g=A,y=0,w=k;w;w=hi(w))y++;for(w=0,x=g;x;x=hi(x))w++;for(;0<y-w;)k=hi(k),y--;for(;0<w-y;)g=hi(g),w--;for(;y--;){if(k===g||g!==null&&k===g.alternate)break t;k=hi(k),g=hi(g)}k=null}else k=null;I!==null&&ig(p,m,I,k,!1),A!==null&&N!==null&&ig(p,N,A,k,!0)}}e:{if(m=c?wi(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var L=B1;else if(Ym(m))if(av)L=H1;else{L=z1;var M=$1}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=W1);if(L&&(L=L(t,c))){ov(p,L,n,d);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&dh(m,"number",m.value)}switch(M=c?wi(c):window,t){case"focusin":(Ym(M)||M.contentEditable==="true")&&(_i=M,Sh=c,to=null);break;case"focusout":to=Sh=_i=null;break;case"mousedown":Rh=!0;break;case"contextmenu":case"mouseup":case"dragend":Rh=!1,tg(p,n,d);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":tg(p,n,d)}var S;if(Hd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else yi?iv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(rv&&n.locale!=="ko"&&(yi||v!=="onCompositionStart"?v==="onCompositionEnd"&&yi&&(S=nv()):(tr=d,$d="value"in tr?tr.value:tr.textContent,yi=!0)),M=Al(c,v),0<M.length&&(v=new qm(v,t,null,n,d),p.push({event:v,listeners:M}),S?v.data=S:(S=sv(n),S!==null&&(v.data=S)))),(S=V1?M1(t,n):F1(t,n))&&(c=Al(c,"onBeforeInput"),0<c.length&&(d=new qm("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=S))}yv(p,e)})}function To(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Al(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=mo(t,n),s!=null&&r.unshift(To(t,s,i)),s=mo(t,e),s!=null&&r.push(To(t,s,i))),t=t.return}return r}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ig(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=mo(n,s),u!=null&&o.unshift(To(n,u,l))):i||(u=mo(n,s),u!=null&&o.push(To(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var J1=/\r\n?/g,Z1=/\u0000|\uFFFD/g;function sg(t){return(typeof t=="string"?t:""+t).replace(J1,`
`).replace(Z1,"")}function Va(t,e,n){if(e=sg(e),sg(t)!==e&&n)throw Error(j(425))}function kl(){}var Ch=null,Ah=null;function kh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xh=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,og=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof og<"u"?function(t){return og.resolve(null).then(t).catch(nS)}:xh;function nS(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_o(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_o(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ag(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),Yt="__reactFiber$"+rs,Io="__reactProps$"+rs,Nn="__reactContainer$"+rs,Ph="__reactEvents$"+rs,rS="__reactListeners$"+rs,iS="__reactHandles$"+rs;function Lr(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ag(t);t!==null;){if(n=t[Yt])return n;t=ag(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[Yt]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function fu(t){return t[Io]||null}var Nh=[],Ei=-1;function Ir(t){return{current:t}}function pe(t){0>Ei||(t.current=Nh[Ei],Nh[Ei]=null,Ei--)}function ce(t,e){Ei++,Nh[Ei]=t.current,t.current=e}var gr={},rt=Ir(gr),gt=Ir(!1),zr=gr;function ji(t,e){var n=t.type.contextTypes;if(!n)return gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function xl(){pe(gt),pe(rt)}function lg(t,e,n){if(rt.current!==gr)throw Error(j(168));ce(rt,e),ce(gt,n)}function vv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,$I(t)||"Unknown",i));return Ee({},n,r)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,zr=rt.current,ce(rt,t),ce(gt,gt.current),!0}function ug(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=vv(t,e,zr),r.__reactInternalMemoizedMergedChildContext=t,pe(gt),pe(rt),ce(rt,t)):pe(gt),ce(gt,n)}var wn=null,pu=!1,Dc=!1;function wv(t){wn===null?wn=[t]:wn.push(t)}function sS(t){pu=!0,wv(t)}function Sr(){if(!Dc&&wn!==null){Dc=!0;var t=0,e=oe;try{var n=wn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wn=null,pu=!1}catch(i){throw wn!==null&&(wn=wn.slice(t+1)),H_(Fd,Sr),i}finally{oe=e,Dc=!1}}return null}var Ti=[],Ii=0,Nl=null,bl=0,Pt=[],Nt=0,Wr=null,En=1,Tn="";function br(t,e){Ti[Ii++]=bl,Ti[Ii++]=Nl,Nl=t,bl=e}function Ev(t,e,n){Pt[Nt++]=En,Pt[Nt++]=Tn,Pt[Nt++]=Wr,Wr=t;var r=En;t=Tn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-Bt(e)+i|n<<i|r,Tn=s+t}else En=1<<s|n<<i|r,Tn=t}function Kd(t){t.return!==null&&(br(t,1),Ev(t,1,0))}function Gd(t){for(;t===Nl;)Nl=Ti[--Ii],Ti[Ii]=null,bl=Ti[--Ii],Ti[Ii]=null;for(;t===Wr;)Wr=Pt[--Nt],Pt[Nt]=null,Tn=Pt[--Nt],Pt[Nt]=null,En=Pt[--Nt],Pt[Nt]=null}var St=null,Et=null,me=!1,jt=null;function Tv(t,e){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,Et=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:En,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,Et=null,!0):!1;default:return!1}}function bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dh(t){if(me){var e=Et;if(e){var n=e;if(!cg(t,e)){if(bh(t))throw Error(j(418));e=ar(n.nextSibling);var r=St;e&&cg(t,e)?Tv(r,n):(t.flags=t.flags&-4097|2,me=!1,St=t)}}else{if(bh(t))throw Error(j(418));t.flags=t.flags&-4097|2,me=!1,St=t}}}function hg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function Ma(t){if(t!==St)return!1;if(!me)return hg(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kh(t.type,t.memoizedProps)),e&&(e=Et)){if(bh(t))throw Iv(),Error(j(418));for(;e;)Tv(t,e),e=ar(e.nextSibling)}if(hg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=St?ar(t.stateNode.nextSibling):null;return!0}function Iv(){for(var t=Et;t;)t=ar(t.nextSibling)}function Bi(){Et=St=null,me=!1}function Qd(t){jt===null?jt=[t]:jt.push(t)}var oS=Un.ReactCurrentBatchConfig;function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Fa(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dg(t){var e=t._init;return e(t._payload)}function Sv(t){function e(g,y){if(t){var w=g.deletions;w===null?(g.deletions=[y],g.flags|=16):w.push(y)}}function n(g,y){if(!t)return null;for(;y!==null;)e(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function i(g,y){return g=hr(g,y),g.index=0,g.sibling=null,g}function s(g,y,w){return g.index=w,t?(w=g.alternate,w!==null?(w=w.index,w<y?(g.flags|=2,y):w):(g.flags|=2,y)):(g.flags|=1048576,y)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,y,w,x){return y===null||y.tag!==6?(y=jc(w,g.mode,x),y.return=g,y):(y=i(y,w),y.return=g,y)}function u(g,y,w,x){var L=w.type;return L===gi?d(g,y,w.props.children,x,w.key):y!==null&&(y.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===qn&&dg(L)===y.type)?(x=i(y,w.props),x.ref=Os(g,y,w),x.return=g,x):(x=ll(w.type,w.key,w.props,null,g.mode,x),x.ref=Os(g,y,w),x.return=g,x)}function c(g,y,w,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==w.containerInfo||y.stateNode.implementation!==w.implementation?(y=Bc(w,g.mode,x),y.return=g,y):(y=i(y,w.children||[]),y.return=g,y)}function d(g,y,w,x,L){return y===null||y.tag!==7?(y=jr(w,g.mode,x,L),y.return=g,y):(y=i(y,w),y.return=g,y)}function p(g,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return y=jc(""+y,g.mode,w),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Aa:return w=ll(y.type,y.key,y.props,null,g.mode,w),w.ref=Os(g,null,y),w.return=g,w;case mi:return y=Bc(y,g.mode,w),y.return=g,y;case qn:var x=y._init;return p(g,x(y._payload),w)}if(Bs(y)||xs(y))return y=jr(y,g.mode,w,null),y.return=g,y;Fa(g,y)}return null}function m(g,y,w,x){var L=y!==null?y.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return L!==null?null:l(g,y,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Aa:return w.key===L?u(g,y,w,x):null;case mi:return w.key===L?c(g,y,w,x):null;case qn:return L=w._init,m(g,y,L(w._payload),x)}if(Bs(w)||xs(w))return L!==null?null:d(g,y,w,x,null);Fa(g,w)}return null}function I(g,y,w,x,L){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(w)||null,l(y,g,""+x,L);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Aa:return g=g.get(x.key===null?w:x.key)||null,u(y,g,x,L);case mi:return g=g.get(x.key===null?w:x.key)||null,c(y,g,x,L);case qn:var M=x._init;return I(g,y,w,M(x._payload),L)}if(Bs(x)||xs(x))return g=g.get(w)||null,d(y,g,x,L,null);Fa(y,x)}return null}function A(g,y,w,x){for(var L=null,M=null,S=y,v=y=0,T=null;S!==null&&v<w.length;v++){S.index>v?(T=S,S=null):T=S.sibling;var R=m(g,S,w[v],x);if(R===null){S===null&&(S=T);break}t&&S&&R.alternate===null&&e(g,S),y=s(R,y,v),M===null?L=R:M.sibling=R,M=R,S=T}if(v===w.length)return n(g,S),me&&br(g,v),L;if(S===null){for(;v<w.length;v++)S=p(g,w[v],x),S!==null&&(y=s(S,y,v),M===null?L=S:M.sibling=S,M=S);return me&&br(g,v),L}for(S=r(g,S);v<w.length;v++)T=I(S,g,v,w[v],x),T!==null&&(t&&T.alternate!==null&&S.delete(T.key===null?v:T.key),y=s(T,y,v),M===null?L=T:M.sibling=T,M=T);return t&&S.forEach(function(P){return e(g,P)}),me&&br(g,v),L}function k(g,y,w,x){var L=xs(w);if(typeof L!="function")throw Error(j(150));if(w=L.call(w),w==null)throw Error(j(151));for(var M=L=null,S=y,v=y=0,T=null,R=w.next();S!==null&&!R.done;v++,R=w.next()){S.index>v?(T=S,S=null):T=S.sibling;var P=m(g,S,R.value,x);if(P===null){S===null&&(S=T);break}t&&S&&P.alternate===null&&e(g,S),y=s(P,y,v),M===null?L=P:M.sibling=P,M=P,S=T}if(R.done)return n(g,S),me&&br(g,v),L;if(S===null){for(;!R.done;v++,R=w.next())R=p(g,R.value,x),R!==null&&(y=s(R,y,v),M===null?L=R:M.sibling=R,M=R);return me&&br(g,v),L}for(S=r(g,S);!R.done;v++,R=w.next())R=I(S,g,v,R.value,x),R!==null&&(t&&R.alternate!==null&&S.delete(R.key===null?v:R.key),y=s(R,y,v),M===null?L=R:M.sibling=R,M=R);return t&&S.forEach(function(O){return e(g,O)}),me&&br(g,v),L}function N(g,y,w,x){if(typeof w=="object"&&w!==null&&w.type===gi&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Aa:e:{for(var L=w.key,M=y;M!==null;){if(M.key===L){if(L=w.type,L===gi){if(M.tag===7){n(g,M.sibling),y=i(M,w.props.children),y.return=g,g=y;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===qn&&dg(L)===M.type){n(g,M.sibling),y=i(M,w.props),y.ref=Os(g,M,w),y.return=g,g=y;break e}n(g,M);break}else e(g,M);M=M.sibling}w.type===gi?(y=jr(w.props.children,g.mode,x,w.key),y.return=g,g=y):(x=ll(w.type,w.key,w.props,null,g.mode,x),x.ref=Os(g,y,w),x.return=g,g=x)}return o(g);case mi:e:{for(M=w.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===w.containerInfo&&y.stateNode.implementation===w.implementation){n(g,y.sibling),y=i(y,w.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else e(g,y);y=y.sibling}y=Bc(w,g.mode,x),y.return=g,g=y}return o(g);case qn:return M=w._init,N(g,y,M(w._payload),x)}if(Bs(w))return A(g,y,w,x);if(xs(w))return k(g,y,w,x);Fa(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,y!==null&&y.tag===6?(n(g,y.sibling),y=i(y,w),y.return=g,g=y):(n(g,y),y=jc(w,g.mode,x),y.return=g,g=y),o(g)):n(g,y)}return N}var $i=Sv(!0),Rv=Sv(!1),Dl=Ir(null),Ol=null,Si=null,Yd=null;function Xd(){Yd=Si=Ol=null}function Jd(t){var e=Dl.current;pe(Dl),t._currentValue=e}function Oh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bi(t,e){Ol=t,Yd=Si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(Yd!==t)if(t={context:t,memoizedValue:e,next:null},Si===null){if(Ol===null)throw Error(j(308));Si=t,Ol.dependencies={lanes:0,firstContext:t}}else Si=Si.next=t;return e}var Vr=null;function Zd(t){Vr===null?Vr=[t]:Vr.push(t)}function Cv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zd(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kn=!1;function ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Av(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,Zd(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ud(t,n)}}function fg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ll(t,e,n,r){var i=t.updateQueue;Kn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,I=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,k=l;switch(m=e,I=n,k.tag){case 1:if(A=k.payload,typeof A=="function"){p=A.call(I,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=k.payload,m=typeof A=="function"?A.call(I,p,m):A,m==null)break e;p=Ee({},p,m);break e;case 2:Kn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else I={eventTime:I,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=I,u=p):d=d.next=I,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=p}}function pg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Ho={},en=Ir(Ho),So=Ir(Ho),Ro=Ir(Ho);function Mr(t){if(t===Ho)throw Error(j(174));return t}function tf(t,e){switch(ce(Ro,e),ce(So,t),ce(en,Ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ph(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ph(e,t)}pe(en),ce(en,e)}function zi(){pe(en),pe(So),pe(Ro)}function kv(t){Mr(Ro.current);var e=Mr(en.current),n=ph(e,t.type);e!==n&&(ce(So,t),ce(en,n))}function nf(t){So.current===t&&(pe(en),pe(So))}var ve=Ir(0);function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function rf(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var rl=Un.ReactCurrentDispatcher,Lc=Un.ReactCurrentBatchConfig,Hr=0,we=null,Oe=null,Fe=null,Ml=!1,no=!1,Co=0,aS=0;function Xe(){throw Error(j(321))}function sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function of(t,e,n,r,i,s){if(Hr=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rl.current=t===null||t.memoizedState===null?hS:dS,t=n(r,i),no){s=0;do{if(no=!1,Co=0,25<=s)throw Error(j(301));s+=1,Fe=Oe=null,e.updateQueue=null,rl.current=fS,t=n(r,i)}while(no)}if(rl.current=Fl,e=Oe!==null&&Oe.next!==null,Hr=0,Fe=Oe=we=null,Ml=!1,e)throw Error(j(300));return t}function af(){var t=Co!==0;return Co=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?we.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Lt(){if(Oe===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Fe===null?we.memoizedState:Fe.next;if(e!==null)Fe=e,Oe=t;else{if(t===null)throw Error(j(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?we.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Ao(t,e){return typeof e=="function"?e(t):e}function Vc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Hr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,we.lanes|=d,qr|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Wt(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wt(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function xv(){}function Pv(t,e){var n=we,r=Lt(),i=e(),s=!Wt(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,lf(Dv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,ko(9,bv.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(j(349));Hr&30||Nv(n,e,i)}return i}function Nv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bv(t,e,n,r){e.value=n,e.getSnapshot=r,Ov(e)&&Lv(t)}function Dv(t,e,n){return n(function(){Ov(e)&&Lv(t)})}function Ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function Lv(t){var e=bn(t,1);e!==null&&$t(e,t,1,-1)}function mg(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=cS.bind(null,we,t),[e.memoizedState,t]}function ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vv(){return Lt().memoizedState}function il(t,e,n,r){var i=Qt();we.flags|=t,i.memoizedState=ko(1|e,n,void 0,r===void 0?null:r)}function mu(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&sf(r,o.deps)){i.memoizedState=ko(e,n,s,r);return}}we.flags|=t,i.memoizedState=ko(1|e,n,s,r)}function gg(t,e){return il(8390656,8,t,e)}function lf(t,e){return mu(2048,8,t,e)}function Mv(t,e){return mu(4,2,t,e)}function Fv(t,e){return mu(4,4,t,e)}function Uv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jv(t,e,n){return n=n!=null?n.concat([t]):null,mu(4,4,Uv.bind(null,e,t),n)}function uf(){}function Bv(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $v(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zv(t,e,n){return Hr&21?(Wt(n,e)||(n=G_(),we.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function lS(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Lc.transition;Lc.transition={};try{t(!1),e()}finally{oe=n,Lc.transition=r}}function Wv(){return Lt().memoizedState}function uS(t,e,n){var r=cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hv(t))qv(e,n);else if(n=Cv(t,e,n,r),n!==null){var i=ut();$t(n,t,r,i),Kv(n,e,r)}}function cS(t,e,n){var r=cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hv(t))qv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Wt(l,o)){var u=e.interleaved;u===null?(i.next=i,Zd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Cv(t,e,i,r),n!==null&&(i=ut(),$t(n,t,r,i),Kv(n,e,r))}}function Hv(t){var e=t.alternate;return t===we||e!==null&&e===we}function qv(t,e){no=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ud(t,n)}}var Fl={readContext:Ot,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},hS={readContext:Ot,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:gg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,il(4194308,4,Uv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return il(4194308,4,t,e)},useInsertionEffect:function(t,e){return il(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=uS.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:mg,useDebugValue:uf,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=mg(!1),e=t[0];return t=lS.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=Qt();if(me){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ue===null)throw Error(j(349));Hr&30||Nv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,gg(Dv.bind(null,r,s,t),[t]),r.flags|=2048,ko(9,bv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qt(),e=Ue.identifierPrefix;if(me){var n=Tn,r=En;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dS={readContext:Ot,useCallback:Bv,useContext:Ot,useEffect:lf,useImperativeHandle:jv,useInsertionEffect:Mv,useLayoutEffect:Fv,useMemo:$v,useReducer:Vc,useRef:Vv,useState:function(){return Vc(Ao)},useDebugValue:uf,useDeferredValue:function(t){var e=Lt();return zv(e,Oe.memoizedState,t)},useTransition:function(){var t=Vc(Ao)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:Pv,useId:Wv,unstable_isNewReconciler:!1},fS={readContext:Ot,useCallback:Bv,useContext:Ot,useEffect:lf,useImperativeHandle:jv,useInsertionEffect:Mv,useLayoutEffect:Fv,useMemo:$v,useReducer:Mc,useRef:Vv,useState:function(){return Mc(Ao)},useDebugValue:uf,useDeferredValue:function(t){var e=Lt();return Oe===null?e.memoizedState=t:zv(e,Oe.memoizedState,t)},useTransition:function(){var t=Mc(Ao)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:Pv,useId:Wv,unstable_isNewReconciler:!1};function Ft(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gu={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=cr(t),s=Cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&($t(e,t,i,r),nl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=cr(t),s=Cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,i),e!==null&&($t(e,t,i,r),nl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=cr(t),i=Cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=lr(t,i,r),e!==null&&($t(e,t,r,n),nl(e,t,r))}};function yg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wo(n,r)||!wo(i,s):!0}function Gv(t,e,n){var r=!1,i=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=yt(e)?zr:rt.current,r=e.contextTypes,s=(r=r!=null)?ji(t,i):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _g(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gu.enqueueReplaceState(e,e.state,null)}function Vh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ef(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=yt(e)?zr:rt.current,i.context=ji(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gu.enqueueReplaceState(i,i.state,null),Ll(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wi(t,e){try{var n="",r=e;do n+=BI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pS=typeof WeakMap=="function"?WeakMap:Map;function Qv(t,e,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){jl||(jl=!0,Kh=r),Mh(t,e)},n}function Yv(t,e,n){n=Cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mh(t,e),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kS.bind(null,t,e,n),e.then(t,t))}function wg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Eg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cn(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var mS=Un.ReactCurrentOwner,mt=!1;function lt(t,e,n,r){e.child=t===null?Rv(e,null,n,r):$i(e,t.child,n,r)}function Tg(t,e,n,r,i){n=n.render;var s=e.ref;return bi(e,i),r=of(t,e,n,r,s,i),n=af(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(me&&n&&Kd(e),e.flags|=1,lt(t,e,r,i),e.child)}function Ig(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xv(t,e,s,r,i)):(t=ll(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=hr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Xv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wo(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return Fh(t,e,n,r,i)}function Jv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ci,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Ci,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Ci,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Ci,wt),wt|=r;return lt(t,e,i,n),e.child}function Zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fh(t,e,n,r,i){var s=yt(n)?zr:rt.current;return s=ji(e,s),bi(e,i),n=of(t,e,n,r,s,i),r=af(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(me&&r&&Kd(e),e.flags|=1,lt(t,e,n,i),e.child)}function Sg(t,e,n,r,i){if(yt(n)){var s=!0;Pl(e)}else s=!1;if(bi(e,i),e.stateNode===null)sl(t,e),Gv(e,n,r),Vh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ot(c):(c=yt(n)?zr:rt.current,c=ji(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&_g(e,o,r,c),Kn=!1;var m=e.memoizedState;o.state=m,Ll(e,r,o,i),u=e.memoizedState,l!==r||m!==u||gt.current||Kn?(typeof d=="function"&&(Lh(e,n,d,r),u=e.memoizedState),(l=Kn||yg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Av(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ft(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ot(u):(u=yt(n)?zr:rt.current,u=ji(e,u));var I=n.getDerivedStateFromProps;(d=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&_g(e,o,r,u),Kn=!1,m=e.memoizedState,o.state=m,Ll(e,r,o,i);var A=e.memoizedState;l!==p||m!==A||gt.current||Kn?(typeof I=="function"&&(Lh(e,n,I,r),A=e.memoizedState),(c=Kn||yg(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Uh(t,e,n,r,s,i)}function Uh(t,e,n,r,i,s){Zv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ug(e,n,!1),Dn(t,e,s);r=e.stateNode,mS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$i(e,t.child,null,s),e.child=$i(e,null,l,s)):lt(t,e,l,s),e.memoizedState=r.state,i&&ug(e,n,!0),e.child}function e0(t){var e=t.stateNode;e.pendingContext?lg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lg(t,e.context,!1),tf(t,e.containerInfo)}function Rg(t,e,n,r,i){return Bi(),Qd(i),e.flags|=256,lt(t,e,n,r),e.child}var jh={dehydrated:null,treeContext:null,retryLane:0};function Bh(t){return{baseLanes:t,cachePool:null,transitions:null}}function t0(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ve,i&1),t===null)return Dh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vu(o,r,0,null),t=jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bh(n),e.memoizedState=jh,t):cf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return gS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=hr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=hr(l,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jh,r}return s=t.child,t=s.sibling,r=hr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cf(t,e){return e=vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ua(t,e,n,r){return r!==null&&Qd(r),$i(e,t.child,null,n),t=cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fc(Error(j(422))),Ua(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vu({mode:"visible",children:r.children},i,0,null),s=jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$i(e,t.child,null,o),e.child.memoizedState=Bh(o),e.memoizedState=jh,s);if(!(e.mode&1))return Ua(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Fc(s,r,void 0),Ua(t,e,o,r)}if(l=(o&t.childLanes)!==0,mt||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),$t(r,t,i,-1))}return gf(),r=Fc(Error(j(421))),Ua(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=ar(i.nextSibling),St=e,me=!0,jt=null,t!==null&&(Pt[Nt++]=En,Pt[Nt++]=Tn,Pt[Nt++]=Wr,En=t.id,Tn=t.overflow,Wr=e),e=cf(e,r.children),e.flags|=4096,e)}function Cg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Oh(t.return,e,n)}function Uc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function n0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cg(t,n,e);else if(t.tag===19)Cg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Uc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Uc(e,!0,n,null,s);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yS(t,e,n){switch(e.tag){case 3:e0(e),Bi();break;case 5:kv(e);break;case 1:yt(e.type)&&Pl(e);break;case 4:tf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?t0(t,e,n):(ce(ve,ve.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);ce(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return n0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,Jv(t,e,n)}return Dn(t,e,n)}var r0,$h,i0,s0;r0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$h=function(){};i0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mr(en.current);var s=null;switch(n){case"input":i=ch(t,i),r=ch(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=fh(t,i),r=fh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kl)}mh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};s0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ls(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _S(t,e,n){var r=e.pendingProps;switch(Gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return yt(e.type)&&xl(),Je(e),null;case 3:return r=e.stateNode,zi(),pe(gt),pe(rt),rf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(Yh(jt),jt=null))),$h(t,e),Je(e),null;case 5:nf(e);var i=Mr(Ro.current);if(n=e.type,t!==null&&e.stateNode!=null)i0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Je(e),null}if(t=Mr(en.current),Ma(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yt]=e,r[Io]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<zs.length;i++)de(zs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Lm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Mm(r,s),de("invalid",r)}mh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Va(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Va(r.textContent,l,t),i=["children",""+l]):fo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":ka(r),Vm(r,s,!0);break;case"textarea":ka(r),Fm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=kl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=D_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yt]=e,t[Io]=r,r0(t,e,!1,!1),e.stateNode=t;e:{switch(o=gh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<zs.length;i++)de(zs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Lm(t,r),i=ch(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),de("invalid",t);break;case"textarea":Mm(t,r),i=fh(t,r),de("invalid",t);break;default:i=r}mh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?V_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&O_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&po(t,u):typeof u=="number"&&po(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Dd(t,s,u,o))}switch(n){case"input":ka(t),Vm(t,r,!1);break;case"textarea":ka(t),Fm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ki(t,!!r.multiple,s,!1):r.defaultValue!=null&&ki(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)s0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Mr(Ro.current),Mr(en.current),Ma(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yt]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:Va(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Va(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=e,e.stateNode=r}return Je(e),null;case 13:if(pe(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&Et!==null&&e.mode&1&&!(e.flags&128))Iv(),Bi(),e.flags|=98560,s=!1;else if(s=Ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Yt]=e}else Bi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else jt!==null&&(Yh(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Le===0&&(Le=3):gf())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return zi(),$h(t,e),t===null&&Eo(e.stateNode.containerInfo),Je(e),null;case 10:return Jd(e.type._context),Je(e),null;case 17:return yt(e.type)&&xl(),Je(e),null;case 19:if(pe(ve),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ls(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vl(t),o!==null){for(e.flags|=128,Ls(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Hi&&(e.flags|=128,r=!0,Ls(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ls(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Je(e),null}else 2*Pe()-s.renderingStartTime>Hi&&n!==1073741824&&(e.flags|=128,r=!0,Ls(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=ve.current,ce(ve,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return mf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function vS(t,e){switch(Gd(e),e.tag){case 1:return yt(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zi(),pe(gt),pe(rt),rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nf(e),null;case 13:if(pe(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ve),null;case 4:return zi(),null;case 10:return Jd(e.type._context),null;case 22:case 23:return mf(),null;case 24:return null;default:return null}}var ja=!1,tt=!1,wS=typeof WeakSet=="function"?WeakSet:Set,z=null;function Ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function zh(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Ag=!1;function ES(t,e){if(Ch=Rl,t=cv(),qd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ah={focusedElem:t,selectionRange:n},Rl=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var k=A.memoizedProps,N=A.memoizedState,g=e.stateNode,y=g.getSnapshotBeforeUpdate(e.elementType===e.type?k:Ft(e.type,k),N);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){Re(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return A=Ag,Ag=!1,A}function ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zh(e,n,s)}i=i.next}while(i!==r)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function o0(t){var e=t.alternate;e!==null&&(t.alternate=null,o0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yt],delete e[Io],delete e[Ph],delete e[rS],delete e[iS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function a0(t){return t.tag===5||t.tag===3||t.tag===4}function kg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||a0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(r!==4&&(t=t.child,t!==null))for(Hh(t,e,n),t=t.sibling;t!==null;)Hh(t,e,n),t=t.sibling}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}var Be=null,Ut=!1;function Wn(t,e,n){for(n=n.child;n!==null;)l0(t,e,n),n=n.sibling}function l0(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:tt||Ri(n,e);case 6:var r=Be,i=Ut;Be=null,Wn(t,e,n),Be=r,Ut=i,Be!==null&&(Ut?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ut?(t=Be,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),_o(t)):bc(Be,n.stateNode));break;case 4:r=Be,i=Ut,Be=n.stateNode.containerInfo,Ut=!0,Wn(t,e,n),Be=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zh(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!tt&&(Ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Wn(t,e,n),tt=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function xg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wS),e.forEach(function(r){var i=PS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Ut=!1;break e;case 3:Be=l.stateNode.containerInfo,Ut=!0;break e;case 4:Be=l.stateNode.containerInfo,Ut=!0;break e}l=l.return}if(Be===null)throw Error(j(160));l0(s,o,i),Be=null,Ut=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)u0(e,t),e=e.sibling}function u0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Gt(t),r&4){try{ro(3,t,t.return),yu(3,t)}catch(k){Re(t,t.return,k)}try{ro(5,t,t.return)}catch(k){Re(t,t.return,k)}}break;case 1:Mt(e,t),Gt(t),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(Mt(e,t),Gt(t),r&512&&n!==null&&Ri(n,n.return),t.flags&32){var i=t.stateNode;try{po(i,"")}catch(k){Re(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&N_(i,s),gh(l,o);var c=gh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?V_(i,p):d==="dangerouslySetInnerHTML"?O_(i,p):d==="children"?po(i,p):Dd(i,d,p,c)}switch(l){case"input":hh(i,s);break;case"textarea":b_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?ki(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?ki(i,!!s.multiple,s.defaultValue,!0):ki(i,!!s.multiple,s.multiple?[]:"",!1))}i[Io]=s}catch(k){Re(t,t.return,k)}}break;case 6:if(Mt(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Re(t,t.return,k)}}break;case 3:if(Mt(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(e.containerInfo)}catch(k){Re(t,t.return,k)}break;case 4:Mt(e,t),Gt(t);break;case 13:Mt(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ff=Pe())),r&4&&xg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||d,Mt(e,t),tt=c):Mt(e,t),Gt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(z=t,d=t.child;d!==null;){for(p=z=d;z!==null;){switch(m=z,I=m.child,m.tag){case 0:case 11:case 14:case 15:ro(4,m,m.return);break;case 1:Ri(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(k){Re(r,n,k)}}break;case 5:Ri(m,m.return);break;case 22:if(m.memoizedState!==null){Ng(p);continue}}I!==null?(I.return=m,z=I):Ng(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=L_("display",o))}catch(k){Re(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Re(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mt(e,t),Gt(t),r&4&&xg(t);break;case 21:break;default:Mt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(a0(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(po(i,""),r.flags&=-33);var s=kg(t);qh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=kg(t);Hh(t,l,o);break;default:throw Error(j(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function TS(t,e,n){z=t,c0(t)}function c0(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ja;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=ja;var c=tt;if(ja=o,(tt=u)&&!c)for(z=i;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?bg(i):u!==null?(u.return=o,z=u):bg(i);for(;s!==null;)z=s,c0(s),s=s.sibling;z=i,ja=l,tt=c}Pg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):Pg(t)}}function Pg(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&_o(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}tt||e.flags&512&&Wh(e)}catch(m){Re(e,e.return,m)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function Ng(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function bg(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{Wh(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{Wh(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var IS=Math.ceil,Ul=Un.ReactCurrentDispatcher,hf=Un.ReactCurrentOwner,Dt=Un.ReactCurrentBatchConfig,re=0,Ue=null,be=null,We=0,wt=0,Ci=Ir(0),Le=0,xo=null,qr=0,_u=0,df=0,io=null,ft=null,ff=0,Hi=1/0,vn=null,jl=!1,Kh=null,ur=null,Ba=!1,nr=null,Bl=0,so=0,Gh=null,ol=-1,al=0;function ut(){return re&6?Pe():ol!==-1?ol:ol=Pe()}function cr(t){return t.mode&1?re&2&&We!==0?We&-We:oS.transition!==null?(al===0&&(al=G_()),al):(t=oe,t!==0||(t=window.event,t=t===void 0?16:tv(t.type)),t):1}function $t(t,e,n,r){if(50<so)throw so=0,Gh=null,Error(j(185));$o(t,n,r),(!(re&2)||t!==Ue)&&(t===Ue&&(!(re&2)&&(_u|=n),Le===4&&Qn(t,We)),_t(t,r),n===1&&re===0&&!(e.mode&1)&&(Hi=Pe()+500,pu&&Sr()))}function _t(t,e){var n=t.callbackNode;o1(t,e);var r=Sl(t,t===Ue?We:0);if(r===0)n!==null&&Bm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bm(n),e===1)t.tag===0?sS(Dg.bind(null,t)):wv(Dg.bind(null,t)),tS(function(){!(re&6)&&Sr()}),n=null;else{switch(Q_(r)){case 1:n=Fd;break;case 4:n=q_;break;case 16:n=Il;break;case 536870912:n=K_;break;default:n=Il}n=_0(n,h0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h0(t,e){if(ol=-1,al=0,re&6)throw Error(j(327));var n=t.callbackNode;if(Di()&&t.callbackNode!==n)return null;var r=Sl(t,t===Ue?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$l(t,r);else{e=r;var i=re;re|=2;var s=f0();(Ue!==t||We!==e)&&(vn=null,Hi=Pe()+500,Ur(t,e));do try{CS();break}catch(l){d0(t,l)}while(!0);Xd(),Ul.current=s,re=i,be!==null?e=0:(Ue=null,We=0,e=Le)}if(e!==0){if(e===2&&(i=Eh(t),i!==0&&(r=i,e=Qh(t,i))),e===1)throw n=xo,Ur(t,0),Qn(t,r),_t(t,Pe()),n;if(e===6)Qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!SS(i)&&(e=$l(t,r),e===2&&(s=Eh(t),s!==0&&(r=s,e=Qh(t,s))),e===1))throw n=xo,Ur(t,0),Qn(t,r),_t(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Dr(t,ft,vn);break;case 3:if(Qn(t,r),(r&130023424)===r&&(e=ff+500-Pe(),10<e)){if(Sl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xh(Dr.bind(null,t,ft,vn),e);break}Dr(t,ft,vn);break;case 4:if(Qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IS(r/1960))-r,10<r){t.timeoutHandle=xh(Dr.bind(null,t,ft,vn),r);break}Dr(t,ft,vn);break;case 5:Dr(t,ft,vn);break;default:throw Error(j(329))}}}return _t(t,Pe()),t.callbackNode===n?h0.bind(null,t):null}function Qh(t,e){var n=io;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=$l(t,e),t!==2&&(e=ft,ft=n,e!==null&&Yh(e)),t}function Yh(t){ft===null?ft=t:ft.push.apply(ft,t)}function SS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qn(t,e){for(e&=~df,e&=~_u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function Dg(t){if(re&6)throw Error(j(327));Di();var e=Sl(t,0);if(!(e&1))return _t(t,Pe()),null;var n=$l(t,e);if(t.tag!==0&&n===2){var r=Eh(t);r!==0&&(e=r,n=Qh(t,r))}if(n===1)throw n=xo,Ur(t,0),Qn(t,e),_t(t,Pe()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,ft,vn),_t(t,Pe()),null}function pf(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Hi=Pe()+500,pu&&Sr())}}function Kr(t){nr!==null&&nr.tag===0&&!(re&6)&&Di();var e=re;re|=1;var n=Dt.transition,r=oe;try{if(Dt.transition=null,oe=1,t)return t()}finally{oe=r,Dt.transition=n,re=e,!(re&6)&&Sr()}}function mf(){wt=Ci.current,pe(Ci)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eS(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xl();break;case 3:zi(),pe(gt),pe(rt),rf();break;case 5:nf(r);break;case 4:zi();break;case 13:pe(ve);break;case 19:pe(ve);break;case 10:Jd(r.type._context);break;case 22:case 23:mf()}n=n.return}if(Ue=t,be=t=hr(t.current,null),We=wt=e,Le=0,xo=null,df=_u=qr=0,ft=io=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Vr=null}return t}function d0(t,e){do{var n=be;try{if(Xd(),rl.current=Fl,Ml){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ml=!1}if(Hr=0,Fe=Oe=we=null,no=!1,Co=0,hf.current=null,n===null||n.return===null){Le=1,xo=e,be=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var I=wg(o);if(I!==null){I.flags&=-257,Eg(I,o,l,s,e),I.mode&1&&vg(s,c,e),e=I,u=c;var A=e.updateQueue;if(A===null){var k=new Set;k.add(u),e.updateQueue=k}else A.add(u);break e}else{if(!(e&1)){vg(s,c,e),gf();break e}u=Error(j(426))}}else if(me&&l.mode&1){var N=wg(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Eg(N,o,l,s,e),Qd(Wi(u,l));break e}}s=u=Wi(u,l),Le!==4&&(Le=2),io===null?io=[s]:io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Qv(s,u,e);fg(s,g);break e;case 1:l=u;var y=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(ur===null||!ur.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Yv(s,l,e);fg(s,x);break e}}s=s.return}while(s!==null)}m0(n)}catch(L){e=L,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function f0(){var t=Ul.current;return Ul.current=Fl,t===null?Fl:t}function gf(){(Le===0||Le===3||Le===2)&&(Le=4),Ue===null||!(qr&268435455)&&!(_u&268435455)||Qn(Ue,We)}function $l(t,e){var n=re;re|=2;var r=f0();(Ue!==t||We!==e)&&(vn=null,Ur(t,e));do try{RS();break}catch(i){d0(t,i)}while(!0);if(Xd(),re=n,Ul.current=r,be!==null)throw Error(j(261));return Ue=null,We=0,Le}function RS(){for(;be!==null;)p0(be)}function CS(){for(;be!==null&&!XI();)p0(be)}function p0(t){var e=y0(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?m0(t):be=e,hf.current=null}function m0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vS(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,be=null;return}}else if(n=_S(n,e,wt),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Le===0&&(Le=5)}function Dr(t,e,n){var r=oe,i=Dt.transition;try{Dt.transition=null,oe=1,AS(t,e,n,r)}finally{Dt.transition=i,oe=r}return null}function AS(t,e,n,r){do Di();while(nr!==null);if(re&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(a1(t,s),t===Ue&&(be=Ue=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ba||(Ba=!0,_0(Il,function(){return Di(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=oe;oe=1;var l=re;re|=4,hf.current=null,ES(t,n),u0(n,t),K1(Ah),Rl=!!Ch,Ah=Ch=null,t.current=n,TS(n),JI(),re=l,oe=o,Dt.transition=s}else t.current=n;if(Ba&&(Ba=!1,nr=t,Bl=i),s=t.pendingLanes,s===0&&(ur=null),t1(n.stateNode),_t(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jl)throw jl=!1,t=Kh,Kh=null,t;return Bl&1&&t.tag!==0&&Di(),s=t.pendingLanes,s&1?t===Gh?so++:(so=0,Gh=t):so=0,Sr(),null}function Di(){if(nr!==null){var t=Q_(Bl),e=Dt.transition,n=oe;try{if(Dt.transition=null,oe=16>t?16:t,nr===null)var r=!1;else{if(t=nr,nr=null,Bl=0,re&6)throw Error(j(331));var i=re;for(re|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(z=c;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:ro(8,d,s)}var p=d.child;if(p!==null)p.return=d,z=p;else for(;z!==null;){d=z;var m=d.sibling,I=d.return;if(o0(d),d===c){z=null;break}if(m!==null){m.return=I,z=m;break}z=I}}}var A=s.alternate;if(A!==null){var k=A.child;if(k!==null){A.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ro(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,z=g;break e}z=s.return}}var y=t.current;for(z=y;z!==null;){o=z;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,z=w;else e:for(o=y;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yu(9,l)}}catch(L){Re(l,l.return,L)}if(l===o){z=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,z=x;break e}z=l.return}}if(re=i,Sr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(uu,t)}catch{}r=!0}return r}finally{oe=n,Dt.transition=e}}return!1}function Og(t,e,n){e=Wi(n,e),e=Qv(t,e,1),t=lr(t,e,1),e=ut(),t!==null&&($o(t,1,e),_t(t,e))}function Re(t,e,n){if(t.tag===3)Og(t,t,n);else for(;e!==null;){if(e.tag===3){Og(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ur===null||!ur.has(r))){t=Wi(n,t),t=Yv(e,t,1),e=lr(e,t,1),t=ut(),e!==null&&($o(e,1,t),_t(e,t));break}}e=e.return}}function kS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(We&n)===n&&(Le===4||Le===3&&(We&130023424)===We&&500>Pe()-ff?Ur(t,0):df|=n),_t(t,e)}function g0(t,e){e===0&&(t.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var n=ut();t=bn(t,e),t!==null&&($o(t,e,n),_t(t,n))}function xS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),g0(t,n)}function PS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),g0(t,n)}var y0;y0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,yS(t,e,n);mt=!!(t.flags&131072)}else mt=!1,me&&e.flags&1048576&&Ev(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;sl(t,e),t=e.pendingProps;var i=ji(e,rt.current);bi(e,n),i=of(null,e,r,t,i,n);var s=af();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,Pl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ef(e),i.updater=gu,e.stateNode=i,i._reactInternals=e,Vh(e,r,t,n),e=Uh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Kd(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(sl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bS(r),t=Ft(r,t),i){case 0:e=Fh(null,e,r,t,n);break e;case 1:e=Sg(null,e,r,t,n);break e;case 11:e=Tg(null,e,r,t,n);break e;case 14:e=Ig(null,e,r,Ft(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Fh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Sg(t,e,r,i,n);case 3:e:{if(e0(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Av(t,e),Ll(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wi(Error(j(423)),e),e=Rg(t,e,r,n,i);break e}else if(r!==i){i=Wi(Error(j(424)),e),e=Rg(t,e,r,n,i);break e}else for(Et=ar(e.stateNode.containerInfo.firstChild),St=e,me=!0,jt=null,n=Rv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bi(),r===i){e=Dn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return kv(e),t===null&&Dh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kh(r,i)?o=null:s!==null&&kh(r,s)&&(e.flags|=32),Zv(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&Dh(e),null;case 13:return t0(t,e,n);case 4:return tf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$i(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Tg(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Dl,r._currentValue),r._currentValue=o,s!==null)if(Wt(s.value,o)){if(s.children===i.children&&!gt.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Cn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Oh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Oh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bi(e,n),i=Ot(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=Ft(r,e.pendingProps),i=Ft(r.type,i),Ig(t,e,r,i,n);case 15:return Xv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),sl(t,e),e.tag=1,yt(r)?(t=!0,Pl(e)):t=!1,bi(e,n),Gv(e,r,i),Vh(e,r,i,n),Uh(null,e,r,!0,t,n);case 19:return n0(t,e,n);case 22:return Jv(t,e,n)}throw Error(j(156,e.tag))};function _0(t,e){return H_(t,e)}function NS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(t,e,n,r){return new NS(t,e,n,r)}function yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bS(t){if(typeof t=="function")return yf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ld)return 11;if(t===Vd)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ll(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gi:return jr(n.children,i,s,e);case Od:o=8,i|=8;break;case oh:return t=bt(12,n,e,i|2),t.elementType=oh,t.lanes=s,t;case ah:return t=bt(13,n,e,i),t.elementType=ah,t.lanes=s,t;case lh:return t=bt(19,n,e,i),t.elementType=lh,t.lanes=s,t;case k_:return vu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C_:o=10;break e;case A_:o=9;break e;case Ld:o=11;break e;case Vd:o=14;break e;case qn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function jr(t,e,n,r){return t=bt(7,t,r,e),t.lanes=n,t}function vu(t,e,n,r){return t=bt(22,t,r,e),t.elementType=k_,t.lanes=n,t.stateNode={isHidden:!1},t}function jc(t,e,n){return t=bt(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _f(t,e,n,r,i,s,o,l,u){return t=new DS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ef(s),t}function OS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function v0(t){if(!t)return gr;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(yt(n))return vv(t,n,e)}return e}function w0(t,e,n,r,i,s,o,l,u){return t=_f(n,r,!0,t,i,s,o,l,u),t.context=v0(null),n=t.current,r=ut(),i=cr(n),s=Cn(r,i),s.callback=e??null,lr(n,s,i),t.current.lanes=i,$o(t,i,r),_t(t,r),t}function wu(t,e,n,r){var i=e.current,s=ut(),o=cr(i);return n=v0(n),e.context===null?e.context=n:e.pendingContext=n,e=Cn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=lr(i,e,o),t!==null&&($t(t,i,o,s),nl(t,i,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vf(t,e){Lg(t,e),(t=t.alternate)&&Lg(t,e)}function LS(){return null}var E0=typeof reportError=="function"?reportError:function(t){console.error(t)};function wf(t){this._internalRoot=t}Eu.prototype.render=wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));wu(t,e,null,null)};Eu.prototype.unmount=wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){wu(null,t,null,null)}),e[Nn]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=J_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&ev(t)}};function Ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vg(){}function VS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=zl(o);s.call(c)}}var o=w0(e,r,t,0,null,!1,!1,"",Vg);return t._reactRootContainer=o,t[Nn]=o.current,Eo(t.nodeType===8?t.parentNode:t),Kr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=zl(u);l.call(c)}}var u=_f(t,0,!1,null,null,!1,!1,"",Vg);return t._reactRootContainer=u,t[Nn]=u.current,Eo(t.nodeType===8?t.parentNode:t),Kr(function(){wu(e,u,n,r)}),u}function Iu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=zl(o);l.call(u)}}wu(e,o,t,i)}else o=VS(n,e,t,i,r);return zl(o)}Y_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$s(e.pendingLanes);n!==0&&(Ud(e,n|1),_t(e,Pe()),!(re&6)&&(Hi=Pe()+500,Sr()))}break;case 13:Kr(function(){var r=bn(t,1);if(r!==null){var i=ut();$t(r,t,1,i)}}),vf(t,1)}};jd=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=ut();$t(e,t,134217728,n)}vf(t,134217728)}};X_=function(t){if(t.tag===13){var e=cr(t),n=bn(t,e);if(n!==null){var r=ut();$t(n,t,e,r)}vf(t,e)}};J_=function(){return oe};Z_=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};_h=function(t,e,n){switch(e){case"input":if(hh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fu(r);if(!i)throw Error(j(90));P_(r),hh(r,i)}}}break;case"textarea":b_(t,n);break;case"select":e=n.value,e!=null&&ki(t,!!n.multiple,e,!1)}};U_=pf;j_=Kr;var MS={usingClientEntryPoint:!1,Events:[Wo,wi,fu,M_,F_,pf]},Vs={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FS={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=z_(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||LS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{uu=$a.inject(FS),Zt=$a}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MS;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ef(e))throw Error(j(200));return OS(t,e,null,n)};Ct.createRoot=function(t,e){if(!Ef(t))throw Error(j(299));var n=!1,r="",i=E0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_f(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,Eo(t.nodeType===8?t.parentNode:t),new wf(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=z_(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return Kr(t)};Ct.hydrate=function(t,e,n){if(!Tu(e))throw Error(j(200));return Iu(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Ef(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=E0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=w0(e,null,t,1,n??null,i,!1,s,o),t[Nn]=e.current,Eo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Eu(e)};Ct.render=function(t,e,n){if(!Tu(e))throw Error(j(200));return Iu(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(j(40));return t._reactRootContainer?(Kr(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Ct.unstable_batchedUpdates=pf;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Iu(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function T0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T0)}catch(t){console.error(t)}}T0(),T_.exports=Ct;var US=T_.exports,Mg=US;ih.createRoot=Mg.createRoot,ih.hydrateRoot=Mg.hydrateRoot;/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fg="popstate";function jS(t={}){function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Xh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Po(i)}return $S(e,n,null,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ht(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BS(){return Math.random().toString(36).substring(2,10)}function Ug(t,e){return{usr:t.state,key:t.key,idx:e}}function Xh(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?is(e):e,state:n,key:e&&e.key||r||BS()}}function Po({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function $S(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l="POP",u=null,c=d();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function d(){return(o.state||{idx:null}).idx}function p(){l="POP";let N=d(),g=N==null?null:N-c;c=N,u&&u({action:l,location:k.location,delta:g})}function m(N,g){l="PUSH";let y=Xh(k.location,N,g);c=d()+1;let w=Ug(y,c),x=k.createHref(y);try{o.pushState(w,"",x)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(x)}s&&u&&u({action:l,location:k.location,delta:1})}function I(N,g){l="REPLACE";let y=Xh(k.location,N,g);c=d();let w=Ug(y,c),x=k.createHref(y);o.replaceState(w,"",x),s&&u&&u({action:l,location:k.location,delta:0})}function A(N){return zS(N)}let k={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Fg,p),u=N,()=>{i.removeEventListener(Fg,p),u=null}},createHref(N){return e(i,N)},createURL:A,encodeLocation(N){let g=A(N);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:I,go(N){return o.go(N)}};return k}function zS(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ge(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:Po(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function I0(t,e,n="/"){return WS(t,e,n,!1)}function WS(t,e,n,r){let i=typeof e=="string"?is(e):e,s=On(i.pathname||"/",n);if(s==null)return null;let o=S0(t);HS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=nR(s);l=eR(o[u],c,r)}return l}function S0(t,e=[],n=[],r="",i=!1){let s=(o,l,u=i,c)=>{let d={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&u)return;ge(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let p=An([r,d.relativePath]),m=n.concat(d);o.children&&o.children.length>0&&(ge(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),S0(o.children,e,m,p,u)),!(o.path==null&&!o.index)&&e.push({path:p,score:JS(p,o.index),routesMeta:m})};return t.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))s(o,l);else for(let c of R0(o.path))s(o,l,!0,c)}),e}function R0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=R0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function HS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ZS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var qS=/^:[\w-]+$/,KS=3,GS=2,QS=1,YS=10,XS=-2,jg=t=>t==="*";function JS(t,e){let n=t.split("/"),r=n.length;return n.some(jg)&&(r+=XS),e&&(r+=GS),n.filter(i=>!jg(i)).reduce((i,s)=>i+(qS.test(s)?KS:s===""?QS:YS),r)}function ZS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function eR(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Wl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Wl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:An([s,p.pathname]),pathnameBase:oR(An([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=An([s,p.pathnameBase]))}return o}function Wl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=tR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:p},m)=>{if(d==="*"){let A=l[m]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const I=l[m];return p&&!I?c[d]=void 0:c[d]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function tR(t,e=!1,n=!0){Ht(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function nR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ht(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function On(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}var rR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function iR(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?is(t):t,s;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?s=Bg(n.substring(1),"/"):s=Bg(n,e)):s=e,{pathname:s,search:aR(r),hash:lR(i)}}function Bg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $c(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Tf(t){let e=sR(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function If(t,e,n,r=!1){let i;typeof t=="string"?i=is(t):(i={...t},ge(!i.pathname||!i.pathname.includes("?"),$c("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),$c("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),$c("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=iR(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}var An=t=>t.join("/").replace(/\/\/+/g,"/"),oR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),aR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,lR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,uR=class{constructor(t,e,n,r=!1){this.status=t,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function cR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function hR(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var C0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function A0(t,e){let n=t;if(typeof n!="string"||!rR.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(C0)try{let s=new URL(window.location.href),o=n.startsWith("//")?new URL(s.protocol+n):new URL(n),l=On(o.pathname,e);o.origin===s.origin&&l!=null?n=l+o.search+o.hash:i=!0}catch{Ht(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var k0=["POST","PUT","PATCH","DELETE"];new Set(k0);var dR=["GET",...k0];new Set(dR);var ss=b.createContext(null);ss.displayName="DataRouter";var Su=b.createContext(null);Su.displayName="DataRouterState";var fR=b.createContext(!1),x0=b.createContext({isTransitioning:!1});x0.displayName="ViewTransition";var pR=b.createContext(new Map);pR.displayName="Fetchers";var mR=b.createContext(null);mR.displayName="Await";var kt=b.createContext(null);kt.displayName="Navigation";var qo=b.createContext(null);qo.displayName="Location";var un=b.createContext({outlet:null,matches:[],isDataRoute:!1});un.displayName="Route";var Sf=b.createContext(null);Sf.displayName="RouteError";var P0="REACT_ROUTER_ERROR",gR="REDIRECT",yR="ROUTE_ERROR_RESPONSE";function _R(t){if(t.startsWith(`${P0}:${gR}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function vR(t){if(t.startsWith(`${P0}:${yR}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new uR(e.status,e.statusText,e.data)}catch{}}function wR(t,{relative:e}={}){ge(os(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=b.useContext(kt),{hash:i,pathname:s,search:o}=Ko(t,{relative:e}),l=s;return n!=="/"&&(l=s==="/"?n:An([n,s])),r.createHref({pathname:l,search:o,hash:i})}function os(){return b.useContext(qo)!=null}function cn(){return ge(os(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(qo).location}var N0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function b0(t){b.useContext(kt).static||b.useLayoutEffect(t)}function as(){let{isDataRoute:t}=b.useContext(un);return t?DR():ER()}function ER(){ge(os(),"useNavigate() may be used only in the context of a <Router> component.");let t=b.useContext(ss),{basename:e,navigator:n}=b.useContext(kt),{matches:r}=b.useContext(un),{pathname:i}=cn(),s=JSON.stringify(Tf(r)),o=b.useRef(!1);return b0(()=>{o.current=!0}),b.useCallback((u,c={})=>{if(Ht(o.current,N0),!o.current)return;if(typeof u=="number"){n.go(u);return}let d=If(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:An([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,s,i,t])}b.createContext(null);function Ko(t,{relative:e}={}){let{matches:n}=b.useContext(un),{pathname:r}=cn(),i=JSON.stringify(Tf(n));return b.useMemo(()=>If(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function TR(t,e){return D0(t,e)}function D0(t,e,n,r,i){var y;ge(os(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=b.useContext(kt),{matches:o}=b.useContext(un),l=o[o.length-1],u=l?l.params:{},c=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let w=p&&p.path||"";L0(c,!p||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let m=cn(),I;if(e){let w=typeof e=="string"?is(e):e;ge(d==="/"||((y=w.pathname)==null?void 0:y.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${w.pathname}" was given in the \`location\` prop.`),I=w}else I=m;let A=I.pathname||"/",k=A;if(d!=="/"){let w=d.replace(/^\//,"").split("/");k="/"+A.replace(/^\//,"").split("/").slice(w.length).join("/")}let N=I0(t,{pathname:k});Ht(p||N!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),Ht(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=AR(N&&N.map(w=>Object.assign({},w,{params:Object.assign({},u,w.params),pathname:An([d,s.encodeLocation?s.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?d:An([d,s.encodeLocation?s.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),o,n,r,i);return e&&g?b.createElement(qo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},g):g}function IR(){let t=bR(),e=cR(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:s},"ErrorBoundary")," or"," ",b.createElement("code",{style:s},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,o)}var SR=b.createElement(IR,null),O0=class extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=vR(t.digest);n&&(t=n)}let e=t!==void 0?b.createElement(un.Provider,{value:this.props.routeContext},b.createElement(Sf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?b.createElement(RR,{error:t},e):e}};O0.contextType=fR;var zc=new WeakMap;function RR({children:t,error:e}){let{basename:n}=b.useContext(kt);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=_R(e.digest);if(r){let i=zc.get(e);if(i)throw i;let s=A0(r.location,n);if(C0&&!zc.get(e))if(s.isExternal||r.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:r.replace}));throw zc.set(e,o),o}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function CR({routeContext:t,match:e,children:n}){let r=b.useContext(ss);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),b.createElement(un.Provider,{value:t},n)}function AR(t,e=[],n=null,r=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=n==null?void 0:n.errors;if(o!=null){let d=s.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);ge(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:I}=n,A=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!I||I[p.route.id]===void 0);if(p.route.lazy||A){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}let c=n&&r?(d,p)=>{var m,I;r(d,{location:n.location,params:((I=(m=n.matches)==null?void 0:m[0])==null?void 0:I.params)??{},unstable_pattern:hR(n.matches),errorInfo:p})}:void 0;return s.reduceRight((d,p,m)=>{let I,A=!1,k=null,N=null;n&&(I=o&&p.route.id?o[p.route.id]:void 0,k=p.route.errorElement||SR,l&&(u<0&&m===0?(L0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,N=null):u===m&&(A=!0,N=p.route.hydrateFallbackElement||null)));let g=e.concat(s.slice(0,m+1)),y=()=>{let w;return I?w=k:A?w=N:p.route.Component?w=b.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=d,b.createElement(CR,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:w})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?b.createElement(O0,{location:n.location,revalidation:n.revalidation,component:k,error:I,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0},onError:c}):y()},null)}function Rf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kR(t){let e=b.useContext(ss);return ge(e,Rf(t)),e}function xR(t){let e=b.useContext(Su);return ge(e,Rf(t)),e}function PR(t){let e=b.useContext(un);return ge(e,Rf(t)),e}function Cf(t){let e=PR(t),n=e.matches[e.matches.length-1];return ge(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function NR(){return Cf("useRouteId")}function bR(){var r;let t=b.useContext(Sf),e=xR("useRouteError"),n=Cf("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function DR(){let{router:t}=kR("useNavigate"),e=Cf("useNavigate"),n=b.useRef(!1);return b0(()=>{n.current=!0}),b.useCallback(async(i,s={})=>{Ht(n.current,N0),n.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var $g={};function L0(t,e,n){!e&&!$g[t]&&($g[t]=!0,Ht(!1,n))}b.memo(OR);function OR({routes:t,future:e,state:n,onError:r}){return D0(t,void 0,n,r,e)}function V0({to:t,replace:e,state:n,relative:r}){ge(os(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=b.useContext(kt);Ht(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=b.useContext(un),{pathname:o}=cn(),l=as(),u=If(t,Tf(s),o,r==="path"),c=JSON.stringify(u);return b.useEffect(()=>{l(JSON.parse(c),{replace:e,state:n,relative:r})},[l,c,r,e,n]),null}function Ws(t){ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function LR({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,unstable_useTransitions:o}){ge(!os(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:i,static:s,unstable_useTransitions:o,future:{}}),[l,i,s,o]);typeof n=="string"&&(n=is(n));let{pathname:c="/",search:d="",hash:p="",state:m=null,key:I="default"}=n,A=b.useMemo(()=>{let k=On(c,l);return k==null?null:{location:{pathname:k,search:d,hash:p,state:m,key:I},navigationType:r}},[l,c,d,p,m,I,r]);return Ht(A!=null,`<Router basename="${l}"> is not able to match the URL "${c}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:b.createElement(kt.Provider,{value:u},b.createElement(qo.Provider,{children:e,value:A}))}function VR({children:t,location:e}){return TR(Jh(t),e)}function Jh(t,e=[]){let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Jh(r.props.children,s));return}ge(r.type===Ws,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ge(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Jh(r.props.children,s)),n.push(o)}),n}var ul="get",cl="application/x-www-form-urlencoded";function Ru(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function MR(t){return Ru(t)&&t.tagName.toLowerCase()==="button"}function FR(t){return Ru(t)&&t.tagName.toLowerCase()==="form"}function UR(t){return Ru(t)&&t.tagName.toLowerCase()==="input"}function jR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function BR(t,e){return t.button===0&&(!e||e==="_self")&&!jR(t)}var za=null;function $R(){if(za===null)try{new FormData(document.createElement("form"),0),za=!1}catch{za=!0}return za}var zR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wc(t){return t!=null&&!zR.has(t)?(Ht(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cl}"`),null):t}function WR(t,e){let n,r,i,s,o;if(FR(t)){let l=t.getAttribute("action");r=l?On(l,e):null,n=t.getAttribute("method")||ul,i=Wc(t.getAttribute("enctype"))||cl,s=new FormData(t)}else if(MR(t)||UR(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?On(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||ul,i=Wc(t.getAttribute("formenctype"))||Wc(l.getAttribute("enctype"))||cl,s=new FormData(l,t),!$R()){let{name:c,type:d,value:p}=t;if(d==="image"){let m=c?`${c}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else c&&s.append(c,p)}}else{if(Ru(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ul,r=null,i=cl,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Af(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function HR(t,e,n,r){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:e&&On(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${r}`,i}async function qR(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function KR(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function GR(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await qR(s,n);return o.links?o.links():[]}return[]}));return JR(r.flat(1).filter(KR).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function zg(t,e,n,r,i,s){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,l=(u,c)=>{var d;return n[c].pathname!==u.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,c)=>o(u,c)||l(u,c)):s==="data"?e.filter((u,c)=>{var p;let d=r.routes[u.route.id];if(!d||!d.hasLoader)return!1;if(o(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function QR(t,e,{includeHydrateFallback:n}={}){return YR(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function YR(t){return[...new Set(t)]}function XR(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function JR(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(XR(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function M0(){let t=b.useContext(ss);return Af(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function ZR(){let t=b.useContext(Su);return Af(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var kf=b.createContext(void 0);kf.displayName="FrameworkContext";function F0(){let t=b.useContext(kf);return Af(t,"You must render this element inside a <HydratedRouter> element"),t}function eC(t,e){let n=b.useContext(kf),[r,i]=b.useState(!1),[s,o]=b.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:p}=e,m=b.useRef(null);b.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let k=g=>{g.forEach(y=>{o(y.isIntersecting)})},N=new IntersectionObserver(k,{threshold:.5});return m.current&&N.observe(m.current),()=>{N.disconnect()}}},[t]),b.useEffect(()=>{if(r){let k=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(k)}}},[r]);let I=()=>{i(!0)},A=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,m,{}]:[s,m,{onFocus:Ms(l,I),onBlur:Ms(u,A),onMouseEnter:Ms(c,I),onMouseLeave:Ms(d,A),onTouchStart:Ms(p,I)}]:[!1,m,{}]}function Ms(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function tC({page:t,...e}){let{router:n}=M0(),r=b.useMemo(()=>I0(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?b.createElement(rC,{page:t,matches:r,...e}):null}function nC(t){let{manifest:e,routeModules:n}=F0(),[r,i]=b.useState([]);return b.useEffect(()=>{let s=!1;return GR(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function rC({page:t,matches:e,...n}){let r=cn(),{future:i,manifest:s,routeModules:o}=F0(),{basename:l}=M0(),{loaderData:u,matches:c}=ZR(),d=b.useMemo(()=>zg(t,e,c,s,r,"data"),[t,e,c,s,r]),p=b.useMemo(()=>zg(t,e,c,s,r,"assets"),[t,e,c,s,r]),m=b.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let k=new Set,N=!1;if(e.forEach(y=>{var x;let w=s.routes[y.route.id];!w||!w.hasLoader||(!d.some(L=>L.route.id===y.route.id)&&y.route.id in u&&((x=o[y.route.id])!=null&&x.shouldRevalidate)||w.hasClientLoader?N=!0:k.add(y.route.id))}),k.size===0)return[];let g=HR(t,l,i.unstable_trailingSlashAwareDataRequests,"data");return N&&k.size>0&&g.searchParams.set("_routes",e.filter(y=>k.has(y.route.id)).map(y=>y.route.id).join(",")),[g.pathname+g.search]},[l,i.unstable_trailingSlashAwareDataRequests,u,r,s,d,e,t,o]),I=b.useMemo(()=>QR(p,s),[p,s]),A=nC(p);return b.createElement(b.Fragment,null,m.map(k=>b.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...n})),I.map(k=>b.createElement("link",{key:k,rel:"modulepreload",href:k,...n})),A.map(({key:k,link:N})=>b.createElement("link",{key:k,nonce:n.nonce,...N,crossOrigin:N.crossOrigin??n.crossOrigin})))}function iC(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var sC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sC&&(window.__reactRouterVersion="7.13.0")}catch{}function oC({basename:t,children:e,unstable_useTransitions:n,window:r}){let i=b.useRef();i.current==null&&(i.current=jS({window:r,v5Compat:!0}));let s=i.current,[o,l]=b.useState({action:s.action,location:s.location}),u=b.useCallback(c=>{n===!1?l(c):b.startTransition(()=>l(c))},[n]);return b.useLayoutEffect(()=>s.listen(u),[s,u]),b.createElement(LR,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:s,unstable_useTransitions:n})}var U0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,j0=b.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m,...I},A){let{basename:k,unstable_useTransitions:N}=b.useContext(kt),g=typeof c=="string"&&U0.test(c),y=A0(c,k);c=y.to;let w=wR(c,{relative:i}),[x,L,M]=eC(r,I),S=cC(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:N});function v(R){e&&e(R),R.defaultPrevented||S(R)}let T=b.createElement("a",{...I,...M,href:y.absoluteURL||w,onClick:y.isExternal||s?e:v,ref:iC(A,L),target:u,"data-discover":!g&&n==="render"?"true":void 0});return x&&!g?b.createElement(b.Fragment,null,T,b.createElement(tC,{page:w})):T});j0.displayName="Link";var aC=b.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:l,children:u,...c},d){let p=Ko(o,{relative:c.relative}),m=cn(),I=b.useContext(Su),{navigator:A,basename:k}=b.useContext(kt),N=I!=null&&mC(p)&&l===!0,g=A.encodeLocation?A.encodeLocation(p).pathname:p.pathname,y=m.pathname,w=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;n||(y=y.toLowerCase(),w=w?w.toLowerCase():null,g=g.toLowerCase()),w&&k&&(w=On(w,k)||w);const x=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let L=y===g||!i&&y.startsWith(g)&&y.charAt(x)==="/",M=w!=null&&(w===g||!i&&w.startsWith(g)&&w.charAt(g.length)==="/"),S={isActive:L,isPending:M,isTransitioning:N},v=L?e:void 0,T;typeof r=="function"?T=r(S):T=[r,L?"active":null,M?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let R=typeof s=="function"?s(S):s;return b.createElement(j0,{...c,"aria-current":v,className:T,ref:d,style:R,to:o,viewTransition:l},typeof u=="function"?u(S):u)});aC.displayName="NavLink";var lC=b.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=ul,action:l,onSubmit:u,relative:c,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m,...I},A)=>{let{unstable_useTransitions:k}=b.useContext(kt),N=fC(),g=pC(l,{relative:c}),y=o.toLowerCase()==="get"?"get":"post",w=typeof l=="string"&&U0.test(l),x=L=>{if(u&&u(L),L.defaultPrevented)return;L.preventDefault();let M=L.nativeEvent.submitter,S=(M==null?void 0:M.getAttribute("formmethod"))||o,v=()=>N(M||L.currentTarget,{fetcherKey:e,method:S,navigate:n,replace:i,state:s,relative:c,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m});k&&n!==!1?b.startTransition(()=>v()):v()};return b.createElement("form",{ref:A,method:y,action:g,onSubmit:r?u:x,...I,"data-discover":!w&&t==="render"?"true":void 0})});lC.displayName="Form";function uC(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function B0(t){let e=b.useContext(ss);return ge(e,uC(t)),e}function cC(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:l,unstable_useTransitions:u}={}){let c=as(),d=cn(),p=Ko(t,{relative:s});return b.useCallback(m=>{if(BR(m,e)){m.preventDefault();let I=n!==void 0?n:Po(d)===Po(p),A=()=>c(t,{replace:I,state:r,preventScrollReset:i,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:l});u?b.startTransition(()=>A()):A()}},[d,c,p,n,r,e,t,i,s,o,l,u])}var hC=0,dC=()=>`__${String(++hC)}__`;function fC(){let{router:t}=B0("useSubmit"),{basename:e}=b.useContext(kt),n=NR(),r=t.fetch,i=t.navigate;return b.useCallback(async(s,o={})=>{let{action:l,method:u,encType:c,formData:d,body:p}=WR(s,e);if(o.navigate===!1){let m=o.fetcherKey||dC();await r(m,n,o.action||l,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||c,flushSync:o.flushSync})}else await i(o.action||l,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,i,e,n])}function pC(t,{relative:e}={}){let{basename:n}=b.useContext(kt),r=b.useContext(un);ge(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Ko(t||".",{relative:e})},o=cn();if(t==null){s.search=o.search;let l=new URLSearchParams(s.search),u=l.getAll("index");if(u.some(d=>d==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let d=l.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:An([n,s.pathname])),Po(s)}function mC(t,{relative:e}={}){let n=b.useContext(x0);ge(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=B0("useViewTransitionState"),i=Ko(t,{relative:e});if(!n.isTransitioning)return!1;let s=On(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=On(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Wl(i.pathname,o)!=null||Wl(i.pathname,s)!=null}var Wg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},z0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(n[d],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new yC;const m=s<<2|l>>4;if(r.push(m),c!==64){const I=l<<4&240|c>>2;if(r.push(I),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _C=function(t){const e=$0(t);return z0.encodeByteArray(e,!0)},Hl=function(t){return _C(t).replace(/\./g,"")},W0=function(t){try{return z0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=()=>vC().__FIREBASE_DEFAULTS__,EC=()=>{if(typeof process>"u"||typeof Wg>"u")return;const t=Wg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&W0(t[1]);return e&&JSON.parse(e)},Cu=()=>{try{return wC()||EC()||TC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},H0=t=>{var e,n;return(n=(e=Cu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},q0=t=>{const e=H0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},K0=()=>{var t;return(t=Cu())===null||t===void 0?void 0:t.config},G0=t=>{var e;return(e=Cu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Hl(JSON.stringify(n)),Hl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function RC(){var t;const e=(t=Cu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function AC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xC(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PC(){return!RC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NC(){try{return typeof indexedDB=="object"}catch{return!1}}function bC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DC,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?OC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new hn(i,l,r)}}function OC(t,e){return t.replace(LC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LC=/\{\$([^}]+)}/g;function VC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ql(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Hg(s)&&Hg(o)){if(!ql(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function MC(t,e){const n=new FC(t,e);return n.subscribe.bind(n)}class FC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hc),i.error===void 0&&(i.error=Hc),i.complete===void 0&&(i.complete=Hc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($C(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BC(t){return t===Or?void 0:t}function $C(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const WC={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},HC=te.INFO,qC={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},KC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xf{constructor(e){this.name=e,this._logLevel=HC,this._logHandler=KC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const GC=(t,e)=>e.some(n=>t instanceof n);let qg,Kg;function QC(){return qg||(qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YC(){return Kg||(Kg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y0=new WeakMap,Zh=new WeakMap,X0=new WeakMap,qc=new WeakMap,Pf=new WeakMap;function XC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Y0.set(n,t)}).catch(()=>{}),Pf.set(e,t),e}function JC(t){if(Zh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zh.set(t,e)}let ed={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||X0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZC(t){ed=t(ed)}function eA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kc(this),e,...n);return X0.set(r,e.sort?e.sort():[e]),dr(r)}:YC().includes(t)?function(...e){return t.apply(Kc(this),e),dr(Y0.get(this))}:function(...e){return dr(t.apply(Kc(this),e))}}function tA(t){return typeof t=="function"?eA(t):(t instanceof IDBTransaction&&JC(t),GC(t,QC())?new Proxy(t,ed):t)}function dr(t){if(t instanceof IDBRequest)return XC(t);if(qc.has(t))return qc.get(t);const e=tA(t);return e!==t&&(qc.set(t,e),Pf.set(e,t)),e}const Kc=t=>Pf.get(t);function nA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(dr(o.result),u.oldVersion,u.newVersion,dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const rA=["get","getKey","getAll","getAllKeys","count"],iA=["put","add","delete","clear"],Gc=new Map;function Gg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gc.get(e))return Gc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=iA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Gc.set(e,s),s}ZC(t=>({...t,get:(e,n,r)=>Gg(e,n)||t.get(e,n,r),has:(e,n)=>!!Gg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const td="@firebase/app",Qg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new xf("@firebase/app"),aA="@firebase/app-compat",lA="@firebase/analytics-compat",uA="@firebase/analytics",cA="@firebase/app-check-compat",hA="@firebase/app-check",dA="@firebase/auth",fA="@firebase/auth-compat",pA="@firebase/database",mA="@firebase/data-connect",gA="@firebase/database-compat",yA="@firebase/functions",_A="@firebase/functions-compat",vA="@firebase/installations",wA="@firebase/installations-compat",EA="@firebase/messaging",TA="@firebase/messaging-compat",IA="@firebase/performance",SA="@firebase/performance-compat",RA="@firebase/remote-config",CA="@firebase/remote-config-compat",AA="@firebase/storage",kA="@firebase/storage-compat",xA="@firebase/firestore",PA="@firebase/vertexai-preview",NA="@firebase/firestore-compat",bA="firebase",DA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="[DEFAULT]",OA={[td]:"fire-core",[aA]:"fire-core-compat",[uA]:"fire-analytics",[lA]:"fire-analytics-compat",[hA]:"fire-app-check",[cA]:"fire-app-check-compat",[dA]:"fire-auth",[fA]:"fire-auth-compat",[pA]:"fire-rtdb",[mA]:"fire-data-connect",[gA]:"fire-rtdb-compat",[yA]:"fire-fn",[_A]:"fire-fn-compat",[vA]:"fire-iid",[wA]:"fire-iid-compat",[EA]:"fire-fcm",[TA]:"fire-fcm-compat",[IA]:"fire-perf",[SA]:"fire-perf-compat",[RA]:"fire-rc",[CA]:"fire-rc-compat",[AA]:"fire-gcs",[kA]:"fire-gcs-compat",[xA]:"fire-fst",[NA]:"fire-fst-compat",[PA]:"fire-vertex","fire-js":"fire-js",[bA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new Map,LA=new Map,rd=new Map;function Yg(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gr(t){const e=t.name;if(rd.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;rd.set(e,t);for(const n of Kl.values())Yg(n,t);for(const n of LA.values())Yg(n,t);return!0}function Au(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new Go("app","Firebase",VA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=DA;function J0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fr.create("bad-app-name",{appName:String(i)});if(n||(n=K0()),!n)throw fr.create("no-options");const s=Kl.get(i);if(s){if(ql(n,s.options)&&ql(r,s.config))return s;throw fr.create("duplicate-app",{appName:i})}const o=new zC(i);for(const u of rd.values())o.addComponent(u);const l=new MA(n,r,o);return Kl.set(i,l),l}function Nf(t=nd){const e=Kl.get(t);if(!e&&t===nd&&K0())return J0();if(!e)throw fr.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let i=(r=OA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}Gr(new yr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="firebase-heartbeat-database",UA=1,No="firebase-heartbeat-store";let Qc=null;function Z0(){return Qc||(Qc=nA(FA,UA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(No)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),Qc}async function jA(t){try{const n=(await Z0()).transaction(No),r=await n.objectStore(No).get(ew(t));return await n.done,r}catch(e){if(e instanceof hn)Ln.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function Xg(t,e){try{const r=(await Z0()).transaction(No,"readwrite");await r.objectStore(No).put(e,ew(t)),await r.done}catch(n){if(n instanceof hn)Ln.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function ew(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=1024,$A=30*24*60*60*1e3;class zA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=$A}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jg(),{heartbeatsToSend:r,unsentEntries:i}=WA(this._heartbeatsCache.heartbeats),s=Hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ln.warn(n),""}}}function Jg(){return new Date().toISOString().substring(0,10)}function WA(t,e=BA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NC()?bC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zg(t){return Hl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t){Gr(new yr("platform-logger",e=>new sA(e),"PRIVATE")),Gr(new yr("heartbeat",e=>new zA(e),"PRIVATE")),tn(td,Qg,t),tn(td,Qg,"esm2017"),tn("fire-js","")}qA("");function bf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function tw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KA=tw,nw=new Go("auth","Firebase",tw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new xf("@firebase/auth");function GA(t,...e){Gl.logLevel<=te.WARN&&Gl.warn(`Auth (${ri}): ${t}`,...e)}function hl(t,...e){Gl.logLevel<=te.ERROR&&Gl.error(`Auth (${ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw Df(t,...e)}function nn(t,...e){return Df(t,...e)}function rw(t,e,n){const r=Object.assign(Object.assign({},KA()),{[e]:n});return new Go("auth","Firebase",r).create(e,{appName:t.name})}function kn(t){return rw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Df(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nw.create(t,...e)}function K(t,e,...n){if(!t)throw Df(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hl(e),new Error(e)}function Vn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QA(){return ey()==="http:"||ey()==="https:"}function ey(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QA()||AC()||"connection"in navigator)?navigator.onLine:!0}function XA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=SC()||kC()}get(){return YA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=new Yo(3e4,6e4);function Rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jn(t,e,n,r,i={}){return sw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Qo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return CC()||(c.referrerPolicy="no-referrer"),iw.fetch()(ow(t,t.config.apiHost,n,l),c)})}async function sw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},JA),e);try{const i=new tk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Wa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Wa(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw rw(t,d,c);qt(t,d)}}catch(i){if(i instanceof hn)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function Xo(t,e,n,r,i={}){const s=await jn(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ow(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Of(t.config,i):`${t.config.apiScheme}://${i}`}function ek(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),ZA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}function ty(t){return t!==void 0&&t.enterprise!==void 0}class nk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ek(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function rk(t,e){return jn(t,"GET","/v2/recaptchaConfig",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ik(t,e){return jn(t,"POST","/v1/accounts:delete",e)}async function aw(t,e){return jn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sk(t,e=!1){const n=ye(t),r=await n.getIdToken(e),i=Lf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:oo(Yc(i.auth_time)),issuedAtTime:oo(Yc(i.iat)),expirationTime:oo(Yc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Yc(t){return Number(t)*1e3}function Lf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hl("JWT malformed, contained fewer than 3 sections"),null;try{const i=W0(n);return i?JSON.parse(i):(hl("Failed to decode base64 JWT payload"),null)}catch(i){return hl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ny(t){const e=Lf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&ok(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ok({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oo(this.lastLoginAt),this.creationTime=oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qi(t,aw(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lw(s.providerUserInfo):[],l=uk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new sd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function lk(t){const e=ye(t);await Ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lw(t){return t.map(e=>{var{providerId:n}=e,r=bf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ck(t,e){const n=await sw(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ow(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",iw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hk(t,e){return jn(t,"POST","/v2/accounts:revokeToken",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ny(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=ny(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ck(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Oi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oi,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=bf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ak(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qi(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sk(this,e)}reload(){return lk(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await qi(this,ik(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:w,emailVerified:x,isAnonymous:L,providerData:M,stsTokenManager:S}=n;K(w&&S,e,"internal-error");const v=Oi.fromJSON(this.name,S);K(typeof w=="string",e,"internal-error"),Hn(p,e.name),Hn(m,e.name),K(typeof x=="boolean",e,"internal-error"),K(typeof L=="boolean",e,"internal-error"),Hn(I,e.name),Hn(A,e.name),Hn(k,e.name),Hn(N,e.name),Hn(g,e.name),Hn(y,e.name);const T=new Sn({uid:w,auth:e,email:m,emailVerified:x,displayName:p,isAnonymous:L,photoURL:A,phoneNumber:I,tenantId:k,stsTokenManager:v,createdAt:g,lastLoginAt:y});return M&&Array.isArray(M)&&(T.providerData=M.map(R=>Object.assign({},R))),N&&(T._redirectEventId=N),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Oi;i.updateFromServerResponse(n);const s=new Sn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ql(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?lw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Oi;l.updateFromIdToken(r);const u=new Sn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new sd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=new Map;function Rn(t){Vn(t instanceof Function,"Expected a class definition");let e=ry.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ry.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uw.type="NONE";const iy=uw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t,e,n){return`firebase:${t}:${e}:${n}`}class Li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Li(Rn(iy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Rn(iy);const o=dl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Sn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Li(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Li(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mw(e))return"Blackberry";if(gw(e))return"Webos";if(hw(e))return"Safari";if((e.includes("chrome/")||dw(e))&&!e.includes("edge/"))return"Chrome";if(pw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cw(t=it()){return/firefox\//i.test(t)}function hw(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dw(t=it()){return/crios\//i.test(t)}function fw(t=it()){return/iemobile/i.test(t)}function pw(t=it()){return/android/i.test(t)}function mw(t=it()){return/blackberry/i.test(t)}function gw(t=it()){return/webos/i.test(t)}function Vf(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dk(t=it()){var e;return Vf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fk(){return xC()&&document.documentMode===10}function yw(t=it()){return Vf(t)||pw(t)||gw(t)||mw(t)||/windows phone/i.test(t)||fw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t,e=[]){let n;switch(t){case"Browser":n=sy(it());break;case"Worker":n=`${sy(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t,e={}){return jn(t,"GET","/v2/passwordPolicy",Rr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=6;class yk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oy(this),this.idTokenSubscription=new oy(this),this.beforeStateQueue=new pk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await aw(this,{idToken:e}),r=await Sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(kn(this));const n=e?ye(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mk(this),n=new yk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_w(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ii(t){return ye(t)}class oy{constructor(e){this.auth=e,this.observer=null,this.addObserver=MC(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vk(t){ku=t}function vw(t){return ku.loadJS(t)}function wk(){return ku.recaptchaEnterpriseScript}function Ek(){return ku.gapiScript}function Tk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ik="recaptcha-enterprise",Sk="NO_RECAPTCHA";class Rk{constructor(e){this.type=Ik,this.auth=ii(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{rk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new nk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;ty(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Sk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&ty(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=wk();u.length!==0&&(u+=l),vw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function ay(t,e,n,r=!1){const i=new Rk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function od(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await ay(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ay(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(t,e){const n=Au(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ql(s,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function Ak(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kk(t,e,n){const r=ii(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ww(e),{host:o,port:l}=xk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Pk()}function ww(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xk(t){const e=ww(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ly(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ly(o)}}}function ly(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Pk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function Nk(t,e){return jn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(t,e){return Xo(t,"POST","/v1/accounts:signInWithPassword",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}async function Ok(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Mf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new bo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new bo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return od(e,n,"signInWithPassword",bk);case"emailLink":return Dk(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return od(e,r,"signUpPassword",Nk);case"emailLink":return Ok(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t,e){return Xo(t,"POST","/v1/accounts:signInWithIdp",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="http://localhost";class Qr extends Mf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=bf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vi(e,n)}buildRequest(){const e={requestUri:Lk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Mk(t){const e=Hs(qs(t)).link,n=e?Hs(qs(e)).deep_link_id:null,r=Hs(qs(t)).deep_link_id;return(r?Hs(qs(r)).link:null)||r||n||e||t}class Ff{constructor(e){var n,r,i,s,o,l;const u=Hs(qs(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=Vk((i=u.mode)!==null&&i!==void 0?i:null);K(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Mk(e);try{return new Ff(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.providerId=ls.PROVIDER_ID}static credential(e,n){return bo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ff.parseLink(n);return K(r,"argument-error"),bo._fromEmailAndCode(e,r.code,r.tenantId)}}ls.PROVIDER_ID="password";ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Ew{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Jo{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Jo{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Jo{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(t,e){return Xo(t,"POST","/v1/accounts:signUp",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Sn._fromIdTokenResponse(e,r,i),o=uy(r);return new Yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=uy(r);return new Yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function uy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yl(e,n,r,i)}}function Tw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yl._fromErrorAndOperation(t,s,e,r):s})}async function Uk(t,e,n=!1){const r=await qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e,n=!1){const{auth:r}=t;if(Xt(r.app))return Promise.reject(kn(r));const i="reauthenticate";try{const s=await qi(t,Tw(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Lf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(t,e,n=!1){if(Xt(t.app))return Promise.reject(kn(t));const r="signIn",i=await Tw(t,r,e),s=await Yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Bk(t,e){return Iw(ii(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(t){const e=ii(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $k(t,e,n){if(Xt(t.app))return Promise.reject(kn(t));const r=ii(t),o=await od(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Sw(t),u}),l=await Yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function zk(t,e,n){return Xt(t.app)?Promise.reject(kn(t)):Bk(ye(t),ls.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e){return jn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ye(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qi(r,Wk(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t,e){return ye(t).setPersistence(e)}function Kk(t,e,n,r){return ye(t).onIdTokenChanged(e,n,r)}function Gk(t,e,n){return ye(t).beforeAuthStateChanged(e,n)}function Rw(t,e,n,r){return ye(t).onAuthStateChanged(e,n,r)}function Cw(t){return ye(t).signOut()}const Xl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xl,"1"),this.storage.removeItem(Xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=1e3,Yk=10;class kw extends Aw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Yk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kw.type="LOCAL";const xw=kw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw extends Aw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pw.type="SESSION";const Nw=Pw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Xk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Uf("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function Zk(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function ex(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nx(){return bw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="firebaseLocalStorageDb",rx=1,Jl="firebaseLocalStorage",Ow="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pu(t,e){return t.transaction([Jl],e?"readwrite":"readonly").objectStore(Jl)}function ix(){const t=indexedDB.deleteDatabase(Dw);return new Zo(t).toPromise()}function ad(){const t=indexedDB.open(Dw,rx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jl,{keyPath:Ow})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jl)?e(r):(r.close(),await ix(),e(await ad()))})})}async function cy(t,e,n){const r=Pu(t,!0).put({[Ow]:e,value:n});return new Zo(r).toPromise()}async function sx(t,e){const n=Pu(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function hy(t,e){const n=Pu(t,!0).delete(e);return new Zo(n).toPromise()}const ox=800,ax=3;class Lw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ad(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ax)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xu._getInstance(nx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ex(),!this.activeServiceWorker)return;this.sender=new Jk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ad();return await cy(e,Xl,"1"),await hy(e,Xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pu(i,!1).getAll();return new Zo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ox)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lw.type="LOCAL";const lx=Lw;new Yo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(t,e){return e?Rn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf extends Mf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cx(t){return Iw(t.auth,new jf(t),t.bypassAuthState)}function hx(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),jk(n,new jf(t),t.bypassAuthState)}async function dx(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Uk(n,new jf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cx;case"linkViaPopup":case"linkViaRedirect":return dx;case"reauthViaPopup":case"reauthViaRedirect":return hx;default:qt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=new Yo(2e3,1e4);class Ai extends Vw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ai.currentPopupAction&&Ai.currentPopupAction.cancel(),Ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Uf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fx.get())};e()}}Ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px="pendingRedirect",fl=new Map;class mx extends Vw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fl.get(this.auth._key());if(!e){try{const r=await gx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fl.set(this.auth._key(),e)}return this.bypassAuthState||fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gx(t,e){const n=vx(e),r=_x(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function yx(t,e){fl.set(t._key(),e)}function _x(t){return Rn(t._redirectPersistence)}function vx(t){return dl(px,t.config.apiKey,t.name)}async function wx(t,e,n=!1){if(Xt(t.app))return Promise.reject(kn(t));const r=ii(t),i=ux(r,e),o=await new mx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=10*60*1e3;class Tx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ix(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ex&&this.cachedEventUids.clear(),this.cachedEventUids.has(dy(e))}saveEventToCache(e){this.cachedEventUids.add(dy(e)),this.lastProcessedEventTime=Date.now()}}function dy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ix(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(t,e={}){return jn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cx=/^https?/;async function Ax(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Sx(t);for(const n of e)try{if(kx(n))return}catch{}qt(t,"unauthorized-domain")}function kx(t){const e=id(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Cx.test(n))return!1;if(Rx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=new Yo(3e4,6e4);function fy(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Px(t){return new Promise((e,n)=>{var r,i,s;function o(){fy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fy(),n(nn(t,"network-request-failed"))},timeout:xx.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const l=Tk("iframefcb");return rn()[l]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},vw(`${Ek()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw pl=null,e})}let pl=null;function Nx(t){return pl=pl||Px(t),pl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=new Yo(5e3,15e3),Dx="__/auth/iframe",Ox="emulator/auth/iframe",Lx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mx(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Of(e,Ox):`https://${t.config.authDomain}/${Dx}`,r={apiKey:e.apiKey,appName:t.name,v:ri},i=Vx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qo(r).slice(1)}`}async function Fx(t){const e=await Nx(t),n=rn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:Mx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),l=rn().setTimeout(()=>{s(o)},bx.get());function u(){rn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jx=500,Bx=600,$x="_blank",zx="http://localhost";class py{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wx(t,e,n,r=jx,i=Bx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Ux),{width:r.toString(),height:i.toString(),top:s,left:o}),c=it().toLowerCase();n&&(l=dw(c)?$x:n),cw(c)&&(e=e||zx,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[I,A])=>`${m}${I}=${A},`,"");if(dk(c)&&l!=="_self")return Hx(e||"",l),new py(null);const p=window.open(e||"",l,d);K(p,t,"popup-blocked");try{p.focus()}catch{}return new py(p)}function Hx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx="__/auth/handler",Kx="emulator/auth/handler",Gx=encodeURIComponent("fac");async function my(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:i};if(e instanceof Ew){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Jo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Gx}=${encodeURIComponent(u)}`:"";return`${Qx(t)}?${Qo(l).slice(1)}${c}`}function Qx({config:t}){return t.emulator?Of(t,Kx):`https://${t.authDomain}/${qx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="webStorageSupport";class Yx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nw,this._completeRedirectFn=wx,this._overrideRedirectResult=yx}async _openPopup(e,n,r,i){var s;Vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await my(e,n,r,id(),i);return Wx(e,o,Uf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await my(e,n,r,id(),i);return Zk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Fx(e),r=new Tx(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xc,{type:Xc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xc];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ax(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yw()||hw()||Vf()}}const Xx=Yx;var gy="@firebase/auth",yy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eP(t){Gr(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_w(t)},c=new _k(r,i,s,u);return Ak(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gr(new yr("auth-internal",e=>{const n=ii(e.getProvider("auth").getImmediate());return(r=>new Jx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(gy,yy,Zx(t)),tn(gy,yy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=5*60,nP=G0("authIdTokenMaxAge")||tP;let _y=null;const rP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nP)return;const i=n==null?void 0:n.token;_y!==i&&(_y=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Fw(t=Nf()){const e=Au(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ck(t,{popupRedirectResolver:Xx,persistence:[lx,xw,Nw]}),r=G0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=rP(s.toString());Gk(n,o,()=>o(n.currentUser)),Kk(n,l=>o(l))}}const i=H0("auth");return i&&kk(n,`http://${i}`),n}function iP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eP("Browser");var sP="firebase",oP="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(sP,oP,"app");var vy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,Uw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function T(){}T.prototype=v.prototype,S.D=v.prototype,S.prototype=new T,S.prototype.constructor=S,S.C=function(R,P,O){for(var C=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)C[xt-2]=arguments[xt];return v.prototype[P].apply(R,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,v,T){T||(T=0);var R=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)R[P]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(P=0;16>P;++P)R[P]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=S.g[0],T=S.g[1],P=S.g[2];var O=S.g[3],C=v+(O^T&(P^O))+R[0]+3614090360&4294967295;v=T+(C<<7&4294967295|C>>>25),C=O+(P^v&(T^P))+R[1]+3905402710&4294967295,O=v+(C<<12&4294967295|C>>>20),C=P+(T^O&(v^T))+R[2]+606105819&4294967295,P=O+(C<<17&4294967295|C>>>15),C=T+(v^P&(O^v))+R[3]+3250441966&4294967295,T=P+(C<<22&4294967295|C>>>10),C=v+(O^T&(P^O))+R[4]+4118548399&4294967295,v=T+(C<<7&4294967295|C>>>25),C=O+(P^v&(T^P))+R[5]+1200080426&4294967295,O=v+(C<<12&4294967295|C>>>20),C=P+(T^O&(v^T))+R[6]+2821735955&4294967295,P=O+(C<<17&4294967295|C>>>15),C=T+(v^P&(O^v))+R[7]+4249261313&4294967295,T=P+(C<<22&4294967295|C>>>10),C=v+(O^T&(P^O))+R[8]+1770035416&4294967295,v=T+(C<<7&4294967295|C>>>25),C=O+(P^v&(T^P))+R[9]+2336552879&4294967295,O=v+(C<<12&4294967295|C>>>20),C=P+(T^O&(v^T))+R[10]+4294925233&4294967295,P=O+(C<<17&4294967295|C>>>15),C=T+(v^P&(O^v))+R[11]+2304563134&4294967295,T=P+(C<<22&4294967295|C>>>10),C=v+(O^T&(P^O))+R[12]+1804603682&4294967295,v=T+(C<<7&4294967295|C>>>25),C=O+(P^v&(T^P))+R[13]+4254626195&4294967295,O=v+(C<<12&4294967295|C>>>20),C=P+(T^O&(v^T))+R[14]+2792965006&4294967295,P=O+(C<<17&4294967295|C>>>15),C=T+(v^P&(O^v))+R[15]+1236535329&4294967295,T=P+(C<<22&4294967295|C>>>10),C=v+(P^O&(T^P))+R[1]+4129170786&4294967295,v=T+(C<<5&4294967295|C>>>27),C=O+(T^P&(v^T))+R[6]+3225465664&4294967295,O=v+(C<<9&4294967295|C>>>23),C=P+(v^T&(O^v))+R[11]+643717713&4294967295,P=O+(C<<14&4294967295|C>>>18),C=T+(O^v&(P^O))+R[0]+3921069994&4294967295,T=P+(C<<20&4294967295|C>>>12),C=v+(P^O&(T^P))+R[5]+3593408605&4294967295,v=T+(C<<5&4294967295|C>>>27),C=O+(T^P&(v^T))+R[10]+38016083&4294967295,O=v+(C<<9&4294967295|C>>>23),C=P+(v^T&(O^v))+R[15]+3634488961&4294967295,P=O+(C<<14&4294967295|C>>>18),C=T+(O^v&(P^O))+R[4]+3889429448&4294967295,T=P+(C<<20&4294967295|C>>>12),C=v+(P^O&(T^P))+R[9]+568446438&4294967295,v=T+(C<<5&4294967295|C>>>27),C=O+(T^P&(v^T))+R[14]+3275163606&4294967295,O=v+(C<<9&4294967295|C>>>23),C=P+(v^T&(O^v))+R[3]+4107603335&4294967295,P=O+(C<<14&4294967295|C>>>18),C=T+(O^v&(P^O))+R[8]+1163531501&4294967295,T=P+(C<<20&4294967295|C>>>12),C=v+(P^O&(T^P))+R[13]+2850285829&4294967295,v=T+(C<<5&4294967295|C>>>27),C=O+(T^P&(v^T))+R[2]+4243563512&4294967295,O=v+(C<<9&4294967295|C>>>23),C=P+(v^T&(O^v))+R[7]+1735328473&4294967295,P=O+(C<<14&4294967295|C>>>18),C=T+(O^v&(P^O))+R[12]+2368359562&4294967295,T=P+(C<<20&4294967295|C>>>12),C=v+(T^P^O)+R[5]+4294588738&4294967295,v=T+(C<<4&4294967295|C>>>28),C=O+(v^T^P)+R[8]+2272392833&4294967295,O=v+(C<<11&4294967295|C>>>21),C=P+(O^v^T)+R[11]+1839030562&4294967295,P=O+(C<<16&4294967295|C>>>16),C=T+(P^O^v)+R[14]+4259657740&4294967295,T=P+(C<<23&4294967295|C>>>9),C=v+(T^P^O)+R[1]+2763975236&4294967295,v=T+(C<<4&4294967295|C>>>28),C=O+(v^T^P)+R[4]+1272893353&4294967295,O=v+(C<<11&4294967295|C>>>21),C=P+(O^v^T)+R[7]+4139469664&4294967295,P=O+(C<<16&4294967295|C>>>16),C=T+(P^O^v)+R[10]+3200236656&4294967295,T=P+(C<<23&4294967295|C>>>9),C=v+(T^P^O)+R[13]+681279174&4294967295,v=T+(C<<4&4294967295|C>>>28),C=O+(v^T^P)+R[0]+3936430074&4294967295,O=v+(C<<11&4294967295|C>>>21),C=P+(O^v^T)+R[3]+3572445317&4294967295,P=O+(C<<16&4294967295|C>>>16),C=T+(P^O^v)+R[6]+76029189&4294967295,T=P+(C<<23&4294967295|C>>>9),C=v+(T^P^O)+R[9]+3654602809&4294967295,v=T+(C<<4&4294967295|C>>>28),C=O+(v^T^P)+R[12]+3873151461&4294967295,O=v+(C<<11&4294967295|C>>>21),C=P+(O^v^T)+R[15]+530742520&4294967295,P=O+(C<<16&4294967295|C>>>16),C=T+(P^O^v)+R[2]+3299628645&4294967295,T=P+(C<<23&4294967295|C>>>9),C=v+(P^(T|~O))+R[0]+4096336452&4294967295,v=T+(C<<6&4294967295|C>>>26),C=O+(T^(v|~P))+R[7]+1126891415&4294967295,O=v+(C<<10&4294967295|C>>>22),C=P+(v^(O|~T))+R[14]+2878612391&4294967295,P=O+(C<<15&4294967295|C>>>17),C=T+(O^(P|~v))+R[5]+4237533241&4294967295,T=P+(C<<21&4294967295|C>>>11),C=v+(P^(T|~O))+R[12]+1700485571&4294967295,v=T+(C<<6&4294967295|C>>>26),C=O+(T^(v|~P))+R[3]+2399980690&4294967295,O=v+(C<<10&4294967295|C>>>22),C=P+(v^(O|~T))+R[10]+4293915773&4294967295,P=O+(C<<15&4294967295|C>>>17),C=T+(O^(P|~v))+R[1]+2240044497&4294967295,T=P+(C<<21&4294967295|C>>>11),C=v+(P^(T|~O))+R[8]+1873313359&4294967295,v=T+(C<<6&4294967295|C>>>26),C=O+(T^(v|~P))+R[15]+4264355552&4294967295,O=v+(C<<10&4294967295|C>>>22),C=P+(v^(O|~T))+R[6]+2734768916&4294967295,P=O+(C<<15&4294967295|C>>>17),C=T+(O^(P|~v))+R[13]+1309151649&4294967295,T=P+(C<<21&4294967295|C>>>11),C=v+(P^(T|~O))+R[4]+4149444226&4294967295,v=T+(C<<6&4294967295|C>>>26),C=O+(T^(v|~P))+R[11]+3174756917&4294967295,O=v+(C<<10&4294967295|C>>>22),C=P+(v^(O|~T))+R[2]+718787259&4294967295,P=O+(C<<15&4294967295|C>>>17),C=T+(O^(P|~v))+R[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(P+(C<<21&4294967295|C>>>11))&4294967295,S.g[2]=S.g[2]+P&4294967295,S.g[3]=S.g[3]+O&4294967295}r.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var T=v-this.blockSize,R=this.B,P=this.h,O=0;O<v;){if(P==0)for(;O<=T;)i(this,S,O),O+=this.blockSize;if(typeof S=="string"){for(;O<v;)if(R[P++]=S.charCodeAt(O++),P==this.blockSize){i(this,R),P=0;break}}else for(;O<v;)if(R[P++]=S[O++],P==this.blockSize){i(this,R),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var T=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=T&255,T/=256;for(this.u(S),S=Array(16),v=T=0;4>v;++v)for(var R=0;32>R;R+=8)S[T++]=this.g[v]>>>R&255;return S};function s(S,v){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=v(S)}function o(S,v){this.h=v;for(var T=[],R=!0,P=S.length-1;0<=P;P--){var O=S[P]|0;R&&O==v||(T[P]=O,R=!1)}this.g=T}var l={};function u(S){return-128<=S&&128>S?s(S,function(v){return new o([v|0],0>v?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return p;if(0>S)return N(c(-S));for(var v=[],T=1,R=0;S>=T;R++)v[R]=S/T|0,T*=4294967296;return new o(v,0)}function d(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return N(d(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(v,8)),R=p,P=0;P<S.length;P+=8){var O=Math.min(8,S.length-P),C=parseInt(S.substring(P,P+O),v);8>O?(O=c(Math.pow(v,O)),R=R.j(O).add(c(C))):(R=R.j(T),R=R.add(c(C)))}return R}var p=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();for(var S=0,v=1,T=0;T<this.g.length;T++){var R=this.i(T);S+=(0<=R?R:4294967296+R)*v,v*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(A(this))return"0";if(k(this))return"-"+N(this).toString(S);for(var v=c(Math.pow(S,6)),T=this,R="";;){var P=x(T,v).g;T=g(T,P.j(v));var O=((0<T.g.length?T.g[0]:T.h)>>>0).toString(S);if(T=P,A(T))return O+R;for(;6>O.length;)O="0"+O;R=O+R}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function A(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function k(S){return S.h==-1}t.l=function(S){return S=g(this,S),k(S)?-1:A(S)?0:1};function N(S){for(var v=S.g.length,T=[],R=0;R<v;R++)T[R]=~S.g[R];return new o(T,~S.h).add(m)}t.abs=function(){return k(this)?N(this):this},t.add=function(S){for(var v=Math.max(this.g.length,S.g.length),T=[],R=0,P=0;P<=v;P++){var O=R+(this.i(P)&65535)+(S.i(P)&65535),C=(O>>>16)+(this.i(P)>>>16)+(S.i(P)>>>16);R=C>>>16,O&=65535,C&=65535,T[P]=C<<16|O}return new o(T,T[T.length-1]&-2147483648?-1:0)};function g(S,v){return S.add(N(v))}t.j=function(S){if(A(this)||A(S))return p;if(k(this))return k(S)?N(this).j(N(S)):N(N(this).j(S));if(k(S))return N(this.j(N(S)));if(0>this.l(I)&&0>S.l(I))return c(this.m()*S.m());for(var v=this.g.length+S.g.length,T=[],R=0;R<2*v;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(var P=0;P<S.g.length;P++){var O=this.i(R)>>>16,C=this.i(R)&65535,xt=S.i(P)>>>16,Ar=S.i(P)&65535;T[2*R+2*P]+=C*Ar,y(T,2*R+2*P),T[2*R+2*P+1]+=O*Ar,y(T,2*R+2*P+1),T[2*R+2*P+1]+=C*xt,y(T,2*R+2*P+1),T[2*R+2*P+2]+=O*xt,y(T,2*R+2*P+2)}for(R=0;R<v;R++)T[R]=T[2*R+1]<<16|T[2*R];for(R=v;R<2*v;R++)T[R]=0;return new o(T,0)};function y(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function w(S,v){this.g=S,this.h=v}function x(S,v){if(A(v))throw Error("division by zero");if(A(S))return new w(p,p);if(k(S))return v=x(N(S),v),new w(N(v.g),N(v.h));if(k(v))return v=x(S,N(v)),new w(N(v.g),v.h);if(30<S.g.length){if(k(S)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var T=m,R=v;0>=R.l(S);)T=L(T),R=L(R);var P=M(T,1),O=M(R,1);for(R=M(R,2),T=M(T,2);!A(R);){var C=O.add(R);0>=C.l(S)&&(P=P.add(T),O=C),R=M(R,1),T=M(T,1)}return v=g(S,P.j(v)),new w(P,v)}for(P=p;0<=S.l(v);){for(T=Math.max(1,Math.floor(S.m()/v.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),O=c(T),C=O.j(v);k(C)||0<C.l(S);)T-=R,O=c(T),C=O.j(v);A(O)&&(O=m),P=P.add(O),S=g(S,C)}return new w(P,S)}t.A=function(S){return x(this,S).h},t.and=function(S){for(var v=Math.max(this.g.length,S.g.length),T=[],R=0;R<v;R++)T[R]=this.i(R)&S.i(R);return new o(T,this.h&S.h)},t.or=function(S){for(var v=Math.max(this.g.length,S.g.length),T=[],R=0;R<v;R++)T[R]=this.i(R)|S.i(R);return new o(T,this.h|S.h)},t.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),T=[],R=0;R<v;R++)T[R]=this.i(R)^S.i(R);return new o(T,this.h^S.h)};function L(S){for(var v=S.g.length+1,T=[],R=0;R<v;R++)T[R]=S.i(R)<<1|S.i(R-1)>>>31;return new o(T,S.h)}function M(S,v){var T=v>>5;v%=32;for(var R=S.g.length-T,P=[],O=0;O<R;O++)P[O]=0<v?S.i(O+T)>>>v|S.i(O+T+1)<<32-v:S.i(O+T);return new o(P,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Uw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Br=o}).apply(typeof vy<"u"?vy:typeof self<"u"?self:typeof window<"u"?window:{});var Ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jw,Ks,Bw,ml,ld,$w,zw,Ww;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ha=="object"&&Ha];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in f))break e;f=f[D]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,_=!1,D={next:function(){if(!_&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function I(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,D,V){for(var B=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)B[ue-2]=arguments[ue];return h.prototype[D].apply(_,B)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function N(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(u(_)){const D=a.length||0,V=_.length||0;a.length=D+V;for(let B=0;B<V;B++)a[D+B]=_[B]}else a.push(_)}}class g{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(a){return/^[\s\xa0]*$/.test(a)}function w(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var L=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function M(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function S(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,h){let f,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(f in _)a[f]=_[f];for(let V=0;V<T.length;V++)f=T[V],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function P(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function O(a){l.setTimeout(()=>{throw a},0)}function C(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class xt{constructor(){this.h=this.g=null}add(h,f){const _=Ar.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var Ar=new g(()=>new ms,a=>a.reset());class ms{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let dn,$=!1,Q=new xt,J=()=>{const a=l.Promise.resolve(void 0);dn=()=>{a.then(_e)}};var _e=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(f){O(f)}var h=Ar;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var fn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function pn(a,h){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{x(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:mn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&pn.aa.h.call(this)}}A(pn,ke);var mn={2:"touch",3:"pen",4:"mouse"};pn.prototype.h=function(){pn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gn="closure_listenable_"+(1e6*Math.random()|0),LT=0;function VT(a,h,f,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=D,this.key=++LT,this.da=this.fa=!1}function la(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ua(a){this.src=a,this.g={},this.h=0}ua.prototype.add=function(a,h,f,_,D){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var B=Gu(a,h,_,D);return-1<B?(h=a[B],f||(h.fa=!1)):(h=new VT(h,this.src,V,!!_,D),h.fa=f,a.push(h)),h};function Ku(a,h){var f=h.type;if(f in a.g){var _=a.g[f],D=Array.prototype.indexOf.call(_,h,void 0),V;(V=0<=D)&&Array.prototype.splice.call(_,D,1),V&&(la(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Gu(a,h,f,_){for(var D=0;D<a.length;++D){var V=a[D];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==_)return D}return-1}var Qu="closure_lm_"+(1e6*Math.random()|0),Yu={};function Pp(a,h,f,_,D){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Pp(a,h[V],f,_,D);return null}return f=Dp(f),a&&a[gn]?a.K(h,f,c(_)?!!_.capture:!1,D):MT(a,h,f,!1,_,D)}function MT(a,h,f,_,D,V){if(!h)throw Error("Invalid event type");var B=c(D)?!!D.capture:!!D,ue=Ju(a);if(ue||(a[Qu]=ue=new ua(a)),f=ue.add(h,f,_,B,V),f.proxy)return f;if(_=FT(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)fn||(D=B),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(bp(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function FT(){function a(f){return h.call(a.src,a.listener,f)}const h=UT;return a}function Np(a,h,f,_,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)Np(a,h[V],f,_,D);else _=c(_)?!!_.capture:!!_,f=Dp(f),a&&a[gn]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=Gu(V,f,_,D),-1<f&&(la(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Ju(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Gu(h,f,_,D)),(f=-1<a?h[a]:null)&&Xu(f))}function Xu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[gn])Ku(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(bp(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=Ju(h))?(Ku(f,a),f.h==0&&(f.src=null,h[Qu]=null)):la(a)}}}function bp(a){return a in Yu?Yu[a]:Yu[a]="on"+a}function UT(a,h){if(a.da)a=!0;else{h=new pn(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&Xu(a),a=f.call(_,h)}return a}function Ju(a){return a=a[Qu],a instanceof ua?a:null}var Zu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dp(a){return typeof a=="function"?a:(a[Zu]||(a[Zu]=function(h){return a.handleEvent(h)}),a[Zu])}function Ge(){le.call(this),this.i=new ua(this),this.M=this,this.F=null}A(Ge,le),Ge.prototype[gn]=!0,Ge.prototype.removeEventListener=function(a,h,f,_){Np(this,a,h,f,_)};function st(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new ke(h,a);else if(h instanceof ke)h.target=h.target||a;else{var D=h;h=new ke(_,a),R(h,D)}if(D=!0,f)for(var V=f.length-1;0<=V;V--){var B=h.g=f[V];D=ca(B,_,!0,h)&&D}if(B=h.g=a,D=ca(B,_,!0,h)&&D,D=ca(B,_,!1,h)&&D,f)for(V=0;V<f.length;V++)B=h.g=f[V],D=ca(B,_,!1,h)&&D}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)la(f[_]);delete a.g[h],a.h--}}this.F=null},Ge.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},Ge.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function ca(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,V=0;V<h.length;++V){var B=h[V];if(B&&!B.da&&B.capture==f){var ue=B.listener,je=B.ha||B.src;B.fa&&Ku(a.i,B),D=ue.call(je,_)!==!1&&D}}return D&&!_.defaultPrevented}function Op(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Lp(a){a.g=Op(()=>{a.g=null,a.i&&(a.i=!1,Lp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class jT extends le{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Lp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(a){le.call(this),this.h=a,this.g={}}A(gs,le);var Vp=[];function Mp(a){M(a.g,function(h,f){this.g.hasOwnProperty(f)&&Xu(h)},a),a.g={}}gs.prototype.N=function(){gs.aa.N.call(this),Mp(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ec=l.JSON.stringify,BT=l.JSON.parse,$T=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function tc(){}tc.prototype.h=null;function Fp(a){return a.h||(a.h=a.i())}function Up(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nc(){ke.call(this,"d")}A(nc,ke);function rc(){ke.call(this,"c")}A(rc,ke);var kr={},jp=null;function ha(){return jp=jp||new Ge}kr.La="serverreachability";function Bp(a){ke.call(this,kr.La,a)}A(Bp,ke);function _s(a){const h=ha();st(h,new Bp(h))}kr.STAT_EVENT="statevent";function $p(a,h){ke.call(this,kr.STAT_EVENT,a),this.stat=h}A($p,ke);function ot(a){const h=ha();st(h,new $p(h,a))}kr.Ma="timingevent";function zp(a,h){ke.call(this,kr.Ma,a),this.size=h}A(zp,ke);function vs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ws(){this.g=!0}ws.prototype.xa=function(){this.g=!1};function zT(a,h,f,_,D,V){a.info(function(){if(a.g)if(V)for(var B="",ue=V.split("&"),je=0;je<ue.length;je++){var ie=ue[je].split("=");if(1<ie.length){var Qe=ie[0];ie=ie[1];var Ye=Qe.split("_");B=2<=Ye.length&&Ye[1]=="type"?B+(Qe+"="+ie+"&"):B+(Qe+"=redacted&")}}else B=null;else B=V;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+f+`
`+B})}function WT(a,h,f,_,D,V,B){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+f+`
`+V+" "+B})}function ai(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+qT(a,f)+(_?" "+_:"")})}function HT(a,h){a.info(function(){return"TIMEOUT: "+h})}ws.prototype.info=function(){};function qT(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var V=D[0];if(V!="noop"&&V!="stop"&&V!="close")for(var B=1;B<D.length;B++)D[B]=""}}}}return ec(f)}catch{return h}}var da={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ic;function fa(){}A(fa,tc),fa.prototype.g=function(){return new XMLHttpRequest},fa.prototype.i=function(){return{}},ic=new fa;function Bn(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new gs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hp}function Hp(){this.i=null,this.g="",this.h=!1}var qp={},sc={};function oc(a,h,f){a.L=1,a.v=ya(yn(h)),a.m=f,a.P=!0,Kp(a,null)}function Kp(a,h){a.F=Date.now(),pa(a),a.A=yn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),am(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Hp,a.g=Rm(a.j,f?h:null,!a.m),0<a.O&&(a.M=new jT(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(Vp[0]=D.toString()),D=Vp);for(var V=0;V<D.length;V++){var B=Pp(f,D[V],_||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),_s(),zT(a.i,a.u,a.A,a.l,a.R,a.m)}Bn.prototype.ca=function(a){a=a.target;const h=this.M;h&&_n(a)==3?h.j():this.Y(a)},Bn.prototype.Y=function(a){try{if(a==this.g)e:{const Ye=_n(this.g);var h=this.g.Ba();const ci=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||pm(this.g)))){this.J||Ye!=4||h==7||(h==8||0>=ci?_s(3):_s(2)),ac(this);var f=this.g.Z();this.X=f;t:if(Gp(this)){var _=pm(this.g);a="";var D=_.length,V=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xr(this),Es(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(V&&h==D-1)});_.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,WT(this.i,this.u,this.A,this.l,this.R,Ye,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,je=this.g;if((ue=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ue)){var ie=ue;break t}}ie=null}if(f=ie)ai(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lc(this,f);else{this.o=!1,this.s=3,ot(12),xr(this),Es(this);break e}}if(this.P){f=!0;let Vt;for(;!this.J&&this.C<B.length;)if(Vt=KT(this,B),Vt==sc){Ye==4&&(this.s=4,ot(14),f=!1),ai(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==qp){this.s=4,ot(15),ai(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else ai(this.i,this.l,Vt,null),lc(this,Vt);if(Gp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||B.length!=0||this.h.h||(this.s=1,ot(16),f=!1),this.o=this.o&&f,!f)ai(this.i,this.l,B,"[Invalid Chunked Response]"),xr(this),Es(this);else if(0<B.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),pc(Qe),Qe.M=!0,ot(11))}}else ai(this.i,this.l,B,null),lc(this,B);Ye==4&&xr(this),this.o&&!this.J&&(Ye==4?Em(this.j,this):(this.o=!1,pa(this)))}else cI(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),xr(this),Es(this)}}}catch{}finally{}};function Gp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function KT(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?sc:(f=Number(h.substring(f,_)),isNaN(f)?qp:(_+=1,_+f>h.length?sc:(h=h.slice(_,_+f),a.C=_+f,h)))}Bn.prototype.cancel=function(){this.J=!0,xr(this)};function pa(a){a.S=Date.now()+a.I,Qp(a,a.I)}function Qp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vs(m(a.ba,a),h)}function ac(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(HT(this.i,this.A),this.L!=2&&(_s(),ot(17)),xr(this),this.s=2,Es(this)):Qp(this,this.S-a)};function Es(a){a.j.G==0||a.J||Em(a.j,a)}function xr(a){ac(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Mp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function lc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||uc(f.h,a))){if(!a.K&&uc(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ia(f),Ea(f);else break e;fc(f),ot(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=vs(m(f.Za,f),6e3));if(1>=Jp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Nr(f,11)}else if((a.K||f.g==a)&&Ia(f),!y(h))for(D=f.Da.g.parse(h),h=0;h<D.length;h++){let ie=D[h];if(f.T=ie[0],ie=ie[1],f.G==2)if(ie[0]=="c"){f.K=ie[1],f.ia=ie[2];const Qe=ie[3];Qe!=null&&(f.la=Qe,f.j.info("VER="+f.la));const Ye=ie[4];Ye!=null&&(f.Aa=Ye,f.j.info("SVER="+f.Aa));const ci=ie[5];ci!=null&&typeof ci=="number"&&0<ci&&(_=1.5*ci,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const Vt=a.g;if(Vt){const Ra=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ra){var V=_.h;V.g||Ra.indexOf("spdy")==-1&&Ra.indexOf("quic")==-1&&Ra.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(cc(V,V.h),V.h=null))}if(_.D){const mc=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;mc&&(_.ya=mc,he(_.I,_.D,mc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var B=a;if(_.qa=Sm(_,_.J?_.ia:null,_.W),B.K){Zp(_.h,B);var ue=B,je=_.L;je&&(ue.I=je),ue.B&&(ac(ue),pa(ue)),_.g=B}else vm(_);0<f.i.length&&Ta(f)}else ie[0]!="stop"&&ie[0]!="close"||Nr(f,7);else f.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Nr(f,7):dc(f):ie[0]!="noop"&&f.l&&f.l.ta(ie),f.v=0)}}_s(4)}catch{}}var GT=class{constructor(a,h){this.g=a,this.map=h}};function Yp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Jp(a){return a.h?1:a.g?a.g.size:0}function uc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function cc(a,h){a.g?a.g.add(h):a.h=h}function Zp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Yp.prototype.cancel=function(){if(this.i=em(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function em(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function QT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function YT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function tm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=YT(a),_=QT(a),D=_.length,V=0;V<D;V++)h.call(void 0,_[V],f&&f[V],a)}var nm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XT(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),D=null;if(0<=_){var V=a[f].substring(0,_);D=a[f].substring(_+1)}else V=a[f];h(V,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Pr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Pr){this.h=a.h,ma(this,a.j),this.o=a.o,this.g=a.g,ga(this,a.s),this.l=a.l;var h=a.i,f=new Ss;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),rm(this,f),this.m=a.m}else a&&(h=String(a).match(nm))?(this.h=!1,ma(this,h[1]||"",!0),this.o=Ts(h[2]||""),this.g=Ts(h[3]||"",!0),ga(this,h[4]),this.l=Ts(h[5]||"",!0),rm(this,h[6]||"",!0),this.m=Ts(h[7]||"")):(this.h=!1,this.i=new Ss(null,this.h))}Pr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Is(h,im,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Is(h,im,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Is(f,f.charAt(0)=="/"?eI:ZT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Is(f,nI)),a.join("")};function yn(a){return new Pr(a)}function ma(a,h,f){a.j=f?Ts(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ga(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function rm(a,h,f){h instanceof Ss?(a.i=h,rI(a.i,a.h)):(f||(h=Is(h,tI)),a.i=new Ss(h,a.h))}function he(a,h,f){a.i.set(h,f)}function ya(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ts(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Is(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,JT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function JT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var im=/[#\/\?@]/g,ZT=/[#\?:]/g,eI=/[#\?]/g,tI=/[#\?@]/g,nI=/#/g;function Ss(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function $n(a){a.g||(a.g=new Map,a.h=0,a.i&&XT(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ss.prototype,t.add=function(a,h){$n(this),this.i=null,a=li(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function sm(a,h){$n(a),h=li(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function om(a,h){return $n(a),h=li(a,h),a.g.has(h)}t.forEach=function(a,h){$n(this),this.g.forEach(function(f,_){f.forEach(function(D){a.call(h,D,_,this)},this)},this)},t.na=function(){$n(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const D=a[_];for(let V=0;V<D.length;V++)f.push(h[_])}return f},t.V=function(a){$n(this);let h=[];if(typeof a=="string")om(this,a)&&(h=h.concat(this.g.get(li(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return $n(this),this.i=null,a=li(this,a),om(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function am(a,h,f){sm(a,h),0<f.length&&(a.i=null,a.g.set(li(a,h),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const V=encodeURIComponent(String(_)),B=this.V(_);for(_=0;_<B.length;_++){var D=V;B[_]!==""&&(D+="="+encodeURIComponent(String(B[_]))),a.push(D)}}return this.i=a.join("&")};function li(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function rI(a,h){h&&!a.j&&($n(a),a.i=null,a.g.forEach(function(f,_){var D=_.toLowerCase();_!=D&&(sm(this,_),am(this,D,f))},a)),a.j=h}function iI(a,h){const f=new ws;if(l.Image){const _=new Image;_.onload=I(zn,f,"TestLoadImage: loaded",!0,h,_),_.onerror=I(zn,f,"TestLoadImage: error",!1,h,_),_.onabort=I(zn,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=I(zn,f,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function sI(a,h){const f=new ws,_=new AbortController,D=setTimeout(()=>{_.abort(),zn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(D),V.ok?zn(f,"TestPingServer: ok",!0,h):zn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),zn(f,"TestPingServer: error",!1,h)})}function zn(a,h,f,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(f)}catch{}}function oI(){this.g=new $T}function aI(a,h,f){const _=f||"";try{tm(a,function(D,V){let B=D;c(D)&&(B=ec(D)),h.push(_+V+"="+encodeURIComponent(B))})}catch(D){throw h.push(_+"type="+encodeURIComponent("_badmap")),D}}function _a(a){this.l=a.Ub||null,this.j=a.eb||!1}A(_a,tc),_a.prototype.g=function(){return new va(this.l,this.j)},_a.prototype.i=function(a){return function(){return a}}({});function va(a,h){Ge.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(va,Ge),t=va.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Cs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function lm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Rs(this):Cs(this),this.readyState==3&&lm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Rs(this))},t.Qa=function(a){this.g&&(this.response=a,Rs(this))},t.ga=function(){this.g&&Rs(this)};function Rs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Cs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Cs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function um(a){let h="";return M(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function hc(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=um(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):he(a,h,f))}function Se(a){Ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Se,Ge);var lI=/^https?$/i,uI=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ic.g(),this.v=this.o?Fp(this.o):Fp(ic),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){cm(this,V);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)f.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())f.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(uI,h,void 0))||_||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,B]of f)this.g.setRequestHeader(V,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fm(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){cm(this,V)}};function cm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,hm(a),wa(a)}function hm(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,st(this,"complete"),st(this,"abort"),wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wa(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?dm(this):this.bb())},t.bb=function(){dm(this)};function dm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_n(a)!=4||a.Z()!=2)){if(a.u&&_n(a)==4)Op(a.Ea,0,a);else if(st(a,"readystatechange"),_n(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=B===0){var D=String(a.D).match(nm)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),_=!lI.test(D?D.toLowerCase():"")}f=_}if(f)st(a,"complete"),st(a,"success");else{a.m=6;try{var V=2<_n(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",hm(a)}}finally{wa(a)}}}}function wa(a,h){if(a.g){fm(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||st(a,"ready");try{f.onreadystatechange=_}catch{}}}function fm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function _n(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),BT(h)}};function pm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cI(a){const h={};a=(a.g&&2<=_n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(y(a[_]))continue;var f=P(a[_]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[D]||[];h[D]=V,V.push(f)}S(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function mm(a){this.Aa=0,this.i=[],this.j=new ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=As("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=As("baseRetryDelayMs",5e3,a),this.cb=As("retryDelaySeedMs",1e4,a),this.Wa=As("forwardChannelMaxRetries",2,a),this.wa=As("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Yp(a&&a.concurrentRequestLimit),this.Da=new oI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=mm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){ot(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=Sm(this,null,this.W),Ta(this)};function dc(a){if(gm(a),a.G==3){var h=a.U++,f=yn(a.I);if(he(f,"SID",a.K),he(f,"RID",h),he(f,"TYPE","terminate"),ks(a,f),h=new Bn(a,a.j,h),h.L=2,h.v=ya(yn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Rm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),pa(h)}Im(a)}function Ea(a){a.g&&(pc(a),a.g.cancel(),a.g=null)}function gm(a){Ea(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ia(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ta(a){if(!Xp(a.h)&&!a.s){a.s=!0;var h=a.Ga;dn||J(),$||(dn(),$=!0),Q.add(h,a),a.B=0}}function hI(a,h){return Jp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vs(m(a.Ga,a,h),Tm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new Bn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),R(V,this.S)):V=this.S),this.m!==null||this.O||(D.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=_m(this,D,h),f=yn(this.I),he(f,"RID",a),he(f,"CVER",22),this.D&&he(f,"X-HTTP-Session-Id",this.D),ks(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(um(V)))+"&"+h:this.m&&hc(f,this.m,V)),cc(this.h,D),this.Ua&&he(f,"TYPE","init"),this.P?(he(f,"$req",h),he(f,"SID","null"),D.T=!0,oc(D,f,null)):oc(D,f,h),this.G=2}}else this.G==3&&(a?ym(this,a):this.i.length==0||Xp(this.h)||ym(this))};function ym(a,h){var f;h?f=h.l:f=a.U++;const _=yn(a.I);he(_,"SID",a.K),he(_,"RID",f),he(_,"AID",a.T),ks(a,_),a.m&&a.o&&hc(_,a.m,a.o),f=new Bn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=_m(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),cc(a.h,f),oc(f,_,h)}function ks(a,h){a.H&&M(a.H,function(f,_){he(h,_,f)}),a.l&&tm({},function(f,_){he(h,_,f)})}function _m(a,h,f){f=Math.min(a.i.length,f);var _=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let V=-1;for(;;){const B=["count="+f];V==-1?0<f?(V=D[0].g,B.push("ofs="+V)):V=0:B.push("ofs="+V);let ue=!0;for(let je=0;je<f;je++){let ie=D[je].g;const Qe=D[je].map;if(ie-=V,0>ie)V=Math.max(0,D[je].g-100),ue=!1;else try{aI(Qe,B,"req"+ie+"_")}catch{_&&_(Qe)}}if(ue){_=B.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function vm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;dn||J(),$||(dn(),$=!0),Q.add(h,a),a.v=0}}function fc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vs(m(a.Fa,a),Tm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,wm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Ea(this),wm(this))};function pc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function wm(a){a.g=new Bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=yn(a.qa);he(h,"RID","rpc"),he(h,"SID",a.K),he(h,"AID",a.T),he(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(h,"TO",a.ja),he(h,"TYPE","xmlhttp"),ks(a,h),a.m&&a.o&&hc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ya(yn(h)),f.m=null,f.P=!0,Kp(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ea(this),fc(this),ot(19))};function Ia(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Em(a,h){var f=null;if(a.g==h){Ia(a),pc(a),a.g=null;var _=2}else if(uc(a.h,h))f=h.D,Zp(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;_=ha(),st(_,new zp(_,f)),Ta(a)}else vm(a);else if(D=h.s,D==3||D==0&&0<h.X||!(_==1&&hI(a,h)||_==2&&fc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),D){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function Tm(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Nr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),_=a.Xa;const D=!_;_=new Pr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ma(_,"https"),ya(_),D?iI(_.toString(),f):sI(_.toString(),f)}else ot(2);a.G=0,a.l&&a.l.sa(h),Im(a),gm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Im(a){if(a.G=0,a.ka=[],a.l){const h=em(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Sm(a,h,f){var _=f instanceof Pr?yn(f):new Pr(f);if(_.g!="")h&&(_.g=h+"."+_.g),ga(_,_.s);else{var D=l.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var V=new Pr(null);_&&ma(V,_),h&&(V.g=h),D&&ga(V,D),f&&(V.l=f),_=V}return f=a.D,h=a.ya,f&&h&&he(_,f,h),he(_,"VER",a.la),ks(a,_),_}function Rm(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Se(new _a({eb:f})):new Se(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cm(){}t=Cm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sa(){}Sa.prototype.g=function(a,h){return new vt(a,h)};function vt(a,h){Ge.call(this),this.g=new mm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!y(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ui(this)}A(vt,Ge),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){dc(this.g)},vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ec(a),a=f);h.i.push(new GT(h.Ya++,a)),h.G==3&&Ta(h)},vt.prototype.N=function(){this.g.l=null,delete this.j,dc(this.g),delete this.g,vt.aa.N.call(this)};function Am(a){nc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(Am,nc);function km(){rc.call(this),this.status=1}A(km,rc);function ui(a){this.g=a}A(ui,Cm),ui.prototype.ua=function(){st(this.g,"a")},ui.prototype.ta=function(a){st(this.g,new Am(a))},ui.prototype.sa=function(a){st(this.g,new km)},ui.prototype.ra=function(){st(this.g,"b")},Sa.prototype.createWebChannel=Sa.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Ww=function(){return new Sa},zw=function(){return ha()},$w=kr,ld={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},da.NO_ERROR=0,da.TIMEOUT=8,da.HTTP_ERROR=6,ml=da,Wp.COMPLETE="complete",Bw=Wp,Up.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,Ks=Up,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,jw=Se}).apply(typeof Ha<"u"?Ha:typeof self<"u"?self:typeof window<"u"?window:{});const wy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new xf("@firebase/firestore");function Fs(){return Xr.logLevel}function H(t,...e){if(Xr.logLevel<=te.DEBUG){const n=e.map(Bf);Xr.debug(`Firestore (${us}): ${t}`,...n)}}function Mn(t,...e){if(Xr.logLevel<=te.ERROR){const n=e.map(Bf);Xr.error(`Firestore (${us}): ${t}`,...n)}}function Ki(t,...e){if(Xr.logLevel<=te.WARN){const n=e.map(Bf);Xr.warn(`Firestore (${us}): ${t}`,...n)}}function Bf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${us}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function ae(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class lP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uP{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new Hw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new et(e)}}class cP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new cP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new dP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Gi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ve(0,0))}static max(){return new Y(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Do.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Do?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends Do{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const mP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Do{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return mP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(fe.fromString(e))}static fromName(e){return new q(fe.fromString(e).popFirst(5))}static empty(){return new q(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new fe(e.slice()))}}function gP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new _r(i,q.empty(),e)}function yP(t){return new _r(t.readTime,t.key,-1)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(Y.min(),q.empty(),-1)}static max(){return new _r(Y.max(),q.empty(),-1)}}function _P(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==vP)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function EP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ta(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$f.oe=-1;function Nu(t){return t==null}function Zl(t){return t===0&&1/t==-1/0}function TP(t){return typeof t=="number"&&Number.isInteger(t)&&!Zl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qa(this.root,e,this.comparator,!0)}}class qa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ty(this.data.getIterator())}getIteratorFrom(e){return new Ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new He(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Gw("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const IP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=IP.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wf(t){const e=t.mapValue.fields.__previous_value__;return zf(e)?Wf(e):e}function Oo(t){const e=vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka={mapValue:{}};function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zf(t)?4:CP(t)?9007199254740991:RP(t)?10:11:G()}function an(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vr(i.timestampValue),l=vr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Jr(i.bytesValue).isEqual(Jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),l=xe(s.doubleValue);return o===l?Zl(o)===Zl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Gi(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ey(o)!==Ey(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!an(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Vo(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function Qi(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=xe(s.integerValue||s.doubleValue),u=xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Iy(t.timestampValue,e.timestampValue);case 4:return Iy(Oo(t),Oo(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Jr(s),u=Jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=se(l[c],u[c]);if(d!==0)return d}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(xe(s.latitude),xe(o.latitude));return l!==0?l:se(xe(s.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},I=(l=p.value)===null||l===void 0?void 0:l.arrayValue,A=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=se(((c=I==null?void 0:I.values)===null||c===void 0?void 0:c.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Sy(I,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ka.mapValue&&o===Ka.mapValue)return 0;if(s===Ka.mapValue)return 1;if(o===Ka.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=se(u[p],d[p]);if(m!==0)return m;const I=Qi(l[u[p]],c[d[p]]);if(I!==0)return I}return se(u.length,d.length)}(t.mapValue,e.mapValue);default:throw G()}}function Iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=vr(t),r=vr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Sy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Qi(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Yi(t){return ud(t)}function ud(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ud(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ud(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function Ry(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cd(t){return!!t&&"integerValue"in t}function Hf(t){return!!t&&"arrayValue"in t}function Cy(t){return!!t&&"nullValue"in t}function Ay(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gl(t){return!!t&&"mapValue"in t}function RP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ao(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ao(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ao(t.arrayValue.values[n]);return e}return Object.assign({},t)}function CP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ao(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ao(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());gl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];gl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){si(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(ao(this.value))}}function Qw(t){const e=[];return si(t.fields,(n,r)=>{const i=new ze([n]);if(gl(r)){const s=Qw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,Y.min(),Y.min(),Y.min(),pt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,Y.min(),Y.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,Y.min(),Y.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.position=e,this.inclusive=n}}function ky(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function xy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n="asc"){this.field=e,this.dir=n}}function AP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{}class De extends Yw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xP(e,n,r):n==="array-contains"?new bP(e,r):n==="in"?new DP(e,r):n==="not-in"?new OP(e,r):n==="array-contains-any"?new LP(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new PP(e,r):new NP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qi(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(Qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Yw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kt(e,n)}matches(e){return Xw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xw(t){return t.op==="and"}function Jw(t){return kP(t)&&Xw(t)}function kP(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function hd(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Yi(t.value);if(Jw(t))return t.filters.map(e=>hd(e)).join(",");{const e=t.filters.map(n=>hd(n)).join(",");return`${t.op}(${e})`}}function Zw(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&an(r.value,i.value)}(t,e):t instanceof Kt?function(r,i){return i instanceof Kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Zw(o,i.filters[l]),!0):!1}(t,e):void G()}function eE(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${Yi(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(eE).join(" ,")+"}"}(t):"Filter"}class xP extends De{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class PP extends De{constructor(e,n){super(e,"in",n),this.keys=tE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class NP extends De{constructor(e,n){super(e,"not-in",n),this.keys=tE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class bP extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hf(n)&&Vo(n.arrayValue,this.value)}}class DP extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vo(this.value.arrayValue,n)}}class OP extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vo(this.value.arrayValue,n)}}class LP extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Py(t,e=null,n=[],r=[],i=null,s=null,o=null){return new VP(t,e,n,r,i,s,o)}function qf(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Yi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Yi(r)).join(",")),e.ue=n}return e.ue}function Kf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!AP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xy(t.startAt,e.startAt)&&xy(t.endAt,e.endAt)}function dd(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function MP(t,e,n,r,i,s,o,l){return new na(t,e,n,r,i,s,o,l)}function Gf(t){return new na(t)}function Ny(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nE(t){return t.collectionGroup!==null}function lo(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He(ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new tu(s,r))}),n.has(ze.keyField().canonicalString())||e.ce.push(new tu(ze.keyField(),r))}return e.ce}function sn(t){const e=X(t);return e.le||(e.le=FP(e,lo(t))),e.le}function FP(t,e){if(t.limitType==="F")return Py(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new tu(i.field,s)});const n=t.endAt?new eu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new eu(t.startAt.position,t.startAt.inclusive):null;return Py(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fd(t,e){const n=t.filters.concat([e]);return new na(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pd(t,e,n){return new na(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bu(t,e){return Kf(sn(t),sn(e))&&t.limitType===e.limitType}function rE(t){return`${qf(sn(t))}|lt:${t.limitType}`}function di(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>eE(i)).join(", ")}]`),Nu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Yi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Yi(i)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function Du(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of lo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=ky(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,lo(r),i)||r.endAt&&!function(o,l,u){const c=ky(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,lo(r),i))}(t,e)}function UP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iE(t){return(e,n)=>{let r=!1;for(const i of lo(t)){const s=jP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jP(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Qi(u,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){si(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Kw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=new Te(q.comparator);function Fn(){return BP}const sE=new Te(q.comparator);function Gs(...t){let e=sE;for(const n of t)e=e.insert(n.key,n);return e}function oE(t){let e=sE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return uo()}function aE(){return uo()}function uo(){return new cs(t=>t.toString(),(t,e)=>t.isEqual(e))}const $P=new Te(q.comparator),zP=new He(q.comparator);function ee(...t){let e=zP;for(const n of t)e=e.add(n);return e}const WP=new He(se);function HP(){return WP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zl(e)?"-0":e}}function lE(t){return{integerValue:""+t}}function qP(t,e){return TP(e)?lE(e):Qf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this._=void 0}}function KP(t,e,n){return t instanceof Mo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zf(s)&&(s=Wf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Fo?cE(t,e):t instanceof Uo?hE(t,e):function(i,s){const o=uE(i,s),l=by(o)+by(i.Pe);return cd(o)&&cd(i.Pe)?lE(l):Qf(i.serializer,l)}(t,e)}function GP(t,e,n){return t instanceof Fo?cE(t,e):t instanceof Uo?hE(t,e):n}function uE(t,e){return t instanceof nu?function(r){return cd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Mo extends Ou{}class Fo extends Ou{constructor(e){super(),this.elements=e}}function cE(t,e){const n=dE(e);for(const r of t.elements)n.some(i=>an(i,r))||n.push(r);return{arrayValue:{values:n}}}class Uo extends Ou{constructor(e){super(),this.elements=e}}function hE(t,e){let n=dE(e);for(const r of t.elements)n=n.filter(i=>!an(i,r));return{arrayValue:{values:n}}}class nu extends Ou{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function by(t){return xe(t.integerValue||t.doubleValue)}function dE(t){return Hf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,n){this.field=e,this.transform=n}}function YP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Fo&&i instanceof Fo||r instanceof Uo&&i instanceof Uo?Gi(r.elements,i.elements,an):r instanceof nu&&i instanceof nu?an(r.Pe,i.Pe):r instanceof Mo&&i instanceof Mo}(t.transform,e.transform)}class XP{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lu{}function fE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mE(t.key,zt.none()):new ra(t.key,t.data,zt.none());{const n=t.data,r=pt.empty();let i=new He(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cr(t.key,r,new Tt(i.toArray()),zt.none())}}function JP(t,e,n){t instanceof ra?function(i,s,o){const l=i.value.clone(),u=Oy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(i,s,o){if(!yl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Oy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(pE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function co(t,e,n,r){return t instanceof ra?function(s,o,l,u){if(!yl(s.precondition,o))return l;const c=s.value.clone(),d=Ly(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(s,o,l,u){if(!yl(s.precondition,o))return l;const c=Ly(s.fieldTransforms,u,o),d=o.data;return d.setAll(pE(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return yl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ZP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=uE(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function Dy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Gi(r,i,(s,o)=>YP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends Lu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cr extends Lu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function pE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Oy(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,GP(o,l,n[i]))}return r}function Ly(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KP(s,o,e))}return r}class mE extends Lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eN extends Lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&JP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=fE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Gi(this.mutations,e.mutations,(n,r)=>Dy(n,r))&&Gi(this.baseMutations,e.baseMutations,(n,r)=>Dy(n,r))}}class Yf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return $P}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,ne;function iN(t){switch(t){default:return G();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function gE(t){if(t===void 0)return Mn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Ne.OK:return F.OK;case Ne.CANCELLED:return F.CANCELLED;case Ne.UNKNOWN:return F.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return F.INTERNAL;case Ne.UNAVAILABLE:return F.UNAVAILABLE;case Ne.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ne.NOT_FOUND:return F.NOT_FOUND;case Ne.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ne.ABORTED:return F.ABORTED;case Ne.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ne.DATA_LOSS:return F.DATA_LOSS;default:return G()}}(ne=Ne||(Ne={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=new Br([4294967295,4294967295],0);function Vy(t){const e=sN().encode(t),n=new Uw;return n.update(e),new Uint8Array(n.digest())}function My(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Br([n,r],0),new Br([i,s],0)]}class Xf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qs(`Invalid padding: ${n}`);if(r<0)throw new Qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Br.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Br.fromNumber(r)));return i.compare(oN)===1&&(i=new Br([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Vy(e),[r,i]=My(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Xf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Vy(e),[r,i]=My(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Vu(Y.min(),i,new Te(se),Fn(),ee())}}class ia{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ia(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class yE{constructor(e,n){this.targetId=e,this.me=n}}class _E{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Fy{constructor(){this.fe=0,this.ge=jy(),this.pe=Ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new ia(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=jy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class aN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fn(),this.qe=Uy(),this.Qe=new Te(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(dd(s))if(r===0){const o=new q(s.path);this.Ue(n,o,nt.newNoDocument(o,Y.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Jr(r).toUint8Array()}catch(u){if(u instanceof Gw)return Ki("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Xf(o,i,s)}catch(u){return Ki(u instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&dd(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,nt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Vu(e,n,this.Qe,this.ke,r);return this.ke=Fn(),this.qe=Uy(),this.Qe=new Te(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Fy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new He(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Fy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Uy(){return new Te(q.comparator)}function jy(){return new Te(q.comparator)}const lN={asc:"ASCENDING",desc:"DESCENDING"},uN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cN={and:"AND",or:"OR"};class hN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function md(t,e){return t.useProto3Json||Nu(e)?e:{value:e}}function ru(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dN(t,e){return ru(t,e.toTimestamp())}function on(t){return ae(!!t),Y.fromTimestamp(function(n){const r=vr(n);return new Ve(r.seconds,r.nanos)}(t))}function Jf(t,e){return gd(t,e).canonicalString()}function gd(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function wE(t){const e=fe.fromString(t);return ae(RE(e)),e}function yd(t,e){return Jf(t.databaseId,e.path)}function Jc(t,e){const n=wE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(TE(n))}function EE(t,e){return Jf(t.databaseId,e)}function fN(t){const e=wE(t);return e.length===4?fe.emptyPath():TE(e)}function _d(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function TE(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function By(t,e,n){return{name:yd(t,e),fields:n.value.mapValue.fields}}function pN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ae(d===void 0||typeof d=="string"),Ke.fromBase64String(d||"")):(ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ke.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?F.UNKNOWN:gE(c.code);return new W(d,c.message||"")}(o);n=new _E(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Jc(t,r.document.name),s=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):Y.min(),l=new pt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new _l(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Jc(t,r.document),s=r.readTime?on(r.readTime):Y.min(),o=nt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new _l([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Jc(t,r.document),s=r.removedTargetIds||[];n=new _l([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new rN(i,s),l=r.targetId;n=new yE(l,o)}}return n}function mN(t,e){let n;if(e instanceof ra)n={update:By(t,e.key,e.value)};else if(e instanceof mE)n={delete:yd(t,e.key)};else if(e instanceof Cr)n={update:By(t,e.key,e.data),updateMask:SN(e.fieldMask)};else{if(!(e instanceof eN))return G();n={verify:yd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof nu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function gN(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?on(i.updateTime):on(s);return o.isEqual(Y.min())&&(o=on(s)),new XP(o,i.transformResults||[])}(n,e))):[]}function yN(t,e){return{documents:[EE(t,e.path)]}}function _N(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=EE(t,i);const s=function(c){if(c.length!==0)return SE(Kt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:fi(m.field),direction:EN(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=md(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function vN(t){let e=fN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=IE(p);return m instanceof Kt&&Jw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(A){return new tu(pi(A.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Nu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,I=p.values||[];return new eu(I,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,I=p.values||[];return new eu(I,m)}(n.endAt)),MP(e,i,o,s,l,"F",u,c)}function wN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function IE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=pi(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pi(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=pi(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pi(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return De.create(pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>IE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function EN(t){return lN[t]}function TN(t){return uN[t]}function IN(t){return cN[t]}function fi(t){return{fieldPath:t.canonicalString()}}function pi(t){return ze.fromServerFormat(t.fieldPath)}function SE(t){return t instanceof De?function(n){if(n.op==="=="){if(Ay(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NAN"}};if(Cy(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ay(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NOT_NAN"}};if(Cy(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fi(n.field),op:TN(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(i=>SE(i));return r.length===1?r[0]:{compositeFilter:{op:IN(n.op),filters:r}}}(t):G()}function SN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e){this.ct=e}}function CN(t){const e=vN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(){this.un=new kN}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(_r.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class kN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Xi(0)}static kn(){return new Xi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(){this.changes=new cs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&co(r.mutation,i,Tt.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Fr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Gs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Fn();const o=uo(),l=function(){return uo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Cr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),co(d.mutation,c,d.mutation.getFieldMask(),Ve.now())):o.set(c.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new PN(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=uo();let i=new Te((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Tt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=aE();d.forEach(m=>{if(!s.has(m)){const I=fE(n.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(Fr());let l=-1,u=s;return o.next(c=>U.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(d=>({batchId:l,changes:oE(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Gs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Gs();return this.indexManager.getCollectionParents(e,s).next(l=>U.forEach(l,u=>{const c=function(p,m){return new na(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,nt.newInvalidDocument(d)))});let l=Gs();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&co(d.mutation,c,Tt.empty(),Ve.now()),Du(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:on(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:CN(i.bundledQuery),readTime:on(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.overlays=new Te(q.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=Fr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Fr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Fr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return U.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nN(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.Tr=new He(Me.Er),this.dr=new He(Me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Me(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new fe([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new fe([])),r=new Me(n,e),i=new Me(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new He(Me.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(se);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Me(new q(s),0);let l=new He(se);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Me(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.Mr=e,this.docs=function(){return new Te(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Fn();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||_P(yP(d),r)<=0||(i.has(d.key)||Du(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new MN(this)}getSize(e){return U.resolve(this.size)}}class MN extends xN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.persistence=e,this.Nr=new cs(n=>qf(n),Kf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Zf,this.targetCount=0,this.kr=Xi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Xi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new $f(0),this.Kr=!1,this.Kr=!0,this.$r=new ON,this.referenceDelegate=e(this),this.Ur=new FN(this),this.indexManager=new AN,this.remoteDocumentCache=function(i){return new VN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new RN(n),this.Gr=new bN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new LN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new jN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class jN extends wP{constructor(e){super(),this.currentSequenceNumber=e}}class ep{constructor(e){this.persistence=e,this.Jr=new Zf,this.Yr=null}static Zr(e){return new ep(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new tp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return PC()?8:EP(it())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new BN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Fs()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",di(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Fs()<=te.DEBUG&&H("QueryEngine","Query:",di(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Fs()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",di(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):U.resolve())}Yi(e,n){if(Ny(n))return U.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=pd(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,pd(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Ny(n)||i.isEqual(Y.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(Fs()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),di(n)),this.rs(e,o,n,gP(i,-1)).next(l=>l))})}ts(e,n){let r=new He(iE(e));return n.forEach((i,s)=>{Du(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Fs()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",di(n)),this.Ji.getDocumentsMatchingQuery(e,n,_r.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Te(se),this._s=new cs(s=>qf(s),Kf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function WN(t,e,n,r){return new zN(t,e,n,r)}async function CE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function HN(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let I=U.resolve();return m.forEach(A=>{I=I.next(()=>d.getEntry(u,A)).next(k=>{const N=c.docVersions.get(A);ae(N!==null),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function AE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function qN(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(Ke.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),i=i.insert(p,I),function(k,N,g){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(m,I,d)&&l.push(n.Ur.updateTargetData(s,I))});let u=Fn(),c=ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(KN(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(Y.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function KN(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Fn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function GN(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QN(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function vd(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ta(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function $y(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=X(u),m=p._s.get(d);return m!==void 0?U.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,sn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(YN(r,UP(e),l),{documents:l,Ts:s})))}function YN(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class zy{constructor(){this.activeTargetIds=HP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XN{constructor(){this.so=new zy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new zy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga=null;function Zc(){return Ga===null?Ga=function(){return 268435456+Math.round(2147483648*Math.random())}():Ga++,"0x"+Ga.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class t2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Zc(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Ki("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+us}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=ZN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Zc();return new Promise((o,l)=>{const u=new jw;u.setWithCredentials(!0),u.listenOnce(Bw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ml.NO_ERROR:const d=u.getResponseJson();H(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case ml.TIMEOUT:H(Ze,`RPC '${e}' ${s} timed out`),l(new W(F.DEADLINE_EXCEEDED,"Request time out"));break;case ml.HTTP_ERROR:const p=u.getStatus();if(H(Ze,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const A=function(N){const g=N.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(g)>=0?g:F.UNKNOWN}(I.status);l(new W(A,I.message))}else l(new W(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(F.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{H(Ze,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(Ze,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Zc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ww(),l=zw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(Ze,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,I=!1;const A=new e2({Io:N=>{I?H(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(H(Ze,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(Ze,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),k=(N,g,y)=>{N.listen(g,w=>{try{y(w)}catch(x){setTimeout(()=>{throw x},0)}})};return k(p,Ks.EventType.OPEN,()=>{I||(H(Ze,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),k(p,Ks.EventType.CLOSE,()=>{I||(I=!0,H(Ze,`RPC '${e}' stream ${i} transport closed`),A.So())}),k(p,Ks.EventType.ERROR,N=>{I||(I=!0,Ki(Ze,`RPC '${e}' stream ${i} transport errored:`,N),A.So(new W(F.UNAVAILABLE,"The operation could not be completed")))}),k(p,Ks.EventType.MESSAGE,N=>{var g;if(!I){const y=N.data[0];ae(!!y);const w=y,x=w.error||((g=w[0])===null||g===void 0?void 0:g.error);if(x){H(Ze,`RPC '${e}' stream ${i} received error:`,x);const L=x.status;let M=function(T){const R=Ne[T];if(R!==void 0)return gE(R)}(L),S=x.message;M===void 0&&(M=F.INTERNAL,S="Unknown error status: "+L+" with message "+x.message),I=!0,A.So(new W(M,S)),p.close()}else H(Ze,`RPC '${e}' stream ${i} received:`,y),A.bo(y)}}),k(l,$w.STAT_EVENT,N=>{N.stat===ld.PROXY?H(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===ld.NOPROXY&&H(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function eh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t){return new hN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new kE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n2 extends xE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=pN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?on(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=_d(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=dd(u)?{documents:yN(s,u)}:{query:_N(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=vE(s,o.resumeToken);const c=md(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=ru(s,o.snapshotVersion.toTimestamp());const c=md(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=wN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=_d(this.serializer),n.removeTarget=e,this.a_(n)}}class r2 extends xE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=gN(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=_d(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mN(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,gd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,gd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class s2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Mn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{oi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.L_.add(4),await sa(c),c.q_.set("Unknown"),c.L_.delete(4),await Fu(c)}(this))})}),this.q_=new s2(r,i)}}async function Fu(t){if(oi(t))for(const e of t.B_)await e(!0)}async function sa(t){for(const e of t.B_)await e(!1)}function PE(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),sp(n)?ip(n):hs(n).r_()&&rp(n,e))}function np(t,e){const n=X(t),r=hs(n);n.N_.delete(e),r.r_()&&NE(n,e),n.N_.size===0&&(r.r_()?r.o_():oi(n)&&n.q_.set("Unknown"))}function rp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hs(t).A_(e)}function NE(t,e){t.Q_.xe(e),hs(t).R_(e)}function ip(t){t.Q_=new aN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),hs(t).start(),t.q_.v_()}function sp(t){return oi(t)&&!hs(t).n_()&&t.N_.size>0}function oi(t){return X(t).L_.size===0}function bE(t){t.Q_=void 0}async function a2(t){t.q_.set("Online")}async function l2(t){t.N_.forEach((e,n)=>{rp(t,e)})}async function u2(t,e){bE(t),sp(t)?(t.q_.M_(e),ip(t)):t.q_.set("Unknown")}async function c2(t,e,n){if(t.q_.set("Online"),e instanceof _E&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await iu(t,r)}else if(e instanceof _l?t.Q_.Ke(e):e instanceof yE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await AE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(Ke.EMPTY_BYTE_STRING,d.snapshotVersion)),NE(s,u);const p=new rr(d.target,u,c,d.sequenceNumber);rp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await iu(t,r)}}async function iu(t,e,n){if(!ta(e))throw e;t.L_.add(1),await sa(t),t.q_.set("Offline"),n||(n=()=>AE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Fu(t)})}function DE(t,e){return e().catch(n=>iu(t,n,e))}async function Uu(t){const e=X(t),n=wr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;h2(e);)try{const i=await GN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,d2(e,i)}catch(i){await iu(e,i)}OE(e)&&LE(e)}function h2(t){return oi(t)&&t.O_.length<10}function d2(t,e){t.O_.push(e);const n=wr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function OE(t){return oi(t)&&!wr(t).n_()&&t.O_.length>0}function LE(t){wr(t).start()}async function f2(t){wr(t).p_()}async function p2(t){const e=wr(t);for(const n of t.O_)e.m_(n.mutations)}async function m2(t,e,n){const r=t.O_.shift(),i=Yf.from(r,e,n);await DE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Uu(t)}async function g2(t,e){e&&wr(t).V_&&await async function(r,i){if(function(o){return iN(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();wr(r).s_(),await DE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Uu(r)}}(t,e),OE(t)&&LE(t)}async function Hy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=oi(n);n.L_.add(3),await sa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Fu(n)}async function y2(t,e){const n=X(t);e?(n.L_.delete(2),await Fu(n)):e||(n.L_.add(2),await sa(n),n.q_.set("Unknown"))}function hs(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new n2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:a2.bind(null,t),Ro:l2.bind(null,t),mo:u2.bind(null,t),d_:c2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),sp(t)?ip(t):t.q_.set("Unknown")):(await t.K_.stop(),bE(t))})),t.K_}function wr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new r2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:f2.bind(null,t),mo:g2.bind(null,t),f_:p2.bind(null,t),g_:m2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Uu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new op(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ap(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),ta(t))return new W(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Gs(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new Mi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Mi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.W_=new Te(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ji{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ji(e,n,Mi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class v2{constructor(){this.queries=Ky(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=Ky(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(F.ABORTED,"Firestore shutting down"))}}function Ky(){return new cs(t=>rE(t),bu)}async function VE(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new _2,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=ap(o,`Initialization of query '${di(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&lp(n)}async function ME(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function w2(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&lp(n)}function E2(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function lp(t){t.Y_.forEach(e=>{e.next()})}var wd,Gy;(Gy=wd||(wd={})).ea="default",Gy.Cache="cache";class FE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ji(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==wd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.key=e}}class jE{constructor(e){this.key=e}}class T2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=iE(e),this.Ra=new Mi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new qy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),I=Du(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let N=!1;m&&I?m.data.isEqual(I.data)?A!==k&&(r.track({type:3,doc:I}),N=!0):this.ga(m,I)||(r.track({type:2,doc:I}),N=!0,(u&&this.Aa(I,u)>0||c&&this.Aa(I,c)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),N=!0):m&&!I&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(I?(o=o.add(I),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(I,A){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return k(I)-k(A)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Ji(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new qy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new jE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new UE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ji.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class I2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class S2{constructor(e){this.key=e,this.va=!1}}class R2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new cs(l=>rE(l),bu),this.Ma=new Map,this.xa=new Set,this.Oa=new Te(q.comparator),this.Na=new Map,this.La=new Zf,this.Ba={},this.ka=new Map,this.qa=Xi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function C2(t,e,n=!0){const r=qE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await BE(r,e,n,!0),i}async function A2(t,e){const n=qE(t);await BE(n,e,!0,!1)}async function BE(t,e,n,r){const i=await QN(t.localStore,sn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await k2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&PE(t.remoteStore,i),l}async function k2(t,e,n,r,i){t.Ka=(p,m,I)=>async function(k,N,g,y){let w=N.view.ma(g);w.ns&&(w=await $y(k.localStore,N.query,!1).then(({documents:S})=>N.view.ma(S,w)));const x=y&&y.targetChanges.get(N.targetId),L=y&&y.targetMismatches.get(N.targetId)!=null,M=N.view.applyChanges(w,k.isPrimaryClient,x,L);return Yy(k,N.targetId,M.wa),M.snapshot}(t,p,m,I);const s=await $y(t.localStore,e,!0),o=new T2(e,s.Ts),l=o.ma(s.documents),u=ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Yy(t,n,c.wa);const d=new I2(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function x2(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!bu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&np(r.remoteStore,i.targetId),Ed(r,i.targetId)}).catch(ea)):(Ed(r,i.targetId),await vd(r.localStore,i.targetId,!0))}async function P2(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),np(n.remoteStore,r.targetId))}async function N2(t,e,n){const r=F2(t);try{const i=await function(o,l){const u=X(o),c=Ve.now(),d=l.reduce((I,A)=>I.add(A.key),ee());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let A=Fn(),k=ee();return u.cs.getEntries(I,d).next(N=>{A=N,A.forEach((g,y)=>{y.isValidDocument()||(k=k.add(g))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,A)).next(N=>{p=N;const g=[];for(const y of l){const w=ZP(y,p.get(y.key).overlayedDocument);w!=null&&g.push(new Cr(y.key,w,Qw(w.value.mapValue),zt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,g,l)}).next(N=>{m=N;const g=N.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(I,N.batchId,g)})}).then(()=>({batchId:m.batchId,changes:oE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Te(se)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await oa(r,i.changes),await Uu(r.remoteStore)}catch(i){const s=ap(i,"Failed to persist write");n.reject(s)}}async function $E(t,e){const n=X(t);try{const r=await qN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await oa(n,r,e)}catch(r){await ea(r)}}function Qy(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&lp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function b2(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Te(q.comparator);o=o.insert(s,nt.newNoDocument(s,Y.min()));const l=ee().add(s),u=new Vu(Y.min(),new Map,new Te(se),o,l);await $E(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),up(r)}else await vd(r.localStore,e,!1).then(()=>Ed(r,e,n)).catch(ea)}async function D2(t,e){const n=X(t),r=e.batch.batchId;try{const i=await HN(n.localStore,e);WE(n,r,null),zE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oa(n,i)}catch(i){await ea(i)}}async function O2(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ae(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);WE(r,e,n),zE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oa(r,i)}catch(i){await ea(i)}}function zE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function WE(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Ed(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||HE(t,r)})}function HE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(np(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),up(t))}function Yy(t,e,n){for(const r of n)r instanceof UE?(t.La.addReference(r.key,e),L2(t,r)):r instanceof jE?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||HE(t,r.key)):G()}function L2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),up(t))}function up(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new S2(n)),t.Oa=t.Oa.insert(n,r),PE(t.remoteStore,new rr(sn(Gf(n.path)),r,"TargetPurposeLimboResolution",$f.oe))}}async function oa(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=tp.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=X(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(c,m=>U.forEach(m.$i,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>U.forEach(m.Ui,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!ta(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const I=d.os.get(m),A=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(A);d.os=d.os.insert(m,k)}}}(r.localStore,s))}async function V2(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await CE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oa(n,r.hs)}}function M2(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function qE(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$E.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=M2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=b2.bind(null,e),e.Ca.d_=w2.bind(null,e.eventManager),e.Ca.$a=E2.bind(null,e.eventManager),e}function F2(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=D2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=O2.bind(null,e),e}class su{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return WN(this.persistence,new $N,e.initialUser,this.serializer)}Ga(e){return new UN(ep.Zr,this.serializer)}Wa(e){return new XN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}su.provider={build:()=>new su};class Td{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=V2.bind(null,this.syncEngine),await y2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new v2}()}createDatastore(e){const n=Mu(e.databaseInfo.databaseId),r=function(s){return new t2(s)}(e.databaseInfo);return function(s,o,l,u){return new i2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new o2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Qy(this.syncEngine,n,0),function(){return Wy.D()?new Wy:new JN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new R2(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await sa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Td.provider={build:()=>new Td};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=qw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ap(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function th(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await CE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Xy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await j2(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Hy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Hy(e.remoteStore,i)),t._onlineComponents=e}async function j2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await th(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ki("Error using user provided cache. Falling back to memory cache: "+n),await th(t,new su)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await th(t,new su);return t._offlineComponents}async function GE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Xy(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Xy(t,new Td))),t._onlineComponents}function B2(t){return GE(t).then(e=>e.syncEngine)}async function QE(t){const e=await GE(t),n=e.eventManager;return n.onListen=C2.bind(null,e.syncEngine),n.onUnlisten=x2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=A2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=P2.bind(null,e.syncEngine),n}function $2(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new KE({next:m=>{d.Za(),o.enqueueAndForget(()=>ME(s,p));const I=m.docs.has(l);!I&&m.fromCache?c.reject(new W(F.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?c.reject(new W(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new FE(Gf(l.path),d,{includeMetadataChanges:!0,_a:!0});return VE(s,p)}(await QE(t),t.asyncQueue,e,n,r)),r.promise}function z2(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new KE({next:m=>{d.Za(),o.enqueueAndForget(()=>ME(s,p)),m.fromCache&&u.source==="server"?c.reject(new W(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new FE(l,d,{includeMetadataChanges:!0,_a:!0});return VE(s,p)}(await QE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t,e,n){if(!n)throw new W(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function W2(t,e,n,r){if(e===!0&&r===!0)throw new W(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zy(t){if(!q.isDocumentKey(t))throw new W(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function e_(t){if(q.isDocumentKey(t))throw new W(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ju(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ju(t);throw new W(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}W2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aP;switch(r.type){case"firstParty":return new hP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jy.get(n);r&&(H("ComponentProvider","Removing Datastore"),Jy.delete(n),r.terminate())}(this),Promise.resolve()}}function H2(t,e,n,r={}){var i;const s=(t=ln(t,Bu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=et.MOCK_USER;else{l=Q0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(c)}t._authCredentials=new lP(new Hw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ds(this.firestore,e,this._query)}}class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class pr extends ds{constructor(e,n,r){super(e,n,Gf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new q(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function cp(t,e,...n){if(t=ye(t),XE("collection","path",e),t instanceof Bu){const r=fe.fromString(e,...n);return e_(r),new pr(t,null,r)}{if(!(t instanceof ct||t instanceof pr))throw new W(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return e_(r),new pr(t.firestore,null,r)}}function fs(t,e,...n){if(t=ye(t),arguments.length===1&&(e=qw.newId()),XE("doc","path",e),t instanceof Bu){const r=fe.fromString(e,...n);return Zy(r),new ct(t,null,new q(r))}{if(!(t instanceof ct||t instanceof pr))throw new W(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Zy(r),new ct(t.firestore,t instanceof pr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new kE(this,"async_queue_retry"),this.Vu=()=>{const r=eh();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=eh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=eh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new xn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ta(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Mn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=op.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ps extends Bu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new n_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new n_(e),this._firestoreClient=void 0,await e}}}function q2(t,e){const n=typeof t=="object"?t:Nf(),r=typeof t=="string"?t:"(default)",i=Au(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=q0("firestore");s&&H2(i,...s)}return i}function hp(t){if(t._terminated)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||K2(t),t._firestoreClient}function K2(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new SP(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,YE(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new U2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zi(Ke.fromBase64String(e))}catch(n){throw new W(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zi(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=/^__.*__$/;class Q2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}class JE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ZE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class pp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new pp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ou(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ZE(this.Cu)&&G2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Y2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mu(e)}Qu(e,n,r,i=!1){return new pp({Cu:e,methodName:n,qu:r,path:ze.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wu(t){const e=t._freezeSettings(),n=Mu(t._databaseId);return new Y2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eT(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);gp("Data must be an object, but it was:",o,r);const l=tT(r,o);let u,c;if(s.merge)u=new Tt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Id(e,p,n);if(!o.contains(m))throw new W(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);rT(d,m)||d.push(m)}u=new Tt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new Q2(new pt(l),u,c)}class Hu extends zu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hu}}class mp extends zu{_toFieldTransform(e){return new QP(e.path,new Mo)}isEqual(e){return e instanceof mp}}function X2(t,e,n,r){const i=t.Qu(1,e,n);gp("Data must be an object, but it was:",i,r);const s=[],o=pt.empty();si(r,(u,c)=>{const d=yp(e,u,n);c=ye(c);const p=i.Nu(d);if(c instanceof Hu)s.push(d);else{const m=aa(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Tt(s);return new JE(o,l,i.fieldTransforms)}function J2(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Id(e,r,n)],u=[i];if(s.length%2!=0)throw new W(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Id(e,s[m])),u.push(s[m+1]);const c=[],d=pt.empty();for(let m=l.length-1;m>=0;--m)if(!rT(c,l[m])){const I=l[m];let A=u[m];A=ye(A);const k=o.Nu(I);if(A instanceof Hu)c.push(I);else{const N=aa(A,k);N!=null&&(c.push(I),d.set(I,N))}}const p=new Tt(c);return new JE(d,p,o.fieldTransforms)}function Z2(t,e,n,r=!1){return aa(n,t.Qu(r?4:3,e))}function aa(t,e){if(nT(t=ye(t)))return gp("Unsupported field value:",e,t),tT(t,e);if(t instanceof zu)return function(r,i){if(!ZE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=aa(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:ru(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ru(i.serializer,s)}}if(r instanceof dp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zi)return{bytesValue:vE(i.serializer,r._byteString)};if(r instanceof ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof fp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Qf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ju(r)}`)}(t,e)}function tT(t,e){const n={};return Kw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):si(t,(r,i)=>{const s=aa(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function nT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof dp||t instanceof Zi||t instanceof ct||t instanceof zu||t instanceof fp)}function gp(t,e,n){if(!nT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ju(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Id(t,e,n){if((e=ye(e))instanceof $u)return e._internalPath;if(typeof e=="string")return yp(t,e);throw ou("Field path arguments must be of type string or ",t,!1,void 0,n)}const eb=new RegExp("[~\\*/\\[\\]]");function yp(t,e,n){if(e.search(eb)>=0)throw ou(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $u(...e.split("."))._internalPath}catch{throw ou(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ou(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(F.INVALID_ARGUMENT,l+t+u)}function rT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_p("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tb extends iT{data(){return super.data()}}function _p(t,e){return typeof e=="string"?yp(t,e):e instanceof $u?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vp{}class rb extends vp{}function Sd(t,e,...n){let r=[];e instanceof vp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof wp).length,l=s.filter(u=>u instanceof qu).length;if(o>1||o>0&&l>0)throw new W(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class qu extends rb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qu(e,n,r)}_apply(e){const n=this._parse(e);return oT(e._query,n),new ds(e.firestore,e.converter,fd(e._query,n))}_parse(e){const n=Wu(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){i_(p,d);const I=[];for(const A of p)I.push(r_(u,s,A));m={arrayValue:{values:I}}}else m=r_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||i_(p,d),m=Z2(l,o,p,d==="in"||d==="not-in");return De.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function sT(t,e,n){const r=e,i=_p("where",t);return qu._create(i,r,n)}class wp extends vp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)oT(o,u),o=fd(o,u)}(e._query,n),new ds(e.firestore,e.converter,fd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function r_(t,e,n){if(typeof(n=ye(n))=="string"){if(n==="")throw new W(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nE(e)&&n.indexOf("/")!==-1)throw new W(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!q.isDocumentKey(r))throw new W(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ry(t,new q(r))}if(n instanceof ct)return Ry(t,n._key);throw new W(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ju(n)}.`)}function i_(t,e){if(!Array.isArray(t)||t.length===0)throw new W(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ib{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return si(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>xe(o.doubleValue));return new fp(s)}convertGeoPoint(e){return new dp(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=vr(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ae(RE(r));const i=new Lo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Mn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lT extends iT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_p("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vl extends lT{data(e={}){return super.data(e)}}class sb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ys(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vl(this._firestore,this._userDataWriter,r.key,r,new Ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new vl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ys(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new vl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ys(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:ob(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ob(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t){t=ln(t,ct);const e=ln(t.firestore,ps);return $2(hp(e),t._key).then(n=>ub(e,t,n))}class cT extends ib{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function hT(t){t=ln(t,ds);const e=ln(t.firestore,ps),n=hp(e),r=new cT(e);return nb(t._query),z2(n,t._query).then(i=>new sb(e,r,t,i))}function ab(t,e,n){t=ln(t,ct);const r=ln(t.firestore,ps),i=aT(t.converter,e);return Ep(r,[eT(Wu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,zt.none())])}function dT(t,e,n,...r){t=ln(t,ct);const i=ln(t.firestore,ps),s=Wu(i);let o;return o=typeof(e=ye(e))=="string"||e instanceof $u?J2(s,"updateDoc",t._key,e,n,r):X2(s,"updateDoc",t._key,e),Ep(i,[o.toMutation(t._key,zt.exists(!0))])}function lb(t,e){const n=ln(t.firestore,ps),r=fs(t),i=aT(t.converter,e);return Ep(n,[eT(Wu(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function Ep(t,e){return function(r,i){const s=new xn;return r.asyncQueue.enqueueAndForget(async()=>N2(await B2(r),i,s)),s.promise}(hp(t),e)}function ub(t,e,n){const r=n.docs.get(e._key),i=new cT(t);return new lT(t,i,e._key,r,new Ys(n.hasPendingWrites,n.fromCache),e.converter)}function cb(){return new mp("serverTimestamp")}(function(e,n=!0){(function(i){us=i})(ri),Gr(new yr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ps(new uP(r.getProvider("auth-internal")),new fP(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),tn(wy,"4.7.3",e),tn(wy,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="firebasestorage.googleapis.com",pT="storageBucket",hb=2*60*1e3,db=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends hn{constructor(e,n,r=0){super(nh(e),`Firebase Storage: ${n} (${nh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ae.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ce;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ce||(Ce={}));function nh(t){return"storage/"+t}function Tp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ae(Ce.UNKNOWN,t)}function fb(t){return new Ae(Ce.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function pb(t){return new Ae(Ce.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mb(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ae(Ce.UNAUTHENTICATED,t)}function gb(){return new Ae(Ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yb(t){return new Ae(Ce.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function _b(){return new Ae(Ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vb(){return new Ae(Ce.CANCELED,"User canceled the upload/download.")}function wb(t){return new Ae(Ce.INVALID_URL,"Invalid URL '"+t+"'.")}function Eb(t){return new Ae(Ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Tb(){return new Ae(Ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+pT+"' property when initializing the app?")}function Ib(){return new Ae(Ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Sb(){return new Ae(Ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Rb(t){return new Ae(Ce.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Rd(t){return new Ae(Ce.INVALID_ARGUMENT,t)}function mT(){return new Ae(Ce.APP_DELETED,"The Firebase app was deleted.")}function Cb(t){return new Ae(Ce.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ho(t,e){return new Ae(Ce.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Us(t){throw new Ae(Ce.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=It.makeFromUrl(e,n)}catch{return new It(e,"")}if(r.path==="")return r;throw Eb(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",I=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),A={bucket:1,path:3},k=n===fT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",g=new RegExp(`^https?://${k}/${i}/${N}`,"i"),w=[{regex:l,indices:u,postModify:s},{regex:I,indices:A,postModify:c},{regex:g,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<w.length;x++){const L=w[x],M=L.regex.exec(e);if(M){const S=M[L.indices.bucket];let v=M[L.indices.path];v||(v=""),r=new It(S,v),L.postModify(r);break}}if(r==null)throw wb(e);return r}}class Ab{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...N){c||(c=!0,e.apply(null,N))}function p(N){i=setTimeout(()=>{i=null,t(I,u())},N)}function m(){s&&clearTimeout(s)}function I(N,...g){if(c){m();return}if(N){m(),d.call(null,N,...g);return}if(u()||o){m(),d.call(null,N,...g);return}r<64&&(r*=2);let w;l===1?(l=2,w=0):w=(r+Math.random())*1e3,p(w)}let A=!1;function k(N){A||(A=!0,m(),!c&&(i!==null?(N||(l=2),clearTimeout(i),p(0)):N||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function xb(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){return t!==void 0}function Nb(t){return typeof t=="object"&&!Array.isArray(t)}function Ip(t){return typeof t=="string"||t instanceof String}function s_(t){return Sp()&&t instanceof Blob}function Sp(){return typeof Blob<"u"}function o_(t,e,n,r){if(r<e)throw Rd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Rd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function gT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var $r;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($r||($r={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,A)=>{this.resolve_=I,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Qa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===$r.NO_ERROR,u=s.getStatus();if(!l||bb(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===$r.ABORT;r(!1,new Qa(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Qa(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Pb(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Tp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?mT():vb();o(u)}else{const u=_b();o(u)}};this.canceled_?n(!1,new Qa(!1,null,!0)):this.backoffId_=kb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Ob(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Lb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Vb(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Mb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Fb(t,e,n,r,i,s,o=!0){const l=gT(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return Vb(c,e),Ob(c,n),Lb(c,s),Mb(c,r),new Db(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function jb(...t){const e=Ub();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Sp())return new Blob(t);throw new Ae(Ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Bb(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t){if(typeof atob>"u")throw Rb("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rh{constructor(e,n){this.data=e,this.contentType=n||null}}function zb(t,e){switch(t){case Jt.RAW:return new rh(yT(e));case Jt.BASE64:case Jt.BASE64URL:return new rh(_T(t,e));case Jt.DATA_URL:return new rh(Hb(e),qb(e))}throw Tp()}function yT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Wb(t){let e;try{e=decodeURIComponent(t)}catch{throw ho(Jt.DATA_URL,"Malformed data URL.")}return yT(e)}function _T(t,e){switch(t){case Jt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ho(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Jt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ho(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=$b(e)}catch(i){throw i.message.includes("polyfill")?i:ho(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class vT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ho(Jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Kb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Hb(t){const e=new vT(t);return e.base64?_T(Jt.BASE64,e.rest):Wb(e.rest)}function qb(t){return new vT(t).contentType}function Kb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){let r=0,i="";s_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(s_(this.data_)){const r=this.data_,i=Bb(r,e,n);return i===null?null:new er(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new er(r,!0)}}static getBlob(...e){if(Sp()){const n=e.map(r=>r instanceof er?r.data_:r);return new er(jb.apply(null,n))}else{const n=e.map(o=>Ip(o)?zb(Jt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new er(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t){let e;try{e=JSON.parse(t)}catch{return null}return Nb(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Qb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ET(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t,e){return e}class at{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Yb}}let Ya=null;function Xb(t){return!Ip(t)||t.length<2?t:ET(t)}function TT(){if(Ya)return Ya;const t=[];t.push(new at("bucket")),t.push(new at("generation")),t.push(new at("metageneration")),t.push(new at("name","fullPath",!0));function e(s,o){return Xb(o)}const n=new at("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new at("size");return i.xform=r,t.push(i),t.push(new at("timeCreated")),t.push(new at("updated")),t.push(new at("md5Hash",null,!0)),t.push(new at("cacheControl",null,!0)),t.push(new at("contentDisposition",null,!0)),t.push(new at("contentEncoding",null,!0)),t.push(new at("contentLanguage",null,!0)),t.push(new at("contentType",null,!0)),t.push(new at("metadata","customMetadata",!0)),Ya=t,Ya}function Jb(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new It(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Zb(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Jb(r,t),r}function IT(t,e,n){const r=wT(e);return r===null?null:Zb(t,r,n)}function eD(t,e,n,r){const i=wT(e);if(i===null||!Ip(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),I=Rp(m,n,r),A=gT({alt:"media",token:c});return I+A})[0]}function tD(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ST{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t){if(!t)throw Tp()}function nD(t,e){function n(r,i){const s=IT(t,i,e);return RT(s!==null),s}return n}function rD(t,e){function n(r,i){const s=IT(t,i,e);return RT(s!==null),eD(s,i,t.host,t._protocol)}return n}function CT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=gb():i=mb():n.getStatus()===402?i=pb(t.bucket):n.getStatus()===403?i=yb(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function iD(t){const e=CT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=fb(t.path)),s.serverResponse=i.serverResponse,s}return n}function sD(t,e,n){const r=e.fullServerUrl(),i=Rp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new ST(i,s,rD(t,n),o);return l.errorHandler=iD(e),l}function oD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function aD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=oD(null,e)),r}function lD(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let w="";for(let x=0;x<2;x++)w=w+Math.random().toString().slice(2);return w}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=aD(e,r,i),d=tD(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",I=er.getBlob(p,r,m);if(I===null)throw Ib();const A={name:c.fullPath},k=Rp(s,t.host,t._protocol),N="POST",g=t.maxUploadRetryTime,y=new ST(k,N,nD(t,n),g);return y.urlParams=A,y.headers=o,y.body=I.uploadData(),y.errorHandler=CT(e),y}class uD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$r.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$r.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$r.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Us("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Us("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Us("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Us("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Us("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class cD extends uD{initXhr(){this.xhr_.responseType="text"}}function AT(){return new cD}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n){this._service=e,n instanceof It?this._location=n:this._location=It.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ei(e,n)}get root(){const e=new It(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ET(this._location.path)}get storage(){return this._service}get parent(){const e=Gb(this._location.path);if(e===null)return null;const n=new It(this._location.bucket,e);return new ei(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Cb(e)}}function hD(t,e,n){t._throwIfRoot("uploadBytes");const r=lD(t.storage,t._location,TT(),new er(e,!0),n);return t.storage.makeRequestWithTokens(r,AT).then(i=>({metadata:i,ref:t}))}function dD(t){t._throwIfRoot("getDownloadURL");const e=sD(t.storage,t._location,TT());return t.storage.makeRequestWithTokens(e,AT).then(n=>{if(n===null)throw Sb();return n})}function fD(t,e){const n=Qb(t._location.path,e),r=new It(t._location.bucket,n);return new ei(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t){return/^[A-Za-z]+:\/\//.test(t)}function mD(t,e){return new ei(t,e)}function kT(t,e){if(t instanceof Cp){const n=t;if(n._bucket==null)throw Tb();const r=new ei(n,n._bucket);return e!=null?kT(r,e):r}else return e!==void 0?fD(t,e):t}function gD(t,e){if(e&&pD(e)){if(t instanceof Cp)return mD(t,e);throw Rd("To use ref(service, url), the first argument must be a Storage instance.")}else return kT(t,e)}function a_(t,e){const n=e==null?void 0:e[pT];return n==null?null:It.makeFromBucketSpec(n,t)}function yD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Q0(i,t.app.options.projectId))}class Cp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=fT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hb,this._maxUploadRetryTime=db,this._requests=new Set,i!=null?this._bucket=It.makeFromBucketSpec(i,this._host):this._bucket=a_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=It.makeFromBucketSpec(this._url,e):this._bucket=a_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){o_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){o_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ei(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Ab(mT());{const o=Fb(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const l_="@firebase/storage",u_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="storage";function _D(t,e,n){return t=ye(t),hD(t,e,n)}function vD(t){return t=ye(t),dD(t)}function wD(t,e){return t=ye(t),gD(t,e)}function ED(t=Nf(),e){t=ye(t);const r=Au(t,xT).getImmediate({identifier:e}),i=q0("storage");return i&&TD(r,...i),r}function TD(t,e,n,r={}){yD(t,e,n,r)}function ID(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Cp(n,r,i,e,ri)}function SD(){Gr(new yr(xT,ID,"PUBLIC").setMultipleInstances(!0)),tn(l_,u_,""),tn(l_,u_,"esm2017")}SD();const RD={apiKey:"AIzaSyA-2w4WTYdYBtOSKoH6LIIqx8rOCwHwe0Q",authDomain:"feria-virtual-esperanza.firebaseapp.com",projectId:"feria-virtual-esperanza",storageBucket:"feria-virtual-esperanza.firebasestorage.app",messagingSenderId:"899705920997",appId:"1:899705920997:web:2c4e613fee14af00c9230c",measurementId:"G-Z7TDVM99RR"},Ap=J0(RD),Er=q2(Ap),CD=ED(Ap),PT=Fw(Ap),AD=async(t,e)=>{try{const n=fs(Er,"productos",t);await dT(n,{...e,fechaActualizacion:cb()})}catch(n){throw new Error("Error al actualizar producto: "+n.message)}},kD=async(t={})=>{try{const e=cp(Er,"productos");let n=Sd(e);return t.categoria&&(n=Sd(e,sT("categoria","==",t.categoria))),(await hT(n)).docs.map(i=>({id:i.id,...i.data()}))}catch(e){throw new Error("Error al leer productos: "+e.message)}};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PD=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=t=>{const e=PD(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ND={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bD=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DD=b.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>b.createElement("svg",{ref:u,...ND,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:NT("lucide",i),...!s&&!bD(l)&&{"aria-hidden":"true"},...l},[...o.map(([c,d])=>b.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=(t,e)=>{const n=b.forwardRef(({className:r,...i},s)=>b.createElement(DD,{ref:s,iconNode:e,className:NT(`lucide-${xD(c_(t))}`,`lucide-${t}`,r),...i}));return n.displayName=c_(t),n};/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OD=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],LD=Ie("camera",OD);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VD=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],MD=Ie("check",VD);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FD=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],UD=Ie("circle-plus",FD);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jD=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],BD=Ie("eye-off",jD);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $D=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],zD=Ie("eye",$D);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],HD=Ie("house",WD);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qD=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],KD=Ie("leaf",qD);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GD=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],jo=Ie("loader",GD);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],YD=Ie("lock",QD);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],JD=Ie("log-out",XD);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZD=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],eO=Ie("mail",ZD);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tO=[["path",{d:"M5 12h14",key:"1ays0h"}]],kp=Ie("minus",tO);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nO=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],rO=Ie("package",nO);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iO=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],sO=Ie("pen",iO);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oO=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],aO=Ie("phone",oO);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],au=Ie("plus",lO);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],cO=Ie("save",uO);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],dO=Ie("send",hO);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Fi=Ie("shopping-cart",fO);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]],mO=Ie("store",pO);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Cd=Ie("trash-2",gO);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],_O=Ie("user",yO);/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bT=Ie("x",vO),DT=b.createContext(),xp=()=>{const t=b.useContext(DT);if(!t)throw new Error("useCart debe usarse dentro de un CartProvider");return t},wO=({children:t})=>{const[e,n]=b.useState(()=>{try{const g=localStorage.getItem("feria-virtual-cart");return g?JSON.parse(g):[]}catch(g){return console.error("Error cargando carrito desde localStorage:",g),[]}}),[r,i]=b.useState(null);b.useEffect(()=>{try{localStorage.setItem("feria-virtual-cart",JSON.stringify(e))}catch(g){console.error("Error guardando carrito en localStorage:",g)}},[e]);const s=(g,y="success")=>{i({message:g,type:y}),setTimeout(()=>i(null),3e3)},o=(g,y=1)=>{n(w=>{const x=w.findIndex(L=>L.id===g.id);if(x>-1){const L=[...w],M=L[x].cantidad+y;return M>g.stock?(s(`Solo hay ${g.stock} unidades disponibles`,"warning"),w):(L[x]={...L[x],cantidad:M},s(`${g.nombre} actualizado en el carrito`,"success"),L)}else return y>g.stock?(s(`Solo hay ${g.stock} unidades disponibles`,"warning"),w):(s(`${g.nombre} agregado al carrito`,"success"),[...w,{id:g.id,nombre:g.nombre,precio:g.precio,imagen:g.imagen,colonoId:g.colonoId,colonoNombre:g.colonoNombre,colonoTelefono:g.colonoTelefono,stock:g.stock,unidad:g.unidad,cantidad:y}])})},l=g=>{n(y=>{const w=y.find(x=>x.id===g);return w&&s(`${w.nombre} eliminado del carrito`,"info"),y.filter(x=>x.id!==g)})},N={cartItems:e,addToCart:o,removeFromCart:l,updateQuantity:(g,y)=>{if(y<1){l(g);return}n(w=>w.map(x=>x.id===g?y>x.stock?(s(`Solo hay ${x.stock} unidades disponibles`,"warning"),x):{...x,cantidad:y}:x))},incrementQuantity:g=>{n(y=>y.map(w=>{if(w.id===g){const x=w.cantidad+1;return x>w.stock?(s(`Solo hay ${w.stock} unidades disponibles`,"warning"),w):{...w,cantidad:x}}return w}))},decrementQuantity:g=>{n(y=>y.map(w=>{if(w.id===g){const x=w.cantidad-1;return x<1?(l(g),w):{...w,cantidad:x}}return w}))},clearCart:()=>{n([]),s("Carrito vaciado","info")},getTotal:()=>e.reduce((g,y)=>g+y.precio*y.cantidad,0),getTotalItems:()=>e.reduce((g,y)=>g+y.cantidad,0),isInCart:g=>e.some(y=>y.id===g),getItemQuantity:g=>{const y=e.find(w=>w.id===g);return y?y.cantidad:0},notification:r};return E.jsxs(DT.Provider,{value:N,children:[t,r&&E.jsx("div",{className:"fixed top-4 right-4 z-50 animate-slide-in-right",children:E.jsxs("div",{className:`px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 ${r.type==="success"?"bg-green-600 text-white":r.type==="warning"?"bg-orange-500 text-white":r.type==="error"?"bg-red-600 text-white":"bg-blue-600 text-white"}`,children:[r.type==="success"&&E.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),r.type==="warning"&&E.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),r.type==="error"&&E.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),r.type==="info"&&E.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),E.jsx("span",{className:"font-medium",children:r.message})]})})]})},EO=({producto:t})=>{const{addToCart:e,isInCart:n,getItemQuantity:r}=xp(),i=n(t.id),s=r(t.id),o=()=>{t.stock!==0&&e(t,1)};return E.jsxs("div",{className:"bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group",children:[E.jsxs("div",{className:"relative aspect-square overflow-hidden bg-gray-100",children:[t.imagen?E.jsx("img",{src:t.imagen,alt:t.nombre,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",loading:"lazy"}):E.jsx("div",{className:"w-full h-full flex items-center justify-center",children:E.jsx(Fi,{className:"w-16 h-16 text-gray-300"})}),t.stock===0&&E.jsx("div",{className:"absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold",children:"Agotado"}),t.stock>0&&t.stock<5&&E.jsxs("div",{className:"absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold",children:["Últimas ",t.stock]}),i&&E.jsxs("div",{className:"absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1",children:[E.jsx(MD,{className:"w-3 h-3"}),s," en carrito"]})]}),E.jsxs("div",{className:"p-4",children:[E.jsx("h3",{className:"font-bold text-lg text-gray-800 mb-1 line-clamp-2 min-h-[3.5rem]",children:t.nombre}),E.jsxs("p",{className:"text-sm text-gray-500 mb-2",children:["🌱 ",t.colonoNombre]}),E.jsxs("div",{className:"flex items-center justify-between mb-3",children:[E.jsxs("div",{children:[E.jsxs("p",{className:"text-2xl font-bold text-green-600",children:["$",(t.precio/100).toFixed(2)]}),E.jsxs("p",{className:"text-xs text-gray-500",children:["por ",t.unidad||"unidad"]})]}),E.jsx("div",{className:"text-right",children:E.jsxs("p",{className:"text-sm text-gray-600",children:["Stock: ",E.jsx("span",{className:"font-semibold",children:t.stock})]})})]}),E.jsx("button",{onClick:o,disabled:t.stock===0,className:`w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${t.stock===0?"bg-gray-200 text-gray-400 cursor-not-allowed":i?"bg-green-100 text-green-700 hover:bg-green-200 border-2 border-green-600":"bg-green-600 text-white hover:bg-green-700 active:scale-95 shadow-md hover:shadow-lg"}`,children:t.stock===0?E.jsxs(E.Fragment,{children:[E.jsx(kp,{className:"w-5 h-5"}),"Sin stock"]}):i?E.jsxs(E.Fragment,{children:[E.jsx(au,{className:"w-5 h-5"}),"Agregar más"]}):E.jsxs(E.Fragment,{children:[E.jsx(Fi,{className:"w-5 h-5"}),"Agregar al carrito"]})})]})]})},TO={verduras:{id:"verduras",nombre:"Verduras",emoji:"🥬",color:"green"},lacteos:{id:"lacteos",nombre:"Lácteos",emoji:"🥛",color:"blue"},conservas:{id:"conservas",nombre:"Conservas",emoji:"🥫",color:"amber"}},IO=({selectedCategory:t,onCategoryChange:e})=>{const n=[{id:"todas",nombre:"Todas",emoji:"🌟"},...Object.values(TO)];return E.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-4 mb-6",children:[E.jsx("h3",{className:"text-sm font-semibold text-gray-700 mb-3",children:"Filtrar por categoría"}),E.jsx("div",{className:"flex gap-2 overflow-x-auto pb-2 scrollbar-hide",children:n.map(r=>E.jsxs("button",{onClick:()=>e(r.id==="todas"?null:r.id),className:`
              flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200
              ${t===r.id||!t&&r.id==="todas"?"bg-blue-600 text-white shadow-md":"bg-gray-100 text-gray-700 hover:bg-gray-200"}
            `,children:[E.jsx("span",{className:"mr-1",children:r.emoji}),r.nombre]},r.id))})]})},SO=(t={})=>{const[e,n]=b.useState([]),[r,i]=b.useState(!0),[s,o]=b.useState(null),l=async()=>{try{i(!0),o(null);const u=await kD(t);n(u)}catch(u){console.error("Error en useProducts:",u),o(u.message)}finally{i(!1)}};return b.useEffect(()=>{l()},[t.categoria,t.colonoId]),{productos:e,loading:r,error:s,refetch:l}},RO=()=>{const[t,e]=b.useState(null),[n,r]=b.useState(""),{productos:i,loading:s,error:o,refetch:l}=SO({categoria:t}),u=i.filter(p=>p.nombre.toLowerCase().includes(n.toLowerCase())||p.colonoNombre.toLowerCase().includes(n.toLowerCase())),c=p=>{e(p)},d=p=>{r(p.target.value)};return E.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[E.jsxs("div",{className:"mb-6",children:[E.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"🛒 Feria Virtual Esperanza"}),E.jsx("p",{className:"text-gray-600",children:"Productos frescos directo de los colonos de Puerto Esperanza"})]}),E.jsx("div",{className:"mb-4",children:E.jsx("input",{type:"text",placeholder:"🔍 Buscar productos o colonos...",value:n,onChange:d,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"})}),E.jsx(IO,{selectedCategory:t,onCategoryChange:c}),s&&E.jsx("div",{className:"flex justify-center items-center py-12",children:E.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}),o&&E.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 mb-6",children:[E.jsxs("div",{className:"flex items-center",children:[E.jsx("span",{className:"text-red-600 mr-2",children:"⚠️"}),E.jsxs("div",{children:[E.jsx("h3",{className:"font-semibold text-red-800",children:"Error al cargar productos"}),E.jsx("p",{className:"text-sm text-red-600",children:o})]})]}),E.jsx("button",{onClick:l,className:"mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",children:"Reintentar"})]}),!s&&!o&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"mb-4 text-sm text-gray-600",children:[u.length," ",u.length===1?"producto":"productos",n&&` encontrados para "${n}"`]}),u.length>0?E.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:u.map(p=>E.jsx(EO,{producto:p},p.id))}):E.jsxs("div",{className:"text-center py-12",children:[E.jsx("div",{className:"text-6xl mb-4",children:"📦"}),E.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"No se encontraron productos"}),E.jsx("p",{className:"text-gray-500 mb-4",children:n?"Intenta con otra búsqueda":"No hay productos disponibles en esta categoría"}),(n||t)&&E.jsx("button",{onClick:()=>{r(""),e(null)},className:"px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Ver todos los productos"})]})]})]})},es=Fw();qk(es,xw).then(()=>{console.log("✅ Persistencia de sesión configurada")}).catch(t=>{console.error("Error configurando persistencia:",t)});const CO=async({email:t,password:e,nombre:n,telefono:r})=>{try{const s=(await $k(es,t,e)).user;await Hk(s,{displayName:n});const o={nombre:n.trim(),email:t.toLowerCase().trim(),telefono:r.trim(),createdAt:new Date,updatedAt:new Date,activo:!0,rol:"colono"};return await ab(fs(Er,"colonos",s.uid),o),console.log("✅ Colono registrado exitosamente:",s.uid),{user:s,colonoData:{id:s.uid,...o}}}catch(i){console.error("Error en registro:",i);const s={"auth/email-already-in-use":"Este email ya está registrado. Intenta iniciar sesión.","auth/invalid-email":"El formato del email no es válido.","auth/operation-not-allowed":"El registro está deshabilitado temporalmente.","auth/weak-password":"La contraseña debe tener al menos 6 caracteres."};throw new Error(s[i.code]||"Error al registrar. Intenta nuevamente.")}},AO=async(t,e)=>{try{const r=(await zk(es,t.toLowerCase().trim(),e)).user,i=await uT(fs(Er,"colonos",r.uid));if(!i.exists())throw new Error("No se encontraron datos del colono. Contacta al administrador.");const s={id:i.id,...i.data()};if(s.activo===!1)throw await Cw(es),new Error("Tu cuenta está desactivada. Contacta al administrador.");return console.log("✅ Sesión iniciada:",r.uid),{user:r,colonoData:s}}catch(n){console.error("Error en login:",n);const r={"auth/invalid-credential":"Email o contraseña incorrectos.","auth/user-disabled":"Esta cuenta ha sido deshabilitada.","auth/user-not-found":"No existe una cuenta con este email.","auth/wrong-password":"Contraseña incorrecta.","auth/too-many-requests":"Demasiados intentos fallidos. Intenta más tarde."};throw new Error(r[n.code]||n.message||"Error al iniciar sesión.")}},OT=async()=>{const t=es.currentUser;if(!t)return null;try{const e=await uT(fs(Er,"colonos",t.uid));return e.exists()?{id:e.id,...e.data(),email:t.email,emailVerified:t.emailVerified}:null}catch(e){return console.error("Error obteniendo colono actual:",e),null}},kO=t=>Rw(es,async e=>{if(e){const n=await OT();t({user:e,colonoData:n})}else t({user:null,colonoData:null})}),xO=({colonoData:t,producto:e,onSuccess:n,onCancel:r})=>{const[i,s]=b.useState((e==null?void 0:e.nombre)||""),[o,l]=b.useState(e!=null&&e.precio?(e.precio/100).toString():""),[u,c]=b.useState((e==null?void 0:e.categoria)||""),[d,p]=b.useState((e==null?void 0:e.stock)||0),[m,I]=b.useState(null),[A,k]=b.useState((e==null?void 0:e.imagen)||null),[N,g]=b.useState(!1),y=b.useRef(null),w=L=>{const M=L.target.files[0];M&&(I(M),k(URL.createObjectURL(M)))},x=async L=>{L.preventDefault(),g(!0);try{let M=(e==null?void 0:e.imagen)||"";if(m){const v=wD(CD,`productos/${Date.now()}_${m.name}`),T=await _D(v,m);M=await vD(T.ref)}const S={nombre:i,precio:Math.round(parseFloat(o)*100),categoria:u,stock:parseInt(d),imagen:M,colonoId:t.id,colonoNombre:t.nombre,updatedAt:new Date};e!=null&&e.id?await dT(fs(Er,"productos",e.id),S):await lb(cp(Er,"productos"),{...S,createdAt:new Date}),n()}catch(M){console.error("Error al guardar:",M),alert("Hubo un error al guardar el producto")}finally{g(!1)}};return E.jsxs("form",{onSubmit:x,className:"space-y-4",children:[E.jsxs("div",{className:"flex flex-col items-center",children:[E.jsx("div",{onClick:()=>y.current.click(),className:"w-full h-48 border-2 border-dashed border-green-300 rounded-2xl bg-green-50 flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:bg-green-100 transition-all shadow-inner",children:A?E.jsx("img",{src:A,alt:"Vista previa",className:"w-full h-full object-cover"}):E.jsxs("div",{className:"text-center p-4",children:[E.jsx(LD,{className:"w-12 h-12 text-green-600 mx-auto mb-2"}),E.jsx("p",{className:"text-sm font-bold text-green-700",children:"Tocar para sacar foto"}),E.jsx("p",{className:"text-xs text-green-500",children:"Obligatorio para vender"})]})}),E.jsx("input",{type:"file",ref:y,accept:"image/*",capture:"environment",onChange:w,className:"hidden"}),A&&E.jsxs("button",{type:"button",onClick:()=>{k(null),I(null)},className:"mt-2 text-xs text-red-500 flex items-center gap-1 hover:underline",children:[E.jsx(Cd,{size:12})," Quitar foto"]})]}),E.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[E.jsx("input",{type:"text",placeholder:"Nombre (ej: Bollito Casero)",className:"w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all",value:i,onChange:L=>s(L.target.value),required:!0}),E.jsxs("div",{className:"flex gap-2",children:[E.jsx("input",{type:"number",step:"0.01",placeholder:"Precio (ej: 500)",className:"flex-1 p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none",value:o,onChange:L=>l(L.target.value),required:!0}),E.jsx("input",{type:"number",placeholder:"Stock",className:"w-24 p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none",value:d,onChange:L=>p(L.target.value),required:!0})]}),E.jsxs("select",{className:"w-full p-3 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-green-500",value:u,onChange:L=>c(L.target.value),required:!0,children:[E.jsx("option",{value:"",children:"Seleccionar Categoría"}),E.jsx("option",{value:"Panificados",children:"Panificados"}),E.jsx("option",{value:"Verduras",children:"Verduras"}),E.jsx("option",{value:"Frutas",children:"Frutas"}),E.jsx("option",{value:"Lácteos",children:"Lácteos"}),E.jsx("option",{value:"Otros",children:"Otros"})]})]}),E.jsxs("div",{className:"flex gap-3 mt-6",children:[E.jsx("button",{type:"button",onClick:r,className:"flex-1 py-3 px-4 text-gray-500 font-bold hover:bg-gray-100 rounded-xl transition-colors",disabled:N,children:"Cancelar"}),E.jsx("button",{type:"submit",className:"flex-1 py-3 px-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 shadow-lg shadow-green-200 flex items-center justify-center gap-2 disabled:opacity-50",disabled:N,children:N?E.jsx(jo,{className:"animate-spin",size:20}):E.jsxs(E.Fragment,{children:[E.jsx(cO,{size:20})," Guardar"]})})]})]})},PO=({isModalOpen:t,setIsModalOpen:e,onCloseModal:n,onOpenModal:r})=>{const i=as(),s=cn(),[o,l]=b.useState(null),[u,c]=b.useState(!0),[d,p]=b.useState([]),[m,I]=b.useState(!1),[A,k]=b.useState(null);b.useEffect(()=>{new URLSearchParams(s.search).get("action")==="new"&&(k(null),e(!0))},[s.search,e]),b.useEffect(()=>{N()},[]),b.useEffect(()=>{o&&g()},[o]);const N=async()=>{try{const L=await OT();if(!L){i("/login");return}l(L)}catch(L){console.error("Error cargando colono:",L),i("/login")}finally{c(!1)}},g=async()=>{I(!0);try{const L=Sd(cp(Er,"productos"),sT("colonoId","==",o.id)),S=(await hT(L)).docs.map(v=>({id:v.id,...v.data()}));S.sort((v,T)=>v.nombre.localeCompare(T.nombre)),p(S)}catch(L){console.error("Error cargando productos:",L)}finally{I(!1)}},y=async(L,M)=>{const S=d.find(T=>T.id===L),v=Math.max(0,S.stock+M);try{await AD(L,{stock:v}),p(T=>T.map(R=>R.id===L?{...R,stock:v}:R))}catch(T){console.error("Error actualizando stock:",T)}},w=L=>{k(L),e(!0)},x=L=>{k(null),n(),L&&g()};return u?E.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:E.jsx(jo,{className:"w-10 h-10 text-green-600 animate-spin"})}):E.jsxs("div",{className:"min-h-screen bg-gray-50 pb-24 relative",children:[E.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[E.jsx("h1",{className:"text-3xl font-bold text-green-800 mb-1",children:"Panel de Control"}),E.jsx("p",{className:"text-gray-500 mb-8 font-medium",children:"Gestiona tus productos y stock"}),m?E.jsx("div",{className:"text-center py-12",children:E.jsx(jo,{className:"animate-spin mx-auto text-green-600"})}):d.length===0?E.jsxs("div",{className:"text-center py-12 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300",children:[E.jsx(rO,{className:"w-12 h-12 text-gray-300 mx-auto mb-4"}),E.jsx("p",{className:"text-gray-500 font-medium",children:"Aún no tienes productos cargados."})]}):E.jsx("div",{className:"grid gap-4",children:d.map(L=>E.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-5 border border-gray-100 flex justify-between items-center transition-all hover:shadow-md",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"font-bold text-gray-800 text-lg",children:L.nombre}),E.jsxs("p",{className:"text-green-600 font-bold",children:["$",(L.precio/100).toFixed(2)]})]}),E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsxs("div",{className:"flex items-center bg-gray-100 rounded-lg p-1 border border-gray-200",children:[E.jsx("button",{onClick:()=>y(L.id,-1),className:"p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors",children:E.jsx(kp,{size:18})}),E.jsx("span",{className:"w-12 text-center font-bold text-xl",children:L.stock}),E.jsx("button",{onClick:()=>y(L.id,1),className:"p-2 text-green-600 hover:bg-green-50 rounded-md transition-colors",children:E.jsx(au,{size:18})})]}),E.jsx("button",{onClick:()=>w(L),className:"p-2 text-gray-400 hover:text-green-600 transition-colors",title:"Editar",children:E.jsx(sO,{size:20})})]})]},L.id))})]}),E.jsx("button",{onClick:r,className:"fixed bottom-8 right-8 bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-700 hover:scale-110 active:scale-95 transition-all z-40 border-4 border-white",title:"Cargar nuevo producto",children:E.jsx(au,{size:32,strokeWidth:3})}),t&&E.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto",children:E.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative my-auto animate-in zoom-in duration-200",children:[E.jsx("button",{onClick:()=>x(!1),className:"absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors p-1",children:E.jsx(bT,{size:24})}),E.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:A?"Editar Producto":"Cargar Nuevo Producto"}),E.jsx(xO,{colonoData:o,producto:A,onSuccess:()=>x(!0),onCancel:()=>x(!1)})]})})]})},NO=()=>{const t=as(),[e,n]=b.useState(!1),[r,i]=b.useState({email:"",password:"",nombre:"",telefono:""}),[s,o]=b.useState(!1),[l,u]=b.useState(""),[c,d]=b.useState(!1),p=(k,N)=>{i(g=>({...g,[k]:N})),l&&u("")},m=()=>{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email))return u("Por favor ingresa un email válido"),!1;if(r.password.length<6)return u("La contraseña debe tener al menos 6 caracteres"),!1;if(e){if(r.nombre.trim().length<3)return u("El nombre debe tener al menos 3 caracteres"),!1;if(r.telefono.trim().length<10)return u("Ingresa un número de teléfono válido"),!1}return!0},I=async k=>{if(k.preventDefault(),u(""),!!m()){o(!0);try{e?(await CO({email:r.email,password:r.password,nombre:r.nombre,telefono:r.telefono}),t("/")):(await AO(r.email,r.password),t("/"))}catch(N){u(N.message||"Ocurrió un error. Intenta nuevamente.")}finally{o(!1)}}},A=()=>{n(!e),u(""),i({email:"",password:"",nombre:"",telefono:""})};return E.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center p-4",children:E.jsxs("div",{className:"w-full max-w-md",children:[E.jsxs("div",{className:"text-center mb-8",children:[E.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-4 shadow-lg",children:E.jsx(KD,{className:"w-10 h-10 text-white"})}),E.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"Feria Virtual Esperanza"}),E.jsx("p",{className:"text-gray-600",children:e?"Registra tu cuenta de colono":"Ingresa a tu cuenta"})]}),E.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[E.jsxs("form",{onSubmit:I,className:"space-y-5",children:[e&&E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Nombre completo"}),E.jsxs("div",{className:"relative",children:[E.jsx(_O,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),E.jsx("input",{type:"text",value:r.nombre,onChange:k=>p("nombre",k.target.value),placeholder:"Juan Pérez",className:"w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg",required:e,disabled:s})]})]}),e&&E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"WhatsApp"}),E.jsxs("div",{className:"relative",children:[E.jsx(aO,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),E.jsx("input",{type:"tel",value:r.telefono,onChange:k=>p("telefono",k.target.value),placeholder:"3764123456",className:"w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg",required:e,disabled:s})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),E.jsxs("div",{className:"relative",children:[E.jsx(eO,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),E.jsx("input",{type:"email",value:r.email,onChange:k=>p("email",k.target.value),placeholder:"tu@email.com",className:"w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg",required:!0,disabled:s})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Contraseña"}),E.jsxs("div",{className:"relative",children:[E.jsx(YD,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),E.jsx("input",{type:c?"text":"password",value:r.password,onChange:k=>p("password",k.target.value),placeholder:"Mínimo 6 caracteres",className:"w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg",required:!0,disabled:s}),E.jsx("button",{type:"button",onClick:()=>d(!c),className:"absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",tabIndex:-1,children:c?E.jsx(BD,{className:"w-5 h-5"}):E.jsx(zD,{className:"w-5 h-5"})})]}),e&&E.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Debe tener al menos 6 caracteres"})]}),l&&E.jsx("div",{className:"bg-red-50 border-2 border-red-200 rounded-xl p-4",children:E.jsxs("p",{className:"text-red-700 text-sm font-medium",children:["⚠️ ",l]})}),E.jsx("button",{type:"submit",disabled:s,className:`w-full py-4 rounded-xl font-semibold text-lg transition-all ${s?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-green-600 text-white hover:bg-green-700 active:scale-98 shadow-lg hover:shadow-xl"}`,children:s?E.jsxs("span",{className:"flex items-center justify-center gap-2",children:[E.jsx(jo,{className:"w-5 h-5 animate-spin"}),e?"Registrando...":"Iniciando sesión..."]}):e?"✅ Crear cuenta":"🚀 Iniciar sesión"})]}),E.jsx("div",{className:"mt-6 text-center",children:E.jsx("button",{onClick:A,disabled:s,className:"text-green-600 hover:text-green-700 font-medium transition-colors disabled:opacity-50",children:e?E.jsxs(E.Fragment,{children:["¿Ya tienes cuenta? ",E.jsx("span",{className:"underline",children:"Inicia sesión"})]}):E.jsxs(E.Fragment,{children:["¿No tienes cuenta? ",E.jsx("span",{className:"underline",children:"Regístrate aquí"})]})})})]}),E.jsxs("div",{className:"mt-6 text-center text-sm text-gray-500",children:[E.jsx("p",{children:"🌱 Sistema de gestión para colonos"}),E.jsx("p",{className:"mt-1",children:"Administra tus productos de forma simple"})]})]})})},bO=({children:t})=>{const[e,n]=b.useState({loading:!0,user:null,colonoData:null});return b.useEffect(()=>{const r=kO(({user:i,colonoData:s})=>{n({loading:!1,user:i,colonoData:s})});return()=>r()},[]),e.loading?E.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center",children:E.jsxs("div",{className:"text-center",children:[E.jsx(jo,{className:"w-12 h-12 text-green-600 animate-spin mx-auto mb-4"}),E.jsx("p",{className:"text-gray-600 font-medium",children:"Verificando sesión..."})]})}):e.user?t:E.jsx(V0,{to:"/login",replace:!0})},DO=({user:t,onCartClick:e,onOpenProduct:n})=>{const r=as(),i=async()=>{try{await Cw(PT),r("/")}catch(s){console.error("Error al cerrar sesión:",s)}};return E.jsx("header",{className:"bg-white shadow-md sticky top-0 z-50 w-full",children:E.jsxs("div",{className:"max-w-7xl mx-auto px-4 h-20 flex items-center justify-between",children:[E.jsxs("button",{onClick:()=>r("/"),className:"flex items-center gap-2 hover:opacity-80 transition-opacity",children:[E.jsx("div",{className:"bg-green-600 p-2 rounded-lg",children:E.jsx(mO,{className:"text-white w-6 h-6"})}),E.jsx("span",{className:"text-xl font-bold text-gray-800 hidden sm:block",children:"Feria Virtual Esperanza"})]}),E.jsxs("nav",{className:"flex items-center gap-4",children:[E.jsxs("button",{onClick:()=>r("/"),className:"flex items-center gap-1 text-gray-600 hover:text-green-600 font-medium",children:[E.jsx(HD,{className:"w-4 h-4"}),"Inicio"]}),t&&E.jsxs(E.Fragment,{children:[E.jsxs("button",{onClick:n,className:"flex items-center gap-1 bg-green-50 text-green-700 px-3 py-2 rounded-full hover:bg-green-100 font-semibold text-sm",children:[E.jsx(UD,{className:"w-4 h-4"}),"Subir Producto"]}),E.jsxs("button",{onClick:i,className:"flex items-center gap-1 text-red-500 hover:bg-red-50 px-3 py-2 rounded-full text-sm",children:[E.jsx(JD,{className:"w-4 h-4"}),"Cerrar Sesión"]})]})]})]})})},OO=({onClick:t})=>{const{getTotalItems:e}=xp(),n=e();if(console.log("🔘 CartButton - onClick recibido:",typeof t),console.log("🔘 CartButton - totalItems:",n),n===0)return null;const r=()=>{console.log("👆 CartButton - Click detectado!"),t?t():console.error("❌ CartButton - onClick no está definido!")};return E.jsxs("button",{onClick:r,className:"fixed bottom-6 right-6 z-40 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 active:scale-95 md:hidden","aria-label":"Ver carrito",children:[E.jsx(Fi,{className:"w-6 h-6"}),E.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center animate-bounce",children:n>99?"99+":n})]})},LO=({isOpen:t,onClose:e})=>{console.log("🎨 RENDERIZANDO DRAWER - isOpen:",t);const{cartItems:n,removeFromCart:r,incrementQuantity:i,decrementQuantity:s,updateQuantity:o,getTotal:l,getTotalItems:u,clearCart:c}=xp(),[d,p]=b.useState({nombre:"",telefono:"",direccion:""}),m=()=>{if(n.length===0)return alert("El carrito está vacío"),"";let g=`🌱 *PEDIDO - FERIA VIRTUAL ESPERANZA*

`;d.nombre&&(g+=`👤 *Cliente:* ${d.nombre}
`),d.telefono&&(g+=`📱 *Teléfono:* ${d.telefono}
`),d.direccion&&(g+=`📍 *Dirección:* ${d.direccion}
`),g+=`
`;const y={};n.forEach(x=>{y[x.colonoId]||(y[x.colonoId]={nombre:x.colonoNombre,telefono:x.colonoTelefono,productos:[]}),y[x.colonoId].productos.push(x)}),Object.values(y).forEach((x,L)=>{g+=`🌾 *Colono ${L+1}: ${x.nombre}*
`,x.telefono&&(g+=`📞 ${x.telefono}
`),g+=`
`,x.productos.forEach(M=>{const S=M.precio*M.cantidad/100;g+=`• ${M.cantidad}x ${M.nombre}
`,g+=`  $${(M.precio/100).toFixed(2)} c/u = $${S.toFixed(2)}
`}),g+=`
`});const w=l()/100;return g+=`💰 *TOTAL: $${w.toFixed(2)}*

`,g+="¡Gracias por tu pedido! 🙏",encodeURIComponent(g)},I=()=>{var L;if(n.length===0){alert("El carrito está vacío");return}const g=m(),w=(L=n[0].colonoTelefono)==null?void 0:L.replace(/\D/g,"");if(!w){alert("No se encontró número de WhatsApp del colono");return}const x=`https://wa.me/${w}?text=${g}`;window.open(x,"_blank"),confirm("¿Deseas vaciar el carrito?")&&(c(),e())},A=(g,y)=>{p(w=>({...w,[g]:y}))},k=u(),N=l();return E.jsxs(E.Fragment,{children:[t&&E.jsx("div",{className:"fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300",onClick:e,style:{display:t?"block":"none"}}),E.jsxs("div",{className:`
          fixed top-0 right-0 h-full w-full md:w-96 
          bg-white shadow-2xl 
          z-[9999]
          transform transition-all duration-300 ease-in-out
          flex flex-col
          ${t?"translate-x-0 opacity-100 visible":"translate-x-full opacity-0 invisible"}
        `,style:{zIndex:9999,visibility:t?"visible":"hidden",opacity:t?1:0,transform:t?"translateX(0)":"translateX(100%)"},children:[E.jsxs("div",{className:"bg-green-600 text-white p-4 flex items-center justify-between flex-shrink-0",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx(Fi,{className:"w-6 h-6"}),E.jsxs("div",{children:[E.jsx("h2",{className:"text-lg font-bold",children:"Mi Carrito"}),E.jsxs("p",{className:"text-sm text-green-100",children:[k," ",k===1?"producto":"productos"]})]})]}),E.jsx("button",{onClick:e,className:"p-2 hover:bg-white/10 rounded-lg transition-colors","aria-label":"Cerrar carrito",children:E.jsx(bT,{className:"w-6 h-6"})})]}),E.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:n.length===0?E.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center",children:[E.jsx(Fi,{className:"w-20 h-20 text-gray-300 mb-4"}),E.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"Tu carrito está vacío"}),E.jsx("p",{className:"text-gray-500 mb-4",children:"Agrega productos desde el catálogo"}),E.jsx("button",{onClick:e,className:"bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors",children:"Ver productos"})]}):E.jsx("div",{className:"space-y-4",children:n.map(g=>E.jsx("div",{className:"bg-gray-50 rounded-lg p-3 border border-gray-200",children:E.jsxs("div",{className:"flex gap-3",children:[E.jsx("div",{className:"w-20 h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden border border-gray-200",children:g.imagen?E.jsx("img",{src:g.imagen,alt:g.nombre,className:"w-full h-full object-cover"}):E.jsx("div",{className:"w-full h-full flex items-center justify-center",children:E.jsx(Fi,{className:"w-8 h-8 text-gray-300"})})}),E.jsxs("div",{className:"flex-1 min-w-0",children:[E.jsx("h3",{className:"font-semibold text-gray-800 text-sm truncate mb-1",children:g.nombre}),E.jsxs("p",{className:"text-xs text-gray-500 mb-2",children:["🌱 ",g.colonoNombre]}),E.jsxs("p",{className:"text-green-600 font-bold text-sm mb-2",children:["$",(g.precio/100).toFixed(2)," c/u"]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("button",{onClick:()=>s(g.id),className:"w-8 h-8 flex items-center justify-center bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors active:scale-95",children:E.jsx(kp,{className:"w-4 h-4"})}),E.jsx("input",{type:"number",min:"1",max:g.stock,value:g.cantidad,onChange:y=>{const w=parseInt(y.target.value)||1;o(g.id,w)},className:"w-14 text-center border border-gray-300 rounded-lg py-1 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"}),E.jsx("button",{onClick:()=>i(g.id),disabled:g.cantidad>=g.stock,className:"w-8 h-8 flex items-center justify-center bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors active:scale-95 disabled:opacity-50",children:E.jsx(au,{className:"w-4 h-4"})}),E.jsx("button",{onClick:()=>r(g.id),className:"ml-auto w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:E.jsx(Cd,{className:"w-4 h-4"})})]}),E.jsxs("p",{className:"text-xs text-gray-600 mt-2",children:["Subtotal: ",E.jsxs("span",{className:"font-semibold",children:["$",(g.precio*g.cantidad/100).toFixed(2)]})]}),g.cantidad>=g.stock&&E.jsx("p",{className:"text-xs text-orange-600 mt-1",children:"⚠️ Stock máximo alcanzado"})]})]})},g.id))})}),n.length>0&&E.jsxs("div",{className:"border-t border-gray-200 p-4 space-y-4 flex-shrink-0",children:[E.jsxs("div",{className:"space-y-2",children:[E.jsx("h3",{className:"font-semibold text-gray-700 text-sm",children:"Tus datos (opcional)"}),E.jsx("input",{type:"text",placeholder:"Tu nombre",value:d.nombre,onChange:g=>A("nombre",g.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"}),E.jsx("input",{type:"tel",placeholder:"Tu teléfono",value:d.telefono,onChange:g=>A("telefono",g.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"}),E.jsx("input",{type:"text",placeholder:"Dirección de entrega",value:d.direccion,onChange:g=>A("direccion",g.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"})]}),E.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 border border-gray-200",children:[E.jsxs("div",{className:"flex items-center justify-between mb-1",children:[E.jsx("span",{className:"text-sm text-gray-600",children:"Subtotal:"}),E.jsxs("span",{className:"font-semibold",children:["$",(N/100).toFixed(2)]})]}),E.jsxs("div",{className:"flex items-center justify-between border-t border-gray-300 pt-2",children:[E.jsx("span",{className:"text-lg font-bold text-gray-800",children:"Total:"}),E.jsxs("span",{className:"text-2xl font-bold text-green-600",children:["$",(N/100).toFixed(2)]})]})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsxs("button",{onClick:I,className:"w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors active:scale-98 shadow-md",children:[E.jsx(dO,{className:"w-5 h-5"}),"Finalizar Pedido por WhatsApp"]}),E.jsxs("button",{onClick:()=>{confirm("¿Estás seguro de vaciar el carrito?")&&c()},className:"w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors",children:[E.jsx(Cd,{className:"w-4 h-4"}),"Vaciar carrito"]})]})]})]})]})};function VO({user:t,loadingAuth:e}){const n=cn(),r=as(),[i,s]=b.useState(!1),[o,l]=b.useState(!1),u=()=>s(!0),c=()=>s(!1),d=()=>{n.pathname!=="/admin"?r("/admin?action=new"):l(!0)},p=()=>{l(!1),r("/admin",{replace:!0})};if(e)return E.jsx("div",{className:"min-h-screen flex items-center justify-center",children:E.jsx("p",{className:"text-gray-500",children:"Verificando sesión..."})});const m=n.pathname==="/login";return E.jsxs("div",{className:"min-h-screen bg-gray-50",children:[!m&&E.jsx(DO,{user:t,onCartClick:u,onOpenProduct:d}),E.jsxs(VR,{children:[E.jsx(Ws,{path:"/",element:E.jsx(RO,{})}),E.jsx(Ws,{path:"/login",element:E.jsx(NO,{})}),E.jsx(Ws,{path:"/admin",element:E.jsx(bO,{children:E.jsx(PO,{isModalOpen:o,setIsModalOpen:l,onCloseModal:p,onOpenModal:d})})}),E.jsx(Ws,{path:"*",element:E.jsx(V0,{to:"/",replace:!0})})]}),!m&&E.jsxs(E.Fragment,{children:[E.jsx(OO,{onClick:u}),E.jsx(LO,{isOpen:i,onClose:c})]})]})}function MO(){const[t,e]=b.useState(null),[n,r]=b.useState(!0);return b.useEffect(()=>{const i=Rw(PT,s=>{e(s),r(!1)});return()=>i()},[]),E.jsx(wO,{children:E.jsx(oC,{children:E.jsx(VO,{user:t,loadingAuth:n})})})}ih.createRoot(document.getElementById("root")).render(E.jsx(kI.StrictMode,{children:E.jsx(MO,{})}));
