(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{443:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(733)),l=(a(745),{id:"select",title:"Select"}),i={unversionedId:"select",id:"select",isDocsHomePage:!1,title:"Select",description:"Select creates a dropdown list of items with the selected item in closed view.",source:"@site/docs/select.md",slug:"/select",permalink:"/next/select",editUrl:"https://github.com/nativebase/website/tree/main/docs/select.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Radio",permalink:"/next/radio"},next:{title:"Slider",permalink:"/next/slider"}},o=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"FormControlled",id:"formcontrolled",children:[]},{value:"Select",id:"select",children:[]}]},{value:"Props",id:"props",children:[{value:"Select.Item",id:"selectitem",children:[]}]},{value:"Props",id:"props-1",children:[]},{value:"Accessibility",id:"accessibility",children:[]}],d={toc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Select creates a dropdown list of items with the selected item in closed view."),Object(c.b)("h2",{id:"import"},"Import"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Select } from 'native-base';\n")),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"basic"},"Basic"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Select%2C%0A%20%20VStack%2C%0A%20%20CheckIcon%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20let%20%5Blanguage%2C%20setLanguage%5D%20%3D%20React.useState(%22%22)%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20alignItems%3D%22center%22%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CSelect%0A%20%20%20%20%20%20%20%20selectedValue%3D%7Blanguage%7D%0A%20%20%20%20%20%20%20%20minWidth%3D%7B200%7D%0A%20%20%20%20%20%20%20%20accessibilityLabel%3D%22Select%20your%20favorite%20programming%20language%22%0A%20%20%20%20%20%20%20%20placeholder%3D%22Select%20your%20favorite%20programming%20language%22%0A%20%20%20%20%20%20%20%20onValueChange%3D%7B(itemValue)%20%3D%3E%20setLanguage(itemValue)%7D%0A%20%20%20%20%20%20%20%20_selectedItem%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20bg%3A%20%22cyan.600%22%2C%0A%20%20%20%20%20%20%20%20%20%20endIcon%3A%20%3CCheckIcon%20size%3D%7B4%7D%20%2F%3E%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22JavaScript%22%20value%3D%22js%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22TypeScript%22%20value%3D%22ts%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22C%22%20value%3D%22c%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Python%22%20value%3D%22py%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Java%22%20value%3D%22java%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSelect%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"formcontrolled"},"FormControlled"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20FormControl%2C%0A%20%20Select%2C%0A%20%20VStack%2C%0A%20%20Text%2C%0A%20%20Container%2C%0A%20%20CheckIcon%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bvalue%2C%20setValue%5D%20%3D%20React.useState(%22js%22)%0A%20%20return%20(%0A%20%20%20%20%3CContainer%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20isInvalid%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3ESelect%20Item%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CSelect%0A%20%20%20%20%20%20%20%20%20%20selectedValue%3D%7Bvalue%7D%0A%20%20%20%20%20%20%20%20%20%20minWidth%3D%7B200%7D%0A%20%20%20%20%20%20%20%20%20%20accessibilityLabel%3D%22Select%20your%20favorite%20programming%20language%22%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22Select%20your%20favorite%20programming%20language%22%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7B(itemValue)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setValue(itemValue)%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20_selectedItem%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20bg%3A%20%22teal.600%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20endIcon%3A%20%3CCheckIcon%20size%3D%7B5%7D%20%2F%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20mt%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22JavaScript%22%20value%3D%22js%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22TypeScript%22%20value%3D%22ts%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22C%22%20value%3D%22c%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Python%22%20value%3D%22py%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CSelect.Item%20label%3D%22Java%22%20value%3D%22java%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FSelect%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%20mt%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20We'll%20keep%20this%20between%20us.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3ESomething%20is%20wrong.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%0A%20%20%20%20%20%20%3CVStack%20mt%3D%7B3%7D%20alignItems%3D%22baseline%22%3E%0A%20%20%20%20%20%20%20%20%3CText%20fontSize%3D%22md%22%3ESelected%20Values%3A%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20fontSize%3D%22md%22%20bold%3E%0A%20%20%20%20%20%20%20%20%20%20%7Bvalue%7D%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2FContainer%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"select"},"Select"),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("undefined",null,Object(c.b)("table",null,"\n  ",Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        placeholder\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The placeholder that describes the Select.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        placeholderTextColor\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The placeholder text color\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        _item\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"button#props"}),"IButtonProps"),"\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Item props passed here will be passed to each Select.Item component.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        _selectedItem\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"button#props"}),"IButtonProps"),"\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Item props passed here will be passed to the selected Select.Item component.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        selectedValue\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Currently selected value. Useful for controlling the Select state\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        defaultValue\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Default selected value.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        onValueChange\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        (itemValue: string) => void\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Callback to be invoked when Select value is changed\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        isDisabled\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Whether Select is disabled\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        dropdownIcon\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Element\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        If given, updates the dropdown Icon\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        dropdownOpenIcon\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Element\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        If given, updates the dropdown Icon when opened\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        dropdownCloseIcon\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Element\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        If given, updates the dropdown Icon when closed\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        variant\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},'\n        "rounded" | "outline" | "filled" | "underlined" | "unstyled"\n      '),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Variant of the Select\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        outline\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        _actionSheetContent\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"actionsheet#actionsheetcontent"}),"IActionsheetContentProps"),"\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        props to be passed to underlying ActionSheet.Content. Select uses ActionSheet underneath.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        wrapperRef\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Ref to be attached to the Select wrapper\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(c.b)("p",null,"Select implements ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(c.b)("h3",{id:"selectitem"},"Select.Item"),Object(c.b)("h2",{id:"props-1"},"Props"),Object(c.b)("undefined",null,Object(c.b)("table",null,"\n  ",Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        label\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The label which will be displayed.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        value\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The value to be used for the item. This is the value that will be returned on form submission.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(c.b)("p",null,"SelectItem implements ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"button#props"}),"Button"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"pressable#props"}),"Pressable"))),Object(c.b)("h2",{id:"accessibility"},"Accessibility"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"use ",Object(c.b)("inlineCode",{parentName:"li"},"native")," variant. Accessibility improvements on styled variant is in-progress.")))}s.isMDXComponent=!0},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),b=s(a),p=n,f=b["".concat(l,".").concat(p)]||b[p]||m[p]||c;return a?r.a.createElement(f,i(i({ref:t},d),{},{components:a})):r.a.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<c;d++)l[d]=a[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},739:function(e,t,a){"use strict";var n=a(0),r=a(743);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},740:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},741:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(11),l=a(740),i=a(8);const o=Object(n.createContext)({collectLink:()=>{}});var d=a(742),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:b,href:m,activeClassName:p,isActive:f,"data-noBrokenLinkCheck":u,autoAddBaseUrl:v=!0}=e,h=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(d.b)(),O=Object(n.useContext)(o),j=b||m,y=Object(l.a)(j),N=null==j?void 0:j.replace("pathname://",""),E=void 0!==N?(x=N,v&&(e=>e.startsWith("/"))(x)?g(x):x):void 0;var x;const C=Object(n.useRef)(!1),A=a?c.e:c.c,w=i.a.canUseIntersectionObserver;let D;Object(n.useEffect)((()=>(!w&&y&&window.docusaurus.prefetch(E),()=>{w&&D&&D.disconnect()})),[E,w,y]);const k=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,S=!E||!y||k;return E&&y&&!k&&!u&&O.collectLink(E),S?r.a.createElement("a",Object.assign({href:E},j&&!y&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(A,Object.assign({},h,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(E),C.current=!0)},innerRef:e=>{var t,a;w&&e&&y&&(t=e,a=()=>{window.docusaurus.prefetch(E)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),a())}))})),D.observe(t))},to:E||""},a&&{isActive:f,activeClassName:p}))}},742:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l}));var n=a(22),r=a(740);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const l=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+l:l}(t,e,a,n)}}function l(e,t={}){const{withBaseUrl:a}=c();return a(e,t)}},743:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext(void 0);t.a=r},745:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"g",(function(){return p})),a.d(t,"a",(function(){return f})),a.d(t,"e",(function(){return u})),a.d(t,"h",(function(){return h})),a.d(t,"f",(function(){return O})),a.d(t,"d",(function(){return j})),a.d(t,"i",(function(){return y}));var n=a(0),r=a.n(n);var c=({name:e,variants:t})=>(e=e.charAt(0).toUpperCase()+e.slice(1),r.a.createElement("div",null,r.a.createElement("h3",{style:{marginTop:"3rem"}},e),r.a.createElement("div",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"repeat( auto-fit, minmax(200px, 1fr) )",marginTop:"1rem"}},Object.keys(t).map(((a,n)=>r.a.createElement("div",{style:{display:"flex",flexDirection:"row"},key:`color-component-${a}-${n}`},r.a.createElement("div",{style:{width:"3rem",height:"3rem",backgroundColor:t[a],borderRadius:"0.375rem",marginRight:"0.5rem"}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{fontWeight:"bold"}},`${"Singletons"!==e?e:""} ${a.charAt(0).toUpperCase()+a.slice(1)}`),r.a.createElement("div",null,t[a]))))))));const l={singletons:{white:"#FFFFFF",black:"#000000",lightText:"#FFFFFF",darkText:"#27272a"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},lightBlue:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},warmGray:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},trueGray:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},gray:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},dark:{50:"#18181b",100:"#27272a",200:"#3f3f46",300:"#52525b",400:"#71717a",500:"#a1a1aa",600:"#d4d4d8",700:"#e4e4e7",800:"#f4f4f5",900:"#fafafa"},coolGray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},blueGray:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}};var i=({})=>r.a.createElement("div",null,Object.keys(l).map(((e,t)=>r.a.createElement(c,{variants:l[e],name:e,key:`space-block-${e}-${t}`}))));var o=({name:e,value:t})=>r.a.createElement("div",{style:{display:"flex",alignItems:"flex-start",paddingTop:10,paddingBottom:10}},r.a.createElement("dt",{style:{lineHeight:1,width:"48px",flexShrink:0}},e),r.a.createElement("dd",{style:{lineHeight:"xs"!==t?1:void 0,fontSize:t,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",marginLeft:"20px"}},"The quick brown fox jumped over the lazy dog."));const d={xs:12,sm:14,md:16,lg:18,xl:20,"2xl":24,"3xl":30,"4xl":36,"5xl":48,"6xl":64};var s=({})=>r.a.createElement("dl",{style:{backgroundColor:"#292d3e",borderRadius:4,padding:16,color:"white"}},Object.keys(d).map(((e,t)=>r.a.createElement(o,{name:e,value:d[e],key:`space-component-${e}-${t}`}))));var b=({name:e,value:t})=>r.a.createElement("tr",{style:{backgroundColor:"inherit"}},r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},e),r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},t),r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},r.a.createElement("div",{style:{height:16,width:t,backgroundColor:"#4B3AB2"}})));const m={1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",12:"48px",16:"64px",20:"80px",24:"96px",32:"128px",40:"160px",48:"192px",56:"224px",64:"256px",72:"288px",80:"320px",96:"384px"};var p=({})=>r.a.createElement("table",{style:{borderRadius:4,padding:16,borderWidth:0}},r.a.createElement("thead",null,r.a.createElement("tr",{style:{borderWidth:0}},r.a.createElement("th",{style:{borderWidth:0}}," Value "),r.a.createElement("th",{style:{borderWidth:0}}," Pixels "),r.a.createElement("th",{style:{borderWidth:0}},"Representation"))),r.a.createElement("tbody",null,Object.keys(m).map(((e,t)=>r.a.createElement(b,{name:e,value:m[e],key:`space-component-${e}-${t}`})))));var f=()=>r.a.createElement("div",{className:"label android"},"Android");function u(){return r.a.createElement("div",{className:"kichen-sink-iframe mx-auto"},r.a.createElement("svg",{class:"kichen-sink-iframe-notch",viewBox:"0 0 219 31"},r.a.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z","fill-rule":"evenodd"})),r.a.createElement("div",{className:"kichen-sink-iframe-safe-aria"}),r.a.createElement("iframe",{loading:"lazy",importance:"low",frameBorder:"0",className:"kichen-sink-iframe-iframe",src:"https://kitchen-sink.vercel.app/"}))}var v=a(741);function h(e){var t=e.title,a=e.description,n=e.className,c=void 0===n?"":n,l=e.url,i=e.imgSrc,o=e.imgStyle,d=e.titleClassName,s=void 0===d?"text-white":d,b=e.descriptionClassName,m=void 0===b?"text-gray-100":b;return r.a.createElement(v.a,{to:l,className:"relative overflow-hidden no-underline col col--5 rounded-md pt-6 px-4 shadow-2xl mx-2 mb-2 "+c},r.a.createElement("div",{className:"font-bold text-md mb-2 "+s},t),r.a.createElement("p",{className:" text-sm leading-5 "+m},a),r.a.createElement("div",{className:"absolute h-20 w-20",style:o||{right:-20,top:-10}},i&&r.a.createElement("img",{src:i})))}var g=a(739);function O(){var e=Object(g.a)().isDarkTheme,t=e?"":"text-white",a=e?"border-gray-100":"border-gray-200",n=e?"bg-gray-600":"bg-gray-500";return r.a.createElement("div",{className:"border-0 border-l-4 border-solid "+t+" "+a},r.a.createElement("div",{className:"flex items-center"},r.a.createElement("div",{className:"w-5 h-5 bg-indigo-500 rounded-full",style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 bg-indigo-500 shadow-xl rounded-md",style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"v3"),r.a.createElement("span",null,"NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms. NativeBase also supports web from version 2.4.1."))),r.a.createElement("div",{className:"flex items-center mt-8"},r.a.createElement("div",{className:"w-5 h-5 bg-gray-500 rounded-full",style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+n,style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"v2"),r.a.createElement("span",null,"NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms. NativeBase also supports web from version 2.4.1."))),r.a.createElement("div",{className:"flex items-center mt-8"},r.a.createElement("div",{className:"w-5 h-5 bg-gray-500 rounded-full",style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+n,style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"v1"),r.a.createElement("span",null,"NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms. NativeBase also supports web from version 2.4.1."))))}function j(){var e=Object(g.a)().isDarkTheme?"bg-gray-800":"bg-gray-600";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement(h,{title:"Install in Expo project",url:"install-expo",description:"Follow this guide to install NativeBase in your existing or new Expo project",className:"mt-2 "+e,imgSrc:"/img/expo.svg",imgStyle:{top:50,right:-310,width:400,height:400,opacity:.1}}),r.a.createElement(h,{title:"Install in React Native CLI project",url:"install-rn",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+e,imgSrc:"/img/react-native.svg",imgStyle:{bottom:-50,right:-40,height:140,width:140,opacity:.1}})),r.a.createElement("div",{className:"row mt-2"},r.a.createElement(h,{title:"Install in NextJS project",url:"install-next",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+e,imgSrc:"/img/next.svg",imgStyle:{bottom:-180,right:-90,height:260,width:260,opacity:.1}}),r.a.createElement(h,{title:"Install in Create React App project",url:"install-cra",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+e,imgSrc:"/img/cra.svg",imgStyle:{bottom:-62,right:-45,height:165,width:165,opacity:.1}})))}function y(){var e=Object(g.a)().isDarkTheme?"bg-gray-800":"bg-indigo-50";return n.createElement("div",{className:"tailwind"},n.createElement("div",{className:"p-8 text-center rounded-xl mb-8 "+e},n.createElement("img",{src:"/img/ang-card.png",style:{height:"200px"}})))}}}]);