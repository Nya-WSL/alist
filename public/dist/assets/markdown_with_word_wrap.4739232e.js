import{f as o,Z as s,o as n,bI as d}from"./index.3a052602.js";import{d as i}from"./useUtil.491244be.js";import{M as m}from"./Markdown.33e26156.js";import"./api.858820c2.js";const g=()=>{const[r]=i(),a=e=>n.obj.name.endsWith(".md")?e:"```"+d(n.obj.name)+`
`+e+"\n```";return o(s,{get loading(){return r.loading},get children(){return o(m,{class:"word-wrap",get children(){var e,t;return a((t=(e=r())==null?void 0:e.content)!=null?t:"")}})}})};export{g as default};
