import{r as o,j as t,_ as c,d as l,p as n}from"./index-8383c646.js";import{L as d}from"./Layout-39288f0f.js";import{H as f}from"./Heading-9c7aef46.js";import{B as u}from"./BlogItem-7b8a60b5.js";import{v as g}from"./v4-a960c1f4.js";import"./Logo-e1d02736.js";import"./Button-7ea5bd85.js";import"./data-3a117f56.js";import"./index.esm-8b0e7de9.js";import"./slugify-66ee8267.js";import"./NotFoundPage-5342104f.js";const L=()=>{const[r,i]=o.useState([]);return o.useEffect(()=>{async function s(){const m=c(l,"posts");n(m,p=>{let a=[];p.forEach(e=>{a.push({id:e.id,...e.data()})}),i(a)})}s()},[]),o.useEffect(()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})},[]),t.jsx(d,{children:t.jsxs("div",{className:"page-container py-[150px]",children:[t.jsx(f,{children:"All posts collection"}),t.jsx("div",{className:"grid gap-5 mt-10 md:grid-cols-3",children:r.length>0&&r.map(s=>t.jsx(u,{data:s},g()))})]})})};export{L as default};