import{b6 as W,_ as G,o as Y,d as J,u as q,e as P,bw as K,f as o,m as S,a0 as U,B as O,v as N,I as L,W as _,a7 as v,n as Q,bf as j,Y as X,aP as Z,a6 as H,bv as E,bc as T,bx as ee,ai as te,by as ae,bz as oe,bA as ne,p as re}from"./index.1720c3e2.js";import{a as se,b as le}from"./index.3fd9774a.js";async function*ce(a,d,c){const r=new Set;async function u(){const[p,s]=await Promise.race(r);return r.delete(p),s}for(const p of d){const s=(async()=>await c(p,d))().then(l=>[s,l]);r.add(s),r.size>=a&&(yield await u())}for(;r.size;)yield await u()}const ie={pending:"neutral",uploading:"info",backending:"info",success:"success",error:"danger"},de=async a=>{let d=[];const c=async(r,u)=>{await new Promise(s=>{const l=n=>{console.error(n),s({})};if(r.isFile)r.file(n=>{const i=new File([n],u+n.name,{type:n.type});d.push(i),console.log(i),s({})},l);else if(r.isDirectory){const n=r.createReader(),i=()=>{n.readEntries(async m=>{m.length===0&&s({});for(let g=0;g<m.length;g++)await c(m[g],u+r.name+"/");i()},l)};i()}})};return await c(a,""),d},ue=a=>({name:a.name,path:a.webkitRelativePath?a.webkitRelativePath:a.name,size:a.size,progress:0,speed:0,status:"pending"}),pe=async(a,d,c,r=!1)=>{let u=new Date().valueOf(),p=0;const s=new FormData;s.append("file",d);const l=await W.put("/fs/form",s,{headers:{"File-Path":encodeURIComponent(a),"As-Task":r,"Content-Type":"multipart/form-data",Password:G()},onUploadProgress:n=>{if(n.total){const i=n.loaded/n.total*100|0;c("progress",i);const m=new Date().valueOf(),g=(m-u)/1e3;if(g>1){const k=(n.loaded-p)/g,F=(n.total-n.loaded)/k;c("speed",k),console.log(F),u=m,p=n.loaded}i===100&&c("status","backending")}}});if(l.code!==200)return new Error(l.message)},me=async(a,d,c,r=!1)=>{let u=new Date().valueOf(),p=0;const s=await W.put("/fs/put",d,{headers:{"File-Path":encodeURIComponent(a),"As-Task":r,"Content-Type":d.type||"application/octet-stream",Password:G()},onUploadProgress:l=>{if(l.total){const n=l.loaded/l.total*100|0;c("progress",n);const i=new Date().valueOf(),m=(i-u)/1e3;if(m>1){const b=(l.loaded-p)/m,f=(l.total-l.loaded)/b;c("speed",b),console.log(f),u=i,p=l.loaded}n===100&&c("status","backending")}}});if(s.code!==200)return new Error(s.message)},ge=[{name:"Stream",upload:me,provider:/.*/},{name:"Form",upload:pe,provider:/.*/}],fe=()=>ge.filter(a=>a.provider.test(Y.provider)),he=a=>{const d=J();return o(_,{w:"$full",spacing:"$1",rounded:"$lg",border:"1px solid $neutral7",alignItems:"start",p:"$2",get _hover(){return{border:`1px solid ${v()}`}},get children(){return[o(T,{css:{wordBreak:"break-all"},get children(){return a.path}}),o(U,{spacing:"$2",get children(){return[o(ee,{get colorScheme(){return ie[a.status]},get children(){return d(`home.upload.${a.status}`)}}),o(T,{get children(){return[te(()=>ae(a.speed)),"/s"]}})]}}),o(oe,{w:"$full",trackColor:"$info3",rounded:"$full",get value(){return a.progress},size:"sm",get children(){return o(ne,{get color(){return v()},rounded:"$md"})}}),o(T,{color:"$danger10",get children(){return a.msg}})]}})},ke=()=>{const a=J(),{pathname:d}=q(),[c,r]=P(!1),[u,p]=P(!1),[s,l]=P(!1),[n,i]=K({uploads:[]}),m=()=>n.uploads.every(({status:e})=>["success","error"].includes(e));let g,b;const k=async e=>{if(e.length!==0){p(!0);for(const t of e){const w=ue(t);i("uploads",h=>[...h,w])}for await(const t of ce(3,e,V))console.log(t)}},f=(e,t,w)=>{i("uploads",h=>h.path===e,t,w)},F=fe(),[x,M]=P(F[0]),V=async e=>{const t=e.webkitRelativePath?e.webkitRelativePath:e.name;f(t,"status","uploading");const w=re(d(),t);try{const h=await x().upload(w,e,(D,C)=>{f(t,D,C)},s());h?(f(t,"status","error"),f(t,"msg",h.message)):(f(t,"status","success"),f(t,"progress",100))}catch(h){console.error(h),f(t,"status","error"),f(t,"msg",h.message)}};return o(_,{w:"$full",pb:"$2",spacing:"$2",get children(){return o(S,{get when(){return!u()},get fallback(){return[o(U,{spacing:"$2",get children(){return[o(O,{colorScheme:"accent",onClick:()=>{i("uploads",e=>e.filter(({status:t})=>!["success","error"].includes(t))),console.log(n.uploads)},get children(){return a("home.upload.clear_done")}}),o(S,{get when(){return m()},get children(){return o(O,{onClick:()=>{p(!1)},get children(){return a("home.upload.back")}})}})]}}),o(N,{get each(){return n.uploads},children:e=>o(he,e)})]},get children(){return[o(L,{type:"file",multiple:!0,ref(e){const t=g;typeof t=="function"?t(e):g=e},display:"none",onChange:e=>{var t;k(Array.from((t=e.target.files)!=null?t:[]))}}),o(L,{type:"file",multiple:!0,webkitdirectory:!0,ref(e){const t=b;typeof t=="function"?t(e):b=e},display:"none",onChange:e=>{var t;k(Array.from((t=e.target.files)!=null?t:[]))}}),o(_,{w:"$full",justifyContent:"center",get border(){return`2px dashed ${c()?v():"$neutral8"}`},rounded:"$lg",onDragOver:e=>{e.preventDefault(),r(!0)},onDragLeave:()=>{r(!1)},onDrop:async e=>{var A,R,z,I;e.preventDefault(),e.stopPropagation(),r(!1);const t=[],w=Array.from((R=(A=e.dataTransfer)==null?void 0:A.items)!=null?R:[]),h=Array.from((I=(z=e.dataTransfer)==null?void 0:z.files)!=null?I:[]);let D=w.length;const C=[];for(let $=0;$<D;$++){const y=w[$].webkitGetAsEntry();y!=null&&y.isFile?t.push(h[$]):y!=null&&y.isDirectory&&C.push(y)}for(const $ of C){const B=await de($);t.push(...B)}t.length===0&&Q.warning(a("home.upload.no_files_drag")),k(t)},spacing:"$4",h:"$56",get children(){return o(S,{get when(){return!c()},get fallback(){return o(j,{get children(){return a("home.upload.release")}})},get children(){return[o(j,{get children(){return a("home.upload.upload-tips")}}),o(X,{w:"30%",get children(){return o(Z,{get value(){return x().name},onChange:e=>{M(F.find(t=>t.name===e))},get options(){return F.map(e=>({label:e.name,value:e.name}))}})}}),o(U,{spacing:"$4",get children(){return[o(H,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_folder")},colorScheme:"accent",get icon(){return o(se,{})},onClick:()=>{b.click()}}),o(H,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_files")},get icon(){return o(le,{})},onClick:()=>{g.click()}})]}}),o(E,{get checked(){return s()},onChange:()=>{l(!s())},get children(){return a("home.upload.add_as_task")}})]}})}})]}})}})};export{ke as default};
