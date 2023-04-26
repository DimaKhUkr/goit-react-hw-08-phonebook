"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[2],{2109:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,a,o,i,c,s,d,l,p,u,x,f=t(2791),h=t(9434),m=t(4270),b=t(168),g=t(6895),j=t(8789),v=t(184),w=function(){var n=(0,h.v9)((function(n){return n.filters})),e=(0,h.I0)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("label",{children:["Search contact:",(0,v.jsx)(Z,{type:"text",placeholder:"Enter name",value:n,onChange:function(n){return e((0,g.z)(n.currentTarget.value))}})]})})},Z=j.ZP.input(r||(r=(0,b.Z)(["\n  margin-left: 15px;\n  margin-right: 10px;\n  border: transparent;\n  background-color: transparent;\n  border-bottom: 1px solid white;\n  outline: none;\n  color: black;\n  height: 20px;\n  font-family: inherit;\n  font-size: 18px;\n  &::placeholder {\n    color: rgba(255, 255, 255, 0.56);\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: #1e90ff 0px 0px 10px, #1e90ff 0px 0px 20px, #1e90ff 0px 0px 30px,\n      #1e90ff 0px 0px 60px;\n  }\n"]))),y=t(4543),k=j.ZP.ul(a||(a=(0,b.Z)(["\n  padding-inline-start: 0;\n  margin: 0;\n  margin-top: 20px;\n  @media (min-width: 600px) {\n    margin-top: 30px;\n    width: 400px;\n  }\n"]))),C=j.ZP.li(o||(o=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 10px;\n\n  & > p {\n    width: 30%;\n    font-size: 16px;\n    @media (min-width: 600px) {\n      width: 50%;\n      font-size: 22px;\n    }\n  }\n"]))),P=j.ZP.button(i||(i=(0,b.Z)(["\n  /* margin-left: 20px; */\n"]))),z=function(){var n=(0,h.v9)((function(n){return n.contacts})).items,e=(0,h.v9)((function(n){return n.filters})),t=(0,h.I0)(),r=e.toLowerCase(),a=n.filter((function(n){return n.name.toLowerCase().includes(r)}));return(0,v.jsx)(k,{children:a.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,v.jsxs)(C,{children:[(0,v.jsxs)("p",{children:["-",r,":"]}),(0,v.jsx)("p",{children:a}),(0,v.jsx)(P,{onClick:function(){return t((0,y.vm)(e))},type:"button",children:"Delete"})]},e)}))})},A=t(9439),I=j.ZP.form(c||(c=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  font-size: 22px;\n  width: 40%;\n"]))),L=j.ZP.input(s||(s=(0,b.Z)(["\n  margin-bottom: 25px;\n  margin-top: 15px;\n  border: transparent;\n  background-color: transparent;\n  border-bottom: 1px solid white;\n  outline: none;\n  color: black;\n  height: 20px;\n  font-family: inherit;\n  font-size: 18px;\n\n  &::placeholder {\n    color: rgba(255, 255, 255, 0.5);\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: #1e90ff 0px 0px 10px, #1e90ff 0px 0px 20px, #1e90ff 0px 0px 30px,\n      #1e90ff 0px 0px 60px;\n  }\n"]))),E=j.ZP.button(d||(d=(0,b.Z)(["\n  margin-bottom: 7px;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  box-shadow: ",";\n\n  &:hover {\n    color: ",";\n    background-color: ",";\n    box-shadow: ",";\n  }\n"])),(function(n){return n.disabled?"#7c7a7a":" #0f1111"}),(function(n){return n.disabled?"#afaaaa":"white"}),(function(n){return n.disabled?"#afaaaa":"#d5d9d9"}),(function(n){return n.disabled?"none":"rgba(213, 217, 217, 0.5) 0 2px 5px 0"}),(function(n){return n.disabled?"#7c7a7a":"  white"}),(function(n){return n.disabled?"#afaaaa":"#0000cd"}),(function(n){return n.disabled?"none":"0 0 10px #0000cd, 0 0 20px #1e90ff, 0 0 40px #0000cd"})),F=t(5218);function S(){var n=(0,f.useState)(""),e=(0,A.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)(""),o=(0,A.Z)(a,2),i=o[0],c=o[1],s={name:t,number:i},d=(0,h.v9)((function(n){return n.contacts})).items,l=(0,h.I0)(),p=function(n){switch(n.currentTarget.name){case"name":r(n.target.value);break;case"number":c(n.target.value)}},u=function(n){var e=n.name,t={name:e,number:n.number};d.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?F.Am.error("".concat(e," is in your Contacts")):l((0,y.zc)(t))},x=function(){c(""),r("")};return(0,v.jsxs)(I,{onSubmit:function(n){n.preventDefault(),u(s),x()},children:[(0,v.jsxs)("label",{children:["Name",(0,v.jsx)(L,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name...",onChange:p})]}),(0,v.jsxs)("label",{children:["Phone number",(0,v.jsx)(L,{type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number...",onChange:p})]}),(0,v.jsx)(E,{type:"submit",disabled:!t||!i,children:"Add contact"})]})}var _=j.ZP.div(l||(l=(0,b.Z)(["\n  display: flex;\n  padding: 30px;\n  align-items: baseline;\n  justify-content: space-evenly;\n"]))),q=j.ZP.h3(p||(p=(0,b.Z)(["\n  margin-top: 50px;\n  font-size: 22px;\n  text-align: center;\n"]))),T=j.ZP.div(u||(u=(0,b.Z)(["\n  padding: 15px;\n  background-color: rgba(176, 196, 222, 0.9);\n  color: #0f1111;\n\n  box-shadow: rgb(33 33 33) 0px 2px 10px 1px;\n  @media screen and (max-width: 800px) {\n    margin-left: 10px;\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n"]))),D=j.ZP.div(x||(x=(0,b.Z)(["\n   {\n    background-size: cover;\n    overflow -x: hidden;\n    padding-top: 50px;\n\n    background-repeat: no-repeat;\n    height: calc(100vh - 70px);\n  }\n"]))),N=t(2483),Y=t.p+"static/media/bg-contacts.ad36f2b28f6e339f3f78.jpg";function B(){var n=(0,h.I0)(),e=(0,h.v9)((function(n){return n.contacts})),t=e.items,r=e.isLoading,a=e.error;return(0,f.useEffect)((function(){n((0,y.yF)())}),[n]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m.q,{children:(0,v.jsx)("title",{children:"Your contacts"})}),(0,v.jsx)(D,{style:{backgroundImage:"url(".concat(Y,")")},children:(0,v.jsxs)(_,{children:[" ",(0,v.jsxs)(T,{children:[(0,v.jsx)("h2",{children:"Contacts"}),(0,v.jsx)(w,{}),r&&(0,v.jsx)(N.a,{}),a&&F.Am.error("There was a terrible mistake, drop everything and run out of the country\n"),t.length>0?(0,v.jsx)(z,{}):(0,v.jsx)(q,{children:"You are absolutely alone "})]}),(0,v.jsxs)(T,{children:[(0,v.jsx)("h1",{children:"Phonebook"}),(0,v.jsx)(S,{})]})]})})]})}}}]);
//# sourceMappingURL=2.1f463267.chunk.js.map