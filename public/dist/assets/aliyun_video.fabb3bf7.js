import{u as f,o,ar as w,cs as h,bI as v,a as k,b6 as x,_,aw as F,bd as W,n as j,as as L,f as l,W as S,Y as O,aP as P,Z as C}from"./index.1720c3e2.js";import{a as I}from"./useUtil.54c86539.js";import{O as M}from"./icon.a2201df4.js";import{H as z,a as A,A as R}from"./hls.ca6bc963.js";import{c as V}from"./Layout.ab082387.js";import"./api.5688bb27.js";import"./index.2e0c0823.js";import"./index.55159a99.js";import"./Markdown.ab56fcbf.js";import"./index.3fd9774a.js";import"./FolderTree.8935b740.js";const J=()=>{const{replace:m}=f(),{proxyLink:c}=I();let n=o.objs.filter(e=>e.type===M.VIDEO);n.length===0&&(n=[o.obj]);let i,s={id:"player",container:"#video-player",title:o.obj.name,volume:.5,autoplay:w("video_autoplay"),autoSize:!1,autoMini:!0,loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[],whitelist:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,t){const r=new z;r.loadSource(t),r.attachMedia(e),e.src||(e.src=t)}},lang:["en","zh-cn","zh-tw"].includes(h().toLowerCase())?h().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};V&&(s.moreVideoAttr.controls=!0);const u=o.related.find(e=>{for(const t of[".srt",".ass",".vtt"])if(e.name.endsWith(t))return!0;return!1}),d=o.related.find(e=>{for(const t of[".xml"])if(e.name.endsWith(t))return!0;return!1});u&&(s.subtitle={url:c(u,!0),type:v(u.name)}),d&&(s.plugins=[A({danmuku:c(d,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})]);const{pathname:y}=f(),[g,b]=k(()=>x.post("/fs/other",{path:y(),password:_(),method:"video_preview"}));return F(async()=>{const e=await b();W(e,t=>{const r=t.video_preview_play_info.live_transcoding_task_list.filter(a=>a.url);if(r.length===0){j.error("No transcoding video found");return}s.url=r[r.length-1].url,s.quality=r.map((a,p)=>({html:a.template_id,url:a.url,default:p===r.length-1})),i=new R(s),i.on("video:ended",()=>{const a=n.findIndex(p=>p.name===o.obj.name);a<n.length-1&&m(n[a+1].name)})})}),L(()=>{i==null||i.destroy()}),l(C,{get loading(){return g()},get children(){return l(S,{w:"$full",spacing:"$2",get children(){return[l(O,{w:"$full",h:"60vh",id:"video-player"}),l(P,{onChange:e=>{m(e)},get value(){return o.obj.name},get options(){return n.map(e=>({value:e.name}))}})]}})}})};export{J as default};
