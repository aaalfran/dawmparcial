(this["webpackJsonpbunhead-sweets"]=this["webpackJsonpbunhead-sweets"]||[]).push([[0],{102:function(e,t,s){},109:function(e,t,s){"use strict";s.r(t);var c=s(1),r=s.n(c),a=s(33),i=s.n(a),n=s(54),l=s(71),o=(s(92),s(29)),d=s(17),u="USER_HAS_LOGGED_IN",j=function(e){return{type:u,payload:e}},m="CATEGORY_FILTER_SELECTED",b="SORTER_FILTER_SELECTED",h="CATEGORY_FILTER_UNSELECTED",p="SORTER_FILTER_UNSELECTED",x=s(0),O=Object(o.b)((function(e){return{userIsLogin:e.appReducer.userIsLogin}}),(function(e){return{onUserLogin:function(t){return e(j(t))}}}))((function(e){var t=e.userIsLogin,s=e.onUserLogin,r=Object(c.useRef)(!0);return Object(c.useEffect)((function(){return function(){r.current=!1}}),[]),Object(x.jsx)("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"navbar-header",children:[Object(x.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1",children:[" ",Object(x.jsx)("span",{className:"sr-only",children:"Toggle navigation"})," ",Object(x.jsx)("span",{className:"icon-bar"})," ",Object(x.jsx)("span",{className:"icon-bar"})," ",Object(x.jsx)("span",{className:"icon-bar"})," "]}),Object(x.jsx)("a",{className:"navbar-brand",href:"#page-top",children:"Bunheads' Sweets"})," "]}),Object(x.jsx)("div",{className:"navbar-collapse collapse",id:"bs-example-navbar-collapse-1",children:Object(x.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/tienda",children:"Shop"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/noticias",children:"News"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/equipo",children:"Team"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/contactanos",children:"Contact"})}),t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/usuario",children:"Profile"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/carrito",children:"Cart"})})," ",Object(x.jsx)("li",{className:"sinEfecto",children:Object(x.jsx)(d.b,{to:"/",children:Object(x.jsx)("button",{id:"loginButton",onClick:function(){s(!1)},children:"Cerrar Sesi\xf3n"})})})]}):Object(x.jsxs)(x.Fragment,{children:[" ",Object(x.jsx)("li",{className:"sinEfecto",children:Object(x.jsx)(d.b,{to:"/login",children:Object(x.jsx)("button",{id:"loginButton",children:"Iniciar Sesi\xf3n"})})}),Object(x.jsx)("li",{className:"sinEfecto",children:Object(x.jsx)(d.b,{to:"/registro",children:Object(x.jsx)("button",{id:"signupButton",children:"Registrarse"})})})]})]})})]})})})),g=s(67),f=function(){return Object(x.jsxs)("footer",{children:[Object(x.jsx)("div",{className:"container text-center",children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"col-sm-12 col-md-3",children:[Object(x.jsx)("h4",{children:"Horarios"}),Object(x.jsx)("p",{children:"8:00 - 17:00"})]}),Object(x.jsxs)("div",{className:"col-sm-12 col-md-3",children:[Object(x.jsx)("h4",{children:"Tel\xe9fonos"}),Object(x.jsx)("p",{children:"00994512154"})]}),Object(x.jsxs)("div",{className:"col-sm-12 col-md-3",children:[Object(x.jsx)("h4",{children:"Direcci\xf3n"}),Object(x.jsx)("p",{children:"villa club"})]}),Object(x.jsxs)("div",{className:"col-sm-12 col-md-3",children:[Object(x.jsx)("h4",{children:"Redes sociales"}),Object(x.jsxs)("p",{id:"redes-footer",children:[Object(x.jsx)("a",{href:"https://www.instagram.com/bunheadsweets/",target:"blank",children:Object(x.jsx)(g.a,{})})," ",Object(x.jsx)("a",{href:"#s",children:Object(x.jsx)(g.b,{})})]})]})]})}),Object(x.jsx)("div",{className:"container text-center copyright",children:Object(x.jsxs)("p",{children:["\xa9 2021"," ",Object(x.jsx)("a",{href:"http://www.templatewire.com",rel:"nofollow",children:"Bunheads' Sweets"})]})})]})},v=s(73),y=s.n(v),N=(s(102),s(13)),w=s(81),C=function(){var e=Object(c.useRef)(),t=function(){var e=document.querySelector("form#contactForm button");e.innerHTML="Mensaje enviado exitosamente",e.disabled=!0,e.classList.add("button-disabled"),document.querySelector("#newMessage").addEventListener("click",(function(){e.classList.remove("button-disabled")}))};return Object(x.jsxs)("form",{id:"contactForm",ref:e,onSubmit:function(s){s.preventDefault(),w.a.sendForm("service_i28qate","template_6d2rjye",e.current,"user_w131cNcyyGRVHUJBOUUPK").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),t()},className:"row",children:[Object(x.jsxs)("div",{className:"col-12 col-md-6",children:[Object(x.jsx)("label",{htmlFor:"name",children:"Nombre"}),Object(x.jsx)("input",{id:"name",name:"name",type:"text",placeholder:"Nombre*",required:!0})]}),Object(x.jsxs)("div",{className:"col-12 col-md-6",children:[Object(x.jsx)("label",{htmlFor:"lastname",children:"Apellido"}),Object(x.jsx)("input",{id:"lastname",name:"lastname",type:"text",placeholder:"Apellido*",required:!0})]}),Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Correo electronico"}),Object(x.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"Correo electronico*",required:!0})]}),Object(x.jsxs)("div",{className:"col-12 col-md-6",children:[Object(x.jsx)("label",{htmlFor:"locationSector",children:"Sector"}),Object(x.jsxs)("select",{id:"locationSector",name:"locationSector",required:!0,children:[Object(x.jsx)("option",{value:"Florida norte",children:"Florida norte"}),Object(x.jsx)("option",{value:"Sauces 8",children:"Sauces 8"}),Object(x.jsx)("option",{value:"Sauces 9",children:"Sauces 9"}),Object(x.jsx)("option",{value:"Ceibos",children:"Ceibos"}),Object(x.jsx)("option",{value:"Samanes",children:"Samanes"}),Object(x.jsx)("option",{value:"Alborada",children:"Alborada"})]})]}),Object(x.jsxs)("div",{className:"col-12 col-md-6",children:[Object(x.jsx)("label",{htmlFor:"date",children:"Fecha de nacimiento"}),Object(x.jsx)("input",{id:"date",name:"date",type:"date",required:!0})]}),Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("label",{htmlFor:"message",children:"Detalles del pedido"}),Object(x.jsx)("textarea",{id:"message",name:"message",placeholder:"Detalles del pedido*",required:!0})]}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)("button",{type:"submit",value:"Send",children:"Enviar"})}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)("input",{type:"reset",value:"Enviar otro mensaje",id:"newMessage"})})]})},S=function(){return Object(x.jsx)("div",{id:"formSection",className:"container",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-12 col-md-6 form-container",children:Object(x.jsx)(C,{})}),Object(x.jsxs)("div",{className:"col-12 col-md-6 text-left text-container",children:[Object(x.jsx)("h1",{children:"\xbfDeseas algo personalizado?"}),Object(x.jsx)("p",{children:"Tambi\xe9n hacemos encargos totalmente personalizados !"}),Object(x.jsx)("p",{children:"En caso que desees este servicio llena el formulario con tu pedido."}),Object(x.jsx)("p",{children:"Pronto te responderemos !"})]})]})})},q=function(){return Object(x.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.160083614046!2d-79.90684746384919!3d-2.0398501320500584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d123e9d604725%3A0xa6884766a1dfc3a4!2sUrb.%20Villa%20Club!5e0!3m2!1sen!2sec!4v1638505280211!5m2!1sen!2sec",width:"800",height:"600",allowfullscreen:"",loading:"lazy",title:"ubicacion",id:"mapLocation"})},F=function(){return Object(x.jsxs)("div",{id:"mapSection",children:[Object(x.jsx)("h1",{children:"Visitanos en nuestro local"}),Object(x.jsx)(q,{})]})},L=function(){return Object(x.jsxs)("div",{id:"contactUs",children:[Object(x.jsx)(S,{}),Object(x.jsx)(F,{})]})},E=s(8),T=function(e){return Object(x.jsx)("div",{id:"about",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col-xs-12 col-md-6",children:[" ",Object(x.jsx)("img",{src:"img/logo.png",className:"img-responsive",alt:""})," "]}),Object(x.jsx)("div",{className:"col-xs-12 col-md-6",children:Object(x.jsxs)("div",{className:"about-text",children:[Object(x.jsx)("h2",{children:"About Us"}),Object(x.jsx)("p",{children:e.data?e.data.paragraph:"loading..."}),Object(x.jsx)("h3",{children:"Why Choose Us?"}),Object(x.jsxs)("div",{className:"list-style",children:[Object(x.jsx)("div",{className:"col-lg-6 col-sm-6 col-xs-12",children:Object(x.jsx)("ul",{children:e.data?e.data.Why.map((function(e,t){return Object(x.jsx)("li",{children:e},"".concat(e,"-").concat(t))})):"loading"})}),Object(x.jsx)("div",{className:"col-lg-6 col-sm-6 col-xs-12",children:Object(x.jsx)("ul",{children:e.data?e.data.Why2.map((function(e,t){return Object(x.jsxs)("li",{children:[" ",e]},"".concat(e,"-").concat(t))})):"loading"})})]})]})})]})})})};function I(){return Object(x.jsxs)("div",{id:"myCarousel",className:"carousel slide","data-ride":"carousel",children:[Object(x.jsxs)("ol",{className:"carousel-indicators",children:[Object(x.jsx)("li",{"data-target":"#myCarousel","data-slide-to":"0",className:"active"}),Object(x.jsx)("li",{"data-target":"#myCarousel","data-slide-to":"1"}),Object(x.jsx)("li",{"data-target":"#myCarousel","data-slide-to":"2"}),Object(x.jsx)("li",{"data-target":"#myCarousel","data-slide-to":"3"}),Object(x.jsx)("li",{"data-target":"#myCarousel","data-slide-to":"4"})]}),Object(x.jsxs)("div",{className:"carousel-inner",children:[Object(x.jsx)("div",{className:"item active",children:Object(x.jsx)("img",{src:"./img/products/cupcake.jpg",alt:"cupcakes"})}),Object(x.jsx)("div",{className:"item",children:Object(x.jsx)("img",{src:"./img/products/cupcake2.jpg",alt:"cupcakes2"})}),Object(x.jsx)("div",{className:"item",children:Object(x.jsx)("img",{src:"./img/products/cake.jpg",alt:"cake"})}),Object(x.jsx)("div",{className:"item",children:Object(x.jsx)("img",{src:"./img/products/cake2.jpg",alt:"cake2"})}),Object(x.jsx)("div",{className:"item",children:Object(x.jsx)("img",{src:"./img/products/cookies.jpg",alt:"cookies"})})]}),Object(x.jsxs)("a",{className:"left carousel-control",href:"#myCarousel","data-slide":"prev",children:[Object(x.jsx)("span",{className:"glyphicon glyphicon-chevron-left"}),Object(x.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(x.jsxs)("a",{className:"right carousel-control",href:"#myCarousel","data-slide":"next",children:[Object(x.jsx)("span",{className:"glyphicon glyphicon-chevron-right"}),Object(x.jsx)("span",{className:"sr-only",children:"Next"})]})]})}var k=function(e){return Object(x.jsx)("div",{id:"portfolio",className:"text-center",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"section-title",children:[Object(x.jsx)("h2",{children:"Gallery"}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec."})]}),Object(x.jsx)("div",{className:"ourWork",children:Object(x.jsx)(I,{})})]})})},D=s(74),U=function(){return Object(x.jsx)("div",{id:"intro",children:Object(x.jsx)("div",{className:"intro",children:Object(x.jsx)("div",{className:"overlay",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-md-8 intro-text",children:[Object(x.jsxs)("h1",{children:["We are a Landing Page",Object(x.jsx)("span",{})]}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."}),Object(x.jsx)("a",{href:"#about",className:"btn btn-custom btn-lg page-scroll",children:"Learn More"})," "]})})})})})})},P=s(140),R=s(138),A=s(141),V=s(136),B=s(137),W=s(135),M=s(143),_=s(142),G=[{label:"Select campaign settings",description:"For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more."},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:"Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues."}];function H(){var e=c.useState(0),t=Object(E.a)(e,2),s=t[0],r=t[1],a=function(){r((function(e){return e+1}))},i=function(){r((function(e){return e-1}))};return Object(x.jsx)("div",{className:"proceso-stepper",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)(P.a,{sx:{maxWidth:400},children:[Object(x.jsx)(R.a,{activeStep:s,orientation:"vertical",children:G.map((function(e,t){return Object(x.jsxs)(A.a,{children:[Object(x.jsx)(V.a,{optional:2===t?Object(x.jsx)(_.a,{variant:"caption",children:"Last step"}):null,children:e.label}),Object(x.jsxs)(B.a,{children:[Object(x.jsx)(_.a,{children:e.description}),Object(x.jsx)(P.a,{sx:{mb:2},children:Object(x.jsxs)("div",{children:[Object(x.jsx)(W.a,{variant:"contained",onClick:a,sx:{mt:1,mr:1},children:t===G.length-1?"Finish":"Continue"}),Object(x.jsx)(W.a,{disabled:0===t,onClick:i,sx:{mt:1,mr:1},children:"Back"})]})})]})]},e.label)}))}),s===G.length&&Object(x.jsxs)(M.a,{square:!0,elevation:0,sx:{p:3},children:[Object(x.jsx)(_.a,{children:"All steps completed - you're finished"}),Object(x.jsx)(W.a,{onClick:function(){r(0)},sx:{mt:1,mr:1},children:"Reset"})]})]})})})}var J,z,K=function(){var e=Object(c.useState)({}),t=Object(E.a)(e,2),s=t[0],r=t[1];return Object(c.useEffect)((function(){r(D)}),[]),Object(x.jsxs)("div",{id:"home",children:[Object(x.jsx)(U,{data:s.Header}),Object(x.jsx)(T,{data:s.About}),Object(x.jsx)(k,{data:s.Gallery}),Object(x.jsx)(H,{})]})},Y=function(e){var t=e.product||{name:"Cargando...",image:"Cargando...",category:"Cargando...",price:"Cargando...",description:"Cargando..."},s=t.name,c=t.image,r=t.category,a=t.price,i=t.description;return Object(x.jsxs)("li",{className:"product row",children:[Object(x.jsx)("div",{className:"col-12 col-md-3",children:Object(x.jsx)("img",{src:c,alt:s})}),Object(x.jsxs)("div",{className:"text-align-left col-12 col-md-9",children:[Object(x.jsx)("h2",{className:"h2",children:s}),Object(x.jsx)("p",{className:"badge bg-secondary",children:r}),Object(x.jsxs)("p",{className:"price",children:["$ ",a]}),Object(x.jsx)("p",{children:i})]}),Object(x.jsx)("hr",{})]})},Z=s(19),$=s(4),Q=function(e){var t=e.items,s=e.resourceName,c=e.itemComponent;return Object(x.jsx)(x.Fragment,{children:t.map((function(e,t){return Object(x.jsx)(c,Object(Z.a)({},Object($.a)({},s,e)),t)}))})},X=function(e){var t=e.productsList;return t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{className:"text-left",children:"Nuestros productos"}),Object(x.jsx)("ul",{children:Object(x.jsx)(Q,{items:t,resourceName:"product",itemComponent:Y})})]}):Object(x.jsx)("p",{children:"Cargando..."})},ee=s(36),te=s(64),se=te.a.div(J||(J=Object(ee.a)(["\n  display: flex;\n"]))),ce=te.a.div(z||(z=Object(ee.a)(["\n  flex: ",";\n"])),(function(e){return e.weight})),re=function(e){var t=e.children,s=e.leftWeight,c=void 0===s?1:s,r=e.rightWeight,a=void 0===r?1:r,i=Object(E.a)(t,2),n=i[0],l=i[1];return Object(x.jsxs)(se,{children:[Object(x.jsx)(ce,{weight:c,children:n}),Object(x.jsx)(ce,{weight:a,children:l})]})},ae=Object(o.b)((function(e){return{catFilters:e.appReducer.categoryFilters,sortFilters:e.appReducer.sorterFilters}}),(function(e){return{catFilterSelected:function(t){return e(function(e){return{type:m,payload:e}}(t))},sortFilterSelected:function(t){return e(function(e){return{type:b,payload:e}}(t))},catFilterUnselected:function(t){return e(function(e){return{type:h,payload:e}}(t))},sortFilterUnselected:function(t){return e(function(e){return{type:p,payload:e}}(t))}}}))((function(e){var t=e.label,s=e.filterType,r=e.catFilterSelected,a=e.sortFilterSelected,i=e.catFilterUnselected,n=e.sortFilterUnselected,l=Object(c.useReducer)((function(e){return!e}),!1),o=Object(E.a)(l,2),d=o[0],u=o[1];return Object(c.useEffect)((function(){d?(console.log("rendered onCheking"),"Category"===s?r(t):"Sorter"===s&&a(t)):(console.log("rendered onUncheking"),"Category"===s?i(t):"Sorter"===s&&n(t))}),[d]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("label",{htmlFor:t,className:"checkbox-label",children:[Object(x.jsx)("input",{type:"checkbox",id:t,className:"checkbox-input",value:t,onChange:u})," ",t]})})})),ie=function(){return Object(x.jsxs)("div",{className:"filters-container",children:[Object(x.jsx)("span",{className:"text-left",children:"Categorias"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(ae,{label:"Todo",filterType:"Category"})}),Object(x.jsx)("li",{children:Object(x.jsx)(ae,{label:"Tortas",filterType:"Category"})}),Object(x.jsx)("li",{children:Object(x.jsx)(ae,{label:"Galletas",filterType:"Category"})}),Object(x.jsx)("li",{children:Object(x.jsx)(ae,{label:"Cupcakes",filterType:"Category"})}),Object(x.jsx)("li",{children:Object(x.jsx)(ae,{label:"Panes",filterType:"Category"})})]}),Object(x.jsx)("span",{className:"text-left",children:"Ordenar por"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(ae,{label:"Categoria",filterType:"Sorter"})}),Object(x.jsx)("li",{children:Object(x.jsx)(ae,{label:"Precio mas alto",filterType:"Sorter"})}),Object(x.jsx)("li",{children:Object(x.jsx)(ae,{label:"Precio mas bajo",filterType:"Sorter"})}),Object(x.jsx)("li",{children:Object(x.jsx)(ae,{label:"A - Z",filterType:"Sorter"})}),Object(x.jsx)("li",{children:Object(x.jsx)(ae,{label:"Z - A",filterType:"Sorter"})})]})]})},ne=s(25),le=s.n(ne),oe=s(35),de=Object(o.b)((function(e){return{categoryFilters:e.appReducer.categoryFilters,sorterFilters:e.appReducer.sorterFilters}}))((function(e){var t=e.resourceUrl,s=e.resourceName,a=e.children,i=e.categoryFilters,n=e.sorterFilters,l=Object(c.useState)(null),o=Object(E.a)(l,2),d=o[0],u=o[1];return Object(c.useEffect)((function(){Object(oe.a)(le.a.mark((function e(){var s,c,r,a,l,o;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return s=e.sent,e.next=5,s.json();case 5:if(c=e.sent,console.log("Data"),console.log(c),r=[],console.log("CategoryFilters"),console.log(i),console.log("SorterFilters"),console.log(n),i.some((function(e){return"Todo"===e})))r=c;else for(a=function(e){console.log("entro al for"),r=c.filter((function(t){return t.category===i[e]})),console.log("despues del filter"),console.log(r)},l=0;l<i.length;l++)a(l);if(null!=n)for(o=0;o<n.length;o++)""===n[o]&&r.sort((function(e,t){return e.price-t.price})),""===n[o]&&r.sort((function(e,t){return t.price-e.price})),""===n[o]&&r.sort((function(e,t){var s=e.name.toUpperCase(),c=t.name.toUpperCase();return s===c?0:s>c?1:-1})),""===n[o]&&r.sort((function(e,t){var s=t.name.toUpperCase(),c=e.name.toUpperCase();return s===c?0:s>c?1:-1})),""===n[o]&&r.sort((function(e,t){var s=e.category.toUpperCase(),c=t.category.toUpperCase();return s===c?0:s>c?1:-1}));console.log("DataFinal"),console.log(r),u(r);case 18:case"end":return e.stop()}}),e)})))()}),[t,i,n]),Object(x.jsx)(x.Fragment,{children:r.a.Children.map(a,(function(e){return r.a.isValidElement(e)?r.a.cloneElement(e,Object($.a)({},s,d)):e}))})})),ue=function(){var e=Object(c.useRef)(!0);return Object(c.useEffect)((function(){return function(){e.current=!1}}),[]),Object(x.jsx)("div",{children:Object(x.jsx)("div",{id:"shop",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)(re,{leftWeight:1,rightWeight:3,children:[Object(x.jsx)(ie,{}),Object(x.jsx)(de,{resourceUrl:"/products.json",resourceName:"productsList",children:Object(x.jsx)(X,{})})]})})})})},je=function(e){var t=e.member;return Object(x.jsxs)("li",{className:"member row",children:[Object(x.jsx)("div",{className:"col-12 col-md-3",children:Object(x.jsx)("img",{src:t.image,alt:t.name,className:"img-fluid efectoCSS3"})}),Object(x.jsxs)("div",{className:"col-12 col-md-9",children:[Object(x.jsx)("h3",{children:t.name}),Object(x.jsx)("p",{children:t.carrier}),Object(x.jsx)("p",{children:t.description})]})]})},me=function(){var e=Object(c.useState)([]),t=Object(E.a)(e,2),s=t[0],r=t[1],a=Object(c.useCallback)((function(){fetch("./members.json").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);return Object(c.useEffect)((function(){a()}),[a]),Object(x.jsx)("ul",{children:Object(x.jsx)(Q,{items:s,resourceName:"member",itemComponent:je})})},be=function(){return Object(x.jsxs)("div",{className:"container",id:"ourTeam",children:[Object(x.jsx)("h1",{className:"text-center",children:"Nuestro equipo"}),Object(x.jsx)(me,{})]})},he=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Tu carrito de compra"}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, turpis nec ullamcorper rhoncus, massa nisl bibendum nunc, vitae laoreet purus nibh sed justo. Mauris at tristique nulla. Proin porta dapibus elementum. Donec faucibus auctor interdum. Duis interdum eros eu mi ultricies vehicula eget sed urna. Aliquam erat volutpat. Curabitur pellentesque erat vel nisi elementum ultrices. Vestibulum gravida tincidunt nulla sit amet sollicitudin. Vivamus velit lacus, pretium ut est quis, dignissim vulputate lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus turpis magna, porta sit amet porttitor at, pellentesque in ante. Vestibulum consequat, nisl non consequat pulvinar, risus turpis fringilla neque, quis cursus ex neque in ipsum. Ut nec odio ut mi scelerisque placerat vitae nec nisi. Suspendisse sed libero at lorem elementum posuere. Etiam ac purus condimentum, tristique eros non, mollis justo. Mauris vestibulum neque sem, a gravida dui tempor vitae. Nullam sit amet sapien quis nisl sodales consequat sit amet a orci. Vivamus nec nisl urna. Donec in velit vel lorem porttitor semper. Donec nec odio efficitur, blandit augue nec, fermentum lorem. Mauris ipsum enim, blandit eget posuere ac, varius sit amet nibh. Vestibulum tristique tincidunt diam, a ultrices ex malesuada venenatis. Donec nec massa massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce lacinia purus quis gravida pulvinar."})]})},pe=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Tu carrito de compra"}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, turpis nec ullamcorper rhoncus, massa nisl bibendum nunc, vitae laoreet purus nibh sed justo. Mauris at tristique nulla. Proin porta dapibus elementum. Donec faucibus auctor interdum. Duis interdum eros eu mi ultricies vehicula eget sed urna. Aliquam erat volutpat. Curabitur pellentesque erat vel nisi elementum ultrices. Vestibulum gravida tincidunt nulla sit amet sollicitudin. Vivamus velit lacus, pretium ut est quis, dignissim vulputate lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus turpis magna, porta sit amet porttitor at, pellentesque in ante. Vestibulum consequat, nisl non consequat pulvinar, risus turpis fringilla neque, quis cursus ex neque in ipsum. Ut nec odio ut mi scelerisque placerat vitae nec nisi. Suspendisse sed libero at lorem elementum posuere. Etiam ac purus condimentum, tristique eros non, mollis justo. Mauris vestibulum neque sem, a gravida dui tempor vitae. Nullam sit amet sapien quis nisl sodales consequat sit amet a orci. Vivamus nec nisl urna. Donec in velit vel lorem porttitor semper. Donec nec odio efficitur, blandit augue nec, fermentum lorem. Mauris ipsum enim, blandit eget posuere ac, varius sit amet nibh. Vestibulum tristique tincidunt diam, a ultrices ex malesuada venenatis. Donec nec massa massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce lacinia purus quis gravida pulvinar."})]})},xe=Object(o.b)((function(e){return{userIsLogin:e.userIsLogin}}),(function(e){return{onUserLogin:function(t){return e(j(t))}}}))((function(e){var t=e.onUserLogin,s=Object(c.useState)(null),r=Object(E.a)(s,2),a=r[0],i=r[1],n=Object(c.useState)(!1),l=Object(E.a)(n,2),o=l[0],d=l[1],u=Object(c.useState)(!1),j=Object(E.a)(u,2),m=j[0],b=j[1],h=Object(N.f)(),p=function(){var e=Object(oe.a)(le.a.mark((function e(s){var c,r,a,n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),c={username:document.querySelector("#email").value,password:document.querySelector("#password").value},e.next=4,fetch("/users.json");case 4:return r=e.sent,e.next=7,r.json();case 7:for(a=e.sent,n=0;n<a.length;n++)a[n].email===c.username&&a[n].password===c.password?(t(!0),console.log(t),h.push("/")):a[n].email!==c.username?i({message:"No user found"}):a[n].password!==c.password&&i({message:"Password does not match"});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=Object(c.useRef)(!0);return Object(c.useEffect)((function(){return function(){O.current=!1}}),[]),Object(c.useEffect)((function(){a&&"Password does not match"===a.message?b(!0):a&&"No user found"===a.message&&d(!0)}),[a]),Object(x.jsxs)("form",{id:"loginForm",onSubmit:p,className:"row",children:[Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Correo electr\xf3nico"}),Object(x.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"Correo electr\xf3nico*",required:!0}),o?Object(x.jsx)("p",{className:"warningForm",children:"Usuario no encontrado"}):""]}),Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a"}),Object(x.jsx)("input",{id:"password",name:"password",type:"password",placeholder:"Contrase\xf1a*",required:!0}),m?Object(x.jsx)("p",{className:"warningForm",children:"Contrase\xf1a incorrecta"}):""]}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)("button",{type:"submit",children:"Iniciar Sesi\xf3n"})})]})})),Oe=function(){return Object(x.jsx)("div",{id:"login-container",className:"container",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Inicia Sesi\xf3n"}),Object(x.jsx)(xe,{})]})})},ge=function(){var e=Object(c.useState)(null),t=Object(E.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(E.a)(a,2),n=i[0],l=i[1],o=function(){var e=Object(oe.a)(le.a.mark((function e(t){var s,c,a;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={firstname:document.querySelector("#firstname").value,lastname:document.querySelector("#lastname").value,address:document.querySelector("#address").value,email:document.querySelector("#email").value,password:document.querySelector("#password").value,cart:[]},e.next=4,fetch("/users.json");case 4:return c=e.sent,e.next=7,c.json();case 7:(a=e.sent).some((function(e){return e===s}))?r({message:"An error ocurred"}):(a.push(s),r({message:"User Added Successfully!"}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s&&"User Added Successfully!"===s.message?(l(!0),console.log(s.message)):s&&"An error ocurred"===s.message&&console.log(s.message)}),[s]),n?Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Te has registrado con exito!"}),Object(x.jsx)(d.b,{to:"/login",children:Object(x.jsx)("button",{id:"loginButton",children:"Iniciar Sesi\xf3n"})})]}):Object(x.jsxs)("form",{id:"registrationForm",onSubmit:o,className:"row",children:[Object(x.jsxs)("div",{className:"col-12 col-md-6",children:[Object(x.jsx)("label",{htmlFor:"firstname",children:"Nombre"}),Object(x.jsx)("input",{id:"firstname",name:"firstname",type:"text",placeholder:"Nombre*",required:!0})]}),Object(x.jsxs)("div",{className:"col-12 col-md-6",children:[Object(x.jsx)("label",{htmlFor:"lastname",children:"Apellido"}),Object(x.jsx)("input",{id:"lastname",name:"lastname",type:"text",placeholder:"Apellido*",required:!0})]}),Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("label",{htmlFor:"address",children:"Direcci\xf3n"}),Object(x.jsx)("input",{id:"address",name:"address",type:"text",placeholder:"Direcci\xf3n*",required:!0})]}),Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Correo electr\xf3nico"}),Object(x.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"Correo electr\xf3nico*",required:!0})]}),Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a"}),Object(x.jsx)("input",{id:"password",name:"password",type:"password",placeholder:"Contrase\xf1a*",required:!0})]}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)("button",{type:"submit",children:"Registrarme"})})]})},fe=function(){return Object(x.jsx)("div",{id:"registration-container",className:"container",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Registrate"}),Object(x.jsx)(ge,{})]})})},ve=function(e){var t=e.newsPreview||{title:"Cargando...",date:"Cargando...",description:"Cargando..."},s=t.title,c=t.date,r=t.description;return Object(x.jsxs)("div",{className:"news-container",children:[Object(x.jsx)("h2",{children:s}),Object(x.jsx)("p",{children:c}),Object(x.jsx)("p",{children:r})]})},ye=function(e){var t=e.newsInfoList;return t?Object(x.jsx)("ul",{children:Object(x.jsx)(Q,{items:t,resourceName:"newsPreview",itemComponent:ve})}):Object(x.jsx)("p",{children:"Cargando..."})},Ne=function(e){var t=e.resourceUrl,s=e.resourceName,a=e.children,i=Object(c.useState)(null),n=Object(E.a)(i,2),l=n[0],o=n[1];return Object(c.useEffect)((function(){Object(oe.a)(le.a.mark((function e(){var s,c;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return s=e.sent,e.next=5,s.json();case 5:c=e.sent,o(c);case 7:case"end":return e.stop()}}),e)})))()}),[t]),Object(x.jsx)(x.Fragment,{children:r.a.Children.map(a,(function(e){return r.a.isValidElement(e)?r.a.cloneElement(e,Object($.a)({},s,l)):e}))})},we=s(66),Ce=function(){return Object(x.jsxs)("form",{class:"d-flex",id:"searchBar",onSubmit:function(e){e.preventDefault();var t=document.getElementById("searchBarInput").value.toLowerCase(),s=document.getElementsByClassName("news-container");if(t.length>0){var c,r=Object(we.a)(s);try{for(r.s();!(c=r.n()).done;){var a=c.value;a.innerText.toLowerCase().includes(t)?a.classList.add("visible"):a.classList.add("hidden")}}catch(o){r.e(o)}finally{r.f()}}else{var i,n=Object(we.a)(s);try{for(n.s();!(i=n.n()).done;){var l=i.value;l.classList.remove("hidden"),l.classList.add("visible")}}catch(o){n.e(o)}finally{n.f()}}},children:[Object(x.jsx)("input",{class:"form-control rounded",type:"search",placeholder:"Buscar","aria-label":"Search",id:"searchBarInput","aria-describedby":"search-addon"}),Object(x.jsx)("button",{class:"btn btn-outline-primary",type:"submit",children:"\ud83d\udd0d\ufe0e"})]})},Se=function(){return Object(x.jsx)("div",{id:"news",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{id:"titulo",children:Object(x.jsx)("h2",{children:"Noticias"})}),Object(x.jsx)(Ce,{}),Object(x.jsx)(Ne,{resourceUrl:"/news.json",resourceName:"newsInfoList",children:Object(x.jsx)(ye,{})})]})})},qe=function(){return Object(x.jsx)(c.Suspense,{children:Object(x.jsxs)(N.c,{children:[Object(x.jsx)(N.a,{exact:!0,path:"/",component:K}),Object(x.jsx)(N.a,{exact:!0,path:"/tienda",component:ue}),Object(x.jsx)(N.a,{exact:!0,path:"/noticias",component:Se}),Object(x.jsx)(N.a,{exact:!0,path:"/equipo",component:be}),Object(x.jsx)(N.a,{exact:!0,path:"/contactanos",component:L}),Object(x.jsx)(N.a,{exact:!0,path:"/usuario",component:he}),Object(x.jsx)(N.a,{exact:!0,path:"/carrito",component:pe}),Object(x.jsx)(N.a,{exact:!0,path:"/login",component:Oe}),Object(x.jsx)(N.a,{exact:!0,path:"/registro",component:fe}),Object(x.jsx)(N.a,{exact:!0,path:"/noticias",component:Se})]})})},Fe=(new y.a('a[href*="#"]',{speed:1e3,speedAsDuration:!0}),function(){return Object(x.jsxs)(d.a,{children:[Object(x.jsx)(O,{}),Object(x.jsx)(qe,{}),Object(x.jsx)(f,{})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le=s(38),Ee=s(78),Te=s.n(Ee),Ie=s(79),ke=s.n(Ie),De=s(20),Ue={userIsLogin:!1,categoryFilters:["Todo"],sorterFilters:["Categoria"]},Pe={appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0,s=t.type,c=t.payload;switch(s){case u:return Object(Z.a)(Object(Z.a)({},e),{},{userIsLogin:c});case m:return console.log(c),Object(Z.a)(Object(Z.a)({},e),{},{categoryFilters:[].concat(Object(De.a)(e.categoryFilters),[c])});case b:return Object(Z.a)(Object(Z.a)({},e),{},{sorterFilters:[].concat(Object(De.a)(e.sorterFilters),[c])});case h:return Object(Z.a)(Object(Z.a)({},e),{},{categoryFilters:e.categoryFilters.filter((function(e){return e!==c}))});case p:return Object(Z.a)(Object(Z.a)({},e),{},{sorterFilters:e.sorterFilters.filter((function(e){return e!==c}))});default:return e}}},Re={key:"root",storage:Te.a,stateReconciler:ke.a},Ae=Object(Le.a)(Pe),Ve=Object(n.a)(Re,Ae),Be=Object(Le.b)(Ve),We=Object(n.b)(Be);i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(o.a,{store:Be,children:Object(x.jsx)(l.PersistGate,{loading:Object(x.jsx)("div",{children:"Cargando..."}),persistor:We,children:Object(x.jsx)(Fe,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e){e.exports=JSON.parse('{"Header":{"title":"We are a Landing Page","paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."},"About":{"paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Why":["Lorem ipsum dolor","Tempor incididunt","Lorem ipsum dolor","Incididunt ut labore"],"Why2":["Aliquip ex ea commodo","Lorem ipsum dolor","Exercitation ullamco","Lorem ipsum dolor"]},"Gallery":[{"title":"Project Title","largeImage":"img/portfolio/01-large.jpg","smallImage":"img/portfolio/01-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/02-large.jpg","smallImage":"img/portfolio/02-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/03-large.jpg","smallImage":"img/portfolio/03-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/04-large.jpg","smallImage":"img/portfolio/04-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/05-large.jpg","smallImage":"img/portfolio/05-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/06-large.jpg","smallImage":"img/portfolio/06-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/07-large.jpg","smallImage":"img/portfolio/07-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/08-large.jpg","smallImage":"img/portfolio/08-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/09-large.jpg","smallImage":"img/portfolio/09-small.jpg"}],"Team":[{"img":"img/team/01.jpg","name":"John Doe","job":"Director"},{"img":"img/team/02.jpg","name":"Mike Doe","job":"Senior Designer"},{"img":"img/team/03.jpg","name":"Jane Doe","job":"Senior Designer"},{"img":"img/team/04.jpg","name":"Karen Doe","job":"Project Manager"}],"Contact":{"address":"4321 California St, San Francisco, CA 12345 ","phone":"+1 123 456 1234","email":"info@company.com","facebook":"fb.com","twitter":"twitter.com","youtube":"youtube.com"}}')},92:function(e,t,s){}},[[109,1,2]]]);
//# sourceMappingURL=main.c85328ac.chunk.js.map