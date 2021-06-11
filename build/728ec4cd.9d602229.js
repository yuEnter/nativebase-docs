(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{399:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(733)),c={id:"code",title:"Code"},i={unversionedId:"code",id:"code",isDocsHomePage:!1,title:"Code",description:"Code is a component used to display inline code. It is composed from the Box component with a mono font family (Courier on ios) for displaying code.",source:"@site/docs/code.md",slug:"/code",permalink:"/next/code",editUrl:"https://github.com/nativebase/website/tree/main/docs/code.md",version:"current"},l=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Colors",id:"colors",children:[]}]},{value:"Props",id:"props",children:[]}],d={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Code")," is a component used to display inline code. It is composed from the Box component with a mono font family (",Object(o.b)("em",{parentName:"p"},"Courier")," on ios) for displaying code."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Code } from 'native-base';\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Code Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Code%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20CodeComponent%20()%20%7B%0A%20%20return%20%3CCode%20colorScheme%3D%22success%22%3EHello%20World!%3C%2FCode%3E%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCodeComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"colors"},"Colors"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Code Example(Colors)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Code%2C%20Stack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20CodeComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CCode%3Elet%20direction%20%3D%20%22row%22%3B%3C%2FCode%3E%0A%20%20%20%20%20%20%3CCode%20colorScheme%3D%22danger%22%3Econsole.log('Hey%20there!')%3B%3C%2FCode%3E%0A%20%20%20%20%20%20%3CCode%20colorScheme%3D%22success%22%3Eyarn%20add%20native-base%3C%2FCode%3E%0A%20%20%20%20%20%20%3CCode%20colorScheme%3D%22dark%22%3EReact%20Native%3C%2FCode%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CCodeComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Code")," implements ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"/next/box"}),"Box")),", so all the Box Props can be passed to it."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"children"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ReactNode"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The content of the code."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}s.isMDXComponent=!0},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return a?r.a.createElement(u,i(i({ref:t},d),{},{components:a})):r.a.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);