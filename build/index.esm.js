function t(t){function e(t){return new Intl.NumberFormat("en-US",{minimumFractionDigits:4,maximumFractionDigits:4}).format(t)}let i={parent:"split-view",direction:"vertical",gutterSize:5,minSize:20,sizes:[],onDragEnd:t.onDragEnd,...t},n="string"==typeof(l=i.parent)?document.getElementById(l):l,r=Array.from(n.children),o=!1,a=100/r.length;var l;let s=i.direction,c=i.sizes,g=i.onDragEnd,d=0,u=0,f=null,m=null,h={},v={},p="vertical"===s?"width":"height";for(let t=0;t<r.length;t++){const e=r[t];let n=i.gutterSize/2;if(e.style[p]=c.length===r.length?`calc(${c[t]}% - ${n}px)`:`calc(${a}% - ${n}px)`,t<r.length-1){const n=document.createElement("span"),r="vertical"===s?"gutter-vertical":"gutter-horizontal";n.classList.add("gutter",r),n.style[p]=i.gutterSize+"px",n.dataset.id=t,e.parentNode.insertBefore(n,e.nextSibling)}}function E(){if(o=!1,n.removeEventListener("mousemove",z,!1),n.removeEventListener("mouseup",E,!1),g){let t="vertical"===s?n.offsetWidth:n.offsetHeight,e=r.map((e=>e.getBoundingClientRect().width/t*100));g(e)}}function z(t){if(o&&f&&m){let r="vertical"===s?n.offsetWidth:n.offsetHeight,o="vertical"===s?t.clientX-h.x-u:t.clientY-h.y-u,a="vertical"===s?v.width+(h.width-o):v.height+(h.height-o),l=e(o/r*100),c=e(a/r*100);l>=i.minSize&&c>=i.minSize&&(f.style[p]=l+"%",m.style[p]=c+"%")}t.preventDefault(),t.stopPropagation()}n.addEventListener("mousedown",(function(t){t.target&&t.target.classList.contains("gutter")&&(o=!0,d=parseInt(t.target.dataset.id,10),u="vertical"===s?t.offsetX:t.offsetY,f=r[d],m=r[d+1],h=f.getBoundingClientRect(),v=m.getBoundingClientRect(),n.addEventListener("mousemove",z,!1),n.addEventListener("mouseup",E,!1))}),!1)}export default t;
