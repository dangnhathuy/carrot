(this.webpackJsonpcarrot=this.webpackJsonpcarrot||[]).push([[0],{22:function(n,e,t){},25:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var r=t(2),i=t(1),a=t.n(i),o=t(10),c=t.n(o),u=(t(22),t(5)),d=t(3),f=t(12),l=t(11),s=t(4);function p(){var n=Object(d.a)(["\n  background-color: rgb(0, 0, 0, 0.35);\n  opacity: 1;\n  border: none;\n  outline: none;\n  font-family: redHat_regular;\n  color: #fff;\n"]);return p=function(){return n},n}function x(){var n=Object(d.a)(["\n  width: 100%;\n  margin-top: 5px;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  * {\n    padding: 8px;\n    border-radius: 5px;\n    transition: all 0.5s;\n  }\n  *:hover {\n    transform: scale(1.1);\n  }\n  @media (max-width: 665px) {\n    padding: 0;\n}\n"]);return x=function(){return n},n}function h(){var n=Object(d.a)(["\n  &[id='home'] {\n    display: none;\n  }\n  font-size: 14px;\n  color: red;\n"]);return h=function(){return n},n}function b(){var n=Object(d.a)(["\n  width: 50px;\n  padding: 18px 0;\n  border-radius: 0 15px 15px 0;\n  align-self: flex-end;\n  background-color: rgb(0, 0, 0, 0.35);\n  opacity: 1;\n  border: none;\n  outline: none;\n  font-family: redHat_regular;\n  color: #fff;\n  * {\n    opacity: 0.7;\n    transition: all 0.5s;\n  }\n  *:hover {\n    opacity: 1;\n  }\n"]);return b=function(){return n},n}function j(){var n=Object(d.a)(["\n    width: 100%;\n    padding: 0 25px;\n    line-height: 25px;\n    background-color: rgb(0, 0, 0, 0.35);\n    opacity: 1;\n    border: none;\n    border-radius: 15px 0 0 15px;\n    outline: none;\n    font-family: redHat_regular;\n    color: #fff;\n    &::placeholder {\n      padding: 1rem 0;\n      color: #fff;\n    }\n"]);return j=function(){return n},n}function m(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  &[id='error'] {\n    border: 1px solid red;\n    border-radius: 15px;\n}\n"]);return m=function(){return n},n}function g(){var n=Object(d.a)(["\n  margin: 0 0 30px;\n"]);return g=function(){return n},n}function O(){var n=Object(d.a)(["\n  position: absolute;\n  top: 20%;\n  width: 30%;\n  text-align: center;\n  animation: fadeIn ease 3s;\n  @media (min-width: 1281px) {\n    width: 500px;\n  }\n  @media (max-width: 900px) {\n    width: 80%;\n  }\n\n  @media (max-width: 300px) {\n    width: 95%;\n  }\n  @media (max-height: 450px) {\n    width: 70%;\n    top: 6%;\n  }\n  @media (max-height: 350px) {\n    *{\n      margin: 0\n    }\n  }\n\n"]);return O=function(){return n},n}function v(){var n=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n"]);return v=function(){return n},n}function w(){var n=Object(d.a)(["\n*{\n  margin-left: 5px;\n}\n  *:hover{\n    color: orange;\n  }\n"]);return w=function(){return n},n}var y=["Toronto","Vancouver","Montreal"],C=s.a.h1(w()),k=s.a.div(v()),F=s.a.div(O()),S=s.a.div(g()),z=s.a.div(m()),I=s.a.input(j()),_=s.a.button(b()),H=s.a.h3(h()),M=s.a.div(x()),E=s.a.button(p()),P=function(n){var e=n.onCitySelect,t=n.onInputChange,i=n.route,a=n.errorMessage;return Object(r.jsx)(k,{children:Object(r.jsxs)(F,{children:[Object(r.jsxs)(C,{children:["Carrot",Object(r.jsx)(l.a,{})]}),Object(r.jsx)(S,{children:" a Canadian weather app "}),Object(r.jsxs)(z,{id:i,children:[Object(r.jsx)(I,{"aria-label":"Enter City Name",type:"text",placeholder:"Enter City Name",onChange:t}),Object(r.jsx)(_,{"aria-label":"Submit",onClick:e,children:Object(r.jsx)(f.a,{size:25})})]}),Object(r.jsxs)(H,{id:i,children:[" error: ",a," "]}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:"Popular Cities"}),Object(r.jsx)(M,{children:y.map((function(n,t){return Object(r.jsx)(E,{value:n,onClick:e,children:n},t)}))})]})})},N=t(16);function R(){var n=Object(d.a)(["\n    outline: none;\n    background: none;\n    border: none;\n    font-family: redHat_regular;\n    line-height: 5px;\n    font-size: 28px;\n    color: #fff;\n    height: 30px;\n    padding-right: 10px;\n    transition: all 0.5s;\n    &:hover {\n        color: #85caff;\n      }\n    \n"]);return R=function(){return n},n}function T(){var n=Object(d.a)(["\n    outline: none;\n    background: none;\n    border: none;\n    font-family: redHat_regular;\n    font-size: 28px;\n    line-height: 5px;\n    margin: 0;\n    color: #fff;\n    height: 30px;\n    padding-right: 10px;\n    border-right: 2px solid #fff;\n    transition: all 0.5s;\n    &:hover {\n        color: #85caff;\n      }\n"]);return T=function(){return n},n}function B(){var n=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n    margin-left: 5px;\n    padding-top: 20px\n"]);return B=function(){return n},n}function J(){var n=Object(d.a)(["\n    display: flex;\n    justify-content: center;\n    font-size: 5rem;\n    flex-direction: row;\n"]);return J=function(){return n},n}function L(){var n=Object(d.a)(["\n    margin: 20px 0 0 0\n"]);return L=function(){return n},n}function q(){var n=Object(d.a)(["\n    font-size: 25px;\n    margin: 5px;\n"]);return q=function(){return n},n}function A(){var n=Object(d.a)(["\n    font-size: 30px;\n"]);return A=function(){return n},n}function D(){var n=Object(d.a)(["\n    transition: color 0.5s;    \n    position: absolute;\n    top: 238px;\n    right: 55%;\n    @media (max-width: 1200px) {\n        right: 65%;\n    }\n    @media (max-width: 510px) {\n        right: 80%;\n    }\n    \n    @media (max-height: 760px) {\n        margin-top: 38px;\n        top: 20vh;\n    }\n    &:hover {\n        color: #85caff;\n      }\n"]);return D=function(){return n},n}function G(){var n=Object(d.a)(["\n    display: flex;\n    justify-content: center;\n    flex:direction: row;\n"]);return G=function(){return n},n}function K(){var n=Object(d.a)(["\n    width: 25%;\n    text-align: center;\n    color: #fff;\n    background-color: rgb(0, 0, 0);\n    opacity: 0.5;\n    border-radius: 15px;\n    padding-bottom: 20px;\n    animation: fadeIn2 ease 3s;\n    margin-top: 200px;\n    @media (max-width: 1200px) {\n        width: 460px;\n    }\n    \n    @media (max-width: 510px) {\n        width: 90%;\n    }\n\n    @media (max-height: 760px) {\n        margin-top: 20vh;\n    }\n"]);return K=function(){return n},n}function V(){var n=Object(d.a)(["\n    display: flex;\n    justify-content: center;\n\n"]);return V=function(){return n},n}var X=s.a.div(V()),Q=s.a.div(K()),U=s.a.div(G()),W=Object(s.a)(N.a)(D()),Y=s.a.p(A()),Z=s.a.p(q()),$=s.a.div(L()),nn=s.a.div(J()),en=s.a.div(B()),tn=s.a.button(T()),rn=s.a.button(R()),an=function(n){var e=n.weather,t=n.onRouteChange,a=Object(i.useState)("celcius"),o=Object(u.a)(a,2),c=o[0],d=o[1],f=Object(i.useState)((e.temperature-273.15).toFixed()),l=Object(u.a)(f,2),s=l[0],p=l[1],x=Object(i.useState)((e.max-273.15).toFixed()),h=Object(u.a)(x,2),b=h[0],j=h[1],m=Object(i.useState)((e.min-273.15).toFixed()),g=Object(u.a)(m,2),O=g[0],v=g[1],w=function(n){"celcius"===c?"fahrenheit"===n.target.value&&(p((9*s/5+32).toFixed()),j((9*b/5+32).toFixed()),v((9*O/5+32).toFixed())):"fahrenheit"===c&&"celcius"===n.target.value&&(p((5/9*(s-32)).toFixed()),j((5/9*(b-32)).toFixed()),v((5/9*(O-32)).toFixed())),d(n.target.value)};return Object(r.jsx)(X,{children:Object(r.jsxs)(Q,{children:[Object(r.jsx)(W,{"aria-label":"Return to Home Page",size:25,onClick:t}),Object(r.jsx)(U,{children:Object(r.jsx)(Y,{children:e.city})}),Object(r.jsx)(Z,{children:e.weather}),Object(r.jsxs)(nn,{children:[Object(r.jsx)($,{children:s}),Object(r.jsxs)(en,{children:[Object(r.jsx)(tn,{value:"celcius",onClick:w,children:" \xb0C "}),Object(r.jsx)(rn,{value:"fahrenheit",onClick:w,children:" \xb0F "})]})]}),Object(r.jsxs)("p",{children:["MAX: ",b,"\xb0"]}),Object(r.jsxs)("p",{children:["MIN: ",O,"\xb0"]})]})})};t(25);var on=function(){var n=Object(i.useState)(""),e=Object(u.a)(n,2),t=e[0],a=e[1],o=Object(i.useState)("home"),c=Object(u.a)(o,2),d=c[0],f=c[1],l=Object(i.useState)(""),s=Object(u.a)(l,2),p=s[0],x=s[1],h=Object(i.useState)(),b=Object(u.a)(h,2),j=b[0],m=b[1],g=function(n){var e="";e="enter"===n.key?t.replace(/\s/g,"%20"):n.target.value,O(e)},O=function(n){fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=".concat(n,"%2Cca&cnt=10&units=metric%20or%20imperial"),{method:"GET",headers:{"x-rapidapi-key":"0b39656c74msh44eda8e74ea6fabp1efd33jsn7a666fd46f52","x-rapidapi-host":"community-open-weather-map.p.rapidapi.com"}}).then((function(n){return n.json()})).then((function(n){return v(n)}))},v=function(n){if(n.name){var e=[];n.weather.map((function(n){e.push(n.main)})),m({city:n.name,temperature:n.main.temp,max:n.main.temp_max,min:n.main.temp_min,weather:e}),f("weather")}else n.cod?(f("error"),x(n.message)):n.cod||f("home")};return"home"===d||"error"===d?Object(r.jsx)("div",{onKeyPress:function(n){"Enter"===n.key&&g(n)},children:Object(r.jsx)(P,{className:"home",onCitySelect:g,onInputChange:function(n){a(n.target.value)},onRouteChange:v,route:d,errorMessage:p})}):Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(an,{weather:j,onRouteChange:v})})},cn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),i(n),a(n),o(n)}))};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(on,{})}),document.getElementById("root")),cn()}},[[26,1,2]]]);
//# sourceMappingURL=main.0473cf9f.chunk.js.map