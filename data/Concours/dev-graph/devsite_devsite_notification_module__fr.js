(function(_ds){var window=this;var g6,h6=function(){return"devsite-notification"},i6=function(a){a.dispatchEvent(new CustomEvent("devsite-hide-notification-snackbar-msg",{bubbles:!0}))},j6=class extends _ds.D{constructor(){super(["devsite-snackbar"])}async connectedCallback(){await customElements.whenDefined("devsite-snackbar");const a=this.getAttribute("link"),b=this.getAttribute("link-text"),c=this.getAttribute("message");a!==g6&&(!a&&g6?(g6="",i6(this)):a&&c&&(g6&&i6(this),g6=a,this.dispatchEvent(new CustomEvent("devsite-show-notification-snackbar-msg",
{detail:{href:a,linkText:b||"",msg:c},bubbles:!0}))))}};j6.prototype.connectedCallback=j6.prototype.connectedCallback;j6.getTagName=h6;try{customElements.define(h6(),j6)}catch(a){console.warn("devsite.app.customElement.DevsiteNotification",a)};})(_ds_www);
