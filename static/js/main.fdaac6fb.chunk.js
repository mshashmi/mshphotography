(this.webpackJsonpmshphotography=this.webpackJsonpmshphotography||[]).push([[0],{19:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(11),c=a.n(s),r=(a(7),a(2)),l=a(3),o=a(5),h=a(4),d=a.p+"static/media/msh.d2a0c8de.svg",m=a(6),b=a(0),j=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App-main",children:[Object(b.jsxs)("div",{className:"left-container-main",children:[Object(b.jsx)("div",{className:"about-name",children:"Sajid Hashmi"}),Object(b.jsx)("div",{className:"camera-pic",children:Object(b.jsx)("img",{width:"35%",src:"https://drive.google.com/uc?export=view&id=1x6PkzmtC4cc39TOQKEvqhlZmrHOYdMe7",alt:"Camera Equipment"})}),Object(b.jsx)("div",{className:"about-info",children:"I am a Software Developer at Bechtel Corporation. Currently I am also pursuing M. Tech in Software Engineering from BITS Pilani. Photography is my hobby and I am more into wildlife and bird photography. It all started way back in 1965 when my grandfather got a camera imported for himself from Japan. I still have that camera along with that tripod. I like exploring new places and more likely like to shoot birds and wildlife. No place is boring for me if I had a good night's sleep and an empty memory card with me. There are always two people in a photograph: the photographer and the viewer. I choosed to become the photographer. Since I couldn't tell story in words, I need to carry my camera. And once photography entered my blood, it became a disease for me which I couldn't recover from. When someone ask me which photograph is my favourite, I reply the one I'm going to take take next."})]}),Object(b.jsx)("div",{className:"right-container-main",children:Object(b.jsx)("img",{width:"95%",src:"https://drive.google.com/uc?export=view&id=1Aj6w1B70kn3pqEIY7I_lLqfUEDwGCpfZ",alt:"Profile Pic"})})]})}}]),a}(n.Component),u=a(9),p=a.p+"static/media/linkedin.7defd339.svg",g=a.p+"static/media/twitter.88d497cc.svg",x=a.p+"static/media/instagram.02967a62.svg",O=a.p+"static/media/facebook.cebbbbea.svg",f=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleBlur=function(){n.handleValidation()},n.handleValidation=function(){var e,t=!0;n.state&&!n.state.name&&(t=!1),n.state&&!n.state.feedback&&(t=!1),n.state&&!n.state.mobile&&(t=!1),n.state&&(e=n.state.email_from,!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e))&&(t=!1),n.setState({isValid:t})},n.state={feedback:"",name:"",mobile:"",email_from:"",isValid:!1},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){"message"==e.target.name&&this.setState({feedback:e.target.value}),"from_name"==e.target.name&&this.setState({name:e.target.value}),"mobile_number"==e.target.name&&this.setState({mobile:e.target.value}),"email_from"==e.target.name&&this.setState({email_from:e.target.value}),this.handleValidation()}},{key:"handleSubmit",value:function(e){this.sendFeedback("template_7hkz1gl",{message:this.state.feedback,from_name:this.state.name,reply_to:this.state.email_from,to_name:"Sajid",mobile:this.state.mobile})}},{key:"sendFeedback",value:function(e,t){window.emailjs.send("service_i324sec",e,t).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App-contact",children:[Object(b.jsxs)("form",{className:"mailing",children:[Object(b.jsx)("h5",{children:"Mail Me"}),Object(b.jsxs)("div",{className:"text-box",children:[Object(b.jsx)("div",{className:"left",children:Object(b.jsx)("label",{children:"Name"})}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("input",{name:"from_name",type:"text",onChange:this.handleChange,onBlur:this.handleBlur,placeholder:"Name",required:!0,value:this.state.name,style:{width:"100%",height:"15px"}})})]}),Object(b.jsxs)("div",{className:"text-box",children:[Object(b.jsx)("div",{className:"left",children:Object(b.jsx)("label",{children:"Mobile Number"})}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("input",{name:"mobile_number",type:"number",onChange:this.handleChange,onBlur:this.handleBlur,placeholder:"Mobile Number",value:this.state.mobile,style:{width:"100%",height:"15px"}})})]}),Object(b.jsxs)("div",{className:"text-box",children:[Object(b.jsx)("div",{className:"left",children:Object(b.jsx)("label",{children:"Email"})}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("input",{name:"email_from",type:"text",onChange:this.handleChange,onBlur:this.handleBlur,placeholder:"Email",value:this.state.email_from,style:{width:"100%",height:"15px"}})})]}),Object(b.jsxs)("div",{className:"text-box",children:[Object(b.jsx)("div",{className:"left",children:Object(b.jsx)("label",{children:"Message"})}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("textarea",{id:"message",name:"message",onChange:this.handleChange,onBlur:this.handleBlur,placeholder:"Write your message here",required:!0,value:this.state.feedback,style:{width:"100%",height:"100px"}})})]}),Object(b.jsx)("div",{className:"text-box button",children:Object(b.jsx)("button",{type:"button",disabled:this.state&&!this.state.isValid,className:"btn btn--submit",onClick:this.handleSubmit,children:"Send Mail"})})]}),Object(b.jsxs)("div",{className:"connect",children:[Object(b.jsx)("h5",{children:"Connect with me"}),Object(b.jsxs)("div",{className:"social-logo",children:[Object(b.jsx)("a",{className:"individual",href:"https://www.linkedin.com/in/sajid-hashmi/",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{width:"5%",src:p,alt:"Linkedin"})}),Object(b.jsx)("a",{className:"individual",href:"https://twitter.com/hashmisajid/",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{width:"5%",src:g,alt:"Twitter"})}),Object(b.jsx)("a",{className:"individual",href:"https://www.instagram.com/shashmi1996/",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{width:"5%",src:x,alt:"Instagram"})}),Object(b.jsx)("a",{className:"individual",href:"https://www.facebook.com/shashmi1996/",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{width:"5%",src:O,alt:"Facebook"})})]})]})]})}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={tabIndex:0},e.handleClick=function(){e.setState({tabIndex:0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)(n.Fragment,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("img",{className:"logo-pointer",src:d,alt:"logo",onClick:function(){return e.handleClick()}})}),Object(b.jsxs)(m.d,{selectedIndex:this.state.tabIndex,onSelect:function(t){return e.setState({tabIndex:t})},children:[Object(b.jsxs)(m.b,{children:[Object(b.jsx)(m.a,{children:Object(b.jsx)("div",{className:"tab-name",children:"About"})}),Object(b.jsx)(m.a,{children:Object(b.jsx)("div",{className:"tab-name",children:"Contact"})})]}),Object(b.jsx)(m.c,{children:Object(b.jsx)(j,{})}),Object(b.jsx)(m.c,{children:Object(b.jsx)(f,{})})]})]})})})}}]),a}(n.Component),w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))},y=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("footer",{className:"App-footer",children:Object(b.jsx)("p",{children:"\xa9 MSH Photography 2021"})})})}}]),a}(n.Component);c.a.render(Object(b.jsxs)(i.a.StrictMode,{children:[Object(b.jsx)(v,{}),Object(b.jsx)(y,{})]}),document.getElementById("root")),w()},7:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.fdaac6fb.chunk.js.map