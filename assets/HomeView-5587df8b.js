import{d as G,r as W,o as ut,a as nt,b as N,c as B,t as q,u as L,e as ct,f as T,n as X,g as tt,p as lt,h as ft}from"./index-cf03f9ef.js";const dt=""+new URL("video-135cd512.mp4",import.meta.url).href;var ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},rt={exports:{}};(function(p,v){(function(d,m){p.exports=m()})(ht,function(){var d=1e3,m=6e4,y=36e5,M="millisecond",g="second",S="minute",O="hour",w="day",k="week",$="month",J="quarter",I="year",Y="date",Q="Invalid Date",it=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,st=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ot={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],t=r%100;return"["+r+(n[(t-20)%10]||n[t]||n[0])+"]"}},Z=function(r,n,t){var i=String(r);return!i||i.length>=n?r:""+Array(n+1-i.length).join(t)+r},at={s:Z,z:function(r){var n=-r.utcOffset(),t=Math.abs(n),i=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+Z(i,2,"0")+":"+Z(e,2,"0")},m:function r(n,t){if(n.date()<t.date())return-r(t,n);var i=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(i,$),o=t-e<0,s=n.clone().add(i+(o?-1:1),$);return+(-(i+(t-e)/(o?e-s:s-e))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:$,y:I,w:k,d:w,D:Y,h:O,m:S,s:g,ms:M,Q:J}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},V="en",H={};H[V]=ot;var E=function(r){return r instanceof z},U=function r(n,t,i){var e;if(!n)return V;if(typeof n=="string"){var o=n.toLowerCase();H[o]&&(e=o),t&&(H[o]=t,e=o);var s=n.split("-");if(!e&&s.length>1)return r(s[0])}else{var a=n.name;H[a]=n,e=a}return!i&&e&&(V=e),e||!i&&V},f=function(r,n){if(E(r))return r.clone();var t=typeof n=="object"?n:{};return t.date=r,t.args=arguments,new z(t)},u=at;u.l=U,u.i=E,u.w=function(r,n){return f(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var z=function(){function r(t){this.$L=U(t.locale,null,!0),this.parse(t)}var n=r.prototype;return n.parse=function(t){this.$d=function(i){var e=i.date,o=i.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var s=e.match(it);if(s){var a=s[2]-1||0,l=(s[7]||"0").substring(0,3);return o?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,l)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,l)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==Q},n.isSame=function(t,i){var e=f(t);return this.startOf(i)<=e&&e<=this.endOf(i)},n.isAfter=function(t,i){return f(t)<this.startOf(i)},n.isBefore=function(t,i){return this.endOf(i)<f(t)},n.$g=function(t,i,e){return u.u(t)?this[i]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,i){var e=this,o=!!u.u(i)||i,s=u.p(t),a=function(C,_){var b=u.w(e.$u?Date.UTC(e.$y,_,C):new Date(e.$y,_,C),e);return o?b:b.endOf(w)},l=function(C,_){return u.w(e.toDate()[C].apply(e.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(_)),e)},c=this.$W,h=this.$M,x=this.$D,D="set"+(this.$u?"UTC":"");switch(s){case I:return o?a(1,0):a(31,11);case $:return o?a(1,h):a(0,h+1);case k:var j=this.$locale().weekStart||0,A=(c<j?c+7:c)-j;return a(o?x-A:x+(6-A),h);case w:case Y:return l(D+"Hours",0);case O:return l(D+"Minutes",1);case S:return l(D+"Seconds",2);case g:return l(D+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,i){var e,o=u.p(t),s="set"+(this.$u?"UTC":""),a=(e={},e[w]=s+"Date",e[Y]=s+"Date",e[$]=s+"Month",e[I]=s+"FullYear",e[O]=s+"Hours",e[S]=s+"Minutes",e[g]=s+"Seconds",e[M]=s+"Milliseconds",e)[o],l=o===w?this.$D+(i-this.$W):i;if(o===$||o===I){var c=this.clone().set(Y,1);c.$d[a](l),c.init(),this.$d=c.set(Y,Math.min(this.$D,c.daysInMonth())).$d}else a&&this.$d[a](l);return this.init(),this},n.set=function(t,i){return this.clone().$set(t,i)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,i){var e,o=this;t=Number(t);var s=u.p(i),a=function(h){var x=f(o);return u.w(x.date(x.date()+Math.round(h*t)),o)};if(s===$)return this.set($,this.$M+t);if(s===I)return this.set(I,this.$y+t);if(s===w)return a(1);if(s===k)return a(7);var l=(e={},e[S]=m,e[O]=y,e[g]=d,e)[s]||1,c=this.$d.getTime()+t*l;return u.w(c,this)},n.subtract=function(t,i){return this.add(-1*t,i)},n.format=function(t){var i=this,e=this.$locale();if(!this.isValid())return e.invalidDate||Q;var o=t||"YYYY-MM-DDTHH:mm:ssZ",s=u.z(this),a=this.$H,l=this.$m,c=this.$M,h=e.weekdays,x=e.months,D=function(_,b,R,F){return _&&(_[b]||_(i,o))||R[b].slice(0,F)},j=function(_){return u.s(a%12||12,_,"0")},A=e.meridiem||function(_,b,R){var F=_<12?"AM":"PM";return R?F.toLowerCase():F},C={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:u.s(c+1,2,"0"),MMM:D(e.monthsShort,c,x,3),MMMM:D(x,c),D:this.$D,DD:u.s(this.$D,2,"0"),d:String(this.$W),dd:D(e.weekdaysMin,this.$W,h,2),ddd:D(e.weekdaysShort,this.$W,h,3),dddd:h[this.$W],H:String(a),HH:u.s(a,2,"0"),h:j(1),hh:j(2),a:A(a,l,!0),A:A(a,l,!1),m:String(l),mm:u.s(l,2,"0"),s:String(this.$s),ss:u.s(this.$s,2,"0"),SSS:u.s(this.$ms,3,"0"),Z:s};return o.replace(st,function(_,b){return b||C[_]||s.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,i,e){var o,s=u.p(i),a=f(t),l=(a.utcOffset()-this.utcOffset())*m,c=this-a,h=u.m(this,a);return h=(o={},o[I]=h/12,o[$]=h,o[J]=h/3,o[k]=(c-l)/6048e5,o[w]=(c-l)/864e5,o[O]=c/y,o[S]=c/m,o[g]=c/d,o)[s]||c,e?h:u.a(h)},n.daysInMonth=function(){return this.endOf($).$D},n.$locale=function(){return H[this.$L]},n.locale=function(t,i){if(!t)return this.$L;var e=this.clone(),o=U(t,i,!0);return o&&(e.$L=o),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),K=z.prototype;return f.prototype=K,[["$ms",M],["$s",g],["$m",S],["$H",O],["$W",w],["$M",$],["$y",I],["$D",Y]].forEach(function(r){K[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),f.extend=function(r,n){return r.$i||(r(n,z,f),r.$i=!0),f},f.locale=U,f.isDayjs=E,f.unix=function(r){return f(1e3*r)},f.en=H[V],f.Ls=H,f.p={},f})})(rt);const et=rt.exports,vt={class:"time m-20 t-center"},_t=G({__name:"Index",setup(p){let v=W(et(new Date).format("hh:mm:ss")),d=W(0);return ut(()=>{console.log("2.组件挂载页面之前执行----onBeforeMount")}),nt(()=>{d.value=window.setInterval(()=>{v.value=et(new Date).format("hh:mm:ss")},1e3)}),(m,y)=>(N(),B("div",vt,q(L(v)),1))}});const P=(p,v)=>{const d=p.__vccOpts||p;for(const[m,y]of v)d[m]=y;return d},mt=P(_t,[["__scopeId","data-v-429e2df5"]]),$t={class:"t-center"},pt={class:"outer"},yt=G({__name:"Index",setup(p){let v=W(1500),d=W(60*5),m=W(0),y=W(0),M=ct({min:0,sec:0,nowTime:60*25}),g=!0;function S(){v.value-=1,M.min=Math.floor(+v.value/60),M.sec=Math.floor(+v.value%60),console.log(v.value)}function O(){d.value-=1,M.min=Math.floor(+d.value/60),M.sec=Math.floor(+d.value%60),console.log(d.value)}function w(){y.value&&clearInterval(y.value),g=!0,v.value=60*25,m.value=window.setInterval(()=>{v.value<=0&&clearInterval(m.value),S()},1e3)}function k(){m.value&&clearInterval(m.value),g=!1,d.value=60*5,y.value=window.setInterval(()=>{d.value<=0&&clearInterval(y.value),O()},1e3)}return nt(()=>{}),($,J)=>(N(),B("div",$t,[T("div",null,[T("button",{onClick:w},"开始"),T("button",{onClick:k},"休息")]),T("div",null,q(L(M).min)+" : "+q(L(M).sec),1),T("div",null,[T("div",pt,[L(g)?(N(),B("div",{key:0,class:"inner",style:X({width:L(v)/(60*25)*100+"%"})},null,4)):(N(),B("div",{key:1,class:"inner-rest",style:X({width:L(d)/(60*5)*100+"%"})},null,4))])])]))}});const Mt=P(yt,[["__scopeId","data-v-f29d9f27"]]),gt=p=>(lt("data-v-1e6d1ec9"),p=p(),ft(),p),wt=gt(()=>T("video",{autoplay:"",muted:"",loop:""},[T("source",{src:dt,type:"video/mp4"})],-1)),Dt=G({__name:"HomeView",setup(p){return(v,d)=>(N(),B("main",null,[wt,tt(mt),tt(Mt)]))}});const Ot=P(Dt,[["__scopeId","data-v-1e6d1ec9"]]);export{Ot as default};
