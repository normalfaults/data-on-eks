"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[2594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(d,".").concat(b)]||p[b]||l[b]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:1,sidebar_label:"Introduction"},o="Distributed Databases on EKS",i={unversionedId:"distributed-databases/index",id:"distributed-databases/index",title:"Distributed Databases on EKS",description:"Note: The blueprints for distributed databases and query engines are currently in the process of development.",source:"@site/docs/distributed-databases/index.md",sourceDirName:"distributed-databases",slug:"/distributed-databases/",permalink:"/data-on-eks/docs/distributed-databases/",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/distributed-databases/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Distributed Databases on EKS",permalink:"/data-on-eks/docs/category/distributed-databases-on-eks"},next:{title:"Troubleshooting",permalink:"/data-on-eks/docs/troubleshooting"}},d={},u=[],c={toc:u};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"distributed-databases-on-eks"},"Distributed Databases on EKS"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Note"),": The blueprints for distributed databases and query engines are currently in the process of development.\nDocumentation will be updated once a deployment example has been added to the repository.")),(0,r.kt)("p",null,"Running distributed databases and query engines on Kubernetes can provide a number of benefits for organizations looking to manage and process large amounts of data in real-time. Kubernetes provides features such as automatic scaling, rolling updates, and self-healing capabilities to ensure high availability and reliability of these systems. There are a number of popular distributed databases and query engines that have emerged to support this use case, including ",(0,r.kt)("strong",{parentName:"p"},"Apache Cassandra, Amazon DynamoDB, and Apache Presto"),". "),(0,r.kt)("p",null,"These systems make it easy to manage and process large amounts of data in real-time, and provide features such as scalability, high availability, and real-time data processing. By leveraging the power of Kubernetes, organizations can simplify and automate the deployment, scaling, and management of these complex systems, freeing up resources to focus on other areas of the business. With its growing ecosystem of tools and support for a wide range of use cases, Kubernetes is becoming an increasingly popular choice for running distributed databases and query engines in production."))}l.isMDXComponent=!0}}]);