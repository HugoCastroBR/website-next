(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2350:function(e,r,t){Promise.resolve().then(t.t.bind(t,2998,23)),Promise.resolve().then(t.t.bind(t,2489,23)),Promise.resolve().then(t.t.bind(t,9345,23)),Promise.resolve().then(t.t.bind(t,1459,23)),Promise.resolve().then(t.bind(t,1376))},1376:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Providers}});var o=t(7437),n=t(5931),a=t(2265),i=t(3198),l=t(6435),s=t(3589);function isMantineColorScheme(e){return"auto"===e||"dark"===e||"light"===e}var c=t(5043);function setColorSchemeAttribute(e,r){var t;let o="auto"!==e?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";null==(t=r())||t.setAttribute("data-mantine-color-scheme",o)}var m=t(5681);function cssVariablesObjectToString(e){return Object.entries(e).map(([e,r])=>`${e}: ${r};`).join("")}function wrapWithSelector(e,r){let t=Array.isArray(e)?e:[e];return t.reduce((e,r)=>`${r}{${e}}`,r)}var d=t(4909),u=t(7108),h=t(1324),f=t(8947);function assignSizeVariables(e,r,t){(0,h.X)(r).forEach(o=>Object.assign(e,{[`--mantine-${t}-${o}`]:r[o]}))}let defaultCssVariablesResolver=e=>{let r=(0,d.j)(e,"dark"),t=(0,d.j)(e,"light"),o=e.defaultRadius in e.radius?e.radius[e.defaultRadius]:(0,u.h)(e.defaultRadius),n={variables:{"--mantine-scale":e.scale.toString(),"--mantine-cursor-type":e.cursorType,"--mantine-webkit-font-smoothing":e.fontSmoothing?"antialiased":"unset","--mantine-color-scheme":"light dark","--mantine-moz-font-smoothing":e.fontSmoothing?"grayscale":"unset","--mantine-color-white":e.white,"--mantine-color-black":e.black,"--mantine-line-height":e.lineHeights.md,"--mantine-font-family":e.fontFamily,"--mantine-font-family-monospace":e.fontFamilyMonospace,"--mantine-font-family-headings":e.headings.fontFamily,"--mantine-heading-font-weight":e.headings.fontWeight,"--mantine-radius-default":o,"--mantine-primary-color-filled":`var(--mantine-color-${e.primaryColor}-filled)`,"--mantine-primary-color-filled-hover":`var(--mantine-color-${e.primaryColor}-filled-hover)`,"--mantine-primary-color-light":`var(--mantine-color-${e.primaryColor}-light)`,"--mantine-primary-color-light-hover":`var(--mantine-color-${e.primaryColor}-light-hover)`,"--mantine-primary-color-light-color":`var(--mantine-color-${e.primaryColor}-light-color)`},light:{"--mantine-color-bright":"var(--mantine-color-black)","--mantine-color-text":e.black,"--mantine-color-body":e.white,"--mantine-color-error":e.colors.red[6],"--mantine-color-placeholder":e.colors.gray[5],"--mantine-color-anchor":e.colors[e.primaryColor][t],"--mantine-color-default":e.white,"--mantine-color-default-hover":e.colors.gray[0],"--mantine-color-default-color":e.black,"--mantine-color-default-border":e.colors.gray[4]},dark:{"--mantine-color-bright":"var(--mantine-color-white)","--mantine-color-text":"var(--mantine-color-dark-0)","--mantine-color-body":e.colors.dark[7],"--mantine-color-error":e.colors.red[9],"--mantine-color-placeholder":e.colors.dark[3],"--mantine-color-anchor":e.colors[e.primaryColor][4],"--mantine-color-default":e.colors.dark[6],"--mantine-color-default-hover":e.colors.dark[5],"--mantine-color-default-color":e.white,"--mantine-color-default-border":e.colors.dark[4]}};assignSizeVariables(n.variables,e.breakpoints,"breakpoint"),assignSizeVariables(n.variables,e.spacing,"spacing"),assignSizeVariables(n.variables,e.fontSizes,"font-size"),assignSizeVariables(n.variables,e.lineHeights,"line-height"),assignSizeVariables(n.variables,e.shadows,"shadow"),assignSizeVariables(n.variables,e.radius,"radius"),(0,h.X)(e.colors).forEach(o=>{e.colors[o].forEach((e,r)=>{n.variables[`--mantine-color-${o}-${r}`]=e});let a=9===t?e.colors[o][8]:e.colors[o][t+1],i=9===r?e.colors[o][8]:e.colors[o][r+1];n.light["--mantine-color-dimmed"]="var(--mantine-color-gray-6)",n.light[`--mantine-color-${o}-filled`]=e.colors[o][t],n.light[`--mantine-color-${o}-filled-hover`]=a,n.light[`--mantine-color-${o}-light`]=(0,f.m)(e.colors[o][t],.1),n.light[`--mantine-color-${o}-light-hover`]=(0,f.m)(e.colors[o][t],.12),n.light[`--mantine-color-${o}-light-color`]=e.colors[o][t],n.light[`--mantine-color-${o}-outline`]=e.colors[o][t],n.light[`--mantine-color-${o}-outline-hover`]=(0,f.m)(e.colors[o][t],.05),n.dark["--mantine-color-dimmed"]="var(--mantine-color-dark-2)",n.dark[`--mantine-color-${o}-filled`]=e.colors[o][r],n.dark[`--mantine-color-${o}-filled-hover`]=i,n.dark[`--mantine-color-${o}-light`]=(0,f.m)(e.colors[o][Math.max(0,r-2)],.15),n.dark[`--mantine-color-${o}-light-hover`]=(0,f.m)(e.colors[o][Math.max(0,r-2)],.2),n.dark[`--mantine-color-${o}-light-color`]=e.colors[o][Math.max(r-5,0)],n.dark[`--mantine-color-${o}-outline`]=e.colors[o][Math.max(r-4,0)],n.dark[`--mantine-color-${o}-outline-hover`]=(0,f.m)(e.colors[o][Math.max(r-4,0)],.05)});let a=e.headings.sizes;return(0,h.X)(a).forEach(r=>{n.variables[`--mantine-${r}-font-size`]=a[r].fontSize,n.variables[`--mantine-${r}-line-height`]=a[r].lineHeight,n.variables[`--mantine-${r}-font-weight`]=a[r].fontWeight||e.headings.fontWeight}),n};var g=t(7636),b=t(8758);let v=defaultCssVariablesResolver(b.t);function MantineCssVariables({cssVariablesSelector:e}){let r=(0,m.rZ)(),t=(0,s.R7)(),o=(0,s.Sm)(),n=function({theme:e,generator:r}){let t=defaultCssVariablesResolver(e),o=null==r?void 0:r(e);return o?(0,g.R)(t,o):t}({theme:r,generator:o}),i=":root"===e,l=i?function(e){let r={variables:{},light:{},dark:{}};return(0,h.X)(e.variables).forEach(t=>{v.variables[t]!==e.variables[t]&&(r.variables[t]=e.variables[t])}),(0,h.X)(e.light).forEach(t=>{v.light[t]!==e.light[t]&&(r.light[t]=e.light[t])}),(0,h.X)(e.dark).forEach(t=>{v.dark[t]!==e.dark[t]&&(r.dark[t]=e.dark[t])}),r}(n):n,c=function(e,r){let t=cssVariablesObjectToString(e.variables),o=t?wrapWithSelector(r,t):"",n=cssVariablesObjectToString(e.dark),a=n?wrapWithSelector(`${r}[data-mantine-color-scheme="dark"]`,n):"",i=cssVariablesObjectToString(e.light),l=i?wrapWithSelector(`${r}[data-mantine-color-scheme="light"]`,i):"";return`${o}${a}${l}`}(l,e);return c?a.createElement("style",{"data-mantine-styles":!0,nonce:null==t?void 0:t(),dangerouslySetInnerHTML:{__html:`${c}${i?"":`
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`}`}}):null}MantineCssVariables.displayName="@mantine/CssVariables";var p=t(3764);function MantineClasses(){let e=(0,m.rZ)(),r=(0,s.R7)(),t=(0,h.X)(e.breakpoints).reduce((r,t)=>{let o=(0,p.px)(e.breakpoints[t]);return`${r}@media (max-width: ${(0,u.em)(o-.1)}) {.mantine-visible-from-${t} {display: none !important;}}@media (min-width: ${(0,u.em)(o)}) {.mantine-hidden-from-${t} {display: none !important;}}`},"");return a.createElement("style",{"data-mantine-styles":"classes",nonce:null==r?void 0:r(),dangerouslySetInnerHTML:{__html:t}})}function MantineProvider({theme:e,children:r,getStyleNonce:t,withCssVariables:o=!0,cssVariablesSelector:n=":root",classNamesPrefix:i="mantine",colorSchemeManager:l=function({key:e="mantine-color-scheme-value"}={}){let r;return{get:r=>{if("undefined"==typeof window)return r;try{let t=window.localStorage.getItem(e);return isMantineColorScheme(t)?t:r}catch(e){return r}},set:r=>{try{window.localStorage.setItem(e,r)}catch(e){console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.",e)}},subscribe:t=>{r=r=>{r.storageArea===window.localStorage&&r.key===e&&isMantineColorScheme(r.newValue)&&t(r.newValue)},window.addEventListener("storage",r)},unsubscribe:()=>{window.removeEventListener("storage",r)},clear:()=>{window.localStorage.removeItem(e)}}}(),defaultColorScheme:d="light",getRootElement:u=()=>document.documentElement,cssVariablesResolver:h,forceColorScheme:f}){let{colorScheme:g,setColorScheme:b,clearColorScheme:v}=function({manager:e,defaultColorScheme:r,getRootElement:t,forceColorScheme:o}){let n=(0,a.useRef)(),[i,l]=(0,a.useState)(()=>e.get(r)),s=o||i,m=(0,a.useCallback)(r=>{o||(setColorSchemeAttribute(r,t),l(r),e.set(r))},[e.set,s,o]),d=(0,a.useCallback)(()=>{l(r),setColorSchemeAttribute(r,t),e.clear()},[e.clear,r]);return(0,a.useEffect)(()=>(e.subscribe(m),e.unsubscribe),[e.subscribe,e.unsubscribe]),(0,c.Y)(()=>{setColorSchemeAttribute(e.get(r),t)},[]),(0,a.useEffect)(()=>{var e;if(o)return setColorSchemeAttribute(o,t),()=>{};n.current=window.matchMedia("(prefers-color-scheme: dark)");let listener=e=>{"auto"===i&&setColorSchemeAttribute(e.matches?"dark":"light",t)};return null==(e=n.current)||e.addEventListener("change",listener),()=>{var e;return null==(e=n.current)?void 0:e.removeEventListener("change",listener)}},[i,o]),{colorScheme:s,setColorScheme:m,clearColorScheme:d}}({defaultColorScheme:d,forceColorScheme:f,manager:l,getRootElement:u});return!function({respectReducedMotion:e,getRootElement:r}){(0,c.Y)(()=>{var t;e&&(null==(t=r())||t.setAttribute("data-respect-reduced-motion","true"))},[e])}({respectReducedMotion:(null==e?void 0:e.respectReducedMotion)||!1,getRootElement:u}),a.createElement(s.XD.Provider,{value:{colorSchemeManager:l,colorScheme:g,setColorScheme:b,clearColorScheme:v,getRootElement:u,classNamesPrefix:i,getStyleNonce:t,cssVariablesResolver:h,cssVariablesSelector:n}},a.createElement(m.M2,{theme:e},o&&a.createElement(MantineCssVariables,{cssVariablesSelector:n}),a.createElement(MantineClasses,null),r))}!function(){let e=console.error;console.error=(...r)=>{r.length>1&&"string"==typeof r[0]&&r[0].toLowerCase().includes("extra attributes from the server")&&"string"==typeof r[1]&&r[1].toLowerCase().includes("data-mantine-color-scheme")||e(...r)}}(),MantineProvider.displayName="@mantine/core/MantineProvider";var k=t(1284);function ThemeProviders(e){let{children:r,...t}=e,{states:n}=(0,k.Z)();return(0,o.jsx)(MantineProvider,{forceColorScheme:n.App.darkMode?"dark":"light",children:(0,o.jsx)(l.f,{...t,attribute:"class",children:r})})}function Providers(e){let{children:r,...t}=e;return(0,o.jsx)(i.zt,{store:n.Z,children:(0,o.jsx)(ThemeProviders,{...t,children:r})})}},1284:function(e,r,t){"use strict";t.d(r,{Z:function(){return useStore}});var o=t(3198),n=t(5931);function useStore(){let e=n.Z.dispatch,r=(0,o.v9)(e=>e);return{states:r,dispatch:e}}},5931:function(e,r,t){"use strict";t.d(r,{q:function(){return l},Z:function(){return i}});var o=t(16);let n=(0,o.oM)({name:"AppSlice",initialState:{darkMode:!1,sideMenuIsOpen:!1},reducers:{SET_DARK_MODE(e,r){let{payload:t}=r;e.darkMode=t},SET_SIDE_MENU(e,r){let{payload:t}=r;e.sideMenuIsOpen=t}}}),a=(0,o.xC)({reducer:{App:n.reducer}});var i=a;let l=n.actions},1459:function(){},9345:function(){},2489:function(){},2998:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}}},function(e){e.O(0,[891,898,971,472,744],function(){return e(e.s=2350)}),_N_E=e.O()}]);