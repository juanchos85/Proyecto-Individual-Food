(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){e.exports={Nav:"Nav_Nav__RXRyg",components:"Nav_components__3Djne",title:"Nav_title__3U048"}},20:function(e,t,a){e.exports={card:"Card_card__3uMqY",title:"Card_title__u4rYy",Link:"Card_Link__urlWg",close:"Card_close__tP1Wd",section:"Card_section__2svzz",image:"Card_image__33N-w"}},21:function(e,t,a){e.exports={cards:"Home_cards__2h-lf",main:"Home_main__1DDTC",home:"Home_home__B92Ty",paginate:"Home_paginate__2T1UH"}},22:function(e,t,a){e.exports={main:"CardDetail__main__N1rXE",title:"CardDetail__title__3Re5J",contenedor:"CardDetail__contenedor__2CebM",details:"CardDetail__details__p6Z2f"}},33:function(e,t,a){e.exports={Welcome:"Welcome_Welcome__2eEJF",text:"Welcome_text__3nttQ"}},35:function(e,t,a){e.exports={button:"Search_button__2SdNc",search:"Search_search__K7Al2"}},46:function(e,t,a){e.exports={body:"Paginate_body__39dB4"}},47:function(e,t,a){e.exports={main:"RecipesCreated_main__GInXq"}},56:function(e,t,a){},57:function(e,t,a){},7:function(e,t,a){e.exports={background:"CreateRecipe_background__TgwxE",short:"CreateRecipe_short__1acDQ",long:"CreateRecipe_long__-0277",placeHolder:"CreateRecipe_placeHolder__1sgh2",placeHolderP:"CreateRecipe_placeHolderP__2-42O",placeHolderDiet:"CreateRecipe_placeHolderDiet__3kiEO",button:"CreateRecipe_button__3PmQR"}},88:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(26),s=a.n(r),i=(a(55),a(56),a(57),a(11)),o=a(33),l=a.n(o),u=a(0);function d(){return Object(u.jsx)("div",{className:l.a.Welcome,children:Object(u.jsx)(i.b,{to:"/home",children:Object(u.jsx)("h1",{className:l.a.text,children:"Begin your own experience "})})})}var j=a(16),p=a.n(j);var b=function(){return Object(u.jsxs)("div",{className:p.a.Nav,children:[Object(u.jsx)("span",{className:p.a.components,children:Object(u.jsx)(i.b,{className:p.a.title,to:"/Home",children:"Home"})}),Object(u.jsx)("span",{className:p.a.components,children:Object(u.jsx)(i.b,{className:p.a.title,to:"/RecipesCreated",children:"Recipes Created"})}),Object(u.jsx)("span",{className:p.a.components,children:Object(u.jsx)(i.b,{className:p.a.title,to:"/CreateRecipe",children:"Create a Recipe"})})]})},O=a(5),h=a(17),m=a(4),f=a(6),v=a(14),x=a(19),g=a.n(x),y="GET_RECIPE",_="GET_DETAILS",C="CREATE_RECIPE",N="GET_DIETS",S="SHOW_RECIPES_CREATED",E="DIETS_FILTER",k="SCORE_ORDER_A",T="SCORE_ORDER_D",R="NAME_ORDER_A",D="NAME_ORDER_D",w="DELETE_RECIPE",H="DELETE_RECIPE_CREATED";function I(e){return function(){var t=Object(v.a)(Object(f.a)().mark((function t(a){var n,c;return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("http://localhost:3001/recipes?name=".concat(e));case 3:return n=t.sent,c=n.data,t.abrupt("return",a({type:y,payload:c}));case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",a({type:y,payload:t.t0}));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}function P(){return function(){var e=Object(v.a)(Object(f.a)().mark((function e(t){var a,n;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("http://localhost:3001/diets");case 3:return a=e.sent,n=a.data,e.abrupt("return",t({type:N,payload:n}));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",t({type:N,payload:e.t0}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}var F=function(e){return{type:w,payload:e}},q=function(e){return{type:H,payload:e}};var A=a(20),W=a.n(A);function B(e){var t=e.name,a=e.diets,n=e.image,c=e.id,r=e.cookingTime,s=e.servings,o=e.deleteRecipe,l=Object(m.b)();return Object(u.jsxs)("div",{className:W.a.card,children:[Object(u.jsx)("button",{className:W.a.close,onClick:function(){return l(o(c),q(c))},children:"X"}),Object(u.jsx)(i.b,{Style:"text-decoration:none",to:"/CardDetail/".concat(c),children:Object(u.jsx)("h4",{className:W.a.title,children:t})}),Object(u.jsx)("div",{className:W.a.image,children:Object(u.jsx)("img",{src:n,alt:""})}),Object(u.jsxs)("section",{className:W.a.section,children:[Object(u.jsx)("p",{children:"CookingTime "}),Object(u.jsxs)("span",{children:[r,"' "]}),Object(u.jsx)("p",{children:"Servings:"}),Object(u.jsx)("span",{children:s}),Object(u.jsx)("p",{children:"Diet Type "}),Object(u.jsx)("span",{children:a})]})]})}var L=a(46),M=a.n(L);function V(e){var t=e.paginado,a=e.setPaginado,c=Object(m.c)((function(e){return e.recipes})),r=(Object(m.b)(),t.length),s=Math.ceil(r/9),i=Object(n.useState)(1),o=Object(h.a)(i,2),l=o[0],d=o[1],j=function(e){e>0&&e<s+1&&(a(t.slice(9*(e-1),9*e)),d(e))};return Object(n.useEffect)((function(){j(1),I()}),[c]),Object(u.jsxs)("div",{className:M.a.body,children:[Object(u.jsx)("button",{className:"button ".concat(1===l),onClick:function(){return j(1)},children:"Begin"}),Object(u.jsx)("button",{hidden:1===l&&!0,className:"button ".concat(1===l),onClick:function(){return j(l-1)},children:"-"}),Object(u.jsx)("button",{children:l}),Object(u.jsx)("button",{hidden:l===s&&!0,className:"button ".concat(l===r),onClick:function(){return j(l+1)},children:"+"}),Object(u.jsx)("button",{className:"button ".concat(l===r),onClick:function(){return j(s)},children:"End"})]})}var G=a(21),J=a.n(G),U=a(35),X=a.n(U);function Q(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.get_recipe})),a=Object(n.useRef)(null);return Object(n.useEffect)((function(){e(I(" ")),e(P())}),[t]),Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(t){!function(t){t.preventDefault();var n=a.current.value;e(I(n))}(t)},children:[Object(u.jsx)("input",{ref:a,type:"text",placeholder:"Searching...",onChange:function(e){return function(e){e.preventDefault()}(e)},className:X.a.search}),Object(u.jsx)("input",{className:X.a.button,type:"submit",value:"Search"})]})})}function z(){var e=Object(m.c)((function(e){return e.recipes})),t=Object(m.b)(),a=Object(n.useState)(),c=Object(h.a)(a,2),r=c[0],s=c[1];Object(n.useEffect)((function(){0===e.length&&(t(P()),t(I()),s(),F())}),[t,e]),Object(n.useEffect)((function(){t(P()),t(I())}),[]);var i=Object(m.c)((function(e){return e.diets}));function o(e){var a;t((a=e.target.value,function(){var e=Object(v.a)(Object(f.a)().mark((function e(t){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",t({type:E,payload:a}));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",t({type:E,payload:e.t0}));case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}()))}function l(e){"ascendente"===e.target.value&&t((e.target.value,function(){var e=Object(v.a)(Object(f.a)().mark((function e(t){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",t({type:k}));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",t({type:k,payload:e.t0}));case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}())),"descendente"===e.target.value&&t((e.target.value,function(){var e=Object(v.a)(Object(f.a)().mark((function e(t){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",t({type:T}));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",t({type:T,payload:e.t0}));case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}()))}function d(e){"ascendente"===e.target.value&&t((e.target.value,function(){var e=Object(v.a)(Object(f.a)().mark((function e(t){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",t({type:R}));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",t({type:R,payload:e.t0}));case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}())),"descendente"===e.target.value&&t((e.target.value,function(){var e=Object(v.a)(Object(f.a)().mark((function e(t){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",t({type:D}));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",t({type:D,payload:e.t0}));case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}()))}return Object(u.jsxs)("div",{className:J.a.Home,children:[Object(u.jsxs)("div",{className:J.a.main,children:[Object(u.jsx)(V,{className:J.a.paginate,paginado:e,setPaginado:s}),Object(u.jsx)(Q,{className:J.a.search}),Object(u.jsxs)("span",{children:[Object(u.jsxs)("select",{Style:"background-color:#790c0c; border: black solid 2px;",defaultValue:"default",onChange:function(e){return o(e)},children:[Object(u.jsx)("option",{Style:"padding-bottom:4px",value:"default",children:"Diets Order"}),i&&i.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(u.jsxs)("select",{Style:"background-color:#790c0c; border: black solid 2px;",defaultValue:"default",onChange:function(e){return d(e)},children:[Object(u.jsx)("option",{defaultValue:"default",children:"A-Z"}),Object(u.jsx)("option",{value:"ascendente",children:"Up Ward"}),Object(u.jsx)("option",{value:"descendente",children:"Falling"})]}),Object(u.jsxs)("select",{Style:"background-color:#790c0c; border: black solid 2px;",defaultValue:"default",onChange:function(e){return l(e)},children:[Object(u.jsx)("option",{defaultValue:"default",children:"Score"}),Object(u.jsx)("option",{value:"ascendente",children:"Up Ward"}),Object(u.jsx)("option",{value:"descendente",children:"Falling"})]})]})]}),Object(u.jsx)("div",{className:J.a.cards,children:r&&r.map((function(e){return Object(u.jsx)(B,{id:e.id,deleteRecipe:F,name:e.name,idOriginal:e.idOriginal,image:e.image,servings:e.servings,cookingTime:e.cookingTime,diets:e.diets},e.id)}))})]})}var Y=a(22),Z=a.n(Y);function K(e){var t=Object(O.f)().id;console.log(t," soy id");var a=Object(m.b)();Object(n.useEffect)((function(){a(function(e){return console.log("get-details id "+e),function(){var t=Object(v.a)(Object(f.a)().mark((function t(a){var n,c;return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("http://localhost:3001/recipes/".concat(e));case 3:return n=t.sent,c=n.data,console.log("soy details "+c),t.abrupt("return",a({type:_,payload:c}));case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",a({type:_,payload:t.t0}));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[a,t]);var c=Object(m.c)((function(e){return e.details}));return console.log(c," soy details"),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:Z.a.title,children:c.name}),Object(u.jsxs)("div",{className:Z.a.main,children:[Object(u.jsxs)("div",{className:Z.a.contenedor,children:[Object(u.jsx)("img",{className:Z.a.img,src:c.image,alt:""}),Object(u.jsxs)("p",{children:["Diets Type: ",c.diets]}),Object(u.jsxs)("p",{children:["Health Score: ",c.healthScore]})]}),Object(u.jsxs)("div",{className:Z.a.details,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Cooking Steps: "}),Object(u.jsx)("p",{children:c.steps})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Summary: "}),Object(u.jsx)("p",{dangerouslySetInnerHTML:{__html:c.summary}})]})]})]})]})}var $=a(47),ee=a.n($);function te(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.created}));return Object(n.useEffect)((function(){e(function(){var e=Object(v.a)(Object(f.a)().mark((function e(t){var a,n;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("http://localhost:3001/recipesCreated");case 3:return a=e.sent,n=a.data,console.log(n,"soy data"),e.abrupt("return",t({type:S,payload:n}));case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",t({type:S,payload:e.t0}));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(u.jsx)("div",{className:ee.a.main,children:t?t.map((function(e){return Object(u.jsx)(B,{id:e.id,name:e.name,deleteRecipe:q,image:e.image,servings:e.servings,cookingTime:e.cookingTime,diets:e.diets},e.id)})):alert("todav\xeda no has creado una receta")})}var ae=a(15),ne=a(25),ce=a(2),re=a(7),se=a.n(re);function ie(e){var t={};return e.name||(t.name="Name required"),e.diets||(t.name="diets required"),e.dishType||(t.dishType="dishType required"),e.summary||(t.summary="summury is required"),e.steps||(t.steps="steps is required"),(0===e.healthScore||e.healthScore>100||e.healthScore<0)&&(t.healthScore="health Score required"),e.servings||(t.servings="Servings required"),e.cookingTime||(t.cookingTime="Cooking Time required"),0===!e.diets.length&&(t.diets="Diets required"),t}function oe(){var e=Object(m.c)((function(e){return e.diets})),t=Object(m.b)(),a=Object(n.useState)({}),c=Object(h.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)({name:"",summary:"",healthScore:0,steps:[],dishType:[],idOriginal:123,image:"",diets:[],servings:0,cookingTime:0}),o=Object(h.a)(i,2),l=o[0],d=o[1],j=function(e){d(Object(ce.a)(Object(ce.a)({},l),{},Object(ne.a)({},e.target.name,e.target.value))),s(ie(Object(ce.a)(Object(ce.a)({},l),{},Object(ne.a)({},e.target.name,e.target.value))))},p=function(e){var a;if(e.preventDefault(),Object.values(r).length>0)alert("Fill properly");else{if(l.name.length<3)return alert("Fill all the filds");t((a=l,function(){var e=Object(v.a)(Object(f.a)().mark((function e(t){var n,c;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("http://localhost:3001/recipes",a);case 3:return n=e.sent,c=n.data,e.abrupt("return",t({type:C,payload:c}));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",t({type:C,payload:e.t0}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),d({name:"",summary:"",healthScore:0,steps:[],dishType:[],idOriginal:123,image:"",diets:document.getElementById("firstSelect").getElementsByTagName("option")[0].selected="selected",servings:0,cookingTime:0}),alert("receta creada")}};return Object(n.useEffect)((function(){t(P())}),[t]),Object(u.jsxs)("form",{onSubmit:function(e){p(e)},className:se.a.background,children:[Object(u.jsxs)("div",{className:se.a.short,children:[Object(u.jsx)("label",{children:"Name: "}),Object(u.jsx)("input",{name:"name",className:se.a.placeHolder,type:"text",value:l.name,onChange:function(e){j(e)}}),r.name&&Object(u.jsx)("h6",{Style:"color:white",children:r.name}),Object(u.jsx)("label",{children:"Health Score: "}),Object(u.jsx)("input",{className:se.a.placeHolder,name:"healthScore",type:"number",value:l.healthScore,onChange:function(e){j(e)}}),Object(u.jsx)("label",{children:"Imagen: "}),Object(u.jsx)("input",{className:se.a.placeHolder,name:"image",type:"text",value:l.image,onChange:function(e){j(e)}}),Object(u.jsx)("label",{children:"Diet Type: "}),Object(u.jsxs)("select",{id:"firstSelect",className:se.a.placeHolderDiet,defaultValue:"default",onChange:function(e){return function(e){d(Object(ce.a)(Object(ce.a)({},l),{},{diets:[e.target.value]})),s(ie(Object(ce.a)(Object(ce.a)({},l),{},{diets:[].concat(Object(ae.a)(l.diets),[e.target.value])})))}(e)},children:[Object(u.jsx)("option",{className:se.a.placeHolderD,children:"Diet Types"}),e&&e.map((function(e){return Object(u.jsx)("option",{className:se.a.placeHolderP,value:e.name,children:e.name},e.id)}))]}),r.diets&&Object(u.jsx)("h6",{Style:"color:white",children:r.diets}),Object(u.jsx)("label",{htmlFor:"servings",children:"Servings: "}),Object(u.jsx)("input",{className:se.a.placeHolder,name:"servings",type:"number",value:l.servings,onChange:function(e){j(e)}}),r.servings&&Object(u.jsx)("h6",{Style:"color:white",children:r.servings}),Object(u.jsx)("label",{children:"Cooking Time: "}),Object(u.jsx)("input",{className:se.a.placeHolder,name:"cookingTime",type:"number",value:l.cookingTime,onChange:function(e){j(e)}}),r.cookingTime&&Object(u.jsx)("h6",{Style:"color:white",children:r.cookingTime})]}),Object(u.jsxs)("div",{className:se.a.long,children:[Object(u.jsx)("label",{children:"Summary: "}),Object(u.jsx)("textarea",{className:se.a.placeHolder,name:"summary",id:"long",type:"text",value:l.summary,onChange:function(e){j(e)}}),r.summary&&Object(u.jsx)("h6",{Style:"color:white",children:r.summary}),Object(u.jsx)("label",{Style:"padding-top:1rem",children:"Step By Step: "}),Object(u.jsx)("textarea",{className:se.a.placeHolder,id:"long",name:"steps",type:"text",value:l.steps,onChange:function(e){!function(e){d(Object(ce.a)(Object(ce.a)({},l),{},{steps:[e.target.value]})),s(ie(Object(ce.a)(Object(ce.a)({},l),{},{steps:[].concat(Object(ae.a)(l.steps),[e.target.value])})))}(e)}})]}),r.steps&&Object(u.jsx)("h6",{Style:"color:white",children:r.steps}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:se.a.button,type:"submit",children:"Create Recipe"})})]})}var le=function(){return Object(u.jsx)(i.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(O.c,{children:[Object(u.jsx)(O.a,{exact:!0,path:"/",component:d}),Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(O.a,{exact:!0,path:"/home",component:z}),Object(u.jsx)(O.a,{path:"/SearchBar",component:Q}),Object(u.jsx)(O.a,{path:"/Card",component:B}),Object(u.jsx)(O.a,{path:"/CardDetail/:id",component:K}),Object(u.jsx)(O.a,{path:"/CreateRecipe",component:oe}),Object(u.jsx)(O.a,{path:"/RecipesCreated",component:te})]})]})})})},ue=a(48),de=a.n(ue),je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},pe=a(28),be={recipes:[],details:[],diets:[],created:[],msg:{}};function Oe(e,t){return e.sort((function(e,a){return e[t]<a[t]?-1:e[t]>a[t]?1:0}))}var he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(ce.a)(Object(ce.a)({},e),{},{recipes:t.payload});case _:return Object(ce.a)(Object(ce.a)({},e),{},{details:t.payload});case C:return Object(ce.a)(Object(ce.a)({},e),{},{msg:"creada con exito!"});case N:return Object(ce.a)(Object(ce.a)({},e),{},{diets:t.payload});case S:return Object(ce.a)(Object(ce.a)({},e),{},{created:t.payload});case H:return Object(ce.a)(Object(ce.a)({},e),{},{created:e.created.filter((function(e){return e.id!==t.payload}))});case w:return Object(ce.a)(Object(ce.a)({},e),{},{recipes:e.recipes.filter((function(e){return e.id!==t.payload}))});case R:var a;return a=Oe(Object(ae.a)(e.recipes),"name"),Object(ce.a)(Object(ce.a)({},e),{},{recipes:a});case D:var n;return n=Oe(Object(ae.a)(e.recipes),"name").reverse(),Object(ce.a)(Object(ce.a)({},e),{},{recipes:n});case k:var c;return c=Oe(Object(ae.a)(e.recipes),"healthScore"),Object(ce.a)(Object(ce.a)({},e),{},{recipes:c});case T:var r;return r=Oe(Object(ae.a)(e.recipes),"healthScore").reverse(),Object(ce.a)(Object(ce.a)({},e),{},{recipes:r});case E:var s=e.recipes.filter((function(e){return e.diets.includes(t.payload)}));return Object(ce.a)(Object(ce.a)({},e),{},{recipes:s});default:return Object(ce.a)({},e)}},me=a(50),fe=a(49),ve=Object(pe.createStore)(he,Object(fe.composeWithDevTools)(Object(pe.applyMiddleware)(me.a)));de.a.config(),s.a.render(Object(u.jsxs)(i.a,{children:[Object(u.jsx)(m.a,{store:ve,children:Object(u.jsx)(le,{})}),","]}),document.getElementById("root")),je()}},[[88,1,2]]]);
//# sourceMappingURL=main.0fa87a88.chunk.js.map