import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{r as l}from"./index-uubelm5h.js";import{I as c}from"./index-tBptrbbq.js";const p=(e,o)=>{const[s,n]=l.useState(e);return l.useEffect(()=>{const a=setTimeout(()=>{n(e)},o);return()=>{clearTimeout(a)}},[e,o]),s},i=e=>{const[o,s]=l.useState("Globo"),n=p(o,e.miliseconds);return t.jsxs("div",{className:"flex flex-col items-center gap-4",children:[t.jsxs("label",{htmlFor:"debounceInput",className:"flex flex-col gap-2 font-bold",children:["Input:",t.jsx(c,{id:"debounceInput",type:"text",className:"w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded",value:o,onChange:a=>s(a.target.value)})]}),t.jsxs("label",{htmlFor:"debounceOutput",className:"flex flex-col gap-2 font-bold ",children:["Output:",t.jsx(c,{type:"text",className:"w-32 h-10 p-2 font-normal border-2 border-red-600 border-solid rounded",value:n})]})]})},b={title:"Hooks/useDebounce",component:i,parameters:{layout:"centered"}},r={args:{miliseconds:500}};var u,d,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    miliseconds: 500
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const x=["Example"],j=Object.freeze(Object.defineProperty({__proto__:null,Example:r,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{r as E,j as u};
