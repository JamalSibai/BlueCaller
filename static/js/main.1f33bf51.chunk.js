(this["webpackJsonpbluecaller-web"]=this["webpackJsonpbluecaller-web"]||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(33),i=c.n(n),l=(c(42),c.p,c(43),c(2)),r=c(5),o=c(7),d=c(0);var j=function(){var e=Object(l.f)();return Object(d.jsx)("header",{id:"header",className:"header-one",children:Object(d.jsx)("div",{className:"site-navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-lg-12",children:Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark p-0",children:[Object(d.jsx)("div",{id:"navbar-collapse",className:" navbar-collapse",children:Object(d.jsx)("ul",{className:"nav navbar-nav mr-auto",children:Object(d.jsx)("li",{className:"nav-item dropdown active",children:Object(d.jsx)("a",{onClick:function(){e.push("/login")},className:"nav-link dropdown-toggle",children:"Admin"})})})}),Object(d.jsx)("div",{id:"navbar-collapse",className:" navbar-collapse",children:Object(d.jsx)("ul",{className:"nav navbar-nav mr-auto",children:Object(d.jsx)("li",{className:"nav-item dropdown active",children:Object(d.jsx)("a",{onClick:function(){e.push("/")},className:"nav-link dropdown-toggle",children:"Blue Caller"})})})})]})})})})})})},b=c(18),h=c(19),m=c(21),O=c(20),x=function(e){Object(m.a)(c,e);var t=Object(O.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("footer",{id:"footer",className:"footer bg-overlay",children:[Object(d.jsx)("div",{className:"footer-main",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row justify-content-between",children:[Object(d.jsxs)("div",{className:"col-lg-4 col-md-6 footer-widget footer-about",children:[Object(d.jsx)("h3",{className:"widget-title",children:"About Us"}),Object(d.jsx)("p",{children:"Need a quick and easy way to check calories, carbs and fat? The CalorieKing Food Database is America\u2019s best and most reliable. Trusted by health professionals everywhere, it contains over 70,000 foods and includes 260 fast food chains and restaurants. The CalorieKing Calorie Counter for iPhone has a user-friendly interface that allows a quick comparison, of calories, carbs and fat, between foods."}),Object(d.jsx)("div",{className:"footer-social",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://facebook.com/themefisher","aria-label":"Facebook",children:Object(d.jsx)("i",{className:"fab fa-facebook-f"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://twitter.com/themefisher","aria-label":"Twitter",children:Object(d.jsx)("i",{className:"fab fa-twitter"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://instagram.com/themefisher","aria-label":"Instagram",children:Object(d.jsx)("i",{className:"fab fa-instagram"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://github.com/themefisher","aria-label":"Github",children:Object(d.jsx)("i",{className:"fab fa-github"})})})]})})]}),Object(d.jsxs)("div",{className:"col-lg-4 col-md-6 footer-widget mt-5 mt-md-0",children:[Object(d.jsx)("h3",{className:"widget-title",children:"Working Hours"}),Object(d.jsx)("div",{className:"working-hours",children:"Freelancers work 7 days a week, every day. Download the BlueCaller App if you have an emergency."}),Object(d.jsx)("div",{className:"working-hours",children:"Phone Number : +961 76630304"}),Object(d.jsx)("div",{className:"working-hours",children:"Email : office@BlueCaller.com"})]})]})})}),Object(d.jsx)("div",{className:"copyright",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"row align-items-center",children:Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("div",{className:"copyright-info text-center text-md-left",children:Object(d.jsxs)("span",{children:["Copyright \xa9",Object(d.jsx)("script",{children:"document.write(new Date().getFullYear());"}),", Designed & Developed by",Object(d.jsx)("a",{href:"https://themefisher.com",children:"Themefisher"})]})})})}),Object(d.jsx)("div",{id:"back-to-top","data-spy":"affix","data-offset-top":"10",className:"back-to-top position-fixed",children:Object(d.jsx)("button",{className:"btn btn-primary",title:"Back to Top",children:Object(d.jsx)("i",{className:"fa fa-angle-double-up"})})})]})})]})}}]),c}(a.Component),p=c.p+"static/media/banner1.1c36a11c.jpg";var u=function(e){return Object(d.jsx)("div",{id:"banner-area",className:"banner-area",style:{backgroundImage:"url(".concat(p,")")},children:Object(d.jsx)("div",{className:"banner-text",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-lg-12",children:Object(d.jsx)("div",{className:"banner-heading",children:Object(d.jsx)("h1",{className:"banner-title",children:e.props})})})})})})})},g=c(3),v=c.n(g),f=c(10),N=c(6),A=c.n(N);var D=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(o.a)(n,2),r=i[0],j=i[1],b=Object(l.f)(),h=function(){var e=Object(f.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=c){e.next=2;break}return e.abrupt("return",alert("Enter Email"));case 2:if(""!=r){e.next=4;break}return e.abrupt("return",alert("Enter Password"));case 4:return e.prev=4,e.next=7,A.a.post("https://bluecaller.tk/api/auth/adminLogin",{email:c,password:r}).then((function(e){localStorage.setItem("token",e.data.access_token),b.push("/adminHome")}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.log(e.t0);case 12:localStorage.getItem("token")||alert("Invalid credentials");case 13:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("section",{id:"main-container",className:"main-container",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row ",children:[Object(d.jsx)("div",{className:"col-md-3"}),Object(d.jsx)("div",{className:"col-md-6 ",children:Object(d.jsxs)("div",{id:"contact-form",children:[Object(d.jsx)("div",{className:"error-container"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("input",{className:"form-control form-control-email",name:"email",id:"email",placeholder:"",type:"email",required:"",onChange:function(e){s(e.target.value)}})]})}),Object(d.jsxs)("div",{className:"col-md-12",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"password"}),Object(d.jsx)("input",{className:"form-control form-control-name",name:"password",id:"password",placeholder:"",type:"password",required:"",onChange:function(e){j(e.target.value)}})]}),Object(d.jsx)("div",{className:"text-right",children:Object(d.jsx)("button",{className:"btn btn-primary solid blank",onClick:h,children:"Login"})})]})]})]})})]})})})};var w=function(){var e=Object(a.useState)("Admin Login"),t=Object(o.a)(e,2),c=t[0];return t[1],Object(a.useEffect)((function(){localStorage.getItem("token")&&localStorage.clear()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{}),Object(d.jsx)(u,{props:c}),Object(d.jsx)(D,{}),Object(d.jsx)(x,{})]})},k=c.p+"static/media/bg1.3834e6fe.jpg",y=c.p+"static/media/bg2.f810d9a8.jpg",S=c.p+"static/media/bg3.9d41453d.jpg",C=function(e){Object(m.a)(c,e);var t=Object(O.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"body-inner",children:[Object(d.jsx)("div",{className:"banner-carousel-item",style:{backgroundImage:"url(".concat(k,")")},children:Object(d.jsx)("div",{className:"slider-content",children:Object(d.jsx)("div",{className:"container h-100",children:Object(d.jsx)("div",{className:"row align-items-center h-100",children:Object(d.jsxs)("div",{className:"col-md-12 text-center",children:[Object(d.jsx)("h2",{className:"slide-title","data-animation-in":"slideInLeft",children:"excellence is our goal"}),Object(d.jsx)("h3",{className:"slide-sub-title","data-animation-in":"slideInRight",children:"Blue Caller Mobile App"})]})})})})}),Object(d.jsx)("div",{className:"banner-carousel-item",style:{backgroundImage:"url(".concat(y,")")},children:Object(d.jsx)("div",{className:"slider-content text-left",children:Object(d.jsx)("div",{className:"container h-100",children:Object(d.jsx)("div",{className:"row align-items-center h-100",children:Object(d.jsxs)("div",{className:"col-md-12",children:[Object(d.jsx)("h3",{className:"slide-title","data-animation-in":"fadeIn",children:"Your Choice is Simple"}),Object(d.jsx)("h3",{className:"slide-sub-title","data-animation-in":"slideInLeft"})]})})})})}),Object(d.jsx)("div",{className:"banner-carousel-item",style:{backgroundImage:"url(".concat(S,")")},children:Object(d.jsx)("div",{className:"slider-content text-right",children:Object(d.jsx)("div",{className:"container h-100",children:Object(d.jsx)("div",{className:"row align-items-center h-100",children:Object(d.jsxs)("div",{className:"col-md-12",children:[Object(d.jsx)("h2",{className:"slide-title","data-animation-in":"slideInDown",children:"Meet Our Engineers"}),Object(d.jsx)("h3",{className:"slide-sub-title","data-animation-in":"fadeIn"}),Object(d.jsx)("p",{className:"slider-description lead","data-animation-in":"slideInRight",children:"We will create opportunities"})]})})})})})]}),Object(d.jsx)("section",{className:"call-to-action-box no-padding",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"action-style-box",children:Object(d.jsxs)("div",{className:"row align-items-center",children:[Object(d.jsx)("div",{className:"col-md-8 text-center text-md-left",children:Object(d.jsx)("div",{className:"call-to-action-text",children:Object(d.jsx)("h3",{className:"action-title",children:"We understand your needs for Blue Collar Workers"})})}),Object(d.jsx)("div",{className:"col-md-4 text-center text-md-right mt-3 mt-md-0",children:Object(d.jsx)("div",{className:"call-to-action-btn",children:Object(d.jsx)("a",{className:"btn btn-dark",href:"https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40jamal_sibai/BlueCaller-49156ac34542439dbaa5faf6a1129d72-signed.apk",children:"Download bluecaller"})})})]})})})}),Object(d.jsx)("section",{id:"ts-features",className:"ts-features",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-lg-6",children:[Object(d.jsxs)("div",{className:"ts-intro",children:[Object(d.jsx)("h2",{className:"into-title",children:"About Us"}),Object(d.jsx)("h3",{className:"into-sub-title",children:"We Provide a Marketplace for Freelancers"}),Object(d.jsx)("p",{children:"BlueCaller Application Provides a marketplace based on ratings and customers feedback, the app is ment to be an push to the economic situation in lebanon. Both freelancers and customers will meet there needs either by finding a job or getting work done."})]}),Object(d.jsx)("div",{className:"gap-20"}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("div",{className:"ts-service-box",children:[Object(d.jsx)("span",{className:"ts-service-icon",children:Object(d.jsx)("i",{className:"fas fa-trophy"})}),Object(d.jsx)("div",{className:"ts-service-box-content",children:Object(d.jsx)("h3",{className:"service-box-title",children:"We've Rating Based Service"})})]})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("div",{className:"ts-service-box",children:[Object(d.jsx)("span",{className:"ts-service-icon",children:Object(d.jsx)("i",{className:"fas fa-sliders-h"})}),Object(d.jsx)("div",{className:"ts-service-box-content",children:Object(d.jsx)("h3",{className:"service-box-title",children:"We Build Connectons"})})]})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("div",{className:"ts-service-box",children:[Object(d.jsx)("span",{className:"ts-service-icon",children:Object(d.jsx)("i",{className:"fas fa-thumbs-up"})}),Object(d.jsx)("div",{className:"ts-service-box-content",children:Object(d.jsx)("h3",{className:"service-box-title",children:"Guided by Commitment"})})]})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("div",{className:"ts-service-box",children:[Object(d.jsx)("span",{className:"ts-service-icon",children:Object(d.jsx)("i",{className:"fas fa-users"})}),Object(d.jsx)("div",{className:"ts-service-box-content",children:Object(d.jsx)("h3",{className:"service-box-title",children:"A Team of Professionals"})})]})})]})]})]}),Object(d.jsxs)("div",{className:"col-lg-6 mt-4 mt-lg-0",children:[Object(d.jsx)("h3",{className:"into-sub-title",children:"Our Values"}),Object(d.jsx)("p",{children:"We expect to help freelancers to benefit from the app, while providing a professional and high qaulity services."}),Object(d.jsxs)("div",{className:"accordion accordion-group",id:"our-values-accordion",children:[Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-header p-0 bg-transparent",id:"headingOne",children:Object(d.jsx)("h2",{className:"mb-0",children:Object(d.jsx)("button",{className:"btn btn-block text-left",type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Safety"})})}),Object(d.jsx)("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#our-values-accordion",children:Object(d.jsx)("div",{className:"card-body",children:"Both Freelancers and Customers are Commited by an appointment date and place."})})]}),Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-header p-0 bg-transparent",id:"headingTwo",children:Object(d.jsx)("h2",{className:"mb-0",children:Object(d.jsx)("button",{className:"btn btn-block text-left collapsed",type:"button","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Customer Service"})})}),Object(d.jsx)("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#our-values-accordion",children:Object(d.jsx)("div",{className:"card-body",children:"We are available at all times via email and all working hours via phone."})})]})]})]})]})})}),Object(d.jsx)("section",{id:"facts",className:"facts-area dark-bg",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"facts-wrapper",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0"}),Object(d.jsxs)("div",{className:"col-md-3 col-sm-6 ts-facts",children:[Object(d.jsx)("div",{className:"ts-facts-img",children:Object(d.jsx)("img",{loading:"lazy",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAk1BMVEUAAAD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgBmOFLtAAAAMXRSTlMA/ifk8/bvKiQN3hAf2+EE59YHGByXMxTCQy7Oq51LRwuBeWKH67uyazs2plTSjHNY1aCqQwAAAvlJREFUSMfVlumSojAUhTlkASSEgCII7mu7dc/7P92YgI0WtmLzY2pOlVUH4lfe3CXReiZnu7WtX+oQAdGh9L4rrnL9FuxIYbuFGmkfT1BrEr9k/zAc4/gIdro82AFkFGhFEj3nFfsBJKFlhQnwcYF7GKUDrXTE5ItEhGtgUdqFdr6kolpyOXkKmy1+3MSwdgt2JRz6HE534Kf68cSRyU1LeJBB7ssClVXZE6AnWsFOgXOuzfSYZcepdvkZ9NAG3gfIXG2WHBfxpclShujwGp4S7PrGAAmlCWB+u78Dmb6CVxyTcqNjrNPNJl1jXG5/Ar56Di8Z1nPjvAK5xbmVo/DMi/kabPkEjj+Br6pxRYDc59zPEYhq9Qv4jH+CPR1ZaFVwhEqRuLad3tNclHCzNdQlJzWsCECUgStNFY57ruFmawSmNb7DHuqwhwjEXR0lDxpwHqEwL2vY1wnzNVzLLoBo0Jz8rH/7wg0wcyh1Zgjc2/f9DJtTY/LH3v0uFBgHOIO6/yFvDH5qTv6d4iSSJIqIjJL7U6c6H75lJr+hvm339ae5sqi/H06AVfMsSf1yJP00bDaxjrTaw2b2aKgvE1wUluhlg+bqbGNyNNhCreLmsjhTERISCnoWDxp5pbAdWGOAFVEyb4Tt2qHlulZou42w50lUMGBsJZxzQLrWG3IlcMESyxNCjChx3oEdQkcXzHt0FMfeA92mxSa8irQx396EohKt3cS7hanzA2wrKEmMAGIkFZTdDqZyGPpagnNhTDiUtCXMem5VEs6rEro99i7sce79R3BwHUPOr+MZtIUpGQlXK6c0N0aMSNtsE5CgpyUBaUxAQFrDjDIjgBlR1hqmamYbDSkdlm6maOeEvV+q0PN+X2ebRGn6D2ATducO61Sq7k3SvT27D0b3hHU/DJh8D5ashkXAhu/AQ3bzJyccY/nO0bvEOKyfpuAL4flG8YE9OvTZIS7XPbHgmN5exktAye+r5cF1c7++DK1berZTqK+3Zw5qN6vYv3ZgOb4iX8S/AAAAAElFTkSuQmCC",alt:"facts-img"})}),Object(d.jsxs)("div",{className:"ts-facts-content",children:[Object(d.jsx)("h2",{className:"ts-facts-num",children:Object(d.jsx)("span",{className:"counterUp","data-count":"1789",children:"0"})}),Object(d.jsx)("h3",{className:"ts-facts-title",children:"Total Jobs Done"})]})]}),Object(d.jsxs)("div",{className:"col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0",children:[Object(d.jsx)("div",{className:"ts-facts-img",children:Object(d.jsx)("img",{loading:"lazy",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAn1BMVEUAAAD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgD/tgB21ecLAAAANHRSTlMAKvvjEOzw6PkN9AkmIAbmNhXTPhu1p93ZwIsC4K+gmzG7bMlmYV5FzYJVdlpOkohwxKqVEXkOSAAAA39JREFUSMedl+diozAQhEUTQlTTwRRjXOOSNu//bCeTcr4ERHLzAwutPjDaWQnIpOzdQRXyjx75vR5BNSHK1r9nrRA7S2iHZ/uXqLtvwN2hxdHs3V+gi20IwHCIkGMACLeLn7JRBxStyd9gbrYF0EU/Yx8YcLBIiDcYIVkKmj38hN2qSFhueQYUIqTAsMgzS6Bu59knYBvn2JMmXQzPnzYkYFm8BZ7m2B0g8lqLw8J6z9lCdNaErIHdzDz7aMTPCdf73iNO4tjAl8/5EdD67pii0/92einSY9drwFHGOiZNTAAq/NWdYw5QAeQNNR0J3KLUY+VcdryL70qk4cnx4sT2Fe00q5jqkB7PErN1J3E6lNZKNZVJeMM6af15HdtMBpuZVC5PaCaDPS4zzkU/GQuxksMBQglsy2F7EtYjDZEiVQQt0kevmnKgyg2J8grgqT0Km1kOmL45LhEA8swchYmlKAGlgTKhj6hFpkQpkUgetSi1/jdK9DlYl5nXoJJ6X1BDav2MK5Ki4xmRqeeRZD3nvRRO+VayKPNUCq/VVrLOqGspvEJI/rvo7Izup2J7mtnyteIJxXIiVOBJhGSKGXuY2v9YTORalui9Uf/0KJdkRrGvbkZXVtWPyax28IORNPjYkXkpQPUtJW4IKGReGwD5F3p1ALCZZ60X9pqg+selpwpFy16sWTg2jUBvwdPPmweJimYRGOb8hOmF+krsNYORrCPXfbgeDLC1Ta5qoctJT48eM9xyFbSGyqhhcIA2wVJkCtljpHuTvnZ3qQlwiiy4bbP7lgqyvdyIIINBVZjpzh3z9yKqAWbk6S5o0dnvbn53ut2hdffXg8mAOlp8naZLAWj102APJ3tz4p4yRvdvns2cwQPrlwooLvG9Bc4hEL46n8XHcauOGtcS9bCz8uhzbHkAwrP7Mb/rDOgfF/eJRe4SxYDjMkMhbo7TvRNOBVCtreFha6A72f86JUFChrs2KIk4sb+4MAFqXbAFwu23WnN8lDlWosHyEr7zvbp7JBbZ4OCQ77qwm8MdZ9UD7DLmxAPOpGbniU8McK2qNAo8kjGd2QuhEzUeUZhUyASNJlYNg0CzJi78HAyb8vPEX7M0EHUCLnH8eJctJ2CVqL6rf5flJdh6t5a3QeJZI0NcXyUcvjaiisGohoYBVo2N8MFJzZk6Jk7f+xnlowMYr/8ACzRgUeOwupsAAAAASUVORK5CYII=",alt:"facts-img"})}),Object(d.jsxs)("div",{className:"ts-facts-content",children:[Object(d.jsx)("h2",{className:"ts-facts-num",children:Object(d.jsx)("span",{className:"counterUp","data-count":"647",children:"0"})}),Object(d.jsx)("h3",{className:"ts-facts-title",children:"Freelancers "})]})]})]})})})})]})}}]),c}(a.Component);var I=function(){return Object(a.useEffect)((function(){localStorage.getItem("token")&&localStorage.clear()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{}),Object(d.jsx)(C,{}),Object(d.jsx)(x,{})]})};var E=function(){var e=Object(l.f)();return Object(d.jsx)("header",{id:"header",className:"header-one",children:Object(d.jsx)("div",{className:"site-navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-lg-12",children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark p-0",children:Object(d.jsx)("div",{id:"navbar-collapse",className:"collapse navbar-collapse",children:Object(d.jsx)("ul",{className:"nav navbar-nav mr-auto",children:Object(d.jsx)("li",{className:"nav-item dropdown active",children:Object(d.jsx)("a",{onClick:function(){e.push("/")},className:"nav-link dropdown-toggle",children:"Blue Caller"})})})})})})})})})})};var F=function(e){var t=Object(l.f)();return Object(d.jsx)("div",{id:"banner-area",className:"banner-area",style:{backgroundImage:"url(".concat(p,")")},children:Object(d.jsx)("div",{className:"banner-text",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-lg-12",children:Object(d.jsxs)("div",{className:"banner-heading",children:[Object(d.jsx)("h1",{className:"banner-title",children:e.props}),Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{className:"breadcrumb justify-content-center",children:[Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)("a",{onClick:function(){t.push("/adminHome")},children:"Home"})}),Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)("a",{onClick:function(){t.push("/Statistics")},children:"Statistics"})}),Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)("a",{onClick:function(){t.push("/login")},children:"Logout"})})]})})]})})})})})})};var B=function(e){var t=Object(l.f)(),c=function(){var t=Object(f.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.function(e.props.id),t.next=3,A.a.post("https://bluecaller.tk/api/auth/remove-freelancer",{id:e.props.id},{headers:{Authorization:" bearer"+localStorage.getItem("token"),Accept:"application/json"}}).then((function(e){console.log(e),console.log(e.data)}));case 3:alert("Freelancer removed successfuly");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"col-md-4 ",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"delete",onClick:c,children:Object(d.jsx)("h2",{className:"deletetxt",children:"Remove"})}),Object(d.jsxs)("div",{className:"ts-service-box-bg text-center h-100 ",onClick:function(){localStorage.setItem("freelancer_id",e.props.id),t.push("/freelancerAppointment")},children:[Object(d.jsx)("img",{src:e.props.image,alt:"Avatar",className:"image"}),Object(d.jsxs)("div",{className:"ts-service-box-content",children:[Object(d.jsx)("h4",{children:e.props.name}),Object(d.jsxs)("p",{children:["email: ",e.props.email]}),Object(d.jsxs)("p",{children:["Phone: +961 ",e.props.phone]})]})]})]})})},T=c(14),J=c.n(T);var U=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(l.f)();Object(a.useEffect)((function(){console.log(localStorage.getItem("token")),i(),localStorage.getItem("token")||n.push("/login")}),[]);var i=function(){var e=Object(f.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://bluecaller.tk/api/auth/getallfreelancers",{headers:{Authorization:" bearer"+localStorage.getItem("token"),Accept:"application/json"}}).then((function(e){console.log(e),console.log(e.data),s(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function r(e){console.log("in adminHome"+e);var t=c.filter((function(t){return t.id!=e}));s(t),console.log(t)}return c?Object(d.jsxs)("div",{children:[Object(d.jsx)(E,{}),Object(d.jsx)(F,{props:"Admin"}),Object(d.jsx)("section",{id:"main-container",className:"main-container",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"col-12",children:[Object(d.jsx)("h2",{className:"section-title",children:"Freelancers"}),Object(d.jsx)("h3",{className:"section-sub-title",children:"Find Freelancers Appointments"})]}),Object(d.jsx)("div",{className:"row",children:c.map((function(e){return Object(d.jsx)(B,{props:e,function:r},e.id)}))})]})}),Object(d.jsx)(x,{})]}):Object(d.jsx)(J.a,{type:"bars",color:"#ffa600",height:100,width:100,className:"pie"})};var z=function(e){var t=function(){var t=Object(f.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.filterData(e.props.id),t.next=3,A.a.post("https://bluecaller.tk/api/auth/delete-appointment",{id:e.props.id},{headers:{Authorization:" bearer"+localStorage.getItem("token"),Accept:"application/json"}}).then((function(e){console.log(e),console.log(e.data)}));case 3:alert("Appointment removed successfuly");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:" col-md-4",children:Object(d.jsxs)("div",{className:"ts-pricing-box",children:[Object(d.jsx)("div",{className:"ts-pricing-header",children:Object(d.jsx)("h2",{className:"ts-pricing-name",children:e.props.user[0].name})}),Object(d.jsx)("div",{className:"ts-pricing-features",children:Object(d.jsxs)("ul",{className:"list-unstyled",children:[Object(d.jsxs)("li",{children:["Date: ",e.props.date]}),Object(d.jsxs)("li",{children:["PhoneNumber: +961 ",e.props.user[0].phone]}),Object(d.jsxs)("li",{children:["Email: ",e.props.user[0].email]}),Object(d.jsxs)("li",{children:["Reserved at:"," ",JSON.stringify(e.props.updated_at).substring(1,10)]})]})}),Object(d.jsx)("div",{className:"plan-action",children:Object(d.jsx)("a",{href:"https://maps.google.com/?q= ".concat(e.props.latitude," ,").concat(e.props.longitude),className:"btn btn-dark",children:"location"})}),Object(d.jsx)("div",{className:"plan-action",onClick:t,children:Object(d.jsx)("div",{className:"btn btn-primary",children:"Delete"})})]})})};var q=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(l.f)();Object(a.useEffect)((function(){r(),localStorage.getItem("freelancer_id")||n.push("/login")}),[]);var i=function(e){console.log("infap");var t=c.filter((function(t){return t.id!==e}));s(t)},r=function(){var e=Object(f.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("https://bluecaller.tk/api/auth/getfreelancerAppointments",{freelancer_id:localStorage.getItem("freelancer_id")},{headers:{Authorization:" bearer"+localStorage.getItem("token"),Accept:"application/json"}}).then((function(e){console.log(e),console.log(e.data),s(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c?Object(d.jsxs)("div",{children:[Object(d.jsx)(E,{}),Object(d.jsx)(F,{props:"Freelancer Appointments"}),Object(d.jsx)("section",{id:"main-container",className:"main-container",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("h3",{className:"section-sub-title",children:"Freelancers Appointments"})}),Object(d.jsx)("div",{className:"row",children:c.map((function(e){return Object(d.jsx)(z,{props:e,filterData:i},e.id)}))})]})}),Object(d.jsx)(x,{})]}):Object(d.jsx)(J.a,{type:"bars",color:"#ffa600",height:100,width:100,className:"pie"})},L=c(36),R=c.n(L),M=c(37),H=c.n(M);var P=function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.props.User.name}),Object(d.jsx)("td",{children:e.props.User.email}),Object(d.jsx)("td",{children:e.props.count}),Object(d.jsx)("td",{children:e.props.countFinished}),Object(d.jsx)("td",{children:e.props.count-e.props.countFinished})]})};var Y=function(){var e=Object(l.f)(),t=Object(a.useState)(null),c=Object(o.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),j=r[0],b=r[1],h=Object(a.useState)(""),m=Object(o.a)(h,2),O=m[0],p=m[1],u=Object(a.useState)(""),g=Object(o.a)(u,2),N=(g[0],g[1]),D=0,w=0;Object(a.useEffect)((function(){y(),k(),localStorage.getItem("token")||e.push("/login")}),[]);var k=function(){var e=Object(f.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://bluecaller.tk/api/auth/get-satistics-info",{headers:{Authorization:" bearer"+localStorage.getItem("token"),Accept:"application/json"}}).then((function(e){console.log(e.data),n(e.data);for(var t=0;t<e.data.length;t++)0==D?D=e.data[t].count:D+=e.data[t].count;b(D);for(var c=0;c<e.data.length;c++)0==w?w=e.data[c].countFinished:w+=e.data[c].countFinished;p(w)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://bluecaller.tk/api/auth/freelancer-region",{headers:{Authorization:" bearer"+localStorage.getItem("token"),Accept:"application/json"}}).then((function(e){console.log(e.data),N(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s?Object(d.jsxs)("div",{children:[Object(d.jsx)(E,{}),Object(d.jsx)(F,{props:"Statistics"}),Object(d.jsx)("section",{id:"main-container",className:"main-container",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("h3",{className:"section-sub-title",children:"Statistics"})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{className:"thead-dark",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Name"}),Object(d.jsx)("th",{scope:"col",children:"Email"}),Object(d.jsx)("th",{scope:"col",children:"App."}),Object(d.jsx)("th",{scope:"col",children:"App. Done"}),Object(d.jsx)("th",{scope:"col",children:"App. togo"})]})}),Object(d.jsxs)("tbody",{children:[s.map((function(e){return Object(d.jsx)(P,{props:e},e.User.id)})),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col"}),Object(d.jsx)("th",{scope:"col"}),Object(d.jsx)("th",{scope:"col",children:j}),Object(d.jsx)("th",{scope:"col",children:O}),Object(d.jsx)("th",{scope:"col",children:j-O})]})]})]})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("div",{children:Object(d.jsx)(H.a,{highcharts:R.a,options:{chart:{type:"pie"},title:{text:"Regions"},credits:{enabled:!1},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!1}},series:[{name:"",color:"#006600",lineWidth:1,marker:{enabled:!1,symbol:"circle",radius:3,states:{hover:{enabled:!0,lineWidth:1}}},data:[{y:23,sliced:!1,name:"Akkar",color:"#003f5c"},{y:33,name:"Baalbeck-Hermel",sliced:!1,color:"#2f4b7c"},{y:100,name:"Beirut",sliced:!1,color:"#665191"},{y:53,name:"Mount Lebanon",sliced:!1,color:"#a05195"},{y:53,name:"Bekaa",sliced:!1,color:"#d45087"},{y:30,name:"North Lebanon",sliced:!1,color:"#f95d6a"},{y:10,name:"Nabatiyeh",sliced:!1,color:"#ff7c43"},{y:60,name:"South Lebanon",sliced:!1,color:"#ffa600"}]}]}})})})]})]})}),Object(d.jsx)(x,{})]}):Object(d.jsx)(J.a,{type:"bars",color:"#ffa600",height:100,width:100,className:"pie"})};l.a,l.a,l.a,l.a,l.a;var G=function(){return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)(r.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:I}),Object(d.jsx)(l.a,{exact:!0,path:"/login",component:w}),Object(d.jsx)(l.a,{exact:!0,path:"/adminHome",component:U}),Object(d.jsx)(l.a,{exact:!0,path:"/freelancerAppointment",component:q}),Object(d.jsx)(l.a,{exact:!0,path:"/Statistics",component:Y})]})})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};c(72);i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(r.a,{children:Object(d.jsx)(G,{})})}),document.getElementById("root")),K()}},[[73,1,2]]]);
//# sourceMappingURL=main.1f33bf51.chunk.js.map