(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){},,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/salon.045b4032.png"},function(e,a,t){e.exports=t.p+"static/media/glynt.740efdc2.png"},function(e,a,t){e.exports=t.p+"static/media/1.f4c2b39d.jpg"},function(e,a,t){e.exports=t.p+"static/media/2.2151d487.jpg"},function(e,a,t){e.exports=t.p+"static/media/3.d655a40b.jpg"},function(e,a,t){e.exports=t.p+"static/media/4.4b8aa722.jpg"},function(e,a,t){e.exports=t.p+"static/media/5.9e428b98.jpg"},function(e,a,t){e.exports=t.p+"static/media/6.54e847d5.jpg"},function(e,a,t){e.exports=t.p+"static/media/7.c4715413.jpg"},function(e,a,t){e.exports=t.p+"static/media/8.72448cd3.jpg"},function(e,a,t){e.exports=t.p+"static/media/9.8fc6a0ee.jpg"},function(e,a,t){e.exports=t.p+"static/media/10.27a35ae6.jpg"},function(e,a,t){e.exports=t.p+"static/media/11.4f382e83.jpg"},function(e,a,t){e.exports=t.p+"static/media/12.b1660e82.jpg"},function(e,a,t){e.exports=t.p+"static/media/13.0622d83e.jpg"},function(e,a,t){e.exports=t.p+"static/media/14.7f6dcf27.jpg"},function(e,a,t){e.exports=t.p+"static/media/15.18076478.jpg"},,,,function(e,a,t){e.exports=t(60)},,,,,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),i=t(4),o=t(5),s=t(8),m=t(6),u=t(7),p=t(63),f=t(62),d=function(e){return l.a.createElement("button",{onClick:e.handleClick,className:e.active?"btn active":"btn"},l.a.createElement("span",{className:"top bar"}),l.a.createElement("span",{className:"mid bar"}),l.a.createElement("span",{className:"bot bar"}))},E=(t(13),t(12)),h=function(e){var a=e.active,t=e.handleClick,n=e.match;return console.log(n),l.a.createElement("nav",{className:a?"active openedNav":"openedNav"},l.a.createElement("section",{className:"navList"},l.a.createElement(E.b,{onClick:t,className:"navList__link",to:"/"},l.a.createElement("span",null,"Start"),l.a.createElement("span",null,"00")),l.a.createElement(E.b,{to:"/gallery",className:"navList__link",onClick:t},l.a.createElement("span",null,"Galeria"),l.a.createElement("span",null,"01"))))},w=function(e){var a=e.active,t=e.handleClick;return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{active:a,handleClick:t}),l.a.createElement(d,{active:a,handleClick:t}))},y=window.pageYOffset,v=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={},t.handleScroll=function(){var e=window.pageYOffset;t.nav.current.style.transform=y<e&&e>50?"translateY(-40px)":"translateY(0px)",y=e},t.nav=l.a.createRef(),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("nav",{ref:this.nav,className:"deskNav"},l.a.createElement("ul",null,l.a.createElement(E.b,{exact:!0,to:"/"},l.a.createElement("li",null,"Start")),l.a.createElement(E.b,{exact:!0,to:"/gallery"},l.a.createElement("li",null,"Galeria"))),l.a.createElement("p",null,"tel. 503 432 435"))}}]),a}(l.a.Component),b=t(2),j=t(25),k=t.n(j),g=function(){return l.a.createElement("section",{className:"home"},l.a.createElement("img",{src:k.a,className:"home__img",alt:""}))},N=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleScroll=function(){window.scrollY>t.title.current.offsetTop+2*t.title.current.offsetHeight-window.innerHeight?t.title.current.classList.add("offer__title--active"):t.title.current.classList.remove("offer__title--active")},t.title=l.a.createRef(),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("main",{className:"offer"},l.a.createElement("h1",{ref:this.title,className:"offer__title"},l.a.createElement("span",{className:"firstLetter"},"N"),"asza oferta"),l.a.createElement("h2",{className:"offer__subtitle"},"O ceny mo\u017cna dopyta\u0107 si\u0119 podczas rozmowy telefonicznej"),l.a.createElement("section",{className:"priceList"},l.a.createElement("div",{className:"priceList__service"},l.a.createElement("p",null,"Strzy\u017cenie m\u0119skie"),l.a.createElement("p",null,"Strzy\u017cenie m\u0119skie + broda"),l.a.createElement("p",null,"Strzy\u017cenie damskie"),l.a.createElement("p",null,"Strzy\u017cenie grzywki"),l.a.createElement("p",null,"Strzy\u017cenie Split-Ender"),l.a.createElement("p",null,"Modelowanie"),l.a.createElement("p",null,"Koloryzacja"),l.a.createElement("p",null,"Koloryzacja + strzy\u017cenie"),l.a.createElement("p",null,"Koloryzacja + strzy\u017cenie + modelowanie"),l.a.createElement("p",null,"Zabieg odm\u0142adziania w\u0142os\xf3w TRI JUVEN + step 3"),l.a.createElement("p",null,"Zabieg TURBO nawil\u017cania"),l.a.createElement("p",null,"Zabieg POPCORN"),l.a.createElement("p",null,"Zabieg BOTOX na w\u0142osy"),l.a.createElement("p",null,"Prostowanie piel\u0119gnacyjne"),l.a.createElement("p",null,"Baleyage"),l.a.createElement("p",null,"Baleyage + strzy\u017cenie"),l.a.createElement("p",null,"Dekoloryzacja"),l.a.createElement("p",null,"Dekoloryzacja + koloryzacja"),l.a.createElement("p",null,"Pasemka"),l.a.createElement("p",null,"Pasemka + strzy\u017cenie"),l.a.createElement("p",null,"Pasemka + strzy\u017cenie + modelowanie"),l.a.createElement("p",null,"Sombre/Ombre"),l.a.createElement("p",null,"Sombre/Ombre + strzy\u017cenie"),l.a.createElement("p",null,"Refleksy"),l.a.createElement("p",null,"Refleksy + farba"),l.a.createElement("p",null,"Refleksy + farba + strzy\u017cenie"),l.a.createElement("p",null,"Upi\u0119cie okoliczno\u015bciowe"),l.a.createElement("p",null,"Upi\u0119cie \u015blubne"),l.a.createElement("p",null,"Upi\u0119cie pr\xf3bne"))))}}]),a}(l.a.Component),z=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleScroll=function(){var e=Object(b.a)(Object(b.a)(t)),a=e.footer,n=e.aside,l=e.aside2,r=e.title,c=e.title2,i=e.title3,o=window.scrollY;[n,l,r,c,i].forEach(function(e){o-a.current.offsetTop>e.current.offsetTop-window.innerHeight+e.current.offsetHeight?e.current.classList.add("active"):e.current.classList.remove("active")})},t.footer=l.a.createRef(),t.aside=l.a.createRef(),t.aside2=l.a.createRef(),t.title=l.a.createRef(),t.title2=l.a.createRef(),t.title3=l.a.createRef(),t.scrollTop=function(){window.scrollTo(0,0)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.handleScroll(),setTimeout(this.scrollTop,500),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.footer,a=this.aside,t=this.aside2,n=this.title,r=this.title2,c=this.title3;return l.a.createElement("footer",{ref:e},l.a.createElement("a",{href:"https://www.instagram.com/pracowniafryzjerska.beatapatej/",target:"_blank",rel:"noopener noreferrer",ref:a,className:"media"},l.a.createElement("i",{className:"fab fa-instagram"})),l.a.createElement("a",{href:"https://www.facebook.com/pracowniafryzjerskabeatapatejuk/",target:"_blank",rel:"noopener noreferrer",ref:t,className:"media"},l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement("section",{className:"visit"},l.a.createElement("h3",{ref:n,className:"title"},l.a.createElement("span",{className:"firstLetter"},"U"),"m\xf3w wizyt\u0119"),l.a.createElement("p",{className:"content"},"Je\u017celi twoje w\u0142osy potrzebuj\u0105 od\u015bwie\u017cenia, s\u0105 po nieudanym zabiegu kosmetycznym, b\u0105d\u017a poprostu chcesz mie\u0107 fryzur\u0119 tak\u0105 jak\u0105 tylko chcesz um\xf3w si\u0119 na wizyt\u0119 w naszym salonie! Gwarantujemy, \u017ce twoje w\u0142osy po wizycie u nas b\u0119d\u0105 w swojej najlepszej kondycji i formie."),l.a.createElement("section",{className:"contact"},l.a.createElement("h3",{className:"title"},l.a.createElement("span",{className:"firstLetter"},"L"),"ub skontaktuj si\u0119 poprzez:"),l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-phone-volume"}),"493 534 623"))),l.a.createElement("section",{className:"hours"},l.a.createElement("h3",{ref:r,className:"title"},l.a.createElement("span",{className:"firstLetter"},"G"),"odziny pracy"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Poniedzia\u0142ek:")," 09:00-17:00"),l.a.createElement("li",null,l.a.createElement("span",null,"Wtorek:")," 09:00-17:00"),l.a.createElement("li",null,l.a.createElement("span",null,"\u015aroda:")," Nieczynne"),l.a.createElement("li",null,l.a.createElement("span",null,"Czwartek:")," 10:00-18:00"),l.a.createElement("li",null,l.a.createElement("span",null,"Pi\u0105tek:")," 10:00-18:00"),l.a.createElement("li",null,l.a.createElement("span",null,"Sobota:")," 08:00-14:00"),l.a.createElement("li",null,l.a.createElement("span",null,"Niedziela:")," Nieczynne"))),l.a.createElement("section",{className:"place"},l.a.createElement("h3",{ref:c,className:"title place"},l.a.createElement("span",{className:"firstLetter"},"J"),"ak dojecha\u0107?"),l.a.createElement("h4",null,"ul. Orzechowa 33B Bia\u0142a Podlaska"),l.a.createElement("iframe",{"jsx-ally":"map",title:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.8326413037253!2d23.143715015789184!3d52.02814647972414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472190d84182a933%3A0xceda46e5f60ef5a8!2sPracownia+Fryzjerska+Beata+Patejuk!5e0!3m2!1spl!2spl!4v1556474525223!5m2!1spl!2spl",allowFullScreen:!0})))}}]),a}(l.a.Component),O=t(26),L=t.n(O),S=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={},t.handleScroll=function(){var e=Object(b.a)(Object(b.a)(t)),a=e.item;e.container;window.scrollY>a.current.offsetTop-window.innerHeight+a.current.offsetHeight/2?a.current.classList.add("active"):a.current.classList.remove("active")},t.item=l.a.createRef(),t.container=l.a.createRef(),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("aside",{ref:this.container,className:"partnership"},l.a.createElement("h2",null,"Pracujemy na najlepszej jako\u015bci kosmetykach marki"," ",l.a.createElement("span",null,l.a.createElement("span",{className:"firstLetter"},"G"),"lynt")),l.a.createElement("img",{ref:this.item,src:L.a,alt:""}),l.a.createElement("p",null,"Kosmetyki firmy ",l.a.createElement("span",null,"Glynt")," s\u0105 w 100% oparte na wega\u0144skich sk\u0142adnikach!"))}}]),a}(l.a.Component),x=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).title=l.a.createRef(),t.handleScroll=function(){var e=Object(b.a)(Object(b.a)(t));e.title,e.container;window.scrollY>t.title.current.offsetTop+2*t.title.current.offsetHeight-window.innerHeight?t.title.current.classList.add("active"):t.title.current.classList.remove("active")},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.title,a=this.container;return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{ref:a,className:"contact"},l.a.createElement("section",{className:"contactSection"},l.a.createElement("h2",{ref:e,className:"title"},l.a.createElement("span",{className:"firstLetter"},"U"),"m\xf3w si\u0119!"),l.a.createElement("section",{className:"contactTypes"},l.a.createElement("h3",{className:"subtitle"},"Mo\u017cesz to zrobi\u0107 poprzez:"),l.a.createElement("p",{className:"telephoneNumer"},l.a.createElement("i",{className:"fas fa-mobile-alt"})," 666 000 333"),l.a.createElement("aside",null,l.a.createElement("span",null,"Wa\u017cne!")," Prosz\u0119 dzwoni\u0107 tylko w godzinach pracy (podane w sekcji poni\u017cej).")))))}}]),a}(l.a.Component),C=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={},t.container=l.a.createRef(),t.handleScroll=function(){var e=window.scrollY,a=Object(b.a)(Object(b.a)(t)).container;if(window.innerWidth>=1280){var n=a.current.offsetTop,l=a.current.offsetHeight;n-60<e&&n+2190-l>e&&(a.current.style.transform="translateY(".concat(e-window.innerHeight+50,"px)"))}},t.scrollTop=function(){window.scrollTo(0,0)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),setTimeout(this.scrollTop,500)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("article",{className:"startPage"},l.a.createElement(g,null),l.a.createElement(N,null),l.a.createElement("section",{className:"container",ref:this.container},l.a.createElement(x,null),l.a.createElement(S,null)),l.a.createElement(z,null))}}]),a}(l.a.Component),_=t(27),R=t.n(_),T=t(28),P=t.n(T),U=t(29),W=t.n(U),H=t(30),Y=t.n(H),A=t(31),B=t.n(A),D=t(32),G=t.n(D),M=t(33),F=t.n(M),J=t(34),K=t.n(J),Z=t(35),I=t.n(Z),V=t(36),X=t.n(V),q=t(37),Q=t.n(q),$=t(38),ee=t.n($),ae=t(39),te=t.n(ae),ne=t(40),le=t.n(ne),re=t(41),ce=t.n(re),ie=[R.a,P.a,W.a,Y.a,B.a,G.a,F.a,K.a,I.a,X.a,Q.a,ee.a,te.a,le.a,ce.a],oe=[],se=function(){var e=ie.map(function(e,a){return l.a.createElement("img",{ref:oe[a],src:e,key:e,alt:""})});return l.a.createElement("article",{className:"gallery"},l.a.createElement("h2",{className:"titleGal"},l.a.createElement("span",{className:"firstLetter"},"P"),"rzyk\u0142adowe prace"),l.a.createElement("h3",{className:"subtitleGal"},"Po wi\u0119cej naszych prac zapraszamy na naszego"," ",l.a.createElement("a",{href:"https://www.facebook.com/pracowniafryzjerskabeatapatejuk/",target:"_blank",rel:"noopener noreferrer",className:"facebook"},"Facebooka")," ","i"," ",l.a.createElement("a",{href:"https://www.instagram.com/pracowniafryzjerska.beatapatej/",target:"_blank",rel:"noopener noreferrer",className:"instagram"},"Instagrama")),l.a.createElement("section",{className:"images"},e),l.a.createElement(z,null))},me=t(14),ue=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).windowWidth=window.innerWidth,t.state={active:!1},t.handleClick=function(){t.setState({active:!t.state.active})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.active,a=this.handleClick;return l.a.createElement(E.a,{basename:"/strona-salonu"},this.windowWidth>=1280?l.a.createElement(v,{active:e,handleClick:a}):l.a.createElement(w,{active:e,handleClick:a}),l.a.createElement(me.a,{render:function(e){var a=e.location;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(f.a,{key:a.key,classNames:"fade",timeout:1500},l.a.createElement(me.c,{location:a},l.a.createElement(me.a,{path:"/",exact:!0,component:C}),l.a.createElement(me.a,{path:"/gallery",exact:!0,component:se})))))}}))}}]),a}(l.a.Component);c.a.render(l.a.createElement(ue,null),document.getElementById("root"))}],[[45,1,2]]]);
//# sourceMappingURL=main.8de8d132.chunk.js.map