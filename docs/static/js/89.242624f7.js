/*! For license information please see 89.242624f7.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_modern_app=self.webpackChunkmy_modern_app||[]).push([[89],{66089:(n,e,r)=>{var t=r(57801),o=r(48088),i=r(16797),u=r(57633),a=r(42996),c=r(8457),l=r(52518),s=r(35285),f=r(13274),p=r(79474),d=r(31035),v=r.n(d),m=(0,p.createContext)({}),y=((0,p.createContext)({}),r(98966)),h=r(60089),g=Symbol.for("MODERN_PIPELINE"),_=function(n){if("function"==typeof n)return n;if(n&&"function"==typeof n.middleware)return n.middleware;throw new Error("".concat(n," is not a Middleware"))},w=function(){var n,e=[],r=function(n){return r=function(r,t,o){if(r>=e.length){if(n)return n(t);throw new Error("Expect returning a value, but all middlewares just calling next()")}return e[r](t,o)},t=function(n,e){return r(n,e,(function(){return t(n+1,arguments.length>0&&void 0!==arguments[0]?arguments[0]:e)}))},{start:function(n){return t(0,n)},dispatch:t};var r,t},t=r(),o=function(n,e){return function(n){return n?r(null==n?void 0:n.onLast):t}(e).start(n)},i=(n={},(0,y._)(n,g,!0),(0,y._)(n,"use",(function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];var o;return(o=e).push.apply(o,(0,l._)(r.map(_))),i})),(0,y._)(n,"run",o),(0,y._)(n,"middleware",(function(n,e){return o(n,{onLast:e})})),n);return i},b=function(){var n=w();return(0,a._)({},n)},x=Symbol.for("MODERN_WATERFALL"),E=function(n){if("function"==typeof n)return n;if(n&&"function"==typeof n.middleware)return n.middleware;throw new Error("".concat(n," is not a Brook or { brook: Brook }"))},S=function(){var n=w(),e=(0,h._)((0,a._)({},n),(0,y._)({use:function(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];var i;return(i=n).use.apply(i,(0,l._)(t.map(E).map(j))),e},run:function(e,r){return n.run(e,(0,h._)((0,a._)({},r),{onLast:function(n){return n}}))},middleware:function(e){return n.run(e,{onLast:function(n){return n}})}},x,!0));return e},j=function(n){return function(e,r){return r(n(e))}},R=Symbol.for("MODERN_ASYNC_WATERFALL"),A=function(n){if("function"==typeof n)return n;if(n&&"function"==typeof n.middleware)return n.middleware;throw new Error("".concat(n," is not a AsyncBrook or { brook: AsyncBrook }"))},P=function(n){return function(e,r){return Promise.resolve(n(e)).then((function(n){return r(n)}))}},M=Symbol.for("MODERN_WORKFLOW"),O=function(n){return function(e,r){return[n(e)].concat((0,l._)(r(e)))}},C=Symbol.for("MODERN_PARALLEL_WORKFLOW"),k=function(n){return function(e,r){return[n(e)].concat((0,l._)(r(e)))}},L=Symbol.for("MODERN_ASYNC_WORKFLOW"),D=function(n){return function(e,r){return Promise.resolve(n(e)).then((function(n){return Promise.resolve(r(e)).then((function(e){return[n].concat((0,l._)(e))}))}))}},$=function(n){0};function N(n){return function(n){var e=function(){var e=a.shift();c.push(i(e)),u=u.filter((function(n){return n[0]!==i(e)[r]}));var t=n.filter((function(n){return!c.find((function(e){return e[r]===n[r]}))}));a=t.filter((function(n){return!u.find((function(e){return e[1]===n[r]}))}))},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"pre",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"post",i=function(e){var t=n.find((function(n){return"string"==typeof e?n[r]===e:n[r]===e[r]}));if(!t)throw new Error("plugin ".concat(e," not existed"));return t},u=[];n.forEach((function(e){var a,c;null===(a=e[t])||void 0===a||a.forEach((function(t){n.find((function(n){return n.name===t}))&&u.push([i(t)[r],i(e)[r]])})),null===(c=e[o])||void 0===c||c.forEach((function(t){n.find((function(n){return n.name===t}))&&u.push([i(e)[r],i(t)[r]])}))}));for(var a=n.filter((function(n){return!u.find((function(e){return e[1]===n[r]}))})),c=[];a.length;)e();if(u.length){var l={};throw u.forEach((function(n){l[n[0]]=!0,l[n[1]]=!0})),new Error("plugins dependencies has loop: ".concat(Object.keys(l).join(",")))}return c}(n.slice())}var T,B,I=function(n,e){return n.some((function(n){return n.name===e.name}))},z=function(n){return null!==n&&"object"==typeof n},H=function(n,e){return n.hasOwnProperty(e)},F="SYNC_PLUGIN_SYMBOL",W={name:"untitled",pre:[],post:[],rivals:[],required:[],usePlugins:[],registerHook:{}},Y=function(n,e){var r={},t=q(e);if(e){var o=function(e){n.forEach((function(n){(null==n?void 0:n[e])&&t[e].use(n[e])})),r[e]=function(n,r){return t[e].run(n,(0,a._)({},r))}};for(var i in t)o(i)}return r},V=function(n){if(e=n,Boolean(null==e?void 0:e[x]))return S();var e,r,t;if(function(n){return Boolean(null==n?void 0:n[R])}(n))return r=b(),t=(0,h._)((0,a._)({},r),(0,y._)({use:function(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];var i;return(i=r).use.apply(i,(0,l._)(e.map(A).map(P))),t},run:function(n,e){return r.run(n,(0,h._)((0,a._)({},e),{onLast:function(n){return n}}))},middleware:function(n){return r.run(n,{onLast:function(n){return n}})}},R,!0)),t;if(function(n){return Boolean(null==n?void 0:n[M])}(n))return function(){var n=w(),e=(0,h._)((0,a._)({},n),(0,y._)({use:function(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];var i;return(i=n).use.apply(i,(0,l._)(t.map(O))),e},run:function(e){return n.run(e,{onLast:function(){return[]}}).filter(Boolean)}},M,!0));return e}();if(function(n){return Boolean(null==n?void 0:n[L])}(n))return function(){var n=b(),e=(0,h._)((0,a._)({},n),(0,y._)({use:function(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];var i;return(i=n).use.apply(i,(0,l._)(t.map(D))),e},run:function(e){var r,t=n.run(e,{onLast:function(){return[]}});return(r=t)&&"function"==typeof r.then?t.then((function(n){return n.filter(Boolean)})):t.filter(Boolean)}},L,!0));return e}();if(function(n){return Boolean(null==n?void 0:n[C])}(n))return function(){var n=w(),e=(0,h._)((0,a._)({},n),(0,y._)({run:function(e){return Promise.all(n.run(e,{onLast:function(){return[]}})).then((function(n){return n.filter(Boolean)}))},use:function(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];var i;return(i=n).use.apply(i,(0,l._)(t.map(k))),e}},C,!0));return e}();if(function(n){return Boolean(null==n?void 0:n[g])}(n))return w();throw new Error("Unknown hook: ".concat(n))},q=function(n){if(!n)return n;var e={};for(var r in n)e[r]=V(n[r]);return e},U=function(n,e){var r,t=0,o=(0,a._)({},n),i=function(){return r},u=function(n){o=(0,a._)({},n,o)},c=function(n){return z(n)&&H(n,F)&&n[F]===F},l=(0,h._)((0,a._)({},e),{useHookRunners:i}),s=function(n){var e=[],f=function(n){I(e,n)||e.push((0,a._)({},n))},p=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return e.forEach((function(n){if(c(n))f(n);else if("function"==typeof n){var e=n();f(d(e.setup,e))}else z(n)&&f(d(n.setup,n))})),v},d=function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(null===(n=r.usePlugins)||void 0===n?void 0:n.length)&&r.usePlugins.forEach((function(n){p(d(n.setup,n))})),r.registerHook&&u(r.registerHook),(0,h._)((0,a._)((0,h._)((0,a._)({},W),{name:"No.".concat(t++," plugin")}),r),{SYNC_PLUGIN_SYMBOL:F,setup:e})},v={createPlugin:d,isPlugin:c,usePlugin:p,init:function(){var t=N(e),i=(0,a._)({},l,n);$();var u=t.map((function(n){return n.setup(i)}));return r=Y(u,o)},clear:function(){e=[]},run:function(n){return n()},registerHook:u,useRunner:i,clone:s};return v};return s()}({hoc:w(),provide:w(),client:b(),server:b(),init:b(),pickContext:w()}),G=(U.createPlugin,r(64395)),J=r(29597),K=r.n(J);(B=T||(T={}))[B.idle=0]="idle",B[B.loading=1]="loading",B[B.fulfilled=2]="fulfilled",B[B.rejected=3]="rejected";var Q=function(n){var e,r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.skipStatic,a=void 0!==o&&o,c=t.skipNonStatic,f=void 0!==c&&c,p=new Map,d=(e=new Map,function(n){var r=e.get(n);if(r)return r;var t=JSON.stringify(n);return K()(t,"params should be not null value"),e.set(n,t),t}),v=(r=(0,i._)((function(){var n,e,r,t,o,i,a,c,l,f;return(0,s.YH)(this,(function(s){switch(s.label){case 0:n=[],e=!0,r=!1,t=void 0;try{for(o=p[Symbol.iterator]();!(e=(i=o.next()).done);e=!0)a=(0,G._)(i.value,2),c=a[0],l=a[1],f=l.promise,(0,u._)(f,Promise)&&n.push([c,l])}catch(d){r=!0,t=d}finally{try{e||null==o.return||o.return()}finally{if(r)throw t}}return[4,Promise.all(n.map((function(n){return n[1].promise})))];case 1:return s.sent(),[2,n.reduce((function(n,e){var r=(0,G._)(e,2),t=r[0],o=r[1];return n[t]=o.result,n}),{})]}}))})),function(){return r.apply(this,arguments)});return{hasPendingLoaders:function(){var n=!0,e=!1,r=void 0;try{for(var t,o=p.values()[Symbol.iterator]();!(n=(t=o.next()).done);n=!0){var i=t.value.promise;if((0,u._)(i,Promise))return!0}}catch(a){e=!0,r=a}finally{try{n||null==o.return||o.return()}finally{if(e)throw r}}return!1},awaitPendingLoaders:v,add:function(e,r){var t=d(r.params),o=p.get(t),c=r._cache;if(!o||!1===c){var v=f&&!r.static,m=a&&r.static,y=v||m;o=function(n){var e,r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{loading:!1,reloading:!1,data:void 0,error:void 0},o=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=0,f=t.data,p=t.error,d=!1,v=new Set,m=(r=(0,i._)((function(){return(0,s.YH)(this,(function(n){return a||1===c?[2,e]:(c=1,h(),[2,e=o().then((function(n){f=n,p=null,c=2})).catch((function(n){p=n,f=null,c=3})).finally((function(){e=null,d=!0,h()}))])}))})),function(){return r.apply(this,arguments)}),y=function(){return{loading:!d&&1===c,reloading:d&&1===c,data:f,error:(0,u._)(p,Error)?"".concat(p.message):p,_error:p}},h=function(){(0,l._)(v).forEach((function(n){n(c,y())}))};return{get result(){return y()},get promise(){return e},onChange:function(n){return v.add(n),function(){v.delete(n)}},load:m}}(t,void 0!==n[t]?n[t]:{data:r.initialData},e,y),p.set(t,o)}return t},get:function(n){return p.get(n)}}};var X,Z=new WeakMap,nn=function(n){return{loaderManager:Q({}),runner:n,isBrowser:!0,routeManifest:"undefined"!=typeof window&&window._MODERNJS_ROUTE_MANIFEST}},en=function(n){var e,r=n.plugins,t=n.props,o=U.clone();return(e=o).usePlugin.apply(e,(0,l._)(r)),function(n){var e=o.init(),r=function(r){var t,o=p.createElement(n||p.Fragment,n?(0,a._)({},r):null,n?r.children:p.cloneElement(r.children,(0,a._)({},null===(t=r.children)||void 0===t?void 0:t.props,r))),i=(0,p.useContext)(m);return e.provide({element:o,props:(0,a._)({},r),context:i},{onLast:function(n){return n.element}})};n&&v()(r,n);var i=e.hoc({App:r},{onLast:function(n){var r=n.App;return v()((function(n){var o=n.context,i=(0,c._)(n,["context"]),u=o;(null==u?void 0:u.runner)||(u=nn(e),e.init({context:u},{onLast:function(n){var e,t=n.context;return null==r||null===(e=r.init)||void 0===e?void 0:e.call(r,t)}}));var l=(0,a._)({},i,t);return(0,f.jsx)(m.Provider,{value:u,children:(0,f.jsx)(r,(0,a._)({},l))})}),r)}});return Z.set(i,e),i}},rn=(X=(0,i._)((function(n,e,r,t){var o,i,c,l,f,d,v,m,y,h,g,_,w,b,x;return(0,s.YH)(this,(function(s){switch(s.label){case 0:return o=n,(i=Z.get(o))||(o=en({plugins:[]})(o),i=Z.get(o)),c=nn(i),l=function(n){return i.init({context:n},{onLast:function(n){var e,r=n.context;return null==o||null===(e=o.init)||void 0===e?void 0:e.call(o,r)}})},e?"undefined"!=typeof window&&"nodejs"!==window.name?function(n){return"string"==typeof n||"undefined"!=typeof HTMLElement&&(0,u._)(n,HTMLElement)}(e)?(v=window._SSR_DATA,m=(null==v||null===(f=v.data)||void 0===f?void 0:f.loadersData)||{},y=Object.keys(m).reduce((function(n,e){var r=m[e];return!1!==r.loading||(n[e]=r),n}),{}),Object.assign(c,(0,a._)({loaderManager:Q(y,{skipStatic:!0})},v?{ssrContext:null==v?void 0:v.context}:{})),c.initialData=null==v||null===(d=v.data)||void 0===d?void 0:d.initialData,[4,l(c)]):[3,2]:[3,4]:[2,p.createElement(o,{context:c})];case 1:if((h=s.sent())&&(c.initialData=h),g="string"!=typeof e?e:document.getElementById(e||"root"),!t)throw Error("The `bootstrap` need provide `ReactDOM` parameter");return _=function(n){if(r)r.render(n);else{if(!t.createRoot)throw Error("The `bootstrap` `ReactDOM` parameter needs to provide the `createRoot` method");t.createRoot(g).render(n)}},w=function(n,e){if(!t.hydrateRoot)throw Error("The `bootstrap` `ReactDOM` parameter needs to provide the `hydrateRoot` method");t.hydrateRoot(g,n)},[2,i.client({App:o,context:c,ModernRender:_,ModernHydrate:w},{onLast:function(n){var e=n.App;_(p.createElement(e,{context:c}))}})];case 2:throw Error("`bootstrap` needs id in browser environment, it needs to be string or element");case 3:return[3,6];case 4:return Object.assign(c,{ssrContext:e,isBrowser:!1,loaderManager:Q({},{skipNonStatic:e.staticGenerate,skipStatic:!e.staticGenerate})}),b=function(n){if("undefined"!=typeof Response&&(0,u._)(n,Response)&&n.status>=300&&n.status<=399){var e=n.status,r=n.headers.get("Location")||"/",t=c.ssrContext;return t&&(t.res.statusCode=e,t.res.setHeader("Location",r),t.redirection=t.redirection||{},t.redirection.status=e,t.redirection.url=r),!0}return!1},[4,l(c)];case 5:if(x=s.sent(),!b(x))return c.initialData=x,[2,i.server({App:o,context:c})];s.label=6;case 6:return[2]}}))})),function(n,e,r,t){return X.apply(this,arguments)}),tn=function(n,e){return"undefined"!=typeof document&&(window._routeModules[e]=n),n},on=function(n){return console.error(n),null},un=r(52115);"undefined"!=typeof document&&(window._routeModules={});const an=[{path:"/",children:[{_component:"@_modern_js_src/routes/my-modern-app/page",id:"my-modern-app/page",type:"nested",path:"my-modern-app",lazyImport:()=>r.e(85).then(r.bind(r,36926)).then((n=>tn(n,"my-modern-app/page"))).catch(on),component:(0,p.lazy)((()=>r.e(85).then(r.bind(r,36926)).then((n=>tn(n,"my-modern-app/page"))).catch(on)))},{_component:"@_modern_js_src/routes/page",index:!0,id:"page",type:"nested",lazyImport:()=>Promise.all([r.e(740),r.e(441),r.e(530)]).then(r.bind(r,89492)).then((n=>tn(n,"page"))).catch(on),component:(0,p.lazy)((()=>Promise.all([r.e(740),r.e(441),r.e(530)]).then(r.bind(r,89492)).then((n=>tn(n,"page"))).catch(on)))},{_component:"@_modern_js_src/routes/schulte/page",id:"schulte/page",type:"nested",path:"schulte",lazyImport:()=>Promise.all([r.e(740),r.e(441),r.e(789),r.e(469)]).then(r.bind(r,28735)).then((n=>tn(n,"schulte/page"))).catch(on),component:(0,p.lazy)((()=>Promise.all([r.e(740),r.e(441),r.e(789),r.e(469)]).then(r.bind(r,28735)).then((n=>tn(n,"schulte/page"))).catch(on)))},{_component:"@_modern_js_src/routes/tailwind/page",id:"tailwind/page",type:"nested",path:"tailwind",lazyImport:()=>r.e(839).then(r.bind(r,25280)).then((n=>tn(n,"tailwind/page"))).catch(on),component:(0,p.lazy)((()=>r.e(839).then(r.bind(r,25280)).then((n=>tn(n,"tailwind/page"))).catch(on)))}],isRoot:!0,_component:"@_modern_js_src/routes/layout",id:"layout",type:"nested",lazyImport:()=>Promise.resolve().then(r.bind(r,52115)).then((n=>tn(n,"layout"))).catch(on),component:un.default}];var cn=r(79870),ln=r(95926),sn=S(),fn=r(36925);function pn(n){var e=.001*(new Date).getTime(),r=Math.floor(e),t=Math.floor(e%1*1e9);return n&&(r-=n[0],(t-=n[1])<0&&(r--,t+=1e9)),[r,t]}var dn=function(){var n=pn();return function(){return function(n){var e=(0,G._)(pn(n),2);return 1e3*e[0]+e[1]/1e6}(n)}},vn=function(n){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.children,o=n.index,i=n.id,u=n.component,c=n.isRoot,l=n.lazyImport,s=n.config,d=n.handle,v=u,m=r.parent,y=r.DeferredDataComponent,g=r.props,_=void 0===g?{}:g,w=r.reporter,b={caseSensitive:n.caseSensitive,path:n.path,id:n.id,loader:mn(n,w),action:n.action,hasErrorBoundary:n.hasErrorBoundary,shouldRevalidate:n.shouldRevalidate,handle:(0,a._)({},d,"object"==typeof s?null==s?void 0:s.handle:{}),index:n.index,element:n.element,errorElement:n.errorElement};if(n.error){var x=(0,f.jsx)(n.error,{});b.errorElement=x}if(v)if((null==m?void 0:m.loading)&&l){var E=m.loading;e=yn(v)?(0,f.jsx)(v,{fallback:(0,f.jsx)(E,{})}):(0,f.jsx)(p.Suspense,{fallback:(0,f.jsx)(E,{}),children:(0,f.jsx)(v,{})})}else e=yn(v)&&l?(0,f.jsx)(v,{}):c?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(v,(0,a._)({},_)),"undefined"==typeof document&&y&&(0,f.jsx)(y,{nonce:null==_?void 0:_.nonce})]}):l?(0,f.jsx)(p.Suspense,{fallback:null,children:(0,f.jsx)(v,{})}):(0,f.jsx)(v,{});else n.loading=null==m?void 0:m.loading,b.element=(0,f.jsx)(cn.sv,{});e&&(b.element=e);var S=null==t?void 0:t.map((function(e){return vn(e,{parent:n,reporter:w})}));return o?(0,f.jsx)(cn.qh,(0,h._)((0,a._)({},b),{index:!0}),i):(0,f.jsx)(cn.qh,(0,h._)((0,a._)({},b),{index:!1,children:S}),i)};function mn(n,e){var r=n.loader;return r?function(){var t=(0,i._)((function(t){var o,i,u;return(0,s.YH)(this,(function(a){switch(a.label){case 0:return"function"==typeof n.lazyImport&&n.lazyImport(),o=dn(),[4,r(t)];case 1:return i=a.sent(),u=o(),"undefined"==typeof document&&e&&(null==e||e.reportTiming("".concat("server-loader","-").concat(n.id),u)),[2,i]}}))}));return function(n){return t.apply(this,arguments)}}():function(){return"function"==typeof n.lazyImport&&n.lazyImport(),null}}function yn(n){return n&&"Loadable"===n.displayName&&n.preload&&"function"==typeof n.preload}var hn=function(){return(0,f.jsx)("div",{style:{margin:"150px auto",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"},children:"404"})};function gn(){return null}function _n(n){var e=n.routesConfig,r=n.props,t=n.ssrMode,o=n.reporter;if(!e)return null;var i=e.routes,u=e.globalApp;if(!i)return null;var l=function(n,e){var r=e.globalApp,t=e.ssrMode,o=e.props,i=e.reporter,u=function(n){var e=n.Component,t=(0,c._)(n,["Component"]),o=r;return o?(0,f.jsx)(o,(0,a._)({Component:e},t)):(0,f.jsx)(e,(0,a._)({},t))},l=[],s=!0,p=!1,d=void 0;try{for(var v,m=n[Symbol.iterator]();!(s=(v=m.next()).done);s=!0){var y=v.value;if("nested"===y.type){var h=vn(y,{DeferredDataComponent:"stream"===t?gn:void 0,props:o,reporter:i});l.push(h)}else{var g=(0,f.jsx)(cn.qh,{path:y.path,element:(0,f.jsx)(u,{Component:y.component})},y.path);l.push(g)}}}catch(_){p=!0,d=_}finally{try{s||null==m.return||m.return()}finally{if(p)throw d}}return l.push((0,f.jsx)(cn.qh,{path:"*",element:(0,f.jsx)(hn,{})},"*")),l}(i,{globalApp:u,ssrMode:t,props:r,reporter:o});return l}function wn(n){if(!n)return null;var e=Object.entries(n),r={},t=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(t=(u=a.next()).done);t=!0){var c=(0,G._)(u.value,2),l=c[0],s=c[1];if(s&&"RouteErrorResponse"===s.__type)r[l]=new fn.VV(s.status,s.statusText,s.data,!0===s.internal);else if(s&&"Error"===s.__type){var f=new Error(s.message);f.stack=s.stack,r[l]=f}else r[l]=s}}catch(p){o=!0,i=p}finally{try{t||null==a.return||a.return()}finally{if(o)throw i}}return r}var bn={routes:[]};var xn=function(n){var e=n.serverBase,r=void 0===e?[]:e,t=n.supportHtml5History,o=void 0===t||t,i=n.basename,u=void 0===i?"":i,c=n.routesConfig,s=n.createRoutes,d=[];return bn=c,window._SERVER_DATA=function(n){var e=document.querySelectorAll("#".concat(n));if(0!==e.length){var r=e[e.length-1];if(r)try{return JSON.parse((null==r?void 0:r.textContent)||"")}catch(t){return void console.error("parse ".concat(n," error"),t)}}}("__MODERN_SERVER_DATA__"),{name:"@modern-js/plugin-router",registerHook:{modifyRoutes:sn},setup:function(n){return{init:function(n,e){var r=n.context;return r.router={useMatches:cn.FE,useLocation:cn.zy,useHref:cn.$P},Object.defineProperty(r,"routes",{get:function(){return d}}),e({context:r})},hoc:function(e,t){var i=e.App;if(!bn&&!s)return t({App:i});var y,g=(y=function(e){var t,i,c=(null===(t=window._SERVER_DATA)||void 0===t?void 0:t.router.baseUrl)||(i=location.pathname,r.find((function(n){return 0===i.search(n)}))||"/"),f="/"===c?function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];var t,o,i=new RegExp("".concat("/","{1,}"),"g");return t=e.join("/").replace(i,"/"),(o=t)&&"string"==typeof o?(o.startsWith(".")&&(o=o.slice(1)),o.startsWith("/")||(o="/".concat(o)),o.endsWith("/")&&"/"!==o&&(o=o.slice(0,o.length-1)),o):o}(c,u):c,v=window._ROUTER_DATA,y=(0,p.useContext)(m),g=y.unstable_getBlockNavState;return(0,p.useMemo)((function(){(null==v?void 0:v.errors)&&(v=(0,h._)((0,a._)({},v),{errors:wn(v.errors)})),d=s?s():(0,cn.Eu)(_n({routesConfig:bn,props:e}));var r=n.useHookRunners();d=r.modifyRoutes(d);var t=o?(0,ln.Ys)(d,{basename:f,hydrationData:v}):(0,ln.Ge)(d,{basename:f,hydrationData:v}),i=t.subscribe;return t.subscribe=function(n){return i((function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(!g||!g())return n.apply(void 0,(0,l._)(r))}))},Object.defineProperty(y,"remixRouter",{get:function(){return t},configurable:!0}),t}),[bn,e,f,v,g])},function(n){!1;var e=y(n);return(0,f.jsx)(i,(0,h._)((0,a._)({},n),{children:(0,f.jsx)(ln.pg,{router:e})}))});return i&&(g=v()(g,i)),(null==c?void 0:c.globalApp)?t({App:v()(g,c.globalApp)}):t({App:g})},pickContext:function(n,e){var r=n.context,t=n.pickedContext,o=r.remixRouter;if(!o)return e({context:r,pickedContext:t});var i={navigate:o.navigate,get location(){return o.state.location}};return e({context:r,pickedContext:(0,h._)((0,a._)({},t),{router:i})})}}}}};const En="undefined"!=typeof window&&"nodejs"!==window.name;let Sn=null;Sn=function(){const n=(0,t.A)((0,t.A)({},false.config),"function"==typeof config?config():{});return Sn=en({plugins:[xn((0,t.A)((0,t.A)({},{serverBase:["/"],routesConfig:{routes:an,globalApp:false}}),null==n?void 0:n.router))]})(),Sn.init||"undefined"==typeof appInit||(Sn.init=appInit),En&&rn(Sn,"root",null,o),Sn}()},31035:(n,e,r)=>{var t=r(35959),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function c(n){return t.isMemo(n)?u:a[n.$$typeof]||o}a[t.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[t.Memo]=u;var l=Object.defineProperty,s=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,v=Object.prototype;n.exports=function n(e,r,t){if("string"!=typeof r){if(v){var o=d(r);o&&o!==v&&n(e,o,t)}var u=s(r);f&&(u=u.concat(f(r)));for(var a=c(e),m=c(r),y=0;y<u.length;++y){var h=u[y];if(!(i[h]||t&&t[h]||m&&m[h]||a&&a[h])){var g=p(r,h);try{l(e,h,g)}catch(_){}}}}return e}},29597:n=>{n.exports=function(n,e,r,t,o,i,u,a){if(!n){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,t,o,i,u,a],s=0;(c=new Error(e.replace(/%s/g,(function(){return l[s++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},95843:(n,e)=>{var r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,_=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function b(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case t:switch(n=n.type){case s:case f:case i:case a:case u:case d:return n;default:switch(n=n&&n.$$typeof){case l:case p:case y:case m:case c:return n;default:return e}}case o:return e}}}function x(n){return b(n)===f}e.AsyncMode=s,e.ConcurrentMode=f,e.ContextConsumer=l,e.ContextProvider=c,e.Element=t,e.ForwardRef=p,e.Fragment=i,e.Lazy=y,e.Memo=m,e.Portal=o,e.Profiler=a,e.StrictMode=u,e.Suspense=d,e.isAsyncMode=function(n){return x(n)||b(n)===s},e.isConcurrentMode=x,e.isContextConsumer=function(n){return b(n)===l},e.isContextProvider=function(n){return b(n)===c},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===t},e.isForwardRef=function(n){return b(n)===p},e.isFragment=function(n){return b(n)===i},e.isLazy=function(n){return b(n)===y},e.isMemo=function(n){return b(n)===m},e.isPortal=function(n){return b(n)===o},e.isProfiler=function(n){return b(n)===a},e.isStrictMode=function(n){return b(n)===u},e.isSuspense=function(n){return b(n)===d},e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===i||n===f||n===a||n===u||n===d||n===v||"object"==typeof n&&null!==n&&(n.$$typeof===y||n.$$typeof===m||n.$$typeof===c||n.$$typeof===l||n.$$typeof===p||n.$$typeof===g||n.$$typeof===_||n.$$typeof===w||n.$$typeof===h)},e.typeOf=b},35959:(n,e,r)=>{n.exports=r(95843)}}]);