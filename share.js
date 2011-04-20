/*
 ShareJS v0.2
 http://sharejs.org

 Copyright 2011 Joseph Gentle

 BSD licensed:
 https://github.com/josephg/ShareJS/raw/master/LICENSE
*/
function f(i){throw i;}var k=void 0,r=null;
(function(){function i(b,a){return function(){return b.apply(a,arguments)}}var n,p,q,x,l,z,o,A,s,m,B,C,D,t,h,y,E,u,v,w,F=Array.prototype.slice;m={};q=function(){function b(){}b.prototype.b=function(a,c){var b;this.e||(this.e={});(b=this.e)[a]||(b[a]=[]);this.e[a].push(c);return this};b.prototype.o=function(a,c){var b,e;this.e||(this.e={});b=(e=this.e[a])!=r?e.indexOf(c):k;b!=r&&b>=0&&this.e[a].splice(b,1);return this};b.prototype.j=function(){var a,c,b,e,g;c=arguments[0];a=2<=arguments.length?F.call(arguments,
1):[];if(!((b=this.e)!=r&&b[c]))return this;g=this.e[c];b=0;for(e=g.length;b<e;b++)c=g[b],c.apply(this,a);return this};return b}();q.H=function(b){b=b.prototype||b;b.b=b.on=q.prototype.b;b.o=b.removeListener=q.prototype.o;b.j=q.prototype.j};if(typeof module!="undefined"&&module!==r&&module.K)module.K=q;h={name:"text",T:function(){return""}};t=function(b,a,c){return b.slice(0,a)+c+b.slice(a)};z=function(b){typeof b.p!=="number"&&f(Error("component missing position field"));typeof b.i==="string"^typeof b.d===
"string"||f(Error("component needs an i or d field"));b.p>=0||f(Error("position cannot be negative"))};o=function(b){var a,c,d;c=0;for(d=b.length;c<d;c++)a=b[c],z(a)};h.apply=function(b,a){var c,d,e,g;o(a);e=0;for(g=a.length;e<g;e++)c=a[e],c.i!=r?b=t(b,c.p,c.i):(d=b.slice(c.p,c.p+c.d.length),c.d!==d&&f(Error("Delete component '"+c.d+"' does not match deleted text '"+d+"'")),b=b.slice(0,c.p)+b.slice(c.p+c.d.length));return b};h.Q=l=function(b,a){var c,d,e;if(!(a.i===""||a.d===""))return b.length===
0?b.push(a):(c=b[b.length-1],c.i!=r&&a.i!=r&&c.p<=(d=a.p)&&d<=c.p+c.i.length?b[b.length-1]={D:t(c.i,a.p-c.p,a.i),g:c.p}:c.d!=r&&a.d!=r&&a.p<=(e=c.p)&&e<=a.p+a.d.length?b[b.length-1]={m:t(a.d,c.p-a.p,c.d),g:a.p}:b.push(a))};h.C=A=function(b,a){var c,d,e,g;o(b);o(a);d=b.slice();e=0;for(g=a.length;e<g;e++)c=a[e],l(d,c);o(d);return d};h.S=function(b){return A([],b)};h.normalize=function(b){var a,c,d,e;c=[];if(b.i!=r||b.p!=r)b=[b];d=0;for(e=b.length;d<e;d++)a=b[d],a.p!=r||(a.p=0),l(c,a);return c};u=function(b,
a,c){return a.i!=r?a.p<b||a.p===b&&c?b+a.i.length:b:b<=a.p?b:b<=a.p+a.d.length?a.p:b-a.d.length};h.Y=function(b,a,c){var d,e,g;e=0;for(g=a.length;e<g;e++)d=a[e],b=u(b,d,c);return b};y=function(b,a,c,d){var e,g;o([a]);o([c]);if(a.i!=r)l(b,{D:a.i,g:u(a.p,c,d==="server")});else if(c.i!=r)d=a.d,a.p<c.p&&(l(b,{m:d.slice(0,c.p-a.p),g:a.p}),d=d.slice(c.p-a.p)),d!==""&&l(b,{m:d,g:a.p+c.i.length});else if(a.p>=c.p+c.d.length)l(b,{m:a.d,g:a.p-c.d.length});else if(a.p+a.d.length<=c.p)l(b,a);else if(d={m:"",
g:a.p},a.p<c.p&&(d.d=a.d.slice(0,c.p-a.p)),a.p+a.d.length>c.p+c.d.length&&(d.d+=a.d.slice(c.p+c.d.length-a.p)),g=Math.max(a.p,c.p),e=Math.min(a.p+a.d.length,c.p+c.d.length),a=a.d.slice(g-a.p,e-a.p),e=c.d.slice(g-c.p,e-c.p),a!==e&&f(Error("Delete ops delete different text in the same region of the document")),d.d!=="")d.p=u(d.p,c),l(b,d)};E=function(b,a,c,d){y(c,b,a,"server");y(d,a,b,"client")};h.O=v=function(b,a){var c,d,e,g,j,i,h,m,n;o(b);o(a);e=[];i=0;for(m=a.length;i<m;i++){d=a[i];g=[];for(c=0;c<
b.length;)if(j=[],E(b[c],d,g,j),c++,j.length===1)d=j[0];else{if(j.length===0){h=b.slice(c);d=0;for(j=h.length;d<j;d++)c=h[d],l(g,c)}else{d=v(b.slice(c),j);j=d[0];d=d[1];h=0;for(n=j.length;h<n;h++)c=j[h],l(g,c);j=0;for(h=d.length;j<h;j++)c=d[j],l(e,c)}d=r;break}d!=r&&l(e,d);b=g}return[b,e]};h.transform=function(b,a,c){c==="server"||c==="client"||f(Error("type must be 'server' or 'client'"));c==="server"?(b=v(b,a),b=b[0]):(b=v(a,b),b=b[1]);return b};C=function(b){return b.i!=r?{m:b.i,g:b.p}:{D:b.d,
g:b.p}};h.U=function(b){var a,c,d,e;d=b.slice().reverse();e=[];a=0;for(c=d.length;a<c;a++)b=d[a],e.push(C(b));return e};m.types||(m.types={});m.types.text=h;window.io||f(Error("Must load socket.io before this library"));D=window.io;x=function(){function b(a,c,b){this.z=i(this.z,this);this.l=new D.Socket(a,{port:c,X:b?b+"/socket.io":"socket.io"});this.l.on("connect",this.L);this.l.on("message",this.z);this.l.connect();this.k={};this.G=this.F=r}b.prototype.L=function(){};b.prototype.b=function(a,c,
b){var e;(e=this.k)[a]||(e[a]={});this.k[a][c]!=r&&f(Error("Callback already exists for "+a+", "+c));return this.k[a][c]=b};b.prototype.o=function(a,c){var b;return(b=this.k[a])!=r?delete b[c]:k};b.prototype.z=function(a){var c;a.doc!=r?this.F=a.doc:a.doc=this.F;c=i(function(c,b){var g,j;g=(j=this.k[a.doc])!=r?j[c]:k;if(g!=r)return b&&(this.k[a.doc][c]=r),g(a)},this);if(a.snapshot!==k)return c("snapshot",!0);else if(a.follow!=r)return a.follow?c("follow",!0):c("unfollow",!0);else if(a.v!==k)return a.op!=
r?c("op",!1):c("localop",!0)};b.prototype.send=function(a){a.doc===this.G?delete a.doc:this.G=a.doc;return this.l.send(a)};b.prototype.s=function(a,c,b){var e;e={doc:a,follow:!0};c!=r&&(e.v=c);this.send(e);return this.b(a,"follow",b)};b.prototype.get=function(a,c){this.send({doc:a,snapshot:r});return this.b(a,"snapshot",c)};b.prototype.submit=function(a,c,b,e){this.send({doc:a,v:b,op:c});return this.b(a,"localop",e)};b.prototype.B=function(a,c){this.send({doc:a,follow:!1});return this.b(a,"unfollow",
c)};b.prototype.r=function(){this.l.disconnect();return this.l=r};return b}();m.P=x;w||(w=m.types);p=function(){function b(a,c,b,e,g){this.a=a;this.name=c;this.version=b;this.type=e;this.n=i(this.n,this);this.q=i(this.q,this);this.type.C==r&&f(Error("Handling types without compose() defined is not currently implemented"));this.snapshot=g;this.c=r;this.t=[];this.f=r;this.A=[];this.I={};this.V=[];this.J=!1;this.s()}b.prototype.s=function(a){this.a.b(this.name,"op",this.n);return this.a.s(this.name,
this.version,i(function(c){c.v!==this.version&&f(Error("Expected version "+this.version+" but got "+c.v));if(a!=r)return a()},this))};b.prototype.B=function(a){this.a.o(this.name,"op",this.n);return this.a.B(this.name,a)};b.prototype.q=function(){if(this.c===r&&this.f!==r)return this.c=this.f,this.t=this.A,this.f=r,this.A=[],this.a.submit(this.name,this.c,this.version,i(function(a){var c,b,e,g;if(a.v===r){g=this.t;b=0;for(e=g.length;b<e;b++)c=g[b],c(r);this.c=r;f(Error(a.error))}a.v!==this.version&&
f(Error("Invalid version from server"));this.I[this.version]=this.c;this.version++;e=this.t;a=0;for(b=e.length;a<b;a++)c=e[a],c(this.c,r);this.c=r;return this.q()},this))};b.prototype.n=function(a){var c,b;if(!(a.v<this.version)){a.doc!==this.name&&f(Error("Expected docName "+this.name+" but got "+a.doc));a.v!==this.version&&f(Error("Expected version "+this.version+" but got "+a.v));a=a.op;this.I[this.version]=a;c=this.type.O||i(function(a,c){var b,d;d=this.type.transform(a,c,"server");b=this.type.transform(c,
a,"client");return[d,b]},this);if(this.c!==r)b=c(a,this.c),a=b[0],this.c=b[1];if(this.f!==r)c=c(a,this.f),a=c[0],this.f=c[1];this.snapshot=this.type.apply(this.snapshot,a);this.version++;this.j("remoteop",a);return this.j("change",a)}};b.prototype.N=function(a,c,b){var e;if(c==r)c=this.version;if(typeof c==="function")b=c,c=this.version;if(((e=this.type)!=r?e.normalize:k)!=r)a=this.type.normalize(a);for(;c<this.version;)(e=this.W[c])||f(Error("Op version too old")),a=this.type.transform(a,e,"client"),
c++;this.snapshot=this.type.apply(this.snapshot,a);this.f=this.f!==r?this.type.C(this.f,a):a;b&&this.A.push(b);this.j("change",a);return setTimeout(this.q,0)};b.prototype.close=function(a){return this.B(i(function(){a&&a();this.j("closed")},this))};return b}();q.H(p);p.prototype.submitOp=p.prototype.N;p.prototype.close=p.prototype.close;n=function(){function b(a,b,d){this.a=new x(a,b,d);this.h={};this.w=0}b.prototype.u=function(a,b,d,e){this.h[a]&&f(Error("Document "+a+" already followed"));b=new p(this.a,
a,b,d,e);this.h[a]=b;this.w++;b.b("closed",i(function(){delete this.h[a];return this.w--},this));return b};b.prototype.M=function(a,b){if(this.h[a]!=r)return this.h[a];return this.a.get(a,i(function(a){var e;return a.snapshot===r?b(r):(e=w[a.type],b(this.u(a.doc,a.v,e,a.snapshot)))},this))};b.prototype.open=function(a,b,d){var e;typeof b==="function"&&(d=b,b="text");d||(d=function(){});typeof b==="string"&&(b=w[b]);if(this.h[a]!=r)e=this.h[a],e.type===b?d(e):d(e,"Document already exists with type "+
e.type.name);else return this.a.get(a,i(function(g){return g.snapshot===r?this.a.submit(a,{type:b.name},0,i(function(g){return g.v!=r?(e=this.u(a,1,b,""),e.J=!0,d(e)):g.v===r&&g.error==="Type already set"?this.open(a,b,d):d(r,g.error)},this)):g.type===b.name?d(this.u(a,g.v,b,g.snapshot)):d(r,"Document already exists with type "+g.type)},this))};b.prototype.r=function(){if(this.a!=r)return this.j("disconnected"),this.a.r(),this.a=r};return b}();n.prototype.openExisting=n.prototype.M;n.prototype.open=
n.prototype.open;q.H(n);s={};B=function(b,a,c){var d;b!=r||(b=window.location.hostname);a!=r||(a=window.location.port);d=b;a!=r&&(d+=":"+a);s[d]||(b=new n(b,a,c),b.b("disconnected",function(){return delete s[d]}),s[d]=b);return s[d]};m.Connection=n;m.Document=p;m.open=function(b,a,c,d){var e;typeof c==="function"&&(d=c,c=r);c!=r||(c={});e=B(c.host,c.port,c.R);return e.open(b,a,function(a){a.b("closed",function(){return setTimeout(function(){if(e.w===0)return e.r()},0)});return d(a)})};window.sharejs=
m}).call(this);