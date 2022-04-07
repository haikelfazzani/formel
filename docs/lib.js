/*! SplitViews - v2.1.0 | Copyright 2020 - Haikel Fazzani */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).SplitViews=t()}(this,(function(){"use strict";return function(e){let t={parent:(o=e.parent,("string"==typeof o?document.querySelector(o):o)||".split-view"),direction:e.direction,gutterCln:"sp-gutter",gutterSize:e.gutterSize||5,minSize:e.minSize||0,sizes:(n=e.sizes,n&&n.length>0?n.map((e=>e/100)):[]),onDragEnd:e.onDragEnd};var n,o;let s,i,r,l=t.parent,u=[...l.children],c=l.addEventListener,a=l.removeEventListener,f="horizontal"===t.direction,d=!1,g=!1,p=0,h=0,m=0,y=0,z=0;function x(e){r=e.target,g=!0,r.classList.contains(t.gutterCln)?(l=r.parentNode,f=l.classList.contains("horizontal"),d=/^touch/g.test(e.type),s=r.previousElementSibling,i=r.nextElementSibling,s&&i&&(p=f?s.offsetWidth:s.offsetHeight,h=f?i.offsetWidth:i.offsetHeight,e=d?e.changedTouches[0]:e,z=f?e.pageX:e.pageY,y=p+h,m=Number(s.style.flexGrow)+Number(i.style.flexGrow)),d?(c("touchmove",S),c("touchend",v),c("touchcancel",v)):(c("mousemove",S),c("mouseup",v))):g=!1}function S(e){if(g){e=d?e.changedTouches[0]:e;let t=f?e.pageX:e.pageY,n=t-z;p+=n,h-=n;const o=l.dataset.minsize;p>=o&&h>=o&&(s.style.flexGrow=(m*(p/y)).toString(),i.style.flexGrow=(m*(h/y)).toString()),z=t}d||(e.preventDefault(),e.stopPropagation())}function v(){if(g=!1,r=null,t.onDragEnd){const e=[];for(const n of u)n.classList.contains(t.gutterCln)||e.push(100*n.style.flexGrow);t.onDragEnd(e)}a("touchmove",S),a("touchend",v),a("touchcancel",v),a("mousemove",S),a("mouseup",v)}return l.dataset.minsize=t.minSize,l.style.flexDirection=f?"row":"column",((e,n)=>{let o=0;for(const s of e)s.classList.contains(t.gutterCln)?(s.style.flex=`0 0 ${t.gutterSize}px`,s.style.cursor=(n?"col":"row")+"-resize"):(s.style.flex=""+(t.sizes.length>0?t.sizes[o]:1),o++)})(u,f),c("touchstart",x),c("mousedown",x),{parent:l,destroy(){a("touchstart",x),a("mousedown",x)}}}}));
