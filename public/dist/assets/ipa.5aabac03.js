import{d as m,e as n,f as e,a0 as p,B as r,b9 as u,cx as g,o as a,cw as f}from"./index.3a052602.js";import{a as d}from"./useUtil.491244be.js";import{F as h}from"./File.86628369.js";import"./api.858820c2.js";import"./icon.8bf6f426.js";import"./index.12d65e0f.js";import"./index.9aabd633.js";const j=()=>{const t=m(),[o,i]=n(!1),[s,l]=n(!1),{currentObjLink:c}=d();return e(h,{get children(){return e(p,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${u}/i/${g(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{i(!0)},get children(){return t(`home.preview.${o()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(c(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{j as default};