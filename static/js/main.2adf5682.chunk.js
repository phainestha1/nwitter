(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{83:function(n,e,t){},84:function(n,e,t){"use strict";t.r(e);var i=t(8),c=t(60),a=t.n(c),r=t(26),o=t(12),s=t(33),d=t(14),l=t(17),j=t(1),b=t.n(j),x=t(2),p=t(56),h=t(61),u=t(18),f=t(28),O={apiKey:"AIzaSyAG5FF5CL5sIPmmzNr6hqfCotPSzyIoiao",authDomain:"nwitter-6cd0f.firebaseapp.com",projectId:"nwitter-6cd0f",storageBucket:"nwitter-6cd0f.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/nwitter",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyAG5FF5CL5sIPmmzNr6hqfCotPSzyIoiao",REACT_APP_AUTH_DOMAIN:"nwitter-6cd0f.firebaseapp.com",REACT_APP_PROJECT_ID:"nwitter-6cd0f",REACT_APP_STORAGE_BUCKET:"nwitter-6cd0f.appspot.com",REACT_APP_MESSAGEING_ID:"909027995756",REACT_APP_APP_ID:"1:909027995756:web:f874a3a47371d7c0a3a849"}).REACT_APP_MESSAGING_ID,appId:"1:909027995756:web:f874a3a47371d7c0a3a849"};p.a.initializeApp(O);p.a;var g,m,v,w,y,k,I,N,S,C,A,_,B,z,T,D,E,P,R,U,F,L,M,J,G,K,H,Y,q,W,V,Q,X,Z,$,nn,en,tn=Object(h.a)(),cn=Object(u.e)(),an=Object(f.c)(),rn=t(24),on=t(13),sn=t(62),dn=t(63),ln=t(36),jn=t(4),bn=function(){var n=Object(i.useState)(""),e=Object(d.a)(n,2),t=e[0],c=e[1],a=Object(i.useState)(""),r=Object(d.a)(a,2),o=r[0],s=r[1],l=Object(i.useState)(!0),j=Object(d.a)(l,2),p=j[0],h=j[1],u=Object(i.useState)(""),f=Object(d.a)(u,2),O=f[0],g=f[1],m=function(n){var e=n.target,t=e.name,i=e.value;"email"===t?c(i):"password"===t&&s(i)},v=function(){var n=Object(x.a)(b.a.mark((function n(e){var t,i,c,a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=e.target.name,i=new rn.c,c=new rn.b,a=new rn.a,"google"===t?Object(rn.g)(tn,i):"github"===t?Object(rn.g)(tn,c):"facebook"===t&&Object(rn.g)(tn,a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),w=function(){var n=Object(x.a)(b.a.mark((function n(e){var i;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),n.prev=1,!p){n.next=8;break}return n.next=5,Object(rn.d)(tn,t,o);case 5:i=n.sent,n.next=11;break;case 8:return n.next=10,Object(rn.f)(tn,t,o);case 10:i=n.sent;case 11:console.log(i),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),g(n.t0.message);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})));return function(e){return n.apply(this,arguments)}}();return Object(jn.jsx)(xn,{children:Object(jn.jsxs)(pn,{children:[Object(jn.jsx)("h3",{children:"Nweet Your Mind"}),Object(jn.jsx)("a",{href:"https://nomadcoders.co/community/thread/1115",children:Object(jn.jsx)("img",{className:"logo",src:"https://nomadcoders.co/m.svg",alt:"nomadlogo"})}),Object(jn.jsxs)("form",{onSubmit:w,children:[Object(jn.jsx)("input",{className:"infoInput",name:"email",type:"text",placeholder:"Email",required:!0,value:t,onChange:m}),Object(jn.jsx)("input",{className:"infoInput",name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:m}),Object(jn.jsx)("input",{className:"altSignInButton",type:"submit",value:p?"Create Account":"Sign In"}),O]}),Object(jn.jsx)("span",{onClick:function(){h((function(n){return!n}))},children:p?"Sign In":"Create Account"}),Object(jn.jsx)("br",{})," ",Object(jn.jsx)("br",{}),Object(jn.jsx)("span",{className:"altMessage",children:"Have Other Accounts?"}),Object(jn.jsxs)("div",{children:[Object(jn.jsxs)("button",{className:"altSignInButton",onClick:v,name:"google",children:["Continue with \xa0 ",Object(jn.jsx)(sn.a,{})]}),Object(jn.jsxs)("button",{className:"altSignInButton",onClick:v,name:"github",children:["Continue with \xa0 ",Object(jn.jsx)(dn.a,{})]}),Object(jn.jsxs)("button",{className:"altSignInButton",onClick:v,name:"facebook",children:["Continue with \xa0 ",Object(jn.jsx)(ln.b,{})]})]})]})})},xn=on.a.div(g||(g=Object(o.a)(['\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background : linear-gradient(\n        to right, \n        rgba(20, 20, 20, 0.3) 30%, \n        rgba(20, 20, 20, 0.7) 50%,\n        rgba(20, 20, 20, 1)\n    ),\n    url("https://source.unsplash.com/random/1920x1080");\n    background-size: cover;\n']))),pn=on.a.div(m||(m=Object(o.a)(["\n    color: honeydew;\n    border: 3px solid honeydew;\n    border-radius: 8px;\n    text-align: center;\n    width: 370px;\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 20px 10px 50px 10px;\n    \n    .infoInput {\n        display: flex;\n        flex-direction: column;\n        margin: 0 auto;\n        margin-top: 8px;\n        margin-bottom: 8px;\n        background-color: transparent;\n        border: 2px solid honeydew;\n        border-radius: 4px;\n        color: honeydew;\n        text-align: center;\n        width: 70%;\n        height: 35px;\n    }\n    .infoInput::placeholder {\n        color: honeydew;\n        text-align: center;\n    }\n    .infoInput:focus::placeholder {\n        color: transparent;\n    }\n\n    .altSignInButton, .signInButton {\n        background-color: transparent;\n        color: honeydew;\n        border: 2px solid honeydew;\n        border-radius: 20px;\n        color: honeydew;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 0 auto;\n        width: 50%;\n        height: 30px;\n        cursor: pointer;\n        margin-top: 8px;\n        transition: 0.25s;\n    }\n    .altSignInButton:hover {\n        background-color: honeydew;\n        color: black;\n    }\n\n    .logo {\n        width: 55px;\n        height: 50px;\n    }\n\n"]))),hn=function(){return Object(jn.jsxs)("div",{children:[Object(jn.jsx)(bn,{}),Object(jn.jsx)(un,{children:Object(jn.jsxs)("footer",{children:[" \xa9 \uc720\ud55c\ud68c\uc0ac \ub178\ub9c8\ub4dc\ucef4\ud37c\ub2c8 ",Object(jn.jsx)("br",{})," 2021\ub144 3\ubd84\uae30 \u5929\u4e0b\u7b2c\u4e00 \ud2b8\uc704\ud130 \ubaa8\ubc29 \uacbd\uc5f0\ub300\ud68c  "]})})]})},un=on.a.div(v||(v=Object(o.a)(["\n    font-family: 'ChosunGs';\n    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGs.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    color: white;\n    position: fixed;\n    padding: 10px 10px 0px 10px;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n    font-size: 17px;\n"]))),fn=t(46),On=t(45),gn=function(n){var e=n.nweetObj,t=n.isOwner,c=Object(i.useState)(!1),a=Object(d.a)(c,2),r=a[0],o=a[1],s=Object(i.useState)(e.text),l=Object(d.a)(s,2),j=l[0],p=l[1],h=function(){var n=Object(x.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.confirm("Are you sure that you want to delete this nweet?")){n.next=6;break}return n.next=4,Object(u.c)(Object(u.d)(cn,"nweets/".concat(e.id)));case 4:return n.next=6,Object(f.a)(Object(f.d)(an,e.attachmentUrl));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),O=function(){o((function(n){return!n}))},g=function(){var n=Object(x.a)(b.a.mark((function n(t){var i;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),i=Object(u.d)(cn,"nweets/".concat(e.id)),n.next=4,Object(u.i)(i,{text:j});case 4:o(!1);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(jn.jsx)(mn,{children:r?Object(jn.jsx)(jn.Fragment,{children:t&&Object(jn.jsxs)(jn.Fragment,{children:[Object(jn.jsxs)("form",{onSubmit:g,children:[Object(jn.jsx)("input",{type:"text",placeholder:"Edit Your Nweet",value:j,onChange:function(n){var e=n.target.value;p(e)},required:!0}),Object(jn.jsx)("input",{type:"submit",value:"Update Nweet"})]}),Object(jn.jsx)("button",{onClick:O,children:"Cancel"})]})}):t?Object(jn.jsx)(jn.Fragment,{children:Object(jn.jsxs)(Cn,{children:[Object(jn.jsxs)(_n,{children:[Object(jn.jsx)(On.a,{id:"delete",size:18,onClick:h}),Object(jn.jsx)(fn.a,{id:"edit",size:18,onClick:O})]}),Object(jn.jsxs)(In,{children:[Object(jn.jsxs)(Sn,{children:[Object(jn.jsxs)("h4",{children:["@",e.createdAt]}),Object(jn.jsx)("h5",{children:null===e.nickName?"John Doe":e.nickName})]}),Object(jn.jsx)(Nn,{children:Object(jn.jsx)("h4",{children:e.text})}),e.attachmentUrl&&Object(jn.jsx)("img",{src:e.attachmentUrl,alt:"nweetImage",width:"50ox",height:"50px"})]}),Object(jn.jsx)(yn,{children:Object(jn.jsx)("img",{src:null===e.profileImage?"https://nomadcoders.co/m.svg":e.profileImage,alt:"profileImage"})})]})}):Object(jn.jsx)(jn.Fragment,{children:Object(jn.jsxs)(An,{children:[Object(jn.jsx)(yn,{children:Object(jn.jsx)("img",{src:null===e.profileImage?"https://nomadcoders.co/m.svg":e.profileImage,alt:"profileImage"})}),Object(jn.jsxs)(vn,{children:[Object(jn.jsxs)(wn,{children:[Object(jn.jsx)("h5",{children:null===e.nickName?"John Doe":e.nickName}),Object(jn.jsxs)("h4",{children:["@",e.createdAt]})]}),Object(jn.jsx)(kn,{children:Object(jn.jsx)("h5",{children:e.text})})]}),e.attachmentUrl&&Object(jn.jsx)("img",{src:e.attachmentUrl,alt:"nweetImage",width:"50ox",height:"50px"})]})})})},mn=on.a.div(w||(w=Object(o.a)(["\n"]))),vn=on.a.div(y||(y=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    padding-left: 8px;\n    margin-left: 10px;\n    border-left: 1px solid #d0c8cb;\n"]))),wn=on.a.div(k||(k=Object(o.a)(["\n    display: flex;\n    justify-content: left;\n    margin-left: 5px;\n    margin-bottom: 3px;\n\n    // Date\n    >h4{\n        font-size: 11px;\n        font-weight: 400;\n        color: gray;\n        padding-top: 4px;\n        padding-left: 3px;\n    }\n    // Name\n    >h5 {\n        font-size: 17px;\n    }\n"]))),yn=on.a.div(I||(I=Object(o.a)(["\n    >img {\n        width: 60px;\n        height: 60px;\n        border-radius: 999px;\n        background-color: white;\n    }\n"]))),kn=on.a.div(N||(N=Object(o.a)(["  \n    display: flex;\n    flex-direction: column;\n    padding-left: 5px;\n\n    >h4{\n        font-size: 15px;\n    }\n    >h5{\n        font-weight: 400;\n        font-size: 15px;\n    }\n"]))),In=on.a.div(S||(S=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-right: 0;\n    padding-right: 8px;\n    margin-right: 10px;\n    border-right: 1px solid #d0c8cb;\n"]))),Nn=on.a.div(C||(C=Object(o.a)(["  \n    display: flex;\n    flex-direction: column;\n    padding-left: 15px;\n    text-align: right;\n\n    >h4 {\n        font-weight: 400;\n        font-size: 15px;\n    }\n\n"]))),Sn=on.a.div(A||(A=Object(o.a)(["\n    display: flex;\n    justify-content: right;\n    margin-bottom: 3px;\n\n    >h4{\n        font-size: 11px;\n        font-weight: 400;\n        color: gray;\n        padding-top: 4px;\n        padding-right: 3px;\n    }\n    >h5 {\n        font-size: 17px;\n    }\n"]))),Cn=on.a.div(_||(_=Object(o.a)(["\n    display: flex;\n    flex: 1;\n    min-width: 430px;\n    margin-left: auto;\n    margin-right: 20px;\n\n    align-items: center;\n    justify-content: right;\n    padding: 5px 10px 5px 10px;\n\n    >h4 {\n        margin-right: 15px;\n        max-width: 350px;\n    }\n    >h5 {\n    }\n"]))),An=on.a.div(B||(B=Object(o.a)(["\n    display: flex;\n    flex: 1;\n    min-width: 430px;\n    align-items: center;\n    margin-left: 20px;\n    padding: 5px 10px 5px 10px;\n    >h4 {\n        margin-left: 15px;\n        max-width: 350px;\n    }\n"]))),_n=on.a.div(z||(z=Object(o.a)(["\n    display: flex;\n    margin-top: 20px;\n    cursor: pointer;\n\n\n    #delete{\n        transition: 0.2s;\n    :hover {\n        opacity: 0.3;\n        }\n    }\n    #edit{\n        transition: 0.2s;\n    :hover {\n        opacity: 0.3;\n        }\n    }\n"]))),Bn=t(85),zn=t(49),Tn=t(48),Dn=t(67),En=t(47),Pn=t.n(En),Rn=function(n){var e=n.userObj,t=Object(i.useState)(""),c=Object(d.a)(t,2),a=c[0],r=c[1],o=Object(i.useState)(""),s=Object(d.a)(o,2),l=s[0],j=s[1],p=Object(i.useState)(!1),h=Object(d.a)(p,2),O=h[0],g=h[1],m=new Date,v=m.getMonth(),w=m.getDate(),y="".concat(v+1,"\uc6d4 ").concat(w,"\uc77c"),k=function(){var n=Object(x.a)(b.a.mark((function n(t){var i,c,o,s;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),i="",""===l){n.next=10;break}return c=Object(f.d)(an,"".concat(e.uid,"/").concat(Object(Bn.a)())),n.next=6,Object(f.e)(c,l,"data_url");case 6:return o=n.sent,n.next=9,Object(f.b)(o.ref);case 9:i=n.sent;case 10:return s={text:a,orderingBy:Date.now(),createdAt:y,creatorId:e.uid,nickName:e.displayName,profileImage:e.photoURL,attachmentUrl:i},n.next=13,Object(u.a)(Object(u.b)(cn,"nweets"),s);case 13:r(""),j("");case 15:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(jn.jsxs)(jn.Fragment,{children:[Object(jn.jsxs)(Jn,{children:[Object(jn.jsx)(Gn,{children:Object(jn.jsxs)("div",{className:"attachImage",children:[Object(jn.jsxs)("label",{for:"image",children:[" ",Object(jn.jsx)(ln.a,{size:20})," "]}),Object(jn.jsx)("input",{id:"image",type:"file",accept:"image/*",onChange:function(n){var e=n.target.files[0],t=new FileReader;t.onloadend=function(n){var e=n.currentTarget.result;j(e)},t.readAsDataURL(e)}})]})}),Object(jn.jsx)(Un,{className:"".concat(l?"":"hidden"),children:l&&Object(jn.jsxs)(jn.Fragment,{children:[Object(jn.jsx)("button",{onClick:function(){j("")},children:Object(jn.jsx)(Tn.a,{size:20})}),Object(jn.jsx)("img",{src:l,alt:"attachedImage",width:"60px",height:"60px"})]})}),Object(jn.jsxs)(Kn,{children:[Object(jn.jsx)("button",{className:"EmojiButton",onClick:function(){g((function(n){return!n}))},children:Object(jn.jsx)(Dn.a,{size:20})}),Object(jn.jsx)("div",{className:"modal ".concat(O?"":"hidden"),children:Object(jn.jsx)(Pn.a,{onEmojiClick:function(n,e){r((function(n){return n+e.emoji}))}})})]})]}),Object(jn.jsx)("form",{onSubmit:k,children:Object(jn.jsxs)(Fn,{children:[Object(jn.jsx)(Ln,{children:Object(jn.jsx)("input",{value:a,onChange:function(n,e){var t=n.target.value;r(t)},type:"text",placeholder:"Nweet Everyone!",maxLength:60})}),Object(jn.jsx)(Mn,{children:Object(jn.jsx)("button",{type:"submit",value:"nweet",children:Object(jn.jsx)(zn.b,{size:25})})})]})})]})},Un=on.a.div(T||(T=Object(o.a)(["\n        position: fixed;\n        flex-direction: column;\n        width: 278px;\n        height: 318px;\n        left: 550px;\n        bottom: 10vh;\n        background-color: white;\n        border-radius: 5px;\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), \n                    0 6px 6px rgba(0, 0, 0, 0.23);\n\n    >img {\n        margin: auto;\n    }\n    >button {\n        display: flex;\n        justify-content: right;\n        padding-top: 2px;\n        padding-left: 2px;\n        margin-left: 5px;\n        margin-right: 5px;\n        color: gray;\n        background-color: white;\n        border: none;\n        border-bottom: 1px solid #49274b;\n        cursor: pointer;\n        transition: 0.2s;\n        :hover {\n            color: red;\n        }\n    }\n\n\n"]))),Fn=on.a.div(D||(D=Object(o.a)(["\n    display: flex;\n    border: none;\n    flex-direction: row;\n    justify-content: center;\n\n    color: #3f3f3f;\n"]))),Ln=on.a.div(E||(E=Object(o.a)(["\n    display: flex;\n    width: 50vw;\n    padding: 15px;\n    border: 1px solid gray;\n    border-radius: 3px;\n    \n    >input{\n        border: none;\n        width: 100%;\n        height: 100%;\n    }\n    >input:focus {outline: none;}\n\n"]))),Mn=on.a.div(P||(P=Object(o.a)(["\n    display: flex;\n\n    >button {\n        border: none;\n        background-color: transparent;\n        cursor: pointer;\n        transition: 0.2s;\n    }\n    >button:hover {\n        opacity: 0.5;\n    }\n"]))),Jn=on.a.div(R||(R=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    .hidden {\n        display:none;\n    }\n"]))),Gn=on.a.div(U||(U=Object(o.a)(["\n\n    .attachImage input {\n        display: none;\n        }\n    .attachImage label {\n        cursor: pointer;\n        transition: 0.2s;\n        :hover { color: gray; }\n    }\n"]))),Kn=on.a.div(F||(F=Object(o.a)(["\n    display: flex;\n\n    .EmojiButton {\n        cursor: pointer;\n        transition: 0.2s;\n        background-color: transparent;\n        border: none;\n\n        :hover{ color: gray; }\n    }\n    \n    .modal{\n        position: fixed;\n        left: 260px;\n        bottom: 10vh;\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), \n                    0 6px 6px rgba(0, 0, 0, 0.23);\n    }\n\n\n    .hidden {\n        display: none;\n    }\n"]))),Hn=function(n){var e=n.userObj,t=Object(i.useState)([]),c=Object(d.a)(t,2),a=c[0],r=c[1],o=Object(i.useRef)(null);return Object(i.useEffect)((function(){var n=Object(u.h)(Object(u.b)(cn,"nweets"),Object(u.g)("orderingBy","asc"));Object(u.f)(n,(function(n){var e=n.docs.map((function(n){return Object(s.a)({id:n.id},n.data())}));r(e)}))}),[]),Object(i.useEffect)((function(){var n;console.log(o.current),null===o||void 0===o||null===(n=o.current)||void 0===n||n.scrollIntoView({behavior:"smooth"})}),[a]),Object(jn.jsxs)(Yn,{children:[Object(jn.jsx)(qn,{children:Object(jn.jsxs)("div",{className:"nweetBox",children:[a.map((function(n){return Object(jn.jsx)(gn,{nweetObj:n,isOwner:n.creatorId===e.uid,userObj:e},n.id)})),Object(jn.jsx)(Vn,{ref:o})]})}),Object(jn.jsx)(Wn,{children:Object(jn.jsx)(Rn,{userObj:e})})]})},Yn=on.a.div(L||(L=Object(o.a)(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    overflow: hidden;\n"]))),qn=on.a.div(M||(M=Object(o.a)(["\n    display: flex;\n    height: 85vh;\n    \n    .nweetBox {\n        position: flex;\n        width: 100%;\n        overflow: scroll;\n        overflow-x: hidden;\n        }\n    .nweetBox::-webkit-scrollbar {\n        width: 10px;\n        }\n    .nweetBox::-webkit-scrollbar-track {\n        background: transparent; \n        }\n    .nweetBox::-webkit-scrollbar-thumb {\n        background: gray; \n        }\n    .nweetBox::-webkit-scrollbar-thumb:hover {\n        background: #555; \n        }\n"]))),Wn=on.a.div(J||(J=Object(o.a)(["\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n\n"]))),Vn=on.a.div(G||(G=Object(o.a)([""]))),Qn=function(n){var e=n.refreshUser,t=n.userObj,c=(n.nweets,Object(i.useState)(t.displayName)),a=Object(d.a)(c,2),r=a[0],o=a[1],s=Object(i.useState)(t.photoURL),l=Object(d.a)(s,2),j=l[0],p=l[1],h=t.metadata,u=h.creationTime,O=h.lastSignInTime,g=new Date(u),m=new Date(O),v=g.getFullYear(),w=g.getMonth()+1,y=g.getDate(),k="".concat(v,"\ub144 ").concat(w,"\uc6d4 ").concat(y,"\uc77c"),I=m.getFullYear(),N=m.getMonth(),S=m.getDate(),C="".concat(I,"\ub144 ").concat(N,"\uc6d4 ").concat(S,"\uc77c"),A=function(){var n=Object(x.a)(b.a.mark((function n(i){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i.preventDefault(),t.displayName===r){n.next=5;break}return n.next=4,Object(rn.h)(t,{displayName:r});case 4:e();case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(jn.jsxs)(Xn,{children:[Object(jn.jsxs)(Zn,{children:[Object(jn.jsx)($n,{children:Object(jn.jsx)(ne,{children:null===j?Object(jn.jsx)("img",{src:"https://nomadcoders.co/m.svg",alt:"altImage"}):Object(jn.jsx)("img",{src:j,alt:"profileImage"})})}),Object(jn.jsxs)(ee,{children:[Object(jn.jsxs)(te,{children:[Object(jn.jsxs)("h3",{children:["Logged in with ","password"===t.providerData[0].providerId?"Your Own ID":t.providerData[0].providerId]}),Object(jn.jsxs)("h4",{children:["Creation Date: ",k]}),Object(jn.jsxs)("h4",{children:["Last Coming ",C]})]}),Object(jn.jsxs)(ie,{children:[Object(jn.jsxs)(ce,{children:[Object(jn.jsxs)("div",{children:[Object(jn.jsxs)("label",{id:"label",for:"image",children:[" ",Object(jn.jsx)(ln.a,{size:20})," "]}),Object(jn.jsx)("input",{id:"image",onChange:function(n){var i=n.target.files[0],c=new FileReader;c.onloadend=function(){var n=Object(x.a)(b.a.mark((function n(i){var c,a,r,o;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=i.currentTarget.result,a=Object(f.d)(an,"".concat(t.uid,"/").concat(Object(Bn.a)())),n.next=4,Object(f.e)(a,c,"data_url");case 4:return r=n.sent,n.next=7,Object(f.b)(r.ref);case 7:if(o=n.sent,p(c),t.photoURL===o){n.next=14;break}return n.next=12,Object(rn.h)(t,{photoURL:o});case 12:e(),o="";case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c.readAsDataURL(i)},type:"file",accept:"image/*"})]}),Object(jn.jsx)(ae,{className:"".concat(j?"":"hidden"),children:Object(jn.jsx)("div",{children:j&&Object(jn.jsx)("img",{src:j,width:"50px",height:"50px",alt:"profileImage"})})})]}),Object(jn.jsx)(re,{children:Object(jn.jsxs)("form",{onSubmit:A,children:[Object(jn.jsx)("input",{onChange:function(n){var e=n.target.value;o(e)},type:"text",placeholder:"Display Name",value:r}),Object(jn.jsxs)("button",{type:"submit",children:[" ",Object(jn.jsx)(fn.a,{size:22})," "]})]})})]})]})]}),Object(jn.jsx)(oe,{children:Object(jn.jsx)(se,{children:Object(jn.jsx)("h1",{children:"My Nweet Container"})})})]})},Xn=on.a.div(K||(K=Object(o.a)(["\n    width: 100%;\n"]))),Zn=on.a.div(H||(H=Object(o.a)(["\n    display: flex;\n    flex: 1;\n    margin-left: 40px;\n    margin-top: 100px;\n"]))),$n=on.a.div(Y||(Y=Object(o.a)(["\n    display: flex;\n    /* background-color: steelblue; */\n"]))),ne=on.a.div(q||(q=Object(o.a)(["\n\n    >img {\n        display: flex;\n        border: 1px solid gray;\n        border-radius: 999px;\n        width: 130px;\n        height: 130px;\n    }    \n"]))),ee=on.a.div(W||(W=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-left: 10px;\n"]))),te=on.a.div(V||(V=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n\n    >h1 {\n        color: transparent;\n    }\n    >h3{\n        padding-top: 40px;\n        padding-bottom: 5px;\n        font-size: 15px;\n        font-weight: 400;\n        color: #3f3f3f\n    }\n    >h4{\n        font-size: 15px;\n        font-weight: 400;\n        color: #3f3f3f\n    }\n"]))),ie=on.a.div(Q||(Q=Object(o.a)(["\n    display: flex;\n\n    .hidden {\n        display:none;\n    }\n"]))),ce=on.a.div(X||(X=Object(o.a)(["\n    display: flex;\n    padding-top: 5px;\n\n    #image {\n        display: none;\n        }\n    #label {\n        cursor: pointer;\n        transition: 0.2s;\n        :hover { color: gray; }\n    }\n"]))),ae=on.a.div(Z||(Z=Object(o.a)(["\n\n    >div{\n    }\n    >div>button {\n        background-color: transparent;\n        border: none;\n        cursor: pointer;\n        transition: 0.2s;\n        :hover {\n            opacity: 0.6;\n        }\n    }\n    >div>img {\n        display: none;\n    }\n"]))),re=on.a.div($||($=Object(o.a)(["\n    >form {\n        flex-direction: column;\n    }\n    >form>input {\n        display: flex;\n        position: fixed;\n        left: 440px;\n        top: 133px;\n        font-size: 30px;\n        background-color: white;\n        border: none;\n        outline:none;\n        /* display: none; */\n    }\n    >form>button {\n        background-color: transparent;\n        border: none;\n        padding-top: 5px;\n        transition: 0.2s;\n        cursor: pointer;\n        :hover {\n            color: gray;\n        }\n    }\n"]))),oe=on.a.div(nn||(nn=Object(o.a)(["\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid #d0c8cb;\n    margin-top: 100px;\n    margin-left: auto;\n    margin-right: auto;\n    padding-top: 20px;\n"]))),se=on.a.div(en||(en=Object(o.a)(["\n    display: flex;\n    justify-content: center;\n"])));var de,le=function(){return Object(jn.jsx)("div",{children:"Thank you!"})};var je=function(){var n=Object(i.useState)(!1),e=Object(d.a)(n,2),t=e[0],c=e[1];return Object(jn.jsxs)(be,{children:[Object(jn.jsx)("button",{onClick:function(){c((function(n){return!n}))},children:"Open Modal"}),Object(jn.jsxs)("div",{className:"modal ".concat(t?"":"hidden"),children:[Object(jn.jsx)("div",{className:"modal_overlay"}),Object(jn.jsx)("div",{className:"modal_content",children:Object(jn.jsx)(Pn.a,{})})]})]})},be=on.a.div(de||(de=Object(o.a)(["\n\n  .modal {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  position: fixed;\n  top: 33px;\n  left: 50%;\n  width: 300px;\n  background-color: transparent;\n  }\n\n  .modal_overlay {\n    background-color: rgba(0, 0, 0, 0.6);\n    width: 100%;\n    height: 100%;\n  }\n\n  .modal_content {\n    >button {\n      margin:0;\n    }\n  }\n\n  .hidden {\n    display: none;\n  }\n"])));var xe=function(){return Object(jn.jsx)("div",{children:"Todo!"})};var pe,he,ue,fe,Oe,ge=function(){return Object(jn.jsx)("div",{children:"Feeling!"})},me=t(50),ve=t(51),we=function(n){n.userObj;var e=Object(i.useState)(),t=Object(d.a)(e,2),c=t[0],a=t[1],o=Object(l.f)();return Object(i.useEffect)((function(){setInterval((function(){var n=new Date,e=JSON.stringify(n.getHours()).padStart(2,"0"),t=JSON.stringify(n.getMinutes()).padStart(2,"0"),i=JSON.stringify(n.getSeconds()).padStart(2,"0"),c="".concat(e,":").concat(t,":").concat(i);a(c)}),1e3)}),[]),Object(jn.jsxs)(ye,{children:[Object(jn.jsxs)(ke,{children:[Object(jn.jsx)(r.c,{className:"link profile",to:"/profile",children:Object(jn.jsx)(Tn.b,{size:28})}),Object(jn.jsx)(r.c,{className:"link home",to:"/",children:Object(jn.jsx)(me.a,{size:29,alt:"Home"})}),Object(jn.jsxs)("button",{onClick:function(){tn.signOut(),o.push("/")},children:[" ",Object(jn.jsx)(ve.a,{size:27})," "]})]}),Object(jn.jsx)(Ie,{children:Object(jn.jsx)("h5",{children:c})}),Object(jn.jsx)(Ne,{children:Object(jn.jsx)("a",{href:"https://www.nomadcoders.co",children:Object(jn.jsx)("img",{src:"https://nomadcoders.co/m.svg",alt:"ncImage",width:"25px",height:"20px"})})})]})},ye=on.a.div(pe||(pe=Object(o.a)(["\n  display: flex;\n  position: fixed;\n  position: relative;\n  width: 100%;\n  background-color: #3f0f40;\n"]))),ke=on.a.div(he||(he=Object(o.a)(["\n  display: flex;\n  flex: 0.3;\n  margin-left: 15px;\n  align-items: center;\n  \n  .link {\n    color:honeydew;\n  }\n  .link:hover {\n    opacity: 0.8;\n  }\n  \n  .home {\n    margin-left: 10px;\n  }\n  >button{\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    color: honeydew;\n    margin-left: 6px;\n\n    :hover {\n      opacity: 0.8;\n    }\n  }\n"]))),Ie=on.a.div(ue||(ue=Object(o.a)(["\n  @font-face {\n    font-family: 'LAB\ub514\uc9c0\ud138';\n    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/LAB\ub514\uc9c0\ud138.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  color: honeydew;\n  display: flex;\n  flex: 0.4;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px;\n  font-size: 1.7rem;\n  font-family: 'LAB\ub514\uc9c0\ud138';\n"]))),Ne=on.a.div(fe||(fe=Object(o.a)(["\n  display: flex;\n  flex: 0.3;\n  right: 0;\n  justify-content: right;\n  align-items: center;\n  margin-right: 20px;\n  transition: 0.3s;\n\n  :hover {\n    opacity: 0.8;\n  }\n"])));var Se,Ce,Ae,_e,Be,ze,Te=function(n){var e=n.Icon,t=n.title;return n.addTagOptions,Object(jn.jsxs)(De,{children:[e&&Object(jn.jsx)(e,{fontSize:"25",style:{padding:10}}),e?Object(jn.jsx)("h3",{children:t}):Object(jn.jsx)("h3",{children:"Not Founded"})]})},De=on.a.div(Oe||(Oe=Object(o.a)(["\n    display: flex;\n    font-size: 13px;\n    font-weight: normal;\n    align-items: center;\n    padding-left: 10px;\n    cursor: pointer;\n    transition: 0.2s;\n\n    :hover {\n        opacity: 0.8;\n        background-color: #340e36;\n    }\n"]))),Ee=t(69),Pe=t(70),Re=t(37);var Ue,Fe,Le,Me,Je,Ge,Ke,He=function(n){var e=n.userObj;return Object(jn.jsx)(Ye,{children:Object(jn.jsxs)(qe,{children:[Object(jn.jsx)(We,{children:Object(jn.jsxs)(Ve,{children:[Object(jn.jsx)(Qe,{children:Object(jn.jsx)("img",{src:null===e.photoURL?"https://nomadcoders.co/m.svg":e.photoURL,alt:"profileImage"})}),Object(jn.jsxs)(Xe,{children:[Object(jn.jsx)("h4",{children:"Nweet Your Day"}),Object(jn.jsx)("h3",{children:null===e.displayName?"John Doe":e.displayName})]})]})}),Object(jn.jsx)(r.c,{className:"link profile",to:"/reference",children:Object(jn.jsx)(Te,{Icon:me.b,title:"Thank You List"})}),Object(jn.jsx)(r.c,{className:"link profile",to:"/weather",children:Object(jn.jsx)(Te,{Icon:Ee.a,title:"Weather"})}),Object(jn.jsx)(r.c,{className:"link profile",to:"/todo",children:Object(jn.jsx)(Te,{Icon:On.b,title:"To-do"})}),Object(jn.jsx)(r.c,{className:"link profile",to:"/feeling",children:Object(jn.jsx)(Te,{Icon:ve.b,title:"Feeling Good Today"})}),Object(jn.jsx)("hr",{}),Object(jn.jsx)(Te,{Icon:zn.a,title:"My Tags"}),Object(jn.jsx)("hr",{}),Object(jn.jsx)(Te,{Icon:Pe.a,addTagOptions:!0,title:"Add Tag"}),Object(jn.jsx)(Te,{Icon:Re.a,addTagOptions:!0,title:"Nomad Coders :P"}),Object(jn.jsx)(r.c,{className:"link profile",to:"/",children:Object(jn.jsx)(Te,{Icon:Re.a,addTagOptions:!0,title:"React \ud83d\ude0e"})}),Object(jn.jsx)(Te,{Icon:Re.a,addTagOptions:!0,title:"Hooks :P"}),Object(jn.jsx)(Te,{Icon:Re.a,addTagOptions:!0,title:"Firebase :P"}),Object(jn.jsx)(Te,{Icon:Re.a,addTagOptions:!0,title:"Javascript :P"})]})})},Ye=on.a.div(Se||(Se=Object(o.a)(["\n    @font-face {\n    font-family: 'IBMPlexSansKR-Regular';\n    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    }\n    display: flex;\n    flex-direction: column;\n    flex: 0.3;\n    max-width: 260px;\n    min-width: 260px;\n    color: honeydew;\n    font-family: 'IBMPlexSansKR-Regular';\n    background-color: #3f0f40;\n    border-top: 1px solid #49274b;\n"]))),qe=on.a.div(Ce||(Ce=Object(o.a)(["\n    >hr {\n        margin-top: 7px;\n        margin-bottom: 7px;\n        border: 1px solid #49274b;\n    }\n  \n    .link {\n        color:honeydew;\n        text-decoration: none;\n    }\n"]))),We=on.a.div(Ae||(Ae=Object(o.a)(["\n    display: flex;\n    border-bottom: 1px solid #49274b;\n    padding: 13px;\n"]))),Ve=on.a.div(_e||(_e=Object(o.a)(["\n    display: flex;\n    flex: 1;\n"]))),Qe=on.a.div(Be||(Be=Object(o.a)(["\n    display: flex;\n    margin-left: 10px;\n\n    >img {\n        width: 55px;\n        height: 55px;\n        border-radius: 999px;\n        border: none;\n        background-color: white;\n    }\n"]))),Xe=on.a.div(ze||(ze=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-left: 15px;\n    padding-top: 3px;\n"]))),Ze=function(n){var e=n.refreshUser,t=n.isLoggedIn,c=n.userObj,a=Object(i.useState)([]),o=Object(d.a)(a,2),j=o[0],b=o[1];return Object(i.useEffect)((function(){var n=Object(u.h)(Object(u.b)(cn,"nweets"),Object(u.g)("orderingBy","asc"));Object(u.f)(n,(function(n){var e=n.docs.map((function(n){return Object(s.a)({id:n.id},n.data())}));b(e)}))}),[]),Object(jn.jsx)(r.b,{children:Object(jn.jsxs)($e,{children:[Object(jn.jsx)(nt,{children:t&&Object(jn.jsx)(we,{userObj:c})}),Object(jn.jsxs)(et,{children:[t&&Object(jn.jsx)(He,{userObj:c}),Object(jn.jsx)(l.c,{children:t?Object(jn.jsxs)(jn.Fragment,{children:[Object(jn.jsx)(l.a,{exact:!0,path:"/",children:Object(jn.jsx)(Hn,{userObj:c})}),Object(jn.jsx)(l.a,{exact:!0,path:"/profile",children:Object(jn.jsxs)(tt,{children:[Object(jn.jsx)(it,{children:Object(jn.jsx)(Qn,{userObj:c,refreshUser:e,nweets:j})}),Object(jn.jsx)(ct,{children:Object(jn.jsx)("div",{className:"nweetBox",children:j.map((function(n){return n.creatorId===c.uid&&Object(jn.jsxs)("div",{children:[Object(jn.jsx)("img",{id:"profile",src:null===n.profileImage?"https://nomadcoders.co/m.svg":n.profileImage,alt:"profile"}),Object(jn.jsxs)("div",{children:[Object(jn.jsxs)("div",{children:[Object(jn.jsx)("h2",{children:null===n.nickName?"John Doe":n.nickName}),Object(jn.jsxs)("h4",{children:["@",n.createdAt]})]}),Object(jn.jsx)("h3",{children:n.text})]})]})}))})})]})}),Object(jn.jsx)(l.a,{exact:!0,path:"/reference",children:Object(jn.jsx)(le,{userObj:c})}),Object(jn.jsx)(l.a,{exact:!0,path:"/weather",children:Object(jn.jsx)(je,{userObj:c})}),Object(jn.jsx)(l.a,{exact:!0,path:"/todo",children:Object(jn.jsx)(xe,{userObj:c})}),Object(jn.jsx)(l.a,{exact:!0,path:"/feeling",children:Object(jn.jsx)(ge,{userObj:c})})]}):Object(jn.jsx)(jn.Fragment,{children:Object(jn.jsx)(l.a,{exact:!0,path:"/",children:Object(jn.jsx)(hn,{})})})})]})]})})},$e=on.a.div(Ue||(Ue=Object(o.a)(["\n    display: flex;\n    position: fixed;\n    flex-direction: column;\n    height: 100vh;\n"]))),nt=on.a.div(Fe||(Fe=Object(o.a)(["\n    display: flex;\n    width: 100vw;  \n\n"]))),et=on.a.div(Le||(Le=Object(o.a)(["\n    display: flex;\n    width: 100vw;\n    height: inherit;\n"]))),tt=on.a.div(Me||(Me=Object(o.a)(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n"]))),it=on.a.div(Je||(Je=Object(o.a)(["\n\n"]))),ct=on.a.div(Ge||(Ge=Object(o.a)(["\n    display: flex;\n    width: 50%;\n    height: 45vh;\n    padding: 10px 23px 10px 23px;\n    border: 1px solid #d0c8cb;\n    border-radius: 5px;\n    margin-top: 40px;\n    margin-left: auto;\n    margin-right: auto;\n\n    .nweetBox {\n        position: flex;\n        width: 100%;\n        overflow: scroll;\n        overflow-x: hidden;\n        }\n    .nweetBox::-webkit-scrollbar {\n        width: 10px;\n        }\n    .nweetBox::-webkit-scrollbar-track {\n        background: transparent; \n        }\n    .nweetBox::-webkit-scrollbar-thumb {\n        background: #d0c8cb;; \n        }\n    .nweetBox::-webkit-scrollbar-thumb:hover {\n        background: gray; \n        }\n\n    // Nweet Profile Image\n    >div>div {\n        display: flex;\n        margin-bottom: 13px;\n    }\n    >div>div>img {\n        display: flex;\n        width: 60px;\n        height: 60px;\n        border-radius: 999px;\n        margin-right: 20px;\n    }\n    \n    // Nweet NickName\n    >div>div>div>div {\n        display: flex;\n        margin-bottom: 5px;\n    }\n    >div>div>div>div>h2 {\n        font-size: 18px;\n        font-weight: 400;\n        color: #3f3f3f;\n    }\n\n    // Nweet CreatedAt\n    >div>div>div>div>h4 {\n        font-size: 12px;\n        font-weight: 400;\n        padding-top: 4px;\n        padding-left: 5px;\n    }\n    \n    //Nweet Message\n    >div>div>div>h3 {\n        font-size: 15px;\n        font-weight: 400;\n        color: #3f3f3f\n    }\n    >div>div>div {\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n        justify-content: center;\n        padding-left: 20px;\n        border-left: 1px solid #d0c8cb;\n    }\n"])));var at=function(){var n=Object(i.useState)(!1),e=Object(d.a)(n,2),t=e[0],c=e[1],a=Object(i.useState)(null),r=Object(d.a)(a,2),o=r[0],l=r[1];return Object(i.useEffect)((function(){tn.onAuthStateChanged((function(n){l(n||null),c(!0)}))})),Object(jn.jsx)("div",{children:t?Object(jn.jsx)(Ze,{refreshUser:function(){l(Object(s.a)({},tn.currentUser))},isLoggedIn:Boolean(o),userObj:o}):Object(jn.jsx)(rt,{children:Object(jn.jsx)("img",{src:"https://i.stack.imgur.com/MEBIB.gif",alt:"Loading..."})})})},rt=on.a.div(Ke||(Ke=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));t(83);a.a.render(Object(jn.jsx)(r.a,{basename:"/nwitter",children:Object(jn.jsx)(at,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.2adf5682.chunk.js.map