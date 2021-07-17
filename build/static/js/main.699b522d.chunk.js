(this.webpackJsonpinstapic=this.webpackJsonpinstapic||[]).push([[0],{16:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(0),r=n(3),c=n.n(r),s=n(7),i=n(57),o=n(5),u=n(27),l=n(28),d=(n(67),n(49)),p=n(37),j=["method","data","locale"],b=function(){function e(t){Object(u.a)(this,e),this.apiUrl=void 0,this.apiToken=void 0,this.options=void 0,this.apiUrl=t,this.apiToken="",this.options={}}return Object(l.a)(e,[{key:"setToken",value:function(e){this.apiToken=e,this.options.headers=Object(o.a)(Object(o.a)({},this.options.headers),{},{Authorization:"Bearer ".concat(e)})}},{key:"unsetToken",value:function(){this.options.headers=Object(o.a)(Object(o.a)({},this.options.headers),{},{Authorization:void 0})}},{key:"parseOptions",value:function(e){var t=e.method,n=void 0===t?"get":t,a=e.data,r=e.locale,c=Object(i.a)(e,j),s="multipart/form-data"===c.contentType,o=Object(p.merge)({body:a?JSON.stringify(a):void 0,method:Object(p.toUpper)(n),headers:{Accept:"application/json","Content-Type":"application/json","Accept-Language":r}},c);return s&&(o.body=a,o.headers=Object(p.omit)(o.headers,["Content-Type"])),o}},{key:"parseEndpoint",value:function(e,t){var n=0===e.indexOf("http")?e:"".concat(this.apiUrl).concat(e),a=t?"?".concat(Object(d.stringify)(t)):"";return"".concat(n).concat(a)}},{key:"convertToJson",value:function(e){try{return e.json()}catch(n){var t;throw console.log(n),t=n.message&&n.description?"".concat(n.message,", ").concat(n.description,"."):n.message?"".concat(n.message):"".concat(e.status," ").concat(e.statusText),new Error(t)}}},{key:"checkStatus",value:function(e){return new Promise((function(t,n){return e.ok?t(e):e.json().then((function(t){var a;a=t.message&&t.description?"".concat(t.message,", ").concat(t.description,"."):t.message?"".concat(t.message):"".concat(e.status," ").concat(e.statusText),t.message=a,n(t)})).catch((function(){var t=new Error("".concat(e.status," ").concat(e.statusText));n(t)}))}))}},{key:"request",value:function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.abrupt("return",fetch(t,Object(o.a)(Object(o.a)({},n),{},{credentials:"include"})).then(this.checkStatus).then(this.convertToJson));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(s.a)(c.a.mark((function e(t,n,a){var r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.parseEndpoint(t,n),s=this.parseOptions(Object(o.a)({method:"get"},a)),e.abrupt("return",this.request(r,s));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(s.a)(c.a.mark((function e(t,n,a){var r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.parseEndpoint(t),s=this.parseOptions(Object(o.a)({method:"post",data:n},a)),e.abrupt("return",this.request(r,s));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=Object(s.a)(c.a.mark((function e(t,n,a){var r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.parseEndpoint(t),s=this.parseOptions(Object(o.a)({method:"put",data:n},a)),e.abrupt("return",this.request(r,s));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"patch",value:function(){var e=Object(s.a)(c.a.mark((function e(t,n,a){var r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.parseEndpoint(t),s=this.parseOptions(Object(o.a)({method:"patch",data:n},a)),e.abrupt("return",this.request(r,s));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(s.a)(c.a.mark((function e(t,n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.parseEndpoint(t),r=this.parseOptions(Object(o.a)({method:"delete"},n)),e.abrupt("return",this.request(a,r));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"download",value:function(){var e=Object(s.a)(c.a.mark((function e(t,n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.parseEndpoint(t),window.open(a,"_blank"),r=this.parseOptions(Object(o.a)({method:"get"},n)),e.abrupt("return",this.request(a,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),h=n(1),m=new b("https://instapic-319612.df.r.appspot.com/api"),O=a.createContext({});t.b=function(e){var t=e.children;return Object(h.jsx)(O.Provider,{value:m,children:t})}},56:function(e,t,n){"use strict";(function(e){var a,r,c=n(3),s=n.n(c),i=n(7),o=n(13),u=n(8),l=n(0),d=n(9),p=n(16),j=n(1),b=d.a.div(a||(a=Object(u.a)(["\n  max-width: 800px;\n  max-height: 600px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4px;\n  background-color: snow;\n"]))),h=d.a.img(r||(r=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n  overflow: hidden;\n"])));t.a=function(t){var n=Object(l.useContext)(p.a),a=Object(l.useState)(),r=Object(o.a)(a,2),c=r[0],u=r[1],d=t.selectedImageId,m=Object(l.useCallback)(Object(i.a)(s.a.mark((function t(){var a,r,c,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.get("/image/".concat(d));case 3:return a=t.sent,r=a.data.imagefile.Body.data,c=e.from(r).toString("base64"),i=a.data.imagefile.ContentType,t.abrupt("return",u({b64:c,mimeType:i}));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",console.log(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),[n,d]);return Object(l.useEffect)((function(){m()}),[m]),Object(j.jsx)(b,{children:Object(j.jsx)("div",{children:c&&Object(j.jsx)(h,{alt:"",src:"data:".concat(c.mimeType,";base64,").concat(c.b64)})})})}}).call(this,n(86).Buffer)},78:function(e,t){},90:function(e,t,n){"use strict";n.r(t);var a,r,c,s,i,o,u,l,d,p,j,b,h,m,O,f,x,g,v=n(0),y=n.n(v),w=n(23),k=n.n(w),N=n(32),S=(n(65),n(18)),C=n(10),P=n(3),T=n.n(P),I=n(7),z=n(8),q=n(9),U=n(95),E=function(){return Object(N.b)()},G=N.c,F=n(16),L=n(1),B=q.a.nav(a||(a=Object(z.a)(["\n  z-index: 1;\n  border-bottom: solid;\n  border-bottom-width: 1px;\n  border-color: lightgray;\n"]))),H=q.a.div(r||(r=Object(z.a)(["\n  color: darkslategray;\n"]))),A=q.a.div(c||(c=Object(z.a)(["\n  color: steelblue;\n  font-style: bold;\n"]))),J=function(){var e=G((function(e){return e.auth})),t=E(),n=Object(v.useContext)(F.a),a=Object(v.useCallback)(Object(I.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.post("/auth/logout",{});case 3:t({type:"LOGOUT"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),[t]);return Object(L.jsx)(B,{className:"navbar navbar-dark navbar-expand-lg",children:Object(L.jsxs)("div",{className:"container",children:[Object(L.jsx)(S.b,{to:"/",className:"navbar-brand text",children:Object(L.jsx)(H,{children:"InstaPic"})}),Object(L.jsxs)("div",{className:"collpase navbar-collapse",children:[!e.authenticated&&Object(L.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(L.jsx)("li",{className:"navbar-item",children:Object(L.jsx)(S.b,{to:"/login",className:"nav-link",children:Object(L.jsx)(A,{children:"Log In"})})}),Object(L.jsx)("li",{className:"navbar-item",children:Object(L.jsx)(S.b,{to:"/signup",className:"nav-link",children:Object(L.jsx)(H,{children:"Sign Up"})})})]}),e.authenticated&&Object(L.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(L.jsx)(U.a,{id:"nav",title:Object(L.jsx)("span",{className:"text-primary",children:e.username}),className:"nav-item dropdown",children:Object(L.jsx)(U.a.Item,{onClick:function(){return a()},children:"Sign Out"})})})]})]})})},D=n(5),M=n(13),R=n(25),V=n(19),_=q.a.div(s||(s=Object(z.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),K=q.a.div(i||(i=Object(z.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 4rem;\n"]))),Q=q.a.div(o||(o=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),W=q.a.span(u||(u=Object(z.a)(["\n  font-size: 30px;\n  margin-bottom: 2rem;\n"]))),X=function(){var e=Object(R.a)(),t=e.register,n=e.handleSubmit,a=e.formState.errors,r=Object(v.useContext)(F.a),c=G((function(e){return e.auth})),s=E(),i=Object(v.useState)(!1),o=Object(M.a)(i,2),u=o[0],l=o[1],d=Object(v.useCallback)(function(){var e=Object(I.a)(T.a.mark((function e(t){var n,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.password,a=t.username,e.prev=1,l(!1),e.next=5,r.post("/auth/signup",{username:a,password:n});case 5:return e.next=7,r.post("/auth/login",{username:a,password:n});case 7:e.sent&&s({type:"LOGIN",payload:{username:a}}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),l(!0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),[s]);return Object(L.jsx)(K,{children:Object(L.jsxs)(Q,{children:[Object(L.jsx)(W,{children:"Sign Up"})," ",c.authenticated&&Object(L.jsx)(C.a,{to:"/"}),!c.authenticated&&Object(L.jsxs)("form",{onSubmit:n(d),children:[Object(L.jsx)(_,{children:Object(L.jsxs)("div",{children:[Object(L.jsxs)("div",{className:"form-group column",children:[Object(L.jsx)("label",{htmlFor:"username",children:"Username"}),Object(L.jsx)("input",Object(D.a)({className:"form-control",id:"username"},t("username",{required:"Username required"}))),a.username&&Object(L.jsx)("p",{style:{color:"red",fontSize:"14px"},className:"my-2",children:a.username.message})]}),Object(L.jsxs)("div",{className:"form-group column",children:[Object(L.jsx)("label",{htmlFor:"password",children:"Password"}),Object(L.jsx)("input",Object(D.a)({className:"form-control",id:"password"},t("password",{required:"Password required"}))),a.password&&Object(L.jsx)("p",{style:{color:"red",fontSize:"14px"},className:"my-2",children:a.password.message})]})]})}),Object(L.jsx)(_,{children:Object(L.jsx)(V.a,{type:"submit",size:"sm",children:"Sign Up"})}),u&&Object(L.jsx)("p",{style:{color:"red",fontSize:"14px"},className:"my-2",children:"Sign up failed, please try again"})]})]})})},Y=q.a.div(l||(l=Object(z.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),Z=q.a.div(d||(d=Object(z.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 4rem;\n"]))),$=q.a.div(p||(p=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),ee=q.a.span(j||(j=Object(z.a)(["\n  font-size: 30px;\n  margin-bottom: 2rem;\n"]))),te=function(){var e=Object(R.a)(),t=e.register,n=e.handleSubmit,a=e.formState.errors,r=Object(v.useContext)(F.a),c=G((function(e){return e.auth})),s=E(),i=Object(v.useState)(!1),o=Object(M.a)(i,2),u=o[0],l=o[1],d=Object(v.useCallback)(function(){var e=Object(I.a)(T.a.mark((function e(t){var n,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,e.prev=1,l(!1),e.next=5,r.post("/auth/login",{username:n,password:a});case 5:e.sent&&s({type:"LOGIN",payload:{username:n}}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),l(!0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),[s]);return Object(L.jsx)(Z,{children:Object(L.jsxs)($,{children:[Object(L.jsx)(ee,{children:"Log In"}),c.authenticated&&Object(L.jsx)(C.a,{to:"/"}),!c.authenticated&&Object(L.jsxs)("form",{onSubmit:n(d),children:[Object(L.jsx)(Y,{children:Object(L.jsxs)("div",{children:[Object(L.jsxs)("div",{className:"form-group column",children:[Object(L.jsx)("label",{htmlFor:"username",children:"Username"}),Object(L.jsx)("input",Object(D.a)({className:"form-control",id:"username"},t("username",{required:"Username required"}))),a.username&&Object(L.jsx)("p",{style:{color:"red",fontSize:"14px"},className:"my-2",children:a.username.message})]}),Object(L.jsxs)("div",{className:"form-group column",children:[Object(L.jsx)("label",{htmlFor:"password",children:"Password"}),Object(L.jsx)("input",Object(D.a)({className:"form-control",id:"password",type:"password"},t("password",{required:"Password required"}))),a.password&&Object(L.jsx)("p",{style:{color:"red",fontSize:"14px"},className:"my-2",children:a.password.message})]})]})}),Object(L.jsx)(Y,{children:Object(L.jsx)(V.a,{type:"submit",size:"sm",children:"Log In"})}),u&&Object(L.jsx)("p",{style:{color:"red",fontSize:"14px"},className:"my-2",children:"Log in failed, please try again"})]})]})})},ne=n(29),ae=q.a.thead(b||(b=Object(z.a)(["\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: deepskyblue;\n  color: white;\n"]))),re=q.a.td(h||(h=Object(z.a)(["\n  overflow: hidden;\n  border: solid 0.4px lightgrey;\n"]))),ce=q.a.tr(m||(m=Object(z.a)(["\n  min-width: 400px;\n  cursor: pointer;\n  :hover {\n    background-color: #ddd;\n  }\n  :nth-child(even) {\n    background-color: #f2f2f2;\n  }\n"]))),se=q.a.table(O||(O=Object(z.a)(["\n  border-spacing: 50px 0;\n  table-layout: fixed;\n  width: clamp(400px, 800px, 1200px);\n"]))),ie=function(e){var t=e.data,n=e.setSelectedImageId,a=y.a.useMemo((function(){return[{Header:"Name",accessor:"filename"},{Header:"Description",accessor:"description"},{Header:"Created By",accessor:"user.username"},{Header:"Created At",accessor:"createdAt"}]}),[]),r=Object(ne.useTable)({columns:a,data:t,initialState:{pageIndex:0}},ne.useGlobalFilter,ne.useFilters,ne.useSortBy,ne.usePagination),c=r.getTableProps,s=r.getTableBodyProps,i=r.headerGroups,o=r.page,u=r.prepareRow,l=r.canPreviousPage,d=r.canNextPage,p=r.pageOptions,j=r.pageCount,b=r.gotoPage,h=r.nextPage,m=r.previousPage,O=r.setPageSize,f=r.state,x=f.pageIndex,g=f.pageSize;return Object(L.jsxs)("div",{className:"py-4",children:[Object(L.jsxs)(se,Object(D.a)(Object(D.a)({},c()),{},{children:[Object(L.jsx)(ae,{children:i.map((function(e){return Object(L.jsx)("tr",Object(D.a)(Object(D.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(L.jsxs)("th",Object(D.a)(Object(D.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(L.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]}))}))}))}))}),Object(L.jsx)("tbody",Object(D.a)(Object(D.a)({},s()),{},{children:o.map((function(e){return u(e),Object(L.jsx)(ce,Object(D.a)(Object(D.a)({},e.getRowProps()),{},{onClick:function(){n(e.original.id)},children:e.cells.map((function(e){return Object(L.jsx)(re,Object(D.a)(Object(D.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(L.jsxs)("div",{className:"pagination p-2",children:[Object(L.jsx)("button",{type:"button",onClick:function(){return b(0)},disabled:!l,children:"<<"}),Object(L.jsx)("button",{type:"button",onClick:function(){return m()},disabled:!l,children:"<"}),Object(L.jsx)("button",{type:"button",onClick:function(){return h()},disabled:!d,children:">"}),Object(L.jsx)("button",{type:"button",onClick:function(){return b(j-1)},disabled:!d,children:">>"}),Object(L.jsxs)("span",{children:["Page",Object(L.jsxs)("strong",{children:[x+1," of ",p.length]})]}),Object(L.jsxs)("span",{children:["| Go to page:",Object(L.jsx)("input",{type:"number",defaultValue:x+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;b(t)},style:{width:"100px"}})]})," ",Object(L.jsx)("select",{value:g,onChange:function(e){O(Number(e.target.value))},children:[10,20,30,40,50].map((function(e){return Object(L.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})]})},oe=n(56),ue=q.a.div(f||(f=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),le=q.a.div(x||(x=Object(z.a)(["\n  max-width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),de=q.a.div(g||(g=Object(z.a)(["\n  max-width: 800px;\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n  margin-left: 0.4rem;\n  margin-right: 0.4rem;\n"]))),pe=function(){var e=Object(R.a)(),t=e.register,n=e.handleSubmit,a=Object(v.useContext)(F.a),r=G((function(e){return e.auth})),c=Object(v.useState)(),s=Object(M.a)(c,2),i=s[0],o=s[1],u=Object(v.useState)(!1),l=Object(M.a)(u,2),d=l[0],p=l[1],j=Object(v.useState)(1),b=Object(M.a)(j,2),h=b[0],m=b[1],O=Object(v.useState)(!1),f=Object(M.a)(O,2),x=f[0],g=f[1],y=Object(v.useCallback)(Object(I.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!1),e.next=4,a.get("/image");case 4:return t=e.sent,e.abrupt("return",o(t.data.images));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",console.log(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[a,d]);Object(v.useEffect)((function(){y()}),[y]);var w=function(){var e=Object(I.a)(T.a.mark((function e(t){var n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!1),(n=new FormData).append("file",t.file[0]),n.append("description",t.description),e.next=7,a.post("/image/upload",n,{contentType:"multipart/form-data"});case 7:r=e.sent,m(r.data.id),p(!0),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),g(!0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsx)(le,{children:Object(L.jsxs)(de,{children:[!r.authenticated&&Object(L.jsx)("span",{children:"Please sign up or log in to view images!"}),r.authenticated&&Object(L.jsxs)(ue,{children:[Object(L.jsxs)("form",{onSubmit:n(w),children:[Object(L.jsxs)(ue,{className:"form-group",children:[Object(L.jsx)("input",Object(D.a)({className:"form-control my-2",id:"file",type:"file",accept:"image/x-png,image/jpeg,image/gif"},t("file"))),Object(L.jsx)("input",Object(D.a)({className:"form-control my-2",id:"description",placeholder:"Description..."},t("description"))),Object(L.jsx)("div",{children:Object(L.jsx)(V.a,{type:"submit",size:"sm",className:"my-2",children:"Upload Image"})}),Object(L.jsx)("label",{htmlFor:"file",className:"mb-4",children:"File types accepted: PNG, JPEG and GIF"}),x&&Object(L.jsx)("p",{style:{color:"red",fontSize:"14px"},className:"my-2",children:"Image upload failed"})]}),Object(L.jsx)(oe.a,{selectedImageId:h})]}),i&&Object(L.jsx)(ie,{data:i,setSelectedImageId:m})]})]})})};var je=function(){return Object(L.jsxs)(S.a,{children:[Object(L.jsx)(J,{}),Object(L.jsx)(C.b,{path:"/",exact:!0,component:pe}),Object(L.jsx)(C.b,{path:"/login",exact:!0,component:te}),Object(L.jsx)(C.b,{path:"/signup",exact:!0,component:X})]})},be=n(36),he="LOGIN",me="LOGOUT",Oe={authenticated:!1,username:null},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:var n=t.payload.username;return{authenticated:!0,username:n};case me:return{authenticated:!1,username:null};default:return e}},xe=Object(be.a)({auth:fe}),ge=Object(be.b)(xe);k.a.render(Object(L.jsx)(y.a.StrictMode,{children:Object(L.jsx)(N.a,{store:ge,children:Object(L.jsx)(F.b,{children:Object(L.jsx)(je,{})})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.699b522d.chunk.js.map