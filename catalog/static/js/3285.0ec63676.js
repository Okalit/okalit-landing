/*! For license information please see 3285.0ec63676.js.LICENSE.txt */
"use strict";(self.webpackChunkokalit_ui_catalog=self.webpackChunkokalit_ui_catalog||[]).push([["3285"],{3726(e,t,r){r.d(t,{vP:()=>Y,t:()=>eg,Di:()=>en,qy:()=>i.qy,eV:()=>ea});var s,i=r(9307),o=Object.defineProperty,n=(e,t,r)=>{let s;return(s="symbol"!=typeof t?t+"":t)in e?o(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,r},l=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},a=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},c=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot access private method");return r};function h(e,t){return Object.is(e,t)}let d=null,u=!1,p=1,m=Symbol("SIGNAL");function f(e){let t=d;return d=e,t}let v={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function _(e){if(u)throw Error("u">typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===d)return;d.consumerOnSignalRead(e);let t=d.nextProducerIndex++;y(d),t<d.producerNode.length&&d.producerNode[t]!==e&&b(d)&&g(d.producerNode[t],d.producerIndexOfThis[t]),d.producerNode[t]!==e&&(d.producerNode[t]=e,d.producerIndexOfThis[t]=b(d)?function e(t,r,s){var i;if($(t),y(t),0===t.liveConsumerNode.length){null==(i=t.watched)||i.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)t.producerIndexOfThis[r]=e(t.producerNode[r],t,r)}return t.liveConsumerIndexOfThis.push(s),t.liveConsumerNode.push(r)-1}(e,d,t):0),d.producerLastReadVersion[t]=e.version}function g(e,t){var r;if($(e),y(e),"u">typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(r=e.unwatched)||r.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)g(e.producerNode[t],e.producerIndexOfThis[t])}let s=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[s],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[s],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],s=e.liveConsumerNode[t];y(s),s.producerIndexOfThis[r]=t}}function b(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function y(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function $(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function w(e){if(function e(t){if(t.dirty||t.lastCleanEpoch!==p){if(!t.producerMustRecompute(t)&&!function(t){y(t);for(let r=0;r<t.producerNode.length;r++){let s=t.producerNode[r],i=t.producerLastReadVersion[r];if(i!==s.version||(e(s),i!==s.version))return!0}return!1}(t)){t.dirty=!1,t.lastCleanEpoch=p;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=p}}(e),_(e),e.value===A)throw e.error;return e.value}let C=Symbol("UNSET"),S=Symbol("COMPUTING"),A=Symbol("ERRORED"),E={...v,value:C,dirty:!0,error:null,equal:h,producerMustRecompute:e=>e.value===C||e.value===S,producerRecomputeValue(e){let t;if(e.value===S)throw Error("Detected cycle in computations.");let r=e.value;e.value=S;let s=(e&&(e.nextProducerIndex=0),f(e)),i=!1;try{t=e.computation.call(e.wrapper),i=r!==C&&r!==A&&e.equal.call(e.wrapper,r,t)}catch(r){t=A,e.error=r}finally{if(f(s),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(b(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)g(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}if(i){e.value=r;return}e.value=t,e.version++}},x=function(){throw Error()};function k(){return _(this),this.value}let T={...v,equal:h,value:void 0},N=Symbol("node");(e=>{var t,r;t=new WeakSet,e.isState=e=>"object"==typeof e&&l(t,e),e.State=class{constructor(r,s={}){a(this,t),n(this,N);const i=function(e){let t=Object.create(T);t.value=e;let r=()=>(_(t),t.value);return r[m]=t,r}(r)[m];if(this[N]=i,i.wrapper=this,s){const t=s.equals;t&&(i.equal=t),i.watched=s[e.subtle.watched],i.unwatched=s[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.get");return k.call(this[N])}set(t){var r,s;if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.set");if(u)throw Error("Writes to signals not permitted during Watcher callback");r=this[N],(null==d?void 0:d.consumerAllowSignalWrites)===!1&&x(),r.equal.call(r.wrapper,r.value,t)||(r.value=t,s=r,s.version++,p++,function e(t){if(void 0===t.liveConsumerNode)return;let r=u;u=!0;try{for(let r of t.liveConsumerNode)r.dirty||function(t){var r;t.dirty=!0,e(t),null==(r=t.consumerMarkedDirty)||r.call(t.wrapper??t)}(r)}finally{u=r}}(s))}},r=new WeakSet,e.isComputed=e=>"object"==typeof e&&l(r,e),e.Computed=class{constructor(t,s){a(this,r),n(this,N);const i=function(e){let t=Object.create(E);t.computation=e;let r=()=>w(t);return r[m]=t,r}(t)[m];if(i.consumerAllowSignalWrites=!0,this[N]=i,i.wrapper=this,s){const t=s.equals;t&&(i.equal=t),i.watched=s[e.subtle.watched],i.unwatched=s[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");return w(this[N])}},(t=>{var r,s,i;t.untrack=function(e){let t,r=null;try{r=f(null),t=e()}finally{f(r)}return t},t.introspectSources=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(r=t[N].producerNode)?void 0:r.map(e=>e.wrapper))??[]},t.introspectSinks=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called introspectSinks without a Signal argument");return(null==(r=t[N].liveConsumerNode)?void 0:r.map(e=>e.wrapper))??[]},t.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called hasSinks without a Signal argument");let r=t[N].liveConsumerNode;return!!r&&r.length>0},t.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called hasSources without a Computed or Watcher argument");let r=t[N].producerNode;return!!r&&r.length>0},r=new WeakSet,s=new WeakSet,i=function(t){for(let r of t)if(!(0,e.isComputed)(r)&&!(0,e.isState)(r))throw TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>l(r,e),t.Watcher=class{constructor(e){a(this,r),a(this,s),n(this,N);let t=Object.create(v);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[N]=t}watch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");c(this,s,i).call(this,t);let r=this[N];r.dirty=!1;let o=f(r);for(let e of t)_(e[N]);f(o)}unwatch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");c(this,s,i).call(this,t);let r=this[N];y(r);for(let e=r.producerNode.length-1;e>=0;e--)if(t.includes(r.producerNode[e].wrapper)){g(r.producerNode[e],r.producerIndexOfThis[e]);let t=r.producerNode.length-1;if(r.producerNode[e]=r.producerNode[t],r.producerIndexOfThis[e]=r.producerIndexOfThis[t],r.producerNode.length--,r.producerIndexOfThis.length--,r.nextProducerIndex--,e<r.producerNode.length){let t=r.producerIndexOfThis[e],s=r.producerNode[e];$(s),s.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw TypeError("Called getPending without Watcher receiver");return this[N].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}},t.currentComputed=function(){var e;return null==(e=d)?void 0:e.wrapper},t.watched=Symbol("watched"),t.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(s||(s={}));let O=!1,P=new s.subtle.Watcher(()=>{O||(O=!0,queueMicrotask(()=>{for(let e of(O=!1,P.getPending()))e.get();P.watch()}))}),R=Symbol("SignalWatcherBrand"),I=new FinalizationRegistry(e=>{e.unwatch(...s.subtle.introspectSources(e))}),L=new WeakMap;function M(e){return!0===e[R]?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new Map,this._$So=new s.State(0),this._$Si=!1}_$Sl(){var e,t;let r=[],s=[];this._$St.forEach((e,t)=>{((null==e?void 0:e.beforeUpdate)?r:s).push(t)});let i=null==(e=this.h)?void 0:e.getPending().filter(e=>e!==this._$Su&&!this._$St.has(e));r.forEach(e=>e.get()),null==(t=this._$Su)||t.get(),i.forEach(e=>e.get()),s.forEach(e=>e.get())}_$Sv(){this.isUpdatePending||queueMicrotask(()=>{this.isUpdatePending||this._$Sl()})}_$S_(){if(void 0!==this.h)return;this._$Su=new s.Computed(()=>{this._$So.get(),super.performUpdate()});let e=this.h=new s.subtle.Watcher(function(){let e=L.get(this);void 0!==e&&(!1===e._$Si&&(new Set(this.getPending()).has(e._$Su)?e.requestUpdate():e._$Sv()),this.watch())});L.set(e,this),I.register(this,e),e.watch(this._$Su),e.watch(...Array.from(this._$St).map(([e])=>e))}_$Sp(){if(void 0===this.h)return;let e=!1;this.h.unwatch(...s.subtle.introspectSources(this.h).filter(t=>{var r;let s=!0!==(null==(r=this._$St.get(t))?void 0:r.manualDispose);return s&&this._$St.delete(t),e||(e=!s),s})),e||(this._$Su=void 0,this.h=void 0,this._$St.clear())}updateEffect(e,t){var r;this._$S_();let i=new s.Computed(()=>{e()});return this.h.watch(i),this._$St.set(i,t),null!=(r=null==t?void 0:t.beforeUpdate)&&r?s.subtle.untrack(()=>i.get()):this.updateComplete.then(()=>s.subtle.untrack(()=>i.get())),()=>{this._$St.delete(i),this.h.unwatch(i),!1===this.isConnected&&this._$Sp()}}performUpdate(){this.isUpdatePending&&(this._$S_(),this._$Si=!0,this._$So.set(this._$So.get()+1),this._$Si=!1,this._$Sl())}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp()})}}}var j=r(1784),U=r(84);let D=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),D(e,t);return!0},q=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},V=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),z(t)}};function W(e){void 0!==this._$AN?(q(this),this._$AM=e,V(this)):this._$AM=e}function H(e,t=!1,r=0){let s=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(s))for(let e=r;e<s.length;e++)D(s[e],!1),q(s[e]);else null!=s&&(D(s,!1),q(s));else D(this,e)}let z=e=>{e.type==j.OA.CHILD&&(e._$AP??=H,e._$AQ??=W)};class B extends j.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),V(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(D(this,e),q(this))}setValue(e){if((0,U.Rt)(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}let F=!1,J=new s.subtle.Watcher(async()=>{F||(F=!0,queueMicrotask(()=>{for(let e of(F=!1,J.getPending()))e.get();J.watch()}))}),Z=(0,j.u$)(class extends B{_$S_(){var e,t;void 0===this._$Sm&&(this._$Sj=new s.Computed(()=>{var e;let t=null==(e=this._$SW)?void 0:e.get();return this.setValue(t),t}),this._$Sm=null!=(t=null==(e=this._$Sk)?void 0:e.h)?t:J,this._$Sm.watch(this._$Sj),s.subtle.untrack(()=>{var e;return null==(e=this._$Sj)?void 0:e.get()}))}_$Sp(){void 0!==this._$Sm&&(this._$Sm.unwatch(this._$SW),this._$Sm=void 0)}render(e){return s.subtle.untrack(()=>e.get())}update(e,[t]){var r;return null!=this._$Sk||(this._$Sk=null==(r=e.options)?void 0:r.host),t!==this._$SW&&void 0!==this._$SW&&this._$Sp(),this._$SW=t,this._$S_(),s.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$S_()}});var G=r(3324);let X=e=>(t,...r)=>e(t,...r.map(e=>e instanceof s.State||e instanceof s.Computed?Z(e):e));X(G.qy),X(G.JW),s.State,s.Computed;class K extends s.State{get value(){return this.get()}set value(e){this.set(e)}}s.Computed;let Y=(e,t)=>new K(e,t),Q=e=>s.subtle.untrack(e);function ee(e){let t,r=!1,i=!1,o=new s.Computed(()=>{t?.();let r=e();t="function"==typeof r?r:void 0}),n=new s.subtle.Watcher(()=>{i||r||(i=!0,queueMicrotask(l))});function l(){if(i=!1,!r){for(let e of n.getPending())e.get();n.watch()}}return o.get(),n.watch(o),()=>{r=!0,n.unwatch(o),t?.(),t=void 0}}let et=new Map,er=new TextEncoder;new TextDecoder("utf-8",{fatal:!0});function es(e){for(let[t,r]of et){if(r._scope!==e)continue;if(r.ephemeral){et.delete(t);continue}r.signal.set(structuredClone(r._initialValue));let s=ei(r._persist);s&&s.removeItem(`okalit:channel:${t}`),et.delete(t)}}function ei(e){return"local"===e?localStorage:"session"===e?sessionStorage:null}function eo(e={}){let t=Array.isArray(e)?e:[e],r=[];for(let e of t){if(!e||"object"!=typeof e||Array.isArray(e))throw TypeError("[okalit] Props must be an object keyed by prop name.");r.push(...Object.entries(e))}return Object.fromEntries(r)}class en extends M(i.WF){static styles=[];static props={};constructor(){super(),this._dispose=[],this._signals={},this._propsEffect=null,this._channelsInitialized=!1,this._initProps()}createRenderRoot(){let e=super.createRenderRoot(),t=this.constructor;return t.styles?.length&&(t.__sheet||(t.__sheet=new CSSStyleSheet,t.__sheet.replaceSync(t.styles.join("\n"))),e.adoptedStyleSheets=[...e.adoptedStyleSheets,t.__sheet]),e}_initProps(){for(let[e,t]of Object.entries(eo(this.constructor.props)))this._signals[e]=Y(t.value),Object.defineProperty(this,e,{get:()=>this._signals[e],set:t=>{if(t&&"object"==typeof t&&"value"in t&&t===this._signals[e])return;let r=Q(()=>this._signals[e].get());this._signals[e].set(t),this.requestUpdate(e,r)},configurable:!0,enumerable:!0})}_watchProps(){let e=Object.entries(eo(this.constructor.props));if(!e.length)return;this._propsEffect&&(this._propsEffect(),this._propsEffect=null);let t={};for(let[r]of e)t[r]=this._signals[r].get();let r=ee(()=>{let r={},s=!1;for(let[i]of e){let e=this._signals[i].get();t[i]!==e&&(r[i]={previous:t[i],current:e},t[i]=e,s=!0)}s&&Q(()=>this.onChange(r))});this._propsEffect=r}connectedCallback(){super.connectedCallback(),this._syncAttributes(),!this._channelsInitialized&&this.constructor.channels&&(this._dispose.push(...function(e){let t=e.constructor.channels;if(!t)return[];let r=[],s=[],i=e.tagName.toLowerCase();for(let[r,i]of Object.entries(t)){let t=function(e,t){if(et.has(e))return et.get(e);let r=new Set;if(t.ephemeral){let s={ephemeral:!0,_scope:t.scope,subscribers:r,set(e){for(let t of r)t(e)},get value(){return}};return et.set(e,s),s}let s=Y(function(e,t){let r,s=ei(t.persist);if(!s)return;let i=s.getItem(`okalit:channel:${e}`);if(null!==i){try{r=JSON.parse(i)}catch{console.warn(`[okalit-channel] Corrupted JSON in storage for "${e}", discarding.`),s.removeItem(`okalit:channel:${e}`);return}if("function"==typeof t.validate){if(!t.validate(r)){console.warn(`[okalit-channel] Validation failed for "${e}", discarding stored value.`),s.removeItem(`okalit:channel:${e}`);return}return r}if(void 0!==t.initialValue&&!function(e,t){if(null==t)return!0;let r=typeof t,s=typeof e;if("object"!==r)return s===r;if(null===e)return!1;if(Array.isArray(t))return Array.isArray(e);if("object"!==s||Array.isArray(e))return!1;for(let r of Object.keys(t))if(!(r in e)||null!==t[r]&&void 0!==t[r]&&typeof e[r]!=typeof t[r])return!1;return!0}(r,t.initialValue)){console.warn(`[okalit-channel] Type mismatch for "${e}", discarding stored value.`),s.removeItem(`okalit:channel:${e}`);return}return r}}(e,t)??structuredClone(t.initialValue)),i={ephemeral:!1,_scope:t.scope,_persist:t.persist,_initialValue:t.initialValue,signal:s,subscribers:r,set(r){s.set(r),function(e,t,r){let s=ei(r.persist);if(!s)return;let i=JSON.stringify(t);s.setItem(`okalit:channel:${e}`,i)}(e,r,t)},reset(){s.set(structuredClone(t.initialValue));let r=ei(t.persist);r&&r.removeItem(`okalit:channel:${e}`)},get value(){return s.get()}};return et.set(e,i),i}(i._channelName,i._channelOptions),o=i._channelName,n={set:e=>{t.set(e)},reset:()=>t.reset?.(),get value(){return t.value}};e[r]=n,i._methodName&&s.push({channel:t,methodName:i._methodName,channelName:o})}for(let{channel:t,methodName:o,channelName:n}of s){let s=t=>{"function"==typeof e[o]&&e[o](t)};if(t._subscriberMeta||(t._subscriberMeta=new Map),t._subscriberMeta.set(s,i),t.subscribers.add(s),r.push(()=>{t.subscribers.delete(s),t._subscriberMeta?.delete(s)}),!t.ephemeral){let e=ee(()=>{let e=t.signal.get();Q(()=>s(e))});r.push(e)}}return r}(this)),this._channelsInitialized=!0),this.onConnected(),this._watchProps()}disconnectedCallback(){for(let e of(super.disconnectedCallback(),this._propsEffect&&(this._propsEffect(),this._propsEffect=null),this._dispose))e();this._dispose=[],this._channelsInitialized=!1,this.onDisconnected()}firstUpdated(e){super.firstUpdated(e),this.onFirstRender(e)}willUpdate(e){super.willUpdate(e),this.onBeforeRender(e)}updated(e){super.updated(e),this.onAfterRender(e)}onConnected(){this.onInit()}onInit(){}onChange(e){}onFirstRender(e){}onBeforeRender(e){}onAfterRender(e){}onDisconnected(){this.onDestroy()}onDestroy(){}onCacheHide(){}onCacheView(){}attributeChangedCallback(e,t,r){let s=this.constructor._propMap;if(!s)return;let i=Object.keys(s).find(t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()===e);i&&this._signals&&this._signals[i]&&this._signals[i].set(el(r,s[i].type))}_syncAttributes(){let e=this.constructor._propMap;if(e)for(let[t,r]of Object.entries(e)){let e=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();this.hasAttribute(e)&&this._signals[t].set(el(this.getAttribute(e),r.type))}}output(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!1,composed:!1}))}render(){return(0,i.qy)``}}function el(e,t){switch(t){case Number:return Number(e);case Boolean:return null!==e&&"false"!==e;default:return e}}function ea({tag:e,styles:t=[],props:r={}}){return function(s,i){s.styles=t;let o=eo(r);s.props=o,s._propMap=o,Object.defineProperty(s,"observedAttributes",{get:()=>Object.keys(o).map(ec),configurable:!0,enumerable:!0}),i.addInitializer(function(){customElements.get(e)||customElements.define(e,s)})}}function ec(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}let eh=null;class ed{constructor(e=[]){if(eh)return eh;eh=this,this._routes=e,this._outlets=new Set,this._navigationId=0,this.currentPath=Y(window.location.pathname),this.currentRoute=Y(null),this.params=Y({}),this.query=Y({}),this._onPopState=this._onPopState.bind(this),window.addEventListener("popstate",this._onPopState),this._pendingPath=window.location.pathname+window.location.search}static getInstance(){return eh}navigate(e,{replace:t=!1}={}){let[r]=e.split("?");return r===this.currentPath.value&&e===window.location.pathname+window.location.search?void 0:this._matchRoute(this._routes,r||"/")?this._resolve(e,{historyMode:t?"replace":"push"}):void console.warn(`[okalit-router] No route matched: ${r}`)}back(){window.history.back()}registerOutlet(e){if(this._outlets.add(e),this._pendingPath){let e=this._pendingPath;this._pendingPath=null,this._resolve(e)}else this.currentRoute.value&&this._isOutletActive(e,this.currentRoute.value)&&e._renderRoute(this.currentRoute.value)}unregisterOutlet(e){this._outlets.delete(e)}_isOutletActive(e,t){let r=e._routeAncestors||[];return r.length===e._depth&&r.every((r,s)=>{let i=t.chain[e._depth-s-1];return i?.component?.toLowerCase()===r})}destroy(){this._navigationId++,window.removeEventListener("popstate",this._onPopState),this._outlets.clear(),eh===this&&(eh=null)}_onPopState(){this._resolve(window.location.pathname+window.location.search)}async _resolve(e,{historyMode:t=null}={}){let r=++this._navigationId,[s,i]=e.split("?"),o=s||"/",n=Object.fromEntries(new URLSearchParams(i||"")),l=this._matchRoute(this._routes,o);if(!l)return void console.warn(`[okalit-router] No route matched: ${o}`);if(!await this._runGuards(l.guards,o,l,r)||r!==this._navigationId)return!1;"replace"===t?window.history.replaceState(null,"",e):"push"===t&&window.history.pushState(null,"",e),this.currentPath.value=o,this.params.value=l.params,this.query.value=n;let a=this.currentRoute.value;if(a){let e=a.chain[a.chain.length-1]?.component,t=l.chain[l.chain.length-1]?.component,r=a.chain[0]?.component,s=l.chain[0]?.component;e!==t&&es("page"),r!==s&&es("module")}this.currentRoute.value=l;let c=Math.max(l.chain.length-1,...Array.from(this._outlets,e=>e._depth??0),0);for(let e=0;e<=c;e++){if(r!==this._navigationId)return!1;let t=Array.from(this._outlets).filter(t=>t._depth===e&&this._isOutletActive(t,l));await Promise.all(t.map(e=>e._renderRoute(l)))}return r===this._navigationId}async _runGuards(e,t,r,s){if(!e||!e.length)return!0;for(let i of e){let e=await i({path:t,params:r.params,route:r});if(s!==this._navigationId||!1===e)return!1;if("string"==typeof e)return this.navigate(e,{replace:!0}),!1}return!0}_matchRoute(e,t,r="",s=[]){let i=[];for(let o of e){let e="/"+(r+"/"+o.path).split("/").filter(Boolean).join("/"),n=function(e,t){let r=e.split("/").filter(Boolean),s=r.indexOf("**");if(-1===s)return null;if(s!==r.length-1)throw Error(`Route wildcard must be the final path segment: "${e}"`);let i=eu("/"+r.slice(0,-1).join("/"),t);return i?{params:i.params,exact:!0}:null}(e,t);if(n){i.push({route:o,match:n});continue}let l=o.children&&o.children.length?eu(e,t):function(e,t){let r=e.split("/").filter(Boolean),s=t.split("/").filter(Boolean);if(r.length!==s.length)return null;let i={};for(let e=0;e<r.length;e++)if(r[e].startsWith(":"))i[r[e].slice(1)]=ep(s[e]);else if(r[e]!==s[e])return null;return{params:i,exact:!0}}(e,t);if(l){let r=[...s,...o.guards||[]],i={route:o,params:l.params,guards:r,chain:[o]};if(o.children&&o.children.length){let s=this._matchRoute(o.children,t,e,r);if(s)return s.chain=[o,...s.chain],s}if(l.exact||!o.children)return i}}for(let{route:e,match:t}of i)return{route:e,params:t.params,guards:[...s,...e.guards||[]],chain:[e]};return null}}function eu(e,t){let r=e.split("/").filter(Boolean),s=t.split("/").filter(Boolean);if(s.length<r.length)return null;let i={};for(let e=0;e<r.length;e++)if(r[e].startsWith(":"))i[r[e].slice(1)]=ep(s[e]);else if(r[e]!==s[e])return null;return{params:i,exact:r.length===s.length}}function ep(e){try{return decodeURIComponent(e)}catch{return e}}let em=Y("en"),ef=Y(0),ev=null;class e_{constructor(e){if(ev)return ev;ev=this,this.locale=em,this._version=ef,this._translations={},this._defaultLocale=e.default||"en",this._locales=e.locales||[this._defaultLocale],this._basePath=e.basePath||"/i18n",this._ready=!1,this.locale.value=this._detectLocale(),this._readyPromise=this._loadLocale(this.locale.value)}static getInstance(){return ev}_detectLocale(){let e=localStorage.getItem("okalit:locale");if(e&&this._locales.includes(e))return e;let t=navigator.language?.split("-")[0];return t&&this._locales.includes(t)?t:this._defaultLocale}async _loadLocale(e){if(this._translations[e]){this._ready=!0;return}try{let t=await fetch(`${this._basePath}/${e}.json`);if(!t.ok)throw Error(`HTTP ${t.status}: ${t.statusText}`);this._translations[e]=await t.json(),this._ready=!0}catch(t){console.warn(`[i18n] Failed to load locale: ${e}`,t),this._translations[e]={}}this._version.value++}async setLocale(e){this._locales.includes(e)?(await this._loadLocale(e),this.locale.value=e,localStorage.setItem("okalit:locale",e)):console.warn(`[i18n] Unknown locale: ${e}`)}translate(e,t){let r=this.locale.value,s=this._translations[r]||{},i=e.split(".").reduce((e,t)=>e?.[t],s);if(void 0===i){let t=this._translations[this._defaultLocale]||{};i=e.split(".").reduce((e,t)=>e?.[t],t)}return void 0===i?e:(t&&(i=i.replace(/\{\{\s*(\w+)\s*\}\}/g,(e,r)=>t[r]??"")),i)}get ready(){return this._readyPromise}destroy(){ev=null}}function eg(e,t){em.value,ef.value;let r=e_.getInstance();return r?r.translate(e,t):e}class eb extends HTMLElement{static get observedAttributes(){return["cache-limit"]}constructor(){super(),this.attachShadow({mode:"open"}),this._style=document.createElement("style"),this._style.textContent=":host { display: contents; }",this.shadowRoot.appendChild(this._style),this._currentComponent=null,this._currentElement=null,this._currentRoute=null,this._cache=new Map,this._cacheLimit=10,this._depth=0,this._routeAncestors=[],this._renderVersion=0,this._renderPromise=Promise.resolve()}get cacheLimit(){return this._cacheLimit}set cacheLimit(e){let t=Number(e);this._cacheLimit=Number.isFinite(t)&&t>=0?Math.floor(t):10,this._trimCache()}attributeChangedCallback(e,t,r){"cache-limit"===e&&t!==r&&(this.cacheLimit=null===r?10:r)}connectedCallback(){this._depth=0,this._routeAncestors=[];let e=this.getRootNode(),t=[];for(;e&&e.host;){if("OKALIT-ROUTER"===e.host.tagName){this._depth++;let e=t.at(-1);e&&this._routeAncestors.push(e.localName),t=[]}else t.push(e.host);e=e.host.getRootNode()}let r=ed.getInstance();r&&r.registerOutlet(this)}disconnectedCallback(){let e=ed.getInstance();e&&e.unregisterOutlet(this)}_renderRoute(e){return this._renderPromise=this._renderRouteInternal(e),this._renderPromise}async _renderRouteInternal(e){let t=++this._renderVersion,r=e.chain[this._depth];if(!r){this._hideOrRemoveCurrent(),this._currentComponent=null,this._currentElement=null,this._currentRoute=null;return}if(this._currentComponent===r.component||(r.import&&await r.import(),t!==this._renderVersion))return;let s=this._cache.get(r.component);if(s){let i=s.style.visibility;s.style.visibility="hidden";try{await this._waitForNestedRoute(s,e,!0)}catch(e){throw s.style.visibility=i,e}if(t!==this._renderVersion){s.style.visibility=i;return}this._cache.delete(r.component),this._hideOrRemoveCurrent(),s.style.visibility=i,s.style.display="",this._currentComponent=r.component,this._currentElement=s,this._currentRoute=r,"function"==typeof s.onCacheView&&s.onCacheView();return}let i=document.createElement(r.component),o=i.style.visibility;i.style.visibility="hidden",this.shadowRoot.appendChild(i);try{i.updateComplete&&await i.updateComplete,await this._waitForNestedRoute(i,e)}catch(e){throw i.remove(),e}t!==this._renderVersion?i.remove():(this._hideOrRemoveCurrent(),i.style.visibility=o,this._currentComponent=r.component,this._currentElement=i,this._currentRoute=r)}async _waitForNestedRoute(e,t,r=!1){if(!t.chain[this._depth+1])return;let s=e.shadowRoot?.querySelector("okalit-router");if(!s)return;let i=r?s._renderRoute(t):s._renderPromise||s._renderRoute(t);await i}_hideOrRemoveCurrent(){this._currentElement&&(this._currentRoute?.cache&&this._cacheLimit>0?(this._currentElement.style.display="none",this._cache.delete(this._currentComponent),this._cache.set(this._currentComponent,this._currentElement),"function"==typeof this._currentElement.onCacheHide&&this._currentElement.onCacheHide(),this._trimCache()):this._currentElement.remove())}_trimCache(){for(;this._cache.size>this._cacheLimit;){let e=this._cache.keys().next().value,t=this._cache.get(e);this._cache.delete(e),t?.remove()}}}customElements.get("okalit-router")||customElements.define("okalit-router",eb);let ey=`
  :host { display: contents; }
  ::slotted([slot="fallback"]) { display: none; }
  :host(:not([loaded])) ::slotted(:not([slot])) { display: none; }
  :host(:not([loaded])) ::slotted([slot="fallback"]) { display: contents; }
