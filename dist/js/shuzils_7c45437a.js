!function(e){function t(t){for(var n,l,u=t[0],a=t[1],s=t[2],f=0,d=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);d.length;)d.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,u=1;u<o.length;u++){var a=o[u];0!==r[a]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},r={6:0},i=[];function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=a;i.push([79,0]),o()}({1:function(e,t,o){"use strict";o(6);!function(){function e(){var e=(document.documentElement.clientWidth||document.body.clientWidth)/1920*16;e=e.toFixed(1),document.querySelector("html").style.fontSize=e+"px"}window.addEventListener("resize",e,!1),document.addEventListener("DOMContentLoaded",e,!1)}();o(3),o(8),o(4);var n=document.querySelector("#ts_header"),r=n.querySelectorAll(".dropdown"),i=parseInt(getComputedStyle(document.documentElement).getPropertyValue("font-size"));r.forEach((function(e){var t=e.querySelector(".dropdown_layer"),o=t.offsetHeight/i;t.style.height="0rem",t.style.display="block";var r=null;e.addEventListener("mouseenter",(function(e){clearTimeout(r),e.stopPropagation(),n.style.backgroundColor="#ffffff",n.style.color="#242424",n.style.borderBottomColor="rgba(51, 102, 255, 0.5)",t.style.height="0rem",t.style.display="block",setTimeout((function(){"none"!==t.style.display&&(t.style.height=o+"rem")}),10)})),n.addEventListener("mouseleave",(function(e){e.stopPropagation(),n.style.backgroundColor="transparent",n.style.color="#ffffff",n.style.borderBottomColor="transparent"})),e.addEventListener("mouseleave",(function(e){e.stopPropagation(),t.style.height="0rem",r=setTimeout((function(){t.style.display="none"}),300)}))}));(new(o(0).a)).reveal(".sr-animate",{delay:0,distance:"80px",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",opacity:0,origin:"bottom",reset:!1,viewOffset:{bottom:150}})},79:function(e,t,o){"use strict";o.r(t);o(5),o(80),o(1)},80:function(e,t,o){}});