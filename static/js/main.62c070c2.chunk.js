(this["webpackJsonpgithub-users"]=this["webpackJsonpgithub-users"]||[]).push([[0],{100:function(e,t,r){},120:function(e,t,r){},121:function(e,t,r){"use strict";r.r(t);var s={};r.r(s),r.d(s,"SET_USERS_LIST",(function(){return B})),r.d(s,"SET_USER",(function(){return F})),r.d(s,"SET_LOADING",(function(){return J})),r.d(s,"SET_ERROR",(function(){return M}));var n={};r.r(n),r.d(n,"getUsersListApi",(function(){return z})),r.d(n,"getUserApi",(function(){return K}));var a={};r.r(a),r.d(a,"getUsersListAction",(function(){return Z})),r.d(a,"getUserAction",(function(){return $}));var c=r(2),i=r(0),u=r.n(i),o=r(8),l=r.n(o),j=r(28),d=r(19),b=(r(94),r(12)),p=r(42),O=(r(95),r(160)),f=r(161),h=r(151),m=r(159),v=r(162),_=(r(96),function(e){var t=e.user;return Object(c.jsxs)(d.b,{to:"/user/".concat(t.login),className:"row",children:[Object(c.jsx)("div",{className:"row__image",children:Object(c.jsx)("img",{src:t.avatar_url,alt:t.login})}),Object(c.jsx)("div",{className:"row__login",children:t.login}),Object(c.jsx)("a",{href:t.html_url,className:"row__link",target:"_blank",rel:"noreferrer",children:"Open profile on GitHub"})]})}),x=(r(98),function(){return Object(c.jsx)("div",{className:"lds-grid-container",children:Object(c.jsxs)("div",{className:"lds-grid",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})})}),g=u.a.memo((function(e){var t=e.users,r=e.loading,s=e.handlePage,n=e.perPage,a=e.since,i=e.handleSince;return Object(c.jsxs)("div",{className:"users-list",children:[Object(c.jsxs)("div",{className:"users-list__options",children:[Object(c.jsx)("div",{className:"users-list__options-select",children:Object(c.jsxs)(h.a,{variant:"outlined",children:[Object(c.jsx)(O.a,{children:"Profiles per page"}),Object(c.jsxs)(m.a,{value:n,onChange:s,label:"Profiles per page",children:[Object(c.jsx)(f.a,{value:5,children:"5 profiles"}),Object(c.jsx)(f.a,{value:25,children:"25 profiles"}),Object(c.jsx)(f.a,{value:50,children:"50 profiles"}),Object(c.jsx)(f.a,{value:100,children:"100 profiles"})]})]})}),Object(c.jsx)("div",{className:"users-list__options-input",children:Object(c.jsx)(v.a,{type:"number",value:a,onChange:i,label:"Start from ID",variant:"outlined"})})]}),r?Object(c.jsx)(x,{}):Object(c.jsx)("div",{className:"users-list__list",children:t.map((function(e){return Object(c.jsx)(_,{user:e},e.id)}))})]})})),S=(r(99),r(66)),E=r.n(S),N=function(e){return null!==e?e:"No info"},y=function(e){var t=e?parseInt(e):0;return Number.isNaN(t)?0:t},T=r(157),w=function(e){var t,r=e.user,s=e.loading;return Object(c.jsxs)("div",{className:"user",children:[s?Object(c.jsx)(x,{}):Object(c.jsxs)("div",{className:"user__content",children:[Object(c.jsx)("div",{className:"user__avatar",children:Object(c.jsx)("img",{src:r.avatar_url,alt:r.login})}),Object(c.jsxs)("div",{className:"user__params",children:[Object(c.jsxs)("div",{className:"user__params-item",children:["Name: ",N(r.name)]}),Object(c.jsxs)("div",{className:"user__params-item",children:["Profile created: ",(t=r.created_at,t?E()(t).format("DD/MM/YYYY"):"Invalid date")]}),Object(c.jsxs)("div",{className:"user__params-item",children:["Followers: ",N(r.followers)]}),Object(c.jsxs)("div",{className:"user__params-item",children:["Following: ",N(r.following)]}),Object(c.jsxs)("div",{className:"user__params-item",children:["Company: ",N(r.company)]}),Object(c.jsxs)("div",{className:"user__params-item",children:["Email: ",N(r.email)]}),Object(c.jsxs)("div",{className:"user__params-item",children:["Location: ",N(r.email)]}),Object(c.jsxs)("div",{className:"user__params-item",children:["Blog: ",N(r.blog)]}),Object(c.jsxs)("div",{className:"user__params-item",children:["Bio: ",N(r.bio)]})]})]}),Object(c.jsx)("div",{className:"user__buttons",children:Object(c.jsxs)(T.a,{variant:"contained",color:"primary",component:d.b,to:"/",children:[" ","Back to the list"]})})]})},R=r(158),I=(r(100),function(e){var t=e.children;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(R.a,{className:"layout__header",position:"static",children:Object(c.jsx)(d.b,{className:"layout__header-link",to:"/",children:"TestTask"})}),t]})}),L=r(67),U=r(68),k=r(73),A=r(72),P=function(e){Object(k.a)(r,e);var t=Object(A.a)(r);function r(e){var s;return Object(L.a)(this,r),(s=t.call(this,e)).state={hasError:!1},s}return Object(U.a)(r,[{key:"render",value:function(){return this.state.hasError?Object(c.jsx)("h1",{children:"Something went wrong, please try again later!"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),r}(u.a.Component),D=r(43),C=r.n(D),G=r(53),B="SET_USERS_LIST",F="SET_USER",J="SET_LOADING",M="SET_ERROR",Y={users:s},H=r(69),W=r.n(H).a.create({baseURL:"https://api.github.com",timeout:1e4,headers:{"Content-Type":"application/json",Accept:"application/json"}});W.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){return e&&e.data,Promise.reject(e.data)}));var q=W,z=function(e){var t=e.perPage,r=e.since;return q.get("/users?per_page=".concat(t,"&since=").concat(r))},K=function(e){var t=e.userId;return q.get("/users/".concat(t))},Q={users:n},V=function(e){return{type:Y.users.SET_LOADING,payload:e}},X=function(e){return{type:Y.users.SET_ERROR,payload:e}},Z=function(e){return function(){var t=Object(G.a)(C.a.mark((function t(r){var s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(V(!0)),t.next=4,Q.users.getUsersListApi(e);case 4:return s=t.sent,t.abrupt("return",r({type:Y.users.SET_USERS_LIST,payload:s}));case 8:t.prev=8,t.t0=t.catch(0),r(X(t.t0));case 11:return t.prev=11,r(V(!1)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()},$=function(e){return function(){var t=Object(G.a)(C.a.mark((function t(r){var s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(V(!0)),t.next=4,Q.users.getUserApi(e);case 4:return s=t.sent,t.abrupt("return",r({type:Y.users.SET_USER,payload:s}));case 8:t.prev=8,t.t0=t.catch(0),r(X(t.t0));case 11:return t.prev=11,r(V(!1)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()},ee={users:a},te=[{path:"/",component:function(){var e=Object(j.b)(),t=Object(i.useRef)(),r=Object(j.c)((function(e){return e.users})),s=r.usersList,n=r.loading,a=r.error,u=Object(i.useState)(y(localStorage.getItem("per_page"))||5),o=Object(p.a)(u,2),l=o[0],d=o[1],b=Object(i.useState)(y(localStorage.getItem("since"))||0),O=Object(p.a)(b,2),f=O[0],h=O[1],m=function(e,t){var r=Object(i.useState)(e),s=Object(p.a)(r,2),n=s[0],a=s[1];return Object(i.useEffect)((function(){var r=setTimeout((function(){a(e)}),t);return function(){clearTimeout(r)}}),[e,t]),n}(f,1e3);Object(i.useEffect)((function(){t.current?(e(ee.users.getUsersListAction({perPage:l,since:m})),localStorage.setItem("per_page",JSON.stringify(l)),localStorage.setItem("since",JSON.stringify(m))):(e(ee.users.getUsersListAction({perPage:l,since:f})),t.current=!0)}),[l,m]);var v=Object(i.useCallback)((function(e){var t=e.target.value;d(t)}),[]),_=Object(i.useCallback)((function(e){var t=parseInt(e.target.value);if(t<0)return h(0);h(t)}),[]);if(a)throw new Error("Network Error");return Object(c.jsx)(g,{users:s,loading:n,handlePage:v,perPage:l,since:f,handleSince:_})},title:"",isExact:!0},{path:"/user/:user_id",component:function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.users})),r=t.user,s=t.loading,n=t.error,a=Object(b.e)().user_id;if(Object(i.useEffect)((function(){e(ee.users.getUserAction({userId:a}))}),[a]),n)throw new Error("Network Error");return Object(c.jsx)(w,{user:r,loading:s})},title:"",isExact:!0}],re=function(){return te.map((function(e){return Object(c.jsx)(b.a,{exact:e.isExact,path:e.path,component:e.component},e.path)}))},se=r(25),ne=r(70),ae=r(71),ce=r(24),ie={usersList:[],user:{},loading:!1,error:null},ue=Object(se.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,r=t.type,s=t.payload;switch(r){case Y.users.SET_USERS_LIST:return Object(ce.a)(Object(ce.a)({},e),{},{usersList:s});case Y.users.SET_USER:return Object(ce.a)(Object(ce.a)({},e),{},{user:s});case Y.users.SET_LOADING:return Object(ce.a)(Object(ce.a)({},e),{},{loading:s});case Y.users.SET_ERROR:return Object(ce.a)(Object(ce.a)({},e),{},{error:s});default:return e}}}),oe=Object(se.createStore)(ue,Object(ae.composeWithDevTools)(Object(se.applyMiddleware)(ne.a))),le=(r(120),function(){return Object(c.jsx)(P,{children:Object(c.jsx)(j.a,{store:oe,children:Object(c.jsx)(d.a,{basename:"/tt",children:Object(c.jsx)(I,{children:Object(c.jsx)(re,{})})})})})});l.a.render(Object(c.jsx)(u.a.StrictMode,{children:Object(c.jsx)(le,{})}),document.getElementById("root"))},95:function(e,t,r){},96:function(e,t,r){},98:function(e,t,r){},99:function(e,t,r){}},[[121,1,2]]]);
//# sourceMappingURL=main.62c070c2.chunk.js.map