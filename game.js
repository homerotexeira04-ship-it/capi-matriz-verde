(()=>{var yu=0,Gl=1,_u=2;var Mh=1,cl=2,Ni=3,rn=0,ti=1,Re=2;var tn=0,en=1,es=2,Vl=3,Wl=4,vu=5,yn=100,bu=101,Mu=102,Xl=103,ql=104,Su=200,Eu=201,wu=202,Tu=203,_o=204,vo=205,Au=206,Ru=207,Cu=208,Pu=209,Iu=210,Lu=211,Du=212,Uu=213,Nu=214,Bu=0,Ou=1,Fu=2,_r=3,zu=4,ku=5,hl=6,Hu=7,Sh=0,Gu=1,Vu=2,nn=0,Wu=1,Xu=2,qu=3,Yu=4,$u=5,Zu=6;var Eh=300,is=301,ns=302,bo=303,Mo=304,ea=306,an=1e3,yi=1001,So=1002,Oe=1003,Yl=1004;var Na=1005;var hi=1006,Ju=1007;var Rs=1008;var sn=1009,Ku=1010,ju=1011,ul=1012,wh=1013,ji=1014,Qi=1015,Cs=1016,Th=1017,Ah=1018,vn=1020,Qu=1021,_i=1023,td=1024,ed=1025,bn=1026,ss=1027,id=1028,Rh=1029,nd=1030,Ch=1031,Ph=1033,Ba=33776,Oa=33777,Fa=33778,za=33779,$l=35840,Zl=35841,Jl=35842,Kl=35843,Ih=36196,jl=37492,Ql=37496,tc=37808,ec=37809,ic=37810,nc=37811,sc=37812,rc=37813,ac=37814,oc=37815,lc=37816,cc=37817,hc=37818,uc=37819,dc=37820,fc=37821,ka=36492,pc=36494,mc=36495,sd=36283,gc=36284,xc=36285,yc=36286;var vr=2300,br=2301,Ha=2302,_c=2400,vc=2401,bc=2402;var Lh=3e3,Mn=3001,rd=3200,ad=3201,Dh=0,od=1,ui="",Ie="srgb",Oi="srgb-linear",dl="display-p3",ia="display-p3-linear",Mr="linear",me="srgb",Sr="rec709",Er="p3";var Dn=7680,na=7681;var Uh=517;var wr=519,ld=512,cd=513,hd=514,Nh=515,ud=516,dd=517,fd=518,pd=519,Mc=35044,us=35048;var Sc="300 es",Eo=1035,Bi=2e3,Tr=2001,on=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ga=Math.PI/180,wo=180/Math.PI;function zs(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[r&255]+Ge[r>>8&255]+Ge[r>>16&255]+Ge[r>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function Fe(r,t,e){return Math.max(t,Math.min(e,r))}function md(r,t){return(r%t+t)%t}function Va(r,t,e){return(1-e)*r+e*t}function Ec(r){return(r&r-1)===0&&r!==0}function To(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var pt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class r{constructor(t,e,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=n[0],g=n[3],m=n[6],y=n[1],_=n[4],v=n[7],T=n[2],S=n[5],E=n[8];return s[0]=a*x+o*y+l*T,s[3]=a*g+o*_+l*S,s[6]=a*m+o*v+l*E,s[1]=c*x+h*y+u*T,s[4]=c*g+h*_+u*S,s[7]=c*m+h*v+u*E,s[2]=d*x+f*y+p*T,s[5]=d*g+f*_+p*S,s[8]=d*m+f*v+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,p=e*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wa.makeScale(t,e)),this}rotate(t){return this.premultiply(Wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wa=new Kt;function Bh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ar(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gd(){let r=Ar("canvas");return r.style.display="block",r}var wc={};function Es(r){r in wc||(wc[r]=!0,console.warn(r))}var Tc=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ac=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[Oi]:{transfer:Mr,primaries:Sr,toReference:r=>r,fromReference:r=>r},[Ie]:{transfer:me,primaries:Sr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ia]:{transfer:Mr,primaries:Er,toReference:r=>r.applyMatrix3(Ac),fromReference:r=>r.applyMatrix3(Tc)},[dl]:{transfer:me,primaries:Er,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ac),fromReference:r=>r.applyMatrix3(Tc).convertLinearToSRGB()}},xd=new Set([Oi,ia]),le={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!xd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let i=Xs[t].toReference,n=Xs[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Xs[r].primaries},getTransfer:function(r){return r===ui?Mr:Xs[r].transfer}};function Qn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Un,Rr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Un===void 0&&(Un=Ar("canvas")),Un.width=t.width,Un.height=t.height;let i=Un.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Un}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ar("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Qn(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qn(e[i]/255)*255):e[i]=Qn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yd=0,Cr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=zs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(qa(n[a].image)):s.push(qa(n[a]))}else s=qa(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function qa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rr.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _d=0,di=class r extends on{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=yi,n=yi,s=hi,a=Rs,o=_i,l=sn,c=r.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=zs(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Mn?Ie:ui),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case an:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case So:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case an:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case So:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ie?Mn:Lh}set encoding(t){Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Mn?Ie:ui}};di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=Eh;di.DEFAULT_ANISOTROPY=1;var ye=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(f+1)/2,T=(m+1)/2,S=(h+d)/4,E=(u+x)/4,P=(p+g)/4;return _>v&&_>T?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=S/i,s=E/i):v>T?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=S/n,s=P/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=E/s,n=P/s),this.set(i,n,s,e),this}let y=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ao=class extends on{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(Es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Mn?Ie:ui),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new di(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Cr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fi=class extends Ao{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Pr=class extends di{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ro=class extends di{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wi=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],p=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==p){let g=1-o,m=l*d+c*f+h*p+u*x,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let T=Math.sqrt(_),S=Math.atan2(T,m*y);g=Math.sin(g*S)/T,o=Math.sin(o*S)/T}let v=o*y;if(l=l*g+d*v,c=c*g+f*v,h=h*g+p*v,u=u*g+x*v,g===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ya.copy(this).projectOnVector(t),this.sub(Ya)}reflect(t){return this.sub(Ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ya=new C,Rc=new wi,zi=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,mi):mi.fromBufferAttribute(s,a),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qs.copy(i.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),Ys.subVectors(this.max,xs),Nn.subVectors(t.a,xs),Bn.subVectors(t.b,xs),On.subVectors(t.c,xs),Yi.subVectors(Bn,Nn),$i.subVectors(On,Bn),fn.subVectors(Nn,On);let e=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-fn.z,fn.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,fn.z,0,-fn.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-fn.y,fn.x,0];return!$a(e,Nn,Bn,On,Ys)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,Nn,Bn,On,Ys))?!1:($s.crossVectors(Yi,$i),e=[$s.x,$s.y,$s.z],$a(e,Nn,Bn,On,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Pi=[new C,new C,new C,new C,new C,new C,new C,new C],mi=new C,qs=new zi,Nn=new C,Bn=new C,On=new C,Yi=new C,$i=new C,fn=new C,xs=new C,Ys=new C,$s=new C,pn=new C;function $a(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){pn.fromArray(r,s);let o=n.x*Math.abs(pn.x)+n.y*Math.abs(pn.y)+n.z*Math.abs(pn.z),l=t.dot(pn),c=e.dot(pn),h=i.dot(pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var vd=new zi,ys=new C,Za=new C,ki=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):vd.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);let e=ys.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ys,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(Za)),this.expandByPoint(ys.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ii=new C,Ja=new C,Zs=new C,Zi=new C,Ka=new C,Js=new C,ja=new C,Ps=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ja.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(Ja);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Zs),o=Zi.dot(this.direction),l=-Zi.dot(Zs),c=Zi.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=s*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ja).addScaledVector(Zs,d),f}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);let i=Ii.dot(this.direction),n=Ii.dot(Ii)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,i,n,s){Ka.subVectors(e,t),Js.subVectors(i,t),ja.crossVectors(Ka,Js);let a=this.direction.dot(ja),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zi.subVectors(this.origin,t);let l=o*this.direction.dot(Js.crossVectors(Zi,Js));if(l<0)return null;let c=o*this.direction.dot(Ka.cross(Zi));if(c<0||l+c>a)return null;let h=-o*Zi.dot(ja);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class r{constructor(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,g)}set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/Fn.setFromMatrixColumn(t,0).length(),s=1/Fn.setFromMatrixColumn(t,1).length(),a=1/Fn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bd,t,Md)}lookAt(t,e,i){let n=this.elements;return ii.subVectors(t,e),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ji.crossVectors(i,ii),Ji.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ji.crossVectors(i,ii)),Ji.normalize(),Ks.crossVectors(ii,Ji),n[0]=Ji.x,n[4]=Ks.x,n[8]=ii.x,n[1]=Ji.y,n[5]=Ks.y,n[9]=ii.y,n[2]=Ji.z,n[6]=Ks.z,n[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],y=i[3],_=i[7],v=i[11],T=i[15],S=n[0],E=n[4],P=n[8],b=n[12],M=n[1],I=n[5],U=n[9],Y=n[13],L=n[2],N=n[6],k=n[10],q=n[14],X=n[3],W=n[7],J=n[11],et=n[15];return s[0]=a*S+o*M+l*L+c*X,s[4]=a*E+o*I+l*N+c*W,s[8]=a*P+o*U+l*k+c*J,s[12]=a*b+o*Y+l*q+c*et,s[1]=h*S+u*M+d*L+f*X,s[5]=h*E+u*I+d*N+f*W,s[9]=h*P+u*U+d*k+f*J,s[13]=h*b+u*Y+d*q+f*et,s[2]=p*S+x*M+g*L+m*X,s[6]=p*E+x*I+g*N+m*W,s[10]=p*P+x*U+g*k+m*J,s[14]=p*b+x*Y+g*q+m*et,s[3]=y*S+_*M+v*L+T*X,s[7]=y*E+_*I+v*N+T*W,s[11]=y*P+_*U+v*k+T*J,s[15]=y*b+_*Y+v*q+T*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+x*(+e*l*f-e*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+g*(+e*c*u-e*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+m*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],y=u*g*c-x*d*c+x*l*f-o*g*f-u*l*m+o*d*m,_=p*d*c-h*g*c-p*l*f+a*g*f+h*l*m-a*d*m,v=h*x*c-p*u*c+p*o*f-a*x*f-h*o*m+a*u*m,T=p*u*l-h*x*l-p*o*d+a*x*d+h*o*g-a*u*g,S=e*y+i*_+n*v+s*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return t[0]=y*E,t[1]=(x*d*s-u*g*s-x*n*f+i*g*f+u*n*m-i*d*m)*E,t[2]=(o*g*s-x*l*s+x*n*c-i*g*c-o*n*m+i*l*m)*E,t[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*E,t[4]=_*E,t[5]=(h*g*s-p*d*s+p*n*f-e*g*f-h*n*m+e*d*m)*E,t[6]=(p*l*s-a*g*s-p*n*c+e*g*c+a*n*m-e*l*m)*E,t[7]=(a*d*s-h*l*s+h*n*c-e*d*c-a*n*f+e*l*f)*E,t[8]=v*E,t[9]=(p*u*s-h*x*s-p*i*f+e*x*f+h*i*m-e*u*m)*E,t[10]=(a*x*s-p*o*s+p*i*c-e*x*c-a*i*m+e*o*m)*E,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*f-e*o*f)*E,t[12]=T*E,t[13]=(h*x*n-p*u*n+p*i*d-e*x*d-h*i*g+e*u*g)*E,t[14]=(p*o*n-a*x*n-p*i*l+e*x*l+a*i*g-e*o*g)*E,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*E,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,p=s*u,x=a*h,g=a*u,m=o*u,y=l*c,_=l*h,v=l*u,T=i.x,S=i.y,E=i.z;return n[0]=(1-(x+m))*T,n[1]=(f+v)*T,n[2]=(p-_)*T,n[3]=0,n[4]=(f-v)*S,n[5]=(1-(d+m))*S,n[6]=(g+y)*S,n[7]=0,n[8]=(p+_)*E,n[9]=(g-y)*E,n[10]=(1-(d+x))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=Fn.set(n[0],n[1],n[2]).length(),a=Fn.set(n[4],n[5],n[6]).length(),o=Fn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],gi.copy(this);let c=1/s,h=1/a,u=1/o;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=u,gi.elements[9]*=u,gi.elements[10]*=u,e.setFromRotationMatrix(gi),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=Bi){let l=this.elements,c=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,p;if(o===Bi)f=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===Tr)f=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Bi){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-s),d=(e+t)*c,f=(i+n)*h,p,x;if(o===Bi)p=(a+s)*u,x=-2*u;else if(o===Tr)p=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Fn=new C,gi=new ce,bd=new C(0,0,0),Md=new C(1,1,1),Ji=new C,Ks=new C,ii=new C,Cc=new ce,Pc=new wi,rs=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rs.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sd=0,Ic=new C,zn=new wi,Li=new ce,js=new C,_s=new C,Ed=new C,wd=new wi,Lc=new C(1,0,0),Dc=new C(0,1,0),Uc=new C(0,0,1),Td={type:"added"},Ad={type:"removed"},ze=class r extends on{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new C,e=new rs,i=new wi,n=new C(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ce},normalMatrix:{value:new Kt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.multiply(zn),this}rotateOnWorldAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.premultiply(zn),this}rotateX(t){return this.rotateOnAxis(Lc,t)}rotateY(t){return this.rotateOnAxis(Dc,t)}rotateZ(t){return this.rotateOnAxis(Uc,t)}translateOnAxis(t,e){return Ic.copy(t).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lc,t)}translateY(t){return this.translateOnAxis(Dc,t)}translateZ(t){return this.translateOnAxis(Uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?js.copy(t):js.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(_s,js,this.up):Li.lookAt(js,_s,this.up),this.quaternion.setFromRotationMatrix(Li),n&&(Li.extractRotation(n.matrixWorld),zn.setFromRotationMatrix(Li),this.quaternion.premultiply(zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Td)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ad)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};ze.DEFAULT_UP=new C(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new C,Di=new C,Qa=new C,Ui=new C,kn=new C,Hn=new C,Nc=new C,to=new C,eo=new C,io=new C,Qs=!1,Jn=class r{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),xi.subVectors(t,e),n.cross(xi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){xi.subVectors(n,e),Di.subVectors(i,e),Qa.subVectors(t,e);let a=xi.dot(xi),o=xi.dot(Di),l=xi.dot(Qa),c=Di.dot(Di),h=Di.dot(Qa),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getUV(t,e,i,n,s,a,o,l){return Qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qs=!0),this.getInterpolation(t,e,i,n,s,a,o,l)}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static isFrontFacing(t,e,i,n){return xi.subVectors(i,e),Di.subVectors(t,e),xi.cross(Di).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),xi.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return Qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qs=!0),r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;kn.subVectors(n,i),Hn.subVectors(s,i),to.subVectors(t,i);let l=kn.dot(to),c=Hn.dot(to);if(l<=0&&c<=0)return e.copy(i);eo.subVectors(t,n);let h=kn.dot(eo),u=Hn.dot(eo);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(kn,a);io.subVectors(t,s);let f=kn.dot(io),p=Hn.dot(io);if(p>=0&&f<=p)return e.copy(s);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(Hn,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Nc.subVectors(s,n),o=(u-h)/(u-h+(f-p)),e.copy(n).addScaledVector(Nc,o);let m=1/(g+x+d);return a=x*m,o=d*m,e.copy(i).addScaledVector(kn,a).addScaledVector(Hn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},tr={h:0,s:0,l:0};function no(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Et=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=le.workingColorSpace){if(t=md(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=no(a,s,t+1/3),this.g=no(a,s,t),this.b=no(a,s,t-1/3)}return le.toWorkingColorSpace(this,n),this}setStyle(t,e=Ie){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let i=Oh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=Xa(t.r),this.g=Xa(t.g),this.b=Xa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return le.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Fe(Ve.r*255,0,255))*65536+Math.round(Fe(Ve.g*255,0,255))*256+Math.round(Fe(Ve.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Ve.copy(this),e);let i=Ve.r,n=Ve.g,s=Ve.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ie){le.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,i=Ve.g,n=Ve.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(tr);let i=Va(Ki.h,tr.h,e),n=Va(Ki.s,tr.s,e),s=Va(Ki.l,tr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Et;Et.NAMES=Oh;var Rd=0,Hi=class extends on{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=en,this.side=rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=vo,this.blendEquation=yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dn,this.stencilZFail=Dn,this.stencilZPass=Dn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==en&&(i.blending=this.blending),this.side!==rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_o&&(i.blendSrc=this.blendSrc),this.blendDst!==vo&&(i.blendDst=this.blendDst),this.blendEquation!==yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},we=class extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new C,er=new pt,pe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),n=je(n,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mc&&(t.usage=this.usage),t}};var Lr=class extends pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Dr=class extends pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ut=class extends pe{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Cd=0,ci=new ce,so=new ze,Gn=new C,ni=new zi,vs=new zi,Be=new C,ne=class r extends on{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bh(t)?Dr:Lr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,e,i){return ci.makeTranslation(t,e,i),this.applyMatrix4(ci),this}scale(t,e,i){return ci.makeScale(t,e,i),this.applyMatrix4(ci),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gn).negate(),this.translate(Gn.x,Gn.y,Gn.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ut(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(ni.min,vs.min),ni.expandByPoint(Be),Be.addVectors(ni.max,vs.max),ni.expandByPoint(Be)):(ni.expandByPoint(vs.min),ni.expandByPoint(vs.max))}ni.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Be.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Be));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Be.fromBufferAttribute(o,c),l&&(Gn.fromBufferAttribute(t,c),Be.add(Gn)),n=Math.max(n,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<o;M++)c[M]=new C,h[M]=new C;let u=new C,d=new C,f=new C,p=new pt,x=new pt,g=new pt,m=new C,y=new C;function _(M,I,U){u.fromArray(n,M*3),d.fromArray(n,I*3),f.fromArray(n,U*3),p.fromArray(a,M*2),x.fromArray(a,I*2),g.fromArray(a,U*2),d.sub(u),f.sub(u),x.sub(p),g.sub(p);let Y=1/(x.x*g.y-g.x*x.y);isFinite(Y)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(f,-x.y).multiplyScalar(Y),y.copy(f).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(Y),c[M].add(m),c[I].add(m),c[U].add(m),h[M].add(y),h[I].add(y),h[U].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let M=0,I=v.length;M<I;++M){let U=v[M],Y=U.start,L=U.count;for(let N=Y,k=Y+L;N<k;N+=3)_(i[N+0],i[N+1],i[N+2])}let T=new C,S=new C,E=new C,P=new C;function b(M){E.fromArray(s,M*3),P.copy(E);let I=c[M];T.copy(I),T.sub(E.multiplyScalar(E.dot(I))).normalize(),S.crossVectors(P,I);let Y=S.dot(h[M])<0?-1:1;l[M*4]=T.x,l[M*4+1]=T.y,l[M*4+2]=T.z,l[M*4+3]=Y}for(let M=0,I=v.length;M<I;++M){let U=v[M],Y=U.start,L=U.count;for(let N=Y,k=Y+L;N<k;N+=3)b(i[N+0]),b(i[N+1]),b(i[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bc=new ce,mn=new Ps,ir=new ki,Oc=new C,Vn=new C,Wn=new C,Xn=new C,ro=new C,nr=new C,sr=new pt,rr=new pt,ar=new pt,Fc=new C,zc=new C,kc=new C,or=new C,lr=new C,yt=class extends ze{constructor(t=new ne,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){nr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(ro.fromBufferAttribute(u,t),a?nr.addScaledVector(ro,h):nr.addScaledVector(ro.sub(e),h))}e.add(nr)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ir.copy(i.boundingSphere),ir.applyMatrix4(s),mn.copy(t.ray).recast(t.near),!(ir.containsPoint(mn.origin)===!1&&(mn.intersectSphere(ir,Oc)===null||mn.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(Bc.copy(s).invert(),mn.copy(t.ray).applyMatrix4(Bc),!(i.boundingBox!==null&&mn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,mn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,T=_;v<T;v+=3){let S=o.getX(v),E=o.getX(v+1),P=o.getX(v+2);n=cr(this,m,t,i,c,h,u,S,E,P),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=o.getX(g),_=o.getX(g+1),v=o.getX(g+2);n=cr(this,a,t,i,c,h,u,y,_,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,T=_;v<T;v+=3){let S=v,E=v+1,P=v+2;n=cr(this,m,t,i,c,h,u,S,E,P),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=g,_=g+1,v=g+2;n=cr(this,a,t,i,c,h,u,y,_,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function Pd(r,t,e,i,n,s,a,o){let l;if(t.side===ti?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===rn,o),l===null)return null;lr.copy(o),lr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(lr);return c<e.near||c>e.far?null:{distance:c,point:lr.clone(),object:r}}function cr(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Vn),r.getVertexPosition(l,Wn),r.getVertexPosition(c,Xn);let h=Pd(r,t,e,i,Vn,Wn,Xn,or);if(h){n&&(sr.fromBufferAttribute(n,o),rr.fromBufferAttribute(n,l),ar.fromBufferAttribute(n,c),h.uv=Jn.getInterpolation(or,Vn,Wn,Xn,sr,rr,ar,new pt)),s&&(sr.fromBufferAttribute(s,o),rr.fromBufferAttribute(s,l),ar.fromBufferAttribute(s,c),h.uv1=Jn.getInterpolation(or,Vn,Wn,Xn,sr,rr,ar,new pt),h.uv2=h.uv1),a&&(Fc.fromBufferAttribute(a,o),zc.fromBufferAttribute(a,l),kc.fromBufferAttribute(a,c),h.normal=Jn.getInterpolation(or,Vn,Wn,Xn,Fc,zc,kc,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};Jn.getNormal(Vn,Wn,Xn,u.normal),h.face=u}return h}var Qt=class r extends ne{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(u,2));function p(x,g,m,y,_,v,T,S,E,P,b){let M=v/E,I=T/P,U=v/2,Y=T/2,L=S/2,N=E+1,k=P+1,q=0,X=0,W=new C;for(let J=0;J<k;J++){let et=J*I-Y;for(let ft=0;ft<N;ft++){let V=ft*M-U;W[x]=V*y,W[g]=et*_,W[m]=L,c.push(W.x,W.y,W.z),W[x]=0,W[g]=0,W[m]=S>0?1:-1,h.push(W.x,W.y,W.z),u.push(ft/E),u.push(1-J/P),q+=1}}for(let J=0;J<P;J++)for(let et=0;et<E;et++){let ft=d+et+N*J,V=d+et+N*(J+1),Z=d+(et+1)+N*(J+1),ut=d+(et+1)+N*J;l.push(ft,V,ut),l.push(V,Z,ut),X+=6}o.addGroup(f,X,b),f+=X,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function as(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ze(r){let t={};for(let e=0;e<r.length;e++){let i=as(r[e]);for(let n in i)t[n]=i[n]}return t}function Id(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Fh(r){return r.getRenderTarget()===null?r.outputColorSpace:le.workingColorSpace}var fl={clone:as,merge:Ze},Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,si=class extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ur=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},We=class extends Ur{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ga*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qn=-90,Yn=1,Co=class extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new We(qn,Yn,t,e);n.layers=this.layers,this.add(n);let s=new We(qn,Yn,t,e);s.layers=this.layers,this.add(s);let a=new We(qn,Yn,t,e);a.layers=this.layers,this.add(a);let o=new We(qn,Yn,t,e);o.layers=this.layers,this.add(o);let l=new We(qn,Yn,t,e);l.layers=this.layers,this.add(l);let c=new We(qn,Yn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Nr=class extends di{constructor(t,e,i,n,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Po=class extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(Es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Mn?Ie:ui),this.texture=new Nr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Qt(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:tn});s.uniforms.tEquirect.value=e;let a=new yt(n,s),o=e.minFilter;return e.minFilter===Rs&&(e.minFilter=hi),new Co(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},ao=new C,Ud=new C,Nd=new Kt,Qe=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=ao.subVectors(i,e).cross(Ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(ao),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Nd.getNormalMatrix(t),n=this.coplanarPoint(ao).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gn=new ki,hr=new C,Is=class{constructor(t=new Qe,e=new Qe,i=new Qe,n=new Qe,s=new Qe,a=new Qe){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bi){let i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],p=n[9],x=n[10],g=n[11],m=n[12],y=n[13],_=n[14],v=n[15];if(i[0].setComponents(l-s,d-c,g-f,v-m).normalize(),i[1].setComponents(l+s,d+c,g+f,v+m).normalize(),i[2].setComponents(l+a,d+h,g+p,v+y).normalize(),i[3].setComponents(l-a,d-h,g-p,v-y).normalize(),i[4].setComponents(l-o,d-u,g-x,v-_).normalize(),e===Bi)i[5].setComponents(l+o,d+u,g+x,v+_).normalize();else if(e===Tr)i[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gn)}intersectsSprite(t){return gn.center.set(0,0,0),gn.radius=.7071067811865476,gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(gn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(hr.x=n.normal.x>0?t.max.x:t.min.x,hr.y=n.normal.y>0?t.max.y:t.min.y,hr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zh(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Bd(r,t){let e=t.isWebGL2,i=new WeakMap;function n(c,h){let u=c.array,d=c.usage,f=u.byteLength,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=r.SHORT;else if(u instanceof Uint32Array)x=r.UNSIGNED_INT;else if(u instanceof Int32Array)x=r.INT;else if(u instanceof Int8Array)x=r.BYTE;else if(u instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,h,u){let d=h.array,f=h._updateRange,p=h.updateRanges;if(r.bindBuffer(u,c),f.count===-1&&p.length===0&&r.bufferSubData(u,0,d),p.length!==0){for(let x=0,g=p.length;x<g;x++){let m=p[x];e?r.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):r.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Ce=class r extends ne{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let y=m*d-a;for(let _=0;_<c;_++){let v=_*u-s;p.push(v,-y,0),x.push(0,0,1),g.push(_/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let _=y+c*m,v=y+c*(m+1),T=y+1+c*(m+1),S=y+1+c*m;f.push(_,v,S),f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new Ut(p,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fd=`#ifdef USE_ALPHAHASH
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
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
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
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Kd=`#ifdef USE_BUMPMAP
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,of=`#define PI 3.141592653589793
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
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cf=`vec3 transformedNormal = objectNormal;
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
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`
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
}`,gf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
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
}`,Tf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pf=`uniform bool receiveShadow;
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
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
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
#endif`,Of=`struct PhysicalMaterial {
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
}`,Ff=`
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
#endif`,zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$f=`#if defined( USE_POINTS_UV )
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
#endif`,Zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jf=`#ifdef USE_MORPHNORMALS
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
#endif`,Qf=`#ifdef USE_MORPHTARGETS
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
#endif`,tp=`#ifdef USE_MORPHTARGETS
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
#endif`,ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
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
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mp=`float getShadowMask() {
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
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fp=`uniform sampler2D t2D;
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`#include <common>
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
}`,Wp=`#if DEPTH_PACKING == 3200
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
}`,Xp=`#define DISTANCE
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
}`,qp=`#define DISTANCE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Kp=`#include <common>
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
}`,jp=`uniform vec3 diffuse;
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
}`,Qp=`#define LAMBERT
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
}`,tm=`#define LAMBERT
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
}`,em=`#define MATCAP
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
}`,im=`#define MATCAP
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
}`,nm=`#define NORMAL
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
}`,sm=`#define NORMAL
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
}`,rm=`#define PHONG
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
}`,am=`#define PHONG
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
}`,om=`#define STANDARD
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
}`,lm=`#define STANDARD
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
}`,cm=`#define TOON
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
}`,hm=`#define TOON
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
}`,um=`uniform float size;
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
}`,dm=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,pm=`uniform vec3 color;
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
}`,mm=`uniform float rotation;
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
}`,gm=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Od,alphahash_pars_fragment:Fd,alphamap_fragment:zd,alphamap_pars_fragment:kd,alphatest_fragment:Hd,alphatest_pars_fragment:Gd,aomap_fragment:Vd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:qd,begin_vertex:Yd,beginnormal_vertex:$d,bsdfs:Zd,iridescence_fragment:Jd,bumpmap_pars_fragment:Kd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:tf,clipping_planes_vertex:ef,color_fragment:nf,color_pars_fragment:sf,color_pars_vertex:rf,color_vertex:af,common:of,cube_uv_reflection_fragment:lf,defaultnormal_vertex:cf,displacementmap_pars_vertex:hf,displacementmap_vertex:uf,emissivemap_fragment:df,emissivemap_pars_fragment:ff,colorspace_fragment:pf,colorspace_pars_fragment:mf,envmap_fragment:gf,envmap_common_pars_fragment:xf,envmap_pars_fragment:yf,envmap_pars_vertex:_f,envmap_physical_pars_fragment:If,envmap_vertex:vf,fog_vertex:bf,fog_pars_vertex:Mf,fog_fragment:Sf,fog_pars_fragment:Ef,gradientmap_pars_fragment:wf,lightmap_fragment:Tf,lightmap_pars_fragment:Af,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Cf,lights_pars_begin:Pf,lights_toon_fragment:Lf,lights_toon_pars_fragment:Df,lights_phong_fragment:Uf,lights_phong_pars_fragment:Nf,lights_physical_fragment:Bf,lights_physical_pars_fragment:Of,lights_fragment_begin:Ff,lights_fragment_maps:zf,lights_fragment_end:kf,logdepthbuf_fragment:Hf,logdepthbuf_pars_fragment:Gf,logdepthbuf_pars_vertex:Vf,logdepthbuf_vertex:Wf,map_fragment:Xf,map_pars_fragment:qf,map_particle_fragment:Yf,map_particle_pars_fragment:$f,metalnessmap_fragment:Zf,metalnessmap_pars_fragment:Jf,morphcolor_vertex:Kf,morphnormal_vertex:jf,morphtarget_pars_vertex:Qf,morphtarget_vertex:tp,normal_fragment_begin:ep,normal_fragment_maps:ip,normal_pars_fragment:np,normal_pars_vertex:sp,normal_vertex:rp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:hp,opaque_fragment:up,packing:dp,premultiplied_alpha_fragment:fp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:xp,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:vp,shadowmap_vertex:bp,shadowmask_pars_fragment:Mp,skinbase_vertex:Sp,skinning_pars_vertex:Ep,skinning_vertex:wp,skinnormal_vertex:Tp,specularmap_fragment:Ap,specularmap_pars_fragment:Rp,tonemapping_fragment:Cp,tonemapping_pars_fragment:Pp,transmission_fragment:Ip,transmission_pars_fragment:Lp,uv_pars_fragment:Dp,uv_pars_vertex:Up,uv_vertex:Np,worldpos_vertex:Bp,background_vert:Op,background_frag:Fp,backgroundCube_vert:zp,backgroundCube_frag:kp,cube_vert:Hp,cube_frag:Gp,depth_vert:Vp,depth_frag:Wp,distanceRGBA_vert:Xp,distanceRGBA_frag:qp,equirect_vert:Yp,equirect_frag:$p,linedashed_vert:Zp,linedashed_frag:Jp,meshbasic_vert:Kp,meshbasic_frag:jp,meshlambert_vert:Qp,meshlambert_frag:tm,meshmatcap_vert:em,meshmatcap_frag:im,meshnormal_vert:nm,meshnormal_frag:sm,meshphong_vert:rm,meshphong_frag:am,meshphysical_vert:om,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:hm,points_vert:um,points_frag:dm,shadow_vert:fm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},nt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Ei={basic:{uniforms:Ze([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ze([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ze([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ze([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ze([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ze([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ze([nt.points,nt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ze([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ze([nt.common,nt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ze([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ze([nt.sprite,nt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ze([nt.common,nt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ze([nt.lights,nt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Ei.physical={uniforms:Ze([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var ur={r:0,b:0,g:0};function xm(r,t,e,i,n,s,a){let o=new Et(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function p(g,m){let y=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?x(o,l):_&&_.isColor&&(x(_,1),y=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ea)?(h===void 0&&(h=new yt(new Qt(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:as(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=le.getTransfer(_.colorSpace)!==me,(u!==_||d!==_.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new yt(new Ce(2,2),new si({name:"BackgroundMaterial",uniforms:as(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=le.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,m){g.getRGB(ur,Fh(r)),i.buffers.color.setClear(ur.r,ur.g,ur.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(o,l)},render:p}}function ym(r,t,e,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=g(null),c=l,h=!1;function u(L,N,k,q,X){let W=!1;if(a){let J=x(q,k,N);c!==J&&(c=J,f(c.object)),W=m(L,q,k,X),W&&y(L,q,k,X)}else{let J=N.wireframe===!0;(c.geometry!==q.id||c.program!==k.id||c.wireframe!==J)&&(c.geometry=q.id,c.program=k.id,c.wireframe=J,W=!0)}X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,P(L,N,k,q),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(L){return i.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function p(L){return i.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function x(L,N,k){let q=k.wireframe===!0,X=o[L.id];X===void 0&&(X={},o[L.id]=X);let W=X[N.id];W===void 0&&(W={},X[N.id]=W);let J=W[q];return J===void 0&&(J=g(d()),W[q]=J),J}function g(L){let N=[],k=[],q=[];for(let X=0;X<n;X++)N[X]=0,k[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:q,object:L,attributes:{},index:null}}function m(L,N,k,q){let X=c.attributes,W=N.attributes,J=0,et=k.getAttributes();for(let ft in et)if(et[ft].location>=0){let Z=X[ft],ut=W[ft];if(ut===void 0&&(ft==="instanceMatrix"&&L.instanceMatrix&&(ut=L.instanceMatrix),ft==="instanceColor"&&L.instanceColor&&(ut=L.instanceColor)),Z===void 0||Z.attribute!==ut||ut&&Z.data!==ut.data)return!0;J++}return c.attributesNum!==J||c.index!==q}function y(L,N,k,q){let X={},W=N.attributes,J=0,et=k.getAttributes();for(let ft in et)if(et[ft].location>=0){let Z=W[ft];Z===void 0&&(ft==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),ft==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));let ut={};ut.attribute=Z,Z&&Z.data&&(ut.data=Z.data),X[ft]=ut,J++}c.attributes=X,c.attributesNum=J,c.index=q}function _(){let L=c.newAttributes;for(let N=0,k=L.length;N<k;N++)L[N]=0}function v(L){T(L,0)}function T(L,N){let k=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;k[L]=1,q[L]===0&&(r.enableVertexAttribArray(L),q[L]=1),X[L]!==N&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),X[L]=N)}function S(){let L=c.newAttributes,N=c.enabledAttributes;for(let k=0,q=N.length;k<q;k++)N[k]!==L[k]&&(r.disableVertexAttribArray(k),N[k]=0)}function E(L,N,k,q,X,W,J){J===!0?r.vertexAttribIPointer(L,N,k,X,W):r.vertexAttribPointer(L,N,k,q,X,W)}function P(L,N,k,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let X=q.attributes,W=k.getAttributes(),J=N.defaultAttributeValues;for(let et in W){let ft=W[et];if(ft.location>=0){let V=X[et];if(V===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let Z=V.normalized,ut=V.itemSize,St=e.get(V);if(St===void 0)continue;let Mt=St.buffer,kt=St.type,Vt=St.bytesPerElement,It=i.isWebGL2===!0&&(kt===r.INT||kt===r.UNSIGNED_INT||V.gpuType===wh);if(V.isInterleavedBufferAttribute){let ee=V.data,O=ee.stride,qe=V.offset;if(ee.isInstancedInterleavedBuffer){for(let At=0;At<ft.locationSize;At++)T(ft.location+At,ee.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let At=0;At<ft.locationSize;At++)v(ft.location+At);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let At=0;At<ft.locationSize;At++)E(ft.location+At,ut/ft.locationSize,kt,Z,O*Vt,(qe+ut/ft.locationSize*At)*Vt,It)}else{if(V.isInstancedBufferAttribute){for(let ee=0;ee<ft.locationSize;ee++)T(ft.location+ee,V.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ee=0;ee<ft.locationSize;ee++)v(ft.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let ee=0;ee<ft.locationSize;ee++)E(ft.location+ee,ut/ft.locationSize,kt,Z,ut*Vt,ut/ft.locationSize*ee*Vt,It)}}else if(J!==void 0){let Z=J[et];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(ft.location,Z);break;case 3:r.vertexAttrib3fv(ft.location,Z);break;case 4:r.vertexAttrib4fv(ft.location,Z);break;default:r.vertexAttrib1fv(ft.location,Z)}}}}S()}function b(){U();for(let L in o){let N=o[L];for(let k in N){let q=N[k];for(let X in q)p(q[X].object),delete q[X];delete N[k]}delete o[L]}}function M(L){if(o[L.id]===void 0)return;let N=o[L.id];for(let k in N){let q=N[k];for(let X in q)p(q[X].object),delete q[X];delete N[k]}delete o[L.id]}function I(L){for(let N in o){let k=o[N];if(k[L.id]===void 0)continue;let q=k[L.id];for(let X in q)p(q[X].object),delete q[X];delete k[L.id]}}function U(){Y(),h=!0,c!==l&&(c=l,f(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:U,resetDefaultState:Y,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:v,disableUnusedAttributes:S}}function _m(r,t,e,i){let n=i.isWebGL2,s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,d){if(d===0)return;let f,p;if(n)f=r,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,h,u,d),e.update(u,s,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(h[p],u[p]);else{f.multiDrawArraysWEBGL(s,h,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];e.update(p,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function vm(r,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,v=a||t.has("OES_texture_float"),T=_&&v,S=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:T,maxSamples:S}}function bm(r){let t=this,e=null,i=0,n=!1,s=!1,a=new Qe,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!n||p===null||p.length===0||s&&!g)s?h(null):c();else{let y=s?0:i,_=y*4,v=m.clippingState||null;l.value=v,v=h(p,d,_,f);for(let T=0;T!==_;++T)v[T]=e[T];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=f;_!==x;++_,v+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Mm(r){let t=new WeakMap;function e(a,o){return o===bo?a.mapping=is:o===Mo&&(a.mapping=ns),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===bo||o===Mo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Po(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Br=class extends Ur{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Kn=4,Hc=[.125,.215,.35,.446,.526,.582],_n=20,oo=new Br,Gc=new Et,lo=null,co=0,ho=0,xn=(1+Math.sqrt(5))/2,$n=1/xn,Vc=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,xn,$n),new C(0,xn,-$n),new C($n,0,xn),new C(-$n,0,xn),new C(xn,$n,0),new C(-xn,$n,0)],Or=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lo,co,ho),t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Cs,format:_i,colorSpace:Oi,depthBuffer:!1},n=Wc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sm(s)),this._blurMaterial=Em(s,t,e)}return n}_compileMaterial(t){let e=new yt(this._lodPlanes[0],t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,i,n){let o=new We(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gc),h.toneMapping=nn,h.autoClear=!1;let f=new we({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),p=new yt(new Qt,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Gc),x=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let _=this._cubeSize;dr(n,y*_,m>2?_:0,_,_),h.setRenderTarget(n),x&&h.render(p,o),h.render(t,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===is||t.mapping===ns;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new yt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;dr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,oo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Vc[(n-1)%Vc.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new yt(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*_n-1),x=s/p,g=isFinite(s)?1+Math.floor(h*x):_n;g>_n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${_n}`);let m=[],y=0;for(let E=0;E<_n;++E){let P=E/x,b=Math.exp(-P*P/2);m.push(b),E===0?y+=b:E<g&&(y+=2*b)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-i;let v=this._sizeLods[n],T=3*v*(n>_-Kn?n-_+Kn:0),S=4*(this._cubeSize-v);dr(e,T,S,3*v,2*v),l.setRenderTarget(e),l.render(u,oo)}};function Sm(r){let t=[],e=[],i=[],n=r,s=r-Kn+1+Hc.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>r-Kn?l=Hc[a-r+Kn-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,y=new Float32Array(x*p*f),_=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let S=0;S<f;S++){let E=S%3*2/3-1,P=S>2?0:-1,b=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];y.set(b,x*p*S),_.set(d,g*p*S);let M=[S,S,S,S,S,S];v.set(M,m*p*S)}let T=new ne;T.setAttribute("position",new pe(y,x)),T.setAttribute("uv",new pe(_,g)),T.setAttribute("faceIndex",new pe(v,m)),t.push(T),n>Kn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Wc(r,t,e){let i=new Fi(r,t,e);return i.texture.mapping=ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dr(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Em(r,t,e){let i=new Float32Array(_n),n=new C(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:_n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:pl(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Xc(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function qc(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function pl(){return`

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
	`}function wm(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===bo||l===Mo,h=l===is||l===ns;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Or(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new Or(r));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Tm(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Am(r,t,e,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let x=d.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let x=f[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,v=y.length;_<v;_+=3){let T=y[_+0],S=y[_+1],E=y[_+2];d.push(T,S,S,E,E,T)}}else if(p!==void 0){let y=p.array;x=p.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let T=_+0,S=_+1,E=_+2;d.push(T,S,S,E,E,T)}}else return;let g=new(Bh(d)?Dr:Lr)(d,1);g.version=x;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Rm(r,t,e,i){let n=i.isWebGL2,s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,p){r.drawElements(s,p,o,f*l),e.update(p,s,1)}function u(f,p,x){if(x===0)return;let g,m;if(n)g=r,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,o,f*l,x),e.update(p,s,x)}function d(f,p,x){if(x===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<x;m++)this.render(f[m]/l,p[m]);else{g.multiDrawElementsWEBGL(s,p,0,o,f,0,x);let m=0;for(let y=0;y<x;y++)m+=p[y];e.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Cm(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Pm(r,t){return r[0]-t[0]}function Im(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Lm(r,t,e){let i={},n=new Float32Array(8),s=new WeakMap,a=new ye,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=f!==void 0?f.length:0,x=s.get(h);if(x===void 0||x.count!==p){let L=function(){U.dispose(),s.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],P=0;y===!0&&(P=1),_===!0&&(P=2),v===!0&&(P=3);let b=h.attributes.position.count*P,M=1;b>t.maxTextureSize&&(M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let I=new Float32Array(b*M*4*p),U=new Pr(I,b,M,p);U.type=Qi,U.needsUpdate=!0;let Y=P*4;for(let N=0;N<p;N++){let k=T[N],q=S[N],X=E[N],W=b*M*4*N;for(let J=0;J<k.count;J++){let et=J*Y;y===!0&&(a.fromBufferAttribute(k,J),I[W+et+0]=a.x,I[W+et+1]=a.y,I[W+et+2]=a.z,I[W+et+3]=0),_===!0&&(a.fromBufferAttribute(q,J),I[W+et+4]=a.x,I[W+et+5]=a.y,I[W+et+6]=a.z,I[W+et+7]=0),v===!0&&(a.fromBufferAttribute(X,J),I[W+et+8]=a.x,I[W+et+9]=a.y,I[W+et+10]=a.z,I[W+et+11]=X.itemSize===4?a.w:1)}}x={count:p,texture:U,size:new pt(b,M)},s.set(h,x),h.addEventListener("dispose",L)}let g=0;for(let y=0;y<d.length;y++)g+=d[y];let m=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",m),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,p=i[h.id];if(p===void 0||p.length!==f){p=[];for(let _=0;_<f;_++)p[_]=[_,0];i[h.id]=p}for(let _=0;_<f;_++){let v=p[_];v[0]=_,v[1]=d[_]}p.sort(Im);for(let _=0;_<8;_++)_<f&&p[_][1]?(o[_][0]=p[_][0],o[_][1]=p[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Pm);let x=h.morphAttributes.position,g=h.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let v=o[_],T=v[0],S=v[1];T!==Number.MAX_SAFE_INTEGER&&S?(x&&h.getAttribute("morphTarget"+_)!==x[T]&&h.setAttribute("morphTarget"+_,x[T]),g&&h.getAttribute("morphNormal"+_)!==g[T]&&h.setAttribute("morphNormal"+_,g[T]),n[_]=S,m+=S):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),n[_]=0)}let y=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function Dm(r,t,e,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var Fr=class extends di{constructor(t,e,i,n,s,a,o,l,c,h){if(h=h!==void 0?h:bn,h!==bn&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===bn&&(i=ji),i===void 0&&h===ss&&(i=vn),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Oe,this.minFilter=l!==void 0?l:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},kh=new di,Hh=new Fr(1,1);Hh.compareFunction=Nh;var Gh=new Pr,Vh=new Ro,Wh=new Nr,Yc=[],$c=[],Zc=new Float32Array(16),Jc=new Float32Array(9),Kc=new Float32Array(4);function ds(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Yc[n];if(s===void 0&&(s=new Float32Array(n),Yc[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Le(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function De(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function sa(r,t){let e=$c[t];e===void 0&&(e=new Int32Array(t),$c[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Um(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Nm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2fv(this.addr,t),De(e,t)}}function Bm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;r.uniform3fv(this.addr,t),De(e,t)}}function Om(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4fv(this.addr,t),De(e,t)}}function Fm(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Kc.set(i),r.uniformMatrix2fv(this.addr,!1,Kc),De(e,i)}}function zm(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Jc.set(i),r.uniformMatrix3fv(this.addr,!1,Jc),De(e,i)}}function km(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Zc.set(i),r.uniformMatrix4fv(this.addr,!1,Zc),De(e,i)}}function Hm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Gm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2iv(this.addr,t),De(e,t)}}function Vm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;r.uniform3iv(this.addr,t),De(e,t)}}function Wm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4iv(this.addr,t),De(e,t)}}function Xm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function qm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2uiv(this.addr,t),De(e,t)}}function Ym(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;r.uniform3uiv(this.addr,t),De(e,t)}}function $m(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4uiv(this.addr,t),De(e,t)}}function Zm(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?Hh:kh;e.setTexture2D(t||s,n)}function Jm(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Vh,n)}function Km(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Wh,n)}function jm(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Gh,n)}function Qm(r){switch(r){case 5126:return Um;case 35664:return Nm;case 35665:return Bm;case 35666:return Om;case 35674:return Fm;case 35675:return zm;case 35676:return km;case 5124:case 35670:return Hm;case 35667:case 35671:return Gm;case 35668:case 35672:return Vm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return jm}}function t0(r,t){r.uniform1fv(this.addr,t)}function e0(r,t){let e=ds(t,this.size,2);r.uniform2fv(this.addr,e)}function i0(r,t){let e=ds(t,this.size,3);r.uniform3fv(this.addr,e)}function n0(r,t){let e=ds(t,this.size,4);r.uniform4fv(this.addr,e)}function s0(r,t){let e=ds(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function r0(r,t){let e=ds(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function a0(r,t){let e=ds(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function o0(r,t){r.uniform1iv(this.addr,t)}function l0(r,t){r.uniform2iv(this.addr,t)}function c0(r,t){r.uniform3iv(this.addr,t)}function h0(r,t){r.uniform4iv(this.addr,t)}function u0(r,t){r.uniform1uiv(this.addr,t)}function d0(r,t){r.uniform2uiv(this.addr,t)}function f0(r,t){r.uniform3uiv(this.addr,t)}function p0(r,t){r.uniform4uiv(this.addr,t)}function m0(r,t,e){let i=this.cache,n=t.length,s=sa(e,n);Le(i,s)||(r.uniform1iv(this.addr,s),De(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||kh,s[a])}function g0(r,t,e){let i=this.cache,n=t.length,s=sa(e,n);Le(i,s)||(r.uniform1iv(this.addr,s),De(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Vh,s[a])}function x0(r,t,e){let i=this.cache,n=t.length,s=sa(e,n);Le(i,s)||(r.uniform1iv(this.addr,s),De(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Wh,s[a])}function y0(r,t,e){let i=this.cache,n=t.length,s=sa(e,n);Le(i,s)||(r.uniform1iv(this.addr,s),De(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Gh,s[a])}function _0(r){switch(r){case 5126:return t0;case 35664:return e0;case 35665:return i0;case 35666:return n0;case 35674:return s0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return y0}}var Io=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Qm(e.type)}},Lo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_0(e.type)}},Do=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},uo=/(\w+)(\])?(\[|\.)?/g;function jc(r,t){r.seq.push(t),r.map[t.id]=t}function v0(r,t,e){let i=r.name,n=i.length;for(uo.lastIndex=0;;){let s=uo.exec(i),a=uo.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){jc(e,c===void 0?new Io(o,r,t):new Lo(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Do(o),jc(e,u)),e=u}}}var ts=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);v0(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Qc(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var b0=37297,M0=0;function S0(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function E0(r){let t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(r),i;switch(t===e?i="":t===Er&&e===Sr?i="LinearDisplayP3ToLinearSRGB":t===Sr&&e===Er&&(i="LinearSRGBToLinearDisplayP3"),r){case Oi:case ia:return[i,"LinearTransferOETF"];case Ie:case dl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function th(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+S0(r.getShaderSource(t),a)}else return n}function w0(r,t){let e=E0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function T0(r,t){let e;switch(t){case Wu:e="Linear";break;case Xu:e="Reinhard";break;case qu:e="OptimizedCineon";break;case Yu:e="ACESFilmic";break;case Zu:e="AgX";break;case $u:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function A0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(jn).join(`
`)}function R0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(jn).join(`
`)}function C0(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function P0(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function jn(r){return r!==""}function eh(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ih(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var I0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(r){return r.replace(I0,D0)}var L0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function D0(r,t){let e=Xt[t];if(e===void 0){let i=L0.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Uo(e)}var U0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(r){return r.replace(U0,N0)}function N0(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function sh(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function B0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===cl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function O0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case is:case ns:t="ENVMAP_TYPE_CUBE";break;case ea:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F0(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===ns&&(t="ENVMAP_MODE_REFRACTION"),t}function z0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sh:t="ENVMAP_BLENDING_MULTIPLY";break;case Gu:t="ENVMAP_BLENDING_MIX";break;case Vu:t="ENVMAP_BLENDING_ADD";break}return t}function k0(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function H0(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=B0(e),c=O0(e),h=F0(e),u=z0(e),d=k0(e),f=e.isWebGL2?"":A0(e),p=R0(e),x=C0(s),g=n.createProgram(),m,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(jn).join(`
`),m.length>0&&(m+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(jn).join(`
`),y.length>0&&(y+=`
`)):(m=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jn).join(`
`),y=[f,sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nn?"#define TONE_MAPPING":"",e.toneMapping!==nn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==nn?T0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,w0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jn).join(`
`)),a=Uo(a),a=eh(a,e),a=ih(a,e),o=Uo(o),o=eh(o,e),o=ih(o,e),a=nh(a),o=nh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let v=_+m+a,T=_+y+o,S=Qc(n,n.VERTEX_SHADER,v),E=Qc(n,n.FRAGMENT_SHADER,T);n.attachShader(g,S),n.attachShader(g,E),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function P(U){if(r.debug.checkShaderErrors){let Y=n.getProgramInfoLog(g).trim(),L=n.getShaderInfoLog(S).trim(),N=n.getShaderInfoLog(E).trim(),k=!0,q=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,S,E);else{let X=th(n,S,"vertex"),W=th(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+X+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||N==="")&&(q=!1);q&&(U.diagnostics={runnable:k,programLog:Y,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:y}})}n.deleteShader(S),n.deleteShader(E),b=new ts(n,g),M=P0(n,g)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=n.getProgramParameter(g,b0)),I},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=E,this}var G0=0,No=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Bo(t),e.set(t,i)),i}},Bo=class{constructor(t){this.id=G0++,this.code=t,this.usedTimes=0}};function V0(r,t,e,i,n,s,a){let o=new Ir,l=new No,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function g(b,M,I,U,Y){let L=U.fog,N=Y.geometry,k=b.isMeshStandardMaterial?U.environment:null,q=(b.isMeshStandardMaterial?e:t).get(b.envMap||k),X=q&&q.mapping===ea?q.image.height:null,W=p[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,et=J!==void 0?J.length:0,ft=0;N.morphAttributes.position!==void 0&&(ft=1),N.morphAttributes.normal!==void 0&&(ft=2),N.morphAttributes.color!==void 0&&(ft=3);let V,Z,ut,St;if(W){let Ye=Ei[W];V=Ye.vertexShader,Z=Ye.fragmentShader}else V=b.vertexShader,Z=b.fragmentShader,l.update(b),ut=l.getVertexShaderID(b),St=l.getFragmentShaderID(b);let Mt=r.getRenderTarget(),kt=Y.isInstancedMesh===!0,Vt=Y.isBatchedMesh===!0,It=!!b.map,ee=!!b.matcap,O=!!q,qe=!!b.aoMap,At=!!b.lightMap,Ot=!!b.bumpMap,_t=!!b.normalMap,_e=!!b.displacementMap,qt=!!b.emissiveMap,R=!!b.metalnessMap,w=!!b.roughnessMap,z=b.anisotropy>0,Q=b.clearcoat>0,j=b.iridescence>0,tt=b.sheen>0,vt=b.transmission>0,lt=z&&!!b.anisotropyMap,gt=Q&&!!b.clearcoatMap,Pt=Q&&!!b.clearcoatNormalMap,Yt=Q&&!!b.clearcoatRoughnessMap,K=j&&!!b.iridescenceMap,oe=j&&!!b.iridescenceThicknessMap,jt=tt&&!!b.sheenColorMap,Bt=tt&&!!b.sheenRoughnessMap,Tt=!!b.specularMap,xt=!!b.specularColorMap,Wt=!!b.specularIntensityMap,re=vt&&!!b.transmissionMap,be=vt&&!!b.thicknessMap,Zt=!!b.gradientMap,st=!!b.alphaMap,D=b.alphaTest>0,at=!!b.alphaHash,ot=!!b.extensions,Lt=!!N.attributes.uv1,Rt=!!N.attributes.uv2,ue=!!N.attributes.uv3,de=nn;return b.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(de=r.toneMapping),{isWebGL2:h,shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:V,fragmentShader:Z,defines:b.defines,customVertexShaderID:ut,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Vt,instancing:kt,instancingColor:kt&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Oi,map:It,matcap:ee,envMap:O,envMapMode:O&&q.mapping,envMapCubeUVHeight:X,aoMap:qe,lightMap:At,bumpMap:Ot,normalMap:_t,displacementMap:d&&_e,emissiveMap:qt,normalMapObjectSpace:_t&&b.normalMapType===od,normalMapTangentSpace:_t&&b.normalMapType===Dh,metalnessMap:R,roughnessMap:w,anisotropy:z,anisotropyMap:lt,clearcoat:Q,clearcoatMap:gt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Yt,iridescence:j,iridescenceMap:K,iridescenceThicknessMap:oe,sheen:tt,sheenColorMap:jt,sheenRoughnessMap:Bt,specularMap:Tt,specularColorMap:xt,specularIntensityMap:Wt,transmission:vt,transmissionMap:re,thicknessMap:be,gradientMap:Zt,opaque:b.transparent===!1&&b.blending===en,alphaMap:st,alphaTest:D,alphaHash:at,combine:b.combine,mapUv:It&&x(b.map.channel),aoMapUv:qe&&x(b.aoMap.channel),lightMapUv:At&&x(b.lightMap.channel),bumpMapUv:Ot&&x(b.bumpMap.channel),normalMapUv:_t&&x(b.normalMap.channel),displacementMapUv:_e&&x(b.displacementMap.channel),emissiveMapUv:qt&&x(b.emissiveMap.channel),metalnessMapUv:R&&x(b.metalnessMap.channel),roughnessMapUv:w&&x(b.roughnessMap.channel),anisotropyMapUv:lt&&x(b.anisotropyMap.channel),clearcoatMapUv:gt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&x(b.sheenRoughnessMap.channel),specularMapUv:Tt&&x(b.specularMap.channel),specularColorMapUv:xt&&x(b.specularColorMap.channel),specularIntensityMapUv:Wt&&x(b.specularIntensityMap.channel),transmissionMapUv:re&&x(b.transmissionMap.channel),thicknessMapUv:be&&x(b.thicknessMap.channel),alphaMapUv:st&&x(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(_t||z),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:Rt,vertexUv3s:ue,pointsUvs:Y.isPoints===!0&&!!N.attributes.uv&&(It||st),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:de,useLegacyLights:r._useLegacyLights,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&le.getTransfer(b.map.colorSpace)===me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Re,flipSided:b.side===ti,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ot&&b.extensions.derivatives===!0,extensionFragDepth:ot&&b.extensions.fragDepth===!0,extensionDrawBuffers:ot&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ot&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(y(M,b),_(M,b),M.push(r.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function v(b){let M=p[b.type],I;if(M){let U=Ei[M];I=fl.clone(U.uniforms)}else I=b.uniforms;return I}function T(b,M){let I;for(let U=0,Y=c.length;U<Y;U++){let L=c[U];if(L.cacheKey===M){I=L,++I.usedTimes;break}}return I===void 0&&(I=new H0(r,M,b,s),c.push(I)),I}function S(b){if(--b.usedTimes===0){let M=c.indexOf(b);c[M]=c[c.length-1],c.pop(),b.destroy()}}function E(b){l.remove(b)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:T,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:P}}function W0(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function X0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function rh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ah(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,p,x,g){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function o(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||X0),i.length>1&&i.sort(d||rh),n.length>1&&n.sort(d||rh)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function q0(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new ah,r.set(i,[a])):n>=s.length?(a=new ah,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Y0(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Et};break;case"SpotLight":e={position:new C,direction:new C,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new C,halfWidth:new C,halfHeight:new C};break}return r[t.id]=e,e}}}function $0(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Z0=0;function J0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function K0(r,t){let e=new Y0,i=$0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new C);let s=new C,a=new ce,o=new ce;function l(h,u){let d=0,f=0,p=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let x=0,g=0,m=0,y=0,_=0,v=0,T=0,S=0,E=0,P=0,b=0;h.sort(J0);let M=u===!0?Math.PI:1;for(let U=0,Y=h.length;U<Y;U++){let L=h[U],N=L.color,k=L.intensity,q=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=N.r*k*M,f+=N.g*k*M,p+=N.b*k*M;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],k);b++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){let J=L.shadow,et=i.get(L);et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.directionalShadow[x]=et,n.directionalShadowMap[x]=X,n.directionalShadowMatrix[x]=L.shadow.matrix,v++}n.directional[x]=W,x++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(N).multiplyScalar(k*M),W.distance=q,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[m]=W;let J=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,J.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[m]=J.matrix,L.castShadow){let et=i.get(L);et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.spotShadow[m]=et,n.spotShadowMap[m]=X,S++}m++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(N).multiplyScalar(k),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[y]=W,y++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*M),W.distance=L.distance,W.decay=L.decay,L.castShadow){let J=L.shadow,et=i.get(L);et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,et.shadowCameraNear=J.camera.near,et.shadowCameraFar=J.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=W,g++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(k*M),W.groundColor.copy(L.groundColor).multiplyScalar(k*M),n.hemi[_]=W,_++}}y>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=p;let I=n.hash;(I.directionalLength!==x||I.pointLength!==g||I.spotLength!==m||I.rectAreaLength!==y||I.hemiLength!==_||I.numDirectionalShadows!==v||I.numPointShadows!==T||I.numSpotShadows!==S||I.numSpotMaps!==E||I.numLightProbes!==b)&&(n.directional.length=x,n.spot.length=m,n.rectArea.length=y,n.point.length=g,n.hemi.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+E-P,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=b,I.directionalLength=x,I.pointLength=g,I.spotLength=m,I.rectAreaLength=y,I.hemiLength=_,I.numDirectionalShadows=v,I.numPointShadows=T,I.numSpotShadows=S,I.numSpotMaps=E,I.numLightProbes=b,n.version=Z0++)}function c(h,u){let d=0,f=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let v=h[y];if(v.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(v.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),o.identity(),a.copy(v.matrixWorld),a.premultiply(m),o.extractRotation(a),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let T=n.hemi[g];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:n}}function oh(r,t){let e=new K0(r,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function j0(r,t){let e=new WeakMap;function i(s,a=0){let o=e.get(s),l;return o===void 0?(l=new oh(r,t),e.set(s,[l])):a>=o.length?(l=new oh(r,t),o.push(l)):l=o[a],l}function n(){e=new WeakMap}return{get:i,dispose:n}}var Oo=class extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fo=class extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
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
}`;function eg(r,t,e){let i=new Is,n=new pt,s=new pt,a=new ye,o=new Oo({depthPacking:ad}),l=new Fo,c={},h=e.maxTextureSize,u={[rn]:ti,[ti]:rn,[Re]:Re},d=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Q0,fragmentShader:tg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ne;p.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new yt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let m=this.type;this.render=function(S,E,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let b=r.getRenderTarget(),M=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),U=r.state;U.setBlending(tn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let Y=m!==Ni&&this.type===Ni,L=m===Ni&&this.type!==Ni;for(let N=0,k=S.length;N<k;N++){let q=S[N],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);let W=X.getFrameExtents();if(n.multiply(W),s.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/W.x),n.x=s.x*W.x,X.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/W.y),n.y=s.y*W.y,X.mapSize.y=s.y)),X.map===null||Y===!0||L===!0){let et=this.type!==Ni?{minFilter:Oe,magFilter:Oe}:{};X.map!==null&&X.map.dispose(),X.map=new Fi(n.x,n.y,et),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();let J=X.getViewportCount();for(let et=0;et<J;et++){let ft=X.getViewport(et);a.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),U.viewport(a),X.updateMatrices(q,et),i=X.getFrustum(),v(E,P,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===Ni&&y(X,P),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(b,M,I)};function y(S,E){let P=t.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Fi(n.x,n.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(E,null,P,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(E,null,P,f,x,null)}function _(S,E,P,b){let M=null,I=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let U=M.uuid,Y=E.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let N=L[Y];N===void 0&&(N=M.clone(),L[Y]=N,E.addEventListener("dispose",T)),M=N}if(M.visible=E.visible,M.wireframe=E.wireframe,b===Ni?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let U=r.properties.get(M);U.light=P}return M}function v(S,E,P,b,M){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Ni)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let Y=t.update(S),L=S.material;if(Array.isArray(L)){let N=Y.groups;for(let k=0,q=N.length;k<q;k++){let X=N[k],W=L[X.materialIndex];if(W&&W.visible){let J=_(S,W,b,M);S.onBeforeShadow(r,S,E,P,Y,J,X),r.renderBufferDirect(P,null,Y,J,S,X),S.onAfterShadow(r,S,E,P,Y,J,X)}}}else if(L.visible){let N=_(S,L,b,M);S.onBeforeShadow(r,S,E,P,Y,N,null),r.renderBufferDirect(P,null,Y,N,S,null),S.onAfterShadow(r,S,E,P,Y,N,null)}}let U=S.children;for(let Y=0,L=U.length;Y<L;Y++)v(U[Y],E,P,b,M)}function T(S){S.target.removeEventListener("dispose",T);for(let P in c){let b=c[P],M=S.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function ig(r,t,e){let i=e.isWebGL2;function n(){let D=!1,at=new ye,ot=null,Lt=new ye(0,0,0,0);return{setMask:function(Rt){ot!==Rt&&!D&&(r.colorMask(Rt,Rt,Rt,Rt),ot=Rt)},setLocked:function(Rt){D=Rt},setClear:function(Rt,ue,de,Ue,Ye){Ye===!0&&(Rt*=Ue,ue*=Ue,de*=Ue),at.set(Rt,ue,de,Ue),Lt.equals(at)===!1&&(r.clearColor(Rt,ue,de,Ue),Lt.copy(at))},reset:function(){D=!1,ot=null,Lt.set(-1,0,0,0)}}}function s(){let D=!1,at=null,ot=null,Lt=null;return{setTest:function(Rt){Rt?Vt(r.DEPTH_TEST):It(r.DEPTH_TEST)},setMask:function(Rt){at!==Rt&&!D&&(r.depthMask(Rt),at=Rt)},setFunc:function(Rt){if(ot!==Rt){switch(Rt){case Bu:r.depthFunc(r.NEVER);break;case Ou:r.depthFunc(r.ALWAYS);break;case Fu:r.depthFunc(r.LESS);break;case _r:r.depthFunc(r.LEQUAL);break;case zu:r.depthFunc(r.EQUAL);break;case ku:r.depthFunc(r.GEQUAL);break;case hl:r.depthFunc(r.GREATER);break;case Hu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ot=Rt}},setLocked:function(Rt){D=Rt},setClear:function(Rt){Lt!==Rt&&(r.clearDepth(Rt),Lt=Rt)},reset:function(){D=!1,at=null,ot=null,Lt=null}}}function a(){let D=!1,at=null,ot=null,Lt=null,Rt=null,ue=null,de=null,Ue=null,Ye=null;return{setTest:function(fe){D||(fe?Vt(r.STENCIL_TEST):It(r.STENCIL_TEST))},setMask:function(fe){at!==fe&&!D&&(r.stencilMask(fe),at=fe)},setFunc:function(fe,$e,Si){(ot!==fe||Lt!==$e||Rt!==Si)&&(r.stencilFunc(fe,$e,Si),ot=fe,Lt=$e,Rt=Si)},setOp:function(fe,$e,Si){(ue!==fe||de!==$e||Ue!==Si)&&(r.stencilOp(fe,$e,Si),ue=fe,de=$e,Ue=Si)},setLocked:function(fe){D=fe},setClear:function(fe){Ye!==fe&&(r.clearStencil(fe),Ye=fe)},reset:function(){D=!1,at=null,ot=null,Lt=null,Rt=null,ue=null,de=null,Ue=null,Ye=null}}}let o=new n,l=new s,c=new a,h=new WeakMap,u=new WeakMap,d={},f={},p=new WeakMap,x=[],g=null,m=!1,y=null,_=null,v=null,T=null,S=null,E=null,P=null,b=new Et(0,0,0),M=0,I=!1,U=null,Y=null,L=null,N=null,k=null,q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=W>=2);let et=null,ft={},V=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),ut=new ye().fromArray(V),St=new ye().fromArray(Z);function Mt(D,at,ot,Lt){let Rt=new Uint8Array(4),ue=r.createTexture();r.bindTexture(D,ue),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<ot;de++)i&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(at,0,r.RGBA,1,1,Lt,0,r.RGBA,r.UNSIGNED_BYTE,Rt):r.texImage2D(at+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Rt);return ue}let kt={};kt[r.TEXTURE_2D]=Mt(r.TEXTURE_2D,r.TEXTURE_2D,1),kt[r.TEXTURE_CUBE_MAP]=Mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(kt[r.TEXTURE_2D_ARRAY]=Mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),kt[r.TEXTURE_3D]=Mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Vt(r.DEPTH_TEST),l.setFunc(_r),qt(!1),R(Gl),Vt(r.CULL_FACE),_t(tn);function Vt(D){d[D]!==!0&&(r.enable(D),d[D]=!0)}function It(D){d[D]!==!1&&(r.disable(D),d[D]=!1)}function ee(D,at){return f[D]!==at?(r.bindFramebuffer(D,at),f[D]=at,i&&(D===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=at),D===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=at)),!0):!1}function O(D,at){let ot=x,Lt=!1;if(D)if(ot=p.get(at),ot===void 0&&(ot=[],p.set(at,ot)),D.isWebGLMultipleRenderTargets){let Rt=D.texture;if(ot.length!==Rt.length||ot[0]!==r.COLOR_ATTACHMENT0){for(let ue=0,de=Rt.length;ue<de;ue++)ot[ue]=r.COLOR_ATTACHMENT0+ue;ot.length=Rt.length,Lt=!0}}else ot[0]!==r.COLOR_ATTACHMENT0&&(ot[0]=r.COLOR_ATTACHMENT0,Lt=!0);else ot[0]!==r.BACK&&(ot[0]=r.BACK,Lt=!0);Lt&&(e.isWebGL2?r.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function qe(D){return g!==D?(r.useProgram(D),g=D,!0):!1}let At={[yn]:r.FUNC_ADD,[bu]:r.FUNC_SUBTRACT,[Mu]:r.FUNC_REVERSE_SUBTRACT};if(i)At[Xl]=r.MIN,At[ql]=r.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&(At[Xl]=D.MIN_EXT,At[ql]=D.MAX_EXT)}let Ot={[Su]:r.ZERO,[Eu]:r.ONE,[wu]:r.SRC_COLOR,[_o]:r.SRC_ALPHA,[Iu]:r.SRC_ALPHA_SATURATE,[Cu]:r.DST_COLOR,[Au]:r.DST_ALPHA,[Tu]:r.ONE_MINUS_SRC_COLOR,[vo]:r.ONE_MINUS_SRC_ALPHA,[Pu]:r.ONE_MINUS_DST_COLOR,[Ru]:r.ONE_MINUS_DST_ALPHA,[Lu]:r.CONSTANT_COLOR,[Du]:r.ONE_MINUS_CONSTANT_COLOR,[Uu]:r.CONSTANT_ALPHA,[Nu]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(D,at,ot,Lt,Rt,ue,de,Ue,Ye,fe){if(D===tn){m===!0&&(It(r.BLEND),m=!1);return}if(m===!1&&(Vt(r.BLEND),m=!0),D!==vu){if(D!==y||fe!==I){if((_!==yn||S!==yn)&&(r.blendEquation(r.FUNC_ADD),_=yn,S=yn),fe)switch(D){case en:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case es:r.blendFunc(r.ONE,r.ONE);break;case Vl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case en:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case es:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Vl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,T=null,E=null,P=null,b.set(0,0,0),M=0,y=D,I=fe}return}Rt=Rt||at,ue=ue||ot,de=de||Lt,(at!==_||Rt!==S)&&(r.blendEquationSeparate(At[at],At[Rt]),_=at,S=Rt),(ot!==v||Lt!==T||ue!==E||de!==P)&&(r.blendFuncSeparate(Ot[ot],Ot[Lt],Ot[ue],Ot[de]),v=ot,T=Lt,E=ue,P=de),(Ue.equals(b)===!1||Ye!==M)&&(r.blendColor(Ue.r,Ue.g,Ue.b,Ye),b.copy(Ue),M=Ye),y=D,I=!1}function _e(D,at){D.side===Re?It(r.CULL_FACE):Vt(r.CULL_FACE);let ot=D.side===ti;at&&(ot=!ot),qt(ot),D.blending===en&&D.transparent===!1?_t(tn):_t(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);let Lt=D.stencilWrite;c.setTest(Lt),Lt&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),z(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Vt(r.SAMPLE_ALPHA_TO_COVERAGE):It(r.SAMPLE_ALPHA_TO_COVERAGE)}function qt(D){U!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),U=D)}function R(D){D!==yu?(Vt(r.CULL_FACE),D!==Y&&(D===Gl?r.cullFace(r.BACK):D===_u?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):It(r.CULL_FACE),Y=D}function w(D){D!==L&&(X&&r.lineWidth(D),L=D)}function z(D,at,ot){D?(Vt(r.POLYGON_OFFSET_FILL),(N!==at||k!==ot)&&(r.polygonOffset(at,ot),N=at,k=ot)):It(r.POLYGON_OFFSET_FILL)}function Q(D){D?Vt(r.SCISSOR_TEST):It(r.SCISSOR_TEST)}function j(D){D===void 0&&(D=r.TEXTURE0+q-1),et!==D&&(r.activeTexture(D),et=D)}function tt(D,at,ot){ot===void 0&&(et===null?ot=r.TEXTURE0+q-1:ot=et);let Lt=ft[ot];Lt===void 0&&(Lt={type:void 0,texture:void 0},ft[ot]=Lt),(Lt.type!==D||Lt.texture!==at)&&(et!==ot&&(r.activeTexture(ot),et=ot),r.bindTexture(D,at||kt[D]),Lt.type=D,Lt.texture=at)}function vt(){let D=ft[et];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function lt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(D){ut.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),ut.copy(D))}function re(D){St.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),St.copy(D))}function be(D,at){let ot=u.get(at);ot===void 0&&(ot=new WeakMap,u.set(at,ot));let Lt=ot.get(D);Lt===void 0&&(Lt=r.getUniformBlockIndex(at,D.name),ot.set(D,Lt))}function Zt(D,at){let Lt=u.get(at).get(D);h.get(at)!==Lt&&(r.uniformBlockBinding(at,Lt,D.__bindingPointIndex),h.set(at,Lt))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},et=null,ft={},f={},p=new WeakMap,x=[],g=null,m=!1,y=null,_=null,v=null,T=null,S=null,E=null,P=null,b=new Et(0,0,0),M=0,I=!1,U=null,Y=null,L=null,N=null,k=null,ut.set(0,0,r.canvas.width,r.canvas.height),St.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Vt,disable:It,bindFramebuffer:ee,drawBuffers:O,useProgram:qe,setBlending:_t,setMaterial:_e,setFlipSided:qt,setCullFace:R,setLineWidth:w,setPolygonOffset:z,setScissorTest:Q,activeTexture:j,bindTexture:tt,unbindTexture:vt,compressedTexImage2D:lt,compressedTexImage3D:gt,texImage2D:Tt,texImage3D:xt,updateUBOMapping:be,uniformBlockBinding:Zt,texStorage2D:jt,texStorage3D:Bt,texSubImage2D:Pt,texSubImage3D:Yt,compressedTexSubImage2D:K,compressedTexSubImage3D:oe,scissor:Wt,viewport:re,reset:st}}function ng(r,t,e,i,n,s,a){let o=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,w){return f?new OffscreenCanvas(R,w):Ar("canvas")}function x(R,w,z,Q){let j=1;if((R.width>Q||R.height>Q)&&(j=Q/Math.max(R.width,R.height)),j<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let tt=w?To:Math.floor,vt=tt(j*R.width),lt=tt(j*R.height);u===void 0&&(u=p(vt,lt));let gt=z?p(vt,lt):u;return gt.width=vt,gt.height=lt,gt.getContext("2d").drawImage(R,0,0,vt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+vt+"x"+lt+")."),gt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return Ec(R.width)&&Ec(R.height)}function m(R){return o?!1:R.wrapS!==yi||R.wrapT!==yi||R.minFilter!==Oe&&R.minFilter!==hi}function y(R,w){return R.generateMipmaps&&w&&R.minFilter!==Oe&&R.minFilter!==hi}function _(R){r.generateMipmap(R)}function v(R,w,z,Q,j=!1){if(o===!1)return w;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let tt=w;if(w===r.RED&&(z===r.FLOAT&&(tt=r.R32F),z===r.HALF_FLOAT&&(tt=r.R16F),z===r.UNSIGNED_BYTE&&(tt=r.R8)),w===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(tt=r.R8UI),z===r.UNSIGNED_SHORT&&(tt=r.R16UI),z===r.UNSIGNED_INT&&(tt=r.R32UI),z===r.BYTE&&(tt=r.R8I),z===r.SHORT&&(tt=r.R16I),z===r.INT&&(tt=r.R32I)),w===r.RG&&(z===r.FLOAT&&(tt=r.RG32F),z===r.HALF_FLOAT&&(tt=r.RG16F),z===r.UNSIGNED_BYTE&&(tt=r.RG8)),w===r.RGBA){let vt=j?Mr:le.getTransfer(Q);z===r.FLOAT&&(tt=r.RGBA32F),z===r.HALF_FLOAT&&(tt=r.RGBA16F),z===r.UNSIGNED_BYTE&&(tt=vt===me?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function T(R,w,z){return y(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==Oe&&R.minFilter!==hi?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function S(R){return R===Oe||R===Yl||R===Na?r.NEAREST:r.LINEAR}function E(R){let w=R.target;w.removeEventListener("dispose",E),b(w),w.isVideoTexture&&h.delete(w)}function P(R){let w=R.target;w.removeEventListener("dispose",P),I(w)}function b(R){let w=i.get(R);if(w.__webglInit===void 0)return;let z=R.source,Q=d.get(z);if(Q){let j=Q[w.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(R),Object.keys(Q).length===0&&d.delete(z)}i.remove(R)}function M(R){let w=i.get(R);r.deleteTexture(w.__webglTexture);let z=R.source,Q=d.get(z);delete Q[w.__cacheKey],a.memory.textures--}function I(R){let w=R.texture,z=i.get(R),Q=i.get(w);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(z.__webglFramebuffer[j]))for(let tt=0;tt<z.__webglFramebuffer[j].length;tt++)r.deleteFramebuffer(z.__webglFramebuffer[j][tt]);else r.deleteFramebuffer(z.__webglFramebuffer[j]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[j])}else{if(Array.isArray(z.__webglFramebuffer))for(let j=0;j<z.__webglFramebuffer.length;j++)r.deleteFramebuffer(z.__webglFramebuffer[j]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let j=0;j<z.__webglColorRenderbuffer.length;j++)z.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[j]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let j=0,tt=w.length;j<tt;j++){let vt=i.get(w[j]);vt.__webglTexture&&(r.deleteTexture(vt.__webglTexture),a.memory.textures--),i.remove(w[j])}i.remove(w),i.remove(R)}let U=0;function Y(){U=0}function L(){let R=U;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),U+=1,R}function N(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function k(R,w){let z=i.get(R);if(R.isVideoTexture&&_e(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){let Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(z,R,w);return}}e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+w)}function q(R,w){let z=i.get(R);if(R.version>0&&z.__version!==R.version){ut(z,R,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+w)}function X(R,w){let z=i.get(R);if(R.version>0&&z.__version!==R.version){ut(z,R,w);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+w)}function W(R,w){let z=i.get(R);if(R.version>0&&z.__version!==R.version){St(z,R,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+w)}let J={[an]:r.REPEAT,[yi]:r.CLAMP_TO_EDGE,[So]:r.MIRRORED_REPEAT},et={[Oe]:r.NEAREST,[Yl]:r.NEAREST_MIPMAP_NEAREST,[Na]:r.NEAREST_MIPMAP_LINEAR,[hi]:r.LINEAR,[Ju]:r.LINEAR_MIPMAP_NEAREST,[Rs]:r.LINEAR_MIPMAP_LINEAR},ft={[ld]:r.NEVER,[pd]:r.ALWAYS,[cd]:r.LESS,[Nh]:r.LEQUAL,[hd]:r.EQUAL,[fd]:r.GEQUAL,[ud]:r.GREATER,[dd]:r.NOTEQUAL};function V(R,w,z){if(z?(r.texParameteri(R,r.TEXTURE_WRAP_S,J[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,J[w.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,J[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,et[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,et[w.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==yi||w.wrapT!==yi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,S(w.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,S(w.minFilter)),w.minFilter!==Oe&&w.minFilter!==hi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ft[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Q=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Oe||w.minFilter!==Na&&w.minFilter!==Rs||w.type===Qi&&t.has("OES_texture_float_linear")===!1||o===!1&&w.type===Cs&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(r.texParameterf(R,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Z(R,w){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",E));let Q=w.source,j=d.get(Q);j===void 0&&(j={},d.set(Q,j));let tt=N(w);if(tt!==R.__cacheKey){j[tt]===void 0&&(j[tt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[tt].usedTimes++;let vt=j[R.__cacheKey];vt!==void 0&&(j[R.__cacheKey].usedTimes--,vt.usedTimes===0&&M(w)),R.__cacheKey=tt,R.__webglTexture=j[tt].texture}return z}function ut(R,w,z){let Q=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=r.TEXTURE_3D);let j=Z(R,w),tt=w.source;e.bindTexture(Q,R.__webglTexture,r.TEXTURE0+z);let vt=i.get(tt);if(tt.version!==vt.__version||j===!0){e.activeTexture(r.TEXTURE0+z);let lt=le.getPrimaries(le.workingColorSpace),gt=w.colorSpace===ui?null:le.getPrimaries(w.colorSpace),Pt=w.colorSpace===ui||lt===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Yt=m(w)&&g(w.image)===!1,K=x(w.image,Yt,!1,n.maxTextureSize);K=qt(w,K);let oe=g(K)||o,jt=s.convert(w.format,w.colorSpace),Bt=s.convert(w.type),Tt=v(w.internalFormat,jt,Bt,w.colorSpace,w.isVideoTexture);V(Q,w,oe);let xt,Wt=w.mipmaps,re=o&&w.isVideoTexture!==!0&&Tt!==Ih,be=vt.__version===void 0||j===!0,Zt=T(w,K,oe);if(w.isDepthTexture)Tt=r.DEPTH_COMPONENT,o?w.type===Qi?Tt=r.DEPTH_COMPONENT32F:w.type===ji?Tt=r.DEPTH_COMPONENT24:w.type===vn?Tt=r.DEPTH24_STENCIL8:Tt=r.DEPTH_COMPONENT16:w.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===bn&&Tt===r.DEPTH_COMPONENT&&w.type!==ul&&w.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ji,Bt=s.convert(w.type)),w.format===ss&&Tt===r.DEPTH_COMPONENT&&(Tt=r.DEPTH_STENCIL,w.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=vn,Bt=s.convert(w.type))),be&&(re?e.texStorage2D(r.TEXTURE_2D,1,Tt,K.width,K.height):e.texImage2D(r.TEXTURE_2D,0,Tt,K.width,K.height,0,jt,Bt,null));else if(w.isDataTexture)if(Wt.length>0&&oe){re&&be&&e.texStorage2D(r.TEXTURE_2D,Zt,Tt,Wt[0].width,Wt[0].height);for(let st=0,D=Wt.length;st<D;st++)xt=Wt[st],re?e.texSubImage2D(r.TEXTURE_2D,st,0,0,xt.width,xt.height,jt,Bt,xt.data):e.texImage2D(r.TEXTURE_2D,st,Tt,xt.width,xt.height,0,jt,Bt,xt.data);w.generateMipmaps=!1}else re?(be&&e.texStorage2D(r.TEXTURE_2D,Zt,Tt,K.width,K.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,K.width,K.height,jt,Bt,K.data)):e.texImage2D(r.TEXTURE_2D,0,Tt,K.width,K.height,0,jt,Bt,K.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){re&&be&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,Tt,Wt[0].width,Wt[0].height,K.depth);for(let st=0,D=Wt.length;st<D;st++)xt=Wt[st],w.format!==_i?jt!==null?re?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,xt.width,xt.height,K.depth,jt,xt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,st,Tt,xt.width,xt.height,K.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?e.texSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,xt.width,xt.height,K.depth,jt,Bt,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,st,Tt,xt.width,xt.height,K.depth,0,jt,Bt,xt.data)}else{re&&be&&e.texStorage2D(r.TEXTURE_2D,Zt,Tt,Wt[0].width,Wt[0].height);for(let st=0,D=Wt.length;st<D;st++)xt=Wt[st],w.format!==_i?jt!==null?re?e.compressedTexSubImage2D(r.TEXTURE_2D,st,0,0,xt.width,xt.height,jt,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,st,Tt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?e.texSubImage2D(r.TEXTURE_2D,st,0,0,xt.width,xt.height,jt,Bt,xt.data):e.texImage2D(r.TEXTURE_2D,st,Tt,xt.width,xt.height,0,jt,Bt,xt.data)}else if(w.isDataArrayTexture)re?(be&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,Tt,K.width,K.height,K.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,jt,Bt,K.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Tt,K.width,K.height,K.depth,0,jt,Bt,K.data);else if(w.isData3DTexture)re?(be&&e.texStorage3D(r.TEXTURE_3D,Zt,Tt,K.width,K.height,K.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,jt,Bt,K.data)):e.texImage3D(r.TEXTURE_3D,0,Tt,K.width,K.height,K.depth,0,jt,Bt,K.data);else if(w.isFramebufferTexture){if(be)if(re)e.texStorage2D(r.TEXTURE_2D,Zt,Tt,K.width,K.height);else{let st=K.width,D=K.height;for(let at=0;at<Zt;at++)e.texImage2D(r.TEXTURE_2D,at,Tt,st,D,0,jt,Bt,null),st>>=1,D>>=1}}else if(Wt.length>0&&oe){re&&be&&e.texStorage2D(r.TEXTURE_2D,Zt,Tt,Wt[0].width,Wt[0].height);for(let st=0,D=Wt.length;st<D;st++)xt=Wt[st],re?e.texSubImage2D(r.TEXTURE_2D,st,0,0,jt,Bt,xt):e.texImage2D(r.TEXTURE_2D,st,Tt,jt,Bt,xt);w.generateMipmaps=!1}else re?(be&&e.texStorage2D(r.TEXTURE_2D,Zt,Tt,K.width,K.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,jt,Bt,K)):e.texImage2D(r.TEXTURE_2D,0,Tt,jt,Bt,K);y(w,oe)&&_(Q),vt.__version=tt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function St(R,w,z){if(w.image.length!==6)return;let Q=Z(R,w),j=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);let tt=i.get(j);if(j.version!==tt.__version||Q===!0){e.activeTexture(r.TEXTURE0+z);let vt=le.getPrimaries(le.workingColorSpace),lt=w.colorSpace===ui?null:le.getPrimaries(w.colorSpace),gt=w.colorSpace===ui||vt===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Pt=w.isCompressedTexture||w.image[0].isCompressedTexture,Yt=w.image[0]&&w.image[0].isDataTexture,K=[];for(let st=0;st<6;st++)!Pt&&!Yt?K[st]=x(w.image[st],!1,!0,n.maxCubemapSize):K[st]=Yt?w.image[st].image:w.image[st],K[st]=qt(w,K[st]);let oe=K[0],jt=g(oe)||o,Bt=s.convert(w.format,w.colorSpace),Tt=s.convert(w.type),xt=v(w.internalFormat,Bt,Tt,w.colorSpace),Wt=o&&w.isVideoTexture!==!0,re=tt.__version===void 0||Q===!0,be=T(w,oe,jt);V(r.TEXTURE_CUBE_MAP,w,jt);let Zt;if(Pt){Wt&&re&&e.texStorage2D(r.TEXTURE_CUBE_MAP,be,xt,oe.width,oe.height);for(let st=0;st<6;st++){Zt=K[st].mipmaps;for(let D=0;D<Zt.length;D++){let at=Zt[D];w.format!==_i?Bt!==null?Wt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D,0,0,at.width,at.height,Bt,at.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D,xt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D,0,0,at.width,at.height,Bt,Tt,at.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D,xt,at.width,at.height,0,Bt,Tt,at.data)}}}else{Zt=w.mipmaps,Wt&&re&&(Zt.length>0&&be++,e.texStorage2D(r.TEXTURE_CUBE_MAP,be,xt,K[0].width,K[0].height));for(let st=0;st<6;st++)if(Yt){Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,K[st].width,K[st].height,Bt,Tt,K[st].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,xt,K[st].width,K[st].height,0,Bt,Tt,K[st].data);for(let D=0;D<Zt.length;D++){let ot=Zt[D].image[st].image;Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D+1,0,0,ot.width,ot.height,Bt,Tt,ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D+1,xt,ot.width,ot.height,0,Bt,Tt,ot.data)}}else{Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Bt,Tt,K[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,xt,Bt,Tt,K[st]);for(let D=0;D<Zt.length;D++){let at=Zt[D];Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D+1,0,0,Bt,Tt,at.image[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,D+1,xt,Bt,Tt,at.image[st])}}}y(w,jt)&&_(r.TEXTURE_CUBE_MAP),tt.__version=j.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Mt(R,w,z,Q,j,tt){let vt=s.convert(z.format,z.colorSpace),lt=s.convert(z.type),gt=v(z.internalFormat,vt,lt,z.colorSpace);if(!i.get(w).__hasExternalTextures){let Yt=Math.max(1,w.width>>tt),K=Math.max(1,w.height>>tt);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,tt,gt,Yt,K,w.depth,0,vt,lt,null):e.texImage2D(j,tt,gt,Yt,K,0,vt,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),_t(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,j,i.get(z).__webglTexture,0,Ot(w)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,j,i.get(z).__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(R,w,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let Q=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(z||_t(w)){let j=w.depthTexture;j&&j.isDepthTexture&&(j.type===Qi?Q=r.DEPTH_COMPONENT32F:j.type===ji&&(Q=r.DEPTH_COMPONENT24));let tt=Ot(w);_t(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,Q,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Q,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){let Q=Ot(w);z&&_t(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,w.width,w.height):_t(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{let Q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let j=0;j<Q.length;j++){let tt=Q[j],vt=s.convert(tt.format,tt.colorSpace),lt=s.convert(tt.type),gt=v(tt.internalFormat,vt,lt,tt.colorSpace),Pt=Ot(w);z&&_t(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,gt,w.width,w.height):_t(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pt,gt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,gt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Vt(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);let Q=i.get(w.depthTexture).__webglTexture,j=Ot(w);if(w.depthTexture.format===bn)_t(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(w.depthTexture.format===ss)_t(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function It(R){let w=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Vt(w.__webglFramebuffer,R)}else if(z){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=r.createRenderbuffer(),kt(w.__webglDepthbuffer[Q],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),kt(w.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function ee(R,w,z){let Q=i.get(R);w!==void 0&&Mt(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&It(R)}function O(R){let w=R.texture,z=i.get(R),Q=i.get(w);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=w.version,a.memory.textures++);let j=R.isWebGLCubeRenderTarget===!0,tt=R.isWebGLMultipleRenderTargets===!0,vt=g(R)||o;if(j){z.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(o&&w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[lt]=[];for(let gt=0;gt<w.mipmaps.length;gt++)z.__webglFramebuffer[lt][gt]=r.createFramebuffer()}else z.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let lt=0;lt<w.mipmaps.length;lt++)z.__webglFramebuffer[lt]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(tt)if(n.drawBuffers){let lt=R.texture;for(let gt=0,Pt=lt.length;gt<Pt;gt++){let Yt=i.get(lt[gt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&_t(R)===!1){let lt=tt?w:[w];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let gt=0;gt<lt.length;gt++){let Pt=lt[gt];z.__webglColorRenderbuffer[gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[gt]);let Yt=s.convert(Pt.format,Pt.colorSpace),K=s.convert(Pt.type),oe=v(Pt.internalFormat,Yt,K,Pt.colorSpace,R.isXRRenderTarget===!0),jt=Ot(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,oe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,z.__webglColorRenderbuffer[gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),V(r.TEXTURE_CUBE_MAP,w,vt);for(let lt=0;lt<6;lt++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let gt=0;gt<w.mipmaps.length;gt++)Mt(z.__webglFramebuffer[lt][gt],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt);else Mt(z.__webglFramebuffer[lt],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);y(w,vt)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){let lt=R.texture;for(let gt=0,Pt=lt.length;gt<Pt;gt++){let Yt=lt[gt],K=i.get(Yt);e.bindTexture(r.TEXTURE_2D,K.__webglTexture),V(r.TEXTURE_2D,Yt,vt),Mt(z.__webglFramebuffer,R,Yt,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,0),y(Yt,vt)&&_(r.TEXTURE_2D)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?lt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,Q.__webglTexture),V(lt,w,vt),o&&w.mipmaps&&w.mipmaps.length>0)for(let gt=0;gt<w.mipmaps.length;gt++)Mt(z.__webglFramebuffer[gt],R,w,r.COLOR_ATTACHMENT0,lt,gt);else Mt(z.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,lt,0);y(w,vt)&&_(lt),e.unbindTexture()}R.depthBuffer&&It(R)}function qe(R){let w=g(R)||o,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Q=0,j=z.length;Q<j;Q++){let tt=z[Q];if(y(tt,w)){let vt=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,lt=i.get(tt).__webglTexture;e.bindTexture(vt,lt),_(vt),e.unbindTexture()}}}function At(R){if(o&&R.samples>0&&_t(R)===!1){let w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,Q=R.height,j=r.COLOR_BUFFER_BIT,tt=[],vt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=i.get(R),gt=R.isWebGLMultipleRenderTargets===!0;if(gt)for(let Pt=0;Pt<w.length;Pt++)e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let Pt=0;Pt<w.length;Pt++){tt.push(r.COLOR_ATTACHMENT0+Pt),R.depthBuffer&&tt.push(vt);let Yt=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(Yt===!1&&(R.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),gt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,lt.__webglColorRenderbuffer[Pt]),Yt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[vt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[vt])),gt){let K=i.get(w[Pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,K,0)}r.blitFramebuffer(0,0,z,Q,0,0,z,Q,j,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),gt)for(let Pt=0;Pt<w.length;Pt++){e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,lt.__webglColorRenderbuffer[Pt]);let Yt=i.get(w[Pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,Yt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function Ot(R){return Math.min(n.maxSamples,R.samples)}function _t(R){let w=i.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function _e(R){let w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function qt(R,w){let z=R.colorSpace,Q=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Eo||z!==Oi&&z!==ui&&(le.getTransfer(z)===me?o===!1?t.has("EXT_sRGB")===!0&&Q===_i?(R.format=Eo,R.minFilter=hi,R.generateMipmaps=!1):w=Rr.sRGBToLinear(w):(Q!==_i||j!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=ee,this.setupRenderTarget=O,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=_t}function sg(r,t,e){let i=e.isWebGL2;function n(s,a=ui){let o,l=le.getTransfer(a);if(s===sn)return r.UNSIGNED_BYTE;if(s===Th)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ah)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ku)return r.BYTE;if(s===ju)return r.SHORT;if(s===ul)return r.UNSIGNED_SHORT;if(s===wh)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===Qi)return r.FLOAT;if(s===Cs)return i?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Qu)return r.ALPHA;if(s===_i)return r.RGBA;if(s===td)return r.LUMINANCE;if(s===ed)return r.LUMINANCE_ALPHA;if(s===bn)return r.DEPTH_COMPONENT;if(s===ss)return r.DEPTH_STENCIL;if(s===Eo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===id)return r.RED;if(s===Rh)return r.RED_INTEGER;if(s===nd)return r.RG;if(s===Ch)return r.RG_INTEGER;if(s===Ph)return r.RGBA_INTEGER;if(s===Ba||s===Oa||s===Fa||s===za)if(l===me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ba)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ba)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===za)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$l||s===Zl||s===Jl||s===Kl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===$l)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ih)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===jl||s===Ql)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===jl)return l===me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ql)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tc||s===ec||s===ic||s===nc||s===sc||s===rc||s===ac||s===oc||s===lc||s===cc||s===hc||s===uc||s===dc||s===fc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===tc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ec)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ic)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ac)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===oc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===uc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ka||s===pc||s===mc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===ka)return l===me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sd||s===gc||s===xc||s===yc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===ka)return o.COMPRESSED_RED_RGTC1_EXT;if(s===gc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vn?i?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}var zo=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ie=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},rg={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rg)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ie;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ko=class extends on{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=e.getContextAttributes(),g=null,m=null,y=[],_=[],v=new pt,T=null,S=new We;S.layers.enable(1),S.viewport=new ye;let E=new We;E.layers.enable(2),E.viewport=new ye;let P=[S,E],b=new zo;b.layers.enable(1),b.layers.enable(2);let M=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=y[V];return Z===void 0&&(Z=new ws,y[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=y[V];return Z===void 0&&(Z=new ws,y[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=y[V];return Z===void 0&&(Z=new ws,y[V]=Z),Z.getHandSpace()};function U(V){let Z=_.indexOf(V.inputSource);if(Z===-1)return;let ut=y[Z];ut!==void 0&&(ut.update(V.inputSource,V.frame,c||a),ut.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",L);for(let V=0;V<y.length;V++){let Z=_[V];Z!==null&&(_[V]=null,y[V].disconnect(Z))}M=null,I=null,t.setRenderTarget(g),f=null,d=null,u=null,n=null,m=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(v.width,v.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(g=t.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(v),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Z={antialias:n.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,Z),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Fi(f.framebufferWidth,f.framebufferHeight,{format:_i,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Z=null,ut=null,St=null;x.depth&&(St=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=x.stencil?ss:bn,ut=x.stencil?vn:ji);let Mt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(Mt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),m=new Fi(d.textureWidth,d.textureHeight,{format:_i,type:sn,depthTexture:new Fr(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let kt=t.properties.get(m);kt.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ft.setContext(n),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function L(V){for(let Z=0;Z<V.removed.length;Z++){let ut=V.removed[Z],St=_.indexOf(ut);St>=0&&(_[St]=null,y[St].disconnect(ut))}for(let Z=0;Z<V.added.length;Z++){let ut=V.added[Z],St=_.indexOf(ut);if(St===-1){for(let kt=0;kt<y.length;kt++)if(kt>=_.length){_.push(ut),St=kt;break}else if(_[kt]===null){_[kt]=ut,St=kt;break}if(St===-1)break}let Mt=y[St];Mt&&Mt.connect(ut)}}let N=new C,k=new C;function q(V,Z,ut){N.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(ut.matrixWorld);let St=N.distanceTo(k),Mt=Z.projectionMatrix.elements,kt=ut.projectionMatrix.elements,Vt=Mt[14]/(Mt[10]-1),It=Mt[14]/(Mt[10]+1),ee=(Mt[9]+1)/Mt[5],O=(Mt[9]-1)/Mt[5],qe=(Mt[8]-1)/Mt[0],At=(kt[8]+1)/kt[0],Ot=Vt*qe,_t=Vt*At,_e=St/(-qe+At),qt=_e*-qe;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(qt),V.translateZ(_e),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let R=Vt+_e,w=It+_e,z=Ot-qt,Q=_t+(St-qt),j=ee*It/w*R,tt=O*It/w*R;V.projectionMatrix.makePerspective(z,Q,j,tt,R,w),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;b.near=E.near=S.near=V.near,b.far=E.far=S.far=V.far,(M!==b.near||I!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),M=b.near,I=b.far);let Z=V.parent,ut=b.cameras;X(b,Z);for(let St=0;St<ut.length;St++)X(ut[St],Z);ut.length===2?q(b,S,E):b.projectionMatrix.copy(S.projectionMatrix),W(V,b,Z)};function W(V,Z,ut){ut===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(ut.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=wo*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)};let J=null;function et(V,Z){if(h=Z.getViewerPose(c||a),p=Z,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(m,f.framebuffer),t.setRenderTarget(m));let St=!1;ut.length!==b.cameras.length&&(b.cameras.length=0,St=!0);for(let Mt=0;Mt<ut.length;Mt++){let kt=ut[Mt],Vt=null;if(f!==null)Vt=f.getViewport(kt);else{let ee=u.getViewSubImage(d,kt);Vt=ee.viewport,Mt===0&&(t.setRenderTargetTextures(m,ee.colorTexture,d.ignoreDepthValues?void 0:ee.depthStencilTexture),t.setRenderTarget(m))}let It=P[Mt];It===void 0&&(It=new We,It.layers.enable(Mt),It.viewport=new ye,P[Mt]=It),It.matrix.fromArray(kt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(kt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Mt===0&&(b.matrix.copy(It.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),St===!0&&b.cameras.push(It)}}for(let ut=0;ut<y.length;ut++){let St=_[ut],Mt=y[ut];St!==null&&Mt!==void 0&&Mt.update(St,Z,c||a)}J&&J(V,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),p=null}let ft=new zh;ft.setAnimationLoop(et),this.setAnimationLoop=function(V){J=V},this.dispose=function(){}}};function ag(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Fh(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,y,_,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ti&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ti&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=t.get(m).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let _=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*_,e(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),t.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ti&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function og(r,t,e,i){let n={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let v=_.program;i.uniformBlockBinding(y,v)}function c(y,_){let v=n[y.id];v===void 0&&(p(y),v=h(y),n[y.id]=v,y.addEventListener("dispose",g));let T=_.program;i.updateUBOMapping(y,T);let S=t.render.frame;s[y.id]!==S&&(d(y),s[y.id]=S)}function h(y){let _=u();y.__bindingPointIndex=_;let v=r.createBuffer(),T=y.__size,S=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,T,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=n[y.id],v=y.uniforms,T=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let S=0,E=v.length;S<E;S++){let P=Array.isArray(v[S])?v[S]:[v[S]];for(let b=0,M=P.length;b<M;b++){let I=P[b];if(f(I,S,b,T)===!0){let U=I.__offset,Y=Array.isArray(I.value)?I.value:[I.value],L=0;for(let N=0;N<Y.length;N++){let k=Y[N],q=x(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,U+L,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,_,v,T){let S=y.value,E=_+"_"+v;if(T[E]===void 0)return typeof S=="number"||typeof S=="boolean"?T[E]=S:T[E]=S.clone(),!0;{let P=T[E];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return T[E]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function p(y){let _=y.uniforms,v=0,T=16;for(let E=0,P=_.length;E<P;E++){let b=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,I=b.length;M<I;M++){let U=b[M],Y=Array.isArray(U.value)?U.value:[U.value];for(let L=0,N=Y.length;L<N;L++){let k=Y[L],q=x(k),X=v%T;X!==0&&T-X<q.boundary&&(v+=T-X),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=q.storage}}}let S=v%T;return S>0&&(v+=T-S),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){let _=y.target;_.removeEventListener("dispose",g);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(n[_.id]),delete n[_.id],delete s[_.id]}function m(){for(let y in n)r.deleteBuffer(n[y]);a=[],n={},s={}}return{bind:l,update:c,dispose:m}}var Ls=class{constructor(t={}){let{canvas:e=gd(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),p=new Int32Array(4),x=null,g=null,m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this._useLegacyLights=!1,this.toneMapping=nn,this.toneMappingExposure=1;let _=this,v=!1,T=0,S=0,E=null,P=-1,b=null,M=new ye,I=new ye,U=null,Y=new Et(0),L=0,N=e.width,k=e.height,q=1,X=null,W=null,J=new ye(0,0,N,k),et=new ye(0,0,N,k),ft=!1,V=new Is,Z=!1,ut=!1,St=null,Mt=new ce,kt=new pt,Vt=new C,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return E===null?q:1}let O=i;function qe(A,B){for(let H=0;H<A.length;H++){let G=A[H],F=e.getContext(G,B);if(F!==null)return F}return null}try{let A={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",at,!1),O===null){let B=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&B.shift(),O=qe(B,A),O===null)throw qe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let At,Ot,_t,_e,qt,R,w,z,Q,j,tt,vt,lt,gt,Pt,Yt,K,oe,jt,Bt,Tt,xt,Wt,re;function be(){At=new Tm(O),Ot=new vm(O,At,t),At.init(Ot),xt=new sg(O,At,Ot),_t=new ig(O,At,Ot),_e=new Cm(O),qt=new W0,R=new ng(O,At,_t,qt,Ot,xt,_e),w=new Mm(_),z=new wm(_),Q=new Bd(O,Ot),Wt=new ym(O,At,Q,Ot),j=new Am(O,Q,_e,Wt),tt=new Dm(O,j,Q,_e),jt=new Lm(O,Ot,R),Yt=new bm(qt),vt=new V0(_,w,z,At,Ot,Wt,Yt),lt=new ag(_,qt),gt=new q0,Pt=new j0(At,Ot),oe=new xm(_,w,z,_t,tt,d,l),K=new eg(_,tt,Ot),re=new og(O,_e,Ot,_t),Bt=new _m(O,At,_e,Ot),Tt=new Rm(O,At,_e,Ot),_e.programs=vt.programs,_.capabilities=Ot,_.extensions=At,_.properties=qt,_.renderLists=gt,_.shadowMap=K,_.state=_t,_.info=_e}be();let Zt=new ko(_,O);this.xr=Zt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=At.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=At.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(N,k,!1))},this.getSize=function(A){return A.set(N,k)},this.setSize=function(A,B,H=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,k=B,e.width=Math.floor(A*q),e.height=Math.floor(B*q),H===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(N*q,k*q).floor()},this.setDrawingBufferSize=function(A,B,H){N=A,k=B,q=H,e.width=Math.floor(A*H),e.height=Math.floor(B*H),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,B,H,G){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,B,H,G),_t.viewport(M.copy(J).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(et)},this.setScissor=function(A,B,H,G){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,B,H,G),_t.scissor(I.copy(et).multiplyScalar(q).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(A){_t.setScissorTest(ft=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){W=A},this.getClearColor=function(A){return A.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(A=!0,B=!0,H=!0){let G=0;if(A){let F=!1;if(E!==null){let dt=E.texture.format;F=dt===Ph||dt===Ch||dt===Rh}if(F){let dt=E.texture.type,bt=dt===sn||dt===ji||dt===ul||dt===vn||dt===Th||dt===Ah,Ct=oe.getClearColor(),Dt=oe.getClearAlpha(),$t=Ct.r,Ft=Ct.g,Ht=Ct.b;bt?(f[0]=$t,f[1]=Ft,f[2]=Ht,f[3]=Dt,O.clearBufferuiv(O.COLOR,0,f)):(p[0]=$t,p[1]=Ft,p[2]=Ht,p[3]=Dt,O.clearBufferiv(O.COLOR,0,p))}else G|=O.COLOR_BUFFER_BIT}B&&(G|=O.DEPTH_BUFFER_BIT),H&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",at,!1),gt.dispose(),Pt.dispose(),qt.dispose(),w.dispose(),z.dispose(),tt.dispose(),Wt.dispose(),re.dispose(),vt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Ye),Zt.removeEventListener("sessionend",fe),St&&(St.dispose(),St=null),$e.stop()};function st(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let A=_e.autoReset,B=K.enabled,H=K.autoUpdate,G=K.needsUpdate,F=K.type;be(),_e.autoReset=A,K.enabled=B,K.autoUpdate=H,K.needsUpdate=G,K.type=F}function at(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){let B=A.target;B.removeEventListener("dispose",ot),Lt(B)}function Lt(A){Rt(A),qt.remove(A)}function Rt(A){let B=qt.get(A).programs;B!==void 0&&(B.forEach(function(H){vt.releaseProgram(H)}),A.isShaderMaterial&&vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,H,G,F,dt){B===null&&(B=It);let bt=F.isMesh&&F.matrixWorld.determinant()<0,Ct=pu(A,B,H,G,F);_t.setMaterial(G,bt);let Dt=H.index,$t=1;if(G.wireframe===!0){if(Dt=j.getWireframeAttribute(H),Dt===void 0)return;$t=2}let Ft=H.drawRange,Ht=H.attributes.position,Ee=Ft.start*$t,ei=(Ft.start+Ft.count)*$t;dt!==null&&(Ee=Math.max(Ee,dt.start*$t),ei=Math.min(ei,(dt.start+dt.count)*$t)),Dt!==null?(Ee=Math.max(Ee,0),ei=Math.min(ei,Dt.count)):Ht!=null&&(Ee=Math.max(Ee,0),ei=Math.min(ei,Ht.count));let Ne=ei-Ee;if(Ne<0||Ne===1/0)return;Wt.setup(F,G,Ct,H,Dt);let Ci,ve=Bt;if(Dt!==null&&(Ci=Q.get(Dt),ve=Tt,ve.setIndex(Ci)),F.isMesh)G.wireframe===!0?(_t.setLineWidth(G.wireframeLinewidth*ee()),ve.setMode(O.LINES)):ve.setMode(O.TRIANGLES);else if(F.isLine){let Jt=G.linewidth;Jt===void 0&&(Jt=1),_t.setLineWidth(Jt*ee()),F.isLineSegments?ve.setMode(O.LINES):F.isLineLoop?ve.setMode(O.LINE_LOOP):ve.setMode(O.LINE_STRIP)}else F.isPoints?ve.setMode(O.POINTS):F.isSprite&&ve.setMode(O.TRIANGLES);if(F.isBatchedMesh)ve.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)ve.renderInstances(Ee,Ne,F.count);else if(H.isInstancedBufferGeometry){let Jt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ia=Math.min(H.instanceCount,Jt);ve.renderInstances(Ee,Ne,Ia)}else ve.render(Ee,Ne)};function ue(A,B,H){A.transparent===!0&&A.side===Re&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Ws(A,B,H),A.side=rn,A.needsUpdate=!0,Ws(A,B,H),A.side=Re):Ws(A,B,H)}this.compile=function(A,B,H=null){H===null&&(H=A),g=Pt.get(H),g.init(),y.push(g),H.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),A!==H&&A.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights(_._useLegacyLights);let G=new Set;return A.traverse(function(F){let dt=F.material;if(dt)if(Array.isArray(dt))for(let bt=0;bt<dt.length;bt++){let Ct=dt[bt];ue(Ct,H,F),G.add(Ct)}else ue(dt,H,F),G.add(dt)}),y.pop(),g=null,G},this.compileAsync=function(A,B,H=null){let G=this.compile(A,B,H);return new Promise(F=>{function dt(){if(G.forEach(function(bt){qt.get(bt).currentProgram.isReady()&&G.delete(bt)}),G.size===0){F(A);return}setTimeout(dt,10)}At.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let de=null;function Ue(A){de&&de(A)}function Ye(){$e.stop()}function fe(){$e.start()}let $e=new zh;$e.setAnimationLoop(Ue),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(A){de=A,Zt.setAnimationLoop(A),A===null?$e.stop():$e.start()},Zt.addEventListener("sessionstart",Ye),Zt.addEventListener("sessionend",fe),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(B),B=Zt.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,B,E),g=Pt.get(A,y.length),g.init(),y.push(g),Mt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),V.setFromProjectionMatrix(Mt),ut=this.localClippingEnabled,Z=Yt.init(this.clippingPlanes,ut),x=gt.get(A,m.length),x.init(),m.push(x),Si(A,B,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(X,W),this.info.render.frame++,Z===!0&&Yt.beginShadows();let H=g.state.shadowsArray;if(K.render(H,A,B),Z===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(x,A),g.setupLights(_._useLegacyLights),B.isArrayCamera){let G=B.cameras;for(let F=0,dt=G.length;F<dt;F++){let bt=G[F];Bl(x,A,bt,bt.viewport)}}else Bl(x,A,B);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(_,A,B),Wt.resetDefaultState(),P=-1,b=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Si(A,B,H,G){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){G&&Vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);let bt=tt.update(A),Ct=A.material;Ct.visible&&x.push(A,bt,Ct,H,Vt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||V.intersectsObject(A))){let bt=tt.update(A),Ct=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Vt.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Vt.copy(bt.boundingSphere.center)),Vt.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ct)){let Dt=bt.groups;for(let $t=0,Ft=Dt.length;$t<Ft;$t++){let Ht=Dt[$t],Ee=Ct[Ht.materialIndex];Ee&&Ee.visible&&x.push(A,bt,Ee,H,Vt.z,Ht)}}else Ct.visible&&x.push(A,bt,Ct,H,Vt.z,null)}}let dt=A.children;for(let bt=0,Ct=dt.length;bt<Ct;bt++)Si(dt[bt],B,H,G)}function Bl(A,B,H,G){let F=A.opaque,dt=A.transmissive,bt=A.transparent;g.setupLightsView(H),Z===!0&&Yt.setGlobalState(_.clippingPlanes,H),dt.length>0&&fu(F,dt,B,H),G&&_t.viewport(M.copy(G)),F.length>0&&Vs(F,B,H),dt.length>0&&Vs(dt,B,H),bt.length>0&&Vs(bt,B,H),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function fu(A,B,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let dt=Ot.isWebGL2;St===null&&(St=new Fi(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")?Cs:sn,minFilter:Rs,samples:dt?4:0})),_.getDrawingBufferSize(kt),dt?St.setSize(kt.x,kt.y):St.setSize(To(kt.x),To(kt.y));let bt=_.getRenderTarget();_.setRenderTarget(St),_.getClearColor(Y),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let Ct=_.toneMapping;_.toneMapping=nn,Vs(A,H,G),R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St);let Dt=!1;for(let $t=0,Ft=B.length;$t<Ft;$t++){let Ht=B[$t],Ee=Ht.object,ei=Ht.geometry,Ne=Ht.material,Ci=Ht.group;if(Ne.side===Re&&Ee.layers.test(G.layers)){let ve=Ne.side;Ne.side=ti,Ne.needsUpdate=!0,Ol(Ee,H,G,ei,Ne,Ci),Ne.side=ve,Ne.needsUpdate=!0,Dt=!0}}Dt===!0&&(R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St)),_.setRenderTarget(bt),_.setClearColor(Y,L),_.toneMapping=Ct}function Vs(A,B,H){let G=B.isScene===!0?B.overrideMaterial:null;for(let F=0,dt=A.length;F<dt;F++){let bt=A[F],Ct=bt.object,Dt=bt.geometry,$t=G===null?bt.material:G,Ft=bt.group;Ct.layers.test(H.layers)&&Ol(Ct,B,H,Dt,$t,Ft)}}function Ol(A,B,H,G,F,dt){A.onBeforeRender(_,B,H,G,F,dt),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(_,B,H,G,A,dt),F.transparent===!0&&F.side===Re&&F.forceSinglePass===!1?(F.side=ti,F.needsUpdate=!0,_.renderBufferDirect(H,B,G,F,A,dt),F.side=rn,F.needsUpdate=!0,_.renderBufferDirect(H,B,G,F,A,dt),F.side=Re):_.renderBufferDirect(H,B,G,F,A,dt),A.onAfterRender(_,B,H,G,F,dt)}function Ws(A,B,H){B.isScene!==!0&&(B=It);let G=qt.get(A),F=g.state.lights,dt=g.state.shadowsArray,bt=F.state.version,Ct=vt.getParameters(A,F.state,dt,B,H),Dt=vt.getProgramCacheKey(Ct),$t=G.programs;G.environment=A.isMeshStandardMaterial?B.environment:null,G.fog=B.fog,G.envMap=(A.isMeshStandardMaterial?z:w).get(A.envMap||G.environment),$t===void 0&&(A.addEventListener("dispose",ot),$t=new Map,G.programs=$t);let Ft=$t.get(Dt);if(Ft!==void 0){if(G.currentProgram===Ft&&G.lightsStateVersion===bt)return zl(A,Ct),Ft}else Ct.uniforms=vt.getUniforms(A),A.onBuild(H,Ct,_),A.onBeforeCompile(Ct,_),Ft=vt.acquireProgram(Ct,Dt),$t.set(Dt,Ft),G.uniforms=Ct.uniforms;let Ht=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ht.clippingPlanes=Yt.uniform),zl(A,Ct),G.needsLights=gu(A),G.lightsStateVersion=bt,G.needsLights&&(Ht.ambientLightColor.value=F.state.ambient,Ht.lightProbe.value=F.state.probe,Ht.directionalLights.value=F.state.directional,Ht.directionalLightShadows.value=F.state.directionalShadow,Ht.spotLights.value=F.state.spot,Ht.spotLightShadows.value=F.state.spotShadow,Ht.rectAreaLights.value=F.state.rectArea,Ht.ltc_1.value=F.state.rectAreaLTC1,Ht.ltc_2.value=F.state.rectAreaLTC2,Ht.pointLights.value=F.state.point,Ht.pointLightShadows.value=F.state.pointShadow,Ht.hemisphereLights.value=F.state.hemi,Ht.directionalShadowMap.value=F.state.directionalShadowMap,Ht.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ht.spotShadowMap.value=F.state.spotShadowMap,Ht.spotLightMatrix.value=F.state.spotLightMatrix,Ht.spotLightMap.value=F.state.spotLightMap,Ht.pointShadowMap.value=F.state.pointShadowMap,Ht.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ft,G.uniformsList=null,Ft}function Fl(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=ts.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function zl(A,B){let H=qt.get(A);H.outputColorSpace=B.outputColorSpace,H.batching=B.batching,H.instancing=B.instancing,H.instancingColor=B.instancingColor,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphColors=B.morphColors,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function pu(A,B,H,G,F){B.isScene!==!0&&(B=It),R.resetTextureUnits();let dt=B.fog,bt=G.isMeshStandardMaterial?B.environment:null,Ct=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Oi,Dt=(G.isMeshStandardMaterial?z:w).get(G.envMap||bt),$t=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ft=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ht=!!H.morphAttributes.position,Ee=!!H.morphAttributes.normal,ei=!!H.morphAttributes.color,Ne=nn;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ne=_.toneMapping);let Ci=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ve=Ci!==void 0?Ci.length:0,Jt=qt.get(G),Ia=g.state.lights;if(Z===!0&&(ut===!0||A!==b)){let li=A===b&&G.id===P;Yt.setState(G,A,li)}let Me=!1;G.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ia.state.version||Jt.outputColorSpace!==Ct||F.isBatchedMesh&&Jt.batching===!1||!F.isBatchedMesh&&Jt.batching===!0||F.isInstancedMesh&&Jt.instancing===!1||!F.isInstancedMesh&&Jt.instancing===!0||F.isSkinnedMesh&&Jt.skinning===!1||!F.isSkinnedMesh&&Jt.skinning===!0||F.isInstancedMesh&&Jt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Jt.instancingColor===!1&&F.instanceColor!==null||Jt.envMap!==Dt||G.fog===!0&&Jt.fog!==dt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Yt.numPlanes||Jt.numIntersection!==Yt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==Ft||Jt.morphTargets!==Ht||Jt.morphNormals!==Ee||Jt.morphColors!==ei||Jt.toneMapping!==Ne||Ot.isWebGL2===!0&&Jt.morphTargetsCount!==ve)&&(Me=!0):(Me=!0,Jt.__version=G.version);let un=Jt.currentProgram;Me===!0&&(un=Ws(G,B,F));let kl=!1,ms=!1,La=!1,He=un.getUniforms(),dn=Jt.uniforms;if(_t.useProgram(un.program)&&(kl=!0,ms=!0,La=!0),G.id!==P&&(P=G.id,ms=!0),kl||b!==A){He.setValue(O,"projectionMatrix",A.projectionMatrix),He.setValue(O,"viewMatrix",A.matrixWorldInverse);let li=He.map.cameraPosition;li!==void 0&&li.setValue(O,Vt.setFromMatrixPosition(A.matrixWorld)),Ot.logarithmicDepthBuffer&&He.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&He.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,ms=!0,La=!0)}if(F.isSkinnedMesh){He.setOptional(O,F,"bindMatrix"),He.setOptional(O,F,"bindMatrixInverse");let li=F.skeleton;li&&(Ot.floatVertexTextures?(li.boneTexture===null&&li.computeBoneTexture(),He.setValue(O,"boneTexture",li.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(He.setOptional(O,F,"batchingTexture"),He.setValue(O,"batchingTexture",F._matricesTexture,R));let Da=H.morphAttributes;if((Da.position!==void 0||Da.normal!==void 0||Da.color!==void 0&&Ot.isWebGL2===!0)&&jt.update(F,H,un),(ms||Jt.receiveShadow!==F.receiveShadow)&&(Jt.receiveShadow=F.receiveShadow,He.setValue(O,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(dn.envMap.value=Dt,dn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),ms&&(He.setValue(O,"toneMappingExposure",_.toneMappingExposure),Jt.needsLights&&mu(dn,La),dt&&G.fog===!0&&lt.refreshFogUniforms(dn,dt),lt.refreshMaterialUniforms(dn,G,q,k,St),ts.upload(O,Fl(Jt),dn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ts.upload(O,Fl(Jt),dn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&He.setValue(O,"center",F.center),He.setValue(O,"modelViewMatrix",F.modelViewMatrix),He.setValue(O,"normalMatrix",F.normalMatrix),He.setValue(O,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let li=G.uniformsGroups;for(let Ua=0,xu=li.length;Ua<xu;Ua++)if(Ot.isWebGL2){let Hl=li[Ua];re.update(Hl,un),re.bind(Hl,un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return un}function mu(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function gu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,B,H){qt.get(A.texture).__webglTexture=B,qt.get(A.depthTexture).__webglTexture=H;let G=qt.get(A);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){let H=qt.get(A);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,H=0){E=A,T=B,S=H;let G=!0,F=null,dt=!1,bt=!1;if(A){let Dt=qt.get(A);Dt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(O.FRAMEBUFFER,null),G=!1):Dt.__webglFramebuffer===void 0?R.setupRenderTarget(A):Dt.__hasExternalTextures&&R.rebindTextures(A,qt.get(A.texture).__webglTexture,qt.get(A.depthTexture).__webglTexture);let $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(bt=!0);let Ft=qt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ft[B])?F=Ft[B][H]:F=Ft[B],dt=!0):Ot.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?F=qt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[H]:F=Ft,M.copy(A.viewport),I.copy(A.scissor),U=A.scissorTest}else M.copy(J).multiplyScalar(q).floor(),I.copy(et).multiplyScalar(q).floor(),U=ft;if(_t.bindFramebuffer(O.FRAMEBUFFER,F)&&Ot.drawBuffers&&G&&_t.drawBuffers(A,F),_t.viewport(M),_t.scissor(I),_t.setScissorTest(U),dt){let Dt=qt.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Dt.__webglTexture,H)}else if(bt){let Dt=qt.get(A.texture),$t=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.__webglTexture,H||0,$t)}P=-1},this.readRenderTargetPixels=function(A,B,H,G,F,dt,bt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct){_t.bindFramebuffer(O.FRAMEBUFFER,Ct);try{let Dt=A.texture,$t=Dt.format,Ft=Dt.type;if($t!==_i&&xt.convert($t)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ht=Ft===Cs&&(At.has("EXT_color_buffer_half_float")||Ot.isWebGL2&&At.has("EXT_color_buffer_float"));if(Ft!==sn&&xt.convert(Ft)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===Qi&&(Ot.isWebGL2||At.has("OES_texture_float")||At.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-G&&H>=0&&H<=A.height-F&&O.readPixels(B,H,G,F,xt.convert($t),xt.convert(Ft),dt)}finally{let Dt=E!==null?qt.get(E).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(A,B,H=0){let G=Math.pow(2,-H),F=Math.floor(B.image.width*G),dt=Math.floor(B.image.height*G);R.setTexture2D(B,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,A.x,A.y,F,dt),_t.unbindTexture()},this.copyTextureToTexture=function(A,B,H,G=0){let F=B.image.width,dt=B.image.height,bt=xt.convert(H.format),Ct=xt.convert(H.type);R.setTexture2D(H,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment),B.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,A.x,A.y,F,dt,bt,Ct,B.image.data):B.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,bt,B.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,G,A.x,A.y,bt,Ct,B.image),G===0&&H.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(A,B,H,G,F=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let dt=A.max.x-A.min.x+1,bt=A.max.y-A.min.y+1,Ct=A.max.z-A.min.z+1,Dt=xt.convert(G.format),$t=xt.convert(G.type),Ft;if(G.isData3DTexture)R.setTexture3D(G,0),Ft=O.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)R.setTexture2DArray(G,0),Ft=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);let Ht=O.getParameter(O.UNPACK_ROW_LENGTH),Ee=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ei=O.getParameter(O.UNPACK_SKIP_PIXELS),Ne=O.getParameter(O.UNPACK_SKIP_ROWS),Ci=O.getParameter(O.UNPACK_SKIP_IMAGES),ve=H.isCompressedTexture?H.mipmaps[F]:H.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ve.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ve.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),H.isDataTexture||H.isData3DTexture?O.texSubImage3D(Ft,F,B.x,B.y,B.z,dt,bt,Ct,Dt,$t,ve.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ft,F,B.x,B.y,B.z,dt,bt,Ct,Dt,ve.data)):O.texSubImage3D(Ft,F,B.x,B.y,B.z,dt,bt,Ct,Dt,$t,ve),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ht),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ee),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ei),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ne),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ci),F===0&&G.generateMipmaps&&O.generateMipmap(Ft),_t.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),_t.unbindTexture()},this.resetState=function(){T=0,S=0,E=null,_t.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===dl?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===ia?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ie?Mn:Lh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Mn?Ie:Oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Ho=class extends Ls{};Ho.prototype.isWebGL1Renderer=!0;var zr=class r{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},kr=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ds=class extends pe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zn=new ce,lh=new ce,fr=[],ch=new zi,lg=new ce,bs=new yt,Ms=new ki,Hr=class extends yt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ds(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,lg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Zn),ch.copy(t.boundingBox).applyMatrix4(Zn),this.boundingBox.union(ch)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Zn),Ms.copy(t.boundingSphere).applyMatrix4(Zn),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(i),t.ray.intersectsSphere(Ms)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Zn),lh.multiplyMatrices(i,Zn),bs.matrixWorld=lh,bs.raycast(t,fr);for(let a=0,o=fr.length;a<o;a++){let l=fr[a];l.instanceId=s,l.object=this,e.push(l)}fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ds(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Sn=class extends Hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},hh=new C,uh=new C,dh=new ce,fo=new Ps,pr=new ki,Go=class extends ze{constructor(t=new ne,e=new Sn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)hh.fromBufferAttribute(e,n-1),uh.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=hh.distanceTo(uh);t.setAttribute("lineDistance",new Ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(n),pr.radius+=s,t.ray.intersectsSphere(pr)===!1)return;dh.copy(n).invert(),fo.copy(t.ray).applyMatrix4(dh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){let m=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let _=m,v=y-1;_<v;_+=f){let T=p.getX(_),S=p.getX(_+1);if(c.fromBufferAttribute(g,T),h.fromBufferAttribute(g,S),fo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let P=t.ray.origin.distanceTo(d);P<t.near||P>t.far||e.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let _=m,v=y-1;_<v;_+=f){if(c.fromBufferAttribute(g,_),h.fromBufferAttribute(g,_+1),fo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let S=t.ray.origin.distanceTo(d);S<t.near||S>t.far||e.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},fh=new C,ph=new C,os=class extends Go{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)fh.fromBufferAttribute(e,n),ph.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+fh.distanceTo(ph);t.setAttribute("lineDistance",new Ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Us=class extends Hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mh=new ce,Vo=new Ps,mr=new ki,gr=new C,ls=class extends ze{constructor(t=new ne,e=new Us){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(n),mr.radius+=s,t.ray.intersectsSphere(mr)===!1)return;mh.copy(n).invert(),Vo.copy(t.ray).applyMatrix4(mh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);gr.fromBufferAttribute(u,g),gh(gr,g,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)gr.fromBufferAttribute(u,p),gh(gr,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function gh(r,t,e,i,n,s,a){let o=Vo.distanceSqToPoint(r);if(o<e){let l=new C;Vo.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var Gr=class extends di{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new pt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new C,n=[],s=[],a=[],o=new C,l=new ce;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Fe(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Fe(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ns=class extends fi{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let i=e||new pt,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wo=class extends Ns{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ml(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var xr=new C,po=new ml,mo=new ml,go=new ml,Bs=class extends fi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new C){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(xr.subVectors(n[0],n[1]).add(n[0]),c=xr);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(xr.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=xr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),po.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),mo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),go.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(po.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),mo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),go.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(po.calc(l),mo.calc(l),go.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new C().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function xh(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function cg(r,t){let e=1-r;return e*e*t}function hg(r,t){return 2*(1-r)*r*t}function ug(r,t){return r*r*t}function Ts(r,t,e,i){return cg(r,t)+hg(r,e)+ug(r,i)}function dg(r,t){let e=1-r;return e*e*e*t}function fg(r,t){let e=1-r;return 3*e*e*r*t}function pg(r,t){return 3*(1-r)*r*r*t}function mg(r,t){return r*r*r*t}function As(r,t,e,i,n){return dg(r,t)+fg(r,e)+pg(r,i)+mg(r,n)}var Vr=class extends fi{constructor(t=new pt,e=new pt,i=new pt,n=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new pt){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(As(t,n.x,s.x,a.x,o.x),As(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xo=class extends fi{constructor(t=new C,e=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new C){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(As(t,n.x,s.x,a.x,o.x),As(t,n.y,s.y,a.y,o.y),As(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wr=class extends fi{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends fi{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xr=class extends fi{constructor(t=new pt,e=new pt,i=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new pt){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Ts(t,n.x,s.x,a.x),Ts(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yo=class extends fi{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Ts(t,n.x,s.x,a.x),Ts(t,n.y,s.y,a.y),Ts(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qr=class extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(xh(o,l.x,c.x,h.x,u.x),xh(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new pt().fromArray(n))}return this}},yh=Object.freeze({__proto__:null,ArcCurve:Wo,CatmullRomCurve3:Bs,CubicBezierCurve:Vr,CubicBezierCurve3:Xo,EllipseCurve:Ns,LineCurve:Wr,LineCurve3:qo,QuadraticBezierCurve:Xr,QuadraticBezierCurve3:Yo,SplineCurve:qr}),$o=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new yh[n.type]().fromJSON(n))}return this}},Zo=class extends $o{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Wr(this.currentPoint.clone(),new pt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Xr(this.currentPoint.clone(),new pt(t,e),new pt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new Vr(this.currentPoint.clone(),new pt(t,e),new pt(i,n),new pt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new qr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){let c=new Ns(t,e,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Jo=class r extends ne{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Fe(n,0,Math.PI*2);let s=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new pt,f=new C,p=new C,x=new C,g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=e;y++){let _=i+y*h*n,v=Math.sin(_),T=Math.cos(_);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*T,a.push(u.x,u.y,u.z),d.x=y/e,d.y=S/(t.length-1),o.push(d.x,d.y);let E=l[3*S+0]*v,P=l[3*S+1],b=l[3*S+0]*T;c.push(E,P,b)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,T=v,S=v+t.length,E=v+t.length+1,P=v+1;s.push(T,S,P),s.push(E,P,S)}this.setIndex(s),this.setAttribute("position",new Ut(a,3)),this.setAttribute("uv",new Ut(o,2)),this.setAttribute("normal",new Ut(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},Yr=class r extends Jo{constructor(t=1,e=1,i=4,n=8){let s=new Zo;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}},$r=class r extends ne{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],l=[],c=new C,h=new pt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ut(a,3)),this.setAttribute("normal",new Ut(o,3)),this.setAttribute("uv",new Ut(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pe=class r extends ne{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],p=0,x=[],g=i/2,m=0;y(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ut(u,3)),this.setAttribute("normal",new Ut(d,3)),this.setAttribute("uv",new Ut(f,2));function y(){let v=new C,T=new C,S=0,E=(e-t)/i;for(let P=0;P<=s;P++){let b=[],M=P/s,I=M*(e-t)+t;for(let U=0;U<=n;U++){let Y=U/n,L=Y*l+o,N=Math.sin(L),k=Math.cos(L);T.x=I*N,T.y=-M*i+g,T.z=I*k,u.push(T.x,T.y,T.z),v.set(N,E,k).normalize(),d.push(v.x,v.y,v.z),f.push(Y,1-M),b.push(p++)}x.push(b)}for(let P=0;P<n;P++)for(let b=0;b<s;b++){let M=x[b][P],I=x[b+1][P],U=x[b+1][P+1],Y=x[b][P+1];h.push(M,I,Y),h.push(I,U,Y),S+=6}c.addGroup(m,S,0),m+=S}function _(v){let T=p,S=new pt,E=new C,P=0,b=v===!0?t:e,M=v===!0?1:-1;for(let U=1;U<=n;U++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;let I=p;for(let U=0;U<=n;U++){let L=U/n*l+o,N=Math.cos(L),k=Math.sin(L);E.x=b*k,E.y=g*M,E.z=b*N,u.push(E.x,E.y,E.z),d.push(0,M,0),S.x=N*.5+.5,S.y=k*.5*M+.5,f.push(S.x,S.y),p++}for(let U=0;U<n;U++){let Y=T+U,L=I+U;v===!0?h.push(L,L+1,Y):h.push(L+1,L,Y),P+=3}c.addGroup(m,P,v===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vi=class r extends Pe{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zr=class r extends ne{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Ut(s,3)),this.setAttribute("normal",new Ut(s.slice(),3)),this.setAttribute("uv",new Ut(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new C,v=new C,T=new C;for(let S=0;S<e.length;S+=3)f(e[S+0],_),f(e[S+1],v),f(e[S+2],T),l(_,v,T,y)}function l(y,_,v,T){let S=T+1,E=[];for(let P=0;P<=S;P++){E[P]=[];let b=y.clone().lerp(v,P/S),M=_.clone().lerp(v,P/S),I=S-P;for(let U=0;U<=I;U++)U===0&&P===S?E[P][U]=b:E[P][U]=b.clone().lerp(M,U/I)}for(let P=0;P<S;P++)for(let b=0;b<2*(S-P)-1;b++){let M=Math.floor(b/2);b%2===0?(d(E[P][M+1]),d(E[P+1][M]),d(E[P][M])):(d(E[P][M+1]),d(E[P+1][M+1]),d(E[P+1][M]))}}function c(y){let _=new C;for(let v=0;v<s.length;v+=3)_.x=s[v+0],_.y=s[v+1],_.z=s[v+2],_.normalize().multiplyScalar(y),s[v+0]=_.x,s[v+1]=_.y,s[v+2]=_.z}function h(){let y=new C;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];let v=g(y)/2/Math.PI+.5,T=m(y)/Math.PI+.5;a.push(v,1-T)}p(),u()}function u(){for(let y=0;y<a.length;y+=6){let _=a[y+0],v=a[y+2],T=a[y+4],S=Math.max(_,v,T),E=Math.min(_,v,T);S>.9&&E<.1&&(_<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,_){let v=y*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function p(){let y=new C,_=new C,v=new C,T=new C,S=new pt,E=new pt,P=new pt;for(let b=0,M=0;b<s.length;b+=9,M+=6){y.set(s[b+0],s[b+1],s[b+2]),_.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),S.set(a[M+0],a[M+1]),E.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),T.copy(y).add(_).add(v).divideScalar(3);let I=g(T);x(S,M+0,y,I),x(E,M+2,_,I),x(P,M+4,v,I)}}function x(y,_,v,T){T<0&&y.x===1&&(a[_]=y.x-1),v.x===0&&v.z===0&&(a[_]=T/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var Je=class r extends Zr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},cs=class r extends Zr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Jr=class r extends ne{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new C,p=new pt;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){let m=s+g/i*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<n;x++){let g=x*(i+1);for(let m=0;m<i;m++){let y=m+g,_=y,v=y+i+1,T=y+i+2,S=y+1;o.push(_,v,S),o.push(v,T,S)}}this.setIndex(o),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(c,3)),this.setAttribute("uv",new Ut(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ge=class r extends ne{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let y=[],_=m/i,v=0;m===0&&a===0?v=.5/e:m===i&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){let S=T/e;u.x=-t*Math.cos(n+S*s)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(n+S*s)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(S+v,1-_),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){let _=h[m][y+1],v=h[m][y],T=h[m+1][y],S=h[m+1][y+1];(m!==0||a>0)&&f.push(_,v,S),(m!==i-1||l<Math.PI)&&f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new Ut(p,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var En=class r extends ne{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=i;f++)for(let p=0;p<=n;p++){let x=p/n*s,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=n;p++){let x=(n+1)*f+p-1,g=(n+1)*(f-1)+p-1,m=(n+1)*(f-1)+p,y=(n+1)*f+p;a.push(x,g,y),a.push(g,m,y)}this.setIndex(a),this.setAttribute("position",new Ut(o,3)),this.setAttribute("normal",new Ut(l,3)),this.setAttribute("uv",new Ut(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Nt=class extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function yr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function gg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var hs=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ko=class extends hs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_c,endingEnd:_c}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case vc:s=t,o=2*e-i;break;case bc:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vc:a=t,l=2*i-e;break;case bc:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let T=0;T!==o;++T)s[T]=m*a[h+T]+y*a[c+T]+_*a[l+T]+v*a[u+T];return s}},jo=class extends hs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Qo=class extends hs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},bi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yr(e,this.TimeBufferType),this.values=yr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:yr(t.times,Array),values:yr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ko(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case br:e=this.InterpolantFactoryMethodLinear;break;case Ha:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return Ha}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&gg(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ha,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=br;var wn=class extends bi{};wn.prototype.ValueTypeName="bool";wn.prototype.ValueBufferType=Array;wn.prototype.DefaultInterpolation=vr;wn.prototype.InterpolantFactoryMethodLinear=void 0;wn.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends bi{};tl.prototype.ValueTypeName="color";var el=class extends bi{};el.prototype.ValueTypeName="number";var il=class extends hs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)wi.slerpFlat(s,0,a,c-o,a,c,l);return s}},Os=class extends bi{InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}};Os.prototype.ValueTypeName="quaternion";Os.prototype.DefaultInterpolation=br;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Tn=class extends bi{};Tn.prototype.ValueTypeName="string";Tn.prototype.ValueBufferType=Array;Tn.prototype.DefaultInterpolation=vr;Tn.prototype.InterpolantFactoryMethodLinear=void 0;Tn.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends bi{};nl.prototype.ValueTypeName="vector";var sl=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},xg=new sl,rl=class{constructor(t){this.manager=t!==void 0?t:xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};rl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fs=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Kr=class extends Fs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},xo=new ce,_h=new C,vh=new C,jr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;_h.setFromMatrixPosition(t.matrixWorld),e.position.copy(_h),vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vh),e.updateMatrixWorld(),xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var bh=new ce,Ss=new C,yo=new C,al=class extends jr{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ss.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ss),yo.copy(i.position),yo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(yo),i.updateMatrixWorld(),n.makeTranslation(-Ss.x,-Ss.y,-Ss.z),bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh)}},Qr=class extends Fs{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new al}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ol=class extends jr{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ta=class extends Fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new ol}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var gl="\\[\\]\\.:\\/",yg=new RegExp("["+gl+"]","g"),xl="[^"+gl+"]",_g="[^"+gl.replace("\\.","")+"]",vg=/((?:WC+[\/:])*)/.source.replace("WC",xl),bg=/(WCOD+)?/.source.replace("WCOD",_g),Mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),Sg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),Eg=new RegExp("^"+vg+bg+Mg+Sg+"$"),wg=["material","materials","bones","map"],ll=class{constructor(t,e,i){let n=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xe=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yg,"")}static parseTrackName(t){let e=Eg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);wg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=ll;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ux=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ht=(r,t,e)=>Math.max(t,Math.min(e,r)),ct=(r,t,e)=>r+(t-r)*e,Se=(r,t,e)=>{let i=ht((e-r)/(t-r),0,1);return i*i*(3-2*i)},Gt=(r,t,e,i)=>ct(r,t,1-Math.exp(-e*i)),yl=Math.PI*2;function Gi(r){let t=r>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ra(r,t){let e=Math.imul(r,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Rn(r,t){let e=Math.floor(r),i=Math.floor(t),n=r-e,s=t-i,a=n*n*(3-2*n),o=s*s*(3-2*s);return ct(ct(ra(e,i),ra(e+1,i),a),ct(ra(e,i+1),ra(e+1,i+1),a),o)}var aa=(r,t)=>Rn(r,t)*.6+Rn(r*2.1+7.3,t*2.1+3.1)*.3+Rn(r*4.3+1.7,t*4.3+9.2)*.1;function Tg(r,t,e,i,n,s){let a=n-e,o=s-i,l=a*a+o*o,c=l>0?((r-e)*a+(t-i)*o)/l:0;c=ht(c,0,1);let h=e+a*c-r,u=i+o*c-t;return Math.sqrt(h*h+u*u)}function oa(r,t,e){let i=1e9;for(let n=0;n<e.length-1;n++)i=Math.min(i,Tg(r,t,e[n][0],e[n][1],e[n+1][0],e[n+1][1]));return i}function Vi(r,t){let e=(t-r)%yl;return e>Math.PI&&(e-=yl),e<-Math.PI&&(e+=yl),e}function la(r,t){let e=0;for(;e<r.length-2&&t>r[e+1][0];)e++;let i=r[e],n=r[e+1];return{a:i,b:n,k:ht((t-i[0])/(n[0]-i[0]),0,1)}}function _l(r){r=(r%24+24)%24;let t=Math.floor(r),e=Math.floor((r-t)*60);return String(t).padStart(2,"0")+":"+String(e).padStart(2,"0")}var $={minX:-125,maxX:110,minZ:-110,maxZ:125},Xh=2,Ag=6,Wi=5,ri=2.15,Rg=[[0,-52],[0,-36],[-28,-20],[-66,-13],[-130,-11]],qh=[[52,-28,6],[72,-36,7],[90,-12,6.5],[66,-4,5.5],[86,16,6]],rt={plaza:[-44,44],stage:[-44,32.6],fest:[-44,36.6],substation:[-20,20],terminal:[-20,62],tower:[-36,20],mateo:[34,25],valeria:[-20,27.8],lucia:[-12.6,66.2],windT:qh.map(r=>[r[0],r[1]]),windTx:[48,8],dam:{x0:-24,x1:24,z0:-58,z1:-52,top:6.6},gates:[-18.66,-13.82,-8.98,-4.14],turbs:[5.5,10,14.5,19],solar:[[-74,-68],[-59,-68],[-74,-87],[-59,-87]],inverter:[-66.5,-77.5],batYard:[-43,-69],batConsole:[-43,-60.2],boiler:[60,63],chips:[48,58],bioSub:[73,56],bridge:{x:-46,z0:-31,z1:-3},stops:[[-24,71.8,"Terminal de la Rambla"],[-44,52.3,"Plaza Matriz"],[30.2,-35.5,"Central Hidroel\xE9ctrica"],[38.5,13.5,"Parque E\xF3lico"],[-52,-56.2,"Parque Solar"],[40.5,60,"Planta de Biomasa"]],startCapi:[-28,31]},Cg=[[-90,20,6,90],[-92,-34,-106,-58],[40,82,50,72],[42,56,2,14],[-52,-40,-34,0],[-34,34,-62,-50],[27,41,19,31]];function Pg(r,t){let e=0;for(let i of Cg){let n=Math.min(r-i[0],i[1]-r,t-i[2],i[3]-t);e=Math.max(e,Se(-6,2,n))}return e}function Ti(r,t){let e=82+2.5*Math.sin(r*.045)-t,i=r-(-90+2.5*Math.sin(t*.05)),n=8,s=ht(.5+.5*(i-e)/n,0,1);return ct(i,e,s)-n*s*(1-s)}var ks=(r,t)=>oa(r,t,Rg);function Cn(r,t){let e=20+12*Se(-58,-85,t);return Math.min(e-Math.abs(r),-56-t)}function Ig(r,t){let e=Pg(r,t),i=0;for(let[a,o,l]of qh){let c=r-a,h=t-o;i+=l*Math.exp(-(c*c+h*h)/340)}let n=Se(22,44,r),s=i+n*(1*Math.sin(r*.11+1)*Math.cos(t*.09)+.9)+(aa(r*.06+40,t*.06+40)-.5)*1.6;return(Ag-Xh)*Se(-36,-54,t)+s*(1-e)}function Xi(r,t){let e=Ti(r,t),i=ct(-3.2,Xh+Ig(r,t),Se(-5,2.5,e)),n=ks(r,t),s=8+9*Se(-40,-52,t);n<s+4.5&&t>-58&&(i=Math.min(i,ct(-2.6,i,Se(s,s+4.5,n))));let a=Cn(r,t);return a>-4.5&&(i=ct(i,1,Se(-4.5,.5,a))),i}function qi(r,t){return t<-56&&20+12*Se(-58,-85,t)-Math.abs(r)>-4.5?Wi:0}var Hs=[{id:"ciudad",name:"Ciudad Costera y Rambla",x:-46,z:46,color:"#ffd166"},{id:"hidro",name:"Central Hidroel\xE9ctrica",x:0,z:-55,color:"#4cc9f0"},{id:"eolica",name:"Parque E\xF3lico de las Cuchillas",x:70,z:-12,color:"#e8f1f2"},{id:"solar",name:"Parque Solar y Bater\xEDas",x:-62,z:-76,color:"#ffb703"},{id:"biomasa",name:"Planta de Biomasa",x:60,z:62,color:"#90be6d"}];var ke={hydro:36,wind:8,solar:12,bio:40,batP:60,batE:120,bus:16},Lg=[[0,108],[3,96],[6,118],[9,160],[12,165],[15,156],[18,186],[20,210],[21.5,216],[23,184],[24,108]],ca=class{constructor(){this.t=0,this.hour=9,this.clockRate=1/20,this.energyRate=1/20,this.holdAt=null,this.windBase=.6,this.windTarget=.6,this.wind=.6,this.windDir=.5,this.gustiness=.1,this.cloud=0,this.cloudTarget=0,this.demandExtra=0,this.demandExtraTarget=0,this.demandMul=1,this.hydro={t:[0,1,2,3].map(()=>({on:!1,fault:!1})),gates:[0,1,2,3].map(()=>({reg:!1}))},this.windP={t:[0,1,2,3,4].map(()=>({on:!0,fault:!1})),tx:!1,txFault:!1},this.solar={a:[0,1,2,3].map(()=>({on:!1,fault:!1}))},this.bio={on:!1,fault:!1,chips:!1,pressure:0,routed:!1},this.bat={connected:!1,soc:.2,mode:"auto",p:0},this.buses=!1,this.fossil=0,this.freq=50,this.windUnit=[0,0,0,0,0],this.hydroUnit=[0,0,0,0],this.solarUnit=[0,0,0,0],this.out={hydro:0,wind:0,solar:0,bio:0,bat:0,fossil:0,gen:0,demand:160,ren:0,pct:0,surplus:0,unmet:0},this.step(0)}sun(t=this.hour){let e=Math.sin(Math.PI*(t-6)/12);return e>0?Math.pow(e,.75):0}night(t=this.hour){return t>=17.8&&t<20?ht((t-17.8)/2,0,1):t>=20||t<5.4?1:t<7?ht(1-(t-5.4)/1.6,0,1):0}demandAt(t){let{a:e,b:i,k:n}=la(Lg,t);return ct(e[1],i[1],n)}head(){let t=this.hydro.gates.filter(e=>e.reg).length;return .4+.3*ht(t-2,0,2)}step(t){if(this.t+=t,t>0&&this.clockRate>0){let x=this.hour,g=x+t*this.clockRate;if(this.holdAt!=null){let m=this.holdAt-x;m<0&&(m+=24),m<=t*this.clockRate+1e-6&&(g=this.holdAt)}this.hour=(g%24+24)%24}this.windBase+=ht(this.windTarget-this.windBase,-.12*t,.12*t),this.cloud+=ht(this.cloudTarget-this.cloud,-.15*t,.15*t);let e=(Math.sin(this.t*.21)+.6*Math.sin(this.t*.53+1)+.4*Math.sin(this.t*1.13+2))/2;this.wind=ht(this.windBase+this.gustiness*e,0,1),this.windDir=.55+.35*Math.sin(this.t*.03),this.demandExtra+=ht(this.demandExtraTarget-this.demandExtra,-6*t,6*t);let i=this.out,n=this.head();i.hydro=0,this.hydro.t.forEach((x,g)=>{let m=x.on&&!x.fault?ke.hydro*n:0;this.hydroUnit[g]=m,i.hydro+=m}),i.wind=0;let s=this.windP.tx&&!this.windP.txFault;this.windP.t.forEach((x,g)=>{let m=ht(this.wind*(.94+.12*Math.sin(this.t*.31+g*1.7)),0,1),y=s&&x.on&&!x.fault?ke.wind*m:0;this.windUnit[g]=y,i.wind+=y}),i.solar=0;let a=this.sun()*(1-.65*this.cloud);this.solar.a.forEach((x,g)=>{let m=x.on&&!x.fault?ke.solar*a:0;this.solarUnit[g]=m,i.solar+=m});let o=this.bio.on&&!this.bio.fault?1:0;this.bio.pressure+=ht(o-this.bio.pressure,-.2*t,.3*t),i.bio=ke.bio*this.bio.pressure,i.demand=(this.demandAt(this.hour)+this.demandExtra+(this.buses?ke.bus*(.6+.4*this.night()):0))*this.demandMul,i.ren=i.hydro+i.wind+i.solar+i.bio;let l=i.ren-i.demand,c=this.bat,h=t*this.energyRate,u=0;c.connected&&(l>0&&c.mode!=="hold"?u=-Math.min(l,ke.batP,h>0?(1-c.soc)*ke.batE/h:ke.batP):l<0&&c.mode==="auto"&&(u=Math.min(-l,ke.batP,h>0?c.soc*ke.batE/h:ke.batP)),c.soc=ht(c.soc-u*h/ke.batE,0,1)),c.p=u,i.bat=u;let d=Math.max(0,u),f=Math.max(0,i.demand-i.ren-d);this.fossil+=ht(f-this.fossil,-30*t,14*t),this.clockRate>1&&(this.fossil=f),this.fossil=ht(this.fossil,0,i.demand),i.fossil=this.fossil,i.unmet=Math.max(0,f-this.fossil),i.surplus=Math.max(0,l+u),i.gen=Math.min(i.ren,i.demand+Math.max(0,-u))+d+i.fossil,i.pct=100*ht((Math.min(i.ren,i.demand)+d)/i.demand,0,1),i.pct>99.95&&(i.pct=100);let p=50-1.5*ht(i.unmet/(.1*i.demand),0,1)-(i.fossil>2?.1:0);this.freq+=(p-this.freq)*Math.min(1,t*2.5),t===0&&(this.freq=p)}get optimal(){return this.out.pct>=100&&this.freq>49.95}};function Gs(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new ne,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Yh(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let p=Yh(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Yh(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}let a=new t(s),o=0;for(let c=0;c<r.length;++c)a.set(r[c].array,o),o+=r[c].array.length;let l=new pe(a,e,i);return n!==void 0&&(l.gpuType=n),l}var it={cream:15918276,terra:13133642,ochre:14856796,rose:15317926,white:16118248,celeste:9424362,concrete:12432808,concreteD:10261898,asphalt:4935768,sidewalk:13617596,granite:14461852,steel:7831692,steelD:4804698,wood:9069116,yellow:16763196,cyan:5951999,red:15026253,glass:2899536,gravel:13482899,green:6270538},ha=new ce,Zh=new wi,Jh=new rs,vl=new C,bl=new C,Xe=new Et,Ai=new Et,$h=new Qt(1,1,1).toNonIndexed(),Dg=Gi(77);function Kh(r,t,e){let i=r.attributes.position.count,n=new Float32Array(i*3);Xe.set(t),e&&Xe.offsetHSL(0,0,(Dg()-.5)*e);for(let s=0;s<i;s++)n[s*3]=Xe.r,n[s*3+1]=Xe.g,n[s*3+2]=Xe.b;return r.setAttribute("color",new pe(n,3)),r.attributes.uv&&r.deleteAttribute("uv"),r}var Ri=class{constructor(){this.list=[]}add(t,e,i,n,s,a=1,o=1,l=1,c=0,h=0,u=0,d=.03){let f=t.index?t.toNonIndexed():t.clone();return ha.compose(vl.set(i,n,s),Zh.setFromEuler(Jh.set(c,h,u)),bl.set(a,o,l)),f.applyMatrix4(ha),this.list.push(Kh(f,e,d)),this}box(t,e,i,n,s,a,o,l=0,c=0,h=0){return this.add($h,o,t,e,i,n,s,a,c,l,h)}boxB(t,e,i,n,s,a,o,l=0){return this.add($h,o,t,e+s/2,i,n,s,a,0,l,0)}cyl(t,e,i,n,s,a,o,l=8,c=0,h=0,u=0){return this.add(new Pe(n,s,a,l),o,t,e+(c||u?0:a/2),i,1,1,1,c,h,u)}sph(t,e,i,n,s,a=1,o=1){return this.add(new Je(n,o),s,t,e,i,1,a,1)}mesh(t){if(!this.list.length)return null;let e=Gs(this.list,!1);return this.list.forEach(i=>i.dispose()),this.list=[],new yt(e,t)}};function ai(r,t,e,i={}){let n=document.createElement("canvas");n.width=r,n.height=t,e(n.getContext("2d"),r,t);let s=new Gr(n);return s.colorSpace=Ie,i.repeat&&(s.wrapS=s.wrapT=an,s.repeat.set(i.repeat,i.repeat)),i.pixel&&(s.magFilter=Oe),s}function da(r,t={}){let e=t.w||512,i=t.h||128;return ai(e,i,n=>{t.bg&&(n.fillStyle=t.bg,n.fillRect(0,0,e,i)),t.border&&(n.strokeStyle=t.border,n.lineWidth=10,n.strokeRect(5,5,e-10,i-10)),n.fillStyle=t.fg||"#fff",n.textAlign="center",n.textBaseline="middle";let s=t.size||64;for(n.font=`${s}px "Lilita One","Arial Black",Impact,sans-serif`;n.measureText(r).width>e-40&&s>12;)s-=4,n.font=`${s}px "Lilita One","Arial Black",Impact,sans-serif`;t.stroke&&(n.lineWidth=8,n.strokeStyle=t.stroke,n.lineJoin="round",n.strokeText(r,e/2,i/2+4)),n.fillText(r,e/2,i/2+4)})}var Ug=[[0,660016,1055808,10334975,1,1.05],[5.2,923446,1385034,10334975,1,1.05],[6.4,15902645,16236976,16755082,1.5,1.1],[7.6,10868466,13625074,16770756,2.5,1.45],[12,6470640,12575733,16777215,3.1,1.7],[16.8,8176878,13624302,16773327,2.8,1.55],[18.5,16032346,16302714,16750152,1.9,1.15],[19.5,4864632,6965882,11565728,.9,.95],[20.4,791604,1055808,10334975,1,1.05],[24,660016,1055808,10334975,1,1.05]],Ng=`
uniform float uTime; varying vec3 vWorld;
#include <fog_pars_vertex>
void main(){
  vec4 w=modelMatrix*vec4(position,1.0);
  w.y+=sin(w.x*0.35+uTime*1.3)*0.10+sin(w.z*0.42-uTime*1.1)*0.09+sin((w.x+w.z)*0.18+uTime*0.7)*0.12;
  vWorld=w.xyz; vec4 mvPosition=viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
  #include <fog_vertex>
}`,Bg=`
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
}`,Og={euca:{th:6.4,tr:.2,tc:14538440,crowns:[[.72,1.25,1.9,5082998],[1,.95,1.5,6530437]]},native:{th:2.3,tr:.28,tc:7031343,crowns:[[1.05,1.9,1.5,5216831]]},ceibo:{th:2.1,tr:.26,tc:6243888,crowns:[[1,1.7,1.25,5018690],[1.45,.9,.7,14825535]]},jaca:{th:2.6,tr:.26,tc:5916214,crowns:[[1.05,1.9,1.4,9404374]]},ombu:{th:2.6,tr:1,tc:8020552,crowns:[[1.1,4.6,2.3,4164154],[1.5,3,1.7,4954692]]},palm:{th:6.2,tr:.26,tc:9072461,frond:2.7,fc:5216840},butia:{th:3.3,tr:.42,tc:8088149,frond:2.1,fc:8824978},bush:{th:0,tr:0,tc:0,crowns:[[.5,.9,.7,5809480]]}},ua=class{constructor(t,e){this.scene=t,this.renderer=e,this.rand=Gi(20260),this.batch=new Ri,this.cityBatch=new Ri,this.winBatch=[new Ri,new Ri,new Ri],this.glassBatch=new Ri,this.screenBatch=new Ri,this.platforms=[],this.boxes=[],this.circles=[],this.occ=[],this.inter={},this.interList=[],this.trees=[],this.lamps=[],this.houses=[],this.roads=[],this.updaters=[],this.dyn={},this.lines={},this.time=0,this.night=0,this.power=[0,0,0],this.flicker=0,this.sunDir=new C(.5,.8,-.3),this.makeMaterials(),this.buildTerrain(),this.buildWater(),this.buildSky()}makeMaterials(){let t=ai(64,64,e=>{let i=Gi(5);for(let n=0;n<64;n+=2)for(let s=0;s<64;s+=2){let a=222+Math.floor(i()*33);e.fillStyle=`rgb(${a},${a},${a})`,e.fillRect(s,n,2,2)}},{repeat:70});this.clip=[new Qe(new C(0,-1,0),80),new Qe(new C(1,0,0),0),new Qe(new C(-1,0,0),0),new Qe(new C(0,0,-1),0)],this.mats={city:new Nt({vertexColors:!0,flatShading:!0,roughness:.92,metalness:0,side:Re,clippingPlanes:this.clip,clipIntersection:!0}),solid:new Nt({vertexColors:!0,flatShading:!0,roughness:.92,metalness:0}),terrain:new Nt({vertexColors:!0,flatShading:!0,roughness:1,metalness:0,map:t}),glass:new Nt({color:11461631,transparent:!0,opacity:.32,roughness:.15,metalness:.2,depthWrite:!1}),win:[0,1,2].map(()=>new Nt({color:3426654,emissive:16762222,emissiveIntensity:0,roughness:.4,clippingPlanes:this.clip,clipIntersection:!0})),screen:new Nt({color:1060928,emissive:5232383,emissiveIntensity:1.1,roughness:.4}),bulb:new Nt({color:16774877,emissive:16770728,emissiveIntensity:0}),beacon:new Nt({color:8396832,emissive:16722474,emissiveIntensity:0}),charger:new Nt({color:1784362,emissive:5111712,emissiveIntensity:0}),pool:new we({map:ai(64,64,e=>{let i=e.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255,225,160,0.85)"),i.addColorStop(1,"rgba(255,225,160,0)"),e.fillStyle=i,e.fillRect(0,0,64,64)}),transparent:!0,opacity:0,depthWrite:!1,blending:es})}}buildTerrain(){let e=$.maxX-$.minX,i=$.maxZ-$.minZ;this.N=188,this.cell=e/188;let n=new Ce(e,i,188,188);n.rotateX(-Math.PI/2),n.translate(($.minX+$.maxX)/2,0,($.minZ+$.maxZ)/2);let s=n.attributes.position,a=s.count;this.hgrid=new Float32Array(a);for(let m=0;m<a;m++){let y=Xi(s.getX(m),s.getZ(m));this.hgrid[m]=y,s.setY(m,y)}n.computeVertexNormals();let o=new Float32Array(a*3),l=n.attributes.normal;for(let m=0;m<a;m++)Fg(Xe,s.getX(m),s.getZ(m),this.hgrid[m],l.getY(m)),o[m*3]=Xe.r,o[m*3+1]=Xe.g,o[m*3+2]=Xe.b;n.setAttribute("color",new pe(o,3));let c=new yt(n,this.mats.terrain);c.receiveShadow=!0,this.scene.add(c),this.terrain=c;let h=[],u=[],d=[],f=(m,y,_,v,T)=>{for(let S=0;S<T;S++){let E=S/T,P=(S+1)/T,b=ct(m,_,E),M=ct(y,v,E),I=ct(m,_,P),U=ct(y,v,P),Y=Xi(b,M),L=Xi(I,U);h.push(b,Y,M,I,L,U,I,-9,U,b,Y,M,I,-9,U,b,-9,M);for(let q=0;q<6;q++){let X=q===0||q===1||q===3;Xe.set(X?9069888:4863268),u.push(Xe.r,Xe.g,Xe.b)}let N=qi(b,M),k=qi(I,U);if(Y<N-.02||L<k-.02){let q=Math.max(N,k),X=(U-M)*.02,W=-(I-b)*.02;d.push(b+X,q,M+W,I+X,q,U+W,I+X,Math.min(L,q),U+W,b+X,q,M+W,I+X,Math.min(L,q),U+W,b+X,Math.min(Y,q),M+W)}}};f($.minX,$.maxZ,$.maxX,$.maxZ,188),f($.maxX,$.maxZ,$.maxX,$.minZ,188),f($.maxX,$.minZ,$.minX,$.minZ,188),f($.minX,$.minZ,$.minX,$.maxZ,188);let p=new ne;p.setAttribute("position",new Ut(h,3)),p.setAttribute("color",new Ut(u,3)),p.computeVertexNormals(),this.scene.add(new yt(p,new Nt({vertexColors:!0,roughness:1,side:Re})));let x=new ne;x.setAttribute("position",new Ut(d,3)),this.waterSide=new yt(x,new we({color:3114696,transparent:!0,opacity:.72,side:Re,depthWrite:!1})),this.scene.add(this.waterSide);let g=new yt(new Qt(e+8,3,i+8),new Nt({color:3877408,roughness:.8}));g.position.set(($.minX+$.maxX)/2,-10.5,($.minZ+$.maxZ)/2),g.receiveShadow=!0,this.scene.add(g)}terrainAt(t,e){let i=ht((t-$.minX)/this.cell,0,this.N-.001),n=ht((e-$.minZ)/this.cell,0,this.N-.001),s=Math.floor(i),a=Math.floor(n),o=i-s,l=n-a,c=this.N+1,h=this.hgrid,u=h[a*c+s],d=h[a*c+s+1],f=h[(a+1)*c+s],p=h[(a+1)*c+s+1];return ct(ct(u,d,o),ct(f,p,o),l)}groundAt(t,e,i=1e9){let n=this.terrainAt(t,e);for(let s of this.platforms)if(t>=s.x0&&t<=s.x1&&e>=s.z0&&e<=s.z1){let a=typeof s.top=="function"?s.top(t,e):s.top;a>n&&i>=a-1.3&&(n=a)}return n}waterAt(t,e){return qi(t,e)}addPlatform(t,e,i,n,s){this.platforms.push({x0:t,x1:e,z0:i,z1:n,top:s})}addSolid(t,e,i,n,s=1e9,a=!1){this.boxes.push({x0:t,x1:e,z0:i,z1:n,top:s}),a&&this.addPlatform(t,e,i,n,s)}addCircle(t,e,i){this.circles.push({x:t,z:e,r:i})}addOcc(t,e,i,n,s){this.occ.push({x0:t,x1:e,z0:i,z1:n,y1:s})}occluded(t,e,i,n,s,a){let o=n-t,l=s-e,c=a-i;for(let h of this.occ){let u=0,d=.97,f=[[t,o,h.x0,h.x1],[e,l,-5,h.y1],[i,c,h.z0,h.z1]],p=!0;for(let[x,g,m,y]of f){if(Math.abs(g)<1e-6){if(x<m||x>y){p=!1;break}continue}let _=(m-x)/g,v=(y-x)/g;if(_>v){let T=_;_=v,v=T}if(u=Math.max(u,_),d=Math.min(d,v),u>d){p=!1;break}}if(p)return!0}return!1}resolve(t,e,i){let n=!1;for(let s of this.boxes){if(i>=s.top-.5||t.x<s.x0-e||t.x>s.x1+e||t.z<s.z0-e||t.z>s.z1+e)continue;let a=ht(t.x,s.x0,s.x1),o=ht(t.z,s.z0,s.z1),l=t.x-a,c=t.z-o,h=l*l+c*c;if(!(h>=e*e))if(n=!0,h>1e-8){let u=Math.sqrt(h);t.x=a+l/u*e,t.z=o+c/u*e}else{let u=t.x-s.x0,d=s.x1-t.x,f=t.z-s.z0,p=s.z1-t.z,x=Math.min(u,d,f,p);x===u?t.x=s.x0-e:x===d?t.x=s.x1+e:x===f?t.z=s.z0-e:t.z=s.z1+e}}for(let s of[this.circles,this.dynCircles||[]])for(let a of s){if(!a.r)continue;let o=t.x-a.x,l=t.z-a.z,c=e+a.r,h=o*o+l*l;if(h<c*c&&h>1e-8){let u=Math.sqrt(h);t.x=a.x+o/u*c,t.z=a.z+l/u*c,n=!0}}return n}buildWater(){let t=fl.merge([nt.fog,{uTime:{value:0},uDeep:{value:new Et(1398938)},uShallow:{value:new Et(7327986)},uSunDir:{value:new C(0,1,0)},uSunColor:{value:new Et(16777215)},uSky:{value:new Et(12575733)},uOpacity:{value:.86},uLight:{value:1}}]);this.waterMat=new si({uniforms:t,vertexShader:Ng,fragmentShader:Bg,transparent:!0,fog:!0,depthWrite:!1});let e=$.maxX-$.minX,i=$.maxZ-$.minZ,n=new Ce(e,i,96,96);n.rotateX(-Math.PI/2);let s=new yt(n,this.waterMat);s.position.set(($.minX+$.maxX)/2,0,($.minZ+$.maxZ)/2),s.renderOrder=5,this.scene.add(s);let a=new Ce(76,54,30,22);a.rotateX(-Math.PI/2);let o=new yt(a,this.waterMat);o.position.set(0,Wi,-83),o.renderOrder=5,this.scene.add(o)}updateRain(t,e){if(!this.rain){let d=new ne;d.setAttribute("position",new pe(new Float32Array(700*6),3).setUsage(us)),this.rain=new os(d,new Sn({color:13624565,transparent:!0,opacity:0,depthWrite:!1})),this.rain.frustumCulled=!1,this.rain.renderOrder=10,this.scene.add(this.rain),this.drops=new Float32Array(700*3).fill(-999)}let n=this.storm>.05;if(this.rain.visible=n,!n)return;this.rain.material.opacity=.55*this.storm;let s=e.grid,a=ht((this.zoom||60)*1.6,40,170),o=Math.cos(s.windDir)*12,l=Math.sin(s.windDir)*7,c=this.rain.geometry.attributes.position.array,h=this.drops,u=.03+a*6e-4;for(let d=0;d<700;d++){let f=h[d*3],p=h[d*3+1],x=h[d*3+2];p-=46*t,f+=o*t,x+=l*t,(p<e.focus.y-3||Math.abs(f-e.focus.x)>a/2||Math.abs(x-e.focus.z)>a/2)&&(f=e.focus.x+(Math.random()-.5)*a,x=e.focus.z+(Math.random()-.5)*a,p=e.focus.y+6+Math.random()*30),h[d*3]=f,h[d*3+1]=p,h[d*3+2]=x,c[d*6]=f,c[d*6+1]=p,c[d*6+2]=x,c[d*6+3]=f-o*u,c[d*6+4]=p+46*u,c[d*6+5]=x-l*u}this.rain.geometry.attributes.position.needsUpdate=!0}buildSky(){let t=this.scene;t.background=new Et(6470640),t.fog=new zr(12575733,150,620),this.hemi=new Kr(14676991,6982229,1.6),t.add(this.hemi),this.sun=new ta(16777215,3),this.sun.castShadow=!0;let e=this.sun.shadow;e.mapSize.set(2048,2048),e.camera.left=-85,e.camera.right=85,e.camera.top=85,e.camera.bottom=-85,e.camera.near=20,e.camera.far=420,e.bias=-6e-4,e.normalBias=.5,t.add(this.sun),t.add(this.sun.target),this.sunDisc=new yt(new ge(16,16,12),new we({color:16774064,fog:!1})),t.add(this.sunDisc),this.moonDisc=new yt(new ge(11,16,12),new we({color:15265535,fog:!1})),t.add(this.moonDisc);let i=[],n=Gi(9);for(let o=0;o<500;o++){let l=n()*6.283,c=Math.asin(.05+n()*.95);i.push(Math.cos(l)*Math.cos(c)*900,Math.sin(c)*900-60,Math.sin(l)*Math.cos(c)*900)}let s=new ne;s.setAttribute("position",new Ut(i,3)),this.stars=new ls(s,new Us({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.stars),this.clouds=[];let a=new Nt({color:16777215,flatShading:!0,roughness:1,transparent:!0,opacity:.94});this.cloudMat=a;for(let o=0;o<9;o++){let l=new Ri,c=3+Math.floor(n()*3);for(let u=0;u<c;u++)l.add(new Je(3+n()*2.5,1),16777215,(u-c/2)*4.2,n()*1.2,(n()-.5)*3,1.3,.62,1,0,0,0,0);let h=l.mesh(a.clone());h.castShadow=!0,h.position.set(ct($.minX,$.maxX,n()),46+n()*10,ct($.minZ,$.maxZ,n())),t.add(h),this.clouds.push(h)}}setTime(t,e){let{a:i,b:n,k:s}=la(Ug,t),a=this.scene;a.background.set(i[1]).lerp(Ai.set(n[1]),s),a.fog.color.set(i[2]).lerp(Ai.set(n[2]),s),this.sun.color.set(i[3]).lerp(Ai.set(n[3]),s);let o=this.storm||0;a.background.lerp(Ai.set(5661296),o*.85),a.fog.color.lerp(Ai.set(6713983),o*.85);let l=ct(i[4],n[4],s)*(1-.82*o),c=ct(i[5],n[5],s)*(1-.42*o)+(this.flash||0)*4;this.hemi.intensity=c,this.hemi.color.copy(a.fog.color).lerp(Ai.set(16777215),.35),this.hemi.groundColor.set(6982229).lerp(Ai.set(1713216),this.night);let h=Math.PI*(t-6)/12,u=Math.sin(h),d=vl.set(Math.cos(h),u,-.45).normalize();this.sunDisc.position.copy(e).addScaledVector(d,760),this.sunDisc.visible=u>-.12;let f=h+Math.PI,p=bl.set(Math.cos(f)*.8,Math.sin(f)*.8+.15,.5).normalize();this.moonDisc.position.copy(e).addScaledVector(p,760),this.moonDisc.visible=p.y>-.05;let x=u>.1;x?this.sunDir.copy(d):this.sunDir.set(-.35,.8,.45).normalize();let g=Se(.02,.22,Math.abs(u-.1));this.sun.intensity=l*ct(.35,1,g);let m=ht((this.zoom||60)*.95,70,165),y=this.sun.shadow.camera;Math.abs(y.right-m)>2&&(y.left=-m,y.right=m,y.top=m,y.bottom=-m,y.updateProjectionMatrix()),this.sun.target.position.copy(e),this.sun.position.copy(e).addScaledVector(this.sunDir,200),this.stars.material.opacity=this.night*.9,this.stars.position.copy(e);let _=this.waterMat.uniforms;_.uSunDir.value.copy(this.sunDir),_.uSunColor.value.copy(this.sun.color).multiplyScalar(x?1:.5),_.uSky.value.copy(a.fog.color),_.uLight.value=ct(1,.34,this.night),this.cloudMat.color.set(16777215).lerp(Ai.set(3753326),this.night*.85),t>17.4&&t<19.4&&this.cloudMat.color.lerp(Ai.set(16757370),.5*(1-Math.abs(t-18.4))),this.cloudMat.color.lerp(Ai.set(5595244),o*.8)}road(t,e,i,n=.07){let s=new Bs(t.map(f=>new C(f[0],0,f[1])),!1,"catmullrom",.5),a=s.getLength(),o=Math.max(2,Math.ceil(a/1.4)),l=[],c=[];for(let f=0;f<=o;f++){let p=s.getPointAt(f/o),x=s.getTangentAt(f/o),g=-x.z,m=x.x,y=e/2,_=p.x+g*y,v=p.z+m*y,T=p.x-g*y,S=p.z-m*y,E=Math.max(this.terrainAt(_,v),this.terrainAt(T,S),this.terrainAt(p.x,p.z))+n;l.push([_,E,v,T,E,S]),c.push([p.x,p.z])}let h=[];for(let f=0;f<o;f++){let p=l[f],x=l[f+1];h.push(p[0],p[1],p[2],x[3],x[4],x[5],p[3],p[4],p[5],p[0],p[1],p[2],x[0],x[1],x[2],x[3],x[4],x[5])}let u=new ne;u.setAttribute("position",new Ut(h,3));let d=new Float32Array(h.length);for(let f=1;f<d.length;f+=3)d[f]=1;return u.setAttribute("normal",new pe(d,3)),this.batch.list.push(Kh(u,i,0)),this.roads.push(c),c}nearRoad(t,e,i){for(let n of this.roads)if(oa(t,e,n)<i)return!0;return!1}tree(t,e,i,n=1,s=null){this.trees.push({type:t,x:e,z:i,s:n,y:s??this.groundAt(e,i)}),this.addCircle(e,i,t==="ombu"?1.1:t==="bush"?0:.4)}lamp(t,e,i=0,n=null){this.lamps.push({x:t,z:e,ry:i,y:n??this.groundAt(t,e)})}addInter(t,e,i,n={}){let s=n.y!=null?n.y:this.groundAt(e,i),a=n.ry||0,o=this.batch;if(n.console!==!1){o.boxB(e,s,i,.9,1,.6,it.steelD,a),o.boxB(e,s+1,i,1.1,.12,.8,it.yellow,a);let d=Math.sin(a),f=Math.cos(a);this.screenBatch.box(e+d*.12,s+1.42,i+f*.12,.95,.62,.08,16777215,a,-.45),o.box(e-d*.02,s+1.38,i-f*.02,1.08,.78,.14,it.steelD,a,-.45),this.addCircle(e,i,.55)}let l=new ie;l.position.set(e,s+(n.h||3.2),i);let c=new yt(new cs(.42,0),new we({color:16777215,fog:!1})),h=new yt(new vi(.55,1.1,4),new we({color:16765503,fog:!1}));h.rotation.x=Math.PI,h.position.y=1.3,l.add(c,h),this.scene.add(l);let u={id:t,x:e,y:s,z:i,r:n.r||3.4,group:l,gem:c,arrow:h,state:"locked",target:!1,label:"",baseY:s+(n.h||3.2),phase:this.rand()*6};return this.inter[t]=u,this.interList.push(u),u}finalize(){let t=this.scene,e=this.mats,i=this.batch.mesh(e.solid);i.castShadow=!0,i.receiveShadow=!0,t.add(i);let n=this.cityBatch.mesh(e.city);n&&(n.castShadow=!0,n.receiveShadow=!0,t.add(n)),this.winBatch.forEach((v,T)=>{let S=v.mesh(e.win[T]);S&&t.add(S)});let s=this.glassBatch.mesh(e.glass);s&&(s.renderOrder=6,t.add(s));let a=this.screenBatch.mesh(e.screen);a&&t.add(a);let o=[],l=[],c=[];for(let v of this.trees){let T=Og[v.type],S=v.s;if(T.th&&o.push({x:v.x,y:v.y+T.th*S/2,z:v.z,sx:T.tr*S,sy:T.th*S,sz:T.tr*S,c:T.tc,ry:0}),T.crowns)for(let E of T.crowns)l.push({x:v.x+(this.rand()-.5)*.3,y:v.y+T.th*S*E[0]+(T.th?0:.4),z:v.z+(this.rand()-.5)*.3,sx:E[1]*S,sy:E[2]*S,sz:E[1]*S,c:E[3],ry:this.rand()*6});T.frond&&c.push({x:v.x,y:v.y+T.th*S,z:v.z,sx:T.frond*S,sy:T.frond*S,sz:T.frond*S,c:T.fc,ry:this.rand()*6})}let h=new Nt({flatShading:!0,roughness:1});this.instanced(new Pe(.75,1,1,5),h,o),this.instanced(new Je(1,1),h,l,.08);let u=[];for(let v=0;v<8;v++){let T=new Qt(.26,.05,1);T.translate(0,0,.5),T.rotateX(.42+v%2*.3),T.rotateY(v*Math.PI/4),u.push(T)}this.instanced(Gs(u),h,c,.05);let d=[],f=[],p=[],x=[];for(let v of this.lamps){let T=Math.sin(v.ry),S=Math.cos(v.ry);d.push({x:v.x,y:v.y+2.1,z:v.z,sx:.09,sy:4.2,sz:.09,c:4015696,ry:0}),f.push({x:v.x+T*.5,y:v.y+4.2,z:v.z+S*.5,sx:.32,sy:.12,sz:1.2,c:4015696,ry:v.ry}),p.push({x:v.x+T*.9,y:v.y+4.08,z:v.z+S*.9,sx:.2,sy:.1,sz:.3,c:16777215,ry:v.ry}),x.push({x:v.x+T*.9,y:v.y+.09,z:v.z+S*.9,sx:9,sy:1,sz:9,c:16777215,ry:0})}this.instanced(new Pe(1,1,1,6),h,d),this.instanced(new Qt(1,1,1),h,f),this.instanced(new Qt(1,1,1),e.bulb,p,0,!1);let g=new Ce(1,1);g.rotateX(-Math.PI/2);let m=this.instanced(g,e.pool,x,0,!1);m&&(m.renderOrder=7);let y=[],_=[];for(let v of this.houses)y.push({x:v.x,y:v.y+v.h/2,z:v.z,sx:v.w,sy:v.h,sz:v.d,c:v.c,ry:v.ry}),_.push({x:v.x,y:v.y+v.h+v.rh/2,z:v.z,sx:v.w*.78,sy:v.rh,sz:v.d*.78,c:v.rc,ry:v.ry+Math.PI/4});this.instanced(new Qt(1,1,1),h,y),this.instanced(new Pe(.02,1,1,4),h,_)}instanced(t,e,i,n=0,s=!0){if(!i.length)return null;let a=new Hr(t,e,i.length);return i.forEach((o,l)=>{ha.compose(vl.set(o.x,o.y,o.z),Zh.setFromEuler(Jh.set(0,o.ry||0,0)),bl.set(o.sx,o.sy,o.sz)),a.setMatrixAt(l,ha),Xe.set(o.c),n&&Xe.offsetHSL((this.rand()-.5)*.02,0,(this.rand()-.5)*n),a.setColorAt(l,Xe)}),a.castShadow=s,a.receiveShadow=s,a.frustumCulled=!1,this.scene.add(a),a}setCutaway(t,e,i){let n=this.clip,s=Math.cos(i),a=-Math.sin(i),o=Math.sin(i),l=Math.cos(i),c=7;n[0].constant=ct(80,e.y+1.2,t),n[1].normal.set(s,0,a),n[1].constant=-(s*e.x+a*e.z+c),n[2].normal.set(-s,0,-a),n[2].constant=s*e.x+a*e.z-c,n[3].normal.set(-o,0,-l),n[3].constant=o*e.x+l*e.z+.9}update(t,e){this.time+=t,this.night=e.night,this.zoom=e.zoom,this.waterMat.uniforms.uTime.value=this.time,this.storm=Se(.45,.9,e.grid.cloud),this.flash=Math.max(0,(this.flash||0)-t*5),this.updateRain(t,e),this.storm>.25&&(this.boltT=(this.boltT==null?4:this.boltT)-t,this.storm>.6&&this.boltT<=0&&(this.boltT=5+Math.random()*7,this.flash=1,e.audio&&setTimeout(()=>e.audio.thunder(),350))),this.setTime(e.hour,e.focus);let i=this.mats,n=this.night,s=e.grid.freq<49.4&&Math.sin(this.time*37)>.2?.25:1;for(let a=0;a<3;a++)this.power[a]=ct(this.power[a],e.barrios[a]?1:0,Math.min(1,t*2)),i.win[a].emissiveIntensity=this.power[a]*(.18+1.5*n)*s;i.bulb.emissiveIntensity=n*2.4*s,i.pool.opacity=n*.5*s,i.beacon.emissiveIntensity=n>.2?Math.sin(this.time*3.2)>0?3:.1:.2,i.screen.emissiveIntensity=.9+.3*Math.sin(this.time*5);for(let a of this.clouds){let o=e.focus.x-e.cam.x,l=e.focus.y-e.cam.y,c=e.focus.z-e.cam.z,h=a.position.x-e.cam.x,u=a.position.y-e.cam.y,d=a.position.z-e.cam.z,f=ht((h*o+u*l+d*c)/(o*o+l*l+c*c),0,1),p=Math.hypot(h-o*f,u-l*f,d-c*f);a.material.color.copy(this.cloudMat.color),a.material.opacity=ct(a.material.opacity,ct(.12,.94,Se(16,42,p)),Math.min(1,t*4)),a.position.x+=(1.2+e.grid.wind*4)*t*Math.cos(e.grid.windDir),a.position.z+=(1.2+e.grid.wind*4)*t*Math.sin(e.grid.windDir)*.4,a.position.x>$.maxX+30&&(a.position.x=$.minX-30),a.position.z>$.maxZ+20&&(a.position.z=$.minZ-20)}for(let a of this.interList){let o=a.group;if(o.visible=a.state!=="locked"&&a.state!=="hidden",!o.visible)continue;let l=a.state==="need";a.gem.material.color.set(l?16731469:a.state==="off"?10135485:5759881),a.gem.rotation.y+=t*(l?4:1.2);let c=l?1.25+.25*Math.sin(this.time*8):.6;a.gem.scale.setScalar(c),o.position.y=a.baseY+Math.sin(this.time*2.5+a.phase)*.18,a.arrow.visible=a.target,a.target&&(a.arrow.position.y=1.5+Math.abs(Math.sin(this.time*4))*.6,a.arrow.rotation.y+=t*3)}for(let a of this.updaters)a(t,e)}},Mi=new Et,Cx=new Et;function Fg(r,t,e,i,n){let s=qi(t,e),a=Ti(t,e);if(i<s-.15){r.set(2905451).lerp(Mi.set(13482892),Se(s-3.4,s-.1,i));return}let o=Math.min(ks(t,e)-8,99),l=Cn(t,e);if(a<5.2&&i<2.6||i<s+.5){r.set(15259300).lerp(Mi.set(14205066),Rn(t*.4,e*.4));return}let c=aa(t*.07,e*.07);r.set(6271302).lerp(Mi.set(9360476),c),t>26&&r.lerp(Mi.set(12179806),Se(.5,.85,Rn(t*.13+9,e*.13))*.6),(o<6||l>-9)&&r.lerp(Mi.set(5020234),.5);let h=(u,d,f,p)=>Se(-3,1,Math.min(t-u,d-t,e-f,p-e));r.lerp(Mi.set(13682864),h(-90,-35,-106,-58)*(.85+.15*Rn(t,e))),r.lerp(Mi.set(12096100),h(42,80,51,71)*.9),r.lerp(Mi.set(7314002),h(40,108,31,50)*.7),r.lerp(Mi.set(9411210),h(-86,-6,9,78)),r.lerp(Mi.set(13286810),h(41,57,2,15)*.9),n<.82&&r.lerp(Mi.set(10259046),Se(.82,.6,n))}var fa=[it.cream,it.terra,it.ochre,it.rose,it.white,11128800,14272160,14734004];function ln(r,t,e,i,n,s,a=7,o=1.6,l={}){let c=da(t,{w:512,h:Math.round(512*o/a),bg:l.bg||"#12325a",fg:l.fg||"#ffffff",border:l.border||"#ffc93c",size:72}),h=new yt(new Ce(a,o),new Nt({map:c,emissive:16777215,emissiveMap:c,emissiveIntensity:.3,roughness:.8}));h.position.set(e,i+2.4+o/2,n),h.rotation.y=s,r.scene.add(h);let u=h.clone();u.rotation.y=s+Math.PI,r.scene.add(u);let d=Math.cos(s)*(a/2-.3),f=-Math.sin(s)*(a/2-.3);r.batch.boxB(e+d,i,n+f,.2,2.5,.2,it.steelD),r.batch.boxB(e-d,i,n-f,.2,2.5,.2,it.steelD)}function Ml(r,t,e,i,n,s=6,a=2.4){if(!r.logoTex)return;let o=s*200/720,l=new Nt({map:r.logoTex,emissive:16777215,emissiveMap:r.logoTex,emissiveIntensity:.45,roughness:.8});for(let u of[n,n+Math.PI]){let d=new yt(new Ce(s,o),l);d.position.set(t+Math.sin(u)*.09,e+a+o/2,i+Math.cos(u)*.09),d.rotation.y=u,r.scene.add(d)}let c=Math.cos(n)*(s/2-.3),h=-Math.sin(n)*(s/2-.3);r.batch.boxB(t+c,e,i+h,.26,a+.1,.26,it.steelD),r.batch.boxB(t-c,e,i-h,.26,a+.1,.26,it.steelD),r.batch.box(t,e+a+o/2,i,s+.3,o+.3,.12,it.steelD,n)}function jh(r,t,e,i,n,s,a){r.flagTex||(r.flagTex=ai(360,240,h=>{h.fillStyle="#fff",h.fillRect(0,0,360,240),h.fillStyle="#0038a8";for(let u=0;u<4;u++)h.fillRect(0,240/9*(1+u*2),360,240/9);h.fillStyle="#fff",h.fillRect(0,0,133.3,133.3),h.fillStyle="#fcd116",h.strokeStyle="#fcd116",h.lineWidth=6;for(let u=0;u<16;u++){let d=u*Math.PI/8;h.beginPath(),h.moveTo(66,66),h.lineTo(66+Math.cos(d)*54,66+Math.sin(d)*54),h.stroke()}h.beginPath(),h.arc(66,66,26,0,7),h.fill()})),r.batch.cyl(t,e,i,.07+a*.004,.1+a*.008,a,15132390,8),r.batch.sph(t,e+a+.12,i,.16+a*.008,13607498);let o=new Ce(n,s,14,6),l=new yt(o,new Nt({map:r.flagTex,side:Re,roughness:.9}));l.position.set(t+n/2+.12,e+a-s/2-.15,i),l.castShadow=!0,r.scene.add(l);let c=o.attributes.position.array.slice();r.updaters.push((h,u)=>{let d=o.attributes.position,f=(.08+u.grid.wind*.22)*n/3;for(let p=0;p<d.count;p++){let x=(c[p*3]+n/2)/n;d.setZ(p,Math.sin(x*7.2-r.time*(4+u.grid.wind*5))*f*x)}d.needsUpdate=!0})}function pa(r,t,e,i,n,s,a,o){let l=r.winBatch[o],c=Math.max(1,Math.floor((a-.8)/1.7)),h=new Ce(.78,1),u=(d,f,p,x)=>{let g=Math.max(1,Math.floor((d-.8)/1.45));for(let m=0;m<c;m++)for(let y=0;y<g;y++){let _=(y-(g-1)/2)*1.45;l.add(h,16777215,t+f*(i/2+.05)+(p?_:0),s+1.35+m*1.7,e+p*(n/2+.05)+(f?_:0),1,1,1,0,x,0,0)}};u(i,0,1,0),u(i,0,-1,Math.PI),u(n,1,0,Math.PI/2),u(n,-1,0,-Math.PI/2)}function zg(r,t,e,i,n,s,a,o,l){let c=r.cityBatch,h=2.2,u=r.rand,d=15985884;c.boxB(t,h,e,i,s,n,a),c.boxB(t,h,e,i+.2,.55,n+.2,9274488),c.boxB(t,h+s,e,i+.36,.28,n+.36,d);let f=h+s+.28;if(l===1&&(c.boxB(t,f,e,i*.62,1.7,n*.62,a),c.boxB(t,f+1.7,e,i*.66,.2,n*.66,d)),l===2)for(let p=-1;p<=1;p++)c.boxB(t+p*i*.3,h+.55,e+n/2+.1,.3,s+.6,.26,d);l===3&&(c.cyl(t+i/2-.3,h,e+n/2-.3,1.25,1.25,s+1.2,a,10),c.cyl(t+i/2-.3,h+s+1.2,e+n/2-.3,1.42,1.42,.24,d,10)),u()<.5&&c.cyl(t+(u()-.5)*i*.4,f,e+(u()-.5)*n*.4,.55,.55,1.1,9080726,8),u()<.45&&c.boxB(t+(u()-.5)*i*.4,f,e+(u()-.5)*n*.4,1.1,.5,.8,12106946),c.boxB(t,h,e+n/2+.03,1,1.5,.08,5981750),pa(r,t,e,i,n,h,s,o),r.addSolid(t-i/2,t+i/2,e-n/2,e+n/2),r.addOcc(t-i/2,t+i/2,e-n/2,e+n/2,h+s+(l===1?1.9:.3))}function Qh(r){let t=r.batch,e=r.rand,i=2.2;t.boxB(-44,1.2,41,68,.9,60,it.asphalt),t.boxB(-46.5,1,73.3,73,1.2,4.6,it.granite),t.boxB(-80.6,1,41,4.8,1.2,60,it.granite),r.addPlatform(-83.2,-10,11,75.8,ri);for(let p=-80;p<=-12;p+=4)t.boxB(p,i,73.3,.14,.02,4.4,12816e3);for(let p=14;p<=70;p+=4)t.boxB(-80.6,i,p,4.6,.02,.14,12816e3);let n=(p,x,g,m)=>{t.boxB((p+x)/2,i,(g+m)/2,x-p,.7,m-g,it.cream),t.boxB((p+x)/2,i+.7,(g+m)/2,x-p+.16,.12,m-g+.16,16446694),r.addSolid(p,x,g,m,3.05)};n(-83.4,-66.6,75.6,76),n(-49.4,-10,75.6,76),n(-83.4,-83,11,75.6);let s=[-76,-60,-44,-28,-12],a=[13,27,41,55,69];for(let p of s)for(let x=15;x<70;x+=3.2)t.boxB(p,2.1,x,.14,.02,1.4,15327944);for(let p of a)for(let x=-76;x<-11;x+=3.2)t.boxB(x,2.1,p,1.4,.02,.14,15327944);let o=[-68,-52,-36,-20],l=[20,34,48,62];for(let p=0;p<4;p++)for(let x=0;x<4;x++){let g=o[p],m=l[x],y=p+","+x,_=p===0?0:p===3?2:1;if((p===1||p===2)&&(x===1||x===2))continue;if(t.boxB(g,1.3,m,12.8,.9,10.8,it.sidewalk),y==="3,0"){Gg(r,g,m);continue}if(y==="3,3"){Vg(r,g,m);continue}if(y==="2,0"){Hg(r,g,m);continue}let v=e()<.45?2:3,T=10.6,S=.5,E=(T-S*(v-1))/v;for(let P=0;P<v;P++){let b=g-T/2+E/2+P*(E+S),M=p===1||p===2?6.5+e()*6.5:4.2+e()*4;zg(r,b,m+(e()-.5)*.6,E,7+e()*1,M,fa[Math.floor(e()*fa.length)],_,Math.floor(e()*4))}r.tree(e()<.5?"jaca":"native",g-5.85,m+4.85,.7,i),r.tree("jaca",g+5.85,m-4.85,.65,i)}kg(r);for(let p=-80;p<=-12;p+=8)p>-68&&p<-48||r.lamp(p,75.1,Math.PI,i);for(let p=16;p<=68;p+=8)r.lamp(-82.5,p,Math.PI/2,i);for(let p=-76;p<=-16;p+=12)p>-68&&p<-48||(r.tree("palm",p+4,72.2,.95+e()*.2,i),t.boxB(p,i,74.6,2.2,.45,.6,it.wood));for(let p=20;p<=64;p+=11)r.tree("palm",-79.4,p,1,i),t.boxB(-82.1,i,p+4,.6,.45,2.2,it.wood);for(let p of s)for(let x of[20,48])r.lamp(p+2.4,x+5,0,i);let c=da("URUGUAY",{w:1024,h:256,fg:"#ffffff",stroke:"#1d6fb8",size:210}),h=new yt(new Ce(13,3.2),new Nt({map:c,transparent:!0,alphaTest:.35,emissive:16777215,emissiveMap:c,emissiveIntensity:.25}));h.position.set(-33,i+1.75,74.95),h.castShadow=!0,r.scene.add(h);let u=h.clone();u.position.z=74.85,u.rotation.y=Math.PI,r.scene.add(u),t.boxB(-33,i,74.9,13.4,.18,.7,15921128),Ml(r,-18.5,i,74.7,0,7);for(let p of[-64,-52]){t.boxB(p,.9,87,2.4,.3,22,it.wood),r.addPlatform(p-1.2,p+1.2,75.6,98,1.25);for(let x=78;x<=98;x+=5)t.cyl(p-1.1,-2.6,x,.16,.16,4,6965807,6),t.cyl(p+1.1,-2.6,x,.16,.16,4,6965807,6)}t.boxB(-58,.9,97,14.4,.3,2.2,it.wood),r.addPlatform(-65.2,-50.8,95.9,98.1,1.25),t.boxB(-58,1.25,76.4,15,.9,1.6,it.granite),r.addPlatform(-66,-50,75.4,77.4,1.7),r.dyn.boats=[];let d=[16777215,16765286,15681391,9358054,16777215,9485933];[[-60.5,82],[-60.5,89],[-55.5,84],[-55.5,91],[-68,86],[-47.5,88]].forEach((p,x)=>{let g=new ie,m=new Nt({flatShading:!0,roughness:.8,vertexColors:!0}),y=new t.constructor;y.box(0,.25,0,1.3,.6,3.6,16052714),y.box(0,.05,0,1,.3,3,x%2?1929144:12597547),y.box(0,.7,-.3,.9,.4,1.2,15262418),y.cyl(0,.5,.4,.05,.05,4.2,9080726,5);let _=new ne;_.setAttribute("position",new Ut([0,4.5,.45,0,1.1,.45,0,1.1,-1.7,0,4.5,.45,0,1.1,-1.7,0,1.1,.45],3)),_.computeVertexNormals(),y.add(_,d[x],0,0,0,1,1,1,0,0,0,0);let v=y.mesh(m);v.castShadow=!0,g.add(v),g.position.set(p[0],0,p[1]),g.rotation.y=x%2*Math.PI+.1*x,r.scene.add(g),r.dyn.boats.push(g)}),r.updaters.push(p=>r.dyn.boats.forEach((x,g)=>{x.position.y=Math.sin(r.time*1.3+g)*.12-.05,x.rotation.z=Math.sin(r.time*1.1+g*2)*.05}));let f=[11883324,11093551,13134410,9411235];for(let p of[-3,5,13])for(let x of[33,41,49,57]){let g=p+(e()-.5),m=x+(e()-.5),y=r.groundAt(g,m),_=fa[Math.floor(e()*fa.length)];r.houses.push({x:g,y,z:m,w:4.8,d:5.2,h:2.7,rh:1.7,c:_,rc:f[Math.floor(e()*4)],ry:0}),r.addSolid(g-2.4,g+2.4,m-2.6,m+2.6),r.addOcc(g-2.4,g+2.4,m-2.6,m+2.6,y+4);let v=new Ce(.8,.9);r.winBatch[2].add(v,16777215,g-1.2,y+1.5,m+2.66,1,1,1,0,0,0,0),r.winBatch[2].add(v,16777215,g+1.2,y+1.5,m+2.66,1,1,1,0,0,0,0),r.winBatch[2].add(v,16777215,g+2.46,y+1.5,m,1,1,1,0,Math.PI/2,0,0),r.winBatch[2].add(v,16777215,g-2.46,y+1.5,m,1,1,1,0,-Math.PI/2,0,0),t.boxB(g,y,m+2.63,.8,1.5,.08,5981750),e()<.7&&r.tree(e()<.5?"ceibo":"native",g+3.4,m+2.8,.7),e()<.6&&r.tree("bush",g-3,m+3,1)}for(let p=30;p<=60;p+=10)r.lamp(1,p,Math.PI/2)}function kg(r){let t=r.batch,e=2.2,i=r.rand,n=-44,s=41,[a,o]=rt.plaza;t.boxB(n,1.3,s,28.8,.9,24.8,14471608);for(let l of[-1,1])t.boxB(n+l*8.7,e,39.2,10.2,.07,6.2,7191378),t.boxB(n+l*8.7,e,48.6,10.2,.07,6.6,7191378);for(let l=30;l<=52;l+=2.2)t.boxB(n,e,l,6.6,.015,.1,13221024);if(t.cyl(a,e,o,3.4,3.55,.5,it.concrete,16),t.cyl(a,e+.5,o,3.05,3.05,.05,5814758,16),t.cyl(a,e,o,.5,.75,2.2,14209730,8),t.cyl(a,e+2.2,o,1.2,.5,.25,14209730,10),t.sph(a,e+2.9,o,.42,13607498),r.addCircle(a,o,3.5),r.updaters.push((l,c)=>{if(Math.random()<30*l){let h=Math.random()*6.283;c.fx.soft.emit(a,e+2.6,o,Math.cos(h)*1.6,3.2+Math.random(),Math.sin(h)*1.6,.9,.22,.12,14677247,.8,9,.2)}}),t.cyl(n,e,38.4,3.2,3.2,.03,15985884,24),r.isoTex){let l=new Ce(5.4,5.4);l.rotateX(-Math.PI/2);let c=new yt(l,new Nt({map:r.isoTex,transparent:!0,alphaTest:.25,roughness:.9}));c.position.set(n,e+.05,38.4),c.receiveShadow=!0,r.scene.add(c)}t.boxB(n,e,32.3,12,.8,3.8,16052714),t.boxB(n,e+.25,34.22,12.04,.3,.06,it.celeste),t.boxB(n,e+.78,32.3,12.2,.04,4,12159322),t.boxB(n,e,35.25,6,.27,.7,15130575),t.boxB(n,e,34.55,6,.54,.7,15130575),r.addSolid(-50,-38,30.4,34.2,3,!0),r.addPlatform(-47,-41,34.9,35.6,2.47),r.addPlatform(-47,-41,34.2,34.9,2.74),t.cyl(n+.5,3,33.7,.03,.03,1.2,it.steelD,5),t.sph(n+.5,4.25,33.7,.1,2237738),t.cyl(n+.5,3,33.7,.22,.26,.05,it.steelD,8);for(let l of[-1,1])t.boxB(n+l*5.6,3,31,.5,.9,.5,2237738),t.boxB(n+l*5.6,3.9,31,.7,.5,.6,3356735);Ml(r,n,e,29.9,0,15,3.2),jh(r,-41.6,3,30.9,3.6,2.4,5.2),jh(r,-55.2,e,31.4,8.4,5.6,16),t.cyl(-55.2,e,31.4,1,1.2,.6,it.concrete,10),r.addCircle(-55.2,31.4,1.2);for(let l of[-57.3,-30.7])for(let c of[36.2,41.6,47,52.2])r.tree("butia",l,c,1+i()*.25,e);for(let l of[-1,1])r.tree("jaca",n+l*10.5,39.2,.85,e),r.tree("jaca",n+l*10.5,48.8,.85,e),r.tree("butia",n+l*6.2,50.6,.9,e);for(let l of[-1,1])for(let c of[38.4,44,49.4])t.boxB(n+l*4.6,e,c,.6,.45,2.2,it.wood);for(let[l,c,h]of[[-57.6,29.4,.8],[-30.4,29.4,-.8],[-57.6,52.6,2.3],[-30.4,52.6,-2.3],[-57.6,41,1.57],[-30.4,41,-1.57],[-51,52.6,3.14],[-37,29.4,0]])r.lamp(l,c,h,e);ln(r,"PLAZA MATRIZ",-51.5,e,52.9,0,5.2,1),Ml(r,-37,e,52.9,0,6.4),r.addInter("fest",rt.fest[0],rt.fest[1],{console:!1,y:ri,h:4})}function Hg(r,t,e){let i=r.cityBatch,n=2.2,s=14273972,a=15985884;i.boxB(t,n,e,10,8.5,8.6,s),i.boxB(t,n+8.5,e,10.4,.3,9,a),i.boxB(t,n+8.8,e,6.6,6.5,6,s),i.boxB(t,n+15.3,e,7,.3,6.4,a),i.boxB(t,n+15.6,e,4.2,4.6,4.2,s),i.boxB(t,n+20.2,e,4.6,.25,4.6,a),i.cyl(t,n+20.45,e,1.2,2,1.8,7314088,8),i.sph(t,n+22.4,e,1.25,7314088,1,1),i.cyl(t,n+23.3,e,.05,.12,3,14209730,5);for(let o of[-1,1])for(let l of[-1,1])i.cyl(t+o*3.1,n+15.6,e+l*2.8,.5,.6,2.2,s,6),i.sph(t+o*3.1,n+18,e+l*2.8,.62,7314088);for(let o=-1;o<=1;o++)i.boxB(t+o*3,n+.55,e+4.36,.4,8.2,.3,a);pa(r,t,e,10,8.6,n,8.5,1),pa(r,t,e,6.6,6,n+8.6,6.5,1),pa(r,t,e,4.2,4.2,n+15.4,4.6,1),r.addSolid(t-5,t+5,e-4.3,e+4.3),r.addOcc(t-5,t+5,e-4.3,e+4.3,n+8.8),r.addOcc(t-3.3,t+3.3,e-3,e+3,n+15.6),r.addOcc(t-2.1,t+2.1,e-2.1,e+2.1,n+22)}function ma(r,t,e,i,n=1){let s=r.batch;s.boxB(t,e,i,2.6*n,2.3*n,1.9*n,9213084);for(let a=-2;a<=2;a++)s.boxB(t+a*.5*n,e+.3*n,i+1.1*n,.12*n,1.7*n,.4*n,7305087),s.boxB(t+a*.5*n,e+.3*n,i-1.1*n,.12*n,1.7*n,.4*n,7305087);for(let a=-1;a<=1;a++)s.cyl(t+a*.8*n,e+2.3*n,i,.1*n,.16*n,1*n,12150858,6),s.sph(t+a*.8*n,e+3.35*n,i,.14*n,14277081);s.cyl(t+1*n,e+2.3*n,i+.5*n,.35*n,.35*n,.6*n,9213084,8),r.addSolid(t-1.4*n,t+1.4*n,i-1.2*n,i+1.2*n)}function ga(r,t,e,i,n=0,s=6,a=6.5){let o=r.batch,l=Math.cos(n)*s/2,c=-Math.sin(n)*s/2;o.boxB(t+l,e,i+c,.28,a,.28,it.steel),o.boxB(t-l,e,i-c,.28,a,.28,it.steel),o.box(t,e+a,i,s+.6,.3,.3,it.steel,n);for(let h=-1;h<=1;h++)o.cyl(t+l*h*.7,e+a-.9,i+c*h*.7,.08,.14,.8,12150858,5)}function Sl(r,t,e,i,n,s,a=[]){let o=r.batch,l=(c,h,u,d)=>{r.addSolid(Math.min(c,u)-.08,Math.max(c,u)+.08,Math.min(h,d)-.08,Math.max(h,d)+.08,s+1.5);let f=Math.ceil(Math.hypot(u-c,d-h)/2.2);for(let p=0;p<=f;p++)o.boxB(ct(c,u,p/f),s,ct(h,d,p/f),.1,1.5,.1,7042176);o.box((c+u)/2,s+1.45,(h+d)/2,Math.abs(u-c)+.1,.07,Math.abs(d-h)+.1,7042176),o.box((c+u)/2,s+.8,(h+d)/2,Math.abs(u-c)+.05,.05,Math.abs(d-h)+.05,7042176)};l(t,i,e,i),l(t,i,t,n),l(e,i,e,n),a.length?(l(t,n,a[0],n),l(a[1],n,e,n)):l(t,n,e,n)}function Gg(r,t,e){let i=r.batch,n=2.2;i.boxB(t,n,e,12.2,.06,10.2,12037787),Sl(r,t-6,t+6,e-5,e+5,n,[t-1.6,t+1.6]),ma(r,t-3.4,n,e-1.8,1.05),ma(r,t+.6,n,e-1.8,1.05),ga(r,t-1.4,n,e-4.1,0,8,7),i.boxB(t+3.9,n,e+2,3.6,3.2,4.4,it.white),i.boxB(t+3.9,n+2.2,e+2,3.66,.5,4.46,it.celeste),i.boxB(t+3.9,n+3.2,e+2,3.9,.2,4.7,14341318),i.cyl(t+4.8,n+3.4,e+3.2,.04,.06,3.4,14209730,5),i.sph(t+4.8,n+6.9,e+3.2,.16,it.red),r.winBatch[2].add(new Ce(2.2,.9),16777215,t+3.9,n+1.6,e+4.26,1,1,1,0,0,0,0),r.addSolid(t+2.1,t+5.7,e-.2,e+4.2),ln(r,"CENTRO DE CONTROL DE RED",t-2.6,n,e+5.6,0,6,1.1),r.addInter("npc:valeria",rt.valeria[0],rt.valeria[1],{console:!1,y:ri,h:3.6}),r.addInter("sub",t+.9,e+3.2,{y:n,ry:Math.PI})}function Vg(r,t,e){let i=r.batch,n=2.2;i.boxB(t,n,e,12.4,.05,10.4,8094348);for(let a of[-5,0,5])for(let o of[-3.6,3.6])i.cyl(t+a,n,e+o,.22,.26,5,it.white,8);let s=r.cityBatch;s.boxB(t,n+5,e,12.6,.35,9.2,it.celeste),s.boxB(t,n+5.35,e,12.2,.08,8.8,16052714);for(let a=-2;a<=2;a++)for(let o=-1;o<=1;o++)s.box(t+a*2.3,n+5.56,e+o*2.7,2,.08,2.3,2047112,0,.12);r.dyn.chargers=[],[-4,0,4].forEach(a=>{i.boxB(t+a,n,e-2.9,.7,2,.5,16052714),i.boxB(t+a,n+2,e-2.9,.8,.14,.6,it.celeste);let o=new yt(new Qt(.42,1.1,.06),r.mats.charger);o.position.set(t+a,n+1.25,e-2.62),r.scene.add(o),r.addCircle(t+a,e-2.9,.5)}),r.addOcc(t-6.3,t+6.3,e-4.6,e+4.6,n+5.6),ln(r,"TERMINAL RAMBLA \xB7 \xD3MNIBUS EL\xC9CTRICOS",t,n+3.4,e+4.7,0,9,1,{bg:"#0b5a4a",border:"#7dffb0"}),r.addInter("npc:lucia",rt.lucia[0],rt.lucia[1],{console:!1,y:ri,h:3.6}),r.addInter("term",-13.9,61.2,{y:n,ry:Math.PI/2,h:3.4})}function tu(r){let t=r.batch,e=rt.dam,i=e.top,n=it.concrete;t.box(-22.7,(i-3)/2,-55,2.6,i+3,6,n),t.box(11.3,(i-3)/2,-55,25.4,i+3,6,n),t.box(-11.4,-.2,-56,20,5.6,4,it.concreteD),t.box(-11.4,1.05,-50.4,20,.7,7.8,it.concreteD,0,.417),t.box(-11.4,i-.35,-55,20,.7,6,n);for(let u=0;u<5;u++){let d=-21.08+u*4.84;t.box(d,(i-3)/2,-54,.64,i+3,8,n),t.box(d,.3,-48.6,.64,2.6,3.2,n,0,.417)}t.box(0,i+.02,-55,47.6,.04,3.4,6975351);for(let u=-22;u<=22;u+=3.2)t.box(u,i+.05,-55,1.4,.02,.14,15327944);for(let u of[-57.85,-52.15]){t.box(0,i+.95,u,48,.1,.1,it.steelD),t.box(0,i+.5,u,48,.06,.06,it.steelD);for(let d=-24;d<=24;d+=2.4)t.boxB(d,i,u,.1,1,.1,it.steelD)}r.addSolid(e.x0,e.x1,e.z0,e.z1,i,!0);for(let u of[-1,1])t.box(u*25.8,i-.66,-55,3.8,.5,6,n,0,0,-u*.215),r.addPlatform(u>0?24:-27.6,u>0?27.6:-24,e.z0,e.z1,d=>i-(Math.abs(d)-24)/3.6*.8);r.addSolid(e.x0,e.x1,e.z0-.1,e.z0+.2,i+1),r.addSolid(e.x0,e.x1,e.z1-.2,e.z1+.1,i+1);for(let u=-20;u<=20;u+=10)r.lamp(u,-57.5,0,i);let s=ai(32,64,u=>{u.fillStyle="#bfe9fb",u.fillRect(0,0,32,64),u.fillStyle="#ffffff";for(let d=0;d<26;d++)u.fillRect(d*13%32,d*29%64,3,10+d*7%16)},{repeat:1});s.wrapS=s.wrapT=an,s.repeat.set(2,2);let a=new we({map:s,transparent:!0,opacity:.9,side:Re}),o=new Nt({color:3108767,flatShading:!0,roughness:.7,metalness:.3}),l=[];rt.gates.forEach((u,d)=>{for(let x of[-57.6,-52.4])for(let g of[-2.3,2.3])t.boxB(u+g,i,x,.22,3.4,.22,it.yellow);for(let x of[-2.3,2.3])t.box(u+x,i+3.5,-55,.3,.3,5.6,it.yellow);for(let x of[-57.6,-55,-52.4])t.box(u,i+3.5,x,4.9,.3,.3,it.yellow);t.boxB(u,i+3.3,-55,1,.8,1,it.steelD),t.box(u,i+2.2,-55.4,.08,2.4,.08,it.steelD);let f=new yt(new Qt(4.15,3.4,.4),o);f.position.set(u,4.3,-55.4),f.castShadow=!0,r.scene.add(f);let p=new yt(new Ce(3.9,8.6),a);p.position.set(u,1.5,-50.3),p.rotation.x=-(Math.PI/2-.417),r.scene.add(p),l.push({mesh:f,fall:p,open:d<2?1:.28}),r.addInter("gate:"+d,u,-52.9,{y:i,ry:Math.PI,h:5.2})}),t.box(12,-1.1,-48,20,3.8,8,n),t.box(12,2.6,-44.2,20,3.6,.4,14275268),t.box(2.2,2.6,-48,.4,3.6,8,14275268),t.box(21.8,2.6,-48,.4,3.6,8,14275268),t.box(12,3.6,-44,20,.5,.1,it.celeste);for(let u=2;u<=22;u+=5)t.box(u,4.5,-48,.25,.25,8,it.steel);t.box(12,4.5,-44.2,20.4,.25,.4,it.steel),r.glassBatch.box(12,4.55,-48.1,19.6,.08,7.6,16777215),r.addSolid(2,22,-52,-44,4.6,!0);let c=[],h=new Nt({color:15132390,flatShading:!0,roughness:.5,metalness:.4});rt.turbs.forEach((u,d)=>{t.cyl(u,.8,-48,1.55,1.7,1.3,15900730,12),t.cyl(u,2.1,-48,.5,.5,.5,it.steelD,8);let f=new ie,p=new yt(new Pe(1.35,1.35,.22,12),h);f.add(p);for(let x=0;x<3;x++){let g=new yt(new Qt(2.6,.12,.34),new Nt({color:14100029,roughness:.6}));g.rotation.y=x*Math.PI/3,g.position.y=.14,f.add(g)}f.position.set(u,2.45,-48),r.scene.add(f),c.push(f),t.box(u,.1,-44.1,2.2,1,.5,2042419),r.addInter("turb:"+d,u,-52.9,{y:i,ry:Math.PI,h:4.2})}),ln(r,"CENTRAL HIDROEL\xC9CTRICA",31,r.groundAt(31,-50),-49.5,-.5,7.5,1.3),ln(r,"SALA DE M\xC1QUINAS",12,2.2,-44,0,6,.9,{bg:"#1c3d5a"});for(let u=-16;u<=16;u+=4){let d=new yt(new ge(.4,6,5),new Nt({color:16743205,flatShading:!0}));d.position.set(u,Wi,-62.5),r.scene.add(d),(r.dyn.buoys=r.dyn.buoys||[]).push(d)}r.updaters.push((u,d)=>{let f=d.grid;s.offset.y+=u*1.6,l.forEach((p,x)=>{let g=f.hydro.gates[x].reg?.28:1;p.open=Gt(p.open,g,1.5,u),p.mesh.position.y=4.3+p.open*2.3,p.fall.scale.x=.3+.7*p.open,p.fall.material.opacity=.9,Math.random()<p.open*60*u&&d.fx.soft.emit(rt.gates[x]+(Math.random()-.5)*3.6*p.open,.3,-46.3+Math.random(),(Math.random()-.5)*2,1.5+Math.random()*2.5*p.open,1+Math.random()*2,.8,.5,1.3,16777215,.8,5,1)}),c.forEach((p,x)=>{p.rotation.y+=u*(f.hydroUnit[x]/ke.hydro)*9,f.hydroUnit[x]>1&&Math.random()<14*u&&d.fx.soft.emit(rt.turbs[x]+(Math.random()-.5)*1.6,.15,-43.6,Math.random()-.5,.3,1.5+Math.random()*2,1,.4,1,16777215,.6,0,.8)}),r.dyn.buoys.forEach((p,x)=>{p.position.y=Wi+Math.sin(r.time*1.5+x)*.1})})}function eu(r){let t=r.batch,e=r.rand,i=[],n=new Nt({color:16250866,flatShading:!0,roughness:.6,transparent:!0});rt.windT.forEach(([l,c],h)=>{let u=n.clone(),d=r.groundAt(l,c);t.cyl(l,d-.3,c,2.3,2.5,.6,it.concrete,10),t.cyl(l,d,c,.5,1,22,16053487,10),t.boxB(l,d+.3,c+1,.7,1.5,.1,9080726),r.addCircle(l,c,1.25);let f=new ie;f.position.set(l,d+22.3,c);let p=new yt(new Qt(1.5,1.4,3.4),u);p.position.z=-.5,p.castShadow=!0,f.add(p);let x=new yt(new ge(.22,6,5),r.mats.beacon);x.position.set(0,.85,-1.6),f.add(x);let g=new ie;g.position.z=1.5,f.add(g);let m=new yt(new vi(.62,1.3,8),u);m.rotation.x=Math.PI/2,m.position.z=.2,g.add(m);for(let y=0;y<3;y++){let _=new Pe(.1,.5,10.5,4);_.scale(1,1,.3),_.translate(0,5.6,0);let v=new yt(_,u);v.rotation.z=y*Math.PI*2/3,v.castShadow=!0,g.add(v)}r.scene.add(f),i.push({nac:f,rotor:g,speed:0,y:d,mat:u}),r.addInter("wind:"+h,l+2.2,c+1.6,{ry:.6,h:3.4})});let[s,a]=rt.windTx,o=r.groundAt(s,a);t.boxB(s,o,a,11,.08,8,12169370),Sl(r,s-5.5,s+5.5,a-4,a+4,o,[s-1.6,s+1.6]),ma(r,s-2.2,o,a-1,1.1),ga(r,s+2.6,o,a-1.4,Math.PI/2,5,6.5),t.boxB(s+3.2,o,a+2.2,1.6,2,1,9213084),r.addInter("wind:tx",s,a+2.6,{y:o,ry:0,h:3.6}),ln(r,"PARQUE E\xD3LICO LAS CUCHILLAS",41,r.groundAt(41,17.5),17.5,.6,7.5,1.2);for(let l=0;l<16;l++){let c=34+e()*68,h=-38+e()*62;if(r.nearRoad(c,h,4)||rt.windT.some(p=>Math.hypot(p[0]-c,p[1]-h)<6)||Ti(c,h)<6)continue;let u=r.groundAt(c,h),d=e()*6,f=l%3===0;f?(t.box(c,u+.55,h,.6,.55,1,15986918,d),t.box(c+Math.sin(d)*.6,u+.7,h+Math.cos(d)*.6,.32,.34,.4,3879980,d)):(t.box(c,u+.95,h,.85,.8,1.8,l%2?10177066:2893346,d),t.box(c+Math.sin(d)*1.1,u+1.1,h+Math.cos(d)*1.1,.5,.5,.6,15986918,d));for(let[p,x]of[[-.25,-.5],[.25,-.5],[-.25,.5],[.25,.5]]){let g=Math.cos(d),m=Math.sin(d),y=f?.6:1;t.boxB(c+(p*g+x*m)*y,u,h+(-p*m+x*g)*y,.14,f?.35:.6,.14,f?3879980:4864556)}}r.updaters.push((l,c)=>{let h=c.grid,u=Math.atan2(-Math.cos(h.windDir),-Math.sin(h.windDir));if(i.forEach((d,f)=>{d.nac.rotation.y=Gt(d.nac.rotation.y,u,.6,l);let p=h.windP.t[f],x=p.on&&!p.fault,g=h.windUnit[f]/ke.wind;d.speed=Gt(d.speed,x?g>.01?.5+g*2.8:.3*h.wind:0,1.2,l),d.rotor.rotation.z+=d.speed*l;let m=c.focus.x-c.cam.x,y=c.focus.y-c.cam.y,_=c.focus.z-c.cam.z,v=d.nac.position.x-c.cam.x,T=d.nac.position.y-c.cam.y,S=d.nac.position.z-c.cam.z,E=ht((v*m+T*y+S*_)/(m*m+y*y+_*_),0,1),P=Math.hypot(v-m*E,T-y*E,S-_*E);d.mat.opacity=Gt(d.mat.opacity,ct(.14,1,Se(6,15,P)),6,l)}),Math.random()<h.wind*55*l){let d=rt.windT[Math.floor(Math.random()*5)],f=d[0]+(Math.random()-.5)*50,p=d[1]+(Math.random()-.5)*50,x=9+h.wind*14,g=r.terrainAt(f,p)+2+Math.random()*10;for(let m=0;m<5;m++)c.fx.soft.emit(f-Math.cos(h.windDir)*m*.7,g,p-Math.sin(h.windDir)*m*.7,Math.cos(h.windDir)*x,0,Math.sin(h.windDir)*x,1.3,.22-m*.03,.05,16777215,.55-m*.08,0,0)}})}function iu(r){let t=r.batch,e=[],i=ai(64,64,p=>{p.fillStyle="#ffffff",p.fillRect(0,0,64,64),p.strokeStyle="#9db4d8",p.lineWidth=2;for(let x=0;x<=64;x+=16)p.beginPath(),p.moveTo(x,0),p.lineTo(x,64),p.moveTo(0,x),p.lineTo(64,x),p.stroke()});i.wrapS=i.wrapT=an,i.repeat.set(2,6),rt.solar.forEach(([p,x],g)=>{let m=r.groundAt(p,x),y=new Nt({color:11836010,map:i,roughness:.35,metalness:.35}),_=[];for(let v of[-4.3,0,4.3]){for(let S of[-4.6,0,4.6])t.boxB(p+v,m,x+S,.18,1.8,.18,it.steel);t.box(p+v,m+1.8,x,.16,.16,11.4,it.steelD);let T=new yt(new Qt(3.7,.1,11),y);T.position.set(p+v,m+1.95,x),T.castShadow=!0,T.receiveShadow=!0,r.scene.add(T),_.push(T)}r.addSolid(p-6.2,p+6.2,x-5.6,x+5.6),e.push({rows:_,mat:y,clean:0,tilt:[.7,-.55,.4,-.75][g],miss:[.7,-.55,.4,-.75][g]}),r.addInter("solar:"+g,p,x+7.4,{y:m,ry:Math.PI,h:3.4})});let[n,s]=rt.inverter,a=r.groundAt(n,s);t.boxB(n,a,s,4.2,2.6,2.6,it.white),t.boxB(n,a+2.6,s,4.5,.2,2.9,14341318),t.boxB(n,a+1.9,s,4.24,.3,2.64,it.yellow);for(let p=-1;p<=1;p++)t.boxB(n+p*1.2,a+.3,s+1.32,.8,1.2,.06,9213084);r.addSolid(n-2.1,n+2.1,s-1.3,s+1.3),t.box(n+12,a+.05,s,22,.1,.5,9209462),ln(r,"PARQUE SOLAR Y BATER\xCDAS",-52,r.groundAt(-52,-59.2),-59.4,0,7,1.2);let[o,l]=rt.batYard,c=r.groundAt(o,l),h=[];t.boxB(o,c,l,15,.08,17,12433058);let u=new Nt({color:797210,emissive:5111712,emissiveIntensity:1.6});for(let p of[-3.3,3.3])for(let x of[-5.2,0,5.2]){let g=o+p,m=l+x;t.boxB(g,c+.2,m,5.6,2.5,2.5,16118766),t.boxB(g,c+1.5,m,5.64,.5,2.54,it.celeste),t.boxB(g,c,m,5.2,.2,2.2,it.steelD),t.boxB(g+2.2,c+2.7,m,.9,.45,1.4,12106946),t.box(g-1.4,c+1.2,m+1.27,.06,2,.04,12433582),t.box(g+.2,c+1.2,m+1.27,.06,2,.04,12433582),t.box(g-.6,c+.75,m+1.27,1.9,.26,.05,1780258);let y=new yt(new Qt(1.8,.18,.06),u);y.position.set(g-.6,c+.75,m+1.3),r.scene.add(y),h.push({m:y,x0:g-1.5}),r.addSolid(g-2.8,g+2.8,m-1.25,m+1.25)}ga(r,o,c,l-7.6,0,6,6),r.addInter("bat",rt.batConsole[0],rt.batConsole[1],{ry:0,h:3.6});let d=new Et(11836010),f=new Et(2047898);r.updaters.push((p,x)=>{let g=x.grid,m=Math.PI*(g.hour-6)/12,y=Math.sin(m)>.02,_=y?-ht(Math.PI/2-m,-.95,.95):0;e.forEach((T,S)=>{let E=g.solar.a[S],P=E.on&&!E.fault;T.clean=Gt(T.clean,P?1:0,2,p),T.mat.color.copy(d).lerp(f,T.clean),T.tilt=Gt(T.tilt,P?_:T.miss,1.5,p),T.rows.forEach(b=>{b.rotation.z=T.tilt}),P&&g.solarUnit[S]>9&&Math.random()<1.5*p&&x.fx.glow.emit(rt.solar[S][0]+(Math.random()-.5)*11,T.rows[0].position.y+.4,rt.solar[S][1]+(Math.random()-.5)*10,0,.6,0,.6,.9,.1,16773280,.9,0,0)});let v=g.bat.connected?g.bat.soc:0;u.emissive.set(g.bat.connected?v<.25?16734797:v<.6?16763196:5111712:2240563),h.forEach(T=>{let S=Math.max(.03,v);T.m.scale.x=S,T.m.position.x=T.x0+.9*S})})}function nu(r){let t=r.batch,e=r.rand,i=2,[n,s]=rt.boiler;t.boxB(n+2,i,s+3,9,9.5,9,8364922),t.boxB(n+2,i+9.5,s+3,9.4,.3,9.4,6127450);for(let f=-3;f<=3;f++)t.boxB(n+2+f*1.2,i+.4,s-1.53,.12,8.8,.06,7115114);t.boxB(n-7,i,s+3.5,8,5.2,7,15262418),t.boxB(n-7,i+5.2,s+3.5,8.4,.3,7.4,it.celeste),r.winBatch[2].add(new Ce(5,1.2),16777215,n-7,i+3.4,s-.04,1,1,1,0,Math.PI,0,0),t.cyl(n+9.2,i,s+5,.75,1,19,16052714,10),t.cyl(n+9.2,i+13,s+5,.86,.9,1.4,it.red,10),t.cyl(n+9.2,i+16.6,s+5,.8,.83,1.4,it.red,10),r.addSolid(n-2.5,n+6.5,s-1.5,s+7.5),r.addSolid(n-11,n-3,s,s+7),r.addOcc(n-2.5,n+6.5,s-1.5,s+7.5,i+9.8),r.addOcc(n-11,n-3,s,s+7,i+5.5),r.addCircle(n+9.2,s+5,1.2);let a=new Nt({color:4202508,emissive:16742938,emissiveIntensity:0}),o=new yt(new Qt(2.2,1.3,.1),a);o.position.set(n+2,i+1.6,s-1.56),r.scene.add(o);let[l,c]=rt.chips;for(let f of[-4,4])for(let p of[-3.2,3.2])t.boxB(l+f,i,c+p,.25,4.6,.25,it.steel);t.box(l,i+4.8,c,9.4,.25,7.6,12106946,0,0,.08),t.add(new vi(2.6,2.6,8),13215339,l-1.6,i+1.3,c-.5),t.add(new vi(2,2,8),13939322,l+2.2,i+1,c+.6),t.add(new vi(1.4,1.3,7),12556892,l+.4,i+.65,c+2.2),r.addCircle(l-1.6,c-.5,2.2),r.addCircle(l+2.2,c+.6,1.7),t.box(l+7,i+3.4,c+3.2,9.4,.3,1,4015696,.38,0,.42),t.boxB(l+4.4,i,c+2.2,.2,1.6,.2,it.steel),t.boxB(l+8.6,i,c+3.8,.2,4.2,.2,it.steel);for(let f=0;f<3;f++)for(let p=0;p<4-f;p++)t.cyl(l-7+p*.9+f*.45,i+.42+f*.75,c+8,.4,.4,5,11041615,7,Math.PI/2,0,0);t.boxB(l-4,i+.4,c-6,2.4,1.2,1.6,it.yellow),t.boxB(l-4.4,i+1.6,c-6,1.2,1,1.4,3356735),t.box(l-2.2,i+.9,c-6,1.6,.9,1.5,it.steelD,0,0,.3);for(let f of[-.8,.8])for(let p of[-.85,.85])t.cyl(l-4+f,i+.45,c-6+p,.45,.45,.3,2237738,8,Math.PI/2,0,0);r.addInter("bio:chips",l+.5,c+4.6,{ry:0,h:3.4}),r.addInter("bio:boiler",n-1.2,s-3.4,{ry:0,h:3.6});let[h,u]=rt.bioSub;t.boxB(h,i,u,9,.08,7.5,12169370),Sl(r,h-4.5,h+4.5,u-3.75,u+3.75,i,[h-1.5,h+1.5]),ma(r,h-1.6,i,u-.8,1),ga(r,h+2.2,i,u-1.6,Math.PI/2,4.6,6.3),r.addInter("bio:sub",h,u+2.2,{ry:0,h:3.6}),ln(r,"PLANTA DE BIOMASA",45,r.groundAt(45,66.4),66.6,.2,6.5,1.2,{bg:"#2f5d2a",border:"#c9f29b"});let d=(f,p,x,g)=>{for(let m=f;m<=p;m+=3.1)for(let y=x;y<=g;y+=3.1){let _=m+(e()-.5)*.6,v=y+(e()-.5)*.6;Ti(_,v)<7||r.nearRoad(_,v,3.2)||r.tree("euca",_,v,.85+e()*.4)}};d(42,106,33,47),d(84,106,52,74),d(44,78,74,77),r.updaters.push((f,p)=>{let x=p.grid.bio.pressure;a.emissiveIntensity=x*(2+Math.sin(r.time*9)*.5),x>.05&&Math.random()<x*26*f&&p.fx.soft.emit(n+9.2+(Math.random()-.5)*.6,i+19.4,s+5,Math.cos(p.grid.windDir)*(1+p.grid.wind*4),2.2+Math.random(),Math.sin(p.grid.windDir)*(1+p.grid.wind*3),3.2,1.2,4.6,16777215,.75,-.25,.25),r.mats.charger.emissiveIntensity=p.grid.bio.routed?2.2+Math.sin(r.time*6)*.6:0})}function su(r){let t=it.asphalt,e=it.gravel;r.road([[-10,27],[8,27],[22,26],[34,22.5]],3.4,t),r.road([[34,22.5],[42,16.5],[48,12.5]],2.6,e),r.road([[48,12.5],[57,5],[66,-1]],2.4,e),r.road([[66,-1],[60,-14],[54.5,-25.5]],2.2,e),r.road([[66,-1],[70,-18],[72.5,-33]],2.2,e),r.road([[66,-1],[78,-8],[88,-10]],2.2,e),r.road([[66,-1],[76,8],[85,13.5]],2.2,e),r.road([[-10,69],[8,70],[28,66.5],[44,62.5]],3.6,t),r.road([[-44,11],[-45.5,4],[-46,-3]],3.4,t),r.road([[-46,-31],[-47,-42],[-52,-52],[-57,-58.6]],3.4,t),r.road([[-12,13],[4,2],[16,-14],[24,-34],[27.5,-49],[26,-55]],3.4,t),r.road([[-24,-55],[-36,-57.5],[-47,-59.2],[-57,-58.6]],3.2,t);let i=r.batch,n=rt.bridge,s=l=>2.02+1.7*Math.sin(Math.PI*ht((l-n.z0)/(n.z1-n.z0),0,1));r.addPlatform(n.x-2.3,n.x+2.3,n.z0,n.z1,(l,c)=>s(c));let a=14,o=(n.z1-n.z0)/a;for(let l=0;l<a;l++){let c=n.z0+l*o,h=c+o,u=(c+h)/2,d=-Math.atan2(s(h)-s(c),o);i.box(n.x,s(u)-.2,u,4.6,.4,o+.12,it.concrete,0,d),i.box(n.x,s(u)+.01,u,3.6,.03,o+.1,t,0,d);for(let f of[-1,1])i.boxB(n.x+f*2.2,s(c),c,.14,1,.14,it.white),i.box(n.x+f*2.2,s(u)+.95,u,.12,.12,o+.1,it.white,0,d)}for(let l of[-23.5,-10.5])for(let c of[-1.5,1.5])i.cyl(n.x+c,-3,l,.5,.6,s(l)+2.8,it.concreteD,8);r.lamp(n.x+2.6,n.z1+1,-Math.PI/2),r.lamp(n.x-2.6,n.z0-1,Math.PI/2)}function ru(r){let t=r.batch,e=[],i=(h,u,d,f)=>{let p=u.map(([m,y,_],v)=>{let T=r.groundAt(m,y),S=v===0||v===u.length-1,E=u[Math.max(0,v-1)],P=u[Math.min(u.length-1,v+1)],b=Math.atan2(P[0]-E[0],P[1]-E[1]);if(!S){t.add(new Pe(.28,1.25,13,4),it.steel,m,T+6.5,y,1,1,1,0,b+Math.PI/4,0),t.box(m,T+11.2,y,6.6,.24,.3,it.steel,b),t.box(m,T+12.9,y,3.6,.2,.26,it.steel,b);for(let M of[-3,3])t.cyl(m+Math.cos(b)*M,T+10.5,y-Math.sin(b)*M,.07,.12,.7,12150858,5);r.addCircle(m,y,1)}return{x:m,y:T+(S?_||6:10.5),z:y,ry:b,end:S}}),x=[];for(let m=0;m<p.length-1;m++){let y=p[m],_=p[m+1];for(let v of[-3,0,3]){let T=null;for(let S=0;S<=10;S++){let E=S/10,P=4*E*(1-E)*1.7,b=y.end?v*.6:v,M=_.end?v*.6:v,I=y.y+(v===0&&!y.end?2.3:0),U=_.y+(v===0&&!_.end?2.3:0),Y=[ct(y.x+Math.cos(y.ry)*b,_.x+Math.cos(_.ry)*M,E),ct(I,U,E)-P,ct(y.z-Math.sin(y.ry)*b,_.z-Math.sin(_.ry)*M,E)];T&&e.push(...T,...Y),T=Y,v===0&&x.push(new C(Y[0],Y[1],Y[2]))}}}let g=[0];for(let m=1;m<x.length;m++)g.push(g[m-1]+x[m].distanceTo(x[m-1]));r.lines[h]={path:x,cum:g,len:g[g.length-1],color:d,cap:f,phase:Math.random(),level:0}},n=[rt.substation[0]-1.4,rt.substation[1]-4.1,7];i("eolica",[[rt.windTx[0]+2.6,rt.windTx[1]-1.4,6.5],[33,12],[14,15],[-2,16.5],n],10217471,40),i("hidro",[[23,-50,3],[31,-42],[26,-22],[15,-4],[0,9],n],5951999,144),i("solar",[[rt.batYard[0],rt.batYard[1]-7.6,6],[-39,-50],[-38,-33],[-30,-5],[-22,6],n],16769126,98),i("biomasa",[[rt.bioSub[0]+2.2,rt.bioSub[1]-1.6,6.3],[56,46],[36,40],[16,34],[-4,22],n],11989626,40);let s=[[-11,28],[-11,40],[-11,52],[-11,64]],a=[];s.forEach(([h,u],d)=>{t.cyl(h,2.1,u,.1,.14,7,8018490,6),t.box(h,8.6,u,1.8,.14,.14,8018490),d%2===0&&(t.sph(h-.5,8.95,u,.34,10839871,.9),t.box(h-.5,8.95,u+.3,.16,.2,.1,3810326),t.box(h+.45,8.85,u,.14,.24,.3,11887901),t.box(h+.45,9,u+.16,.1,.1,.12,14262374)),a.push(new C(h,8.7,u))});for(let h=0;h<a.length-1;h++)for(let u of[-.8,.8])e.push(a[h].x+u,a[h].y,a[h].z,a[h+1].x+u,a[h+1].y,a[h+1].z);let o=[0];for(let h=1;h<a.length;h++)o.push(o[h-1]+a[h].distanceTo(a[h-1]));r.lines.ciudad={path:a,cum:o,len:o[o.length-1],color:16767370,cap:1,phase:0,level:0};let l=new ne;l.setAttribute("position",new Ut(e,3)),r.scene.add(new os(l,new Sn({color:2830392})));let c=(h,u)=>{let d=u*h.len,f=1;for(;f<h.cum.length-1&&h.cum[f]<d;)f++;let p=(d-h.cum[f-1])/Math.max(1e-6,h.cum[f]-h.cum[f-1]);return[ct(h.path[f-1].x,h.path[f].x,p),ct(h.path[f-1].y,h.path[f].y,p),ct(h.path[f-1].z,h.path[f].z,p)]};r.updaters.push((h,u)=>{let d=u.grid.out,f={eolica:d.wind,hidro:d.hydro,solar:d.solar+Math.max(0,d.bat),biomasa:d.bio,ciudad:d.pct/100};for(let p in r.lines){let x=r.lines[p],g=ht(f[p]/x.cap,0,1);if(x.level=Gt(x.level,g,3,h),x.level<.02)continue;x.phase=(x.phase+h*(5+30*x.level)/x.len)%1;let m=Math.max(3,Math.round(x.len/14));for(let y=0;y<m;y++){let _=c(x,(x.phase+y/m)%1);u.fx.glow.sprite(_[0],_[1],_[2],1.2+1.8*x.level,x.color,.35+.65*x.level)}}})}function au(r){let t=r.batch,e=da("PARADA",{w:256,h:96,bg:"#0b5a4a",fg:"#ffffff",border:"#7dffb0",size:60}),i=new Nt({map:e,emissive:16777215,emissiveMap:e,emissiveIntensity:.4,roughness:.8});rt.stops.forEach(([n,s],a)=>{let o=r.groundAt(n,s);t.boxB(n,o,s-1.1,3,.08,1.8,12433058);for(let l of[-1.3,1.3])t.boxB(n+l,o,s-1.7,.12,2.6,.12,it.steelD);t.box(n,o+2.65,s-1.15,3.2,.12,1.7,it.celeste),t.box(n,o+1.4,s-1.74,2.6,1.6,.05,14676987),t.boxB(n,o+.35,s-1.35,2.2,.12,.5,it.wood),t.cyl(n+1.9,o,s-.6,.06,.07,3.4,it.steelD,6),r.addCircle(n+1.9,s-.6,.25),r.addSolid(n-1.4,n+1.4,s-1.85,s-1.6,o+2.7);for(let l of[0,Math.PI]){let c=new yt(new Ce(1.5,.56),i);c.position.set(n+1.9,o+3.2,s-.6+(l?-.03:.03)),c.rotation.y=l,r.scene.add(c)}r.addInter("stop:"+a,n,s,{console:!1,y:o,h:4.4})})}var Wg=[[-24,71.8],[-44,52.3],[30.5,-41],[37.5,24.2],[-52,-56.2],[40.5,60]];function ou(r){let t=r.rand,e=r.batch,[i,n]=rt.mateo,s=r.groundAt(i-4,n+3);r.houses.push({x:i-4.5,y:s,z:n+3.5,w:5.4,d:4.4,h:2.5,rh:1.9,c:15853520,rc:11770458,ry:.3}),r.addSolid(i-7.2,i-1.8,n+1.3,n+5.7),r.tree("ombu",i+7.5,n+7.5,1.1),e.cyl(i-.4,r.groundAt(i-.4,n+2.8),n+2.8,.5,.5,.5,7171437,8);for(let l=0;l<6;l++)e.boxB(i+.5+l*1.6,r.groundAt(i+.5+l*1.6,n-3.4),n-3.4,.14,1.1,.14,it.wood);r.addInter("npc:mateo",i,n,{console:!1,h:3.6});let a=0,o=0;for(;a<230&&o++<4e3;){let l=ct($.minX+4,$.maxX-3,t()),c=ct($.minZ+3,$.maxZ-4,t());if(Ti(l,c)<5||Xi(l,c)<1.6||l>-88&&l<20&&c>6&&c<80||l>-92&&l<-33&&c>-107&&c<-57||l>38&&c>28||Cn(l,c)>-7||c<-44&&c>-62&&Math.abs(l)<32||r.nearRoad(l,c,3.5)||Math.hypot(l-i,c-n)<9||Wg.some(x=>Math.hypot(x[0]-l,x[1]-c)<5)||Math.hypot(l-rt.windTx[0],c-rt.windTx[1])<9||rt.windT.some(x=>Math.hypot(x[0]-l,x[1]-c)<7))continue;let h=ks(l,c)<22||Cn(l,c)>-16,u=l>30;if(!h&&t()<(u?.8:.45))continue;let d=t(),f=h?d<.3?"ceibo":d<.85?"native":"bush":d<.12?"ombu":d<.5?"native":d<.65?"ceibo":"bush",p=f==="ombu"?.7+t()*.3:.8+t()*.5;a++,!(f!=="bush"&&rt.stops.some(x=>Math.hypot(x[0]-l,x[1]-c)<7))&&r.tree(f,l,c,p)}for(let l=0;l<26;l++){let c=t()*6.283,h=-62+Math.cos(c)*(34+t()*6)*.9,u=-78+Math.sin(c)*30;Ti(h,u)>5&&Cn(h,u)<-7&&!(h>-90&&h<-34&&u>-106&&u<-58)&&r.tree("native",h,u,.8)}for(let l=0;l<40;l++){let c=ct($.minX,$.maxX,t()),h=ct($.minZ,$.maxZ,t()),u=Xi(c,h);u>1.5&&!(c>-88&&c<20&&h>6&&h<80)&&!r.nearRoad(c,h,2.5)&&e.add(new Je(.4+t()*.6,0),10131084,c,u+.1,h,1,.6,1,0,t()*6,0)}}var Xg=`
attribute vec4 aColor; attribute float aSize; varying vec4 vColor; uniform float uScale;
void main(){ vColor=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mv;
  gl_PointSize=clamp(aSize*uScale/max(0.1,-mv.z),1.0,300.0); }`,qg=r=>`
varying vec4 vColor;
void main(){ float d=length(gl_PointCoord-0.5);
  ${r?"float a=smoothstep(0.5,0.05,d);":"if(d>0.5) discard; float a=1.0;"}
  gl_FragColor=vec4(vColor.rgb,vColor.a*a);
#include <colorspace_fragment>
}`,cn=new Et,xa=class{constructor(t,e,i){this.n=e,this.count=0,this.imm=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.col=new Float32Array(e*4),this.grav=new Float32Array(e),this.drag=new Float32Array(e);let n=e+400;this.bp=new Float32Array(n*3),this.bc=new Float32Array(n*4),this.bs=new Float32Array(n),this.immList=[];let s=new ne;s.setAttribute("position",new pe(this.bp,3).setUsage(us)),s.setAttribute("aColor",new pe(this.bc,4).setUsage(us)),s.setAttribute("aSize",new pe(this.bs,1).setUsage(us)),this.mat=new si({uniforms:{uScale:{value:600}},vertexShader:Xg,fragmentShader:qg(i),transparent:!0,depthWrite:!1,blending:i?es:en}),this.mesh=new ls(s,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i?12:11,t.add(this.mesh)}emit(t,e,i,n,s,a,o,l,c,h,u,d,f){if(this.count>=this.n)return;let p=this.count++;this.p[p*3]=t,this.p[p*3+1]=e,this.p[p*3+2]=i,this.v[p*3]=n,this.v[p*3+1]=s,this.v[p*3+2]=a,this.life[p]=o,this.max[p]=o,this.s0[p]=l,this.s1[p]=c,this.grav[p]=d,this.drag[p]=f,cn.set(h),this.col[p*4]=cn.r,this.col[p*4+1]=cn.g,this.col[p*4+2]=cn.b,this.col[p*4+3]=u}sprite(t,e,i,n,s,a){this.immList.length<400*6&&this.immList.push(t,e,i,n,s,a)}update(t){let e=0;for(let s=0;s<this.count;s++){if(this.life[s]-=t,this.life[s]<=0)continue;let a=1-this.drag[s]*t;this.v[s*3]*=a,this.v[s*3+2]*=a,this.v[s*3+1]=this.v[s*3+1]*a-this.grav[s]*t,this.p[s*3]+=this.v[s*3]*t,this.p[s*3+1]+=this.v[s*3+1]*t,this.p[s*3+2]+=this.v[s*3+2]*t,e!==s&&(this.p.copyWithin(e*3,s*3,s*3+3),this.v.copyWithin(e*3,s*3,s*3+3),this.col.copyWithin(e*4,s*4,s*4+4),this.life[e]=this.life[s],this.max[e]=this.max[s],this.s0[e]=this.s0[s],this.s1[e]=this.s1[s],this.grav[e]=this.grav[s],this.drag[e]=this.drag[s]);let o=1-this.life[e]/this.max[e];this.bp[e*3]=this.p[e*3],this.bp[e*3+1]=this.p[e*3+1],this.bp[e*3+2]=this.p[e*3+2],this.bc[e*4]=this.col[e*4],this.bc[e*4+1]=this.col[e*4+1],this.bc[e*4+2]=this.col[e*4+2],this.bc[e*4+3]=this.col[e*4+3]*(o<.15?o/.15:1-(o-.15)/.85),this.bs[e]=this.s0[e]+(this.s1[e]-this.s0[e])*o,e++}this.count=e;let i=this.immList;for(let s=0;s<i.length;s+=6)this.bp[e*3]=i[s],this.bp[e*3+1]=i[s+1],this.bp[e*3+2]=i[s+2],this.bs[e]=i[s+3],cn.set(i[s+4]),this.bc[e*4]=cn.r,this.bc[e*4+1]=cn.g,this.bc[e*4+2]=cn.b,this.bc[e*4+3]=i[s+5],e++;i.length=0;let n=this.mesh.geometry;n.setDrawRange(0,e),n.attributes.position.needsUpdate=!0,n.attributes.aColor.needsUpdate=!0,n.attributes.aSize.needsUpdate=!0}},ya=class{constructor(t){this.soft=new xa(t,1600,!1),this.glow=new xa(t,1600,!0)}setScale(t){this.soft.mat.uniforms.uScale.value=t,this.glow.mat.uniforms.uScale.value=t}update(t){this.soft.update(t),this.glow.update(t)}puff(t,e,i,n=8,s=14272931,a=1.4){for(let o=0;o<n;o++){let l=Math.random()*6.283,c=a*(.4+Math.random());this.soft.emit(t,e,i,Math.cos(l)*c,.6+Math.random(),Math.sin(l)*c,.5+Math.random()*.3,.35,.9,s,.7,1.5,2.5)}}sparks(t,e,i,n=10,s=16765503){for(let a=0;a<n;a++){let o=Math.random()*6.283,l=2+Math.random()*4;this.glow.emit(t,e,i,Math.cos(o)*l,2+Math.random()*4,Math.sin(o)*l,.35+Math.random()*.35,.3,.05,s,1,12,1)}}splash(t,e,i,n=14){for(let s=0;s<n;s++){let a=Math.random()*6.283,o=1+Math.random()*2.5;this.soft.emit(t,e,i,Math.cos(a)*o,2.5+Math.random()*3,Math.sin(a)*o,.6+Math.random()*.3,.3,.12,16777215,.95,11,.5)}}firework(t,e,i,n){for(let s=0;s<70;s++){let a=Math.random()*6.283,o=Math.acos(2*Math.random()-1),l=9+Math.random()*5;this.glow.emit(t,e,i,Math.sin(o)*Math.cos(a)*l,Math.cos(o)*l,Math.sin(o)*Math.sin(a)*l,1.2+Math.random()*.7,1.4,.2,n,1,3.5,1.3)}}};var Ke={IDLE:"idle",RUN:"run",JUMP:"jump",SWIM:"swim",INTERACT:"interact",CELEBRATE:"celebrate"},_a=class{constructor(t,e,i,n){this.world=e,this.fx=i,this.audio=n,this.pos=new C(rt.startCapi[0],ri,rt.startCapi[1]),this.vel=new C,this.vy=0,this.heading=Math.PI,this.state=Ke.IDLE,this.grounded=!0,this.swimming=!1,this.t=0,this.detour=0,this.side=1,this.stuckAll=0,this.lastGoto=null,this.phase=0,this.dash=0,this.busy=0,this.cele=0,this.goto=null,this.stuck=0,this.blink=2,this.sniff=3,this.led=0,this.j={legL:0,legR:0,armL:0,armR:0,armLz:0,armRz:0,tilt:0,roll:0,headX:0,lift:0,sy:1},this.build(t)}build(t){let e=ai(64,64,M=>{M.fillStyle="#a56f3e",M.fillRect(0,0,64,64);let I=Gi(3);for(let U=0;U<420;U++)M.fillStyle=I()<.5?"rgba(80,45,20,0.28)":"rgba(215,160,100,0.25)",M.fillRect(I()*64,I()*64,1.5,4+I()*6)},{repeat:2}),i=(M,I={})=>new Nt({color:M,roughness:.8,...I}),n=new Nt({map:e,roughness:1}),s=i(8014374,{roughness:1}),a=i(13607020,{roughness:1}),o=i(2825234),l=i(16761888,{roughness:.45}),c=i(5227511,{roughness:.7,side:Re});this.mats={helmet:l,vest:c};let h=this.mats.band=i(15859563,{emissive:13162554,emissiveIntensity:.5}),u=i(11976391,{metalness:.6,roughness:.35}),d=i(4015696),f=(M,I,U,Y,L,N)=>{let k=new yt(M,I);return k.position.set(U,Y,L),k.castShadow=!0,N.add(k),k},p=new ie,x=new ie;x.position.y=1,p.add(x),this.root=p,this.rig=x,f(new ge(.62,16,12),n,0,.02,0,x).scale.set(1,1.12,.92),f(new ge(.5,12,10),a,0,-.08,.3,x).scale.set(.82,.95,.5),f(new Pe(.645,.7,.74,16,1,!0),c,0,.14,0,x).scale.z=.94;for(let M of[-.08,.3]){let I=f(new En(.69,.045,6,20),h,0,M,0,x);I.rotation.x=Math.PI/2,I.scale.y=.94}let g=ai(64,64,M=>{M.fillStyle="#ffd23f",M.beginPath(),M.arc(32,32,30,0,7),M.fill(),M.fillStyle="#12325a",M.beginPath(),M.moveTo(37,6),M.lineTo(16,36),M.lineTo(30,36),M.lineTo(25,58),M.lineTo(48,26),M.lineTo(34,26),M.closePath(),M.fill()}),m=f(new $r(.15,12),new Nt({map:g,roughness:.6}),-.3,.3,.6,x);m.rotation.y=-.5;let y=f(new En(.66,.05,6,18),o,0,-.34,0,x);y.rotation.x=Math.PI/2,f(new Qt(.14,.12,.08),l,0,-.34,.63,x),this.beltWrench=f(new Qt(.07,.42,.07),u,.62,-.52,.12,x);let _=new ie;_.position.set(0,.12,-.66),x.add(_),f(new Qt(.66,.8,.32),d,0,0,0,_),f(new Qt(.7,.1,.36),l,0,.4,0,_),f(new Qt(.44,.62,.02),i(1120285),0,-.02,-.165,_),this.leds=[];for(let M=0;M<5;M++){let I=new Nt({color:1384474,emissive:5111712,emissiveIntensity:0});this.leds.push(f(new Qt(.36,.085,.03),I,0,-.26+M*.12,-.18,_)),this.leds[M].castShadow=!1}let v=(M,I,U,Y,L,N)=>{let k=new ie;k.position.set(M,I,U),x.add(k),f(new Yr(L,Y,4,8),n,0,-Y/2-L*.4,0,k);let q=f(new ge(L*1.15,8,6),s,0,-Y-L*1.2,N?0:.07,k);return N||q.scale.set(1,.6,1.5),k};this.legL=v(-.27,-.5,0,.22,.18),this.legR=v(.27,-.5,0,.22,.18),this.armL=v(-.66,.36,.05,.4,.13,!0),this.armR=v(.66,.36,.05,.4,.13,!0);let T=new ie;T.position.set(0,-.62,.1),T.rotation.x=-1.2,this.armR.add(T),this.wrench=T,f(new Qt(.07,.6,.07),u,0,.25,0,T),f(new En(.11,.045,5,8,4.6),u,0,.6,0,T);let S=f(new Qt(.44,.32,.04),new Nt({color:1060928,emissive:5232383,emissiveIntensity:1.3,transparent:!0,opacity:.85}),.1,-.62,.22,this.armL);S.rotation.x=-1,this.tablet=S;let E=new ie;E.position.set(0,.86,.06),x.add(E),this.head=E,f(new ge(.56,16,12),n,0,0,0,E).scale.set(1,.92,1),f(new ge(.42,14,10),n,0,-.11,.44,E).scale.set(1.05,.8,1.12),f(new ge(.12,10,8),o,0,.02,.86,E).scale.set(1.35,.7,.55),f(new Qt(.2,.025,.05),o,0,-.25,.85,E),f(new Qt(.055,.08,.04),i(16777215),-.035,-.3,.85,E),f(new Qt(.055,.08,.04),i(16777215),.035,-.3,.85,E),this.eyes=[];for(let M of[-1,1]){let I=f(new ge(.095,10,8),i(1182728,{roughness:.2}),M*.38,.04,.42,E);this.eyes.push(I),f(new ge(.032,6,6),new we({color:16777215}),M*.4,.085,.495,E),f(new ge(.06,8,6),i(15250842,{roughness:1}),M*.3,-.12,.72,E).scale.set(1.3,.6,.6)}this.ears=[];for(let M of[-1,1]){let I=new ie;I.position.set(M*.47,.44,-.1),E.add(I),this.ears.push(I),f(new ge(.14,8,8),s,0,.06,0,I).scale.set(.7,1,.9),f(new ge(.08,6,6),i(14260868),M*.04,.06,.05,I).scale.set(.5,.9,.6);let U=f(new En(.15,.035,5,10),l,M*.44,.42,-.1,E);U.rotation.y=Math.PI/2,U.rotation.x=M*.4}let b=new ie;b.position.set(0,.2,-.04),b.rotation.x=-.3,E.add(b),f(new ge(.58,16,8,0,Math.PI*2,0,Math.PI/2),l,0,.03,0,b).scale.set(1,.72,1.04),f(new Pe(.61,.63,.06,18),l,0,.04,0,b),f(new Qt(.44,.05,.16),l,0,.04,.62,b),f(new Qt(.12,.07,.9),l,0,.45,0,b),this.lamp=f(new Qt(.16,.1,.06),new Nt({color:15268863,emissive:10481919,emissiveIntensity:.6}),0,.2,.57,b),this.wrench.visible=!1,this.tablet.visible=!1,p.traverse(M=>{if(M.isMesh){M.layers.enable(1),M.renderOrder=3;let I=M.material;I.stencilWrite=!0,I.stencilRef=1,I.stencilFunc=wr,I.stencilZPass=na}}),p.position.copy(this.pos),t.add(p)}setLed(t,e){let i=Math.round(ht(t,0,1)*5);this.leds.forEach((n,s)=>{n.material.emissive.set(e?5111712:t<.4?16742989:16763196),n.material.emissiveIntensity=s<i?2.2:.05})}setOutfit(t){this.mats.helmet.color.set(t.helmet),this.mats.vest.color.set(t.vest),this.mats.band.color.set(t.band),this.mats.band.emissive.set(t.band).multiplyScalar(.7)}celebrate(t=2.4){this.cele=t}work(t=1.2){this.busy=t}navigate(t,e,i=.6,n=null){let s=this.nav?this.nav.find(this.pos.x,this.pos.z,t,e):null;this.goto={x:t,z:e,r:i,done:n,path:s,pi:0}}teleport(t,e){this.pos.set(t,this.world.groundAt(t,e),e),this.vel.set(0,0,0),this.vy=0,this.goto=null,this.swimming=!1,this.grounded=!0}update(t,e){let i=this.world,n=this.pos;this.t+=t,this.cele=Math.max(0,this.cele-t),this.busy=Math.max(0,this.busy-t),this.dash=Math.max(0,this.dash-t);let s=e.locked||this.busy>0;this.talking=!!e.talking;let a=0,o=0;if(s)e.locked&&(this.goto=null);else if(e.mx||e.mz){this.goto=null;let P=-Math.sin(e.yaw),b=-Math.cos(e.yaw),M=Math.cos(e.yaw),I=-Math.sin(e.yaw);a=P*e.mz+M*e.mx,o=b*e.mz+I*e.mx;let U=Math.hypot(a,o);U>1&&(a/=U,o/=U)}else if(this.goto){let P=this.goto.x-n.x,b=this.goto.z-n.z;if(Math.hypot(P,b)<(this.goto.r||.6)){let I=this.goto.done;this.goto=null,I&&I()}else{let I=this.goto.path,U=this.goto.x,Y=this.goto.z;if(I){for(;this.goto.pi<I.length-1&&Math.hypot(I[this.goto.pi].x-n.x,I[this.goto.pi].z-n.z)<1;)this.goto.pi++;this.goto.pi<I.length&&(U=I[this.goto.pi].x,Y=I[this.goto.pi].z,this.goto.pi===I.length-1&&Math.hypot(U-n.x,Y-n.z)<.5&&this.goto.pi++)}let L=U-n.x,N=Y-n.z,k=Math.hypot(L,N)||1;if(a=L/k,o=N/k,this.detour>0){this.detour-=t;let q=this.side*1.3,X=Math.cos(q),W=Math.sin(q),J=a*X-o*W;o=a*W+o*X,a=J}}}let l=i.waterAt(n.x,n.z),c=this.swimming?6.8:11.5;this.dash>0&&(c*=2);let h=this.swimming?4:this.grounded?14:5;this.vel.x=Gt(this.vel.x,a*c,h,t),this.vel.z=Gt(this.vel.z,o*c,h,t),e.jump&&!s&&(this.swimming?this.dash<=0&&(this.dash=.55,this.fx.splash(n.x,l+.1,n.z,10),this.audio.splash(.5)):this.grounded&&(this.vy=11.2,this.grounded=!1,this.audio.jump()));let u=(P,b)=>{let M=ht(n.x+P,$.minX+1,$.maxX-1),I=ht(n.z+b,$.minZ+1,$.maxZ-1),U=Math.hypot(M-n.x,I-n.z);if(U<1e-6)return!1;let Y=i.groundAt(M,I,n.y),L=Y-n.y;return(this.grounded||this.swimming)&&L>.7&&L/U>2.4||!this.grounded&&!this.swimming&&L>.25?!1:(n.x=M,n.z=I,!0)},d=this.vel.x*t,f=this.vel.z*t,p=n.x,x=n.z;u(d,f)||u(d,0)||u(0,f),i.resolve(n,.55,n.y);let g=Math.hypot(n.x-p,n.z-x),m=Math.hypot(d,f);this.goto&&(this.goto!==this.lastGoto&&(this.lastGoto=this.goto,this.stuck=0,this.stuckAll=0,this.detour=0,this.side=1),m>1e-4&&g<m*.35?(this.stuck+=t,this.stuckAll+=t,this.stuck>.1&&this.detour<=0&&(this.side=-this.side,this.detour=.7,this.stuck=0),this.stuckAll>2.2&&(this.goto=null)):this.stuck=0);let y=i.groundAt(n.x,n.z,n.y),_=i.waterAt(n.x,n.z),v=y<_-1.2,T=_-1.1;this.swimming&&(v?(n.y=Gt(n.y,T+Math.sin(this.t*2.4)*.05,8,t),this.vy=0):(this.swimming=!1,this.grounded=!0,n.y=Math.max(y,n.y))),this.swimming||(this.grounded?v&&n.y<=T+.4?(this.swimming=!0,this.grounded=!1,this.fx.splash(n.x,_+.1,n.z,18),this.audio.splash(1)):y<n.y-.9?(this.grounded=!1,this.vy=0):n.y=y>n.y?y:Gt(n.y,y,25,t):(this.vy-=30*t,n.y+=this.vy*t,v&&n.y<=T?(this.swimming=!0,n.y=T-.3,this.fx.splash(n.x,_+.1,n.z,22),this.audio.splash(1)):n.y<=y&&this.vy<=0&&(n.y=y,this.grounded=!0,this.vy<-7&&(this.fx.puff(n.x,y+.15,n.z,9,y<_?16777215:14272931),this.audio.land()),this.vy=0)));let S=Math.hypot(this.vel.x,this.vel.z);S>.6&&(this.heading+=Vi(this.heading,Math.atan2(this.vel.x,this.vel.z))*Math.min(1,t*12)),e.face!=null&&S<.6&&(this.heading+=Vi(this.heading,e.face)*Math.min(1,t*10));let E=this.state;if(this.state=this.swimming?Ke.SWIM:this.cele>0&&this.grounded?Ke.CELEBRATE:this.busy>0||e.working?Ke.INTERACT:this.grounded?S>1?Ke.RUN:Ke.IDLE:Ke.JUMP,this.swimming&&S>1.5&&Math.random()<40*t){let P=Math.sin(this.heading),b=Math.cos(this.heading);for(let M of[-1,1])this.fx.soft.emit(n.x-P*.6+b*M*.35,_+.08,n.z-b*.6-P*M*.35,b*M*1.6-P*.4,0,-P*M*1.6-b*.4,1.5,.28,.7,16777215,.75,0,.6)}this.animate(t,S,y,_,E),this.root.position.copy(n),this.root.rotation.y=this.heading}animate(t,e,i,n,s){let a=this.j,o=this.t,l=this.state,c=0,h=0,u=0,d=0,f=.12,p=-.12,x=0,g=0,m=0,y=0,_=1;if(this.wrench.visible=l===Ke.INTERACT,this.beltWrench.visible=!this.wrench.visible,this.tablet.visible=l===Ke.INTERACT,l===Ke.RUN){let E=this.phase;if(this.phase+=e*t*1.25,Math.floor(E/Math.PI)!==Math.floor(this.phase/Math.PI)){let M=i<n,I=this.world.groundAt(this.pos.x,this.pos.z)-this.world.terrainAt(this.pos.x,this.pos.z)>.05;this.audio.step(M?"agua":I?"hormigon":"pasto"),M&&this.fx.splash(this.pos.x,n+.05,this.pos.z,4)}let P=Math.sin(this.phase),b=ht(e/11,.3,1);c=P*1*b,h=-P*1*b,u=-P*.85*b,d=P*.85*b,y=Math.abs(Math.cos(this.phase))*.13*b,g=P*.07,x=.14*b,m=-.08+Math.sin(this.phase*2)*.04}else if(l===Ke.JUMP)c=-.5,h=.35,u=d=-2.3,f=.5,p=-.5,_=1+ht(this.vy*.012,-.1,.16),x=ht(-this.vy*.012,-.2,.25);else if(l===Ke.SWIM){x=1.12,m=-.95,y=0;let E=Math.sin(o*(6+e*.5));c=E*.7-.2,h=-E*.7-.2,u=-1.9+E*.6,d=-1.9-E*.6,g=Math.sin(o*2.2)*.05}else if(l===Ke.INTERACT){if(d=-1.45+Math.sin(o*16)*.3,u=-1,m=.12+Math.sin(o*5)*.08,x=.08,Math.random()<14*t){let E=Math.sin(this.heading),P=Math.cos(this.heading);this.fx.sparks(this.pos.x+E*.9,this.pos.y+1.5,this.pos.z+P*.9,2,16765503)}}else l===Ke.CELEBRATE?(y=Math.abs(Math.sin(o*7.5))*.7,d=-2.9,p=-.25,u=-.4,c=.3,h=-.3,m=-.25,_=1+Math.sin(o*15)*.04):this.talking?(d=-1.25+Math.sin(o*4.6)*.55,p=-.35,u=-.45+Math.sin(o*2.9+1)*.3,f=.3,m=Math.sin(o*6.5)*.07-.05,g=Math.sin(o*1.7)*.04,_=1+Math.sin(o*9)*.012):(_=1+Math.sin(o*2.2)*.018,m=Math.sin(o*.7)*.04,this.sniff-=t,this.sniff<.6&&(m=-.16+Math.sin(o*22)*.05),this.sniff<0&&(this.sniff=3+Math.random()*4));let v=16;a.legL=Gt(a.legL,c,v,t),a.legR=Gt(a.legR,h,v,t),a.armL=Gt(a.armL,u,v,t),a.armR=Gt(a.armR,d,v,t),a.armLz=Gt(a.armLz,f,v,t),a.armRz=Gt(a.armRz,p,v,t),a.tilt=Gt(a.tilt,x,9,t),a.roll=Gt(a.roll,g,v,t),a.headX=Gt(a.headX,m,10,t),a.lift=Gt(a.lift,y,22,t),a.sy=Gt(a.sy,_,14,t),this.legL.rotation.x=a.legL,this.legR.rotation.x=a.legR,this.armL.rotation.x=a.armL,this.armR.rotation.x=a.armR,this.armL.rotation.z=-a.armLz,this.armR.rotation.z=-a.armRz,this.rig.rotation.x=a.tilt,this.rig.rotation.z=a.roll,this.rig.position.y=1+a.lift,this.rig.scale.set(1/Math.sqrt(a.sy),a.sy,1/Math.sqrt(a.sy)),this.head.rotation.x=a.headX,this.head.rotation.z=-a.roll*1.4;let T=Math.sin(o*9)*(Math.sin(o*.9)>.75?.35:.04)+(l===Ke.RUN?Math.sin(this.phase*2)*.12:0);this.ears[0].rotation.z=.25+T,this.ears[1].rotation.z=-.25-T,this.blink-=t;let S=this.blink<.12?.12:1;this.blink<0&&(this.blink=2+Math.random()*3),this.eyes[0].scale.y=S,this.eyes[1].scale.y=S}};var Yg=new Nt({vertexColors:!0,flatShading:!0,roughness:.85});function wl(r){let t=[],e=[];for(let i of[...r.children]){if(!i.isMesh||i.userData.keep){e.push(i);continue}i.updateMatrix();let n=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();n.applyMatrix4(i.matrix);let s=n.attributes.position.count,a=new Float32Array(s*3),o=i.material.color;for(let l=0;l<s;l++)a[l*3]=o.r,a[l*3+1]=o.g,a[l*3+2]=o.b;n.setAttribute("color",new pe(a,3)),n.attributes.uv&&n.deleteAttribute("uv"),t.push(n),r.remove(i)}if(t.length){let i=new yt(Gs(t,!1),Yg);i.castShadow=!0,r.add(i)}return r}var lu={},$g=(r,t={})=>lu[r]||(lu[r]=new Nt({color:r,flatShading:!0,roughness:.85,...t})),zt=(r,t,e,i,n,s)=>{let a=new yt(r,$g(t));return a.position.set(e,i,n),a.castShadow=!0,s.add(a),a},ae=(r,t,e)=>new Qt(r,t,e);function va(r){let t=new ie,e=r.scale||1,i=new ie,n=new ie,s=new ie,a=new ie;i.position.set(-.17,.82,0),n.position.set(.17,.82,0),s.position.set(-.47,1.62,0),a.position.set(.47,1.62,0),zt(ae(.25,.82,.28),r.pants,0,-.41,0,i),zt(ae(.25,.82,.28),r.pants,0,-.41,0,n),zt(ae(.27,.14,.4),2761760,0,-.78,.06,i),zt(ae(.27,.14,.4),2761760,0,-.78,.06,n),zt(ae(.74,.86,.44),r.shirt,0,1.25,0,t),r.jacket&&(zt(ae(.78,.88,.2),r.jacket,0,1.25,-.14,t),zt(ae(.24,.88,.47),r.jacket,-.27,1.25,0,t),zt(ae(.24,.88,.47),r.jacket,.27,1.25,0,t)),r.poncho&&(zt(new vi(.72,.95,4),r.poncho,0,1.3,0,t).rotation.y=Math.PI/4),zt(ae(.2,.72,.22),r.jacket||r.sleeve||r.shirt,0,-.34,0,s),zt(ae(.2,.72,.22),r.jacket||r.sleeve||r.shirt,0,-.34,0,a),zt(ae(.17,.16,.18),r.skin,0,-.76,0,s),zt(ae(.17,.16,.18),r.skin,0,-.76,0,a);let o=new ie;return o.position.set(0,2.02,0),zt(new Je(.34,1),r.skin,0,0,0,o),zt(ae(.07,.09,.04),2106412,-.12,.04,.31,o),zt(ae(.07,.09,.04),2106412,.12,.04,.31,o),r.hair&&(zt(ae(.62,.24,.58),r.hair,0,.2,-.06,o),zt(ae(.6,.5,.2),r.hair,0,-.02,-.26,o)),r.pony&&zt(ae(.16,.5,.16),r.hair,0,-.25,-.4,o),r.bigote&&zt(ae(.3,.07,.06),14211288,0,-.1,.32,o),r.hat==="casco"&&(zt(new ge(.38,10,6,0,6.3,0,Math.PI/2),r.hatColor,0,.12,0,o),zt(new Pe(.44,.44,.05,10),r.hatColor,0,.13,.05,o)),r.hat==="boina"&&zt(new Je(.4,1),r.hatColor,.06,.26,0,o).scale.set(1.1,.35,1.1),r.hat==="gorra"&&(zt(new ge(.36,10,6,0,6.3,0,Math.PI/2),r.hatColor,0,.14,0,o),zt(ae(.4,.05,.3),r.hatColor,0,.17,.38,o)),r.extra==="tablet"&&zt(ae(.36,.28,.04),5232383,.02,-.72,.16,s),r.extra==="mate"&&(zt(new ge(.11,6,5),8014627,0,-.84,.06,a),zt(new Pe(.015,.015,.2,4),14211288,.03,-.72,.08,a),zt(new Pe(.08,.08,.42,6),10134445,-.16,-.36,.1,s)),[t,i,n,s,a,o].forEach(wl),t.add(i,n,s,a,o),t.scale.setScalar(e),{group:t,legL:i,legR:n,armL:s,armR:a,head:o,phase:Math.random()*6}}function Zg(){let r=new ie;zt(new Je(.28,1),10128508,0,0,0,r).scale.set(.8,.75,1.5),zt(new Je(.2,0),1842206,0,-.03,.2,r).scale.set(.9,.9,1),zt(new Je(.2,0),16052714,0,-.1,-.12,r).scale.set(.9,.7,1.4),zt(new Je(.14,0),9080726,0,.16,.4,r),zt(ae(.03,.03,.22),1842206,0,.3,.3,r),zt(ae(.04,.04,.2),14100029,0,.14,.58,r);let e=new ne;e.setAttribute("position",new Ut([0,0,.3,0,0,-.3,.95,0,-.1],3)),e.computeVertexNormals();let i=new Nt({color:2763310,side:Re,flatShading:!0});wl(r);let n=new yt(e,i),s=new yt(e,i);return s.scale.x=-1,r.add(n,s),{group:r,wl:n,wr:s}}function Jg(r){let t=new ie;zt(ae(2.5,2.3,8.2),16052714,0,1.75,0,t),zt(ae(2.54,.7,8.24),3519464,0,1,0,t),zt(ae(2.54,.16,8.24),8315009,0,1.45,0,t),zt(ae(2.56,.85,7.2),1911352,0,2.2,-.2,t),zt(ae(2.3,.95,.1),1911352,0,2.15,4.08,t),zt(ae(1.9,.3,4.6),14673642,0,3.05,-.6,t);for(let e of[-1.15,1.15])for(let i of[-2.7,2.7])zt(new Pe(.48,.48,.3,10),1842722,e,.5,i,t).rotation.z=Math.PI/2;wl(t);for(let e of[-.85,.85]){let i=new yt(ae(.4,.22,.06),r);i.position.set(e,.95,4.13),t.add(i)}return t}var El=240;function Kg(r,t){return r=(r%El+El)%El,r<64?(t.x=-12-r,t.z=70,t.h=-Math.PI/2):r<120?(t.x=-77,t.z=69-(r-64),t.h=Math.PI):r<184?(t.x=-76+(r-120),t.z=12,t.h=Math.PI/2):(t.x=-11,t.z=13+(r-184),t.h=0),t}var ba=class{constructor(t,e){this.w=t,this.scene=e,this.t=0,this.celebrate=0,this.gathered=!1;let i=ri;this.npc={valeria:this.addNpc(va({skin:14262650,shirt:16052714,jacket:2308445,pants:2829634,hair:3875604,hat:"casco",hatColor:16053492,extra:"tablet"}),rt.valeria[0],i,rt.valeria[1],Math.PI),mateo:this.addNpc(va({skin:12946274,shirt:15326400,poncho:10834477,pants:5268026,hat:"boina",hatColor:1973794,bigote:!0,extra:"mate",sleeve:15326400}),rt.mateo[0],t.groundAt(rt.mateo[0],rt.mateo[1]),rt.mateo[1],-2.2),lucia:this.addNpc(va({skin:14724230,shirt:4891608,pants:2043727,hair:1709074,pony:!0,hat:"gorra",hatColor:2043727}),rt.lucia[0],i,rt.lucia[1],Math.PI/2)},this.citizens=[];let n=[15681391,16765286,448160,1149618,16032353,10182117,15817653,2792847,15167313,9358054],s=[14724230,12946274,15845797,10120011];for(let a=0;a<15;a++){let o=va({skin:s[a%4],shirt:n[a%n.length],pants:[2829634,4871528,7032634][a%3],hair:[2759184,5913114,13214554,7829367][a%4],extra:a%2?"mate":null,scale:.9+a%3*.04});e.add(o.group),a<11?Object.assign(o,{kind:"rambla",x:-78+a*6,z:72.3+a%3*1,dir:a%2?1:-1,speed:1.1+a%4*.25}):a<13?Object.assign(o,{kind:"west",x:-80.8+a%2*1.2,z:20+a*3,dir:a%2?1:-1,speed:1.2}):Object.assign(o,{kind:"plaza",a:a*2,speed:.35}),this.citizens.push(o)}this.teros=[];for(let a=0;a<6;a++){let o=Zg();e.add(o.group),Object.assign(o,{hx:[20,60,80,-20,10,45][a],hz:[0,30,-20,-30,45,-5][a],a:a*1.3,target:null,x:0,y:6,z:0,call:2+a}),this.teros.push(o)}this.headMat=new Nt({color:16774338,emissive:16773296,emissiveIntensity:0}),this.buses=[],[-24,-20,-16].forEach((a,o)=>{let l=Jg(this.headMat);l.position.set(a,2.2,62.8),e.add(l),this.buses.push({g:l,state:"parked",px:a,s:0,wait:o*4.5,x:a,z:62.8,h:0})}),this.tmp={x:0,z:0,h:0}}addNpc(t,e,i,n,s){return t.group.position.set(e,i,n),t.group.rotation.y=s,t.home={x:e,y:i,z:n,ry:s},this.scene.add(t.group),t}gather(t){this.gathered=t;let e={valeria:[-47.4,32.6],mateo:[-40.3,33.1],lucia:[-46.2,31.3]};for(let i in this.npc){let n=this.npc[i],s=t?{x:e[i][0],y:3,z:e[i][1],ry:0}:n.home;n.group.position.set(s.x,s.y,s.z),n.group.rotation.y=s.ry,n.baseY=s.y}}update(t,e){this.t+=t;let i=this.t,n=this.w;this.celebrate=Math.max(0,this.celebrate-t);let s=this.celebrate>0;n.dynCircles=[];for(let o in this.npc){let l=this.npc[o],c=l.group,h=e.capi.x-c.position.x,u=e.capi.z-c.position.z,d=Math.hypot(h,u);e.cine?c.rotation.y+=Vi(c.rotation.y,0)*Math.min(1,t*4):d<14&&(c.rotation.y+=Vi(c.rotation.y,Math.atan2(h,u))*Math.min(1,t*4));let f=e.talking===o;l.armR.rotation.x=Gt(l.armR.rotation.x,f?-1.2+Math.sin(i*7)*.35:s?-2.7:o==="mateo"?-.9:0,8,t),l.armL.rotation.x=Gt(l.armL.rotation.x,s?-2.7+Math.sin(i*12)*.2:o==="valeria"?-.9:0,8,t),l.head.rotation.x=f?Math.sin(i*6)*.06:0,c.position.y=(l.baseY!=null?l.baseY:l.home.y)+(s?Math.abs(Math.sin(i*7+l.phase))*.35:Math.sin(i*2+l.phase)*.015),n.dynCircles.push({x:c.position.x,z:c.position.z,r:.6})}this.citizens.forEach((o,l)=>{let c=o.group,h=!s;if(this.gathered){let f=Math.floor(l/2),p=(l%2?-39.2:-54.6)+f%3*2.6,x=36.9+Math.floor(f/3)*1.9;c.position.set(p,ri+Math.abs(Math.sin(i*8+o.phase))*(s?.4:.05),x),c.rotation.y+=Vi(c.rotation.y,Math.atan2(-44-p,32.6-x))*Math.min(1,t*5),o.legL.rotation.x=o.legR.rotation.x=0,o.armL.rotation.x=s?-2.6+Math.sin(i*14+o.phase)*.3:0,o.armR.rotation.x=s?-2.6-Math.sin(i*14+o.phase)*.3:0;return}o.kind==="rambla"?(h&&(o.x+=o.dir*o.speed*t),o.x>-13&&(o.dir=-1),o.x<-81&&(o.dir=1),c.position.set(o.x,ri,o.z),c.rotation.y=Gt(c.rotation.y,o.dir>0?Math.PI/2:-Math.PI/2,6,t)):o.kind==="west"?(h&&(o.z+=o.dir*o.speed*t),o.z>70&&(o.dir=-1),o.z<14&&(o.dir=1),c.position.set(o.x,ri,o.z),c.rotation.y=Gt(c.rotation.y,o.dir>0?0:Math.PI,6,t)):(h&&(o.a+=o.speed*t),c.position.set(rt.plaza[0]+Math.cos(o.a)*5.2,ri,rt.plaza[1]+Math.sin(o.a)*5.2),c.rotation.y=-o.a);let u=i*6*o.speed+o.phase,d=h?Math.sin(u)*.6:0;o.legL.rotation.x=d,o.legR.rotation.x=-d,s?(c.position.y+=Math.abs(Math.sin(i*8+o.phase))*.4,o.armL.rotation.x=-2.6+Math.sin(i*14+o.phase)*.3,o.armR.rotation.x=-2.6-Math.sin(i*14+o.phase)*.3,c.rotation.y+=Vi(c.rotation.y,Math.atan2(e.capi.x-c.position.x,e.capi.z-c.position.z))*Math.min(1,t*5)):(o.armL.rotation.x=Gt(o.armL.rotation.x,-d*.6,10,t),o.armR.rotation.x=Gt(o.armR.rotation.x,o.kind==="plaza"?-1.1:d*.6,10,t))});let a=e.needs;this.teros.forEach((o,l)=>{let c=a.length?a[l%a.length]:null;o.a+=t*(c?1.7:.5);let h=c?c.x:o.hx,u=c?c.z:o.hz,d=c?3.2+l%3:9+l*2,f=(c?c.y+4.2:n.terrainAt(h,u)+7)+Math.sin(i*2+l)*.6,p=h+Math.cos(o.a+l)*d,x=u+Math.sin(o.a+l)*d,g=Math.min(1,t*1.6),m=o.x,y=o.z;o.x=ct(o.x,p,g),o.y=ct(o.y,f,g),o.z=ct(o.z,x,g),o.group.position.set(o.x,o.y,o.z),Math.abs(o.x-m)+Math.abs(o.z-y)>1e-4&&(o.group.rotation.y=Math.atan2(o.x-m,o.z-y));let _=Math.sin(i*13+l)*.7;if(o.wl.rotation.z=_,o.wr.rotation.z=-_,o.call-=t,c&&o.call<0){o.call=2.5+Math.random()*3;let v=Math.hypot(e.capi.x-o.x,e.capi.z-o.z);v<45&&e.audio.tero(ht(1-v/45,.1,1))}}),this.headMat.emissiveIntensity=e.night*3;for(let o of this.buses){if(o.state==="parked"&&e.busesOn&&(o.wait-=t,o.wait<=0&&(o.state="leaving")),!e.busesOn&&o.state!=="parked"&&(o.state="parked",o.x=o.px,o.z=62.8,o.h=0),o.state==="leaving")o.z+=5*t,o.h=0,o.z>=69.5&&(o.state="loop",o.s=-12-o.x);else if(o.state==="loop"){o.s+=9*t;let l=Kg(o.s,this.tmp);o.x=Gt(o.x,l.x,6,t),o.z=Gt(o.z,l.z,6,t),o.h+=Vi(o.h,l.h)*Math.min(1,t*3)}o.g.position.set(o.x,2.12,o.z),o.g.rotation.y=o.h,n.dynCircles.push({x:o.x,z:o.z,r:2}),e.night>.3&&o.state!=="parked"&&e.fx.glow.sprite(o.x+Math.sin(o.h)*4.6,3.1,o.z+Math.cos(o.h)*4.6,3.2,16773296,.5*e.night)}}};var hn=r=>440*Math.pow(2,(r-69)/12),jg=[{b:45,n:[57,60,64,67]},{b:50,n:[57,60,62,65]},{b:43,n:[55,59,62,65]},{b:48,n:[55,60,64,67]},{b:41,n:[57,60,64,65]},{b:50,n:[57,60,62,65]},{b:40,n:[56,59,62,64]},{b:45,n:[57,60,64,69]}],Qg=[[[0,76,5],[8,72,3],[12,74,3]],[[0,77,5],[6,74,2],[8,69,6]],[[0,74,3],[4,71,3],[8,67,3],[12,71,3]],[[0,72,6],[8,76,7]],[[0,69,5],[6,72,2],[8,76,3],[12,77,3]],[[0,74,6],[8,77,3],[12,81,3]],[[0,76,5],[6,80,2],[8,83,3],[12,80,3]],[[0,81,12]]],tx=[1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0],ex=[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],ix=[[0,0],[6,7],[8,12],[12,7]],Ma=class{constructor(){this.ctx=null,this.muted=!1,this.step16=0,this.next=0,this.pct=0,this.alarmT=0,this.deficit=!1}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let t=window.AudioContext||window.webkitAudioContext,e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.55;let i=e.createDynamicsCompressor();this.master.connect(i),i.connect(e.destination),this.music=e.createGain(),this.music.gain.value=.34,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master);let n=e.sampleRate*2,s=e.createBuffer(1,n,e.sampleRate),a=s.getChannelData(0);for(let u=0;u<n;u++)a[u]=Math.random()*2-1;this.noiseBuf=s;let o=e.createBufferSource();o.buffer=s,o.loop=!0,o.start();let l=(u,d,f)=>{let p=e.createBiquadFilter();p.type=u,p.frequency.value=d,p.Q.value=f;let x=e.createGain();return x.gain.value=0,o.connect(p),p.connect(x),x.connect(this.master),{fl:p,g:x}};this.aWind=l("bandpass",420,.8),this.aWater=l("lowpass",1400,.3);let c=e.createOscillator();c.type="sawtooth",c.frequency.value=100;let h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=260,this.aHum=e.createGain(),this.aHum.gain.value=0,c.connect(h),h.connect(this.aHum),this.aHum.connect(this.master),c.start(),this.next=e.currentTime+.3}catch{this.ctx=null}}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.55,this.ctx.currentTime,.05)}tone(t,e,i="square",n=.1,s=0,a=null,o=null,l=.005){if(!this.ctx)return;let c=this.ctx,h=c.currentTime+s,u=c.createOscillator(),d=c.createGain();u.type=i,u.frequency.setValueAtTime(t,h),a&&u.frequency.exponentialRampToValueAtTime(a,h+e),d.gain.setValueAtTime(1e-4,h),d.gain.linearRampToValueAtTime(n,h+l),d.gain.exponentialRampToValueAtTime(1e-4,h+e),u.connect(d),d.connect(o||this.sfx),u.start(h),u.stop(h+e+.02)}noise(t,e,i,n,s=1,a=0,o=null){if(!this.ctx)return;let l=this.ctx,c=l.currentTime+a,h=l.createBufferSource(),u=l.createBiquadFilter(),d=l.createGain();h.buffer=this.noiseBuf,h.loop=!0,u.type=i,u.frequency.value=n,u.Q.value=s,d.gain.setValueAtTime(e,c),d.gain.exponentialRampToValueAtTime(1e-4,c+t),h.connect(u),u.connect(d),d.connect(o||this.sfx),h.start(c,Math.random()),h.stop(c+t+.02)}step(t){t==="agua"?(this.noise(.12,.1,"lowpass",900),this.tone(500,.06,"sine",.04,0,250)):t==="hormigon"?(this.noise(.04,.09,"highpass",2200),this.tone(180,.03,"square",.03)):this.noise(.07,.1,"bandpass",800,.8)}jump(){this.tone(300,.14,"square",.07,0,640)}land(){this.noise(.12,.16,"lowpass",320)}splash(t=1){this.noise(.4,.2*t,"bandpass",1300,.6),this.noise(.25,.1*t,"highpass",3e3)}click(){this.tone(880,.04,"square",.05)}ok(){this.tone(660,.1,"triangle",.14,0,990),this.tone(1320,.12,"sine",.06,.06)}bad(){this.tone(210,.2,"sawtooth",.08,0,140)}spark(){this.noise(.05,.08,"highpass",3500),this.tone(1900,.03,"square",.03)}blip(t=0){this.tone(520+t*40,.03,"square",.025)}power(){this.tone(70,.9,"sawtooth",.09,0,260),this.tone(140,.9,"square",.04,.05,520),this.noise(.5,.05,"bandpass",600,2,.4)}gate(){this.noise(.6,.07,"bandpass",220,3),this.tone(90,.6,"sawtooth",.05,0,70)}tero(t=1){for(let e=0;e<2;e++)this.tone(2300,.08,"sine",.07*t,e*.28,1750),this.tone(2500,.13,"sine",.07*t,e*.28+.09,1500)}fanfare(){[72,76,79,84].forEach((t,e)=>this.tone(hn(t),.2,"square",.08,e*.11)),[72,76,79,84].forEach(t=>this.tone(hn(t),.9,"triangle",.07,.46)),this.tone(hn(96),.5,"sine",.05,.5)}boom(){this.noise(.5,.2,"lowpass",500,.5),this.noise(.3,.06,"highpass",2500,.5,.05)}thunder(){this.noise(1.6,.34,"lowpass",170,.4),this.noise(.25,.2,"bandpass",900,.5),this.tone(52,1.4,"sine",.2,.05,34)}alarm(){this.tone(660,.16,"sine",.06),this.tone(520,.2,"sine",.06,.18)}drum(t,e,i){let n=this.ctx,s=e-n.currentTime;t==="clave"?(this.tone(1900,.045,"triangle",.09*i,s,null,this.music),this.noise(.02,.05*i,"highpass",4e3,1,s,this.music)):t==="chico"?this.tone(410,.07,"sine",.06*i,s,330,this.music):t==="piano"?(this.tone(120,.22,"sine",.2*i,s,62,this.music),this.noise(.03,.04*i,"lowpass",900,1,s,this.music)):t==="repique"&&this.tone(260,.09,"triangle",.08*i,s,200,this.music)}pad(t,e,i,n){let s=this.ctx,a=s.createGain(),o=s.createBiquadFilter();o.type="lowpass",o.frequency.value=700+n*900,a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.05+n*.03,e+i*.35),a.gain.linearRampToValueAtTime(1e-4,e+i*1.05),o.connect(a),a.connect(this.music);let l=n>.6?t.n.concat([t.n[0]+12]):t.n;for(let c of l)for(let h of[-5,5]){let u=s.createOscillator();u.type="sawtooth",u.frequency.value=hn(c),u.detune.value=h,u.connect(o),u.start(e),u.stop(e+i*1.1)}}schedule(){let t=this.ctx,e=60/92/4;for(;this.next<t.currentTime+.25;){let i=this.step16,n=Math.floor(i/16)%8,s=i%16,a=jg[n],o=this.next,l=o-t.currentTime,c=this.pct,h=c>=90?3:c>=65?2:c>=35?1:0;s===0&&this.pad(a,o,e*16,h/3);for(let[u,d]of ix)u===s&&this.tone(hn(a.b+d),e*2.6,"triangle",.16,l,null,this.music,.01);if(h>=1&&(tx[s]&&this.drum("clave",o,1),s%4!==0&&this.drum("chico",o,s%4===1?1:.55)),h>=2&&(ex[s]&&this.drum("piano",o,1),s%2===0&&this.tone(hn(a.n[s/2%4]+12),e*1.6,"triangle",.045,l,null,this.music),n%4===3&&s>=10&&this.drum("repique",o,.6+(s-10)*.08)),h>=3)for(let[u,d,f]of Qg[n])u===s&&(this.tone(hn(d),e*f,"square",.04,l,null,this.music,.02),this.tone(hn(d)*1.003,e*f,"sine",.05,l,null,this.music,.03));this.step16++,this.next+=e}}update(t,e){if(!this.ctx||this.ctx.state!=="running")return;this.pct=e.pct,this.next<this.ctx.currentTime-1&&(this.next=this.ctx.currentTime+.1),this.schedule();let i=this.ctx.currentTime;this.aWind.g.gain.setTargetAtTime(ht(e.windNear*(.03+e.wind*.16),0,.2),i,.3),this.aWind.fl.frequency.setTargetAtTime(320+e.wind*500,i,.5),this.aWater.g.gain.setTargetAtTime(e.waterNear*.16,i,.3),this.aHum.gain.setTargetAtTime(e.humNear*.07,i,.3),e.deficit?(this.alarmT-=t,this.alarmT<=0&&(this.alarm(),this.alarmT=1.6)):this.alarmT=.4}};var mt=r=>document.getElementById(r),cu={capi:"Capi",valeria:"Ing. Valeria",mateo:"Don Mateo",lucia:"Luc\xEDa"};function Sa(r,t,e,i,n){let s=(c,h,u,d,f)=>{r.fillStyle=f,r.fillRect(c,h,u,d)},a=e%3.1<.14,o=i&&Math.sin(e*18)>0;if(r.clearRect(0,0,24,24),t==="capi"){let c=n?n.helmet:"#ffc420",h=n?n.vest:"#4fc3f7",u=n?n.band:"#f1ff6b";s(0,0,24,24,"#3f8fd0"),s(4,17,16,7,h),s(4,20,16,1,u),s(5,7,14,12,"#a56f3e"),s(7,12,10,8,"#b98250"),s(9,12,6,2,"#3a2416"),s(11,17,2,2,"#fff"),s(3,8,3,3,"#7a4a26"),s(18,8,3,3,"#7a4a26"),s(5,3,14,5,c),s(4,7,16,1,c),r.fillStyle="rgba(0,0,0,.18)",r.fillRect(4,7,16,1),s(11,2,2,2,c),a?(s(7,11,2,1,"#1a100a"),s(15,11,2,1,"#1a100a")):(s(7,10,2,2,"#1a100a"),s(15,10,2,2,"#1a100a")),o&&s(10,19,4,2,"#5a2a1a");return}let l={valeria:{bg:"#7b5ea7",skin:"#d9a17a",hair:"#3b2314",body:"#23395d",hat:"#f4f4f4"},mateo:{bg:"#6b8f4e",skin:"#c58b62",hair:"#555",body:"#a5522d",hat:"#1e1e22"},lucia:{bg:"#2a9d8f",skin:"#e0ac86",hair:"#1a1412",body:"#4aa3d8",hat:"#1f2f4f"}}[t];s(0,0,24,24,l.bg),s(3,18,18,6,l.body),s(10,16,4,3,l.skin),s(6,6,12,11,l.skin),s(5,7,2,8,l.hair),s(17,7,2,8,l.hair),t==="valeria"&&(s(5,2,14,5,l.hat),s(4,6,16,1,"#cfcfcf"),s(10,18,4,6,"#f4f1ea")),t==="mateo"&&(s(4,3,16,4,l.hat),s(3,5,6,2,l.hat),s(8,13,8,2,"#d8d8d8"),s(3,19,18,1,"#e9dcc0")),t==="lucia"&&(s(5,2,14,5,l.hat),s(5,6,16,1,l.hat),s(19,8,2,9,l.hair),s(9,19,6,1,"#fff")),a?(s(8,11,2,1,"#20242c"),s(14,11,2,1,"#20242c")):(s(8,10,2,2,"#20242c"),s(14,10,2,2,"#20242c")),o?s(10,14,4,2,"#7a2f2f"):s(10,14,4,1,"#8a4a3a")}var Ea=class{constructor(t){this.g=t,this.t=0,this.acc=0,this.dlg=null,this.toastT=0,this.noteT=0,this.zoneId="",this.zoneT=0,this.gc=mt("gauge").getContext("2d"),this.pc=mt("phase").getContext("2d"),this.mc=mt("mini").getContext("2d"),this.fc=mt("capiFace").getContext("2d"),this.dc=mt("dFace").getContext("2d"),this.sc=mt("pCv").getContext("2d"),this.buildMap(),mt("dialog").addEventListener("click",()=>this.advance()),mt("bPanel").onclick=()=>t.togglePanel(),mt("pClose").onclick=()=>t.togglePanel(!1),mt("bHelp").onclick=()=>t.toggleHelp(!0),mt("hClose").onclick=()=>t.toggleHelp(!1),mt("bMute").onclick=()=>t.toggleMute(),mt("hTitle").onclick=()=>t.toTitle(),mt("prompt").addEventListener("click",()=>{t.cand&&!t.locked&&t.interact(t.cand.id)}),mt("cJump").addEventListener("pointerdown",()=>{t.jump=!0}),document.addEventListener("click",i=>{let n=i.target.closest&&i.target.closest("button");n&&n.blur()}),mt("batMode").querySelectorAll("button").forEach(i=>i.onclick=()=>{t.grid.bat.connected&&(t.grid.bat.mode=i.dataset.m,t.audio.click(),t.missions.event("batmode"),this.panelDom())});let e=(i,n)=>{mt(i).oninput=s=>{n(+s.target.value),this.sandboxOut()}};e("sWind",i=>{t.grid.windTarget=i/100}),e("sCloud",i=>{t.grid.cloudTarget=i/100}),e("sHour",i=>{t.grid.hour=i/4}),e("sDem",i=>{t.grid.demandMul=i/100}),e("sRate",i=>{t.grid.clockRate=[0,1/20,1/8,1/3,1][i]}),mt("sFault").onclick=()=>{t.missions.randomFault(!0),t.audio.click()},mt("pCv").addEventListener("click",i=>{let n=i.target.getBoundingClientRect(),s=(i.clientX-n.left)/n.width*760,a=(i.clientY-n.top)/n.height*440;for(let o of this.nodes||[])Math.hypot(s-o.x,a-o.y)<46&&o.zone&&t.inspect(o.zone)})}buildMap(){let e=document.createElement("canvas");e.width=e.height=256;let i=e.getContext("2d"),n=i.createImageData(256,256),s=n.data,a=$.maxX-$.minX,o=$.maxZ-$.minZ;for(let h=0;h<256;h++)for(let u=0;u<256;u++){let d=$.minX+(u+.5)/256*a,f=$.minZ+(h+.5)/256*o,p=Xi(d,f),x=qi(d,f),g=(h*256+u)*4,m,y,_;if(p<x-.15)m=40,y=120+(x>1?40:0),_=200;else if(Ti(d,f)<5&&p<2.6)m=232,y=214,_=164;else{let v=ht((p-2)/8,0,1);m=ct(96,150,v),y=ct(178,205,v),_=ct(72,96,v)}d>-84&&d<-9&&f>10&&f<76&&(m=176,y=170,_=160),d>-88&&d<-36&&f>-104&&f<-60&&p>5&&(m=205,y=198,_=172),s[g]=m,s[g+1]=y,s[g+2]=_,s[g+3]=255}i.putImageData(n,0,0);let l=h=>(h-$.minX)/a*256,c=h=>(h-$.minZ)/o*256;i.strokeStyle="rgba(70,70,80,.9)",i.lineWidth=1.6;for(let h of this.g.world.roads)i.beginPath(),h.forEach((u,d)=>d?i.lineTo(l(u[0]),c(u[1])):i.moveTo(l(u[0]),c(u[1]))),i.stroke();i.fillStyle="#9a948a",i.fillRect(l(-24),c(-58),l(24)-l(-24),6),i.fillRect(l(-48),c(-31),4,c(-3)-c(-31)),i.fillStyle="#1f3f9a";for(let[h,u]of rt.solar)i.fillRect(l(h-6),c(u-5.5),13,12);i.fillStyle="#fff";for(let[h,u]of rt.windT)i.beginPath(),i.arc(l(h),c(u),2.2,0,7),i.fill();this.map=e,this.mapScale=256/a}show(){mt("hud").classList.remove("hidden")}hide(){mt("hud").classList.add("hidden"),this.prompt(null),this.timer(null),mt("toast").classList.remove("on"),mt("note").classList.remove("on")}toast(t,e="",i=3.2){let n=mt("toast");n.querySelector("h2").textContent=t,n.querySelector("p").textContent=e,n.classList.add("on"),this.toastT=i}note(t,e=3.5){let i=mt("note");i.textContent=t,i.classList.add("on"),this.noteT=e}prompt(t){let e=mt("prompt");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden"),this._p!==t&&(e.innerHTML="<kbd>E</kbd> "+t,this._p=t)}timer(t,e){let i=mt("timer");if(!t){i.classList.add("hidden");return}i.classList.remove("hidden"),i.textContent=t,i.classList.toggle("warn",!!e)}mission(t,e,i){mt("mTitle").textContent=t,mt("mSub").textContent=e;let n=i.map(a=>a.text+a.state).join("|");if(n===this._mk)return;this._mk=n;let s=mt("mList");s.textContent="";for(let a of i){let o=document.createElement("li");o.className=a.state,o.textContent=a.text,s.appendChild(o)}}dialog(t,e){this.g.panel&&this.g.togglePanel(!1),this.g.help&&this.g.toggleHelp(!1),this.dlg={lines:t,i:0,n:0,done:e,acc:0},mt("dialog").classList.remove("hidden"),mt("dName").textContent=cu[t[0].who],mt("dText").textContent="",this.g.audio.click()}get talking(){return this.dlg?this.dlg.lines[this.dlg.i].who:null}advance(){let t=this.dlg;if(!t)return;let e=t.lines[t.i].text;if(t.n<e.length){t.n=e.length,mt("dText").textContent=e;return}if(t.i++,t.n=0,this.g.audio.click(),t.i>=t.lines.length){this.dlg=null,mt("dialog").classList.add("hidden"),t.done&&t.done();return}mt("dName").textContent=cu[t.lines[t.i].who],mt("dText").textContent=""}update(t,e){this.t+=t;let i=this.g.grid,n=i.out;this.toastT>0&&(this.toastT-=t,this.toastT<=0&&mt("toast").classList.remove("on")),this.noteT>0&&(this.noteT-=t,this.noteT<=0&&mt("note").classList.remove("on"));let s=this.dlg;if(s){let h=s.lines[s.i].text;if(s.acc+=t*48,s.n<h.length&&s.acc>=1){let u=Math.floor(s.acc);s.acc-=u;let d=s.n;s.n=Math.min(h.length,s.n+u),mt("dText").textContent=h.slice(0,s.n),Math.floor(d/3)!==Math.floor(s.n/3)&&this.g.audio.blip({capi:3,valeria:6,mateo:0,lucia:8}[s.lines[s.i].who])}Sa(this.dc,s.lines[s.i].who,this.t,s.n<h.length,this.g.extras?this.g.extras.colors():null)}if(this.acc+=t,this.acc<.09){this.drawMini(e);return}this.acc=0;let a=270,o=Math.max(0,n.gen-n.fossil);mt("bGen").style.width=o/a*100+"%",mt("bFos").style.width=n.fossil/a*100+"%",mt("bDem").style.width=n.demand/a*100+"%",mt("vGen").textContent=Math.round(n.gen)+" MW",mt("vDem").textContent=Math.round(n.demand)+" MW",mt("bBat").style.width=(i.bat.connected?i.bat.soc*100:0)+"%",mt("vBat").textContent=i.bat.connected?Math.round(i.bat.soc*100)+"%"+(n.bat>.5?" \u25BC":n.bat<-.5?" \u25B2":""):"sin conectar",mt("vClock").textContent=_l(i.hour);let l=mt("vHz");l.textContent=i.freq.toFixed(1).replace(".",",")+" Hz",l.classList.toggle("low",i.freq<49.85),this.drawGauge(n.pct),this.drawPhase(i.hour),Sa(this.fc,"capi",this.t,e.capiTalk,e.colors),this.drawMini(e);let c=null;for(let h of Hs)Math.hypot(e.capi.x-h.x,e.capi.z-h.z)<(h.id==="ciudad"?46:34)&&(c=h);c&&c.id!==this.zoneId?(this.zoneId=c.id,mt("zone").textContent=c.name,this.zoneT=5):c||(this.zoneId="",this.zoneT=Math.min(this.zoneT,.6)),this.zoneT>0&&(this.zoneT-=.09,mt("zone").style.opacity=ht(this.zoneT,0,1)),e.panel&&(this.drawPanel(),(this._pd=(this._pd||0)+1)%4===0&&this.panelDom())}drawGauge(t){let e=this.gc,i=184,n=i/2,s=70;e.clearRect(0,0,i,i),e.lineWidth=18,e.lineCap="round",e.strokeStyle="#07142b",e.beginPath(),e.arc(n,n,s,0,7),e.stroke();let a=ht(t/100,0,1),o=t>=100?"#2fe38a":`rgb(${Math.round(ct(255,120,a*a))},${Math.round(ct(150,215,a))},${Math.round(ct(40,90,a))})`;e.strokeStyle=o,e.beginPath(),e.arc(n,n,s,-Math.PI/2,-Math.PI/2+Math.max(.02,a)*Math.PI*2),e.stroke(),e.fillStyle="#fff7e6",e.textAlign="center",e.textBaseline="middle",e.font=(t>=99.5?46:56)+'px "Lilita One","Arial Black",sans-serif',e.fillText(Math.round(t)+"%",n,n-6),e.font="800 17px Nunito,sans-serif",e.fillStyle=o,e.fillText("RENOVABLE",n,n+32)}drawPhase(t){let e=this.pc;e.clearRect(0,0,68,68);let i=t>6&&t<19;if(e.fillStyle=i?t<7.5?"#ff9fb0":t>17.5?"#ff9a4a":"#ffd23f":"#dfe8ff",e.beginPath(),e.arc(34,34,17,0,7),e.fill(),i){e.strokeStyle=e.fillStyle,e.lineWidth=4,e.lineCap="round";for(let n=0;n<8;n++){let s=n*Math.PI/4+this.t*.4;e.beginPath(),e.moveTo(34+Math.cos(s)*23,34+Math.sin(s)*23),e.lineTo(34+Math.cos(s)*30,34+Math.sin(s)*30),e.stroke()}}else e.fillStyle="#0f2140",e.beginPath(),e.arc(42,28,14,0,7),e.fill()}drawMini(t){let e=this.mc,i=352,n=i/2,s=80,a=n/s,o=t.yaw,l=$.maxX-$.minX;e.save(),e.clearRect(0,0,i,i),e.beginPath(),e.arc(n,n,n,0,7),e.clip(),e.fillStyle="#0b1830",e.fillRect(0,0,i,i),e.translate(n,n),e.rotate(o),e.scale(a,a),e.translate(-t.capi.x,-t.capi.z),e.imageSmoothingEnabled=!1,e.drawImage(this.map,$.minX,$.minZ,l,$.maxZ-$.minZ),e.restore();let c=(f,p)=>{let x=f-t.capi.x,g=p-t.capi.z,m=Math.cos(o),y=Math.sin(o);return[(x*m-g*y)*a,(x*y+g*m)*a]},h=(f,p,x,g,m)=>{let[y,_]=c(f,p),v=Math.hypot(y,_),T=n-16;v>T&&(y*=T/v,_*=T/v),e.beginPath(),e.arc(n+y,n+_,g,0,7),e.fillStyle=x,e.fill(),e.lineWidth=3,e.strokeStyle="#0f2140",e.stroke(),m&&(e.beginPath(),e.arc(n+y,n+_,g+6+this.t*14%12,0,7),e.strokeStyle=x,e.globalAlpha=1-this.t*14%12/12,e.stroke(),e.globalAlpha=1)};for(let f of Hs)h(f.x,f.z,f.color,8,!1);if(t.buses)for(let f of rt.stops){let[p,x]=c(f[0],f[1]);Math.hypot(p,x)<n-12&&(e.fillStyle="#35b3e8",e.strokeStyle="#0f2140",e.lineWidth=2,e.fillRect(n+p-6,n+x-6,12,12),e.strokeRect(n+p-6,n+x-6,12,12))}for(let f of t.sparks||[]){if(Math.hypot(f.x-t.capi.x,f.z-t.capi.z)>42)continue;let[p,x]=c(f.x,f.z);e.save(),e.translate(n+p,n+x),e.rotate(Math.PI/4+this.t*2),e.fillStyle="#ffe066",e.strokeStyle="#0f2140",e.lineWidth=2,e.fillRect(-6,-6,12,12),e.strokeRect(-6,-6,12,12),e.restore()}for(let f of t.inter)f.state==="need"&&!f.target&&h(f.x,f.z,"#ff4d4d",6,!1);for(let f of t.inter)f.target&&h(f.x,f.z,"#ffd23f",9,!0);e.save(),e.translate(n,n),e.rotate(Math.PI-t.heading+o),e.fillStyle="#fff7e6",e.strokeStyle="#0f2140",e.lineWidth=4,e.beginPath(),e.moveTo(0,-17),e.lineTo(11,12),e.lineTo(0,5),e.lineTo(-11,12),e.closePath(),e.stroke(),e.fill(),e.restore();let u=n+Math.sin(o)*-(n-20)*-1,d=n-Math.cos(o)*(n-20);e.fillStyle="#0f2140",e.beginPath(),e.arc(u,d,15,0,7),e.fill(),e.fillStyle="#ffc93c",e.font='22px "Lilita One","Arial Black",sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("N",u,d+1)}sandboxOut(){let t=this.g.grid;mt("oWind").textContent=Math.round(t.windTarget*100)+"%",mt("oCloud").textContent=Math.round(t.cloudTarget*100)+"%",mt("oHour").textContent=_l(t.hour),mt("oDem").textContent=Math.round(t.demandMul*100)+"%",mt("oRate").textContent=["pausa","\xD71","\xD72.5","\xD77","\xD720"][+mt("sRate").value]}openPanel(t){if(mt("panel").classList.remove("hidden"),mt("sandbox").classList.toggle("hidden",!t),t){let e=this.g.grid;mt("sWind").value=Math.round(e.windTarget*100),mt("sCloud").value=Math.round(e.cloudTarget*100),mt("sHour").value=Math.round(e.hour*4),this.sandboxOut()}this.panelDom(),this.drawPanel()}closePanel(){mt("panel").classList.add("hidden")}panelDom(){let t=this.g.grid,e=t.out;mt("batMode").querySelectorAll("button").forEach(l=>{l.classList.toggle("on",t.bat.connected&&t.bat.mode===l.dataset.m),l.disabled=!t.bat.connected}),mt("batInfo").textContent=t.bat.connected?`Carga ${Math.round(t.bat.soc*100)}% (${Math.round(t.bat.soc*ke.batE)} MWh). `+(e.bat>.5?`Descargando ${Math.round(e.bat)} MW hacia la ciudad.`:e.bat<-.5?`Cargando ${Math.round(-e.bat)} MW con excedentes.`:t.bat.mode==="hold"?"En reserva: no entrega energ\xEDa aunque falte.":"En espera."):"El banco todav\xEDa no est\xE1 conectado a la red. Se habilita en el Parque Solar.";let i=l=>l.filter(c=>c.on&&!c.fault).length,n=l=>l.some(c=>c.fault),s=[["hidro","Central Hidroel\xE9ctrica",e.hydro,`${i(t.hydro.t)}/4 turbinas \xB7 salto ${Math.round(t.head()*100)}%`,n(t.hydro.t)?"bad":i(t.hydro.t)?"ok":"off"],["eolica","Parque E\xF3lico",e.wind,`${i(t.windP.t)}/5 molinos \xB7 viento ${Math.round(t.wind*100)}%`,n(t.windP.t)||t.windP.txFault?"bad":t.windP.tx?"ok":"off"],["solar","Parque Solar",e.solar,`${i(t.solar.a)}/4 matrices \xB7 sol ${Math.round(t.sun()*(1-.65*t.cloud)*100)}%`,n(t.solar.a)?"bad":i(t.solar.a)?"ok":"off"],["biomasa","Planta de Biomasa",e.bio,`caldera ${Math.round(t.bio.pressure*100)}%`,t.bio.fault?"bad":t.bio.on?"ok":"off"]],a=s.map(l=>Math.round(l[2])+l[3]+l[4]).join("|");if(a===this._pk)return;this._pk=a;let o=mt("plantList");o.textContent="";for(let l of s){let c=document.createElement("div");c.className="plant";let h={ok:"en l\xEDnea",bad:"falla",off:"fuera de servicio"}[l[4]];c.innerHTML=`<div>${l[1]}<span class="pill ${l[4]}">${h}</span><em>${l[3]}</em></div><b>${Math.round(l[2])} MW</b>`;let u=document.createElement("button");u.type="button",u.textContent="Ver",u.onclick=()=>this.g.inspect(l[0]),c.appendChild(u),o.appendChild(c)}}drawPanel(){let t=this.sc,e=760,i=440,n=this.g.grid,s=n.out,a=this.t;t.clearRect(0,0,e,i),t.strokeStyle="#102a52",t.lineWidth=1;for(let u=0;u<e;u+=40)t.beginPath(),t.moveTo(u,0),t.lineTo(u,i),t.stroke();for(let u=0;u<i;u+=40)t.beginPath(),t.moveTo(0,u),t.lineTo(e,u),t.stroke();let o={x:380,y:232},l=this.nodes=[{zone:"hidro",x:380,y:62,name:"HIDRO",mw:s.hydro,cap:144,col:"#4cc9f0"},{zone:"eolica",x:640,y:150,name:"E\xD3LICA",mw:s.wind,cap:40,col:"#e8f1f2"},{zone:"biomasa",x:620,y:350,name:"BIOMASA",mw:s.bio,cap:40,col:"#90be6d"},{zone:"solar",x:130,y:110,name:"SOLAR",mw:s.solar,cap:48,col:"#ffb703"},{zone:"solar",x:110,y:270,name:"BATER\xCDAS",mw:s.bat,cap:50,col:"#5ad1ff",bat:!0},{zone:null,x:210,y:386,name:"RESPALDO F\xD3SIL",mw:s.fossil,cap:140,col:"#b08a7a"}];for(let u of l){let d=Math.abs(u.mw)>.5,f=ht(Math.abs(u.mw)/u.cap,0,1);t.strokeStyle=d?u.col:"#27406b",t.lineWidth=d?3+f*5:3,t.setLineDash(d?[10,9]:[]),t.lineDashOffset=(u.mw<0?1:-1)*a*(20+f*90),t.beginPath(),t.moveTo(u.x,u.y),t.lineTo(o.x,o.y),t.stroke(),t.setLineDash([])}let c=(u,d,f,p,x,g,m)=>{t.fillStyle="#0f2140",t.strokeStyle=p,t.lineWidth=5,t.beginPath(),t.arc(u,d,f,0,7),t.fill(),t.stroke(),t.fillStyle=p,t.font='15px "Lilita One","Arial Black",sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(x,u,f>50?d+f+15:d-f-12),t.fillStyle="#fff7e6",t.font="900 19px Nunito,sans-serif",t.fillText(g,u,d-(m?6:0)),m&&(t.font="800 12px Nunito,sans-serif",t.fillStyle="#a9bbd6",t.fillText(m,u,d+13))};for(let u of l)c(u.x,u.y,42,u.col,u.name,u.bat&&!n.bat.connected?"\u2014":Math.round(u.mw)+" MW",u.bat?n.bat.connected?Math.round(n.bat.soc*100)+"% carga":"sin conectar":Math.round(ht(Math.abs(u.mw)/u.cap,0,1)*100)+"%");let h=s.pct>=100;c(o.x,o.y,62,h?"#57e389":"#ffc93c","CIUDAD \xB7 DEMANDA",Math.round(s.demand)+" MW",n.freq.toFixed(1).replace(".",",")+" Hz \xB7 "+Math.round(s.pct)+"% renov."),t.textAlign="left",t.font="800 13px Nunito,sans-serif",t.fillStyle="#a9bbd6",t.fillText("G total = hidro + e\xF3lica + solar + biomasa + bater\xEDas = "+Math.round(s.ren+Math.max(0,s.bat))+" MW",16,i-16),t.textAlign="right",t.fillStyle=h?"#57e389":"#ff6b4a",t.fillText(h?"EQUILIBRIO \xD3PTIMO":"D\xC9FICIT RENOVABLE: "+Math.round(s.fossil+s.unmet)+" MW",e-16,i-16)}};var fs=r=>document.getElementById(r),pi=560,In=300,nx='"Lilita One","Arial Black",sans-serif',se=(r,t,e,i,n,s,a="center",o=nx)=>{r.font=`${n}px ${o}`,r.fillStyle=s,r.textAlign=a,r.textBaseline="middle",r.fillText(t,e,i)},oi=(r,t,e,i,n,s)=>{r.beginPath(),r.moveTo(t+s,e),r.arcTo(t+i,e,t+i,e+n,s),r.arcTo(t+i,e+n,t,e+n,s),r.arcTo(t,e+n,t,e,s),r.arcTo(t,e,t+i,e,s),r.closePath()},Tl=class{constructor(t,e){this.m=t,this.title=e.title||"Sincronizaci\xF3n de fase",this.hint="Puls\xE1 Espacio o hac\xE9 clic cuando la aguja pase por la ventana verde de 50,0 Hz. Tres aciertos acoplan el generador.",this.hits=0,this.t=Math.random()*6,this.f=50,this.flash=0,this.miss=0,this.win=.34}speed(){return[2.3,3,3.8][Math.min(2,this.hits)]}update(t){this.t+=t*this.speed(),this.f=50+1.75*Math.sin(this.t)+.12*Math.sin(this.t*3.7),this.flash=Math.max(0,this.flash-t),this.miss=Math.max(0,this.miss-t)}act(){this.done||(Math.abs(this.f-50)<=this.win?(this.hits++,this.flash=.35,this.m.audio.ok(),this.win=[.34,.27,.21][Math.min(2,this.hits)],this.hits>=3&&this.m.finish(!0,"\xA1ACOPLADO A LA RED!")):(this.miss=.4,this.m.audio.bad(),this.m.audio.spark(),this.win=Math.min(.4,this.win+.03)))}key(t,e){e&&(t==="Space"||t==="Enter"||t==="KeyE")&&this.act()}down(){this.act()}draw(t){let e=s=>60+(s-48)/4*440;se(t,this.f.toFixed(1).replace(".",",")+" Hz",pi/2,62,54,this.miss>0?"#ff6b4a":Math.abs(this.f-50)<=this.win?"#57e389":"#fff7e6"),oi(t,60,134,440,32,10),t.fillStyle="#0f2140",t.fill(),t.strokeStyle="#2a4374",t.lineWidth=3,t.stroke(),t.fillStyle=this.flash>0?"#b8ffd6":"#2fbf71",t.fillRect(e(50-this.win),136,e(50+this.win)-e(50-this.win),28);for(let s=48;s<=52;s+=.5)t.fillStyle="#6f84a8",t.fillRect(e(s)-1,170,2,s%1===0?10:5),s%1===0&&se(t,s.toFixed(1).replace(".",","),e(s),192,13,"#a9bbd6","center","Nunito,sans-serif");let n=e(this.f);if(t.fillStyle=this.miss>0?"#ff6b4a":"#ffc93c",t.beginPath(),t.moveTo(n,146),t.lineTo(n-11,116),t.lineTo(n+11,116),t.closePath(),t.fill(),t.fillRect(n-2,134,4,32),this.miss>0)for(let s=0;s<6;s++){t.strokeStyle="#ffd23f",t.lineWidth=2,t.beginPath();let a=s*1.05+this.t;t.moveTo(n+Math.cos(a)*8,150+Math.sin(a)*8),t.lineTo(n+Math.cos(a)*24,150+Math.sin(a)*24),t.stroke()}["R","S","T"].forEach((s,a)=>{let o=pi/2-80+a*80,l=244,c=a<this.hits;t.beginPath(),t.arc(o,l,22,0,7),t.fillStyle=c?"#57e389":"#13284c",t.fill(),t.lineWidth=4,t.strokeStyle=c?"#d6ffe7":"#2a4374",t.stroke(),se(t,s,o,l+1,22,c?"#0b3a22":"#6f84a8")})}},Al=class{constructor(t,e){this.m=t,this.title=e.title||"Alineaci\xF3n heliotr\xF3pica";let i=Gi(Math.floor(Math.random()*1e6));this.dust=[];for(let n=0;n<14;n++)this.dust.push({x:150+i()*260,y:90+i()*130,a:1});this.tt=20+i()*30,this.ta=-50+i()*100,this.tilt=this.tt+(i()<.5?-1:1)*(14+i()*10),this.az=this.ta+(i()<.5?-1:1)*(35+i()*25),this.tilt=ht(this.tilt,0,60),this.az=ht(this.az,-80,80),this.hold=0,this.keys={},this.phase=0,this.t=0,this.drag=null,this.hint="Primero limpi\xE1 el polvo: pas\xE1 el cursor sobre el panel o manten\xE9 Espacio."}dirt(){return this.dust.reduce((t,e)=>t+e.a,0)/this.dust.length}irr(){let t=(this.tilt-this.tt)*Math.PI/180,e=(this.az-this.ta)*Math.PI/180;return 100*Math.pow(Math.max(0,Math.cos(t)*Math.cos(e*.9)),6)}update(t){if(this.t+=t,this.phase===0){if(this.keys.Space){let e=this.dust.find(i=>i.a>0);e&&(e.a=Math.max(0,e.a-t*9),e.a===0&&this.m.audio.click())}this.dirt()<.03&&(this.phase=1,this.m.audio.ok(),this.hint="Ahora orient\xE1 el panel: \u2190/\u2192 cambia el azimut y \u2191/\u2193 la inclinaci\xF3n (o arrastr\xE1). Llev\xE1 la irradiancia al 100\xA0%.",this.m.setHint(this.hint))}else{let e=this.keys,i=42*t;(e.ArrowLeft||e.KeyA)&&(this.az-=i),(e.ArrowRight||e.KeyD)&&(this.az+=i),(e.ArrowUp||e.KeyW)&&(this.tilt+=i*.7),(e.ArrowDown||e.KeyS)&&(this.tilt-=i*.7),this.az=ht(this.az,-80,80),this.tilt=ht(this.tilt,0,60),this.irr()>=97.5?(this.hold+=t,this.hold>.7&&!this.done&&this.m.finish(!0,"\xA1IRRADIANCIA AL 100\xA0%!")):this.hold=0}}key(t,e){this.keys[t]=e}down(t,e){this.drag={x:t,y:e},this.move(t,e)}up(){this.drag=null}move(t,e){if(this.phase===0)for(let i of this.dust)i.a>0&&Math.hypot(i.x-t,i.y-e)<34&&(i.a=Math.max(0,i.a-.34),i.a===0&&this.m.audio.click());else this.drag&&(this.az=ht(this.az+(t-this.drag.x)*.45,-80,80),this.tilt=ht(this.tilt-(e-this.drag.y)*.3,0,60),this.drag={x:t,y:e})}draw(t){let e=this.phase?this.irr():0,i=280,n=160,s=i+this.ta*2.4,a=70-this.tt*.6;t.fillStyle="#ffd23f",t.beginPath(),t.arc(s,a,16,0,7),t.fill(),t.strokeStyle="#ffd23f",t.lineWidth=3;for(let d=0;d<8;d++){let f=d*.785+this.t;t.beginPath(),t.moveTo(s+Math.cos(f)*21,a+Math.sin(f)*21),t.lineTo(s+Math.cos(f)*28,a+Math.sin(f)*28),t.stroke()}let o=this.phase?this.az*.9:0,l=this.phase?70-this.tilt*.55:62,c=[[i-130+o,n-l],[i+130+o,n-l],[i+150-o*.3,n+62],[i-150-o*.3,n+62]];t.beginPath(),c.forEach((d,f)=>f?t.lineTo(d[0],d[1]):t.moveTo(d[0],d[1])),t.closePath();let h=Math.round(ct(40,70,e/100));t.fillStyle=`rgb(${h-20},${h+20},${150+e*.9})`,t.fill(),t.strokeStyle="#cfe3ff",t.lineWidth=4,t.stroke(),t.strokeStyle="rgba(207,227,255,.5)",t.lineWidth=1.5;for(let d=1;d<6;d++){let f=d/6;t.beginPath(),t.moveTo(ct(c[0][0],c[1][0],f),c[0][1]),t.lineTo(ct(c[3][0],c[2][0],f),c[3][1]),t.stroke()}for(let d=1;d<3;d++){let f=d/3;t.beginPath(),t.moveTo(ct(c[0][0],c[3][0],f),ct(c[0][1],c[3][1],f)),t.lineTo(ct(c[1][0],c[2][0],f),ct(c[1][1],c[2][1],f)),t.stroke()}t.fillStyle="#77808c",t.fillRect(i-5,n+62,10,40);for(let d of this.dust)d.a>0&&(t.globalAlpha=d.a*.85,t.fillStyle="#b89c6a",t.beginPath(),t.arc(d.x,d.y,30,0,7),t.fill(),t.globalAlpha=1);e>97&&(t.globalAlpha=.35+.3*Math.sin(this.t*20),t.fillStyle="#ffe58a",t.beginPath(),c.forEach((d,f)=>f?t.lineTo(d[0],d[1]):t.moveTo(d[0],d[1])),t.fill(),t.globalAlpha=1),oi(t,500,40,30,220,8),t.fillStyle="#0f2140",t.fill(),t.strokeStyle="#2a4374",t.lineWidth=3,t.stroke();let u=this.phase?e:(1-this.dirt())*100;t.fillStyle=this.phase?e>97?"#ffd23f":"#5ad1ff":"#b89c6a",t.fillRect(504,256-u*2.12,22,u*2.12),se(t,this.phase?"IRRADIANCIA":"LIMPIEZA",515,24,12,"#a9bbd6","center","Nunito,sans-serif"),se(t,Math.round(u)+"%",515,278,18,"#fff7e6"),this.phase&&(se(t,"Azimut "+Math.round(this.az)+"\xB0",20,270,15,"#a9bbd6","left","Nunito,sans-serif"),se(t,"Inclinaci\xF3n "+Math.round(this.tilt)+"\xB0",20,290,15,"#a9bbd6","left","Nunito,sans-serif"))}},Rl=class{constructor(t,e){this.m=t,this.title=e.title||"Control de compuerta",this.hint="Ajust\xE1 la apertura con \u2191/\u2193 (o arrastr\xE1 la compuerta) para mantener el embalse en la franja verde sin pasar la l\xEDnea roja aguas abajo.",this.L=.86,this.u=.95,this.dn=.9,this.t=Math.random()*9,this.prog=0,this.keys={},this.drag=!1,this.mw=0}update(t){this.t+=t;let e=this.keys;(e.ArrowUp||e.KeyW)&&(this.u+=t*.7),(e.ArrowDown||e.KeyS)&&(this.u-=t*.7),this.u=ht(this.u,0,1);let i=.5+.14*Math.sin(this.t*.9)+.06*Math.sin(this.t*2.3+1),n=this.u*(.55+.75*this.L);this.L=ht(this.L+(i-n)*.3*t,.05,1),this.dn+=(n-this.dn)*Math.min(1,t*2.5);let s=this.L>.5&&this.L<.7&&this.dn<.8;this.ok=s,this.mw=36*ht(this.L/.7,0,1)*(this.dn<.8?1:.6),this.prog=ht(this.prog+(s?t/4:-t/10),0,1),this.prog>=1&&!this.done&&this.m.finish(!0,"\xA1NIVEL ESTABILIZADO!")}key(t,e){this.keys[t]=e}down(t,e){this.drag=!0,this.move(t,e)}up(){this.drag=!1}move(t,e){this.drag&&(this.u=ht((250-e)/150,0,1))}draw(t){let n=ct(262,70,this.L),s=ct(262,152,this.dn);t.fillStyle="#12305c",t.fillRect(0,0,pi,In),t.fillStyle="#2f86c8",t.fillRect(20,n,230,262-n),t.fillStyle="#6fd0f2",t.fillRect(20,n,230,4),t.fillStyle="rgba(87,227,137,.28)",t.fillRect(20,ct(262,70,.7),230,ct(262,70,.5)-ct(262,70,.7)),se(t,"EMBALSE",135,40,15,"#a9bbd6","center","Nunito,sans-serif"),t.fillStyle="#2f86c8",t.fillRect(310,s,230,262-s),t.fillStyle="#6fd0f2",t.fillRect(310,s,230,4),t.strokeStyle="#ff6b4a",t.lineWidth=3,t.setLineDash([8,6]);let a=ct(262,152,.8);t.beginPath(),t.moveTo(310,a),t.lineTo(540,a),t.stroke(),t.setLineDash([]),se(t,"R\xCDO ABAJO",425,a-14,13,this.dn>=.8?"#ff6b4a":"#a9bbd6","center","Nunito,sans-serif"),t.fillStyle="#bdb5a8",t.fillRect(250,50,60,212),t.fillStyle="#12305c",t.fillRect(262,100,36,150);let o=100+(1-this.u)*0;t.fillStyle="#2f86c8",t.fillRect(262,250-this.u*150,36,this.u*150),t.fillStyle="#ffc93c",t.fillRect(258,94+(1-this.u)*150-0-0,44,0),t.fillStyle="#2f6f9f",t.fillRect(258,94,44,(1-this.u)*150+6),t.strokeStyle="#ffc93c",t.lineWidth=3,t.strokeRect(258,94,44,(1-this.u)*150+6);for(let l=0;l<6;l++){t.fillStyle="rgba(255,255,255,.75)";let c=312+(this.t*90+l*37)%60,h=256-l*13%20*this.u;t.fillRect(c,h,6+this.u*8,3)}t.fillStyle="#3b2a20",t.fillRect(0,262,pi,In-262),se(t,"Apertura "+Math.round(this.u*100)+"%",280,76,15,"#fff7e6"),se(t,Math.round(this.mw)+" MW",135,284,18,this.ok?"#57e389":"#ffc93c"),oi(t,330,276,200,14,7),t.fillStyle="#0f2140",t.fill(),t.fillStyle="#57e389",t.fillRect(332,278,196*this.prog,10),se(t,this.dn>=.8?"\xA1Desborde aguas abajo!":this.L>=.7?"Embalse muy alto":this.L<=.5?"Embalse bajo: se pierde salto":"Estable",430,40,15,this.ok?"#57e389":"#ff6b4a","center","Nunito,sans-serif")}},wa=[[0,-1,1,4],[1,0,2,8],[0,1,4,1],[-1,0,8,2]],hu=r=>r<<1&15|r>>3,Cl=class{constructor(t,e){this.m=t,this.title=e.title||"Enrutamiento de subestaci\xF3n",this.from=e.from||"FUENTE",this.to=e.to||"CARGA",this.hint="Hac\xE9 clic en un tramo para girarlo (o flechas + Espacio). Conect\xE1 "+this.from+" con "+this.to+" sin energizar las celdas rojas de sobrecarga.",this.C=6,this.R=4,this.cur={x:0,y:0},this.t=0,this.over=0;for(let i=0;i<800&&!this.gen();i++);}gen(){let{C:t,R:e}=this,i=Math.random;this.rs=Math.floor(i()*e),this.rt=Math.floor(i()*e);let n=new Set,s=[[0,this.rs]];n.add("0,"+this.rs);let a=0;for(;a++<200;){let[c,h]=s[s.length-1];if(c===t-1&&h===this.rt)break;let u=[];for(let[x,g]of wa){let m=c+x,y=h+g;m<0||y<0||m>=t||y>=e||n.has(m+","+y)||u.push([m,y,x===1?3:g!==0?c===t-1?3:1.4:.25])}if(!u.length)return!1;let d=u.reduce((x,g)=>x+g[2],0),f=i()*d,p=u[0];for(let x of u)if(f-=x[2],f<=0){p=x;break}s.push([p[0],p[1]]),n.add(p[0]+","+p[1])}let o=s[s.length-1];if(o[0]!==t-1||o[1]!==this.rt||s.length<7)return!1;this.g=[];for(let c=0;c<e;c++){this.g.push([]);for(let h=0;h<t;h++)this.g[c].push({m:[5,3,7,3,5][Math.floor(i()*5)],bad:!1,path:!1})}s.forEach(([c,h],u)=>{let d=0,f=(p,x)=>{for(let[g,m,y]of wa)p===c+g&&x===h+m&&(d|=y)};u===0?d|=8:f(s[u-1][0],s[u-1][1]),u===s.length-1?d|=2:f(s[u+1][0],s[u+1][1]),this.g[h][c]={m:d,need:d,bad:!1,path:!0}});let l=[];for(let c=0;c<e;c++)for(let h=0;h<t;h++)this.g[c][h].path||l.push([h,c]);for(let c=0;c<3&&l.length;c++){let h=Math.floor(i()*l.length),[u,d]=l.splice(h,1)[0];this.g[d][u].bad=!0,this.g[d][u].m=7}for(let c=0;c<e;c++)for(let h=0;h<t;h++){let u=1+Math.floor(i()*3);for(let d=0;d<u;d++)this.g[c][h].m=hu(this.g[c][h].m)}return this.flood(),!this.solved}flood(){let{C:t,R:e,g:i}=this;for(let s of i)for(let a of s)a.on=!1;if(this.solved=!1,this.overNow=!1,!(i[this.rs][0].m&8))return;let n=[[0,this.rs]];for(i[this.rs][0].on=!0;n.length;){let[s,a]=n.pop();for(let[o,l,c,h]of wa){let u=s+o,d=a+l;u<0||d<0||u>=t||d>=e||i[a][s].m&c&&i[d][u].m&h&&!i[d][u].on&&(i[d][u].on=!0,n.push([u,d]))}}this.overNow=i.some(s=>s.some(a=>a.bad&&a.on)),this.solved=i[this.rt][t-1].on&&i[this.rt][t-1].m&2&&!this.overNow}turn(t,e){this.done||(this.g[e][t].m=hu(this.g[e][t].m),this.m.audio.click(),this.flood(),this.overNow&&(this.over=.5,this.m.audio.bad()),this.solved&&this.m.finish(!0,"\xA1CIRCUITO CERRADO!"))}update(t){this.t+=t,this.over=Math.max(0,this.over-t)}key(t,e){if(!e)return;let i=this.cur;t==="ArrowLeft"||t==="KeyA"?i.x=Math.max(0,i.x-1):t==="ArrowRight"||t==="KeyD"?i.x=Math.min(this.C-1,i.x+1):t==="ArrowUp"||t==="KeyW"?i.y=Math.max(0,i.y-1):t==="ArrowDown"||t==="KeyS"?i.y=Math.min(this.R-1,i.y+1):(t==="Space"||t==="Enter"||t==="KeyE")&&this.turn(i.x,i.y)}down(t,e){let i=Math.floor((t-100)/60),n=Math.floor((e-30)/60);i>=0&&n>=0&&i<this.C&&n<this.R&&(this.cur={x:i,y:n},this.turn(i,n))}draw(t){for(let c=0;c<this.R;c++)for(let h=0;h<this.C;h++){let u=this.g[c][h],d=100+h*60,f=30+c*60,p=d+60/2,x=f+60/2;oi(t,d+3,f+3,54,54,8),t.fillStyle=u.bad?u.on?"#8a2018":"#3a1a22":"#0f2140",t.fill(),t.strokeStyle=u.bad?"#ff6b4a":"#2a4374",t.lineWidth=2,t.stroke(),t.strokeStyle=u.on?u.bad?"#ff9a7a":"#5ad1ff":"#51648a",t.lineWidth=u.on?9:7,t.lineCap="round";for(let[g,m,y]of wa)u.m&y&&(t.beginPath(),t.moveTo(p,x),t.lineTo(p+g*(60/2-3),x+m*(60/2-3)),t.stroke());t.fillStyle=t.strokeStyle,t.beginPath(),t.arc(p,x,u.on?7:5,0,7),t.fill(),u.bad&&se(t,"!",p+17,x-15,18,"#ff6b4a")}let s=this.cur;t.strokeStyle="#ffc93c",t.lineWidth=3,oi(t,100+s.x*60+1,30+s.y*60+1,58,58,9),t.stroke();let a=30+this.rs*60+60/2,o=30+this.rt*60+60/2,l=this.g[this.rt][this.C-1].on&&this.g[this.rt][this.C-1].m&2&&!this.overNow;t.strokeStyle="#5ad1ff",t.lineWidth=9,t.beginPath(),t.moveTo(62,a),t.lineTo(100,a),t.stroke(),t.strokeStyle=l?"#57e389":"#51648a",t.beginPath(),t.moveTo(100+this.C*60,o),t.lineTo(100+this.C*60+38,o),t.stroke(),oi(t,6,a-22,60,44,8),t.fillStyle="#5ad1ff",t.fill(),se(t,this.from,36,a+1,11,"#06233a"),oi(t,100+this.C*60+34,o-22,60,44,8),t.fillStyle=l?"#57e389":"#51648a",t.fill(),se(t,this.to,100+this.C*60+64,o+1,11,"#06233a"),this.over>0&&se(t,"\xA1SOBRECARGA!",pi/2,284,20,"#ff6b4a")}},Pl=class{constructor(t,e){this.m=t,this.title=e.title||"Freno mec\xE1nico",this.hint="Altern\xE1 \u2190 y \u2192 (o A y D) lo m\xE1s r\xE1pido que puedas para girar la manivela y soltar el freno. En pantalla t\xE1ctil: toc\xE1 un lado y el otro.",this.prog=0,this.side=0,this.ang=0,this.t=0,this.kick=0}push(t){this.done||t===this.side||(this.side=t,this.prog=Math.min(1,this.prog+.042),this.ang+=.5,this.kick=.12,this.m.audio.click(),this.prog>=1&&this.m.finish(!0,"\xA1FRENO LIBERADO!"))}key(t,e){e&&(t==="ArrowLeft"||t==="KeyA"?this.push(-1):(t==="ArrowRight"||t==="KeyD")&&this.push(1))}down(t){this.push(t<pi/2?-1:1)}update(t){this.t+=t,this.kick=Math.max(0,this.kick-t),this.prog=Math.max(0,this.prog-t*.09)}draw(t){let s=this.prog*26;t.fillStyle="#51648a",t.beginPath(),t.arc(190,150,78,0,7),t.fill(),t.fillStyle="#0f2140",t.beginPath(),t.arc(190,150,62,0,7),t.fill();for(let o=0;o<6;o++){let l=this.ang+o*Math.PI/3;t.strokeStyle="#8fa3c8",t.lineWidth=6,t.beginPath(),t.moveTo(190,150),t.lineTo(190+Math.cos(l)*60,150+Math.sin(l)*60),t.stroke()}t.fillStyle=this.prog>=1?"#57e389":"#ff6b4a",t.fillRect(90-s,124,22,52),t.fillRect(268+s,124,22,52);let a=this.ang;t.strokeStyle="#ffc93c",t.lineWidth=10,t.lineCap="round",t.beginPath(),t.moveTo(190,150),t.lineTo(190+Math.cos(a)*54,150+Math.sin(a)*54),t.stroke(),t.fillStyle="#ffc93c",t.beginPath(),t.arc(190+Math.cos(a)*54,150+Math.sin(a)*54,12,0,7),t.fill(),t.fillStyle="#fff7e6",t.beginPath(),t.arc(190,150,10,0,7),t.fill();for(let[o,l,c]of[[-1,360,"\u2190"],[1,450,"\u2192"]]){let h=this.side===o&&this.kick>0;oi(t,l-34,96,68,68,12),t.fillStyle=h?"#ffc93c":this.side===o?"#2a4374":"#13284c",t.fill(),t.lineWidth=4,t.strokeStyle=this.side===o?"#6f84a8":"#ffc93c",t.stroke(),se(t,c,l,131,38,h?"#3a2500":"#fff7e6")}se(t,this.side===0?"Empez\xE1 con cualquiera":"Ahora la otra",405,190,15,"#a9bbd6","center","Nunito,sans-serif"),oi(t,60,258,440,20,10),t.fillStyle="#0f2140",t.fill(),t.strokeStyle="#2a4374",t.lineWidth=3,t.stroke(),t.fillStyle="#57e389",oi(t,63,261,Math.max(8,434*this.prog),14,7),t.fill(),se(t,"FRENO "+Math.round((1-this.prog)*100)+"%",pi/2,238,16,"#fff7e6")}},Ta=[{k:["ArrowUp","KeyW"],lab:"\u2191",name:"AIRE",col:"#5ad1ff",x:280,y:78,f:660},{k:["ArrowRight","KeyD"],lab:"\u2192",name:"CHISPA",col:"#ffc93c",x:385,y:150,f:880},{k:["ArrowDown","KeyS"],lab:"\u2193",name:"CHIPS",col:"#ff8a4a",x:280,y:222,f:440},{k:["ArrowLeft","KeyA"],lab:"\u2190",name:"VAPOR",col:"#e8f1f2",x:175,y:150,f:550}],Il=class{constructor(t,e){this.m=t,this.title=e.title||"Secuencia de arranque",this.hint="Mir\xE1 el orden en que se encienden las etapas y repetilo con las flechas (o haciendo clic). Son tres rondas, cada una m\xE1s larga.",this.seq=[];for(let i=0;i<5;i++){let n;do n=Math.floor(Math.random()*4);while(i&&n===this.seq[i-1]);this.seq.push(n)}this.round=0,this.len=[3,4,5],this.state="show",this.i=0,this.t=.6,this.lit=-1,this.litT=0,this.err=0}flash(t){this.lit=t,this.litT=.3,this.m.audio.tone(Ta[t].f,.22,"triangle",.14)}press(t){if(!(this.done||this.state!=="input")){if(this.flash(t),t!==this.seq[this.i]){this.err=.7,this.m.audio.bad(),this.state="show",this.i=0,this.t=1;return}if(this.i++,this.i>=this.len[this.round]){if(this.round++,this.m.audio.ok(),this.round>=3)return this.m.finish(!0,"\xA1CALDERA EN MARCHA!");this.state="show",this.i=0,this.t=.9}}}key(t,e){if(!e)return;let i=Ta.findIndex(n=>n.k.includes(t));i>=0&&this.press(i)}down(t,e){let i=Ta.findIndex(n=>Math.hypot(n.x-t,n.y-e)<46);i>=0&&this.press(i)}update(t){this.litT=Math.max(0,this.litT-t),this.litT===0&&(this.lit=-1),this.err=Math.max(0,this.err-t),this.state==="show"&&(this.t-=t,this.t<=0&&(this.i<this.len[this.round]?(this.flash(this.seq[this.i]),this.i++,this.t=.5):(this.state="input",this.i=0)))}draw(t){Ta.forEach((i,n)=>{let s=this.lit===n;t.beginPath(),t.arc(i.x,i.y,42,0,7),t.fillStyle=s?i.col:"#13284c",t.fill(),t.lineWidth=5,t.strokeStyle=i.col,t.stroke(),se(t,i.lab,i.x,i.y-6,30,s?"#0f2140":i.col),se(t,i.name,i.x,i.y+20,11,s?"#0f2140":"#a9bbd6","center","Nunito,sans-serif")}),se(t,this.err>0?"Orden equivocado: mir\xE1 de nuevo":this.state==="show"?"Mir\xE1\u2026":"Tu turno",280,150,15,this.err>0?"#ff6b4a":this.state==="show"?"#a9bbd6":"#57e389","center","Nunito,sans-serif");for(let i=0;i<3;i++)t.beginPath(),t.arc(470,110+i*40,13,0,7),t.fillStyle=i<this.round?"#57e389":"#13284c",t.fill(),t.lineWidth=3,t.strokeStyle=i===this.round?"#ffc93c":"#2a4374",t.stroke();se(t,"RONDA",470,78,12,"#a9bbd6","center","Nunito,sans-serif");let e=this.len[Math.min(2,this.round)];for(let i=0;i<e;i++)t.fillStyle=this.state==="input"&&i<this.i?"#57e389":"#2a4374",t.fillRect(60+i*16,270,12,12)}},Pn=[["ArrowLeft","KeyA","\u2190","#5ad1ff"],["ArrowDown","KeyS","\u2193","#57e389"],["ArrowUp","KeyW","\u2191","#ffc93c"],["ArrowRight","KeyD","\u2192","#ff8fab"]],Ll=class{constructor(t,e){this.m=t,this.title=e.title||"Comp\xE1s de carga",this.hint="Puls\xE1 cada flecha (o A S W D, o toc\xE1 su carril) cuando la nota llegue a la l\xEDnea. Con 9 aciertos de 14 la flota queda cargada.",this.reset()}reset(){let t=[0,3,6,10,12,16,19,22,26,28,32,36,38,40],e=[0,2,1,3,1,0,3,2,0,1,3,2,1,0];this.notes=t.map((i,n)=>({t:2+i*.19,lane:e[n],hit:0})),this.t=0,this.hits=0,this.miss=0,this.flash=[0,0,0,0],this.msg="",this.msgT=0}press(t){if(this.done)return;this.flash[t]=.15;let e=null;for(let i of this.notes)!i.hit&&i.lane===t&&Math.abs(i.t-this.t)<.2&&(!e||Math.abs(i.t-this.t)<Math.abs(e.t-this.t))&&(e=i);e?(e.hit=1,this.hits++,this.m.audio.tone([196,262,330,392][t],.16,"triangle",.16),this.m.audio.tone(1900,.04,"triangle",.06)):this.m.audio.tone(120,.08,"square",.05)}key(t,e){if(!e)return;let i=Pn.findIndex(n=>n[0]===t||n[1]===t);i>=0&&this.press(i)}down(t){let e=Math.floor((t-120)/80);e>=0&&e<4&&this.press(e)}update(t){this.t+=t,this.msgT=Math.max(0,this.msgT-t);for(let e=0;e<4;e++)this.flash[e]=Math.max(0,this.flash[e]-t);for(let e of this.notes)!e.hit&&this.t-e.t>.2&&(e.hit=-1,this.miss++);if(this.hits>=9&&!this.done&&this.notes.every(e=>e.hit))return this.m.finish(!0,"\xA1FLOTA CARGADA!");if(this.notes.every(e=>e.hit)&&!this.done)if(this.hits>=9)this.m.finish(!0,"\xA1FLOTA CARGADA!");else{let e=this.hits;this.reset(),this.msg=`Fueron ${e} de 14. \xA1Otra vuelta!`,this.msgT=2}}draw(t){let n=127.05882352941177;for(let o=0;o<4;o++){let l=120+o*80;t.fillStyle=this.flash[o]>0?"rgba(255,255,255,.14)":o%2?"#0c1c3a":"#0f2140",t.fillRect(l,20,80,256),t.strokeStyle="#2a4374",t.lineWidth=2,t.strokeRect(l,20,80,256),oi(t,l+14,214,52,44,10),t.strokeStyle=Pn[o][3],t.lineWidth=4,t.stroke(),this.flash[o]>0&&(t.fillStyle=Pn[o][3],t.fill()),se(t,Pn[o][2],l+40,237,26,this.flash[o]>0?"#0f2140":Pn[o][3])}for(let o of this.notes){if(o.hit)continue;let l=236-(o.t-this.t)*n;if(l<0||l>290)continue;let c=120+o.lane*80+40;oi(t,c-24,l-15,48,30,9),t.fillStyle=Pn[o.lane][3],t.fill(),se(t,Pn[o.lane][2],c,l+1,20,"#0f2140")}oi(t,468,60,56,170,10),t.fillStyle="#0f2140",t.fill(),t.strokeStyle="#fff7e6",t.lineWidth=4,t.stroke(),t.fillStyle="#fff7e6",t.fillRect(486,50,20,10);let s=Math.min(1,this.hits/9);t.fillStyle=s>=1?"#57e389":"#5ad1ff",t.fillRect(474,224-158*s,44,158*s),se(t,this.hits+"/9",496,250,20,"#fff7e6"),se(t,"CARGA",496,36,12,"#a9bbd6","center","Nunito,sans-serif"),se(t,"COMP\xC1S",60,36,12,"#a9bbd6","center","Nunito,sans-serif");let a=Math.floor(this.t/.76)%4;for(let o=0;o<4;o++)t.beginPath(),t.arc(60,70+o*34,11,0,7),t.fillStyle=o===a?"#ffc93c":"#13284c",t.fill();this.msgT>0&&se(t,this.msg,280,130,22,"#ffc93c")}},sx={sync:Tl,helio:Al,gates:Rl,route:Cl,crank:Pl,seq:Il,rhythm:Ll},Aa=class{constructor(t){this.audio=t,this.active=null,this.cv=fs("mgCv"),this.g=this.cv.getContext("2d"),this.end=0,this.msg="",this.time=0;let e=i=>{let n=this.cv.getBoundingClientRect();return[(i.clientX-n.left)/n.width*pi,(i.clientY-n.top)/n.height*In]};this.cv.addEventListener("pointerdown",i=>{if(i.preventDefault(),this.active&&this.active.down&&!this.active.done){let[n,s]=e(i);this.active.down(n,s)}}),this.cv.addEventListener("pointermove",i=>{if(this.active&&this.active.move&&!this.active.done){let[n,s]=e(i);this.active.move(n,s)}}),window.addEventListener("pointerup",()=>{this.active&&this.active.up&&this.active.up()})}start(t,e,i){this.active=new sx[t](this,e||{}),this.cb=i,this.end=0,this.time=0,fs("mgTitle").textContent=this.active.title,this.setHint(this.active.hint),fs("mg").classList.remove("hidden"),this.audio.click()}setHint(t){fs("mgHint").textContent=t}finish(t,e){!this.active||this.active.done||(this.active.done=!0,this.msg=e,this.end=1,this.ok=t,t&&this.audio.fanfare())}cancel(){if(!this.active)return;let t=this.cb;this.active=null,fs("mg").classList.add("hidden"),t&&t(!1)}key(t,e){!this.active||this.active.done||this.active.key&&this.active.key(t,e)}update(t){let e=this.active;if(!e)return;this.time+=t;let i=this.g;if(i.fillStyle="#061226",i.fillRect(0,0,pi,In),e.done||e.update(t),e.draw(i),e.done&&(this.end-=t,i.fillStyle="rgba(6,18,38,.72)",i.fillRect(0,0,pi,In),se(i,this.msg,pi/2,In/2-10,38,"#57e389"),se(i,this.time-(1-this.end)<10?"\xA1Tiempo perfecto!":"Buen trabajo",pi/2,In/2+30,18,"#fff7e6","center","Nunito,sans-serif"),this.end<=0)){let n=this.cb;this.active=null,fs("mg").classList.add("hidden"),n&&n(!0)}}};var wt=(r,t,e=0)=>({who:r,text:t,x:e}),Dl="capi-matriz-verde",Te="\xA0",Ul={corta:["viento","rio","sol","urbano","pico"],larga:["viento","rio","sol","urbano","tormenta","pico"]},uu={viento:{title:"Vientos en la Cuchilla",scn:{hour:9,rate:1/60,hold:11.5,wind:.95,gust:.08,extra:0}},rio:{title:"La Fuerza del R\xEDo",scn:{hour:11.5,rate:1/60,hold:13.5,wind:.6,gust:.08,extra:15}},sol:{title:"Cosecha de Sol",scn:{hour:9.5,rate:1/30,hold:18.6,wind:.8,gust:.08,extra:0,energy:1/12}},urbano:{title:"Circuito Verde Urbano",scn:{hour:17.4,rate:1/45,hold:19.7,wind:.25,gust:.06,extra:0,energy:1/50}},tormenta:{title:"Sudestada sobre la Red",scn:{hour:14.5,rate:1/60,hold:16.5,wind:1,gust:.3,extra:0,cloud:.95,energy:1/70}},pico:{title:"Desaf\xEDo 100% Renovable",scn:{hour:19.3,rate:1/45,hold:19.8,wind:.6,gust:.1,extra:0}},libre:{title:"Modo libre",scn:{hour:null,rate:1/20,hold:null,wind:.6,gust:.14,extra:0}}},rx={viento:[wt("valeria",`\xA1Capi! Ac\xE1 Valeria, desde el Centro de Control. La ciudad est\xE1 funcionando casi toda con respaldo t\xE9rmico f\xF3sil: menos de un 20${Te}% de la energ\xEDa es renovable.`),wt("valeria","Mir\xE1 la barra de arriba: Generaci\xF3n contra Demanda, en megavatios. Cuando lo renovable no alcanza, entra el respaldo f\xF3sil y la frecuencia se aparta de los 50,0 Hz.",1),wt("capi","Entendido, ingeniera. \xBFPor d\xF3nde empiezo?",1),wt("valeria","Entr\xF3 un frente de pampero y tenemos molinos frenados. Busc\xE1 a Don Mateo en la entrada de las cuchillas, al este. La flecha amarilla del minimapa te gu\xEDa.")],rio:[wt("valeria","Llovi\xF3 fuerte en la cuenca alta y el caudal del r\xEDo viene creciendo. Y al mediod\xEDa las f\xE1bricas piden m\xE1s energ\xEDa."),wt("valeria","And\xE1 a la Central Hidroel\xE9ctrica, al norte. Est\xE1 inspirada en Salto Grande, la represa que Uruguay comparte con Argentina sobre el r\xEDo Uruguay.",1),wt("valeria","Hay compuertas abiertas de m\xE1s: tiramos agua sin turbinarla. Regul\xE1 el vertedero y despu\xE9s sincroniz\xE1 la Turbina 3.")],sol:[wt("valeria","Una nube de polvo cubri\xF3 el Parque Solar, al noroeste, y descalibr\xF3 los seguidores. Pod\xE9s llegar por el puente del canal o por el coronamiento de la represa."),wt("valeria","Limpi\xE1 y reorient\xE1 las matrices, habilit\xE1 el Banco de Bater\xEDas y cargalo antes de las 18:30, cuando se nos va el sol.")],urbano:[wt("lucia","\xA1Hola, Capi! Luc\xEDa, de la Terminal de la Rambla. Tengo la flota el\xE9ctrica lista para salir, pero los cargadores r\xE1pidos est\xE1n sin potencia."),wt("valeria","Y justo afloja el viento al atardecer. Necesitamos respaldo firme: la Planta de Biomasa, al sureste."),wt("valeria","Carg\xE1 chips del acopio forestal, encend\xE9 la caldera con su secuencia de arranque y enrut\xE1 la potencia hasta la terminal.")],tormenta:[wt("mateo","\xA1Capi, m'hijo! Mir\xE1 el cielo del sudeste: se viene una sudestada de las bravas. Viento fuerte, lluvia y r\xEDo crecido."),wt("valeria","Ya la tenemos encima. Con r\xE1fagas tan fuertes un molino se fren\xF3 solo para protegerse, y un rayo hizo saltar el transformador del parque."),wt("valeria","Adem\xE1s las nubes taparon el sol y el embalse sube r\xE1pido: hay que volver a regular la compuerta 3. Las bater\xEDas aguantan mientras tanto, pero no para siempre."),wt("capi","Voy saliendo. \xA1Que no me vuele el casco!")],pico:[wt("valeria","Queda la prueba grande: la hora pico nocturna, sin sol. Cuando est\xE9s listo, ven\xED a verme al Centro de Control, en la subestaci\xF3n de la ciudad.")]},ax={viento:[wt("valeria","\xA1Bien ah\xED! El parque e\xF3lico ya inyecta energ\xEDa. El viento rinde much\xEDsimo, pero es variable: cuando afloja, alguien tiene que cubrir.")],rio:[wt("valeria","Embalse estable y tres turbinas en l\xEDnea. El agua es nuestra energ\xEDa de base: constante y regulable."),wt("capi","Cuando sopla el viento guardamos agua, y cuando afloja la turbinamos.",1),wt("valeria","Exacto: viento y agua se complementan. Ahora nos falta el sol.",1)],sol:[wt("valeria","Bater\xEDas cargadas. El sol del mediod\xEDa queda guardado para la noche: eso es mover energ\xEDa en el tiempo.")],urbano:[wt("valeria","Biomasa firme y transporte el\xE9ctrico en marcha. Desde ahora pod\xE9s tomar el \xF3mnibus en cualquier parada para viajar r\xE1pido entre sectores.")],tormenta:[wt("mateo","Pas\xF3 lo peor. Viste c\xF3mo es: cuando una fuente se cae, las otras la sostienen. Por eso conviene tener de todo un poco."),wt("valeria","Red estable en plena sudestada. Eso se llama una matriz diversificada, Capi.")],pico:[]},ox=[wt("valeria","Capi, en nombre de toda la ciudad: gracias. Esta noche la matriz fue verde de punta a punta. El micr\xF3fono es tuyo."),wt("capi","\xA1Gracias! Lo logramos entre todos. Y ya que tengo el micr\xF3fono, les cuento por qu\xE9 esto importa tanto en Uruguay."),wt("capi","Uruguay no produce petr\xF3leo, gas ni carb\xF3n: todo el combustible f\xF3sil hay que traerlo de afuera. El agua, el viento, el sol y la biomasa, en cambio, son de ac\xE1."),wt("capi","Por eso las renovables nos dan independencia: no quedamos atados al precio del petr\xF3leo ni a que llegue el barco.",1),wt("capi","Adem\xE1s se complementan. Si un a\xF1o llueve poco y los embalses bajan, el viento, el sol y la biomasa sostienen la red. Y si afloja el viento, cubre el agua."),wt("capi","Tambi\xE9n cuidan el aire: generar as\xED la electricidad casi no emite gases que calientan el planeta.",1),wt("capi",`Y no es un cuento de videojuego. En 2025, el 98${Te}% de la electricidad generada en Uruguay fue renovable: 46${Te}% hidr\xE1ulica, 34${Te}% e\xF3lica, 14${Te}% biomasa y 4${Te}% solar, seg\xFAn el Ministerio de Industria, Energ\xEDa y Miner\xEDa.`),wt("capi","Cuando sobra, hasta se la vendemos a los pa\xEDses vecinos.",1),wt("capi","Lo que falta nos toca a todos: usar la energ\xEDa con cabeza y llevar esta electricidad limpia al transporte y a las casas. \xA1Gracias por jugar, y nos vemos en Energimundo!")],Ra=class{constructor(t){this.g=t,this.mode="larga",this.seq=Ul.larga,this.phase=0,this.step=0,this.active=!1,this.pending=0,this.lapse=null,this.t=0,this.m5=null,this.free=!1,this.flags={},this.faultT=60,this.streak=0,this.best=0,this.ceremony=!1,this.fw=0,this.fwNorth=!1,this.busT=0}get key(){return this.phase<this.seq.length?this.seq[this.phase]:"libre"}get short(){return this.mode==="corta"}get title(){return uu[this.key].title}lines(t){return t.filter(e=>!e.x||!this.short)}load(){try{let t=JSON.parse(localStorage.getItem(Dl)||"null");if(!t||typeof t.phase!="number")return null;let e=t.mode==="corta"?"corta":"larga";return{mode:e,phase:Math.max(0,Math.min(Ul[e].length,t.phase)),sparks:t.sparks,outfit:t.outfit}}catch{return null}}forget(){try{localStorage.removeItem(Dl)}catch{}}save(){try{localStorage.setItem(Dl,JSON.stringify(Object.assign({phase:this.phase,mode:this.mode},this.g.extras?this.g.extras.data():{})))}catch{}}done(t,e=this.phase){let i=this.seq.indexOf(t);return i>=0?i<e:e>=this.seq.length}reached(t){let e=this.seq.indexOf(t);return e<0?this.free:this.phase>e||this.phase===e&&this.active}preset(t){let e=this.g.grid,i=s=>this.done(s,t),n=this.short?[1]:[1,2,4];e.hydro.t.forEach((s,a)=>{s.on=a<2||a===2&&i("rio")||a===3&&t>=this.seq.length,s.fault=!1}),e.hydro.gates.forEach((s,a)=>{s.reg=a>=2||i("rio")}),e.windP.t.forEach((s,a)=>{s.on=!0,s.fault=!i("viento")&&n.includes(a)}),e.windP.tx=i("viento"),e.windP.txFault=!1,e.solar.a.forEach(s=>{s.on=i("sol"),s.fault=!1}),e.bat.connected=i("sol"),e.bat.soc=i("sol")?.82:.3,e.bat.mode="auto",e.bio.chips=e.bio.on=e.bio.routed=i("urbano"),e.bio.fault=!1,e.bio.pressure=i("urbano")?1:0,e.buses=i("urbano")}scenario(t,e){let i=this.g.grid,n=uu[t].scn;if(i.windTarget=n.wind,i.gustiness=n.gust,i.demandExtraTarget=n.extra,i.cloudTarget=n.cloud||0,i.demandMul=1,i.energyRate=n.energy||1/20,n.hour==null){i.clockRate=n.rate,i.holdAt=null;return}e?(i.hour=n.hour,i.windBase=n.wind,i.demandExtra=n.extra,i.cloud=n.cloud||0,i.clockRate=n.rate,i.holdAt=n.hold):(this.lapse={to:n.hour,rate:n.rate,hold:n.hold},i.clockRate=7,i.holdAt=n.hour)}start(t,e,i=!0){let n=this.g;if(n.ui.dlg&&(n.ui.dlg=null,document.getElementById("dialog").classList.add("hidden")),this.mode=t,this.seq=Ul[t],this.phase=e,this.step=0,this.active=!1,this.flags={},this.pending=0,this.m5=null,this.ceremony=!1,this.free=e>=this.seq.length,this.preset(e),this.scenario(this.key,i),n.grid.step(0),n.grid.fossil=Math.max(0,n.grid.out.demand-n.grid.out.ren),n.grid.step(0),n.actors.gather(!1),this.free){n.ui.toast("MODO LIBRE","Sandbox clim\xE1tico desbloqueado: abr\xED el panel de red con Tab",4);return}this.begin()}begin(){let t=this.g;t.ui.dialog(this.lines(rx[this.key]),()=>{if(this.active=!0,t.ui.toast("MISI\xD3N "+(this.phase+1),this.title,3),this.key==="tormenta"){let e=t.grid;e.windP.t[0].fault=!0,e.windP.txFault=!0,e.hydro.gates[2].reg=!1,t.audio.thunder()}})}steps(){let t=this.g.grid,e=t.out,i=this.g.capi.pos,n=this.short;switch(this.key){case"viento":{let s=n?[1]:[1,2,4],a=s.filter(o=>t.windP.t[o].fault);return[{text:"Hablar con Don Mateo en la entrada de las cuchillas",targets:["npc:mateo"],done:this.flag("mateo")},{text:n?"Desbloquear el freno del aerogenerador marcado":`Desbloquear los frenos de 3 aerogeneradores (${3-a.length}/3)`,targets:a.map(o=>"wind:"+o),done:!a.length},{text:"Activar el transformador del parque",targets:["wind:tx"],done:t.windP.tx},{text:`Llevar la matriz renovable al 35${Te}%`,targets:[],done:e.pct>=35}]}case"rio":{let s=n?[0]:[0,1],a=s.filter(o=>t.hydro.gates[o].reg).length;return[{text:"Viajar a la Central Hidroel\xE9ctrica, al norte",targets:["gate:0"],done:this.flag("atDam")||Math.abs(i.x)<42&&i.z<-34&&i.z>-80&&(this.flags.atDam=!0)},{text:n?"Regular la compuerta del vertedero":`Regular dos compuertas del vertedero (${a}/2)`,targets:s.filter(o=>!t.hydro.gates[o].reg).map(o=>"gate:"+o),done:a===s.length},{text:"Sincronizar la Turbina 3 en la sala de m\xE1quinas",targets:["turb:2"],done:t.hydro.t[2].on},{text:`Alcanzar el 65${Te}% de energ\xEDa renovable`,targets:[],done:e.pct>=65}]}case"sol":{let s=n?[0,1]:[0,1,2,3],a=s.filter(l=>!t.solar.a[l].on),o=n?.5:.8;return[{text:n?`Limpiar y reorientar las matrices desde 2 consolas (${2-a.length}/2)`:`Limpiar y reorientar las 4 matrices solares (${4-a.length}/4)`,targets:a.map(l=>"solar:"+l),done:!a.length&&t.solar.a.every(l=>l.on)},{text:"Habilitar el flujo hacia el Banco de Bater\xEDas",targets:["bat"],done:t.bat.connected},{text:`Cargar el banco al ${o*100}${Te}% antes de las 18:30 (${Math.round(t.bat.soc*100)}${Te}%)`,targets:[],done:t.bat.connected&&t.bat.soc>=o}]}case"urbano":{let s=[{text:"Cargar chips del acopio forestal en la cinta",targets:["bio:chips"],done:t.bio.chips},{text:"Encender la caldera con su secuencia de arranque",targets:["bio:boiler"],done:t.bio.on},{text:"Enrutar la potencia hacia la Terminal de la Rambla",targets:["bio:sub"],done:t.bio.routed}];return n||s.push({text:"Cargar la flota al comp\xE1s en los cargadores de la Terminal",targets:["term"],done:this.flag("charged")}),s.push({text:"Ver salir los \xF3mnibus el\xE9ctricos: habl\xE1 con Luc\xEDa",targets:["npc:lucia"],done:this.flag("busesSeen")}),s}case"tormenta":{let s=[0].filter(a=>t.windP.t[a].fault);return[{text:"Liberar el aerogenerador frenado por las r\xE1fagas",targets:s.map(a=>"wind:"+a),done:!s.length},{text:"Reconectar el transformador alcanzado por el rayo",targets:["wind:tx"],done:!t.windP.txFault},{text:"Regular la compuerta 3: el r\xEDo viene crecido",targets:["gate:2"],done:t.hydro.gates[2].reg},{text:`Recuperar el 100${Te}% renovable en plena sudestada`,targets:[],done:e.pct>=100&&!s.length&&!t.windP.txFault&&t.hydro.gates[2].reg}]}case"pico":{let s=this.m5;return this.ceremony?[{text:"Ir al escenario de la Plaza Matriz para la ceremonia",targets:["fest"],done:this.flag("cer")}]:[{text:"Hablar con la Ing. Valeria en el Centro de Control",targets:["npc:valeria"],done:!!s},{text:"Pasar las bater\xEDas a Autom\xE1tico en el panel de red (Tab)",targets:[],done:!!s&&t.bat.mode==="auto"},{text:`Mantener el 100${Te}% renovable hasta que pase la hora pico`,targets:[],done:this.flag("m5won")}]}}return[]}flag(t){return!!this.flags[t]}event(){}describe(t){let e=this.g.grid,[i,n]=t.split(":"),s=+n,a=s+1;if(i==="npc")return{state:"ok",label:"Hablar con "+{mateo:"Don Mateo",valeria:"la Ing. Valeria",lucia:"Luc\xEDa"}[n]};if(i==="sub")return{state:"ok",label:"Abrir el panel de red"};if(i==="fest")return{state:this.ceremony?"ok":"locked",label:"Subir al escenario"};if(i==="stop")return e.buses?{state:"ok",label:"Tomar el \xF3mnibus el\xE9ctrico"}:{state:"off",label:"Parada de \xF3mnibus: la flota el\xE9ctrica todav\xEDa no tiene carga"};if(i==="term")return!this.reached("urbano")||!e.bio.routed?{state:"locked"}:this.key==="urbano"&&!this.short&&!this.flags.charged?{state:"need",label:"Cargar la flota al comp\xE1s",mg:"rhythm"}:{state:"ok",label:"Tocar el comp\xE1s de carga",mg:"rhythm",replay:!0};if(i==="wind")return this.reached("viento")?n==="tx"?e.windP.txFault?{state:"need",label:"Reconectar el transformador del parque",mg:"sync"}:e.windP.tx?{state:"ok",label:"Inspeccionar el transformador"}:{state:e.windP.t.some(o=>o.fault)?"off":"need",label:"Activar el transformador del parque"}:e.windP.t[s].fault?{state:"need",label:`Desbloquear el aerogenerador ${a}`,mg:s%2?"sync":"crank"}:{state:"ok",label:`Inspeccionar el aerogenerador ${a}`}:{state:"locked"};if(i==="gate")return this.reached("rio")?e.hydro.gates[s].reg?{state:"ok",label:`Inspeccionar la compuerta ${a}`}:{state:"need",label:`Regular la compuerta ${a}`,mg:"gates"}:{state:"locked"};if(i==="turb"){if(!this.reached("rio"))return{state:"locked"};let o=e.hydro.t[s];return o.fault?{state:"need",label:`Resincronizar la turbina ${a}`,mg:"sync"}:o.on?{state:"ok",label:`Inspeccionar la turbina ${a}`}:s===2?{state:"need",label:"Sincronizar la turbina 3",mg:"sync"}:{state:"off",label:"Turbina 4: en mantenimiento programado"}}if(i==="solar"){if(!this.reached("sol"))return{state:"locked"};let o=e.solar.a[s];return o.on&&!o.fault?{state:"ok",label:`Inspeccionar la matriz ${a}`}:{state:"need",label:`Limpiar y reorientar la matriz ${a}`,mg:"helio"}}return i==="bat"?this.reached("sol")?e.bat.connected?{state:"ok",label:"Inspeccionar el banco de bater\xEDas"}:e.solar.a.every(o=>o.on)?{state:"need",label:"Habilitar el Banco de Bater\xEDas",mg:"route"}:{state:"off",label:"Banco de bater\xEDas: primero las matrices solares"}:{state:"locked"}:i==="bio"?this.reached("urbano")?n==="chips"?e.bio.chips?{state:"ok",label:"Inspeccionar el acopio de chips"}:{state:"need",label:"Cargar chips de madera en la cinta"}:n==="boiler"?e.bio.fault?{state:"need",label:"Recuperar la presi\xF3n de la caldera",mg:"seq"}:e.bio.on?{state:"ok",label:"Inspeccionar la caldera"}:e.bio.chips?{state:"need",label:"Encender la caldera",mg:"seq"}:{state:"off",label:"Caldera: faltan chips en la cinta"}:e.bio.routed?{state:"ok",label:"Inspeccionar la subestaci\xF3n"}:e.bio.on?{state:"need",label:"Enrutar la potencia a la terminal",mg:"route"}:{state:"off",label:"Subestaci\xF3n: la caldera est\xE1 apagada"}:{state:"locked"}:{state:"locked"}}interact(t){let e=this.g,i=e.grid,n=this.describe(t),[s,a]=t.split(":"),o=+a,l=e.ui,c=e.world.inter[t],h=()=>{e.fx.sparks(c.x,c.y+2,c.z,26,5951999),e.audio.power(),e.capi.celebrate(1.2)};if(s==="npc")return this.talk(a);if(s==="sub")return e.togglePanel(!0);if(s==="fest")return this.flags.cer=!0,this.runCeremony();if(s==="stop")return n.state==="ok"?e.extras.openTravel(o):l.note(n.label);if(n.state==="off")return l.note(n.label);if(n.state==="ok"&&!n.replay)return l.note(this.info(t));if(n.mg){let d={title:{sync:"Sincronizaci\xF3n de fase",crank:`Freno del aerogenerador ${o+1}`,seq:"Secuencia de arranque de la caldera",gates:`Control de la compuerta ${o+1}`,helio:`Matriz solar ${o+1}`,route:"Enrutamiento de subestaci\xF3n",rhythm:"Comp\xE1s de carga r\xE1pida"}[n.mg],from:s==="bat"?"SOLAR":"CALDERA",to:s==="bat"?"BATER\xCDAS":"TERMINAL"};return e.minigame(n.mg,d,()=>{let f="Transformador reconectado.";if(s==="wind")a==="tx"?i.windP.txFault=!1:(i.windP.t[o].fault=!1,f=`Freno liberado: el aerogenerador ${o+1} vuelve a girar.`);else if(s==="gate")i.hydro.gates[o].reg=!0,this.short&&this.key==="rio"&&(i.hydro.gates[1].reg=!0),e.audio.gate(),f=`Compuerta ${o+1} regulada: el agua ahora pasa por las turbinas.`;else if(s==="turb")i.hydro.t[o].on=!0,i.hydro.t[o].fault=!1,f=`Turbina ${o+1} acoplada a la red en 50,0 Hz.`;else if(s==="solar"){let p=this.short&&this.key==="sol"&&o<2?[o,o+2]:[o];p.forEach(x=>{i.solar.a[x].on=!0,i.solar.a[x].fault=!1}),f=p.length>1?`Matrices ${o+1} y ${o+3} limpias y siguiendo al sol.`:`Matriz ${o+1} limpia y siguiendo al sol.`}else s==="bat"?(i.bat.connected=!0,i.bat.mode="auto",f="Banco de bater\xEDas conectado: los excedentes ahora se guardan."):s==="bio"?a==="boiler"?(i.bio.on=!0,i.bio.fault=!1,f="Caldera encendida: la presi\xF3n sube y entrega potencia firme."):(i.bio.routed=!0,f="Potencia enrutada: los cargadores r\xE1pidos de la terminal tienen energ\xEDa."):s==="term"&&(this.flags.charged=!0,f="Flota cargada al comp\xE1s del candombe. \xA1Lista para salir!");i.step(0),h(),l.note(f)})}e.capi.work(1.1),e.audio.spark(),t==="wind:tx"&&(i.windP.tx=!0,setTimeout(h,900),l.note("Transformador en l\xEDnea: el parque e\xF3lico inyecta energ\xEDa a la red.")),t==="bio:chips"&&(i.bio.chips=!0,e.fx.puff(c.x,c.y+1,c.z,14,13215339,2),l.note("Cinta cargada con chips de madera de residuos forestales."))}info(t){let e=this.g.grid,[i,n]=t.split(":"),s=+n,a=o=>o.toFixed(1).replace(".",",");return i==="wind"?n==="tx"?`Transformador del parque: ${a(e.out.wind)} MW hacia la ciudad.`:`Aerogenerador ${s+1}: ${a(e.windUnit[s])} MW con viento al ${Math.round(e.wind*100)}${Te}%.`:i==="gate"?`Compuerta ${s+1} regulada. Salto \xFAtil al ${Math.round(e.head()*100)}${Te}%.`:i==="turb"?`Turbina ${s+1}: ${a(e.hydroUnit[s])} MW, acoplada a 50,0 Hz.`:i==="solar"?`Matriz ${s+1}: ${a(e.solarUnit[s])} MW. De noche no genera: por eso existen las bater\xEDas.`:i==="bat"?`Banco LFP al ${Math.round(e.bat.soc*100)}${Te}%. Guarda excedentes y los devuelve en la hora pico.`:t==="bio:chips"?"Acopio de chips: biomasa de residuos forestales para la caldera.":t==="bio:boiler"?`Caldera de cogeneraci\xF3n: ${a(e.out.bio)} MW firmes, haya o no viento.`:"Subestaci\xF3n elevadora: alimenta los cargadores de la Terminal de la Rambla."}talk(t){let e=this.g,i=e.ui,n=e.grid,s=this.flags,a=this.key;if(t==="mateo")return a==="viento"&&this.active&&!s.mateo?i.dialog(this.lines([wt("mateo","\xA1Buen d\xEDa, m'hijo! Lindo pampero se larg\xF3: viento del sudoeste, fresco y parejo. Justo lo que piden los molinos."),wt("mateo","Las cuchillas son lomas largas y suaves: el viento las peina sin tropezar con nada. Por eso los plantamos ac\xE1 arriba.",1),wt("mateo",this.short?"Despu\xE9s del mantenimiento qued\xF3 uno con el freno puesto. And\xE1 a su consola, solt\xE1 el freno y sincronizalo con la red. Los teros te marcan d\xF3nde hay l\xEDo.":"Despu\xE9s del mantenimiento quedaron tres con el freno puesto. And\xE1 a la consola de cada uno y solt\xE1 el freno: algunos piden manivela y otros sincronizar con la red. Los teros te marcan d\xF3nde hay l\xEDo.")]),()=>{s.mateo=!0}):a==="tormenta"?i.dialog([wt("mateo","Con sudestada los molinos se frenan solos si el viento se pasa de fuerte. No es falla: es que se cuidan. Hay que soltarlos cuando afloja la r\xE1faga.")]):i.dialog([wt("mateo",this.done("urbano")?"Los montes de eucalipto dan madera y los restos van a la caldera. Ac\xE1 no se tira nada.":"Cuando el viento afloja, el r\xEDo cubre. Y cuando sopla fuerte, se guarda agua. As\xED de simple es el trato.")]);if(t==="lucia")return a==="urbano"&&this.active&&n.bio.routed&&(this.short||s.charged)&&!s.busesSeen?i.dialog(this.lines([wt("lucia","\xA1Lleg\xF3 la potencia a los cargadores! Cada \xF3mnibus el\xE9ctrico que sale es gasoil que no se quema en la ciudad."),wt("lucia","Carga r\xE1pida al atardecer y a recorrer la rambla. \xA1Mir\xE1 c\xF3mo salen!")]),()=>{n.buses=!0,this.busT=6,e.inspect("terminal"),e.audio.power()}):a==="urbano"&&this.active&&n.bio.routed&&!s.charged?i.dialog([wt("lucia","Ya hay potencia. Ahora dale ritmo a los cargadores: es la consola del costado de la terminal, ac\xE1 al lado.")]):i.dialog([wt("lucia",n.buses?"La flota anda sola con energ\xEDa de ac\xE1 nom\xE1s. Y en silencio: los vecinos, chochos.":"Sin potencia en los cargadores no puedo sacar la flota. Avisame cuando la biomasa est\xE9 en l\xEDnea.")]);if(a==="pico"&&this.active&&!this.m5&&!this.ceremony)return i.dialog(this.lines([wt("valeria","Es la noche del festival en la rambla: demanda m\xE1xima hist\xF3rica y cero megavatios solares."),wt("valeria","Termin\xF3 el mantenimiento de la Turbina 4, as\xED que la represa va a pleno. Ten\xE9s agua, biomasa, bater\xEDas y las r\xE1fagas de la noche.",1),wt("valeria",`Abr\xED el panel de red con Tab y pas\xE1 las bater\xEDas a Autom\xE1tico. Despu\xE9s aguant\xE1 ${this.short?"un minuto y medio":"dos minutos"} al 100${Te}% renovable: si algo falla, las bater\xEDas te dan margen mientras lo arregl\xE1s.`),wt("valeria","\xBFListo? \xA1Arranca la hora pico!")]),()=>this.startM5());i.dialog([wt("valeria",n.out.pct>=100?"Equilibrio \xF3ptimo: toda la demanda cubierta con renovables y la frecuencia clavada en 50,0 Hz.":`Estamos en ${Math.round(n.out.pct)}${Te}% renovable. Lo que falta lo cubre el respaldo f\xF3sil: ${Math.round(n.out.fossil)} MW.`)])}startM5(){let t=this.g.grid,e=this.short;t.hydro.t[3].on=!0,t.hydro.t.forEach(i=>{i.fault=!1}),t.hydro.gates.forEach(i=>{i.reg=!0}),t.bat.soc=Math.max(t.bat.soc,.93),t.bat.mode="hold",t.hour=20,t.clockRate=0,t.holdAt=e?21.5:22,t.energyRate=1/60,t.windTarget=.85,t.windBase=.85,t.gustiness=.2,t.demandExtraTarget=0,this.m5={t:e?90:120,total:e?90:120,grace:12,events:e?[[68,"wind"],[36,"hydro"]]:[[98,"wind2"],[64,"bio"],[30,"hydro"]]},this.g.ui.toast("\xA1HORA PICO!",`Manten\xE9 el 100${Te}% renovable durante ${e?"90 segundos":"2 minutos"}`,3)}fault(t){let e=this.g.grid,i=this.g.ui,n=a=>a[Math.floor(Math.random()*a.length)],s="";if(t==="wind"||t==="wind2"){let a=e.windP.t.map((l,c)=>c).filter(l=>!e.windP.t[l].fault);if(!a.length)return;let o=n(a);if(e.windP.t[o].fault=!0,s=`Se trab\xF3 el freno del aerogenerador ${o+1}`,t==="wind2"){let l=a.filter(c=>c!==o);if(l.length){let c=n(l);e.windP.t[c].fault=!0,s=`Se trabaron los aerogeneradores ${Math.min(o,c)+1} y ${Math.max(o,c)+1}`}}}else if(t==="windtx"){if(!e.windP.tx||e.windP.txFault)return;e.windP.txFault=!0,s="Salt\xF3 la protecci\xF3n del transformador e\xF3lico"}else if(t==="hydro"){let a=[0,1,2,3].filter(l=>e.hydro.t[l].on&&!e.hydro.t[l].fault);if(!a.length)return;let o=n(a);e.hydro.t[o].fault=!0,s=`La turbina ${o+1} perdi\xF3 el sincronismo`}else if(t==="solar"){let a=[0,1,2,3].filter(l=>e.solar.a[l].on&&!e.solar.a[l].fault);if(!a.length)return;let o=n(a);e.solar.a[o].fault=!0,s=`Polvo sobre la matriz solar ${o+1}`}else if(t==="bio"){if(!e.bio.on||e.bio.fault)return;e.bio.fault=!0,s="Cay\xF3 la presi\xF3n de la caldera de biomasa"}else if(t==="gate"){let a=[0,1,2,3].filter(l=>e.hydro.gates[l].reg);if(!a.length)return;let o=n(a);e.hydro.gates[o].reg=!1,s=`La compuerta ${o+1} qued\xF3 abierta de m\xE1s`}i.note("Alerta de red: "+s+".",5),this.g.audio.alarm()}randomFault(){let t=this.g.grid,e=["wind","wind","hydro","windtx","gate"];t.sun()>.3&&e.push("solar","solar"),t.bio.on&&e.push("bio"),this.fault(e[Math.floor(Math.random()*e.length)])}clearFaults(){let t=this.g.grid;t.windP.t.forEach(e=>{e.fault=!1}),t.windP.txFault=!1,t.hydro.t.forEach(e=>{e.fault=!1}),t.hydro.gates.forEach(e=>{e.reg=!0}),t.bio.fault=!1}failM5(){let t=this.g;this.m5=null,this.active=!1,t.ui.timer(null),this.scenario("pico",!0),t.grid.bat.soc=.93,t.grid.bat.mode="auto",this.clearFaults(),t.ui.dialog([wt("valeria",`Entr\xF3 el respaldo f\xF3sil demasiado tiempo y perdimos el 100${Te}% renovable. Tranquilo: repar\xE9 las fallas y recargu\xE9 las bater\xEDas.`),wt("valeria","Un consejo: las bater\xEDas son tu margen. Arregl\xE1 cada falla antes de que se vac\xEDen. Ven\xED a verme cuando quieras intentarlo de nuevo.")],()=>{this.active=!0})}runCeremony(){let t=this.g;t.actors.celebrate=4,this.fw=600,this.fwNorth=!0,t.startCine(),t.ui.dialog(this.lines(ox),()=>{t.capi.celebrate(3),t.audio.fanfare(),t.actors.celebrate=600,t.extras.showDiploma(()=>t.showCredits(()=>{t.endCine(),this.fwNorth=!1,this.fw=12,t.actors.celebrate=10,this.phase=this.seq.length,this.save(),this.start(this.mode,this.phase,!1),t.actors.gather(!0)}))})}update(t){let e=this.g,i=e.grid,n=e.ui;this.t+=t,this.lapse&&Math.abs(i.hour-this.lapse.to)<.001&&(i.clockRate=this.lapse.rate,i.holdAt=this.lapse.hold,this.lapse=null);let s=this.active?this.steps():[],a=s.findIndex(c=>!c.done);a<0&&(a=s.length);let o=this.active&&s[a]?s[a].targets:[];for(let c of e.world.interList){let h=this.describe(c.id);c.state=h.state,c.label=h.label||"",c.target=o.includes(c.id),c.target&&c.state==="locked"&&(c.state="ok")}if(this.fw>0&&(this.fw-=t,Math.random()<2.2*t)){let c=this.fwNorth;e.fx.firework(c?-58+Math.random()*28:-60+Math.random()*60,c?13+Math.random()*10:22+Math.random()*16,c?8+Math.random()*16:84+Math.random()*14,[5759881,5951999,16765503,16748459,16777215][Math.floor(Math.random()*5)]),e.audio.boom()}if(this.free){this.streak=i.out.pct>=100?this.streak+t:0,this.best=Math.max(this.best,this.streak),this.faultT-=t,this.faultT<=0&&(this.faultT=50+Math.random()*40,this.randomFault());let c=h=>Math.floor(h/60)+":"+String(Math.floor(h%60)).padStart(2,"0");n.mission("Modo libre","Sandbox clim\xE1tico \xB7 panel de red con Tab",[{text:`Mantener la red al 100${Te}% renovable`,state:i.out.pct>=100?"done":"now"},{text:"Racha actual: "+c(this.streak),state:"next"},{text:"Mejor racha: "+c(this.best),state:"next"}]),n.timer(null);return}if(n.mission(`Misi\xF3n ${this.phase+1} de ${this.seq.length} \xB7 ${this.title}`,this.active?"Objetivos":"Recibiendo instrucciones\u2026",s.map((c,h)=>({text:c.text,state:h<a?"done":h===a?"now":"next"}))),!this.active)return;a!==this.step&&(a>this.step&&a<s.length&&e.audio.ok(),this.step=a);let l=this.key;if(l==="sol"){let c=18.5-i.hour;this.lapse?n.timer(null):n.timer(i.bat.connected?`Atardecer en ${Math.max(0,Math.floor(c))} h ${String(Math.max(0,Math.floor(c%1*60))).padStart(2,"0")} min`:"Sol hasta las 18:30",c<2),c<=0&&a<s.length&&!this.lapse&&(this.active=!1,n.timer(null),n.dialog([wt("valeria","Se nos fue el sol antes de completar la carga. No pasa nada: ma\xF1ana sale de nuevo. Adelanto el reloj y seguimos donde quedamos.")],()=>{this.scenario("sol",!1),this.active=!0}))}if(l==="urbano"&&this.busT>0&&(this.busT-=t,this.busT<=0&&(this.flags.busesSeen=!0)),l==="pico"&&this.m5&&!this.flags.m5won){let c=this.m5;if(!c.started){if(i.bat.mode!=="auto"){n.timer("Pas\xE1 las bater\xEDas a Autom\xE1tico (Tab)",!0);return}c.started=!0,i.clockRate=1/60}for(c.t-=t;c.events.length&&c.t<=c.events[0][0];)this.fault(c.events.shift()[1]);i.out.pct<99.9&&(c.grace-=t);let h=Math.max(0,Math.ceil(c.t));if(n.timer(`Hora pico: ${Math.floor(h/60)}:${String(h%60).padStart(2,"0")}  \xB7  margen f\xF3sil ${Math.max(0,c.grace).toFixed(0)} s`,i.out.pct<99.9),c.grace<=0)return this.failM5();c.t<=0&&(this.flags.m5won=!0,n.timer(null),n.toast(`\xA1100${Te}% RENOVABLE!`,"Pas\xF3 la hora pico sin un solo apag\xF3n",4.5),e.audio.fanfare(),e.capi.celebrate(3),e.actors.celebrate=10,this.fw=60,this.fwNorth=!1,this.clearFaults(),i.energyRate=1/20,i.gustiness=.1,this.ceremony=!0,e.actors.gather(!0),setTimeout(()=>n.dialog([wt("valeria","\xA1Lo logramos! Pas\xF3 el pico sin quemar una gota de combustible. Ven\xED a la Plaza Matriz: te armamos un escenario y te estamos esperando todos.")]),4200));return}if(a>=s.length&&s.length&&!this.pending&&l!=="pico"){this.pending=1,this.active=!1,n.timer(null),n.toast("\xA1MISI\xD3N COMPLETA!",this.title,3.6),e.audio.fanfare(),e.capi.celebrate(2.6),e.actors.celebrate=7;let c=l;setTimeout(()=>{let h=()=>{this.pending=0,this.flags={},this.phase++,this.save(),this.step=0,this.preset(this.phase),this.scenario(this.key,!1),this.begin()},u=this.lines(ax[c]);u.length?n.dialog(u,h):h()},3e3)}}};var Ca=class{constructor(t){let e=this.N=188,i=this.cell=($.maxX-$.minX)/e,n=e*e;this.h=new Float32Array(n),this.ok=new Uint8Array(n),this.water=new Uint8Array(n),this.deck=new Uint8Array(n);for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=$.minX+(c+.5)*i,u=$.minZ+(l+.5)*i,d=l*e+c,f=t.groundAt(h,u),p=qi(h,u);this.ok[d]=1,f<p-1.2?(this.water[d]=1,this.h[d]=p):(this.h[d]=f,f-t.terrainAt(h,u)>.5&&(this.deck[d]=1))}let s=.62,a=l=>Math.max(0,Math.min(e-1,Math.floor((l-$.minX)/i))),o=l=>Math.max(0,Math.min(e-1,Math.floor((l-$.minZ)/i)));for(let l of t.boxes)for(let c=o(l.z0-s);c<=o(l.z1+s);c++)for(let h=a(l.x0-s);h<=a(l.x1+s);h++){let u=$.minX+(h+.5)*i,d=$.minZ+(c+.5)*i,f=c*e+h;u>=l.x0-s&&u<=l.x1+s&&d>=l.z0-s&&d<=l.z1+s&&l.top>this.h[f]+.72&&(this.ok[f]=0)}for(let l of t.circles){if(!l.r)continue;let c=l.r+.5;for(let h=o(l.z-c);h<=o(l.z+c);h++)for(let u=a(l.x-c);u<=a(l.x+c);u++){let d=$.minX+(u+.5)*i,f=$.minZ+(h+.5)*i;(d-l.x)**2+(f-l.z)**2<c*c&&(this.ok[h*e+u]=0)}}this.gs=new Float32Array(n),this.from=new Int32Array(n),this.closed=new Uint8Array(n),this.heap=[]}idx(t,e){let i=this.N;return Math.max(0,Math.min(i-1,Math.floor((e-$.minZ)/this.cell)))*i+Math.max(0,Math.min(i-1,Math.floor((t-$.minX)/this.cell)))}cx(t){return $.minX+(t%this.N+.5)*this.cell}cz(t){return $.minZ+(Math.floor(t/this.N)+.5)*this.cell}can(t,e){if(!this.ok[e])return!1;let i=this.h[e]-this.h[t];return!(i>2||i<-3.2||this.water[t]&&this.deck[e])}nearest(t,e){if(this.ok[t])return t;let i=this.N,n=t%i,s=Math.floor(t/i),a=-1,o=1e9;for(let l=Math.max(0,s-e);l<=Math.min(i-1,s+e);l++)for(let c=Math.max(0,n-e);c<=Math.min(i-1,n+e);c++){let h=l*i+c;if(!this.ok[h])continue;let u=(c-n)**2+(l-s)**2+Math.abs(this.h[h]-this.h[t])*4;u<o&&(o=u,a=h)}return a}los(t,e){let i=this.cx(t),n=this.cz(t),s=this.cx(e),a=this.cz(e),o=Math.ceil(Math.hypot(s-i,a-n)/(this.cell*.45)),l=t;for(let c=1;c<=o;c++){let h=this.idx(i+(s-i)*c/o,n+(a-n)*c/o);if(h!==l){if(!this.can(l,h)||this.water[h]!==this.water[t])return!1;l=h}}return!0}find(t,e,i,n){let s=this.N,a=this.nearest(this.idx(t,e),5),o=this.nearest(this.idx(i,n),7);if(a<0)return null;o<0&&(o=this.idx(i,n));let l=this.gs,c=this.from,h=this.closed,u=this.heap;l.fill(1/0),h.fill(0),u.length=0;let d=o%s,f=Math.floor(o/s),p=E=>{let P=Math.abs(E%s-d),b=Math.abs(Math.floor(E/s)-f);return Math.max(P,b)+.414*Math.min(P,b)},x=(E,P)=>{u.push([E,P]);let b=u.length-1;for(;b>0;){let M=b-1>>1;if(u[M][0]<=u[b][0])break;[u[M],u[b]]=[u[b],u[M]],b=M}},g=()=>{let E=u[0],P=u.pop();if(u.length){u[0]=P;let b=0;for(;;){let M=b*2+1,I=M+1,U=b;if(M<u.length&&u[M][0]<u[U][0]&&(U=M),I<u.length&&u[I][0]<u[U][0]&&(U=I),U===b)break;[u[U],u[b]]=[u[b],u[U]],b=U}}return E};l[a]=0,c[a]=-1,x(p(a),a);let m=!1,y=a,_=1e9;for(;u.length;){let E=g()[1];if(h[E])continue;if(h[E]=1,E===o){m=!0;break}let P=(this.cx(E)-i)**2+(this.cz(E)-n)**2;P<_&&(_=P,y=E);let b=E%s,M=Math.floor(E/s);for(let I=-1;I<=1;I++)for(let U=-1;U<=1;U++){if(!U&&!I)continue;let Y=b+U,L=M+I;if(Y<0||L<0||Y>=s||L>=s)continue;let N=L*s+Y;if(h[N]||!this.can(E,N)||U&&I&&(!this.can(E,M*s+Y)||!this.can(E,L*s+b)))continue;let k=l[E]+(U&&I?1.414:1)*(this.water[N]?1.8:1)+Math.max(0,this.h[N]-this.h[E])*.3;k<l[N]&&(l[N]=k,c[N]=E,x(k+p(N),N))}}if(!m){if(y===a)return null;o=y}let v=[];for(let E=o;E!==-1;E=c[E])v.push(E);v.reverse();let T=[],S=0;for(;S<v.length-1;){let E=Math.min(v.length-1,S+60);for(;E>S+1&&!this.los(v[S],v[E]);)E--;T.push({x:this.cx(v[E]),z:this.cz(v[E])}),S=E}return m&&this.ok[this.idx(i,n)]&&T.length&&(T[T.length-1]={x:i,z:n}),T}};var te=r=>document.getElementById(r);var ps=[{name:"Cl\xE1sico",need:0,helmet:16761888,vest:5227511,band:15859563},{name:"E\xF3lico",need:2,helmet:16053492,vest:8378562,band:16777215},{name:"Hidro",need:4,helmet:5227511,vest:2777008,band:12577275},{name:"Solar",need:6,helmet:16747050,vest:16765503,band:16774064},{name:"Biomasa",need:8,helmet:5748826,vest:10119743,band:14283419},{name:"Guardi\xE1n",need:10,helmet:15073406,vest:6958225,band:3068870}],Ln=[[-39.4,44,0,"la fuente de la Plaza Matriz","La red el\xE9ctrica del Uruguay trabaja a 50 Hz: la corriente va y viene 50 veces por segundo, y todas las centrales tienen que ir al mismo comp\xE1s."],[-58,97,0,"la punta del muelle","El carpincho es el roedor m\xE1s grande del mundo y un gran nadador. Por eso Capi cruza r\xEDos y embalses sin problema."],[12,-48,0,"el techo de la sala de m\xE1quinas","Salto Grande, sobre el r\xEDo Uruguay, es una represa binacional: la comparten Uruguay y Argentina, y tiene 14 turbinas."],[0,-78,.4,"el medio del embalse","Sobre el r\xEDo Negro hay tres represas en cadena: Rinc\xF3n del Bonete, Baygorria y Palmar. El agua que turbina una la vuelve a aprovechar la siguiente."],[86.5,-15.5,0,"la cima de una cuchilla","La potencia del viento crece con el cubo de su velocidad: si sopla el doble de r\xE1pido, trae ocho veces m\xE1s energ\xEDa. Por eso los parques e\xF3licos se instalan donde el viento es fuerte y parejo."],[39.3,30.4,0,"la sombra del omb\xFA de Don Mateo","El tero es un s\xEDmbolo del Uruguay: defiende su nido a los gritos, y hasta la selecci\xF3n de rugby se llama Los Teros."],[-66.5,-68,0,"el pasillo entre las matrices solares","Un panel con seguidor gira durante el d\xEDa para mirar siempre al sol. As\xED produce m\xE1s energ\xEDa que uno fijo."],[-43,-79.4,0,"el fondo del banco de bater\xEDas","LFP quiere decir litio-ferrofosfato: un tipo de bater\xEDa de litio muy segura, que aguanta miles de cargas y descargas. Por eso se usa para guardar energ\xEDa de la red."],[93.15,40.75,0,"el monte de eucaliptos","En Uruguay la biomasa para generar electricidad sale de residuos forestales, del licor negro de las plantas de celulosa y de la c\xE1scara de arroz, entre otros."],[-46,-17,0,"lo m\xE1s alto del puente","El ceibo, de flores rojas, es la flor nacional del Uruguay. Crece a orillas de r\xEDos y arroyos, como los que se ven desde este puente."]],Pa=class{constructor(t){this.g=t,this.got=new Set,this.outfit=0,this.open=null,this.t=0,this.factT=0,this.fading=!1;let e=t.world,i=new we({color:16769126,fog:!1}),n=new cs(.42,0);this.sparks=Ln.map(([s,a,o,l,c],h)=>{let u=new ie,d=new yt(n,i),f=new yt(n,i);d.scale.set(.55,1.5,.55),f.scale.set(1.5,.55,.55),u.add(d,f);let p=new we({color:16774056,fog:!1,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1});for(let g of[d,f]){let m=new yt(n,p);m.scale.copy(g.scale),m.renderOrder=30,u.add(m)}let x=Math.max(e.groundAt(s,a),a<-56&&e.terrainAt(s,a)<Wi?Wi:0)+1.5+o;return u.position.set(s,x,a),t.scene.add(u),{i:h,x:s,y:x,z:a,place:l,text:c,group:u,ghost:p}}),te("bWard").onclick=()=>this.toggleWardrobe(),te("wClose").onclick=()=>this.close(),te("tvClose").onclick=()=>this.close(),te("fact").addEventListener("click",()=>{this.factT=.01}),te("dpName").addEventListener("keydown",s=>{s.key==="Enter"&&te("dGo").click()}),this.refresh()}data(){return{sparks:[...this.got],outfit:this.outfit}}reset(){this.got.clear(),this.setOutfit(0),this.refresh()}restore(t){this.got=new Set((t&&Array.isArray(t.sparks)?t.sparks:[]).filter(i=>i>=0&&i<Ln.length));let e=t&&ps[t.outfit]&&ps[t.outfit].need<=this.got.size?t.outfit:0;this.setOutfit(e),this.refresh()}refresh(){this.sparks.forEach(t=>{t.group.visible=!this.got.has(t.i)}),te("sparkCount").textContent=`Chispas de saber: ${this.got.size}/${Ln.length}`}setOutfit(t){this.outfit=t,this.g.capi.setOutfit(ps[t])}colors(){let t=ps[this.outfit],e=i=>"#"+i.toString(16).padStart(6,"0");return{helmet:e(t.helmet),vest:e(t.vest),band:e(t.band)}}close(){this.open!=="diploma"&&(this.open&&te(this.open).classList.add("hidden"),this.open=null)}fact(t,e,i=11){te("factT").textContent=t,te("factX").textContent=e,te("fact").classList.add("on"),this.factT=i}collect(t){let e=this.g;this.got.add(t.i),t.group.visible=!1;let i=this.got.size;e.fx.sparks(t.x,t.y,t.z,34,16769126),e.audio.ok(),[84,88,91,96].forEach((s,a)=>e.audio.tone(440*Math.pow(2,(s-69)/12),.14,"triangle",.08,.08+a*.07));let n=ps.find(s=>s.need===i&&s.need>0);this.fact(`Chispa de saber ${i} de ${Ln.length}`,t.text+(n?`  \xB7  \xA1Nuevo atuendo para Capi: ${n.name}! Abr\xED el vestuario con la tecla V.`:""),n?14:11),i===Ln.length&&e.ui.toast("\xA1TODAS LAS CHISPAS!","Encontraste los 10 datos escondidos",4),this.refresh(),e.missions.save()}hint(){let t=this.sparks.filter(e=>!this.got.has(e.i));return t.length?"Pista: busc\xE1 una chispa en "+t[0].place+".":"Ya encontraste todas las chispas."}toggleWardrobe(){if(this.open==="wardrobe")return this.close();this.g.locked||(this.open="wardrobe",te("wardrobe").classList.remove("hidden"),this.g.audio.click(),this.drawWardrobe())}drawWardrobe(){let t=te("wList"),e=i=>"#"+i.toString(16).padStart(6,"0");t.textContent="",ps.forEach((i,n)=>{let s=this.got.size>=i.need,a=document.createElement("button");a.type="button",a.className="wItem"+(n===this.outfit?" on":""),a.disabled=!s,a.innerHTML=`<span class="sw"><i style="background:${e(i.helmet)}"></i><i style="background:${e(i.vest)}"></i><i style="background:${e(i.band)}"></i></span><b>${i.name}</b><em>${s?n===this.outfit?"puesto":"disponible":`con ${i.need} chispas`}</em>`,a.onclick=()=>{this.setOutfit(n),this.g.audio.ok(),this.g.missions.save(),this.drawWardrobe()},t.appendChild(a)}),te("wHint").textContent=`Ten\xE9s ${this.got.size} de ${Ln.length} chispas. `+this.hint()}openTravel(t){if(this.g.locked)return;this.open="travel",this.from=t,te("travel").classList.remove("hidden"),this.g.audio.click();let e=te("tvList");e.textContent="",rt.stops.forEach((i,n)=>{let s=document.createElement("button");s.type="button",s.className="btn ghost",s.disabled=n===t,s.innerHTML=`<kbd>${n+1}</kbd> ${i[2]}`+(n===t?" \xB7 est\xE1s ac\xE1":""),s.onclick=()=>this.travel(n),e.appendChild(s)})}travel(t){if(t===this.from||this.fading)return;let e=this.g,i=rt.stops[t];this.close(),this.fading=!0,te("fade").classList.add("on"),te("fadeTxt").textContent="En \xF3mnibus el\xE9ctrico hacia "+i[2]+"\u2026",e.audio.tone(392,.25,"square",.08),e.audio.tone(494,.3,"square",.08,.22),e.audio.power(),setTimeout(()=>{e.capi.teleport(i[0]+1.6,i[1]+1.6),e.capi.heading=0,e.cam.target.set(i[0],e.capi.pos.y+1.5,i[1]),e.cam.inspect=null,setTimeout(()=>{te("fade").classList.remove("on"),this.fading=!1,e.ui.note("Llegaste a "+i[2]+". Viaje sin humo: este \xF3mnibus anda con electricidad renovable.",4.5)},450)},650)}key(t){if(this.open==="travel"){let e={Digit1:0,Digit2:1,Digit3:2,Digit4:3,Digit5:4,Digit6:5,Numpad1:0,Numpad2:1,Numpad3:2,Numpad4:3,Numpad5:4,Numpad6:5}[t];e!=null&&this.travel(e)}}showDiploma(t){this.open="diploma";let e=te("diploma");e.classList.remove("hidden"),te("dAsk").classList.remove("hidden"),te("dCard").classList.add("hidden");let i=te("dpName");i.value="",setTimeout(()=>{try{i.focus()}catch{}},50),te("dGo").onclick=()=>{let n=i.value.trim().replace(/\s+/g," ").slice(0,40)||"Visitante",s=this.g.missions;te("dWho").textContent=n,te("dWho").classList.toggle("long",n.length>24),te("dStory").textContent=(s.short?"Historia corta":"Historia larga")+` \xB7 ${s.seq.length} misiones`,te("dSparks").textContent=`${this.got.size} de ${Ln.length} chispas de saber`,te("dDate").textContent=new Date().toLocaleDateString("es-UY",{day:"numeric",month:"long",year:"numeric"});let a=this.colors();Sa(te("dCapi").getContext("2d"),"capi",1,!1,a),te("dAsk").classList.add("hidden"),te("dCard").classList.remove("hidden"),this.g.audio.fanfare()},te("dDone").onclick=()=>{e.classList.add("hidden"),this.open=null,this.g.audio.click(),t()}}update(t,e){this.t+=t;let i=this.g.capi.pos;this.factT>0&&(this.factT-=t,this.factT<=0&&te("fact").classList.remove("on"));for(let n of this.sparks){if(this.got.has(n.i))continue;n.group.rotation.y+=t*2.4,n.group.position.y=n.y+Math.sin(this.t*2.6+n.i)*.22,e.fx.glow.sprite(n.x,n.group.position.y,n.z,3.4,16769126,.55+.25*Math.sin(this.t*5+n.i));let s=Math.hypot(i.x-n.x,i.z-n.z);n.ghost.opacity=.6*(1-Se(10,20,s)),e.play&&s<1.9&&Math.abs(i.y+1.2-n.y)<3.6&&this.collect(n)}}};var he=r=>document.getElementById(r),du=40,Nl=class{constructor(){let t=he("gl"),e=this.renderer=new Ls({canvas:t,antialias:!0,stencil:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),e.shadowMap.enabled=!0,e.localClippingEnabled=!0,e.shadowMap.type=cl,this.scene=new kr,this.camera=new We(du,1,1,2200),this.grid=new ca,this.audio=new Ma,this.fx=new ya(this.scene);let i=this.world=new ua(this.scene,e),n=he("logoLargo");n&&n.naturalWidth&&(i.logoTex=ai(720,200,o=>{o.fillStyle="#0f2140",o.fillRect(0,0,720,200),o.strokeStyle="#ffc93c",o.lineWidth=10,o.strokeRect(5,5,710,190);let l=Math.min(640/n.naturalWidth,150/n.naturalHeight),c=n.naturalWidth*l,h=n.naturalHeight*l;o.drawImage(n,(720-c)/2,(200-h)/2,c,h)}));let s=he("logoIso");s&&s.naturalWidth&&(i.isoTex=ai(256,256,o=>{o.clearRect(0,0,256,256);let l=Math.min(250/s.naturalWidth,250/s.naturalHeight),c=s.naturalWidth*l,h=s.naturalHeight*l;o.drawImage(s,(256-c)/2,(256-h)/2,c,h)})),su(i),Qh(i),tu(i),eu(i),iu(i),nu(i),ru(i),au(i),ou(i),i.finalize(),this.capi=new _a(this.scene,i,this.fx,this.audio),this.actors=new ba(i,this.scene),this.capi.nav=new Ca(i),this.capiLight=new Qr(16773320,0,22,1.6),this.scene.add(this.capiLight);let a=this.ring=new yt(new Jr(.55,.8,20),new we({color:16765503,transparent:!0,opacity:.9,depthWrite:!1,fog:!1}));a.rotation.x=-Math.PI/2,a.visible=!1,a.renderOrder=9,this.scene.add(a),this.xray=new we({color:16763196,transparent:!0,opacity:.6,depthFunc:hl,depthWrite:!1,fog:!1,stencilWrite:!0,stencilRef:1,stencilFunc:Uh,stencilZPass:na}),this.ui=new Ea(this),this.mg=new Aa(this.audio),this.missions=new Ra(this),this.extras=new Pa(this),this.mode="title",this.panel=!1,this.help=!1,this.keys={},this.jump=!1,this.eUsed=!1,this.cand=null,this.time=0,this.cam={yaw:.5,yawT:.5,dist:150,distT:150,target:new C(-14,3,14),inspect:null,inspectT:0},this.ptr=new Map,this.drag=null,this.autoQuality=!0,this.quality=0,this.ema=.016,this.qT=0,this.bind(),this.resize(),this.missions.preset(0),this.grid.step(0),this.grid.fossil=this.grid.out.demand-this.grid.out.ren,this.grid.step(0),he("bShort").onclick=()=>this.play("corta",0),he("bLong").onclick=()=>this.play("larga",0),he("bCont").onclick=()=>{this.saved&&this.play(this.saved.mode,this.saved.phase,this.saved)},he("bCred").onclick=()=>this.showCredits(null),this.refreshTitle(),this.last=performance.now(),requestAnimationFrame(o=>this.frame(o))}refreshTitle(){let t=this.saved=this.missions.load(),e=he("bCont");if(he("bShort").disabled=!1,he("bLong").disabled=!1,e.classList.toggle("hidden",!t||t.phase===0),t){let i=t.mode==="corta"?5:6;e.innerHTML="Continuar<small>"+(t.phase>=i?"modo libre":`historia ${t.mode} \xB7 misi\xF3n ${t.phase+1} de ${i}`)+"</small>"}he("load").textContent="Teclado y rat\xF3n \xB7 tambi\xE9n funciona con pantalla t\xE1ctil"}play(t,e,i){i?this.extras.restore(i):this.extras.reset(),this.audio.start(),this.mode="play",he("title").classList.add("hidden"),this.ui.show(),this.cam.distT=56,this.cam.yawT=.35,this.capi.teleport(rt.startCapi[0],rt.startCapi[1]),this.capi.heading=Math.PI,this.missions.start(t,e,!0)}startCine(){let t=this.capi;this.cine=!0,this.ui.hide(),document.body.classList.add("cine"),this.panel&&this.togglePanel(!1),t.teleport(rt.stage[0],rt.stage[1]),t.heading=0,this.cam.inspect=null,this.cineYaw=Math.round(this.cam.yaw/(Math.PI*2))*Math.PI*2,this.cam.yawT=this.cam.yaw=this.cineYaw+.2,this.cam.dist=9.5,this.cam.cineK=1,this.cam.cut=0,this.cam.target.set(t.pos.x,t.pos.y+1.95,t.pos.z)}endCine(){this.cine=!1,document.body.classList.remove("cine"),this.mode==="play"&&this.ui.show(),this.cam.distT=46}showCredits(t){he("credits").classList.remove("hidden"),he("crClose").textContent=t?"Seguir en modo libre":"Volver",he("crClose").onclick=()=>{he("credits").classList.add("hidden"),this.audio.click(),t&&t()}}kiosk(t){let e=this.kioskCfg;if(!e||this.mode==="title"){this.lastInput=t;return}let i=(t-this.lastInput)/1e3,n=Math.ceil(e.idle-i);n<=0?(this.missions.forget(),this.toTitle(),this.lastInput=t):n<=e.warn&&this.ui.note(`\xBFSegu\xEDs ah\xED? El juego vuelve al inicio en ${n} s. Mov\xE9 el rat\xF3n o toc\xE1 una tecla para seguir.`,1.2)}toTitle(){this.toggleHelp(!1),this.panel&&this.togglePanel(!1),this.mg.active&&this.mg.cancel(),this.extras.open=null,["wardrobe","travel","diploma"].forEach(t=>he(t).classList.add("hidden")),this.ui.dlg=null,he("dialog").classList.add("hidden"),this.ui.hide(),this.mode="title",he("title").classList.remove("hidden"),this.refreshTitle(),this.cine&&this.endCine(),he("credits").classList.add("hidden"),this.missions.active=!1,this.missions.free=!1,this.missions.m5=null,this.missions.fw=0,this.cam.distT=150,this.cam.inspect=null,this.cam.target.set(-14,3,14),this.keys={}}get locked(){return this.mode!=="play"||!!this.ui.dlg||!!this.mg.active||this.panel||this.help||!!this.cine||!!this.extras.open||this.extras.fading}togglePanel(t){this.mode!=="play"||this.mg.active||this.ui.dlg||(this.panel=t??!this.panel,this.panel?this.ui.openPanel(this.missions.free):this.ui.closePanel(),this.audio.click())}toggleHelp(t){this.help=t,he("help").classList.toggle("hidden",!t)}toggleMute(){this.audio.setMuted(!this.audio.muted),he("bMute").textContent="Sonido: "+(this.audio.muted?"no":"s\xED")}minigame(t,e,i){this.capi.goto=null,this.mg.start(t,e,n=>{n&&i()})}inspect(t){let e=t==="terminal"?{x:rt.terminal[0],z:rt.terminal[1]+6}:Hs.find(i=>i.id===t);e&&(this.panel&&this.togglePanel(!1),this.cam.inspect=new C(e.x,this.world.groundAt(e.x,e.z)+2,e.z),this.cam.inspectT=6.5)}interact(t){let e=this.world.inter[t];!e||e.state==="locked"||(this.capi.goto=null,this.face=Math.atan2(e.x-this.capi.pos.x,e.z-this.capi.pos.z),this.missions.interact(t))}bind(){let t=he("gl"),e=window.CAPI_KIOSCO;if(this.kioskCfg=e?{idle:Math.max(30,+e.idle||180),warn:Math.max(5,+e.warn||30)}:null,this.lastInput=performance.now(),this.kioskCfg){this.missions.forget();for(let s of["keydown","pointerdown","pointermove","wheel","touchstart"])window.addEventListener(s,()=>{this.lastInput=performance.now()},{passive:!0,capture:!0});window.addEventListener("contextmenu",s=>s.preventDefault())}window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",s=>{let a=s.code;if(!(s.target&&s.target.tagName==="INPUT"&&s.target.type==="text")){if(["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(a)&&s.preventDefault(),this.mode==="title"){a==="Enter"&&!he("bLong").disabled&&he("credits").classList.contains("hidden")&&(this.saved&&this.saved.phase>0?this.play(this.saved.mode,this.saved.phase,this.saved):this.play("larga",0));return}if(a==="Escape"){this.extras.open?this.extras.close():this.mg.active?this.mg.cancel():this.panel?this.togglePanel(!1):this.help&&this.toggleHelp(!1);return}if(a==="KeyM"&&!s.repeat&&this.toggleMute(),this.extras.open){s.repeat||(a==="KeyV"?this.extras.close():this.extras.key(a));return}if(a==="KeyV"&&!s.repeat&&!this.locked){this.extras.toggleWardrobe();return}if(this.mg.active){s.repeat||this.mg.key(a,!0);return}if(a==="Tab"){!s.repeat&&!this.cine&&this.togglePanel();return}if(this.ui.dlg){!s.repeat&&(a==="KeyE"||a==="Space"||a==="Enter"||a==="KeyF")&&this.ui.advance();return}if(!(this.panel||this.help)&&!s.repeat&&(this.keys[a]=!0,a==="Space"&&(this.jump=!0),(a==="KeyE"||a==="KeyF"||a==="Enter")&&this.cand&&(a==="KeyE"&&(this.eUsed=!0),this.interact(this.cand.id)),s.shiftKey&&(a==="KeyQ"||a==="KeyE"&&!this.eUsed))){let o=Math.PI/4;this.cam.yawT=(a==="KeyQ"?Math.floor(this.cam.yawT/o+.001)+1:Math.ceil(this.cam.yawT/o-.001)-1)*o}}}),window.addEventListener("keyup",s=>{this.keys[s.code]=!1,s.code==="KeyE"&&(this.eUsed=!1),this.mg.active&&this.mg.key(s.code,!1)}),window.addEventListener("blur",()=>{this.keys={}}),t.addEventListener("contextmenu",s=>s.preventDefault()),t.addEventListener("pointerdown",s=>{t.setPointerCapture(s.pointerId),this.ptr.set(s.pointerId,{x:s.clientX,y:s.clientY}),this.drag={x:s.clientX,y:s.clientY,sx:s.clientX,sy:s.clientY,moved:0,right:s.button===2,touch:s.pointerType==="touch",pinch:this.ptr.size>1?this.pinchDist():0}}),t.addEventListener("pointermove",s=>{if(!this.ptr.has(s.pointerId)||!this.drag)return;let a=this.drag,o=this.ptr.get(s.pointerId),l=s.clientX-o.x;if(o.x=s.clientX,o.y=s.clientY,a.moved=Math.max(a.moved,Math.hypot(s.clientX-a.sx,s.clientY-a.sy)),this.mode==="play")if(this.ptr.size>1){let c=this.pinchDist();a.pinch>0&&(this.cam.distT=ht(this.cam.distT*a.pinch/c,20,195)),a.pinch=c,a.moved=99}else(a.right||a.touch&&a.moved>12)&&(this.cam.yawT-=l*.007)});let i=s=>{let a=this.drag;this.ptr.delete(s.pointerId),a&&this.ptr.size===0&&(!a.right&&a.moved<7&&s.type==="pointerup"&&this.click(s.clientX,s.clientY),this.drag=null)};t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i),t.addEventListener("wheel",s=>{s.preventDefault(),this.mode==="play"&&!this.panel&&(this.cam.distT=ht(this.cam.distT*Math.exp(s.deltaY*.0011),20,195))},{passive:!1});let n=(s,a)=>{let o=he(s),l=null,c=()=>{clearInterval(l),l=null};o.addEventListener("pointerdown",()=>{a(),l=setInterval(a,60)}),["pointerup","pointerleave","pointercancel"].forEach(h=>o.addEventListener(h,c))};n("cL",()=>{this.cam.yawT+=.09}),n("cR",()=>{this.cam.yawT-=.09}),n("cIn",()=>{this.cam.distT=ht(this.cam.distT*.94,20,195)}),n("cOut",()=>{this.cam.distT=ht(this.cam.distT*1.06,20,195)})}pinchDist(){let t=[...this.ptr.values()];return t.length>1?Math.hypot(t[0].x-t[1].x,t[0].y-t[1].y):0}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.fx.setScale(e*this.renderer.getPixelRatio()/(2*Math.tan(du*Math.PI/360)))}click(t,e){if(this.ui.dlg)return this.ui.advance();if(this.locked)return;let i=this.world,n=new C,s=window.innerWidth,a=window.innerHeight,o=null,l=56;for(let p of i.interList)if(p.state!=="locked")for(let x of[1.3,p.baseY-p.y]){if(n.set(p.x,p.y+x,p.z).project(this.camera),n.z>1)continue;let g=Math.hypot((n.x*.5+.5)*s-t,(-n.y*.5+.5)*a-e);g<l&&(l=g,o=p)}let c=this.capi;if(o){if(Math.hypot(o.x-c.pos.x,o.z-c.pos.z)<o.r)return this.interact(o.id);c.navigate(o.x,o.z,o.r-.9,()=>this.interact(o.id)),this.ringAt(o.x,o.z);return}let h=this.camera.position,u=n.set(t/s*2-1,-(e/a)*2+1,.5).unproject(this.camera).sub(h).normalize(),d=2,f=null;for(let p=2;p<700;p+=1.2){let x=h.x+u.x*p,g=h.y+u.y*p,m=h.z+u.z*p;if(x<$.minX||x>$.maxX||m<$.minZ||m>$.maxZ){if(d=p,g<-4)break;continue}let y=Math.max(i.groundAt(x,m,g+1.3),i.waterAt(x,m)-.3);if(g<=y){let _=d,v=p;for(let T=0;T<7;T++){let S=(_+v)/2,E=h.x+u.x*S,P=h.y+u.y*S,b=h.z+u.z*S;P<=Math.max(i.groundAt(E,b,P+1.3),i.waterAt(E,b)-.3)?v=S:_=S}f={x:h.x+u.x*v,z:h.z+u.z*v};break}d=p}f&&(c.navigate(f.x,f.z,.6),this.ringAt(f.x,f.z),this.audio.click())}ringAt(t,e){let i=this.world;this.ring.position.set(t,Math.max(i.groundAt(t,e),i.waterAt(t,e))+.14,e),this.ring.visible=!0}frame(t){requestAnimationFrame(P=>this.frame(P)),this.kiosk(t);let e=(t-this.last)/1e3,i=Math.min(.05,Math.max(.001,e));if(this.last=t,this.time+=i,this.mode==="play"&&this.autoQuality&&e<.5&&(this.ema=ct(this.ema,e,.05),this.qT+=e,this.qT>3&&this.ema>.036&&this.quality<3)){this.qT=0,this.quality++;let P=this.world.sun;this.quality===1?(this.renderer.setPixelRatio(1),this.resize()):this.quality===2?(P.shadow.mapSize.set(1024,1024),P.shadow.map&&(P.shadow.map.dispose(),P.shadow.map=null)):P.castShadow=!1}let n=this.keys,s=this.cam,a=this.capi,o=this.grid,l=this.world,c=this.mode==="play",h=(n.KeyD||n.ArrowRight?1:0)-(n.KeyA||n.ArrowLeft?1:0),u=(n.KeyW||n.ArrowUp?1:0)-(n.KeyS||n.ArrowDown?1:0);c&&!this.locked&&(n.KeyQ&&!n.ShiftLeft&&!n.ShiftRight&&(s.yawT+=1.9*i),n.KeyE&&!this.eUsed&&!n.ShiftLeft&&!n.ShiftRight&&(s.yawT-=1.9*i)),(h||u)&&(s.inspect=null,this.face=null);let d={mx:this.locked?0:h,mz:this.locked?0:u,yaw:s.yaw,jump:this.jump&&!this.locked,locked:this.locked,working:!!this.mg.active,talking:this.cine&&this.ui.talking==="capi",face:this.cine?0:this.mg.active||this.ui.dlg||a.busy>0?this.face:null};if(this.jump=!1,c?a.update(i,d):a.update(i,{mx:0,mz:0,yaw:0,jump:!1,locked:!0}),o.step(i),c&&this.missions.update(i),this.mg.update(i),this.cand=null,c&&!this.locked){let P=1e9;for(let b of l.interList){if(b.state==="locked")continue;let M=Math.hypot(b.x-a.pos.x,b.z-a.pos.z);M<b.r&&M<P&&Math.abs(b.y-a.pos.y)<4.5&&(P=M,this.cand=b)}}this.ui.prompt(this.cand?this.cand.label:null),this.ring.visible=this.ring.visible&&!!a.goto,this.ring.visible&&this.ring.scale.setScalar(1+.25*Math.sin(this.time*9)),c||(s.yawT+=i*.06),s.inspectT-=i,s.inspectT<=0&&(s.inspect=null),this.cine&&(s.yawT=this.cineYaw+Math.sin(this.time*.22)*.24),s.cineK=Gt(s.cineK||0,this.cine?1:0,2.2,i),s.yaw=Gt(s.yaw,s.yawT,this.cine?2:9,i),s.dist=Gt(s.dist,this.cine?7.4:s.inspect?95:s.distT,this.cine?2.2:4,i);let f=this.cine?new C(a.pos.x,a.pos.y+1.95,a.pos.z):s.inspect?s.inspect:c?new C(a.pos.x+a.vel.x*.4,a.pos.y+1.5,a.pos.z+a.vel.z*.4):s.target;s.target.x=Gt(s.target.x,f.x,s.inspect?2.5:6,i),s.target.y=Gt(s.target.y,f.y,4,i),s.target.z=Gt(s.target.z,f.z,s.inspect?2.5:6,i);let p=ht((s.dist-20)/175,0,1),x=(40+5*p)*Math.PI/180,g=c&&!s.inspect&&!this.cine&&l.occluded(a.pos.x+Math.sin(s.yaw)*Math.cos(x)*s.dist,a.pos.y+1.5+Math.sin(x)*s.dist,a.pos.z+Math.cos(s.yaw)*Math.cos(x)*s.dist,a.pos.x,a.pos.y+1.6,a.pos.z);s.cut=Gt(s.cut||0,g?1:0,g?7:3,i),l.setCutaway(s.cut,a.pos,s.yaw);let m=ct(x,-.09,s.cineK);this.camera.position.set(s.target.x+Math.sin(s.yaw)*Math.cos(m)*s.dist,s.target.y+Math.sin(m)*s.dist,s.target.z+Math.cos(s.yaw)*Math.cos(m)*s.dist),this.camera.lookAt(s.target);let y=o.night(),_=o.out.pct,v=l.interList.filter(P=>P.state==="need"),T={grid:o,hour:o.hour,night:y,focus:s.target,cam:this.camera.position,barrios:[_>=33,_>=63,_>=88],fx:this.fx,zoom:s.dist,cine:!!this.cine,capi:a.pos,talking:this.ui.talking,needs:v,busesOn:o.buses,audio:this.audio};l.update(i,T),this.actors.update(i,T),a.setLed(_/100,_>=100),a.lamp.material.emissiveIntensity=.5+y*3,this.cine?(this.capiLight.position.set(a.pos.x,a.pos.y+2.7,a.pos.z+2.6),this.capiLight.intensity=y*120):(this.capiLight.position.set(a.pos.x,a.pos.y+3.2,a.pos.z),this.capiLight.intensity=y*60);for(let P of v)Math.random()<5*i&&this.fx.sparks(P.x+(Math.random()-.5),P.y+1.6,P.z+(Math.random()-.5),3,16756768);this.extras.update(i,{fx:this.fx,play:c&&!this.cine}),this.fx.update(i);let S=(P,b,M)=>ht(1-Math.hypot(a.pos.x-P,a.pos.z-b)/M,0,1);this.audio.update(i,{pct:_,wind:o.wind,windNear:Math.max(.12,S(70,-12,75)),waterNear:Math.max(S(-11,-49,45),a.swimming?.45:0),humNear:Math.max(S(rt.substation[0],rt.substation[1],14),S(rt.windTx[0],rt.windTx[1],14),S(rt.bioSub[0],rt.bioSub[1],14),S(rt.batYard[0],rt.batYard[1],16)),deficit:c&&o.freq<49.5}),c&&this.ui.update(i,{capi:a.pos,heading:a.heading,yaw:s.yaw,inter:l.interList,panel:this.panel,capiTalk:this.ui.talking==="capi",colors:this.extras.colors(),buses:o.buses,sparks:this.extras.sparks.filter(P=>!this.extras.got.has(P.i))});let E=this.renderer;if(E.autoClear=!0,E.shadowMap.autoUpdate=!0,this.camera.layers.set(0),E.render(this.scene,this.camera),c&&!this.cine){E.autoClear=!1,E.shadowMap.autoUpdate=!1,this.camera.layers.set(1),this.scene.overrideMaterial=this.xray;let P=this.scene.background;this.scene.background=null,E.render(this.scene,this.camera),this.scene.background=P,this.scene.overrideMaterial=null,this.camera.layers.set(0)}}};function lx(){try{window.__game=new Nl}catch(r){console.error(r),he("load").textContent="No se pudo iniciar el motor 3D: "+r.message}}var cx=document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1500))]):Promise.resolve(),hx=[...document.images].map(r=>r.decode?r.decode().catch(()=>{}):Promise.resolve());Promise.all([cx,...hx]).then(()=>setTimeout(lx,30));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
