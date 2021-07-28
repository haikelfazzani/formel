!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).SplitViews=t()}(this,(function(){"use strict";
/*!
  * SplitViews - Utility for resizable split views.
  * Licensed Under MIT
  * Copyright 2021 Haikel Fazzani
  */return function(e){let t={parent:(o=e.parent,("string"==typeof o?document.querySelector(o):o)||".split-view"),direction:e.direction||!0,gutterCln:e.gutterCln||"sp-gutter",gutterSize:e.gutterSize||5,minSize:(e.minSize||0)/100,sizes:(n=e.sizes,n&&n.length>0?n.map((e=>e/100)):[]),onDragEnd:e.onDragEnd};var n,o;let i,s,r,l=null,u=window.addEventListener,c=window.removeEventListener,f=t.parent,a=Array.from(f.children),d="horizontal"===t.direction,g=!1,p=0,m=0,h=0,y=0,z=0;f.style.flexDirection=d?"row":"column";let w=0;for(const n of a)n.classList.contains("sp-gutter")?(n.style.flex=`0 0 ${e.gutterSize}px`,n.style.cursor=(d?"col":"row")+"-resize"):(n.style.flex=t.sizes.length>0?t.sizes[w]:1,w++);function S(e){r=e.target,g=!0,r.classList.contains("sp-gutter")?(f=r.parentNode,d=f.classList.contains("horizontal"),l=/^touch/g.test(e.type),i=r.previousElementSibling,s=r.nextElementSibling,i&&s&&(p=d?i.offsetWidth:i.offsetHeight,m=d?s.offsetWidth:s.offsetHeight,e=l?e.changedTouches[0]:e,z=d?e.pageX:e.pageY,y=p+m,h=Number(i.style.flexGrow)+Number(s.style.flexGrow)),l?(u("touchmove",x),u("touchend",v),u("touchcancel",v)):(u("mousemove",x),u("mouseup",v))):g=!1}function x(e){if(g){e=l?e.changedTouches[0]:e;let n=d?e.pageX:e.pageY,o=n-z;p+=o,m-=o;let r=p<t.minSize||m<t.minSize;if(!r){let e=h*(p/y),n=h*(m/y);r=e<t.minSize||n<t.minSize,i&&s&&!r&&(i.style.flexGrow=e,s.style.flexGrow=n)}z=n}l||(e.preventDefault(),e.stopPropagation())}function v(){if(g=!1,r=null,t.onDragEnd){const e=[];for(const t of a)t.classList.contains("sp-gutter")||e.push(100*t.style.flexGrow);t.onDragEnd(e)}l?(c("touchmove",x),c("touchend",v),c("touchcancel",v)):(c("mousemove",x),c("mouseup",v))}u("touchstart",S),u("mousedown",S)}}));
