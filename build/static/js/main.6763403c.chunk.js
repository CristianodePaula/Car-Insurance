(this["webpackJsonpsite-base"]=this["webpackJsonpsite-base"]||[]).push([[0],{86:function(e,n,t){"use strict";t.r(n);var i,o,r,a,s,A,c,p,d,l,h,x=t(1),b=t.n(x),j=t(39),m=t.n(j),g=t(8),u=t(3),f=t(4),O=t(26),y=t(87),v=function(e){return Object(f.a)(i||(i=Object(u.a)(["\n    @media only screen and (max-width: 660px) {\n      ","\n    }\n  "])),e)},w=Object(f.b)(y.a.div)(o||(o=Object(u.a)(["\n    background: ",";\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 25px;   \n    position: fixed;\n    width: 100%;\n    z-index: 1;\n"])),(function(e){return e.scrollNav?"black":"transparent"})),z=f.b.img(r||(r=Object(u.a)(["\n    width: 150px;\n    left: 0;\n    border-radius: 10px;\n    cursor: pointer;\n    &:hover { \n        opacity: 0.7 \n    }\n    ","\n"])),v({width:"100px"})),S=f.b.ul(a||(a=Object(u.a)(["\n    display: flex; \n    list-style: none;\n"]))),C=Object(f.b)(O.Link)(s||(s=Object(u.a)(["\n    margin: 25px;\n    color: white; \n    font-size: 25px;\n    cursor: pointer;\n    &:hover { color: grey }\n    &.active {border-bottom: 2px solid red }\n    ","\n"])),v({display:"none"})),k=f.b.a(A||(A=Object(u.a)(["\n    display: none;\n    color: white;\n    cursor: pointer; \n    font-size: 25px;\n    ","\n"])),v({display:"fixed"})),U=t(13),E=t(64),R=t(88),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.4,n=Object(R.a)(),t=Object(E.a)({threshold:e}),i=Object(g.a)(t,2),o=i[0],r=i[1];return r?n.start("show"):n.start("hidden"),[o,n]},F={hidden:{y:-100,opacity:0},show:{y:1,opacity:1,transition:{type:"spring",stiffness:2e3,duration:2,delay:.2}}},V={hidden:{y:"-30vh",opacity:0,scale:0},show:{y:1,opacity:1,scale:1,transition:{type:"tween",duration:3,delay:.5}}},M={hidden:{opacity:0,scale:0},show:{opacity:.7,scale:1,transition:{duration:3,delay:1.5}}},K=Object(f.c)(c||(c=Object(u.a)(["\n  25% { transform: translateY(-50px) }\n  50% { transform: translateY(-100px) }\n  75% { transform: translateY(-150px) }\n  100% { transform: translateY(-200px) }\n"]))),L={hidden:{x:-100,opacity:0},show:{x:-1,opacity:1,transition:{duration:1,delay:.2}}},B={hidden:{scale:1.3,opacity:0},show:{scale:1,opacity:1,transition:{duration:2,delay:.2}}},D={hidden:{x:50,opacity:0},show:{x:0,opacity:1,transition:{duration:2,delay:.2}}},Y={hidden:{},show:{transition:{delay:1,when:"beforeChildren",staggerChildren:.4}}},J={hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{duration:2}}},I={hidden:{y:100,opacity:0},show:{y:0,opacity:1,transition:{duration:1}}},P={hidden:{x:100,opacity:0},show:{x:0,opacity:1,transition:{duration:3,delay:.5,type:"spring",stiffness:1e3}}},N={hidden:{y:-20,opacity:0},show:{y:1,opacity:1,transition:{duration:1,delay:.5}}},Z={hidden:{y:20,opacity:0},show:{y:1,opacity:1,transition:{duration:1,delay:.5}}},G=Object(f.c)(p||(p=Object(u.a)(["\n    0%, 100% { opacity: 1 }\n    50% { opacity: 0 }\n"]))),T=t(2);function H(e){var n=e.open,t=e.alternate,i=Object(x.useState)(!1),o=Object(g.a)(i,2),r=o[0],a=o[1],s=function(){window.scrollY>=80?a(!0):a(!1)};Object(x.useEffect)((function(){window.addEventListener("scroll",s)}),[]);var A=Q(),c=Object(g.a)(A,2),p=c[0],d=c[1];return Object(T.jsxs)(w,{scrollNav:r,ref:p,variants:F,animate:d,children:[Object(T.jsx)(z,{src:"data:image/png;base64,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",onClick:function(){O.animateScroll.scrollToTop()}}),Object(T.jsxs)(S,{children:[Object(T.jsx)(C,{to:"about",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Empresa "}),Object(T.jsx)(C,{to:"slider",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Servi\xe7os "}),Object(T.jsx)(C,{to:"cards",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Seguros "}),Object(T.jsx)(C,{to:"gallery",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Galeria"}),Object(T.jsx)(C,{to:"contact",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Contato "})]}),Object(T.jsx)(k,{open:n,onClick:t,children:Object(T.jsx)(U.c,{})})]})}var q,W,X,_,$,ee,ne,te=f.b.div(d||(d=Object(u.a)(["\n    text-align: center;\n    justify-content: center;\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    background: black;\n    display: grid;\n    align-items: center;\n    transition: 0.3s ease-in-out;\n    opacity: ","; \n    top: ","; \n"])),(function(e){return e.open?"100%":"0"}),(function(e){return e.open?"0%":"-100%"})),ie=f.b.ul(l||(l=Object(u.a)(["\n    display: grid;\n"]))),oe=Object(f.b)(O.Link)(h||(h=Object(u.a)(["\n    margin: 15px;\n    color: white; \n    font-size: 20px;\n    cursor: pointer;\n    &:hover { \n        color: grey \n    }\n    &.active {\n        border-bottom: 2px solid red \n    }\n"])));function re(e){var n=e.open,t=e.alternate;return Object(T.jsx)(te,{open:n,alternate:t,onClick:t,children:Object(T.jsxs)(ie,{children:[Object(T.jsx)(oe,{onClick:t,to:"about",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Empresa "}),Object(T.jsx)(oe,{onClick:t,to:"slider",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Servicos "}),Object(T.jsx)(oe,{onClick:t,to:"cards",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Planos "}),Object(T.jsx)(oe,{onClick:t,to:"gallery",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Galeria "}),Object(T.jsx)(oe,{onClick:t,to:"contact",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:" Contato "})]})})}var ae=f.b.div(q||(q=Object(u.a)(["\n    height: 100vh;\n"]))),se=f.b.video(W||(W=Object(u.a)(["\n    width: 100%;\n    height: 100%;\n    filter: brightness(0.3);\n    -o-object-fit:cover;\n    object-fit: cover;\n"]))),Ae=f.b.div(X||(X=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 25px;\n    color: white;\n    "," \n"])),v({top:"20%",height:"60%"})),ce=Object(f.b)(y.a.p)(_||(_=Object(u.a)(["\n    position: absolute;\n    left:0;\n    right:0;\n    margin-bottom: 150px;\n    font-size: 60px;\n    text-shadow: 2px 2px 2px #000;\n    "," \n"])),v({fontSize:"35px"})),pe=Object(f.b)(y.a.div)($||($=Object(u.a)(["\n    position: absolute;\n    height: 50px;\n    display: flex;\n    overflow: hidden;\n    top: 60%;\n    right: 40%;\n    "," \n"])),v({marginRight:"-35px"})),de=f.b.div(ee||(ee=Object(u.a)(["\n    height: 100%;\n    animation: "," 10s infinite;\n"])),K),le=f.b.span(ne||(ne=Object(u.a)(["\n    height: 50px;\n    font-size: 45px;\n    color: red;\n    display: flex;\n    align-items: center;\n    font-family: 'Roboto Slab', serif;\n    text-transform: uppercase;\n    text-shadow: 1px 1px 2px white;\n    "," \n"])),v({fontSize:"27px"})),he=t.p+"static/media/back.7320204a.mp4";function xe(){var e=Q(),n=Object(g.a)(e,2),t=n[0],i=n[1];return Object(T.jsxs)(ae,{ref:t,children:[Object(T.jsx)(se,{autoPlay:!0,loop:!0,muted:!0,src:he}),Object(T.jsx)(Ae,{children:Object(T.jsx)(ce,{variants:V,animate:i,children:"Seguradora Automotive"})}),Object(T.jsx)(pe,{variants:M,animate:i,children:Object(T.jsxs)(de,{children:[Object(T.jsx)(le,{children:"Seguran\xe7a"}),Object(T.jsx)(le,{children:"Cobertura 24hrs"}),Object(T.jsx)(le,{children:"Praticidade"}),Object(T.jsx)(le,{children:"Alto padr\xe3o"})]})})]})}var be,je,me,ge,ue,fe,Oe,ye,ve,we,ze,Se=t.p+"static/media/clients.a6515cd7.jpg",Ce=f.b.div(be||(be=Object(u.a)(["\n    height: 90vh;\n    background: #e1e1e1;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 60px;\n    overflow: hidden;\n    "," \n"])),v({display:"grid"})),ke=Object(f.b)(y.a.div)(je||(je=Object(u.a)(["\n    text-align: center;\n    width: 600px;\n    "," \n"])),v({margin:"-20px 0px 20px 0px",width:"360px"})),Ue=f.b.h1(me||(me=Object(u.a)(["\n    font-size: 40px;\n    "," \n"])),v({fontSize:"25px"})),Ee=f.b.p(ge||(ge=Object(u.a)(["\n    font-size: 25px;\n    padding: 30px;\n    ","\n"])),v({fontSize:"15px",padding:"10px"})),Re=Object(f.b)(y.a.img)(ue||(ue=Object(u.a)(["\n    height: 450px;    \n    width: 500px;\n    border-radius: 10px;\n    ","\n"])),v({height:"260px",width:"360px"}));function Qe(){var e=Q(),n=Object(g.a)(e,2),t=n[0],i=n[1];return Object(T.jsxs)(Ce,{id:"about",ref:t,children:[Object(T.jsxs)(ke,{variants:L,animate:i,children:[Object(T.jsx)(Ue,{children:"Quem Somos"}),Object(T.jsx)(Ee,{children:"A seguradora Automotive tem o seguro ideal para o seu ve\xedculo. Al\xe9m de assist\xeancia de qualidade, voc\xea pode contar com atendimento 24h e benef\xedcios exclusivos. N\xe3o importa em que lugar esteja, estaremos l\xe1. Confira as melhores condi\xe7\xf5es para voc\xea renovar o seguro do seu ve\xedculo, seja ele carro, moto, pick up ou caminh\xe3o."})]}),Object(T.jsx)(Re,{src:Se,variants:B,animate:i})]})}var Fe,Ve,Me,Ke,Le,Be,De,Ye,Je=f.b.div(fe||(fe=Object(u.a)(["\n    height: 90vh;\n    background-color: black;\n    display: flex;\n    position: relative; \n    overflow: hidden;\n    ","\n"])),v({height:"45vh"})),Ie=f.b.a(Oe||(Oe=Object(u.a)(["\n    width: 50px;\n    height: 50px;\n    background-color: #fff;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    cursor: pointer;\n    opacity: 0.5;\n    z-index: 1;\n    left: ",";\n    right: ",";\n    ","\n"])),(function(e){return"left"===e.direction&&"10px"}),(function(e){return"right"===e.direction&&"10px"}),v({width:"20px",height:"20px"})),Pe=f.b.div(ye||(ye=Object(u.a)(["\n    display: flex;\n    position: aboslute;\n    justify-content: center;\n    text-align: center;\n    transition: all 1.5s ease;\n    color: white;\n    transform: translateX(","vw);\n"])),(function(e){return-100*e.slideIndex})),Ne=Object(f.b)(y.a.img)(ve||(ve=Object(u.a)(["\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 90vh;    \n    object-fit: cover;\n    background-color: black;\n    ","   \n"])),v({height:"45vh"})),Ze=Object(f.b)(y.a.h1)(we||(we=Object(u.a)(["\n    position: absolute;\n    top: 10px;\n    margin-left: 100px;\n    font-size: 45px;\n    text-shadow: 10px 10px 10px black;\n    ","\n"])),v({fontSize:"24px",marginLeft:"1rem",top:"30px"})),Ge=Object(f.b)(y.a.p)(ze||(ze=Object(u.a)(["\n    position: absolute;\n    bottom: 60px;\n    margin-left: 100px;\n    font-size: 35px;\n    text-shadow: 10px 10px 10px black;\n    font-family: 'Lato', sans-serif;\n    ","\n"])),v({fontSize:"15px",marginLeft:"1rem"})),Te=[{title:"Seguro de carros",price:" 129,99",imageUrl:"https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{title:"Seguro de motos",price:" 99,99",imageUrl:"https://images.pexels.com/photos/1231692/pexels-photo-1231692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{title:"Seguro de pick ups",price:" 159.99",imageUrl:"https://images.pexels.com/photos/5864151/pexels-photo-5864151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{title:"Seguro de \xf4nibus",price:"199,99",imageUrl:"https://images.pexels.com/photos/1345717/pexels-photo-1345717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}],He=[{title:"Conhe\xe7a nossos seguros",desc:"Conhe\xe7a o seguro mais completo do pa\xeds",imageUrl:"https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{title:"Seguro para todas as linhas de ve\xedculos",desc:"Cuidamos de seu carro, moto, utilit\xe1rio e caminh\xe3o",imageUrl:"https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{title:"Veja nossa galeria de assegurados",desc:"Temos o seguro certo para seu tipo de ve\xedculo",imageUrl:"https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{title:"Entre em contato e torne-se cliente",desc:"Nosso atendimento funciona 24 horas por dia",imageUrl:"https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}],qe=[{imageUrl:"https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/1149070/pexels-photo-1149070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/1149140/pexels-photo-1149140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/3065602/pexels-photo-3065602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/7245319/pexels-photo-7245319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/2658987/pexels-photo-2658987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{imageUrl:"https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}];function We(){var e=Object(x.useState)(0),n=Object(g.a)(e,2),t=n[0],i=n[1],o=function(e){i("left"===e?t>0?t-1:3:t<3?t+1:0)},r=Q(),a=Object(g.a)(r,2),s=a[0],A=a[1];return Object(T.jsxs)(Je,{id:"slider",ref:s,children:[Object(T.jsx)(Ie,{direction:"left",onClick:function(){return o("left")},children:Object(T.jsx)(U.a,{})}),Object(T.jsx)(Pe,{slideIndex:t,children:He.map((function(e,n){return Object(T.jsxs)("div",{children:[Object(T.jsx)(Ne,{src:e.imageUrl}),Object(T.jsx)(Ze,{variants:D,animate:A,children:e.title}),Object(T.jsx)(Ge,{variants:D,animate:A,children:e.desc})]},n)}))}),Object(T.jsx)(Ie,{direction:"right",onClick:function(){return o("right")},children:Object(T.jsx)(U.b,{})})]})}var Xe,_e,$e,en=f.b.div(Fe||(Fe=Object(u.a)(["\n    height: 90vh;\n    background: black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n"]))),nn=Object(f.b)(y.a.div)(Ve||(Ve=Object(u.a)(["\n    display: flex; \n    margin-top: -10vh;\n    ","\n"])),v({display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"-30px"})),tn=f.b.div(Me||(Me=Object(u.a)(["\n    &:hover { \n        opacity: 0.7; \n        transform: scale(1.08); \n        transition: all 0.5s ease;\n    } \n"]))),on=Object(f.b)(y.a.img)(Ke||(Ke=Object(u.a)(["\n    height: 420px;\n    width: 260px;\n    margin: 30px;\n    border-radius: 30px;\n    object-fit: cover;\n    ","\n"])),v({height:"240px",width:"170px"})),rn=Object(f.b)(y.a.div)(Le||(Le=Object(u.a)(["\n    text-align: center;\n    margin-top: -200px;\n    ","\n"])),v({marginTop:"-160px"})),an=f.b.h1(Be||(Be=Object(u.a)(["\n    font-size: 25px;\n    color: white;\n    text-shadow: 10px 10px 10px black;\n    ","\n"])),v({fontSize:"16px"})),sn=f.b.p(De||(De=Object(u.a)(["\n    font-size: 20px;\n    color: white;\n    text-shadow: 10px 10px 10px black;\n    ","\n"])),v({fontSize:"16px"})),An=f.b.button(Ye||(Ye=Object(u.a)(["\n    background: darkred;\n    font-size: 15px;\n    color: white;\n    padding: 8px;\n    margin: 20px;\n    border-radius: 10px;\n    border: 1px solid;\n    cursor: pointer;\n    ","\n"])),v({fontSize:"10px",padding:"4px"}));function cn(){var e=Q(),n=Object(g.a)(e,2),t=n[0],i=n[1];return Object(T.jsx)(en,{id:"cards",ref:t,children:Object(T.jsx)(nn,{variants:Y,animate:i,children:Te.map((function(e,n){return Object(T.jsx)("div",{children:Object(T.jsxs)(tn,{whileHover:{transition:{scale:1.1,type:"tween",ease:"easeOut"}},children:[Object(T.jsx)(on,{src:e.imageUrl,variants:I}),Object(T.jsxs)(rn,{variants:J,children:[Object(T.jsx)(an,{children:e.title}),Object(T.jsx)(sn,{children:"A partir de"}),Object(T.jsxs)(An,{children:["R$",e.price]})]})]})},n)}))})})}var pn=f.b.div(Xe||(Xe=Object(u.a)(["\n    background: black;\n    .model {\n        width: 100%;\n        height: 100vh;\n        position: fixed;\n        top: 0px;\n        left: 0px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: #000;\n        transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out; \n        visibility: hidden;\n        opacity: 0;\n        transform: scale(0);\n        overflow: hidden;\n        z-index: 999;\n    }\n    .model.open {\n        top: 10px;\n        visibility: visible;\n        opacity: 1;\n        transform: scale(1);\n    }\n    .model img {\n        width: auto;\n        max-width: 100%;\n        height: auto;\n        max-height: 100%;\n        display: block;\n        line-height: 0;\n        box-sizing: border-box;\n        padding: 20px 0 20px;\n        margin: 0 auto;\n   }\n   .model.open svg {\n        position: fixed;\n        top: 10px;\n        right: 10px;\n        width: 2rem;\n        height: 2rem;\n        padding: 5px;\n        color: white;\n        cursor: pointer;\n"]))),dn=f.b.div(_e||(_e=Object(u.a)(["\n    -webkit-column-count: 3;   \n    -moz-column-count: 3;\n    column-count: 3;\n    -webkit-column-width: 33%;\n    -moz-column-width: 33%;\n    column-width: 33%;\n    padding: 0 12px;\n    ","\n"])),v({webkitColumnCount:2,mozColumnCount:2,columnCount:2})),ln=f.b.img($e||($e=Object(u.a)(["\n    margin-top: 10px; \n    border-radius: 10px;\n    width: 100%;\n    max-width: 600px;\n    cursor: pointer;\n    transition: transform .2s; \n    filter: opacity(0.7);\n    &:hover{ \n        filter: opacity(1);\n        transform: scale(1.05)\n    }\n"])));var hn,xn,bn,jn,mn,gn,un,fn,On,yn,vn,wn,zn,Sn,Cn=function(){var e=Object(x.useState)(!1),n=Object(g.a)(e,2),t=n[0],i=n[1],o=Object(x.useState)(""),r=Object(g.a)(o,2),a=r[0],s=r[1];return Object(T.jsxs)(pn,{id:"gallery",children:[Object(T.jsxs)("div",{className:t?"model open":"model",children:[Object(T.jsx)(ln,{src:a}),Object(T.jsx)(U.f,{onClick:function(){return i(!1)}})]}),Object(T.jsx)(dn,{children:qe.map((function(e){return Object(T.jsx)(ln,{onClick:function(){return n=e.imageUrl,s(n),void i(!0);var n},src:e.imageUrl})}))})]})},kn=t.p+"static/media/contacts.a76a1068.jpg",Un=f.b.div(hn||(hn=Object(u.a)(["\n    position: relative;\n    height: 63vh;\n    background:url(",");\n    background-size: cover;\n    background-position: center;\n    overflow: hidden;\n    ","\n"])),kn,v({height:"50vh"})),En=Object(f.b)(y.a.form)(xn||(xn=Object(u.a)(["\n    background: rgba(0, 0, 0, 0.3);\n    width: 450px;\n    height: 360px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: absolute;\n    top:0;\n    left: 0;\n    right:0;\n    bottom: 0;\n    margin: auto;\n    border-radius: 20px;   \n    ","\n"])),v({width:"350px",height:"280px"})),Rn=f.b.h1(bn||(bn=Object(u.a)(["\n    color: white;\n    margin-top: 10px;\n    font-size: 20px;\n    ","\n"])),v({fontSize:"15px"})),Qn=f.b.input(jn||(jn=Object(u.a)(["\n    width: 380px;\n    margin: 10px;\n    padding: 10px;\n    border: 0px;\n    border-radius: 10px;\n    font-size: 15px;\n    outline: 0px;\n    ","\n"])),v({width:"280px",height:"30px",fontSize:"10px"})),Fn=f.b.textarea(mn||(mn=Object(u.a)(["\n    width: 380px;\n    height: 250px;\n    padding: 10px;\n    border-radius: 10px;\n    margin: 10px;\n    font-size: 15px;\n    resize: none;\n    outline: 0px;\n    ","\n"])),v({width:"280px",height:"100px",fontSize:"10px"})),Vn=f.b.button(gn||(gn=Object(u.a)(["\n    background: red;\n    width: 100px;\n    height: 70px;\n    border: 20px;\n    border-radius: 10px;\n    margin-bottom: 10px;\n    color: white;\n    font-family: 'Roboto Slab', serif;\n    font-size: 16px;\n    cursor: pointer;\n    &:hover{\n        background: darkred;\n    }\n    ","\n"])),v({width:"70px",height:"25px",fontSize:"12px"})),Mn=t(65);function Kn(){var e=Q(),n=Object(g.a)(e,2),t=n[0],i=n[1];return Object(T.jsx)(Un,{id:"contact",ref:t,children:Object(T.jsxs)(En,{onSubmit:function(e){e.preventDefault(),Mn.a.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",e.target,"YOUR_USER_ID").then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},variants:P,animate:i,children:[Object(T.jsx)(Rn,{children:"Entre em Contato"}),Object(T.jsx)(Qn,{type:"text",placeholder:"Nome"}),Object(T.jsx)(Qn,{type:"email",placeholder:"Email"}),Object(T.jsx)(Fn,{placeholder:"Escreva sua Menssagem"}),Object(T.jsx)(Vn,{children:"Enviar"})]})})}var Ln=f.b.div(un||(un=Object(u.a)(["\n    padding: 15px;\n    display: grid;\n    background: black;\n    grid-template-columns: repeat(4, 1fr);\n    "," \n"])),v({padding:"10px",gridTemplateColumns:"repeat(2, 1fr)"})),Bn=f.b.div(fn||(fn=Object(u.a)(["\n    padding: 0 2rem;    \n    "," \n"])),v({marginLeft:"15px",marginTop:"-15px"})),Dn=f.b.h1(On||(On=Object(u.a)(["\n    font-size: 25px; \n    font-family: 'Roboto Slab', serif;\n    margin-bottom: 1rem; \n    color: #f26e2e \n"]))),Yn=f.b.p(yn||(yn=Object(u.a)(["\n    color: red; \n    font-size: 17px; \n    font-family: 'Roboto Slab', serif;\n    animation: "," 3s infinite; \n"])),G),Jn=Object(f.b)(y.a.div)(vn||(vn=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    align-item: flex-start;\n    padding: 0 2rem;\n    ","  \n"])),v({padding:"0 3rem"})),In=f.b.h2(wn||(wn=Object(u.a)(["\n    font-size: 14px;\n    font-weight: bold;\n    margin-bottom: 1rem;\n    color: grey;\n    ","\n"])),v({fontSize:"12px"})),Pn=f.b.p(zn||(zn=Object(u.a)(["\n    text-decoration: none;\n    margin-bottom: 0.5rem;\n    font-size: 14px;\n    cursor: pointer;\n    color: white;\n    &:hover { \n        color:  #f26e2e \n    }\n    "," \n"])),v({fontSize:"12px"})),Nn=f.b.a(Sn||(Sn=Object(u.a)(["\n    font-size: 20px;\n    cursor: pointer;  \n    color: white;\n    &:hover { \n        color: #f26e2e\n    }\n    ","\n"])),v({margin:"1.2px",fontSize:"16px"}));function Zn(){var e=Q(),n=Object(g.a)(e,2),t=n[0],i=n[1];return Object(T.jsxs)(Ln,{ref:t,children:[Object(T.jsxs)(Bn,{children:[Object(T.jsx)(Dn,{variants:N,animate:i,children:"Explorar"}),Object(T.jsx)(Yn,{variants:N,animate:i,children:"Conhe\xe7a melhor a nossa p\xe1gina"})]}),Object(T.jsxs)(Jn,{variants:Z,animate:i,children:[Object(T.jsx)(In,{children:"Contate-nos"}),Object(T.jsx)(Pn,{to:"/",children:"Contato"}),Object(T.jsx)(Pn,{to:"/",children:"Suporte"}),Object(T.jsx)(Pn,{to:"/",children:"Qualifica\xe7\xf5es"}),Object(T.jsx)(Pn,{to:"/",children:"Premia\xe7\xf5es"})]}),Object(T.jsxs)(Jn,{variants:N,animate:i,children:[Object(T.jsx)(In,{children:"Parcerias"}),Object(T.jsx)(Pn,{to:"/",children:"RedCar"}),Object(T.jsx)(Pn,{to:"/",children:"SuperVe\xedculos"}),Object(T.jsx)(Pn,{to:"/",children:"SegurosVida"}),Object(T.jsx)(Pn,{to:"/",children:"MegaRoda"})]}),Object(T.jsxs)(Jn,{variants:Z,animate:i,children:[Object(T.jsx)(In,{children:"Redes Sociais"}),Object(T.jsx)(Nn,{children:Object(T.jsx)(U.d,{})}),Object(T.jsx)(Nn,{children:Object(T.jsx)(U.e,{})}),Object(T.jsx)(Nn,{children:Object(T.jsx)(U.g,{})}),Object(T.jsx)(Nn,{children:Object(T.jsx)(U.h,{})})]})]})}function Gn(){var e=Object(x.useState)(!1),n=Object(g.a)(e,2),t=n[0],i=n[1],o=function(){i(!t)};return Object(T.jsxs)(y.a.div,{initial:"hidden",animation:"show",children:[Object(T.jsx)(H,{alternate:o}),Object(T.jsx)(re,{open:t,alternate:o}),Object(T.jsx)(xe,{}),Object(T.jsx)(Qe,{}),Object(T.jsx)(We,{}),Object(T.jsx)(cn,{}),Object(T.jsx)(Cn,{}),Object(T.jsx)(Kn,{}),Object(T.jsx)(Zn,{})]})}t(85);m.a.render(Object(T.jsx)(b.a.StrictMode,{children:Object(T.jsx)(Gn,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.6763403c.chunk.js.map