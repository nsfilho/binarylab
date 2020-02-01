(this.webpackJsonpbinarylab=this.webpackJsonpbinarylab||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),m=t.n(r),c=t(2),s=(t(11),t(1)),i=t(3),u=function(e){var a=e.id,t=e.label,n=e.onChange,r=e.value,m=e.binary?{textAlign:"right",fontFamily:"Verdana, Geneva, sans-serif"}:{};return l.a.createElement("div",{className:"form-group col"},l.a.createElement("label",{htmlFor:a},t),l.a.createElement("input",{style:m,type:"text",className:"form-control",id:a,onChange:function(e){return n?n(e,a):void 0},value:r}))};u.defaultProps={binary:!1};var o=function(){var e=Object(n.useState)({num1:"0",num2:"1"}),a=Object(c.a)(e,2),t=a[0],r=a[1],m=Object(n.useState)({num1:"0",num2:"1"}),o=Object(c.a)(m,2),b=o[0],E=o[1],d=function(e){return function(a,n){a.preventDefault(),r(Object(i.a)({},t,Object(s.a)({},a.target.id,e?parseInt(a.target.value,2).toString(10):a.target.value))),E(Object(i.a)({},b,Object(s.a)({},a.target.id,e?a.target.value:parseInt(a.target.value,10).toString(2))))}};return l.a.createElement("form",null,l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{id:"num1",label:"Decimal Number 1:",onChange:d(!1),value:t.num1}),l.a.createElement(u,{id:"num1",binary:!0,label:"Binary Number 1:",onChange:d(!0),value:b.num1}),l.a.createElement(u,{id:"shift1",binary:!0,label:"1 << Num1",value:(1<<parseInt(t.num1,10)).toString(2)})),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{id:"num2",label:"Decimal Number 2:",onChange:d(!1),value:t.num2}),l.a.createElement(u,{id:"num2",binary:!0,label:"Binary Number 2:",onChange:d(!0),value:b.num2}),l.a.createElement(u,{id:"shift2",binary:!0,label:"1 << Num2",value:(1<<parseInt(t.num2,10)).toString(2)})),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{id:"ordec",label:"OR: Decimal",value:(parseInt(t.num1,10)|parseInt(t.num2,10)).toString(10)}),l.a.createElement(u,{id:"orbin",binary:!0,label:"OR: Binary",value:(parseInt(t.num1,10)|parseInt(t.num2,10)).toString(2)}),l.a.createElement(u,{id:"shiftorbin",binary:!0,label:"Num1 | (1 << Num2)",value:(parseInt(t.num1,10)|1<<parseInt(t.num2,10)).toString(2)})),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{id:"anddec",label:"AND: Decimal",value:(parseInt(t.num1,10)&parseInt(t.num2,10)).toString(10)}),l.a.createElement(u,{id:"andbin",binary:!0,label:"AND: Binary",value:(parseInt(t.num1,10)&parseInt(t.num2,10)).toString(2)}),l.a.createElement(u,{id:"shiftandbin",binary:!0,label:"Num1 & (1 << Num2)",value:(parseInt(t.num1,10)&1<<parseInt(t.num2,10)).toString(2)})),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{id:"xordec",label:"XOR: Decimal",value:(parseInt(t.num1,10)^parseInt(t.num2,10)).toString(10)}),l.a.createElement(u,{id:"xorbin",binary:!0,label:"XOR: Binary",value:(parseInt(t.num1,10)^parseInt(t.num2,10)).toString(2)}),l.a.createElement(u,{id:"shiftxorbin",binary:!0,label:"Num1 ^ (1 << Num2)",value:(parseInt(t.num1,10)^1<<parseInt(t.num2,10)).toString(2)})),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{id:"shift2by1dec",label:"Num2 << Num1: Decimal",value:(parseInt(t.num2,10)<<parseInt(t.num1,10)).toString(10)}),l.a.createElement(u,{id:"shift2by1bin",label:"Num2 << Num1: Binary",binary:!0,value:(parseInt(t.num2,10)<<parseInt(t.num1,10)).toString(2)})))},b=(t(12),[1,2,4,8,16,32,64,128]),E=function(e){var a=e.start,t=e.count,n=Math.ceil(t/5);return l.a.createElement("div",{className:"row",style:{marginTop:"20px"}},l.a.createElement(d,{start:a,count:n}),l.a.createElement(d,{start:a+n,count:n}),l.a.createElement(d,{start:a+2*n,count:n}),l.a.createElement(d,{start:a+3*n,count:n}),l.a.createElement(d,{start:a+4*n,count:n}))},d=function(e){for(var a=e.start,t=e.count,n=[],r=a;r<a+t;r++)n.push({x:r,num:r.toString(10),bin:r.toString(2)});return l.a.createElement("div",{className:"col"},l.a.createElement("table",{className:"table-striped myTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Decimal"),l.a.createElement("td",{className:"myTd"},"Binary"))),l.a.createElement("tbody",null,n.map((function(e){return l.a.createElement("tr",{key:e.num},l.a.createElement("td",{className:"myTd"},(a=e.x,b.includes(a)?l.a.createElement("b",null,a):a.toString())),l.a.createElement("td",{className:"myTd"},e.bin));var a})))))},p=function(){return l.a.createElement("div",{className:"card",style:{width:"18rem;",marginTop:"20px"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"C/C++ Macros"),l.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Quick Guide"),l.a.createElement("p",{className:"card-text",style:{paddingTop:"20px"}},l.a.createElement("pre",null,l.a.createElement("code",{className:"hljs lisp"},"#define bitset(",l.a.createElement("span",{className:"hljs-name"},"byte"),",nbit) ((",l.a.createElement("span",{className:"hljs-name"},"byte"),") |= (",l.a.createElement("span",{className:"hljs-number"},"1"),"<<(",l.a.createElement("span",{className:"hljs-name"},"nbit"),"))) ",l.a.createElement("br",null),"#define bitclear(",l.a.createElement("span",{className:"hljs-name"},"byte"),",nbit) ((",l.a.createElement("span",{className:"hljs-name"},"byte"),") ",l.a.createElement("span",{className:"hljs-symbol"},"&="),"~ (",l.a.createElement("span",{className:"hljs-number"},"1"),"<<(",l.a.createElement("span",{className:"hljs-name"},"nbit"),"))) ",l.a.createElement("br",null),"#define bitflip(",l.a.createElement("span",{className:"hljs-name"},"byte"),",nbit) ((",l.a.createElement("span",{className:"hljs-name"},"byte"),") ^= (",l.a.createElement("span",{className:"hljs-number"},"1"),"<<(",l.a.createElement("span",{className:"hljs-name"},"nbit"),"))) ",l.a.createElement("br",null),"#define bitcheck(",l.a.createElement("span",{className:"hljs-name"},"byte"),",nbit) ((",l.a.createElement("span",{className:"hljs-name"},"byte"),") & (",l.a.createElement("span",{className:"hljs-number"},"1"),"<<(",l.a.createElement("span",{className:"hljs-name"},"nbit"),")))"))," ")))},v=function(e){var a=e.setView;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{href:"#conversion",className:"navbar-brand",onClick:function(e){return a("conversion")}},"Binary Lab"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#conversion",onClick:function(e){return a("conversion")}},"Conversion",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#macro",onClick:function(e){return a("macro")}},"Macro")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#table",onClick:function(e){return a("table")}},"Table")))))},N=function(){var e=Object(n.useState)("conversion"),a=Object(c.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:"container"},l.a.createElement(v,{setView:r}),"conversion"===t&&l.a.createElement("div",{className:"row",style:{marginTop:"50px"}},l.a.createElement("div",{className:"col-2"}),l.a.createElement("div",{className:"col"},l.a.createElement(o,null)),l.a.createElement("div",{className:"col-2"})),"macro"===t&&l.a.createElement("div",{className:"row codeBlock"},l.a.createElement("div",{className:"col"}),l.a.createElement("div",{className:"col"},l.a.createElement(p,null)),l.a.createElement("div",{className:"col"})),"table"===t&&l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{start:0,count:80}),l.a.createElement(E,{start:80,count:80}),l.a.createElement(E,{start:160,count:95})))};m.a.render(l.a.createElement(N,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.3afa9c22.chunk.js.map