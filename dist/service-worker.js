if(!self.define){let e,r={};const n=(n,i)=>(n=new URL(n+".js",i).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let l={};const t=e=>n(e,o),c={module:{uri:o},exports:l,require:t};r[o]=Promise.all(i.map((e=>c[e]||t(e)))).then((e=>(s(...e),l)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"gina"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.24afba20.css",revision:null},{url:"/frontend",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/img/Instagram_icon.d8cc38fb.png",revision:null},{url:"/img/robert1.2e4f0dbd.jpg",revision:null},{url:"/img/robertback.843bd5ed.png",revision:null},{url:"/index.html",revision:"65ce83b98ac6faf16f214e23ba05052d"},{url:"/js/app.129406d6.js",revision:null},{url:"/js/chunk-vendors.ade29e8e.js",revision:null},{url:"/manifest.json",revision:"6f416e7dbc4b051249bfe70990c1b731"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
