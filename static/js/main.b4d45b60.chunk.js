(this.webpackJsonpmshphotography=this.webpackJsonpmshphotography||[]).push([[0],{11:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(14),s=a.n(c),r=(a(11),a(5)),l=a(6),o=a(8),h=a(7),_=a.p+"static/media/msh.d2a0c8de.svg",N=a(13),d=a(1),m=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App-main",children:[Object(d.jsxs)("div",{className:"left-container-main",children:[Object(d.jsx)("div",{className:"about-name",children:"Sajid Hashmi"}),Object(d.jsx)("div",{className:"camera-pic",children:Object(d.jsx)("img",{width:"35%",src:"https://drive.google.com/uc?export=view&id=1x6PkzmtC4cc39TOQKEvqhlZmrHOYdMe7",alt:"Camera Equipment"})}),Object(d.jsx)("div",{className:"about-info",children:"I am a Software Developer at Bechtel Corporation. Currently I am also pursuing M. Tech in Software Engineering from BITS Pilani. Photography is my hobby and I am more into wildlife and bird photography. It all started way back in 1965 when my grandfather got a camera imported for himself from Japan. I still have that camera along with that tripod. I like exploring new places and more likely like to shoot birds and wildlife. No place is boring for me if I had a good night's sleep and an empty memory card with me. There are always two people in a photograph: the photographer and the viewer. I choosed to become the photographer. Since I couldn't tell story in words, I need to carry my camera. And once photography entered my blood, it became a disease for me which I couldn't recover from. When someone ask me which photograph is my favourite, I reply the one I'm going to take take next."})]}),Object(d.jsx)("div",{className:"right-container-main",children:Object(d.jsx)("img",{width:"95%",src:"https://drive.google.com/uc?export=view&id=1Aj6w1B70kn3pqEIY7I_lLqfUEDwGCpfZ",alt:"Profile Pic"})})]})}}]),a}(i.Component),u=a(18),I=a.p+"static/media/linkedin.7defd339.svg",D=a.p+"static/media/twitter.88d497cc.svg",b=a.p+"static/media/instagram.02967a62.svg",E=a.p+"static/media/facebook.cebbbbea.svg",j=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).handleBlur=function(){i.handleValidation()},i.handleValidation=function(){var e,t=!0;i.state&&!i.state.name&&(t=!1),i.state&&!i.state.feedback&&(t=!1),i.state&&!i.state.mobile&&(t=!1),i.state&&(e=i.state.email_from,!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e))&&(t=!1),i.setState({isValid:t})},i.resetFeild=function(){i.setState({feedback:"",name:"",mobile:"",email_from:"",isValid:!1})},i.state={feedback:"",name:"",mobile:"",email_from:"",isValid:!1,mailSent:!1},i.handleChange=i.handleChange.bind(Object(u.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i}return Object(l.a)(a,[{key:"handleChange",value:function(e){"message"==e.target.name&&this.setState({feedback:e.target.value}),"from_name"==e.target.name&&this.setState({name:e.target.value}),"mobile_number"==e.target.name&&this.setState({mobile:e.target.value}),"email_from"==e.target.name&&this.setState({email_from:e.target.value}),this.handleValidation()}},{key:"handleSubmit",value:function(e){this.sendFeedback("template_7hkz1gl",{message:this.state.feedback,from_name:this.state.name,reply_to:this.state.email_from,to_name:"Sajid",mobile:this.state.mobile}),this.setState({mailSent:!0}),this.resetFeild()}},{key:"sendFeedback",value:function(e,t){window.emailjs.send("service_i324sec",e,t).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App-contact",children:[Object(d.jsxs)("form",{className:"mailing",children:[Object(d.jsx)("h5",{children:"Mail Me"}),Object(d.jsxs)("div",{className:"text-box",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("label",{children:"Name"})}),Object(d.jsx)("div",{className:"right",children:Object(d.jsx)("input",{name:"from_name",type:"text",onChange:this.handleChange,onBlur:this.handleBlur,placeholder:"Name",required:!0,value:this.state.name,style:{width:"100%",height:"15px"}})})]}),Object(d.jsxs)("div",{className:"text-box",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("label",{children:"Mobile Number"})}),Object(d.jsx)("div",{className:"right",children:Object(d.jsx)("input",{name:"mobile_number",type:"number",onChange:this.handleChange,onBlur:this.handleBlur,placeholder:"Mobile Number",value:this.state.mobile,style:{width:"100%",height:"15px"}})})]}),Object(d.jsxs)("div",{className:"text-box",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("label",{children:"Email"})}),Object(d.jsx)("div",{className:"right",children:Object(d.jsx)("input",{name:"email_from",type:"text",onChange:this.handleChange,onBlur:this.handleBlur,placeholder:"Email",value:this.state.email_from,style:{width:"100%",height:"15px"}})})]}),Object(d.jsxs)("div",{className:"text-box",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("label",{children:"Message"})}),Object(d.jsx)("div",{className:"right",children:Object(d.jsx)("textarea",{id:"message",name:"message",onChange:this.handleChange,onBlur:this.handleBlur,placeholder:"Write your message here",required:!0,value:this.state.feedback,style:{width:"100%",height:"100px"}})})]}),Object(d.jsx)("div",{className:"text-box button",children:Object(d.jsx)("button",{type:"button",disabled:this.state&&!this.state.isValid,className:"btn btn--submit",onClick:this.handleSubmit,children:"Send Mail"})}),this.state&&this.state.mailSent&&Object(d.jsx)("div",{className:"mail-sent",children:Object(d.jsx)("label",{children:"Thanks for your contacting me. You will receive a reply within 1 business day."})})]}),Object(d.jsxs)("div",{className:"connect",children:[Object(d.jsx)("h5",{children:"Connect with me"}),Object(d.jsxs)("div",{className:"social-logo",children:[Object(d.jsx)("a",{className:"individual",href:"https://www.linkedin.com/in/sajid-hashmi/",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("img",{width:"5%",src:I,alt:"Linkedin"})}),Object(d.jsx)("a",{className:"individual",href:"https://twitter.com/hashmisajid/",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("img",{width:"5%",src:D,alt:"Twitter"})}),Object(d.jsx)("a",{className:"individual",href:"https://www.instagram.com/shashmi1996/",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("img",{width:"5%",src:b,alt:"Instagram"})}),Object(d.jsx)("a",{className:"individual",href:"https://www.facebook.com/shashmi1996/",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("img",{width:"5%",src:E,alt:"Facebook"})})]})]})]})}}]),a}(i.Component),A=a(52),M=a(53),O=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={picture:0,pictureLarge:0,wildlifeList:[]},e.handleClick=function(e){},e.thumbnail=function(t){t&&e.setState({picture:0,pictureLarge:1})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({wildlifeList:[{WILDLIFE_ID:"1OgSELi8Ut9fAZR3oJg_EtPeXhffalwNZ",WILDLIFE_NAME:"a_1"},{WILDLIFE_ID:"1m4z0UihF7WeaN5OYh7u4QxUOPQLyth1Z",WILDLIFE_NAME:"a_2"},{WILDLIFE_ID:"1vbODzbZHajpjIoFoYJ1Yk25vjUXcyOew",WILDLIFE_NAME:"a_3"},{WILDLIFE_ID:"1jrYcT7louZBN-zzWoTaUuBHx-mbmRG_b",WILDLIFE_NAME:"a_4"},{WILDLIFE_ID:"12mf7ampw9lmW5BhG7BRw7dlV8jt6B6iE",WILDLIFE_NAME:"a_5"},{WILDLIFE_ID:"1ZeTJOigWV4h4D8mqaIyYCA0__GMU1i0V",WILDLIFE_NAME:"a_6"},{WILDLIFE_ID:"1kTVqE8QaRkhoRi_s2WwPUEOwMHp71rNB",WILDLIFE_NAME:"a_7"},{WILDLIFE_ID:"1YnOikyTfAYl9IxR1OiDOLPNg2CeFH9gn",WILDLIFE_NAME:"a_8"},{WILDLIFE_ID:"1oNiyiklr1Wl_ehHswb-xLkPkKzE0-BWx",WILDLIFE_NAME:"a_9"},{WILDLIFE_ID:"15gs9uUfLrTYRyskFIbxXg4JsTntoDBUu",WILDLIFE_NAME:"a_10"},{WILDLIFE_ID:"15o_k3f0ForbDSYs7Yii7Ct_lgKomvA02",WILDLIFE_NAME:"a_11"},{WILDLIFE_ID:"1VCcYD95vYeoJd412QmZEBom7ZrvlJyJO",WILDLIFE_NAME:"a_12"},{WILDLIFE_ID:"1fgZUjyAGSbti7j-moOvfnS_M4mVlOrOV",WILDLIFE_NAME:"a_13"},{WILDLIFE_ID:"1MMfLfX_FERfPicbC_q1MNclSwRdgGhcl",WILDLIFE_NAME:"a_14"}]})}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"right-inner",children:this.state&&this.state.wildlifeList&&Object(d.jsx)("div",{className:"picture-thumbnail",children:this.state.wildlifeList.map((function(t){return Object(d.jsx)("input",{className:"thumbnail-pic",type:"image",src:"https://drive.google.com/thumbnail?id=".concat(t.WILDLIFE_ID),alt:t.WILDLIFE_NAME,onClick:function(){return e.thumbnail(t.WILDLIFE_ID)}})}))})})}}]),a}(i.Component),p=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={picture:0,pictureLarge:0,astronomyList:[]},e.handleClick=function(e){},e.thumbnail=function(t){t&&e.setState({picture:0,pictureLarge:1})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({astronomyList:[{ASTRONOMY_ID:"11DWbojQAB26V40zDMJO4aWv9wXmH3Qb5",ASTRONOMY_NAME:"n_1"},{ASTRONOMY_ID:"1EOUsAEQ5uy9iobWK5mPO1mzgRWyz_7PA",ASTRONOMY_NAME:"n_2"},{ASTRONOMY_ID:"11i1OpMSfojblI26VeOHobfhp39_MH3TW",ASTRONOMY_NAME:"n_3"},{ASTRONOMY_ID:"1NY_wjDgxfRjE_jYo0m86YDftTtjoFZUV",ASTRONOMY_NAME:"n_4"}]})}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"right-inner",children:this.state&&this.state.astronomyList&&Object(d.jsx)("div",{className:"picture-thumbnail",children:this.state.astronomyList.map((function(t){return Object(d.jsx)("input",{className:"thumbnail-pic",type:"image",src:"https://drive.google.com/thumbnail?id=".concat(t.ASTRONOMY_ID),alt:t.ASTRONOMY_NAME,onClick:function(){return e.thumbnail(t.ASTRONOMY_ID)}})}))})})}}]),a}(i.Component),f=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={picture:0,pictureLarge:0,birdList:[]},e.handleClick=function(e){},e.thumbnail=function(t){t&&e.setState({picture:0,pictureLarge:1})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({birdList:[{BIRD_ID:"19GnSlDkS5S7OOL8ZPpERElSEIrg_AIMm",BIRD_NAME:"a_1"},{BIRD_ID:"198oPv1eSmnGNcA2ckBaXgSpTeN8W8hTE",BIRD_NAME:"a_2"},{BIRD_ID:"1aN6r4NGo1hY1R5fCjZL5m7PoOtvWQv39",BIRD_NAME:"a_3"},{BIRD_ID:"16d2dx3BdJNZdYr3TXwTWtH36ItWnQw6J",BIRD_NAME:"a_4"},{BIRD_ID:"1KC3LmL9PV2RSsZGzYor5qQwqg-Om9DIw",BIRD_NAME:"a_5"},{BIRD_ID:"1YVT3pCVADJu9Xf2IBfMomqGcdxUuiOO2",BIRD_NAME:"a_6"},{BIRD_ID:"1sy9RjtcZzTv-kHzAF-rovQZXzS6-t66-",BIRD_NAME:"a_7"},{BIRD_ID:"14KUW5zHGHcGO02J1pK43GjMYw-nFDX5o",BIRD_NAME:"a_8"},{BIRD_ID:"1rq22H3iOAs01SxKhChWPVMyVfbB5LOBS",BIRD_NAME:"a_9"},{BIRD_ID:"1dLJMwbdiQ0V3yOdK9OWGoakTJGuHOix_",BIRD_NAME:"a_10"},{BIRD_ID:"1_YJj0h8yWX9MnKtdIf7ZqLgsPeXikAdd",BIRD_NAME:"a_11"},{BIRD_ID:"1MW8CBitaWeAiYcc8_QE3QEY2nMaczqbv",BIRD_NAME:"a_12"},{BIRD_ID:"10Gi2C5cI8RW-JrME7BXYR5SJMF4hR76Z",BIRD_NAME:"a_13"},{BIRD_ID:"1IS2K1PUgctFD62u4LDTqlZz6tJ17KbJw",BIRD_NAME:"a_14"},{BIRD_ID:"1wNyz-w2a4gs2_aA-KzR6Xt-JNGQtdydS",BIRD_NAME:"a_15"},{BIRD_ID:"1ogKSB6A6NW4wUxFXtXnTMWlpca2Vz8OK",BIRD_NAME:"a_16"},{BIRD_ID:"1623amHg9Mc18bap5gunToinE5bnzK7sK",BIRD_NAME:"a_17"},{BIRD_ID:"1cjZ4ItiiZVMUQ3dlsLUiE5IFhz3pVDfD",BIRD_NAME:"a_18"},{BIRD_ID:"1lyvZJcPy9PKIxjPnL7gce4ySPqxkVrLf",BIRD_NAME:"a_19"},{BIRD_ID:"1TUt1YMClepsBraln_xsYmPlShj_Rf3uz",BIRD_NAME:"a_20"},{BIRD_ID:"1-EUMRX6q-ASfYzTv3COwqy3xo-5_BviN",BIRD_NAME:"a_21"},{BIRD_ID:"1rCrA3AT_aU-pF412HKX8Ap_7UyqXpFvD",BIRD_NAME:"a_22"},{BIRD_ID:"1NF1IV19pgUTYrjUyUN02I7-8AGAEJwCI",BIRD_NAME:"a_23"},{BIRD_ID:"184RX0C2U6OHNAgrnnEKUlqXxaUgUUvSS",BIRD_NAME:"a_24"},{BIRD_ID:"1VXncuiOMyN7JyxoRwEmPw3Vo3Bmj-JiR",BIRD_NAME:"a_25"},{BIRD_ID:"11IwEuRZzufsWR5kJfpK7rYs5M3ZSbf-N",BIRD_NAME:"a_26"},{BIRD_ID:"1EBHSq1yNFMKXSMdiAhlqdGYUu6UINdub",BIRD_NAME:"a_27"},{BIRD_ID:"1vpZZdBxWVP0PDnrIS0qMhfeOgQjm4QtO",BIRD_NAME:"a_28"},{BIRD_ID:"1kX-G2fBR9CLXLMULPVf3Yo8xDCL7L2rQ",BIRD_NAME:"a_29"},{BIRD_ID:"1k4AJ0EIOSAwBL9rWXvAPutoHpuCX96T6",BIRD_NAME:"a_30"},{BIRD_ID:"1S23rO0rIxBCmS6tMJgKaRXlJEyj6Lryy",BIRD_NAME:"a_31"},{BIRD_ID:"1kkLw33D4A--CgdQsjj531fUIal_TzDeb",BIRD_NAME:"a_32"},{BIRD_ID:"1zGS5g2aNNZqfI4k2yX0vWTqraanruTHF",BIRD_NAME:"a_33"},{BIRD_ID:"1rpfH5WPyfl7Y5GYZYjjZko_M5JNryIif",BIRD_NAME:"a_34"},{BIRD_ID:"1uu3C9xn6F-g3ifgQikXU_3K_GQlaRe_A",BIRD_NAME:"a_35"},{BIRD_ID:"1SGKeDkTk_MOxqdnlLuu0OjT5un38ViNj",BIRD_NAME:"a_36"},{BIRD_ID:"1d3doKZFhNMQg5WSf6bl6aH53SC5uKEhg",BIRD_NAME:"a_37"},{BIRD_ID:"1aq-YjJ-utV9xy_sp6Gc1tOzn8t_ZNDaB",BIRD_NAME:"a_38"},{BIRD_ID:"1L7HbINN22KnFHbaY2B2GM6QiPoHiGEt2",BIRD_NAME:"a_39"},{BIRD_ID:"1asF3dVleO3fGLpDwKQtgGnpeW0v2cA3F",BIRD_NAME:"a_40"},{BIRD_ID:"1jW10aZtnOyEsXrg1sMFAvCmhdE1xGhpn",BIRD_NAME:"a_41"},{BIRD_ID:"1X02a1hiMrutxUDwcC0veBqq6lNhJez0f",BIRD_NAME:"a_42"}]})}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"right-inner",children:this.state&&this.state.birdList&&Object(d.jsx)("div",{className:"picture-thumbnail",children:this.state.birdList.map((function(t){return Object(d.jsx)("input",{className:"thumbnail-pic",type:"image",src:"https://drive.google.com/thumbnail?id=".concat(t.BIRD_ID),alt:t.BIRD_NAME,onClick:function(){return e.thumbnail(t.BIRD_ID)}})}))})})}}]),a}(i.Component),g=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={picture:0,pictureLarge:0,landscapeList:[]},e.handleClick=function(e){},e.thumbnail=function(t){t&&e.setState({picture:0,pictureLarge:1})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({landscapeList:[{LANDSCAPE_ID:"181wq7XGEoIoC81MCKNZIt3TivF-m4cuz",LANDSCAPE_NAME:"l_1"},{LANDSCAPE_ID:"1V_EJ5HJVZw8nbOzR3r1lS_kpgJZ4TUcQ",LANDSCAPE_NAME:"l_2"},{LANDSCAPE_ID:"1LEPQe7FdKmM5466QG7sNlZuEfv8crymz",LANDSCAPE_NAME:"l_3"},{LANDSCAPE_ID:"1hHBFLTnwWHRi6XtvgkUGmzAGOQAJHw-C",LANDSCAPE_NAME:"l_4"},{LANDSCAPE_ID:"10-uU7UlWU7SdfdvsFq7SFoQtCipmJ3J0",LANDSCAPE_NAME:"l_5"},{LANDSCAPE_ID:"1SlYHqH5PH9Sb6F-LNjdRtoSqV43RUqY_",LANDSCAPE_NAME:"l_6"},{LANDSCAPE_ID:"1MiA1iMcWoADTZVsQK0xDtYpZZkR76HJx",LANDSCAPE_NAME:"l_7"},{LANDSCAPE_ID:"1BJxcXL-w_ASnStLgwt1SudYrp7LJwrM1",LANDSCAPE_NAME:"l_8"},{LANDSCAPE_ID:"1pLSILiU_u_Nzco7WcytnPeBsnDEK1Bs1",LANDSCAPE_NAME:"l_9"},{LANDSCAPE_ID:"1RsWW2gUT619I5YM3lQMQMP-P6EV_ZjJY",LANDSCAPE_NAME:"l_10"},{LANDSCAPE_ID:"1qHoKiNNYUM95S2NTjIkPtgObjJDEul1t",LANDSCAPE_NAME:"l_11"},{LANDSCAPE_ID:"1_wK9lIPT7YOhEYCnazuq-Dt2KDqcNm6Y",LANDSCAPE_NAME:"l_12"},{LANDSCAPE_ID:"1fIAcodeeNB79UtWG4jApzIqku49ekG-D",LANDSCAPE_NAME:"l_13"},{LANDSCAPE_ID:"1mxJK3bY_StJFx6xLSOiNMWsaBWsEtTwg",LANDSCAPE_NAME:"l_14"},{LANDSCAPE_ID:"1BNH5J9C5nMS4V59kNcSlYg_R2IRo_bls",LANDSCAPE_NAME:"l_15"},{LANDSCAPE_ID:"1GPybrSREbn4lIc8cEE06XRldiZ3NSXTg",LANDSCAPE_NAME:"l_16"},{LANDSCAPE_ID:"1h3MT2TufcCp58VhV_uN124MYkLF0ruUh",LANDSCAPE_NAME:"l_17"},{LANDSCAPE_ID:"1rwfpzR5o_McdtctWggv8lYWrYJTl4PMM",LANDSCAPE_NAME:"l_18"},{LANDSCAPE_ID:"17dmqveKlo8pdNtWXZuTiM1gWl7v0yB_6",LANDSCAPE_NAME:"l_19"},{LANDSCAPE_ID:"10YgBpvgwaylPipMfEf2ktgHZALFSRsV7",LANDSCAPE_NAME:"l_20"}]})}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"right-inner",children:this.state&&this.state.landscapeList&&Object(d.jsx)("div",{className:"picture-thumbnail",children:this.state.landscapeList.map((function(t){return Object(d.jsx)("input",{className:"thumbnail-pic",type:"image",src:"https://drive.google.com/thumbnail?id=".concat(t.LANDSCAPE_ID),alt:t.LANDSCAPE_NAME,onClick:function(){return e.thumbnail(t.LANDSCAPE_ID)}})}))})})}}]),a}(i.Component),L=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={picture:0,pictureLarge:0,monumentList:[]},e.handleClick=function(e){},e.thumbnail=function(t){t&&e.setState({picture:0,pictureLarge:1})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({monumentList:[{MONUMENT_ID:"1hoCqcZ3ZxDORXV4P8E_dtxfBHjA4lzAj",MONUMENT_NAME:"m_1"},{MONUMENT_ID:"1y8MzmPkcYrzYEinhXxui0DyalPVSXHhF",MONUMENT_NAME:"m_2"},{MONUMENT_ID:"1Ad1OTnK4bPNxwNujVCGM_OMiYOYZ3DRg",MONUMENT_NAME:"m_3"},{MONUMENT_ID:"1QlGWZzmMaJxxJ2GOro2NXn2XscwNb-2a",MONUMENT_NAME:"m_4"},{MONUMENT_ID:"1bP5D43bnS9kaOWYuPEWetccKtnfE98yJ",MONUMENT_NAME:"m_5"},{MONUMENT_ID:"1lZT5qwVolDFWhAgWc-pKz42yO6C9jgRP",MONUMENT_NAME:"m_6"},{MONUMENT_ID:"1V5u1_w9eivarANdNd-IGh33Mx7TT_558",MONUMENT_NAME:"m_7"},{MONUMENT_ID:"1FMFG1RC2iMTJaZ8UAan3sAWErGVrq2on",MONUMENT_NAME:"m_8"},{MONUMENT_ID:"1wWwAFB28qIIKYFcRMmF0tHhrXFiGQ5nJ",MONUMENT_NAME:"m_9"},{MONUMENT_ID:"1rgfQdTq3YZOnANHhcgIbxLxmj0yHyio3",MONUMENT_NAME:"m_10"},{MONUMENT_ID:"1-k2bPCH5JNG7ytY4ZK0UmUe1L74jpQSo",MONUMENT_NAME:"m_11"},{MONUMENT_ID:"1YVtps3A60_RQ45lj-sg5kxcbx958MGti",MONUMENT_NAME:"m_12"},{MONUMENT_ID:"1LaVspBhFyBEHA9_m3EcINI1TF7VkhOQE",MONUMENT_NAME:"m_13"},{MONUMENT_ID:"16q49w58suLeCY36UDrB2uB64qiAdKqVG",MONUMENT_NAME:"m_14"}]})}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"right-inner",children:this.state&&this.state.monumentList&&Object(d.jsx)("div",{className:"picture-thumbnail",children:this.state.monumentList.map((function(t){return Object(d.jsx)("input",{className:"thumbnail-pic",type:"image",src:"https://drive.google.com/thumbnail?id=".concat(t.MONUMENT_ID),alt:t.MONUMENT_NAME,onClick:function(){return e.thumbnail(t.MONUMENT_ID)}})}))})})}}]),a}(i.Component),v=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={picture:1,pictureType:[]},e.handleClick=function(t){t&&e.setState({picture:t})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({pictureType:[{TYPE_ID:1,TYPE_NAME:"Wildlife"},{TYPE_ID:2,TYPE_NAME:"Birds"},{TYPE_ID:3,TYPE_NAME:"Nature"},{TYPE_ID:4,TYPE_NAME:"Architecture"},{TYPE_ID:5,TYPE_NAME:"Astrophotography"}]})}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"App-main-pictures",children:[Object(d.jsx)("div",{className:"left-container-pictures",children:this.state&&this.state.pictureType&&Object(d.jsx)("div",{className:"picture-type",children:this.state.pictureType.map((function(t){return Object(d.jsx)(A.a,{button:!0,onClick:function(){return e.handleClick(t.TYPE_ID)},children:Object(d.jsx)(M.a,{primary:t.TYPE_NAME})},t.TYPE_ID)}))})}),Object(d.jsxs)("div",{className:"right-container-pictures",children:[this.state&&1==this.state.picture&&Object(d.jsx)(O,{}),this.state&&2==this.state.picture&&Object(d.jsx)(f,{}),this.state&&3==this.state.picture&&Object(d.jsx)(g,{}),this.state&&4==this.state.picture&&Object(d.jsx)(L,{}),this.state&&5==this.state.picture&&Object(d.jsx)(p,{})]})]})}}]),a}(i.Component),x=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={tabIndex:0},e.handleClick=function(){e.setState({tabIndex:0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsx)(i.Fragment,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("img",{className:"logo-pointer",src:_,alt:"logo",onClick:function(){return e.handleClick()}})}),Object(d.jsxs)(N.d,{selectedIndex:this.state.tabIndex,onSelect:function(t){return e.setState({tabIndex:t})},children:[Object(d.jsxs)(N.b,{children:[Object(d.jsx)(N.a,{}),Object(d.jsx)(N.a,{children:Object(d.jsx)("div",{className:"tab-name",children:"Pictures"})}),Object(d.jsx)(N.a,{children:Object(d.jsx)("div",{className:"tab-name",children:"Contact"})})]}),Object(d.jsx)(N.c,{children:Object(d.jsx)(m,{})}),Object(d.jsx)(N.c,{children:Object(d.jsx)(v,{})}),Object(d.jsx)(N.c,{children:Object(d.jsx)(j,{})})]})]})})})}}]),a}(i.Component),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))},B=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("footer",{className:"App-footer",children:Object(d.jsx)("p",{children:"\xa9 MSH Photography 2021"})})})}}]),a}(i.Component);s.a.render(Object(d.jsxs)(n.a.StrictMode,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(B,{})]}),document.getElementById("root")),S()}},[[35,1,2]]]);
//# sourceMappingURL=main.b4d45b60.chunk.js.map