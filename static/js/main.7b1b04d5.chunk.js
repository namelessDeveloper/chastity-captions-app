(this["webpackJsonpcyoa-viewer"]=this["webpackJsonpcyoa-viewer"]||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),i=n.n(r),o=n(22),a=n.n(o),s=n(9),d=n(4),l=n(1),u=Object(r.createContext)({}),j=function(e){var t=e.children,n=Object(r.useState)(0),c=Object(s.a)(n,2),i=c[0],o=c[1],a=Object(r.useState)(0),d=Object(s.a)(a,2),j=d[0],b=d[1];return Object(l.jsx)(u.Provider,{value:{available:i,setAvailable:o,total:j,setTotal:b},children:t})},b=Object(r.createContext)({}),f=function(e){var t=e.children,n=e.fileList;return Object(l.jsx)(b.Provider,{value:{fileList:n},children:t})};var O=n(18),h=n.n(O),x=n(23);function p(){return(p=Object(x.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/gists/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",{description:c.description,files:c.files,owner:c.owner,id:c.id});case 10:throw e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(e){var t=Object(r.useState)({status:"loading"}),n=Object(s.a)(t,2),c=n[0],i=n[1];return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=Object(r.useRef)(!0);t.current&&(t.current=!1,e())}((function(){(function(e){return p.apply(this,arguments)})(e).then((function(e){return i({status:"succeeded",data:e})})).catch((function(e){return i({status:"failed",error:{message:e}})}))})),c}var m,g,w=n(12),y=n(3),k=y.c.div(m||(m=Object(c.a)(["\n  top: 0;\n  position: sticky;\n  width: 100vw;\n  background-color: black;\n  padding: 1em;\n  border-bottom: 3px solid white;\n"]))),C=y.c.span(g||(g=Object(c.a)(["\n  color: red;\n"])));var L,S,I,_,A,J,F,H=function(e){Object(w.a)(e);var t,n=Object(r.useContext)(u).available,c=void 0===n?0:n;return Object(l.jsxs)(k,{children:["Available Points: ",(t=c,t>=0?t:Object(l.jsx)(C,{children:t}))]})},M=n(10),P="#44ca44",T="red",N=Object(y.c)(M.b)(L||(L=Object(c.a)(["\n  color: #1d83f7;\n  &:visited {\n    color: #9825F7;\n  }\n"]))),D=Object(y.b)(S||(S=Object(c.a)(["\n  pointer-events: none;\n  & ::before {\n    background: black;\n    mix-blend-mode: saturation;\n  }\n"]))),R=y.c.div(I||(I=Object(c.a)(["\n  ","\n  display:flex;\n  flex-direction: ",";\n  // TODO min-width\n  min-width: ","px;\n  border: 5px solid ",";\n  border-radius: 1em;\n  & img {\n    border-top-left-radius: 0.5em;\n    border-top-right-radius: 0.5em;\n  }\n  padding: 1em;\n  cursor: pointer;\n  user-select: none;\n"])),(function(e){return e.affordable?"":D}),(function(e){return e.direction}),(function(e){return e.width&&e.width}),(function(e){return e.toggled?e.toggleColor:"black"})),Y=function(e){var t=e.src,n=e.width,c=void 0===n?200:n;return Object(l.jsx)("img",{src:t,style:{width:"".concat(c,"px"),height:"auto"}})};function z(e){if(e){if(e>0)return'<span style="color:'.concat(P,'">').concat(e,"</span>");if(e<0)return'<span style="color:'.concat(T,'">').concat(e,"</span>")}return e}var B,E,U,V,W=Object(y.b)(_||(_=Object(c.a)(["\n  width: min-content;\n"]))),q=y.c.div(A||(A=Object(c.a)(["\n  ","\n"])),(function(e){return e.noHeader?"":W})),G=y.c.h4(J||(J=Object(c.a)(["\n  white-space: nowrap;\n"]))),K=y.c.p(F||(F=Object(c.a)(["\n"]))),Q=function(e){var t=e.body,n=e.header,c=e.cost;return Object(l.jsxs)(q,{noHeader:void 0==n,children:[n&&Object(l.jsx)(G,{dangerouslySetInnerHTML:{__html:"".concat(n," [").concat(z(c),"]")}}),t&&Object(l.jsx)(K,{dangerouslySetInnerHTML:{__html:t}})]})},X=y.c.div(B||(B=Object(c.a)(["\n  background-color: ",";\n  color: White;\n  font-weight: 700;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 1em;\n  border: 3px solid white;\n  border-radius: .5em;\n"])),(function(e){return e.color||"#a80eb6"})),Z=function(e){var t=e.text,n=e.color;return Object(l.jsx)(X,{color:n,children:t})},$=y.c.div(E||(E=Object(c.a)(["\n  padding-bottom: .5em;\n  font-size: 1.3em;\n"]))),ee=function(e){Object(w.a)(e);var t=Object(r.useContext)(b).fileList,n=Object(d.g)().pathname;return void 0==t?(console.error("item type: index can only be used on the profile"),null):(console.log(t),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"CYOAs by this Author:"}),t.map((function(e,t){return Object(l.jsx)($,{children:Object(l.jsx)(N,{to:"".concat(n,"/").concat(e.filename),children:e.title})},t)}))]}))},te=function(e){var t=e.data,n=e.onClick,c=Object(r.useState)(!1),i=Object(s.a)(c,2),o=i[0],a=i[1];return Object(l.jsx)(R,{toggled:o,toggleColor:t.cost&&t.cost>0?P:T,onClick:function(){t.cost&&n&&(o?(n(-t.cost),a(!1)):(n(t.cost),a(!0)))},direction:t.direction||"row",width:t.width,affordable:!0,children:t.parts.map((function(e,n){switch(e.type){case"image":return Object(l.jsx)(Y,{src:e.src,width:e.width},n);case"text":return Object(l.jsx)(Q,{cost:t.cost,body:e.body,header:e.header},n);case"title":return Object(l.jsx)(Z,{cost:t.cost,text:e.text},n);case"index":return Object(l.jsx)(ee,{},n);default:return null}}))})};var ne=y.c.div(V||(V=Object(c.a)(["\n  display:flex;\n  ","\n  flex-wrap: wrap;\n"])),(function(e){return function(e){if(e)return Object(y.b)(U||(U=Object(c.a)(["flex-direction: ",";"])),e)}(e.direction)}));var ce,re,ie=function(e){var t=e.data,n=function(){var e=Object(r.useContext)(u),t=e.setAvailable,n=e.available;return function(e){console.log(e),void 0!=n&&t&&t(n+e)}}(),c="none"!==t.type?function(e){return n(e)}:void 0;return"multiple"==t.type||"single"==t.type?Object(l.jsx)(ne,{direction:t.direction,children:t.items.map((function(e,t){return Object(l.jsx)(te,{data:e,onClick:c},t)}))}):Object(l.jsx)(ne,{direction:t.direction,children:t.items.map((function(e,t){return Object(l.jsx)(te,{data:e},t)}))})},oe=function(e){var t=e.config;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(H,{}),Object(l.jsx)(ae,{direction:(null===t||void 0===t?void 0:t.direction)||"column",children:t.sections.map((function(e,t){return Object(l.jsx)(ie,{data:e},t)}))})]})},ae=y.c.div(ce||(ce=Object(c.a)(["\n  display: flex;\n  flex-direction: ",";\n"])),(function(e){return e.direction})),se=function(e){Object(w.a)(e);var t=Object(r.useRef)(null),n=Object(d.f)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"",children:"Load a config from a github gist:"}),Object(l.jsx)("input",{ref:t,type:"text",placeholder:"gistID"}),Object(l.jsx)("button",{onClick:function(){var e;return n.push((null===(e=t.current)||void 0===e?void 0:e.value)||"")},children:"Load"})]})},de=function(e){var t=e.config;return Object(l.jsx)(le,{direction:(null===t||void 0===t?void 0:t.direction)||"column",children:t.sections.map((function(e,t){return Object(l.jsx)(ie,{data:e},t)}))})},le=y.c.div(re||(re=Object(c.a)(["\n  display: flex;\n  flex-direction: ",";\n"])),(function(e){return e.direction})),ue=function(){var e=Object(d.h)().params,t=e.gistId,n=e.filename,c=v(t);switch(c.status){default:return Object(l.jsx)("div",{children:"Loading"});case"failed":return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Invalid cyoa format."}),Object(l.jsxs)("p",{children:["Make sure its a valid json, use this",Object(l.jsx)("a",{href:"https://jsonformatter.curiousconcept.com/",children:" validator "}),"first for incorect json syntax then consult the docs and/or examples for CYOA Viewer issues."]})]});case"succeeded":if(n&&"_index.json"!==n){var r=c.data.files[n].content,i=JSON.parse(r);return console.log("Loaded file: ".concat(n,'.\nLoaded cyoa with title: "').concat(i.title,'"')),Object(l.jsx)(j,{children:Object(l.jsx)(oe,{config:i})})}var o=c.data.files["_index.json"].content,a=JSON.parse(o);return console.log("Loaded file: ".concat(n,".\nUser Profile Loaded")),console.log(a),Object(l.jsx)(f,{fileList:je(c.data.files),children:Object(l.jsx)(de,{config:a})})}};function je(e){for(var t=[],n=0,c=Object.entries(e);n<c.length;n++){var r=Object(s.a)(c[n],2),i=r[0],o=r[1];"_index.json"!=i&&t.push({filename:i,title:JSON.parse(o.content).title})}return t}var be,fe=function(){return Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{path:"/:gistId/:filename?",children:Object(l.jsx)(ue,{})}),Object(l.jsx)(d.a,{path:"/",children:Object(l.jsx)(se,{})})]})},Oe=Object(y.a)(be||(be=Object(c.a)(["\n  body {\n    background:  black;\n    color: white;\n    font-family: sans-serif;\n  }\n"])));a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsxs)(M.a,{children:[Object(l.jsx)(Oe,{}),Object(l.jsx)(fe,{})]})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7b1b04d5.chunk.js.map