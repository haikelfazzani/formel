!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).SplitViews=t()}(this,(function(){"use strict";return function(e){let t={parent:"split-view",direction:"vertical",gutterSize:5,minSize:20,sizes:[],onDragEnd:e.onDragEnd,...e},i="string"==typeof(l=t.parent)?document.getElementById(l):l,n=Array.from(i.children),o=!1,r=100/n.length;var l;let s=t.direction,a=t.sizes,d=t.onDragEnd,c=0,f=0,g=null,u=null,h={},p={},m="vertical"===s?"width":"height";for(let e=0;e<n.length;e++){const i=n[e];let o=t.gutterSize/2;if(i.style[m]=a.length===n.length?`calc(${a[e]}% - ${o}px)`:`calc(${r}% - ${o}px)`,e<n.length-1){const n=document.createElement("span"),o="vertical"===s?"gutter-vertical":"gutter-horizontal";n.classList.add("gutter",o),n.style[m]=t.gutterSize+"px",n.dataset.id=e,i.parentNode.insertBefore(n,i.nextSibling)}}function v(){if(o=!1,i.removeEventListener("mousemove",y,!1),i.removeEventListener("mouseup",v,!1),d){let e="vertical"===s?i.offsetWidth:i.offsetHeight,t=n.map((t=>t.getBoundingClientRect().width/e*100));d(t)}}function y(e){if(o&&g&&u){let n="vertical"===s?i.offsetWidth:i.offsetHeight,o="vertical"===s?e.clientX-h.x-f:e.clientY-h.y-f,r=o/n*100,l=("vertical"===s?p.width+(h.width-o):p.height+(h.height-o))/n*100;r>=t.minSize&&l>=t.minSize&&(g.style[m]=r+"%",u.style[m]=l+"%")}e.preventDefault(),e.stopPropagation()}i.addEventListener("mousedown",(function(e){e.target&&e.target.classList.contains("gutter")&&(o=!0,c=parseInt(e.target.dataset.id,10),f="vertical"===s?e.offsetX:e.offsetY,g=n[c],u=n[c+1],h=g.getBoundingClientRect(),p=u.getBoundingClientRect(),i.addEventListener("mousemove",y,!1),i.addEventListener("mouseup",v,!1))}),!1)}}));
