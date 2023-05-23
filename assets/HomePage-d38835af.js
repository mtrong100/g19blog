import{j as s,r as a,_ as d,d as h,R as f,B as j,P as g,p as b}from"./index-b64655ba.js";import{L as R}from"./Layout-898b4f07.js";import{B as E,P as i}from"./Button-f66f59cb.js";import{H as N}from"./Heading-79992bdf.js";import{s as u}from"./slugify-aca5d99f.js";import{B as w,a as y,b as B,d as P,c as D}from"./BlogItem-bea055b4.js";import{v as x}from"./v4-a960c1f4.js";import"./Logo-de5b7b2e.js";import"./data-a451e05d.js";import"./index.esm-c9a21f04.js";import"./index.esm-83bb03da.js";import"./NotFoundPage-ab58e72d.js";const k=()=>s.jsx("section",{className:"pt-[150px] bannerBG h-screen flex items-center justify-center",children:s.jsx("div",{className:"page-container",children:s.jsxs("div",{className:"max-w-[600px]",children:[s.jsx("span",{className:"text-lg font-semibold text-colorPrimary",children:"Stay Informed, Get Inspired"}),s.jsx("h1",{className:"my-3 text-5xl font-bold md:text-7xl text-linear",children:"G19BLOG"}),s.jsx("p",{className:"text-sm leading-snug break-all md:text-base",children:"From informative articles to in-depth analysis, we've got you covered. Join our community of avid readers and stay up-to-date with the latest trends and insights. Whether you're a seasoned pro or just starting out, our blog is the perfect place to expand your knowledge and engage with like-minded individuals. So what are you waiting for? Start exploring today!"}),s.jsx(E,{path:"/sign-in",type:"button",kind:"secondary",padding:"px-12 py-4",className:"mt-8 p",children:"Sign in"})]})})});i.shape({id:i.string.isRequired,createdAt:i.shape({seconds:i.number}),image:i.string,slug:i.string,title:i.string,category:i.shape({slug:i.string,title:i.string}),user:i.shape({slug:i.string,username:i.string})}).isRequired;const S=()=>{const[e,c]=a.useState([]);return a.useEffect(()=>{const t=d(h,"posts"),o=f(t,g("status","==","approved"),g("promote","==","feature"),j(3));b(o,r=>{let l=[];r.forEach(n=>{l.push({id:n.id,...n.data()})}),c(l)})},[]),s.jsx("section",{className:"pt-20 pb-[100px] md:pb-[120px]",children:s.jsxs("div",{className:"page-container",children:[s.jsx(N,{children:"Feature blogs"}),s.jsx("div",{className:"grid gap-5 mt-10 md:grid-cols-3",children:e.length>0&&e.map(t=>s.jsx(w,{data:t},t.id))})]})})},I=({data:e})=>{var o,r,l,n,m;if(!e.id)return null;const c=(o=e==null?void 0:e.createdAt)!=null&&o.seconds?new Date(((r=e==null?void 0:e.createdAt)==null?void 0:r.seconds)*1e3):new Date,t=new Date(c).toLocaleDateString("vi-VI");return s.jsxs("div",{className:"p-3 transition-all border border-transparent rounded-lg shadow-lg hover:border-colorPrimary bg-colorDarkRedux",children:[s.jsx(y,{className:"h-[250px] md:h-[430px] group rounded",url:e==null?void 0:e.image,alt:"blog-img"}),s.jsxs("div",{className:"flex flex-col gap-5 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx(B,{path:u(e==null?void 0:e.category.slug),children:(l=e==null?void 0:e.category)==null?void 0:l.title}),s.jsx(P,{className:"md:text-lg",path:(n=e==null?void 0:e.user)==null?void 0:n.slug,date:t,author:(m=e==null?void 0:e.user)==null?void 0:m.username})]}),s.jsx(D,{path:u(e==null?void 0:e.slug),className:"md:text-3xl",children:e==null?void 0:e.title})]})]})},v=({data:e})=>{var l,n;if(!e.id)return null;const c=(l=e==null?void 0:e.createdAt)!=null&&l.seconds?new Date(((n=e==null?void 0:e.createdAt)==null?void 0:n.seconds)*1e3):new Date,t=new Date(c).toLocaleDateString("vi-VI"),{category:o,user:r}=e;return s.jsxs("div",{className:"flex flex-col md:flex-row gap-5 mb-7 pb-7 border-b border-b-colorPurple last:border-b-0 last:pb-0 last:mb-0",children:[s.jsx(y,{className:"flex-1 w-full h-[170px] rounded-xl group",url:e==null?void 0:e.image,alt:"blog-img"}),s.jsxs("div",{className:"flex flex-col flex-1 gap-3",children:[s.jsx(B,{className:"text-xs",path:u(e==null?void 0:e.category.slug),children:o==null?void 0:o.title}),s.jsx(D,{path:u(e==null?void 0:e.slug),className:"text-lg",children:e==null?void 0:e.title}),s.jsx(P,{className:"text-xs",path:r==null?void 0:r.slug,date:t,author:r==null?void 0:r.username})]})]})},H=()=>{const[e,c]=a.useState([]);if(a.useEffect(()=>{const r=d(h,"posts"),l=f(r,g("status","==","approved"),g("promote","==","hot"),j(4));b(l,n=>{const m=[];n.forEach(p=>{m.push({id:p.id,...p.data()}),c(m)})})},[]),e.length<=0)return null;const[t,...o]=e;return s.jsx("section",{className:"mb-20",children:s.jsxs("div",{className:"page-container",children:[s.jsx(N,{children:"Newest blogs"}),s.jsxs("div",{className:"grid gap-10 mt-16 lg:grid-cols-2",children:[s.jsx(I,{data:t}),s.jsx("div",{className:"p-5 rounded-lg shadow-xl bg-colorDarkRedux",children:o.length>0&&o.map(r=>s.jsx(v,{data:r},x()))})]})]})})},q=()=>{const[e,c]=a.useState([]);return a.useEffect(()=>{const t=d(h,"posts"),o=f(t,g("status","==","approved"),g("promote","==","best"),j(4));b(o,r=>{const l=[];r.forEach(n=>{l.push({id:n.id,...n.data()}),c(l)})})},[]),s.jsxs("div",{className:"mb-20 page-container",children:[s.jsx(N,{children:"Trending blogs"}),s.jsx("div",{className:"grid gap-8 mt-10 md:grid-cols-2",children:e.length>0&&e.map(t=>s.jsx(w,{blockHeight:!0,data:t},x()))})]})},L=()=>{const[e,c]=a.useState([]);a.useEffect(()=>{const r=d(h,"posts"),l=f(r,g("status","==","approved"),g("promote","==","none"),j(8));b(l,n=>{const m=[];n.forEach(p=>{m.push({id:p.id,...p.data()}),c(m)})})},[]);const t=e.slice(0,4),o=e.slice(4);return s.jsx("section",{className:"mb-20",children:s.jsxs("div",{className:"page-container",children:[s.jsx(N,{children:"More blogs"}),s.jsxs("div",{className:"grid gap-10 mt-16 lg:grid-cols-2",children:[s.jsx("div",{className:"p-5 rounded-lg shadow-xl bg-colorDarkRedux",children:t.length>0&&t.map(r=>s.jsx(v,{data:r},x()))}),s.jsx("div",{className:"p-5 rounded-lg shadow-xl bg-colorDarkRedux",children:o.length>0&&o.map(r=>s.jsx(v,{data:r},x()))})]})]})})},K=()=>(a.useEffect(()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})},[]),s.jsx(s.Fragment,{children:s.jsxs(R,{children:[s.jsx(k,{}),s.jsx(S,{}),s.jsx(H,{}),s.jsx(q,{}),s.jsx(L,{})]})}));export{K as default};
