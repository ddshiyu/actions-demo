import{d as G,r as z,o as rt,a as it,b as P,c as Q,t as st,u as ot,e as at,p as ut,f as ct,g as E}from"./index-b3338778.js";const ft=""+new URL("video-135cd512.mp4",import.meta.url).href;var ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R={exports:{}};(function(m,S){(function(_,v){m.exports=v()})(ht,function(){var _=1e3,v=6e4,I=36e5,A="millisecond",O="second",x="minute",b="hour",y="day",C="week",$="month",F="quarter",M="year",H="date",J="Invalid Date",X=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,tt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,et={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],t=r%100;return"["+r+(n[(t-20)%10]||n[t]||n[0])+"]"}},N=function(r,n,t){var i=String(r);return!i||i.length>=n?r:""+Array(n+1-i.length).join(t)+r},nt={s:N,z:function(r){var n=-r.utcOffset(),t=Math.abs(n),i=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+N(i,2,"0")+":"+N(e,2,"0")},m:function r(n,t){if(n.date()<t.date())return-r(t,n);var i=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(i,$),o=t-e<0,s=n.clone().add(i+(o?-1:1),$);return+(-(i+(t-e)/(o?e-s:s-e))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:$,y:M,w:C,d:y,D:H,h:b,m:x,s:O,ms:A,Q:F}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},Y="en",D={};D[Y]=et;var B=function(r){return r instanceof V},W=function r(n,t,i){var e;if(!n)return Y;if(typeof n=="string"){var o=n.toLowerCase();D[o]&&(e=o),t&&(D[o]=t,e=o);var s=n.split("-");if(!e&&s.length>1)return r(s[0])}else{var a=n.name;D[a]=n,e=a}return!i&&e&&(Y=e),e||!i&&Y},h=function(r,n){if(B(r))return r.clone();var t=typeof n=="object"?n:{};return t.date=r,t.args=arguments,new V(t)},u=nt;u.l=W,u.i=B,u.w=function(r,n){return h(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var V=function(){function r(t){this.$L=W(t.locale,null,!0),this.parse(t)}var n=r.prototype;return n.parse=function(t){this.$d=function(i){var e=i.date,o=i.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var s=e.match(X);if(s){var a=s[2]-1||0,f=(s[7]||"0").substring(0,3);return o?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,f)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,f)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==J},n.isSame=function(t,i){var e=h(t);return this.startOf(i)<=e&&e<=this.endOf(i)},n.isAfter=function(t,i){return h(t)<this.startOf(i)},n.isBefore=function(t,i){return this.endOf(i)<h(t)},n.$g=function(t,i,e){return u.u(t)?this[i]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,i){var e=this,o=!!u.u(i)||i,s=u.p(t),a=function(T,l){var w=u.w(e.$u?Date.UTC(e.$y,l,T):new Date(e.$y,l,T),e);return o?w:w.endOf(y)},f=function(T,l){return u.w(e.toDate()[T].apply(e.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(l)),e)},c=this.$W,d=this.$M,g=this.$D,p="set"+(this.$u?"UTC":"");switch(s){case M:return o?a(1,0):a(31,11);case $:return o?a(1,d):a(0,d+1);case C:var L=this.$locale().weekStart||0,k=(c<L?c+7:c)-L;return a(o?g-k:g+(6-k),d);case y:case H:return f(p+"Hours",0);case b:return f(p+"Minutes",1);case x:return f(p+"Seconds",2);case O:return f(p+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,i){var e,o=u.p(t),s="set"+(this.$u?"UTC":""),a=(e={},e[y]=s+"Date",e[H]=s+"Date",e[$]=s+"Month",e[M]=s+"FullYear",e[b]=s+"Hours",e[x]=s+"Minutes",e[O]=s+"Seconds",e[A]=s+"Milliseconds",e)[o],f=o===y?this.$D+(i-this.$W):i;if(o===$||o===M){var c=this.clone().set(H,1);c.$d[a](f),c.init(),this.$d=c.set(H,Math.min(this.$D,c.daysInMonth())).$d}else a&&this.$d[a](f);return this.init(),this},n.set=function(t,i){return this.clone().$set(t,i)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,i){var e,o=this;t=Number(t);var s=u.p(i),a=function(d){var g=h(o);return u.w(g.date(g.date()+Math.round(d*t)),o)};if(s===$)return this.set($,this.$M+t);if(s===M)return this.set(M,this.$y+t);if(s===y)return a(1);if(s===C)return a(7);var f=(e={},e[x]=v,e[b]=I,e[O]=_,e)[s]||1,c=this.$d.getTime()+t*f;return u.w(c,this)},n.subtract=function(t,i){return this.add(-1*t,i)},n.format=function(t){var i=this,e=this.$locale();if(!this.isValid())return e.invalidDate||J;var o=t||"YYYY-MM-DDTHH:mm:ssZ",s=u.z(this),a=this.$H,f=this.$m,c=this.$M,d=e.weekdays,g=e.months,p=function(l,w,U,j){return l&&(l[w]||l(i,o))||U[w].slice(0,j)},L=function(l){return u.s(a%12||12,l,"0")},k=e.meridiem||function(l,w,U){var j=l<12?"AM":"PM";return U?j.toLowerCase():j},T={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:u.s(c+1,2,"0"),MMM:p(e.monthsShort,c,g,3),MMMM:p(g,c),D:this.$D,DD:u.s(this.$D,2,"0"),d:String(this.$W),dd:p(e.weekdaysMin,this.$W,d,2),ddd:p(e.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(a),HH:u.s(a,2,"0"),h:L(1),hh:L(2),a:k(a,f,!0),A:k(a,f,!1),m:String(f),mm:u.s(f,2,"0"),s:String(this.$s),ss:u.s(this.$s,2,"0"),SSS:u.s(this.$ms,3,"0"),Z:s};return o.replace(tt,function(l,w){return w||T[l]||s.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,i,e){var o,s=u.p(i),a=h(t),f=(a.utcOffset()-this.utcOffset())*v,c=this-a,d=u.m(this,a);return d=(o={},o[M]=d/12,o[$]=d,o[F]=d/3,o[C]=(c-f)/6048e5,o[y]=(c-f)/864e5,o[b]=c/I,o[x]=c/v,o[O]=c/_,o)[s]||c,e?d:u.a(d)},n.daysInMonth=function(){return this.endOf($).$D},n.$locale=function(){return D[this.$L]},n.locale=function(t,i){if(!t)return this.$L;var e=this.clone(),o=W(t,i,!0);return o&&(e.$L=o),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),Z=V.prototype;return h.prototype=Z,[["$ms",A],["$s",O],["$m",x],["$H",b],["$W",y],["$M",$],["$y",M],["$D",H]].forEach(function(r){Z[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),h.extend=function(r,n){return r.$i||(r(n,V,h),r.$i=!0),h},h.locale=W,h.isDayjs=B,h.unix=function(r){return h(1e3*r)},h.en=D[Y],h.Ls=D,h.p={},h})})(R);const q=R.exports,dt={class:"time m-20"},lt=G({__name:"Index",setup(m){let S=z(q(new Date).format("hh:mm:ss")),_=z(0);return rt(()=>{console.log("2.组件挂载页面之前执行----onBeforeMount")}),it(()=>{_.value=window.setInterval(()=>{S.value=q(new Date).format("hh:mm:ss")},1e3)}),(v,I)=>(P(),Q("div",dt,st(ot(S)),1))}});const K=(m,S)=>{const _=m.__vccOpts||m;for(const[v,I]of S)_[v]=I;return _},$t=K(lt,[["__scopeId","data-v-931662e4"]]),mt=m=>(ut("data-v-fac5191c"),m=m(),ct(),m),_t={class:"d-flex j-center"},pt=mt(()=>E("video",{autoplay:"",muted:"",loop:""},[E("source",{src:ft,type:"video/mp4"})],-1)),vt=G({__name:"HomeView",setup(m){return(S,_)=>(P(),Q("main",_t,[pt,at($t)]))}});const Mt=K(vt,[["__scopeId","data-v-fac5191c"]]);export{Mt as default};
