(this.webpackJsonptry=this.webpackJsonptry||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(6),j=n.n(i),r=(n(12),n(2)),s=n(7),d=n(17),u=n(0),o=function(t){var e=t.add,n=Object(c.useState)(""),a=Object(r.a)(n,2),i=a[0],j=a[1];var o=Object(c.useState)(""),l=Object(r.a)(o,2),b=l[0],O=l[1];var x=Object(c.useState)(""),h=Object(r.a)(x,2),v=h[0],p=h[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"\u5099\u5fd8\u9304"}),Object(u.jsx)("p",{children:"\u8a18\u4e8b\uff1a"}),Object(u.jsx)("input",{type:"text",value:i,onChange:function(t){j(t.target.value)}}),Object(u.jsx)("p",{children:"\u65e5\u671f\uff1a"}),Object(u.jsx)("input",{type:"date",value:b,onChange:function(t){O(t.target.value)}}),Object(u.jsx)("p",{children:"\u6642\u9593\uff1a"}),Object(u.jsx)("input",{type:"time",value:v,onChange:function(t){p(t.target.value)}}),Object(u.jsx)("button",{className:"add",onClick:function(){e((function(t){return[{id:Object(d.a)(),note:i,date:b,time:v}].concat(Object(s.a)(t))}))},children:"\u65b0\u589e"})]})},l=function(t){var e=t.note,n=t.date,c=t.time,a=t.delDate,i=t.id;return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:e}),Object(u.jsx)("p",{children:"".concat(n," ").concat(c)})]}),Object(u.jsx)("button",{onClick:function(){a((function(t){return t.filter((function(t){return t.id!==i}))}))},className:"remove",children:"\u522a\u9664"})]})},b=function(t){var e=t.listData,n=t.delDate;return Object(u.jsx)("div",{className:"list",children:e.map((function(t){var e=t.note,c=t.date,a=t.time,i=t.id;return Object(u.jsx)(l,{id:i,note:e,date:c,time:a,delDate:n},i)}))})},O=(n(14),function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],a=e[1];return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(o,{add:a}),Object(u.jsx)(b,{listData:n,delDate:a})]})});j.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fe08a926.chunk.js.map