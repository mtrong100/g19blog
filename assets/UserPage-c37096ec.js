import{j as s,r as i,_ as n,d as p,p as u}from"./index-8383c646.js";import{L as x}from"./Layout-39288f0f.js";import{H as f}from"./Heading-9c7aef46.js";import{a as g,d as a}from"./BlogItem-7b8a60b5.js";import d from"./NotFoundPage-5342104f.js";import{v as h}from"./v4-a960c1f4.js";import"./Logo-e1d02736.js";import"./Button-7ea5bd85.js";import"./data-3a117f56.js";import"./index.esm-8b0e7de9.js";import"./slugify-66ee8267.js";const j=({data:e})=>{var o,t;if(!e.id)return s.jsx(d,{});const l=(o=e==null?void 0:e.createdAt)!=null&&o.seconds?new Date(((t=e==null?void 0:e.createdAt)==null?void 0:t.seconds)*1e3):new Date,r=new Date(l).toLocaleDateString("vi-VI");return s.jsxs("div",{className:"relative flex flex-col items-center justify-center w-full gap-3 p-5 mx-auto md:gap-8 user-card rounded-xl bg-colorDime",children:[s.jsx("span",{className:"absolute px-4 py-2 text-xs font-semibold capitalize rounded md:text-base top-5 right-5 bg-colorGradient",children:e==null?void 0:e.role}),s.jsx(g,{className:"w-[100px] h-[100px] md:h-[150px] md:w-[150px] mt-12 rounded-full mb-2 group border-4 border-colorPink",url:e==null?void 0:e.avatar,alt:"blog-img"}),s.jsx("div",{className:"flex flex-col items-center justify-center gap-3",children:s.jsx(a,{className:"flex-col text-base",path:e==null?void 0:e.slug,date:r,author:e==null?void 0:e.username})})]})},P=()=>{const[e,l]=i.useState([]);return i.useEffect(()=>{async function r(){const o=n(p,"users");u(o,t=>{let c=[];t.forEach(m=>{c.push({id:m.id,...m.data()})}),l(c)})}r()},[]),i.useEffect(()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})},[]),s.jsx(x,{children:s.jsxs("div",{className:"page-container py-[150px]",children:[s.jsx(f,{children:"All users"}),s.jsx("div",{className:"grid grid-cols-2 gap-5 mt-10 md:grid-cols-3 lg:grid-cols-4",children:e.length>0&&e.map(r=>s.jsx(j,{data:r},h()))})]})})};export{P as default};