!function(e){e(document).ready(function(){function e(){if(document.URL.indexOf("google.com/reader/view")>-1&&(H=!0),L)for(var e=L.split(/[,\n] ?/),t=e.length;t--;)if(document.URL.indexOf(e[t])>-1){u("mousewheel",o),H=!0;break}}function t(){if(document.body){var t=document.body,n=document.documentElement,o=window.innerHeight,a=t.scrollHeight;if(g=document.compatMode.indexOf("CSS")>=0?n:t,m=t,e(),T=!0,top!=self)C=!0;else if(a>o&&(t.offsetHeight<=o||n.offsetHeight<=o)&&(g.style.height="auto",g.offsetHeight<=o)){var i=document.createElement("div");i.style.clear="both",t.appendChild(i)}if(document.URL.indexOf("mail.google.com")>-1){var l=document.createElement("style");l.innerHTML=".iu { visibility: hidden }",(document.getElementsByTagName("head")[0]||n).appendChild(l)}E||(t.style.backgroundAttachment="scroll"),H&&u("keydown",r)}}function n(e,t,n,o){if(o||(o=1e3),d(t,n),K.push({x:t,y:n,lastX:0>t?.99:-.99,lastY:0>n?.99:-.99,start:+new Date}),!N){var r=function(){for(var a=+new Date,i=0,l=0,c=0;c<K.length;c++){var u=K[c],s=a-u.start,d=s>=p,f=d?1:s/p;b&&(f=h(f));var m=u.x*f-u.lastX>>0,g=u.y*f-u.lastY>>0;i+=m,l+=g,u.lastX+=m,u.lastY+=g,d&&(K.splice(c,1),c--)}if(t){var w=e.scrollLeft;e.scrollLeft+=i,i&&e.scrollLeft===w&&(t=0)}if(n){var y=e.scrollTop;e.scrollTop+=l,l&&e.scrollTop===y&&(n=0)}t||n||(K=[]),K.length?setTimeout(r,o/v+1):N=!1};setTimeout(r,0),N=!0}}function o(e){T||t();var o=e.target,r=l(o);if(!r||e.defaultPrevented||s(m,"embed")||s(o,"embed")&&/\.pdf/i.test(o.src))return!0;var a=e.wheelDeltaX||0,i=e.wheelDeltaY||0;a||i||(i=e.wheelDelta||0),Math.abs(a)>1.2&&(a*=w/120),Math.abs(i)>1.2&&(i*=w/120),n(r,-a,-i),e.preventDefault()}function r(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||o)return!0;if(s(t,"button")&&e.keyCode===M.spacebar)return!0;var r,a=0,i=0,c=l(m),u=c.clientHeight;switch(c==document.body&&(u=window.innerHeight),e.keyCode){case M.up:i=-x;break;case M.down:i=x;break;case M.spacebar:r=e.shiftKey?1:-1,i=-r*u*.9;break;case M.pageup:i=.9*-u;break;case M.pagedown:i=.9*u;break;case M.home:i=-c.scrollTop;break;case M.end:var d=c.scrollHeight-c.scrollTop-u;i=d>0?d+10:0;break;case M.left:a=-x;break;case M.right:a=x;break;default:return!0}n(c,a,i),e.preventDefault()}function a(e){m=e.target}function i(e,t){for(var n=e.length;n--;)O[X(e[n])]=t;return t}function l(e){var t=[],n=g.scrollHeight;do{var o=O[X(e)];if(o)return i(t,o);if(t.push(e),n===e.scrollHeight){if(!C||g.clientHeight+10<n)return i(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow"),"scroll"===overflow||"auto"===overflow))return i(t,e)}while(e=e.parentNode)}function c(e,t,n){window.addEventListener(e,t,n||!1)}function u(e,t,n){window.removeEventListener(e,t,n||!1)}function s(e,t){return e.nodeName.toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,(D.x!==e||D.y!==t)&&(D.x=e,D.y=t,K=[])}function f(e){var t,n,o;return e*=y,1>e?t=e-(1-Math.exp(-e)):(n=Math.exp(-1),e-=1,o=1-Math.exp(-e),t=n+o*(1-n)),t*k}function h(e){return e>=1?1:0>=e?0:(1==k&&(k/=f(1)),f(e))}var m,g,v=150,p=600,w=150,b=!0,y=5,k=1,H=!1,x=50,L="",C=!1,D={x:0,y:0},T=!1,E=!0,M={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},K=[],N=!1,O={};setInterval(function(){O={}},1e4);var X=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}();/chrome/.test(navigator.userAgent.toLowerCase())&&(c("mousedown",a),c("mousewheel",o),c("keydown",r),c("load",t))})}(jQuery);