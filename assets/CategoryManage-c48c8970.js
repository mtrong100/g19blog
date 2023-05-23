import{u as D,b as A,r as s,j as e,_ as E,d as p,p as P,m as S,g as R,Q as h}from"./index-b64655ba.js";import{T as I,I as O,a as k}from"./IconDelete-190d9c39.js";import{S as g}from"./sweetalert2.all-78fb025e.js";import{L as c}from"./LabelStatus-197c2496.js";import{H as B}from"./Heading-79992bdf.js";import{B as M}from"./Button-f66f59cb.js";import{a as T}from"./data-a451e05d.js";import{c as a,u as m}from"./constants-c6ed1daf.js";import{A as H}from"./index.esm-c9a21f04.js";import{v as L}from"./v4-a960c1f4.js";const K=()=>{const{userInfo:r}=D(),f=A(),[y,j]=s.useState([]),[i,b]=s.useState(""),[o,v]=s.useState("all"),C=t=>{switch(t){case a.APPROVED:return e.jsx(c,{type:"success",children:"Approved"});case a.PENDING:return e.jsx(c,{type:"warning",children:"Pending"});case a.REJECTED:return e.jsx(c,{type:"danger",children:"Rejected"})}};s.useEffect(()=>{async function t(){const l=E(p,"categories");P(l,n=>{let u=[];n.forEach(x=>{u.push({id:x.id,...x.data()})}),j(u)})}t()},[]);const d=y.filter(t=>t.title.toLowerCase().includes(i.toLowerCase())).filter(t=>o==="all"?!0:t.status===o),N=async t=>{const l=S(p,"categories",t);(r==null?void 0:r.role)===m.ADMIN?g.fire({title:"Are you sure you want to delete this category?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(async n=>{n.isConfirmed&&(await R(l),g.fire("Deleted!","Your category has been deleted.","success"))}):h.error("Only ADMIN & MOD can delete!",{theme:"colored",autoClose:2e3,pauseOnHover:!1})},w=t=>{r.role===m.ADMIN?f(`/manage/update-category?id=${t}`):h.error("only ADMIN can edit category !",{theme:"colored",autoClose:2e3,pauseOnHover:!1})};return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:"categories manage"}),e.jsxs("div",{className:"flex flex-col justify-between gap-10 py-10 lg:gap-0 lg:flex-row",children:[e.jsx(M,{type:"button",kind:"secondary",className:"h-[55px]",path:"/manage/add-category",children:"Add new category"}),e.jsxs("div",{className:"flex items-center gap-10",children:[e.jsxs("select",{className:"py-2 w-[150px] border border-solid rounded bg-colorDarkRedux border-colorPrimary",value:o,onChange:t=>v(t.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:a.APPROVED,children:"Approved"}),e.jsx("option",{value:a.PENDING,children:"Pending"}),e.jsx("option",{value:a.UNAPPROVED,children:"Unapproved"})]}),e.jsxs("div",{className:"w-full flex items-center py-4 px-5 gap-3 max-w-[300px] border-2 border-solid rounded-full border-colorPrimary",children:[e.jsx("span",{className:"text-2xl",children:e.jsx(H,{})}),e.jsx("input",{value:i,onChange:t=>b(t.target.value),type:"text",className:"w-full",placeholder:"Search category..."})]})]})]}),e.jsxs(I,{children:[e.jsx("thead",{children:e.jsx("tr",{children:T.map(t=>e.jsx("th",{children:t},L()))})}),e.jsx("tbody",{children:d.length>0&&d.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"text-xs font-semibold text-gray-500 capitalize lg:text-base ",children:t.id})}),e.jsx("td",{children:e.jsx("span",{className:"hover:opacity-90 capitalize select-none inline-block w-[120px] px-4 text-center rounded-lg font-semibold bg-colorDarkSaga italic text-colorPrimary text-sm py-[10px]",children:t.title})}),e.jsx("td",{children:C(t.status)}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center text-gray-500 gap-x-3",children:[e.jsx(O,{onClick:()=>w(t.id)}),e.jsx(k,{onClick:()=>N(t.id)})]})})]},t.id))})]})]})};export{K as default};
