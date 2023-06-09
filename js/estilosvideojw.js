	/**
 * Created by fcomparini on 01-10-15.
 * Soporte OAS y DFP
 *
 */
//jwplayer 7.12.13
window.jwplayer=function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n=window.webpackJsonpjwplayer;window.webpackJsonpjwplayer=function(i,o){for(var a,s,l=0,u=[];l<i.length;l++)s=i[l],r[s]&&u.push.apply(u,r[s]),r[s]=0;for(a in o)e[a]=o[a];for(n&&n(i,o);u.length;)u.shift().call(null,t)};var i={},r={0:0};return t.e=function(e,n){if(0===r[e])return n.call(null,t);if(void 0!==r[e])r[e].push(n);else{r[e]=[n];var i=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.src=t.p+""+({1:"jwplayer.controls",2:"provider.hlsjs",3:"provider.shaka",4:"provider.cast",5:"provider.html5",6:"provider.flash",7:"polyfills.intersection-observer",8:"provider.airplay",9:"provider.youtube",10:"polyfills.vttrenderer",11:"polyfills.promise",12:"polyfills.base64",13:"vttparser"}[e]||e)+".js",i.appendChild(o)}},t.m=e,t.c=i,t.p="",t(0)}([function(e,t,n){e.exports=n(162)},function(e,t,n){var i,r;i=[],r=function(){var e={},t=Array.prototype,n=Object.prototype,i=Function.prototype,r=t.slice,o=t.concat,a=n.toString,s=n.hasOwnProperty,l=t.map,u=t.reduce,c=t.forEach,d=t.filter,f=t.every,p=t.some,h=t.indexOf,g=Array.isArray,v=Object.keys,m=i.bind,y=function P(e){return e instanceof P?e:this instanceof P?void 0:new P(e)},w=y.each=y.forEach=function(t,n,i){var r,o;if(null==t)return t;if(c&&t.forEach===c)t.forEach(n,i);else if(t.length===+t.length){for(r=0,o=t.length;r<o;r++)if(n.call(i,t[r],r,t)===e)return}else{var a=y.keys(t);for(r=0,o=a.length;r<o;r++)if(n.call(i,t[a[r]],a[r],t)===e)return}return t};y.map=y.collect=function(e,t,n){var i=[];return null==e?i:l&&e.map===l?e.map(t,n):(w(e,function(e,r,o){i.push(t.call(n,e,r,o))}),i)};var E="Reduce of empty array with no initial value";y.reduce=y.foldl=y.inject=function(e,t,n,i){var r=arguments.length>2;if(null==e&&(e=[]),u&&e.reduce===u)return i&&(t=y.bind(t,i)),r?e.reduce(t,n):e.reduce(t);if(w(e,function(e,o,a){r?n=t.call(i,n,e,o,a):(n=e,r=!0)}),!r)throw new TypeError(E);return n},y.find=y.detect=function(e,t,n){var i;return b(e,function(e,r,o){if(t.call(n,e,r,o))return i=e,!0}),i},y.filter=y.select=function(e,t,n){var i=[];return null==e?i:d&&e.filter===d?e.filter(t,n):(w(e,function(e,r,o){t.call(n,e,r,o)&&i.push(e)}),i)},y.reject=function(e,t,n){return y.filter(e,function(e,i,r){return!t.call(n,e,i,r)},n)},y.compact=function(e){return y.filter(e,y.identity)},y.every=y.all=function(t,n,i){n||(n=y.identity);var r=!0;return null==t?r:f&&t.every===f?t.every(n,i):(w(t,function(t,o,a){if(!(r=r&&n.call(i,t,o,a)))return e}),!!r)};var b=y.some=y.any=function(t,n,i){n||(n=y.identity);var r=!1;return null==t?r:p&&t.some===p?t.some(n,i):(w(t,function(t,o,a){if(r||(r=n.call(i,t,o,a)))return e}),!!r)};y.size=function(e){return null==e?0:e.length===+e.length?e.length:y.keys(e).length},y.last=function(e,t,n){if(null!=e)return null==t||n?e[e.length-1]:r.call(e,Math.max(e.length-t,0))},y.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},y.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n}};var A=function(e){return null==e?y.identity:y.isFunction(e)?e:y.property(e)},C=function(e){return function(t,n,i){var r={};return n=A(n),w(t,function(o,a){var s=n.call(i,o,a,t);e(r,s,o)}),r}};y.groupBy=C(function(e,t,n){y.has(e,t)?e[t].push(n):e[t]=[n]}),y.indexBy=C(function(e,t,n){e[t]=n}),y.sortedIndex=function(e,t,n,i){n=A(n);for(var r=n.call(i,t),o=0,a=e.length;o<a;){var s=o+a>>>1;n.call(i,e[s])<r?o=s+1:a=s}return o},y.contains=y.include=function(e,t){return null!=e&&(e.length!==+e.length&&(e=y.values(e)),y.indexOf(e,t)>=0)},y.pluck=function(e,t){return y.map(e,y.property(t))},y.where=function(e,t){return y.filter(e,y.matches(t))},y.findWhere=function(e,t){return y.find(e,y.matches(t))},y.max=function(e,t,n){if(!t&&y.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);var i=-(1/0),r=-(1/0);return w(e,function(e,o,a){var s=t?t.call(n,e,o,a):e;s>r&&(i=e,r=s)}),i},y.difference=function(e){var n=o.apply(t,r.call(arguments,1));return y.filter(e,function(e){return!y.contains(n,e)})},y.without=function(e){return y.difference(e,r.call(arguments,1))},y.indexOf=function(e,t,n){if(null==e)return-1;var i=0,r=e.length;if(n){if("number"!=typeof n)return i=y.sortedIndex(e,t),e[i]===t?i:-1;i=n<0?Math.max(0,r+n):n}if(h&&e.indexOf===h)return e.indexOf(t,n);for(;i<r;i++)if(e[i]===t)return i;return-1};var k=function(){};y.bind=function(e,t){var n,i;if(m&&e.bind===m)return m.apply(e,r.call(arguments,1));if(!y.isFunction(e))throw new TypeError;return n=r.call(arguments,2),i=function(){if(!(this instanceof i))return e.apply(t,n.concat(r.call(arguments)));k.prototype=e.prototype;var o=new k;k.prototype=null;var a=e.apply(o,n.concat(r.call(arguments)));return Object(a)===a?a:o}},y.partial=function(e){var t=r.call(arguments,1);return function(){for(var n=0,i=t.slice(),r=0,o=i.length;r<o;r++)i[r]===y&&(i[r]=arguments[n++]);for(;n<arguments.length;)i.push(arguments[n++]);return e.apply(this,i)}},y.once=y.partial(y.before,2),y.memoize=function(e,t){var n={};return t||(t=y.identity),function(){var i=t.apply(this,arguments);return y.has(n,i)?n[i]:n[i]=e.apply(this,arguments)}},y.delay=function(e,t){var n=r.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},y.defer=function(e){return y.delay.apply(y,[e,1].concat(r.call(arguments,1)))},y.throttle=function(e,t,n){var i,r,o,a=null,s=0;n||(n={});var l=function(){s=n.leading===!1?0:y.now(),a=null,o=e.apply(i,r),i=r=null};return function(){var u=y.now();s||n.leading!==!1||(s=u);var c=t-(u-s);return i=this,r=arguments,c<=0?(clearTimeout(a),a=null,s=u,o=e.apply(i,r),i=r=null):a||n.trailing===!1||(a=setTimeout(l,c)),o}},y.keys=function(e){if(!y.isObject(e))return[];if(v)return v(e);var t=[];for(var n in e)y.has(e,n)&&t.push(n);return t},y.invert=function(e){for(var t={},n=y.keys(e),i=0,r=n.length;i<r;i++)t[e[n[i]]]=n[i];return t},y.defaults=function(e){return w(r.call(arguments,1),function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])}),e},y.extend=function(e){return w(r.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},y.pick=function(e){var n={},i=o.apply(t,r.call(arguments,1));return w(i,function(t){t in e&&(n[t]=e[t])}),n},y.omit=function(e){var n={},i=o.apply(t,r.call(arguments,1));for(var a in e)y.contains(i,a)||(n[a]=e[a]);return n},y.clone=function(e){return y.isObject(e)?y.isArray(e)?e.slice():y.extend({},e):e},y.isArray=g||function(e){return"[object Array]"==a.call(e)},y.isObject=function(e){return e===Object(e)},w(["Arguments","Function","String","Number","Date","RegExp"],function(e){y["is"+e]=function(t){return a.call(t)=="[object "+e+"]"}}),y.isArguments(arguments)||(y.isArguments=function(e){return!(!e||!y.has(e,"callee"))}),y.isFunction=function(e){return"function"==typeof e},y.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},y.isNaN=function(e){return y.isNumber(e)&&e!=+e},y.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==a.call(e)},y.isNull=function(e){return null===e},y.isUndefined=function(e){return void 0===e},y.has=function(e,t){return s.call(e,t)},y.identity=function(e){return e},y.constant=function(e){return function(){return e}},y.property=function(e){return function(t){return t[e]}},y.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},y.matches=function(e){return function(t){if(t===e)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0}},y.now=Date.now||function(){return(new Date).getTime()},y.result=function(e,t){if(null!=e){var n=e[t];return y.isFunction(n)?n.call(e):n}};var L=0;return y.uniqueId=function(e){var t=++L+"";return e?e+t:t},y}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(7),n(1),n(27),n(14),n(23),n(38),n(11),n(63),n(40),n(66),n(39),n(119),n(118),n(67)],r=function(e,t,n,i,r,a,s,l,u,c,d,f,p,h){var g={};return g.log=function(){window.console&&("object"===o(console.log)?console.log(Array.prototype.slice.call(arguments,0)):console.log.apply(console,arguments))},g.between=function(e,t,n){return Math.max(Math.min(e,n),t)},g.foreach=function(e,t){var n,i;for(n in e)"function"===g.typeOf(e.hasOwnProperty)?e.hasOwnProperty(n)&&(i=e[n],t(n,i)):(i=e[n],t(n,i))},g.indexOf=t.indexOf,g.noop=function(){},g.seconds=e.seconds,g.prefix=e.prefix,g.suffix=e.suffix,g.Timer=d,t.extend(g,a,s,u,n,l,i,r,c,f,p,h),g}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(1)],r=function(e){var t=[],n=t.slice,i={on:function(e,t,n){if(!a(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var i=this._events[e]||(this._events[e]=[]);return i.push({callback:t,context:n}),this},once:function u(t,n,i){if(!a(this,"once",t,[n,i])||!n)return this;var r=this,u=e.once(function(){r.off(t,u),n.apply(this,arguments)});return u._callback=n,this.on(t,u,i)},off:function(t,n,i){var r,o,s,l,u,c,d,f;if(!this._events||!a(this,"off",t,[n,i]))return this;if(!t&&!n&&!i)return this._events=void 0,this;for(l=t?[t]:e.keys(this._events),u=0,c=l.length;u<c;u++)if(t=l[u],s=this._events[t]){if(this._events[t]=r=[],n||i)for(d=0,f=s.length;d<f;d++)o=s[d],(n&&n!==o.callback&&n!==o.callback._callback||i&&i!==o.context)&&r.push(o);r.length||delete this._events[t]}return this},trigger:function(e){if(!this._events)return this;var t=n.call(arguments,1);if(!a(this,"trigger",e,t))return this;var i=this._events[e],r=this._events.all;return i&&s(i,t,this),r&&s(r,arguments,this),this},triggerSafe:function(e){if(!this._events)return this;var t=n.call(arguments,1);if(!a(this,"trigger",e,t))return this;var i=this._events[e],r=this._events.all;return i&&l(i,t,this,e),r&&l(r,arguments,this,e),this}},r=/\s+/,a=function(e,t,n,i){if(!n)return!0;if("object"===("undefined"==typeof n?"undefined":o(n))){for(var a in n)e[t].apply(e,[a,n[a]].concat(i));return!1}if(r.test(n)){for(var s=n.split(r),l=0,u=s.length;l<u;l++)e[t].apply(e,[s[l]].concat(i));return!1}return!0},s=function(e,t,n){var i,r=-1,o=e.length,a=t[0],s=t[1],l=t[2];switch(t.length){case 0:for(;++r<o;)(i=e[r]).callback.call(i.context||n);return;case 1:for(;++r<o;)(i=e[r]).callback.call(i.context||n,a);return;case 2:for(;++r<o;)(i=e[r]).callback.call(i.context||n,a,s);return;case 3:for(;++r<o;)(i=e[r]).callback.call(i.context||n,a,s,l);return;default:for(;++r<o;)(i=e[r]).callback.apply(i.context||n,t);return}},l=function(e,t,n,i){for(var r,o=-1,a=e.length;++o<a;)try{r=e[o],r.callback.apply(r.context||n,t)}catch(s){console.log('Error in "'+i+'" event handler:',s)}};return i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e={DRAG:"drag",DRAG_START:"dragStart",DRAG_END:"dragEnd",CLICK:"click",DOUBLE_CLICK:"doubleClick",TAP:"tap",DOUBLE_TAP:"doubleTap",OVER:"over",MOVE:"move",OUT:"out"},t={COMPLETE:"complete",ERROR:"error",JWPLAYER_AD_CLICK:"adClick",JWPLAYER_AD_COMPANIONS:"adCompanions",JWPLAYER_AD_COMPLETE:"adComplete",JWPLAYER_AD_ERROR:"adError",JWPLAYER_AD_IMPRESSION:"adImpression",JWPLAYER_AD_META:"adMeta",JWPLAYER_AD_PAUSE:"adPause",JWPLAYER_AD_PLAY:"adPlay",JWPLAYER_AD_SKIPPED:"adSkipped",JWPLAYER_AD_TIME:"adTime",JWPLAYER_CAST_AD_CHANGED:"castAdChanged",JWPLAYER_MEDIA_COMPLETE:"complete",JWPLAYER_READY:"ready",JWPLAYER_MEDIA_SEEK:"seek",JWPLAYER_MEDIA_BEFOREPLAY:"beforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"beforeComplete",JWPLAYER_MEDIA_BUFFER_FULL:"bufferFull",JWPLAYER_DISPLAY_CLICK:"displayClick",JWPLAYER_PLAYLIST_COMPLETE:"playlistComplete",JWPLAYER_CAST_SESSION:"cast",JWPLAYER_MEDIA_ERROR:"mediaError",JWPLAYER_MEDIA_FIRST_FRAME:"firstFrame",JWPLAYER_MEDIA_PLAY_ATTEMPT:"playAttempt",JWPLAYER_MEDIA_LOADED:"loaded",JWPLAYER_MEDIA_SEEKED:"seeked",JWPLAYER_SETUP_ERROR:"setupError",JWPLAYER_ERROR:"error",JWPLAYER_PLAYER_STATE:"state",JWPLAYER_CAST_AVAILABLE:"castAvailable",JWPLAYER_MEDIA_BUFFER:"bufferChange",JWPLAYER_MEDIA_TIME:"time",JWPLAYER_MEDIA_TYPE:"mediaType",JWPLAYER_MEDIA_VOLUME:"volume",JWPLAYER_MEDIA_MUTE:"mute",JWPLAYER_MEDIA_META:"meta",JWPLAYER_MEDIA_LEVELS:"levels",JWPLAYER_MEDIA_LEVEL_CHANGED:"levelsChanged",JWPLAYER_CONTROLS:"controls",JWPLAYER_FULLSCREEN:"fullscreen",JWPLAYER_RESIZE:"resize",JWPLAYER_PLAYLIST_ITEM:"playlistItem",JWPLAYER_PLAYLIST_LOADED:"playlist",JWPLAYER_AUDIO_TRACKS:"audioTracks",JWPLAYER_AUDIO_TRACK_CHANGED:"audioTrackChanged",JWPLAYER_PLAYBACK_RATE_CHANGED:"playbackRateChanged",JWPLAYER_LOGO_CLICK:"logoClick",JWPLAYER_CAPTIONS_LIST:"captionsList",JWPLAYER_CAPTIONS_CHANGED:"captionsChanged",JWPLAYER_PROVIDER_CHANGED:"providerChanged",JWPLAYER_PROVIDER_FIRST_FRAME:"providerFirstFrame",JWPLAYER_USER_ACTION:"userAction",JWPLAYER_PROVIDER_CLICK:"providerClick",JWPLAYER_VIEW_TAB_FOCUS:"tabFocus",JWPLAYER_CONTROLBAR_DRAGGING:"scrubbing",JWPLAYER_INSTREAM_CLICK:"instreamClick",JWPLAYER_BREAKPOINT:"breakpoint"};return t.touchEvents=e,t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{BUFFERING:"buffering",IDLE:"idle",COMPLETE:"complete",PAUSED:"paused",PLAYING:"playing",ERROR:"error",LOADING:"loading",STALLED:"stalled"}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(3),n(4),n(1),n(2)],r=function(e,t,n,i){function r(e,t){return/touch/.test(e.type)?(e.originalEvent||e).changedTouches[0]["page"+t]:e["page"+t]}function o(e){var t=e||window.event;return e instanceof MouseEvent&&("which"in t?3===t.which:"button"in t&&2===t.button)}function a(e,t,n){var i;return i=t instanceof MouseEvent||!t.touches&&!t.changedTouches?t:t.touches&&t.touches.length?t.touches[0]:t.changedTouches[0],{type:e,sourceEvent:t,target:t.target,currentTarget:n,pageX:i.pageX,pageY:i.pageY}}function s(e){(e instanceof MouseEvent||e instanceof window.TouchEvent)&&(e.preventManipulation&&e.preventManipulation(),e.preventDefault&&e.preventDefault())}var l=t.touchEvents,u="PointerEvent"in window,c="ontouchstart"in window,d=!(u||c&&i.isMobile()),f=i.isFF()&&i.isOSX(),p=function(e,t){function i(e){"touch"!==e.pointerType&&y(l.OVER,e)}function c(e){"touch"!==e.pointerType&&y(l.MOVE,e)}function p(t){(d||u&&"touch"!==t.pointerType&&!e.contains(document.elementFromPoint(t.x,t.y)))&&y(l.OUT,t)}function h(e,t,n){e.removeEventListener(t,n),e.addEventListener(t,n)}function g(n){w=n.target,C=r(n,"X"),k=r(n,"Y"),o(n)||("pointerdown"===n.type&&n.isPrimary?(t.preventScrolling&&(E=n.pointerId,e.setPointerCapture(E)),h(e,"pointermove",v),h(e,"pointercancel",m),"mouse"===n.pointerType&&"OBJECT"===w.nodeName?h(document,"mouseup",m):h(e,"pointerup",m)):"mousedown"===n.type?(h(document,"mousemove",v),f&&"object"===n.target.nodeName.toLowerCase()?h(e,"click",m):h(document,"mouseup",m)):"touchstart"===n.type&&(h(w,"touchmove",v),h(w,"touchcancel",m),h(w,"touchend",m)),t.preventScrolling&&s(n))}function v(e){var n=6;if(A)y(l.DRAG,e);else{var i=r(e,"X"),o=r(e,"Y"),a=i-C,u=o-k;a*a+u*u>n*n&&(y(l.DRAG_START,e),A=!0,y(l.DRAG,e))}t.preventScrolling&&s(e)}function m(n){var i="pointerup"===n.type||"pointercancel"===n.type;i&&t.preventScrolling&&e.releasePointerCapture(E),e.removeEventListener("pointermove",v),e.removeEventListener("pointercancel",m),e.removeEventListener("pointerup",m),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",m),w&&(w.removeEventListener("touchmove",v),w.removeEventListener("touchcancel",m),w.removeEventListener("touchend",m)),A?y(l.DRAG_END,n):t.directSelect&&n.target!==e||n.type.indexOf("cancel")!==-1||("mouseup"===n.type||"click"===n.type||i&&"mouse"===n.pointerType?y(l.CLICK,n):(y(l.TAP,n),"touchend"===n.type&&s(n))),w=null,A=!1}function y(e,i){var r;if(t.enableDoubleTap&&(e===l.CLICK||e===l.TAP))if(n.now()-L<P){var o=e===l.CLICK?l.DOUBLE_CLICK:l.DOUBLE_TAP;r=a(o,i,b),j.trigger(o,r),L=0}else L=n.now();r=a(e,i,b),j.trigger(e,r)}var w,E,b=e,A=!1,C=0,k=0,L=0,P=300;t=t||{},u?(e.addEventListener("pointerdown",g),t.useHover&&(e.addEventListener("pointerover",i),e.addEventListener("pointerout",p)),t.useMove&&e.addEventListener("pointermove",c)):(d&&(e.addEventListener("mousedown",g),t.useHover&&(e.addEventListener("mouseover",i),e.addEventListener("mouseout",p)),t.useMove&&e.addEventListener("mousemove",c)),e.addEventListener("touchstart",g));var j=this;return this.triggerEvent=y,this.destroy=function(){this.off(),e.removeEventListener("touchstart",g),e.removeEventListener("mousedown",g),w&&(w.removeEventListener("touchmove",v),w.removeEventListener("touchcancel",m),w.removeEventListener("touchend",m),w=null),u&&(t.preventScrolling&&e.releasePointerCapture(E),e.removeEventListener("pointerover",i),e.removeEventListener("pointerdown",g),e.removeEventListener("pointermove",v),e.removeEventListener("pointermove",c),e.removeEventListener("pointercancel",m),e.removeEventListener("pointerout",p),e.removeEventListener("pointerup",m)),e.removeEventListener("click",m),e.removeEventListener("mouseover",i),e.removeEventListener("mousemove",c),e.removeEventListener("mouseout",p),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",m)},this};return p.getPointerType=function(e){return u&&e instanceof window.PointerEvent?"touch"===e.pointerType?"touch":"mouse":c&&e instanceof window.TouchEvent?"touch":"mouse"},n.extend(p.prototype,e),p}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){function t(e){return/[\(,]format=m3u8-/i.test(e)?"m3u8":!!/[\(,]format=mpd-/i.test(e)&&"mpd"}var n=function(e){return e.replace(/^\s+|\s+$/g,"")},i=function(e,t,n){for(e=""+e,n=n||"0";e.length<t;)e=n+e;return e},r=function(e,t){for(var n=0;n<e.attributes.length;n++)if(e.attributes[n].name&&e.attributes[n].name.toLowerCase()===t.toLowerCase())return e.attributes[n].value.toString();return""},o=function(e){if(!e||"rtmp"===e.substr(0,4))return"";var n=t(e);return n?n:(e=e.split("?")[0].split("#")[0],e.lastIndexOf(".")>-1?e.substr(e.lastIndexOf(".")+1,e.length).toLowerCase():void 0)},a=function(e){var t=parseInt(e/3600),n=parseInt(e/60)%60,r=e%60;return i(t,2)+":"+i(n,2)+":"+i(r.toFixed(3),6)},s=function(t,n){if(e.isNumber(t))return t;t=t.replace(",",".");var i=t.split(":"),r=i.length,o=0;if("s"===t.slice(-1))o=parseFloat(t);else if("m"===t.slice(-1))o=60*parseFloat(t);else if("h"===t.slice(-1))o=3600*parseFloat(t);else if(r>1){var a=r-1;4===r&&(n&&(o=parseFloat(i[a])/n),a-=1),o+=parseFloat(i[a]),o+=60*parseFloat(i[a-1]),r>=3&&(o+=3600*parseFloat(i[a-2]))}else o=parseFloat(t);return o},l=function(t,n){return e.map(t,function(e){return n+e})},u=function(t,n){return e.map(t,function(e){return e+n})};return{trim:n,pad:i,xmlAttribute:r,extension:o,hms:a,seconds:s,suffix:u,prefix:l}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,function(e,t,n){var i,r;i=[n(2),n(4),n(5),n(1)],r=function(e,t,n,i){var r=e.noop,o=i.constant(!1),a={supports:o,play:r,load:r,stop:r,volume:r,mute:r,seek:r,resize:r,remove:r,destroy:r,setVisibility:r,setFullscreen:o,getFullscreen:r,getContainer:r,setContainer:o,getName:r,getQualityLevels:r,getCurrentQuality:r,setCurrentQuality:r,getAudioTracks:r,getCurrentAudioTrack:r,setCurrentAudioTrack:r,setPlaybackRate:r,getPlaybackRate:function(){return 1},checkComplete:r,setControls:r,attachMedia:r,detachMedia:r,setState:function(e){var i=this.state||n.IDLE;this.state=e,e!==i&&this.trigger(t.JWPLAYER_PLAYER_STATE,{newstate:e})},sendMediaType:function(e){var n=e[0].type,i="oga"===n||"aac"===n||"mp3"===n||"mpeg"===n||"vorbis"===n;this.trigger(t.JWPLAYER_MEDIA_TYPE,{mediaType:i?"audio":"video"})}};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={},n={TIT2:"title",TT2:"title",WXXX:"url",TPE1:"artist",TP1:"artist",TALB:"album",TAL:"album"};return t.utf8ArrayToStr=function(e,t){var n,i,r,o,a,s;for(n="",r=e.length,i=t||0;i<r;)if(o=e[i++],0!==o&&3!==o)switch(o>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n+=String.fromCharCode(o);break;case 12:case 13:a=e[i++],n+=String.fromCharCode((31&o)<<6|63&a);break;case 14:a=e[i++],s=e[i++],n+=String.fromCharCode((15&o)<<12|(63&a)<<6|(63&s)<<0)}return n},t.utf16BigEndianArrayToStr=function(e,t){var n,i,r;for(n="",r=e.length-1,i=t||0;i<r;)254===e[i]&&255===e[i+1]||(n+=String.fromCharCode((e[i]<<8)+e[i+1])),i+=2;return n},t.syncSafeInt=function(e){var n=t.arrayToInt(e);return 127&n|(32512&n)>>1|(8323072&n)>>2|(2130706432&n)>>3},t.arrayToInt=function(e){for(var t="0x",n=0;n<e.length;n++)e[n]<16&&(t+="0"),t+=e[n].toString(16);return parseInt(t)},t.parseID3=function(i){return e.reduce(i,function(i,r){if(!("value"in r)&&"data"in r&&r.data instanceof ArrayBuffer){var o=r,a=new Uint8Array(o.data),s=a.length;r={value:{key:"",data:""}};for(var l=10;l<14&&l<a.length&&0!==a[l];)r.value.key+=String.fromCharCode(a[l]),l++;var u=19,c=a[u];3!==c&&0!==c||(c=a[++u],s--);var d=0;if(1!==c&&2!==c)for(var f=u+1;f<s;f++)if(0===a[f]){d=f-u;break}if(d>0){var p=t.utf8ArrayToStr(a.subarray(u,u+=d),0);if("PRIV"===r.value.key){if("com.apple.streaming.transportStreamTimestamp"===p){var h=1&t.syncSafeInt(a.subarray(u,u+=4)),g=t.syncSafeInt(a.subarray(u,u+=4));h&&(g+=4294967296),r.value.data=g}else r.value.data=t.utf8ArrayToStr(a,u+1);r.value.info=p}else r.value.info=p,r.value.data=t.utf8ArrayToStr(a,u+1)}else{var v=a[u];1===v||2===v?r.value.data=t.utf16BigEndianArrayToStr(a,u+1):r.value.data=t.utf8ArrayToStr(a,u+1)}}if(n.hasOwnProperty(r.value.key)&&(i[n[r.value.key]]=r.value.data),r.value.info){var m=i[r.value.key];e.isObject(m)||(m={},i[r.value.key]=m),m[r.value.info]=r.value.data}else i[r.value.key]=r.value.data;return i},{})},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{createId:function(e,t){var n,i=e.kind||"cc";return n=e["default"]||e.defaulttrack?"default":e._id||e.file||i+t},createLabel:function(e,t){var n=e.label||e.name||e.language;return n||(n="Unknown CC",t+=1,t>1&&(n+=" ["+t+"]")),{label:n,unknownCount:t}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2),n(20),n(35),n(103),n(36)],r=function(e,t,i,r,o,a){function s(e,t,n,a){var s,u,c=e.responseXML?e.responseXML.firstChild:null;if(c)for("xml"===i.localName(c)&&(c=c.nextSibling);c.nodeType===c.COMMENT_NODE;)c=c.nextSibling;try{if(c&&"tt"===i.localName(c))s=o(e.responseXML),u=this.convertToVTTCues(s),delete t.xhr,n(u);else{var d=e.responseText;d.indexOf("WEBVTT")>=0?l(d,t,n,a):(s=r(d),u=this.convertToVTTCues(s),delete t.xhr,n(u))}}catch(f){delete t.xhr,a(f)}}function l(e,t,i,r){n.e(13,function(require){var o=n(25),a=new o(window),s=[];a.oncue=function(e){s.push(e)},a.onflush=function(){delete t.xhr,i(s)};try{a.parse(e)}catch(l){delete t.xhr,r(l)}})}var u={};return u.loadFile=function(e,n,i){e.xhr=t.ajax(e.file,function(t){s.call(u,t,e,n,i)},i)},u.cancelXhr=function(t){e.each(t,function(e){var t=e.xhr;t&&(t.onload=null,t.onreadystatechange=null,t.onerror=null,"abort"in t&&t.abort()),delete e.xhr})},u.convertToVTTCues=function(t){var n=e.map(t,function(e){return new a(e.begin,e.end,e.text)});return n},u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7),n(1),n(115)],r=function(e,t,n){var i={};i.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild},i.styleDimension=function(e){return e+(e.toString().indexOf("%")>0?"":"px")};var r=function(e){return t.isString(e.className)?e.className.split(" "):[]},o=function(t,n){n=e.trim(n),t.className!==n&&(t.className=n)};return i.classList=function(e){return e.classList?e.classList:r(e)},i.hasClass=n.hasClass,i.addClass=function(e,n){var i=r(e),a=t.isArray(n)?n:n.split(" ");t.each(a,function(e){t.contains(i,e)||i.push(e)}),o(e,i.join(" "))},i.removeClass=function(e,n){var i=r(e),a=t.isArray(n)?n:n.split(" ");o(e,t.difference(i,a).join(" "))},i.replaceClass=function(e,t,n){var i=e.className||"";t.test(i)?i=i.replace(t,n):n&&(i+=" "+n),o(e,i)},i.toggleClass=function(e,n,r){var o=i.hasClass(e,n);r=t.isBoolean(r)?r:!o,r!==o&&(r?i.addClass(e,n):i.removeClass(e,n))},i.emptyElement=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},i.addStyleSheet=function(e){var t=document.createElement("link");t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)},i.empty=function(e){if(e)for(;e.childElementCount>0;)e.removeChild(e.children[0])},i.bounds=function(e){var t={left:0,right:0,width:0,height:0,top:0,bottom:0};if(!e||!document.body.contains(e))return t;var n=e.getBoundingClientRect(),i=window.pageYOffset,r=window.pageXOffset;return n.width||n.height||n.left||n.top?(t.left=n.left+r,t.right=n.right+r,t.top=n.top+i,t.bottom=n.bottom+i,t.width=n.right-n.left,t.height=n.bottom-n.top,t):t},i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(4),n(3),n(1)],r=function(e,t,n){var i={},r={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},o=function(o,a){function s(t){c=r.ERROR,u.trigger(e.ERROR,t)}function l(t){c=r.COMPLETE,u.trigger(e.COMPLETE,t)}var u=n.extend(this,t),c=r.NEW;this.addEventListener=this.on,this.removeEventListener=this.off,this.makeStyleLink=function(e){var t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,t},this.makeScriptTag=function(e){var t=document.createElement("script");return t.src=e,t},this.makeTag=a?this.makeStyleLink:this.makeScriptTag,this.load=function(){if(c===r.NEW){var t=i[o];if(t&&(c=t.getStatus(),c<2))return t.on(e.ERROR,s),void t.on(e.COMPLETE,l);var n=document.getElementsByTagName("head")[0]||document.documentElement,u=this.makeTag(o),d=!1;u.onload=u.onreadystatechange=function(e){d||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(d=!0,l(e),u.onload=u.onreadystatechange=null,n&&u.parentNode&&!a&&n.removeChild(u))},u.onerror=s,n.insertBefore(u,n.firstChild),c=r.LOADING,i[o]=this}},this.getStatus=function(){return c}};return o.loaderstatus=r,o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t="free",n="premium",i="enterprise",r="platinum",o="ads",a="unlimited",s="trial",l={setup:[t,n,i,o,a,s,r],dash:[n,i,o,a,s,r],drm:[i,o,a,s],hls:[n,o,i,a,s,r],ads:[o,a,s,r,i],casting:[n,i,o,a,s,r],jwpsrv:[t,n,i,o,s,r]},u=function(t){return function(n){return e.contains(l[n],t)}};return u}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,function(e,t,n){var i,r;i=[n(7)],r=function(e){return{localName:function t(e){var t="";return e&&(e.localName?t=e.localName:e.baseName&&(t=e.baseName)),t},textContent:function n(t){var n="";return t&&(t.textContent?n=e.trim(t.textContent):t.text&&(n=e.trim(t.text))),n},getChildNode:function(e,t){return e.childNodes[t]},numChildren:function(e){return e.childNodes?e.childNodes.length:0}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(107),n(108),n(55),n(26)],r=function(e,t,n,i){var r={},o={},a=function(n,i){return o[n]=new e(new t(r),i),o[n]},s=function(e,t,o,a){var s=i.getPluginName(e);r[s]||(r[s]=new n(e)),r[s].registerPlugin(e,t,o,a)};return{loadPlugins:a,registerPlugin:s}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{repo:"http://ssl.p.jwpcdn.com/player/v/",SkinsIncluded:["seven"],SkinsLoadable:["beelden","bekle","five","glow","roundster","six","stormtrooper","vapor"],dvrSeekLimit:-25}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(7),n(49)],r=function(e,t){function n(e){e=e.split("-");for(var t=1;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join("")}function i(t,n){return""===n||void 0===n||null===n?"":"string"==typeof n&&isNaN(n)?/png|gif|jpe?g/i.test(n)&&n.indexOf("url")<0?"url("+n+")":n:0===n||"z-index"===t||"opacity"===t?""+n:/color/i.test(t)?"#"+e.pad(n.toString(16).replace(/^0x/i,""),6):Math.ceil(n)+"px"}var r,a=function(e,n,i,r){i=i||"all-players";var a="";if("object"===("undefined"==typeof n?"undefined":o(n))){var l=document.createElement("div");s(l,n);var u=l.style.cssText;r&&u&&(u=u.replace(/;/g," !important;")),a="{"+u+"}"}else"string"==typeof n&&(a=n);return""===a||"{}"===a?void t.clear(i,e):void t.style([[e,e+a]],i)},s=function(e,t){if(void 0!==e&&null!==e){void 0===e.length&&(e=[e]);var r,o={};for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=i(r,t[r]));for(var a=0;a<e.length;a++){var s,l=e[a];if(void 0!==l&&null!==l)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(s=n(r),l.style[s]!==o[r]&&(l.style[s]=o[r]))}}},l=function(e,t){s(e,{transform:t,webkitTransform:t,msTransform:t,mozTransform:t,oTransform:t})},u=function(e,t){var n="rgb",i=void 0!==t&&100!==t;if(i&&(n+="a"),!r){var o=document.createElement("canvas");o.height=1,o.width=1,r=o.getContext("2d")}e?isNaN(parseInt(e,16))||(e="#"+e):e="#000000",r.clearRect(0,0,1,1),r.fillStyle=e,r.fillRect(0,0,1,1);var a=r.getImageData(0,0,1,1).data;return n+="("+a[0]+", "+a[1]+", "+a[2],i&&(n+=", "+t/100),n+")"};return{css:a,style:s,clearCss:t.clear,transform:l,hexToRgba:u,getRgba:u}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,function(e,t,n){var i,r;i=[n(7)],r=function(e){var t={},n=t.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};return t.getPluginPathType=function(t){if("string"==typeof t){t=t.split("?")[0];var i=t.indexOf("://");if(i>0)return n.ABSOLUTE;var r=t.indexOf("/"),o=e.extension(t);return!(i<0&&r<0)||o&&isNaN(o)?n.RELATIVE:n.CDN}},t.getPluginName=function(e){return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")},t.getPluginVersion=function(e){return e.replace(/[^-]*-?([^\.]*).*$/,"$1")},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){function t(e){return function(){return i(e)}}var n={},i=e.memoize(function(e){var t=navigator.userAgent.toLowerCase();return null!==t.match(e)}),r=n.isInt=function(e){return parseFloat(e)%1===0};n.isFlashSupported=function(){var e=n.flashVersion();return e&&e>=18},n.isFF=t(/gecko\//i),n.isIPod=t(/iP(hone|od)/i),n.isIPad=t(/iPad/i),n.isSafari602=t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i),n.isOSX=t(/Mac OS X/i),n.isFacebook=t(/FBAV/i);var o=n.isEdge=function(e){return i(e?new RegExp("\\sedge\\/"+e,"i"):/\sEdge\/\d+/i)},a=n.isIETrident=t(/trident\/.+rv:\s*11/i),s=n.isMSIE=function(e){return e?(e=parseFloat(e).toFixed(1),i(new RegExp("msie\\s*"+e,"i"))):i(/msie/i)};n.isChrome=function(){return i(/\s(?:Chrome|CriOS)\//i)&&!n.isEdge()},n.isIE=function(e){return e?(e=parseFloat(e).toFixed(1),e>=12?o(e):e>=11?a():s(e)):o()||a()||s()},n.isSafari=function(){return i(/safari/i)&&!i(/chrome/i)&&!i(/crios/i)&&!i(/chromium/i)&&!i(/android/i)};var l=n.isIOS=function(e){return i(e?new RegExp("iP(hone|ad|od).+\\s(OS\\s"+e+"|.*\\sVersion/"+e+")","i"):/iP(hone|ad|od)/i)};n.isAndroidNative=function(e){return u(e,!0)};var u=n.isAndroid=function(e,t){return!(t&&i(/chrome\/[123456789]/i)&&!i(/chrome\/18/))&&(e?(r(e)&&!/\./.test(e)&&(e=""+e+"."),i(new RegExp("Android\\s*"+e,"i"))):i(/Android/i))};return n.isMobile=function(){return l()||u()},n.isIframe=function(){try{return window.self!==window.top}catch(e){return!0}},n.flashVersion=function(){if(n.isAndroid())return 0;var e,t=navigator.plugins;if(t&&(e=t["Shockwave Flash"],e&&e.description))return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/,"$1"));if("undefined"!=typeof window.ActiveXObject){try{if(e=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/,"."))}catch(i){return 0}return e}return 0},n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return"7.12.13+commercial_v7-12-13.244.commercial.e03d90.hls.js..jwplayer.bdc5e4.freewheel.98a531.googima.56bbb2.vast.aa7c7d.analytics.785f4d.plugin-gapro.fb7ea6.plugin-related.7adae3.plugin-sharing.586630.vr-plugin.725b2e";
}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(16)],r=function(e,t){var n,i=[{configName:"clearkey",keyName:"org.w3.clearkey"},{configName:"widevine",keyName:"com.widevine.alpha"},{configName:"playready",keyName:"com.microsoft.playready"}],r=[],o={},a=function(t){var n=t.get("playlist");return!!t.get("drm")||e.some(n,function(t){return!!t.drm||e.some(t.sources,function(e){return!!e.drm})})},s=function(e){return new Promise(function(t,n){var i;try{i=new window.MSMediaKeys(e)}catch(r){}i?t():n()})},l=function(t){var a=s;return navigator.requestMediaKeySystemAccess&&(a=navigator.requestMediaKeySystemAccess.bind(navigator)),n?n.then(t):(e.forEach(i,function(e){var t=a(e.keyName,[{initDataTypes:["cenc"],videoCapabilities:[{contentType:'video/mp4;codecs="avc1.4d401e"'}],audioCapabilities:[{contentType:'audio/mp4;codecs="mp4a.40.2"'}]}]).then(function(){o[e.configName]=!0})["catch"](function(){o[e.configName]=!1});r.push(t)}),n=Promise.all(r).then(t))},u=function(){return!!navigator.requestMediaKeySystemAccess&&!!MediaKeySystemAccess.prototype.getConfiguration||!!window.MSMediaKeys},c=function(e){return o[e]},d=function(t){n||console.error('DRM only supported with "drm" block in initial setup.',t);var i=e.keys(t);return e.some(i,function(e){return c(e)})};return{containsDrm:a,probe:function(e,n){u()&&t(n)("drm")?l(e):e()},anySupported:d,isSupported:c}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,function(e,t,n){var i,r;i=[n(2),n(45),n(99),n(1),n(3),n(117),n(4),n(5)],r=function(e,t,n,i,r,o,a,s){var l=function(){function o(e,t){var n=i.extend({},t,{type:e}),r=this.mediaModel;switch(e){case"flashThrottle":var o="resume"!==t.state;this.set("flashThrottle",o),this.set("flashBlocked",o);break;case"flashBlocked":return void this.set("flashBlocked",!0);case"flashUnblocked":return void this.set("flashBlocked",!1);case"volume":return void this.set(e,t[e]);case"mute":return void(this.get("autostartMuted")||this.set(e,t[e]));case"ratechange":var l=t.playbackRate;return void(l>0&&this.set("playbackRate",l));case a.JWPLAYER_MEDIA_TYPE:return void(r.get("mediaType")!==t.mediaType&&(r.set("mediaType",t.mediaType),this.mediaController.trigger(e,n)));case a.JWPLAYER_PLAYER_STATE:return void r.set("state",t.newstate);case a.JWPLAYER_MEDIA_BUFFER:this.set("buffer",t.bufferPercent);case a.JWPLAYER_MEDIA_META:var u=t.duration;i.isNumber(u)&&!i.isNaN(u)&&(r.set("duration",u),this.set("duration",u));break;case a.JWPLAYER_MEDIA_BUFFER_FULL:r.get("playAttempt")?this.playVideo():r.on("change:playAttempt",function(){this.playVideo()},this),this.setPlaybackRate(this.get("defaultPlaybackRate"));break;case a.JWPLAYER_MEDIA_TIME:r.set("position",t.position),this.set("position",t.position),i.isNumber(t.duration)&&(r.set("duration",t.duration),this.set("duration",t.duration));break;case a.JWPLAYER_PROVIDER_CHANGED:this.set("provider",f.getName());break;case a.JWPLAYER_MEDIA_LEVELS:this.setQualityLevel(t.currentQuality,t.levels),r.set("levels",t.levels);break;case a.JWPLAYER_MEDIA_LEVEL_CHANGED:this.setQualityLevel(t.currentQuality,t.levels),this.persistQualityLevel(t.currentQuality,t.levels);break;case a.JWPLAYER_MEDIA_COMPLETE:return h=!0,this.mediaController.trigger(a.JWPLAYER_MEDIA_BEFORECOMPLETE,n),void(g&&this.playbackComplete());case a.JWPLAYER_AUDIO_TRACKS:this.setCurrentAudioTrack(t.currentTrack,t.tracks),r.set("audioTracks",t.tracks);break;case a.JWPLAYER_AUDIO_TRACK_CHANGED:this.setCurrentAudioTrack(t.currentTrack,t.tracks);break;case"subtitlesTrackChanged":this.persistVideoSubtitleTrack(t.currentTrack,t.tracks);break;case"visualQuality":var c=i.extend({},t);r.set("visualQuality",c);break;case"autoplayFailed":this.set("autostartFailed",!0),r.get("state")===s.PLAYING&&r.set("state",s.PAUSED)}this.mediaController.trigger(e,n)}function l(){return!!e.isIOS()&&!(e.isIOS(6)||e.isIOS(7)||e.isIOS(8)||e.isIOS(9))}function c(){var t=!p.get("advertising")||p.get("advertising").autoplayadsmuted,n=l()&&(e.isSafari()||e.isChrome()||e.isFacebook()),i=e.isAndroid()&&e.isChrome(),r=n||i,o=1===p.get("sdkplatform");return!p.get("sdkplatform")&&t&&r||o}var d,f,p=this,h=!1,g=!0;this.mediaController=i.extend({},r),this.mediaModel=new u,n.model(this),this.set("mediaModel",this.mediaModel),this.setup=function(e){return i.extend(this.attributes,e,{item:0,itemMeta:{},playlistItem:void 0,state:s.IDLE,flashBlocked:!1,provider:void 0,duration:0,position:0,buffer:0}),this.updateProviders(),this},this.getConfiguration=function(){return i.omit(this.clone(),["mediaModel"])},this.updateProviders=function(){d=new t(this.getConfiguration())},this.setQualityLevel=function(e,t){e>-1&&t.length>1&&"youtube"!==f.getName().name&&this.mediaModel.set("currentLevel",parseInt(e))},this.persistQualityLevel=function(e,t){var n=t[e]||{},i=n.label;this.set("qualityLabel",i)},this.setCurrentAudioTrack=function(e,t){e>-1&&t.length>0&&e<t.length&&this.mediaModel.set("currentAudioTrack",parseInt(e))},this.onMediaContainer=function(){var e=this.get("mediaContainer");f.setContainer(e)},this.changeVideoProvider=function(e){if(this.off("change:mediaContainer",this.onMediaContainer),f&&(f.off(null,null,this),f.getContainer()&&f.remove(),delete f.instreamMode),!e)return this.resetProvider(),void this.set("provider",void 0);f=new e(p.get("id"),p.getConfiguration());var t=this.get("mediaContainer");t?f.setContainer(t):this.once("change:mediaContainer",this.onMediaContainer),f.getName().name.indexOf("flash")===-1&&(this.set("flashThrottle",void 0),this.set("flashBlocked",!1)),f.volume(p.get("volume")),f.mute(this.autoStartOnMobile()||p.get("mute")),f.on("all",o,this),this.setPlaybackRate(this.get("defaultPlaybackRate")),this.set("playbackRate",f.getPlaybackRate()),this.get("instreamMode")===!0&&(f.instreamMode=!0),this.set("renderCaptionsNatively",f.renderNatively)},this.checkComplete=function(){return h},this.detachMedia=function(){return g=!1,f.off("all",o,this),f.detachMedia()},this.attachMedia=function(){g=!0,f.off("all",o,this),f.on("all",o,this),h&&this.playbackComplete(),f.attachMedia(),this.setPlaybackRate(this.get("defaultPlaybackRate"))},this.playbackComplete=function(){h=!1,f.setState(s.COMPLETE),this.mediaController.trigger(a.JWPLAYER_MEDIA_COMPLETE,{})},this.destroy=function(){this.off(),f&&(f.off(null,null,this),f.destroy())},this.getVideo=function(){return f},this.setFullscreen=function(e){e=!!e,e!==p.get("fullscreen")&&p.set("fullscreen",e)},this.chooseProvider=function(e){return d.choose(e).provider},this.setItemIndex=function(e){var t=this.get("playlist");e=parseInt(e,10)||0,e=(e+t.length)%t.length,this.set("item",e),this.set("playlistItem",t[e]),this.setActiveItem(t[e])},this.setActiveItem=function(t){this.mediaModel.off(),this.mediaModel=new u,this.set("itemMeta",{}),this.set("mediaModel",this.mediaModel),this.set("position",t.starttime||0),this.set("minDvrWindow",t.minDvrWindow),this.set("duration",t.duration&&e.seconds(t.duration)||0),this.setProvider(t)},this.setProvider=function(e){var t=e&&e.sources&&e.sources[0];if(void 0!==t){var n=this.chooseProvider(t);n&&f instanceof n||p.changeVideoProvider(n),f&&(f.init&&f.init(e),this.set("provider",f.getName()),this.trigger("itemReady",e))}},this.getProviders=function(){return d},this.resetProvider=function(){f=null},this.setVolume=function(e){e=Math.round(e),this.set("volume",e),f&&f.volume(e);var t=0===e;t!==this.getMute()&&this.setMute(t)},this.getMute=function(){return this.get("autostartMuted")||this.get("mute")},this.setMute=function(t){if(e.exists(t)||(t=!this.getMute()),this.set("mute",t),f&&f.mute(t),!t){var n=Math.max(10,this.get("volume"));this.set("autostartMuted",!1),this.setVolume(n)}},this.setStreamType=function(e){this.set("streamType",e),"LIVE"===e&&this.setPlaybackRate(1)},this.setPlaybackRate=function(t){g&&i.isNumber(t)&&(t=e.between(t,.25,4),"LIVE"===this.get("streamType")&&(t=1),this.set("defaultPlaybackRate",t),f&&f.setPlaybackRate&&f.setPlaybackRate(t))},this.loadVideo=function(t){t||(t=this.get("playlist")[this.get("item")]),this.set("position",t.starttime||0),this.set("duration",t.duration&&e.seconds(t.duration)||0),this.mediaModel.set("playAttempt",!0),this.mediaController.trigger(a.JWPLAYER_MEDIA_PLAY_ATTEMPT,{playReason:this.get("playReason")}),f.load(t)},this.stopVideo=function(){f&&f.stop()},this.playVideo=function(){f.play()},this.persistCaptionsTrack=function(){var e=this.get("captionsTrack");e?this.set("captionLabel",e.name):this.set("captionLabel","Off")},this.setVideoSubtitleTrack=function(e,t){this.set("captionsIndex",e),e&&t&&e<=t.length&&t[e-1].data&&this.set("captionsTrack",t[e-1]),f&&f.setSubtitlesTrack&&f.setSubtitlesTrack(e)},this.persistVideoSubtitleTrack=function(e,t){this.setVideoSubtitleTrack(e,t),this.persistCaptionsTrack()},this.autoStartOnMobile=function(){return this.get("autostart")&&c()},this.setAutoStart=function(e){i.isUndefined(e)||this.set("autostart",e);var t=this.autoStartOnMobile();t&&this.set("autostartMuted",!0),this.set("playOnViewable",t||"viewable"===this.get("autostart"))}},u=l.MediaModel=function(){this.set("state",s.IDLE)};return i.extend(l.prototype,o),i.extend(u.prototype,o),l}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(5)],r=function(e){function t(t){return t===e.COMPLETE||t===e.ERROR?e.IDLE:t}return function(e,n,i){if(n=t(n),i=t(i),n!==i){var r=n.replace(/(?:ing|d)$/,""),o={type:r,newstate:n,oldstate:i,reason:e.mediaModel.get("state")};"play"===r?o.playReason=e.get("playReason"):"pause"===r&&(o.pauseReason=e.get("pauseReason")),this.trigger(r,o)}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(7)],r=function(e,t){function n(e){var t={},n=e.split("\r\n");1===n.length&&(n=e.split("\n"));var r=1;if(n[0].indexOf(" --> ")>0&&(r=0),n.length>r+1&&n[r+1]){var o=n[r],a=o.indexOf(" --> ");a>0&&(t.begin=i(o.substr(0,a)),t.end=i(o.substr(a+5)),t.text=n.slice(r+1).join("\r\n"))}return t}var i=e.seconds;return function(e){var i=[];e=t.trim(e);var r=e.split("\r\n\r\n");1===r.length&&(r=e.split("\n\n"));for(var o=0;o<r.length;o++)if("WEBVTT"!==r[o]){var a=n(r[o]);a.text&&i.push(a)}return i}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i;i=function(){function e(e){if("string"!=typeof e)return!1;var t=r[e.toLowerCase()];return!!t&&e.toLowerCase()}function t(e){if("string"!=typeof e)return!1;var t=o[e.toLowerCase()];return!!t&&e.toLowerCase()}function n(n,r,o){var a=this;a.hasBeenReset=!1;var s="",l=!1,u=n,c=r,d=o,f=null,p="",h=!0,g="auto",v="start",m=50,y="middle",w=50,E="middle";Object.defineProperty(a,"id",{enumerable:!0,get:function(){return s},set:function(e){s=""+e}}),Object.defineProperty(a,"pauseOnExit",{enumerable:!0,get:function(){return l},set:function(e){l=!!e}}),Object.defineProperty(a,"startTime",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");u=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"endTime",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");c=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"text",{enumerable:!0,get:function(){return d},set:function(e){d=""+e,this.hasBeenReset=!0}}),Object.defineProperty(a,"region",{enumerable:!0,get:function(){return f},set:function(e){f=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"vertical",{enumerable:!0,get:function(){return p},set:function(t){var n=e(t);if(n===!1)throw new SyntaxError("An invalid or illegal string was specified.");p=n,this.hasBeenReset=!0}}),Object.defineProperty(a,"snapToLines",{enumerable:!0,get:function(){return h},set:function(e){h=!!e,this.hasBeenReset=!0}}),Object.defineProperty(a,"line",{enumerable:!0,get:function(){return g},set:function(e){if("number"!=typeof e&&e!==i)throw new SyntaxError("An invalid number or illegal string was specified.");g=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"lineAlign",{enumerable:!0,get:function(){return v},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");v=n,this.hasBeenReset=!0}}),Object.defineProperty(a,"position",{enumerable:!0,get:function(){return m},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");m=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"positionAlign",{enumerable:!0,get:function(){return y},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");y=n,this.hasBeenReset=!0}}),Object.defineProperty(a,"size",{enumerable:!0,get:function(){return w},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");w=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"align",{enumerable:!0,get:function(){return E},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");E=n,this.hasBeenReset=!0}}),a.displayState=void 0}if(window.VTTCue)return window.VTTCue;var i="auto",r={"":!0,lr:!0,rl:!0},o={start:!0,middle:!0,end:!0,left:!0,right:!0};return n.prototype.getCueAsHTML=function(){var e=window.WebVTT;return e.convertCueToDOMTree(window,this.text)},n}.call(t,n,t,e),!(void 0!==i&&(e.exports=i))},function(e,t,n){var i,r;i=[n(1),n(54),n(106)],r=function(e,t,n){var i={sources:[],tracks:[],minDvrWindow:120};return function(r){r=r||{},e.isArray(r.tracks)||delete r.tracks;var o=e.extend({},i,r);e.isObject(o.sources)&&!e.isArray(o.sources)&&(o.sources=[t(o.sources)]),e.isArray(o.sources)&&0!==o.sources.length||(r.levels?o.sources=r.levels:o.sources=[t(r)]);for(var a=0;a<o.sources.length;a++){var s=o.sources[a];if(s){var l=s["default"];l?s["default"]="true"===l.toString():s["default"]=!1,o.sources[a].label||(o.sources[a].label=a.toString()),o.sources[a]=t(o.sources[a])}}return o.sources=e.compact(o.sources),e.isArray(o.tracks)||(o.tracks=[]),e.isArray(o.captions)&&(o.tracks=o.tracks.concat(o.captions),delete o.captions),o.tracks=e.compact(e.map(o.tracks,n)),o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(40)],r=function(e,t){function n(e){return/^(?:(?:https?|file)\:)?\/\//.test(e)}function i(t){return e.some(t,function(e){return"parsererror"===e.nodeName})}var r={};return r.getAbsolutePath=function(e,i){if(t.exists(i)||(i=document.location.href),t.exists(e)){if(n(e))return e;var r,o=i.substring(0,i.indexOf("://")+3),a=i.substring(o.length,i.indexOf("/",o.length+1));if(0===e.indexOf("/"))r=e.split("/");else{var s=i.split("?")[0];s=s.substring(o.length+a.length+1,s.lastIndexOf("/")),r=s.split("/").concat(e.split("/"))}for(var l=[],u=0;u<r.length;u++)r[u]&&t.exists(r[u])&&"."!==r[u]&&(".."===r[u]?l.pop():l.push(r[u]));return o+a+"/"+l.join("/")}},r.getScriptPath=e.memoize(function(e){for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n++){var i=t[n].src;if(i){var r=i.indexOf("/"+e);if(r>=0)return i.substr(0,r+1)}}return""}),r.parseXML=function(e){var t=null;try{"DOMParser"in window?(t=(new window.DOMParser).parseFromString(e,"text/xml"),(i(t.childNodes)||t.childNodes&&i(t.childNodes[0].childNodes))&&(t=null)):(t=new window.ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e))}catch(n){}return t},r.serialize=function(e){if(void 0===e)return null;if("string"==typeof e&&e.length<6){var t=e.toLowerCase();if("true"===t)return!0;if("false"===t)return!1;if(!isNaN(Number(e))&&!isNaN(parseFloat(e)))return Number(e)}return e},r.parseDimension=function(e){return"string"==typeof e?""===e?0:e.lastIndexOf("%")>-1?e:parseInt(e.replace("px",""),10):e},r.timeFormat=function(t,n){if(t<=0&&!n||e.isNaN(parseInt(t)))return"00:00";var i=t<0?"-":"";t=Math.abs(t);var r=Math.floor(t/3600),o=Math.floor((t-3600*r)/60),a=Math.floor(t%60);return i+(r?r+":":"")+(o<10?"0":"")+o+":"+(a<10?"0":"")+a},r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o=n(113);i=[n(1)],r=function(e){var t=function(){var t={},n={},i={},r={};return{start:function(e){t[e]=(0,o.dateTime)(),i[e]=i[e]+1||1},end:function(e){if(t[e]){var i=(0,o.dateTime)(),r=i-t[e];delete t[e],n[e]=n[e]+r||r}},dump:function(){var a=e.extend({},n);for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){var l=(0,o.dateTime)(),u=l-t[s];a[s]=a[s]+u||u}return{counts:e.extend({},i),sums:a,events:e.extend({},r)}},tick:function(e){r[e]=(0,o.dateTime)()},clear:function(e){delete r[e]},between:function(e,t){return r[t]&&r[e]?r[t]-r[e]:null}}};return t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(1)],r=function(e){var t={};return t.exists=function(e){switch("undefined"==typeof e?"undefined":o(e)){case"string":return e.length>0;case"object":return null!==e;case"undefined":return!1;default:return!0}},t.isHTTPS=function(){return 0===window.location.href.indexOf("https")},t.isRtmp=function(e,t){return 0===e.indexOf("rtmp")||"rtmp"===t},t.isYouTube=function(e,t){return"youtube"===t||/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)},t.youTubeID=function(e){var t=/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e);return t?t.slice(1).join("").replace("?",""):""},t.typeOf=function(t){if(null===t)return"null";var n="undefined"==typeof t?"undefined":o(t);return"object"===n&&e.isArray(t)?"array":n},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,function(e,t,n){var i,r;i=[n(27),n(16),n(1),n(111),n(29)],r=function(e,t,n,i,r){function o(){return!!window.MediaSource&&!!window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')}function a(i,o){if(e.isSafari())return!1;var a=t(o);if(!a("dash"))return!1;if(i.drm&&!r.anySupported(i.drm))return!1;var s=window.MediaSource;if(!window.HTMLVideoElement||!s)return!1;var l=!0;return i.mediaTypes&&(l=n.all(i.mediaTypes,function(e){return s.isTypeSupported(e)})),l&&("dash"===i.type||"mpd"===i.type||(i.file||"").indexOf("mpd-time-csf")>-1)}var s=n.find(i,n.matches({name:"flash"})),l=s.supports;s.supports=function(n,i){if(!e.isFlashSupported()||n.drm)return!1;var r=n&&n.type;if("hls"===r||"m3u8"===r){var o=t(i);return o("hls")}return l.apply(this,arguments)};var u=n.find(i,n.matches({name:"html5"})),c=u.supports;return u.supports=function(e,n){var i=c.apply(this,arguments);if(i&&e.drm&&"hls"===e.type){var r=t(n),o=r("drm");if(o&&e.drm.fairplay){var a=window.WebKitMediaKeys;return a&&a.isTypeSupported&&a.isTypeSupported("com.apple.fps.1_0","video/mp4")}return o}return i},i.push({name:"shaka",supports:a}),i.splice(1,0,{name:"hlsjs",supports:function d(n,i){var r=e.isChrome()||e.isFF()||e.isIE(11)||e.isEdge(),a=e.isAndroid()&&n.hlsjsdefault;if(r&&o()&&(!e.isMobile()||a)&&!n.drm){var s=n&&n.type,l=n&&n.file;if(l.indexOf(".m3u8")>-1||"hls"===s||"m3u8"===s){var d=t(i);return d("hls")}}}}),i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(112),n(1),n(44)],r=function(e,t){function i(e,n,i){var r=t.indexOf(e,t.findWhere(e,{name:i})),o=t.indexOf(e,t.findWhere(e,{name:n}));if(!(o<r)){var a=e.splice(o,1)[0];e.splice(r,0,a)}}var r,o=e.registerProvider,a=e.prototype.reorderProviders;return t.extend(e.loaders,{shaka:function(e){n.e(3,function(require){var t=n(78);o(t),e(t)})},hlsjs:function(e){n.e(2,function(require){var t=n(76);t["default"]&&(t=t["default"]),t.setEdition&&t.setEdition(r),o(t),e(t)})}}),t.extend(e.prototype,{reorderProviders:function(e){var t=a.call(this,e);return"flash"!==e?i(t,"hlsjs","flash"):(i(t,"flash","hlsjs"),i(t,"hlsjs","html5")),t},providerSupports:function(e,t){return r=this.config.edition,e.supports(t,r)}}),e}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,function(e,t,n){var i;i=function(require,e,t){function n(e,t){r(t,o(e))}function i(e,t){var n=c[e];if(n)if(t){var i=n[t];if(i)for(var r=0;r<i.parts.length;r+=1)i.parts[r]()}else{for(var o=Object.keys(n),a=0;a<o.length;a+=1)for(var s=n[o[a]],l=0;l<s.parts.length;l+=1)s.parts[l]();delete c[e]}}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n],r=(c[e]||{})[i.id];if(r){for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(l(e,i.parts[o]))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(l(e,i.parts[o]));c[e]=c[e]||{},c[e][i.id]={id:i.id,parts:a}}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var r=e[i],o=r[0],a=r[1],s=r[2],l={css:a,media:s};n[o]?n[o].parts.push(l):t.push(n[o]={id:o,parts:[l]})}return t}function a(e){p().appendChild(e)}function s(e){var t=document.createElement("style");return t.type="text/css",t.setAttribute("data-jwplayer-id",e),a(t),t}function l(e,t){var n,i,r,o=d[e];o||(o=d[e]={element:s(e),counter:0});var a=o.counter++;return n=o.element,i=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0),i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media)return;i(t=e)}else r()}}function u(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=h(t,r);else{var o=document.createTextNode(r),a=e.childNodes,s=a[t];s?e.replaceChild(o,s):e.appendChild(o)}}var c={},d={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=f(function(){return document.head||document.getElementsByTagName("head")[0]});t.exports={style:n,clear:i};var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}.call(t,n,t,e),!(void 0!==i&&(e.exports=i))},function(e,t,n){var i,r;i=[],r=function(){function e(){return t||(t=new Promise(function(e){n.e(1,function(require){var t=n(72);e(t)})})),t}var t=null;return{load:e}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7),n(20),n(104),n(105),n(37)],r=function(e,t,n,i,r){function o(t){for(var o={},s=0;s<t.childNodes.length;s++){var l=t.childNodes[s],c=u(l);if(c)switch(c.toLowerCase()){case"enclosure":o.file=e.xmlAttribute(l,"url");break;case"title":o.title=a(l);break;case"guid":o.mediaid=a(l);break;case"pubdate":o.date=a(l);break;case"description":o.description=a(l);break;case"link":o.link=a(l);break;case"category":o.tags?o.tags+=a(l):o.tags=a(l)}}return o=i(t,o),o=n(t,o),new r(o)}var a=t.textContent,s=t.getChildNode,l=t.numChildren,u=t.localName,c={};return c.parse=function(e){var t=[];t.feedData={};for(var n=0;n<l(e);n++){var i=s(e,n),r=u(i).toLowerCase();if("channel"===r)for(var c=0;c<l(i);c++){var d=s(i,c),f=u(d).toLowerCase();"item"===f?t.push(o(d)):f&&(t.feedData[f]=a(d))}}return t},c}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(20),n(51),n(2),n(4),n(3),n(1)],r=function(e,t,n,i,r,o){var a=function(){function a(r){var a=n.tryCatch(function(){var n,a=r.responseXML?r.responseXML.childNodes:null,s="";if(a){for(var c=0;c<a.length&&(s=a[c],8===s.nodeType);c++);if("xml"===e.localName(s)&&(s=s.nextSibling),"rss"===e.localName(s)){var d=t.parse(s);n=o.extend({playlist:d},d.feedData)}}if(!n)try{var f=JSON.parse(r.responseText);if(o.isArray(f))n={playlist:f};else{if(!o.isArray(f.playlist))throw Error;n=f}}catch(p){return void l("Not a valid RSS/JSON feed")}u.trigger(i.JWPLAYER_PLAYLIST_LOADED,n)});a instanceof n.Error&&l()}function s(e){l("Playlist load error: "+e)}function l(e){u.trigger(i.JWPLAYER_ERROR,{message:e?e:"Error loading file"})}var u=o.extend(this,r);this.load=function(e){n.ajax(e,a,s)},this.destroy=function(){this.off()}};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(37),n(54),n(1),n(45)],r=function(e,t,n,i){function r(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=t.choose(i);if(r)return{type:i.type,provider:r.providerToCheck}}return null}function o(e,t){return n.isUndefined(e)?t:e}var a=function(t){return t=n.isArray(t)?t:[t],n.compact(n.map(t,e))};a.filterPlaylist=function(e,t,i){var r=[],o=t.getProviders(),a=t.get("preload"),u=n.extend({},i);return delete u.playlist,n.each(e,function(e){e=n.extend({},e),e.allSources=s(e,t),e.sources=l(e.allSources,o),e.sources.length&&(e.file=e.sources[0].file,a&&(e.preload=e.preload||a),i&&(e.feedData=u),r.push(e))}),r};var s=function(e,i){var r=e.sources,a=i.get("androidhls"),s=e.drm||i.get("drm"),l=e.preload||i.get("preload"),u=o(e.withCredentials,i.get("withCredentials")),c=i.get("hlsjsdefault");return n.compact(n.map(r,function(e){if(!n.isObject(e))return null;void 0!==a&&null!==a&&(e.androidhls=a),(e.drm||s)&&(e.drm=e.drm||s),(e.preload||l)&&(e.preload=e.preload||l);var i=o(e.withCredentials,u);return n.isUndefined(i)||(e.withCredentials=i),c&&(e.hlsjsdefault=c),t(e)}))},l=function(e,t){t&&t.choose||(t=new i({primary:t?"flash":null}));var o=r(e,t);if(!o)return[];var a=o.provider,s=o.type;return n.filter(e,function(e){return e.type===s&&t.providerSupports(a,e)})};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(7),n(1)],r=function(e,t,n){var i={"default":!1};return function(r){if(r&&r.file){var o=n.extend({},i,r);o.file=t.trim(""+o.file);var a=/^[^\/]+\/(?:x-)?([^\/]+)$/;if(a.test(o.type)&&(o.mimeType=o.type,o.type=o.type.replace(a,"$1")),e.isYouTube(o.file)?o.type="youtube":e.isRtmp(o.file)?o.type="rtmp":o.type||(o.type=t.extension(o.file)),o.type){switch(o.type){case"m3u8":case"vnd.apple.mpegurl":o.type="hls";break;case"dash+xml":o.type="dash";break;case"smil":o.type="rtmp";break;case"m4a":o.type="aac"}return n.each(o,function(e,t){""===e&&delete o[t]}),o}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(2),n(26),n(4),n(3),n(15),n(1)],r=function(e,t,n,i,r,a){var s={FLASH:0,JAVASCRIPT:1,HYBRID:2},l=function(l){function u(){switch(t.getPluginPathType(l)){case t.pluginPathType.ABSOLUTE:return l;case t.pluginPathType.RELATIVE:return e.getAbsolutePath(l,window.location.href)}}function c(){a.defer(function(){m=r.loaderstatus.COMPLETE,v.trigger(n.COMPLETE)})}function d(){m=r.loaderstatus.ERROR,v.trigger(n.ERROR,{url:l})}var f,p,h,g,v=a.extend(this,i),m=r.loaderstatus.NEW;this.load=function(){if(m===r.loaderstatus.NEW){if(l.lastIndexOf(".swf")>0)return f=l,m=r.loaderstatus.COMPLETE,void v.trigger(n.COMPLETE);if(t.getPluginPathType(l)===t.pluginPathType.CDN)return m=r.loaderstatus.COMPLETE,void v.trigger(n.COMPLETE);m=r.loaderstatus.LOADING;var e=new r(u());e.on(n.COMPLETE,c),e.on(n.ERROR,d),e.load()}},this.registerPlugin=function(e,t,i,o){g&&(clearTimeout(g),g=void 0),h=t,i&&o?(f=o,p=i):"string"==typeof i?f=i:"function"==typeof i?p=i:i||o||(f=e),m=r.loaderstatus.COMPLETE,v.trigger(n.COMPLETE)},this.getStatus=function(){return m},this.getPluginName=function(){return t.getPluginName(l)},this.getFlashPath=function(){if(f)switch(t.getPluginPathType(f)){case t.pluginPathType.ABSOLUTE:return f;case t.pluginPathType.RELATIVE:return l.lastIndexOf(".swf")>0?e.getAbsolutePath(f,window.location.href):e.getAbsolutePath(f,u())}return null},this.getJS=function(){return p},this.getTarget=function(){return h},this.getPluginmode=function(){return void 0!==("undefined"==typeof f?"undefined":o(f))&&void 0!==("undefined"==typeof p?"undefined":o(p))?s.HYBRID:void 0!==("undefined"==typeof f?"undefined":o(f))?s.FLASH:void 0!==("undefined"==typeof p?"undefined":o(p))?s.JAVASCRIPT:void 0},this.getNewInstance=function(e,t,n){return new p(e,t,n)},this.getURL=function(){return l}};return l}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,function(e,t,n){var i,r;i=[n(27)],r=function(e){return function(t){if("hls"===t.type){if(t.androidhls===!1&&e.isAndroid())return!1;var n=e.isAndroidNative;if(n(2)||n(3)||n("4.0"))return!1;if(e.isAndroid()&&!e.isFF())return!0}return null}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){return"hidden"in document?function(){return!document.hidden}:"webkitHidden"in document?function(){return!document.webkitHidden}:function(){return!0}}()},function(e,t,n){var i,r;i=[n(1),n(38)],r=function(e,t){function n(e){e.onload=null,e.onprogress=null,e.onreadystatechange=null,e.onerror=null,"abort"in e&&e.abort()}function i(t,i){return function(r){var o=r.currentTarget||i.xhr;if(clearTimeout(i.timeoutId),i.retryWithoutCredentials&&i.xhr.withCredentials){n(o);var a=e.extend({},i,{xhr:null,withCredentials:!1,retryWithoutCredentials:!1});return void d(a)}i.onerror(t,i.url,o)}}function r(e){return function(t){var n=t.currentTarget||e.xhr;if(4===n.readyState){if(clearTimeout(e.timeoutId),n.status>=400){var i;return i=404===n.status?"File not found":""+n.status+"("+n.statusText+")",e.onerror(i,e.url,n)}if(200===n.status)return o(e)(t)}}}function o(e){return function(n){var i=n.currentTarget||e.xhr;if(clearTimeout(e.timeoutId),e.responseType){if("json"===e.responseType)return a(i,e)}else{var r,o=i.responseXML;if(o)try{r=o.firstChild}catch(l){}if(o&&r)return s(i,o,e);if(u&&i.responseText&&!o&&(o=t.parseXML(i.responseText),o&&o.firstChild))return s(i,o,e);if(e.requireValidXML)return void e.onerror("Invalid XML",e.url,i)}e.oncomplete(i)}}function a(t,n){if(!t.response||e.isString(t.response)&&'"'!==t.responseText.substr(1))try{t=e.extend({},t,{response:JSON.parse(t.responseText)})}catch(i){return void n.onerror("Invalid JSON",n.url,t)}return n.oncomplete(t)}function s(t,n,i){var r=n.documentElement;return i.requireValidXML&&("parsererror"===r.nodeName||r.getElementsByTagName("parsererror").length)?void i.onerror("Invalid XML",i.url,t):(t.responseXML||(t=e.extend({},t,{responseXML:n})),i.oncomplete(t))}var l=function(){},u=!1,c=function(e){var t=document.createElement("a"),n=document.createElement("a");t.href=location.href;try{return n.href=e,n.href=n.href,t.protocol+"//"+t.host!=n.protocol+"//"+n.host}catch(i){}return!0},d=function(t,a,s,d){e.isObject(t)&&(d=t,t=d.url);var f,p=e.extend({xhr:null,url:t,withCredentials:!1,retryWithoutCredentials:!1,timeout:6e4,timeoutId:-1,oncomplete:a||l,onerror:s||l,mimeType:d&&!d.responseType?"text/xml":"",requireValidXML:!1,responseType:d&&d.plainText?"text":""},d);if("XDomainRequest"in window&&c(t))f=p.xhr=new window.XDomainRequest,f.onload=o(p),f.ontimeout=f.onprogress=l,u=!0;else{if(!("XMLHttpRequest"in window))return void p.onerror("",t);f=p.xhr=new window.XMLHttpRequest,f.onreadystatechange=r(p)}var h=i("Error loading file",p);f.onerror=h,"overrideMimeType"in f?p.mimeType&&f.overrideMimeType(p.mimeType):u=!0;try{t=t.replace(/#.*$/,""),f.open("GET",t,!0)}catch(g){return h(g),f}if(p.responseType)try{f.responseType=p.responseType}catch(g){}p.timeout&&(p.timeoutId=setTimeout(function(){n(f),p.onerror("Timeout",t,f)},p.timeout),f.onabort=function(){clearTimeout(p.timeoutId)});try{p.withCredentials&&"withCredentials"in f&&(f.withCredentials=!0),f.send()}catch(g){h(g)}return f};return{ajax:d,crossdomain:c}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(2),n(3),n(1)],r=function(e,t,n){function i(e,t,n){var i=document.createElement("param");i.setAttribute("name",t),i.setAttribute("value",n),e.appendChild(i)}function r(e,t,n){Object.defineProperty(e,t,{get:function(){return n}})}function a(a,s,c,d){var f,p=!0;if(d=d||"opaque",e.isMSIE()){var h=document.createElement("div");s.appendChild(h),h.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="'+c+'" name="'+c+'" tabindex="0"><param name="movie" value="'+a+'"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="'+d+'"><param name="bgcolor" value="'+u+'"><param name="menu" value="false"></object>';for(var g=s.getElementsByTagName("object"),v=g.length;v--;)g[v].id===c&&(f=g[v])}else f=document.createElement("object"),f.setAttribute("type","application/x-shockwave-flash"),f.setAttribute("data",a),f.setAttribute("width","100%"),f.setAttribute("height","100%"),
f.setAttribute("bgcolor",u),f.setAttribute("id",c),f.setAttribute("name",c),i(f,"allowfullscreen","true"),i(f,"allowscriptaccess","always"),i(f,"wmode",d),i(f,"menu","false"),s.appendChild(f,s);f.className="jw-swf jw-reset",f.style.display="block",f.style.position="absolute",f.style.left=0,f.style.right=0,f.style.top=0,f.style.bottom=0,e.isIE()&&"PointerEvent"in window&&(f.style.pointerEvents="none");var m=-1;return r(f,"on",t.on),r(f,"once",t.once),r(f,"_eventQueue",[]),r(f,"off",function(){var e=Array.prototype.slice.call(arguments);return e.length||(f._eventQueue.length=0,clearTimeout(m)),t.off.apply(f,e)}),r(f,"trigger",function(e,n){var i=f._eventQueue;i.push({type:e,json:n}),m>-1||(m=setTimeout(function(){var e=i.length;for(m=-1;e--;){var n=i.shift();if(n.json){var r=JSON.parse(decodeURIComponent(n.json));t.trigger.call(f,n.type,r)}else t.trigger.call(f,n.type)}}))}),r(f,"_events",{}),r(f,"triggerFlash",function(t){if("setupCommandQueue"===t&&(p=!1),"setup"!==t&&p||!f.__externalCall){for(var i=f.__commandQueue,r=i.length;r--;)i[r][0]===t&&i.splice(r,1);return i.push(Array.prototype.slice.call(arguments)),f}var a=Array.prototype.slice.call(arguments,1),s=e.tryCatch(function(){if(a.length){for(var e=a.length;e--;)"object"===o(a[e])&&n.each(a[e],l);var i=JSON.stringify(a);f.__externalCall(t,i)}else f.__externalCall(t)});return s instanceof e.Error&&(console.error(t,s),"setup"===t)?(s.name="Failed to setup flash",s):f}),r(f,"__commandQueue",[]),f}function s(e){e&&e.parentNode&&(e.style.display="none",e.parentNode.removeChild(e),e=null)}function l(e,t,n){e instanceof window.HTMLElement&&delete n[t]}var u="#000000";return{embed:a,remove:s}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(22),n(1),n(40),n(38),n(28)],r=function(e,t,n,i,r){var o={};return o.repo=t.memoize(function(){var t=r.split("+")[0],i=e.repo+t+"/";return n.isHTTPS()?i.replace(/^http:/,"https:"):i}),o.versionCheck=function(e){var t=("0"+e).split(/\W/),n=r.split(/\W/),i=parseFloat(t[0]),o=parseFloat(n[0]);return!(i>o)&&!(i===o&&parseFloat("0"+t[1])>parseFloat(n[1]))},o.loadFrom=function(){return o.repo()},o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){"use strict";function i(e,t,n){if(!e)return"";var i=e.bitrate||e.bandwidth;return o(t,i)||e.label||r(e.height,i,n)}function r(e,t,n){if(!e&&!t)return"";var i=s(t)+" kbps",r=i;return e&&(r=e+"p",t&&n&&(r+=" ("+i+")")),r}function o(e,t){var n=null,i=u.keys(e);if(t&&e&&i.length){var r=parseFloat(t);isNaN(r)||(n=e[a(i,s(r))])}return n}function a(e,t){var n=null,i=1/0,r=void 0;return u.isArray(e)&&u.forEach(e,function(e){r=Math.abs(e-t),r<i&&(n=e,i=r)}),n}function s(e){return Math.floor(e/1e3)}function l(e){return!!u.isArray(e)&&u.some(e,function(e){var t=e.height||e.bitrate||e.bandwidth,n=this[t];return this[t]=1,n},{})}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1);t.generateLabel=i,t.createLabel=r,t.getCustomLabel=o,t.findClosestBandwidth=a,t.toKbps=s,t.hasRedundantLevels=l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.requestAnimationFrame=window.requestAnimationFrame||function(e){return setTimeout(e,17)},t.cancelAnimationFrame=window.cancelAnimationFrame||clearTimeout},function(e,t,n){var i,r;i=[],r=function(){return document.createElement("video")}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,function(e,t,n){var i,r;i=[n(90),n(21),n(1)],r=function(e,t,n){var i=e.selectPlayer,r=function(){var e=i.apply(this,arguments);return e?e:{registerPlugin:function(e,n,i){"jwpsrv"!==e&&t.registerPlugin(e,n,i)}}};return n.extend(e,{selectPlayer:r})}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,function(e,t,n){var i,r;i=[n(2),n(80),n(16)],r=function(e,t,n){var i="invalid",r="RnXcsftYjWRDA^Uy",o=function(o){function a(o){e.exists(o)||(o="");try{o=t.decrypt(o,r);var a=o.split("/");s=a[0],"pro"!==s&&"starter"!==s&&"business"!==s||(s="premium");var c=n(s);if(a.length>2&&c("setup")){l=a[1];var d=parseInt(a[2]);d>0&&(u=new Date,u.setTime(d))}else s=i}catch(f){s=i}}var s,l,u;this.edition=function(){return u&&u.getTime()<(new Date).getTime()?i:s},this.token=function(){return l},this.expiration=function(){return u},a(o)};return o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=function(e){return window.atob(e)},t=function(e){return unescape(encodeURIComponent(e))},n=function(e){try{return decodeURIComponent(escape(e))}catch(t){return e}},i=function(e){for(var t=new Array(Math.ceil(e.length/4)),n=0;n<t.length;n++)t[n]=e.charCodeAt(4*n)+(e.charCodeAt(4*n+1)<<8)+(e.charCodeAt(4*n+2)<<16)+(e.charCodeAt(4*n+3)<<24);return t},r=function(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=String.fromCharCode(255&e[n],e[n]>>>8&255,e[n]>>>16&255,e[n]>>>24&255);return t.join("")};return{decrypt:function(o,a){if(o=String(o),a=String(a),0==o.length)return"";for(var s,l,u=i(e(o)),c=i(t(a).slice(0,16)),d=u.length,f=u[d-1],p=u[0],h=2654435769,g=Math.floor(6+52/d),v=g*h;0!=v;){l=v>>>2&3;for(var m=d-1;m>=0;m--)f=u[m>0?m-1:d-1],s=(f>>>5^p<<2)+(p>>>3^f<<4)^(v^p)+(c[3&m^l]^f),p=u[m]-=s;v-=h}var y=r(u);return y=y.replace(/\0+$/,""),n(y)}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(152),n(4),n(174),n(1)],r=function(e,t,n,i,r){var o=function(o,a){var s=new t(o,a),l=s.setup;s.setup=function(){l.call(this),a.on("change:skipButton",this.onSkipButton,this),a.change("castAvailable",this.onCastAvailable,this),a.change("castActive",this.onCastActive,this)};var u=s.addControls;return s.addControls=function(e){u.call(this,e);var t=this.controlsContainer();t&&this._skipButton&&t.appendChild(this._skipButton.element())},s.addSkipButton=function(){this._skipButton=new i(this.instreamModel),this._skipButton.on(n.JWPLAYER_AD_SKIPPED,function(){this.api.skipAd()},this);var e=this.controlsContainer();e&&e.appendChild(this._skipButton.element())},s.onSkipButton=function(e,t){t?this.addSkipButton():this._skipButton&&(this._skipButton.destroy(),this._skipButton=null)},s.onCastActive=function(t,n){n=n||!1;var i=t.get("airplayActive")||!1;e.toggleClass(this.getContainer(),"jw-flag-casting",n),e.toggleClass(this.getContainer(),"jw-flag-airplay-casting",i)},s.onCastAvailable=function(t,n){var i=t.get("cast");r.isObject(i)&&e.toggleClass(this.getContainer(),"jw-flag-cast-available",n)},s};return o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},,,function(e,t,n){var i,r;i=[n(21),n(1)],r=function(e,t){return function(n,i){var r=["skipAd","stop","resize","addButton","removeButton","registerPlugin","attachMedia","next"];t.each(r,function(e){n[e]=function(){return i[e].apply(i,arguments),n}}),n.registerPlugin=e.registerPlugin}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){return function(t,n){var i=["buffer","controls","position","duration","fullscreen","volume","item","stretching","playbackRate","playlist","captions","viewable"];e.each(i,function(e){var i=e.slice(0,1).toUpperCase()+e.slice(1);t["get"+i]=function(){return n._model.get(e)}});var r=["getAudioTracks","getCaptionsList","getWidth","getHeight","getCurrentAudioTrack","setCurrentAudioTrack","getCurrentCaptions","setCurrentCaptions","getCurrentQuality","setCurrentQuality","getQualityLevels","getVisualQuality","getConfig","getState","getSafeRegion","isBeforeComplete","isBeforePlay","getProvider","detachMedia"],o=["setConfig","setControls","setFullscreen","setVolume","setMute","setPlaybackRate","setCues","setCaptions"];e.each(r,function(e){t[e]=function(){return n[e]?n[e].apply(n,arguments):null}}),e.each(o,function(e){t[e]=function(){return n[e].apply(n,arguments),t}}),t.getPlaylistIndex=t.getItem}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(4),n(5),n(3),n(2),n(39),n(1),n(160),n(85),n(86),n(88),n(28)],r=function(e,t,n,i,r,o,a,s,l,u,c){var d=function(d,f){var p,h=this;o.extend(this,n),this.utils=i,this._=o,this.Events=n,this.version=c,this.trigger=function(e,t){t=o.isObject(t)?o.extend({},t):{},t.type=e;var i=window.jwplayer;return i&&i.debug?n.trigger.call(h,e,t):n.triggerSafe.call(h,e,t)},this.dispatchEvent=this.trigger,this.removeEventListener=this.off.bind(this);var g=function(){p=new a(d),s(h,p),l(h,p),p.on(e.JWPLAYER_MEDIA_META,function(e){var t=p._model.get("itemMeta");o.extend(t,e.metadata)}),p.on(e.JWPLAYER_READY,function(e){v.tick("ready"),e.setupTime=v.between("setup","ready")}),p.on("all",h.trigger)};g(),u(this),this.id=d.id;var v=this._qoe=new r;v.tick("init");var m=function(){h.off(),p&&p.off(),p&&p.playerDestroy&&p.playerDestroy()};return this.getPlugin=function(e){return h.plugins&&h.plugins[e]},this.addPlugin=function(e,t){this.plugins=this.plugins||{},this.plugins[e]=t,this.onReady(t.addToPlayer),t.resize&&this.onResize(t.resizeHandler)},this.setup=function(e){return v.tick("setup"),m(),g(),i.foreach(e.events,function(e,t){var n=h[e];"function"==typeof n&&n.call(h,t)}),e.id=h.id,p.setup(e,this),h},this.qoe=function(){var e=p.getItemQoe(),t=v.between("setup","ready"),n=e.getFirstFrame();return{setupTime:t,firstFrame:n,player:v.dump(),item:e.dump()}},this.getContainer=function(){return p.getContainer?p.getContainer():d},this.getMeta=this.getItemMeta=function(){return p._model.get("itemMeta")||{}},this.getPlaylistItem=function(e){if(!i.exists(e))return p._model.get("playlistItem");var t=h.getPlaylist();return t?t[e]:null},this.getRenderingMode=function(){return"html5"},this.getMute=function(){return p._model.getMute()},this.load=function(e,t){return p.load(e,t),h},this.play=function(e,n){if(o.isObject(e)&&e.reason&&(n=e),n||(n={reason:"external"}),e===!0)return p.play(n),h;if(e===!1)return p.pause(n),h;switch(e=h.getState()){case t.PLAYING:case t.BUFFERING:p.pause(n);break;default:p.play(n)}return h},this.pause=function(e,t){return o.isBoolean(e)?this.play(!e,t):this.play(t)},this.seek=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{reason:"external"};return p.seek(e,t),h},this.playlistNext=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{reason:"external"};return p.playlistNext(e),h},this.playlistPrev=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{reason:"external"};return p.playlistPrev(e),h},this.playlistItem=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{reason:"external"};return p.playlistItem(e,t),h},this.createInstream=function(){return p.createInstream()},this.castToggle=function(){p&&p.castToggle&&p.castToggle()},this.playAd=this.pauseAd=i.noop,this.remove=function(){return f(h),h.trigger("remove"),m(),h},this};return d}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(4)],r=function(e,t){return function(n){var i={onBufferChange:t.JWPLAYER_MEDIA_BUFFER,onBufferFull:t.JWPLAYER_MEDIA_BUFFER_FULL,onError:t.JWPLAYER_ERROR,onSetupError:t.JWPLAYER_SETUP_ERROR,onFullscreen:t.JWPLAYER_FULLSCREEN,onMeta:t.JWPLAYER_MEDIA_META,onMute:t.JWPLAYER_MEDIA_MUTE,onPlaylist:t.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:t.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:t.JWPLAYER_PLAYLIST_COMPLETE,onReady:t.JWPLAYER_READY,onResize:t.JWPLAYER_RESIZE,onComplete:t.JWPLAYER_MEDIA_COMPLETE,onSeek:t.JWPLAYER_MEDIA_SEEK,onTime:t.JWPLAYER_MEDIA_TIME,onVolume:t.JWPLAYER_MEDIA_VOLUME,onBeforePlay:t.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:t.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:t.JWPLAYER_DISPLAY_CLICK,onControls:t.JWPLAYER_CONTROLS,onQualityLevels:t.JWPLAYER_MEDIA_LEVELS,onQualityChange:t.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:t.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:t.JWPLAYER_CAPTIONS_CHANGED,onAdError:t.JWPLAYER_AD_ERROR,onAdClick:t.JWPLAYER_AD_CLICK,onAdImpression:t.JWPLAYER_AD_IMPRESSION,onAdTime:t.JWPLAYER_AD_TIME,onAdComplete:t.JWPLAYER_AD_COMPLETE,onAdCompanions:t.JWPLAYER_AD_COMPANIONS,onAdSkipped:t.JWPLAYER_AD_SKIPPED,onAdPlay:t.JWPLAYER_AD_PLAY,onAdPause:t.JWPLAYER_AD_PAUSE,onAdMeta:t.JWPLAYER_AD_META,onCast:t.JWPLAYER_CAST_SESSION,onAudioTrackChange:t.JWPLAYER_AUDIO_TRACK_CHANGED,onAudioTracks:t.JWPLAYER_AUDIO_TRACKS},r={onBuffer:"buffer",onPause:"pause",onPlay:"play",onIdle:"idle"};e.each(r,function(t,i){n[i]=e.partial(n.on,t,e)}),e.each(i,function(t,i){n[i]=e.partial(n.on,t,e)})}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(1)],r=function(e,t){function i(n){t.each(n,function(t,i){n[i]=e.serialize(t)})}function r(e){return e.slice&&"px"===e.slice(-2)&&(e=e.slice(0,-2)),e}function o(t,n){if(n.toString().indexOf("%")===-1)return 0;if("string"!=typeof t||!e.exists(t))return 0;if(/^\d*\.?\d+%$/.test(t))return t;var i=t.indexOf(":");if(i===-1)return 0;var r=parseFloat(t.substr(0,i)),o=parseFloat(t.substr(i+1));return r<=0||o<=0?0:o/r*100+"%"}var a={autostart:!1,controls:!0,displaytitle:!0,displaydescription:!0,mobilecontrols:!1,defaultPlaybackRate:1,playbackRateControls:!1,repeat:!1,castAvailable:!1,skin:"seven",stretching:"uniform",mute:!1,volume:90,width:480,height:270,audioMode:!1,localization:{player:"Video Player",play:"Play",playback:"Start playback",pause:"Pause",volume:"Volume",prev:"Previous",next:"Next",cast:"Chromecast",airplay:"Airplay",fullscreen:"Fullscreen",playlist:"Playlist",hd:"Quality",cc:"Closed captions",audioTracks:"Audio tracks",playbackRates:"Playback rates",replay:"Replay",buffer:"Loading",more:"More",liveBroadcast:"EN VIVO",loadingAd:"Loading ad",rewind:"Rewind 10s",nextUp:"Next Up",nextUpClose:"Next Up Close",related:"Discover",close:"Close"},renderCaptionsNatively:!0,nextUpDisplay:!0},s=function(s,l){var u=l&&l.getAllItems(),c=t.extend({},(window.jwplayer||{}).defaults,u,s);i(c),c.localization=t.extend({},a.localization,c.localization);var d=t.extend({},a,c);"."===d.base&&(d.base=e.getScriptPath("jwplayer.js")),d.base=(d.base||e.loadFrom()).replace(/\/?$/,"/"),n.p=d.base,d.width=r(d.width),d.height=r(d.height);var f=e.getScriptPath("jwplayer.js")||d.base;d.flashplayer=d.flashplayer||f+"jwplayer.flash.swf",d.flashloader=d.flashloader||f+"jwplayer.loader.swf","http:"===window.location.protocol&&(d.flashplayer=d.flashplayer.replace("https","http"),d.flashloader=d.flashloader.replace("https","http")),d.aspectratio=o(d.aspectratio,d.width),t.isObject(d.skin)&&(d.skinUrl=d.skin.url,d.skinColorInactive=d.skin.inactive,d.skinColorActive=d.skin.active,d.skinColorBackground=d.skin.background,d.skin=t.isString(d.skin.name)?d.skin.name:a.skin),t.isString(d.skin)&&d.skin.indexOf(".xml")>0&&(console.warn("JW Player does not support XML skins, please update your config"),d.skin=d.skin.replace(".xml",""));var p=d.playbackRateControls;if(p){var h=[.5,1,1.25,1.5,2];t.isArray(p)&&(h=p.filter(function(e){return t.isNumber(e)&&e>=.25&&e<=4}).map(function(e){return Math.round(4*e)/4}),h.indexOf(1)<0&&h.push(1),h.sort()),d.playbackRateControls=h}(!d.playbackRateControls||d.playbackRateControls.indexOf(d.defaultPlaybackRate)<0)&&(d.defaultPlaybackRate=1),d.playbackRate=d.defaultPlaybackRate,d.aspectratio||delete d.aspectratio;var g=d.playlist;if(g)t.isArray(g.playlist)&&(d.feedData=g,d.playlist=g.playlist);else{var v=t.pick(d,["title","description","type","mediaid","image","file","sources","tracks","preload"]);d.playlist=[v]}return d.qualityLabels=d.qualityLabels||d.hlslabels,d};return s}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(87),n(1),n(45),n(44),n(21)],r=function(e,t,n,i,r){var o=[],a=0,s=function(t){var n,i;return t?"string"==typeof t?(n=l(t),n||(i=document.getElementById(t))):"number"==typeof t?n=o[t]:t.nodeType&&(i=t,n=l(i.id)):n=o[0],n?n:i?u(new e(i,c)):{registerPlugin:r.registerPlugin}},l=function(e){for(var t=0;t<o.length;t++)if(o[t].id===e)return o[t];return null},u=function(e){return a++,e.uniqueId=a,o.push(e),e},c=function(e){for(var t=o.length;t--;)if(o[t].uniqueId===e.uniqueId){o.splice(t,1);break}},d={selectPlayer:s,registerProvider:n.registerProvider,availableProviders:i,registerPlugin:r.registerPlugin};return s.api=d,d}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){"use strict";function i(e,t,n){e.setAutoStart(n),"idle"===e.get("state")&&n===!0&&t.play({reason:"autostart"})}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=["repeat","volume","mute","autostart"];t["default"]=function(e,t){var n=e._model;r.size(t)&&o.forEach(function(o){var a=t[o];if(!r.isUndefined(a))switch(o){case"mute":e.setMute(a);break;case"volume":e.setVolume(a);break;case"autostart":i(n,e,a);break;default:n.set(o,a)}})}},function(e,t,n){var i,r;i=[n(161),n(3),n(1),n(4)],r=function(e,t,n,i){var r=function(t,r,o,a){function s(){f("Setup Timeout Error","Setup took longer than "+v+" seconds to complete.")}function l(){for(var e in g)if(Object.prototype.hasOwnProperty.call(g,e)){var n=g[e];!n.complete&&!n.running&&t&&c(n.depends)&&(n.running=!0,u(n))}}function u(e){var n=function(t){t=t||{},d(e,t)};e.method(n,r,t,o,a)}function c(e){return n.all(e,function(e){return g[e].complete})}function d(e,t){"error"===t.type?f(t.msg,t.reason):"complete"===t.type?(clearTimeout(p),h.trigger(i.JWPLAYER_READY)):(e.complete=!0,l())}function f(e,t){clearTimeout(p),h.trigger(i.JWPLAYER_SETUP_ERROR,{message:e+": "+t}),h.destroy()}var p,h=this,g=e.getQueue(),v=30;this.start=function(){p=setTimeout(s,1e3*v),l()},this.destroy=function(){clearTimeout(p),this.off(),g.length=0,t=null,r=null,o=null}};return r.prototype=t,r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(13),n(12)],r=function(e,t,n){var i=function(i){function r(e){if(e.tracks.length){for(var t=e.tracks||[],n=0;n<t.length;n++)d(t[n]);g=Object.keys(v).map(function(e){return v[e]});var i=f();p(),this.setCaptionsList(i)}}function o(){g=[],v={},m=0}function a(e){o(i,e);var n=e.tracks,r=n&&n.length;if(!i.get("renderCaptionsNatively")&&r){var a,c;for(a=0;a<r;a++)c=n[a],s(c.kind)&&!v[c._id]&&(d(c),t.loadFile(c,l.bind(null,c),u))}var h=f();p(),this.setCaptionsList(h)}function s(e){return"subtitles"===e||"captions"===e}function l(e,t){e.data=t}function u(t){e.log("CAPTIONS("+t+")")}function c(e,t){var n=null;0!==t&&(n=g[t-1]),e.set("captionsTrack",n)}function d(e){if(e.data=e.data||[],e.name=e.label||e.name||e.language,e._id=n.createId(e,g.length),!e.name){var t=n.createLabel(e,m);e.name=t.label,m=t.unknownCount}v[e._id]=e,g.push(e)}function f(){for(var e=[{id:"off",label:"Off"}],t=0;t<g.length;t++)e.push({id:g[t]._id,label:g[t].name||"Unknown CC"});return e}function p(){var e=0,t=i.get("captionLabel");if("Off"===t)return void i.set("captionsIndex",0);for(var n=0;n<g.length;n++){var r=g[n];if(t&&t===r.name){e=n+1;break}r["default"]||r.defaulttrack||"default"===r._id?e=n+1:r.autoselect}h(e)}function h(e){g.length?i.setVideoSubtitleTrack(e,g):i.set("captionsIndex",e)}i.on("change:playlistItem",o,this),i.on("change:captionsIndex",c,this),i.on("itemReady",a,this),i.mediaController.on("subtitlesTracks",r,this);var g=[],v={},m=0;this.getCurrentIndex=function(){return i.get("captionsIndex")},this.getCaptionsList=function(){return i.get("captionsList")},this.setCaptionsList=function(e){i.set("captionsList",e)}};return i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var r,o,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(91),l=i(s);r=[n(89),n(96),n(1),n(92),n(93),n(33),n(101),n(53),n(52),n(2),n(81),n(3),n(34),n(5),n(4),n(141),n(95)],o=function(e,t,n,i,r,o,s,u,c,d,f,p,h,g,v,m,y){function w(e){return function(){var t=Array.prototype.slice.call(arguments,0);this._model.getVideo()?this["_"+e].apply(this,t):this.eventsQueue.push([e,t])}}function E(e){return e===g.LOADING||e===g.STALLED?g.BUFFERING:e}var b=function(e){this.originalContainer=this.currentContainer=e,this.eventsQueue=[],n.extend(this,p),this._model=new o};return b.prototype={play:w("play"),pause:w("pause"),seek:w("seek"),stop:w("stop"),load:w("load"),playlistNext:w("next"),playlistPrev:w("prev"),playlistItem:w("item"),setCurrentCaptions:w("setCurrentCaptions"),setCurrentQuality:w("setCurrentQuality"),setFullscreen:w("setFullscreen"),setup:function(o,m){function w(e,t){Ee.triggerAfterReady(e,t)}function b(e,t){Ee.trigger(v.JWPLAYER_CONTROLS,{controls:t})}function A(){he=null,fe.on("all",w,Ee);var e=m.getPlugin("related");e&&e.on("nextUp",function(e){me.set("nextUp",e)}),fe.once(v.JWPLAYER_RESIZE,C),fe.init()}function C(){me.change("visibility",k),me.on("change:controls",b),Ee.trigger(v.JWPLAYER_READY,{setupTime:0}),Ee.triggerAfterReady=Ee.trigger;for(var e=0;e<Le.length;e++){var t=Le[e];ye=t.type===v.JWPLAYER_MEDIA_BEFOREPLAY,Ee.trigger(t.type,t.args),ye=!1}L(),me.change("viewable",R),me.change("viewable",x),me.once("change:autostartFailed change:autostartMuted change:mute",function(e){e.off("change:viewable",x)})}function k(e,t){n.isUndefined(t)||me.set("viewable",Math.round(t))}function L(){d.isMobile()||me.get("autostart")!==!0||W()}function P(){j(),be={bail:!1},me.once("itemReady",_,be)}function j(){be.bail=!0,me.off("itemReady",_)}function _(){var e=this;Promise.resolve().then(function(){var t=e;t.bail||L()})}function R(e,t){Ee.trigger("viewable",{viewable:t})}function x(e,t){me.get("playOnViewable")&&(t?W():d.isMobile()&&Ee.pause({reason:"autostart"}))}function T(e){var t=me.getProviders(),n=t.required(e,me.get("primary"));return t.load(n).then(function(){Ee.getProvider()||(me.setProvider(me.get("playlistItem")),S())})}function S(){for(;Ee.eventsQueue.length>0;){var e=Ee.eventsQueue.shift(),t=e[0],n=e[1]||[];Ee["_"+t].apply(Ee,n)}}function I(e,t){switch(me.get("state")===g.ERROR&&me.set("state",g.IDLE),me.set("preInstreamState","instream-idle"),Ee.trigger("destroyPlugin",{}),J(!0),P(),F(),"undefined"==typeof e?"undefined":a(e)){case"string":M(e);break;case"object":var n=z(e,t);n&&G(0);break;case"number":G(e)}}function M(e){var t=new c;t.on(v.JWPLAYER_PLAYLIST_LOADED,function(e){I(e.playlist,e)}),t.on(v.JWPLAYER_ERROR,function(e){e.message="Error loading playlist: "+e.message,Ee.triggerError(e)},Ee),t.load(e)}function O(){return Ee._instreamAdapter&&Ee._instreamAdapter.getState()}function D(){var e=O();return n.isString(e)?e:me.get("state")}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(j(),me.set("playReason",e.reason),me.get("state")!==g.ERROR){var t=O();if(n.isString(t))return void m.pauseAd(!1);if(me.get("state")===g.COMPLETE&&(J(!0),G(0)),!ye&&(ye=!0,Ee.triggerAfterReady(v.JWPLAYER_MEDIA_BEFOREPLAY,{playReason:me.get("playReason")}),ye=!1,ve))return ve=!1,void(ge=null);var i;if(V()){if(0===me.get("playlist").length)return;i=d.tryCatch(function(){me.loadVideo()})}else me.get("state")===g.PAUSED&&(i=d.tryCatch(function(){me.playVideo()}));i instanceof d.Error&&(Ee.triggerError(i),ge=null)}}function Y(e){return e&&/^(?:mouse|pointer|touch|gesture|click|key)/.test(e.type)}function F(){if(Y(window.event)){var e=Ee.currentContainer.querySelector("video, audio");e&&V()&&e.load()}}function W(){var e=me.get("state");e!==g.IDLE&&e!==g.PAUSED||N({reason:"autostart"})}function J(e){j();var t=!e;ge=null;var n=d.tryCatch(function(){me.stopVideo()},Ee);return n instanceof d.Error?(Ee.triggerError(n),!1):(t&&(we=!0),ye&&(ve=!0),!0)}function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};ge=null,me.set("pauseReason",e.reason),"interaction"!==e.reason&&"external"!==e.reason||me.set("playOnViewable",!1);var t=O();if(n.isString(t))return void m.pauseAd(!0);switch(me.get("state")){case g.ERROR:return;case g.PLAYING:case g.BUFFERING:var i=d.tryCatch(function(){Ae().pause()},this);if(i instanceof d.Error)return void Ee.triggerError(i);break;default:ye&&(ve=!0)}}function V(){var e=me.get("state");return e===g.IDLE||e===g.COMPLETE||e===g.ERROR}function U(e,t){me.get("state")!==g.ERROR&&(me.get("scrubbing")||me.get("state")===g.PLAYING||N(t),Ae().seek(e))}function H(e,t){J(!0),me.get("state")===g.ERROR&&me.set("state",g.IDLE),G(e),N(t)}function z(e,t){me.set("feedData",t);var i=u(e);return i=u.filterPlaylist(i,me,t),me.set("playlist",i),n.isArray(i)&&0!==i.length?(T(i),!0):(Ee.triggerError({message:"Error loading playlist: No playable sources found"}),!1)}function G(e){me.setItemIndex(e)}function q(e){H(me.get("item")-1,e)}function K(e){H(me.get("item")+1,e)}function Q(){if(V()){if(we)return void(we=!1);ge=Q;var e=me.get("item");return e===me.get("playlist").length-1?void(me.get("repeat")?K({reason:"repeat"}):(d.isIOS()&&ce(!1),me.set("playOnViewable",!1),me.set("state",g.COMPLETE),Ee.trigger(v.JWPLAYER_PLAYLIST_COMPLETE,{}))):void K({reason:"playlist"})}}function X(e){Ae()&&(e=parseInt(e,10)||0,Ae().setCurrentQuality(e))}function $(){return Ae()?Ae().getCurrentQuality():-1}function Z(){return this._model?this._model.getConfiguration():void 0}function ee(){if(this._model.mediaModel)return this._model.mediaModel.get("visualQuality");var e=te();if(e){var t=$(),i=e[t];if(i)return{level:n.extend({index:t},i),mode:"",reason:""}}return null}function te(){return Ae()?Ae().getQualityLevels():null}function ne(e){Ae()&&(e=parseInt(e,10)||0,Ae().setCurrentAudioTrack(e))}function ie(){return Ae()?Ae().getCurrentAudioTrack():-1}function re(){return Ae()?Ae().getAudioTracks():null}function oe(e){e=parseInt(e,10)||0,me.persistVideoSubtitleTrack(e),Ee.trigger(v.JWPLAYER_CAPTIONS_CHANGED,{tracks:se(),track:e})}function ae(){return pe.getCurrentIndex()}function se(){return pe.getCaptionsList()}function le(){return me.detachMedia()}function ue(){var e=d.tryCatch(function(){me.attachMedia()});return e instanceof d.Error?void d.log("Error calling _attachMedia",e):void("function"==typeof ge&&ge())}function ce(e){n.isBoolean(e)||(e=!me.get("fullscreen")),me.set("fullscreen",e),this._instreamAdapter&&this._instreamAdapter._adModel&&this._instreamAdapter._adModel.set("fullscreen",e)}function de(){var e=m.getPlugin("related");if(e){var t=me.get("nextUp");t&&Ee.trigger("nextClick",{mode:t.mode,ui:"nextup",target:t,itemsShown:[t],feedData:t.feedData}),e.next()}}var fe,pe,he,ge,ve,me=this._model,ye=!1,we=!1,Ee=this,be={},Ae=function(){return me.getVideo()},Ce=new s;Ce.track(me);var ke=new e(o,Ce),Le=[];me.setup(ke,Ce),fe=this._view=new f(m,me),he=new i(m,me,fe,z),he.on(v.JWPLAYER_READY,A,this),he.on(v.JWPLAYER_SETUP_ERROR,this.setupError,this),me.mediaController.on("all",w,this),me.mediaController.on(v.JWPLAYER_MEDIA_COMPLETE,function(){n.defer(Q)}),me.mediaController.on(v.JWPLAYER_MEDIA_ERROR,this.triggerError,this),me.on("change:flashBlocked",function(e,t){if(!t)return void this._model.set("errorEvent",void 0);var n=!!e.get("flashThrottle"),i={message:n?"Click to run Flash":"Flash plugin failed to load"};n||this.trigger(v.JWPLAYER_ERROR,i),this._model.set("errorEvent",i)},this),me.on("change:state",h,this),me.on("change:duration",function(e,t){var n=e.get("minDvrWindow"),i=d.streamType(t,n);e.setStreamType(i)}),me.on("change:castState",function(e,t){Ee.trigger(v.JWPLAYER_CAST_SESSION,t)}),me.on("change:fullscreen",function(e,t){Ee.trigger(v.JWPLAYER_FULLSCREEN,{fullscreen:t}),t&&e.set("playOnViewable",!1)}),me.on("itemReady",function(){Ee.triggerAfterReady(v.JWPLAYER_PLAYLIST_ITEM,{index:me.get("item"),item:me.get("playlistItem")})}),me.on("change:playlist",function(e,t){if(t.length){var i={playlist:t},r=me.get("feedData");if(r){var o=n.extend({},r);delete o.playlist,i.feedData=o}Ee.triggerAfterReady(v.JWPLAYER_PLAYLIST_LOADED,i)}}),me.on("change:volume",function(e,t){Ee.trigger(v.JWPLAYER_MEDIA_VOLUME,{volume:t})}),me.on("change:mute",function(e,t){Ee.trigger(v.JWPLAYER_MEDIA_MUTE,{mute:t})}),me.on("change:playbackRate",function(e,t){Ee.trigger(v.JWPLAYER_PLAYBACK_RATE_CHANGED,{playbackRate:t,position:e.get("position")})}),me.on("change:scrubbing",function(e,t){t?B():N({reason:"interaction"})}),me.on("change:captionsList",function(e,t){Ee.triggerAfterReady(v.JWPLAYER_CAPTIONS_LIST,{tracks:t,track:me.get("captionsIndex")||0})}),me.on("change:mediaModel",function(e){e.mediaModel.on("change:state",function(t,n){e.set("state",E(n))})}),pe=new r(me),me.on("change:viewSetup",function(e,t){if(t){var n=this.currentContainer.querySelector("video, audio");if(Ee.showView(fe.element()),n){var i=me.get("mediaContainer");i.appendChild(n)}}},this),this.triggerAfterReady=function(e,t){Le.push({type:e,args:t})},this._play=N,this._pause=B,this._seek=U,this._stop=J,this._load=I,this._next=K,this._prev=q,this._item=H,this._setCurrentCaptions=oe,this._setCurrentQuality=X,this._setFullscreen=ce,this.detachMedia=le,this.attachMedia=ue,this.getCurrentQuality=$,this.getQualityLevels=te,this.setCurrentAudioTrack=ne,this.getCurrentAudioTrack=ie,this.getAudioTracks=re,this.getCurrentCaptions=ae,this.getCaptionsList=se,this.getVisualQuality=ee,this.getConfig=Z,this.getState=D,this.setVolume=me.setVolume.bind(me),this.setMute=me.setMute.bind(me),this.setPlaybackRate=me.setPlaybackRate.bind(me),this.getProvider=function(){return me.get("provider")},this.getWidth=function(){return me.get("containerWidth")},this.getHeight=function(){return me.get("containerHeight")},this.getContainer=function(){return this.currentContainer},this.resize=fe.resize,this.getSafeRegion=fe.getSafeRegion,this.setCues=fe.addCues,this.setCaptions=fe.setCaptions,this.next=de,this.setConfig=function(e){return(0,l["default"])(Ee,e)},this.addButton=function(e,t,i,r,o){var a={img:e,tooltip:t,callback:i,id:r,btnClass:o},s=!1,l=n.map(me.get("dock"),function(e){var t=e!==a&&e.id===a.id;return t?(s=!0,a):e});s||l.push(a),me.set("dock",l)},this.removeButton=function(e){var t=me.get("dock")||[];t=n.reject(t,n.matches({id:e})),me.set("dock",t)},this.checkBeforePlay=function(){return ye},this.getItemQoe=function(){return me._qoeItem},this.setControls=function(e){n.isBoolean(e)||(e=!me.get("controls")),me.set("controls",e);var t=me.getVideo();t&&t.setControls(e)},this.playerDestroy=function(){this.stop(),this.showView(this.originalContainer),fe&&fe.destroy(),me&&me.destroy(),he&&(he.destroy(),he=null)},this.isBeforePlay=this.checkBeforePlay,this.isBeforeComplete=function(){return me.checkComplete()},this.createInstream=function(){return this.instreamDestroy(),F(),this._instreamAdapter=new t(this,me,fe),this._instreamAdapter},this.skipAd=function(){this._instreamAdapter&&this._instreamAdapter.skipAd()},this.instreamDestroy=function(){Ee._instreamAdapter&&Ee._instreamAdapter.destroy()},this.trigger=function(e,t){var n=y(me,e,t);return p.trigger.call(this,e,n)},he.start()},showView:function(e){if(!document.body.contains(this.currentContainer)){var t=document.getElementById(this._model.get("id"));t&&(this.currentContainer=t)}this.currentContainer.parentElement&&this.currentContainer.parentElement.replaceChild(e,this.currentContainer),this.currentContainer=e},triggerError:function(e){this._model.set("errorEvent",e),this._model.set("state",g.ERROR),this._model.once("change:state",function(){this._model.set("errorEvent",void 0)},this),this.trigger(v.JWPLAYER_ERROR,e)},setupError:function(e){var t=e.message,i=d.createElement(m(this._model.get("id"),this._model.get("skin"),t)),r=this._model.get("width"),o=this._model.get("height");d.style(i,{width:r.toString().indexOf("%")>0?r:r+"px",height:o.toString().indexOf("%")>0?o:o+"px"}),this.showView(i);var a=this;n.defer(function(){a.trigger(v.JWPLAYER_SETUP_ERROR,{message:t})})}},b}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,r;i=[n(1),n(4)],r=function(e,t){return function(n,i,r){var o=r;switch(i){case t.JWPLAYER_MEDIA_TIME:case"beforePlay":case"pause":case"play":case"ready":var a=n.get("viewable");e.isUndefined(a)||(o=e.extend({},r,{viewable:a}))}return o}}.apply(t,i),
!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(98),n(97),n(4),n(5),n(2),n(3),n(1)],r=function(e,t,n,i,r,o,a){function s(n){var i="",r=n.get("provider");return r&&(i=r.name),i.indexOf("flash")>=0?t:e}var l={skipoffset:null,tag:null},u=function(e,o,u){function c(){E._adModel.set("state","buffering"),o.set("skipButton",!1),b++;var e,t=h[b];g&&(e=g[b]),C.loadItem(t,e)}function d(e,t){"complete"!==e&&(t=t||{},A.tag&&!t.tag&&(t.tag=A.tag),this.trigger(e,t),"mediaError"!==e&&"error"!==e||h&&b+1<h.length&&c())}function f(e){E._adModel.set("duration",e.duration),E._adModel.set("position",e.position)}function p(e){var t={};A.tag&&(t.tag=A.tag),this.trigger(n.JWPLAYER_MEDIA_COMPLETE,t),P.call(this,e)}var h,g,v,m,y,w=s(o),E=new w(e,o),b=0,A={},C=this,k=a.bind(function(e){e=e||{},e.hasControls=!!o.get("controls"),this.trigger(n.JWPLAYER_INSTREAM_CLICK,e),E&&E._adModel&&(E._adModel.get("state")===i.PAUSED?e.hasControls&&E.instreamPlay():E.instreamPause())},this),L=a.bind(function(){E&&E._adModel&&E._adModel.get("state")===i.PAUSED&&o.get("controls")&&(e.setFullscreen(),e.play())},this);this.type="instream",this.init=function(t){v=o.getVideo(),m=o.get("position"),y=o.get("playlist")[o.get("item")],v.setPlaybackRate(1),E.on("all",d,this),E.on(n.JWPLAYER_MEDIA_TIME,f,this),E.on(n.JWPLAYER_MEDIA_COMPLETE,p,this),E.init(),e.detachMedia(),o.mediaModel.set("state",i.BUFFERING),e.checkBeforePlay()||0===m&&!o.checkComplete()?(m=0,o.set("preInstreamState","instream-preroll")):v&&o.checkComplete()||o.get("state")===i.COMPLETE?o.set("preInstreamState","instream-postroll"):o.set("preInstreamState","instream-midroll");var a=o.get("state");return t||a!==i.PLAYING&&a!==i.BUFFERING||v.pause(),u.setupInstream(E._adModel),E._adModel.set("state",i.BUFFERING),u.clickHandler()&&u.clickHandler().setAlternateClickHandlers(r.noop,null),this.setText(o.get("localization").loadingAd),this};var P=function(e){h&&b+1<h.length?c():(this.trigger("adBreakEnd",{}),e.type===n.JWPLAYER_MEDIA_COMPLETE&&this.trigger(n.JWPLAYER_PLAYLIST_COMPLETE,{}),this.destroy())};this.loadItem=function(e,s){if(r.isAndroid(2.3))return void this.trigger({type:n.JWPLAYER_ERROR,message:"Error loading instream: Cannot play instream on Android 2.3"});var u=e;a.isArray(e)?(h=e,g=s,e=h[b],g&&(s=g[b])):u=[e];var c=o.getProviders(),d=w===t?"flash":void 0,f=c.required(u,d);o.set("hideAdsControls",!1),E._adModel.set("state",i.BUFFERING),c.load(f).then(function(){if(null!==E){C.trigger(n.JWPLAYER_PLAYLIST_ITEM,{index:b,item:e}),A=a.extend({},l,s),E.load(e),C.addClickHandler();var t=e.skipoffset||A.skipoffset;t&&C.setupSkipButton(t,A)}})},this.setupSkipButton=function(e,t,n){o.set("skipButton",!1),n&&(P=n),E._adModel.set("skipMessage",t.skipMessage),E._adModel.set("skipText",t.skipText),E._adModel.set("skipOffset",e),o.set("skipButton",!0)},this.applyProviderListeners=function(e){E.applyProviderListeners(e),this.addClickHandler()},this.play=function(){E.instreamPlay()},this.pause=function(){E.instreamPause()},this.addClickHandler=function(){u.clickHandler()&&u.clickHandler().setAlternateClickHandlers(k,L),E.on(n.JWPLAYER_MEDIA_META,this.metaHandler,this)},this.skipAd=function(e){var t=n.JWPLAYER_AD_SKIPPED;this.trigger(t,e),P.call(this,{type:t})},this.metaHandler=function(e){e.width&&e.height&&u.resizeMedia()},this.destroy=function(){if(this.off(),o.set("skipButton",!1),E){u.clickHandler()&&u.clickHandler().revertAlternateClickHandlers(),o.off(null,null,E),E.off(null,null,C),E.instreamDestroy(),u.destroyInstream(),E=null,e.attachMedia();var t=o.get("preInstreamState");switch(t){case"instream-preroll":case"instream-midroll":r.isMobile()&&o.mediaModel.get("state")===i.BUFFERING&&v.setState(i.BUFFERING);var n=a.extend({},y);n.starttime=m,o.loadVideo(n);break;case"instream-postroll":case"instream-idle":v.stop()}}},this.getState=function(){return!(!E||!E._adModel)&&E._adModel.get("state")},this.setText=function(e){u.setAltText(e?e:"")},this.hide=function(){o.set("hideAdsControls",!0)}};return a.extend(u.prototype,o),u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(3),n(33),n(34),n(4),n(5),n(2),n(1)],r=function(e,t,n,i,r,o,a){var s=function(e,i){this.model=i,this._adModel=(new t).setup({id:i.get("id"),volume:i.get("volume"),fullscreen:i.get("fullscreen"),mute:i.get("mute")}),this._adModel.on("change:state",n,this);var r=e.getContainer();this.swf=r.querySelector("object")};return s.prototype=a.extend({init:function(){if(o.isChrome()){var e=-1,t=!1;this.swf.on("throttle",function(n){if(clearTimeout(e),"resume"===n.state)t&&(t=!1,this.instreamPlay());else{var i=this;e=setTimeout(function(){i._adModel.get("state")===r.PLAYING&&(t=!0,i.instreamPause())},250)}},this)}this.swf.on("instream:state",this.stateHandler,this).on("instream:time",function(e){this._adModel.set("position",e.position),this._adModel.set("duration",e.duration),this.trigger(i.JWPLAYER_MEDIA_TIME,e)},this).on("instream:complete",function(e){this.trigger(i.JWPLAYER_MEDIA_COMPLETE,e)},this).on("instream:error",function(e){this.trigger(i.JWPLAYER_MEDIA_ERROR,e)},this),this.swf.triggerFlash("instream:init"),this.applyProviderListeners=function(e){e&&(this.model.on("change:volume",function(t,n){e.volume(n)},this),this.model.on("change:mute",function(t,n){e.mute(n)},this),e.volume(this.model.get("volume")),e.mute(this.model.get("mute")),e.off(),e.on(i.JWPLAYER_PLAYER_STATE,this.stateHandler,this),e.on(i.JWPLAYER_MEDIA_TIME,function(e){this.trigger(i.JWPLAYER_MEDIA_TIME,e)},this))}},stateHandler:function(e){switch(e.newstate){case r.PLAYING:case r.PAUSED:this._adModel.set("state",e.newstate)}},instreamDestroy:function(){this._adModel&&(this.off(),this.swf.off(null,null,this),this.swf.triggerFlash("instream:destroy"),this.swf=null,this._adModel.off(),this._adModel=null,this.model=null)},load:function(e){this.swf.triggerFlash("instream:load",e)},instreamPlay:function(){this.swf.triggerFlash("instream:play")},instreamPause:function(){this.swf.triggerFlash("instream:pause")}},e),s}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(3),n(34),n(4),n(5),n(33)],r=function(e,t,n,i,r,o){var a=function(a,s){function l(t){var r=t||f.getVideo();if(p!==r){if(p=r,!r)return;var o="vpaid"===r.type;r.off(),r.on("all",function(t,n){o&&t===i.JWPLAYER_MEDIA_COMPLETE||this.trigger(t,e.extend({},n,{type:t}))},h),r.on(i.JWPLAYER_MEDIA_BUFFER_FULL,d),r.on(i.JWPLAYER_PLAYER_STATE,u),r.attachMedia(),r.volume(s.get("volume")),r.mute(s.get("mute")||s.get("autostartMuted")),f.on("change:state",n,h)}}function u(e){switch(e.newstate){case r.PLAYING:case r.PAUSED:f.set("state",e.newstate)}}function c(e){s.trigger(e.type,e),h.trigger(i.JWPLAYER_FULLSCREEN,{fullscreen:e.jwstate})}function d(){f.getVideo().play()}var f,p,h=e.extend(this,t);return a.on(i.JWPLAYER_FULLSCREEN,function(e){this.trigger(i.JWPLAYER_FULLSCREEN,e)},h),this.init=function(){f=(new o).setup({id:s.get("id"),volume:s.get("volume"),fullscreen:s.get("fullscreen"),mute:s.get("mute")||s.get("autostartMuted"),instreamMode:!0}),f.on("fullscreenchange",c),this._adModel=f},h.load=function(e){f.set("item",0),f.set("playlistItem",e),f.setActiveItem(e),l(),f.off(i.JWPLAYER_ERROR),f.on(i.JWPLAYER_ERROR,function(e){this.trigger(i.JWPLAYER_ERROR,e)},h),f.loadVideo(e)},h.applyProviderListeners=function(e){l(e),e&&(e.off(i.JWPLAYER_ERROR),e.on(i.JWPLAYER_ERROR,function(e){this.trigger(i.JWPLAYER_ERROR,e)},h),s.on("change:volume",function(e,t){p.volume(t)},h),s.on("change:mute",function(e,t){p.mute(t)},h),s.on("change:autostartMuted",function(e,t){t||p.mute(s.get("mute"))},h))},this.instreamDestroy=function(){f&&(f.off(),this.off(),p&&(p.detachMedia(),p.off(),f.getVideo()&&p.destroy()),f=null,a.off(null,null,this),a=null)},h.instreamPlay=function(){f.getVideo()&&f.getVideo().play(!0)},h.instreamPause=function(){f.getVideo()&&f.getVideo().pause(!0)},h};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(39),n(1)],r=function(e,t){function n(e){e.mediaController.off(a,e._onPlayAttempt),e.mediaController.off(s,e._triggerFirstFrame),e.mediaController.off(u,e._onTime),e.off("change:activeTab",e._onTabVisible)}function i(e){e._onTabVisible&&n(e),e._triggerFirstFrame=t.once(function(){var t=e._qoeItem;t.tick(l);var i=t.getFirstFrame();e.mediaController.trigger(l,{loadTime:i}),n(e)}),e._onTime=f(e._triggerFirstFrame),e._onPlayAttempt=function(){e._qoeItem.tick(a)},e._onTabVisible=function(t,n){n?e._qoeItem.tick(d):e._qoeItem.tick(c)},e.on("change:activeTab",e._onTabVisible),e.mediaController.on(a,e._onPlayAttempt),e.mediaController.once(s,e._triggerFirstFrame),e.mediaController.on(u,e._onTime)}function r(t){function n(t,n,r){t._qoeItem&&r&&t._qoeItem.end(r.get("state")),t._qoeItem=new e,t._qoeItem.getFirstFrame=function(){var e=this.between(a,l),t=this.between(d,l);return t>0&&t<e?t:e},t._qoeItem.tick(o),t._qoeItem.start(n.get("state")),i(t),n.on("change:state",function(e,n,i){t._qoeItem.end(i),t._qoeItem.start(n)})}t.on("change:mediaModel",n)}var o="playlistItem",a="playAttempt",s="providerFirstFrame",l="firstFrame",u="time",c="tabHidden",d="tabVisible",f=function(e){var t=0;return function(n){var i=n.position;i>t&&e(),t=i}};return{model:r}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(21),n(52),n(15),n(65),n(22),n(1),n(2),n(4),n(50)],r=function(e,t,i,r,o,a,s,l,u){function c(){var e={LOAD_PROMISE_POLYFILL:{method:f,depends:[]},LOAD_BASE64_POLYFILL:{method:p,depends:[]},LOAD_PLUGINS:{method:g,depends:["LOAD_PROMISE_POLYFILL"]},LOAD_XO_POLYFILL:{method:h,depends:[]},LOAD_SKIN:{method:k,depends:[]},LOAD_PLAYLIST:{method:y,depends:[]},LOAD_CONTROLS:{method:_,depends:["LOAD_PROMISE_POLYFILL"]},SETUP_VIEW:{method:L,depends:["LOAD_SKIN","LOAD_XO_POLYFILL","LOAD_PROMISE_POLYFILL"]},INIT_PLUGINS:{method:v,depends:["LOAD_PLUGINS","SETUP_VIEW"]},CHECK_FLASH:{method:w,depends:["SETUP_VIEW"]},FILTER_PLAYLIST:{method:E,depends:["LOAD_PLAYLIST","CHECK_FLASH"]},SET_ITEM:{method:P,depends:["INIT_PLUGINS","FILTER_PLAYLIST"]},DEFERRED:{method:d,depends:[]},SEND_READY:{method:j,depends:["LOAD_CONTROLS","SET_ITEM","DEFERRED"]}};return e}function d(e){setTimeout(e,0)}function f(e){window.Promise?e():n.e(11,function(require){n(57),e()})}function p(e){window.btoa&&window.atob?e():n.e(12,function(require){n(56),e()})}function h(e){"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?e():n.e(7,function(require){n(83),e()})}function g(t,n){window.jwplayerPluginJsonp=e.registerPlugin,x=e.loadPlugins(n.get("id"),n.get("plugins")),x.on(l.COMPLETE,t),x.on(l.ERROR,a.partial(m,t)),x.load()}function v(e,t,n){delete window.jwplayerPluginJsonp,x.setupPlugins(n,t),e()}function m(e,t){R(e,"Could not load plugin",t.message)}function y(e,n){var i=n.get("playlist");a.isString(i)?(T=new t,T.on(l.JWPLAYER_PLAYLIST_LOADED,function(t){n.attributes.feedData=t,n.attributes.playlist=t.playlist,e()}),T.on(l.JWPLAYER_ERROR,a.partial(b,e)),T.load(i)):e()}function w(e,t,n,i){var o="flash"===t.get("primary"),a=s.flashVersion();if(o&&a){var l,u=function(){l!==-1&&(clearTimeout(l),l=-1,setTimeout(function(){r.remove(f.querySelector("#"+p)),e()},0))},c=function(){t.set("primary",void 0),t.updateProviders(),u()},d=i.element(),f=d.querySelector(".jw-media");d.parentElement||c();var p=""+t.get("id")+"-"+Math.random().toString(16).substr(2),h=t.get("flashloader");Object.defineProperty(r.embed(h,f,p,null),"embedCallback",{get:function(){return u}}),l=setTimeout(c,3e3)}else e()}function E(e,t,n,i,r){var o=r(t.get("playlist"),t.get("feedData"));o?e():b(e)}function b(e,t){t&&t.message?R(e,"Error loading playlist",t.message):R(e,"Error loading player","No playable sources found")}function A(e,t){var n;return a.contains(o.SkinsLoadable,e)&&(n=t+"skins/"+e+".css"),n}function C(e){for(var t=document.styleSheets,n=0,i=t.length;n<i;n++)if(t[n].href===e)return!0;return!1}function k(e,t){var n=t.get("skin"),r=t.get("skinUrl");if(a.contains(o.SkinsIncluded,n))return void e();if(r||(r=A(n,t.get("base"))),a.isString(r)&&!C(r)){t.set("skin-loading",!0);var s=!0,u=new i(r,s);u.addEventListener(l.COMPLETE,function(){t.set("skin-loading",!1)}),u.addEventListener(l.ERROR,function(){t.set("skin","seven"),t.set("skin-loading",!1)}),u.load()}e()}function L(e,t,n,i){t.setAutoStart(),i.setup(),e()}function P(e,t){t.once("itemReady",e),t.setItemIndex(t.get("item"))}function j(e){e({type:"complete"})}function _(e,t,n,i){return t.get("controls")?void u.load().then(function(t){i.setControlsModule(t),e()})["catch"](function(t){R(e,"Failed to load controls",t)}):void e()}function R(e,t,n){e({type:"error",msg:t,reason:n})}var x,T;return{getQueue:c,error:R}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2)],r=function(e,t){function n(e){return"jwplayer."+e}function i(){return e.reduce(this.persistItems,function(e,i){var r=l[n(i)];return r&&(e[i]=t.serialize(r)),e},{})}function r(e,t){try{l[n(e)]=t}catch(i){var r=window.jwplayer;r&&r.debug&&console.error(i)}}function o(){e.each(this.persistItems,function(e){l.removeItem(n(e))})}function a(){this.persistItems=["volume","mute","captionLabel","qualityLabel"]}function s(t){e.each(this.persistItems,function(e){t.on("change:"+e,function(t,n){r(e,n)})})}var l={removeItem:t.noop};try{l=window.localStorage}catch(u){}return e.extend(a.prototype,{getAllItems:i,track:s,clear:o}),a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(74),n(2)],r=function(e,t){return n.p=t.loadFrom(),e.selectPlayer}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7)],r=function(e){function t(e){e||n()}function n(){throw new Error("Invalid DFXP file")}var i=e.seconds;return function(r){t(r);var o=[],a=r.getElementsByTagName("p"),s=30,l=r.getElementsByTagName("tt");if(l&&l[0]){var u=parseFloat(l[0].getAttribute("ttp:frameRate"));isNaN(u)||(s=u)}t(a),a.length||(a=r.getElementsByTagName("tt:p"),a.length||(a=r.getElementsByTagName("tts:p")));for(var c=0;c<a.length;c++){for(var d=a[c],f=d.getElementsByTagName("br"),p=0;p<f.length;p++){var h=f[p];h.parentNode.replaceChild(r.createTextNode("\r\n"),h)}var g=d.innerHTML||d.textContent||d.text||"",v=e.trim(g).replace(/>\s+</g,"><").replace(/(<\/?)tts?:/g,"$1").replace(/<br.*?\/>/g,"\r\n");if(v){var m=d.getAttribute("begin"),y=d.getAttribute("dur"),w=d.getAttribute("end"),E={begin:i(m,s),text:v};w?E.end=i(w,s):y&&(E.end=E.begin+i(y,s)),o.push(E)}}return o.length||n(),o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(20),n(7),n(2)],r=function(e,t,n){var i="jwplayer",r=function(r,o){for(var a=[],s=[],l=t.xmlAttribute,u="default",c="label",d="file",f="type",p=0;p<r.childNodes.length;p++){var h=r.childNodes[p];if(h.prefix===i){var g=e.localName(h);"source"===g?(delete o.sources,a.push({file:l(h,d),"default":l(h,u),label:l(h,c),type:l(h,f)})):"track"===g?(delete o.tracks,s.push({file:l(h,d),"default":l(h,u),kind:l(h,"kind"),label:l(h,c)})):(o[g]=n.serialize(e.textContent(h)),"file"===g&&o.sources&&delete o.sources)}o[d]||(o[d]=o.link)}if(a.length)for(o.sources=[],p=0;p<a.length;p++)a[p].file.length>0&&(a[p][u]="true"===a[p][u],a[p].label.length||delete a[p].label,o.sources.push(a[p]));if(s.length)for(o.tracks=[],p=0;p<s.length;p++)s[p].file.length>0&&(s[p][u]="true"===s[p][u],s[p].kind=s[p].kind.length?s[p].kind:"captions",s[p].label.length||delete s[p].label,o.tracks.push(s[p]));return o};return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(20),n(7),n(2)],r=function(e,t,n){function i(e){for(var t=[],n=0;n<s(e);n++){var i=e.childNodes[n];"jwplayer"===i.prefix&&"mediatypes"===o(i).toLowerCase()&&t.push(a(i))}return t}var r=t.xmlAttribute,o=e.localName,a=e.textContent,s=e.numChildren,l="media",u=function c(e,t){function u(e){var t={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};return t[e]?t[e]:e}var d,f,p="tracks",h=[];for(f=0;f<s(e);f++)if(d=e.childNodes[f],d.prefix===l){if(!o(d))continue;switch(o(d).toLowerCase()){case"content":if(r(d,"duration")&&(t.duration=n.seconds(r(d,"duration"))),r(d,"url")){t.sources||(t.sources=[]);var g={file:r(d,"url"),type:r(d,"type"),width:r(d,"width"),label:r(d,"label")},v=i(d);v.length&&(g.mediaTypes=v),t.sources.push(g)}s(d)>0&&(t=c(d,t));break;case"title":t.title=a(d);break;case"description":t.description=a(d);break;case"guid":t.mediaid=a(d);break;case"thumbnail":t.image||(t.image=r(d,"url"));break;case"group":c(d,t);break;case"subtitle":var m={};m.file=r(d,"url"),m.kind="captions",r(d,"lang").length>0&&(m.label=u(r(d,"lang"))),h.push(m)}}for(t.hasOwnProperty(p)||(t[p]=[]),f=0;f<h.length;f++)t[p].push(h[f]);return t};return u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={kind:"captions","default":!1};return function(n){if(n&&n.file)return e.extend({},t,n)}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(26),n(2),n(4),n(3),n(1),n(15)],r=function(e,t,n,i,r,o){function a(e,t,n){return function(){var i=e.getContainer().getElementsByClassName("jw-overlays")[0];i&&(n.left=i.style.left,n.top=i.style.top,i.appendChild(n),t.displayArea=i)}}function s(e){function t(){var t=e.displayArea;t&&e.resize(t.clientWidth,t.clientHeight)}return function(){t(),setTimeout(t,400)}}var l=function(l,u){function c(){v||(v=!0,g=o.loaderstatus.COMPLETE,h.trigger(n.COMPLETE))}function d(){if(!y&&(u&&0!==r.keys(u).length||c(),!v)){var i=l.getPlugins();p=r.after(m,c),r.each(u,function(r,a){var s=e.getPluginName(a),l=i[s],u=l.getJS(),c=l.getTarget(),d=l.getStatus();d!==o.loaderstatus.LOADING&&d!==o.loaderstatus.NEW&&(u&&!t.versionCheck(c)&&h.trigger(n.ERROR,{message:"Incompatible player version"}),p())})}}function f(e){if(!y){var i="File not found";e.url&&t.log(i,e.url),this.off(),this.trigger(n.ERROR,{message:i}),d()}}var p,h=r.extend(this,i),g=o.loaderstatus.NEW,v=!1,m=r.size(u),y=!1;this.setupPlugins=function(n,i){var o=[],u=l.getPlugins(),c=i.get("plugins");r.each(c,function(i,l){var d=e.getPluginName(l),f=u[d],p=f.getFlashPath(),h=f.getJS(),g=f.getURL();if(p){var v=r.extend({name:d,swf:p,pluginmode:f.getPluginmode()},i);o.push(v)}var m=t.tryCatch(function(){if(h){var e=c[g];if(!e)return void t.log("JW Plugin already loaded",d,g);var i=document.createElement("div");i.id=n.id+"_"+d,i.className="jw-plugin jw-reset";var o=r.extend({},e),l=f.getNewInstance(n,o,i);l.addToPlayer=a(n,l,i),l.resizeHandler=s(l),n.addPlugin(d,l,i)}});m instanceof t.Error&&t.log("ERROR: Failed to load "+d+".")}),i.set("flashPlugins",o)},this.load=function(){if(t.exists(u)&&"object"!==t.typeOf(u))return void d();g=o.loaderstatus.LOADING,r.each(u,function(e,i){if(t.exists(i)){var r=l.addPlugin(i);r.on(n.COMPLETE,d),r.on(n.ERROR,f)}});var e=l.getPlugins();r.each(e,function(e){e.load()}),d()},this.destroy=function(){y=!0,this.off()},this.getStatus=function(){return g}};return l}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(26),n(55)],r=function(e,t){var n=function(n){this.addPlugin=function(i){var r=e.getPluginName(i);return n[r]||(n[r]=new t(i)),n[r]},this.getPlugins=function(){return n}};return n}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[],r=function(){return{}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(60),n(2),n(1),n(69)],r=function(e,t,n,i){var r=[{name:"youtube",supports:function(e){return t.isYouTube(e.file,e.type)}},{name:"html5",supports:function(n){var r={aac:"audio/mp4",mp4:"video/mp4",f4v:"video/mp4",m4v:"video/mp4",mov:"video/mp4",mp3:"audio/mpeg",mpeg:"audio/mpeg",ogv:"video/ogg",ogg:"video/ogg",oga:"video/ogg",vorbis:"video/ogg",webm:"video/webm",f4a:"video/aac",m3u8:"application/vnd.apple.mpegurl",m3u:"application/vnd.apple.mpegurl",hls:"application/vnd.apple.mpegurl"},o=n.file,a=n.type,s=e(n);if(null!==s)return s;if(t.isRtmp(o,a))return!1;if(!r[a])return!1;if(i.canPlayType){var l=i.canPlayType(r[a]);return!!l}return!1}},{name:"flash",supports:function(e){var i={flv:"video",f4v:"video",mov:"video",m4a:"video",m4v:"video",mp4:"video",aac:"video",f4a:"video",mp3:"sound",mpeg:"sound",smil:"rtmp"},r=n.keys(i);if(!t.isFlashSupported())return!1;var o=e.file,a=e.type;return!!t.isRtmp(o,a)||n.contains(r,a)}}];return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(10),n(44),n(110),n(1),n(114)],r=function(e,t,i,r,o){function a(e){this.config=e||{},this.providers=this.reorderProviders(this.config.primary)}a.loaders={html5:function(e){n.e(5,function(require){var t=n(77);s(t),e(t)})},flash:function(e){n.e(6,function(require){var t=n(59);s(t),e(t)})},youtube:function(e){n.e(9,function(require){var t=n(61);s(t),e(t)})}};var s=a.registerProvider=function(n){var a=n.getName().name;if(!i[a]){if(!r.find(t,r.matches({name:a}))){if(!r.isFunction(n.supports))throw new Error("Tried to register a provider with an invalid object");t.unshift({name:a,supports:n.supports})}o(n.prototype,e),i[a]=n}};return r.extend(a.prototype,{load:function(e){return Promise.all(r.map(e,function(e){return new Promise(function(t){var n=a.loaders[e.name];n?n(t):t()})}))},reorderProviders:function(e){var n=r.clone(t);if("flash"===e){var i=r.indexOf(n,r.findWhere(n,{name:"flash"})),o=n.splice(i,1)[0],a=r.indexOf(n,r.findWhere(n,{name:"html5"}));n.splice(a,0,o)}return n},providerSupports:function(e,t){return e.supports(t)},required:function(e,t){var n=this,i=this.reorderProviders(t);return e=e.slice(),r.compact(r.map(i,function(t){for(var i=!1,r=e.length;r--;){var o=e[r],a=n.providerSupports(t,o.sources[0]);a&&e.splice(r,1),i=i||a}if(i)return t}))},choose:function(e){e=r.isObject(e)?e:{};for(var t=this.providers.length,n=0;n<t;n++){var o=this.providers[n];if(this.providerSupports(o,e)){var a=t-n-1;return{priority:a,name:o.name,type:e.type,providerToCheck:o,provider:i[o.name]}}}return null}}),a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t){"use strict";function n(){return o.now()}function i(){return a+o.now()}Object.defineProperty(t,"__esModule",{value:!0}),t.now=n,t.dateTime=i;var r=window.Date,o=window.performance||{timing:{}},a=o.timing.navigationStart||(new r).getTime();"now"in o||(o.now=function(){return(new r).getTime()-a})},function(e,t,n){var i,r;i=[n(1)],r=function(e){return function(t){return e.each(Array.prototype.slice.call(arguments,1),function(e){if(e)for(var n in e)n in t||(t[n]=e[n])}),t}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{hasClass:function(e,t){var n=" "+t+" ";return 1===e.nodeType&&(" "+e.className+" ").replace(/[\t\r\n\f]/g," ").indexOf(n)>=0}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[n(1),n(3)],r=function(e,t){return e.extend({get:function(e){return this.attributes=this.attributes||{},this.attributes[e]},set:function(e,t){if(this.attributes=this.attributes||{},this.attributes[e]!==t){var n=this.attributes[e];this.attributes[e]=t,this.trigger("change:"+e,this,t,n)}},clone:function(){return e.clone(this.attributes)},change:function(e,t,n){var i=this;return e.split(" ").forEach(function(e){var r="change:"+e,o=i.get(e);i.on(r,t,n),t.call(n,i,o,o)}),this}},t)}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={};return t.isDvr=function(e,t){return Math.abs(e)>=Math.max(t,0)},t.streamType=function(n,i){var r=e.isUndefined(i)?120:i,o="VOD";return n===1/0?o="LIVE":n<0&&(o=t.isDvr(n,r)?"DVR":"LIVE"),o},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=function(e,n,i){n=n||this,i=i||[];var r=window.jwplayer;if(r&&r.debug)return e.apply(n,i);try{return e.apply(n,i)}catch(o){return new t(e.name,o)}},t=function(e,t){this.name=e,this.message=t.message||t.toString(),this.error=t};return{tryCatch:e,Error:t}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(23),n(14),n(5),n(1)],r=function(e,t,i,r,o){var a,s=t.style,l={back:!0,backgroundOpacity:50,edgeStyle:null,fontSize:14,fontOpacity:100,fontScale:.05,preprocessor:o.identity,windowOpacity:0};return a=function(r){function a(){if(o.isFinite(j.fontSize)){var e=r.get("containerHeight");return e?void(L=l.fontScale*j.fontSize/l.fontSize):void r.once("change:containerHeight",a)}}function u(){var e=r.get("containerHeight");if(e){var t=Math.round(e*L);r.get("renderCaptionsNatively")?p(r.get("id"),t):s(b,{fontSize:t+"px"})}}function c(e,t){u(),f(e,t),d(e,t)}function d(e,n){t.css("#"+e+" .jw-text-track-display",P,e),t.css("#"+e+" .jw-text-track-cue",n,e)}function f(n,i){e.isSafari()&&t.css("#"+n+" .jw-video::-webkit-media-text-track-display-backdrop",{backgroundColor:i.backgroundColor},n,!0),t.css("#"+n+" .jw-video::-webkit-media-text-track-display",P,n,!0),t.css("#"+n+" .jw-video::cue",i,n,!0)}function p(e,n){P.fontSize=n+"px",t.css("#"+e+" .jw-video::-webkit-media-text-track-display",P,e,!0)}function h(e,n){var i=n.color,r=n.fontOpacity;if((i||r!==l.fontOpacity)&&(e.color=t.hexToRgba(i||"#ffffff",r)),n.back){var o=n.backgroundColor,a=n.backgroundOpacity;o===l.backgroundColor&&a===l.backgroundOpacity||(e.backgroundColor=t.hexToRgba(o,a))}else e.background="transparent";n.fontFamily&&(e.fontFamily=n.fontFamily),n.fontStyle&&(e.fontStyle=n.fontStyle),n.fontWeight&&(e.fontWeight=n.fontWeight),n.textDecoration&&(e.textDecoration=n.textDecoration)}function g(e,n,i){var r=t.hexToRgba("#000000",i);"dropshadow"===e?n.textShadow="0 2px 1px "+r:"raised"===e?n.textShadow="0 0 5px "+r+", 0 1px 5px "+r+", 0 2px 5px "+r:"depressed"===e?n.textShadow="0 -2px 1px "+r:"uniform"===e&&(n.textShadow="-2px 0 1px "+r+",2px 0 1px "+r+",0 -2px 1px "+r+",0 2px 1px "+r+",-1px 1px 1px "+r+",1px 1px 1px "+r+",1px -1px 1px "+r+",1px 1px 1px "+r)}function v(e){r.get("renderCaptionsNatively")||(E=e,this.selectCues(y,E))}function m(){r.get("renderCaptionsNatively")||n.e(10,function(require){n(58),k=window.WebVTT})}var y,w,E,b,A,C,k,L,P,j={};b=document.createElement("div"),b.className="jw-captions jw-reset",this.show=function(){i.addClass(b,"jw-captions-enabled")},this.hide=function(){i.removeClass(b,"jw-captions-enabled")},this.populate=function(e){if(!r.get("renderCaptionsNatively"))return w=[],y=e,e?void this.selectCues(e,E):(w=[],void this.renderCues())},this.resize=function(){u(),this.renderCues(!0)},this.renderCues=function(e){e=!!e,k&&k.processCues(window,w,b,e)},this.selectCues=function(e,t){var n,i;e&&e.data&&t&&(i=this.getAlignmentPosition(e,t),i!==!1&&(n=this.getCurrentCues(e.data,i),this.updateCurrentCues(n),this.renderCues(!0)))},this.getCurrentCues=function(e,t){return o.filter(e,function(e){return t>=e.startTime&&(!e.endTime||t<=e.endTime)})},this.updateCurrentCues=function(e){return e.length?o.difference(e,w).length&&(i.addClass(A,"jw-captions-window-active"),w=e):w=[],w},this.getAlignmentPosition=function(e,t){var n=e.source,i=t.metadata;return n?i&&o.isNumber(i[n])?i[n]:void 0:t.duration<0?t.position-t.duration:t.position},this.clear=function(){e.empty(b)},this.setup=function(e,n){A=document.createElement("div"),C=document.createElement("span"),A.className="jw-captions-window jw-reset",C.className="jw-captions-text jw-reset",j=o.extend({},l,n),L=l.fontScale,a(j.fontSize);var i=j.windowColor,u=j.windowOpacity,d=j.edgeStyle;P={};var f={};h(f,j),(i||u!==l.windowOpacity)&&(P.backgroundColor=t.hexToRgba(i||"#000000",u)),g(d,f,j.fontOpacity),j.back||null!==d||g("uniform",f),s(A,P),s(C,f),c(e,f),A.appendChild(C),b.appendChild(A),this.populate(r.get("captionsTrack")),r.set("captions",j)},this.element=function(){return b},r.on("change:playlistItem",function(){E=null,w=[]},this),r.on("change:captionsTrack",function(e,t){this.populate(t)},this),r.mediaController.on("seek",function(){w=[]},this),r.mediaController.on("time seek",v,this),r.mediaController.on("subtitlesTrackData",function(){this.selectCues(y,E)},this),r.on("itemReady",m,this)}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,,,,,,,,,,,,,,,,,function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var r,o,a=n(153),s=i(a);r=[],o=function(){function e(e,t,n,i){return(0,s["default"])(e,t,n,i)}return e}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var r,o,a=n(154),s=i(a);r=[n(6),n(2),n(4),n(1),n(3)],o=function(e,t,n,i,r){var o=t.style,a={linktarget:"_blank",margin:8,hide:!1,position:"top-right"};return function(l){function u(){var e=l.get("dock"),n=!!(e&&e.length&&"top-right"===d.position&&l.get("controls"));t.toggleClass(c,"jw-below",n)}i.extend(this,r);var c,d,f=new Image;return this.setup=function(){if(d=i.extend({},a,l.get("logo")),d.file){d.position=d.position||a.position,d.hide="true"===d.hide.toString(),c||(c=t.createElement((0,s["default"])(d.position,d.hide))),l.set("logo",d),l.change("dock",u),l.on("change:controls",u),f.onload=function(){var e={backgroundImage:'url("'+this.src+'")',width:this.width,height:this.height};if(d.margin!==a.margin){var t=/(\w+)-(\w+)/.exec(d.position);3===t.length&&(e["margin-"+t[1]]=d.margin,e["margin-"+t[2]]=d.margin)}o(c,e),l.set("logoWidth",e.width)},f.src=d.file;var r=new e(c);r.on("click tap",function(e){t.exists(e)&&e.stopPropagation&&e.stopPropagation(),this.trigger(n.JWPLAYER_LOGO_CLICK,{link:d.link,linktarget:d.linktarget})},this)}},this.setContainer=function(e){if(c){var t=e.querySelector(".jw-dock");t&&t.parentNode===e?e.insertBefore(c,t):e.appendChild(c)}},this.element=function(){return c},this.position=function(){return d.position},this.destroy=function(){l.off("change:dock",u),l.off("change:controls",u),f.onload=null},this}}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,r;i=[n(1),n(2)],r=function(e,t){function n(e,t){t.off("change:mediaType",null,this),t.on("change:mediaType",function(t,n){"audio"===n&&this.setImage(e.get("playlistItem").image)},this)}function i(e,n){var i=e.get("autostart")&&!t.isMobile()||e.get("item")>0;return i?(this.setImage(null),e.off("change:state",null,this),void e.on("change:state",function(e,t){"complete"!==t&&"idle"!==t&&"error"!==t||(this.setImage(n.image),this.resize(null,null,e.get("stretching")))},this)):void this.setImage(n.image)}var r=function(e){this.model=e,e.on("change:playlistItem",i,this),e.on("change:mediaModel",n,this)};return e.extend(r.prototype,{setup:function(e){this.el=e;var t=this.model.get("playlistItem");t&&this.setImage(t.image)},setImage:function(n){var i=this.image;i&&(i.onload=null,this.image=null),this.model.off("change:state",null,this);var r="";e.isString(n)&&(r='url("'+n+'")',i=this.image=new Image,i.src=n),t.style(this.el,{backgroundImage:r})},resize:function(e,n,i){if("uniform"===i){if(e&&(this.playerAspectRatio=e/n),!this.playerAspectRatio)return;var r=this.image,o=null;if(r){if(0===r.width){var a=this;return void(r.onload=function(){a.resize(e,n,i)})}var s=r.width/r.height;Math.abs(this.playerAspectRatio-s)<.09&&(o="cover")}t.style(this.el,{backgroundSize:o})}},element:function(){return this.el}}),r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2)],r=function(e,t){var n=function(e){this.model=e,this.model.on("change:playlistItem",this.playlistItem,this)};return e.extend(n.prototype,{hide:function(){this.el.style.display="none"},show:function(){this.el.style.display=""},setup:function(e){this.el=e;var t=this.el.getElementsByTagName("div");this.title=t[0],this.description=t[1],this.model.get("playlistItem")&&this.playlistItem(this.model,this.model.get("playlistItem")),this.model.on("change:logoWidth",this.update,this),this.model.on("change:dock",this.update,this)},update:function(e){var n={paddingLeft:0,paddingRight:0},i=e.get("controls"),r=e.get("dock"),o=e.get("logo");if(o){var a=1*(""+o.margin).replace("px",""),s=e.get("logoWidth")+(isNaN(a)?0:a);"top-left"===o.position?n.paddingLeft=s:"top-right"===o.position&&(n.paddingRight=s)}if(i&&r&&r.length){var l=56*r.length;n.paddingRight=Math.max(n.paddingRight,l)}t.style(this.el,n)},playlistItem:function(e,t){if(e.get("displaytitle")||e.get("displaydescription")){var n="",i="";
t.title&&e.get("displaytitle")&&(n=t.title),t.description&&e.get("displaydescription")&&(i=t.description),this.updateText(n,i)}else this.hide()},updateText:function(e,t){this.title.innerHTML=e,this.description.innerHTML=t,this.title.firstChild||this.description.firstChild?this.show():this.hide()},element:function(){return this.el}}),n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.CONTROLBAR_ONLY_HEIGHT=44;t.isAudioMode=function(e){var t=e.get("height");if(e.get("aspectratio"))return!1;if("string"==typeof t&&t.indexOf("%")>-1)return!1;var i=1*t||NaN;return i=isNaN(i)?e.get("containerHeight"):i,!!i&&(i&&i<=n)}},function(e,t,n){"use strict";function i(e){var t=0;return e>=1280?t=7:e>=960?t=6:e>=800?t=5:e>=640?t=4:e>=540?t=3:e>=420?t=2:e>=320&&(t=1),t}function r(e,t){var n="jw-breakpoint-"+t;o.replaceClass(e,/jw-breakpoint-\d+/,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.getBreakpoint=i,t.setBreakpoint=r;var o=n(14)},function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r,o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();r=[n(6),n(4),n(3),n(1)],o=function(e,t,n,r){return function(){function o(t,a,s){i(this,o),r.extend(this,n),this.revertAlternateClickHandlers(),this.domElement=a,this.model=t;var l={enableDoubleTap:!0,useMove:!0};this.ui=new e(a,r.extend(l,s)).on({"click tap":this.clickHandler,"doubleClick doubleTap":function(){return this.alternateDoubleClickHandler?void this.alternateDoubleClickHandler():void this.trigger("doubleClick")},move:function(){this.trigger("move")},over:function(){this.trigger("over")},out:function(){this.trigger("out")}},this)}return a(o,[{key:"destroy",value:function(){this.ui&&(this.ui.destroy(),this.ui=this.domElement=this.model=null,this.revertAlternateClickHandlers())}},{key:"clickHandler",value:function(e){if(!this.model.get("flashBlocked"))return this.alternateClickHandler?void this.alternateClickHandler(e):void this.trigger(e.type===t.touchEvents.CLICK?"click":"tap")}},{key:"element",value:function(){return this.domElement}},{key:"setAlternateClickHandlers",value:function(e,t){this.alternateClickHandler=e,this.alternateDoubleClickHandler=t||null}},{key:"revertAlternateClickHandlers",value:function(){this.alternateClickHandler=null,this.alternateDoubleClickHandler=null}}]),o}()}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,r;i=[n(14)],r=function(e){return function(t){var n=!1,i=function(){n=!1,e.removeClass(t,"jw-no-focus")},r=function(){n=!0,e.addClass(t,"jw-no-focus")},o=function(){n||i()};return t.addEventListener("focus",o),t.addEventListener("blur",i),t.addEventListener("mousedown",r),{destroy:function(){t.removeEventListener("focus",o),t.removeEventListener("blur",i),t.removeEventListener("mousedown",r)}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];return function(t,n,i){for(var r=t.requestFullscreen||t.webkitRequestFullscreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullscreen,o=n.exitFullscreen||n.webkitExitFullscreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.msExitFullscreen,a=!(!r||!o),s=e.length;s--;)n.addEventListener(e[s],i);return{events:e,supportsDomFullscreen:function(){return a},requestFullscreen:function(){r.apply(t)},exitFullscreen:function(){o.apply(n)},fullscreenElement:function(){return n.fullscreenElement||n.webkitCurrentFullScreenElement||n.mozFullScreenElement||n.msFullscreenElement},destroy:function(){for(s=e.length;s--;)n.removeEventListener(e[s],i)}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=window.IntersectionObserver;window.IntersectionObserver&&!d&&(d=new e(function(e){if(e&&e.length)for(var t=e.length;t--;)for(var n=e[t],i=c.length;i--;){var r=c[i];if(n.target===r.getContainer()){r.model.set("intersectionRatio",n.intersectionRatio);break}}},{threshold:[0,.25,.5,.75,1]}))}function o(){(0,u.cancelAnimationFrame)(f),f=(0,u.requestAnimationFrame)(function(){c.forEach(function(e){e.updateBounds()}),c.forEach(function(e){e.model.get("visibility")&&e.updateStyles()}),c.forEach(function(e){e.checkResized()})})}function a(){c.forEach(function(e){e.model.set("activeTab",(0,l["default"])())})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(62),l=i(s),u=n(68),c=[],d=void 0,f=-1;document.addEventListener("visibilitychange",a),document.addEventListener("webkitvisibilitychange",a),window.addEventListener("resize",o),window.addEventListener("orientationchange",o),window.addEventListener("beforeunload",function(){document.removeEventListener("visibilitychange",a),document.removeEventListener("webkitvisibilitychange",a),window.removeEventListener("resize",o),window.removeEventListener("orientationchange",o)}),t["default"]={add:function(e){c.push(e)},remove:function(e){var t=c.indexOf(e);t!==-1&&c.splice(t,1)},size:function(){return c.length},observe:function(e){r();try{d.unobserve(e)}catch(t){}d.observe(e)},unobserve:function(e){d&&d.unobserve(e)}}},function(e,t){"use strict";function n(e,t,n){if(e.get("fullscreen"))return 1;if(!e.get("activeTab"))return 0;var r=e.get("intersectionRatio");return void 0===r&&(r=i(t,n)),r}function i(e,t){var n=document.documentElement,i=document.body,o={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight};if(!i.contains(e))return 0;for(var a=e.getBoundingClientRect(),s=a,l=e.parentNode,u=!1;!u;){var c=null;if(l&&1===l.nodeType?"visible"!==window.getComputedStyle(l).overflow&&(c=t(l)):(u=!0,c=o),c&&(s=r(c,s),!s))return 0;l=l.parentNode}var d=a.width*a.height,f=s.width*s.height;return d?f/d:0}function r(e,t){var n=Math.max(e.top,t.top),i=Math.min(e.bottom,t.bottom),r=Math.max(e.left,t.left),o=Math.min(e.right,t.right),a=o-r,s=i-n;return a>=0&&s>=0&&{top:n,bottom:i,left:r,right:o,width:a,height:s}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var r,o,a=n(155),s=i(a),l=n(145),u=n(150),c=i(u),d=n(151),f=i(d),p=n(62),h=i(p),g=n(68),v=n(146),m=void 0;r=[n(4),n(5),n(3),n(2),n(1),n(149),n(148),n(147),n(120),n(142),n(143),n(144),n(50)],o=function(e,t,i,r,o,a,u,d,p,y,w,E,b){function A(A,_){function R(){return{reason:"interaction"}}function x(){(0,g.cancelAnimationFrame)(ge),ge=(0,g.requestAnimationFrame)(T)}function T(){ie.isSetup&&(ie.updateBounds(),ie.updateStyles(),ie.checkResized())}function S(e,t){var n=(0,l.isAudioMode)(_);if(o.isNumber(e)&&o.isNumber(t)){var i=(0,v.getBreakpoint)(e);(0,v.setBreakpoint)(re,i);var a=i<2,s=_.get("timeSliderAbove"),u=!n&&s!==!1&&(s||a);r.toggleClass(re,"jw-flag-small-player",a),r.toggleClass(re,"jw-flag-time-slider-above",u),r.toggleClass(re,"jw-orientation-portrait",t>e)}r.toggleClass(re,"jw-flag-audio-player",n),_.set("audioMode",n)}function I(e,t,n){if(e){var i={color:e,borderColor:e,stroke:e};r.css("#"+n+" .jw-color-active",i,n),r.css("#"+n+" .jw-color-active-hover:hover",i,n)}if(t){var o={color:t,borderColor:t,stroke:t};r.css("#"+n+" .jw-color-inactive",o,n),r.css("#"+n+" .jw-color-inactive-hover:hover",o,n)}}function M(){_.set("visibility",(0,f["default"])(_,re,k))}function O(e,t){t?m?D():b.load().then(function(e){m=e,D()})["catch"](function(e){ie.trigger("error",{message:"Controls failed to load",reason:e})}):ie.removeControls()}function D(){var e=new m(document,ie.element());ie.addControls(e)}function N(e){var t=oe.querySelector("video, audio");if(t){var n=document.createElement("div");n.innerHTML=e.title||"",t.setAttribute("title",n.textContent)}}function Y(e,t,n){t&&!n&&(ee(pe||e),ie.updateStyles())}function F(n,i,o){var a=new d(i,o,{useHover:!0});return a.on({click:function(){ie.trigger(e.JWPLAYER_DISPLAY_CLICK),_.get("controls")&&n.play(R())},tap:function(){ie.trigger(e.JWPLAYER_DISPLAY_CLICK);var o=i.get("state"),a=_.get("controls");if(a&&(o===t.IDLE||o===t.COMPLETE||pe&&pe.get("state")===t.PAUSED)&&n.play(R()),a&&o===t.PAUSED){if(pe||i.get("castActive")||i.mediaModel&&"audio"===i.mediaModel.get("mediaType"))return;r.toggleClass(re,"jw-flag-controls-hidden"),le.renderCues(!0)}else Ee&&(Ee.showing?Ee.userInactive():Ee.userActive())},doubleClick:function(){return Ee&&n.setFullscreen()},move:function(){return Ee&&Ee.userActive()},over:function(){return Ee&&Ee.userActive()}}),a}function W(e,t){r.replaceClass(re,/jw-skin-\S+/,t?"jw-skin-"+t:"")}function J(e,t){r.replaceClass(re,/jw-stretch-\S+/,"jw-stretch-"+t)}function B(e,t){r.toggleClass(re,"jw-flag-aspect-mode",!!t);var n=re.querySelector(".jw-aspect");C(n,{paddingTop:t||null})}function V(e,t){r.toggleClass(re,"jw-flag-flash-blocked",t)}function U(e){e.link?(A.pause(!0,R()),A.setFullscreen(!1),window.open(e.link,e.linktarget)):_.get("controls")&&A.play(R())}function H(e,t,n){var i=r.exists(e),o=r.exists(t),a={width:e};o&&n&&_.set("aspectratio",null),_.get("aspectratio")||(a.height=t),i&&o&&(_.set("width",e),_.set("height",t)),C(re,a)}function z(e,t){if((e&&!isNaN(1*e)||(e=_.get("containerWidth")))&&(t&&!isNaN(1*t)||(t=_.get("containerHeight")))){ae&&ae.resize(e,t,_.get("stretching"));var n=_.getVideo();if(n){var i=n.resize(e,t,_.get("stretching"));i&&(clearTimeout(he),he=setTimeout(z,250))}}}function G(){if(me.supportsDomFullscreen()){var e=me.fullscreenElement();return!(!e||e.id!==_.get("id"))}return pe?pe.getVideo().getFullScreen():_.getVideo().getFullScreen()}function q(e){var t=_.get("fullscreen"),n=void 0!==e.jwstate?e.jwstate:G();t!==n&&_.set("fullscreen",n),x(),clearTimeout(he),he=setTimeout(z,200)}function K(e,t){r.toggleClass(e,"jw-flag-fullscreen",t),C(document.body,{overflowY:t?"hidden":""}),t&&Ee&&Ee.userActive(),z(),x()}function Q(){Ee.userActive()}function X(e,t){var n="audio"===t,i=_.getVideo(),o=i&&0===i.getName().name.indexOf("flash");r.toggleClass(re,"jw-flag-media-audio",n),n&&!o?re.insertBefore(ae.el,oe):re.insertBefore(ae.el,le.element())}function $(e,t){if(!pe){var n="LIVE"===t;r.toggleClass(re,"jw-flag-live",n),ie.setAltText(n?e.get("localization").liveBroadcast:"")}}function Z(e,t){return t?void(t.name?se.updateText(t.name,t.message):se.updateText(t.message,"")):void se.playlistItem(e,e.get("playlistItem"))}function ee(e){if(_.get("viewSetup")){ce=e.get("state");var t=null;pe&&(t=ce),Ee&&(Ee.instreamState=t),te(ce)}}function te(e){switch(_.get("controls")&&e!==t.PAUSED&&r.hasClass(re,"jw-flag-controls-hidden")&&r.removeClass(re,"jw-flag-controls-hidden"),r.replaceClass(re,/jw-state-\S+/,"jw-state-"+e),e){case t.IDLE:case t.ERROR:case t.COMPLETE:le.hide();break;default:le.show(),e===t.PAUSED&&Ee&&!Ee.showing&&le.renderCues(!0)}}function ne(){!Ee||pe||L||Ee.userActive()}var ie=o.extend(this,i,{isSetup:!1,api:A,model:_});o.extend(_.attributes,{containerWidth:void 0,containerHeight:void 0,mediaContainer:void 0,fullscreen:!1,inDom:void 0,iFrame:void 0,activeTab:void 0,intersectionRatio:void 0,visibility:void 0,viewable:void 0,viewSetup:!1,audioMode:void 0,touchMode:void 0,altText:"",cues:void 0,castClicked:!1,scrubbing:!1,logoWidth:0});var re=r.createElement((0,s["default"])(_.get("id"),_.get("localization").player)),oe=re.querySelector(".jw-media"),ae=new w(_),se=new E(_),le=new p(_),ue=void 0,ce=void 0,de=void 0,fe=void 0,pe=void 0,he=-1,ge=-1,ve=void 0,me=void 0,ye=void 0,we=null,Ee=void 0;this.updateBounds=function(){(0,g.cancelAnimationFrame)(ge);var e=document.body.contains(re),t=k(re),n=Math.round(t.width),i=Math.round(t.height);return n===de&&i===fe?(de&&fe||x(),void _.set("inDom",e)):(n&&i||de&&fe||x(),(n||i||e)&&(_.set("containerWidth",n),_.set("containerHeight",i)),_.set("inDom",e),void(e&&c["default"].observe(re)))},this.updateStyles=function(){var e=_.get("containerWidth"),t=_.get("containerHeight");_.get("controls")&&S(e,t),Ee&&Ee.resize(e,t),z(e,t),le.resize()},this.checkResized=function(){var t=_.get("containerWidth"),n=_.get("containerHeight");if(t!==de||n!==fe){de=t,fe=n,ie.trigger(e.JWPLAYER_RESIZE,{width:t,height:n});var i=(0,v.getBreakpoint)(t);we!==i&&(we=i,ie.trigger(e.JWPLAYER_BREAKPOINT,{breakpoint:we}))}},this.handleColorOverrides=function(){function e(e,n,i,o){e=r.prefix(e,"#"+t+(o?"":" "));var a={};a[n]=i,r.css(e.join(", "),a,t)}var t=_.get("id"),n=_.get("skinColorActive"),i=_.get("skinColorInactive"),o=_.get("skinColorBackground");if(n&&(e([".jw-button-color.jw-toggle",".jw-button-color:hover",".jw-button-color.jw-toggle.jw-off:hover",".jw-option:not(.jw-active-option):hover",".jw-nextup-header"],"color",n),e([".jw-option.jw-active-option",".jw-progress"],"background","none "+n)),i&&(e([".jw-text",".jw-option",".jw-button-color",".jw-toggle.jw-off",".jw-skip .jw-skip-icon",".jw-nextup-body"],"color",i),e([".jw-cue",".jw-knob",".jw-active-option",".jw-nextup-header"],"background","none "+i)),o){if(e([".jw-background-color"],"background","none "+o),_.get("timeSliderAbove")!==!1){var a="transparent linear-gradient(180deg, "+r.getRgba(o,0)+" 0%, "+r.getRgba(o,.25)+" 30%, "+r.getRgba(o,.4)+" 70%, "+r.getRgba(o,.5)+") 100%";e([".jw-flag-time-slider-above .jw-background-color.jw-controlbar"],"background",a,!0)}e([".jw-flag-time-slider-above .jw-background-color.jw-slider-time"],"background","transparent",!0)}I(n,i,t)},this.setup=function(){var t=this;ae.setup(re.querySelector(".jw-preview")),se.setup(re.querySelector(".jw-title")),ue=new y(_),ue.setup(),ue.setContainer(re),ue.on(e.JWPLAYER_LOGO_CLICK,U),le.setup(re.id,_.get("captions")),re.insertBefore(le.element(),se.element()),ve=F(A,_,oe),ye=u(re),me=a(re,document,q),re.addEventListener("focus",ne),_.on("change:errorEvent",Z),_.on("change:hideAdsControls",function(e,t){r.toggleClass(re,"jw-flag-ads-hide-controls",t)}),_.on("change:scrubbing",function(e,t){r.toggleClass(re,"jw-flag-dragging",t)}),_.mediaController.on("fullscreenchange",q),_.change("mediaModel",function(e,n){n.change("mediaType",X,t),n.on("change:visualQuality",function(){z()},t)}),_.change("skin",W,this),_.change("stretching",J),_.change("flashBlocked",V);var i=_.get("width"),o=_.get("height");H(i,o),_.change("aspectratio",B),_.get("controls")?S(i,o):r.addClass(re,"jw-flag-controls-hidden"),j||(j=!0,n(185)),P&&r.addClass(re,"jw-ie"),_.get("skin-loading")===!0&&(r.addClass(re,"jw-flag-skin-loading"),_.once("change:skin-loading",function(){r.removeClass(re,"jw-flag-skin-loading")})),this.handleColorOverrides(),_.set("mediaContainer",oe),_.set("iFrame",r.isIframe()),_.set("activeTab",(0,h["default"])()),_.set("touchMode",L&&("string"==typeof o||o>=l.CONTROLBAR_ONLY_HEIGHT)),c["default"].add(this),this.isSetup=!0,_.set("viewSetup",!0),_.set("inDom",document.body.contains(re))},this.init=function(){this.updateBounds(),_.on("change:fullscreen",Ae),_.on("change:activeTab",M),_.on("change:fullscreen",M),_.on("change:intersectionRatio",M),_.on("change:visibility",Y),M(),1!==c["default"].size()||_.get("visibility")||Y(_,1,0),_.change("state",ee),_.change("controls",O),L&&(N(_.get("playlistItem")),_.on("itemReady",N)),de=fe=null,this.checkResized()};var be=function(e,t){t&&ee(pe||_)};this.addControls=function(e){Ee=e,r.removeClass(re,"jw-flag-controls-hidden"),_.change("streamType",$,this),e.enable(A,_),e.addActiveListeners(ue.element());var n=e.logoContainer();n&&ue.setContainer(n),fe&&(S(de,fe),e.resize(de,fe),le.renderCues(!0)),e.on("userActive userInactive",function(){ce!==t.PLAYING&&ce!==t.BUFFERING||le.renderCues(!0)}),e.on("all",ie.trigger,ie);var i=re.querySelector(".jw-overlays");i.addEventListener("mousemove",Q)},this.removeControls=function(){ue.setContainer(re),Ee&&(Ee.removeActiveListeners(ue.element()),Ee.disable(),Ee=null);var e=document.querySelector(".jw-overlays");e&&e.removeEventListener("mousemove",Q),r.addClass(re,"jw-flag-controls-hidden")};var Ae=function(e,t){var n=_.getVideo();t&&Ee&&_.get("autostartMuted")&&Ee.unmuteAutoplay(A,_),me.supportsDomFullscreen()?(t?me.requestFullscreen():me.exitFullscreen(),K(re,t)):P?K(re,t):(pe&&pe.getVideo()&&pe.getVideo().setFullscreen(t),n.setFullscreen(t)),n&&0===n.getName().name.indexOf("flash")&&n.setFullscreen(t)};this.resize=function(e,t){var n=!0;H(e,t,n),T()},this.resizeMedia=z,this.setupInstream=function(e){this.instreamModel=pe=e,pe.on("change:controls",be,this),pe.on("change:state",ee,this),r.addClass(re,"jw-flag-ads"),Ee&&Ee.userActive()},this.setAltText=function(e){_.set("altText",e)},this.destroyInstream=function(){if(pe&&(pe.off(null,null,this),pe=null),this.setAltText(""),r.removeClass(re,["jw-flag-ads","jw-flag-ads-hide-controls"]),_.set("hideAdsControls",!1),_.getVideo){var e=_.getVideo();e.setContainer(oe)}$(_,_.get("streamType")),ve.revertAlternateClickHandlers()},this.addCues=function(e){_.set("cues",e)},this.clickHandler=function(){return ve},this.getContainer=this.element=function(){return re},this.controlsContainer=function(){return Ee?Ee.element():null},this.getSafeRegion=function(e){var t={x:0,y:0,width:de||0,height:fe||0};return Ee&&(e=e||!r.exists(e),e&&(t.height-=Ee.controlbarHeight())),t},this.setCaptions=function(e){le.clear(),le.setup(_.get("id"),e),le.resize()},this.destroy=function(){c["default"].unobserve(re),c["default"].remove(this),this.isSetup=!1,this.off(),(0,g.cancelAnimationFrame)(ge),clearTimeout(he),re.removeEventListener("focus",ne),ye&&(ye.destroy(),ye=null),me&&(me.destroy(),me=null),_.mediaController&&_.mediaController.off("fullscreenchange",q),Ee&&Ee.disable(),pe&&this.destroyInstream(),ve&&(ve.destroy(),ve=null),ue&&(ue.destroy(),ue=null),r.clearCss(_.get("id"))}}var C=r.style,k=r.bounds,L=r.isMobile(),P=r.isIE(),j=!1;return A.prototype.setControlsModule=function(e){m=e},A}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return'<div id="'+e+'" class="jw-skin-'+t+' jw-error jw-reset"><div class="jw-title jw-reset">'+('<div class="jw-title-primary jw-reset">'+n+"</div>")+('<div class="jw-title-secondary jw-reset">'+i+"</div>")+'</div><div class="jw-display-container jw-reset"><div class="jw-display-icon-container jw-background-color jw-reset"><div class="jw-icon jw-icon-display jw-reset" aria-hidden="true"></div></div></div></div>'}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){var n=t?" jw-hide":"";return'<div class="jw-logo jw-logo-'+e+n+' jw-reset"></div>'}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div id="'+e+'" class="jwplayer jw-reset jw-state-setup" tabindex="0" aria-label="'+t+'"><div class="jw-aspect jw-reset"></div><div class="jw-media jw-reset"></div><div class="jw-preview jw-reset"></div><div class="jw-title jw-reset"><div class="jw-title-primary jw-reset"></div><div class="jw-title-secondary jw-reset"></div></div><div class="jw-overlays jw-reset"></div></div>'}},function(e,t,n){var i,r;i=[n(74),n(1),n(28),n(2),n(7),n(6),n(79),n(15),n(80),n(69),n(4),n(5),n(53),n(37),n(51),n(21)],r=function(e,t,n,i,r,o,a,s,l,u,c,d,f,p,h,g){var v={};return v.api=e,v._=t,v._=t,v.version=n,v.utils=t.extend(i,r,{key:a,extend:t.extend,scriptloader:s,rssparser:h,tea:l,UI:o}),v.utils.css.style=v.utils.style,v.vid=u,v.events=t.extend({},c,{state:d}),v.playlist=t.extend({},f,{item:p}),v.plugins=g,v}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,function(e,t,n){var i,r;i=[n(94),n(16),n(173),n(29),n(27),n(1)],r=function(e,t,i,r,o,a){var s=e.prototype.setup;return e.prototype.setup=function(e,l){function u(){var e=p.get("cast");return a.isObject(e)&&g("casting")}function c(){var e=p.getVideo(),t=p.get("cast")||{};u()?(!t.customAppId&&r.containsDrm(p)||d.apply(this),f.apply(this)):e&&e.video&&(e.video.webkitWirelessVideoPlaybackDisabled=!0)}function d(){n.e(4,function(require){if(window.chrome&&o.isChrome()){var e=n(75);this._castController=new e(this,p),this.castToggle=this._castController.castToggle.bind(this._castController)}}.bind(this))}function f(){window.WebKitPlaybackTargetAvailabilityEvent&&n.e(8,function(require){var e=n(73);this._airplayController=new e(this,p),this.castToggle=this._airplayController.airplayToggle.bind(this._airplayController)}.bind(this))}s.apply(this,arguments);var p=this._model,h=p.get("edition"),g=t(h),v=i.setup(this._view);e.analytics&&(e.sdkplatform=e.sdkplatform||e.analytics.sdkplatform);var m=this;l.getAdBlock=v.getAdBlock,this.on("playlistItem",function(){v.onReady.apply(m)}),this.once("ready",c,this)},e}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(79),n(16),n(1),n(2),n(66),n(100),n(29)],r=function(e,t,i,r,o,a,s){function l(e,t,n){if(t){var i=t.client;delete t.client,/\.(js|swf)$/.test(i||"")||(i=o.repo()+n),e[i]=t}}function u(e,n){var r=n.get("ab");r&&i.each(r.tests,function(e){i.each(e,function(e){i.isFunction(e.addConfig)&&e.addConfig(n.attributes,e.selection)})});var a=i.clone(n.get("plugins"))||{},s=n.get("edition"),u=t(s),c=/^(vast|googima|freewheel)$/,d=/\.(js|swf)$/,f=o.repo(),p=i.clone(n.get("advertising"));if(u("ads")&&p&&(d.test(p.client)?a[p.client]=p:c.test(p.client)&&(a[f+p.client+".js"]=p),delete p.client),u("jwpsrv")){var h=n.get("analytics");i.isObject(h)||(h={}),l(a,h,"jwpsrv.js")}l(a,n.get("ga"),"gapro.js"),l(a,n.get("sharing"),"sharing.js");var g=n.get("related"),v=i.isObject(g),m=n.get("controls")!==!1||v;if(m){var y=n.get("visualplaylist")!==!1||v;v||(g={disableRelated:!0}),g.showDockButton=y,l(a,g,"related.js")}var w=n.get("mobileSdk");if(!w){var E=n.get("playlist");i.some(E,function(e){if(e.stereomode&&e.stereomode.length>0)return l(a,n.get("vr")||{},"vr.js"),!0})}n.set("plugins",a),e()}function c(t,i){var s=i.get("key")||window.jwplayer&&window.jwplayer.key,l=new e(s),u=l.edition();if(i.set("key",s),i.set("edition",u),"unlimited"===u){var c=r.getScriptPath("jwplayer.js");if(!c)return void a.error(t,"Error setting up player","Could not locate jwplayer.js script tag");n.p=c,r.repo=o.repo=o.loadFrom=function(){return c}}i.updateProviders(),"invalid"===u?a.error(t,"Error setting up player",(void 0===s?"Missing":"Invalid")+" license key"):t()}function d(e,t){s.containsDrm(t)?s.probe(e,t.get("edition")):e()}function f(){var e=a.getQueue();return e.CHECK_KEY={method:c,depends:["LOAD_BASE64_POLYFILL"]},e.PROBE_DRM_SUPPORT={method:d,depends:["CHECK_KEY","LOAD_PROMISE_POLYFILL"]},e.FILTER_PLUGINS={method:u,depends:["CHECK_KEY"]},e.FILTER_PLAYLIST.depends.push("PROBE_DRM_SUPPORT"),e.LOAD_PLUGINS.depends.push("FILTER_PLUGINS"),e}return{getQueue:f}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(102),n(156),n(1)],r=function(e,t,n){var i=window,r=n.extend(e,t);return"function"==typeof i.define&&i.define.amd&&i.define([],function(){return r}),i.jwplayer?i.jwplayer:r}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,,,,,,,function(e,t,n){var i,r;i=[],r=function(){function e(){var e=document.createElement("div");return e.className=n,e.innerHTML="&nbsp;",e.style.width="1px",e.style.height="1px",e.style.position="absolute",e.style.background="transparent",e}function t(t){function i(){if(a)return!0;var e=this;r()&&e.trigger("adBlock")}function r(){return null!==s.offsetParent&&s.className===n&&""!==s.innerHTML&&0!==s.clientHeight||(a=!0),a}function o(){return a}var a=!1,s=e();return t.element().appendChild(s),{onReady:i,getAdBlock:o}}var n="afs_ads";return{setup:t}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var r,o,a=n(176),s=i(a);r=[n(2),n(4),n(6),n(3),n(1)],o=function(e,t,n,i,r){var o=function(e){this.model=e,this.setup()};return r.extend(o.prototype,i,{setup:function(){this.destroy(),this.skipMessage=this.model.get("skipText"),this.skipMessageCountdown=this.model.get("skipMessage"),this.setWaitTime(this.model.get("skipOffset"));var t=(0,s["default"])();this.el=e.createElement(t),this.skiptext=this.el.getElementsByClassName("jw-skiptext")[0],this.skipAdOnce=r.once(this.skipAd.bind(this)),new n(this.el).on("click tap",r.bind(function(){this.skippable&&this.skipAdOnce()},this)),this.model.on("change:duration",this.onChangeDuration,this),this.model.on("change:position",this.onChangePosition,this),this.onChangeDuration(this.model,this.model.get("duration")),this.onChangePosition(this.model,this.model.get("position"))},updateMessage:function(e){this.skiptext.innerHTML=e},updateCountdown:function(e){this.updateMessage(this.skipMessageCountdown.replace(/xx/gi,Math.ceil(this.waitTime-e)))},onChangeDuration:function(t,n){if(n){if(this.waitPercentage){if(!n)return;this.itemDuration=n,this.setWaitTime(this.waitPercentage),delete this.waitPercentage}e.removeClass(this.el,"jw-hidden")}},onChangePosition:function(t,n){this.waitTime-n>0?this.updateCountdown(n):(this.updateMessage(this.skipMessage),this.skippable=!0,e.addClass(this.el,"jw-skippable"))},element:function(){return this.el},setWaitTime:function(t){if(r.isString(t)&&"%"===t.slice(-1)){var n=parseFloat(t);return void(this.itemDuration&&!isNaN(n)?this.waitTime=this.itemDuration*n/100:this.waitPercentage=t)}r.isNumber(t)?this.waitTime=t:"string"===e.typeOf(t)?this.waitTime=e.seconds(t):isNaN(Number(t))?this.waitTime=0:this.waitTime=Number(t)},skipAd:function(){this.trigger(t.JWPLAYER_AD_SKIPPED)},destroy:function(){this.el&&(this.el.removeEventListener("click",this.skipAdOnce),this.el.parentElement&&this.el.parentElement.removeChild(this.el)),delete this.skippable,delete this.itemDuration,delete this.waitPercentage}}),o}.apply(t,r),!(void 0!==o&&(e.exports=o))},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){return'<div class="jw-skip jw-background-color jw-hidden jw-reset"><span class="jw-text jw-skiptext jw-reset"></span><span class="jw-icon jw-icon-inline jw-skip-icon jw-reset"></span></div>'}},,,function(e,t,n){t=e.exports=n(82)(),t.push([e.id,".jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}.jw-background-color{background:rgba(33,33,33,.8)}.jw-knob,.jw-text{color:#cecece}.jw-knob{background-color:#fff}.jw-button-color{color:#cecece;fill:#cecece}.jw-button-color:focus,:not(.jw-flag-touch) .jw-button-color:hover{outline:none;color:#fff;fill:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:#cecece}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:none}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-display-icon-container{margin:0 .25em}.jw-display-icon-container .jw-icon{color:#cecece}.jw-rail{background:hsla(0,0%,100%,.2)}.jw-buffer{background:hsla(0,0%,100%,.3)}.jw-progress{background:#fff}.jw-slider-horizontal,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:.3em}.jw-slider-horizontal .jw-knob{margin-left:-.3em}.jw-slider-vertical .jw-knob{margin-bottom:-.3em}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{width:.3em}.jw-menu,.jw-time-tip,.jw-volume-tip{border:0}.jw-menu,.jw-time-tip{padding:.5em}.jw-volume-tip{padding:1em}.jw-skip{padding:.5em}.jw-skip .jw-skip-icon,.jw-skip .jw-skiptext{color:#cecece}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#fff}.jw-dock-button .jw-text,.jw-time-tip .jw-text{color:#cecece}.jw-dock-button{background:rgba(33,33,33,.8)}:not(.jw-flag-touch) .jw-dock-button:hover{background:#212121}.jw-icon-cast button{--connected-color:#fff;--disconnected-color:#cecece}.jw-icon-cast button:focus{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast button.jw-off{--connected-color:#cecece}.jw-icon-cast:hover button{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-nextup-header{background:rgba(33,33,33,.8);color:#fff}.jw-nextup-body{background:rgba(0,0,0,.8);color:#fff}.jw-nextup-thumbnail-visible+.jw-nextup-title:after{background:-webkit-linear-gradient(top,transparent,#000);background:linear-gradient(-180deg,transparent,#000)}.jw-nextup-close{color:#cecece}.jw-nextup-close:active,.jw-nextup-close:hover{color:#fff}.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-display-icon-container:hover,.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-media:hover~.jw-controls .jw-display-icon-display{background-color:#212121}.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-display-icon-container:hover .jw-icon{color:#fff}.jw-color-active,:not(.jw-flag-touch) .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive,:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:#cecece;stroke:#cecece;border-color:#cecece}.jw-option{color:#cecece}.jw-option.jw-active-option{color:#fff;background-color:hsla(0,0%,100%,.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:1px dotted #585858}.jw-media,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-captions,.jw-preview,.jw-title{pointer-events:none}.jw-logo,.jw-media{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{-o-object-fit:contain;object-fit:contain}.jwplayer.jw-stretch-none video{-o-object-fit:none;object-fit:none}.jwplayer.jw-stretch-fill video{-o-object-fit:cover;object-fit:cover}.jwplayer.jw-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000,#000 18%,transparent);background:linear-gradient(180deg,#000 0,#000 18%,transparent)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:100%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-flag-small-player .jw-title{background:-webkit-linear-gradient(top,rgba(51,51,51,.75),rgba(51,51,51,0));background:linear-gradient(180deg,rgba(51,51,51,.75),rgba(51,51,51,0));height:auto;padding:16px 0}.jw-flag-small-player .jw-title-primary,.jw-flag-small-player .jw-title-secondary{min-height:inherit;padding:0 16px}.jw-flag-small-player .jw-title-secondary{display:none;margin-top:5px}.jw-captions{position:absolute;width:100%;height:100%;text-align:center;display:none;max-height:calc(100% - 40px);letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none}.jw-text-track-display{font-size:inherit;line-height:1.5}.jw-text-track-cue{background-color:rgba(0,0,0,.5);color:#fff;padding:.1em .3em}.jwplayer video::-webkit-media-controls{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:calc(100% - 40px);line-height:normal}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer video::cue{background-color:rgba(0,0,0,.5)}.jwplayer video::-webkit-media-controls-panel-container{display:none}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-flag-audio-player .jw-logo{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-right.jw-below{top:3.5em}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jw-logo-bottom-right{bottom:0;right:0}.jw-state-setup{background-color:transparent}.jw-state-setup .jw-logo{visibility:hidden}body .jw-error .jw-title,body .jwplayer.jw-state-error .jw-title{display:block}body .jw-error .jw-title .jw-title-primary,body .jwplayer.jw-state-error .jw-title .jw-title-primary{white-space:normal}body .jw-error .jw-title .jw-title-secondary,body .jwplayer.jw-state-error .jw-title .jw-title-secondary{display:block}body .jw-error{font-size:16px;background-color:#000;color:#fff;width:100%;height:100%;display:table;opacity:1;position:relative}.jw-state-idle .jw-preview,.jw-state-idle .jw-title,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player) .jw-preview,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player) .jw-title,body .jw-error .jw-preview,body .jw-error .jw-title,body .jwplayer.jw-state-error .jw-preview,body .jwplayer.jw-state-error .jw-title{display:block}.jw-state-idle .jw-captions,.jwplayer.jw-state-complete .jw-captions,body .jwplayer.jw-state-error .jw-captions{display:none}.jw-state-idle video::-webkit-media-text-track-container,.jwplayer.jw-state-complete video::-webkit-media-text-track-container,body .jwplayer.jw-state-error video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-media,.jwplayer.jw-flag-skin-loading .jw-preview,.jwplayer.jw-flag-skin-loading .jw-rightclick,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}.jwplayer.jw-flag-controls-hidden .jw-captions{max-height:none}.jwplayer.jw-flag-controls-hidden video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-controls-hidden .jw-media{cursor:default}.jw-flag-audio-player:not(.jw-flag-flash-blocked) .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:none}.jw-flag-audio-player object{min-height:45px}",""]);
},,,,,,function(e,t,n){var i=n(179);"string"==typeof i&&(i=[["all-players",i,""]]),n(49).style(i,"all-players"),i.locals&&(e.exports=i.locals)}]);
jwplayer.key="fpjDq6xZtjNRpxYoVu4nj0jRIZqgVeQSpqiuNYojy3JFZW2B";

//Flowplayer
!function(){function h(p){console.log("$f.fireEvent",[].slice.call(p))}function l(r){if(!r||typeof r!="object"){return r}var p=new r.constructor();for(var q in r){if(r.hasOwnProperty(q)){p[q]=l(r[q])}}return p}function n(u,r){if(!u){return}var p,q=0,s=u.length;if(s===undefined){for(p in u){if(r.call(u[p],p,u[p])===false){break}}}else{for(var t=u[0];q<s&&r.call(t,q,t)!==false;t=u[++q]){}}return u}function c(p){return document.getElementById(p)}function j(r,q,p){if(typeof q!="object"){return r}if(r&&q){n(q,function(s,t){if(!p||typeof t!="function"){r[s]=t}})}return r}function o(t){var r=t.indexOf(".");if(r!=-1){var q=t.slice(0,r)||"*";var p=t.slice(r+1,t.length);var s=[];n(document.getElementsByTagName(q),function(){if(this.className&&this.className.indexOf(p)!=-1){s.push(this)}});return s}}function g(p){p=p||window.event;if(p.preventDefault){p.stopPropagation();p.preventDefault()}else{p.returnValue=false;p.cancelBubble=true}return false}function k(r,p,q){r[p]=r[p]||[];r[p].push(q)}function e(p){return p.replace(/&amp;/g,"%26").replace(/&/g,"%26").replace(/=/g,"%3D")}function f(){return"_"+(""+Math.random()).slice(2,10)}var i=function(u,s,t){var r=this,q={},v={};r.index=s;if(typeof u=="string"){u={url:u}}j(this,u,true);n(("Begin*,Start,Pause*,Resume*,Seek*,Stop*,Finish*,LastSecond,Update,BufferFull,BufferEmpty,BufferStop").split(","),function(){var w="on"+this;if(w.indexOf("*")!=-1){w=w.slice(0,w.length-1);var x="onBefore"+w.slice(2);r[x]=function(y){k(v,x,y);return r}}r[w]=function(y){k(v,w,y);return r};if(s==-1){if(r[x]){t[x]=r[x]}if(r[w]){t[w]=r[w]}}});j(this,{onCuepoint:function(y,x){if(arguments.length==1){q.embedded=[null,y];return r}if(typeof y=="number"){y=[y]}var w=f();q[w]=[y,x];if(t.isLoaded()){t._api().fp_addCuepoints(y,s,w)}return r},update:function(x){j(r,x);if(t.isLoaded()){t._api().fp_updateClip(x,s)}var w=t.getConfig();var y=(s==-1)?w.clip:w.playlist[s];j(y,x,true)},_fireEvent:function(w,z,x,B){if(w=="onLoad"){n(q,function(C,D){if(D[0]){t._api().fp_addCuepoints(D[0],s,C)}});return false}B=B||r;if(w=="onCuepoint"){var A=q[z];if(A){return A[1].call(t,B,x)}}if(z&&"onBeforeBegin,onMetaData,onMetaDataChange,onStart,onUpdate,onResume".indexOf(w)!=-1){j(B,z);if(z.metaData){if(!B.duration){B.duration=z.metaData.duration}else{B.fullDuration=z.metaData.duration}}}var y=true;n(v[w],function(){y=this.call(t,B,z,x)});return y}});if(u.onCuepoint){var p=u.onCuepoint;r.onCuepoint.apply(r,typeof p=="function"?[p]:p);delete u.onCuepoint}n(u,function(w,x){if(typeof x=="function"){k(v,w,x);delete u[w]}});if(s==-1){t.onCuepoint=this.onCuepoint}};var m=function(q,s,r,u){var p=this,t={},v=false;if(u){j(t,u)}n(s,function(w,x){if(typeof x=="function"){t[w]=x;delete s[w]}});j(this,{animate:function(z,A,y){if(!z){return p}if(typeof A=="function"){y=A;A=500}if(typeof z=="string"){var x=z;z={};z[x]=A;A=500}if(y){var w=f();t[w]=y}if(A===undefined){A=500}s=r._api().fp_animate(q,z,A,w);return p},css:function(x,y){if(y!==undefined){var w={};w[x]=y;x=w}s=r._api().fp_css(q,x);j(p,s);return p},show:function(){this.display="block";r._api().fp_showPlugin(q);return p},hide:function(){this.display="none";r._api().fp_hidePlugin(q);return p},toggle:function(){this.display=r._api().fp_togglePlugin(q);return p},fadeTo:function(z,y,x){if(typeof y=="function"){x=y;y=500}if(x){var w=f();t[w]=x}this.display=r._api().fp_fadeTo(q,z,y,w);this.opacity=z;return p},fadeIn:function(x,w){return p.fadeTo(1,x,w)},fadeOut:function(x,w){return p.fadeTo(0,x,w)},getName:function(){return q},getPlayer:function(){return r},_fireEvent:function(x,w,y){if(x=="onUpdate"){var A=r._api().fp_getPlugin(q);if(!A){return}j(p,A);delete p.methods;if(!v){n(A.methods,function(){var C=""+this;p[C]=function(){var D=[].slice.call(arguments);var E=r._api().fp_invoke(q,C,D);return E==="undefined"||E===undefined?p:E}});v=true}}var B=t[x];if(B){var z=B.apply(p,w);if(x.slice(0,1)=="_"){delete t[x]}return z}return p}})};function b(r,H,u){var x=this,w=null,E=false,v,t,G=[],z={},y={},F,s,q,D,p,B;j(x,{id:function(){return F},isLoaded:function(){return(w!==null&&w.fp_play!==undefined&&!E)},getParent:function(){return r},hide:function(I){if(I){r.style.height="0px"}if(x.isLoaded()){w.style.height="0px"}return x},show:function(){r.style.height=B+"px";if(x.isLoaded()){w.style.height=p+"px"}return x},isHidden:function(){return x.isLoaded()&&parseInt(w.style.height,10)===0},load:function(K){if(!x.isLoaded()&&x._fireEvent("onBeforeLoad")!==false){var I=function(){if(v&&!flashembed.isSupported(H.version)){r.innerHTML=""}if(K){K.cached=true;k(y,"onLoad",K)}flashembed(r,H,{config:u})};var J=0;n(a,function(){this.unload(function(L){if(++J==a.length){I()}})})}return x},unload:function(K){if(v.replace(/\s/g,"")!==""){if(x._fireEvent("onBeforeUnload")===false){if(K){K(false)}return x}E=true;try{if(w){if(w.fp_isFullscreen()){w.fp_toggleFullscreen()}w.fp_close();x._fireEvent("onUnload")}}catch(I){}var J=function(){w=null;r.innerHTML=v;E=false;if(K){K(true)}};if(/WebKit/i.test(navigator.userAgent)&&!/Chrome/i.test(navigator.userAgent)){setTimeout(J,0)}else{J()}}else{if(K){K(false)}}return x},getClip:function(I){if(I===undefined){I=D}return G[I]},getCommonClip:function(){return t},getPlaylist:function(){return G},getPlugin:function(I){var K=z[I];if(!K&&x.isLoaded()){var J=x._api().fp_getPlugin(I);if(J){K=new m(I,J,x);z[I]=K}}return K},getScreen:function(){return x.getPlugin("screen")},getControls:function(){return x.getPlugin("controls")._fireEvent("onUpdate")},getLogo:function(){try{return x.getPlugin("logo")._fireEvent("onUpdate")}catch(I){}},getPlay:function(){return x.getPlugin("play")._fireEvent("onUpdate")},getConfig:function(I){return I?l(u):u},getFlashParams:function(){return H},loadPlugin:function(L,K,N,M){if(typeof N=="function"){M=N;N={}}var J=M?f():"_";x._api().fp_loadPlugin(L,K,N,J);var I={};I[J]=M;var O=new m(L,null,x,I);z[L]=O;return O},getState:function(){return x.isLoaded()?w.fp_getState():-1},play:function(J,I){var K=function(){if(J!==undefined){x._api().fp_play(J,I)}else{x._api().fp_play()}};if(x.isLoaded()){K()}else{if(E){setTimeout(function(){x.play(J,I)},50)}else{x.load(function(){K()})}}return x},getVersion:function(){var J="flowplayer.js @VERSION";if(x.isLoaded()){var I=w.fp_getVersion();I.push(J);return I}return J},_api:function(){if(!x.isLoaded()){throw"Flowplayer "+x.id()+" not loaded when calling an API method"}return w},setClip:function(I){n(I,function(J,K){if(typeof K=="function"){k(y,J,K);delete I[J]}else{if(J=="onCuepoint"){$f(r).getCommonClip().onCuepoint(I[J][0],I[J][1])}}});x.setPlaylist([I]);return x},getIndex:function(){return q},bufferAnimate:function(I){w.fp_bufferAnimate(I===undefined||I);return x},_swfHeight:function(){return w.clientHeight}});n(("Click*,Load*,Unload*,Keypress*,Volume*,Mute*,Unmute*,PlaylistReplace,ClipAdd,Fullscreen*,FullscreenExit,Error,MouseOver,MouseOut").split(","),function(){var I="on"+this;if(I.indexOf("*")!=-1){I=I.slice(0,I.length-1);var J="onBefore"+I.slice(2);x[J]=function(K){k(y,J,K);return x}}x[I]=function(K){k(y,I,K);return x}});n(("pause,resume,mute,unmute,stop,toggle,seek,getStatus,getVolume,setVolume,getTime,isPaused,isPlaying,startBuffering,stopBuffering,isFullscreen,toggleFullscreen,reset,close,setPlaylist,addClip,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled").split(","),function(){var I=this;x[I]=function(K,J){if(!x.isLoaded()){return x}var L=null;if(K!==undefined&&J!==undefined){L=w["fp_"+I](K,J)}else{L=(K===undefined)?w["fp_"+I]():w["fp_"+I](K)}return L==="undefined"||L===undefined?x:L}});x._fireEvent=function(R){if(typeof R=="string"){R=[R]}var S=R[0],P=R[1],N=R[2],M=R[3],L=0;if(u.debug){h(R)}if(!x.isLoaded()&&S=="onLoad"&&P=="player"){w=w||c(s);p=x._swfHeight();n(G,function(){this._fireEvent("onLoad")});n(z,function(T,U){U._fireEvent("onUpdate")});t._fireEvent("onLoad")}if(S=="onLoad"&&P!="player"){return}if(S=="onError"){if(typeof P=="string"||(typeof P=="number"&&typeof N=="number")){P=N;N=M}}if(S=="onContextMenu"){n(u.contextMenu[P],function(T,U){U.call(x)});return}if(S=="onPluginEvent"||S=="onBeforePluginEvent"){var I=P.name||P;var J=z[I];if(J){J._fireEvent("onUpdate",P);return J._fireEvent(N,R.slice(3))}return}if(S=="onPlaylistReplace"){G=[];var O=0;n(P,function(){G.push(new i(this,O++,x))})}if(S=="onClipAdd"){if(P.isInStream){return}P=new i(P,N,x);G.splice(N,0,P);for(L=N+1;L<G.length;L++){G[L].index++}}var Q=true;if(typeof P=="number"&&P<G.length){D=P;var K=G[P];if(K){Q=K._fireEvent(S,N,M)}if(!K||Q!==false){Q=t._fireEvent(S,N,M,K)}}n(y[S],function(){Q=this.call(x,P,N);if(this.cached){y[S].splice(L,1)}if(Q===false){return false}L++});return Q};function C(){if($f(r)){$f(r).getParent().innerHTML="";q=$f(r).getIndex();a[q]=x}else{a.push(x);q=a.length-1}B=parseInt(r.style.height,10)||r.clientHeight;F=r.id||"fp"+f();s=H.id||F+"_api";H.id=s;v=r.innerHTML;if(typeof u=="string"){u={clip:{url:u}}}u.playerId=F;u.clip=u.clip||{};if(r.getAttribute("href",2)&&!u.clip.url){u.clip.url=r.getAttribute("href",2)}if(u.clip.url){u.clip.url=e(u.clip.url)}t=new i(u.clip,-1,x);u.playlist=u.playlist||[u.clip];var J=0;n(u.playlist,function(){var M=this;if(typeof M=="object"&&M.length){M={url:""+M}}if(M.url){M.url=e(M.url)}n(u.clip,function(N,O){if(O!==undefined&&M[N]===undefined&&typeof O!="function"){M[N]=O}});u.playlist[J]=M;M=new i(M,J,x);G.push(M);J++});n(u,function(M,N){if(typeof N=="function"){if(t[M]){t[M](N)}else{k(y,M,N)}delete u[M]}});n(u.plugins,function(M,N){if(N){z[M]=new m(M,N,x)}});if(!u.plugins||u.plugins.controls===undefined){z.controls=new m("controls",null,x)}z.canvas=new m("canvas",null,x);v=r.innerHTML;function L(M){if(/iPad|iPhone|iPod/i.test(navigator.userAgent)&&!/.flv$/i.test(G[0].url)&&!K()){return true}if(!x.isLoaded()&&x._fireEvent("onBeforeClick")!==false){x.load()}return g(M)}function K(){return x.hasiPadSupport&&x.hasiPadSupport()}function I(){if(v.replace(/\s/g,"")!==""){if(r.addEventListener){r.addEventListener("click",L,false)}else{if(r.attachEvent){r.attachEvent("onclick",L)}}}else{if(r.addEventListener&&!K()){r.addEventListener("click",g,false)}x.load()}}setTimeout(I,0)}if(typeof r=="string"){var A=c(r);if(!A){throw"Flowplayer cannot access element: "+r}r=A;C()}else{C()}}var a=[];function d(p){this.length=p.length;this.each=function(r){n(p,r)};this.size=function(){return p.length};var q=this;for(name in b.prototype){q[name]=function(){var r=arguments;q.each(function(){this[name].apply(this,r)})}}}window.flowplayer=window.$f=function(){var q=null;var p=arguments[0];if(!arguments.length){n(a,function(){if(this.isLoaded()){q=this;return false}});return q||a[0]}if(arguments.length==1){if(typeof p=="number"){return a[p]}else{if(p=="*"){return new d(a)}n(a,function(){if(this.id()==p.id||this.id()==p||this.getParent()==p){q=this;return false}});return q}}if(arguments.length>1){var u=arguments[1],r=(arguments.length==3)?arguments[2]:{};if(typeof u=="string"){u={src:u}}u=j({bgcolor:"#000000",version:[10,1],expressInstall:"http://releases.flowplayer.org/swf/expressinstall.swf",cachebusting:false},u);if(typeof p=="string"){if(p.indexOf(".")!=-1){var t=[];n(o(p),function(){t.push(new b(this,l(u),l(r)))});return new d(t)}else{var s=c(p);return new b(s!==null?s:l(p),l(u),l(r))}}else{if(p){return new b(p,l(u),l(r))}}}return null};j(window.$f,{fireEvent:function(){var q=[].slice.call(arguments);var r=$f(q[0]);return r?r._fireEvent(q.slice(1)):null},addPlugin:function(p,q){b.prototype[p]=q;return $f},each:n,extend:j});if(typeof jQuery=="function"){jQuery.fn.flowplayer=function(r,q){if(!arguments.length||typeof arguments[0]=="number"){var p=[];this.each(function(){var s=$f(this);if(s){p.push(s)}});return arguments.length?p[arguments[0]]:new d(p)}return this.each(function(){$f(this,l(r),q?l(q):{})})}}}();!function(){var h=document.all,j="http://get.adobe.com/flashplayer",c=typeof jQuery=="function",e=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,b={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:false,cachebusting:false};if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}})}function i(m,l){if(l){for(var f in l){if(l.hasOwnProperty(f)){m[f]=l[f]}}}return m}function a(f,n){var m=[];for(var l in f){if(f.hasOwnProperty(l)){m[l]=n(f[l])}}return m}window.flashembed=function(f,m,l){if(typeof f=="string"){f=document.getElementById(f.replace("#",""))}if(!f){return}if(typeof m=="string"){m={src:m}}return new d(f,i(i({},b),m),l)};var g=i(window.flashembed,{conf:b,getVersion:function(){var m,f,o;try{o=navigator.plugins["Shockwave Flash"];if(o[0].enabledPlugin!=null){f=o.description.slice(16)}}catch(p){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");f=m&&m.GetVariable("$version")}catch(n){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");f=m&&m.GetVariable("$version")}catch(l){}}}f=e.exec(f);return f?[1*f[1],1*f[(f[1]*1>9?2:3)]*1]:[0,0]},asString:function(l){if(l===null||l===undefined){return null}var f=typeof l;if(f=="object"&&l.push){f="array"}switch(f){case"string":l=l.replace(new RegExp('(["\\\\])',"g"),"\\$1");l=l.replace(/^\s?(\d+\.?\d*)%/,"$1pct");return'"'+l+'"';case"array":return"["+a(l,function(o){return g.asString(o)}).join(",")+"]";case"function":return'"function()"';case"object":var m=[];for(var n in l){if(l.hasOwnProperty(n)){m.push('"'+n+'":'+g.asString(l[n]))}}return"{"+m.join(",")+"}"}return String(l).replace(/\s/g," ").replace(/\'/g,'"')},getHTML:function(o,l){o=i({},o);var n='<object width="'+o.width+'" height="'+o.height+'" id="'+o.id+'" name="'+o.id+'"';if(o.cachebusting){o.src+=((o.src.indexOf("?")!=-1?"&":"?")+Math.random())}if(o.w3c||!h){n+=' data="'+o.src+'" type="application/x-shockwave-flash"'}else{n+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'}n+=">";if(o.w3c||h){n+='<param name="movie" value="'+o.src+'" />'}o.width=o.height=o.id=o.w3c=o.src=null;o.onFail=o.version=o.expressInstall=null;for(var m in o){if(o[m]){n+='<param name="'+m+'" value="'+o[m]+'" />'}}var p="";if(l){for(var f in l){if(l[f]){var q=l[f];p+=f+"="+(/function|object/.test(typeof q)?g.asString(q):q)+"&"}}p=p.slice(0,-1);n+='<param name="flashvars" value=\''+p+"' />"}n+="</object>";return n},isSupported:function(f){return k[0]>f[0]||k[0]==f[0]&&k[1]>=f[1]}});var k=g.getVersion();function d(f,n,m){if(g.isSupported(n.version)){f.innerHTML=g.getHTML(n,m)}else{if(n.expressInstall&&g.isSupported([6,65])){f.innerHTML=g.getHTML(i(n,{src:n.expressInstall}),{MMredirectURL:encodeURIComponent(location.href),MMplayerType:"PlugIn",MMdoctitle:document.title})}else{if(!f.innerHTML.replace(/\s/g,"")){f.innerHTML="<h2>Flash version "+n.version+" or greater is required</h2><h3>"+(k[0]>0?"Your version is "+k:"You have no flash plugin installed")+"</h3>"+(f.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+j+"'>here</a></p>");if(f.tagName=="A"||f.tagName=="DIV"){f.onclick=function(){location.href=j}}}if(n.onFail){var l=n.onFail.call(this);if(typeof l=="string"){f.innerHTML=l}}}}if(h){window[n.id]=document.getElementById(n.id)}i(this,{getRoot:function(){return f},getOptions:function(){return n},getConf:function(){return m},getApi:function(){return f.firstChild}})}if(c){jQuery.tools=jQuery.tools||{version:"@VERSION"};jQuery.tools.flashembed={conf:b};jQuery.fn.flashembed=function(l,f){return this.each(function(){$(this).data("flashembed",flashembed(this,l,f))})}}}();

//Flowplayer iOS Plugin
$f.addPlugin("ipad",function(y){var S=-1;var z=0;var A=1;var P=2;var E=3;var L=4;var j=5;var i=this;var U=1;var T=false;var I=false;var v=false;var s=0;var R=[];var l;var t=null;var d=0;var f={accelerated:false,autoBuffering:false,autoPlay:true,baseUrl:null,bufferLength:3,connectionProvider:null,cuepointMultiplier:1000,cuepoints:[],controls:{},duration:0,extension:"",fadeInSpeed:1000,fadeOutSpeed:1000,image:false,linkUrl:null,linkWindow:"_self",live:false,metaData:{},originalUrl:null,position:0,playlist:[],provider:"http",scaling:"scale",seekableOnBegin:false,start:0,url:null,urlResolvers:[]};var x=S;var r=S;var u=/iPad|iPhone|iPod/i.test(navigator.userAgent);var c=null;function n(Y,X,V){if(X){for(key in X){if(key){if(X[key]&&typeof X[key]=="function"&&!V){continue}if(X[key]&&typeof X[key]=="object"&&X[key].length===undefined){var W={};n(W,X[key]);Y[key]=W}else{Y[key]=X[key]}}}}return Y}var B={simulateiDevice:false,controlsSizeRatio:1.5,controls:true,debug:false,validExtensions:"mov|m4v|mp4|avi|mp3|m4a|aac|m3u8|m3u|pls",posterExtensions:"png|jpg"};n(B,y);var b=B.validExtensions?new RegExp("^.("+B.validExtensions+")$","i"):null;var e=new RegExp("^.("+B.posterExtensions+")$","i");function h(){if(B.debug){if(u){var V=[].splice.call(arguments,0).join(", ");console.log.apply(console,[V])}else{console.log.apply(console,arguments)}}}function m(V){switch(V){case -1:return"UNLOADED";case 0:return"LOADED";case 1:return"UNSTARTED";case 2:return"BUFFERING";case 3:return"PLAYING";case 4:return"PAUSED";case 5:return"ENDED"}return"UNKOWN"}function J(V){var W=$f.fireEvent(i.id(),"onBefore"+V,s);return W!==false}function O(V){V.stopPropagation();V.preventDefault();return false}function M(W,V){if(x==S&&!V){return}r=x;x=W;D();if(W==E){p()}h(m(W))}function C(){c.fp_stop();T=false;I=false;v=false;M(A);M(A)}var g=null;function p(){if(g){return}console.log("starting tracker");g=setInterval(G,100);G()}function D(){clearInterval(g);g=null}function G(){var W=Math.floor(c.fp_getTime()*10)*100;var X=Math.floor(c.duration*10)*100;var Y=(new Date()).time;function V(ab,Z){ab=ab>=0?ab:X-Math.abs(ab);for(var aa=0;aa<Z.length;aa++){if(Z[aa].lastTimeFired>Y){Z[aa].lastTimeFired=-1}else{if(Z[aa].lastTimeFired+500>Y){continue}else{if(ab==W||(W-500<ab&&W>ab)){Z[aa].lastTimeFired=Y;$f.fireEvent(i.id(),"onCuepoint",s,Z[aa].fnId,Z[aa].parameters)}}}}}$f.each(i.getCommonClip().cuepoints,V);$f.each(R[s].cuepoints,V)}function H(){C();v=true;c.fp_seek(0)}function N(V){}function q(){console.log(c);function V(X){var W={};n(W,f);n(W,i.getCommonClip());n(W,X);if(W.ipadUrl){url=decodeURIComponent(W.ipadUrl)}else{if(W.url){url=W.url}}if(url&&url.indexOf("://")==-1&&W.ipadBaseUrl){url=W.ipadBaseUrl+"/"+url}else{if(url&&url.indexOf("://")==-1&&W.baseUrl){url=W.baseUrl+"/"+url}}W.originalUrl=W.url;W.completeUrl=url;W.extension=W.completeUrl.substr(W.completeUrl.lastIndexOf("."));var Y=W.extension.indexOf("?");if(Y>-1){W.extension=W.extension.substr(0,Y)}W.type="video";delete W.index;h("fixed clip",W);return W}c.fp_play=function(Z,X,ab,ac){var W=null;var aa=true;var Y=true;h("Calling play() "+Z,Z);if(X){h("ERROR: inStream clips not yet supported");return}if(Z!==undefined){if(typeof Z=="number"){if(s>=R.length){return}s=Z;Z=R[s]}else{if(typeof Z=="string"){Z={url:Z}}c.fp_setPlaylist(Z.length!==undefined?Z:[Z])}if(s==0&&R.length>1&&e.test(R[s].extension)){var ac=R[s].url;console.log("Poster image available with url "+ac);++s;console.log("Not last clip in the playlist, moving to next one");c.fp_play(s,false,true,ac);return}if(b&&!b.test(R[s].extension)){return}Z=R[s];W=Z.completeUrl;if(Z.autoBuffering!==undefined&&Z.autoBuffering===false){aa=false}if(Z.autoPlay===undefined||Z.autoPlay===true||ab===true){aa=true;Y=true}else{Y=false}}else{h("clip was not given, simply calling video.play, if not already buffering");if(x!=P){c.play()}return}h("about to play "+W,aa,Y);C();if(W){h("Changing SRC attribute"+W);c.setAttribute("src",W)}if(aa){if(!J("Begin")){return false}if(ac){Y=Z.autoPlay;c.setAttribute("poster",ac);c.setAttribute("preload","none")}$f.fireEvent(i.id(),"onBegin",s);h("calling video.load()");c.load()}if(Y){h("calling video.play()");c.play()}};c.fp_pause=function(){h("pause called");if(!J("Pause")){return false}c.pause()};c.fp_resume=function(){h("resume called");if(!J("Resume")){return false}c.play()};c.fp_stop=function(){h("stop called");if(!J("Stop")){return false}I=true;c.pause();try{c.currentTime=0}catch(W){}};c.fp_seek=function(W){h("seek called "+W);if(!J("Seek")){return false}var aa=0;var W=W+"";if(W.charAt(W.length-1)=="%"){var X=parseInt(W.substr(0,W.length-1))/100;var Z=c.duration;aa=Z*X}else{aa=W}try{c.currentTime=aa}catch(Y){h("Wrong seek time")}};c.fp_getTime=function(){return c.currentTime};c.fp_mute=function(){h("mute called");if(!J("Mute")){return false}U=c.volume;c.volume=0};c.fp_unmute=function(){if(!J("Unmute")){return false}c.volume=U};c.fp_getVolume=function(){return c.volume*100};c.fp_setVolume=function(W){if(!J("Volume")){return false}c.volume=W/100};c.fp_toggle=function(){h("toggle called");if(i.getState()==j){H();return}if(c.paused){c.fp_play()}else{c.fp_pause()}};c.fp_isPaused=function(){return c.paused};c.fp_isPlaying=function(){return !c.paused};c.fp_getPlugin=function(X){if(X=="canvas"||X=="controls"){var W=i.getConfig();return W.plugins&&W.plugins[X]?W.plugins[X]:null}h("ERROR: no support for "+X+" plugin on iDevices");return null};c.fp_close=function(){M(S);c.parentNode.removeChild(c);c=null};c.fp_getStatus=function(){var X=0;var Y=0;try{X=c.buffered.start();Y=c.buffered.end()}catch(W){}return{bufferStart:X,bufferEnd:Y,state:x,time:c.fp_getTime(),muted:c.muted,volume:c.fp_getVolume()}};c.fp_getState=function(){return x};c.fp_startBuffering=function(){if(x==A){c.load()}};c.fp_setPlaylist=function(X){h("Setting playlist");s=0;for(var W=0;W<X.length;W++){X[W]=V(X[W])}R=X;$f.fireEvent(i.id(),"onPlaylistReplace",X)};c.fp_addClip=function(X,W){X=V(X);R.splice(W,0,X);$f.fireEvent(i.id(),"onClipAdd",X,W)};c.fp_updateClip=function(X,W){n(R[W],X);return R[W]};c.fp_getVersion=function(){return"3.2.3"};c.fp_isFullscreen=function(){var W=c.webkitDisplayingFullscreen;if(W!==undefined){return W}return false};c.fp_toggleFullscreen=function(){if(c.fp_isFullscreen()){c.webkitExitFullscreen()}else{c.webkitEnterFullscreen()}};c.fp_addCuepoints=function(Z,X,W){var ab=X==-1?i.getCommonClip():R[X];ab.cuepoints=ab.cuepoints||{};Z=Z instanceof Array?Z:[Z];for(var Y=0;Y<Z.length;Y++){var ac=typeof Z[Y]=="object"?(Z[Y]["time"]||null):Z[Y];if(ac==null){continue}ac=Math.floor(ac/100)*100;var aa=ac;if(typeof Z[Y]=="object"){aa=n({},Z[Y],false);if(aa.time===undefined){delete aa.time}if(aa.parameters!==undefined){n(aa,aa.parameters,false);delete aa.parameters}}ab.cuepoints[ac]=ab.cuepoints[ac]||[];ab.cuepoints[ac].push({fnId:W,lastTimeFired:-1,parameters:aa})}};$f.each(("toggleFullscreen,stopBuffering,reset,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled,css,animate,showPlugin,hidePlugin,togglePlugin,fadeTo,invoke,loadPlugin").split(","),function(){var W=this;c["fp_"+W]=function(){h("ERROR: unsupported API on iDevices "+W);return false}})}function K(){var ai=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","volumechange","waiting"];var aa=function(ak){h("Got event "+ak.type,ak)};for(var ac=0;ac<ai.length;ac++){c.addEventListener(ai[ac],aa,false)}var X=function(ak){h("got onBufferEmpty event "+ak.type);M(P);$f.fireEvent(i.id(),"onBufferEmpty",s)};c.addEventListener("emptied",X,false);c.addEventListener("waiting",X,false);var Z=function(ak){if(r==A||r==P){}else{h("Restoring old state "+m(r));M(r)}$f.fireEvent(i.id(),"onBufferFull",s)};c.addEventListener("canplay",Z,false);c.addEventListener("canplaythrough",Z,false);var Y=function(al){var ak;d=R[s].start;if(R[s].duration>0){ak=R[s].duration;t=ak+d}else{ak=c.duration;t=null}c.fp_updateClip({duration:ak,metaData:{duration:c.duration}},s);R[s].duration=c.duration;R[s].metaData={duration:c.duration};$f.fireEvent(i.id(),"onMetaData",s,R[s])};c.addEventListener("loadedmetadata",Y,false);c.addEventListener("durationchange",Y,false);var W=function(ak){if(t&&c.currentTime>t){c.fp_seek(d);C();return O(ak)}};c.addEventListener("timeupdate",W,false);var ah=function(ak){if(x==L){if(!J("Resume")){h("Resume disallowed, pausing");c.fp_pause();return O(ak)}$f.fireEvent(i.id(),"onResume",s)}M(E);if(!T){T=true;$f.fireEvent(i.id(),"onStart",s)}};c.addEventListener("playing",ah,false);var V=function(ak){F()};c.addEventListener("play",V,false);var ae=function(ak){if(!J("Finish")){if(R.length==1){h("Active playlist only has one clip, onBeforeFinish returned false. Replaying");H()}else{if(s!=(R.length-1)){h("Not the last clip in the playlist, but onBeforeFinish returned false. Returning to the beginning of current clip");c.fp_seek(0)}else{h("Last clip in playlist, but onBeforeFinish returned false, start again from the beginning");c.fp_play(0)}}return O(ak)}M(j);$f.fireEvent(i.id(),"onFinish",s);if(R.length>1&&s<(R.length-1)){h("Not last clip in the playlist, moving to next one");c.fp_play(++s,false,true)}};c.addEventListener("ended",ae,false);var ad=function(ak){M(z,true);$f.fireEvent(i.id(),"onError",s,201);if(B.onFail&&B.onFail instanceof Function){B.onFail.apply(i,[])}};c.addEventListener("error",ad,false);var ag=function(ak){h("got pause event from player"+i.id());if(I){return}if(x==P&&r==A){h("forcing play");setTimeout(function(){c.play()},0);return}if(!J("Pause")){c.fp_resume();return O(ak)}Q();M(L);$f.fireEvent(i.id(),"onPause",s)};c.addEventListener("pause",ag,false);var aj=function(ak){$f.fireEvent(i.id(),"onBeforeSeek",s)};c.addEventListener("seeking",aj,false);var ab=function(ak){if(I){I=false;$f.fireEvent(i.id(),"onStop",s)}else{$f.fireEvent(i.id(),"onSeek",s)}h("seek done, currentState",m(x));if(v){v=false;c.fp_play()}else{if(x!=E){c.fp_pause()}}};c.addEventListener("seeked",ab,false);var af=function(ak){$f.fireEvent(i.id(),"onVolume",c.fp_getVolume())};c.addEventListener("volumechange",af,false)}function F(){l=setInterval(function(){if(c.fp_getTime()>=c.duration-1){$f.fireEvent(i.id(),"onLastSecond",s);Q()}},100)}function Q(){clearInterval(l)}function o(){c.fp_play(0)}function w(){}if(u||B.simulateiDevice){if(!window.flashembed.__replaced){var k=window.flashembed;window.flashembed=function(X,ac,Y){if(typeof X=="string"){X=document.getElementById(X.replace("#",""))}if(!X){return}var ab=window.getComputedStyle(X,null);var aa=parseInt(ab.width);var V=parseInt(ab.height);while(X.firstChild){X.removeChild(X.firstChild)}var W=document.createElement("div");var Z=document.createElement("video");W.appendChild(Z);X.appendChild(W);W.style.height=V+"px";W.style.width=aa+"px";W.style.display="block";W.style.position="relative";W.style.background="-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.7)))";W.style.cursor="default";W.style.webkitUserDrag="none";Z.style.height="100%";Z.style.width="100%";Z.style.display="block";Z.id=ac.id;Z.name=ac.id;Z.style.cursor="pointer";Z.style.webkitUserDrag="none";Z.type="video/mp4";Z.playerConfig=Y.config;$f.fireEvent(Y.config.playerId,"onLoad","player")};flashembed.getVersion=k.getVersion;flashembed.asString=k.asString;flashembed.isSupported=function(){return true};flashembed.__replaced=true}var a=i._fireEvent;i._fireEvent=function(V){if(V[0]=="onLoad"&&V[1]=="player"){c=i.getParent().querySelector("video");if(B.controls){c.controls="controls"}q();K();M(z,true);c.fp_setPlaylist(c.playerConfig.playlist);o();a.apply(i,[V])}var W=x!=S;if(x==S&&typeof V=="string"){W=true}if(W){return a.apply(i,[V])}};i._swfHeight=function(){return parseInt(c.style.height)};i.hasiPadSupport=function(){return true}}return i});

//API Mediastream
(function(){var b=function(){function b(c,a){var b,k;null==a&&(a={});this._isPlaying=this.playerDestroyed=this._isReady=!1;var g=[];document.getElementById(c)||g.push("ID must be a valid DOM Element");/^[0-9a-fA-F]{24}$/.test(a.id)||this._getYouTubeID(a.id)||g.push("Options.id must be a valid Platform Video ID or a YouTube Video ID");"media"!==(b=a.type)&&"live"!==b&&"dvr"!==b&&g.push('Options.type must be "media", "live" or "dvr"');isNaN(parseInt(a.width))&&g.push("Options.width must be a positive integer");
isNaN(parseInt(a.height))&&g.push("Options.height must be a positive integer");if("http"===(k=a.protocol)||"https"===k)this._protocol=a.protocol;0<g.length?this._error(g):this._init(c,a)}b.prototype._init=function(b,a){var c,k,g,m,n,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F;this._callbacks={};this._bindEvent(window,"message",function(a){return function(c){if(!a.playerDestroyed&&(null!=c?c.source:void 0)===a._IFrameContent)return a._receiveMessage(arguments)}}(this));this._events={};var e="onAdsAdBreakReady onAdsAdMetadata onAdsAllAdsCompleted onAdsClick onAdsComplete onAdsContentPauseRequested onAdsContentResumeRequested onAdsDurationChange onAdsFirstQuartile onAdsImpression onAdsLinearChanged onAdsLoaded onAdsLog onAdsMidpoint onAdsPaused onAdsResumed onAdsSkippableStateChanged onAdsSkipped onAdsStarted onAdsThirdQuartile onAdsUserClose onAdsVolumeChanged onAdsVolumeMuted".split(" ");
var l=0;for(k=e.length;l<k;l++){var h=e[l];"function"===typeof(null!=(g=a.events)?g[h]:void 0)&&(this._events[h]=a.events[h])}"function"===typeof(null!=(m=a.events)?m.onPlayerMounted:void 0)&&(this._events.onPlayerMounted=a.events.onPlayerMounted);"function"===typeof(null!=(w=a.events)?w.onPlayerReady:void 0)&&(this._events.onPlayerReady=a.events.onPlayerReady);"function"===typeof(null!=(z=a.events)?z.onVideoEnd:void 0)&&(this._events.onVideoEnd=a.events.onVideoEnd);"function"===typeof(null!=(A=a.events)?
A.onVideoStop:void 0)&&(this._events.onVideoStop=a.events.onVideoStop);"function"===typeof(null!=(B=a.events)?B.onVideoError:void 0)&&(this._events.onVideoError=a.events.onVideoError);"function"===typeof(null!=(C=a.events)?C.onVolumeChange:void 0)&&(this._events.onVolumeChange=a.events.onVolumeChange);"function"===typeof(null!=(D=a.events)?D.onPlay:void 0)&&(this._events.onPlay=a.events.onPlay);"function"===typeof(null!=(E=a.events)?E.onSeeked:void 0)&&(this._events.onSeeked=a.events.onSeeked);"function"===
typeof(null!=(F=a.events)?F.onReplay:void 0)&&(this._events.onReplay=a.events.onReplay);"function"===typeof(null!=(n=a.events)?n.onProgramDateTime:void 0)&&(this._events.onProgramDateTime=a.events.onProgramDateTime);"function"===typeof(null!=(p=a.events)?p.onTimeUpdate:void 0)&&(this._events.onTimeUpdate=a.events.onTimeUpdate);"function"===typeof(null!=(q=a.events)?q.onFullscreenChange:void 0)&&(this._events.onFullscreenChange=a.events.onFullscreenChange);"function"===typeof(null!=(r=a.events)?r.onBuffering:
void 0)&&(this._events.onBuffering=a.events.onBuffering);"function"===typeof(null!=(t=a.events)?t.onFragChanged:void 0)&&(this._events.onFragChanged=a.events.onFragChanged);this._IFrameURLOptions=[];this._IFrameURLOptions.push("jsapi\x3dtrue");null!=a.loop&&this._IFrameURLOptions.push("loop\x3d"+encodeURIComponent(a.loop));null!=a.pause_ad_on_click&&this._IFrameURLOptions.push("pause_ad_on_click\x3d"+encodeURIComponent(a.pause_ad_on_click));null!=a.skip_ad_on_touch&&this._IFrameURLOptions.push("skip_ad_on_touch\x3d"+
encodeURIComponent(a.skip_ad_on_touch));null!=a.pause_on_screen_click&&this._IFrameURLOptions.push("pause_on_screen_click\x3d"+encodeURIComponent(a.pause_on_screen_click));null!=a.autoplay&&this._IFrameURLOptions.push("autoplay\x3d"+encodeURIComponent(a.autoplay));null!=a.controls&&this._IFrameURLOptions.push("controls\x3d"+encodeURIComponent(a.controls));null!=a.volume&&this._IFrameURLOptions.push("volume\x3d"+encodeURIComponent(a.volume));a.player&&this._IFrameURLOptions.push("player\x3d"+encodeURIComponent(a.player));
a.skin&&this._IFrameURLOptions.push("skin\x3d"+encodeURIComponent(a.skin));a.ref&&this._IFrameURLOptions.push("ref\x3d"+encodeURIComponent(a.ref));null!=a.startTime&&this._IFrameURLOptions.push("starttime\x3d"+encodeURIComponent(a.startTime));null!=a.endTime&&this._IFrameURLOptions.push("endtime\x3d"+encodeURIComponent(a.endTime));null!=a.title&&this._IFrameURLOptions.push("title\x3d"+encodeURIComponent(a.title));null!=a.show_title&&this._IFrameURLOptions.push("show_title\x3d"+encodeURIComponent(a.show_title));
null!=a.show_timeline_time&&this._IFrameURLOptions.push("show_timeline_time\x3d"+encodeURIComponent(a.show_timeline_time));null!=a.access_token&&this._IFrameURLOptions.push("access_token\x3d"+encodeURIComponent(a.access_token));null!=a.admin_token&&this._IFrameURLOptions.push("admin_token\x3d"+encodeURIComponent(a.admin_token));null!=a.source&&this._IFrameURLOptions.push("source\x3d"+encodeURIComponent(a.source));null!=a.customer&&this._IFrameURLOptions.push("c\x3d"+encodeURIComponent(a.customer));
null!=a.analyticsCustom&&this._IFrameURLOptions.push("ac\x3d"+encodeURIComponent(a.analyticsCustom));null!=a.rendition_rule&&this._IFrameURLOptions.push("rendition_rule\x3d"+encodeURIComponent(a.rendition_rule));null!=a.dnt&&this._IFrameURLOptions.push("dnt\x3d"+encodeURIComponent(a.dnt));null!=a.show_previews&&this._IFrameURLOptions.push("show_previews\x3d"+encodeURIComponent(a.show_previews));null!=a.playlistId&&this._IFrameURLOptions.push("playlistId\x3d"+encodeURIComponent(a.playlistId));null!=
a.player_skin&&this._IFrameURLOptions.push("player_skin\x3d"+encodeURIComponent(a.player_skin));null!=a.subtitles&&this._IFrameURLOptions.push("subtitles\x3d"+encodeURIComponent(a.subtitles));null!=a.mse_buffer_length&&this._IFrameURLOptions.push("mse_buffer_length\x3d"+encodeURIComponent(a.mse_buffer_length));null!=a.mse_buffer_size&&this._IFrameURLOptions.push("mse_buffer_size\x3d"+encodeURIComponent(a.mse_buffer_size));null!=a.maxProfile&&this._IFrameURLOptions.push("max_profile\x3d"+encodeURIComponent(a.maxProfile));
null!=a.firstProfile&&this._IFrameURLOptions.push("first_profile\x3d"+encodeURIComponent(a.firstProfile));null!=(null!=(u=a.style)?u.basecolor:void 0)&&this._IFrameURLOptions.push("style[basecolor]\x3d"+encodeURIComponent(a.style.basecolor));null!=(null!=(v=a.style)?v.backgroundcolor:void 0)&&this._IFrameURLOptions.push("style[backgroundcolor]\x3d"+encodeURIComponent(a.style.backgroundcolor));!0===a.mse&&this._IFrameURLOptions.push("mse\x3dtrue");!0===a.rtsp&&this._IFrameURLOptions.push("rtsp\x3dtrue");
!0===a.debug&&this._IFrameURLOptions.push("debug\x3dtrue");!0===a.ima_debug&&this._IFrameURLOptions.push("ima_debug\x3dtrue");!0===a.no_ad&&this._IFrameURLOptions.push("no_ad\x3dtrue");"dvr"===a.type&&this._IFrameURLOptions.push("type\x3ddvr");h=a.style||{};for(c in h)if(e=h[c],"object"!==typeof e)this._IFrameURLOptions.push("style["+c+"]\x3d"+encodeURIComponent(e));else for(f in e)l=e[f],this._IFrameURLOptions.push("style["+c+"]["+f+"]\x3d"+encodeURIComponent(l));var f=a.ads||{};for(c in f)e=f[c],
this._IFrameURLOptions.push("ads["+c+"]\x3d"+encodeURIComponent(e));f=a.custom||{};for(c in f)e=f[c],this._IFrameURLOptions.push("custom."+c+"\x3d"+encodeURIComponent(e));f=(null!=(x=a.youbora)?x.extra:void 0)||{};for(c in f)e=f[c],this._IFrameURLOptions.push("youbora[extra]["+c+"]\x3d"+encodeURIComponent(e));this._IFrameURL=[];this._IFrameURL.push(this.protocol()+"//"+(window.EMBED_HOST||"mdstrm.com")+"/");this._IFrameURL.push("live"===(y=a.type)||"dvr"===y?"live-stream":"embed");this._IFrameURL.push("/");
this._getYouTubeID(a.id)&&this._IFrameURL.push("y/");this._IFrameURL.push(this._getYouTubeID(a.id)||a.id);this._IFrameURL.push("?");this._IFrameURL.push(this._IFrameURLOptions.join("\x26"));this._playerContainer=document.getElementById(b);this._IFrameContainer=document.createElement("IFRAME");a.className&&(this._IFrameContainer["class"]=[].concat.apply([],[a.className]).join(" "));this._IFrameContainer.src=this._IFrameURL.join("");a.width&&(this._IFrameContainer.width=parseInt(a.width));a.height&&
(this._IFrameContainer.height=parseInt(a.height));this._IFrameContainer.frameBorder=0;this._IFrameContainer.setAttribute("allow","autoplay; fullscreen");this._IFrameContainer.setAttribute("allowfullscreen","");this._IFrameContainer.setAttribute("allowscriptaccess","always");this._IFrameContainer.setAttribute("scrolling","no");this._playerContainer.innerHTML="";this._playerContainer.appendChild(this._IFrameContainer);return this._IFrameContent=this._IFrameContainer.contentWindow};b.prototype.protocol=
function(){return this._protocol?this._protocol+":":/^http/i.test(location.protocol)?location.protocol:"https:"};b.prototype._bindEvent=function(c,a,b){if(null!=c)return c.addEventListener?c.addEventListener(a,b,!1):c.attachEvent("on"+a,b)};b.prototype.destroy=function(){this._playerContainer.innerHTML="";return this.playerDestroyed=!0};b.prototype._receiveMessage=function(){var c,a,b,k,g,m,n,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F,e,l,h,f,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ba,ca,da;var d=null!=arguments?
null!=(b=arguments[0])?b[0]:void 0:void 0;switch(null!=d?null!=(k=d.data)?k.eventName:void 0:void 0){case "onPlayerMounted":return this._isReady=!0,null!=(x=this._events)?null!=(h=x.onPlayerMounted)?h.apply(this,[null!=(P=d.data.eventData)?P:{}]):void 0:void 0;case "onPlayerReady":return this._isReady=!0,null!=(Z=this._events)?null!=(aa=Z.onPlayerReady)?aa.apply(this,[null!=(ba=d.data.eventData)?ba:{}]):void 0:void 0;case "onVideoEnd":return this._isPlaying=!1,null!=(ca=this._events)?null!=(da=ca.onVideoEnd)?
da.apply(this,[null!=(g=d.data.eventData)?g:{}]):void 0:void 0;case "onVideoStop":return this._isPlaying=!1,null!=(m=this._events)?null!=(n=m.onVideoStop)?n.apply(this,[null!=(p=d.data.eventData)?p:{}]):void 0:void 0;case "onVideoError":return this._isPlaying=!1,null!=(q=this._events)?null!=(r=q.onVideoError)?r.apply(this,[null!=(t=d.data.eventData)?t:{}]):void 0:void 0;case "onVolumeChange":return null!=(u=this._events)?null!=(v=u.onVolumeChange)?v.apply(this,[null!=(w=d.data.eventData)?w:{}]):void 0:
void 0;case "onPlay":return this._isPlaying=!0,null!=(y=this._events)?null!=(z=y.onPlay)?z.apply(this,[null!=(A=d.data.eventData)?A:{}]):void 0:void 0;case "onSeeked":return null!=(B=this._events)?null!=(C=B.onSeeked)?C.apply(this,[null!=(D=d.data.eventData)?D:{}]):void 0:void 0;case "onReplay":return null!=(E=this._events)?null!=(F=E.onReplay)?F.apply(this,[null!=(e=d.data.eventData)?e:{}]):void 0:void 0;case "onProgramDateTime":return null!=(l=this._events)?null!=(f=l.onProgramDateTime)?f.apply(this,
[null!=(G=d.data.eventData)?G:{}]):void 0:void 0;case "onTimeUpdate":return null!=(H=this._events)?null!=(I=H.onTimeUpdate)?I.apply(this,[null!=(J=d.data.eventData)?J:{}]):void 0:void 0;case "onFullscreenChange":return null!=(K=this._events)?null!=(L=K.onFullscreenChange)?L.apply(this,[null!=(M=d.data.eventData)?M:{}]):void 0:void 0;case "onBuffering":return null!=(N=this._events)?null!=(O=N.onBuffering)?O.apply(this,[null!=(Q=d.data.eventData)?Q:{}]):void 0:void 0;case "onFragChanged":return null!=
(R=this._events)?null!=(S=R.onFragChanged)?S.apply(this,[null!=(T=d.data.eventData)?T:{}]):void 0:void 0;default:return null!=(U=this._events)&&U[null!=(V=d.data)?V.eventName:void 0]?this._events[d.data.eventName].apply(this,[null!=(W=d.data.eventData)?W:{}]):"function"===typeof(c=this._callbacks)[a=null!=d?null!=(X=d.data)?X.eventName:void 0:void 0]?c[a](null!=(Y=d.data.eventData)?Y:null):void 0}};b.prototype._postMessage=function(c){var a;return this._isReady&&!this.playerDestroyed?null!=(a=this._IFrameContent)?
a.postMessage(c,this.protocol()+"//"+(window.EMBED_HOST||"mdstrm.com")):void 0:this._error(["Player is not ready yet, please wait for the onPlayerReady event"])};b.prototype._getMessage=function(c,a){for(var b;null==b||null!=this._callbacks[b];)b=Math.random().toString(32).substr(2);this._callbacks[b]=function(c){return function(){"function"===typeof a&&a.apply(null,arguments);return delete c._callbacks[b]}}(this);return this._postMessage({cb:b,eventName:c.action||c,data:c.data})};b.prototype._getYouTubeID=
function(b){var a;null==b&&(b="");return null!=(a=b.match(/^youtube:(.+)/i))?a[1]:void 0};b.prototype._log=function(b){null==b&&(b=[]);return"undefined"!==typeof console&&null!==console?console.log("[MDSTRM.Player] "+b.join(". ")):void 0};b.prototype._error=function(b){null==b&&(b=[]);return"undefined"!==typeof console&&null!==console?console.error("[MDSTRM.Player] "+b.join(". ")):void 0};b.prototype.isReady=function(){return this._isReady&&!this.playerDestroyed};b.prototype.isPlaying=function(){return this._isPlaying};
b.prototype.requestAds=function(b){return b?(this._postMessage({action:"requestAds",data:b}),!0):!1};b.prototype.seekTo=function(b,a){null==b&&(b=0);null==a&&(a=function(){});return this._getMessage({action:"seekTo",data:b},a)};b.prototype.videoPlay=function(b){null==b&&(b=function(){});return this._getMessage("videoPlay",b)};b.prototype.videoStop=function(b){null==b&&(b=function(){});return this._getMessage("videoStop",b)};b.prototype.getCurrentTime=function(b){return this._getMessage("getCurrentTime",
b)};b.prototype.getVideoMetrics=function(b){return this._getMessage("getVideoMetrics",b)};b.prototype.setVolume=function(b,a){null==a&&(a=function(){});return this._getMessage({action:"setVolume",data:b},a)};b.prototype.setSrc=function(b,a){null==a&&(a=function(){});return this._getMessage({action:"setSrc",data:b},a)};b.prototype.setAdsVolume=function(b,a){null==a&&(a=function(){});return this._getMessage({action:"setAdsVolume",data:b},a)};b.prototype.getDuration=function(b){return this._getMessage("getDuration",
b)};b.prototype.getSnapshot=function(b,a,ea){return this._getMessage({action:"getSnapshot",data:{height:a,width:b}},ea)};b.prototype.playbackLevel=function(b,a){null==a&&(a=function(){});return this._getMessage({action:"playbackLevel",data:b},a)};b.prototype.playbackLevels=function(b){return this._getMessage("playbackLevels",b)};b.prototype.toggleFullScreen=function(b){return this._getMessage("toggleFullScreen",b)};b.prototype.addMarker=function(b,a){null==a&&(a=function(){});return this._getMessage({action:"addMarker",
data:b},a)};return b}();window.MediastreamPlayer=b;b.prototype.isReady=b.prototype.isReady;b.prototype.isPlaying=b.prototype.isPlaying;b.prototype.requestAds=b.prototype.requestAds;b.prototype.seekTo=b.prototype.seekTo;b.prototype.videoPlay=b.prototype.videoPlay;b.prototype.videoStop=b.prototype.videoStop;b.prototype.getCurrentTime=b.prototype.getCurrentTime;b.prototype.getVideoMetrics=b.prototype.getVideoMetrics;b.prototype.setVolume=b.prototype.setVolume;b.prototype.setSrc=b.prototype.setSrc;b.prototype.setAdsVolume=
b.prototype.setAdsVolume;b.prototype.getDuration=b.prototype.getDuration;b.prototype.getSnapshot=b.prototype.getSnapshot;b.prototype.destroy=b.prototype.destroy;b.prototype.playbackLevel=b.prototype.playbackLevel;b.prototype.playbackLevels=b.prototype.playbackLevels;b.prototype.toggleFullScreen=b.prototype.toggleFullScreen;b.prototype.addMarker=b.prototype.addMarker}).call(this);

//API Mediastream
// Eventos Ads: onAdsAdBreakReady onAdsAdMetadata onAdsAllAdsCompleted onAdsClick onAdsComplete onAdsContentPauseRequested onAdsContentResumeRequested onAdsDurationChange onAdsFirstQuartile onAdsImpression
// onAdsLinearChanged onAdsLoaded onAdsLog onAdsMidpoint onAdsPaused onAdsResumed onAdsSkippableStateChanged onAdsSkipped onAdsStarted onAdsThirdQuartile onAdsUserClose onAdsVolumeChanged onAdsVolumeMuted

(function(){var b=function(){function b(c,a){var b,k;null==a&&(a={});this._isPlaying=this.playerDestroyed=this._isReady=!1;var f=[];document.getElementById(c)||f.push("ID must be a valid DOM Element");/^[0-9a-fA-F]{24}$/.test(a.id)||this._getYouTubeID(a.id)||f.push("Options.id must be a valid Platform Video ID or a YouTube Video ID");"media"!==(b=a.type)&&"live"!==b&&"dvr"!==b&&f.push('Options.type must be "media", "live" or "dvr"');isNaN(parseInt(a.width))&&f.push("Options.width must be a positive integer");
isNaN(parseInt(a.height))&&f.push("Options.height must be a positive integer");if("http"===(k=a.protocol)||"https"===k)this._protocol=a.protocol;0<f.length?this._error(f):this._init(c,a)}b.prototype._init=function(c,a){var b,k,f,p,q,r,n,t,u,v,w,x,y,z,A,B,C,D,E,F,l,G,H,I,J,m,K,L,M,N,O,P,Q;this._callbacks={};this._bindEvent(window,"message",function(a){return function(c){if(!a.playerDestroyed&&(null!=c?c.source:void 0)===a._IFrameContent)return a._receiveMessage(c)}}(this));this._events={};var d="onAdsAdBreakReady onAdsAdMetadata onAdsAllAdsCompleted onAdsClick onAdsComplete onAdsContentPauseRequested onAdsContentResumeRequested onAdsDurationChange onAdsFirstQuartile onAdsImpression onAdsLinearChanged onAdsLoaded onAdsLog onAdsMidpoint onAdsPaused onAdsResumed onAdsSkippableStateChanged onAdsSkipped onAdsStarted onAdsThirdQuartile onAdsUserClose onAdsVolumeChanged onAdsVolumeMuted".split(" ");
var h=0;for(k=d.length;h<k;h++){var e=d[h];"function"===typeof(null!=(f=a.events)?f[e]:void 0)&&(this._events[e]=a.events[e])}"function"===typeof(null!=(p=a.events)?p.onPlayerMounted:void 0)&&(this._events.onPlayerMounted=a.events.onPlayerMounted);"function"===typeof(null!=(A=a.events)?A.onPlayerReady:void 0)&&(this._events.onPlayerReady=a.events.onPlayerReady);"function"===typeof(null!=(G=a.events)?G.onVideoEnd:void 0)&&(this._events.onVideoEnd=a.events.onVideoEnd);"function"===typeof(null!=(L=a.events)?
L.onVideoStop:void 0)&&(this._events.onVideoStop=a.events.onVideoStop);"function"===typeof(null!=(M=a.events)?M.onVideoError:void 0)&&(this._events.onVideoError=a.events.onVideoError);"function"===typeof(null!=(N=a.events)?N.onVolumeChange:void 0)&&(this._events.onVolumeChange=a.events.onVolumeChange);"function"===typeof(null!=(O=a.events)?O.onPlay:void 0)&&(this._events.onPlay=a.events.onPlay);"function"===typeof(null!=(P=a.events)?P.onSeeked:void 0)&&(this._events.onSeeked=a.events.onSeeked);"function"===
typeof(null!=(Q=a.events)?Q.onSeeking:void 0)&&(this._events.onSeeking=a.events.onSeeking);"function"===typeof(null!=(q=a.events)?q.onReplay:void 0)&&(this._events.onReplay=a.events.onReplay);"function"===typeof(null!=(r=a.events)?r.onProgramDateTime:void 0)&&(this._events.onProgramDateTime=a.events.onProgramDateTime);"function"===typeof(null!=(n=a.events)?n.onTimeUpdate:void 0)&&(this._events.onTimeUpdate=a.events.onTimeUpdate);"function"===typeof(null!=(t=a.events)?t.onFullscreenChange:void 0)&&
(this._events.onFullscreenChange=a.events.onFullscreenChange);"function"===typeof(null!=(u=a.events)?u.onBuffering:void 0)&&(this._events.onBuffering=a.events.onBuffering);"function"===typeof(null!=(v=a.events)?v.onFragChanged:void 0)&&(this._events.onFragChanged=a.events.onFragChanged);"function"===typeof(null!=(w=a.events)?w.onCastConnected:void 0)&&(this._events.onCastConnected=a.events.onCastConnected);"function"===typeof(null!=(x=a.events)?x.onCastDisconnected:void 0)&&(this._events.onCastDisconnected=
a.events.onCastDisconnected);"function"===typeof(null!=(y=a.events)?y.onCastRemoteDevicePaused:void 0)&&(this._events.onCastRemoteDevicePaused=a.events.onCastRemoteDevicePaused);"function"===typeof(null!=(z=a.events)?z.oncastRemoteDevicePlaying:void 0)&&(this._events.oncastRemoteDevicePlaying=a.events.oncastRemoteDevicePlaying);"function"===typeof(null!=(B=a.events)?B.onPlaylistStatusChange:void 0)&&(this._events.onPlaylistStatusChange=a.events.onPlaylistStatusChange);"function"===typeof(null!=(C=
a.events)?C.onChangeLocation:void 0)&&(this._events.onChangeLocation=a.events.onChangeLocation);"function"===typeof(null!=(D=a.events)?D.custom:void 0)&&(this._events.custom=a.events.custom);this._IFrameURLOptions=[];this._IFrameURLOptions.push("jsapi\x3dtrue");null!=a.loop&&this._IFrameURLOptions.push("loop\x3d"+encodeURIComponent(a.loop));null!=a.pause_ad_on_click&&this._IFrameURLOptions.push("pause_ad_on_click\x3d"+encodeURIComponent(a.pause_ad_on_click));null!=a.skip_ad_on_touch&&this._IFrameURLOptions.push("skip_ad_on_touch\x3d"+
encodeURIComponent(a.skip_ad_on_touch));null!=a.show_controls_on_ad&&this._IFrameURLOptions.push("show_controls_on_ad\x3d"+encodeURIComponent(a.show_controls_on_ad));null!=a.pause_on_screen_click&&this._IFrameURLOptions.push("pause_on_screen_click\x3d"+encodeURIComponent(a.pause_on_screen_click));null!=a.autoplay&&this._IFrameURLOptions.push("autoplay\x3d"+encodeURIComponent(a.autoplay));null!=a.pip&&this._IFrameURLOptions.push("pip\x3d"+encodeURIComponent(a.pip));null!=a.controls&&this._IFrameURLOptions.push("controls\x3d"+
encodeURIComponent(a.controls));null!=a.useMobileNativeControls&&this._IFrameURLOptions.push("useMobileNativeControls\x3d"+encodeURIComponent(a.useMobileNativeControls));null!=a.volume&&this._IFrameURLOptions.push("volume\x3d"+encodeURIComponent(a.volume));a.player&&this._IFrameURLOptions.push("player\x3d"+encodeURIComponent(a.player));a.skin&&this._IFrameURLOptions.push("skin\x3d"+encodeURIComponent(a.skin));a.ref&&this._IFrameURLOptions.push("ref\x3d"+encodeURIComponent(a.ref));null!=a.startTime&&
this._IFrameURLOptions.push("starttime\x3d"+encodeURIComponent(a.startTime));null!=a.endTime&&this._IFrameURLOptions.push("endtime\x3d"+encodeURIComponent(a.endTime));null!=a.title&&this._IFrameURLOptions.push("title\x3d"+encodeURIComponent(a.title));null!=a.show_title&&this._IFrameURLOptions.push("show_title\x3d"+encodeURIComponent(a.show_title));null!=a.show_timeline_time&&this._IFrameURLOptions.push("show_timeline_time\x3d"+encodeURIComponent(a.show_timeline_time));null!=a.access_token&&this._IFrameURLOptions.push("access_token\x3d"+
encodeURIComponent(a.access_token));null!=a.admin_token&&this._IFrameURLOptions.push("admin_token\x3d"+encodeURIComponent(a.admin_token));null!=a.acc_token&&this._IFrameURLOptions.push("acc_token\x3d"+encodeURIComponent(a.acc_token));null!=a.source&&this._IFrameURLOptions.push("source\x3d"+encodeURIComponent(a.source));null!=a.poster&&this._IFrameURLOptions.push("poster\x3d"+encodeURIComponent(a.poster));null!=a.customer&&this._IFrameURLOptions.push("c\x3d"+encodeURIComponent(a.customer));null!=a.distributor&&
this._IFrameURLOptions.push("ds\x3d"+encodeURIComponent(a.distributor));null!=a.analyticsCustom&&this._IFrameURLOptions.push("ac\x3d"+encodeURIComponent(a.analyticsCustom));null!=a.rendition_rule&&this._IFrameURLOptions.push("rendition_rule\x3d"+encodeURIComponent(a.rendition_rule));null!=a.dnt&&this._IFrameURLOptions.push("dnt\x3d"+encodeURIComponent(a.dnt));null!=a.show_previews&&this._IFrameURLOptions.push("show_previews\x3d"+encodeURIComponent(a.show_previews));null!=a.playlistId&&this._IFrameURLOptions.push("playlistId\x3d"+
encodeURIComponent(a.playlistId));null!=a.player_skin&&this._IFrameURLOptions.push("player_skin\x3d"+encodeURIComponent(a.player_skin));null!=a.subtitles&&this._IFrameURLOptions.push("subtitles\x3d"+encodeURIComponent(a.subtitles));null!=a.mse_buffer_length&&this._IFrameURLOptions.push("mse_buffer_length\x3d"+encodeURIComponent(a.mse_buffer_length));null!=a.mse_buffer_size&&this._IFrameURLOptions.push("mse_buffer_size\x3d"+encodeURIComponent(a.mse_buffer_size));null!=a.maxProfile&&this._IFrameURLOptions.push("max_profile\x3d"+
encodeURIComponent(a.maxProfile));null!=a.firstProfile&&this._IFrameURLOptions.push("first_profile\x3d"+encodeURIComponent(a.firstProfile));null!=(null!=(E=a.style)?E.basecolor:void 0)&&this._IFrameURLOptions.push("style[basecolor]\x3d"+encodeURIComponent(a.style.basecolor));null!=(null!=(F=a.style)?F.backgroundcolor:void 0)&&this._IFrameURLOptions.push("style[backgroundcolor]\x3d"+encodeURIComponent(a.style.backgroundcolor));!0===a.mse&&this._IFrameURLOptions.push("mse\x3dtrue");!0===a.rtsp&&this._IFrameURLOptions.push("rtsp\x3dtrue");
!0===a.debug&&this._IFrameURLOptions.push("debug\x3dtrue");!0===a.ima_debug&&this._IFrameURLOptions.push("ima_debug\x3dtrue");!0===a.no_ad&&this._IFrameURLOptions.push("no_ad\x3dtrue");"dvr"===a.type&&this._IFrameURLOptions.push("type\x3ddvr");null!=a.start&&this._IFrameURLOptions.push("start\x3d"+(new Date(a.start)).toISOString());null!=a.end&&this._IFrameURLOptions.push("end\x3d"+(new Date(a.end)).toISOString());h=a.style||{};for(b in h)if(d=h[b],"object"!==typeof d)this._IFrameURLOptions.push("style["+
b+"]\x3d"+encodeURIComponent(d));else for(g in d)e=d[g],this._IFrameURLOptions.push("style["+b+"]["+g+"]\x3d"+encodeURIComponent(e));e=a.ads||{};for(b in e)d=e[b],this._IFrameURLOptions.push("ads["+b+"]\x3d"+encodeURIComponent(d));e=a.custom||{};for(b in e)d=e[b],this._IFrameURLOptions.push("custom."+b+"\x3d"+encodeURIComponent(d));e=(null!=(l=a.youbora)?l.extra:void 0)||{};for(b in e)d=e[b],this._IFrameURLOptions.push("youbora[extra]["+b+"]\x3d"+encodeURIComponent(d));null!=(null!=(H=a.playlist)?
H.template:void 0)&&this._IFrameURLOptions.push("playlist[template]\x3d"+encodeURIComponent(a.playlist.template));null!=(null!=(I=a.playlist)?I.showControlBarButton:void 0)&&this._IFrameURLOptions.push("playlist[showControlBarButton]\x3d"+encodeURIComponent(a.playlist.showControlBarButton));null!=(null!=(J=a.playlist)?J.autoplay:void 0)&&this._IFrameURLOptions.push("playlist[autoplay]\x3d"+encodeURIComponent(a.playlist.autoplay));l=(null!=(m=a.playlist)?m.items:void 0)||[];for(b in l)for(g in m=(d=
l[b])||{},m)e=m[g],this._IFrameURLOptions.push("playlist[items]["+b+"]["+g+"]\x3d"+encodeURIComponent(e));var g=a.custom_related||[];for(b in g)d=g[b],this._IFrameURLOptions.push("customrelated[]["+b+"]\x3d"+encodeURIComponent(d));this._IFrameURL=[];this._IFrameURL.push(this.protocol()+"//"+(window.EMBED_HOST||"mdstrm.com")+"/");this._IFrameURL.push("live"===(K=a.type)||"dvr"===K?"live-stream":"embed");this._IFrameURL.push("/");this._getYouTubeID(a.id)&&this._IFrameURL.push("y/");this._IFrameURL.push(this._getYouTubeID(a.id)||
a.id);this._IFrameURL.push("?");this._IFrameURL.push(this._IFrameURLOptions.join("\x26"));this._playerContainer=document.getElementById(c);this._IFrameContainer=document.createElement("IFRAME");a.className&&(this._IFrameContainer["class"]=[].concat.apply([],[a.className]).join(" "));this._IFrameContainer.src=this._IFrameURL.join("");a.width&&(this._IFrameContainer.width=parseInt(a.width));a.height&&(this._IFrameContainer.height=parseInt(a.height));this._IFrameContainer.frameBorder=0;this._IFrameContainer.setAttribute("allow",
"autoplay; fullscreen; encrypted-media");this._IFrameContainer.setAttribute("allowfullscreen","");this._IFrameContainer.setAttribute("allowscriptaccess","always");this._IFrameContainer.setAttribute("scrolling","no");this._playerContainer.innerHTML="";this._playerContainer.appendChild(this._IFrameContainer);return this._IFrameContent=this._IFrameContainer.contentWindow};b.prototype.protocol=function(){return this._protocol?this._protocol+":":/^http/i.test(location.protocol)?location.protocol:"https:"};
b.prototype._bindEvent=function(c,a,b){if(null!=c)return c.addEventListener?c.addEventListener(a,b,!1):c.attachEvent("on"+a,b)};b.prototype.destroy=function(){this._playerContainer.innerHTML="";return this.playerDestroyed=!0};b.prototype._receiveMessage=function(c){var a,b,k,f,p,q,r,n,t,u,v,w,x,y,z,A,B,C,D,E,F,l,G,H,I,J,m,K,L,M,N,O,P,Q,d,h,e,g,S,T,U,V,W,X,Y,Z,aa,ba,ca,da,ea,fa,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta;c=null!=c?c.data:void 0;switch(null!=c?c.eventName:void 0){case "onPlayerMounted":return this._isReady=
!0,null!=(f=this._events)?null!=(p=f.onPlayerMounted)?p.apply(this,[null!=(z=c.eventData)?z:{}]):void 0:void 0;case "onPlayerReady":return this._isReady=!0,null!=(J=this._events)?null!=(e=J.onPlayerReady)?e.apply(this,[null!=(ba=c.eventData)?ba:{}]):void 0:void 0;case "onVideoEnd":return this._isPlaying=!1,null!=(na=this._events)?null!=(ra=na.onVideoEnd)?ra.apply(this,[null!=(sa=c.eventData)?sa:{}]):void 0:void 0;case "onVideoStop":return this._isPlaying=!1,null!=(ta=this._events)?null!=(q=ta.onVideoStop)?
q.apply(this,[null!=(r=c.eventData)?r:{}]):void 0:void 0;case "onVideoError":var R=null!=(b=c.eventData)?b:{};try{R=JSON.parse(R)}catch(va){}this._isPlaying=!1;return null!=(n=this._events)?null!=(t=n.onVideoError)?t.apply(this,[R]):void 0:void 0;case "onVolumeChange":return null!=(u=this._events)?null!=(v=u.onVolumeChange)?v.apply(this,[null!=(w=c.eventData)?w:{}]):void 0:void 0;case "onPlay":return this._isPlaying=!0,null!=(x=this._events)?null!=(y=x.onPlay)?y.apply(this,[null!=(A=c.eventData)?
A:{}]):void 0:void 0;case "onSeeked":return null!=(B=this._events)?null!=(C=B.onSeeked)?C.apply(this,[null!=(D=c.eventData)?D:{}]):void 0:void 0;case "onSeeking":return null!=(E=this._events)?null!=(F=E.onSeeking)?F.apply(this,[null!=(l=c.eventData)?l:{}]):void 0:void 0;case "onReplay":return null!=(G=this._events)?null!=(H=G.onReplay)?H.apply(this,[null!=(I=c.eventData)?I:{}]):void 0:void 0;case "onProgramDateTime":return null!=(m=this._events)?null!=(K=m.onProgramDateTime)?K.apply(this,[null!=(L=
c.eventData)?L:{}]):void 0:void 0;case "onTimeUpdate":return null!=(M=this._events)?null!=(N=M.onTimeUpdate)?N.apply(this,[null!=(O=c.eventData)?O:{}]):void 0:void 0;case "onFullscreenChange":return null!=(P=this._events)?null!=(Q=P.onFullscreenChange)?Q.apply(this,[null!=(d=c.eventData)?d:{}]):void 0:void 0;case "onBuffering":return null!=(h=this._events)?null!=(g=h.onBuffering)?g.apply(this,[null!=(S=c.eventData)?S:{}]):void 0:void 0;case "onFragChanged":return null!=(T=this._events)?null!=(U=T.onFragChanged)?
U.apply(this,[null!=(V=c.eventData)?V:{}]):void 0:void 0;case "onCastConnected":return null!=(W=this._events)?null!=(X=W.onCastConnected)?X.apply(this,[null!=(Y=c.eventData)?Y:{}]):void 0:void 0;case "onCastDisconnected":return null!=(Z=this._events)?null!=(aa=Z.onCastDisconnected)?aa.apply(this,[null!=(ca=c.eventData)?ca:{}]):void 0:void 0;case "onCastRemoteDevicePaused":return null!=(da=this._events)?null!=(ea=da.onCastRemoteDevicePaused)?ea.apply(this,[null!=(fa=c.eventData)?fa:{}]):void 0:void 0;
case "onCastRemoteDevicePlaying":return null!=(ha=this._events)?null!=(ia=ha.onCastRemoteDevicePlaying)?ia.apply(this,[null!=(ja=c.eventData)?ja:{}]):void 0:void 0;case "onPlaylistStatusChange":return null!=(ka=this._events)?null!=(la=ka.onPlaylistStatusChange)?la.apply(this,[null!=(ma=c.eventData)?ma:{}]):void 0:void 0;case "onChangeLocation":return b=c.eventData,null!=(n=this._events)&&null!=(R=n.onChangeLocation)&&R.apply(this,[null!=b?b:{}]),null!=b&&b.parent?window.parent.location=b.url:this._IFrameContainer.src=
b.url;default:return null!=(oa=this._events)&&oa[null!=c?c.eventName:void 0]?this._events[c.eventName].apply(this,[null!=(pa=c.eventData)?pa:{}]):"function"===typeof(a=this._callbacks)[k=null!=c?c.eventName:void 0]?a[k](null!=(qa=c.eventData)?qa:null):void 0}};b.prototype._postMessage=function(b){var a;return this._isReady&&!this.playerDestroyed?null!=(a=this._IFrameContent)?a.postMessage(b,this.protocol()+"//"+(window.EMBED_HOST||"mdstrm.com")):void 0:this._error(["Player is not ready yet, please wait for the onPlayerReady event"])};
b.prototype._getMessage=function(b,a){for(var c;null==c||null!=this._callbacks[c];)c=Math.random().toString(32).substr(2);this._callbacks[c]=function(b){return function(){"function"===typeof a&&a.apply(null,arguments);return delete b._callbacks[c]}}(this);return this._postMessage({cb:c,eventName:b.action||b,data:b.data})};b.prototype._getYouTubeID=function(b){var a;null==b&&(b="");return null!=(a=b.match(/^youtube:(.+)/i))?a[1]:void 0};b.prototype._log=function(b){null==b&&(b=[]);return"undefined"!==
typeof console&&null!==console?console.log("[MDSTRM.Player] "+b.join(". ")):void 0};b.prototype._error=function(b){null==b&&(b=[]);return"undefined"!==typeof console&&null!==console?console.error("[MDSTRM.Player] "+b.join(". ")):void 0};b.prototype.isReady=function(){return this._isReady&&!this.playerDestroyed};b.prototype.isPlaying=function(){return this._isPlaying};b.prototype.requestAds=function(b){return b?(this._postMessage({action:"requestAds",data:b}),!0):!1};b.prototype.clickCustomPlaylist=
function(b,a){null==a&&(a=function(){});return this._getMessage({action:"clickCustomPlaylist",data:b},a)};b.prototype.seekTo=function(b,a){null==b&&(b=0);null==a&&(a=function(){});return this._getMessage({action:"seekTo",data:b},a)};b.prototype.videoPlay=function(b){null==b&&(b=function(){});return this._getMessage("videoPlay",b)};b.prototype.videoStop=function(b){null==b&&(b=function(){});return this._getMessage("videoStop",b)};b.prototype.getCurrentTime=function(b){return this._getMessage("getCurrentTime",
b)};b.prototype.getVideoMetrics=function(b){return this._getMessage("getVideoMetrics",b)};b.prototype.setVolume=function(b,a){null==a&&(a=function(){});return this._getMessage({action:"setVolume",data:b},a)};b.prototype.setSrc=function(b,a){null==a&&(a=function(){});return this._getMessage({action:"setSrc",data:b},a)};b.prototype.setAdsVolume=function(b,a){null==a&&(a=function(){});return this._getMessage({action:"setAdsVolume",data:b},a)};b.prototype.getDuration=function(b){return this._getMessage("getDuration",
b)};b.prototype.getSnapshot=function(b,a,ua){return this._getMessage({action:"getSnapshot",data:{height:a,width:b}},ua)};b.prototype.playbackLevel=function(b,a){null==a&&(a=function(){});return this._getMessage({action:"playbackLevel",data:b},a)};b.prototype.playbackLevels=function(b){return this._getMessage("playbackLevels",b)};b.prototype.getPlaylist=function(b){return this._getMessage("getPlaylist",b)};b.prototype.toggleFullScreen=function(b){return this._getMessage("toggleFullScreen",b)};b.prototype.addMarker=
function(b,a){null==a&&(a=function(){});return this._getMessage({action:"addMarker",data:b},a)};b.prototype.stopCast=function(b){null==b&&(b=function(){});return this._getMessage("stopCast",b)};return b}();window.MediastreamPlayer=b;b.prototype.isReady=b.prototype.isReady;b.prototype.isPlaying=b.prototype.isPlaying;b.prototype.requestAds=b.prototype.requestAds;b.prototype.seekTo=b.prototype.seekTo;b.prototype.videoPlay=b.prototype.videoPlay;b.prototype.videoStop=b.prototype.videoStop;b.prototype.getCurrentTime=
b.prototype.getCurrentTime;b.prototype.getVideoMetrics=b.prototype.getVideoMetrics;b.prototype.setVolume=b.prototype.setVolume;b.prototype.setSrc=b.prototype.setSrc;b.prototype.setAdsVolume=b.prototype.setAdsVolume;b.prototype.getDuration=b.prototype.getDuration;b.prototype.getSnapshot=b.prototype.getSnapshot;b.prototype.destroy=b.prototype.destroy;b.prototype.playbackLevel=b.prototype.playbackLevel;b.prototype.playbackLevels=b.prototype.playbackLevels;b.prototype.toggleFullScreen=b.prototype.toggleFullScreen;
b.prototype.getPlaylist=b.prototype.getPlaylist;b.prototype.addMarker=b.prototype.addMarker;b.prototype.clickCustomPlaylist=b.prototype.clickCustomPlaylist;b.prototype.stopCast=b.prototype.stopCast}).call(this);
//try{!function(e,t,n){"use strict";"function"==typeof define&&define.amd?define(n):"undefined"!=typeof module&&module.exports?module.exports=n():t.exports?t.exports=n():t.Fingerprint2=n()}(0,this,function(){"use strict";var e=function(t){if(!(this instanceof e))return new e(t);var n={swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",detectScreenOrientation:!0,sortPluginsFor:[/palemoon/i],userDefinedFonts:[]};this.options=this.extend(t,n),this.nativeForEach=Array.prototype.forEach,this.nativeMap=Array.prototype.map};return e.prototype={extend:function(e,t){if(null==e)return t;for(var n in e)null!=e[n]&&t[n]!==e[n]&&(t[n]=e[n]);return t},get:function(e){var t=this,n={data:[],addPreprocessedComponent:function(e){var n=e.value;"function"==typeof t.options.preprocessor&&(n=t.options.preprocessor(e.key,n)),this.data.push({key:e.key,value:n})}};n=this.userAgentKey(n),n=this.languageKey(n),n=this.colorDepthKey(n),n=this.pixelRatioKey(n),n=this.hardwareConcurrencyKey(n),n=this.screenResolutionKey(n),n=this.availableScreenResolutionKey(n),n=this.timezoneOffsetKey(n),n=this.sessionStorageKey(n),n=this.localStorageKey(n),n=this.indexedDbKey(n),n=this.addBehaviorKey(n),n=this.openDatabaseKey(n),n=this.cpuClassKey(n),n=this.platformKey(n),n=this.doNotTrackKey(n),n=this.pluginsKey(n),n=this.canvasKey(n),n=this.webglKey(n),n=this.adBlockKey(n),n=this.hasLiedLanguagesKey(n),n=this.hasLiedResolutionKey(n),n=this.hasLiedOsKey(n),n=this.hasLiedBrowserKey(n),n=this.touchSupportKey(n),n=this.customEntropyFunction(n),this.fontsKey(n,function(n){var i=[];t.each(n.data,function(e){var t=e.value;void 0!==e.value.join&&(t=e.value.join(";")),i.push(t)});var r=t.x64hash128(i.join("~~~"),31);return e(r,n.data)})},customEntropyFunction:function(e){return"function"==typeof this.options.customFunction&&e.addPreprocessedComponent({key:"custom",value:this.options.customFunction()}),e},userAgentKey:function(e){return this.options.excludeUserAgent||e.addPreprocessedComponent({key:"user_agent",value:this.getUserAgent()}),e},getUserAgent:function(){return navigator.userAgent},languageKey:function(e){return this.options.excludeLanguage||e.addPreprocessedComponent({key:"language",value:navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||""}),e},colorDepthKey:function(e){return this.options.excludeColorDepth||e.addPreprocessedComponent({key:"color_depth",value:screen.colorDepth||-1}),e},pixelRatioKey:function(e){return this.options.excludePixelRatio||e.addPreprocessedComponent({key:"pixel_ratio",value:this.getPixelRatio()}),e},getPixelRatio:function(){return window.devicePixelRatio||""},screenResolutionKey:function(e){return this.options.excludeScreenResolution?e:this.getScreenResolution(e)},getScreenResolution:function(e){var t;return void 0!==(t=this.options.detectScreenOrientation&&screen.height>screen.width?[screen.height,screen.width]:[screen.width,screen.height])&&e.addPreprocessedComponent({key:"resolution",value:t}),e},availableScreenResolutionKey:function(e){return this.options.excludeAvailableScreenResolution?e:this.getAvailableScreenResolution(e)},getAvailableScreenResolution:function(e){var t;return screen.availWidth&&screen.availHeight&&(t=this.options.detectScreenOrientation?screen.availHeight>screen.availWidth?[screen.availHeight,screen.availWidth]:[screen.availWidth,screen.availHeight]:[screen.availHeight,screen.availWidth]),void 0!==t&&e.addPreprocessedComponent({key:"available_resolution",value:t}),e},timezoneOffsetKey:function(e){return this.options.excludeTimezoneOffset||e.addPreprocessedComponent({key:"timezone_offset",value:(new Date).getTimezoneOffset()}),e},sessionStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasSessionStorage()&&e.addPreprocessedComponent({key:"session_storage",value:1}),e},localStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasLocalStorage()&&e.addPreprocessedComponent({key:"local_storage",value:1}),e},indexedDbKey:function(e){return!this.options.excludeIndexedDB&&this.hasIndexedDB()&&e.addPreprocessedComponent({key:"indexed_db",value:1}),e},addBehaviorKey:function(e){return document.body&&!this.options.excludeAddBehavior&&document.body.addBehavior&&e.addPreprocessedComponent({key:"add_behavior",value:1}),e},openDatabaseKey:function(e){return!this.options.excludeOpenDatabase&&window.openDatabase&&e.addPreprocessedComponent({key:"open_database",value:1}),e},cpuClassKey:function(e){return this.options.excludeCpuClass||e.addPreprocessedComponent({key:"cpu_class",value:this.getNavigatorCpuClass()}),e},platformKey:function(e){return this.options.excludePlatform||e.addPreprocessedComponent({key:"navigator_platform",value:this.getNavigatorPlatform()}),e},doNotTrackKey:function(e){return this.options.excludeDoNotTrack||e.addPreprocessedComponent({key:"do_not_track",value:this.getDoNotTrack()}),e},canvasKey:function(e){return!this.options.excludeCanvas&&this.isCanvasSupported()&&e.addPreprocessedComponent({key:"canvas",value:this.getCanvasFp()}),e},webglKey:function(e){return this.options.excludeWebGL?e:this.isWebGlSupported()?(e.addPreprocessedComponent({key:"webgl",value:this.getWebglFp()}),e):e},adBlockKey:function(e){return this.options.excludeAdBlock||e.addPreprocessedComponent({key:"adblock",value:this.getAdBlock()}),e},hasLiedLanguagesKey:function(e){return this.options.excludeHasLiedLanguages||e.addPreprocessedComponent({key:"has_lied_languages",value:this.getHasLiedLanguages()}),e},hasLiedResolutionKey:function(e){return this.options.excludeHasLiedResolution||e.addPreprocessedComponent({key:"has_lied_resolution",value:this.getHasLiedResolution()}),e},hasLiedOsKey:function(e){return this.options.excludeHasLiedOs||e.addPreprocessedComponent({key:"has_lied_os",value:this.getHasLiedOs()}),e},hasLiedBrowserKey:function(e){return this.options.excludeHasLiedBrowser||e.addPreprocessedComponent({key:"has_lied_browser",value:this.getHasLiedBrowser()}),e},fontsKey:function(e,t){return this.options.excludeJsFonts?this.flashFontsKey(e,t):this.jsFontsKey(e,t)},flashFontsKey:function(e,t){return this.options.excludeFlashFonts?t(e):this.hasSwfObjectLoaded()&&this.hasMinFlashInstalled()?void 0===this.options.swfPath?t(e):void this.loadSwfAndDetectFonts(function(n){e.addPreprocessedComponent({key:"swf_fonts",value:n.join(";")}),t(e)}):t(e)},jsFontsKey:function(e,t){var n=this;return setTimeout(function(){var i=["monospace","sans-serif","serif"],r=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Garamond","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"],a=["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"];n.options.extendedJsFonts&&(r=r.concat(a)),r=r.concat(n.options.userDefinedFonts);var o=document.getElementsByTagName("body")[0],s=document.createElement("div"),l=document.createElement("div"),d={},c={},u=function(){var e=document.createElement("span");return e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="72px",e.style.lineHeight="normal",e.innerHTML="mmmmmmmmmmlli",e},h=function(e,t){var n=u();return n.style.fontFamily="'"+e+"',"+t,n},g=function(){for(var e=[],t=0,n=i.length;t<n;t++){var r=u();r.style.fontFamily=i[t],s.appendChild(r),e.push(r)}return e}();o.appendChild(s);for(var p=0,f=i.length;p<f;p++)d[i[p]]=g[p].offsetWidth,c[i[p]]=g[p].offsetHeight;var m=function(){for(var e={},t=0,n=r.length;t<n;t++){for(var a=[],o=0,s=i.length;o<s;o++){var d=h(r[t],i[o]);l.appendChild(d),a.push(d)}e[r[t]]=a}return e}();o.appendChild(l);for(var T=[],S=0,v=r.length;S<v;S++)(function(e){for(var t=!1,n=0;n<i.length;n++)if(t=e[n].offsetWidth!==d[i[n]]||e[n].offsetHeight!==c[i[n]])return t;return t})(m[r[S]])&&T.push(r[S]);o.removeChild(l),o.removeChild(s),e.addPreprocessedComponent({key:"js_fonts",value:T}),t(e)},1)},pluginsKey:function(e){return this.options.excludePlugins||(this.isIE()?this.options.excludeIEPlugins||e.addPreprocessedComponent({key:"ie_plugins",value:this.getIEPlugins()}):e.addPreprocessedComponent({key:"regular_plugins",value:this.getRegularPlugins()})),e},getRegularPlugins:function(){for(var e=[],t=0,n=navigator.plugins.length;t<n;t++)e.push(navigator.plugins[t]);return this.pluginsShouldBeSorted()&&(e=e.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),this.map(e,function(e){var t=this.map(e,function(e){return[e.type,e.suffixes].join("~")}).join(",");return[e.name,e.description,t].join("::")},this)},getIEPlugins:function(){var e=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){var t=["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"];e=this.map(t,function(e){try{return new ActiveXObject(e),e}catch(e){return null}})}return navigator.plugins&&(e=e.concat(this.getRegularPlugins())),e},pluginsShouldBeSorted:function(){for(var e=!1,t=0,n=this.options.sortPluginsFor.length;t<n;t++){var i=this.options.sortPluginsFor[t];if(navigator.userAgent.match(i)){e=!0;break}}return e},touchSupportKey:function(e){return this.options.excludeTouchSupport||e.addPreprocessedComponent({key:"touch_support",value:this.getTouchSupport()}),e},hardwareConcurrencyKey:function(e){return this.options.excludeHardwareConcurrency||e.addPreprocessedComponent({key:"hardware_concurrency",value:this.getHardwareConcurrency()}),e},hasSessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},hasLocalStorage:function(){try{return!!window.localStorage}catch(e){return!0}},hasIndexedDB:function(){try{return!!window.indexedDB}catch(e){return!0}},getHardwareConcurrency:function(){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:"unknown"},getNavigatorCpuClass:function(){return navigator.cpuClass?navigator.cpuClass:"unknown"},getNavigatorPlatform:function(){return navigator.platform?navigator.platform:"unknown"},getDoNotTrack:function(){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:"unknown"},getTouchSupport:function(){var e=0,t=!1;void 0!==navigator.maxTouchPoints?e=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0}catch(e){}return[e,t,"ontouchstart"in window]},getCanvasFp:function(){var e=[],t=document.createElement("canvas");t.width=2e3,t.height=200,t.style.display="inline";var n=t.getContext("2d");return n.rect(0,0,10,10),n.rect(2,2,6,6),e.push("canvas winding:"+(!1===n.isPointInPath(5,5,"evenodd")?"yes":"no")),n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",this.options.dontUseFakeFontInCanvas?n.font="11pt Arial":n.font="11pt no-real-font-123",n.fillText("Cwm fjordbank glyphs vext quiz, Ã°Å¸ËœÆ’",2,15),n.fillStyle="rgba(102, 204, 0, 0.2)",n.font="18pt Arial",n.fillText("Cwm fjordbank glyphs vext quiz, Ã°Å¸ËœÆ’",4,45),n.globalCompositeOperation="multiply",n.fillStyle="rgb(255,0,255)",n.beginPath(),n.arc(50,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(0,255,255)",n.beginPath(),n.arc(100,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,255,0)",n.beginPath(),n.arc(75,100,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,0,255)",n.arc(75,75,75,0,2*Math.PI,!0),n.arc(75,75,25,0,2*Math.PI,!0),n.fill("evenodd"),e.push("canvas fp:"+t.toDataURL()),e.join("~")},getWebglFp:function(){var e,t=function(t){return e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),"["+t[0]+", "+t[1]+"]"};if(!(e=this.getWebglCanvas()))return null;var n=[],i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);var r=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW),i.itemSize=3,i.numItems=3;var a=e.createProgram(),o=e.createShader(e.VERTEX_SHADER);e.shaderSource(o,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),e.compileShader(o);var s=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(s,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),e.compileShader(s),e.attachShader(a,o),e.attachShader(a,s),e.linkProgram(a),e.useProgram(a),a.vertexPosAttrib=e.getAttribLocation(a,"attrVertex"),a.offsetUniform=e.getUniformLocation(a,"uniformOffset"),e.enableVertexAttribArray(a.vertexPosArray),e.vertexAttribPointer(a.vertexPosAttrib,i.itemSize,e.FLOAT,!1,0,0),e.uniform2f(a.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,i.numItems),null!=e.canvas&&n.push(e.canvas.toDataURL()),n.push("extensions:"+e.getSupportedExtensions().join(";")),n.push("webgl aliased line width range:"+t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),n.push("webgl aliased point size range:"+t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),n.push("webgl alpha bits:"+e.getParameter(e.ALPHA_BITS)),n.push("webgl antialiasing:"+(e.getContextAttributes().antialias?"yes":"no")),n.push("webgl blue bits:"+e.getParameter(e.BLUE_BITS)),n.push("webgl depth bits:"+e.getParameter(e.DEPTH_BITS)),n.push("webgl green bits:"+e.getParameter(e.GREEN_BITS)),n.push("webgl max anisotropy:"+function(e){var t,n=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");return n?(0===(t=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT))&&(t=2),t):null}(e)),n.push("webgl max combined texture image units:"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),n.push("webgl max cube map texture size:"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),n.push("webgl max fragment uniform vectors:"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),n.push("webgl max render buffer size:"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),n.push("webgl max texture image units:"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),n.push("webgl max texture size:"+e.getParameter(e.MAX_TEXTURE_SIZE)),n.push("webgl max varying vectors:"+e.getParameter(e.MAX_VARYING_VECTORS)),n.push("webgl max vertex attribs:"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),n.push("webgl max vertex texture image units:"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),n.push("webgl max vertex uniform vectors:"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),n.push("webgl max viewport dims:"+t(e.getParameter(e.MAX_VIEWPORT_DIMS))),n.push("webgl red bits:"+e.getParameter(e.RED_BITS)),n.push("webgl renderer:"+e.getParameter(e.RENDERER)),n.push("webgl shading language version:"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),n.push("webgl stencil bits:"+e.getParameter(e.STENCIL_BITS)),n.push("webgl vendor:"+e.getParameter(e.VENDOR)),n.push("webgl version:"+e.getParameter(e.VERSION));try{var l=e.getExtension("WEBGL_debug_renderer_info");l&&(n.push("webgl unmasked vendor:"+e.getParameter(l.UNMASKED_VENDOR_WEBGL)),n.push("webgl unmasked renderer:"+e.getParameter(l.UNMASKED_RENDERER_WEBGL)))}catch(e){}return e.getShaderPrecisionFormat?(n.push("webgl vertex shader high float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision),n.push("webgl vertex shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMin),n.push("webgl vertex shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMax),n.push("webgl vertex shader medium float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision),n.push("webgl vertex shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMin),n.push("webgl vertex shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMax),n.push("webgl vertex shader low float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).precision),n.push("webgl vertex shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMin),n.push("webgl vertex shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMax),n.push("webgl fragment shader high float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision),n.push("webgl fragment shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMin),n.push("webgl fragment shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMax),n.push("webgl fragment shader medium float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision),n.push("webgl fragment shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMin),n.push("webgl fragment shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMax),n.push("webgl fragment shader low float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).precision),n.push("webgl fragment shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMin),n.push("webgl fragment shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMax),n.push("webgl vertex shader high int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).precision),n.push("webgl vertex shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMin),n.push("webgl vertex shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMax),n.push("webgl vertex shader medium int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).precision),n.push("webgl vertex shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMin),n.push("webgl vertex shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMax),n.push("webgl vertex shader low int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).precision),n.push("webgl vertex shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMin),n.push("webgl vertex shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMax),n.push("webgl fragment shader high int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).precision),n.push("webgl fragment shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMin),n.push("webgl fragment shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMax),n.push("webgl fragment shader medium int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).precision),n.push("webgl fragment shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMin),n.push("webgl fragment shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMax),n.push("webgl fragment shader low int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).precision),n.push("webgl fragment shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMin),n.push("webgl fragment shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMax),n.join("~")):n.join("~")},getAdBlock:function(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var t=!1;try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(e){t=!1}return t},getHasLiedLanguages:function(){if(void 0!==navigator.languages)try{if(navigator.languages[0].substr(0,2)!==navigator.language.substr(0,2))return!0}catch(e){return!0}return!1},getHasLiedResolution:function(){return screen.width<screen.availWidth||screen.height<screen.availHeight},getHasLiedOs:function(){var e,t=navigator.userAgent.toLowerCase(),n=navigator.oscpu,i=navigator.platform.toLowerCase();e=t.indexOf("windows phone")>=0?"Windows Phone":t.indexOf("win")>=0?"Windows":t.indexOf("android")>=0?"Android":t.indexOf("linux")>=0?"Linux":t.indexOf("iphone")>=0||t.indexOf("ipad")>=0?"iOS":t.indexOf("mac")>=0?"Mac":"Other";if(("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&"Windows Phone"!==e&&"Android"!==e&&"iOS"!==e&&"Other"!==e)return!0;if(void 0!==n){if((n=n.toLowerCase()).indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e)return!0;if(n.indexOf("linux")>=0&&"Linux"!==e&&"Android"!==e)return!0;if(n.indexOf("mac")>=0&&"Mac"!==e&&"iOS"!==e)return!0;if((-1===n.indexOf("win")&&-1===n.indexOf("linux")&&-1===n.indexOf("mac"))!=("Other"==e))return!0}return i.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e||((i.indexOf("linux")>=0||i.indexOf("android")>=0||i.indexOf("pike")>=0)&&"Linux"!==e&&"Android"!==e||((i.indexOf("mac")>=0||i.indexOf("ipad")>=0||i.indexOf("ipod")>=0||i.indexOf("iphone")>=0)&&"Mac"!==e&&"iOS"!==e||((-1===i.indexOf("win")&&-1===i.indexOf("linux")&&-1===i.indexOf("mac"))!=("Other"==e)||void 0===navigator.plugins&&"Windows"!==e&&"Windows Phone"!==e)))},getHasLiedBrowser:function(){var e,t=navigator.userAgent.toLowerCase(),n=navigator.productSub;if(("Chrome"===(e=t.indexOf("firefox")>=0?"Firefox":t.indexOf("opera")>=0||t.indexOf("opr")>=0?"Opera":t.indexOf("chrome")>=0?"Chrome":t.indexOf("safari")>=0?"Safari":t.indexOf("trident")>=0?"Internet Explorer":"Other")||"Safari"===e||"Opera"===e)&&"20030107"!==n)return!0;var i=eval.toString().length;if(37===i&&"Safari"!==e&&"Firefox"!==e&&"Other"!==e)return!0;if(39===i&&"Internet Explorer"!==e&&"Other"!==e)return!0;if(33===i&&"Chrome"!==e&&"Opera"!==e&&"Other"!==e)return!0;var r;try{throw"a"}catch(e){try{e.toSource(),r=!0}catch(e){r=!1}}return!(!r||"Firefox"===e||"Other"===e)},isCanvasSupported:function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},isWebGlSupported:function(){if(!this.isCanvasSupported())return!1;var e,t=document.createElement("canvas");try{e=t.getContext&&(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch(t){e=!1}return!!window.WebGLRenderingContext&&!!e},isIE:function(){return"Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))},hasSwfObjectLoaded:function(){return void 0!==window.swfobject},hasMinFlashInstalled:function(){return swfobject.hasFlashPlayerVersion("9.0.0")},addFlashDivNode:function(){var e=document.createElement("div");e.setAttribute("id",this.options.swfContainerId),document.body.appendChild(e)},loadSwfAndDetectFonts:function(e){window.___fp_swf_loaded=function(t){e(t)};var t=this.options.swfContainerId;this.addFlashDivNode();var n={onReady:"___fp_swf_loaded"},i={allowScriptAccess:"always",menu:"false"};swfobject.embedSWF(this.options.swfPath,t,"1","1","9.0.0",!1,n,i,{})},getWebglCanvas:function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(e){}return t||(t=null),t},each:function(e,t,n){if(null!==e)if(this.nativeForEach&&e.forEach===this.nativeForEach)e.forEach(t,n);else if(e.length===+e.length){for(var i=0,r=e.length;i<r;i++)if(t.call(n,e[i],i,e)==={})return}else for(var a in e)if(e.hasOwnProperty(a)&&t.call(n,e[a],a,e)==={})return},map:function(e,t,n){var i=[];return null==e?i:this.nativeMap&&e.map===this.nativeMap?e.map(t,n):(this.each(e,function(e,r,a){i[i.length]=t.call(n,e,r,a)}),i)},x64Add:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]},x64Multiply:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]},x64Rotl:function(e,t){return t%=64,32===t?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])},x64LeftShift:function(e,t){return t%=64,0===t?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]},x64Xor:function(e,t){return[e[0]^t[0],e[1]^t[1]]},x64Fmix:function(e){return e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[4283543511,3981806797]),e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[3301882366,444984403]),e=this.x64Xor(e,[0,e[0]>>>1])},x64hash128:function(e,t){e=e||"",t=t||0;for(var n=e.length%16,i=e.length-n,r=[0,t],a=[0,t],o=[0,0],s=[0,0],l=[2277735313,289559509],d=[1291169091,658871167],c=0;c<i;c+=16)o=[255&e.charCodeAt(c+4)|(255&e.charCodeAt(c+5))<<8|(255&e.charCodeAt(c+6))<<16|(255&e.charCodeAt(c+7))<<24,255&e.charCodeAt(c)|(255&e.charCodeAt(c+1))<<8|(255&e.charCodeAt(c+2))<<16|(255&e.charCodeAt(c+3))<<24],s=[255&e.charCodeAt(c+12)|(255&e.charCodeAt(c+13))<<8|(255&e.charCodeAt(c+14))<<16|(255&e.charCodeAt(c+15))<<24,255&e.charCodeAt(c+8)|(255&e.charCodeAt(c+9))<<8|(255&e.charCodeAt(c+10))<<16|(255&e.charCodeAt(c+11))<<24],o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,d),r=this.x64Xor(r,o),r=this.x64Rotl(r,27),r=this.x64Add(r,a),r=this.x64Add(this.x64Multiply(r,[0,5]),[0,1390208809]),s=this.x64Multiply(s,d),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),a=this.x64Xor(a,s),a=this.x64Rotl(a,31),a=this.x64Add(a,r),a=this.x64Add(this.x64Multiply(a,[0,5]),[0,944331445]);switch(o=[0,0],s=[0,0],n){case 15:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(c+14)],48));case 14:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(c+13)],40));case 13:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(c+12)],32));case 12:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(c+11)],24));case 11:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(c+10)],16));case 10:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(c+9)],8));case 9:s=this.x64Xor(s,[0,e.charCodeAt(c+8)]),s=this.x64Multiply(s,d),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),a=this.x64Xor(a,s);case 8:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(c+7)],56));case 7:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(c+6)],48));case 6:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(c+5)],40));case 5:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(c+4)],32));case 4:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(c+3)],24));case 3:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(c+2)],16));case 2:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(c+1)],8));case 1:o=this.x64Xor(o,[0,e.charCodeAt(c)]),o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,d),r=this.x64Xor(r,o)}return r=this.x64Xor(r,[0,e.length]),a=this.x64Xor(a,[0,e.length]),r=this.x64Add(r,a),a=this.x64Add(a,r),r=this.x64Fmix(r),a=this.x64Fmix(a),r=this.x64Add(r,a),a=this.x64Add(a,r),("00000000"+(r[0]>>>0).toString(16)).slice(-8)+("00000000"+(r[1]>>>0).toString(16)).slice(-8)+("00000000"+(a[0]>>>0).toString(16)).slice(-8)+("00000000"+(a[1]>>>0).toString(16)).slice(-8)}},e.VERSION="1.5.1",e})}catch(e){console.log("fp no disponible: "+e)}!function(){"use strict";var e=function(e){this.init(e)};e.VERSION="1.6.0",e.EVENTS=["ready","setupError","play","pause","idle","complete","error","seek","seeked"],e.now=Date.now||function(){return(new Date).getTime()},e.throttle=function(t,n,i){var r,a,o,s,l=0;i||(i={});var d=function(){l=!1===i.leading?0:e.now(),r=null,s=t.apply(a,o),r||(a=o=null)},c=function(){var c=e.now();l||!1!==i.leading||(l=c);var u=n-(c-l);return a=this,o=arguments,u<=0||u>n?(r&&(clearTimeout(r),r=null),l=c,s=t.apply(a,o),r||(a=o=null)):r||!1===i.trailing||(r=setTimeout(d,u)),s};return c.cancel=function(){clearTimeout(r),l=0,r=a=o=null},c},e.log=function(e,t,n){var i=new Date,r=i.getHours()+":"+i.getMinutes()+":"+i.getSeconds();console.log("["+r+"] : "+t+" : "+e+"\n"+JSON.stringify(n)+"\n")},Array.prototype.includes=Array.prototype.includes||function(e,t){if(!this)throw new TypeError("Array.prototype.includes called on null or undefined");if(void 0===t){for(n=this.length;n--;)if(this[n]===e)return!0}else for(var n=t,i=this.length;n++!==i;)if(this[n]===e)return!0;return!1},e.prototype={constructor:e,init:function(e){var t=this;t.setupOptions(e),t.options.batchProcessing&&t.setupBatchProcessing(),!1!==t.options.fingerprinting&&t.setupFingerprinting()},setupOptions:function(e){var t=this;t.options=e||{},t.timeEventPeriod=t.options.timeEventPeriod||60},setupBatchProcessing:function(){var e=this;e.BATCH_PROCESSING_PERIOD=2e4,e.batchQueue=[],setInterval(function(){e.options.log&&console.log("[Batch] "+e.BATCH_PROCESSING_PERIOD+" Processing..."),e.batchQueue&&e.batchQueue.length&&(e.options.log&&console.log("[Batch] Queue is not empty"),window._paq.push(["sendBulkRequest",e.batchQueue]),e.batchQueue=[])},e.BATCH_PROCESSING_PERIOD)},setupFingerprinting:function(){var e=this;"function"==typeof Fingerprint2&&window._paq.push([function(){var t=this,n=t.mz__getMzData("fp");n?(t.setCustomVariable(5,"fp",n,"visit"),e.options.log&&console.log("fp existe: "+n)):(new Fingerprint2).get(function(n,i){t.mz__setMzData("fp",n),t.setCustomVariable(5,"fp",n,"visit"),e.options.log&&console.log("fp nuevo: "+n)})}])},sendEvent:function(e,t,n){var i=this;if(i.options.batchProcessing){var r=Piwik.getAsyncTracker(),a=r.getRequest(r.buildEventRequest(e,t,n,""),null,"event");i.options.log&&console.log("Queueing event: "+a),i.batchQueue.push(a)}else window._paq.push(["trackEvent",e,t,n])},trackEvent:function(t,n){var i=this,r=n.id||"contenido-no-identificado";if("time"===t){if(n.time){var a=""+n.time;i.sendEvent("video","time-"+a,r)}}else e.EVENTS.includes(t)&&i.options.sendAllEvents&&i.sendEvent("video",t,r)},setCustomData:function(e,t,n,i){window._paq.push(["setCustomVariable",e,t,n,i])},trackPlayer:function(e,t){var n=this;if("jwplayer7"===e)n.__track_jwplayer7(t);else{if("html5"!==e)throw new Error("Player no soportado.");n.__track_html5player(t)}},__track_jwplayer7:function(t){var n=this;t.on("all",function(t){if(e.EVENTS.includes(t)){var i=this.getConfig().playlistItem.mediaid||"contenido-no-identificado";n.options.log&&e.log(i,t,arguments||{}),n.options.sendAllEvents&&n.sendEvent("video",t,i)}});var i=n.timeEventPeriod,r=function(t,i,r){n.options.log&&e.log(t,i,r||{}),n.sendEvent("video",i,t)},a=e.throttle(r,1e3*i,{leading:!1});t.on("time",function(e){var t=e.type,n=Math.floor(e.position).toString(),r=n-n%i,o={position:n,duration:e.duration},s=this.getConfig().playlistItem.mediaid||"contenido-no-identificado";a(s,t+"-"+r,o)})},__track_html5player:function(t){var n=this,i=t.getAttribute("data-mediaid")||"contenido-no-identificado",r=n.timeEventPeriod,a=function(t,i,r){n.options.log&&e.log(t,i,r||{}),n.sendEvent("video",i,t)},o=e.throttle(a,1e3*r,{leading:!1});t.addEventListener("timeupdate",function(e){var t=this,n=Math.floor(t.duration),a=Math.floor(t.currentTime);o(i,"time-"+(a-a%r),{position:a,duration:n})})},reportToPanel:function(e){var t=this;if(e=e||{},"function"==typeof window.postMessage){var n=e.url||"*";window._paq.push([function(){var e={visitorId:this.getVisitorId()};if(window.opener){i=window.opener;t.options.log&&console.log("og: opener")}else if(window.parent&&window.parent!==window){var i=window.parent;t.options.log&&console.log("og: frame")}i&&(i.postMessage(e,n),t.options.log&&console.log("Mensaje a "+n+": "+JSON.stringify(e)))}])}}},window.MZEvents=e}();

//Comscore
/* Copyright (c) 2016 comScore, Inc.
 * All rights reserved.
 * By using this software, you are agreeing to be bound by the
 * terms of these policies: http://www.comscore.com/About_comScore/Privacy_Policy
 */
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.ns_=b(a.ns_)}):"object"==typeof module&&module.exports?module.exports=b():a.ns_=b(a.ns_)}(this,function(a){a=a||{},a.ns_=a;var b={uid:function(){var a=1;return function(){return+new Date+"_"+a++}}(),filter:function(a,b){var c={};for(var d in b)b.hasOwnProperty(d)&&a(b[d])&&(c[d]=b[d]);return c},extend:function(a){var b,c=arguments.length;a=a||{};for(var d=1;d<c;d++)if(b=arguments[d])for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},getString:function(a,b){var c=String(a);return null==a?b||"na":c},getLong:function(a,b){var c=Number(a);return null==a||isNaN(c)?b||0:c},getInteger:function(a,b){var c=Number(parseInt(a));return null==a||isNaN(c)?b||0:c},getBoolean:function(a,b){var c="true"==String(a).toLowerCase();return null==a?b||!1:c},parseBoolean:function(a,b){return b=b||!1,a?"0"!=a&&void 0:b},isNotEmpty:function(a){return!this.isEmpty(a)},isEmpty:function(a){return void 0===a||null===a||""===a||a instanceof Array&&0===a.length},indexOf:function(a,b){var c=-1;return this.forEach(b,function(b,d){b==a&&(c=d)}),c},forEach:function(a,b,c){try{if("function"==typeof b)if(c="undefined"!=typeof c?c:null,"number"!=typeof a.length||"undefined"==typeof a[0]){var d="undefined"!=typeof a.__proto__;for(var e in a)a.hasOwnProperty(e)&&(!d||d&&"undefined"==typeof a.__proto__[e])&&"function"!=typeof a[e]&&b.call(c,a[e],e)}else for(var f=0,g=a.length;f<g;f++)b.call(c,a[f],f)}catch(h){}},regionMatches:function(a,b,c,d,e){if(b<0||d<0||b+e>a.length||d+e>c.length)return!1;for(;--e>=0;){var f=a.charAt(b++),g=c.charAt(d++);if(f!=g)return!1}return!0},size:function(a){var b=0;for(var c in a)a.hasOwnProperty(c)&&b++;return b},log:function(a,b){if("undefined"!=typeof b&&b&&"undefined"!=typeof console&&console){var c=new Date,d=c.getHours()+":"+c.getMinutes()+":"+c.getSeconds();console.log(d,a)}},isTrue:function(a){return"undefined"!=typeof a&&("string"==typeof a?(a=a.toLowerCase(),"true"===a||"1"===a||"on"===a):!!a)},toString:function(a){if("undefined"==typeof a)return"undefined";if("string"==typeof a)return a;if("[object Array]"===Object.prototype.toString.call(a))return a.join(",");if(this.size(a)>0){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}return a.toString()},exists:function(a){return"undefined"!=typeof a&&null!=a},firstGreaterThan0:function(){for(var a=0,b=arguments.length;a<b;a++){var c=arguments[a];if(c>0)return c}return 0},cloneObject:function(a){if(null==a||"object"!=typeof a)return a;var b=function(){function a(){}function b(b){return"object"==typeof b?(a.prototype=b,new a):b}function c(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b])}function d(){this.copiedObjects=[];var a=this;this.recursiveDeepCopy=function(b){return a.deepCopy(b)},this.depth=0}function e(a,b){var c=new d;return b&&(c.maxDepth=b),c.deepCopy(a)}function f(a){return"undefined"!=typeof window&&window&&window.Node?a instanceof Node:"undefined"!=typeof document&&a===document||"number"==typeof a.nodeType&&a.attributes&&a.childNodes&&a.cloneNode}var g=[];return c.prototype={constructor:c,canCopy:function(){return!1},create:function(a){},populate:function(a,b,c){}},d.prototype={constructor:d,maxDepth:256,cacheResult:function(a,b){this.copiedObjects.push([a,b])},getCachedResult:function(a){for(var b=this.copiedObjects,c=b.length,d=0;d<c;d++)if(b[d][0]===a)return b[d][1]},deepCopy:function(a){if(null===a)return null;if("object"!=typeof a)return a;var b=this.getCachedResult(a);if(b)return b;for(var c=0;c<g.length;c++){var d=g[c];if(d.canCopy(a))return this.applyDeepCopier(d,a)}throw new Error("Unable to clone the following object "+a)},applyDeepCopier:function(a,b){var c=a.create(b);if(this.cacheResult(b,c),this.depth++,this.depth>this.maxDepth)throw new Error("Maximum recursion depth exceeded.");return a.populate(this.recursiveDeepCopy,b,c),this.depth--,c}},e.DeepCopier=c,e.deepCopiers=g,e.register=function(a){a instanceof c||(a=new c(a)),g.unshift(a)},e.register({canCopy:function(){return!0},create:function(a){return a instanceof a.constructor?b(a.constructor.prototype):{}},populate:function(a,b,c){for(var d in b)b.hasOwnProperty(d)&&(c[d]=a(b[d]));return c}}),e.register({canCopy:function(a){return a instanceof Array},create:function(a){return new a.constructor},populate:function(a,b,c){for(var d=0;d<b.length;d++)c.push(a(b[d]));return c}}),e.register({canCopy:function(a){return a instanceof Date},create:function(a){return new Date(a)}}),e.register({canCopy:function(a){return f(a)},create:function(a){return"undefined"!=typeof document&&a===document?document:a.cloneNode(!1)},populate:function(a,b,c){if("undefined"!=typeof document&&b===document)return document;if(b.childNodes&&b.childNodes.length)for(var d=0;d<b.childNodes.length;d++){var e=a(b.childNodes[d]);c.appendChild(e)}}}),{deepCopy:e}}();return b.deepCopy(a)},safeGet:function(a,b){return b=this.exists(b)?b:"",this.exists(a)?a:b},getBrowserName:function(){if(!navigator)return"";var a,b,c=navigator.userAgent||"",d=navigator.appName||"";return(b=c.indexOf("Opera"))!=-1||(b=c.indexOf("OPR/"))!=-1?d="Opera":(b=c.indexOf("Android"))!=-1?d="Android":(b=c.indexOf("Chrome"))!=-1?d="Chrome":(b=c.indexOf("Safari"))!=-1?d="Safari":(b=c.indexOf("Firefox"))!=-1?d="Firefox":(b=c.indexOf("IEMobile"))!=-1?d="Internet Explorer Mobile":"Microsoft Internet Explorer"==d||"Netscape"==d?d="Internet Explorer":(a=c.lastIndexOf(" ")+1)<(b=c.lastIndexOf("/"))?(d=c.substring(a,b),d.toLowerCase()==d.toUpperCase()&&(d=navigator.appName)):d="unknown",d},getBrowserFullVersion:function(){if(!navigator)return"";var a,b,c,d,e=navigator.userAgent||"",f=navigator.appName||"",g=navigator.appVersion?""+parseFloat(navigator.appVersion):"";return(b=e.indexOf("Opera"))!=-1?(g=e.substring(b+6),(b=e.indexOf("Version"))!=-1&&(g=e.substring(b+8))):(b=e.indexOf("OPR/"))!=-1?g=e.substring(b+4):(b=e.indexOf("Android"))!=-1?g=e.substring(b+11):(b=e.indexOf("Chrome"))!=-1?g=e.substring(b+7):(b=e.indexOf("Safari"))!=-1?(g=e.substring(b+7),(b=e.indexOf("Version"))!=-1&&(g=e.substring(b+8))):(b=e.indexOf("Firefox"))!=-1?g=e.substring(b+8):"Microsoft Internet Explorer"==f?(d=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"),null!=d.exec(e)&&(g=parseFloat(RegExp.$1))):"Netscape"==f?(d=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"),null!=d.exec(e)&&(g=parseFloat(RegExp.$1))):g=e.lastIndexOf(" ")+1<(b=e.lastIndexOf("/"))?e.substring(b+1):"unknown",g=g.toString(),(c=g.indexOf(";"))!=-1&&(g=g.substring(0,c)),(c=g.indexOf(" "))!=-1&&(g=g.substring(0,c)),(c=g.indexOf(")"))!=-1&&(g=g.substring(0,c)),a=parseInt(""+g,10),isNaN(a)&&(g=""+parseFloat(navigator.appVersion)),g},browserAcceptsLargeURLs:function(){return"undefined"==typeof window||(null!==window.ActiveXObject,!0)},getNamespace:function(){return a.ns_||a}};return a.StreamSense=a.StreamSense||function(){var c=function(){var a="cs_";return function(){var c="undefined"!=typeof localStorage?localStorage:null;b.extend(this,{get:function(b){return c&&c.getItem(a+b)},set:function(b,d){c&&c.setItem(a+b,d)},has:function(b){return c&&c.getItem(a+b)},remove:function(b){c&&c.removeItem(a+b)},clear:function(){for(var b=0;c&&b<c.length;++b){var d=c.key(b);d.substr(0,a.length)===a&&c.removeItem(d)}}})}}(),d=function(a,b){if("undefined"==typeof Image)return void("function"==typeof setTimeout?b&&setTimeout(b,0):b&&b());var c=new Image;c.onload=function(){b&&b(200),c=null},c.onerror=function(){b&&b(),c=null},c.src=a},e=function(a,b,c){"function"==typeof setTimeout?c&&setTimeout(function(){c(200)},0):c&&c(200)},f=function(){return{dir:function(){return null},append:function(a,b,c){},write:function(a,b,c){},deleteFile:function(){return!1},read:function(){return null}}}(),g=function(){return{PLATFORM:"generic",httpGet:d,httpPost:e,Storage:c,IO:f,onDataFetch:function(a){a()},getCrossPublisherId:function(){return null},getAppName:function(){return h.UNKNOWN_VALUE},getAppVersion:function(){return h.UNKNOWN_VALUE},getVisitorId:function(){return this.getDeviceName()+ +new Date+~~(1e3*Math.random())},getVisitorIdSuffix:function(){return"72"},getDeviceModel:function(){return h.UNKNOWN_VALUE},getPlatformVersion:function(){return h.UNKNOWN_VALUE},getPlatformName:function(){return"js"},getRuntimeName:function(){return h.UNKNOWN_VALUE},getRuntimeVersion:function(){return h.UNKNOWN_VALUE},getDisplayResolution:function(){return h.UNKNOWN_RESOLUTION},getApplicationResolution:function(){return h.UNKNOWN_RESOLUTION},getLanguage:function(){return h.UNKNOWN_VALUE},getPackageName:function(){return null},isConnectionAvailable:function(){return!0},isCompatible:function(){return!0},autoSelect:function(){},setPlatformAPI:function(){},isCrossPublisherIdChanged:function(){return!1},setTimeout:function(a,b){return setTimeout(a,b)},clearTimeout:function(a){return clearTimeout(a)},getDeviceArchitecture:function(){return h.UNKNOWN_VALUE},getConnectionType:function(){return h.UNKNOWN_VALUE},getDeviceJailBrokenFlag:function(){return h.UNKNOWN_VALUE},isConnSecure:function(){return"s"===document.location.href.charAt(4)},processMeasurementLabels:function(){}}}(),h={UNKNOWN_VALUE:"unknown",UNKNOWN_RESOLUTION:"0x0"};b.jsonObjectToStringDictionary=function(a){var b={};for(var c in a){var d=a[c];null===d||void 0===d?b[c]=d:b[c]=a[c]+""}return b},b.getKeys=function(a,b){var c,d=[];for(c in a)b&&!b.test(c)||!a.hasOwnProperty(c)||(d[d.length]=c);return d},b.fixEventTime=function(a){if(a.ns_ts)return parseInt(a.ns_ts);var b=+new Date;return a.ns_ts=b+"",b},b.isBrowser=function(){return"undefined"!=typeof window&&"undefined"!=typeof document},b.addNewPlaybackInterval=function(a,c,d,e){var f={};if(!(d>=c))return b.cloneObject(a);if(f.start=c,f.end=d,0==a.length)return a.push(f),b.cloneObject(a);var g;for(g=0;g<a.length;g++)if(f.start>=a[g].start&&f.end<=a[g].end)return b.cloneObject(a);var h,i=!1;for(h=0;h<a.length;h++)if(h+1===a.length&&f.start>=a[h].start||f.start>=a[h].start&&f.start<a[h+1].start){a.splice(h+1,0,f),i=!0;break}i||a.splice(0,0,f);var j=[a[0]];for(g=1;g<a.length;g++)j[j.length-1].end+e<a[g].start?j.push(a[g]):j[j.length-1].end<a[g].end&&(j[j.length-1].end=a[g].end);return b.cloneObject(j)};var i=function(){var a=["play","pause","pause-on-buffering","end","buffer","buffer-stop","keep-alive","hb","custom","load","start","skstart","adskip","cta","error","trans","drmfa","drmap","drmde","bitrt","playrt","volume","window","audio","video","subs","cdn"];return{PLAY:0,PAUSE:1,PAUSE_ON_BUFFERING:2,END:3,BUFFER:4,BUFFER_STOP:5,KEEPALIVE:6,HEARTBEAT:7,CUSTOM:8,LOAD:9,ENGAGE:10,SEEK_START:11,AD_SKIP:12,CTA:13,ERROR:14,TRANSFER:15,DRM_FAILED:16,DRM_APPROVED:17,DRM_DENIED:18,BIT_RATE:19,PLAYBACK_RATE:20,VOLUME:21,WINDOW_STATE:22,AUDIO:23,VIDEO:24,SUBS:25,CDN:26,toString:function(b){return a[b]}}}(),j=function(){return{IDLE:0,PLAYBACK_NOT_STARTED:1,PLAYING:2,PAUSED:3,BUFFERING_BEFORE_PLAYBACK:4,BUFFERING_DURING_PLAYBACK:5,BUFFERING_DURING_SEEKING:6,BUFFERING_DURING_PAUSE:7,SEEKING_BEFORE_PLAYBACK:8,SEEKING_DURING_PLAYBACK:9,SEEKING_DURING_BUFFERING:10,SEEKING_DURING_PAUSE:11,PAUSED_DURING_BUFFERING:12}}(),k=function(){var a=["c","s","r"];return{SINGLE_CLIP:0,SEGMENTED:1,REDUCED:2,toString:function(b){return a[b]}}}(),l={STREAMSENSE_VERSION:"5.2.0.160629",MODEL_VERSION:"5.3",DEFAULT_PLAYERNAME:"js_api",DEFAULT_HEARTBEAT_INTERVAL:[{playingtime:6e4,interval:1e4},{playingtime:null,interval:6e4}],DEFAULT_KEEP_ALIVE_INTERVAL:12e5,DEFAULT_PAUSED_ON_BUFFERING_INTERVAL:500,C1_VALUE:"19",C10_VALUE:"js",NS_AP_C12M_VALUE:"1",NS_NC_VALUE:"1",PAGE_NAME_LABEL:"name",RESTRICTED_URL_LENGTH_LIMIT:2048,URL_LENGTH_LIMIT:4096,THROTTLING_DELAY:500,INTERVAL_MERGE_TOLERANCE:500,STANDARD_METADATA_LABELS:["ns_st_ci","ns_st_pr","ns_st_sn","ns_st_en","ns_st_ep","ns_st_ty","ns_st_ct","ns_st_li","ns_st_ad","ns_st_bn","ns_st_tb","ns_st_an","ns_st_ta","ns_st_pu","c3","c4","c6"],LABELS_ORDER:["c1","c2","ca2","cb2","cc2","cd2","ns_site","ca_ns_site","cb_ns_site","cc_ns_site","cd_ns_site","ns_vsite","ca_ns_vsite","cb_ns_vsite","cc_ns_vsite","cd_ns_vsite","ns_alias","ca_ns_alias","cb_ns_alias","cc_ns_alias","cd_ns_alias","ns_ap_an","ca_ns_ap_an","cb_ns_ap_an","cc_ns_ap_an","cd_ns_ap_an","ns_ap_pn","ns_ap_pv","c12","ca12","cb12","cc12","cd12","ns_ak","ns_ap_hw","name","ns_ap_ni","ns_ap_ec","ns_ap_ev","ns_ap_device","ns_ap_id","ns_ap_csf","ns_ap_bi","ns_ap_pfm","ns_ap_pfv","ns_ap_ver","ca_ns_ap_ver","cb_ns_ap_ver","cc_ns_ap_ver","cd_ns_ap_ver","ns_ap_sv","ns_ap_cv","ns_ap_smv","ns_type","ca_ns_type","cb_ns_type","cc_ns_type","cd_ns_type","ns_radio","ns_nc","cs_partner","cs_xcid","ns_ap_ui","ca_ns_ap_ui","cb_ns_ap_ui","cc_ns_ap_ui","cd_ns_ap_ui","ns_ap_gs","ns_st_sv","ns_st_pv","ns_st_smv","ns_st_it","ns_st_id","ns_st_ec","ns_st_sp","ns_st_sc","ns_st_psq","ns_st_asq","ns_st_sq","ns_st_ppc","ns_st_apc","ns_st_spc","ns_st_cn","ns_st_ev","ns_st_po","ns_st_cl","ns_st_el","ns_st_sl","ns_st_pb","ns_st_hc","ns_st_mp","ca_ns_st_mp","cb_ns_st_mp","cc_ns_st_mp","cd_ns_st_mp","ns_st_mv","ca_ns_st_mv","cb_ns_st_mv","cc_ns_st_mv","cd_ns_st_mv","ns_st_pn","ns_st_tp","ns_st_ad","ns_st_li","ns_st_ci","ns_st_si","ns_st_pt","ns_st_dpt","ns_st_ipt","ns_st_et","ns_st_det","ns_st_upc","ns_st_dupc","ns_st_iupc","ns_st_upa","ns_st_dupa","ns_st_iupa","ns_st_lpc","ns_st_dlpc","ns_st_lpa","ns_st_dlpa","ns_st_pa","ns_ap_jb","ns_ap_et","ns_ap_res","ns_ap_sd","ns_ap_po","ns_ap_ot","ns_ap_c12m","cs_c12u","ca_cs_c12u","cb_cs_c12u","cc_cs_c12u","cd_cs_c12u","ns_ap_install","ns_ap_updated","ns_ap_lastrun","ns_ap_cs","ns_ap_runs","ns_ap_usage","ns_ap_fg","ns_ap_ft","ns_ap_dft","ns_ap_bt","ns_ap_dbt","ns_ap_dit","ns_ap_as","ns_ap_das","ns_ap_it","ns_ap_uc","ns_ap_aus","ns_ap_daus","ns_ap_us","ns_ap_dus","ns_ap_ut","ns_ap_oc","ns_ap_uxc","ns_ap_uxs","ns_ap_lang","ns_ap_ar","ns_ap_miss","ns_ts","ns_ap_cfg","ns_st_ca","ns_st_cp","ns_st_er","ca_ns_st_er","cb_ns_st_er","cc_ns_st_er","cd_ns_st_er","ns_st_pe","ns_st_ui","ca_ns_st_ui","cb_ns_st_ui","cc_ns_st_ui","cd_ns_st_ui","ns_st_bc","ns_st_dbc","ns_st_bt","ns_st_dbt","ns_st_bp","ns_st_lt","ns_st_skc","ns_st_dskc","ns_st_ska","ns_st_dska","ns_st_skd","ns_st_skt","ns_st_dskt","ns_st_pc","ns_st_dpc","ns_st_pp","ns_st_br","ns_st_pbr","ns_st_rt","ns_st_prt","ns_st_ub","ns_st_vo","ns_st_pvo","ns_st_ws","ns_st_pws","ns_st_ki","ns_st_rp","ns_st_bn","ns_st_tb","ns_st_an","ns_st_ta","ns_st_pl","ns_st_pr","ns_st_sn","ns_st_en","ns_st_ep","ns_st_sr","ns_st_ty","ns_st_ct","ns_st_cs","ns_st_ge","ns_st_st","ns_st_stc","ns_st_ce","ns_st_ia","ns_st_dt","ns_st_ddt","ns_st_tdt","ns_st_tm","ns_st_dtm","ns_st_ttm","ns_st_de","ns_st_pu","ns_st_ti","ns_st_cu","ns_st_fee","ns_st_ft","ns_st_at","ns_st_pat","ns_st_vt","ns_st_pvt","ns_st_tt","ns_st_ptt","ns_st_cdn","ns_st_pcdn","ns_st_ami","ns_st_amt","ns_st_ams","ns_ap_i1","ns_ap_i2","ns_ap_i3","ns_ap_i4","ns_ap_i5","ns_ap_i6","ns_ap_referrer","ns_clid","ns_campaign","ns_source","ns_mchannel","ns_linkname","ns_fee","gclid","utm_campaign","utm_source","utm_medium","utm_term","utm_content","ns_ecommerce","ns_ec_sv","ns_client_id","ns_order_id","ns_ec_cur","ns_orderline_id","ns_orderlines","ns_prod_id","ns_qty","ns_prod_price","ns_prod_grp","ns_brand","ns_shop","ns_category","category","ns_c","ns_search_term","ns_search_result","ns_m_exp","ns_m_chs","c3","ca3","cb3","cc3","cd3","c4","ca4","cb4","cc4","cd4","c5","ca5","cb5","cc5","cd5","c6","ca6","cb6","cc6","cd6","c10","c11","c13","c14","c15","c16","c7","c8","c9","ns_ap_er","ns_st_amc"]},m=function(){function a(){function a(){I={},I.ns_st_pt="0",I.ns_st_bt="0",I.ns_st_bc="0",I.ns_st_pc="0",I.ns_st_cl="0",I.ns_st_pn="1",I.ns_st_tp="1",I.ns_st_skc="0",I.ns_st_et="0",I.ns_st_cn="1",I.ns_st_sc="0",I.ns_st_ska="0",I.ns_st_skd="0",I.ns_st_skt="0",I.ns_st_upc="0",I.ns_st_lpc="0",I.ns_st_upa="0",I.ns_st_lpa="0",I.ns_st_ub="0",I.ns_st_br="0",f=!1,e=!1,d=h.UNKNOWN_VALUE,g=NaN,m=0,j=0,i=NaN,n=NaN,p=0,o=0,k=0,s=NaN,q=[],r=[],t=0,u=0,v=0,w=0,x=0,y=0,z=NaN,A=0,B=!1,C=NaN,F=!1,E=0,H=0,D=0,G=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0}function c(){var a,b,c=0;for(a=0;a<q.length;a++)c+=Math.abs(q[a].end-q[a].start);Q.setUniquePlaybackInterval(c);var d=0;for(a=0;a<q.length;a++)b=Math.abs(q[a].end-q[a].start),b>d&&(d=b);Q.setLongestPlaybackInterval(d);var e=0;for(a=0;a<r.length;a++)e+=Math.abs(r[a].end-r[a].start);Q.setAssetUniquePlaybackInterval(e);var f=0;for(a=0;a<r.length;a++)b=Math.abs(r[a].end-r[a].start),b>f&&(f=b);Q.setAssetLongestPlaybackInterval(f)}var d,e,f,g,i,j,k,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q=this,R=l.INTERVAL_MERGE_TOLERANCE;b.extend(this,{getHash:function(){return d},setHash:function(a){d=a},setPlaybackIntervalMergeTolerance:function(a){R=a},getPlaybackIntervalMergeTolerance:function(){return R},setLabels:function(a){null!=a&&b.extend(I,a)},getLabels:function(){return I},setLabel:function(a,b){var c={};c[a]=b,Q.setLabels(c)},getLabel:function(a){return I[a]},getClipNumber:function(){return parseInt(Q.getLabel("ns_st_cn"))},setClipNumber:function(a){Q.setLabel("ns_st_cn",a+"")},getPartNumber:function(){return parseInt(Q.getLabel("ns_st_pn"))},createLabels:function(a){var c=a||{};c.ns_st_dbt=Q.getBufferingTime()-A+"",A=Q.getBufferingTime(),c.ns_st_det=Q.getElapsedTime()-o+"",o=Q.getElapsedTime(),c.ns_st_dupc=Q.getUniquePlaybackInterval()-t+"",t=Q.getUniquePlaybackInterval(),parseInt(c.ns_st_dupc)<0&&(c.ns_st_dupc="0");var d;d=b.exists(c.ns_st_upc)?parseInt(c.ns_st_upc):Q.getUniquePlaybackInterval(),c.ns_st_iupc=d-u+"",u=d,parseInt(c.ns_st_iupc)<0&&(c.ns_st_iupc="0"),c.ns_st_dupa=Q.getAssetUniquePlaybackInterval()-v+"",v=Q.getAssetUniquePlaybackInterval(),parseInt(c.ns_st_dupa)<0&&(c.ns_st_dupa="0");var e;e=b.exists(c.ns_st_upa)?parseInt(c.ns_st_upa):Q.getAssetUniquePlaybackInterval(),c.ns_st_iupa=e-w+"",w=e,parseInt(c.ns_st_iupa)<0&&(c.ns_st_iupa="0"),c.ns_st_dlpc=Q.getLongestPlaybackInterval()-x+"",x=Q.getLongestPlaybackInterval(),parseInt(c.ns_st_dlpc)<0&&(c.ns_st_dlpc="0"),c.ns_st_dlpa=Q.getAssetLongestPlaybackInterval()-y+"",y=Q.getAssetLongestPlaybackInterval(),parseInt(c.ns_st_dlpa)<0&&(c.ns_st_dlpa="0");var g;return g=b.exists(c.ns_st_pt)?parseInt(c.ns_st_pt):Q.getPlaybackTime(),c.ns_st_ipt=g-k+"",k=g,c.ns_st_dpt=Q.getPlaybackTime()-j+"",j=Q.getPlaybackTime(),c.ns_st_dpc=Q.getPauses()-J+"",J=Q.getPauses(),c.ns_st_dskc=Q.getSeeks()-K+"",K=Q.getSeeks(),c.ns_st_dbc=Q.getBuffers()-L+"",L=Q.getBuffers(),c.ns_st_dskt=Q.getSeekingTime()-D+"",D=Q.getSeekingTime(),c.ns_st_dska=Q.getSeekingAmount()-G+"",G=Q.getSeekingAmount(),b.extend(c,Q.getLabels()),Q.setSeekingDirection(0),f&&(c.ns_st_spc=M+"",c.ns_st_apc=N+"",c.ns_st_sq=O+"",c.ns_st_asq=P+""),f||b.parseBoolean(c.ns_st_sc)||(c.ns_st_sc="1"),c},getVideoTrack:function(){return Q.getLabel("ns_st_vt")},setVideoTrack:function(a){Q.setLabel("ns_st_vt",a+"")},getAudioTrack:function(){return Q.getLabel("ns_st_at")},setAudioTrack:function(a){Q.setLabel("ns_st_at",a+"")},getSubtitleTrack:function(){return Q.getLabel("ns_st_tt")},setSubtitleTrack:function(a){Q.setLabel("ns_st_tt",a+"")},getCDN:function(){return Q.getLabel("ns_st_cdn")},setCDN:function(a){Q.setLabel("ns_st_cdn",a+"")},getClipPlaybackIntervals:function(){return q},setClipPlaybackIntervals:function(a){q=a},getAssetPlaybackIntervals:function(){return r},getUniquePlaybackInterval:function(){return parseInt(Q.getLabel("ns_st_upc"))},getAssetUniquePlaybackInterval:function(){return parseInt(Q.getLabel("ns_st_upa"))},setAssetUniquePlaybackInterval:function(a){Q.setLabel("ns_st_upa",a+"")},setUniquePlaybackInterval:function(a){Q.setLabel("ns_st_upc",a+"")},getLongestPlaybackInterval:function(){return parseInt(Q.getLabel("ns_st_lpc"))},setLongestPlaybackInterval:function(a){Q.setLabel("ns_st_lpc",a+"")},getAssetLongestPlaybackInterval:function(){return parseInt(Q.getLabel("ns_st_lpa"))},setAssetLongestPlaybackInterval:function(a){Q.setLabel("ns_st_lpa",a+"")},incrementPauses:function(){Q.setLabel("ns_st_pc",Q.getPauses()+1+"")},incrementSeeks:function(){Q.setLabel("ns_st_skc",Q.getSeeks()+1+"")},incrementPlayCounter:function(){O++},getPlayCounter:function(){return O},getBufferingTime:function(){return parseInt(Q.getLabel("ns_st_bt"))},setBufferingTime:function(a){Q.setLabel("ns_st_bt",a+"")},addBufferingTime:function(a){if(!isNaN(z)){var b=Q.getBufferingTime();b+=a-z,Q.setBufferingTime(b),z=NaN}},setPlaybackStartPosition:function(a){s=parseInt(a)},getPlaybackStartPosition:function(){return s},addInterval:function(a){isNaN(s)||isNaN(a)||(q=b.addNewPlaybackInterval(q,s,a,R),r=b.addNewPlaybackInterval(r,s,a,R),c(),s=NaN)},getElapsedTime:function(){return parseInt(Q.getLabel("ns_st_et"))},setElapsedTime:function(a){Q.setLabel("ns_st_et",a+"")},addElapsedTime:function(a){if(!isNaN(n)){var b=Q.getElapsedTime();b+=a-n,Q.setElapsedTime(b),n=NaN}},getElapsedTimestamp:function(){return n},setElapsedTimestamp:function(a){n=a},addPlaybackTime:function(a){if(!isNaN(g)){var b=Q.getPlaybackTime();b+=a-g,Q.setPlaybackTime(b),g=NaN}},getPlaybackTime:function(){return parseInt(Q.getLabel("ns_st_pt"))},getExpectedPlaybackPosition:function(a){return isNaN(g)||(m+=a-g),m},setPlaybackTimeOffset:function(a){m=a},getPlaybackTimeOffset:function(){return m},setPlaybackTime:function(a){Q.setLabel("ns_st_pt",a+"")},getPlaybackTimestamp:function(){return g},setPlaybackTimestamp:function(a){g=a},setPreviousPlaybackTime:function(a){j=a},setPreviousPlaybackTimestamp:function(a){i=a},getBufferingTimestamp:function(){return z},setBufferingTimestamp:function(a){z=a},getPauses:function(){return parseInt(Q.getLabel("ns_st_pc"))},setPauses:function(a){Q.setLabel("ns_st_pc",a+"")},getSeeks:function(){return parseInt(Q.getLabel("ns_st_skc"))},setSeeks:function(a){Q.setLabel("ns_st_skc",a+"")},setSeeking:function(a){B=a},isSeeking:function(){return B},setCollectingSeekingTime:function(a){F=a},isCollectingSeekingTime:function(){return F},setClipStarted:function(a){e=a},isClipStarted:function(){return e},setPlaybackStarted:function(a){f=a},isPlaybackStarted:function(){return f},setSeekingTimestamp:function(a){C=a},getSeekingTimestamp:function(){return C},addSeekingTime:function(a){if(!isNaN(C)){var b=Q.getSeekingTime();b+=a-C,Q.setSeekingTime(b),C=NaN}},getSeekingTime:function(){return parseInt(Q.getLabel("ns_st_skt"))},setSeekingTime:function(a){Q.setLabel("ns_st_skt",a+"")},setSeekingTimeBeforeEnd:function(a){H=a},getSeekingTimeBeforeEnd:function(){return H},setSeekStartPosition:function(a){E=a},getSeekStartPosition:function(){return E},setSeekingAmount:function(a){Q.setLabel("ns_st_ska",a+"")},getSeekingAmount:function(){return parseInt(Q.getLabel("ns_st_ska"))},addSeekingAmount:function(a){var b=Q.getSeekingAmount();b+=Math.abs(a-E),Q.setSeekingAmount(b);var c;E==a?c=0:E>a?c=-1:E<a&&(c=1),Q.setSeekingDirection(c),E=0},getSeekingDirection:function(){return parseInt(Q.getLabel("ns_st_skd"))},setSeekingDirection:function(a){Q.setLabel("ns_st_skd",a+"")},resetClipLifecycleLabels:function(){I.ns_st_pt="0",j=0,k=0,I.ns_st_bt="0",A=0,I.ns_st_bc="0",L=0,I.ns_st_pc="0",J=0,O=0,I.ns_st_upa="0",v=0,w=0,I.ns_st_et="0",o=0,I.ns_st_lpa="0",y=0,I.ns_st_skt="0",D=0,I.ns_st_ska="0",G=0,I.ns_st_skc="0",K=0},incrementSegmentPlaybackCounter:function(){M++},incrementClipLoadCounter:function(){Q.setLabel("ns_st_sc",Q.getClipLoadCounter()+1+"")},incrementAssetPlaybackCounter:function(){N++},setPreviousUniquePlaybackInterval:function(a){t=a},setPreviousEventIndependentUniquePlaybackInterval:function(a){u=a},setPreviousLongestPlaybackInterval:function(a){x=a},resetAssetPlaybackCounters:function(){r=[],Q.setAssetUniquePlaybackInterval(0),v=0,w=0,Q.setAssetLongestPlaybackInterval(0),y=0},setSegmentPlaybackCounter:function(a){M=a},setClipLoadCounter:function(a){Q.setLabel("ns_st_sc",a+"")},setAssetPlaybackCounter:function(a){N=a},setLowestPartNumberPlayed:function(a){p=a},getSegmentPlaybackCounter:function(){return M},getClipLoadCounter:function(){return parseInt(Q.getLabel("ns_st_sc"))},getAssetPlaybackCounter:function(){return N},getLowestPartNumberPlayed:function(){return p},getBuffers:function(){return parseInt(Q.getLabel("ns_st_bc"))},incrementBufferCount:function(){Q.setLabel("ns_st_bc",Q.getBuffers()+1+"")},getPreviousBufferingTime:function(){return A},setPlaySequenceCounter:function(a){P=a},incrementPlaySequenceCounter:function(){P++},getPlaySequenceCounter:function(){return P}}),a()}return a.resetClip=function(a,b,c){for(var d=a.getLabels(),e={},f=0;c&&f<c.length;++f)d.hasOwnProperty(c[f])&&(e[c[f]]=d[c[f]]);b.setLabels(e),b.setPlaybackIntervalMergeTolerance(a.getPlaybackIntervalMergeTolerance())},a}(),n=function(){function a(){function a(){c=new m,f={},f.ns_st_bp="0",f.ns_st_pa="0",f.ns_st_pp="0",f.ns_st_sp="1",f.ns_st_id=+new Date+"",d=NaN,e=NaN,h={},i=0,g=!1,j=!1,k=0,l=0}var c,d,e,f,g,h,i,j,k,l,n=this;b.extend(this,{resetClip:function(){var a=c;c=new m,m.resetClip(a,c)},hashExists:function(a){return null!=h[a]},storeHash:function(a){h[a]={}},removeHash:function(a){delete h[a]},storeClipPlaybackCounters:function(){for(var a in h)if(h.hasOwnProperty(a)&&h[a].clipNumber===c.getClipNumber()){b.extend(h[a],{segmentPlaybackCounter:c.getSegmentPlaybackCounter(),clipLoadCounter:c.getClipLoadCounter(),assetPlaybackCounter:c.getAssetPlaybackCounter(),lowestPartNumberPlayed:c.getLowestPartNumberPlayed(),seeking:c.isSeeking(),seekingTimeBeforeEnd:c.getSeekingTimeBeforeEnd(),seekingStartPosition:c.getSeekStartPosition(),clipPlaybackIntervals:c.getClipPlaybackIntervals(),uniquePlaybackInterval:c.getUniquePlaybackInterval(),longestPlaybackInterval:c.getLongestPlaybackInterval(),playSequenceCounter:c.getPlaySequenceCounter(),videoTrack:c.getVideoTrack(),audioTrack:c.getAudioTrack(),subtitleTrack:c.getSubtitleTrack(),cdn:c.getCDN()});break}},getStoredClipRegisters:function(a){return h[a]},getClipNumber:function(a){return h[a].clipNumber},getMaxClipNumber:function(){return i},storeClipNumber:function(a,b){h[a].clipNumber=b,b>i&&(i=b)},setLabels:function(a){null!=a&&b.extend(f,a)},getLabels:function(){return f},setLabel:function(a,b){var c={};c[a]=b,n.setLabels(c)},getLabel:function(a){return f[a]},getClip:function(){return c},createLabels:function(a){var d=a||{};return j||(d.ns_st_pb=null!=d.ns_st_pb?d.ns_st_pb:"1"),b.extend(d,n.getLabels()),c.isPlaybackStarted()&&(d.ns_st_ppc=k+"",d.ns_st_psq=l+""),d},incrementPlayCounter:function(){n.setLabel("ns_st_sp",parseInt(n.getLabel("ns_st_sp"))+1+"")},incrementPauses:function(){n.setLabel("ns_st_pp",n.getPauses()+1+"")},addPlaybackTime:function(a){if(!isNaN(e)){var b=n.getPlaybackTime();b+=a-e,n.setPlaybackTime(b),e=NaN}},addBufferingTime:function(a){if(!isNaN(d)){var b=n.getBufferingTime();b+=a-d,n.setBufferingTime(b),d=NaN}},getBufferingTime:function(){return parseInt(n.getLabel("ns_st_bp"))},setBufferingTime:function(a){n.setLabel("ns_st_bp",a+"")},getPlaybackTime:function(){return parseInt(n.getLabel("ns_st_pa"))},setBufferingTimestamp:function(a){d=a},getBufferingTimestamp:function(){return d},setPlaybackTime:function(a){n.setLabel("ns_st_pa",a+"")},setPlaybackTimestamp:function(a){e=a},getPlaybackTimestamp:function(){return e},getPauses:function(){return parseInt(n.getLabel("ns_st_pp"))},setPauses:function(a){n.setLabel("ns_st_pp",a+"")},isPlaylistStarted:function(){return g},setPlaylistStarted:function(a){g=a},getPlaybackCounter:function(){return k},incrementPlaybackCounter:function(){k++},setFirstEventSent:function(a){j=a},setPlaySequenceCounter:function(a){l=a},incrementPlaySequenceCounter:function(){l++}}),a()}return a.resetPlaylist=function(b,c,d){for(var e=b.getClip(),f=b.getLabels(),g={},h=0;d&&h<d.length;h++)f.hasOwnProperty(d[h])&&(g[d[h]]=f[d[h]]);c=new a,c.setLabels(g),m.resetClip(e,c.getClip(),d)},a}(),o=function(){return function(a){function c(){e=1}function d(c){f=b.extend({},c);var d=a.getSSECore().getPixelURL();if(a.getAppCore()){if(a.getSSECore().isProperlyInitialized()){var e=a.getSSECore().getExports().et;if("function"==typeof a.getAppCore().getMeasurementDispatcher){var g=a.getAppCore().getMeasurementDispatcher();g.send(e.HIDDEN,c,d)}else{var h=a.getSSECore().getExports().am,i=h.newApplicationMeasurement(a.getAppCore(),e.HIDDEN,c,d);a.getAppCore().getQueue().offer(i)}}}else d&&a.getSSECore().getPlatformAPI().httpGet(a.getSSECore().prepareUrl(d,c))}var e,f,g=this;b.extend(this,{newEvent:function(a){d(a.eventLabels),a.eventType!=i.HEARTBEAT&&g.incrementEventCounter()},getEventCounter:function(){return e},incrementEventCounter:function(){e++},setEventCounter:function(a){e=a},getMeasurementSnapshot:function(){return f}}),c()}}(),p=function(){return function(a){function c(){g=0,h=0}function d(){h++;var c={},d=b.fixEventTime(c);c.ns_st_po=a.getPlaylist().getClip().getPlaybackTimeOffset()+d-a.getPlaylist().getClip().getPlaybackTimestamp()+"",c.ns_st_pa=a.getPlaylist().getPlaybackTime()+d-a.getPlaylist().getPlaybackTimestamp()+"",c.ns_st_pt=a.getPlaylist().getClip().getPlaybackTime()+d-a.getPlaylist().getClip().getPlaybackTimestamp()+"",c.ns_st_dpt=d-a.getPlaylist().getClip().getPlaybackTimestamp()+"",a.getStateMachine().getCurrentState()==j.BUFFERING_DURING_PLAYBACK?(c.ns_st_bp=a.getPlaylist().getBufferingTime()+d-a.getPlaylist().getBufferingTimestamp()+"",c.ns_st_bt=a.getPlaylist().getClip().getBufferingTime()+d-a.getPlaylist().getClip().getBufferingTimestamp()+"",c.ns_st_dbt=d-a.getPlaylist().getClip().getBufferingTimestamp()+""):c.ns_st_dbt=a.getPlaylist().getClip().getBufferingTime()-a.getPlaylist().getClip().getPreviousBufferingTime()+"",c.ns_st_et=a.getPlaylist().getClip().getElapsedTime()+d-a.getPlaylist().getClip().getElapsedTimestamp()+"",c.ns_st_det=d-a.getPlaylist().getClip().getElapsedTimestamp()+"";var e=b.cloneObject(a.getPlaylist().getClip().getClipPlaybackIntervals()),f=b.cloneObject(a.getPlaylist().getClip().getAssetPlaybackIntervals());e=b.addNewPlaybackInterval(e,a.getPlaylist().getClip().getPlaybackStartPosition(),parseInt(c.ns_st_po),a.getPlaylist().getClip().getPlaybackIntervalMergeTolerance()),f=b.addNewPlaybackInterval(f,a.getPlaylist().getClip().getPlaybackStartPosition(),parseInt(c.ns_st_po),a.getPlaylist().getClip().getPlaybackIntervalMergeTolerance());var l,m,n=0;for(l=0;l<e.length;l++)n+=Math.abs(e[l].end-e[l].start);c.ns_st_upc=n+"",c.ns_st_dupc=n-a.getPlaylist().getClip().getUniquePlaybackInterval()+"";var o=0;for(l=0;l<e.length;l++)m=Math.abs(e[l].end-e[l].start),m>o&&(o=m);c.ns_st_lpc=o+"",c.ns_st_dlpc=o-a.getPlaylist().getClip().getLongestPlaybackInterval()+"";var p=0;for(l=0;l<f.length;l++)p+=Math.abs(f[l].end-f[l].start);c.ns_st_upa=p+"",c.ns_st_dupa=p-a.getPlaylist().getClip().getAssetUniquePlaybackInterval()+"";var q=0;for(l=0;l<f.length;l++)m=Math.abs(f[l].end-f[l].start),m>q&&(q=m);c.ns_st_lpa=q+"",c.ns_st_dlpa=q-a.getPlaylist().getClip().getAssetLongestPlaybackInterval()+"",c.ns_st_hc=a.getHeartbeat().getCount()+"";var r=a.getSSECore().createLabels(i.HEARTBEAT,c,d);a.getEventManager().newEvent(r),g=0,k.resume()}function e(){null!=f&&(a.getSSECore().getPlatformAPI().clearTimeout(f),f=null)}var f,g,h,k=this,m=l.DEFAULT_HEARTBEAT_INTERVAL;b.extend(this,{getCount:function(){return h},setIntervals:function(a){m=a},getInterval:function(a){var b=0;if(null!=m)for(var c=0;c<m.length;c++){var d=m[c],e=d.playingtime;if(!e||a<e){b=d.interval;break}}return b},getIntervals:function(){return m},resume:function(){e();var b=k.getInterval(a.getPlaylist().getClip().getPlaybackTime()+(+new Date-a.getPlaylist().getClip().getPlaybackTimestamp()));if(b>0){var c=g>0?g:b;f=a.getSSECore().getPlatformAPI().setTimeout(d,c)}g=0},pause:function(){e();var b=k.getInterval(a.getPlaylist().getClip().getPlaybackTime()+(+new Date-a.getPlaylist().getClip().getPlaybackTimestamp()));g=b-(a.getPlaylist().getClip().getPlaybackTime()+(+new Date-a.getPlaylist().getClip().getPlaybackTimestamp()))%b}}),c()}}(),q=function(){return function(a){function c(){}function d(){var c={},d=b.fixEventTime(c);c.ns_st_po=a.getPlaylist().getClip().getExpectedPlaybackPosition(d)+"",a.getPlaylist().addPlaybackTime(d),a.getPlaylist().setPlaybackTimestamp(d),a.getPlaylist().getClip().addPlaybackTime(d),a.getPlaylist().getClip().setPlaybackTimestamp(d),a.getStateMachine().getCurrentState()==j.BUFFERING_DURING_PLAYBACK&&(a.getPlaylist().addBufferingTime(d),
a.getPlaylist().setBufferingTimestamp(d),a.getPlaylist().getClip().addBufferingTime(d),a.getPlaylist().getClip().setBufferingTimestamp(d)),a.getPlaylist().getClip().addElapsedTime(d),a.getPlaylist().getClip().setElapsedTimestamp(d),a.getPlaylist().getClip().addInterval(parseInt(c.ns_st_po)),a.getPlaylist().getClip().setPlaybackStartPosition(parseInt(c.ns_st_po));var e=a.getSSECore().createLabels(i.KEEPALIVE,c,d);a.getEventManager().newEvent(e),g.resume()}function e(){null!=f&&(a.getSSECore().getPlatformAPI().clearTimeout(f),f=null)}var f,g=this,h=l.DEFAULT_KEEP_ALIVE_INTERVAL;b.extend(g,{resume:function(){e(),f=a.getSSECore().getPlatformAPI().setTimeout(d,h)},pause:function(){e()},setInterval:function(a){h=a},getInterval:function(){return h}}),c()}}(),r=function(){return function(a){function c(){f=j.IDLE,e=null,d=NaN}var d,e,f,g=this;b.extend(g,{eventTypeToState:function(a){if(f==j.IDLE){if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_BEFORE_PLAYBACK;if(a==i.BUFFER)return j.BUFFERING_BEFORE_PLAYBACK}else if(f==j.PLAYBACK_NOT_STARTED){if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_BEFORE_PLAYBACK;if(a==i.BUFFER)return j.BUFFERING_BEFORE_PLAYBACK;if(a==i.END||a==i.AD_SKIP)return j.IDLE}else if(f==j.PLAYING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.BUFFER)return j.BUFFERING_DURING_PLAYBACK;if(a==i.PAUSE)return j.PAUSED;if(a==i.SEEK_START)return j.SEEKING_DURING_PLAYBACK}else if(f==j.PAUSED){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.BUFFER)return j.BUFFERING_DURING_PAUSE;if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_DURING_PAUSE}else if(f==j.BUFFERING_BEFORE_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PAUSE||a==i.BUFFER_STOP)return j.PLAYBACK_NOT_STARTED;if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_BEFORE_PLAYBACK}else if(f==j.BUFFERING_DURING_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY||a==i.BUFFER_STOP)return j.PLAYING;if(a==i.PAUSE_ON_BUFFERING)return j.PAUSED_DURING_BUFFERING;if(a==i.SEEK_START)return j.SEEKING_DURING_BUFFERING;if(a==i.PAUSE)return j.PAUSED}else if(f==j.BUFFERING_DURING_SEEKING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.BUFFER_STOP)return j.SEEKING_DURING_PLAYBACK;if(a==i.PAUSE)return j.PAUSED}else if(f==j.BUFFERING_DURING_PAUSE){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_DURING_PAUSE;if(a==i.BUFFER_STOP||a==i.PAUSE)return j.PAUSED}else if(f==j.SEEKING_BEFORE_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PAUSE)return j.PLAYBACK_NOT_STARTED;if(a==i.PLAY)return j.PLAYING;if(a==i.BUFFER)return j.BUFFERING_BEFORE_PLAYBACK}else if(f==j.SEEKING_DURING_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.PAUSE)return j.PAUSED;if(a==i.BUFFER)return j.BUFFERING_DURING_SEEKING}else if(f==j.SEEKING_DURING_BUFFERING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.PAUSE||a==i.BUFFER_STOP)return j.PAUSED}else if(f==j.SEEKING_DURING_PAUSE){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.PAUSE||a==i.BUFFER_STOP)return j.PAUSED;if(a==i.BUFFER)return j.BUFFERING_DURING_PAUSE}else if(f==j.PAUSED_DURING_BUFFERING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.SEEK_START)return j.SEEKING_DURING_BUFFERING;if(a==i.PAUSE)return j.PAUSED;if(a==i.PLAY||a==i.BUFFER_STOP)return j.PLAYING}return null},getCurrentState:function(){return f},newEvent:function(a,b){var c=g.eventTypeToState(a);f!=c&&(e=f,f=c,d=b)},getPreviousState:function(){return e},getLastStateChangeTimestamp:function(){return d}}),c()}}(),s=function(){return function(a){var c=this;b.extend(c,{onSeekStartWhenPausedOrBufferingDuringPause:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()?a.getPlaylist().getClip().isCollectingSeekingTime()||(a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().getClip().setCollectingSeekingTime(!0)):a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().isSeeking()||(a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b))},onBufferWhenSeekingOrPlayBackNotStartedOrPaused:function(b,c){a.getPlaylist().setBufferingTimestamp(b),a.getPlaylist().getClip().setBufferingTimestamp(b)},onPlayWhenSeekingDuringBufferingOrSeekingDuringPause:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)},onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b)},onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause:function(b,c){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause:function(b,c){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))}})}}(),t=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onBufferStop:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()?a.getPlaylist().getClip().isCollectingSeekingTime()||(a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().getClip().setCollectingSeekingTime(!0)):a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().isSeeking()||(a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b))},onPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().isPlaylistStarted()||(a.getPlaylist().setPlaylistStarted(!0),a.getPlaylist().incrementPlaybackCounter()),a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().setClipStarted(!0),a.getPlaylist().getClip().setPlaybackStarted(!0),a.getPlaylist().getClip().incrementSegmentPlaybackCounter(),(0==a.getPlaylist().getClip().getLowestPartNumberPlayed()||parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)<=a.getPlaylist().getClip().getLowestPartNumberPlayed())&&(a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)),a.getPlaylist().getClip().incrementAssetPlaybackCounter(),a.getPlaylist().getClip().setPlaySequenceCounter(0),a.getPlaylist().getClip().resetAssetPlaybackCounters()),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()+"",a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),u=function(){return function(a){var c=this;b.extend(c,{onEndAndSkip:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b)},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),v=function(){return function(a){var c=this;b.extend(c,{onPauseOnBuffering:function(b,c){var d=parseInt(c.ns_st_po);a.getSSECore().stopPausedOnBufferingTimer(),a.getHeartbeat().pause(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e),a.getPlaylist().setBufferingTimestamp(b),a.getPlaylist().getClip().setBufferingTimestamp(b),a.getPlaylist().getClip().setPlaybackTimeOffset(d)},onBufferStop:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b)},onEndOrAdSkip:function(c,d){var e=parseInt(d.ns_st_po);a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().addPlaybackTime(c),a.getPlaylist().getClip().addElapsedTime(c),a.getPlaylist().getClip().addInterval(e);var f=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(f),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getHeartbeat().pause(),a.getSSECore().resetKeepAlive(),a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e)},onPause:function(b,c){var d=parseInt(c.ns_st_po);a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e)},onPlay:function(b,c){a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().addBufferingTime(b)}})}}(),w=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses(),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),x=function(){return function(a){var c=this;b.extend(c,{onBuffer:function(b,c){a.getPlaylist().getClip().setSeekingTime(a.getPlaylist().getClip().getSeekingTimeBeforeEnd()),a.getPlaylist().setBufferingTimestamp(b),a.getPlaylist().getClip().setBufferingTimestamp(b)},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().setSeekingTime(a.getPlaylist().getClip().getSeekingTimeBeforeEnd()),a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b)},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().setSeekingTime(a.getPlaylist().getClip().getSeekingTimeBeforeEnd()),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().isPlaylistStarted()||(a.getPlaylist().setPlaylistStarted(!0),a.getPlaylist().incrementPlaybackCounter()),a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().setClipStarted(!0),a.getPlaylist().getClip().setPlaybackStarted(!0),a.getPlaylist().getClip().incrementSegmentPlaybackCounter(),(0==a.getPlaylist().getClip().getLowestPartNumberPlayed()||parseInt(a.getPlaylist().getClip().getLabel("ns_st_pn"))<=a.getPlaylist().getClip().getLowestPartNumberPlayed())&&(a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabel("ns_st_pn"))),a.getPlaylist().getClip().incrementAssetPlaybackCounter(),a.getPlaylist().getClip().setPlaySequenceCounter(0),a.getPlaylist().getClip().resetAssetPlaybackCounters()),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()+"",a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),y=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),z=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onBufferStop:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()?a.getPlaylist().getClip().isCollectingSeekingTime()||(a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().getClip().setCollectingSeekingTime(!0)):a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().isSeeking()||(a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b))},onPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses()},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),A=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()?a.getPlaylist().getClip().setSeekingTimestamp(b):a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().isSeeking()||(a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().isPlaylistStarted()||(a.getPlaylist().setPlaylistStarted(!0),a.getPlaylist().incrementPlaybackCounter()),a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().setClipStarted(!0),a.getPlaylist().getClip().setPlaybackStarted(!0),a.getPlaylist().getClip().incrementSegmentPlaybackCounter(),(0==a.getPlaylist().getClip().getLowestPartNumberPlayed()||parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)<=a.getPlaylist().getClip().getLowestPartNumberPlayed())&&(a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)),a.getPlaylist().getClip().incrementAssetPlaybackCounter(),a.getPlaylist().getClip().setPlaySequenceCounter(0),a.getPlaylist().getClip().resetAssetPlaybackCounters()),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()+"",a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),B=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){var e=parseInt(d.ns_st_po);a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addPlaybackTime(c),a.getPlaylist().getClip().addPlaybackTime(c),a.getPlaylist().getClip().addElapsedTime(c),a.getPlaylist().getClip().addInterval(e);var f=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(f),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onBuffer:function(b,c){a.getSSECore().isPauseOnBufferingEnabled()&&a.getSSECore().startPausedOnBufferingTimer(b,c),a.getPlaylist().getClip().incrementBufferCount(),a.getPlaylist().setBufferingTimestamp(b),a.getPlaylist().getClip().setBufferingTimestamp(b)},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getHeartbeat().pause(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e)},onPause:function(b,c){var d=parseInt(c.ns_st_po);a.getHeartbeat().pause(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e)}})}}(),C=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPause:function(b,c){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().isPlaylistStarted()||(a.getPlaylist().setPlaylistStarted(!0),a.getPlaylist().incrementPlaybackCounter()),a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().setClipStarted(!0),a.getPlaylist().getClip().setPlaybackStarted(!0),a.getPlaylist().getClip().incrementSegmentPlaybackCounter(),(0==a.getPlaylist().getClip().getLowestPartNumberPlayed()||parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)<=a.getPlaylist().getClip().getLowestPartNumberPlayed())&&(a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)),a.getPlaylist().getClip().incrementAssetPlaybackCounter(),a.getPlaylist().getClip().setPlaySequenceCounter(0),a.getPlaylist().getClip().resetAssetPlaybackCounters()),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()+"",a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),D=function(){return function(a){var c=this;b.extend(c,{onPause:function(b,c){a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses(),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))}})}}(),E=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){parseInt(d.ns_st_po);a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);
a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()+"",a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),F=function(){return function(){function a(){m=new G(ba),b.getNamespace().comScore?(ca=b.getNamespace().comScore.exports,m.setAppCore(ca.c())):m.setAppCore(null),m.setKeepAlive(new q(m)),m.setHeartbeat(new p(m)),m.setEventManager(new o(m)),m.setStateMachine(new r),m.setPlaylist(new n),_={},F=new x(m),H=new y(m),I=new A(m),J=new B(m),K=new t(m),L=new v(m),M=new w(m),N=new u(m),O=new z(m),P=new C(m),Q=new D(m),R=new E(m),S=new s(m),T=!1,U=0,V=+new Date,W=!0,Y=!1,$=[]}function c(a){var b=m.getStateMachine().getCurrentState();if(b==j.IDLE||b==j.PLAYBACK_NOT_STARTED||b==j.BUFFERING_BEFORE_PLAYBACK||b==j.SEEKING_BEFORE_PLAYBACK){if(a==i.PLAY)return!0}else if(b==j.PLAYING){if(a==i.END||a==i.AD_SKIP||a==i.SEEK_START||a==i.PAUSE)return!0}else if(b==j.PAUSED||b==j.BUFFERING_DURING_PAUSE||b==j.SEEKING_DURING_PLAYBACK||b==j.SEEKING_DURING_BUFFERING||b==j.SEEKING_DURING_PAUSE){if(a==i.END||a==i.AD_SKIP||a==i.PLAY)return!0}else if(b==j.BUFFERING_DURING_PLAYBACK){if(a==i.PAUSE_ON_BUFFERING||a==i.END||a==i.AD_SKIP||a==i.SEEK_START||a==i.PAUSE||a==i.PLAY)return!0}else if(b==j.BUFFERING_DURING_SEEKING){if(a==i.END||a==i.AD_SKIP||a==i.PAUSE||a==i.PLAY)return!0}else if(b==j.PAUSED_DURING_BUFFERING&&(a==i.END||a==i.AD_SKIP||a==i.BUFFER_STOP||a==i.PLAY))return!0;return!1}function d(a,b,d){var e=m.getStateMachine().getCurrentState();a==i.AD_SKIP&&!d.hasOwnProperty("ns_st_ui")&&c(a)?d.ns_st_ui="skip":a==i.SEEK_START&&!d.hasOwnProperty("ns_st_ui")&&c(a)&&(d.ns_st_ui="seek"),e==j.IDLE?a==i.BUFFER?F.onBuffer(b,d):a==i.SEEK_START?F.onSeekStart(b,d):a==i.PLAY&&F.onPlay(b,d):e==j.PLAYBACK_NOT_STARTED?a==i.END||a==i.AD_SKIP?I.onEndOrAdSkip(b,d):a==i.SEEK_START?I.onSeekStart(b,d):a==i.PLAY?I.onPlay(b,d):a==i.BUFFER&&S.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):e==j.PLAYING?a==i.END||a==i.AD_SKIP?J.onEndOrAdSkip(b,d):a==i.BUFFER?J.onBuffer(b,d):a==i.SEEK_START?J.onSeekStart(b,d):a==i.PAUSE&&J.onPause(b,d):e==j.PAUSED?a==i.END||a==i.AD_SKIP?H.onEndOrAdSkip(b,d):a==i.PLAY?H.onPlay(b,d):a==i.BUFFER?S.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):a==i.SEEK_START&&S.onSeekStartWhenPausedOrBufferingDuringPause(b,d):e==j.BUFFERING_BEFORE_PLAYBACK?a==i.END||a==i.AD_SKIP?K.onEndOrAdSkip(b,d):a==i.BUFFER_STOP?K.onBufferStop(b,d):a==i.SEEK_START?K.onSeekStart(b,d):a==i.PAUSE?K.onPause(b,d):a==i.PLAY&&K.onPlay(b,d):e==j.BUFFERING_DURING_PLAYBACK?a==i.PAUSE_ON_BUFFERING?L.onPauseOnBuffering(b,d):a==i.BUFFER_STOP?L.onBufferStop(b,d):a==i.END||a==i.AD_SKIP?L.onEndOrAdSkip(b,d):a==i.SEEK_START?L.onSeekStart(b,d):a==i.PAUSE?L.onPause(b,d):a==i.PLAY&&L.onPlay(b,d):e==j.BUFFERING_DURING_SEEKING?a==i.END||a==i.AD_SKIP?M.onEndOrAdSkip(b,d):a==i.PAUSE?M.onPause(b,d):a==i.PLAY?M.onPlay(b,d):a==i.BUFFER_STOP&&S.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b,d):e==j.BUFFERING_DURING_PAUSE?a==i.END||a==i.AD_SKIP?N.onEndAndSkip(b,d):a==i.PAUSE?N.onPause(b,d):a==i.PLAY?N.onPlay(b,d):a==i.SEEK_START?S.onSeekStartWhenPausedOrBufferingDuringPause(b,d):a==i.BUFFER_STOP&&S.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b,d):e==j.SEEKING_BEFORE_PLAYBACK?a==i.END||a==i.AD_SKIP?P.onEndOrAdSkip(b,d):a==i.PAUSE?P.onPause(b,d):a==i.PLAY?P.onPlay(b,d):a==i.BUFFER&&S.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):e==j.SEEKING_DURING_PLAYBACK?a==i.END||a==i.AD_SKIP?R.onEndOrAdSkip(b,d):a==i.PLAY?R.onPlay(b,d):a==i.BUFFER?S.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):a==i.PAUSE&&S.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b,d):e==j.SEEKING_DURING_BUFFERING?a==i.PAUSE?Q.onPause(b,d):a==i.BUFFER?S.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):a==i.PLAY?S.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):a==i.END||a==i.AD_SKIP?S.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):a==i.BUFFER_STOP&&S.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):e==j.PAUSED_DURING_BUFFERING?a==i.END||a==i.AD_SKIP?O.onEndOrAdSkip(b,d):a==i.BUFFER_STOP?O.onBufferStop(b,d):a==i.SEEK_START?O.onSeekStart(b,d):a==i.PAUSE?O.onPause(b,d):a==i.PLAY&&O.onPlay(b,d):e==j.SEEKING_DURING_PAUSE&&(a==i.BUFFER?S.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):a==i.PLAY?S.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):a==i.PAUSE?S.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b,d):a==i.END||a==i.AD_SKIP?S.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):a==i.BUFFER_STOP&&S.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b,d)),c(a)&&m.getPlaylist().setFirstEventSent(!0)}function e(a,c){var d=a||"",e="undefined",f=fa.comScore||fa.sitestat||function(a){var c,d,f,g,h,i="comScore=",j=ga.cookie,k="",m="indexOf",n="substring",o="length",p=b.browserAcceptsLargeURLs()?l.URL_LENGTH_LIMIT:l.RESTRICTED_URL_LENGTH_LIMIT,q="&ns_",r="&",s=fa.encodeURIComponent||escape;if(j[m](i)+1)for(g=0,f=j.split(";"),h=f[o];g<h;g++)d=f[g][m](i),d+1&&(k=r+unescape(f[g][n](d+i[o])));a+=q+"_t="+ +new Date+q+"c="+(ga.characterSet||ga.defaultCharset||"")+k,a.length>p&&a.indexOf(r)>0&&(c=a.substr(0,p-8).lastIndexOf(r),a=(a.substring(0,c)+q+"cut="+s(a.substring(c+1))).substr(0,p)),ba.getPlatformAPI().httpGet(a),typeof ns_p===e&&(ns_p={src:a}),ns_p.lastMeasurement=a};if(typeof c!==e){var g=[],h=fa.encodeURIComponent||escape;for(var i in c)c.hasOwnProperty(i)&&g.push(h(i)+"="+h(c[i]));/[\?\&]$/.test(d)||(d+="&"),d+=g.join("&")}return f(d)}function f(a,c){for(var d,e=fa.encodeURIComponent||escape,f=[],g=l.LABELS_ORDER,h=a.split("?"),i=h[0],j=h[1],k=j.split("&"),m=0,n=k.length;m<n;m++){var o=k[m].split("="),p=unescape(o[0]),q=unescape(o[1]);p&&(c[p]=q)}for(var r={},s=0,t=g.length;s<t;s++){var u=g[s];if(c.hasOwnProperty(u)){var v=c[u];"undefined"!=typeof v&&null!=v&&(r[u]=!0,f.push(e(u)+"="+e(c[u])))}}for(var w in c)if(c.hasOwnProperty(w)){if(r[w])continue;var x=c[w];"undefined"!=typeof x&&null!=x&&f.push(e(w)+"="+e(c[w]))}d=i+"?"+f.join("&"),d=d+(d.indexOf("&c8=")<0?"&c8="+e(ga.title):"")+(d.indexOf("&c7=")<0?"&c7="+e(ga.URL):"")+(d.indexOf("&c9=")<0?"&c9="+e(ga.referrer):"");var y=b.browserAcceptsLargeURLs()?l.URL_LENGTH_LIMIT:l.RESTRICTED_URL_LENGTH_LIMIT;if(d.length>y&&d.indexOf("&")>0){var z=d.substr(0,y-8).lastIndexOf("&");d=(d.substring(0,z)+"&ns_cut="+e(d.substring(z+1))).substr(0,y)}return d}var m,F,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba=this,ca={},da=l.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,ea=l.THROTTLING_DELAY;b.extend(ba,{createLabels:function(a,c,d){var e={};if("undefined"!=typeof document){var f=document;e.c7=f.URL,e.c8=f.title,e.c9=f.referrer}return null!=c&&b.extend(e,c),e.ns_ts=null!=e.ns_ts?e.ns_ts:+new Date+"",e.ns_st_ev=null!=e.ns_st_ev?e.ns_st_ev:i.toString(a),e.ns_st_mp=null!=e.ns_st_mp?e.ns_st_mp:l.DEFAULT_PLAYERNAME,e.ns_st_mv=null!=e.ns_st_mv?e.ns_st_mv:l.STREAMSENSE_VERSION,e.ns_st_ub=null!=e.ns_st_ub?e.ns_st_ub:"0",e.ns_st_br=null!=e.ns_st_br?e.ns_st_br:"0",e.ns_st_pn=null!=e.ns_st_pn?e.ns_st_pn:"1",e.ns_st_tp=null!=e.ns_st_tp?e.ns_st_tp:"1",e.ns_st_it=null!=e.ns_st_it?e.ns_st_it:k.toString(k.SINGLE_CLIP),e.ns_st_sv=null!=e.ns_st_sv?e.ns_st_sv:l.STREAMSENSE_VERSION,e.ns_st_smv=null!=e.ns_st_smv?e.ns_st_smv:l.MODEL_VERSION,e.ns_type=null!=e.ns_type?e.ns_type:"hidden",e.ns_st_ec=null!=e.ns_st_ec?e.ns_st_ec:m.getEventManager().getEventCounter()+"",e.ns_st_po=null!=e.ns_st_po?e.ns_st_po:m.getPlaylist().getPlaylist().getClip().getExpectedPlaybackPosition(d)+"",e.ns_st_ki=null!=e.ns_st_ki?e.ns_st_ki:m.getKeepAlive().getInterval()+"",m.getPlaylist().createLabels(e),m.getPlaylist().getClip().createLabels(e),b.extend(e,ba.getLabels()),b.extend(e,c),{eventType:a,eventLabels:e}},newEvent:function(a,b,c,e){ba.stopDelayedTransitionTimer();var f=m.getStateMachine().getCurrentState(),g=m.getStateMachine().eventTypeToState(a);if(null!=g&&g!=f)if(!ba.isThrottlingEnabled()||f!=j.PLAYING&&f!=j.PAUSED||g!=j.PLAYING&&g!=j.PAUSED||e){c.ns_st_po||(m.getStateMachine().getCurrentState()==j.PLAYING&&a==i.BUFFER||m.getStateMachine().getCurrentState()==j.BUFFERING_DURING_PLAYBACK&&a==i.BUFFER_STOP?c.ns_st_po=m.getPlaylist().getClip().getPlaybackTimeOffset()+(b-m.getPlaylist().getClip().getPlaybackTimestamp())+"":c.ns_st_po=m.getPlaylist().getClip().getExpectedPlaybackPosition(b)+""),d(a,b,c);var h=0;isNaN(m.getStateMachine().getLastStateChangeTimestamp())||(h=b-m.getStateMachine().getLastStateChangeTimestamp()),m.getStateMachine().newEvent(a,b);for(var k=0,l=$.length;k<l;k++)$[k](f,g,c,h)}else Z=m.getPlatformAPI().setTimeout(function(a,c,d){return function(){ba.newEvent(a,b,d,!0)}}(a,g,c),ea)},newPseudoEvent:function(a,b,c){if(a!=i.LOAD&&a!=i.ENGAGE||m.getStateMachine().getCurrentState()==j.IDLE){a!=i.ERROR||c.ns_st_er||(c.ns_st_er=h.UNKNOWN_VALUE),m.getStateMachine().getCurrentState()!=j.IDLE&&m.getStateMachine().getCurrentState()!=j.PLAYBACK_NOT_STARTED&&m.getStateMachine().getCurrentState()!=j.SEEKING_BEFORE_PLAYBACK&&m.getStateMachine().getCurrentState()!=j.BUFFERING_BEFORE_PLAYBACK&&(m.getPlaylist().getClip().addElapsedTime(b),m.getPlaylist().getClip().setElapsedTimestamp(b));var d,e,f,g=!0,k=!1;switch(a){case i.BIT_RATE:d="ns_st_br",e="ns_st_pbr",k=!0;break;case i.PLAYBACK_RATE:d="ns_st_rt",e="ns_st_prt",k=!0;break;case i.VOLUME:d="ns_st_vo",e="ns_st_pvo",k=!0;break;case i.WINDOW_STATE:d="ns_st_ws",e="ns_st_pws",k=!0;break;case i.AUDIO:d="ns_st_at",e="ns_st_pat",k=!1;break;case i.VIDEO:d="ns_st_vt",e="ns_st_pvt",k=!1;break;case i.SUBS:d="ns_st_tt",e="ns_st_ptt",k=!1;break;case i.CDN:d="ns_st_cdn",e="ns_st_pcdn",k=!1;break;default:g=!1}if(g&&c.hasOwnProperty(d)&&(k?(ba.getLabels().hasOwnProperty(d)&&(f=ba.getLabels()[d],c[e]=f),ba.setLabel(d,c[d])):(m.getPlaylist().getClip().getLabels().hasOwnProperty(d)&&(f=m.getPlaylist().getClip().getLabels()[d],c[e]=f),m.getPlaylist().getClip().setLabel(d,c[d]))),!g||m.getStateMachine().getCurrentState()==j.PLAYING||m.getStateMachine().getCurrentState()==j.BUFFERING_DURING_PLAYBACK){c.ns_st_po||(c.ns_st_po=m.getPlaylist().getClip().getExpectedPlaybackPosition(b)+""),m.getStateMachine().getCurrentState()!=j.PLAYING&&m.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PLAYBACK||(m.getPlaylist().addPlaybackTime(b),m.getPlaylist().setPlaybackTimestamp(b),m.getPlaylist().getClip().addPlaybackTime(b),m.getPlaylist().getClip().setPlaybackTimestamp(b),m.getPlaylist().getClip().addInterval(parseInt(c.ns_st_po)),m.getPlaylist().getClip().setPlaybackStartPosition(parseInt(c.ns_st_po))),m.getStateMachine().getCurrentState()!=j.BUFFERING_BEFORE_PLAYBACK&&m.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PAUSE&&m.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PLAYBACK&&m.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_SEEKING||(m.getPlaylist().addBufferingTime(b),m.getPlaylist().setBufferingTimestamp(b),m.getPlaylist().getClip().addBufferingTime(b),m.getPlaylist().getClip().setBufferingTimestamp(b));var l=ba.createLabels(a,c,b);m.getEventManager().newEvent(l)}}},getState:function(){return m.getStateMachine().getCurrentState()},addListener:function(a){$.push(a)},removeListener:function(a){$.splice(b.indexOf(a,$),1)},getLabel:function(a){return _[a]},getLabels:function(){return _},setLabel:function(a,b){null==b?delete _[a]:_[a]=b},setLabels:function(a){for(var b in a)a.hasOwnProperty(b)&&ba.setLabel(b,a[b])},getPlatformAPI:function(){return m.getAppCore()?m.getAppCore().getPlatformAPI():g},getExports:function(){return ca},isProperlyInitialized:function(){var a=m.getAppCore().getAppContext(),b=m.getAppCore().getSalt(),c=m.getAppCore().getPixelURL();return a&&c&&b},setImplementationType:function(a){m.getStateMachine().getCurrentState()!=j.IDLE||a!=k.SINGLE_CLIP&&a!=k.SEGMENTED&&a!=k.REDUCED||m.getPlaylist().setLabel("ns_st_it",k.toString(a))},setThrottlingDelay:function(a){ea=a},getThrottlingDelay:function(){return ea},isThrottlingEnabled:function(){return Y},setThrottlingEnabled:function(a){Y=a},isLoadingTimeSent:function(){return T},setLoadingTimeSent:function(a){T=a},getLoadTimeOffset:function(){return U},setLoadTimeOffset:function(a){U=a},getInitTimestamp:function(){return V},setPauseOnBufferingInterval:function(a){da=a},getPauseOnBufferingInterval:function(){return da},isPauseOnBufferingEnabled:function(){return W},setPauseOnBufferingEnabled:function(a){W=a},startPausedOnBufferingTimer:function(a,c){ba.stopPausedOnBufferingTimer(),X=ba.getPlatformAPI().setTimeout(function(){var d={},e=b.fixEventTime(d),f=parseInt(c.ns_st_po);d.ns_st_po=f+e-a+"",ba.newEvent(i.PAUSE_ON_BUFFERING,e,d)},da)},stopPausedOnBufferingTimer:function(){null!=X&&(ba.getPlatformAPI().clearTimeout(X),X=null)},stopDelayedTransitionTimer:function(){Z&&(ba.getPlatformAPI().clearTimeout(Z),Z=null)},setPixelURL:function(a){if(null==a||0==a.length)return null;var b=decodeURIComponent||unescape,c=a.indexOf("?");if(c>=0){if(c<a.length-1){for(var d=a.substring(c+1).split("&"),e=0,f=d.length;e<f;e++){var g=d[e],h=g.split("=");2==h.length?ba.setLabel(h[0],b(h[1])):1==h.length&&ba.setLabel(l.PAGE_NAME_LABEL,b(h[0]))}a=a.substring(0,c+1)}}else a+="?";return aa=a},getPixelURL:function(){return aa?aa:"undefined"!=typeof ns_p&&"string"==typeof ns_p.src?aa=ns_p.src.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):"string"==typeof ns_pixelUrl?aa=ns_pixelUrl.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):null},getSseSM:function(){return m},resetPlaylist:function(a){var b=m.getPlaylist();m.setPlaylist(new n),n.resetPlaylist(b,m.getPlaylist(),a)},resetHeartbeat:function(){m.getHeartbeat().pause();var a=m.getHeartbeat().getIntervals();m.setHeartbeat(new p(m)),m.getHeartbeat().setIntervals(a)},resetKeepAlive:function(){m.getKeepAlive().pause();var a=m.getKeepAlive().getInterval();m.setKeepAlive(new q(m)),m.getKeepAlive().setInterval(a)}});var fa,ga;b.isBrowser()?(fa=window,ga=document):(fa={},ga={location:{href:""},title:"",URL:"",referrer:"",cookie:""}),b.extend(ba,{prepareUrl:f,viewNotify:e}),a()}}(),G=function(){return function(a){var c,d,e,f,g,h,i=this;b.extend(i,{getAppCore:function(){return c},getSSECore:function(){return a},getEventManager:function(){return d},getStateMachine:function(){return e},getHeartbeat:function(){return f},getKeepAlive:function(){return g},getPlaylist:function(){return h},setAppCore:function(a){c=a},setKeepAlive:function(a){g=a},setHeartbeat:function(a){f=a},setEventManager:function(a){d=a},setStateMachine:function(a){e=a},setPlaylist:function(a){h=a}})}}(),H=function(){return function(a,c){function d(){h=new F,g=!0,a&&k.setLabels(a),c&&k.setPixelURL(c)}function e(a,b){k.notify(i.CUSTOM,a,b)}function f(){g&&h.getSseSM().getStateMachine().getCurrentState()!=j.IDLE&&k.end()}var g,h,k=this,m=l.STANDARD_METADATA_LABELS;b.extend(this,{isProperlyInitialized:function(){return h.isProperlyInitialized()},reset:function(a){var b=h;b.getSseSM().getKeepAlive().pause(),b.getSseSM().getHeartbeat().pause(),h=new F,n.resetPlaylist(b.getSseSM().getPlaylist(),h.getSseSM().getPlaylist(),a)},setPauseOnBufferingInterval:function(a){h.setPauseOnBufferingInterval(a)},getPauseOnBufferingInterval:function(){return h.getPauseOnBufferingInterval()},setKeepAliveInterval:function(a){h.getSseSM().getKeepAlive().setInterval(a)},getKeepAliveInterval:function(){return h.getSseSM().getKeepAlive().getInterval()},setHeartbeatIntervals:function(a){h.getSseSM().getHeartbeat().setIntervals(a)},play:function(a,b){k.notify(i.PLAY,a,b)},pause:function(a,b){k.notify(i.PAUSE,a,b)},end:function(a,b){k.notify(i.END,a,b)},bufferStart:function(a,b){k.notify(i.BUFFER,a,b)},bufferStop:function(a,b){k.notify(i.BUFFER_STOP,a,b)},load:function(a,b){k.notify(i.LOAD,a,b)},engage:function(a,b){k.notify(i.ENGAGE,a,b)},seekStart:function(a,b){k.notify(i.SEEK_START,a,b)},skipAd:function(a,b){k.notify(i.AD_SKIP,a,b)},callToAction:function(a,b){k.notify(i.CTA,a,b)},error:function(a,b){k.notify(i.ERROR,a,b)},transferPlayback:function(a,b){k.notify(i.TRANSFER,a,b)},drmFail:function(a,b){k.notify(i.DRM_FAILED,a,b)},drmApprove:function(a,b){k.notify(i.DRM_APPROVED,a,b)},drmDeny:function(a,b){k.notify(i.DRM_DENIED,a,b)},changeBitrate:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_br=a+"",k.notify(i.BIT_RATE,d,b)}},changePlaybackRate:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_rt=a+"",k.notify(i.PLAYBACK_RATE,d,b)}},changeVolume:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_vo=a+"",k.notify(i.VOLUME,d,b)}},changeWindowState:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_ws=a+"",k.notify(i.WINDOW_STATE,d,b)}},changeAudio:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_at=a+"",k.notify(i.AUDIO,d,b)}},changeVideo:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_vt=a+"",k.notify(i.VIDEO,d,b)}},changeSubtitle:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_tt=a+"",k.notify(i.SUBS,d,b)}},changeCDN:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_cdn=a+"",k.notify(i.CDN,d,b)}},notify:function(a){var c,d;if(c="object"==typeof arguments[1]?arguments[1]:"object"==typeof arguments[2]?arguments[2]:{},d="number"==typeof arguments[1]?arguments[1]:"number"==typeof arguments[2]?arguments[2]:NaN,i.toString(a)){c=b.jsonObjectToStringDictionary(c);var e=b.fixEventTime(c);c.ns_st_po||isNaN(d)||(c.ns_st_po=b.getInteger(d,0)+""),c.ns_st_po&&h.getSseSM().getPlaylist().getClip().setPlaybackTimeOffset(parseInt(c.ns_st_po)),a==i.PLAY||a==i.PAUSE||a==i.BUFFER||a==i.END||a==i.SEEK_START||a==i.AD_SKIP||a==i.BUFFER_STOP?h.newEvent(a,e,c):h.newPseudoEvent(a,e,c)}},getLabels:function(){return h.getLabels()},getState:function(){return h.getSseSM().getStateMachine().getCurrentState()},setLabels:function(a){h.setLabels(a)},getLabel:function(a){return h.getLabel(a)},setLabel:function(a,b){h.setLabel(a,b)},getLoadTimeOffset:function(){return h.getLoadTimeOffset()},setLoadTimeOffset:function(a){h.setLoadTimeOffset(a)},setPixelURL:function(a){return h.setPixelURL(a)},getPixelURL:function(){return h.getPixelURL()},setImplementationType:function(a){h.setImplementationType(a)},isPauseOnBufferingEnabled:function(){return h.isPauseOnBufferingEnabled()},setPauseOnBufferingEnabled:function(a){h.setPauseOnBufferingEnabled(a)},isThrottlingEnabled:function(){return h.isThrottlingEnabled()},setThrottlingEnabled:function(a){h.setThrottlingEnabled(a)},setThrottlingDelay:function(a){h.setThrottlingDelay(a)},getThrottlingDelay:function(){return h.getThrottlingDelay()},setPlaybackIntervalMergeTolerance:function(a){h.getSseSM().getPlaylist().getClip().setPlaybackIntervalMergeTolerance(a)},getPlaybackIntervalMergeTolerance:function(){return h.getSseSM().getPlaylist().getClip().getPlaybackIntervalMergeTolerance()},setClip:function(a,c,d){if(void 0===d&&(d=!0),a=b.jsonObjectToStringDictionary(a),d&&h.getSseSM().getStateMachine().getCurrentState()!==j.IDLE&&k.end(),h.getSseSM().getStateMachine().getCurrentState()==j.IDLE){var e="",f=0;if(null!=a.ns_st_cn)e=a.ns_st_cn;else for(var g=0;g<m.length;g++)a[m[g]]&&(e+=m[g]+":"+a[m[g]]+";");var i=h.getSseSM().getPlaylist(),l=i.getClip();l.isClipStarted()?(i.hashExists(l.getHash())||(i.storeHash(l.getHash()),i.storeClipNumber(l.getHash(),l.getClipNumber())),i.storeClipPlaybackCounters(),f=i.hashExists(e)?i.getClipNumber(e):b.exists(a.ns_st_cn)?parseInt(a.ns_st_cn):i.getMaxClipNumber()+1):f=i.hashExists(e)?i.getClipNumber(e):l.getClipNumber(),i.resetClip(),l=i.getClip(),l.setHash(e),l.setClipNumber(f),l.setLabels(a);var n=i.getStoredClipRegisters(e);return n&&(l.setClipStarted(!0),l.setSegmentPlaybackCounter(n.segmentPlaybackCounter),l.setClipLoadCounter(n.clipLoadCounter),l.setAssetPlaybackCounter(n.assetPlaybackCounter),l.setLowestPartNumberPlayed(n.lowestPartNumberPlayed),l.setSeeking(n.seeking),l.setSeekingTimeBeforeEnd(n.seekingTimeBeforeEnd),l.setSeekStartPosition(n.seekingStartPosition),l.setClipPlaybackIntervals(n.clipPlaybackIntervals),l.setUniquePlaybackInterval(n.uniquePlaybackInterval),l.setLongestPlaybackInterval(n.longestPlaybackInterval),l.setVideoTrack(n.videoTrack),l.setAudioTrack(n.audioTrack),l.setSubtitleTrack(n.subtitleTrack),l.setCDN(n.cdn),l.setPlaySequenceCounter(n.playSequenceCounter),l.setPreviousUniquePlaybackInterval(n.uniquePlaybackInterval),l.setPreviousEventIndependentUniquePlaybackInterval(n.uniquePlaybackInterval),l.setPreviousLongestPlaybackInterval(n.longestPlaybackInterval)),l.incrementClipLoadCounter(),l.isClipStarted()&&c&&(i.incrementPlayCounter(),i.incrementPlaybackCounter()),c&&i.setPlaySequenceCounter(0),!0}return!1},setPlaylist:function(a,c){return void 0===c&&(c=!0),a=b.jsonObjectToStringDictionary(a),c&&h.getSseSM().getStateMachine().getCurrentState()!==j.IDLE&&k.end(),h.getSseSM().getStateMachine().getCurrentState()==j.IDLE&&(h.getSseSM().getPlaylist().isPlaylistStarted()&&h.resetPlaylist(),h.getSseSM().getPlaylist().setLabels(a),!0)},importState:function(){},exportState:function(){return{}},getVersion:function(){return l.STREAMSENSE_VERSION},addListener:function(a){h.addListener(a)},removeListener:function(a){h.removeListener(a)},getClip:function(){return h.getSseSM().getPlaylist().getClip()},getPlaylist:function(){return h.getSseSM().getPlaylist()},setHttpGet:function(a){"function"==typeof a&&(h.getPlatformAPI().httpGet=a)},setHttpPost:function(a){"function"==typeof a&&(h.getPlatformAPI().httpPost=a)},setExitEndEventEnabled:function(a){g=a},isExitEndEventEnabled:function(){return g},getPlatformAPI:function(){return h.getPlatformAPI()}}),b.extend(k,{customNotify:e,viewNotify:function(a,b){a=a||k.getPixelURL(),a&&h.viewNotify(a,b)}}),b.isBrowser()&&(window.addEventListener?(window.addEventListener("beforeunload",f),window.addEventListener("unload",f)):window.attachEvent&&(window.attachEvent("onbeforeunload",f),window.attachEvent("onunload",f))),d()}}();return function(c){function d(a,b){return x[z]||f(a,b)}function e(){z=-1;for(var b=0;b<=y;b++)if(x.hasOwnProperty(b+"")){z=b;break}return a.StreamSense.activeIndex=z,z}function f(b,c){return b=b||null,c=c||null,b&&"object"==typeof b&&(c=b,b=null),x[++y]=new a.StreamSense(c,b),e(),x[y]}function g(){var b=!1,c=z;if("number"==typeof arguments[0]&&isFinite(arguments[0]))c=arguments[0];else if(arguments[0]instanceof a.StreamSense)for(var d in x)if(x.hasOwnProperty(d)&&x[d]===arguments[0]){c=d;break}return x.hasOwnProperty(c+"")&&(b=x[c],delete x[c],b.reset(),e()),b}function h(a){return a=a||{},d().setPlaylist(a),d().getPlaylist()}function i(a,b,c){return a=a||{},"number"==typeof b&&(a.ns_st_cn=b+""),d().setClip(a,c),d().getClip()}function j(a,b,c){return"undefined"!=typeof a&&(c=c||null,b=b||{},d().notify(a,b,c))}function k(a){"undefined"!=typeof a&&d().setLabels(a)}function l(){return d().getLabels()}function m(a){"undefined"!=typeof a&&d().getPlaylist().setLabels(a)}function n(){return d().getPlaylist().getLabels()}function o(a){"undefined"!=typeof a&&d().getClip().setLabels(a)}function p(){return d().getClip().getLabels()}function q(a){return d().reset(a||{})}function r(a){return d().getPlaylist().reset(a||{})}function s(a){return d().getClip().reset(a||{})}function t(a){return a=a||{},d().viewNotify(null,a)}function u(a,b){return arguments.length>2&&(a=arguments[1],b=arguments[2]),a=a||{},"number"==typeof b&&(a.ns_st_po=b+""),d().customNotify(a,b)}function v(){return d().exportState()}function w(a){d().importState(a)}var x={},y=-1,z=-1;b.extend(c,{activeIndex:z,newInstance:f,"new":f,destroyInstance:g,destroy:g,newPlaylist:h,newClip:i,notify:j,setLabels:k,getLabels:l,setPlaylistLabels:m,getPlaylistLabels:n,setClipLabels:o,getClipLabels:p,resetInstance:q,resetPlaylist:r,resetClip:s,viewEvent:t,customEvent:u,exportState:v,importState:w})}(H),H.PlayerEvents=i,H.InternalStates=j,H.ImplementationType=k,H}(),a.StreamingTag=a.StreamingTag||function(){var c=a.StreamSense,d=(a.StreamSense.PlayerEvents,a.StreamSense.InternalStates||null),e=a.StreamSense.ImplementationType||null,f=null!=a.StreamSense.InternalStates&&null!=a.StreamSense.ImplementationType;return function(){var a={LongFormOnDemand:"12",ShortFormOnDemand:"11",Live:"13",UserGeneratedLongFormOnDemand:"22",UserGeneratedShortFormOnDemand:"21",UserGeneratedLive:"23",Bumper:"99",Other:"00"},g={LinearOnDemandPreRoll:"11",LinearOnDemandMidRoll:"12",LinearOnDemandPostRoll:"13",LinearLive:"21",BrandedOnDemandPreRoll:"31",BrandedOnDemandMidRoll:"32",BrandedOnDemandPostRoll:"33",BrandedOnDemandContent:"34",BrandedOnDemandLive:"35",Other:"00"},h=function(a){function g(){if(f)if(b.getNamespace().comScore)q=new c,q.setImplementationType(e.REDUCED);else if(b.exists(a))if(r=b.isTrue(a.debug),b.exists(a.customerC2)&&a.customerC2.length>0){var d=a.secure?"https://sb":"http"+("s"==document.location.href.charAt(4)?"s://sb":"://b");q=new c,q.setPixelURL(d+".scorecardresearch.com/p?c1=2"),q.setLabel("c2",a.customerC2),q.setImplementationType(e.REDUCED)}else r&&console&&console.log("Warning: customerC2 is not provided (or incorrect) in the StreamingTag configuration.")}function h(a){b.exists(a)||(a={});for(var c in t)t.hasOwnProperty(c)&&!b.exists(a[t[c]])&&("ns_st_ci"==t[c]?a.ns_st_ci="0":a[t[c]]="*null");return a}function i(a){for(var b in t)if(t.hasOwnProperty(b)&&!j(t[b],o,a))return!1;return!0}function j(a,c,d){if(b.exists(a)&&b.exists(c)&&b.exists(d)){var e=c[a],f=d[a];return b.exists(e)&&b.exists(f)&&e===f}return!1}function k(a){n++;var c={ns_st_cn:n+"",ns_st_pn:"1",ns_st_tp:"0"};b.extend(c,a),q.setClip(c),o=a,q.play()}function l(a){n++,a=h(a);var c={ns_st_cn:n+"",ns_st_pn:"1",ns_st_tp:"1",ns_st_ad:"1"};b.extend(c,a),q.setClip(c),q.play(),p=!1}function m(a,b){a=h(a),u==s.None&&(u=b),p&&u==b&&i(a)?(q.getClip().setLabels(a),q.getState()!=d.PLAYING&&q.play()):k(a),p=!0,u=b}var n=0,o=null,p=!1,q=null,r=!1,s={None:0,AudioContent:1,VideoContent:2},t=["ns_st_ci","c3","c4","c6","ns_st_st","ns_st_pu","ns_st_pr","ns_st_ep","ns_st_sn","ns_st_en","ns_st_ct"],u=s.None;b.extend(this,{playAdvertisement:function(){if(q){r&&console&&console.warn("Calling deprecated function 'playAdvertisement'. Please call 'playVideoAdvertisement' or 'playAudioAdvertisement' functions instead.");var a={ns_st_ct:"va"};l(a)}},playVideoAdvertisement:function(a,c){if(q){var d={ns_st_ct:"va"};c?d.ns_st_ct="va"+c:r&&console&&console.warn("Calling 'playVideoAdvertisement' without specifying the media type as a second parameter."),a&&b.extend(d,a),l(d)}},playAudioAdvertisement:function(a,c){if(q){var d={ns_st_ct:"aa"};c?d.ns_st_ct="aa"+c:r&&console&&console.warn("Calling 'playAudioAdvertisement' without specifying the media type as a second parameter."),a&&b.extend(d,a),l(d)}},playContentPart:function(a){if(q){r&&console&&console.warn("Calling deprecated function 'playContentPart'. Please call 'playVideoContentPart' or 'playAudioContentPart' functions instead.");var c={ns_st_ct:"vc"};a&&b.extend(c,a),m(c,s.VideoContent)}},playVideoContentPart:function(a,c){if(q){var d={ns_st_ct:"vc"};c?d.ns_st_ct="vc"+c:r&&console&&console.warn("Calling 'playVideoContentPart' without specifying the media type as a second parameter."),a&&b.extend(d,a),m(d,s.VideoContent)}},playAudioContentPart:function(a,c){if(q){var d={ns_st_ct:"ac"};c?d.ns_st_ct="ac"+c:r&&console&&console.warn("Calling 'playAudioContentPart' without specifying the media type as a second parameter."),a&&b.extend(d,a),m(d,s.AudioContent)}},stop:function(){q&&q.pause()}}),g()};return function(a){}(h),h.ContentType=a,h.AdType=g,h}()}(),a});

function loadjscssfile(filename, filetype) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
    } else if (filetype == "css") { //if filename is an external CSS file
        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
    if (typeof fileref != "undefined") {
        var scripts = document.scripts;
        var noesta = true;
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src.indexOf(filename.substr(filename.lastIndexOf('/') + 1)) != -1) noesta = false;
        }
        console.log(filename.substr(filename.lastIndexOf('/') + 1) + ' ' + noesta.toString());
        if (noesta) document.getElementsByTagName("head")[0].appendChild(fileref);
    }

}

function doesFileExist(urlToFile) {
    try {
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', urlToFile, false);
        xhr.send();

        if (xhr.status == "404") {
            return false;
        } else {
            return true;
        }
    } catch (err) {
        return false;
    }
}

var pdkey = "#$4cfdc58f3f36726dc11";
var pdkey = ['#$8045bcd48853e2a0c5b', '#$b187c9095a402154be9', '#$65c12fa33d7a86a4e45', '#$2e69ce678679e3b1120', '#$62172b388804edb6a26', '#$a536067ed5d62ad76db', '#$a4c71ee3a2358ec92de', '#$4cfdc58f3f36726dc11', '#$62172b388804edb6a26'];
var oas = "de.tvn.cl";
var strm = "//strm.tvn.cl";
var ua = "UA-68762-3";
var logo = "logo_tvn.png";
var Vast_Pre = "";
var Vast_Ov = "";
var Vast_Mid = "";
var Vast_Pos = "";
var playerid = "57f40bb4dc5b9f3075c49cfe";
var playerid_playlist = "585d32f50a10ff72705e2ffc";
var playerid_relcat = "57f40bb4dc5b9f3075c49cfe";
var track_atentus = false;
var comscore_c3 = "TVN";
var description_url = "";
var about_link = "";
if (typeof Players === 'undefined') var Players = new Object();
if (typeof PlayEvents === 'undefined') var PlayEvents = new Object();

if (typeof diseno === "undefined") var diseno = {
    name: "seven"
}


if (document.domain.indexOf("tvndeportes") != -1) pdkey = "#$62172b388804edb6a26";
if (document.domain.indexOf("24horas") != -1) {
    //    pdkey = "#$a4c71ee3a2358ec92de";
    oas = "de.24horas.cl";
    about_link = "http://www.24horas.cl";
    strm = "//strm.tvn.cl";
    ua = "UA-68762-21";
    logo = "24Horas_preview_Player.png";
    playerid = "57f4e28f9c53768535d65782";
    description_url = "24Horas";
    playerid_playlist = "5889eb60b3a0b0c108c56436";
    playerid_relcat = "585a9076c4b653ae71315e55";
    comscore_c3 = "24HORAS";
    diseno = {
    		url: "//estaticos.24horas.cl/skins/2017/06/16/player/css/jw24horas.css",
    		name: "24horas"
    }
}


if (document.domain.indexOf("tvn.org") != -1) pdkey = "#$65c12fa33d7a86a4e45";
if (document.domain.indexOf("tvn.cl") != -1) {
    //    pdkey = "#$4cfdc58f3f36726dc11";
    oas = "de.tvn.cl";
    about_link = "http://www.tvn.cl";
    strm = "//strm.tvn.cl";
    ua = "UA-68762-3";
    logo = "logo_tvn.png";
    description_url = "TVN";
    comscore_c3 = "TVN";
        diseno = {
    		name: "seven"
    }
}

if (window.location.href.indexOf("tvnkids") != -1) playerid = "585949edd73b7a317d9f8870";
if ((document.domain.indexOf("24horas") != -1) & (window.location.href.indexOf("sergio-vargas-reconoce-contactos-para-asumir-banca-de-la-u-me-llamaron-para-ser-opcion-2225775") != -1)) playerid = "585a9076c4b653ae71315e55";


if (!(window.console && console.log)) {
    console = {
        log: function() {},
        debug: function() {},
        info: function() {},
        warn: function() {},
        error: function() {}
    };
}

//loadjscssfile(strm + "/js/flowplayer-3.2.13.min.js","js");
//loadjscssfile(strm + "/js/flowplayer.ipad-3.2.13.min.js","js");

var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
var Android = (navigator.userAgent.match(/Android/g) ? true : false);
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var AndroidVersion = 0;
if (Android) {
    var ua = navigator.userAgent;
    AndroidVersion = parseFloat(ua.slice(ua.indexOf("Android") + 8));
}

Debug = true;
Levels = 'all';

var SaltarDesde = 15;
var SaltarDuracion = 300;

if (document.domain.indexOf("tvn.cl") != -1) {
    Debug = false;
    Levels = 'none';
}
if (document.domain.indexOf("24horas.cl") != -1) {
    Debug = false;
    Levels = 'none';
}

if (document.domain.indexOf("estaticos.tvn.cl") != -1) {
    Debug = false;
    Levels = 'none';
}
if (document.domain.indexOf("estaticos.24horas.cl") != -1) {
    Debug = false;
    Levels = 'none';
}

if (document.domain.indexOf("tvchile.cl") != -1) {
    Debug = false;
    Levels = 'none';
}

if (document.domain.indexOf("24horas.org") != -1) {
    Debug = false;
    Levels = 'none';
}

if (document.domain.indexOf("tvn.org") != -1) {
    Debug = false;
    Levels = 'none';
}

if (typeof OVP_Player == "undefined")
    OVP_Player = 1;

if (typeof JW_Player == "undefined")
    JW_Player = 0;

if (typeof OAS_videopage == "undefined")
    OAS_videopage = "";
if (typeof geobloqueo == "undefined")
    geobloqueo = false;

if (typeof custom == "undefined")
    var custom = new Object;

// VASTs de DFP
if (typeof DFP_Pre == "undefined") DFP_Pre = "";
if (typeof DFP_Ov == "undefined") DFP_Ov = "";
if (typeof DFP_Mid == "undefined") DFP_Mid = "";
if (typeof DFP_Pos == "undefined") DFP_Pos = "";

var DFP_noad = "https://pubads.g.doubleclick.net/gampad/ads?iu=/317342475/ad_video_call&description_url=http%3A%2F%2Fwww.tvn.cl&env=vp&impl=s&correlator=&tfcd=0&npa=0&gdfp_req=1&output=vast3&sz=640x480&unviewed_position_start=1";

oas = "";

function procesa_vast() {
	if (DFP_Pre === "") {
    	Vast_Pre = "";
	} else {
	    Vast_Pre = DFP_Pre.replace("https%3A//pubads.g.doubleclick.net/gampad/ads%3F", "");
	    Vast_Pre = Vast_Pre.replace("__timestamp__", Date.now());
	    Vast_Pre = Vast_Pre.replace("__referrer__", document.location.href);
	    Vast_Pre = Vast_Pre.replace("__page-url__", document.title);
	    Vast_Pre = Vast_Pre.replace(escape("[description_url]"), escape(document.location.href));
	    Vast_Pre = Vast_Pre.replace(escape("[page-url]"), escape(document.location.href));
	    custom.preroll = Vast_Pre;
	}

	if (DFP_Ov === "") {
	    Vast_Ov = "";
	} else {
	    Vast_Ov = DFP_Ov.replace("https%3A//pubads.g.doubleclick.net/gampad/ads%3F", "");
	    Vast_Ov = Vast_Ov.replace("__timestamp__", Date.now());
	    Vast_Ov = Vast_Ov.replace("__referrer__", document.location.href);
	    Vast_Ov = Vast_Ov.replace("__page-url__", document.title);
	    Vast_Ov = Vast_Ov.replace(escape("[description_url]"), escape(document.location.href));
	    Vast_Ov = Vast_Ov.replace(escape("[page-url]"), escape(document.location.href));
	    custom.overlay = Vast_Ov;
	}

	if (DFP_Mid === "") {
	    Vast_Mid = "";
	} else {
	    Vast_Mid = DFP_Mid.replace("https%3A//pubads.g.doubleclick.net/gampad/ads%3F", "");
	    Vast_Mid = Vast_Mid.replace("__timestamp__", Date.now());
	    Vast_Mid = Vast_Mid.replace("__referrer__", document.location.href);
	    Vast_Mid = Vast_Mid.replace("__page-url__", document.title);
	    Vast_Mid = Vast_Mid.replace(escape("[description_url]"), escape(document.location.href));
	    Vast_Mid = Vast_Mid.replace(escape("[page-url]"), escape(document.location.href));
	}

	if (DFP_Pos === "") {
	    Vast_Pos = "";
	} else {
	    Vast_Pos = DFP_Pos.replace("https%3A//pubads.g.doubleclick.net/gampad/ads%3F", "");
	    Vast_Pos = Vast_Pos.replace("__timestamp__", Date.now());
	    Vast_Pos = Vast_Pos.replace("__referrer__", document.location.href);
	    Vast_Pos = Vast_Pos.replace("__page-url__", document.title);
	    Vast_Pos = Vast_Pos.replace(escape("[description_url]"), escape(document.location.href));
	    Vast_Pos = Vast_Pos.replace(escape("[page-url]"), escape(document.location.href));

	    custom.postroll = Vast_Pos;
	}

    ads = {
	    client: "googima",
	    admessage: "Publicidad termina en xx segundos",
	    skipoffset: 15,
	    cuetext: "Publicidad",
	    skipmessage: "Saltar Publicidad en xx segundos",
	    skiptext: "Saltar",
	    setLocale: "es",
	    schedule: {
	        "adbreak-preroll": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Pre),
	            offset: "pre"
	        },
	        "adbreak-midroll1": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
	            offset: 600
	        },
	        "adbreak-midroll2": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
	            offset: 1200
	        },
	        "adbreak-midroll3": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
	            offset: 1800
	        },
	        "adbreak-midroll4": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
	            offset: 2400
	        },
//	        "adbreak-overlay": {
//	            offset: 60,
//	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Ov),
//	            type: "nonlinear"
//	        },
	        "adbreak-postroll": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Pos),
	            offset: "post"
	        }
	    }
	};

	ads_npos = {
	    client: "googima",
	    admessage: "Publicidad termina en xx segundos",
	    skipoffset: 15,
	    cuetext: "Publicidad",
	    skipmessage: "Saltar Publicidad en xx segundos",
	    skiptext: "Saltar",
	    setLocale: "es",
	    schedule: {
	        "adbreak-preroll": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Pre),
	            offset: "pre"
	        },
	        "adbreak-midroll1": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
	            offset: 600
	        },
	        "adbreak-midroll2": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
	            offset: 1200
	        },
	        "adbreak-midroll3": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
	            offset: 1800
	        },
	        "adbreak-midroll4": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
	            offset: 2400
	        }
//            ,
//	        "adbreak-overlay": {
//	            offset: 60,
//	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Ov),
//	            type: "nonlinear"
//	        }
	    }
	};

	ads_np = {
	    client: "googima",
	    admessage: "Publicidad termina en xx segundos",
	    skipoffset: 15,
	    cuetext: "Publicidad",
	    skipmessage: "Saltar Publicidad en xx segundos",
	    skiptext: "Saltar",
	    setLocale: "es",
	    schedule: {
	        "adbreak-midroll1": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
	            offset: 600
	        },
	        "adbreak-midroll2": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
	            offset: 1200
	        },
	        "adbreak-midroll3": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
	            offset: 1800
	        },
	        "adbreak-midroll4": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
	            offset: 2400
	        },
//	        "adbreak-overlay": {
//	            offset: 60,
//	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Ov),
//	            type: "nonlinear"
//	        },
	        "adbreak-postroll": {
	            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Pos),
	            offset: "post"
	        }
	    }
	};
    
    mads = {
                        DFP_preroll: unescape(Vast_Pre),
                        DFP_midroll: unescape(Vast_Mid),
                        DFP_overlay: unescape(Vast_Ov),
                        DFP_postroll: unescape(Vast_Pos)
    };

    mads_npos = {
                        DFP_preroll: unescape(Vast_Pre),
                        DFP_midroll: unescape(Vast_Mid),
                        DFP_overlay: unescape(Vast_Ov)
    };

    mads_np = {
                        DFP_midroll: unescape(Vast_Mid),
                        DFP_overlay: unescape(Vast_Ov),
                        DFP_postroll: unescape(Vast_Pos)
    };
    
    mads_live = {
                    preroll: unescape(Vast_Pre),
                    overlay: unescape(Vast_Ov)
    };
}

if (DFP_Pre === "") {
    Vast_Pre = "";
} else {
    Vast_Pre = DFP_Pre.replace("https%3A//pubads.g.doubleclick.net/gampad/ads%3F", "");
    Vast_Pre = Vast_Pre.replace("__timestamp__", Date.now());
    Vast_Pre = Vast_Pre.replace("__referrer__", document.location.href);
    Vast_Pre = Vast_Pre.replace("__page-url__", document.title);
    Vast_Pre = Vast_Pre.replace(escape("[description_url]"), escape(document.location.href));
    Vast_Pre = Vast_Pre.replace(escape("[page-url]"), escape(document.location.href));
    custom.preroll = Vast_Pre;
}

if (DFP_Ov === "") {
    Vast_Ov = "";
} else {
    Vast_Ov = DFP_Ov.replace("https%3A//pubads.g.doubleclick.net/gampad/ads%3F", "");
    Vast_Ov = Vast_Ov.replace("__timestamp__", Date.now());
    Vast_Ov = Vast_Ov.replace("__referrer__", document.location.href);
    Vast_Ov = Vast_Ov.replace("__page-url__", document.title);
    Vast_Ov = Vast_Ov.replace(escape("[description_url]"), escape(document.location.href));
    Vast_Ov = Vast_Ov.replace(escape("[page-url]"), escape(document.location.href));
    custom.overlay = Vast_Ov;
}

if (DFP_Mid === "") {
    Vast_Mid = "";
} else {
    Vast_Mid = DFP_Mid.replace("https%3A//pubads.g.doubleclick.net/gampad/ads%3F", "");
    Vast_Mid = Vast_Mid.replace("__timestamp__", Date.now());
    Vast_Mid = Vast_Mid.replace("__referrer__", document.location.href);
    Vast_Mid = Vast_Mid.replace("__page-url__", document.title);
    Vast_Mid = Vast_Mid.replace(escape("[description_url]"), escape(document.location.href));
    Vast_Mid = Vast_Mid.replace(escape("[page-url]"), escape(document.location.href));
}

if (DFP_Pos === "") {
    Vast_Pos = "";
} else {
    Vast_Pos = DFP_Pos.replace("https%3A//pubads.g.doubleclick.net/gampad/ads%3F", "");
    Vast_Pos = Vast_Pos.replace("__timestamp__", Date.now());
    Vast_Pos = Vast_Pos.replace("__referrer__", document.location.href);
    Vast_Pos = Vast_Pos.replace("__page-url__", document.title);
    Vast_Pos = Vast_Pos.replace(escape("[description_url]"), escape(document.location.href));
    Vast_Pos = Vast_Pos.replace(escape("[page-url]"), escape(document.location.href));

    custom.postroll = Vast_Pos;
}


// configuracion comun

var confcomun = {
    buffering: true,
    key: pdkey,
    play: {
        url: strm + '/img/play_negro.png',
        width: 69,
        height: 69
    },
    contextMenu: [
        // 1. "About Flowplayer...";  selecting this item goes to our homepage
        {
            'Player TVN ...': function() {
                location.href = "http://www.tvn.cl";
            }
        },
        // 2. menu separator.
        '-',
        // 3. version information.
        'Player TVN 3.2.18'
    ],
    canvas: {
        background: '#000000 url("' + strm + '/img/' + logo + '") no-repeat 50pct 50pct',
        backgroundGradient: 'none',
        border: '2px solid #000000',
        height: '360px',
        width: '640px'
    },
    debug: Debug,
    plugins: {
        controls: {
            autoHide: true,
            backgroundGradient: 'none',
            width: '90%',
            left: 7,
            bottom: 7,
            opacity: 0.75,
            borderRadius: 10,
            tooltips: {
                buttons: true,
                play: 'Reproducir',
                pause: 'Pausa',
                menu: 'Calidades',
                unmute: 'No Silenciar',
                mute: 'Silenciar',
                fullscreen: 'Pantalla Completa',
                fullscreenExit: 'Salir de Pantalla Completa'
            }
        }
    }
}

// configuraciones comunes
var flashhls = {
    url: strm + "/swf/flashlsFlowPlayer.swf",
    hls_debug: Debug,
    hls_debug2: Debug
}

var httpstreaming = {
    url: strm + "/swf/flowplayer.httpstreaminghls-3.2.17.swf"
};
//fix para servidores locales
if ((document.domain.indexOf("www.tvn.cl") == -1) && (document.domain.indexOf("www.24horas.cl") == -1)) httpstreaming = flashhls;
var httpstreaminglive = {
    url: strm + '/swf/flowplayer.httpstreaminghls-3.2.17.swf',
    liveButton: false,
    startLivePosition: true,
    dvrDynamicBufferTime: 10,
    dvrSnapToLiveClockOffset: 10
};

var httpstreaminglive = flashhls;
var rtmp = {
    url: strm + "/swf/flowplayer.rtmp-3.2.3.swf"
};
var youtube = {
    url: strm + '/swf/flowplayer.youtube-3.2.6.swf',
    enableGdata: false,
    bitratesOnStart: true,
    onVideoRemoved: function() {
        console.log("Video Removed");
    },
    onVideoError: function() {
        console.log("Incorrect Video ID");
    },
    onEmbedError: function() {
        console.log("Embed Not Allowed");
    }
};
var thumbs = {
    url: strm + "/swf/flowplayer.controls-preview-3.2.12.swf",
    frameWidth: 128,
    frameHeight: 72,
    thumbnails: true,
    interval: 5,
    thumbnailsOffset: 0,
    loadOnStart: true,
    tooltip: {
        hook: false,
        cornerRadius: 10,
        padding: 2,
        paddingTop: 0,
        paddingBottom: 0,
        color: "#CCCCCC"
    }
};
//fix para servidores locales
if ((document.domain.indexOf("www.tvn.cl") == -1) && (document.domain.indexOf("www.24horas.cl") == -1)) thumbs = "";
var bwcheck = {
    url: strm + "/swf/flowplayer.bwcheck-httpstreaming.swf",
    dynamic: true,
    qos: {
        frames: false,
        screen: false,
        bufferScaleDownFactor: 0.6,
        rememberBitrate: true
    },
    onStreamSwitch: function(newItem) {
        var content = $f().getPlugin('calidad');
        message = newItem.bitrate + "k";
        content.setHtml(message);
    }
};
var calidad = {
    url: strm + '/swf/flowplayer.content-3.2.8.swf',
    bottom: '7px',
    right: '7px',
    width: '48px',
    height: '26px',
    verticalAlign: 3,
    horizontalAlign: 3,
    backgroundGradient: 'none',
    backgroundColor: "#000000",
    opacity: 0.85,
    borderRadius: 10,
    border: 0,
    style: {
        body: {
            fontSize: 12,
            fontFamily: 'Arial',
            textAlign: 'center',
            color: "#ffffff"
        }
    }
};
var marcas = {
    url: strm + '/swf/flowplayer.controls-markers-3.2.14.swf',
    color: "#CCCCCC",
    overColor: "#FFFFFF",
    alternateColor: "#FFFFFF",
    alternateOverColor: "#CCCCCC",
    circleRadius: 2,
    addMarkerButtons: true

}
//fix para servidores locales
if ((document.domain.indexOf("www.tvn.cl") == -1) && (document.domain.indexOf("www.24horas.cl") == -1)) marcas = "";
//if ((document.domain.indexOf("tvn.cl")==-1) && (document.domain.indexOf("24horas.cl")==-1)) {
if (document.documentURI === undefined) {
    if ((document.URL.indexOf("comercial") != -1)) {
        httpstreaming = flashhls;
        httpstreaminglive = flashhls;
        bwcheck = "";
        calidad = "";
    }
} else {
    if ((document.documentURI.indexOf("comercial") != -1)) {
        httpstreaming = flashhls;
        httpstreaminglive = flashhls;
        bwcheck = "";
        calidad = "";
    }
}

var analytics = {
    //    url: strm + '/swf/flowplayer.analytics-3.2.9.swf',
    //    accountId: ua
};
var viral = {
    url: strm + '/swf/flowplayer.viralvideos-3.2.14.swf',
    email: false,
    share: false
};
var p = Object;
p.autostart = true;

var ova = {
    "url": strm + "/swf/ova.swf",
    "autoPlay": p.autostart,
    "player": {
        "setUrlResolversOnAdClips": false
    },
    "debug": {
        "levels": Levels
    },
    "ads": {
        "controls": {
            "skipAd": {
                "enabled": true,
                "image": "http://estaticos.tvn.cl/skins/www.tvn.cl/gfx/video/skip.png",
                "region": {
                    "id": "my-new-skip-ad-button",
                    "verticalAlign": "bottom",
                    "horizontalAlign": "right",
                    "padding": "0 0 30 0",
                    "width": 187,
                    "height": 70
                },
                "showAfterSeconds": 15,
                "showForSeconds": 300
            }
        },
        "overlays": {
            "closeButton": {
                "type": "standard"
            }
        },
        "clickSign": {
            "enabled": true,
            "verticalAlign": "center",
            "horizontalAlign": "center",
            "width": 200,
            "height": 32,
            "opacity": 0.5,
            "borderRadius": 20,
            "backgroundColor": "#000000",
            "style": ".smalltext { font-size:12; }",
            "html": "CLIC PARA MAS INFORMACION",
            "scaleRate": 0.75
        },
        "displayCompanions": true,
        "companions": [{
            "id": "Pub_Derecha_1",
            "width": "300",
            "height": "250"
        }],
        "schedule": [{
            "position": "pre-roll",
            "tag": escape("https://pubads.g.doubleclick.net/gampad/ads?") + Vast_Pre.replace("vast3", "vast2").replace("timestamp", Date.now()),
            "notice": {
                "type": "countdown",
                "show": "true",
                "region": "reserved-system-message",
                "message": ""
            }
        }, {
            "position": "auto:bottom",
            "tag": escape("https://pubads.g.doubleclick.net/gampad/ads?") + Vast_Ov.replace("vast3", "vast2").replace("timestamp", Date.now()),
            "duration": "recommended:10",
            "startTime": "00:00:10"
        }, {
            "position": "mid-roll",
            "startTime": "300",
            "tag": escape("https://pubads.g.doubleclick.net/gampad/ads?") + Vast_Mid.replace("vast3", "vast2").replace("timestamp", Date.now()),
            "notice": {
                "type": "countdown",
                "show": "true",
                "region": "reserved-system-message",
                "message": ""
            }
        }, {
            "position": "post-roll",
            "tag": escape("https://pubads.g.doubleclick.net/gampad/ads?") + Vast_Pos.replace("vast3", "vast2").replace("timestamp", Date.now()),
            "notice": {
                "type": "countdown",
                "show": "true",
                "region": "reserved-system-message",
                "message": ""
            }
        }]
    },
    "debug": {
        "levels": "info",
        "debugger": "firebug"
    }
};
var ova_np = {
    "url": strm + "/swf/ova.swf",
    "autoPlay": p.autostart,
    "player": {
        "setUrlResolversOnAdClips": false,
        "metaData": false,
        "modes": {
            "linear": {
                "controls": {
                    "enablePlay": true,
                    "enablePause": true,
                    "enablePlaylist": false,
                    "enableFullscreen": true,
                    "enableTime": false,
                    "enableMute": true,
                    "enableVolume": true
                }
            }
        }
    },
    "debug": {
        "levels": Levels
    },
    "ads": {
        "overlays": {
            "closeButton": {
                "type": "standard"
            }
        },
        "clickSign": {
            "enabled": true,
            "verticalAlign": "center",
            "horizontalAlign": "center",
            "width": 200,
            "height": 32,
            "opacity": 0.5,
            "borderRadius": 20,
            "backgroundColor": "#000000",
            "style": ".smalltext { font-size:12; }",
            "html": "CLIC PARA MAS INFORMACION",
            "scaleRate": 0.75
        },
        "displayCompanions": true,
        "companions": [{
            "id": "Pub_Derecha_1",
            "width": "300",
            "height": "250"
        }],
        "schedule": [{
            "position": "auto:bottom",
            "tag": escape("https://pubads.g.doubleclick.net/gampad/ads?") + Vast_Ov.replace("vast3", "vast2"),
            "duration": "recommended:10",
            "startTime": "00:00:10"
        }]
    },
    "debug": {
        "levels": "info",
        "debugger": "firebug"
    }
};
var ova_bs = {
    "url": strm + "/swf/ova.swf",
    "autoPlay": p.autostart,
    "player": {
        "setUrlResolversOnAdClips": false,
        "metaData": false,
        "modes": {
            "linear": {
                "controls": {
                    "enablePlay": true,
                    "enablePause": true,
                    "enablePlaylist": false,
                    "enableFullscreen": true,
                    "enableTime": false,
                    "enableMute": true,
                    "enableVolume": true
                }
            }
        }
    },
    "debug": {
        "levels": Levels
    },
    "ads": {
        "controls": {
            "skipAd": {
                "enabled": true,
                "image": "http://estaticos.tvn.cl/skins/www.tvn.cl/gfx/video/skip.png",
                "region": {
                    "id": "my-new-skip-ad-button",
                    "verticalAlign": "bottom",
                    "horizontalAlign": "right",
                    "padding": "0 0 30 0",
                    "width": 187,
                    "height": 70
                },
                "showAfterSeconds": 15,
                "showForSeconds": 300
            }
        },
        "overlays": {
            "closeButton": {
                "type": "standard"
            }
        },
        "clickSign": {
            "enabled": true,
            "verticalAlign": "center",
            "horizontalAlign": "center",
            "width": 200,
            "height": 32,
            "opacity": 0.5,
            "borderRadius": 20,
            "backgroundColor": "#000000",
            "style": ".smalltext { font-size:12; }",
            "html": "CLIC PARA MAS INFORMACION",
            "scaleRate": 0.75
        },
        "displayCompanions": true,
        "companions": [{
            "id": "Pub_Derecha_1",
            "width": "300",
            "height": "250"
        }],
        "schedule": [{
            "position": "pre-roll",
            "tag": escape("https://pubads.g.doubleclick.net/gampad/ads?") + Vast_Pre.replace("vast3", "vast2").replace("timestamp", Date.now()),
            "notice": {
                "type": "countdown",
                "show": "true",
                "region": "reserved-system-message",
                "message": ""
            }
        }, {
            "position": "mid-roll",
            "startTime": "300",
            "tag": escape("https://pubads.g.doubleclick.net/gampad/ads?") + Vast_Mid.replace("vast3", "vast2").replace("timestamp", Date.now()),
            "notice": {
                "type": "countdown",
                "show": "true",
                "region": "reserved-system-message",
                "message": ""
            }
        }, {
            "position": "auto:bottom",
            "tag": escape("https://pubads.g.doubleclick.net/gampad/ads?") + Vast_Ov.replace("vast3", "vast2").replace("timestamp", Date.now()),
            "duration": "recommended:10",
            "startTime": "00:00:10"
        }, {
            "position": "post-roll",
            "tag": escape("https://pubads.g.doubleclick.net/gampad/ads?") + Vast_Pos.replace("vast3", "vast2").replace("timestamp", Date.now()),
            "notice": {
                "type": "countdown",
                "show": "true",
                "region": "reserved-system-message",
                "message": "publicidad termina en _countdown_ segundos"
            }
        }]
    },
    "debug": {
        "levels": "info",
        "debugger": "firebug"
    }
};

function play(DivId, p) {
    document.getElementById(DivId).innerHTML = "";

    if (Vast_Pre == "") procesa_vast();
    if (typeof p.custom_pre === "undefined") p.custom_pre="";

    if (document.domain.indexOf("24horas.org") != -1) {
    	JW_Player=0;

    }

    if (document.domain.indexOf("24horas.cl") != -1) {
    	JW_Player=0;

    }

    //    cloneDiv = document.getElementById(DivId).cloneNode(true);
    //    cloneDiv.id = DivId+"_interno";
    //    wrapperDiv = document.createElement("div");
    //    wrapperDiv.id = DivId+"_wrapper";
    //    wrapperDiv.style.position="relative";
    //    document.getElementById(DivId).removeAttribute("style");
    //    document.getElementById(DivId).style.maxWidth = cloneDiv.style.width;
    //    document.getElementById(DivId).style.width="100%";
    //    wrapperDiv.appendChild(cloneDiv);
    //    document.getElementById(DivId).appendChild(cloneDiv);
    //    DivId = cloneDiv.id;
    //    if (document.getElementById(DivId).style.width=="") {
    //        document.getElementById(DivId).style.maxWidth = document.getElementById(DivId).offsetWidth +"px";
    //    } else {
    //        document.getElementById(DivId).style.maxWidth = document.getElementById(DivId).style.width;
    //    }
    //    document.getElementById(DivId).style.width = "100%";
    //    var DivInt = document.createElement("div");
    //    DivInt.id = DivId+"_interno";
    //    var style = document.createElement('style');
    //    style.type = 'text/css';
    //    style.innerHTML = '.videoWrapper { position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;}';
    //    style.innerHTML += '.videoWrapper object,';
    //    style.innerHTML += '.videoWrapper embed, { position: absolute; top: 0; left: 0; width: 100%; height: 100%;}';
    //    document.getElementsByTagName('head')[0].appendChild(style);
    //
    //
    //    document.getElementById(DivId).appendChild(DivInt);
    //    document.getElementById(DivInt.id).className = 'videoWrapper';
    //
    //    DivId = DivInt.id;
    if (document.getElementById(DivId).style.width == "") {
        var ancho = document.getElementById(DivId).style.maxWidth = document.getElementById(DivId).offsetWidth;
    } else {
        var ancho = document.getElementById(DivId).style.width.replace("px", "");
    }

    if ((iOS || Android) && (ancho > window.innerWidth)) document.getElementById(DivId).style.width = window.innerWidth + "px";
    if (typeof p === 'string') {
        var tmp = p;
        p = Object;
        p.url = tmp;
    }
    if (typeof p.live === 'undefined') p.live = false;
    if ((p.url.indexOf('encoder') == 0) || (p.url.indexOf('tvchile') == 0) || (p.url.indexOf('eventos') == 0) || (p.url.indexOf('tvnabierta') == 0) || (p.url.indexOf('24Hplay') == 0) || (p.url.indexOf('24hplay') == 0)) {
        p.live = true;
    }

    if ((p.url.indexOf('infantil') == 0) || (p.url.indexOf('musica') == 0) || (p.url.indexOf('tvnculto') == 0) ) {
            p.live = true;
    }

    if ((typeof p.autoPlay === 'undefined') && (typeof p.autostart === 'undefined')) {
        if (p.live) {
            p.autoPlay = 1;
            p.autostart = true;
        } else {
            p.autoPlay = 0;
            p.autostart = false;
        }
    } else if (typeof p.autoPlay === 'undefined') {
        if (p.autostart) {
            p.autoPlay = 1;
        } else {
            p.autoPlay = 0;
        }
    } else {
        if ((p.autoPlay === 1) || (p.autoPlay)) {
            p.autostart = true;
        } else {
            p.autostart = false;
        }
    }

    if (typeof p.promo === 'undefined') p.promo = 0;
    if (typeof p.duracion === 'undefined') p.duracion = 0;
// TODO VIDEO LLEVA PRERROLL
	p.duracion = 700;
	if (typeof p.tk === 'undefined') p.tk = "";
    if (typeof p.playerid === 'string') playerid = p.playerid;
    if (typeof p.midroll === 'undefined') p.midroll = "300";
    if (typeof p.baseurl === 'undefined') p.baseurl = "";
    if (typeof p.thumbs === 'undefined') p.thumbs = "";
    if (typeof p.rtsp === 'undefined') p.rtsp = "";
    if (typeof p.ipad === 'undefined') p.ipad = "";
    if (typeof p.adsvolume === 'undefined') p.adsvolume = 50;
    if (typeof p.volume === 'undefined') p.volume = 75;
    if (typeof p.html5 === 'undefined') p.html5 = false;
    if (typeof p.controls === 'undefined') p.controls = true;
    if (typeof p.playlistId === 'undefined') p.playlistId = '0';
    if (typeof p.relacionados === 'undefined') p.relacionados = '0';
    if (typeof p.stereomode === 'undefined' ) p.stereomode = '';

    if (typeof p.ads === 'undefined') p.ads = true;
    if ((typeof p.imagen === 'undefined') ) {
        p.imagen = strm + "/img/" + logo;
    } else {
        p.imagen.replace("http%3A//","https%3A//");
//        var result = doesFileExist(p.imagen);
//        if (result == false) p.imagen = strm + "/img/" + logo;        
    }

    p.imagen = escape(p.imagen);
    console.log("imagen="+p.imagen);
    if (p.url.indexOf("%3A") != -1) p.url = escape(p.url);

    if (p.url.indexOf("https://livestream.com/accounts") != -1) {
    	playlivestream(DivId,p);
    }

    if (p.url.indexOf("http://strm.24horas.cl") == 0) {
        var nombre = p.url.replace("http://strm.24horas.cl/", "");
        // Sacamos la extensiÃ³n
        if (nombre.indexOf(".")) {
            nombre = nombre.split('.')[0];
            p.url.replace(".mp4", "");
        }
        p.url = "//wow.tvn.cl:1935/mediacache/_definst_/smil://elemental24h/" + nombre + "/video.smil/playlist.m3u8";
    }

    if (p.url.indexOf("http://strm.tvn.cl") == 0) {
        var nombre = p.url.replace("http://strm.tvn.cl/", "")
        // Sacamos la extensiÃ³n
        if (nombre.indexOf(".")) {
            nombre = nombre.split('.')[0];
            p.url.replace(".mp4", "");
        }
        p.url = "//wow.tvn.cl:1935/mediacache/_definst_/smil://elemental/" + nombre + "/video.smil/playlist.m3u8";
    }

    //fix para youtube con live=true
    if ((p.url.indexOf("youtube.com") != -1) || (p.url.indexOf("youtu.be") != -1)) p.live=false;

	//fix para ustream con live=true
	if (p.url.indexOf("www.ustream.tv/embed") != -1) p.live=false;

    if (p.live) {
        track_atentus = false;
        if (p.url.indexOf('encoder3F') != -1) p.url= "encoderF";
        if (p.url.indexOf('encoder3D') != -1) p.url= "encoderD";
        if (p.url.indexOf('encoder3E') != -1) p.url= "encoderE"
        if (p.url.indexOf('encoder2W') != -1) p.url= "encoderX";
        if (p.url.indexOf('24Hplay') != -1) p.url = "encoderY";
		if (p.url.indexOf('24hplay') != -1) p.url = "encoderY";
        if (p.url.indexOf('tvchile') != -1) p.url = "encoder2";
        if (p.url.indexOf('tvnabierta') != -1) p.url = "encoder6";
        if (p.url.indexOf('eventos') != -1) p.url = "encoder7";
        if (p.url.indexOf('encoder2A') != -1) p.url = "encoder8";
        if (p.url.indexOf('encoder2B') != -1) p.url = "encoder9";
        if (p.url.indexOf('encoder1D') != -1) p.url = "encoder1";
        if (p.url.indexOf('encoderW24h') != -1) p.url ="encoderW";
        if (p.url.indexOf('musica') != -1) p.url = "encoderM";
        if (p.url.indexOf('promociones') != -1) p.url = "encoderP";
        if (p.url.indexOf('infantil') != -1) p.url = "encoderI";
        if (p.url.indexOf('tvnculto') != -1) p.url = "encoderC";
        if (p.url.indexOf('avances') != -1) p.url = "encoderA";

        if (p.url.indexOf('rtmp://wow1.tvn.cl/envivo/abierta') != -1) p.url = "encoder6";
        if (p.url.indexOf('rtmp://wow1.tvn.cl/envivo/imagen3') != -1) p.url = "encoder3";
        if (p.url.indexOf('rtmp://wow1.tvn.cl/envivo/imagen4') != -1) p.url = "encoder4";
        if (p.url.indexOf('rtmp://wow1.tvn.cl/envivo/imagen5') != -1) p.url = "encoder5";
        if (p.url.indexOf('rtmp://wow1.tvn.cl/envivo/') != -1) p.url = "encoder2";


        if (p.url.indexOf('encoder') == 0) {
            var randomnumber = Math.floor(Math.random() * 4) + 1;

            var ServerOld = 'wow' + randomnumber + '.tvn.cl:1935/tvn-live/';
            switch (p.url.substr(7, 1)) {
            	case "A":
                    var param = {
                        url: "59ba857579d29cf607557ff2",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "C":
                    var param = {
                        url: "591f67a4232da1260ac8c950",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "I":
                    var param = {
                        url: "5e74e53f1ab4eb073b19ef34",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "Y":
                    var param = {
                        url: "57d1a22064f5d85712b20dab",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "P":
                    var param = {
                        url: "58d425333168db5c07ff3bfa",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "M":
                    var param = {
                        url: "58cc0bf22d212a64177fddb1",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "W":
                    var param = {
                        url: "5653641561b4eba30a7e4929",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                 case "X":
                    var param = {
                        url: "59c3d83b7bd6237c26bca928 ",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "8":
                    var param = {
                        url: "555c9a7de50ac484167faa15",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "9":
                    var param = {
                        url: "555c9a91eb4886825b07ee7b",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "1":
                    var param = {
                        url: "5346f688db603a8b0dd9aa66",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "2":
                    var param = {
                        url: "533adcc949386ce765657d7c",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "3":
                    var param = {
                        url: "5346f5f2c1e6f5810b5b9df0",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "4":
                    var param = {
                        url: "53443c472c6e89675103cc4c",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "5":
                    var param = {
                        url: "5346f657c1e6f5810b5b9df3",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "6":
                    track_atentus = true;
                    var param = {
                        url: "57a498c4d7b86d600e5461cb",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);					
                    break;
                case "D":
                    track_atentus = true;
                    var param = {
                        url: "5aa03fe47d246901a936111c",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "7":
                    var param = {
                        url: "55defd629cbcc3a41481e79e",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "F":
                    var param = {
                        url: "5ae32332eab43401f679b4dc",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
                case "E":
                    var param = {
                        url: "5aaabe9e2c56420918184c6d",
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
                    break;
            }
        } else {
        	if ((p.url.indexOf(".m3u8") != -1) && (p.url.indexOf("mdstrm.com") != -1)) {
        		laurl = p.url.split("/");
        		elid = laurl[4].replace(".m3u8","");
        		var param = {
                        url: elid,
                        ads: p.ads,
                        imagen: p.imagen,
                        autostart: p.autostart,
                        volume: p.volume,
                        adsvolume: p.adsvolume,
                        html5: p.html5,
                        relacionados: p.relacionados,
                        controls: p.controls,
						custom_pre: p.custom_pre,
						tk: p.tk
                    };
                    playmdstrmlive(DivId, param);
        	} else {
            	if (p.url.indexOf(".m3u8") != -1) {            	
                	if (p.ads) {
                    	var param = {
                        	url: p.url,
                        	ipad: p.url,
                        	ads: p.ads,
                        	autostart: p.autostart,
                        	imagen: p.imagen,
                        	volume: p.volume,
                        	adsvolume: p.adsvolume,
                        	relacionados: p.relacionados,
                        	controls: p.controls,
							custom_pre: p.custom_pre,
							tk: p.tk
                    	};
                    	playHLSlive(DivId, param);
                	} else {
                    	var param = {
                        	url: p.url,
                        	ipad: p.url,
                        	ads: p.ads,
                        	autostart: true,
                        	imagen: p.imagen,
                        	volume: p.volume,
                        	adsvolume: p.adsvolume,
                        	relacionados: p.relacionados,
                        	controls: p.controls,
							custom_pre: p.custom_pre,
							tk: p.tk

                    	};
                    	playHLSlive_sp(DivId, param);
                	}
                }
            }
        }
    } else {

        // video reference de tvn.cl de la forma
        if ((p.url.indexOf("video.smil") != -1) && (p.url.indexOf(".m3u8") == -1)) {
            p.url = "//wow.tvn.cl:1935/mediacache/_definst_/smil:/" + p.url + "/playlist.m3u8";
            p.ipad = p.url;
        }

        // HLS genÃ©rico y arreglo si es de tvn.cl o 24horas.cl desde elemental
        if (p.url.indexOf(".m3u8") != -1) {
            // clipping de mediastream
            if (p.url.indexOf("//mdstrm.com/video") != -1) {
                p.url = p.url.replace("http:","");
                if (p.promo == 1) {
                    playMS_sp(DivId, p);
                } else if ((p.duracion == 0) || (p.duracion >= 60)) {
                    if (p.duracion <= 600) {
                        playMS_bs(DivId, p);
                    } else {
                        playMS(DivId, p);
                    }
                } else {
                    playMS_np(DivId, p);
                }

            } else {
                var Video = p.url;
                if (p.url.indexOf("wow.tvn.cl") != -1) {
                    var Server = 'tvn.mdstrm.com/mediacache/_definst_/';
					var Server = 'wow.tvn.cl:1935/mediacache/_definst_/';
                    if (geobloqueo) Server = 'tvn-vod2.mdstrm.com/mediacache/_definst_/';
                    var BaseURL = "http://" + Server;
                    Video = Video.replace("wow.tvn.cl:1935/mediacache/_definst_", Server);
                }
                var q = {
                    url: Video,
                    baseurl: BaseURL,
                    duracion: p.duracion,
                    autostart: p.autostart,
                    thumbs: p.thumbs,
                    ipad: Video,
                    rtsp: p.rtsp,
                    imagen: p.imagen,
                    midroll: p.midroll,
                    promo: p.promo,
                    controls: p.controls,
                    volume: p.volume,
                    adsvolume: p.adsvolume,
                    tk: p.tk
                }

                if ((q.url.indexOf("elemental") != -1) && (q.url.indexOf("video.smil") != -1)) {
                    var nombre = q.url.split('/')[9];
                    var folder = q.url.split('/')[8];
                    if (q.url.indexOf("elemental24h") != -1) {
                        q.rtsp = "rtsp://wow.tvn.cl:1935/mediacache/_definst_/mp4:/elemental24h/" + nombre + "/" + nombre.substr(0, nombre.length - 5) + "_240.mp4";
                    } else {
                        q.rtsp = "rtsp://wow.tvn.cl:1935/mediacache/_definst_/mp4:/elemental/" + nombre + "/" + nombre.substr(0, nombre.length - 5) + "_240.mp4";
                    }
                    q.thumbs = "//www.tvn.cl/archivos/" + folder + "/" + nombre + "/Imagenes/" + nombre + ".[index].jpg";
                }

                if (q.promo == 1) {
                    playHLS_sp(DivId, q);
                } else if ((q.duracion == 0) || (q.duracion >= 60)) {
                    if (q.duracion <= 600) {
                        playHLS_bs(DivId, q);
                    } else {
                        playHLS(DivId, q);
                    }
                } else {
                    playHLS_np(DivId, q);
                }

                //if (document.domain.indexOf("24horas")!=-1) {
                //    if ((q.duracion==0) || (q.duracion>=60)) {
                //        if (q.duracion<=300) {
                //            playHLS_bs(DivId,q);
                //        } else {
                //            playHLS(DivId,q);
                //        }
                //    } else {
                //        playHLS_np(DivId,q);
                //    }
                //} else {
                //    playHLS(DivId,q);
                //};

            }
        }

        // videos mp4
        if (p.url.indexOf(".mp4") != -1) {
            // videos rtmp de 24horas pasados a HLS
            if ((p.url.indexOf("rtmp") != -1) && (p.url.indexOf("wow1.tvn.cl") != -1)) {
                p.url = p.url.replace("mp4:", "");
                if (p.url.indexOf('vizrt2') != -1) {
                    p.url = 'mp4://24horas2/' + p.url.substring(p.url.lastIndexOf('/') + 1);
                } else {
                    p.url = 'mp4://24horas/' + p.url.substring(p.url.lastIndexOf('/') + 1);
                }
                // mediastream+TVN
                var Server = 'tvn.mdstrm.com/mediacache/_definst_/';
                if (geobloqueo) Server = 'tvn-vod2.mdstrm.com/mediacache/_definst_/';
                p.url.replace("rtmp://wow1.tvn.cl/", "http://tvn.mdstrm.com/mediacache/_definst_/");
                p.baseurl = "//" + Server;
                p.rtsp = "rtsp://wow.tvn.cl:1935/mediacache/_definst_/" + p.url;

                // solo TVN
                // var randomnumber=Math.floor(Math.random()*4)+1;
                // var Server = 'wow'+ randomnumber;
                // p.url.replace("rtmp://wow1.tvn.cl/","http://" + Server +".tvn.cl:1935/mediacache/_definst_/mp4:/");
                // p.baseurl = "http://" + Server +".tvn.cl:1935/mediacache/_definst_/mp4:/";

                p.url = p.baseurl + p.url + "/playlist.m3u8";
                p.ipad = p.url;

                if (p.promo == 1) {
                    playHLS_sp(DivId, p);
                } else if (document.domain.indexOf("24horas") != -1) {
                    if ((p.duracion == 0) || (p.duracion >= 60)) {
                        if (p.duracion <= 600) {
                            playHLS_bs(DivId, p);
                        } else {
                            playHLS(DivId, p);
                        }
                    } else {
                        playHLS_np(DivId, p);
                    }
                } else {
                    playHLS(DivId, p);
                }
            }
            // Videos Url de tvn.cl
            else if (p.url.indexOf("http") == -1) {
                var Server = 'tvn.mdstrm.com/mediacache/_definst_/';
                if (geobloqueo) Server = 'tvn-vod2.mdstrm.com/mediacache/_definst_/';
                p.baseurl = "http://" + Server;
                p.url = "//" + Server + "mp4:/" + p.url + "/playlist.m3u8";
                p.rtsp = "rtsp://wow.tvn.cl:1935/mediacache/_definst_/" + p.url;
                p.ipad = p.url;
                if (p.promo == 1) {
                    playHLS_sp(DivId, p);
                } else if (document.domain.indexOf("24horas") != -1) {
                    if ((p.duracion == 0) || (p.duracion >= 60)) {
                        if (p.duracion <= 600) {
                            playHLS_bs(DivId, p);
                        } else {
                            playHLS(DivId, p);
                        }
                    } else {
                        playHLS_np(DivId, p);
                    }
                } else {
                    playHLS(DivId, p);
                }
            } else {
                if (document.domain.indexOf("24horas") != -1) {
                    if ((p.duracion == 0) || (p.duracion >= 60)) {
                        if (p.duracion <= 600) {
                            playgenerico_bs(DivId, p);
                        } else {
                            playgenerico(DivId, p);
                        }
                    } else {
                        playgenerico_np(DivId, p);
                    }
                } else {
                    playgenerico(DivId, p);
                }
            }

        }

        // videos youtube solo con Id
        if ((p.url.indexOf("http:") == -1) && (p.url.indexOf(".") == -1)) {
            p.url = "https://www.youtube.com/watch?v=" + p.url;
        }

        // videos de youtube
        if ((p.url.indexOf("youtube.com") != -1) || (p.url.indexOf("youtu.be") != -1)) {
        		console.log("Youtube");
        		var ysplit;
    			var youtubeId;
    			if (p.url.indexOf("?") != -1) {
        			ysplit = p.url.split("=");
        			youtubeId = ysplit[ysplit.length - 1];
    			} else {
        			ysplit = p.url.split("/");
        			youtubeId = ysplit[ysplit.length - 1];
    			}

    			var ancho="100%";
    			var alto="100%";

    			if (document.domain.indexOf("tvn.cl") != -1) {
    				var DIV = document.getElementById(DivId);
					//    var alto = DIV.clientHeight;
    				var ancho = DIV.clientWidth;

    				if (typeof p.ancho != 'undefined') ancho = p.ancho;

					var alto = Math.round((ancho * 9 ) / 16);
    				if ((ancho === 0) || (alto === 0)) {
        				ancho = 670;
        				alto = 500;
    				}

    				ancho = ancho + "px";
    				alto = alto + "px";
    			}

    			console.log(ancho + "x" + alto);

    			if (!p.autostart) {
    				if (typeof ga == 'function') {
                		ga('send', 'event', 'Videos', 'Player', p.url, 1);
            		}
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='" + ancho + "' height='"+ alto + "' src='//www.youtube.com/embed/" + youtubeId + "' frameborder='0' allowfullscreen></iframe>";
        			document.getElementById(DivId).style.zIndex=2000;
        		} else {
        			if (typeof ga == 'function') {
                		ga('send', 'event', 'Videos', 'Player', p.url, 1);
            		}
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='" + ancho + "' height='"+ alto + "' src='//www.youtube.com/embed/" + youtubeId + "?autoplay=1' frameborder='0' allowfullscreen></iframe>";
        			document.getElementById(DivId).style.zIndex=2000;
        		}

            // if ((p.duracion == 0) || (p.duracion > 60)) {
            //     if (p.duracion <= 600) {
            //         playyoutube_bs(DivId, p);
            //     } else {
            //         playyoutube(DivId, p);
            //     }
            // } else {
            //     playyoutube_np(DivId, p);
            // }
            //if ((p.duracion==0) || (p.duracion>=60)) {
            //    if (p.duracion<=300) {
            //        playyoutube_bs(DivId,p);
            //    } else {
            //        playyoutube(DivId,p);
            //    }
            //} else {
            //    playyoutube_np(DivId,p);
            //}
        }

		if (p.url.indexOf("www.ustream.tv/embed")!=-1) {
    		console.log("Ustream");

			var ancho="100%";
			var alto="100%";

			if (document.domain.indexOf("tvn.cl") != -1) {
				var DIV = document.getElementById(DivId);
				//    var alto = DIV.clientHeight;
				var ancho = DIV.clientWidth;

				if (typeof p.ancho != 'undefined') ancho = p.ancho;

				var alto = Math.round((ancho * 9 ) / 16);
				if ((ancho === 0) || (alto === 0)) {
    				ancho = 670;
    				alto = 500;
				}

				ancho = ancho + "px";
				alto = alto + "px";
			}

			console.log(ancho + "x" + alto);

			if (!p.autostart) {
				if (typeof ga == 'function') {
            		ga('send', 'event', 'Videos', 'Player', p.url, 1);
        		}
    			document.getElementById(DivId).innerHTML = "<iframe title='ustream' width='" + ancho + "' height='"+ alto + "' src='" + p.url + "' frameborder='0' allowfullscreen></iframe>";
    			document.getElementById(DivId).style.zIndex=10000;
    		} else {
    			if (typeof ga == 'function') {
            		ga('send', 'event', 'Videos', 'Player', p.url, 1);
        		}
    			document.getElementById(DivId).innerHTML = "<iframe title='ustream' width='" + ancho + "' height='"+ alto + "' src='" + p.url + "' frameborder='0' allowfullscreen></iframe>";
    			document.getElementById(DivId).style.zIndex=10000;
    		}
		}

        if (p.url.indexOf("rtmp") == 0) {
            playgenerico(DivId, p);
        }
    }
}

//player Mediastream con preroll, midroll, overlay y postroll

var mads = {
                    DFP_preroll: unescape(Vast_Pre),
                    DFP_midroll: unescape(Vast_Mid),
                    DFP_overlay: unescape(Vast_Ov),
                    DFP_postroll: unescape(Vast_Pos)
};

var mads_npos = {
                    DFP_preroll: unescape(Vast_Pre),
                    DFP_midroll: unescape(Vast_Mid),
                    DFP_overlay: unescape(Vast_Ov)
};

var mads_np = {
                    DFP_midroll: unescape(Vast_Mid),
                    DFP_overlay: unescape(Vast_Ov),
                    DFP_postroll: unescape(Vast_Pos)
};

var mads_live = {
                preroll: unescape(Vast_Pre),
                overlay: unescape(Vast_Ov)
};

function playMS(DivId, p) {
    console.log(arguments.callee.name);

    if (JW_Player == 1) {
        playjw(DivId, p);
        return true;
    }


    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((!iOS) && (!p.autostart)) {
        conf.canvas = "";
        if (p.imagen.indexOf("logo_tvn.png") == -1) document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + '/img/' + logo + ') no-repeat 50pct 50pct';
    }

    conf.clip = {
        url: escape(p.url),
        ipadUrl: p.url,
        urlResolvers: ['httpstreaming', 'bwcheck'],
        provider: 'httpstreaming',
        scaling: 'fit',
        bufferLength: 20,
        baseUrl: p.baseurl,
        framesURL: p.thumbs,
        markers: [{
            start: p.midroll
        }]
    };
    conf.plugins.marcas = marcas;
    conf.plugins.httpstreaming = flashhls;
    conf.plugins.thumbs = thumbs;
    conf.plugins.bwcheck = bwcheck;
    conf.plugins.calidad = calidad;
    conf.plugins.analytics = analytics;
    conf.plugins.openAdStreamer = ova;
    conf.plugins.openAdStreamer.autoPlay = true;
    conf.plugins.openAdStreamer.ads.schedule[2].startTime = p.midroll;

    var togglePlayEvent = true;
	var togglePlayerEvent = true;
    var miTimer = 0;
    var detieneTimer = function() {
        window.clearInterval(miTimer);
        miTimer = 0;
    }

    if ((!Android) && (!iOS) && (OVP_Player == 0)) {
        console.log('Url => ' + unescape(p.url));
        if (typeof ga == 'function') {
            ga('send', 'event', 'Videos', 'Player', p.url, 1);
        }
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
    } else {
        var a_start = "";
        if (p.autostart) a_start = "&autoplay=true";
        var splitms = p.url.split('/');
        var MS_ID = splitms[splitms.length - 1].replace('.m3u8', '');

        var DIV = document.getElementById(DivId);
        var alto = DIV.clientHeight;
        var ancho = DIV.clientWidth;
        if ((ancho === 0) || (alto === 0)) {
 			var rect = DIV.getBoundingClientRect();
        	ancho = rect.width;
        	alto = eval(ancho*9/16);        	
        }
        console.log("ancho*alto= " + ancho + " * " + alto);
        
        if (!p.ads) mads = "";

        if (1 == 1) {
            if (p.playlistId != '0') playerid = playerid_playlist;
            if (p.relacionados != '0') playerid = playerid_relcat;
            var tiempo = 0;
            if (typeof PlayEvents[DivId] === 'undefined') PlayEvents[DivId] = new Object();
            Players[DivId] = new MediastreamPlayer(DivId, {
                width: ancho,
                height: alto,
                type: "media",
                id: MS_ID,
                volume: p.volume,
                adsVolume: p.adsvolume,
                ads: {
                    volume: p.adsvolume
                },
                debug: Debug,
                mse: p.html5,
                controls: p.controls,
                player: playerid,
                playlistId: p.playlistId,
                custom: mads,
                autoplay: p.autostart,
                access_token: p.tk,
                events: {
					onAdsStarted: function() {
//						detieneTimer();
//                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
//                            ga('send', 'event', 'Videos', 'AdsStarted', MS_ID, 1);
//                        }
					},
					onAdsComplete: function() {
                        if (miTimer == 0) miTimer = window.setInterval(function() {
                            tiempo += 1;
//							tiempo = Math.round(Players[DivId].tiempo()/60);
                            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                                ga('send', 'event', 'Videos', 'Minutos', MS_ID, 1);
                                ga('send', 'event', 'Videos', 'Minuto-' + tiempo, MS_ID, 1);
                            }
                        }, 60000);
                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                            ga('send', 'event', 'Videos', 'AdsCompleted', MS_ID, 1);
                        }
					},
					onAdsSkipped: function() {
                        if (miTimer == 0) miTimer = window.setInterval(function() {
                            tiempo += 1;
//							tiempo = Math.round(Players[DivId].tiempo()/60);
                            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                                ga('send', 'event', 'Videos', 'Minutos', MS_ID, 1);
                                ga('send', 'event', 'Videos', 'Minuto-' + tiempo, MS_ID, 1);
                            }
                        }, 60000);
                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                            ga('send', 'event', 'Videos', 'AdsSkipped', MS_ID, 1);
                        }
					},
                	onAdsImpression: function() {
                		console.log("Player Ad");
						detieneTimer();
                		tiempo = Math.round(Players[DivId].tiempo()/60);
                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
							ga('send', 'event', 'Videos', 'AdsImpressions', MS_ID, 1);
                            ga('send', 'event', 'Videos', 'AdsImpression-'+ tiempo, MS_ID, 1);
                        }
                        if (typeof PlayEvents[DivId].onAdsImpression == 'function') PlayEvents[DivId].onAdsImpression();
                	},
                    onPlayerReady: function() {
                        console.log("Player is ready");
                        setTimeout(function() {
                            if (!is_safari) Players[DivId].setAdsVolume(p.adsvolume);
							try {
								Players[DivId].c.width = "100%";
                            	Players[DivId].c.height = "100%";
							}
							catch (err) {
//								console.log(err);
							}
                        }, 2000);
						if (togglePlayerEvent) {
							if (typeof ga == 'function') {
                            	ga('send', 'event', 'Videos', 'Player', MS_ID, 1);
                        	}
							togglePlayerEvent = false;
						}
                        if (typeof PlayEvents[DivId].onPlayerReady == 'function') PlayEvents[DivId].onPlayerReady();
                    },
                    onPlay: function() {
                        console.log("Player Play");
                        if (typeof PlayEvents[DivId].onPlay == 'function') PlayEvents[DivId].onPlay();
                        if (miTimer == 0) miTimer = window.setInterval(function() {
                            tiempo += 1;
//							tiempo = Math.round(Players[DivId].tiempo()/60);
                            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                                ga('send', 'event', 'Videos', 'Minutos', MS_ID, 1);
                                ga('send', 'event', 'Videos', 'Minuto-' + tiempo, MS_ID, 1);
                            }
                        }, 60000);

                        if (togglePlayEvent) {
                            if (typeof ga == 'function') {
                                ga('send', 'event', 'Videos', 'Start', MS_ID, 1);
                            }
                            togglePlayEvent = false;
                        }
                    },
                    onVideoStop: function() {
                        console.log("Player Stop");
                        if (typeof PlayEvents[DivId].onVideoStop == 'function') PlayEvents[DivId].onVideoStop();
                        if (typeof ga == 'function') {
                            ga('send', 'event', 'Videos', 'Stop', MS_ID, 1);
                        }
                        detieneTimer();
                    },
                    onVideoEnd: function() {
                        console.log("Player End");
                        if (typeof PlayEvents[DivId].onVideoEnd == 'function') PlayEvents[DivId].onVideoEnd();
                        if (typeof ga == 'function') {
                            ga('send', 'event', 'Videos', 'End', MS_ID, 1);
                        }
                        detieneTimer();
                        togglePlayEvent = true;
                        tiempo = 0;
                    },
                    onVideoError: function() {
                        if (typeof PlayEvents[DivId].onVideoError == 'function') PlayEvents[DivId].onVideoError();
                    }
                }
            });
            Players[DivId].dondevoy = 0;
            Players[DivId].tiempo = function() {
                function asigna(t) {
                    Players[DivId].dondevoy=t;
                }
                Players[DivId].getCurrentTime(asigna);
                return Players[DivId].dondevoy;
            }

            Players[DivId].getPosition = function() {
            	return Players[DivId].tiempo();
            }


            Players[DivId].pause = function(value) {
            	if (value) {
            		Players[DivId].videoStop();
            	} else {
            		Players[DivId].videoPlay();
            	}
            }

            Players[DivId].getState = function() {
            	if (Players[DivId].isPlaying()) {
            		return 'playing'
            	} else {
            		return 'stopped'
            	}
            }

            Players[DivId].setControls = function(value) {
    		}

            Players[DivId].resize = function(x,y) {
            	console.log("VOD resize: " + x + " * " + y);
				var tmp = document.getElementById(DivId);				
            	if (tmp) {
            		var iFrame = tmp.getElementsByTagName("iframe")[0];
            		if (x.toString().indexOf('100%')!=-1) {
            			var rect = tmp.getBoundingClientRect();
			        	ancho = rect.width;
        				alto = eval(ancho*9/16);
	                	tmp.style.width = '100%';
	                	tmp.style.height = parseInt(alto) + 'px';
	                	iFrame.style.width = '100%';
	                	iFrame.style.height = parseInt(alto) + 'px';
	                } else {
	                	tmp.style.width = parseInt(x) + 'px';
	                	tmp.style.height = parseInt(y) + 'px';
	                	iFrame.style.width = parseInt(x) + 'px';
	                	iFrame.style.height = parseInt(y) + 'px';
	                }
            	}
            }
        } else {
            Players[DivId] = new MediastreamPlayer(DivId, {
                width: ancho,
                height: alto,
                type: "media",
                id: MS_ID,
                volume: p.volume,
                adsVolume: p.adsvolume,
                ads: {
                    volume: p.adsvolume
                },
                debug: Debug,
                mse: p.html5,
                controls: p.controls,
                player: playerid,
                access_token: p.tk,
                custom: {
                    DFP_preroll: unescape(Vast_Pre),
                    DFP_midroll: unescape(Vast_Mid),
                    DFP_overlay: unescape(Vast_Ov),
                    DFP_postroll: unescape(Vast_Pos)
                },
                autoplay: p.autostart
            });
        }

        //        document.getElementById(DivId).innerHTML = "<iframe src='//mdstrm.com/embed/" + MS_ID + "?custom.DFP_preroll=" + Vast_Pre + "&custom.DFP_overlay=" + Vast_Ov + "&custom.DFP_midroll=" + Vast_Mid + "&custom.DFP_postroll=" + Vast_Pos + a_start + "&volume=" + p.volume + "&mse=" + p.html5 + "&adsvolume=" + p.adsvolume + "&player=" + playerid + "' width='100%' height='100%' frameborder='0' allowfullscreen allowscriptaccess='always'></iframe>";
    }
}

function playMS_np(DivId, p) {
    console.log(arguments.callee.name);

    if (JW_Player == 1) {
        p.np = true;
        playjw(DivId, p);
        return true;
    }
    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((!iOS) && (!p.autostart)) {
        conf.canvas = "";
        if (p.imagen.indexOf("logo_tvn.png") == -1) document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + '/img/' + logo + ') no-repeat 50pct 50pct';
    }

    conf.clip = {
        url: escape(p.url),
        ipadUrl: p.url,
        urlResolvers: ['httpstreaming', 'bwcheck'],
        provider: 'httpstreaming',
        scaling: 'fit',
        bufferLength: 20,
        baseUrl: p.baseurl,
        framesURL: p.thumbs,
        markers: [{
            start: p.midroll
        }]
    };
    conf.plugins.marcas = marcas;
    conf.plugins.httpstreaming = flashhls;
    conf.plugins.thumbs = thumbs;
    conf.plugins.bwcheck = bwcheck;
    conf.plugins.calidad = calidad;
    conf.plugins.analytics = analytics;
    conf.plugins.openAdStreamer = ova_np;

    var togglePlayEvent = true;
	var togglePlayerEvent = true;
    var miTimer = 0;
    var detieneTimer = function() {
        window.clearInterval(miTimer);
        miTimer = 0;
    }
    
    if (!p.ads) mads_np = "";

    if ((!Android) && (!iOS) && (OVP_Player == 0)) {
        console.log('Url => ' + unescape(p.url));
        if (typeof ga == 'function') {
            ga('send', 'event', 'Videos', 'Player', p.url, 1);
        }
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
    } else {
        var a_start = "";
        if (p.autostart) a_start = "&autoplay=true";
        var splitms = p.url.split('/');
        var MS_ID = splitms[splitms.length - 1].replace('.m3u8', '');

        var DIV = document.getElementById(DivId);
        var alto = DIV.clientHeight;
        var ancho = DIV.clientWidth;
        if ((ancho === 0) || (alto === 0)) {
            ancho = 670;
            alto = 500;
        }

        if (1 == 1) {
            if (p.playlistId != '0') playerid = playerid_playlist;
            if (p.relacionados != '0') playerid = playerid_relcat;
            var tiempo = 0;
            if (typeof PlayEvents[DivId] === 'undefined') PlayEvents[DivId] = new Object();
            Players[DivId] = new MediastreamPlayer(DivId, {
                width: ancho,
                height: alto,
                type: "media",
                id: MS_ID,
                volume: p.volume,
                adsVolume: p.adsvolume,
                ads: {
                    volume: p.adsvolume
                },
                debug: Debug,
                mse: p.html5,
                controls: p.controls,
                player: playerid,
                playlistId: p.playlistId,
                custom: mads_np,
                autoplay: p.autostart,
                access_token: p.tk,
                events: {
					onAdsStarted: function() {
//						detieneTimer();
//                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
//                            ga('send', 'event', 'Videos', 'AdsStarted', MS_ID, 1);
//                        }
					},
					onAdsComplete: function() {
                        if (miTimer == 0) miTimer = window.setInterval(function() {
                            tiempo += 1;
//							tiempo = Math.round(Players[DivId].tiempo()/60);
                            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                                ga('send', 'event', 'Videos', 'Minutos', MS_ID, 1);
                                ga('send', 'event', 'Videos', 'Minuto-' + tiempo, MS_ID, 1);
                            }
                        }, 60000);
                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                            ga('send', 'event', 'Videos', 'AdsCompleted', MS_ID, 1);
                        }
					},
					onAdsSkipped: function() {
                        if (miTimer == 0) miTimer = window.setInterval(function() {
                            tiempo += 1;
//							tiempo = Math.round(Players[DivId].tiempo()/60);
                            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                                ga('send', 'event', 'Videos', 'Minutos', MS_ID, 1);
                                ga('send', 'event', 'Videos', 'Minuto-' + tiempo, MS_ID, 1);
                            }
                        }, 60000);
                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                            ga('send', 'event', 'Videos', 'AdsSkipped', MS_ID, 1);
                        }
					},
                	onAdsImpression: function() {
                		console.log("Player Ad");
						detieneTimer();
                		tiempo = Math.round(Players[DivId].tiempo()/60);
                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
							ga('send', 'event', 'Videos', 'AdsImpressions', MS_ID, 1);
                            ga('send', 'event', 'Videos', 'AdsImpression-'+ tiempo, MS_ID, 1);
                        }
                        if (typeof PlayEvents[DivId].onAdsImpression == 'function') PlayEvents[DivId].onAdsImpression();
                	},
                    onPlayerReady: function() {
                        console.log("Player is ready");
                        setTimeout(function() {
                            if (!is_safari) Players[DivId].setAdsVolume(p.adsvolume);
							try {
								Players[DivId].c.width = "100%";
                            	Players[DivId].c.height = "100%";
							}
							catch (err) {
								console.log(err);
							}
                        }, 2000);
						if (togglePlayerEvent) {
							if (typeof ga == 'function') {
                            	ga('send', 'event', 'Videos', 'Player', MS_ID, 1);
                        	}
							togglePlayerEvent = false;
						}
                        if (typeof PlayEvents[DivId].onPlayerReady == 'function') PlayEvents[DivId].onPlayerReady();
                    },
                    onPlay: function() {
                        console.log("Player Play");
                        if (typeof PlayEvents[DivId].onPlay == 'function') PlayEvents[DivId].onPlay();
                        if (miTimer == 0) miTimer = window.setInterval(function() {
                            tiempo += 1;
//							tiempo = Math.round(Players[DivId].tiempo()/60);
                            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                                ga('send', 'event', 'Videos', 'Minutos', MS_ID, 1);
                                ga('send', 'event', 'Videos', 'Minuto-' + tiempo, MS_ID, 1);
                            }
                        }, 60000);

                        if (togglePlayEvent) {
                            if (typeof ga == 'function') {
                                ga('send', 'event', 'Videos', 'Start', MS_ID, 1);
                            }
                            togglePlayEvent = false;
                        }
                    },
                    onVideoStop: function() {
                        console.log("Player Stop");
                        if (typeof PlayEvents[DivId].onVideoStop == 'function') PlayEvents[DivId].onVideoStop();
                        if (typeof ga == 'function') {
                            ga('send', 'event', 'Videos', 'Stop', MS_ID, 1);
                        }
                        detieneTimer();
                    },
                    onVideoEnd: function() {
                        console.log("Player End");
                        if (typeof PlayEvents[DivId].onVideoEnd == 'function') PlayEvents[DivId].onVideoEnd();
                        if (typeof ga == 'function') {
                            ga('send', 'event', 'Videos', 'End', MS_ID, 1);
                        }
                        detieneTimer();
                        togglePlayEvent = true;
                        tiempo = 0;
                    },
                    onVideoError: function() {
                        if (typeof PlayEvents[DivId].onVideoError == 'function') PlayEvents[DivId].onVideoError();
                    }
                }
            });
            Players[DivId].dondevoy = 0;
            Players[DivId].tiempo = function() {
                function asigna(t) {
                    Players[DivId].dondevoy=t;
                }
                Players[DivId].getCurrentTime(asigna);
                return Players[DivId].dondevoy;
            }

            Players[DivId].pause = function() {
            	Players[DivId].videoStop();
            }

            Players[DivId].resize = function(x,y) {
				var tmp = document.getElementById(DivId);				
            	if (tmp) {
            		var iFrame = tmp.getElementsByTagName("iframe")[0];
            		if (x.indexOf('100%')!=-1) {
	                	tmp.style.width = '100%';
	                	tmp.style.height = parseInt(y) + 'px';
	                	iFrame.style.width = '100%';
	                	iFrame.style.height = parseInt(y) + 'px';
	                } else {
	                	tmp.style.width = parseInt(x) + 'px';
	                	tmp.style.height = parseInt(y) + 'px';
	                	iFrame.style.width = parseInt(x) + 'px';
	                	iFrame.style.height = parseInt(y) + 'px';
	                }
            	}
            }
        } else {
            Players[DivId] = new MediastreamPlayer(DivId, {
                width: ancho,
                height: alto,
                type: "media",
                id: MS_ID,
                volume: p.volume,
                adsVolume: p.adsvolume,
                ads: {
                    volume: p.adsvolume
                },
                debug: Debug,
                mse: p.html5,
                controls: p.controls,
                player: playerid,
                access_token: p.tk,
                custom: {
                    DFP_preroll: unescape('no'),
                    DFP_midroll: unescape(Vast_Mid),
                    DFP_overlay: unescape(Vast_Ov),
                    DFP_postroll: unescape(Vast_Pos)
                },
                autoplay: p.autostart
            });
        }
        //        document.getElementById(DivId).innerHTML = "<iframe src='//mdstrm.com/embed/" + MS_ID + "?custom.DFP_preroll=no&custom.DFP_overlay=" + Vast_Ov + "&custom.DFP_midroll=" + Vast_Mid + "&custom.DFP_postroll=" + Vast_Pos + a_start + "&volume=" + p.volume + "&mse=" + p.html5 + "&adsvolume=" + p.adsvolume + "&player=" + playerid + "' width='100%' height='100%' frameborder='0' allowfullscreen allowscriptaccess='always'></iframe>";
    }

}

function playMS_bs(DivId, p) {
    console.log(arguments.callee.name);

    if (JW_Player == 1) {
        playjw(DivId, p);
        return true;
    }

    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((!iOS) && (!p.autostart)) {
        conf.canvas = "";
        if (p.imagen.indexOf("logo_tvn.png") == -1) document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + '/img/' + logo + ') no-repeat 50pct 50pct';
    }

    conf.clip = {
        url: escape(p.url),
        ipadUrl: p.url,
        urlResolvers: ['httpstreaming', 'bwcheck'],
        provider: 'httpstreaming',
        scaling: 'fit',
        bufferLength: 20,
        baseUrl: p.baseurl,
        framesURL: p.thumbs,
        markers: [{
            start: p.midroll
        }]
    };
    conf.plugins.marcas = marcas;
    conf.plugins.httpstreaming = flashhls;
    conf.plugins.thumbs = thumbs;
    conf.plugins.bwcheck = bwcheck;
    conf.plugins.calidad = calidad;
    conf.plugins.analytics = analytics;
    conf.plugins.openAdStreamer = ova_bs;
    conf.plugins.openAdStreamer.autoPlay = true;
    conf.plugins.openAdStreamer.ads.schedule[2].startTime = p.midroll;

    var togglePlayEvent = true;
	var togglePlayerEvent = true;
    var miTimer = 0;
    var detieneTimer = function() {
        window.clearInterval(miTimer);
        miTimer = 0;
    }
    
    if (!p.ads) mads = "";

    if ((!Android) && (!iOS) && (OVP_Player == 0)) {
        console.log('Url => ' + unescape(p.url));
        if (typeof ga == 'function') {
            ga('send', 'event', 'Videos', 'Player', p.url, 1);
        }
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
    } else {
        //            var DIV = document.getElementById(DivId);
        //            var alto = DIV.clientHeight;
        //            var ancho = DIV.clientWidth;
        //            if ((ancho===0) || (alto===0)) {
        //                ancho=670;
        //                alto=500;
        //            }
        //
        //
        var a_start = "";
        if (p.autostart) a_start = "&autoplay=true";
        var splitms = p.url.split('/');
        var MS_ID = splitms[splitms.length - 1].replace('.m3u8', '');

        var DIV = document.getElementById(DivId);
        var alto = DIV.clientHeight;
        var ancho = DIV.clientWidth;
        if ((ancho === 0) || (alto === 0)) {
            ancho = 670;
            alto = 500;
        }


        if (1 == 1) {
            if (p.playlistId != '0') playerid = playerid_playlist;
            if (p.relacionados != '0') playerid = playerid_relcat;;
            var tiempo = 0;
            if (typeof PlayEvents[DivId] === 'undefined') PlayEvents[DivId] = new Object();
            Players[DivId] = new MediastreamPlayer(DivId, {
                width: ancho,
                height: alto,
                type: "media",
                id: MS_ID,
                volume: p.volume,
                adsVolume: p.adsvolume,
                ads: {
                    volume: p.adsvolume
                },
                debug: Debug,
                mse: p.html5,
                controls: p.controls,
                player: playerid,
                playlistId: p.playlistId,
                custom: mads,
                autoplay: p.autostart,
                access_token: p.tk,
                events: {
					onAdsStarted: function() {
//						detieneTimer();
//                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
//                            ga('send', 'event', 'Videos', 'AdsStarted', MS_ID, 1);
//                        }
					},
					onAdsComplete: function() {
                        if (miTimer == 0) miTimer = window.setInterval(function() {
                            tiempo += 1;
//							tiempo = Math.round(Players[DivId].tiempo()/60);
                            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                                ga('send', 'event', 'Videos', 'Minutos', MS_ID, 1);
                                ga('send', 'event', 'Videos', 'Minuto-' + tiempo, MS_ID, 1);
                            }
                        }, 60000);
                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                            ga('send', 'event', 'Videos', 'AdsCompleted', MS_ID, 1);
                        }
					},
					onAdsSkipped: function() {
                        if (miTimer == 0) miTimer = window.setInterval(function() {
                            tiempo += 1;
//							tiempo = Math.round(Players[DivId].tiempo()/60);
                            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                                ga('send', 'event', 'Videos', 'Minutos', MS_ID, 1);
                                ga('send', 'event', 'Videos', 'Minuto-' + tiempo, MS_ID, 1);
                            }
                        }, 60000);
                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                            ga('send', 'event', 'Videos', 'AdsSkipped', MS_ID, 1);
                        }
					},
                	onAdsImpression: function() {
                		console.log("Player Ad");
						detieneTimer();
                		tiempo = Math.round(Players[DivId].tiempo()/60);
                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
							ga('send', 'event', 'Videos', 'AdsImpressions', MS_ID, 1);
                            ga('send', 'event', 'Videos', 'AdsImpression-'+ tiempo, MS_ID, 1);
                        }
                        if (typeof PlayEvents[DivId].onAdsImpression == 'function') PlayEvents[DivId].onAdsImpression();
                	},
                    onPlayerReady: function() {
                        console.log("Player is ready");
                        setTimeout(function() {
                            if (!is_safari) Players[DivId].setAdsVolume(p.adsvolume);
							try {
								Players[DivId].c.width = "100%";
                            	Players[DivId].c.height = "100%";
							}
							catch (err) {
								console.log(err);
							}
                        }, 2000);
						if (togglePlayerEvent) {
							if (typeof ga == 'function') {
                            	ga('send', 'event', 'Videos', 'Player', MS_ID, 1);
                        	}
							togglePlayerEvent = false;
						}
                        if (typeof PlayEvents[DivId].onPlayerReady == 'function') PlayEvents[DivId].onPlayerReady();
                    },
                    onPlay: function() {
                        console.log("Player Play " + miTimer);
                        if (typeof PlayEvents[DivId].onPlay == 'function') PlayEvents[DivId].onPlay();
                        if (miTimer == 0) miTimer = window.setInterval(function() {
                            tiempo += 1;
//							tiempo = Math.round(Players[DivId].tiempo()/60);
                            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                                ga('send', 'event', 'Videos', 'Minutos', MS_ID, 1);
                                ga('send', 'event', 'Videos', 'Minuto-' + tiempo, MS_ID, 1);
                            }
                        }, 60000);

                        if (togglePlayEvent) {
                            if (typeof ga == 'function') {
                                ga('send', 'event', 'Videos', 'Start', MS_ID, 1);
                            }
                            togglePlayEvent = false;
                        }

                    },
                    onVideoStop: function() {
                        console.log("Player Stop");
                        if (typeof PlayEvents[DivId].onVideoStop == 'function') PlayEvents[DivId].onVideoStop();
                        if (typeof ga == 'function') {
                            ga('send', 'event', 'Videos', 'Stop', MS_ID, 1);
                        }
                        detieneTimer();
                    },
                    onVideoEnd: function() {
                        console.log("Player End");
                        if (typeof PlayEvents[DivId].onVideoEnd == 'function') PlayEvents[DivId].onVideoEnd();
                        if (typeof ga == 'function') {
                            ga('send', 'event', 'Videos', 'End', MS_ID, 1);
                        }
                        detieneTimer();
                        togglePlayEvent = true;
                        tiempo = 0;
                    },
                    onVideoError: function() {
                        if (typeof PlayEvents[DivId].onVideoError == 'function') PlayEvents[DivId].onVideoError();
                    }
                }
            });
            Players[DivId].dondevoy = 0;
            Players[DivId].tiempo = function() {
                function asigna(t) {
                    Players[DivId].dondevoy=t;
                }
                Players[DivId].getCurrentTime(asigna);
                return Players[DivId].dondevoy;
            }

            Players[DivId].pause = function() {
            	Players[DivId].videoStop();
            }

            Players[DivId].resize = function(x,y) {
				var tmp = document.getElementById(DivId);				
            	if (tmp) {
            		var iFrame = tmp.getElementsByTagName("iframe")[0];
            		if (x.indexOf('100%')!=-1) {
	                	tmp.style.width = '100%';
	                	tmp.style.height = parseInt(y) + 'px';
	                	iFrame.style.width = '100%';
	                	iFrame.style.height = parseInt(y) + 'px';
	                } else {
	                	tmp.style.width = parseInt(x) + 'px';
	                	tmp.style.height = parseInt(y) + 'px';
	                	iFrame.style.width = parseInt(x) + 'px';
	                	iFrame.style.height = parseInt(y) + 'px';
	                }
            	}
            }
        } else {
            Players[DivId] = new MediastreamPlayer(DivId, {
                width: ancho,
                height: alto,
                type: "media",
                id: MS_ID,
                volume: p.volume,
                adsVolume: p.adsvolume,
                ads: {
                    volume: p.adsvolume
                },
                debug: Debug,
                mse: p.html5,
                controls: p.controls,
                player: playerid,
                access_token: p.tk,
                custom: {
                    DFP_preroll: unescape(Vast_Pre),
                    DFP_midroll: unescape(Vast_Mid),
                    DFP_overlay: unescape(Vast_Ov),
                    DFP_postroll: unescape(Vast_Pos)
                },
                autoplay: p.autostart
            });
        }

        //        document.getElementById(DivId).innerHTML = "<iframe src='//mdstrm.com/embed/" + MS_ID + "?custom.DFP_preroll=" + Vast_Pre + "&custom.DFP_overlay=" + Vast_Ov + "&custom.DFP_midroll=" + Vast_Mid + "&custom.DFP_postroll=" + Vast_Pos + a_start + "&volume=" + p.volume + "&mse=" + p.html5 + "&adsvolume=" + p.adsvolume + "&player=" + playerid +  "' width='100%' height='100%' frameborder='0' allowfullscreen allowscriptaccess='always'></iframe>";
    }
}

function playMS_sp(DivId, p) {
    console.log(arguments.callee.name);

    if (JW_Player == 1) {
        playjw(DivId, p);
        return true;
    }

    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((!iOS) && (!p.autostart)) {
        conf.canvas = "";
        if (p.imagen.indexOf("logo_tvn.png") == -1) document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + '/img/' + logo + ') no-repeat 50pct 50pct';
    }

    conf.clip = {
        url: escape(p.url),
        ipadUrl: p.url,
        urlResolvers: ['httpstreaming', 'bwcheck'],
        provider: 'httpstreaming',
        scaling: 'fit',
        bufferLength: 20,
        baseUrl: p.baseurl,
        framesURL: p.thumbs,
        markers: [{
            start: p.midroll
        }]
    };
    conf.plugins.marcas = marcas;
    conf.plugins.httpstreaming = flashhls;
    conf.plugins.thumbs = thumbs;
    conf.plugins.bwcheck = bwcheck;
    conf.plugins.calidad = calidad;
    conf.plugins.analytics = analytics;
    conf.plugins.openAdStreamer = ova;
    conf.plugins.openAdStreamer.autoPlay = true;
    conf.plugins.openAdStreamer.ads.schedule[2].startTime = p.midroll;

    var togglePlayEvent = true;
	var togglePlayerEvent = true;
    var miTimer = 0;
    var detieneTimer = function() {
        window.clearInterval(miTimer);
        miTimer = 0;
    }

    if ((!Android) && (!iOS)) {
        console.log('Url => ' + unescape(p.url));
        if (typeof ga == 'function') {
            ga('send', 'event', 'Videos', 'Player', p.url, 1);
        }
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
    } else {
        var a_start = "";
        if (p.autostart) a_start = "&autoplay=true";
        var splitms = p.url.split('/');
        var MS_ID = splitms[splitms.length - 1].replace('.m3u8', '');

        var DIV = document.getElementById(DivId);
        var alto = DIV.clientHeight;
        var ancho = DIV.clientWidth;
        if ((ancho === 0) || (alto === 0)) {
            ancho = 670;
            alto = 500;
        }
        var togglePlayEvent = true;
        
        if (!p.ads) mads_npos = "";

        if (1 == 1) {
            if (p.playlistId != '0') playerid = playerid_playlist;
            if (p.relacionados != '0') playerid = playerid_relcat;
            var tiempo = 0;
            if (typeof PlayEvents[DivId] === 'undefined') PlayEvents[DivId] = new Object();
            Players[DivId] = new MediastreamPlayer(DivId, {
                width: ancho,
                height: alto,
                type: "media",
                id: MS_ID,
                volume: p.volume,
                adsVolume: p.adsvolume,
                ads: {
                    volume: p.adsvolume
                },
                debug: Debug,
                mse: p.html5,
                controls: p.controls,
                player: playerid,
                playlistId: p.playlistId,
                custom: mads_npos,
                autoplay: p.autostart,
                access_token: p.tk,
                events: {
					onAdsStarted: function() {
//						detieneTimer();
//                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
//                            ga('send', 'event', 'Videos', 'AdsStarted', MS_ID, );
//                        }
					},
					onAdsComplete: function() {
                        if (miTimer == 0) miTimer = window.setInterval(function() {
                            tiempo += 1;
//							tiempo = Math.round(Players[DivId].tiempo()/60);
                            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                                ga('send', 'event', 'Videos', 'Minutos', MS_ID, 1);
                                ga('send', 'event', 'Videos', 'Minuto-' + tiempo, MS_ID, 1);
                            }
                        }, 60000);
                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                            ga('send', 'event', 'Videos', 'AdsCompleted', MS_ID, 1);
                        }
					},
					onAdsSkipped: function() {
                        if (miTimer == 0) miTimer = window.setInterval(function() {
                            tiempo += 1;
//							tiempo = Math.round(Players[DivId].tiempo()/60);
                            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                                ga('send', 'event', 'Videos', 'Minutos', MS_ID, 1);
                                ga('send', 'event', 'Videos', 'Minuto-' + tiempo, MS_ID, 1);
                            }
                        }, 60000);
                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                            ga('send', 'event', 'Videos', 'AdsSkipped', MS_ID, 1);
                        }
					},
                	onAdsImpression: function() {
                		console.log("Player Ad");
						detieneTimer()
                		tiempo = Math.round(Players[DivId].tiempo()/60);
                		if ((typeof ga == 'function') && (!isNaN(tiempo))) {
							ga('send', 'event', 'Videos', 'AdsImpressions', MS_ID, 1);
                            ga('send', 'event', 'Videos', 'AdsImpression-'+ tiempo, MS_ID, 1);
                        }
                        if (typeof PlayEvents[DivId].onAdsImpression == 'function') PlayEvents[DivId].onAdsImpression();
                	},
                    onPlayerReady: function() {
                        console.log("Player is ready");
                        setTimeout(function() {
                            if (!is_safari)Players[DivId].setAdsVolume(p.adsvolume);
							try {
								Players[DivId].c.width = "100%";
                            	Players[DivId].c.height = "100%";
							}
							catch (err) {
								console.log(err);
							}
                        }, 2000);
						if (togglePlayerEvent) {
							if (typeof ga == 'function') {
                            	ga('send', 'event', 'Videos', 'Player', MS_ID, 1);
                        	}
							togglePlayerEvent = false;
						}
                        if (typeof PlayEvents[DivId].onPlayerReady == 'function') PlayEvents[DivId].onPlayerReady();
                    },
                    onPlay: function() {
                        console.log("Player Play");
                        if (typeof PlayEvents[DivId].onPlay == 'function') PlayEvents[DivId].onPlay();
                        if (miTimer == 0) miTimer = window.setInterval(function() {
                            tiempo += 1;
//							tiempo = Math.round(Players[DivId].tiempo()/60);
                            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                                ga('send', 'event', 'Videos', 'Minutos', MS_ID, 1);
                                ga('send', 'event', 'Videos', 'Minuto-' + tiempo, MS_ID, 1);
                            }
                        }, 60000);

                        if (togglePlayEvent) {
                            if (typeof ga == 'function') {
                                ga('send', 'event', 'Videos', 'Start', MS_ID, 1);
                            }
                            togglePlayEvent = false;
                        }
                    },
                    onVideoStop: function() {
                        console.log("Player Stop");
                        if (typeof PlayEvents[DivId].onVideoStop == 'function') PlayEvents[DivId].onVideoStop();
                        if (typeof ga == 'function') {
                            ga('send', 'event', 'Videos', 'Stop', MS_ID, 1);
                        }
                        detieneTimer();
                    },
                    onVideoEnd: function() {
                        console.log("Player End");
                        if (typeof PlayEvents[DivId].onVideoEnd == 'function') PlayEvents[DivId].onVideoEnd();
                        if (typeof ga == 'function') {
                            ga('send', 'event', 'Videos', 'End', MS_ID, 1);
                        }
                        detieneTimer();
                        togglePlayEvent = true;
                        tiempo = 0;
                    },
                    onVideoError: function() {
                        if (typeof PlayEvents[DivId].onVideoError == 'function') PlayEvents[DivId].onVideoError();
                    }
                }
            });
            Players[DivId].dondevoy = 0;
            Players[DivId].tiempo = function() {
                function asigna(t) {
                    Players[DivId].dondevoy=t;
                }
                Players[DivId].getCurrentTime(asigna);
                return Players[DivId].dondevoy;
            }

            Players[DivId].pause = function() {
            	Players[DivId].videoStop();
            }

            Players[DivId].resize = function(x,y) {
				var tmp = document.getElementById(DivId);				
            	if (tmp) {
            		var iFrame = tmp.getElementsByTagName("iframe")[0];
            		if (x.indexOf('100%')!=-1) {
	                	tmp.style.width = '100%';
	                	tmp.style.height = parseInt(y) + 'px';
	                	iFrame.style.width = '100%';
	                	iFrame.style.height = parseInt(y) + 'px';
	                } else {
	                	tmp.style.width = parseInt(x) + 'px';
	                	tmp.style.height = parseInt(y) + 'px';
	                	iFrame.style.width = parseInt(x) + 'px';
	                	iFrame.style.height = parseInt(y) + 'px';
	                }
            	}
            }
        } else {
            Players[DivId] = new MediastreamPlayer(DivId, {
                width: ancho,
                height: alto,
                type: "media",
                id: MS_ID,
                volume: p.volume,
                               adsVolume: p.adsvolume,
                ads: {
                    volume: p.adsvolume
                },
                debug: Debug,
                mse: p.html5,
                controls: p.controls,
                player: playerid,
                access_token: p.tk,
                custom: {
                    DFP_preroll: unescape(Vast_Pre),
                    DFP_midroll: unescape(Vast_Mid),
                    DFP_overlay: unescape(Vast_Ov),
                    DFP_postroll: unescape(Vast_Pos)
                },
                autoplay: p.autostart
            });
        }

        //        document.getElementById(DivId).innerHTML = "<iframe src='//mdstrm.com/embed/" + MS_ID + "?custom.DFP_preroll=" + Vast_Pre + "&custom.DFP_overlay=" + Vast_Ov + "&custom.DFP_midroll=" + Vast_Mid + "&custom.DFP_postroll=" + Vast_Pos + a_start + "&volume=" + p.volume + "&mse=" + p.html5 + "&adsvolume=" + p.adsvolume + "&player=" + playerid + "' width='100%' height='100%' frameborder='0' allowfullscreen allowscriptaccess='always'></iframe>";;
    }

}

//player HLS con preroll, midroll, overlay, postroll
function playHLS(DivId, p) {
    console.log(arguments.callee.name);
    var conf = JSON.parse(JSON.stringify(confcomun));

    if (JW_Player == 1) {
        playjw(DivId, p);
        return true;
    }

    if ((!iOS) && (!p.autostart)) {
        conf.canvas = "";
        if (p.imagen.indexOf("logo_tvn.png") == -1) document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + '/img/' + logo + ') no-repeat 50pct 50pct';
    }

    conf.clip = {
        url: escape(p.url),
        ipadUrl: p.url,
        urlResolvers: ['httpstreaming', 'bwcheck'],
        provider: 'httpstreaming',
        scaling: 'fit',
        bufferLength: 20,
        baseUrl: p.baseurl,
        framesURL: p.thumbs,
        markers: [{
            start: p.midroll
        }]
    };
    conf.plugins.marcas = marcas;
    conf.plugins.httpstreaming = httpstreaming;
    conf.plugins.thumbs = thumbs;
    conf.plugins.bwcheck = bwcheck;
    conf.plugins.calidad = calidad;
    conf.plugins.analytics = analytics;
    conf.plugins.openAdStreamer = ova;
    conf.plugins.openAdStreamer.autoPlay = true;
    conf.plugins.openAdStreamer.ads.schedule[2].startTime = p.midroll;

    if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }
    if (!Android) {
        console.log('Url => ' + unescape(p.url));
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
    } else {
        if (AndroidVersion >= 3) {
            var videoTag = "<video src='" + p.ipad + "' height='100%' width='100%' type='application/vnd.apple.mpegURL' controls></video>";
            document.getElementById(DivId).innerHTML = videoTag;
            //document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.ipad + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        } else {
            document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.rtsp + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        }
    }
}

//player HLS solo overlay, postroll
function playHLS_np(DivId, p) {
    console.log(arguments.callee.name);

    if (JW_Player == 1) {
        p.np = true;
        playjw(DivId, p);
        return true;
    }

    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((!iOS) && (!p.autostart)) {
        conf.canvas = "";
        if (p.imagen.indexOf("logo_tvn.png") == -1) document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + "/img/" + logo + ') no-repeat 50pct 50pct';
    }
    conf.clip = {
        url: escape(p.url),
        ipadUrl: p.url,
        urlResolvers: ['httpstreaming', 'bwcheck'],
        provider: 'httpstreaming',
        scaling: 'fit',
        autoBuffering: true,
        bufferLength: 20,
        baseUrl: p.baseurl,
        framesURL: p.thumbs
    };
    conf.plugins.httpstreaming = httpstreaming;
    conf.plugins.thumbs = thumbs;
    conf.plugins.bwcheck = bwcheck;
    conf.plugins.calidad = calidad;
    conf.plugins.analytics = analytics;
    conf.plugins.openAdStreamer = ova_np;

    if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }
    if (!Android) {
        console.log('Url => ' + unescape(p.url));
        player = $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();

    } else {
        if (AndroidVersion >= 3) {
            var videoTag = "<video src='" + p.ipad + "' height='100%' width='100%' type='application/vnd.apple.mpegURL' controls></video>";
            document.getElementById(DivId).innerHTML = videoTag;
            //            document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.ipad + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        } else {
            document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.rtsp + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        }
    }
}

//player HLS con preroll y boton saltar, overlay, postroll
function playHLS_bs(DivId, p) {
    console.log(arguments.callee.name);
    var conf = JSON.parse(JSON.stringify(confcomun));

    if (JW_Player == 1) {
        playjw(DivId, p);
        return true;
    }


    if ((!iOS) && (!p.autostart)) {
        conf.canvas = "";
        if (p.imagen.indexOf("logo_tvn.png") == -1) document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + "/img/" + logo + ') no-repeat 50pct 50pct';
    }
    conf.clip = {
        url: escape(p.url),
        ipadUrl: p.url,
        urlResolvers: ['httpstreaming', 'bwcheck'],
        provider: 'httpstreaming',
        scaling: 'fit',
        autoBuffering: true,
        bufferLength: 20,
        baseUrl: p.baseurl,
        framesURL: p.thumbs
    };
    conf.plugins.httpstreaming = httpstreaming;
    conf.plugins.thumbs = thumbs;
    conf.plugins.bwcheck = bwcheck;
    conf.plugins.calidad = calidad;
    conf.plugins.analytics = analytics;
    conf.plugins.openAdStreamer = ova_bs;
    conf.plugins.openAdStreamer.autoPlay = true;

    if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }
    if (!Android) {
        console.log('Url => ' + unescape(p.url));
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
    } else {
        if (AndroidVersion >= 3) {
            var videoTag = "<video src='" + p.ipad + "' height='100%' width='100%' type='application/vnd.apple.mpegURL' controls></video>";
            document.getElementById(DivId).innerHTML = videoTag;
            //document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.ipad + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        } else {
            document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.rtsp + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        }
    }
}

//player HLS sin publicidad
function playHLS_sp(DivId, p) {
    console.log(arguments.callee.name);

    if (JW_Player == 1) {
        playjw(DivId, p);
        return true;
    }

    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((!iOS) && (!p.autostart)) {
        conf.canvas = "";
        if (p.imagen.indexOf("logo_tvn.png") == -1) document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + '/img/' + logo + ') no-repeat 50pct 50pct';
    }

    conf.clip = {
        url: escape(p.url),
        ipadUrl: p.url,
        urlResolvers: ['httpstreaming', 'bwcheck'],
        provider: 'httpstreaming',
        scaling: 'fit',
        bufferLength: 20,
        baseUrl: p.baseurl,
        framesURL: p.thumbs,
        markers: [{
            start: 300
        }]
    };
    //    conf.plugins.marcas = marcas;
    conf.plugins.httpstreaming = httpstreaming;
    conf.plugins.thumbs = thumbs;
    conf.plugins.bwcheck = bwcheck;
    conf.plugins.calidad = calidad;
    conf.plugins.analytics = analytics;

    if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }
    if (!Android) {
        console.log('Url => ' + unescape(p.url));
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
    } else {
        if (AndroidVersion >= 3) {
            var videoTag = "<video src='" + p.ipad + "' height='100%' width='100%' type='application/vnd.apple.mpegURL' controls></video>";
            document.getElementById(DivId).innerHTML = videoTag;
            //document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.ipad + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        } else {
            document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.rtsp + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        }
    }
}

//player urls http y rtmp con preroll, overlay, postroll
function playgenerico(DivId, p) {
    console.log(arguments.callee.name);
    var conf = JSON.parse(JSON.stringify(confcomun));

    if (JW_Player == 1) {
        playjw(DivId, p);
        return true;
    }

    if ((p.imagen.indexOf("logo_tvn.png") == -1) && (!iOS) && (!p.autostart)) {
        conf.canvas = "";
        document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + "/img/" + logo + ') no-repeat 50pct 50pct';
    }
    conf.clip = {
        scaling: 'scale',
        autoBuffering: true,
        bufferLength: 20
    };
    conf.playlist = [{
        "url": p.url,
        "scaling": "scale",
        "duration": p.duracion
    }];
    conf.plugins.rtmp = rtmp;
    conf.plugins.rtmpInstream = rtmp;
    conf.plugins.analytics = analytics;
    conf.plugins.openAdStreamer = ova;
    conf.plugins.openAdStreamer.autoPlay = true;

    if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }
    if (!Android) {
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
    } else {
        document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.url + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
    }
}

//player urls http y rtmp solo overlay, postroll
function playgenerico_np(DivId, p) {
    console.log(arguments.callee.name);

    if (JW_Player == 1) {
        p.np = true;
        playjw(DivId, p);
        return true;
    }
    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((p.imagen.indexOf("logo_tvn.png") == -1) && (!iOS) && (!p.autostart)) {
        conf.canvas = "";
        document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + "/img/" + logo + ') no-repeat 50pct 50pct';
    }
    conf.clip = {
        scaling: 'scale',
        autoBuffering: true,
        bufferLength: 20
    };
    conf.playlist = [{
        "url": p.url,
        "scaling": "scale",
        "duration": p.duracion
    }];
    conf.plugins.rtmp = rtmp;
    conf.plugins.rtmpInstream = rtmp;
    conf.plugins.analytics = analytics;
    conf.plugins.openAdStreamer = ova_np;
    conf.plugins.openAdStreamer.autoPlay = true;

    if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }
    if (!Android) {
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
    } else {
        document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.url + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
    }
}

//player urls http y rtmp con preroll y boton saltar, overlay, postroll
function playgenerico_bs(DivId, p) {
    console.log(arguments.callee.name);

    if (JW_Player == 1) {
        playjw(DivId, p);
        return true;
    }


    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((p.imagen.indexOf("logo_tvn.png") == -1) && (!iOS) && (!p.autostart)) {
        conf.canvas = "";
        document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + "/img/" + logo + ') no-repeat 50pct 50pct';
    }
    conf.clip = {
        scaling: 'scale',
        autoBuffering: true,
        bufferLength: 20
    };
    conf.playlist = [{
        "url": p.url,
        "scaling": "scale",
        "duration": p.duracion
    }];
    conf.plugins.rtmp = rtmp;
    conf.plugins.rtmpInstream = rtmp;
    conf.plugins.analytics = analytics;
    conf.plugins.openAdStreamer = ova_bs;
    conf.plugins.openAdStreamer.autoPlay = true;

    if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }
    if (!Android) {
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
    } else {
        document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.url + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
    }
}

//player youtube con preroll, midroll, postroll
function playyoutube(DivId, p) {
    console.log(arguments.callee.name);
    var ysplit;
    var youtubeId;
    if (p.url.indexOf("?") != -1) {
        ysplit = p.url.split("=");
        youtubeId = ysplit[ysplit.length - 1];
    } else {
        ysplit = p.url.split("/");
        youtubeId = ysplit[ysplit.length - 1];
    }

    if (JW_Player == 1) {
        p.url = "http://www.youtube.com/v/" + youtubeId;
//        p.autostart = false;
        playjw(DivId, p);
        return true;
    }

    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((p.imagen.indexOf("logo_tvn.png") == -1) && (!iOS) && (!p.autostart)) {
        conf.canvas = "";
        document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + "/img/" + logo + ') no-repeat 50pct 50pct';
    }

    conf.clip = {
        autoPlay: p.autostart,
        scaling: 'scale',
        autoBuffering: true,
        bufferLength: 20,
        ipadUrl: p.ipad
    };
    conf.playlist = [{
        "url": "api:" + youtubeId + "",
        "scaling": "scale",
        "provider": "youtube",
        "urlResolvers": ["youtube"]
    }];
    conf.plugins.rtmp = rtmp;
    //    conf.plugins.bwcheck = {
    //        url: strm + "/swf/flowplayer.bwcheck-3.2.5.swf",
    //        netConnectionUrl: strm + "/swf/flowplayer.bwcheck-3.2.5.swf",
    //        checkOnStart: true,
    //        maxWidth: 854
    //    };
    conf.plugins.youtube = youtube;
    conf.plugins.openAdStreamer = ova;
    conf.plugins.openAdStreamer.autoPlay = true;

    if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }

    var togglePlayEvent = true;
    var miTimer = 0;
    var detieneTimer = function() {
        window.clearInterval(miTimer);
        miTimer = 0;
    }

    if ((!Android) && (!iOS)) {
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
        var tiempo = 0;
        $f(DivId).onStart(function() {
            if (miTimer == 0) miTimer = window.setInterval(function() {
                tiempo += 1;
                if (typeof ga == 'function') {
                    ga('send', 'event', 'Videos', 'Minutos', p.url, 1);
                    ga('send', 'event', 'Videos', 'Minuto-' + tiempo, p.url, 1);
                }
            }, 60000);

            if (togglePlayEvent) {
                if (typeof ga == 'function') {
                    ga('send', 'event', 'Videos', 'Start', p.url, 1);
                }
                togglePlayEvent = false;
            }
        });

        $f(DivId).onStop(function() {
            if (typeof ga == 'function') {
                ga('send', 'event', 'Videos', 'Stop', p.url, 1);
            }
            detieneTimer();
        });

        $f(DivId).onFinish(function() {
            if (typeof ga == 'function') {
                ga('send', 'event', 'Videos', 'End', p.url, 1);
            }
            detieneTimer();
            togglePlayEvent = true;
        });

    } else {
        document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "' frameborder='0' allowfullscreen></iframe>";
        //        document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.url + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
    }
}

//player youtube solo overlay, postroll
function playyoutube_np(DivId, p) {
    console.log(arguments.callee.name);
    var ysplit;
    var youtubeId;
    if (p.url.indexOf("?") != -1) {
        ysplit = p.url.split("=");
        youtubeId = ysplit[ysplit.length - 1];
    } else {
        ysplit = p.url.split("/");
        youtubeId = ysplit[ysplit.length - 1];
    }

    if (JW_Player == 1) {
        p.np = true;
        p.url = "http://www.youtube.com/v/" + youtubeId;
//        p.autostart = false;
        playjw(DivId, p);
        return true;
    }

    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((p.imagen.indexOf("logo_tvn.png") == -1) && (!iOS) && (!p.autostart)) {
        conf.canvas = "";
        document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + "/img/" + logo + ') no-repeat 50pct 50pct';
    }

    conf.clip = {
        autoPlay: p.autostart,
        scaling: 'scale',
        autoBuffering: true,
        bufferLength: 20,
        ipadUrl: p.ipad
    };
    conf.playlist = [{
        "url": "api:" + youtubeId + "",
        "scaling": "scale",
        "provider": "youtube",
        "urlResolvers": ["youtube"]
    }];
    conf.plugins.rtmp = rtmp;
    //    conf.plugins.bwcheck = {
    //        url: strm + "/swf/flowplayer.bwcheck-3.2.5.swf",
    //        netConnectionUrl: strm + "/swf/flowplayer.bwcheck-3.2.5.swf",
    //        checkOnStart: true,
    //        maxWidth: 854
    //    };
    conf.plugins.youtube = youtube;
    conf.plugins.openAdStreamer = ova_np;
    conf.plugins.openAdStreamer.autoPlay = true;

    if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }

    var togglePlayEvent = true;
    var miTimer = 0;
    var detieneTimer = function() {
        window.clearInterval(miTimer);
        miTimer = 0;
    }

    if ((!Android) && (!iOS)) {
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
        var tiempo = 0;
        $f(DivId).onStart(function() {
            if (miTimer == 0) miTimer = window.setInterval(function() {
                tiempo += 1;
                if (typeof ga == 'function') {
                    ga('send', 'event', 'Videos', 'Minutos', p.url, 1);
                    ga('send', 'event', 'Videos', 'Minuto-' + tiempo, p.url, 1);
                }
            }, 60000);

            if (togglePlayEvent) {
                if (typeof ga == 'function') {
                    ga('send', 'event', 'Videos', 'Start', p.url, 1);
                }
                togglePlayEvent = false;
            }
        });

        $f(DivId).onStop(function() {
            if (typeof ga == 'function') {
                ga('send', 'event', 'Videos', 'Stop', p.url, 1);
            }
            detieneTimer();
        });

        $f(DivId).onFinish(function() {
            if (typeof ga == 'function') {
                ga('send', 'event', 'Videos', 'End', p.url, 1);
            }
            detieneTimer();
            togglePlayEvent = true;
        });
    } else {
        document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "' frameborder='0' allowfullscreen></iframe>";
        //        document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.url + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
    }
}

//player de livestream
function playlivestream(DivId,p) {
	console.log(arguments.callee.name);
	if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }
	document.getElementById(DivId).innerHTML="<iframe title='Livestream' width='100%' height='100%' src='" +p.url + "' frameborder='0' allowfullscreen></iframe>"
	$('#video-controls-stopMiddle').remove();
}

//player youtube con preroll y boton saltar, overlay, postroll
function playyoutube_bs(DivId, p) {
    console.log(arguments.callee.name);
    var ysplit;
    var youtubeId;
    if (p.url.indexOf("?") != -1) {
        ysplit = p.url.split("=");
        youtubeId = ysplit[ysplit.length - 1];
    } else {
        ysplit = p.url.split("/");
        youtubeId = ysplit[ysplit.length - 1];
    }

    if (JW_Player == 1) {
        p.url = "http://www.youtube.com/v/" + youtubeId;
//        p.autostart = false;
        playjw(DivId, p);
        return true;
    }

    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((p.imagen.indexOf("logo_tvn.png") == -1) && (!iOS) && (!p.autostart)) {
        conf.canvas = "";
        document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + "/img/" + logo + ') no-repeat 50pct 50pct';
    }

    conf.clip = {
        autoPlay: true,
        scaling: 'scale',
        autoBuffering: true,
        bufferLength: 20,
        ipadUrl: p.ipad
    };
    conf.playlist = [{
        "url": "api:" + youtubeId + "",
        "scaling": "scale",
        "provider": "youtube",
        "urlResolvers": ["youtube"]
    }];
    conf.plugins.rtmp = rtmp;
    //    conf.plugins.bwcheck = {
    //        url: strm + "/swf/flowplayer.bwcheck-3.2.5.swf",
    //        netConnectionUrl: strm + "/swf/flowplayer.bwcheck-3.2.5.swf",
    //        checkOnStart: true,
    //        maxWidth: 854
    //    };
    conf.plugins.youtube = youtube;
    conf.plugins.openAdStreamer = ova_bs;
    conf.plugins.openAdStreamer.autoPlay = true;

    if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }

    var togglePlayEvent = true;
    var miTimer = 0;
    var detieneTimer = function() {
        window.clearInterval(miTimer);
        miTimer = 0;
    }

    if ((!Android) && (!iOS)) {
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
        var tiempo = 0;
        $f(DivId).onStart(function() {
            if (miTimer == 0) miTimer = window.setInterval(function() {
                tiempo += 1;
                if (typeof ga == 'function') {
                    ga('send', 'event', 'Videos', 'Minutos', p.url, 1);
                    ga('send', 'event', 'Videos', 'Minuto-' + tiempo, p.url, 1);
                }
            }, 60000);

            if (togglePlayEvent) {
                if (typeof ga == 'function') {
                    ga('send', 'event', 'Videos', 'Start', p.url, 1);
                }
                togglePlayEvent = false;
            }
        });

        $f(DivId).onStop(function() {
            if (typeof ga == 'function') {
                ga('send', 'event', 'Videos', 'Stop', p.url, 1);
            }
            detieneTimer();
        });

        $f(DivId).onFinish(function() {
            if (typeof ga == 'function') {
                ga('send', 'event', 'Videos', 'End', p.url, 1);
            }
            detieneTimer();
            togglePlayEvent = true;
        });
    } else {
        document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "' frameborder='0' allowfullscreen></iframe>";
        //        document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.url + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
    }
}

var ads = {
    client: "googima",
    admessage: "Publicidad termina en xx segundos",
    skipoffset: 15,
    cuetext: "Publicidad",
    skipmessage: "Saltar Publicidad en xx segundos",
    skiptext: "Saltar",
    setLocale: "es",
    vpaidcontrols: true,
    schedule: {
        "adbreak-preroll": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Pre),
            offset: "pre"
        },
        "adbreak-midroll1": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
            offset: 600
        },
        "adbreak-midroll2": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
            offset: 1200
        },
        "adbreak-midroll3": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
            offset: 1800
        },
        "adbreak-midroll4": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
            offset: 2400
        },
//        "adbreak-overlay": {
//            offset: 60,
//            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Ov),
//            type: "nonlinear"
//        },
        "adbreak-postroll": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Pos),
            offset: "post"
        }
    }
};

var ads_npos = {
    client: "googima",
    admessage: "Publicidad termina en xx segundos",
    skipoffset: 15,
    cuetext: "Publicidad",
    skipmessage: "Saltar Publicidad en xx segundos",
    skiptext: "Saltar",
    setLocale: "es",
    vpaidcontrols: true,
    schedule: {
        "adbreak-preroll": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Pre),
            offset: "pre"
        },
        "adbreak-midroll1": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
            offset: 600
        },
        "adbreak-midroll2": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
            offset: 1200
        },
        "adbreak-midroll3": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
            offset: 1800
        },
        "adbreak-midroll4": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
            offset: 2400
        }
//        "adbreak-overlay": {
//            offset: 60,
//            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Ov),
//            type: "nonlinear"
 //       }
    }
};

var ads_np = {
    client: "googima",
    admessage: "Publicidad termina en xx segundos",
    skipoffset: 15,
    cuetext: "Publicidad",
    skipmessage: "Saltar Publicidad en xx segundos",
    skiptext: "Saltar",
    setLocale: "es",
    vpaidcontrols: true,
    schedule: {
        "adbreak-midroll1": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
            offset: 600
        },
        "adbreak-midroll2": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
            offset: 1200
        },
        "adbreak-midroll3": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
            offset: 1800
        },
        "adbreak-midroll4": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Mid),
            offset: 2400
        },
//        "adbreak-overlay": {
//            offset: 60,
//            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Ov),
//            type: "nonlinear"
//        },
        "adbreak-postroll": {
            tag: "https://pubads.g.doubleclick.net/gampad/ads?" + unescape(Vast_Pos),
            offset: "post"
        }
    }
};

//player jwplayer
function playjw(DivId, p) {
// fix controles dobles en mÃ³viles para 24horas.cl

	if (typeof p.ads === 'undefined') p.ads = true;

	if (document.domain.indexOf("24horas") != -1) {
		if (iOS) p.controls="false";
		if (Android) p.controls="false";
		if (!p.autostart) p.controls="false";
	}

    if (typeof p.relacionados === 'undefined') p.relacionados = '0';
    var DIV = document.getElementById(DivId);
//    var alto = DIV.clientHeight;
    var ancho = DIV.clientWidth;

    if (typeof p.ancho != 'undefined') ancho = p.ancho;

    var alto = Math.round((ancho * 9 ) / 16);
    if ((ancho === 0) || (alto === 0)) {
        ancho = 670;
        alto = 500;
    }

    if (localStorage.getItem("jwplayer.volume")!= null) {
        if (localStorage.getItem("jwplayer.volume").match(/^[0-9]+$/) == null) localStorage.setItem("jwplayer.volume","75");
    }

    console.log(ancho + "x" + alto);

    var EventLabel = p.url;
//    if (EventLabel.indexOf("youtube.com,") != -1) {
//        ysplit = EventLabel.split("/");
//        EventLabel = ysplit[ysplit.length - 1];
//    }
	if (EventLabel.indexOf("youtube.com,") != -1) {

	}


    if (EventLabel.indexOf("mdstrm.com") != -1) {
        msplit = EventLabel.split("/");
        EventLabel = msplit[4].split(".")[0];
    }


//    laclase = DivId.className;
//    DivId.className = "";

    if (typeof p.np === 'undefined') p.np = false;

    var pubs = JSON.parse(JSON.stringify(ads));
    
    if (p.np) pubs = JSON.parse(JSON.stringify(ads_np));
    if (!p.ads) pubs = "";

    var togglePlayEvent = true;
	var togglePlayerEvent = true;
    var miTimer = 0;
    var detieneTimer = function() {
        window.clearInterval(miTimer);
        miTimer = 0;
    }

	if (iOS) pubs.client = "vast";

    console.log("pubs="+JSON.stringify(pubs));
    var tiempo = 0;
    if (typeof PlayEvents[DivId] === 'undefined') PlayEvents[DivId] = new Object();
    var myStreamingTag = new ns_.StreamingTag( { customerC2: '6906476' } );
    var metadata = {
        ns_st_ci: EventLabel,
        ns_st_ct: "vc12",
        ns_st_st: "TVN",
        ns_st_pu: comscore_c3,
        ns_st_pr: document.title, // Program Title
        ns_st_ia: 0,
        ns_st_ti: "*null",
        c3: comscore_c3,
        c4: "*null",
        c6: "*null"
    };
    if (p.url.indexOf("mdstrm.com") != -1) p.url += "?first_profile=360";
    if (p.relacionados != '0') {    	
        console.log("p.relacionados=" + p.relacionados);
        pubs = JSON.parse(JSON.stringify(ads_npos));
		if (p.custom_pre != "") { 
			pubs.schedule["adbreak-preroll"].tag = p.custom_pre;
			console.log("c_pubs="+JSON.stringify(pubs));
		}
		if (iOS) pubs.client = "vast";
//        if (EventLabel.indexOf("youtube.com") != -1) p.url ="http://mdstrm.com/video/592caa84a330f817c9d74950.mp4";
		if (EventLabel.indexOf("youtube.com") != -1) pubs = "";
        Players[DivId] = jwplayer(DivId).setup({
            playlist: [{
            	image: unescape(p.imagen),
                file: p.url,
                stereomode: p.stereomode,
                preload: "auto"
            }],
            hlshtml: true,
            related: {
                file: "//www.24horas.cl/?widgetName=code&widgetId=2373131&categoryName=" + p.relacionados + "&limit=15",
                onclick: "play",
                showOnPause: false,
                oncomplete: "autoplay",
                autoplaytimer: 1,
                autoplaymessage: "Siguiente en xx segundos",
                width: "80%"
            },
            localization: {
                nextUp: "Siguiente",
                related: "Mas Videos"
            },
            skin: diseno,
            width: ancho,
            height: alto,
            autostart: p.autostart,
            controls: p.controls,
            advertising: pubs,
            stretching: "uniform",
            abouttext: description_url,
            aboutlink: about_link,
            cast: {}
        }).on('buffering', function(obj) {
        	console.log("Player is buffering");
        }).on('ready', function(obj) {
            console.log("Player is ready");
			if (togglePlayerEvent) {
				if (typeof ga == 'function') {
                	ga('send', 'event', 'Videos', 'Player', EventLabel, 1);
            	}
				togglePlayerEvent = false;
			}
            if (typeof PlayEvents[DivId].onPlayerReady != 'undefined') PlayEvents[DivId].onPlayerReady();
            if (document.domain.indexOf("24horas") != -1) {
            	document.getElementById(DivId).style.height= alto;
            }
//            if (p.autostart) {
//            	window.onload += setTimeout(function(){Players[DivId].play();},600);
//            }
		}).on('adBlock', function(obj) {
            if (typeof ga == 'function') {
                ga('send', 'event', 'Videos', 'adsBlock', EventLabel, 1);
            }
		}).on('adStarted', function(obj) {
//			detieneTimer();
//            if (typeof ga == 'function') {
//                ga('send', 'event', 'Videos', 'adsStarted', EventLabel, 1);
//            }
		}).on('adSkipped', function(obj) {
        	if (miTimer == 0) miTimer = window.setInterval(function() {
          		tiempo += 1;
//				tiempo = Math.round(Players[DivId].tiempo()/60);
                if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                	ga('send', 'event', 'Videos', 'Minutos', EventLabel, 1);
                	ga('send', 'event', 'Videos', 'Minuto-' + tiempo, EventLabel, 1);
                }
            }, 60000);
            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
            	ga('send', 'event', 'Videos', 'AdsSkipped', EventLabel, 1);
            }
		}).on('adCompleted', function(obj) {
        	if (miTimer == 0) miTimer = window.setInterval(function() {
				tiempo += 1;
//				tiempo = Math.round(Players[DivId].tiempo()/60);
                if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                	ga('send', 'event', 'Videos', 'Minutos', EventLabel, 1);
                	ga('send', 'event', 'Videos', 'Minuto-' + tiempo, EventLabel, 1);
                }
            }, 60000);
            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
            	ga('send', 'event', 'Videos', 'AdsCompleted', EventLabel, 1);
            }
        }).on('adImpression', function(obj) {
        	console.log("Player Ad");
			detieneTimer();
            Players[DivId].setVolume(p.adsvolume);
            Players[DivId].setControls(false);
            myStreamingTag.playAdvertisement({ ns_st_cl: Players[DivId].getDuration()}, ns_.StreamingTag.AdType.LinearOnDemandPreRoll);
            tiempo = Math.round(Players[DivId].getPosition() /60);
            if (typeof ga == 'function') {
				ga('send', 'event', 'Videos', 'AdsImpressions', EventLabel, 1);
                ga('send', 'event', 'Videos', 'adsImpression-' + tiempo, EventLabel, 1);
            }
            if (typeof PlayEvents[DivId].onAdsImpression == 'function') PlayEvents[DivId].onAdsImpression();
        }).on('adComplete', function(obj) {
        	Players[DivId].setControls(true);
        	if (EventLabel.indexOf("youtube.com") != -1) {
        		var ysplit;
    			var youtubeId;
    			if (EventLabel.indexOf("?") != -1) {
        			ysplit = EventLabel.split("=");
        			youtubeId = ysplit[ysplit.length - 1];
    			} else {
        			ysplit = EventLabel.split("/");
        			youtubeId = ysplit[ysplit.length - 1];
    			}
    			if (!p.autostart) {
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "' frameborder='0' allowfullscreen></iframe>";
        		} else {
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "?autoplay=1' frameborder='0' allowfullscreen></iframe>";
        		}
        	}
        }).on('adPause', function(obj) {
        	console.log("adPause");
			Players[DivId].setControls(true);
        }).on('adClick', function(obj) {
        	Players[DivId].setControls(true);
        }).on('adPlay', function(obj) {
        	Players[DivId].setControls(false);
        }).on('adSkipped', function(obj) {
        	Players[DivId].setControls(true);
        	if (EventLabel.indexOf("youtube.com") != -1) {
        		var ysplit;
    			var youtubeId;
    			if (EventLabel.indexOf("?") != -1) {
        			ysplit = EventLabel.split("=");
        			youtubeId = ysplit[ysplit.length - 1];
    			} else {
        			ysplit = EventLabel.split("/");
        			youtubeId = ysplit[ysplit.length - 1];
    			}
    			if (!p.autostart) {
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "' frameborder='0' allowfullscreen></iframe>";
        		} else {
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "?autoplay=1' frameborder='0' allowfullscreen></iframe>";
        		}
        	}
        }).on('adError', function(obj) {
        	Players[DivId].setControls(true);
        	if (EventLabel.indexOf("youtube.com") != -1) {
        		var ysplit;
    			var youtubeId;
    			if (EventLabel.indexOf("?") != -1) {
        			ysplit = EventLabel.split("=");
        			youtubeId = ysplit[ysplit.length - 1];
    			} else {
        			ysplit = EventLabel.split("/");
        			youtubeId = ysplit[ysplit.length - 1];
    			}
    			if (!p.autostart) {
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "' frameborder='0' allowfullscreen></iframe>";
        		} else {
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "?autoplay=1' frameborder='0' allowfullscreen></iframe>";
        		}
        	}
        }).on('play', function(obj) {
            setTimeout(function(){
                var textAlt = document.querySelectorAll('#' + DivId+ ' .jw-controlbar-center-group .jw-text-alt')[0];
                if(textAlt) textAlt.innerHTML = '';
            },300);
            Players[DivId].setVolume(p.volume);
            Players[DivId].setControls(true);
            console.log("Player Play " + miTimer);
            if (typeof PlayEvents[DivId].onPlay == 'function') PlayEvents[DivId].onPlay();
            metadata.ns_st_cl = Players[DivId].getDuration();
            myStreamingTag.playVideoContentPart(metadata, ns_.StreamingTag.ContentType.LongFormOnDemand);
            if (miTimer == 0) miTimer = window.setInterval(function() {
                tiempo += 1;
//				tiempo = Math.round(Players[DivId].getPosition() /60);
                if (typeof ga == 'function') {
                    ga('send', 'event', 'Videos', 'Minutos', EventLabel, 1);
                    ga('send', 'event', 'Videos', 'Minuto-' + tiempo, EventLabel, 1);
                }
            }, 60000);

            if (togglePlayEvent) {
                if (typeof ga == 'function') {
                    ga('send', 'event', 'Videos', 'Start', EventLabel, 1);
                }
                togglePlayEvent = false;
            }

        }).on('pause', function(obj) {
            console.log("Player Stop");
            if (typeof PlayEvents[DivId].onVideoStop == 'function') PlayEvents[DivId].onVideoStop();
            if (typeof ga == 'function') {
                ga('send', 'event', 'Videos', 'Stop', EventLabel, 1);
            }
            detieneTimer();
        }).on('complete', function(obj) {
                  console.log("Player End");
                  myStreamingTag.stop();
                  if (typeof PlayEvents[DivId].onVideoEnd == 'function') PlayEvents[DivId].onVideoEnd();
                  if (typeof ga == 'function') {
                      ga('send', 'event', 'Videos', 'End', EventLabel, 1);
                  }
                  detieneTimer();
                  togglePlayEvent = true;
                  tiempo = 0;
        }).on('error', function(obj) {
                console.log("Player Error:" + obj.message);
        });
        Players[DivId].tiempo = function() {
            return Players[DivId].getPosition();
        }
    } else {
//    	if (EventLabel.indexOf("youtube.com") != -1) p.url = "http://mdstrm.com/video/592caa84a330f817c9d74950.mp4";
		if (EventLabel.indexOf("youtube.com") != -1) pubs = "";
		if (p.custom_pre != "") { 
			pubs.schedule["adbreak-preroll"].tag = p.custom_pre;
		}
        Players[DivId] = jwplayer(DivId).setup({
            playlist: [{
            	image: unescape(p.imagen),
                file: p.url,
                stereomode: p.stereomode,
                preload: "auto"
            }],
            hlshtml: true,
            skin: diseno,
            width: ancho,
            height: alto,
            autostart: p.autostart,
            controls: p.controls,
            advertising: pubs,
            stretching: "uniform",
            abouttext: description_url,
            aboutlink: about_link,
            cast: {}
        }).on('ready', function(obj) {
            console.log("Player is ready");
			if (togglePlayerEvent) {
				if (typeof ga == 'function') {
                	ga('send', 'event', 'Videos', 'Player', EventLabel, 1);
            	}
				togglePlayerEvent = false;
			}
            if (typeof PlayEvents[DivId].onPlayerReady != 'undefined') PlayEvents[DivId].onPlayerReady();
            if (document.domain.indexOf("24horas") != -1) {
            	document.getElementById(DivId).style.height= alto;
            }
//            if (p.autostart) {
//            	window.onload += setTimeout(function(){Players[DivId].play();},600);
//            }
		}).on('adBlock', function(obj) {
    		if (typeof ga == 'function') {
        		ga('send', 'event', 'Videos', 'adsBlock', EventLabel, 1);
    		}
		}).on('adStarted', function(obj) {
//			detieneTimer();
//            if (typeof ga == 'function') {
//                ga('send', 'event', 'Videos', 'adsStarted', EventLabel, 1);
//            }
		}).on('adSkipped', function(obj) {
        	if (miTimer == 0) miTimer = window.setInterval(function() {
				tiempo += 1;
//				tiempo = Math.round(Players[DivId].tiempo()/60);
                if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                	ga('send', 'event', 'Videos', 'Minutos', EventLabel, 1);
                	ga('send', 'event', 'Videos', 'Minuto-' + tiempo, EventLabel, 1);
                }
            }, 60000);
            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
            	ga('send', 'event', 'Videos', 'AdsSkipped', EventLabel, 1);
            }
		}).on('adCompleted', function(obj) {
        	if (miTimer == 0) miTimer = window.setInterval(function() {
				tiempo += 1;
//				tiempo = Math.round(Players[DivId].tiempo()/60);
                if ((typeof ga == 'function') && (!isNaN(tiempo))) {
                	ga('send', 'event', 'Videos', 'Minutos', EventLabel, 1);
                	ga('send', 'event', 'Videos', 'Minuto-' + tiempo, EventLabel, 1);
                }
            }, 60000);
            if ((typeof ga == 'function') && (!isNaN(tiempo))) {
            	ga('send', 'event', 'Videos', 'AdsCompleted', EventLabel, 1);
            }
        }).on('adImpression', function(obj) {
        	console.log("Player Ad");
			detieneTimer();
            Players[DivId].setVolume(p.adsvolume);
            Players[DivId].setControls(false);
            myStreamingTag.playAdvertisement({ ns_st_cl: Players[DivId].getDuration()}, ns_.StreamingTag.AdType.LinearOnDemandPreRoll);
            tiempo = Math.round(Players[DivId].getPosition() /60);
            if (typeof ga == 'function') {
				ga('send', 'event', 'Videos', 'AdsImpressions', EventLabel, 1);
                ga('send', 'event', 'Videos', 'adsImpression-'+tiempo, EventLabel, 1);
            }
            if (typeof PlayEvents[DivId].onAdsImpression == 'function') PlayEvents[DivId].onAdsImpression();
        }).on('adComplete', function(obj) {
        	console.log("adComplete");
        	Players[DivId].setControls(true);
        	if (EventLabel.indexOf("youtube.com") != -1) {
        		var ysplit;
    			var youtubeId;
    			if (EventLabel.indexOf("?") != -1) {
        			ysplit = EventLabel.split("=");
        			youtubeId = ysplit[ysplit.length - 1];
    			} else {
        			ysplit = EventLabel.split("/");
        			youtubeId = ysplit[ysplit.length - 1];
    			}
    			if (!p.autostart) {
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "' frameborder='0' allowfullscreen></iframe>";
        		} else {
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "?autoplay=1' frameborder='0' allowfullscreen></iframe>";
        		}
        	}
        }).on('adPause', function(obj) {
        	console.log("adPause");
			Players[DivId].setControls(true);
        }).on('adClick', function(obj) {
        	console.log("adClick");
        	Players[DivId].setControls(true);
        }).on('adPlay', function(obj) {
        	console.log("adPlay");
        	Players[DivId].setControls(false);
        }).on('adSkipped', function(obj) {
        	console.log("adSkipped");
        	Players[DivId].setControls(true);
        	if (EventLabel.indexOf("youtube.com") != -1) {
        		var ysplit;
    			var youtubeId;
    			if (EventLabel.indexOf("?") != -1) {
        			ysplit = EventLabel.split("=");
        			youtubeId = ysplit[ysplit.length - 1];
    			} else {
        			ysplit = EventLabel.split("/");
        			youtubeId = ysplit[ysplit.length - 1];
    			}
    			if (!p.autostart) {
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "' frameborder='0' allowfullscreen></iframe>";
        		} else {
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "?autoplay=1' frameborder='0' allowfullscreen></iframe>";
        		}
        	}
        }).on('adError', function(obj) {
        	Players[DivId].setControls(true);
        	if (EventLabel.indexOf("youtube.com") != -1) {
        		var ysplit;
    			var youtubeId;
    			if (EventLabel.indexOf("?") != -1) {
        			ysplit = EventLabel.split("=");
        			youtubeId = ysplit[ysplit.length - 1];
    			} else {
        			ysplit = EventLabel.split("/");
        			youtubeId = ysplit[ysplit.length - 1];
    			}
    			if (!p.autostart) {
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "' frameborder='0' allowfullscreen></iframe>";
        		} else {
        			document.getElementById(DivId).innerHTML = "<iframe title='YouTube video player' width='100%' height='100%' src='http://www.youtube.com/embed/" + youtubeId + "?autoplay=1' frameborder='0' allowfullscreen></iframe>";
        		}
        	}
        }).on('play', function(obj) {
            setTimeout(function(){
                var textAlt = document.querySelectorAll('#' + DivId + ' .jw-controlbar-center-group .jw-text-alt')[0];
                if(textAlt) textAlt.innerHTML = '';
            },300);
            Players[DivId].setVolume(p.volume);
            Players[DivId].setControls(true);
            console.log("Player Play " + miTimer);
            if (typeof PlayEvents[DivId].onPlay == 'function') PlayEvents[DivId].onPlay();
            metadata.ns_st_cl = Players[DivId].getDuration();
            myStreamingTag.playVideoContentPart(metadata, ns_.StreamingTag.ContentType.LongFormOnDemand);
            if (miTimer == 0) miTimer = window.setInterval(function() {
                tiempo += 1;
//				tiempo = Math.round(Players[DivId].getPosition() /60);
                if (typeof ga == 'function') {
                    ga('send', 'event', 'Videos', 'Minutos', EventLabel, 1);
                    ga('send', 'event', 'Videos', 'Minuto-' + tiempo, EventLabel, 1);
                }
            }, 60000);

            if (togglePlayEvent) {
                if (typeof ga == 'function') {
                    ga('send', 'event', 'Videos', 'Start', EventLabel, 1);
                }
                togglePlayEvent = false;
            }

        }).on('pause', function(obj) {
            console.log("Player Stop");
            if (typeof PlayEvents[DivId].onVideoStop == 'function') PlayEvents[DivId].onVideoStop();
            if (typeof ga == 'function') {
                ga('send', 'event', 'Videos', 'Stop', EventLabel, 1);
            }
            detieneTimer();
        }).on('complete', function(obj) {
                  console.log("Player End");
                  myStreamingTag.stop();
                  if (typeof PlayEvents[DivId].onVideoEnd == 'function') PlayEvents[DivId].onVideoEnd();
                  if (typeof ga == 'function') {
                      ga('send', 'event', 'Videos', 'End', EventLabel, 1);
                  }
                  detieneTimer();
                  togglePlayEvent = true;
                  tiempo = 0;
        }).on('error', function(obj) {
                console.log("Player Error:" + obj.message);
        });
        Players[DivId].tiempo = function() {
            return Players[DivId].getPosition();
        }
    }

}

//player HLS live sin publicidad
function playHLSlive_sp(DivId, p) {
    console.log(arguments.callee.name);

    if (JW_Player == 1) {
        p.np = true;
        playjw(DivId, p);
        return true;
    }

    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((p.imagen.indexOf("logo_tvn.png") == -1) && (!iOS) && (!p.autostart)) {
        conf.canvas = "";
        document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + "/img/" + logo + ') no-repeat 50pct 50pct';
    }
    conf.clip = {
        autoPlay: p.autostart,
        scaling: 'fit',
        url: escape(p.url),
        urlResolvers: ['httpstreaming', 'bwcheck'],
        provider: 'httpstreaming',
        ipadUrl: escape(p.url),
        live: true
    };
    conf.plugins.controls.time = false;
    conf.plugins.controls.scrubber = false;
    conf.plugins.controls.width = '160';
    conf.plugins.httpstreaming = httpstreaminglive;
    conf.plugins.bwcheck = bwcheck;
    conf.plugins.calidad = calidad;
    conf.plugins.analytics = analytics;

    if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }
    if (!Android) {
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.18.swf",
            wmode: "opaque"
        }, conf).ipad();
    } else {
        if (AndroidVersion >= 3) {
            document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.ipad + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        } else {
            document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.rtsp + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        }
    }
}

//player HLS live con preroll y boton saltar, overlay (y postroll)
function playHLSlive(DivId, p) {
    console.log(arguments.callee.name);

    if (JW_Player == 1) {
        playjw(DivId, p);
        return true;
    }

    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((p.imagen.indexOf("logo_tvn.png") == -1) && (!iOS) && (!p.autostart)) {
        conf.canvas = "";
        document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + "/img/" + logo + ') no-repeat 50pct 50pct';
    }
    conf.clip = {
        autoPlay: p.autostart,
        scaling: 'fit',
        url: escape(p.url),
        urlResolvers: ['httpstreaming', 'bwcheck'],
        provider: 'httpstreaming',
        ipadUrl: escape(p.ipad),
        autoBuffering: true,
        bufferLength: 20,
        baseUrl: p.baseurl,
        live: true
    };
    conf.plugins.controls.time = false;
    conf.plugins.controls.scrubber = false;
    conf.plugins.controls.width = '160';
    conf.plugins.httpstreaming = httpstreaminglive;
    conf.plugins.bwcheck = bwcheck;
    conf.plugins.calidad = calidad;
    conf.plugins.analytics = analytics;
    conf.plugins.openAdStreamer = ova_bs;
    conf.plugins.openAdStreamer.autoPlay = true;

    if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }
    if (!Android) {
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.16.swf",
            wmode: "opaque"
        }, conf).ipad();
    } else {
        if (AndroidVersion >= 3) {
            var videoTag = "<video src='" + p.ipad + "' height='100%' width='100%' type='application/vnd.apple.mpegURL' controls></video>";
            document.getElementById(DivId).innerHTML = videoTag;
 //           document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.ipad + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        } else {
            document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.rtsp + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        }
    }
}

//player RTMP live con preroll y boton saltar, overlay (y postroll)
function playRTMPlive(DivId, p) {
    console.log(arguments.callee.name);
    var conf = JSON.parse(JSON.stringify(confcomun));
    if ((p.imagen.indexOf("logo_tvn.png") == -1) && (!iOS) && (!p.autostart)) {
        conf.canvas = "";
        document.getElementById(DivId).style.backgroundImage = "url('" + unescape(p.imagen) + "')";
        document.getElementById(DivId).style.backgroundSize = "cover";
        document.getElementById(DivId).style.position = "relative";
        document.getElementById(DivId).innerHTML = "<img style='max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background: transparent;' src='" + strm + "/img/play_negro.png" + "'></img>";
    } else {
        conf.canvas.background = '#000000 url(' + strm + "/img/" + logo + ') no-repeat 50pct 50pct';
    }
    conf.plugins.controls.time = false;
    conf.plugins.controls.scrubber = false;
    conf.plugins.controls.width = '160';
    conf.clip = {
        scaling: 'scale',
        autoBuffering: true,
        bufferLength: 5,
        ipadUrl: p.url
    };
    conf.playlist = [{
        "url": p.url,
        "scaling": "scale",
        "provider": "rtmp",
        "ipadUrl": p.url
    }];
    conf.plugins.rtmp = rtmp;
    conf.plugins.rtmpInstream = rtmp;
    conf.plugins.analytics = analytics;
    conf.plugins.openAdStreamer = ova_bs;
    conf.plugins.openAdStreamer.autoPlay = true;

    if (typeof ga == 'function') {
        ga('send', 'event', 'Videos', 'Player', p.url, 1);
    }
    if (!Android) {
        $f(DivId, {
            src: strm + "/swf/flowplayer.commercial-3.2.18.swf",
            wmode: "opaque"
        }, conf).ipad();
    } else {
        if (AndroidVersion >= 3) {
            document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.ipad + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        } else {
            document.getElementById(DivId).innerHTML = "<a style='display:block;vertical-align: middle; width:100px; margin:0 auto;' href='" + p.rtsp + "'><img src='http://estaticos.tvn.cl/skins/diseno/gfx/bt-play.png'/></a>";
        }
    }
}

function playmdstrmlive(DivId, p) {

	var togglePlayEvent=false;

    if (typeof p.ads === 'undefined') p.ads = true; 
    if (typeof(p.mediastream) === 'undefined') p.mediastream = false;
    if ((JW_Player == 1) && (!p.mediastream)) {
        p.url = "//mdstrm.com/live-stream-playlist/" + p.url + ".m3u8";
//        p.controls = true;
        playjw(DivId,p);
        return true;
    }	
    
    var mitogglePlayEvent = true;

    var miTimer = 0;
    var detieneTimer = function() {
        window.clearInterval(miTimer);
        togglePlayEvent = true;
    }

    console.log(arguments.callee.name);
    var DIV = document.getElementById(DivId);
    var alto = DIV.clientHeight;
    var ancho = DIV.clientWidth;
    if ((ancho === 0) || (alto === 0)) {
    	 var rect = DIV.getBoundingClientRect();
        ancho = rect.width;
        alto = eval(ancho*9/16);
    }
	
	var togglePlayerEvent = true;
    
    if (!p.ads) mads_live = "";


    if (p.url=="57a498c4d7b86d600e5461cb") {
    	parametros = Object.keys(p).map(function(k) {
    		return encodeURIComponent(k)+ "=" + encodeURIComponent(p[k]);
    	}).join('&');
    	parametros = parametros + "&DFP_Pre=" + DFP_Pre;
    	parametros = parametros + "&DFP_Ov=" + DFP_Ov;
    	document.getElementById(DivId).innerHTML = "<iframe id='tvnlive' width='" + ancho + "' height='"+ alto + "' src='//token.tvn.cl/?"+ parametros +"' frameborder='0' allowfullscreen></iframe>";

    	if (typeof PlayEvents[DivId] === 'undefined') PlayEvents[DivId] = new Object();
    	Players[DivId] = new Object();
    } else if (1 == 1) {
        if (typeof PlayEvents[DivId] === 'undefined') PlayEvents[DivId] = new Object();
        Players[DivId] = new MediastreamPlayer(DivId, {
            width: ancho,
            height: alto,
            type: "live",	
            id: p.url,
            volume: p.volume,
            mse: p.html5,
            player: playerid,
            controls: p.controls,
            custom: mads_live,
            autoplay: p.autostart,
            access_token: p.tk,
            events: {
            	onAdsImpression: function() {
                		console.log("Player Ad");
	                    setTimeout(function() {
							console.log("Volumen Ad:" + p.adsvolume);
	                        if (!is_safari) Players[DivId].setAdsVolume(p.adsvolume);
	                    }, 250);
                		if (typeof ga == 'function') {
							ga('send', 'event', 'Videos', 'AdsImpressions', p.url, 1);
                            ga('send', 'event', 'Videos', 'AdsImpression-0', p.url, 1);
                        }
                        if (typeof PlayEvents[DivId].onAdsImpression == 'function') PlayEvents[DivId].onAdsImpression();
                	},
                onPlayerReady: function() {
                    console.log("Player is ready");
					try {
//						Players[DivId].c.width = "100%";
//                    	Players[DivId].c.height = "100%";
					}
					catch (err) {
						console.log("Error:"+err);
					}
                    setTimeout(function() {
                        if (!is_safari) Players[DivId].setAdsVolume(p.adsvolume);
                    }, 2000);
                    if (track_atentus) _atentus.trackEvent('ready', {
                        id: 'seÃ±al-en-vivo'
                    });
					if (togglePlayerEvent) {
						if (typeof ga == 'function') {
                        	ga('send', 'event', 'Videos', 'Player', p.url, 1);
                    	}
						togglePlayerEvent = false;
					}
                    if (typeof PlayEvents[DivId].onPlayerReady == 'function') PlayEvents[DivId].onPlayerReady();
                },
                onPlay: function() {
                    if (mitogglePlayEvent) {
                        if (typeof ga == 'function') {
                            ga('send', 'event', 'Videos', 'Start', p.url, 1);
                        }
                        mitogglePlayEvent = false;
                        var tiempo = 0;
                        miTimer = window.setInterval(function() {
                            tiempo += 1;
                            if (typeof ga == 'function') {
                                ga('send', 'event', 'Videos', 'Minutos', p.url, 1);
                                ga('send', 'event', 'Videos', 'Minuto-' + tiempo, p.url, 1);
                            }
                        }, 60000);
                    }
                    
                    if (togglePlayEvent) {
                        if (track_atentus) {
                            _atentus.trackEvent('play', {
                                id: 'seÃ±al-en-vivo'
                            });
                            var time = 0;
                            eventTimer = window.setInterval(function() {
                                time += timeStep;
                                _atentus.trackEvent('time', {
                                    id: 'seÃ±al-en-vivo',
                                    time: time
                                });
                            }, trackingTimePeriod);
                            togglePlayEvent = false;
                        }                                               
                    }
                    if (typeof PlayEvents[DivId].onPlay == 'function') PlayEvents[DivId].onPlay();
                },
                onVideoStop: function() {
                    if (track_atentus) _atentus.trackEvent('pause', {
                        id: 'seÃ±al-en-vivo'
                    });
                    if (track_atentus) clearTimer();
                    if (typeof ga == 'function') {
                        ga('send', 'event', 'Videos', 'Stop', p.url, 1);
                    }
                    if (typeof PlayEvents[DivId].onVideoStop == 'function') PlayEvents[DivId].onVideoStop();
                    detieneTimer();
                },
                onVideoEnd: function() {
                    if (track_atentus) _atentus.trackEvent('complete', {
                        id: 'seÃ±al-en-vivo'
                    });
                    if (track_atentus) clearTimer();
                    if (typeof PlayEvents[DivId].onVideoEnd == 'function') PlayEvents[DivId].onVideoEnd();
                    detieneTimer();
                },
                onVideoError: function() {
                    if (track_atentus) _atentus.trackEvent('error', {
                        id: 'seÃ±al-en-vivo'
                    });
                    if (track_atentus) clearTimer();
                    detieneTimer();
                    if (typeof PlayEvents[DivId].onVideoError == 'function') PlayEvents[DivId].onVideoError();
                }
            }
        });
    } else {
        Players[DivId] = new MediastreamPlayer(DivId, {
            width: ancho,
            height: alto,
            type: "live",
            id: p.url,
            volume: p.volume,
            mse: p.html5,
            player: playerid,
            controls: p.controls,
            access_token: p.tk,
            custom: {
                preroll: unescape(Vast_Pre),
                overlay: unescape(Vast_Ov)
            },
            autoplay: p.autostart
        });
    }
    if (p.url=="57a498c4d7b86d600e5461cb") {
    	Players[DivId].getState = function() {
    		return 'playing'
    	}
    	Players[DivId].videoStop = function() {
    		document.getElementById("tvnlive").contentWindow.postMessage("stop","*");
    	}
    	Players[DivId].videoPlay = function() {
    		document.getElementById("tvnlive").contentWindow.postMessage("play","*");
    	}

    } else {
                Players[DivId].getState = function() {
            	if (Players[DivId].isPlaying()) {
            		return 'playing'
            	} else {
            		return 'stopped'
            	}
            }
    }

    Players[DivId].getPosition = function() {
    	return 0;
    }

    Players[DivId].pause = function(value) {    	
            	//if (p.url!="57a498c4d7b86d600e5461cb") Players[DivId].videoStop();
            	if (value) {
            		Players[DivId].videoStop();
            	} else {
            		Players[DivId].videoPlay();
            	}
            }
    Players[DivId].setControls = function() {    	
    }

            Players[DivId].resize = function(x,y) {
            	console.log("LIVE resize: " + x + " * " + y);
				var tmp = document.getElementById(DivId);				
            	if (tmp) {
            		var iFrame = tmp.getElementsByTagName("iframe")[0];
            		if (x.toString().indexOf('100%')!=-1) {
	                	tmp.style.width = '100%';
	                	tmp.style.height = parseInt(y) + 'px';
	                	iFrame.style.width = '100%';
	                	iFrame.style.height = parseInt(y) + 'px';
	                } else {
	                	tmp.style.width = parseInt(x) + 'px';
	                	tmp.style.height = parseInt(y) + 'px';
	                	iFrame.style.width = parseInt(x) + 'px';
	                	iFrame.style.height = parseInt(y) + 'px';
	                }
            	}
            }

    try {
//        Players[DivId].c.width = "100%"; 
//        Players[DivId].c.height = "100%";
    } catch (err) {
        console.log(err.message);
    }
}

function str_rot13(str){
    return (str+'').replace(/[a-zA-Z]/gi,function(s){
        return String.fromCharCode(s.charCodeAt(0)+(s.toLowerCase()<'n'?13:-13))
    })
}

function MediastreamPlayer2(x,y) {
//	let z = JSON.parse(JSON.stringify(y));
	y.access_token = str_rot13(y.access_token);
	return new MediastreamPlayer(x,y);
}