import{c as g,a as r,u as w,e as j,r as m,Q as d,j as e,F as t,f as n,I as u,g as b,h as y,i as P,o as E,l as S,k as o,m as U,w as H,n as N,q as A,K as q,t as v,d as B}from"./index-9a5859a1.js";import{A as F,I as M}from"./AuthPage-9f9f7ec3.js";const G=g({username:r().max(20,"Username cannot exceed 20 characters").required("Please enter your username"),email:r().lowercase().email("Please enter valid email").required("Please enter your email"),password:r().max(8,"Your password must be 8 characters").required("Please enter your password")}),D=()=>{const x=w(),{control:a,handleSubmit:h,formState:{isValid:p,isSubmitting:i,errors:l}}=j({mode:"onchange",resolver:E(G)});m.useEffect(()=>{document.title="SignUp Page"},[]);const f=async s=>{p&&(await S(o,s.email,s.password),await U(o.currentUser,{displayName:s.username,photoURL:"https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"}),await H(v(B,"users",o.currentUser.uid),{username:s.username,email:s.email,password:s.password,role:N.USER,slug:A(s.username,{lower:!0}),avatar:"https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",createtAt:q()}),d.success("Create user successfully !",{theme:"colored",autoClose:2e3,pauseOnHover:!1}),x("/"))};return m.useEffect(()=>{var c;const s=Object.values(l);s.length>0&&d.error((c=s[0])==null?void 0:c.message,{theme:"colored",autoClose:2e3,pauseOnHover:!1})},[l]),e.jsx("section",{className:"flex items-center justify-center h-screen signupBG",children:e.jsx("div",{className:"page-container",children:e.jsx("form",{onSubmit:h(f),className:"w-full border-gradient max-w-[600px] p-10 shadow-lg glass-design rounded-lg mx-auto",children:e.jsxs(F,{children:[e.jsxs(t,{children:[e.jsx(n,{htmlFor:"username",children:"Username"}),e.jsx(u,{name:"username",placeholder:"Enter your username...",control:a})]}),e.jsxs(t,{children:[e.jsx(n,{htmlFor:"email",children:"Email"}),e.jsx(u,{name:"email",placeholder:"Enter your email...",control:a})]}),e.jsxs(t,{children:[e.jsx(n,{htmlFor:"password",children:"Password"}),e.jsx(M,{control:a}),e.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold normal-case select-none",children:[e.jsx("p",{children:"Already have an account?"}),e.jsx(b,{to:"/sign-in",className:"cursor-pointer text-colorPink",children:"SignIn"})]})]}),e.jsx(y,{type:"submit",kind:"secondary",className:`w-full h-[60px] font-semibold text-xl ${i?"opacity-50 pointer-events-none":""}`,children:i?e.jsx(P,{}):"Sign up"})]})})})})};export{D as default};