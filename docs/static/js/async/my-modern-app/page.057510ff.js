"use strict";(self.webpackChunkmy_modern_app=self.webpackChunkmy_modern_app||[]).push([[85],{36926:(e,t,n)=>{n.r(t);var r=n(52235),i=n(79474),o=n(13274);function l(e){return c.apply(this,arguments)}function c(){return(c=(0,r.A)((function*(e){return new Promise(((t,n)=>{const r=new Image;r.src=e,r.onload=()=>{t(r)},r.onerror=e=>{n(e)}}))}))).apply(this,arguments)}function s(e){return 2*e}const a=[{type:"text",text:"\u6d4b\u8bd5\u6c34\u5370",x:10,y:10,color:"#000",fontSize:20}];t.default=function(){const[e,t]=(0,i.useState)({isUse:!1,track:null,isUseTorch:!1,trackStatus:!1}),[,n]=(0,i.useState)(""),c=(0,i.useRef)(null),u=(0,i.useRef)(null),d=(0,i.useRef)(null),f=(0,i.useRef)(null),h=(0,i.useRef)(null),v=(0,i.useRef)(null),[m,p]=(0,i.useState)("environment"),g=()=>{var e;null!==(e=c.current)&&void 0!==e&&e.srcObject&&c.current.srcObject.getTracks().forEach((e=>{e.stop()}))},x=function(){var e=(0,r.A)((function*(e){if(0!==a.length)for(const t of a)switch(t.type){case"img":{const[n,{path:r}]=[!1,{path:""}];if(n)throw new Error(`${t.url} \u6ca1\u6709\u627e\u5230`);const i=yield l(r);e.drawImage(i,t.x,t.y,t.width||0,t.height||0);break}case"text":{const n=t.color||"#000",r=t.fontSize||16;e.fillStyle=n,e.font=`${r}px normal`,(null==t?void 0:t.text)&&e.fillText(t.text,t.x,t.y);break}}}));return function(t){return e.apply(this,arguments)}}(),y=function(){var n=(0,r.A)((function*(){const n=s(document.documentElement.clientWidth||document.body.clientWidth),r=s(document.documentElement.clientHeight||document.body.clientHeight),i=(yield navigator.mediaDevices.enumerateDevices()).filter((e=>"videoinput"===e.kind));if(0===i.length)return void console.error("\u8bbe\u5907\u4e0d\u652f\u6301");console.log("videoDevices",i);const o={audio:!1,video:{facingMode:m,width:{min:1,ideal:Math.floor(n/3),max:n},height:{min:1,ideal:Math.floor(r/3),max:r}}};navigator.mediaDevices.getUserMedia(o).then((n=>{if(c.current){c.current.srcObject=n,c.current.setAttribute("playsinline","true"),c.current.setAttribute("webkit-playsinline","true"),c.current.play(),x(h.current);const r=n.getVideoTracks()[0];console.log("Constraints",r.getConstraints()),console.log("Capabilities",r.getCapabilities()),console.log("Settings",r.getSettings()),t({isUse:!0,track:n.getVideoTracks()[0]}),setTimeout((()=>{var n;t({isUseTorch:(null===(n=e.track)||void 0===n||null===(n=n.getCapabilities())||void 0===n?void 0:n.torch)||!1})}),500)}})).catch((e=>{console.error("\u8bbe\u5907\u4e0d\u652f\u6301",e)}))}));return function(){return n.apply(this,arguments)}}();return(0,i.useEffect)((()=>{var e;("https:"!==location.protocol&&console.error("\u8bf7\u4f7f\u7528https\u534f\u8bae"),d.current&&(h.current=d.current.getContext("2d")),f.current)&&(v.current=null===(e=f.current)||void 0===e?void 0:e.getContext("2d"));return y(),()=>{g()}}),[]),(0,o.jsx)("div",{children:(0,o.jsxs)("div",{ref:u,className:"relative",children:[(0,o.jsx)("div",{className:"fixed top-2 right-2 p-2 z-20",onClick:()=>{p((e=>"environment"===e?"user":"environment")),g(),y()},children:"Switch"}),(0,o.jsx)("div",{className:"trach-box",onClick:()=>{t((e=>({trackStatus:!e.trackStatus})))},children:"trach"}),(0,o.jsx)("div",{className:"fixed bottom-0 left-0 w-full flex items-center justify-center bg-transparent z-40",children:(0,o.jsx)("a",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white",onClick:()=>{var e,t,r,i;null===(e=v.current)||void 0===e||e.drawImage(c.current,0,0,null===(t=c.current)||void 0===t?void 0:t.videoWidth,null===(r=c.current)||void 0===r?void 0:r.videoHeight);const o=null===(i=f.current)||void 0===i?void 0:i.toDataURL("image/png");n(o)},children:"\u62cd"})}),(0,o.jsx)("video",{ref:c,className:"h-full w-full fixed left-0 top-0"}),(0,o.jsx)("canvas",{ref:d,id:"canvas",className:"h-full w-full fixed left-0 top-0"}),(0,o.jsx)("canvas",{ref:f,id:"camera-canvas",className:"h-full w-full fixed left-0 top-0 hidden"})]})})}}}]);