`;async function e$(e){if(e._done||e._loading)return;e._loading=!0;let t=Array.isArray(e.loader)?e.loader:[e.loader];try{await Promise.all(t.map(e=>e())),e._done=!0,e.setAttribute("loaded","")}catch(t){e.dispatchEvent(new CustomEvent("o-error",{detail:t,bubbles:!0,composed:!0}))}finally{e._loading=!1}}function ew(e){let t=document.createElement("style");t.textContent=ey,e.append(t,document.createElement("slot"),Object.assign(document.createElement("slot"),{name:"fallback"}))}class eC extends HTMLElement{_done=!1;_loading=!1;#e=null;#t=null;#r=null;#s=!1;get loader(){return this.#e}set loader(e){!this._done&&!this._loading&&(this.#e=e,e&&this.#s&&this.#i())}constructor(){super(),this.attachShadow({mode:"open"}),ew(this.shadowRoot)}connectedCallback(){this.#s=!0,this.#e&&this.#i()}#i(){this._done||this._loading||null!=this.#t||null!=this.#r||("function"==typeof requestIdleCallback?this.#t=requestIdleCallback(()=>e$(this)):this.#r=setTimeout(()=>e$(this),200))}disconnectedCallback(){this.#s=!1,null!=this.#t&&(cancelIdleCallback(this.#t),this.#t=null),null!=this.#r&&(clearTimeout(this.#r),this.#r=null)}}class eS extends HTMLElement{_done=!1;_loading=!1;#e=null;#o=!1;#n=!1;#s=!1;get loader(){return this.#e}set loader(e){this._done||this._loading||(this.#e=e,this.#l())}set condition(e){this.#o=!!e,this.#l()}#l(){!this.#n&&!this._done&&!this._loading&&this.#s&&this.#o&&this.#e&&(this.#n=!0,e$(this))}constructor(){super(),this.attachShadow({mode:"open"}),ew(this.shadowRoot)}connectedCallback(){this.#s=!0,this.#l()}disconnectedCallback(){this.#s=!1}}class eA extends HTMLElement{_done=!1;_loading=!1;#e=null;#a=null;#s=!1;#c=null;get loader(){return this.#e}set loader(e){!this._done&&!this._loading&&(this.#e=e,e&&this.#s&&this.#h())}constructor(){super(),this.attachShadow({mode:"open"}),this.#c=document.createElement("span"),this.#c.style.cssText="display:block;width:1px;height:1px;pointer-events:none;";const e=document.createElement("style");e.textContent=`
      :host { display: contents; }
      ::slotted([slot="fallback"]) { display: none; }
      :host(:not([loaded])) ::slotted(:not([slot])) { display: none; }
      :host(:not([loaded])) ::slotted([slot="fallback"]) { display: contents; }
    `,this.shadowRoot.append(e,this.#c,document.createElement("slot"),Object.assign(document.createElement("slot"),{name:"fallback"}))}connectedCallback(){this.#s=!0,this.#e&&this.#h()}#h(){this._done||this._loading||this.#a||(this.#a=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){this.#a.disconnect(),this.#a=null,e$(this);return}},{rootMargin:"200px"}),this.#a.observe(this.#c))}disconnectedCallback(){this.#s=!1,this.#a?.disconnect(),this.#a=null}}customElements.get("o-idle")||customElements.define("o-idle",eC),customElements.get("o-when")||customElements.define("o-when",eS),customElements.get("o-viewport")||customElements.define("o-viewport",eA)},5908(e,t,r){var s=r(3726),i={tag:"okalit-demo-components",styles:[`:host {
  display: block;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  --bg-primary: #282a36;
  --bg-secondary: #1e1f29;
  --bg-surface: #44475a;
  --accent: #bd93f9;
  --accent-dim: #9d6ff5;
  --accent-glow: rgba(189, 147, 249, 0.12);
  --border: rgba(98, 114, 164, 0.4);
  --text-primary: #f8f8f2;
  --text-secondary: #6272a4;
  --cyan: #8be9fd;
  --green: #50fa7b;
  --orange: #ffb86c;
  --pink: #ff79c6;
  --red: #ff5555;
  --yellow: #f1fa8c;

  color: var(--text-primary);
}

