import{j as e,R as x,n as h,m as l,k as j,D as g,a as p,b as I,c as r,p as t,e as o,S as N,q as s,f as E,g as y,h as D,o as f}from"./index-CrwugIwe.js";import{a as C,e as k}from"./api-v6L_fz_e.js";import{l as S}from"./loginImage-DQqn81bo.js";/* empty css                  */C.createRoot(document.getElementById("root")).render(e.jsxs(x.StrictMode,{children:[e.jsx(h,{imgSrc:l}),e.jsx(j,{children:" Create New Course"}),e.jsxs(g,{children:[e.jsxs("aside",{className:"sideFrame",children:[e.jsx(p,{src:l}),e.jsx(I,{children:"490 Courses "})]}),e.jsxs("section",{id:"createAccountCard",children:[e.jsx("aside",{className:"loginImageCard",children:e.jsx("img",{src:S,alt:"loginImage",className:"loginImage"})}),e.jsxs("aside",{className:"loginSection",children:[e.jsxs(r,{children:[e.jsx(t,{children:" Course Name "}),e.jsx(o,{type:"text",placeholder:"course Name",id:"courseNameInput"})]}),e.jsxs(r,{children:[e.jsx(t,{children:" Course Number"}),e.jsx(o,{type:"text",placeholder:"Course Number",id:"courseNumberInput"})]}),e.jsxs(r,{children:[e.jsx(t,{className:"createAccount-formText",children:" Description"}),e.jsx(o,{type:"text",id:"courseDescriptionInput"})]}),e.jsxs(r,{children:[e.jsx(t,{className:"createAccount-formText",children:" Add Students"}),e.jsxs(N,{id:"students",children:[e.jsx(s,{id:"students_1",children:" King Leslie  "}),e.jsx(s,{id:"students_2",children:" Ayo manyike  "}),e.jsx(s,{id:"students_4",children:" Princewill  L "}),e.jsx(s,{id:"students_5",children:" Faraday Will "}),e.jsx(s,{id:"students_6",children:" Joey Great "})]})]}),e.jsx(E,{children:e.jsx(y,{className:"loginBtn",id:"createAccountButton",onClick:M,children:"Create"})}),e.jsx(D,{id:"errorMsg",children:"Error with Signing In"})]})]})]})]}));async function M(){const n=courseNameInput.value,a=courseNumberInput.value,i=courseDescriptionInput.value,u=sessionStorage.getItem("username"),d=[];students.querySelectorAll("div").forEach(c=>{if(c.querySelector('input[type="checkbox"]').checked){const m=c.textContent.trim();d.push(m)}}),n&&a&&i?(await k(n,a,i,u,d)).ok?window.location.href="homePage.html":(errorMsg.innerText="An error occured",errorMsg.style.display="block"):(errorMsg.innerText="Please fill in all fields",errorMsg.style.display="block")}document.addEventListener("DOMContentLoaded",n=>{f()});
