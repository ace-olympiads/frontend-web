(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[917],{9292:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[query]/[id]",function(){return n(7404)}])},1120:function(e,t){"use strict";t.Z={src:"/_next/static/media/userImg.7456de8a.png",height:349,width:348,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAUUlEQVR42mP4e3vNsWOrb/9luL3l0/79n7bcZlj+ax8Dw/5fyxl2/l/LwLD2/06G3f8fZmc//L+bYc3SoL6+oKVrGe4zgACQ+vu4TlWt/vFfADTZJ9KiE8OcAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},6131:function(e,t,n){"use strict";var i=n(6154),o=n(2321),s=n.n(o);let a=i.Z.create({baseURL:"".concat("https://backend.aceacad.com/"),headers:{"Content-Type":"application/json"},httpAgent:new(s()).Agent({keepAlive:!0})});t.Z=a},8797:function(e,t,n){"use strict";var i=n(5893);n(7294);var o=n(1163),s=n(3118),a=n.n(s);t.Z=()=>{let e=(0,o.useRouter)();return(0,i.jsx)("div",{children:(0,i.jsx)("button",{title:"Go back",type:"button",onClick:()=>e.back(),className:"".concat(a()["back-button"]),children:(0,i.jsx)("div",{className:"".concat(a()["back-icon"]),children:"‹"})})})}},283:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var i=n(5893),o=n(7294),s=n(7542),a=n.n(s),c=n(1066),l=n(5675),r=n.n(l),u=n(1163),d=n(1120),h=n(5487),v=n(4330),_=n(6432);function g(){let e=!1,t=new Set,n={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(n,i){(0,h.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let o=[];return t.forEach(e=>{o.push((0,_.d)(e,n,{transitionOverride:i}))}),Promise.all(o)},set:n=>((0,h.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{(0,v.gg)(e,n)})),stop(){t.forEach(e=>{!function(e){e.values.forEach(e=>e.stop())}(e)})},mount:()=>(e=!0,()=>{e=!1,n.stop()})};return n}var f=n(6681),m=n(8868);let p=function(){let e=(0,f.h)(g);return(0,m.L)(e.mount,[]),e};var b=n(2020),x=Object.defineProperty,w=new Map,q=new WeakMap,y=0,j=void 0;o.Component;var A=e=>{var t;let{question:n}=e,[s,l]=(0,o.useState)(""),h=(0,u.useRouter)();(0,o.useEffect)(()=>{l("https://img.youtube.com/vi/".concat((0,c.z)("".concat(null==n?void 0:n.video_solution_url)),"/0.jpg")),console.log(s)},[n,s]),console.log(s);let v=p(),[_,g]=function({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:s,triggerOnce:a,skip:c,initialInView:l,fallbackInView:r,onChange:u}={}){var d;let[h,v]=o.useState(null),_=o.useRef(),[g,f]=o.useState({inView:!!l,entry:void 0});_.current=u,o.useEffect(()=>{let o;if(!c&&h)return o=function(e,t,n={},i=j){if(void 0===window.IntersectionObserver&&void 0!==i){let o=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}let{id:o,observer:s,elements:a}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return`${t}_${"root"===t?(n=e.root)?(q.has(n)||(y+=1,q.set(n,y.toString())),q.get(n)):"0":e[t]}`}).toString(),n=w.get(t);if(!n){let i;let o=new Map,s=new IntersectionObserver(t=>{t.forEach(t=>{var n;let s=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(n=o.get(t.target))||n.forEach(e=>{e(s,t)})})},e);i=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:o},w.set(t,n)}return n}(n),c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),s.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(a.delete(e),s.unobserve(e)),0===a.size&&(s.disconnect(),w.delete(o))}}(h,(e,t)=>{f({inView:e,entry:t}),_.current&&_.current(e,t),t.isIntersecting&&a&&o&&(o(),o=void 0)},{root:s,rootMargin:i,threshold:e,trackVisibility:n,delay:t},r),()=>{o&&o()}},[Array.isArray(e)?e.toString():e,h,s,i,a,c,n,r,t]);let m=null==(d=g.entry)?void 0:d.target,p=o.useRef();h||!m||a||c||p.current===m||(p.current=m,f({inView:!!l,entry:void 0}));let b=[v,g.inView,g.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}();return(0,o.useEffect)(()=>{g?v.start("visible"):v.start("hidden")},[v,g,s]),(0,i.jsx)(b.E.div,{ref:_,variants:{visible:{opacity:1,x:0,transition:{duration:.5}},hidden:{opacity:0,x:100}},initial:"hidden",animate:v,style:{display:"flex",justifyContent:"center"},children:(0,i.jsxs)(b.E.div,{onClick:()=>h.push("/question/".concat(n.id)),className:a()["question-card"],children:[s?(0,i.jsx)(r(),{className:a()["thumb-question"],src:s,alt:"Thumbnail",width:100,height:400}):(0,i.jsx)(r(),{className:a()["thumb-question"],src:d.Z,alt:"Thumbnail",width:100,height:100}),(0,i.jsxs)("div",{className:a()["question-title-wrap"],children:[(0,i.jsx)("span",{className:a()["question-title"],children:"Ques."}),(0,i.jsx)("span",{className:a()["question-content"],children:(null==n?void 0:n.question_text.length)<80?n.question_text:"".concat(n.question_text.substring(0,80),"..")})]}),(0,i.jsx)("div",{className:a().question_tags_container,children:null==n?void 0:null===(t=n.tags)||void 0===t?void 0:t.slice(0,3).map(e=>(0,i.jsx)("div",{className:a().question_tags_element,children:e.name.length<8?"#".concat(e.name):"#".concat(e.name.substring(0,7),"...")},e.id))})]})})}},315:function(e,t,n){"use strict";var i=n(5893),o=n(1163),s=n(7294),a=n(1066),c=n(7142),l=n.n(c),r=n(1120),u=n(5675),d=n.n(u);t.Z=e=>{let{video:t}=e,[n,c]=(0,s.useState)(""),u=(0,o.useRouter)();return(0,s.useEffect)(()=>{c("https://img.youtube.com/vi/".concat((0,a.z)("".concat(null==t?void 0:t.youtube_url)),"/0.jpg")),console.log(n)},[t,n]),console.log(n),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,i.jsxs)("div",{className:l().video,children:[n?(0,i.jsx)(d(),{src:n,alt:"Thumbnail",width:300,height:200}):(0,i.jsx)(d(),{src:r.Z,alt:"Thumbnail",width:300,height:200}),(0,i.jsxs)("div",{onClick:()=>{u.push("/concept/".concat(t.concept,"/video/").concat(t.id))},children:[(0,i.jsxs)("div",{className:l().title,children:["Video ","".concat(null==t?void 0:t.id)]}),(0,i.jsx)("div",{className:l().content,children:null==t?void 0:t.title})]})]})})}},7404:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return v}});var i=n(5893),o=n(7294),s=n(6131),a=n(283),c=n(1163),l=n(4284),r=n.n(l),u=n(3299),d=n(315),h=n(8797),v=!0;t.default=e=>{var t,n;let{id:l,query:v}=e,[_,g]=(0,o.useState)([]),[f,m]=(0,o.useState)(),[p,b]=(0,o.useState)(),x=(0,u.useSession)(),w=(0,c.useRouter)();return(0,o.useEffect)(()=>{let e=async()=>{if("tag"===v){let e=await s.Z.get("/question/".concat(v,"/").concat(l));console.log("tag waala response"),console.log(e.data),g(e.data)}else if("concept"===v){var e,t;let n=await s.Z.get("/concepts/".concat(l),{data:{email:null==x?void 0:null===(e=x.data)||void 0===e?void 0:null===(t=e.user)||void 0===t?void 0:t.email}}),i=n.data.videos;console.log(i),m(i)}else if("exam"===v){let e=await s.Z.get("/question/examination/".concat(l));console.log(e.data),console.log("exam ki response"),g(e.data)}};e()},[l,v,null==x?void 0:null===(t=x.data)||void 0===t?void 0:null===(n=t.user)||void 0===n?void 0:n.email]),(0,i.jsxs)("div",{children:[(0,i.jsx)(h.Z,{}),"tag"===v&&(0,i.jsxs)("div",{className:r().title,children:["Here are all the questions having the tag"," ",(0,i.jsxs)("span",{children:["#",w.query.name]})]}),"concept"===v&&(0,i.jsxs)("div",{className:r().title,children:["Here are all the concept videos for ",(0,i.jsx)("span",{children:w.query.name})]}),(0,i.jsxs)("div",{className:r()["question-container"],children:[null==_?void 0:_.map(e=>(0,i.jsx)(a.Z,{question:e},e.id)),null==f?void 0:f.map(e=>(0,i.jsx)(d.Z,{video:e},e.id))]})]})}},1066:function(e,t,n){"use strict";function i(e){let t=null==e?void 0:e.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|youtu\.be\/|\/v\/|watch\?v%3D|watch\?feature=player_embedded&v=|%2Fvideos%2F|embed%\?i=|%2Fv%2F|e\/|embed\?video_id=|user\/)([^\#\&\?\/\s]{11})/);return t&&t.length>1?t[1]:null}n.d(t,{z:function(){return i}})},3118:function(e){e.exports={"back-button":"BackButton_back-button__uXnvV","back-icon":"BackButton_back-icon__N2MjL"}},7542:function(e){e.exports={"question-card":"Question_question-card__6Jkny","thumb-question":"Question_thumb-question__JPa5k","question-title":"Question_question-title___xN1s","question-title-wrap":"Question_question-title-wrap__LnSgW","question-content":"Question_question-content__qihgA",question_tags_container:"Question_question_tags_container__SXC8T",icons_wrapper:"Question_icons_wrapper__Tqgbd",go_to_question:"Question_go_to_question__BWuo_",question_tags_element:"Question_question_tags_element__KelMc"}},4284:function(e){e.exports={title:"query_title__H1oxv","question-container":"query_question-container___Ot7l"}},7142:function(e){e.exports={video:"video_video__dvLBC",title:"video_title___YyRy",content:"video_content___c_cj"}}},function(e){e.O(0,[321,20,774,888,179],function(){return e(e.s=9292)}),_N_E=e.O()}]);