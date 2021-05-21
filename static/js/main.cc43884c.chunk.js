(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{10:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(6),i=n.n(s),r=(n(21),n(8)),o=n(3),l=(n(22),n(11)),j=n(12),d=n(16),u=n(15),b=n(13),m=n(1),O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"header",children:Object(m.jsx)("div",{className:"header-container",children:Object(m.jsxs)("p",{children:["Todo List ",Object(m.jsx)(b.a,{color:"white"})]})})})}}]),n}(a.a.Component),f=(n(24),function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("section",{children:Object(m.jsx)("div",{className:"title",children:e.title})})})}),h=(n(10),n(5));var x=function(e){var t=e.items.map((function(t){var n,c=new Date,a=new Date(t.date+"T23:59:00+07:00")-c,s=Math.floor(a/1e3),i=Math.floor(s/60),r=Math.floor(i/60);return n=r<0?"Deadline passed":r<24?"Due today":r<48?"Due tomorrow":Math.floor(r/24)+" days left",Object(m.jsxs)("div",{className:"list-container",children:[Object(m.jsxs)("div",{className:"list-title",children:[Object(m.jsx)("h4",{children:t.name}),Object(m.jsx)("h5",{style:r<24?{color:"red"}:r<48?{color:"orange"}:{color:"black"},children:n})]}),Object(m.jsxs)("div",{className:"icon-container",children:[Object(m.jsx)(h.a,{size:32,className:"mr-3 icon",onClick:function(){return e.addToCompleted(t.key)}}),Object(m.jsx)(h.b,{size:32,className:"icon",onClick:function(){return e.deleteItem(t.key)}})]})]})}));return Object(m.jsx)("div",{children:t})},p=n(14),v=function(e){var t=e.items.map((function(t){return Object(m.jsxs)("div",{className:"list-container",children:[Object(m.jsx)("div",{className:"list-title",children:Object(m.jsx)("h4",{children:t.name})}),Object(m.jsxs)("div",{className:"icon-container",children:[Object(m.jsx)(p.a,{size:32,className:"mr-3 icon",onClick:function(){return e.undoItem(t.key)}}),Object(m.jsx)(h.b,{className:"icon",size:32,onClick:function(){return e.deleteItem(t.key)}})]})]})}));return Object(m.jsx)("div",{children:t})},N=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1],d=Object(c.useState)(""),u=Object(o.a)(d,2),b=u[0],h=u[1],p=Object(c.useState)([]),N=Object(o.a)(p,2),y=N[0],k=N[1],g=Object(c.useState)([]),S=Object(o.a)(g,2),I=S[0],C=S[1],D=function(e){localStorage.setItem("react-todos-app-tasks",JSON.stringify(e))},T=function(e){localStorage.setItem("react-todos-app-completed",JSON.stringify(e))};Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-todos-app-tasks"));e&&k(e)}),[]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-todos-app-completed"));e&&C(e)}),[]);var w=function(e){var t=y.filter((function(t){return t.key!==e}));k(t),D(t)},J=function(e){var t=I.filter((function(t){return t.key!==e}));C(t),T(t)};y.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{}),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)("p",{children:"Organize your task better"}),Object(m.jsx)(f,{title:"New Task"}),Object(m.jsxs)("form",{action:"",id:"task-form",onSubmit:function(e){e.preventDefault();var t=[].concat(Object(r.a)(y),[{name:n,date:l,key:b}]);k(t),D(t),j(""),a(""),h("")},children:[Object(m.jsx)("label",{for:"name",id:"label-name",children:"Task Name"}),Object(m.jsx)("input",{type:"text",id:"name",name:"name",className:"form-control",placeholder:"New Activity",value:n,onChange:function(e){var t=document.getElementById("name").value;a(t),h(Date.now())},required:!0}),Object(m.jsx)("label",{for:"due-date",id:"label-date",children:"Due Date"}),Object(m.jsx)("input",{type:"date",id:"date",name:"date",className:"form-control",placeholder:"02/12/21",value:l,onChange:function(e){var t=document.getElementById("date").value;j(t)},required:!0}),Object(m.jsxs)("button",{type:"submit",value:"Submit",className:"submit-button",children:[Object(m.jsx)("span",{className:"add-icon",children:"+"}),Object(m.jsx)("span",{className:"add-text",children:"Add Task"})]})]}),Object(m.jsx)("hr",{}),Object(m.jsx)(f,{title:"Task List"}),Object(m.jsx)(x,{items:y,deleteItem:w,addToCompleted:function(e){var t=y.filter((function(t){return t.key===e}))[0];w(e);var n=[].concat(Object(r.a)(I),[t]);C(n),T(n)}}),Object(m.jsx)("hr",{}),Object(m.jsx)(f,{title:"Completed"}),Object(m.jsx)(v,{items:I,deleteItem:J,undoItem:function(e){var t=I.filter((function(t){return t.key===e}))[0],n=[].concat(Object(r.a)(y),[t]);k(n),J(e),T(n)}})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),y()}},[[25,1,2]]]);
//# sourceMappingURL=main.cc43884c.chunk.js.map