(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{24:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),i=c(25),n=c.n(i),r=(c(30),c(5)),l=c(3),j=(c(31),c(4)),o=c(12),d=c.n(o),b=(c(32),c(24),c(1)),m=function(e){var t=e.to,c=e.title,s=e.setIsOpen;return Object(b.jsx)("li",{className:"nav__item nav__item--active",children:Object(b.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return d()("nav__link",{"nav__link--active":t})},onClick:function(){return s(!1)},children:c})})},O=a.a.memo((function(e){var t=e.setIsOpen;return Object(b.jsx)("nav",{className:"nav",children:Object(b.jsxs)("ul",{className:"nav__list",children:[Object(b.jsx)(m,{setIsOpen:t,title:"home",to:"/"}),Object(b.jsx)(m,{setIsOpen:t,title:"Phones",to:"phones"}),Object(b.jsx)(m,{setIsOpen:t,title:"Tablets",to:"tablets"}),Object(b.jsx)(m,{setIsOpen:t,title:"Accessories",to:"accessories"})]})})})),h=(c(34),a.a.memo((function(e){var t=e.iconName,c=e.to;return Object(b.jsx)("div",{className:"iconBlock",children:Object(b.jsx)(r.c,{to:c,className:function(e){var t=e.isActive;return d()("iconBlock__link",{"iconBlock__link--active":t})},children:Object(b.jsx)("div",{className:"iconBlock__icon iconBlock__icon--".concat(t)})})})}))),x=(c(35),c.p+"static/media/Logo.3c6bd188.svg"),u=Object(s.memo)((function(e){var t=e.setIsOpen;return t?Object(b.jsx)(r.b,{className:"logo",to:"/",onClick:function(){return t(!1)},children:Object(b.jsx)("img",{src:x,className:"logo__image",alt:"NiceGadgets logo"})}):Object(b.jsx)(r.b,{className:"logo",to:"/",children:Object(b.jsx)("img",{src:x,className:"logo__image",alt:"NiceGadgets logo"})})})),_=a.a.memo((function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("header",{className:"header page__header",children:[Object(b.jsxs)("div",{className:"header__links",children:[Object(b.jsx)("div",{className:"header__logo",children:Object(b.jsx)(u,{setIsOpen:a})}),Object(b.jsx)("div",{className:"header__nav",children:Object(b.jsx)(O,{setIsOpen:a})})]}),Object(b.jsx)("div",{className:"header__menu",children:Object(b.jsx)("a",{href:"#menu",className:"header__menu-opener",onClick:function(e){return function(e){return e.preventDefault(),a(!c)}(e)},children:Object(b.jsx)("div",{className:d()("header__menu-icon",{"header__menu-icon--opened":c,"header__menu-icon--closed":!c})})})}),Object(b.jsxs)("div",{className:"header__icons",children:[Object(b.jsx)(h,{iconName:"favourites",to:"/favourites"}),Object(b.jsx)(h,{iconName:"cart",to:"/cart"})]})]})})})),p=(c(36),c(37),Object(s.memo)((function(e){var t=e.mixClass,c=e.children;return Object(b.jsx)("h2",{className:"page-title ".concat(t),children:c})}))),g=function(e){var t=e.pageTitle;return Object(b.jsxs)("div",{className:"cart-page",children:[Object(b.jsx)("div",{children:"Breadcrumbs"}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(p,{mixClass:"cart-page__title",children:t})}),Object(b.jsx)("div",{children:"Products"})]})},v=(c(38),function(e){var t=e.pageTitle;return Object(b.jsxs)("div",{className:"favourites-page",children:[Object(b.jsx)("div",{children:"Breadcrumbs"}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(p,{mixClass:"favourites-page__title",children:t})}),Object(b.jsx)("div",{children:"Amount"}),Object(b.jsx)("div",{children:"Favourites cards"})]})}),f=(c(39),c(40),c(41),function(e){var t=e.children;return Object(b.jsx)("h3",{className:"section-title",children:t})}),N=(c(42),function(e){var t=e.link,c=e.gridClasses,s=e.image,a=e.title,i=e.amount;return Object(b.jsx)("article",{className:"category-card ".concat(c),children:Object(b.jsxs)(r.b,{to:t,className:"category-card__link",children:[Object(b.jsx)("img",{className:"category-card__image",src:s,alt:"banner of ".concat(a," category")}),Object(b.jsx)("h4",{className:"category-card__title",children:a}),Object(b.jsx)("p",{className:"category-card__models-amount",children:"".concat(i," models")})]})})}),k=c.p+"static/media/category__phones.5745f0cd.jpg",y=c.p+"static/media/category__tablets.05b3d251.jpg",C=c.p+"static/media/category__accessories.3b9d45fd.jpg",T=function(){return Object(b.jsxs)("section",{className:"shop-by-category container",children:[Object(b.jsx)(f,{children:"Shop by category"}),Object(b.jsxs)("div",{className:"shop-by-category__categories grid",children:[Object(b.jsx)(N,{link:"/phones",gridClasses:"grid__item--tablet_1-4 grid__item--desktop_1-8",image:k,title:"Mobile phones",amount:95}),Object(b.jsx)(N,{link:"/tablets",gridClasses:"grid__item--tablet_5-8 grid__item--desktop_9-16",image:y,title:"Tablets",amount:24}),Object(b.jsx)(N,{link:"/accessories",gridClasses:"grid__item--tablet_9-12 grid__item--desktop_17-24",image:C,title:"Accessories",amount:100})]})]})},I=function(e){var t=e.pageTitle;return Object(b.jsxs)("div",{className:"home-page",children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(p,{mixClass:"home-page__title",children:t})}),Object(b.jsx)("div",{children:"Carousel 1"}),Object(b.jsx)("div",{children:"Carousel 2"}),Object(b.jsx)(T,{}),Object(b.jsx)("div",{children:"Carousel 3"})]})},B=function(){return Object(b.jsx)("div",{children:"NotFoundPage"})},F=function(){var e=Object(l.o)().productId;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:"Section title component ".concat(e)})})},A=(c(43),function(e){var t=e.pageTitle;return Object(b.jsxs)("div",{className:"product-page",children:[Object(b.jsx)("div",{children:"Breadcrumbs"}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(p,{mixClass:"product-page__title",children:t})}),Object(b.jsx)("div",{children:"Data amount"}),Object(b.jsx)("div",{children:"Sorting"}),Object(b.jsx)("div",{children:"Datalist"}),Object(b.jsx)("div",{children:"Pagination"})]})}),S=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(_,{}),Object(b.jsx)("main",{className:"page__main",children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/",element:Object(b.jsx)(I,{pageTitle:"Welcome to Nice Gadgets store!"})}),Object(b.jsx)(l.a,{path:"phones",element:Object(b.jsx)(A,{pageTitle:"Mobile Phones"})}),Object(b.jsx)(l.a,{path:"tablets",element:Object(b.jsx)(A,{pageTitle:"Tablets"})}),Object(b.jsx)(l.a,{path:"accessories",element:Object(b.jsx)(A,{pageTitle:"Accessories"})}),Object(b.jsx)(l.a,{path:"/cart",element:Object(b.jsx)(g,{pageTitle:"Cart"})}),Object(b.jsx)(l.a,{path:"/favourites",element:Object(b.jsx)(v,{pageTitle:"Favourites"})}),Object(b.jsx)(l.a,{path:"product/:productId",element:Object(b.jsx)(F,{})}),Object(b.jsx)(l.a,{path:"*",element:Object(b.jsx)(B,{})})]})}),Object(b.jsx)("footer",{style:{fontSize:"24px"},children:"Footer"})]})};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(S,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.22ac1f23.chunk.js.map