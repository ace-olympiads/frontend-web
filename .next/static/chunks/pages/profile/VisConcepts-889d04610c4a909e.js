(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72],{3355:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/VisConcepts",function(){return i(9366)}])},1120:function(e,t){"use strict";t.Z={src:"/_next/static/media/userImg.7456de8a.png",height:349,width:348,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAUUlEQVR42mP4e3vNsWOrb/9luL3l0/79n7bcZlj+ax8Dw/5fyxl2/l/LwLD2/06G3f8fZmc//L+bYc3SoL6+oKVrGe4zgACQ+vu4TlWt/vFfADTZJ9KiE8OcAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},6131:function(e,t,i){"use strict";var n=i(6154),o=i(2321),l=i.n(o);let c=n.Z.create({baseURL:"".concat("https://backend.aceacad.com"),headers:{"Content-Type":"application/json"},httpAgent:new(l()).Agent({keepAlive:!0})});t.Z=c},315:function(e,t,i){"use strict";var n=i(5893),o=i(1163),l=i(7294),c=i(1066),s=i(7142),d=i.n(s),a=i(1120),u=i(5675),r=i.n(u);t.Z=e=>{let{video:t}=e,[i,s]=(0,l.useState)(""),u=(0,o.useRouter)();return(0,l.useEffect)(()=>{s("https://img.youtube.com/vi/".concat((0,c.z)("".concat(null==t?void 0:t.youtube_url)),"/0.jpg")),console.log(i)},[t,i]),console.log(i),(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{className:d().video,children:[i?(0,n.jsx)(r(),{src:i,alt:"Thumbnail",width:300,height:200}):(0,n.jsx)(r(),{src:a.Z,alt:"Thumbnail",width:300,height:200}),(0,n.jsxs)("div",{onClick:()=>{u.push("/concept/".concat(t.concept,"/video/").concat(t.id))},children:[(0,n.jsxs)("div",{className:d().title,children:["Video ","".concat(null==t?void 0:t.id)]}),(0,n.jsx)("div",{className:d().content,children:null==t?void 0:t.title})]})]})})}},9366:function(e,t,i){"use strict";i.r(t);var n=i(5893),o=i(3299),l=i(7294),c=i(6131),s=i(315);t.default=()=>{var e,t,i;let d=(0,o.useSession)(),[a,u]=(0,l.useState)();return(0,l.useEffect)(()=>{let e=async()=>{try{if("loading"!=d.status){var e,t;let i=null==d?void 0:null===(e=d.data)||void 0===e?void 0:null===(t=e.user)||void 0===t?void 0:t.email,n=await c.Z.get("/users/account/?email=".concat(i)),o=n.data;u(o)}}catch(e){console.log(e)}};e()},[d.status,null==d?void 0:null===(e=d.data)||void 0===e?void 0:null===(t=e.user)||void 0===t?void 0:t.email]),console.log(d),console.log(null==a?void 0:a.last_viewed_concept_videos),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Recently watched Concept videos"}),(0,n.jsx)("div",{style:{width:"100%",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(370px, 1fr))",overflowX:"hidden",margin:"5vh 0"},children:null==a?void 0:null===(i=a.last_viewed_concept_videos)||void 0===i?void 0:i.map((e,t)=>(0,n.jsx)(s.Z,{video:e},t))})]})}},1066:function(e,t,i){"use strict";function n(e){let t=null==e?void 0:e.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|youtu\.be\/|\/v\/|watch\?v%3D|watch\?feature=player_embedded&v=|%2Fvideos%2F|embed%\?i=|%2Fv%2F|e\/|embed\?video_id=|user\/)([^\#\&\?\/\s]{11})/);return t&&t.length>1?t[1]:null}i.d(t,{z:function(){return n}})},7142:function(e){e.exports={video:"video_video__dvLBC",title:"video_title___YyRy",content:"video_content___c_cj"}}},function(e){e.O(0,[321,774,888,179],function(){return e(e.s=3355)}),_N_E=e.O()}]);