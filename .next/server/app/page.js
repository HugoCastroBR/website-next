(()=>{var e={};e.id=931,e.ids=[931],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5619:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>c,routeModule:()=>h,tree:()=>d});var s=a(7096),r=a(6132),o=a(7284),n=a.n(o),i=a(2564),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);a.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,6154)),"C:\\Users\\hugoe\\Desktop\\Projetos\\website\\website-next\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,2594)),"C:\\Users\\hugoe\\Desktop\\Projetos\\website\\website-next\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\hugoe\\Desktop\\Projetos\\website\\website-next\\src\\app\\page.tsx"],m="/page",x={require:a,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9353:(e,t,a)=>{Promise.resolve().then(a.bind(a,2067)),Promise.resolve().then(a.bind(a,7988)),Promise.resolve().then(a.bind(a,730)),Promise.resolve().then(a.bind(a,7312))},2067:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=a(784);a(9885);var r=a(4884);let __WEBPACK_DEFAULT_EXPORT__=({icon:e,title:t,url:a})=>(0,s.jsxs)("div",{className:"flex justify-start m-1 cursor-pointer items-center   hover:bg-blue-600 dark:hover:bg-gray-700 hover:text-white   p-2 rounded-md    transition duration-500 ease-in-out   ",onClick:()=>window.open(a,"_blank")?.focus(),children:[s.jsx("span",{className:`${e} scale-150 text-xl`}),s.jsx(r.Z,{className:"   text-center text-xl font-mono font-bold   ml-4   ",text:t}),s.jsx("div",{className:"w-full flex items-center justify-end",children:s.jsx(r.Z,{className:"   text-lg font-mono font-bold   ml-8    md:block hidden   ",text:a})})]})},4884:(e,t,a)=>{"use strict";a.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var s=a(784);a(9885);let __WEBPACK_DEFAULT_EXPORT__=({text:e,className:t})=>s.jsx("span",{className:`text ${t}`,children:e})},7988:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>listBlogItems});var s=a(784);a(9885);let containerBox=({children:e,className:t,onClick:a,id:r})=>s.jsx("section",{className:`
    flex
    bg-gray-100
    bg-opacity-40
    dark:bg-gray-800
    border-2 border-gray-900 dark:border-gray-700
    rounded-md
    shadow-md
    w-full
    h-auto
    p-2
    my-2
    ${t}`,onClick:a,id:r,children:e});var r=a(4884);let convertDate=e=>{let t=new Date(e),a=t.getDate(),s=t.getMonth()+1,r=t.getFullYear();return`${a}/${s}/${r}`},blogItem=({title:e,content:t,author:a,createdAt:o,authorId:n,comments:i,id:l,updatedAt:d})=>(0,s.jsxs)(containerBox,{className:"   flex flex-col justify-start items-center max-h-90 min-h-90   cursor-pointer rounded-md bg-gray-50 dark:bg-gray-800   shadow-md drop-shadow-md shadow-gray-300 dark:shadow-gray-800   hover:shadow-xl hover:drop-shadow-xl hover:shadow-gray-600   dark:hover:shadow-gray-950 dark:hover:drop-shadow-gray-950   transition duration-500 ease-in-out m-2  mx-2 py-10   w-80   ",onClick:()=>{console.log("clicked")},children:[s.jsx("div",{className:" flex  flex-wrap justify-start   items-start text-center align-center overflow-hidden h-20",children:s.jsx(r.Z,{className:"text-center align-center dark:text-gray-100 text-gray-900   text-lg font-mono font-bold h-full w-full overflow-hidden flex",text:e})}),s.jsx("div",{className:" overflow-hidden my-2 h-20",children:s.jsx(r.Z,{className:"w-full h-full text-justify overflow-hidden   dark:text-gray-400 text-gray-800 xl:text-lg lg:text-base md:text-sm text-xs ",text:function(e,t,a){if(e.length<=a)return e;let s=e.substring(0,a),r=s.lastIndexOf(" ");return -1!==r&&(s=s.substring(0,r)),s+"..."}(t,0,126)})}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center text-center mt-8 h-20",children:[s.jsx(r.Z,{className:"text-center dark:text-gray-100 text-gray-900 text-base font-mono font-bold",text:`Posted by ${a.name} in ${convertDate(o)}`}),s.jsx(r.Z,{className:"text-center dark:text-gray-300 text-gray-700 text-sm font-mono font-bold",text:`(Last updated in ${convertDate(d)})`})]})]});var o=a(9626);let carouselContainer=({items:e})=>s.jsx(o.l,{className:"w-full h-full px-10",slideSize:"30%",slideGap:{base:"sm",sm:"sm"},controlSize:40,nextControlIcon:s.jsx("span",{className:"i-mdi-arrow-right-bold-circle scale-150 text-3xl    text-blue-600 dark:text-white"}),previousControlIcon:s.jsx("span",{className:"i-mdi-arrow-left-bold-circle scale-150 text-3xl   text-blue-600 dark:text-white"}),loop:!0,withIndicators:!0,children:e.map((e,t)=>s.jsx(o.l.Slide,{className:"h-96 ",children:e},t))}),n=[{id:1,email:"user1@example.com",name:"User One",isAdmin:!1,createdAt:"2023-10-01",updatedAt:"2023-10-01"},{id:2,email:"user2@example.com",name:"User Two",isAdmin:!1,createdAt:"2023-10-01",updatedAt:"2023-10-01"},{id:3,email:"user3@example.com",name:"User Three",isAdmin:!1,createdAt:"2023-10-01",updatedAt:"2023-10-01"},{id:4,email:"user4@example.com",name:"User Four",isAdmin:!1,createdAt:"2023-10-01",updatedAt:"2023-10-01"}],i=[{id:1,content:"This is a comment by User One. It is important to consider JavaScript's role in building modern web applications.",createdAt:"2023-10-01",updatedAt:"2023-10-01",authorId:1,postId:1},{id:2,content:"User Two shares insights about JavaScript's impact on web development. It has transformed the way we build interactive websites.",createdAt:"2023-10-01",updatedAt:"2023-10-01",authorId:2,postId:2},{id:3,content:"Comment by User Three. It is important to consider JavaScript's role in building modern web applications.",createdAt:"2023-10-01",updatedAt:"2023-10-01",authorId:3,postId:3},{id:4,content:"User Four discusses the significance of JavaScript in the era of Progressive Web Apps (PWAs). PWAs leverage JavaScript to create fast and responsive web applications that work offline. It's a game-changer for user experience. JavaScript is at the heart of this revolution.",createdAt:"2023-10-01",updatedAt:"2023-10-01",authorId:4,postId:4}],l=[{id:1,title:"The Role of JavaScript in Modern Web Development",content:"JavaScript is a versatile and powerful scripting language that can be used both on the client-side and server-side. It allows for dynamic and interactive web applications, making it a fundamental tool for web development. User One shares their perspective on the importance of JavaScript in modern web development.",createdAt:"2023-10-01",updatedAt:"2023-10-01",authorId:1,author:n[0],comments:[i[0]]},{id:2,title:"JavaScript: The Backbone of Web Development",content:"From a front-end developer's perspective, JavaScript is the core technology for creating interactive and responsive user interfaces. With frameworks like React, Angular, and Vue.js, JavaScript has transformed web development. User Two discusses the significance of JavaScript as the backbone of web development.",createdAt:"2023-10-01",updatedAt:"2023-10-01",authorId:2,author:n[1],comments:[i[1]]},{id:3,title:"The Evolution of JavaScript",content:"JavaScript has come a long way since its early days. It is now a versatile and indispensable language for both front-end and back-end development. With the introduction of ES6 and modern frameworks, JavaScript has made development faster and more efficient. User Three shares their perspective on the evolution of JavaScript in this post.",createdAt:"2023-10-01",updatedAt:"2023-10-01",authorId:3,author:n[2],comments:[i[2]]},{id:4,title:"JavaScript in the Era of Progressive Web Apps",content:"User Four discusses the significance of JavaScript in the era of Progressive Web Apps (PWAs). PWAs leverage JavaScript to create fast and responsive web applications that work offline. It's a game-changer for user experience. JavaScript is at the heart of this revolution.",createdAt:"2023-10-01",updatedAt:"2023-10-01",authorId:4,author:n[3],comments:[i[3]]},{id:5,title:"The Power of JavaScript Libraries",content:"JavaScript has a rich ecosystem of libraries and frameworks that simplify web development. User Five explores the power of JavaScript libraries like jQuery, lodash, and D3.js. These libraries enhance the development process and enable developers to create amazing web applications.",createdAt:"2023-10-01",updatedAt:"2023-10-01",authorId:1,author:n[0],comments:[i[0]]},{id:6,title:"Mastering Asynchronous Programming in JavaScript",content:"One of the key challenges in JavaScript development is dealing with asynchronous programming. User Six shares tips and techniques for mastering asynchronous operations with promises, async/await, and callbacks. With the right approach, handling async tasks becomes a breeze.",createdAt:"2023-10-01",updatedAt:"2023-10-01",authorId:2,author:n[1],comments:[i[1]]},{id:7,title:"Exploring JavaScript Frameworks",content:"User Seven takes a deep dive into popular JavaScript frameworks like React, Angular, and Vue.js. Each framework has its strengths and use cases. This post explores the pros and cons of these frameworks and helps you choose the right one for your project.",createdAt:"2023-10-01",updatedAt:"2023-10-01",authorId:3,author:n[2],comments:[i[2]]},{id:8,title:"JavaScript Best Practices",content:"User Eight compiles a list of best practices for writing clean and efficient JavaScript code. Topics include variable naming, code organization, error handling, and more. Following these best practices ensures that your JavaScript code is maintainable and scalable.",createdAt:"2023-10-01",updatedAt:"2023-10-01",authorId:4,author:n[3],comments:[i[3]]}],generateBlogItems=()=>l.map((e,t)=>s.jsx(blogItem,{title:e.title,content:e.content,author:e.author,createdAt:e.createdAt,authorId:e.authorId,updatedAt:e.updatedAt,comments:e.comments,id:e.id},t)),listBlogItems=()=>s.jsx(carouselContainer,{items:generateBlogItems()})},730:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>listReposGithub});var s=a(784),r=a(9885),o=a.n(r),n=a(4884);let customBit=({text:e,index:t,className:a,onClick:r,children:o})=>r?s.jsx("button",{className:`
      flex justify-center items-center text-center 
      rounded-md  bg-blue-600 p-1  m-1 shadow-md ${a}
      `,onClick:r,children:o||s.jsx(n.Z,{className:"w-full text-gray-100 text-base font-mono font-bold",text:e||""},t)},t):s.jsx("div",{className:`
      flex justify-center items-center text-center 
      rounded-md  bg-blue-600 p-1  m-1 shadow-md ${a}
      `,children:o||s.jsx(n.Z,{className:"w-full text-gray-100 text-base font-mono font-bold",text:e||""},t)},t),repositoryCard=({title:e,language:t,repoUrl:a})=>(0,s.jsxs)("div",{className:"flex flex-col h-64 w-30 p-2  mt-1 mb-2 mx-2   border-2 border-gray-200 dark:border-gray-700   rounded-md shadow-md drop-shadow-md shadow-gray-300    dark:shadow-gray-800 dark:drop-shadow-gray-800   hover:shadow-lg hover:drop-shadow-lg hover:shadow-gray-400   hover:scale-105 transition duration-500 ease-in-out   dark:hover:shadow-gray-950 dark:hover:drop-shadow-gray-950   overflow-hidden    ",children:[s.jsx("div",{className:"h-1/3 w-full flex items-center justify-center ",children:s.jsx("span",{className:"i-mdi-github scale-150 text-3xl"})}),s.jsx("div",{className:"h-1/3 flex items-center justify-center text-center w-full overflow-hidden",children:s.jsx(n.Z,{className:"inline-block w-20 text-lg",text:e})}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full h-1/3 py-2 px-4 mt-4",children:[s.jsx(customBit,{text:t||"Others",className:"w-full"}),s.jsx(customBit,{onClick:()=>{window.open(a,"_blank")?.focus()},text:"Open >",className:"   w-full shadow-sm drop-shadow-sm shadow-gray-200   dark:shadow-gray-800 dark:drop-shadow-gray-800   hover:shadow-md hover:drop-shadow-md hover:shadow-gray-500   hover:scale-105 transition duration-500 ease-in-out    dark:hover:shadow-gray-950 dark:hover:drop-shadow-gray-950   "})]})]}),getUserRepositories=async e=>{let t=await fetch(`https://api.github.com/users/${e}/repos?sort=updated&direction=desc`,{cache:"force-cache"}),a=await t.json();return a},seeMore=({onClick:e,text:t})=>s.jsx("div",{className:"flex justify-center items-center w-1/2 h-14 mt-4",children:s.jsx("button",{onClick:e,className:"   min-w-full h-5/6 bg-blue-600 rounded-md   shadow-md drop-shadow-md shadow-gray-300 dark:shadow-gray-800   dark:drop-shadow-gray-800 drop-shadow-gray-800   hover:shadow-lg hover:drop-shadow-lg hover:shadow-gray-600   dark:hover:shadow-gray-900 dark:hover:drop-shadow-gray-900   hover:scale-105 transition duration-500 ease-in-out   ",children:s.jsx(n.Z,{text:t||"See More",className:"text-2xl font-sans font-semibold text-white"})})}),collapseContainerBox=({className:e,onClick:t,renderFunction:a,isOpen:r})=>{let o=a();return(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"flex w-full flex-col items-center justify-center overflow-hidden",children:s.jsx("section",{className:`
          ${e}
          transition-all duration-500 ease-in-out
        `,children:o})}),s.jsx("div",{className:"flex w-full pb-6 flex-col items-center justify-center overflow-hidden",children:s.jsx(seeMore,{onClick:t,text:r?"See Less":"See More"})})]})},listReposGithub=()=>{let[e,t]=o().useState([]),[a,n]=o().useState(!1);return(0,r.useEffect)(()=>{(async()=>{let e=await getUserRepositories("hugocastrobr");t(e)})()},[]),s.jsx(collapseContainerBox,{className:`flex flex-wrap justify-evenly w-full py-4 ${a?"h-auto":"h-72"}`,renderFunction:()=>e?.map((e,t)=>s.jsx(repositoryCard,{title:e.name,language:e.language,repoUrl:e.html_url},t)),isOpen:a,onClick:()=>n(!a)})}},7312:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>sideMenu});var s=a(784),r=a(9885);let sideMenuSectionContainer=({className:e,children:t})=>s.jsx("section",{className:`
    flex flex-col w-full 
    ${e}`,children:t});var o=a(5333),n=a(4884);let AccordionTittle=e=>s.jsx(n.Z,{text:e,className:"font-mono font-bold sm:text-lg text-xs"}),accordionContainer=({children:e,value:t,duration:a,title:r})=>s.jsx(o.U,{transitionDuration:a||300,children:(0,s.jsxs)(o.U.Item,{value:t,children:[s.jsx(o.U.Control,{children:AccordionTittle(r)}),s.jsx(o.U.Panel,{children:e})]})});var i=a(2219),l=a(5346);let SetDarkMode=e=>l.q.SET_DARK_MODE(e),SetSideMenu=e=>l.q.SET_SIDE_MENU(e);var d=a(1072);let darkModeSwitch=()=>{let[e,t]=(0,r.useState)(!1),{theme:a,setTheme:o}=(0,d.F)(),{states:n,dispatch:l}=(0,i.Z)();return((0,r.useEffect)(()=>{t(!0)},[]),(0,r.useEffect)(()=>{"dark"===a?l(SetDarkMode(!0)):l(SetDarkMode(!1))},[l,a]),e)?(0,s.jsxs)("div",{className:"flex flex-col  h-4 justify-center items-center -ml-10 md:mt-0 mt-1 ",children:[s.jsx("label",{className:"dark:text-white text-gray-900 font-mono font-bold text-xs ",children:"Dark Mode:"}),(0,s.jsxs)("label",{className:"relative inline-flex items-center cursor-pointer    -ml-2 ",children:[s.jsx("input",{onChange:()=>{o("dark"===a?"light":"dark")},type:"checkbox",checked:"dark"===a,className:"sr-only peer"}),s.jsx("div",{className:"w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300   dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full   peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5   after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"})]})]}):null},sideSettingsContent=()=>s.jsx("div",{className:"p-4",children:s.jsx(darkModeSwitch,{})}),sideSettings=()=>s.jsx(accordionContainer,{title:"Settings",value:"settings",children:s.jsx(sideSettingsContent,{})}),sideMenuItems=()=>s.jsx("div",{className:"flex flex-col w-full h-full items-start justify-start",children:s.jsx(sideMenuSectionContainer,{children:s.jsx(sideSettings,{})})}),sideMenu=()=>{let{states:e,dispatch:t}=(0,i.Z)();return(0,s.jsxs)(s.Fragment,{children:[s.jsx("input",{type:"checkbox",id:"menu",onChange:e=>{t(SetSideMenu(e.target.checked))}}),s.jsx("label",{htmlFor:"menu",className:"icon dark:text-slate-100 text-slate-900",children:s.jsx("div",{className:"menu   dark:before:bg-white before:bg-gray-900   dark:after:bg-white after:bg-gray-900   dark:bg-white bg-gray-900   "})}),s.jsx("div",{className:"componentMenu",children:s.jsx("div",{className:"flex flex-col justify-start w-full h-full   items-center my-12 py-2 ",children:s.jsx(sideMenuItems,{})})})]})}},6154:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Home});var s=a(4656);a(3542);let customText=({text:e,className:t})=>s.jsx("span",{className:`text ${t}`,children:e});var r=a(6257);let customNavBar=()=>s.jsx("nav",{className:"   navbar navbar-expand-lg navbar-light bg-light border-b-2   h-4 w-screen flex justify-center items-center px-12 pb-2   border-gray-900 text ",children:s.jsx("div",{className:"",children:s.jsx(customText,{className:"navbar-brand  font-mono font-bold text-xs   dark:text-gray-300 text-gray-900 ",text:(0,r.$t)("navbar.brand")})})});var o=a(5153);let n=(0,o.createProxy)(String.raw`C:\Users\hugoe\Desktop\Projetos\website\website-next\src\components\organisms\sideMenu.tsx`),{__esModule:i,$$typeof:l}=n,d=n.default,customButton=({className:e,children:t,onClick:a})=>s.jsx("button",{className:`dark:bg-gray-900 bg-slate-100 dark:text-white
      text-gray-900 px-2 dark:hover:bg-gray-700 hover:bg-slate-300
      flex cursor-pointer ${e}`,onClick:a,children:t}),menuBtn=({text:e,arrow:t,className:a,isSelected:r,href:o})=>s.jsx("a",{href:`#${o}`,children:(0,s.jsxs)(customButton,{className:`flex items-center border-b-2 
          ${r?"border-blue-600":"border-gray-800"} 
          dark:hover:bg-gray-700 hover:bg-slate-300
          dark:hover:border-blue-600 hover:border-blue-600 
          transition duration-500 ease-in-out mb-2 
          dark:text-gray-100 text-gray-900
          dark:hover:text-gray-100 hover:text-blue-600
          bg-transparent
          ${a}`,children:[s.jsx(customText,{className:"font-mono font-bold sm:text-lg text-xs",text:e}),t&&s.jsx(customText,{className:"dark:text-gray-300 text-gray-900 font-mono font-bold ",text:">"})]})}),c=[{text:(0,r.$t)("home.About"),href:"aboutMe"},{text:(0,r.$t)("home.Experiences"),href:"experiences"},{text:(0,r.$t)("home.Projects"),href:"projects"},{text:(0,r.$t)("home.Contact"),href:"contact"}],GenerateButtons=()=>c.map((e,t)=>s.jsx(menuBtn,{text:e.text,className:"w-100 flex h-10 items-center justify-center ",href:e.href},t)),headerLinks=()=>s.jsx("div",{className:" w-4/6 h-full flex justify-end mx-2 ml-10 px-6 z-20  ",children:GenerateButtons()}),customHeader=()=>(0,s.jsxs)("header",{className:"flex h-10 justify-between items-center   border-b-2 border-gray-800 w-screen pl-12 dark:bg-gray-900 lg:pr-2 pr-0   bg-slate-100","z-10":!0,children:[(0,s.jsxs)("div",{className:"flex h-14 justify-between items-center  w-2/6 ",children:[s.jsx(d,{}),s.jsx(customText,{className:" font-mono font-bold text-base   dark:text-gray-300 text-gray-900 px-6 hidden sm:block",text:"Hugo Castro"})]}),s.jsx(headerLinks,{})]}),customFooter=()=>s.jsx("footer",{className:"flex justify-center h-8 items-center dark:bg-blue-900 bg-slate-100",children:s.jsx(customText,{className:"navbar-brand  font-mono font-bold text-xs   dark:text-gray-300 text-gray-900",text:`${(0,r.Z)("footer.copyright")} 
 v0.31 Unstable Version `})}),containerBox=({children:e,className:t,onClick:a,id:r})=>s.jsx("section",{className:`
    flex
    bg-gray-100
    bg-opacity-40
    dark:bg-gray-800
    border-2 border-gray-900 dark:border-gray-700
    rounded-md
    shadow-md
    w-full
    h-auto
    p-2
    my-2
    ${t}`,onClick:a,id:r,children:e}),aboutSection=()=>(0,s.jsxs)(containerBox,{id:"aboutMe",className:"flex flex-col justify-start items-start",children:[s.jsx(customText,{className:"text-center dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold",text:(0,r.$t)("home.aboutTitle")}),s.jsx(customText,{text:(0,r.$t)("home.aboutSubTitle"),className:"text-start dark:text-gray-300 text-gray-700 text-lg font-sans font-semibold"}),s.jsx(customText,{className:"text-start dark:text-gray-300 text-gray-700 text-lg font-sans font-normal",text:(0,r.$t)("home.aboutText")})]}),convertDate=e=>{let t=new Date(e),a=t.getDate(),s=t.getMonth()+1,r=t.getFullYear();return`${a}/${s}/${r}`},customBit=({text:e,index:t,className:a,onClick:r,children:o})=>r?s.jsx("button",{className:`
      flex justify-center items-center text-center 
      rounded-md  bg-blue-600 p-1  m-1 shadow-md ${a}
      `,onClick:r,children:o||s.jsx(customText,{className:"w-full text-gray-100 text-base font-mono font-bold",text:e||""},t)},t):s.jsx("div",{className:`
      flex justify-center items-center text-center 
      rounded-md  bg-blue-600 p-1  m-1 shadow-md ${a}
      `,children:o||s.jsx(customText,{className:"w-full text-gray-100 text-base font-mono font-bold",text:e||""},t)},t),customTextDataContainer=({children:e,className:t,title:a})=>(0,s.jsxs)("div",{className:"flex flex-col m-2",children:[s.jsx(customText,{className:"text-start dark:text-gray-100 text-gray-900 text-2xl font-mono font-bold",text:a}),e]}),m=[{startDate:new Date("2023-05-01"),endDate:new Date("2023-09-01"),title:"Back-end Engineer",description:"As a back-end engineer, I play a crucial role in a team dedicated to meeting our clients' critical demands. My responsibilities include addressing emergency fixes and implementing solutions swiftly, in line with a Kanban-based project management process. My key competencies are centered around vital technologies such as Node.js, Go, Python, and efficient management of PostgreSQL databases. I am committed to ensuring our clients receive effective and high-quality solutions in a timely manner.",company:"HARMO",skills:["DevOps","Node.js","Go","Python","PostgreSQL"]},{startDate:new Date("2023-02-01"),endDate:new Date("2023-04-01"),title:"Full Stack Software Engineer",description:"During my time as a full-stack software engineer in a temporary contract, I played an essential role in defining the architecture needed for the international expansion of the system. My responsibilities included managing critical tasks, establishing efficient workflows, and creating detailed documentation. My contribution played a vital role in the project's success, ensuring the successful implementation of the new architecture and readiness to meet the needs of global expansion.",company:"QRPOINT",skills:["Algorithms","NodeJs","Javascript","Typescript","Documentation"]},{startDate:new Date("2021-09-01"),endDate:new Date("2022-11-01"),title:"Junior Software Developer",description:"In the role of Junior Software Developer at LUBY SOFTWARE, I was responsible for the development and architecture of a wide range of systems, each with its own goals and challenges. I worked with various technologies to meet the specific needs of each project, ensuring an adaptable and innovative approach. Additionally, I maintained effective communication with multidisciplinary teams, where English played a fundamental role in our success, enabling smooth and productive collaboration. My ability to work flexibly and interdisciplinary was an asset in delivering high-quality solutions in a dynamic environment.",company:"LUBY SOFTWARE",skills:["JavaScript","TypeScript","Node.js","Angular","React.js"]},{startDate:new Date("2021-03-01"),endDate:new Date("2021-09-01"),title:"Software Developer Intern",description:"In my position as a Software Developer Intern at LUBY SOFTWARE, I played a crucial role in the development of various systems, employing a variety of technologies, including JavaScript, TypeScript, Node.js, Angular, React.js, React Native, AdonisJS, NestJS, GraphQL, RestAPI, MySQL, HTML5, and CSS3. My exposure to agile methodologies allowed me to collaborate efficiently in agile teams, delivering high-quality solutions within specified timelines. I also had the privilege of participating in various workshops to expand my knowledge and skills. I had the opportunity to share my knowledge by conducting an introduction to Svelte, demonstrating my commitment to continuous learning and knowledge sharing with the community. My diverse experience and enthusiasm for professional growth are essential elements of my journey as a software developer.",company:"LUBY SOFTWARE",skills:["TypeScript","Node.js","React Native","GraphQL","Python"]}],generateSkills=e=>e.map((e,t)=>s.jsx(customBit,{className:"w-auto h-10",text:e,index:t},t)),generateListItems=()=>m.map((e,t)=>(0,s.jsxs)(customTextDataContainer,{title:e.title,children:[(0,s.jsxs)("div",{children:[s.jsx(customText,{className:"text-justify dark:text-gray-300 text-gray-700 text-lg font-sans font-semibold italic",text:e.company}),s.jsx(customText,{className:"ml-4 text-justify dark:text-gray-300 text-gray-700 text-lg font-sans font-semibold italic",text:`${convertDate(e.startDate.toLocaleDateString())} - ${convertDate(e.endDate.toLocaleDateString())}`})]}),s.jsx(customText,{className:"text-justify dark:text-gray-300 text-gray-700 text-lg font-sans font-normal",text:e.description}),s.jsx("div",{className:"-ml-4",children:s.jsx("div",{className:"flex w-full justify-start mx-2 flex-wrap overflow-hidden mt-2 mb-6",children:generateSkills(e.skills)})})]},t)),experiencesSection=()=>(0,s.jsxs)(containerBox,{id:"experiences",className:"flex flex-col justify-start items-start",children:[s.jsx(customText,{className:"text-center dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold",text:"Experiences"}),s.jsx("div",{className:"flex flex-col",children:generateListItems()})]}),x=(0,o.createProxy)(String.raw`C:\Users\hugoe\Desktop\Projetos\website\website-next\src\components\molecules\listReposGithub.tsx`),{__esModule:h,$$typeof:u}=x,p=x.default,projectsSection=()=>(0,s.jsxs)(containerBox,{id:"projects",className:"flex flex-col justify-start items-start",children:[s.jsx(customText,{className:"text-center dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold",text:"Last Projects"}),s.jsx(p,{})]}),f=(0,o.createProxy)(String.raw`C:\Users\hugoe\Desktop\Projetos\website\website-next\src\components\molecules\listBlogItems.tsx`),{__esModule:g,$$typeof:b}=f,y=f.default,seeMore=({onClick:e,text:t})=>s.jsx("div",{className:"flex justify-center items-center w-1/2 h-14 mt-4",children:s.jsx("button",{onClick:e,className:"   min-w-full h-5/6 bg-blue-600 rounded-md   shadow-md drop-shadow-md shadow-gray-300 dark:shadow-gray-800   dark:drop-shadow-gray-800 drop-shadow-gray-800   hover:shadow-lg hover:drop-shadow-lg hover:shadow-gray-600   dark:hover:shadow-gray-900 dark:hover:drop-shadow-gray-900   hover:scale-105 transition duration-500 ease-in-out   ",children:s.jsx(customText,{text:t||"See More",className:"text-2xl font-sans font-semibold text-white"})})}),blogSection=()=>(0,s.jsxs)(containerBox,{id:"blog",className:"flex flex-col justify-center items-center",children:[s.jsx("div",{className:"w-full flex justify-start",children:s.jsx(customText,{className:"text-start dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold",text:"Blog"})}),s.jsx(y,{}),s.jsx(seeMore,{})]}),w=(0,o.createProxy)(String.raw`C:\Users\hugoe\Desktop\Projetos\website\website-next\src\components\atoms\contactItem.tsx`),{__esModule:v,$$typeof:j}=w,k=w.default,N=[{icon:"i-mdi-linkedin",title:"LinkedIn",url:"https://www.linkedin.com/in/hugocastrobr"},{title:"Email",icon:"i-mdi-email",url:"mailto:hugocastrohc@outlook.com"},{icon:"i-mdi-github",title:"Github",url:"https://github.com/HugoCastroBR"},{title:"Whatsapp",icon:"i-mdi-whatsapp",url:"https://api.whatsapp.com/send?phone=5532999523931"},{icon:"i-mdi-instagram",title:"Instagram",url:"https://www.instagram.com/_whereishugo_"}],contactList=()=>s.jsx("div",{className:"flex flex-col flex-wrap w-full h-full justify-evenly p-2 overflow-hidden",children:N.map((e,t)=>s.jsx(k,{icon:e.icon,title:e.title,url:e.url},t))}),contactSection=()=>(0,s.jsxs)(containerBox,{id:"contact",className:"flex flex-col justify-start items-start",children:[s.jsx(customText,{className:"text-center dark:text-gray-100 text-gray-900 text-3xl font-mono font-bold",text:"Contact"}),s.jsx(contactList,{})]}),homeContent=()=>(0,s.jsxs)("main",{className:"flex flex-col items-start justify-start     h-auto min-h-screen p-2",children:[s.jsx(aboutSection,{}),s.jsx(experiencesSection,{}),s.jsx(projectsSection,{}),s.jsx(blogSection,{}),s.jsx(contactSection,{})]});function Home(){return(0,s.jsxs)("div",{className:"   flex flex-col justify-between bg-gradient-to-t   dark:to-black to-slate-100   dark:from-blue-950 from-slate-300 w-full lg:pr-3 pr-0 ",children:[(0,s.jsxs)("div",{children:[s.jsx(customNavBar,{}),s.jsx(customHeader,{})]}),s.jsx(s.Fragment,{children:s.jsx(homeContent,{})}),s.jsx("div",{children:s.jsx(customFooter,{})})]})}}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[225,323,591,759,594],()=>__webpack_exec__(5619));module.exports=a})();