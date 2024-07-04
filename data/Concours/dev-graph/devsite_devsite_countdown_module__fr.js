(function(_ds){var window=this;var u0=function(){return"devsite-countdown"},v0=function(a){const b=a.g-(new Date).getTime();b>0?(a.Ue=Math.floor(b/864E5),a.hours=Math.floor(b%864E5/36E5),a.minutes=Math.floor(b%36E5/6E4),a.seconds=Math.floor(b%6E4/1E3)):a.removeOnFinish?a.remove():(a.Ue=0,a.hours=0,a.minutes=0,a.seconds=0,clearInterval(a.j))},w0=class extends _ds.nL{constructor(){super(...arguments);this.seconds=this.minutes=this.hours=this.Ue=this.g=this.j=0;this.date="";this.padNumbers=this.removeOnFinish=this.displaySeconds=
this.displayMinutes=this.displayHours=this.displayDays=!1}connectedCallback(){super.connectedCallback();this.setup()}disconnectedCallback(){clearInterval(this.j);this.seconds=this.minutes=this.hours=this.Ue=0}Sa(){return this}render(){return(0,_ds.T)` ${_ds.Rr(this.displayDays,()=>{const a=(new _ds.QI("{DAYS,plural, =1{Jour}one{Jour}other{Jours}}")).format({DAYS:this.Ue});return(0,_ds.T)` <div class="devsite-countdown-box devsite-countdown-days">
        <span class="devsite-countdown-number">${this.padNumbers?this.Ue.toString().padStart(2,"0"):this.Ue.toString()}</span>
        <span class="devsite-countdown-label">${a}</span>
      </div>`})}
    ${_ds.Rr(this.displayHours,()=>{const a=(new _ds.QI("{HOURS,plural, =1{Heure}one{Heure}other{Heures}}")).format({HOURS:this.hours});return(0,_ds.T)` <div class="devsite-countdown-box devsite-countdown-hours">
        <span class="devsite-countdown-number">${this.padNumbers?this.hours.toString().padStart(2,"0"):this.hours.toString()}</span>
        <span class="devsite-countdown-label">${a}</span>
      </div>`})}
    ${_ds.Rr(this.displayMinutes,()=>{const a=(new _ds.QI("{MINUTES,plural, =1{Minute}one{Minute}other{Minutes}}")).format({MINUTES:this.minutes});return(0,_ds.T)` <div class="devsite-countdown-box devsite-countdown-minutes">
        <span class="devsite-countdown-number">${this.padNumbers?this.minutes.toString().padStart(2,"0"):this.minutes.toString()}</span>
        <span class="devsite-countdown-label">${a}</span>
      </div>`})}
    ${_ds.Rr(this.displaySeconds,()=>{const a=(new _ds.QI("{SECONDS,plural, =1{Seconde}one{Seconde}other{Secondes}}")).format({SECONDS:this.seconds});return(0,_ds.T)` <div class="devsite-countdown-box devsite-countdown-seconds">
        <span class="devsite-countdown-number">${this.padNumbers?this.seconds.toString().padStart(2,"0"):this.seconds.toString()}</span>
        <span class="devsite-countdown-label">${a}</span>
      </div>`})}`}setup(){let a;if((a=this.date)==null?0:a.includes(":")){let b,c;((b=this.date)==null?0:b.includes("+"))||((c=this.date)==null?0:c.includes("-"))?this.g=(new Date(`${this.date}`)).getTime():this.g=(new Date(`${this.date}-0800`)).getTime()}else this.g=(new Date(`${this.date} 00:00:00-0800`)).getTime();this.j=setInterval(()=>{v0(this)},1E3);v0(this)}};w0.getTagName=u0;_ds.x([_ds.P(),_ds.y(Object)],w0.prototype,"Ue",void 0);_ds.x([_ds.P(),_ds.y(Object)],w0.prototype,"hours",void 0);
_ds.x([_ds.P(),_ds.y(Object)],w0.prototype,"minutes",void 0);_ds.x([_ds.P(),_ds.y(Object)],w0.prototype,"seconds",void 0);_ds.x([_ds.O(),_ds.y(Object)],w0.prototype,"date",void 0);_ds.x([_ds.O({type:Boolean,Ba:"data-days"}),_ds.y(Object)],w0.prototype,"displayDays",void 0);_ds.x([_ds.O({type:Boolean,Ba:"data-hours"}),_ds.y(Object)],w0.prototype,"displayHours",void 0);_ds.x([_ds.O({type:Boolean,Ba:"data-minutes"}),_ds.y(Object)],w0.prototype,"displayMinutes",void 0);
_ds.x([_ds.O({type:Boolean,Ba:"data-seconds"}),_ds.y(Object)],w0.prototype,"displaySeconds",void 0);_ds.x([_ds.O({type:Boolean,Ba:"data-remove-on-finish"}),_ds.y(Object)],w0.prototype,"removeOnFinish",void 0);_ds.x([_ds.O({type:Boolean,Ba:"data-pad"}),_ds.y(Object)],w0.prototype,"padNumbers",void 0);try{customElements.define(u0(),w0)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteCountdown",a)};})(_ds_www);