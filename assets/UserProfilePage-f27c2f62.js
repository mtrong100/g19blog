import{j as e,D as R,r as o,_ as g,d as h,R as u,P as j,p as b}from"./index-ce3b87f5.js";import S from"./NotFoundPage-c1c4ba2e.js";import{L as I}from"./Layout-a71b92a4.js";import{H as v}from"./Heading-a667347c.js";import{B as L,a as U}from"./BlogItem-11f43e7f.js";import{P as p}from"./Button-3456861e.js";import{v as k}from"./v4-a960c1f4.js";import"./Logo-da02a0f4.js";import"./data-f647f4c9.js";import"./index.esm-99081164.js";import"./index.esm-46023957.js";import"./BlogMeta-032a464c.js";import"./BlogTitle-02f486e8.js";import"./slugify-007e15f2.js";const y=({data:s,slug:c,formatDate:i})=>e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx("img",{className:"w-[130px] h-[130px] md:w-[250px] object-cover md:h-[250px] rounded border-2 border-gradient",src:s==null?void 0:s.avatar,alt:"data-avatar"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(v,{children:`${c}`}),e.jsx("span",{className:"italic font-semibold hover:opacity-90 text-colorPrimary",children:s==null?void 0:s.email}),e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx("span",{className:"inline-block px-6 py-2 text-sm font-semibold text-center text-white capitalize rounded-lg select-none bg-colorSecondary md:text-base",children:s==null?void 0:s.role}),e.jsx("span",{className:"text-sm font-semibold text-white select-none md:text-lg hover:opacity-90",children:`Date: ${i}`})]})]})]});y.propTypes={data:p.string,slug:p.string,formatDate:p.string};const M=()=>{var d,x;const{slug:s}=R(),[c,i]=o.useState([]),[t,D]=o.useState({}),[N,P]=o.useState(!0);o.useEffect(()=>{async function r(){const n=g(h,"posts"),l=u(n,j("user.slug","==",s));b(l,m=>{const a=[];m.forEach(f=>{a.push({id:f.id,...f.data()}),i(a),P(!1)})})}r()},[s]),o.useEffect(()=>{async function r(){const n=g(h,"users"),l=u(n,j("slug","==",s));b(l,m=>{m.forEach(a=>{a.data()&&D(a.data())})})}r()},[s]),o.useEffect(()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})},[]);const w=(d=t==null?void 0:t.createdAt)!=null&&d.seconds?new Date(((x=t==null?void 0:t.createdAt)==null?void 0:x.seconds)*1e3):new Date,E=new Date(w).toLocaleDateString("vi-VI");return s?e.jsx(I,{children:e.jsxs("div",{className:"page-container py-[150px]",children:[e.jsx(y,{data:t,slug:s,formatDate:E}),e.jsxs("div",{className:"mt-20",children:[e.jsx(v,{children:"blogs post"}),e.jsxs("div",{className:"grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3",children:[N&&e.jsx(L,{Imageheight:200,blogs:3}),c.length>0&&c.map(r=>e.jsx(U,{data:r},k()))]})]})]})}):e.jsx(S,{})};export{M as default};
