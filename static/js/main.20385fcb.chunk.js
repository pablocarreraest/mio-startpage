(this["webpackJsonpmio-startpage"]=this["webpackJsonpmio-startpage"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(4),r=n.n(o),i=(n(10),n(11),n(2)),l=(n(12),(new Date).toLocaleString(),function(){var e=s.a.useState(new Date),t=Object(i.a)(e,2),n=t[0],c=t[1];s.a.useEffect((function(){var e=setInterval((function(){c(new Date)}),1e4);return function(){clearInterval(e)}}),[]);var o=n.toLocaleDateString("en",{weekday:"long"}),r="".concat(o,", ").concat(n.getDate()," ").concat(n.toLocaleDateString("en",{month:"long"}),"\n\n"),l=n.toLocaleTimeString("en",{hour:"numeric",hour12:!0,minute:"numeric"});return Object(a.jsx)("section",{className:"app-header",children:Object(a.jsxs)("div",{className:"header-main d-flex pb-6 border-bottom",children:[Object(a.jsx)("div",{className:"header-label",children:Object(a.jsx)("h1",{className:"text-left mb-1",children:"Benvenuto, sir"})}),Object(a.jsxs)("div",{className:"header-time text-right",children:[Object(a.jsx)("h1",{className:"mb-1",children:l}),Object(a.jsx)("small",{children:Object(a.jsx)("strong",{children:r})})]})]})})}),h=(n(13),function(){var e=s.a.useState(""),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)("section",{className:"app-search pb-6 border-bottom",children:[Object(a.jsx)("span",{className:"search-icon",children:"\uf197"}),Object(a.jsx)("input",{className:"form-control input-block input-dark",value:n,onChange:function(e){c(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(window.location.href="https://www.google.com/search?safe=strict&q="+n),"Shift"===e.key&&(window.location.href="https://www.duckduckgo.com/?q="+n)},type:"text",placeholder:"","aria-label":"Full-width input"}),Object(a.jsxs)("div",{className:"d-flex flex-justify-center mt-6",children:[Object(a.jsx)("a",{href:"https://www.google.com/search?safe=strict&q="+n,className:"btn btn-outline mr-2 box-shadow-none pt-3 pb-3 pl-5 pr-5",type:"button",children:"Google Search"}),Object(a.jsx)("a",{href:"https://duckduckgo.com/?q="+n,className:"btn btn-outline mr-2 box-shadow-none pt-3 pb-3 pl-5 pr-5",type:"button",children:"DuckDuckGo Search"}),Object(a.jsx)("a",{href:"https://www.amazon.com/s?k="+n,className:"btn btn-outline box-shadow-none pt-3 pb-3 pl-5 pr-5",type:"button",children:"Amazon Search"})]})]})});var b=function(){return Object(a.jsxs)("div",{className:"App position-relative overflow-x-hidden",children:[Object(a.jsx)(l,{}),Object(a.jsx)(h,{}),Object(a.jsx)("img",{className:"position-absolute top-0 rigth-0 left-0 bottom-0 rotate",src:"/mio-startpage/assets/img/stars.svg",alt:"",style:{zIndex:-10},width:"100%"}),Object(a.jsx)("img",{className:"position-absolute top-0 rigth-0 left-0 bottom-0 rotate",src:"/mio-startpage/assets/img/stars.svg",alt:"",style:{zIndex:-10},width:"100%"})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),u()}],[[14,1,2]]]);
//# sourceMappingURL=main.20385fcb.chunk.js.map