!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,i,o=[],a=!0,c=!1;try{for(e=e.call(n);!(a=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(u){c=!0,i=u}finally{try{a||null==e.return||e.return()}finally{if(c)throw i}}return o}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.d2158709.js","./File-legacy.31a3adf8.js","./useUtil-legacy.eb59cf4b.js","./api-legacy.40c28d7a.js","./icon-legacy.70ab176d.js","./index-legacy.4c971367.js","./index-legacy.fccee771.js"],(function(t){"use strict";var e,r,i,o,a,c;return{setters:[function(n){e=n.d,r=n.e,i=n.f,o=n.B,a=n.o},function(n){c=n.F},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(),u=n(r(!1),2),l=u[0],f=u[1];return i(c,{get children(){return i(o,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+a.raw_url},onClick:function(){f(!0)},get children(){return t("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