main {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  gap: 2rem;
  background: var(--bg-primary);
}

h1 {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-left: 2rem;
}

.resolution {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.separator {
  width: 1px;
  height: 1.5rem;
  background: var(--border);
  margin: 0 0.25rem;
}

.content > .device {
  border: 1px solid var(--border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f2;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  transition: background 0.3s ease, color 0.3s ease;
  color: #282a36;
  overflow: auto;
}

.content > .device.device-dark {
  background: #21222c;
  color: #f8f8f2;
  border-color: rgba(189, 147, 249, 0.3);
  box-shadow: 0 4px 24px rgba(189, 147, 249, 0.08);
}

.content > .mobile {
  width: 25vw;
  height: 80vh;
  min-width: 24rem;
}

.content > .tablet {
  width: 40vw;
  height: 80vh;
  min-width: 40rem;
}

.content > .fullscreen {
  width: 94vw;
  height: 80vh;
}

.details {
  width: stretch;
  padding: 2rem;
  overflow-y: auto;
  border-left: 1px solid var(--border);
}

.prop {
  display: flex;
  gap: 1rem;
}

.tabs {
  margin-bottom: 1rem;
  display: flex;
  gap: 0.25rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}

button {
  background: var(--bg-surface);
  color: var(--text-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background: var(--accent-dim);
  color: #ffffff;
  border-color: var(--accent);
  box-shadow: 0 0 10px var(--accent-glow);
}

button.active {
  background: var(--accent);
  color: #ffffff;
  border-color: var(--accent);
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
}

thead {
  background: var(--bg-surface);
}

thead th {
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--pink);
}

tbody tr {
  border-top: 1px solid var(--border);
}

tbody tr:hover {
  background: var(--accent-glow);
}

.row {
  font-weight: 400;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.row input[type="text"],
.row input[type="number"] {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.35rem 0.6rem;
  font-size: 0.82rem;
  color: var(--text-primary);
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

.row input[type="text"]:focus,
.row input[type="number"]:focus {
  border-color: var(--accent);
}

.row input[type="checkbox"] {
  accent-color: var(--accent);
  width: 1rem;
  height: 1rem;
  cursor: pointer;
}

.slot-input {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  font-size: 0.82rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  color: var(--text-primary);
  outline: none;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
  transition: border-color 0.2s ease;
}

.slot-input:focus {
  border-color: var(--accent);
}

.component-select {
  background: var(--bg-surface);
  color: var(--text-primary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s ease;
}

.component-select:focus {
  border-color: var(--accent);
}

.loading {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.code-example {
  background: #21222c;
  color: #f8f8f2;
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.82rem;
  line-height: 1.6;
  overflow-x: auto;
  margin: 0;
  border: 1px solid var(--border);
}

.console-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 70vh;
}

.console-toolbar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
}

.console-clear {
  font-size: 0.72rem;
  padding: 0.3rem 0.7rem;
}

.console-logs {
  overflow-y: auto;
  background: #21222c;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.75rem;
  flex: 1;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.78rem;
}

.console-empty {
  color: var(--text-secondary);
  font-style: italic;
}

.console-entry {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  padding: 0.3rem 0;
  border-bottom: 1px solid rgba(98, 114, 164, 0.2);
  flex-wrap: wrap;
}

.console-entry:last-child {
  border-bottom: none;
}

.console-time {
  color: var(--text-secondary);
  font-size: 0.7rem;
  min-width: 5rem;
}

.console-type {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}

.console-type--event {
  background: rgba(80, 250, 123, 0.15);
  color: var(--green);
}

.console-type--channel {
  background: rgba(139, 233, 253, 0.15);
  color: var(--cyan);
}

.console-type--info {
  background: rgba(255, 184, 108, 0.15);
  color: var(--orange);
}

.console-name {
  color: var(--text-primary);
  font-weight: 500;
}

.console-detail {
  margin: 0.2rem 0 0;
  width: 100%;
  padding-left: 5.5rem;
  color: var(--text-secondary);
  white-space: pre-wrap;
  word-break: break-all;
}

.doc-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.doc-actions {
  display: flex;
  gap: 0.5rem;
}

.doc-btn {
  background: var(--accent);
  color: #ffffff;
  border: 1px solid var(--accent);
  font-weight: 600;
}

.doc-btn:hover {
  background: var(--accent-dim);
}

.doc-preview {
  max-height: 50vh;
  overflow-y: auto;
  font-size: 0.78rem;
  white-space: pre-wrap;
  word-break: break-word;
}

.doc-button {
  display: flex;
}

.doc-button > span {
  margin-top: 0.4rem;
  margin-left: 0.4rem;
}

@media screen and (width <= 1200px) {
  .details {
    display: none;
  }
}`],props:{components:{type:Array,value:[]}}},o=class extends s.Di{static channels=i.channels||{};resolutions=(0,s.vP)("mobile");deviceTheme=(0,s.vP)("dark");currentComponent=(0,s.vP)(null);currentTab=(0,s.vP)("props");componentLoaded=(0,s.vP)(!1);propValues=(0,s.vP)({});slotValues=(0,s.vP)({});consoleLogs=(0,s.vP)([]);_eventCleanups=[];_previewEl=null;_previewTag=null;_initPropValues(e){let t={};for(let r of e.props){let[e,s]=Object.entries(r)[0];t[e]=s.value}this.propValues.value=t;let r={};for(let t of e.slots||[])r[t.name]=t.content||"";this.slotValues.value=r}_updatePropValue(e,t){this.propValues.value={...this.propValues.value,[e]:t}}_updateSlotValue(e,t){this.slotValues.value={...this.slotValues.value,[e]:t}}_logToConsole(e,t,r){let s={id:Date.now()+Math.random(),type:e,name:t,detail:void 0!==r?JSON.stringify(r,null,2):void 0,time:new Date().toLocaleTimeString()};this.consoleLogs.value=[...this.consoleLogs.value,s]}_attachEventListeners(e,t){for(let r of(this._cleanupEventListeners(),t.events||[])){let t=e=>{if(this._logToConsole("event",r,e.detail),e.detail&&"object"==typeof e.detail)for(let[t,r]of Object.entries(e.detail))t in this.propValues.value&&this._updatePropValue(t,r)};e.addEventListener(r,t),this._eventCleanups.push(()=>e.removeEventListener(r,t))}}_cleanupEventListeners(){for(let e of this._eventCleanups)e();this._eventCleanups=[]}setComponents(e){this.components.value=e}onInit(){this.components.value.length>0&&this._selectComponent(this.components.value[0])}onChange(e){e.components&&this.components.value.length>0&&!this.currentComponent.value&&this._selectComponent(this.components.value[0])}async _selectComponent(e){this.componentLoaded.value=!1,this._previewEl=null,this._previewTag=null,this._cleanupEventListeners(),this.currentComponent.value=e,this._initPropValues(e),"function"==typeof e.import?await e.import():e.import&&await e.import,this.componentLoaded.value=!0}get _componentSelector(){return this.components.value.length<=1?(0,s.qy)`<h1>${this.currentComponent.value?.name}</h1>`:(0,s.qy)`
      <select class="component-select" @change="${e=>{let t=this.components.value[e.target.selectedIndex];this._selectComponent(t)}}">
        ${this.components.value.map(e=>(0,s.qy)`
          <option ?selected="${e.tag===this.currentComponent.value?.tag}">${e.name}</option>
        `)}
      </select>
    `}get _deviceContent(){if(!this.currentComponent.value||!this.componentLoaded.value)return(0,s.qy)`<span class="loading">Loading...</span>`;let e=this.currentComponent.value;this._previewEl&&this._previewTag===e.tag||(this._previewEl=document.createElement(e.tag),this._previewTag=e.tag,this._attachEventListeners(this._previewEl,e));let t=this._previewEl;for(let[e,r]of Object.entries(this.propValues.value))"boolean"==typeof r?r?t.setAttribute(e,""):t.removeAttribute(e):Array.isArray(r)||null!==r&&"object"==typeof r?t[e]=r:t.setAttribute(e,r);for(let[e,r]of(t.innerHTML="",Object.entries(this.slotValues.value))){if(!r)continue;let s=document.createElement("span");s.innerHTML=r,"default"!==e&&s.setAttribute("slot",e),t.appendChild(s)}return(0,s.qy)`${t}`}get _getDetailConsole(){let e=this.consoleLogs.value;return(0,s.qy)`
      <div class="console-panel">
        <div class="console-toolbar">
          <button class="console-clear" @click="${()=>{this.consoleLogs.value=[]}}">Clear</button>
        </div>
        <div class="console-logs">
          ${0===e.length?(0,s.qy)`<span class="console-empty">No events logged yet. Interact with the component to see events here.</span>`:""}
          ${e.map(e=>(0,s.qy)`
            <div class="console-entry">
              <span class="console-time">${e.time}</span>
              <span class="console-type console-type--${e.type}">${e.type}</span>
              <span class="console-name">${e.name}</span>
              ${e.detail?(0,s.qy)`<pre class="console-detail">${e.detail}</pre>`:""}
            </div>
          `)}
        </div>
      </div>
    `}get _buttonsResolution(){return(0,s.qy)`
      <button class="${"mobile"===this.resolutions.value?"active":""}" @click="${()=>this.resolutions.value="mobile"}">Mobile</button>
      <button class="${"tablet"===this.resolutions.value?"active":""}" @click="${()=>this.resolutions.value="tablet"}">Tablet</button>
      <button class="${"fullscreen"===this.resolutions.value?"active":""}" @click="${()=>this.resolutions.value="fullscreen"}">FullScreen</button>
      <span class="separator"></span>
      <button class="${"light"===this.deviceTheme.value?"active":""}" @click="${()=>this.deviceTheme.value="light"}">☀️ Light</button>
      <button class="${"dark"===this.deviceTheme.value?"active":""}" @click="${()=>this.deviceTheme.value="dark"}">🌙 Dark</button>
    `}get _tabsDetail(){return(0,s.qy)`
      <div class="tabs">
        <button class="${"props"===this.currentTab.value?"active":""}" @click="${()=>this.currentTab.value="props"}">Props</button>
        <button class="${"slots"===this.currentTab.value?"active":""}" @click="${()=>this.currentTab.value="slots"}">Slots</button>
        <button class="${"events"===this.currentTab.value?"active":""}" @click="${()=>this.currentTab.value="events"}">Events</button>
        <button class="${"channels"===this.currentTab.value?"active":""}" @click="${()=>this.currentTab.value="channels"}">Channels</button>
        <button class="${"console"===this.currentTab.value?"active":""}" @click="${()=>this.currentTab.value="console"}">Console</button>
        <button class="${"example"===this.currentTab.value?"active":""}" @click="${()=>this.currentTab.value="example"}">Example</button>
        <button class="${"doc"===this.currentTab.value?"active":""} doc-button" @click="${()=>this.currentTab.value="doc"}">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 2H14L19 7V20C19 21.1046 18.1046 22 17 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2Z"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linejoin="round"
            />
            <path
              d="M14 2V7H19"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linejoin="round"
            />
          </svg> <span>Create Doc</span>
        </button>
      </div>
    `}_renderPropInput(e,t){let r=this.propValues.value[e];return t.type===Boolean?(0,s.qy)`<input type="checkbox" ?checked="${r}" @change="${t=>this._updatePropValue(e,t.target.checked)}" />`:t.type===Number?(0,s.qy)`<input type="number" .value="${r}" @input="${t=>this._updatePropValue(e,Number(t.target.value))}" />`:t.type===Array||t.type===Object?(0,s.qy)`<textarea class="json-input" rows="4" .value="${JSON.stringify(r,null,2)}" @change="${t=>{try{this._updatePropValue(e,JSON.parse(t.target.value))}catch{t.target.classList.add("json-error")}}}" @input="${e=>e.target.classList.remove("json-error")}"></textarea>`:(0,s.qy)`<input type="text" .value="${r??""}" @input="${t=>this._updatePropValue(e,t.target.value)}" />`}get _getDetailProps(){return(0,s.qy)`
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          ${this.currentComponent.value.props.map(e=>{let[t,r]=Object.entries(e)[0];return(0,s.qy)`
              <tr>
                <td class="row">${t}</td>
                <td class="row">${r.type.name}</td>
                <td class="row">${this._renderPropInput(t,r)}</td>
              </tr>
            `})}
        </tbody>
      </table>
    `}get _getDetailEvents(){return(0,s.qy)`
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          ${this.currentComponent.value.events.map(e=>(0,s.qy)`
            <tr>
              <th scope="row">${e}</th>
            </tr>
          `)}
        </tbody>
      </table>
    `}get _getDetailChannels(){return(0,s.qy)`
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          ${this.currentComponent.value.channels.map(e=>(0,s.qy)`
            <tr>
              <th scope="row">${e}</th>
            </tr>
          `)}
        </tbody>
      </table>
    `}get _getDetailSlots(){let e=this.currentComponent.value.slots||[];return e.length?(0,s.qy)`
      <table>
        <thead>
          <tr>
            <th scope="col">Slot</th>
            <th scope="col">Content</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(e=>(0,s.qy)`
            <tr>
              <td class="row">${e.name}</td>
              <td class="row">
                <textarea
                  class="slot-input"
                  .value="${this.slotValues.value[e.name]||""}"
                  @input="${t=>this._updateSlotValue(e.name,t.target.value)}"
                  rows="3"
                ></textarea>
              </td>
            </tr>
          `)}
        </tbody>
      </table>
    `:(0,s.qy)`<p>No slots defined</p>`}get _getDetailExample(){let e=this.currentComponent.value,t=[...e.props.map(e=>{let[t,r]=Object.entries(e)[0];return`  ${t}="${r.value}"`}),...(e.events||[]).map(e=>`  @${e}="\${handler}"`)],r=(e.slots||[]).map(e=>"default"===e.name?`  ${e.content}`:`  <span slot="${e.name}">${e.content}</span>`).join("\n"),i=`<${e.tag}`;return t.length&&(i+=`
${t.join("\n")}
`),i+=">",r&&(i+=`
${r}
`),i+=`</${e.tag}>`,(0,s.qy)`
      <pre class="code-example"><code>${i}</code></pre>
    `}get _getDetailDoc(){return this.currentComponent.value?(0,s.qy)`
      ${"props"===this.currentTab.value?this._getDetailProps:""}
      ${"slots"===this.currentTab.value?this._getDetailSlots:""}
      ${"events"===this.currentTab.value?this._getDetailEvents:""}
      ${"channels"===this.currentTab.value?this._getDetailChannels:""}
      ${"console"===this.currentTab.value?this._getDetailConsole:""}
      ${"example"===this.currentTab.value?this._getDetailExample:""}
      ${"doc"===this.currentTab.value?this._getDetailReadme:""}
    `:""}_generateReadme(){let e=this.currentComponent.value;if(!e)return"";let t=e.tag,r=e.name,s=e.description||"",i=`# ${r}

`;i+=`${s}

## Installation

\`\`\`bash
okalit add ${t} --registry github.com/your-org/your-catalog
\`\`\`

Or manually copy to your project:

\`\`\`bash
# The component will be installed in src/catalogs/${t}/
\`\`\`

## Usage

\`\`\`js
import '@catalogs/${t}/${t}.js';
\`\`\`

`;let o=[...e.props.map(e=>{let[t,r]=Object.entries(e)[0];return`  ${t}="${r.value}"`}),...(e.events||[]).map(e=>`  @${e}="\${handler}"`)],n=(e.slots||[]).map(e=>"default"===e.name?`  ${e.content}`:`  <span slot="${e.name}">${e.content}</span>`).join("\n");if(i+=`\`\`\`html
<${t}`,o.length&&(i+=`
${o.join("\n")}
`),i+=">",n&&(i+=`
${n}
`),i+=`</${t}>
\`\`\`

`,e.props.length){for(let t of(i+=`## Props

| Name | Type | Default |
|------|------|---------|
`,e.props)){let[e,r]=Object.entries(t)[0];i+=`| \`${e}\` | \`${r.type.name}\` | \`${JSON.stringify(r.value)}\` |
`}i+=`
`}let l=e.slots||[];if(l.length){for(let e of(i+=`## Slots

| Name | Description |
|------|-------------|
`,l))i+=`| \`${e.name}\` | ${e.description||"-"} |
`;i+=`
`}if(e.events?.length){for(let t of(i+=`## Events

| Name |
|------|
`,e.events))i+=`| \`${t}\` |
`;i+=`
`}if(e.channels?.length){for(let t of(i+=`## Channels

This component subscribes to the following channels:

`,e.channels))i+=`- \`${t}\`
`;i+=`
> Make sure these channels are defined in your application.

`}return i+`## License

MIT
`}_downloadReadme(){let e=new Blob([this._generateReadme()],{type:"text/markdown"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download="README.md",r.click(),URL.revokeObjectURL(t)}get _getDetailReadme(){let e=this._generateReadme();return(0,s.qy)`
      <div class="doc-section">
        <div class="doc-actions">
          <button class="doc-btn" @click="${()=>this._downloadReadme()}">⬇ Download README.md</button>
          <button class="doc-btn" @click="${()=>this._copyReadme()}">📋 Copy</button>
        </div>
        <pre class="code-example doc-preview"><code>${e}</code></pre>
      </div>
    `}_copyReadme(){let e=this._generateReadme();navigator.clipboard.writeText(e),this._logToConsole("info","README.md copied!")}get _details(){return(0,s.qy)`
      <section class="details">
        ${this.currentComponent.value?(0,s.qy)`
          <div>
            ${this._componentSelector}
            <p>${this.currentComponent.value.description}</p>
          </div>
        `:(0,s.qy)`<p>No components found</p>`}
        
        <div>
          ${this._tabsDetail}
          ${this._getDetailDoc}
        </div>
      </section>
    `}render(){return(0,s.qy)`
  <main class="demo-components-okalit">
    <section class="content">
      <div class="resolution">
        ${this._buttonsResolution}
      </div>
      <div class="device ${this.resolutions.value} ${"dark"===this.deviceTheme.value?"device-dark":""}">
        ${this._deviceContent}
      </div>
    </section>

    ${"fullscreen"!==this.resolutions.value?this._details:""}
  </main>
`}};(0,s.eV)({...i,styles:i.styles})(o,{addInitializer(e){e.call(o)}})},84(e,t,r){r.d(t,{Rt:()=>i,mY:()=>n});let{I:s}=r(3324).ge,i=e=>void 0===e.strings,o={},n=(e,t=o)=>e._$AH=t},1784(e,t,r){r.d(t,{OA:()=>s,WL:()=>o,u$:()=>i});let s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},3324(e,t,r){r.d(t,{JW:()=>E,XX:()=>z,c0:()=>x,ge:()=>W,qy:()=>A,s6:()=>k});let s=globalThis,i=e=>e,o=s.trustedTypes,n=o?o.createPolicy("lit-html",{createHTML:e=>e}):void 0,l="$lit$",a=`lit$${Math.random().toFixed(9).slice(2)}$`,c="?"+a,h=`<${c}>`,d=document,u=()=>d.createComment(""),p=e=>null===e||"object"!=typeof e&&"function"!=typeof e,m=Array.isArray,f=e=>m(e)||"function"==typeof e?.[Symbol.iterator],v="[ 	\n\f\r]",_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,b=/>/g,y=RegExp(`>|${v}(?:([^\\s"'>=/]+)(${v}*=${v}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$=/'/g,w=/"/g,C=/^(?:script|style|textarea|title)$/i,S=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),A=S(1),E=S(2),x=(S(3),Symbol.for("lit-noChange")),k=Symbol.for("lit-nothing"),T=new WeakMap,N=d.createTreeWalker(d,129);function O(e,t){if(!m(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==n?n.createHTML(t):t}let P=(e,t)=>{let r=e.length-1,s=[],i,o=2===t?"<svg>":3===t?"<math>":"",n=_;for(let t=0;t<r;t++){let r=e[t],c,d,u=-1,p=0;for(;p<r.length&&(n.lastIndex=p,null!==(d=n.exec(r)));)p=n.lastIndex,n===_?"!--"===d[1]?n=g:void 0!==d[1]?n=b:void 0!==d[2]?(C.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=y):void 0!==d[3]&&(n=y):n===y?">"===d[0]?(n=i??_,u=-1):void 0===d[1]?u=-2:(u=n.lastIndex-d[2].length,c=d[1],n=void 0===d[3]?y:'"'===d[3]?w:$):n===w||n===$?n=y:n===g||n===b?n=_:(n=y,i=void 0);let m=n===y&&e[t+1].startsWith("/>")?" ":"";o+=n===_?r+h:u>=0?(s.push(c),r.slice(0,u)+l+r.slice(u)+a+m):r+a+(-2===u?t:m)}return[O(e,o+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class R{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let i=0,n=0;const h=e.length-1,d=this.parts,[p,m]=P(e,t);if(this.el=R.createElement(p,r),N.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=N.nextNode())&&d.length<h;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(l)){const t=m[n++],r=s.getAttribute(e).split(a),o=/([.?@])?(.*)/.exec(t);d.push({type:1,index:i,name:o[2],strings:r,ctor:"."===o[1]?U:"?"===o[1]?D:"@"===o[1]?q:j}),s.removeAttribute(e)}else e.startsWith(a)&&(d.push({type:6,index:i}),s.removeAttribute(e));if(C.test(s.tagName)){const e=s.textContent.split(a),t=e.length-1;if(t>0){s.textContent=o?o.emptyScript:"";for(let r=0;r<t;r++)s.append(e[r],u()),N.nextNode(),d.push({type:2,index:++i});s.append(e[t],u())}}}else if(8===s.nodeType)if(s.data===c)d.push({type:2,index:i});else{let e=-1;for(;-1!==(e=s.data.indexOf(a,e+1));)d.push({type:7,index:i}),e+=a.length-1}i++}}static createElement(e,t){let r=d.createElement("template");return r.innerHTML=e,r}}function I(e,t,r=e,s){if(t===x)return t;let i=void 0!==s?r._$Co?.[s]:r._$Cl,o=p(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e))._$AT(e,r,s),void 0!==s?(r._$Co??=[])[s]=i:r._$Cl=i),void 0!==i&&(t=I(e,i._$AS(e,t.values),i,s)),t}class L{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,s=(e?.creationScope??d).importNode(t,!0);N.currentNode=s;let i=N.nextNode(),o=0,n=0,l=r[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new M(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new V(i,this,e)),this._$AV.push(t),l=r[++n]}o!==l?.index&&(i=N.nextNode(),o++)}return N.currentNode=d,s}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){p(e=I(this,e,t))?e===k||null==e||""===e?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==x&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):f(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&p(this._$AH)?this._$AA.nextSibling.data=e:this.T(d.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,s="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=R.createElement(O(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(t);else{let e=new L(s,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=T.get(e.strings);return void 0===t&&T.set(e.strings,t=new R(e)),t}k(e){m(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,s=0;for(let i of e)s===t.length?t.push(r=new M(this.O(u()),this.O(u()),this,this.options)):r=t[s],r._$AI(i),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=i(e).nextSibling;i(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=k}_$AI(e,t=this,r,s){let i=this.strings,o=!1;if(void 0===i)(o=!p(e=I(this,e,t,0))||e!==this._$AH&&e!==x)&&(this._$AH=e);else{let s,n,l=e;for(e=i[0],s=0;s<i.length-1;s++)(n=I(this,l[r+s],t,s))===x&&(n=this._$AH[s]),o||=!p(n)||n!==this._$AH[s],n===k?e=k:e!==k&&(e+=(n??"")+i[s+1]),this._$AH[s]=n}o&&!s&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class U extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}}class D extends j{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}}class q extends j{constructor(e,t,r,s,i){super(e,t,r,s,i),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??k)===x)return;let r=this._$AH,s=e===k&&r!==k||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==k&&(r===k||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class V{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}let W={M:l,P:a,A:c,C:1,L:P,R:L,D:f,V:I,I:M,H:j,N:D,U:q,B:U,F:V},H=s.litHtmlPolyfillSupport;H?.(R,M),(s.litHtmlVersions??=[]).push("3.3.3");let z=(e,t,r)=>{let s=r?.renderBefore??t,i=s._$litPart$;if(void 0===i){let e=r?.renderBefore??null;s._$litPart$=i=new M(t.insertBefore(u(),e),e,void 0,r??{})}return i._$AI(e),i}},9307(e,t,r){r.d(t,{WF:()=>A,JW:()=>C.JW,qy:()=>C.qy,s6:()=>C.s6});let s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class l{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&n.set(t,e))}return e}toString(){return this.cssText}}let a=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t,r="";for(let t of e.cssRules)r+=t.cssText;return new l("string"==typeof(t=r)?t:t+"",void 0,o)})(e):e,{is:c,defineProperty:h,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,f=globalThis,v=f.trustedTypes,_=v?v.emptyScript:"",g=f.reactiveElementPolyfillSupport,b={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},y=(e,t)=>!c(e,t),$={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(e,r,t);void 0!==s&&h(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){let{get:s,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){let o=s?.call(this);i?.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...u(e),...p(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(a(r));else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=s.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(void 0!==s&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:b).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,s=r._$Eh.get(e);if(void 0!==s&&this._$Em!==s){let e=r.getPropertyOptions(s),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=s;let o=i.fromAttribute(t,e.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(e,t,r,s=!1,i){if(void 0!==e){let o=this.constructor;if(!1===s&&(i=this[e]),!(((r??=o.getPropertyOptions(e)).hasChanged??y)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:i},o){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==i||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e){let{wrapped:e}=r,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,r,s)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w.elementProperties=new Map,w.finalized=new Map,g?.({ReactiveElement:w}),(f.reactiveElementVersions??=[]).push("2.1.2");var C=r(3324);let S=globalThis;class A extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,C.XX)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C.c0}}A._$litElement$=!0,A.finalized=!0,S.litElementHydrateSupport?.({LitElement:A});let E=S.litElementPolyfillSupport;E?.({LitElement:A}),(S.litElementVersions??=[]).push("4.2.2")}}]);