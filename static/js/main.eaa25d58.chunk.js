(this.webpackJsonpPriceList=this.webpackJsonpPriceList||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/bg.70dfa98f.png"},,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),i=t.n(c),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=t(4),d=t(5),u=t(8),m=t(6),p=t(9),f=t(1),h=t.n(f),v=[{name:"General cleaning",price:55,add:!0},{name:"Laundry package (for 2 pers.)",price:13,add:!1,dayPrice:!1},{name:"Highchair (per day)",price:3,add:!1,dayPrice:!0},{name:"Cot (per day)",price:3,add:!1,dayPrice:!0},{name:"Deposit",price:100,add:!1,dayPrice:!1},{name:"Laundry package (for 3rd and 4th pers.)",price:19,add:!1,dayPrice:!1},{name:"Booking",price:15,add:!1,dayPrice:!1}],g=function(e){var a=e.value,t=e.onChange,n=e.onSubmit,c=e.id;return r.a.createElement("form",{onSubmit:n,className:"form"},r.a.createElement("input",{id:c,className:"input",type:"number",min:"1",max:"99",value:a,onChange:t,required:!0}))};g.defaultProps={value:7,onChange:function(){},onSubmit:function(){},maxLength:2,id:"days"};var y=g,E=t(7),b=t.n(E),w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).inputMaxLength=2,t.state={products:v,sum:55,stayDays:7},t.onInputChange=function(e){var a=e.target.value.slice(0,t.inputMaxLength);t.setState({stayDays:a}),t.updateSum(a)},t.onInputSubmit=function(e){e.preventDefault()},t.changeAdd=function(e){var a=t.state.products;a[e].add=!a[e].add,t.setState({products:a})},t.updateSum=function(e){var a,n=t.state.products,r=0;n.forEach((function(t){var n=t.price,c=t.dayPrice,i=t.add;a=n*(c?e:1),i&&(r+=a)})),t.setState({sum:r})},t.handleClick=function(e){var a=e.currentTarget.dataset.index,n=t.state.stayDays;t.changeAdd(a),t.updateSum(n)},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.products,n=a.sum,c=a.stayDays;return r.a.createElement("div",{className:"card"},r.a.createElement("h2",null,"Additional services"),r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"left"},r.a.createElement("img",{src:b.a,alt:"Prices"}),r.a.createElement("div",{className:"form"},r.a.createElement("label",{className:"prev__input form-label",htmlFor:"days"},"Stay time:"),r.a.createElement(y,{value:c,onChange:this.onInputChange,onSubmit:this.onInputSubmit,id:"days"}),r.a.createElement("label",{className:"after__input form-label",htmlFor:"days"},"Days"))),r.a.createElement("div",{className:"right"},r.a.createElement("ul",null,t.map((function(a,t){var n=a.add,c=a.dayPrice,i=a.name,o=a.price;return r.a.createElement("li",{"data-index":t,onClick:e.handleClick,className:"product price__add",key:t},n?r.a.createElement("i",{className:"fas fa-check-circle icon icon-delete delete"}):r.a.createElement("i",{className:"fas fa-plus-circle icon icon-add add"}),r.a.createElement("div",{className:"price__descr"},r.a.createElement("div",{className:h()("price__item",{"day-price":c})},i)),r.a.createElement("div",{className:h()("price",{"day-price":c})},"\u20ac ",o,".",r.a.createElement("sup",null,"00")))}))),r.a.createElement("div",{className:"price__summe"},r.a.createElement("h3",null,"total:"),r.a.createElement("span",{className:"summe-span"},"\u20ac ",n,".",r.a.createElement("sup",null,"00"))))))}}]),a}(n.Component),k=function(){return r.a.createElement("header",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",title:"instagram/web__addict",href:"https://github.com/ArturW1998/"},r.a.createElement("i",{className:"fab fa-github"})))},N=(t(15),t(16),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(w,null))});t(17);i.a.render(r.a.createElement(N,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/PriceList",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/PriceList","/service-worker.js");o?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(a,e)}))}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.eaa25d58.chunk.js.map