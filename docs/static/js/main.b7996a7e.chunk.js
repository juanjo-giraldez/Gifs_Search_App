(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);n(11);var a=n(0),r=n.n(a),c=n(6),u=n.n(c),i=n(1),l=n(9),o=n(7),s=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>2&&(t((function(e){return[u].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:u,onChange:function(e){o(e.target.value)},placeholder:"Buscador de Gifs"}))};s.protoTypes={setCategories:n.n(o).a.func.isRequired};var m=n(4),p=n.n(m),d=n(8),f=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a,r,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://api.giphy.com/v1/gifs/search?api_key=xvXVK8W1PZnUF6VhNshBz4QocNEMe0dg&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,u=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){e.id;var t=e.title,n=e.url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card animate__animated animate__bounce "},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("p",null," ",t," ")))},E=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){setTimeout((function(){c({data:e,loading:!1})}),2e3)}))}),[e]),r}(t),c=n.data,u=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,'Gifs de "',t,'"'),u&&r.a.createElement("p",null,"Cargando"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))}))))},v=function(e){var t=Object(a.useState)(["One Punch"]),n=Object(i.a)(t,2),c=n[0],u=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"GifExpertApp"),r.a.createElement(s,{setCategories:u}),r.a.createElement("hr",null),r.a.createElement("ol",null,c.map((function(e){return r.a.createElement(E,{key:e,category:e})}))))};n(19);u.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b7996a7e.chunk.js.map