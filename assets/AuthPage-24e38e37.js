import{r as a,j as s}from"./index-de0d43b0.js";import{j as o,k as l}from"./index.esm-72c24d8a.js";import{P as n}from"./Button-3457d5d6.js";import{I as i}from"./yup-ed9760a1.js";import{L as m}from"./Logo-39b3c2a3.js";const p=({control:e})=>{const[r,t]=a.useState(!1);return e?s.jsx(s.Fragment,{children:s.jsx(i,{type:r?"text":"password",name:"password",placeholder:"Enter your password...",control:e,children:r?s.jsx("span",{className:"text-2xl",onClick:()=>t(!1),children:s.jsx(l,{})}):s.jsx("span",{className:"text-2xl",onClick:()=>t(!0),children:s.jsx(o,{})})})}):null};p.propTypes={control:n.any.isRequired};const f=({children:e})=>s.jsxs(s.Fragment,{children:[s.jsx(m,{className:"flex items-center justify-center mb-10 text-3xl md:text-5xl md:mb-16"}),e]});export{f as A,p as I};