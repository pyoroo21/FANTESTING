/*!
   JW Player version 8.8.1
   Copyright (c) 2019, JW Player, All Rights Reserved 
   This source code and its use and distribution is subject to the terms 
   and conditions of the applicable license agreement. 
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.8.1/notice.txt
*/
(window.webpackJsonpjwplayer=window.webpackJsonpjwplayer||[]).push([[9],{146:function(t,e,i){"use strict";function r(t,e){this.name="ParsingError",this.code=t.code,this.message=e||t.message}function n(t){function e(t,e,i,r){return 3600*(0|t)+60*(0|e)+(0|i)+(0|r)/1e3}var i=t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return i?i[3]?e(i[1],i[2],i[3].replace(":",""),i[4]):i[1]>59?e(i[1],i[2],0,i[4]):e(0,i[1],i[2],i[4]):null}i.r(e),r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}};var o={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},a={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},s={v:"title",lang:"lang"},h={rt:"ruby"};function l(t,e){function i(){if(!e)return null;var t,i=e.match(/^([^<]*)(<[^>]+>?)?/);return t=i[1]?i[1]:i[2],e=e.substr(t.length),t}function r(t){return o[t]}function l(t){for(var e;e=t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)t=t.replace(e[0],r);return t}function c(t,e){return!h[e.localName]||h[e.localName]===t.localName}function p(e,i){var r=a[e];if(!r)return null;var n=t.document.createElement(r),o=s[e];return o&&i&&(n[o]=i.trim()),n}for(var u,f=t.document.createElement("div"),d=f,g=[];null!==(u=i());)if("<"!==u[0])d.appendChild(t.document.createTextNode(l(u)));else{if("/"===u[1]){g.length&&g[g.length-1]===u.substr(2).replace(">","")&&(g.pop(),d=d.parentNode);continue}var m=n(u.substr(1,u.length-2)),v=void 0;if(m){v=t.document.createProcessingInstruction("timestamp",m),d.appendChild(v);continue}var y=u.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!y)continue;if(!(v=p(y[1],y[3])))continue;if(!c(d,v))continue;y[2]&&(v.className=y[2].substr(1).replace("."," ")),g.push(y[1]),d.appendChild(v),d=v}return f}var c=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function p(t){for(var e=0;e<c.length;e++){var i=c[e];if(t>=i[0]&&t<=i[1])return!0}return!1}function u(t,e){for(var i=e.childNodes.length-1;i>=0;i--)t.push(e.childNodes[i])}function f(t){if(!t||!t.length)return null;var e=t.pop(),i=e.textContent||e.innerText;if(i){var r=i.match(/^.*(\n|\r)/);return r?(t.length=0,r[0]):i}return"ruby"===e.tagName?f(t):e.childNodes?(u(t,e),f(t)):void 0}function d(t){if(!t||!t.childNodes)return"ltr";var e,i=[];for(u(i,t);e=f(i);)for(var r=0;r<e.length;r++)if(p(e.charCodeAt(r)))return"rtl";return"ltr"}function g(){}function m(t,e){g.call(this),this.cue=e,this.cueDiv=l(t,e.text),this.cueDiv.className="jw-text-track-cue jw-reset";var i="horizontal-tb";/^(lr|rl)$/.test(e.vertical)&&(i="vertical-"+e.vertical);var r={textShadow:"",position:"relative",paddingLeft:0,paddingRight:0,left:0,top:0,bottom:0,display:"inline",writingMode:i,unicodeBidi:"plaintext"};this.applyStyles(r,this.cueDiv),this.div=t.document.createElement("div"),r={textAlign:"middle"===e.align?"center":e.align,whiteSpace:"pre-line",position:"absolute",direction:d(this.cueDiv),writingMode:i,unicodeBidi:"plaintext"},this.applyStyles(r),this.div.appendChild(this.cueDiv);var n=0;switch(e.align){case"start":case"left":n=e.position;break;case"middle":case"center":n=("auto"===e.position?50:e.position)-e.size/2;break;case"end":case"right":n=e.position-e.size}n=Math.max(Math.min(100,n),0),e.vertical?this.applyStyles({top:this.formatStyle(n,"%"),height:this.formatStyle(e.size,"%")}):this.applyStyles({left:this.formatStyle(n,"%"),width:this.formatStyle(e.size,"%")}),this.move=function(t){this.applyStyles({top:this.formatStyle(t.top,"px"),bottom:this.formatStyle(t.bottom,"px"),left:this.formatStyle(t.left,"px"),paddingRight:this.formatStyle(t.right,"px"),height:"auto",width:this.formatStyle(t.width,"px")})}}function v(t){var e,i,r,n,o=t.div;if(o){i=o.offsetHeight,r=o.offsetWidth,n=o.offsetTop;var a=o.firstChild,s=a&&a.getClientRects&&a.getClientRects();t=o.getBoundingClientRect(),e=s?Math.max(s[0]&&s[0].height||0,t.height/s.length):0}this.left=t.left,this.right=t.right,this.top=t.top||n,this.height=t.height||i,this.bottom=t.bottom||n+(t.height||i),this.width=t.width||r,this.lineHeight=void 0!==e?e:t.lineHeight,this.width=Math.ceil(this.width+1)}function y(t,e,i,r,n){var o=new v(e),a=e.cue,s=function(t){if("number"==typeof t.line&&(t.snapToLines||t.line>=0&&t.line<=100))return t.line;if(!t.track||!t.track.textTrackList||!t.track.textTrackList.mediaElement)return-1;for(var e=t.track,i=e.textTrackList,r=0,n=0;n<i.length&&i[n]!==e;n++)"showing"===i[n].mode&&r++;return-1*++r}(a),h=[];if(a.snapToLines){var l;switch(a.vertical){case"":h=["+y","-y"],l="height";break;case"rl":h=["+x","-x"],l="width";break;case"lr":h=["-x","+x"],l="width"}var c=o.lineHeight,p=Math.floor(i[l]/c);s=Math.min(s,p-n);var u=c*Math.round(s),f=i[l]+c,d=h[0];if(Math.abs(u)>f&&(u=u<0?-1:1,u*=Math.ceil(f/c)*c),s<0)u+=a.vertical?i.width:i.height,u-=n*c,h=h.slice().reverse();u-=n,o.move(d,u)}else{var g=o.lineHeight/i.height*100;switch(a.lineAlign){case"middle":s-=g/2;break;case"end":s-=g}switch(a.vertical){case"":e.applyStyles({top:e.formatStyle(s,"%")});break;case"rl":e.applyStyles({left:e.formatStyle(s,"%")});break;case"lr":e.applyStyles({paddingRight:e.formatStyle(s,"%")})}h=["+y","-x","+x","-y"],o=new v(e)}var m=function(t,e){for(var n,o=new v(t),a=1,s=0;s<e.length;s++){for(;t.overlapsOppositeAxis(i,e[s])||t.within(i)&&t.overlapsAny(r);)t.move(e[s]);if(t.within(i))return t;var h=t.intersectPercentage(i);a>h&&(n=new v(t),a=h),t=new v(o)}return n||o}(o,h);e.move(m.toCSSCompatValues(i))}function w(){}g.prototype.applyStyles=function(t,e){for(var i in e=e||this.div,t)t.hasOwnProperty(i)&&(e.style[i]=t[i])},g.prototype.formatStyle=function(t,e){return 0===t?0:t+e},m.prototype=Object.create(g.prototype),m.prototype.constructor=m,v.prototype.move=function(t,e){switch(e=void 0!==e?e:this.lineHeight,t){case"+x":this.left+=e,this.right+=e;break;case"-x":this.left-=e,this.right-=e;break;case"+y":this.top+=e,this.bottom+=e;break;case"-y":this.top-=e,this.bottom-=e}},v.prototype.overlaps=function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},v.prototype.overlapsAny=function(t){for(var e=0;e<t.length;e++)if(this.overlaps(t[e]))return!0;return!1},v.prototype.within=function(t){return this.top>=t.top&&this.bottom<=t.bottom&&this.left>=t.left&&this.right<=t.right},v.prototype.overlapsOppositeAxis=function(t,e){switch(e){case"+x":return this.left<t.left;case"-x":return this.right>t.right;case"+y":return this.top<t.top;case"-y":return this.bottom>t.bottom}},v.prototype.intersectPercentage=function(t){return Math.max(0,Math.min(this.right,t.right)-Math.max(this.left,t.left))*Math.max(0,Math.min(this.bottom,t.bottom)-Math.max(this.top,t.top))/(this.height*this.width)},v.prototype.toCSSCompatValues=function(t){return{top:this.top-t.top,bottom:t.bottom-this.bottom,left:this.left-t.left,paddingRight:t.right-this.right,height:this.height,width:this.width}},v.getSimpleBoxPosition=function(t){var e=t.div?t.div.offsetHeight:t.tagName?t.offsetHeight:0,i=t.div?t.div.offsetWidth:t.tagName?t.offsetWidth:0,r=t.div?t.div.offsetTop:t.tagName?t.offsetTop:0;return{left:(t=t.div?t.div.getBoundingClientRect():t.tagName?t.getBoundingClientRect():t).left,right:t.right,top:t.top||r,height:t.height||e,bottom:t.bottom||r+(t.height||e),width:t.width||i}},w.StringDecoder=function(){return{decode:function(t){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}},w.convertCueToDOMTree=function(t,e){return t&&e?l(t,e):null};w.processCues=function(t,e,i,r){if(!t||!e||!i)return null;for(;i.firstChild;)i.removeChild(i.firstChild);if(!e.length)return null;var n=t.document.createElement("div");if(n.className="jw-text-track-container jw-reset",n.style.position="absolute",n.style.left="0",n.style.right="0",n.style.top="0",n.style.bottom="0",n.style.margin="1.5%",i.appendChild(n),function(t){for(var e=0;e<t.length;e++)if(t[e].hasBeenReset||!t[e].displayState)return!0;return!1}(e)||r){var o=[],a=v.getSimpleBoxPosition(n),s=e.reduce(function(t,e){return t+e.text.split("\n").length},0);!function(){for(var i=0;i<e.length;i++){var r=e[i],h=new m(t,r);h.div.className="jw-text-track-display jw-reset",n.appendChild(h.div),y(0,h,a,o,s),s-=r.text.split("\n").length,r.displayState=h.div,o.push(v.getSimpleBoxPosition(h))}}()}else for(var h=0;h<e.length;h++)n.appendChild(e[h].displayState)};var b=window.WebVTT;b||(window.WebVTT=b=w),e.default=b}}]);