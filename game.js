(()=>{var zu=0,ec=1,ku=2;var Nh=1,yl=2,kn=3,oi=0,rn=1,ye=2;var ii=0,si=1,as=2,nc=3,ic=4,Hu=5,Si=100,Gu=101,Vu=102,sc=103,rc=104,Wu=200,Xu=201,qu=202,Yu=203,Ro=204,Co=205,$u=206,Zu=207,Ju=208,Ku=209,ju=210,Qu=211,tf=212,ef=213,nf=214,sf=0,rf=1,af=2,Cr=3,of=4,lf=5,_l=6,cf=7,Bh=0,hf=1,uf=2,ri=0,ff=1,df=2,pf=3,mf=4,gf=5,xf=6;var Oh=300,os=301,ls=302,Po=303,Lo=304,ca=306,li=1e3,wn=1001,Io=1002,Fe=1003,ac=1004;var Wa=1005;var gn=1006,yf=1007;var Bs=1008;var ai=1009,_f=1010,vf=1011,vl=1012,Fh=1013,ei=1014,ni=1015,Os=1016,zh=1017,kh=1018,Ti=1020,bf=1021,Tn=1023,Mf=1024,Ef=1025,Ai=1026,cs=1027,Sf=1028,Hh=1029,wf=1030,Gh=1031,Vh=1033,Xa=33776,qa=33777,Ya=33778,$a=33779,oc=35840,lc=35841,cc=35842,hc=35843,Wh=36196,uc=37492,fc=37496,dc=37808,pc=37809,mc=37810,gc=37811,xc=37812,yc=37813,_c=37814,vc=37815,bc=37816,Mc=37817,Ec=37818,Sc=37819,wc=37820,Tc=37821,Za=36492,Ac=36494,Rc=36495,Tf=36283,Cc=36284,Pc=36285,Lc=36286;var Pr=2300,Lr=2301,Ja=2302,Ic=2400,Dc=2401,Uc=2402;var Xh=3e3,Ri=3001,Af=3200,Rf=3201,qh=0,Cf=1,xn="",Ie="srgb",Gn="srgb-linear",bl="display-p3",ha="display-p3-linear",Ir="linear",xe="srgb",Dr="rec709",Ur="p3";var Fi=7680,ua=7681;var Yh=517;var Nr=519,Pf=512,Lf=513,If=514,$h=515,Df=516,Uf=517,Nf=518,Bf=519,Nc=35044,ys=35048;var Bc="300 es",Do=1035,Hn=2e3,Br=2001,ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ka=Math.PI/180,Uo=180/Math.PI;function Ys(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[r&255]+We[r>>8&255]+We[r>>16&255]+We[r>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function ze(r,t,e){return Math.max(t,Math.min(e,r))}function Of(r,t){return(r%t+t)%t}function ja(r,t,e){return(1-e)*r+e*t}function Oc(r){return(r&r-1)===0&&r!==0}function No(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ss(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function nn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var mt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class r{constructor(t,e,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],_=i[1],v=i[4],M=i[7],w=i[2],S=i[5],E=i[8];return s[0]=a*x+o*_+c*w,s[3]=a*g+o*v+c*S,s[6]=a*m+o*M+c*E,s[1]=l*x+h*_+u*w,s[4]=l*g+h*v+u*S,s[7]=l*m+h*M+u*E,s[2]=f*x+d*_+p*w,s[5]=f*g+d*v+p*S,s[8]=f*m+d*M+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=f*x,t[4]=(h*e-i*c)*x,t[5]=(i*s-o*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qa=new Qt;function Zh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Or(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ff(){let r=Or("canvas");return r.style.display="block",r}var Fc={};function Is(r){r in Fc||(Fc[r]=!0,console.warn(r))}var zc=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kc=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),er={[Gn]:{transfer:Ir,primaries:Dr,toReference:r=>r,fromReference:r=>r},[Ie]:{transfer:xe,primaries:Dr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ha]:{transfer:Ir,primaries:Ur,toReference:r=>r.applyMatrix3(kc),fromReference:r=>r.applyMatrix3(zc)},[bl]:{transfer:xe,primaries:Ur,toReference:r=>r.convertSRGBToLinear().applyMatrix3(kc),fromReference:r=>r.applyMatrix3(zc).convertLinearToSRGB()}},zf=new Set([Gn,ha]),he={enabled:!0,_workingColorSpace:Gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!zf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let n=er[t].toReference,i=er[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return er[r].primaries},getTransfer:function(r){return r===xn?Ir:er[r].transfer}};function ss(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var zi,Fr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=Or("canvas")),zi.width=t.width,zi.height=t.height;let n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ss(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ss(e[n]/255)*255):e[n]=ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kf=0,zr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Ys(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(eo(i[a].image)):s.push(eo(i[a]))}else s=eo(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function eo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Fr.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hf=0,yn=class r extends ci{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=wn,i=wn,s=gn,a=Bs,o=Tn,c=ai,l=r.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Ys(),this.name="",this.source=new zr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ri?Ie:xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case li:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case li:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ie?Ri:Xh}set encoding(t){Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ri?Ie:xn}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Oh;yn.DEFAULT_ANISOTROPY=1;var ve=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,M=(d+1)/2,w=(m+1)/2,S=(h+f)/4,E=(u+x)/4,R=(p+g)/4;return v>M&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=S/n,s=E/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=S/i,s=R/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=E/s,i=R/s),this.set(n,i,s,e),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bo=class extends ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ri?Ie:xn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new yn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new zr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends Bo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},kr=class extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oo=class extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],d=s[a+1],p=s[a+2],x=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==p){let g=1-o,m=c*f+l*d+h*p+u*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let w=Math.sqrt(v),S=Math.atan2(w,m*_);g=Math.sin(g*S)/w,o=Math.sin(o*S)/w}let M=o*_;if(c=c*g+f*M,l=l*g+d*M,h=h*g+p*M,u=u*g+x*M,g===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],p=s[a+3];return t[e]=o*p+h*u+c*d-l*f,t[e+1]=c*p+h*f+l*u-o*d,t[e+2]=l*p+h*d+o*f-c*u,t[e+3]=h*p-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),d=c(i/2),p=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},no=new D,Hc=new Ln,Wn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),ir.subVectors(this.max,ws),ki.subVectors(t.a,ws),Hi.subVectors(t.b,ws),Gi.subVectors(t.c,ws),Jn.subVectors(Hi,ki),Kn.subVectors(Gi,Hi),_i.subVectors(ki,Gi);let e=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-_i.z,_i.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,_i.z,0,-_i.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-_i.y,_i.x,0];return!io(e,ki,Hi,Gi,ir)||(e=[1,0,0,0,1,0,0,0,1],!io(e,ki,Hi,Gi,ir))?!1:(sr.crossVectors(Jn,Kn),e=[sr.x,sr.y,sr.z],io(e,ki,Hi,Gi,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Nn=[new D,new D,new D,new D,new D,new D,new D,new D],Mn=new D,nr=new Wn,ki=new D,Hi=new D,Gi=new D,Jn=new D,Kn=new D,_i=new D,ws=new D,ir=new D,sr=new D,vi=new D;function io(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){vi.fromArray(r,s);let o=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),c=t.dot(vi),l=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Gf=new Wn,Ts=new D,so=new D,Xn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);let e=Ts.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ts,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(so)),this.expandByPoint(Ts.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bn=new D,ro=new D,rr=new D,jn=new D,ao=new D,ar=new D,oo=new D,Fs=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ro.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(ro);let s=t.distanceTo(e)*.5,a=-this.direction.dot(rr),o=jn.dot(this.direction),c=-jn.dot(rr),l=jn.lengthSq(),h=Math.abs(1-a*a),u,f,d,p;if(h>0)if(u=a*c-o,f=a*o-c,p=s*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ro).addScaledVector(rr,f),d}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);let n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,i,s){ao.subVectors(e,t),ar.subVectors(n,t),oo.crossVectors(ao,ar);let a=this.direction.dot(oo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,t);let c=o*this.direction.dot(ar.crossVectors(jn,ar));if(c<0)return null;let l=o*this.direction.dot(ao.cross(jn));if(l<0||c+l>a)return null;let h=-o*jn.dot(oo);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class r{constructor(t,e,n,i,s,a,o,c,l,h,u,f,d,p,x,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,h,u,f,d,p,x,g)}set(t,e,n,i,s,a,o,c,l,h,u,f,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Vi.setFromMatrixColumn(t,0).length(),s=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=a*h,d=a*u,p=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+p*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=p+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,p=l*h,x=l*u;e[0]=f+x*o,e[4]=p*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,p=l*h,x=l*u;e[0]=f-x*o,e[4]=-a*u,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,d=a*u,p=o*h,x=o*u;e[0]=c*h,e[4]=p*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-p,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,p=o*c,x=o*l;e[0]=c*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*c,d=a*l,p=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vf,t,Wf)}lookAt(t,e,n){let i=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Qn.crossVectors(n,ln),Qn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Qn.crossVectors(n,ln)),Qn.normalize(),or.crossVectors(ln,Qn),i[0]=Qn.x,i[4]=or.x,i[8]=ln.x,i[1]=Qn.y,i[5]=or.y,i[9]=ln.y,i[2]=Qn.z,i[6]=or.z,i[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],v=n[7],M=n[11],w=n[15],S=i[0],E=i[4],R=i[8],y=i[12],b=i[1],T=i[5],L=i[9],B=i[13],I=i[2],N=i[6],F=i[10],O=i[14],k=i[3],X=i[7],$=i[11],et=i[15];return s[0]=a*S+o*b+c*I+l*k,s[4]=a*E+o*T+c*N+l*X,s[8]=a*R+o*L+c*F+l*$,s[12]=a*y+o*B+c*O+l*et,s[1]=h*S+u*b+f*I+d*k,s[5]=h*E+u*T+f*N+d*X,s[9]=h*R+u*L+f*F+d*$,s[13]=h*y+u*B+f*O+d*et,s[2]=p*S+x*b+g*I+m*k,s[6]=p*E+x*T+g*N+m*X,s[10]=p*R+x*L+g*F+m*$,s[14]=p*y+x*B+g*O+m*et,s[3]=_*S+v*b+M*I+w*k,s[7]=_*E+v*T+M*N+w*X,s[11]=_*R+v*L+M*F+w*$,s[15]=_*y+v*B+M*O+w*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+s*c*u-i*l*u-s*o*f+n*l*f+i*o*d-n*c*d)+x*(+e*c*d-e*l*f+s*a*f-i*a*d+i*l*h-s*c*h)+g*(+e*l*u-e*o*d-s*a*u+n*a*d+s*o*h-n*l*h)+m*(-i*o*h-e*c*u+e*o*f+i*a*u-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],_=u*g*l-x*f*l+x*c*d-o*g*d-u*c*m+o*f*m,v=p*f*l-h*g*l-p*c*d+a*g*d+h*c*m-a*f*m,M=h*x*l-p*u*l+p*o*d-a*x*d-h*o*m+a*u*m,w=p*u*c-h*x*c-p*o*f+a*x*f+h*o*g-a*u*g,S=e*_+n*v+i*M+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=_*E,t[1]=(x*f*s-u*g*s-x*i*d+n*g*d+u*i*m-n*f*m)*E,t[2]=(o*g*s-x*c*s+x*i*l-n*g*l-o*i*m+n*c*m)*E,t[3]=(u*c*s-o*f*s-u*i*l+n*f*l+o*i*d-n*c*d)*E,t[4]=v*E,t[5]=(h*g*s-p*f*s+p*i*d-e*g*d-h*i*m+e*f*m)*E,t[6]=(p*c*s-a*g*s-p*i*l+e*g*l+a*i*m-e*c*m)*E,t[7]=(a*f*s-h*c*s+h*i*l-e*f*l-a*i*d+e*c*d)*E,t[8]=M*E,t[9]=(p*u*s-h*x*s-p*n*d+e*x*d+h*n*m-e*u*m)*E,t[10]=(a*x*s-p*o*s+p*n*l-e*x*l-a*n*m+e*o*m)*E,t[11]=(h*o*s-a*u*s-h*n*l+e*u*l+a*n*d-e*o*d)*E,t[12]=w*E,t[13]=(h*x*i-p*u*i+p*n*f-e*x*f-h*n*g+e*u*g)*E,t[14]=(p*o*i-a*x*i-p*n*c+e*x*c+a*n*g-e*o*g)*E,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,p=s*u,x=a*h,g=a*u,m=o*u,_=c*l,v=c*h,M=c*u,w=n.x,S=n.y,E=n.z;return i[0]=(1-(x+m))*w,i[1]=(d+M)*w,i[2]=(p-v)*w,i[3]=0,i[4]=(d-M)*S,i[5]=(1-(f+m))*S,i[6]=(g+_)*S,i[7]=0,i[8]=(p+v)*E,i[9]=(g-_)*E,i[10]=(1-(f+x))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Vi.set(i[0],i[1],i[2]).length(),a=Vi.set(i[4],i[5],i[6]).length(),o=Vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],En.copy(this);let l=1/s,h=1/a,u=1/o;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Hn){let c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,p;if(o===Hn)d=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===Br)d=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Hn){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-s),f=(e+t)*l,d=(n+i)*h,p,x;if(o===Hn)p=(a+s)*u,x=-2*u;else if(o===Br)p=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vi=new D,En=new oe,Vf=new D(0,0,0),Wf=new D(1,1,1),Qn=new D,or=new D,ln=new D,Gc=new oe,Vc=new Ln,hs=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hs.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xf=0,Wc=new D,Wi=new Ln,On=new oe,lr=new D,As=new D,qf=new D,Yf=new Ln,Xc=new D(1,0,0),qc=new D(0,1,0),Yc=new D(0,0,1),$f={type:"added"},Zf={type:"removed"},ke=class r extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new D,e=new hs,n=new Ln,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Qt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(Xc,t)}rotateY(t){return this.rotateOnAxis(qc,t)}rotateZ(t){return this.rotateOnAxis(Yc,t)}translateOnAxis(t,e){return Wc.copy(t).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xc,t)}translateY(t){return this.translateOnAxis(qc,t)}translateZ(t){return this.translateOnAxis(Yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(As,lr,this.up):On.lookAt(lr,As,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(On),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent($f)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,qf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ke.DEFAULT_UP=new D(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new D,Fn=new D,lo=new D,zn=new D,Xi=new D,qi=new D,$c=new D,co=new D,ho=new D,uo=new D,cr=!1,es=class r{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Sn.subVectors(t,e),i.cross(Sn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Sn.subVectors(i,e),Fn.subVectors(n,e),lo.subVectors(t,e);let a=Sn.dot(Sn),o=Sn.dot(Fn),c=Sn.dot(lo),l=Fn.dot(Fn),h=Fn.dot(lo),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,p=(a*h-o*c)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(t,e,n,i,s,a,o,c){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),this.getInterpolation(t,e,n,i,s,a,o,c)}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(o,zn.z),c)}static isFrontFacing(t,e,n,i){return Sn.subVectors(n,e),Fn.subVectors(t,e),Sn.cross(Fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Sn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Xi.subVectors(i,n),qi.subVectors(s,n),co.subVectors(t,n);let c=Xi.dot(co),l=qi.dot(co);if(c<=0&&l<=0)return e.copy(n);ho.subVectors(t,i);let h=Xi.dot(ho),u=qi.dot(ho);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Xi,a);uo.subVectors(t,s);let d=Xi.dot(uo),p=qi.dot(uo);if(p>=0&&d<=p)return e.copy(s);let x=d*l-c*p;if(x<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(n).addScaledVector(qi,o);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return $c.subVectors(s,i),o=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector($c,o);let m=1/(g+x+f);return a=x*m,o=f*m,e.copy(n).addScaledVector(Xi,a).addScaledVector(qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},hr={h:0,s:0,l:0};function fo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=Of(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=fo(a,s,t+1/3),this.g=fo(a,s,t),this.b=fo(a,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=Ie){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return he.fromWorkingColorSpace(Xe.copy(this),t),Math.round(ze(Xe.r*255,0,255))*65536+Math.round(ze(Xe.g*255,0,255))*256+Math.round(ze(Xe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Xe.copy(this),e);let n=Xe.r,i=Xe.g,s=Xe.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Ie){he.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,i=Xe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(hr);let n=ja(ti.h,hr.h,e),i=ja(ti.s,hr.s,e),s=ja(ti.l,hr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new wt;wt.NAMES=Jh;var Jf=0,qn=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=si,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Co,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ro&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ee=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new D,ur=new mt,me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nc&&(t.usage=this.usage),t}};var Gr=class extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vr=class extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ut=class extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Kf=0,mn=new oe,po=new ke,Yi=new D,cn=new Wn,Rs=new Wn,Oe=new D,se=class r extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zh(t)?Vr:Gr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return po.lookAt(t),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ut(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(cn.min,Rs.min),cn.expandByPoint(Oe),Oe.addVectors(cn.max,Rs.max),cn.expandByPoint(Oe)):(cn.expandByPoint(Rs.min),cn.expandByPoint(Rs.max))}cn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Oe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Oe.fromBufferAttribute(o,l),c&&(Yi.fromBufferAttribute(t,l),Oe.add(Yi)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<o;b++)l[b]=new D,h[b]=new D;let u=new D,f=new D,d=new D,p=new mt,x=new mt,g=new mt,m=new D,_=new D;function v(b,T,L){u.fromArray(i,b*3),f.fromArray(i,T*3),d.fromArray(i,L*3),p.fromArray(a,b*2),x.fromArray(a,T*2),g.fromArray(a,L*2),f.sub(u),d.sub(u),x.sub(p),g.sub(p);let B=1/(x.x*g.y-g.x*x.y);isFinite(B)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(d,-x.y).multiplyScalar(B),_.copy(d).multiplyScalar(x.x).addScaledVector(f,-g.x).multiplyScalar(B),l[b].add(m),l[T].add(m),l[L].add(m),h[b].add(_),h[T].add(_),h[L].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let b=0,T=M.length;b<T;++b){let L=M[b],B=L.start,I=L.count;for(let N=B,F=B+I;N<F;N+=3)v(n[N+0],n[N+1],n[N+2])}let w=new D,S=new D,E=new D,R=new D;function y(b){E.fromArray(s,b*3),R.copy(E);let T=l[b];w.copy(T),w.sub(E.multiplyScalar(E.dot(T))).normalize(),S.crossVectors(R,T);let B=S.dot(h[b])<0?-1:1;c[b*4]=w.x,c[b*4+1]=w.y,c[b*4+2]=w.z,c[b*4+3]=B}for(let b=0,T=M.length;b<T;++b){let L=M[b],B=L.start,I=L.count;for(let N=B,F=B+I;N<F;N+=3)y(n[N+0]),y(n[N+1]),y(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new D,s=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new me(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zc=new oe,bi=new Fs,fr=new Xn,Jc=new D,$i=new D,Zi=new D,Ji=new D,mo=new D,dr=new D,pr=new mt,mr=new mt,gr=new mt,Kc=new D,jc=new D,Qc=new D,xr=new D,yr=new D,lt=class extends ke{constructor(t=new se,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){dr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(mo.fromBufferAttribute(u,t),a?dr.addScaledVector(mo,h):dr.addScaledVector(mo.sub(e),h))}e.add(dr)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),bi.copy(t.ray).recast(t.near),!(fr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(fr,Jc)===null||bi.origin.distanceToSquared(Jc)>(t.far-t.near)**2))&&(Zc.copy(s).invert(),bi.copy(t.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let M=_,w=v;M<w;M+=3){let S=o.getX(M),E=o.getX(M+1),R=o.getX(M+2);i=_r(this,m,t,n,l,h,u,S,E,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=o.getX(g),v=o.getX(g+1),M=o.getX(g+2);i=_r(this,a,t,n,l,h,u,_,v,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let M=_,w=v;M<w;M+=3){let S=M,E=M+1,R=M+2;i=_r(this,m,t,n,l,h,u,S,E,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=g,v=g+1,M=g+2;i=_r(this,a,t,n,l,h,u,_,v,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function jf(r,t,e,n,i,s,a,o){let c;if(t.side===rn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===oi,o),c===null)return null;yr.copy(o),yr.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(yr);return l<e.near||l>e.far?null:{distance:l,point:yr.clone(),object:r}}function _r(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,$i),r.getVertexPosition(c,Zi),r.getVertexPosition(l,Ji);let h=jf(r,t,e,n,$i,Zi,Ji,xr);if(h){i&&(pr.fromBufferAttribute(i,o),mr.fromBufferAttribute(i,c),gr.fromBufferAttribute(i,l),h.uv=es.getInterpolation(xr,$i,Zi,Ji,pr,mr,gr,new mt)),s&&(pr.fromBufferAttribute(s,o),mr.fromBufferAttribute(s,c),gr.fromBufferAttribute(s,l),h.uv1=es.getInterpolation(xr,$i,Zi,Ji,pr,mr,gr,new mt),h.uv2=h.uv1),a&&(Kc.fromBufferAttribute(a,o),jc.fromBufferAttribute(a,c),Qc.fromBufferAttribute(a,l),h.normal=es.getInterpolation(xr,$i,Zi,Ji,Kc,jc,Qc,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new D,materialIndex:0};es.getNormal($i,Zi,Ji,u.normal),h.face=u}return h}var Ft=class r extends se{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,a,s,0),p("z","y","x",1,-1,n,e,-t,a,s,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(u,2));function p(x,g,m,_,v,M,w,S,E,R,y){let b=M/E,T=w/R,L=M/2,B=w/2,I=S/2,N=E+1,F=R+1,O=0,k=0,X=new D;for(let $=0;$<F;$++){let et=$*T-B;for(let ft=0;ft<N;ft++){let Y=ft*b-L;X[x]=Y*_,X[g]=et*v,X[m]=I,l.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[m]=S>0?1:-1,h.push(X.x,X.y,X.z),u.push(ft/E),u.push(1-$/R),O+=1}}for(let $=0;$<R;$++)for(let et=0;et<E;et++){let ft=f+et+N*$,Y=f+et+N*($+1),Z=f+(et+1)+N*($+1),dt=f+(et+1)+N*$;c.push(ft,Y,dt),c.push(Y,Z,dt),k+=6}o.addGroup(d,k,y),d+=k,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function je(r){let t={};for(let e=0;e<r.length;e++){let n=us(r[e]);for(let i in n)t[i]=n[i]}return t}function Qf(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Kh(r){return r.getRenderTarget()===null?r.outputColorSpace:he.workingColorSpace}var Ml={clone:us,merge:je},td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=td,this.fragmentShader=ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Wr=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qe=class extends Wr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ka*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ki=-90,ji=1,Fo=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qe(Ki,ji,t,e);i.layers=this.layers,this.add(i);let s=new qe(Ki,ji,t,e);s.layers=this.layers,this.add(s);let a=new qe(Ki,ji,t,e);a.layers=this.layers,this.add(a);let o=new qe(Ki,ji,t,e);o.layers=this.layers,this.add(o);let c=new qe(Ki,ji,t,e);c.layers=this.layers,this.add(c);let l=new qe(Ki,ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xr=class extends yn{constructor(t,e,n,i,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zo=class extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ri?Ie:xn),this.texture=new Xr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ft(5,5,5),s=new Qe({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ii});s.uniforms.tEquirect.value=e;let a=new lt(i,s),o=e.minFilter;return e.minFilter===Bs&&(e.minFilter=gn),new Fo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},go=new D,nd=new D,id=new Qt,sn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=go.subVectors(n,e).cross(nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(go),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||id.getNormalMatrix(t),i=this.coplanarPoint(go).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mi=new Xn,vr=new D,zs=class{constructor(t=new sn,e=new sn,n=new sn,i=new sn,s=new sn,a=new sn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){let n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],x=i[10],g=i[11],m=i[12],_=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-s,f-l,g-d,M-m).normalize(),n[1].setComponents(c+s,f+l,g+d,M+m).normalize(),n[2].setComponents(c+a,f+h,g+p,M+_).normalize(),n[3].setComponents(c-a,f-h,g-p,M-_).normalize(),n[4].setComponents(c-o,f-u,g-x,M-v).normalize(),e===Hn)n[5].setComponents(c+o,f+u,g+x,M+v).normalize();else if(e===Br)n[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(vr.x=i.normal.x>0?t.max.x:t.min.x,vr.y=i.normal.y>0?t.max.y:t.min.y,vr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jh(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function sd(r,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=u.byteLength,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=r.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=r.SHORT;else if(u instanceof Uint32Array)x=r.UNSIGNED_INT;else if(u instanceof Int32Array)x=r.INT;else if(u instanceof Int8Array)x=r.BYTE;else if(u instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function s(l,h,u){let f=h.array,d=h._updateRange,p=h.updateRanges;if(r.bindBuffer(u,l),d.count===-1&&p.length===0&&r.bufferSubData(u,0,f),p.length!==0){for(let x=0,g=p.length;x<g;x++){let m=p[x];e?r.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):r.bufferSubData(u,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}d.count!==-1&&(e?r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Ce=class r extends se{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*f-a;for(let v=0;v<l;v++){let M=v*u-s;p.push(M,-_,0),x.push(0,0,1),g.push(v/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<o;_++){let v=_+l*m,M=_+l*(m+1),w=_+1+l*(m+1),S=_+1+l*m;d.push(v,M,S),d.push(M,w,S)}this.setIndex(d),this.setAttribute("position",new Ut(p,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ad=`#ifdef USE_ALPHAHASH
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
#endif`,od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ud=`#ifdef USE_AOMAP
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
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yd=`#ifdef USE_IRIDESCENCE
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
#endif`,_d=`#ifdef USE_BUMPMAP
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
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rd=`#define PI 3.141592653589793
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
} // validated`,Cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Od=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
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
}`,Yd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
#endif`,jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
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
#endif`,sp=`struct PhysicalMaterial {
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
}`,rp=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mp=`#if defined( USE_POINTS_UV )
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
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
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
#endif`,vp=`#ifdef USE_MORPHTARGETS
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
#endif`,bp=`#ifdef USE_MORPHTARGETS
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
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
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
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vp=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r0=`uniform sampler2D t2D;
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
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
}`,u0=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,f0=`#define DISTANCE
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
}`,d0=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y0=`#include <common>
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
}`,_0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,v0=`#define LAMBERT
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
}`,b0=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,M0=`#define MATCAP
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
}`,E0=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,S0=`#define NORMAL
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
}`,w0=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T0=`#define PHONG
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
}`,A0=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,R0=`#define STANDARD
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
}`,C0=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,P0=`#define TOON
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
}`,L0=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,I0=`uniform float size;
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
}`,D0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,U0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 color;
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
}`,B0=`uniform float rotation;
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
}`,O0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yt={alphahash_fragment:rd,alphahash_pars_fragment:ad,alphamap_fragment:od,alphamap_pars_fragment:ld,alphatest_fragment:cd,alphatest_pars_fragment:hd,aomap_fragment:ud,aomap_pars_fragment:fd,batching_pars_vertex:dd,batching_vertex:pd,begin_vertex:md,beginnormal_vertex:gd,bsdfs:xd,iridescence_fragment:yd,bumpmap_pars_fragment:_d,clipping_planes_fragment:vd,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:Md,clipping_planes_vertex:Ed,color_fragment:Sd,color_pars_fragment:wd,color_pars_vertex:Td,color_vertex:Ad,common:Rd,cube_uv_reflection_fragment:Cd,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Id,emissivemap_fragment:Dd,emissivemap_pars_fragment:Ud,colorspace_fragment:Nd,colorspace_pars_fragment:Bd,envmap_fragment:Od,envmap_common_pars_fragment:Fd,envmap_pars_fragment:zd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:jd,envmap_vertex:Hd,fog_vertex:Gd,fog_pars_vertex:Vd,fog_fragment:Wd,fog_pars_fragment:Xd,gradientmap_pars_fragment:qd,lightmap_fragment:Yd,lightmap_pars_fragment:$d,lights_lambert_fragment:Zd,lights_lambert_pars_fragment:Jd,lights_pars_begin:Kd,lights_toon_fragment:Qd,lights_toon_pars_fragment:tp,lights_phong_fragment:ep,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:sp,lights_fragment_begin:rp,lights_fragment_maps:ap,lights_fragment_end:op,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:fp,map_pars_fragment:dp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:xp,morphcolor_vertex:yp,morphnormal_vertex:_p,morphtarget_pars_vertex:vp,morphtarget_vertex:bp,normal_fragment_begin:Mp,normal_fragment_maps:Ep,normal_pars_fragment:Sp,normal_pars_vertex:wp,normal_vertex:Tp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Ip,packing:Dp,premultiplied_alpha_fragment:Up,project_vertex:Np,dithering_fragment:Bp,dithering_pars_fragment:Op,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Vp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:qp,skinnormal_vertex:Yp,specularmap_fragment:$p,specularmap_pars_fragment:Zp,tonemapping_fragment:Jp,tonemapping_pars_fragment:Kp,transmission_fragment:jp,transmission_pars_fragment:Qp,uv_pars_fragment:t0,uv_pars_vertex:e0,uv_vertex:n0,worldpos_vertex:i0,background_vert:s0,background_frag:r0,backgroundCube_vert:a0,backgroundCube_frag:o0,cube_vert:l0,cube_frag:c0,depth_vert:h0,depth_frag:u0,distanceRGBA_vert:f0,distanceRGBA_frag:d0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:x0,meshbasic_vert:y0,meshbasic_frag:_0,meshlambert_vert:v0,meshlambert_frag:b0,meshmatcap_vert:M0,meshmatcap_frag:E0,meshnormal_vert:S0,meshnormal_frag:w0,meshphong_vert:T0,meshphong_frag:A0,meshphysical_vert:R0,meshphysical_frag:C0,meshtoon_vert:P0,meshtoon_frag:L0,points_vert:I0,points_frag:D0,shadow_vert:U0,shadow_frag:N0,sprite_vert:B0,sprite_frag:O0},rt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Pn={basic:{uniforms:je([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:je([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:je([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:je([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:je([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:je([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:je([rt.points,rt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:je([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:je([rt.common,rt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:je([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:je([rt.sprite,rt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:je([rt.common,rt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:je([rt.lights,rt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Pn.physical={uniforms:je([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var br={r:0,b:0,g:0};function F0(r,t,e,n,i,s,a){let o=new wt(0),c=s===!0?0:1,l,h,u=null,f=0,d=null;function p(g,m){let _=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:t).get(v)),v===null?x(o,c):v&&v.isColor&&(x(v,1),_=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ca)?(h===void 0&&(h=new lt(new Ft(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:us(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=he.getTransfer(v.colorSpace)!==xe,(u!==v||f!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new lt(new Ce(2,2),new Qe({name:"BackgroundMaterial",uniforms:us(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,m){g.getRGB(br,Kh(r)),n.buffers.color.setClear(br.r,br.g,br.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),c=m,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,x(o,c)},render:p}}function z0(r,t,e,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=g(null),l=c,h=!1;function u(I,N,F,O,k){let X=!1;if(a){let $=x(O,F,N);l!==$&&(l=$,d(l.object)),X=m(I,O,F,k),X&&_(I,O,F,k)}else{let $=N.wireframe===!0;(l.geometry!==O.id||l.program!==F.id||l.wireframe!==$)&&(l.geometry=O.id,l.program=F.id,l.wireframe=$,X=!0)}k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,R(I,N,F,O),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function p(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function x(I,N,F){let O=F.wireframe===!0,k=o[I.id];k===void 0&&(k={},o[I.id]=k);let X=k[N.id];X===void 0&&(X={},k[N.id]=X);let $=X[O];return $===void 0&&($=g(f()),X[O]=$),$}function g(I){let N=[],F=[],O=[];for(let k=0;k<i;k++)N[k]=0,F[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:O,object:I,attributes:{},index:null}}function m(I,N,F,O){let k=l.attributes,X=N.attributes,$=0,et=F.getAttributes();for(let ft in et)if(et[ft].location>=0){let Z=k[ft],dt=X[ft];if(dt===void 0&&(ft==="instanceMatrix"&&I.instanceMatrix&&(dt=I.instanceMatrix),ft==="instanceColor"&&I.instanceColor&&(dt=I.instanceColor)),Z===void 0||Z.attribute!==dt||dt&&Z.data!==dt.data)return!0;$++}return l.attributesNum!==$||l.index!==O}function _(I,N,F,O){let k={},X=N.attributes,$=0,et=F.getAttributes();for(let ft in et)if(et[ft].location>=0){let Z=X[ft];Z===void 0&&(ft==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),ft==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));let dt={};dt.attribute=Z,Z&&Z.data&&(dt.data=Z.data),k[ft]=dt,$++}l.attributes=k,l.attributesNum=$,l.index=O}function v(){let I=l.newAttributes;for(let N=0,F=I.length;N<F;N++)I[N]=0}function M(I){w(I,0)}function w(I,N){let F=l.newAttributes,O=l.enabledAttributes,k=l.attributeDivisors;F[I]=1,O[I]===0&&(r.enableVertexAttribArray(I),O[I]=1),k[I]!==N&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,N),k[I]=N)}function S(){let I=l.newAttributes,N=l.enabledAttributes;for(let F=0,O=N.length;F<O;F++)N[F]!==I[F]&&(r.disableVertexAttribArray(F),N[F]=0)}function E(I,N,F,O,k,X,$){$===!0?r.vertexAttribIPointer(I,N,F,k,X):r.vertexAttribPointer(I,N,F,O,k,X)}function R(I,N,F,O){if(n.isWebGL2===!1&&(I.isInstancedMesh||O.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let k=O.attributes,X=F.getAttributes(),$=N.defaultAttributeValues;for(let et in X){let ft=X[et];if(ft.location>=0){let Y=k[et];if(Y===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){let Z=Y.normalized,dt=Y.itemSize,St=e.get(Y);if(St===void 0)continue;let Et=St.buffer,Gt=St.type,Xt=St.bytesPerElement,It=n.isWebGL2===!0&&(Gt===r.INT||Gt===r.UNSIGNED_INT||Y.gpuType===Fh);if(Y.isInterleavedBufferAttribute){let ie=Y.data,H=ie.stride,Ze=Y.offset;if(ie.isInstancedInterleavedBuffer){for(let Rt=0;Rt<ft.locationSize;Rt++)w(ft.location+Rt,ie.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Rt=0;Rt<ft.locationSize;Rt++)M(ft.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Rt=0;Rt<ft.locationSize;Rt++)E(ft.location+Rt,dt/ft.locationSize,Gt,Z,H*Xt,(Ze+dt/ft.locationSize*Rt)*Xt,It)}else{if(Y.isInstancedBufferAttribute){for(let ie=0;ie<ft.locationSize;ie++)w(ft.location+ie,Y.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ie=0;ie<ft.locationSize;ie++)M(ft.location+ie);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let ie=0;ie<ft.locationSize;ie++)E(ft.location+ie,dt/ft.locationSize,Gt,Z,dt*Xt,dt/ft.locationSize*ie*Xt,It)}}else if($!==void 0){let Z=$[et];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(ft.location,Z);break;case 3:r.vertexAttrib3fv(ft.location,Z);break;case 4:r.vertexAttrib4fv(ft.location,Z);break;default:r.vertexAttrib1fv(ft.location,Z)}}}}S()}function y(){L();for(let I in o){let N=o[I];for(let F in N){let O=N[F];for(let k in O)p(O[k].object),delete O[k];delete N[F]}delete o[I]}}function b(I){if(o[I.id]===void 0)return;let N=o[I.id];for(let F in N){let O=N[F];for(let k in O)p(O[k].object),delete O[k];delete N[F]}delete o[I.id]}function T(I){for(let N in o){let F=o[N];if(F[I.id]===void 0)continue;let O=F[I.id];for(let k in O)p(O[k].object),delete O[k];delete F[I.id]}}function L(){B(),h=!0,l!==c&&(l=c,d(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:L,resetDefaultState:B,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:M,disableUnusedAttributes:S}}function k0(r,t,e,n){let i=n.isWebGL2,s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function c(h,u,f){if(f===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,h,u,f),e.update(u,s,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(h[p],u[p]);else{d.multiDrawArraysWEBGL(s,h,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];e.update(p,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function H0(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=a||t.has("OES_texture_float"),w=v&&M,S=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:S}}function G0(r){let t=this,e=null,n=0,i=!1,s=!1,a=new sn,o=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!i||p===null||p.length===0||s&&!g)s?h(null):l();else{let _=s?0:n,v=_*4,M=m.clippingState||null;c.value=M,M=h(p,f,v,d);for(let w=0;w!==v;++w)M[w]=e[w];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=d+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,M=d;v!==x;++v,M+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function V0(r){let t=new WeakMap;function e(a,o){return o===Po?a.mapping=os:o===Lo&&(a.mapping=ls),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Po||o===Lo)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new zo(c.height/2);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var qr=class extends Wr{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ns=4,th=[.125,.215,.35,.446,.526,.582],wi=20,xo=new qr,eh=new wt,yo=null,_o=0,vo=0,Ei=(1+Math.sqrt(5))/2,Qi=1/Ei,nh=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ei,Qi),new D(0,Ei,-Qi),new D(Qi,0,Ei),new D(-Qi,0,Ei),new D(Ei,Qi,0),new D(-Ei,Qi,0)],Yr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){yo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yo,_o,vo),t.scissorTest=!1,Mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Os,format:Tn,colorSpace:Gn,depthBuffer:!1},i=ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W0(s)),this._blurMaterial=X0(s,t,e)}return i}_compileMaterial(t){let e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,xo)}_sceneToCubeUV(t,e,n,i){let o=new qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(eh),h.toneMapping=ri,h.autoClear=!1;let d=new Ee({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),p=new lt(new Ft,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(eh),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):_===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));let v=this._cubeSize;Mr(i,_*v,m>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(p,o),h.render(t,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===os||t.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;Mr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,xo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=nh[(i-1)%nh.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new lt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*wi-1),x=s/p,g=isFinite(s)?1+Math.floor(h*x):wi;g>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${wi}`);let m=[],_=0;for(let E=0;E<wi;++E){let R=E/x,y=Math.exp(-R*R/2);m.push(y),E===0?_+=y:E<g&&(_+=2*y)}for(let E=0;E<m.length;E++)m[E]=m[E]/_;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;let M=this._sizeLods[i],w=3*M*(i>v-ns?i-v+ns:0),S=4*(this._cubeSize-M);Mr(e,w,S,3*M,2*M),c.setRenderTarget(e),c.render(u,xo)}};function W0(r){let t=[],e=[],n=[],i=r,s=r-ns+1+th.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let c=1/o;a>r-ns?c=th[a-r+ns-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*d),v=new Float32Array(g*p*d),M=new Float32Array(m*p*d);for(let S=0;S<d;S++){let E=S%3*2/3-1,R=S>2?0:-1,y=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];_.set(y,x*p*S),v.set(f,g*p*S);let b=[S,S,S,S,S,S];M.set(b,m*p*S)}let w=new se;w.setAttribute("position",new me(_,x)),w.setAttribute("uv",new me(v,g)),w.setAttribute("faceIndex",new me(M,m)),t.push(w),i>ns&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ih(r,t,e){let n=new Vn(r,t,e);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function X0(r,t,e){let n=new Float32Array(wi),i=new D(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:El(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function sh(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function rh(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function El(){return`

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
	`}function q0(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Po||c===Lo,h=c===os||c===ls;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Yr(r)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Yr(r));let f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Y0(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $0(r,t,e,n){let i={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);for(let p in f.morphAttributes){let x=f.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}f.removeEventListener("dispose",a),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)t.update(f[p],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let x=d[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],r.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let v=0,M=_.length;v<M;v+=3){let w=_[v+0],S=_[v+1],E=_[v+2];f.push(w,S,S,E,E,w)}}else if(p!==void 0){let _=p.array;x=p.version;for(let v=0,M=_.length/3-1;v<M;v+=3){let w=v+0,S=v+1,E=v+2;f.push(w,S,S,E,E,w)}}else return;let g=new(Zh(f)?Vr:Gr)(f,1);g.version=x;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Z0(r,t,e,n){let i=n.isWebGL2,s;function a(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,p){r.drawElements(s,p,o,d*c),e.update(p,s,1)}function u(d,p,x){if(x===0)return;let g,m;if(i)g=r,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,o,d*c,x),e.update(p,s,x)}function f(d,p,x){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<x;m++)this.render(d[m]/c,p[m]);else{g.multiDrawElementsWEBGL(s,p,0,o,d,0,x);let m=0;for(let _=0;_<x;_++)m+=p[_];e.update(m,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function J0(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function K0(r,t){return r[0]-t[0]}function j0(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Q0(r,t,e){let n={},i=new Float32Array(8),s=new WeakMap,a=new ve,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=d!==void 0?d.length:0,x=s.get(h);if(x===void 0||x.count!==p){let I=function(){L.dispose(),s.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],R=0;_===!0&&(R=1),v===!0&&(R=2),M===!0&&(R=3);let y=h.attributes.position.count*R,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*b*4*p),L=new kr(T,y,b,p);L.type=ni,L.needsUpdate=!0;let B=R*4;for(let N=0;N<p;N++){let F=w[N],O=S[N],k=E[N],X=y*b*4*N;for(let $=0;$<F.count;$++){let et=$*B;_===!0&&(a.fromBufferAttribute(F,$),T[X+et+0]=a.x,T[X+et+1]=a.y,T[X+et+2]=a.z,T[X+et+3]=0),v===!0&&(a.fromBufferAttribute(O,$),T[X+et+4]=a.x,T[X+et+5]=a.y,T[X+et+6]=a.z,T[X+et+7]=0),M===!0&&(a.fromBufferAttribute(k,$),T[X+et+8]=a.x,T[X+et+9]=a.y,T[X+et+10]=a.z,T[X+et+11]=k.itemSize===4?a.w:1)}}x={count:p,texture:L,size:new mt(y,b)},s.set(h,x),h.addEventListener("dispose",I)}let g=0;for(let _=0;_<f.length;_++)g+=f[_];let m=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",m),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,p=n[h.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[h.id]=p}for(let v=0;v<d;v++){let M=p[v];M[0]=v,M[1]=f[v]}p.sort(j0);for(let v=0;v<8;v++)v<d&&p[v][1]?(o[v][0]=p[v][0],o[v][1]=p[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(K0);let x=h.morphAttributes.position,g=h.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let M=o[v],w=M[0],S=M[1];w!==Number.MAX_SAFE_INTEGER&&S?(x&&h.getAttribute("morphTarget"+v)!==x[w]&&h.setAttribute("morphTarget"+v,x[w]),g&&h.getAttribute("morphNormal"+v)!==g[w]&&h.setAttribute("morphNormal"+v,g[w]),i[v]=S,m+=S):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),g&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let _=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function tm(r,t,e,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}var $r=class extends yn{constructor(t,e,n,i,s,a,o,c,l,h){if(h=h!==void 0?h:Ai,h!==Ai&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=ei),n===void 0&&h===cs&&(n=Ti),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Fe,this.minFilter=c!==void 0?c:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Qh=new yn,tu=new $r(1,1);tu.compareFunction=$h;var eu=new kr,nu=new Oo,iu=new Xr,ah=[],oh=[],lh=new Float32Array(16),ch=new Float32Array(9),hh=new Float32Array(4);function _s(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=ah[i];if(s===void 0&&(s=new Float32Array(i),ah[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function De(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ue(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function fa(r,t){let e=oh[t];e===void 0&&(e=new Int32Array(t),oh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function em(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function nm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;r.uniform2fv(this.addr,t),Ue(e,t)}}function im(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;r.uniform3fv(this.addr,t),Ue(e,t)}}function sm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;r.uniform4fv(this.addr,t),Ue(e,t)}}function rm(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;hh.set(n),r.uniformMatrix2fv(this.addr,!1,hh),Ue(e,n)}}function am(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;ch.set(n),r.uniformMatrix3fv(this.addr,!1,ch),Ue(e,n)}}function om(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;lh.set(n),r.uniformMatrix4fv(this.addr,!1,lh),Ue(e,n)}}function lm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function cm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;r.uniform2iv(this.addr,t),Ue(e,t)}}function hm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;r.uniform3iv(this.addr,t),Ue(e,t)}}function um(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;r.uniform4iv(this.addr,t),Ue(e,t)}}function fm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function dm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;r.uniform2uiv(this.addr,t),Ue(e,t)}}function pm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;r.uniform3uiv(this.addr,t),Ue(e,t)}}function mm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;r.uniform4uiv(this.addr,t),Ue(e,t)}}function gm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?tu:Qh;e.setTexture2D(t||s,i)}function xm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||nu,i)}function ym(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||iu,i)}function _m(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||eu,i)}function vm(r){switch(r){case 5126:return em;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return fm;case 36294:return dm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return _m}}function bm(r,t){r.uniform1fv(this.addr,t)}function Mm(r,t){let e=_s(t,this.size,2);r.uniform2fv(this.addr,e)}function Em(r,t){let e=_s(t,this.size,3);r.uniform3fv(this.addr,e)}function Sm(r,t){let e=_s(t,this.size,4);r.uniform4fv(this.addr,e)}function wm(r,t){let e=_s(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Tm(r,t){let e=_s(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Am(r,t){let e=_s(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Rm(r,t){r.uniform1iv(this.addr,t)}function Cm(r,t){r.uniform2iv(this.addr,t)}function Pm(r,t){r.uniform3iv(this.addr,t)}function Lm(r,t){r.uniform4iv(this.addr,t)}function Im(r,t){r.uniform1uiv(this.addr,t)}function Dm(r,t){r.uniform2uiv(this.addr,t)}function Um(r,t){r.uniform3uiv(this.addr,t)}function Nm(r,t){r.uniform4uiv(this.addr,t)}function Bm(r,t,e){let n=this.cache,i=t.length,s=fa(e,i);De(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Qh,s[a])}function Om(r,t,e){let n=this.cache,i=t.length,s=fa(e,i);De(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||nu,s[a])}function Fm(r,t,e){let n=this.cache,i=t.length,s=fa(e,i);De(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||iu,s[a])}function zm(r,t,e){let n=this.cache,i=t.length,s=fa(e,i);De(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||eu,s[a])}function km(r){switch(r){case 5126:return bm;case 35664:return Mm;case 35665:return Em;case 35666:return Sm;case 35674:return wm;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Im;case 36294:return Dm;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return zm}}var ko=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vm(e.type)}},Ho=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=km(e.type)}},Go=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},bo=/(\w+)(\])?(\[|\.)?/g;function uh(r,t){r.seq.push(t),r.map[t.id]=t}function Hm(r,t,e){let n=r.name,i=n.length;for(bo.lastIndex=0;;){let s=bo.exec(n),a=bo.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){uh(e,l===void 0?new ko(o,r,t):new Ho(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Go(o),uh(e,u)),e=u}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Hm(s,a,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function fh(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Gm=37297,Vm=0;function Wm(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Xm(r){let t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(r),n;switch(t===e?n="":t===Ur&&e===Dr?n="LinearDisplayP3ToLinearSRGB":t===Dr&&e===Ur&&(n="LinearSRGBToLinearDisplayP3"),r){case Gn:case ha:return[n,"LinearTransferOETF"];case Ie:case bl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function dh(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Wm(r.getShaderSource(t),a)}else return i}function qm(r,t){let e=Xm(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ym(r,t){let e;switch(t){case ff:e="Linear";break;case df:e="Reinhard";break;case pf:e="OptimizedCineon";break;case mf:e="ACESFilmic";break;case xf:e="AgX";break;case gf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $m(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}function Zm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(is).join(`
`)}function Jm(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Km(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function is(r){return r!==""}function ph(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(r){return r.replace(jm,tg)}var Qm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tg(r,t){let e=Yt[t];if(e===void 0){let n=Qm.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vo(e)}var eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gh(r){return r.replace(eg,ng)}function ng(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xh(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ig(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===yl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function sg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case os:case ls:t="ENVMAP_TYPE_CUBE";break;case ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rg(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===ls&&(t="ENVMAP_MODE_REFRACTION"),t}function ag(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Bh:t="ENVMAP_BLENDING_MULTIPLY";break;case hf:t="ENVMAP_BLENDING_MIX";break;case uf:t="ENVMAP_BLENDING_ADD";break}return t}function og(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lg(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ig(e),l=sg(e),h=rg(e),u=ag(e),f=og(e),d=e.isWebGL2?"":$m(e),p=Zm(e),x=Jm(s),g=i.createProgram(),m,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(is).join(`
`),m.length>0&&(m+=`
`),_=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(is).join(`
`),_.length>0&&(_+=`
`)):(m=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),_=[d,xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Yt.tonemapping_pars_fragment:"",e.toneMapping!==ri?Ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,qm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),a=Vo(a),a=ph(a,e),a=mh(a,e),o=Vo(o),o=ph(o,e),o=mh(o,e),a=gh(a),o=gh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=v+m+a,w=v+_+o,S=fh(i,i.VERTEX_SHADER,M),E=fh(i,i.FRAGMENT_SHADER,w);i.attachShader(g,S),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function R(L){if(r.debug.checkShaderErrors){let B=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(S).trim(),N=i.getShaderInfoLog(E).trim(),F=!0,O=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,S,E);else{let k=dh(i,S,"vertex"),X=dh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+k+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(I===""||N==="")&&(O=!1);O&&(L.diagnostics={runnable:F,programLog:B,vertexShader:{log:I,prefix:m},fragmentShader:{log:N,prefix:_}})}i.deleteShader(S),i.deleteShader(E),y=new rs(i,g),b=Km(i,g)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,Gm)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=E,this}var cg=0,Wo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xo(t),e.set(t,n)),n}},Xo=class{constructor(t){this.id=cg++,this.code=t,this.usedTimes=0}};function hg(r,t,e,n,i,s,a){let o=new Hr,c=new Wo,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function g(y,b,T,L,B){let I=L.fog,N=B.geometry,F=y.isMeshStandardMaterial?L.environment:null,O=(y.isMeshStandardMaterial?e:t).get(y.envMap||F),k=O&&O.mapping===ca?O.image.height:null,X=p[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,et=$!==void 0?$.length:0,ft=0;N.morphAttributes.position!==void 0&&(ft=1),N.morphAttributes.normal!==void 0&&(ft=2),N.morphAttributes.color!==void 0&&(ft=3);let Y,Z,dt,St;if(X){let Je=Pn[X];Y=Je.vertexShader,Z=Je.fragmentShader}else Y=y.vertexShader,Z=y.fragmentShader,c.update(y),dt=c.getVertexShaderID(y),St=c.getFragmentShaderID(y);let Et=r.getRenderTarget(),Gt=B.isInstancedMesh===!0,Xt=B.isBatchedMesh===!0,It=!!y.map,ie=!!y.matcap,H=!!O,Ze=!!y.aoMap,Rt=!!y.lightMap,zt=!!y.bumpMap,vt=!!y.normalMap,be=!!y.displacementMap,$t=!!y.emissiveMap,P=!!y.metalnessMap,A=!!y.roughnessMap,V=y.anisotropy>0,Q=y.clearcoat>0,j=y.iridescence>0,tt=y.sheen>0,bt=y.transmission>0,ut=V&&!!y.anisotropyMap,xt=Q&&!!y.clearcoatMap,Lt=Q&&!!y.clearcoatNormalMap,Zt=Q&&!!y.clearcoatRoughnessMap,K=j&&!!y.iridescenceMap,ce=j&&!!y.iridescenceThicknessMap,ee=tt&&!!y.sheenColorMap,Ot=tt&&!!y.sheenRoughnessMap,At=!!y.specularMap,yt=!!y.specularColorMap,qt=!!y.specularIntensityMap,ae=bt&&!!y.transmissionMap,Ae=bt&&!!y.thicknessMap,Kt=!!y.gradientMap,at=!!y.alphaMap,U=y.alphaTest>0,ct=!!y.alphaHash,ht=!!y.extensions,Dt=!!N.attributes.uv1,Ct=!!N.attributes.uv2,fe=!!N.attributes.uv3,de=ri;return y.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(de=r.toneMapping),{isWebGL2:h,shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:Y,fragmentShader:Z,defines:y.defines,customVertexShaderID:dt,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Xt,instancing:Gt,instancingColor:Gt&&B.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Et===null?r.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Gn,map:It,matcap:ie,envMap:H,envMapMode:H&&O.mapping,envMapCubeUVHeight:k,aoMap:Ze,lightMap:Rt,bumpMap:zt,normalMap:vt,displacementMap:f&&be,emissiveMap:$t,normalMapObjectSpace:vt&&y.normalMapType===Cf,normalMapTangentSpace:vt&&y.normalMapType===qh,metalnessMap:P,roughnessMap:A,anisotropy:V,anisotropyMap:ut,clearcoat:Q,clearcoatMap:xt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Zt,iridescence:j,iridescenceMap:K,iridescenceThicknessMap:ce,sheen:tt,sheenColorMap:ee,sheenRoughnessMap:Ot,specularMap:At,specularColorMap:yt,specularIntensityMap:qt,transmission:bt,transmissionMap:ae,thicknessMap:Ae,gradientMap:Kt,opaque:y.transparent===!1&&y.blending===si,alphaMap:at,alphaTest:U,alphaHash:ct,combine:y.combine,mapUv:It&&x(y.map.channel),aoMapUv:Ze&&x(y.aoMap.channel),lightMapUv:Rt&&x(y.lightMap.channel),bumpMapUv:zt&&x(y.bumpMap.channel),normalMapUv:vt&&x(y.normalMap.channel),displacementMapUv:be&&x(y.displacementMap.channel),emissiveMapUv:$t&&x(y.emissiveMap.channel),metalnessMapUv:P&&x(y.metalnessMap.channel),roughnessMapUv:A&&x(y.roughnessMap.channel),anisotropyMapUv:ut&&x(y.anisotropyMap.channel),clearcoatMapUv:xt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(y.sheenRoughnessMap.channel),specularMapUv:At&&x(y.specularMap.channel),specularColorMapUv:yt&&x(y.specularColorMap.channel),specularIntensityMapUv:qt&&x(y.specularIntensityMap.channel),transmissionMapUv:ae&&x(y.transmissionMap.channel),thicknessMapUv:Ae&&x(y.thicknessMap.channel),alphaMapUv:at&&x(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(vt||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Ct,vertexUv3s:fe,pointsUvs:B.isPoints===!0&&!!N.attributes.uv&&(It||at),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ft,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&T.length>0,shadowMapType:r.shadowMap.type,toneMapping:de,useLegacyLights:r._useLegacyLights,decodeVideoTexture:It&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===xe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ye,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ht&&y.extensions.derivatives===!0,extensionFragDepth:ht&&y.extensions.fragDepth===!0,extensionDrawBuffers:ht&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ht&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let T in y.defines)b.push(T),b.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(_(b,y),v(b,y),b.push(r.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function _(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function M(y){let b=p[y.type],T;if(b){let L=Pn[b];T=Ml.clone(L.uniforms)}else T=y.uniforms;return T}function w(y,b){let T;for(let L=0,B=l.length;L<B;L++){let I=l[L];if(I.cacheKey===b){T=I,++T.usedTimes;break}}return T===void 0&&(T=new lg(r,b,y,s),l.push(T)),T}function S(y){if(--y.usedTimes===0){let b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),y.destroy()}}function E(y){c.remove(y)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:w,releaseProgram:S,releaseShaderCache:E,programs:l,dispose:R}}function ug(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function fg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function yh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function _h(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,p,x,g){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},r[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function o(u,f,d,p,x,g){let m=a(u,f,d,p,x,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function c(u,f,d,p,x,g){let m=a(u,f,d,p,x,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||fg),n.length>1&&n.sort(f||yh),i.length>1&&i.sort(f||yh)}function h(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function dg(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new _h,r.set(n,[a])):i>=s.length?(a=new _h,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function pg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new wt};break;case"SpotLight":e={position:new D,direction:new D,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function mg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var gg=0;function xg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function yg(r,t){let e=new pg,n=mg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);let s=new D,a=new oe,o=new oe;function c(h,u){let f=0,d=0,p=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let x=0,g=0,m=0,_=0,v=0,M=0,w=0,S=0,E=0,R=0,y=0;h.sort(xg);let b=u===!0?Math.PI:1;for(let L=0,B=h.length;L<B;L++){let I=h[L],N=I.color,F=I.intensity,O=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=N.r*F*b,d+=N.g*F*b,p+=N.b*F*b;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],F);y++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){let $=I.shadow,et=n.get(I);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.directionalShadow[x]=et,i.directionalShadowMap[x]=k,i.directionalShadowMatrix[x]=I.shadow.matrix,M++}i.directional[x]=X,x++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(N).multiplyScalar(F*b),X.distance=O,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[m]=X;let $=I.shadow;if(I.map&&(i.spotLightMap[E]=I.map,E++,$.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[m]=$.matrix,I.castShadow){let et=n.get(I);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.spotShadow[m]=et,i.spotShadowMap[m]=k,S++}m++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(N).multiplyScalar(F),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[_]=X,_++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*b),X.distance=I.distance,X.decay=I.decay,I.castShadow){let $=I.shadow,et=n.get(I);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,i.pointShadow[g]=et,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=X,g++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(F*b),X.groundColor.copy(I.groundColor).multiplyScalar(F*b),i.hemi[v]=X,v++}}_>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=p;let T=i.hash;(T.directionalLength!==x||T.pointLength!==g||T.spotLength!==m||T.rectAreaLength!==_||T.hemiLength!==v||T.numDirectionalShadows!==M||T.numPointShadows!==w||T.numSpotShadows!==S||T.numSpotMaps!==E||T.numLightProbes!==y)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=_,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+E-R,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=y,T.directionalLength=x,T.pointLength=g,T.spotLength=m,T.rectAreaLength=_,T.hemiLength=v,T.numDirectionalShadows=M,T.numPointShadows=w,T.numSpotShadows=S,T.numSpotMaps=E,T.numLightProbes=y,i.version=gg++)}function l(h,u){let f=0,d=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){let M=h[_];if(M.isDirectionalLight){let w=i.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(M.isSpotLight){let w=i.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),o.identity(),a.copy(M.matrixWorld),a.premultiply(m),o.extractRotation(a),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:c,setupView:l,state:i}}function vh(r,t){let e=new yg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function _g(r,t){let e=new WeakMap;function n(s,a=0){let o=e.get(s),c;return o===void 0?(c=new vh(r,t),e.set(s,[c])):a>=o.length?(c=new vh(r,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var qo=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yo=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
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
}`;function Mg(r,t,e){let n=new zs,i=new mt,s=new mt,a=new ve,o=new qo({depthPacking:Rf}),c=new Yo,l={},h=e.maxTextureSize,u={[oi]:rn,[rn]:oi,[ye]:ye},f=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:vg,fragmentShader:bg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new se;p.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new lt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let m=this.type;this.render=function(S,E,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let y=r.getRenderTarget(),b=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),L=r.state;L.setBlending(ii),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=m!==kn&&this.type===kn,I=m===kn&&this.type!==kn;for(let N=0,F=S.length;N<F;N++){let O=S[N],k=O.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let X=k.getFrameExtents();if(i.multiply(X),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/X.x),i.x=s.x*X.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/X.y),i.y=s.y*X.y,k.mapSize.y=s.y)),k.map===null||B===!0||I===!0){let et=this.type!==kn?{minFilter:Fe,magFilter:Fe}:{};k.map!==null&&k.map.dispose(),k.map=new Vn(i.x,i.y,et),k.map.texture.name=O.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();let $=k.getViewportCount();for(let et=0;et<$;et++){let ft=k.getViewport(et);a.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),L.viewport(a),k.updateMatrices(O,et),n=k.getFrustum(),M(E,R,k.camera,O,this.type)}k.isPointLightShadow!==!0&&this.type===kn&&_(k,R),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(y,b,T)};function _(S,E){let R=t.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Vn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(E,null,R,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(E,null,R,d,x,null)}function v(S,E,R,y){let b=null,T=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)b=T;else if(b=R.isPointLight===!0?c:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let L=b.uuid,B=E.uuid,I=l[L];I===void 0&&(I={},l[L]=I);let N=I[B];N===void 0&&(N=b.clone(),I[B]=N,E.addEventListener("dispose",w)),b=N}if(b.visible=E.visible,b.wireframe=E.wireframe,y===kn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:u[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let L=r.properties.get(b);L.light=R}return b}function M(S,E,R,y,b){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===kn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);let B=t.update(S),I=S.material;if(Array.isArray(I)){let N=B.groups;for(let F=0,O=N.length;F<O;F++){let k=N[F],X=I[k.materialIndex];if(X&&X.visible){let $=v(S,X,y,b);S.onBeforeShadow(r,S,E,R,B,$,k),r.renderBufferDirect(R,null,B,$,S,k),S.onAfterShadow(r,S,E,R,B,$,k)}}}else if(I.visible){let N=v(S,I,y,b);S.onBeforeShadow(r,S,E,R,B,N,null),r.renderBufferDirect(R,null,B,N,S,null),S.onAfterShadow(r,S,E,R,B,N,null)}}let L=S.children;for(let B=0,I=L.length;B<I;B++)M(L[B],E,R,y,b)}function w(S){S.target.removeEventListener("dispose",w);for(let R in l){let y=l[R],b=S.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function Eg(r,t,e){let n=e.isWebGL2;function i(){let U=!1,ct=new ve,ht=null,Dt=new ve(0,0,0,0);return{setMask:function(Ct){ht!==Ct&&!U&&(r.colorMask(Ct,Ct,Ct,Ct),ht=Ct)},setLocked:function(Ct){U=Ct},setClear:function(Ct,fe,de,Ne,Je){Je===!0&&(Ct*=Ne,fe*=Ne,de*=Ne),ct.set(Ct,fe,de,Ne),Dt.equals(ct)===!1&&(r.clearColor(Ct,fe,de,Ne),Dt.copy(ct))},reset:function(){U=!1,ht=null,Dt.set(-1,0,0,0)}}}function s(){let U=!1,ct=null,ht=null,Dt=null;return{setTest:function(Ct){Ct?Xt(r.DEPTH_TEST):It(r.DEPTH_TEST)},setMask:function(Ct){ct!==Ct&&!U&&(r.depthMask(Ct),ct=Ct)},setFunc:function(Ct){if(ht!==Ct){switch(Ct){case sf:r.depthFunc(r.NEVER);break;case rf:r.depthFunc(r.ALWAYS);break;case af:r.depthFunc(r.LESS);break;case Cr:r.depthFunc(r.LEQUAL);break;case of:r.depthFunc(r.EQUAL);break;case lf:r.depthFunc(r.GEQUAL);break;case _l:r.depthFunc(r.GREATER);break;case cf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ht=Ct}},setLocked:function(Ct){U=Ct},setClear:function(Ct){Dt!==Ct&&(r.clearDepth(Ct),Dt=Ct)},reset:function(){U=!1,ct=null,ht=null,Dt=null}}}function a(){let U=!1,ct=null,ht=null,Dt=null,Ct=null,fe=null,de=null,Ne=null,Je=null;return{setTest:function(pe){U||(pe?Xt(r.STENCIL_TEST):It(r.STENCIL_TEST))},setMask:function(pe){ct!==pe&&!U&&(r.stencilMask(pe),ct=pe)},setFunc:function(pe,Ke,Cn){(ht!==pe||Dt!==Ke||Ct!==Cn)&&(r.stencilFunc(pe,Ke,Cn),ht=pe,Dt=Ke,Ct=Cn)},setOp:function(pe,Ke,Cn){(fe!==pe||de!==Ke||Ne!==Cn)&&(r.stencilOp(pe,Ke,Cn),fe=pe,de=Ke,Ne=Cn)},setLocked:function(pe){U=pe},setClear:function(pe){Je!==pe&&(r.clearStencil(pe),Je=pe)},reset:function(){U=!1,ct=null,ht=null,Dt=null,Ct=null,fe=null,de=null,Ne=null,Je=null}}}let o=new i,c=new s,l=new a,h=new WeakMap,u=new WeakMap,f={},d={},p=new WeakMap,x=[],g=null,m=!1,_=null,v=null,M=null,w=null,S=null,E=null,R=null,y=new wt(0,0,0),b=0,T=!1,L=null,B=null,I=null,N=null,F=null,O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,X=0,$=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),k=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),k=X>=2);let et=null,ft={},Y=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),dt=new ve().fromArray(Y),St=new ve().fromArray(Z);function Et(U,ct,ht,Dt){let Ct=new Uint8Array(4),fe=r.createTexture();r.bindTexture(U,fe),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<ht;de++)n&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(ct,0,r.RGBA,1,1,Dt,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(ct+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return fe}let Gt={};Gt[r.TEXTURE_2D]=Et(r.TEXTURE_2D,r.TEXTURE_2D,1),Gt[r.TEXTURE_CUBE_MAP]=Et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Gt[r.TEXTURE_2D_ARRAY]=Et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Gt[r.TEXTURE_3D]=Et(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Xt(r.DEPTH_TEST),c.setFunc(Cr),$t(!1),P(ec),Xt(r.CULL_FACE),vt(ii);function Xt(U){f[U]!==!0&&(r.enable(U),f[U]=!0)}function It(U){f[U]!==!1&&(r.disable(U),f[U]=!1)}function ie(U,ct){return d[U]!==ct?(r.bindFramebuffer(U,ct),d[U]=ct,n&&(U===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ct),U===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ct)),!0):!1}function H(U,ct){let ht=x,Dt=!1;if(U)if(ht=p.get(ct),ht===void 0&&(ht=[],p.set(ct,ht)),U.isWebGLMultipleRenderTargets){let Ct=U.texture;if(ht.length!==Ct.length||ht[0]!==r.COLOR_ATTACHMENT0){for(let fe=0,de=Ct.length;fe<de;fe++)ht[fe]=r.COLOR_ATTACHMENT0+fe;ht.length=Ct.length,Dt=!0}}else ht[0]!==r.COLOR_ATTACHMENT0&&(ht[0]=r.COLOR_ATTACHMENT0,Dt=!0);else ht[0]!==r.BACK&&(ht[0]=r.BACK,Dt=!0);Dt&&(e.isWebGL2?r.drawBuffers(ht):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ht))}function Ze(U){return g!==U?(r.useProgram(U),g=U,!0):!1}let Rt={[Si]:r.FUNC_ADD,[Gu]:r.FUNC_SUBTRACT,[Vu]:r.FUNC_REVERSE_SUBTRACT};if(n)Rt[sc]=r.MIN,Rt[rc]=r.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&(Rt[sc]=U.MIN_EXT,Rt[rc]=U.MAX_EXT)}let zt={[Wu]:r.ZERO,[Xu]:r.ONE,[qu]:r.SRC_COLOR,[Ro]:r.SRC_ALPHA,[ju]:r.SRC_ALPHA_SATURATE,[Ju]:r.DST_COLOR,[$u]:r.DST_ALPHA,[Yu]:r.ONE_MINUS_SRC_COLOR,[Co]:r.ONE_MINUS_SRC_ALPHA,[Ku]:r.ONE_MINUS_DST_COLOR,[Zu]:r.ONE_MINUS_DST_ALPHA,[Qu]:r.CONSTANT_COLOR,[tf]:r.ONE_MINUS_CONSTANT_COLOR,[ef]:r.CONSTANT_ALPHA,[nf]:r.ONE_MINUS_CONSTANT_ALPHA};function vt(U,ct,ht,Dt,Ct,fe,de,Ne,Je,pe){if(U===ii){m===!0&&(It(r.BLEND),m=!1);return}if(m===!1&&(Xt(r.BLEND),m=!0),U!==Hu){if(U!==_||pe!==T){if((v!==Si||S!==Si)&&(r.blendEquation(r.FUNC_ADD),v=Si,S=Si),pe)switch(U){case si:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case as:r.blendFunc(r.ONE,r.ONE);break;case nc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ic:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case si:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case as:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case nc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ic:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,w=null,E=null,R=null,y.set(0,0,0),b=0,_=U,T=pe}return}Ct=Ct||ct,fe=fe||ht,de=de||Dt,(ct!==v||Ct!==S)&&(r.blendEquationSeparate(Rt[ct],Rt[Ct]),v=ct,S=Ct),(ht!==M||Dt!==w||fe!==E||de!==R)&&(r.blendFuncSeparate(zt[ht],zt[Dt],zt[fe],zt[de]),M=ht,w=Dt,E=fe,R=de),(Ne.equals(y)===!1||Je!==b)&&(r.blendColor(Ne.r,Ne.g,Ne.b,Je),y.copy(Ne),b=Je),_=U,T=!1}function be(U,ct){U.side===ye?It(r.CULL_FACE):Xt(r.CULL_FACE);let ht=U.side===rn;ct&&(ht=!ht),$t(ht),U.blending===si&&U.transparent===!1?vt(ii):vt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);let Dt=U.stencilWrite;l.setTest(Dt),Dt&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),V(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Xt(r.SAMPLE_ALPHA_TO_COVERAGE):It(r.SAMPLE_ALPHA_TO_COVERAGE)}function $t(U){L!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),L=U)}function P(U){U!==zu?(Xt(r.CULL_FACE),U!==B&&(U===ec?r.cullFace(r.BACK):U===ku?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):It(r.CULL_FACE),B=U}function A(U){U!==I&&(k&&r.lineWidth(U),I=U)}function V(U,ct,ht){U?(Xt(r.POLYGON_OFFSET_FILL),(N!==ct||F!==ht)&&(r.polygonOffset(ct,ht),N=ct,F=ht)):It(r.POLYGON_OFFSET_FILL)}function Q(U){U?Xt(r.SCISSOR_TEST):It(r.SCISSOR_TEST)}function j(U){U===void 0&&(U=r.TEXTURE0+O-1),et!==U&&(r.activeTexture(U),et=U)}function tt(U,ct,ht){ht===void 0&&(et===null?ht=r.TEXTURE0+O-1:ht=et);let Dt=ft[ht];Dt===void 0&&(Dt={type:void 0,texture:void 0},ft[ht]=Dt),(Dt.type!==U||Dt.texture!==ct)&&(et!==ht&&(r.activeTexture(ht),et=ht),r.bindTexture(U,ct||Gt[U]),Dt.type=U,Dt.texture=ct)}function bt(){let U=ft[et];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ut(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Zt(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(U){dt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),dt.copy(U))}function ae(U){St.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),St.copy(U))}function Ae(U,ct){let ht=u.get(ct);ht===void 0&&(ht=new WeakMap,u.set(ct,ht));let Dt=ht.get(U);Dt===void 0&&(Dt=r.getUniformBlockIndex(ct,U.name),ht.set(U,Dt))}function Kt(U,ct){let Dt=u.get(ct).get(U);h.get(ct)!==Dt&&(r.uniformBlockBinding(ct,Dt,U.__bindingPointIndex),h.set(ct,Dt))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},et=null,ft={},d={},p=new WeakMap,x=[],g=null,m=!1,_=null,v=null,M=null,w=null,S=null,E=null,R=null,y=new wt(0,0,0),b=0,T=!1,L=null,B=null,I=null,N=null,F=null,dt.set(0,0,r.canvas.width,r.canvas.height),St.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Xt,disable:It,bindFramebuffer:ie,drawBuffers:H,useProgram:Ze,setBlending:vt,setMaterial:be,setFlipSided:$t,setCullFace:P,setLineWidth:A,setPolygonOffset:V,setScissorTest:Q,activeTexture:j,bindTexture:tt,unbindTexture:bt,compressedTexImage2D:ut,compressedTexImage3D:xt,texImage2D:At,texImage3D:yt,updateUBOMapping:Ae,uniformBlockBinding:Kt,texStorage2D:ee,texStorage3D:Ot,texSubImage2D:Lt,texSubImage3D:Zt,compressedTexSubImage2D:K,compressedTexSubImage3D:ce,scissor:qt,viewport:ae,reset:at}}function Sg(r,t,e,n,i,s,a){let o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,A){return d?new OffscreenCanvas(P,A):Or("canvas")}function x(P,A,V,Q){let j=1;if((P.width>Q||P.height>Q)&&(j=Q/Math.max(P.width,P.height)),j<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let tt=A?No:Math.floor,bt=tt(j*P.width),ut=tt(j*P.height);u===void 0&&(u=p(bt,ut));let xt=V?p(bt,ut):u;return xt.width=bt,xt.height=ut,xt.getContext("2d").drawImage(P,0,0,bt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+bt+"x"+ut+")."),xt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function g(P){return Oc(P.width)&&Oc(P.height)}function m(P){return o?!1:P.wrapS!==wn||P.wrapT!==wn||P.minFilter!==Fe&&P.minFilter!==gn}function _(P,A){return P.generateMipmaps&&A&&P.minFilter!==Fe&&P.minFilter!==gn}function v(P){r.generateMipmap(P)}function M(P,A,V,Q,j=!1){if(o===!1)return A;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let tt=A;if(A===r.RED&&(V===r.FLOAT&&(tt=r.R32F),V===r.HALF_FLOAT&&(tt=r.R16F),V===r.UNSIGNED_BYTE&&(tt=r.R8)),A===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(tt=r.R8UI),V===r.UNSIGNED_SHORT&&(tt=r.R16UI),V===r.UNSIGNED_INT&&(tt=r.R32UI),V===r.BYTE&&(tt=r.R8I),V===r.SHORT&&(tt=r.R16I),V===r.INT&&(tt=r.R32I)),A===r.RG&&(V===r.FLOAT&&(tt=r.RG32F),V===r.HALF_FLOAT&&(tt=r.RG16F),V===r.UNSIGNED_BYTE&&(tt=r.RG8)),A===r.RGBA){let bt=j?Ir:he.getTransfer(Q);V===r.FLOAT&&(tt=r.RGBA32F),V===r.HALF_FLOAT&&(tt=r.RGBA16F),V===r.UNSIGNED_BYTE&&(tt=bt===xe?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function w(P,A,V){return _(P,V)===!0||P.isFramebufferTexture&&P.minFilter!==Fe&&P.minFilter!==gn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function S(P){return P===Fe||P===ac||P===Wa?r.NEAREST:r.LINEAR}function E(P){let A=P.target;A.removeEventListener("dispose",E),y(A),A.isVideoTexture&&h.delete(A)}function R(P){let A=P.target;A.removeEventListener("dispose",R),T(A)}function y(P){let A=n.get(P);if(A.__webglInit===void 0)return;let V=P.source,Q=f.get(V);if(Q){let j=Q[A.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(P),Object.keys(Q).length===0&&f.delete(V)}n.remove(P)}function b(P){let A=n.get(P);r.deleteTexture(A.__webglTexture);let V=P.source,Q=f.get(V);delete Q[A.__cacheKey],a.memory.textures--}function T(P){let A=P.texture,V=n.get(P),Q=n.get(A);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(V.__webglFramebuffer[j]))for(let tt=0;tt<V.__webglFramebuffer[j].length;tt++)r.deleteFramebuffer(V.__webglFramebuffer[j][tt]);else r.deleteFramebuffer(V.__webglFramebuffer[j]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[j])}else{if(Array.isArray(V.__webglFramebuffer))for(let j=0;j<V.__webglFramebuffer.length;j++)r.deleteFramebuffer(V.__webglFramebuffer[j]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let j=0;j<V.__webglColorRenderbuffer.length;j++)V.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[j]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let j=0,tt=A.length;j<tt;j++){let bt=n.get(A[j]);bt.__webglTexture&&(r.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(A[j])}n.remove(A),n.remove(P)}let L=0;function B(){L=0}function I(){let P=L;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function N(P){let A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function F(P,A){let V=n.get(P);if(P.isVideoTexture&&be(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){let Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(V,P,A);return}}e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+A)}function O(P,A){let V=n.get(P);if(P.version>0&&V.__version!==P.version){dt(V,P,A);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+A)}function k(P,A){let V=n.get(P);if(P.version>0&&V.__version!==P.version){dt(V,P,A);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+A)}function X(P,A){let V=n.get(P);if(P.version>0&&V.__version!==P.version){St(V,P,A);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+A)}let $={[li]:r.REPEAT,[wn]:r.CLAMP_TO_EDGE,[Io]:r.MIRRORED_REPEAT},et={[Fe]:r.NEAREST,[ac]:r.NEAREST_MIPMAP_NEAREST,[Wa]:r.NEAREST_MIPMAP_LINEAR,[gn]:r.LINEAR,[yf]:r.LINEAR_MIPMAP_NEAREST,[Bs]:r.LINEAR_MIPMAP_LINEAR},ft={[Pf]:r.NEVER,[Bf]:r.ALWAYS,[Lf]:r.LESS,[$h]:r.LEQUAL,[If]:r.EQUAL,[Nf]:r.GEQUAL,[Df]:r.GREATER,[Uf]:r.NOTEQUAL};function Y(P,A,V){if(V?(r.texParameteri(P,r.TEXTURE_WRAP_S,$[A.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,$[A.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,$[A.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,et[A.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,et[A.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(A.wrapS!==wn||A.wrapT!==wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,S(A.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,S(A.minFilter)),A.minFilter!==Fe&&A.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ft[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Q=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Fe||A.minFilter!==Wa&&A.minFilter!==Bs||A.type===ni&&t.has("OES_texture_float_linear")===!1||o===!1&&A.type===Os&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(r.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Z(P,A){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",E));let Q=A.source,j=f.get(Q);j===void 0&&(j={},f.set(Q,j));let tt=N(A);if(tt!==P.__cacheKey){j[tt]===void 0&&(j[tt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),j[tt].usedTimes++;let bt=j[P.__cacheKey];bt!==void 0&&(j[P.__cacheKey].usedTimes--,bt.usedTimes===0&&b(A)),P.__cacheKey=tt,P.__webglTexture=j[tt].texture}return V}function dt(P,A,V){let Q=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Q=r.TEXTURE_3D);let j=Z(P,A),tt=A.source;e.bindTexture(Q,P.__webglTexture,r.TEXTURE0+V);let bt=n.get(tt);if(tt.version!==bt.__version||j===!0){e.activeTexture(r.TEXTURE0+V);let ut=he.getPrimaries(he.workingColorSpace),xt=A.colorSpace===xn?null:he.getPrimaries(A.colorSpace),Lt=A.colorSpace===xn||ut===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let Zt=m(A)&&g(A.image)===!1,K=x(A.image,Zt,!1,i.maxTextureSize);K=$t(A,K);let ce=g(K)||o,ee=s.convert(A.format,A.colorSpace),Ot=s.convert(A.type),At=M(A.internalFormat,ee,Ot,A.colorSpace,A.isVideoTexture);Y(Q,A,ce);let yt,qt=A.mipmaps,ae=o&&A.isVideoTexture!==!0&&At!==Wh,Ae=bt.__version===void 0||j===!0,Kt=w(A,K,ce);if(A.isDepthTexture)At=r.DEPTH_COMPONENT,o?A.type===ni?At=r.DEPTH_COMPONENT32F:A.type===ei?At=r.DEPTH_COMPONENT24:A.type===Ti?At=r.DEPTH24_STENCIL8:At=r.DEPTH_COMPONENT16:A.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ai&&At===r.DEPTH_COMPONENT&&A.type!==vl&&A.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ei,Ot=s.convert(A.type)),A.format===cs&&At===r.DEPTH_COMPONENT&&(At=r.DEPTH_STENCIL,A.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ti,Ot=s.convert(A.type))),Ae&&(ae?e.texStorage2D(r.TEXTURE_2D,1,At,K.width,K.height):e.texImage2D(r.TEXTURE_2D,0,At,K.width,K.height,0,ee,Ot,null));else if(A.isDataTexture)if(qt.length>0&&ce){ae&&Ae&&e.texStorage2D(r.TEXTURE_2D,Kt,At,qt[0].width,qt[0].height);for(let at=0,U=qt.length;at<U;at++)yt=qt[at],ae?e.texSubImage2D(r.TEXTURE_2D,at,0,0,yt.width,yt.height,ee,Ot,yt.data):e.texImage2D(r.TEXTURE_2D,at,At,yt.width,yt.height,0,ee,Ot,yt.data);A.generateMipmaps=!1}else ae?(Ae&&e.texStorage2D(r.TEXTURE_2D,Kt,At,K.width,K.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,K.width,K.height,ee,Ot,K.data)):e.texImage2D(r.TEXTURE_2D,0,At,K.width,K.height,0,ee,Ot,K.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ae&&Ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Kt,At,qt[0].width,qt[0].height,K.depth);for(let at=0,U=qt.length;at<U;at++)yt=qt[at],A.format!==Tn?ee!==null?ae?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,yt.width,yt.height,K.depth,ee,yt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,at,At,yt.width,yt.height,K.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?e.texSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,yt.width,yt.height,K.depth,ee,Ot,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,at,At,yt.width,yt.height,K.depth,0,ee,Ot,yt.data)}else{ae&&Ae&&e.texStorage2D(r.TEXTURE_2D,Kt,At,qt[0].width,qt[0].height);for(let at=0,U=qt.length;at<U;at++)yt=qt[at],A.format!==Tn?ee!==null?ae?e.compressedTexSubImage2D(r.TEXTURE_2D,at,0,0,yt.width,yt.height,ee,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,at,At,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?e.texSubImage2D(r.TEXTURE_2D,at,0,0,yt.width,yt.height,ee,Ot,yt.data):e.texImage2D(r.TEXTURE_2D,at,At,yt.width,yt.height,0,ee,Ot,yt.data)}else if(A.isDataArrayTexture)ae?(Ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Kt,At,K.width,K.height,K.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ee,Ot,K.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,At,K.width,K.height,K.depth,0,ee,Ot,K.data);else if(A.isData3DTexture)ae?(Ae&&e.texStorage3D(r.TEXTURE_3D,Kt,At,K.width,K.height,K.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ee,Ot,K.data)):e.texImage3D(r.TEXTURE_3D,0,At,K.width,K.height,K.depth,0,ee,Ot,K.data);else if(A.isFramebufferTexture){if(Ae)if(ae)e.texStorage2D(r.TEXTURE_2D,Kt,At,K.width,K.height);else{let at=K.width,U=K.height;for(let ct=0;ct<Kt;ct++)e.texImage2D(r.TEXTURE_2D,ct,At,at,U,0,ee,Ot,null),at>>=1,U>>=1}}else if(qt.length>0&&ce){ae&&Ae&&e.texStorage2D(r.TEXTURE_2D,Kt,At,qt[0].width,qt[0].height);for(let at=0,U=qt.length;at<U;at++)yt=qt[at],ae?e.texSubImage2D(r.TEXTURE_2D,at,0,0,ee,Ot,yt):e.texImage2D(r.TEXTURE_2D,at,At,ee,Ot,yt);A.generateMipmaps=!1}else ae?(Ae&&e.texStorage2D(r.TEXTURE_2D,Kt,At,K.width,K.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,ee,Ot,K)):e.texImage2D(r.TEXTURE_2D,0,At,ee,Ot,K);_(A,ce)&&v(Q),bt.__version=tt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function St(P,A,V){if(A.image.length!==6)return;let Q=Z(P,A),j=A.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);let tt=n.get(j);if(j.version!==tt.__version||Q===!0){e.activeTexture(r.TEXTURE0+V);let bt=he.getPrimaries(he.workingColorSpace),ut=A.colorSpace===xn?null:he.getPrimaries(A.colorSpace),xt=A.colorSpace===xn||bt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Lt=A.isCompressedTexture||A.image[0].isCompressedTexture,Zt=A.image[0]&&A.image[0].isDataTexture,K=[];for(let at=0;at<6;at++)!Lt&&!Zt?K[at]=x(A.image[at],!1,!0,i.maxCubemapSize):K[at]=Zt?A.image[at].image:A.image[at],K[at]=$t(A,K[at]);let ce=K[0],ee=g(ce)||o,Ot=s.convert(A.format,A.colorSpace),At=s.convert(A.type),yt=M(A.internalFormat,Ot,At,A.colorSpace),qt=o&&A.isVideoTexture!==!0,ae=tt.__version===void 0||Q===!0,Ae=w(A,ce,ee);Y(r.TEXTURE_CUBE_MAP,A,ee);let Kt;if(Lt){qt&&ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,yt,ce.width,ce.height);for(let at=0;at<6;at++){Kt=K[at].mipmaps;for(let U=0;U<Kt.length;U++){let ct=Kt[U];A.format!==Tn?Ot!==null?qt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,U,0,0,ct.width,ct.height,Ot,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,U,yt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,U,0,0,ct.width,ct.height,Ot,At,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,U,yt,ct.width,ct.height,0,Ot,At,ct.data)}}}else{Kt=A.mipmaps,qt&&ae&&(Kt.length>0&&Ae++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,yt,K[0].width,K[0].height));for(let at=0;at<6;at++)if(Zt){qt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,K[at].width,K[at].height,Ot,At,K[at].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,yt,K[at].width,K[at].height,0,Ot,At,K[at].data);for(let U=0;U<Kt.length;U++){let ht=Kt[U].image[at].image;qt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,U+1,0,0,ht.width,ht.height,Ot,At,ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,U+1,yt,ht.width,ht.height,0,Ot,At,ht.data)}}else{qt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ot,At,K[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,yt,Ot,At,K[at]);for(let U=0;U<Kt.length;U++){let ct=Kt[U];qt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,U+1,0,0,Ot,At,ct.image[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,U+1,yt,Ot,At,ct.image[at])}}}_(A,ee)&&v(r.TEXTURE_CUBE_MAP),tt.__version=j.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Et(P,A,V,Q,j,tt){let bt=s.convert(V.format,V.colorSpace),ut=s.convert(V.type),xt=M(V.internalFormat,bt,ut,V.colorSpace);if(!n.get(A).__hasExternalTextures){let Zt=Math.max(1,A.width>>tt),K=Math.max(1,A.height>>tt);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,tt,xt,Zt,K,A.depth,0,bt,ut,null):e.texImage2D(j,tt,xt,Zt,K,0,bt,ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),vt(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,j,n.get(V).__webglTexture,0,zt(A)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,j,n.get(V).__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(P,A,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let Q=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(V||vt(A)){let j=A.depthTexture;j&&j.isDepthTexture&&(j.type===ni?Q=r.DEPTH_COMPONENT32F:j.type===ei&&(Q=r.DEPTH_COMPONENT24));let tt=zt(A);vt(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,Q,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Q,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){let Q=zt(A);V&&vt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,A.width,A.height):vt(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{let Q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let j=0;j<Q.length;j++){let tt=Q[j],bt=s.convert(tt.format,tt.colorSpace),ut=s.convert(tt.type),xt=M(tt.internalFormat,bt,ut,tt.colorSpace),Lt=zt(A);V&&vt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,xt,A.width,A.height):vt(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt,xt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,xt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);let Q=n.get(A.depthTexture).__webglTexture,j=zt(A);if(A.depthTexture.format===Ai)vt(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(A.depthTexture.format===cs)vt(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function It(P){let A=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Xt(A.__webglFramebuffer,P)}else if(V){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]=r.createRenderbuffer(),Gt(A.__webglDepthbuffer[Q],P,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),Gt(A.__webglDepthbuffer,P,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function ie(P,A,V){let Q=n.get(P);A!==void 0&&Et(Q.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&It(P)}function H(P){let A=P.texture,V=n.get(P),Q=n.get(A);P.addEventListener("dispose",R),P.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=A.version,a.memory.textures++);let j=P.isWebGLCubeRenderTarget===!0,tt=P.isWebGLMultipleRenderTargets===!0,bt=g(P)||o;if(j){V.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(o&&A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer[ut]=[];for(let xt=0;xt<A.mipmaps.length;xt++)V.__webglFramebuffer[ut][xt]=r.createFramebuffer()}else V.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer=[];for(let ut=0;ut<A.mipmaps.length;ut++)V.__webglFramebuffer[ut]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(tt)if(i.drawBuffers){let ut=P.texture;for(let xt=0,Lt=ut.length;xt<Lt;xt++){let Zt=n.get(ut[xt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&vt(P)===!1){let ut=tt?A:[A];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let xt=0;xt<ut.length;xt++){let Lt=ut[xt];V.__webglColorRenderbuffer[xt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[xt]);let Zt=s.convert(Lt.format,Lt.colorSpace),K=s.convert(Lt.type),ce=M(Lt.internalFormat,Zt,K,Lt.colorSpace,P.isXRRenderTarget===!0),ee=zt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,ce,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,V.__webglColorRenderbuffer[xt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Y(r.TEXTURE_CUBE_MAP,A,bt);for(let ut=0;ut<6;ut++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let xt=0;xt<A.mipmaps.length;xt++)Et(V.__webglFramebuffer[ut][xt],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,xt);else Et(V.__webglFramebuffer[ut],P,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);_(A,bt)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){let ut=P.texture;for(let xt=0,Lt=ut.length;xt<Lt;xt++){let Zt=ut[xt],K=n.get(Zt);e.bindTexture(r.TEXTURE_2D,K.__webglTexture),Y(r.TEXTURE_2D,Zt,bt),Et(V.__webglFramebuffer,P,Zt,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,0),_(Zt,bt)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?ut=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,Q.__webglTexture),Y(ut,A,bt),o&&A.mipmaps&&A.mipmaps.length>0)for(let xt=0;xt<A.mipmaps.length;xt++)Et(V.__webglFramebuffer[xt],P,A,r.COLOR_ATTACHMENT0,ut,xt);else Et(V.__webglFramebuffer,P,A,r.COLOR_ATTACHMENT0,ut,0);_(A,bt)&&v(ut),e.unbindTexture()}P.depthBuffer&&It(P)}function Ze(P){let A=g(P)||o,V=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let Q=0,j=V.length;Q<j;Q++){let tt=V[Q];if(_(tt,A)){let bt=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ut=n.get(tt).__webglTexture;e.bindTexture(bt,ut),v(bt),e.unbindTexture()}}}function Rt(P){if(o&&P.samples>0&&vt(P)===!1){let A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],V=P.width,Q=P.height,j=r.COLOR_BUFFER_BIT,tt=[],bt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=n.get(P),xt=P.isWebGLMultipleRenderTargets===!0;if(xt)for(let Lt=0;Lt<A.length;Lt++)e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Lt=0;Lt<A.length;Lt++){tt.push(r.COLOR_ATTACHMENT0+Lt),P.depthBuffer&&tt.push(bt);let Zt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Zt===!1&&(P.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),xt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ut.__webglColorRenderbuffer[Lt]),Zt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[bt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[bt])),xt){let K=n.get(A[Lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,K,0)}r.blitFramebuffer(0,0,V,Q,0,0,V,Q,j,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xt)for(let Lt=0;Lt<A.length;Lt++){e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,ut.__webglColorRenderbuffer[Lt]);let Zt=n.get(A[Lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,Zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function zt(P){return Math.min(i.maxSamples,P.samples)}function vt(P){let A=n.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function be(P){let A=a.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function $t(P,A){let V=P.colorSpace,Q=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Do||V!==Gn&&V!==xn&&(he.getTransfer(V)===xe?o===!1?t.has("EXT_sRGB")===!0&&Q===Tn?(P.format=Do,P.minFilter=gn,P.generateMipmaps=!1):A=Fr.sRGBToLinear(A):(Q!==Tn||j!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),A}this.allocateTextureUnit=I,this.resetTextureUnits=B,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=ie,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=vt}function wg(r,t,e){let n=e.isWebGL2;function i(s,a=xn){let o,c=he.getTransfer(a);if(s===ai)return r.UNSIGNED_BYTE;if(s===zh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===kh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===_f)return r.BYTE;if(s===vf)return r.SHORT;if(s===vl)return r.UNSIGNED_SHORT;if(s===Fh)return r.INT;if(s===ei)return r.UNSIGNED_INT;if(s===ni)return r.FLOAT;if(s===Os)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===bf)return r.ALPHA;if(s===Tn)return r.RGBA;if(s===Mf)return r.LUMINANCE;if(s===Ef)return r.LUMINANCE_ALPHA;if(s===Ai)return r.DEPTH_COMPONENT;if(s===cs)return r.DEPTH_STENCIL;if(s===Do)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Sf)return r.RED;if(s===Hh)return r.RED_INTEGER;if(s===wf)return r.RG;if(s===Gh)return r.RG_INTEGER;if(s===Vh)return r.RGBA_INTEGER;if(s===Xa||s===qa||s===Ya||s===$a)if(c===xe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Xa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Xa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ya)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$a)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===oc||s===lc||s===cc||s===hc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===oc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===uc||s===fc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===uc)return c===xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===fc)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===dc||s===pc||s===mc||s===gc||s===xc||s===yc||s===_c||s===vc||s===bc||s===Mc||s===Ec||s===Sc||s===wc||s===Tc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===dc)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pc)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mc)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gc)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xc)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yc)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_c)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vc)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bc)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mc)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ec)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sc)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wc)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Tc)return c===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Za||s===Ac||s===Rc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Za)return c===xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ac)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Tf||s===Cc||s===Pc||s===Lc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Za)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Cc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ti?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var $o=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},te=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tg={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zo=class extends ci{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,x=e.getContextAttributes(),g=null,m=null,_=[],v=[],M=new mt,w=null,S=new qe;S.layers.enable(1),S.viewport=new ve;let E=new qe;E.layers.enable(2),E.viewport=new ve;let R=[S,E],y=new $o;y.layers.enable(1),y.layers.enable(2);let b=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=_[Y];return Z===void 0&&(Z=new Ds,_[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=_[Y];return Z===void 0&&(Z=new Ds,_[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=_[Y];return Z===void 0&&(Z=new Ds,_[Y]=Z),Z.getHandSpace()};function L(Y){let Z=v.indexOf(Y.inputSource);if(Z===-1)return;let dt=_[Z];dt!==void 0&&(dt.update(Y.inputSource,Y.frame,l||a),dt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",I);for(let Y=0;Y<_.length;Y++){let Z=v[Y];Z!==null&&(v[Y]=null,_[Y].disconnect(Z))}b=null,T=null,t.setRenderTarget(g),d=null,f=null,u=null,i=null,m=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",B),i.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Z={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Vn(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Z=null,dt=null,St=null;x.depth&&(St=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=x.stencil?cs:Ai,dt=x.stencil?Ti:ei);let Et={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Et),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),m=new Vn(f.textureWidth,f.textureHeight,{format:Tn,type:ai,depthTexture:new $r(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Gt=t.properties.get(m);Gt.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ft.setContext(i),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(Y){for(let Z=0;Z<Y.removed.length;Z++){let dt=Y.removed[Z],St=v.indexOf(dt);St>=0&&(v[St]=null,_[St].disconnect(dt))}for(let Z=0;Z<Y.added.length;Z++){let dt=Y.added[Z],St=v.indexOf(dt);if(St===-1){for(let Gt=0;Gt<_.length;Gt++)if(Gt>=v.length){v.push(dt),St=Gt;break}else if(v[Gt]===null){v[Gt]=dt,St=Gt;break}if(St===-1)break}let Et=_[St];Et&&Et.connect(dt)}}let N=new D,F=new D;function O(Y,Z,dt){N.setFromMatrixPosition(Z.matrixWorld),F.setFromMatrixPosition(dt.matrixWorld);let St=N.distanceTo(F),Et=Z.projectionMatrix.elements,Gt=dt.projectionMatrix.elements,Xt=Et[14]/(Et[10]-1),It=Et[14]/(Et[10]+1),ie=(Et[9]+1)/Et[5],H=(Et[9]-1)/Et[5],Ze=(Et[8]-1)/Et[0],Rt=(Gt[8]+1)/Gt[0],zt=Xt*Ze,vt=Xt*Rt,be=St/(-Ze+Rt),$t=be*-Ze;Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($t),Y.translateZ(be),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let P=Xt+be,A=It+be,V=zt-$t,Q=vt+(St-$t),j=ie*It/A*P,tt=H*It/A*P;Y.projectionMatrix.makePerspective(V,Q,j,tt,P,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function k(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;y.near=E.near=S.near=Y.near,y.far=E.far=S.far=Y.far,(b!==y.near||T!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,T=y.far);let Z=Y.parent,dt=y.cameras;k(y,Z);for(let St=0;St<dt.length;St++)k(dt[St],Z);dt.length===2?O(y,S,E):y.projectionMatrix.copy(S.projectionMatrix),X(Y,y,Z)};function X(Y,Z,dt){dt===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(dt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Uo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)};let $=null;function et(Y,Z){if(h=Z.getViewerPose(l||a),p=Z,h!==null){let dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(m,d.framebuffer),t.setRenderTarget(m));let St=!1;dt.length!==y.cameras.length&&(y.cameras.length=0,St=!0);for(let Et=0;Et<dt.length;Et++){let Gt=dt[Et],Xt=null;if(d!==null)Xt=d.getViewport(Gt);else{let ie=u.getViewSubImage(f,Gt);Xt=ie.viewport,Et===0&&(t.setRenderTargetTextures(m,ie.colorTexture,f.ignoreDepthValues?void 0:ie.depthStencilTexture),t.setRenderTarget(m))}let It=R[Et];It===void 0&&(It=new qe,It.layers.enable(Et),It.viewport=new ve,R[Et]=It),It.matrix.fromArray(Gt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Gt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Et===0&&(y.matrix.copy(It.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),St===!0&&y.cameras.push(It)}}for(let dt=0;dt<_.length;dt++){let St=v[dt],Et=_[dt];St!==null&&Et!==void 0&&Et.update(St,Z,l||a)}$&&$(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),p=null}let ft=new jh;ft.setAnimationLoop(et),this.setAnimationLoop=function(Y){$=Y},this.dispose=function(){}}};function Ag(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Kh(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,M)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,_,v):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let v=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*v,e(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,_,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),t.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Rg(r,t,e,n){let i={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,v){let M=v.program;n.uniformBlockBinding(_,M)}function l(_,v){let M=i[_.id];M===void 0&&(p(_),M=h(_),i[_.id]=M,_.addEventListener("dispose",g));let w=v.program;n.updateUBOMapping(_,w);let S=t.render.frame;s[_.id]!==S&&(f(_),s[_.id]=S)}function h(_){let v=u();_.__bindingPointIndex=v;let M=r.createBuffer(),w=_.__size,S=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,w,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=i[_.id],M=_.uniforms,w=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let S=0,E=M.length;S<E;S++){let R=Array.isArray(M[S])?M[S]:[M[S]];for(let y=0,b=R.length;y<b;y++){let T=R[y];if(d(T,S,y,w)===!0){let L=T.__offset,B=Array.isArray(T.value)?T.value:[T.value],I=0;for(let N=0;N<B.length;N++){let F=B[N],O=x(F);typeof F=="number"||typeof F=="boolean"?(T.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,L+I,T.__data)):F.isMatrix3?(T.__data[0]=F.elements[0],T.__data[1]=F.elements[1],T.__data[2]=F.elements[2],T.__data[3]=0,T.__data[4]=F.elements[3],T.__data[5]=F.elements[4],T.__data[6]=F.elements[5],T.__data[7]=0,T.__data[8]=F.elements[6],T.__data[9]=F.elements[7],T.__data[10]=F.elements[8],T.__data[11]=0):(F.toArray(T.__data,I),I+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(_,v,M,w){let S=_.value,E=v+"_"+M;if(w[E]===void 0)return typeof S=="number"||typeof S=="boolean"?w[E]=S:w[E]=S.clone(),!0;{let R=w[E];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return w[E]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function p(_){let v=_.uniforms,M=0,w=16;for(let E=0,R=v.length;E<R;E++){let y=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,T=y.length;b<T;b++){let L=y[b],B=Array.isArray(L.value)?L.value:[L.value];for(let I=0,N=B.length;I<N;I++){let F=B[I],O=x(F),k=M%w;k!==0&&w-k<O.boundary&&(M+=w-k),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=O.storage}}}let S=M%w;return S>0&&(M+=w-S),_.__size=M,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(let _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:c,update:l,dispose:m}}var ks=class{constructor(t={}){let{canvas:e=Ff(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),p=new Int32Array(4),x=null,g=null,m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this._useLegacyLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;let v=this,M=!1,w=0,S=0,E=null,R=-1,y=null,b=new ve,T=new ve,L=null,B=new wt(0),I=0,N=e.width,F=e.height,O=1,k=null,X=null,$=new ve(0,0,N,F),et=new ve(0,0,N,F),ft=!1,Y=new zs,Z=!1,dt=!1,St=null,Et=new oe,Gt=new mt,Xt=new D,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return E===null?O:1}let H=n;function Ze(C,z){for(let W=0;W<C.length;W++){let q=C[W],G=e.getContext(q,z);if(G!==null)return G}return null}try{let C={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",ct,!1),H===null){let z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),H=Ze(z,C),H===null)throw Ze(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Rt,zt,vt,be,$t,P,A,V,Q,j,tt,bt,ut,xt,Lt,Zt,K,ce,ee,Ot,At,yt,qt,ae;function Ae(){Rt=new Y0(H),zt=new H0(H,Rt,t),Rt.init(zt),yt=new wg(H,Rt,zt),vt=new Eg(H,Rt,zt),be=new J0(H),$t=new ug,P=new Sg(H,Rt,vt,$t,zt,yt,be),A=new V0(v),V=new q0(v),Q=new sd(H,zt),qt=new z0(H,Rt,Q,zt),j=new $0(H,Q,be,qt),tt=new tm(H,j,Q,be),ee=new Q0(H,zt,P),Zt=new G0($t),bt=new hg(v,A,V,Rt,zt,qt,Zt),ut=new Ag(v,$t),xt=new dg,Lt=new _g(Rt,zt),ce=new F0(v,A,V,vt,tt,f,c),K=new Mg(v,tt,zt),ae=new Rg(H,be,zt,vt),Ot=new k0(H,Rt,be,zt),At=new Z0(H,Rt,be,zt),be.programs=bt.programs,v.capabilities=zt,v.extensions=Rt,v.properties=$t,v.renderLists=xt,v.shadowMap=K,v.state=vt,v.info=be}Ae();let Kt=new Zo(v,H);this.xr=Kt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let C=Rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(N,F,!1))},this.getSize=function(C){return C.set(N,F)},this.setSize=function(C,z,W=!0){if(Kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,F=z,e.width=Math.floor(C*O),e.height=Math.floor(z*O),W===!0&&(e.style.width=C+"px",e.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(N*O,F*O).floor()},this.setDrawingBufferSize=function(C,z,W){N=C,F=z,O=W,e.width=Math.floor(C*W),e.height=Math.floor(z*W),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy($)},this.setViewport=function(C,z,W,q){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,z,W,q),vt.viewport(b.copy($).multiplyScalar(O).floor())},this.getScissor=function(C){return C.copy(et)},this.setScissor=function(C,z,W,q){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,z,W,q),vt.scissor(T.copy(et).multiplyScalar(O).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(C){vt.setScissorTest(ft=C)},this.setOpaqueSort=function(C){k=C},this.setTransparentSort=function(C){X=C},this.getClearColor=function(C){return C.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(C=!0,z=!0,W=!0){let q=0;if(C){let G=!1;if(E!==null){let pt=E.texture.format;G=pt===Vh||pt===Gh||pt===Hh}if(G){let pt=E.texture.type,Mt=pt===ai||pt===ei||pt===vl||pt===Ti||pt===zh||pt===kh,Pt=ce.getClearColor(),Nt=ce.getClearAlpha(),Jt=Pt.r,kt=Pt.g,Vt=Pt.b;Mt?(d[0]=Jt,d[1]=kt,d[2]=Vt,d[3]=Nt,H.clearBufferuiv(H.COLOR,0,d)):(p[0]=Jt,p[1]=kt,p[2]=Vt,p[3]=Nt,H.clearBufferiv(H.COLOR,0,p))}else q|=H.COLOR_BUFFER_BIT}z&&(q|=H.DEPTH_BUFFER_BIT),W&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),xt.dispose(),Lt.dispose(),$t.dispose(),A.dispose(),V.dispose(),tt.dispose(),qt.dispose(),ae.dispose(),bt.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",Je),Kt.removeEventListener("sessionend",pe),St&&(St.dispose(),St=null),Ke.stop()};function at(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let C=be.autoReset,z=K.enabled,W=K.autoUpdate,q=K.needsUpdate,G=K.type;Ae(),be.autoReset=C,K.enabled=z,K.autoUpdate=W,K.needsUpdate=q,K.type=G}function ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ht(C){let z=C.target;z.removeEventListener("dispose",ht),Dt(z)}function Dt(C){Ct(C),$t.remove(C)}function Ct(C){let z=$t.get(C).programs;z!==void 0&&(z.forEach(function(W){bt.releaseProgram(W)}),C.isShaderMaterial&&bt.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,W,q,G,pt){z===null&&(z=It);let Mt=G.isMesh&&G.matrixWorld.determinant()<0,Pt=Nu(C,z,W,q,G);vt.setMaterial(q,Mt);let Nt=W.index,Jt=1;if(q.wireframe===!0){if(Nt=j.getWireframeAttribute(W),Nt===void 0)return;Jt=2}let kt=W.drawRange,Vt=W.attributes.position,Pe=kt.start*Jt,on=(kt.start+kt.count)*Jt;pt!==null&&(Pe=Math.max(Pe,pt.start*Jt),on=Math.min(on,(pt.start+pt.count)*Jt)),Nt!==null?(Pe=Math.max(Pe,0),on=Math.min(on,Nt.count)):Vt!=null&&(Pe=Math.max(Pe,0),on=Math.min(on,Vt.count));let Be=on-Pe;if(Be<0||Be===1/0)return;qt.setup(G,q,Pt,W,Nt);let Un,Me=Ot;if(Nt!==null&&(Un=Q.get(Nt),Me=At,Me.setIndex(Un)),G.isMesh)q.wireframe===!0?(vt.setLineWidth(q.wireframeLinewidth*ie()),Me.setMode(H.LINES)):Me.setMode(H.TRIANGLES);else if(G.isLine){let jt=q.linewidth;jt===void 0&&(jt=1),vt.setLineWidth(jt*ie()),G.isLineSegments?Me.setMode(H.LINES):G.isLineLoop?Me.setMode(H.LINE_LOOP):Me.setMode(H.LINE_STRIP)}else G.isPoints?Me.setMode(H.POINTS):G.isSprite&&Me.setMode(H.TRIANGLES);if(G.isBatchedMesh)Me.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Me.renderInstances(Pe,Be,G.count);else if(W.isInstancedBufferGeometry){let jt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ka=Math.min(W.instanceCount,jt);Me.renderInstances(Pe,Be,ka)}else Me.render(Pe,Be)};function fe(C,z,W){C.transparent===!0&&C.side===ye&&C.forceSinglePass===!1?(C.side=rn,C.needsUpdate=!0,tr(C,z,W),C.side=oi,C.needsUpdate=!0,tr(C,z,W),C.side=ye):tr(C,z,W)}this.compile=function(C,z,W=null){W===null&&(W=C),g=Lt.get(W),g.init(),_.push(g),W.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),C!==W&&C.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights(v._useLegacyLights);let q=new Set;return C.traverse(function(G){let pt=G.material;if(pt)if(Array.isArray(pt))for(let Mt=0;Mt<pt.length;Mt++){let Pt=pt[Mt];fe(Pt,W,G),q.add(Pt)}else fe(pt,W,G),q.add(pt)}),_.pop(),g=null,q},this.compileAsync=function(C,z,W=null){let q=this.compile(C,z,W);return new Promise(G=>{function pt(){if(q.forEach(function(Mt){$t.get(Mt).currentProgram.isReady()&&q.delete(Mt)}),q.size===0){G(C);return}setTimeout(pt,10)}Rt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let de=null;function Ne(C){de&&de(C)}function Je(){Ke.stop()}function pe(){Ke.start()}let Ke=new jh;Ke.setAnimationLoop(Ne),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(C){de=C,Kt.setAnimationLoop(C),C===null?Ke.stop():Ke.start()},Kt.addEventListener("sessionstart",Je),Kt.addEventListener("sessionend",pe),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(z),z=Kt.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,z,E),g=Lt.get(C,_.length),g.init(),_.push(g),Et.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(Et),dt=this.localClippingEnabled,Z=Zt.init(this.clippingPlanes,dt),x=xt.get(C,m.length),x.init(),m.push(x),Cn(C,z,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(k,X),this.info.render.frame++,Z===!0&&Zt.beginShadows();let W=g.state.shadowsArray;if(K.render(W,C,z),Z===!0&&Zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(x,C),g.setupLights(v._useLegacyLights),z.isArrayCamera){let q=z.cameras;for(let G=0,pt=q.length;G<pt;G++){let Mt=q[G];Zl(x,C,Mt,Mt.viewport)}}else Zl(x,C,z);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(v,C,z),qt.resetDefaultState(),R=-1,y=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Cn(C,z,W,q){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){q&&Xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Et);let Mt=tt.update(C),Pt=C.material;Pt.visible&&x.push(C,Mt,Pt,W,Xt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){let Mt=tt.update(C),Pt=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Xt.copy(C.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Xt.copy(Mt.boundingSphere.center)),Xt.applyMatrix4(C.matrixWorld).applyMatrix4(Et)),Array.isArray(Pt)){let Nt=Mt.groups;for(let Jt=0,kt=Nt.length;Jt<kt;Jt++){let Vt=Nt[Jt],Pe=Pt[Vt.materialIndex];Pe&&Pe.visible&&x.push(C,Mt,Pe,W,Xt.z,Vt)}}else Pt.visible&&x.push(C,Mt,Pt,W,Xt.z,null)}}let pt=C.children;for(let Mt=0,Pt=pt.length;Mt<Pt;Mt++)Cn(pt[Mt],z,W,q)}function Zl(C,z,W,q){let G=C.opaque,pt=C.transmissive,Mt=C.transparent;g.setupLightsView(W),Z===!0&&Zt.setGlobalState(v.clippingPlanes,W),pt.length>0&&Uu(G,pt,z,W),q&&vt.viewport(b.copy(q)),G.length>0&&Qs(G,z,W),pt.length>0&&Qs(pt,z,W),Mt.length>0&&Qs(Mt,z,W),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Uu(C,z,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let pt=zt.isWebGL2;St===null&&(St=new Vn(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")?Os:ai,minFilter:Bs,samples:pt?4:0})),v.getDrawingBufferSize(Gt),pt?St.setSize(Gt.x,Gt.y):St.setSize(No(Gt.x),No(Gt.y));let Mt=v.getRenderTarget();v.setRenderTarget(St),v.getClearColor(B),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();let Pt=v.toneMapping;v.toneMapping=ri,Qs(C,W,q),P.updateMultisampleRenderTarget(St),P.updateRenderTargetMipmap(St);let Nt=!1;for(let Jt=0,kt=z.length;Jt<kt;Jt++){let Vt=z[Jt],Pe=Vt.object,on=Vt.geometry,Be=Vt.material,Un=Vt.group;if(Be.side===ye&&Pe.layers.test(q.layers)){let Me=Be.side;Be.side=rn,Be.needsUpdate=!0,Jl(Pe,W,q,on,Be,Un),Be.side=Me,Be.needsUpdate=!0,Nt=!0}}Nt===!0&&(P.updateMultisampleRenderTarget(St),P.updateRenderTargetMipmap(St)),v.setRenderTarget(Mt),v.setClearColor(B,I),v.toneMapping=Pt}function Qs(C,z,W){let q=z.isScene===!0?z.overrideMaterial:null;for(let G=0,pt=C.length;G<pt;G++){let Mt=C[G],Pt=Mt.object,Nt=Mt.geometry,Jt=q===null?Mt.material:q,kt=Mt.group;Pt.layers.test(W.layers)&&Jl(Pt,z,W,Nt,Jt,kt)}}function Jl(C,z,W,q,G,pt){C.onBeforeRender(v,z,W,q,G,pt),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(v,z,W,q,C,pt),G.transparent===!0&&G.side===ye&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,v.renderBufferDirect(W,z,q,G,C,pt),G.side=oi,G.needsUpdate=!0,v.renderBufferDirect(W,z,q,G,C,pt),G.side=ye):v.renderBufferDirect(W,z,q,G,C,pt),C.onAfterRender(v,z,W,q,G,pt)}function tr(C,z,W){z.isScene!==!0&&(z=It);let q=$t.get(C),G=g.state.lights,pt=g.state.shadowsArray,Mt=G.state.version,Pt=bt.getParameters(C,G.state,pt,z,W),Nt=bt.getProgramCacheKey(Pt),Jt=q.programs;q.environment=C.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(C.isMeshStandardMaterial?V:A).get(C.envMap||q.environment),Jt===void 0&&(C.addEventListener("dispose",ht),Jt=new Map,q.programs=Jt);let kt=Jt.get(Nt);if(kt!==void 0){if(q.currentProgram===kt&&q.lightsStateVersion===Mt)return jl(C,Pt),kt}else Pt.uniforms=bt.getUniforms(C),C.onBuild(W,Pt,v),C.onBeforeCompile(Pt,v),kt=bt.acquireProgram(Pt,Nt),Jt.set(Nt,kt),q.uniforms=Pt.uniforms;let Vt=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Vt.clippingPlanes=Zt.uniform),jl(C,Pt),q.needsLights=Ou(C),q.lightsStateVersion=Mt,q.needsLights&&(Vt.ambientLightColor.value=G.state.ambient,Vt.lightProbe.value=G.state.probe,Vt.directionalLights.value=G.state.directional,Vt.directionalLightShadows.value=G.state.directionalShadow,Vt.spotLights.value=G.state.spot,Vt.spotLightShadows.value=G.state.spotShadow,Vt.rectAreaLights.value=G.state.rectArea,Vt.ltc_1.value=G.state.rectAreaLTC1,Vt.ltc_2.value=G.state.rectAreaLTC2,Vt.pointLights.value=G.state.point,Vt.pointLightShadows.value=G.state.pointShadow,Vt.hemisphereLights.value=G.state.hemi,Vt.directionalShadowMap.value=G.state.directionalShadowMap,Vt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Vt.spotShadowMap.value=G.state.spotShadowMap,Vt.spotLightMatrix.value=G.state.spotLightMatrix,Vt.spotLightMap.value=G.state.spotLightMap,Vt.pointShadowMap.value=G.state.pointShadowMap,Vt.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=kt,q.uniformsList=null,kt}function Kl(C){if(C.uniformsList===null){let z=C.currentProgram.getUniforms();C.uniformsList=rs.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function jl(C,z){let W=$t.get(C);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Nu(C,z,W,q,G){z.isScene!==!0&&(z=It),P.resetTextureUnits();let pt=z.fog,Mt=q.isMeshStandardMaterial?z.environment:null,Pt=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Gn,Nt=(q.isMeshStandardMaterial?V:A).get(q.envMap||Mt),Jt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,kt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Vt=!!W.morphAttributes.position,Pe=!!W.morphAttributes.normal,on=!!W.morphAttributes.color,Be=ri;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Be=v.toneMapping);let Un=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Me=Un!==void 0?Un.length:0,jt=$t.get(q),ka=g.state.lights;if(Z===!0&&(dt===!0||C!==y)){let pn=C===y&&q.id===R;Zt.setState(q,C,pn)}let Re=!1;q.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==ka.state.version||jt.outputColorSpace!==Pt||G.isBatchedMesh&&jt.batching===!1||!G.isBatchedMesh&&jt.batching===!0||G.isInstancedMesh&&jt.instancing===!1||!G.isInstancedMesh&&jt.instancing===!0||G.isSkinnedMesh&&jt.skinning===!1||!G.isSkinnedMesh&&jt.skinning===!0||G.isInstancedMesh&&jt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&jt.instancingColor===!1&&G.instanceColor!==null||jt.envMap!==Nt||q.fog===!0&&jt.fog!==pt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Zt.numPlanes||jt.numIntersection!==Zt.numIntersection)||jt.vertexAlphas!==Jt||jt.vertexTangents!==kt||jt.morphTargets!==Vt||jt.morphNormals!==Pe||jt.morphColors!==on||jt.toneMapping!==Be||zt.isWebGL2===!0&&jt.morphTargetsCount!==Me)&&(Re=!0):(Re=!0,jt.__version=q.version);let xi=jt.currentProgram;Re===!0&&(xi=tr(q,z,G));let Ql=!1,Es=!1,Ha=!1,Ve=xi.getUniforms(),yi=jt.uniforms;if(vt.useProgram(xi.program)&&(Ql=!0,Es=!0,Ha=!0),q.id!==R&&(R=q.id,Es=!0),Ql||y!==C){Ve.setValue(H,"projectionMatrix",C.projectionMatrix),Ve.setValue(H,"viewMatrix",C.matrixWorldInverse);let pn=Ve.map.cameraPosition;pn!==void 0&&pn.setValue(H,Xt.setFromMatrixPosition(C.matrixWorld)),zt.logarithmicDepthBuffer&&Ve.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ve.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,Es=!0,Ha=!0)}if(G.isSkinnedMesh){Ve.setOptional(H,G,"bindMatrix"),Ve.setOptional(H,G,"bindMatrixInverse");let pn=G.skeleton;pn&&(zt.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Ve.setValue(H,"boneTexture",pn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Ve.setOptional(H,G,"batchingTexture"),Ve.setValue(H,"batchingTexture",G._matricesTexture,P));let Ga=W.morphAttributes;if((Ga.position!==void 0||Ga.normal!==void 0||Ga.color!==void 0&&zt.isWebGL2===!0)&&ee.update(G,W,xi),(Es||jt.receiveShadow!==G.receiveShadow)&&(jt.receiveShadow=G.receiveShadow,Ve.setValue(H,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(yi.envMap.value=Nt,yi.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Es&&(Ve.setValue(H,"toneMappingExposure",v.toneMappingExposure),jt.needsLights&&Bu(yi,Ha),pt&&q.fog===!0&&ut.refreshFogUniforms(yi,pt),ut.refreshMaterialUniforms(yi,q,O,F,St),rs.upload(H,Kl(jt),yi,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(rs.upload(H,Kl(jt),yi,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ve.setValue(H,"center",G.center),Ve.setValue(H,"modelViewMatrix",G.modelViewMatrix),Ve.setValue(H,"normalMatrix",G.normalMatrix),Ve.setValue(H,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let pn=q.uniformsGroups;for(let Va=0,Fu=pn.length;Va<Fu;Va++)if(zt.isWebGL2){let tc=pn[Va];ae.update(tc,xi),ae.bind(tc,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function Bu(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function Ou(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,z,W){$t.get(C.texture).__webglTexture=z,$t.get(C.depthTexture).__webglTexture=W;let q=$t.get(C);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,z){let W=$t.get(C);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,W=0){E=C,w=z,S=W;let q=!0,G=null,pt=!1,Mt=!1;if(C){let Nt=$t.get(C);Nt.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(H.FRAMEBUFFER,null),q=!1):Nt.__webglFramebuffer===void 0?P.setupRenderTarget(C):Nt.__hasExternalTextures&&P.rebindTextures(C,$t.get(C.texture).__webglTexture,$t.get(C.depthTexture).__webglTexture);let Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Mt=!0);let kt=$t.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(kt[z])?G=kt[z][W]:G=kt[z],pt=!0):zt.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?G=$t.get(C).__webglMultisampledFramebuffer:Array.isArray(kt)?G=kt[W]:G=kt,b.copy(C.viewport),T.copy(C.scissor),L=C.scissorTest}else b.copy($).multiplyScalar(O).floor(),T.copy(et).multiplyScalar(O).floor(),L=ft;if(vt.bindFramebuffer(H.FRAMEBUFFER,G)&&zt.drawBuffers&&q&&vt.drawBuffers(C,G),vt.viewport(b),vt.scissor(T),vt.setScissorTest(L),pt){let Nt=$t.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,Nt.__webglTexture,W)}else if(Mt){let Nt=$t.get(C.texture),Jt=z||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.__webglTexture,W||0,Jt)}R=-1},this.readRenderTargetPixels=function(C,z,W,q,G,pt,Mt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=$t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Mt!==void 0&&(Pt=Pt[Mt]),Pt){vt.bindFramebuffer(H.FRAMEBUFFER,Pt);try{let Nt=C.texture,Jt=Nt.format,kt=Nt.type;if(Jt!==Tn&&yt.convert(Jt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Vt=kt===Os&&(Rt.has("EXT_color_buffer_half_float")||zt.isWebGL2&&Rt.has("EXT_color_buffer_float"));if(kt!==ai&&yt.convert(kt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===ni&&(zt.isWebGL2||Rt.has("OES_texture_float")||Rt.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-q&&W>=0&&W<=C.height-G&&H.readPixels(z,W,q,G,yt.convert(Jt),yt.convert(kt),pt)}finally{let Nt=E!==null?$t.get(E).__webglFramebuffer:null;vt.bindFramebuffer(H.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(C,z,W=0){let q=Math.pow(2,-W),G=Math.floor(z.image.width*q),pt=Math.floor(z.image.height*q);P.setTexture2D(z,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,C.x,C.y,G,pt),vt.unbindTexture()},this.copyTextureToTexture=function(C,z,W,q=0){let G=z.image.width,pt=z.image.height,Mt=yt.convert(W.format),Pt=yt.convert(W.type);P.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),z.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,C.x,C.y,G,pt,Mt,Pt,z.image.data):z.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,C.x,C.y,z.mipmaps[0].width,z.mipmaps[0].height,Mt,z.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,q,C.x,C.y,Mt,Pt,z.image),q===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(C,z,W,q,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pt=C.max.x-C.min.x+1,Mt=C.max.y-C.min.y+1,Pt=C.max.z-C.min.z+1,Nt=yt.convert(q.format),Jt=yt.convert(q.type),kt;if(q.isData3DTexture)P.setTexture3D(q,0),kt=H.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)P.setTexture2DArray(q,0),kt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);let Vt=H.getParameter(H.UNPACK_ROW_LENGTH),Pe=H.getParameter(H.UNPACK_IMAGE_HEIGHT),on=H.getParameter(H.UNPACK_SKIP_PIXELS),Be=H.getParameter(H.UNPACK_SKIP_ROWS),Un=H.getParameter(H.UNPACK_SKIP_IMAGES),Me=W.isCompressedTexture?W.mipmaps[G]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Me.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Me.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(kt,G,z.x,z.y,z.z,pt,Mt,Pt,Nt,Jt,Me.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(kt,G,z.x,z.y,z.z,pt,Mt,Pt,Nt,Me.data)):H.texSubImage3D(kt,G,z.x,z.y,z.z,pt,Mt,Pt,Nt,Jt,Me),H.pixelStorei(H.UNPACK_ROW_LENGTH,Vt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pe),H.pixelStorei(H.UNPACK_SKIP_PIXELS,on),H.pixelStorei(H.UNPACK_SKIP_ROWS,Be),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Un),G===0&&q.generateMipmaps&&H.generateMipmap(kt),vt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),vt.unbindTexture()},this.resetState=function(){w=0,S=0,E=null,vt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===bl?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===ha?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ie?Ri:Xh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ri?Ie:Gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Jo=class extends ks{};Jo.prototype.isWebGL1Renderer=!0;var Zr=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Jr=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Hs=class extends me{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ts=new oe,bh=new oe,Er=[],Mh=new Wn,Cg=new oe,Cs=new lt,Ps=new Xn,fs=class extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Mh.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(Mh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Ps.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),t.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ts),bh.multiplyMatrices(n,ts),Cs.matrixWorld=bh,Cs.raycast(t,Er);for(let a=0,o=Er.length;a<o;a++){let c=Er[a];c.instanceId=s,c.object=this,e.push(c)}Er.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Hs(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ci=class extends qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Eh=new D,Sh=new D,wh=new oe,Mo=new Fs,Sr=new Xn,Ko=class extends ke{constructor(t=new se,e=new Ci){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Eh.fromBufferAttribute(e,i-1),Sh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Eh.distanceTo(Sh);t.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(i),Sr.radius+=s,t.ray.intersectsSphere(Sr)===!1)return;wh.copy(i).invert(),Mo.copy(t.ray).applyMatrix4(wh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new D,h=new D,u=new D,f=new D,d=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){let m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let v=m,M=_-1;v<M;v+=d){let w=p.getX(v),S=p.getX(v+1);if(l.fromBufferAttribute(g,w),h.fromBufferAttribute(g,S),Mo.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let R=t.ray.origin.distanceTo(f);R<t.near||R>t.far||e.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let v=m,M=_-1;v<M;v+=d){if(l.fromBufferAttribute(g,v),h.fromBufferAttribute(g,v+1),Mo.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let S=t.ray.origin.distanceTo(f);S<t.near||S>t.far||e.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},Th=new D,Ah=new D,ds=class extends Ko{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Th.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Th.distanceTo(Ah);t.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Gs=class extends qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rh=new oe,jo=new Fs,wr=new Xn,Tr=new D,ps=class extends ke{constructor(t=new se,e=new Gs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(i),wr.radius+=s,t.ray.intersectsSphere(wr)===!1)return;Rh.copy(i).invert(),jo.copy(t.ray).applyMatrix4(Rh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let p=f,x=d;p<x;p++){let g=l.getX(p);Tr.fromBufferAttribute(u,g),Ch(Tr,g,c,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,x=d;p<x;p++)Tr.fromBufferAttribute(u,p),Ch(Tr,p,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ch(r,t,e,n,i,s,a){let o=jo.distanceSqToPoint(r);if(o<e){let c=new D;jo.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var Kr=class extends yn{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=e||(a.isVector2?new mt:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,i=[],s=[],a=[],o=new D,c=new oe;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new D)}s[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ze(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,p))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(ze(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Vs=class extends _n{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let n=e||new mt,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Qo=class extends Vs{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Sl(){let r=0,t=0,e=0,n=0;function i(s,a,o,c){r=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+n*o}}}var Ar=new D,Eo=new Sl,So=new Sl,wo=new Sl,Ws=class extends _n{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){let n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(Ar.subVectors(i[0],i[1]).add(i[0]),l=Ar);let u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Ar.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Eo.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,x,g),So.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,x,g),wo.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Eo.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),So.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),wo.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Eo.calc(c),So.calc(c),wo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ph(r,t,e,n,i){let s=(n-t)*.5,a=(i-e)*.5,o=r*r,c=r*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*r+e}function Pg(r,t){let e=1-r;return e*e*t}function Lg(r,t){return 2*(1-r)*r*t}function Ig(r,t){return r*r*t}function Us(r,t,e,n){return Pg(r,t)+Lg(r,e)+Ig(r,n)}function Dg(r,t){let e=1-r;return e*e*e*t}function Ug(r,t){let e=1-r;return 3*e*e*r*t}function Ng(r,t){return 3*(1-r)*r*r*t}function Bg(r,t){return r*r*r*t}function Ns(r,t,e,n,i){return Dg(r,t)+Ug(r,e)+Ng(r,n)+Bg(r,i)}var jr=class extends _n{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ns(t,i.x,s.x,a.x,o.x),Ns(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},tl=class extends _n{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ns(t,i.x,s.x,a.x,o.x),Ns(t,i.y,s.y,a.y,o.y),Ns(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qr=class extends _n{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends _n{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends _n{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Us(t,i.x,s.x,a.x),Us(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nl=class extends _n{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Us(t,i.x,s.x,a.x),Us(t,i.y,s.y,a.y),Us(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Ph(o,c.x,l.x,h.x,u.x),Ph(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new mt().fromArray(i))}return this}},Lh=Object.freeze({__proto__:null,ArcCurve:Qo,CatmullRomCurve3:Ws,CubicBezierCurve:jr,CubicBezierCurve3:tl,EllipseCurve:Vs,LineCurve:Qr,LineCurve3:el,QuadraticBezierCurve:ta,QuadraticBezierCurve3:nl,SplineCurve:ea}),il=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Lh[i.type]().fromJSON(i))}return this}},sl=class extends il{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Qr(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new ta(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){let o=new jr(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ea(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,a,o,c),this}absellipse(t,e,n,i,s,a,o,c){let l=new Vs(t,e,n,i,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},rl=class r extends se{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ze(i,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/e,u=new D,f=new mt,d=new D,p=new D,x=new D,g=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(p)}for(let _=0;_<=e;_++){let v=n+_*h*i,M=Math.sin(v),w=Math.cos(v);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*M,u.y=t[S].y,u.z=t[S].x*w,a.push(u.x,u.y,u.z),f.x=_/e,f.y=S/(t.length-1),o.push(f.x,f.y);let E=c[3*S+0]*M,R=c[3*S+1],y=c[3*S+0]*w;l.push(E,R,y)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let M=v+_*t.length,w=M,S=M+t.length,E=M+t.length+1,R=M+1;s.push(w,S,R),s.push(E,R,S)}this.setIndex(s),this.setAttribute("position",new Ut(a,3)),this.setAttribute("uv",new Ut(o,2)),this.setAttribute("normal",new Ut(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},ms=class r extends rl{constructor(t=1,e=1,n=4,i=8){let s=new sl;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}},na=class r extends se{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],a=[],o=[],c=[],l=new D,h=new mt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ut(a,3)),this.setAttribute("normal",new Ut(o,3)),this.setAttribute("uv",new Ut(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Se=class r extends se{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],p=0,x=[],g=n/2,m=0;_(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ut(u,3)),this.setAttribute("normal",new Ut(f,3)),this.setAttribute("uv",new Ut(d,2));function _(){let M=new D,w=new D,S=0,E=(e-t)/n;for(let R=0;R<=s;R++){let y=[],b=R/s,T=b*(e-t)+t;for(let L=0;L<=i;L++){let B=L/i,I=B*c+o,N=Math.sin(I),F=Math.cos(I);w.x=T*N,w.y=-b*n+g,w.z=T*F,u.push(w.x,w.y,w.z),M.set(N,E,F).normalize(),f.push(M.x,M.y,M.z),d.push(B,1-b),y.push(p++)}x.push(y)}for(let R=0;R<i;R++)for(let y=0;y<s;y++){let b=x[y][R],T=x[y+1][R],L=x[y+1][R+1],B=x[y][R+1];h.push(b,T,B),h.push(T,L,B),S+=6}l.addGroup(m,S,0),m+=S}function v(M){let w=p,S=new mt,E=new D,R=0,y=M===!0?t:e,b=M===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),p++;let T=p;for(let L=0;L<=i;L++){let I=L/i*c+o,N=Math.cos(I),F=Math.sin(I);E.x=y*F,E.y=g*b,E.z=y*N,u.push(E.x,E.y,E.z),f.push(0,b,0),S.x=N*.5+.5,S.y=F*.5*b+.5,d.push(S.x,S.y),p++}for(let L=0;L<i;L++){let B=w+L,I=T+L;M===!0?h.push(I,I+1,B):h.push(I+1,I,B),R+=3}l.addGroup(m,R,M===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},an=class r extends Se{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ia=class r extends se{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Ut(s,3)),this.setAttribute("normal",new Ut(s.slice(),3)),this.setAttribute("uv",new Ut(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let v=new D,M=new D,w=new D;for(let S=0;S<e.length;S+=3)d(e[S+0],v),d(e[S+1],M),d(e[S+2],w),c(v,M,w,_)}function c(_,v,M,w){let S=w+1,E=[];for(let R=0;R<=S;R++){E[R]=[];let y=_.clone().lerp(M,R/S),b=v.clone().lerp(M,R/S),T=S-R;for(let L=0;L<=T;L++)L===0&&R===S?E[R][L]=y:E[R][L]=y.clone().lerp(b,L/T)}for(let R=0;R<S;R++)for(let y=0;y<2*(S-R)-1;y++){let b=Math.floor(y/2);y%2===0?(f(E[R][b+1]),f(E[R+1][b]),f(E[R][b])):(f(E[R][b+1]),f(E[R+1][b+1]),f(E[R+1][b]))}}function l(_){let v=new D;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(_),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function h(){let _=new D;for(let v=0;v<s.length;v+=3){_.x=s[v+0],_.y=s[v+1],_.z=s[v+2];let M=g(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;a.push(M,1-w)}p(),u()}function u(){for(let _=0;_<a.length;_+=6){let v=a[_+0],M=a[_+2],w=a[_+4],S=Math.max(v,M,w),E=Math.min(v,M,w);S>.9&&E<.1&&(v<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),w<.2&&(a[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function d(_,v){let M=_*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function p(){let _=new D,v=new D,M=new D,w=new D,S=new mt,E=new mt,R=new mt;for(let y=0,b=0;y<s.length;y+=9,b+=6){_.set(s[y+0],s[y+1],s[y+2]),v.set(s[y+3],s[y+4],s[y+5]),M.set(s[y+6],s[y+7],s[y+8]),S.set(a[b+0],a[b+1]),E.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),w.copy(_).add(v).add(M).divideScalar(3);let T=g(w);x(S,b+0,_,T),x(E,b+2,v,T),x(R,b+4,M,T)}}function x(_,v,M,w){w<0&&_.x===1&&(a[v]=_.x-1),M.x===0&&M.z===0&&(a[v]=w/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var He=class r extends ia{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},gs=class r extends ia{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},sa=class r extends se{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=t,f=(e-t)/i,d=new D,p=new mt;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let m=s+g/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<i;x++){let g=x*(n+1);for(let m=0;m<n;m++){let _=m+g,v=_,M=_+n+1,w=_+n+2,S=_+1;o.push(v,M,S),o.push(M,w,S)}}this.setIndex(o),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(l,3)),this.setAttribute("uv",new Ut(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ue=class r extends se{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new D,f=new D,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let _=[],v=m/n,M=0;m===0&&a===0?M=.5/e:m===n&&c===Math.PI&&(M=-.5/e);for(let w=0;w<=e;w++){let S=w/e;u.x=-t*Math.cos(i+S*s)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(i+S*s)*Math.sin(a+v*o),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(S+M,1-v),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){let v=h[m][_+1],M=h[m][_],w=h[m+1][_],S=h[m+1][_+1];(m!==0||a>0)&&d.push(v,M,S),(m!==n-1||c<Math.PI)&&d.push(M,w,S)}this.setIndex(d),this.setAttribute("position",new Ut(p,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pi=class r extends se{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){let x=p/i*s,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){let x=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,_=(i+1)*d+p;a.push(x,g,_),a.push(g,m,_)}this.setIndex(a),this.setAttribute("position",new Ut(o,3)),this.setAttribute("normal",new Ut(c,3)),this.setAttribute("uv",new Ut(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Tt=class extends qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Rr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Og(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var xs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},al=class extends xs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ic,endingEnd:Ic}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dc:s=t,o=2*e-n;break;case Uc:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dc:a=t,c=2*n-e;break;case Uc:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*x+.5*p,M=d*g-d*x;for(let w=0;w!==o;++w)s[w]=m*a[h+w]+_*a[l+w]+v*a[c+w]+M*a[u+w];return s}},ol=class extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*h;return s}},ll=class extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},An=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rr(e,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rr(t.times,Array),values:Rr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new al(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Pr:e=this.InterpolantFactoryMethodDiscrete;break;case Lr:e=this.InterpolantFactoryMethodLinear;break;case Ja:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Lr;case this.InterpolantFactoryMethodSmooth:return Ja}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Og(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ja,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[d+p]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Lr;var Li=class extends An{};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Pr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends An{};cl.prototype.ValueTypeName="color";var hl=class extends An{};hl.prototype.ValueTypeName="number";var ul=class extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)Ln.slerpFlat(s,0,a,l-o,a,l,c);return s}},Xs=class extends An{InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.DefaultInterpolation=Lr;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends An{};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Pr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends An{};fl.prototype.ValueTypeName="vector";var dl=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},Fg=new dl,pl=class{constructor(t){this.manager=t!==void 0?t:Fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ra=class extends qs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},To=new oe,Ih=new D,Dh=new D,aa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ih),Dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dh),e.updateMatrixWorld(),To.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Uh=new oe,Ls=new D,Ao=new D,ml=class extends aa{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ls),Ao.copy(n.position),Ao.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ao),n.updateMatrixWorld(),i.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh)}},oa=class extends qs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ml}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},gl=class extends aa{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},la=class extends qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new gl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var wl="\\[\\]\\.:\\/",zg=new RegExp("["+wl+"]","g"),Tl="[^"+wl+"]",kg="[^"+wl.replace("\\.","")+"]",Hg=/((?:WC+[\/:])*)/.source.replace("WC",Tl),Gg=/(WCOD+)?/.source.replace("WCOD",kg),Vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),Wg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),Xg=new RegExp("^"+Hg+Gg+Vg+Wg+"$"),qg=["material","materials","bones","map"],xl=class{constructor(t,e,n){let i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zg,"")}static parseTrackName(t){let e=Xg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);qg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=xl;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ot=(r,t,e)=>Math.max(t,Math.min(e,r)),nt=(r,t,e)=>r+(t-r)*e,ge=(r,t,e)=>{let n=ot((e-r)/(t-r),0,1);return n*n*(3-2*n)},Bt=(r,t,e,n)=>nt(r,t,1-Math.exp(-e*n)),Al=Math.PI*2;function vn(r){let t=r>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function da(r,t){let e=Math.imul(r,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Di(r,t){let e=Math.floor(r),n=Math.floor(t),i=r-e,s=t-n,a=i*i*(3-2*i),o=s*s*(3-2*s);return nt(nt(da(e,n),da(e+1,n),a),nt(da(e,n+1),da(e+1,n+1),a),o)}var pa=(r,t)=>Di(r,t)*.6+Di(r*2.1+7.3,t*2.1+3.1)*.3+Di(r*4.3+1.7,t*4.3+9.2)*.1;function Yg(r,t,e,n,i,s){let a=i-e,o=s-n,c=a*a+o*o,l=c>0?((r-e)*a+(t-n)*o)/c:0;l=ot(l,0,1);let h=e+a*l-r,u=n+o*l-t;return Math.sqrt(h*h+u*u)}function ma(r,t,e){let n=1e9;for(let i=0;i<e.length-1;i++)n=Math.min(n,Yg(r,t,e[i][0],e[i][1],e[i+1][0],e[i+1][1]));return n}function Yn(r,t){let e=(t-r)%Al;return e>Math.PI&&(e-=Al),e<-Math.PI&&(e+=Al),e}function ga(r,t){let e=0;for(;e<r.length-2&&t>r[e+1][0];)e++;let n=r[e],i=r[e+1];return{a:n,b:i,k:ot((t-n[0])/(i[0]-n[0]),0,1)}}function Rl(r){r=(r%24+24)%24;let t=Math.floor(r),e=Math.floor((r-t)*60);return String(t).padStart(2,"0")+":"+String(e).padStart(2,"0")}var J={minX:-125,maxX:110,minZ:-110,maxZ:125},su=2,$g=6,hn=5,un=2.15,Zg=[[0,-52],[0,-36],[-28,-20],[-66,-13],[-130,-11]],ru=[[52,-28,6],[72,-36,7],[90,-12,6.5],[66,-4,5.5],[86,16,6]],st={plaza:[-44,44],stage:[-44,32.6],fest:[-44,36.6],substation:[-20,20],terminal:[-20,62],tower:[-36,20],mateo:[34,25],valeria:[-20,27.8],lucia:[-12.6,66.2],windT:ru.map(r=>[r[0],r[1]]),windTx:[48,8],dam:{x0:-24,x1:24,z0:-58,z1:-52,top:6.6},gates:[-18.66,-13.82,-8.98,-4.14],turbs:[5.5,10,14.5,19],solar:[[-74,-68],[-59,-68],[-74,-87],[-59,-87]],inverter:[-66.5,-77.5],batYard:[-43,-69],batConsole:[-43,-60.2],boiler:[60,63],chips:[48,58],bioSub:[73,56],bridge:{x:-46,z0:-31,z1:-3},stops:[[-24,71.8,"Terminal de la Rambla"],[-44,52.3,"Plaza Matriz"],[30.2,-35.5,"Central Hidroel\xE9ctrica"],[38.5,13.5,"Parque E\xF3lico"],[-52,-56.2,"Parque Solar"],[40.5,60,"Planta de Biomasa"]],startCapi:[-28,31]},Jg=[[-90,20,6,90],[-92,-34,-106,-58],[40,82,50,72],[42,56,2,14],[-52,-40,-34,0],[-34,34,-62,-50],[27,41,19,31]];function Kg(r,t){let e=0;for(let n of Jg){let i=Math.min(r-n[0],n[1]-r,t-n[2],n[3]-t);e=Math.max(e,ge(-6,2,i))}return e}function In(r,t){let e=82+2.5*Math.sin(r*.045)-t,n=r-(-90+2.5*Math.sin(t*.05)),i=8,s=ot(.5+.5*(n-e)/i,0,1);return nt(n,e,s)-i*s*(1-s)}var $s=(r,t)=>ma(r,t,Zg);function Ui(r,t){let e=20+12*ge(-58,-85,t);return Math.min(e-Math.abs(r),-56-t)}function jg(r,t){let e=Kg(r,t),n=0;for(let[a,o,c]of ru){let l=r-a,h=t-o;n+=c*Math.exp(-(l*l+h*h)/340)}let i=ge(22,44,r),s=n+i*(1*Math.sin(r*.11+1)*Math.cos(t*.09)+.9)+(pa(r*.06+40,t*.06+40)-.5)*1.6;return($g-su)*ge(-36,-54,t)+s*(1-e)}function $n(r,t){let e=In(r,t),n=nt(-3.2,su+jg(r,t),ge(-5,2.5,e)),i=$s(r,t),s=8+9*ge(-40,-52,t);i<s+4.5&&t>-58&&(n=Math.min(n,nt(-2.6,n,ge(s,s+4.5,i))));let a=Ui(r,t);return a>-4.5&&(n=nt(n,1,ge(-4.5,.5,a))),n}function Zn(r,t){return t<-56&&20+12*ge(-58,-85,t)-Math.abs(r)>-4.5?hn:0}var Zs=[{id:"ciudad",name:"Ciudad Costera y Rambla",x:-46,z:46,color:"#ffd166"},{id:"hidro",name:"Central Hidroel\xE9ctrica",x:0,z:-55,color:"#4cc9f0"},{id:"eolica",name:"Parque E\xF3lico de las Cuchillas",x:70,z:-12,color:"#e8f1f2"},{id:"solar",name:"Parque Solar y Bater\xEDas",x:-62,z:-76,color:"#ffb703"},{id:"biomasa",name:"Planta de Biomasa",x:60,z:62,color:"#90be6d"}];var Ge={hydro:36,wind:8,solar:12,bio:40,batP:60,batE:120,bus:16},Qg=[[0,108],[3,96],[6,118],[9,160],[12,165],[15,156],[18,186],[20,210],[21.5,216],[23,184],[24,108]],xa=class{constructor(){this.t=0,this.hour=9,this.clockRate=1/20,this.energyRate=1/20,this.holdAt=null,this.windBase=.6,this.windTarget=.6,this.wind=.6,this.windDir=.5,this.gustiness=.1,this.cloud=0,this.cloudTarget=0,this.demandExtra=0,this.demandExtraTarget=0,this.demandMul=1,this.hydro={t:[0,1,2,3].map(()=>({on:!1,fault:!1})),gates:[0,1,2,3].map(()=>({reg:!1}))},this.windP={t:[0,1,2,3,4].map(()=>({on:!0,fault:!1})),tx:!1,txFault:!1},this.solar={a:[0,1,2,3].map(()=>({on:!1,fault:!1}))},this.bio={on:!1,fault:!1,chips:!1,pressure:0,routed:!1},this.bat={connected:!1,soc:.2,mode:"auto",p:0},this.buses=!1,this.fossil=0,this.freq=50,this.windUnit=[0,0,0,0,0],this.hydroUnit=[0,0,0,0],this.solarUnit=[0,0,0,0],this.out={hydro:0,wind:0,solar:0,bio:0,bat:0,fossil:0,gen:0,demand:160,ren:0,pct:0,surplus:0,unmet:0},this.step(0)}sun(t=this.hour){let e=Math.sin(Math.PI*(t-6)/12);return e>0?Math.pow(e,.75):0}night(t=this.hour){return t>=17.8&&t<20?ot((t-17.8)/2,0,1):t>=20||t<5.4?1:t<7?ot(1-(t-5.4)/1.6,0,1):0}demandAt(t){let{a:e,b:n,k:i}=ga(Qg,t);return nt(e[1],n[1],i)}head(){let t=this.hydro.gates.filter(e=>e.reg).length;return .4+.3*ot(t-2,0,2)+(this.headBonus||0)}step(t){if(this.t+=t,t>0&&this.clockRate>0){let x=this.hour,g=x+t*this.clockRate;if(this.holdAt!=null){let m=this.holdAt-x;m<0&&(m+=24),m<=t*this.clockRate+1e-6&&(g=this.holdAt)}this.hour=(g%24+24)%24}this.windBase+=ot(this.windTarget-this.windBase,-.12*t,.12*t),this.cloud+=ot(this.cloudTarget-this.cloud,-.15*t,.15*t);let e=(Math.sin(this.t*.21)+.6*Math.sin(this.t*.53+1)+.4*Math.sin(this.t*1.13+2))/2;this.wind=ot(this.windBase+this.gustiness*e,0,1),this.windDir=.55+.35*Math.sin(this.t*.03),this.demandExtra+=ot(this.demandExtraTarget-this.demandExtra,-6*t,6*t);let n=this.out,i=this.head();n.hydro=0,this.hydro.t.forEach((x,g)=>{let m=x.on&&!x.fault?Ge.hydro*i:0;this.hydroUnit[g]=m,n.hydro+=m}),n.wind=0;let s=this.windP.tx&&!this.windP.txFault;this.windP.t.forEach((x,g)=>{let m=ot(this.wind*(.94+.12*Math.sin(this.t*.31+g*1.7)),0,1),_=s&&x.on&&!x.fault?Ge.wind*m:0;this.windUnit[g]=_,n.wind+=_}),n.solar=0;let a=this.sun()*(1-.65*this.cloud);this.solar.a.forEach((x,g)=>{let m=x.on&&!x.fault?Ge.solar*a:0;this.solarUnit[g]=m,n.solar+=m});let o=this.bio.on&&!this.bio.fault?1:0;this.bio.pressure+=ot(o-this.bio.pressure,-.2*t,.3*t),n.bio=Ge.bio*this.bio.pressure*(this.bioBoost||1),n.demand=(this.demandAt(this.hour)+this.demandExtra+(this.buses?Ge.bus*(.6+.4*this.night()):0))*this.demandMul*(1-(this.eff||0)),n.ren=n.hydro+n.wind+n.solar+n.bio;let c=n.ren-n.demand,l=this.bat,h=t*this.energyRate,u=0;l.connected&&(c>0&&l.mode!=="hold"?u=-Math.min(c,Ge.batP,h>0?(1-l.soc)*Ge.batE/h:Ge.batP):c<0&&l.mode==="auto"&&(u=Math.min(-c,Ge.batP,h>0?l.soc*Ge.batE/h:Ge.batP)),l.soc=ot(l.soc-u*h/Ge.batE,0,1)),l.p=u,n.bat=u;let f=Math.max(0,u),d=Math.max(0,n.demand-n.ren-f);this.fossil+=ot(d-this.fossil,-30*t,14*t),this.clockRate>1&&(this.fossil=d),this.fossil=ot(this.fossil,0,n.demand),n.fossil=this.fossil,n.unmet=Math.max(0,d-this.fossil),n.surplus=Math.max(0,c+u),n.gen=Math.min(n.ren,n.demand+Math.max(0,-u))+f+n.fossil,n.pct=100*ot((Math.min(n.ren,n.demand)+f)/n.demand,0,1),n.pct>99.95&&(n.pct=100);let p=50-1.5*ot(n.unmet/(.1*n.demand),0,1)-(n.fossil>2?.1:0);this.freq+=(p-this.freq)*Math.min(1,t*2.5),t===0&&(this.freq=p)}get optimal(){return this.out.pct>=100&&this.freq>49.95}};function Js(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new se,l=0;for(let h=0;h<r.length;++h){let u=r[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=r[f].attributes.position.count}c.setIndex(u)}for(let h in s){let u=au(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);let p=au(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function au(r){let t,e,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}let a=new t(s),o=0;for(let l=0;l<r.length;++l)a.set(r[l].array,o),o+=r[l].array.length;let c=new me(a,e,n);return i!==void 0&&(c.gpuType=i),c}var it={cream:15918276,terra:13133642,ochre:14856796,rose:15317926,white:16118248,celeste:9424362,concrete:12432808,concreteD:10261898,asphalt:4935768,sidewalk:13617596,granite:14461852,steel:7831692,steelD:4804698,wood:9069116,yellow:16763196,cyan:5951999,red:15026253,glass:2899536,gravel:13482899,green:6270538},ya=new oe,lu=new Ln,cu=new hs,Cl=new D,Pl=new D,Ye=new wt,bn=new wt,ou=new Ft(1,1,1).toNonIndexed(),tx=vn(77);function hu(r,t,e){let n=r.attributes.position.count,i=new Float32Array(n*3);Ye.set(t),e&&Ye.offsetHSL(0,0,(tx()-.5)*e);for(let s=0;s<n;s++)i[s*3]=Ye.r,i[s*3+1]=Ye.g,i[s*3+2]=Ye.b;return r.setAttribute("color",new me(i,3)),r.attributes.uv&&r.deleteAttribute("uv"),r}var Dn=class{constructor(){this.list=[]}add(t,e,n,i,s,a=1,o=1,c=1,l=0,h=0,u=0,f=.03){let d=t.index?t.toNonIndexed():t.clone();return ya.compose(Cl.set(n,i,s),lu.setFromEuler(cu.set(l,h,u)),Pl.set(a,o,c)),d.applyMatrix4(ya),this.list.push(hu(d,e,f)),this}box(t,e,n,i,s,a,o,c=0,l=0,h=0){return this.add(ou,o,t,e,n,i,s,a,l,c,h)}boxB(t,e,n,i,s,a,o,c=0){return this.add(ou,o,t,e+s/2,n,i,s,a,0,c,0)}cyl(t,e,n,i,s,a,o,c=8,l=0,h=0,u=0){return this.add(new Se(i,s,a,c),o,t,e+(l||u?0:a/2),n,1,1,1,l,h,u)}sph(t,e,n,i,s,a=1,o=1){return this.add(new He(i,o),s,t,e,n,1,a,1)}mesh(t){if(!this.list.length)return null;let e=Js(this.list,!1);return this.list.forEach(n=>n.dispose()),this.list=[],new lt(e,t)}};function fn(r,t,e,n={}){let i=document.createElement("canvas");i.width=r,i.height=t,e(i.getContext("2d"),r,t);let s=new Kr(i);return s.colorSpace=Ie,n.repeat&&(s.wrapS=s.wrapT=li,s.repeat.set(n.repeat,n.repeat)),n.pixel&&(s.magFilter=Fe),s}function va(r,t={}){let e=t.w||512,n=t.h||128;return fn(e,n,i=>{t.bg&&(i.fillStyle=t.bg,i.fillRect(0,0,e,n)),t.border&&(i.strokeStyle=t.border,i.lineWidth=10,i.strokeRect(5,5,e-10,n-10)),i.fillStyle=t.fg||"#fff",i.textAlign="center",i.textBaseline="middle";let s=t.size||64;for(i.font=`${s}px "Lilita One","Arial Black",Impact,sans-serif`;i.measureText(r).width>e-40&&s>12;)s-=4,i.font=`${s}px "Lilita One","Arial Black",Impact,sans-serif`;t.stroke&&(i.lineWidth=8,i.strokeStyle=t.stroke,i.lineJoin="round",i.strokeText(r,e/2,n/2+4)),i.fillText(r,e/2,n/2+4)})}var ex=[[0,660016,1055808,10334975,1,1.05],[5.2,923446,1385034,10334975,1,1.05],[6.4,15902645,16236976,16755082,1.5,1.1],[7.6,10868466,13625074,16770756,2.5,1.45],[12,6470640,12575733,16777215,3.1,1.7],[16.8,8176878,13624302,16773327,2.8,1.55],[18.5,16032346,16302714,16750152,1.9,1.15],[19.5,4864632,6965882,11565728,.9,.95],[20.4,791604,1055808,10334975,1,1.05],[24,660016,1055808,10334975,1,1.05]],nx=`
uniform float uTime; varying vec3 vWorld;
#include <fog_pars_vertex>
void main(){
  vec4 w=modelMatrix*vec4(position,1.0);
  w.y+=sin(w.x*0.35+uTime*1.3)*0.10+sin(w.z*0.42-uTime*1.1)*0.09+sin((w.x+w.z)*0.18+uTime*0.7)*0.12;
  vWorld=w.xyz; vec4 mvPosition=viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
  #include <fog_vertex>
}`,ix=`
uniform vec3 uDeep; uniform vec3 uShallow; uniform vec3 uSunDir; uniform vec3 uSunColor; uniform vec3 uSky; uniform float uOpacity; uniform float uLight;
varying vec3 vWorld;
#include <fog_pars_fragment>
void main(){
  vec3 n=normalize(cross(dFdx(vWorld),dFdy(vWorld))); if(n.y<0.0) n=-n;
  vec3 v=normalize(cameraPosition-vWorld);
  float fres=pow(1.0-max(dot(n,v),0.0),2.0);
  vec3 col=mix(uDeep,uShallow,0.25+0.75*fres);
  col=mix(col,uSky,fres*0.45);
  float diff=max(dot(n,uSunDir),0.0);
  col*=uLight*(0.62+0.5*diff);
  float spec=pow(max(dot(n,normalize(uSunDir+v)),0.0),90.0);
  col+=uSunColor*step(0.45,spec)*0.75;
  gl_FragColor=vec4(col,uOpacity);
  #include <colorspace_fragment>
  #include <fog_fragment>
}`,sx={euca:{th:6.4,tr:.2,tc:14538440,crowns:[[.72,1.25,1.9,5082998],[1,.95,1.5,6530437]]},native:{th:2.3,tr:.28,tc:7031343,crowns:[[1.05,1.9,1.5,5216831]]},ceibo:{th:2.1,tr:.26,tc:6243888,crowns:[[1,1.7,1.25,5018690],[1.45,.9,.7,14825535]]},jaca:{th:2.6,tr:.26,tc:5916214,crowns:[[1.05,1.9,1.4,9404374]]},ombu:{th:2.6,tr:1,tc:8020552,crowns:[[1.1,4.6,2.3,4164154],[1.5,3,1.7,4954692]]},palm:{th:6.2,tr:.26,tc:9072461,frond:2.7,fc:5216840},butia:{th:3.3,tr:.42,tc:8088149,frond:2.1,fc:8824978},naranjo:{th:1.5,tr:.2,tc:7031343,crowns:[[1.05,1.45,1.2,3112242]]},bush:{th:0,tr:0,tc:0,crowns:[[.5,.9,.7,5809480]]}},_a=class{constructor(t,e){this.scene=t,this.renderer=e,this.rand=vn(20260),this.batch=new Dn,this.cityBatch=new Dn,this.winBatch=[new Dn,new Dn,new Dn],this.glassBatch=new Dn,this.screenBatch=new Dn,this.platforms=[],this.boxes=[],this.circles=[],this.occ=[],this.inter={},this.interList=[],this.trees=[],this.lamps=[],this.houses=[],this.roads=[],this.updaters=[],this.dyn={},this.lines={},this.time=0,this.night=0,this.power=[0,0,0],this.flicker=0,this.sunDir=new D(.5,.8,-.3),this.makeMaterials(),this.buildTerrain(),this.buildWater(),this.buildSky()}makeMaterials(){let t=fn(64,64,e=>{let n=vn(5);for(let i=0;i<64;i+=2)for(let s=0;s<64;s+=2){let a=222+Math.floor(n()*33);e.fillStyle=`rgb(${a},${a},${a})`,e.fillRect(s,i,2,2)}},{repeat:70});this.clip=[new sn(new D(0,-1,0),80),new sn(new D(1,0,0),0),new sn(new D(-1,0,0),0),new sn(new D(0,0,-1),0)],this.mats={city:new Tt({vertexColors:!0,flatShading:!0,roughness:.92,metalness:0,side:ye,clippingPlanes:this.clip,clipIntersection:!0}),solid:new Tt({vertexColors:!0,flatShading:!0,roughness:.92,metalness:0}),terrain:new Tt({vertexColors:!0,flatShading:!0,roughness:1,metalness:0,map:t}),glass:new Tt({color:11461631,transparent:!0,opacity:.32,roughness:.15,metalness:.2,depthWrite:!1}),win:[0,1,2].map(()=>new Tt({color:3426654,emissive:16762222,emissiveIntensity:0,roughness:.4,clippingPlanes:this.clip,clipIntersection:!0})),screen:new Tt({color:1060928,emissive:5232383,emissiveIntensity:1.1,roughness:.4}),bulb:new Tt({color:16774877,emissive:16770728,emissiveIntensity:0}),beacon:new Tt({color:8396832,emissive:16722474,emissiveIntensity:0}),charger:new Tt({color:1784362,emissive:5111712,emissiveIntensity:0}),pool:new Ee({map:fn(64,64,e=>{let n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,225,160,0.85)"),n.addColorStop(1,"rgba(255,225,160,0)"),e.fillStyle=n,e.fillRect(0,0,64,64)}),transparent:!0,opacity:0,depthWrite:!1,blending:as})}}buildTerrain(){let e=J.maxX-J.minX,n=J.maxZ-J.minZ;this.N=188,this.cell=e/188;let i=new Ce(e,n,188,188);i.rotateX(-Math.PI/2),i.translate((J.minX+J.maxX)/2,0,(J.minZ+J.maxZ)/2);let s=i.attributes.position,a=s.count;this.hgrid=new Float32Array(a);for(let m=0;m<a;m++){let _=$n(s.getX(m),s.getZ(m));this.hgrid[m]=_,s.setY(m,_)}i.computeVertexNormals();let o=new Float32Array(a*3),c=i.attributes.normal;for(let m=0;m<a;m++)rx(Ye,s.getX(m),s.getZ(m),this.hgrid[m],c.getY(m)),o[m*3]=Ye.r,o[m*3+1]=Ye.g,o[m*3+2]=Ye.b;i.setAttribute("color",new me(o,3));let l=new lt(i,this.mats.terrain);l.receiveShadow=!0,this.scene.add(l),this.terrain=l;let h=[],u=[],f=[],d=(m,_,v,M,w)=>{for(let S=0;S<w;S++){let E=S/w,R=(S+1)/w,y=nt(m,v,E),b=nt(_,M,E),T=nt(m,v,R),L=nt(_,M,R),B=$n(y,b),I=$n(T,L);h.push(y,B,b,T,I,L,T,-9,L,y,B,b,T,-9,L,y,-9,b);for(let O=0;O<6;O++){let k=O===0||O===1||O===3;Ye.set(k?9069888:4863268),u.push(Ye.r,Ye.g,Ye.b)}let N=Zn(y,b),F=Zn(T,L);if(B<N-.02||I<F-.02){let O=Math.max(N,F),k=(L-b)*.02,X=-(T-y)*.02;f.push(y+k,O,b+X,T+k,O,L+X,T+k,Math.min(I,O),L+X,y+k,O,b+X,T+k,Math.min(I,O),L+X,y+k,Math.min(B,O),b+X)}}};d(J.minX,J.maxZ,J.maxX,J.maxZ,188),d(J.maxX,J.maxZ,J.maxX,J.minZ,188),d(J.maxX,J.minZ,J.minX,J.minZ,188),d(J.minX,J.minZ,J.minX,J.maxZ,188);let p=new se;p.setAttribute("position",new Ut(h,3)),p.setAttribute("color",new Ut(u,3)),p.computeVertexNormals(),this.scene.add(new lt(p,new Tt({vertexColors:!0,roughness:1,side:ye})));let x=new se;x.setAttribute("position",new Ut(f,3)),this.waterSide=new lt(x,new Ee({color:3114696,transparent:!0,opacity:.72,side:ye,depthWrite:!1})),this.scene.add(this.waterSide);let g=new lt(new Ft(e+8,3,n+8),new Tt({color:3877408,roughness:.8}));g.position.set((J.minX+J.maxX)/2,-10.5,(J.minZ+J.maxZ)/2),g.receiveShadow=!0,this.scene.add(g)}terrainAt(t,e){let n=ot((t-J.minX)/this.cell,0,this.N-.001),i=ot((e-J.minZ)/this.cell,0,this.N-.001),s=Math.floor(n),a=Math.floor(i),o=n-s,c=i-a,l=this.N+1,h=this.hgrid,u=h[a*l+s],f=h[a*l+s+1],d=h[(a+1)*l+s],p=h[(a+1)*l+s+1];return nt(nt(u,f,o),nt(d,p,o),c)}groundAt(t,e,n=1e9){let i=this.terrainAt(t,e);for(let s of this.platforms)if(t>=s.x0&&t<=s.x1&&e>=s.z0&&e<=s.z1){let a=typeof s.top=="function"?s.top(t,e):s.top;a>i&&n>=a-1.3&&(i=a)}return i}waterAt(t,e){return Zn(t,e)}addPlatform(t,e,n,i,s){this.platforms.push({x0:t,x1:e,z0:n,z1:i,top:s})}addSolid(t,e,n,i,s=1e9,a=!1){this.boxes.push({x0:t,x1:e,z0:n,z1:i,top:s}),a&&this.addPlatform(t,e,n,i,s)}addCircle(t,e,n){this.circles.push({x:t,z:e,r:n})}addOcc(t,e,n,i,s){this.occ.push({x0:t,x1:e,z0:n,z1:i,y1:s})}occluded(t,e,n,i,s,a){let o=i-t,c=s-e,l=a-n;for(let h of this.occ){let u=0,f=.97,d=[[t,o,h.x0,h.x1],[e,c,-5,h.y1],[n,l,h.z0,h.z1]],p=!0;for(let[x,g,m,_]of d){if(Math.abs(g)<1e-6){if(x<m||x>_){p=!1;break}continue}let v=(m-x)/g,M=(_-x)/g;if(v>M){let w=v;v=M,M=w}if(u=Math.max(u,v),f=Math.min(f,M),u>f){p=!1;break}}if(p)return!0}return!1}resolve(t,e,n){let i=!1;for(let s of this.boxes){if(n>=s.top-.5||t.x<s.x0-e||t.x>s.x1+e||t.z<s.z0-e||t.z>s.z1+e)continue;let a=ot(t.x,s.x0,s.x1),o=ot(t.z,s.z0,s.z1),c=t.x-a,l=t.z-o,h=c*c+l*l;if(!(h>=e*e))if(i=!0,h>1e-8){let u=Math.sqrt(h);t.x=a+c/u*e,t.z=o+l/u*e}else{let u=t.x-s.x0,f=s.x1-t.x,d=t.z-s.z0,p=s.z1-t.z,x=Math.min(u,f,d,p);x===u?t.x=s.x0-e:x===f?t.x=s.x1+e:x===d?t.z=s.z0-e:t.z=s.z1+e}}for(let s of[this.circles,this.dynCircles||[]])for(let a of s){if(!a.r)continue;let o=t.x-a.x,c=t.z-a.z,l=e+a.r,h=o*o+c*c;if(h<l*l&&h>1e-8){let u=Math.sqrt(h);t.x=a.x+o/u*l,t.z=a.z+c/u*l,i=!0}}return i}buildWater(){let t=Ml.merge([rt.fog,{uTime:{value:0},uDeep:{value:new wt(1398938)},uShallow:{value:new wt(7327986)},uSunDir:{value:new D(0,1,0)},uSunColor:{value:new wt(16777215)},uSky:{value:new wt(12575733)},uOpacity:{value:.86},uLight:{value:1}}]);this.waterMat=new Qe({uniforms:t,vertexShader:nx,fragmentShader:ix,transparent:!0,fog:!0,depthWrite:!1});let e=J.maxX-J.minX,n=J.maxZ-J.minZ,i=new Ce(e,n,96,96);i.rotateX(-Math.PI/2);let s=new lt(i,this.waterMat);s.position.set((J.minX+J.maxX)/2,0,(J.minZ+J.maxZ)/2),s.renderOrder=5,this.scene.add(s);let a=new Ce(76,54,30,22);a.rotateX(-Math.PI/2);let o=new lt(a,this.waterMat);o.position.set(0,hn,-83),o.renderOrder=5,this.scene.add(o)}updateRain(t,e){if(!this.rain){let f=new se;f.setAttribute("position",new me(new Float32Array(700*6),3).setUsage(ys)),this.rain=new ds(f,new Ci({color:13624565,transparent:!0,opacity:0,depthWrite:!1})),this.rain.frustumCulled=!1,this.rain.renderOrder=10,this.scene.add(this.rain),this.drops=new Float32Array(700*3).fill(-999)}let i=this.storm>.05;if(this.rain.visible=i,!i)return;this.rain.material.opacity=.55*this.storm;let s=e.grid,a=ot((this.zoom||60)*1.6,40,170),o=Math.cos(s.windDir)*12,c=Math.sin(s.windDir)*7,l=this.rain.geometry.attributes.position.array,h=this.drops,u=.03+a*6e-4;for(let f=0;f<700;f++){let d=h[f*3],p=h[f*3+1],x=h[f*3+2];p-=46*t,d+=o*t,x+=c*t,(p<e.focus.y-3||Math.abs(d-e.focus.x)>a/2||Math.abs(x-e.focus.z)>a/2)&&(d=e.focus.x+(Math.random()-.5)*a,x=e.focus.z+(Math.random()-.5)*a,p=e.focus.y+6+Math.random()*30),h[f*3]=d,h[f*3+1]=p,h[f*3+2]=x,l[f*6]=d,l[f*6+1]=p,l[f*6+2]=x,l[f*6+3]=d-o*u,l[f*6+4]=p+46*u,l[f*6+5]=x-c*u}this.rain.geometry.attributes.position.needsUpdate=!0}buildSky(){let t=this.scene;t.background=new wt(6470640),t.fog=new Zr(12575733,150,620),this.hemi=new ra(14676991,6982229,1.6),t.add(this.hemi),this.sun=new la(16777215,3),this.sun.castShadow=!0;let e=this.sun.shadow;e.mapSize.set(2048,2048),e.camera.left=-85,e.camera.right=85,e.camera.top=85,e.camera.bottom=-85,e.camera.near=20,e.camera.far=420,e.bias=-6e-4,e.normalBias=.5,t.add(this.sun),t.add(this.sun.target),this.sunDisc=new lt(new ue(16,16,12),new Ee({color:16774064,fog:!1})),t.add(this.sunDisc),this.moonDisc=new lt(new ue(11,16,12),new Ee({color:15265535,fog:!1})),t.add(this.moonDisc);let n=[],i=vn(9);for(let o=0;o<500;o++){let c=i()*6.283,l=Math.asin(.05+i()*.95);n.push(Math.cos(c)*Math.cos(l)*900,Math.sin(l)*900-60,Math.sin(c)*Math.cos(l)*900)}let s=new se;s.setAttribute("position",new Ut(n,3)),this.stars=new ps(s,new Gs({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.stars),this.clouds=[];let a=new Tt({color:16777215,flatShading:!0,roughness:1,transparent:!0,opacity:.94});this.cloudMat=a;for(let o=0;o<9;o++){let c=new Dn,l=3+Math.floor(i()*3);for(let u=0;u<l;u++)c.add(new He(3+i()*2.5,1),16777215,(u-l/2)*4.2,i()*1.2,(i()-.5)*3,1.3,.62,1,0,0,0,0);let h=c.mesh(a.clone());h.castShadow=!0,h.position.set(nt(J.minX,J.maxX,i()),46+i()*10,nt(J.minZ,J.maxZ,i())),t.add(h),this.clouds.push(h)}}setTime(t,e){let{a:n,b:i,k:s}=ga(ex,t),a=this.scene;a.background.set(n[1]).lerp(bn.set(i[1]),s),a.fog.color.set(n[2]).lerp(bn.set(i[2]),s),this.sun.color.set(n[3]).lerp(bn.set(i[3]),s);let o=this.storm||0;a.background.lerp(bn.set(5661296),o*.85),a.fog.color.lerp(bn.set(6713983),o*.85);let c=this.smogOn&&this.smog||0;a.fog.color.lerp(bn.set(10129276),c*.6),a.background.lerp(bn.set(10130568),c*.5),a.fog.near=nt(150,70,c),a.fog.far=nt(620,430,c);let l=nt(n[4],i[4],s)*(1-.82*o)*(1-.22*c),h=nt(n[5],i[5],s)*(1-.42*o)+(this.flash||0)*4;this.hemi.intensity=h,this.hemi.color.copy(a.fog.color).lerp(bn.set(16777215),.35),this.hemi.groundColor.set(6982229).lerp(bn.set(1713216),this.night);let u=Math.PI*(t-6)/12,f=Math.sin(u),d=Cl.set(Math.cos(u),f,-.45).normalize();this.sunDisc.position.copy(e).addScaledVector(d,760),this.sunDisc.visible=f>-.12;let p=u+Math.PI,x=Pl.set(Math.cos(p)*.8,Math.sin(p)*.8+.15,.5).normalize();this.moonDisc.position.copy(e).addScaledVector(x,760),this.moonDisc.visible=x.y>-.05;let g=f>.1;g?this.sunDir.copy(d):this.sunDir.set(-.35,.8,.45).normalize();let m=ge(.02,.22,Math.abs(f-.1));this.sun.intensity=l*nt(.35,1,m);let _=ot((this.zoom||60)*.95,70,165),v=this.sun.shadow.camera;Math.abs(v.right-_)>2&&(v.left=-_,v.right=_,v.top=_,v.bottom=-_,v.updateProjectionMatrix()),this.sun.target.position.copy(e),this.sun.position.copy(e).addScaledVector(this.sunDir,200),this.stars.material.opacity=this.night*.9,this.stars.position.copy(e);let M=this.waterMat.uniforms;M.uSunDir.value.copy(g||x.y<.08?this.sunDir:x),M.uSunColor.value.copy(this.sun.color).multiplyScalar(g?1:.85),M.uSky.value.copy(a.fog.color),M.uLight.value=nt(1,.34,this.night),this.cloudMat.color.set(16777215).lerp(bn.set(3753326),this.night*.85),t>17.4&&t<19.4&&this.cloudMat.color.lerp(bn.set(16757370),.5*(1-Math.abs(t-18.4))),this.cloudMat.color.lerp(bn.set(5595244),o*.8)}road(t,e,n,i=.07){let s=new Ws(t.map(d=>new D(d[0],0,d[1])),!1,"catmullrom",.5),a=s.getLength(),o=Math.max(2,Math.ceil(a/1.4)),c=[],l=[];for(let d=0;d<=o;d++){let p=s.getPointAt(d/o),x=s.getTangentAt(d/o),g=-x.z,m=x.x,_=e/2,v=p.x+g*_,M=p.z+m*_,w=p.x-g*_,S=p.z-m*_,E=Math.max(this.terrainAt(v,M),this.terrainAt(w,S),this.terrainAt(p.x,p.z))+i;c.push([v,E,M,w,E,S]),l.push([p.x,p.z])}let h=[];for(let d=0;d<o;d++){let p=c[d],x=c[d+1];h.push(p[0],p[1],p[2],x[3],x[4],x[5],p[3],p[4],p[5],p[0],p[1],p[2],x[0],x[1],x[2],x[3],x[4],x[5])}let u=new se;u.setAttribute("position",new Ut(h,3));let f=new Float32Array(h.length);for(let d=1;d<f.length;d+=3)f[d]=1;return u.setAttribute("normal",new me(f,3)),this.batch.list.push(hu(u,n,0)),this.roads.push(l),l}nearRoad(t,e,n){for(let i of this.roads)if(ma(t,e,i)<n)return!0;return!1}tree(t,e,n,i=1,s=null){this.clear&&this.clear.some(a=>e>a[0]&&e<a[1]&&n>a[2]&&n<a[3])||(this.trees.push({type:t,x:e,z:n,s:i,y:s??this.groundAt(e,n)}),this.addCircle(e,n,t==="ombu"?1.1:t==="bush"?0:.4))}lamp(t,e,n=0,i=null){this.lamps.push({x:t,z:e,ry:n,y:i??this.groundAt(t,e)})}addInter(t,e,n,i={}){let s=i.y!=null?i.y:this.groundAt(e,n),a=i.ry||0,o=this.batch;if(i.console!==!1){o.boxB(e,s,n,.9,1,.6,it.steelD,a),o.boxB(e,s+1,n,1.1,.12,.8,it.yellow,a);let f=Math.sin(a),d=Math.cos(a);this.screenBatch.box(e+f*.12,s+1.42,n+d*.12,.95,.62,.08,16777215,a,-.45),o.box(e-f*.02,s+1.38,n-d*.02,1.08,.78,.14,it.steelD,a,-.45),this.addCircle(e,n,.55)}let c=new te;c.position.set(e,s+(i.h||3.2),n);let l=new lt(new gs(.42,0),new Ee({color:16777215,fog:!1})),h=new lt(new an(.55,1.1,4),new Ee({color:16765503,fog:!1}));h.rotation.x=Math.PI,h.position.y=1.3,c.add(l,h),this.scene.add(c);let u={id:t,x:e,y:s,z:n,r:i.r||3.4,group:c,gem:l,arrow:h,state:"locked",target:!1,label:"",baseY:s+(i.h||3.2),phase:this.rand()*6};return this.inter[t]=u,this.interList.push(u),u}finalize(){let t=this.scene,e=this.mats,n=this.batch.mesh(e.solid);n.castShadow=!0,n.receiveShadow=!0,t.add(n);let i=this.cityBatch.mesh(e.city);i&&(i.castShadow=!0,i.receiveShadow=!0,t.add(i)),this.winBatch.forEach((M,w)=>{let S=M.mesh(e.win[w]);S&&t.add(S)});let s=this.glassBatch.mesh(e.glass);s&&(s.renderOrder=6,t.add(s));let a=this.screenBatch.mesh(e.screen);a&&t.add(a);let o=[],c=[],l=[];for(let M of this.trees){let w=sx[M.type],S=M.s;if(w.th&&o.push({x:M.x,y:M.y+w.th*S/2,z:M.z,sx:w.tr*S,sy:w.th*S,sz:w.tr*S,c:w.tc,ry:0}),w.crowns)for(let E of w.crowns)c.push({x:M.x+(this.rand()-.5)*.3,y:M.y+w.th*S*E[0]+(w.th?0:.4),z:M.z+(this.rand()-.5)*.3,sx:E[1]*S,sy:E[2]*S,sz:E[1]*S,c:E[3],ry:this.rand()*6});w.frond&&l.push({x:M.x,y:M.y+w.th*S,z:M.z,sx:w.frond*S,sy:w.frond*S,sz:w.frond*S,c:w.fc,ry:this.rand()*6})}let h=new Tt({flatShading:!0,roughness:1});this.instanced(new Se(.75,1,1,5),h,o),this.instanced(new He(1,1),h,c,.08);let u=[];for(let M=0;M<8;M++){let w=new Ft(.26,.05,1);w.translate(0,0,.5),w.rotateX(.42+M%2*.3),w.rotateY(M*Math.PI/4),u.push(w)}this.instanced(Js(u),h,l,.05);let f=[],d=[],p=[],x=[];for(let M of this.lamps){let w=Math.sin(M.ry),S=Math.cos(M.ry);f.push({x:M.x,y:M.y+2.1,z:M.z,sx:.09,sy:4.2,sz:.09,c:4015696,ry:0}),d.push({x:M.x+w*.5,y:M.y+4.2,z:M.z+S*.5,sx:.32,sy:.12,sz:1.2,c:4015696,ry:M.ry}),p.push({x:M.x+w*.9,y:M.y+4.08,z:M.z+S*.9,sx:.2,sy:.1,sz:.3,c:16777215,ry:M.ry}),x.push({x:M.x+w*.9,y:M.y+.09,z:M.z+S*.9,sx:9,sy:1,sz:9,c:16777215,ry:0})}this.instanced(new Se(1,1,1,6),h,f),this.instanced(new Ft(1,1,1),h,d),this.instanced(new Ft(1,1,1),e.bulb,p,0,!1);let g=new Ce(1,1);g.rotateX(-Math.PI/2);let m=this.instanced(g,e.pool,x,0,!1);m&&(m.renderOrder=7);let _=[],v=[];for(let M of this.houses)_.push({x:M.x,y:M.y+M.h/2,z:M.z,sx:M.w,sy:M.h,sz:M.d,c:M.c,ry:M.ry}),v.push({x:M.x,y:M.y+M.h+M.rh/2,z:M.z,sx:M.w*.78,sy:M.rh,sz:M.d*.78,c:M.rc,ry:M.ry+Math.PI/4});this.instanced(new Ft(1,1,1),h,_),this.instanced(new Se(.02,1,1,4),h,v)}instanced(t,e,n,i=0,s=!0){if(!n.length)return null;let a=new fs(t,e,n.length);return n.forEach((o,c)=>{ya.compose(Cl.set(o.x,o.y,o.z),lu.setFromEuler(cu.set(0,o.ry||0,0)),Pl.set(o.sx,o.sy,o.sz)),a.setMatrixAt(c,ya),Ye.set(o.c),i&&Ye.offsetHSL((this.rand()-.5)*.02,0,(this.rand()-.5)*i),a.setColorAt(c,Ye)}),a.castShadow=s,a.receiveShadow=s,a.frustumCulled=!1,this.scene.add(a),a}setCutaway(t,e,n){let i=this.clip,s=Math.cos(n),a=-Math.sin(n),o=Math.sin(n),c=Math.cos(n),l=7;i[0].constant=nt(80,e.y+1.2,t),i[1].normal.set(s,0,a),i[1].constant=-(s*e.x+a*e.z+l),i[2].normal.set(-s,0,-a),i[2].constant=s*e.x+a*e.z-l,i[3].normal.set(-o,0,-c),i[3].constant=o*e.x+c*e.z+.9}update(t,e){this.time+=t,this.night=e.night,this.zoom=e.zoom,this.smogOn=!e.demo,this.waterMat.uniforms.uTime.value=this.time,this.storm=ge(.45,.9,e.grid.cloud),this.flash=Math.max(0,(this.flash||0)-t*5),this.updateRain(t,e),this.storm>.25&&(this.boltT=(this.boltT==null?4:this.boltT)-t,this.storm>.6&&this.boltT<=0&&(this.boltT=5+Math.random()*7,this.flash=1,e.audio&&setTimeout(()=>e.audio.thunder(),350))),this.setTime(e.hour,e.focus);let n=this.mats,i=this.night,s=e.grid.freq<49.4&&Math.sin(this.time*37)>.2?.25:1;for(let a=0;a<3;a++)this.power[a]=nt(this.power[a],e.barrios[a]?1:0,Math.min(1,t*2)),n.win[a].emissiveIntensity=this.power[a]*(.18+1.5*ot(i*1.8-a*.4,0,1))*s;n.bulb.emissiveIntensity=i*2.4*s,n.pool.opacity=i*.5*s,n.beacon.emissiveIntensity=i>.2?Math.sin(this.time*3.2)>0?3:.1:.2,n.screen.emissiveIntensity=.9+.3*Math.sin(this.time*5);for(let a of this.clouds){let o=e.focus.x-e.cam.x,c=e.focus.y-e.cam.y,l=e.focus.z-e.cam.z,h=a.position.x-e.cam.x,u=a.position.y-e.cam.y,f=a.position.z-e.cam.z,d=ot((h*o+u*c+f*l)/(o*o+c*c+l*l),0,1),p=Math.hypot(h-o*d,u-c*d,f-l*d);a.material.color.copy(this.cloudMat.color),a.material.opacity=nt(a.material.opacity,nt(.12,.94,ge(16,42,p)),Math.min(1,t*4)),a.position.x+=(1.2+e.grid.wind*4)*t*Math.cos(e.grid.windDir),a.position.z+=(1.2+e.grid.wind*4)*t*Math.sin(e.grid.windDir)*.4,a.position.x>J.maxX+30&&(a.position.x=J.minX-30),a.position.z>J.maxZ+20&&(a.position.z=J.minZ-20)}for(let a of this.interList){let o=a.group;if(o.visible=a.state!=="locked"&&a.state!=="hidden",!o.visible)continue;let c=a.state==="need";a.gem.material.color.set(c?16731469:a.state==="off"?10135485:5759881),a.gem.rotation.y+=t*(c?4:1.2);let l=c?1.25+.25*Math.sin(this.time*8):.6;a.gem.scale.setScalar(l),o.position.y=a.baseY+Math.sin(this.time*2.5+a.phase)*.18,a.arrow.visible=a.target,a.target&&(a.arrow.position.y=1.5+Math.abs(Math.sin(this.time*4))*.6,a.arrow.rotation.y+=t*3)}for(let a of this.updaters)a(t,e)}},Rn=new wt,o1=new wt;function rx(r,t,e,n,i){let s=Zn(t,e),a=In(t,e);if(n<s-.15){r.set(2905451).lerp(Rn.set(13482892),ge(s-3.4,s-.1,n));return}let o=Math.min($s(t,e)-8,99),c=Ui(t,e);if(a<5.2&&n<2.6||n<s+.5){r.set(15259300).lerp(Rn.set(14205066),Di(t*.4,e*.4));return}let l=pa(t*.07,e*.07);r.set(6271302).lerp(Rn.set(9360476),l),t>26&&r.lerp(Rn.set(12179806),ge(.5,.85,Di(t*.13+9,e*.13))*.6),(o<6||c>-9)&&r.lerp(Rn.set(5020234),.5);let h=(u,f,d,p)=>ge(-3,1,Math.min(t-u,f-t,e-d,p-e));r.lerp(Rn.set(13682864),h(-90,-35,-106,-58)*(.85+.15*Di(t,e))),r.lerp(Rn.set(12096100),h(42,80,51,71)*.9),r.lerp(Rn.set(7314002),h(40,108,31,50)*.7),r.lerp(Rn.set(9411210),h(-86,-6,9,78)),r.lerp(Rn.set(13286810),h(41,57,2,15)*.9),i<.82&&r.lerp(Rn.set(10259046),ge(.82,.6,i))}var ba=[it.cream,it.terra,it.ochre,it.rose,it.white,11128800,14272160,14734004];function dn(r,t,e,n,i,s,a=7,o=1.6,c={}){let l=va(t,{w:512,h:Math.round(512*o/a),bg:c.bg||"#12325a",fg:c.fg||"#ffffff",border:c.border||"#ffc93c",size:72}),h=new lt(new Ce(a,o),new Tt({map:l,emissive:16777215,emissiveMap:l,emissiveIntensity:.3,roughness:.8}));h.position.set(e,n+2.4+o/2,i),h.rotation.y=s,r.scene.add(h);let u=h.clone();u.rotation.y=s+Math.PI,r.scene.add(u);let f=Math.cos(s)*(a/2-.3),d=-Math.sin(s)*(a/2-.3);r.batch.boxB(e+f,n,i+d,.2,2.5,.2,it.steelD),r.batch.boxB(e-f,n,i-d,.2,2.5,.2,it.steelD)}function Ll(r,t,e,n,i,s=6,a=2.4){if(!r.logoTex)return;let o=s*200/720,c=new Tt({map:r.logoTex,emissive:16777215,emissiveMap:r.logoTex,emissiveIntensity:.45,roughness:.8});for(let u of[i,i+Math.PI]){let f=new lt(new Ce(s,o),c);f.position.set(t+Math.sin(u)*.09,e+a+o/2,n+Math.cos(u)*.09),f.rotation.y=u,r.scene.add(f)}let l=Math.cos(i)*(s/2-.3),h=-Math.sin(i)*(s/2-.3);r.batch.boxB(t+l,e,n+h,.26,a+.1,.26,it.steelD),r.batch.boxB(t-l,e,n-h,.26,a+.1,.26,it.steelD),r.batch.box(t,e+a+o/2,n,s+.3,o+.3,.12,it.steelD,i)}function uu(r,t,e,n,i,s,a){r.flagTex||(r.flagTex=fn(360,240,h=>{h.fillStyle="#fff",h.fillRect(0,0,360,240),h.fillStyle="#0038a8";for(let u=0;u<4;u++)h.fillRect(0,240/9*(1+u*2),360,240/9);h.fillStyle="#fff",h.fillRect(0,0,133.3,133.3),h.fillStyle="#fcd116",h.strokeStyle="#fcd116",h.lineWidth=6;for(let u=0;u<16;u++){let f=u*Math.PI/8;h.beginPath(),h.moveTo(66,66),h.lineTo(66+Math.cos(f)*54,66+Math.sin(f)*54),h.stroke()}h.beginPath(),h.arc(66,66,26,0,7),h.fill()})),r.batch.cyl(t,e,n,.07+a*.004,.1+a*.008,a,15132390,8),r.batch.sph(t,e+a+.12,n,.16+a*.008,13607498);let o=new Ce(i,s,14,6),c=new lt(o,new Tt({map:r.flagTex,side:ye,roughness:.9}));c.position.set(t+i/2+.12,e+a-s/2-.15,n),c.castShadow=!0,r.scene.add(c);let l=o.attributes.position.array.slice();r.updaters.push((h,u)=>{let f=o.attributes.position,d=(.08+u.grid.wind*.22)*i/3;for(let p=0;p<f.count;p++){let x=(l[p*3]+i/2)/i;f.setZ(p,Math.sin(x*7.2-r.time*(4+u.grid.wind*5))*d*x)}f.needsUpdate=!0})}function Ma(r,t,e,n,i,s,a,o){let c=r.winBatch[o],l=Math.max(1,Math.floor((a-.8)/1.7)),h=new Ce(.78,1),u=(f,d,p,x)=>{let g=Math.max(1,Math.floor((f-.8)/1.45));for(let m=0;m<l;m++)for(let _=0;_<g;_++){let v=(_-(g-1)/2)*1.45;c.add(h,16777215,t+d*(n/2+.05)+(p?v:0),s+1.35+m*1.7,e+p*(i/2+.05)+(d?v:0),1,1,1,0,x,0,0)}};u(n,0,1,0),u(n,0,-1,Math.PI),u(i,1,0,Math.PI/2),u(i,-1,0,-Math.PI/2)}function ax(r,t,e,n,i,s,a,o,c){let l=r.cityBatch,h=2.2,u=r.rand,f=15985884;l.boxB(t,h,e,n,s,i,a),l.boxB(t,h,e,n+.2,.55,i+.2,9274488),l.boxB(t,h+s,e,n+.36,.28,i+.36,f);let d=h+s+.28;if(c===1&&(l.boxB(t,d,e,n*.62,1.7,i*.62,a),l.boxB(t,d+1.7,e,n*.66,.2,i*.66,f)),c===2)for(let p=-1;p<=1;p++)l.boxB(t+p*n*.3,h+.55,e+i/2+.1,.3,s+.6,.26,f);c===3&&(l.cyl(t+n/2-.3,h,e+i/2-.3,1.25,1.25,s+1.2,a,10),l.cyl(t+n/2-.3,h+s+1.2,e+i/2-.3,1.42,1.42,.24,f,10)),u()<.5&&l.cyl(t+(u()-.5)*n*.4,d,e+(u()-.5)*i*.4,.55,.55,1.1,9080726,8),u()<.45&&l.boxB(t+(u()-.5)*n*.4,d,e+(u()-.5)*i*.4,1.1,.5,.8,12106946),l.boxB(t,h,e+i/2+.03,1,1.5,.08,5981750),Ma(r,t,e,n,i,h,s,o),r.addSolid(t-n/2,t+n/2,e-i/2,e+i/2),r.addOcc(t-n/2,t+n/2,e-i/2,e+i/2,h+s+(c===1?1.9:.3))}function fu(r){let t=r.batch,e=r.rand,n=2.2;t.boxB(-44,1.2,41,68,.9,60,it.asphalt),t.boxB(-46.5,1,73.3,73,1.2,4.6,it.granite),t.boxB(-80.6,1,41,4.8,1.2,60,it.granite),r.addPlatform(-83.2,-10,11,75.8,un);for(let p=-80;p<=-12;p+=4)t.boxB(p,n,73.3,.14,.02,4.4,12816e3);for(let p=14;p<=70;p+=4)t.boxB(-80.6,n,p,4.6,.02,.14,12816e3);let i=(p,x,g,m)=>{t.boxB((p+x)/2,n,(g+m)/2,x-p,.7,m-g,it.cream),t.boxB((p+x)/2,n+.7,(g+m)/2,x-p+.16,.12,m-g+.16,16446694),r.addSolid(p,x,g,m,3.05)};i(-83.4,-66.6,75.6,76),i(-49.4,-10,75.6,76),i(-83.4,-83,11,75.6);let s=[-76,-60,-44,-28,-12],a=[13,27,41,55,69];for(let p of s)for(let x=15;x<70;x+=3.2)t.boxB(p,2.1,x,.14,.02,1.4,15327944);for(let p of a)for(let x=-76;x<-11;x+=3.2)t.boxB(x,2.1,p,1.4,.02,.14,15327944);let o=[-68,-52,-36,-20],c=[20,34,48,62];for(let p=0;p<4;p++)for(let x=0;x<4;x++){let g=o[p],m=c[x],_=p+","+x,v=p===0?0:p===3?2:1;if((p===1||p===2)&&(x===1||x===2))continue;if(t.boxB(g,1.3,m,12.8,.9,10.8,it.sidewalk),_==="3,0"){cx(r,g,m);continue}if(_==="3,3"){hx(r,g,m);continue}if(_==="2,0"){lx(r,g,m);continue}let M=e()<.45?2:3,w=10.6,S=.5,E=(w-S*(M-1))/M;for(let R=0;R<M;R++){let y=g-w/2+E/2+R*(E+S),b=p===1||p===2?6.5+e()*6.5:4.2+e()*4;ax(r,y,m+(e()-.5)*.6,E,7+e()*1,b,ba[Math.floor(e()*ba.length)],v,Math.floor(e()*4))}r.tree(e()<.5?"jaca":"native",g-5.85,m+4.85,.7,n),r.tree("jaca",g+5.85,m-4.85,.65,n)}ox(r);for(let p=-80;p<=-12;p+=8)p>-68&&p<-48||r.lamp(p,75.1,Math.PI,n);for(let p=16;p<=68;p+=8)r.lamp(-82.5,p,Math.PI/2,n);for(let p=-76;p<=-16;p+=12)p>-68&&p<-48||(r.tree("palm",p+4,72.2,.95+e()*.2,n),t.boxB(p,n,74.6,2.2,.45,.6,it.wood));for(let p=20;p<=64;p+=11)r.tree("palm",-79.4,p,1,n),t.boxB(-82.1,n,p+4,.6,.45,2.2,it.wood);for(let p of s)for(let x of[20,48])r.lamp(p+2.4,x+5,0,n);let l=va("URUGUAY",{w:1024,h:256,fg:"#ffffff",stroke:"#1d6fb8",size:210}),h=new lt(new Ce(13,3.2),new Tt({map:l,transparent:!0,alphaTest:.35,emissive:16777215,emissiveMap:l,emissiveIntensity:.25}));h.position.set(-33,n+1.75,74.95),h.castShadow=!0,r.scene.add(h);let u=h.clone();u.position.z=74.85,u.rotation.y=Math.PI,r.scene.add(u),t.boxB(-33,n,74.9,13.4,.18,.7,15921128),Ll(r,-18.5,n,74.7,0,7);for(let p of[-64,-52]){t.boxB(p,.9,87,2.4,.3,22,it.wood),r.addPlatform(p-1.2,p+1.2,75.6,98,1.25);for(let x=78;x<=98;x+=5)t.cyl(p-1.1,-2.6,x,.16,.16,4,6965807,6),t.cyl(p+1.1,-2.6,x,.16,.16,4,6965807,6)}t.boxB(-58,.9,97,14.4,.3,2.2,it.wood),r.addPlatform(-65.2,-50.8,95.9,98.1,1.25),t.boxB(-58,1.25,76.4,15,.9,1.6,it.granite),r.addPlatform(-66,-50,75.4,77.4,1.7),r.dyn.boats=[];let f=[16777215,16765286,15681391,9358054,16777215,9485933];[[-60.5,82],[-60.5,89],[-55.5,84],[-55.5,91],[-68,86],[-47.5,88]].forEach((p,x)=>{let g=new te,m=new Tt({flatShading:!0,roughness:.8,vertexColors:!0}),_=new t.constructor;_.box(0,.25,0,1.3,.6,3.6,16052714),_.box(0,.05,0,1,.3,3,x%2?1929144:12597547),_.box(0,.7,-.3,.9,.4,1.2,15262418),_.cyl(0,.5,.4,.05,.05,4.2,9080726,5);let v=new se;v.setAttribute("position",new Ut([0,4.5,.45,0,1.1,.45,0,1.1,-1.7,0,4.5,.45,0,1.1,-1.7,0,1.1,.45],3)),v.computeVertexNormals(),_.add(v,f[x],0,0,0,1,1,1,0,0,0,0);let M=_.mesh(m);M.castShadow=!0,g.add(M),g.position.set(p[0],0,p[1]),g.rotation.y=x%2*Math.PI+.1*x,r.scene.add(g),r.dyn.boats.push(g)}),r.updaters.push(p=>r.dyn.boats.forEach((x,g)=>{x.position.y=Math.sin(r.time*1.3+g)*.12-.05,x.rotation.z=Math.sin(r.time*1.1+g*2)*.05}));let d=[11883324,11093551,13134410,9411235];for(let p of[-3,5,13])for(let x of[33,41,49,57]){let g=p+(e()-.5),m=x+(e()-.5),_=r.groundAt(g,m),v=ba[Math.floor(e()*ba.length)];r.houses.push({x:g,y:_,z:m,w:4.8,d:5.2,h:2.7,rh:1.7,c:v,rc:d[Math.floor(e()*4)],ry:0}),r.addSolid(g-2.4,g+2.4,m-2.6,m+2.6),r.addOcc(g-2.4,g+2.4,m-2.6,m+2.6,_+4);let M=new Ce(.8,.9);r.winBatch[2].add(M,16777215,g-1.2,_+1.5,m+2.66,1,1,1,0,0,0,0),r.winBatch[2].add(M,16777215,g+1.2,_+1.5,m+2.66,1,1,1,0,0,0,0),r.winBatch[2].add(M,16777215,g+2.46,_+1.5,m,1,1,1,0,Math.PI/2,0,0),r.winBatch[2].add(M,16777215,g-2.46,_+1.5,m,1,1,1,0,-Math.PI/2,0,0),t.boxB(g,_,m+2.63,.8,1.5,.08,5981750),e()<.7&&r.tree(e()<.5?"ceibo":"native",g+3.4,m+2.8,.7),e()<.6&&r.tree("bush",g-3,m+3,1)}for(let p=30;p<=60;p+=10)r.lamp(1,p,Math.PI/2)}function ox(r){let t=r.batch,e=2.2,n=r.rand,i=-44,s=41,[a,o]=st.plaza;t.boxB(i,1.3,s,28.8,.9,24.8,14471608);for(let c of[-1,1])t.boxB(i+c*8.7,e,39.2,10.2,.07,6.2,7191378),t.boxB(i+c*8.7,e,48.6,10.2,.07,6.6,7191378);for(let c=30;c<=52;c+=2.2)t.boxB(i,e,c,6.6,.015,.1,13221024);if(t.cyl(a,e,o,3.4,3.55,.5,it.concrete,16),t.cyl(a,e+.5,o,3.05,3.05,.05,5814758,16),t.cyl(a,e,o,.5,.75,2.2,14209730,8),t.cyl(a,e+2.2,o,1.2,.5,.25,14209730,10),t.sph(a,e+2.9,o,.42,13607498),r.addCircle(a,o,3.5),r.updaters.push((c,l)=>{if(Math.random()<30*c){let h=Math.random()*6.283;l.fx.soft.emit(a,e+2.6,o,Math.cos(h)*1.6,3.2+Math.random(),Math.sin(h)*1.6,.9,.22,.12,14677247,.8,9,.2)}}),t.cyl(i,e,38.4,3.2,3.2,.03,15985884,24),r.isoTex){let c=new Ce(5.4,5.4);c.rotateX(-Math.PI/2);let l=new lt(c,new Tt({map:r.isoTex,transparent:!0,alphaTest:.25,roughness:.9}));l.position.set(i,e+.05,38.4),l.receiveShadow=!0,r.scene.add(l)}t.boxB(i,e,32.3,12,.8,3.8,16052714),t.boxB(i,e+.25,34.22,12.04,.3,.06,it.celeste),t.boxB(i,e+.78,32.3,12.2,.04,4,12159322),t.boxB(i,e,35.25,6,.27,.7,15130575),t.boxB(i,e,34.55,6,.54,.7,15130575),r.addSolid(-50,-38,30.4,34.2,3,!0),r.addPlatform(-47,-41,34.9,35.6,2.47),r.addPlatform(-47,-41,34.2,34.9,2.74),t.cyl(i+.5,3,33.7,.03,.03,1.2,it.steelD,5),t.sph(i+.5,4.25,33.7,.1,2237738),t.cyl(i+.5,3,33.7,.22,.26,.05,it.steelD,8);for(let c of[-1,1])t.boxB(i+c*5.6,3,31,.5,.9,.5,2237738),t.boxB(i+c*5.6,3.9,31,.7,.5,.6,3356735);Ll(r,i,e,29.9,0,15,3.2),uu(r,-41.6,3,30.9,3.6,2.4,5.2),uu(r,-55.2,e,31.4,8.4,5.6,16),t.cyl(-55.2,e,31.4,1,1.2,.6,it.concrete,10),r.addCircle(-55.2,31.4,1.2);for(let c of[-57.3,-30.7])for(let l of[36.2,41.6,47,52.2])r.tree("butia",c,l,1+n()*.25,e);for(let c of[-1,1])r.tree("jaca",i+c*10.5,39.2,.85,e),r.tree("jaca",i+c*10.5,48.8,.85,e),r.tree("butia",i+c*6.2,50.6,.9,e);for(let c of[-1,1])for(let l of[38.4,44,49.4])t.boxB(i+c*4.6,e,l,.6,.45,2.2,it.wood);for(let[c,l,h]of[[-57.6,29.4,.8],[-30.4,29.4,-.8],[-57.6,52.6,2.3],[-30.4,52.6,-2.3],[-57.6,41,1.57],[-30.4,41,-1.57],[-51,52.6,3.14],[-37,29.4,0]])r.lamp(c,l,h,e);dn(r,"PLAZA MATRIZ",-51.5,e,52.9,0,5.2,1),Ll(r,-37,e,52.9,0,6.4),r.addInter("fest",st.fest[0],st.fest[1],{console:!1,y:un,h:4})}function lx(r,t,e){let n=r.cityBatch,i=2.2,s=14273972,a=15985884;n.boxB(t,i,e,10,8.5,8.6,s),n.boxB(t,i+8.5,e,10.4,.3,9,a),n.boxB(t,i+8.8,e,6.6,6.5,6,s),n.boxB(t,i+15.3,e,7,.3,6.4,a),n.boxB(t,i+15.6,e,4.2,4.6,4.2,s),n.boxB(t,i+20.2,e,4.6,.25,4.6,a),n.cyl(t,i+20.45,e,1.2,2,1.8,7314088,8),n.sph(t,i+22.4,e,1.25,7314088,1,1),n.cyl(t,i+23.3,e,.05,.12,3,14209730,5);for(let o of[-1,1])for(let c of[-1,1])n.cyl(t+o*3.1,i+15.6,e+c*2.8,.5,.6,2.2,s,6),n.sph(t+o*3.1,i+18,e+c*2.8,.62,7314088);for(let o=-1;o<=1;o++)n.boxB(t+o*3,i+.55,e+4.36,.4,8.2,.3,a);Ma(r,t,e,10,8.6,i,8.5,1),Ma(r,t,e,6.6,6,i+8.6,6.5,1),Ma(r,t,e,4.2,4.2,i+15.4,4.6,1),r.addSolid(t-5,t+5,e-4.3,e+4.3),r.addOcc(t-5,t+5,e-4.3,e+4.3,i+8.8),r.addOcc(t-3.3,t+3.3,e-3,e+3,i+15.6),r.addOcc(t-2.1,t+2.1,e-2.1,e+2.1,i+22)}function Ea(r,t,e,n,i=1){let s=r.batch;s.boxB(t,e,n,2.6*i,2.3*i,1.9*i,9213084);for(let a=-2;a<=2;a++)s.boxB(t+a*.5*i,e+.3*i,n+1.1*i,.12*i,1.7*i,.4*i,7305087),s.boxB(t+a*.5*i,e+.3*i,n-1.1*i,.12*i,1.7*i,.4*i,7305087);for(let a=-1;a<=1;a++)s.cyl(t+a*.8*i,e+2.3*i,n,.1*i,.16*i,1*i,12150858,6),s.sph(t+a*.8*i,e+3.35*i,n,.14*i,14277081);s.cyl(t+1*i,e+2.3*i,n+.5*i,.35*i,.35*i,.6*i,9213084,8),r.addSolid(t-1.4*i,t+1.4*i,n-1.2*i,n+1.2*i)}function Sa(r,t,e,n,i=0,s=6,a=6.5){let o=r.batch,c=Math.cos(i)*s/2,l=-Math.sin(i)*s/2;o.boxB(t+c,e,n+l,.28,a,.28,it.steel),o.boxB(t-c,e,n-l,.28,a,.28,it.steel),o.box(t,e+a,n,s+.6,.3,.3,it.steel,i);for(let h=-1;h<=1;h++)o.cyl(t+c*h*.7,e+a-.9,n+l*h*.7,.08,.14,.8,12150858,5)}function Il(r,t,e,n,i,s,a=[]){let o=r.batch,c=(l,h,u,f)=>{r.addSolid(Math.min(l,u)-.08,Math.max(l,u)+.08,Math.min(h,f)-.08,Math.max(h,f)+.08,s+1.5);let d=Math.ceil(Math.hypot(u-l,f-h)/2.2);for(let p=0;p<=d;p++)o.boxB(nt(l,u,p/d),s,nt(h,f,p/d),.1,1.5,.1,7042176);o.box((l+u)/2,s+1.45,(h+f)/2,Math.abs(u-l)+.1,.07,Math.abs(f-h)+.1,7042176),o.box((l+u)/2,s+.8,(h+f)/2,Math.abs(u-l)+.05,.05,Math.abs(f-h)+.05,7042176)};c(t,n,e,n),c(t,n,t,i),c(e,n,e,i),a.length?(c(t,i,a[0],i),c(a[1],i,e,i)):c(t,i,e,i)}function cx(r,t,e){let n=r.batch,i=2.2;n.boxB(t,i,e,12.2,.06,10.2,12037787),Il(r,t-6,t+6,e-5,e+5,i,[t-1.6,t+1.6]),Ea(r,t-3.4,i,e-1.8,1.05),Ea(r,t+.6,i,e-1.8,1.05),Sa(r,t-1.4,i,e-4.1,0,8,7),n.boxB(t+3.9,i,e+2,3.6,3.2,4.4,it.white),n.boxB(t+3.9,i+2.2,e+2,3.66,.5,4.46,it.celeste),n.boxB(t+3.9,i+3.2,e+2,3.9,.2,4.7,14341318),n.cyl(t+4.8,i+3.4,e+3.2,.04,.06,3.4,14209730,5),n.sph(t+4.8,i+6.9,e+3.2,.16,it.red),r.winBatch[2].add(new Ce(2.2,.9),16777215,t+3.9,i+1.6,e+4.26,1,1,1,0,0,0,0),r.addSolid(t+2.1,t+5.7,e-.2,e+4.2),dn(r,"CENTRO DE CONTROL DE RED",t-2.6,i,e+5.6,0,6,1.1),r.addInter("npc:valeria",st.valeria[0],st.valeria[1],{console:!1,y:un,h:3.6}),r.addInter("sub",t+.9,e+3.2,{y:i,ry:Math.PI})}function hx(r,t,e){let n=r.batch,i=2.2;n.boxB(t,i,e,12.4,.05,10.4,8094348);for(let a of[-5,0,5])for(let o of[-3.6,3.6])n.cyl(t+a,i,e+o,.22,.26,5,it.white,8);let s=r.cityBatch;s.boxB(t,i+5,e,12.6,.35,9.2,it.celeste),s.boxB(t,i+5.35,e,12.2,.08,8.8,16052714);for(let a=-2;a<=2;a++)for(let o=-1;o<=1;o++)s.box(t+a*2.3,i+5.56,e+o*2.7,2,.08,2.3,2047112,0,.12);r.dyn.chargers=[],[-4,0,4].forEach(a=>{n.boxB(t+a,i,e-2.9,.7,2,.5,16052714),n.boxB(t+a,i+2,e-2.9,.8,.14,.6,it.celeste);let o=new lt(new Ft(.42,1.1,.06),r.mats.charger);o.position.set(t+a,i+1.25,e-2.62),r.scene.add(o),r.addCircle(t+a,e-2.9,.5)}),r.addOcc(t-6.3,t+6.3,e-4.6,e+4.6,i+5.6),dn(r,"TERMINAL RAMBLA \xB7 \xD3MNIBUS EL\xC9CTRICOS",t,i+3.4,e+4.7,0,9,1,{bg:"#0b5a4a",border:"#7dffb0"}),r.addInter("npc:lucia",st.lucia[0],st.lucia[1],{console:!1,y:un,h:3.6}),r.addInter("term",-13.9,61.2,{y:i,ry:Math.PI/2,h:3.4})}function du(r){let t=r.batch,e=st.dam,n=e.top,i=it.concrete;t.box(-22.7,(n-3)/2,-55,2.6,n+3,6,i),t.box(11.3,(n-3)/2,-55,25.4,n+3,6,i),t.box(-11.4,-.2,-56,20,5.6,4,it.concreteD),t.box(-11.4,1.05,-50.4,20,.7,7.8,it.concreteD,0,.417),t.box(-11.4,n-.35,-55,20,.7,6,i);for(let u=0;u<5;u++){let f=-21.08+u*4.84;t.box(f,(n-3)/2,-54,.64,n+3,8,i),t.box(f,.3,-48.6,.64,2.6,3.2,i,0,.417)}t.box(0,n+.02,-55,47.6,.04,3.4,6975351);for(let u=-22;u<=22;u+=3.2)t.box(u,n+.05,-55,1.4,.02,.14,15327944);for(let u of[-57.85,-52.15]){t.box(0,n+.95,u,48,.1,.1,it.steelD),t.box(0,n+.5,u,48,.06,.06,it.steelD);for(let f=-24;f<=24;f+=2.4)t.boxB(f,n,u,.1,1,.1,it.steelD)}r.addSolid(e.x0,e.x1,e.z0,e.z1,n,!0);for(let u of[-1,1])t.box(u*25.8,n-.66,-55,3.8,.5,6,i,0,0,-u*.215),r.addPlatform(u>0?24:-27.6,u>0?27.6:-24,e.z0,e.z1,f=>n-(Math.abs(f)-24)/3.6*.8);r.addSolid(e.x0,e.x1,e.z0-.1,e.z0+.2,n+1),r.addSolid(e.x0,e.x1,e.z1-.2,e.z1+.1,n+1);for(let u=-20;u<=20;u+=10)r.lamp(u,-57.5,0,n);let s=fn(32,64,u=>{u.fillStyle="#bfe9fb",u.fillRect(0,0,32,64),u.fillStyle="#ffffff";for(let f=0;f<26;f++)u.fillRect(f*13%32,f*29%64,3,10+f*7%16)},{repeat:1});s.wrapS=s.wrapT=li,s.repeat.set(2,2);let a=new Ee({map:s,transparent:!0,opacity:.9,side:ye}),o=new Tt({color:3108767,flatShading:!0,roughness:.7,metalness:.3}),c=[];st.gates.forEach((u,f)=>{for(let x of[-57.6,-52.4])for(let g of[-2.3,2.3])t.boxB(u+g,n,x,.22,3.4,.22,it.yellow);for(let x of[-2.3,2.3])t.box(u+x,n+3.5,-55,.3,.3,5.6,it.yellow);for(let x of[-57.6,-55,-52.4])t.box(u,n+3.5,x,4.9,.3,.3,it.yellow);t.boxB(u,n+3.3,-55,1,.8,1,it.steelD),t.box(u,n+2.2,-55.4,.08,2.4,.08,it.steelD);let d=new lt(new Ft(4.15,3.4,.4),o);d.position.set(u,4.3,-55.4),d.castShadow=!0,r.scene.add(d);let p=new lt(new Ce(3.9,8.6),a);p.position.set(u,1.5,-50.3),p.rotation.x=-(Math.PI/2-.417),r.scene.add(p),c.push({mesh:d,fall:p,open:f<2?1:.28}),r.addInter("gate:"+f,u,-52.9,{y:n,ry:Math.PI,h:5.2})}),t.box(12,-1.1,-48,20,3.8,8,i),t.box(12,2.6,-44.2,20,3.6,.4,14275268),t.box(2.2,2.6,-48,.4,3.6,8,14275268),t.box(21.8,2.6,-48,.4,3.6,8,14275268),t.box(12,3.6,-44,20,.5,.1,it.celeste);for(let u=2;u<=22;u+=5)t.box(u,4.5,-48,.25,.25,8,it.steel);t.box(12,4.5,-44.2,20.4,.25,.4,it.steel),r.glassBatch.box(12,4.55,-48.1,19.6,.08,7.6,16777215),r.addSolid(2,22,-52,-44,4.6,!0);let l=[],h=new Tt({color:15132390,flatShading:!0,roughness:.5,metalness:.4});st.turbs.forEach((u,f)=>{t.cyl(u,.8,-48,1.55,1.7,1.3,15900730,12),t.cyl(u,2.1,-48,.5,.5,.5,it.steelD,8);let d=new te,p=new lt(new Se(1.35,1.35,.22,12),h);d.add(p);for(let x=0;x<3;x++){let g=new lt(new Ft(2.6,.12,.34),new Tt({color:14100029,roughness:.6}));g.rotation.y=x*Math.PI/3,g.position.y=.14,d.add(g)}d.position.set(u,2.45,-48),r.scene.add(d),l.push(d),t.box(u,.1,-44.1,2.2,1,.5,2042419),r.addInter("turb:"+f,u,-52.9,{y:n,ry:Math.PI,h:4.2})}),dn(r,"CENTRAL HIDROEL\xC9CTRICA",31,r.groundAt(31,-50),-49.5,-.5,7.5,1.3),dn(r,"SALA DE M\xC1QUINAS",12,2.2,-44,0,6,.9,{bg:"#1c3d5a"});for(let u=-16;u<=16;u+=4){let f=new lt(new ue(.4,6,5),new Tt({color:16743205,flatShading:!0}));f.position.set(u,hn,-62.5),r.scene.add(f),(r.dyn.buoys=r.dyn.buoys||[]).push(f)}r.updaters.push((u,f)=>{let d=f.grid;s.offset.y+=u*1.6,c.forEach((p,x)=>{let g=d.hydro.gates[x].reg?.28:1;p.open=Bt(p.open,g,1.5,u),p.mesh.position.y=4.3+p.open*2.3,p.fall.scale.x=.3+.7*p.open,p.fall.material.opacity=.9,Math.random()<p.open*60*u&&f.fx.soft.emit(st.gates[x]+(Math.random()-.5)*3.6*p.open,.3,-46.3+Math.random(),(Math.random()-.5)*2,1.5+Math.random()*2.5*p.open,1+Math.random()*2,.8,.5,1.3,16777215,.8,5,1)}),l.forEach((p,x)=>{p.rotation.y+=u*(d.hydroUnit[x]/Ge.hydro)*9,d.hydroUnit[x]>1&&Math.random()<14*u&&f.fx.soft.emit(st.turbs[x]+(Math.random()-.5)*1.6,.15,-43.6,Math.random()-.5,.3,1.5+Math.random()*2,1,.4,1,16777215,.6,0,.8)}),r.dyn.buoys.forEach((p,x)=>{p.position.y=hn+Math.sin(r.time*1.5+x)*.1})})}function pu(r){let t=r.batch,e=r.rand,n=[],i=new Tt({color:16250866,flatShading:!0,roughness:.6,transparent:!0});st.windT.forEach(([c,l],h)=>{let u=i.clone(),f=r.groundAt(c,l);t.cyl(c,f-.3,l,2.3,2.5,.6,it.concrete,10),t.cyl(c,f,l,.5,1,22,16053487,10),t.boxB(c,f+.3,l+1,.7,1.5,.1,9080726),r.addCircle(c,l,1.25);let d=new te;d.position.set(c,f+22.3,l);let p=new lt(new Ft(1.5,1.4,3.4),u);p.position.z=-.5,p.castShadow=!0,d.add(p);let x=new lt(new ue(.22,6,5),r.mats.beacon);x.position.set(0,.85,-1.6),d.add(x);let g=new te;g.position.z=1.5,d.add(g);let m=new lt(new an(.62,1.3,8),u);m.rotation.x=Math.PI/2,m.position.z=.2,g.add(m);for(let _=0;_<3;_++){let v=new Se(.1,.5,10.5,4);v.scale(1,1,.3),v.translate(0,5.6,0);let M=new lt(v,u);M.rotation.z=_*Math.PI*2/3,M.castShadow=!0,g.add(M)}r.scene.add(d),n.push({nac:d,rotor:g,speed:0,y:f,mat:u}),r.addInter("wind:"+h,c+2.2,l+1.6,{ry:.6,h:3.4})});let[s,a]=st.windTx,o=r.groundAt(s,a);t.boxB(s,o,a,11,.08,8,12169370),Il(r,s-5.5,s+5.5,a-4,a+4,o,[s-1.6,s+1.6]),Ea(r,s-2.2,o,a-1,1.1),Sa(r,s+2.6,o,a-1.4,Math.PI/2,5,6.5),t.boxB(s+3.2,o,a+2.2,1.6,2,1,9213084),r.addInter("wind:tx",s,a+2.6,{y:o,ry:0,h:3.6}),dn(r,"PARQUE E\xD3LICO LAS CUCHILLAS",41,r.groundAt(41,17.5),17.5,.6,7.5,1.2);for(let c=0;c<16;c++){let l=34+e()*68,h=-38+e()*62;if(r.nearRoad(l,h,4)||st.windT.some(p=>Math.hypot(p[0]-l,p[1]-h)<6)||In(l,h)<6)continue;let u=r.groundAt(l,h),f=e()*6,d=c%3===0;d?(t.box(l,u+.55,h,.6,.55,1,15986918,f),t.box(l+Math.sin(f)*.6,u+.7,h+Math.cos(f)*.6,.32,.34,.4,3879980,f)):(t.box(l,u+.95,h,.85,.8,1.8,c%2?10177066:2893346,f),t.box(l+Math.sin(f)*1.1,u+1.1,h+Math.cos(f)*1.1,.5,.5,.6,15986918,f));for(let[p,x]of[[-.25,-.5],[.25,-.5],[-.25,.5],[.25,.5]]){let g=Math.cos(f),m=Math.sin(f),_=d?.6:1;t.boxB(l+(p*g+x*m)*_,u,h+(-p*m+x*g)*_,.14,d?.35:.6,.14,d?3879980:4864556)}}r.updaters.push((c,l)=>{let h=l.grid,u=Math.atan2(-Math.cos(h.windDir),-Math.sin(h.windDir));if(n.forEach((f,d)=>{f.nac.rotation.y=Bt(f.nac.rotation.y,u,.6,c);let p=h.windP.t[d],x=p.on&&!p.fault,g=h.windUnit[d]/Ge.wind;f.speed=Bt(f.speed,x?g>.01?.5+g*2.8:.3*h.wind:0,1.2,c),f.rotor.rotation.z+=f.speed*c;let m=l.focus.x-l.cam.x,_=l.focus.y-l.cam.y,v=l.focus.z-l.cam.z,M=f.nac.position.x-l.cam.x,w=f.nac.position.y-l.cam.y,S=f.nac.position.z-l.cam.z,E=ot((M*m+w*_+S*v)/(m*m+_*_+v*v),0,1),R=Math.hypot(M-m*E,w-_*E,S-v*E);f.mat.opacity=Bt(f.mat.opacity,nt(.14,1,ge(6,15,R)),6,c)}),Math.random()<h.wind*55*c){let f=st.windT[Math.floor(Math.random()*5)],d=f[0]+(Math.random()-.5)*50,p=f[1]+(Math.random()-.5)*50,x=9+h.wind*14,g=r.terrainAt(d,p)+2+Math.random()*10;for(let m=0;m<5;m++)l.fx.soft.emit(d-Math.cos(h.windDir)*m*.7,g,p-Math.sin(h.windDir)*m*.7,Math.cos(h.windDir)*x,0,Math.sin(h.windDir)*x,1.3,.22-m*.03,.05,16777215,.55-m*.08,0,0)}})}function mu(r){let t=r.batch,e=[],n=fn(64,64,p=>{p.fillStyle="#ffffff",p.fillRect(0,0,64,64),p.strokeStyle="#9db4d8",p.lineWidth=2;for(let x=0;x<=64;x+=16)p.beginPath(),p.moveTo(x,0),p.lineTo(x,64),p.moveTo(0,x),p.lineTo(64,x),p.stroke()});n.wrapS=n.wrapT=li,n.repeat.set(2,6),st.solar.forEach(([p,x],g)=>{let m=r.groundAt(p,x),_=new Tt({color:11836010,map:n,roughness:.35,metalness:.35}),v=[];for(let M of[-4.3,0,4.3]){for(let S of[-4.6,0,4.6])t.boxB(p+M,m,x+S,.18,1.8,.18,it.steel);t.box(p+M,m+1.8,x,.16,.16,11.4,it.steelD);let w=new lt(new Ft(3.7,.1,11),_);w.position.set(p+M,m+1.95,x),w.castShadow=!0,w.receiveShadow=!0,r.scene.add(w),v.push(w)}r.addSolid(p-6.2,p+6.2,x-5.6,x+5.6),e.push({rows:v,mat:_,clean:0,tilt:[.7,-.55,.4,-.75][g],miss:[.7,-.55,.4,-.75][g]}),r.addInter("solar:"+g,p,x+7.4,{y:m,ry:Math.PI,h:3.4})});let[i,s]=st.inverter,a=r.groundAt(i,s);t.boxB(i,a,s,4.2,2.6,2.6,it.white),t.boxB(i,a+2.6,s,4.5,.2,2.9,14341318),t.boxB(i,a+1.9,s,4.24,.3,2.64,it.yellow);for(let p=-1;p<=1;p++)t.boxB(i+p*1.2,a+.3,s+1.32,.8,1.2,.06,9213084);r.addSolid(i-2.1,i+2.1,s-1.3,s+1.3),t.box(i+12,a+.05,s,22,.1,.5,9209462),dn(r,"PARQUE SOLAR Y BATER\xCDAS",-52,r.groundAt(-52,-59.2),-59.4,0,7,1.2);let[o,c]=st.batYard,l=r.groundAt(o,c),h=[];t.boxB(o,l,c,15,.08,17,12433058);let u=new Tt({color:797210,emissive:5111712,emissiveIntensity:1.6});for(let p of[-3.3,3.3])for(let x of[-5.2,0,5.2]){let g=o+p,m=c+x;t.boxB(g,l+.2,m,5.6,2.5,2.5,16118766),t.boxB(g,l+1.5,m,5.64,.5,2.54,it.celeste),t.boxB(g,l,m,5.2,.2,2.2,it.steelD),t.boxB(g+2.2,l+2.7,m,.9,.45,1.4,12106946),t.box(g-1.4,l+1.2,m+1.27,.06,2,.04,12433582),t.box(g+.2,l+1.2,m+1.27,.06,2,.04,12433582),t.box(g-.6,l+.75,m+1.27,1.9,.26,.05,1780258);let _=new lt(new Ft(1.8,.18,.06),u);_.position.set(g-.6,l+.75,m+1.3),r.scene.add(_),h.push({m:_,x0:g-1.5}),r.addSolid(g-2.8,g+2.8,m-1.25,m+1.25)}Sa(r,o,l,c-7.6,0,6,6),r.addInter("bat",st.batConsole[0],st.batConsole[1],{ry:0,h:3.6});let f=new wt(11836010),d=new wt(2047898);r.updaters.push((p,x)=>{let g=x.grid,m=Math.PI*(g.hour-6)/12,_=Math.sin(m)>.02,v=_?-ot(Math.PI/2-m,-.95,.95):0;e.forEach((w,S)=>{let E=g.solar.a[S],R=E.on&&!E.fault;w.clean=Bt(w.clean,R?1:0,2,p),w.mat.color.copy(f).lerp(d,w.clean),w.tilt=Bt(w.tilt,R?v:w.miss,1.5,p),w.rows.forEach(y=>{y.rotation.z=w.tilt}),R&&g.solarUnit[S]>9&&Math.random()<1.5*p&&x.fx.glow.emit(st.solar[S][0]+(Math.random()-.5)*11,w.rows[0].position.y+.4,st.solar[S][1]+(Math.random()-.5)*10,0,.6,0,.6,.9,.1,16773280,.9,0,0)});let M=g.bat.connected?g.bat.soc:0;u.emissive.set(g.bat.connected?M<.25?16734797:M<.6?16763196:5111712:2240563),h.forEach(w=>{let S=Math.max(.03,M);w.m.scale.x=S,w.m.position.x=w.x0+.9*S})})}function gu(r){let t=r.batch,e=r.rand,n=2,[i,s]=st.boiler;t.boxB(i+2,n,s+3,9,9.5,9,8364922),t.boxB(i+2,n+9.5,s+3,9.4,.3,9.4,6127450);for(let d=-3;d<=3;d++)t.boxB(i+2+d*1.2,n+.4,s-1.53,.12,8.8,.06,7115114);t.boxB(i-7,n,s+3.5,8,5.2,7,15262418),t.boxB(i-7,n+5.2,s+3.5,8.4,.3,7.4,it.celeste),r.winBatch[2].add(new Ce(5,1.2),16777215,i-7,n+3.4,s-.04,1,1,1,0,Math.PI,0,0),t.cyl(i+9.2,n,s+5,.75,1,19,16052714,10),t.cyl(i+9.2,n+13,s+5,.86,.9,1.4,it.red,10),t.cyl(i+9.2,n+16.6,s+5,.8,.83,1.4,it.red,10),r.addSolid(i-2.5,i+6.5,s-1.5,s+7.5),r.addSolid(i-11,i-3,s,s+7),r.addOcc(i-2.5,i+6.5,s-1.5,s+7.5,n+9.8),r.addOcc(i-11,i-3,s,s+7,n+5.5),r.addCircle(i+9.2,s+5,1.2);let a=new Tt({color:4202508,emissive:16742938,emissiveIntensity:0}),o=new lt(new Ft(2.2,1.3,.1),a);o.position.set(i+2,n+1.6,s-1.56),r.scene.add(o);let[c,l]=st.chips;for(let d of[-4,4])for(let p of[-3.2,3.2])t.boxB(c+d,n,l+p,.25,4.6,.25,it.steel);t.box(c,n+4.8,l,9.4,.25,7.6,12106946,0,0,.08),t.add(new an(2.6,2.6,8),13215339,c-1.6,n+1.3,l-.5),t.add(new an(2,2,8),13939322,c+2.2,n+1,l+.6),t.add(new an(1.4,1.3,7),12556892,c+.4,n+.65,l+2.2),r.addCircle(c-1.6,l-.5,2.2),r.addCircle(c+2.2,l+.6,1.7),t.box(c+7,n+3.4,l+3.2,9.4,.3,1,4015696,.38,0,.42),t.boxB(c+4.4,n,l+2.2,.2,1.6,.2,it.steel),t.boxB(c+8.6,n,l+3.8,.2,4.2,.2,it.steel);for(let d=0;d<3;d++)for(let p=0;p<4-d;p++)t.cyl(c-7+p*.9+d*.45,n+.42+d*.75,l+8,.4,.4,5,11041615,7,Math.PI/2,0,0);t.boxB(c-4,n+.4,l-6,2.4,1.2,1.6,it.yellow),t.boxB(c-4.4,n+1.6,l-6,1.2,1,1.4,3356735),t.box(c-2.2,n+.9,l-6,1.6,.9,1.5,it.steelD,0,0,.3);for(let d of[-.8,.8])for(let p of[-.85,.85])t.cyl(c-4+d,n+.45,l-6+p,.45,.45,.3,2237738,8,Math.PI/2,0,0);r.addInter("bio:chips",c+.5,l+4.6,{ry:0,h:3.4}),r.addInter("bio:boiler",i-1.2,s-3.4,{ry:0,h:3.6});let[h,u]=st.bioSub;t.boxB(h,n,u,9,.08,7.5,12169370),Il(r,h-4.5,h+4.5,u-3.75,u+3.75,n,[h-1.5,h+1.5]),Ea(r,h-1.6,n,u-.8,1),Sa(r,h+2.2,n,u-1.6,Math.PI/2,4.6,6.3),r.addInter("bio:sub",h,u+2.2,{ry:0,h:3.6}),dn(r,"PLANTA DE BIOMASA",45,r.groundAt(45,66.4),66.6,.2,6.5,1.2,{bg:"#2f5d2a",border:"#c9f29b"});let f=(d,p,x,g)=>{for(let m=d;m<=p;m+=3.1)for(let _=x;_<=g;_+=3.1){let v=m+(e()-.5)*.6,M=_+(e()-.5)*.6;In(v,M)<7||r.nearRoad(v,M,3.2)||r.tree("euca",v,M,.85+e()*.4)}};f(42,106,33,47),f(84,106,52,74),f(44,78,74,77),r.updaters.push((d,p)=>{let x=p.grid.bio.pressure;a.emissiveIntensity=x*(2+Math.sin(r.time*9)*.5),x>.05&&Math.random()<x*26*d&&p.fx.soft.emit(i+9.2+(Math.random()-.5)*.6,n+19.4,s+5,Math.cos(p.grid.windDir)*(1+p.grid.wind*4),2.2+Math.random(),Math.sin(p.grid.windDir)*(1+p.grid.wind*3),3.2,1.2,4.6,16777215,.75,-.25,.25),r.mats.charger.emissiveIntensity=p.grid.bio.routed?2.2+Math.sin(r.time*6)*.6:0})}function xu(r){let t=it.asphalt,e=it.gravel;r.road([[-10,27],[8,27],[22,26],[34,22.5]],3.4,t),r.road([[34,22.5],[42,16.5],[48,12.5]],2.6,e),r.road([[48,12.5],[57,5],[66,-1]],2.4,e),r.road([[66,-1],[60,-14],[54.5,-25.5]],2.2,e),r.road([[66,-1],[70,-18],[72.5,-33]],2.2,e),r.road([[66,-1],[78,-8],[88,-10]],2.2,e),r.road([[66,-1],[76,8],[85,13.5]],2.2,e),r.road([[-10,69],[8,70],[28,66.5],[44,62.5]],3.6,t),r.road([[-44,11],[-45.5,4],[-46,-3]],3.4,t),r.road([[-46,-31],[-47,-42],[-52,-52],[-57,-58.6]],3.4,t),r.road([[-12,13],[4,2],[16,-14],[24,-34],[27.5,-49],[26,-55]],3.4,t),r.road([[-24,-55],[-36,-57.5],[-47,-59.2],[-57,-58.6]],3.2,t);let n=r.batch,i=st.bridge,s=c=>2.02+1.7*Math.sin(Math.PI*ot((c-i.z0)/(i.z1-i.z0),0,1));r.addPlatform(i.x-2.3,i.x+2.3,i.z0,i.z1,(c,l)=>s(l));let a=14,o=(i.z1-i.z0)/a;for(let c=0;c<a;c++){let l=i.z0+c*o,h=l+o,u=(l+h)/2,f=-Math.atan2(s(h)-s(l),o);n.box(i.x,s(u)-.2,u,4.6,.4,o+.12,it.concrete,0,f),n.box(i.x,s(u)+.01,u,3.6,.03,o+.1,t,0,f);for(let d of[-1,1])n.boxB(i.x+d*2.2,s(l),l,.14,1,.14,it.white),n.box(i.x+d*2.2,s(u)+.95,u,.12,.12,o+.1,it.white,0,f)}for(let c of[-23.5,-10.5])for(let l of[-1.5,1.5])n.cyl(i.x+l,-3,c,.5,.6,s(c)+2.8,it.concreteD,8);r.lamp(i.x+2.6,i.z1+1,-Math.PI/2),r.lamp(i.x-2.6,i.z0-1,Math.PI/2)}function yu(r){let t=r.batch,e=[],n=(h,u,f,d)=>{let p=u.map(([m,_,v],M)=>{let w=r.groundAt(m,_),S=M===0||M===u.length-1,E=u[Math.max(0,M-1)],R=u[Math.min(u.length-1,M+1)],y=Math.atan2(R[0]-E[0],R[1]-E[1]);if(!S){t.add(new Se(.28,1.25,13,4),it.steel,m,w+6.5,_,1,1,1,0,y+Math.PI/4,0),t.box(m,w+11.2,_,6.6,.24,.3,it.steel,y),t.box(m,w+12.9,_,3.6,.2,.26,it.steel,y);for(let b of[-3,3])t.cyl(m+Math.cos(y)*b,w+10.5,_-Math.sin(y)*b,.07,.12,.7,12150858,5);r.addCircle(m,_,1)}return{x:m,y:w+(S?v||6:10.5),z:_,ry:y,end:S}}),x=[];for(let m=0;m<p.length-1;m++){let _=p[m],v=p[m+1];for(let M of[-3,0,3]){let w=null;for(let S=0;S<=10;S++){let E=S/10,R=4*E*(1-E)*1.7,y=_.end?M*.6:M,b=v.end?M*.6:M,T=_.y+(M===0&&!_.end?2.3:0),L=v.y+(M===0&&!v.end?2.3:0),B=[nt(_.x+Math.cos(_.ry)*y,v.x+Math.cos(v.ry)*b,E),nt(T,L,E)-R,nt(_.z-Math.sin(_.ry)*y,v.z-Math.sin(v.ry)*b,E)];w&&e.push(...w,...B),w=B,M===0&&x.push(new D(B[0],B[1],B[2]))}}}let g=[0];for(let m=1;m<x.length;m++)g.push(g[m-1]+x[m].distanceTo(x[m-1]));r.lines[h]={path:x,cum:g,len:g[g.length-1],color:f,cap:d,phase:Math.random(),level:0}},i=[st.substation[0]-1.4,st.substation[1]-4.1,7];n("eolica",[[st.windTx[0]+2.6,st.windTx[1]-1.4,6.5],[33,12],[14,15],[-2,16.5],i],10217471,40),n("hidro",[[23,-50,3],[31,-42],[26,-22],[15,-4],[0,9],i],5951999,144),n("solar",[[st.batYard[0],st.batYard[1]-7.6,6],[-39,-50],[-38,-33],[-30,-5],[-22,6],i],16769126,98),n("biomasa",[[st.bioSub[0]+2.2,st.bioSub[1]-1.6,6.3],[56,46],[36,40],[16,34],[-4,22],i],11989626,40);let s=[[-11,28],[-11,40],[-11,52],[-11,64]],a=[];s.forEach(([h,u],f)=>{t.cyl(h,2.1,u,.1,.14,7,8018490,6),t.box(h,8.6,u,1.8,.14,.14,8018490),f%2===0&&(t.sph(h-.5,8.95,u,.34,10839871,.9),t.box(h-.5,8.95,u+.3,.16,.2,.1,3810326),t.box(h+.45,8.85,u,.14,.24,.3,11887901),t.box(h+.45,9,u+.16,.1,.1,.12,14262374)),a.push(new D(h,8.7,u))});for(let h=0;h<a.length-1;h++)for(let u of[-.8,.8])e.push(a[h].x+u,a[h].y,a[h].z,a[h+1].x+u,a[h+1].y,a[h+1].z);let o=[0];for(let h=1;h<a.length;h++)o.push(o[h-1]+a[h].distanceTo(a[h-1]));r.lines.ciudad={path:a,cum:o,len:o[o.length-1],color:16767370,cap:1,phase:0,level:0};let c=new se;c.setAttribute("position",new Ut(e,3)),r.scene.add(new ds(c,new Ci({color:2830392})));let l=(h,u)=>{let f=u*h.len,d=1;for(;d<h.cum.length-1&&h.cum[d]<f;)d++;let p=(f-h.cum[d-1])/Math.max(1e-6,h.cum[d]-h.cum[d-1]);return[nt(h.path[d-1].x,h.path[d].x,p),nt(h.path[d-1].y,h.path[d].y,p),nt(h.path[d-1].z,h.path[d].z,p)]};r.updaters.push((h,u)=>{let f=u.grid.out,d={eolica:f.wind,hidro:f.hydro,solar:f.solar+Math.max(0,f.bat),biomasa:f.bio,ciudad:f.pct/100};for(let p in r.lines){let x=r.lines[p],g=ot(d[p]/x.cap,0,1);if(x.level=Bt(x.level,g,3,h),x.level<.02)continue;x.phase=(x.phase+h*(5+30*x.level)/x.len)%1;let m=Math.max(3,Math.round(x.len/14));for(let _=0;_<m;_++){let v=l(x,(x.phase+_/m)%1);u.fx.glow.sprite(v[0],v[1],v[2],1.2+1.8*x.level,x.color,.35+.65*x.level)}}})}function _u(r){let t=r.batch,e=va("PARADA",{w:256,h:96,bg:"#0b5a4a",fg:"#ffffff",border:"#7dffb0",size:60}),n=new Tt({map:e,emissive:16777215,emissiveMap:e,emissiveIntensity:.4,roughness:.8});st.stops.forEach(([i,s],a)=>{let o=r.groundAt(i,s);t.boxB(i,o,s-1.1,3,.08,1.8,12433058);for(let c of[-1.3,1.3])t.boxB(i+c,o,s-1.7,.12,2.6,.12,it.steelD);t.box(i,o+2.65,s-1.15,3.2,.12,1.7,it.celeste),t.box(i,o+1.4,s-1.74,2.6,1.6,.05,14676987),t.boxB(i,o+.35,s-1.35,2.2,.12,.5,it.wood),t.cyl(i+1.9,o,s-.6,.06,.07,3.4,it.steelD,6),r.addCircle(i+1.9,s-.6,.25),r.addSolid(i-1.4,i+1.4,s-1.85,s-1.6,o+2.7);for(let c of[0,Math.PI]){let l=new lt(new Ce(1.5,.56),n);l.position.set(i+1.9,o+3.2,s-.6+(c?-.03:.03)),l.rotation.y=c,r.scene.add(l)}r.addInter("stop:"+a,i,s,{console:!1,y:o,h:4.4})})}var ux=[[-24,71.8],[-44,52.3],[30.5,-41],[37.5,24.2],[-52,-56.2],[40.5,60]];function vu(r){let t=r.rand,e=r.batch,[n,i]=st.mateo,s=r.groundAt(n-4,i+3);r.houses.push({x:n-4.5,y:s,z:i+3.5,w:5.4,d:4.4,h:2.5,rh:1.9,c:15853520,rc:11770458,ry:.3}),r.addSolid(n-7.2,n-1.8,i+1.3,i+5.7),r.tree("ombu",n+7.5,i+7.5,1.1),e.cyl(n-.4,r.groundAt(n-.4,i+2.8),i+2.8,.5,.5,.5,7171437,8);for(let c=0;c<6;c++)e.boxB(n+.5+c*1.6,r.groundAt(n+.5+c*1.6,i-3.4),i-3.4,.14,1.1,.14,it.wood);r.addInter("npc:mateo",n,i,{console:!1,h:3.6});let a=0,o=0;for(;a<230&&o++<4e3;){let c=nt(J.minX+4,J.maxX-3,t()),l=nt(J.minZ+3,J.maxZ-4,t());if(In(c,l)<5||$n(c,l)<1.6||c>-88&&c<20&&l>6&&l<80||c>-92&&c<-33&&l>-107&&l<-57||c>38&&l>28||Ui(c,l)>-7||l<-44&&l>-62&&Math.abs(c)<32||r.nearRoad(c,l,3.5)||Math.hypot(c-n,l-i)<9||ux.some(x=>Math.hypot(x[0]-c,x[1]-l)<5)||Math.hypot(c-st.windTx[0],l-st.windTx[1])<9||st.windT.some(x=>Math.hypot(x[0]-c,x[1]-l)<7))continue;let h=$s(c,l)<22||Ui(c,l)>-16,u=c>30;if(!h&&t()<(u?.8:.45))continue;let f=t(),d=h?f<.3?"ceibo":f<.85?"native":"bush":f<.12?"ombu":f<.5?"native":f<.65?"ceibo":"bush",p=d==="ombu"?.7+t()*.3:.8+t()*.5;a++,!(d!=="bush"&&st.stops.some(x=>Math.hypot(x[0]-c,x[1]-l)<7))&&r.tree(d,c,l,p)}for(let c=0;c<26;c++){let l=t()*6.283,h=-62+Math.cos(l)*(34+t()*6)*.9,u=-78+Math.sin(l)*30;In(h,u)>5&&Ui(h,u)<-7&&!(h>-90&&h<-34&&u>-106&&u<-58)&&r.tree("native",h,u,.8)}for(let c=0;c<40;c++){let l=nt(J.minX,J.maxX,t()),h=nt(J.minZ,J.maxZ,t()),u=$n(l,h);u>1.5&&!(l>-88&&l<20&&h>6&&h<80)&&!r.nearRoad(l,h,2.5)&&e.add(new He(.4+t()*.6,0),10131084,l,u+.1,h,1,.6,1,0,t()*6,0)}}var fx=`
attribute vec4 aColor; attribute float aSize; varying vec4 vColor; uniform float uScale;
void main(){ vColor=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mv;
  gl_PointSize=clamp(aSize*uScale/max(0.1,-mv.z),1.0,300.0); }`,dx=r=>`
varying vec4 vColor;
void main(){ float d=length(gl_PointCoord-0.5);
  ${r?"float a=smoothstep(0.5,0.05,d);":"if(d>0.5) discard; float a=1.0;"}
  gl_FragColor=vec4(vColor.rgb,vColor.a*a);
#include <colorspace_fragment>
}`,ui=new wt,wa=class{constructor(t,e,n){this.n=e,this.count=0,this.imm=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.col=new Float32Array(e*4),this.grav=new Float32Array(e),this.drag=new Float32Array(e);let i=e+400;this.bp=new Float32Array(i*3),this.bc=new Float32Array(i*4),this.bs=new Float32Array(i),this.immList=[];let s=new se;s.setAttribute("position",new me(this.bp,3).setUsage(ys)),s.setAttribute("aColor",new me(this.bc,4).setUsage(ys)),s.setAttribute("aSize",new me(this.bs,1).setUsage(ys)),this.mat=new Qe({uniforms:{uScale:{value:600}},vertexShader:fx,fragmentShader:dx(n),transparent:!0,depthWrite:!1,blending:n?as:si}),this.mesh=new ps(s,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n?12:11,t.add(this.mesh)}emit(t,e,n,i,s,a,o,c,l,h,u,f,d){if(this.count>=this.n)return;let p=this.count++;this.p[p*3]=t,this.p[p*3+1]=e,this.p[p*3+2]=n,this.v[p*3]=i,this.v[p*3+1]=s,this.v[p*3+2]=a,this.life[p]=o,this.max[p]=o,this.s0[p]=c,this.s1[p]=l,this.grav[p]=f,this.drag[p]=d,ui.set(h),this.col[p*4]=ui.r,this.col[p*4+1]=ui.g,this.col[p*4+2]=ui.b,this.col[p*4+3]=u}sprite(t,e,n,i,s,a){this.immList.length<400*6&&this.immList.push(t,e,n,i,s,a)}update(t){let e=0;for(let s=0;s<this.count;s++){if(this.life[s]-=t,this.life[s]<=0)continue;let a=1-this.drag[s]*t;this.v[s*3]*=a,this.v[s*3+2]*=a,this.v[s*3+1]=this.v[s*3+1]*a-this.grav[s]*t,this.p[s*3]+=this.v[s*3]*t,this.p[s*3+1]+=this.v[s*3+1]*t,this.p[s*3+2]+=this.v[s*3+2]*t,e!==s&&(this.p.copyWithin(e*3,s*3,s*3+3),this.v.copyWithin(e*3,s*3,s*3+3),this.col.copyWithin(e*4,s*4,s*4+4),this.life[e]=this.life[s],this.max[e]=this.max[s],this.s0[e]=this.s0[s],this.s1[e]=this.s1[s],this.grav[e]=this.grav[s],this.drag[e]=this.drag[s]);let o=1-this.life[e]/this.max[e];this.bp[e*3]=this.p[e*3],this.bp[e*3+1]=this.p[e*3+1],this.bp[e*3+2]=this.p[e*3+2],this.bc[e*4]=this.col[e*4],this.bc[e*4+1]=this.col[e*4+1],this.bc[e*4+2]=this.col[e*4+2],this.bc[e*4+3]=this.col[e*4+3]*(o<.15?o/.15:1-(o-.15)/.85),this.bs[e]=this.s0[e]+(this.s1[e]-this.s0[e])*o,e++}this.count=e;let n=this.immList;for(let s=0;s<n.length;s+=6)this.bp[e*3]=n[s],this.bp[e*3+1]=n[s+1],this.bp[e*3+2]=n[s+2],this.bs[e]=n[s+3],ui.set(n[s+4]),this.bc[e*4]=ui.r,this.bc[e*4+1]=ui.g,this.bc[e*4+2]=ui.b,this.bc[e*4+3]=n[s+5],e++;n.length=0;let i=this.mesh.geometry;i.setDrawRange(0,e),i.attributes.position.needsUpdate=!0,i.attributes.aColor.needsUpdate=!0,i.attributes.aSize.needsUpdate=!0}},Ta=class{constructor(t){this.soft=new wa(t,1600,!1),this.glow=new wa(t,1600,!0)}setScale(t){this.soft.mat.uniforms.uScale.value=t,this.glow.mat.uniforms.uScale.value=t}update(t){this.soft.update(t),this.glow.update(t)}puff(t,e,n,i=8,s=14272931,a=1.4){for(let o=0;o<i;o++){let c=Math.random()*6.283,l=a*(.4+Math.random());this.soft.emit(t,e,n,Math.cos(c)*l,.6+Math.random(),Math.sin(c)*l,.5+Math.random()*.3,.35,.9,s,.7,1.5,2.5)}}sparks(t,e,n,i=10,s=16765503){for(let a=0;a<i;a++){let o=Math.random()*6.283,c=2+Math.random()*4;this.glow.emit(t,e,n,Math.cos(o)*c,2+Math.random()*4,Math.sin(o)*c,.35+Math.random()*.35,.3,.05,s,1,12,1)}}splash(t,e,n,i=14){for(let s=0;s<i;s++){let a=Math.random()*6.283,o=1+Math.random()*2.5;this.soft.emit(t,e,n,Math.cos(a)*o,2.5+Math.random()*3,Math.sin(a)*o,.6+Math.random()*.3,.3,.12,16777215,.95,11,.5)}}firework(t,e,n,i){for(let s=0;s<70;s++){let a=Math.random()*6.283,o=Math.acos(2*Math.random()-1),c=9+Math.random()*5;this.glow.emit(t,e,n,Math.sin(o)*Math.cos(a)*c,Math.cos(o)*c,Math.sin(o)*Math.sin(a)*c,1.2+Math.random()*.7,1.4,.2,i,1,3.5,1.3)}}};var tn={IDLE:"idle",RUN:"run",JUMP:"jump",SWIM:"swim",INTERACT:"interact",CELEBRATE:"celebrate"},Aa=class{constructor(t,e,n,i){this.world=e,this.fx=n,this.audio=i,this.pos=new D(st.startCapi[0],un,st.startCapi[1]),this.vel=new D,this.vy=0,this.heading=Math.PI,this.state=tn.IDLE,this.grounded=!0,this.swimming=!1,this.t=0,this.detour=0,this.side=1,this.stuckAll=0,this.lastGoto=null,this.phase=0,this.dash=0,this.busy=0,this.cele=0,this.goto=null,this.stuck=0,this.blink=2,this.sniff=3,this.led=0,this.j={legL:0,legR:0,armL:0,armR:0,armLz:0,armRz:0,tilt:0,roll:0,headX:0,lift:0,sy:1},this.build(t)}build(t){let e=fn(64,64,b=>{b.fillStyle="#a56f3e",b.fillRect(0,0,64,64);let T=vn(3);for(let L=0;L<420;L++)b.fillStyle=T()<.5?"rgba(80,45,20,0.28)":"rgba(215,160,100,0.25)",b.fillRect(T()*64,T()*64,1.5,4+T()*6)},{repeat:2}),n=(b,T={})=>new Tt({color:b,roughness:.8,...T}),i=new Tt({map:e,roughness:1}),s=n(8014374,{roughness:1}),a=n(13607020,{roughness:1}),o=n(2825234),c=n(16761888,{roughness:.45}),l=n(5227511,{roughness:.7,side:ye});this.mats={helmet:c,vest:l};let h=this.mats.band=n(15859563,{emissive:13162554,emissiveIntensity:.5}),u=n(11976391,{metalness:.6,roughness:.35}),f=n(4015696),d=(b,T,L,B,I,N)=>{let F=new lt(b,T);return F.position.set(L,B,I),F.castShadow=!0,N.add(F),F},p=new te,x=new te;x.position.y=1,p.add(x),this.root=p,this.rig=x,d(new ue(.62,16,12),i,0,.02,0,x).scale.set(1,1.12,.92),d(new ue(.5,12,10),a,0,-.08,.3,x).scale.set(.82,.95,.5),d(new Se(.645,.7,.74,16,1,!0),l,0,.14,0,x).scale.z=.94;for(let b of[-.08,.3]){let T=d(new Pi(.69,.045,6,20),h,0,b,0,x);T.rotation.x=Math.PI/2,T.scale.y=.94}let g=fn(64,64,b=>{b.fillStyle="#ffd23f",b.beginPath(),b.arc(32,32,30,0,7),b.fill(),b.fillStyle="#12325a",b.beginPath(),b.moveTo(37,6),b.lineTo(16,36),b.lineTo(30,36),b.lineTo(25,58),b.lineTo(48,26),b.lineTo(34,26),b.closePath(),b.fill()}),m=d(new na(.15,12),new Tt({map:g,roughness:.6}),-.3,.3,.6,x);m.rotation.y=-.5;let _=d(new Pi(.66,.05,6,18),o,0,-.34,0,x);_.rotation.x=Math.PI/2,d(new Ft(.14,.12,.08),c,0,-.34,.63,x),this.beltWrench=d(new Ft(.07,.42,.07),u,.62,-.52,.12,x);let v=new te;v.position.set(0,.12,-.66),x.add(v),d(new Ft(.66,.8,.32),f,0,0,0,v),d(new Ft(.7,.1,.36),c,0,.4,0,v),d(new Ft(.44,.62,.02),n(1120285),0,-.02,-.165,v),this.leds=[];for(let b=0;b<5;b++){let T=new Tt({color:1384474,emissive:5111712,emissiveIntensity:0});this.leds.push(d(new Ft(.36,.085,.03),T,0,-.26+b*.12,-.18,v)),this.leds[b].castShadow=!1}let M=(b,T,L,B,I,N)=>{let F=new te;F.position.set(b,T,L),x.add(F),d(new ms(I,B,4,8),i,0,-B/2-I*.4,0,F);let O=d(new ue(I*1.15,8,6),s,0,-B-I*1.2,N?0:.07,F);return N||O.scale.set(1,.6,1.5),F};this.legL=M(-.27,-.5,0,.22,.18),this.legR=M(.27,-.5,0,.22,.18),this.armL=M(-.66,.36,.05,.4,.13,!0),this.armR=M(.66,.36,.05,.4,.13,!0);let w=new te;w.position.set(0,-.62,.1),w.rotation.x=-1.2,this.armR.add(w),this.wrench=w,d(new Ft(.07,.6,.07),u,0,.25,0,w),d(new Pi(.11,.045,5,8,4.6),u,0,.6,0,w);let S=d(new Ft(.44,.32,.04),new Tt({color:1060928,emissive:5232383,emissiveIntensity:1.3,transparent:!0,opacity:.85}),.1,-.62,.22,this.armL);S.rotation.x=-1,this.tablet=S;let E=new te;E.position.set(0,.86,.06),x.add(E),this.head=E,d(new ue(.56,16,12),i,0,0,0,E).scale.set(1,.92,1),d(new ue(.42,14,10),i,0,-.11,.44,E).scale.set(1.05,.8,1.12),d(new ue(.12,10,8),o,0,.02,.86,E).scale.set(1.35,.7,.55),d(new Ft(.2,.025,.05),o,0,-.25,.85,E),d(new Ft(.055,.08,.04),n(16777215),-.035,-.3,.85,E),d(new Ft(.055,.08,.04),n(16777215),.035,-.3,.85,E),this.eyes=[];for(let b of[-1,1]){let T=d(new ue(.095,10,8),n(1182728,{roughness:.2}),b*.38,.04,.42,E);this.eyes.push(T),d(new ue(.032,6,6),new Ee({color:16777215}),b*.4,.085,.495,E),d(new ue(.06,8,6),n(15250842,{roughness:1}),b*.3,-.12,.72,E).scale.set(1.3,.6,.6)}this.ears=[];for(let b of[-1,1]){let T=new te;T.position.set(b*.47,.44,-.1),E.add(T),this.ears.push(T),d(new ue(.14,8,8),s,0,.06,0,T).scale.set(.7,1,.9),d(new ue(.08,6,6),n(14260868),b*.04,.06,.05,T).scale.set(.5,.9,.6);let L=d(new Pi(.15,.035,5,10),c,b*.44,.42,-.1,E);L.rotation.y=Math.PI/2,L.rotation.x=b*.4}let y=new te;y.position.set(0,.2,-.04),y.rotation.x=-.3,E.add(y),d(new ue(.58,16,8,0,Math.PI*2,0,Math.PI/2),c,0,.03,0,y).scale.set(1,.72,1.04),d(new Se(.61,.63,.06,18),c,0,.04,0,y),d(new Ft(.44,.05,.16),c,0,.04,.62,y),d(new Ft(.12,.07,.9),c,0,.45,0,y),this.lamp=d(new Ft(.16,.1,.06),new Tt({color:15268863,emissive:10481919,emissiveIntensity:.6}),0,.2,.57,y),this.wrench.visible=!1,this.tablet.visible=!1,p.traverse(b=>{if(b.isMesh){b.layers.enable(1),b.renderOrder=3;let T=b.material;T.stencilWrite=!0,T.stencilRef=1,T.stencilFunc=Nr,T.stencilZPass=ua}}),p.position.copy(this.pos),t.add(p)}setLed(t,e){let n=Math.round(ot(t,0,1)*5);this.leds.forEach((i,s)=>{i.material.emissive.set(e?5111712:t<.4?16742989:16763196),i.material.emissiveIntensity=s<n?2.2:.05})}setOutfit(t){this.mats.helmet.color.set(t.helmet),this.mats.vest.color.set(t.vest),this.mats.band.color.set(t.band),this.mats.band.emissive.set(t.band).multiplyScalar(.7)}celebrate(t=2.4){this.cele=t,this.celeKind=((this.celeKind||0)+1)%4,this.celeT=0}work(t=1.2){this.busy=t}navigate(t,e,n=.6,i=null){let s=this.nav?this.nav.find(this.pos.x,this.pos.z,t,e):null;this.goto={x:t,z:e,r:n,done:i,path:s,pi:0}}teleport(t,e){this.pos.set(t,this.world.groundAt(t,e),e),this.vel.set(0,0,0),this.vy=0,this.goto=null,this.swimming=!1,this.grounded=!0}update(t,e){let n=this.world,i=this.pos;this.t+=t,this.cele=Math.max(0,this.cele-t),this.busy=Math.max(0,this.busy-t),this.dash=Math.max(0,this.dash-t);let s=e.locked||this.busy>0;this.talking=!!e.talking;let a=0,o=0;if(s)e.locked&&(this.goto=null);else if(e.mx||e.mz){this.goto=null;let R=-Math.sin(e.yaw),y=-Math.cos(e.yaw),b=Math.cos(e.yaw),T=-Math.sin(e.yaw);a=R*e.mz+b*e.mx,o=y*e.mz+T*e.mx;let L=Math.hypot(a,o);L>1&&(a/=L,o/=L)}else if(this.goto){let R=this.goto.x-i.x,y=this.goto.z-i.z;if(Math.hypot(R,y)<(this.goto.r||.6)){let T=this.goto.done;this.goto=null,T&&T()}else{let T=this.goto.path,L=this.goto.x,B=this.goto.z;if(T){for(;this.goto.pi<T.length-1&&Math.hypot(T[this.goto.pi].x-i.x,T[this.goto.pi].z-i.z)<1;)this.goto.pi++;this.goto.pi<T.length&&(L=T[this.goto.pi].x,B=T[this.goto.pi].z,this.goto.pi===T.length-1&&Math.hypot(L-i.x,B-i.z)<.5&&this.goto.pi++)}let I=L-i.x,N=B-i.z,F=Math.hypot(I,N)||1;if(a=I/F,o=N/F,this.detour>0){this.detour-=t;let O=this.side*1.3,k=Math.cos(O),X=Math.sin(O),$=a*k-o*X;o=a*X+o*k,a=$}}}let c=n.waterAt(i.x,i.z),l=this.swimming?6.8:11.5;this.dash>0&&(l*=2);let h=this.swimming?4:this.grounded?14:5;this.vel.x=Bt(this.vel.x,a*l,h,t),this.vel.z=Bt(this.vel.z,o*l,h,t),e.jump&&!s&&(this.swimming?this.dash<=0&&(this.dash=.55,this.fx.splash(i.x,c+.1,i.z,10),this.audio.splash(.5)):this.grounded&&(this.vy=11.2,this.grounded=!1,this.audio.jump()));let u=(R,y)=>{let b=ot(i.x+R,J.minX+1,J.maxX-1),T=ot(i.z+y,J.minZ+1,J.maxZ-1),L=Math.hypot(b-i.x,T-i.z);if(L<1e-6)return!1;let B=n.groundAt(b,T,i.y),I=B-i.y;return(this.grounded||this.swimming)&&I>.7&&I/L>2.4||!this.grounded&&!this.swimming&&I>.25?!1:(i.x=b,i.z=T,!0)},f=this.vel.x*t,d=this.vel.z*t,p=i.x,x=i.z;u(f,d)||u(f,0)||u(0,d),n.resolve(i,.55,i.y);let g=Math.hypot(i.x-p,i.z-x),m=Math.hypot(f,d);this.goto&&(this.goto!==this.lastGoto&&(this.lastGoto=this.goto,this.stuck=0,this.stuckAll=0,this.detour=0,this.side=1),m>1e-4&&g<m*.35?(this.stuck+=t,this.stuckAll+=t,this.stuck>.1&&this.detour<=0&&(this.side=-this.side,this.detour=.7,this.stuck=0),this.stuckAll>2.2&&(this.goto=null)):this.stuck=0);let _=n.groundAt(i.x,i.z,i.y),v=n.waterAt(i.x,i.z),M=_<v-1.2,w=v-1.1;this.swimming&&(M?(i.y=Bt(i.y,w+Math.sin(this.t*2.4)*.05,8,t),this.vy=0):(this.swimming=!1,this.grounded=!0,i.y=Math.max(_,i.y))),this.swimming||(this.grounded?M&&i.y<=w+.4?(this.swimming=!0,this.grounded=!1,this.fx.splash(i.x,v+.1,i.z,18),this.audio.splash(1)):_<i.y-.9?(this.grounded=!1,this.vy=0):i.y=_>i.y?_:Bt(i.y,_,25,t):(this.vy-=30*t,i.y+=this.vy*t,M&&i.y<=w?(this.swimming=!0,i.y=w-.3,this.fx.splash(i.x,v+.1,i.z,22),this.audio.splash(1)):i.y<=_&&this.vy<=0&&(i.y=_,this.grounded=!0,this.vy<-7&&(this.fx.puff(i.x,_+.15,i.z,9,_<v?16777215:14272931),this.audio.land()),this.vy=0)));let S=Math.hypot(this.vel.x,this.vel.z);S>.6&&(this.heading+=Yn(this.heading,Math.atan2(this.vel.x,this.vel.z))*Math.min(1,t*12)),e.face!=null&&S<.6&&(this.heading+=Yn(this.heading,e.face)*Math.min(1,t*10));let E=this.state;if(this.state=this.swimming?tn.SWIM:this.cele>0&&this.grounded?tn.CELEBRATE:this.busy>0||e.working?tn.INTERACT:this.grounded?S>1?tn.RUN:tn.IDLE:tn.JUMP,this.swimming&&S>1.5&&Math.random()<40*t){let R=Math.sin(this.heading),y=Math.cos(this.heading);for(let b of[-1,1])this.fx.soft.emit(i.x-R*.6+y*b*.35,v+.08,i.z-y*.6-R*b*.35,y*b*1.6-R*.4,0,-R*b*1.6-y*.4,1.5,.28,.7,16777215,.75,0,.6)}this.animate(t,S,_,v,E),this.root.position.copy(i),this.root.rotation.y=this.heading}animate(t,e,n,i,s){let a=this.j,o=this.t,c=this.state,l=0,h=0,u=0,f=0,d=.12,p=-.12,x=0,g=0,m=0,_=0,v=1,M=0,w=0;if(this.wrench.visible=c===tn.INTERACT,this.beltWrench.visible=!this.wrench.visible,this.tablet.visible=c===tn.INTERACT,c===tn.RUN){let y=this.phase;if(this.phase+=e*t*1.25,Math.floor(y/Math.PI)!==Math.floor(this.phase/Math.PI)){let L=n<i,B=this.world.groundAt(this.pos.x,this.pos.z)-this.world.terrainAt(this.pos.x,this.pos.z)>.05;this.audio.step(L?"agua":B?"hormigon":"pasto"),L?this.fx.splash(this.pos.x,i+.05,this.pos.z,4):e>5&&this.fx.puff(this.pos.x-Math.sin(this.heading)*.4,this.pos.y+.12,this.pos.z-Math.cos(this.heading)*.4,2,B?14275524:13482892,.5)}let b=Math.sin(this.phase),T=ot(e/11,.3,1);l=b*1*T,h=-b*1*T,u=-b*.85*T,f=b*.85*T,_=Math.abs(Math.cos(this.phase))*.13*T,g=b*.07,x=.14*T,m=-.08+Math.sin(this.phase*2)*.04}else if(c===tn.JUMP)l=-.5,h=.35,u=f=-2.3,d=.5,p=-.5,v=1+ot(this.vy*.012,-.1,.16),x=ot(-this.vy*.012,-.2,.25);else if(c===tn.SWIM){x=1.12,m=-.95,_=0;let y=Math.sin(o*(6+e*.5));if(l=y*.7-.2,h=-y*.7-.2,u=-1.9+y*.6,f=-1.9-y*.6,g=Math.sin(o*2.2)*.05,Math.random()<(4+e*2.2)*t){let b=this.pos.x-Math.sin(this.heading)*(.5+Math.random()*.6),T=this.pos.z-Math.cos(this.heading)*(.5+Math.random()*.6);this.fx.soft.emit(b+(Math.random()-.5)*.7,i+.06,T+(Math.random()-.5)*.7,0,.04,0,1.1+Math.random()*.5,.3,1.25,16777215,.55,0,1)}}else if(c===tn.INTERACT){if(f=-1.45+Math.sin(o*16)*.3,u=-1,m=.12+Math.sin(o*5)*.08,x=.08,Math.random()<14*t){let y=Math.sin(this.heading),b=Math.cos(this.heading);this.fx.sparks(this.pos.x+y*.9,this.pos.y+1.5,this.pos.z+b*.9,2,16765503)}}else if(c===tn.CELEBRATE){let y=this.celeKind||0,b=this.celeT=(this.celeT||0)+t;if(y===1)_=Math.abs(Math.sin(b*6))*.45,u=f=-2.8,d=.35,p=-.35,M=b*9,m=-.2;else if(y===2){let T=Math.sin(b*9);u=-1.6-T*1.1,f=-1.6+T*1.1,d=.5,p=-.5,g=T*.2,_=Math.abs(T)*.25,l=T*.4,h=-T*.4,m=-.1}else if(y===3){let T=b*1.25%1;_=Math.sin(T*Math.PI)*1.5,w=T*Math.PI*2,u=f=-2.4,l=h=-.6}else _=Math.abs(Math.sin(o*7.5))*.7,f=-2.9,p=-.25,u=-.4,l=.3,h=-.3,m=-.25,v=1+Math.sin(o*15)*.04}else this.talking?(f=-1.25+Math.sin(o*4.6)*.55,p=-.35,u=-.45+Math.sin(o*2.9+1)*.3,d=.3,m=Math.sin(o*6.5)*.07-.05,g=Math.sin(o*1.7)*.04,v=1+Math.sin(o*9)*.012):(v=1+Math.sin(o*2.2)*.018,m=Math.sin(o*.7)*.04,this.sniff-=t,this.sniff<.6&&(m=-.16+Math.sin(o*22)*.05),this.sniff<0&&(this.sniff=3+Math.random()*4));let S=16;a.legL=Bt(a.legL,l,S,t),a.legR=Bt(a.legR,h,S,t),a.armL=Bt(a.armL,u,S,t),a.armR=Bt(a.armR,f,S,t),a.armLz=Bt(a.armLz,d,S,t),a.armRz=Bt(a.armRz,p,S,t),a.tilt=Bt(a.tilt,x,9,t),a.roll=Bt(a.roll,g,S,t),a.headX=Bt(a.headX,m,10,t),a.lift=Bt(a.lift,_,22,t),a.sy=Bt(a.sy,v,14,t),this.legL.rotation.x=a.legL,this.legR.rotation.x=a.legR,this.armL.rotation.x=a.armL,this.armR.rotation.x=a.armR,this.armL.rotation.z=-a.armLz,this.armR.rotation.z=-a.armRz,this.rig.rotation.x=a.tilt+w,this.rig.rotation.y=M,this.rig.rotation.z=a.roll,this.rig.position.y=1+a.lift,this.rig.scale.set(1/Math.sqrt(a.sy),a.sy,1/Math.sqrt(a.sy)),this.head.rotation.x=a.headX,this.head.rotation.z=-a.roll*1.4;let E=Math.sin(o*9)*(Math.sin(o*.9)>.75?.35:.04)+(c===tn.RUN?Math.sin(this.phase*2)*.12:0);this.ears[0].rotation.z=.25+E,this.ears[1].rotation.z=-.25-E,this.blink-=t;let R=this.blink<.12?.12:1;this.blink<0&&(this.blink=2+Math.random()*3),this.eyes[0].scale.y=R,this.eyes[1].scale.y=R}};var px=new Tt({vertexColors:!0,flatShading:!0,roughness:.85});function Ul(r){let t=[],e=[];for(let n of[...r.children]){if(!n.isMesh||n.userData.keep){e.push(n);continue}n.updateMatrix();let i=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();i.applyMatrix4(n.matrix);let s=i.attributes.position.count,a=new Float32Array(s*3),o=n.material.color;for(let c=0;c<s;c++)a[c*3]=o.r,a[c*3+1]=o.g,a[c*3+2]=o.b;i.setAttribute("color",new me(a,3)),i.attributes.uv&&i.deleteAttribute("uv"),t.push(i),r.remove(n)}if(t.length){let n=new lt(Js(t,!1),px);n.castShadow=!0,r.add(n)}return r}var bu={},mx=(r,t={})=>bu[r]||(bu[r]=new Tt({color:r,flatShading:!0,roughness:.85,...t})),Ht=(r,t,e,n,i,s)=>{let a=new lt(r,mx(t));return a.position.set(e,n,i),a.castShadow=!0,s.add(a),a},le=(r,t,e)=>new Ft(r,t,e);function Ra(r){let t=new te,e=r.scale||1,n=new te,i=new te,s=new te,a=new te;n.position.set(-.17,.82,0),i.position.set(.17,.82,0),s.position.set(-.47,1.62,0),a.position.set(.47,1.62,0),Ht(le(.25,.82,.28),r.pants,0,-.41,0,n),Ht(le(.25,.82,.28),r.pants,0,-.41,0,i),Ht(le(.27,.14,.4),2761760,0,-.78,.06,n),Ht(le(.27,.14,.4),2761760,0,-.78,.06,i),Ht(le(.74,.86,.44),r.shirt,0,1.25,0,t),r.jacket&&(Ht(le(.78,.88,.2),r.jacket,0,1.25,-.14,t),Ht(le(.24,.88,.47),r.jacket,-.27,1.25,0,t),Ht(le(.24,.88,.47),r.jacket,.27,1.25,0,t)),r.poncho&&(Ht(new an(.72,.95,4),r.poncho,0,1.3,0,t).rotation.y=Math.PI/4),Ht(le(.2,.72,.22),r.jacket||r.sleeve||r.shirt,0,-.34,0,s),Ht(le(.2,.72,.22),r.jacket||r.sleeve||r.shirt,0,-.34,0,a),Ht(le(.17,.16,.18),r.skin,0,-.76,0,s),Ht(le(.17,.16,.18),r.skin,0,-.76,0,a);let o=new te;return o.position.set(0,2.02,0),Ht(new He(.34,1),r.skin,0,0,0,o),Ht(le(.07,.09,.04),2106412,-.12,.04,.31,o),Ht(le(.07,.09,.04),2106412,.12,.04,.31,o),r.hair&&(Ht(le(.62,.24,.58),r.hair,0,.2,-.06,o),Ht(le(.6,.5,.2),r.hair,0,-.02,-.26,o)),r.pony&&Ht(le(.16,.5,.16),r.hair,0,-.25,-.4,o),r.bigote&&Ht(le(.3,.07,.06),14211288,0,-.1,.32,o),r.hat==="casco"&&(Ht(new ue(.38,10,6,0,6.3,0,Math.PI/2),r.hatColor,0,.12,0,o),Ht(new Se(.44,.44,.05,10),r.hatColor,0,.13,.05,o)),r.hat==="boina"&&Ht(new He(.4,1),r.hatColor,.06,.26,0,o).scale.set(1.1,.35,1.1),r.hat==="gorra"&&(Ht(new ue(.36,10,6,0,6.3,0,Math.PI/2),r.hatColor,0,.14,0,o),Ht(le(.4,.05,.3),r.hatColor,0,.17,.38,o)),r.extra==="tablet"&&Ht(le(.36,.28,.04),5232383,.02,-.72,.16,s),r.extra==="mate"&&(Ht(new ue(.11,6,5),8014627,0,-.84,.06,a),Ht(new Se(.015,.015,.2,4),14211288,.03,-.72,.08,a),Ht(new Se(.08,.08,.42,6),10134445,-.16,-.36,.1,s)),[t,n,i,s,a,o].forEach(Ul),t.add(n,i,s,a,o),t.scale.setScalar(e),{group:t,legL:n,legR:i,armL:s,armR:a,head:o,phase:Math.random()*6}}function gx(){let r=new te;Ht(new He(.28,1),10128508,0,0,0,r).scale.set(.8,.75,1.5),Ht(new He(.2,0),1842206,0,-.03,.2,r).scale.set(.9,.9,1),Ht(new He(.2,0),16052714,0,-.1,-.12,r).scale.set(.9,.7,1.4),Ht(new He(.14,0),9080726,0,.16,.4,r),Ht(le(.03,.03,.22),1842206,0,.3,.3,r),Ht(le(.04,.04,.2),14100029,0,.14,.58,r);let e=new se;e.setAttribute("position",new Ut([0,0,.3,0,0,-.3,.95,0,-.1],3)),e.computeVertexNormals();let n=new Tt({color:2763310,side:ye,flatShading:!0});Ul(r);let i=new lt(e,n),s=new lt(e,n);return s.scale.x=-1,r.add(i,s),{group:r,wl:i,wr:s}}function xx(r){let t=new te;Ht(le(2.5,2.3,8.2),16052714,0,1.75,0,t),Ht(le(2.54,.7,8.24),3519464,0,1,0,t),Ht(le(2.54,.16,8.24),8315009,0,1.45,0,t),Ht(le(2.56,.85,7.2),1911352,0,2.2,-.2,t),Ht(le(2.3,.95,.1),1911352,0,2.15,4.08,t),Ht(le(1.9,.3,4.6),14673642,0,3.05,-.6,t);for(let e of[-1.15,1.15])for(let n of[-2.7,2.7])Ht(new Se(.48,.48,.3,10),1842722,e,.5,n,t).rotation.z=Math.PI/2;Ul(t);for(let e of[-.85,.85]){let n=new lt(le(.4,.22,.06),r);n.position.set(e,.95,4.13),t.add(n)}return t}var Dl=240;function yx(r,t){return r=(r%Dl+Dl)%Dl,r<64?(t.x=-12-r,t.z=70,t.h=-Math.PI/2):r<120?(t.x=-77,t.z=69-(r-64),t.h=Math.PI):r<184?(t.x=-76+(r-120),t.z=12,t.h=Math.PI/2):(t.x=-11,t.z=13+(r-184),t.h=0),t}var Ca=class{constructor(t,e){this.w=t,this.scene=e,this.t=0,this.celebrate=0,this.gathered=!1;let n=un;this.npc={valeria:this.addNpc(Ra({skin:14262650,shirt:16052714,jacket:2308445,pants:2829634,hair:3875604,hat:"casco",hatColor:16053492,extra:"tablet"}),st.valeria[0],n,st.valeria[1],Math.PI),mateo:this.addNpc(Ra({skin:12946274,shirt:15326400,poncho:10834477,pants:5268026,hat:"boina",hatColor:1973794,bigote:!0,extra:"mate",sleeve:15326400}),st.mateo[0],t.groundAt(st.mateo[0],st.mateo[1]),st.mateo[1],-2.2),lucia:this.addNpc(Ra({skin:14724230,shirt:4891608,pants:2043727,hair:1709074,pony:!0,hat:"gorra",hatColor:2043727}),st.lucia[0],n,st.lucia[1],Math.PI/2)},this.citizens=[];let i=[15681391,16765286,448160,1149618,16032353,10182117,15817653,2792847,15167313,9358054],s=[14724230,12946274,15845797,10120011];for(let a=0;a<15;a++){let o=Ra({skin:s[a%4],shirt:i[a%i.length],pants:[2829634,4871528,7032634][a%3],hair:[2759184,5913114,13214554,7829367][a%4],extra:a%2?"mate":null,scale:.9+a%3*.04});e.add(o.group),a<11?Object.assign(o,{kind:"rambla",x:-78+a*6,z:72.3+a%3*1,dir:a%2?1:-1,speed:1.1+a%4*.25}):a<13?Object.assign(o,{kind:"west",x:-80.8+a%2*1.2,z:20+a*3,dir:a%2?1:-1,speed:1.2}):Object.assign(o,{kind:"plaza",a:a*2,speed:.35}),this.citizens.push(o)}this.teros=[];for(let a=0;a<6;a++){let o=gx();e.add(o.group),Object.assign(o,{hx:[20,60,80,-20,10,45][a],hz:[0,30,-20,-30,45,-5][a],a:a*1.3,target:null,x:0,y:6,z:0,call:2+a}),this.teros.push(o)}this.headMat=new Tt({color:16774338,emissive:16773296,emissiveIntensity:0}),this.buses=[],[-24,-20,-16].forEach((a,o)=>{let c=xx(this.headMat);c.position.set(a,2.2,62.8),e.add(c),this.buses.push({g:c,state:"parked",px:a,s:0,wait:o*4.5,x:a,z:62.8,h:0})}),this.tmp={x:0,z:0,h:0}}addNpc(t,e,n,i,s){return t.group.position.set(e,n,i),t.group.rotation.y=s,t.home={x:e,y:n,z:i,ry:s},this.scene.add(t.group),t}gather(t){this.gathered=t;let e={valeria:[-47.4,32.6],mateo:[-40.3,33.1],lucia:[-46.2,31.3]};for(let n in this.npc){let i=this.npc[n],s=t?{x:e[n][0],y:3,z:e[n][1],ry:0}:i.home;i.group.position.set(s.x,s.y,s.z),i.group.rotation.y=s.ry,i.baseY=s.y}}update(t,e){this.t+=t;let n=this.t,i=this.w;this.celebrate=Math.max(0,this.celebrate-t);let s=this.celebrate>0;i.dynCircles=[];for(let o in this.npc){let c=this.npc[o],l=c.group,h=e.capi.x-l.position.x,u=e.capi.z-l.position.z,f=Math.hypot(h,u);e.cine?l.rotation.y+=Yn(l.rotation.y,0)*Math.min(1,t*4):f<14&&(l.rotation.y+=Yn(l.rotation.y,Math.atan2(h,u))*Math.min(1,t*4));let d=e.talking===o;c.armR.rotation.x=Bt(c.armR.rotation.x,d?-1.2+Math.sin(n*7)*.35:s?-2.7:o==="mateo"?-.9:0,8,t),c.armL.rotation.x=Bt(c.armL.rotation.x,s?-2.7+Math.sin(n*12)*.2:o==="valeria"?-.9:0,8,t),c.head.rotation.x=d?Math.sin(n*6)*.06:0,l.position.y=(c.baseY!=null?c.baseY:c.home.y)+(s?Math.abs(Math.sin(n*7+c.phase))*.35:Math.sin(n*2+c.phase)*.015),i.dynCircles.push({x:l.position.x,z:l.position.z,r:.6})}this.citizens.forEach((o,c)=>{let l=o.group,h=!s;if(this.gathered){let d=Math.floor(c/2),p=(c%2?-39.2:-54.6)+d%3*2.6,x=36.9+Math.floor(d/3)*1.9;l.position.set(p,un+Math.abs(Math.sin(n*8+o.phase))*(s?.4:.05),x),l.rotation.y+=Yn(l.rotation.y,Math.atan2(-44-p,32.6-x))*Math.min(1,t*5),o.legL.rotation.x=o.legR.rotation.x=0,o.armL.rotation.x=s?-2.6+Math.sin(n*14+o.phase)*.3:0,o.armR.rotation.x=s?-2.6-Math.sin(n*14+o.phase)*.3:0;return}o.kind==="rambla"?(h&&(o.x+=o.dir*o.speed*t),o.x>-13&&(o.dir=-1),o.x<-81&&(o.dir=1),l.position.set(o.x,un,o.z),l.rotation.y=Bt(l.rotation.y,o.dir>0?Math.PI/2:-Math.PI/2,6,t)):o.kind==="west"?(h&&(o.z+=o.dir*o.speed*t),o.z>70&&(o.dir=-1),o.z<14&&(o.dir=1),l.position.set(o.x,un,o.z),l.rotation.y=Bt(l.rotation.y,o.dir>0?0:Math.PI,6,t)):(h&&(o.a+=o.speed*t),l.position.set(st.plaza[0]+Math.cos(o.a)*5.2,un,st.plaza[1]+Math.sin(o.a)*5.2),l.rotation.y=-o.a);let u=n*6*o.speed+o.phase,f=h?Math.sin(u)*.6:0;o.legL.rotation.x=f,o.legR.rotation.x=-f,s?(l.position.y+=Math.abs(Math.sin(n*8+o.phase))*.4,o.armL.rotation.x=-2.6+Math.sin(n*14+o.phase)*.3,o.armR.rotation.x=-2.6-Math.sin(n*14+o.phase)*.3,l.rotation.y+=Yn(l.rotation.y,Math.atan2(e.capi.x-l.position.x,e.capi.z-l.position.z))*Math.min(1,t*5)):(o.armL.rotation.x=Bt(o.armL.rotation.x,-f*.6,10,t),o.armR.rotation.x=Bt(o.armR.rotation.x,o.kind==="plaza"?-1.1:f*.6,10,t))});let a=e.needs;this.teros.forEach((o,c)=>{let l=a.length?a[c%a.length]:null;o.a+=t*(l?1.7:.5);let h=l?l.x:o.hx,u=l?l.z:o.hz,f=l?3.2+c%3:9+c*2,d=(l?l.y+4.2:i.terrainAt(h,u)+7)+Math.sin(n*2+c)*.6,p=h+Math.cos(o.a+c)*f,x=u+Math.sin(o.a+c)*f,g=Math.min(1,t*1.6),m=o.x,_=o.z;o.x=nt(o.x,p,g),o.y=nt(o.y,d,g),o.z=nt(o.z,x,g),o.group.position.set(o.x,o.y,o.z),Math.abs(o.x-m)+Math.abs(o.z-_)>1e-4&&(o.group.rotation.y=Math.atan2(o.x-m,o.z-_));let v=Math.sin(n*13+c)*.7;if(o.wl.rotation.z=v,o.wr.rotation.z=-v,o.call-=t,l&&o.call<0){o.call=2.5+Math.random()*3;let M=Math.hypot(e.capi.x-o.x,e.capi.z-o.z);M<45&&e.audio.tero(ot(1-M/45,.1,1))}}),this.headMat.emissiveIntensity=e.night*3;for(let o of this.buses){if(o.state==="parked"&&e.busesOn&&(o.wait-=t,o.wait<=0&&(o.state="leaving")),!e.busesOn&&o.state!=="parked"&&(o.state="parked",o.x=o.px,o.z=62.8,o.h=0),o.state==="leaving")o.z+=5*t,o.h=0,o.z>=69.5&&(o.state="loop",o.s=-12-o.x);else if(o.state==="loop"){o.s+=9*t;let c=yx(o.s,this.tmp);o.x=Bt(o.x,c.x,6,t),o.z=Bt(o.z,c.z,6,t),o.h+=Yn(o.h,c.h)*Math.min(1,t*3)}o.g.position.set(o.x,2.12,o.z),o.g.rotation.y=o.h,i.dynCircles.push({x:o.x,z:o.z,r:2}),e.night>.3&&o.state!=="parked"&&e.fx.glow.sprite(o.x+Math.sin(o.h)*4.6,3.1,o.z+Math.cos(o.h)*4.6,3.2,16773296,.5*e.night)}}};var fi=r=>440*Math.pow(2,(r-69)/12),_x=[{b:45,n:[57,60,64,67]},{b:50,n:[57,60,62,65]},{b:43,n:[55,59,62,65]},{b:48,n:[55,60,64,67]},{b:41,n:[57,60,64,65]},{b:50,n:[57,60,62,65]},{b:40,n:[56,59,62,64]},{b:45,n:[57,60,64,69]}],vx=[[[0,76,5],[8,72,3],[12,74,3]],[[0,77,5],[6,74,2],[8,69,6]],[[0,74,3],[4,71,3],[8,67,3],[12,71,3]],[[0,72,6],[8,76,7]],[[0,69,5],[6,72,2],[8,76,3],[12,77,3]],[[0,74,6],[8,77,3],[12,81,3]],[[0,76,5],[6,80,2],[8,83,3],[12,80,3]],[[0,81,12]]],bx=[1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0],Mx=[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],Ex=[[0,0],[6,7],[8,12],[12,7]],Pa=class{constructor(){this.ctx=null,this.muted=!1,this.step16=0,this.next=0,this.pct=0,this.alarmT=0,this.deficit=!1}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let t=window.AudioContext||window.webkitAudioContext,e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.55;let n=e.createDynamicsCompressor();this.master.connect(n),n.connect(e.destination),this.music=e.createGain(),this.music.gain.value=.34,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let i=e.sampleRate*2,s=e.createBuffer(1,i,e.sampleRate),a=s.getChannelData(0);for(let u=0;u<i;u++)a[u]=Math.random()*2-1;this.noiseBuf=s;let o=e.createBufferSource();o.buffer=s,o.loop=!0,o.start();let c=(u,f,d)=>{let p=e.createBiquadFilter();p.type=u,p.frequency.value=f,p.Q.value=d;let x=e.createGain();return x.gain.value=0,o.connect(p),p.connect(x),x.connect(this.master),{fl:p,g:x}};this.aWind=c("bandpass",420,.8),this.aWater=c("lowpass",1400,.3);let l=e.createOscillator();l.type="sawtooth",l.frequency.value=100;let h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=260,this.aHum=e.createGain(),this.aHum.gain.value=0,l.connect(h),h.connect(this.aHum),this.aHum.connect(this.master),l.start(),this.next=e.currentTime+.3}catch{this.ctx=null}}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.55,this.ctx.currentTime,.05)}tone(t,e,n="square",i=.1,s=0,a=null,o=null,c=.005){if(!this.ctx)return;let l=this.ctx,h=l.currentTime+s,u=l.createOscillator(),f=l.createGain();u.type=n,u.frequency.setValueAtTime(t,h),a&&u.frequency.exponentialRampToValueAtTime(a,h+e),f.gain.setValueAtTime(1e-4,h),f.gain.linearRampToValueAtTime(i,h+c),f.gain.exponentialRampToValueAtTime(1e-4,h+e),u.connect(f),f.connect(o||this.sfx),u.start(h),u.stop(h+e+.02)}noise(t,e,n,i,s=1,a=0,o=null){if(!this.ctx)return;let c=this.ctx,l=c.currentTime+a,h=c.createBufferSource(),u=c.createBiquadFilter(),f=c.createGain();h.buffer=this.noiseBuf,h.loop=!0,u.type=n,u.frequency.value=i,u.Q.value=s,f.gain.setValueAtTime(e,l),f.gain.exponentialRampToValueAtTime(1e-4,l+t),h.connect(u),u.connect(f),f.connect(o||this.sfx),h.start(l,Math.random()),h.stop(l+t+.02)}step(t){t==="agua"?(this.noise(.12,.1,"lowpass",900),this.tone(500,.06,"sine",.04,0,250)):t==="hormigon"?(this.noise(.04,.09,"highpass",2200),this.tone(180,.03,"square",.03)):this.noise(.07,.1,"bandpass",800,.8)}jump(){this.tone(300,.14,"square",.07,0,640)}land(){this.noise(.12,.16,"lowpass",320)}splash(t=1){this.noise(.4,.2*t,"bandpass",1300,.6),this.noise(.25,.1*t,"highpass",3e3)}click(){this.tone(880,.04,"square",.05)}ok(){this.tone(660,.1,"triangle",.14,0,990),this.tone(1320,.12,"sine",.06,.06)}bad(){this.tone(210,.2,"sawtooth",.08,0,140)}spark(){this.noise(.05,.08,"highpass",3500),this.tone(1900,.03,"square",.03)}blip(t=0){this.tone(520+t*40,.03,"square",.025)}power(){this.tone(70,.9,"sawtooth",.09,0,260),this.tone(140,.9,"square",.04,.05,520),this.noise(.5,.05,"bandpass",600,2,.4)}gate(){this.noise(.6,.07,"bandpass",220,3),this.tone(90,.6,"sawtooth",.05,0,70)}tero(t=1){for(let e=0;e<2;e++)this.tone(2300,.08,"sine",.07*t,e*.28,1750),this.tone(2500,.13,"sine",.07*t,e*.28+.09,1500)}fanfare(){[72,76,79,84].forEach((t,e)=>this.tone(fi(t),.2,"square",.08,e*.11)),[72,76,79,84].forEach(t=>this.tone(fi(t),.9,"triangle",.07,.46)),this.tone(fi(96),.5,"sine",.05,.5)}boom(){this.noise(.5,.2,"lowpass",500,.5),this.noise(.3,.06,"highpass",2500,.5,.05)}thunder(){this.noise(1.6,.34,"lowpass",170,.4),this.noise(.25,.2,"bandpass",900,.5),this.tone(52,1.4,"sine",.2,.05,34)}alarm(){this.tone(660,.16,"sine",.06),this.tone(520,.2,"sine",.06,.18)}drum(t,e,n){let i=this.ctx,s=e-i.currentTime;t==="clave"?(this.tone(1900,.045,"triangle",.09*n,s,null,this.music),this.noise(.02,.05*n,"highpass",4e3,1,s,this.music)):t==="chico"?this.tone(410,.07,"sine",.06*n,s,330,this.music):t==="piano"?(this.tone(120,.22,"sine",.2*n,s,62,this.music),this.noise(.03,.04*n,"lowpass",900,1,s,this.music)):t==="repique"&&this.tone(260,.09,"triangle",.08*n,s,200,this.music)}pad(t,e,n,i){let s=this.ctx,a=s.createGain(),o=s.createBiquadFilter();o.type="lowpass",o.frequency.value=700+i*900,a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.05+i*.03,e+n*.35),a.gain.linearRampToValueAtTime(1e-4,e+n*1.05),o.connect(a),a.connect(this.music);let c=i>.6?t.n.concat([t.n[0]+12]):t.n;for(let l of c)for(let h of[-5,5]){let u=s.createOscillator();u.type="sawtooth",u.frequency.value=fi(l),u.detune.value=h,u.connect(o),u.start(e),u.stop(e+n*1.1)}}schedule(){let t=this.ctx,e=60/92/4;for(;this.next<t.currentTime+.25;){let n=this.step16,i=Math.floor(n/16)%8,s=n%16,a=_x[i],o=this.next,c=o-t.currentTime,l=this.pct,h=l>=90?3:l>=65?2:l>=35?1:0;s===0&&this.pad(a,o,e*16,h/3);for(let[u,f]of Ex)u===s&&this.tone(fi(a.b+f),e*2.6,"triangle",.16,c,null,this.music,.01);if(h>=1&&(bx[s]&&this.drum("clave",o,1),s%4!==0&&this.drum("chico",o,s%4===1?1:.55)),h>=2&&(Mx[s]&&this.drum("piano",o,1),s%2===0&&this.tone(fi(a.n[s/2%4]+12),e*1.6,"triangle",.045,c,null,this.music),i%4===3&&s>=10&&this.drum("repique",o,.6+(s-10)*.08)),h>=3)for(let[u,f,d]of vx[i])u===s&&(this.tone(fi(f),e*d,"square",.04,c,null,this.music,.02),this.tone(fi(f)*1.003,e*d,"sine",.05,c,null,this.music,.03));this.step16++,this.next+=e}}update(t,e){if(!this.ctx||this.ctx.state!=="running")return;this.pct=e.pct,this.next<this.ctx.currentTime-1&&(this.next=this.ctx.currentTime+.1),this.schedule();let n=this.ctx.currentTime;this.aWind.g.gain.setTargetAtTime(ot(e.windNear*(.03+e.wind*.16),0,.2),n,.3),this.aWind.fl.frequency.setTargetAtTime(320+e.wind*500,n,.5),this.aWater.g.gain.setTargetAtTime(e.waterNear*.16,n,.3),this.aHum.gain.setTargetAtTime(e.humNear*.07,n,.3),e.deficit?(this.alarmT-=t,this.alarmT<=0&&(this.alarm(),this.alarmT=1.6)):this.alarmT=.4}};var gt=r=>document.getElementById(r),Mu={capi:"Capi",valeria:"Ing. Valeria",mateo:"Don Mateo",lucia:"Luc\xEDa"};function La(r,t,e,n,i){let s=(l,h,u,f,d)=>{r.fillStyle=d,r.fillRect(l,h,u,f)},a=e%3.1<.14,o=n&&Math.sin(e*18)>0;if(r.clearRect(0,0,24,24),t==="capi"){let l=i?i.helmet:"#ffc420",h=i?i.vest:"#4fc3f7",u=i?i.band:"#f1ff6b";s(0,0,24,24,"#3f8fd0"),s(4,17,16,7,h),s(4,20,16,1,u),s(5,7,14,12,"#a56f3e"),s(7,12,10,8,"#b98250"),s(9,12,6,2,"#3a2416"),s(11,17,2,2,"#fff"),s(3,8,3,3,"#7a4a26"),s(18,8,3,3,"#7a4a26"),s(5,3,14,5,l),s(4,7,16,1,l),r.fillStyle="rgba(0,0,0,.18)",r.fillRect(4,7,16,1),s(11,2,2,2,l),a?(s(7,11,2,1,"#1a100a"),s(15,11,2,1,"#1a100a")):(s(7,10,2,2,"#1a100a"),s(15,10,2,2,"#1a100a")),o&&s(10,19,4,2,"#5a2a1a");return}let c={valeria:{bg:"#7b5ea7",skin:"#d9a17a",hair:"#3b2314",body:"#23395d",hat:"#f4f4f4"},mateo:{bg:"#6b8f4e",skin:"#c58b62",hair:"#555",body:"#a5522d",hat:"#1e1e22"},lucia:{bg:"#2a9d8f",skin:"#e0ac86",hair:"#1a1412",body:"#4aa3d8",hat:"#1f2f4f"}}[t];s(0,0,24,24,c.bg),s(3,18,18,6,c.body),s(10,16,4,3,c.skin),s(6,6,12,11,c.skin),s(5,7,2,8,c.hair),s(17,7,2,8,c.hair),t==="valeria"&&(s(5,2,14,5,c.hat),s(4,6,16,1,"#cfcfcf"),s(10,18,4,6,"#f4f1ea")),t==="mateo"&&(s(4,3,16,4,c.hat),s(3,5,6,2,c.hat),s(8,13,8,2,"#d8d8d8"),s(3,19,18,1,"#e9dcc0")),t==="lucia"&&(s(5,2,14,5,c.hat),s(5,6,16,1,c.hat),s(19,8,2,9,c.hair),s(9,19,6,1,"#fff")),a?(s(8,11,2,1,"#20242c"),s(14,11,2,1,"#20242c")):(s(8,10,2,2,"#20242c"),s(14,10,2,2,"#20242c")),o?s(10,14,4,2,"#7a2f2f"):s(10,14,4,1,"#8a4a3a")}var Ia=class{constructor(t){this.g=t,this.t=0,this.acc=0,this.dlg=null,this.toastT=0,this.noteT=0,this.zoneId="",this.zoneT=0,this.gc=gt("gauge").getContext("2d"),this.pc=gt("phase").getContext("2d"),this.mc=gt("mini").getContext("2d"),this.fc=gt("capiFace").getContext("2d"),this.dc=gt("dFace").getContext("2d"),this.sc=gt("pCv").getContext("2d"),this.buildMap(),gt("dialog").addEventListener("click",()=>this.advance()),gt("bPanel").onclick=()=>t.togglePanel(),gt("pClose").onclick=()=>t.togglePanel(!1),gt("bHelp").onclick=()=>t.toggleHelp(!0),gt("hClose").onclick=()=>t.toggleHelp(!1),gt("bMute").onclick=()=>t.toggleMute(),gt("hTitle").onclick=()=>t.toTitle(),gt("prompt").addEventListener("click",()=>{t.cand&&!t.locked&&t.interact(t.cand.id)}),gt("cJump").addEventListener("pointerdown",()=>{t.jump=!0}),document.addEventListener("click",n=>{let i=n.target.closest&&n.target.closest("button");i&&i.blur()}),gt("batMode").querySelectorAll("button").forEach(n=>n.onclick=()=>{t.grid.bat.connected&&(t.grid.bat.mode=n.dataset.m,t.audio.click(),t.missions.event("batmode"),this.panelDom())});let e=(n,i)=>{gt(n).oninput=s=>{i(+s.target.value),this.sandboxOut()}};e("sWind",n=>{t.grid.windTarget=n/100}),e("sCloud",n=>{t.grid.cloudTarget=n/100}),e("sHour",n=>{t.grid.hour=n/4}),e("sDem",n=>{t.grid.demandMul=n/100}),e("sRate",n=>{t.grid.clockRate=[0,1/20,1/8,1/3,1][n]}),gt("sFault").onclick=()=>{t.missions.randomFault(!0),t.audio.click()},gt("pCv").addEventListener("click",n=>{let i=n.target.getBoundingClientRect(),s=(n.clientX-i.left)/i.width*760,a=(n.clientY-i.top)/i.height*440;for(let o of this.nodes||[])Math.hypot(s-o.x,a-o.y)<46&&o.zone&&t.inspect(o.zone)})}buildMap(){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),i=n.createImageData(256,256),s=i.data,a=J.maxX-J.minX,o=J.maxZ-J.minZ;for(let h=0;h<256;h++)for(let u=0;u<256;u++){let f=J.minX+(u+.5)/256*a,d=J.minZ+(h+.5)/256*o,p=$n(f,d),x=Zn(f,d),g=(h*256+u)*4,m,_,v;if(p<x-.15)m=40,_=120+(x>1?40:0),v=200;else if(In(f,d)<5&&p<2.6)m=232,_=214,v=164;else{let M=ot((p-2)/8,0,1);m=nt(96,150,M),_=nt(178,205,M),v=nt(72,96,M)}f>-84&&f<-9&&d>10&&d<76&&(m=176,_=170,v=160),f>-88&&f<-36&&d>-104&&d<-60&&p>5&&(m=205,_=198,v=172),s[g]=m,s[g+1]=_,s[g+2]=v,s[g+3]=255}n.putImageData(i,0,0);let c=h=>(h-J.minX)/a*256,l=h=>(h-J.minZ)/o*256;n.strokeStyle="rgba(70,70,80,.9)",n.lineWidth=1.6;for(let h of this.g.world.roads)n.beginPath(),h.forEach((u,f)=>f?n.lineTo(c(u[0]),l(u[1])):n.moveTo(c(u[0]),l(u[1]))),n.stroke();n.fillStyle="#9a948a",n.fillRect(c(-24),l(-58),c(24)-c(-24),6),n.fillRect(c(-48),l(-31),4,l(-3)-l(-31)),n.fillStyle="#1f3f9a";for(let[h,u]of st.solar)n.fillRect(c(h-6),l(u-5.5),13,12);n.fillStyle="#fff";for(let[h,u]of st.windT)n.beginPath(),n.arc(c(h),l(u),2.2,0,7),n.fill();this.map=e,this.mapScale=256/a}show(){gt("hud").classList.remove("hidden")}hide(){gt("hud").classList.add("hidden"),this.prompt(null),this.timer(null),gt("toast").classList.remove("on"),gt("note").classList.remove("on")}toast(t,e="",n=3.2){let i=gt("toast");i.querySelector("h2").textContent=t,i.querySelector("p").textContent=e,i.classList.add("on"),this.toastT=n}note(t,e=3.5){let n=gt("note");n.textContent=t,n.classList.add("on"),this.noteT=e}prompt(t){let e=gt("prompt");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden"),this._p!==t&&(e.innerHTML="<kbd>E</kbd> "+t,this._p=t)}timer(t,e){let n=gt("timer");if(!t){n.classList.add("hidden");return}n.classList.remove("hidden"),n.textContent=t,n.classList.toggle("warn",!!e)}mission(t,e,n){gt("mTitle").textContent=t,gt("mSub").textContent=e;let i=n.map(a=>a.text+a.state).join("|");if(i===this._mk)return;this._mk=i;let s=gt("mList");s.textContent="";for(let a of n){let o=document.createElement("li");o.className=a.state,o.textContent=a.text,s.appendChild(o)}}dialog(t,e){this.g.panel&&this.g.togglePanel(!1),this.g.help&&this.g.toggleHelp(!1),this.dlg={lines:t,i:0,n:0,done:e,acc:0},gt("dialog").classList.remove("hidden"),gt("dName").textContent=Mu[t[0].who],gt("dText").textContent="",this.g.audio.click()}get talking(){return this.dlg?this.dlg.lines[this.dlg.i].who:null}advance(){let t=this.dlg;if(!t)return;let e=t.lines[t.i].text;if(t.n<e.length){t.n=e.length,gt("dText").textContent=e;return}if(t.i++,t.n=0,this.g.audio.click(),t.i>=t.lines.length){this.dlg=null,gt("dialog").classList.add("hidden"),t.done&&t.done();return}gt("dName").textContent=Mu[t.lines[t.i].who],gt("dText").textContent=""}update(t,e){this.t+=t;let n=this.g.grid,i=n.out;this.toastT>0&&(this.toastT-=t,this.toastT<=0&&gt("toast").classList.remove("on")),this.noteT>0&&(this.noteT-=t,this.noteT<=0&&gt("note").classList.remove("on"));let s=this.dlg;if(s){let h=s.lines[s.i].text;if(s.acc+=t*48,s.n<h.length&&s.acc>=1){let u=Math.floor(s.acc);s.acc-=u;let f=s.n;s.n=Math.min(h.length,s.n+u),gt("dText").textContent=h.slice(0,s.n),Math.floor(f/3)!==Math.floor(s.n/3)&&this.g.audio.blip({capi:3,valeria:6,mateo:0,lucia:8}[s.lines[s.i].who])}La(this.dc,s.lines[s.i].who,this.t,s.n<h.length,this.g.extras?this.g.extras.colors():null)}if(this.acc+=t,this.acc<.09){this.drawMini(e);return}this.acc=0;let a=270,o=Math.max(0,i.gen-i.fossil);gt("bGen").style.width=o/a*100+"%",gt("bFos").style.width=i.fossil/a*100+"%",gt("bDem").style.width=i.demand/a*100+"%",gt("vGen").textContent=Math.round(i.gen)+" MW",gt("vDem").textContent=Math.round(i.demand)+" MW",gt("bBat").style.width=(n.bat.connected?n.bat.soc*100:0)+"%",gt("vBat").textContent=n.bat.connected?Math.round(n.bat.soc*100)+"%"+(i.bat>.5?" \u25BC":i.bat<-.5?" \u25B2":""):"sin conectar",gt("vClock").textContent=Rl(n.hour);let c=gt("vHz");c.textContent=n.freq.toFixed(1).replace(".",",")+" Hz",c.classList.toggle("low",n.freq<49.85),this.drawGauge(i.pct),this.drawPhase(n.hour),La(this.fc,"capi",this.t,e.capiTalk,e.colors),this.drawMini(e);let l=null;for(let h of Zs)Math.hypot(e.capi.x-h.x,e.capi.z-h.z)<(h.id==="ciudad"?46:34)&&(l=h);l&&l.id!==this.zoneId?(this.zoneId=l.id,gt("zone").textContent=l.name,this.zoneT=5):l||(this.zoneId="",this.zoneT=Math.min(this.zoneT,.6)),this.zoneT>0&&(this.zoneT-=.09,gt("zone").style.opacity=ot(this.zoneT,0,1)),e.panel&&(this.drawPanel(),(this._pd=(this._pd||0)+1)%4===0&&this.panelDom())}drawGauge(t){let e=this.gc,n=184,i=n/2,s=70;e.clearRect(0,0,n,n),e.lineWidth=18,e.lineCap="round",e.strokeStyle="#07142b",e.beginPath(),e.arc(i,i,s,0,7),e.stroke();let a=ot(t/100,0,1),o=t>=100?"#2fe38a":`rgb(${Math.round(nt(255,120,a*a))},${Math.round(nt(150,215,a))},${Math.round(nt(40,90,a))})`;e.strokeStyle=o,e.beginPath(),e.arc(i,i,s,-Math.PI/2,-Math.PI/2+Math.max(.02,a)*Math.PI*2),e.stroke(),e.fillStyle="#fff7e6",e.textAlign="center",e.textBaseline="middle",e.font=(t>=99.5?46:56)+'px "Lilita One","Arial Black",sans-serif',e.fillText(Math.round(t)+"%",i,i-6),e.font="800 17px Nunito,sans-serif",e.fillStyle=o,e.fillText("RENOVABLE",i,i+32)}drawPhase(t){let e=this.pc;e.clearRect(0,0,68,68);let n=t>6&&t<19;if(e.fillStyle=n?t<7.5?"#ff9fb0":t>17.5?"#ff9a4a":"#ffd23f":"#dfe8ff",e.beginPath(),e.arc(34,34,17,0,7),e.fill(),n){e.strokeStyle=e.fillStyle,e.lineWidth=4,e.lineCap="round";for(let i=0;i<8;i++){let s=i*Math.PI/4+this.t*.4;e.beginPath(),e.moveTo(34+Math.cos(s)*23,34+Math.sin(s)*23),e.lineTo(34+Math.cos(s)*30,34+Math.sin(s)*30),e.stroke()}}else e.fillStyle="#0f2140",e.beginPath(),e.arc(42,28,14,0,7),e.fill()}drawMini(t){let e=this.mc,n=352,i=n/2,s=80,a=i/s,o=t.yaw,c=J.maxX-J.minX;e.save(),e.clearRect(0,0,n,n),e.beginPath(),e.arc(i,i,i,0,7),e.clip(),e.fillStyle="#0b1830",e.fillRect(0,0,n,n),e.translate(i,i),e.rotate(o),e.scale(a,a),e.translate(-t.capi.x,-t.capi.z),e.imageSmoothingEnabled=!1,e.drawImage(this.map,J.minX,J.minZ,c,J.maxZ-J.minZ),e.restore();let l=(d,p)=>{let x=d-t.capi.x,g=p-t.capi.z,m=Math.cos(o),_=Math.sin(o);return[(x*m-g*_)*a,(x*_+g*m)*a]},h=(d,p,x,g,m)=>{let[_,v]=l(d,p),M=Math.hypot(_,v),w=i-16;M>w&&(_*=w/M,v*=w/M),e.beginPath(),e.arc(i+_,i+v,g,0,7),e.fillStyle=x,e.fill(),e.lineWidth=3,e.strokeStyle="#0f2140",e.stroke(),m&&(e.beginPath(),e.arc(i+_,i+v,g+6+this.t*14%12,0,7),e.strokeStyle=x,e.globalAlpha=1-this.t*14%12/12,e.stroke(),e.globalAlpha=1)};for(let d of Zs)h(d.x,d.z,d.color,8,!1);if(t.buses)for(let d of st.stops){let[p,x]=l(d[0],d[1]);Math.hypot(p,x)<i-12&&(e.fillStyle="#35b3e8",e.strokeStyle="#0f2140",e.lineWidth=2,e.fillRect(i+p-6,i+x-6,12,12),e.strokeRect(i+p-6,i+x-6,12,12))}for(let d of t.sparks||[]){if(Math.hypot(d.x-t.capi.x,d.z-t.capi.z)>42)continue;let[p,x]=l(d.x,d.z);e.save(),e.translate(i+p,i+x),e.rotate(Math.PI/4+this.t*2),e.fillStyle="#ffe066",e.strokeStyle="#0f2140",e.lineWidth=2,e.fillRect(-6,-6,12,12),e.strokeRect(-6,-6,12,12),e.restore()}for(let d of t.inter)d.state==="need"&&!d.target&&h(d.x,d.z,"#ff4d4d",6,!1);for(let d of t.inter)d.target&&h(d.x,d.z,"#ffd23f",9,!0);e.save(),e.translate(i,i),e.rotate(Math.PI-t.heading+o),e.fillStyle="#fff7e6",e.strokeStyle="#0f2140",e.lineWidth=4,e.beginPath(),e.moveTo(0,-17),e.lineTo(11,12),e.lineTo(0,5),e.lineTo(-11,12),e.closePath(),e.stroke(),e.fill(),e.restore();let u=i+Math.sin(o)*-(i-20)*-1,f=i-Math.cos(o)*(i-20);e.fillStyle="#0f2140",e.beginPath(),e.arc(u,f,15,0,7),e.fill(),e.fillStyle="#ffc93c",e.font='22px "Lilita One","Arial Black",sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("N",u,f+1)}sandboxOut(){let t=this.g.grid;gt("oWind").textContent=Math.round(t.windTarget*100)+"%",gt("oCloud").textContent=Math.round(t.cloudTarget*100)+"%",gt("oHour").textContent=Rl(t.hour),gt("oDem").textContent=Math.round(t.demandMul*100)+"%",gt("oRate").textContent=["pausa","\xD71","\xD72.5","\xD77","\xD720"][+gt("sRate").value]}openPanel(t){if(gt("panel").classList.remove("hidden"),gt("sandbox").classList.toggle("hidden",!t),t){let e=this.g.grid;gt("sWind").value=Math.round(e.windTarget*100),gt("sCloud").value=Math.round(e.cloudTarget*100),gt("sHour").value=Math.round(e.hour*4),this.sandboxOut()}this.panelDom(),this.drawPanel()}closePanel(){gt("panel").classList.add("hidden")}panelDom(){let t=this.g.grid,e=t.out;gt("batMode").querySelectorAll("button").forEach(c=>{c.classList.toggle("on",t.bat.connected&&t.bat.mode===c.dataset.m),c.disabled=!t.bat.connected}),gt("batInfo").textContent=t.bat.connected?`Carga ${Math.round(t.bat.soc*100)}% (${Math.round(t.bat.soc*Ge.batE)} MWh). `+(e.bat>.5?`Descargando ${Math.round(e.bat)} MW hacia la ciudad.`:e.bat<-.5?`Cargando ${Math.round(-e.bat)} MW con excedentes.`:t.bat.mode==="hold"?"En reserva: no entrega energ\xEDa aunque falte.":"En espera."):"El banco todav\xEDa no est\xE1 conectado a la red. Se habilita en el Parque Solar.";let n=c=>c.filter(l=>l.on&&!l.fault).length,i=c=>c.some(l=>l.fault),s=[["hidro","Central Hidroel\xE9ctrica",e.hydro,`${n(t.hydro.t)}/4 turbinas \xB7 salto ${Math.round(t.head()*100)}%`,i(t.hydro.t)?"bad":n(t.hydro.t)?"ok":"off"],["eolica","Parque E\xF3lico",e.wind,`${n(t.windP.t)}/5 molinos \xB7 viento ${Math.round(t.wind*100)}%`,i(t.windP.t)||t.windP.txFault?"bad":t.windP.tx?"ok":"off"],["solar","Parque Solar",e.solar,`${n(t.solar.a)}/4 matrices \xB7 sol ${Math.round(t.sun()*(1-.65*t.cloud)*100)}%`,i(t.solar.a)?"bad":n(t.solar.a)?"ok":"off"],["biomasa","Planta de Biomasa",e.bio,`caldera ${Math.round(t.bio.pressure*100)}%`,t.bio.fault?"bad":t.bio.on?"ok":"off"]],a=s.map(c=>Math.round(c[2])+c[3]+c[4]).join("|");if(a===this._pk)return;this._pk=a;let o=gt("plantList");o.textContent="";for(let c of s){let l=document.createElement("div");l.className="plant";let h={ok:"en l\xEDnea",bad:"falla",off:"fuera de servicio"}[c[4]];l.innerHTML=`<div>${c[1]}<span class="pill ${c[4]}">${h}</span><em>${c[3]}</em></div><b>${Math.round(c[2])} MW</b>`;let u=document.createElement("button");u.type="button",u.textContent="Ver",u.onclick=()=>this.g.inspect(c[0]),l.appendChild(u),o.appendChild(l)}}drawPanel(){let t=this.sc,e=760,n=440,i=this.g.grid,s=i.out,a=this.t;t.clearRect(0,0,e,n),t.strokeStyle="#102a52",t.lineWidth=1;for(let u=0;u<e;u+=40)t.beginPath(),t.moveTo(u,0),t.lineTo(u,n),t.stroke();for(let u=0;u<n;u+=40)t.beginPath(),t.moveTo(0,u),t.lineTo(e,u),t.stroke();let o={x:380,y:232},c=this.nodes=[{zone:"hidro",x:380,y:62,name:"HIDRO",mw:s.hydro,cap:144,col:"#4cc9f0"},{zone:"eolica",x:640,y:150,name:"E\xD3LICA",mw:s.wind,cap:40,col:"#e8f1f2"},{zone:"biomasa",x:620,y:350,name:"BIOMASA",mw:s.bio,cap:40,col:"#90be6d"},{zone:"solar",x:130,y:110,name:"SOLAR",mw:s.solar,cap:48,col:"#ffb703"},{zone:"solar",x:110,y:270,name:"BATER\xCDAS",mw:s.bat,cap:50,col:"#5ad1ff",bat:!0},{zone:null,x:210,y:386,name:"RESPALDO F\xD3SIL",mw:s.fossil,cap:140,col:"#b08a7a"}];for(let u of c){let f=Math.abs(u.mw)>.5,d=ot(Math.abs(u.mw)/u.cap,0,1);t.strokeStyle=f?u.col:"#27406b",t.lineWidth=f?3+d*5:3,t.setLineDash(f?[10,9]:[]),t.lineDashOffset=(u.mw<0?1:-1)*a*(20+d*90),t.beginPath(),t.moveTo(u.x,u.y),t.lineTo(o.x,o.y),t.stroke(),t.setLineDash([])}let l=(u,f,d,p,x,g,m)=>{t.fillStyle="#0f2140",t.strokeStyle=p,t.lineWidth=5,t.beginPath(),t.arc(u,f,d,0,7),t.fill(),t.stroke(),t.fillStyle=p,t.font='15px "Lilita One","Arial Black",sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(x,u,d>50?f+d+15:f-d-12),t.fillStyle="#fff7e6",t.font="900 19px Nunito,sans-serif",t.fillText(g,u,f-(m?6:0)),m&&(t.font="800 12px Nunito,sans-serif",t.fillStyle="#a9bbd6",t.fillText(m,u,f+13))};for(let u of c)l(u.x,u.y,42,u.col,u.name,u.bat&&!i.bat.connected?"\u2014":Math.round(u.mw)+" MW",u.bat?i.bat.connected?Math.round(i.bat.soc*100)+"% carga":"sin conectar":Math.round(ot(Math.abs(u.mw)/u.cap,0,1)*100)+"%");let h=s.pct>=100;l(o.x,o.y,62,h?"#57e389":"#ffc93c","CIUDAD \xB7 DEMANDA",Math.round(s.demand)+" MW",i.freq.toFixed(1).replace(".",",")+" Hz \xB7 "+Math.round(s.pct)+"% renov."),t.textAlign="left",t.font="800 13px Nunito,sans-serif",t.fillStyle="#a9bbd6",t.fillText("G total = hidro + e\xF3lica + solar + biomasa + bater\xEDas = "+Math.round(s.ren+Math.max(0,s.bat))+" MW",16,n-16),t.textAlign="right",t.fillStyle=h?"#57e389":"#ff6b4a",t.fillText(h?"EQUILIBRIO \xD3PTIMO":"D\xC9FICIT RENOVABLE: "+Math.round(s.fossil+s.unmet)+" MW",e-16,n-16)}};var vs=r=>document.getElementById(r),en=560,Bi=300,Sx='"Lilita One","Arial Black",sans-serif',ne=(r,t,e,n,i,s,a="center",o=Sx)=>{r.font=`${i}px ${o}`,r.fillStyle=s,r.textAlign=a,r.textBaseline="middle",r.fillText(t,e,n)},we=(r,t,e,n,i,s)=>{r.beginPath(),r.moveTo(t+s,e),r.arcTo(t+n,e,t+n,e+i,s),r.arcTo(t+n,e+i,t,e+i,s),r.arcTo(t,e+i,t,e,s),r.arcTo(t,e,t+n,e,s),r.closePath()},Nl=class{constructor(t,e){this.m=t,this.title=e.title||"Sincronizaci\xF3n de fase",this.hint="Puls\xE1 Espacio o hac\xE9 clic cuando la aguja pase por la ventana verde de 50,0 Hz. Tres aciertos acoplan el generador.",this.hits=0,this.t=Math.random()*6,this.f=50,this.flash=0,this.miss=0,this.win=.34}speed(){return[2.3,3,3.8][Math.min(2,this.hits)]}update(t){this.t+=t*this.speed(),this.f=50+1.75*Math.sin(this.t)+.12*Math.sin(this.t*3.7),this.flash=Math.max(0,this.flash-t),this.miss=Math.max(0,this.miss-t)}act(){this.done||(Math.abs(this.f-50)<=this.win?(this.hits++,this.flash=.35,this.m.audio.ok(),this.win=[.34,.27,.21][Math.min(2,this.hits)],this.hits>=3&&this.m.finish(!0,"\xA1ACOPLADO A LA RED!")):(this.miss=.4,this.m.audio.bad(),this.m.audio.spark(),this.win=Math.min(.4,this.win+.03)))}key(t,e){e&&(t==="Space"||t==="Enter"||t==="KeyE")&&this.act()}down(){this.act()}draw(t){let e=s=>60+(s-48)/4*440;ne(t,this.f.toFixed(1).replace(".",",")+" Hz",en/2,62,54,this.miss>0?"#ff6b4a":Math.abs(this.f-50)<=this.win?"#57e389":"#fff7e6"),we(t,60,134,440,32,10),t.fillStyle="#0f2140",t.fill(),t.strokeStyle="#2a4374",t.lineWidth=3,t.stroke(),t.fillStyle=this.flash>0?"#b8ffd6":"#2fbf71",t.fillRect(e(50-this.win),136,e(50+this.win)-e(50-this.win),28);for(let s=48;s<=52;s+=.5)t.fillStyle="#6f84a8",t.fillRect(e(s)-1,170,2,s%1===0?10:5),s%1===0&&ne(t,s.toFixed(1).replace(".",","),e(s),192,13,"#a9bbd6","center","Nunito,sans-serif");let i=e(this.f);if(t.fillStyle=this.miss>0?"#ff6b4a":"#ffc93c",t.beginPath(),t.moveTo(i,146),t.lineTo(i-11,116),t.lineTo(i+11,116),t.closePath(),t.fill(),t.fillRect(i-2,134,4,32),this.miss>0)for(let s=0;s<6;s++){t.strokeStyle="#ffd23f",t.lineWidth=2,t.beginPath();let a=s*1.05+this.t;t.moveTo(i+Math.cos(a)*8,150+Math.sin(a)*8),t.lineTo(i+Math.cos(a)*24,150+Math.sin(a)*24),t.stroke()}["R","S","T"].forEach((s,a)=>{let o=en/2-80+a*80,c=244,l=a<this.hits;t.beginPath(),t.arc(o,c,22,0,7),t.fillStyle=l?"#57e389":"#13284c",t.fill(),t.lineWidth=4,t.strokeStyle=l?"#d6ffe7":"#2a4374",t.stroke(),ne(t,s,o,c+1,22,l?"#0b3a22":"#6f84a8")})}},Bl=class{constructor(t,e){this.m=t,this.title=e.title||"Alineaci\xF3n heliotr\xF3pica";let n=vn(Math.floor(Math.random()*1e6));this.dust=[];for(let i=0;i<14;i++)this.dust.push({x:150+n()*260,y:90+n()*130,a:1});this.tt=20+n()*30,this.ta=-50+n()*100,this.tilt=this.tt+(n()<.5?-1:1)*(14+n()*10),this.az=this.ta+(n()<.5?-1:1)*(35+n()*25),this.tilt=ot(this.tilt,0,60),this.az=ot(this.az,-80,80),this.hold=0,this.keys={},this.phase=0,this.t=0,this.drag=null,this.hint="Primero limpi\xE1 el polvo: pas\xE1 el cursor sobre el panel o manten\xE9 Espacio."}dirt(){return this.dust.reduce((t,e)=>t+e.a,0)/this.dust.length}irr(){let t=(this.tilt-this.tt)*Math.PI/180,e=(this.az-this.ta)*Math.PI/180;return 100*Math.pow(Math.max(0,Math.cos(t)*Math.cos(e*.9)),6)}update(t){if(this.t+=t,this.phase===0){if(this.keys.Space){let e=this.dust.find(n=>n.a>0);e&&(e.a=Math.max(0,e.a-t*9),e.a===0&&this.m.audio.click())}this.dirt()<.03&&(this.phase=1,this.m.audio.ok(),this.hint="Ahora orient\xE1 el panel: \u2190/\u2192 cambia el azimut y \u2191/\u2193 la inclinaci\xF3n (o arrastr\xE1). Llev\xE1 la irradiancia al 100\xA0%.",this.m.setHint(this.hint))}else{let e=this.keys,n=42*t;(e.ArrowLeft||e.KeyA)&&(this.az-=n),(e.ArrowRight||e.KeyD)&&(this.az+=n),(e.ArrowUp||e.KeyW)&&(this.tilt+=n*.7),(e.ArrowDown||e.KeyS)&&(this.tilt-=n*.7),this.az=ot(this.az,-80,80),this.tilt=ot(this.tilt,0,60),this.irr()>=97.5?(this.hold+=t,this.hold>.7&&!this.done&&this.m.finish(!0,"\xA1IRRADIANCIA AL 100\xA0%!")):this.hold=0}}key(t,e){this.keys[t]=e}down(t,e){this.drag={x:t,y:e},this.move(t,e)}up(){this.drag=null}move(t,e){if(this.phase===0)for(let n of this.dust)n.a>0&&Math.hypot(n.x-t,n.y-e)<34&&(n.a=Math.max(0,n.a-.34),n.a===0&&this.m.audio.click());else this.drag&&(this.az=ot(this.az+(t-this.drag.x)*.45,-80,80),this.tilt=ot(this.tilt-(e-this.drag.y)*.3,0,60),this.drag={x:t,y:e})}draw(t){let e=this.phase?this.irr():0,n=280,i=160,s=n+this.ta*2.4,a=70-this.tt*.6;t.fillStyle="#ffd23f",t.beginPath(),t.arc(s,a,16,0,7),t.fill(),t.strokeStyle="#ffd23f",t.lineWidth=3;for(let f=0;f<8;f++){let d=f*.785+this.t;t.beginPath(),t.moveTo(s+Math.cos(d)*21,a+Math.sin(d)*21),t.lineTo(s+Math.cos(d)*28,a+Math.sin(d)*28),t.stroke()}let o=this.phase?this.az*.9:0,c=this.phase?70-this.tilt*.55:62,l=[[n-130+o,i-c],[n+130+o,i-c],[n+150-o*.3,i+62],[n-150-o*.3,i+62]];t.beginPath(),l.forEach((f,d)=>d?t.lineTo(f[0],f[1]):t.moveTo(f[0],f[1])),t.closePath();let h=Math.round(nt(40,70,e/100));t.fillStyle=`rgb(${h-20},${h+20},${150+e*.9})`,t.fill(),t.strokeStyle="#cfe3ff",t.lineWidth=4,t.stroke(),t.strokeStyle="rgba(207,227,255,.5)",t.lineWidth=1.5;for(let f=1;f<6;f++){let d=f/6;t.beginPath(),t.moveTo(nt(l[0][0],l[1][0],d),l[0][1]),t.lineTo(nt(l[3][0],l[2][0],d),l[3][1]),t.stroke()}for(let f=1;f<3;f++){let d=f/3;t.beginPath(),t.moveTo(nt(l[0][0],l[3][0],d),nt(l[0][1],l[3][1],d)),t.lineTo(nt(l[1][0],l[2][0],d),nt(l[1][1],l[2][1],d)),t.stroke()}t.fillStyle="#77808c",t.fillRect(n-5,i+62,10,40);for(let f of this.dust)f.a>0&&(t.globalAlpha=f.a*.85,t.fillStyle="#b89c6a",t.beginPath(),t.arc(f.x,f.y,30,0,7),t.fill(),t.globalAlpha=1);e>97&&(t.globalAlpha=.35+.3*Math.sin(this.t*20),t.fillStyle="#ffe58a",t.beginPath(),l.forEach((f,d)=>d?t.lineTo(f[0],f[1]):t.moveTo(f[0],f[1])),t.fill(),t.globalAlpha=1),we(t,500,40,30,220,8),t.fillStyle="#0f2140",t.fill(),t.strokeStyle="#2a4374",t.lineWidth=3,t.stroke();let u=this.phase?e:(1-this.dirt())*100;t.fillStyle=this.phase?e>97?"#ffd23f":"#5ad1ff":"#b89c6a",t.fillRect(504,256-u*2.12,22,u*2.12),ne(t,this.phase?"IRRADIANCIA":"LIMPIEZA",515,24,12,"#a9bbd6","center","Nunito,sans-serif"),ne(t,Math.round(u)+"%",515,278,18,"#fff7e6"),this.phase&&(ne(t,"Azimut "+Math.round(this.az)+"\xB0",20,270,15,"#a9bbd6","left","Nunito,sans-serif"),ne(t,"Inclinaci\xF3n "+Math.round(this.tilt)+"\xB0",20,290,15,"#a9bbd6","left","Nunito,sans-serif"))}},Ol=class{constructor(t,e){this.m=t,this.title=e.title||"Control de compuerta",this.hint="Ajust\xE1 la apertura con \u2191/\u2193 (o arrastr\xE1 la compuerta) para mantener el embalse en la franja verde sin pasar la l\xEDnea roja aguas abajo.",this.L=.86,this.u=.95,this.dn=.9,this.t=Math.random()*9,this.prog=0,this.keys={},this.drag=!1,this.mw=0}update(t){this.t+=t;let e=this.keys;(e.ArrowUp||e.KeyW)&&(this.u+=t*.7),(e.ArrowDown||e.KeyS)&&(this.u-=t*.7),this.u=ot(this.u,0,1);let n=.5+.14*Math.sin(this.t*.9)+.06*Math.sin(this.t*2.3+1),i=this.u*(.55+.75*this.L);this.L=ot(this.L+(n-i)*.3*t,.05,1),this.dn+=(i-this.dn)*Math.min(1,t*2.5);let s=this.L>.5&&this.L<.7&&this.dn<.8;this.ok=s,this.mw=36*ot(this.L/.7,0,1)*(this.dn<.8?1:.6),this.prog=ot(this.prog+(s?t/4:-t/10),0,1),this.prog>=1&&!this.done&&this.m.finish(!0,"\xA1NIVEL ESTABILIZADO!")}key(t,e){this.keys[t]=e}down(t,e){this.drag=!0,this.move(t,e)}up(){this.drag=!1}move(t,e){this.drag&&(this.u=ot((250-e)/150,0,1))}draw(t){let i=nt(262,70,this.L),s=nt(262,152,this.dn);t.fillStyle="#12305c",t.fillRect(0,0,en,Bi),t.fillStyle="#2f86c8",t.fillRect(20,i,230,262-i),t.fillStyle="#6fd0f2",t.fillRect(20,i,230,4),t.fillStyle="rgba(87,227,137,.28)",t.fillRect(20,nt(262,70,.7),230,nt(262,70,.5)-nt(262,70,.7)),ne(t,"EMBALSE",135,40,15,"#a9bbd6","center","Nunito,sans-serif"),t.fillStyle="#2f86c8",t.fillRect(310,s,230,262-s),t.fillStyle="#6fd0f2",t.fillRect(310,s,230,4),t.strokeStyle="#ff6b4a",t.lineWidth=3,t.setLineDash([8,6]);let a=nt(262,152,.8);t.beginPath(),t.moveTo(310,a),t.lineTo(540,a),t.stroke(),t.setLineDash([]),ne(t,"R\xCDO ABAJO",425,a-14,13,this.dn>=.8?"#ff6b4a":"#a9bbd6","center","Nunito,sans-serif"),t.fillStyle="#bdb5a8",t.fillRect(250,50,60,212),t.fillStyle="#12305c",t.fillRect(262,100,36,150);let o=100+(1-this.u)*0;t.fillStyle="#2f86c8",t.fillRect(262,250-this.u*150,36,this.u*150),t.fillStyle="#ffc93c",t.fillRect(258,94+(1-this.u)*150-0-0,44,0),t.fillStyle="#2f6f9f",t.fillRect(258,94,44,(1-this.u)*150+6),t.strokeStyle="#ffc93c",t.lineWidth=3,t.strokeRect(258,94,44,(1-this.u)*150+6);for(let c=0;c<6;c++){t.fillStyle="rgba(255,255,255,.75)";let l=312+(this.t*90+c*37)%60,h=256-c*13%20*this.u;t.fillRect(l,h,6+this.u*8,3)}t.fillStyle="#3b2a20",t.fillRect(0,262,en,Bi-262),ne(t,"Apertura "+Math.round(this.u*100)+"%",280,76,15,"#fff7e6"),ne(t,Math.round(this.mw)+" MW",135,284,18,this.ok?"#57e389":"#ffc93c"),we(t,330,276,200,14,7),t.fillStyle="#0f2140",t.fill(),t.fillStyle="#57e389",t.fillRect(332,278,196*this.prog,10),ne(t,this.dn>=.8?"\xA1Desborde aguas abajo!":this.L>=.7?"Embalse muy alto":this.L<=.5?"Embalse bajo: se pierde salto":"Estable",430,40,15,this.ok?"#57e389":"#ff6b4a","center","Nunito,sans-serif")}},Da=[[0,-1,1,4],[1,0,2,8],[0,1,4,1],[-1,0,8,2]],Eu=r=>r<<1&15|r>>3,Fl=class{constructor(t,e){this.m=t,this.title=e.title||"Enrutamiento de subestaci\xF3n",this.from=e.from||"FUENTE",this.to=e.to||"CARGA",this.hint="Hac\xE9 clic en un tramo para girarlo (o flechas + Espacio). Conect\xE1 "+this.from+" con "+this.to+" sin energizar las celdas rojas de sobrecarga.",this.C=6,this.R=4,this.cur={x:0,y:0},this.t=0,this.over=0;for(let n=0;n<800&&!this.gen();n++);}gen(){let{C:t,R:e}=this,n=Math.random;this.rs=Math.floor(n()*e),this.rt=Math.floor(n()*e);let i=new Set,s=[[0,this.rs]];i.add("0,"+this.rs);let a=0;for(;a++<200;){let[l,h]=s[s.length-1];if(l===t-1&&h===this.rt)break;let u=[];for(let[x,g]of Da){let m=l+x,_=h+g;m<0||_<0||m>=t||_>=e||i.has(m+","+_)||u.push([m,_,x===1?3:g!==0?l===t-1?3:1.4:.25])}if(!u.length)return!1;let f=u.reduce((x,g)=>x+g[2],0),d=n()*f,p=u[0];for(let x of u)if(d-=x[2],d<=0){p=x;break}s.push([p[0],p[1]]),i.add(p[0]+","+p[1])}let o=s[s.length-1];if(o[0]!==t-1||o[1]!==this.rt||s.length<7)return!1;this.g=[];for(let l=0;l<e;l++){this.g.push([]);for(let h=0;h<t;h++)this.g[l].push({m:[5,3,7,3,5][Math.floor(n()*5)],bad:!1,path:!1})}s.forEach(([l,h],u)=>{let f=0,d=(p,x)=>{for(let[g,m,_]of Da)p===l+g&&x===h+m&&(f|=_)};u===0?f|=8:d(s[u-1][0],s[u-1][1]),u===s.length-1?f|=2:d(s[u+1][0],s[u+1][1]),this.g[h][l]={m:f,need:f,bad:!1,path:!0}});let c=[];for(let l=0;l<e;l++)for(let h=0;h<t;h++)this.g[l][h].path||c.push([h,l]);for(let l=0;l<3&&c.length;l++){let h=Math.floor(n()*c.length),[u,f]=c.splice(h,1)[0];this.g[f][u].bad=!0,this.g[f][u].m=7}for(let l=0;l<e;l++)for(let h=0;h<t;h++){let u=1+Math.floor(n()*3);for(let f=0;f<u;f++)this.g[l][h].m=Eu(this.g[l][h].m)}return this.flood(),!this.solved}flood(){let{C:t,R:e,g:n}=this;for(let s of n)for(let a of s)a.on=!1;if(this.solved=!1,this.overNow=!1,!(n[this.rs][0].m&8))return;let i=[[0,this.rs]];for(n[this.rs][0].on=!0;i.length;){let[s,a]=i.pop();for(let[o,c,l,h]of Da){let u=s+o,f=a+c;u<0||f<0||u>=t||f>=e||n[a][s].m&l&&n[f][u].m&h&&!n[f][u].on&&(n[f][u].on=!0,i.push([u,f]))}}this.overNow=n.some(s=>s.some(a=>a.bad&&a.on)),this.solved=n[this.rt][t-1].on&&n[this.rt][t-1].m&2&&!this.overNow}turn(t,e){this.done||(this.g[e][t].m=Eu(this.g[e][t].m),this.m.audio.click(),this.flood(),this.overNow&&(this.over=.5,this.m.audio.bad()),this.solved&&this.m.finish(!0,"\xA1CIRCUITO CERRADO!"))}update(t){this.t+=t,this.over=Math.max(0,this.over-t)}key(t,e){if(!e)return;let n=this.cur;t==="ArrowLeft"||t==="KeyA"?n.x=Math.max(0,n.x-1):t==="ArrowRight"||t==="KeyD"?n.x=Math.min(this.C-1,n.x+1):t==="ArrowUp"||t==="KeyW"?n.y=Math.max(0,n.y-1):t==="ArrowDown"||t==="KeyS"?n.y=Math.min(this.R-1,n.y+1):(t==="Space"||t==="Enter"||t==="KeyE")&&this.turn(n.x,n.y)}down(t,e){let n=Math.floor((t-100)/60),i=Math.floor((e-30)/60);n>=0&&i>=0&&n<this.C&&i<this.R&&(this.cur={x:n,y:i},this.turn(n,i))}draw(t){for(let l=0;l<this.R;l++)for(let h=0;h<this.C;h++){let u=this.g[l][h],f=100+h*60,d=30+l*60,p=f+60/2,x=d+60/2;we(t,f+3,d+3,54,54,8),t.fillStyle=u.bad?u.on?"#8a2018":"#3a1a22":"#0f2140",t.fill(),t.strokeStyle=u.bad?"#ff6b4a":"#2a4374",t.lineWidth=2,t.stroke(),t.strokeStyle=u.on?u.bad?"#ff9a7a":"#5ad1ff":"#51648a",t.lineWidth=u.on?9:7,t.lineCap="round";for(let[g,m,_]of Da)u.m&_&&(t.beginPath(),t.moveTo(p,x),t.lineTo(p+g*(60/2-3),x+m*(60/2-3)),t.stroke());t.fillStyle=t.strokeStyle,t.beginPath(),t.arc(p,x,u.on?7:5,0,7),t.fill(),u.bad&&ne(t,"!",p+17,x-15,18,"#ff6b4a")}let s=this.cur;t.strokeStyle="#ffc93c",t.lineWidth=3,we(t,100+s.x*60+1,30+s.y*60+1,58,58,9),t.stroke();let a=30+this.rs*60+60/2,o=30+this.rt*60+60/2,c=this.g[this.rt][this.C-1].on&&this.g[this.rt][this.C-1].m&2&&!this.overNow;t.strokeStyle="#5ad1ff",t.lineWidth=9,t.beginPath(),t.moveTo(62,a),t.lineTo(100,a),t.stroke(),t.strokeStyle=c?"#57e389":"#51648a",t.beginPath(),t.moveTo(100+this.C*60,o),t.lineTo(100+this.C*60+38,o),t.stroke(),we(t,6,a-22,60,44,8),t.fillStyle="#5ad1ff",t.fill(),ne(t,this.from,36,a+1,11,"#06233a"),we(t,100+this.C*60+34,o-22,60,44,8),t.fillStyle=c?"#57e389":"#51648a",t.fill(),ne(t,this.to,100+this.C*60+64,o+1,11,"#06233a"),this.over>0&&ne(t,"\xA1SOBRECARGA!",en/2,284,20,"#ff6b4a")}},zl=class{constructor(t,e){this.m=t,this.title=e.title||"Freno mec\xE1nico",this.hint="Altern\xE1 \u2190 y \u2192 (o A y D) lo m\xE1s r\xE1pido que puedas para girar la manivela y soltar el freno. En pantalla t\xE1ctil: toc\xE1 un lado y el otro.",this.prog=0,this.side=0,this.ang=0,this.t=0,this.kick=0}push(t){this.done||t===this.side||(this.side=t,this.prog=Math.min(1,this.prog+.042),this.ang+=.5,this.kick=.12,this.m.audio.click(),this.prog>=1&&this.m.finish(!0,"\xA1FRENO LIBERADO!"))}key(t,e){e&&(t==="ArrowLeft"||t==="KeyA"?this.push(-1):(t==="ArrowRight"||t==="KeyD")&&this.push(1))}down(t){this.push(t<en/2?-1:1)}update(t){this.t+=t,this.kick=Math.max(0,this.kick-t),this.prog=Math.max(0,this.prog-t*.09)}draw(t){let s=this.prog*26;t.fillStyle="#51648a",t.beginPath(),t.arc(190,150,78,0,7),t.fill(),t.fillStyle="#0f2140",t.beginPath(),t.arc(190,150,62,0,7),t.fill();for(let o=0;o<6;o++){let c=this.ang+o*Math.PI/3;t.strokeStyle="#8fa3c8",t.lineWidth=6,t.beginPath(),t.moveTo(190,150),t.lineTo(190+Math.cos(c)*60,150+Math.sin(c)*60),t.stroke()}t.fillStyle=this.prog>=1?"#57e389":"#ff6b4a",t.fillRect(90-s,124,22,52),t.fillRect(268+s,124,22,52);let a=this.ang;t.strokeStyle="#ffc93c",t.lineWidth=10,t.lineCap="round",t.beginPath(),t.moveTo(190,150),t.lineTo(190+Math.cos(a)*54,150+Math.sin(a)*54),t.stroke(),t.fillStyle="#ffc93c",t.beginPath(),t.arc(190+Math.cos(a)*54,150+Math.sin(a)*54,12,0,7),t.fill(),t.fillStyle="#fff7e6",t.beginPath(),t.arc(190,150,10,0,7),t.fill();for(let[o,c,l]of[[-1,360,"\u2190"],[1,450,"\u2192"]]){let h=this.side===o&&this.kick>0;we(t,c-34,96,68,68,12),t.fillStyle=h?"#ffc93c":this.side===o?"#2a4374":"#13284c",t.fill(),t.lineWidth=4,t.strokeStyle=this.side===o?"#6f84a8":"#ffc93c",t.stroke(),ne(t,l,c,131,38,h?"#3a2500":"#fff7e6")}ne(t,this.side===0?"Empez\xE1 con cualquiera":"Ahora la otra",405,190,15,"#a9bbd6","center","Nunito,sans-serif"),we(t,60,258,440,20,10),t.fillStyle="#0f2140",t.fill(),t.strokeStyle="#2a4374",t.lineWidth=3,t.stroke(),t.fillStyle="#57e389",we(t,63,261,Math.max(8,434*this.prog),14,7),t.fill(),ne(t,"FRENO "+Math.round((1-this.prog)*100)+"%",en/2,238,16,"#fff7e6")}},Ua=[{k:["ArrowUp","KeyW"],lab:"\u2191",name:"AIRE",col:"#5ad1ff",x:280,y:78,f:660},{k:["ArrowRight","KeyD"],lab:"\u2192",name:"CHISPA",col:"#ffc93c",x:385,y:150,f:880},{k:["ArrowDown","KeyS"],lab:"\u2193",name:"CHIPS",col:"#ff8a4a",x:280,y:222,f:440},{k:["ArrowLeft","KeyA"],lab:"\u2190",name:"VAPOR",col:"#e8f1f2",x:175,y:150,f:550}],kl=class{constructor(t,e){this.m=t,this.title=e.title||"Secuencia de arranque",this.hint="Mir\xE1 el orden en que se encienden las etapas y repetilo con las flechas (o haciendo clic). Son tres rondas, cada una m\xE1s larga.",this.seq=[];for(let n=0;n<5;n++){let i;do i=Math.floor(Math.random()*4);while(n&&i===this.seq[n-1]);this.seq.push(i)}this.round=0,this.len=[3,4,5],this.state="show",this.i=0,this.t=.6,this.lit=-1,this.litT=0,this.err=0}flash(t){this.lit=t,this.litT=.3,this.m.audio.tone(Ua[t].f,.22,"triangle",.14)}press(t){if(!(this.done||this.state!=="input")){if(this.flash(t),t!==this.seq[this.i]){this.err=.7,this.m.audio.bad(),this.state="show",this.i=0,this.t=1;return}if(this.i++,this.i>=this.len[this.round]){if(this.round++,this.m.audio.ok(),this.round>=3)return this.m.finish(!0,"\xA1CALDERA EN MARCHA!");this.state="show",this.i=0,this.t=.9}}}key(t,e){if(!e)return;let n=Ua.findIndex(i=>i.k.includes(t));n>=0&&this.press(n)}down(t,e){let n=Ua.findIndex(i=>Math.hypot(i.x-t,i.y-e)<46);n>=0&&this.press(n)}update(t){this.litT=Math.max(0,this.litT-t),this.litT===0&&(this.lit=-1),this.err=Math.max(0,this.err-t),this.state==="show"&&(this.t-=t,this.t<=0&&(this.i<this.len[this.round]?(this.flash(this.seq[this.i]),this.i++,this.t=.5):(this.state="input",this.i=0)))}draw(t){Ua.forEach((n,i)=>{let s=this.lit===i;t.beginPath(),t.arc(n.x,n.y,42,0,7),t.fillStyle=s?n.col:"#13284c",t.fill(),t.lineWidth=5,t.strokeStyle=n.col,t.stroke(),ne(t,n.lab,n.x,n.y-6,30,s?"#0f2140":n.col),ne(t,n.name,n.x,n.y+20,11,s?"#0f2140":"#a9bbd6","center","Nunito,sans-serif")}),ne(t,this.err>0?"Orden equivocado: mir\xE1 de nuevo":this.state==="show"?"Mir\xE1\u2026":"Tu turno",280,150,15,this.err>0?"#ff6b4a":this.state==="show"?"#a9bbd6":"#57e389","center","Nunito,sans-serif");for(let n=0;n<3;n++)t.beginPath(),t.arc(470,110+n*40,13,0,7),t.fillStyle=n<this.round?"#57e389":"#13284c",t.fill(),t.lineWidth=3,t.strokeStyle=n===this.round?"#ffc93c":"#2a4374",t.stroke();ne(t,"RONDA",470,78,12,"#a9bbd6","center","Nunito,sans-serif");let e=this.len[Math.min(2,this.round)];for(let n=0;n<e;n++)t.fillStyle=this.state==="input"&&n<this.i?"#57e389":"#2a4374",t.fillRect(60+n*16,270,12,12)}},Ni=[["ArrowLeft","KeyA","\u2190","#5ad1ff"],["ArrowDown","KeyS","\u2193","#57e389"],["ArrowUp","KeyW","\u2191","#ffc93c"],["ArrowRight","KeyD","\u2192","#ff8fab"]],Hl=class{constructor(t,e){this.m=t,this.title=e.title||"Comp\xE1s de carga",this.hint="Puls\xE1 cada flecha (o A S W D, o toc\xE1 su carril) cuando la nota llegue a la l\xEDnea. Con 9 aciertos de 14 la flota queda cargada.",this.reset()}reset(){let t=[0,3,6,10,12,16,19,22,26,28,32,36,38,40],e=[0,2,1,3,1,0,3,2,0,1,3,2,1,0];this.notes=t.map((n,i)=>({t:2+n*.19,lane:e[i],hit:0})),this.t=0,this.hits=0,this.miss=0,this.flash=[0,0,0,0],this.msg="",this.msgT=0}press(t){if(this.done)return;this.flash[t]=.15;let e=null;for(let n of this.notes)!n.hit&&n.lane===t&&Math.abs(n.t-this.t)<.2&&(!e||Math.abs(n.t-this.t)<Math.abs(e.t-this.t))&&(e=n);e?(e.hit=1,this.hits++,this.m.audio.tone([196,262,330,392][t],.16,"triangle",.16),this.m.audio.tone(1900,.04,"triangle",.06)):this.m.audio.tone(120,.08,"square",.05)}key(t,e){if(!e)return;let n=Ni.findIndex(i=>i[0]===t||i[1]===t);n>=0&&this.press(n)}down(t){let e=Math.floor((t-120)/80);e>=0&&e<4&&this.press(e)}update(t){this.t+=t,this.msgT=Math.max(0,this.msgT-t);for(let e=0;e<4;e++)this.flash[e]=Math.max(0,this.flash[e]-t);for(let e of this.notes)!e.hit&&this.t-e.t>.2&&(e.hit=-1,this.miss++);if(this.hits>=9&&!this.done&&this.notes.every(e=>e.hit))return this.m.finish(!0,"\xA1FLOTA CARGADA!");if(this.notes.every(e=>e.hit)&&!this.done)if(this.hits>=9)this.m.finish(!0,"\xA1FLOTA CARGADA!");else{let e=this.hits;this.reset(),this.msg=`Fueron ${e} de 14. \xA1Otra vuelta!`,this.msgT=2}}draw(t){let i=127.05882352941177;for(let o=0;o<4;o++){let c=120+o*80;t.fillStyle=this.flash[o]>0?"rgba(255,255,255,.14)":o%2?"#0c1c3a":"#0f2140",t.fillRect(c,20,80,256),t.strokeStyle="#2a4374",t.lineWidth=2,t.strokeRect(c,20,80,256),we(t,c+14,214,52,44,10),t.strokeStyle=Ni[o][3],t.lineWidth=4,t.stroke(),this.flash[o]>0&&(t.fillStyle=Ni[o][3],t.fill()),ne(t,Ni[o][2],c+40,237,26,this.flash[o]>0?"#0f2140":Ni[o][3])}for(let o of this.notes){if(o.hit)continue;let c=236-(o.t-this.t)*i;if(c<0||c>290)continue;let l=120+o.lane*80+40;we(t,l-24,c-15,48,30,9),t.fillStyle=Ni[o.lane][3],t.fill(),ne(t,Ni[o.lane][2],l,c+1,20,"#0f2140")}we(t,468,60,56,170,10),t.fillStyle="#0f2140",t.fill(),t.strokeStyle="#fff7e6",t.lineWidth=4,t.stroke(),t.fillStyle="#fff7e6",t.fillRect(486,50,20,10);let s=Math.min(1,this.hits/9);t.fillStyle=s>=1?"#57e389":"#5ad1ff",t.fillRect(474,224-158*s,44,158*s),ne(t,this.hits+"/9",496,250,20,"#fff7e6"),ne(t,"CARGA",496,36,12,"#a9bbd6","center","Nunito,sans-serif"),ne(t,"COMP\xC1S",60,36,12,"#a9bbd6","center","Nunito,sans-serif");let a=Math.floor(this.t/.76)%4;for(let o=0;o<4;o++)t.beginPath(),t.arc(60,70+o*34,11,0,7),t.fillStyle=o===a?"#ffc93c":"#13284c",t.fill();this.msgT>0&&ne(t,this.msg,280,130,22,"#ffc93c")}},Gl=class{constructor(t,e){this.m=t,this.title=e.title||"Cambio a LED",this.t=0,this.bad=0,this.hint="Toc\xE1 las lamparitas viejas (las amarillas, que calientan) o apret\xE1 su n\xFAmero para cambiarlas por LED. Las blancas ya son LED: dejalas como est\xE1n.";let n=new Set;for(;n.size<4;)n.add(Math.floor(Math.random()*6));this.b=Array.from({length:6},(i,s)=>({old:n.has(s),pop:0}))}watts(){return this.b.reduce((t,e)=>t+(e.old?60:9),0)}pick(t){let e=this.b[t];if(!(!e||this.done)){if(!e.old){this.bad=1,this.m.audio.click();return}e.old=!1,e.pop=.4,this.m.audio.ok(),this.b.some(n=>n.old)||this.m.finish(!0,"\xA1TODO LED!")}}key(t,e){if(!e)return;let n={Digit1:0,Digit2:1,Digit3:2,Digit4:3,Digit5:4,Digit6:5,Numpad1:0,Numpad2:1,Numpad3:2,Numpad4:3,Numpad5:4,Numpad6:5}[t];n!=null&&this.pick(n)}down(t,e){e>60&&e<232&&this.pick(Math.floor((t-22)/86))}update(t){this.t+=t,this.bad=Math.max(0,this.bad-t);for(let e of this.b)e.pop=Math.max(0,e.pop-t)}draw(t){ne(t,"Lamparitas de la casa",en/2,26,18,"#fff7e6"),this.b.forEach((n,i)=>{let s=65+i*86,a=122,o=n.old?.75+.25*Math.sin(this.t*17+i*2):1,c=1+n.pop*.5,l=t.createRadialGradient(s,a,6,s,a,54*c);if(l.addColorStop(0,n.old?`rgba(255,170,60,${.6*o})`:"rgba(190,230,255,.5)"),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(s-60,a-60,120,120),t.fillStyle=n.old?"#ffb23c":"#eaf6ff",t.beginPath(),t.arc(s,a-6,24*c,0,7),t.fill(),t.fillStyle="#8fa3c8",we(t,s-11,a+16,22,18,4),t.fill(),n.old)t.strokeStyle="#b3541e",t.lineWidth=3,t.beginPath(),t.moveTo(s-9,a-2),t.lineTo(s-4,a-12),t.lineTo(s+1,a-2),t.lineTo(s+6,a-12),t.lineTo(s+10,a-2),t.stroke();else{t.fillStyle="#7fd4ff";for(let h=-1;h<=1;h++)t.fillRect(s+h*9-3,a-10,6,6)}ne(t,n.old?"60 W":"9 W",s,a+52,15,n.old?"#ffb23c":"#9be7ff"),we(t,s-15,a+66,30,26,6),t.fillStyle="#13284c",t.fill(),t.lineWidth=2,t.strokeStyle=n.old?"#ffc93c":"#2a4374",t.stroke(),ne(t,String(i+1),s,a+80,15,"#fff7e6")});let e=this.watts();we(t,60,264,440,20,10),t.fillStyle="#0f2140",t.fill(),t.strokeStyle="#2a4374",t.lineWidth=3,t.stroke(),t.fillStyle=e>120?"#ff8f4a":"#57e389",we(t,63,267,Math.max(8,434*e/360),14,7),t.fill(),ne(t,this.bad>0?"Esa ya es LED: busc\xE1 las amarillas":`Consumo de luz: ${e} W`,en/2,246,16,this.bad>0?"#ffb23c":"#fff7e6")}},Vl=class{constructor(t,e){this.m=t,this.title=e.title||"Carga con sol",this.t=0,this.prog=0,this.hold=!1,this.fossil=0,this.hint="Manten\xE9 apretado Espacio (o el dedo en la pantalla) mientras brilla el sol para cargar los \xF3mnibus. Solt\xE1 cuando pase una nube: ah\xED la carga saldr\xEDa del respaldo f\xF3sil.",this.clouds=[[2.6,1.3],[5.6,1.1],[8.3,1.5],[11.4,1],[14,1.4],[17.2,1.2],[20.3,1.5],[23.5,1.1],[26.4,1.4],[29.6,1.2]]}get sun(){let t=this.t%32;return!this.clouds.some(([e,n])=>t>e&&t<e+n)}key(t,e){(t==="Space"||t==="Enter")&&(this.hold=e)}down(){this.hold=!0}up(){this.hold=!1}update(t){this.t+=t,this.fossil=Math.max(0,this.fossil-t),this.hold&&(this.sun?this.prog=Math.min(1,this.prog+t*.17):(this.prog=Math.max(0,this.prog-t*.1),this.fossil=.3)),this.prog>=1&&this.m.finish(!0,"\xA1CARGADOS CON SOL!")}draw(t){let e=this.t%32,n=150,i=this.sun;if(t.fillStyle=i?"#3f9be0":"#5f7388",we(t,30,16,500,112,14),t.fill(),t.save(),we(t,30,16,500,112,14),t.clip(),t.fillStyle=i?"#ffd23f":"#c9b56a",t.beginPath(),t.arc(n,70,28,0,7),t.fill(),i){t.strokeStyle="#ffd23f",t.lineWidth=4;for(let s=0;s<10;s++){let a=s*.628+this.t;t.beginPath(),t.moveTo(n+Math.cos(a)*36,70+Math.sin(a)*36),t.lineTo(n+Math.cos(a)*46,70+Math.sin(a)*46),t.stroke()}}t.fillStyle="#eef3f8";for(let[s,a]of this.clouds)for(let o of[0,32]){let c=n+(s+o-e)*62,l=a*62;if(!(c>560||c+l<0))for(let h=0;h<3;h++)t.beginPath(),t.ellipse(c+l*(.2+h*.3),70+(h===1?-10:4),l*.3+14,26,0,0,7),t.fill()}t.restore(),we(t,70,150,190,68,14),t.fillStyle="#2ed3c6",t.fill(),t.fillStyle="#d8f6ff";for(let s=0;s<4;s++)we(t,84+s*42,161,32,24,5),t.fill();t.fillStyle="#12284c",t.beginPath(),t.arc(112,222,12,0,7),t.fill(),t.beginPath(),t.arc(218,222,12,0,7),t.fill(),t.strokeStyle=this.hold?i?"#57e389":"#ff5a4a":"#6f84a8",t.lineWidth=6,t.lineCap="round",t.beginPath(),t.moveTo(260,192),t.bezierCurveTo(300,236,320,146,356,186),t.stroke(),we(t,356,150,150,68,10),t.fillStyle="#0f2140",t.fill(),t.lineWidth=4,t.strokeStyle="#8fa3c8",t.stroke(),t.fillStyle=this.fossil>0?"#ff5a4a":"#57e389",we(t,362,156,Math.max(6,138*this.prog),56,7),t.fill(),ne(t,Math.round(this.prog*100)+"%",431,185,26,"#fff7e6"),ne(t,this.hold?i?"Cargando con sol":"\xA1Nube! Solt\xE1: esa carga ser\xEDa f\xF3sil":i?"Manten\xE9 apretado ESPACIO":"Esper\xE1 a que pase la nube",en/2,266,17,this.hold&&!i?"#ff8f7a":"#fff7e6","center","Nunito,sans-serif")}},wx={sync:Nl,helio:Bl,gates:Ol,route:Fl,crank:zl,seq:kl,rhythm:Hl,led:Gl,solar:Vl},Na=class{constructor(t){this.audio=t,this.active=null,this.cv=vs("mgCv"),this.g=this.cv.getContext("2d"),this.end=0,this.msg="",this.time=0;let e=n=>{let i=this.cv.getBoundingClientRect();return[(n.clientX-i.left)/i.width*en,(n.clientY-i.top)/i.height*Bi]};this.cv.addEventListener("pointerdown",n=>{if(n.preventDefault(),this.active&&this.active.down&&!this.active.done){let[i,s]=e(n);this.active.down(i,s)}}),this.cv.addEventListener("pointermove",n=>{if(this.active&&this.active.move&&!this.active.done){let[i,s]=e(n);this.active.move(i,s)}}),window.addEventListener("pointerup",()=>{this.active&&this.active.up&&this.active.up()})}start(t,e,n){this.active=new wx[t](this,e||{}),this.cb=n,this.end=0,this.time=0,this.type=t,this.eased=!1,this.slow=this.struggle&&this.struggle[t]?.8:1,vs("mgTitle").textContent=this.active.title,this.setHint(this.active.hint),vs("mg").classList.remove("hidden"),this.audio.click()}setHint(t){vs("mgHint").textContent=t}finish(t,e){!this.active||this.active.done||(this.active.done=!0,this.msg=e,this.end=1,this.ok=t,t&&this.audio.fanfare())}cancel(){if(!this.active)return;let t=this.cb;this.active=null,vs("mg").classList.add("hidden"),t&&t(!1)}key(t,e){!this.active||this.active.done||this.active.key&&this.active.key(t,e)}update(t){let e=this.active;if(!e)return;this.time+=t;let n=this.g;n.fillStyle="#061226",n.fillRect(0,0,en,Bi);let i=this.time>50?.5:this.time>24?.7:this.slow;if(i<.8&&!this.eased&&!e.done&&(this.eased=!0,(this.struggle=this.struggle||{})[this.type]=!0,this.setHint(e.hint+" Ayuda activada: ahora va m\xE1s despacio.")),e.done||(e.update(t*i),this.time>90&&!e.done&&this.finish(!0,"\xA1LO LOGRAMOS JUNTOS!")),e.draw(n),e.done&&(this.end-=t,n.fillStyle="rgba(6,18,38,.72)",n.fillRect(0,0,en,Bi),ne(n,this.msg,en/2,Bi/2-10,38,"#57e389"),ne(n,this.time-(1-this.end)<10?"\xA1Tiempo perfecto!":"Buen trabajo",en/2,Bi/2+30,18,"#fff7e6","center","Nunito,sans-serif"),this.end<=0)){let s=this.cb;this.active=null,vs("mg").classList.add("hidden"),s&&s(!0)}}};var _t=(r,t,e=0)=>({who:r,text:t,x:e}),Wl="capi-matriz-verde",Te="\xA0",Xl={corta:["viento","rio","sol","urbano","pico"],larga:["viento","rio","sol","urbano","ahorro","tormenta","pico"]},Su={viento:{title:"Vientos en la Cuchilla",scn:{hour:9,rate:1/60,hold:11.5,wind:.95,gust:.08,extra:0}},rio:{title:"La Fuerza del R\xEDo",scn:{hour:11.5,rate:1/60,hold:13.5,wind:.6,gust:.08,extra:15}},sol:{title:"Cosecha de Sol",scn:{hour:9.5,rate:1/30,hold:18.6,wind:.8,gust:.08,extra:0,energy:1/12}},urbano:{title:"Circuito Verde Urbano",scn:{hour:17.4,rate:1/45,hold:19.7,wind:.25,gust:.06,extra:0,energy:1/50}},ahorro:{title:"Ciudad que Ahorra",scn:{hour:11.6,rate:1/60,hold:13.6,wind:.5,gust:.06,extra:0}},tormenta:{title:"Sudestada sobre la Red",scn:{hour:14.5,rate:1/60,hold:16.5,wind:1,gust:.3,extra:0,cloud:.95,energy:1/70}},pico:{title:"Desaf\xEDo 100% Renovable",scn:{hour:19.3,rate:1/45,hold:19.8,wind:.6,gust:.1,extra:0}},libre:{title:"Modo libre",scn:{hour:null,rate:1/20,hold:null,wind:.6,gust:.14,extra:0}}},Tx={ahorro:[_t("lucia","Capi, hasta ahora sumamos energ\xEDa limpia. Pero hay otra forma de ayudar a la red: gastar menos sin perder comodidad."),_t("lucia","En el barrio de las casitas, al este de la terminal, tres vecinos te esperan para cambiar sus lamparitas viejas por LED."),_t("lucia","Y pas\xE1 por la terminal ahora, al mediod\xEDa: quiero cargar los \xF3mnibus cuando sobra sol, y no de noche, cuando todos prenden todo.")],viento:[_t("valeria",`\xA1Capi! Ac\xE1 Valeria, desde el Centro de Control. La ciudad est\xE1 funcionando casi toda con respaldo t\xE9rmico f\xF3sil: menos de un 20${Te}% de la energ\xEDa es renovable.`),_t("valeria","Mir\xE1 la barra de arriba: Generaci\xF3n contra Demanda, en megavatios. Cuando lo renovable no alcanza, entra el respaldo f\xF3sil y la frecuencia se aparta de los 50,0 Hz.",1),_t("capi","Entendido, ingeniera. \xBFPor d\xF3nde empiezo?",1),_t("valeria","Entr\xF3 un frente de pampero y tenemos molinos frenados. Busc\xE1 a Don Mateo en la entrada de las cuchillas, al este. La flecha amarilla del minimapa te gu\xEDa.")],rio:[_t("valeria","Llovi\xF3 fuerte en la cuenca alta y el caudal del r\xEDo viene creciendo. Y al mediod\xEDa las f\xE1bricas piden m\xE1s energ\xEDa."),_t("valeria","And\xE1 a la Central Hidroel\xE9ctrica, al norte. Est\xE1 inspirada en Salto Grande, la represa que Uruguay comparte con Argentina sobre el r\xEDo Uruguay.",1),_t("valeria","Hay compuertas abiertas de m\xE1s: tiramos agua sin turbinarla. Regul\xE1 el vertedero y despu\xE9s sincroniz\xE1 la Turbina 3.")],sol:[_t("valeria","Una nube de polvo cubri\xF3 el Parque Solar, al noroeste, y descalibr\xF3 los seguidores. Pod\xE9s llegar por el puente del canal o por el coronamiento de la represa."),_t("valeria","Limpi\xE1 y reorient\xE1 las matrices, habilit\xE1 el Banco de Bater\xEDas y cargalo antes de las 18:30, cuando se nos va el sol.")],urbano:[_t("lucia","\xA1Hola, Capi! Luc\xEDa, de la Terminal de la Rambla. Tengo la flota el\xE9ctrica lista para salir, pero los cargadores r\xE1pidos est\xE1n sin potencia."),_t("valeria","Y justo afloja el viento al atardecer. Necesitamos respaldo firme: la Planta de Biomasa, al sureste."),_t("valeria","Carg\xE1 chips del acopio forestal, encend\xE9 la caldera con su secuencia de arranque y enrut\xE1 la potencia hasta la terminal.")],tormenta:[_t("mateo","\xA1Capi, m'hijo! Mir\xE1 el cielo del sudeste: se viene una sudestada de las bravas. Viento fuerte, lluvia y r\xEDo crecido."),_t("valeria","Ya la tenemos encima. Con r\xE1fagas tan fuertes un molino se fren\xF3 solo para protegerse, y un rayo hizo saltar el transformador del parque."),_t("valeria","Adem\xE1s las nubes taparon el sol y el embalse sube r\xE1pido: hay que volver a regular la compuerta 3. Las bater\xEDas aguantan mientras tanto, pero no para siempre."),_t("capi","Voy saliendo. \xA1Que no me vuele el casco!")],pico:[_t("valeria","Queda la prueba grande: la hora pico nocturna, sin sol. Cuando est\xE9s listo, ven\xED a verme al Centro de Control, en la subestaci\xF3n de la ciudad.")]},Ax={ahorro:[_t("valeria",`La demanda de la ciudad baj\xF3 un 6${Te}% y los \xF3mnibus cargaron con sol del mediod\xEDa. La energ\xEDa m\xE1s limpia es la que no hace falta generar.`),_t("capi","Ahorrar tambi\xE9n es generar. \xA1Anotado!")],viento:[_t("valeria","\xA1Bien ah\xED! El parque e\xF3lico ya inyecta energ\xEDa. El viento rinde much\xEDsimo, pero es variable: cuando afloja, alguien tiene que cubrir.")],rio:[_t("valeria","Embalse estable y tres turbinas en l\xEDnea. El agua es nuestra energ\xEDa de base: constante y regulable."),_t("capi","Cuando sopla el viento guardamos agua, y cuando afloja la turbinamos.",1),_t("valeria","Exacto: viento y agua se complementan. Ahora nos falta el sol.",1)],sol:[_t("valeria","Bater\xEDas cargadas. El sol del mediod\xEDa queda guardado para la noche: eso es mover energ\xEDa en el tiempo.")],urbano:[_t("valeria","Biomasa firme y transporte el\xE9ctrico en marcha. Desde ahora pod\xE9s tomar el \xF3mnibus en cualquier parada para viajar r\xE1pido entre sectores.")],tormenta:[_t("mateo","Pas\xF3 lo peor. Viste c\xF3mo es: cuando una fuente se cae, las otras la sostienen. Por eso conviene tener de todo un poco."),_t("valeria","Red estable en plena sudestada. Eso se llama una matriz diversificada, Capi.")],pico:[]},Rx=[_t("valeria","Capi, en nombre de toda la ciudad: gracias. Esta noche la matriz fue verde de punta a punta. El micr\xF3fono es tuyo."),_t("capi","\xA1Gracias! Lo logramos entre todos. Y ya que tengo el micr\xF3fono, les cuento por qu\xE9 esto importa tanto en Uruguay."),_t("capi","Uruguay no produce petr\xF3leo, gas ni carb\xF3n: todo el combustible f\xF3sil hay que traerlo de afuera. El agua, el viento, el sol y la biomasa, en cambio, son de ac\xE1."),_t("capi","Por eso las renovables nos dan independencia: no quedamos atados al precio del petr\xF3leo ni a que llegue el barco.",1),_t("capi","Adem\xE1s se complementan. Si un a\xF1o llueve poco y los embalses bajan, el viento, el sol y la biomasa sostienen la red. Y si afloja el viento, cubre el agua."),_t("capi","Tambi\xE9n cuidan el aire: generar as\xED la electricidad casi no emite gases que calientan el planeta.",1),_t("capi",`Y no es un cuento de videojuego. En 2025, el 98${Te}% de la electricidad generada en Uruguay fue renovable: 46${Te}% hidr\xE1ulica, 34${Te}% e\xF3lica, 14${Te}% biomasa y 4${Te}% solar, seg\xFAn el Ministerio de Industria, Energ\xEDa y Miner\xEDa.`),_t("capi","Cuando sobra, hasta se la vendemos a los pa\xEDses vecinos.",1),_t("capi","Lo que falta nos toca a todos: usar la energ\xEDa con cabeza y llevar esta electricidad limpia al transporte y a las casas. \xA1Gracias por jugar, y nos vemos en Energimundo!")],Ba=class{constructor(t){this.g=t,this.mode="larga",this.seq=Xl.larga,this.phase=0,this.step=0,this.active=!1,this.pending=0,this.lapse=null,this.t=0,this.m5=null,this.free=!1,this.flags={},this.faultT=60,this.streak=0,this.best=0,this.ceremony=!1,this.fw=0,this.fwNorth=!1,this.busT=0}get key(){return this.phase<this.seq.length?this.seq[this.phase]:"libre"}get short(){return this.mode==="corta"}get title(){return Su[this.key].title}lines(t){return t.filter(e=>!e.x||!this.short)}load(){try{let t=JSON.parse(localStorage.getItem(Wl)||"null");if(!t||typeof t.phase!="number")return null;let e=t.mode==="corta"?"corta":"larga";return{mode:e,phase:Math.max(0,Math.min(Xl[e].length,t.phase+(e==="larga"&&!t.v&&t.phase>=4?1:0))),sparks:t.sparks,outfit:t.outfit}}catch{return null}}forget(){try{localStorage.removeItem(Wl)}catch{}}save(){try{localStorage.setItem(Wl,JSON.stringify(Object.assign({v:2,phase:this.phase,mode:this.mode},this.g.extras?this.g.extras.data():{})))}catch{}}done(t,e=this.phase){let n=this.seq.indexOf(t);return n>=0?n<e:e>=this.seq.length}reached(t){let e=this.seq.indexOf(t);return e<0?this.free:this.phase>e||this.phase===e&&this.active}preset(t){let e=this.g.grid,n=s=>this.done(s,t),i=this.short?[1]:[1,2,4];e.hydro.t.forEach((s,a)=>{s.on=a<2||a===2&&n("rio")||a===3&&t>=this.seq.length,s.fault=!1}),e.hydro.gates.forEach((s,a)=>{s.reg=a>=2||n("rio")}),e.windP.t.forEach((s,a)=>{s.on=!0,s.fault=!n("viento")&&i.includes(a)}),e.windP.tx=n("viento"),e.windP.txFault=!1,e.solar.a.forEach(s=>{s.on=n("sol"),s.fault=!1}),e.bat.connected=n("sol"),e.bat.soc=n("sol")?.82:.3,e.bat.mode="auto",e.bio.chips=e.bio.on=e.bio.routed=n("urbano"),e.bio.fault=!1,e.bio.pressure=n("urbano")?1:0,e.buses=n("urbano"),e.eff=this.seq.includes("ahorro")&&n("ahorro")?.06:0,e.headBonus=0,e.bioBoost=1}scenario(t,e){let n=this.g.grid,i=Su[t].scn;if(n.windTarget=i.wind,n.gustiness=i.gust,n.demandExtraTarget=i.extra,n.cloudTarget=i.cloud||0,n.demandMul=1,n.energyRate=i.energy||1/20,i.hour==null){n.clockRate=i.rate,n.holdAt=null;return}e?(n.hour=i.hour,n.windBase=i.wind,n.demandExtra=i.extra,n.cloud=i.cloud||0,n.clockRate=i.rate,n.holdAt=i.hold):(this.lapse={to:i.hour,rate:i.rate,hold:i.hold},n.clockRate=7,n.holdAt=i.hour)}start(t,e,n=!0){let i=this.g;if(i.ui.dlg&&(i.ui.dlg=null,document.getElementById("dialog").classList.add("hidden")),this.mode=t,this.seq=Xl[t],this.phase=e,this.step=0,this.active=!1,this.flags={},this.pending=0,this.m5=null,this.ceremony=!1,this.free=e>=this.seq.length,this.preset(e),this.scenario(this.key,n),i.grid.step(0),i.grid.fossil=Math.max(0,i.grid.out.demand-i.grid.out.ren),i.grid.step(0),i.actors.gather(!1),this.free){i.ui.toast("MODO LIBRE","Sandbox clim\xE1tico desbloqueado: abr\xED el panel de red con Tab",4);return}this.begin()}begin(){let t=this.g;t.ui.dialog(this.lines(Tx[this.key]),()=>{if(this.active=!0,t.ui.toast("MISI\xD3N "+(this.phase+1),this.title,3),this.key==="tormenta"){let e=t.grid;e.windP.t[0].fault=!0,e.windP.txFault=!0,e.hydro.gates[2].reg=!1,t.audio.thunder()}})}steps(){let t=this.g.grid,e=t.out,n=this.g.capi.pos,i=this.short;switch(this.key){case"viento":{let s=i?[1]:[1,2,4],a=s.filter(o=>t.windP.t[o].fault);return[{text:"Hablar con Don Mateo en la entrada de las cuchillas",targets:["npc:mateo"],done:this.flag("mateo")},{text:i?"Desbloquear el freno del aerogenerador marcado":`Desbloquear los frenos de 3 aerogeneradores (${3-a.length}/3)`,targets:a.map(o=>"wind:"+o),done:!a.length},{text:"Activar el transformador del parque",targets:["wind:tx"],done:t.windP.tx},{text:`Llevar la matriz renovable al 35${Te}%`,targets:[],done:e.pct>=35}]}case"rio":{let s=i?[0]:[0,1],a=s.filter(o=>t.hydro.gates[o].reg).length;return[{text:"Viajar a la Central Hidroel\xE9ctrica, al norte",targets:["gate:0"],done:this.flag("atDam")||Math.abs(n.x)<42&&n.z<-34&&n.z>-80&&(this.flags.atDam=!0)},{text:i?"Regular la compuerta del vertedero":`Regular dos compuertas del vertedero (${a}/2)`,targets:s.filter(o=>!t.hydro.gates[o].reg).map(o=>"gate:"+o),done:a===s.length},{text:"Sincronizar la Turbina 3 en la sala de m\xE1quinas",targets:["turb:2"],done:t.hydro.t[2].on},{text:`Alcanzar el 65${Te}% de energ\xEDa renovable`,targets:[],done:e.pct>=65}]}case"sol":{let s=i?[0,1]:[0,1,2,3],a=s.filter(c=>!t.solar.a[c].on),o=i?.5:.8;return[{text:i?`Limpiar y reorientar las matrices desde 2 consolas (${2-a.length}/2)`:`Limpiar y reorientar las 4 matrices solares (${4-a.length}/4)`,targets:a.map(c=>"solar:"+c),done:!a.length&&t.solar.a.every(c=>c.on)},{text:"Habilitar el flujo hacia el Banco de Bater\xEDas",targets:["bat"],done:t.bat.connected},{text:`Cargar el banco al ${o*100}${Te}% antes de las 18:30 (${Math.round(t.bat.soc*100)}${Te}%)`,targets:[],done:t.bat.connected&&t.bat.soc>=o}]}case"urbano":{let s=[{text:"Cargar chips del acopio forestal en la cinta",targets:["bio:chips"],done:t.bio.chips},{text:"Encender la caldera con su secuencia de arranque",targets:["bio:boiler"],done:t.bio.on},{text:"Enrutar la potencia hacia la Terminal de la Rambla",targets:["bio:sub"],done:t.bio.routed}];return i||s.push({text:"Cargar la flota al comp\xE1s en los cargadores de la Terminal",targets:["term"],done:this.flag("charged")}),s.push({text:"Ver salir los \xF3mnibus el\xE9ctricos: habl\xE1 con Luc\xEDa",targets:["npc:lucia"],done:this.flag("busesSeen")}),s}case"ahorro":{let s=[0,1,2].filter(a=>!this.flags["led"+a]);return[{text:`Cambiar las lamparitas por LED en 3 casas del barrio (${3-s.length}/3)`,targets:s.map(a=>"led:"+a),done:!s.length},{text:"Cargar los \xF3mnibus con el sol del mediod\xEDa en la Terminal",targets:["term"],done:this.flag("sunCharged")}]}case"tormenta":{let s=[0].filter(a=>t.windP.t[a].fault);return[{text:"Liberar el aerogenerador frenado por las r\xE1fagas",targets:s.map(a=>"wind:"+a),done:!s.length},{text:"Reconectar el transformador alcanzado por el rayo",targets:["wind:tx"],done:!t.windP.txFault},{text:"Regular la compuerta 3: el r\xEDo viene crecido",targets:["gate:2"],done:t.hydro.gates[2].reg},{text:`Recuperar el 100${Te}% renovable en plena sudestada`,targets:[],done:e.pct>=100&&!s.length&&!t.windP.txFault&&t.hydro.gates[2].reg}]}case"pico":{let s=this.m5;return this.ceremony?[{text:"Ir al escenario de la Plaza Matriz para la ceremonia",targets:["fest"],done:this.flag("cer")}]:[{text:"Hablar con la Ing. Valeria en el Centro de Control",targets:["npc:valeria"],done:!!s},{text:"Pasar las bater\xEDas a Autom\xE1tico en el panel de red (Tab)",targets:[],done:!!s&&t.bat.mode==="auto"},{text:`Mantener el 100${Te}% renovable hasta que pase la hora pico`,targets:[],done:this.flag("m5won")}]}}return[]}flag(t){return!!this.flags[t]}event(){}describe(t){let e=this.g.grid,[n,i]=t.split(":"),s=+i,a=s+1;if(n==="npc")return{state:"ok",label:"Hablar con "+{mateo:"Don Mateo",valeria:"la Ing. Valeria",lucia:"Luc\xEDa"}[i]};if(n==="sub")return{state:"ok",label:"Abrir el panel de red"};if(n==="fest")return{state:this.ceremony?"ok":"locked",label:"Subir al escenario"};if(n==="stop")return e.buses?{state:"ok",label:"Tomar el \xF3mnibus el\xE9ctrico"}:{state:"off",label:"Parada de \xF3mnibus: la flota el\xE9ctrica todav\xEDa no tiene carga"};if(n==="term")return!this.reached("urbano")||!e.bio.routed?{state:"locked"}:this.key==="ahorro"&&this.active&&!this.flags.sunCharged?this.lapse?{state:"off",label:"Cargadores: esper\xE1 al mediod\xEDa, que todav\xEDa no hay sol"}:{state:"need",label:"Cargar los \xF3mnibus con sol",mg:"solar"}:this.key==="urbano"&&!this.short&&!this.flags.charged?{state:"need",label:"Cargar la flota al comp\xE1s",mg:"rhythm"}:{state:"ok",label:"Tocar el comp\xE1s de carga",mg:"rhythm",replay:!0};if(n==="led")return this.key==="ahorro"&&this.active?this.flags["led"+s]?{state:"ok",label:"Ver la casa con luces LED"}:{state:"need",label:"Cambiar las lamparitas por LED",mg:"led"}:this.seq.includes("ahorro")&&this.done("ahorro")?{state:"ok",label:"Ver la casa con luces LED"}:{state:"locked"};if(n==="wind")return this.reached("viento")?i==="tx"?e.windP.txFault?{state:"need",label:"Reconectar el transformador del parque",mg:"sync"}:e.windP.tx?{state:"ok",label:"Inspeccionar el transformador"}:{state:e.windP.t.some(o=>o.fault)?"off":"need",label:"Activar el transformador del parque"}:e.windP.t[s].fault?{state:"need",label:`Desbloquear el aerogenerador ${a}`,mg:s%2?"sync":"crank"}:{state:"ok",label:`Inspeccionar el aerogenerador ${a}`}:{state:"locked"};if(n==="gate")return this.reached("rio")?e.hydro.gates[s].reg?{state:"ok",label:`Inspeccionar la compuerta ${a}`}:{state:"need",label:`Regular la compuerta ${a}`,mg:"gates"}:{state:"locked"};if(n==="turb"){if(!this.reached("rio"))return{state:"locked"};let o=e.hydro.t[s];return o.fault?{state:"need",label:`Resincronizar la turbina ${a}`,mg:"sync"}:o.on?{state:"ok",label:`Inspeccionar la turbina ${a}`}:s===2?{state:"need",label:"Sincronizar la turbina 3",mg:"sync"}:{state:"off",label:"Turbina 4: en mantenimiento programado"}}if(n==="solar"){if(!this.reached("sol"))return{state:"locked"};let o=e.solar.a[s];return o.on&&!o.fault?{state:"ok",label:`Inspeccionar la matriz ${a}`}:{state:"need",label:`Limpiar y reorientar la matriz ${a}`,mg:"helio"}}return n==="bat"?this.reached("sol")?e.bat.connected?{state:"ok",label:"Inspeccionar el banco de bater\xEDas"}:e.solar.a.every(o=>o.on)?{state:"need",label:"Habilitar el Banco de Bater\xEDas",mg:"route"}:{state:"off",label:"Banco de bater\xEDas: primero las matrices solares"}:{state:"locked"}:n==="bio"?this.reached("urbano")?i==="chips"?e.bio.chips?{state:"ok",label:"Inspeccionar el acopio de chips"}:{state:"need",label:"Cargar chips de madera en la cinta"}:i==="boiler"?e.bio.fault?{state:"need",label:"Recuperar la presi\xF3n de la caldera",mg:"seq"}:e.bio.on?{state:"ok",label:"Inspeccionar la caldera"}:e.bio.chips?{state:"need",label:"Encender la caldera",mg:"seq"}:{state:"off",label:"Caldera: faltan chips en la cinta"}:e.bio.routed?{state:"ok",label:"Inspeccionar la subestaci\xF3n"}:e.bio.on?{state:"need",label:"Enrutar la potencia a la terminal",mg:"route"}:{state:"off",label:"Subestaci\xF3n: la caldera est\xE1 apagada"}:{state:"locked"}:{state:"locked"}}interact(t){let e=this.g,n=e.grid,i=this.describe(t),[s,a]=t.split(":"),o=+a,c=e.ui,l=e.world.inter[t],h=()=>{e.fx.sparks(l.x,l.y+2,l.z,26,5951999),e.audio.power(),e.capi.celebrate(1.2)};if(s==="npc")return this.talk(a);if(s==="sub")return e.togglePanel(!0);if(s==="fest")return this.flags.cer=!0,this.runCeremony();if(s==="stop")return i.state==="ok"?e.extras.openTravel(o):c.note(i.label);if(i.state==="off")return c.note(i.label);if(i.state==="ok"&&!i.replay)return c.note(this.info(t));if(i.mg){let f={title:{sync:"Sincronizaci\xF3n de fase",crank:`Freno del aerogenerador ${o+1}`,seq:"Secuencia de arranque de la caldera",gates:`Control de la compuerta ${o+1}`,helio:`Matriz solar ${o+1}`,route:"Enrutamiento de subestaci\xF3n",rhythm:"Comp\xE1s de carga r\xE1pida",led:"Cambio a LED",solar:"Carga con sol del mediod\xEDa"}[i.mg],from:s==="bat"?"SOLAR":"CALDERA",to:s==="bat"?"BATER\xCDAS":"TERMINAL"};return e.minigame(i.mg,f,()=>{let d="Transformador reconectado.";if(s==="wind")a==="tx"?n.windP.txFault=!1:(n.windP.t[o].fault=!1,d=`Freno liberado: el aerogenerador ${o+1} vuelve a girar.`);else if(s==="gate")n.hydro.gates[o].reg=!0,this.short&&this.key==="rio"&&(n.hydro.gates[1].reg=!0),e.audio.gate(),d=`Compuerta ${o+1} regulada: el agua ahora pasa por las turbinas.`;else if(s==="turb")n.hydro.t[o].on=!0,n.hydro.t[o].fault=!1,d=`Turbina ${o+1} acoplada a la red en 50,0 Hz.`;else if(s==="solar"){let p=this.short&&this.key==="sol"&&o<2?[o,o+2]:[o];p.forEach(x=>{n.solar.a[x].on=!0,n.solar.a[x].fault=!1}),d=p.length>1?`Matrices ${o+1} y ${o+3} limpias y siguiendo al sol.`:`Matriz ${o+1} limpia y siguiendo al sol.`}else s==="bat"?(n.bat.connected=!0,n.bat.mode="auto",d="Banco de bater\xEDas conectado: los excedentes ahora se guardan."):s==="bio"?a==="boiler"?(n.bio.on=!0,n.bio.fault=!1,d="Caldera encendida: la presi\xF3n sube y entrega potencia firme."):(n.bio.routed=!0,d="Potencia enrutada: los cargadores r\xE1pidos de la terminal tienen energ\xEDa."):s==="term"?i.mg==="solar"?(this.flags.sunCharged=!0,d="\xD3mnibus cargados con sol del mediod\xEDa: energ\xEDa que sobraba y ahora mueve la ciudad."):(this.flags.charged=!0,d="Flota cargada al comp\xE1s del candombe. \xA1Lista para salir!"):s==="led"&&(this.flags["led"+o]=!0,n.eff=.02*[0,1,2].filter(p=>this.flags["led"+p]).length,d=n.eff>.05?`Tres casas con LED y el barrio se contagia: la demanda de la ciudad baja un 6${Te}%.`:"Casa con luces LED: la misma luz gastando unas seis veces menos.");n.step(0),h(),c.note(d)})}e.capi.work(1.1),e.audio.spark(),t==="wind:tx"&&(n.windP.tx=!0,setTimeout(h,900),c.note("Transformador en l\xEDnea: el parque e\xF3lico inyecta energ\xEDa a la red.")),t==="bio:chips"&&(n.bio.chips=!0,e.fx.puff(l.x,l.y+1,l.z,14,13215339,2),c.note("Cinta cargada con chips de madera de residuos forestales."))}info(t){if(t.startsWith("led"))return"L\xE1mparas LED: la misma luz con unas seis veces menos electricidad que una incandescente.";let e=this.g.grid,[n,i]=t.split(":"),s=+i,a=o=>o.toFixed(1).replace(".",",");return n==="wind"?i==="tx"?`Transformador del parque: ${a(e.out.wind)} MW hacia la ciudad.`:`Aerogenerador ${s+1}: ${a(e.windUnit[s])} MW con viento al ${Math.round(e.wind*100)}${Te}%.`:n==="gate"?`Compuerta ${s+1} regulada. Salto \xFAtil al ${Math.round(e.head()*100)}${Te}%.`:n==="turb"?`Turbina ${s+1}: ${a(e.hydroUnit[s])} MW, acoplada a 50,0 Hz.`:n==="solar"?`Matriz ${s+1}: ${a(e.solarUnit[s])} MW. De noche no genera: por eso existen las bater\xEDas.`:n==="bat"?`Banco LFP al ${Math.round(e.bat.soc*100)}${Te}%. Guarda excedentes y los devuelve en la hora pico.`:t==="bio:chips"?"Acopio de chips: biomasa de residuos forestales para la caldera.":t==="bio:boiler"?`Caldera de cogeneraci\xF3n: ${a(e.out.bio)} MW firmes, haya o no viento.`:"Subestaci\xF3n elevadora: alimenta los cargadores de la Terminal de la Rambla."}talk(t){let e=this.g,n=e.ui,i=e.grid,s=this.flags,a=this.key;if(t==="mateo")return a==="viento"&&this.active&&!s.mateo?n.dialog(this.lines([_t("mateo","\xA1Buen d\xEDa, m'hijo! Lindo pampero se larg\xF3: viento del sudoeste, fresco y parejo. Justo lo que piden los molinos."),_t("mateo","Las cuchillas son lomas largas y suaves: el viento las peina sin tropezar con nada. Por eso los plantamos ac\xE1 arriba.",1),_t("mateo",this.short?"Despu\xE9s del mantenimiento qued\xF3 uno con el freno puesto. And\xE1 a su consola, solt\xE1 el freno y sincronizalo con la red. Los teros te marcan d\xF3nde hay l\xEDo.":"Despu\xE9s del mantenimiento quedaron tres con el freno puesto. And\xE1 a la consola de cada uno y solt\xE1 el freno: algunos piden manivela y otros sincronizar con la red. Los teros te marcan d\xF3nde hay l\xEDo.")]),()=>{s.mateo=!0}):a==="tormenta"?n.dialog([_t("mateo","Con sudestada los molinos se frenan solos si el viento se pasa de fuerte. No es falla: es que se cuidan. Hay que soltarlos cuando afloja la r\xE1faga.")]):n.dialog([_t("mateo",this.done("urbano")?"Los montes de eucalipto dan madera y los restos van a la caldera. Ac\xE1 no se tira nada.":"Cuando el viento afloja, el r\xEDo cubre. Y cuando sopla fuerte, se guarda agua. As\xED de simple es el trato.")]);if(t==="lucia")return a==="urbano"&&this.active&&i.bio.routed&&(this.short||s.charged)&&!s.busesSeen?n.dialog(this.lines([_t("lucia","\xA1Lleg\xF3 la potencia a los cargadores! Cada \xF3mnibus el\xE9ctrico que sale es gasoil que no se quema en la ciudad."),_t("lucia","Carga r\xE1pida al atardecer y a recorrer la rambla. \xA1Mir\xE1 c\xF3mo salen!")]),()=>{i.buses=!0,this.busT=6,e.inspect("terminal"),e.audio.power()}):a==="urbano"&&this.active&&i.bio.routed&&!s.charged?n.dialog([_t("lucia","Ya hay potencia. Ahora dale ritmo a los cargadores: es la consola del costado de la terminal, ac\xE1 al lado.")]):n.dialog([_t("lucia",i.buses?"La flota anda sola con energ\xEDa de ac\xE1 nom\xE1s. Y en silencio: los vecinos, chochos.":"Sin potencia en los cargadores no puedo sacar la flota. Avisame cuando la biomasa est\xE9 en l\xEDnea.")]);if(a==="pico"&&this.active&&!this.m5&&!this.ceremony)return n.dialog(this.lines([_t("valeria","Es la noche del festival en la rambla: demanda m\xE1xima hist\xF3rica y cero megavatios solares."),_t("valeria","Termin\xF3 el mantenimiento de la Turbina 4, as\xED que la represa va a pleno. Ten\xE9s agua, biomasa, bater\xEDas y las r\xE1fagas de la noche.",1),_t("valeria",`Abr\xED el panel de red con Tab y pas\xE1 las bater\xEDas a Autom\xE1tico. Despu\xE9s aguant\xE1 ${this.short?"un minuto y medio":"dos minutos"} al 100${Te}% renovable: si algo falla, las bater\xEDas te dan margen mientras lo arregl\xE1s.`),_t("valeria","\xBFListo? \xA1Arranca la hora pico!")]),()=>this.short?this.startM5():this.dryYear());n.dialog([_t("valeria",i.out.pct>=100?"Equilibrio \xF3ptimo: toda la demanda cubierta con renovables y la frecuencia clavada en 50,0 Hz.":`Estamos en ${Math.round(i.out.pct)}${Te}% renovable. Lo que falta lo cubre el respaldo f\xF3sil: ${Math.round(i.out.fossil)} MW.`)])}dryYear(){let t=this.g,e=t.grid;t.extras.choose("A\xF1o seco","Este a\xF1o llovi\xF3 poco y los embalses est\xE1n m\xE1s bajos que lo normal. \xBFCon qu\xE9 reforzamos la red para la hora pico?",[["Guardar agua en el embalse","Turbinar menos de d\xEDa para tener m\xE1s fuerza de noche"],["Llenar las bater\xEDas con el sol de la tarde","Energ\xEDa al instante, pero dura un par de horas"],["Pedir m\xE1s biomasa a la planta","Potencia firme, si hay chips acopiados"]],n=>{this.startM5(),n===0?e.headBonus=.07:n===1?e.bat.soc=1:e.bioBoost=1.18,t.ui.dialog([_t("valeria",["Buena: el agua guardada es como una bater\xEDa gigante. Eso s\xED, si no llueve, esa reserva no se repone sola.","Buena: las bater\xEDas responden al instante. Eso s\xED, alcanzan para un par de horas, as\xED que hay que usarlas justo en el pico.","Buena: la biomasa no depende del clima. Eso s\xED, hay que tener los chips acopiados de antemano."][n]),_t("valeria","En un a\xF1o seco no hay una sola respuesta: por eso conviene tener varias fuentes y combinarlas.")])})}startM5(){let t=this.g.grid,e=this.short;t.hydro.t[3].on=!0,t.hydro.t.forEach(n=>{n.fault=!1}),t.hydro.gates.forEach(n=>{n.reg=!0}),t.bat.soc=Math.max(t.bat.soc,.93),t.bat.mode="hold",t.hour=20,t.clockRate=0,t.holdAt=e?21.5:22,t.energyRate=1/60,t.windTarget=.85,t.windBase=.85,t.gustiness=.2,t.demandExtraTarget=0,this.m5={t:e?90:120,total:e?90:120,grace:12,events:e?[[68,"wind"],[36,"hydro"]]:[[98,"wind2"],[64,"bio"],[30,"hydro"]]},this.g.ui.toast("\xA1HORA PICO!",`Manten\xE9 el 100${Te}% renovable durante ${e?"90 segundos":"2 minutos"}`,3)}fault(t){let e=this.g.grid,n=this.g.ui,i=a=>a[Math.floor(Math.random()*a.length)],s="";if(t==="wind"||t==="wind2"){let a=e.windP.t.map((c,l)=>l).filter(c=>!e.windP.t[c].fault);if(!a.length)return;let o=i(a);if(e.windP.t[o].fault=!0,s=`Se trab\xF3 el freno del aerogenerador ${o+1}`,t==="wind2"){let c=a.filter(l=>l!==o);if(c.length){let l=i(c);e.windP.t[l].fault=!0,s=`Se trabaron los aerogeneradores ${Math.min(o,l)+1} y ${Math.max(o,l)+1}`}}}else if(t==="windtx"){if(!e.windP.tx||e.windP.txFault)return;e.windP.txFault=!0,s="Salt\xF3 la protecci\xF3n del transformador e\xF3lico"}else if(t==="hydro"){let a=[0,1,2,3].filter(c=>e.hydro.t[c].on&&!e.hydro.t[c].fault);if(!a.length)return;let o=i(a);e.hydro.t[o].fault=!0,s=`La turbina ${o+1} perdi\xF3 el sincronismo`}else if(t==="solar"){let a=[0,1,2,3].filter(c=>e.solar.a[c].on&&!e.solar.a[c].fault);if(!a.length)return;let o=i(a);e.solar.a[o].fault=!0,s=`Polvo sobre la matriz solar ${o+1}`}else if(t==="bio"){if(!e.bio.on||e.bio.fault)return;e.bio.fault=!0,s="Cay\xF3 la presi\xF3n de la caldera de biomasa"}else if(t==="gate"){let a=[0,1,2,3].filter(c=>e.hydro.gates[c].reg);if(!a.length)return;let o=i(a);e.hydro.gates[o].reg=!1,s=`La compuerta ${o+1} qued\xF3 abierta de m\xE1s`}n.note("Alerta de red: "+s+".",5),this.g.audio.alarm()}randomFault(){let t=this.g.grid,e=["wind","wind","hydro","windtx","gate"];t.sun()>.3&&e.push("solar","solar"),t.bio.on&&e.push("bio"),this.fault(e[Math.floor(Math.random()*e.length)])}clearFaults(){let t=this.g.grid;t.windP.t.forEach(e=>{e.fault=!1}),t.windP.txFault=!1,t.hydro.t.forEach(e=>{e.fault=!1}),t.hydro.gates.forEach(e=>{e.reg=!0}),t.bio.fault=!1}failM5(){let t=this.g;this.m5=null,this.active=!1,t.ui.timer(null),this.scenario("pico",!0),t.grid.bat.soc=.93,t.grid.bat.mode="auto",this.clearFaults(),t.ui.dialog([_t("valeria",`Entr\xF3 el respaldo f\xF3sil demasiado tiempo y perdimos el 100${Te}% renovable. Tranquilo: repar\xE9 las fallas y recargu\xE9 las bater\xEDas.`),_t("valeria","Un consejo: las bater\xEDas son tu margen. Arregl\xE1 cada falla antes de que se vac\xEDen. Ven\xED a verme cuando quieras intentarlo de nuevo.")],()=>{this.active=!0})}runCeremony(){let t=this.g;t.actors.celebrate=4,this.fw=600,this.fwNorth=!0,t.startCine(),t.ui.dialog(this.lines(Rx),()=>{t.capi.celebrate(3),t.audio.fanfare(),t.actors.celebrate=600,t.extras.showDiploma(()=>t.showCredits(()=>{t.endCine(),this.fwNorth=!1,this.fw=12,t.actors.celebrate=10,this.phase=this.seq.length,this.save(),this.start(this.mode,this.phase,!1),t.actors.gather(!0)}))})}update(t){let e=this.g,n=e.grid,i=e.ui;this.t+=t,this.lapse&&Math.abs(n.hour-this.lapse.to)<.001&&(n.clockRate=this.lapse.rate,n.holdAt=this.lapse.hold,this.lapse=null);let s=this.active?this.steps():[],a=s.findIndex(l=>!l.done);a<0&&(a=s.length);let o=this.active&&s[a]?s[a].targets:[];for(let l of e.world.interList){let h=this.describe(l.id);l.state=h.state,l.label=h.label||"",l.target=o.includes(l.id),l.target&&l.state==="locked"&&(l.state="ok")}if(this.fw>0&&(this.fw-=t,Math.random()<2.2*t)){let l=this.fwNorth;e.fx.firework(l?-58+Math.random()*28:-60+Math.random()*60,l?13+Math.random()*10:22+Math.random()*16,l?8+Math.random()*16:84+Math.random()*14,[5759881,5951999,16765503,16748459,16777215][Math.floor(Math.random()*5)]),e.audio.boom()}if(this.free){this.streak=n.out.pct>=100?this.streak+t:0,this.best=Math.max(this.best,this.streak),this.faultT-=t,this.faultT<=0&&(this.faultT=50+Math.random()*40,this.randomFault());let l=h=>Math.floor(h/60)+":"+String(Math.floor(h%60)).padStart(2,"0");i.mission("Modo libre","Sandbox clim\xE1tico \xB7 panel de red con Tab",[{text:`Mantener la red al 100${Te}% renovable`,state:n.out.pct>=100?"done":"now"},{text:"Racha actual: "+l(this.streak),state:"next"},{text:"Mejor racha: "+l(this.best),state:"next"}]),i.timer(null);return}if(i.mission(`Misi\xF3n ${this.phase+1} de ${this.seq.length} \xB7 ${this.title}`,this.active?"Objetivos":"Recibiendo instrucciones\u2026",s.map((l,h)=>({text:l.text,state:h<a?"done":h===a?"now":"next"}))),!this.active)return;a!==this.step&&(a>this.step&&a<s.length&&e.audio.ok(),this.step=a);let c=this.key;if(c==="sol"){let l=18.5-n.hour;this.lapse?i.timer(null):i.timer(n.bat.connected?`Atardecer en ${Math.max(0,Math.floor(l))} h ${String(Math.max(0,Math.floor(l%1*60))).padStart(2,"0")} min`:"Sol hasta las 18:30",l<2),l<=0&&a<s.length&&!this.lapse&&(this.active=!1,i.timer(null),i.dialog([_t("valeria","Se nos fue el sol antes de completar la carga. No pasa nada: ma\xF1ana sale de nuevo. Adelanto el reloj y seguimos donde quedamos.")],()=>{this.scenario("sol",!1),this.active=!0}))}if(c==="urbano"&&this.busT>0&&(this.busT-=t,this.busT<=0&&(this.flags.busesSeen=!0)),c==="pico"&&this.m5&&!this.flags.m5won){let l=this.m5;if(!l.started){if(n.bat.mode!=="auto"){i.timer("Pas\xE1 las bater\xEDas a Autom\xE1tico (Tab)",!0);return}l.started=!0,n.clockRate=1/60}for(l.t-=t;l.events.length&&l.t<=l.events[0][0];)this.fault(l.events.shift()[1]);n.out.pct<99.9&&(l.grace-=t);let h=Math.max(0,Math.ceil(l.t));if(i.timer(`Hora pico: ${Math.floor(h/60)}:${String(h%60).padStart(2,"0")}  \xB7  margen f\xF3sil ${Math.max(0,l.grace).toFixed(0)} s`,n.out.pct<99.9),l.grace<=0)return this.failM5();l.t<=0&&(this.flags.m5won=!0,i.timer(null),i.toast(`\xA1100${Te}% RENOVABLE!`,"Pas\xF3 la hora pico sin un solo apag\xF3n",4.5),e.audio.fanfare(),e.capi.celebrate(3),e.actors.celebrate=10,this.fw=60,this.fwNorth=!1,this.clearFaults(),n.energyRate=1/20,n.gustiness=.1,this.ceremony=!0,e.actors.gather(!0),setTimeout(()=>i.dialog([_t("valeria","\xA1Lo logramos! Pas\xF3 el pico sin quemar una gota de combustible. Ven\xED a la Plaza Matriz: te armamos un escenario y te estamos esperando todos.")]),4200));return}if(a>=s.length&&s.length&&!this.pending&&c!=="pico"){this.pending=1,this.active=!1,i.timer(null),i.toast("\xA1MISI\xD3N COMPLETA!",this.title,3.6),e.audio.fanfare(),e.capi.celebrate(2.6),e.actors.celebrate=7,c==="tormenta"&&(n.cloudTarget=0,n.cloud=Math.min(n.cloud,.3),e.vida.showRainbow(45));let l=c;setTimeout(()=>{let h=()=>{this.pending=0,this.flags={},this.phase++,this.save(),this.step=0,this.preset(this.phase),this.scenario(this.key,!1),this.begin()},u=this.lines(Ax[l]);u.length?i.dialog(u,h):h()},3e3)}}};var Oa=class{constructor(t){let e=this.N=188,n=this.cell=(J.maxX-J.minX)/e,i=e*e;this.h=new Float32Array(i),this.ok=new Uint8Array(i),this.water=new Uint8Array(i),this.deck=new Uint8Array(i);for(let c=0;c<e;c++)for(let l=0;l<e;l++){let h=J.minX+(l+.5)*n,u=J.minZ+(c+.5)*n,f=c*e+l,d=t.groundAt(h,u),p=Zn(h,u);this.ok[f]=1,d<p-1.2?(this.water[f]=1,this.h[f]=p):(this.h[f]=d,d-t.terrainAt(h,u)>.5&&(this.deck[f]=1))}let s=.62,a=c=>Math.max(0,Math.min(e-1,Math.floor((c-J.minX)/n))),o=c=>Math.max(0,Math.min(e-1,Math.floor((c-J.minZ)/n)));for(let c of t.boxes)for(let l=o(c.z0-s);l<=o(c.z1+s);l++)for(let h=a(c.x0-s);h<=a(c.x1+s);h++){let u=J.minX+(h+.5)*n,f=J.minZ+(l+.5)*n,d=l*e+h;u>=c.x0-s&&u<=c.x1+s&&f>=c.z0-s&&f<=c.z1+s&&c.top>this.h[d]+.72&&(this.ok[d]=0)}for(let c of t.circles){if(!c.r)continue;let l=c.r+.5;for(let h=o(c.z-l);h<=o(c.z+l);h++)for(let u=a(c.x-l);u<=a(c.x+l);u++){let f=J.minX+(u+.5)*n,d=J.minZ+(h+.5)*n;(f-c.x)**2+(d-c.z)**2<l*l&&(this.ok[h*e+u]=0)}}this.gs=new Float32Array(i),this.from=new Int32Array(i),this.closed=new Uint8Array(i),this.heap=[]}idx(t,e){let n=this.N;return Math.max(0,Math.min(n-1,Math.floor((e-J.minZ)/this.cell)))*n+Math.max(0,Math.min(n-1,Math.floor((t-J.minX)/this.cell)))}cx(t){return J.minX+(t%this.N+.5)*this.cell}cz(t){return J.minZ+(Math.floor(t/this.N)+.5)*this.cell}can(t,e){if(!this.ok[e])return!1;let n=this.h[e]-this.h[t];return!(n>2||n<-3.2||this.water[t]&&this.deck[e])}nearest(t,e){if(this.ok[t])return t;let n=this.N,i=t%n,s=Math.floor(t/n),a=-1,o=1e9;for(let c=Math.max(0,s-e);c<=Math.min(n-1,s+e);c++)for(let l=Math.max(0,i-e);l<=Math.min(n-1,i+e);l++){let h=c*n+l;if(!this.ok[h])continue;let u=(l-i)**2+(c-s)**2+Math.abs(this.h[h]-this.h[t])*4;u<o&&(o=u,a=h)}return a}los(t,e){let n=this.cx(t),i=this.cz(t),s=this.cx(e),a=this.cz(e),o=Math.ceil(Math.hypot(s-n,a-i)/(this.cell*.45)),c=t;for(let l=1;l<=o;l++){let h=this.idx(n+(s-n)*l/o,i+(a-i)*l/o);if(h!==c){if(!this.can(c,h)||this.water[h]!==this.water[t])return!1;c=h}}return!0}find(t,e,n,i){let s=this.N,a=this.nearest(this.idx(t,e),5),o=this.nearest(this.idx(n,i),7);if(a<0)return null;o<0&&(o=this.idx(n,i));let c=this.gs,l=this.from,h=this.closed,u=this.heap;c.fill(1/0),h.fill(0),u.length=0;let f=o%s,d=Math.floor(o/s),p=E=>{let R=Math.abs(E%s-f),y=Math.abs(Math.floor(E/s)-d);return Math.max(R,y)+.414*Math.min(R,y)},x=(E,R)=>{u.push([E,R]);let y=u.length-1;for(;y>0;){let b=y-1>>1;if(u[b][0]<=u[y][0])break;[u[b],u[y]]=[u[y],u[b]],y=b}},g=()=>{let E=u[0],R=u.pop();if(u.length){u[0]=R;let y=0;for(;;){let b=y*2+1,T=b+1,L=y;if(b<u.length&&u[b][0]<u[L][0]&&(L=b),T<u.length&&u[T][0]<u[L][0]&&(L=T),L===y)break;[u[L],u[y]]=[u[y],u[L]],y=L}}return E};c[a]=0,l[a]=-1,x(p(a),a);let m=!1,_=a,v=1e9;for(;u.length;){let E=g()[1];if(h[E])continue;if(h[E]=1,E===o){m=!0;break}let R=(this.cx(E)-n)**2+(this.cz(E)-i)**2;R<v&&(v=R,_=E);let y=E%s,b=Math.floor(E/s);for(let T=-1;T<=1;T++)for(let L=-1;L<=1;L++){if(!L&&!T)continue;let B=y+L,I=b+T;if(B<0||I<0||B>=s||I>=s)continue;let N=I*s+B;if(h[N]||!this.can(E,N)||L&&T&&(!this.can(E,b*s+B)||!this.can(E,I*s+y)))continue;let F=c[E]+(L&&T?1.414:1)*(this.water[N]?1.8:1)+Math.max(0,this.h[N]-this.h[E])*.3;F<c[N]&&(c[N]=F,l[N]=E,x(F+p(N),N))}}if(!m){if(_===a)return null;o=_}let M=[];for(let E=o;E!==-1;E=l[E])M.push(E);M.reverse();let w=[],S=0;for(;S<M.length-1;){let E=Math.min(M.length-1,S+60);for(;E>S+1&&!this.los(M[S],M[E]);)E--;w.push({x:this.cx(M[E]),z:this.cz(M[E])}),S=E}return m&&this.ok[this.idx(n,i)]&&w.length&&(w[w.length-1]={x:n,z:i}),w}};var bs=function(r,t){let i=r,s=Ks[t],a=null,o=0,c=null,l=[],h={},u=function(E,R){o=i*4+17,a=(function(y){let b=new Array(y);for(let T=0;T<y;T+=1){b[T]=new Array(y);for(let L=0;L<y;L+=1)b[T][L]=null}return b})(o),f(0,0),f(o-7,0),f(0,o-7),x(),p(),m(E,R),i>=7&&g(E),c==null&&(c=M(i,s,l)),_(c,R)},f=function(E,R){for(let y=-1;y<=7;y+=1)if(!(E+y<=-1||o<=E+y))for(let b=-1;b<=7;b+=1)R+b<=-1||o<=R+b||(0<=y&&y<=6&&(b==0||b==6)||0<=b&&b<=6&&(y==0||y==6)||2<=y&&y<=4&&2<=b&&b<=4?a[E+y][R+b]=!0:a[E+y][R+b]=!1)},d=function(){let E=0,R=0;for(let y=0;y<8;y+=1){u(!0,y);let b=pi.getLostPoint(h);(y==0||E>b)&&(E=b,R=y)}return R},p=function(){for(let E=8;E<o-8;E+=1)a[E][6]==null&&(a[E][6]=E%2==0);for(let E=8;E<o-8;E+=1)a[6][E]==null&&(a[6][E]=E%2==0)},x=function(){let E=pi.getPatternPosition(i);for(let R=0;R<E.length;R+=1)for(let y=0;y<E.length;y+=1){let b=E[R],T=E[y];if(a[b][T]==null)for(let L=-2;L<=2;L+=1)for(let B=-2;B<=2;B+=1)L==-2||L==2||B==-2||B==2||L==0&&B==0?a[b+L][T+B]=!0:a[b+L][T+B]=!1}},g=function(E){let R=pi.getBCHTypeNumber(i);for(let y=0;y<18;y+=1){let b=!E&&(R>>y&1)==1;a[Math.floor(y/3)][y%3+o-8-3]=b}for(let y=0;y<18;y+=1){let b=!E&&(R>>y&1)==1;a[y%3+o-8-3][Math.floor(y/3)]=b}},m=function(E,R){let y=s<<3|R,b=pi.getBCHTypeInfo(y);for(let T=0;T<15;T+=1){let L=!E&&(b>>T&1)==1;T<6?a[T][8]=L:T<8?a[T+1][8]=L:a[o-15+T][8]=L}for(let T=0;T<15;T+=1){let L=!E&&(b>>T&1)==1;T<8?a[8][o-T-1]=L:T<9?a[8][15-T-1+1]=L:a[8][15-T-1]=L}a[o-8][8]=!E},_=function(E,R){let y=-1,b=o-1,T=7,L=0,B=pi.getMaskFunction(R);for(let I=o-1;I>0;I-=2)for(I==6&&(I-=1);;){for(let N=0;N<2;N+=1)if(a[b][I-N]==null){let F=!1;L<E.length&&(F=(E[L]>>>T&1)==1),B(b,I-N)&&(F=!F),a[b][I-N]=F,T-=1,T==-1&&(L+=1,T=7)}if(b+=y,b<0||o<=b){b-=y,y=-y;break}}},v=function(E,R){let y=0,b=0,T=0,L=new Array(R.length),B=new Array(R.length);for(let O=0;O<R.length;O+=1){let k=R[O].dataCount,X=R[O].totalCount-k;b=Math.max(b,k),T=Math.max(T,X),L[O]=new Array(k);for(let Y=0;Y<L[O].length;Y+=1)L[O][Y]=255&E.getBuffer()[Y+y];y+=k;let $=pi.getErrorCorrectPolynomial(X),ft=js(L[O],$.getLength()-1).mod($);B[O]=new Array($.getLength()-1);for(let Y=0;Y<B[O].length;Y+=1){let Z=Y+ft.getLength()-B[O].length;B[O][Y]=Z>=0?ft.getAt(Z):0}}let I=0;for(let O=0;O<R.length;O+=1)I+=R[O].totalCount;let N=new Array(I),F=0;for(let O=0;O<b;O+=1)for(let k=0;k<R.length;k+=1)O<L[k].length&&(N[F]=L[k][O],F+=1);for(let O=0;O<T;O+=1)for(let k=0;k<R.length;k+=1)O<B[k].length&&(N[F]=B[k][O],F+=1);return N},M=function(E,R,y){let b=wu.getRSBlocks(E,R),T=Tu();for(let B=0;B<y.length;B+=1){let I=y[B];T.put(I.getMode(),4),T.put(I.getLength(),pi.getLengthInBits(I.getMode(),E)),I.write(T)}let L=0;for(let B=0;B<b.length;B+=1)L+=b[B].dataCount;if(T.getLengthInBits()>L*8)throw"code length overflow. ("+T.getLengthInBits()+">"+L*8+")";for(T.getLengthInBits()+4<=L*8&&T.put(0,4);T.getLengthInBits()%8!=0;)T.putBit(!1);for(;!(T.getLengthInBits()>=L*8||(T.put(236,8),T.getLengthInBits()>=L*8));)T.put(17,8);return v(T,b)};h.addData=function(E,R){R=R||"Byte";let y=null;switch(R){case"Numeric":y=Cx(E);break;case"Alphanumeric":y=Px(E);break;case"Byte":y=Lx(E);break;case"Kanji":y=Ix(E);break;default:throw"mode:"+R}l.push(y),c=null},h.isDark=function(E,R){if(E<0||o<=E||R<0||o<=R)throw E+","+R;return a[E][R]},h.getModuleCount=function(){return o},h.make=function(){if(i<1){let E=1;for(;E<40;E++){let R=wu.getRSBlocks(E,s),y=Tu();for(let T=0;T<l.length;T++){let L=l[T];y.put(L.getMode(),4),y.put(L.getLength(),pi.getLengthInBits(L.getMode(),E)),L.write(y)}let b=0;for(let T=0;T<R.length;T++)b+=R[T].dataCount;if(y.getLengthInBits()<=b*8)break}i=E}u(!1,d())},h.createTableTag=function(E,R){E=E||2,R=typeof R>"u"?E*4:R;let y="";y+='<table style="',y+=" border-width: 0px; border-style: none;",y+=" border-collapse: collapse;",y+=" padding: 0px; margin: "+R+"px;",y+='">',y+="<tbody>";for(let b=0;b<h.getModuleCount();b+=1){y+="<tr>";for(let T=0;T<h.getModuleCount();T+=1)y+='<td style="',y+=" border-width: 0px; border-style: none;",y+=" border-collapse: collapse;",y+=" padding: 0px; margin: 0px;",y+=" width: "+E+"px;",y+=" height: "+E+"px;",y+=" background-color: ",y+=h.isDark(b,T)?"#000000":"#ffffff",y+=";",y+='"/>';y+="</tr>"}return y+="</tbody>",y+="</table>",y},h.createSvgTag=function(E,R,y,b){let T={};typeof arguments[0]=="object"&&(T=arguments[0],E=T.cellSize,R=T.margin,y=T.alt,b=T.title),E=E||2,R=typeof R>"u"?E*4:R,y=typeof y=="string"?{text:y}:y||{},y.text=y.text||null,y.id=y.text?y.id||"qrcode-description":null,b=typeof b=="string"?{text:b}:b||{},b.text=b.text||null,b.id=b.text?b.id||"qrcode-title":null;let L=h.getModuleCount()*E+R*2,B,I,N,F,O="",k;for(k="l"+E+",0 0,"+E+" -"+E+",0 0,-"+E+"z ",O+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',O+=T.scalable?"":' width="'+L+'px" height="'+L+'px"',O+=' viewBox="0 0 '+L+" "+L+'" ',O+=' preserveAspectRatio="xMinYMin meet"',O+=b.text||y.text?' role="img" aria-labelledby="'+w([b.id,y.id].join(" ").trim())+'"':"",O+=">",O+=b.text?'<title id="'+w(b.id)+'">'+w(b.text)+"</title>":"",O+=y.text?'<description id="'+w(y.id)+'">'+w(y.text)+"</description>":"",O+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',O+='<path d="',N=0;N<h.getModuleCount();N+=1)for(F=N*E+R,B=0;B<h.getModuleCount();B+=1)h.isDark(N,B)&&(I=B*E+R,O+="M"+I+","+F+k);return O+='" stroke="transparent" fill="black"/>',O+="</svg>",O},h.createDataURL=function(E,R){E=E||2,R=typeof R>"u"?E*4:R;let y=h.getModuleCount()*E+R*2,b=R,T=y-R;return Bx(y,y,function(L,B){if(b<=L&&L<T&&b<=B&&B<T){let I=Math.floor((L-b)/E),N=Math.floor((B-b)/E);return h.isDark(N,I)?0:1}else return 1})},h.createImgTag=function(E,R,y){E=E||2,R=typeof R>"u"?E*4:R;let b=h.getModuleCount()*E+R*2,T="";return T+="<img",T+=' src="',T+=h.createDataURL(E,R),T+='"',T+=' width="',T+=b,T+='"',T+=' height="',T+=b,T+='"',y&&(T+=' alt="',T+=w(y),T+='"'),T+="/>",T};let w=function(E){let R="";for(let y=0;y<E.length;y+=1){let b=E.charAt(y);switch(b){case"<":R+="&lt;";break;case">":R+="&gt;";break;case"&":R+="&amp;";break;case'"':R+="&quot;";break;default:R+=b;break}}return R},S=function(E){E=typeof E>"u"?2:E;let y=h.getModuleCount()*1+E*2,b=E,T=y-E,L,B,I,N,F,O={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},k={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},X="";for(L=0;L<y;L+=2){for(I=Math.floor((L-b)/1),N=Math.floor((L+1-b)/1),B=0;B<y;B+=1)F="\u2588",b<=B&&B<T&&b<=L&&L<T&&h.isDark(I,Math.floor((B-b)/1))&&(F=" "),b<=B&&B<T&&b<=L+1&&L+1<T&&h.isDark(N,Math.floor((B-b)/1))?F+=" ":F+="\u2588",X+=E<1&&L+1>=T?k[F]:O[F];X+=`
`}return y%2&&E>0?X.substring(0,X.length-y-1)+Array(y+1).join("\u2580"):X.substring(0,X.length-1)};return h.createASCII=function(E,R){if(E=E||1,E<2)return S(R);E-=1,R=typeof R>"u"?E*2:R;let y=h.getModuleCount()*E+R*2,b=R,T=y-R,L,B,I,N,F=Array(E+1).join("\u2588\u2588"),O=Array(E+1).join("  "),k="",X="";for(L=0;L<y;L+=1){for(I=Math.floor((L-b)/E),X="",B=0;B<y;B+=1)N=1,b<=B&&B<T&&b<=L&&L<T&&h.isDark(I,Math.floor((B-b)/E))&&(N=0),X+=N?F:O;for(I=0;I<E;I+=1)k+=X+`
`}return k.substring(0,k.length-1)},h.renderTo2dContext=function(E,R){R=R||2;let y=h.getModuleCount();for(let b=0;b<y;b++)for(let T=0;T<y;T++)E.fillStyle=h.isDark(b,T)?"black":"white",E.fillRect(T*R,b*R,R,R)},h};bs.stringToBytes=function(r){let t=[];for(let e=0;e<r.length;e+=1){let n=r.charCodeAt(e);t.push(n&255)}return t};bs.createStringToBytes=function(r,t){let e=(function(){let i=Ux(r),s=function(){let c=i.read();if(c==-1)throw"eof";return c},a=0,o={};for(;;){let c=i.read();if(c==-1)break;let l=s(),h=s(),u=s(),f=String.fromCharCode(c<<8|l),d=h<<8|u;o[f]=d,a+=1}if(a!=t)throw a+" != "+t;return o})(),n=63;return function(i){let s=[];for(let a=0;a<i.length;a+=1){let o=i.charCodeAt(a);if(o<128)s.push(o);else{let c=e[i.charAt(a)];typeof c=="number"?(c&255)==c?s.push(c):(s.push(c>>>8),s.push(c&255)):s.push(n)}}return s}};var $e={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},Ks={L:1,M:0,Q:3,H:2},di={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},pi=(function(){let r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],t=1335,e=7973,n=21522,i={},s=function(a){let o=0;for(;a!=0;)o+=1,a>>>=1;return o};return i.getBCHTypeInfo=function(a){let o=a<<10;for(;s(o)-s(t)>=0;)o^=t<<s(o)-s(t);return(a<<10|o)^n},i.getBCHTypeNumber=function(a){let o=a<<12;for(;s(o)-s(e)>=0;)o^=e<<s(o)-s(e);return a<<12|o},i.getPatternPosition=function(a){return r[a-1]},i.getMaskFunction=function(a){switch(a){case di.PATTERN000:return function(o,c){return(o+c)%2==0};case di.PATTERN001:return function(o,c){return o%2==0};case di.PATTERN010:return function(o,c){return c%3==0};case di.PATTERN011:return function(o,c){return(o+c)%3==0};case di.PATTERN100:return function(o,c){return(Math.floor(o/2)+Math.floor(c/3))%2==0};case di.PATTERN101:return function(o,c){return o*c%2+o*c%3==0};case di.PATTERN110:return function(o,c){return(o*c%2+o*c%3)%2==0};case di.PATTERN111:return function(o,c){return(o*c%3+(o+c)%2)%2==0};default:throw"bad maskPattern:"+a}},i.getErrorCorrectPolynomial=function(a){let o=js([1],0);for(let c=0;c<a;c+=1)o=o.multiply(js([1,mi.gexp(c)],0));return o},i.getLengthInBits=function(a,o){if(1<=o&&o<10)switch(a){case $e.MODE_NUMBER:return 10;case $e.MODE_ALPHA_NUM:return 9;case $e.MODE_8BIT_BYTE:return 8;case $e.MODE_KANJI:return 8;default:throw"mode:"+a}else if(o<27)switch(a){case $e.MODE_NUMBER:return 12;case $e.MODE_ALPHA_NUM:return 11;case $e.MODE_8BIT_BYTE:return 16;case $e.MODE_KANJI:return 10;default:throw"mode:"+a}else if(o<41)switch(a){case $e.MODE_NUMBER:return 14;case $e.MODE_ALPHA_NUM:return 13;case $e.MODE_8BIT_BYTE:return 16;case $e.MODE_KANJI:return 12;default:throw"mode:"+a}else throw"type:"+o},i.getLostPoint=function(a){let o=a.getModuleCount(),c=0;for(let u=0;u<o;u+=1)for(let f=0;f<o;f+=1){let d=0,p=a.isDark(u,f);for(let x=-1;x<=1;x+=1)if(!(u+x<0||o<=u+x))for(let g=-1;g<=1;g+=1)f+g<0||o<=f+g||x==0&&g==0||p==a.isDark(u+x,f+g)&&(d+=1);d>5&&(c+=3+d-5)}for(let u=0;u<o-1;u+=1)for(let f=0;f<o-1;f+=1){let d=0;a.isDark(u,f)&&(d+=1),a.isDark(u+1,f)&&(d+=1),a.isDark(u,f+1)&&(d+=1),a.isDark(u+1,f+1)&&(d+=1),(d==0||d==4)&&(c+=3)}for(let u=0;u<o;u+=1)for(let f=0;f<o-6;f+=1)a.isDark(u,f)&&!a.isDark(u,f+1)&&a.isDark(u,f+2)&&a.isDark(u,f+3)&&a.isDark(u,f+4)&&!a.isDark(u,f+5)&&a.isDark(u,f+6)&&(c+=40);for(let u=0;u<o;u+=1)for(let f=0;f<o-6;f+=1)a.isDark(f,u)&&!a.isDark(f+1,u)&&a.isDark(f+2,u)&&a.isDark(f+3,u)&&a.isDark(f+4,u)&&!a.isDark(f+5,u)&&a.isDark(f+6,u)&&(c+=40);let l=0;for(let u=0;u<o;u+=1)for(let f=0;f<o;f+=1)a.isDark(f,u)&&(l+=1);let h=Math.abs(100*l/o/o-50)/5;return c+=h*10,c},i})(),mi=(function(){let r=new Array(256),t=new Array(256);for(let n=0;n<8;n+=1)r[n]=1<<n;for(let n=8;n<256;n+=1)r[n]=r[n-4]^r[n-5]^r[n-6]^r[n-8];for(let n=0;n<255;n+=1)t[r[n]]=n;let e={};return e.glog=function(n){if(n<1)throw"glog("+n+")";return t[n]},e.gexp=function(n){for(;n<0;)n+=255;for(;n>=256;)n-=255;return r[n]},e})(),js=function(r,t){if(typeof r.length>"u")throw r.length+"/"+t;let e=(function(){let i=0;for(;i<r.length&&r[i]==0;)i+=1;let s=new Array(r.length-i+t);for(let a=0;a<r.length-i;a+=1)s[a]=r[a+i];return s})(),n={};return n.getAt=function(i){return e[i]},n.getLength=function(){return e.length},n.multiply=function(i){let s=new Array(n.getLength()+i.getLength()-1);for(let a=0;a<n.getLength();a+=1)for(let o=0;o<i.getLength();o+=1)s[a+o]^=mi.gexp(mi.glog(n.getAt(a))+mi.glog(i.getAt(o)));return js(s,0)},n.mod=function(i){if(n.getLength()-i.getLength()<0)return n;let s=mi.glog(n.getAt(0))-mi.glog(i.getAt(0)),a=new Array(n.getLength());for(let o=0;o<n.getLength();o+=1)a[o]=n.getAt(o);for(let o=0;o<i.getLength();o+=1)a[o]^=mi.gexp(mi.glog(i.getAt(o))+s);return js(a,0).mod(i)},n},wu=(function(){let r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(i,s){let a={};return a.totalCount=i,a.dataCount=s,a},e={},n=function(i,s){switch(s){case Ks.L:return r[(i-1)*4+0];case Ks.M:return r[(i-1)*4+1];case Ks.Q:return r[(i-1)*4+2];case Ks.H:return r[(i-1)*4+3];default:return}};return e.getRSBlocks=function(i,s){let a=n(i,s);if(typeof a>"u")throw"bad rs block @ typeNumber:"+i+"/errorCorrectionLevel:"+s;let o=a.length/3,c=[];for(let l=0;l<o;l+=1){let h=a[l*3+0],u=a[l*3+1],f=a[l*3+2];for(let d=0;d<h;d+=1)c.push(t(u,f))}return c},e})(),Tu=function(){let r=[],t=0,e={};return e.getBuffer=function(){return r},e.getAt=function(n){let i=Math.floor(n/8);return(r[i]>>>7-n%8&1)==1},e.put=function(n,i){for(let s=0;s<i;s+=1)e.putBit((n>>>i-s-1&1)==1)},e.getLengthInBits=function(){return t},e.putBit=function(n){let i=Math.floor(t/8);r.length<=i&&r.push(0),n&&(r[i]|=128>>>t%8),t+=1},e},Cx=function(r){let t=$e.MODE_NUMBER,e=r,n={};n.getMode=function(){return t},n.getLength=function(a){return e.length},n.write=function(a){let o=e,c=0;for(;c+2<o.length;)a.put(i(o.substring(c,c+3)),10),c+=3;c<o.length&&(o.length-c==1?a.put(i(o.substring(c,c+1)),4):o.length-c==2&&a.put(i(o.substring(c,c+2)),7))};let i=function(a){let o=0;for(let c=0;c<a.length;c+=1)o=o*10+s(a.charAt(c));return o},s=function(a){if("0"<=a&&a<="9")return a.charCodeAt(0)-48;throw"illegal char :"+a};return n},Px=function(r){let t=$e.MODE_ALPHA_NUM,e=r,n={};n.getMode=function(){return t},n.getLength=function(s){return e.length},n.write=function(s){let a=e,o=0;for(;o+1<a.length;)s.put(i(a.charAt(o))*45+i(a.charAt(o+1)),11),o+=2;o<a.length&&s.put(i(a.charAt(o)),6)};let i=function(s){if("0"<=s&&s<="9")return s.charCodeAt(0)-48;if("A"<=s&&s<="Z")return s.charCodeAt(0)-65+10;switch(s){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+s}};return n},Lx=function(r){let t=$e.MODE_8BIT_BYTE,e=r,n=bs.stringToBytes(r),i={};return i.getMode=function(){return t},i.getLength=function(s){return n.length},i.write=function(s){for(let a=0;a<n.length;a+=1)s.put(n[a],8)},i},Ix=function(r){let t=$e.MODE_KANJI,e=r,n=bs.stringToBytes;(function(a,o){let c=n(a);if(c.length!=2||(c[0]<<8|c[1])!=o)throw"sjis not supported."})("\u53CB",38726);let i=n(r),s={};return s.getMode=function(){return t},s.getLength=function(a){return~~(i.length/2)},s.write=function(a){let o=i,c=0;for(;c+1<o.length;){let l=(255&o[c])<<8|255&o[c+1];if(33088<=l&&l<=40956)l-=33088;else if(57408<=l&&l<=60351)l-=49472;else throw"illegal char at "+(c+1)+"/"+l;l=(l>>>8&255)*192+(l&255),a.put(l,13),c+=2}if(c<o.length)throw"illegal char at "+(c+1)},s},Au=function(){let r=[],t={};return t.writeByte=function(e){r.push(e&255)},t.writeShort=function(e){t.writeByte(e),t.writeByte(e>>>8)},t.writeBytes=function(e,n,i){n=n||0,i=i||e.length;for(let s=0;s<i;s+=1)t.writeByte(e[s+n])},t.writeString=function(e){for(let n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},t.toByteArray=function(){return r},t.toString=function(){let e="";e+="[";for(let n=0;n<r.length;n+=1)n>0&&(e+=","),e+=r[n];return e+="]",e},t},Dx=function(){let r=0,t=0,e=0,n="",i={},s=function(o){n+=String.fromCharCode(a(o&63))},a=function(o){if(o<0)throw"n:"+o;if(o<26)return 65+o;if(o<52)return 97+(o-26);if(o<62)return 48+(o-52);if(o==62)return 43;if(o==63)return 47;throw"n:"+o};return i.writeByte=function(o){for(r=r<<8|o&255,t+=8,e+=1;t>=6;)s(r>>>t-6),t-=6},i.flush=function(){if(t>0&&(s(r<<6-t),r=0,t=0),e%3!=0){let o=3-e%3;for(let c=0;c<o;c+=1)n+="="}},i.toString=function(){return n},i},Ux=function(r){let t=r,e=0,n=0,i=0,s={};s.read=function(){for(;i<8;){if(e>=t.length){if(i==0)return-1;throw"unexpected end of file./"+i}let c=t.charAt(e);if(e+=1,c=="=")return i=0,-1;if(c.match(/^\s$/))continue;n=n<<6|a(c.charCodeAt(0)),i+=6}let o=n>>>i-8&255;return i-=8,o};let a=function(o){if(65<=o&&o<=90)return o-65;if(97<=o&&o<=122)return o-97+26;if(48<=o&&o<=57)return o-48+52;if(o==43)return 62;if(o==47)return 63;throw"c:"+o};return s},Nx=function(r,t){let e=r,n=t,i=new Array(r*t),s={};s.setPixel=function(l,h,u){i[h*e+l]=u},s.write=function(l){l.writeString("GIF87a"),l.writeShort(e),l.writeShort(n),l.writeByte(128),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(255),l.writeByte(255),l.writeByte(255),l.writeString(","),l.writeShort(0),l.writeShort(0),l.writeShort(e),l.writeShort(n),l.writeByte(0);let h=2,u=o(h);l.writeByte(h);let f=0;for(;u.length-f>255;)l.writeByte(255),l.writeBytes(u,f,255),f+=255;l.writeByte(u.length-f),l.writeBytes(u,f,u.length-f),l.writeByte(0),l.writeString(";")};let a=function(l){let h=l,u=0,f=0,d={};return d.write=function(p,x){if(p>>>x)throw"length over";for(;u+x>=8;)h.writeByte(255&(p<<u|f)),x-=8-u,p>>>=8-u,f=0,u=0;f=p<<u|f,u=u+x},d.flush=function(){u>0&&h.writeByte(f)},d},o=function(l){let h=1<<l,u=(1<<l)+1,f=l+1,d=c();for(let _=0;_<h;_+=1)d.add(String.fromCharCode(_));d.add(String.fromCharCode(h)),d.add(String.fromCharCode(u));let p=Au(),x=a(p);x.write(h,f);let g=0,m=String.fromCharCode(i[g]);for(g+=1;g<i.length;){let _=String.fromCharCode(i[g]);g+=1,d.contains(m+_)?m=m+_:(x.write(d.indexOf(m),f),d.size()<4095&&(d.size()==1<<f&&(f+=1),d.add(m+_)),m=_)}return x.write(d.indexOf(m),f),x.write(u,f),x.flush(),p.toByteArray()},c=function(){let l={},h=0,u={};return u.add=function(f){if(u.contains(f))throw"dup key:"+f;l[f]=h,h+=1},u.size=function(){return h},u.indexOf=function(f){return l[f]},u.contains=function(f){return typeof l[f]<"u"},u};return s},Bx=function(r,t,e){let n=Nx(r,t);for(let o=0;o<t;o+=1)for(let c=0;c<r;c+=1)n.setPixel(c,o,e(c,o));let i=Au();n.write(i);let s=Dx(),a=i.toByteArray();for(let o=0;o<a.length;o+=1)s.writeByte(a[o]);return s.flush(),"data:image/gif;base64,"+s},Ru=bs,k1=bs.stringToBytes;var Ox="https://homerotexeira04-ship-it.github.io/capi-matriz-verde/",Wt=r=>document.getElementById(r);var Ms=[{name:"Cl\xE1sico",need:0,helmet:16761888,vest:5227511,band:15859563},{name:"E\xF3lico",need:2,helmet:16053492,vest:8378562,band:16777215},{name:"Hidro",need:4,helmet:5227511,vest:2777008,band:12577275},{name:"Solar",need:6,helmet:16747050,vest:16765503,band:16774064},{name:"Biomasa",need:8,helmet:5748826,vest:10119743,band:14283419},{name:"Guardi\xE1n",need:10,helmet:15073406,vest:6958225,band:3068870}],Oi=[[-39.4,44,0,"la fuente de la Plaza Matriz","La red el\xE9ctrica del Uruguay trabaja a 50 Hz: la corriente va y viene 50 veces por segundo, y todas las centrales tienen que ir al mismo comp\xE1s."],[-58,97,0,"la punta del muelle","El carpincho es el roedor m\xE1s grande del mundo y un gran nadador. Por eso Capi cruza r\xEDos y embalses sin problema."],[12,-48,0,"el techo de la sala de m\xE1quinas","Salto Grande, sobre el r\xEDo Uruguay, es una represa binacional: la comparten Uruguay y Argentina, y tiene 14 turbinas."],[0,-78,.4,"el medio del embalse","Sobre el r\xEDo Negro hay tres represas en cadena: Rinc\xF3n del Bonete, Baygorria y Palmar. El agua que turbina una la vuelve a aprovechar la siguiente."],[86.5,-15.5,0,"la cima de una cuchilla","La potencia del viento crece con el cubo de su velocidad: si sopla el doble de r\xE1pido, trae ocho veces m\xE1s energ\xEDa. Por eso los parques e\xF3licos se instalan donde el viento es fuerte y parejo."],[39.3,30.4,0,"la sombra del omb\xFA de Don Mateo","El tero es un s\xEDmbolo del Uruguay: defiende su nido a los gritos, y hasta la selecci\xF3n de rugby se llama Los Teros."],[-66.5,-68,0,"el pasillo entre las matrices solares","Un panel con seguidor gira durante el d\xEDa para mirar siempre al sol. As\xED produce m\xE1s energ\xEDa que uno fijo."],[-43,-79.4,0,"el fondo del banco de bater\xEDas","LFP quiere decir litio-ferrofosfato: un tipo de bater\xEDa de litio muy segura, que aguanta miles de cargas y descargas. Por eso se usa para guardar energ\xEDa de la red."],[93.15,40.75,0,"el monte de eucaliptos","En Uruguay la biomasa para generar electricidad sale de residuos forestales, del licor negro de las plantas de celulosa y de la c\xE1scara de arroz, entre otros."],[-46,-17,0,"lo m\xE1s alto del puente","El ceibo, de flores rojas, es la flor nacional del Uruguay. Crece a orillas de r\xEDos y arroyos, como los que se ven desde este puente."]],Fa=class{constructor(t){this.g=t,this.got=new Set,this.outfit=0,this.open=null,this.t=0,this.factT=0,this.fading=!1;let e=t.world,n=new Ee({color:16769126,fog:!1}),i=new gs(.42,0);this.sparks=Oi.map(([s,a,o,c,l],h)=>{let u=new te,f=new lt(i,n),d=new lt(i,n);f.scale.set(.55,1.5,.55),d.scale.set(1.5,.55,.55),u.add(f,d);let p=new Ee({color:16774056,fog:!1,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1});for(let g of[f,d]){let m=new lt(i,p);m.scale.copy(g.scale),m.renderOrder=30,u.add(m)}let x=Math.max(e.groundAt(s,a),a<-56&&e.terrainAt(s,a)<hn?hn:0)+1.5+o;return u.position.set(s,x,a),t.scene.add(u),{i:h,x:s,y:x,z:a,place:c,text:l,group:u,ghost:p}}),Wt("bWard").onclick=()=>this.toggleWardrobe(),Wt("wClose").onclick=()=>this.close(),Wt("tvClose").onclick=()=>this.close(),Wt("fact").addEventListener("click",()=>{this.factT=.01}),Wt("dpName").addEventListener("keydown",s=>{s.key==="Enter"&&Wt("dGo").click()}),this.refresh()}data(){return{sparks:[...this.got],outfit:this.outfit}}reset(){this.got.clear(),this.setOutfit(0),this.refresh()}restore(t){this.got=new Set((t&&Array.isArray(t.sparks)?t.sparks:[]).filter(n=>n>=0&&n<Oi.length));let e=t&&Ms[t.outfit]&&Ms[t.outfit].need<=this.got.size?t.outfit:0;this.setOutfit(e),this.refresh()}refresh(){this.sparks.forEach(t=>{t.group.visible=!this.got.has(t.i)}),Wt("sparkCount").textContent=`Chispas de saber: ${this.got.size}/${Oi.length}`}setOutfit(t){this.outfit=t,this.g.capi.setOutfit(Ms[t])}colors(){let t=Ms[this.outfit],e=n=>"#"+n.toString(16).padStart(6,"0");return{helmet:e(t.helmet),vest:e(t.vest),band:e(t.band)}}close(){this.open==="diploma"||this.open==="choice"||(this.open&&Wt(this.open).classList.add("hidden"),this.open=null)}fact(t,e,n=11){Wt("factT").textContent=t,Wt("factX").textContent=e,Wt("fact").classList.add("on"),this.factT=n}collect(t){let e=this.g;this.got.add(t.i),t.group.visible=!1;let n=this.got.size;e.fx.sparks(t.x,t.y,t.z,34,16769126),e.audio.ok(),[84,88,91,96].forEach((s,a)=>e.audio.tone(440*Math.pow(2,(s-69)/12),.14,"triangle",.08,.08+a*.07));let i=Ms.find(s=>s.need===n&&s.need>0);this.fact(`Chispa de saber ${n} de ${Oi.length}`,t.text+(i?`  \xB7  \xA1Nuevo atuendo para Capi: ${i.name}! Abr\xED el vestuario con la tecla V.`:""),i?14:11),n===Oi.length&&e.ui.toast("\xA1TODAS LAS CHISPAS!","Encontraste los 10 datos escondidos",4),this.refresh(),e.missions.save()}hint(){let t=this.sparks.filter(e=>!this.got.has(e.i));return t.length?"Pista: busc\xE1 una chispa en "+t[0].place+".":"Ya encontraste todas las chispas."}toggleWardrobe(){if(this.open==="wardrobe")return this.close();this.g.locked||(this.open="wardrobe",Wt("wardrobe").classList.remove("hidden"),this.g.audio.click(),this.drawWardrobe())}drawWardrobe(){let t=Wt("wList"),e=n=>"#"+n.toString(16).padStart(6,"0");t.textContent="",Ms.forEach((n,i)=>{let s=this.got.size>=n.need,a=document.createElement("button");a.type="button",a.className="wItem"+(i===this.outfit?" on":""),a.disabled=!s,a.innerHTML=`<span class="sw"><i style="background:${e(n.helmet)}"></i><i style="background:${e(n.vest)}"></i><i style="background:${e(n.band)}"></i></span><b>${n.name}</b><em>${s?i===this.outfit?"puesto":"disponible":`con ${n.need} chispas`}</em>`,a.onclick=()=>{this.setOutfit(i),this.g.audio.ok(),this.g.missions.save(),this.drawWardrobe()},t.appendChild(a)}),Wt("wHint").textContent=`Ten\xE9s ${this.got.size} de ${Oi.length} chispas. `+this.hint()}openTravel(t){if(this.g.locked)return;this.open="travel",this.from=t,Wt("travel").classList.remove("hidden"),this.g.audio.click();let e=Wt("tvList");e.textContent="",st.stops.forEach((n,i)=>{let s=document.createElement("button");s.type="button",s.className="btn ghost",s.disabled=i===t,s.innerHTML=`<kbd>${i+1}</kbd> ${n[2]}`+(i===t?" \xB7 est\xE1s ac\xE1":""),s.onclick=()=>this.travel(i),e.appendChild(s)})}travel(t){if(t===this.from||this.fading)return;let e=this.g,n=st.stops[t];this.close(),this.fading=!0,Wt("fade").classList.add("on"),Wt("fadeTxt").textContent="En \xF3mnibus el\xE9ctrico hacia "+n[2]+"\u2026",e.audio.tone(392,.25,"square",.08),e.audio.tone(494,.3,"square",.08,.22),e.audio.power(),setTimeout(()=>{e.capi.teleport(n[0]+1.6,n[1]+1.6),e.capi.heading=0,e.cam.target.set(n[0],e.capi.pos.y+1.5,n[1]),e.cam.inspect=null,setTimeout(()=>{Wt("fade").classList.remove("on"),this.fading=!1,e.ui.note("Llegaste a "+n[2]+". Viaje sin humo: este \xF3mnibus anda con electricidad renovable.",4.5)},450)},650)}choose(t,e,n,i){this.open="choice",Wt("chTitle").textContent=t,Wt("chText").textContent=e;let s=Wt("chList");s.textContent="";let a=o=>{this.open==="choice"&&(Wt("choice").classList.add("hidden"),this.open=null,this.pick=null,this.g.audio.click(),i(o))};n.forEach(([o,c],l)=>{let h=document.createElement("button");h.type="button",h.className="btn ghost",h.innerHTML=`<kbd>${l+1}</kbd> ${o}<small>${c}</small>`,h.onclick=()=>a(l),s.appendChild(h)}),this.pick={n:n.length,go:a},Wt("choice").classList.remove("hidden")}key(t){if(this.open==="choice"&&this.pick){let e={Digit1:0,Digit2:1,Digit3:2,Numpad1:0,Numpad2:1,Numpad3:2}[t];e!=null&&e<this.pick.n&&this.pick.go(e);return}if(this.open==="travel"){let e={Digit1:0,Digit2:1,Digit3:2,Digit4:3,Digit5:4,Digit6:5,Numpad1:0,Numpad2:1,Numpad3:2,Numpad4:3,Numpad5:4,Numpad6:5}[t];e!=null&&this.travel(e)}}showDiploma(t){this.open="diploma";let e=Wt("diploma");e.classList.remove("hidden"),Wt("dAsk").classList.remove("hidden"),Wt("dCard").classList.add("hidden");let n=Wt("dpName");n.value="",setTimeout(()=>{try{n.focus()}catch{}},50),Wt("dGo").onclick=()=>{let i=n.value.trim().replace(/\s+/g," ").slice(0,40)||"Visitante",s=this.g.missions;Wt("dWho").textContent=i,Wt("dWho").classList.toggle("long",i.length>24),Wt("dStory").textContent=(s.short?"Historia corta":"Historia larga")+` \xB7 ${s.seq.length} misiones`,Wt("dSparks").textContent=`${this.got.size} de ${Oi.length} chispas de saber`,Wt("dDate").textContent=new Date().toLocaleDateString("es-UY",{day:"numeric",month:"long",year:"numeric"});let a=this.colors();La(Wt("dCapi").getContext("2d"),"capi",1,!1,a);try{let o=Ru(0,"M");o.addData(Ox),o.make();let c=o.getModuleCount(),l=Wt("dQR"),h=4,u=3;l.width=l.height=(c+u*2)*h;let f=l.getContext("2d");f.fillStyle="#fff",f.fillRect(0,0,l.width,l.height),f.fillStyle="#0b1a33";for(let d=0;d<c;d++)for(let p=0;p<c;p++)o.isDark(d,p)&&f.fillRect((p+u)*h,(d+u)*h,h,h)}catch{Wt("dQR").style.display="none"}Wt("dAsk").classList.add("hidden"),Wt("dCard").classList.remove("hidden"),this.g.audio.fanfare()},Wt("dDone").onclick=()=>{e.classList.add("hidden"),this.open=null,this.g.audio.click(),t()}}update(t,e){this.t+=t;let n=this.g.capi.pos;this.factT>0&&(this.factT-=t,this.factT<=0&&Wt("fact").classList.remove("on"));for(let i of this.sparks){if(this.got.has(i.i))continue;i.group.rotation.y+=t*2.4,i.group.position.y=i.y+Math.sin(this.t*2.6+i.i)*.22,e.fx.glow.sprite(i.x,i.group.position.y,i.z,3.4,16769126,.55+.25*Math.sin(this.t*5+i.i));let s=Math.hypot(n.x-i.x,n.z-i.z);i.ghost.opacity=.6*(1-ge(10,20,s)),e.play&&s<1.9&&Math.abs(n.y+1.2-i.y)<3.6&&this.collect(i)}}};var Yl=[64.5,-74],Fx=[91.5,-73],zx=[28,54],gi=[-38,-29],Pu=[[52,77,-87,-61],[79,104,-85,-61],[18,38,44,64]],Cu=(r,t,e,n,i,s)=>{let a=1e9,o=-1e9;for(let l=t-n/2;l<=t+n/2;l+=1.5)for(let h=e-i/2;h<=e+i/2;h+=1.5){let u=r.terrainAt(l,h);a=Math.min(a,u),o=Math.max(o,u)}let c=o+.12;return r.batch.boxB(t,a-.6,e,n,c-a+.6,i,s),r.addPlatform(t-n/2,t+n/2,e-i/2,e+i/2,c),c};function Lu(r){let t=r.batch,e=vn(4711);r.clear=null;let[n,i]=Yl;for(let p=0;p<6;p++)for(let x=0;x<6;x++)r.tree("naranjo",n-8+p*3.2+(e()-.5)*.5,i-8+x*3.2+(e()-.5)*.5,.85+e()*.3);for(let p=0;p<4;p++){let x=n-4.5+p*2.1,g=i+10.6,m=r.groundAt(x,g);t.boxB(x,m,g,1.3,.7,1,12159570),t.boxB(x,m+.7,g,1.1,.16,.8,16748319)}dn(r,"NARANJAS DE SALTO",n+7.5,r.groundAt(n+7.5,i+11.2),i+11.2,0,7.6,1.3,{bg:"#1f5a2a",border:"#ffb347"});let[s,a]=Fx,o=Cu(r,s,a,18,13.5,15392710),c=[[s-4,a+.6,3.5],[s+4.4,a+2,2.5]];for(let[p,x,g]of c)t.cyl(p,o,x,g+.3,g+.4,.42,14147040,18),t.cyl(p,o+.36,x,g,g,.08,3525074,18),r.addCircle(p,x,g+.35);t.boxB(s+3.6,o,a-4.6,7,2.6,3,16183522),t.boxB(s+3.6,o+2.6,a-4.6,7.6,.28,3.6,13000510),t.boxB(s+3.6,o,a-3.08,1.2,1.9,.08,7031343),r.addSolid(s+.1,s+7.1,a-6.1,a-3.1),[[s-7.2,a-4.2,16739179],[s-2.4,a-5,16765503],[s+7.6,a-.6,5227511]].forEach(([p,x,g])=>{t.cyl(p,o,x,.06,.06,2.2,14540253,5),t.add(new an(1.35,.55,8),g,p,o+2.4,x),t.boxB(p+1.1,o,x+.3,.7,.28,1.7,16777215),r.addCircle(p,x,.2)}),dn(r,"TERMAS",s-4.5,o,a+6.2,0,5,1.3,{bg:"#0d5c6b",border:"#9be7ff"}),r.updaters.push((p,x)=>{if(Math.random()<16*p){let g=c[Math.random()<.62?0:1],m=Math.random()*6.283,_=Math.sqrt(Math.random())*g[2]*.9;x.fx.soft.emit(g[0]+Math.cos(m)*_,o+.5,g[1]+Math.sin(m)*_,(Math.random()-.5)*.3,.7+Math.random()*.5,(Math.random()-.5)*.3,2.2+Math.random(),.5,1.9,16777215,.32,-.25,.5)}});let[l,h]=zx,u=Cu(r,l,h,14,12,10328462);t.boxB(l-1.8,u,h-1.2,7.4,3.4,5.2,7501957),t.boxB(l-1.8,u+3.4,h-1.2,7.9,.3,5.7,4935772),t.boxB(l-1.8,u,h+1.42,1.6,2.2,.08,3159100),r.addSolid(l-5.6,l+2,h-3.9,h+1.5),r.addOcc(l-5.6,l+2,h-3.9,h+1.5,u+3.7);let f=l+4,d=h-2;t.cyl(f,u,d,.55,.85,10.5,12433066,10),t.cyl(f,u+8.9,d,.6,.62,.8,13912123,10),t.cyl(f,u+7.2,d,.66,.68,.8,15921906,10),t.cyl(f,u+5.5,d,.71,.73,.8,13912123,10),r.addCircle(f,d,1.05),t.cyl(l+3.2,u,h+2.8,1.5,1.5,2.4,14209730,12),t.cyl(l+3.2,u+2.4,h+2.8,.3,1.5,.5,13222576,12),r.addCircle(l+3.2,h+2.8,1.7),dn(r,"CENTRAL T\xC9RMICA DE RESPALDO",l-.5,u,h+5.4,0,9,1.2,{bg:"#3a3f4a",border:"#ff9f43"}),r.smog=0,r.updaters.push((p,x)=>{let g=x.grid.out,m=ot(g.fossil/Math.max(80,g.demand),0,1);if(r.smog=Bt(r.smog,ot(m*1.5,0,1),.45,p),m>.01&&Math.random()<(4+30*m)*p){let _=x.grid.windDir||0,v=.6+(x.grid.wind||0)*1.6,M=Math.round(nt(140,58,m));x.fx.soft.emit(f+(Math.random()-.5)*.5,u+10.6,d+(Math.random()-.5)*.5,Math.cos(_)*v+(Math.random()-.5)*.4,1.7+Math.random()*.8,Math.sin(_)*v*.4+(Math.random()-.5)*.4,3.6+Math.random()*1.6,1,4.6,M<<16|M<<8|M,.5,-.22,.3)}}),[[5,41],[13,49],[-3,57]].forEach(([p,x],g)=>{let m=r.houses.find(_=>Math.abs(_.x-p)<2&&Math.abs(_.z-x)<2);m&&r.addInter("led:"+g,m.x,m.z+m.d/2+1.3,{console:!1,h:4.3,r:3})}),dn(r,"HOMENAJE A SALTO GRANDE",35.5,r.groundAt(35.5,-38),-38,.25,7.6,1.2,{bg:"#12325a",border:"#5ad1ff"})}var ql=r=>{let t=new se;return t.setAttribute("position",new Ut(r,3)),t.computeVertexNormals(),t},za=class{constructor(t){let e=t.world,n=t.scene,i=vn(2026);this.g=t,this.w=e,this.t=0,this.rainbowT=0,this.wasStorm=!1,this.smogShown=-1;let s=e.trees.filter(p=>p.type==="naranjo"),a=new fs(new He(.2,0),new Tt({color:16748319,roughness:.6,emissive:4857344}),s.length*9),o=new oe,c=0;for(let p of s)for(let x=0;x<9;x++){let g=i()*6.283,m=.35+i()*1.25;o.makeTranslation(p.x+Math.sin(m)*Math.cos(g)*1.42*p.s,p.y+1.575*p.s+Math.cos(m)*1.17*p.s,p.z+Math.sin(m)*Math.sin(g)*1.42*p.s),a.setMatrixAt(c++,o)}n.add(a);let l=(p,x)=>{let g=new te,m=new Tt({color:x,roughness:.95,flatShading:!0}),_=new Tt({color:2759698,roughness:.9}),v=new lt(new ms(.42,.72,3,8),m);v.rotation.x=Math.PI/2,v.position.y=.66,g.add(v);let M=new te;M.position.set(0,.9,.66),g.add(M);let w=new lt(new Ft(.5,.46,.66),m);w.position.z=.14,M.add(w);let S=new lt(new Ft(.34,.22,.08),_);S.position.set(0,-.05,.5),M.add(S);for(let R of[-1,1]){let y=new lt(new Ft(.13,.15,.08),m);y.position.set(R*.2,.28,-.08),M.add(y);let b=new lt(new ue(.05,6,5),_);b.position.set(R*.26,.08,.26),M.add(b)}let E=[];for(let R of[-.26,.26])for(let y of[-.36,.36]){let b=new lt(new Se(.1,.09,.42,6),m);b.position.set(R,.21,y),g.add(b),E.push(b)}return g.scale.setScalar(p),g.traverse(R=>{R.isMesh&&(R.castShadow=!0)}),n.add(g),{g,head:M,legs:E}},h=(p,x)=>{let g=e.terrainAt(p,x),m=e.waterAt(p,x);return g>m-.22&&g<m+1.6&&Math.hypot(p-gi[0],x-gi[1])<9&&!e.trees.some(_=>Math.hypot(_.x-p,_.z-x)<1.2)};this.fam=[[1,9067059],[1.08,8081968],[.52,10513986],[.5,10054208],[.48,10843208]].map(([p,x],g)=>{let m=l(p,x),_=gi[0],v=gi[1];for(let M=0;M<40;M++){let w=gi[0]+(i()-.5)*9,S=gi[1]+(i()-.5)*9;if(h(w,S)){_=w,v=S;break}}return Object.assign(m,{x:_,z:v,tx:_,tz:v,h:i()*6.283,wait:1+i()*4,s:p,i:g,ph:i()*6})}),this.okSpot=h;let u=ql([0,0,.2,0,0,-.2,1,0,-.08]),f=(p,x,g)=>{let m=new Ee({color:x,side:ye}),_=[];for(let v=0;v<p;v++){let M=new te,w=new lt(u,m),S=new lt(u,m);S.scale.x=-1,M.add(w,S),M.scale.setScalar(g),n.add(M);let E=Math.ceil(v/2),R=v%2?1:-1;_.push({g:M,a:w,b:S,ox:R*E*1.9,oz:-E*1.7,ph:v*.9})}return _};this.flocks=[{birds:f(9,2106412,1.25),cx:8,cz:-8,rx:78,rz:62,y:27,sp:.075,a:1.2},{birds:f(5,15922422,1),cx:-20,cz:96,rx:62,rz:13,y:12,sp:-.11,a:4}];let d=p=>{let x=new te,g=new Tt({color:16777215,roughness:.6,flatShading:!0}),m=new Tt({color:p,roughness:.6,flatShading:!0,side:ye}),_=new Tt({color:16645622,roughness:.8,side:ye}),v=new lt(new Ft(1.5,.62,3.8),g);v.position.y=.2,x.add(v);let M=new lt(new an(1.06,1.7,4),g);M.rotation.set(Math.PI/2,Math.PI/4,0),M.scale.set(1,1,.41),M.position.set(0,.2,2.75),x.add(M);let w=new lt(new Ft(1.54,.16,3.84),m);w.position.y=.42,x.add(w);let S=new lt(new Se(.05,.06,5.4,5),new Tt({color:8088149}));return S.position.set(0,3.1,.3),x.add(S),x.add(new lt(ql([0,.95,.15,0,5.6,.25,0,.95,-2.5]),_)),x.add(new lt(ql([0,.95,.5,0,4.6,.4,0,.95,2.7]),m)),x.traverse(E=>{E.isMesh&&(E.castShadow=!0)}),n.add(x),x};this.boats=[[-66,111,34,6,15073406,.5],[22,113,46,6.5,3068870,2.6],[78,109,20,4.5,16761888,4.4]].map(([p,x,g,m,_,v],M)=>({g:d(_),cx:p,cz:x,rx:g,rz:m,a:v,sp:(M%2?-1:1)*(1.6+M*.3),i:M})),this.flies=[];for(let[p,x,g,m]of[[gi[0],gi[1],13,12],[Yl[0],Yl[1],11,8],[-44,44,13,8],[34,27,9,6]])for(let _=0;_<m;_++){let v=i()*6.283,M=Math.sqrt(i())*g,w=p+Math.cos(v)*M,S=x+Math.sin(v)*M;this.flies.push({x:w,z:S,y:Math.max(e.groundAt(w,S),e.waterAt(w,S))+.9+i()*1.3,ph:i()*6.283,sp:.6+i()*.8})}this.glints=[];for(let p=0;p<46;p++)this.glints.push({x:nt(-122,106,i()),z:nt(98,123,i()),y:.06,ph:i()*6.283});for(let p=0;p<60&&this.glints.length<62;p++){let x=nt(-30,30,i()),g=nt(-100,-60,i());e.waterAt(x,g)===hn&&e.terrainAt(x,g)<hn-.6&&this.glints.push({x,z:g,y:hn+.06,ph:i()*6.283})}this.rainbow=new lt(new Ce(96,48).translate(0,24,0),new Qe({transparent:!0,depthWrite:!1,depthTest:!1,side:ye,fog:!1,uniforms:{uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec2 vUv; uniform float uA; vec3 hue(float h){ return clamp(abs(mod(h*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0,0.0,1.0); } void main(){ float r = length(vec2((vUv.x-0.5)*2.0, vUv.y)); float t = (r-0.80)/0.17; if (t < 0.0 || t > 1.0) discard; float a = smoothstep(0.0,0.2,t)*smoothstep(1.0,0.8,t)*smoothstep(0.02,0.3,vUv.y); gl_FragColor = vec4(hue(0.78*(1.0-t)), a*uA*0.62); }"})),this.rainbow.rotation.order="YXZ",this.rainbow.visible=!1,this.rainbow.renderOrder=40,n.add(this.rainbow),this.smogEl=document.getElementById("smog")}showRainbow(t=55,e=!1){this.rainbowT=t,this.rainbowMax=t,this.rainbowSky=e,this.rbInit=!0}update(t,e){let n=this.w,i=this.t+=t,s=e.night,a=n.storm||0,o=Math.round((n.smog||0)*50)/50;o!==this.smogShown&&this.smogEl&&(this.smogShown=o,this.smogEl.style.opacity=(o*.5).toFixed(3));let c=e.capi;for(let l of this.fam){let h=l.i>=2?this.fam[l.i%2]:null,u=!1;h&&Math.hypot(h.x-l.x,h.z-l.z)>3.2&&(l.tx=h.x+Math.cos(l.ph)*1.2,l.tz=h.z+Math.sin(l.ph)*1.2,l.wait=0);let f=l.tx-l.x,d=l.tz-l.z,p=Math.hypot(f,d);if(p>.25&&l.wait<=0){let v=(h?1.5:.85)*l.s**.3,M=l.x+f/p*v*t,w=l.z+d/p*v*t;u=!0,this.okSpot(M,w)?(l.x=M,l.z=w):(l.tx=l.x,l.tz=l.z);let S=Math.atan2(f,d)-l.h;S=Math.atan2(Math.sin(S),Math.cos(S)),l.h+=S*Math.min(1,t*5)}else if(l.wait-=t,l.wait<=0&&p<=.25){l.wait=2+Math.random()*6;for(let v=0;v<8;v++){let M=l.x+(Math.random()-.5)*7,w=l.z+(Math.random()-.5)*7;if(this.okSpot(M,w)){l.tx=M,l.tz=w;break}}}let x=c&&Math.hypot(c.x-l.x,c.z-l.z)<5;if(x&&!u){let v=Math.atan2(c.x-l.x,c.z-l.z)-l.h;v=Math.atan2(Math.sin(v),Math.cos(v)),l.h+=v*Math.min(1,t*3)}let g=n.terrainAt(l.x,l.z),m=n.waterAt(l.x,l.z),_=u?Math.sin(i*11+l.ph):0;l.g.position.set(l.x,Math.max(g,m-.5*l.s)+(u?Math.abs(_)*.05:0),l.z),l.g.rotation.y=l.h,l.legs.forEach((v,M)=>{v.rotation.x=_*(M===0||M===3?.5:-.5)}),l.head.rotation.x=x?-.25:u?.05:.5+Math.sin(i*3+l.ph)*.12}for(let l of this.flocks){l.a+=l.sp*t;let h=s<.75&&a<.5,u=l.cx+Math.cos(l.a)*l.rx,f=l.cz+Math.sin(l.a)*l.rz,d=Math.atan2(-Math.sin(l.a)*l.rx*Math.sign(l.sp),Math.cos(l.a)*l.rz*Math.sign(l.sp)),p=Math.cos(d),x=Math.sin(d);for(let g of l.birds){if(g.g.visible=h,!h)continue;g.g.position.set(u+g.ox*p+g.oz*x,l.y+Math.sin(i*.7+g.ph)*.8,f-g.ox*x+g.oz*p),g.g.rotation.y=d;let m=Math.sin(i*8.5+g.ph)*.65;g.a.rotation.z=m,g.b.rotation.z=-m}}for(let l of this.boats){l.a+=l.sp*t/l.rx;let h=l.cx+Math.cos(l.a)*l.rx,u=l.cz+Math.sin(l.a)*l.rz,f=Math.sign(l.sp);l.g.position.set(h,-.12+Math.sin(i*1.3+l.i*2)*.09,u),l.g.rotation.set(Math.sin(i*1.1+l.i)*.04,Math.atan2(-Math.sin(l.a)*l.rx*f,Math.cos(l.a)*l.rz*f),.09+Math.sin(i*.8+l.i*1.7)*.05),Math.random()<5*t&&e.fx.soft.emit(h+(Math.random()-.5)*.8,.08,u+(Math.random()-.5)*.8,0,.05,0,1.3,.35,1,16777215,.5,0,1),s>.4&&e.fx.glow.sprite(h,5.7,u,1.3,16767370,.8*s)}if(s>.45&&a<.5){let l=ge(.45,.8,s);for(let h of this.flies){let u=Math.max(0,Math.sin(i*1.7*h.sp+h.ph));u>.05&&e.fx.glow.sprite(h.x+Math.sin(i*.5*h.sp+h.ph)*1.3,h.y+Math.sin(i*.8+h.ph*2)*.5,h.z+Math.cos(i*.43*h.sp+h.ph)*1.3,.55,14221162,u*l)}for(let h of this.glints){let u=.35+.65*Math.max(0,Math.sin(i*1.3+h.ph));e.fx.glow.sprite(h.x,h.y,h.z,.5,13623551,u*l*.75)}}if(a>.6?this.wasStorm=!0:this.wasStorm&&a<.12&&(this.wasStorm=!1,s<.55&&this.showRainbow()),this.rainbowT>0){this.rainbowT-=t;let l=this.rainbowMax||55,h=this.rainbow;if(h.visible=!0,this.rainbowSky)h.position.set(4,3.5,-76),h.rotation.set(0,0,0),h.scale.setScalar(1);else{let u=e.focus,f=u.x-e.cam.x,d=u.z-e.cam.z,p=Math.hypot(f,d)||1,x=ot(e.zoom||56,22,90),g=this.rbInit?1:Math.min(1,t*2.5);this.rbInit=!1,h.position.x=nt(h.position.x,u.x+f/p*x*.08,g),h.position.z=nt(h.position.z,u.z+d/p*x*.08,g),h.position.y=nt(h.position.y,u.y+1,g),h.rotation.set(-1.3,Math.atan2(-f,-d),0),h.scale.setScalar(x/56*.62)}this.rainbow.material.uniforms.uA.value=this.rainbow.material.uniforms.uA.value=ge(0,5,l-this.rainbowT)*ge(0,9,this.rainbowT)*(1-s)*(1-a)}else this.rainbow.visible=!1}};var re=r=>document.getElementById(r),Iu=40,Du=[{x:-44,z:42,d:40,yaw:.45,low:.45,h:19.4,t:10,capi:[-36.4,47,-47,37.6]},{x:4,z:-58,d:64,yaw:.15,low:.5,h:10.5,t:10,rainbow:!0},{x:62,z:-8,d:60,yaw:.9,low:.55,h:16,t:9},{x:78,z:-73,d:42,yaw:-.25,low:.35,h:11.5,t:10},{x:-30,z:96,d:58,yaw:.3,low:.6,h:18.4,t:10,capi:[-22.4,73.4,-46,74]},{x:-38,z:-28,d:19,yaw:.6,low:.25,h:9,t:9},{x:-62,z:-80,d:50,yaw:.2,low:.4,h:13,t:9,capi:[-66.5,-66,-66.5,-78]},{x:-30,z:45,d:96,yaw:-.5,low:.3,h:21.5,t:10}],$l=class{constructor(){let t=re("gl"),e=this.renderer=new ks({canvas:t,antialias:!0,stencil:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),e.shadowMap.enabled=!0,e.localClippingEnabled=!0,e.shadowMap.type=yl,this.scene=new Jr,this.camera=new qe(Iu,1,1,2200),this.grid=new xa,this.audio=new Pa,this.fx=new Ta(this.scene);let n=this.world=new _a(this.scene,e),i=re("logoLargo");i&&i.naturalWidth&&(n.logoTex=fn(720,200,o=>{o.fillStyle="#0f2140",o.fillRect(0,0,720,200),o.strokeStyle="#ffc93c",o.lineWidth=10,o.strokeRect(5,5,710,190);let c=Math.min(640/i.naturalWidth,150/i.naturalHeight),l=i.naturalWidth*c,h=i.naturalHeight*c;o.drawImage(i,(720-l)/2,(200-h)/2,l,h)}));let s=re("logoIso");s&&s.naturalWidth&&(n.isoTex=fn(256,256,o=>{o.clearRect(0,0,256,256);let c=Math.min(250/s.naturalWidth,250/s.naturalHeight),l=s.naturalWidth*c,h=s.naturalHeight*c;o.drawImage(s,(256-l)/2,(256-h)/2,l,h)})),n.clear=Pu,xu(n),fu(n),du(n),pu(n),mu(n),gu(n),yu(n),_u(n),vu(n),Lu(n),n.finalize(),this.capi=new Aa(this.scene,n,this.fx,this.audio),this.actors=new Ca(n,this.scene),this.capi.nav=new Oa(n),this.capiLight=new oa(16773320,0,22,1.6),this.scene.add(this.capiLight);let a=this.ring=new lt(new sa(.55,.8,20),new Ee({color:16765503,transparent:!0,opacity:.9,depthWrite:!1,fog:!1}));a.rotation.x=-Math.PI/2,a.visible=!1,a.renderOrder=9,this.scene.add(a),this.xray=new Ee({color:16763196,transparent:!0,opacity:.6,depthFunc:_l,depthWrite:!1,fog:!1,stencilWrite:!0,stencilRef:1,stencilFunc:Yh,stencilZPass:ua}),this.ui=new Ia(this),this.mg=new Na(this.audio),this.missions=new Ba(this),this.extras=new Fa(this),this.vida=new za(this),this.mode="title",this.panel=!1,this.help=!1,this.keys={},this.jump=!1,this.eUsed=!1,this.cand=null,this.time=0,this.cam={yaw:.5,yawT:.5,dist:150,distT:150,target:new D(-14,3,14),inspect:null,inspectT:0},this.ptr=new Map,this.drag=null,this.autoQuality=!0,this.quality=0,this.ema=.016,this.qT=0,this.bind(),this.resize(),this.missions.preset(0),this.grid.step(0),this.grid.fossil=this.grid.out.demand-this.grid.out.ren,this.grid.step(0),re("bShort").onclick=()=>this.play("corta",0),re("bLong").onclick=()=>this.play("larga",0),re("bCont").onclick=()=>{this.saved&&this.play(this.saved.mode,this.saved.phase,this.saved)},re("bCred").onclick=()=>this.showCredits(null),this.refreshTitle(),this.last=performance.now(),requestAnimationFrame(o=>this.frame(o))}refreshTitle(){let t=this.saved=this.missions.load(),e=re("bCont");if(re("bShort").disabled=!1,re("bLong").disabled=!1,e.classList.toggle("hidden",!t||t.phase===0),t){let n=t.mode==="corta"?5:7;e.innerHTML="Continuar<small>"+(t.phase>=n?"modo libre":`historia ${t.mode} \xB7 misi\xF3n ${t.phase+1} de ${n}`)+"</small>"}re("load").textContent="Teclado y rat\xF3n \xB7 tambi\xE9n funciona con pantalla t\xE1ctil"}play(t,e,n){n?this.extras.restore(n):this.extras.reset(),this.audio.start(),this.mode="play",re("title").classList.add("hidden"),this.ui.show(),this.cam.distT=56,this.cam.yawT=.35,this.capi.teleport(st.startCapi[0],st.startCapi[1]),this.capi.heading=Math.PI,this.missions.start(t,e,!0)}startCine(){let t=this.capi;this.cine=!0,this.ui.hide(),document.body.classList.add("cine"),this.panel&&this.togglePanel(!1),t.teleport(st.stage[0],st.stage[1]),t.heading=0,this.cam.inspect=null,this.cineYaw=Math.round(this.cam.yaw/(Math.PI*2))*Math.PI*2,this.cam.yawT=this.cam.yaw=this.cineYaw+.2,this.cam.dist=9.5,this.cam.cineK=1,this.cam.cut=0,this.cam.target.set(t.pos.x,t.pos.y+1.95,t.pos.z)}endCine(){this.cine=!1,document.body.classList.remove("cine"),this.mode==="play"&&this.ui.show(),this.cam.distT=46}showCredits(t){re("credits").classList.remove("hidden"),re("crClose").textContent=t?"Seguir en modo libre":"Volver",re("crClose").onclick=()=>{re("credits").classList.add("hidden"),this.audio.click(),t&&t()}}kiosk(t){let e=this.kioskCfg;if(!e||this.mode==="title"){this.lastInput=t;return}let n=(t-this.lastInput)/1e3,i=Math.ceil(e.idle-n);i<=0?(this.missions.forget(),this.toTitle(),this.lastInput=t):i<=e.warn&&this.ui.note(`\xBFSegu\xEDs ah\xED? El juego vuelve al inicio en ${i} s. Mov\xE9 el rat\xF3n o toc\xE1 una tecla para seguir.`,1.2)}attractStep(t,e){if(this.mode!=="title"||!re("credits").classList.contains("hidden")){this.titleIdle=0,this.attract&&this.stopAttract();return}if(this.titleIdle=(this.titleIdle||0)+e,!this.attract){this.titleIdle>(this.kioskCfg?12:25)&&(this.attract={t:0,next:0,i:-1,hour0:this.grid.hour},document.body.classList.add("attract"));return}let n=this.attract,i=this.cam;if(n.t+=e,n.t>=n.next){if(!n.fading){n.fading=!0,re("fadeTxt").textContent="",re("fade").classList.add("on"),n.next=n.t+.5;return}n.fading=!1,n.i=(n.i+1)%Du.length;let s=n.shot=Du[n.i];n.start=n.t,n.next=n.t+s.t,i.target.set(s.x,this.world.groundAt(s.x,s.z)+2,s.z),i.dist=s.d*1.1,i.yaw=i.yawT=s.yaw,i.low=s.low,i.lowK=s.low,this.grid.hour=s.h,s.capi?(this.capi.teleport(s.capi[0],s.capi[1]),this.capi.navigate(s.capi[2],s.capi[3],.8)):this.capi.teleport(st.startCapi[0],st.startCapi[1]),s.rainbow&&this.vida.showRainbow(s.t,!0),setTimeout(()=>re("fade").classList.remove("on"),120)}n.shot&&(i.distT=nt(n.shot.d*1.1,n.shot.d*.86,ot((n.t-n.start)/n.shot.t,0,1)))}stopAttract(){let t=this.attract;t&&(this.attract=null,this.titleIdle=0,document.body.classList.remove("attract"),re("fade").classList.remove("on"),this.grid.hour=t.hour0,this.cam.low=0,this.cam.distT=this.cam.dist=150,this.cam.target.set(-14,3,14),this.capi.teleport(st.startCapi[0],st.startCapi[1]),this.vida.rainbowT=0)}toTitle(){this.toggleHelp(!1),this.panel&&this.togglePanel(!1),this.mg.active&&this.mg.cancel(),this.extras.open=null,["wardrobe","travel","diploma"].forEach(t=>re(t).classList.add("hidden")),this.ui.dlg=null,re("dialog").classList.add("hidden"),this.ui.hide(),this.mode="title",re("title").classList.remove("hidden"),this.refreshTitle(),this.cine&&this.endCine(),re("credits").classList.add("hidden"),this.missions.active=!1,this.missions.free=!1,this.missions.m5=null,this.missions.fw=0,this.cam.distT=150,this.cam.inspect=null,this.cam.target.set(-14,3,14),this.keys={}}get locked(){return this.mode!=="play"||!!this.ui.dlg||!!this.mg.active||this.panel||this.help||!!this.cine||!!this.extras.open||this.extras.fading}togglePanel(t){this.mode!=="play"||this.mg.active||this.ui.dlg||(this.panel=t??!this.panel,this.panel?this.ui.openPanel(this.missions.free):this.ui.closePanel(),this.audio.click())}toggleHelp(t){this.help=t,re("help").classList.toggle("hidden",!t)}toggleMute(){this.audio.setMuted(!this.audio.muted),re("bMute").textContent="Sonido: "+(this.audio.muted?"no":"s\xED")}minigame(t,e,n){this.capi.goto=null,this.mg.start(t,e,i=>{i&&n()})}inspect(t){let e=t==="terminal"?{x:st.terminal[0],z:st.terminal[1]+6}:Zs.find(n=>n.id===t);e&&(this.panel&&this.togglePanel(!1),this.cam.inspect=new D(e.x,this.world.groundAt(e.x,e.z)+2,e.z),this.cam.inspectT=6.5)}interact(t){let e=this.world.inter[t];!e||e.state==="locked"||(this.capi.goto=null,this.face=Math.atan2(e.x-this.capi.pos.x,e.z-this.capi.pos.z),this.missions.interact(t))}bind(){let t=re("gl");for(let s of["keydown","pointerdown","pointermove","wheel","touchstart"])window.addEventListener(s,a=>{this.titleIdle=0,this.attract&&(this.stopAttract(),s==="keydown"&&(a.stopPropagation(),a.preventDefault()))},{capture:!0});let e=window.CAPI_KIOSCO;if(this.kioskCfg=e?{idle:Math.max(30,+e.idle||180),warn:Math.max(5,+e.warn||30)}:null,this.lastInput=performance.now(),this.kioskCfg){this.missions.forget();for(let s of["keydown","pointerdown","pointermove","wheel","touchstart"])window.addEventListener(s,()=>{this.lastInput=performance.now()},{passive:!0,capture:!0});window.addEventListener("contextmenu",s=>s.preventDefault())}window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",s=>{let a=s.code;if(!(s.target&&s.target.tagName==="INPUT"&&s.target.type==="text")){if(["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(a)&&s.preventDefault(),this.mode==="title"){a==="Enter"&&!re("bLong").disabled&&re("credits").classList.contains("hidden")&&(this.saved&&this.saved.phase>0?this.play(this.saved.mode,this.saved.phase,this.saved):this.play("larga",0));return}if(a==="Escape"){this.extras.open?this.extras.close():this.mg.active?this.mg.cancel():this.panel?this.togglePanel(!1):this.help&&this.toggleHelp(!1);return}if(a==="KeyM"&&!s.repeat&&this.toggleMute(),this.extras.open){s.repeat||(a==="KeyV"?this.extras.close():this.extras.key(a));return}if(a==="KeyV"&&!s.repeat&&!this.locked){this.extras.toggleWardrobe();return}if(this.mg.active){s.repeat||this.mg.key(a,!0);return}if(a==="Tab"){!s.repeat&&!this.cine&&this.togglePanel();return}if(this.ui.dlg){!s.repeat&&(a==="KeyE"||a==="Space"||a==="Enter"||a==="KeyF")&&this.ui.advance();return}if(!(this.panel||this.help)&&!s.repeat&&(this.keys[a]=!0,a==="Space"&&(this.jump=!0),(a==="KeyE"||a==="KeyF"||a==="Enter")&&this.cand&&(a==="KeyE"&&(this.eUsed=!0),this.interact(this.cand.id)),s.shiftKey&&(a==="KeyQ"||a==="KeyE"&&!this.eUsed))){let o=Math.PI/4;this.cam.yawT=(a==="KeyQ"?Math.floor(this.cam.yawT/o+.001)+1:Math.ceil(this.cam.yawT/o-.001)-1)*o}}}),window.addEventListener("keyup",s=>{this.keys[s.code]=!1,s.code==="KeyE"&&(this.eUsed=!1),this.mg.active&&this.mg.key(s.code,!1)}),window.addEventListener("blur",()=>{this.keys={}}),t.addEventListener("contextmenu",s=>s.preventDefault()),t.addEventListener("pointerdown",s=>{t.setPointerCapture(s.pointerId),this.ptr.set(s.pointerId,{x:s.clientX,y:s.clientY}),this.drag={x:s.clientX,y:s.clientY,sx:s.clientX,sy:s.clientY,moved:0,right:s.button===2,touch:s.pointerType==="touch",pinch:this.ptr.size>1?this.pinchDist():0}}),t.addEventListener("pointermove",s=>{if(!this.ptr.has(s.pointerId)||!this.drag)return;let a=this.drag,o=this.ptr.get(s.pointerId),c=s.clientX-o.x;if(o.x=s.clientX,o.y=s.clientY,a.moved=Math.max(a.moved,Math.hypot(s.clientX-a.sx,s.clientY-a.sy)),this.mode==="play")if(this.ptr.size>1){let l=this.pinchDist();a.pinch>0&&(this.cam.distT=ot(this.cam.distT*a.pinch/l,20,195)),a.pinch=l,a.moved=99}else(a.right||a.touch&&a.moved>12)&&(this.cam.yawT-=c*.007)});let n=s=>{let a=this.drag;this.ptr.delete(s.pointerId),a&&this.ptr.size===0&&(!a.right&&a.moved<7&&s.type==="pointerup"&&this.click(s.clientX,s.clientY),this.drag=null)};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("wheel",s=>{s.preventDefault(),this.mode==="play"&&!this.panel&&(this.cam.distT=ot(this.cam.distT*Math.exp(s.deltaY*.0011),20,195))},{passive:!1});let i=(s,a)=>{let o=re(s),c=null,l=()=>{clearInterval(c),c=null};o.addEventListener("pointerdown",()=>{a(),c=setInterval(a,60)}),["pointerup","pointerleave","pointercancel"].forEach(h=>o.addEventListener(h,l))};i("cL",()=>{this.cam.yawT+=.09}),i("cR",()=>{this.cam.yawT-=.09}),i("cIn",()=>{this.cam.distT=ot(this.cam.distT*.94,20,195)}),i("cOut",()=>{this.cam.distT=ot(this.cam.distT*1.06,20,195)})}pinchDist(){let t=[...this.ptr.values()];return t.length>1?Math.hypot(t[0].x-t[1].x,t[0].y-t[1].y):0}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.fx.setScale(e*this.renderer.getPixelRatio()/(2*Math.tan(Iu*Math.PI/360)))}click(t,e){if(this.ui.dlg)return this.ui.advance();if(this.locked)return;let n=this.world,i=new D,s=window.innerWidth,a=window.innerHeight,o=null,c=56;for(let p of n.interList)if(p.state!=="locked")for(let x of[1.3,p.baseY-p.y]){if(i.set(p.x,p.y+x,p.z).project(this.camera),i.z>1)continue;let g=Math.hypot((i.x*.5+.5)*s-t,(-i.y*.5+.5)*a-e);g<c&&(c=g,o=p)}let l=this.capi;if(o){if(Math.hypot(o.x-l.pos.x,o.z-l.pos.z)<o.r)return this.interact(o.id);l.navigate(o.x,o.z,o.r-.9,()=>this.interact(o.id)),this.ringAt(o.x,o.z);return}let h=this.camera.position,u=i.set(t/s*2-1,-(e/a)*2+1,.5).unproject(this.camera).sub(h).normalize(),f=2,d=null;for(let p=2;p<700;p+=1.2){let x=h.x+u.x*p,g=h.y+u.y*p,m=h.z+u.z*p;if(x<J.minX||x>J.maxX||m<J.minZ||m>J.maxZ){if(f=p,g<-4)break;continue}let _=Math.max(n.groundAt(x,m,g+1.3),n.waterAt(x,m)-.3);if(g<=_){let v=f,M=p;for(let w=0;w<7;w++){let S=(v+M)/2,E=h.x+u.x*S,R=h.y+u.y*S,y=h.z+u.z*S;R<=Math.max(n.groundAt(E,y,R+1.3),n.waterAt(E,y)-.3)?M=S:v=S}d={x:h.x+u.x*M,z:h.z+u.z*M};break}f=p}d&&(l.navigate(d.x,d.z,.6),this.ringAt(d.x,d.z),this.audio.click())}ringAt(t,e){let n=this.world;this.ring.position.set(t,Math.max(n.groundAt(t,e),n.waterAt(t,e))+.14,e),this.ring.visible=!0}frame(t){requestAnimationFrame(R=>this.frame(R)),this.kiosk(t);let e=(t-this.last)/1e3,n=Math.min(.05,Math.max(.001,e));if(this.last=t,this.time+=n,this.mode==="play"&&this.autoQuality&&e<.5&&(this.ema=nt(this.ema,e,.05),this.qT+=e,this.qT>3&&this.ema>.036&&this.quality<3)){this.qT=0,this.quality++;let R=this.world.sun;this.quality===1?(this.renderer.setPixelRatio(1),this.resize()):this.quality===2?(R.shadow.mapSize.set(1024,1024),R.shadow.map&&(R.shadow.map.dispose(),R.shadow.map=null)):R.castShadow=!1}let i=this.keys,s=this.cam,a=this.capi,o=this.grid,c=this.world,l=this.mode==="play",h=(i.KeyD||i.ArrowRight?1:0)-(i.KeyA||i.ArrowLeft?1:0),u=(i.KeyW||i.ArrowUp?1:0)-(i.KeyS||i.ArrowDown?1:0);l&&!this.locked&&(i.KeyQ&&!i.ShiftLeft&&!i.ShiftRight&&(s.yawT+=1.9*n),i.KeyE&&!this.eUsed&&!i.ShiftLeft&&!i.ShiftRight&&(s.yawT-=1.9*n)),(h||u)&&(s.inspect=null,this.face=null);let f={mx:this.locked?0:h,mz:this.locked?0:u,yaw:s.yaw,jump:this.jump&&!this.locked,locked:this.locked,working:!!this.mg.active,talking:this.cine&&this.ui.talking==="capi",face:this.cine?0:this.mg.active||this.ui.dlg||a.busy>0?this.face:null};if(this.jump=!1,this.attractStep(n,Math.min(e,1)),l?a.update(n,f):a.update(n,{mx:0,mz:0,yaw:0,jump:!1,locked:!this.attract}),o.step(n),l&&this.missions.update(n),this.mg.update(n),this.cand=null,l&&!this.locked){let R=1e9;for(let y of c.interList){if(y.state==="locked")continue;let b=Math.hypot(y.x-a.pos.x,y.z-a.pos.z);b<y.r&&b<R&&Math.abs(y.y-a.pos.y)<4.5&&(R=b,this.cand=y)}}this.ui.prompt(this.cand?this.cand.label:null),this.ring.visible=this.ring.visible&&!!a.goto,this.ring.visible&&this.ring.scale.setScalar(1+.25*Math.sin(this.time*9)),l||(s.yawT+=n*.06),s.inspectT-=n,s.inspectT<=0&&(s.inspect=null),this.cine&&(s.yawT=this.cineYaw+Math.sin(this.time*.22)*.24),s.cineK=Bt(s.cineK||0,this.cine?1:0,2.2,n),s.yaw=Bt(s.yaw,s.yawT,this.cine?2:9,n),s.dist=Bt(s.dist,this.cine?7.4:s.inspect?95:s.distT,this.cine?2.2:4,n);let d=this.cine?new D(a.pos.x,a.pos.y+1.95,a.pos.z):s.inspect?s.inspect:l?new D(a.pos.x+a.vel.x*.4,a.pos.y+1.5,a.pos.z+a.vel.z*.4):s.target;s.target.x=Bt(s.target.x,d.x,s.inspect?2.5:6,n),s.target.y=Bt(s.target.y,d.y,4,n),s.target.z=Bt(s.target.z,d.z,s.inspect?2.5:6,n);let p=ot((s.dist-20)/175,0,1),x=(40+5*p)*Math.PI/180,g=l&&!s.inspect&&!this.cine&&c.occluded(a.pos.x+Math.sin(s.yaw)*Math.cos(x)*s.dist,a.pos.y+1.5+Math.sin(x)*s.dist,a.pos.z+Math.cos(s.yaw)*Math.cos(x)*s.dist,a.pos.x,a.pos.y+1.6,a.pos.z);s.cut=Bt(s.cut||0,g?1:0,g?7:3,n),c.setCutaway(s.cut,a.pos,s.yaw),s.lowK=Bt(s.lowK||0,this.attract&&s.low||0,3,n);let m=nt(nt(x,.16,s.lowK),-.09,s.cineK);this.camera.position.set(s.target.x+Math.sin(s.yaw)*Math.cos(m)*s.dist,s.target.y+Math.sin(m)*s.dist,s.target.z+Math.cos(s.yaw)*Math.cos(m)*s.dist),this.camera.lookAt(s.target);let _=o.night(),v=o.out.pct,M=c.interList.filter(R=>R.state==="need"),w={grid:o,hour:o.hour,night:_,focus:s.target,cam:this.camera.position,barrios:l?[v>=33,v>=63,v>=88]:[!0,!0,!0],demo:!l,fx:this.fx,zoom:s.dist,cine:!!this.cine,capi:a.pos,talking:this.ui.talking,needs:M,busesOn:o.buses,audio:this.audio};c.update(n,w),this.actors.update(n,w),a.setLed(v/100,v>=100),a.lamp.material.emissiveIntensity=.5+_*3,this.cine?(this.capiLight.position.set(a.pos.x,a.pos.y+2.7,a.pos.z+2.6),this.capiLight.intensity=_*120):(this.capiLight.position.set(a.pos.x,a.pos.y+3.2,a.pos.z),this.capiLight.intensity=_*60);for(let R of M)Math.random()<5*n&&this.fx.sparks(R.x+(Math.random()-.5),R.y+1.6,R.z+(Math.random()-.5),3,16756768);this.extras.update(n,{fx:this.fx,play:l&&!this.cine}),this.vida.update(n,w),this.fx.update(n);let S=(R,y,b)=>ot(1-Math.hypot(a.pos.x-R,a.pos.z-y)/b,0,1);this.audio.update(n,{pct:v,wind:o.wind,windNear:Math.max(.12,S(70,-12,75)),waterNear:Math.max(S(-11,-49,45),a.swimming?.45:0),humNear:Math.max(S(st.substation[0],st.substation[1],14),S(st.windTx[0],st.windTx[1],14),S(st.bioSub[0],st.bioSub[1],14),S(st.batYard[0],st.batYard[1],16)),deficit:l&&o.freq<49.5}),l&&this.ui.update(n,{capi:a.pos,heading:a.heading,yaw:s.yaw,inter:c.interList,panel:this.panel,capiTalk:this.ui.talking==="capi",colors:this.extras.colors(),buses:o.buses,sparks:this.extras.sparks.filter(R=>!this.extras.got.has(R.i))});let E=this.renderer;if(E.autoClear=!0,E.shadowMap.autoUpdate=!0,this.camera.layers.set(0),E.render(this.scene,this.camera),l&&!this.cine){E.autoClear=!1,E.shadowMap.autoUpdate=!1,this.camera.layers.set(1),this.scene.overrideMaterial=this.xray;let R=this.scene.background;this.scene.background=null,E.render(this.scene,this.camera),this.scene.background=R,this.scene.overrideMaterial=null,this.camera.layers.set(0)}}};function kx(){try{window.__game=new $l}catch(r){console.error(r),re("load").textContent="No se pudo iniciar el motor 3D: "+r.message}}var Hx=document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1500))]):Promise.resolve(),Gx=[...document.images].map(r=>r.decode?r.decode().catch(()=>{}):Promise.resolve());Promise.all([Hx,...Gx]).then(()=>setTimeout(kx,30));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
