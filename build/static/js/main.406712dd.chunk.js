(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{30:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(15),i=c.n(n),o=c(5),s=c(55);c(30);var l=c(11),d=c(9),p=c(2),b=function(e){var t=e.isLibraryActive,c=e.setIsLibraryActive;return Object(p.jsxs)("nav",{className:"nav",children:[Object(p.jsx)("h1",{className:"nav__title",children:"Waves"}),Object(p.jsxs)("button",{className:"nav__btn",onClick:function(){return c(!t)},children:["Library",Object(p.jsx)(l.a,{icon:d.c})]})]})},u=function(e){var t=e.currentSong,c=e.type,r=e.setCurrentSong,n=e.targetId,i=e.setTargetId,s=Object(a.useState)(!1),l=Object(o.a)(s,2),d=l[0],b=l[1];Object(a.useEffect)((function(){n===t.id?b(!0):b(!1)}),[n]);return Object(p.jsx)("div",{onClick:function(e){"songSample"===c&&(r(t),i(t.id))},className:"".concat(c," ").concat(d?"songSample--active":""),children:Object(p.jsxs)("div",{className:"".concat(c,"__inner"),children:[Object(p.jsx)("img",{className:"".concat(c,"__cover"),src:t.cover,alt:"cover"}),Object(p.jsxs)("div",{className:"".concat(c,"__text"),children:[Object(p.jsx)("h4",{className:"".concat(c,"__title"),children:t.name}),Object(p.jsx)("p",{className:"".concat(c,"__artist"),children:t.artist})]})]})})},j=function(e){var t=e.songs,c=e.setCurrentSong,a=e.isLibraryActive,r=e.setIsLibraryActive,n=e.targetId,i=e.setTargetId;return Object(p.jsxs)("div",{className:"library ".concat(a?"library--active":""),children:[Object(p.jsxs)("div",{className:"library__top",children:[Object(p.jsx)("h2",{className:"library__title",children:"Library"}),Object(p.jsx)("button",{className:"library__close-btn",onClick:function(){return r(!a)},children:"\xd7"})]}),Object(p.jsx)("div",{className:"library__songs",children:t.map((function(e){return Object(p.jsx)(u,{currentSong:e,type:"songSample",setCurrentSong:c,targetId:n,setTargetId:i},e.id)}))})]})},h=c(22),g=c(54),m=c(18);function f(e){var t=e.currentSong,c=e.isPlaying,r=e.setIsPlaying,n=e.songs,i=e.setCurrentSong,s=e.setTargetId,b=Object(a.useRef)(null);Object(a.useEffect)((function(){c?b.current.play():b.current.pause()}),[c,t]);var u=Object(a.useState)({currentTime:0,duration:0}),j=Object(o.a)(u,2),f=j[0],v=j[1],x=function(e){v({currentTime:e.target.currentTime,duration:e.target.duration})},O=function(e){var t=Math.floor(e),c=t%60;return"".concat((t-t%60)/60,":").concat(c/10<1?"0"+c:c)},y=function(e){var c=n.findIndex((function(e){return e.id===t.id}));if("skip-forward"===e)i(n[(c+1)%n.length]),s(n[(c+1)%n.length].id);else if("skip-back"===e){if(0===c)return i(n[n.length-1]),void s(n[n.length-1].id);i(n[c-1]),s(n[c-1].id)}},S="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",_=Object(m.a)({root:{color:"#3880ff",height:5,padding:"15px 0"},thumb:{height:28,width:28,backgroundColor:"#fff",boxShadow:S,marginTop:-13,marginLeft:-13,"&:focus, &:hover, &$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:S}}},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:5,borderRadius:"15px",background:"linear-gradient(to right,".concat(t.color[0],",").concat(t.color[1],")")},rail:{height:5,opacity:.5,backgroundColor:"#636e72",borderRadius:"15px"},mark:{backgroundColor:"#636e72",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}})(g.a);return Object(p.jsxs)("div",{className:"player",children:[Object(p.jsxs)("div",{className:"player__play-controls",children:[Object(p.jsx)(l.a,{className:"player__skip-back",icon:d.a,size:"2x",onClick:function(){return y("skip-back")}}),Object(p.jsx)(l.a,{onClick:function(){r(!c)},className:"player__play",icon:c?d.d:d.e,size:"2x"}),Object(p.jsx)(l.a,{className:"player__skip-forward",icon:d.b,size:"2x",onClick:function(){return y("skip-forward")}})]}),Object(p.jsxs)("div",{className:"player__time-controls",children:[Object(p.jsx)("p",{children:O(f.currentTime)}),Object(p.jsx)(_,{onChange:function(e,t){b.current.currentTime=t,v(Object(h.a)(Object(h.a)({},f),{},{currentTime:t}))},min:0,max:f.duration||0,value:f.currentTime}),Object(p.jsx)("p",{children:O(f.duration)})]}),Object(p.jsx)("audio",{onLoadedMetadata:x,onTimeUpdate:function(e){return c?x(e):""},ref:b,src:t.audio,onEnded:function(){return y("skip-forward")}})]})}var v=function(e){var t=e.songs,c=Object(a.useState)(t[0]),r=Object(o.a)(c,2),n=r[0],i=r[1],s=Object(a.useState)(t[0].id),l=Object(o.a)(s,2),d=l[0],h=l[1],g=Object(a.useState)(!1),m=Object(o.a)(g,2),v=m[0],x=m[1],O=Object(a.useState)(!1),y=Object(o.a)(O,2),S=y[0],_=y[1];return Object(p.jsxs)("div",{style:{marginLeft:S?"30%":"",transition:"all 0.4s ease"},children:[Object(p.jsx)(b,{setIsLibraryActive:_,isLibraryActive:S}),Object(p.jsx)(u,{currentSong:n,type:"currentSong"}),Object(p.jsx)(f,{currentSong:n,isPlaying:v,setIsPlaying:x,songs:t,setCurrentSong:i,setTargetId:h,targetId:d}),Object(p.jsx)(j,{songs:t,isLibraryActive:S,setIsLibraryActive:_,setCurrentSong:i,targetId:d,setTargetId:h})]})};var x=function(){var e=Object(a.useState)([{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(s.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(s.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(s.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(s.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(s.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(s.a)(),active:!1}]),t=Object(o.a)(e,2),c=t[0];return t[1],Object(p.jsx)("div",{className:"app",children:Object(p.jsx)(v,{songs:c})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),r(e),n(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),O()}},[[39,1,2]]]);
//# sourceMappingURL=main.406712dd.chunk.js.map