import{f as e,ae as y,ah as g,a7 as P,o,W as l,bf as I,bc as O,ai as d,by as T,bK as L,d as h,t as b,bL as k,ad as x,a5 as A,B as m,a9 as D,v as S,aa as $,bM as f,m as _,a0 as v,bN as j,bO as V,G as a,H as i,bI as R,bP as M,e as z,aP as C,P as F,Q as B,ab as W}from"./index.1720c3e2.js";import{a as w,b as H}from"./useUtil.54c86539.js";import{g as X,O as s}from"./icon.a2201df4.js";import{l as G}from"./index.55159a99.js";const U=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(y,{boxSize:"$20",get fallback(){return e(g,{get color(){return P()},boxSize:"$20",get as(){return X(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(I,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(O,{color:"$neutral10",size:"sm",get children(){return[d(()=>T(o.obj.size))," \xB7 ",d(()=>L(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=h(),n=b(()=>k(o.obj.name)),{currentObjLink:u}=w();return e(_,{get when(){return n().length},get children(){return e(x,{get children(){return[e(A,{as:m,colorScheme:"success",get rightIcon(){return e(g,{as:G})},get children(){return r("home.preview.open_with")}}),e(D,{get children(){return e(S,{get each(){return n()},children:t=>e($,{as:"a",target:"_blank",get href(){return f(t.value,{raw_url:o.raw_url,name:o.obj.name,d_url:u(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=h(),{copyCurrentRawLink:u}=H();return e(U,{get children(){return[e(v,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>u(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(_,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},K=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),N=r=>{const{currentObjLink:n}=w();return e(V,{w:"$full",h:"70vh",get children(){return e(j.iframe,{w:"$full",h:"$full",get src(){return f(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:n(!0)})}})}})},Q=r=>()=>e(N,{scheme:r}),q=[{name:"Aliyun Video Previewer",type:s.VIDEO,provider:/^Aliyundrive(Open)?$/,component:a(()=>i(()=>import("./aliyun_video.fabb3bf7.js"),["assets/aliyun_video.fabb3bf7.js","assets/index.1720c3e2.js","assets/index.15d8d646.css","assets/useUtil.54c86539.js","assets/api.5688bb27.js","assets/icon.a2201df4.js","assets/index.2e0c0823.js","assets/index.55159a99.js","assets/hls.ca6bc963.js","assets/Layout.ab082387.js","assets/Markdown.ab56fcbf.js","assets/index.3fd9774a.js","assets/FolderTree.8935b740.js"]))},{name:"Markdown",type:s.TEXT,component:a(()=>i(()=>import("./markdown.2669ae45.js"),["assets/markdown.2669ae45.js","assets/index.1720c3e2.js","assets/index.15d8d646.css","assets/useUtil.54c86539.js","assets/api.5688bb27.js","assets/Markdown.ab56fcbf.js"]))},{name:"Markdown with word wrap",type:s.TEXT,component:a(()=>i(()=>import("./markdown_with_word_wrap.da876b97.js"),["assets/markdown_with_word_wrap.da876b97.js","assets/index.1720c3e2.js","assets/index.15d8d646.css","assets/useUtil.54c86539.js","assets/api.5688bb27.js","assets/Markdown.ab56fcbf.js"]))},{name:"Text Editor",type:s.TEXT,component:a(()=>i(()=>import("./text-editor.add6d7c4.js"),["assets/text-editor.add6d7c4.js","assets/index.1720c3e2.js","assets/index.15d8d646.css","assets/useUtil.54c86539.js","assets/api.5688bb27.js"]))},{name:"HTML render",exts:["html"],component:a(()=>i(()=>import("./html.7df39086.js"),["assets/html.7df39086.js","assets/index.1720c3e2.js","assets/index.15d8d646.css","assets/useUtil.54c86539.js","assets/api.5688bb27.js"]))},{name:"Image",type:s.IMAGE,component:a(()=>i(()=>import("./image.d0e45d9b.js"),["assets/image.d0e45d9b.js","assets/index.1720c3e2.js","assets/index.15d8d646.css","assets/ImageWithError.5515095e.js"]))},{name:"Video",type:s.VIDEO,component:a(()=>i(()=>import("./video.a85e646d.js"),["assets/video.a85e646d.js","assets/index.1720c3e2.js","assets/index.15d8d646.css","assets/useUtil.54c86539.js","assets/api.5688bb27.js","assets/icon.a2201df4.js","assets/index.2e0c0823.js","assets/index.55159a99.js","assets/hls.ca6bc963.js"]))},{name:"Audio",type:s.AUDIO,component:a(()=>i(()=>import("./audio.8d44b8a6.js"),["assets/audio.8d44b8a6.js","assets/audio.e5b5af14.css","assets/index.1720c3e2.js","assets/index.15d8d646.css","assets/useUtil.54c86539.js","assets/api.5688bb27.js","assets/icon.a2201df4.js","assets/index.2e0c0823.js","assets/index.55159a99.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:a(()=>i(()=>import("./ipa.f53920e6.js"),["assets/ipa.f53920e6.js","assets/index.1720c3e2.js","assets/index.15d8d646.css","assets/useUtil.54c86539.js","assets/api.5688bb27.js","assets/icon.a2201df4.js","assets/index.2e0c0823.js","assets/index.55159a99.js"]))},{name:"Plist",exts:["plist"],component:a(()=>i(()=>import("./plist.4e5cb9a4.js"),["assets/plist.4e5cb9a4.js","assets/index.1720c3e2.js","assets/index.15d8d646.css","assets/useUtil.54c86539.js","assets/api.5688bb27.js","assets/icon.a2201df4.js","assets/index.2e0c0823.js","assets/index.55159a99.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:a(()=>i(()=>import("./aliyun_office.78a17839.js"),["assets/aliyun_office.78a17839.js","assets/index.1720c3e2.js","assets/index.15d8d646.css"]))}],J=r=>{const n=[];return q.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes(R(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),M(r.name).forEach(t=>{n.push({name:t.key,component:Q(t.value)})}),n.push({name:"Download",component:a(()=>i(()=>Promise.resolve().then(()=>K),void 0))}),n},Y=()=>{const r=b(()=>J({...o.obj,provider:o.provider})),[n,u]=z(r()[0]);return e(_,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(v,{w:"$full",spacing:"$2",get children(){return[e(C,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{u(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(F,{get fallback(){return e(B,{})},get children(){return e(W,{get component(){return n().component}})}})]}})}})},ne=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{U as F,ne as a};
