(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{178:function(e,t,n){},344:function(e,t,n){},347:function(e,t,n){"use strict";n.r(t);var s=n(4),c=n.n(s),a=n(171),i=n.n(a),r=(n(178),n(90)),o=n(91),l=n(52),j=n(96),d=n(95),h=n(17),b=n(12);var O=function(e){var t=e.handleClickOption;return Object(b.jsxs)(h.Navbar,{breakAt:"sm",children:[Object(b.jsx)(h.Navbar.Brand,{children:Object(b.jsx)("h2",{children:"My To-Do App"})}),Object(b.jsxs)(h.Nav,{grow:!0,collapsible:!0,children:[Object(b.jsx)("a",{href:"/",onClick:function(){t("main")},children:"My tasks"}),Object(b.jsx)("a",{href:"/archived",onClick:function(){t("archived")},children:"Archived tasks"})]}),Object(b.jsx)(h.Nav,{collapsible:!0,children:Object(b.jsxs)(h.DropdownButton,{color:"warning",title:Object(b.jsx)(h.Avatar,{title:"KP"}),children:[Object(b.jsx)(h.DropdownItem,{eventKey:"1",children:"My account"}),Object(b.jsx)(h.DropdownItem,{separator:!0}),Object(b.jsx)(h.DropdownItem,{eventKey:"2",children:"Sign out"})]})})]})},u=n(138),x=(n(344),[{title:"Task1",description:"This my task 1. This my task 1. This my task 1. This my task 1. This my task 1. This my task 1. This my task 1. "},{title:"Task2",description:"This my task 2"}]),p=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={showModal:!1},s.open=s.open.bind(Object(l.a)(s)),s.close=s.close.bind(Object(l.a)(s)),s}return Object(o.a)(n,[{key:"open",value:function(){this.setState({showModal:!0})}},{key:"close",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){console.log(this.state);var e=this.props,t=e.index,n=e.title,s=e.description;return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsxs)(h.Card,{className:"task",onClick:this.open,children:[Object(b.jsx)("div",{className:"task-title",children:Object(b.jsx)("h3",{children:n})}),Object(b.jsx)("div",{className:"task-description",children:Object(b.jsx)("p",{children:s})})]},t),Object(b.jsxs)(h.Modal,{centered:!0,hideOnOutsideClick:!0,show:this.state.showModal,onHide:this.close,children:[Object(b.jsx)(h.Modal.Header,{closeButton:!0,children:Object(b.jsx)(h.Modal.Title,{children:Object(b.jsx)("h1",{children:n})})}),Object(b.jsxs)(h.Modal.Body,{children:[Object(b.jsx)("h2",{children:"Description"}),Object(b.jsx)("p",{children:s})]})]})]})}}]),n}(c.a.Component);var k=function(){var e=x.map((function(e,t){return Object(b.jsx)(p,Object(u.a)(Object(u.a)({},e),{},{index:t}))}));return Object(b.jsxs)("div",{className:"main-content-container",children:[Object(b.jsxs)(h.Card,{className:"tasks input-tasks",children:[Object(b.jsx)(h.Card.Header,{color:"warning",children:Object(b.jsx)("h1",{children:"Input"})}),Object(b.jsx)("div",{className:"tasks-container",children:e})]}),Object(b.jsxs)(h.Card,{className:"tasks progress-tasks",children:[Object(b.jsx)(h.Card.Header,{children:Object(b.jsx)("h1",{children:"In-Progress"})}),Object(b.jsx)("div",{className:"tasks-container",children:e})]}),Object(b.jsxs)(h.Card,{className:"tasks done-tasks",children:[Object(b.jsx)(h.Card.Header,{color:"success",children:Object(b.jsx)("h1",{children:"Done"})}),Object(b.jsx)("div",{className:"tasks-container",children:e})]})]})};n(345);function v(){return Object(b.jsx)("h1",{children:"I am the archived notes"})}var m=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={currentContent:"main"},s.handleClickOption=s.handleClickOption.bind(Object(l.a)(s)),s}return Object(o.a)(n,[{key:"handleClickOption",value:function(e){console.log({value:e}),this.setState({currentContent:e||"main"})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{handleClickOption:this.handleClickOption}),"main"===this.state.currentContent?Object(b.jsx)(k,{}):Object(b.jsx)(v,{})]})}}]),n}(c.a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,350)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),C()}},[[347,1,2]]]);
//# sourceMappingURL=main.bf3f24dc.chunk.js.map