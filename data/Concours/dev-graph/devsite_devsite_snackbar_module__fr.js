(function(_ds){var window=this;var Nea=function(){return(0,_ds.W)('<div class="devsite-snackbar-snack" type="loading" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Chargement\u2026</div><div class="devsite-snackbar-action"><devsite-spinner single-color="#ffffff"></devsite-spinner></div></div></div>')},Oea=function(){return(0,_ds.W)('<div class="devsite-snackbar-snack" type="signin-state-changed" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Votre \u00e9tat de connexion a chang\u00e9.</div><button class="devsite-snackbar-action devsite-snackbar-action--reload">Actualiser</button><button class="devsite-snackbar-action devsite-snackbar-action--dismiss">OK</button></div></div>')},
Pea=function(){return(0,_ds.W)('<div class="devsite-snackbar-snack" type="refresh" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Une nouvelle version est disponible</div><button class="devsite-snackbar-action">Actualiser</button></div></div>')},Qea=function(){return(0,_ds.W)('<div class="devsite-snackbar-snack" type="error" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Un probl\u00e8me est survenu. Veuillez r\u00e9essayer.</div><button class="devsite-snackbar-action">R\u00e9essayer</button></div></div>')},
Rea=function(){return(0,_ds.W)('<div class="devsite-snackbar-snack" type="copied-to-clipboard" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Copi\u00e9 dans le presse-papiers</div></div></div>')},Sea=function(a){a=a||{};a=a.zq;a='<div class="devsite-snackbar-snack" type="cookie-notification" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Google utilise des cookies pour fournir ses services, personnaliser les annonces et analyser le trafic. Vous pouvez ajuster vos param\u00e8tres de confidentialit\u00e9 \u00e0 tout moment dans les <a href="//myaccount.google.com/intro/data-and-personalization">param\u00e8tres Google</a>.</div><a href="'+
((a?_ds.Z(_ds.mF(a)):"//policies.google.com/technologies/cookies")+'" class="devsite-snackbar-link button">');return(0,_ds.W)(a+'Plus d\'informations</a><button class="devsite-snackbar-action">OK</button></div></div>')},d8=function(a){a=a||{};a=a.zq;a='<div class="devsite-snackbar-snack" type="cookie-notification" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Ce site utilise des cookies provenant de Google afin de fournir ses services et d\'analyser le trafic.</div><a href="'+
((a?_ds.Z(_ds.mF(a)):"//policies.google.com/technologies/cookies")+'" class="devsite-snackbar-link button">');return(0,_ds.W)(a+'Plus d\'informations</a><button class="devsite-snackbar-action">OK</button></div></div>')},Tea=function(){return(0,_ds.W)('<div class="devsite-snackbar-snack" type="support-attachment-error" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Type de fichier non accept\u00e9.</div><button class="devsite-snackbar-action">OK</button></div></div>')},
Uea=function(a){const b=a.message,c=a.link,d=a.Fw;a='<div class="devsite-snackbar-snack" type="'+_ds.Z(a.Tx)+'" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">'+_ds.X(b)+'</div><button class="devsite-snackbar-action">';a=a+'Non, merci</button><a href="'+(_ds.Z(_ds.mF(c))+'" class="devsite-snackbar-link button" target="_blank">');a=d?a+_ds.X(d):a+"OK";return(0,_ds.W)(a+"</a></div></div>")},Vea=function(a){const b=a.linkText,c=a.link,d=a.xd,e=a.showClose;a='<div class="devsite-snackbar-snack" type="custom" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">'+
_ds.X(a.message)+"</div>";e&&(a+='<button class="devsite-snackbar-action">OK</button>');a+=(c&&b?'<a href="'+_ds.Z(_ds.mF(c))+'"'+(d?' target="_blank"':"")+' class="devsite-snackbar-link button">'+_ds.X(b)+"</a>":"")+"</div></div>";return(0,_ds.W)(a)};var g8=function(a,b,c=null,d=!1){b&&(_ds.sl(b,_ds.Mj,()=>{_ds.sj(b);a.h=null;if(c)e8(a,c,d);else{const e=a.g.length?a.g.shift():null;e!==null&&f8(a,e)}}),b.removeAttribute("show"))},h8=function(a,b,c=!1){a.appendChild(b);requestAnimationFrame(()=>{e8(a,b,c)})},i8=function(a){g8(a,a.querySelector('*[type^="cookie-notification"]'))},j8=function(a){g8(a,a.querySelector('*[type^="support-attachment-error"]'))},k8=function(a){g8(a,a.querySelector('*[type^="signin-state-changed"]'))},f8=function(a,b){switch(b){case "loading":a.showLoading();
break;case "refresh":Wea(a);break;case "error":Xea(a);break;case "copied-to-clipboard":var c=_ds.N(Rea);h8(a,c,!0);break;case "cookie-notification":Yea(a);break;case "support-attachment-error":Zea(a);break;case "signin-state-changed":$ea(a)}if(b==null?0:b.startsWith("notification-")){c=a.getAttribute(`${b}-message`);const d=a.getAttribute(`${b}-link`),e=a.getAttribute(`${b}-link-txt`);l8(a,b,c||"",d||"",e||"",a.hasAttribute(`${b}-store-key`))}},Wea=function(a){const b=_ds.N(Pea);_ds.tl(b.querySelector(".devsite-snackbar-action"),
"click",()=>{_ds.kj().location.reload()});h8(a,b)},Xea=function(a){const b=_ds.N(Qea);_ds.tl(b.querySelector(".devsite-snackbar-action"),"click",()=>{_ds.kj().location.reload()});h8(a,b)},Yea=async function(a){const b=await _ds.v();var c=_ds.nh(b.getConfig(),30);c=c===4||c===3;var d=await b.hasMendelFlagAccess("Analytics","enable_cookie_bar");const e=await b.hasMendelFlagAccess("Analytics","open_cookie_bar");if(!(d&&c||e))if(await b.getStorage().get("devsite-eu-cookie",""))c=a.g.length?a.g.shift():
null,c!==null&&f8(a,c);else{c=d8;if(a.hasAttribute("data-cookie-notice"))switch(Number(a.getAttribute("data-cookie-notice"))){case 2:case 4:c=Sea;break;default:c=d8}a.hasAttribute("data-cookie-policy")?(d=a.getAttribute("data-cookie-policy"),c=_ds.N(c,{zq:d})):c=_ds.N(c);_ds.sl(c.querySelector(".devsite-snackbar-action"),"click",async()=>{await b.getStorage().set("devsite-eu-cookie","","1");i8(a)});h8(a,c)}},Zea=function(a){const b=_ds.N(Tea);h8(a,b);_ds.sl(b.querySelector(".devsite-snackbar-action"),
"click",()=>{j8(a)})},$ea=function(a){k8(a);const b=_ds.N(Oea);h8(a,b,!1);_ds.tl(b.querySelector(".devsite-snackbar-action--reload"),"click",async()=>{await (await _ds.v()).reload();k8(a)});_ds.tl(b.querySelector(".devsite-snackbar-action--dismiss"),"click",async()=>{await (await _ds.v()).reload();k8(a)})},e8=function(a,b,c=!1){clearTimeout(a.o);a.h?g8(a,a.h,b,c):(a.h=b,requestAnimationFrame(()=>{b.setAttribute("show","")}),c&&(a.o=setTimeout(()=>{a.removeAttribute("type");g8(a,b)},5E3)))},l8=async function(a,
b,c,d,e,f){if(c&&d){const g=await (await _ds.v()).getStorage().get("devsite-snackbar",d);if(!f||!g){b=_ds.N(Uea,{Tx:b,message:c,link:d,Fw:e});h8(a,b);const h=new _ds.G(b);h.listen(b,"click",async k=>{k.stopPropagation();if(k.target.classList.contains("devsite-snackbar-link")||k.target.classList.contains("devsite-snackbar-action"))await (await _ds.v()).getStorage().set("devsite-snackbar",d,"1"),a.j(),_ds.I(h)})}}},m8=class extends _ds.D{static get observedAttributes(){return["type"]}constructor(){super();
this.g=[];this.o=-1;this.h=null;this.eventHandler=new _ds.G(this)}connectedCallback(){this.eventHandler.listen(document.body,"devsite-show-custom-snackbar-msg",this.v);this.eventHandler.listen(document.body,"devsite-show-notification-snackbar-msg",this.ma);this.eventHandler.listen(document.body,"devsite-hide-notification-snackbar-msg",this.j)}disconnectedCallback(){_ds.I(this.eventHandler)}v(a){this.setAttribute("type","custom");var b;if(a=(b=a.getBrowserEvent())==null?void 0:b.detail){b=!!a.showClose;
var c=!0;a.href&&(c=(new URL(a.href)).origin!==document.location.origin);var d=_ds.N(Vea,{message:a.msg,linkText:a.linkText,link:a.href,xd:c,showClose:b});b&&_ds.sl(d.querySelector(".devsite-snackbar-action"),"click",()=>{g8(this,d)});h8(this,d,!b)}}attributeChangedCallback(a,b,c){if(a==="type"){switch(b){case "loading":this.hideLoading();break;case "refresh":g8(this,this.querySelector('*[type^="refresh"]'));break;case "error":g8(this,this.querySelector('*[type^="error"]'));break;case "copied-to-clipboard":g8(this,
this.querySelector('*[type^="copied-to-clipboard"]'));break;case "cookie-notification":i8(this);break;case "support-attachment-error":j8(this);break;case "signin-state-changed":k8(this);break;case "custom":g8(this,this.querySelector('*[type^="custom"]'))}b!=null&&b.startsWith("notification-")&&this.j();if(c){let d;if((d=c)==null?0:d.includes(",")){let e;this.g=(e=c)==null?void 0:e.split(",");c=`${this.g.shift()}`}f8(this,c)}}}showLoading(){if(!this.querySelector('*[type^="loading"]')){var a=_ds.N(Nea);
h8(this,a)}}hideLoading(){g8(this,this.querySelector('*[type^="loading"]'))}ma(a){let b;(a=(b=a.getBrowserEvent())==null?void 0:b.detail)&&l8(this,"notification-custom",a.msg,a.href||"",a.linkText||"",!0)}j(){g8(this,this.querySelector('*[type^="notification"]'))}};m8.prototype.attributeChangedCallback=m8.prototype.attributeChangedCallback;m8.prototype.disconnectedCallback=m8.prototype.disconnectedCallback;m8.prototype.connectedCallback=m8.prototype.connectedCallback;try{customElements.define("devsite-snackbar",m8)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteSnackBar",a)};})(_ds_www);