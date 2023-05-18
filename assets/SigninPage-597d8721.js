import{c as x,a as c,u as f,b as j,e as w,r as d,Q as r,j as e,F as m,f as u,I as v,g as y,h as b,i as S,o as P,s as E,k as N}from"./index-b914001c.js";import{A as I,I as O}from"./AuthPage-5b6f46f9.js";const F=x({email:c().email("Please enter valid email").required("Please enter your email"),password:c().min(8,"Your password must be 8 characters or greater").required("Please enter your password")}),C=()=>{const o=f(),{userInfo:a}=j(),{control:t,handleSubmit:h,formState:{isValid:g,isSubmitting:i,errors:l}}=w({mode:"onchange",resolver:P(F)});d.useEffect(()=>{document.title="SignIn Page",a!=null&&a.email&&(o("/"),document.title="G19BLOG",r.info("You're already sign in !",{theme:"colored",autoClose:2e3,pauseOnHover:!1}))},[a]);const p=async s=>{if(g)try{await E(N,s.email,s.password),r.success("Sign in successfully !",{theme:"colored",autoClose:2e3,pauseOnHover:!1}),o("/")}catch{r.error("Something wrong with your email and password !",{theme:"colored",autoClose:2e3,pauseOnHover:!1})}};return d.useEffect(()=>{var n;const s=Object.values(l);s.length>0&&r.error((n=s[0])==null?void 0:n.message,{autoClose:2e3,pauseOnHover:!1})},[l]),e.jsx("section",{className:"flex items-center justify-center h-screen signinBG",children:e.jsx("div",{className:"page-container",children:e.jsx("form",{onSubmit:h(p),className:"w-full border-gradient max-w-[600px] p-10 shadow-lg glass-design rounded-lg mx-auto",children:e.jsxs(I,{children:[e.jsxs(m,{children:[e.jsx(u,{htmlFor:"email",children:"Email"}),e.jsx(v,{name:"email",placeholder:"Enter your email...",control:t})]}),e.jsxs(m,{children:[e.jsx(u,{htmlFor:"password",children:"Password"}),e.jsx(O,{control:t}),e.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold normal-case select-none",children:[e.jsx("p",{children:"Not have an account?"}),e.jsx(y,{to:"/sign-up",className:"cursor-pointer text-colorPink",children:"SignUp"})]})]}),e.jsx(b,{type:"submit",kind:"secondary",className:`w-full h-[60px] font-semibold text-xl ${i?"opacity-50 pointer-events-none":""}`,children:i?e.jsx(S,{}):"Sign in"})]})})})})};export{C as default};
