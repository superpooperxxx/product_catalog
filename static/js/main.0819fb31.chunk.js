(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],Array(25).concat([function(e,t,c){},,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){},,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(28),r=c.n(n),i=(c(45),c(7)),o=c(4),l=(c(46),c(5)),d=c(8),u=c.n(d),j=(c(47),c(37),c(0)),b=function(e){var t=e.to,c=e.title,s=e.setIsMenuOpened;return Object(j.jsx)("li",{className:"nav__item nav__item--active",children:Object(j.jsx)(i.c,{to:t,className:function(e){var t=e.isActive;return u()("nav__link",{"nav__link--active":t})},onClick:function(){return s(!1)},children:c})})},m=a.a.memo((function(e){var t=e.setIsMenuOpened;return Object(j.jsx)("nav",{className:"nav",children:Object(j.jsxs)("ul",{className:"nav__list",children:[Object(j.jsx)(b,{setIsMenuOpened:t,title:"home",to:"/"}),Object(j.jsx)(b,{setIsMenuOpened:t,title:"Phones",to:"phones"}),Object(j.jsx)(b,{setIsMenuOpened:t,title:"Tablets",to:"tablets"}),Object(j.jsx)(b,{setIsMenuOpened:t,title:"Accessories",to:"accessories"})]})})})),p=(c(49),a.a.memo((function(e){var t=e.iconName,c=e.to,s=e.setIsMenuOpened,a=e.counter;return Object(j.jsx)("div",{className:"icon-block",children:Object(j.jsx)(i.c,{title:t,"aria-label":t,to:c,className:function(e){var t=e.isActive;return u()("icon-block__link",{"icon-block__link--active":t})},onClick:function(){return s(!1)},children:Object(j.jsx)("div",{className:"icon-block__icon icon-block__icon--".concat(t),children:a>0&&Object(j.jsx)("div",{className:"icon-block__counter",children:Object(j.jsx)("div",{className:"icon-block__number",children:a})})})})})}))),_=(c(50),c.p+"static/media/Logo.3c6bd188.svg"),h=Object(s.memo)((function(e){var t=e.setIsMenuOpened;return t?Object(j.jsx)(i.b,{title:"Nice Gadgets - Home Page",className:"logo",to:"/",onClick:function(){return t(!1)},children:Object(j.jsx)("img",{src:_,className:"logo__image",alt:"NiceGadgets logo"})}):Object(j.jsx)(i.b,{title:"Nice Gadgets - Home Page",className:"logo",to:"/",children:Object(j.jsx)("img",{src:_,className:"logo__image",alt:"NiceGadgets logo"})})})),O=(c(51),a.a.createContext({cart:[],setCart:function(){},updateCart:function(){},cartLength:0,favourites:[],setFavourites:function(){},updateFavourites:function(){},favouritesLength:0})),x=function(e){var t=e.children,c=Object(s.useState)(JSON.parse(localStorage.getItem("cart")||"[]")),a=Object(l.a)(c,2),n=a[0],r=a[1],i=Object(s.useState)(JSON.parse(localStorage.getItem("favourites")||"[]")),o=Object(l.a)(i,2),d=o[0],u=o[1],b=Object(s.useCallback)((function(e){r(e),localStorage.setItem("cart",JSON.stringify(e))}),[]),m=Object(s.useCallback)((function(e){u(e),localStorage.setItem("favourites",JSON.stringify(e))}),[]),p=n.length,_=d.length,h=Object(s.useMemo)((function(){return{cart:n,setCart:r,updateCart:b,cartLength:p,favourites:d,setFavourites:u,updateFavourites:m,favouritesLength:_}}),[n,d]);return Object(j.jsx)(O.Provider,{value:h,children:t})},f=Object(s.memo)((function(e){var t=e.isMenuOpen,c=e.setIsMenuOpened,a=Object(s.useContext)(O),n=a.cartLength,r=a.favouritesLength;return Object(j.jsxs)("div",{className:u()("burger-menu",{"burger-menu--active":t}),children:[Object(j.jsx)(m,{setIsMenuOpened:c}),Object(j.jsxs)("div",{className:"burger-menu__icons",children:[Object(j.jsx)(p,{iconName:"Favourites",to:"/favourites",setIsMenuOpened:c,counter:r}),Object(j.jsx)(p,{iconName:"Cart",to:"/cart",setIsMenuOpened:c,counter:n})]})]})})),v=a.a.memo((function(){var e=Object(s.useContext)(O),t=e.cartLength,c=e.favouritesLength,a=Object(s.useState)(!1),n=Object(l.a)(a,2),r=n[0],i=n[1],o=Object(s.useCallback)((function(e){e.preventDefault(),i((function(e){return!e}))}),[]);return Object(s.useEffect)((function(){return r?document.body.classList.add("page--with-menu"):document.body.classList.remove("page--with-menu")}),[r]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:"header page__header",children:[Object(j.jsxs)("div",{className:"header__links",children:[Object(j.jsx)("div",{className:"header__logo",children:Object(j.jsx)(h,{setIsMenuOpened:i})}),Object(j.jsx)("div",{className:"header__nav",children:Object(j.jsx)(m,{setIsMenuOpened:i})})]}),Object(j.jsx)("div",{className:"header__menu",children:Object(j.jsx)("button",{title:"Menu","aria-label":"menu button",type:"button",className:"header__menu-opener",onClick:function(e){return o(e)},children:Object(j.jsx)("div",{className:u()("header__menu-icon",{"header__menu-icon--opened":r,"header__menu-icon--closed":!r})})})}),Object(j.jsxs)("div",{className:"header__icons",children:[Object(j.jsx)(p,{iconName:"Favourites",to:"/favourites",setIsMenuOpened:i,counter:c}),Object(j.jsx)(p,{iconName:"Cart",to:"/cart",setIsMenuOpened:i,counter:t})]})]}),Object(j.jsx)(f,{isMenuOpen:r,setIsMenuOpened:i})]})})),g=(c(25),Object(s.memo)((function(){return Object(j.jsxs)("button",{type:"button",className:"footer__btn",onClick:function(){setTimeout((function(){return window.scrollTo({top:0,behavior:"smooth"})}),200)},children:[Object(j.jsx)("span",{className:"footer__back-to-top",children:"Back to top"}),Object(j.jsx)("div",{className:"footer__arrow-up"})]})}))),N=Object(s.memo)((function(e){var t=e.to,c=e.text;return Object(j.jsx)("a",{href:t,className:"footer__nav-link",children:c})})),y=Object(s.memo)((function(){return Object(j.jsxs)("div",{className:"footer__nav",children:[Object(j.jsx)(N,{to:"https://github.com/fe-oct22-senior-html-developers/product_catalog",text:"github"}),Object(j.jsx)(N,{to:"#",text:"contacts"}),Object(j.jsx)(N,{to:"#",text:"rights"})]})})),k=Object(s.memo)((function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("div",{className:"footer__content container",children:[Object(j.jsx)(h,{}),Object(j.jsx)(y,{}),Object(j.jsx)(g,{})]})})})),C=(c(52),c(53),Object(s.memo)((function(e){var t=e.mixClass,c=e.children;return Object(j.jsx)("h2",{className:"page-title ".concat(t),children:c})}))),w=(c(54),c(55),a.a.memo((function(){return Object(j.jsx)("div",{className:"modal",children:Object(j.jsxs)("div",{className:"modal__content",children:[Object(j.jsx)("div",{className:"modal__header"}),Object(j.jsx)("p",{className:"modal__text",children:"Thank you for purchase!"})]})})}))),S=(c(56),function(e){var t=e.total,c=void 0===t?0:t,a=e.itemsNum,n=void 0===a?0:a,r=Object(s.useContext)(O).updateCart,i=Object(s.useState)(!1),d=Object(l.a)(i,2),u=d[0],b=d[1],m=Object(o.m)();return Object(j.jsxs)("div",{className:" cart-total grid__item--tablet_1-12 grid__item--desktop_17-24",children:[Object(j.jsx)("div",{className:"cart-total__price",children:"$".concat(c)}),Object(j.jsx)("div",{className:"cart-total__items",children:"Total for ".concat(n," items")}),Object(j.jsx)("button",{type:"button",className:"cart-total__btn","aria-label":"Checkout button",onClick:function(){return b(!0),void setTimeout((function(){b(!1),r([]),m("/")}),2e3)},children:"Checkout"}),u&&Object(j.jsx)(w,{})]})}),I=function(e){var t=e.children;return Object(j.jsx)("ul",{className:" cart__list grid__item--tablet_1-12 grid__item--desktop_1-16",children:t})},T=c(13),M=(c(57),function(e){var t=e.cartItem,c=t.quantity,a=t.product,n=a.id,r=a.name,o=a.price,d=a.image,u=a.phoneId,b=Object(s.useContext)(O),m=b.cart,p=b.updateCart,_=Object(s.useState)(!1),h=Object(l.a)(_,2),x=h[0],f=h[1],v=Object(s.useState)(!1),g=Object(l.a)(v,2),N=g[0],y=g[1];Object(s.useEffect)((function(){1===c&&f(!0),c>1&&f(!1)}),[c]),Object(s.useEffect)((function(){10===c&&y(!0),c<10&&y(!1)}),[c]);return Object(j.jsxs)("article",{className:"cart-item",children:[Object(j.jsxs)("div",{className:"cart-item__container",children:[Object(j.jsx)("button",{type:"button",className:"cart-item__close-button","aria-label":"click to remove ".concat(r," from cart"),onClick:function(){return function(){var e=m.filter((function(e){return e.product.id!==n}));p(e)}()}}),Object(j.jsx)("img",{src:d,alt:r,className:"cart-item__img"}),Object(j.jsx)(i.b,{to:"/product/".concat(u),className:"cart-item__title",children:"".concat(r)})]}),Object(j.jsxs)("div",{className:"cart-item__container cart-item__container__bottom ",children:[Object(j.jsxs)("div",{className:"cart-item__counter",children:[Object(j.jsx)("button",{type:"button",className:"cart-item__counter-button-minus","aria-label":"decrease quantity by 1",onClick:function(){return function(){var e=m.map((function(e){return e.product.id===n?Object(T.a)(Object(T.a)({},e),{},{quantity:e.quantity-1}):e}));p(e)}()},disabled:x}),Object(j.jsx)("p",{className:"cart-item__counter-number",children:c}),Object(j.jsx)("button",{type:"button",className:"cart-item__counter-button-plus","aria-label":"increase quantity by 1",onClick:function(){return function(){var e=m.map((function(e){return e.product.id===n?Object(T.a)(Object(T.a)({},e),{},{quantity:e.quantity+1}):e}));p(e)}()},disabled:N})]}),Object(j.jsx)("p",{className:"cart-item__price",children:"$".concat(c*o)})]})]})}),P=(c(58),Object(s.memo)((function(e){var t=e.mixClass,c=e.image,s=e.btnText;return Object(j.jsxs)("section",{className:"container empty-message ".concat(t),children:[Object(j.jsxs)("div",{className:"empty-message__inner",children:[Object(j.jsx)("img",{src:c,alt:"EmptySpace",className:"empty-message__img"}),Object(j.jsx)("p",{className:"text",children:"Oopps... It is empty in here."})]}),Object(j.jsx)(i.b,{to:"/phones",className:"empty-message__btn",children:s})]})}))),A=c.p+"static/media/emptyCart.1a79597b.jpg",L=function(){var e=Object(s.useContext)(O).cart,t=e.reduce((function(e,t){return e+t.quantity*t.product.price}),0),c=e.reduce((function(e,t){return e+t.quantity}),0);return Object(j.jsx)(j.Fragment,{children:c?Object(j.jsxs)("section",{className:"cart page__cart container grid",children:[Object(j.jsx)(I,{children:e.map((function(e){return Object(j.jsx)("li",{className:"cart__list-item",children:Object(j.jsx)(M,{cartItem:e})},e.product.itemId)}))}),Object(j.jsx)(S,{total:t,itemsNum:c})]}):Object(j.jsx)(P,{image:A,btnText:"Buy"})})},F=(c(59),c(60),Object(s.memo)((function(e){var t=e.isAlone,c=Object(o.m)();return Object(j.jsxs)("button",{type:"button","aria-label":"click to go back",className:u()("back-button",{"page__alone-back-button":t,"page__back-button":!t}),onClick:function(){return c(-1)},children:[Object(j.jsx)("div",{className:"back-button__icon"}),"Back"]})}))),E=function(e){var t=e.pageTitle;return Object(j.jsxs)("div",{className:"cart-page",children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(F,{isAlone:!0}),Object(j.jsx)(C,{mixClass:"cart-page__title",children:t})]}),Object(j.jsx)(L,{})]})},D=(c(61),c(62),Object(s.memo)((function(){var e=Object(o.k)(),t="",c=e.pathname.split("/").filter((function(e){return""!==e})).map((function(e){var c=e[0].toUpperCase()+e.slice(1);return t+="/".concat(e),Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)("div",{className:"breadcrumbs__icon breadcrumbs__icon--arrow"}),Object(j.jsx)(i.b,{"aria-label":"click to go to the ".concat(e," page"),className:"breadcrumbs__link",to:t,children:c})]},e)}));return Object(j.jsxs)("div",{className:"breadcrumbs page__breadcrumbs",children:[Object(j.jsx)(i.b,{"aria-label":"click to go to the home page",title:"Home page",to:"/",className:"breadcrumbs__link",children:Object(j.jsx)("div",{className:"breadcrumbs__icon--home breadcrumbs__icon"})}),Object(j.jsx)(j.Fragment,{children:c})]})}))),B=c(10),q=(c(63),Object(s.memo)((function(e){var t=e.phone,c=e.mixClass,a=e.handleProductChange,n=t.image,r=t.name,o=t.price,d=t.fullPrice,u=t.screen,b=t.capacity,m=t.ram,p=t.phoneId,_=Object(s.useContext)(O),h=_.cart,x=_.updateCart,f=_.favourites,v=_.updateFavourites,g=Object(s.useState)(!1),N=Object(l.a)(g,2),y=N[0],k=N[1],C=Object(s.useState)(!1),w=Object(l.a)(C,2),S=w[0],I=w[1],T=Object(B.a)(h),M=Object(B.a)(f),P=h.some((function(e){return e.product.itemId===t.itemId})),A=f.find((function(e){return e.itemId===t.itemId}));Object(s.useEffect)((function(){P&&k(!0),A&&I(!0)}),[y,S]);return Object(j.jsxs)("article",{className:"card ".concat(c),children:[Object(j.jsx)("div",{children:a?Object(j.jsxs)(i.b,{to:"/product/".concat(p),onClick:function(){setTimeout((function(){return window.scrollTo({top:0,behavior:"smooth"})}),200),a(p)},children:[Object(j.jsx)("img",{className:"card__img",src:n,alt:r}),Object(j.jsx)("h4",{className:"card__title",children:r})]}):Object(j.jsxs)(i.b,{to:"/product/".concat(p),children:[Object(j.jsx)("img",{className:"card__img",src:n,alt:r}),Object(j.jsx)("h4",{className:"card__title",children:r})]})}),Object(j.jsxs)("div",{className:"block",children:[Object(j.jsxs)("div",{className:"card__prices",children:[Object(j.jsx)("span",{className:"card__prices--price",children:"$".concat(o)}),Object(j.jsx)("span",{className:"card__prices--old-price",children:"$".concat(d)})]}),Object(j.jsxs)("div",{className:"card__specifications",children:[Object(j.jsxs)("div",{className:"card__specifications--feature",children:[Object(j.jsx)("span",{children:"Screen"}),Object(j.jsx)("span",{children:"Capacity"}),Object(j.jsx)("span",{children:"RAM"})]}),Object(j.jsxs)("div",{className:"card__specifications--feature",children:[Object(j.jsx)("span",{children:u}),Object(j.jsx)("span",{children:b}),Object(j.jsx)("span",{children:m})]})]}),Object(j.jsxs)("div",{className:"card__footer",children:[y?Object(j.jsx)("button",{type:"button",className:"card__button card__button--active",onClick:function(){var e=T.filter((function(e){return e.product.itemId!==t.itemId}));x(e),k(!1)},children:"Added to cart"}):Object(j.jsx)("button",{type:"button",className:"card__button",onClick:function(){var e;T.push({id:(e=T,e.length>0?Math.max.apply(Math,Object(B.a)(e.map((function(e){return e.id}))))+1:0),quantity:1,product:t}),x(T),k(!0)},children:"Add to cart"}),S?Object(j.jsx)("button",{type:"button",onClick:function(){return function(){var e=M.filter((function(e){return e.itemId!==t.itemId}));v(e),I(!1)}()},className:"card__fav-button",children:Object(j.jsx)("div",{className:"card__fav-icon card__fav-icon--active"})}):Object(j.jsx)("button",{type:"button",onClick:function(){return M.push(t),v(M),void I(!0)},className:"card__fav-button",children:Object(j.jsx)("div",{className:"card__fav-icon card__fav-icon--pasive"})})]})]})]})}))),J=function(e){var t=e.favouritesItem;return Object(j.jsx)(q,{phone:t,mixClass:""})},G=function(e){var t=e.children;return Object(j.jsx)("ul",{className:"favourites__list",children:t})},H=(c(64),c.p+"static/media/empty-box.158a7fdc.png"),$=function(){var e=Object(s.useContext)(O),t=e.favourites,c=e.favouritesLength;return Object(j.jsx)(j.Fragment,{children:0!==c?Object(j.jsxs)("section",{className:"favourites",children:[Object(j.jsx)("div",{className:"favourites__amount",children:"".concat(c," items")}),Object(j.jsx)(G,{children:t.map((function(e){return Object(j.jsx)("li",{className:"favourites__list-item",children:Object(j.jsx)(J,{favouritesItem:e})},e.itemId)}))})]}):Object(j.jsx)(P,{mixClass:"favourites__empty-message",image:H,btnText:"Add"})})},R=function(e){var t=e.pageTitle;return Object(j.jsx)("div",{className:"favourites-page",children:Object(j.jsxs)("div",{className:"container page__favourites",children:[Object(j.jsx)(D,{}),Object(j.jsx)(C,{mixClass:"favourites-page__title",children:t}),Object(j.jsx)($,{})]})})},Z=(c(65),c(66),c(67),function(e){var t=e.children;return Object(j.jsx)("h3",{className:"section-title",children:t})}),z=(c(68),function(e){var t=e.link,c=e.gridClasses,s=e.image,a=e.title,n=e.amount;return Object(j.jsx)("article",{className:"category-card ".concat(c),children:Object(j.jsxs)(i.b,{to:t,className:"category-card__link",children:[Object(j.jsx)("img",{className:"category-card__image",src:s,alt:"banner of ".concat(a," category")}),Object(j.jsx)("h4",{className:"category-card__title",children:a}),Object(j.jsx)("p",{className:"category-card__models-amount",children:"".concat(n," models")})]})})}),U=c.p+"static/media/category__phones.5745f0cd.jpg",W=c.p+"static/media/category__tablets.05b3d251.jpg",Y=c.p+"static/media/category__accessories.3b9d45fd.jpg",K=c(106),Q=function(e){return K.a.get("".concat("https://guarded-waters-77447.herokuapp.com").concat(e))},V=function(){return Q("/phones/amount")},X=function(e){return Q("/phones/".concat(e))},ee=function(e){return Q("/phones/".concat(e,"/recommended"))},te=function(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){V().then((function(e){return e.data})).then(a)}),[]),Object(j.jsxs)("section",{className:"shop-by-category container",children:[Object(j.jsx)(Z,{children:"Shop by category"}),Object(j.jsxs)("div",{className:"shop-by-category__categories grid",children:[Object(j.jsx)(z,{link:"/phones",gridClasses:"grid__item--tablet_1-4 grid__item--desktop_1-8",image:U,title:"Mobile phones",amount:+c}),Object(j.jsx)(z,{link:"/tablets",gridClasses:"grid__item--tablet_5-8 grid__item--desktop_9-16",image:W,title:"Tablets",amount:24}),Object(j.jsx)(z,{link:"/accessories",gridClasses:"grid__item--tablet_9-12 grid__item--desktop_17-24",image:Y,title:"Accessories",amount:100})]})]})},ce=(c(73),function(){return Object(j.jsx)("h1",{className:"website-title",children:"Product Catalog"})}),se=c(19),ae=c.n(se),ne=(c(89),function(e){var t=e.children,c={dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,arrows:!0,autoplay:!0,draggable:!0,autoplaySpeed:3e3,customPaging:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{style:{visibility:"hidden"},children:"\u2022"})})},responsive:[{breakpoint:640,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1,initialSlide:1}}]};return Object(j.jsx)(ae.a,Object(T.a)(Object(T.a)({},c),{},{className:"grid__item grid__item--tablet_2-11 grid__item--desktop_2-23",children:t}))}),re=(c(90),c.p+"static/media/banner.330ccefb.jpeg"),ie=function(){return Object(j.jsx)("section",{className:"banner grid",children:Object(j.jsxs)(ne,{children:[Object(j.jsx)("img",{className:"banner__image",src:re,alt:"BannerImg"}),Object(j.jsx)("img",{className:"banner__image",src:re,alt:"BannerImg"}),Object(j.jsx)("img",{className:"banner__image",src:re,alt:"BannerImg"})]})})};c(91);var oe=function(e){var t=function(e){return"undefined"!==typeof window&&window.matchMedia(e).matches},c=Object(s.useState)(t(e)),a=Object(l.a)(c,2),n=a[0],r=a[1];function i(){r(t(e))}return Object(s.useEffect)((function(){var t=window.matchMedia(e);return i(),t.addListener?t.addListener(i):t.addEventListener("change",i),function(){t.removeListener?t.removeListener(i):t.removeEventListener("change",i)}}),[e]),n};function le(e){var t=e.onClick,c=e.isDisabled,s=u()("arrow arrow-left",{disabled:c});return Object(j.jsx)("div",{onClick:c?void 0:t,className:s})}function de(e){var t=e.onClick,c=e.isDisabled,s=u()("arrow arrow-right",{disabled:c});return Object(j.jsx)("div",{onClick:c?void 0:t,className:s})}var ue=function(e){var t=e.children,c=Object(s.useState)(0),n=Object(l.a)(c,2),r=n[0],i=n[1],o=a.a.Children.count(t),d=oe("(max-width: 1024px)"),u=oe("(max-width: 740px)"),b=0;b=oe("(max-width: 480px)")?1.5:u?2:d?2.5:4;var m={dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,initialSlide:0,nextArrow:Object(j.jsx)(de,{isDisabled:r===o-b,onClick:function(){return i(r+1)}}),prevArrow:Object(j.jsx)(le,{isDisabled:0===r,onClick:function(){return i(r-1)}}),responsive:[{breakpoint:1024,settings:{slidesToShow:2.5,slidesToScroll:1}},{breakpoint:740,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1.5,slidesToScroll:1}}],beforeChange:function(e,t){i(t)}};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(ae.a,Object(T.a)(Object(T.a)({},m),{},{className:"smartphone-slider",children:t}))})};le.defaultProps={onClick:function(){}},de.defaultProps={onClick:function(){}};c(92);var je=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){Q("/phones/new").then((function(e){return e.data})).then(a).catch((function(e){return window.console.log(e)}))}),[]),Object(j.jsxs)("section",{className:"brand-new-models container",children:[Object(j.jsx)(Z,{children:"Brand new models"}),Object(j.jsx)(ue,{children:c.map((function(e){return Object(j.jsx)(q,{mixClass:"card--slider",phone:e},e.id)}))})]})},be=(c(93),function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){Q("/phones/discount").then((function(e){return e.data})).then(a).catch((function(e){return window.console.log(e)}))}),[]),Object(j.jsxs)("section",{className:"hot-prices container",children:[Object(j.jsx)(Z,{children:"Hot prices"}),Object(j.jsx)(ue,{children:c.map((function(e){return Object(j.jsx)(q,{mixClass:"card--slider",phone:e},e.id)}))})]})}),me=function(e){var t=e.pageTitle;return Object(j.jsxs)("div",{className:"home-page",children:[Object(j.jsx)(ce,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(C,{mixClass:"home-page__title",children:t})}),Object(j.jsx)(ie,{}),Object(j.jsx)(je,{}),Object(j.jsx)(te,{}),Object(j.jsx)(be,{})]})},pe=(c(94),c.p+"static/media/404.748a45b2.svg"),_e=function(){return Object(j.jsxs)("div",{className:"container not-found-page",children:[Object(j.jsx)(F,{isAlone:!0}),Object(j.jsxs)("section",{className:"not-found-page__content",children:[Object(j.jsxs)("div",{className:"not-found-page__text",children:[Object(j.jsx)("h1",{className:"not-found-page__title",children:"Sorry, this page could not be found"}),Object(j.jsxs)("p",{className:"not-found-page__description",children:["The link is broken or the page no longer exists. ",Object(j.jsx)("br",{className:"not-found-page__break"}),"Go to the ",Object(j.jsx)(i.b,{className:"not-found-page__link",to:"/",children:"homepage"}),"."]})]}),Object(j.jsx)("img",{src:pe,alt:"404 error",className:"not-found-page__image"})]})]})},he=(c(95),function(e){var t=e.description;return Object(j.jsx)("div",{className:"grid__item--tablet_1-12 grid__item--desktop_1-12",children:Object(j.jsxs)("div",{className:"product__about",children:[Object(j.jsx)("h3",{className:"product__about--header",children:"About"}),t.map((function(e){return Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)("h4",{className:"product__about--title",children:e.title}),Object(j.jsx)("p",{className:"product__about--content",children:e.text.map((function(e){return Object(j.jsx)("span",{className:"product__about--text",children:e},e)}))})]},e.title)}))]})})}),Oe=(c(39),Object(s.memo)((function(e){var t=e.capacity,c=e.productCapacity,s=e.handleProductChange,a=function(e){return e.split("GB").join("")}(t),n=Object(o.o)().productId,r="",l=t.toLowerCase();if(n){var d=n.split("-");r=d.slice(0,-2).concat(["".concat(l),d[d.length-1]]).join("-")}return Object(j.jsx)(i.b,{to:"/product/".concat(r),"aria-label":"click to choose ".concat(t," capacity"),onClick:function(){return s(r)},className:u()("product-capacity__button",{"product-capacity__button--active":t===c}),children:"".concat(a," GB")})}))),xe=Object(s.memo)((function(e){var t=e.currentCapacity,c=e.capacityAvailable,s=e.handleProductChange;return Object(j.jsx)("div",{className:"product-capacity product-sidebar__product-capacity",children:Object(j.jsxs)("div",{className:"product-capacity__content",children:[Object(j.jsx)("p",{className:"product-capacity__title",children:"Select capacity"}),Object(j.jsx)("div",{className:"product-capacity__selector",children:c.map((function(e){return Object(j.jsx)(Oe,{capacity:e,productCapacity:t,handleProductChange:s},e)}))})]})})})),fe=(c(40),Object(s.memo)((function(e){var t=e.color,c=e.productColor,s=e.handleProductChange,a=Object(o.o)().productId,n="";return a&&(n=a.split("-").slice(0,-1).concat("".concat(t)).join("-")),Object(j.jsx)(i.b,{to:"/product/".concat(n),"aria-label":"click to choose ".concat(t," color"),title:t,onClick:function(){return s(n)},className:u()("product-colors__circle",{"product-colors__circle--active":t===c}),children:Object(j.jsx)("div",{className:"product-colors__color product-colors__color--".concat(t)})})}))),ve=Object(s.memo)((function(e){var t=e.colorsAvailable,c=e.currentColor,s=e.handleProductChange;return Object(j.jsxs)("div",{className:"product-colors product-sidebar__product-colors",children:[Object(j.jsxs)("div",{className:"product-colors__text",children:[Object(j.jsx)("p",{className:"product-colors__title",children:"Available colors"}),Object(j.jsx)("p",{className:"product-colors__id",children:"ID: 802390"})]}),Object(j.jsx)("div",{className:"product-colors__info",children:null===t||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(fe,{productColor:c,color:e,handleProductChange:s},e)}))})]})})),ge=(c(96),Object(s.memo)((function(e){var t=e.phone,c=e.phoneDetails,a=t.fullPrice,n=Object(s.useContext)(O),r=n.cart,i=n.updateCart,o=n.favourites,d=n.updateFavourites,u=Object(s.useState)(!1),b=Object(l.a)(u,2),m=b[0],p=b[1],_=Object(s.useState)(!1),h=Object(l.a)(_,2),x=h[0],f=h[1],v=Object(B.a)(r),g=Object(B.a)(o),N=v.some((function(e){return e.product.itemId===t.itemId})),y=g.find((function(e){return e.itemId===t.itemId}));Object(s.useEffect)((function(){p(!1),f(!1),N&&p(!0),y&&f(!0)}),[m,x,t]);return Object(j.jsxs)("article",{className:"product-purchase product-sidebar__product-purchase",children:[Object(j.jsxs)("div",{className:"product-purchase__prices",children:[Object(j.jsx)("p",{className:"product-purchase__prices--price",children:"$".concat(null===c||void 0===c?void 0:c.priceDiscount)}),Object(j.jsx)("p",{className:"product-purchase__prices--old-price",children:"$".concat(a)})]}),Object(j.jsxs)("div",{className:"product-purchase__footer",children:[m?Object(j.jsx)("button",{type:"button",className:"product-purchase__button product-purchase__button--active",onClick:function(){var e=v.filter((function(e){return e.product.itemId!==t.itemId}));i(e),p(!1)},children:"Added to cart"}):Object(j.jsx)("button",{type:"button",className:"product-purchase__button",onClick:function(){var e;v.push({id:(e=v,e.length>0?Math.max.apply(Math,Object(B.a)(e.map((function(e){return e.id}))))+1:0),quantity:1,product:t}),i(v),p(!0)},children:"Add to cart"}),x?Object(j.jsx)("button",{type:"button",onClick:function(){return function(){var e=g.filter((function(e){return e.itemId!==t.itemId}));d(e),f(!1)}()},className:"product-purchase__fav-button",children:Object(j.jsx)("div",{className:"product-purchase__fav-icon product-purchase__fav-icon--active"})}):Object(j.jsx)("button",{type:"button",onClick:function(){return g.push(t),d(g),void f(!0)},className:"product-purchase__fav-button",children:Object(j.jsx)("div",{className:"product-purchase__fav-icon product-purchase__fav-icon--pasive"})})]})]})}))),Ne=(c(97),Object(s.memo)((function(e){var t=e.productDetails,c=e.product,s=e.handleProductChange,a=t.screen,n=t.resolution,r=t.processor,i=t.ram,o=t.color,l=t.colorsAvailable,d=t.capacity,u=t.capacityAvailable;return Object(j.jsx)("div",{className:" page__product-sidebar grid__item--tablet_8-12 grid__item--desktop_14-24 ",children:Object(j.jsxs)("div",{className:"product-sidebar",children:[Object(j.jsx)(ve,{colorsAvailable:l,currentColor:o,handleProductChange:s}),Object(j.jsxs)("div",{className:"product-sidebar__tech-info",children:[Object(j.jsx)(xe,{capacityAvailable:u,currentCapacity:d,handleProductChange:s}),Object(j.jsx)(ge,{phone:c,phoneDetails:t}),Object(j.jsxs)("div",{className:"product-sidebar__info",children:[Object(j.jsxs)("div",{className:"product-sidebar__characteristic",children:[Object(j.jsx)("p",{className:"product-sidebar__property",children:"Screen"}),Object(j.jsx)("p",{className:"product-sidebar__value",children:a})]}),Object(j.jsxs)("div",{className:"product-sidebar__characteristic",children:[Object(j.jsx)("p",{className:"product-sidebar__property",children:"Resolution"}),Object(j.jsx)("p",{className:"product-sidebar__value",children:n})]}),Object(j.jsxs)("div",{className:"product-sidebar__characteristic",children:[Object(j.jsx)("p",{className:"product-sidebar__property",children:"Processor"}),Object(j.jsx)("p",{className:"product-sidebar__value",children:r})]}),Object(j.jsxs)("div",{className:"product-sidebar__characteristic",children:[Object(j.jsx)("p",{className:"product-sidebar__property",children:"RAM"}),Object(j.jsx)("p",{className:"product-sidebar__value",children:i})]})]})]})]})})}))),ye=(c(98),function(e){var t=e.images,c=e.name,s=t[0].split("/");s.pop();var a=s.join("/"),n={customPaging:function(e){return Object(j.jsx)("div",{className:"product-slider__dots-block",children:Object(j.jsx)("img",{className:"product-slider__dots-img",src:"".concat(a,"/0").concat(e,".jpg"),alt:"phone"})})},dots:!0,dotsClass:"slick-dots1 slick-thumb1",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,adaptiveHeight:!0};return Object(j.jsx)("div",{className:" page__product-slider grid__item--tablet_1-7 grid__item--desktop_1-12 ",children:Object(j.jsx)("div",{className:"product-slider",children:Object(j.jsx)(ae.a,Object(T.a)(Object(T.a)({},n),{},{className:"product-slider__item",children:t.map((function(e){return Object(j.jsx)("div",{className:"product-slider__wrapper",children:Object(j.jsx)("img",{className:"product-slider__img",src:e,alt:c})},e)}))}))})})}),ke=(c(99),function(e){var t=e.screen,c=e.resolution,s=e.processor,a=e.ram,n=e.capacity,r=e.camera,i=e.zoom,o=e.cell;return Object(j.jsx)("div",{className:"grid__item--tablet_1-12 grid__item--desktop_14-24",children:Object(j.jsxs)("div",{className:"product__tech-specs",children:[Object(j.jsx)("h3",{className:"product__tech-specs--title",children:"Tech specs"}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Screen"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:t})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Resolution"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:c})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Processor"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:s})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"RAM"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:a})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Built in memory"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:n})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Camera"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:r})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Zoom"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:i})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Cell"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:o.join(", ")})]})]})})}),Ce=(c(100),function(e){var t=e.products,c=e.handleProductChange;return Object(j.jsxs)("section",{className:"product-recommended-slider",children:[Object(j.jsx)(Z,{children:"You may also like"}),Object(j.jsx)(ue,{children:t.map((function(e){return Object(j.jsx)(q,{mixClass:"card--slider",phone:e,handleProductChange:c},e.id)}))})]})}),we=(c(101),Object(s.memo)((function(){var e=Object(s.useState)(),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(),r=Object(l.a)(n,2),i=r[0],d=r[1],u=Object(s.useState)(),b=Object(l.a)(u,2),m=b[0],p=b[1],_=Object(o.o)().productId;Object(s.useEffect)((function(){X(_||"").then((function(e){var t=e.data,c=t.phone,s=t.phoneDetails;a(JSON.parse(c)),d(JSON.parse(s))})).catch((function(e){return window.console.log(e)})),ee(_||"").then((function(e){return p(e.data)})).catch((function(e){return window.console.log(e)}))}),[]);var h=Object(s.useCallback)((function(e){X(e||"").then((function(e){var t=e.data,c=t.phone,s=t.phoneDetails;a((function(){return JSON.parse(c)})),d((function(){return JSON.parse(s)}))})).catch((function(e){return window.console.log(e)})),ee(e||"").then((function(e){return p(e.data)})).catch((function(e){return window.console.log(e)}))}),[]);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(D,{}),Object(j.jsx)(F,{}),c&&i&&Object(j.jsx)(Z,{children:i.name}),Object(j.jsx)("div",{className:"product-details__demo grid",children:c&&i&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ye,{images:i.images,name:i.name}),Object(j.jsx)(Ne,{productDetails:i,product:c,handleProductChange:h})]})}),c&&i&&Object(j.jsxs)("div",{className:"grid",children:[Object(j.jsx)(he,{description:i.description}),Object(j.jsx)(ke,{screen:i.screen,resolution:i.resolution,processor:i.processor,ram:i.ram,capacity:i.capacity,camera:i.camera,zoom:i.zoom,cell:i.cell})]}),m&&Object(j.jsx)(Ce,{handleProductChange:h,products:m})]})}))),Se=(c(102),c.p+"static/media/dropdown.6f403b12.svg"),Ie=(c(103),function(e){var t=e.title,c=e.list,a=e.current,n=e.mixClass,r=e.updater,i=Object(s.useState)(!1),o=Object(l.a)(i,2),d=o[0],b=o[1];return Object(j.jsxs)("div",{className:"custom-select ".concat(n),children:[Object(j.jsx)("p",{className:"custom-select__title",children:t}),Object(j.jsxs)("button",{type:"button",className:u()("custom-select__header",{"custom-select__header--active":d}),"aria-label":"".concat(t," dropdown menu"),onClick:function(){return b((function(e){return!e}))},children:[Object(j.jsx)("p",{className:"custom-select__current",children:a}),Object(j.jsx)("img",{className:u()("custom-select__dropdown",{"custom-select__dropdown--active":d}),src:Se,alt:"click to ","aria-hidden":"true"})]}),Object(j.jsx)("ul",{className:u()("custom-select__list",{"custom-select__list--hidden":!d}),children:c.map((function(e){return Object(j.jsx)("li",{className:"custom-select__list-item",children:Object(j.jsx)("button",{type:"button",className:u()("custom-select__list-btn",{"custom-select__list-btn--active":a===e}),onClick:function(){return r(e),void b(!1)},children:e})},e)}))})]})}),Te=["Name: A - Z","Newest","Oldest","Price: Lowest first","Price: Highest first"],Me={"Name: A - Z":"alph",Newest:"newest",Oldest:"oldest","Price: Lowest first":"priceLowest","Price: Highest first":"priceHighest"},Pe=["8","16","32","64"],Ae=function(e){var t=e.pageTitle,c=Object(s.useState)("Name: A - Z"),a=Object(l.a)(c,2),n=a[0],r=a[1],i=Object(s.useState)("16"),o=Object(l.a)(i,2),d=o[0],u=o[1],b=Object(s.useState)("1"),m=Object(l.a)(b,1)[0],p=Object(s.useState)(null),_=Object(l.a)(p,2),h=_[0],O=_[1],x=Object(s.useState)([]),f=Object(l.a)(x,2),v=f[0],g=f[1];return Object(s.useEffect)((function(){V().then((function(e){return e.data})).then(O)}),[]),Object(s.useEffect)((function(){(function(e,t,c){return Q("/phones?sortBy=".concat(e,"&itemsNum=").concat(t,"&page=").concat(c))})(Me[n],d,m).then((function(e){return e.data})).then(g)}),[n,d]),Object(j.jsxs)("div",{className:"product-page",children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(D,{}),Object(j.jsx)(C,{mixClass:"product-page__title",children:t}),Object(j.jsx)("p",{className:"product-page__amount",children:"".concat(h," models")}),Object(j.jsxs)("div",{className:"product-page__filters",children:[Object(j.jsx)(Ie,{title:"Sort by",list:Te,current:n,mixClass:"custom-select--sort-by",updater:r}),Object(j.jsx)(Ie,{title:"Items on page",list:Pe,current:d,mixClass:"custom-select--items-num",updater:u})]})]}),Object(j.jsx)("div",{children:JSON.stringify(v)}),Object(j.jsx)("div",{children:"Pagination"})]})},Le=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{}),Object(j.jsx)("main",{className:"page__main",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(me,{pageTitle:"Welcome to Nice Gadgets store!"})}),Object(j.jsx)(o.a,{path:"phones",element:Object(j.jsx)(Ae,{pageTitle:"Mobile Phones"})}),Object(j.jsx)(o.a,{path:"tablets",element:Object(j.jsx)(Ae,{pageTitle:"Tablets"})}),Object(j.jsx)(o.a,{path:"accessories",element:Object(j.jsx)(Ae,{pageTitle:"Accessories"})}),Object(j.jsx)(o.a,{path:"/cart",element:Object(j.jsx)(E,{pageTitle:"Cart"})}),Object(j.jsx)(o.a,{path:"/favourites",element:Object(j.jsx)(R,{pageTitle:"Favourites"})}),Object(j.jsx)(o.a,{path:"product/:productId",element:Object(j.jsx)(we,{})}),Object(j.jsx)(o.a,{path:"*",element:Object(j.jsx)(_e,{})})]})}),Object(j.jsx)(k,{})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(Le,{})})})}),document.getElementById("root"))}]),[[104,1,2]]]);
//# sourceMappingURL=main.0819fb31.chunk.js.map