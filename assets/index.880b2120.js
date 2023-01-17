var of=Object.defineProperty;var af=(s,t,e)=>t in s?of(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var on=(s,t,e)=>(af(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const pl=s=>{const t=s.target;t.dataset.href&&(location.href=t.dataset.href)};document.querySelectorAll("[data-href]").forEach(s=>{s.addEventListener("click",t=>{pl(t)}),s.addEventListener("keydown",t=>{const e=t.key;(e===" "||e==="Enter")&&pl(t)})});const wi=document.createElement("span");wi.innerHTML=`
	<span>
		<span>
			<span></span>
		</span>
	</span>
	<span>
		<span>
			<span></span>
		</span>
	</span>
	<span>
		<span>
			<span></span>
		</span>
	</span>
	<span>
		<span>
			<span></span>
		</span>
	</span>`;wi.classList.add("cursor");document.body.appendChild(wi);const ml=document.documentElement;window.addEventListener("mousemove",s=>{wi.style.transform=`translate3d(${s.clientX}px, ${s.clientY}px, 0px) translate(-50%, -50%)`,wi.style.opacity="1";const t=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);ml.style.setProperty("--mouse-x",`${s.clientX/t*100}%`),ml.style.setProperty("--mouse-y",`${s.clientY/e*100}%`)});document.addEventListener("mouseleave",()=>{wi.style.opacity="0"});document.addEventListener("mouseenter",()=>{wi.style.opacity="1"});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oa="143",lf=0,gl=1,cf=2,ou=1,uf=2,Dr=3,ar=0,en=1,lr=2,hf=1,jn=0,tr=1,_l=2,xl=3,vl=4,ff=5,Ji=100,df=101,pf=102,yl=103,Ml=104,mf=200,gf=201,_f=202,xf=203,au=204,lu=205,vf=206,yf=207,Mf=208,Sf=209,wf=210,bf=0,Tf=1,Ef=2,aa=3,Af=4,Cf=5,Pf=6,Lf=7,cu=0,Rf=1,Df=2,hn=0,If=1,zf=2,Ff=3,Of=4,Nf=5,uu=300,cr=301,ur=302,la=303,ca=304,Js=306,Hr=1e3,tn=1001,ua=1002,Me=1003,Sl=1004,wl=1005,Ge=1006,Uf=1007,js=1008,bi=1009,Bf=1010,kf=1011,hu=1012,Gf=1013,pi=1014,Xn=1015,Wr=1016,Vf=1017,Hf=1018,er=1020,Wf=1021,qf=1022,cn=1023,Xf=1024,Yf=1025,xi=1026,hr=1027,Zf=1028,Jf=1029,jf=1030,$f=1031,Kf=1033,po=33776,mo=33777,go=33778,_o=33779,bl=35840,Tl=35841,El=35842,Al=35843,Qf=36196,Cl=37492,Pl=37496,Ll=37808,Rl=37809,Dl=37810,Il=37811,zl=37812,Fl=37813,Ol=37814,Nl=37815,Ul=37816,Bl=37817,kl=37818,Gl=37819,Vl=37820,Hl=37821,Wl=36492,Ti=3e3,qt=3001,td=3200,ed=3201,nd=0,id=1,bn="srgb",mi="srgb-linear",xo=7680,rd=519,ql=35044,Xl="300 es",ha=1035;class yr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vo=Math.PI/180,Yl=180/Math.PI;function Mr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[s&255]+de[s>>8&255]+de[s>>16&255]+de[s>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function xe(s,t,e){return Math.max(t,Math.min(e,s))}function sd(s,t){return(s%t+t)%t}function yo(s,t,e){return(1-e)*s+e*t}function Zl(s){return(s&s-1)===0&&s!==0}function fa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],y=i[1],S=i[4],v=i[7],M=i[2],E=i[5],C=i[8];return r[0]=o*d+a*y+c*M,r[3]=o*p+a*S+c*E,r[6]=o*_+a*v+c*C,r[1]=l*d+u*y+h*M,r[4]=l*p+u*S+h*E,r[7]=l*_+u*v+h*C,r[2]=f*d+m*y+g*M,r[5]=f*p+m*S+g*E,r[8]=f*_+m*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,m=l*r-o*c,g=e*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return t[0]=h*d,t[1]=(i*l-u*n)*d,t[2]=(a*n-i*o)*d,t[3]=f*d,t[4]=(u*e-i*c)*d,t[5]=(i*r-a*e)*d,t[6]=m*d,t[7]=(n*c-l*e)*d,t[8]=(o*e-n*r)*d,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],o=i[3],a=i[6],c=i[1],l=i[4],u=i[7];return i[0]=e*r+n*c,i[3]=e*o+n*l,i[6]=e*a+n*u,i[1]=-n*r+e*c,i[4]=-n*o+e*l,i[7]=-n*a+e*u,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function fu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>65535)return!0;return!1}function ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Mo={[bn]:{[mi]:vi},[mi]:{[bn]:Fs}},Je={legacyMode:!0,get workingColorSpace(){return mi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if(Mo[t]&&Mo[t][e]!==void 0){const n=Mo[t][e];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},re={r:0,g:0,b:0},je={h:0,s:0,l:0},as={h:0,s:0,l:0};function So(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function ls(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Je.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=mi){return this.r=t,this.g=e,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=mi){if(t=sd(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=So(o,r,t+1/3),this.g=So(o,r,t),this.b=So(o,r,t-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(t,e=bn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Je.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Je.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(c,l,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Je.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Je.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=bn){const n=du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return Je.fromWorkingColorSpace(ls(this,re),t),xe(re.r*255,0,255)<<16^xe(re.g*255,0,255)<<8^xe(re.b*255,0,255)<<0}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=mi){Je.fromWorkingColorSpace(ls(this,re),e);const n=re.r,i=re.g,r=re.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=mi){return Je.fromWorkingColorSpace(ls(this,re),e),t.r=re.r,t.g=re.g,t.b=re.b,t}getStyle(t=bn){return Je.fromWorkingColorSpace(ls(this,re),t),t!==bn?`color(${t} ${re.r} ${re.g} ${re.b})`:`rgb(${re.r*255|0},${re.g*255|0},${re.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(je),je.h+=t,je.s+=e,je.l+=n,this.setHSL(je.h,je.s,je.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(je),t.getHSL(as);const n=yo(je.h,as.h,e),i=yo(je.s,as.s,e),r=yo(je.l,as.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ht.NAMES=du;let Ii;class pu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ii===void 0&&(Ii=ks("canvas")),Ii.width=t.width,Ii.height=t.height;const n=Ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class mu{constructor(t=null){this.isSource=!0,this.uuid=Mr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(wo(i[o].image)):r.push(wo(i[o]))}else r=wo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function wo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let od=0;class rn extends yr{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=tn,i=tn,r=Ge,o=js,a=cn,c=bi,l=1,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Mr(),this.name="",this.source=new mu(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hr:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hr:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=uu;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],d=c[2],p=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,v=(m+1)/2,M=(_+1)/2,E=(u+f)/4,C=(h+d)/4,x=(g+p)/4;return S>v&&S>M?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=C/n):v>M?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=C/r,i=x/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-d)/y,this.z=(f-u)/y,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qn extends yr{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new rn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ge,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gu extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Me,this.minFilter=Me,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ad extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Me,this.minFilter=Me,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],d=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=d;return}if(h!==d||c!==f||l!==m||u!==g){let p=1-a;const _=c*f+l*m+u*g+h*d,y=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const M=Math.sqrt(S),E=Math.atan2(M,_*y);p=Math.sin(p*E)/M,a=Math.sin(a*E)/M}const v=a*y;if(c=c*p+f*v,l=l*p+m*v,u=u*p+g*v,h=h*p+d*v,p===1-a){const M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*m-l*f,t[e+1]=c*g+u*f+l*h-a*m,t[e+2]=l*g+u*m+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),f=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,u=c*n+a*e-r*i,h=c*i+r*n-o*e,f=-r*e-o*n-a*i;return this.x=l*c+f*-r+u*-a-h*-o,this.y=u*c+f*-o+h*-r-l*-a,this.z=h*c+f*-a+l*-o-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bo.copy(this).projectOnVector(t),this.sub(bo)}reflect(t){return this.sub(bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new P,Jl=new es;class ns{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],h=t[c+1],f=t[c+2];u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),h=t.getY(c),f=t.getZ(c);u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)ri.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(ri)}else n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox),To.applyMatrix4(t.matrixWorld),this.union(To);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),cs.subVectors(this.max,Ar),zi.subVectors(t.a,Ar),Fi.subVectors(t.b,Ar),Oi.subVectors(t.c,Ar),Un.subVectors(Fi,zi),Bn.subVectors(Oi,Fi),si.subVectors(zi,Oi);let e=[0,-Un.z,Un.y,0,-Bn.z,Bn.y,0,-si.z,si.y,Un.z,0,-Un.x,Bn.z,0,-Bn.x,si.z,0,-si.x,-Un.y,Un.x,0,-Bn.y,Bn.x,0,-si.y,si.x,0];return!Eo(e,zi,Fi,Oi,cs)||(e=[1,0,0,0,1,0,0,0,1],!Eo(e,zi,Fi,Oi,cs))?!1:(us.crossVectors(Un,Bn),e=[us.x,us.y,us.z],Eo(e,zi,Fi,Oi,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return ri.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new P,new P,new P,new P,new P,new P,new P,new P],ri=new P,To=new ns,zi=new P,Fi=new P,Oi=new P,Un=new P,Bn=new P,si=new P,Ar=new P,cs=new P,us=new P,oi=new P;function Eo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){oi.fromArray(s,r);const a=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),u=n.dot(oi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ld=new ns,jl=new P,hs=new P,Ao=new P;class $s{constructor(t=new P,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ld.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Ao.subVectors(t,this.center);const e=Ao.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(Ao.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?hs.set(0,0,1).multiplyScalar(t.radius):hs.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(jl.copy(t.center).add(hs)),this.expandByPoint(jl.copy(t.center).sub(hs)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new P,Co=new P,fs=new P,kn=new P,Po=new P,ds=new P,Lo=new P;class _u{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.direction).multiplyScalar(e).add(this.origin),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Co.copy(t).add(e).multiplyScalar(.5),fs.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Co);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fs),a=kn.dot(this.direction),c=-kn.dot(fs),l=kn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(fs).multiplyScalar(f).add(Co),m}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),i=vn.dot(vn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,i,r){Po.subVectors(e,t),ds.subVectors(n,t),Lo.crossVectors(Po,ds);let o=this.direction.dot(Lo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const c=a*this.direction.dot(ds.crossVectors(kn,ds));if(c<0)return null;const l=a*this.direction.dot(Po.cross(kn));if(l<0||c+l>o)return null;const u=-a*kn.dot(Lo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,o,a,c,l,u,h,f,m,g,d,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,m=o*h,g=a*u,d=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=f-d*l,e[9]=-a*c,e[2]=d-f*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,m=c*h,g=l*u,d=l*h;e[0]=f+d*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=d+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,m=c*h,g=l*u,d=l*h;e[0]=f-d*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=d-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,m=o*h,g=a*u,d=a*h;e[0]=c*u,e[4]=g*l-m,e[8]=f*l+d,e[1]=c*h,e[5]=d*l+f,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,m=o*l,g=a*c,d=a*l;e[0]=c*u,e[4]=d-f*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=m*h+g,e[10]=f-d*h}else if(t.order==="XZY"){const f=o*c,m=o*l,g=a*c,d=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+d,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=d*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cd,t,ud)}lookAt(t,e,n){const i=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),Gn.crossVectors(n,Pe),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),Gn.crossVectors(n,Pe)),Gn.normalize(),ps.crossVectors(Pe,Gn),i[0]=Gn.x,i[4]=ps.x,i[8]=Pe.x,i[1]=Gn.y,i[5]=ps.y,i[9]=Pe.y,i[2]=Gn.z,i[6]=ps.z,i[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],y=n[3],S=n[7],v=n[11],M=n[15],E=i[0],C=i[4],x=i[8],b=i[12],L=i[1],R=i[5],$=i[9],K=i[13],D=i[2],V=i[6],z=i[10],H=i[14],q=i[3],O=i[7],U=i[11],Q=i[15];return r[0]=o*E+a*L+c*D+l*q,r[4]=o*C+a*R+c*V+l*O,r[8]=o*x+a*$+c*z+l*U,r[12]=o*b+a*K+c*H+l*Q,r[1]=u*E+h*L+f*D+m*q,r[5]=u*C+h*R+f*V+m*O,r[9]=u*x+h*$+f*z+m*U,r[13]=u*b+h*K+f*H+m*Q,r[2]=g*E+d*L+p*D+_*q,r[6]=g*C+d*R+p*V+_*O,r[10]=g*x+d*$+p*z+_*U,r[14]=g*b+d*K+p*H+_*Q,r[3]=y*E+S*L+v*D+M*q,r[7]=y*C+S*R+v*V+M*O,r[11]=y*x+S*$+v*z+M*U,r[15]=y*b+S*K+v*H+M*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],d=t[7],p=t[11],_=t[15];return g*(+r*c*h-i*l*h-r*a*f+n*l*f+i*a*m-n*c*m)+d*(+e*c*m-e*l*f+r*o*f-i*o*m+i*l*u-r*c*u)+p*(+e*l*h-e*a*m-r*o*h+n*o*m+r*a*u-n*l*u)+_*(-i*a*u-e*c*h+e*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],d=t[13],p=t[14],_=t[15],y=h*p*l-d*f*l+d*c*m-a*p*m-h*c*_+a*f*_,S=g*f*l-u*p*l-g*c*m+o*p*m+u*c*_-o*f*_,v=u*d*l-g*h*l+g*a*m-o*d*m-u*a*_+o*h*_,M=g*h*c-u*d*c-g*a*f+o*d*f+u*a*p-o*h*p,E=e*y+n*S+i*v+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=y*C,t[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*_-n*f*_)*C,t[2]=(a*p*r-d*c*r+d*i*l-n*p*l-a*i*_+n*c*_)*C,t[3]=(h*c*r-a*f*r-h*i*l+n*f*l+a*i*m-n*c*m)*C,t[4]=S*C,t[5]=(u*p*r-g*f*r+g*i*m-e*p*m-u*i*_+e*f*_)*C,t[6]=(g*c*r-o*p*r-g*i*l+e*p*l+o*i*_-e*c*_)*C,t[7]=(o*f*r-u*c*r+u*i*l-e*f*l-o*i*m+e*c*m)*C,t[8]=v*C,t[9]=(g*h*r-u*d*r-g*n*m+e*d*m+u*n*_-e*h*_)*C,t[10]=(o*d*r-g*a*r+g*n*l-e*d*l-o*n*_+e*a*_)*C,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*m-e*a*m)*C,t[12]=M*C,t[13]=(u*d*i-g*h*i+g*n*f-e*d*f-u*n*p+e*h*p)*C,t[14]=(g*a*i-o*d*i-g*n*c+e*d*c+o*n*p-e*a*p)*C,t[15]=(o*h*i-u*a*i+u*n*c-e*h*c-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,m=r*u,g=r*h,d=o*u,p=o*h,_=a*h,y=c*l,S=c*u,v=c*h,M=n.x,E=n.y,C=n.z;return i[0]=(1-(d+_))*M,i[1]=(m+v)*M,i[2]=(g-S)*M,i[3]=0,i[4]=(m-v)*E,i[5]=(1-(f+_))*E,i[6]=(p+y)*E,i[7]=0,i[8]=(g+S)*C,i[9]=(p-y)*C,i[10]=(1-(f+d))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ni.set(i[0],i[1],i[2]).length();const o=Ni.set(i[4],i[5],i[6]).length(),a=Ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],$e.copy(this);const l=1/r,u=1/o,h=1/a;return $e.elements[0]*=l,$e.elements[1]*=l,$e.elements[2]*=l,$e.elements[4]*=u,$e.elements[5]*=u,$e.elements[6]*=u,$e.elements[8]*=h,$e.elements[9]*=h,$e.elements[10]*=h,e.setFromRotationMatrix($e),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){const a=this.elements,c=2*r/(e-t),l=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,c=1/(e-t),l=1/(n-i),u=1/(o-r),h=(e+t)*c,f=(n+i)*l,m=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new P,$e=new oe,cd=new P(0,0,0),ud=new P(1,1,1),Gn=new P,ps=new P,Pe=new P,$l=new oe,Kl=new es;class is{constructor(t=0,e=0,n=0,i=is.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $l.makeRotationFromQuaternion(t),this.setFromRotationMatrix($l,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}is.DefaultOrder="XYZ";is.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class xu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hd=0;const Ql=new P,Ui=new es,yn=new oe,ms=new P,Cr=new P,fd=new P,dd=new es,tc=new P(1,0,0),ec=new P(0,1,0),nc=new P(0,0,1),pd={type:"added"},ic={type:"removed"};class Ye extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DefaultUp.clone();const t=new P,e=new is,n=new es,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ve}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ye.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ms.copy(t):ms.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Cr,ms,this.up):yn.lookAt(ms,Cr,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(yn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(pd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ic)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ic)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ye.DefaultUp=new P(0,1,0);Ye.DefaultMatrixAutoUpdate=!0;const Ke=new P,Mn=new P,Ro=new P,Sn=new P,Bi=new P,ki=new P,rc=new P,Do=new P,Io=new P,zo=new P;class Cn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ke.subVectors(i,e),Mn.subVectors(n,e),Ro.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(Mn),c=Ke.dot(Ro),l=Mn.dot(Mn),u=Mn.dot(Ro),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Sn),c.set(0,0),c.addScaledVector(r,Sn.x),c.addScaledVector(o,Sn.y),c.addScaledVector(a,Sn.z),c}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),Mn.subVectors(t,e),Ke.cross(Mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Ke.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Cn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Bi.subVectors(i,n),ki.subVectors(r,n),Do.subVectors(t,n);const c=Bi.dot(Do),l=ki.dot(Do);if(c<=0&&l<=0)return e.copy(n);Io.subVectors(t,i);const u=Bi.dot(Io),h=ki.dot(Io);if(u>=0&&h<=u)return e.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Bi,o);zo.subVectors(t,r);const m=Bi.dot(zo),g=ki.dot(zo);if(g>=0&&m<=g)return e.copy(r);const d=m*l-c*g;if(d<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ki,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return rc.subVectors(r,i),a=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(rc,a);const _=1/(p+d+f);return o=d*_,a=f*_,e.copy(n).addScaledVector(Bi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let md=0;class rs extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=tr,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=au,this.blendDst=lu,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===hf;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(n.blending=this.blending),this.side!==ar&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vu extends rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ne=new P,gs=new ot;class we{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=ql,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new Ht),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new ot),e[n++]=o.x,e[n++]=o.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new P),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new ue),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gs.fromBufferAttribute(this,e),gs.applyMatrix3(t),this.setXY(e,gs.x,gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ne.fromBufferAttribute(this,e),ne.applyMatrix3(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ne.fromBufferAttribute(this,e),ne.applyMatrix4(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ne.fromBufferAttribute(this,e),ne.applyNormalMatrix(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ne.fromBufferAttribute(this,e),ne.transformDirection(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class yu extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Mu extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Rn extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gd=0;const Ue=new oe,Fo=new Ye,Gi=new P,Le=new ns,Pr=new ns,le=new P;class pn extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fu(t)?Mu:yu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return Fo.lookAt(t),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Le.setFromBufferAttribute(r),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(le.addVectors(Le.min,Pr.min),Le.expandByPoint(le),le.addVectors(Le.max,Pr.max),Le.expandByPoint(le)):(Le.expandByPoint(Pr.min),Le.expandByPoint(Pr.max))}Le.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)le.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)le.fromBufferAttribute(a,l),c&&(Gi.fromBufferAttribute(t,l),le.add(Gi)),i=Math.max(i,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let L=0;L<a;L++)l[L]=new P,u[L]=new P;const h=new P,f=new P,m=new P,g=new ot,d=new ot,p=new ot,_=new P,y=new P;function S(L,R,$){h.fromArray(i,L*3),f.fromArray(i,R*3),m.fromArray(i,$*3),g.fromArray(o,L*2),d.fromArray(o,R*2),p.fromArray(o,$*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const K=1/(d.x*p.y-p.x*d.y);!isFinite(K)||(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(K),y.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(K),l[L].add(_),l[R].add(_),l[$].add(_),u[L].add(y),u[R].add(y),u[$].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let L=0,R=v.length;L<R;++L){const $=v[L],K=$.start,D=$.count;for(let V=K,z=K+D;V<z;V+=3)S(n[V+0],n[V+1],n[V+2])}const M=new P,E=new P,C=new P,x=new P;function b(L){C.fromArray(r,L*3),x.copy(C);const R=l[L];M.copy(R),M.sub(C.multiplyScalar(C.dot(R))).normalize(),E.crossVectors(x,R);const K=E.dot(u[L])<0?-1:1;c[L*4]=M.x,c[L*4+1]=M.y,c[L*4+2]=M.z,c[L*4+3]=K}for(let L=0,R=v.length;L<R;++L){const $=v[L],K=$.start,D=$.count;for(let V=K,z=K+D;V<z;V+=3)b(n[V+0]),b(n[V+1]),b(n[V+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),d=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,d),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const o=n[i].array,a=t.attributes[i],c=a.array,l=a.itemSize*e,u=Math.min(c.length,o.length-l);for(let h=0,f=l;h<u;h++,f++)o[f]=c[h]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let d=0,p=c.length;d<p;d++){a.isInterleavedBufferAttribute?m=c[d]*a.data.stride+a.offset:m=c[d]*u;for(let _=0;_<u;_++)f[g++]=l[m++]}return new we(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new oe,Vi=new _u,Oo=new $s,Vn=new P,Hn=new P,Wn=new P,No=new P,Uo=new P,Bo=new P,_s=new P,xs=new P,vs=new P,ys=new ot,Ms=new ot,Ss=new ot,ko=new P,ws=new P;class un extends Ye{constructor(t=new pn,e=new vu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(r),t.ray.intersectsSphere(Oo)===!1)||(sc.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(sc),n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],y=i[_.materialIndex],S=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let M=S,E=v;M<E;M+=3){const C=a.getX(M),x=a.getX(M+1),b=a.getX(M+2);o=bs(this,y,t,Vi,c,l,u,h,f,C,x,b),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=d,y=p;_<y;_+=3){const S=a.getX(_),v=a.getX(_+1),M=a.getX(_+2);o=bs(this,i,t,Vi,c,l,u,h,f,S,v,M),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],y=i[_.materialIndex],S=Math.max(_.start,g.start),v=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let M=S,E=v;M<E;M+=3){const C=M,x=M+1,b=M+2;o=bs(this,y,t,Vi,c,l,u,h,f,C,x,b),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(c.count,g.start+g.count);for(let _=d,y=p;_<y;_+=3){const S=_,v=_+1,M=_+2;o=bs(this,i,t,Vi,c,l,u,h,f,S,v,M),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}}function _d(s,t,e,n,i,r,o,a){let c;if(t.side===en?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side!==lr,a),c===null)return null;ws.copy(a),ws.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ws);return l<e.near||l>e.far?null:{distance:l,point:ws.clone(),object:s}}function bs(s,t,e,n,i,r,o,a,c,l,u,h){Vn.fromBufferAttribute(i,l),Hn.fromBufferAttribute(i,u),Wn.fromBufferAttribute(i,h);const f=s.morphTargetInfluences;if(r&&f){_s.set(0,0,0),xs.set(0,0,0),vs.set(0,0,0);for(let g=0,d=r.length;g<d;g++){const p=f[g],_=r[g];p!==0&&(No.fromBufferAttribute(_,l),Uo.fromBufferAttribute(_,u),Bo.fromBufferAttribute(_,h),o?(_s.addScaledVector(No,p),xs.addScaledVector(Uo,p),vs.addScaledVector(Bo,p)):(_s.addScaledVector(No.sub(Vn),p),xs.addScaledVector(Uo.sub(Hn),p),vs.addScaledVector(Bo.sub(Wn),p)))}Vn.add(_s),Hn.add(xs),Wn.add(vs)}s.isSkinnedMesh&&(s.boneTransform(l,Vn),s.boneTransform(u,Hn),s.boneTransform(h,Wn));const m=_d(s,t,e,n,Vn,Hn,Wn,ko);if(m){a&&(ys.fromBufferAttribute(a,l),Ms.fromBufferAttribute(a,u),Ss.fromBufferAttribute(a,h),m.uv=Cn.getUV(ko,Vn,Hn,Wn,ys,Ms,Ss,new ot)),c&&(ys.fromBufferAttribute(c,l),Ms.fromBufferAttribute(c,u),Ss.fromBufferAttribute(c,h),m.uv2=Cn.getUV(ko,Vn,Hn,Wn,ys,Ms,Ss,new ot));const g={a:l,b:u,c:h,normal:new P,materialIndex:0};Cn.getNormal(Vn,Hn,Wn,g.normal),m.face=g}return m}class ss extends pn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Rn(l,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(h,2));function g(d,p,_,y,S,v,M,E,C,x,b){const L=v/C,R=M/x,$=v/2,K=M/2,D=E/2,V=C+1,z=x+1;let H=0,q=0;const O=new P;for(let U=0;U<z;U++){const Q=U*R-K;for(let j=0;j<V;j++){const it=j*L-$;O[d]=it*y,O[p]=Q*S,O[_]=D,l.push(O.x,O.y,O.z),O[d]=0,O[p]=0,O[_]=E>0?1:-1,u.push(O.x,O.y,O.z),h.push(j/C),h.push(1-U/x),H+=1}}for(let U=0;U<x;U++)for(let Q=0;Q<C;Q++){const j=f+Q+V*U,it=f+Q+V*(U+1),ct=f+(Q+1)+V*(U+1),xt=f+(Q+1)+V*U;c.push(j,it,xt),c.push(it,ct,xt),q+=6}a.addGroup(m,q,b),m+=q,f+=H}}static fromJSON(t){return new ss(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function pe(s){const t={};for(let e=0;e<s.length;e++){const n=fr(s[e]);for(const i in n)t[i]=n[i]}return t}function xd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}const vd={clone:fr,merge:pe};var yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yd,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Su extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qe extends Su{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yl*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=90,Wi=1;class Sd extends Ye{constructor(t,e,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Qe(Hi,Wi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new P(1,0,0)),this.add(i);const r=new Qe(Hi,Wi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new P(-1,0,0)),this.add(r);const o=new Qe(Hi,Wi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new P(0,1,0)),this.add(o);const a=new Qe(Hi,Wi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new P(0,-1,0)),this.add(a);const c=new Qe(Hi,Wi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,1)),this.add(c);const l=new Qe(Hi,Wi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,-1)),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=hn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class wu extends rn{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:cr,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wd extends Qn{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ss(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:jn});r.uniforms.tEquirect.value=e;const o=new un(i,r),a=e.minFilter;return e.minFilter===js&&(e.minFilter=Ge),new Sd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Go=new P,bd=new P,Td=new Ve;class ci{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Go.subVectors(n,e).cross(bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Go),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Td.getNormalMatrix(t),i=this.coplanarPoint(Go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new $s,Ts=new P;class bu{constructor(t=new ci,e=new ci,n=new ci,i=new ci,r=new ci,o=new ci){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],y=n[14],S=n[15];return e[0].setComponents(a-i,h-c,d-f,S-p).normalize(),e[1].setComponents(a+i,h+c,d+f,S+p).normalize(),e[2].setComponents(a+r,h+l,d+m,S+_).normalize(),e[3].setComponents(a-r,h-l,d-m,S-_).normalize(),e[4].setComponents(a-o,h-u,d-g,S-y).normalize(),e[5].setComponents(a+o,h+u,d+g,S+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSprite(t){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ts.x=i.normal.x>0?t.max.x:t.min.x,Ts.y=i.normal.y>0?t.max.y:t.min.y,Ts.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ed(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,m=u.updateRange;s.bindBuffer(h,l),m.count===-1?s.bufferSubData(h,0,f):(e?s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class Ks extends pn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,f=e/c,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const y=_*f-o;for(let S=0;S<l;S++){const v=S*h-r;g.push(v,-y,0),d.push(0,0,1),p.push(S/a),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let y=0;y<a;y++){const S=y+l*_,v=y+l*(_+1),M=y+1+l*(_+1),E=y+1+l*_;m.push(S,v,E),m.push(v,M,E)}this.setIndex(m),this.setAttribute("position",new Rn(g,3)),this.setAttribute("normal",new Rn(d,3)),this.setAttribute("uv",new Rn(p,2))}static fromJSON(t){return new Ks(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id="vec3 transformed = vec3( position );",zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Od=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Nd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xd=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,Zd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",tp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ep=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,hp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dp=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,pp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,mp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Mp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Sp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Np=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,kp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,$p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,im=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,om=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,gm=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_m=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,xm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,vm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ym=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Mm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Sm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Pm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Rm=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Om=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Gm=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,qm=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ym=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Rt={alphamap_fragment:Ad,alphamap_pars_fragment:Cd,alphatest_fragment:Pd,alphatest_pars_fragment:Ld,aomap_fragment:Rd,aomap_pars_fragment:Dd,begin_vertex:Id,beginnormal_vertex:zd,bsdfs:Fd,iridescence_fragment:Od,bumpmap_pars_fragment:Nd,clipping_planes_fragment:Ud,clipping_planes_pars_fragment:Bd,clipping_planes_pars_vertex:kd,clipping_planes_vertex:Gd,color_fragment:Vd,color_pars_fragment:Hd,color_pars_vertex:Wd,color_vertex:qd,common:Xd,cube_uv_reflection_fragment:Yd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:Jd,displacementmap_vertex:jd,emissivemap_fragment:$d,emissivemap_pars_fragment:Kd,encodings_fragment:Qd,encodings_pars_fragment:tp,envmap_fragment:ep,envmap_common_pars_fragment:np,envmap_pars_fragment:ip,envmap_pars_vertex:rp,envmap_physical_pars_fragment:mp,envmap_vertex:sp,fog_vertex:op,fog_pars_vertex:ap,fog_fragment:lp,fog_pars_fragment:cp,gradientmap_pars_fragment:up,lightmap_fragment:hp,lightmap_pars_fragment:fp,lights_lambert_vertex:dp,lights_pars_begin:pp,lights_toon_fragment:gp,lights_toon_pars_fragment:_p,lights_phong_fragment:xp,lights_phong_pars_fragment:vp,lights_physical_fragment:yp,lights_physical_pars_fragment:Mp,lights_fragment_begin:Sp,lights_fragment_maps:wp,lights_fragment_end:bp,logdepthbuf_fragment:Tp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:Ap,logdepthbuf_vertex:Cp,map_fragment:Pp,map_pars_fragment:Lp,map_particle_fragment:Rp,map_particle_pars_fragment:Dp,metalnessmap_fragment:Ip,metalnessmap_pars_fragment:zp,morphcolor_vertex:Fp,morphnormal_vertex:Op,morphtarget_pars_vertex:Np,morphtarget_vertex:Up,normal_fragment_begin:Bp,normal_fragment_maps:kp,normal_pars_fragment:Gp,normal_pars_vertex:Vp,normal_vertex:Hp,normalmap_pars_fragment:Wp,clearcoat_normal_fragment_begin:qp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:Zp,output_fragment:Jp,packing:jp,premultiplied_alpha_fragment:$p,project_vertex:Kp,dithering_fragment:Qp,dithering_pars_fragment:tm,roughnessmap_fragment:em,roughnessmap_pars_fragment:nm,shadowmap_pars_fragment:im,shadowmap_pars_vertex:rm,shadowmap_vertex:sm,shadowmask_pars_fragment:om,skinbase_vertex:am,skinning_pars_vertex:lm,skinning_vertex:cm,skinnormal_vertex:um,specularmap_fragment:hm,specularmap_pars_fragment:fm,tonemapping_fragment:dm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:_m,uv_pars_vertex:xm,uv_vertex:vm,uv2_pars_fragment:ym,uv2_pars_vertex:Mm,uv2_vertex:Sm,worldpos_vertex:wm,background_vert:bm,background_frag:Tm,cube_vert:Em,cube_frag:Am,depth_vert:Cm,depth_frag:Pm,distanceRGBA_vert:Lm,distanceRGBA_frag:Rm,equirect_vert:Dm,equirect_frag:Im,linedashed_vert:zm,linedashed_frag:Fm,meshbasic_vert:Om,meshbasic_frag:Nm,meshlambert_vert:Um,meshlambert_frag:Bm,meshmatcap_vert:km,meshmatcap_frag:Gm,meshnormal_vert:Vm,meshnormal_frag:Hm,meshphong_vert:Wm,meshphong_frag:qm,meshphysical_vert:Xm,meshphysical_frag:Ym,meshtoon_vert:Zm,meshtoon_frag:Jm,points_vert:jm,points_frag:$m,shadow_vert:Km,shadow_frag:Qm,sprite_vert:tg,sprite_frag:eg},rt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ve},uv2Transform:{value:new Ve},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}}},an={basic:{uniforms:pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.fog,rt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:pe([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:pe([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:pe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:pe([rt.points,rt.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:pe([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:pe([rt.common,rt.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:pe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:pe([rt.sprite,rt.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},cube:{uniforms:pe([rt.envmap,{opacity:{value:1}}]),vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:pe([rt.common,rt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:pe([rt.lights,rt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};an.physical={uniforms:pe([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ot(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};function ng(s,t,e,n,i,r){const o=new Ht(0);let a=i===!0?0:1,c,l,u=null,h=0,f=null;function m(d,p){let _=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=t.get(y));const S=s.xr,v=S.getSession&&S.getSession();v&&v.environmentBlendMode==="additive"&&(y=null),y===null?g(o,a):y&&y.isColor&&(g(y,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Js)?(l===void 0&&(l=new un(new ss(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:fr(an.cube.uniforms),vertexShader:an.cube.vertexShader,fragmentShader:an.cube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(u!==y||h!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new un(new Ks(2,2),new Dn({name:"BackgroundMaterial",uniforms:fr(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=s.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,p){e.buffers.color.setClear(d.r,d.g,d.b,p,r)}return{getClearColor:function(){return o},setClearColor:function(d,p=1){o.set(d),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,g(o,a)},render:m}}function ig(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,u=!1;function h(D,V,z,H,q){let O=!1;if(o){const U=d(H,z,V);l!==U&&(l=U,m(l.object)),O=_(D,H,z,q),O&&y(D,H,z,q)}else{const U=V.wireframe===!0;(l.geometry!==H.id||l.program!==z.id||l.wireframe!==U)&&(l.geometry=H.id,l.program=z.id,l.wireframe=U,O=!0)}q!==null&&e.update(q,34963),(O||u)&&(u=!1,x(D,V,z,H),q!==null&&s.bindBuffer(34963,e.get(q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function d(D,V,z){const H=z.wireframe===!0;let q=a[D.id];q===void 0&&(q={},a[D.id]=q);let O=q[V.id];O===void 0&&(O={},q[V.id]=O);let U=O[H];return U===void 0&&(U=p(f()),O[H]=U),U}function p(D){const V=[],z=[],H=[];for(let q=0;q<i;q++)V[q]=0,z[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:z,attributeDivisors:H,object:D,attributes:{},index:null}}function _(D,V,z,H){const q=l.attributes,O=V.attributes;let U=0;const Q=z.getAttributes();for(const j in Q)if(Q[j].location>=0){const ct=q[j];let xt=O[j];if(xt===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor)),ct===void 0||ct.attribute!==xt||xt&&ct.data!==xt.data)return!0;U++}return l.attributesNum!==U||l.index!==H}function y(D,V,z,H){const q={},O=V.attributes;let U=0;const Q=z.getAttributes();for(const j in Q)if(Q[j].location>=0){let ct=O[j];ct===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor));const xt={};xt.attribute=ct,ct&&ct.data&&(xt.data=ct.data),q[j]=xt,U++}l.attributes=q,l.attributesNum=U,l.index=H}function S(){const D=l.newAttributes;for(let V=0,z=D.length;V<z;V++)D[V]=0}function v(D){M(D,0)}function M(D,V){const z=l.newAttributes,H=l.enabledAttributes,q=l.attributeDivisors;z[D]=1,H[D]===0&&(s.enableVertexAttribArray(D),H[D]=1),q[D]!==V&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,V),q[D]=V)}function E(){const D=l.newAttributes,V=l.enabledAttributes;for(let z=0,H=V.length;z<H;z++)V[z]!==D[z]&&(s.disableVertexAttribArray(z),V[z]=0)}function C(D,V,z,H,q,O){n.isWebGL2===!0&&(z===5124||z===5125)?s.vertexAttribIPointer(D,V,z,q,O):s.vertexAttribPointer(D,V,z,H,q,O)}function x(D,V,z,H){if(n.isWebGL2===!1&&(D.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const q=H.attributes,O=z.getAttributes(),U=V.defaultAttributeValues;for(const Q in O){const j=O[Q];if(j.location>=0){let it=q[Q];if(it===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),it!==void 0){const ct=it.normalized,xt=it.itemSize,Y=e.get(it);if(Y===void 0)continue;const Pt=Y.buffer,yt=Y.type,wt=Y.bytesPerElement;if(it.isInterleavedBufferAttribute){const at=it.data,Dt=at.stride,Z=it.offset;if(at.isInstancedInterleavedBuffer){for(let X=0;X<j.locationSize;X++)M(j.location+X,at.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let X=0;X<j.locationSize;X++)v(j.location+X);s.bindBuffer(34962,Pt);for(let X=0;X<j.locationSize;X++)C(j.location+X,xt/j.locationSize,yt,ct,Dt*wt,(Z+xt/j.locationSize*X)*wt)}else{if(it.isInstancedBufferAttribute){for(let at=0;at<j.locationSize;at++)M(j.location+at,it.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let at=0;at<j.locationSize;at++)v(j.location+at);s.bindBuffer(34962,Pt);for(let at=0;at<j.locationSize;at++)C(j.location+at,xt/j.locationSize,yt,ct,xt*wt,xt/j.locationSize*at*wt)}}else if(U!==void 0){const ct=U[Q];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(j.location,ct);break;case 3:s.vertexAttrib3fv(j.location,ct);break;case 4:s.vertexAttrib4fv(j.location,ct);break;default:s.vertexAttrib1fv(j.location,ct)}}}}E()}function b(){$();for(const D in a){const V=a[D];for(const z in V){const H=V[z];for(const q in H)g(H[q].object),delete H[q];delete V[z]}delete a[D]}}function L(D){if(a[D.id]===void 0)return;const V=a[D.id];for(const z in V){const H=V[z];for(const q in H)g(H[q].object),delete H[q];delete V[z]}delete a[D.id]}function R(D){for(const V in a){const z=a[V];if(z[D.id]===void 0)continue;const H=z[D.id];for(const q in H)g(H[q].object),delete H[q];delete z[D.id]}}function $(){K(),u=!0,l!==c&&(l=c,m(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:$,resetDefaultState:K,dispose:b,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:v,disableUnusedAttributes:E}}function rg(s,t,e,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),e.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,l,u,h),e.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function sg(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),d=s.getParameter(34921),p=s.getParameter(36347),_=s.getParameter(36348),y=s.getParameter(36349),S=f>0,v=o||t.has("OES_texture_float"),M=S&&v,E=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:E}}function og(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ci,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,e=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{const y=r?0:n,S=y*4;let v=_.clippingState||null;c.value=v,v=u(g,f,S,m);for(let M=0;M!==S;++M)v[M]=e[M];_.clippingState=v,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=c.value,g!==!0||p===null){const _=m+d*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<_)&&(p=new Float32Array(_));for(let S=0,v=m;S!==d;++S,v+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,p}}function ag(s){let t=new WeakMap;function e(o,a){return a===la?o.mapping=cr:a===ca&&(o.mapping=ur),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===la||a===ca)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new wd(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Na extends Su{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ji=4,oc=[.125,.215,.35,.446,.526,.582],fi=20,Vo=new Na,ac=new Ht;let Ho=null;const ui=(1+Math.sqrt(5))/2,Xi=1/ui,lc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ui,Xi),new P(0,ui,-Xi),new P(Xi,0,ui),new P(-Xi,0,ui),new P(ui,Xi,0),new P(-ui,Xi,0)];class cc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ho=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ho),t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cr||t.mapping===ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ho=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Wr,format:cn,encoding:Ti,depthBuffer:!1},i=uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lg(r)),this._blurMaterial=cg(r,t,e)}return i}_compileMaterial(t){const e=new un(this._lodPlanes[0],t);this._renderer.compile(e,Vo)}_sceneToCubeUV(t,e,n,i){const a=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ac),u.toneMapping=hn,u.autoClear=!1;const m=new vu({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new un(new ss,m);let d=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,d=!0):(m.color.copy(ac),d=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):y===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const S=this._cubeSize;Es(i,y*S,_>2?S:0,S,S),u.setRenderTarget(i),d&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===cr||t.mapping===ur;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Es(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Vo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=lc[(i-1)%lc.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new un(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*fi-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):fi;p>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fi}`);const _=[];let y=0;for(let C=0;C<fi;++C){const x=C/d,b=Math.exp(-x*x/2);_.push(b),C===0?y+=b:C<p&&(y+=2*b)}for(let C=0;C<_.length;C++)_[C]=_[C]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const v=this._sizeLods[i],M=3*v*(i>S-ji?i-S+ji:0),E=4*(this._cubeSize-v);Es(e,M,E,3*v,2*v),c.setRenderTarget(e),c.render(h,Vo)}}function lg(s){const t=[],e=[],n=[];let i=s;const r=s-ji+1+oc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-ji?c=oc[o-s+ji-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,y=new Float32Array(d*g*m),S=new Float32Array(p*g*m),v=new Float32Array(_*g*m);for(let E=0;E<m;E++){const C=E%3*2/3-1,x=E>2?0:-1,b=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];y.set(b,d*g*E),S.set(f,p*g*E);const L=[E,E,E,E,E,E];v.set(L,_*g*E)}const M=new pn;M.setAttribute("position",new we(y,d)),M.setAttribute("uv",new we(S,p)),M.setAttribute("faceIndex",new we(v,_)),t.push(M),i>ji&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uc(s,t,e){const n=new Qn(s,t,e);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function cg(s,t,e){const n=new Float32Array(fi),i=new P(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function hc(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function fc(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ua(){return`

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
	`}function ug(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===la||c===ca,u=c===cr||c===ur;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new cc(s)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new cc(s));const f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fg(s,t,e,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)t.update(d[p],34962)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const y=m.array;d=m.version;for(let S=0,v=y.length;S<v;S+=3){const M=y[S+0],E=y[S+1],C=y[S+2];f.push(M,E,E,C,C,M)}}else{const y=g.array;d=g.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const M=S+0,E=S+1,C=S+2;f.push(M,E,E,C,C,M)}}const p=new(fu(f)?Mu:yu)(f,1);p.version=d;const _=r.get(h);_&&t.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function dg(s,t,e,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,m){s.drawElements(r,m,a,f*c),e.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=s,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,a,f*c,g),e.update(m,r,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function pg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function mg(s,t){return s[0]-t[0]}function gg(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Wo(s,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Uint8Array?e=255:n instanceof Uint16Array?e=65535:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(e)}function _g(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ue,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h,f){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==d){let V=function(){K.dispose(),r.delete(u),u.removeEventListener("dispose",V)};p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let b=0;S===!0&&(b=1),v===!0&&(b=2),M===!0&&(b=3);let L=u.attributes.position.count*b,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const $=new Float32Array(L*R*4*d),K=new gu($,L,R,d);K.type=Xn,K.needsUpdate=!0;const D=b*4;for(let z=0;z<d;z++){const H=E[z],q=C[z],O=x[z],U=L*R*4*z;for(let Q=0;Q<H.count;Q++){const j=Q*D;S===!0&&(o.fromBufferAttribute(H,Q),H.normalized===!0&&Wo(o,H),$[U+j+0]=o.x,$[U+j+1]=o.y,$[U+j+2]=o.z,$[U+j+3]=0),v===!0&&(o.fromBufferAttribute(q,Q),q.normalized===!0&&Wo(o,q),$[U+j+4]=o.x,$[U+j+5]=o.y,$[U+j+6]=o.z,$[U+j+7]=0),M===!0&&(o.fromBufferAttribute(O,Q),O.normalized===!0&&Wo(o,O),$[U+j+8]=o.x,$[U+j+9]=o.y,$[U+j+10]=o.z,$[U+j+11]=O.itemSize===4?o.w:1)}}p={count:d,texture:K,size:new ot(L,R)},r.set(u,p),u.addEventListener("dispose",V)}let _=0;for(let S=0;S<m.length;S++)_+=m[S];const y=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let v=0;v<g;v++)d[v]=[v,0];n[u.id]=d}for(let v=0;v<g;v++){const M=d[v];M[0]=v,M[1]=m[v]}d.sort(gg);for(let v=0;v<8;v++)v<g&&d[v][1]?(a[v][0]=d[v][0],a[v][1]=d[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(mg);const p=u.morphAttributes.position,_=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const M=a[v],E=M[0],C=M[1];E!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+v)!==p[E]&&u.setAttribute("morphTarget"+v,p[E]),_&&u.getAttribute("morphNormal"+v)!==_[E]&&u.setAttribute("morphNormal"+v,_[E]),i[v]=C,y+=C):(p&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const S=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",S),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function xg(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);return i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Eu=new rn,Au=new gu,Cu=new ad,Pu=new wu,dc=[],pc=[],mc=new Float32Array(16),gc=new Float32Array(9),_c=new Float32Array(4);function Sr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=dc[i];if(r===void 0&&(r=new Float32Array(i),dc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Qs(s,t){let e=pc[t];e===void 0&&(e=new Int32Array(t),pc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function vg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function Mg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function Sg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function wg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;_c.set(n),s.uniformMatrix2fv(this.addr,!1,_c),ye(e,n)}}function bg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;gc.set(n),s.uniformMatrix3fv(this.addr,!1,gc),ye(e,n)}}function Tg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;mc.set(n),s.uniformMatrix4fv(this.addr,!1,mc),ye(e,n)}}function Eg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ag(s,t){const e=this.cache;ve(e,t)||(s.uniform2iv(this.addr,t),ye(e,t))}function Cg(s,t){const e=this.cache;ve(e,t)||(s.uniform3iv(this.addr,t),ye(e,t))}function Pg(s,t){const e=this.cache;ve(e,t)||(s.uniform4iv(this.addr,t),ye(e,t))}function Lg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Rg(s,t){const e=this.cache;ve(e,t)||(s.uniform2uiv(this.addr,t),ye(e,t))}function Dg(s,t){const e=this.cache;ve(e,t)||(s.uniform3uiv(this.addr,t),ye(e,t))}function Ig(s,t){const e=this.cache;ve(e,t)||(s.uniform4uiv(this.addr,t),ye(e,t))}function zg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Eu,i)}function Fg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Cu,i)}function Og(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pu,i)}function Ng(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Au,i)}function Ug(s){switch(s){case 5126:return vg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return wg;case 35675:return bg;case 35676:return Tg;case 5124:case 35670:return Eg;case 35667:case 35671:return Ag;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Rg;case 36295:return Dg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Ng}}function Bg(s,t){s.uniform1fv(this.addr,t)}function kg(s,t){const e=Sr(t,this.size,2);s.uniform2fv(this.addr,e)}function Gg(s,t){const e=Sr(t,this.size,3);s.uniform3fv(this.addr,e)}function Vg(s,t){const e=Sr(t,this.size,4);s.uniform4fv(this.addr,e)}function Hg(s,t){const e=Sr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Wg(s,t){const e=Sr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function qg(s,t){const e=Sr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Xg(s,t){s.uniform1iv(this.addr,t)}function Yg(s,t){s.uniform2iv(this.addr,t)}function Zg(s,t){s.uniform3iv(this.addr,t)}function Jg(s,t){s.uniform4iv(this.addr,t)}function jg(s,t){s.uniform1uiv(this.addr,t)}function $g(s,t){s.uniform2uiv(this.addr,t)}function Kg(s,t){s.uniform3uiv(this.addr,t)}function Qg(s,t){s.uniform4uiv(this.addr,t)}function t_(s,t,e){const n=t.length,i=Qs(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2D(t[r]||Eu,i[r])}function e_(s,t,e){const n=t.length,i=Qs(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Cu,i[r])}function n_(s,t,e){const n=t.length,i=Qs(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTextureCube(t[r]||Pu,i[r])}function i_(s,t,e){const n=t.length,i=Qs(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Au,i[r])}function r_(s){switch(s){case 5126:return Bg;case 35664:return kg;case 35665:return Gg;case 35666:return Vg;case 35674:return Hg;case 35675:return Wg;case 35676:return qg;case 5124:case 35670:return Xg;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return jg;case 36294:return $g;case 36295:return Kg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}class s_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Ug(e.type)}}class o_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=r_(e.type)}}class a_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function xc(s,t){s.seq.push(t),s.map[t.id]=t}function l_(s,t,e){const n=s.name,i=n.length;for(qo.lastIndex=0;;){const r=qo.exec(n),o=qo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){xc(e,l===void 0?new s_(a,s,t):new o_(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new a_(a),xc(e,h)),e=h}}}class Os{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);l_(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function vc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let c_=0;function u_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function h_(s){switch(s){case Ti:return["Linear","( value )"];case qt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function yc(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+u_(s.getShaderSource(t),o)}else return i}function f_(s,t){const e=h_(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function d_(s,t){let e;switch(t){case If:e="Linear";break;case zf:e="Reinhard";break;case Ff:e="OptimizedCineon";break;case Of:e="ACESFilmic";break;case Nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function p_(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ir).join(`
`)}function m_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function g_(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ir(s){return s!==""}function Mc(s,t){return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const __=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(s){return s.replace(__,x_)}function x_(s,t){const e=Rt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return da(e)}const v_=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(s){return s.replace(y_,Lu).replace(v_,M_)}function M_(s,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Lu(s,t,e,n)}function Lu(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function S_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ou?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===uf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Dr&&(t="SHADOWMAP_TYPE_VSM"),t}function w_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cr:case ur:t="ENVMAP_TYPE_CUBE";break;case Js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function b_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ur:t="ENVMAP_MODE_REFRACTION";break}return t}function T_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cu:t="ENVMAP_BLENDING_MULTIPLY";break;case Rf:t="ENVMAP_BLENDING_MIX";break;case Df:t="ENVMAP_BLENDING_ADD";break}return t}function E_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function A_(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=S_(e),l=w_(e),u=b_(e),h=T_(e),f=E_(e),m=e.isWebGL2?"":p_(e),g=m_(r),d=i.createProgram();let p,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Ir).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Ir).join(`
`),_.length>0&&(_+=`
`)):(p=[bc(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),_=[m,bc(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hn?"#define TONE_MAPPING":"",e.toneMapping!==hn?Rt.tonemapping_pars_fragment:"",e.toneMapping!==hn?d_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Rt.encodings_pars_fragment,f_("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),o=da(o),o=Mc(o,e),o=Sc(o,e),a=da(a),a=Mc(a,e),a=Sc(a,e),o=wc(o),a=wc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=y+p+o,v=y+_+a,M=vc(i,35633,S),E=vc(i,35632,v);if(i.attachShader(d,M),i.attachShader(d,E),e.index0AttributeName!==void 0?i.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),s.debug.checkShaderErrors){const b=i.getProgramInfoLog(d).trim(),L=i.getShaderInfoLog(M).trim(),R=i.getShaderInfoLog(E).trim();let $=!0,K=!0;if(i.getProgramParameter(d,35714)===!1){$=!1;const D=yc(i,M,"vertex"),V=yc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+b+`
`+D+`
`+V)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(L===""||R==="")&&(K=!1);K&&(this.diagnostics={runnable:$,programLog:b,vertexShader:{log:L,prefix:p},fragmentShader:{log:R,prefix:_}})}i.deleteShader(M),i.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new Os(i,d)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=g_(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=e.shaderName,this.id=c_++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=E,this}let C_=0;class P_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const n=new L_(t);e.set(t,n)}return e.get(t)}}class L_{constructor(t){this.id=C_++,this.code=t,this.usedTimes=0}}function R_(s,t,e,n,i,r,o){const a=new xu,c=new P_,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,b,L,R,$){const K=R.fog,D=$.geometry,V=x.isMeshStandardMaterial?R.environment:null,z=(x.isMeshStandardMaterial?e:t).get(x.envMap||V),H=!!z&&z.mapping===Js?z.image.height:null,q=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const O=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,U=O!==void 0?O.length:0;let Q=0;D.morphAttributes.position!==void 0&&(Q=1),D.morphAttributes.normal!==void 0&&(Q=2),D.morphAttributes.color!==void 0&&(Q=3);let j,it,ct,xt;if(q){const Dt=an[q];j=Dt.vertexShader,it=Dt.fragmentShader}else j=x.vertexShader,it=x.fragmentShader,c.update(x),ct=c.getVertexShaderID(x),xt=c.getFragmentShaderID(x);const Y=s.getRenderTarget(),Pt=x.alphaTest>0,yt=x.clearcoat>0,wt=x.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:x.type,vertexShader:j,fragmentShader:it,defines:x.defines,customVertexShaderID:ct,customFragmentShaderID:xt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?s.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Ti,map:!!x.map,matcap:!!x.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:H,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===id,tangentSpaceNormalMap:x.normalMapType===nd,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===qt,clearcoat:yt,clearcoatMap:yt&&!!x.clearcoatMap,clearcoatRoughnessMap:yt&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:yt&&!!x.clearcoatNormalMap,iridescence:wt,iridescenceMap:wt&&!!x.iridescenceMap,iridescenceThicknessMap:wt&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===tr,alphaMap:!!x.alphaMap,alphaTest:Pt,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!K,useFog:x.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:hn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===lr,flipSided:x.side===en,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(b,x),y(b,x),b.push(s.outputEncoding)),b.push(x.customProgramCacheKey),b.join()}function _(x,b){x.push(b.precision),x.push(b.outputEncoding),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.combine),x.push(b.vertexUvs),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function y(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),b.fog&&a.enable(33),x.push(a.mask),a.disableAll(),b.useFog&&a.enable(0),b.flatShading&&a.enable(1),b.logarithmicDepthBuffer&&a.enable(2),b.skinning&&a.enable(3),b.morphTargets&&a.enable(4),b.morphNormals&&a.enable(5),b.morphColors&&a.enable(6),b.premultipliedAlpha&&a.enable(7),b.shadowMapEnabled&&a.enable(8),b.physicallyCorrectLights&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.useDepthPacking&&a.enable(12),b.dithering&&a.enable(13),b.specularIntensityMap&&a.enable(14),b.specularColorMap&&a.enable(15),b.transmission&&a.enable(16),b.transmissionMap&&a.enable(17),b.thicknessMap&&a.enable(18),b.sheen&&a.enable(19),b.sheenColorMap&&a.enable(20),b.sheenRoughnessMap&&a.enable(21),b.decodeVideoTexture&&a.enable(22),b.opaque&&a.enable(23),x.push(a.mask)}function S(x){const b=g[x.type];let L;if(b){const R=an[b];L=vd.clone(R.uniforms)}else L=x.uniforms;return L}function v(x,b){let L;for(let R=0,$=l.length;R<$;R++){const K=l[R];if(K.cacheKey===b){L=K,++L.usedTimes;break}}return L===void 0&&(L=new A_(s,b,x,r),l.push(L)),L}function M(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),x.destroy()}}function E(x){c.remove(x)}function C(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:S,acquireProgram:v,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:C}}function D_(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function I_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Tc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ec(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,m,g,d,p){let _=s[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},s[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),t++,_}function a(h,f,m,g,d,p){const _=o(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function c(h,f,m,g,d,p){const _=o(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function l(h,f){e.length>1&&e.sort(h||I_),n.length>1&&n.sort(f||Tc),i.length>1&&i.sort(f||Tc)}function u(){for(let h=t,f=s.length;h<f;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function z_(){let s=new WeakMap;function t(n,i){let r;return s.has(n)===!1?(r=new Ec,s.set(n,[r])):i>=s.get(n).length?(r=new Ec,s.get(n).push(r)):r=s.get(n)[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function F_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ht};break;case"SpotLight":e={position:new P,direction:new P,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function O_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let N_=0;function U_(s,t){return(t.castShadow?1:0)-(s.castShadow?1:0)}function B_(s,t){const e=new F_,n=O_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new P);const r=new P,o=new oe,a=new oe;function c(u,h){let f=0,m=0,g=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,p=0,_=0,y=0,S=0,v=0,M=0,E=0;u.sort(U_);const C=h!==!0?Math.PI:1;for(let b=0,L=u.length;b<L;b++){const R=u[b],$=R.color,K=R.intensity,D=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=$.r*K*C,m+=$.g*K*C,g+=$.b*K*C;else if(R.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],K);else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity*C),R.castShadow){const H=R.shadow,q=n.get(R);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=R.shadow.matrix,v++}i.directional[d]=z,d++}else if(R.isSpotLight){const z=e.get(R);if(z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy($).multiplyScalar(K*C),z.distance=D,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,R.castShadow){const H=R.shadow,q=n.get(R);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=V,i.spotShadowMatrix[_]=R.shadow.matrix,E++}i.spot[_]=z,_++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy($).multiplyScalar(K),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[y]=z,y++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity*C),z.distance=R.distance,z.decay=R.decay,R.castShadow){const H=R.shadow,q=n.get(R);q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,q.shadowCameraNear=H.camera.near,q.shadowCameraFar=H.camera.far,i.pointShadow[p]=q,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=R.shadow.matrix,M++}i.point[p]=z,p++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(K*C),z.groundColor.copy(R.groundColor).multiplyScalar(K*C),i.hemi[S]=z,S++}}y>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const x=i.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==y||x.hemiLength!==S||x.numDirectionalShadows!==v||x.numPointShadows!==M||x.numSpotShadows!==E)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=y,i.point.length=p,i.hemi.length=S,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=E,x.directionalLength=d,x.pointLength=p,x.spotLength=_,x.rectAreaLength=y,x.hemiLength=S,x.numDirectionalShadows=v,x.numPointShadows=M,x.numSpotShadows=E,i.version=N_++)}function l(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let y=0,S=u.length;y<S;y++){const v=u[y];if(v.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),f++}else if(v.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const M=i.rectArea[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),d++}else if(v.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),m++}else if(v.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(_),p++}}}return{setup:c,setupView:l,state:i}}function Ac(s,t){const e=new B_(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function k_(s,t){let e=new WeakMap;function n(r,o=0){let a;return e.has(r)===!1?(a=new Ac(s,t),e.set(r,[a])):o>=e.get(r).length?(a=new Ac(s,t),e.get(r).push(a)):a=e.get(r)[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class G_ extends rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class V_ extends rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
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
}`;function q_(s,t,e){let n=new bu;const i=new ot,r=new ot,o=new ue,a=new G_({depthPacking:ed}),c=new V_,l={},u=e.maxTextureSize,h={0:en,1:ar,2:lr},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:H_,fragmentShader:W_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new un(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou,this.render=function(v,M,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;const C=s.getRenderTarget(),x=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),L=s.state;L.setBlending(jn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let R=0,$=v.length;R<$;R++){const K=v[R],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const V=D.getFrameExtents();if(i.multiply(V),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/V.x),i.x=r.x*V.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/V.y),i.y=r.y*V.y,D.mapSize.y=r.y)),D.map===null){const H=this.type!==Dr?{minFilter:Me,magFilter:Me}:{};D.map=new Qn(i.x,i.y,H),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const z=D.getViewportCount();for(let H=0;H<z;H++){const q=D.getViewport(H);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),L.viewport(o),D.updateMatrices(K,H),n=D.getFrustum(),S(M,E,D.camera,K,this.type)}D.isPointLightShadow!==!0&&this.type===Dr&&_(D,E),D.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(C,x,b)};function _(v,M){const E=t.update(d);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Qn(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(M,null,E,f,d,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(M,null,E,m,d,null)}function y(v,M,E,C,x,b){let L=null;const R=E.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(R!==void 0?L=R:L=E.isPointLight===!0?c:a,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const $=L.uuid,K=M.uuid;let D=l[$];D===void 0&&(D={},l[$]=D);let V=D[K];V===void 0&&(V=L.clone(),D[K]=V),L=V}return L.visible=M.visible,L.wireframe=M.wireframe,b===Dr?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:h[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(E.matrixWorld),L.nearDistance=C,L.farDistance=x),L}function S(v,M,E,C,x){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===Dr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,v.matrixWorld);const R=t.update(v),$=v.material;if(Array.isArray($)){const K=R.groups;for(let D=0,V=K.length;D<V;D++){const z=K[D],H=$[z.materialIndex];if(H&&H.visible){const q=y(v,H,C,E.near,E.far,x);s.renderBufferDirect(E,null,R,q,v,z)}}}else if($.visible){const K=y(v,$,C,E.near,E.far,x);s.renderBufferDirect(E,null,R,K,v,null)}}const L=v.children;for(let R=0,$=L.length;R<$;R++)S(L[R],M,E,C,x)}}function X_(s,t,e){const n=e.isWebGL2;function i(){let I=!1;const ft=new ue;let W=null;const ht=new ue(0,0,0,0);return{setMask:function(ut){W!==ut&&!I&&(s.colorMask(ut,ut,ut,ut),W=ut)},setLocked:function(ut){I=ut},setClear:function(ut,Ft,ae,Qt,On){On===!0&&(ut*=Qt,Ft*=Qt,ae*=Qt),ft.set(ut,Ft,ae,Qt),ht.equals(ft)===!1&&(s.clearColor(ut,Ft,ae,Qt),ht.copy(ft))},reset:function(){I=!1,W=null,ht.set(-1,0,0,0)}}}function r(){let I=!1,ft=null,W=null,ht=null;return{setTest:function(ut){ut?Pt(2929):yt(2929)},setMask:function(ut){ft!==ut&&!I&&(s.depthMask(ut),ft=ut)},setFunc:function(ut){if(W!==ut){if(ut)switch(ut){case bf:s.depthFunc(512);break;case Tf:s.depthFunc(519);break;case Ef:s.depthFunc(513);break;case aa:s.depthFunc(515);break;case Af:s.depthFunc(514);break;case Cf:s.depthFunc(518);break;case Pf:s.depthFunc(516);break;case Lf:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);W=ut}},setLocked:function(ut){I=ut},setClear:function(ut){ht!==ut&&(s.clearDepth(ut),ht=ut)},reset:function(){I=!1,ft=null,W=null,ht=null}}}function o(){let I=!1,ft=null,W=null,ht=null,ut=null,Ft=null,ae=null,Qt=null,On=null;return{setTest:function(Zt){I||(Zt?Pt(2960):yt(2960))},setMask:function(Zt){ft!==Zt&&!I&&(s.stencilMask(Zt),ft=Zt)},setFunc:function(Zt,_n,Oe){(W!==Zt||ht!==_n||ut!==Oe)&&(s.stencilFunc(Zt,_n,Oe),W=Zt,ht=_n,ut=Oe)},setOp:function(Zt,_n,Oe){(Ft!==Zt||ae!==_n||Qt!==Oe)&&(s.stencilOp(Zt,_n,Oe),Ft=Zt,ae=_n,Qt=Oe)},setLocked:function(Zt){I=Zt},setClear:function(Zt){On!==Zt&&(s.clearStencil(Zt),On=Zt)},reset:function(){I=!1,ft=null,W=null,ht=null,ut=null,Ft=null,ae=null,Qt=null,On=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,_=!1,y=null,S=null,v=null,M=null,E=null,C=null,x=null,b=!1,L=null,R=null,$=null,K=null,D=null;const V=s.getParameter(35661);let z=!1,H=0;const q=s.getParameter(7938);q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=H>=1):q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=H>=2);let O=null,U={};const Q=s.getParameter(3088),j=s.getParameter(2978),it=new ue().fromArray(Q),ct=new ue().fromArray(j);function xt(I,ft,W){const ht=new Uint8Array(4),ut=s.createTexture();s.bindTexture(I,ut),s.texParameteri(I,10241,9728),s.texParameteri(I,10240,9728);for(let Ft=0;Ft<W;Ft++)s.texImage2D(ft+Ft,0,6408,1,1,0,6408,5121,ht);return ut}const Y={};Y[3553]=xt(3553,3553,1),Y[34067]=xt(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pt(2929),c.setFunc(aa),st(!1),Tt(gl),Pt(2884),et(jn);function Pt(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function yt(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function wt(I,ft){return m[I]!==ft?(s.bindFramebuffer(I,ft),m[I]=ft,n&&(I===36009&&(m[36160]=ft),I===36160&&(m[36009]=ft)),!0):!1}function at(I,ft){let W=d,ht=!1;if(I)if(W=g.get(ft),W===void 0&&(W=[],g.set(ft,W)),I.isWebGLMultipleRenderTargets){const ut=I.texture;if(W.length!==ut.length||W[0]!==36064){for(let Ft=0,ae=ut.length;Ft<ae;Ft++)W[Ft]=36064+Ft;W.length=ut.length,ht=!0}}else W[0]!==36064&&(W[0]=36064,ht=!0);else W[0]!==1029&&(W[0]=1029,ht=!0);ht&&(e.isWebGL2?s.drawBuffers(W):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function Dt(I){return p!==I?(s.useProgram(I),p=I,!0):!1}const Z={[Ji]:32774,[df]:32778,[pf]:32779};if(n)Z[yl]=32775,Z[Ml]=32776;else{const I=t.get("EXT_blend_minmax");I!==null&&(Z[yl]=I.MIN_EXT,Z[Ml]=I.MAX_EXT)}const X={[mf]:0,[gf]:1,[_f]:768,[au]:770,[wf]:776,[Mf]:774,[vf]:772,[xf]:769,[lu]:771,[Sf]:775,[yf]:773};function et(I,ft,W,ht,ut,Ft,ae,Qt){if(I===jn){_===!0&&(yt(3042),_=!1);return}if(_===!1&&(Pt(3042),_=!0),I!==ff){if(I!==y||Qt!==b){if((S!==Ji||E!==Ji)&&(s.blendEquation(32774),S=Ji,E=Ji),Qt)switch(I){case tr:s.blendFuncSeparate(1,771,1,771);break;case _l:s.blendFunc(1,1);break;case xl:s.blendFuncSeparate(0,769,0,1);break;case vl:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case tr:s.blendFuncSeparate(770,771,1,771);break;case _l:s.blendFunc(770,1);break;case xl:s.blendFuncSeparate(0,769,0,1);break;case vl:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,M=null,C=null,x=null,y=I,b=Qt}return}ut=ut||ft,Ft=Ft||W,ae=ae||ht,(ft!==S||ut!==E)&&(s.blendEquationSeparate(Z[ft],Z[ut]),S=ft,E=ut),(W!==v||ht!==M||Ft!==C||ae!==x)&&(s.blendFuncSeparate(X[W],X[ht],X[Ft],X[ae]),v=W,M=ht,C=Ft,x=ae),y=I,b=null}function mt(I,ft){I.side===lr?yt(2884):Pt(2884);let W=I.side===en;ft&&(W=!W),st(W),I.blending===tr&&I.transparent===!1?et(jn):et(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const ht=I.stencilWrite;l.setTest(ht),ht&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Pt(32926):yt(32926)}function st(I){L!==I&&(I?s.frontFace(2304):s.frontFace(2305),L=I)}function Tt(I){I!==lf?(Pt(2884),I!==R&&(I===gl?s.cullFace(1029):I===cf?s.cullFace(1028):s.cullFace(1032))):yt(2884),R=I}function Mt(I){I!==$&&(z&&s.lineWidth(I),$=I)}function vt(I,ft,W){I?(Pt(32823),(K!==ft||D!==W)&&(s.polygonOffset(ft,W),K=ft,D=W)):yt(32823)}function Wt(I){I?Pt(3089):yt(3089)}function kt(I){I===void 0&&(I=33984+V-1),O!==I&&(s.activeTexture(I),O=I)}function A(I,ft){O===null&&kt();let W=U[O];W===void 0&&(W={type:void 0,texture:void 0},U[O]=W),(W.type!==I||W.texture!==ft)&&(s.bindTexture(I,ft||Y[I]),W.type=I,W.texture=ft)}function w(){const I=U[O];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function B(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(I){it.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),it.copy(I))}function pt(I){ct.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ct.copy(I))}function At(I,ft){let W=h.get(ft);W===void 0&&(W=new WeakMap,h.set(ft,W));let ht=W.get(I);ht===void 0&&(ht=s.getUniformBlockIndex(ft,I.name),W.set(I,ht))}function Nt(I,ft){const ht=h.get(ft).get(I);u.get(I)!==ht&&(s.uniformBlockBinding(ft,ht,I.__bindingPointIndex),u.set(I,ht))}function Kt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},O=null,U={},m={},g=new WeakMap,d=[],p=null,_=!1,y=null,S=null,v=null,M=null,E=null,C=null,x=null,b=!1,L=null,R=null,$=null,K=null,D=null,it.set(0,0,s.canvas.width,s.canvas.height),ct.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Pt,disable:yt,bindFramebuffer:wt,drawBuffers:at,useProgram:Dt,setBlending:et,setMaterial:mt,setFlipSided:st,setCullFace:Tt,setLineWidth:Mt,setPolygonOffset:vt,setScissorTest:Wt,activeTexture:kt,bindTexture:A,unbindTexture:w,compressedTexImage2D:B,texImage2D:gt,texImage3D:dt,updateUBOMapping:At,uniformBlockBinding:Nt,texStorage2D:bt,texStorage3D:k,texSubImage2D:tt,texSubImage3D:nt,compressedTexSubImage2D:lt,scissor:_t,viewport:pt,reset:Kt}}function Y_(s,t,e,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,w){return _?new OffscreenCanvas(A,w):ks("canvas")}function S(A,w,B,tt){let nt=1;if((A.width>tt||A.height>tt)&&(nt=tt/Math.max(A.width,A.height)),nt<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const lt=w?fa:Math.floor,bt=lt(nt*A.width),k=lt(nt*A.height);d===void 0&&(d=y(bt,k));const gt=B?y(bt,k):d;return gt.width=bt,gt.height=k,gt.getContext("2d").drawImage(A,0,0,bt,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+bt+"x"+k+")."),gt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return Zl(A.width)&&Zl(A.height)}function M(A){return a?!1:A.wrapS!==tn||A.wrapT!==tn||A.minFilter!==Me&&A.minFilter!==Ge}function E(A,w){return A.generateMipmaps&&w&&A.minFilter!==Me&&A.minFilter!==Ge}function C(A){s.generateMipmap(A)}function x(A,w,B,tt,nt=!1){if(a===!1)return w;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let lt=w;return w===6403&&(B===5126&&(lt=33326),B===5131&&(lt=33325),B===5121&&(lt=33321)),w===33319&&(B===5126&&(lt=33328),B===5131&&(lt=33327),B===5121&&(lt=33323)),w===6408&&(B===5126&&(lt=34836),B===5131&&(lt=34842),B===5121&&(lt=tt===qt&&nt===!1?35907:32856),B===32819&&(lt=32854),B===32820&&(lt=32855)),(lt===33325||lt===33326||lt===33327||lt===33328||lt===34842||lt===34836)&&t.get("EXT_color_buffer_float"),lt}function b(A,w,B){return E(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==Me&&A.minFilter!==Ge?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function L(A){return A===Me||A===Sl||A===wl?9728:9729}function R(A){const w=A.target;w.removeEventListener("dispose",R),K(w),w.isVideoTexture&&g.delete(w)}function $(A){const w=A.target;w.removeEventListener("dispose",$),V(w)}function K(A){const w=n.get(A);if(w.__webglInit===void 0)return;const B=A.source,tt=p.get(B);if(tt){const nt=tt[w.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&D(A),Object.keys(tt).length===0&&p.delete(B)}n.remove(A)}function D(A){const w=n.get(A);s.deleteTexture(w.__webglTexture);const B=A.source,tt=p.get(B);delete tt[w.__cacheKey],o.memory.textures--}function V(A){const w=A.texture,B=n.get(A),tt=n.get(w);if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)s.deleteFramebuffer(B.__webglFramebuffer[nt]),B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[nt]);else{if(s.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let nt=0;nt<B.__webglColorRenderbuffer.length;nt++)B.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[nt]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let nt=0,lt=w.length;nt<lt;nt++){const bt=n.get(w[nt]);bt.__webglTexture&&(s.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(w[nt])}n.remove(w),n.remove(A)}let z=0;function H(){z=0}function q(){const A=z;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),z+=1,A}function O(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function U(A,w){const B=n.get(A);if(A.isVideoTexture&&Wt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(B,A,w);return}}e.activeTexture(33984+w),e.bindTexture(3553,B.__webglTexture)}function Q(A,w){const B=n.get(A);if(A.version>0&&B.__version!==A.version){yt(B,A,w);return}e.activeTexture(33984+w),e.bindTexture(35866,B.__webglTexture)}function j(A,w){const B=n.get(A);if(A.version>0&&B.__version!==A.version){yt(B,A,w);return}e.activeTexture(33984+w),e.bindTexture(32879,B.__webglTexture)}function it(A,w){const B=n.get(A);if(A.version>0&&B.__version!==A.version){wt(B,A,w);return}e.activeTexture(33984+w),e.bindTexture(34067,B.__webglTexture)}const ct={[Hr]:10497,[tn]:33071,[ua]:33648},xt={[Me]:9728,[Sl]:9984,[wl]:9986,[Ge]:9729,[Uf]:9985,[js]:9987};function Y(A,w,B){if(B?(s.texParameteri(A,10242,ct[w.wrapS]),s.texParameteri(A,10243,ct[w.wrapT]),(A===32879||A===35866)&&s.texParameteri(A,32882,ct[w.wrapR]),s.texParameteri(A,10240,xt[w.magFilter]),s.texParameteri(A,10241,xt[w.minFilter])):(s.texParameteri(A,10242,33071),s.texParameteri(A,10243,33071),(A===32879||A===35866)&&s.texParameteri(A,32882,33071),(w.wrapS!==tn||w.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,10240,L(w.magFilter)),s.texParameteri(A,10241,L(w.minFilter)),w.minFilter!==Me&&w.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(w.type===Xn&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Wr&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Pt(A,w){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",R));const tt=w.source;let nt=p.get(tt);nt===void 0&&(nt={},p.set(tt,nt));const lt=O(w);if(lt!==A.__cacheKey){nt[lt]===void 0&&(nt[lt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),nt[lt].usedTimes++;const bt=nt[A.__cacheKey];bt!==void 0&&(nt[A.__cacheKey].usedTimes--,bt.usedTimes===0&&D(w)),A.__cacheKey=lt,A.__webglTexture=nt[lt].texture}return B}function yt(A,w,B){let tt=3553;w.isDataArrayTexture&&(tt=35866),w.isData3DTexture&&(tt=32879);const nt=Pt(A,w),lt=w.source;if(e.activeTexture(33984+B),e.bindTexture(tt,A.__webglTexture),lt.version!==lt.__currentVersion||nt===!0){s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const bt=M(w)&&v(w.image)===!1;let k=S(w.image,bt,!1,u);k=kt(w,k);const gt=v(k)||a,dt=r.convert(w.format,w.encoding);let _t=r.convert(w.type),pt=x(w.internalFormat,dt,_t,w.encoding,w.isVideoTexture);Y(tt,w,gt);let At;const Nt=w.mipmaps,Kt=a&&w.isVideoTexture!==!0,I=lt.__currentVersion===void 0||nt===!0,ft=b(w,k,gt);if(w.isDepthTexture)pt=6402,a?w.type===Xn?pt=36012:w.type===pi?pt=33190:w.type===er?pt=35056:pt=33189:w.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===xi&&pt===6402&&w.type!==hu&&w.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=pi,_t=r.convert(w.type)),w.format===hr&&pt===6402&&(pt=34041,w.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=er,_t=r.convert(w.type))),I&&(Kt?e.texStorage2D(3553,1,pt,k.width,k.height):e.texImage2D(3553,0,pt,k.width,k.height,0,dt,_t,null));else if(w.isDataTexture)if(Nt.length>0&&gt){Kt&&I&&e.texStorage2D(3553,ft,pt,Nt[0].width,Nt[0].height);for(let W=0,ht=Nt.length;W<ht;W++)At=Nt[W],Kt?e.texSubImage2D(3553,W,0,0,At.width,At.height,dt,_t,At.data):e.texImage2D(3553,W,pt,At.width,At.height,0,dt,_t,At.data);w.generateMipmaps=!1}else Kt?(I&&e.texStorage2D(3553,ft,pt,k.width,k.height),e.texSubImage2D(3553,0,0,0,k.width,k.height,dt,_t,k.data)):e.texImage2D(3553,0,pt,k.width,k.height,0,dt,_t,k.data);else if(w.isCompressedTexture){Kt&&I&&e.texStorage2D(3553,ft,pt,Nt[0].width,Nt[0].height);for(let W=0,ht=Nt.length;W<ht;W++)At=Nt[W],w.format!==cn?dt!==null?Kt?e.compressedTexSubImage2D(3553,W,0,0,At.width,At.height,dt,At.data):e.compressedTexImage2D(3553,W,pt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(3553,W,0,0,At.width,At.height,dt,_t,At.data):e.texImage2D(3553,W,pt,At.width,At.height,0,dt,_t,At.data)}else if(w.isDataArrayTexture)Kt?(I&&e.texStorage3D(35866,ft,pt,k.width,k.height,k.depth),e.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,dt,_t,k.data)):e.texImage3D(35866,0,pt,k.width,k.height,k.depth,0,dt,_t,k.data);else if(w.isData3DTexture)Kt?(I&&e.texStorage3D(32879,ft,pt,k.width,k.height,k.depth),e.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,dt,_t,k.data)):e.texImage3D(32879,0,pt,k.width,k.height,k.depth,0,dt,_t,k.data);else if(w.isFramebufferTexture){if(I)if(Kt)e.texStorage2D(3553,ft,pt,k.width,k.height);else{let W=k.width,ht=k.height;for(let ut=0;ut<ft;ut++)e.texImage2D(3553,ut,pt,W,ht,0,dt,_t,null),W>>=1,ht>>=1}}else if(Nt.length>0&&gt){Kt&&I&&e.texStorage2D(3553,ft,pt,Nt[0].width,Nt[0].height);for(let W=0,ht=Nt.length;W<ht;W++)At=Nt[W],Kt?e.texSubImage2D(3553,W,0,0,dt,_t,At):e.texImage2D(3553,W,pt,dt,_t,At);w.generateMipmaps=!1}else Kt?(I&&e.texStorage2D(3553,ft,pt,k.width,k.height),e.texSubImage2D(3553,0,0,0,dt,_t,k)):e.texImage2D(3553,0,pt,dt,_t,k);E(w,gt)&&C(tt),lt.__currentVersion=lt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function wt(A,w,B){if(w.image.length!==6)return;const tt=Pt(A,w),nt=w.source;if(e.activeTexture(33984+B),e.bindTexture(34067,A.__webglTexture),nt.version!==nt.__currentVersion||tt===!0){s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const lt=w.isCompressedTexture||w.image[0].isCompressedTexture,bt=w.image[0]&&w.image[0].isDataTexture,k=[];for(let W=0;W<6;W++)!lt&&!bt?k[W]=S(w.image[W],!1,!0,l):k[W]=bt?w.image[W].image:w.image[W],k[W]=kt(w,k[W]);const gt=k[0],dt=v(gt)||a,_t=r.convert(w.format,w.encoding),pt=r.convert(w.type),At=x(w.internalFormat,_t,pt,w.encoding),Nt=a&&w.isVideoTexture!==!0,Kt=nt.__currentVersion===void 0||tt===!0;let I=b(w,gt,dt);Y(34067,w,dt);let ft;if(lt){Nt&&Kt&&e.texStorage2D(34067,I,At,gt.width,gt.height);for(let W=0;W<6;W++){ft=k[W].mipmaps;for(let ht=0;ht<ft.length;ht++){const ut=ft[ht];w.format!==cn?_t!==null?Nt?e.compressedTexSubImage2D(34069+W,ht,0,0,ut.width,ut.height,_t,ut.data):e.compressedTexImage2D(34069+W,ht,At,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(34069+W,ht,0,0,ut.width,ut.height,_t,pt,ut.data):e.texImage2D(34069+W,ht,At,ut.width,ut.height,0,_t,pt,ut.data)}}}else{ft=w.mipmaps,Nt&&Kt&&(ft.length>0&&I++,e.texStorage2D(34067,I,At,k[0].width,k[0].height));for(let W=0;W<6;W++)if(bt){Nt?e.texSubImage2D(34069+W,0,0,0,k[W].width,k[W].height,_t,pt,k[W].data):e.texImage2D(34069+W,0,At,k[W].width,k[W].height,0,_t,pt,k[W].data);for(let ht=0;ht<ft.length;ht++){const Ft=ft[ht].image[W].image;Nt?e.texSubImage2D(34069+W,ht+1,0,0,Ft.width,Ft.height,_t,pt,Ft.data):e.texImage2D(34069+W,ht+1,At,Ft.width,Ft.height,0,_t,pt,Ft.data)}}else{Nt?e.texSubImage2D(34069+W,0,0,0,_t,pt,k[W]):e.texImage2D(34069+W,0,At,_t,pt,k[W]);for(let ht=0;ht<ft.length;ht++){const ut=ft[ht];Nt?e.texSubImage2D(34069+W,ht+1,0,0,_t,pt,ut.image[W]):e.texImage2D(34069+W,ht+1,At,_t,pt,ut.image[W])}}}E(w,dt)&&C(34067),nt.__currentVersion=nt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function at(A,w,B,tt,nt){const lt=r.convert(B.format,B.encoding),bt=r.convert(B.type),k=x(B.internalFormat,lt,bt,B.encoding);n.get(w).__hasExternalTextures||(nt===32879||nt===35866?e.texImage3D(nt,0,k,w.width,w.height,w.depth,0,lt,bt,null):e.texImage2D(nt,0,k,w.width,w.height,0,lt,bt,null)),e.bindFramebuffer(36160,A),vt(w)?f.framebufferTexture2DMultisampleEXT(36160,tt,nt,n.get(B).__webglTexture,0,Mt(w)):s.framebufferTexture2D(36160,tt,nt,n.get(B).__webglTexture,0),e.bindFramebuffer(36160,null)}function Dt(A,w,B){if(s.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let tt=33189;if(B||vt(w)){const nt=w.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Xn?tt=36012:nt.type===pi&&(tt=33190));const lt=Mt(w);vt(w)?f.renderbufferStorageMultisampleEXT(36161,lt,tt,w.width,w.height):s.renderbufferStorageMultisample(36161,lt,tt,w.width,w.height)}else s.renderbufferStorage(36161,tt,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const tt=Mt(w);B&&vt(w)===!1?s.renderbufferStorageMultisample(36161,tt,35056,w.width,w.height):vt(w)?f.renderbufferStorageMultisampleEXT(36161,tt,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,A)}else{const tt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let nt=0;nt<tt.length;nt++){const lt=tt[nt],bt=r.convert(lt.format,lt.encoding),k=r.convert(lt.type),gt=x(lt.internalFormat,bt,k,lt.encoding),dt=Mt(w);B&&vt(w)===!1?s.renderbufferStorageMultisample(36161,dt,gt,w.width,w.height):vt(w)?f.renderbufferStorageMultisampleEXT(36161,dt,gt,w.width,w.height):s.renderbufferStorage(36161,gt,w.width,w.height)}}s.bindRenderbuffer(36161,null)}function Z(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const tt=n.get(w.depthTexture).__webglTexture,nt=Mt(w);if(w.depthTexture.format===xi)vt(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,nt):s.framebufferTexture2D(36160,36096,3553,tt,0);else if(w.depthTexture.format===hr)vt(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,nt):s.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function X(A){const w=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Z(w.__webglFramebuffer,A)}else if(B){w.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,w.__webglFramebuffer[tt]),w.__webglDepthbuffer[tt]=s.createRenderbuffer(),Dt(w.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),Dt(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function et(A,w,B){const tt=n.get(A);w!==void 0&&at(tt.__webglFramebuffer,A,A.texture,36064,3553),B!==void 0&&X(A)}function mt(A){const w=A.texture,B=n.get(A),tt=n.get(w);A.addEventListener("dispose",$),A.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=w.version,o.memory.textures++);const nt=A.isWebGLCubeRenderTarget===!0,lt=A.isWebGLMultipleRenderTargets===!0,bt=v(A)||a;if(nt){B.__webglFramebuffer=[];for(let k=0;k<6;k++)B.__webglFramebuffer[k]=s.createFramebuffer()}else{if(B.__webglFramebuffer=s.createFramebuffer(),lt)if(i.drawBuffers){const k=A.texture;for(let gt=0,dt=k.length;gt<dt;gt++){const _t=n.get(k[gt]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&vt(A)===!1){const k=lt?w:[w];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let gt=0;gt<k.length;gt++){const dt=k[gt];B.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(36161,B.__webglColorRenderbuffer[gt]);const _t=r.convert(dt.format,dt.encoding),pt=r.convert(dt.type),At=x(dt.internalFormat,_t,pt,dt.encoding),Nt=Mt(A);s.renderbufferStorageMultisample(36161,Nt,At,A.width,A.height),s.framebufferRenderbuffer(36160,36064+gt,36161,B.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(36161,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Dt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(nt){e.bindTexture(34067,tt.__webglTexture),Y(34067,w,bt);for(let k=0;k<6;k++)at(B.__webglFramebuffer[k],A,w,36064,34069+k);E(w,bt)&&C(34067),e.unbindTexture()}else if(lt){const k=A.texture;for(let gt=0,dt=k.length;gt<dt;gt++){const _t=k[gt],pt=n.get(_t);e.bindTexture(3553,pt.__webglTexture),Y(3553,_t,bt),at(B.__webglFramebuffer,A,_t,36064+gt,3553),E(_t,bt)&&C(3553)}e.unbindTexture()}else{let k=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?k=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(k,tt.__webglTexture),Y(k,w,bt),at(B.__webglFramebuffer,A,w,36064,k),E(w,bt)&&C(k),e.unbindTexture()}A.depthBuffer&&X(A)}function st(A){const w=v(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let tt=0,nt=B.length;tt<nt;tt++){const lt=B[tt];if(E(lt,w)){const bt=A.isWebGLCubeRenderTarget?34067:3553,k=n.get(lt).__webglTexture;e.bindTexture(bt,k),C(bt),e.unbindTexture()}}}function Tt(A){if(a&&A.samples>0&&vt(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,tt=A.height;let nt=16384;const lt=[],bt=A.stencilBuffer?33306:36096,k=n.get(A),gt=A.isWebGLMultipleRenderTargets===!0;if(gt)for(let dt=0;dt<w.length;dt++)e.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+dt,36161,null),e.bindFramebuffer(36160,k.__webglFramebuffer),s.framebufferTexture2D(36009,36064+dt,3553,null,0);e.bindFramebuffer(36008,k.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,k.__webglFramebuffer);for(let dt=0;dt<w.length;dt++){lt.push(36064+dt),A.depthBuffer&&lt.push(bt);const _t=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(_t===!1&&(A.depthBuffer&&(nt|=256),A.stencilBuffer&&(nt|=1024)),gt&&s.framebufferRenderbuffer(36008,36064,36161,k.__webglColorRenderbuffer[dt]),_t===!0&&(s.invalidateFramebuffer(36008,[bt]),s.invalidateFramebuffer(36009,[bt])),gt){const pt=n.get(w[dt]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,pt,0)}s.blitFramebuffer(0,0,B,tt,0,0,B,tt,nt,9728),m&&s.invalidateFramebuffer(36008,lt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),gt)for(let dt=0;dt<w.length;dt++){e.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+dt,36161,k.__webglColorRenderbuffer[dt]);const _t=n.get(w[dt]).__webglTexture;e.bindFramebuffer(36160,k.__webglFramebuffer),s.framebufferTexture2D(36009,36064+dt,3553,_t,0)}e.bindFramebuffer(36009,k.__webglMultisampledFramebuffer)}}function Mt(A){return Math.min(h,A.samples)}function vt(A){const w=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Wt(A){const w=o.render.frame;g.get(A)!==w&&(g.set(A,w),A.update())}function kt(A,w){const B=A.encoding,tt=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ha||B!==Ti&&(B===qt?a===!1?t.has("EXT_sRGB")===!0&&tt===cn?(A.format=ha,A.minFilter=Ge,A.generateMipmaps=!1):w=pu.sRGBToLinear(w):(tt!==cn||nt!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),w}this.allocateTextureUnit=q,this.resetTextureUnits=H,this.setTexture2D=U,this.setTexture2DArray=Q,this.setTexture3D=j,this.setTextureCube=it,this.rebindTextures=et,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=at,this.useMultisampledRTT=vt}function Z_(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===bi)return 5121;if(r===Vf)return 32819;if(r===Hf)return 32820;if(r===Bf)return 5120;if(r===kf)return 5122;if(r===hu)return 5123;if(r===Gf)return 5124;if(r===pi)return 5125;if(r===Xn)return 5126;if(r===Wr)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Wf)return 6406;if(r===cn)return 6408;if(r===Xf)return 6409;if(r===Yf)return 6410;if(r===xi)return 6402;if(r===hr)return 34041;if(r===Zf)return 6403;if(r===qf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ha)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Jf)return 36244;if(r===jf)return 33319;if(r===$f)return 33320;if(r===Kf)return 36249;if(r===po||r===mo||r===go||r===_o)if(o===qt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===po)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===po)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===go)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bl||r===Tl||r===El||r===Al)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===bl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===El)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Al)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qf)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Cl||r===Pl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Cl)return o===qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Pl)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ll||r===Rl||r===Dl||r===Il||r===zl||r===Fl||r===Ol||r===Nl||r===Ul||r===Bl||r===kl||r===Gl||r===Vl||r===Hl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ll)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rl)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dl)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Il)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zl)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fl)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ol)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nl)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ul)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bl)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kl)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gl)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vl)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hl)return o===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Wl)return o===qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===er?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class J_ extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class As extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const d of t.hand.values()){const p=e.getJointPose(d,n);if(l.joints[d.jointName]===void 0){const y=new As;y.matrixAutoUpdate=!1,y.visible=!1,l.joints[d.jointName]=y,l.add(y)}const _=l.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}}class $_ extends rn{constructor(t,e,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:xi,u!==xi&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xi&&(n=pi),n===void 0&&u===hr&&(n=er),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Me,this.minFilter=c!==void 0?c:Me,this.flipY=!1,this.generateMipmaps=!1}}class K_ extends yr{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=null,l=null,u=null,h=null,f=null,m=null;const g=e.getContextAttributes();let d=null,p=null;const _=[],y=[],S=new Qe;S.layers.enable(1),S.viewport=new ue;const v=new Qe;v.layers.enable(2),v.viewport=new ue;const M=[S,v],E=new J_;E.layers.enable(1),E.layers.enable(2);let C=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let U=_[O];return U===void 0&&(U=new Xo,_[O]=U),U.getTargetRaySpace()},this.getControllerGrip=function(O){let U=_[O];return U===void 0&&(U=new Xo,_[O]=U),U.getGripSpace()},this.getHand=function(O){let U=_[O];return U===void 0&&(U=new Xo,_[O]=U),U.getHandSpace()};function b(O){const U=y.indexOf(O.inputSource);if(U===-1)return;const Q=_[U];Q!==void 0&&Q.dispatchEvent({type:O.type,data:O.inputSource})}function L(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",R);for(let O=0;O<_.length;O++){const U=y[O];U!==null&&(y[O]=null,_[O].disconnect(U))}C=null,x=null,t.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",L),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,U),i.updateRenderState({baseLayer:f}),p=new Qn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:bi,encoding:t.outputEncoding})}else{let U=null,Q=null,j=null;g.depth&&(j=g.stencil?35056:33190,U=g.stencil?hr:xi,Q=g.stencil?er:pi);const it={colorFormat:32856,depthFormat:j,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(it),i.updateRenderState({layers:[h]}),p=new Qn(h.textureWidth,h.textureHeight,{format:cn,type:bi,depthTexture:new $_(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const ct=t.properties.get(p);ct.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(O){for(let U=0;U<O.removed.length;U++){const Q=O.removed[U],j=y.indexOf(Q);j>=0&&(y[j]=null,_[j].dispatchEvent({type:"disconnected",data:Q}))}for(let U=0;U<O.added.length;U++){const Q=O.added[U];let j=y.indexOf(Q);if(j===-1){for(let ct=0;ct<_.length;ct++)if(ct>=y.length){y.push(Q),j=ct;break}else if(y[ct]===null){y[ct]=Q,j=ct;break}if(j===-1)break}const it=_[j];it&&it.dispatchEvent({type:"connected",data:Q})}}const $=new P,K=new P;function D(O,U,Q){$.setFromMatrixPosition(U.matrixWorld),K.setFromMatrixPosition(Q.matrixWorld);const j=$.distanceTo(K),it=U.projectionMatrix.elements,ct=Q.projectionMatrix.elements,xt=it[14]/(it[10]-1),Y=it[14]/(it[10]+1),Pt=(it[9]+1)/it[5],yt=(it[9]-1)/it[5],wt=(it[8]-1)/it[0],at=(ct[8]+1)/ct[0],Dt=xt*wt,Z=xt*at,X=j/(-wt+at),et=X*-wt;U.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(et),O.translateZ(X),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const mt=xt+X,st=Y+X,Tt=Dt-et,Mt=Z+(j-et),vt=Pt*Y/st*mt,Wt=yt*Y/st*mt;O.projectionMatrix.makePerspective(Tt,Mt,vt,Wt,mt,st)}function V(O,U){U===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(U.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;E.near=v.near=S.near=O.near,E.far=v.far=S.far=O.far,(C!==E.near||x!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,x=E.far);const U=O.parent,Q=E.cameras;V(E,U);for(let it=0;it<Q.length;it++)V(Q[it],U);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),O.position.copy(E.position),O.quaternion.copy(E.quaternion),O.scale.copy(E.scale),O.matrix.copy(E.matrix),O.matrixWorld.copy(E.matrixWorld);const j=O.children;for(let it=0,ct=j.length;it<ct;it++)j[it].updateMatrixWorld(!0);Q.length===2?D(E,S,v):E.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(O){h!==null&&(h.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let z=null;function H(O,U){if(l=U.getViewerPose(c||o),m=U,l!==null){const Q=l.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let j=!1;Q.length!==E.cameras.length&&(E.cameras.length=0,j=!0);for(let it=0;it<Q.length;it++){const ct=Q[it];let xt=null;if(f!==null)xt=f.getViewport(ct);else{const Pt=u.getViewSubImage(h,ct);xt=Pt.viewport,it===0&&(t.setRenderTargetTextures(p,Pt.colorTexture,h.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(p))}let Y=M[it];Y===void 0&&(Y=new Qe,Y.layers.enable(it),Y.viewport=new ue,M[it]=Y),Y.matrix.fromArray(ct.transform.matrix),Y.projectionMatrix.fromArray(ct.projectionMatrix),Y.viewport.set(xt.x,xt.y,xt.width,xt.height),it===0&&E.matrix.copy(Y.matrix),j===!0&&E.cameras.push(Y)}}for(let Q=0;Q<_.length;Q++){const j=y[Q],it=_[Q];j!==null&&it!==void 0&&it.update(j,U,c||o)}z&&z(O,U),m=null}const q=new Tu;q.setAnimationLoop(H),this.setAnimationLoop=function(O){z=O},this.dispose=function(){}}}function Q_(s,t){function e(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),l(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,S)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,_,y):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===en&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===en&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const v=s.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uvTransform.value.copy(y.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uv2Transform.value.copy(S.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,_,y){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=y*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix))}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function l(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===en&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function t0(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function c(y,S){const v=S.program;n.uniformBlockBinding(y,v)}function l(y,S){let v=i[y.id];v===void 0&&(g(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",p));const M=S.program;n.updateUBOMapping(y,M);const E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){const S=h();y.__bindingPointIndex=S;const v=s.createBuffer(),M=y.__size,E=y.usage;return s.bindBuffer(35345,v),s.bufferData(35345,M,E),s.bindBuffer(35345,null),s.bindBufferBase(35345,S,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=i[y.id],v=y.uniforms,M=y.__cache;s.bindBuffer(35345,S);for(let E=0,C=v.length;E<C;E++){const x=v[E];if(m(x,E,M)===!0){const b=x.value,L=x.__offset;typeof b=="number"?(x.__data[0]=b,s.bufferSubData(35345,L,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):b.toArray(x.__data),s.bufferSubData(35345,L,x.__data))}}s.bindBuffer(35345,null)}function m(y,S,v){const M=y.value;if(v[S]===void 0)return typeof M=="number"?v[S]=M:v[S]=M.clone(),!0;if(typeof M=="number"){if(v[S]!==M)return v[S]=M,!0}else{const E=v[S];if(E.equals(M)===!1)return E.copy(M),!0}return!1}function g(y){const S=y.uniforms;let v=0;const M=16;let E=0;for(let C=0,x=S.length;C<x;C++){const b=S[C],L=d(b);if(b.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=v,C>0){E=v%M;const R=M-E;E!==0&&R-L.boundary<0&&(v+=M-E,b.__offset=v)}v+=L.storage}return E=v%M,E>0&&(v+=M-E),y.__size=v,y.__cache={},this}function d(y){const S=y.value,v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(y){const S=y.target;S.removeEventListener("dispose",p);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function _(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:_}}function e0(){const s=ks("canvas");return s.style.display="block",s}function Ru(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:e0(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ti,this.physicallyCorrectLights=!1,this.toneMapping=hn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,_=0,y=0,S=null,v=-1,M=null;const E=new ue,C=new ue;let x=null,b=t.width,L=t.height,R=1,$=null,K=null;const D=new ue(0,0,b,L),V=new ue(0,0,b,L);let z=!1;const H=new bu;let q=!1,O=!1,U=null;const Q=new oe,j=new ot,it=new P,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xt(){return S===null?R:1}let Y=e;function Pt(T,F){for(let G=0;G<T.length;G++){const N=T[G],J=t.getContext(N,F);if(J!==null)return J}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oa}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",Kt,!1),Y===null){const F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),Y=Pt(F,T),Y===null)throw Pt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let yt,wt,at,Dt,Z,X,et,mt,st,Tt,Mt,vt,Wt,kt,A,w,B,tt,nt,lt,bt,k,gt,dt;function _t(){yt=new hg(Y),wt=new sg(Y,yt,s),yt.init(wt),k=new Z_(Y,yt,wt),at=new X_(Y,yt,wt),Dt=new pg,Z=new D_,X=new Y_(Y,yt,at,Z,wt,k,Dt),et=new ag(d),mt=new ug(d),st=new Ed(Y,wt),gt=new ig(Y,yt,st,wt),Tt=new fg(Y,st,Dt,gt),Mt=new xg(Y,Tt,st,Dt),nt=new _g(Y,wt,X),w=new og(Z),vt=new R_(d,et,mt,yt,wt,gt,w),Wt=new Q_(d,Z),kt=new z_,A=new k_(yt,wt),tt=new ng(d,et,at,Mt,u,o),B=new q_(d,Mt,wt),dt=new t0(Y,Dt,wt,at),lt=new rg(Y,yt,Dt,wt),bt=new dg(Y,yt,Dt,wt),Dt.programs=vt.programs,d.capabilities=wt,d.extensions=yt,d.properties=Z,d.renderLists=kt,d.shadowMap=B,d.state=at,d.info=Dt}_t();const pt=new K_(d,Y);this.xr=pt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const T=yt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=yt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(T){T!==void 0&&(R=T,this.setSize(b,L,!1))},this.getSize=function(T){return T.set(b,L)},this.setSize=function(T,F,G){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=T,L=F,t.width=Math.floor(T*R),t.height=Math.floor(F*R),G!==!1&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(b*R,L*R).floor()},this.setDrawingBufferSize=function(T,F,G){b=T,L=F,R=G,t.width=Math.floor(T*G),t.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,F,G,N){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,F,G,N),at.viewport(E.copy(D).multiplyScalar(R).floor())},this.getScissor=function(T){return T.copy(V)},this.setScissor=function(T,F,G,N){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,F,G,N),at.scissor(C.copy(V).multiplyScalar(R).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(T){at.setScissorTest(z=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(T=!0,F=!0,G=!0){let N=0;T&&(N|=16384),F&&(N|=256),G&&(N|=1024),Y.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),kt.dispose(),A.dispose(),Z.dispose(),et.dispose(),mt.dispose(),Mt.dispose(),gt.dispose(),dt.dispose(),vt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Ft),pt.removeEventListener("sessionend",ae),U&&(U.dispose(),U=null),Qt.stop()};function At(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Dt.autoReset,F=B.enabled,G=B.autoUpdate,N=B.needsUpdate,J=B.type;_t(),Dt.autoReset=T,B.enabled=F,B.autoUpdate=G,B.needsUpdate=N,B.type=J}function Kt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function I(T){const F=T.target;F.removeEventListener("dispose",I),ft(F)}function ft(T){W(T),Z.remove(T)}function W(T){const F=Z.get(T).programs;F!==void 0&&(F.forEach(function(G){vt.releaseProgram(G)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,N,J,St){F===null&&(F=ct);const Et=J.isMesh&&J.matrixWorld.determinant()<0,Lt=ef(T,F,G,N,J);at.setMaterial(N,Et);let Ct=G.index;const Bt=G.attributes.position;if(Ct===null){if(Bt===void 0||Bt.count===0)return}else if(Ct.count===0)return;let zt=1;N.wireframe===!0&&(Ct=Tt.getWireframeAttribute(G),zt=2),gt.setup(J,N,Lt,G,Ct);let Ot,Jt=lt;Ct!==null&&(Ot=st.get(Ct),Jt=bt,Jt.setIndex(Ot));const ii=Ct!==null?Ct.count:Bt.count,Li=G.drawRange.start*zt,Ri=G.drawRange.count*zt,sn=St!==null?St.start*zt:0,Ut=St!==null?St.count*zt:1/0,Di=Math.max(Li,sn),ee=Math.min(ii,Li+Ri,sn+Ut)-1,Ne=Math.max(0,ee-Di+1);if(Ne!==0){if(J.isMesh)N.wireframe===!0?(at.setLineWidth(N.wireframeLinewidth*xt()),Jt.setMode(1)):Jt.setMode(4);else if(J.isLine){let Nn=N.linewidth;Nn===void 0&&(Nn=1),at.setLineWidth(Nn*xt()),J.isLineSegments?Jt.setMode(1):J.isLineLoop?Jt.setMode(2):Jt.setMode(3)}else J.isPoints?Jt.setMode(0):J.isSprite&&Jt.setMode(4);if(J.isInstancedMesh)Jt.renderInstances(Di,Ne,J.count);else if(G.isInstancedBufferGeometry){const Nn=Math.min(G.instanceCount,G._maxInstanceCount);Jt.renderInstances(Di,Ne,Nn)}else Jt.render(Di,Ne)}},this.compile=function(T,F){f=A.get(T),f.init(),g.push(f),T.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(d.physicallyCorrectLights),T.traverse(function(G){const N=G.material;if(N)if(Array.isArray(N))for(let J=0;J<N.length;J++){const St=N[J];co(St,T,G)}else co(N,T,G)}),g.pop(),f=null};let ht=null;function ut(T){ht&&ht(T)}function Ft(){Qt.stop()}function ae(){Qt.start()}const Qt=new Tu;Qt.setAnimationLoop(ut),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(T){ht=T,pt.setAnimationLoop(T),T===null?Qt.stop():Qt.start()},pt.addEventListener("sessionstart",Ft),pt.addEventListener("sessionend",ae),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(F),F=pt.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,F,S),f=A.get(T,g.length),f.init(),g.push(f),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),H.setFromProjectionMatrix(Q),O=this.localClippingEnabled,q=w.init(this.clippingPlanes,O,F),h=kt.get(T,m.length),h.init(),m.push(h),On(T,F,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort($,K),q===!0&&w.beginShadows();const G=f.state.shadowsArray;if(B.render(G,T,F),q===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(h,T),f.setupLights(d.physicallyCorrectLights),F.isArrayCamera){const N=F.cameras;for(let J=0,St=N.length;J<St;J++){const Et=N[J];Zt(h,T,Et,Et.viewport)}}else Zt(h,T,F);S!==null&&(X.updateMultisampleRenderTarget(S),X.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(d,T,F),gt.resetDefaultState(),v=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function On(T,F,G,N){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||H.intersectsSprite(T)){N&&it.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const Et=Mt.update(T),Lt=T.material;Lt.visible&&h.push(T,Et,Lt,G,it.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Dt.render.frame&&(T.skeleton.update(),T.skeleton.frame=Dt.render.frame),!T.frustumCulled||H.intersectsObject(T))){N&&it.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const Et=Mt.update(T),Lt=T.material;if(Array.isArray(Lt)){const Ct=Et.groups;for(let Bt=0,zt=Ct.length;Bt<zt;Bt++){const Ot=Ct[Bt],Jt=Lt[Ot.materialIndex];Jt&&Jt.visible&&h.push(T,Et,Jt,G,it.z,Ot)}}else Lt.visible&&h.push(T,Et,Lt,G,it.z,null)}}const St=T.children;for(let Et=0,Lt=St.length;Et<Lt;Et++)On(St[Et],F,G,N)}function Zt(T,F,G,N){const J=T.opaque,St=T.transmissive,Et=T.transparent;f.setupLightsView(G),St.length>0&&_n(J,F,G),N&&at.viewport(E.copy(N)),J.length>0&&Oe(J,F,G),St.length>0&&Oe(St,F,G),Et.length>0&&Oe(Et,F,G),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function _n(T,F,G){const N=wt.isWebGL2;U===null&&(U=new Qn(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?Wr:bi,minFilter:js,samples:N&&r===!0?4:0})),d.getDrawingBufferSize(j),N?U.setSize(j.x,j.y):U.setSize(fa(j.x),fa(j.y));const J=d.getRenderTarget();d.setRenderTarget(U),d.clear();const St=d.toneMapping;d.toneMapping=hn,Oe(T,F,G),d.toneMapping=St,X.updateMultisampleRenderTarget(U),X.updateRenderTargetMipmap(U),d.setRenderTarget(J)}function Oe(T,F,G){const N=F.isScene===!0?F.overrideMaterial:null;for(let J=0,St=T.length;J<St;J++){const Et=T[J],Lt=Et.object,Ct=Et.geometry,Bt=N===null?Et.material:N,zt=Et.group;Lt.layers.test(G.layers)&&tf(Lt,F,G,Ct,Bt,zt)}}function tf(T,F,G,N,J,St){T.onBeforeRender(d,F,G,N,J,St),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(d,F,G,N,T,St),J.transparent===!0&&J.side===lr?(J.side=en,J.needsUpdate=!0,d.renderBufferDirect(G,F,N,J,T,St),J.side=ar,J.needsUpdate=!0,d.renderBufferDirect(G,F,N,J,T,St),J.side=lr):d.renderBufferDirect(G,F,N,J,T,St),T.onAfterRender(d,F,G,N,J,St)}function co(T,F,G){F.isScene!==!0&&(F=ct);const N=Z.get(T),J=f.state.lights,St=f.state.shadowsArray,Et=J.state.version,Lt=vt.getParameters(T,J.state,St,F,G),Ct=vt.getProgramCacheKey(Lt);let Bt=N.programs;N.environment=T.isMeshStandardMaterial?F.environment:null,N.fog=F.fog,N.envMap=(T.isMeshStandardMaterial?mt:et).get(T.envMap||N.environment),Bt===void 0&&(T.addEventListener("dispose",I),Bt=new Map,N.programs=Bt);let zt=Bt.get(Ct);if(zt!==void 0){if(N.currentProgram===zt&&N.lightsStateVersion===Et)return fl(T,Lt),zt}else Lt.uniforms=vt.getUniforms(T),T.onBuild(G,Lt,d),T.onBeforeCompile(Lt,d),zt=vt.acquireProgram(Lt,Ct),Bt.set(Ct,zt),N.uniforms=Lt.uniforms;const Ot=N.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=w.uniform),fl(T,Lt),N.needsLights=rf(T),N.lightsStateVersion=Et,N.needsLights&&(Ot.ambientLightColor.value=J.state.ambient,Ot.lightProbe.value=J.state.probe,Ot.directionalLights.value=J.state.directional,Ot.directionalLightShadows.value=J.state.directionalShadow,Ot.spotLights.value=J.state.spot,Ot.spotLightShadows.value=J.state.spotShadow,Ot.rectAreaLights.value=J.state.rectArea,Ot.ltc_1.value=J.state.rectAreaLTC1,Ot.ltc_2.value=J.state.rectAreaLTC2,Ot.pointLights.value=J.state.point,Ot.pointLightShadows.value=J.state.pointShadow,Ot.hemisphereLights.value=J.state.hemi,Ot.directionalShadowMap.value=J.state.directionalShadowMap,Ot.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ot.spotShadowMap.value=J.state.spotShadowMap,Ot.spotShadowMatrix.value=J.state.spotShadowMatrix,Ot.pointShadowMap.value=J.state.pointShadowMap,Ot.pointShadowMatrix.value=J.state.pointShadowMatrix);const Jt=zt.getUniforms(),ii=Os.seqWithValue(Jt.seq,Ot);return N.currentProgram=zt,N.uniformsList=ii,zt}function fl(T,F){const G=Z.get(T);G.outputEncoding=F.outputEncoding,G.instancing=F.instancing,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function ef(T,F,G,N,J){F.isScene!==!0&&(F=ct),X.resetTextureUnits();const St=F.fog,Et=N.isMeshStandardMaterial?F.environment:null,Lt=S===null?d.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Ti,Ct=(N.isMeshStandardMaterial?mt:et).get(N.envMap||Et),Bt=N.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,zt=!!N.normalMap&&!!G.attributes.tangent,Ot=!!G.morphAttributes.position,Jt=!!G.morphAttributes.normal,ii=!!G.morphAttributes.color,Li=N.toneMapped?d.toneMapping:hn,Ri=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,sn=Ri!==void 0?Ri.length:0,Ut=Z.get(N),Di=f.state.lights;if(q===!0&&(O===!0||T!==M)){const Ce=T===M&&N.id===v;w.setState(N,T,Ce)}let ee=!1;N.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Di.state.version||Ut.outputEncoding!==Lt||J.isInstancedMesh&&Ut.instancing===!1||!J.isInstancedMesh&&Ut.instancing===!0||J.isSkinnedMesh&&Ut.skinning===!1||!J.isSkinnedMesh&&Ut.skinning===!0||Ut.envMap!==Ct||N.fog===!0&&Ut.fog!==St||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==w.numPlanes||Ut.numIntersection!==w.numIntersection)||Ut.vertexAlphas!==Bt||Ut.vertexTangents!==zt||Ut.morphTargets!==Ot||Ut.morphNormals!==Jt||Ut.morphColors!==ii||Ut.toneMapping!==Li||wt.isWebGL2===!0&&Ut.morphTargetsCount!==sn)&&(ee=!0):(ee=!0,Ut.__version=N.version);let Ne=Ut.currentProgram;ee===!0&&(Ne=co(N,F,J));let Nn=!1,Tr=!1,uo=!1;const _e=Ne.getUniforms(),Er=Ut.uniforms;if(at.useProgram(Ne.program)&&(Nn=!0,Tr=!0,uo=!0),N.id!==v&&(v=N.id,Tr=!0),Nn||M!==T){if(_e.setValue(Y,"projectionMatrix",T.projectionMatrix),wt.logarithmicDepthBuffer&&_e.setValue(Y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Tr=!0,uo=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Ce=_e.map.cameraPosition;Ce!==void 0&&Ce.setValue(Y,it.setFromMatrixPosition(T.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&_e.setValue(Y,"isOrthographic",T.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||J.isSkinnedMesh)&&_e.setValue(Y,"viewMatrix",T.matrixWorldInverse)}if(J.isSkinnedMesh){_e.setOptional(Y,J,"bindMatrix"),_e.setOptional(Y,J,"bindMatrixInverse");const Ce=J.skeleton;Ce&&(wt.floatVertexTextures?(Ce.boneTexture===null&&Ce.computeBoneTexture(),_e.setValue(Y,"boneTexture",Ce.boneTexture,X),_e.setValue(Y,"boneTextureSize",Ce.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ho=G.morphAttributes;if((ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0&&wt.isWebGL2===!0)&&nt.update(J,G,N,Ne),(Tr||Ut.receiveShadow!==J.receiveShadow)&&(Ut.receiveShadow=J.receiveShadow,_e.setValue(Y,"receiveShadow",J.receiveShadow)),Tr&&(_e.setValue(Y,"toneMappingExposure",d.toneMappingExposure),Ut.needsLights&&nf(Er,uo),St&&N.fog===!0&&Wt.refreshFogUniforms(Er,St),Wt.refreshMaterialUniforms(Er,N,R,L,U),Os.upload(Y,Ut.uniformsList,Er,X)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Os.upload(Y,Ut.uniformsList,Er,X),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&_e.setValue(Y,"center",J.center),_e.setValue(Y,"modelViewMatrix",J.modelViewMatrix),_e.setValue(Y,"normalMatrix",J.normalMatrix),_e.setValue(Y,"modelMatrix",J.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Ce=N.uniformsGroups;for(let fo=0,sf=Ce.length;fo<sf;fo++)if(wt.isWebGL2){const dl=Ce[fo];dt.update(dl,Ne),dt.bind(dl,Ne)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ne}function nf(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function rf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,F,G){Z.get(T.texture).__webglTexture=F,Z.get(T.depthTexture).__webglTexture=G;const N=Z.get(T);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=G===void 0,N.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const G=Z.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,G=0){S=T,_=F,y=G;let N=!0;if(T){const Ct=Z.get(T);Ct.__useDefaultFramebuffer!==void 0?(at.bindFramebuffer(36160,null),N=!1):Ct.__webglFramebuffer===void 0?X.setupRenderTarget(T):Ct.__hasExternalTextures&&X.rebindTextures(T,Z.get(T.texture).__webglTexture,Z.get(T.depthTexture).__webglTexture)}let J=null,St=!1,Et=!1;if(T){const Ct=T.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture)&&(Et=!0);const Bt=Z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(J=Bt[F],St=!0):wt.isWebGL2&&T.samples>0&&X.useMultisampledRTT(T)===!1?J=Z.get(T).__webglMultisampledFramebuffer:J=Bt,E.copy(T.viewport),C.copy(T.scissor),x=T.scissorTest}else E.copy(D).multiplyScalar(R).floor(),C.copy(V).multiplyScalar(R).floor(),x=z;if(at.bindFramebuffer(36160,J)&&wt.drawBuffers&&N&&at.drawBuffers(T,J),at.viewport(E),at.scissor(C),at.setScissorTest(x),St){const Ct=Z.get(T.texture);Y.framebufferTexture2D(36160,36064,34069+F,Ct.__webglTexture,G)}else if(Et){const Ct=Z.get(T.texture),Bt=F||0;Y.framebufferTextureLayer(36160,36064,Ct.__webglTexture,G||0,Bt)}v=-1},this.readRenderTargetPixels=function(T,F,G,N,J,St,Et){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){at.bindFramebuffer(36160,Lt);try{const Ct=T.texture,Bt=Ct.format,zt=Ct.type;if(Bt!==cn&&k.convert(Bt)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=zt===Wr&&(yt.has("EXT_color_buffer_half_float")||wt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(zt!==bi&&k.convert(zt)!==Y.getParameter(35738)&&!(zt===Xn&&(wt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-N&&G>=0&&G<=T.height-J&&Y.readPixels(F,G,N,J,k.convert(Bt),k.convert(zt),St)}finally{const Ct=S!==null?Z.get(S).__webglFramebuffer:null;at.bindFramebuffer(36160,Ct)}}},this.copyFramebufferToTexture=function(T,F,G=0){const N=Math.pow(2,-G),J=Math.floor(F.image.width*N),St=Math.floor(F.image.height*N);X.setTexture2D(F,0),Y.copyTexSubImage2D(3553,G,0,0,T.x,T.y,J,St),at.unbindTexture()},this.copyTextureToTexture=function(T,F,G,N=0){const J=F.image.width,St=F.image.height,Et=k.convert(G.format),Lt=k.convert(G.type);X.setTexture2D(G,0),Y.pixelStorei(37440,G.flipY),Y.pixelStorei(37441,G.premultiplyAlpha),Y.pixelStorei(3317,G.unpackAlignment),F.isDataTexture?Y.texSubImage2D(3553,N,T.x,T.y,J,St,Et,Lt,F.image.data):F.isCompressedTexture?Y.compressedTexSubImage2D(3553,N,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Et,F.mipmaps[0].data):Y.texSubImage2D(3553,N,T.x,T.y,Et,Lt,F.image),N===0&&G.generateMipmaps&&Y.generateMipmap(3553),at.unbindTexture()},this.copyTextureToTexture3D=function(T,F,G,N,J=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=T.max.x-T.min.x+1,Et=T.max.y-T.min.y+1,Lt=T.max.z-T.min.z+1,Ct=k.convert(N.format),Bt=k.convert(N.type);let zt;if(N.isData3DTexture)X.setTexture3D(N,0),zt=32879;else if(N.isDataArrayTexture)X.setTexture2DArray(N,0),zt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,N.flipY),Y.pixelStorei(37441,N.premultiplyAlpha),Y.pixelStorei(3317,N.unpackAlignment);const Ot=Y.getParameter(3314),Jt=Y.getParameter(32878),ii=Y.getParameter(3316),Li=Y.getParameter(3315),Ri=Y.getParameter(32877),sn=G.isCompressedTexture?G.mipmaps[0]:G.image;Y.pixelStorei(3314,sn.width),Y.pixelStorei(32878,sn.height),Y.pixelStorei(3316,T.min.x),Y.pixelStorei(3315,T.min.y),Y.pixelStorei(32877,T.min.z),G.isDataTexture||G.isData3DTexture?Y.texSubImage3D(zt,J,F.x,F.y,F.z,St,Et,Lt,Ct,Bt,sn.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(zt,J,F.x,F.y,F.z,St,Et,Lt,Ct,sn.data)):Y.texSubImage3D(zt,J,F.x,F.y,F.z,St,Et,Lt,Ct,Bt,sn),Y.pixelStorei(3314,Ot),Y.pixelStorei(32878,Jt),Y.pixelStorei(3316,ii),Y.pixelStorei(3315,Li),Y.pixelStorei(32877,Ri),J===0&&N.generateMipmaps&&Y.generateMipmap(zt),at.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?X.setTextureCube(T,0):T.isData3DTexture?X.setTexture3D(T,0):T.isDataArrayTexture?X.setTexture2DArray(T,0):X.setTexture2D(T,0),at.unbindTexture()},this.resetState=function(){_=0,y=0,S=null,at.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class n0 extends Ru{}n0.prototype.isWebGL1Renderer=!0;class Du extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}class i0 extends rs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cc=new oe,pa=new _u,Cs=new $s,Ps=new P;class r0 extends Ye{constructor(t=new pn,e=new i0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=r,t.ray.intersectsSphere(Cs)===!1)return;Cc.copy(i).invert(),pa.copy(t.ray).applyMatrix4(Cc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,d=m;g<d;g++){const p=l.getX(g);Ps.fromBufferAttribute(h,p),Pc(Ps,p,c,i,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,d=m;g<d;g++)Ps.fromBufferAttribute(h,g),Pc(Ps,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pc(s,t,e,n,i,r,o){const a=pa.distanceSqToPoint(s);if(a<e){const c=new P;pa.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,m=(o-u)/f;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new ot:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],o=[],a=new P,c=new oe;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(xe(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(xe(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ba extends mn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new ot,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*u-m*h+this.aX,l=f*h+m*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class s0 extends Ba{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ka(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,m*=u,i(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Ls=new P,Yo=new ka,Zo=new ka,Jo=new ka;class o0 extends mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(Ls.subVectors(i[0],i[1]).add(i[0]),l=Ls);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Ls.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Ls),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);d<1e-4&&(d=1),g<1e-4&&(g=d),p<1e-4&&(p=d),Yo.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,d,p),Zo.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,d,p),Jo.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,d,p)}else this.curveType==="catmullrom"&&(Yo.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Zo.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Jo.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Yo.calc(c),Zo.calc(c),Jo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lc(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function a0(s,t){const e=1-s;return e*e*t}function l0(s,t){return 2*(1-s)*s*t}function c0(s,t){return s*s*t}function Nr(s,t,e,n){return a0(s,t)+l0(s,e)+c0(s,n)}function u0(s,t){const e=1-s;return e*e*e*t}function h0(s,t){const e=1-s;return 3*e*e*s*t}function f0(s,t){return 3*(1-s)*s*s*t}function d0(s,t){return s*s*s*t}function Ur(s,t,e,n,i){return u0(s,t)+h0(s,e)+f0(s,n)+d0(s,i)}class Iu extends mn{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(t,i.x,r.x,o.x,a.x),Ur(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class p0 extends mn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(t,i.x,r.x,o.x,a.x),Ur(t,i.y,r.y,o.y,a.y),Ur(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ga extends mn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new ot;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class m0 extends mn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zu extends mn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Nr(t,i.x,r.x,o.x),Nr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class g0 extends mn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Nr(t,i.x,r.x,o.x),Nr(t,i.y,r.y,o.y),Nr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fu extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Lc(a,c.x,l.x,u.x,h.x),Lc(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ot().fromArray(i))}return this}}var Ou=Object.freeze({__proto__:null,ArcCurve:s0,CatmullRomCurve3:o0,CubicBezierCurve:Iu,CubicBezierCurve3:p0,EllipseCurve:Ba,LineCurve:Ga,LineCurve3:m0,QuadraticBezierCurve:zu,QuadraticBezierCurve3:g0,SplineCurve:Fu});class _0 extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Ga(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ou[i.type]().fromJSON(i))}return this}}class ma extends _0{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ga(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new zu(this.currentPoint.clone(),new ot(t,e),new ot(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Iu(this.currentPoint.clone(),new ot(t,e),new ot(n,i),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Fu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new Ba(t,e,n,i,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ns extends ma{constructor(t){super(t),this.uuid=Mr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ma().fromJSON(i))}return this}}const x0={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Nu(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,m;if(n&&(r=w0(s,t,r,e)),s.length>80*e){a=l=s[0],c=u=s[1];for(let g=e;g<i;g+=e)h=s[g],f=s[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);m=Math.max(l-a,u-c),m=m!==0?1/m:0}return qr(r,o,e,a,c,m),o}};function Nu(s,t,e,n,i){let r,o;if(i===z0(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Rc(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Rc(r,s[r],s[r+1],o);return o&&to(o,o.next)&&(Yr(o),o=o.next),o}function ti(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(to(e,e.next)||Yt(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&C0(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?y0(s,n,i,r):v0(s)){t.push(c.i/e),t.push(s.i/e),t.push(l.i/e),Yr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=M0(ti(s),t,e),qr(s,t,e,n,i,r,2)):o===2&&S0(s,t,e,n,i,r):qr(ti(s),t,e,n,i,r,1);break}}}function v0(s){const t=s.prev,e=s,n=s.next;if(Yt(t,e,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if($i(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&Yt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function y0(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Yt(i,r,o)>=0)return!1;const a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,c=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,l=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,u=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,h=ga(a,c,t,e,n),f=ga(l,u,t,e,n);let m=s.prevZ,g=s.nextZ;for(;m&&m.z>=h&&g&&g.z<=f;){if(m!==s.prev&&m!==s.next&&$i(i.x,i.y,r.x,r.y,o.x,o.y,m.x,m.y)&&Yt(m.prev,m,m.next)>=0||(m=m.prevZ,g!==s.prev&&g!==s.next&&$i(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&Yt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;m&&m.z>=h;){if(m!==s.prev&&m!==s.next&&$i(i.x,i.y,r.x,r.y,o.x,o.y,m.x,m.y)&&Yt(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;g&&g.z<=f;){if(g!==s.prev&&g!==s.next&&$i(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&Yt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function M0(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!to(i,r)&&Uu(i,n,n.next,r)&&Xr(i,r)&&Xr(r,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(r.i/e),Yr(n),Yr(n.next),n=s=r),n=n.next}while(n!==s);return ti(n)}function S0(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&R0(o,a)){let c=Bu(o,a);o=ti(o,o.next),c=ti(c,c.next),qr(o,t,e,n,i,r),qr(c,t,e,n,i,r);return}a=a.next}o=o.next}while(o!==s)}function w0(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Nu(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(L0(l));for(i.sort(b0),r=0;r<i.length;r++)T0(i[r],e),e=ti(e,e.next);return e}function b0(s,t){return s.x-t.x}function T0(s,t){if(t=E0(s,t),t){const e=Bu(t,s);ti(t,t.next),ti(e,e.next)}}function E0(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r){if(r=f,f===n){if(i===e.y)return e;if(i===e.next.y)return e.next}o=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!o)return null;if(n===r)return o;const a=o,c=o.x,l=o.y;let u=1/0,h;e=o;do n>=e.x&&e.x>=c&&n!==e.x&&$i(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)&&(h=Math.abs(i-e.y)/(n-e.x),Xr(e,s)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&A0(o,e)))&&(o=e,u=h)),e=e.next;while(e!==a);return o}function A0(s,t){return Yt(s.prev,s,t.prev)<0&&Yt(t.next,s,s.next)<0}function C0(s,t,e,n){let i=s;do i.z===null&&(i.z=ga(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,P0(i)}function P0(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function ga(s,t,e,n,i){return s=32767*(s-e)*i,t=32767*(t-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function L0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function $i(s,t,e,n,i,r,o,a){return(i-o)*(t-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(e-o)*(t-a)>=0&&(e-o)*(r-a)-(i-o)*(n-a)>=0}function R0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!D0(s,t)&&(Xr(s,t)&&Xr(t,s)&&I0(s,t)&&(Yt(s.prev,s,t.prev)||Yt(s,t.prev,t))||to(s,t)&&Yt(s.prev,s,s.next)>0&&Yt(t.prev,t,t.next)>0)}function Yt(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function to(s,t){return s.x===t.x&&s.y===t.y}function Uu(s,t,e,n){const i=Ds(Yt(s,t,e)),r=Ds(Yt(s,t,n)),o=Ds(Yt(e,n,s)),a=Ds(Yt(e,n,t));return!!(i!==r&&o!==a||i===0&&Rs(s,e,t)||r===0&&Rs(s,n,t)||o===0&&Rs(e,s,n)||a===0&&Rs(e,t,n))}function Rs(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ds(s){return s>0?1:s<0?-1:0}function D0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Uu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Xr(s,t){return Yt(s.prev,s,s.next)<0?Yt(s,t,s.next)>=0&&Yt(s,s.prev,t)>=0:Yt(s,t,s.prev)<0||Yt(s,s.next,t)<0}function I0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Bu(s,t){const e=new _a(s.i,s.x,s.y),n=new _a(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Rc(s,t,e,n){const i=new _a(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Yr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function _a(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function z0(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class nr{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return nr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Dc(t),Ic(n,t);let o=t.length;e.forEach(Dc);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Ic(n,e[c]);const a=x0.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Dc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ic(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Va extends pn{constructor(t=new Ns([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Rn(i,3)),this.setAttribute("uv",new Rn(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,d=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const _=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:F0;let S,v=!1,M,E,C,x;_&&(S=_.getSpacedPoints(u),v=!0,f=!1,M=_.computeFrenetFrames(u,!1),E=new P,C=new P,x=new P),f||(p=0,m=0,g=0,d=0);const b=a.extractPoints(l);let L=b.shape;const R=b.holes;if(!nr.isClockWise(L)){L=L.reverse();for(let Z=0,X=R.length;Z<X;Z++){const et=R[Z];nr.isClockWise(et)&&(R[Z]=et.reverse())}}const K=nr.triangulateShape(L,R),D=L;for(let Z=0,X=R.length;Z<X;Z++){const et=R[Z];L=L.concat(et)}function V(Z,X,et){return X||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().multiplyScalar(et).add(Z)}const z=L.length,H=K.length;function q(Z,X,et){let mt,st,Tt;const Mt=Z.x-X.x,vt=Z.y-X.y,Wt=et.x-Z.x,kt=et.y-Z.y,A=Mt*Mt+vt*vt,w=Mt*kt-vt*Wt;if(Math.abs(w)>Number.EPSILON){const B=Math.sqrt(A),tt=Math.sqrt(Wt*Wt+kt*kt),nt=X.x-vt/B,lt=X.y+Mt/B,bt=et.x-kt/tt,k=et.y+Wt/tt,gt=((bt-nt)*kt-(k-lt)*Wt)/(Mt*kt-vt*Wt);mt=nt+Mt*gt-Z.x,st=lt+vt*gt-Z.y;const dt=mt*mt+st*st;if(dt<=2)return new ot(mt,st);Tt=Math.sqrt(dt/2)}else{let B=!1;Mt>Number.EPSILON?Wt>Number.EPSILON&&(B=!0):Mt<-Number.EPSILON?Wt<-Number.EPSILON&&(B=!0):Math.sign(vt)===Math.sign(kt)&&(B=!0),B?(mt=-vt,st=Mt,Tt=Math.sqrt(A)):(mt=Mt,st=vt,Tt=Math.sqrt(A/2))}return new ot(mt/Tt,st/Tt)}const O=[];for(let Z=0,X=D.length,et=X-1,mt=Z+1;Z<X;Z++,et++,mt++)et===X&&(et=0),mt===X&&(mt=0),O[Z]=q(D[Z],D[et],D[mt]);const U=[];let Q,j=O.concat();for(let Z=0,X=R.length;Z<X;Z++){const et=R[Z];Q=[];for(let mt=0,st=et.length,Tt=st-1,Mt=mt+1;mt<st;mt++,Tt++,Mt++)Tt===st&&(Tt=0),Mt===st&&(Mt=0),Q[mt]=q(et[mt],et[Tt],et[Mt]);U.push(Q),j=j.concat(Q)}for(let Z=0;Z<p;Z++){const X=Z/p,et=m*Math.cos(X*Math.PI/2),mt=g*Math.sin(X*Math.PI/2)+d;for(let st=0,Tt=D.length;st<Tt;st++){const Mt=V(D[st],O[st],mt);Pt(Mt.x,Mt.y,-et)}for(let st=0,Tt=R.length;st<Tt;st++){const Mt=R[st];Q=U[st];for(let vt=0,Wt=Mt.length;vt<Wt;vt++){const kt=V(Mt[vt],Q[vt],mt);Pt(kt.x,kt.y,-et)}}}const it=g+d;for(let Z=0;Z<z;Z++){const X=f?V(L[Z],j[Z],it):L[Z];v?(C.copy(M.normals[0]).multiplyScalar(X.x),E.copy(M.binormals[0]).multiplyScalar(X.y),x.copy(S[0]).add(C).add(E),Pt(x.x,x.y,x.z)):Pt(X.x,X.y,0)}for(let Z=1;Z<=u;Z++)for(let X=0;X<z;X++){const et=f?V(L[X],j[X],it):L[X];v?(C.copy(M.normals[Z]).multiplyScalar(et.x),E.copy(M.binormals[Z]).multiplyScalar(et.y),x.copy(S[Z]).add(C).add(E),Pt(x.x,x.y,x.z)):Pt(et.x,et.y,h/u*Z)}for(let Z=p-1;Z>=0;Z--){const X=Z/p,et=m*Math.cos(X*Math.PI/2),mt=g*Math.sin(X*Math.PI/2)+d;for(let st=0,Tt=D.length;st<Tt;st++){const Mt=V(D[st],O[st],mt);Pt(Mt.x,Mt.y,h+et)}for(let st=0,Tt=R.length;st<Tt;st++){const Mt=R[st];Q=U[st];for(let vt=0,Wt=Mt.length;vt<Wt;vt++){const kt=V(Mt[vt],Q[vt],mt);v?Pt(kt.x,kt.y+S[u-1].y,S[u-1].x+et):Pt(kt.x,kt.y,h+et)}}}ct(),xt();function ct(){const Z=i.length/3;if(f){let X=0,et=z*X;for(let mt=0;mt<H;mt++){const st=K[mt];yt(st[2]+et,st[1]+et,st[0]+et)}X=u+p*2,et=z*X;for(let mt=0;mt<H;mt++){const st=K[mt];yt(st[0]+et,st[1]+et,st[2]+et)}}else{for(let X=0;X<H;X++){const et=K[X];yt(et[2],et[1],et[0])}for(let X=0;X<H;X++){const et=K[X];yt(et[0]+z*u,et[1]+z*u,et[2]+z*u)}}n.addGroup(Z,i.length/3-Z,0)}function xt(){const Z=i.length/3;let X=0;Y(D,X),X+=D.length;for(let et=0,mt=R.length;et<mt;et++){const st=R[et];Y(st,X),X+=st.length}n.addGroup(Z,i.length/3-Z,1)}function Y(Z,X){let et=Z.length;for(;--et>=0;){const mt=et;let st=et-1;st<0&&(st=Z.length-1);for(let Tt=0,Mt=u+p*2;Tt<Mt;Tt++){const vt=z*Tt,Wt=z*(Tt+1),kt=X+mt+vt,A=X+st+vt,w=X+st+Wt,B=X+mt+Wt;wt(kt,A,w,B)}}}function Pt(Z,X,et){c.push(Z),c.push(X),c.push(et)}function yt(Z,X,et){at(Z),at(X),at(et);const mt=i.length/3,st=y.generateTopUV(n,i,mt-3,mt-2,mt-1);Dt(st[0]),Dt(st[1]),Dt(st[2])}function wt(Z,X,et,mt){at(Z),at(X),at(mt),at(X),at(et),at(mt);const st=i.length/3,Tt=y.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);Dt(Tt[0]),Dt(Tt[1]),Dt(Tt[3]),Dt(Tt[1]),Dt(Tt[2]),Dt(Tt[3])}function at(Z){i.push(c[Z*3+0]),i.push(c[Z*3+1]),i.push(c[Z*3+2])}function Dt(Z){r.push(Z.x),r.push(Z.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return O0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ou[i.type]().fromJSON(i)),new Va(n,t.options)}}const F0={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],u=t[i*3+1];return[new ot(r,o),new ot(a,c),new ot(l,u)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],m=t[i*3+1],g=t[i*3+2],d=t[r*3],p=t[r*3+1],_=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ot(o,1-c),new ot(l,1-h),new ot(f,1-g),new ot(d,1-_)]:[new ot(a,1-c),new ot(u,1-h),new ot(m,1-g),new ot(p,1-_)]}};function O0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}const zc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class N0{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const U0=new N0;class ku{constructor(t){this.manager=t!==void 0?t:U0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const wn={};class B0 extends Error{constructor(t,e){super(t),this.response=e}}class k0 extends ku{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=zc.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(wn[t]!==void 0){wn[t].push({onLoad:e,onProgress:n,onError:i});return}wn[t]=[],wn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=wn[t],h=l.body.getReader(),f=l.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0;let d=0;const p=new ReadableStream({start(_){y();function y(){h.read().then(({done:S,value:v})=>{if(S)_.close();else{d+=v.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:m});for(let E=0,C=u.length;E<C;E++){const x=u[E];x.onProgress&&x.onProgress(M)}_.enqueue(v),y()}})}}});return new Response(p)}else throw new B0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{zc.add(t,l);const u=wn[t];delete wn[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=wn[t];if(u===void 0)throw this.manager.itemError(t),l;delete wn[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class G0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Fc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Fc(){return(typeof performance>"u"?Date:performance).now()}class V0{constructor(){this.type="ShapePath",this.color=new Ht,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new ma,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t,e){function n(y){const S=[];for(let v=0,M=y.length;v<M;v++){const E=y[v],C=new Ns;C.curves=E.curves,S.push(C)}return S}function i(y,S){const v=S.length;let M=!1;for(let E=v-1,C=0;C<v;E=C++){let x=S[E],b=S[C],L=b.x-x.x,R=b.y-x.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(x=S[C],L=-L,b=S[E],R=-R),y.y<x.y||y.y>b.y)continue;if(y.y===x.y){if(y.x===x.x)return!0}else{const $=R*(y.x-x.x)-L*(y.y-x.y);if($===0)return!0;if($<0)continue;M=!M}}else{if(y.y!==x.y)continue;if(b.x<=y.x&&y.x<=x.x||x.x<=y.x&&y.x<=b.x)return!0}}return M}const r=nr.isClockWise,o=this.subPaths;if(o.length===0)return[];if(e===!0)return n(o);let a,c,l;const u=[];if(o.length===1)return c=o[0],l=new Ns,l.curves=c.curves,u.push(l),u;let h=!r(o[0].getPoints());h=t?!h:h;const f=[],m=[];let g=[],d=0,p;m[d]=void 0,g[d]=[];for(let y=0,S=o.length;y<S;y++)c=o[y],p=c.getPoints(),a=r(p),a=t?!a:a,a?(!h&&m[d]&&d++,m[d]={s:new Ns,p},m[d].s.curves=c.curves,h&&d++,g[d]=[]):g[d].push({h:c,p:p[0]});if(!m[0])return n(o);if(m.length>1){let y=!1,S=0;for(let v=0,M=m.length;v<M;v++)f[v]=[];for(let v=0,M=m.length;v<M;v++){const E=g[v];for(let C=0;C<E.length;C++){const x=E[C];let b=!0;for(let L=0;L<m.length;L++)i(x.p,m[L].p)&&(v!==L&&S++,b?(b=!1,f[L].push(x)):y=!0);b&&f[v].push(x)}}S>0&&y===!1&&(g=f)}let _;for(let y=0,S=m.length;y<S;y++){l=m[y].s,u.push(l),_=g[y];for(let v=0,M=_.length;v<M;v++)l.holes.push(_[v].h)}return u}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oa);const H0="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,W0=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document,q0=!H0||W0||window.navigator.hardwareConcurrency>4;var wr=(s=>(s.resize="SizesEvents.resize",s))(wr||{});const xa={width:0,height:0};function Ha(){const s=document.body.getBoundingClientRect();xa.width=s.width,xa.height=s.height,window.dispatchEvent(new CustomEvent(wr.resize))}Ha();window.addEventListener("resize",Ha,{passive:!0});window.addEventListener("orientationchange",Ha,{passive:!0});const Ae=xa,di=new Du;const X0=document.getElementById("canvas")||void 0,{width:Oc,height:Nc}=Ae,ir=new Na(-1,1,Nc/Oc,-Nc/Oc,0,2);ir.position.set(0,0,1);di.add(ir);function Gu(){const{width:s,height:t}=Ae;ir.top=t/s,ir.bottom=-t/s,ir.updateProjectionMatrix()}Gu();window.addEventListener(wr.resize,Gu);var eo=(s=>(s.tick="TickerEvents.tick",s))(eo||{});const Vu=q0?Math.min(window.devicePixelRatio,2):1,gn=new Ru({canvas:X0,powerPreference:"high-performance",antialias:Vu===1,alpha:!0});gn.shadowMap.autoUpdate=!1;gn.shadowMap.enabled=!1;gn.physicallyCorrectLights=!1;gn.setSize(Ae.width,Ae.height);gn.outputEncoding=qt;gn.toneMapping=hn;gn.setPixelRatio(Vu);function Hu(){gn.setSize(Ae.width,Ae.height)}Hu();window.addEventListener(wr.resize,Hu);window.addEventListener(eo.tick,()=>{gn.render(di,ir)});const no=gn,Y0="modulepreload",Z0=function(s){return"/"+s},Uc={},J0=function(t,e,n){return!e||e.length===0?t():Promise.all(e.map(i=>{if(i=Z0(i),i in Uc)return;Uc[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Y0,r||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),r)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};let Yi;function j0(){return location.hash==="#debug"}async function $0(){if(Yi)return Yi;if(j0()){const s=(await J0(()=>import("./stats.min.1f6a2d59.js").then(t=>t.s),[])).default;return Yi=new s,Yi.showPanel(0),document.body.appendChild(Yi.dom),Yi}return null}let zr=null;const K0=new G0;let Bc=0;const Wu=()=>{zr&&zr.begin();const s=K0.getElapsedTime(),t=s-Bc;Bc=s,window.dispatchEvent(new CustomEvent(eo.tick,{detail:{deltaTime:t,elapsedTime:s}})),window.requestAnimationFrame(Wu),zr&&zr.end()};Wu();$0().then(s=>{zr=s});var Q0=`uniform float uAspectRatio;
uniform sampler2D uNoiseTexture;
uniform float uOpacity;
uniform float uTargetOpacity;
uniform float uTime;

varying float vDistance;
varying float vMouseStrengh;
varying vec3 vPosition;
varying vec4 vRandom;
varying float vTweenProgressFract;
varying vec2 vUv;

#define M_PI 3.1415926535897932384626433832795

vec4 logFloat(vec4 gl_FragColor, vec2 vUv, float uTime, float theFloat) {
	float dotSize = 0.3;
	if (vUv.x < dotSize && vUv.y < dotSize) {
		float frequency = 1.0;
		return vec4(1., 0., step(0.5 * frequency, mod(uTime, 1. * frequency)), 1.0);
	} else {
		return gl_FragColor;
	}
}
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }

vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

vec3 fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float perlin3dPeriodic(vec3 P, vec3 rep) {
	vec3 Pi0 = mod(floor(P), rep);				
	vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
	Pi0 = mod289(Pi0);
	Pi1 = mod289(Pi1);
	vec3 Pf0 = fract(P);				
	vec3 Pf1 = Pf0 - vec3(1.0); 
	vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
	vec4 iy = vec4(Pi0.yy, Pi1.yy);
	vec4 iz0 = Pi0.zzzz;
	vec4 iz1 = Pi1.zzzz;

	vec4 ixy = permute(permute(ix) + iy);
	vec4 ixy0 = permute(ixy + iz0);
	vec4 ixy1 = permute(ixy + iz1);

	vec4 gx0 = ixy0 * (1.0 / 7.0);
	vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
	gx0 = fract(gx0);
	vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
	vec4 sz0 = step(gz0, vec4(0.0));
	gx0 -= sz0 * (step(0.0, gx0) - 0.5);
	gy0 -= sz0 * (step(0.0, gy0) - 0.5);

	vec4 gx1 = ixy1 * (1.0 / 7.0);
	vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
	gx1 = fract(gx1);
	vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
	vec4 sz1 = step(gz1, vec4(0.0));
	gx1 -= sz1 * (step(0.0, gx1) - 0.5);
	gy1 -= sz1 * (step(0.0, gy1) - 0.5);

	vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
	vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
	vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
	vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
	vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
	vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
	vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
	vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

	vec4 norm0 = taylorInvSqrt(
		vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
	g000 *= norm0.x;
	g010 *= norm0.y;
	g100 *= norm0.z;
	g110 *= norm0.w;
	vec4 norm1 = taylorInvSqrt(
		vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
	g001 *= norm1.x;
	g011 *= norm1.y;
	g101 *= norm1.z;
	g111 *= norm1.w;

	float n000 = dot(g000, Pf0);
	float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
	float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
	float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
	float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
	float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
	float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
	float n111 = dot(g111, Pf1);

	vec3 fade_xyz = fade(Pf0);
	vec4 n_z =
		mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
	vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
	float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
	return 2.2 * n_xyz;
}
float random(vec2 st) {
	return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}
vec2 rotate(vec2 uv, float rotation, vec2 mid) {
	return vec2(
		cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
		cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y);
}
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise(vec2 v) {
	const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626,
											0.024390243902439);
	vec2 i = floor(v + dot(v, C.yy));
	vec2 x0 = v - i + dot(i, C.xx);
	vec2 i1;
	i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
	vec4 x12 = x0.xyxy + C.xxzz;
	x12.xy -= i1;
	i = mod(i, 289.0);
	vec3 p =
		permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
	vec3 m =
		max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
	m = m * m;
	m = m * m;
	vec3 x = 2.0 * fract(p * C.www) - 1.0;
	vec3 h = abs(x) - 0.5;
	vec3 ox = floor(x + 0.5);
	vec3 a0 = x - ox;
	m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
	vec3 g;
	g.x = a0.x * x0.x + h.x * x0.y;
	g.yz = a0.yz * x12.xz + h.yz * x12.yw;
	return 130.0 * dot(m, g);
}

void main() {
	vec2 vUv = vec2(vUv.x * uAspectRatio, vUv.y);

	
	float strength = distance(gl_PointCoord, vec2(0.5));
	
	strength = step(0.5, strength);
	strength = 1.0 - strength;
	
	vec2 ownCol = vRandom.xy * (1.0 - vMouseStrengh * 40.0);
	vec2 rotatedCol =
		rotate(vRandom.xy, M_PI * 0.5, vec2(0.5)) * vMouseStrengh * 40.0;

	float tweenProgressInv = 1.0 - vTweenProgressFract;
	float opacity = pow(
		uOpacity * tweenProgressInv + uTargetOpacity * vTweenProgressFract, 4.0);
	gl_FragColor = vec4(ownCol + rotatedCol, vRandom.z, strength * opacity);
}`,tx=`attribute vec4 aRandom;
attribute vec3 aTargetPosition;

uniform float uAspectRatio;
uniform vec2 uBBoxMax;
uniform vec2 uBBoxMin;
uniform float uMouseX;
uniform float uMouseY;
uniform float uNoiseRotation;
uniform sampler2D uNoiseTexture;
uniform float uSize;
uniform float uTime;
uniform float uTweenProgress;

varying vec2 vUv;
varying float vDistance;
varying float vMouseStrengh;
varying vec3 vPosition;
varying vec4 vRandom;
varying float vTweenProgressFract;

float hump(float x, float waveSize) {
	return pow(2.0, waveSize) / (pow(x * 100.0, 4.0) + pow(2.0, waveSize));
}
float inverseLerp(float v, float minValue, float maxValue) {
	return (v - minValue) / (maxValue - minValue);
}
float remap(float v, float inMin, float inMax, float outMin, float outMax) {
	float t = inverseLerp(v, inMin, inMax);
	return mix(outMin, outMax, t);
}
vec2 rotate(vec2 uv, float rotation, vec2 mid) {
	return vec2(
		cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
		cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y);
}

#define M_PI 3.1415926535897932384626433832795

void main() {
	
	vec4 noise =
		texture(uNoiseTexture, rotate(position.xy, uNoiseRotation, vec2(0)));

	
	
	
	
	
	
	
	float tweenFract = uTweenDuration / 1.5;
	float tweenMin =
		(uTweenDuration - tweenFract) * (aRandom.x + aRandom.y + aRandom.z) / 3.0;
	float tweenMax = tweenMin + tweenFract;
	float tweenProgressFract =
		clamp(remap(uTweenProgress, tweenMin, tweenMax, 0.0, 1.0), 0.0, 1.0);
	vTweenProgressFract = tweenProgressFract;

	
	float tweenProgressInv = 1.0 - tweenProgressFract;
	vec3 tweenPositionDirect = vec3(
		position.x * tweenProgressInv + aTargetPosition.x * tweenProgressFract,
		position.y * tweenProgressInv + aTargetPosition.y * tweenProgressFract,
		position.z * tweenProgressInv + aTargetPosition.z * tweenProgressFract);
	vec3 tweenPositionNoise =
		vec3(tweenPositionDirect.x +
					 noise.x * 0.25 * sin(tweenProgressFract * M_PI),
				 tweenPositionDirect.y +
					 noise.y * 0.125 * sin(tweenProgressFract * M_PI),
				 tweenPositionDirect.z);
	vec4 modelPosition = modelMatrix * vec4(tweenPositionNoise, 1.0);

	
	
	
	
	
	
	vec4 _viewPosition = viewMatrix * modelPosition;
	float mouseStrenghX =
		hump((_viewPosition.x / 2.0) - uMouseX + 0.5, 8.0) / 10.0;
	float mouseStrenghY =
		hump((_viewPosition.y * uAspectRatio / 2.0) + uMouseY - 0.5,
				 7.5 * (pow(uAspectRatio, 0.5))) /
		10.0;
	float mouseStrengh = min(1.0, mouseStrenghX * mouseStrenghY * 2.5);

	
	modelPosition.x +=
		mouseStrengh * cos((uTime + aRandom.x) * 50.0 * aRandom.y) * 0.05;
	modelPosition.y +=
		mouseStrengh * sin((uTime + aRandom.y) * 50.0 * aRandom.x) * 0.05;

	
	float frequency = 1.0;
	float _y = sin(modelPosition.x * frequency);
	float t = 0.005 * (-uTime * 100.0 * (1.0 - aRandom.z / 3.0));
	_y += sin(modelPosition.x * frequency * 2.1 + t) * 4.5 * aRandom.y;
	_y += sin(modelPosition.x * frequency * 1.72 + t * 1.121) * 4.0 * aRandom.y;
	_y += sin(modelPosition.x * frequency * 2.221 + t * 0.437) * 5.0 * aRandom.y;
	_y += sin(modelPosition.x * frequency * 3.1122 + t * 4.269) * 2.5 * aRandom.y;
	_y *= uAmplitudeY * 0.003;
	float _x = sin(modelPosition.y * frequency);
	_x += sin(modelPosition.y * frequency * 2.1 + t) * 4.5 * aRandom.x;
	_x += sin(modelPosition.y * frequency * 1.72 + t * 1.121) * 4.0 * aRandom.x;
	_x += sin(modelPosition.y * frequency * 2.221 + t * 0.437) * 5.0 * aRandom.x;
	_x += sin(modelPosition.y * frequency * 3.1122 + t * 4.269) * 2.5 * aRandom.x;
	_x *= uAmplitudeX * 0.003;
	float _z = sin(modelPosition.z * frequency);
	_z += sin(modelPosition.z * frequency * 2.1 + t) * 4.5 * aRandom.z;
	_z += sin(modelPosition.z * frequency * 1.72 + t * 1.121) * 4.0 * aRandom.z;
	_z += sin(modelPosition.z * frequency * 2.221 + t * 0.437) * 5.0 * aRandom.z;
	_z += sin(modelPosition.z * frequency * 3.1122 + t * 4.269) * 2.5 * aRandom.z;
	_z *= (uAmplitudeX + uAmplitudeY) * 0.0015;
	modelPosition.y += _y * 0.1 * aRandom.z;
	modelPosition.x += _x * 0.1 * aRandom.x;
	modelPosition.z += _z * 0.1 * aRandom.y;

	
	modelPosition.x +=
		(aRandom.x - 0.5) * 6.0 * mouseStrengh * aRandom.z;
	modelPosition.y -=
		-abs((aRandom.y - 0.5) * 4.0 * mouseStrengh * aRandom.z);
	modelPosition.z +=
		(aRandom.z - 0.5) * 2.0 * mouseStrengh * aRandom.x;

	vec4 viewPosition = viewMatrix * modelPosition;
	vec4 projectedPosition = projectionMatrix * viewPosition;

	gl_Position = projectedPosition;
	gl_PointSize = max(0.01, uSize * (aRandom.y + 0.5));
	gl_PointSize *= 1.0;

	vDistance = abs(10.0) * 0.01 * aRandom.z;
	vMouseStrengh = mouseStrengh;
	vPosition = modelPosition.xyz;
	vRandom = aRandom;
	vUv = uv;
}`,ex=`varying vec2 vUv;

void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	vUv = uv;
}`,nx=`varying vec2 vUv;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }

vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

vec3 fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float perlin3dPeriodic(vec3 P, vec3 rep) {
	vec3 Pi0 = mod(floor(P), rep);				
	vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
	Pi0 = mod289(Pi0);
	Pi1 = mod289(Pi1);
	vec3 Pf0 = fract(P);				
	vec3 Pf1 = Pf0 - vec3(1.0); 
	vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
	vec4 iy = vec4(Pi0.yy, Pi1.yy);
	vec4 iz0 = Pi0.zzzz;
	vec4 iz1 = Pi1.zzzz;

	vec4 ixy = permute(permute(ix) + iy);
	vec4 ixy0 = permute(ixy + iz0);
	vec4 ixy1 = permute(ixy + iz1);

	vec4 gx0 = ixy0 * (1.0 / 7.0);
	vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
	gx0 = fract(gx0);
	vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
	vec4 sz0 = step(gz0, vec4(0.0));
	gx0 -= sz0 * (step(0.0, gx0) - 0.5);
	gy0 -= sz0 * (step(0.0, gy0) - 0.5);

	vec4 gx1 = ixy1 * (1.0 / 7.0);
	vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
	gx1 = fract(gx1);
	vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
	vec4 sz1 = step(gz1, vec4(0.0));
	gx1 -= sz1 * (step(0.0, gx1) - 0.5);
	gy1 -= sz1 * (step(0.0, gy1) - 0.5);

	vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
	vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
	vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
	vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
	vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
	vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
	vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
	vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

	vec4 norm0 = taylorInvSqrt(
		vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
	g000 *= norm0.x;
	g010 *= norm0.y;
	g100 *= norm0.z;
	g110 *= norm0.w;
	vec4 norm1 = taylorInvSqrt(
		vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
	g001 *= norm1.x;
	g011 *= norm1.y;
	g101 *= norm1.z;
	g111 *= norm1.w;

	float n000 = dot(g000, Pf0);
	float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
	float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
	float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
	float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
	float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
	float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
	float n111 = dot(g111, Pf1);

	vec3 fade_xyz = fade(Pf0);
	vec4 n_z =
		mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
	vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
	float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
	return 2.2 * n_xyz;
}

void main() {
	float frequency = 1.;
	float perlin1 = perlin3dPeriodic(vec3(vUv.xy * frequency * 5.0, 12.34),
																	 vec3(frequency * 5.0));
	float perlin2 = perlin3dPeriodic(vec3(vUv.xy * frequency * 10.0, 34.56),
																	 vec3(frequency * 10.0));
	float perlin3 = perlin3dPeriodic(vec3(vUv.xy * frequency * 20.0, 56.78),
																	 vec3(frequency * 20.0));
	float perlin4 = perlin3dPeriodic(vec3(vUv.xy * frequency * 40.0, 56.78),
																	 vec3(frequency * 40.0));
	gl_FragColor = vec4(perlin1, perlin2, perlin3, perlin4);
}`;const Wa=new Du,qa=new Na(-1,1,1,-1,.1,10);qa.position.set(0,0,5);Wa.add(qa);const ix=new Ks(2,2),rx=new Dn({vertexShader:ex,fragmentShader:nx}),sx=new un(ix,rx);Wa.add(sx);const qu=new Qn(256,256,{generateMipmaps:!1,type:Xn,wrapS:Hr,wrapT:Hr});no.setRenderTarget(qu);no.render(Wa,qa);no.setRenderTarget(null);var Xa=(s=>(s.move="MouseEvents.move",s))(Xa||{});const va={clientX:0,clientY:0};function ox(s){va.clientX=s.clientX,va.clientY=s.clientY,window.dispatchEvent(new CustomEvent(Xa.move))}window.addEventListener("mousemove",ox,{passive:!0});const kc=va;function Xu(){return .004*no.getPixelRatio()*Ae.width}const io=[];function Lr(){const s=new Dn({fragmentShader:Q0,precision:"lowp",side:ar,depthTest:!1,transparent:!0,uniforms:{uAspectRatio:{value:Ae.width/Ae.height},uBBoxMin:{value:new ot(0,0)},uBBoxMax:{value:new ot(1,1)},uBBoxMaxX:{value:1},uBBoxMinY:{value:0},uBBoxMaxY:{value:1},uMouseX:{value:0},uMouseY:{value:0},uNoiseRotation:{value:0},uNoiseTexture:{value:qu.texture},uOpacity:{value:0},uSize:{value:Xu()},uTargetOpacity:{value:0},uTime:{value:0},uTweenProgress:{value:0}},defines:{uFrequency:3,uTweenDuration:.5,uAmplitudeX:10.4,uAmplitudeY:10.4},vertexShader:tx});return io.push(s),s}window.addEventListener(eo.tick,s=>{io.forEach(t=>{t.uniforms.uTime.value=s.detail.elapsedTime})});window.addEventListener(wr.resize,()=>{io.forEach(s=>{s.uniforms.uAspectRatio.value=Ae.width/Ae.height,s.uniforms.uSize.value=Xu()})});window.addEventListener(Xa.move,()=>{io.forEach(s=>{s.uniforms.uMouseX.value=kc.clientX/Ae.width,s.uniforms.uMouseY.value=kc.clientY/Ae.height})});const ce={merge:function(s,t,e){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");let n;t instanceof un&&(t.matrixAutoUpdate&&t.updateMatrix(),n=t.matrix,t=t.geometry),s.merge(t,n,e)},randomPointInTriangle:function(){const s=new P;return function(t,e,n){const i=new P;let r=Math.random(),o=Math.random();r+o>1&&(r=1-r,o=1-o);const a=1-r-o;return i.copy(t),i.multiplyScalar(r),s.copy(e),s.multiplyScalar(o),i.add(s),s.copy(n),s.multiplyScalar(a),i.add(s),i}}(),randomPointInFace:function(s,t){const e=t.vertices[s.a],n=t.vertices[s.b],i=t.vertices[s.c];return ce.randomPointInTriangle(e,n,i)},randomPointsInGeometry:function(s,t){let e,n;const i=s.faces,r=s.vertices,o=i.length;let a=0;const c=[];let l,u,h;for(n=0;n<o;n++)e=i[n],l=r[e.a],u=r[e.b],h=r[e.c],a+=ce.triangleArea(l,u,h),c[n]=a;function f(_){function y(S,v){if(v<S)return S;const M=S+Math.floor((v-S)/2);return c[M]>_?y(S,M-1):c[M]<_?y(M+1,v):M}return y(0,c.length-1)}let m,g;const d=[],p=[];for(n=0;n<t;n++)m=Math.random()*a,g=f(m),d[n]=ce.randomPointInFace(i[g],s),p[g]?p[g]+=1:p[g]=1;return d},randomPointsInBufferGeometry:function(s,t){let e;const n=s.attributes.position.array;let i=0;const r=[],o=new P,a=new P,c=new P,l=n.length/9;for(e=0;e<l;e++)o.set(n[e*9+0],n[e*9+1],n[e*9+2]),a.set(n[e*9+3],n[e*9+4],n[e*9+5]),c.set(n[e*9+6],n[e*9+7],n[e*9+8]),i+=ce.triangleArea(o,a,c),r.push(i);function u(g){function d(p,_){if(_<p)return p;const y=p+Math.floor((_-p)/2);return r[y]>g?d(p,y-1):r[y]<g?d(y+1,_):y}return d(0,r.length-1)}let h,f;const m=[];for(e=0;e<t;e++)h=Math.random()*i,f=u(h),o.set(n[f*9+0],n[f*9+1],n[f*9+2]),a.set(n[f*9+3],n[f*9+4],n[f*9+5]),c.set(n[f*9+6],n[f*9+7],n[f*9+8]),m[e]=ce.randomPointInTriangle(o,a,c);return m},triangleArea:function(){const s=new P,t=new P;return function(e,n,i){return s.subVectors(n,e),t.subVectors(i,e),s.cross(t),.5*s.length()}}(),center:function(s){return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),s.center()},hilbert2D:function(s,t,e,n,i,r,o){s=s!==void 0?s:new P(0,0,0),t=t!==void 0?t:10;const a=t/2;e=e!==void 0?e:1,n=n!==void 0?n:0,i=i!==void 0?i:1,r=r!==void 0?r:2,o=o!==void 0?o:3;const c=[new P(s.x-a,s.y,s.z-a),new P(s.x-a,s.y,s.z+a),new P(s.x+a,s.y,s.z+a),new P(s.x+a,s.y,s.z-a)],l=[c[n],c[i],c[r],c[o]];if(0<=--e){const u=[];return Array.prototype.push.apply(u,ce.hilbert2D(l[0],a,e,n,o,r,i)),Array.prototype.push.apply(u,ce.hilbert2D(l[1],a,e,n,i,r,o)),Array.prototype.push.apply(u,ce.hilbert2D(l[2],a,e,n,i,r,o)),Array.prototype.push.apply(u,ce.hilbert2D(l[3],a,e,r,i,n,o)),u}return l},hilbert3D:function(s,t,e,n,i,r,o,a,c,l,u){s=s!==void 0?s:new P(0,0,0),t=t!==void 0?t:10;const h=t/2;e=e!==void 0?e:1,n=n!==void 0?n:0,i=i!==void 0?i:1,r=r!==void 0?r:2,o=o!==void 0?o:3,a=a!==void 0?a:4,c=c!==void 0?c:5,l=l!==void 0?l:6,u=u!==void 0?u:7;const f=[new P(s.x-h,s.y+h,s.z-h),new P(s.x-h,s.y+h,s.z+h),new P(s.x-h,s.y-h,s.z+h),new P(s.x-h,s.y-h,s.z-h),new P(s.x+h,s.y-h,s.z-h),new P(s.x+h,s.y-h,s.z+h),new P(s.x+h,s.y+h,s.z+h),new P(s.x+h,s.y+h,s.z-h)],m=[f[n],f[i],f[r],f[o],f[a],f[c],f[l],f[u]];if(--e>=0){const g=[];return Array.prototype.push.apply(g,ce.hilbert3D(m[0],h,e,n,o,a,u,l,c,r,i)),Array.prototype.push.apply(g,ce.hilbert3D(m[1],h,e,n,u,l,i,r,c,a,o)),Array.prototype.push.apply(g,ce.hilbert3D(m[2],h,e,n,u,l,i,r,c,a,o)),Array.prototype.push.apply(g,ce.hilbert3D(m[3],h,e,r,o,n,i,l,u,a,c)),Array.prototype.push.apply(g,ce.hilbert3D(m[4],h,e,r,o,n,i,l,u,a,c)),Array.prototype.push.apply(g,ce.hilbert3D(m[5],h,e,a,o,r,c,l,i,n,u)),Array.prototype.push.apply(g,ce.hilbert3D(m[6],h,e,a,o,r,c,l,i,n,u)),Array.prototype.push.apply(g,ce.hilbert3D(m[7],h,e,l,c,r,i,n,o,a,u)),g}return m}};class ax extends Va{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}function Tn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Yu(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.11.1
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ie={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},dr={duration:.5,overwrite:!1,delay:0},Ya,Xe,ie,He=1e8,Vt=1/He,ya=Math.PI*2,lx=ya/4,cx=0,Zu=Math.sqrt,ux=Math.cos,hx=Math.sin,he=function(t){return typeof t=="string"},$t=function(t){return typeof t=="function"},In=function(t){return typeof t=="number"},Za=function(t){return typeof t>"u"},dn=function(t){return typeof t=="object"},be=function(t){return t!==!1},Ju=function(){return typeof window<"u"},Is=function(t){return $t(t)||he(t)},ju=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ge=Array.isArray,Ma=/(?:-?\.?\d|\.)+/gi,$u=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ki=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,jo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ku=/[+-]=-?[.\d]+/,Qu=/[^,'"\[\]\s]+/gi,fx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,ke,Sa,Ja,ze={},Gs={},th,eh=function(t){return(Gs=Ei(t,ze))&&Fe},ja=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Vs=function(t,e){return!e&&console.warn(t)},nh=function(t,e){return t&&(ze[t]=e)&&Gs&&(Gs[t]=e)||ze},Zr=function(){return 0},dx={suppressEvents:!0,isStart:!0},Br={suppressEvents:!0},$a={},$n=[],wa={},ih,Re={},$o={},Gc=30,Us=[],Ka="",Qa=function(t){var e=t[0],n,i;if(dn(e)||$t(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Us.length;i--&&!Us[i].targetTest(e););n=Us[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Th(t[i],n)))||t.splice(i,1);return t},yi=function(t){return t._gsap||Qa(We(t))[0]._gsap},rh=function(t,e,n){return(n=t[e])&&$t(n)?t[e]():Za(n)&&t.getAttribute&&t.getAttribute(e)||n},Te=function(t,e){return(t=t.split(",")).forEach(e)||t},te=function(t){return Math.round(t*1e5)/1e5||0},fe=function(t){return Math.round(t*1e7)/1e7||0},rr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},px=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Hs=function(){var t=$n.length,e=$n.slice(0),n,i;for(wa={},$n.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},sh=function(t,e,n,i){$n.length&&Hs(),t.render(e,n,i||Xe),$n.length&&Hs()},oh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Qu).length<2?e:he(t)?t.trim():t},ah=function(t){return t},Ze=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},mx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ei=function(t,e){for(var n in e)t[n]=e[n];return t},Vc=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=dn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Ws=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},kr=function(t){var e=t.parent||Xt,n=t.keyframes?mx(ge(t.keyframes)):Ze;if(be(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},gx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},lh=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ro=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},zn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Mi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},_x=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ba=function(t,e,n,i){return t._startAt&&(Xe?t._startAt.revert(Br):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},xx=function s(t){return!t||t._ts&&s(t.parent)},Hc=function(t){return t._repeat?pr(t._tTime,t=t.duration()+t._rDelay)*t:0},pr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},qs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},so=function(t){return t._end=fe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Vt)||0))},oo=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=fe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),so(t),n._dirty||Mi(n,t)),t},ch=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=qs(t.rawTime(),e),(!e._dur||os(0,e.totalDuration(),n)-e._tTime>Vt)&&e.render(n,!0)),Mi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Vt}},ln=function(t,e,n,i){return e.parent&&zn(e),e._start=fe((In(n)?n:n||t!==Xt?Be(t,n,e):t._time)+e._delay),e._end=fe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),lh(t,e,"_first","_last",t._sort?"_start":0),Ta(e)||(t._recent=e),i||ch(t,e),t._ts<0&&oo(t,t._tTime),t},uh=function(t,e){return(ze.ScrollTrigger||ja("scrollTrigger",e))&&ze.ScrollTrigger.create(e,t)},hh=function(t,e,n,i){if(el(t,e),!t._initted)return 1;if(!n&&t._pt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ih!==De.frame)return $n.push(t),t._lazy=[e,i],1},vx=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Ta=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},yx=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&vx(t)&&!(!t._initted&&Ta(t))||(t._ts<0||t._dp._ts<0)&&!Ta(t))?0:1,a=t._rDelay,c=0,l,u,h;if(a&&t._repeat&&(c=os(0,t._tDur,e),u=pr(c,a),t._yoyo&&u&1&&(o=1-o),u!==pr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Xe||i||t._zTime===Vt||!e&&t._zTime){if(!t._initted&&hh(t,e,i,n))return;for(h=t._zTime,t._zTime=e||(n?Vt:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&ba(t,e,n,!0),t._onUpdate&&!n&&qe(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&qe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&zn(t,1),!n&&!Xe&&(qe(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Mx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},mr=function(t,e,n,i){var r=t._repeat,o=fe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:fe(o*(r+1)+t._rDelay*r):o,a>0&&!i?oo(t,t._tTime=t._tDur*a):t.parent&&so(t),n||Mi(t.parent,t),t},Wc=function(t){return t instanceof Se?Mi(t):mr(t,t._dur)},Sx={_start:0,endTime:Zr,totalDuration:Zr},Be=function s(t,e,n){var i=t.labels,r=t._recent||Sx,o=t.duration()>=He?r.endTime(!1):t._dur,a,c,l;return he(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(ge(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},Gr=function(t,e,n){var i=In(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=be(c.vars.inherit)&&c.parent;o.immediateRender=be(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new se(e[0],o,e[r+1])},ni=function(t,e){return t||t===0?e(t):e},os=function(t,e,n){return n<t?t:n>e?e:n},me=function(t,e){return!he(t)||!(e=fx.exec(t))?"":e[1]},wx=function(t,e,n){return ni(n,function(i){return os(t,e,i)})},Ea=[].slice,fh=function(t,e){return t&&dn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&dn(t[0]))&&!t.nodeType&&t!==ke},bx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return he(i)&&!e||fh(i,1)?(r=n).push.apply(r,We(i)):n.push(i)})||n},We=function(t,e,n){return ie&&!e&&ie.selector?ie.selector(t):he(t)&&!n&&(Sa||!gr())?Ea.call((e||Ja).querySelectorAll(t),0):ge(t)?bx(t,n):fh(t)?Ea.call(t,0):t?[t]:[]},Aa=function(t){return t=We(t)[0]||Vs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return We(e,n.querySelectorAll?n:n===t?Vs("Invalid scope")||Ja.createElement("div"):t)}},dh=function(t){return t.sort(function(){return .5-Math.random()})},ph=function(t){if($t(t))return t;var e=dn(t)?t:{each:t},n=Si(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,u=i,h=i;return he(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||e).length,p=o[d],_,y,S,v,M,E,C,x,b;if(!p){if(b=e.grid==="auto"?0:(e.grid||[1,He])[1],!b){for(C=-He;C<(C=g[b++].getBoundingClientRect().left)&&b<d;);b--}for(p=o[d]=[],_=c?Math.min(b,d)*u-.5:i%b,y=b===He?0:c?d*h/b-.5:i/b|0,C=0,x=He,E=0;E<d;E++)S=E%b-_,v=y-(E/b|0),p[E]=M=l?Math.abs(l==="y"?v:S):Zu(S*S+v*v),M>C&&(C=M),M<x&&(x=M);i==="random"&&dh(p),p.max=C-x,p.min=x,p.v=d=(parseFloat(e.amount)||parseFloat(e.each)*(b>d?d-1:l?l==="y"?d/b:b:Math.max(b,d/b))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=me(e.amount||e.each)||0,n=n&&d<0?Sh(n):n}return d=(p[f]-p.min)/p.max||0,fe(p.b+(n?n(d):d)*p.v)+p.u}},Ca=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=fe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(In(n)?0:me(n))}},mh=function(t,e){var n=ge(t),i,r;return!n&&dn(t)&&(i=n=t.radius||He,t.values?(t=We(t.values),(r=!In(t[0]))&&(i*=i)):t=Ca(t.increment)),ni(e,n?$t(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=He,u=0,h=t.length,f,m;h--;)r?(f=t[h].x-a,m=t[h].y-c,f=f*f+m*m):f=Math.abs(t[h]-a),f<l&&(l=f,u=h);return u=!i||l<=i?t[u]:o,r||u===o||In(o)?u:u+me(o)}:Ca(t))},gh=function(t,e,n,i){return ni(ge(t)?!e:n===!0?!!(n=0):!i,function(){return ge(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Tx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Ex=function(t,e){return function(n){return t(parseFloat(n))+(e||me(n))}},Ax=function(t,e,n){return xh(t,e,0,1,n)},_h=function(t,e,n){return ni(n,function(i){return t[~~e(i)]})},Cx=function s(t,e,n){var i=e-t;return ge(t)?_h(t,s(0,t.length),e):ni(n,function(r){return(i+(r-t)%i)%i+t})},Px=function s(t,e,n){var i=e-t,r=i*2;return ge(t)?_h(t,s(0,t.length-1),e):ni(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Jr=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Qu:Ma),n+=t.substr(e,i-e)+gh(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},xh=function(t,e,n,i,r){var o=e-t,a=i-n;return ni(r,function(c){return n+((c-t)/o*a||0)})},Lx=function s(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var o=he(t),a={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(ge(t)&&!ge(e)){for(u=[],h=t.length,f=h-2,l=1;l<h;l++)u.push(s(t[l-1],t[l]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=e}else i||(t=Ei(ge(t)?[]:{},t));if(!u){for(c in e)tl.call(a,t,c,"get",e[c]);r=function(g){return rl(g,a)||(o?t.p:t)}}}return ni(n,r)},qc=function(t,e,n){var i=t.labels,r=He,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},qe=function(t,e,n){var i=t.vars,r=i[e],o=ie,a=t._ctx,c,l,u;if(!!r)return c=i[e+"Params"],l=i.callbackScope||t,n&&$n.length&&Hs(),a&&(ie=a),u=c?r.apply(l,c):r.call(l),ie=o,u},Fr=function(t){return zn(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&qe(t,"onInterrupt"),t},Qi,Rx=function(t){t=!t.name&&t.default||t;var e=t.name,n=$t(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Zr,render:rl,add:tl,kill:Yx,modifier:Xx,rawVars:0},o={targetTest:0,get:0,getSetter:il,aliases:{},register:0};if(gr(),t!==i){if(Re[e])return;Ze(i,Ze(Ws(t,r),o)),Ei(i.prototype,Ei(r,Ws(t,o))),Re[i.prop=e]=i,t.targetTest&&(Us.push(i),$a[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}nh(e,i),t.register&&t.register(Fe,i,Ee)},Gt=255,Or={aqua:[0,Gt,Gt],lime:[0,Gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Gt],navy:[0,0,128],white:[Gt,Gt,Gt],olive:[128,128,0],yellow:[Gt,Gt,0],orange:[Gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Gt,0,0],pink:[Gt,192,203],cyan:[0,Gt,Gt],transparent:[Gt,Gt,Gt,0]},Ko=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Gt+.5|0},vh=function(t,e,n){var i=t?In(t)?[t>>16,t>>8&Gt,t&Gt]:0:Or.black,r,o,a,c,l,u,h,f,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Or[t])i=Or[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Gt,i&Gt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Gt,t&Gt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Ma),!e)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ko(c+1/3,r,o),i[1]=Ko(c,r,o),i[2]=Ko(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match($u),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ma)||Or.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/Gt,o=i[1]/Gt,a=i[2]/Gt,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?c=l=0:(m=h-f,l=u>.5?m/(2-h-f):m/(h+f),c=h===r?(o-a)/m+(o<a?6:0):h===o?(a-r)/m+2:(r-o)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},yh=function(t){var e=[],n=[],i=-1;return t.split(Kn).forEach(function(r){var o=r.match(Ki)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Xc=function(t,e,n){var i="",r=(t+i).match(Kn),o=e?"hsla(":"rgba(",a=0,c,l,u,h;if(!r)return t;if(r=r.map(function(f){return(f=vh(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=yh(t),c=n.c,c.join(i)!==u.c.join(i)))for(l=t.replace(Kn,"1").split(Ki),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=t.split(Kn),h=l.length-1;a<h;a++)i+=l[a]+r[a];return i+l[h]},Kn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Or)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Dx=/hsl[a]?\(/,Mh=function(t){var e=t.join(" "),n;if(Kn.lastIndex=0,Kn.test(e))return n=Dx.test(e),t[1]=Xc(t[1],n),t[0]=Xc(t[0],n,yh(t[1])),!0},jr,De=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,u,h,f,m,g=function d(p){var _=s()-i,y=p===!0,S,v,M,E;if(_>t&&(n+=_-e),i+=_,M=i-n,S=M-o,(S>0||y)&&(E=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=S+(S>=r?4:r-S),v=1),y||(c=l(d)),v)for(m=0;m<a.length;m++)a[m](M,f,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){th&&(!Sa&&Ju()&&(ke=Sa=window,Ja=ke.document||{},ze.gsap=Fe,(ke.gsapVersions||(ke.gsapVersions=[])).push(Fe.version),eh(Gs||ke.GreenSockGlobals||!ke.gsap&&ke||{}),u=ke.requestAnimationFrame),c&&h.sleep(),l=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},jr=1,g(2))},sleep:function(){(u?ke.cancelAnimationFrame:clearTimeout)(c),jr=0,l=Zr},lagSmoothing:function(p,_){t=p||1/Vt,e=Math.min(_,t,0)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,_,y){var S=_?function(v,M,E,C){p(v,M,E,C),h.remove(S)}:p;return h.remove(p),a[y?"unshift":"push"](S),gr(),S},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},h}(),gr=function(){return!jr&&De.wake()},It={},Ix=/^[\d.\-M][\d.\-,\s]/,zx=/["']/g,Fx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(zx,"").trim():+l,i=c.substr(a+1).trim();return e},Ox=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Nx=function(t){var e=(t+"").split("("),n=It[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Fx(e[1])]:Ox(t).split(",").map(oh)):It._CE&&Ix.test(t)?It._CE("",t):n},Sh=function(t){return function(e){return 1-t(1-e)}},wh=function s(t,e){for(var n=t._first,i;n;)n instanceof Se?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Si=function(t,e){return t&&($t(t)?t:It[t]||Nx(t))||e},Ci=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Te(t,function(a){It[a]=ze[a]=r,It[o=a.toLowerCase()]=n;for(var c in r)It[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=It[a+"."+c]=r[c]}),r},bh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Qo=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/ya*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*hx((u-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:bh(a);return r=ya/r,c.config=function(l,u){return s(t,l,u)},c},ta=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:bh(n);return i.config=function(r){return s(t,r)},i};Te("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Ci(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});It.Linear.easeNone=It.none=It.Linear.easeIn;Ci("Elastic",Qo("in"),Qo("out"),Qo());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Ci("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ci("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Ci("Circ",function(s){return-(Zu(1-s*s)-1)});Ci("Sine",function(s){return s===1?1:-ux(s*lx)+1});Ci("Back",ta("in"),ta("out"),ta());It.SteppedEase=It.steps=ze.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Vt;return function(a){return((i*os(0,o,a)|0)+r)*n}}};dr.ease=It["quad.out"];Te("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ka+=s+","+s+"Params,"});var Th=function(t,e){this.id=cx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:rh,this.set=e?e.getSetter:il},_r=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,mr(this,+e.duration,1,1),this.data=e.data,ie&&(this._ctx=ie,ie.data.push(this)),jr||De.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,mr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(gr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(oo(this,n),!r._dp||r.parent||ch(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ln(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Vt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),sh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?pr(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Vt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?qs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Vt?0:this._rts,this.totalTime(os(-this._delay,this._tDur,i),!0),so(this),_x(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(gr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vt&&(this._tTime-=Vt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ln(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(be(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Br);var i=Xe;return Xe=n,this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents),this.data!=="nested"&&zn(this),Xe=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Be(this,n),be(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,be(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Vt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Vt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Vt)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=$t(n)?n:ah,a=function(){var l=i.then;i.then=null,$t(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Fr(this)},s}();Ze(_r.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Vt,_prom:0,_ps:!1,_rts:1});var Se=function(s){Yu(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=be(n.sortChildren),Xt&&ln(n.parent||Xt,Tn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&uh(Tn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Gr(0,arguments,this),this},e.from=function(i,r,o){return Gr(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Gr(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,kr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new se(i,r,Be(this,o),1),this},e.call=function(i,r,o){return ln(this,se.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new se(i,o,Be(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,u){return o.runBackwards=1,kr(o).immediateRender=be(o.immediateRender),this.staggerTo(i,r,o,a,c,l,u)},e.staggerFromTo=function(i,r,o,a,c,l,u,h){return a.startAt=o,kr(a).immediateRender=be(a.immediateRender),this.staggerTo(i,r,a,c,l,u,h)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:fe(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,m,g,d,p,_,y,S,v,M,E,C;if(this!==Xt&&u>c&&i>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,S=this._ts,_=!S,h&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=fe(u%p),u===c?(d=this._repeat,f=l):(d=~~(u/p),d&&d===u/p&&(f=l,d--),f>l&&(f=l)),M=pr(this._tTime,p),!a&&this._tTime&&M!==d&&(M=d),E&&d&1&&(f=l-f,C=1),d!==M&&!this._lock){var x=E&&M&1,b=x===(E&&d&1);if(d<M&&(x=!x),a=x?0:l,this._lock=1,this.render(a||(C?0:fe(d*p)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&qe(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,b&&(this._lock=2,a=x?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;wh(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Mx(this,fe(a),fe(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&(qe(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,o),f!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=-Vt);break}}m=g}else{o=o||Xe,m=this._last;for(var L=i<0?i:f;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,o),f!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=L?-Vt:Vt);break}}m=g}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-Vt)._zTime=f>=a?1:-1,this._ts))return this._start=v,so(this),this.render(i,r,o);this._onUpdate&&!r&&qe(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&zn(this,1),!r&&!(i<0&&!a)&&(u||a||!c)&&(qe(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(In(r)||(r=Be(this,r,i)),!(i instanceof _r)){if(ge(i))return i.forEach(function(a){return o.add(a,r)}),this;if(he(i))return this.addLabel(i,r);if($t(i))i=se.delayedCall(0,i);else return this}return this!==i?ln(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-He);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof se?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return he(i)?this.removeLabel(i):$t(i)?this.killTweensOf(i):(ro(this,i),i===this._recent&&(this._recent=this._last),Mi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fe(De.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Be(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=se.delayedCall(0,r||Zr,o);return a.data="isPause",this._hasPause=1,ln(this,a,Be(this,i))},e.removePause=function(i){var r=this._first;for(i=Be(this,i);r;)r._start===i&&r.data==="isPause"&&zn(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Yn!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=We(i),c=this._first,l=In(r),u;c;)c instanceof se?px(c._targets,a)&&(l?(!Yn||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(u=c.getTweensOf(a,r)).length&&o.push.apply(o,u),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Be(o,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,m,g=se.to(o,Ze({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Vt,onStart:function(){if(o.pause(),!m){var p=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==p&&mr(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,Ze({startAt:{time:Be(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),qc(this,Be(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),qc(this,Be(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Vt)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return Mi(this)},e.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return s.prototype.invalidate.call(this)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Mi(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=He,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,ln(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;mr(o,o===Xt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Xt._ts&&(sh(Xt,qs(i,Xt)),ih=De.frame),De.frame>=Gc){Gc+=Ie.autoSleep||120;var r=Xt._first;if((!r||!r._ts)&&Ie.autoSleep&&De._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||De.sleep()}}},t}(_r);Ze(Se.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ux=function(t,e,n,i,r,o,a){var c=new Ee(this._pt,t,e,0,1,Rh,null,r),l=0,u=0,h,f,m,g,d,p,_,y;for(c.b=n,c.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Jr(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),f=n.match(jo)||[];h=jo.exec(i);)g=h[0],d=i.substring(l,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?rr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},l=jo.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Ku.test(i)||_)&&(c.e=0),this._pt=c,c},tl=function(t,e,n,i,r,o,a,c,l,u){$t(i)&&(i=i(r||0,t,o));var h=t[e],f=n!=="get"?n:$t(h)?l?t[e.indexOf("set")||!$t(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():h,m=$t(h)?l?Hx:Ph:nl,g;if(he(i)&&(~i.indexOf("random(")&&(i=Jr(i)),i.charAt(1)==="="&&(g=rr(f,i)+(me(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Pa)return!isNaN(f*i)&&i!==""?(g=new Ee(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?qx:Lh,0,m),l&&(g.fp=l),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&ja(e,i),Ux.call(this,t,e,f,i,m,c||Ie.stringFilter,l))},Bx=function(t,e,n,i,r){if($t(t)&&(t=Vr(t,r,e,n,i)),!dn(t)||t.style&&t.nodeType||ge(t)||ju(t))return he(t)?Vr(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Vr(t[a],r,e,n,i);return o},Eh=function(t,e,n,i,r,o){var a,c,l,u;if(Re[t]&&(a=new Re[t]).init(r,a.rawVars?e[t]:Bx(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new Ee(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Qi))for(l=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Yn,Pa,el=function s(t,e){var n=t.vars,i=n.ease,r=n.startAt,o=n.immediateRender,a=n.lazy,c=n.onUpdate,l=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,f=n.yoyoEase,m=n.keyframes,g=n.autoRevert,d=t._dur,p=t._startAt,_=t._targets,y=t.parent,S=y&&y.data==="nested"?y.vars.targets:_,v=t._overwrite==="auto"&&!Ya,M=t.timeline,E,C,x,b,L,R,$,K,D,V,z,H,q;if(M&&(!m||!i)&&(i="none"),t._ease=Si(i,dr.ease),t._yEase=f?Sh(Si(f===!0?i:f,dr.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!M&&!!n.runBackwards,!M||m&&!n.stagger){if(K=_[0]?yi(_[0]).harness:0,H=K&&n[K.prop],E=Ws(n,$a),p&&(e<0&&h&&o&&!g?p.render(-1,!0):p.revert(h&&d?Br:dx),p._lazy=0),r){if(zn(t._startAt=se.set(_,Ze({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:be(a),startAt:null,delay:0,onUpdate:c,onUpdateParams:l,callbackScope:u,stagger:0},r))),e<0&&(Xe||!o&&!g)&&t._startAt.revert(Br),o&&d&&e<=0){e&&(t._zTime=e);return}}else if(h&&d&&!p){if(e&&(o=!1),x=Ze({overwrite:!1,data:"isFromStart",lazy:o&&be(a),immediateRender:o,stagger:0,parent:y},E),H&&(x[K.prop]=H),zn(t._startAt=se.set(_,x)),e<0&&(Xe?t._startAt.revert(Br):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,Vt);else if(!e)return}for(t._pt=t._ptCache=0,a=d&&be(a)||a&&!d,C=0;C<_.length;C++){if(L=_[C],$=L._gsap||Qa(_)[C]._gsap,t._ptLookup[C]=V={},wa[$.id]&&$n.length&&Hs(),z=S===_?C:S.indexOf(L),K&&(D=new K).init(L,H||E,t,z,S)!==!1&&(t._pt=b=new Ee(t._pt,L,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(O){V[O]=b}),D.priority&&(R=1)),!K||H)for(x in E)Re[x]&&(D=Eh(x,E,t,z,L,S))?D.priority&&(R=1):V[x]=b=tl.call(t,L,x,"get",E[x],z,S,0,n.stringFilter);t._op&&t._op[C]&&t.kill(L,t._op[C]),v&&t._pt&&(Yn=t,Xt.killTweensOf(L,V,t.globalTime(e)),q=!t.parent,Yn=0),t._pt&&a&&(wa[$.id]=1)}R&&Dh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!q,m&&e<=0&&M.render(He,!0,!0)},kx=function(t,e,n,i,r,o,a){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,u,h,f;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(l=h[f][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return Pa=1,t.vars[e]="+=0",el(t,a),Pa=0,1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(i||i===0)&&!r?i:l.s+(i||0)+o*l.c,l.c=n-l.s,u.e&&(u.e=te(n)+me(u.e)),u.b&&(u.b=l.s+me(u.b))},Gx=function(t,e){var n=t[0]?yi(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=Ei({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},Vx=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(ge(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Vr=function(t,e,n,i,r){return $t(t)?t.call(e,n,i,r):he(t)&&~t.indexOf("random(")?Jr(t):t},Ah=Ka+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ch={};Te(Ah+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Ch[s]=1});var se=function(s){Yu(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:kr(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,m=c.overwrite,g=c.keyframes,d=c.defaults,p=c.scrollTrigger,_=c.yoyoEase,y=i.parent||Xt,S=(ge(n)||ju(n)?In(n[0]):"length"in i)?[n]:We(n),v,M,E,C,x,b,L,R;if(a._targets=S.length?Qa(S):Vs("GSAP target "+n+" not found. https://greensock.com",!Ie.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||f||Is(l)||Is(u)){if(i=a.vars,v=a.timeline=new Se({data:"nested",defaults:d||{},targets:y&&y.data==="nested"?y.vars.targets:S}),v.kill(),v.parent=v._dp=Tn(a),v._start=0,f||Is(l)||Is(u)){if(C=S.length,L=f&&ph(f),dn(f))for(x in f)~Ah.indexOf(x)&&(R||(R={}),R[x]=f[x]);for(M=0;M<C;M++)E=Ws(i,Ch),E.stagger=0,_&&(E.yoyoEase=_),R&&Ei(E,R),b=S[M],E.duration=+Vr(l,Tn(a),M,b,S),E.delay=(+Vr(u,Tn(a),M,b,S)||0)-a._delay,!f&&C===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),v.to(b,E,L?L(M,b,S):0),v._ease=It.none;v.duration()?l=u=0:a.timeline=0}else if(g){kr(Ze(v.vars.defaults,{ease:"none"})),v._ease=Si(g.ease||i.ease||"none");var $=0,K,D,V;if(ge(g))g.forEach(function(z){return v.to(S,z,">")}),v.duration();else{E={};for(x in g)x==="ease"||x==="easeEach"||Vx(x,g[x],E,g.easeEach);for(x in E)for(K=E[x].sort(function(z,H){return z.t-H.t}),$=0,M=0;M<K.length;M++)D=K[M],V={ease:D.e,duration:(D.t-(M?K[M-1].t:0))/100*l},V[x]=D.v,v.to(S,V,$),$+=V.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||a.duration(l=v.duration())}else a.timeline=0;return m===!0&&!Ya&&(Yn=Tn(a),Xt.killTweensOf(S),Yn=0),ln(y,Tn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!g&&a._start===fe(y._time)&&be(h)&&xx(Tn(a))&&y.data!=="nested")&&(a._tTime=-Vt,a.render(Math.max(0,-u))),p&&uh(Tn(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Vt&&!u?c:i<Vt?0:i,f,m,g,d,p,_,y,S,v;if(!l)yx(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,S=this.timeline,this._repeat){if(d=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,o);if(f=fe(h%d),h===c?(g=this._repeat,f=l):(g=~~(h/d),g&&g===h/d&&(f=l,g--),f>l&&(f=l)),_=this._yoyo&&g&1,_&&(v=this._yEase,f=l-f),p=pr(this._tTime,d),f===a&&!o&&this._initted)return this._tTime=h,this;g!==p&&(S&&this._yEase&&wh(S,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(fe(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(hh(this,u?i:f,o,r))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/l),this._from&&(this.ratio=y=1-y),f&&!a&&!r&&(qe(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;S&&S.render(i<0?i:!f&&_?-Vt:S._dur*S._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&ba(this,i,r,o),qe(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&qe(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ba(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&zn(this,1),!r&&!(u&&!a)&&(h||a)&&(qe(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),s.prototype.invalidate.call(this)},e.resetTo=function(i,r,o,a){jr||De.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||el(this,c),l=this._ease(c/this._dur),kx(this,i,r,o,a,l,c)?this.resetTo(i,r,o,a):(oo(this,0),this.parent||lh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Fr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Yn&&Yn.vars.overwrite!==!0)._first||Fr(this),this.parent&&o!==this.timeline.totalDuration()&&mr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?We(i):a,l=this._ptLookup,u=this._pt,h,f,m,g,d,p,_;if((!r||r==="all")&&gx(a,c))return r==="all"&&(this._pt=0),Fr(this);for(h=this._op=this._op||[],r!=="all"&&(he(r)&&(d={},Te(r,function(y){return d[y]=1}),r=d),r=Gx(a,r)),_=a.length;_--;)if(~c.indexOf(a[_])){f=l[_],r==="all"?(h[_]=r,g=f,m={}):(m=h[_]=h[_]||{},g=r);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&ro(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&Fr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Gr(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Gr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Xt.killTweensOf(i,r,o)},t}(_r);Ze(se.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Te("staggerTo,staggerFrom,staggerFromTo",function(s){se[s]=function(){var t=new Se,e=Ea.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var nl=function(t,e,n){return t[e]=n},Ph=function(t,e,n){return t[e](n)},Hx=function(t,e,n,i){return t[e](i.fp,n)},Wx=function(t,e,n){return t.setAttribute(e,n)},il=function(t,e){return $t(t[e])?Ph:Za(t[e])&&t.setAttribute?Wx:nl},Lh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},qx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Rh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},rl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Xx=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},Yx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ro(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Zx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Dh=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Ee=function(){function s(e,n,i,r,o,a,c,l,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Lh,this.d=c||this,this.set=l||nl,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Zx,this.m=n,this.mt=r,this.tween=i},s}();Te(Ka+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return $a[s]=1});ze.TweenMax=ze.TweenLite=se;ze.TimelineLite=ze.TimelineMax=Se;Xt=new Se({sortChildren:!1,defaults:dr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ie.stringFilter=Mh;var xr=[],Bs={},Jx=[],Yc=0,ea=function(t){return(Bs[t]||Jx).map(function(e){return e()})},La=function(){var t=Date.now(),e=[];t-Yc>2&&(ea("matchMediaInit"),xr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=ke.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),ea("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Yc=t,ea("matchMedia"))},Ih=function(){function s(e,n){this.selector=n&&Aa(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){$t(n)&&(r=i,i=n,n=$t);var o=this,a=function(){var l=ie,u=o.selector,h;return l&&l!==o&&l.data.push(o),r&&(o.selector=Aa(r)),ie=o,h=i.apply(o,arguments),$t(h)&&o._r.push(h),ie=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===$t?a(o):n?o[n]=a:a},t.ignore=function(n){var i=ie;ie=null,n(this),ie=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof se&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(this.getTweens().map(function(a){return{g:a.globalTime(0),t:a}}).sort(function(a,c){return c.g-a.g||-1}).forEach(function(a){return a.t.revert(n)}),this.data.forEach(function(a){return!(a instanceof _r)&&a.revert&&a.revert(n)}),this._r.forEach(function(a){return a(n,r)}),this.isReverted=!0):this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){var o=xr.indexOf(this);~o&&xr.splice(o,1)}},t.revert=function(n){this.kill(n||{})},s}(),jx=function(){function s(e){this.contexts=[],this.scope=e}var t=s.prototype;return t.add=function(n,i,r){dn(n)||(n={matches:n});var o=new Ih(0,r||this.scope),a=o.conditions={},c,l,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=ke.matchMedia(n[l]),c&&(xr.indexOf(o)<0&&xr.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(La):c.addEventListener("change",La)));return u&&i(o),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Xs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Rx(i)})},timeline:function(t){return new Se(t)},getTweensOf:function(t,e){return Xt.getTweensOf(t,e)},getProperty:function(t,e,n,i){he(t)&&(t=We(t)[0]);var r=yi(t||{}).get,o=n?ah:oh;return n==="native"&&(n=""),t&&(e?o((Re[e]&&Re[e].get||r)(t,e,n,i)):function(a,c,l){return o((Re[a]&&Re[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=We(t),t.length>1){var i=t.map(function(u){return Fe.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var o=Re[e],a=yi(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(u){var h=new o;Qi._pt=0,h.init(t,n?u+n:u,Qi,0,[t]),h.render(1,h),Qi._pt&&rl(1,Qi)}:a.set(t,c);return o?l:function(u){return l(t,c,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,r=Fe.to(t,Ei((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,u){return r.resetTo(e,c,l,u)};return o.tween=r,o},isTweening:function(t){return Xt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Si(t.ease,dr.ease)),Vc(dr,t||{})},config:function(t){return Vc(Ie,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Re[a]&&!ze[a]&&Vs(e+" effect requires "+a+" plugin.")}),$o[e]=function(a,c,l){return n(We(a),Ze(c||{},r),l)},o&&(Se.prototype[e]=function(a,c,l){return this.add($o[e](a,dn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){It[t]=Si(e)},parseEase:function(t,e){return arguments.length?Si(t,e):It},getById:function(t){return Xt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Se(t),i,r;for(n.smoothChildTiming=be(t.smoothChildTiming),Xt.remove(n),n._dp=0,n._time=n._tTime=Xt._time,i=Xt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof se&&i.vars.onComplete===i._targets[0]))&&ln(n,i,i._start-i._delay),i=r;return ln(Xt,n,0),n},context:function(t,e){return t?new Ih(t,e):ie},matchMedia:function(t){return new jx(t)},matchMediaRefresh:function(){return xr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||La()},addEventListener:function(t,e){var n=Bs[t]||(Bs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Bs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Cx,wrapYoyo:Px,distribute:ph,random:gh,snap:mh,normalize:Ax,getUnit:me,clamp:wx,splitColor:vh,toArray:We,selector:Aa,mapRange:xh,pipe:Tx,unitize:Ex,interpolate:Lx,shuffle:dh},install:eh,effects:$o,ticker:De,updateRoot:Se.updateRoot,plugins:Re,globalTimeline:Xt,core:{PropTween:Ee,globals:nh,Tween:se,Timeline:Se,Animation:_r,getCache:yi,_removeLinkedListItem:ro,reverting:function(){return Xe},context:function(t){return t&&ie&&(ie.data.push(t),t._ctx=ie),ie},suppressOverwrites:function(t){return Ya=t}}};Te("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Xs[s]=se[s]});De.add(Se.updateRoot);Qi=Xs.to({},{duration:0});var $x=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Kx=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=$x(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},na=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(he(r)&&(c={},Te(r,function(u){return c[u]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}Kx(a,r)}}}},Fe=Xs.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Xe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},na("roundProps",Ca),na("modifiers"),na("snap",mh))||Xs;se.version=Se.version=Fe.version="3.11.1";th=1;Ju()&&gr();It.Power0;It.Power1;It.Power2;It.Power3;It.Power4;It.Linear;It.Quad;It.Cubic;It.Quart;It.Quint;It.Strong;It.Elastic;It.Back;It.SteppedEase;It.Bounce;It.Sine;It.Expo;It.Circ;/*!
 * CSSPlugin 3.11.1
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zc,Zn,sr,sl,gi,Jc,ol,Qx=function(){return typeof window<"u"},Fn={},hi=180/Math.PI,or=Math.PI/180,Zi=Math.atan2,jc=1e8,al=/([A-Z])/g,tv=/(left|right|width|margin|padding|x)/i,ev=/[\s,\(]\S/,Ln={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ra=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},nv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},iv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},rv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},zh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Fh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},sv=function(t,e,n){return t.style[e]=n},ov=function(t,e,n){return t.style.setProperty(e,n)},av=function(t,e,n){return t._gsap[e]=n},lv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},cv=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},uv=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},jt="transform",nn=jt+"Origin",hv=function(t){var e=this,n=this.target,i=n.style;if(t in Fn){if(this.tfm=this.tfm||{},t!=="transform"&&(t=Ln[t]||t,~t.indexOf(",")?t.split(",").forEach(function(r){return e.tfm[r]=En(n,r)}):this.tfm[t]=n._gsap.x?n._gsap[t]:En(n,t)),this.props.indexOf(jt)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(nn,"")),t=jt}i&&this.props.push(t,i[t])},Oh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},fv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=2)t[r+1]?n[t[r]]=t[r+1]:n.removeProperty(t[r].replace(al,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ol(),r&&!r.isStart&&!n[jt]&&(Oh(n),i.uncache=1)}},Nh=function(t,e){var n={target:t,props:[],revert:fv,save:hv};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},Uh,Da=function(t,e){var n=Zn.createElementNS?Zn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Zn.createElement(t);return n.style?n:Zn.createElement(t)},fn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(al,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,vr(e)||e,1)||""},$c="O,Moz,ms,Ms,Webkit".split(","),vr=function(t,e,n){var i=e||gi,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!($c[o]+t in r););return o<0?null:(o===3?"ms":o>=0?$c[o]:"")+t},Ia=function(){Qx()&&window.document&&(Zc=window,Zn=Zc.document,sr=Zn.documentElement,gi=Da("div")||{style:{}},Da("div"),jt=vr(jt),nn=jt+"Origin",gi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Uh=!!vr("perspective"),ol=Fe.core.reverting,sl=1)},ia=function s(t){var e=Da("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(sr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),sr.removeChild(e),this.style.cssText=r,o},Kc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Bh=function(t){var e;try{e=t.getBBox()}catch{e=ia.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===ia||(e=ia.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Kc(t,["x","cx","x1"])||0,y:+Kc(t,["y","cy","y1"])||0,width:0,height:0}:e},kh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Bh(t))},$r=function(t,e){if(e){var n=t.style;e in Fn&&e!==nn&&(e=jt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(al,"-$1").toLowerCase())):n.removeAttribute(e)}},Jn=function(t,e,n,i,r,o){var a=new Ee(t._pt,e,n,0,1,o?Fh:zh);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Qc={deg:1,rad:1,turn:1},dv={grid:1,flex:1},ei=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=gi.style,c=tv.test(e),l=t.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;return i===o||!r||Qc[i]||Qc[o]?r:(o!=="px"&&!f&&(r=s(t,e,n,"px")),_=t.getCTM&&kh(t),(m||o==="%")&&(Fn[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[c?"width":"height"]:t[u],te(m?r/g*h:r/100*g)):(a[c?"width":"height"]=h+(f?o:i),d=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,_&&(d=(t.ownerSVGElement||{}).parentNode),(!d||d===Zn||!d.appendChild)&&(d=Zn.body),p=d._gsap,p&&m&&p.width&&c&&p.time===De.time&&!p.uncache?te(r/p.width*h):((m||o==="%")&&!dv[fn(d,"display")]&&(a.position=fn(t,"position")),d===t&&(a.position="static"),d.appendChild(gi),g=gi[u],d.removeChild(gi),a.position="absolute",c&&m&&(p=yi(d),p.time=De.time,p.width=d[u]),te(f?g*r/h:g&&r?h/g*r:0))))},En=function(t,e,n,i){var r;return sl||Ia(),e in Ln&&e!=="transform"&&(e=Ln[e],~e.indexOf(",")&&(e=e.split(",")[0])),Fn[e]&&e!=="transform"?(r=Qr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Zs(fn(t,nn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ys[e]&&Ys[e](t,e,n)||fn(t,e)||rh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ei(t,e,r,n)+n:r},pv=function(t,e,n,i){if(!n||n==="none"){var r=vr(e,t,1),o=r&&fn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=fn(t,"borderTopColor"))}var a=new Ee(this._pt,t.style,e,0,1,Rh),c=0,l=0,u,h,f,m,g,d,p,_,y,S,v,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=fn(t,e)||i,t.style[e]=n),u=[n,i],Mh(u),n=u[0],i=u[1],f=n.match(Ki)||[],M=i.match(Ki)||[],M.length){for(;h=Ki.exec(i);)p=h[0],y=i.substring(c,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(d=f[l++]||"")&&(m=parseFloat(d)||0,v=d.substr((m+"").length),p.charAt(1)==="="&&(p=rr(m,p)+v),_=parseFloat(p),S=p.substr((_+"").length),c=Ki.lastIndex-S.length,S||(S=S||Ie.units[e]||v,c===i.length&&(i+=S,a.e+=S)),v!==S&&(m=ei(t,e,d,S)||0),a._pt={_next:a._pt,p:y||l===1?y:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?Fh:zh;return Ku.test(i)&&(a.e=0),this._pt=a,a},tu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=tu[n]||n,e[1]=tu[i]||i,e.join(" ")},gv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],Fn[a]&&(c=1,a=a==="transformOrigin"?nn:jt),$r(n,a);c&&($r(n,jt),o&&(o.svg&&n.removeAttribute("transform"),Qr(n,1),o.uncache=1,Oh(i)))}},Ys={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Ee(t._pt,e,n,0,0,gv);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Kr=[1,0,0,1,0,0],Gh={},Vh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},eu=function(t){var e=fn(t,jt);return Vh(e)?Kr:e.substr(7).match($u).map(te)},ll=function(t,e){var n=t._gsap||yi(t),i=t.style,r=eu(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Kr:r):(r===Kr&&!t.offsetParent&&t!==sr&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(l=1,a=t.nextElementSibling,sr.appendChild(t)),r=eu(t),c?i.display=c:$r(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):sr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},za=function(t,e,n,i,r,o){var a=t._gsap,c=r||ll(t,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,m=c[0],g=c[1],d=c[2],p=c[3],_=c[4],y=c[5],S=e.split(" "),v=parseFloat(S[0])||0,M=parseFloat(S[1])||0,E,C,x,b;n?c!==Kr&&(C=m*p-g*d)&&(x=v*(p/C)+M*(-d/C)+(d*y-p*_)/C,b=v*(-g/C)+M*(m/C)-(m*y-g*_)/C,v=x,M=b):(E=Bh(t),v=E.x+(~S[0].indexOf("%")?v/100*E.width:v),M=E.y+(~(S[1]||S[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&a.smooth?(_=v-l,y=M-u,a.xOffset=h+(_*m+y*d)-_,a.yOffset=f+(_*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=M,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[nn]="0px 0px",o&&(Jn(o,a,"xOrigin",l,v),Jn(o,a,"yOrigin",u,M),Jn(o,a,"xOffset",h,a.xOffset),Jn(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+M)},Qr=function(t,e){var n=t._gsap||new Th(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=fn(t,nn)||"0",u,h,f,m,g,d,p,_,y,S,v,M,E,C,x,b,L,R,$,K,D,V,z,H,q,O,U,Q,j,it,ct,xt;return u=h=f=d=p=_=y=S=v=0,m=g=1,n.svg=!!(t.getCTM&&kh(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[jt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+c[jt]),i.scale=i.rotate=i.translate="none"),C=ll(t,n.svg),n.svg&&(n.uncache?(q=t.getBBox(),l=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",H=""):H=!e&&t.getAttribute("data-svg-origin"),za(t,H||l,!!H||n.originIsAbsolute,n.smooth!==!1,C)),M=n.xOrigin||0,E=n.yOrigin||0,C!==Kr&&(R=C[0],$=C[1],K=C[2],D=C[3],u=V=C[4],h=z=C[5],C.length===6?(m=Math.sqrt(R*R+$*$),g=Math.sqrt(D*D+K*K),d=R||$?Zi($,R)*hi:0,y=K||D?Zi(K,D)*hi+d:0,y&&(g*=Math.abs(Math.cos(y*or))),n.svg&&(u-=M-(M*R+E*K),h-=E-(M*$+E*D))):(xt=C[6],it=C[7],U=C[8],Q=C[9],j=C[10],ct=C[11],u=C[12],h=C[13],f=C[14],x=Zi(xt,j),p=x*hi,x&&(b=Math.cos(-x),L=Math.sin(-x),H=V*b+U*L,q=z*b+Q*L,O=xt*b+j*L,U=V*-L+U*b,Q=z*-L+Q*b,j=xt*-L+j*b,ct=it*-L+ct*b,V=H,z=q,xt=O),x=Zi(-K,j),_=x*hi,x&&(b=Math.cos(-x),L=Math.sin(-x),H=R*b-U*L,q=$*b-Q*L,O=K*b-j*L,ct=D*L+ct*b,R=H,$=q,K=O),x=Zi($,R),d=x*hi,x&&(b=Math.cos(x),L=Math.sin(x),H=R*b+$*L,q=V*b+z*L,$=$*b-R*L,z=z*b-V*L,R=H,V=q),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=te(Math.sqrt(R*R+$*$+K*K)),g=te(Math.sqrt(z*z+xt*xt)),x=Zi(V,z),y=Math.abs(x)>2e-4?x*hi:0,v=ct?1/(ct<0?-ct:ct):0),n.svg&&(H=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Vh(fn(t,jt)),H&&t.setAttribute("transform",H))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(m*=-1,y+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=te(m),n.scaleY=te(g),n.rotation=te(d)+a,n.rotationX=te(p)+a,n.rotationY=te(_)+a,n.skewX=y+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[nn]=Zs(l)),n.xOffset=n.yOffset=0,n.force3D=Ie.force3D,n.renderTransform=n.svg?xv:Uh?Hh:_v,n.uncache=0,n},Zs=function(t){return(t=t.split(" "))[0]+" "+t[1]},ra=function(t,e,n){var i=me(e);return te(parseFloat(e)+parseFloat(ei(t,"x",n+"px",i)))+i},_v=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Hh(t,e)},ai="0deg",Rr="0px",li=") ",Hh=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,y=n.target,S=n.zOrigin,v="",M=_==="auto"&&t&&t!==1||_===!0;if(S&&(h!==ai||u!==ai)){var E=parseFloat(u)*or,C=Math.sin(E),x=Math.cos(E),b;E=parseFloat(h)*or,b=Math.cos(E),o=ra(y,o,C*b*-S),a=ra(y,a,-Math.sin(E)*-S),c=ra(y,c,x*b*-S+S)}p!==Rr&&(v+="perspective("+p+li),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(M||o!==Rr||a!==Rr||c!==Rr)&&(v+=c!==Rr||M?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+li),l!==ai&&(v+="rotate("+l+li),u!==ai&&(v+="rotateY("+u+li),h!==ai&&(v+="rotateX("+h+li),(f!==ai||m!==ai)&&(v+="skew("+f+", "+m+li),(g!==1||d!==1)&&(v+="scale("+g+", "+d+li),y.style[jt]=v||"translate(0, 0)"},xv=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,y=n.forceCSS,S=parseFloat(o),v=parseFloat(a),M,E,C,x,b;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=or,l*=or,M=Math.cos(c)*h,E=Math.sin(c)*h,C=Math.sin(c-l)*-f,x=Math.cos(c-l)*f,l&&(u*=or,b=Math.tan(l-u),b=Math.sqrt(1+b*b),C*=b,x*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),M*=b,E*=b)),M=te(M),E=te(E),C=te(C),x=te(x)):(M=h,x=f,E=C=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=ei(m,"x",o,"px"),v=ei(m,"y",a,"px")),(g||d||p||_)&&(S=te(S+g-(g*M+d*C)+p),v=te(v+d-(g*E+d*x)+_)),(i||r)&&(b=m.getBBox(),S=te(S+i/100*b.width),v=te(v+r/100*b.height)),b="matrix("+M+","+E+","+C+","+x+","+S+","+v+")",m.setAttribute("transform",b),y&&(m.style[jt]=b)},vv=function(t,e,n,i,r){var o=360,a=he(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?hi:1),l=c-i,u=i+l+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*jc)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*jc)%o-~~(l/o)*o)),t._pt=f=new Ee(t._pt,e,n,i,l,nv),f.e=u,f.u="deg",t._props.push(n),f},nu=function(t,e){for(var n in e)t[n]=e[n];return t},yv=function(t,e,n){var i=nu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,f,m,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[jt]=e,a=Qr(n,1),$r(n,jt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[jt],o[jt]=e,a=Qr(n,1),o[jt]=l);for(c in Fn)l=i[c],u=a[c],l!==u&&r.indexOf(c)<0&&(m=me(l),g=me(u),h=m!==g?ei(n,c,l,g):parseFloat(l),f=parseFloat(u),t._pt=new Ee(t._pt,a,c,h,f-h,Ra),t._pt.u=g||0,t._props.push(c));nu(a,i)};Te("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Ys[t>1?"border"+s:s]=function(a,c,l,u,h){var f,m;if(arguments.length<4)return f=o.map(function(g){return En(a,g,l)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},o.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),a.init(c,m,h)}});var Wh={name:"css",register:Ia,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,u,h,f,m,g,d,p,_,y,S,v,M,E,C,x;sl||Ia(),this.styles=this.styles||Nh(t),x=this.styles.props,this.tween=n;for(d in e)if(d!=="autoRound"&&(u=e[d],!(Re[d]&&Eh(d,e,n,i,t,r)))){if(m=typeof u,g=Ys[d],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Jr(u)),g)g(this,t,d,u,n)&&(C=1);else if(d.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(d)+"").trim(),u+="",Kn.lastIndex=0,Kn.test(l)||(p=me(l),_=me(u)),_?p!==_&&(l=ei(t,d,l,_)+_):p&&(u+=p),this.add(a,"setProperty",l,u,i,r,0,0,d),o.push(d),x.push(d,a[d]);else if(m!=="undefined"){if(c&&d in c?(l=typeof c[d]=="function"?c[d].call(n,i,t,r):c[d],he(l)&&~l.indexOf("random(")&&(l=Jr(l)),me(l+"")||(l+=Ie.units[d]||me(En(t,d))||""),(l+"").charAt(1)==="="&&(l=En(t,d))):l=En(t,d),f=parseFloat(l),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),d in Ln&&(d==="autoAlpha"&&(f===1&&En(t,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",a.visibility),Jn(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Ln[d],~d.indexOf(",")&&(d=d.split(",")[0]))),S=d in Fn,S){if(this.styles.save(d),v||(M=t._gsap,M.renderTransform&&!e.parseTransform||Qr(t,e.parseTransform),E=e.smoothOrigin!==!1&&M.smooth,v=this._pt=new Ee(this._pt,a,jt,0,1,M.renderTransform,M,0,-1),v.dep=1),d==="scale")this._pt=new Ee(this._pt,M,"scaleY",M.scaleY,(y?rr(M.scaleY,y+h):h)-M.scaleY||0,Ra),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(nn,a[nn]),u=mv(u),M.svg?za(t,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==M.zOrigin&&Jn(this,M,"zOrigin",M.zOrigin,_),Jn(this,a,d,Zs(l),Zs(u)));continue}else if(d==="svgOrigin"){za(t,u,1,E,0,this);continue}else if(d in Gh){vv(this,M,d,f,y?rr(f,y+u):u);continue}else if(d==="smoothOrigin"){Jn(this,M,"smooth",M.smooth,u);continue}else if(d==="force3D"){M[d]=u;continue}else if(d==="transform"){yv(this,u,t);continue}}else d in a||(d=vr(d)||d);if(S||(h||h===0)&&(f||f===0)&&!ev.test(u)&&d in a)p=(l+"").substr((f+"").length),h||(h=0),_=me(u)||(d in Ie.units?Ie.units[d]:p),p!==_&&(f=ei(t,d,l,_)),this._pt=new Ee(this._pt,S?M:a,d,f,(y?rr(f,y+h):h)-f,!S&&(_==="px"||d==="zIndex")&&e.autoRound!==!1?rv:Ra),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=iv);else if(d in a)pv.call(this,t,d,l,y?y+u:u);else if(d in t)this.add(t,d,l||t[d],y?y+u:u,i,r);else{ja(d,u);continue}S||x.push(d,a[d]),o.push(d)}}C&&Dh(this)},render:function(t,e){if(e.tween._time||!ol())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:En,aliases:Ln,getSetter:function(t,e,n){var i=Ln[e];return i&&i.indexOf(",")<0&&(e=i),e in Fn&&e!==nn&&(t._gsap.x||En(t,"x"))?n&&Jc===n?e==="scale"?lv:av:(Jc=n||{})&&(e==="scale"?cv:uv):t.style&&!Za(t.style[e])?sv:~e.indexOf("-")?ov:il(t,e)},core:{_removeProperty:$r,_getMatrix:ll}};Fe.utils.checkPrefix=vr;Fe.core.getStyleSaver=Nh;(function(s,t,e,n){var i=Te(s+","+t+","+e,function(r){Fn[r]=1});Te(t,function(r){Ie.units[r]="deg",Gh[r]=1}),Ln[i[13]]=s+","+t,Te(n,function(r){var o=r.split(":");Ln[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Te("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ie.units[s]="px"});Fe.registerPlugin(Wh);var qh=Fe.registerPlugin(Wh)||Fe;qh.core.Tween;var cl=(s=>(s.load="FontEvents.load",s))(cl||{});class Mv extends ku{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new k0(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){let c;try{c=JSON.parse(a)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2))}const l=r.parse(c);e&&e(l)},n,i)}parse(t){return new Sv(t)}}class Sv{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=wv(t,e,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function wv(s,t,e){const n=Array.from(s),i=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const u=n[l];if(u===`
`)a=0,c-=r;else{const h=bv(u,i,a,c,e);a+=h.offsetX,o.push(h.path)}}return o}function bv(s,t,e,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new V0;let a,c,l,u,h,f,m,g;if(r.o){const d=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,_=d.length;p<_;)switch(d[p++]){case"m":a=d[p++]*t+e,c=d[p++]*t+n,o.moveTo(a,c);break;case"l":a=d[p++]*t+e,c=d[p++]*t+n,o.lineTo(a,c);break;case"q":l=d[p++]*t+e,u=d[p++]*t+n,h=d[p++]*t+e,f=d[p++]*t+n,o.quadraticCurveTo(h,f,l,u);break;case"b":l=d[p++]*t+e,u=d[p++]*t+n,h=d[p++]*t+e,f=d[p++]*t+n,m=d[p++]*t+e,g=d[p++]*t+n,o.bezierCurveTo(h,f,m,g,l,u);break}}return{offsetX:r.ha*t,path:o}}const Xh={font:null},Tv=new Mv;Tv.load("/fonts/gochi_hand.json",s=>{Xh.font=s,window.dispatchEvent(new CustomEvent(cl.load))});const iu=Xh;var zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ev="Expected a function",Yh="__lodash_hash_undefined__",Av="[object Function]",Cv="[object GeneratorFunction]",Pv=/[\\^$.*+?()[\]{}|]/g,Lv=/^\[object .+?Constructor\]$/,Rv=typeof zs=="object"&&zs&&zs.Object===Object&&zs,Dv=typeof self=="object"&&self&&self.Object===Object&&self,Zh=Rv||Dv||Function("return this")();function Iv(s,t){return s==null?void 0:s[t]}function zv(s){var t=!1;if(s!=null&&typeof s.toString!="function")try{t=!!(s+"")}catch{}return t}var Fv=Array.prototype,Ov=Function.prototype,Jh=Object.prototype,sa=Zh["__core-js_shared__"],ru=function(){var s=/[^.]+$/.exec(sa&&sa.keys&&sa.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),jh=Ov.toString,ul=Jh.hasOwnProperty,Nv=Jh.toString,Uv=RegExp("^"+jh.call(ul).replace(Pv,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Bv=Fv.splice,kv=$h(Zh,"Map"),ts=$h(Object,"create");function Ai(s){var t=-1,e=s?s.length:0;for(this.clear();++t<e;){var n=s[t];this.set(n[0],n[1])}}function Gv(){this.__data__=ts?ts(null):{}}function Vv(s){return this.has(s)&&delete this.__data__[s]}function Hv(s){var t=this.__data__;if(ts){var e=t[s];return e===Yh?void 0:e}return ul.call(t,s)?t[s]:void 0}function Wv(s){var t=this.__data__;return ts?t[s]!==void 0:ul.call(t,s)}function qv(s,t){var e=this.__data__;return e[s]=ts&&t===void 0?Yh:t,this}Ai.prototype.clear=Gv;Ai.prototype.delete=Vv;Ai.prototype.get=Hv;Ai.prototype.has=Wv;Ai.prototype.set=qv;function br(s){var t=-1,e=s?s.length:0;for(this.clear();++t<e;){var n=s[t];this.set(n[0],n[1])}}function Xv(){this.__data__=[]}function Yv(s){var t=this.__data__,e=ao(t,s);if(e<0)return!1;var n=t.length-1;return e==n?t.pop():Bv.call(t,e,1),!0}function Zv(s){var t=this.__data__,e=ao(t,s);return e<0?void 0:t[e][1]}function Jv(s){return ao(this.__data__,s)>-1}function jv(s,t){var e=this.__data__,n=ao(e,s);return n<0?e.push([s,t]):e[n][1]=t,this}br.prototype.clear=Xv;br.prototype.delete=Yv;br.prototype.get=Zv;br.prototype.has=Jv;br.prototype.set=jv;function Pi(s){var t=-1,e=s?s.length:0;for(this.clear();++t<e;){var n=s[t];this.set(n[0],n[1])}}function $v(){this.__data__={hash:new Ai,map:new(kv||br),string:new Ai}}function Kv(s){return lo(this,s).delete(s)}function Qv(s){return lo(this,s).get(s)}function ty(s){return lo(this,s).has(s)}function ey(s,t){return lo(this,s).set(s,t),this}Pi.prototype.clear=$v;Pi.prototype.delete=Kv;Pi.prototype.get=Qv;Pi.prototype.has=ty;Pi.prototype.set=ey;function ao(s,t){for(var e=s.length;e--;)if(oy(s[e][0],t))return e;return-1}function ny(s){if(!Kh(s)||ry(s))return!1;var t=ay(s)||zv(s)?Uv:Lv;return t.test(sy(s))}function lo(s,t){var e=s.__data__;return iy(t)?e[typeof t=="string"?"string":"hash"]:e.map}function $h(s,t){var e=Iv(s,t);return ny(e)?e:void 0}function iy(s){var t=typeof s;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?s!=="__proto__":s===null}function ry(s){return!!ru&&ru in s}function sy(s){if(s!=null){try{return jh.call(s)}catch{}try{return s+""}catch{}}return""}function hl(s,t){if(typeof s!="function"||t&&typeof t!="function")throw new TypeError(Ev);var e=function(){var n=arguments,i=t?t.apply(this,n):n[0],r=e.cache;if(r.has(i))return r.get(i);var o=s.apply(this,n);return e.cache=r.set(i,o),o};return e.cache=new(hl.Cache||Pi),e}hl.Cache=Pi;function oy(s,t){return s===t||s!==s&&t!==t}function ay(s){var t=Kh(s)?Nv.call(s):"";return t==Av||t==Cv}function Kh(s){var t=typeof s;return!!s&&(t=="object"||t=="function")}var ly=hl;const qn=class{constructor(t,e,n,i=0){on(this,"isTweening",!1);on(this,"char","");on(this,"material");on(this,"particlesGeometry");on(this,"tweenObj",{progress:0});on(this,"offsetX",0);on(this,"particles");this.char=t,this.material=e,this.offsetX=i,this.particlesGeometry=new pn;const r=new Float32Array(qn.totalVertices*4);for(let o=0;o<qn.totalVertices*4;o+=4)r[o]=Math.random(),r[o+1]=Math.random(),r[o+2]=Math.random(),r[o+3]=Math.random();this.particlesGeometry.setAttribute("aRandom",new we(r,4)),this.update(t,!1),this.particles=new r0(this.particlesGeometry,this.material),this.particles.matrixAutoUpdate=!1,n.add(this.particles)}get position(){return this.particles.position}updateMatrix(){this.particles.updateMatrix()}getChar(){return this.char}static getTargetPositions(t,e){const n=new Float32Array(qn.totalVertices*3);for(let i=0;i<n.length;i+=3){const r=t[i/3];n[i]=r.x+e,n[i+1]=r.y,n[i+2]=r.z}return n}update(t="",e){if(this.char=t,this.isTweening)return;const n=qn.getRandomPointsWithBoundingBox(t);if(!n)return;const{points:i,boundingBox:r}=n,o=qn.getTargetPositions(i,e?this.offsetX/2:0),a=!this.particlesGeometry.getAttribute("position");if(r&&(this.material.uniforms.uBBoxMax.value=new ot(r.max.x,r.max.y),this.material.uniforms.uBBoxMin.value=new ot(r.min.x,r.min.y)),a?(this.particlesGeometry.setAttribute("position",new we(o,3)),this.material.uniforms.uOpacity.value=t?1:0):(this.particlesGeometry.setAttribute("aTargetPosition",new we(o,3)),this.material.uniforms.uTargetOpacity.value=t!=="\xA7"?1:0),!a){this.isTweening=!0;const c=this.material.defines.uTweenDuration;qh.to(this.tweenObj,{progress:c,duration:c,overwrite:"auto",onUpdate:()=>{this.material.uniforms.uTweenProgress.value=this.tweenObj.progress},onComplete:()=>{this.tweenObj.progress=0,this.material.uniforms.uTweenProgress.value=0,this.material.uniforms.uNoiseRotation.value=(this.material.uniforms.uNoiseRotation.value+90)%360,this.particlesGeometry.setAttribute("position",new we(o,3)),this.material.uniforms.uOpacity.value=t==="\xA7"?0:this.material.uniforms.uTargetOpacity.value,this.isTweening=!1,this.char!==t&&this.update(this.char,e)}})}}};let Pn=qn;on(Pn,"totalVertices",Math.pow(2,12)),on(Pn,"getRandomPointsWithBoundingBox",ly(t=>{if(!iu.font)return;const e=new ax(t||"\u2022",{font:iu.font,size:.4,height:0,curveSegments:1,bevelEnabled:!1});e.center(),t||e.rotateZ(Math.random());const n=ce.randomPointsInBufferGeometry(e,qn.totalVertices),i=e.boundingBox?{...e.boundingBox}:null;return e.dispose(),{points:n,boundingBox:i}}));let oa="";const An=[];let _i=[{word:"I'm",timeout:600},{word:"BORiS",timeout:1500},{word:"I'm",timeout:600},{word:"a",timeout:500},{word:"front",timeout:600},{word:"end",timeout:600},{word:"Dev",timeout:1500},{word:"Nice",timeout:600},{word:"to",timeout:400},{word:"meet",timeout:700},{word:"You",timeout:1500},{word:":-)",timeout:3100},{word:"Hola!",timeout:1500},{word:"I'm",timeout:600},{word:"BoRiS",timeout:1500},{word:"I",timeout:600},{word:"code",timeout:700},{word:"fOr",timeout:500},{word:"the",timeout:500},{word:"web",timeout:1500},{word:"B-)",timeout:3100},{word:"Salut",timeout:1500},{word:"I'm",timeout:600},{word:"B0RiS",timeout:1500},{word:"Again",timeout:1500},{word:"haha!",timeout:1200},{word:"I",timeout:600},{word:"like",timeout:600},{word:"to",timeout:400},{word:"hack",timeout:800},{word:"stuff",timeout:2200},{word:"and",timeout:800},{word:"I",timeout:400},{word:"like",timeout:600},{word:"CATS!",timeout:2200},{word:"and",timeout:600},{word:"Dogs!",timeout:2200},{word:"<3",timeout:2e3},{word:"but",timeout:1800},{word:"I",timeout:400},{word:"don't",timeout:500},{word:"have",timeout:800},{word:"any",timeout:1500},{word:":-(",timeout:3100},{word:"ALOHA",timeout:1500},{word:"I'm",timeout:600},{word:"BORiS",timeout:1500},{word:"but",timeout:500},{word:"you",timeout:600},{word:"know",timeout:700},{word:"that",timeout:800},{word:"by",timeout:600},{word:"now",timeout:1800},{word:"BOn",timeout:800},{word:"jour",timeout:1200},{word:"Nihao",timeout:1e3},{word:"Hoi",timeout:700},{word:"Ciao",timeout:800},{word:"Ol\xE1",timeout:700},{word:"Hai",timeout:800},{word:"Selam",timeout:800},{word:"Hej",timeout:700},{word:":-)",timeout:1500},{word:"LoL",timeout:3e3},{word:"Hi",timeout:1500}];const cy=(s,t,e=" ")=>s.padStart((s.length+t)/2,e).padEnd(t,e),Fa=_i.map(s=>s.word.length).reduce((s,t)=>Math.max(s,t));_i=_i.map(s=>({word:cy(s.word,Fa,"\xA7").replaceAll(/\s/g,"\xA7"),timeout:s.timeout}));function su(){const{width:s,height:t}=Ae;for(let e=0;e<5;e++)An[e].position.y=Math.max(t/s-1.5,.066),An[e].updateMatrix()}function uy(s,t){return s.replaceAll(/§/g,"").length!==t.replaceAll(/§/g,"").length}function Qh(s=0){const t=_i[s].word;if(t!==oa){const e=uy(t,oa);oa=_i[s].word,An.forEach((n,i)=>{(e||(t[i]||"")!==n.getChar())&&setTimeout(()=>{n.update(t[i],t.replaceAll(/§/g,"").length%2===0)},i*50)})}setTimeout(()=>{Qh(s>=_i.length-1?0:s+1)},_i[s].timeout)}window.addEventListener(cl.load,()=>{An.push(new Pn("H",Lr(),di,.25)),An.push(new Pn("e",Lr(),di,.25)),An.push(new Pn("l",Lr(),di,.25)),An.push(new Pn("l",Lr(),di,.25)),An.push(new Pn("o",Lr(),di,.25));for(let t=0;t<5;t++)An[t].position.x=((Fa+1)/2-Fa+t)*.25+.02;setTimeout(()=>{Qh()},1500),su(),window.addEventListener(wr.resize,su),document.body.classList.add("ready")});export{zs as c};
