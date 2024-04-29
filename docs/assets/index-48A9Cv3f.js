import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as r}from"./index-FeUjBnvO.js";import{M as i,C as c,d}from"./index-BPB9T_ZN.js";import{u as l,E as o}from"./index.stories-_xT2CzdY.js";import"./index-uubelm5h.js";import"./iframe-CaeJXAJZ.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-COebWTXQ.js";import"./index-D0OBZnxu.js";import"./index-DrFu-skq.js";import"./index-D6si0Ahr.js";function n(s){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(t.h1,{id:"useclickoutside",children:e.jsx(t.strong,{children:"useClickOutside"})}),`
`,e.jsx(t.p,{children:"This hook allows you to detect clicks outside of a specified element."}),`
`,e.jsxs(t.h2,{id:"example-",children:[e.jsx(t.strong,{children:"Example"})," :"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`	const ref = useRef<HTMLButtonElement>(null)\r
	const [clicksOutside, setClicksOutside] = useState(0)\r
	const callback = () => {\r
		setClicksOutside(prev => prev + 1)\r
	}\r
	const hook = useClickOutside(ref, callback)\r
	return (\r
		<>\r
			<Button ref={ref} className="font-bold">\r
				Click outside!\r
			</Button>\r
\r
			<p>Clicks outside: {clicksOutside}</p>\r
		</>\r
	)
`})}),`
`,e.jsx(c,{of:o,preview:!0}),`
`,e.jsx(t.h2,{id:"api",children:e.jsx(t.strong,{children:"API"})}),`
`,e.jsxs(t.p,{children:["▸ ",e.jsx(t.strong,{children:"useClickOutside"}),"(",e.jsx(t.code,{children:"ref"}),", ",e.jsx(t.code,{children:"callback"}),"): ",e.jsx(t.em,{children:"void"})]}),`
`,e.jsx(t.p,{children:"This hook allows you to detect clicks outside of a specified element."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Parameters:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name "}),e.jsx("th",{children:" Type "}),e.jsx("th",{children:" Description "})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:" ref "}),e.jsxs("td",{children:[" ",e.jsx(t.code,{children:"React.MutableRefObject<HTMLElement>"})," "]}),e.jsx("td",{children:" The reference to the element you want to detect clicks outside of. "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:" callback "}),e.jsxs("td",{children:[" ",e.jsx(t.code,{children:"() => void"})," "]}),e.jsx("td",{children:" The function that will be called when a click outside of the element is detected. "})]})]})]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Returns:"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Name "}),e.jsx("th",{children:" Type "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:" void "}),e.jsxs("td",{children:[" ",e.jsx(t.code,{children:"void"})," "]}),e.jsx("td",{children:" Doesn't returns anything  "})]})})]}),`
`,e.jsx(d,{})]})}function y(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{y as default};