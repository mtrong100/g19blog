import{r as a,j as s}from"./index-b64655ba.js";import{j as o,k as l}from"./index.esm-c9a21f04.js";import{P as n}from"./Button-f66f59cb.js";import{I as i}from"./yup-ddf339d4.js";import{L as m}from"./Logo-de5b7b2e.js";const p=({control:e})=>{const[r,t]=a.useState(!1);return e?s.jsx(s.Fragment,{children:s.jsx(i,{type:r?"text":"password",name:"password",placeholder:"Enter your password...",control:e,children:r?s.jsx("span",{className:"text-2xl",onClick:()=>t(!1),children:s.jsx(l,{})}):s.jsx("span",{className:"text-2xl",onClick:()=>t(!0),children:s.jsx(o,{})})})}):null};p.propTypes={control:n.any.isRequired};const f=({children:e})=>s.jsxs(s.Fragment,{children:[s.jsx(m,{className:"flex items-center justify-center mb-10 text-3xl md:text-5xl md:mb-16"}),e]});export{f as A,p as I};