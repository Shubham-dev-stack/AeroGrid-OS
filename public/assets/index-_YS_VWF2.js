(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();class Fr{constructor(e,t){this.app=e,this.name=t}ready(){return!0}}const xg=["ticker:before-update","ticker:update","ticker:before-render","ticker:render"],Q_={autoplay:!0},zf=.001,ev=.1;class tv extends Fr{current=performance.now()*zf;payload={et:0,dt:0};playing=!1;rafId=0;options;events=xg;constructor(e,t={}){super(e,"ticker"),this.options={...Q_,...t}}initialize(){this.options.autoplay&&this.play()}play(){this.playing||(this.playing=!0,this.tick())}pause(){this.playing&&(cancelAnimationFrame(this.rafId),this.playing=!1)}tick=()=>{this.rafId=window.requestAnimationFrame(this.tick);const e=performance.now()*zf,t=Math.min(e-this.current,ev);this.payload.dt=t,this.payload.et+=t,this.current=e,this.emitEvents()};emitEvents(){this.events.forEach(e=>this.app.emit(e,this.payload))}detach(){this.pause()}}function nv(r,e){return[`background: linear-gradient(66.77deg, ${r} 0%, ${e} 100%)`,"color: white","padding-inline: 4px","border-radius: 2px","font-family: monospace","font-weight: 500"].join(";")}function iv(r,e="#1c4caa",t="#3498db"){const n=nv(e,t);return Object.fromEntries(Object.keys(console).map(i=>[i,(...s)=>{const o=typeof s[s.length-1]=="string"?s.pop():r,a=console[i];a(`%c${o}`,n,...s)}]))}const Tr=iv("App");let gs=new URLSearchParams(window.location.search);const il={getBool(r){return gs.get(r)==="true"||gs.get(r)==="1"},getString(r){return gs.get(r)},get(r){return gs.get(r)},getNumber(r){const e=gs.get(r);return e!=null?Number.parseFloat(e):null},has(r){return gs.get(r)!==null},refresh(){gs=new URLSearchParams(window.location.search)}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="178",rv=0,Vf=1,sv=2,yg=1,ov=2,vr=3,lr=0,Qn=1,er=2,rs=0,No=1,ji=2,Gf=3,Hf=4,av=5,Os=100,lv=101,cv=102,uv=103,hv=104,dv=200,fv=201,pv=202,mv=203,bh=204,Mh=205,gv=206,_v=207,vv=208,xv=209,yv=210,Sv=211,Tv=212,bv=213,Mv=214,Eh=0,wh=1,Ah=2,qo=3,Rh=4,Ch=5,Ph=6,Dh=7,Sg=0,Ev=1,wv=2,Dr=0,Av=1,Rv=2,Cv=3,Pv=4,Dv=5,Uv=6,Iv=7,Wf="attached",Lv="detached",Hd=300,Yo=301,$o=302,Bc=303,Uh=304,au=306,on=1e3,Zn=1001,wn=1002,yn=1003,Tg=1004,Ua=1005,mn=1006,yc=1007,wr=1008,Nv=1008,cr=1009,bg=1010,Mg=1011,rl=1012,Wd=1013,Ks=1014,qi=1015,Yi=1016,Xd=1017,qd=1018,sl=1020,Eg=35902,wg=1021,Ag=1022,Jn=1023,ol=1026,al=1027,Yd=1028,$d=1029,Rg=1030,jd=1031,Kd=1033,Sc=33776,Tc=33777,bc=33778,Mc=33779,Ih=35840,Lh=35841,Nh=35842,Oh=35843,Fh=36196,Bh=37492,kh=37496,zh=37808,Vh=37809,Gh=37810,Hh=37811,Wh=37812,Xh=37813,qh=37814,Yh=37815,$h=37816,jh=37817,Kh=37818,Zh=37819,Jh=37820,Qh=37821,Ec=36492,ed=36494,td=36495,Cg=36283,nd=36284,id=36285,rd=36286,ll=2300,cl=2301,vu=2302,Xf=2400,qf=2401,Yf=2402,Ov=2500,Fv=0,Pg=1,sd=2,Bv=3200,kv=3201,Dg=0,zv=1,Jr="",vn="srgb",Tn="srgb-linear",kc="linear",wt="srgb",io=7680,$f=519,Vv=512,Gv=513,Hv=514,Ug=515,Wv=516,Xv=517,qv=518,Yv=519,od=35044,jf="300 es",Ar=2e3,zc=2001;class aa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kf=1234567;const Va=Math.PI/180,jo=180/Math.PI;function $i(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function Zd(r,e){return(r%e+e)%e}function $v(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function jv(r,e,t){return r!==e?(t-r)/(e-r):0}function Ga(r,e,t){return(1-t)*r+t*e}function Kv(r,e,t,n){return Ga(r,e,1-Math.exp(-t*n))}function Zv(r,e=1){return e-Math.abs(Zd(r,e*2)-e)}function Jv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Qv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ex(r,e){return r+Math.floor(Math.random()*(e-r+1))}function tx(r,e){return r+Math.random()*(e-r)}function nx(r){return r*(.5-Math.random())}function ix(r){r!==void 0&&(Kf=r);let e=Kf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rx(r){return r*Va}function sx(r){return r*jo}function ox(r){return(r&r-1)===0&&r!==0}function ax(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function lx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cx(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ux={DEG2RAD:Va,RAD2DEG:jo,generateUUID:$i,clamp:ut,euclideanModulo:Zd,mapLinear:$v,inverseLerp:jv,lerp:Ga,damp:Kv,pingpong:Zv,smoothstep:Jv,smootherstep:Qv,randInt:ex,randFloat:tx,randFloatSpread:nx,seededRandom:ix,degToRad:rx,radToDeg:sx,isPowerOfTwo:ox,ceilPowerOfTwo:ax,floorPowerOfTwo:lx,setQuaternionFromProperEuler:cx,normalize:bt,denormalize:Wi};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class si{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,x=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const E=Math.sqrt(T),w=Math.atan2(E,p*x);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const v=a*x;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xu.copy(this).projectOnVector(e),this.sub(xu)}reflect(e){return this.sub(xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xu=new k,Zf=new si;class et{constructor(e,t,n,i,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],T=i[4],v=i[7],E=i[2],w=i[5],b=i[8];return s[0]=o*_+a*x+l*E,s[3]=o*m+a*T+l*w,s[6]=o*p+a*v+l*b,s[1]=c*_+u*x+h*E,s[4]=c*m+u*T+h*w,s[7]=c*p+u*v+h*b,s[2]=d*_+f*x+g*E,s[5]=d*m+f*T+g*w,s[8]=d*p+f*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yu.makeScale(e,t)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,t){return this.premultiply(yu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new et;function Ig(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ul(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hx(){const r=ul("canvas");return r.style.display="block",r}const Jf={};function Oo(r){r in Jf||(Jf[r]=!0,console.warn(r))}function dx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function fx(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function px(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mx(){const r={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(i.r=Ur(i.r),i.g=Ur(i.g),i.b=Ur(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(i.r=Fo(i.r),i.g=Fo(i.g),i.b=Fo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jr?kc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Oo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Oo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Tn]:{primaries:e,whitePoint:n,transfer:kc,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),r}const ft=mx();function Ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ro;class gx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ro===void 0&&(ro=ul("canvas")),ro.width=e.width,ro.height=e.height;const i=ro.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ro}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ul("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ur(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ur(t[n]/255)*255):t[n]=Ur(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _x=0;class Jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Su(i[o].image)):s.push(Su(i[o]))}else s=Su(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Su(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vx=0;const Tu=new k;class ln extends aa{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=Zn,i=Zn,s=mn,o=wr,a=Jn,l=cr,c=ln.DEFAULT_ANISOTROPY,u=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=$i(),this.name="",this.source=new Jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tu).x}get height(){return this.source.getSize(Tu).y}get depth(){return this.source.getSize(Tu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case on:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case wn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case on:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case wn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Hd;ln.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,v=(f+1)/2,E=(p+1)/2,w=(u+d)/4,b=(h+_)/4,R=(g+m)/4;return T>v&&T>E?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=w/n,s=b/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=R/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=b/s,i=R/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xx extends aa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new ln(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Jd(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends xx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lg extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yx extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ki):ki.fromBufferAttribute(s,o),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Al.copy(n.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Rl.subVectors(this.max,ma),so.subVectors(e.a,ma),oo.subVectors(e.b,ma),ao.subVectors(e.c,ma),kr.subVectors(oo,so),zr.subVectors(ao,oo),_s.subVectors(so,ao);let t=[0,-kr.z,kr.y,0,-zr.z,zr.y,0,-_s.z,_s.y,kr.z,0,-kr.x,zr.z,0,-zr.x,_s.z,0,-_s.x,-kr.y,kr.x,0,-zr.y,zr.x,0,-_s.y,_s.x,0];return!bu(t,so,oo,ao,Rl)||(t=[1,0,0,0,1,0,0,0,1],!bu(t,so,oo,ao,Rl))?!1:(Cl.crossVectors(kr,zr),t=[Cl.x,Cl.y,Cl.z],bu(t,so,oo,ao,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dr=[new k,new k,new k,new k,new k,new k,new k,new k],ki=new k,Al=new Br,so=new k,oo=new k,ao=new k,kr=new k,zr=new k,_s=new k,ma=new k,Rl=new k,Cl=new k,vs=new k;function bu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){vs.fromArray(r,s);const a=i.x*Math.abs(vs.x)+i.y*Math.abs(vs.y)+i.z*Math.abs(vs.z),l=e.dot(vs),c=t.dot(vs),u=n.dot(vs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sx=new Br,ga=new k,Mu=new k;class hr{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ga,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Mu)),this.expandByPoint(ga.copy(e.center).sub(Mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fr=new k,Eu=new k,Pl=new k,Vr=new k,wu=new k,Dl=new k,Au=new k;class lu{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,t),fr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Eu.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(Eu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Pl),a=Vr.dot(this.direction),l=-Vr.dot(Pl),c=Vr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Eu).addScaledVector(Pl,d),f}intersectSphere(e,t){fr.subVectors(e.center,this.origin);const n=fr.dot(this.direction),i=fr.dot(fr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,t,n,i,s){wu.subVectors(t,e),Dl.subVectors(n,e),Au.crossVectors(wu,Dl);let o=this.direction.dot(Au),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vr.subVectors(this.origin,e);const l=a*this.direction.dot(Dl.crossVectors(Vr,Dl));if(l<0)return null;const c=a*this.direction.dot(wu.cross(Vr));if(c<0||l+c>o)return null;const u=-a*Vr.dot(Au);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/lo.setFromMatrixColumn(e,0).length(),s=1/lo.setFromMatrixColumn(e,1).length(),o=1/lo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tx,e,bx)}lookAt(e,t,n){const i=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Gr.crossVectors(n,ci),Gr.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Gr.crossVectors(n,ci)),Gr.normalize(),Ul.crossVectors(ci,Gr),i[0]=Gr.x,i[4]=Ul.x,i[8]=ci.x,i[1]=Gr.y,i[5]=Ul.y,i[9]=ci.y,i[2]=Gr.z,i[6]=Ul.z,i[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],T=n[7],v=n[11],E=n[15],w=i[0],b=i[4],R=i[8],S=i[12],y=i[1],C=i[5],U=i[9],O=i[13],W=i[2],X=i[6],V=i[10],q=i[14],G=i[3],ee=i[7],P=i[11],ae=i[15];return s[0]=o*w+a*y+l*W+c*G,s[4]=o*b+a*C+l*X+c*ee,s[8]=o*R+a*U+l*V+c*P,s[12]=o*S+a*O+l*q+c*ae,s[1]=u*w+h*y+d*W+f*G,s[5]=u*b+h*C+d*X+f*ee,s[9]=u*R+h*U+d*V+f*P,s[13]=u*S+h*O+d*q+f*ae,s[2]=g*w+_*y+m*W+p*G,s[6]=g*b+_*C+m*X+p*ee,s[10]=g*R+_*U+m*V+p*P,s[14]=g*S+_*O+m*q+p*ae,s[3]=x*w+T*y+v*W+E*G,s[7]=x*b+T*C+v*X+E*ee,s[11]=x*R+T*U+v*V+E*P,s[15]=x*S+T*O+v*q+E*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,T=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,E=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,w=t*x+n*T+i*v+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=x*b,e[1]=(_*d*s-h*m*s-_*i*f+n*m*f+h*i*p-n*d*p)*b,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*b,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*b,e[4]=T*b,e[5]=(u*m*s-g*d*s+g*i*f-t*m*f-u*i*p+t*d*p)*b,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*b,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*b,e[8]=v*b,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*p-t*h*p)*b,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*b,e[12]=E*b,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*b,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,g=s*h,_=o*u,m=o*h,p=a*h,x=l*c,T=l*u,v=l*h,E=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*E,i[1]=(f+v)*E,i[2]=(g-T)*E,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(g+T)*b,i[9]=(m-x)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=lo.set(i[0],i[1],i[2]).length();const o=lo.set(i[4],i[5],i[6]).length(),a=lo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],zi.copy(this);const c=1/s,u=1/o,h=1/a;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=u,zi.elements[5]*=u,zi.elements[6]*=u,zi.elements[8]*=h,zi.elements[9]*=h,zi.elements[10]*=h,t.setFromRotationMatrix(zi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Ar){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Ar)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===zc)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ar){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u;let g,_;if(a===Ar)g=(o+s)*h,_=-2*h;else if(a===zc)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const lo=new k,zi=new Ke,Tx=new k(0,0,0),bx=new k(1,1,1),Gr=new k,Ul=new k,ci=new k,tp=new Ke,np=new si;class In{constructor(e=0,t=0,n=0,i=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Ng{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mx=0;const ip=new k,co=new si,pr=new Ke,Il=new k,_a=new k,Ex=new k,wx=new si,rp=new k(1,0,0),sp=new k(0,1,0),op=new k(0,0,1),ap={type:"added"},Ax={type:"removed"},uo={type:"childadded",child:null},Ru={type:"childremoved",child:null};class At extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new k,t=new In,n=new si,i=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new et}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ng,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(rp,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(op,e)}translateOnAxis(e,t){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rp,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Il.copy(e):Il.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(_a,Il,this.up):pr.lookAt(Il,_a,this.up),this.quaternion.setFromRotationMatrix(pr),i&&(pr.extractRotation(i.matrixWorld),co.setFromRotationMatrix(pr),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ap),uo.child=e,this.dispatchEvent(uo),uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ax),Ru.child=e,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ap),uo.child=e,this.dispatchEvent(uo),uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,Ex),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,wx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}At.DEFAULT_UP=new k(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vi=new k,mr=new k,Cu=new k,gr=new k,ho=new k,fo=new k,lp=new k,Pu=new k,Du=new k,Uu=new k,Iu=new _t,Lu=new _t,Nu=new _t;class Xi{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vi.subVectors(e,t),i.cross(Vi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Vi.subVectors(i,t),mr.subVectors(n,t),Cu.subVectors(e,t);const o=Vi.dot(Vi),a=Vi.dot(mr),l=Vi.dot(Cu),c=mr.dot(mr),u=mr.dot(Cu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,gr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gr.x),l.addScaledVector(o,gr.y),l.addScaledVector(a,gr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Iu.setScalar(0),Lu.setScalar(0),Nu.setScalar(0),Iu.fromBufferAttribute(e,t),Lu.fromBufferAttribute(e,n),Nu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Iu,s.x),o.addScaledVector(Lu,s.y),o.addScaledVector(Nu,s.z),o}static isFrontFacing(e,t,n,i){return Vi.subVectors(n,t),mr.subVectors(e,t),Vi.cross(mr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Vi.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Xi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ho.subVectors(i,n),fo.subVectors(s,n),Pu.subVectors(e,n);const l=ho.dot(Pu),c=fo.dot(Pu);if(l<=0&&c<=0)return t.copy(n);Du.subVectors(e,i);const u=ho.dot(Du),h=fo.dot(Du);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ho,o);Uu.subVectors(e,s);const f=ho.dot(Uu),g=fo.dot(Uu);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(fo,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return lp.subVectors(s,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(lp,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ho,o).addScaledVector(fo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function Ou(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=Zd(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ou(o,s,e+1/3),this.g=Ou(o,s,e),this.b=Ou(o,s,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const n=Og[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return ft.workingToColorSpace(Mn.copy(this),e),Math.round(ut(Mn.r*255,0,255))*65536+Math.round(ut(Mn.g*255,0,255))*256+Math.round(ut(Mn.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Mn.copy(this),t);const n=Mn.r,i=Mn.g,s=Mn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=vn){ft.workingToColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,i=Mn.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(Ll);const n=Ga(Hr.h,Ll.h,t),i=Ga(Hr.s,Ll.s,t),s=Ga(Hr.l,Ll.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Oe;Oe.NAMES=Og;let Rx=0;class or extends aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=No,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Mh,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==No&&(n.blending=this.blending),this.side!==lr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bh&&(n.blendSrc=this.blendSrc),this.blendDst!==Mh&&(n.blendDst=this.blendDst),this.blendEquation!==Os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$f&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==io&&(n.stencilFail=this.stencilFail),this.stencilZFail!==io&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==io&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rr extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mr=Cx();function Cx(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Px(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=ut(r,-65504,65504),Mr.floatView[0]=r;const e=Mr.uint32View[0],t=e>>23&511;return Mr.baseTable[t]+((e&8388607)>>Mr.shiftTable[t])}function Dx(r){const e=r>>10;return Mr.uint32View[0]=Mr.mantissaTable[Mr.offsetTable[e]+(r&1023)]+Mr.exponentTable[e],Mr.floatView[0]}class Ux{static toHalfFloat(e){return Px(e)}static fromHalfFloat(e){return Dx(e)}}const Zt=new k,Nl=new Xe;let Ix=0;class Xn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ix++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=od,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==od&&(e.usage=this.usage),e}}class Fg extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bg extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jt extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lx=0;const Ri=new Ke,Fu=new At,po=new k,ui=new Br,va=new Br,hn=new k;class qn extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ig(e)?Bg:Fg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,n){return Ri.makeTranslation(e,t,n),this.applyMatrix4(Ri),this}scale(e,t,n){return Ri.makeScale(e,t,n),this.applyMatrix4(Ri),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ui.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];va.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(ui.min,va.min),ui.expandByPoint(hn),hn.addVectors(ui.max,va.max),ui.expandByPoint(hn)):(ui.expandByPoint(va.min),ui.expandByPoint(va.max))}ui.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)hn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)hn.fromBufferAttribute(a,c),l&&(po.fromBufferAttribute(e,c),hn.add(po)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new k,l[R]=new k;const c=new k,u=new k,h=new k,d=new Xe,f=new Xe,g=new Xe,_=new k,m=new k;function p(R,S,y){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(_),a[S].add(_),a[y].add(_),l[R].add(m),l[S].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,S=x.length;R<S;++R){const y=x[R],C=y.start,U=y.count;for(let O=C,W=C+U;O<W;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new k,v=new k,E=new k,w=new k;function b(R){E.fromBufferAttribute(i,R),w.copy(E);const S=a[R];T.copy(S),T.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(w,S);const C=v.dot(l[R])<0?-1:1;o.setXYZW(R,T.x,T.y,T.z,C)}for(let R=0,S=x.length;R<S;++R){const y=x[R],C=y.start,U=y.count;for(let O=C,W=C+U;O<W;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Xn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cp=new Ke,xs=new lu,Ol=new hr,up=new k,Fl=new k,Bl=new k,kl=new k,Bu=new k,zl=new k,hp=new k,Vl=new k;class Yt extends At{constructor(e=new qn,t=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){zl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Bu.fromBufferAttribute(h,e),o?zl.addScaledVector(Bu,u):zl.addScaledVector(Bu.sub(t),u))}t.add(zl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ol.copy(n.boundingSphere),Ol.applyMatrix4(s),xs.copy(e.ray).recast(e.near),!(Ol.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Ol,up)===null||xs.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(cp.copy(s).invert(),xs.copy(e.ray).applyMatrix4(cp),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,E=T;v<E;v+=3){const w=a.getX(v),b=a.getX(v+1),R=a.getX(v+2);i=Gl(this,p,e,n,c,u,h,w,b,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),T=a.getX(m+1),v=a.getX(m+2);i=Gl(this,o,e,n,c,u,h,x,T,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,E=T;v<E;v+=3){const w=v,b=v+1,R=v+2;i=Gl(this,p,e,n,c,u,h,w,b,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,T=m+1,v=m+2;i=Gl(this,o,e,n,c,u,h,x,T,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Nx(r,e,t,n,i,s,o,a){let l;if(e.side===Qn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===lr,a),l===null)return null;Vl.copy(a),Vl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Vl);return c<t.near||c>t.far?null:{distance:c,point:Vl.clone(),object:r}}function Gl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Fl),r.getVertexPosition(l,Bl),r.getVertexPosition(c,kl);const u=Nx(r,e,t,n,Fl,Bl,kl,hp);if(u){const h=new k;Xi.getBarycoord(hp,Fl,Bl,kl,h),i&&(u.uv=Xi.getInterpolatedAttribute(i,a,l,c,h,new Xe)),s&&(u.uv1=Xi.getInterpolatedAttribute(s,a,l,c,h,new Xe)),o&&(u.normal=Xi.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new k,materialIndex:0};Xi.getNormal(Fl,Bl,kl,d.normal),u.face=d,u.barycoord=h}return u}class bl extends qn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2));function g(_,m,p,x,T,v,E,w,b,R,S){const y=v/b,C=E/R,U=v/2,O=E/2,W=w/2,X=b+1,V=R+1;let q=0,G=0;const ee=new k;for(let P=0;P<V;P++){const ae=P*C-O;for(let we=0;we<X;we++){const Be=we*y-U;ee[_]=Be*x,ee[m]=ae*T,ee[p]=W,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(we/b),h.push(1-P/R),q+=1}}for(let P=0;P<R;P++)for(let ae=0;ae<b;ae++){const we=d+ae+X*P,Be=d+ae+X*(P+1),K=d+(ae+1)+X*(P+1),se=d+(ae+1)+X*P;l.push(we,Be,se),l.push(Be,K,se),G+=6}a.addGroup(f,G,S),f+=G,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ko(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kn(r){const e={};for(let t=0;t<r.length;t++){const n=Ko(r[t]);for(const i in n)e[i]=n[i]}return e}function Ox(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function kg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const Fx={clone:Ko,merge:kn};var Bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mt extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bx,this.fragmentShader=kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ko(e.uniforms),this.uniformsGroups=Ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vc extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Ar}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new k,dp=new Xe,fp=new Xe;class Rn extends Vc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,dp,fp),t.subVectors(fp,dp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Va*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mo=-90,go=1;class zx extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rn(mo,go,e,t);i.layers=this.layers,this.add(i);const s=new Rn(mo,go,e,t);s.layers=this.layers,this.add(s);const o=new Rn(mo,go,e,t);o.layers=this.layers,this.add(o);const a=new Rn(mo,go,e,t);a.layers=this.layers,this.add(a);const l=new Rn(mo,go,e,t);l.layers=this.layers,this.add(l);const c=new Rn(mo,go,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ar)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zg extends ln{constructor(e=[],t=Yo,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vx extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zg(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bl(5,5,5),s=new mt({name:"CubemapFromEquirect",uniforms:Ko(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qn,blending:rs});s.uniforms.tEquirect.value=t;const o=new Yt(i,s),a=t.minFilter;return t.minFilter===wr&&(t.minFilter=mn),new zx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Bs extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gx={type:"move"};class ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Hx extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=od,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new k;class Qd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pp=new k,mp=new _t,gp=new _t,Xx=new k,_p=new Ke,Hl=new k,zu=new hr,vp=new Ke,Vu=new lu;class qx extends Yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wf,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Br),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hl),this.boundingBox.expandByPoint(Hl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hl),this.boundingSphere.expandByPoint(Hl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zu.copy(this.boundingSphere),zu.applyMatrix4(i),e.ray.intersectsSphere(zu)!==!1&&(vp.copy(i).invert(),Vu.copy(e.ray).applyMatrix4(vp),!(this.boundingBox!==null&&Vu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;mp.fromBufferAttribute(i.attributes.skinIndex,e),gp.fromBufferAttribute(i.attributes.skinWeight,e),pp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=gp.getComponent(s);if(o!==0){const a=mp.getComponent(s);_p.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Xx.copy(pp).applyMatrix4(_p),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vg extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ef extends ln{constructor(e=null,t=1,n=1,i,s,o,a,l,c=yn,u=yn,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xp=new Ke,Yx=new Ke;class tf{constructor(e=[],t=[]){this.uuid=$i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Yx;xp.multiplyMatrices(a,t[s]),xp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ef(t,e,e,Jn,qi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Vg),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Gc extends Xn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _o=new Ke,yp=new Ke,Wl=[],Sp=new Br,$x=new Ke,xa=new Yt,ya=new hr;class nf extends Yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$x)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_o),Sp.copy(e.boundingBox).applyMatrix4(_o),this.boundingBox.union(Sp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_o),ya.copy(e.boundingSphere).applyMatrix4(_o),this.boundingSphere.union(ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(n),e.ray.intersectsSphere(ya)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,_o),yp.multiplyMatrices(n,_o),xa.matrixWorld=yp,xa.raycast(e,Wl);for(let o=0,a=Wl.length;o<a;o++){const l=Wl[o];l.instanceId=s,l.object=this,t.push(l)}Wl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ef(new Float32Array(i*this.count),i,this.count,Yd,qi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gu=new k,jx=new k,Kx=new et;class Ds{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Gu.subVectors(n,t).cross(jx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kx.getNormalMatrix(e),i=this.coplanarPoint(Gu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new hr,Zx=new Xe(.5,.5),Xl=new k;class rf{constructor(e=new Ds,t=new Ds,n=new Ds,i=new Ds,s=new Ds,o=new Ds){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ar){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],T=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-f,v-p).normalize(),n[1].setComponents(l+s,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+u,m+g,v+x).normalize(),n[3].setComponents(l-o,d-u,m-g,v-x).normalize(),n[4].setComponents(l-a,d-h,m-_,v-T).normalize(),t===Ar)n[5].setComponents(l+a,d+h,m+_,v+T).normalize();else if(t===zc)n[5].setComponents(a,h,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);const t=Zx.distanceTo(e.center);return ys.radius=.7071067811865476+t,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xl.x=i.normal.x>0?e.max.x:e.min.x,Xl.y=i.normal.y>0?e.max.y:e.min.y,Xl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gg extends or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hc=new k,Wc=new k,Tp=new Ke,Sa=new lu,ql=new hr,Hu=new k,bp=new k;class sf extends At{constructor(e=new qn,t=new Gg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Hc.fromBufferAttribute(t,i-1),Wc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Hc.distanceTo(Wc);e.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ql.copy(n.boundingSphere),ql.applyMatrix4(i),ql.radius+=s,e.ray.intersectsSphere(ql)===!1)return;Tp.copy(i).invert(),Sa.copy(e.ray).applyMatrix4(Tp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),x=u.getX(_+1),T=Yl(this,e,Sa,l,p,x,_);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Yl(this,e,Sa,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Yl(this,e,Sa,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Yl(this,e,Sa,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Yl(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Hc.fromBufferAttribute(a,i),Wc.fromBufferAttribute(a,s),t.distanceSqToSegment(Hc,Wc,Hu,bp)>n)return;Hu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Hu);if(!(c<e.near||c>e.far))return{distance:c,point:bp.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Mp=new k,Ep=new k;class Hg extends sf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Mp.fromBufferAttribute(t,i),Ep.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mp.distanceTo(Ep);e.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jx extends sf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wg extends or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wp=new Ke,ad=new lu,$l=new hr,jl=new k;class Xg extends At{constructor(e=new qn,t=new Wg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(i),$l.radius+=s,e.ray.intersectsSphere($l)===!1)return;wp.copy(i).invert(),ad.copy(e.ray).applyMatrix4(wp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);jl.fromBufferAttribute(h,m),Ap(jl,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)jl.fromBufferAttribute(h,g),Ap(jl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ap(r,e,t,n,i,s,o){const a=ad.distanceSqToPoint(r);if(a<t){const l=new k;ad.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Xc extends ln{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qg extends ln{constructor(e,t,n=Ks,i,s,o,a=yn,l=yn,c,u=ol,h=1){if(u!==ol&&u!==al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class of extends qn{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function x(){const v=new k,E=new k;let w=0;const b=(t-e)/n;for(let R=0;R<=s;R++){const S=[],y=R/s,C=y*(t-e)+e;for(let U=0;U<=i;U++){const O=U/i,W=O*l+a,X=Math.sin(W),V=Math.cos(W);E.x=C*X,E.y=-y*n+m,E.z=C*V,h.push(E.x,E.y,E.z),v.set(X,b,V).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-y),S.push(g++)}_.push(S)}for(let R=0;R<i;R++)for(let S=0;S<s;S++){const y=_[S][R],C=_[S+1][R],U=_[S+1][R+1],O=_[S][R+1];(e>0||S!==0)&&(u.push(y,C,O),w+=3),(t>0||S!==s-1)&&(u.push(C,U,O),w+=3)}c.addGroup(p,w,0),p+=w}function T(v){const E=g,w=new Xe,b=new k;let R=0;const S=v===!0?e:t,y=v===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const C=g;for(let U=0;U<=i;U++){const W=U/i*l+a,X=Math.cos(W),V=Math.sin(W);b.x=S*V,b.y=m*y,b.z=S*X,h.push(b.x,b.y,b.z),d.push(0,y,0),w.x=X*.5+.5,w.y=V*.5*y+.5,f.push(w.x,w.y),g++}for(let U=0;U<i;U++){const O=E+U,W=C+U;v===!0?u.push(W,W+1,O):u.push(W+1,W,O),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class la extends qn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*d-o;for(let T=0;T<c;T++){const v=T*h-s;g.push(v,-x,0),_.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const T=x+c*p,v=x+c*(p+1),E=x+1+c*(p+1),w=x+1+c*p;f.push(T,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.widthSegments,e.heightSegments)}}class cu extends qn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new k,d=new k,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],T=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const w=E/t;h.x=-e*Math.cos(i+w*s)*Math.sin(o+T*a),h.y=e*Math.cos(o+T*a),h.z=e*Math.sin(i+w*s)*Math.sin(o+T*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-T),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const T=u[p][x+1],v=u[p][x],E=u[p+1][x],w=u[p+1][x+1];(p!==0||o>0)&&f.push(T,v,w),(p!==n-1||l<Math.PI)&&f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yg extends mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ml extends or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dg,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends Ml{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Qx extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ey extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Kl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ty(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ny(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Rp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function $g(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class El{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class iy extends El{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xf,endingEnd:Xf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case qf:s=e,a=2*t-n;break;case Yf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qf:o=e,l=2*n-t;break;case Yf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,T=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let E=0;E!==a;++E)s[E]=p*o[u+E]+x*o[c+E]+T*o[l+E]+v*o[h+E];return s}}class ry extends El{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class sy extends El{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ki{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kl(t,this.TimeBufferType),this.values=Kl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Kl(e.times,Array),values:Kl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ry(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new iy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ll:t=this.InterpolantFactoryMethodDiscrete;break;case cl:t=this.InterpolantFactoryMethodLinear;break;case vu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ll;case this.InterpolantFactoryMethodLinear:return cl;case this.InterpolantFactoryMethodSmooth:return vu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ty(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ki.prototype.ValueTypeName="";Ki.prototype.TimeBufferType=Float32Array;Ki.prototype.ValueBufferType=Float32Array;Ki.prototype.DefaultInterpolation=cl;class ca extends Ki{constructor(e,t,n){super(e,t,n)}}ca.prototype.ValueTypeName="bool";ca.prototype.ValueBufferType=Array;ca.prototype.DefaultInterpolation=ll;ca.prototype.InterpolantFactoryMethodLinear=void 0;ca.prototype.InterpolantFactoryMethodSmooth=void 0;class jg extends Ki{constructor(e,t,n,i){super(e,t,n,i)}}jg.prototype.ValueTypeName="color";class Zo extends Ki{constructor(e,t,n,i){super(e,t,n,i)}}Zo.prototype.ValueTypeName="number";class oy extends El{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)si.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Jo extends Ki{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new oy(this.times,this.values,this.getValueSize(),e)}}Jo.prototype.ValueTypeName="quaternion";Jo.prototype.InterpolantFactoryMethodSmooth=void 0;class ua extends Ki{constructor(e,t,n){super(e,t,n)}}ua.prototype.ValueTypeName="string";ua.prototype.ValueBufferType=Array;ua.prototype.DefaultInterpolation=ll;ua.prototype.InterpolantFactoryMethodLinear=void 0;ua.prototype.InterpolantFactoryMethodSmooth=void 0;class Qo extends Ki{constructor(e,t,n,i){super(e,t,n,i)}}Qo.prototype.ValueTypeName="vector";class ay{constructor(e="",t=-1,n=[],i=Ov){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$i(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(cy(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Ki.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=ny(l);l=Rp(l,1,u),c=Rp(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Zo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];$g(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const T=d[g];m.push(T.time),p.push(T.morphTarget===_?1:0)}i.push(new Zo(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Qo,f+".position",d,"pos",i),n(Jo,f+".quaternion",d,"rot",i),n(Qo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ly(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zo;case"vector":case"vector2":case"vector3":case"vector4":return Qo;case"color":return jg;case"quaternion":return Jo;case"bool":case"boolean":return ca;case"string":return ua}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function cy(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ly(r.type);if(r.times===void 0){const t=[],n=[];$g(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Cr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class uy{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const hy=new uy;class fs{constructor(e){this.manager=e!==void 0?e:hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const _r={};class dy extends Error{constructor(e,t){super(e),this.response=t}}class uu extends fs{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Cr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(_r[e]!==void 0){_r[e].push({onLoad:t,onProgress:n,onError:i});return}_r[e]=[],_r[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=_r[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:T,value:v})=>{if(T)p.close();else{_+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,b=u.length;w<b;w++){const R=u[w];R.onProgress&&R.onProgress(E)}p.enqueue(v),x()}},T=>{p.error(T)})}}});return new Response(m)}else throw new dy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Cr.add(`file:${e}`,c);const u=_r[e];delete _r[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=_r[e];if(u===void 0)throw this.manager.itemError(e),c;delete _r[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const vo=new WeakMap;class fy extends fs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Cr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=vo.get(o);h===void 0&&(h=[],vo.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=ul("img");function l(){u(),t&&t(this);const h=vo.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}vo.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),Cr.remove(`image:${e}`);const d=vo.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}vo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Cr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Kg extends fs{constructor(e){super(e)}load(e,t,n,i){const s=new ln,o=new fy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class af extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Wu=new Ke,Cp=new k,Pp=new k;class lf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=cr,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cp),Pp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pp),t.updateMatrixWorld(),Wu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class py extends lf{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=jo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class my extends af{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new py}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dp=new Ke,Ta=new k,Xu=new k;class gy extends lf{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ta),Xu.copy(n.position),Xu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xu),n.updateMatrixWorld(),i.makeTranslation(-Ta.x,-Ta.y,-Ta.z),Dp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dp)}}class _y extends af{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hu extends Vc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vy extends lf{constructor(){super(new hu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xy extends af{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new vy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ha{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const qu=new WeakMap;class yy extends fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Cr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(qu.has(o)===!0)i&&i(qu.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Cr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),qu.set(l,c),Cr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Cr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}}let Zl;class Sy{static getContext(){return Zl===void 0&&(Zl=new(window.AudioContext||window.webkitAudioContext)),Zl}static setContext(e){Zl=e}}class Ty extends fs{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new uu(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);Sy.getContext().decodeAudioData(c,function(h){t(h)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),s.manager.itemError(e)}}}class by extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const cf="\\[\\]\\.:\\/",My=new RegExp("["+cf+"]","g"),uf="[^"+cf+"]",Ey="[^"+cf.replace("\\.","")+"]",wy=/((?:WC+[\/:])*)/.source.replace("WC",uf),Ay=/(WCOD+)?/.source.replace("WCOD",Ey),Ry=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uf),Cy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uf),Py=new RegExp("^"+wy+Ay+Ry+Cy+"$"),Dy=["material","materials","bones","map"];class Uy{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(My,"")}static parseTrackName(e){const t=Py.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Dy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=Uy;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Up(r,e,t,n){const i=Iy(n);switch(t){case wg:return r*e;case Yd:return r*e/i.components*i.byteLength;case $d:return r*e/i.components*i.byteLength;case Rg:return r*e*2/i.components*i.byteLength;case jd:return r*e*2/i.components*i.byteLength;case Ag:return r*e*3/i.components*i.byteLength;case Jn:return r*e*4/i.components*i.byteLength;case Kd:return r*e*4/i.components*i.byteLength;case Sc:case Tc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bc:case Mc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Oh:return Math.max(r,16)*Math.max(e,8)/4;case Ih:case Nh:return Math.max(r,8)*Math.max(e,8)/2;case Fh:case Bh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case qh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ec:case ed:case td:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Cg:case nd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case id:case rd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iy(r){switch(r){case cr:case bg:return{byteLength:1,components:1};case rl:case Mg:case Yi:return{byteLength:2,components:1};case Xd:case qd:return{byteLength:2,components:4};case Ks:case Wd:case qi:return{byteLength:4,components:1};case Eg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ly(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,By=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$y=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hS="gl_FragColor = linearToOutputTexel( gl_FragColor );",dS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_S=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,US=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$S=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_T=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ST=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ET=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,GT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ib=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ab=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ub=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,db=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:Ny,alphahash_pars_fragment:Oy,alphamap_fragment:Fy,alphamap_pars_fragment:By,alphatest_fragment:ky,alphatest_pars_fragment:zy,aomap_fragment:Vy,aomap_pars_fragment:Gy,batching_pars_vertex:Hy,batching_vertex:Wy,begin_vertex:Xy,beginnormal_vertex:qy,bsdfs:Yy,iridescence_fragment:$y,bumpmap_pars_fragment:jy,clipping_planes_fragment:Ky,clipping_planes_pars_fragment:Zy,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:Qy,color_fragment:eS,color_pars_fragment:tS,color_pars_vertex:nS,color_vertex:iS,common:rS,cube_uv_reflection_fragment:sS,defaultnormal_vertex:oS,displacementmap_pars_vertex:aS,displacementmap_vertex:lS,emissivemap_fragment:cS,emissivemap_pars_fragment:uS,colorspace_fragment:hS,colorspace_pars_fragment:dS,envmap_fragment:fS,envmap_common_pars_fragment:pS,envmap_pars_fragment:mS,envmap_pars_vertex:gS,envmap_physical_pars_fragment:AS,envmap_vertex:_S,fog_vertex:vS,fog_pars_vertex:xS,fog_fragment:yS,fog_pars_fragment:SS,gradientmap_pars_fragment:TS,lightmap_pars_fragment:bS,lights_lambert_fragment:MS,lights_lambert_pars_fragment:ES,lights_pars_begin:wS,lights_toon_fragment:RS,lights_toon_pars_fragment:CS,lights_phong_fragment:PS,lights_phong_pars_fragment:DS,lights_physical_fragment:US,lights_physical_pars_fragment:IS,lights_fragment_begin:LS,lights_fragment_maps:NS,lights_fragment_end:OS,logdepthbuf_fragment:FS,logdepthbuf_pars_fragment:BS,logdepthbuf_pars_vertex:kS,logdepthbuf_vertex:zS,map_fragment:VS,map_pars_fragment:GS,map_particle_fragment:HS,map_particle_pars_fragment:WS,metalnessmap_fragment:XS,metalnessmap_pars_fragment:qS,morphinstance_vertex:YS,morphcolor_vertex:$S,morphnormal_vertex:jS,morphtarget_pars_vertex:KS,morphtarget_vertex:ZS,normal_fragment_begin:JS,normal_fragment_maps:QS,normal_pars_fragment:eT,normal_pars_vertex:tT,normal_vertex:nT,normalmap_pars_fragment:iT,clearcoat_normal_fragment_begin:rT,clearcoat_normal_fragment_maps:sT,clearcoat_pars_fragment:oT,iridescence_pars_fragment:aT,opaque_fragment:lT,packing:cT,premultiplied_alpha_fragment:uT,project_vertex:hT,dithering_fragment:dT,dithering_pars_fragment:fT,roughnessmap_fragment:pT,roughnessmap_pars_fragment:mT,shadowmap_pars_fragment:gT,shadowmap_pars_vertex:_T,shadowmap_vertex:vT,shadowmask_pars_fragment:xT,skinbase_vertex:yT,skinning_pars_vertex:ST,skinning_vertex:TT,skinnormal_vertex:bT,specularmap_fragment:MT,specularmap_pars_fragment:ET,tonemapping_fragment:wT,tonemapping_pars_fragment:AT,transmission_fragment:RT,transmission_pars_fragment:CT,uv_pars_fragment:PT,uv_pars_vertex:DT,uv_vertex:UT,worldpos_vertex:IT,background_vert:LT,background_frag:NT,backgroundCube_vert:OT,backgroundCube_frag:FT,cube_vert:BT,cube_frag:kT,depth_vert:zT,depth_frag:VT,distanceRGBA_vert:GT,distanceRGBA_frag:HT,equirect_vert:WT,equirect_frag:XT,linedashed_vert:qT,linedashed_frag:YT,meshbasic_vert:$T,meshbasic_frag:jT,meshlambert_vert:KT,meshlambert_frag:ZT,meshmatcap_vert:JT,meshmatcap_frag:QT,meshnormal_vert:eb,meshnormal_frag:tb,meshphong_vert:nb,meshphong_frag:ib,meshphysical_vert:rb,meshphysical_frag:sb,meshtoon_vert:ob,meshtoon_frag:ab,points_vert:lb,points_frag:cb,shadow_vert:ub,shadow_frag:hb,sprite_vert:db,sprite_frag:fb},_e={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Qi={basic:{uniforms:kn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:kn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Oe(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:kn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:kn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:kn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Oe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:kn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:kn([_e.points,_e.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:kn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:kn([_e.common,_e.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:kn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:kn([_e.sprite,_e.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:kn([_e.common,_e.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:kn([_e.lights,_e.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Qi.physical={uniforms:kn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Jl={r:0,b:0,g:0},Ss=new In,pb=new Ke;function mb(r,e,t,n,i,s,o){const a=new Oe(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(T){let v=T.isScene===!0?T.background:null;return v&&v.isTexture&&(v=(T.backgroundBlurriness>0?t:e).get(v)),v}function _(T){let v=!1;const E=g(T);E===null?p(a,l):E&&E.isColor&&(p(E,1),v=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(T,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===au)?(u===void 0&&(u=new Yt(new bl(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Ko(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ss.copy(v.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pb.makeRotationFromEuler(Ss)),u.material.toneMapped=ft.getTransfer(E.colorSpace)!==wt,(h!==E||d!==E.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Yt(new la(2,2),new mt({name:"BackgroundMaterial",uniforms:Ko(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ft.getTransfer(E.colorSpace)!==wt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,v){T.getRGB(Jl,kg(r)),n.buffers.color.setClear(Jl.r,Jl.g,Jl.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,v=1){a.set(T),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:m,dispose:x}}function gb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(y,C,U,O,W){let X=!1;const V=h(O,U,C);s!==V&&(s=V,c(s.object)),X=f(y,O,U,W),X&&g(y,O,U,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(y,C,U,O),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,C,U){const O=U.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let X=W[C.id];X===void 0&&(X={},W[C.id]=X);let V=X[O];return V===void 0&&(V=d(l()),X[O]=V),V}function d(y){const C=[],U=[],O=[];for(let W=0;W<t;W++)C[W]=0,U[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:O,object:y,attributes:{},index:null}}function f(y,C,U,O){const W=s.attributes,X=C.attributes;let V=0;const q=U.getAttributes();for(const G in q)if(q[G].location>=0){const P=W[G];let ae=X[G];if(ae===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),P===void 0||P.attribute!==ae||ae&&P.data!==ae.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function g(y,C,U,O){const W={},X=C.attributes;let V=0;const q=U.getAttributes();for(const G in q)if(q[G].location>=0){let P=X[G];P===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(P=y.instanceColor));const ae={};ae.attribute=P,P&&P.data&&(ae.data=P.data),W[G]=ae,V++}s.attributes=W,s.attributesNum=V,s.index=O}function _(){const y=s.newAttributes;for(let C=0,U=y.length;C<U;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const U=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;U[y]=1,O[y]===0&&(r.enableVertexAttribArray(y),O[y]=1),W[y]!==C&&(r.vertexAttribDivisor(y,C),W[y]=C)}function x(){const y=s.newAttributes,C=s.enabledAttributes;for(let U=0,O=C.length;U<O;U++)C[U]!==y[U]&&(r.disableVertexAttribArray(U),C[U]=0)}function T(y,C,U,O,W,X,V){V===!0?r.vertexAttribIPointer(y,C,U,W,X):r.vertexAttribPointer(y,C,U,O,W,X)}function v(y,C,U,O){_();const W=O.attributes,X=U.getAttributes(),V=C.defaultAttributeValues;for(const q in X){const G=X[q];if(G.location>=0){let ee=W[q];if(ee===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),ee!==void 0){const P=ee.normalized,ae=ee.itemSize,we=e.get(ee);if(we===void 0)continue;const Be=we.buffer,K=we.type,se=we.bytesPerElement,ve=K===r.INT||K===r.UNSIGNED_INT||ee.gpuType===Wd;if(ee.isInterleavedBufferAttribute){const le=ee.data,xe=le.stride,$e=ee.offset;if(le.isInstancedInterleavedBuffer){for(let be=0;be<G.locationSize;be++)p(G.location+be,le.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let be=0;be<G.locationSize;be++)m(G.location+be);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let be=0;be<G.locationSize;be++)T(G.location+be,ae/G.locationSize,K,P,xe*se,($e+ae/G.locationSize*be)*se,ve)}else{if(ee.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)p(G.location+le,ee.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let le=0;le<G.locationSize;le++)T(G.location+le,ae/G.locationSize,K,P,ae*se,ae/G.locationSize*le*se,ve)}}else if(V!==void 0){const P=V[q];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(G.location,P);break;case 3:r.vertexAttrib3fv(G.location,P);break;case 4:r.vertexAttrib4fv(G.location,P);break;default:r.vertexAttrib1fv(G.location,P)}}}}x()}function E(){R();for(const y in n){const C=n[y];for(const U in C){const O=C[U];for(const W in O)u(O[W].object),delete O[W];delete C[U]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const U in C){const O=C[U];for(const W in O)u(O[W].object),delete O[W];delete C[U]}delete n[y.id]}function b(y){for(const C in n){const U=n[C];if(U[y.id]===void 0)continue;const O=U[y.id];for(const W in O)u(O[W].object),delete O[W];delete U[y.id]}}function R(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function _b(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vb(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Jn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==cr&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==qi&&!R)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:E,maxSamples:w}}function xb(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ds,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,T=x*4;let v=p.clippingState||null;l.value=v,v=u(g,d,T,f);for(let E=0;E!==T;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=f;T!==_;++T,v+=4)o.copy(h[T]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function yb(r){let e=new WeakMap;function t(o,a){return a===Bc?o.mapping=Yo:a===Uh&&(o.mapping=$o),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bc||a===Uh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vx(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Po=4,Ip=[.125,.215,.35,.446,.526,.582],Fs=20,Yu=new hu,Lp=new Oe;let $u=null,ju=0,Ku=0,Zu=!1;const Us=(1+Math.sqrt(5))/2,xo=1/Us,Np=[new k(-Us,xo,0),new k(Us,xo,0),new k(-xo,0,Us),new k(xo,0,Us),new k(0,Us,-xo),new k(0,Us,xo),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Sb=new k;class Op{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Sb}=s;$u=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($u,ju,Ku),this._renderer.xr.enabled=Zu,e.scissorTest=!1,Ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yo||e.mapping===$o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$u=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Yi,format:Jn,colorSpace:Tn,depthBuffer:!1},i=Fp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tb(s)),this._blurMaterial=bb(s,e,t)}return i}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,Yu)}_sceneToCubeUV(e,t,n,i,s){const l=new Rn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Lp),h.toneMapping=Dr,h.autoClear=!1;const g=new Rr({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),_=new Yt(new bl,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Lp),m=!0);for(let x=0;x<6;x++){const T=x%3;T===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):T===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const v=this._cubeSize;Ql(i,T*v,x>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Yo||e.mapping===$o;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ql(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Yu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Np[(i-s-1)%Np.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Yt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Fs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Fs;m>Fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fs}`);const p=[];let x=0;for(let b=0;b<Fs;++b){const R=b/_,S=Math.exp(-R*R/2);p.push(S),b===0?x+=S:b<m&&(x+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const v=this._sizeLods[i],E=3*v*(i>T-Po?i-T+Po:0),w=4*(this._cubeSize-v);Ql(t,E,w,3*v,2*v),l.setRenderTarget(t),l.render(h,Yu)}}function Tb(r){const e=[],t=[],n=[];let i=r;const s=r-Po+1+Ip.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Po?l=Ip[o-r+Po-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),T=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,R=w>2?0:-1,S=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];x.set(S,_*g*w),T.set(d,m*g*w);const y=[w,w,w,w,w,w];v.set(y,p*g*w)}const E=new qn;E.setAttribute("position",new Xn(x,_)),E.setAttribute("uv",new Xn(T,m)),E.setAttribute("faceIndex",new Xn(v,p)),e.push(E),i>Po&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fp(r,e,t){const n=new xi(r,e,t);return n.texture.mapping=au,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ql(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function bb(r,e,t){const n=new Float32Array(Fs),i=new k(0,1,0);return new mt({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Bp(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function kp(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function hf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mb(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bc||l===Uh,u=l===Yo||l===$o;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Op(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Op(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Eb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Oo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wb(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let T=0,v=x.length;T<v;T+=3){const E=x[T+0],w=x[T+1],b=x[T+2];d.push(E,w,w,b,b,E)}}else if(g!==void 0){const x=g.array;_=g.version;for(let T=0,v=x.length/3-1;T<v;T+=3){const E=T+0,w=T+1,b=T+2;d.push(E,w,w,b,b,E)}}else return;const m=new(Ig(d)?Bg:Fg)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ab(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Rb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cb(r,e,t){const n=new WeakMap,i=new _t;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let E=a.attributes.position.count*v,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const b=new Float32Array(E*w*4*h),R=new Lg(b,E,w,h);R.type=qi,R.needsUpdate=!0;const S=v*4;for(let C=0;C<h;C++){const U=p[C],O=x[C],W=T[C],X=E*w*4*C;for(let V=0;V<U.count;V++){const q=V*S;g===!0&&(i.fromBufferAttribute(U,V),b[X+q+0]=i.x,b[X+q+1]=i.y,b[X+q+2]=i.z,b[X+q+3]=0),_===!0&&(i.fromBufferAttribute(O,V),b[X+q+4]=i.x,b[X+q+5]=i.y,b[X+q+6]=i.z,b[X+q+7]=0),m===!0&&(i.fromBufferAttribute(W,V),b[X+q+8]=i.x,b[X+q+9]=i.y,b[X+q+10]=i.z,b[X+q+11]=W.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new Xe(E,w)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Pb(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Jg=new ln,zp=new qg(1,1),Qg=new Lg,e0=new yx,t0=new zg,Vp=[],Gp=[],Hp=new Float32Array(16),Wp=new Float32Array(9),Xp=new Float32Array(4);function ha(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Vp[i];if(s===void 0&&(s=new Float32Array(i),Vp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function cn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function un(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function du(r,e){let t=Gp[e];t===void 0&&(t=new Int32Array(e),Gp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Db(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ub(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2fv(this.addr,e),un(t,e)}}function Ib(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;r.uniform3fv(this.addr,e),un(t,e)}}function Lb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4fv(this.addr,e),un(t,e)}}function Nb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Xp.set(n),r.uniformMatrix2fv(this.addr,!1,Xp),un(t,n)}}function Ob(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Wp.set(n),r.uniformMatrix3fv(this.addr,!1,Wp),un(t,n)}}function Fb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Hp.set(n),r.uniformMatrix4fv(this.addr,!1,Hp),un(t,n)}}function Bb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function kb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2iv(this.addr,e),un(t,e)}}function zb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3iv(this.addr,e),un(t,e)}}function Vb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4iv(this.addr,e),un(t,e)}}function Gb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Hb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2uiv(this.addr,e),un(t,e)}}function Wb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3uiv(this.addr,e),un(t,e)}}function Xb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4uiv(this.addr,e),un(t,e)}}function qb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(zp.compareFunction=Ug,s=zp):s=Jg,t.setTexture2D(e||s,i)}function Yb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||e0,i)}function $b(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||t0,i)}function jb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qg,i)}function Kb(r){switch(r){case 5126:return Db;case 35664:return Ub;case 35665:return Ib;case 35666:return Lb;case 35674:return Nb;case 35675:return Ob;case 35676:return Fb;case 5124:case 35670:return Bb;case 35667:case 35671:return kb;case 35668:case 35672:return zb;case 35669:case 35673:return Vb;case 5125:return Gb;case 36294:return Hb;case 36295:return Wb;case 36296:return Xb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return jb}}function Zb(r,e){r.uniform1fv(this.addr,e)}function Jb(r,e){const t=ha(e,this.size,2);r.uniform2fv(this.addr,t)}function Qb(r,e){const t=ha(e,this.size,3);r.uniform3fv(this.addr,t)}function e1(r,e){const t=ha(e,this.size,4);r.uniform4fv(this.addr,t)}function t1(r,e){const t=ha(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function n1(r,e){const t=ha(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function i1(r,e){const t=ha(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function r1(r,e){r.uniform1iv(this.addr,e)}function s1(r,e){r.uniform2iv(this.addr,e)}function o1(r,e){r.uniform3iv(this.addr,e)}function a1(r,e){r.uniform4iv(this.addr,e)}function l1(r,e){r.uniform1uiv(this.addr,e)}function c1(r,e){r.uniform2uiv(this.addr,e)}function u1(r,e){r.uniform3uiv(this.addr,e)}function h1(r,e){r.uniform4uiv(this.addr,e)}function d1(r,e,t){const n=this.cache,i=e.length,s=du(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Jg,s[o])}function f1(r,e,t){const n=this.cache,i=e.length,s=du(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||e0,s[o])}function p1(r,e,t){const n=this.cache,i=e.length,s=du(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||t0,s[o])}function m1(r,e,t){const n=this.cache,i=e.length,s=du(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Qg,s[o])}function g1(r){switch(r){case 5126:return Zb;case 35664:return Jb;case 35665:return Qb;case 35666:return e1;case 35674:return t1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return r1;case 35667:case 35671:return s1;case 35668:case 35672:return o1;case 35669:case 35673:return a1;case 5125:return l1;case 36294:return c1;case 36295:return u1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}class _1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kb(t.type)}}class v1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g1(t.type)}}class x1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function qp(r,e){r.seq.push(e),r.map[e.id]=e}function y1(r,e,t){const n=r.name,i=n.length;for(Ju.lastIndex=0;;){const s=Ju.exec(n),o=Ju.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){qp(t,c===void 0?new _1(a,r,e):new v1(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new x1(a),qp(t,h)),t=h}}}class wc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);y1(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Yp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const S1=37297;let T1=0;function b1(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const $p=new et;function M1(r){ft._getMatrix($p,ft.workingColorSpace,r);const e=`mat3( ${$p.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case kc:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function jp(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+b1(r.getShaderSource(e),o)}else return i}function E1(r,e){const t=M1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function w1(r,e){let t;switch(e){case Av:t="Linear";break;case Rv:t="Reinhard";break;case Cv:t="Cineon";break;case Pv:t="ACESFilmic";break;case Uv:t="AgX";break;case Iv:t="Neutral";break;case Dv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ec=new k;function A1(){ft.getLuminanceCoefficients(ec);const r=ec.x.toFixed(4),e=ec.y.toFixed(4),t=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function C1(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function P1(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ia(r){return r!==""}function Kp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(r){return r.replace(D1,I1)}const U1=new Map;function I1(r,e){let t=it[e];if(t===void 0){const n=U1.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ld(t)}const L1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jp(r){return r.replace(L1,N1)}function N1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function O1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ov?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function F1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Yo:case $o:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $o:e="ENVMAP_MODE_REFRACTION";break}return e}function k1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sg:e="ENVMAP_BLENDING_MULTIPLY";break;case Ev:e="ENVMAP_BLENDING_MIX";break;case wv:e="ENVMAP_BLENDING_ADD";break}return e}function z1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function V1(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=O1(t),c=F1(t),u=B1(t),h=k1(t),d=z1(t),f=R1(t),g=C1(s),_=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ia).join(`
`),p.length>0&&(p+=`
`)):(m=[Qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),p=[Qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?it.tonemapping_pars_fragment:"",t.toneMapping!==Dr?w1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,E1("linearToOutputTexel",t.outputColorSpace),A1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),o=ld(o),o=Kp(o,t),o=Zp(o,t),a=ld(a),a=Kp(a,t),a=Zp(a,t),o=Jp(o),a=Jp(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=x+m+o,v=x+p+a,E=Yp(i,i.VERTEX_SHADER,T),w=Yp(i,i.FRAGMENT_SHADER,v);i.attachShader(_,E),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(C){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(E).trim(),W=i.getShaderInfoLog(w).trim();let X=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,w);else{const q=jp(i,E,"vertex"),G=jp(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+q+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||W==="")&&(V=!1);V&&(C.diagnostics={runnable:X,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(E),i.deleteShader(w),R=new wc(i,_),S=P1(i,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,S1)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let G1=0;class H1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new W1(e),t.set(e,n)),n}}class W1{constructor(e){this.id=G1++,this.code=e,this.usedTimes=0}}function X1(r,e,t,n,i,s,o){const a=new Ng,l=new H1,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,C,U,O){const W=U.fog,X=O.geometry,V=S.isMeshStandardMaterial?U.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),G=q&&q.mapping===au?q.image.height:null,ee=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const P=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ae=P!==void 0?P.length:0;let we=0;X.morphAttributes.position!==void 0&&(we=1),X.morphAttributes.normal!==void 0&&(we=2),X.morphAttributes.color!==void 0&&(we=3);let Be,K,se,ve;if(ee){const ye=Qi[ee];Be=ye.vertexShader,K=ye.fragmentShader}else Be=S.vertexShader,K=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);const le=r.getRenderTarget(),xe=r.state.buffers.depth.getReversed(),$e=O.isInstancedMesh===!0,be=O.isBatchedMesh===!0,rt=!!S.map,ot=!!S.matcap,Ae=!!q,L=!!S.aoMap,xt=!!S.lightMap,Je=!!S.bumpMap,Y=!!S.normalMap,Se=!!S.displacementMap,tt=!!S.emissiveMap,Le=!!S.metalnessMap,Ue=!!S.roughnessMap,Tt=S.anisotropy>0,D=S.clearcoat>0,M=S.dispersion>0,H=S.iridescence>0,Q=S.sheen>0,J=S.transmission>0,Z=Tt&&!!S.anisotropyMap,Me=D&&!!S.clearcoatMap,ce=D&&!!S.clearcoatNormalMap,Re=D&&!!S.clearcoatRoughnessMap,de=H&&!!S.iridescenceMap,ie=H&&!!S.iridescenceThicknessMap,me=Q&&!!S.sheenColorMap,Ve=Q&&!!S.sheenRoughnessMap,ke=!!S.specularMap,ue=!!S.specularColorMap,We=!!S.specularIntensityMap,I=J&&!!S.transmissionMap,he=J&&!!S.thicknessMap,ne=!!S.gradientMap,ge=!!S.alphaMap,re=S.alphaTest>0,te=!!S.alphaHash,Ee=!!S.extensions;let He=Dr;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(He=r.toneMapping);const vt={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:Be,fragmentShader:K,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:be,batchingColor:be&&O._colorsTexture!==null,instancing:$e,instancingColor:$e&&O.instanceColor!==null,instancingMorph:$e&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Tn,alphaToCoverage:!!S.alphaToCoverage,map:rt,matcap:ot,envMap:Ae,envMapMode:Ae&&q.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:xt,bumpMap:Je,normalMap:Y,displacementMap:d&&Se,emissiveMap:tt,normalMapObjectSpace:Y&&S.normalMapType===zv,normalMapTangentSpace:Y&&S.normalMapType===Dg,metalnessMap:Le,roughnessMap:Ue,anisotropy:Tt,anisotropyMap:Z,clearcoat:D,clearcoatMap:Me,clearcoatNormalMap:ce,clearcoatRoughnessMap:Re,dispersion:M,iridescence:H,iridescenceMap:de,iridescenceThicknessMap:ie,sheen:Q,sheenColorMap:me,sheenRoughnessMap:Ve,specularMap:ke,specularColorMap:ue,specularIntensityMap:We,transmission:J,transmissionMap:I,thicknessMap:he,gradientMap:ne,opaque:S.transparent===!1&&S.blending===No&&S.alphaToCoverage===!1,alphaMap:ge,alphaTest:re,alphaHash:te,combine:S.combine,mapUv:rt&&_(S.map.channel),aoMapUv:L&&_(S.aoMap.channel),lightMapUv:xt&&_(S.lightMap.channel),bumpMapUv:Je&&_(S.bumpMap.channel),normalMapUv:Y&&_(S.normalMap.channel),displacementMapUv:Se&&_(S.displacementMap.channel),emissiveMapUv:tt&&_(S.emissiveMap.channel),metalnessMapUv:Le&&_(S.metalnessMap.channel),roughnessMapUv:Ue&&_(S.roughnessMap.channel),anisotropyMapUv:Z&&_(S.anisotropyMap.channel),clearcoatMapUv:Me&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(S.sheenRoughnessMap.channel),specularMapUv:ke&&_(S.specularMap.channel),specularColorMapUv:ue&&_(S.specularColorMap.channel),specularIntensityMapUv:We&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:he&&_(S.thicknessMap.channel),alphaMapUv:ge&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Y||Tt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(rt||ge),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:we,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,decodeVideoTexture:rt&&S.map.isVideoTexture===!0&&ft.getTransfer(S.map.colorSpace)===wt,decodeVideoTextureEmissive:tt&&S.emissiveMap.isVideoTexture===!0&&ft.getTransfer(S.emissiveMap.colorSpace)===wt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===er,flipSided:S.side===Qn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(x(y,S),T(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function x(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function T(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const y=g[S.type];let C;if(y){const U=Qi[y];C=Fx.clone(U.uniforms)}else C=S.uniforms;return C}function E(S,y){let C;for(let U=0,O=u.length;U<O;U++){const W=u[U];if(W.cacheKey===y){C=W,++C.usedTimes;break}}return C===void 0&&(C=new V1(r,y,S,s),u.push(C)),C}function w(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:R}}function q1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Y1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function em(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function tm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Y1),n.length>1&&n.sort(d||em),i.length>1&&i.sort(d||em)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function $1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new tm,r.set(n,[o])):i>=s.length?(o=new tm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function j1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Oe};break;case"SpotLight":t={position:new k,direction:new k,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function K1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Z1=0;function J1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Q1(r){const e=new j1,t=K1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,s=new Ke,o=new Ke;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,T=0,v=0,E=0,w=0,b=0;c.sort(J1);for(let S=0,y=c.length;S<y;S++){const C=c[S],U=C.color,O=C.intensity,W=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*O,h+=U.g*O,d+=U.b*O;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],O);b++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const q=C.shadow,G=t.get(C);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=C.shadow.matrix,x++}n.directional[f]=V,f++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(U).multiplyScalar(O),V.distance=W,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[_]=V;const q=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,q.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=q.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=X,v++}_++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(U).multiplyScalar(O),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=V,m++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const q=C.shadow,G=t.get(C);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=V,g++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(O),V.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==T||R.numSpotShadows!==v||R.numSpotMaps!==E||R.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=T,R.numSpotShadows=v,R.numSpotMaps=E,R.numLightProbes=b,n.version=Z1++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const T=c[p];if(T.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(T.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function nm(r){const e=new Q1(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function eM(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new nm(r),e.set(i,[a])):s>=o.length?(a=new nm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const tM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iM(r,e,t){let n=new rf;const i=new Xe,s=new Xe,o=new _t,a=new Qx({depthPacking:kv}),l=new ey,c={},u=t.maxTextureSize,h={[lr]:Qn,[Qn]:lr,[er]:er},d=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:tM,fragmentShader:nM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new qn;g.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yg;let p=this.type;this.render=function(w,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),y=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),U=r.state;U.setBlending(rs),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==vr&&this.type===vr,W=p===vr&&this.type!==vr;for(let X=0,V=w.length;X<V;X++){const q=w[X],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ee=G.getFrameExtents();if(i.multiply(ee),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ee.x),i.x=s.x*ee.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ee.y),i.y=s.y*ee.y,G.mapSize.y=s.y)),G.map===null||O===!0||W===!0){const ae=this.type!==vr?{minFilter:yn,magFilter:yn}:{};G.map!==null&&G.map.dispose(),G.map=new xi(i.x,i.y,ae),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const P=G.getViewportCount();for(let ae=0;ae<P;ae++){const we=G.getViewport(ae);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),U.viewport(o),G.updateMatrices(q,ae),n=G.getFrustum(),v(b,R,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===vr&&x(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,y,C)};function x(w,b){const R=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new xi(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,R,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,R,f,_,null)}function T(w,b,R,S){let y=null;const C=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const U=y.uuid,O=b.uuid;let W=c[U];W===void 0&&(W={},c[U]=W);let X=W[O];X===void 0&&(X=y.clone(),W[O]=X,b.addEventListener("dispose",E)),y=X}if(y.visible=b.visible,y.wireframe=b.wireframe,S===vr?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=r.properties.get(y);U.light=R}return y}function v(w,b,R,S,y){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===vr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const O=e.update(w),W=w.material;if(Array.isArray(W)){const X=O.groups;for(let V=0,q=X.length;V<q;V++){const G=X[V],ee=W[G.materialIndex];if(ee&&ee.visible){const P=T(w,ee,S,y);w.onBeforeShadow(r,w,b,R,O,P,G),r.renderBufferDirect(R,null,O,P,w,G),w.onAfterShadow(r,w,b,R,O,P,G)}}}else if(W.visible){const X=T(w,W,S,y);w.onBeforeShadow(r,w,b,R,O,X,null),r.renderBufferDirect(R,null,O,X,w,null),w.onAfterShadow(r,w,b,R,O,X,null)}}const U=w.children;for(let O=0,W=U.length;O<W;O++)v(U[O],b,R,S,y)}function E(w){w.target.removeEventListener("dispose",E);for(const R in c){const S=c[R],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const rM={[Eh]:wh,[Ah]:Ph,[Rh]:Dh,[qo]:Ch,[wh]:Eh,[Ph]:Ah,[Dh]:Rh,[Ch]:qo};function sM(r,e){function t(){let I=!1;const he=new _t;let ne=null;const ge=new _t(0,0,0,0);return{setMask:function(re){ne!==re&&!I&&(r.colorMask(re,re,re,re),ne=re)},setLocked:function(re){I=re},setClear:function(re,te,Ee,He,vt){vt===!0&&(re*=He,te*=He,Ee*=He),he.set(re,te,Ee,He),ge.equals(he)===!1&&(r.clearColor(re,te,Ee,He),ge.copy(he))},reset:function(){I=!1,ne=null,ge.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,ne=null,ge=null,re=null;return{setReversed:function(te){if(he!==te){const Ee=e.get("EXT_clip_control");te?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),he=te;const He=re;re=null,this.setClear(He)}},getReversed:function(){return he},setTest:function(te){te?le(r.DEPTH_TEST):xe(r.DEPTH_TEST)},setMask:function(te){ne!==te&&!I&&(r.depthMask(te),ne=te)},setFunc:function(te){if(he&&(te=rM[te]),ge!==te){switch(te){case Eh:r.depthFunc(r.NEVER);break;case wh:r.depthFunc(r.ALWAYS);break;case Ah:r.depthFunc(r.LESS);break;case qo:r.depthFunc(r.LEQUAL);break;case Rh:r.depthFunc(r.EQUAL);break;case Ch:r.depthFunc(r.GEQUAL);break;case Ph:r.depthFunc(r.GREATER);break;case Dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=te}},setLocked:function(te){I=te},setClear:function(te){re!==te&&(he&&(te=1-te),r.clearDepth(te),re=te)},reset:function(){I=!1,ne=null,ge=null,re=null,he=!1}}}function i(){let I=!1,he=null,ne=null,ge=null,re=null,te=null,Ee=null,He=null,vt=null;return{setTest:function(ye){I||(ye?le(r.STENCIL_TEST):xe(r.STENCIL_TEST))},setMask:function(ye){he!==ye&&!I&&(r.stencilMask(ye),he=ye)},setFunc:function(ye,Ie,nt){(ne!==ye||ge!==Ie||re!==nt)&&(r.stencilFunc(ye,Ie,nt),ne=ye,ge=Ie,re=nt)},setOp:function(ye,Ie,nt){(te!==ye||Ee!==Ie||He!==nt)&&(r.stencilOp(ye,Ie,nt),te=ye,Ee=Ie,He=nt)},setLocked:function(ye){I=ye},setClear:function(ye){vt!==ye&&(r.clearStencil(ye),vt=ye)},reset:function(){I=!1,he=null,ne=null,ge=null,re=null,te=null,Ee=null,He=null,vt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,T=null,v=null,E=null,w=null,b=new Oe(0,0,0),R=0,S=!1,y=null,C=null,U=null,O=null,W=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=q>=2);let ee=null,P={};const ae=r.getParameter(r.SCISSOR_BOX),we=r.getParameter(r.VIEWPORT),Be=new _t().fromArray(ae),K=new _t().fromArray(we);function se(I,he,ne,ge){const re=new Uint8Array(4),te=r.createTexture();r.bindTexture(I,te),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ee=0;Ee<ne;Ee++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(he+Ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return te}const ve={};ve[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(r.DEPTH_TEST),o.setFunc(qo),Je(!1),Y(Vf),le(r.CULL_FACE),L(rs);function le(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function xe(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function $e(I,he){return h[I]!==he?(r.bindFramebuffer(I,he),h[I]=he,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=he),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=he),!0):!1}function be(I,he){let ne=f,ge=!1;if(I){ne=d.get(he),ne===void 0&&(ne=[],d.set(he,ne));const re=I.textures;if(ne.length!==re.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let te=0,Ee=re.length;te<Ee;te++)ne[te]=r.COLOR_ATTACHMENT0+te;ne.length=re.length,ge=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,ge=!0);ge&&r.drawBuffers(ne)}function rt(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const ot={[Os]:r.FUNC_ADD,[lv]:r.FUNC_SUBTRACT,[cv]:r.FUNC_REVERSE_SUBTRACT};ot[uv]=r.MIN,ot[hv]=r.MAX;const Ae={[dv]:r.ZERO,[fv]:r.ONE,[pv]:r.SRC_COLOR,[bh]:r.SRC_ALPHA,[yv]:r.SRC_ALPHA_SATURATE,[vv]:r.DST_COLOR,[gv]:r.DST_ALPHA,[mv]:r.ONE_MINUS_SRC_COLOR,[Mh]:r.ONE_MINUS_SRC_ALPHA,[xv]:r.ONE_MINUS_DST_COLOR,[_v]:r.ONE_MINUS_DST_ALPHA,[Sv]:r.CONSTANT_COLOR,[Tv]:r.ONE_MINUS_CONSTANT_COLOR,[bv]:r.CONSTANT_ALPHA,[Mv]:r.ONE_MINUS_CONSTANT_ALPHA};function L(I,he,ne,ge,re,te,Ee,He,vt,ye){if(I===rs){_===!0&&(xe(r.BLEND),_=!1);return}if(_===!1&&(le(r.BLEND),_=!0),I!==av){if(I!==m||ye!==S){if((p!==Os||v!==Os)&&(r.blendEquation(r.FUNC_ADD),p=Os,v=Os),ye)switch(I){case No:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ji:r.blendFunc(r.ONE,r.ONE);break;case Gf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case No:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ji:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Gf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,T=null,E=null,w=null,b.set(0,0,0),R=0,m=I,S=ye}return}re=re||he,te=te||ne,Ee=Ee||ge,(he!==p||re!==v)&&(r.blendEquationSeparate(ot[he],ot[re]),p=he,v=re),(ne!==x||ge!==T||te!==E||Ee!==w)&&(r.blendFuncSeparate(Ae[ne],Ae[ge],Ae[te],Ae[Ee]),x=ne,T=ge,E=te,w=Ee),(He.equals(b)===!1||vt!==R)&&(r.blendColor(He.r,He.g,He.b,vt),b.copy(He),R=vt),m=I,S=!1}function xt(I,he){I.side===er?xe(r.CULL_FACE):le(r.CULL_FACE);let ne=I.side===Qn;he&&(ne=!ne),Je(ne),I.blending===No&&I.transparent===!1?L(rs):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const ge=I.stencilWrite;a.setTest(ge),ge&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),tt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(r.SAMPLE_ALPHA_TO_COVERAGE):xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Je(I){y!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),y=I)}function Y(I){I!==rv?(le(r.CULL_FACE),I!==C&&(I===Vf?r.cullFace(r.BACK):I===sv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xe(r.CULL_FACE),C=I}function Se(I){I!==U&&(V&&r.lineWidth(I),U=I)}function tt(I,he,ne){I?(le(r.POLYGON_OFFSET_FILL),(O!==he||W!==ne)&&(r.polygonOffset(he,ne),O=he,W=ne)):xe(r.POLYGON_OFFSET_FILL)}function Le(I){I?le(r.SCISSOR_TEST):xe(r.SCISSOR_TEST)}function Ue(I){I===void 0&&(I=r.TEXTURE0+X-1),ee!==I&&(r.activeTexture(I),ee=I)}function Tt(I,he,ne){ne===void 0&&(ee===null?ne=r.TEXTURE0+X-1:ne=ee);let ge=P[ne];ge===void 0&&(ge={type:void 0,texture:void 0},P[ne]=ge),(ge.type!==I||ge.texture!==he)&&(ee!==ne&&(r.activeTexture(ne),ee=ne),r.bindTexture(I,he||ve[I]),ge.type=I,ge.texture=he)}function D(){const I=P[ee];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(I){Be.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Be.copy(I))}function Ve(I){K.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function ke(I,he){let ne=c.get(he);ne===void 0&&(ne=new WeakMap,c.set(he,ne));let ge=ne.get(I);ge===void 0&&(ge=r.getUniformBlockIndex(he,I.name),ne.set(I,ge))}function ue(I,he){const ge=c.get(he).get(I);l.get(he)!==ge&&(r.uniformBlockBinding(he,ge,I.__bindingPointIndex),l.set(he,ge))}function We(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,P={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,T=null,v=null,E=null,w=null,b=new Oe(0,0,0),R=0,S=!1,y=null,C=null,U=null,O=null,W=null,Be.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:xe,bindFramebuffer:$e,drawBuffers:be,useProgram:rt,setBlending:L,setMaterial:xt,setFlipSided:Je,setCullFace:Y,setLineWidth:Se,setPolygonOffset:tt,setScissorTest:Le,activeTexture:Ue,bindTexture:Tt,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:H,texImage2D:de,texImage3D:ie,updateUBOMapping:ke,uniformBlockBinding:ue,texStorage2D:ce,texStorage3D:Re,texSubImage2D:Q,texSubImage3D:J,compressedTexSubImage2D:Z,compressedTexSubImage3D:Me,scissor:me,viewport:Ve,reset:We}}function oM(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,M){return f?new OffscreenCanvas(D,M):ul("canvas")}function _(D,M,H){let Q=1;const J=Tt(D);if((J.width>H||J.height>H)&&(Q=H/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Z=Math.floor(Q*J.width),Me=Math.floor(Q*J.height);h===void 0&&(h=g(Z,Me));const ce=M?g(Z,Me):h;return ce.width=Z,ce.height=Me,ce.getContext("2d").drawImage(D,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+Me+")."),ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){r.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(D,M,H,Q,J=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Z=M;if(M===r.RED&&(H===r.FLOAT&&(Z=r.R32F),H===r.HALF_FLOAT&&(Z=r.R16F),H===r.UNSIGNED_BYTE&&(Z=r.R8)),M===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.R8UI),H===r.UNSIGNED_SHORT&&(Z=r.R16UI),H===r.UNSIGNED_INT&&(Z=r.R32UI),H===r.BYTE&&(Z=r.R8I),H===r.SHORT&&(Z=r.R16I),H===r.INT&&(Z=r.R32I)),M===r.RG&&(H===r.FLOAT&&(Z=r.RG32F),H===r.HALF_FLOAT&&(Z=r.RG16F),H===r.UNSIGNED_BYTE&&(Z=r.RG8)),M===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RG8UI),H===r.UNSIGNED_SHORT&&(Z=r.RG16UI),H===r.UNSIGNED_INT&&(Z=r.RG32UI),H===r.BYTE&&(Z=r.RG8I),H===r.SHORT&&(Z=r.RG16I),H===r.INT&&(Z=r.RG32I)),M===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),H===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),H===r.UNSIGNED_INT&&(Z=r.RGB32UI),H===r.BYTE&&(Z=r.RGB8I),H===r.SHORT&&(Z=r.RGB16I),H===r.INT&&(Z=r.RGB32I)),M===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),H===r.UNSIGNED_INT&&(Z=r.RGBA32UI),H===r.BYTE&&(Z=r.RGBA8I),H===r.SHORT&&(Z=r.RGBA16I),H===r.INT&&(Z=r.RGBA32I)),M===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),M===r.RGBA){const Me=J?kc:ft.getTransfer(Q);H===r.FLOAT&&(Z=r.RGBA32F),H===r.HALF_FLOAT&&(Z=r.RGBA16F),H===r.UNSIGNED_BYTE&&(Z=Me===wt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(D,M){let H;return D?M===null||M===Ks||M===sl?H=r.DEPTH24_STENCIL8:M===qi?H=r.DEPTH32F_STENCIL8:M===rl&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ks||M===sl?H=r.DEPTH_COMPONENT24:M===qi?H=r.DEPTH_COMPONENT32F:M===rl&&(H=r.DEPTH_COMPONENT16),H}function E(D,M){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==yn&&D.minFilter!==mn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function w(D){const M=D.target;M.removeEventListener("dispose",w),R(M),M.isVideoTexture&&u.delete(M)}function b(D){const M=D.target;M.removeEventListener("dispose",b),y(M)}function R(D){const M=n.get(D);if(M.__webglInit===void 0)return;const H=D.source,Q=d.get(H);if(Q){const J=Q[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(D),Object.keys(Q).length===0&&d.delete(H)}n.remove(D)}function S(D){const M=n.get(D);r.deleteTexture(M.__webglTexture);const H=D.source,Q=d.get(H);delete Q[M.__cacheKey],o.memory.textures--}function y(D){const M=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let J=0;J<M.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(M.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[Q]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=D.textures;for(let Q=0,J=H.length;Q<J;Q++){const Z=n.get(H[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(H[Q])}n.remove(D)}let C=0;function U(){C=0}function O(){const D=C;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),C+=1,D}function W(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function X(D,M){const H=n.get(D);if(D.isVideoTexture&&Le(D),D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){const Q=D.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(H,D,M);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+M)}function V(D,M){const H=n.get(D);if(D.version>0&&H.__version!==D.version){ve(H,D,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+M)}function q(D,M){const H=n.get(D);if(D.version>0&&H.__version!==D.version){ve(H,D,M);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+M)}function G(D,M){const H=n.get(D);if(D.version>0&&H.__version!==D.version){le(H,D,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+M)}const ee={[on]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[wn]:r.MIRRORED_REPEAT},P={[yn]:r.NEAREST,[Tg]:r.NEAREST_MIPMAP_NEAREST,[Ua]:r.NEAREST_MIPMAP_LINEAR,[mn]:r.LINEAR,[yc]:r.LINEAR_MIPMAP_NEAREST,[wr]:r.LINEAR_MIPMAP_LINEAR},ae={[Vv]:r.NEVER,[Yv]:r.ALWAYS,[Gv]:r.LESS,[Ug]:r.LEQUAL,[Hv]:r.EQUAL,[qv]:r.GEQUAL,[Wv]:r.GREATER,[Xv]:r.NOTEQUAL};function we(D,M){if(M.type===qi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===mn||M.magFilter===yc||M.magFilter===Ua||M.magFilter===wr||M.minFilter===mn||M.minFilter===yc||M.minFilter===Ua||M.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ee[M.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ee[M.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ee[M.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,P[M.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,P[M.minFilter]),M.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===yn||M.minFilter!==Ua&&M.minFilter!==wr||M.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Be(D,M){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",w));const Q=M.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const Z=W(M);if(Z!==D.__cacheKey){J[Z]===void 0&&(J[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[Z].usedTimes++;const Me=J[D.__cacheKey];Me!==void 0&&(J[D.__cacheKey].usedTimes--,Me.usedTimes===0&&S(M)),D.__cacheKey=Z,D.__webglTexture=J[Z].texture}return H}function K(D,M,H){return Math.floor(Math.floor(D/H)/M)}function se(D,M,H,Q){const Z=D.updateRanges;if(Z.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,H,Q,M.data);else{Z.sort((ie,me)=>ie.start-me.start);let Me=0;for(let ie=1;ie<Z.length;ie++){const me=Z[Me],Ve=Z[ie],ke=me.start+me.count,ue=K(Ve.start,M.width,4),We=K(me.start,M.width,4);Ve.start<=ke+1&&ue===We&&K(Ve.start+Ve.count-1,M.width,4)===ue?me.count=Math.max(me.count,Ve.start+Ve.count-me.start):(++Me,Z[Me]=Ve)}Z.length=Me+1;const ce=r.getParameter(r.UNPACK_ROW_LENGTH),Re=r.getParameter(r.UNPACK_SKIP_PIXELS),de=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let ie=0,me=Z.length;ie<me;ie++){const Ve=Z[ie],ke=Math.floor(Ve.start/4),ue=Math.ceil(Ve.count/4),We=ke%M.width,I=Math.floor(ke/M.width),he=ue,ne=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,We,I,he,ne,H,Q,M.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Re),r.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function ve(D,M,H){let Q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=r.TEXTURE_3D);const J=Be(D,M),Z=M.source;t.bindTexture(Q,D.__webglTexture,r.TEXTURE0+H);const Me=n.get(Z);if(Z.version!==Me.__version||J===!0){t.activeTexture(r.TEXTURE0+H);const ce=ft.getPrimaries(ft.workingColorSpace),Re=M.colorSpace===Jr?null:ft.getPrimaries(M.colorSpace),de=M.colorSpace===Jr||ce===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let ie=_(M.image,!1,i.maxTextureSize);ie=Ue(M,ie);const me=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type);let ke=T(M.internalFormat,me,Ve,M.colorSpace,M.isVideoTexture);we(Q,M);let ue;const We=M.mipmaps,I=M.isVideoTexture!==!0,he=Me.__version===void 0||J===!0,ne=Z.dataReady,ge=E(M,ie);if(M.isDepthTexture)ke=v(M.format===al,M.type),he&&(I?t.texStorage2D(r.TEXTURE_2D,1,ke,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,ke,ie.width,ie.height,0,me,Ve,null));else if(M.isDataTexture)if(We.length>0){I&&he&&t.texStorage2D(r.TEXTURE_2D,ge,ke,We[0].width,We[0].height);for(let re=0,te=We.length;re<te;re++)ue=We[re],I?ne&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ue.width,ue.height,me,Ve,ue.data):t.texImage2D(r.TEXTURE_2D,re,ke,ue.width,ue.height,0,me,Ve,ue.data);M.generateMipmaps=!1}else I?(he&&t.texStorage2D(r.TEXTURE_2D,ge,ke,ie.width,ie.height),ne&&se(M,ie,me,Ve)):t.texImage2D(r.TEXTURE_2D,0,ke,ie.width,ie.height,0,me,Ve,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,ke,We[0].width,We[0].height,ie.depth);for(let re=0,te=We.length;re<te;re++)if(ue=We[re],M.format!==Jn)if(me!==null)if(I){if(ne)if(M.layerUpdates.size>0){const Ee=Up(ue.width,ue.height,M.format,M.type);for(const He of M.layerUpdates){const vt=ue.data.subarray(He*Ee/ue.data.BYTES_PER_ELEMENT,(He+1)*Ee/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,He,ue.width,ue.height,1,me,vt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ue.width,ue.height,ie.depth,me,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,ke,ue.width,ue.height,ie.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ne&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ue.width,ue.height,ie.depth,me,Ve,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,ke,ue.width,ue.height,ie.depth,0,me,Ve,ue.data)}else{I&&he&&t.texStorage2D(r.TEXTURE_2D,ge,ke,We[0].width,We[0].height);for(let re=0,te=We.length;re<te;re++)ue=We[re],M.format!==Jn?me!==null?I?ne&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,ue.width,ue.height,me,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,re,ke,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ne&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ue.width,ue.height,me,Ve,ue.data):t.texImage2D(r.TEXTURE_2D,re,ke,ue.width,ue.height,0,me,Ve,ue.data)}else if(M.isDataArrayTexture)if(I){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,ke,ie.width,ie.height,ie.depth),ne)if(M.layerUpdates.size>0){const re=Up(ie.width,ie.height,M.format,M.type);for(const te of M.layerUpdates){const Ee=ie.data.subarray(te*re/ie.data.BYTES_PER_ELEMENT,(te+1)*re/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,ie.width,ie.height,1,me,Ve,Ee)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,me,Ve,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,ie.width,ie.height,ie.depth,0,me,Ve,ie.data);else if(M.isData3DTexture)I?(he&&t.texStorage3D(r.TEXTURE_3D,ge,ke,ie.width,ie.height,ie.depth),ne&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,me,Ve,ie.data)):t.texImage3D(r.TEXTURE_3D,0,ke,ie.width,ie.height,ie.depth,0,me,Ve,ie.data);else if(M.isFramebufferTexture){if(he)if(I)t.texStorage2D(r.TEXTURE_2D,ge,ke,ie.width,ie.height);else{let re=ie.width,te=ie.height;for(let Ee=0;Ee<ge;Ee++)t.texImage2D(r.TEXTURE_2D,Ee,ke,re,te,0,me,Ve,null),re>>=1,te>>=1}}else if(We.length>0){if(I&&he){const re=Tt(We[0]);t.texStorage2D(r.TEXTURE_2D,ge,ke,re.width,re.height)}for(let re=0,te=We.length;re<te;re++)ue=We[re],I?ne&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,me,Ve,ue):t.texImage2D(r.TEXTURE_2D,re,ke,me,Ve,ue);M.generateMipmaps=!1}else if(I){if(he){const re=Tt(ie);t.texStorage2D(r.TEXTURE_2D,ge,ke,re.width,re.height)}ne&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,Ve,ie)}else t.texImage2D(r.TEXTURE_2D,0,ke,me,Ve,ie);m(M)&&p(Q),Me.__version=Z.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function le(D,M,H){if(M.image.length!==6)return;const Q=Be(D,M),J=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+H);const Z=n.get(J);if(J.version!==Z.__version||Q===!0){t.activeTexture(r.TEXTURE0+H);const Me=ft.getPrimaries(ft.workingColorSpace),ce=M.colorSpace===Jr?null:ft.getPrimaries(M.colorSpace),Re=M.colorSpace===Jr||Me===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,me=[];for(let te=0;te<6;te++)!de&&!ie?me[te]=_(M.image[te],!0,i.maxCubemapSize):me[te]=ie?M.image[te].image:M.image[te],me[te]=Ue(M,me[te]);const Ve=me[0],ke=s.convert(M.format,M.colorSpace),ue=s.convert(M.type),We=T(M.internalFormat,ke,ue,M.colorSpace),I=M.isVideoTexture!==!0,he=Z.__version===void 0||Q===!0,ne=J.dataReady;let ge=E(M,Ve);we(r.TEXTURE_CUBE_MAP,M);let re;if(de){I&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,We,Ve.width,Ve.height);for(let te=0;te<6;te++){re=me[te].mipmaps;for(let Ee=0;Ee<re.length;Ee++){const He=re[Ee];M.format!==Jn?ke!==null?I?ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,He.width,He.height,ke,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,We,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,He.width,He.height,ke,ue,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,We,He.width,He.height,0,ke,ue,He.data)}}}else{if(re=M.mipmaps,I&&he){re.length>0&&ge++;const te=Tt(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,We,te.width,te.height)}for(let te=0;te<6;te++)if(ie){I?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,me[te].width,me[te].height,ke,ue,me[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,me[te].width,me[te].height,0,ke,ue,me[te].data);for(let Ee=0;Ee<re.length;Ee++){const vt=re[Ee].image[te].image;I?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,vt.width,vt.height,ke,ue,vt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,We,vt.width,vt.height,0,ke,ue,vt.data)}}else{I?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ke,ue,me[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,ke,ue,me[te]);for(let Ee=0;Ee<re.length;Ee++){const He=re[Ee];I?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,ke,ue,He.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,We,ke,ue,He.image[te])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),Z.__version=J.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function xe(D,M,H,Q,J,Z){const Me=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),Re=T(H.internalFormat,Me,ce,H.colorSpace),de=n.get(M),ie=n.get(H);if(ie.__renderTarget=M,!de.__hasExternalTextures){const me=Math.max(1,M.width>>Z),Ve=Math.max(1,M.height>>Z);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,Re,me,Ve,M.depth,0,Me,ce,null):t.texImage2D(J,Z,Re,me,Ve,0,Me,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),tt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,ie.__webglTexture,0,Se(M)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,ie.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(D,M,H){if(r.bindRenderbuffer(r.RENDERBUFFER,D),M.depthBuffer){const Q=M.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,Z=v(M.stencilBuffer,J),Me=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=Se(M);tt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,Z,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,Z,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Z,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,D)}else{const Q=M.textures;for(let J=0;J<Q.length;J++){const Z=Q[J],Me=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),Re=T(Z.internalFormat,Me,ce,Z.colorSpace),de=Se(M);H&&tt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,Re,M.width,M.height):tt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,Re,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Re,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const J=Q.__webglTexture,Z=Se(M);if(M.depthTexture.format===ol)tt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(M.depthTexture.format===al)tt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function rt(D){const M=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const Q=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Q}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Q=D.texture.mipmaps;Q&&Q.length>0?be(M.__webglFramebuffer[0],D):be(M.__webglFramebuffer,D)}else if(H){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=r.createRenderbuffer(),$e(M.__webglDepthbuffer[Q],D,!1);else{const J=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Z)}}else{const Q=D.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),$e(M.__webglDepthbuffer,D,!1);else{const J=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Z)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(D,M,H){const Q=n.get(D);M!==void 0&&xe(Q.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&rt(D)}function Ae(D){const M=D.texture,H=n.get(D),Q=n.get(M);D.addEventListener("dispose",b);const J=D.textures,Z=D.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=M.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let Re=0;Re<M.mipmaps.length;Re++)H.__webglFramebuffer[ce][Re]=r.createFramebuffer()}else H.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)H.__webglFramebuffer[ce]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Me)for(let ce=0,Re=J.length;ce<Re;ce++){const de=n.get(J[ce]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&tt(D)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const Re=J[ce];H.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[ce]);const de=s.convert(Re.format,Re.colorSpace),ie=s.convert(Re.type),me=T(Re.internalFormat,de,ie,Re.colorSpace,D.isXRRenderTarget===!0),Ve=Se(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,me,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,H.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),$e(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),we(r.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)xe(H.__webglFramebuffer[ce][Re],D,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re);else xe(H.__webglFramebuffer[ce],D,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,Re=J.length;ce<Re;ce++){const de=J[ce],ie=n.get(de);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),we(r.TEXTURE_2D,de),xe(H.__webglFramebuffer,D,de,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),m(de)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),we(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)xe(H.__webglFramebuffer[Re],D,M,r.COLOR_ATTACHMENT0,ce,Re);else xe(H.__webglFramebuffer,D,M,r.COLOR_ATTACHMENT0,ce,0);m(M)&&p(ce),t.unbindTexture()}D.depthBuffer&&rt(D)}function L(D){const M=D.textures;for(let H=0,Q=M.length;H<Q;H++){const J=M[H];if(m(J)){const Z=x(D),Me=n.get(J).__webglTexture;t.bindTexture(Z,Me),p(Z),t.unbindTexture()}}}const xt=[],Je=[];function Y(D){if(D.samples>0){if(tt(D)===!1){const M=D.textures,H=D.width,Q=D.height;let J=r.COLOR_BUFFER_BIT;const Z=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=n.get(D),ce=M.length>1;if(ce)for(let de=0;de<M.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Re=D.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let de=0;de<M.length;de++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);const ie=n.get(M[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,H,Q,0,0,H,Q,J,r.NEAREST),l===!0&&(xt.length=0,Je.length=0,xt.push(r.COLOR_ATTACHMENT0+de),D.depthBuffer&&D.resolveDepthBuffer===!1&&(xt.push(Z),Je.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Je)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let de=0;de<M.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);const ie=n.get(M[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const M=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Se(D){return Math.min(i.maxSamples,D.samples)}function tt(D){const M=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(D){const M=o.render.frame;u.get(D)!==M&&(u.set(D,M),D.update())}function Ue(D,M){const H=D.colorSpace,Q=D.format,J=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==Tn&&H!==Jr&&(ft.getTransfer(H)===wt?(Q!==Jn||J!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Tt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=ot,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=tt}function aM(r,e){function t(n,i=Jr){let s;const o=ft.getTransfer(i);if(n===cr)return r.UNSIGNED_BYTE;if(n===Xd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===qd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Eg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===bg)return r.BYTE;if(n===Mg)return r.SHORT;if(n===rl)return r.UNSIGNED_SHORT;if(n===Wd)return r.INT;if(n===Ks)return r.UNSIGNED_INT;if(n===qi)return r.FLOAT;if(n===Yi)return r.HALF_FLOAT;if(n===wg)return r.ALPHA;if(n===Ag)return r.RGB;if(n===Jn)return r.RGBA;if(n===ol)return r.DEPTH_COMPONENT;if(n===al)return r.DEPTH_STENCIL;if(n===Yd)return r.RED;if(n===$d)return r.RED_INTEGER;if(n===Rg)return r.RG;if(n===jd)return r.RG_INTEGER;if(n===Kd)return r.RGBA_INTEGER;if(n===Sc||n===Tc||n===bc||n===Mc)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ih||n===Lh||n===Nh||n===Oh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ih)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fh||n===Bh||n===kh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fh||n===Bh)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zh||n===Vh||n===Gh||n===Hh||n===Wh||n===Xh||n===qh||n===Yh||n===$h||n===jh||n===Kh||n===Zh||n===Jh||n===Qh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===zh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$h)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ec||n===ed||n===td)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ec)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ed)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===td)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cg||n===nd||n===id||n===rd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ec)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===id)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const lM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new ln,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mt({vertexShader:lM,fragmentShader:cM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new la(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hM extends aa{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new uM,m=t.getContextAttributes();let p=null,x=null;const T=[],v=[],E=new Xe;let w=null;const b=new Rn;b.viewport=new _t;const R=new Rn;R.viewport=new _t;const S=[b,R],y=new by;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=T[K];return se===void 0&&(se=new ku,T[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=T[K];return se===void 0&&(se=new ku,T[K]=se),se.getGripSpace()},this.getHand=function(K){let se=T[K];return se===void 0&&(se=new ku,T[K]=se),se.getHandSpace()};function O(K){const se=v.indexOf(K.inputSource);if(se===-1)return;const ve=T[se];ve!==void 0&&(ve.update(K.inputSource,K.frame,c||o),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let K=0;K<T.length;K++){const se=v[K];se!==null&&(v[K]=null,T[K].disconnect(se))}C=null,U=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,x=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,le=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=m.stencil?al:ol,le=m.stencil?sl:Ks);const $e={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer($e),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new xi(d.textureWidth,d.textureHeight,{format:Jn,type:cr,depthTexture:new qg(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new xi(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(K){for(let se=0;se<K.removed.length;se++){const ve=K.removed[se],le=v.indexOf(ve);le>=0&&(v[le]=null,T[le].disconnect(ve))}for(let se=0;se<K.added.length;se++){const ve=K.added[se];let le=v.indexOf(ve);if(le===-1){for(let $e=0;$e<T.length;$e++)if($e>=v.length){v.push(ve),le=$e;break}else if(v[$e]===null){v[$e]=ve,le=$e;break}if(le===-1)break}const xe=T[le];xe&&xe.connect(ve)}}const V=new k,q=new k;function G(K,se,ve){V.setFromMatrixPosition(se.matrixWorld),q.setFromMatrixPosition(ve.matrixWorld);const le=V.distanceTo(q),xe=se.projectionMatrix.elements,$e=ve.projectionMatrix.elements,be=xe[14]/(xe[10]-1),rt=xe[14]/(xe[10]+1),ot=(xe[9]+1)/xe[5],Ae=(xe[9]-1)/xe[5],L=(xe[8]-1)/xe[0],xt=($e[8]+1)/$e[0],Je=be*L,Y=be*xt,Se=le/(-L+xt),tt=Se*-L;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(tt),K.translateZ(Se),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Le=be+Se,Ue=rt+Se,Tt=Je-tt,D=Y+(le-tt),M=ot*rt/Ue*Le,H=Ae*rt/Ue*Le;K.projectionMatrix.makePerspective(Tt,D,M,H,Le,Ue),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ee(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let se=K.near,ve=K.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),y.near=R.near=b.near=se,y.far=R.far=b.far=ve,(C!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,U=y.far),b.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,y.layers.mask=b.layers.mask|R.layers.mask;const le=K.parent,xe=y.cameras;ee(y,le);for(let $e=0;$e<xe.length;$e++)ee(xe[$e],le);xe.length===2?G(y,b,R):y.projectionMatrix.copy(b.projectionMatrix),P(K,y,le)};function P(K,se,ve){ve===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=jo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ae=null;function we(K,se){if(u=se.getViewerPose(c||o),g=se,u!==null){const ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let le=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let be=0;be<ve.length;be++){const rt=ve[be];let ot=null;if(f!==null)ot=f.getViewport(rt);else{const L=h.getViewSubImage(d,rt);ot=L.viewport,be===0&&(e.setRenderTargetTextures(x,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(x))}let Ae=S[be];Ae===void 0&&(Ae=new Rn,Ae.layers.enable(be),Ae.viewport=new _t,S[be]=Ae),Ae.matrix.fromArray(rt.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(rt.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(ot.x,ot.y,ot.width,ot.height),be===0&&(y.matrix.copy(Ae.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Ae)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const be=h.getDepthInformation(ve[0]);be&&be.isValid&&be.texture&&_.init(e,be,i.renderState)}}for(let ve=0;ve<T.length;ve++){const le=v[ve],xe=T[ve];le!==null&&xe!==void 0&&xe.update(le,se,c||o)}ae&&ae(K,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const Be=new Zg;Be.setAnimationLoop(we),this.setAnimationLoop=function(K){ae=K},this.dispose=function(){}}}const Ts=new In,dM=new Ke;function fM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,kg(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,T,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),T=x.envMap,v=x.envMapRotation;T&&(m.envMap.value=T,Ts.copy(v),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),m.envMapRotation.value.setFromMatrix4(dM.makeRotationFromEuler(Ts)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pM(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){const v=T.program;n.uniformBlockBinding(x,v)}function c(x,T){let v=i[x.id];v===void 0&&(g(x),v=u(x),i[x.id]=v,x.addEventListener("dispose",m));const E=T.program;n.updateUBOMapping(x,E);const w=e.render.frame;s[x.id]!==w&&(d(x),s[x.id]=w)}function u(x){const T=h();x.__bindingPointIndex=T;const v=r.createBuffer(),E=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const T=i[x.id],v=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let w=0,b=v.length;w<b;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,y=R.length;S<y;S++){const C=R[S];if(f(C,w,S,E)===!0){const U=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let X=0;X<O.length;X++){const V=O[X],q=_(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,U+W,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,W),W+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,T,v,E){const w=x.value,b=T+"_"+v;if(E[b]===void 0)return typeof w=="number"||typeof w=="boolean"?E[b]=w:E[b]=w.clone(),!0;{const R=E[b];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return E[b]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(x){const T=x.uniforms;let v=0;const E=16;for(let b=0,R=T.length;b<R;b++){const S=Array.isArray(T[b])?T[b]:[T[b]];for(let y=0,C=S.length;y<C;y++){const U=S[y],O=Array.isArray(U.value)?U.value:[U.value];for(let W=0,X=O.length;W<X;W++){const V=O[W],q=_(V),G=v%E,ee=G%q.boundary,P=G+ee;v+=ee,P!==0&&E-P<q.storage&&(v+=E-P),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=q.storage}}}const w=v%E;return w>0&&(v+=E-w),x.__size=v,x.__cache={},this}function _(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),T}function m(x){const T=x.target;T.removeEventListener("dispose",m);const v=o.indexOf(T.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class mM{constructor(e={}){const{canvas:t=hx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=vn;let w=0,b=0,R=null,S=-1,y=null;const C=new _t,U=new _t;let O=null;const W=new Oe(0);let X=0,V=t.width,q=t.height,G=1,ee=null,P=null;const ae=new _t(0,0,V,q),we=new _t(0,0,V,q);let Be=!1;const K=new rf;let se=!1,ve=!1;const le=new Ke,xe=new Ke,$e=new k,be=new _t,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Ae(){return R===null?G:1}let L=n;function xt(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gd}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",te,!1),L===null){const z="webgl2";if(L=xt(z,A),L===null)throw xt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Je,Y,Se,tt,Le,Ue,Tt,D,M,H,Q,J,Z,Me,ce,Re,de,ie,me,Ve,ke,ue,We,I;function he(){Je=new Eb(L),Je.init(),ue=new aM(L,Je),Y=new vb(L,Je,e,ue),Se=new sM(L,Je),Y.reverseDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),tt=new Rb(L),Le=new q1,Ue=new oM(L,Je,Se,Le,Y,ue,tt),Tt=new yb(v),D=new Mb(v),M=new Ly(L),We=new gb(L,M),H=new wb(L,M,tt,We),Q=new Pb(L,H,M,tt),me=new Cb(L,Y,Ue),Re=new xb(Le),J=new X1(v,Tt,D,Je,Y,We,Re),Z=new fM(v,Le),Me=new $1,ce=new eM(Je),ie=new mb(v,Tt,D,Se,Q,f,l),de=new iM(v,Q,Y),I=new pM(L,tt,Y,Se),Ve=new _b(L,Je,tt),ke=new Ab(L,Je,tt),tt.programs=J.programs,v.capabilities=Y,v.extensions=Je,v.properties=Le,v.renderLists=Me,v.shadowMap=de,v.state=Se,v.info=tt}he();const ne=new hM(v,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=Je.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Je.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(V,q,!1))},this.getSize=function(A){return A.set(V,q)},this.setSize=function(A,z,j=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,q=z,t.width=Math.floor(A*G),t.height=Math.floor(z*G),j===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(V*G,q*G).floor()},this.setDrawingBufferSize=function(A,z,j){V=A,q=z,G=j,t.width=Math.floor(A*j),t.height=Math.floor(z*j),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(ae)},this.setViewport=function(A,z,j,$){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,z,j,$),Se.viewport(C.copy(ae).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(we)},this.setScissor=function(A,z,j,$){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,z,j,$),Se.scissor(U.copy(we).multiplyScalar(G).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(A){Se.setScissorTest(Be=A)},this.setOpaqueSort=function(A){ee=A},this.setTransparentSort=function(A){P=A},this.getClearColor=function(A){return A.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,j=!0){let $=0;if(A){let B=!1;if(R!==null){const oe=R.texture.format;B=oe===Kd||oe===jd||oe===$d}if(B){const oe=R.texture.type,pe=oe===cr||oe===Ks||oe===rl||oe===sl||oe===Xd||oe===qd,De=ie.getClearColor(),Te=ie.getClearAlpha(),ze=De.r,qe=De.g,Fe=De.b;pe?(g[0]=ze,g[1]=qe,g[2]=Fe,g[3]=Te,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=ze,_[1]=qe,_[2]=Fe,_[3]=Te,L.clearBufferiv(L.COLOR,0,_))}else $|=L.COLOR_BUFFER_BIT}z&&($|=L.DEPTH_BUFFER_BIT),j&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",te,!1),ie.dispose(),Me.dispose(),ce.dispose(),Le.dispose(),Tt.dispose(),D.dispose(),Q.dispose(),We.dispose(),I.dispose(),J.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",fe),ne.removeEventListener("sessionend",Ze),Ne.stop()};function ge(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=tt.autoReset,z=de.enabled,j=de.autoUpdate,$=de.needsUpdate,B=de.type;he(),tt.autoReset=A,de.enabled=z,de.autoUpdate=j,de.needsUpdate=$,de.type=B}function te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ee(A){const z=A.target;z.removeEventListener("dispose",Ee),He(z)}function He(A){vt(A),Le.remove(A)}function vt(A){const z=Le.get(A).programs;z!==void 0&&(z.forEach(function(j){J.releaseProgram(j)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,j,$,B,oe){z===null&&(z=rt);const pe=B.isMesh&&B.matrixWorld.determinant()<0,De=oi(A,z,j,$,B);Se.setMaterial($,pe);let Te=j.index,ze=1;if($.wireframe===!0){if(Te=H.getWireframeAttribute(j),Te===void 0)return;ze=2}const qe=j.drawRange,Fe=j.attributes.position;let Qe=qe.start*ze,Et=(qe.start+qe.count)*ze;oe!==null&&(Qe=Math.max(Qe,oe.start*ze),Et=Math.min(Et,(oe.start+oe.count)*ze)),Te!==null?(Qe=Math.max(Qe,0),Et=Math.min(Et,Te.count)):Fe!=null&&(Qe=Math.max(Qe,0),Et=Math.min(Et,Fe.count));const Ht=Et-Qe;if(Ht<0||Ht===1/0)return;We.setup(B,$,De,j,Te);let Ft,Pt=Ve;if(Te!==null&&(Ft=M.get(Te),Pt=ke,Pt.setIndex(Ft)),B.isMesh)$.wireframe===!0?(Se.setLineWidth($.wireframeLinewidth*Ae()),Pt.setMode(L.LINES)):Pt.setMode(L.TRIANGLES);else if(B.isLine){let Ye=$.linewidth;Ye===void 0&&(Ye=1),Se.setLineWidth(Ye*Ae()),B.isLineSegments?Pt.setMode(L.LINES):B.isLineLoop?Pt.setMode(L.LINE_LOOP):Pt.setMode(L.LINE_STRIP)}else B.isPoints?Pt.setMode(L.POINTS):B.isSprite&&Pt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Oo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))Pt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ye=B._multiDrawStarts,zt=B._multiDrawCounts,gt=B._multiDrawCount,ai=Te?M.get(Te).bytesPerElement:1,no=Le.get($).currentProgram.getUniforms();for(let li=0;li<gt;li++)no.setValue(L,"_gl_DrawID",li),Pt.render(Ye[li]/ai,zt[li])}else if(B.isInstancedMesh)Pt.renderInstances(Qe,Ht,B.count);else if(j.isInstancedBufferGeometry){const Ye=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,zt=Math.min(j.instanceCount,Ye);Pt.renderInstances(Qe,Ht,zt)}else Pt.render(Qe,Ht)};function ye(A,z,j){A.transparent===!0&&A.side===er&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,Rt(A,z,j),A.side=lr,A.needsUpdate=!0,Rt(A,z,j),A.side=er):Rt(A,z,j)}this.compile=function(A,z,j=null){j===null&&(j=A),p=ce.get(j),p.init(z),T.push(p),j.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),A!==j&&A.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const $=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const oe=B.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const De=oe[pe];ye(De,j,B),$.add(De)}else ye(oe,j,B),$.add(oe)}),p=T.pop(),$},this.compileAsync=function(A,z,j=null){const $=this.compile(A,z,j);return new Promise(B=>{function oe(){if($.forEach(function(pe){Le.get(pe).currentProgram.isReady()&&$.delete(pe)}),$.size===0){B(A);return}setTimeout(oe,10)}Je.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ie=null;function nt(A){Ie&&Ie(A)}function fe(){Ne.stop()}function Ze(){Ne.start()}const Ne=new Zg;Ne.setAnimationLoop(nt),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(A){Ie=A,ne.setAnimationLoop(A),A===null?Ne.stop():Ne.start()},ne.addEventListener("sessionstart",fe),ne.addEventListener("sessionend",Ze),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(z),z=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,R),p=ce.get(A,T.length),p.init(z),T.push(p),xe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(xe),ve=this.localClippingEnabled,se=Re.init(this.clippingPlanes,ve),m=Me.get(A,x.length),m.init(),x.push(m),ne.enabled===!0&&ne.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&je(oe,z,-1/0,v.sortObjects)}je(A,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ee,P),ot=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,ot&&ie.addToRenderList(m,A),this.info.render.frame++,se===!0&&Re.beginShadows();const j=p.state.shadowsArray;de.render(j,A,z),se===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,B=m.transmissive;if(p.setupLights(),z.isArrayCamera){const oe=z.cameras;if(B.length>0)for(let pe=0,De=oe.length;pe<De;pe++){const Te=oe[pe];at($,B,A,Te)}ot&&ie.render(A);for(let pe=0,De=oe.length;pe<De;pe++){const Te=oe[pe];Xt(m,A,Te,Te.viewport)}}else B.length>0&&at($,B,A,z),ot&&ie.render(A),Xt(m,A,z);R!==null&&b===0&&(Ue.updateMultisampleRenderTarget(R),Ue.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,z),We.resetDefaultState(),S=-1,y=null,T.pop(),T.length>0?(p=T[T.length-1],se===!0&&Re.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function je(A,z,j,$){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){$&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const pe=Q.update(A),De=A.material;De.visible&&m.push(A,pe,De,j,be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const pe=Q.update(A),De=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),be.copy(pe.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(De)){const Te=pe.groups;for(let ze=0,qe=Te.length;ze<qe;ze++){const Fe=Te[ze],Qe=De[Fe.materialIndex];Qe&&Qe.visible&&m.push(A,pe,Qe,j,be.z,Fe)}}else De.visible&&m.push(A,pe,De,j,be.z,null)}}const oe=A.children;for(let pe=0,De=oe.length;pe<De;pe++)je(oe[pe],z,j,$)}function Xt(A,z,j,$){const B=A.opaque,oe=A.transmissive,pe=A.transparent;p.setupLightsView(j),se===!0&&Re.setGlobalState(v.clippingPlanes,j),$&&Se.viewport(C.copy($)),B.length>0&&Lt(B,z,j),oe.length>0&&Lt(oe,z,j),pe.length>0&&Lt(pe,z,j),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function at(A,z,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new xi(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Yi:cr,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const oe=p.state.transmissionRenderTarget[$.id],pe=$.viewport||C;oe.setSize(pe.z*v.transmissionResolutionScale,pe.w*v.transmissionResolutionScale);const De=v.getRenderTarget(),Te=v.getActiveCubeFace(),ze=v.getActiveMipmapLevel();v.setRenderTarget(oe),v.getClearColor(W),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),ot&&ie.render(j);const qe=v.toneMapping;v.toneMapping=Dr;const Fe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),se===!0&&Re.setGlobalState(v.clippingPlanes,$),Lt(A,j,$),Ue.updateMultisampleRenderTarget(oe),Ue.updateRenderTargetMipmap(oe),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Et=0,Ht=z.length;Et<Ht;Et++){const Ft=z[Et],Pt=Ft.object,Ye=Ft.geometry,zt=Ft.material,gt=Ft.group;if(zt.side===er&&Pt.layers.test($.layers)){const ai=zt.side;zt.side=Qn,zt.needsUpdate=!0,tn(Pt,j,$,Ye,zt,gt),zt.side=ai,zt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Ue.updateMultisampleRenderTarget(oe),Ue.updateRenderTargetMipmap(oe))}v.setRenderTarget(De,Te,ze),v.setClearColor(W,X),Fe!==void 0&&($.viewport=Fe),v.toneMapping=qe}function Lt(A,z,j){const $=z.isScene===!0?z.overrideMaterial:null;for(let B=0,oe=A.length;B<oe;B++){const pe=A[B],De=pe.object,Te=pe.geometry,ze=pe.group;let qe=pe.material;qe.allowOverride===!0&&$!==null&&(qe=$),De.layers.test(j.layers)&&tn(De,z,j,Te,qe,ze)}}function tn(A,z,j,$,B,oe){A.onBeforeRender(v,z,j,$,B,oe),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(v,z,j,$,A,oe),B.transparent===!0&&B.side===er&&B.forceSinglePass===!1?(B.side=Qn,B.needsUpdate=!0,v.renderBufferDirect(j,z,$,B,A,oe),B.side=lr,B.needsUpdate=!0,v.renderBufferDirect(j,z,$,B,A,oe),B.side=er):v.renderBufferDirect(j,z,$,B,A,oe),A.onAfterRender(v,z,j,$,B,oe)}function Rt(A,z,j){z.isScene!==!0&&(z=rt);const $=Le.get(A),B=p.state.lights,oe=p.state.shadowsArray,pe=B.state.version,De=J.getParameters(A,B.state,oe,z,j),Te=J.getProgramCacheKey(De);let ze=$.programs;$.environment=A.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(A.isMeshStandardMaterial?D:Tt).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Ee),ze=new Map,$.programs=ze);let qe=ze.get(Te);if(qe!==void 0){if($.currentProgram===qe&&$.lightsStateVersion===pe)return yt(A,De),qe}else De.uniforms=J.getUniforms(A),A.onBeforeCompile(De,v),qe=J.acquireProgram(De,Te),ze.set(Te,qe),$.uniforms=De.uniforms;const Fe=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=Re.uniform),yt(A,De),$.needsLights=Ln(A),$.lightsStateVersion=pe,$.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMap.value=B.state.directionalShadowMap,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotShadowMap.value=B.state.spotShadowMap,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMap.value=B.state.pointShadowMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=qe,$.uniformsList=null,qe}function Ct(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=wc.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function yt(A,z){const j=Le.get(A);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function oi(A,z,j,$,B){z.isScene!==!0&&(z=rt),Ue.resetTextureUnits();const oe=z.fog,pe=$.isMeshStandardMaterial?z.environment:null,De=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Tn,Te=($.isMeshStandardMaterial?D:Tt).get($.envMap||pe),ze=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qe=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Fe=!!j.morphAttributes.position,Qe=!!j.morphAttributes.normal,Et=!!j.morphAttributes.color;let Ht=Dr;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ht=v.toneMapping);const Ft=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Pt=Ft!==void 0?Ft.length:0,Ye=Le.get($),zt=p.state.lights;if(se===!0&&(ve===!0||A!==y)){const Nn=A===y&&$.id===S;Re.setState($,A,Nn)}let gt=!1;$.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==zt.state.version||Ye.outputColorSpace!==De||B.isBatchedMesh&&Ye.batching===!1||!B.isBatchedMesh&&Ye.batching===!0||B.isBatchedMesh&&Ye.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ye.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ye.instancing===!1||!B.isInstancedMesh&&Ye.instancing===!0||B.isSkinnedMesh&&Ye.skinning===!1||!B.isSkinnedMesh&&Ye.skinning===!0||B.isInstancedMesh&&Ye.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ye.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ye.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ye.instancingMorph===!1&&B.morphTexture!==null||Ye.envMap!==Te||$.fog===!0&&Ye.fog!==oe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Re.numPlanes||Ye.numIntersection!==Re.numIntersection)||Ye.vertexAlphas!==ze||Ye.vertexTangents!==qe||Ye.morphTargets!==Fe||Ye.morphNormals!==Qe||Ye.morphColors!==Et||Ye.toneMapping!==Ht||Ye.morphTargetsCount!==Pt)&&(gt=!0):(gt=!0,Ye.__version=$.version);let ai=Ye.currentProgram;gt===!0&&(ai=Rt($,z,B));let no=!1,li=!1,pa=!1;const Bt=ai.getUniforms(),wi=Ye.uniforms;if(Se.useProgram(ai.program)&&(no=!0,li=!0,pa=!0),$.id!==S&&(S=$.id,li=!0),no||y!==A){Se.buffers.depth.getReversed()?(le.copy(A.projectionMatrix),fx(le),px(le),Bt.setValue(L,"projectionMatrix",le)):Bt.setValue(L,"projectionMatrix",A.projectionMatrix),Bt.setValue(L,"viewMatrix",A.matrixWorldInverse);const $n=Bt.map.cameraPosition;$n!==void 0&&$n.setValue(L,$e.setFromMatrixPosition(A.matrixWorld)),Y.logarithmicDepthBuffer&&Bt.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Bt.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,li=!0,pa=!0)}if(B.isSkinnedMesh){Bt.setOptional(L,B,"bindMatrix"),Bt.setOptional(L,B,"bindMatrixInverse");const Nn=B.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Bt.setValue(L,"boneTexture",Nn.boneTexture,Ue))}B.isBatchedMesh&&(Bt.setOptional(L,B,"batchingTexture"),Bt.setValue(L,"batchingTexture",B._matricesTexture,Ue),Bt.setOptional(L,B,"batchingIdTexture"),Bt.setValue(L,"batchingIdTexture",B._indirectTexture,Ue),Bt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&Bt.setValue(L,"batchingColorTexture",B._colorsTexture,Ue));const Ai=j.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&me.update(B,j,ai),(li||Ye.receiveShadow!==B.receiveShadow)&&(Ye.receiveShadow=B.receiveShadow,Bt.setValue(L,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(wi.envMap.value=Te,wi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(wi.envMapIntensity.value=z.environmentIntensity),li&&(Bt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&Ot(wi,pa),oe&&$.fog===!0&&Z.refreshFogUniforms(wi,oe),Z.refreshMaterialUniforms(wi,$,G,q,p.state.transmissionRenderTarget[A.id]),wc.upload(L,Ct(Ye),wi,Ue)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(wc.upload(L,Ct(Ye),wi,Ue),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Bt.setValue(L,"center",B.center),Bt.setValue(L,"modelViewMatrix",B.modelViewMatrix),Bt.setValue(L,"normalMatrix",B.normalMatrix),Bt.setValue(L,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Nn=$.uniformsGroups;for(let $n=0,_u=Nn.length;$n<_u;$n++){const ms=Nn[$n];I.update(ms,ai),I.bind(ms,ai)}}return ai}function Ot(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Ln(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,z,j){const $=Le.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Le.get(A.texture).__webglTexture=z,Le.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const j=Le.get(A);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};const Ei=L.createFramebuffer();this.setRenderTarget=function(A,z=0,j=0){R=A,w=z,b=j;let $=!0,B=null,oe=!1,pe=!1;if(A){const Te=Le.get(A);if(Te.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(Te.__webglFramebuffer===void 0)Ue.setupRenderTarget(A);else if(Te.__hasExternalTextures)Ue.rebindTextures(A,Le.get(A.texture).__webglTexture,Le.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Fe=A.depthTexture;if(Te.__boundDepthTexture!==Fe){if(Fe!==null&&Le.has(Fe)&&(A.width!==Fe.image.width||A.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(pe=!0);const qe=Le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[z])?B=qe[z][j]:B=qe[z],oe=!0):A.samples>0&&Ue.useMultisampledRTT(A)===!1?B=Le.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?B=qe[j]:B=qe,C.copy(A.viewport),U.copy(A.scissor),O=A.scissorTest}else C.copy(ae).multiplyScalar(G).floor(),U.copy(we).multiplyScalar(G).floor(),O=Be;if(j!==0&&(B=Ei),Se.bindFramebuffer(L.FRAMEBUFFER,B)&&$&&Se.drawBuffers(A,B),Se.viewport(C),Se.scissor(U),Se.setScissorTest(O),oe){const Te=Le.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Te.__webglTexture,j)}else if(pe){const Te=Le.get(A.texture),ze=z;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.__webglTexture,j,ze)}else if(A!==null&&j!==0){const Te=Le.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Te.__webglTexture,j)}S=-1},this.readRenderTargetPixels=function(A,z,j,$,B,oe,pe,De=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(Te=Te[pe]),Te){Se.bindFramebuffer(L.FRAMEBUFFER,Te);try{const ze=A.textures[De],qe=ze.format,Fe=ze.type;if(!Y.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-$&&j>=0&&j<=A.height-B&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De),L.readPixels(z,j,$,B,ue.convert(qe),ue.convert(Fe),oe))}finally{const ze=R!==null?Le.get(R).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,z,j,$,B,oe,pe,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(Te=Te[pe]),Te)if(z>=0&&z<=A.width-$&&j>=0&&j<=A.height-B){Se.bindFramebuffer(L.FRAMEBUFFER,Te);const ze=A.textures[De],qe=ze.format,Fe=ze.type;if(!Y.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.bufferData(L.PIXEL_PACK_BUFFER,oe.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De),L.readPixels(z,j,$,B,ue.convert(qe),ue.convert(Fe),0);const Et=R!==null?Le.get(R).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,Et);const Ht=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await dx(L,Ht,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,oe),L.deleteBuffer(Qe),L.deleteSync(Ht),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,j=0){const $=Math.pow(2,-j),B=Math.floor(A.image.width*$),oe=Math.floor(A.image.height*$),pe=z!==null?z.x:0,De=z!==null?z.y:0;Ue.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,pe,De,B,oe),Se.unbindTexture()};const nn=L.createFramebuffer(),rn=L.createFramebuffer();this.copyTextureToTexture=function(A,z,j=null,$=null,B=0,oe=null){oe===null&&(B!==0?(Oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=B,B=0):oe=0);let pe,De,Te,ze,qe,Fe,Qe,Et,Ht;const Ft=A.isCompressedTexture?A.mipmaps[oe]:A.image;if(j!==null)pe=j.max.x-j.min.x,De=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,ze=j.min.x,qe=j.min.y,Fe=j.isBox3?j.min.z:0;else{const Ai=Math.pow(2,-B);pe=Math.floor(Ft.width*Ai),De=Math.floor(Ft.height*Ai),A.isDataArrayTexture?Te=Ft.depth:A.isData3DTexture?Te=Math.floor(Ft.depth*Ai):Te=1,ze=0,qe=0,Fe=0}$!==null?(Qe=$.x,Et=$.y,Ht=$.z):(Qe=0,Et=0,Ht=0);const Pt=ue.convert(z.format),Ye=ue.convert(z.type);let zt;z.isData3DTexture?(Ue.setTexture3D(z,0),zt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ue.setTexture2DArray(z,0),zt=L.TEXTURE_2D_ARRAY):(Ue.setTexture2D(z,0),zt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const gt=L.getParameter(L.UNPACK_ROW_LENGTH),ai=L.getParameter(L.UNPACK_IMAGE_HEIGHT),no=L.getParameter(L.UNPACK_SKIP_PIXELS),li=L.getParameter(L.UNPACK_SKIP_ROWS),pa=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fe);const Bt=A.isDataArrayTexture||A.isData3DTexture,wi=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const Ai=Le.get(A),Nn=Le.get(z),$n=Le.get(Ai.__renderTarget),_u=Le.get(Nn.__renderTarget);Se.bindFramebuffer(L.READ_FRAMEBUFFER,$n.__webglFramebuffer),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,_u.__webglFramebuffer);for(let ms=0;ms<Te;ms++)Bt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Le.get(A).__webglTexture,B,Fe+ms),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Le.get(z).__webglTexture,oe,Ht+ms)),L.blitFramebuffer(ze,qe,pe,De,Qe,Et,pe,De,L.DEPTH_BUFFER_BIT,L.NEAREST);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||A.isRenderTargetTexture||Le.has(A)){const Ai=Le.get(A),Nn=Le.get(z);Se.bindFramebuffer(L.READ_FRAMEBUFFER,nn),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,rn);for(let $n=0;$n<Te;$n++)Bt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ai.__webglTexture,B,Fe+$n):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ai.__webglTexture,B),wi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nn.__webglTexture,oe,Ht+$n):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Nn.__webglTexture,oe),B!==0?L.blitFramebuffer(ze,qe,pe,De,Qe,Et,pe,De,L.COLOR_BUFFER_BIT,L.NEAREST):wi?L.copyTexSubImage3D(zt,oe,Qe,Et,Ht+$n,ze,qe,pe,De):L.copyTexSubImage2D(zt,oe,Qe,Et,ze,qe,pe,De);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else wi?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(zt,oe,Qe,Et,Ht,pe,De,Te,Pt,Ye,Ft.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(zt,oe,Qe,Et,Ht,pe,De,Te,Pt,Ft.data):L.texSubImage3D(zt,oe,Qe,Et,Ht,pe,De,Te,Pt,Ye,Ft):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,oe,Qe,Et,pe,De,Pt,Ye,Ft.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,oe,Qe,Et,Ft.width,Ft.height,Pt,Ft.data):L.texSubImage2D(L.TEXTURE_2D,oe,Qe,Et,pe,De,Pt,Ye,Ft);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ai),L.pixelStorei(L.UNPACK_SKIP_PIXELS,no),L.pixelStorei(L.UNPACK_SKIP_ROWS,li),L.pixelStorei(L.UNPACK_SKIP_IMAGES,pa),oe===0&&z.generateMipmaps&&L.generateMipmap(zt),Se.unbindTexture()},this.copyTextureToTexture3D=function(A,z,j=null,$=null,B=0){return Oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,j,$,B)},this.initRenderTarget=function(A){Le.get(A).__webglFramebuffer===void 0&&Ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){w=0,b=0,R=null,Se.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}function im(r,e){if(e===Fv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===sd||e===Pg){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===sd)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class gM extends fs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new SM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new NM(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ha.extractUrlBase(e);o=Ha.resolveURL(c,this.path)}else o=Ha.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new uu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===n0){try{o[dt.KHR_BINARY_GLTF]=new OM(e)}catch(h){i&&i(h);return}s=JSON.parse(o[dt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new jM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case dt.KHR_MATERIALS_UNLIT:o[h]=new xM;break;case dt.KHR_DRACO_MESH_COMPRESSION:o[h]=new FM(s,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:o[h]=new BM;break;case dt.KHR_MESH_QUANTIZATION:o[h]=new kM;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function _M(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class vM{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Oe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Tn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new xy(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _y(u),c.distance=h;break;case"spot":c=new my(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),xr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class xM{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rr}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Tn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,vn))}return Promise.all(i)}}class yM{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class SM{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(a,a)}return Promise.all(s)}}class TM{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class bM{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class MM{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,vn)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class EM{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class wM{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],Tn),Promise.all(s)}}class AM{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class RM{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],Tn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,vn)),Promise.all(s)}}class CM{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class PM{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class DM{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class UM{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class IM{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class LM{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class NM{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Di.TRIANGLES&&c.mode!==Di.TRIANGLE_STRIP&&c.mode!==Di.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new Ke,m=new k,p=new si,x=new k(1,1,1),T=new nf(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),T.setMatrixAt(v,_.compose(m,p,x));for(const v in l)if(v==="_COLOR_0"){const E=l[v];T.instanceColor=new Gc(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);At.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),f.push(T)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const n0="glTF",ba=12,rm={JSON:1313821514,BIN:5130562};class OM{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ba),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==n0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ba,s=new DataView(e,ba);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===rm.JSON){const c=new Uint8Array(e,ba+o,a);this.content=n.decode(c)}else if(l===rm.BIN){const c=ba+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class FM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=cd[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=cd[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Bo[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,Tn,d)})})}}class BM{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class kM{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}}class i0 extends El{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,x=1-m,T=p-d+h;for(let v=0;v!==a;v++){const E=o[_+v+a],w=o[_+v+l]*u,b=o[g+v+a],R=o[g+v]*u;s[v]=x*E+T*w+m*b+p*R}return s}}const zM=new si;class VM extends i0{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return zM.fromArray(s).normalize().toArray(s),s}}const Di={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Bo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sm={9728:yn,9729:mn,9984:Tg,9985:yc,9986:Ua,9987:wr},om={33071:Zn,33648:wn,10497:on},Qu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},GM={CUBICSPLINE:void 0,LINEAR:cl,STEP:ll},eh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function HM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ml({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:lr})),r.DefaultMaterial}function bs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function WM(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function XM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qM(r){let e;const t=r.extensions&&r.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+th(t.attributes):e=r.indices+":"+th(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+th(r.targets[n]);return e}function th(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ud(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function YM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const $M=new Ke;class jM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new _M,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Kg(this.options.manager):this.textureLoader=new yy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new uu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return bs(s,a,i),xr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ha.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Qu[i.type],a=Bo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Xn(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Qu[i.type],c=Bo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let T=t.cache.get(x);T||(_=new c(a,p*f,i.count*f/u),T=new Wx(_,f/u),t.cache.add(x,T)),m=new Qd(T,l,d%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Xn(_,l,g);if(i.sparse!==void 0){const p=Qu.SCALAR,x=Bo[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,E=new x(o[1],T,i.sparse.count*p),w=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Xn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,R=E.length;b<R;b++){const S=E[b];if(m.setX(S,w[b*l]),l>=2&&m.setY(S,w[b*l+1]),l>=3&&m.setZ(S,w[b*l+2]),l>=4&&m.setW(S,w[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=sm[d.magFilter]||mn,u.minFilter=sm[d.minFilter]||wr,u.wrapS=om[d.wrapS]||on,u.wrapT=om[d.wrapT]||on,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==yn&&u.minFilter!==mn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new ln(_);m.needsUpdate=!0,d(m)}),t.load(Ha.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),xr(h,o),h.userData.mimeType=o.mimeType||YM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[dt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wg,or.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Gg,or.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ml}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[dt.KHR_MATERIALS_UNLIT]){const h=i[dt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Tn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,vn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=er);const u=s.alphaMode||eh.OPAQUE;if(u===eh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===eh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Rr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Xe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Rr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Rr){const h=s.emissiveFactor;a.emissive=new Oe().setRGB(h[0],h[1],h[2],Tn)}return s.emissiveTexture!==void 0&&o!==Rr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,vn)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),xr(h,s),t.associations.set(h,{materials:e}),s.extensions&&bs(i,h,s),h})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return am(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=qM(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=am(new qn,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?HM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const x=c[f];if(m.mode===Di.TRIANGLES||m.mode===Di.TRIANGLE_STRIP||m.mode===Di.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new qx(_,x):new Yt(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Di.TRIANGLE_STRIP?p.geometry=im(p.geometry,Pg):m.mode===Di.TRIANGLE_FAN&&(p.geometry=im(p.geometry,sd));else if(m.mode===Di.LINES)p=new Hg(_,x);else if(m.mode===Di.LINE_STRIP)p=new sf(_,x);else if(m.mode===Di.LINE_LOOP)p=new Jx(_,x);else if(m.mode===Di.POINTS)p=new Xg(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&XM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),xr(p,s),m.extensions&&bs(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&bs(i,h[0],s),h[0];const d=new Bs;s.extensions&&bs(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rn(ux.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Ke;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tf(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let x=0,T=d.length;x<T;x++){const v=d[x],E=f[x],w=g[x],b=_[x],R=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=n._createAnimationTracks(v,E,w,b,R);if(S)for(let y=0;y<S.length;y++)p.push(S[y])}return new ay(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,$M)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Vg:c.length>1?u=new Bs:c.length===1?u=c[0]:u=new At,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),xr(u,s),s.extensions&&bs(n,u,s),s.matrix!==void 0){const h=new Ke;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Bs;n.name&&(s.name=i.createUniqueName(n.name)),xr(s,n),n.extensions&&bs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof or||d instanceof ln)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Xr[s.path]===Xr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Xr[s.path]){case Xr.weights:c=Zo;break;case Xr.rotation:c=Jo;break;case Xr.translation:case Xr.scale:c=Qo;break;default:switch(n.itemSize){case 1:c=Zo;break;case 2:case 3:default:c=Qo;break}break}const u=i.interpolation!==void 0?GM[i.interpolation]:cl,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Xr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ud(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Jo?VM:i0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function KM(r,e,t){const n=e.attributes,i=new Br;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const u=ud(Bo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new k,l=new k;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=ud(Bo[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new hr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function am(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=cd[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return ft.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),xr(r,e),KM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?WM(r,e.targets,t):r})}const ZM=Array(1024).fill(0).map((r,e)=>Math.pow(e/255*.9478672986+.0521327014,2.4));class JM extends fs{constructor(e){super(e),this.type=Yi}setDataType(e){return this.type=e,this}parse(e,t){const n={version:null,baseRenditionIsHDR:null,gainMapMin:null,gainMapMax:null,gamma:null,offsetSDR:null,offsetHDR:null,hdrCapacityMin:null,hdrCapacityMax:null},i=new TextDecoder,s=new DataView(e);let o=0;const a=[];for(;o<s.byteLength;){const u=s.getUint8(o);if(u===255){const h=s.getUint8(o+1);[216,224,225,226].includes(h)?(a.push({sectionType:h,section:[u,h],sectionOffset:o+2}),o+=2):(a[a.length-1].section.push(u,h),o+=2)}else a[a.length-1].section.push(u),o++}let l,c;for(let u=0;u<a.length;u++){const{sectionType:h,section:d,sectionOffset:f}=a[u];if(h!==224){if(h===225)this._parseXMPMetadata(i.decode(new Uint8Array(d)),n);else if(h===226){const g=new DataView(new Uint8Array(d.slice(2)).buffer);if(g.getUint32(2,!1)===1297106432){const m=g.getUint32(6)===1229531648,p=60,x=g.getUint32(p,m),T=g.getUint32(p+4,m),v=g.getUint32(p+16,m),E=g.getUint32(p+20,m)+f+6;l=new Uint8Array(s.buffer,T,x),c=new Uint8Array(s.buffer,E,v)}}}}if(!n.version)throw new Error("THREE.UltraHDRLoader: Not a valid UltraHDR image");if(l&&c)this._applyGainmapToSDR(n,l,c,(u,h,d)=>{t({width:h,height:d,data:u,format:Jn,type:this.type})},u=>{throw new Error(u)});else throw new Error("THREE.UltraHDRLoader: Could not parse UltraHDR images")}load(e,t,n,i){const s=new ef(this.type===Yi?new Uint16Array:new Float32Array,0,0,Jn,this.type,Hd,Zn,Zn,mn,Nv,1,Tn);s.generateMipmaps=!0,s.flipY=!0;const o=new uu(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(e,a=>{try{this.parse(a,l=>{s.image={data:l.data,width:l.width,height:l.height},s.needsUpdate=!0,t&&t(s,l)})}catch(l){i&&i(l),console.error(l)}},n,i),s}_parseXMPMetadata(e,t){const i=new DOMParser().parseFromString(e.substring(e.indexOf("<"),e.lastIndexOf(">")+1),"text/xml"),[s]=i.getElementsByTagName("Container:Directory");if(!s){const[o]=i.getElementsByTagName("rdf:Description");t.version=o.getAttribute("hdrgm:Version"),t.baseRenditionIsHDR=o.getAttribute("hdrgm:BaseRenditionIsHDR")==="True",t.gainMapMin=parseFloat(o.getAttribute("hdrgm:GainMapMin")||0),t.gainMapMax=parseFloat(o.getAttribute("hdrgm:GainMapMax")||1),t.gamma=parseFloat(o.getAttribute("hdrgm:Gamma")||1),t.offsetSDR=parseFloat(o.getAttribute("hdrgm:OffsetSDR")/(1/64)),t.offsetHDR=parseFloat(o.getAttribute("hdrgm:OffsetHDR")/(1/64)),t.hdrCapacityMin=parseFloat(o.getAttribute("hdrgm:HDRCapacityMin")||0),t.hdrCapacityMax=parseFloat(o.getAttribute("hdrgm:HDRCapacityMax")||1)}}_srgbToLinear(e){return e/255<.04045?e/255*.0773993808:e<1024?ZM[~~e]:Math.pow(e/255*.9478672986+.0521327014,2.4)}_applyGainmapToSDR(e,t,n,i,s){const o=a=>new Promise((l,c)=>{const u=document.createElement("img");u.onload=()=>{const h={width:u.naturalWidth,height:u.naturalHeight,source:u};URL.revokeObjectURL(u.src),l(h)},u.onerror=()=>{URL.revokeObjectURL(u.src),c()},u.src=URL.createObjectURL(new Blob([a],{type:"image/jpeg"}))});Promise.all([o(t),o(n)]).then(([a,l])=>{const c=a.width/a.height,u=l.width/l.height;if(c!==u){s("THREE.UltraHDRLoader Error: Aspect ratio mismatch between SDR and Gainmap images");return}const h=document.createElement("canvas"),d=h.getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});h.width=a.width,h.height=a.height,d.drawImage(l.source,0,0,l.width,l.height,0,0,a.width,a.height);const f=d.getImageData(0,0,a.width,a.height,{colorSpace:"srgb"});d.drawImage(a.source,0,0);const g=d.getImageData(0,0,a.width,a.height,{colorSpace:"srgb"});let _;this.type===Yi?_=new Uint16Array(g.data.length).fill(23544):_=new Float32Array(g.data.length).fill(255);const m=Math.sqrt(Math.pow(1.8,e.hdrCapacityMax)),p=(Math.log2(m)-e.hdrCapacityMin)/(e.hdrCapacityMax-e.hdrCapacityMin),x=Math.min(Math.max(p,0),1),T=e.gamma===1;for(let v=0;v<g.data.length;v+=4){const E=v/4%a.width,w=Math.floor(v/4/a.width);for(let b=0;b<3;b++){const R=g.data[v+b],S=(w*a.width+E)*4+b,y=f.data[S]/255,C=T?y:Math.pow(y,1/e.gamma),U=e.gainMapMin*(1-C)+e.gainMapMax*C,O=(R+e.offsetSDR)*(U*x===0?1:Math.pow(2,U*x))-e.offsetHDR,W=Math.min(Math.max(this._srgbToLinear(O),0),65504);_[v+b]=this.type===Yi?Ux.toHalfFloat(W):W}}i(_,a.width,a.height)}).catch(()=>{throw new Error("THREE.UltraHDRLoader Error: Could not parse UltraHDR images")})}}const F={uTime:{value:0},uMouse:{value:new Xe(0,0)},uEarthOpacity:{value:1},uEarthLetterOpacity:{value:0},uEarthAlbedo:{value:0},uSkyOpacity:{value:1},uCaptationOpacity:{value:0},uCaptationGridOpacity:{value:0},uCaptationCloudsOpacity:{value:1},uCaptationZoom:{value:1},uCaptationDecay:{value:new Xe(0,0)},uGridOpacity:{value:0},uGridDecay:{value:new Xe(0,0)},uTrailsOpacity:{value:0},uFirstTrailsOpacity:{value:0},uTrailsRTime:{value:0},uSatDist:{value:1},uFTrailsOpacity:{value:0},ufTrailsProgress:{value:0},uTaceOpacity:{value:0},uTaceFullOpacity:{value:1},uFrameBorders:{value:0},uDashboardEnabled:{value:0},uDrawSatVisible:{value:0},uGenSatVisible:{value:1},uGenSatFront:{value:1},uGenPayloadVisible:{value:1},uGenSatDarken:{value:1},uAntenaPulse:{value:0},uGenericBuild:{value:1},uGenericPayloadBuild:{value:1},uGenericClip:{value:1},uRenderPass:{value:0},uInternalWires:{value:0},uInternalModules:{value:0},uInternalModulesProgress:{value:0},uInternalView:{value:0},uEarthSaturation:{value:.15},uEarthSpatializedSaturation:{value:0},uCloudTime:{value:0},uGlobalTrailCount:{value:0},uSecondaryTrailCount:{value:1},uTrailsInclinaison:{value:0},uMainSatPosition:{value:new k(0,0,0)},uFStorageAppear:{value:0},uFFuselageAppear:{value:0},uEarthBluriness:{value:1},uAtmosphereBeam:{value:1},uCoreBuild:{value:1},uSpaceopsEarthTrails:{value:0},uSpaceopsEarthTrailsSingle:{value:0},uSpaceopsEarthStations:{value:0},uSpaceopsEarthData:{value:0},uSpaceopsEarthSearch:{value:0},uSpaceopsEarthOpacity:{value:1},uSpaceopsTextsTexture:{value:null},uSpaceOpsToLeft:{value:0},uFadeToBlack:{value:0}},Fi={uAspect:{value:1},uDPR:{value:1},uResolution:{value:new Xe}};class QM{listeners={};bindingMethods={};bindingPrefix="on";constructor(e){this.bindingMethods=Object.fromEntries(e.map(t=>[`${this.bindingPrefix}${t.toString().toLowerCase().split(/[:-]/).map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join("")}`,t]))}bind(e){for(const t of this.getAllMethodsNames(e))if(this.bindingMethods[t]){const n=e[t];this.on(this.bindingMethods[t],n,e)}}unbind(e){for(const t of this.getAllMethodsNames(e))if(this.bindingMethods[t]){const n=e[t];this.off(this.bindingMethods[t],n,e)}}on(e,t,n=this){this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add({fn:t,instance:n})}off(e,t,n=this){if(this.listeners[e])for(const i of this.listeners[e])i.fn===t&&i.instance===n&&this.listeners[e]?.delete(i)}emit(e,t){const n=this.listeners[e];if(n)for(const{fn:i,instance:s}of n)i.call(s,t)}async emitAsync(e,t){const n=this.listeners[e];if(!n)return;const i=[...n.values()].map(({fn:s,instance:o})=>s.call(o,t));await Promise.all(i)}getAllMethodsNames(e,t=!1){const n=Object.getOwnPropertyNames(e);let i=Object.getPrototypeOf(e);const s=Object.getPrototypeOf({});for(;i&&(t||i!==s);){for(const o of Object.getOwnPropertyNames(i))n.indexOf(o)===-1&&this.isFunction(i,o)&&n.push(o);i=Object.getPrototypeOf(i)}return n.filter(o=>o.startsWith(this.bindingPrefix))}isFunction(e,t){return!("get"in Object.getOwnPropertyDescriptor(e,t))&&typeof e[t]=="function"}}const eE=["app:ready","app:plugin-ready"];class tE extends QM{registeredPlugins=new Map;readyPlugins=new Set;name;constructor(e,t){super([...e,...eE]),this.name=t||"Application"}registerPlugins(...e){for(const t of e){if(this.registeredPlugins.has(t.name)){Tr.warn(`Plugin ${t.name} is already registered.`);continue}t.initialize?.(),this.registeredPlugins.set(t.name,t),typeof this[t.name]>"u"&&(this[t.name]=t)}return this}unregisterPlugins(...e){for(const t of e){const n=this.registeredPlugins.get(t);if(!n){Tr.warn(`Plugin ${t.toString()} isn't registered.`);continue}n.detach?.(),n.destroy?.(),this.registeredPlugins.delete(t),this.readyPlugins.delete(n)}return this}getPlugin(e){return this.registeredPlugins.get(e)}getPlugins(){return[...this.registeredPlugins.values()]}async ready(){const e=this.readyPlugins.size===0,t=[...this.registeredPlugins.values()].filter(i=>!this.readyPlugins.has(i)),n=await Promise.all(t.map(async i=>({plugin:i,ready:await i.ready?.()})));for(const{plugin:i,ready:s}of n)s&&(i.attach?.(),this.emit("app:plugin-ready",i),this.readyPlugins.add(i));return e&&this.emit("app:ready"),this}detach(){this.emit("app:detach");for(const e of this.readyPlugins)e.detach?.();return this}destroy(){this.emit("app:destroy");for(const e of this.readyPlugins)e.destroy?.();return this.registeredPlugins.clear(),this.readyPlugins.clear(),this}}let tc;const nE=["viewport:resize","viewport:breakpoint"],iE={maxDprDk:2,maxDprMb:1.5,breakpoints:{},target:window};class rE extends Fr{options;resizeObserver;currentSize;currentBreakpoint;sortedBreakpoints;resizeTimeout=null;_target;constructor(e,t){super(e,"viewport"),this.options={...iE,...t},this.options.target||(this.options.target=window),this._target=this.options.target,this.sortedBreakpoints=this.parseBreakpoints(this.options.breakpoints),this.currentSize=this.getSize(),this.currentBreakpoint=this.getBreakpoint(),e.debug?.monitor.info("Viewport",`${this.breakpoint};${this.width}|${this.height}; DPR:${this.dpr}`)}parseBreakpoints(e){return Object.entries(e).map(([t,n])=>[t,Number.parseInt(n.replace(/\D/g,""))]).sort(([,t],[,n])=>n-t)}getSize(){const{target:e,maxDprMb:t,maxDprDk:n}=this.options,i=Math.min(window.devicePixelRatio,this.breakpoint==="mobile"?t:n);let s,o;if(e&&!(e instanceof Window)){const{width:a,height:l}=e.getBoundingClientRect();s=a,o=l}else s=e.innerWidth,o=e.innerHeight;return{width:s,height:o,dpr:i,aspect:s/o}}getBreakpoint(){if(!this.sortedBreakpoints.length)return;const e=window.innerWidth,[t]=this.sortedBreakpoints.find(([,n])=>e>=n)||this.sortedBreakpoints[this.sortedBreakpoints.length-1];return t}handleResize=()=>{this.resizeTimeout&&window.clearTimeout(this.resizeTimeout);const e=()=>{const n=this.getSize();this.hasSizeChanged(n)&&(this.currentSize=n,this.app.emit("viewport:resize",this.currentSize),N.debug?.monitor.info("Viewport",`${this.breakpoint};${this.width} x ${this.height};${this.dpr}`));const i=this.getBreakpoint();if(i&&this.currentBreakpoint&&i!==this.currentBreakpoint){const s={previous:this.currentBreakpoint,current:i};this.currentBreakpoint=i,this.app.emit("viewport:breakpoint",s)}},{debounceResize:t}=this.options;t?this.resizeTimeout=window.setTimeout(e,t):e()};hasSizeChanged(e){return tc=!1,this.breakpoint==="mobile"||this.breakpoint==="tablet"?tc=Math.abs(e.height-this.currentSize.height)>150||e.height>this.currentSize.height+10:tc=e.height!==this.currentSize.height,this.currentSize.width!==e.width||tc||this.currentSize.dpr!==e.dpr}attach(){this.options.target instanceof Window?window.addEventListener("resize",this.handleResize):(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.options.target))}detach(){const{target:e}=this.options;e instanceof Window?window.removeEventListener("resize",this.handleResize):this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0),this.resizeTimeout&&(window.clearTimeout(this.resizeTimeout),this.resizeTimeout=null)}matches(e){const t=this.sortedBreakpoints.findIndex(([s])=>s===e);if(t===-1)return!1;const n=window.innerWidth,i=this.sortedBreakpoints[t][1];return t===this.sortedBreakpoints.length-1||n>=i}get dpr(){return this.currentSize.dpr}get size(){return this.currentSize}get height(){return this.currentSize.height}get width(){return this.currentSize.width}get breakpoint(){return this.currentBreakpoint}get aspect(){return this.currentSize.aspect}get target(){return this._target}set target(e){this._target instanceof Window?window.removeEventListener("resize",this.handleResize):this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0),this._target=e,this.options.target=e,this._target instanceof Window?window.addEventListener("resize",this.handleResize):(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this._target)),this.handleResize()}}const Ac=!!(window.matchMedia("(pointer: coarse)").matches||typeof window.ontouchstart=="function"||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),sE=["pointer:move","pointer:up","pointer:down"],oE={target:window};class aE extends Fr{options;isTouch;isDown=!1;payload={normalized:new Xe,dom:new Xe,event:null};element=null;_target;elementSize={width:window.innerWidth,height:window.innerHeight};constructor(e,t){super(e,"pointer"),this.options={...oE,...t},this._target=this.options.target,this.isTouch=Ac,this.app.bind(this),(this._target instanceof HTMLElement||this._target instanceof Window)&&this.attachEvents()}storeElementSize(){if(this._target instanceof HTMLElement){const{width:e,height:t}=this._target.getBoundingClientRect();this.elementSize={width:e,height:t}}this.elementSize={width:window.innerWidth,height:window.innerHeight}}attachEvents=()=>{this.payload.dom.set(this.elementSize.width*.5,this.elementSize.height*.5),this._target.addEventListener("touchmove",this.touchMove,{passive:!0}),this._target.addEventListener("pointerdown",this.pointerDown),window.addEventListener("mousemove",this.mouseMove),window.addEventListener("mouseup",this.mouseUp),window.addEventListener("touchend",this.touchUp),this.element=this._target};detachEvents=()=>{this.element&&(this.element.removeEventListener("touchmove",this.touchMove),this.element.removeEventListener("pointerdown",this.pointerDown),window.removeEventListener("mousemove",this.mouseMove),window.removeEventListener("mouseup",this.mouseUp),window.removeEventListener("touchend",this.touchUp),this.element=null)};onViewportResize(){this.storeElementSize()}mouseUp=e=>{this.isDown&&(this.isDown=!1,this.updatePayload(e),this.app.emit("pointer:up",this.payload))};touchUp=e=>{this.isDown&&(this.isDown=!1,this.updatePayload(e),this.app.emit("pointer:up",this.payload))};touchMove=e=>{this.updatePayload(e),this.app.emit("pointer:move",this.payload)};mouseMove=e=>{this.updatePayload(e),this.app.emit("pointer:move",this.payload)};pointerDown=e=>{this.isDown||(this.updatePayload(e),this.isDown=!0,this.app.emit("pointer:down",this.payload))};updatePayload=e=>{this.payload.event=e,this.isTouch?e.touches&&e.touches.length>0&&this.updateCoordinates(e.touches[0].clientX,e.touches[0].clientY):this.updateCoordinates(e.clientX,e.clientY)};updateCoordinates(e,t){this.payload.normalized.set(e/this.elementSize.width*2-1,-(t/this.elementSize.height)*2+1),this.payload.dom.set(e,t)}detach(){this.detachEvents()}get coords(){return this.payload}get normalized(){return this.payload.normalized}get dom(){return this.payload.dom}get target(){return this._target}set target(e){this.detachEvents(),this._target=e,this.options.target=e,this._target instanceof HTMLElement&&this.attachEvents()}}const lE=[...xg,...nE,...sE,"my-custom-event"],ss={default:0,draw:1,generic:2};function yr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function r0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ea={duration:.5,overwrite:!1,delay:0},df,Sn,kt,Li=1e8,Ut=1/Li,hd=Math.PI*2,cE=hd/4,uE=0,s0=Math.sqrt,hE=Math.cos,dE=Math.sin,gn=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},Nr=function(e){return typeof e=="number"},ff=function(e){return typeof e>"u"},ur=function(e){return typeof e=="object"},ei=function(e){return e!==!1},pf=function(){return typeof window<"u"},nc=function(e){return Wt(e)||gn(e)},o0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Un=Array.isArray,dd=/(?:-?\.?\d|\.)+/gi,a0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Do=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,l0=/[+-]=-?[.\d]+/,c0=/[^,'"\[\]\s]+/gi,fE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,Zi,fd,mf,bi={},qc={},u0,h0=function(e){return(qc=ta(e,bi))&&ri},gf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},hl=function(e,t){return!t&&console.warn(e)},d0=function(e,t){return e&&(bi[e]=t)&&qc&&(qc[e]=t)||bi},dl=function(){return 0},pE={suppressEvents:!0,isStart:!0,kill:!1},Rc={suppressEvents:!0,kill:!1},mE={suppressEvents:!0},_f={},os=[],pd={},f0,mi={},ih={},lm=30,Cc=[],vf="",xf=function(e){var t=e[0],n,i;if(ur(t)||Wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Cc.length;i--&&!Cc[i].targetTest(t););n=Cc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new F0(e[i],n)))||e.splice(i,1);return e},Hs=function(e){return e._gsap||xf(Ni(e))[0]._gsap},p0=function(e,t,n){return(n=e[t])&&Wt(n)?e[t]():ff(n)&&e.getAttribute&&e.getAttribute(t)||n},ti=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},en=function(e){return Math.round(e*1e7)/1e7||0},ko=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},gE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Yc=function(){var e=os.length,t=os.slice(0),n,i;for(pd={},os.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yf=function(e){return!!(e._initted||e._startAt||e.add)},m0=function(e,t,n,i){os.length&&!Sn&&Yc(),e.render(t,n,!!(Sn&&t<0&&yf(e))),os.length&&!Sn&&Yc()},g0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(c0).length<2?t:gn(e)?e.trim():e},_0=function(e){return e},Mi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_E=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ta=function(e,t){for(var n in t)e[n]=t[n];return e},cm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ur(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},$c=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Wa=function(e){var t=e.parent||Vt,n=e.keyframes?_E(Un(e.keyframes)):Mi;if(ei(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},vE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},v0=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},fu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},us=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ws=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},xE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},md=function(e,t,n,i){return e._startAt&&(Sn?e._startAt.revert(Rc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},yE=function r(e){return!e||e._ts&&r(e.parent)},um=function(e){return e._repeat?na(e._tTime,e=e.duration()+e._rDelay)*e:0},na=function(e,t){var n=Math.floor(e=en(e/t));return e&&n===e?n-1:n},jc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},pu=function(e){return e._end=en(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ut)||0))},mu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=en(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),pu(e),n._dirty||Ws(n,e)),e},x0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=jc(e.rawTime(),t),(!t._dur||wl(0,t.totalDuration(),n)-t._tTime>Ut)&&t.render(n,!0)),Ws(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ut}},tr=function(e,t,n,i){return t.parent&&us(t),t._start=en((Nr(n)?n:n||e!==Vt?Pi(e,n,t):e._time)+t._delay),t._end=en(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),v0(e,t,"_first","_last",e._sort?"_start":0),gd(t)||(e._recent=t),i||x0(e,t),e._ts<0&&mu(e,e._tTime),e},y0=function(e,t){return(bi.ScrollTrigger||gf("scrollTrigger",t))&&bi.ScrollTrigger.create(t,e)},S0=function(e,t,n,i,s){if(Tf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&f0!==_i.frame)return os.push(e),e._lazy=[s,i],1},SE=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},gd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},TE=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&SE(e)&&!(!e._initted&&gd(e))||(e._ts<0||e._dp._ts<0)&&!gd(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=wl(0,e._tDur,t),u=na(l,a),e._yoyo&&u&1&&(o=1-o),u!==na(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Sn||i||e._zTime===Ut||!t&&e._zTime){if(!e._initted&&S0(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ut:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&md(e,t,n,!0),e._onUpdate&&!n&&yi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&yi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&us(e,1),!n&&!Sn&&(yi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},bE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ia=function(e,t,n,i){var s=e._repeat,o=en(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:en(o*(s+1)+e._rDelay*s):o,a>0&&!i&&mu(e,e._tTime=e._tDur*a),e.parent&&pu(e),n||Ws(e.parent,e),e},hm=function(e){return e instanceof Hn?Ws(e):ia(e,e._dur)},ME={_start:0,endTime:dl,totalDuration:dl},Pi=function r(e,t,n){var i=e.labels,s=e._recent||ME,o=e.duration()>=Li?s.endTime(!1):e._dur,a,l,c;return gn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Un(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Xa=function(e,t,n){var i=Nr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ei(l.vars.inherit)&&l.parent;o.immediateRender=ei(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},ps=function(e,t){return e||e===0?t(e):t},wl=function(e,t,n){return n<e?e:n>t?t:n},Cn=function(e,t){return!gn(e)||!(t=fE.exec(e))?"":t[1]},EE=function(e,t,n){return ps(n,function(i){return wl(e,t,i)})},_d=[].slice,T0=function(e,t){return e&&ur(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ur(e[0]))&&!e.nodeType&&e!==Zi},wE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return gn(i)&&!t||T0(i,1)?(s=n).push.apply(s,Ni(i)):n.push(i)})||n},Ni=function(e,t,n){return kt&&!t&&kt.selector?kt.selector(e):gn(e)&&!n&&(fd||!ra())?_d.call((t||mf).querySelectorAll(e),0):Un(e)?wE(e,n):T0(e)?_d.call(e,0):e?[e]:[]},vd=function(e){return e=Ni(e)[0]||hl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ni(t,n.querySelectorAll?n:n===e?hl("Invalid scope")||mf.createElement("div"):e)}},b0=function(e){return e.sort(function(){return .5-Math.random()})},M0=function(e){if(Wt(e))return e;var t=ur(e)?e:{each:e},n=Xs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return gn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||t).length,m=o[_],p,x,T,v,E,w,b,R,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Li])[1],!S){for(b=-Li;b<(b=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=l?Math.min(S,_)*u-.5:i%S,x=S===Li?0:l?_*h/S-.5:i/S|0,b=0,R=Li,w=0;w<_;w++)T=w%S-p,v=x-(w/S|0),m[w]=E=c?Math.abs(c==="y"?v:T):s0(T*T+v*v),E>b&&(b=E),E<R&&(R=E);i==="random"&&b0(m),m.max=b-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Cn(t.amount||t.each)||0,n=n&&_<0?L0(n):n}return _=(m[d]-m.min)/m.max||0,en(m.b+(n?n(_):_)*m.v)+m.u}},xd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=en(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Nr(n)?0:Cn(n))}},E0=function(e,t){var n=Un(e),i,s;return!n&&ur(e)&&(i=n=e.radius||Li,e.values?(e=Ni(e.values),(s=!Nr(e[0]))&&(i*=i)):e=xd(e.increment)),ps(t,n?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Li,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Nr(o)?u:u+Cn(o)}:xd(e))},w0=function(e,t,n,i){return ps(Un(e)?!t:n===!0?!!(n=0):!i,function(){return Un(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},AE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},RE=function(e,t){return function(n){return e(parseFloat(n))+(t||Cn(n))}},CE=function(e,t,n){return R0(e,t,0,1,n)},A0=function(e,t,n){return ps(n,function(i){return e[~~t(i)]})},PE=function r(e,t,n){var i=t-e;return Un(e)?A0(e,r(0,e.length),t):ps(n,function(s){return(i+(s-e)%i)%i+e})},DE=function r(e,t,n){var i=t-e,s=i*2;return Un(e)?A0(e,r(0,e.length-1),t):ps(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},fl=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?c0:dd),n+=e.substr(t,i-t)+w0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},R0=function(e,t,n,i,s){var o=t-e,a=i-n;return ps(s,function(l){return n+((l-e)/o*a||0)})},UE=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=gn(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Un(e)&&!Un(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=ta(Un(e)?[]:{},e));if(!u){for(l in t)Sf.call(a,e,l,"get",t[l]);s=function(g){return Ef(g,a)||(o?e.p:e)}}}return ps(n,s)},dm=function(e,t,n){var i=e.labels,s=Li,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yi=function(e,t,n){var i=e.vars,s=i[t],o=kt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&os.length&&Yc(),a&&(kt=a),u=l?s.apply(c,l):s.call(c),kt=o,u},La=function(e){return us(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Sn),e.progress()<1&&yi(e,"onInterrupt"),e},Uo,C0=[],P0=function(e){if(e)if(e=!e.name&&e.default||e,pf()||e.headless){var t=e.name,n=Wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:dl,render:Ef,add:Sf,kill:$E,modifier:YE,rawVars:0},o={targetTest:0,get:0,getSetter:Mf,aliases:{},register:0};if(ra(),e!==i){if(mi[t])return;Mi(i,Mi($c(e,s),o)),ta(i.prototype,ta(s,$c(e,o))),mi[i.prop=t]=i,e.targetTest&&(Cc.push(i),_f[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}d0(t,i),e.register&&e.register(ri,i,ni)}else C0.push(e)},Dt=255,Na={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},rh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},D0=function(e,t,n){var i=e?Nr(e)?[e>>16,e>>8&Dt,e&Dt]:0:Na.black,s,o,a,l,c,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Na[e])i=Na[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Dt,i&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(dd),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=rh(l+1/3,s,o),i[1]=rh(l,s,o),i[2]=rh(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(a0),n&&i.length<4&&(i[3]=1),i}else i=e.match(dd)||Na.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Dt,o=i[1]/Dt,a=i[2]/Dt,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},U0=function(e){var t=[],n=[],i=-1;return e.split(as).forEach(function(s){var o=s.match(Do)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},fm=function(e,t,n){var i="",s=(e+i).match(as),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=D0(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=U0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(as,"1").split(Do),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(as),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},as=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Na)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),IE=/hsl[a]?\(/,I0=function(e){var t=e.join(" "),n;if(as.lastIndex=0,as.test(t))return n=IE.test(t),e[1]=fm(e[1],n),e[0]=fm(e[0],n,U0(e[1])),!0},pl,_i=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,g=function _(m){var p=r()-i,x=m===!0,T,v,E,w;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,T=E-o,(T>0||x)&&(w=++h.frame,d=E-h.time*1e3,h.time=E=E/1e3,o+=T+(T>=s?4:s-T),v=1),x||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](E,d,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){u0&&(!fd&&pf()&&(Zi=fd=window,mf=Zi.document||{},bi.gsap=ri,(Zi.gsapVersions||(Zi.gsapVersions=[])).push(ri.version),h0(qc||Zi.GreenSockGlobals||!Zi.gsap&&Zi||{}),C0.forEach(P0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},pl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),pl=0,c=dl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,x){var T=p?function(v,E,w,b){m(v,E,w,b),h.remove(T)}:m;return h.remove(m),a[x?"unshift":"push"](T),ra(),T},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h}(),ra=function(){return!pl&&_i.wake()},pt={},LE=/^[\d.\-M][\d.\-,\s]/,NE=/["']/g,OE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(NE,"").trim():+c,i=l.substr(a+1).trim();return t},FE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},BE=function(e){var t=(e+"").split("("),n=pt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[OE(t[1])]:FE(e).split(",").map(g0)):pt._CE&&LE.test(e)?pt._CE("",e):n},L0=function(e){return function(t){return 1-e(1-t)}},N0=function r(e,t){for(var n=e._first,i;n;)n instanceof Hn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Xs=function(e,t){return e&&(Wt(e)?e:pt[e]||BE(e))||t},to=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return ti(e,function(a){pt[a]=bi[a]=s,pt[o=a.toLowerCase()]=n;for(var l in s)pt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[a+"."+l]=s[l]}),s},O0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/hd*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*dE((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:O0(a);return s=hd/s,l.config=function(c,u){return r(e,c,u)},l},oh=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:O0(n);return i.config=function(s){return r(e,s)},i};ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;to(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;to("Elastic",sh("in"),sh("out"),sh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};to("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);to("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});to("Circ",function(r){return-(s0(1-r*r)-1)});to("Sine",function(r){return r===1?1:-hE(r*cE)+1});to("Back",oh("in"),oh("out"),oh());pt.SteppedEase=pt.steps=bi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Ut;return function(a){return((i*wl(0,o,a)|0)+s)*n}}};ea.ease=pt["quad.out"];ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return vf+=r+","+r+"Params,"});var F0=function(e,t){this.id=uE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:p0,this.set=t?t.getSetter:Mf},ml=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ia(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),pl||_i.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ia(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ra(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(mu(this,n),!s._dp||s.parent||x0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&tr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ut||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),m0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+um(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+um(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?na(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?jc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ut?0:this._rts,this.totalTime(wl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),pu(this),xE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ra(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ut&&(this._tTime-=Ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&tr(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ei(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=mE);var i=Sn;return Sn=n,yf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Sn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Pi(this,n),ei(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ei(i)),this._dur||(this._zTime=-Ut),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ut)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Wt(n)?n:_0,a=function(){var c=i.then;i.then=null,Wt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){La(this)},r}();Mi(ml.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var Hn=function(r){r0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ei(n.sortChildren),Vt&&tr(n.parent||Vt,yr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&y0(yr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Xa(0,arguments,this),this},t.from=function(i,s,o){return Xa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Xa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Wa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(i,s,Pi(this,o),1),this},t.call=function(i,s,o){return tr(this,Qt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Qt(i,o,Pi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Wa(o).immediateRender=ei(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Wa(a).immediateRender=ei(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:en(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,x,T,v,E,w,b;if(this!==Vt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,T=this._ts,p=!T,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=en(u%m),u===l?(_=this._repeat,d=c):(E=en(u/m),_=~~E,_&&_===E&&(d=c,_--),d>c&&(d=c)),E=na(this._tTime,m),!a&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),w&&_&1&&(d=c-d,b=1),_!==E&&!this._lock){var R=w&&E&1,S=R===(w&&_&1);if(_<E&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(b?0:en(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;N0(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=bE(this,en(a),en(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!E&&(yi(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=-Ut);break}}f=g}else{f=this._last;for(var y=i<0?i:d;f;){if(g=f._prev,(f._act||y<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,o||Sn&&yf(f)),d!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=y?-Ut:Ut);break}}f=g}}if(x&&!s&&(this.pause(),x.render(d>=a?0:-Ut)._zTime=d>=a?1:-1,this._ts))return this._start=v,pu(this),this.render(i,s,o);this._onUpdate&&!s&&yi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&us(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(yi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Nr(s)||(s=Pi(this,s,i)),!(i instanceof ml)){if(Un(i))return i.forEach(function(a){return o.add(a,s)}),this;if(gn(i))return this.addLabel(i,s);if(Wt(i))i=Qt.delayedCall(0,i);else return this}return this!==i?tr(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Li);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return gn(i)?this.removeLabel(i):Wt(i)?this.killTweensOf(i):(i.parent===this&&fu(this,i),i===this._recent&&(this._recent=this._last),Ws(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(_i.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Pi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Qt.delayedCall(0,s||dl,o);return a.data="isPause",this._hasPause=1,tr(this,a,Pi(this,i))},t.removePause=function(i){var s=this._first;for(i=Pi(this,i);s;)s._start===i&&s.data==="isPause"&&us(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Qr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Ni(i),l=this._first,c=Nr(s),u;l;)l instanceof Qt?gE(l._targets,a)&&(c?(!Qr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Pi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=Qt.to(o,Mi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ut,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ia(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Mi({startAt:{time:Pi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),dm(this,Pi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),dm(this,Pi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ut)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ws(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ws(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Li,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,tr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ia(o,o===Vt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Vt._ts&&(m0(Vt,jc(i,Vt)),f0=_i.frame),_i.frame>=lm){lm+=Si.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&Si.autoSleep&&_i._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_i.sleep()}}},e}(ml);Mi(Hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var kE=function(e,t,n,i,s,o,a){var l=new ni(this._pt,e,t,0,1,H0,null,s),c=0,u=0,h,d,f,g,_,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=fl(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),d=n.match(nh)||[];h=nh.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ko(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=nh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(l0.test(i)||p)&&(l.e=0),this._pt=l,l},Sf=function(e,t,n,i,s,o,a,l,c,u){Wt(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Wt(h)?c?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Wt(h)?c?WE:V0:bf,g;if(gn(i)&&(~i.indexOf("random(")&&(i=fl(i)),i.charAt(1)==="="&&(g=ko(d,i)+(Cn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||yd)return!isNaN(d*i)&&i!==""?(g=new ni(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?qE:G0,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&gf(t,i),kE.call(this,e,t,d,i,f,l||Si.stringFilter,c))},zE=function(e,t,n,i,s){if(Wt(e)&&(e=qa(e,s,t,n,i)),!ur(e)||e.style&&e.nodeType||Un(e)||o0(e))return gn(e)?qa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=qa(e[a],s,t,n,i);return o},B0=function(e,t,n,i,s,o){var a,l,c,u;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:zE(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ni(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Uo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Qr,yd,Tf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:m,T=e._overwrite==="auto"&&!df,v=e.timeline,E,w,b,R,S,y,C,U,O,W,X,V,q;if(v&&(!d||!s)&&(s="none"),e._ease=Xs(s,ea.ease),e._yEase=h?L0(Xs(h===!0?s:h,ea.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(U=m[0]?Hs(m[0]).harness:0,V=U&&i[U.prop],E=$c(i,_f),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?Rc:pE),_._lazy=0),o){if(us(e._startAt=Qt.set(m,Mi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ei(l),startAt:null,delay:0,onUpdate:c&&function(){return yi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn||!a&&!f)&&e._startAt.revert(Rc),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),b=Mi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ei(l),immediateRender:a,stagger:0,parent:p},E),V&&(b[U.prop]=V),us(e._startAt=Qt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn?e._startAt.revert(Rc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Ut,Ut);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ei(l)||l&&!g,w=0;w<m.length;w++){if(S=m[w],C=S._gsap||xf(m)[w]._gsap,e._ptLookup[w]=W={},pd[C.id]&&os.length&&Yc(),X=x===m?w:x.indexOf(S),U&&(O=new U).init(S,V||E,e,X,x)!==!1&&(e._pt=R=new ni(e._pt,S,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(G){W[G]=R}),O.priority&&(y=1)),!U||V)for(b in E)mi[b]&&(O=B0(b,E,e,X,S,x))?O.priority&&(y=1):W[b]=R=Sf.call(e,S,b,"get",E[b],X,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),T&&e._pt&&(Qr=e,Vt.killTweensOf(S,W,e.globalTime(t)),q=!e.parent,Qr=0),e._pt&&l&&(pd[C.id]=1)}y&&W0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&v.render(Li,!0,!0)},VE=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return yd=1,e.vars[t]="+=0",Tf(e,a),yd=0,l?hl(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=qt(n)+Cn(h.e)),h.b&&(h.b=u.s+Cn(h.b))},GE=function(e,t){var n=e[0]?Hs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ta({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},HE=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Un(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},qa=function(e,t,n,i,s){return Wt(e)?e.call(t,n,i,s):gn(e)&&~e.indexOf("random(")?fl(e):e},k0=vf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",z0={};ti(k0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return z0[r]=1});var Qt=function(r){r0(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Wa(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,x=i.parent||Vt,T=(Un(n)||o0(n)?Nr(n[0]):"length"in i)?[n]:Ni(n),v,E,w,b,R,S,y,C;if(a._targets=T.length?xf(T):hl("GSAP target "+n+" not found. https://gsap.com",!Si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||nc(c)||nc(u)){if(i=a.vars,v=a.timeline=new Hn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:T}),v.kill(),v.parent=v._dp=yr(a),v._start=0,d||nc(c)||nc(u)){if(b=T.length,y=d&&M0(d),ur(d))for(R in d)~k0.indexOf(R)&&(C||(C={}),C[R]=d[R]);for(E=0;E<b;E++)w=$c(i,z0),w.stagger=0,p&&(w.yoyoEase=p),C&&ta(w,C),S=T[E],w.duration=+qa(c,yr(a),E,S,T),w.delay=(+qa(u,yr(a),E,S,T)||0)-a._delay,!d&&b===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(S,w,y?y(E,S,T):0),v._ease=pt.none;v.duration()?c=u=0:a.timeline=0}else if(g){Wa(Mi(v.vars.defaults,{ease:"none"})),v._ease=Xs(g.ease||i.ease||"none");var U=0,O,W,X;if(Un(g))g.forEach(function(V){return v.to(T,V,">")}),v.duration();else{w={};for(R in g)R==="ease"||R==="easeEach"||HE(R,g[R],w,g.easeEach);for(R in w)for(O=w[R].sort(function(V,q){return V.t-q.t}),U=0,E=0;E<O.length;E++)W=O[E],X={ease:W.e,duration:(W.t-(E?O[E-1].t:0))/100*c},X[R]=W.v,v.to(T,X,U),U+=X.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!df&&(Qr=yr(a),Vt.killTweensOf(T),Qr=0),tr(x,yr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===en(x._time)&&ei(h)&&yE(yr(a))&&x.data!=="nested")&&(a._tTime=-Ut,a.render(Math.max(0,-u)||0)),m&&y0(yr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ut&&!u?l:i<Ut?0:i,d,f,g,_,m,p,x,T,v;if(!c)TE(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=en(h%_),h===l?(g=this._repeat,d=c):(m=en(h/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,d=c-d),m=na(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(T&&this._yEase&&N0(T,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(en(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(S0(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(d/c),this._from&&(this.ratio=x=1-x),!a&&h&&!s&&!m&&(yi(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&md(this,i,s,o),yi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&yi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&md(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&us(this,1),!s&&!(u&&!a)&&(h||a||p)&&(yi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){pl||_i.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Tf(this,c),u=this._ease(c/this._dur),VE(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(mu(this,0),this.parent||v0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?La(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Sn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qr&&Qr.vars.overwrite!==!0)._first||La(this),this.parent&&o!==this.timeline.totalDuration()&&ia(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ni(i):a,c=this._ptLookup,u=this._pt,h,d,f,g,_,m,p;if((!s||s==="all")&&vE(a,l))return s==="all"&&(this._pt=0),La(this);for(h=this._op=this._op||[],s!=="all"&&(gn(s)&&(_={},ti(s,function(x){return _[x]=1}),s=_),s=GE(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,g=d,f={}):(f=h[p]=h[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&fu(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&La(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Xa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Xa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Vt.killTweensOf(i,s,o)},e}(ml);Mi(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ti("staggerTo,staggerFrom,staggerFromTo",function(r){Qt[r]=function(){var e=new Hn,t=_d.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var bf=function(e,t,n){return e[t]=n},V0=function(e,t,n){return e[t](n)},WE=function(e,t,n,i){return e[t](i.fp,n)},XE=function(e,t,n){return e.setAttribute(t,n)},Mf=function(e,t){return Wt(e[t])?V0:ff(e[t])&&e.setAttribute?XE:bf},G0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},H0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ef=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},YE=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},$E=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?fu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},jE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},W0=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ni=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||G0,this.d=l||this,this.set=c||bf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=jE,this.m=n,this.mt=s,this.tween=i},r}();ti(vf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return _f[r]=1});bi.TweenMax=bi.TweenLite=Qt;bi.TimelineLite=bi.TimelineMax=Hn;Vt=new Hn({sortChildren:!1,defaults:ea,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Si.stringFilter=I0;var qs=[],Pc={},KE=[],pm=0,ZE=0,ah=function(e){return(Pc[e]||KE).map(function(t){return t()})},Sd=function(){var e=Date.now(),t=[];e-pm>2&&(ah("matchMediaInit"),qs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Zi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),ah("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),pm=e,ah("matchMedia"))},X0=function(){function r(t,n){this.selector=n&&vd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ZE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Wt(n)&&(s=i,i=n,n=Wt);var o=this,a=function(){var c=kt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=vd(s)),kt=o,h=i.apply(o,arguments),Wt(h)&&o._r.push(h),kt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Wt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=kt;kt=null,n(this),kt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=qs.length;o--;)qs[o].id===this.id&&qs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),JE=function(){function r(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){ur(n)||(n={matches:n});var o=new X0(0,s||this.scope),a=o.conditions={},l,c,u;kt&&!o.selector&&(o.selector=kt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Zi.matchMedia(n[c]),l&&(qs.indexOf(o)<0&&qs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Sd):l.addEventListener("change",Sd)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Kc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return P0(i)})},timeline:function(e){return new Hn(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){gn(e)&&(e=Ni(e)[0]);var s=Hs(e||{}).get,o=n?_0:g0;return n==="native"&&(n=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,n,i)):function(a,l,c){return o((mi[a]&&mi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ni(e),e.length>1){var i=e.map(function(u){return ri.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=mi[t],a=Hs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Uo._pt=0,h.init(e,n?u+n:u,Uo,0,[e]),h.render(1,h),Uo._pt&&Ef(1,Uo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=ri.to(e,Mi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xs(e.ease,ea.ease)),cm(ea,e||{})},config:function(e){return cm(Si,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!mi[a]&&!bi[a]&&hl(t+" effect requires "+a+" plugin.")}),ih[t]=function(a,l,c){return n(Ni(a),Mi(l||{},s),c)},o&&(Hn.prototype[t]=function(a,l,c){return this.add(ih[t](a,ur(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){pt[e]=Xs(t)},parseEase:function(e,t){return arguments.length?Xs(e,t):pt},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Hn(e),i,s;for(n.smoothChildTiming=ei(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]))&&tr(n,i,i._start-i._delay),i=s;return tr(Vt,n,0),n},context:function(e,t){return e?new X0(e,t):kt},matchMedia:function(e){return new JE(e)},matchMediaRefresh:function(){return qs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Sd()},addEventListener:function(e,t){var n=Pc[e]||(Pc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Pc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:PE,wrapYoyo:DE,distribute:M0,random:w0,snap:E0,normalize:CE,getUnit:Cn,clamp:EE,splitColor:D0,toArray:Ni,selector:vd,mapRange:R0,pipe:AE,unitize:RE,interpolate:UE,shuffle:b0},install:h0,effects:ih,ticker:_i,updateRoot:Hn.updateRoot,plugins:mi,globalTimeline:Vt,core:{PropTween:ni,globals:d0,Tween:Qt,Timeline:Hn,Animation:ml,getCache:Hs,_removeLinkedListItem:fu,reverting:function(){return Sn},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return df=e}}};ti("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Kc[r]=Qt[r]});_i.add(Hn.updateRoot);Uo=Kc.to({},{duration:0});var QE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ew=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=QE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},lh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(gn(s)&&(l={},ti(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ew(a,s)}}}},ri=Kc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},lh("roundProps",xd),lh("modifiers"),lh("snap",E0))||Kc;Qt.version=Hn.version=ri.version="3.13.0";u0=1;pf()&&ra();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mm,es,zo,wf,ks,gm,Af,tw=function(){return typeof window<"u"},Or={},Is=180/Math.PI,Vo=Math.PI/180,yo=Math.atan2,_m=1e8,Rf=/([A-Z])/g,nw=/(left|right|width|margin|padding|x)/i,iw=/[\s,\(]\S/,ir={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Td=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ow=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},q0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Y0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},aw=function(e,t,n){return e.style[t]=n},lw=function(e,t,n){return e.style.setProperty(t,n)},cw=function(e,t,n){return e._gsap[t]=n},uw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hw=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},dw=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Gt="transform",ii=Gt+"Origin",fw=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Or&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ir[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=br(i,a)}):this.tfm[e]=o.x?o[e]:br(i,e),e===ii&&(this.tfm.zOrigin=o.zOrigin);else return ir.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ii,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},$0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Rf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Af(),(!s||!s.isStart)&&!n[Gt]&&($0(n),i.zOrigin&&n[ii]&&(n[ii]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},j0=function(e,t){var n={target:e,props:[],revert:pw,save:fw};return e._gsap||ri.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},K0,bd=function(e,t){var n=es.createElementNS?es.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):es.createElement(e);return n&&n.style?n:es.createElement(e)},Oi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Rf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,sa(t)||t,1)||""},vm="O,Moz,ms,Ms,Webkit".split(","),sa=function(e,t,n){var i=t||ks,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(vm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?vm[o]:"")+e},Md=function(){tw()&&window.document&&(mm=window,es=mm.document,zo=es.documentElement,ks=bd("div")||{style:{}},bd("div"),Gt=sa(Gt),ii=Gt+"Origin",ks.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",K0=!!sa("perspective"),Af=ri.core.reverting,wf=1)},xm=function(e){var t=e.ownerSVGElement,n=bd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),zo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),zo.removeChild(n),s},ym=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Z0=function(e){var t,n;try{t=e.getBBox()}catch{t=xm(e),n=1}return t&&(t.width||t.height)||n||(t=xm(e)),t&&!t.width&&!t.x&&!t.y?{x:+ym(e,["x","cx","x1"])||0,y:+ym(e,["y","cy","y1"])||0,width:0,height:0}:t},J0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Z0(e))},Zs=function(e,t){if(t){var n=e.style,i;t in Or&&t!==ii&&(t=Gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Rf,"-$1").toLowerCase())):n.removeAttribute(t)}},ts=function(e,t,n,i,s,o){var a=new ni(e._pt,t,n,0,1,o?Y0:q0);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Sm={deg:1,rad:1,turn:1},mw={grid:1,flex:1},hs=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ks.style,l=nw.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!s||Sm[i]||Sm[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&J0(e),(f||o==="%")&&(Or[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],qt(f?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===es||!_.appendChild)&&(_=es.body),m=_._gsap,m&&f&&m.width&&l&&m.time===_i.time&&!m.uncache)return qt(s/m.width*h);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,g=e[u],x?e.style[t]=x:Zs(e,t)}else(f||o==="%")&&!mw[Oi(_,"display")]&&(a.position=Oi(e,"position")),_===e&&(a.position="static"),_.appendChild(ks),g=ks[u],_.removeChild(ks),a.position="absolute";return l&&f&&(m=Hs(_),m.time=_i.time,m.width=_[u]),qt(d?g*s/h:g&&s?h/g*s:0)},br=function(e,t,n,i){var s;return wf||Md(),t in ir&&t!=="transform"&&(t=ir[t],~t.indexOf(",")&&(t=t.split(",")[0])),Or[t]&&t!=="transform"?(s=_l(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Jc(Oi(e,ii))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Zc[t]&&Zc[t](e,t,n)||Oi(e,t)||p0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?hs(e,t,s,n)+n:s},gw=function(e,t,n,i){if(!n||n==="none"){var s=sa(t,e,1),o=s&&Oi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Oi(e,"borderTopColor"))}var a=new ni(this._pt,e.style,t,0,1,H0),l=0,c=0,u,h,d,f,g,_,m,p,x,T,v,E;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Oi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Oi(e,t)||i,_?e.style[t]=_:Zs(e,t)),u=[n,i],I0(u),n=u[0],i=u[1],d=n.match(Do)||[],E=i.match(Do)||[],E.length){for(;h=Do.exec(i);)m=h[0],x=i.substring(l,h.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=ko(f,m)+v),p=parseFloat(m),T=m.substr((p+"").length),l=Do.lastIndex-T.length,T||(T=T||Si.units[t]||v,l===i.length&&(i+=T,a.e+=T)),v!==T&&(f=hs(e,t,_,T)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Y0:q0;return l0.test(i)&&(a.e=0),this._pt=a,a},Tm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_w=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Tm[n]||n,t[1]=Tm[i]||i,t.join(" ")},vw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Or[a]&&(l=1,a=a==="transformOrigin"?ii:Gt),Zs(n,a);l&&(Zs(n,Gt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",_l(n,1),o.uncache=1,$0(i)))}},Zc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new ni(e._pt,t,n,0,0,vw);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},gl=[1,0,0,1,0,0],Q0={},e_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bm=function(e){var t=Oi(e,Gt);return e_(t)?gl:t.substr(7).match(a0).map(qt)},Cf=function(e,t){var n=e._gsap||Hs(e),i=e.style,s=bm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?gl:s):(s===gl&&!e.offsetParent&&e!==zo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,zo.appendChild(e)),s=bm(e),l?i.display=l:Zs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):zo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ed=function(e,t,n,i,s,o){var a=e._gsap,l=s||Cf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],T=t.split(" "),v=parseFloat(T[0])||0,E=parseFloat(T[1])||0,w,b,R,S;n?l!==gl&&(b=f*m-g*_)&&(R=v*(m/b)+E*(-_/b)+(_*x-m*p)/b,S=v*(-g/b)+E*(f/b)-(f*x-g*p)/b,v=R,E=S):(w=Z0(e),v=w.x+(~T[0].indexOf("%")?v/100*w.width:v),E=w.y+(~(T[1]||T[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&a.smooth?(p=v-c,x=E-u,a.xOffset=h+(p*f+x*_)-p,a.yOffset=d+(p*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[ii]="0px 0px",o&&(ts(o,a,"xOrigin",c,v),ts(o,a,"yOrigin",u,E),ts(o,a,"xOffset",h,a.xOffset),ts(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+E)},_l=function(e,t){var n=e._gsap||new F0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Oi(e,ii)||"0",u,h,d,f,g,_,m,p,x,T,v,E,w,b,R,S,y,C,U,O,W,X,V,q,G,ee,P,ae,we,Be,K,se;return u=h=d=_=m=p=x=T=v=0,f=g=1,n.svg=!!(e.getCTM&&J0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),i.scale=i.rotate=i.translate="none"),b=Cf(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Ed(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,b)),E=n.xOrigin||0,w=n.yOrigin||0,b!==gl&&(C=b[0],U=b[1],O=b[2],W=b[3],u=X=b[4],h=V=b[5],b.length===6?(f=Math.sqrt(C*C+U*U),g=Math.sqrt(W*W+O*O),_=C||U?yo(U,C)*Is:0,x=O||W?yo(O,W)*Is+_:0,x&&(g*=Math.abs(Math.cos(x*Vo))),n.svg&&(u-=E-(E*C+w*O),h-=w-(E*U+w*W))):(se=b[6],Be=b[7],P=b[8],ae=b[9],we=b[10],K=b[11],u=b[12],h=b[13],d=b[14],R=yo(se,we),m=R*Is,R&&(S=Math.cos(-R),y=Math.sin(-R),q=X*S+P*y,G=V*S+ae*y,ee=se*S+we*y,P=X*-y+P*S,ae=V*-y+ae*S,we=se*-y+we*S,K=Be*-y+K*S,X=q,V=G,se=ee),R=yo(-O,we),p=R*Is,R&&(S=Math.cos(-R),y=Math.sin(-R),q=C*S-P*y,G=U*S-ae*y,ee=O*S-we*y,K=W*y+K*S,C=q,U=G,O=ee),R=yo(U,C),_=R*Is,R&&(S=Math.cos(R),y=Math.sin(R),q=C*S+U*y,G=X*S+V*y,U=U*S-C*y,V=V*S-X*y,C=q,X=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=qt(Math.sqrt(C*C+U*U+O*O)),g=qt(Math.sqrt(V*V+se*se)),R=yo(X,V),x=Math.abs(R)>2e-4?R*Is:0,v=K?1/(K<0?-K:K):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!e_(Oi(e,Gt)),q&&e.setAttribute("transform",q))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=qt(f),n.scaleY=qt(g),n.rotation=qt(_)+a,n.rotationX=qt(m)+a,n.rotationY=qt(p)+a,n.skewX=x+a,n.skewY=T+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ii]=Jc(c)),n.xOffset=n.yOffset=0,n.force3D=Si.force3D,n.renderTransform=n.svg?yw:K0?t_:xw,n.uncache=0,n},Jc=function(e){return(e=e.split(" "))[0]+" "+e[1]},ch=function(e,t,n){var i=Cn(t);return qt(parseFloat(t)+parseFloat(hs(e,"x",n+"px",i)))+i},xw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,t_(e,t)},Ms="0deg",Ma="0px",Es=") ",t_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,T=n.zOrigin,v="",E=p==="auto"&&e&&e!==1||p===!0;if(T&&(h!==Ms||u!==Ms)){var w=parseFloat(u)*Vo,b=Math.sin(w),R=Math.cos(w),S;w=parseFloat(h)*Vo,S=Math.cos(w),o=ch(x,o,b*S*-T),a=ch(x,a,-Math.sin(w)*-T),l=ch(x,l,R*S*-T+T)}m!==Ma&&(v+="perspective("+m+Es),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(E||o!==Ma||a!==Ma||l!==Ma)&&(v+=l!==Ma||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Es),c!==Ms&&(v+="rotate("+c+Es),u!==Ms&&(v+="rotateY("+u+Es),h!==Ms&&(v+="rotateX("+h+Es),(d!==Ms||f!==Ms)&&(v+="skew("+d+", "+f+Es),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Es),x.style[Gt]=v||"translate(0, 0)"},yw=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,T=parseFloat(o),v=parseFloat(a),E,w,b,R,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Vo,c*=Vo,E=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=Vo,S=Math.tan(c-u),S=Math.sqrt(1+S*S),b*=S,R*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,w*=S)),E=qt(E),w=qt(w),b=qt(b),R=qt(R)):(E=h,R=d,w=b=0),(T&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(T=hs(f,"x",o,"px"),v=hs(f,"y",a,"px")),(g||_||m||p)&&(T=qt(T+g-(g*E+_*b)+m),v=qt(v+_-(g*w+_*R)+p)),(i||s)&&(S=f.getBBox(),T=qt(T+i/100*S.width),v=qt(v+s/100*S.height)),S="matrix("+E+","+w+","+b+","+R+","+T+","+v+")",f.setAttribute("transform",S),x&&(f.style[Gt]=S)},Sw=function(e,t,n,i,s){var o=360,a=gn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Is:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*_m)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*_m)%o-~~(c/o)*o)),e._pt=d=new ni(e._pt,t,n,i,c,rw),d.e=u,d.u="deg",e._props.push(n),d},Mm=function(e,t){for(var n in t)e[n]=t[n];return e},Tw=function(e,t,n){var i=Mm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Gt]=t,a=_l(n,1),Zs(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],o[Gt]=t,a=_l(n,1),o[Gt]=c);for(l in Or)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=Cn(c),g=Cn(u),h=f!==g?hs(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new ni(e._pt,a,l,h,d-h,Td),e._pt.u=g||0,e._props.push(l));Mm(a,i)};ti("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Zc[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(g){return br(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var n_={name:"css",register:Md,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,g,_,m,p,x,T,v,E,w,b,R;wf||Md(),this.styles=this.styles||j0(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(mi[_]&&B0(_,t,n,i,e,s)))){if(f=typeof u,g=Zc[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=fl(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",as.lastIndex=0,as.test(c)||(m=Cn(c),p=Cn(u)),p?m!==p&&(c=hs(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],gn(c)&&~c.indexOf("random(")&&(c=fl(c)),Cn(c+"")||c==="auto"||(c+=Si.units[_]||Cn(br(e,_))||""),(c+"").charAt(1)==="="&&(c=br(e,_))):c=br(e,_),d=parseFloat(c),x=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in ir&&(_==="autoAlpha"&&(d===1&&br(e,"visibility")==="hidden"&&h&&(d=0),R.push("visibility",0,a.visibility),ts(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=ir[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Or,T){if(this.styles.save(_),f==="string"&&u.substring(0,6)==="var(--"&&(u=Oi(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(E=e._gsap,E.renderTransform&&!t.parseTransform||_l(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,v=this._pt=new ni(this._pt,a,Gt,0,1,E.renderTransform,E,0,-1),v.dep=1),_==="scale")this._pt=new ni(this._pt,E,"scaleY",E.scaleY,(x?ko(E.scaleY,x+h):h)-E.scaleY||0,Td),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(ii,0,a[ii]),u=_w(u),E.svg?Ed(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&ts(this,E,"zOrigin",E.zOrigin,p),ts(this,a,_,Jc(c),Jc(u)));continue}else if(_==="svgOrigin"){Ed(e,u,1,w,0,this);continue}else if(_ in Q0){Sw(this,E,_,d,x?ko(d,x+u):u);continue}else if(_==="smoothOrigin"){ts(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){Tw(this,u,e);continue}}else _ in a||(_=sa(_)||_);if(T||(h||h===0)&&(d||d===0)&&!iw.test(u)&&_ in a)m=(c+"").substr((d+"").length),h||(h=0),p=Cn(u)||(_ in Si.units?Si.units[_]:m),m!==p&&(d=hs(e,_,c,p)),this._pt=new ni(this._pt,T?E:a,_,d,(x?ko(d,x+h):h)-d,!T&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?ow:Td),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=sw);else if(_ in a)gw.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){gf(_,u);continue}T||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),o.push(_)}}b&&W0(this)},render:function(e,t){if(t.tween._time||!Af())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:br,aliases:ir,getSetter:function(e,t,n){var i=ir[t];return i&&i.indexOf(",")<0&&(t=i),t in Or&&t!==ii&&(e._gsap.x||br(e,"x"))?n&&gm===n?t==="scale"?uw:cw:(gm=n||{})&&(t==="scale"?hw:dw):e.style&&!ff(e.style[t])?aw:~t.indexOf("-")?lw:Mf(e,t)},core:{_removeProperty:Zs,_getMatrix:Cf}};ri.utils.checkPrefix=sa;ri.core.getStyleSaver=j0;(function(r,e,t,n){var i=ti(r+","+e+","+t,function(s){Or[s]=1});ti(e,function(s){Si.units[s]="deg",Q0[s]=1}),ir[i[13]]=r+","+e,ti(n,function(s){var o=s.split(":");ir[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Si.units[r]="px"});ri.registerPlugin(n_);var Pe=ri.registerPlugin(n_)||ri;Pe.core.Tween;/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bw=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Mw=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,Ew=Math.PI/180,ic=Math.sin,rc=Math.cos,Ya=Math.abs,Ea=Math.sqrt,ww=function(e){return typeof e=="number"},Em=1e5,qr=function(e){return Math.round(e*Em)/Em||0};function Aw(r,e,t,n,i,s,o){for(var a=r.length,l,c,u,h,d;--a>-1;)for(l=r[a],c=l.length,u=0;u<c;u+=2)h=l[u],d=l[u+1],l[u]=h*e+d*n+s,l[u+1]=h*t+d*i+o;return r._dirty=1,r}function Rw(r,e,t,n,i,s,o,a,l){if(!(r===a&&e===l)){t=Ya(t),n=Ya(n);var c=i%360*Ew,u=rc(c),h=ic(c),d=Math.PI,f=d*2,g=(r-a)/2,_=(e-l)/2,m=u*g+h*_,p=-h*g+u*_,x=m*m,T=p*p,v=x/(t*t)+T/(n*n);v>1&&(t=Ea(v)*t,n=Ea(v)*n);var E=t*t,w=n*n,b=(E*w-E*T-w*x)/(E*T+w*x);b<0&&(b=0);var R=(s===o?-1:1)*Ea(b),S=R*(t*p/n),y=R*-(n*m/t),C=(r+a)/2,U=(e+l)/2,O=C+(u*S-h*y),W=U+(h*S+u*y),X=(m-S)/t,V=(p-y)/n,q=(-m-S)/t,G=(-p-y)/n,ee=X*X+V*V,P=(V<0?-1:1)*Math.acos(X/Ea(ee)),ae=(X*G-V*q<0?-1:1)*Math.acos((X*q+V*G)/Ea(ee*(q*q+G*G)));isNaN(ae)&&(ae=d),!o&&ae>0?ae-=f:o&&ae<0&&(ae+=f),P%=f,ae%=f;var we=Math.ceil(Ya(ae)/(f/4)),Be=[],K=ae/we,se=4/3*ic(K/2)/(1+rc(K/2)),ve=u*t,le=h*t,xe=h*-n,$e=u*n,be;for(be=0;be<we;be++)i=P+be*K,m=rc(i),p=ic(i),X=rc(i+=K),V=ic(i),Be.push(m-se*p,p+se*m,X+se*V,V-se*X,X,V);for(be=0;be<Be.length;be+=2)m=Be[be],p=Be[be+1],Be[be]=m*ve+p*xe+O,Be[be+1]=m*le+p*$e+W;return Be[be-2]=a,Be[be-1]=l,Be}}function Cw(r){var e=(r+"").replace(Mw,function(S){var y=+S;return y<1e-4&&y>-1e-4?0:y}).match(bw)||[],t=[],n=0,i=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+r,c,u,h,d,f,g,_,m,p,x,T,v,E,w,b,R=function(y,C,U,O){x=(U-y)/3,T=(O-C)/3,_.push(y+x,C+T,U-x,O-T,U,O)};if(!r||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(E=f,isNaN(e[c])?(f=e[c].toUpperCase(),g=f!==e[c]):c--,h=+e[c+1],d=+e[c+2],g&&(h+=n,d+=i),c||(m=h,p=d),f==="M")_&&(_.length<8?t.length-=1:a+=_.length),n=m=h,i=p=d,_=[h,d],t.push(_),c+=2,f="L";else if(f==="C")_||(_=[0,0]),g||(n=i=0),_.push(h,d,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(f==="S")x=n,T=i,(E==="C"||E==="S")&&(x+=n-_[_.length-4],T+=i-_[_.length-3]),g||(n=i=0),_.push(x,T,h,d,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(f==="Q")x=n+(h-n)*s,T=i+(d-i)*s,g||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,_.push(x,T,n+(h-n)*s,i+(d-i)*s,n,i),c+=4;else if(f==="T")x=n-_[_.length-4],T=i-_[_.length-3],_.push(n+x,i+T,h+(n+x*1.5-h)*s,d+(i+T*1.5-d)*s,n=h,i=d),c+=2;else if(f==="H")R(n,i,n=h,i),c+=1;else if(f==="V")R(n,i,n,i=h+(g?i-n:0)),c+=1;else if(f==="L"||f==="Z")f==="Z"&&(h=m,d=p,_.closed=!0),(f==="L"||Ya(n-h)>.5||Ya(i-d)>.5)&&(R(n,i,h,d),f==="L"&&(c+=2)),n=h,i=d;else if(f==="A"){if(w=e[c+4],b=e[c+5],x=e[c+6],T=e[c+7],u=7,w.length>1&&(w.length<3?(T=x,x=b,u--):(T=b,x=w.substr(2),u-=2),b=w.charAt(1),w=w.charAt(0)),v=Rw(n,i,+e[c+1],+e[c+2],+e[c+3],+w,+b,(g?n:0)+x*1,(g?i:0)+T*1),c+=u,v)for(u=0;u<v.length;u++)_.push(v[u]);n=_[_.length-2],i=_[_.length-1]}else console.log(l);return c=_.length,c<6?(t.pop(),c=0):_[0]===_[c-2]&&_[1]===_[c-1]&&(_.closed=!0),t.totalPoints=a+c,t}function Pw(r){ww(r[0])&&(r=[r]);var e="",t=r.length,n,i,s,o;for(i=0;i<t;i++){for(o=r[i],e+="M"+qr(o[0])+","+qr(o[1])+" C",n=o.length,s=2;s<n;s++)e+=qr(o[s++])+","+qr(o[s++])+" "+qr(o[s++])+","+qr(o[s++])+" "+qr(o[s++])+","+qr(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kn,i_,r_=function(){return Kn||typeof window<"u"&&(Kn=window.gsap)&&Kn.registerPlugin&&Kn},wm=function(){Kn=r_(),Kn?(Kn.registerEase("_CE",da.create),i_=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Dw=1e20,sc=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},Uw=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,Iw=/[cLlsSaAhHvVtTqQ]/g,Lw=function(e){var t=e.length,n=Dw,i;for(i=1;i<t;i+=6)+e[i]<n&&(n=+e[i]);return n},Nw=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var i=+e[0]*-1,s=-n,o=e.length,a=1/(+e[o-2]+i),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?Lw(e)+s:+e[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+i)*a,e[c+1]=(+e[c+1]+s)*l},Ow=function r(e,t,n,i,s,o,a,l,c,u,h){var d=(e+n)/2,f=(t+i)/2,g=(n+s)/2,_=(i+o)/2,m=(s+a)/2,p=(o+l)/2,x=(d+g)/2,T=(f+_)/2,v=(g+m)/2,E=(_+p)/2,w=(x+v)/2,b=(T+E)/2,R=a-e,S=l-t,y=Math.abs((n-a)*S-(i-l)*R),C=Math.abs((s-a)*S-(o-l)*R),U;return u||(u=[{x:e,y:t},{x:a,y:l}],h=1),u.splice(h||u.length-1,0,{x:w,y:b}),(y+C)*(y+C)>c*(R*R+S*S)&&(U=u.length,r(e,t,d,f,x,T,w,b,c,u,h),r(w,b,v,E,m,p,a,l,c,u,h+1+(u.length-U))),u},da=function(){function r(t,n,i){i_||wm(),this.id=t,this.setData(n,i)}var e=r.prototype;return e.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var s=n.match(Uw),o=1,a=[],l=[],c=i.precision||1,u=c<=1,h,d,f,g,_,m,p,x,T;if(this.data=n,(Iw.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=Cw(n)[0]),h=s.length,h===4)s.unshift(0,0),s.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[h-2]!=1)&&Nw(s,i.height,i.originY),this.segment=s,g=2;g<h;g+=6)d={x:+s[g-2],y:+s[g-1]},f={x:+s[g+4],y:+s[g+5]},a.push(d,f),Ow(d.x,d.y,+s[g],+s[g+1],+s[g+2],+s[g+3],f.x,f.y,1/(c*2e5),a,a.length-1);for(h=a.length,g=0;g<h;g++)p=a[g],x=a[g-1]||p,(p.x>x.x||x.y!==p.y&&x.x===p.x||p===x)&&p.x<=1?(x.cx=p.x-x.x,x.cy=p.y-x.y,x.n=p,x.nx=p.x,u&&g>1&&Math.abs(x.cy/x.cx-a[g-2].cy/a[g-2].cx)>2&&(u=0),x.cx<o&&(x.cx?o=x.cx:(x.cx=.001,g===h-1&&(x.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(g--,1),h--);if(h=1/o+1|0,_=1/h,m=0,p=a[0],u){for(g=0;g<h;g++)T=g*_,p.nx<T&&(p=a[++m]),d=p.y+(T-p.x)/p.cx*p.cy,l[g]={x:T,cx:_,y:d,cy:0,nx:9},g&&(l[g-1].cy=d-l[g-1].y);m=a[a.length-1],l[h-1].cy=m.y-d,l[h-1].cx=m.x-l[l.length-1].x}else{for(g=0;g<h;g++)p.nx<g*_&&(p=a[++m]),l[g]=p;m<a.length-1&&(l[g-1]=a[a.length-2])}return this.ease=function(v){var E=l[v*h|0]||l[h-1];return E.nx<v&&(E=E.n),E.y+(v-E.x)/E.cx*E.cy},this.ease.custom=this,this.id&&Kn&&Kn.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return r.getSVGData(this,n)},r.create=function(n,i,s){return new r(n,i,s).ease},r.register=function(n){Kn=n,wm()},r.get=function(n){return Kn.parseEase(n)},r.getSVGData=function(n,i){i=i||{};var s=i.width||100,o=i.height||100,a=i.x||0,l=(i.y||0)+o,c=Kn.utils.toArray(i.path)[0],u,h,d,f,g,_,m,p,x,T;if(i.invert&&(o=-o,l=0),typeof n=="string"&&(n=Kn.parseEase(n)),n.custom&&(n=n.custom),n instanceof r)u=Pw(Aw([n.segment],s,0,0,-o,a,l));else{for(u=[a,l],m=Math.max(5,(i.precision||1)*200),f=1/m,m+=2,p=5/m,x=sc(a+f*s),T=sc(l+n(f)*-o),h=(T-l)/(x-a),d=2;d<m;d++)g=sc(a+d*f*s),_=sc(l+n(d*f)*-o),(Math.abs((_-T)/(g-x)-h)>p||d===m-1)&&(u.push(x,T),h=(_-T)/(g-x)),x=g,T=_;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},r}();da.version="3.13.0";da.headless=!0;r_()&&Kn.registerPlugin(da);/*!
 * ScrollToPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pn,s_,Ir,rr,ls,o_,Go,oc,a_=function(){return typeof window<"u"},l_=function(){return Pn||a_()&&(Pn=window.gsap)&&Pn.registerPlugin&&Pn},c_=function(e){return typeof e=="string"},Am=function(e){return typeof e=="function"},vl=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return e===Ir||e===rr||e===ls?Math.max(rr[i],ls[i])-(Ir["inner"+n]||rr[s]||ls[s]):e[i]-e["offset"+n]},xl=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===Ir&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=rr[n]!=null?rr:ls),function(){return e[n]}},Fw=function(e,t,n,i){if(Am(e)&&(e=e(t,n,i)),typeof e!="object")return c_(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&Am(e[o])?e[o](t,n,i):e[o];return s},u_=function(e,t){if(e=o_(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===Ir||t===ls,s=i?{top:rr.clientTop-(Ir.pageYOffset||rr.scrollTop||ls.scrollTop||0),left:rr.clientLeft-(Ir.pageXOffset||rr.scrollLeft||ls.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!i&&t&&(o.x+=xl(t,"x")(),o.y+=xl(t,"y")()),o},Rm=function(e,t,n,i,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:c_(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-s:e==="max"?vl(t,n)-s:Math.min(vl(t,n),u_(e,t)[n]-s)},wd=function(){Pn=l_(),a_()&&Pn&&typeof document<"u"&&document.body&&(Ir=window,ls=document.body,rr=document.documentElement,o_=Pn.utils.toArray,Pn.config({autoKillThreshold:7}),Go=Pn.config(),s_=1)},fa={version:"3.13.0",name:"scrollTo",rawVars:1,register:function(e){Pn=e,wd()},init:function(e,t,n,i,s){s_||wd();var o=this,a=Pn.getProperty(e,"scrollSnapType");o.isWin=e===Ir,o.target=e,o.tween=n,t=Fw(t,i,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:Go).autoKill,o.getX=xl(e,"x"),o.getY=xl(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),oc||(oc=Pn.core.globals().ScrollTrigger),Pn.getProperty(e,"scrollBehavior")==="smooth"&&Pn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,Rm(t.x,e,"x",o.x,t.offsetX||0),i,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,Rm(t.y,e,"y",o.y,t.offsetY||0),i,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,h=t.snapInline,d,f,g,_,m;n;)n.r(e,n.d),n=n._next;d=c||!t.skipX?t.getX():a,f=c||!t.skipY?t.getY():l,g=f-l,_=d-a,m=Go.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>m||_<-m)&&d<vl(i,"x")&&(t.skipX=1),!t.skipY&&(g>m||g<-m)&&f<vl(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?Ir.scrollTo(t.skipX?d:t.x,t.skipY?f:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),u&&(e===1||e===0)&&(f=i.scrollTop,d=i.scrollLeft,h?i.style.scrollSnapType=h:i.style.removeProperty("scroll-snap-type"),i.scrollTop=f+1,i.scrollLeft=d+1,i.scrollTop=f,i.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,oc&&oc.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};fa.max=vl;fa.getOffset=u_;fa.buildGetter=xl;fa.config=function(r){Go||wd()||(Go=Pn.config());for(var e in r)Go[e]=r[e]};l_()&&Pn.registerPlugin(fa);function Bw(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function kw(r,e,t){return e&&Bw(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xn,Dc,vi,ns,is,Ho,h_,Ls,$a,d_,Pr,Hi,f_,p_=function(){return xn||typeof window<"u"&&(xn=window.gsap)&&xn.registerPlugin&&xn},m_=1,Io=[],ct=[],ar=[],ja=Date.now,Ad=function(e,t){return t},zw=function(){var e=$a.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ct),i.push.apply(i,ar),ct=n,ar=i,Ad=function(o,a){return t[o](a)}},cs=function(e,t){return~ar.indexOf(e)&&ar[ar.indexOf(e)+1][t]},Ka=function(e){return!!~d_.indexOf(e)},Bn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Fn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ac="scrollLeft",lc="scrollTop",Rd=function(){return Pr&&Pr.isPressed||ct.cache++},Qc=function(e,t){var n=function i(s){if(s||s===0){m_&&(vi.history.scrollRestoration="manual");var o=Pr&&Pr.isPressed;s=i.v=Math.round(s)||(Pr&&Pr.iOS?1:0),e(s),i.cacheID=ct.cache,o&&Ad("ss",s)}else(t||ct.cache!==i.cacheID||Ad("ref"))&&(i.cacheID=ct.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Wn={s:ac,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Qc(function(r){return arguments.length?vi.scrollTo(r,an.sc()):vi.pageXOffset||ns[ac]||is[ac]||Ho[ac]||0})},an={s:lc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Wn,sc:Qc(function(r){return arguments.length?vi.scrollTo(Wn.sc(),r):vi.pageYOffset||ns[lc]||is[lc]||Ho[lc]||0})},jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||xn.utils.toArray)(e)[0]||(typeof e=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Vw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ds=function(e,t){var n=t.s,i=t.sc;Ka(e)&&(e=ns.scrollingElement||is);var s=ct.indexOf(e),o=i===an.sc?1:2;!~s&&(s=ct.push(e)-1),ct[s+o]||Bn(e,"scroll",Rd);var a=ct[s+o],l=a||(ct[s+o]=Qc(cs(e,n),!0)||(Ka(e)?i:Qc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=xn.getProperty(e,"scrollBehavior")==="smooth"),l},Cd=function(e,t,n){var i=e,s=e,o=ja(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=ja();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,m=s,p=ja();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},wa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Cm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},g_=function(){$a=xn.core.globals().ScrollTrigger,$a&&$a.core&&zw()},__=function(e){return xn=e||p_(),!Dc&&xn&&typeof document<"u"&&document.body&&(vi=window,ns=document,is=ns.documentElement,Ho=ns.body,d_=[vi,ns,is,Ho],xn.utils.clamp,f_=xn.core.context||function(){},Ls="onpointerenter"in Ho?"pointer":"mouse",h_=$t.isTouch=vi.matchMedia&&vi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in vi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Hi=$t.eventTypes=("ontouchstart"in is?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in is?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return m_=0},500),g_(),Dc=1),Dc};Wn.op=an;ct.cache=0;var $t=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Dc||__(xn)||console.warn("Please gsap.registerPlugin(Observer)"),$a||g_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,x=n.onDrag,T=n.onPress,v=n.onRelease,E=n.onRight,w=n.onLeft,b=n.onUp,R=n.onDown,S=n.onChangeX,y=n.onChangeY,C=n.onChange,U=n.onToggleX,O=n.onToggleY,W=n.onHover,X=n.onHoverEnd,V=n.onMove,q=n.ignoreCheck,G=n.isNormalizer,ee=n.onGestureStart,P=n.onGestureEnd,ae=n.onWheel,we=n.onEnable,Be=n.onDisable,K=n.onClick,se=n.scrollSpeed,ve=n.capture,le=n.allowClicks,xe=n.lockAxis,$e=n.onLockAxis;this.target=a=jn(a)||is,this.vars=n,f&&(f=xn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,se=se||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(vi.getComputedStyle(Ho).lineHeight)||22);var be,rt,ot,Ae,L,xt,Je,Y=this,Se=0,tt=0,Le=n.passive||!u&&n.passive!==!1,Ue=ds(a,Wn),Tt=ds(a,an),D=Ue(),M=Tt(),H=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Hi[0]==="pointerdown",Q=Ka(a),J=a.ownerDocument||ns,Z=[0,0,0],Me=[0,0,0],ce=0,Re=function(){return ce=ja()},de=function(Ie,nt){return(Y.event=Ie)&&f&&Vw(Ie.target,f)||nt&&H&&Ie.pointerType!=="touch"||q&&q(Ie,nt)},ie=function(){Y._vx.reset(),Y._vy.reset(),rt.pause(),h&&h(Y)},me=function(){var Ie=Y.deltaX=Cm(Z),nt=Y.deltaY=Cm(Me),fe=Math.abs(Ie)>=i,Ze=Math.abs(nt)>=i;C&&(fe||Ze)&&C(Y,Ie,nt,Z,Me),fe&&(E&&Y.deltaX>0&&E(Y),w&&Y.deltaX<0&&w(Y),S&&S(Y),U&&Y.deltaX<0!=Se<0&&U(Y),Se=Y.deltaX,Z[0]=Z[1]=Z[2]=0),Ze&&(R&&Y.deltaY>0&&R(Y),b&&Y.deltaY<0&&b(Y),y&&y(Y),O&&Y.deltaY<0!=tt<0&&O(Y),tt=Y.deltaY,Me[0]=Me[1]=Me[2]=0),(Ae||ot)&&(V&&V(Y),ot&&(m&&ot===1&&m(Y),x&&x(Y),ot=0),Ae=!1),xt&&!(xt=!1)&&$e&&$e(Y),L&&(ae(Y),L=!1),be=0},Ve=function(Ie,nt,fe){Z[fe]+=Ie,Me[fe]+=nt,Y._vx.update(Ie),Y._vy.update(nt),c?be||(be=requestAnimationFrame(me)):me()},ke=function(Ie,nt){xe&&!Je&&(Y.axis=Je=Math.abs(Ie)>Math.abs(nt)?"x":"y",xt=!0),Je!=="y"&&(Z[2]+=Ie,Y._vx.update(Ie,!0)),Je!=="x"&&(Me[2]+=nt,Y._vy.update(nt,!0)),c?be||(be=requestAnimationFrame(me)):me()},ue=function(Ie){if(!de(Ie,1)){Ie=wa(Ie,u);var nt=Ie.clientX,fe=Ie.clientY,Ze=nt-Y.x,Ne=fe-Y.y,je=Y.isDragging;Y.x=nt,Y.y=fe,(je||(Ze||Ne)&&(Math.abs(Y.startX-nt)>=s||Math.abs(Y.startY-fe)>=s))&&(ot=je?2:1,je||(Y.isDragging=!0),ke(Ze,Ne))}},We=Y.onPress=function(ye){de(ye,1)||ye&&ye.button||(Y.axis=Je=null,rt.pause(),Y.isPressed=!0,ye=wa(ye),Se=tt=0,Y.startX=Y.x=ye.clientX,Y.startY=Y.y=ye.clientY,Y._vx.reset(),Y._vy.reset(),Bn(G?a:J,Hi[1],ue,Le,!0),Y.deltaX=Y.deltaY=0,T&&T(Y))},I=Y.onRelease=function(ye){if(!de(ye,1)){Fn(G?a:J,Hi[1],ue,!0);var Ie=!isNaN(Y.y-Y.startY),nt=Y.isDragging,fe=nt&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Ze=wa(ye);!fe&&Ie&&(Y._vx.reset(),Y._vy.reset(),u&&le&&xn.delayedCall(.08,function(){if(ja()-ce>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if(J.createEvent){var Ne=J.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,vi,1,Ze.screenX,Ze.screenY,Ze.clientX,Ze.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(Ne)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,h&&nt&&!G&&rt.restart(!0),ot&&me(),p&&nt&&p(Y),v&&v(Y,fe)}},he=function(Ie){return Ie.touches&&Ie.touches.length>1&&(Y.isGesturing=!0)&&ee(Ie,Y.isDragging)},ne=function(){return(Y.isGesturing=!1)||P(Y)},ge=function(Ie){if(!de(Ie)){var nt=Ue(),fe=Tt();Ve((nt-D)*se,(fe-M)*se,1),D=nt,M=fe,h&&rt.restart(!0)}},re=function(Ie){if(!de(Ie)){Ie=wa(Ie,u),ae&&(L=!0);var nt=(Ie.deltaMode===1?l:Ie.deltaMode===2?vi.innerHeight:1)*g;Ve(Ie.deltaX*nt,Ie.deltaY*nt,0),h&&!G&&rt.restart(!0)}},te=function(Ie){if(!de(Ie)){var nt=Ie.clientX,fe=Ie.clientY,Ze=nt-Y.x,Ne=fe-Y.y;Y.x=nt,Y.y=fe,Ae=!0,h&&rt.restart(!0),(Ze||Ne)&&ke(Ze,Ne)}},Ee=function(Ie){Y.event=Ie,W(Y)},He=function(Ie){Y.event=Ie,X(Y)},vt=function(Ie){return de(Ie)||wa(Ie,u)&&K(Y)};rt=Y._dc=xn.delayedCall(d||.25,ie).pause(),Y.deltaX=Y.deltaY=0,Y._vx=Cd(0,50,!0),Y._vy=Cd(0,50,!0),Y.scrollX=Ue,Y.scrollY=Tt,Y.isDragging=Y.isGesturing=Y.isPressed=!1,f_(this),Y.enable=function(ye){return Y.isEnabled||(Bn(Q?J:a,"scroll",Rd),o.indexOf("scroll")>=0&&Bn(Q?J:a,"scroll",ge,Le,ve),o.indexOf("wheel")>=0&&Bn(a,"wheel",re,Le,ve),(o.indexOf("touch")>=0&&h_||o.indexOf("pointer")>=0)&&(Bn(a,Hi[0],We,Le,ve),Bn(J,Hi[2],I),Bn(J,Hi[3],I),le&&Bn(a,"click",Re,!0,!0),K&&Bn(a,"click",vt),ee&&Bn(J,"gesturestart",he),P&&Bn(J,"gestureend",ne),W&&Bn(a,Ls+"enter",Ee),X&&Bn(a,Ls+"leave",He),V&&Bn(a,Ls+"move",te)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=Ae=ot=!1,Y._vx.reset(),Y._vy.reset(),D=Ue(),M=Tt(),ye&&ye.type&&We(ye),we&&we(Y)),Y},Y.disable=function(){Y.isEnabled&&(Io.filter(function(ye){return ye!==Y&&Ka(ye.target)}).length||Fn(Q?J:a,"scroll",Rd),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Fn(G?a:J,Hi[1],ue,!0)),Fn(Q?J:a,"scroll",ge,ve),Fn(a,"wheel",re,ve),Fn(a,Hi[0],We,ve),Fn(J,Hi[2],I),Fn(J,Hi[3],I),Fn(a,"click",Re,!0),Fn(a,"click",vt),Fn(J,"gesturestart",he),Fn(J,"gestureend",ne),Fn(a,Ls+"enter",Ee),Fn(a,Ls+"leave",He),Fn(a,Ls+"move",te),Y.isEnabled=Y.isPressed=Y.isDragging=!1,Be&&Be(Y))},Y.kill=Y.revert=function(){Y.disable();var ye=Io.indexOf(Y);ye>=0&&Io.splice(ye,1),Pr===Y&&(Pr=0)},Io.push(Y),G&&Ka(a)&&(Pr=Y),Y.enable(_)},kw(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();$t.version="3.13.0";$t.create=function(r){return new $t(r)};$t.register=__;$t.getAll=function(){return Io.slice()};$t.getById=function(r){return Io.filter(function(e){return e.vars.id===r})[0]};p_()&&xn.registerPlugin($t);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,Ao,lt,Nt,gi,St,Pf,eu,yl,Za,Oa,cc,En,gu,Pd,Vn,Pm,Dm,Ro,v_,uh,x_,zn,Dd,y_,S_,Zr,Ud,Df,Wo,Uf,tu,Id,hh,uc=1,An=Date.now,dh=An(),Bi=0,Fa=0,Um=function(e,t,n){var i=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Im=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Gw=function r(){return Fa&&requestAnimationFrame(r)},Lm=function(){return gu=1},Nm=function(){return gu=0},Ji=function(e){return e},Ba=function(e){return Math.round(e*1e5)/1e5||0},T_=function(){return typeof window<"u"},b_=function(){return Ce||T_()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},Js=function(e){return!!~Pf.indexOf(e)},M_=function(e){return(e==="Height"?Uf:lt["inner"+e])||gi["client"+e]||St["client"+e]},E_=function(e){return cs(e,"getBoundingClientRect")||(Js(e)?function(){return Oc.width=lt.innerWidth,Oc.height=Uf,Oc}:function(){return Er(e)})},Hw=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=cs(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?M_(s):e["client"+s])||0}},Ww=function(e,t){return!t||~ar.indexOf(e)?E_(e):function(){return Oc}},sr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=cs(e,n))?o()-E_(e)()[s]:Js(e)?(gi[n]||St[n])-M_(i):e[n]-e["offset"+i])},hc=function(e,t){for(var n=0;n<Ro.length;n+=3)(!t||~t.indexOf(Ro[n+1]))&&e(Ro[n],Ro[n+1],Ro[n+2])},pi=function(e){return typeof e=="string"},Dn=function(e){return typeof e=="function"},ka=function(e){return typeof e=="number"},Ns=function(e){return typeof e=="object"},Aa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},fh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},So=Math.abs,w_="left",A_="top",If="right",Lf="bottom",Ys="width",$s="height",Ja="Right",Qa="Left",el="Top",tl="Bottom",Jt="padding",Ui="margin",oa="Width",Nf="Height",sn="px",Ii=function(e){return lt.getComputedStyle(e)},Xw=function(e){var t=Ii(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Om=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Er=function(e,t){var n=t&&Ii(e)[Pd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},nu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},R_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},qw=function(e){return function(t){return Ce.utils.snap(R_(e),t)}},Of=function(e){var t=Ce.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Yw=function(e){return function(t,n){return Of(R_(e))(t,n.direction)}},dc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},pn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},fn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},fc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Fm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},pc={toggleActions:"play",anticipatePin:0},iu={top:0,left:0,center:.5,bottom:1,right:1},Uc=function(e,t){if(pi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in iu?iu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},mc=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,g=Nt.createElement("div"),_=Js(n)||cs(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?St:n,x=e.indexOf("start")!==-1,T=x?c:u,v="border-color:"+T+";font-size:"+h+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===an?If:Lf)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Ic(g,0,i,x),g},Ic=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+oa]=1,s["border"+a+oa]=0,s[n.p]=t+"px",Ce.set(e,s)},st=[],Ld={},Sl,Bm=function(){return An()-Bi>34&&(Sl||(Sl=requestAnimationFrame(Lr)))},To=function(){(!zn||!zn.isPressed||zn.startX>St.clientWidth)&&(ct.cache++,zn?Sl||(Sl=requestAnimationFrame(Lr)):Lr(),Bi||eo("scrollStart"),Bi=An())},ph=function(){S_=lt.innerWidth,y_=lt.innerHeight},za=function(e){ct.cache++,(e===!0||!En&&!x_&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!Dd||S_!==lt.innerWidth||Math.abs(lt.innerHeight-y_)>lt.innerHeight*.25))&&eu.restart(!0)},Qs={},$w=[],C_=function r(){return fn(ht,"scrollEnd",r)||zs(!0)},eo=function(e){return Qs[e]&&Qs[e].map(function(t){return t()})||$w},fi=[],P_=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},Ff=function(e,t){var n;for(Vn=0;Vn<st.length;Vn++)n=st[Vn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));tu=!0,t&&P_(t),t||eo("revert")},D_=function(e,t){ct.cache++,(t||!Gn)&&ct.forEach(function(n){return Dn(n)&&n.cacheID++&&(n.rec=0)}),pi(e)&&(lt.history.scrollRestoration=Df=e)},Gn,js=0,km,jw=function(){if(km!==js){var e=km=js;requestAnimationFrame(function(){return e===js&&zs(!0)})}},U_=function(){St.appendChild(Wo),Uf=!zn&&Wo.offsetHeight||lt.innerHeight,St.removeChild(Wo)},zm=function(e){return yl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},zs=function(e,t){if(gi=Nt.documentElement,St=Nt.body,Pf=[lt,Nt,gi,St],Bi&&!e&&!tu){pn(ht,"scrollEnd",C_);return}U_(),Gn=ht.isRefreshing=!0,ct.forEach(function(i){return Dn(i)&&++i.cacheID&&(i.rec=i())});var n=eo("refreshInit");v_&&ht.sort(),t||Ff(),ct.forEach(function(i){Dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),st.slice(0).forEach(function(i){return i.refresh()}),tu=!1,st.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Id=1,zm(!0),st.forEach(function(i){var s=sr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),zm(!1),Id=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ct.forEach(function(i){Dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),D_(Df,1),eu.pause(),js++,Gn=2,Lr(2),st.forEach(function(i){return Dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Gn=ht.isRefreshing=!1,eo("refresh")},Nd=0,Lc=1,nl,Lr=function(e){if(e===2||!Gn&&!tu){ht.isUpdating=!0,nl&&nl.update(0);var t=st.length,n=An(),i=n-dh>=50,s=t&&st[0].scroll();if(Lc=Nd>s?-1:1,Gn||(Nd=s),i&&(Bi&&!gu&&n-Bi>200&&(Bi=0,eo("scrollEnd")),Oa=dh,dh=n),Lc<0){for(Vn=t;Vn-- >0;)st[Vn]&&st[Vn].update(0,i);Lc=1}else for(Vn=0;Vn<t;Vn++)st[Vn]&&st[Vn].update(0,i);ht.isUpdating=!1}Sl=0},Od=[w_,A_,Lf,If,Ui+tl,Ui+Ja,Ui+el,Ui+Qa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Nc=Od.concat([Ys,$s,"boxSizing","max"+oa,"max"+Nf,"position",Ui,Jt,Jt+el,Jt+Ja,Jt+tl,Jt+Qa]),Kw=function(e,t,n){Xo(n);var i=e._gsap;if(i.spacerIsNative)Xo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},mh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Od.length,o=t.style,a=e.style,l;s--;)l=Od[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Lf]=a[If]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ys]=nu(e,Wn)+sn,o[$s]=nu(e,an)+sn,o[Jt]=a[Ui]=a[A_]=a[w_]="0",Xo(i),a[Ys]=a["max"+oa]=n[Ys],a[$s]=a["max"+Nf]=n[$s],a[Jt]=n[Jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Zw=/([A-Z])/g,Xo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Zw,"-$1").toLowerCase())}},gc=function(e){for(var t=Nc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Nc[s],n[Nc[s]]);return i.t=e,i},Jw=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Oc={left:0,top:0},Vm=function(e,t,n,i,s,o,a,l,c,u,h,d,f,g){Dn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Uc("0"+e.substr(3),n):0));var _=f?f.time():0,m,p,x;if(f&&f.seek(0),isNaN(e)||(e=+e),ka(e))f&&(e=Ce.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&Ic(a,n,i,!0);else{Dn(t)&&(t=t(l));var T=(e||"0").split(" "),v,E,w,b;x=jn(t,l)||St,v=Er(x)||{},(!v||!v.left&&!v.top)&&Ii(x).display==="none"&&(b=x.style.display,x.style.display="block",v=Er(x),b?x.style.display=b:x.style.removeProperty("display")),E=Uc(T[0],v[i.d]),w=Uc(T[1]||"0",n),e=v[i.p]-c[i.p]-u+E+s-w,a&&Ic(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+n,S=o._isStart;m="scroll"+i.d2,Ic(o,R,i,S&&R>20||!S&&(h?Math.max(St[m],gi[m]):o.parentNode[m])<=R+1),h&&(c=Er(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+sn))}return f&&x&&(m=Er(x),f.seek(d),p=Er(x),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},Qw=/(webkit|moz|length|cssText|inset)/i,Gm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===St){e._stOrig=s.cssText,a=Ii(e);for(o in a)!+o&&!Qw.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},I_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},_c=function(e,t,n){var i={};i[t.p]="+="+n,Ce.set(e,i)},Hm=function(e,t){var n=ds(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,g={};c=c||n();var _=I_(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ct.cache++,o.tween&&Lr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Ce.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},pn(e,"wheel",n.wheelHandler),ht.isTouch&&pn(e,"touchmove",n.wheelHandler),s},ht=function(){function r(t,n){Ao||r.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ud(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Fa){this.update=this.refresh=this.kill=Ji;return}n=Om(pi(n)||ka(n)||n.nodeType?{trigger:n}:n,pc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,T=s.once,v=s.snap,E=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,R=s.fastScrollEnd,S=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Wn:an,C=!h&&h!==0,U=jn(n.scroller||lt),O=Ce.core.getCache(U),W=Js(U),X=("pinType"in n?n.pinType:cs(U,"pinType")||W&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=C&&n.toggleActions.split(" "),G="markers"in n?n.markers:pc.markers,ee=W?0:parseFloat(Ii(U)["border"+y.p2+oa])||0,P=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(P)},we=Hw(U,W,y),Be=Ww(U,W),K=0,se=0,ve=0,le=ds(U,y),xe,$e,be,rt,ot,Ae,L,xt,Je,Y,Se,tt,Le,Ue,Tt,D,M,H,Q,J,Z,Me,ce,Re,de,ie,me,Ve,ke,ue,We,I,he,ne,ge,re,te,Ee,He;if(P._startClamp=P._endClamp=!1,P._dir=y,m*=45,P.scroller=U,P.scroll=b?b.time.bind(b):le,rt=le(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(v_=1,n.refreshPriority===-9999&&(nl=P)),O.tweenScroll=O.tweenScroll||{top:Hm(U,an),left:Hm(U,Wn)},P.tweenTo=xe=O.tweenScroll[y.p],P.scrubDuration=function(fe){he=ka(fe)&&fe,he?I?I.duration(fe):I=Ce.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return p&&p(P)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),ue=0,l||(l=i.vars.id)),v&&((!Ns(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in St.style&&Ce.set(W?[St,gi]:U,{scrollBehavior:"auto"}),ct.forEach(function(fe){return Dn(fe)&&fe.target===(W?Nt.scrollingElement||gi:U)&&(fe.smooth=!1)}),be=Dn(v.snapTo)?v.snapTo:v.snapTo==="labels"?qw(i):v.snapTo==="labelsDirectional"?Yw(i):v.directional!==!1?function(fe,Ze){return Of(v.snapTo)(fe,An()-se<500?0:Ze.direction)}:Ce.utils.snap(v.snapTo),ne=v.duration||{min:.1,max:2},ne=Ns(ne)?Za(ne.min,ne.max):Za(ne,ne),ge=Ce.delayedCall(v.delay||he/2||.1,function(){var fe=le(),Ze=An()-se<500,Ne=xe.tween;if((Ze||Math.abs(P.getVelocity())<10)&&!Ne&&!gu&&K!==fe){var je=(fe-Ae)/Ue,Xt=i&&!C?i.totalProgress():je,at=Ze?0:(Xt-We)/(An()-Oa)*1e3||0,Lt=Ce.utils.clamp(-je,1-je,So(at/2)*at/.185),tn=je+(v.inertia===!1?0:Lt),Rt,Ct,yt=v,oi=yt.onStart,Ot=yt.onInterrupt,Ln=yt.onComplete;if(Rt=be(tn,P),ka(Rt)||(Rt=tn),Ct=Math.max(0,Math.round(Ae+Rt*Ue)),fe<=L&&fe>=Ae&&Ct!==fe){if(Ne&&!Ne._initted&&Ne.data<=So(Ct-fe))return;v.inertia===!1&&(Lt=Rt-je),xe(Ct,{duration:ne(So(Math.max(So(tn-Xt),So(Rt-Xt))*.185/at/.05||0)),ease:v.ease||"power3",data:So(Ct-fe),onInterrupt:function(){return ge.restart(!0)&&Ot&&Ot(P)},onComplete:function(){P.update(),K=le(),i&&!C&&(I?I.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),ue=We=i&&!C?i.totalProgress():P.progress,x&&x(P),Ln&&Ln(P)}},fe,Lt*Ue,Ct-fe-Lt*Ue),oi&&oi(P,xe.tween)}}else P.isActive&&K!==fe&&ge.restart(!0)}).pause()),l&&(Ld[l]=P),d=P.trigger=jn(d||f!==!0&&f),He=d&&d._gsap&&d._gsap.stRevert,He&&(He=He(P)),f=f===!0?d:jn(f),pi(a)&&(a={targets:d,className:a}),f&&(g===!1||g===Ui||(g=!g&&f.parentNode&&f.parentNode.style&&Ii(f.parentNode).display==="flex"?!1:Jt),P.pin=f,$e=Ce.core.getCache(f),$e.spacer?Tt=$e.pinState:(w&&(w=jn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),$e.spacerIsNative=!!w,w&&($e.spacerState=gc(w))),$e.spacer=H=w||Nt.createElement("div"),H.classList.add("pin-spacer"),l&&H.classList.add("pin-spacer-"+l),$e.pinState=Tt=gc(f)),n.force3D!==!1&&Ce.set(f,{force3D:!0}),P.spacer=H=$e.spacer,ke=Ii(f),Re=ke[g+y.os2],J=Ce.getProperty(f),Z=Ce.quickSetter(f,y.a,sn),mh(f,H,ke),M=gc(f)),G){tt=Ns(G)?Om(G,Fm):Fm,Y=mc("scroller-start",l,U,y,tt,0),Se=mc("scroller-end",l,U,y,tt,0,Y),Q=Y["offset"+y.op.d2];var vt=jn(cs(U,"content")||U);xt=this.markerStart=mc("start",l,vt,y,tt,Q,0,b),Je=this.markerEnd=mc("end",l,vt,y,tt,Q,0,b),b&&(Ee=Ce.quickSetter([xt,Je],y.a,sn)),!X&&!(ar.length&&cs(U,"fixedMarkers")===!0)&&(Xw(W?St:U),Ce.set([Y,Se],{force3D:!0}),ie=Ce.quickSetter(Y,y.a,sn),Ve=Ce.quickSetter(Se,y.a,sn))}if(b){var ye=b.vars.onUpdate,Ie=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){P.update(0,0,1),ye&&ye.apply(b,Ie||[])})}if(P.previous=function(){return st[st.indexOf(P)-1]},P.next=function(){return st[st.indexOf(P)+1]},P.revert=function(fe,Ze){if(!Ze)return P.kill(!0);var Ne=fe!==!1||!P.enabled,je=En;Ne!==P.isReverted&&(Ne&&(re=Math.max(le(),P.scroll.rec||0),ve=P.progress,te=i&&i.progress()),xt&&[xt,Je,Y,Se].forEach(function(Xt){return Xt.style.display=Ne?"none":"block"}),Ne&&(En=P,P.update(Ne)),f&&(!E||!P.isActive)&&(Ne?Kw(f,H,Tt):mh(f,H,Ii(f),de)),Ne||P.update(Ne),En=je,P.isReverted=Ne)},P.refresh=function(fe,Ze,Ne,je){if(!((En||!P.enabled)&&!Ze)){if(f&&fe&&Bi){pn(r,"scrollEnd",C_);return}!Gn&&ae&&ae(P),En=P,xe.tween&&!Ne&&(xe.tween.kill(),xe.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Qe){return Qe.vars.immediateRender&&Qe.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Xt=we(),at=Be(),Lt=b?b.duration():sr(U,y),tn=Ue<=.01||!Ue,Rt=0,Ct=je||0,yt=Ns(Ne)?Ne.end:n.end,oi=n.endTrigger||d,Ot=Ns(Ne)?Ne.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Ln=P.pinnedContainer=n.pinnedContainer&&jn(n.pinnedContainer,P),Ei=d&&Math.max(0,st.indexOf(P))||0,nn=Ei,rn,A,z,j,$,B,oe,pe,De,Te,ze,qe,Fe;for(G&&Ns(Ne)&&(qe=Ce.getProperty(Y,y.p),Fe=Ce.getProperty(Se,y.p));nn-- >0;)B=st[nn],B.end||B.refresh(0,1)||(En=P),oe=B.pin,oe&&(oe===d||oe===f||oe===Ln)&&!B.isReverted&&(Te||(Te=[]),Te.unshift(B),B.revert(!0,!0)),B!==st[nn]&&(Ei--,nn--);for(Dn(Ot)&&(Ot=Ot(P)),Ot=Um(Ot,"start",P),Ae=Vm(Ot,d,Xt,y,le(),xt,Y,P,at,ee,X,Lt,b,P._startClamp&&"_startClamp")||(f?-.001:0),Dn(yt)&&(yt=yt(P)),pi(yt)&&!yt.indexOf("+=")&&(~yt.indexOf(" ")?yt=(pi(Ot)?Ot.split(" ")[0]:"")+yt:(Rt=Uc(yt.substr(2),Xt),yt=pi(Ot)?Ot:(b?Ce.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Ae):Ae)+Rt,oi=d)),yt=Um(yt,"end",P),L=Math.max(Ae,Vm(yt||(oi?"100% 0":Lt),oi,Xt,y,le()+Rt,Je,Se,P,at,ee,X,Lt,b,P._endClamp&&"_endClamp"))||-.001,Rt=0,nn=Ei;nn--;)B=st[nn],oe=B.pin,oe&&B.start-B._pinPush<=Ae&&!b&&B.end>0&&(rn=B.end-(P._startClamp?Math.max(0,B.start):B.start),(oe===d&&B.start-B._pinPush<Ae||oe===Ln)&&isNaN(Ot)&&(Rt+=rn*(1-B.progress)),oe===f&&(Ct+=rn));if(Ae+=Rt,L+=Rt,P._startClamp&&(P._startClamp+=Rt),P._endClamp&&!Gn&&(P._endClamp=L||-.001,L=Math.min(L,sr(U,y))),Ue=L-Ae||(Ae-=.01)&&.001,tn&&(ve=Ce.utils.clamp(0,1,Ce.utils.normalize(Ae,L,re))),P._pinPush=Ct,xt&&Rt&&(rn={},rn[y.a]="+="+Rt,Ln&&(rn[y.p]="-="+le()),Ce.set([xt,Je],rn)),f&&!(Id&&P.end>=sr(U,y)))rn=Ii(f),j=y===an,z=le(),Me=parseFloat(J(y.a))+Ct,!Lt&&L>1&&(ze=(W?Nt.scrollingElement||gi:U).style,ze={style:ze,value:ze["overflow"+y.a.toUpperCase()]},W&&Ii(St)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ze.style["overflow"+y.a.toUpperCase()]="scroll")),mh(f,H,rn),M=gc(f),A=Er(f,!0),pe=X&&ds(U,j?Wn:an)(),g?(de=[g+y.os2,Ue+Ct+sn],de.t=H,nn=g===Jt?nu(f,y)+Ue+Ct:0,nn&&(de.push(y.d,nn+sn),H.style.flexBasis!=="auto"&&(H.style.flexBasis=nn+sn)),Xo(de),Ln&&st.forEach(function(Qe){Qe.pin===Ln&&Qe.vars.pinSpacing!==!1&&(Qe._subPinOffset=!0)}),X&&le(re)):(nn=nu(f,y),nn&&H.style.flexBasis!=="auto"&&(H.style.flexBasis=nn+sn)),X&&($={top:A.top+(j?z-Ae:pe)+sn,left:A.left+(j?pe:z-Ae)+sn,boxSizing:"border-box",position:"fixed"},$[Ys]=$["max"+oa]=Math.ceil(A.width)+sn,$[$s]=$["max"+Nf]=Math.ceil(A.height)+sn,$[Ui]=$[Ui+el]=$[Ui+Ja]=$[Ui+tl]=$[Ui+Qa]="0",$[Jt]=rn[Jt],$[Jt+el]=rn[Jt+el],$[Jt+Ja]=rn[Jt+Ja],$[Jt+tl]=rn[Jt+tl],$[Jt+Qa]=rn[Jt+Qa],D=Jw(Tt,$,E),Gn&&le(0)),i?(De=i._initted,uh(1),i.render(i.duration(),!0,!0),ce=J(y.a)-Me+Ue+Ct,me=Math.abs(Ue-ce)>1,X&&me&&D.splice(D.length-2,2),i.render(0,!0,!0),De||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),uh(0)):ce=Ue,ze&&(ze.value?ze.style["overflow"+y.a.toUpperCase()]=ze.value:ze.style.removeProperty("overflow-"+y.a));else if(d&&le()&&!b)for(A=d.parentNode;A&&A!==St;)A._pinOffset&&(Ae-=A._pinOffset,L-=A._pinOffset),A=A.parentNode;Te&&Te.forEach(function(Qe){return Qe.revert(!1,!0)}),P.start=Ae,P.end=L,rt=ot=Gn?re:le(),!b&&!Gn&&(rt<re&&le(re),P.scroll.rec=0),P.revert(!1,!0),se=An(),ge&&(K=-1,ge.restart(!0)),En=0,i&&C&&(i._initted||te)&&i.progress()!==te&&i.progress(te||0,!0).render(i.time(),!0,!0),(tn||ve!==P.progress||b||_||i&&!i._initted)&&(i&&!C&&(i._initted||ve||i.vars.immediateRender!==!1)&&i.totalProgress(b&&Ae<-.001&&!ve?Ce.utils.normalize(Ae,L,0):ve,!0),P.progress=tn||(rt-Ae)/Ue===ve?0:ve),f&&g&&(H._pinOffset=Math.round(P.progress*ce)),I&&I.invalidate(),isNaN(qe)||(qe-=Ce.getProperty(Y,y.p),Fe-=Ce.getProperty(Se,y.p),_c(Y,y,qe),_c(xt,y,qe-(je||0)),_c(Se,y,Fe),_c(Je,y,Fe-(je||0))),tn&&!Gn&&P.update(),u&&!Gn&&!Le&&(Le=!0,u(P),Le=!1)}},P.getVelocity=function(){return(le()-ot)/(An()-Oa)*1e3||0},P.endAnimation=function(){Aa(P.callbackAnimation),i&&(I?I.progress(1):i.paused()?C||Aa(i,P.direction<0,1):Aa(i,i.reversed()))},P.labelToScroll=function(fe){return i&&i.labels&&(Ae||P.refresh()||Ae)+i.labels[fe]/i.duration()*Ue||0},P.getTrailing=function(fe){var Ze=st.indexOf(P),Ne=P.direction>0?st.slice(0,Ze).reverse():st.slice(Ze+1);return(pi(fe)?Ne.filter(function(je){return je.vars.preventOverlaps===fe}):Ne).filter(function(je){return P.direction>0?je.end<=Ae:je.start>=L})},P.update=function(fe,Ze,Ne){if(!(b&&!Ne&&!fe)){var je=Gn===!0?re:P.scroll(),Xt=fe?0:(je-Ae)/Ue,at=Xt<0?0:Xt>1?1:Xt||0,Lt=P.progress,tn,Rt,Ct,yt,oi,Ot,Ln,Ei;if(Ze&&(ot=rt,rt=b?le():je,v&&(We=ue,ue=i&&!C?i.totalProgress():at)),m&&f&&!En&&!uc&&Bi&&(!at&&Ae<je+(je-ot)/(An()-Oa)*m?at=1e-4:at===1&&L>je+(je-ot)/(An()-Oa)*m&&(at=.9999)),at!==Lt&&P.enabled){if(tn=P.isActive=!!at&&at<1,Rt=!!Lt&&Lt<1,Ot=tn!==Rt,oi=Ot||!!at!=!!Lt,P.direction=at>Lt?1:-1,P.progress=at,oi&&!En&&(Ct=at&&!Lt?0:at===1?1:Lt===1?2:3,C&&(yt=!Ot&&q[Ct+1]!=="none"&&q[Ct+1]||q[Ct],Ei=i&&(yt==="complete"||yt==="reset"||yt in i))),S&&(Ot||Ei)&&(Ei||h||!i)&&(Dn(S)?S(P):P.getTrailing(S).forEach(function(z){return z.endAnimation()})),C||(I&&!En&&!uc?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",at,i._tTime/i._tDur):(I.vars.totalProgress=at,I.invalidate().restart())):i&&i.totalProgress(at,!!(En&&(se||fe)))),f){if(fe&&g&&(H.style[g+y.os2]=Re),!X)Z(Ba(Me+ce*at));else if(oi){if(Ln=!fe&&at>Lt&&L+1>je&&je+1>=sr(U,y),E)if(!fe&&(tn||Ln)){var nn=Er(f,!0),rn=je-Ae;Gm(f,St,nn.top+(y===an?rn:0)+sn,nn.left+(y===an?0:rn)+sn)}else Gm(f,H);Xo(tn||Ln?D:M),me&&at<1&&tn||Z(Me+(at===1&&!Ln?ce:0))}}v&&!xe.tween&&!En&&!uc&&ge.restart(!0),a&&(Ot||T&&at&&(at<1||!hh))&&yl(a.targets).forEach(function(z){return z.classList[tn||T?"add":"remove"](a.className)}),o&&!C&&!fe&&o(P),oi&&!En?(C&&(Ei&&(yt==="complete"?i.pause().totalProgress(1):yt==="reset"?i.restart(!0).pause():yt==="restart"?i.restart(!0):i[yt]()),o&&o(P)),(Ot||!hh)&&(c&&Ot&&fh(P,c),V[Ct]&&fh(P,V[Ct]),T&&(at===1?P.kill(!1,1):V[Ct]=0),Ot||(Ct=at===1?1:3,V[Ct]&&fh(P,V[Ct]))),R&&!tn&&Math.abs(P.getVelocity())>(ka(R)?R:2500)&&(Aa(P.callbackAnimation),I?I.progress(1):Aa(i,yt==="reverse"?1:!at,1))):C&&o&&!En&&o(P)}if(Ve){var A=b?je/b.duration()*(b._caScrollDist||0):je;ie(A+(Y._isFlipped?1:0)),Ve(A)}Ee&&Ee(-je/b.duration()*(b._caScrollDist||0))}},P.enable=function(fe,Ze){P.enabled||(P.enabled=!0,pn(U,"resize",za),W||pn(U,"scroll",To),ae&&pn(r,"refreshInit",ae),fe!==!1&&(P.progress=ve=0,rt=ot=K=le()),Ze!==!1&&P.refresh())},P.getTween=function(fe){return fe&&xe?xe.tween:I},P.setPositions=function(fe,Ze,Ne,je){if(b){var Xt=b.scrollTrigger,at=b.duration(),Lt=Xt.end-Xt.start;fe=Xt.start+Lt*fe/at,Ze=Xt.start+Lt*Ze/at}P.refresh(!1,!1,{start:Im(fe,Ne&&!!P._startClamp),end:Im(Ze,Ne&&!!P._endClamp)},je),P.update()},P.adjustPinSpacing=function(fe){if(de&&fe){var Ze=de.indexOf(y.d)+1;de[Ze]=parseFloat(de[Ze])+fe+sn,de[1]=parseFloat(de[1])+fe+sn,Xo(de)}},P.disable=function(fe,Ze){if(P.enabled&&(fe!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Ze||I&&I.pause(),re=0,$e&&($e.uncache=1),ae&&fn(r,"refreshInit",ae),ge&&(ge.pause(),xe.tween&&xe.tween.kill()&&(xe.tween=0)),!W)){for(var Ne=st.length;Ne--;)if(st[Ne].scroller===U&&st[Ne]!==P)return;fn(U,"resize",za),W||fn(U,"scroll",To)}},P.kill=function(fe,Ze){P.disable(fe,Ze),I&&!Ze&&I.kill(),l&&delete Ld[l];var Ne=st.indexOf(P);Ne>=0&&st.splice(Ne,1),Ne===Vn&&Lc>0&&Vn--,Ne=0,st.forEach(function(je){return je.scroller===P.scroller&&(Ne=1)}),Ne||Gn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,fe&&i.revert({kill:!1}),Ze||i.kill()),xt&&[xt,Je,Y,Se].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),nl===P&&(nl=0),f&&($e&&($e.uncache=1),Ne=0,st.forEach(function(je){return je.pin===f&&Ne++}),Ne||($e.spacer=0)),n.onKill&&n.onKill(P)},st.push(P),P.enable(!1,!1),He&&He(P),i&&i.add&&!Ue){var nt=P.update;P.update=function(){P.update=nt,ct.cache++,Ae||L||P.refresh()},Ce.delayedCall(.01,P.update),Ue=.01,Ae=L=0}else P.refresh();f&&jw()},r.register=function(n){return Ao||(Ce=n||b_(),T_()&&window.document&&r.enable(),Ao=Fa),Ao},r.defaults=function(n){if(n)for(var i in n)pc[i]=n[i];return pc},r.disable=function(n,i){Fa=0,st.forEach(function(o){return o[i?"kill":"disable"](n)}),fn(lt,"wheel",To),fn(Nt,"scroll",To),clearInterval(cc),fn(Nt,"touchcancel",Ji),fn(St,"touchstart",Ji),dc(fn,Nt,"pointerdown,touchstart,mousedown",Lm),dc(fn,Nt,"pointerup,touchend,mouseup",Nm),eu.kill(),hc(fn);for(var s=0;s<ct.length;s+=3)fc(fn,ct[s],ct[s+1]),fc(fn,ct[s],ct[s+2])},r.enable=function(){if(lt=window,Nt=document,gi=Nt.documentElement,St=Nt.body,Ce&&(yl=Ce.utils.toArray,Za=Ce.utils.clamp,Ud=Ce.core.context||Ji,uh=Ce.core.suppressOverwrites||Ji,Df=lt.history.scrollRestoration||"auto",Nd=lt.pageYOffset||0,Ce.core.globals("ScrollTrigger",r),St)){Fa=1,Wo=document.createElement("div"),Wo.style.height="100vh",Wo.style.position="absolute",U_(),Gw(),$t.register(Ce),r.isTouch=$t.isTouch,Zr=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Dd=$t.isTouch===1,pn(lt,"wheel",To),Pf=[lt,Nt,gi,St],Ce.matchMedia?(r.matchMedia=function(c){var u=Ce.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ce.addEventListener("matchMediaInit",function(){return Ff()}),Ce.addEventListener("matchMediaRevert",function(){return P_()}),Ce.addEventListener("matchMedia",function(){zs(0,1),eo("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return ph(),ph})):console.warn("Requires GSAP 3.11.0 or later"),ph(),pn(Nt,"scroll",To);var n=St.hasAttribute("style"),i=St.style,s=i.borderTopStyle,o=Ce.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Er(St),an.m=Math.round(a.top+an.sc())||0,Wn.m=Math.round(a.left+Wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(St.setAttribute("style",""),St.removeAttribute("style")),cc=setInterval(Bm,250),Ce.delayedCall(.5,function(){return uc=0}),pn(Nt,"touchcancel",Ji),pn(St,"touchstart",Ji),dc(pn,Nt,"pointerdown,touchstart,mousedown",Lm),dc(pn,Nt,"pointerup,touchend,mouseup",Nm),Pd=Ce.utils.checkPrefix("transform"),Nc.push(Pd),Ao=An(),eu=Ce.delayedCall(.2,zs).pause(),Ro=[Nt,"visibilitychange",function(){var c=lt.innerWidth,u=lt.innerHeight;Nt.hidden?(Pm=c,Dm=u):(Pm!==c||Dm!==u)&&za()},Nt,"DOMContentLoaded",zs,lt,"load",zs,lt,"resize",za],hc(pn),st.forEach(function(c){return c.enable(0,1)}),l=0;l<ct.length;l+=3)fc(fn,ct[l],ct[l+1]),fc(fn,ct[l],ct[l+2])}},r.config=function(n){"limitCallbacks"in n&&(hh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(cc)||(cc=i)&&setInterval(Bm,i),"ignoreMobileResize"in n&&(Dd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(hc(fn)||hc(pn,n.autoRefreshEvents||"none"),x_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=jn(n),o=ct.indexOf(s),a=Js(s);~o&&ct.splice(o,a?6:2),i&&(a?ar.unshift(lt,i,St,i,gi,i):ar.unshift(s,i))},r.clearMatchMedia=function(n){st.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(pi(n)?jn(n):n).getBoundingClientRect(),a=o[s?Ys:$s]*i||0;return s?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},r.positionInViewport=function(n,i,s){pi(n)&&(n=jn(n));var o=n.getBoundingClientRect(),a=o[s?Ys:$s],l=i==null?a/2:i in iu?iu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/lt.innerWidth:(o.top+l)/lt.innerHeight},r.killAll=function(n){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Qs.killAll||[];Qs={},i.forEach(function(s){return s()})}},r}();ht.version="3.13.0";ht.saveStyles=function(r){return r?yl(r).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),Ud())}}):fi};ht.revert=function(r,e){return Ff(!r,e)};ht.create=function(r,e){return new ht(r,e)};ht.refresh=function(r){return r?za(!0):(Ao||ht.register())&&zs(!0)};ht.update=function(r){return++ct.cache&&Lr(r===!0?2:0)};ht.clearScrollMemory=D_;ht.maxScroll=function(r,e){return sr(r,e?Wn:an)};ht.getScrollFunc=function(r,e){return ds(jn(r),e?Wn:an)};ht.getById=function(r){return Ld[r]};ht.getAll=function(){return st.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ht.isScrolling=function(){return!!Bi};ht.snapDirectional=Of;ht.addEventListener=function(r,e){var t=Qs[r]||(Qs[r]=[]);~t.indexOf(e)||t.push(e)};ht.removeEventListener=function(r,e){var t=Qs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ht.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Ce.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Dn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Dn(s)&&(s=s(),pn(ht,"refresh",function(){return s=e.batchMax()})),yl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ht.create(c))}),t};var Wm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},gh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===gi&&r(St,t)},vc={auto:1,scroll:1},eA=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ce.core.getCache(s),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(vc[(l=Ii(s)).overflowY]||vc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Js(s)&&(vc[(l=Ii(s)).overflowY]||vc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},L_=function(e,t,n,i){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&eA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&pn(Nt,$t.eventTypes[0],qm,!1,!0)},onDisable:function(){return fn(Nt,$t.eventTypes[0],qm,!0)}})},tA=/(input|label|select|textarea)/i,Xm,qm=function(e){var t=tA.test(e.target.tagName);(t||Xm)&&(e._gsapAllow=!0,Xm=t)},nA=function(e){Ns(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=jn(e.target)||gi,u=Ce.core.globals().ScrollSmoother,h=u&&u.get(),d=Zr&&(e.content&&jn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=ds(c,an),g=ds(c,Wn),_=1,m=($t.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,p=0,x=Dn(i)?function(){return i(a)}:function(){return i||2.8},T,v,E=L_(c,e.type,!0,s),w=function(){return v=!1},b=Ji,R=Ji,S=function(){l=sr(c,an),R=Za(Zr?1:0,l),n&&(b=Za(0,sr(c,Wn))),T=js},y=function(){d._gsap.y=Ba(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},C=function(){if(v){requestAnimationFrame(w);var G=Ba(a.deltaY/2),ee=R(f.v-G);if(d&&ee!==f.v+f.offset){f.offset=ee-f.v;var P=Ba((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",f.cacheID=ct.cache,Lr()}return!0}f.offset&&y(),v=!0},U,O,W,X,V=function(){S(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return d&&Ce.set(d,{y:"+=0"}),e.ignoreCheck=function(q){return Zr&&q.type==="touchmove"&&C()||_>1.05&&q.type!=="touchstart"||a.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){v=!1;var q=_;_=Ba((lt.visualViewport&&lt.visualViewport.scale||1)/m),U.pause(),q!==_&&gh(c,_>1.01?!0:n?!1:"x"),O=g(),W=f(),S(),T=js},e.onRelease=e.onGestureStart=function(q,G){if(f.offset&&y(),!G)X.restart(!0);else{ct.cache++;var ee=x(),P,ae;n&&(P=g(),ae=P+ee*.05*-q.velocityX/.227,ee*=Wm(g,P,ae,sr(c,Wn)),U.vars.scrollX=b(ae)),P=f(),ae=P+ee*.05*-q.velocityY/.227,ee*=Wm(f,P,ae,sr(c,an)),U.vars.scrollY=R(ae),U.invalidate().duration(ee).play(.01),(Zr&&U.vars.scrollY>=l||P>=l-1)&&Ce.to({},{onUpdate:V,duration:ee})}o&&o(q)},e.onWheel=function(){U._ts&&U.pause(),An()-p>1e3&&(T=0,p=An())},e.onChange=function(q,G,ee,P,ae){if(js!==T&&S(),G&&n&&g(b(P[2]===G?O+(q.startX-q.x):g()+G-P[1])),ee){f.offset&&y();var we=ae[2]===ee,Be=we?W+q.startY-q.y:f()+ee-ae[1],K=R(Be);we&&Be!==K&&(W+=K-Be),f(K)}(ee||G)&&Lr()},e.onEnable=function(){gh(c,n?!1:"x"),ht.addEventListener("refresh",V),pn(lt,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),E.enable()},e.onDisable=function(){gh(c,!0),fn(lt,"resize",V),ht.removeEventListener("refresh",V),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new $t(e),a.iOS=Zr,Zr&&!f()&&f(1),Zr&&Ce.ticker.add(Ji),X=a._dc,U=Ce.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:I_(f,f(),function(){return U.pause()})},onUpdate:Lr,onComplete:X.vars.onComplete}),a};ht.sort=function(r){if(Dn(r))return st.sort(r);var e=lt.pageYOffset||0;return ht.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),st.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ht.observe=function(r){return new $t(r)};ht.normalizeScroll=function(r){if(typeof r>"u")return zn;if(r===!0&&zn)return zn.enable();if(r===!1){zn&&zn.kill(),zn=r;return}var e=r instanceof $t?r:nA(r);return zn&&zn.target===e.target&&zn.kill(),Js(e.target)&&(zn=e),e};ht.core={_getVelocityProp:Cd,_inputObserver:L_,_scrollers:ct,_proxies:ar,bridge:{ss:function(){Bi||eo("scrollStart"),Bi=An()},ref:function(){return En}}};b_()&&Ce.registerPlugin(ht);/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let Ra,bo,Fd,iA=()=>Fd||It.register(window.gsap),Ym=typeof Intl<"u"?new Intl.Segmenter:0,ru=r=>typeof r=="string"?ru(document.querySelectorAll(r)):"length"in r?Array.from(r):[r],$m=r=>ru(r).filter(e=>e instanceof HTMLElement),Bd=[],_h=function(){},rA=/\s+/g,jm=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Km={left:0,top:0,width:0,height:0},Zm=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||Bd),n=r.length,i,s,o,a;if(t.size)for(;--n>-1;){s=r[n];for(o of t)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},Jm=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Mo=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),kd=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=e,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let h=document.createElement(i),d=t.length+1;return n&&(h.className=n+(l?" "+n+d:"")),o&&h.style.setProperty("--"+r,d+""),s!=="none"&&h.setAttribute("aria-hidden","true"),i!=="span"&&(h.style.position="relative",h.style.display=a),h.textContent=u,t.push(h),h};return l&&(n=n.replace("++","")),c.collection=t,c},sA=(r,e,t,n)=>{let i=kd("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},N_=(r,e,t,n,i,s,o,a,l,c)=>{var u;let h=Array.from(r.childNodes),d=0,{wordDelimiter:f,reduceWhiteSpace:g=!0,prepareText:_}=e,m=r.getBoundingClientRect(),p=m,x=!g&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",T=0,v=t.collection,E,w,b,R,S,y,C,U,O,W,X,V,q,G,ee,P,ae,we;for(typeof f=="object"?(b=f.delimiter||f,w=f.replaceWith||""):w=f===""?"":f||" ",E=w!==" ";d<h.length;d++)if(R=h[d],R.nodeType===3){for(ee=R.textContent||"",g?ee=ee.replace(rA," "):x&&(ee=ee.replace(/\n/g,w+`
`)),_&&(ee=_(ee,r)),R.textContent=ee,S=w||b?ee.split(b||w):ee.match(a)||Bd,ae=S[S.length-1],U=E?ae.slice(-1)===" ":!ae,ae||S.pop(),p=m,C=E?S[0].charAt(0)===" ":!S[0],C&&Mo(" ",r,R),S[0]||S.shift(),Zm(S,l),s&&c||(R.textContent=""),O=1;O<=S.length;O++)if(P=S[O-1],!g&&x&&P.charAt(0)===`
`&&((u=R.previousSibling)==null||u.remove(),Mo(document.createElement("br"),r,R),P=P.slice(1)),!g&&P==="")Mo(w,r,R);else if(P===" ")r.insertBefore(document.createTextNode(" "),R);else{if(E&&P.charAt(0)===" "&&Mo(" ",r,R),T&&O===1&&!C&&v.indexOf(T.parentNode)>-1?(y=v[v.length-1],y.appendChild(document.createTextNode(n?"":P))):(y=t(n?"":P),Mo(y,r,R),T&&O===1&&!C&&y.insertBefore(T,y.firstChild)),n)for(X=Ym?Zm([...Ym.segment(P)].map(Be=>Be.segment),l):P.match(a)||Bd,we=0;we<X.length;we++)y.appendChild(X[we]===" "?document.createTextNode(" "):n(X[we]));if(s&&c){if(ee=R.textContent=ee.substring(P.length+1,ee.length),W=y.getBoundingClientRect(),W.top>p.top&&W.left<=p.left){for(V=r.cloneNode(),q=r.childNodes[0];q&&q!==y;)G=q,q=q.nextSibling,V.appendChild(G);r.parentNode.insertBefore(V,r),i&&Jm(V)}p=W}(O<S.length||U)&&Mo(O>=S.length?" ":E&&P.slice(-1)===" "?" "+w:w,r,R)}r.removeChild(R),T=0}else R.nodeType===1&&(o&&o.indexOf(R)>-1?(v.indexOf(R.previousSibling)>-1&&v[v.length-1].appendChild(R),T=R):(N_(R,e,t,n,i,s,o,a,l,!0),T=0),i&&Jm(R))};const O_=class F_{constructor(e,t){this.isSplit=!1,iA(),this.elements=$m(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},_h(this),this.split(t)}split(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,h=t.indexOf("chars")>-1,d=t.indexOf("words")>-1,f=h&&!d&&!u,g=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=g?new RegExp(g.source+"|"+jm.source,"gu"):jm,m=!!e.ignore&&$m(e.ignore),{orig:p,animTime:x,obs:T}=this._data,v;return(h||d||u)&&(this.elements.forEach((E,w)=>{p[w]={element:E,html:E.innerHTML,ariaL:E.getAttribute("aria-label"),ariaH:E.getAttribute("aria-hidden")},n==="auto"?E.setAttribute("aria-label",(E.textContent||"").trim()):n==="hidden"&&E.setAttribute("aria-hidden","true");let b=[],R=[],S=[],y=h?kd("char",e,b):null,C=kd("word",e,R),U,O,W,X;if(N_(E,e,C,y,f,i&&(u||f),m,_,g,!1),u){let V=ru(E.childNodes),q=sA(E,V,e,S),G,ee=[],P=0,ae=V.map(Be=>Be.nodeType===1?Be.getBoundingClientRect():Km),we=Km;for(U=0;U<V.length;U++)G=V[U],G.nodeType===1&&(G.nodeName==="BR"?(ee.push(G),q(P,U+1),P=U+1,we=ae[P]):(U&&ae[U].top>we.top&&ae[U].left<=we.left&&(q(P,U),P=U),we=ae[U]));P<U&&q(P,U),ee.forEach(Be=>{var K;return(K=Be.parentNode)==null?void 0:K.removeChild(Be)})}if(!d){for(U=0;U<R.length;U++)if(O=R[U],h||!O.nextSibling||O.nextSibling.nodeType!==3)if(s&&!u){for(W=document.createElement("span"),W.style.whiteSpace="nowrap";O.firstChild;)W.appendChild(O.firstChild);O.replaceWith(W)}else O.replaceWith(...O.childNodes);else X=O.nextSibling,X&&X.nodeType===3&&(X.textContent=(O.textContent||"")+(X.textContent||""),O.remove());R.length=0,E.normalize()}this.lines.push(...S),this.words.push(...R),this.chars.push(...b)}),c&&this[c]&&this.masks.push(...this[c].map(E=>{let w=E.cloneNode();return E.replaceWith(w),w.appendChild(E),E.className&&(w.className=E.className.replace(/(\b\w+\b)/g,"$1-mask")),w.style.overflow="clip",w}))),this.isSplit=!0,bo&&(a?bo.addEventListener("loadingdone",this._split):bo.status==="loading"&&console.warn("SplitText called before fonts loaded")),(v=o&&o(this))&&v.totalTime&&(this._data.anim=x?v.totalTime(x):v),u&&a&&this.elements.forEach((E,w)=>{p[w].width=E.offsetWidth,T&&T.observe(E)}),this}revert(){var e,t;let{orig:n,anim:i,obs:s}=this._data;return s&&s.disconnect(),n.forEach(({element:o,html:a,ariaL:l,ariaH:c})=>{o.innerHTML=a,l?o.setAttribute("aria-label",l):o.removeAttribute("aria-label"),c?o.setAttribute("aria-hidden",c):o.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,bo?.removeEventListener("loadingdone",this._split),i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this),this}static create(e,t){return new F_(e,t)}static register(e){Ra=Ra||e||window.gsap,Ra&&(ru=Ra.utils.toArray,_h=Ra.core.context||_h),!Fd&&window.innerWidth>0&&(bo=document.fonts,Fd=!0)}};O_.version="3.13.0";let It=O_;class oA extends Fr{constructor(e,t,n,i={}){super(e,t),this.loaders=n,this.options=i,this.options.manifests&&this.options.manifests.forEach(s=>this.registerManifest(s))}manifests=new Map;cache=new Map;loading=new Map;async ready(){return await Promise.all([...this.manifests.values()].map(e=>this.preloadManifest(e.id))),!0}registerManifest(e){this.manifests.set(e.id,e)}async preloadManifest(e){const t=this.manifests.get(e);if(!t)return Tr.warn(`Manifest not found: ${e}`,"AssetsLoader");t.dependencies&&await Promise.all(t.dependencies.map(s=>this.preloadManifest(s)));const n=[],i=(s,o)=>{Object.entries(o).forEach(([a,l])=>{(t.preload||l.preload)&&n.push(this.loadAsset(s,l,a).catch(()=>void Tr.warn(`Failed to preload ${t.id}/${s}/${a}`,"AssetsLoader")))})};Object.entries(t).forEach(([s,o])=>{s!=="id"&&s!=="dependencies"&&i(s,o)}),await Promise.all(n)}async getAsync(e,t,n){const i=this.manifests.get(n||this.options.manifests?.[0]?.id||"");if(!i){Tr.warn(`Manifest ${n} not found`,"AssetsLoader");return}const o=i[e]?.[t];if(!o){Tr.warn(`Asset ${t} not found in category ${e} of manifest ${n}`,"AssetsLoader");return}return this.loadAsset(e,o,t)}get(e,t,n){const i=this.manifests.get(n||this.options.manifests?.[0]?.id||"");if(!i){Tr.warn(`Manifest ${n} not found`,"AssetsLoader");return}const s=i[e]?.[t];if(!s){Tr.warn(`Asset ${t} not found in category ${e} of manifest ${n}`,"AssetsLoader");return}const o=this.getCacheKey(e,s.url);return this.cache.get(o)}async loadAsset(e,t,n){const i=this.getCacheKey(e,t.url),s=this.cache.get(i);if(s)return s;const o=this.loading.get(i);if(o)return o;const a=this.loadAssetByCategory(e,t,n);this.loading.set(i,a);try{const l=await a;return this.cache.set(i,l),l}finally{this.loading.delete(i)}}loadAssetByCategory(e,t,n){const i=this.loaders[e];if(!i)throw new Error(`No loader found for category: ${e}`);return i.load(t,n)}getCacheKey(e,t){return`${e}:${t}`}}const aA=new Kg,lA=new gM,cA=new JM,uA=new Ty;class hA extends oA{constructor(e,t={}){const n={textures:{load:i=>new Promise((s,o)=>{aA.load(i.url,a=>{i?.wrapS&&(a.wrapS=i.wrapS),i?.wrapT&&(a.wrapT=i.wrapT),i?.flipY!==void 0&&(a.flipY=i.flipY),i?.colorSpace&&(a.colorSpace=i.colorSpace),i?.format&&(a.format=i.format),i?.magFilter&&(a.magFilter=i.magFilter),i?.minFilter&&(a.minFilter=i.minFilter),i?.mapping&&(a.mapping=i.mapping),i.onLoad?.(a),s(a)},void 0,o)})},models:{load:(i,s)=>new Promise((o,a)=>{lA.load(i.url,l=>{l.scene.name=s,i.onLoad?.(l),o(l)},void 0,a)})},hdris:{load:i=>new Promise((s,o)=>{cA.load(i.url,a=>{a.mapping=Bc,i.onLoad?.(a),s(a)},void 0,o)})},audios:{load:i=>new Promise((s,o)=>{uA.load(i.url,a=>{const l={buffer:a,params:{loop:i?.loop,volume:i?.volume,autoplay:i?.autoplay,type:i?.type}};i.onLoad?.(l),s(l)},void 0,o)})}};super(e,"assets",n,{manifests:t.manifests})}}const Bf=!1,Tl={EARTH:5};class dA extends Fr{constructor(e,t){super(e,"action")}attach(){this.elements=Array.from(document.querySelectorAll("[data-action]")),this.elements.forEach(e=>{const t=e.dataset.action,n=t.split(":")[0],i=t.split(":").pop();e.addEventListener(n,this.trigger.bind(this,i,e.dataset.value))})}trigger(e,t){this.app.emit(e,t)}detach(){}}var fA="1.3.17";function B_(r,e,t){return Math.max(r,Math.min(e,t))}function pA(r,e,t){return(1-t)*r+t*e}function mA(r,e,t,n){return pA(r,e,1-Math.exp(-t*n))}function gA(r,e){return(r%e+e)%e}var _A=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=B_(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=mA(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function vA(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var xA=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=vA(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},k_=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Qm=100/6,Yr={passive:!1},yA=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Yr),this.element.addEventListener("touchstart",this.onTouchStart,Yr),this.element.addEventListener("touchmove",this.onTouchMove,Yr),this.element.addEventListener("touchend",this.onTouchEnd,Yr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new k_;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Yr),this.element.removeEventListener("touchstart",this.onTouchStart,Yr),this.element.removeEventListener("touchmove",this.onTouchMove,Yr),this.element.removeEventListener("touchend",this.onTouchEnd,Yr)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Qm:n===2?this.window.width:1,s=n===1?Qm:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},eg=r=>Math.min(1,1.001-Math.pow(2,-10*r)),SA=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new _A;emitter=new k_;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:x=!0,autoRaf:T=!1,anchors:v=!1,autoToggle:E=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:R=b,stopInertiaOnNavigate:S=!1}={}){window.lenisVersion=fA,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=eg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:x,autoRaf:T,anchors:v,autoToggle:E,allowNestedScroll:w,naiveDimensions:R,stopInertiaOnNavigate:S},this.dimensions=new xA(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new yA(t,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,_=i&&n.type==="touchend";_&&(d=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?(d=document.querySelector(r),d||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(d=r),d){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const f=d.getBoundingClientRect();r=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const d=r-this.animatedScroll;d>this.limit/2?r=r-this.limit:d<-this.limit/2&&(r=r+this.limit)}}else r=B_(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=eg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),i&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,h,d;const f=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const E=window.getComputedStyle(r);i.computedStyle=E;const w=E.overflowX,b=E.overflowY;if(s=["auto","overlay","scroll"].includes(w),o=["auto","overlay","scroll"].includes(b),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||f==="vertical"&&!o||f==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,d=r.clientHeight,a=c>h,l=u>d,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=d}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,d=i.clientHeight;if(!s&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!s||!a))return!1;let g;if(f==="horizontal")g="x";else if(f==="vertical")g="y";else{const E=e!==0,w=t!==0;E&&s&&a&&(g="x"),w&&o&&l&&(g="y")}if(!g)return!1;let _,m,p,x,T;if(g==="x")_=r.scrollLeft,m=c-h,p=e,x=s,T=a;else if(g==="y")_=r.scrollTop,m=u-d,p=t,x=o,T=l;else return!1;return(p>0?_<m:_>0)&&x&&T}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?gA(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};let tg=1234567;function Vs(r,e,t){return Math.max(e,Math.min(t,r))}function nr(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Co(r){r!==void 0&&(tg=r);let e=tg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}const TA={},bA=r=>r<.5?4*r*r*r:1-(-2*r+2)**3/2;class MA extends Fr{constructor(e,t){super(e,"scroller"),this.timeoutId=null,this.first=!0,this.lastDeltaY=0,this.overlay=document.querySelector(".fps-scroll-overlay"),Pe.set(this.overlay,{opacity:0}),this.scrollSpeedTarget=1,this.scrollSpeed=1,this.lastScrollY=0,this.scrollY=0,window.scrollTo(0,0),this.touchStart=new Xe(0,0),this.touchEnd=new Xe(0,0),this.spacerKeyMap=new Map,this.spacerTopKeyMap=new Map,this.scrollDelta=0,this.touch=Ac,this.down=!1,this.options={...TA,...t},this.tl=null,this.scrollValue=this.scrollTarget=0,this.scrollHeight=document.scrollingElement.scrollHeight,this.snapEnabled=!0}toKey=(e,t=!1)=>{this.spacerTopKeyMap.has(e)&&this.toCanFade(this.spacerTopKeyMap.get(e).top+this.app.viewport.height*.5,t),this.spacerKeyMap.has(e)&&this.toCanFade(this.spacerKeyMap.get(e).top+this.app.viewport.height*.5,t)};toEl=e=>{this.to(e.getBoundingClientRect().top)};toCanFade(e,t){Math.abs(e-this.scrollY)>this.app.viewport.height*3&&!t?(this.ftl?.kill(),this.ftl=Pe.timeline(),this.ftl.set(this.overlay,{display:"block"},0),this.ftl.to(this.overlay,{opacity:1,duration:.3},0),this.to(e,t),this.ftl.to(this.overlay,{opacity:0,duration:.3},1.8),this.ftl.set(this.overlay,{display:"none"},2)):this.to(e,t)}to=(e,t=!1)=>{this.lenis?this.lenis.scrollTo(e,{duration:3,easing:bA}):(this.tl?.kill(),this.tl=Pe.timeline(),this.tl.to(window,{duration:t?0:2,ease:"power2.out",scrollTo:e},0))};attach(){this.attached=!0,Ac?this.lenis=null:(this.lenis=new SA(this.options),this.app.on("ticker:render",this.updateLenis)),this.app.on("viewport:resize",this.onViewportResize),this.spacers=[];let e=0;this.app.frame.spacers.forEach(n=>{n.hasAttribute("data-snap-points")?n.getAttribute("data-snap-points").split(";").forEach(i=>{this.spacers.push({el:n,top:0,height:1,free:!1,id:e++,stop:parseFloat(i)})}):this.spacers.push({el:n,top:0,height:1,free:!1,id:e++,stop:1})});const t=new URLSearchParams(window.location.search);t.has("autoscroll")&&setInterval(()=>{window.scrollTo(0,window.scrollY+12)},16),t.has("autoreset"),this.onViewportResize(),il.has("scrollto")&&this.toKey(il.get("scrollto"),!0)}updateLenis=({et:e})=>{this.lenis.raf(e*1e3)};onViewportResize=()=>{this.spacers.forEach(e=>{const t=e.el.getBoundingClientRect();e.key=e.el.getAttribute("data-nav-key"),e.topKey=e.el.getAttribute("data-top-nav-key"),e.top=t.top+window.scrollY,e.height=t.height,e.center=Math.round(e.top+e.height*.5*e.stop),e.free=e.el.hasAttribute("data-scroll-freespacer"),e.key!==null&&this.spacerKeyMap.set(e.key,e),e.topKey!==null&&this.spacerTopKeyMap.set(e.topKey,e)}),this.touch=Ac,this.scrollHeight=document.scrollingElement.scrollHeight};detach(){this.app.off("viewport:resize",this.onViewportResize)}}class Yn{constructor(e,t){this.el=t,this.spacer=e,this._frameProgress=0,this.globalProgress=0,this.first=this.el.hasAttribute("data-first"),this.second=this.el.hasAttribute("data-second"),this.last=this.el.hasAttribute("data-last"),this.navigationKey=this.el.getAttribute("data-nav-key"),this.markers=Bf,this.entered=!1,this.revealWordsSplits=[]}attach(){this.frameTl(),this.globalTl(),this.buildGlobalAnimation()}globalTl=()=>{if(this.gtl?.kill(),this.gtl=Pe.timeline({scrollTrigger:{trigger:this.spacer,markers:this.markers,scrub:!0}}),this.gtl.fromTo(this,{globalProgress:0},{globalProgress:1,duration:1,ease:"none"},0),this.navigationKey!==null&&typeof N.navigationBar.subs[this.navigationKey]<"u"){let e=0,t=1;this.el.hasAttribute("data-nav-key-progress")&&([e,t]=this.el.getAttribute("data-nav-key-progress").split(";").map(n=>parseFloat(n))),e===0?this.gtl.fromTo(N.navigationBar.subs[this.navigationKey],{progress:e},{progress:t,ease:"sine.inOut",duration:2.2},.8):this.gtl.to(N.navigationBar.subs[this.navigationKey],{progress:t,ease:"sine.inOut",duration:2.2},.8)}return this.gtl.add(()=>{},3),this.gtl};frameTl(){if(!this.first)return this.ftl?.kill(),this.scrollSpeed=this.el.hasAttribute("data-scroll-speed")?parseFloat(this.el.getAttribute("data-scroll-speed")):1,this.ftl=Pe.timeline({scrollTrigger:{trigger:this.spacer,markers:this.markers,scrub:!0,start:this.second?"top+=50% bottom":"top center",end:this.last?"center center":"bottom center",onEnter:()=>{N.scroller.scrollSpeedTarget=this.scrollSpeed},onEnterBack:()=>{N.scroller.scrollSpeedTarget=this.scrollSpeed}}}),this.ftl.fromTo(this,{frameProgress:0},{frameProgress:this.second?2:1,duration:1,ease:"linear"},0),this.ftl}enter=()=>{if(!this.entered)return this.triggeredTl?.kill(),this.triggeredTl=Pe.timeline(),this.entered=!0,this.triggeredTl};leave=()=>{if(this.entered)return this.triggeredTl?.kill(),this.triggeredTl=Pe.timeline(),this.entered=!1,this.triggeredTl};buildGlobalAnimation=()=>{this.el.querySelectorAll("[data-animation-fade-letters]").forEach(n=>{const i=new It(n,{type:"words, chars",autoSplit:!0});Pe.from(i.chars,{color:"#161B21",ease:"power1.out",stagger:.015,scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom 10%",scrub:!0}})}),this.el.querySelectorAll("[data-animation-reveal-words]").forEach(n=>{const i=new It(n,{type:"lines,words",linesClass:"fps-line",autoSplit:!0});this.revealWordsSplits.push(i),Pe.from(i.words,{y:"150%",ease:"expo.out",duration:n.dataset.duration||.8,stagger:n.dataset.stagger||.08,delay:n.dataset.delay||0,scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",toggleActions:"play none none reset"}})})};get frameProgress(){return this._frameProgress}set frameProgress(e){e<.1&&Math.sign(e-this.frameProgress)<0&&this.leave(),e>.9&&Math.sign(e-this.frameProgress)>0&&this.enter(),this._frameProgress=e}}class EA extends Yn{constructor(e,t){super(e,t)}attach(){super.attach()}}class wA extends Yn{constructor(e,t){super(e,t),this.inner=t.querySelector(".fps-inner"),this.subtitle=t.querySelector(".fps-title-small"),this.titleBig=t.querySelector(".fps-title-big")}attach(){super.attach(),this.buildAnimation()}buildAnimation(){const e=new It(this.subtitle,{type:"words"}),t=new It(this.titleBig,{type:"words"}),n=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",toggleActions:"play none none reset"}});n.fromTo(e.words,{y:"150%"},{y:"0",duration:.8,stagger:.06,ease:"expo"},0),n.fromTo(t.words,{y:"150%"},{y:"0",duration:.8,stagger:.06,ease:"expo"},.1);const i=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",scrub:!0}});i.fromTo(this.inner,{opacity:0},{opacity:1,duration:.15,ease:"none"},0),i.fromTo(this.inner,{opacity:1},{opacity:0,duration:.2,ease:"none",immediateRender:!1},.8),i.add(()=>{},1)}}class AA extends Yn{constructor(e,t){super(e,t),this.dragging=!1,this.startX=0,this.currentWidth=0,this.currentProgress=0,this.inner=this.el.querySelector(".fps-inner"),this.inputDraggable=this.el.querySelector(".partial-input-draggable"),this.sensorZone=this.el.querySelector(".sensor-zone"),this.input=this.inputDraggable.querySelector("input"),this.satCount=t.querySelector(".fps-cost-number.fps-satellites"),this.satCost=t.querySelector(".fps-cost-number.fps-cost-total"),this.satCountSpan=this.satCount.querySelector("span"),this.satCostSpan=this.satCost.querySelector("span"),this.costDescription=t.querySelectorAll(".fps-cost-description"),this.costDescriptionSpans=t.querySelectorAll(".fps-cost-description span"),this.revisitTimeValue=t.querySelector(".fps-revisit-time-value"),this.revisitTimeValueSpan=this.revisitTimeValue.querySelector("span"),this.title=t.querySelector(".fps-cost-title"),this.subtitle=t.querySelector(".fps-cost-subtitle"),this.separator=t.querySelectorAll(".fps-cost-separator"),this.revisitTimeValueSpans=t.querySelectorAll(".fps-input-title span")}attach(){super.attach(),N.on("viewport:resize",this.onResize),this.inputDraggable.addEventListener("mousedown",this.onMouseDown),this.inputDraggable.addEventListener("touchstart",this.onTouchStart),this.inputDraggable.addEventListener("pointerdown",this.stopPropagation),this.inputDraggable.addEventListener("pointerup",this.stopPropagation),this.buildAnimation()}buildAnimation=()=>{const e=Pe.matchMedia(),t=new It(this.title,{type:"lines, words",linesClass:"fps-line",mask:"lines"}),n=new It(this.subtitle,{type:"lines",linesClass:"fps-line",mask:"lines"});this.t=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",toggleActions:"play none none reset",onLeaveBack:()=>{this.currentProgress=1,this.setCurrentValue()}}}),this.t.fromTo(this.el,{y:60},{y:0,duration:.6,ease:"power3"},0),this.t.fromTo(t.words,{y:"150%"},{y:"0%",duration:.8,ease:"expo",stagger:.08},0),this.t.fromTo(n.lines,{y:"150%"},{y:"0%",duration:.8,ease:"expo"},.3),this.t.fromTo(this.inputDraggable,{opacity:0},{opacity:1,duration:.2},.4),this.t.fromTo(this.satCountSpan,{y:"150%"},{y:"0%",duration:.8,ease:"expo"},.6),this.t.fromTo(this.satCostSpan,{y:"150%"},{y:"0%",duration:.8,ease:"expo"},.6),this.t.fromTo(this.costDescriptionSpans,{y:"150%"},{y:"0%",duration:.8,ease:"expo"},.8),this.t.fromTo(this.revisitTimeValueSpans,{y:"150%"},{y:"0%",duration:.8,ease:"expo",stagger:.08},.8),this.t.fromTo(this,{currentProgress:1},{currentProgress:1-.535,duration:1.5,ease:"power2.inOut",onUpdate:this.setCurrentValue},.8),this.t.fromTo(this.separator,{scaleX:0},{scaleX:1,duration:1,ease:"power2"},.9),e.add("(min-width: 1024px)",()=>{}),e.add("(max-width: 1023px)",()=>{});const i=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",scrub:!0}});i.fromTo(this.inner,{opacity:0},{opacity:1,duration:.2},0),i.to(this.inner,{opacity:0,duration:.2},.8),i.fromTo(this.inner,{y:0},{y:-60,duration:.2,ease:"power2.in"},.85),i.add(()=>{},1)};onResize=()=>{this.currentWidth=this.sensorZone.offsetWidth};onClick=e=>{this.currentWidth===0&&this.onResize();const t=e.offsetX;this.currentProgress=Vs(t/this.currentWidth,0,1),this.setCurrentValue()};onMouseDown=e=>{e.button===0&&(e.stopImmediatePropagation(),this.onClick(e),this.dragging=!0,this.inputDraggable.classList.toggle("dragging",this.dragging),this.startX=e.clientX,document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp))};onTouchStart=e=>{if(e.touches.length===0)return;e.stopImmediatePropagation(),this.currentWidth===0&&this.onResize(),this.dragging=!0,this.inputDraggable.classList.toggle("dragging",this.dragging);const t=e.touches[0].clientX-(this.sensorZone.getBoundingClientRect()?.left||0);this.startX=e.touches[0].clientX,this.currentProgress=Vs(t/this.currentWidth,0,1),this.setCurrentValue(),window.addEventListener("touchmove",this.onTouchMove),document.addEventListener("touchend",this.onMouseUp)};onMouseMove=e=>{if(!this.dragging)return;e.stopImmediatePropagation();const n=(e.clientX-this.startX)/this.currentWidth;this.currentProgress=Vs(this.currentProgress+n,0,1),this.setCurrentValue(),this.startX=e.clientX};onTouchMove=e=>{if(!this.dragging||e.touches.length===0)return;e.stopImmediatePropagation();const n=(e.touches[0].clientX-this.startX)/this.currentWidth;this.currentProgress=Vs(this.currentProgress+n,0,1),this.setCurrentValue(),this.startX=e.touches[0].clientX};onMouseUp=e=>{this.dragging&&(e.stopImmediatePropagation(),this.dragging=!1,this.inputDraggable.classList.toggle("dragging",this.dragging),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp))};setCurrentValue=()=>{this.currentValue=this.currentProgress,this.input.value=this.currentValue,this.inputDraggable.style.setProperty("--currentProgress",this.currentProgress),F.uSecondaryTrailCount.value=(1-this.input.value)**2*(1-1/4)+1/4;const e=Math.round((1-this.input.value)**4*599)+1,t=Math.round((1-this.input.value)**1.5*599)+1;this.revisitTimeValueSpan.innerHTML=t>200?`${Math.round((1-(t-200)/400)*59)+1}M`:`${Math.round((200-t)/200*47)+1}H`,this.satCountSpan.innerHTML=e,this.satCostSpan.innerHTML=`${this.parseCost(e*.6)} M`};parseCost(e){return e>10?e.toFixed(0):e.toFixed(1)}stopPropagation=e=>{e.stopImmediatePropagation()}}const ng="cubic-bezier(0.14, 1, 0.34, 1)";class RA extends Yn{constructor(e,t){super(e,t),this.pretitle=t.querySelector(".fps-pretitle"),this.title=t.querySelector(".fps-title-main"),this.mainButton=document.querySelector(".fps-button.fps-fixed"),this.hasOpened=!1,this.splitTitle=null,this.splitPretitle=null}attach(){super.attach(),this.splitText()}onSplit=e=>{this.splitTitle=e};splitText(){this.splitPretitle=new It(this.pretitle,{type:"words"}),this.splitTitle=new It(this.title,{type:"lines,words",linesClass:"fps-line"}),this.buildAnimation(),this.open()}open(){this.splitTitle.words.forEach((e,t)=>{e.style.transform="translate3d(0, 200%, 0)",setTimeout(()=>{e.style.transition=`transform 1s ${ng} ${(.075*t).toFixed(3)}s`,e.style.transform="translate3d(0, 0, 0)"},450)}),this.splitPretitle.words.forEach((e,t)=>{e.style.transform="translate3d(0, 200%, 0)",setTimeout(()=>{e.style.transition=`transform 1s ${ng} ${(.025*t).toFixed(3)}s`,e.style.transform="translate3d(0, 0, 0)"},300)}),this.mainButton.style.opacity="0",setTimeout(()=>{this.mainButton.style.transition="opacity 1s linear",this.mainButton.style.opacity="1"},800),setTimeout(()=>{this.mainButton.style.transition="",this.splitPretitle.words.forEach((e,t)=>{e.style.transition=""}),this.splitTitle.words.forEach((e,t)=>{e.style.transition=""})},1800)}buildAnimation(){const e=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",scrub:!0}});e.fromTo(this.pretitle,{opacity:1},{opacity:0,duration:.7},.3),e.fromTo(this.splitTitle.words,{y:0},{y:"-150%",duration:.7,stagger:.02,ease:"power2.in"},.3),e.fromTo(this.el,{y:0},{y:"-15%",duration:1,ease:"power2.in"},0),e.add(()=>{},1)}}class CA extends Yn{constructor(e,t){super(e,t),this.inner=t.querySelector(".fps-inner"),this.title=t.querySelector(".fps-text-135"),this.button=t.querySelector(".fps-button"),this.tAnim=null,this.tScrub=null}attach(){super.attach(),new It(this.title,{type:"words",autoSplits:!0,onSplit:this.buildAnimation,mask:"words"})}buildAnimation=e=>{this.tAnim&&this.tAnim.kill(),this.tScrub&&this.tScrub.kill(),this.tAnim=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",toggleActions:"play none none reset"}}),this.tAnim.fromTo(this.title,{y:60},{y:0,duration:.6,ease:"power3"},0),this.tAnim.fromTo(e.words,{y:"150%"},{y:"0%",duration:.8,ease:"expo",stagger:.06},0),this.tScrub=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",scrub:!0}}),this.tScrub.fromTo(this.inner,{opacity:0},{opacity:1,duration:.15},0),this.tScrub.to(this.inner,{opacity:0,duration:.3},.7),this.tScrub.to(this.inner,{y:"-15vh",duration:.4,ease:"power2.in"},.6),this.tScrub.add(()=>{},1),this.tScrub2=Pe.timeline({scrollTrigger:{trigger:this.spacer,scrub:!0,onEnter:()=>N.navigationBar.onViewportResize()}}),this.tScrub2.fromTo(N.navigationBar,{disappear:0},{disappear:1,duration:.5,ease:"power2.inOut"},.25),this.tScrub2.fromTo(this.button,{opacity:0},{opacity:1,duration:.1},.48),this.tScrub2.to(N.navigationBar.el,{opacity:0,duration:.1},.5),this.tScrub2.add(()=>{},1)}}let ig,rg,hi=new k;class PA extends Yn{constructor(e,t){super(e,t),this.title=this.el.querySelector(".fps-text-59"),this.panel=this.el.querySelector(".fps-panel"),this.panelBbox=this.panel.getBoundingClientRect(),this._panelBackgroundIntensity=0,this.infoNames=this.panel.querySelectorAll(".fps-info-name"),this.infoValues=this.panel.querySelectorAll(".fps-info-value"),this.infos=[{el:this.panel.querySelector(".fps-info-ampere"),min:4.2,max:10,unit:"A",p:0},{el:this.panel.querySelector(".fps-info-dod"),bar:this.panel.querySelector(".fps-info-dod-bar"),min:30,max:100,unit:"%",p:0},{el:this.panel.querySelector(".fps-info-data"),min:100,max:2e3,unit:"Mbps",p:0},{el:this.panel.querySelector(".fps-info-power"),min:30,max:33,unit:"dBm",p:0}],this.line=this.el.querySelector(".fps-panel-line")}attach(){super.attach(),this.buildAnimation(),N.on("viewport:resize",this.#e),this.#e()}#e=()=>{this.panelBbox=this.panel.getBoundingClientRect()};buildAnimation(){this.tl=null,this.tlScrub=null,new It(this.title,{type:"lines, words",linesClass:"fps-line",autoSplit:!0,mask:"lines",onSplit:e=>this.onSplit(e)}),this.itl=Pe.timeline({repeat:-1,paused:!0}),this.itl.fromTo(F.uInternalModulesProgress,{value:0},{value:1,duration:2,ease:"linear"},0),this.infos.forEach((e,t)=>{this.itl.fromTo(e,{p:e.min},{p:e.max,ease:"power2.inOut",duration:1,onUpdate:()=>{e.el.innerHTML=`${e.p.toFixed()} ${e.unit}`}},1+t*.1),e.bar&&this.itl.fromTo(e.bar,{scaleX:`${e.min}%`},{scaleX:`${e.max}%`,ease:"power2.inOut",duration:1},1+t*.1)}),this.itl.fromTo(this,{panelBackgroundIntensity:0},{panelBackgroundIntensity:1,ease:"power1.inOut",duration:1.2},.5),this.itl.to(F.uInternalModulesProgress,{value:0,duration:1,ease:"power2.inOut"},3.5),this.itl.to(F.uInternalModulesProgress,{value:1,duration:2,ease:"linear"},4.5),this.infos.forEach((e,t)=>{this.itl.to(e,{p:e.min,ease:"power2.inOut",duration:1,onUpdate:()=>{e.el.innerHTML=`${e.p.toFixed()} ${e.unit}`}},5+t*.1),e.bar&&this.itl.to(e.bar,{scaleX:`${e.min}%`,ease:"power2.inOut",duration:1},5+t*.1)}),this.itl.to(F.uInternalModulesProgress,{value:0,duration:1.2,ease:"power2.inOut"},8),this.itl.fromTo(this,{panelBackgroundIntensity:0},{panelBackgroundIntensity:1,ease:"power1.inOut",duration:1.2},5),this.itl.timeScale(1.2)}get panelBackgroundIntensity(){return this._panelBackgroundIntensity}set panelBackgroundIntensity(e){this._panelBackgroundIntensity=e,this.panel.style.background=`linear-gradient(90deg, rgba(0, 161, 255, 0) ${((-1+e*2)*100).toFixed(2)}%, rgba(81, 191, 255, 0.4) ${(-.5+e*2*100).toFixed(2)}%, rgba(0, 161, 255, 0) ${(e*2*100).toFixed(2)}%)`}onSplit(e){this.tl&&(this.tl.scrollTrigger?.kill(),this.tl.kill()),this.tlScrub&&(this.tlScrub.scrollTrigger?.kill(),this.tlScrub.kill()),this.tl=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",toggleActions:"play none none reset",onEnter:()=>{this.itl.seek(0).play()},onEnterBack:()=>{this.itl.seek(0).play()},onLeave:()=>{this.itl.pause()},onLeaveBack:()=>{this.itl.pause()}}}),this.tl.fromTo(e.lines,{x:50},{x:0,duration:.6,ease:"power3",stagger:.04},0),this.tl.fromTo(e.lines,{opacity:0},{opacity:1,duration:.3,stagger:.04},0),this.tl.fromTo(this.panel,{x:40},{x:0,duration:.6,ease:"power3"},.1),this.tl.fromTo(this.infoNames,{opacity:0},{opacity:1,duration:.3,stagger:.08},.1),this.tl.fromTo(this.infoValues,{opacity:0},{opacity:1,duration:.3,stagger:.08},.1),this.tl.fromTo(this.infoValues,{x:20},{x:0,duration:.6,ease:"power3",stagger:.08},.1),this.tlScrub=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",scrub:!0,onUpdate:()=>{N.render.scene.detailedSat.mesh.getWorldPosition(hi),hi.project(N.render.camera),hi.x=(hi.x*.5+.5)*N.viewport.width,hi.y=(1-(hi.y*.5+.5))*N.viewport.height,ig=(Math.atan2(this.panelBbox.top-hi.y,this.panelBbox.left-hi.x)/Math.PI+1)*180,rg=Math.sqrt((hi.x-this.panelBbox.left)**2+(hi.y-this.panelBbox.top)**2)/100,this.line.style.transform=`rotate(${ig.toFixed(2)}deg) scaleX(${rg.toFixed(2)})`,this.line.style.opacity=(nr(this.panelBbox.left-hi.x+200,0,100)*nr(this.panelBbox.top-hi.y,-100,10)*nr(hi.y,50,150)).toFixed(2)}}}),this.tlScrub.fromTo(e.lines,{y:"0"},{y:"-150%",duration:.25,ease:"power2.in",stagger:.02},.73),this.tlScrub.fromTo(e.masks,{opacity:1},{opacity:0,duration:.125,stagger:.04,immediateRender:!1},.83),this.tlScrub.fromTo(this.line,{opacity:0},{opacity:1,duration:.25,ease:"none"},0),this.tlScrub.to(this.line,{opacity:0,duration:.15,ease:"none"},.5)}enter=()=>{};leave=()=>{}}class DA extends Yn{constructor(e,t){super(e,t),this.inner=t.querySelector(":scope > .fps-inner"),this.categories=t.querySelectorAll(".fps-playload-category-item"),this.sliderWrappers=t.querySelectorAll(".fps-playload-sliders"),this.sliders=Array.from(t.querySelectorAll(".fps-playload-slider")),this.button=document.querySelector(".fps-button.fps-fixed"),this.sliderItems=t.querySelectorAll(".fps-playload-slider-item"),this.stepItem=t.querySelector(".fps-step-item"),this.itemTitle=t.querySelector(".fps-step-title"),this.itemSubtitle=t.querySelector(".fps-title-small"),this.itemNumber=t.querySelector(".fps-step-number"),this.playloadWrapper=t.querySelector(".fps-playload-wrapper"),this.continueScroll=t.querySelector(".fps-continue-sroll"),this.currentItems=this.sliders.filter(n=>n.dataset.category==="remote")[0].querySelectorAll(".fps-playload-slider-item"),this.revealWordsSplits=new It(this.itemTitle,{type:"lines,words",linesClass:"fps-line"}),this.revealWordsSplitsSubtitle=new It(this.itemSubtitle,{type:"lines,words",linesClass:"fps-line"})}attach(){super.attach(),this.categories.forEach(e=>{e.addEventListener("click",this.onCategoryClick)}),this.sliderItems.forEach(e=>{e.addEventListener("click",this.onSliderItemClick)}),this.buildAnimation()}onCategoryClick=e=>{const t=e.currentTarget;if(!t||t.classList.contains("fps-active"))return;const n=t.dataset.category;this.categories.forEach(i=>{i.classList.toggle("fps-active",i.dataset.category===n)}),this.currentItems=this.sliders.filter(i=>i.dataset.category===n)[0].querySelectorAll(".fps-playload-slider-item"),this.buildAnimation({skipEnter:!0}),this.switchCategory(n)};switchCategory(e){const t=Pe.timeline();t.to(this.sliderWrappers,{opacity:0,duration:.2},0),t.call(()=>{this.sliders.forEach(n=>{n.classList.toggle("fps-active",n.dataset.category===e)})}),t.set(this.sliderWrappers,{opacity:1},">"),t.fromTo(this.currentItems,{y:30},{y:0,duration:.6,stagger:.06,ease:"power3"},"<"),t.fromTo(this.currentItems,{opacity:0},{opacity:1,duration:.3,stagger:.06},"<")}onSliderItemClick=e=>{const t=e.currentTarget;if(!t||t.classList.contains("fps-active"))return;const n=t.dataset.item;this.sliderItems.forEach(s=>{s.classList.toggle("fps-active",s.dataset.item===n)});const i=t.closest(".fps-playload-slider");if(i){const s=i.scrollWidth-i.clientWidth,o=Math.min(Math.max(0,t.offsetLeft),s);i.scrollTo({left:o,behavior:"smooth"})}};buildAnimation({skipEnter:e=!1}={}){this.animationTl?.kill(),this.tScrub?.kill(),this.animationTl=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top-=20%",end:"bottom top",toggleActions:"play none none reset"}}),this.animationTl.fromTo(this.continueScroll,{opacity:0},{opacity:1,duration:.6,ease:"power3"},1),this.animationTl.fromTo(this.el,{y:60},{y:0,duration:.6,ease:"power3"},0),this.animationTl.fromTo(this.revealWordsSplits.words,{y:"150%"},{y:"0",duration:.8,ease:"expo"},0),this.animationTl.fromTo(this.revealWordsSplitsSubtitle.words,{y:"150%"},{y:"0",duration:.8,stagger:.06,ease:"expo"},.2),this.animationTl.fromTo(this.itemNumber,{opacity:0},{opacity:1,duration:.2},.3),this.animationTl.from(this.categories,{opacity:0,duration:.2,stagger:.08,clearProps:"all"},.1),this.animationTl.fromTo(this.currentItems,{y:20},{y:0,duration:.5,stagger:.06,ease:"power3"},.1),this.animationTl.fromTo(this.currentItems,{opacity:0},{opacity:1,duration:.25,stagger:.06},.1),e&&this.animationTl.seek("-=0"),this.tScrub=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",scrub:!0}}),this.tScrub.fromTo(this.inner,{opacity:0},{opacity:1,duration:.2},.1),this.tScrub.fromTo(this.itemNumber.querySelector("span"),{opacity:1},{opacity:0,duration:.15,ease:"power1.out"},.6),this.tScrub.fromTo(this.revealWordsSplits.lines,{x:0},{x:-80,duration:.4,ease:"power2.in"},.6),this.tScrub.fromTo(this.revealWordsSplitsSubtitle.lines,{x:0},{x:-40,duration:.4,ease:"power2.in"},.6),this.tScrub.fromTo(this.stepItem,{opacity:1},{opacity:0,duration:.3,ease:"none"},.6),this.tScrub.fromTo(this.playloadWrapper,{x:0},{x:-40,duration:.4,ease:"power2.in"},.6),this.tScrub.to(this.inner,{opacity:0,duration:.2,ease:"none"},.8),this.tScrub.fromTo(this,{btnEnabled:!0},{btnEnabled:!1,duration:.01},.1),this.tScrub.to(this,{btnEnabled:!0,duration:.01},.9),this.tScrub.add(()=>{},1)}get btnEnabled(){return this._btnEnabled}set btnEnabled(e){this._btnEnabled!==e&&(this._btnEnabled=e,this.button.classList.toggle("fps-disabled-main",!e))}}class UA extends Yn{constructor(e,t){super(e,t),this.title=this.el.querySelector(".fps-step-title"),this.subtitle=this.el.querySelector(".fps-title-small"),this.number=this.el.querySelector(".fps-step-number")}attach(){super.attach(),this.buildAnimation()}buildAnimation(){const e=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",toggleActions:"play none none reset"}});e.fromTo(this.title,{x:120},{x:0,duration:.8,ease:"power3"},0),e.fromTo(this.title,{opacity:0},{opacity:1,duration:.4,ease:"none"},0),e.fromTo(this.subtitle,{x:160},{x:0,duration:.7,ease:"power3"},.1),e.fromTo(this.subtitle,{opacity:0},{opacity:1,duration:.35,ease:"none"},.1),e.fromTo(this.number,{opacity:0},{opacity:1,duration:.2,ease:"none"},.4)}}class IA extends Yn{constructor(e,t){super(e,t),this.fixedButton=document.querySelector(".fps-button.fps-fixed"),this.title=this.el.querySelector(".fps-text-59, .fps-title-main")}attach(){super.attach(),this.buildAnimation()}buildAnimation(){this.tl=null,this.tlScrub=null,new It(this.title,{type:"lines, words",linesClass:"fps-line",autoSplit:!0,mask:"lines",onSplit:e=>this.onSplit(e)})}onSplit(e){this.tl&&(this.tl.scrollTrigger?.kill(),this.tl.kill()),this.tlScrub&&(this.tlScrub.scrollTrigger?.kill(),this.tlScrub.kill()),this.tl=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",toggleActions:"play none none reset"}}),this.el.dataset.transitionHorizontal==="both"||this.el.dataset.transitionHorizontal==="enter"?(this.el.dataset.transitionHorizontal==="enter"?this.tl.fromTo(e.masks,{x:80},{x:0,duration:.6,ease:"power3",stagger:.04},0):this.tl.fromTo(e.lines,{x:80},{x:0,duration:.6,ease:"power3",stagger:.04},0),this.tl.fromTo(e.lines,{opacity:0},{opacity:1,duration:.3,stagger:.04},0)):this.tl.fromTo(e.lines,{y:"150%"},{y:"0",duration:.6,stagger:.04,ease:"expo"},0),this.tlScrub=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",scrub:!0}}),this.el.dataset.navKey==="design"&&Pe.matchMedia().add("(max-width: 1023px)",()=>(this.tlScrub.to(this.fixedButton,{opacity:1,duration:.2},0),()=>{Pe.set(this.fixedButton,{opacity:1})})),this.el.dataset.transitionHorizontal==="both"||this.el.dataset.transitionHorizontal==="leave"?(this.tlScrub.fromTo(e.masks,{x:0},{x:-40,duration:.34,ease:"power2.in",stagger:.04,immediateRender:!1},.6),this.tlScrub.fromTo(e.masks,{opacity:1},{opacity:0,duration:.22,stagger:.04,immediateRender:!1},.7)):(this.tlScrub.fromTo(e.lines,{y:"0"},{y:"-150%",duration:.25,ease:"power2.in",stagger:.02},.73),this.tlScrub.fromTo(e.masks,{opacity:1},{opacity:0,duration:.125,stagger:.04,immediateRender:!1},.83))}}class LA extends Yn{constructor(e,t){super(e,t),this.pretitle=t.querySelector(".fps-pretitle"),this.subtitle=t.querySelector(".fps-subtitle"),this.inner=t.querySelector(".fps-inner")}attach(){super.attach(),this.buildAnimation()}buildAnimation(){const e=new It(this.pretitle,{type:"lines,words",linesClass:"fps-line"}),t=new It(this.subtitle,{type:"words, chars"}),n=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",toggleActions:"play none none reset"}});n.fromTo(this.el,{y:60},{y:0,duration:.6,ease:"power3"},0),n.fromTo(e.words,{y:"150%"},{y:"0",duration:.8,stagger:.06,ease:"expo"},0),n.fromTo(t.chars,{color:"#161B21"},{color:"#fff",duration:.4,stagger:.01,ease:"power1"},0);const i=this.el.dataset.scrollHeight==="200svh",s=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",scrub:!0}});s.fromTo(this.inner,{opacity:0},{opacity:1,duration:.18},0),s.fromTo(this.inner,{y:0},{y:-40,duration:.3,ease:"power2.in",stagger:0},i?1.7:.7),s.fromTo(this.inner,{opacity:1},{opacity:0,duration:.3,immediateRender:!1},i?1.7:.7),s.add(()=>{},i?2:1)}}class NA extends Yn{constructor(e,t){super(e,t),this.title=t.querySelector(".fps-text-135"),this.subtitle=t.querySelector(".fps-text-27")}attach(){super.attach(),this.buildAnimation()}buildAnimation(){const e=new It(this.title,{type:"lines,words",mask:"words",wordsClass:"fps-words"}),t=new It(this.subtitle,{type:"lines",mask:"lines"}),n=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",toggleActions:"play none none reset"}});this.el.dataset.transitionHorizontal==="both"||this.el.dataset.transitionHorizontal==="enter"?(n.fromTo(e.lines,{x:150},{x:0,duration:.6,ease:"power3",stagger:.04},0),n.fromTo(e.lines,{opacity:0},{opacity:1,duration:.3,stagger:.04},0),n.fromTo(t.lines,{x:80},{x:0,duration:.6,ease:"power3",stagger:.04},.1),n.fromTo(t.lines,{opacity:0},{opacity:1,duration:.3,stagger:.04},.1)):(n.fromTo(e.lines,{y:"150%"},{y:"0",duration:.6,stagger:.04,ease:"expo"},0),n.fromTo(e.lines,{opacity:0},{opacity:1,duration:.3,stagger:.04},0),n.fromTo(t.lines,{y:"150%"},{y:"0",duration:.6,stagger:.04,ease:"expo"},.2),n.fromTo(t.lines,{opacity:0},{opacity:1,duration:.3,stagger:.04},.2));const i=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",scrub:!0}});this.el.dataset.transitionHorizontal==="both"||this.el.dataset.transitionHorizontal==="leave"?(i.fromTo(e.masks,{x:0},{x:-80,duration:.34,ease:"power2.in",stagger:.02,immediateRender:!1},.6),i.fromTo(e.masks,{opacity:1},{opacity:0,duration:.22,stagger:.04,immediateRender:!1},.7),i.fromTo(t.masks,{x:0},{x:-60,duration:.34,ease:"power2.in",stagger:.04,immediateRender:!1},.65),i.fromTo(t.masks,{opacity:1},{opacity:0,duration:.22,stagger:.04,immediateRender:!1},.75)):(i.fromTo(e.lines,{y:"0"},{y:"-150%",duration:.25,ease:"power2.in",stagger:.02},.73),i.fromTo(e.lines,{opacity:1},{opacity:0,duration:.22,stagger:.04,immediateRender:!1},.7),i.fromTo(t.lines,{y:"0"},{y:"-150%",duration:.25,ease:"power2.in",stagger:.02},.83),i.fromTo(t.lines,{opacity:1},{opacity:0,duration:.22,stagger:.04,immediateRender:!1},.8))}}const OA=[{nums:[3,2,1," "],stop:0,second:!1},{nums:[0,1,2,3,4,5,6,7,8,9,0,5,4,3,2,1," "],stop:5,second:!0},{nums:[0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2," "],stop:9,second:!0},{nums:[0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9," "],stop:0,second:!1}];class FA extends Yn{constructor(e,t){super(e,t),this.fixedButton=document.querySelector(".fps-button.fps-fixed"),this.navgationBar=document.querySelector(".fps-navigation-bar"),this.inner=t.querySelector(".fps-inner"),this.title=t.querySelector(".fps-total-title"),this.centerPreTitle=t.querySelector(".fps-center-pretitle"),this.centerNumber=t.querySelector(".fps-center-number"),this.centerUnitWrapper=t.querySelector(".fps-center-unit"),this.centerUnit=t.querySelector(".fps-center-unit span"),this.listItems=t.querySelectorAll(".fps-scroll-content li"),this.scrollbar=t.querySelector(".fps-scrollbar"),this.progressBar=t.querySelector(".fps-progress-bar"),this.progressWrapper=t.querySelector(".fps-scrollbar"),this.progressBar=t.querySelector(".fps-progress-bar"),this.number=t.querySelector(".fps-center-number"),this.numberOne=t.querySelector(".fps-center-number-one"),this.numberContent=t.querySelector(".fps-center-number-content"),this.temoin=null,this.numberContent.innerHTML="",this.numbers=OA.map((n,i)=>{const s=document.createElement("div");return s.classList.add("fps-number-wrapper"),n.nums.forEach((o,a)=>{const l=document.createElement("span");l.classList.add("fps-single-number"),l.innerHTML=o,o!==" "&&(this.temoin=l),s.appendChild(l)}),this.number.appendChild(s),{el:s,count:n.nums.length,...n}}),this.previousTranslates=new Array(4).fill(null),this.timeoutIds=new Array(4).fill(null),this.onResize(),this.currentColor="#FC6A18"}attach(){super.attach(),N.on("viewport:resize",this.onResize),this.buildAnimation()}onResize=()=>{const e=this.temoin.getBoundingClientRect();this.nWidth=e.width,this.nHeight=e.height};buildAnimation=()=>{const e=new It(this.title,{type:"lines",mask:"lines"}),t=new It(this.centerPreTitle,{type:"words",mask:"words"}),n=new It(this.listItems,{type:"lines",mask:"lines"}),i=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",toggleActions:"play none none reset"}});i.fromTo(t.words,{y:"150%"},{y:"0%",duration:.8,stagger:.08,ease:"expo"},0),i.fromTo(this.numberContent,{y:"150%"},{y:"0%",duration:.8,ease:"expo"},.2),i.fromTo(this.centerUnit,{opacity:0},{opacity:1,duration:.3},.6),this.numbers.forEach((a,l)=>{i.fromTo(a.el,{opacity:0},{opacity:1,duration:.5},.2+Math.abs(1.5-l)*.05)}),i.fromTo(e.lines,{y:"150%"},{y:"0%",duration:.6,stagger:.04,ease:"expo"},.5),i.fromTo(n.lines,{y:"150%"},{y:"0%",duration:.8,stagger:.06,ease:"expo"},.7),i.fromTo(this.scrollbar,{scaleY:0},{scaleY:1,duration:1,ease:"expo"},.8);const s=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:()=>`top+=${window.innerHeight} top`,end:()=>`top+=${window.innerHeight*3} top`,scrub:!0,invalidateOnRefresh:!0}});s.fromTo(this,{currentColor:"#FC6A18"},{currentColor:"#FFFFFF",duration:1,onUpdate:()=>{this.centerUnitWrapper.style.color=this.currentColor,this.centerPreTitle.style.color=this.currentColor,this.progressBar.style.backgroundColor=this.currentColor}},0),this.numbers.forEach((a,l)=>{s.fromTo(a.el,{y:0},{y:()=>-(a.count-1)*this.nHeight,duration:l===1||l===2?1:.8,ease:"power3.inOut"},0+l*.02+(l===1||l===2?.01:0))}),s.fromTo(this.numberOne,{y:this.nHeight},{y:0,duration:.1,ease:"power1.out"},.8),s.fromTo(this.listItems[0],{color:"#FC6A18"},{color:"#68717D",duration:.5},0),s.fromTo(this.listItems[1],{color:"#68717D"},{color:"#FFFFFF",duration:.5},.5),s.fromTo(this.progressBar,{y:0},{y:()=>this.progressWrapper.offsetHeight-this.progressBar.offsetHeight,duration:.8,ease:"power2.inOut"},.1);const o=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",scrub:!0}});o.fromTo(this.inner,{opacity:0},{opacity:1,duration:.15},0),o.fromTo(this.inner,{opacity:1},{opacity:0,duration:.2,immediateRender:!1},3.8),o.fromTo(this.fixedButton,{opacity:1},{opacity:0,duration:.2,immediateRender:!1},3.8),o.add(()=>{},4)}}class BA extends Yn{constructor(e,t){super(e,t),this.spacer=e,this.el=t,this.titleWrapper=this.el.querySelector(".fps-title-wrapper"),this.subtitle=this.titleWrapper.querySelector(".fps-title-small"),this.titleBig=this.titleWrapper.querySelector(".fps-title-big"),this.defineReceive=this.el.querySelector(".fps-define-receive"),this.items=this.defineReceive.querySelectorAll(".fps-step-item"),this.numbers=this.defineReceive.querySelectorAll(".fps-step-number"),this.titles=this.defineReceive.querySelectorAll(".fps-step-title"),this.smalls=this.defineReceive.querySelectorAll(".fps-title-small"),this.separator=this.defineReceive.querySelector(".fps-separator"),this.itemCenter=this.defineReceive.querySelector(".fps-item-center"),this.itemSpacer=this.defineReceive.querySelector(".fps-spacer"),this.titleMounth=this.defineReceive.querySelector(".fps-title-big"),this.progressBar=this.defineReceive.querySelector(".fps-progress-bar"),this.progressBarBg=this.defineReceive.querySelector(".fps-progress-bar-bg"),this.progressBarFill=this.defineReceive.querySelector(".fps-progress-bar-fill"),this.progressBarText=this.defineReceive.querySelectorAll(".fps-progress-bar-text")}attach(){super.attach(),this.buildAnimation()}buildAnimation(){const e=new It(this.subtitle,{type:"words"}),t=new It(this.titleBig,{type:"words",mask:"words"}),n=new It(this.titleMounth,{type:"lines,words"}),i=Pe.matchMedia();i.add("(max-width: 1023px)",()=>{const s=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",toggleActions:"play none none reset"}});s.fromTo(e.words,{y:"150%"},{y:"0",duration:.8,stagger:.06,ease:"expo"},0),s.fromTo(t.words,{y:"150%"},{y:"0",duration:.8,stagger:.06,ease:"expo"},.1);const o=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",scrub:!0,onEnter:()=>N.navigationBar.onViewportResize()}});o.fromTo(this.titleWrapper,{opacity:0},{opacity:1,duration:.15,ease:"none"},0),o.fromTo(t.masks,{y:0},{y:"-150%",duration:.4,ease:"power2.in"},1),o.fromTo(this.subtitle,{opacity:1},{opacity:0,duration:.2,ease:"none"},1),o.fromTo(this.titleBig,{scale:1},{scale:.9,duration:.4,ease:"power2.in"},1),o.fromTo(this.separator,{opacity:0},{opacity:1,duration:.3},1.2),o.fromTo(this.separator,{scaleX:0},{scaleX:1,duration:.8,ease:"power2"},1.2),o.fromTo(this.numbers,{opacity:0},{opacity:1,duration:.3,ease:"none"},1.7),o.fromTo(this.items[0],{x:"-80vw"},{x:0,duration:1,ease:"power2"},1.1),o.fromTo(this.items[1],{x:"95vw"},{x:0,duration:1,ease:"power2"},1.1),o.fromTo(this.items,{opacity:0},{opacity:1,duration:.5,ease:"none"},1.1),o.fromTo(this.smalls[0],{x:50},{x:0,duration:1,ease:"power2"},1.1),o.fromTo(this.smalls[1],{x:50},{x:0,duration:1,ease:"power2"},1.1),o.fromTo(this.progressBarBg,{scaleX:.00196},{scaleX:1,duration:1.2,ease:"power2.inOut"},2),o.fromTo(this.progressBarText[0],{x:300},{x:0,duration:1.2,ease:"power2.inOut"},2),o.fromTo(this.progressBarText[1],{x:-300},{x:0,duration:1.2,ease:"power2.inOut"},2),o.to(this.separator,{opacity:0,duration:.1},2),o.fromTo(this.progressBar,{opacity:0},{opacity:1,duration:.1},2),o.to(this.el.querySelectorAll(".fps-step-number span"),{opacity:0,duration:.4,ease:"none"},2),o.to(this.items[0],{x:"-80vw",duration:1.2,ease:"power2.inOut"},2),o.to(this.items[1],{x:"95vw",duration:1.2,ease:"power2.inOut"},2),o.to(this.titles[0].querySelector("span"),{x:-60,duration:1.2,ease:"power2.inOut"},2),o.to(this.smalls[1].querySelector("span"),{x:60,duration:1.2,ease:"power2.inOut"},2),o.to(this.items,{opacity:0,duration:.3,ease:"none"},2.4),o.fromTo(n.words,{y:"150%"},{y:"0",duration:.5,stagger:.04,ease:"power2"},2.4),o.fromTo(this.titleMounth,{scale:.7},{scale:1,duration:.6,ease:"power2"},"<"),o.fromTo(this.progressBarText,{opacity:0},{opacity:1,duration:.5,ease:"none"},2.6),o.to(this.progressBarText,{opacity:0,duration:.1,ease:"none"},3.5),o.fromTo(n.words,{y:0},{y:"-150%",duration:.4,stagger:.04,ease:"power2.in",immediateRender:!1},"<"),o.fromTo(N.navigationBar,{appear:0},{appear:1,duration:.5},3.5),o.to(this.progressBar,{opacity:0,duration:.25},3.5),o.add(()=>{},4)}),i.add("(min-width: 1024px)",()=>{const s=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",toggleActions:"play none none reset"}});s.fromTo(e.words,{y:"150%"},{y:"0",duration:.8,stagger:.06,ease:"expo"},0),s.fromTo(t.words,{y:"150%"},{y:"0",duration:.8,stagger:.06,ease:"expo"},.1);const o=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",scrub:!0}});o.fromTo(this.titleWrapper,{opacity:0},{opacity:1,duration:.15,ease:"none"},0),o.fromTo(t.masks,{y:0},{y:"-150%",duration:.4,ease:"power2.in"},1),o.fromTo(this.subtitle,{opacity:1},{opacity:0,duration:.2,ease:"none"},1),o.fromTo(this.titleBig,{scale:1},{scale:.9,duration:.4,ease:"power2.in"},1),o.fromTo(this.separator,{opacity:0},{opacity:1,duration:.3},1.2),o.fromTo(this.separator,{scaleY:1},{scaleY:.2,duration:.8,ease:"power2"},1.2),o.from(this.itemSpacer,{width:"100vw",duration:1,ease:"power2"},1),o.fromTo(this.smalls[0],{x:100},{x:0,duration:1,ease:"power2"},1),o.fromTo(this.smalls[1],{x:100},{x:0,duration:1,ease:"power2"},1),o.fromTo(this.numbers,{opacity:0},{opacity:1,duration:.3,ease:"none"},1.7),o.fromTo(this.items,{opacity:0},{opacity:1,duration:.5,ease:"none"},1),o.fromTo(this.progressBarBg,{scaleX:.00196},{scaleX:1,duration:1.2,ease:"power2.inOut"},2),o.fromTo(this.progressBarText[0],{x:300},{x:0,duration:1.2,ease:"power2.inOut"},2),o.fromTo(this.progressBarText[1],{x:-300},{x:0,duration:1.2,ease:"power2.inOut"},2),o.to(this.itemSpacer,{width:"100vw",duration:1.2,ease:"power2.inOut"},2),o.to(this.separator,{opacity:0,duration:.1},2),o.fromTo(this.progressBar,{opacity:0},{opacity:1,duration:.1},2),o.to(this.el.querySelectorAll(".fps-step-number span"),{opacity:0,duration:.4,ease:"none"},2),o.to(this.titles[0].querySelector("span"),{x:-60,duration:1.2,ease:"power2.inOut"},2),o.to(this.smalls[1].querySelector("span"),{x:60,duration:1.2,ease:"power2.inOut"},2),o.to(this.items,{opacity:0,duration:.3,ease:"none"},2.4),o.fromTo(n.words,{y:"150%"},{y:"0",duration:.5,stagger:.04,ease:"power2"},2.4),o.fromTo(this.titleMounth,{scale:.7},{scale:1,duration:.6,ease:"power2"},"<"),o.fromTo(this.progressBarText,{opacity:0},{opacity:1,duration:.5,ease:"none"},2.6),o.to(this.progressBarText,{opacity:0,duration:.1,ease:"none"},3.5),o.fromTo(n.words,{y:0},{y:"-150%",duration:.4,stagger:.04,ease:"power2.in",immediateRender:!1},"<"),o.fromTo(N.navigationBar,{appear:0},{appear:1,duration:.5},3.5),o.to(this.progressBar,{opacity:0,duration:.25},3.5),o.add(()=>{},4)})}}class kA extends Yn{constructor(e,t){super(e,t),this.spacer=e,this.titleBig=this.el.querySelector(".fps-title-big"),this.button=document.querySelector(".fps-button.fps-fixed"),this._btnEnabled=!0}attach(){super.attach(),this.buildAnimation()}buildAnimation(){const e=new It(this.titleBig,{type:"lines,words",linesClass:"fps-line"}),t=new It(e.words,{type:"words",wordsClass:"fps-word"});Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",toggleActions:"play none none reset"}}).fromTo(e.words,{y:"150%"},{y:"0",duration:.6,stagger:.04,ease:"power2"},0);const i=Pe.timeline({scrollTrigger:{trigger:this.spacer,start:"top top",end:"bottom top",scrub:!0}});i.fromTo(N.navigationBar,{place:0},{place:1,ease:"none",duration:.5},0),i.fromTo(t.words,{y:0},{y:"-150%",duration:.4,stagger:.04,ease:"power2.in",immediateRender:!1},.55),Pe.matchMedia().add("(max-width: 1023px)",()=>(i.fromTo(this.button,{opacity:1},{opacity:0,duration:.2},.8),i.fromTo(this.button,{pointerEvents:"auto"},{pointerEvents:"none",duration:.2},.8),()=>{Pe.set(this.button,{opacity:1}),Pe.set(this.button,{pointerEvents:"auto"})})),i.add(()=>{},1)}}const zA="100svh",sg="fps-section-visible",og=Object.fromEntries(Object.entries(Object.assign({"./Frames/Basic.js":EA,"./Frames/Cloud.js":wA,"./Frames/Cost.js":AA,"./Frames/Hero.js":RA,"./Frames/Orbit.js":CA,"./Frames/Performance.js":PA,"./Frames/Playload.js":DA,"./Frames/Receive.js":UA,"./Frames/SubSection.js":IA,"./Frames/TextReveal.js":LA,"./Frames/TitleSubtitle.js":NA,"./Frames/TotalCost.js":FA,"./Frames/TwoSteps.js":BA,"./Frames/WeCover.js":kA})).map(([r,e])=>[r.split("/").pop().split(".")[0],e]));class VA extends Fr{constructor(e,t){super(e,"frame"),this.scrollWrapper=document.querySelector(".fps-scroll-wrapper"),this.sections=Array.from(document.querySelectorAll(t)),this.spacers=new Map,this.triggers=[],this.buildScrollWrapper(),this.progress=0,this.frames=this.sections.map(n=>Object.keys(og).includes(n.dataset.frame)?new og[n.dataset.frame](this.spacers.get(n),n):new Yn(this.spacers.get(n),n)),this.count=this.frames.length,e.bind(this)}buildScrollWrapper=()=>{const e=document.createDocumentFragment();this.sections.forEach((n,i)=>{e.appendChild(this.createSpacer(n,i))}),this.scrollWrapper.replaceChildren(e);const t=Array.from(this.scrollWrapper.children);this.triggers.forEach(n=>n?.kill()),this.triggers=[],this.sections.forEach((n,i)=>{const s=t[i];s&&(Pe.set(n,{opacity:0}),this.spacers.set(n,s),n.classList.remove(sg),this.triggers.push(this.createScrollTrigger(n,s,i===0)))})};createScrollTrigger=(e,t,n)=>{const i=Pe.timeline();return n||e.dataset.noTransition!==void 0?(i.fromTo(e,{opacity:0},{opacity:1,duration:.001,ease:"none"},0),i.to(e,{opacity:0,duration:.001,ease:"none"},.999)):(i.fromTo(e,{opacity:0},{opacity:1,duration:.2,ease:"none"},0),i.fromTo(e,{opacity:1},{opacity:0,duration:.15,ease:"none",immediateRender:!1},.85)),i.add(()=>{},1),ht.create({trigger:t,start:n?"top-=1px top":"top top",end:"bottom top",scrub:!0,toggleClass:{targets:e,className:sg},animation:i})};shouldUseHorizontalTransition=(e,t)=>{const n=e.dataset.transitionHorizontal;return n==="both"||n===t};createTransitionAnimation=(e,t,n,i,s,o,a)=>{Pe.killTweensOf(e);const l=Pe.timeline();l.fromTo(e,t,{...n,duration:i,ease:"power2.out"},0),l.fromTo(e,{opacity:s},{opacity:o,duration:a},0)};animateEnter=e=>{const t=this.shouldUseHorizontalTransition(e,"enter");this.createTransitionAnimation(e,t?{x:60,y:0}:{y:60,x:0},t?{x:0,y:0}:{y:0,x:0},.6,0,1,.25)};animateLeave=e=>{const t=this.shouldUseHorizontalTransition(e,"leave");this.createTransitionAnimation(e,t?{x:0,y:0}:{y:0,x:0},t?{x:-60,y:0}:{y:-60,x:0},.5,1,0,.25)};animateEnterBack=e=>{const t=this.shouldUseHorizontalTransition(e,"leave");this.createTransitionAnimation(e,t?{x:-60,y:0}:{y:-60,x:0},t?{x:0,y:0}:{y:0,x:0},.6,0,1,.3)};animateLeaveBack=e=>{const t=this.shouldUseHorizontalTransition(e,"enter");this.createTransitionAnimation(e,t?{x:0,y:0}:{y:0,x:0},t?{x:60,y:0}:{y:60,x:0},.5,1,0,.25)};attach=()=>{this.frames.forEach(e=>e.attach())};onTickerUpdate=({et:e,dt:t})=>{this.progress=0,this.frames.forEach(n=>this.progress+=n.frameProgress),this.app.debug?.monitor.info("Frames progress",this.progress.toFixed(3)),this.app.render?.animator&&(this.app.render.animator.progress=this.progress)};createSpacer=(e,t)=>{const n=document.createElement("div");return n.classList.add("fps-section-spacer"),e.hasAttribute("data-scroll-free")&&n.setAttribute("data-scroll-freespacer",!0),e.hasAttribute("data-nav-key")&&n.setAttribute("data-nav-key",e.getAttribute("data-nav-key")),e.hasAttribute("data-top-nav-key")&&n.setAttribute("data-top-nav-key",e.getAttribute("data-top-nav-key")),e.hasAttribute("data-snap-points")&&n.setAttribute("data-snap-points",e.getAttribute("data-snap-points")),e.hasAttribute("data-nav-key-progress")&&n.setAttribute("data-nav-key-progress",e.getAttribute("data-nav-key-progress")),e.hasAttribute("data-spacer-top")&&(n.style.marginTop=e.getAttribute("data-spacer-top")),il.has("spacerborder")&&(n.style.border="1px solid red",n.style.borderLeft=`4px solid hsl(${Math.round(Co(t)*360)}, 100%, 50%)`),n.style.minHeight=e.getAttribute("data-scroll-height")??zA,n}}let vh=0;const ag=(r,e,t)=>r*(1-t)+e*t;class GA{constructor(e,t,n){this.plugin=e,this.el=t,this.key=t.dataset.key,this.id=n,this.progressBar=this.el.querySelector(".fps-nav-section-progress"),this.subs=[],this.progress=0,this._active=!1}attach(){this.resize(),this.el.addEventListener("click",this.onClick),this.id===0&&this.subs.forEach(e=>e.progressStart=1)}detach(){this.el.removeEventListener("click",this.onClick)}onClick=()=>{this.active||N.scroller.toKey(this.key)};resize(){(N.viewport.breakpoint==="mobile"||N.viewport.breakpoint==="tablet")&&(this.el.style.width=""),this.updateWidth()}registerSub(e){this.subs.push(e)}update(){vh=0,this.subs.forEach(e=>vh+=nr(e.progress,0,.8)),this.progress=vh/this.subs.length,this.active=this.id===0?this.progress<1:this.progress>0&&this.progress<1,this.el.classList.toggle("done",this.progress>=1),(N.viewport.breakpoint==="mobile"||N.viewport.breakpoint==="tablet")&&(this.progressBar.style.transform=`scale3d(1, ${this.progress.toFixed(2)}, 1)`)}get active(){return this._active}set active(e){this._active!==e&&(this._active=e,this.el.classList.toggle("active",this._active),(N.viewport.breakpoint==="mobile"||N.viewport.breakpoint==="tablet")&&(this.el.style.width=""))}updateWidth(){(N.viewport.breakpoint==="mobile"||N.viewport.breakpoint==="tablet")&&(this.el.style.width="")}}class HA{constructor(e,t){this.plugin=e,this.el=t,this.key=t.dataset.key,this.parent=this.plugin.sections[t.closest(".fps-nav-section").dataset.key],this.parent.registerSub(this),this.progressBar=this.el.querySelector(".fps-nav-sub-section-progress"),this.progressBarSpan=this.progressBar.querySelector("span"),this.progressBarStart=this.el.querySelector(".fps-nav-sub-section-progress-start"),this.progressBarStartSpan=this.progressBarStart?.querySelector("span"),this.related=Array.from(document.querySelectorAll(`[data-nav-key="${t.dataset.key}"]`)),this._progress=0,this._progressStart=1}get progress(){return this._progress}attach(){this.el.addEventListener("click",this.onClick)}detach(){this.el.removeEventListener("click",this.onClick)}onClick=()=>{N.scroller.toKey(this.key)};set progress(e){this._progress=e,this.parent.update(),(N.viewport.breakpoint==="desktop"||N.viewport.breakpoint==="mlarge"||N.viewport.breakpoint==="large"||N.viewport.breakpoint==="xlarge")&&(this.progressBar.style.transform=`translate3d(${(-(1-this._progress)*105-1).toFixed(2)}%, 0, 0)`,this.progressBarSpan.style.transform=`translate3d(${((1-this._progress)*105-1).toFixed(2)}%, 0, 0)`)}get progressStart(){return this._progressStart}set progressStart(e){this._progressStart=e,(N.viewport.breakpoint==="desktop"||N.viewport.breakpoint==="mlarge"||N.viewport.breakpoint==="large"||N.viewport.breakpoint==="xlarge")&&(this.progressBarStart.style.transform=`translate3d(${(-(1-this._progressStart)*105-1).toFixed(2)}%, 0, 0)`,this.progressBarStartSpan.style.transform=`translate3d(${((1-this._progressStart)*105-1).toFixed(2)}%, 0, 0)`)}}class WA extends Fr{constructor(e){super(e,"navigationBar"),this._appear=0,this._disappear=0,this._place=0,this._barMorph=1,this._btnMorph=1,this._barXDecay=1,this.el=document.querySelector(".fps-navigation-bar"),this.inner=this.el.querySelector(".fps-navigation-bar-inner"),this.bbox=this.inner.getBoundingClientRect(),this.barRef=document.querySelector(".fps-two-steps .fps-progress-bar"),this.btnRef=document.querySelector(".fps-last-section-button"),this.barRefBbox=this.barRef.getBoundingClientRect(),this.sections=Object.fromEntries(Array.from(this.el.querySelectorAll(".fps-nav-section")).map((t,n)=>[t.dataset.key,new GA(this,t,n)])),this.subs=Object.fromEntries(Array.from(this.el.querySelectorAll(".fps-nav-sub-section")).map(t=>[t.dataset.key,new HA(this,t)]))}get appear(){return this._appear}set appear(e){this._appear!==e&&(this._appear=e,this._appear===0&&this.onViewportResize(),N.viewport.breakpoint==="mobile"?this.appearTlMb.seek(this._appear):this.appearTlDk.seek(this._appear))}get place(){return this._place}set place(e){this._place!==e&&(this._place=e,N.viewport.breakpoint!=="mobile"&&this.placeTlDk.seek(this._place))}get disappear(){return this._disappear}set disappear(e){this._disappear!==e&&(this._disappear=e,N.viewport.breakpoint==="mobile"||N.viewport.breakpoint==="tablet"?this.disappearTlMb.seek(this._disappear):this.disappearTlDk.seek(this._disappear))}get barMorph(){return this._barMorph}set barMorph(e){this._barMorph!==e&&(this._barMorph=e,this.updateBarPosition())}get barXDecay(){return this._barXDecay}set barXDecay(e){this._barXDecay!==e&&(this._barXDecay=e,this.updateBarPosition())}get btnMorph(){return this._btnMorph}set btnMorph(e){this._btnMorph!==e&&(this._btnMorph=e,this.inner.style.pointerEvents=this._btnMorph<.99?"none":"auto",this.inner.style.transform=`translate3d(0, ${(this.btnRefBbox.top-this.bbox.top)*(1-this._btnMorph)}px, 0) scale3d(${ag(this.btnRefBbox.width/this.retractedWidth,1,this._btnMorph)}, ${ag(this.btnRefBbox.height/this.bbox.height,1,this._btnMorph)}, 1)`,this.inner.style.backgroundColor=`rgb(0, 161, 255, ${1-this._btnMorph})`)}updateBarPosition=()=>{this.inner.style.transform=`translate3d(${7*this._barXDecay}vw, ${(this.barRefBbox.top-this.bbox.top)*this._barMorph}px, 0px)`};attach=()=>{Object.values(this.sections).forEach(e=>e.attach()),Object.values(this.subs).forEach(e=>e.attach()),this.app.on("viewport:resize",this.onViewportResize),this._barMorph=0,this.appearTlMb=Pe.timeline({paused:!0}),this.appearTlMb.fromTo(this.el,{opacity:0},{opacity:1,duration:1},0),this.appearTlMb.fromTo(this.sections.spaceops.el,{opacity:0},{opacity:1,duration:.2},.5),this.appearTlMb.fromTo(this.sections.technology.el,{opacity:0},{opacity:1,duration:.2},.6),this.appearTlMb.fromTo(this.sections.costing.el,{opacity:0},{opacity:1,duration:.2},.7),this.appearTlDk=Pe.timeline({paused:!0}),this.appearTlDk.fromTo(this.el,{opacity:0},{opacity:1,duration:.5},0),this.sections.mission.subs.forEach((e,t)=>{this.appearTlDk.fromTo(e.el,{scaleX:1.02},{scaleX:1,ease:"sine.inOut",duration:.2},.2+t*.02)}),this.placeTlDk=Pe.timeline({paused:!0}),this.placeTlDk.fromTo(this,{barMorph:1},{barMorph:0,ease:"power3.inOut",duration:.6},0),this.placeTlDk.fromTo(this,{barXDecay:1},{barXDecay:0,ease:"power2.inOut",duration:.4},.6),this.sections.mission.subs.forEach((e,t)=>{e.progressStart=1}),this.placeTlDk.fromTo(this.sections.mission.subs[3],{progressStart:1},{progressStart:0,ease:"power2.in",duration:.12},.1),this.placeTlDk.fromTo(this.sections.mission.subs[2],{progressStart:1},{progressStart:0,ease:"none",duration:.08},.22),this.placeTlDk.fromTo(this.sections.mission.subs[1],{progressStart:1},{progressStart:0,ease:"none",duration:.08},.3),this.placeTlDk.fromTo(this.sections.mission.subs[0],{progressStart:1},{progressStart:0,ease:"power2.out",duration:.12},.38),this.placeTlDk.fromTo(this.sections.spaceops.el,{opacity:0},{opacity:1,duration:.15},.6),this.placeTlDk.fromTo(this.sections.technology.el,{opacity:0},{opacity:1,duration:.15},.65),this.placeTlDk.fromTo(this.sections.satellites.el,{opacity:0},{opacity:1,duration:.15},.7),this.placeTlDk.fromTo(this.sections.costing.el,{opacity:0},{opacity:1,duration:.15},.75),this.placeTlDk.fromTo(this.el,{pointerEvents:"none"},{pointerEvents:"auto",duration:.1},.8),this.disappearTlMb=Pe.timeline({paused:!0}),this.disappearTlDk=Pe.timeline({paused:!0}),this.disappearTlDk.fromTo(this,{btnMorph:1},{btnMorph:0,ease:"power3.inOut",duration:.6},0),this.onViewportResize()};detach=()=>{this.app.off("viewport:resize",this.onViewportResize),Object.values(this.sections).forEach(e=>e.detach()),Object.values(this.subs).forEach(e=>e.detach())};onViewportResize=()=>{Object.values(this.sections).forEach(e=>e.resize()),this.barRefBbox=this.barRef.getBoundingClientRect(),this.btnRefBbox=this.btnRef.getBoundingClientRect(),this.bbox=this.el.getBoundingClientRect(),this.retractedWidth=1.597*N.viewport.width/100*14+22,this.place<=0&&this.sections.mission.subs.forEach((e,t)=>{e.progressStart=1})}}const ws=Math.PI;new At;const di=new Ke;new Ke().identity();let Ci=0,xh,yh;const lg=new Oe,dn=new k,$r=new si,As=new k,cg=new si().setFromEuler(new In(0,1,0));class XA{constructor(){this._progress=0,this._scalableSatsPlace=0,this.timeline=Pe.timeline(),N.bind(this)}onAppReady(){const e=this.timeline,t=N.render.camera,n=N.render.scene.falcon,i=N.render.scene.falconPosition,s=N.render.scene.detailedSat,o="power1.inOut",a=N.render.scene.falconP1,l=N.render.scene.falconP2,c=N.render.scene.falconTube,u=N.render.scene.earth,h=u.trails,d=c.position.clone(),f=a.position.clone(),g=l.position.clone();this.storage=N.render.scene.falconStorage,this.storageSats=N.render.scene.falconStorageSats,this.storageM4=[];for(let m=0;m<5;m++)this.storage.getMatrixAt(m,di),this.storageM4.push(di.clone());this.storageSats.forEach(m=>{m._baseM4=[];for(let p=0;p<m.count;p++)m.getMatrixAt(p,di),m._baseM4.push(di.clone())}),this.scalableSats=N.render.scene.scalableSats,this.scalableSatsM4=[];for(let m=0;m<this.scalableSats.count;m++)this.scalableSats.getMatrixAt(m,di),this.scalableSatsM4.push(di.clone());this._storageExplode=1,this.storageExplode=1,this._storageSatsExplode=1,this.storageSatsExplode=1;const _=s.mesh.position.clone();e.addLabel("start",0),e.addLabel("map",4.5),e.addLabel("design",6.5),e.addLabel("launch",8.25),e.addLabel("deployed",10),e.addLabel("spaceops",11),e.addLabel("encryption",14),e.addLabel("modular",16),e.addLabel("price",19),e.fromTo(t,{progress:0},{progress:1,duration:1.5,ease:"power2.inOut"},"start"),e.to(t,{progress:2,duration:1.25,ease:"power3.inOut"},"start+=1.5"),e.to(t,{progress:3,duration:.5,ease:o},"start+=2.75"),e.to(t,{progress:4,duration:1,ease:"power3.inOut"},"map-=1.25"),e.to(t,{progress:5,duration:1,ease:"power3.in"},"map-=0.25"),e.fromTo(t,{lerpIntensity:1},{lerpIntensity:0,duration:1e-5,ease:"power2.inOut"},"map+=1"),e.to(t,{progress:6,duration:.1},"map+=1.2"),e.to(t,{progress:7,duration:1.2,ease:"power2.out"},"design-=.7"),e.to([N.render.scene.earth.targetRotation,N.render.scene.sky.rotation],{y:3,duration:0,ease:"power3.inOut"},"design"),e.to(t,{lerpIntensity:1,duration:.001},"design+=1"),e.to(t,{progress:8,duration:.399,ease:o},"launch+=.1"),e.to(t,{progress:9,duration:.001,ease:o},"launch+=.499"),e.to(t,{progress:10,duration:.7,ease:o},"launch+=.5"),e.to(t,{progress:11,duration:.45,ease:"power3.inOut"},"launch+=1.2"),e.to(N.render.scene.earth.targetRotation,{y:.4,duration:.8,ease:"power3.inOut"},"spaceops-=1"),e.to(t,{progress:12,duration:.8,ease:o},"spaceops-=1.1"),e.to(t,{progress:13,duration:1,ease:o},"spaceops"),e.to(t,{progress:14,duration:1.2,ease:o},"spaceops+=1"),e.to(t,{progress:15,duration:.8,ease:o},"spaceops+=2.2"),e.to(t,{progress:16,duration:1,ease:o},"encryption"),e.to(t,{progress:17,duration:1,ease:o},"encryption+=1"),e.to(N.render.scene.earth.targetRotation,{y:-2,duration:1,ease:"power3.inOut"},"encryption+=1"),e.to(t,{progress:18,duration:1,ease:o},"modular"),e.to(t,{progress:19,duration:1,ease:o},"modular+=1"),e.to(t,{progress:20,duration:1,ease:o},"modular+=2"),e.to(t,{progress:21,duration:.5,ease:"power3.inOut"},"price"),e.to(t,{progress:22,duration:1,ease:o},"price+=0.5"),e.to(t,{progress:23,duration:.5,ease:o},"price+=1.5"),e.to(t,{progress:24,duration:2,ease:o},"price+=2"),e.to(F.uTrailsOpacity,{value:1,duration:.2,ease:o},"start+=1"),e.to(F.uFirstTrailsOpacity,{value:1,duration:.2,ease:o},"start+=1"),e.to(F.uGlobalTrailCount,{value:1,duration:2,ease:"power2.inOut"},"start+=1.6"),e.to(F.uFirstTrailsOpacity,{value:0,duration:2,ease:o},"start+=1.6"),e.to(F.uEarthBluriness,{value:0,duration:1,ease:o},"start+=2"),e.fromTo(h,{visible:!1},{visible:!0,duration:.1,ease:o},"start+=1"),e.fromTo(s,{visible:!0},{visible:!1,duration:.1,ease:o},"start+=2"),e.to(F.uGenSatVisible,{value:0,duration:.5,ease:o},"start+=2"),e.to(F.uAtmosphereBeam,{value:0,duration:1,ease:o},"start+=2"),e.fromTo(N.render.scene,{satPoint123:0},{satPoint123:1,duration:.1},"start+=3"),e.to(F.uGenPayloadVisible,{value:0,duration:.1,ease:"power2.inOut"},"start+=3"),e.fromTo(N.render.scene.earth.targetRotation,{y:-1.9},{y:0,duration:.5,ease:"power2.inOut"},"start+=2.75"),e.to(F.uTrailsOpacity,{value:0,duration:.5,ease:o},"start+=3"),e.to(F.uEarthSpatializedSaturation,{value:1,duration:.5,ease:o},"start+=3"),e.to(F.uGenSatDarken,{value:0,duration:.5,ease:o},"map-=0.5"),e.to(F.uEarthAlbedo,{value:1,duration:.6,ease:o},"map-=0.5"),e.fromTo(F.uCloudTime,{value:.04},{value:0,duration:1.1,ease:"sine.out"},"map-=0.5"),e.to(N.render.scene.earth.targetRotation,{x:.7,y:.5,duration:.5,ease:"power3.inOut"},"map+=.3"),e.to(F.uEarthOpacity,{value:0,duration:.1,ease:"power2.inOut"},"map+=.75"),e.to(F.uEarthBluriness,{value:1,duration:1,ease:o},"map+=.25"),e.to(F.uSkyOpacity,{value:0,duration:1,ease:"power2.inOut"},"map+=.25"),e.to(h,{visible:!1,duration:.1,ease:o},"map+=.25"),e.fromTo(F.uCaptationOpacity,{value:0},{value:1,duration:.02,ease:"power2.out"},"map+=.74"),e.fromTo(F.uCaptationZoom,{value:0},{value:1,duration:.5,ease:"power3.out"},"map+=.74"),e.fromTo(N.render.scene.earth.atmosphere.material,{depthTest:!0},{depthTest:!1,duration:.01,ease:o},"map+=1.5"),e.to(F.uEarthAlbedo,{value:0,duration:.1,ease:o},"map+=1.5"),e.to(N.render.scene.earth.targetRotation,{x:0,duration:.1,ease:"power2.inOut"},"map+=1.5"),e.to(F.uCoreBuild,{value:0,duration:.1},"map+=1.5"),e.to(F.uCaptationOpacity,{value:0,duration:.6,ease:"power2.inOut"},"design-=.7"),e.to(s,{visible:!0,duration:.1,ease:"power2.inOut"},"design-=.5"),e.to(F.uGenPayloadVisible,{value:1,duration:.3,ease:"power2.inOut"},"design-=0.3"),e.to(F.uDrawSatVisible,{value:1,duration:.8,ease:o},"design-=0.3"),e.to(F.uGridOpacity,{value:.5,duration:.4,ease:"power2.inOut"},"design"),e.to(F.uCaptationDecay.value,{x:1,duration:.3,ease:"power2.in"},"design"),e.to(N.render.camera,{parallaxIntensity:.4,duration:.3,ease:"power2.inOut"},"design"),e.to(N.render.scene,{satParallaxIntensity:0,duration:.3,ease:"power2.inOut"},"design"),e.fromTo(F.uGridDecay.value,{x:-.4},{x:0,duration:.2,ease:"power2.out"},"design+=.1"),e.to(F.uGridDecay.value,{x:.4,duration:.2,ease:"power2.inOut"},"design+=.5"),e.to(F.uGridDecay.value,{x:.8,duration:.2,ease:"power2.inOut"},"design+=1.4"),e.to(N.render.scene.drawSat.position,{x:-.7,duration:.2,ease:"power2.inOut"},"design+=1.4"),e.to(F.uGridDecay.value,{x:1.2,duration:.4,ease:"power2.in"},"launch+=.1"),e.to(F.uGridDecay.value,{x:1.6,duration:.4,ease:"power2.in"},"launch+=.3"),e.to(F.uDrawSatVisible,{value:0,duration:.2,ease:o},"design+=1.4"),e.to(F.uTaceOpacity,{value:1,duration:.5,ease:o},"design-=.2"),e.fromTo(F.uTaceFullOpacity,{value:1},{value:0,duration:.2,ease:o},"design+=0.45"),e.to(F.uGenSatVisible,{value:1,duration:.2,ease:o},"design+=0.5"),e.to(F.uCoreBuild,{value:1,duration:.5,ease:"none"},"design+=0.5"),e.to(F.uGridOpacity,{value:1,duration:.2,ease:"power2.inOut"},"design+=1.2"),e.fromTo(u,{visible:!0},{visible:!1,duration:.1},"map+=1"),e.to(s.mesh.position,{y:_.y,ease:"power2.inOut",duration:.1},"design-=1"),e.to(s.mesh.rotation,{z:0,ease:"power2.inOut",duration:.1},"design-=1.5"),e.fromTo(s,{build:1},{build:0,duration:.1},"map"),e.fromTo(N.render.scene.captation,{visible:!1},{visible:!0,duration:.1},"map"),e.to(s.mesh.scale,{x:2,y:2,z:2,ease:"power2.inOut",duration:.5},"map"),e.to(N.render.scene.captation,{visible:!1,duration:.1},"map+=3"),e.to(s,{build:1,duration:1.3,ease:"none"},"design+=0.6"),e.to(s,{deployed:0,ease:"power2.inOut",duration:.2},"design+=1.2"),e.to(s,{payloadDeployed:0,ease:"power2.inOut",duration:.4},"design+=1.2"),e.to(F.uTaceOpacity,{value:0,duration:.15,ease:"none"},"design+=1.45"),e.to(s,{deployed:1,ease:"power2.inOut",duration:.5},"design+=1.6"),e.to(s,{payloadDeployed:1,ease:"power2.inOut",duration:.5},"design+=1.6"),e.fromTo(n,{visible:!1},{visible:!0,duration:.01,ease:"power2.inOut"},"launch-=1.1"),e.to(N.render.camera,{parallaxIntensity:1,duration:.3,ease:"power2.inOut"},"launch"),e.to(N.render.scene,{satParallaxIntensity:1,duration:.3,ease:"power2.inOut"},"launch"),e.to(F.uFStorageAppear,{value:1,duration:.4,ease:"power2.inOut"},"launch"),e.to(F.uGridOpacity,{value:0,duration:.2,ease:"power2.inOut"},"launch+=.2"),e.to(F.uFFuselageAppear,{value:1,duration:.5,ease:"power2.inOut"},"launch+=0.1"),e.fromTo(this,{storageExplode:1},{storageExplode:0,duration:.6,ease:"power.out"},"launch-=0.1"),e.fromTo(this,{storageSatsExplode:1},{storageSatsExplode:0,duration:.35,ease:"power.out"},"launch+=.15"),e.to(s.mesh.rotation,{z:-Math.PI*.5,ease:"power2.inOut",duration:.3},"launch"),e.fromTo(c.position,{y:-14.243},{y:d.y,ease:"power3.inOut",duration:.4},"launch"),e.fromTo(a.position,{z:f.z+1},{z:f.z,ease:"power3.inOut",duration:.2},"launch+=0.3"),e.fromTo(l.position,{z:g.z-1},{z:g.z,ease:"power3.inOut",duration:.2},"launch+=0.3"),e.to(N.render.scene,{satDockedTarget:1,duration:.2,ease:"power2.inOut"},"launch+=0.2"),e.to(u,{visible:!0,duration:.1},"launch"),e.fromTo(N.render.scene.fTrails,{visible:!1},{visible:!0,duration:.1,ease:o},"launch+=0.4"),e.to(F.uGenSatVisible,{value:1,duration:.5,ease:o},"launch"),e.to(F.uGenSatFront,{value:0,duration:.1,ease:"power2.inOut"},"launch+=0.4"),e.to(F.uFTrailsOpacity,{value:1,duration:.2,ease:"power2.inOut"},"launch+=0.5"),e.to(F.uSkyOpacity,{value:1,duration:.5,ease:"power2.inOut"},"launch+=1"),e.to(i,{y:8,duration:.715,ease:o},"launch+=0.5"),e.fromTo(N.render.scene,{falconWiggle:0},{falconWiggle:1,duration:.2,ease:"power2.inOut"},"launch+=0.5"),e.to(N.render.scene,{falconWiggle:0,duration:.4,ease:"power2.inOut"},"launch+=1"),e.to(n.rotation,{y:-Math.PI*1.7,duration:1.2,ease:"power2.inOut"},"launch+=0.5"),e.to(n.scale,{x:.5,y:.5,z:.5,duration:1.2,ease:"power1.inOut"},"launch+=0.5"),e.to(a.rotation,{x:Math.PI*.4,z:-Math.PI*.3,y:-Math.PI*.4,ease:"power2.out",duration:1.5},"launch+=1.2"),e.to(a.position,{z:4,ease:"power2.out",duration:1.5},"launch+=1.2"),e.to(l.rotation,{x:-Math.PI*.2,z:Math.PI*.2,ease:"power2.out",duration:1.5},"launch+=1.2"),e.to(l.position,{z:-3.5,ease:"power2.out",duration:1.5},"launch+=1.2"),e.to(s,{visible:!0,duration:.1},"deployed-=0.5"),e.to(F.uGenSatFront,{value:1,duration:.1,ease:"power2.inOut"},"deployed-=0.5"),e.to(F.uEarthOpacity,{value:1,duration:.3,ease:"power2.inOut"},"deployed-=0.6"),e.to(F.uEarthBluriness,{value:0,duration:.2,ease:o},"deployed-=0.8"),e.to(N.render.scene,{satPoint123:2,duration:.01},"launch+=1.2"),e.to(N.render.scene,{satDockedTarget:0,duration:.38,ease:"power2.inOut"},"launch+=1.24"),e.to(s.mesh.position,{x:_.x,ease:"power2.inOut",duration:.1},"deployed-=0.5"),e.to(s.mesh.rotation,{z:-Math.PI,ease:"power2.inOut",duration:.3},"deployed-=0.6"),e.to(s,{deployed:0,ease:"power3.inOut",duration:.3},"deployed-=0.45"),e.to(s,{payloadDeployed:0,ease:"power2.inOut",duration:.35},"deployed-=0.45"),e.to(F.uFFuselageAppear,{value:0,duration:.3,ease:"power2.inOut"},"deployed-=.5"),e.to(F.uFStorageAppear,{value:0,duration:.3,ease:"power2.inOut"},"deployed-=.5"),e.to(F.uFTrailsOpacity,{value:0,duration:.2,ease:"power2.inOut"},"deployed-=.6"),e.to(F.uAntenaPulse,{value:1,duration:.5,ease:o},"deployed-=0.2"),e.to(N.render.scene.fTrails,{visible:!1,duration:.1},"deployed-=0.4"),e.to(n,{visible:!1,duration:.1,ease:"power2.inOut"},"deployed+=1"),e.fromTo(N.render.scene.spaceopsEarth,{visible:!1},{visible:!0,duration:.1},"spaceops-=1"),e.fromTo(N.render,{dashboardRenderEnabled:!1},{dashboardRenderEnabled:!0,duration:.1},"spaceops-=1"),e.to(F.uFrameBorders,{value:1,duration:1,ease:"power3.inOut"},"spaceops"),e.to(F.uEarthSaturation,{value:1,duration:.3,ease:"power3.inOut"},"spaceops+=0.1"),e.to(F.uEarthSpatializedSaturation,{value:0,duration:.3,ease:o},"spaceops+=0.1"),e.fromTo(N.render.scene.spaceops,{progress:0},{progress:1,duration:4,ease:"none"},"spaceops-=0.5"),e.fromTo(F.uSpaceopsEarthOpacity,{value:1},{value:0,duration:.1},"encryption+=0.1"),e.to(F.uFrameBorders,{value:0,duration:1,ease:"power3.inOut"},"encryption"),e.to(F.uAntenaPulse,{value:0,duration:.3,ease:"power3.inOut"},"encryption"),e.to(N.render,{dashboardRenderEnabled:!1,duration:.1},"encryption+=.5"),e.to(N.render.scene.spaceopsEarth,{visible:!1,duration:.1},"encryption+=.5"),e.to(F.uEarthLetterOpacity,{value:1,duration:1.2,ease:o},"encryption"),e.to(s.mesh.rotation,{x:ws*.3,y:-ws*.2,z:ws*1.1,ease:"power2.inOut",duration:.1},"encryption"),e.to(F.uEarthLetterOpacity,{value:0,duration:.5,ease:o},"encryption+=1.2"),e.to(h,{visible:!0,duration:.1},"modular"),e.to(F.uTrailsOpacity,{value:1,duration:.5,ease:o},"modular+=.1"),e.to(F.uGenericClip,{value:0,duration:.1,ease:o},"modular-=.8"),e.fromTo(this.scalableSats,{visible:!1},{visible:!0,duration:.01,ease:o,onUpdate:()=>{N.render.scene.payloadsMin[N.render.scene.selectedPayloadKey].visible=this.scalableSats.visible}},"modular-=.8"),e.fromTo(this,{scalableSatsPlace:0},{scalableSatsPlace:1,duration:1.8,ease:"power3.out"},"modular-=.7"),e.to(this.scalableSats,{visible:!1,duration:.1,ease:o,onUpdate:()=>{N.render.scene.payloadsMin[N.render.scene.selectedPayloadKey].visible=this.scalableSats.visible}},"modular+=.8"),e.to(s.mesh.rotation,{x:ws*.2,y:-ws*.25,z:ws*1.1,ease:"power2.inOut",duration:1},"modular"),e.fromTo(N.render.scene.cables,{visible:!1},{visible:!0,duration:.01},"modular"),e.to(F.uAntenaPulse,{value:1,duration:.3,ease:"power3.inOut"},"modular+=0.3"),e.to(F.uAntenaPulse,{value:0,duration:.5,ease:"power3.inOut"},"modular+=1.5"),e.to(F.uGenPayloadVisible,{value:0,duration:.5,ease:"power2.inOut"},"modular+=1"),e.to(F.uInternalView,{value:1,duration:.5,ease:"power2.inOut"},"modular+=1"),e.to(F.uInternalModules,{value:1,duration:.8,ease:"power2.inOut"},"modular+=1.2"),e.to(F.uInternalWires,{value:1,duration:.6,ease:"power2.inOut"},"modular+=2"),e.to(F.uGenPayloadVisible,{value:1,duration:.3,ease:"power2.inOut"},"modular+=3"),e.to(F.uInternalModules,{value:0,duration:.5,ease:"power2.inOut"},"modular+=2.3"),e.to(F.uInternalWires,{value:0,duration:.3,ease:"power2.inOut"},"modular+=3"),e.to(F.uInternalView,{value:0,duration:.5,ease:"power2.inOut"},"modular+=3"),e.to(s,{visible:!1,duration:.1,ease:"power2.inOut"},"price+=0.2"),e.to(F.uGlobalTrailCount,{value:0,duration:.2,ease:"power2.inOut"},"price+=1"),e.to(F.uGlobalTrailCount,{value:1,duration:.8,ease:"power2.inOut"},"price+=1.2"),e.fromTo(F.uFadeToBlack,{value:0},{value:1,duration:.4,ease:"power2.out"},N.frame.count-2),e.fromTo(N.scroller,{snapEnabled:!0},{snapEnabled:!1,duration:.1},N.frame.count-1),e.add(()=>{},N.frame.count)}get progress(){return this._progress}set progress(e){this._progress=Math.max(Math.min(N.frame.count,e)),this.timeline.seek(this._progress)}get storageExplode(){return this._storageExplode}set storageExplode(e){this._storageExplode=e,Ci=nr(e,0,1),this.storageM4.forEach((t,n)=>{t.decompose(dn,$r,As),dn.y=(dn.y+.75)*(1+nr(Ci,.2-Math.abs(dn.y+.75)*.1,1)*4)-.75,$r.rotateTowards(cg,nr(Ci,.2,1)*2*Math.sign(n%2-.5)),di.compose(dn,$r,As),this.storage.setMatrixAt(n,di)}),this.storage.instanceMatrix.needsUpdate=!0}get storageSatsExplode(){return this._storageSatsExplode}set storageSatsExplode(e){this._storageSatsExplode=e,this.storageSats.forEach(t=>{t._baseM4.forEach((n,i)=>{Ci=nr(e,i/t.count*.5,i/t.count*.5+.3)**2,n.decompose(dn,$r,As),dn.x*=1+Ci*4,dn.z*=1+Ci*4,di.compose(dn,$r,As),t.setMatrixAt(i,di),lg.setScalar(1-Math.sqrt(Ci)),t.setColorAt(i,lg)}),t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0})}get scalableSatsPlace(){return this._scalableSatsPlace}set scalableSatsPlace(e){this._scalableSatsPlace=e,this.scalableSatsM4.forEach((t,n)=>{t.decompose(dn,$r,As),Ci=nr(e,n/10*.5,n/10*.5+.5),xh=Math.atan2(dn.y,dn.x)-(1-Ci)*Math.sign(dn.x)*.3,yh=Math.sqrt(dn.y**2+dn.x**2)*(.8+Ci*.2),As.multiplyScalar(Ci),dn.x=Math.cos(xh)*yh,dn.y=Math.sin(xh)*yh,$r.rotateTowards(cg,-(1-Ci)*ws*.1),di.compose(dn,$r,As),this.scalableSats.setMatrixAt(n,di),N.render.scene.payloadsMin[N.render.scene.selectedPayloadKey]?.setMatrixAt(n,di)}),this.scalableSats.instanceMatrix.needsUpdate=!0,N.render.scene.payloadsMin[N.render.scene.selectedPayloadKey]&&(N.render.scene.payloadsMin[N.render.scene.selectedPayloadKey].instanceMatrix.needsUpdate=!0)}}const ug=12;let Rs,_n,Ca;const hg=(r,e,t)=>r*(1-t)+e*t;function qA(r){return 1-(1-r)**5}class YA extends Rn{constructor(){super(ug,N.getPlugin("viewport")?.size.aspect||1,1,200),N.bind(this),this.position.z=15,this.parallaxIntensity=1,this.lerpIntensity=1,this.mouse=new Xe,this.target=new Vc,this.base=new Vc,this.refsDk=[],this.refsMb=[],this.progress=0}onViewportResize({aspect:e}){this.aspect=e,this.fov=ug/(Math.min(1,e*1.5)*Math.max(1,e/1.77)),this.updateProjectionMatrix()}get refs(){return N.viewport?.breakpoint==="mobile"||N.viewport?.breakpoint==="tablet"?this.refsMb:this.refsDk}register(e){e.traverse(t=>{t instanceof Rn&&(t.name.indexOf("mobile")!==-1?this.refsMb.push(t):this.refsDk.push(t))}),this.refsDk.sort((t,n)=>parseInt(t.name.split("-").pop())-parseInt(n.name.split("-").pop())),this.refsMb.sort((t,n)=>parseInt(t.name.split("-")[1])-parseInt(n.name.split("-")[1])),this.position.copy(this.refs[0].position),this.quaternion.copy(this.refs[0].quaternion),this.target.position.copy(this.refs[0].position),this.target.quaternion.copy(this.refs[0].quaternion),this.base.position.copy(this.refs[0].position),this.base.quaternion.copy(this.refs[0].quaternion)}onTickerUpdate=({et:e,dt:t})=>{this.refs.length>0&&(Rs=this.progress,_n=Math.floor(Rs),this.mouse.lerp(N.pointer.normalized,t*.2),N.debug?.monitor.info("Camera p",`${this.progress.toFixed(2)} | ${_n.toFixed(0)} -> ${(_n+1).toFixed(0)} | ${this.refs[_n+1].name} | ${this.lerpIntensity.toFixed(2)} | ${this.refs[_n].userData.userPower2Rotation}`),this.target.position.lerpVectors(this.refs[_n].position,this.refs[_n+1].position,Rs-_n),Ca=Rs-_n,this.refs[_n].userData.userPower2Rotation?Ca=(Rs-_n)**2:this.refs[_n].userData.userSqrtRotation?Ca=Math.sqrt(Rs-_n):this.refs[_n].userData.userExpoOutRotation&&(Ca=qA(Rs-_n)),this.target.quaternion.slerpQuaternions(this.refs[_n].quaternion,this.refs[_n+1].quaternion,Ca),this.base.position.lerp(this.target.position,hg(1,t*10,this.lerpIntensity)),this.base.quaternion.slerp(this.target.quaternion,hg(1,t*10,this.lerpIntensity)),this.position.copy(this.base.position),this.quaternion.copy(this.base.quaternion),this.translateX(this.mouse.x*.001*this.parallaxIntensity),this.translateY(this.mouse.y*.001*this.parallaxIntensity),this.translateZ(N.viewport.breakpoint==="mobile"||N.viewport.breakpoint==="tablet"?2:0))}}function $A(r,e,t){const n=r.getPlugin("debug");if(!n)return;const i=new Set;e.traverseVisible(a=>{a instanceof Yt&&a.material.name&&i.add(a.material)});const s=Array.from(i).sort((a,l)=>a.name.toLowerCase()<l.name.toLowerCase()?-1:1);let o=0;for(const a of s.values()){const l=jA(a);l&&n.add(a,l,"Materials",a.name,o++)}}function jA(r){if(r instanceof Ml)return"MeshStandardMaterial";if(r instanceof Ti)return"MeshPhysicalMaterial";if(r instanceof Rr)return"MeshBasicMaterial";if(r instanceof mt)return"ShaderMaterial";Tr.warn("No matching controller for material",r,"Debug")}const KA={Default:{color:"#000000",roughness:.3913,metalness:.337},Grid:{},Captation:{},FStorage:{color:"#919191",metalness:1,roughness:.3477,intensity:4.6723},SecondaryFrame:{},Fuselage:{roughness:.3261,color:"#858585",metalness:.4783,intensity:.9783},F9Storage:{color:"#1f1f1f",roughness:.25,metalness:.6522},Sat:{color:"#e2e2e2",roughness:.1304,metalness:.8261,intensity:.2174},FTrails:{},Trace:{},AntenaPulse:{},Draw:{},FStorageSats:{roughness:0,metalness:.5515},Generic:{}},ZA={materials:KA};let JA=Object.values([ZA])?.[0]||{};const QA=JA;let Eo,wo,Sr=null;const dg=()=>{if(Sr!==null)return;Sr=document.createElement("canvas"),Sr.width=Sr.height=256;const r=Sr.getContext("2d"),e=r.getImageData(0,0,Sr.width,Sr.height);e.data.forEach((t,n)=>{e.data[n]=Math.round(Math.random()*255)}),r.putImageData(e,0,0)},Kt={get texture(){return Eo||(dg(),Eo=new Xc(Sr),Eo.wrapS=this.texture.wrapT=on,Eo.minFilter=mn,Eo.magFilter=mn),Eo},get nearestTexture(){return wo||(dg(),wo=new Xc(Sr),wo.wrapS=this.texture.wrapT=on,wo.minFilter=yn,wo.magFilter=yn),wo}};let eR=0;function Ge(r,e,t){const n=()=>{};return{c:++eR,shader:r,use:s=>{const o=s.material||s;return o[e]=r,o.needsUpdate=!0,s},unuse:n,clear:n}}const tR=`precision highp float;

uniform sampler2D uNoise;
uniform vec3 uPayloadOrigin, uMainSatPosition;
uniform float uVisible, uPayloadSize, uGenSatVisible, uGenericBuild, uOpacity, uInternalView, uGenericClip;

#ifdef IS_FOV
	uniform float uTime, uPayloadFOVOpacity;
#endif

#ifdef IS_BLUEPRINT
	uniform sampler2D uLinearNoise;
#endif

varying vec2 vUv;
varying vec3 vNormal, vPosition, vObjectPosition, vWorldPosition;

#ifdef USE_CORE_BUILD
    varying float vCoreOpacity;
#endif

void main() {
	float genericBuild = uGenericBuild;
	float dtc = length(vPosition - uMainSatPosition) / uPayloadSize;

	float buildVal = 1.;
		
		
		
		
	float build = smoothstep(genericBuild, genericBuild - .1, buildVal * .9);

	vec2 lUv = vUv;

	gl_FragColor = vec4(
		normalize(vNormal) +
		vPosition * 0.2 +
		((fract(lUv.x * 20.) + fract(lUv.y * 20.)) * .1 +
		(fract(lUv.x * 60.) + fract(lUv.y * 60.)) * .06) * smoothstep(.8, 1., uOpacity)
		, .95)
		* uVisible
			* (1. + smoothstep(.5, 0.4, abs(build - .5))
	);

	vec3 addNoise = texture2D(uNoise, vUv * .03).rgb;
	gl_FragColor.rgb += smoothstep(.1, 0., length(fract(vUv * 120.) - .5)) * smoothstep(.7, .8, addNoise.r) * .5;
	gl_FragColor.rgb += smoothstep(.1, 0., length(fract(vUv.x * 120.) - .5)) * smoothstep(.3, .2, addNoise.r) * .2;
	gl_FragColor.rgb += smoothstep(.5, .8, addNoise) * .3;

	gl_FragColor.rg += sin(vPosition.xy * 8.);
	gl_FragColor *= mix(1., smoothstep(.6, .5, length(vWorldPosition.y - uMainSatPosition.y)), uGenericClip);

	gl_FragColor *= uOpacity * (1. - uInternalView * .3);

	#ifdef USE_CORE_BUILD
		gl_FragColor *=  vCoreOpacity;
	#endif

}`,nR=Ge(tR,"fragmentShader"),iR=`varying vec2 vUv;
varying vec3 vNormal, vPosition, vObjectPosition, vWorldPosition;

#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif

#define PI2 6.28318530718
#define PI 3.1415926536

#ifdef USE_CORE_BUILD
    uniform float uCoreBuild;
    varying float vCoreOpacity;
#endif

float pow2(float x) {return x * x;}

void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vObjectPosition = position;
    
    vec3 transformed = position;
    #ifdef USE_CORE_BUILD
        float py = floor(vUv.y) - .5;
        float px = floor(vUv.x);
        float fadeY = py * pow2(smoothstep(.5, 0., uCoreBuild - abs(py) * .1));
        float fadeX = px * pow2(smoothstep(1., 0.5, uCoreBuild * 1.5 - abs(px) * .1));
        transformed.y += .4 * fadeY;
        transformed.z -= .4 * fadeX;

        vCoreOpacity = max(0., 1. - pow2(fadeX));
    #endif

    #ifdef USE_MORPHTARGETS
		transformed *= morphTargetBaseInfluence;
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#endif

    vec4 mvPosition = vec4(transformed, 1.);
	vWorldPosition = vec3(modelMatrix * mvPosition);
    
	#ifdef USE_INSTANCING
		#define SIXTY_INSTANCING_START_AREA
		vWorldPosition = vec3(modelMatrix * instanceMatrix * vec4(position, 1.));
        vObjectPosition = vec3(instanceMatrix * vec4(position, 1.));

        vPosition = vec3(modelMatrix * instanceMatrix * vec4(position, 1.));
		mvPosition = instanceMatrix * mvPosition;
    #else 
        vPosition = vec3(modelMatrix * vec4(position, 1.));
	#endif

    gl_Position = projectionMatrix * modelViewMatrix * mvPosition;
}`,rR=Ge(iR,"vertexShader");let su=class extends mt{constructor(e,t){super({uniforms:{uVisible:F.uGenSatVisible,uBuild:{value:1},uOpacity:{value:1},uMainSatPosition:F.uMainSatPosition,uGenericBuild:F.uGenericBuild,uInternalView:F.uInternalView,uGenericClip:F.uGenericClip,uPayloadSize:{value:2},uNoise:{value:Kt.nearestTexture}},transparent:!0,forceSinglePass:!0,side:2}),this.isGenericMaterial=!0,nR.use(this),rR.use(this)}useBlueprint(){this.defines.IS_BLUEPRINT=1,this.uniforms.uLinearNoise={value:Kt.texture},this.depthWrite=!1,this.depthTest=!1,this.blending=ji}useCoreBuild(){this.defines.USE_CORE_BUILD=1,this.uniforms.uCoreBuild=F.uCoreBuild}};const sR=`precision highp float;

uniform sampler2D tNearestNoise, uSolidNoise, uMap, uZoomedMap, uParabolesMap, uCityMap, uPerlin;
uniform vec3 uColor;
uniform vec2 uResolution, uCaptationDecay, uMouse;
uniform float uTime, uCaptationOpacity, uMix, uAspect, uCaptationZoom, uUseZoomedMap, uUseParabolesMap, uUseCityMap, uMapZoom;

varying vec2 vUv;

struct Config {
	float trueColor;
	float red;
	float green;
	float zoomed;
	float termal;
	float sobel;
	float saturation;
	float luminosity;
	float bias;
	float clouds;
};

uniform Config uConf1;
uniform Config uConf2;

#define PI 3.14159265

float sGrid(vec2 uv, float size) {
	return
		smoothstep(.5 - size, .5, abs(fract(uv.x * 10.) - .5)) +
		smoothstep(.5 - size, .5, abs(fract(uv.y * 10.) - .5));
}

float avg(vec3 v) {return (v.x + v.y + v.z) / 3.; }

vec3 hueShift(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

vec3 adjustSaturation(vec3 color, float saturation) {
	return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

vec3 applyConfig(vec3 map, Config conf) {
	vec3 color = map;

	color = mix(color, hueShift(vec3(1., 0., 0.), smoothstep(.0, 0.5, abs(.5 - avg(map))) * 5.), conf.termal);
	color = mix(color, vec3(length(map.gb) * (1. - map.r) * 4., (1. - map.r) * .3, map.g * .4), conf.red);
	color = mix(color, vec3(map.g * .2 + map.r / (map.b + .1) * .2, abs(.5 - avg(map)) * 2., (1. - map.r) * .5 - map.r * 2.), conf.green);
	color = mix(color, (dFdx(color) + dFdy(color)) * 10., conf.sobel);
	color = adjustSaturation(color, conf.saturation);
	color *= conf.luminosity;

	return color;
}

void main() {
	vec3 color = vec3(0.);
	float configMix = smoothstep(uMix, uMix - .2, texture2D(tNearestNoise, vUv * .12 * vec2(uAspect, 1.)).r * texture2D(tNearestNoise, vUv * .02 * vec2(uAspect, 1.)).r * .8);
	vec2 dUv = (vUv - .5 + uMouse * .04) * vec2(uAspect, 1.) / max(1., uAspect) + .5;
	vec2 aUv = dUv;
	dUv.y += smoothstep(.5, 0., abs(.5 - configMix)) * .3;

	

	dUv += uCaptationDecay * .1;

	float mapZoom = uConf1.zoomed * (1. - configMix) + uConf2.zoomed * configMix;
	float bias = mix(uConf1.bias, uConf2.bias, configMix);
	float confClouds = mix(uConf1.clouds, uConf2.clouds, configMix);

	vec3 noiseMap = texture2D(tNearestNoise, dUv * .6 - uTime * .005).rgb * texture2D(tNearestNoise, dUv * .3 + uTime * .005).rgb;
	vec3 map = texture2D(uMap, (dUv - .5) * (1.3 - uCaptationZoom * .3 - (1. - uMapZoom) * 1.) + .5 + mapZoom, bias).rgb;

	vec2 zUv = (dUv - .5) * (.8 + uMapZoom) * vec2(1., 2.) + .5;

	vec3 zoomed = texture2D(uZoomedMap, zUv).rgb;
	vec2 pUv = zUv - vec2(0.1, .2) * smoothstep(1., .8, uAspect);
	vec3 paraboles = texture2D(uParabolesMap, pUv).rgb;
	paraboles = mix(vec3(paraboles.r), texture2D(uParabolesMap, pUv + (noiseMap.rg - .5) * .005).rrr + noiseMap.b * vec3(.0, .4, 1.) * .3, paraboles.g);

	vec3 city = texture2D(uCityMap, zUv).rgb;

	map = mix(map, zoomed, uUseZoomedMap);
	map = mix(map, paraboles, uUseParabolesMap);
	map = mix(map, city, uUseCityMap);
	

	vec3 conf1 = vec3(0.);
	vec3 conf2 = vec3(0.);

	if(configMix < .99) conf1 = applyConfig(map, uConf1);
	if(configMix > .01) conf2 = applyConfig(map, uConf2);

	color += mix(conf1, conf2, configMix);

	vec2 gUv = (vUv - .5) * (1.8 - uCaptationZoom * .85) + .5 + uMouse * vec2(.06, .12);
	gUv.x *= uAspect;
	float grid = sGrid(gUv, .01) * .1 + sGrid(gUv * 4., .04) * .1 + sGrid(gUv * 8., .06) * .1;
	color += grid * .4;
	color *= smoothstep(.7, .4, length(vUv - .5));

	float cloudZoom = sqrt(uCaptationZoom * 1.2 - confClouds * .5 + (1. - uMapZoom) * .5);
	aUv += uMouse * vec2(.06, .12);
	float perlin = texture2D(uPerlin, (aUv - .5) * (3. - cloudZoom * 2.9) * .1 - .5 + uTime * .001).r * texture2D(uPerlin, (aUv - .5) * (3. - cloudZoom * 2.9) * .6 + .5 - uTime * .001).r * texture2D(uPerlin, (-aUv + .5) * 2. * (2. - cloudZoom * 1.9) + uTime * .002).r;
	color *= uCaptationZoom;

	color = mix(color, vec3(.9, .92, 1.) * .8 * (perlin * .7 + .5), (smoothstep(1., .2, uCaptationZoom) * smoothstep(0., uCaptationZoom, perlin)) * (smoothstep(.7, 0.3, length(vUv - .5 * (perlin + .6)) * smoothstep(1., 0., uCaptationZoom)) * .5 + .5));
	color = mix(color, vec3(.7) * (perlin * .7 + .5),  smoothstep(.2, .6,  perlin * confClouds));

	float alpha = uCaptationOpacity;

	gl_FragColor = vec4(color, alpha);
}`,oR=Ge(sR,"fragmentShader"),aR=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(vec2(vUv.x, vUv.y) * 2. - 1., 1., 1.);
}`,lR=Ge(aR,"vertexShader");class z_ extends mt{constructor(){const e=N.assets.get("textures","trueColor"),t=N.assets.get("textures","zoomed"),n=N.assets.get("textures","paraboles"),i=N.assets.get("textures","city");super({uniforms:{uMap:{value:e},uZoomedMap:{value:t},uParabolesMap:{value:n},uCityMap:{value:i},uMapZoom:{value:1},uUseZoomedMap:{value:0},uUseParabolesMap:{value:0},uUseCityMap:{value:0},uMix:{value:0},uConf1:{value:zd.default.config},uConf2:{value:zd.default.config},tNearestNoise:{value:Kt.nearestTexture},uTime:F.uTime,uMouse:F.uMouse,uCaptationGridOpacity:F.uCaptationGridOpacity,uCaptationCloudsOpacity:F.uCaptationCloudsOpacity,uCaptationZoom:F.uCaptationZoom,uResolution:Fi.uResolution,uAspect:Fi.uAspect,uPerlin:{value:N.assets.get("textures","perlin")},uCaptationOpacity:F.uCaptationOpacity,uCaptationDecay:F.uCaptationDecay},transparent:!0,depthTest:!1,side:2}),oR.use(this),lR.use(this)}}const cR=`precision highp float;

uniform sampler2D uMap;
varying vec2 vUv;
varying float vLine;

uniform float uPlane, uTruck, uPoint, uBoat, uCaptationOpacity;

#define PI 3.14
#define BLUE vec3(0., .6, 1.)

void main() {
	gl_FragColor = vec4(1.) * uTruck * uCaptationOpacity * step(vLine, 1.);
}`,uR=Ge(cR,"fragmentShader"),hR=`varying vec2 vUv;
varying float vLine;

attribute vec2 uv;
attribute vec3 position;

#define PI 3.14
uniform float uTime, uTruck, uAspect;
uniform vec2 uMouse;

void main() {
	vUv = uv;
	vec3 pos = vec3(0.);

	vLine = floor(fract(step(uv.x + uTime * .3, .5)) * 3.);

    vec3 truckPos = position * 2.;
    float tdir = (1. - step(uv.x, .5) * 2.);
    truckPos.y = floor(truckPos.y * 3.) * .12 - .4 + tdir * .05;
    truckPos.xy -= uMouse * .04;
    truckPos.x = truckPos.x * .3 + smoothstep(-.4, 1., sin(uTime * .1 * (.5 + uv.y) + uv.x * PI * 2.)) - .5;

    truckPos.y -= truckPos.x * .5;
    truckPos.y *= uAspect * .7;
    pos += truckPos * step(.1, uTruck);

	gl_Position = vec4(truckPos, 1.0);
}`,dR=Ge(hR,"vertexShader");class V_ extends Yg{constructor(){super({uniforms:{uTime:F.uTime,uMouse:F.uMouse,uAspect:Fi.uAspect,uPlane:{value:0},uTruck:{value:0},uPoint:{value:0},uBoat:{value:0},uCaptationOpacity:F.uCaptationOpacity,uCaptationDecay:F.uCaptationDecay},transparent:!0,depthTest:!1}),this.defines.USE_LINES=1,uR.use(this),dR.use(this)}}const fR=`precision highp float;

uniform sampler2D uMap;
varying float vDir;
varying float vProgress;

uniform float uPlane, uTruck, uPoint, uBoat, uCaptationOpacity;

#define PI 3.14
#define BLUE vec3(0., .6, 1.)

void main() {
	vec2 uv = (gl_PointCoord.xy - .5) * mat2(cos(vDir), -sin(vDir), sin(vDir), cos(vDir)) + .5;

	float dtc = length(uv - .5);

	float xclamp =  smoothstep(.5, 0.45, abs(uv.x - .5));
	float map = texture2D(uMap, uv).r;
	vec4 plane = vec4(BLUE, map * xclamp);
	vec4 boat = vec4(BLUE, map * xclamp) * smoothstep(.1, 0.08, abs(uv.y - .5));
	vec4 point = vec4(BLUE, smoothstep(.05, .04, abs(dtc - .44)) + smoothstep(.27, .26, dtc));
	vec4 truck = vec4(BLUE, smoothstep(.21, .2, abs(uv.y - .5)) * xclamp);

	gl_FragColor += plane * uPlane;
	gl_FragColor += boat * uBoat;
	gl_FragColor += point * uPoint;
	gl_FragColor += truck * uTruck;

	gl_FragColor *= uCaptationOpacity;
}`,pR=Ge(fR,"fragmentShader"),mR=`precision highp float;

attribute vec3 position;
attribute vec2 uv;

varying float vDir;
varying float vProgress;

uniform float uTime, uPlane, uTruck, uPoint, uBoat, uAspect;
uniform vec2 uMouse;

#define PI 3.14

float pow2(float x) { return x*x; }
float pow3(float x) { return x*x*x; }
float symSqrt(float x) { return sqrt(abs(x)) * sign(x); }

void main() {
    vec3 pos = vec3(0.);
    vec2 nUv = normalize(uv) - .5;
    
    vDir = 0.;

    float enabled = 1.;
    

    
    vec3 planePos = position;
    float planeDir = atan(nUv.y, nUv.x * 2.);
    planePos.xy += nUv * (uTime * .5 + pos.z * 10.) * .015;

    planePos.x = fract(planePos.x - .5) * 2. - 1.;
    planePos.y = fract(planePos.y - .5) * 2. - 1.;
    planePos *= 2.;
    planePos.xy -= uMouse * .08;

    pos += planePos * step(.1, uPlane);
    vDir += planeDir * step(.1, uPlane);

    
    vec3 boatPos = position * 10.;
    boatPos.y *= .1;
    float bdir = (1. - step(uv.x, .5) * 2.);
    boatPos.x += (uTime * .05 * bdir + sin(uTime * (.5 + uv.x) + uv.y * PI) * .03) * .2;
    boatPos.x = fract(boatPos.x * .5 - .5) * 2. - 1.;
    boatPos.y = fract(boatPos.y * .5 - .5) * 2. - 1.;

    boatPos.y = boatPos.x * boatPos.x + boatPos.y * 3. - .05;
    boatPos.x /= min(uAspect, 1.);
    boatPos.xy -= uMouse * .04;
    pos += boatPos * step(.1, uBoat);
    float boatDir = (bdir + 1.) * PI * .5 + PI + symSqrt(atan(boatPos.x * boatPos.x * sign(boatPos.x)) * PI / 3.);
    vDir += boatDir * step(.1, uBoat);

    
    vec3 pointPos = position;
    pointPos.xy -= uMouse * .04;
    pointPos *= 1.9;
    pos += pointPos * step(.1, uPoint);
    enabled *= mix(1., .7, step(.1, uPoint));

    
    vec3 truckPos = position * 2.;
    float tdir = (1. - step(uv.x, .5) * 2.);
    truckPos.y = floor(truckPos.y * 3.) * .12 - .4 + tdir * .05;
    truckPos.xy -= uMouse * .04;
    truckPos.x = truckPos.x * .3 + smoothstep(-.4, 1., sin(uTime * .1 * (.5 + uv.y) + uv.x * PI * 2.)) - .5;

    truckPos.y -= truckPos.x * .5;
    truckPos.y *= uAspect * .7;
    enabled *= mix(1., min(1., uAspect), step(.1, uTruck));
    pos += truckPos * step(.1, uTruck);
    float truckDir = (tdir + 1.) * PI * .5 + PI - PI * .1;
    vDir += truckDir * step(.1, uTruck);

    gl_Position = vec4(pos, 1.);
    #ifndef USE_LINES
        gl_PointSize = 28. * enabled;
    #endif
}`,gR=Ge(mR,"vertexShader");class G_ extends Yg{constructor(){super({uniforms:{uMap:{value:N.assets.get("textures","plane")},uTime:F.uTime,uMouse:F.uMouse,uAspect:Fi.uAspect,uPlane:{value:0},uTruck:{value:0},uPoint:{value:0},uBoat:{value:0},uCount:{value:200},uCaptationOpacity:F.uCaptationOpacity,uCaptationDecay:F.uCaptationDecay},transparent:!0,depthTest:!1}),pR.use(this),gR.use(this)}}const Gi={trueColor:0,red:0,green:0,zoomed:0,termal:0,sobel:0,saturation:1,luminosity:1,bias:0,clouds:0},zd={default:{config:{...Gi,trueColor:1},map:"map"},Hyperspectral:{config:{...Gi,red:1},map:"map"},Multispectral:{config:{...Gi,green:1},map:"map"},VHR:{config:{...Gi},map:"zoomed"},Thermal:{config:{...Gi,termal:1},map:"map"},SAR:{config:{...Gi,sobel:.5,saturation:.2,luminosity:1.5},map:"map"},AIS:{config:{...Gi,trueColor:1,saturation:0},map:"map",point:"boats",zoom:.5},ADSB:{config:{...Gi,trueColor:1,saturation:0,bias:3,clouds:1},map:"map",point:"planes",zoom:1.2},Broadband:{config:{...Gi,trueColor:1,saturation:0},map:"city",point:"points"},SIG:{config:{...Gi,trueColor:1,saturation:1},map:"paraboles"},StoreForward:{config:{...Gi,trueColor:1,luminosity:.5,saturation:0},map:"zoomed",point:"trucks"}},Pa=200;class _R extends Yt{constructor(){super(new la(2,2),new z_);const e=[],t=[];for(let i=0;i<Pa;i++)e[i*3]=Co(i)-.5,e[i*3+1]=Co(i*2+Pa)-.5,e[i*3+2]=Co(i*2+Pa)-.5,t[i*2]=Co(i*2+Pa+1),t[i*2+1]=Co(i*2+Pa*2);const n=new qn;n.setAttribute("position",new jt(new Float32Array(e),3)),n.setAttribute("uv",new jt(new Float32Array(t),2)),this.point=new Xg(n,new G_),this.lines=new Hg(n,new V_),this.lines.material.uniforms.uPlane=this.point.material.uniforms.uPlane,this.lines.material.uniforms.uTruck=this.point.material.uniforms.uTruck,this.lines.material.uniforms.uPoint=this.point.material.uniforms.uPoint,this.lines.material.uniforms.uBoat=this.point.material.uniforms.uBoat,this.add(this.point,this.lines),this.point.frustumCulled=!1,this.lines.frustumCulled=!1,this.frustumCulled=!1,N.on("selectCaptation",this.onSelectCaptation)}onSelectCaptation=e=>{N.render.scene.selectedPayloadKey=e.toLowerCase(),this.tl?.kill(),this.tl=Pe.timeline();const t=zd[e];this.material.uniforms.uConf1.value={...this.material.uniforms.uConf2.value},this.material.uniforms.uConf2.value={...t.config},this.tl.fromTo(this.material.uniforms.uMix,{value:0},{value:1,ease:"power2.inOut",duration:.6},.2),this.tl.to(this.material.uniforms.uUseZoomedMap,{value:t.map==="zoomed"?1:0,ease:"power2.inOut",duration:.6},.2),this.tl.to(this.material.uniforms.uUseParabolesMap,{value:t.map==="paraboles"?1:0,ease:"power2.inOut",duration:.6},.2),this.tl.to(this.material.uniforms.uUseCityMap,{value:t.map==="city"?1:0,ease:"power2.inOut",duration:.6},.2),this.tl.to(this.material.uniforms.uMapZoom,{value:t.map==="map"?typeof t.zoom>"u"?1:t.zoom:0,ease:"power4.inOut",duration:1},0),this.tl.to(this.point.material.uniforms.uPlane,{value:0,duration:.1},0),this.tl.to(this.point.material.uniforms.uTruck,{value:0,duration:.1},0),this.tl.to(this.point.material.uniforms.uPoint,{value:0,duration:.1},0),this.tl.to(this.point.material.uniforms.uBoat,{value:0,duration:.1},0),this.tl.to(this.point.material.uniforms.uPlane,{value:t.point==="planes"?1:0,duration:.4},.6),this.tl.to(this.point.material.uniforms.uTruck,{value:t.point==="trucks"?1:0,duration:.4},.6),this.tl.to(this.point.material.uniforms.uPoint,{value:t.point==="points"?1:0,duration:.4},.6),this.tl.to(this.point.material.uniforms.uBoat,{value:t.point==="boats"?1:0,duration:.4},.6);const n=e.toLowerCase();N.render.scene.payloads.has(n)&&N.render.scene.detailedSat.plug(N.render.scene.payloads.get(n))}}let Cs=null,Ps=null;const vR={get texture(){if(Cs!==null)return Cs;Ps=document.createElement("canvas");const r="AZEYWFGJKLXVB034679",e=40;Ps.width=r.length*e,Ps.height=32;const t=Ps.getContext("2d");return t.textAlign="center",t.textBaseline="middle",t.font=`${Ps.height*.8}px arial`,t.fillStyle="white",Array.from(r).forEach((n,i)=>t.fillText(n,i*e+e*.5,Ps.height*.5)),Cs=new Xc(Ps),Cs.wrapS=this.texture.wrapT=on,Cs.minFilter=mn,Cs.magFilter=mn,Cs}},xR=`precision highp float;

uniform sampler2D uMap, uNoise, uLetters, uLinearNoise, uAlbedoSA, uAlbedoNA, uClouds, uSolidNoise, uCloudsZoomed;
uniform float uEarthOpacity, uTime, uEarthBluriness, uEarthLetterOpacity, uTrailsOpacity, uEarthSaturation, uGlobalTrailCount, uEarthAlbedo, uFirstTrailsOpacity, uCloudTime, uTrailsInclinaison, uEarthSpatializedSaturation, uSecondaryTrailCount, uAspect;

varying vec3 vNormal, vPosition, vObjectPosition, vViewPosition;
varying vec2 vUv;

#ifdef MAX_TRAILS_COUNT
	uniform vec3 uTrailsRotations[MAX_TRAILS_COUNT];
	uniform float uTrailsVisibility, uTrailsVisibilityMult;
	uniform float uSatCount;
	uniform int uTrailsCount;
#endif

#define PI 3.1415
#define PI2 6.283

#define BLUE vec3(0.5, 0.7, 1.15)

float pow2(float x) {return x * x;}
float pow3(float x) {return x * x * x;}
float pow4(float x) {return x * x * x * x;}

float avg(vec3 x) { return (x.x + x.y + x.z) / 3.;}

vec3 adjustSaturation(vec3 color, float saturation) {
	return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

vec2 rotateSphericalUV(vec3 worldPos, float cx, float sx, float cz, float sz) {
	return vec2(
		atan(worldPos.y * sx + worldPos.z * -cx, worldPos.x * -cz + worldPos.y * cx * sz + worldPos.z * sx * sz) / PI2 + 0.5, 
		asin(worldPos.x * sz + worldPos.y * cx * cz + worldPos.z * sx * cz) / PI + 0.5
	);
}

float cFract(float x) { return x - floor(x); }

void main() {
	vec2 dUv = vUv;

	float trailInfluence = 0.;
	float time = uTime;
	float uTrailFOV = 10. / 200.;
	float revealTrailFOV = (1. - uEarthBluriness) * 30.;
	float uTrailEarthGlow = 1.;
	float singleTrailReveal = 0.;
	float trailReveal = 0.;
	float firstTrailReveal = 0.;

	if(uTrailsOpacity > .001) {
		float progress;
		vec2 rotatedUv;
		vec3 trailRotation;

		float earthUvcz = cos(-uTrailsInclinaison - PI);
		float earthUvsz = sin(-uTrailsInclinaison - PI);
		
		
		#ifdef TRAILS_COUNT 
		for (int i = 0; i < TRAILS_COUNT; i++) {
		#else
		for (int i = 0; i < uTrailsCount; i++) {
		#endif
			trailRotation = uTrailsRotations[i];
			trailRotation.x -= PI * .2;

			rotatedUv = rotateSphericalUV(normalize(vObjectPosition.yxz), cos(trailRotation.x + PI), sin(trailRotation.x + PI), earthUvcz, earthUvsz);
			progress = 1. - cFract(rotatedUv.x * uSatCount + ((time + trailRotation.y * 5.) * 0.01 + .27) * uSatCount);

			trailInfluence += 
				smoothstep(0.0, 0.04, uTrailFOV - abs(rotatedUv.y - 0.5)) *
				smoothstep(1. - uTrailFOV * uSatCount - .1, 1., progress) *
				smoothstep(progress, progress + .3, 1.);
		}

		trailInfluence *= uGlobalTrailCount * uSecondaryTrailCount;

		
		trailRotation = uTrailsRotations[TRAILS_COUNT - 1];
		trailRotation.x -= PI * .2;

		float fistTrailFOV = 9. / 200.;

		rotatedUv = rotateSphericalUV(vObjectPosition.yxz, cos(trailRotation.x + PI), sin(trailRotation.x + PI), earthUvcz, earthUvsz);
		progress = 1. - fract(rotatedUv.x * uSatCount + ((time + trailRotation.y * 5.) * 0.01 + .27) * uSatCount);

		firstTrailReveal = 
			smoothstep(0.0, 0.04, fistTrailFOV - abs(rotatedUv.y - 0.5)) *
			smoothstep(1. - (fistTrailFOV) * uSatCount - .4, 1., progress) *
			smoothstep(progress, progress + .5, 1.) * 1.5;
		
	}
	
	firstTrailReveal *= uFirstTrailsOpacity;
	float earthBlur = uEarthBluriness * smoothstep(1., 0., trailReveal) * smoothstep(1., 0., firstTrailReveal);

	
	trailInfluence = min(2., trailInfluence) * .8 * uTrailsOpacity;

	vec2 doubleNoise = ((texture2D(uNoise, vUv * vec2(2., 1.) * 0.5 + uTime * .005 + texture2D(uNoise, vUv * 2.).gb * .05).rg - .5)) * .01;
	dUv += doubleNoise * (earthBlur + .001) * (1. - smoothstep(0., .2, trailInfluence));

	vec4 map = texture2D(uMap, dUv);

	map += doubleNoise.r * earthBlur * (1. - smoothstep(0., .2, trailInfluence)) * 3.2;

	vec3 normal = vNormal;
	
	

	vec3 iphone = vec3(sin((normal.y - .5) * normal.x * 7. + dot(vec3(1.), vViewPosition) * .15 + length(map) * 6.) * .06);
	vec3 color = .01 + iphone;

	float darken = 1. - earthBlur;

	
	
	color *= .8 + map.b * .4;
	
	color *= 1.1 - map.g * .3;
	color *= .9 + map.b * .1;

	color *= darken;
	
	vec2 dotUv = dUv * vec2(2., 1.) * 200.;
	vec3 dots = smoothstep(.28, .12, length(fract(dotUv) - .5)) * vec3(0.2, .6, 1.) * (map.b + .2) * (1. - map.g * .5) * (1. + color + .04) * (1.2 - texture2D(uNoise, dotUv / 256.).r * .5) * .6 * (1. - earthBlur) * (1. - uEarthLetterOpacity);
	color += dots;

	color += max(0., dot(normal, normalize(vec3(1., 1., -1.8)))) * .4;
	color *= 1. + smoothstep(.5, 1.5, length(normal.xy - .2)) * 2.;

	float db = dot(normal, normalize(vec3(1., 1., -2.)));
	color += smoothstep(.0, .5, db) * vec3(0., .5 + sin(db * 30.) * .1, 1.) * .2;
	color += max(0., dot(normal, normalize(vec3(-1., -1., -.8)))) * .1;

	color *= smoothstep(-1., 0., normal.y);

	float back = max(0., dot(vNormal, normalize(vec3(1., .8, -3.))));
	vec3 rim = back * vec3(0., .5, 1.) * 2. + smoothstep(.1, .5, back) * .5;
	rim *= 1. + dots;

	color = mix(color * (.8 + rim), rim + iphone * 1.5, earthBlur * .8);
	color *= 1. + map.r  * vec3(0.2, .6, 1.) * earthBlur * .4;
	float spatializedSaturation = max(0., uEarthSpatializedSaturation * smoothstep(.3, 1.2, length(vNormal.xy)) + dot(vNormal.xy, vec2(-1., 1.) * .1));
	color = adjustSaturation(color, uEarthSaturation + spatializedSaturation);
	
	color += trailInfluence * .7 * BLUE * (.2 + color);
	color = adjustSaturation(color, 1. + trailInfluence * 1.5);

	color += firstTrailReveal * (dots + .1);

	if(uEarthLetterOpacity > .001) {
		float aspectScale = 1. - smoothstep(1., .9, uAspect) * .5;
		float letterScale = 200. * aspectScale;
		float lSpeed = 10. + sin(floor(vUv.y * letterScale) * .5) * 1.;
		vec3 lNoise = texture2D(uNoise, vUv / 256. * letterScale * vec2(2., 1.) + vec2(uEarthLetterOpacity * .05, 0.) - uTime * vec2(.01, 0.)).rgb;
		vec3 letters = texture2D(uLetters, vUv * vec2(15. * aspectScale, letterScale) + vec2(floor(vUv.y * letterScale) * .3 + floor(uTime * lSpeed) / lSpeed, 0.)).r * (.1 + BLUE * .1)* (1.5 + map.b * BLUE * 1. + map.b) * vec3(.6, .8, 1.) * smoothstep(1., -.5, vNormal.x) * uEarthLetterOpacity * (1.4 + map.r * .3 + (1. - map.g) * .2);
		letters *= 1. + sin(floor(vUv.y * letterScale) * 10.) * .2;

		color += letters * smoothstep(uEarthLetterOpacity, uEarthLetterOpacity - .1, vUv.y - lNoise.r * .2) * (1. + smoothstep(uEarthLetterOpacity - .2, uEarthLetterOpacity, vUv.y * 1. - lNoise.r * .2) * 10. * smoothstep(1., .8, uEarthLetterOpacity));
		color *= 1. + step(.8, lNoise.g) * uEarthLetterOpacity * length(letters);
		
	}

	if(uEarthAlbedo > .01) {
		
		
		vec3 albedo = mix(texture2D(uAlbedoSA, vUv * 2.).rgb, texture2D(uAlbedoNA, vUv * 2. - vec2(0., 1.)).rgb, step(.5, vUv.y));
		float sea = smoothstep(.8, 0.2, length(albedo - vec3(0., 0., .7)));
		albedo *= mix(.8, .2, sea);
		float day = smoothstep(-.3, 0.5, dot(normal, normalize(vec3(-1., 1., .5))));
		albedo *= day * 1.3 + .3;
		albedo += max(0., smoothstep(.2, 0.8, dot(normal, normalize(vec3(-1., 1., -.8))))) * vec3(1., .9, .5);

		float ct = uTime * .05 + uCloudTime;
		vec2 cUv = vUv + vec2(.11 + uCloudTime, -.058);
		vec3 cNoise = texture2D(uSolidNoise, cUv * 100. - ct).rgb + texture2D(uSolidNoise, cUv * 50. + ct * .5).rgb * .5;
		cUv += (cNoise.gb - .5) * .0003;
		float cloudArea = smoothstep(1., .8, vUv.y);
		albedo = adjustSaturation(albedo, .5) * vec3(.9, .95, 1.2) + .05;
		albedo = mix(albedo, vec3(0.), min(1., texture2D(uClouds, cUv * 2. - vec2(.01, -.02)).r * 3.) * cloudArea);
		albedo = mix(albedo, vec3(.88, .9, .99) + cNoise.b * .2, min(1., texture2D(uClouds, cUv * 2.).r * 2.5) * cloudArea * (day + .01));

		vec2 zcUv = (cUv * vec2(2., 1.) + vec2(-.475, -0.585)) * 6.;
		albedo = mix(albedo, vec3(.95, .97, 1.), texture2D(uCloudsZoomed, zcUv).r * smoothstep(.5, 0.2, length(zcUv - .5)) * .9);

		

		color = mix(color, albedo, uEarthAlbedo);
	}

	color *= (1. - earthBlur * .5);
	
	gl_FragColor = vec4(color, 1.) * uEarthOpacity;
}`,yR=Ge(xR,"fragmentShader"),SR=`varying vec2 vUv;
varying vec3 vNormal, vPosition, vObjectPosition, vViewPosition;

#ifdef MAX_TRAILS_COUNT
    varying vec3 vModelPosition;
#endif

void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vObjectPosition = position;
    vPosition = vec3(modelMatrix * vec4(position, 1.));

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
    vViewPosition = mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
}`,TR=Ge(SR,"vertexShader");class H_ extends mt{constructor(){super({uniforms:{uResolution:Fi.uResolution,uDPR:Fi.uDPR,uAspect:Fi.uAspect,uEarthOpacity:F.uEarthOpacity,uEarthBluriness:F.uEarthBluriness,uEarthSaturation:F.uEarthSaturation,uEarthSpatializedSaturation:F.uEarthSpatializedSaturation,uEarthLetterOpacity:F.uEarthLetterOpacity,uEarthAlbedo:F.uEarthAlbedo,uTrailsInclinaison:F.uTrailsInclinaison,uTime:F.uTime,uNoise:{value:Kt.nearestTexture},uLinearNoise:{value:Kt.texture},uSolidNoise:{value:N.assets.get("textures","noise")},uMap:{value:N.assets.get("textures","map")},uAlbedoSA:{value:N.assets.get("textures","southAmerica")},uAlbedoNA:{value:N.assets.get("textures","northAmerica")},uClouds:{value:N.assets.get("textures","clouds")},uCloudsZoomed:{value:N.assets.get("textures","cloudsZoomed")},uLetters:{value:vR.texture},uTrailsOpacity:F.uTrailsOpacity,uFirstTrailsOpacity:F.uFirstTrailsOpacity,uGlobalTrailCount:F.uGlobalTrailCount,uSecondaryTrailCount:F.uSecondaryTrailCount,uCloudTime:F.uCloudTime,uTrailsRotations:{value:[1]},uTrailsCount:{value:1},uSatCount:{value:1}},transparent:!0}),yR.use(this),TR.use(this)}}const bR=`precision highp float;

uniform float uEarthOpacity, uAtmosphereBeam, uEarthSaturation, uTime, uEarthAlbedo;
uniform sampler2D uNoise;

varying vec2 vUv;

float pow2 (float x) { return x * x; }

vec3 adjustSaturation(vec3 color, float saturation) {
	return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

#define LIGHT_COLOR vec3(0.514,0.643,0.859)

void main() {
    vec2 cUv = vUv - .5;
    float dtc = length(cUv) * 1.01;

    vec3 blue = vec3(.2, .2, 1.);
    vec3 color = adjustSaturation(blue, (smoothstep(.2, 0., abs(dtc - .25)) * .4 + .1) * uEarthSaturation);
    color *= 1. + smoothstep(.08 - uAtmosphereBeam * .01, 0., abs(dtc - .25)) * .2;
    color *= 1. + max(0., dot(vUv - .5, vec2(1., 1.)) * 4.) * smoothstep(.05, 0., abs(dtc - .256)) * .8;

    float baseAlpha = smoothstep(.2, 0., abs(dtc - .25)) * .3;
    baseAlpha += smoothstep(.05, 0., abs(dtc - .25)) * .2;
    baseAlpha += smoothstep(.06, 0., abs(dtc - .25)) * .3;
    baseAlpha += smoothstep(.03, 0., abs(dtc - .254)) * .1;
    baseAlpha += smoothstep(.01, 0., abs(dtc - .254)) * .1;
    baseAlpha *= smoothstep(0.15, .25, dtc);

    vec3 baseColor = mix(color, vec3(0., 0.5, 1.), 0.4);
    baseColor = mix(baseColor, vec3(7., 21., 143.)/255. * 5., smoothstep(.06, 0.01, abs(dtc - .254)) * smoothstep(.0, 0.05, abs(dtc - .254)));

    baseColor = mix(baseColor, LIGHT_COLOR, baseAlpha * .4) + baseAlpha * .2;
    baseAlpha *= .3 + smoothstep(-2., 2., dot(normalize(cUv), vec2(-2. - uEarthAlbedo * 4., 2.))) * .7;
    

    
    

    color *= mix(1.,smoothstep(.2, .264, dtc) * 2., uAtmosphereBeam);
    float time = uTime * 0.02;

    float beam = 
        smoothstep(.2, .8, texture2D(uNoise, vec2(atan(cUv.x, cUv.y) + time) * .08).r) * .3 + 
        (texture2D(uNoise, vec2(atan(cUv.x, cUv.y) - time) * .1).r) * .2;
    color += beam * .3 * uAtmosphereBeam;

    float beamAlpha = smoothstep(.15 - uAtmosphereBeam * .08, 0., abs(dtc - .27)) * .5;

    float alpha = mix(baseAlpha * .5, beamAlpha, uAtmosphereBeam);

    color = mix(baseColor, color, uAtmosphereBeam);

    color = adjustSaturation(color, 1. - uAtmosphereBeam);
    gl_FragColor = vec4(color, alpha) * (.9 - uAtmosphereBeam * .4) * uEarthOpacity;
    gl_FragColor *= 1. + smoothstep(.02, .0, abs(dtc - .26)) * .4 * uAtmosphereBeam;
    
}`,MR=Ge(bR,"fragmentShader"),ER=`varying vec2 vUv;

void main() {
    vUv = uv;
    vec4 proj = projectionMatrix * modelViewMatrix * vec4(vec3(0.), 1.);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    gl_Position.xy += proj.xy * proj.z * .001;
    
}`,wR=Ge(ER,"vertexShader");class W_ extends mt{constructor(){super({uniforms:{uEarthOpacity:F.uEarthOpacity,uAtmosphereBeam:F.uAtmosphereBeam,uEarthSaturation:F.uEarthSaturation,uEarthAlbedo:F.uEarthAlbedo,uTime:F.uTime,uNoise:{value:Kt.texture}},transparent:!0}),MR.use(this),wR.use(this)}}class AR extends Yt{constructor(){super(new la(Tl.EARTH*4,Tl.EARTH*4),new W_),this.renderOrder=1,N.bind(this)}onTickerUpdate(){this.lookAt(N.render.camera.position)}}const RR=`precision highp float;

uniform sampler2D tNoise;
uniform vec3 uColor;
uniform float uTime, uSatCount, uTrailsOpacity, uEarthOpacity, uGlobalTrailCount, uSecondaryTrailCount;

varying float vDecay;
varying vec2 vUv;
varying vec3 vViewNormal;
varying float vInstanceId;

void main() {
    float time = uTime + vDecay * 5.;
    

    vec2 uv = vUv;
    
    
    float satCount = (uSatCount);

    float trailCount = uGlobalTrailCount * uSecondaryTrailCount;
    float appear = smoothstep(trailCount, trailCount - .1, texture2D(tNoise, vec2(vInstanceId / 30., 0.)).r * 0.9);
    appear = mix(appear, 1., step(vInstanceId, .5));
    time -= (1. - appear * appear) * 2.;

    float progress = fract(vUv.x * satCount - time * 0.01 * satCount);
    float trail = smoothstep(.9, 1., progress);
    vec3 color = uColor;

    float alpha = smoothstep(.3, .0, abs(vUv.y - .5)) * .02;
    alpha += smoothstep(.6, 1., progress) * smoothstep(.03, .0, abs(uv.y - .5)) ;
    color += alpha * .2;

    float bus = smoothstep(.9999 - satCount * 0.03, .9999, progress) * smoothstep(1., .995 - satCount * 0.0002, progress) * smoothstep(.15, .0, abs(uv.y - .5));

    color += bus * .15;
    alpha += bus * .15;

    alpha *= smoothstep(0.1, 1., vViewNormal.z) * appear * uTrailsOpacity * uEarthOpacity;
    if(alpha < .01) discard;

    gl_FragColor = vec4(color, alpha) * 2.;
}`,CR=Ge(RR,"fragmentShader"),PR=`uniform float uTime;

attribute float decay;

varying float vDecay;
varying vec2 vUv;
varying vec3 vViewNormal;
varying float vInstanceId;

#define PI 3.1415926536

void main() {
    vUv = uv;
    vDecay = decay;
    vec3 pos = position;

    #ifdef USE_INSTANCING
        vec3 transformedNormal = normal;
        mat3 im = mat3(instanceMatrix);
        transformedNormal /= vec3(dot(im[0], im[0]), dot(im[1], im[1]), dot(im[2], im[2]));
        vViewNormal = normalMatrix * im * transformedNormal;

        pos = (instanceMatrix * vec4(pos, 1.)).xyz;

        vInstanceId = float(gl_InstanceID);
	#endif

    
    
    

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}`,DR=Ge(PR,"vertexShader");class X_ extends mt{constructor(){super({uniforms:{tNoise:{value:Kt.texture},uColor:{value:new Oe("#4c6dff")},uTime:F.uTime,uTrailsOpacity:F.uTrailsOpacity,uEarthOpacity:F.uEarthOpacity,uGlobalTrailCount:F.uGlobalTrailCount,uSecondaryTrailCount:F.uSecondaryTrailCount,uFirstTrailsOpacity:F.uFirstTrailsOpacity,uSatCount:{value:1}},depthWrite:!1,transparent:!0}),CR.use(this),DR.use(this)}}const xc=new At,jr=new k;class UR extends At{angleBetweenPlanes=Math.PI;inclination=Math.PI;MAX_COUNT=30;BASE_COUNT=30;constructor(e){super(),this.earth=e,this.instances=new nf(new of(1.15*Tl.EARTH,1.15*Tl.EARTH,.5,64,2,!0),new X_(F.uTrailsVisibility),this.MAX_COUNT),this.instances.geometry.setAttribute("decay",new Gc(new Float32Array(Array.from(Array(this.MAX_COUNT)).map(()=>0)),1)),this.instances.rotateZ(Math.PI*.5);const t=[];for(let n=0;n<this.instances.count;n++)this.instances.setMatrixAt(n,new Ke),t.push(new k);this.instances.instanceMatrix.needsUpdate=!0,this.add(this.instances),e.material.uniforms.uTrailsRotations.value=t,e.material.defines.MAX_TRAILS_COUNT=this.MAX_COUNT,e.material.uniforms.uTrailsCount.value=this.MAX_COUNT,e.material.uniforms.uSatCount.value=this.satCount,this.onOrbitalDeterminationChange({nPlanes:this.BASE_COUNT,satsPerPlane:8,satsLastPlane:8,angleBetweenPlanes:15}),N.bind(this)}onTickerUpdate({dt:e}){this.instances.rotation.y=F.uTrailsRTime.value+Math.PI*.25}onOrbitalDeterminationChange(e){this.timerOrbital&&clearTimeout(this.timerOrbital),this.angleBetweenPlanes=Math.PI*(this.instances.count<=2?1:2)/Vs(e.nPlanes,0,this.MAX_COUNT),Pe.timeline().add(()=>{this.satCount=e.satsPerPlane,this.planeCount=Vs(e.nPlanes,0,this.MAX_COUNT)})}set planeCount(e){this.instances.count=Vs(e,0,this.MAX_COUNT),this.earth.material.uniforms.uTrailsCount.value=this.instances.count,this.earth.material.defines.TRAILS_COUNT=this.instances.count,this.inclination=97.6/180*Math.PI,this.inclination=Math.min(this.inclination,65/180*Math.PI),this.inclination=Math.PI*.5-this.inclination,F.uTrailsInclinaison.value=this.inclination;for(let t=0;t<this.instances.count;t++)jr.set(this.angleBetweenPlanes*t,Math.random()*Math.PI,this.inclination),xc.position.set(0,0,0),xc.rotation.set(jr.x,0,jr.z),xc.updateMatrix(),jr.y=jr.y*(t===0?0:1),this.instances.geometry.attributes.decay.array[t]=jr.y,this.instances.setMatrixAt(t,xc.matrix),(this.instances.count>2||t===0)&&(jr.z*=-1),this.earth.material.uniforms.uTrailsRotations.value[t].copy(jr);for(let t=0;t<this.instances.count;t++)this.earth.material.uniforms.uTrailsRotations.value[t].y=this.instances.geometry.attributes.decay.array[this.instances.count-t];this.instances.geometry.attributes.decay.needsUpdate=!0,this.instances.instanceMatrix.needsUpdate=!0}get planeCount(){return this.instances.count}set satCount(e){this.instances.material.uniforms.uSatCount.value=e,this.earth.material.uniforms.uSatCount.value=e}get satCount(){return this.instances.material.uniforms.uSatCount.value}}let Da;class IR extends Yt{constructor(){super(new cu(Tl.EARTH,30,50),new H_),this.atmosphere=new AR,this.trails=new UR(this),this.targetRotation=this.rotation.clone(),this.targetPosition=this.position.clone(),this.add(this.atmosphere),this.add(this.trails),N.bind(this)}onTickerUpdate=({et:e,dt:t})=>{Da=Math.min(.9,Math.min(1,t*10)),this.rotation.x-=(this.rotation.x-this.targetRotation.x)*Da,this.rotation.y-=(this.rotation.y-this.targetRotation.y)*Da,this.rotation.z-=(this.rotation.z-this.targetRotation.z)*Da,this.position.lerp(this.targetPosition,Da)}}let Kr=0;new Ke;new k;new k;new si().setFromEuler(new In(1,1,0));new si().setFromEuler(new In(0,1,0));new si().setFromEuler(new In(0,1,1));class fg extends At{constructor(e,t){super(),this._deployed=0,this._build=0,this._position=this.position.clone(),this._quaternion=this.quaternion.clone(),this.mesh=e,this.payload=t,this.payloadHasUmbrella=!1,this._payloadDeployed=0,this.anchor=null,this.mesh.traverse(n=>{n.name.split("-").pop()==="anchor"&&(this.anchor=n)}),this.animable=[],this.add(this.mesh)}parseDetailed(){this.wing1=this.mesh.getObjectByName("Wing1"),this.wing2=this.mesh.getObjectByName("Wing2"),this.wing11=this.mesh.getObjectByName("Wing11"),this.wing12=this.mesh.getObjectByName("Wing12"),this.wing21=this.mesh.getObjectByName("Wing21"),this.wing22=this.mesh.getObjectByName("Wing22"),this.wings=[this.wing11,this.wing21,this.wing12,this.wing22],this.legs=this.mesh.getObjectByName("Legs"),this.plates=[],this.screwA=[],this.screwB=[],this.screwC=[],this.clip=[],this.solarPanel=[],this.smallPanels=[],this.tools=[],this.spot=[],this.rings=[],this.others=[],this.traverse(e=>{e.name.indexOf("Body")!==-1||(e.name.indexOf("Plates")!==-1?this.plates.push(e):e.name.indexOf("Screw_B")!==-1?this.screwB.push(e):e.name.indexOf("Clip")!==-1?this.clip.push(e):e.name.indexOf("Solar_Panel")!==-1?this.solarPanel.push(e):e.name.indexOf("Rings")!==-1?this.rings.push(e):e.isMesh&&e.name.indexOf("details-frame")!==-1&&this.others.push(e)),e.userData.useCoreBuild&&(e.material=new su,e.material.useCoreBuild())}),this.enableRetraction=!0,this.buildBuildTl()}place(e){this._position.copy(e.position),this._quaternion.copy(e.quaternion),this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale)}plug(e){this.payload&&this.unplug(),e.position.set(0,0,0),e.quaternion.copy(this.mesh.quaternion),e.rotateX(-Math.PI*.5),this.payload=e,e.name==="sar"?(this.payloadHasUmbrella=!0,e.traverse(t=>{t.userData.MORPH&&(t.material=new su,t.material.uniforms.uVisible=F.uGenPayloadVisible,t.material.uniforms.uGenericBuild=F.uGenericPayloadBuild)})):this.payloadHasUmbrella=!1,this.payload.traverse(t=>{t.baseQuaterion=t.quaternion.clone(),t.basePosition=t.position.clone(),t.baseScale=t.scale.clone()}),this.mesh.add(e),this.buildBuildTl()}unplug(){this.mesh.remove(this.payload),this.payload=null}buildBuildTl=()=>{this.btl?.kill(),this.animable=[],this.traverse(t=>{typeof t._bp>"u"&&(t._bp=t.position.clone(),t._br=t.rotation.clone())}),this.btl=Pe.timeline({paused:!0});const e="power2.out";this.btl.fromTo(this.legs.position,{y:1},{y:this.legs._bp.y,ease:e,duration:.1},.2),this.btl.fromTo(this.wing1.position,{z:this.wing1._bp.z-1.5},{z:this.wing1._bp.z-.05,ease:"power2.inOut",duration:.12},.15),this.btl.fromTo(this.wing2.position,{z:this.wing2._bp.z+1.5},{z:this.wing2._bp.z+.05,ease:"power2.inOut",duration:.12},.25),this.btl.fromTo(this.wing11.position,{z:this.wing11._bp.z-1.5},{z:this.wing11._bp.z-.05,ease:"power2.inOut",duration:.2},.15),this.btl.fromTo(this.wing12.position,{z:this.wing12._bp.z-1.5},{z:this.wing12._bp.z-.05,ease:"power2.inOut",duration:.28},.15),this.btl.fromTo(this.wing21.position,{z:this.wing21._bp.z+1.5},{z:this.wing21._bp.z+.05,ease:"power2.inOut",duration:.2},.25),this.btl.fromTo(this.wing22.position,{z:this.wing22._bp.z-1.5},{z:this.wing22._bp.z-.05,ease:"power2.inOut",duration:.28},.25),this.btl.to(this.wing1.position,{z:this.wing1._bp.z,ease:"power2.inOut",duration:.1},.6),this.btl.to(this.wing2.position,{z:this.wing2._bp.z,ease:"power2.inOut",duration:.1},.6),this.btl.to(this.wing11.position,{z:this.wing11._bp.z,ease:"power2.inOut",duration:.1},.6),this.btl.to(this.wing12.position,{z:this.wing12._bp.z,ease:"power2.inOut",duration:.1},.6),this.btl.to(this.wing21.position,{z:this.wing21._bp.z,ease:"power2.inOut",duration:.1},.6),this.btl.to(this.wing22.position,{z:this.wing22._bp.z,ease:"power2.inOut",duration:.1},.6),this.solarPanel.forEach((t,n)=>{this.btl.fromTo(t.position,{y:t._bp.y-8},{y:t._bp.y,ease:e,duration:.2},.38+n*.02)}),this.clip.forEach((t,n)=>{this.btl.fromTo(t.position,{y:2},{y:t._bp.y,ease:e,duration:.1},.1+n*.05)}),this.screwA.forEach((t,n)=>{this.btl.fromTo(t.position,{y:2},{y:t._bp.y,ease:e,duration:.1},.1+n*.05)}),this.rings.forEach((t,n)=>{this.btl.fromTo(t.position,{y:2},{y:t._bp.y,ease:e,duration:.1},.1+n*.05)}),this.others.forEach((t,n)=>{this.btl.fromTo(t.position,{y:t._bp.y+1},{y:t._bp.y,ease:e,duration:.1},.1+n*.02)}),this.btl.add(()=>{},1)};get build(){return this._build}set build(e){this._build=Math.min(1,Math.max(0,e)),this.btl.seek(this._build)}get payloadDeployed(){return this._payloadDeployed}set payloadDeployed(e){this._payloadDeployed=e,this.payload?.isObject3D&&this.payload.traverse(t=>{Kr=nr(e,typeof t.userData.DECAY=="number"?t.userData.DECAY:0,typeof t.userData.END=="number"?t.userData.END:1),t.quaternion.copy(t.baseQuaterion),t.position.copy(t.basePosition),t.scale.copy(t.baseScale),typeof t.userData.RX=="number"&&t.rotateY(t.userData.RX*Math.PI*Kr),typeof t.userData.RY=="number"&&t.rotateX(t.userData.RY*Math.PI*Kr),typeof t.userData.SY=="number"&&(t.scale.y=t.userData.SY*(1-Kr)),typeof t.userData.SZ=="number"&&(t.scale.z=t.userData.SZ*(1-Kr)),typeof t.userData.S=="number"&&t.scale.setScalar(t.userData.S*(1-Kr)),typeof t.userData.TY=="number"&&t.translateZ(-t.userData.TY*Kr),typeof t.userData.MORPH=="number"&&(t.morphTargetInfluences[0]=Kr)})}get deployed(){return this._deployed}set deployed(e){this._deployed=e,this.wing1.rotation.x=e*Math.PI*2*(75/360),this.wing2.rotation.x=-e*Math.PI*2*(75/360),this.wing11.rotation.x=-e*Math.PI,this.wing12.rotation.x=e*Math.PI,this.wing21.rotation.x=Math.PI+e*Math.PI,this.wing22.rotation.x=Math.PI+e*Math.PI}}const LR=`precision highp float;

uniform sampler2D tNearestNoise, uSolidNoise;
uniform vec3 uColor;
uniform float uTime;
uniform float uSkyOpacity;

varying vec2 vUv;

float generateStars(vec2 uv) {
	vec3 noise = texture2D(tNearestNoise, uv / 256.).rgb - .5;
	float starMaker = length(fract(uv) - .5 + .5 * noise.rg);
	float star = (smoothstep(0.07, 0., starMaker) + smoothstep(0.3, 0., starMaker) * .1) * smoothstep(.35, .7, noise.b);
	return star;
}

void main() {
	vec3 color = uColor;

	vec2 dUv = vUv * vec2(3.14 * .5, 1.);
	dUv.x += .0006 * uTime;

	color += generateStars(dUv * 280.);
	color += generateStars(dUv * 500.);

	color *= smoothstep(0.3, 0.7, texture2D(uSolidNoise, vUv * 30. + uTime * 0.13).r);
	color += vec3(0.0, 0.01, 0.03);
	
	color = mix(color, color * 3., length(vUv - 0.5));
	color = mix(vec3(0.05,0.051,0.057) * 1.5, color, uSkyOpacity);

	gl_FragColor = vec4(color, 1.);

}`,NR=Ge(LR,"fragmentShader"),OR=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`,FR=Ge(OR,"vertexShader");class q_ extends mt{constructor(){super({uniforms:{uColor:{value:new Oe(460551)},tNearestNoise:{value:Kt.nearestTexture},uSolidNoise:{value:N.assets.get("textures","noise")},uTime:F.uTime,uSkyOpacity:F.uSkyOpacity},side:1}),this.uniforms.uSolidNoise.value.wrapS=this.uniforms.uSolidNoise.value.wrapT=on,Kt.nearestTexture.wrapS=Kt.nearestTexture.wrapT=on,NR.use(this),FR.use(this)}}class BR extends Yt{constructor(){super(new cu(50),new q_)}}class kR{el=document.createElement("canvas");ctx;texture=null;constructor(e,t){this.el.width=e,this.el.height=t,this.ctx=this.el.getContext("2d")}texturize(){return this.texture===null&&(this.texture=new Xc(this.el)),this.texture.needsUpdate=!0,this.texture}debug(){document.body.appendChild(this.el),this.el.style="position:fixed;top:0;left:0;z-index:1000;display:block;max-width:512px;max-height:512px;"}}const zR=`precision highp float;

uniform sampler2D uMap;
varying vec2 vUv;

void main() {
    gl_FragColor = texture2D(uMap, vUv);
}`,VR=Ge(zR,"fragmentShader"),GR=`varying vec2 vUv;

#if defined( USE_STARGGER_APPEAR_X ) || defined( USE_STARGGER_APPEAR_Y )
    uniform float uStaggerProgress;
    attribute vec2 uv1;
#endif

float pow2(float x) { return x*x; }

void main() {
    vec3 transformed = position;
    #ifdef USE_STARGGER_APPEAR_X
        transformed.x -= smoothstep(uv1.y * .3 + .7, uv1.y * .3, uStaggerProgress);
    #endif
    #ifdef USE_STARGGER_APPEAR_Y
        transformed.z += pow2(smoothstep(uv1.y * .5 + .5, uv1.y * .5, uStaggerProgress)) * 1.;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.);
    vUv = uv;
}`,HR=Ge(GR,"vertexShader");class Fc extends mt{constructor(e){e.colorSpace=Tn,super({uniforms:{uMap:{value:e}}}),VR.use(this),HR.use(this)}setStaggerY(e){this.defines.USE_STARGGER_APPEAR_Y=1,this.uniforms.uStaggerProgress=e}setStaggerX(e){this.defines.USE_STARGGER_APPEAR_X=1,this.uniforms.uStaggerProgress=e}}const ou=1.77,pg={sats:["Eagle-1","Eagle-2"],stations:["ksat-sg219","rbc-uk-1","amzn-03","ksat-sg34","lsci-08e","rbc-uk-1-24","lsci-01-01"]};class WR extends At{constructor(e){super(),this._progress=0,e.position.set(0,0,0),this.add(e);let t=null;e.traverse(i=>{i.material?.map&&(t=i.material.map)});const n=new Fc(t);e.traverse(i=>{i.material?.map&&(i.material=n)}),this.topLeftAnchor=e.getObjectByName("interface-top-left"),this.topRightAnchor=e.getObjectByName("interface-top-right"),this.topCenterAnchor=e.getObjectByName("interface-top-center"),this.topLeftAnchor.position.x=-ou,this.topRightAnchor.position.x=ou,this.topWarning=e.getObjectByName("top-warning"),this.topClock=e.getObjectByName("top-clock"),this.leftMenu=e.getObjectByName("left-menu"),this.leftData=e.getObjectByName("left-data"),this.leftPanel=e.getObjectByName("left-panel"),this.rightPanel1=e.getObjectByName("right-panel-1"),this.rightPanel2=e.getObjectByName("right-panel-2"),this.rightPanel3=e.getObjectByName("right-panel-3"),this.uniforms={uLeftPanelDeploy:{value:0},uLeftMenuDeploy:{value:0}},this.leftPanel.material=new Fc(t),this.leftPanel.material.setStaggerY(this.uniforms.uLeftPanelDeploy),this.leftMenu.material=new Fc(t),this.leftMenu.material.setStaggerX(this.uniforms.uLeftMenuDeploy),F.uSpaceopsTextsTexture.value=this.generateTextTexture(),this.timeline()}timeline=()=>{this.tl?.kill(),this.tl=Pe.timeline({paused:!0}),this.topWarning.position.z=-.5,this.tl.fromTo(F.uSpaceopsEarthTrails,{value:0},{value:1,ease:"power2.out",duration:.53},0),this.tl.fromTo(F.uSpaceopsEarthStations,{value:0},{value:1,ease:"power2.out",duration:.5},.9),this.tl.fromTo(F.uSpaceopsEarthTrailsSingle,{value:0},{value:1,ease:"power2.out",duration:.5},.8),this.tl.fromTo(this.uniforms.uLeftMenuDeploy,{value:0},{value:1,ease:"power2.out",duration:.15},1),this.tl.fromTo(this.leftMenu.position,{x:-.2},{x:0,ease:"power2.out",duration:.15},1),this.tl.fromTo(this.leftData.position,{z:-.2},{z:0,ease:"power2.out",duration:.15},1.03),this.tl.fromTo(this.topClock.position,{x:1},{x:0,ease:"power2.out",duration:.15},1.06),this.tl.fromTo(this.rightPanel1.position,{x:1.2},{x:0,ease:"power2.out",duration:.4},1.09),this.tl.to(this.rightPanel1.position,{x:1.2,ease:"power2.in",duration:.4},1.6),this.tl.fromTo(F.uSpaceOpsToLeft,{value:0},{value:1,ease:"power3.inOut",duration:1},1.4),this.tl.fromTo(F.uSpaceopsEarthSearch,{value:0},{value:1,ease:"power2.inOut",duration:.4},2),this.tl.fromTo(this.rightPanel2.position,{x:1.2},{x:0,ease:"power2.out",duration:.2},2.4),this.tl.to(F.uSpaceopsEarthSearch,{value:0,ease:"power2.inOut",duration:.5},3),this.tl.to(this.rightPanel2.position,{x:1.2,ease:"power2.in",duration:.3},2.8),this.tl.fromTo(this.rightPanel3.position,{x:1.2},{x:0,ease:"power2.out",duration:.2},3.1),this.tl.fromTo(F.uSpaceopsEarthData,{value:0},{value:1,ease:"power2.out",duration:.5},3),this.tl.fromTo(this.uniforms.uLeftPanelDeploy,{value:0},{value:1,ease:"linear",duration:.5},3),this.tl.fromTo(this.leftPanel.position,{z:2},{z:0,ease:"power3.out",duration:.4},3),this.tl.to(this.leftPanel.position,{x:-1.2,ease:"power2.in",duration:.15},3.51),this.tl.to(this.rightPanel3.position,{x:1.2,ease:"power2.in",duration:.15},3.53),this.tl.to(this.leftMenu.position,{x:-.2,ease:"power2.in",duration:.15},3.52),this.tl.to(this.leftData.position,{z:-.4,ease:"power2.in",duration:.15},3.54),this.tl.to(this.topClock.position,{x:1,ease:"power2.in",duration:.15},3.56),this.tl.add(()=>{},4)};generateTextTexture(){const e=new kR(256,256),t=e.ctx;return t.fillStyle="black",t.fillRect(0,0,256,256),t.fillStyle="white",t.font="18px Arial",t.textAlign="center",pg.sats.forEach((n,i)=>{t.fillText(n,64,(i+1)*25.6)}),pg.stations.forEach((n,i)=>{t.fillText(n,192,(i+1)*25.6)}),e.texturize()}get progress(){return this._progress}set progress(e){this._progress=e,this.tl.seek(this._progress*4)}}const XR=`precision highp float;

uniform sampler2D tNoise;
uniform float uTime, uOpacity;

varying vec2 vUv;

void main() {
    float pulse = 1. + sin(uTime * 3.) * .4;
    float alpha = smoothstep(.5, 0.2, length(vUv - .5));

    gl_FragColor = vec4(.3, .6, 1., alpha) * alpha * pulse * uOpacity;
}`,qR=Ge(XR,"fragmentShader"),YR=`uniform float uTime;

#define PI 3.1415926536
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`,$R=Ge(YR,"vertexShader");class jR extends mt{constructor(){super({uniforms:{tNoise:{value:Kt.texture},uTime:F.uTime,uOpacity:F.uAntenaPulse},blending:ji,transparent:!0}),qR.use(this),$R.use(this)}}const KR=`precision highp float;

uniform sampler2D uDiffuse;
uniform bool uHorizontal;
uniform vec2 uResolution;

varying vec2 vUv;

#define WEIGHT0 0.227027
#define WEIGHT1 0.1945946
#define WEIGHT2 0.1216216
#define WEIGHT3 0.054054
#define WEIGHT4 0.016216

void main() {
	vec2 dUv = vUv;

	vec2 texOffset = 1.0 / uResolution;
    vec3 color = texture2D(uDiffuse, vUv).rgb * WEIGHT0;

	color += texture2D(uDiffuse, vUv + vec2(texOffset.x, 0.0)).rgb * WEIGHT1;
	color += texture2D(uDiffuse, vUv - vec2(texOffset.x, 0.0)).rgb * WEIGHT1;
	
	color += texture2D(uDiffuse, vUv + vec2(0.0, texOffset.y)).rgb * WEIGHT1;
	color += texture2D(uDiffuse, vUv - vec2(0.0, texOffset.y)).rgb * WEIGHT1;

	color *= smoothstep(1.5, 2.8, length(color));

	
	
	

	
	

	gl_FragColor = vec4(color, 1.);
}`,ZR=Ge(KR,"fragmentShader"),JR=`varying vec2 vUv;

void main() {
	vUv = uv;
	gl_Position = vec4(position, 1.0);
}`,QR=Ge(JR,"vertexShader");class Y_ extends mt{constructor(e){super(e),ZR.use(this),QR.use(this)}}function e2(r,e){const t=t2(r,e);return kf(r,`${e}Transform`,t),{repeat:r.params[`${e}TransformRepeat`],offset:r.params[`${e}TransformOffset`],center:r.params[`${e}TransformCenter`],rotation:r.params[`${e}TransformRotation`],matrix:t,update(){return this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y),this}}.update()}function t2(r,e){const t=r.params[e],n={repeat:new Xe,offset:new Xe,center:new Xe,rotation:0},i=r.params[`${e}TransformRepeat`],s=r.params[`${e}TransformOffset`],o=r.params[`${e}TransformCenter`],a=r.params[`${e}TransformRotation`];return n.repeat.set(i?.x||t.repeat.x,i?.y||t.repeat.y),n.offset.set(s?.x||t.offset.x,s?.y||t.offset.y),n.center.set(o?.x||t.center.x,o?.y||t.center.y),n.rotation=a||t.rotation,r.params[`${e}TransformRepeat`]=n.repeat,r.params[`${e}TransformOffset`]=n.offset,r.params[`${e}TransformCenter`]=n.center,r.params[`${e}TransformRotation`]=n.rotation,new et().setUvTransform(n.offset.x,n.offset.y,n.repeat.x,n.repeat.y,n.rotation,n.center.x,n.center.y)}function n2(r,e){return e===0?(r.defines.USE_UV=1,"uv"):`uv${e}`}function i2(r,e,t=!1){Object.defineProperty(r,e,{set:n=>{r[`_${e}`]=n,kf(r,e,n,t)},get:()=>r[`_${e}`]})}function kf(r,e,t,n=!1){if(t==null)return;const i=(t?.isTexture?"t":"u")+(e.charAt(0).toUpperCase()+e.slice(1));if(r.uniforms[i])r.uniforms[i].value=t;else{if(t?.isTexture){const s=`SIXTY_${e.toUpperCase()}`;r.defines[s]=1,n&&(r.defines[`${s}_UV`]=n2(r,t.channel),r[`${e}Transform`]=e2(r,e))}r.uniforms[i]={value:t},r.needsUpdate=!0}}function r2(r,e=()=>{}){if(r.x!=null&&Object.defineProperty(r,"x",{get(){return this._x},set(t){this._x=t,e()}}),r.y!=null&&Object.defineProperty(r,"y",{get(){return this._y},set(t){this._y=t,e()}}),r.z!=null&&Object.defineProperty(r,"z",{get(){return this._z},set(t){this._z=t,e()}}),typeof r.copy=="function"){const t=r.copy;r.copy=function(n){const i=t.call(this,n);return e(),i}}e()}const s2=`precision highp float;

uniform vec3 uColor;

#ifdef SIXTY_MAP
	uniform sampler2D tMap;
	varying vec2 vMapUv;
#endif

uniform float uMetalness;
uniform float uRoughness;

#ifdef SIXTY_ARMMAP
	uniform sampler2D tArmMap;
	uniform float uRoughnessMapIntensity;
	uniform float uMetalnessMapIntensity;
	varying vec2 vArmMapUv;
#endif

#ifdef SIXTY_AOMAP
	uniform sampler2D tAoMap;
	varying vec2 vAoMapUv;
#endif

#if defined(SIXTY_ARM_AS_AO) || defined(SIXTY_ARMMAP) || defined(SIXTY_AOMAP)
	uniform float uAoMapIntensity;
#endif

uniform vec3 uEmissive;

uniform vec3 uAmbient;
uniform float uAmbientIntensity;

#ifdef SIXTY_EMISSIVEMAP
	uniform sampler2D tEmissiveMap;
	varying vec2 vEmissiveMapUv;
#endif

#ifdef SIXTY_NORMALMAP
	uniform sampler2D tNormalMap;
	varying vec2 vNormalMapUv;
	uniform vec2 uNormalScale;

#endif

#ifdef SIXTY_ENVMAP
	uniform sampler2D tEnvMap;
	uniform mat3 uEnvMapRotation;
	uniform float uEnvMapIntensity;
#endif

uniform float uOpacity;
#ifdef USE_ALPHATEST
	uniform float uAlphaTest;
#endif

#ifdef SIXTY_ALPHAMAP
	uniform sampler2D tAlphaMap;
#endif

#ifdef USE_UV
	varying vec2 vUv;
#endif

varying vec3 vNormal;
varying vec3 vViewPosition;

#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535

#ifndef saturate
	#define saturate(a) clamp(a, 0.0, 1.0)
#endif

struct ReflectedLight {
    vec3 directDiffuse; 
    vec3 directSpecular; 
    vec3 indirectDiffuse; 
    vec3 indirectSpecular; 
};

struct PBRMaterial {
    vec3 diffuseColor;
    float roughness;
    vec3 specularColor;
    float specularF90;
};

#ifdef SIXTY_ENVMAP
	vec3 inverseTransformDirection(vec3 dir, mat4 matrix) {
		return normalize((vec4(dir, 0.0) * matrix).xyz);
	}
	
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace(vec3 direction) {
		vec3 absDirection = abs(direction);
		float face = - 1.0;
		if (absDirection.x > absDirection.z) {
			if (absDirection.x > absDirection.y)
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if (absDirection.z > absDirection.y)
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}

		return face;

	}

	vec2 getUV(vec3 direction, float face) {
		vec2 uv;
		if (face == 0.0) {
			uv = vec2(direction.z, direction.y) / abs(direction.x);
		} else if (face == 1.0) {
			uv = vec2(- direction.x, - direction.z) / abs(direction.y);
		} else if (face == 2.0) {
			uv = vec2(- direction.x, direction.y) / abs(direction.z);
		} else if (face == 3.0) {
			uv = vec2(- direction.z, direction.y) / abs(direction.x);
		} else if (face == 4.0) {
			uv = vec2(- direction.x, direction.z) / abs(direction.y);
		} else {
			uv = vec2(direction.x, direction.y) / abs(direction.z);
		}
		return 0.5 * (uv + 1.0);
	}

	vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
		float face = getFace(direction);

		float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
		mipInt = max(mipInt, cubeUV_minMipLevel);
		float faceSize = exp2(mipInt);
		highp vec2 uv = getUV(direction, face) * (faceSize - 2.0) + 1.0;
		if (face > 2.0) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * (exp2(CUBEUV_MAX_MIP) - faceSize);
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		return texture2D(envMap, uv).rgb;
	}

	#define cubeUV_r0 1.0
	#define cubeUV_m0 -2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 -1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip(float roughness) {
		float mip = 0.0;

		if (roughness >= cubeUV_r1) {
			mip = (cubeUV_r0 - roughness) * (cubeUV_m1 - cubeUV_m0) / (cubeUV_r0 - cubeUV_r1) + cubeUV_m0;
		} else if (roughness >= cubeUV_r4) {
			mip = (cubeUV_r1 - roughness) * (cubeUV_m4 - cubeUV_m1) / (cubeUV_r1 - cubeUV_r4) + cubeUV_m1;
		} else if (roughness >= cubeUV_r5) {
			mip = (cubeUV_r4 - roughness) * (cubeUV_m5 - cubeUV_m4) / (cubeUV_r4 - cubeUV_r5) + cubeUV_m4;
		} else if (roughness >= cubeUV_r6) {
			mip = (cubeUV_r5 - roughness) * (cubeUV_m6 - cubeUV_m5) / (cubeUV_r5 - cubeUV_r6) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2(1.16 * roughness);		
		}

		return mip;
	}

	vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
		float mip = clamp(roughnessToMip(roughness), cubeUV_m0, CUBEUV_MAX_MIP);
		float mipF = fract(mip);
		float mipInt = floor(mip);
		vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
		if((mipF == 0.0)) {
			return vec4(color0, 1.0);
		} else {
			vec3 color1 = bilinearCubeUV(envMap, sampleDir, (mipInt + 1.0));
			return vec4(mix(color0, color1, mipF), 1.0);
		}
	}

	vec3 getIBLIrradiance(const in vec3 normal, const in sampler2D envMap, const in float envMapIntensity, const in mat3 envMapRotation) {
    	vec3 worldNormal = inverseTransformDirection(normal, viewMatrix);
		vec4 envMapColor = textureCubeUV(envMap, envMapRotation * worldNormal, 1.0);
		return PI * envMapColor.rgb * envMapIntensity;

	}

	vec3 getIBLRadiance(const in vec3 viewDir, const in vec3 normal, const in float roughness, const in sampler2D envMap, const in float envMapIntensity, const in mat3 envMapRotation) {
		vec3 reflectVec = reflect(- viewDir, normal);
		reflectVec = normalize(mix(reflectVec, normal, roughness * roughness));
		reflectVec = inverseTransformDirection(reflectVec, viewMatrix);
		vec4 envMapColor = textureCubeUV(envMap, envMapRotation * reflectVec, roughness);

		return envMapColor.rgb * envMapIntensity;
	}

#endif
vec3 getAmbientLightIrradiance(vec3 ambientLightColor) {
    vec3 irradiance = ambientLightColor;
    return irradiance;
}

vec3 BRDF_Lambert(const in vec3 diffuseColor) {
	return RECIPROCAL_PI * diffuseColor;
}

void RE_IndirectDiffuse(const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in PBRMaterial pbrMaterial, inout ReflectedLight reflectedLight) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(pbrMaterial.diffuseColor);
}

vec2 DFGApprox(const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate(dot(normal, viewDir));
	const vec4 c0 = vec4(- 1, - 0.0275, - 0.572, 0.022);
	const vec4 c1 = vec4(1, 0.0425, 1.04, - 0.04);
	vec4 r = roughness * c0 + c1;
	float a004 = min(r.x * r.x, exp2(- 9.28 * dotNV)) * r.x + r.y;
	vec2 fab = vec2(- 1.04, 1.04) * a004 + r.zw;
	return fab;
}

void computeMultiscattering(const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter) {
	vec2 fab = DFGApprox(normal, viewDir, roughness);
	vec3 Fr = specularColor;
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + (1.0 - Fr) * 0.047619;	vec3 Fms = FssEss * Favg / (1.0 - Ems * Favg);

	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}

void RE_IndirectSpecular(const in vec3 radiance, const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in PBRMaterial pbrMaterial, inout ReflectedLight reflectedLight) {
	vec3 singleScattering = vec3(0.);
	vec3 multiScattering = vec3(0.);

	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	
	computeMultiscattering(geometryNormal, geometryViewDir, pbrMaterial.specularColor, pbrMaterial.specularF90, pbrMaterial.roughness, singleScattering, multiScattering);
	
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = pbrMaterial.diffuseColor * (1. - max(max(totalScattering.r, totalScattering.g), totalScattering.b));
	
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}

float computeSpecularOcclusion(const in float dotNV, const in float ambientOcclusion, const in float roughness) {
	return saturate(pow(dotNV + ambientOcclusion, exp2(- 16.0 * roughness - 1.0)) - 1.0 + ambientOcclusion);
}

mat3 getTangentFrame(const in vec3 eyePos, const in vec3 surfaceNormal, const in vec2 uv) {
		vec3 posDx = dFdx(eyePos);
		vec3 posDy = dFdy(eyePos);

		vec2 uvDx = dFdx(uv);
		vec2 uvDy = dFdy(uv); 

		uvDx = max(uvDx, vec2(1e-2));
		uvDy = max(uvDy, vec2(1e-2));

		uvDx = min(uvDx, vec2(1.));
		uvDy = min(uvDy, vec2(1.));

		vec3 N = surfaceNormal;

		vec3 q1perp = cross(posDy, N);
		vec3 q0perp = cross(N, posDx);
		
		
		vec3 T = q1perp * uvDx.x + q0perp * uvDy.x;
		vec3 B = q1perp * uvDx.y + q0perp * uvDy.y;
		
		float det = max(dot(T, T), dot(B, B));
		float scale = (det == 0.0) ? 0.0 : inversesqrt(det);
		
		return mat3(T * scale, B * scale, N);
}

#define SIXTY_UNIFORMS_AREA

void main() {
	#define SIXTY_START_AREA

	vec4 diffuseColor = vec4(uColor, uOpacity);

	#ifdef SIXTY_MAP
		vec4 baseColorMapSample = texture2D(tMap, vMapUv);

		#ifdef SIXTY_ALPHAMAP
			diffuseColor.rgb *= baseColorMapSample.rgb;
			diffuseColor.a *= texture2D(tAlphaMap, vUv).r;
		#else
			diffuseColor *= baseColorMapSample;
		#endif

		#define SIXTY_MAP_AREA
	#endif

	#ifdef USE_ALPHATEST
		if (diffuseColor.a < uAlphaTest) discard;
	#endif

	
	vec4 armSample = vec4(1);

	#ifdef SIXTY_ARMMAP
		#ifdef SIXTY_AOMAP
			armSample.gb *= texture2D(tArmMap, vArmMapUv).gb;
		#else
			armSample.rgb *= texture2D(tArmMap, vArmMapUv).rgb;
		#endif

		armSample.gb *= vec2(uRoughnessMapIntensity, uMetalnessMapIntensity);

		#define SIXTY_ARMMAP_AREA
	#endif

	#ifdef SIXTY_AOMAP
		armSample.r *= texture2D(tAoMap, vAoMapUv).r;
	#endif

	float roughness = clamp(armSample.g * uRoughness, 0.04, 1.0);
	float metallic = clamp(armSample.b * uMetalness, 0.04, 1.0);

	vec3 nonPerturbatedNormal = vNormal;
	
	float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
	vec3 normal = normalize(vNormal);
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif

	#ifdef SIXTY_NORMALMAP
		mat3 tbn = getTangentFrame(-vViewPosition, normal, vNormalMapUv);

		#if defined(DOUBLE_SIDED)
			tbn[0] *= faceDirection;
			tbn[1] *= faceDirection;
		#endif

		vec3 nTex = texture2D(tNormalMap, vNormalMapUv).rgb * 2. - 1.;
		nTex.xy *= uNormalScale;
		normal = normalize(tbn * nTex);

		#define SIXTY_NORMALMAP_AREA
	#endif

	#define SIXTY_NORMAL_AREA

	ReflectedLight reflectedLight = ReflectedLight(vec3(0.), vec3(0.), vec3(0.), vec3(0.));

	PBRMaterial pbrMaterial = PBRMaterial(vec3(0.), 0., vec3(0.), 0.);
	pbrMaterial.diffuseColor = diffuseColor.rgb * (1. - metallic);

	vec3 dxy = max(abs(dFdx(nonPerturbatedNormal)), abs(dFdy(nonPerturbatedNormal)));
	float geometryRoughness = max(max(dxy.x, dxy.y), dxy.z);

	pbrMaterial.roughness = max(roughness, 0.0525);
	pbrMaterial.roughness += geometryRoughness;
	pbrMaterial.roughness = min(pbrMaterial.roughness, 1.0);

	pbrMaterial.specularColor = mix(vec3(0.04), diffuseColor.xyz, metallic);
	pbrMaterial.specularF90 = 1.;

	#define SIXTY_PBR_AREA

	vec3 geometryPosition = -vViewPosition;
	vec3 geometryNormal = normal;
	vec3 geometryViewDir = isOrthographic ? vec3(0., 0., 1.) : normalize(vViewPosition);

	vec3 ambientLightColor = uAmbient * uAmbientIntensity;
	
    vec3 iblIrradiance = vec3(0.);
	vec3 radiance = vec3(0.);
	vec3 irradiance = getAmbientLightIrradiance(ambientLightColor);

	#ifdef SIXTY_ENVMAP
		iblIrradiance += getIBLIrradiance(geometryNormal, tEnvMap, uEnvMapIntensity, uEnvMapRotation);
		radiance += getIBLRadiance(geometryViewDir, geometryNormal, pbrMaterial.roughness, tEnvMap, uEnvMapIntensity, uEnvMapRotation);

		#define SIXTY_ENVMAP_AREA
	#endif

	
	RE_IndirectDiffuse(irradiance, geometryPosition, geometryNormal, geometryViewDir, pbrMaterial, reflectedLight);
	RE_IndirectSpecular(radiance, iblIrradiance, geometryPosition, geometryNormal, geometryViewDir, pbrMaterial, reflectedLight);

	#if defined(SIXTY_ARM_AS_AO) || defined(SIXTY_AOMAP)
		float occlusion = (armSample.r - 1.) * uAoMapIntensity + 1.;
		reflectedLight.indirectDiffuse *= occlusion;

		#ifdef SIXTY_ENVMAP
			float dotNV = saturate(dot(geometryNormal, geometryViewDir));
			reflectedLight.indirectSpecular *= computeSpecularOcclusion(dotNV, occlusion, pbrMaterial.roughness);
		#endif

		#define SIXTY_AOMAP_AREA
	#endif

	vec3 totalEmissiveRadiance = uEmissive;
	#ifdef SIXTY_EMISSIVEMAP
		totalEmissiveRadiance *= texture2D(tEmissiveMap, vEmissiveMapUv).rgb;

		#define SIXTY_EMISSIVEMAP_AREA
	#endif

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef OPAQUE
		diffuseColor.a = 1.0;
	#endif

	gl_FragColor = vec4(outgoingLight, diffuseColor.a);

	#ifdef TONE_MAPPING
		gl_FragColor.rgb = toneMapping(gl_FragColor.rgb);
	#endif

	gl_FragColor = linearToOutputTexel(gl_FragColor);

	#ifdef PREMULTIPLIED_ALPHA
		gl_FragColor.rgb *= gl_FragColor.a;
	#endif
	
	#ifdef DITHERING
		gl_FragColor.rgb = dithering(gl_FragColor.rgb);
	#endif

	#define SIXTY_END_AREA
	#define DEBUG_NONE 0
#define DEBUG_UV 1
#define DEBUG_UV1 2
#define DEBUG_UV2 3
#define DEBUG_UV3 4
#define DEBUG_NORMAL_TEXTURE 5
#define DEBUG_NORMAL_SHADING 6
#define DEBUG_NORMAL_GEOMETRY 7
#define DEBUG_TANGENT 8
#define DEBUG_BITANGENT 9
#define DEBUG_ALPHA 10
#define DEBUG_OCCLUSION 11
#define DEBUG_EMISSIVE 12
#define DEBUG_METALLIC 13
#define DEBUG_ROUGHNESS 14
#define DEBUG_BASE_COLOR 15
#define DEBUG_RADIANCE 16
#define DEBUG_IBL_IRRADIANCE 17

#ifdef DEBUG
    #if DEBUG && DEBUG != DEBUG_NONE
        gl_FragColor.a = 1.;
    #endif

    #if DEBUG == DEBUG_UV && defined(USE_UV)
        gl_FragColor.rgb = vec3(vUv, 0);
    #endif

    #if DEBUG == DEBUG_UV1 && defined(USE_UV1)
        gl_FragColor.rgb = vec3(vUv1, 0);
    #endif

    #if DEBUG == DEBUG_UV2 && defined(USE_UV2)
        gl_FragColor.rgb = vec3(vUv2, 0);
    #endif

    #if DEBUG == DEBUG_UV3 && defined(USE_UV3)

        gl_FragColor.rgb = vec3(vUv3, 0);
    #endif

    #if DEBUG == DEBUG_NORMAL_TEXTURE && defined(SIXTY_NORMAL_MAP)
        gl_FragColor.rgb = vec3(nTex + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_NORMAL_SHADING
        gl_FragColor.rgb = vec3(normal + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_NORMAL_GEOMETRY
        gl_FragColor.rgb = vec3(geometryNormal + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_TANGENT && defined(SIXTY_NORMAL_MAP)
        gl_FragColor.rgb = (tbn[0] + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_BITANGENT && defined(SIXTY_NORMAL_MAP)
        gl_FragColor.rgb = (tbn[1] + 1.) * .5;
    #endif

    #if DEBUG == DEBUG_ALPHA
        gl_FragColor.rgb = vec3(diffuseColor.a);
    #endif

    #if DEBUG == DEBUG_OCCLUSION && defined(SIXTY_AO_MAP)
        gl_FragColor.rgb = vec3(occlusion);
    #endif

    #if DEBUG == DEBUG_EMISSIVE
        gl_FragColor = linearToOutputTexel(vec4(totalEmissiveRadiance, 1.));
    #endif

    #if DEBUG == DEBUG_METALLIC
        gl_FragColor.rgb = vec3(metallic);
    #endif

    #if DEBUG == DEBUG_ROUGHNESS
        gl_FragColor.rgb = vec3(roughness);
    #endif

    #if DEBUG == DEBUG_BASE_COLOR
        gl_FragColor.rgb = diffuseColor.rgb;
    #endif

    #if DEBUG == DEBUG_RADIANCE
        gl_FragColor.rgb = radiance;
    #endif

    #if DEBUG == DEBUG_IBL_IRRADIANCE
        gl_FragColor.rgb = iblIrradiance;
    #endif
#endif
}`,o2=Ge(s2,"fragmentShader"),a2=`#ifdef USE_UV
	varying vec2 vUv;
#endif

varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vViewPosition;

#ifdef SIXTY_MAP
	uniform mat3 uMapTransform;
	varying vec2 vMapUv;
#endif

#ifdef SIXTY_ARMMAP
	uniform mat3 uArmMapTransform;
	varying vec2 vArmMapUv;
#endif

#ifdef SIXTY_AOMAP
	uniform mat3 uAoMapTransform;
	varying vec2 vAoMapUv;
#endif

#ifdef SIXTY_EMISSIVEMAP
	uniform mat3 uEmissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif

#ifdef SIXTY_NORMALMAP
	uniform mat3 uNormalMapTransform;
	varying vec2 vNormalMapUv;
#endif

#define SIXTY_UNIFORMS_AREA

void main() {
	#define SIXTY_START_AREA

	#ifdef USE_UV
		vUv = uv;
	#endif

	#ifdef SIXTY_MAP
		vMapUv = (uMapTransform * vec3(SIXTY_MAP_UV, 1.)).xy;
	#endif

	#ifdef SIXTY_ARMMAP
		vArmMapUv = (uArmMapTransform * vec3(SIXTY_ARMMAP_UV, 1.)).xy;
	#endif

	#ifdef SIXTY_AOMAP
		vAoMapUv = (uAoMapTransform * vec3(SIXTY_AOMAP_UV, 1.)).xy;
	#endif

	#ifdef SIXTY_EMISSIVEMAP
		vEmissiveMapUv = (uEmissiveMapTransform * vec3(SIXTY_EMISSIVEMAP_UV, 1.)).xy;
	#endif

	#ifdef SIXTY_NORMALMAP
		vNormalMapUv = (uNormalMapTransform * vec3(SIXTY_NORMALMAP_UV, 1.)).xy;
	#endif	

	vec3 objectNormal = normal;
	vec3 transformedNormal = objectNormal;

	#ifdef USE_INSTANCING
		mat3 im = mat3(instanceMatrix);
		transformedNormal /= vec3(dot(im[0],im[0]), dot(im[1],im[1]), dot(im[2],im[2]));
		transformedNormal = im * transformedNormal;
	#endif
	
	transformedNormal = normalMatrix * transformedNormal;

	vNormal = normalize(transformedNormal);

	vec3 transformed = position; 
	#define SIXTY_TRANSFORMED_AREA

	vec4 mvPosition = vec4(transformed, 1.);
	
	#ifdef USE_INSTANCING
		#define SIXTY_INSTANCING_START_AREA
		
		mvPosition = instanceMatrix * mvPosition;
	#endif

	vPosition = vec3(mvPosition);
	mvPosition = modelViewMatrix * mvPosition;

    vViewPosition = -mvPosition.xyz;

	gl_Position = projectionMatrix * mvPosition;

	#define SIXTY_END_AREA

	#define DEBUG_NONE 0
#define DEBUG_UV 1
#define DEBUG_UV1 2
#define DEBUG_UV2 3
#define DEBUG_UV3 4
#define DEBUG_NORMAL_TEXTURE 5
#define DEBUG_NORMAL_SHADING 6
#define DEBUG_NORMAL_GEOMETRY 7
#define DEBUG_TANGENT 8
#define DEBUG_BITANGENT 9
#define DEBUG_ALPHA 10
#define DEBUG_OCCLUSION 11
#define DEBUG_EMISSIVE 12
#define DEBUG_METALLIC 13
#define DEBUG_ROUGHNESS 14
#define DEBUG_BASE_COLOR 15
#define DEBUG_RADIANCE 16
#define DEBUG_IBL_IRRADIANCE 17

#ifdef DEBUG
    #if DEBUG == DEBUG_UV1 && defined(USE_UV1)
        vUv1 = uv1;
    #endif

    #if DEBUG == DEBUG_UV2 && defined(USE_UV2)
        vUv2 = uv2;
    #endif

    #if DEBUG == DEBUG_UV3 && defined(USE_UV3)
        vUv3 = uv3;
    #endif
#endif
}`,l2=Ge(a2,"vertexShader"),c2=new Ke;class Gs extends mt{constructor(e={},t=null,n={},i=Gs.PROPS_WITH_UV){super({...Gs.filterProps(e,Gs.GENERIC_PROPS)}),this.propsWithUV=i,this.propsWithUV=i,this.parseParams(e),this.isPBRMaterial=!0,this.type="PBRMaterial",this.side=lr;const s={color:new Oe(16777215),metalness:0,roughness:1,map:null,emissive:new Oe(0),emissiveMap:null,ambient:new Oe(16777215),ambientIntensity:1,armMap:null,aoMap:null,metalnessMapIntensity:1,roughnessMapIntensity:1,aoMapIntensity:1,normalScale:new Xe(1,1),normalMap:null,envMap:N.getPlugin("render")?.scene.environment,envMapIntensity:1,envMapRotation:new In,alphaMap:null,alphaTest:0,opacity:1,...n};this.params=e,this.setDefaults(s),this.applyParams(Gs.filterProps(e,Object.keys(s))),this.armAsAo=e.armMap?.isTexture&&e.aoMap?.isTexture&&e.armMap===e.aoMap,l2.use(this),o2.use(this)}static GENERIC_PROPS=["alphaHash","alphaTest","alphaToCoverage","blendAlpha","blendColor","blendDst","blendDstAlpha","blendEquation","blendEquationAlpha","blendSrc","blendSrcAlpha","blending","colorWrite","defines","depthFunc","depthTest","depthWrite","dithering","forceSinglePass","format","name","opacity","polygonOffset","side","stencilFail","stencilFunc","stencilFuncMask","stencilRef","stencilWrite","stencilWriteMask","stencilZFail","stencilZPass","toneMapped","transparent","userData","vertexColors","visible"];static PROPS_WITH_UV=["map","armMap","aoMap","emissiveMap","normalMap"];color;metalness;roughness;map;emissive;emissiveMap;ambient;ambientIntensity;armMap;aoMap;metalnessMapIntensity;roughnessMapIntensity;aoMapIntensity;normalScale;normalMap;envMap;envMapIntensity;envMapRotation;alphaMap;params;isPBRMaterial;_envMapRotation;set armAsAo(e){e?this.defines.SIXTY_ARM_AS_AO=1:this.defines.SIXTY_ARM_AS_AO=void 0,this.needsUpdate=!0}get armAsAo(){return Object.hasOwn(this.defines,"SIXTY_ARM_AS_AO")}setDefaults(e){for(const t in e){const n=e[t],i=this.propsWithUV.includes(t);t==="envMapRotation"?(this._envMapRotation=new et,kf(this,t,this._envMapRotation),r2(n,()=>this.uniforms.uEnvMapRotation.value.setFromMatrix4(c2.makeRotationFromEuler(n)))):i2(this,t,i),this[t]=n}}applyParams(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`Material: '${t}' is not a property of ${this.type}.`);continue}i?.isColor&&n?.isColor?i.set(n):i?.isVector3&&n?.isVector3||i?.isVector2&&n?.isVector2||i?.isEuler&&n?.isEuler?i.copy(n):i!==void 0&&n!=null&&(this[t]=n)}}parseParams(e){e.armMap=e.armMap||e.metalnessMap||e.roughnessMap||null,e.metalnessMap=void 0,e.roughnessMap=void 0}static filterProps(e,t){return Object.keys(e).filter(n=>t.includes(n)).reduce((n,i)=>(n[i]=e[i],n),{})}}let u2=0;function $_(r,e,t){const n=()=>{};return{c:++u2,chunks:r,use:s=>{const o=s.material||s;return o[e]=h2(r,o[e]),o.needsUpdate=!0,s},unuse:n,clear:n}}const h2=(r="",e="")=>(d2(r).forEach(({target:n,replace:i})=>{e=e.replace(n,i)}),e),d2=(r,e="/// #replace")=>{const t=[],n=r.trim().split(`
`);for(let i=0;i<n.length;i++){const s=n[i].trim();if(s.startsWith(e)){const o=s.replace(e,""),a=[];let l=i+1;for(;l<n.length&&!n[l].trim().startsWith(e);){const u=n[l].trim();u&&a.push(u),l++}const c=a.join(`
`);t.push({target:o.trim(),replace:c.trim()}),i=l-1}}return t},f2=`/// #replace #define SIXTY_UNIFORMS_AREA
#define SIXTY_UNIFORMS_AREA

uniform sampler2D uNormalNoise;

/// #replace #define SIXTY_NORMAL_AREA
#define SIXTY_NORMAL_AREA

mat3 tbn = getTangentFrame(-vViewPosition, normal, vUv);

#if defined(DOUBLE_SIDED)
    tbn[0] *= faceDirection;
    tbn[1] *= faceDirection;
#endif

vec3 nTex = vec3((texture2D(uNormalNoise, vUv * 10.).rg - .5), 1.);
nTex.xy *= .2;
normal = normalize(tbn * nTex);

/// #replace #define SIXTY_END_AREA
#define SIXTY_END_AREA

gl_FragColor.rgb += vec3(0., .2, 1.) * abs(sin(dot(vNormal, vec3(1.)) * 2.) * .1) * 2.;`,p2=$_(f2,"fragmentShader"),m2="",g2=$_(m2,"vertexShader");class _2 extends Gs{constructor(){super(),this.defines.USE_UV=1,this.uniforms.uNormalNoise={value:Kt.nearestTexture},this.side=2,this.forceSinglePass=!0,this.blending=ji,p2.use(this),g2.use(this)}}const v2=`precision highp float;

uniform sampler2D uSolid, uNoise;
uniform float uDrawSatVisible;
uniform vec2 uResolution;
uniform vec3 uMainSatPosition;

varying vec2 vUv;
varying vec3 vWorldPosition, vNormal;

#define PI2 6.28318530718
#define PI 3.1415926536

void main() {
    float dtc = length(vWorldPosition - uMainSatPosition);
	
	float light = dot(vNormal, vec3(1.)) * .25;
	float lines = (length(vUv) * .5 + length(fract(vNormal)) * .5 + length(fract(vUv * 10.)) * .1);
	float progress = smoothstep(uDrawSatVisible + .1, uDrawSatVisible, vUv.y + (texture2D(uSolid, vUv * 2.).b - .5) * .3);
	progress *= 1. + smoothstep(1., 0., progress) * 4.;
	if(progress < .001) discard;
	gl_FragColor = abs(vec4(light * progress, lines * progress, vUv.y / 12., 1.));
}`,x2=Ge(v2,"fragmentShader"),y2=`varying vec2 vUv;
varying vec3 vWorldPosition, vNormal;

void main() {
	vUv = uv;

	vec3 transformed = position;
	vec3 objectNormal = normal;
	vec3 transformedNormal = objectNormal;

	#ifdef USE_INSTANCING
		mat3 im = mat3(instanceMatrix);
		transformedNormal /= vec3(dot(im[0],im[0]), dot(im[1],im[1]), dot(im[2],im[2]));
		transformedNormal = im * transformedNormal;
	#endif
	
	transformedNormal = normalMatrix * transformedNormal;

	vNormal = normalize(transformedNormal);

	vec4 mvPosition = vec4(transformed, 1.);
	vWorldPosition = vec3(modelMatrix * mvPosition);

	#ifdef USE_INSTANCING
		vWorldPosition = vec3(modelMatrix * instanceMatrix * vec4(transformed, 1.));
		mvPosition = instanceMatrix * mvPosition;
	#endif

    gl_Position = projectionMatrix * modelViewMatrix * mvPosition;
}`,S2=Ge(y2,"vertexShader");class T2 extends mt{constructor(){super(),this.defines.USE_UV=1,this.uniforms.uSolid={value:N.assets.get("textures","noise")},this.uniforms.uNoise={value:Kt.nearestTexture},this.uniforms.uMainSatPosition=F.uMainSatPosition,this.uniforms.uDrawSatVisible=F.uDrawSatVisible,this.transparent=!0,this.depthTest=!1,this.depthWrite=!1,this.side=2,this.forceSinglePass=!0,this.blending=ji,x2.use(this),S2.use(this),N.render.canChangeAccordingRenderPass.push(this)}setRenderPass(e=0){this.depthTest=e===0}}const b2=`precision highp float;

uniform sampler2D tNoise, tEdges;
uniform float uTime, uAppear, uGridSub;

varying vec2 vUv;
varying vec3 vNormal, vPosition;

float sGrid(vec2 uv, float size) {
	return
		smoothstep(.5 - size, .5, abs(fract(uv.x * 10.) - .5)) +
		smoothstep(.5 - size, .5, abs(fract(uv.y * 10.) - .5));
}

float pow2(float x) {return x*x;}

void main() {
    vec3 color = vec3(0.02);
    float alpha = .5;

    float light = smoothstep(.8, 1.5, (abs(dot(normalize(vNormal), normalize(vec3(1., 0., 1.)))))) * 10.;
    color += light * .5 * (1. + uGridSub * 10.);

    vec2 gUv = vUv * vec2(1., 1.) * 10.;
    vec4 noise = texture2D(tNoise, gUv * .08 * vec2(1., .1));
    
    
    

    gl_FragColor = vec4(color, alpha);

    float tPosY = vPosition.y;
    gl_FragColor.a *= smoothstep(uAppear, uAppear - .1, smoothstep(-2., 5., tPosY));

    gl_FragColor.a *= .05 + light * .2 +
        (smoothstep(.95, 1., sin(vPosition.y * 80.)) + smoothstep(.96, 1., sin(atan(vPosition.x, vPosition.z) * 40.))) * (smoothstep(1., .0, abs(atan(vPosition.x, vPosition.z)) - .5) + .2) * (1. - uGridSub * .95) * .5 +
        texture2D(tEdges, vUv).r * .1;

    if(gl_FragColor.a < .01) discard;
    
    gl_FragColor.rgb += smoothstep(0.2, .0, abs(smoothstep(-2. - noise.b * .4, 6., tPosY) - uAppear)) * 2.;
    gl_FragColor.rgb = vec3(.2 + uGridSub * .5);
}`,M2=Ge(b2,"fragmentShader"),E2=`uniform float uTime;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vUv = uv;
    vNormal = normalMatrix * normal;
	vPosition = vec3(position);
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.);

}`,w2=Ge(E2,"vertexShader");let A2=class extends mt{constructor(e){super({uniforms:{tEdges:{value:e.map},tNoise:{value:Kt.nearestTexture},uAppear:F.uFStorageAppear,uGridSub:F.uFFuselageAppear},transparent:!0,side:2,depthTest:!1,forceSinglePass:!0,blending:ji}),M2.use(this),w2.use(this)}};const R2=`precision highp float;

uniform sampler2D tNoise, tEdges;
uniform float uTime, uAppear, uGridSub;

varying float vOpacity;
varying vec2 vUv;
varying vec3 vNormal, vPosition;

float sGrid(vec2 uv, float size) {
	return
		smoothstep(.5 - size, .5, abs(fract(uv.x * 10.) - .5)) +
		smoothstep(.5 - size, .5, abs(fract(uv.y * 10.) - .5));
}

float pow2(float x) {return x*x;}

void main() {
    vec3 color = vec3(0.02);
    float alpha = .5;

    float light = smoothstep(.8, 1.5, (abs(dot(normalize(vNormal), normalize(vec3(1., 0., 1.)))))) * 10.;
    color += light * .1 * (1. + uGridSub * 1.);

    vec2 gUv = vUv * vec2(1., 1.) * 10.;
    vec4 noise = texture2D(tNoise, gUv * .08 * vec2(1., .1));
    
    
    

    gl_FragColor = vec4(color, alpha);

    float tPosY = vPosition.y;
    gl_FragColor.a *= smoothstep(uAppear, uAppear - .1, smoothstep(-2., 5., tPosY));

    gl_FragColor.a *= .05 + light * .2 +
        (
            smoothstep(.996, 1., sin(vPosition.y * 15.)) + 
            smoothstep(.996, 1., sin(vPosition.x * 15.))
        ) * (1. - uGridSub * .8) * .3 +
        texture2D(tEdges, vUv).r * .9;

    gl_FragColor *= vOpacity;

    if(gl_FragColor.a < .01) discard;
    
    gl_FragColor.rgb += smoothstep(0.2, .0, abs(smoothstep(-2. - noise.b * .4, 6., tPosY) - uAppear)) * 2.;
    gl_FragColor.rgb = vec3(.2 + uGridSub * .1);
}`,C2=Ge(R2,"fragmentShader"),P2=`uniform float uTime;

varying float vOpacity;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vUv = uv;
    vNormal = normalMatrix * normal;
	vPosition = vec3(position);
    vOpacity = (instanceColor.r + instanceColor.g + instanceColor.b) / 3.;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.);

}`,D2=Ge(P2,"vertexShader");let U2=class extends mt{constructor(e){super({uniforms:{tEdges:{value:e.map},tNoise:{value:Kt.nearestTexture},uAppear:F.uFStorageAppear,uGridSub:F.uFFuselageAppear},transparent:!0,side:2,depthTest:!1,forceSinglePass:!0,blending:ji}),C2.use(this),D2.use(this)}};const I2=`precision highp float;

uniform sampler2D tNoise;
uniform vec3 uColor;
uniform float ufTrailsProgress, uTime, uFTrailsOpacity;

varying float vDecay;
varying vec2 vUv;
varying vec3 vViewNormal;

void main() {
    float time = (uTime * (1. + sin(vDecay * 1.) * .5)) + vDecay * 1.;

    vec3 color = mix(uColor * 5., vec3(1.), step(fract(sin(vDecay * 9.1 + uTime)), .9));
    float p = 1. - fract(-vUv.y * 7. + time);
    float alpha = smoothstep(.5, .95, p) * smoothstep(1., .99, p);
    color += alpha * .5;
    if(alpha < .01) discard;

    gl_FragColor = vec4(color, alpha * uFTrailsOpacity) * .5;
    
}`,L2=Ge(I2,"fragmentShader"),N2=`uniform float uTime;

varying float vDecay;
varying vec2 vUv;
varying vec3 vViewNormal;

#define PI 3.1415926536

void main() {
    vUv = uv;
    vec3 pos = position;

    vDecay = floor((pos.x + pos.z) * 6.5);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}`,O2=Ge(N2,"vertexShader");class F2 extends mt{constructor(){super({uniforms:{tNoise:{value:Kt.texture},uColor:{value:new Oe("#2b81e3")},uTime:F.uTime,uFTrailsOpacity:F.uFTrailsOpacity,ufTrailsProgress:F.ufTrailsProgress},transparent:!0,blending:ji,defines:{USE_INSTANCING:1}}),L2.use(this),O2.use(this)}}const B2=`precision highp float;

uniform sampler2D tNoise, tEdges;
uniform float uTime, uAppear;

varying vec2 vUv;
varying vec3 vNormal, vPosition;

float sGrid(vec2 uv, float size) {
	return
		smoothstep(.5 - size, .5, abs(fract(uv.x * 10.) - .5)) +
		smoothstep(.5 - size, .5, abs(fract(uv.y * 10.) - .5));
}

float pow2(float x) {return x*x;}

void main() {
    vec3 color = vec3(0.02);
    float alpha = .5;

    float light = smoothstep(.8, 1.5, (abs(dot(normalize(vNormal), normalize(vec3(1., 0., 1.)))))) * 10.;
    color += light * .5;

    vec2 gUv = vUv * vec2(1., 1.) * 10.;
    vec4 noise = texture2D(tNoise, gUv * .08 * vec2(1., .1));
    gUv += (noise.xy - .5) * .01;
    float grid = sGrid(gUv * .25, .01) + sGrid(gUv * 2., .1) * .2;
    color += grid * .2;

    gl_FragColor = vec4(color, alpha);

    float tPosY = vPosition.y;
    gl_FragColor.a *= smoothstep(uAppear, uAppear - .1, smoothstep(-2., 5., tPosY));

    gl_FragColor.a *= .05 + light * .2 +
        (smoothstep(.99, 1., sin(vPosition.y * 40.)) + smoothstep(.99, 1., sin(atan(vPosition.x, vPosition.z) * 30.))) * (smoothstep(1., .0, abs(atan(vPosition.x, vPosition.z)) - .5) + .2) +
        texture2D(tEdges, vUv).r * 10.;

    if(gl_FragColor.a < .01) discard;
    
    gl_FragColor.rgb += smoothstep(0.2, .0, abs(smoothstep(-2. - noise.b * .4, 6., tPosY) - uAppear)) * 2.;
    gl_FragColor.rgb = vec3(.4);
}`,k2=Ge(B2,"fragmentShader"),z2=`uniform float uTime;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vUv = uv;
    vNormal = normalMatrix * normal;
	vPosition = vec3(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);

}`,V2=Ge(z2,"vertexShader");class G2 extends mt{constructor(e){super({uniforms:{tEdges:{value:e.map},tNoise:{value:Kt.nearestTexture},uAppear:F.uFFuselageAppear},transparent:!0,side:2,depthTest:!1,forceSinglePass:!0,blending:ji}),k2.use(this),V2.use(this)}}const H2=`precision highp float;

uniform sampler2D tNearestNoise, uSolidNoise;
uniform vec3 uColor;
uniform vec2 uGridDecay;
uniform float uTime, uGridOpacity;

varying vec2 vUv;

#define PI 3.14159265

float generateStars(vec2 uv) {
	vec3 noise = texture2D(tNearestNoise, uv / 256.).rgb - .5;
	float starMaker = length(fract(uv) - .5 + .5 * noise.rg);
	float star = (smoothstep(0.07, 0., starMaker) + smoothstep(0.3, 0., starMaker) * .1) * smoothstep(.35, .7, noise.b);
	return star;
}

void main() {
	vec3 color = vec3(0.);

	vec2 mainUv = (vUv + uGridDecay * .5) * 3. + .1;
	mainUv.y -= .078;
	mainUv.x += .078;
	vec2 gUv0 = mainUv * 2.;

	color += fract(gUv0.x) * .06;
	color += fract(gUv0.y) * .06;

	color += smoothstep(.999, 1., abs(cos(gUv0.x * PI))) * .1;
	color += smoothstep(.999, 1., abs(cos(gUv0.y * PI))) * .1;

	vec2 gUv1 = mainUv * 10.;
	color += fract(gUv1.x) * .05;
	color += fract(gUv1.y) * .05;

	color += smoothstep(.999, 1., abs(cos(gUv1.x * PI))) * .2;
	color += smoothstep(.999, 1., abs(cos(gUv1.y * PI))) * .2;

	

	vec2 gUv2 = mainUv * vec2(50., 30.);
	color += fract(gUv2.x) * .01;
	color += fract(gUv2.y) * .01;

	color += smoothstep(.99, 1., abs(cos(gUv2.x * PI))) * .2;
	color += smoothstep(.99, 1., abs(cos(gUv2.y * PI))) * .2;
	color += (texture2D(tNearestNoise, gUv1 / 256.).r - .5) * .15;

	vec2 gUv = mainUv * vec2(50., 30.) * 2.;

	color += smoothstep(.999, 1., abs(cos(gUv.x * PI))) * .3;
	color += smoothstep(.999, 1., abs(cos(gUv.y * PI))) * .3;

	vec2 gUv3 = mainUv * vec2(100., 90.);
	
	

	
	

	gl_FragColor = vec4(color, smoothstep(.5, 0., length(vUv - .5)) * uGridOpacity * .2);

}`,W2=Ge(H2,"fragmentShader"),X2=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`,q2=Ge(X2,"vertexShader");class Y2 extends mt{constructor(e,t){super({uniforms:{uColor:{value:new Oe(460553)},tNearestNoise:{value:Kt.nearestTexture},uTime:F.uTime,uGridOpacity:F.uGridOpacity,uGridDecay:F.uGridDecay},transparent:!0,depthTest:!1}),t.renderOrder=-1,W2.use(this),q2.use(this)}}const $2=`precision highp float;

uniform vec3 uColor;

void main() {
    gl_FragColor = vec4(uColor, 1.);
}`,j2=Ge($2,"fragmentShader"),K2=`varying vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    vUv = uv;
}`,Z2=Ge(K2,"vertexShader");class J2 extends mt{constructor(e){super({name:e.name,uniforms:e.uniforms}),j2.use(this),Z2.use(this)}}const Q2=`precision highp float;

uniform sampler2D uNoise;
uniform vec3 uPayloadOrigin, uMainSatPosition;
uniform float uInternalModules, uInternalWires, uTime, uInternalModulesProgress;

varying vec2 vUv;
varying vec3 vNormal, vPosition, vObjectPosition, vWorldPosition;

void main() {
	float dtc = length(vPosition - uMainSatPosition);

	vec2 lUv = vUv;

	float light = smoothstep(.0, 1., abs(dot(vNormal, vec3(1.)))) * .5 + .5;
	gl_FragColor = vec4(max(light, 0.) * vec3(0.2, .5, 1.) + smoothstep(.5, 1., light) * .2, .8);

	float t = uTime * .2;

	vec3 noise = texture2D(uNoise, vUv * .5 * vec2(10., .2)).rgb;

	float wProgress = uInternalModulesProgress;
	
	float wires = (smoothstep(wProgress + .2, wProgress, vUv.x) * (1. + smoothstep(wProgress - .2, wProgress, vUv.x) * 2.)) * uInternalWires * step(vUv.y, 1.) * smoothstep(1.5, 1.2, wProgress) * 2.;
	wires *= 1. + smoothstep(.3, 1., sin(vUv.x * 200. - uTime * 7.)) * step(vUv.x, .8) * step(.1, vUv.x) * 2.;

	vec3 mNoise = texture2D(uNoise, vObjectPosition.zx * .1).rgb;
	float mAppear = smoothstep(uInternalModules, uInternalModules - .2, abs(vObjectPosition.z) * .2 + vObjectPosition.x * .1 + vObjectPosition.y * .1 + mNoise.r * .1);
	float modules = step(.8, vUv.x) * (1. + uInternalModules * 2.5 + dot(vNormal, vec3(1., -.2, 0.5) * 3.) + texture2D(uNoise, vUv.yx * 3.).r + mNoise.g * .2) * mAppear * (1. + smoothstep(1., 0., mAppear) * 20.);

	gl_FragColor.rgb *= (wires + modules) * .3;

}`,eC=Ge(Q2,"fragmentShader"),tC=`varying vec2 vUv;
varying vec3 vNormal, vPosition, vObjectPosition, vWorldPosition;

#ifdef IS_FOV
	uniform float uPayloadFOVProjection;
#endif

#ifdef IS_SIZE
	uniform vec3 uCustomPayloadSize;
#endif

#define PI2 6.28318530718
#define PI 3.1415926536

void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vObjectPosition = position;
    

    vec4 mvPosition = vec4(position, 1.);
	vWorldPosition = vec3(modelMatrix * mvPosition);
    #ifdef IS_SIZE
        mvPosition.y -= .5;
        mvPosition.xyz *= .147 * uCustomPayloadSize.xzy * .002;
        mvPosition.y -= .04;
    #endif

    #ifdef IS_FOV
        float theta = uPayloadFOVProjection / 360. * PI;
        mvPosition.xz *= sin(theta) * 5.;
        mvPosition.y = (mvPosition.y - .5) * cos(theta) * 5. + .53;
    #endif
	#ifdef USE_INSTANCING
		#define SIXTY_INSTANCING_START_AREA
		vWorldPosition = vec3(modelMatrix * instanceMatrix * vec4(position, 1.));
        vObjectPosition = vec3(instanceMatrix * vec4(position, 1.));

        vPosition = vec3(modelMatrix * instanceMatrix * vec4(position, 1.));
		mvPosition = instanceMatrix * mvPosition;
    #else 
        vPosition = vec3(modelMatrix * vec4(position, 1.));
	#endif

    gl_Position = projectionMatrix * modelViewMatrix * mvPosition;
}`,nC=Ge(tC,"vertexShader");class iC extends mt{constructor(e,t){super({uniforms:{uMainSatPosition:F.uMainSatPosition,uInternalWires:F.uInternalWires,uInternalModules:F.uInternalModules,uInternalModulesProgress:F.uInternalModulesProgress,uTime:F.uTime,uPayloadSize:{value:2},uNoise:{value:Kt.nearestTexture}},transparent:!0,forceSinglePass:!0,side:2}),t.renderOrder=-500,this.isGenericMaterial=!0,eC.use(this),nC.use(this)}}const rC=`precision highp float;

uniform sampler2D uDiffuse, uNoise, uSolidNoise, uBusTexture, uGlowTexture, uDrawTexture, uDashboard;

uniform vec2 uResolution, uMouse;
uniform float uAspect, uTime, uDPR, uFrameBorders, uGenSatVisible, uGenPayloadVisible, uDrawSatVisible, uDashboardEnabled, uGenSatDarken, uInternalView, uSatDist, uGenSatFront, uFadeToBlack, uSpaceOpsToLeft;

varying vec2 vUv, vViewportUv;

#define PI2 6.28318530718
#define PI 3.1415926536

#define BLUR_INTENSITY .02

vec3 adjustSaturation(vec3 color, float saturation) {
	return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

float pow2(float x) { return x * x; }
vec2 pow2(vec2 x) { return x * x; }
vec3 pow2(vec3 x) {	return x * x; }

vec2 poisson(vec2 v) {
	return vec2(cos(v.x), sin(v.x)) * v.y;
}

vec3 hueShift(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

float monoEdgeIntensity(sampler2D img, vec2 uv, float t) {
	vec3 texel = vec3(t / uResolution, 0.);

    vec3 nR = texture2D(img, uv + texel.xz).rgb;
    vec3 nL = texture2D(img, uv - texel.xz).rgb;
    
    vec3 nD = texture2D(img, uv - texel.zy).rgb;

    return sqrt(pow2(length(nR - nL)) + pow2(length(nR - nD)) * 2.);
}
vec3 edgeIntensity(sampler2D img, vec2 uv, float t) {
	vec3 texel = vec3(t / uResolution, 0.);

    vec3 nR = texture2D(img, uv + texel.xz).rgb;
    vec3 nL = texture2D(img, uv - texel.xz).rgb;
    
    vec3 nD = texture2D(img, uv - texel.zy).rgb;

    return sqrt(pow2(nR - nL) + pow2(nR - nD) * 2.);
}
vec3 dFIntensity(sampler2D img, vec2 uv, float t) {
	vec3 texel = vec3(t / uResolution, 0.);

    vec3 nt = texture2D(img, uv + texel.xz).rgb;

    return sqrt(pow2(dFdx(nt)) + pow2(dFdy(nt)));
}

vec3 simpleEdgeIntensity(sampler2D img, vec2 uv, float t) {
	vec3 texel = vec3(t / uResolution, 0.);

    return abs(texture2D(img, uv + texel.xy).rgb - texture2D(img, uv - texel.xy).rgb);
}

#define MAIN_BLUE vec3(.0, .4, 1.)

#define BLUE vec3(.0, .4, 1.)
#define BLUE4 vec4(BLUE, 1.)
#define VIOLET vec3(.0, .4, 1.)
#define VIOLET4 vec4(vec3(.3, .4, 1.), 1.)

void renderConcreteSat(inout vec3 color, vec4 n, sampler2D normalTexture, sampler2D glowTexture, vec2 uv) {
	vec3 glowColor = vec3(.3, .45 + uv.y * .1, 1. - length(vUv - .5) * .2);
	float time = uTime * .2;
	float satDistEdgeCompensation =  4.5 / uSatDist;

	
	
	float screenFade = 1.;
	float edgeIntensity = monoEdgeIntensity(normalTexture, uv, (sin(vUv.x * PI) + .5 + smoothstep(1., .5, screenFade) * 2.) * satDistEdgeCompensation);

    float glow = 0.08 + edgeIntensity * 2. * (satDistEdgeCompensation * .5 + .5);
	float dotF = dot(normalize(n.xyz), normalize(vec3(1., 1., 0.)));

	vec4 bN = n;
	float bloom = monoEdgeIntensity(glowTexture, uv, 3.5 * satDistEdgeCompensation) * .25 * 1.25;
	
	
	
	float visible = smoothstep(0., 1., uGenSatVisible + uGenPayloadVisible) * screenFade;
	float surfacesVisible = (1. - uInternalView);

	n.a *= visible;
	bN.a *= visible;

	color *= 1. - n.b * (.1 + uGenSatDarken * .1) * uGenSatFront;
	float sobel = max(0., glow) * .25;

	
	color = mix(color, glowColor * length(bN.rg * 1.5) * .3, clamp(sobel, 0., 1.) * .8 * visible * screenFade);
	color += sobel * .2 * visible * (.5 + smoothstep(-1., 1., sin(bN.r * 8.)) * .2) * (screenFade * screenFade) * smoothstep(.5, 1., screenFade) * 1.2;

	
	color += max(vec3(0.), bloom * bN.a * .3 * (1. - sobel)) * .8;
	
	
	vec3 internalGlow = pow2(dot(n.rgb, vec3(.3, 1.4, .8))) * n.b * mix(MAIN_BLUE * (1. + (sin(vUv.x + vUv.y + 3.5 + bN.r * 3.) * 4.5) * .05), vec3(1.), smoothstep(2.5, 3., n.r) * .15);
	color += internalGlow * .02 * smoothstep(25., 10., length(internalGlow)) * surfacesVisible;

	color *= 1. + sin(dot(bN.rgb, vec3(1.9, -1.2, -.8)) * 2.) * MAIN_BLUE * .3;
	color += abs(n.r) * BLUE * .2 * visible * surfacesVisible * (uGenSatFront * .5 + .5);

	
	
	color += smoothstep(.9, 1.8, length(color)) * n.b * (.8 - uInternalView * .5);

	color += bloom * .6 * (BLUE * .7 + .3);

	
	
	
	
}

void renderDrawedSat(inout vec3 color, vec4 gen) {
	vec4 solid = texture2D(uSolidNoise, vUv * 2.5);

	float drawMode = smoothstep(0., .2, uDrawSatVisible);
	vec2 dUv = vUv + (solid.gb - .5) * (gen.r * .003) * drawMode;
	vec3 edges = edgeIntensity(uDrawTexture, dUv, .8) * .4;
	edges *= .8 + solid.b * .4;

	vec4 drawColor = vec4(vec3(length(edges)) * .5 + edges.g * .1, edges);
	drawColor *= 1. + smoothstep(1., 0., edges.b) * 1.5;

	vec4 busColor = abs(drawColor * drawMode);
	float busAlpha = drawMode * busColor.a * (1. - smoothstep(.9, 1., uDrawSatVisible) * .3);
	color = mix(color, busColor.rgb, busAlpha * (1. - gen.b * .03));
}

void main() {
	vec2 dUv = vUv;
	float parallax = uMouse.x * uFrameBorders;
	float screenTiltX = uSpaceOpsToLeft - parallax * .1;

	dUv = (dUv - .5) / (mix(vUv.x, 1. - vUv.x, screenTiltX) * .2 + .8) + .5;
	dUv.y = (dUv.y - .5) / (mix(vUv.x, 1. - vUv.x, screenTiltX * .9) * .5 + .8) + .5;
	dUv.x -= .08 * smoothstep(1., 1.2, uAspect) + parallax * .01;
	dUv = mix(vUv, dUv, uFrameBorders * uFrameBorders);
	dUv.y += smoothstep(1., .9, uAspect) * .2 * uFrameBorders;

	vec4 bus = vec4(0.);

	if(uDrawSatVisible > .001 || uGenSatVisible > .001 || uGenPayloadVisible > .001) bus = texture2D(uBusTexture, vUv);

	vec3 color = vec3(0.);
	vec2 sobelUv = dUv;
	
	

	color += texture2D(uDiffuse, dUv + (texture2D(uNoise, vUv /256. * uResolution).rg - .5) * (1. / uResolution.x) * bus.r).rgb * (1. + uInternalView * .2);

	
	

	if(uDrawSatVisible > .001) renderDrawedSat(color, bus);
	if(uGenSatVisible > .001 || uGenPayloadVisible > .001) renderConcreteSat(color, bus, uBusTexture, uGlowTexture, sobelUv);
	
	color *= 1. - smoothstep(.1, 0.6, length(vUv - .5)) * .5;
	
	
	vec2 fUv = vUv; 
	fUv.y = (fUv.y - .5) / (mix(vUv.x, 1. - vUv.x, screenTiltX * .9) * .5 + .8) + .5;
	fUv.x = mix(fUv.x, fUv.x * 1.2 - .2 + screenTiltX * .2, smoothstep(1., 1.2, uAspect));
	fUv.y = mix((fUv.y - .5) * .8 + .5, fUv.y, smoothstep(1., 1.2, uAspect));
	fUv = mix(vUv, fUv, uFrameBorders);

	fUv = vec2(
		(fUv.x - .5) * max(uAspect / 1.85, 1.) + .5,
		(fUv.y - .5) * max(1.85 / uAspect, 1.) + .5
	);

	fUv.y += smoothstep(1., .9, uAspect) * .3;

	if(uFrameBorders > 0.01) {
		float frame = smoothstep(.05, 0.06 + smoothstep(1., .9, uAspect) * .5, smoothstep(.01, .0, abs(.5 - fUv.x) - (.5 - uFrameBorders * .1)) * smoothstep(.01 * uAspect, .0, abs(.5 - fUv.y) - (.5 - uFrameBorders * .1)));
		float frameBorder = smoothstep(.0, 0.03, smoothstep(.01, .0, abs(.5 - fUv.x) - (.5 - uFrameBorders * .1)) * smoothstep(.01 * max(1., uAspect), .0, abs(.5 - fUv.y) - (.5 - uFrameBorders * .1))) * (smoothstep(.5, 1., uAspect) * .8 + .2);
		color *= mix(1., frame, clamp(0., 1., uFrameBorders * 2.));
		color += frameBorder * (1. - frame) * vec3(.2, .5, 1.2) * smoothstep(-.2, .8, fUv.x) * uFrameBorders * (1. + fUv.y * .5) * .1;

		color += smoothstep(.9, .0, length(dUv - .5)) * (BLUE + .2) * (1. - frame)	* .15 * uFrameBorders;

		fUv = (fUv - .5) * (1. + uFrameBorders * .2) + .5;
		float frameClamp = step(0.01, fUv.x) * step(fUv.x, .99) * step(0.03, fUv.y) * step(fUv.y, 1.);
		vec4 dashboard = texture2D(uDashboard, fUv) * step(0., fUv.x) * step(fUv.x, 1.) * frameClamp;
		color = mix(color, dashboard.rgb, dashboard.a * uFrameBorders);

		color += frameBorder * smoothstep(.5, .1, abs(fUv.x - .85 + parallax * .3 - fUv.y * .1 + (1. - uFrameBorders) + uSpaceOpsToLeft * .7) * 2.) * uFrameBorders * .1 * vec3(.4, .7, 1.);
	}
	

	gl_FragColor = vec4(color, 1.) * (1. - uFadeToBlack);

	

	
	
}`,sC=Ge(rC,"fragmentShader"),oC=`uniform vec2 uResolution;
uniform float uDPR;

varying vec2 vUv, vViewportUv;

void main() {
	vUv = uv;
	vViewportUv = vec2(uv.x, 1. - uv.y) * uResolution / uDPR;
	gl_Position = vec4(position, 1.0);
}`,aC=Ge(oC,"vertexShader");class j_ extends mt{constructor(e){super(e),sC.use(this),aC.use(this)}}const lC=`precision highp float;

uniform vec3 uColor;
uniform float uSpaceopsEarthData, uSpaceopsEarthOpacity;
uniform float uTime;
varying vec2 vUv;

void main() {
    float alpha = 0.;
    alpha += smoothstep(.3, 0.15, abs(vUv.y - .5)) * .6;
    alpha += smoothstep(.3, 0., abs(vUv.y - .5)) * .6 * vUv.x;
    alpha *= .9 + smoothstep(-.4, .8, sin(-uTime * 5. + vUv.x * 8.)) * .3;
    alpha *= smoothstep(.5, .45, abs(vUv.x - .5));
    alpha *= smoothstep(uSpaceopsEarthData, uSpaceopsEarthData - .1, vUv.x);
    alpha *= 1. + smoothstep(uSpaceopsEarthData - .1, uSpaceopsEarthData, vUv.x * .9) * 2.;
    gl_FragColor = vec4(uColor, 1.) * alpha * uSpaceopsEarthData * uSpaceopsEarthOpacity;
}`,cC=Ge(lC,"fragmentShader"),uC=`varying vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    vUv = uv;
}`,hC=Ge(uC,"vertexShader");class dC extends mt{constructor(){super({uniforms:{uSpaceopsEarthOpacity:F.uSpaceopsEarthOpacity,uSpaceopsEarthData:F.uSpaceopsEarthData,uColor:{value:new Oe("#94ffa8").convertLinearToSRGB()},uTime:F.uTime},transparent:!0}),cC.use(this),hC.use(this)}}const fC=`precision highp float;

uniform sampler2D uSpaceopsTextsTexture;
uniform vec3 uColor;
uniform float uSpaceopsEarthTrails, uSpaceopsEarthOpacity, uTime;

varying vec2 vUv;
varying float vInstanceId;

void main() {
    float dtc = length(vUv - .5);
    float alpha = smoothstep(.08, .07, dtc);
    alpha += (smoothstep(-.25, .25, dtc) + sin(uTime * 2.5) * .2) * smoothstep(.2, .19, dtc) * .3;

    vec2 tUv = vec2(vUv.x - .25, vUv.y + .6 - vInstanceId * .1 - .01);
    float frame = smoothstep(0.4, .39, abs(vUv.x - .5) * 2.) * smoothstep(0.5, .49, abs(vUv.y - .34) * 10.);
    float text = texture2D(uSpaceopsTextsTexture, tUv).r * frame;

    vec3 color = mix(uColor, vec3(0.), frame * .8);
    color = mix(color, vec3(1.), text);
    alpha = min(1., alpha + text + frame * .8);
    alpha *= smoothstep(.9, 1., uSpaceopsEarthTrails * 1.2 - vInstanceId * .2) * uSpaceopsEarthOpacity;

    gl_FragColor = vec4(color, alpha);
}`,pC=Ge(fC,"fragmentShader"),mC=`varying vec2 vUv;
varying float vInstanceId;

void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(0., 0., 0., 1.);
    vInstanceId = float(gl_InstanceID);

    mvPosition.xy += uv - vec2(.5, .5);
    gl_Position = projectionMatrix * mvPosition;
}`,gC=Ge(mC,"vertexShader");class _C extends mt{constructor(){super({uniforms:{uSpaceopsTextsTexture:F.uSpaceopsTextsTexture,uSpaceopsEarthOpacity:F.uSpaceopsEarthOpacity,uSpaceopsEarthTrails:F.uSpaceopsEarthTrails,uColor:{value:new Oe("#00A1FF").convertLinearToSRGB()},uTime:F.uTime},side:2,depthTest:!1,depthWrite:!1,transparent:!0}),pC.use(this),gC.use(this)}}const vC=`precision highp float;

uniform vec3 uColor;
uniform float uSpaceopsEarthSearch, uSpaceopsEarthOpacity, uTime;
varying vec2 vUv;

void main() {
    float dtc = length(vUv - .5);
    float alpha = smoothstep(.5, .07, dtc) * .1 + smoothstep(.5 * uSpaceopsEarthSearch, .499 * uSpaceopsEarthSearch, dtc) * .15;
    alpha *= 1. + sqrt(fract(dtc * 2. - uTime * .4)) * .1;
    alpha *= uSpaceopsEarthSearch;
    gl_FragColor = vec4(uColor, alpha);
}`,xC=Ge(vC,"fragmentShader"),yC=`varying vec2 vUv;

void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(0., 0., 0., 1.);

    mvPosition.xy += (uv - vec2(.5, .5)) * 2.8;
    gl_Position = projectionMatrix * mvPosition;
}`,SC=Ge(yC,"vertexShader");class TC extends mt{constructor(){super({uniforms:{uSpaceopsEarthOpacity:F.uSpaceopsEarthOpacity,uSpaceopsEarthSearch:F.uSpaceopsEarthSearch,uColor:{value:new Oe("#00A1FF").convertLinearToSRGB()},uTime:F.uTime},side:2,depthTest:!1,depthWrite:!1,transparent:!0}),xC.use(this),SC.use(this)}}const bC=`precision highp float;

uniform sampler2D uSpaceopsTextsTexture;
uniform vec3 uColor;
uniform float uSpaceopsEarthStations, uSpaceopsEarthOpacity, uTime;

varying vec2 vUv;
varying float vInstanceId;

void main() {
    float dtc = length(vUv - .5);
    float progress = smoothstep(vInstanceId * .05, .6 + vInstanceId * .05, uSpaceopsEarthStations);
    float alpha = smoothstep(.03, .02, dtc) * smoothstep(.0, .4, progress);
    
    alpha += smoothstep(.02, .01, abs(vUv.x - .5)) * smoothstep(.55, .64, vUv.y * smoothstep(.0, .5, progress)) * smoothstep(.65, .64, vUv.y) * .7 * smoothstep(.0, .5, progress);
    alpha += smoothstep(.2, 0., dtc) * .3 * smoothstep(.3, .6, progress);

    vec2 tUv = vec2(vUv.x + .25, vUv.y + .2 - vInstanceId * .1 - .01);
    float text = texture2D(uSpaceopsTextsTexture, tUv).r * smoothstep(0.5, .49, abs(vUv.x - .5) * 2.) * smoothstep(0.5, .49, abs(vUv.y - .74) * 10.) * smoothstep(.6, 1., progress);

    vec3 color = mix(uColor, vec3(1.), text);
    alpha = min(1., alpha + text);

    alpha *= uSpaceopsEarthOpacity;
    gl_FragColor = vec4(color, alpha);
}`,MC=Ge(bC,"fragmentShader"),EC=`varying vec2 vUv;
varying float vInstanceId;

void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(0., 0., 0., 1.);
    vInstanceId = float(gl_InstanceID);

    mvPosition.xy += uv - vec2(.5, .5);
    gl_Position = projectionMatrix * mvPosition;
}`,wC=Ge(EC,"vertexShader");class AC extends mt{constructor(){super({uniforms:{uSpaceopsEarthOpacity:F.uSpaceopsEarthOpacity,uSpaceopsEarthStations:F.uSpaceopsEarthStations,uSpaceopsTextsTexture:F.uSpaceopsTextsTexture,uColor:{value:new Oe("#ffffff").convertLinearToSRGB()},uTime:F.uTime},side:2,depthTest:!1,depthWrite:!1,transparent:!0}),MC.use(this),wC.use(this)}}const RC=`precision highp float;

uniform vec3 uColor;
uniform float uSpaceopsEarthTrails, uSpaceopsEarthOpacity, uSpaceopsEarthTrailsSingle;
varying vec2 vUv;

void main() {
    float alpha = 0.;
    vec2 dUv = vUv;

    dUv.y = fract(dUv.y);

    float progress = smoothstep(0., .8 + step(1., vUv.y) * .2, uSpaceopsEarthTrails);

    alpha += smoothstep(.5, 0., abs(dUv.y - .5)) * .6 * progress;
    alpha += smoothstep(.2, 0., abs(dUv.y - .5)) * .6 * smoothstep(1. - progress - .001, 1. - progress, 1. - vUv.x) * vUv.x;
    alpha *= mix(1., step(vUv.y, 1.), uSpaceopsEarthTrailsSingle);
    
    gl_FragColor = vec4(uColor, 1.) * alpha * uSpaceopsEarthOpacity;
}`,CC=Ge(RC,"fragmentShader"),PC=`varying vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    vUv = uv;
}`,DC=Ge(PC,"vertexShader");class UC extends mt{constructor(){super({uniforms:{uSpaceopsEarthTrailsSingle:F.uSpaceopsEarthTrailsSingle,uSpaceopsEarthOpacity:F.uSpaceopsEarthOpacity,uSpaceopsEarthTrails:F.uSpaceopsEarthTrails,uColor:{value:new Oe("#00A1FF").convertLinearToSRGB()}},transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!1}),CC.use(this),DC.use(this)}}const IC=`precision highp float;

uniform sampler2D tNoise;
uniform float uTime, uTaceOpacity, uTaceFullOpacity;

varying vec2 vUv;

void main() {
    vec3 color = vec3(1.);
    float appear = smoothstep(uTaceOpacity + .02, uTaceOpacity, vUv.y);
    gl_FragColor = abs(vec4(appear, sin(vUv.y * 32.), 0., 1.) * (.6 + appear * smoothstep(1., 0., appear))) * uTaceFullOpacity;
}`,LC=Ge(IC,"fragmentShader"),NC=`uniform float uTime;

#define PI 3.1415926536
varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`,OC=Ge(NC,"vertexShader");class FC extends mt{constructor(){super({uniforms:{tNoise:{value:Kt.texture},uTime:F.uTime,uTaceOpacity:F.uTaceOpacity,uTaceFullOpacity:F.uTaceFullOpacity},blending:ji,transparent:!0,depthTest:!1}),LC.use(this),OC.use(this)}}const BC={MATERIAL_CHARACTERS_TO_IGNORE:[" ","-",/[0-9]/g,"."],MATERIALS_NAME_TO_REPLACE:{},replaceStandardWith:void 0,replacePhysicalWith:void 0,replaceBasicWith:void 0,registerMaterial(r,e){mg[r]=e},applyToScene(r,e={},t=""){const n=new Map;r.traverse(i=>{i instanceof Yt&&i.material.name&&(n.has(i.material)||n.set(i.material,[]),n.get(i.material).push(i))}),n.forEach((i,s)=>{const o=s.name,a=t+o,l=e[o],c=e[a],u=t?K_({...l},{...c}):l??{};i.forEach(h=>{this.applyToMesh(h,u,a)})})},applyToMaterial(r,e){if(typeof e>"u")return;const t=Object.fromEntries(Object.entries(e).map(([n,i])=>[n,J_(i)]));Z_(r,t,e)},applyToMesh(r,e,t){if(!r.material.name)return;let n=r.material.name;for(const s of this.MATERIAL_CHARACTERS_TO_IGNORE)n=n.replaceAll(s,"");this.MATERIALS_NAME_TO_REPLACE[n]&&(n=this.MATERIALS_NAME_TO_REPLACE[n]);let i=mg[n];if(i||(r.material instanceof Ml&&!(r.material instanceof Ti)&&this.replaceStandardWith?i=this.replaceStandardWith:r.material instanceof Ti&&this.replacePhysicalWith?i=this.replacePhysicalWith:r.material instanceof Rr&&this.replaceBasicWith&&(i=this.replaceBasicWith)),i){const s=t+r.material.uuid;if(!Sh.has(s)){const o=new i(r.material,r);Sh.set(s,o)}r.material=Sh.get(s)}this.applyToMaterial(r.material,e),r.material.name=t}},kC={Vector2:r=>new Xe().fromArray(r),Vector3:r=>new k().fromArray(r),Vector4:r=>new _t().fromArray(r),Matrix3:r=>new et().fromArray(r),Matrix4:r=>new Ke().fromArray(r),Euler:r=>new In().fromArray(r)},K_=(r,e)=>{for(const t in e)Object.hasOwn(e,t)&&(e[t]instanceof Object&&t in r&&r[t]instanceof Object?K_(r[t],e[t]):r[t]=e[t]);return r},Z_=(r,e,t)=>{for(const n in t)if(typeof t[n]=="object"&&t[n]!==null&&!Array.isArray(t[n])){if(r[n]===void 0)continue;Z_(r[n],e[n],t[n])}else e[n]!==void 0&&(r[n]=e[n])},mg=Object.fromEntries(Object.entries(Object.assign({"../materials/AntenaPulse/AntenaPulse.ts":jR,"../materials/Atmosphere/Atmosphere.ts":W_,"../materials/Bloom/Bloom.ts":Y_,"../materials/Captation/Captation.js":z_,"../materials/CaptationLines/CaptationLines.js":V_,"../materials/CaptationPoints/CaptationPoints.js":G_,"../materials/Default/Default.js":_2,"../materials/Draw/Draw.js":T2,"../materials/Earth/Earth.js":H_,"../materials/FStorage/FStorage.js":A2,"../materials/FStorageSats/FStorageSats.js":U2,"../materials/FTrails/FTrails.ts":F2,"../materials/Fuselage/Fuselage.js":G2,"../materials/Generic/Generic.js":su,"../materials/Grid/Grid.js":Y2,"../materials/HotShader/HotShader.ts":J2,"../materials/Map/Map.js":Fc,"../materials/Modules/Modules.js":iC,"../materials/PBR/PBR.ts":Gs,"../materials/PostProcessing/PostProcessing.ts":j_,"../materials/Sky/Sky.js":q_,"../materials/SpaceOpsData/SpaceOpsData.js":dC,"../materials/SpaceOpsSat/SpaceOpsSat.js":_C,"../materials/SpaceOpsSearch/SpaceOpsSearch.js":TC,"../materials/SpaceOpsStation/SpaceOpsStation.js":AC,"../materials/SpaceOpsTrail/SpaceOpsTrail.js":UC,"../materials/Trace/Trace.ts":FC,"../materials/Trail/Trail.ts":X_})).map(([r,e])=>[r.split("/").pop().split(".")[0],e])),Sh=new Map,J_=r=>{if(typeof r=="object"&&r!==null&&!Array.isArray(r))return Object.fromEntries(Object.entries(r).map(([n,i])=>[n,J_(i)]));if(!Array.isArray(r)&&(typeof r!="string"||!r.startsWith("#")))return r;if(typeof r=="string")return new Oe(r);const e=r[r.length-1],t=r.slice(0,-1);return kC[e]?.(t)??r},gg=new k,_g=new si;let Th,Vd="vhr";il.has("payload")&&(Vd=il.get("payload"));class zC extends Hx{constructor(){super(),this._satPoint123=0,this.satDocked=0,this.satDockedTarget=0,this.satParallaxIntensity=0,N.bind(this),this.selectedPayloadKey=Vd,this.mouse=new Xe,this.falconPosition=new k,this.falconWiggle=0,this.background=new Oe(0),this.falconStorageSats=[]}onAppReady(){const e=N.assets.get("models","scene");e.scene.traverse(s=>{["Generic"].includes(s.material?.name)&&s.layers.set(ss.generic),["Trace","Draw"].includes(s.material?.name)&&s.layers.set(ss.draw),s.material?.name==="FStorage"&&(this.falconStorage=s),s.material?.name==="FStorageSats"&&this.falconStorageSats.push(s)}),this.payloads=new Map,e.scene.getObjectByName("payloads").children?.forEach(s=>{this.payloads.set(s.name,s)}),this.payloadsMin={},e.scene.getObjectByName("payloads-min").children?.forEach(s=>{const o=new nf(s.geometry,s.material,8);o.layers.set(ss.generic),o.visible=!1,this.payloadsMin[s.name.split("-")[0]]=o,this.add(o)}),this.satp1=e.scene.getObjectByName("hero-sat-ref"),this.satp2=e.scene.getObjectByName("workshop-sat-ref"),this.satp3=e.scene.getObjectByName("end-sat-ref"),this.f9SatDock=e.scene.getObjectByName("sat-rocket"),this.sky=new BR,this.earth=new IR,this.cables=e.scene.getObjectByName("cables"),this.cables&&(this.cables.visible=!1),this.detailedSat=new fg(e.scene.getObjectByName("details-frame"),this.payloads),this.detailedSat.parseDetailed();const i=Vd;this.detailedSat.plug(this.payloads.get(i)),this.detailedSat.place(this.satp1),this.drawSat=new fg(e.scene.getObjectByName("draw-frame"),this.payloads),this.drawSat.place(this.satp2),this.drawSat.scale.setScalar(1),this.grid=e.scene.getObjectByName("grid"),this.falcon=e.scene.getObjectByName("falcon"),this.falconPosition.copy(this.falcon.position),this.falconP1=e.scene.getObjectByName("falcon-p1"),this.falconP2=e.scene.getObjectByName("falcon-p2"),this.falconTube=e.scene.getObjectByName("falcon-tube"),this.falconTube.targetPosition=this.falconTube.position.clone(),this.fTrails=e.scene.getObjectByName("falcon-trails"),this.scalableSats=e.scene.getObjectByName("secondary-sat"),this.scalableSats.visible=!1,this.captation=new _R,this.spaceops=new WR(e.scene.getObjectByName("spaceops")),this.spaceopsEarth=e.scene.getObjectByName("spaceops-wrapper"),this.spaceopsEarth.visible=!1,this.spaceopsEarth.traverse(s=>{s.isMesh&&s.material.name==="SpaceOpsSat"&&(s.renderOrder=1e3),s.isMesh&&s.material.name==="SpaceOpsTrail"&&(s.renderOrder=1e3)}),this.add(this.sky),this.add(this.earth),this.add(this.grid),this.add(this.falcon),this.add(this.detailedSat),this.add(this.drawSat),this.add(this.captation),this.add(this.fTrails),this.add(this.scalableSats),this.add(this.spaceopsEarth),N.render.camera.register(e.scene),BC.applyToScene(this,QA.materials),$A(N,this),this.payloadMaterial=new su,this.payloadMaterial.uniforms.uVisible=F.uGenPayloadVisible,this.payloadMaterial.uniforms.uGenericBuild=F.uGenericPayloadBuild,this.payloads.forEach(s=>{s.traverse(o=>{o.material&&(o.material=this.payloadMaterial)})}),this.detailedSat.mesh.getObjectByName("Legs").material=this.payloadMaterial,N.getPlugin("debug")?.add(this,"Scene","Global"),N.getPlugin("debug")?.add(this,"Outliner","Outliner")}get satPoint123(){return this._satPoint123}set satPoint123(e){this._satPoint123!==Math.round(e)&&(this._satPoint123=Math.round(e),this._satPoint123===0?this.detailedSat.place(this.satp1):this._satPoint123===1?this.detailedSat.place(this.satp2):this._satPoint123===2&&this.detailedSat.place(this.satp3))}onTickerUpdate=({et:e,dt:t})=>{N.pointer?.normalized&&this.mouse.lerp(N.pointer.normalized,t*.5),F.uMouse.value.copy(this.mouse),Th=Math.min(.9,Math.min(1,t*10)),this.falcon&&(this.falcon.position.lerp(this.falconPosition,Th),this.falcon.position.x+=Math.sin(e*100)*this.falconWiggle*.01,this.falcon.position.z+=Math.cos(e*100)*this.falconWiggle*.01),this.detailedSat&&(F.uSatDist.value=this.detailedSat.position.distanceTo(N.render.camera.position),this.detailedSat?.position.copy(this.detailedSat._position),this.detailedSat?.quaternion.copy(this.detailedSat._quaternion),this.satDocked-=(this.satDocked-this.satDockedTarget)*Th,this.satDockedTarget>=1&&(this.satDocked=this.satDockedTarget),this.f9SatDock&&this.satDocked>0&&(this.f9SatDock.getWorldPosition(gg),this.f9SatDock.getWorldQuaternion(_g),this.detailedSat.position.lerp(gg,this.satDocked),this.detailedSat.quaternion.slerp(_g,this.satDocked)),this.detailedSat.rotateX(this.mouse.y*.1*N.render.camera.parallaxIntensity*this.satParallaxIntensity),this.detailedSat.rotateY(this.mouse.x*.1*N.render.camera.parallaxIntensity*this.satParallaxIntensity),this.detailedSat?.mesh.getWorldPosition(F.uMainSatPosition.value))}}class VC{constructor(){this.dpr=.4,this.rtDraw=new xi(1,1,{type:Yi}),this.rt1=new xi(1,1,{type:Yi}),this.rt2=new xi(1,1,{}),this.rt3=new xi(1,1,{}),this.lastDrawVisible=!1,this.lastGenVisible=!1,this.bloomMaterial=new Y_({uniforms:{uDiffuse:{value:null},uResolution:{value:new Xe(1,1)},uHorizontal:{value:!1}}});const e=new qn().setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)).setAttribute("uv",new jt([0,2,0,0,2,0],2));this.quad=new Yt(e,this.bloomMaterial),this.quad.frustumCulled=!1,N.bind(this)}onAppReady(){N.on("viewport:resize",this.handleResize),this.handleResize()}get drawTexture(){return this.rtDraw.texture}get texture(){return this.rt1.texture}get glowTexture(){return this.rt3.texture}handleResize=()=>{this.rtDraw.setSize(N.viewport.width*N.viewport.dpr,N.viewport.height*N.viewport.dpr),this.rt1.setSize(N.viewport.width*N.viewport.dpr,N.viewport.height*N.viewport.dpr),this.rt3.setSize(N.viewport.size.width*this.dpr,N.viewport.size.height*this.dpr),this.bloomMaterial.uniforms.uResolution.value.set(N.viewport.size.width*this.dpr,N.viewport.size.height*this.dpr)};render(){F.uGenSatVisible.value<.001&&F.uGenPayloadVisible.value<.001?this.lastGenVisible&&(N.render.renderer.clearRenderTarget(this.rt1),this.lastGenVisible=!1):(this.lastGenVisible=!0,N.render.camera.layers.disableAll(),N.render.camera.layers.enable(ss.generic),N.render.renderer.renderRenderTarget(N.render.scene,N.render.camera,this.rt1),N.render.camera.layers.disableAll(),N.render.camera.layers.enable(ss.default),N.viewport.breakpoint==="mobile"||N.viewport.breakpoint==="tablet"||(this.bloomMaterial.uniforms.uDiffuse.value=this.rt1.texture,N.render.renderer.renderRenderTarget(this.quad,N.render.camera,this.rt3))),F.uDrawSatVisible.value<.001?this.lastDrawVisible&&(N.render.renderer.clearRenderTarget(this.rtDraw),this.lastDrawVisible=!1):(this.lastDrawVisible=!0,N.render.camera.layers.disableAll(),N.render.camera.layers.enable(ss.draw),N.render.renderer.renderRenderTarget(N.render.scene,N.render.camera,this.rtDraw))}}class GC extends qn{constructor(){super(),this.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jt([0,2,0,0,2,0],2))}}class HC extends Yt{constructor(){const e=new xi(1,1,{samples:1}),t=new xi(1,1,{samples:1});t.texture.wrapS=Zn,t.texture.wrapT=Zn;const n=new j_({uniforms:{uDPR:Fi.uDPR,uTime:F.uTime,uMouse:F.uMouse,uDiffuse:{value:e.texture},uBusTexture:{value:void 0},uGlowTexture:{value:void 0},uDrawTexture:{value:void 0},uNoise:{value:Kt.nearestTexture},uSolidNoise:{value:void 0},uFrameBorders:F.uFrameBorders,uDashboardEnabled:F.uDashboardEnabled,uGenSatDarken:F.uGenSatDarken,uInternalView:F.uInternalView,uSatDist:F.uSatDist,uGenSatFront:F.uGenSatFront,uFadeToBlack:F.uFadeToBlack,uSpaceOpsToLeft:F.uSpaceOpsToLeft,uDashboard:{value:t.texture},uGenSatVisible:F.uGenSatVisible,uGenPayloadVisible:F.uGenPayloadVisible,uDrawSatVisible:F.uDrawSatVisible,uIsMobile:{value:1},...Fi}});super(new GC),this.material=n,this.frustumCulled=!1,this.renderTarget=e,this.dashboardRenderTarget=t,N.bind(this)}onAppReady(){this.onViewportResize(),this.material.uniforms.uSolidNoise.value=N.assets.get("textures","noise")}onViewportResize(){this.renderTarget.setSize(N.viewport.size.width*N.viewport.size.dpr,N.viewport.size.height*N.viewport.size.dpr),this.dashboardRenderTarget.setSize(N.viewport.size.width*N.viewport.size.dpr,N.viewport.size.height*N.viewport.size.dpr),this.material.uniforms.uIsMobile.value=N.viewport.breakpoint==="mobile"?1:0}dispose(){this.renderTarget.dispose(),this.geometry.dispose(),N.unbind(this)}}class Lo extends mM{constructor({canvas:e}={}){super({antialias:!0,powerPreference:"high-performance",depth:!0,canvas:e}),ft.enabled=!0,this.autoClear=!1,this.debug.checkShaderErrors=Bf,this.setClearColor(new Oe(0),0),this.toneMapping=Dr}renderRenderTarget(e,t,n=null,i=!0){this.setRenderTarget(n),i&&this.clear(),this.render(e,t)}clearRenderTarget(e){this.setRenderTarget(e),this.clear()}init(){N.bind(this)}onAppReady(){N.getPlugin("debug")?.add(this,"Renderer","Global")}onViewportResize({width:e,height:t,dpr:n}){this.setSize(e,t),this.setPixelRatio(n)}onAppDestroy(){N.unbind(this)}static getInstance(...e){return Lo.instance||(Lo.instance=new Lo(...e)),Lo.instance}}class WC extends Fr{constructor({canvas:e,wrapper:t}){super(N,"render"),this.renderer=Lo.getInstance({canvas:e}),this.renderer.init(),this.camera=new YA,this.spaceOpsCamera=new hu(-ou,ou,1,-1,1,10),this.spaceOpsCamera.position.y=5,this.spaceOpsCamera.lookAt(0,0,0),this.scene=new zC,this.postProcessing=new HC,this.busGlow=new VC,this.postProcessing.material.uniforms.uBusTexture.value=this.busGlow.texture,this.postProcessing.material.uniforms.uGlowTexture.value=this.busGlow.glowTexture,this.postProcessing.material.uniforms.uDrawTexture.value=this.busGlow.drawTexture,this.animator=new XA,this.canChangeAccordingRenderPass=[],this.dashboardRenderEnabled=!1,this.wrapper=t??e?.parentElement??null}attach(){const{size:e}=this.app.getPlugin("viewport");this.camera.onViewportResize(e),this.renderer.onViewportResize(e),this.handleResize(e),N.on("viewport:resize",this.handleResize),N.on("ticker:render",this.render),N.getPlugin("debug")?.add(this,"Camera","Global")}detach(){N.off("viewport:resize",this.handleResize),N.off("ticker:render",this.render)}handleResize=({width:e,height:t,dpr:n,aspect:i})=>{Fi.uDPR.value=n,Fi.uResolution.value.set(e*n,t*n),Fi.uAspect.value=i,this.renderer.render(this.scene,this.camera)};setPass(e){F.uRenderPass.value=e,this.canChangeAccordingRenderPass.forEach(t=>t.setRenderPass(e))}render=({et:e})=>{F.uTime.value=e,this.statsPlugin?.stats.begin(),this.dashboardRenderEnabled&&this.scene.spaceops&&(N.render.camera.layers.enableAll(),this.renderer.renderRenderTarget(this.scene.spaceops,this.spaceOpsCamera,this.postProcessing.dashboardRenderTarget)),this.setPass(0),N.render.camera.layers.disableAll(),N.render.camera.layers.enable(ss.default),this.renderer.renderRenderTarget(this.scene,this.camera,this.postProcessing.renderTarget),this.setPass(1),this.busGlow.render(),N.render.camera.layers.disableAll(),N.render.camera.layers.enable(ss.default),this.renderer.renderRenderTarget(this.postProcessing,this.camera),this.statsPlugin?.stats.end(),this.statsPlugin?.stats.update()};get statsPlugin(){return this.app.getPlugin("stats")}set wrapper(e){e?e.prepend(this.renderer.domElement):this.renderer.domElement.remove()}get wrapper(){return this.renderer.domElement.parentElement}}const XC="390px",qC="768px",YC="1024px",$C="1280px",jC="1680px",KC="1920px",ZC={mobile:XC,tablet:qC,desktop:YC,mlarge:$C,large:jC,xlarge:KC},JC=ZC,QC={id:"main",preload:!0,textures:{noise:{url:`${window.new_space_service_base_url}/assets/textures/noise.png`,wrapS:on,wrapT:on},map:{url:`${window.new_space_service_base_url}/assets/textures/map05.webp`},southAmerica:{url:`${window.new_space_service_base_url}/assets/textures/america-south.webp`,wrapS:wn,wrapT:wn},northAmerica:{url:`${window.new_space_service_base_url}/assets/textures/america-north-2k.webp`,wrapS:wn,wrapT:wn},clouds:{url:`${window.new_space_service_base_url}/assets/textures/clouds.webp`,wrapS:on,wrapT:on},cloudsZoomed:{url:`${window.new_space_service_base_url}/assets/textures/clouds-zoomed.webp`,wrapS:on,wrapT:on},perlin:{url:`${window.new_space_service_base_url}/assets/textures/perlin.webp`,wrapS:on,wrapT:on},trueColor:{url:`${window.new_space_service_base_url}/assets/textures/captations/true_color.webp`,wrapS:wn,wrapT:wn},zoomed:{url:`${window.new_space_service_base_url}/assets/textures/zoomed.webp`,wrapS:wn,wrapT:wn,flipY:!0},paraboles:{url:`${window.new_space_service_base_url}/assets/textures/paraboles.webp`,wrapS:wn,wrapT:wn,flipY:!1},city:{url:`${window.new_space_service_base_url}/assets/textures/city.webp`,wrapS:wn,wrapT:wn,flipY:!1},plane:{url:`${window.new_space_service_base_url}/assets/textures/plane.webp`,wrapS:Zn,wrapT:Zn,flipY:!1}},hdris:{},models:{scene:{url:`${window.new_space_service_base_url}/assets/models/scene.glb`}}};typeof window<"u"&&(Pe.registerPlugin(ht,It,da,fa),Pe.config({force3D:!0}),Pe.defaults({ease:"none"}),Pe.ticker.lagSmoothing(0));da.create("asymPower2.out","M0,0 C0.173,0 0.298,0.294 0.355,0.488 0.458,0.841 0.687,1 1,1 ");const N=new tE(lE,"Application");N.registerPlugins(new tv(N),new dA(N),new rE(N,{breakpoints:JC}),new aE(N),new hA(N,{manifests:[QC]}),new WA(N),new VA(N,"section.fps-frame"),new MA(N),new WC({canvas:document.querySelector("#fps-webgl-canvas")})).ready().then(()=>{const r=document.querySelector("#fps-app");r!==null&&(r.style.opacity=1,r.style.transition="opacity 1s linear")}).then(()=>Bf);const vg=document.querySelector("footer.footer");vg!==null&&(vg.style.backgroundColor="black");
