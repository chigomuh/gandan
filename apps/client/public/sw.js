if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(n[a])return;let o={};const t=e=>s(e,a),r={module:{uri:a},exports:o,require:t};n[a]=Promise.all(i.map((e=>r[e]||t(e)))).then((e=>(c(...e),o)))}}define(["./workbox-981179b2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-08c0f138e358b397.js",revision:"08c0f138e358b397"},{url:"/_next/static/chunks/main-d1342be82cd3813b.js",revision:"d1342be82cd3813b"},{url:"/_next/static/chunks/pages/_app-4d6abf2872699e6d.js",revision:"4d6abf2872699e6d"},{url:"/_next/static/chunks/pages/_error-e6e6c107caad481a.js",revision:"e6e6c107caad481a"},{url:"/_next/static/chunks/pages/index-1a79a93ff1786225.js",revision:"1a79a93ff1786225"},{url:"/_next/static/chunks/pages/login-b1e75ffc2860667d.js",revision:"b1e75ffc2860667d"},{url:"/_next/static/chunks/pages/news/%5Bid%5D-727c58b179652857.js",revision:"727c58b179652857"},{url:"/_next/static/chunks/pages/oauth/google-4b436dc9a0c2acf8.js",revision:"4b436dc9a0c2acf8"},{url:"/_next/static/chunks/pages/oauth/kakao-195f6949729d433c.js",revision:"195f6949729d433c"},{url:"/_next/static/chunks/pages/user/mynews-8b95a3c8dbdd77e5.js",revision:"8b95a3c8dbdd77e5"},{url:"/_next/static/chunks/pages/user/profile-69eab9dc340cab0d.js",revision:"69eab9dc340cab0d"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-36d12a75f0098f30.js",revision:"36d12a75f0098f30"},{url:"/_next/static/dqKL1gHYHE70KOB_frqfo/_buildManifest.js",revision:"49268b4738d518796c83e248b94dd783"},{url:"/_next/static/dqKL1gHYHE70KOB_frqfo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/avatar.ca901ba7.jpg",revision:"92afa472004d275bcea600424f293525"},{url:"/_next/static/media/btn_google_dark_normal_ios.5f00e22a.svg",revision:"1bb805446b880e7e63cae7ab00433f15"},{url:"/_next/static/media/btn_google_light_normal_ios.c66f0d5a.svg",revision:"1cdc8fce9609d07f0e9d8d0bc4b61f8f"},{url:"/_next/static/media/kakao_login_large_narrow.da7fee3d.png",revision:"c131a7373ebf8184425abc238dab0d0b"},{url:"/_next/static/media/kakao_login_large_wide.0e0e069d.png",revision:"b2df8abced56e0bbd49f7878a411e9c0"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon.ico",revision:"59e114d2dc035d8dc9e1b5e3b1bc65d7"},{url:"/icons/android-icon-144x144.png",revision:"86bc7e7dce79e92b07390d1d7328e575"},{url:"/icons/android-icon-192x192.png",revision:"8b19dfa56bf65153e12dd1b30929e06d"},{url:"/icons/android-icon-36x36.png",revision:"9001f9404326418c3b78fbf6eed6e94d"},{url:"/icons/android-icon-48x48.png",revision:"4bb7d761b8bea44b0fef2ddc4562ca89"},{url:"/icons/android-icon-72x72.png",revision:"d74dbdfabe68e9341c018141bb0868b3"},{url:"/icons/android-icon-96x96.png",revision:"92547e9d4927e50e265d1558af17e369"},{url:"/icons/apple-icon-114x114.png",revision:"3c0a1d36b0612954e73494b95a62c274"},{url:"/icons/apple-icon-120x120.png",revision:"987b7159dc32c8d14982786040bf9ff3"},{url:"/icons/apple-icon-144x144.png",revision:"86bc7e7dce79e92b07390d1d7328e575"},{url:"/icons/apple-icon-152x152.png",revision:"e50662cb905c83e73d34d0d4fbf92863"},{url:"/icons/apple-icon-180x180.png",revision:"6d96d57dcc592bc7e52fd006f6867e17"},{url:"/icons/apple-icon-57x57.png",revision:"763bf8c351aaa5430828a9003bcc7e53"},{url:"/icons/apple-icon-60x60.png",revision:"808f347302b120492c54eb438faae0c7"},{url:"/icons/apple-icon-72x72.png",revision:"d74dbdfabe68e9341c018141bb0868b3"},{url:"/icons/apple-icon-76x76.png",revision:"4694e4332b3865fd20ae843ea3b5d9a9"},{url:"/icons/apple-icon-precomposed.png",revision:"472cd88c38f0235b3cc9d2f89cf53b5e"},{url:"/icons/apple-icon.png",revision:"472cd88c38f0235b3cc9d2f89cf53b5e"},{url:"/icons/favicon-16x16.png",revision:"175851db9cd654bc17c819793b98e410"},{url:"/icons/favicon-32x32.png",revision:"04655cd69be13b1737fa1ffd21aecb9a"},{url:"/icons/favicon-96x96.png",revision:"92547e9d4927e50e265d1558af17e369"},{url:"/icons/ms-icon-144x144.png",revision:"86bc7e7dce79e92b07390d1d7328e575"},{url:"/icons/ms-icon-150x150.png",revision:"23c722d88df18112a15eeb4dd2d58177"},{url:"/icons/ms-icon-310x310.png",revision:"3e24574ac7d200822d03c65a79234ece"},{url:"/icons/ms-icon-70x70.png",revision:"b64929420a74733dfbf717233f6deebb"},{url:"/manifest.json",revision:"59a23fc1775c3c1e1ce3ac653e46a852"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
