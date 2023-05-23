import{u as z,r,b as J,Q as p,j as e,R as D,P as k,_ as y,d as x,f as C,y as Y,K as W,m as X,c as Z}from"./index-b64655ba.js";import{u as ee,I as se}from"./ImageUpload-4c59bae0.js";import{s as te}from"./slugify-aca5d99f.js";import{l as ae,I as oe,a as re,D as le,S as ne,L as ie,O as ce,R as de}from"./axios-2e68735e.js";import{R as i}from"./Radio-a692c46b.js";import{c as me,a as ue,u as he,F as c,L as d,I as pe,b as xe,o as fe}from"./yup-ddf339d4.js";import{H as ge}from"./Heading-79992bdf.js";import{B as je}from"./Button-f66f59cb.js";import{u as O,a as m,p as u}from"./constants-c6ed1daf.js";import{B as be,a as we}from"./index.esm-83bb03da.js";import"./index.esm-c9a21f04.js";ae.Quill.register("modules/imageUploader",oe);const ye=me({title:ue().required("Please enter your title !")}),Fe=()=>{const{userInfo:a}=z(),{control:l,handleSubmit:F,watch:E,setValue:f,getValues:I,reset:T,formState:{isValid:B,isSubmitting:v,errors:S}}=he({mode:"onchange",resolver:fe(ye),defaultValues:{title:"",slug:"",status:"pending",promote:"none",image:"",category:{},user:{}}}),g=E("status"),j=E("promote"),{image:b,progress:H,handleSelectImage:U,handleDeleteImage:q,handleResetUpLoad:L}=ee(f,I),[N,V]=r.useState([]),[n,P]=r.useState(""),[w,G]=r.useState("");r.useEffect(()=>{document.title="G19BLOG - Add New Post"},[]),r.useEffect(()=>{async function s(){if(!a.email)return;const t=D(y(x,"users"),k("email","==",a.email));(await C(t)).forEach(h=>{f("user",{id:h.id,...h.data()})})}s()},[a.email]),r.useEffect(()=>{async function s(){const t=y(x,"categories"),o=D(t,k("status","==","approved")),h=await C(o);let R=[];h.forEach(A=>{R.push({id:A.id,...A.data()})}),V(R)}s()},[]);const $=J(),K=async s=>{if(!B||!b||!s.category||!w){p.error("Please fill full the option !",{theme:"colored",autoClose:2e3,pauseOnHover:!1});return}try{const t={...s};t.slug=te(s.slug||s.title,{lower:!0});const o=y(x,"posts");await Y(o,{...t,image:b,content:w,createdAt:W()}),p.success("Add new post successfully !",{theme:"colored",autoClose:2e3,pauseOnHover:!1}),$("/manage/post"),T({title:"",slug:"",status:"pending",promote:"none",image:"",category:{},user:{}}),L(),P({})}catch{p.error("Failed to add new post !",{theme:"colored",autoClose:2e3,pauseOnHover:!1})}},M=async s=>{const t=X(x,"categories",s.id),o=await Z(t);f("category",{id:o.id,...o.data()}),P(s)},Q="9a11f0b1324b260553f2e8b764d9b2b1",_=r.useMemo(()=>({toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{header:[1,2,3,4,5,6,!1]}],["link","image"],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]],imageUploader:{upload:async s=>{const t=new FormData;return t.append("image",s),(await re({method:"post",url:`https://api.imgbb.com/1/upload?key=${Q}`,data:t,headers:{"Content-Type":"multipath/form-data"}})).data.data.url}}}),[]);return r.useEffect(()=>{var t;const s=Object.values(S);s.length>0&&p.error((t=s[0])==null?void 0:t.message,{theme:"colored",autoClose:2e3,pauseOnHover:!1})},[S]),e.jsxs("div",{children:[e.jsx(ge,{children:"add new post"}),e.jsxs("form",{className:"pt-14",onSubmit:F(K),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-10 mb-10",children:[e.jsxs(c,{children:[e.jsx(d,{children:"Title ✒️"}),e.jsx(pe,{control:l,placeholder:"Enter your title",name:"title"})]}),e.jsxs(c,{children:[e.jsx(d,{children:"Category 📦"}),e.jsxs(le,{children:[e.jsx(ne,{placeholder:"Select Category"}),e.jsx(ie,{children:N.length>0&&N.map(s=>e.jsx(ce,{onClick:()=>M(s),children:s.title},s.id))})]}),(n==null?void 0:n.title)&&e.jsx("span",{className:"inline-block p-3 text-sm font-medium rounded-lg bg-colorGradient",children:`#${n==null?void 0:n.title}`})]})]}),e.jsxs("div",{className:"grid items-center grid-cols-2 mb-10 gap-x-10",children:[e.jsxs(c,{children:[e.jsx(d,{children:"Image 🖼️"}),e.jsx(se,{onChange:U,handleDeleteImage:q,progress:H,image:b}),e.jsx("input",{type:"file",name:"image",className:"hidden-input"})]}),e.jsx("div",{className:"flex flex-col gap-10",children:((a==null?void 0:a.role)===O.ADMIN||(a==null?void 0:a.role)===O.MOD)&&e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"Promote Post ✅"}),e.jsxs("div",{className:"flex items-center gap-x-5",children:[e.jsx(i,{name:"promote",control:l,checked:j===m.FEATURE,value:m.FEATURE,children:"Feature"}),e.jsx(i,{name:"promote",control:l,checked:j===m.BEST,value:m.BEST,children:"Best"}),e.jsx(i,{name:"promote",control:l,checked:j===m.HOT,value:m.HOT,children:"Hot"})]})]}),e.jsxs(c,{children:[e.jsx(d,{children:"Status 📉"}),e.jsxs("div",{className:"flex items-center gap-x-5",children:[e.jsx(i,{name:"status",control:l,checked:g===u.APPROVED,value:u.APPROVED,children:"Approved"}),e.jsx(i,{name:"status",control:l,checked:g===u.PENDING,value:u.PENDING,children:"Pending"}),e.jsx(i,{name:"status",control:l,checked:g===u.REJECTED,value:u.REJECTED,children:"Reject"})]})]})]})})]}),e.jsx("div",{className:"mb-10",children:e.jsxs(c,{children:[e.jsx(d,{children:"Content ✍️"}),e.jsx("div",{className:"w-full entry-content",children:e.jsx(de,{modules:_,theme:"snow",value:w,onChange:G})})]})}),e.jsx(je,{id:"addpost",type:"submit",kind:"secondary",className:`w-[250px] mx-auto h-[65px] font-semibold text-xl ${v?"opacity-50 pointer-events-none":""}`,children:v?e.jsx(xe,{}):"add new post"})]}),e.jsx("a",{href:"#",children:e.jsx("div",{className:"fixed shadow-2xl w-[50px] h-[50px] rounded-full bottom-20 right-5 flex items-center justify-center bg-colorSecondary text-white z-40 cursor-pointer font-bold text-2xl",children:e.jsx(be,{})})}),e.jsx("a",{href:"#addpost",children:e.jsx("div",{className:"fixed shadow-2xl w-[50px] h-[50px] rounded-full bottom-5 right-5 flex items-center justify-center bg-colorSecondary text-white z-40 cursor-pointer font-bold text-2xl",children:e.jsx(we,{})})})]})};export{Fe as default};
