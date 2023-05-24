import{j as s,r as u,_ as a,d,R as f,B as j,P as x,p as b}from"./index-59f0801a.js";import{L as R}from"./Layout-94da94a0.js";import{B as S,P as t}from"./Button-fd1b6758.js";import{H as N}from"./Heading-e7981ca2.js";import{s as p}from"./slugify-968d5356.js";import{B as y,a as w}from"./BlogMeta-b9f36382.js";import{B as k,a as B,b as D}from"./BlogItem-7513aa22.js";import{B as E}from"./BlogItemSkeleton-bd2403e8.js";import{v as h}from"./v4-a960c1f4.js";import I from"./NotFoundPage-1cdd2a31.js";import"./Logo-64ac1fd9.js";import"./data-097f164b.js";import"./index.esm-66ae77af.js";import"./index.esm-dcbc90e0.js";const q=()=>s.jsx("section",{className:"pt-[150px] bannerBG h-screen flex items-center justify-center",children:s.jsx("div",{className:"page-container",children:s.jsxs("div",{className:"max-w-[600px]",children:[s.jsx("span",{className:"text-lg font-semibold text-colorPrimary",children:"Stay Informed, Get Inspired"}),s.jsx("h1",{className:"my-3 text-5xl font-bold md:text-7xl text-linear",children:"G19BLOG"}),s.jsx("p",{className:"text-sm leading-snug break-all md:text-base",children:"From informative articles to in-depth analysis, we've got you covered. Join our community of avid readers and stay up-to-date with the latest trends and insights. Whether you're a seasoned pro or just starting out, our blog is the perfect place to expand your knowledge and engage with like-minded individuals. So what are you waiting for? Start exploring today!"}),s.jsx(S,{path:"/sign-in",type:"button",kind:"secondary",padding:"px-12 py-4",className:"mt-8 p",children:"Sign in"})]})})});t.shape({id:t.string.isRequired,createdAt:t.shape({seconds:t.number}),image:t.string,slug:t.string,title:t.string,category:t.shape({slug:t.string,title:t.string}),user:t.shape({slug:t.string,username:t.string})}).isRequired;const A=()=>{const[e,g]=u.useState([]),[i,o]=u.useState(!0);return u.useEffect(()=>{const r=a(d,"posts"),l=f(r,x("status","==","approved"),x("promote","==","feature"),j(3));b(l,n=>{let c=[];n.forEach(m=>{c.push({id:m.id,...m.data()})}),g(c),o(!1)})},[]),s.jsx("section",{className:"pt-20 pb-[100px] md:pb-[120px]",children:s.jsxs("div",{className:"page-container",children:[s.jsx(N,{children:"Feature blogs"}),s.jsxs("div",{className:"grid gap-5 mt-10 md:grid-cols-3",children:[i&&s.jsx(E,{blogs:3}),e.length>0&&e.map(r=>s.jsx(k,{data:r},r.id))]})]})})},L=({data:e})=>{var o,r,l,n,c;if(!e.id)return null;const g=(o=e==null?void 0:e.createdAt)!=null&&o.seconds?new Date(((r=e==null?void 0:e.createdAt)==null?void 0:r.seconds)*1e3):new Date,i=new Date(g).toLocaleDateString("vi-VI");return s.jsxs("div",{className:"p-3 transition-all border border-transparent rounded-lg shadow-lg hover:border-colorPrimary bg-colorDarkRedux",children:[s.jsx(y,{size:"large",url:e==null?void 0:e.image,alt:"blog-img"}),s.jsxs("div",{className:"flex flex-col gap-5 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx(B,{path:p(e==null?void 0:e.category.slug),children:(l=e==null?void 0:e.category)==null?void 0:l.title}),s.jsx(w,{className:"md:text-lg",path:(n=e==null?void 0:e.user)==null?void 0:n.slug,date:i,author:(c=e==null?void 0:e.user)==null?void 0:c.username})]}),s.jsx(D,{path:p(e==null?void 0:e.slug),className:"md:text-3xl",children:e==null?void 0:e.title})]})]})},v=({data:e})=>{var l,n;if(!e.id)return null;const g=(l=e==null?void 0:e.createdAt)!=null&&l.seconds?new Date(((n=e==null?void 0:e.createdAt)==null?void 0:n.seconds)*1e3):new Date,i=new Date(g).toLocaleDateString("vi-VI"),{category:o,user:r}=e;return s.jsxs("div",{className:"flex flex-col md:flex-row gap-5 mb-7 pb-7 border-b border-b-colorPurple last:border-b-0 last:pb-0 last:mb-0",children:[s.jsx(y,{size:"small",className:"md:flex-1",url:e==null?void 0:e.image,alt:"blog-img"}),s.jsxs("div",{className:"flex flex-col flex-1 gap-3",children:[s.jsx(B,{className:"text-xs",path:p(e==null?void 0:e.category.slug),children:o==null?void 0:o.title}),s.jsx(D,{path:p(e==null?void 0:e.slug),className:"text-lg",children:e==null?void 0:e.title}),s.jsx(w,{className:"text-xs",path:r==null?void 0:r.slug,date:i,author:r==null?void 0:r.username})]})]})},F=()=>{const[e,g]=u.useState([]);if(u.useState(!0),u.useEffect(()=>{const r=a(d,"posts"),l=f(r,x("status","==","approved"),x("promote","==","hot"),j(4));b(l,n=>{const c=[];n.forEach(m=>{c.push({id:m.id,...m.data()}),g(c)})})},[]),e.length<=0)return null;const[i,...o]=e;return s.jsx("section",{className:"mb-20",children:s.jsxs("div",{className:"page-container",children:[s.jsx(N,{children:"Newest blogs"}),s.jsxs("div",{className:"grid gap-10 mt-16 lg:grid-cols-2",children:[s.jsx(L,{data:i}),s.jsx("div",{className:"p-5 rounded-lg shadow-xl bg-colorDarkRedux",children:o.length>0&&o.map(r=>s.jsx(v,{data:r},h()))})]})]})})},P=({data:e})=>{var o,r,l,n,c,m;if(!e.id)return s.jsx(I,{});const g=(o=e==null?void 0:e.createdAt)!=null&&o.seconds?new Date(((r=e==null?void 0:e.createdAt)==null?void 0:r.seconds)*1e3):new Date,i=new Date(g).toLocaleDateString("vi-VI");return s.jsxs("div",{className:"flex flex-col h-full p-3 transition-all border border-transparent rounded-lg shadow-lg hover:border-colorPrimary bg-colorDarkRedux",children:[s.jsx(y,{size:"big",url:e==null?void 0:e.image}),s.jsxs("div",{className:"flex flex-col flex-1 h-full gap-4 p-3",children:[s.jsx(B,{path:p((l=e==null?void 0:e.category)==null?void 0:l.slug),className:"text-xs",children:(n=e==null?void 0:e.category)==null?void 0:n.title}),s.jsx(D,{path:p(e==null?void 0:e.slug),className:"flex-1 md:text-sm lg:text-xl",children:e==null?void 0:e.title}),s.jsx(w,{className:"text-xs lg:text-sm",path:(c=e==null?void 0:e.user)==null?void 0:c.slug,date:i,author:(m=e==null?void 0:e.user)==null?void 0:m.username})]})]})};P.propTypes={data:t.shape({id:t.string.isRequired,createdAt:t.shape({seconds:t.number}),image:t.string,slug:t.string,title:t.string,category:t.shape({slug:t.string,title:t.string}),user:t.shape({slug:t.string,username:t.string})}).isRequired};const H=()=>{const[e,g]=u.useState([]);return u.useEffect(()=>{const i=a(d,"posts"),o=f(i,x("status","==","approved"),x("promote","==","best"),j(4));b(o,r=>{const l=[];r.forEach(n=>{l.push({id:n.id,...n.data()}),g(l)})})},[]),s.jsxs("div",{className:"mb-20 page-container",children:[s.jsx(N,{children:"Trending blogs"}),s.jsx("div",{className:"grid gap-8 mt-10 md:grid-cols-2",children:e.length>0&&e.map(i=>s.jsx(P,{data:i},h()))})]})},T=()=>{const[e,g]=u.useState([]);u.useEffect(()=>{const r=a(d,"posts"),l=f(r,x("status","==","approved"),x("promote","==","none"),j(8));b(l,n=>{const c=[];n.forEach(m=>{c.push({id:m.id,...m.data()}),g(c)})})},[]);const i=e.slice(0,4),o=e.slice(4);return s.jsx("section",{className:"mb-20",children:s.jsxs("div",{className:"page-container",children:[s.jsx(N,{children:"More blogs"}),s.jsxs("div",{className:"grid gap-10 mt-16 lg:grid-cols-2",children:[s.jsx("div",{className:"p-5 rounded-lg shadow-xl bg-colorDarkRedux",children:i.length>0&&i.map(r=>s.jsx(v,{data:r},h()))}),s.jsx("div",{className:"p-5 rounded-lg shadow-xl bg-colorDarkRedux",children:o.length>0&&o.map(r=>s.jsx(v,{data:r},h()))})]})]})})},Z=()=>(u.useEffect(()=>{document.body.scrollIntoView({behavior:"smooth",block:"start"})},[]),s.jsx(s.Fragment,{children:s.jsxs(R,{children:[s.jsx(q,{}),s.jsx(A,{}),s.jsx(F,{}),s.jsx(H,{}),s.jsx(T,{})]})}));export{Z as default};