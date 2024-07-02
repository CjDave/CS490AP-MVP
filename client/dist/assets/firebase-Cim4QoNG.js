var xc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(n,e){if(!n)throw Un(e)},Un=function(n){return new Error("Firebase Database ("+fh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Cp=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],a=n[t++],l=n[t++],c=((i&7)<<18|(r&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],a=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|a&63)}}return e.join("")},ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],a=i+1<n.length,l=a?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,f=r>>2,p=(r&3)<<4|l>>4;let m=(l&15)<<2|h>>6,T=h&63;c||(T=64,a||(m=64)),s.push(t[f],t[p],t[m],t[T])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_h(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||h==null||p==null)throw new Ap;const m=r<<2|l>>4;if(s.push(m),h!==64){const T=l<<4&240|h>>2;if(s.push(T),p!==64){const S=h<<6&192|p;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ap extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ph=function(n){const e=_h(n);return ha.encodeByteArray(e,!0)},ji=function(n){return ph(n).replace(/\./g,"")},ko=function(n){try{return ha.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(n){return mh(void 0,n)}function mh(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Sp(t)||(n[t]=mh(n[t],e[t]));return n}function Sp(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=()=>bp().__FIREBASE_DEFAULTS__,Np=()=>{if(typeof process>"u"||typeof xc>"u")return;const n=xc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ko(n[1]);return e&&JSON.parse(e)},da=()=>{try{return Pp()||Np()||kp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Dp=n=>{var e,t;return(t=(e=da())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},fa=n=>{const e=Dp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},gh=()=>{var n;return(n=da())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ji(JSON.stringify(t)),ji(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yh())}function xp(){var n;const e=(n=da())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Op(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vh(){return fh.NODE_ADMIN===!0}function Vp(){return!xp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mp(){try{return typeof indexedDB=="object"}catch{return!1}}function Lp(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="FirebaseError";class cn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Fp,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Th.prototype.create)}}class Th{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?Up(r,s):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new cn(i,l,s)}}function Up(n,e){return n.replace(Bp,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Bp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(n){return JSON.parse(n)}function me(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Ds(ko(r[0])||""),t=Ds(ko(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},qp=function(n){const e=wh(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},jp=function(n){const e=wh(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Sn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Oc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Wi(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Do(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],a=e[i];if(Vc(r)&&Vc(a)){if(!Do(r,a))return!1}else if(r!==a)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Vc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)s[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const m=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4],h,f;for(let p=0;p<80;p++){p<40?p<20?(h=l^r&(a^l),f=1518500249):(h=r^a^l,f=1859775393):p<60?(h=r&a|l&(r|a),f=2400959708):(h=r^a^l,f=3395469782);const m=(i<<5|i>>>27)+h+c+f+s[p]&4294967295;c=l,l=a,a=(r<<30|r>>>2)&4294967295,r=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let a=this.inbuf_;for(;i<t;){if(a===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[a]=e.charCodeAt(i),++a,++i,a===this.blockSize){this.compress_(r),a=0;break}}else for(;i<t;)if(r[a]=e[i],++a,++i,a===this.blockSize){this.compress_(r),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function pa(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,D(s<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(s)-56320;i=65536+(r<<10)+a}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_r=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n){return n&&n._delegate?n._delegate:n}class Jt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new fr;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kp(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&a.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const a=this.instances.get(i);return a&&e(a,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gp(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gp(n){return n===$t?void 0:n}function Kp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const Yp={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Xp=Y.INFO,Jp={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Zp=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Jp[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ma{constructor(e){this.name=e,this._logLevel=Xp,this._logHandler=Zp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const em=(n,e)=>e.some(t=>n instanceof t);let Mc,Lc;function tm(){return Mc||(Mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nm(){return Lc||(Lc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ih=new WeakMap,xo=new WeakMap,Ch=new WeakMap,fo=new WeakMap,ga=new WeakMap;function sm(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",a)},r=()=>{t(bt(n.result)),i()},a=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ih.set(t,n)}).catch(()=>{}),ga.set(e,n),e}function im(n){if(xo.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",a),n.removeEventListener("abort",a)},r=()=>{t(),i()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",a),n.addEventListener("abort",a)});xo.set(n,e)}let Oo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ch.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rm(n){Oo=n(Oo)}function om(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(_o(this),e,...t);return Ch.set(s,e.sort?e.sort():[e]),bt(s)}:nm().includes(n)?function(...e){return n.apply(_o(this),e),bt(Ih.get(this))}:function(...e){return bt(n.apply(_o(this),e))}}function am(n){return typeof n=="function"?om(n):(n instanceof IDBTransaction&&im(n),em(n,tm())?new Proxy(n,Oo):n)}function bt(n){if(n instanceof IDBRequest)return sm(n);if(fo.has(n))return fo.get(n);const e=am(n);return e!==n&&(fo.set(n,e),ga.set(e,n)),e}const _o=n=>ga.get(n);function lm(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const a=indexedDB.open(n,e),l=bt(a);return s&&a.addEventListener("upgradeneeded",c=>{s(bt(a.result),c.oldVersion,c.newVersion,bt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const cm=["get","getKey","getAll","getAllKeys","count"],um=["put","add","delete","clear"],po=new Map;function Fc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(po.get(e))return po.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=um.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||cm.includes(t)))return;const r=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return po.set(e,r),r}rm(n=>({...n,get:(e,t,s)=>Fc(e,t)||n.get(e,t,s),has:(e,t)=>!!Fc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dm(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function dm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vo="@firebase/app",Uc="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new ma("@firebase/app"),fm="@firebase/app-compat",_m="@firebase/analytics-compat",pm="@firebase/analytics",mm="@firebase/app-check-compat",gm="@firebase/app-check",ym="@firebase/auth",Em="@firebase/auth-compat",vm="@firebase/database",Tm="@firebase/database-compat",wm="@firebase/functions",Im="@firebase/functions-compat",Cm="@firebase/installations",Am="@firebase/installations-compat",Rm="@firebase/messaging",Sm="@firebase/messaging-compat",bm="@firebase/performance",Pm="@firebase/performance-compat",Nm="@firebase/remote-config",km="@firebase/remote-config-compat",Dm="@firebase/storage",xm="@firebase/storage-compat",Om="@firebase/firestore",Vm="@firebase/vertexai-preview",Mm="@firebase/firestore-compat",Lm="firebase",Fm="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="[DEFAULT]",Um={[Vo]:"fire-core",[fm]:"fire-core-compat",[pm]:"fire-analytics",[_m]:"fire-analytics-compat",[gm]:"fire-app-check",[mm]:"fire-app-check-compat",[ym]:"fire-auth",[Em]:"fire-auth-compat",[vm]:"fire-rtdb",[Tm]:"fire-rtdb-compat",[wm]:"fire-fn",[Im]:"fire-fn-compat",[Cm]:"fire-iid",[Am]:"fire-iid-compat",[Rm]:"fire-fcm",[Sm]:"fire-fcm-compat",[bm]:"fire-perf",[Pm]:"fire-perf-compat",[Nm]:"fire-rc",[km]:"fire-rc-compat",[Dm]:"fire-gcs",[xm]:"fire-gcs-compat",[Om]:"fire-fst",[Mm]:"fire-fst-compat",[Vm]:"fire-vertex","fire-js":"fire-js",[Lm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Map,Bm=new Map,Lo=new Map;function Bc(n,e){try{n.container.addComponent(e)}catch(t){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bn(n){const e=n.name;if(Lo.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;Lo.set(e,n);for(const t of zi.values())Bc(t,n);for(const t of Bm.values())Bc(t,n);return!0}function ya(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new Th("app","Firebase",qm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=Fm;function Ah(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Mo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Pt.create("bad-app-name",{appName:String(i)});if(t||(t=gh()),!t)throw Pt.create("no-options");const r=zi.get(i);if(r){if(Do(t,r.options)&&Do(s,r.config))return r;throw Pt.create("duplicate-app",{appName:i})}const a=new Qp(i);for(const c of Lo.values())a.addComponent(c);const l=new jm(t,s,a);return zi.set(i,l),l}function va(n=Mo){const e=zi.get(n);if(!e&&n===Mo&&gh())return Ah();if(!e)throw Pt.create("no-app",{appName:n});return e}function rt(n,e,t){var s;let i=(s=Um[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(l.join(" "));return}bn(new Jt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="firebase-heartbeat-database",zm=1,xs="firebase-heartbeat-store";let mo=null;function Rh(){return mo||(mo=lm(Wm,zm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pt.create("idb-open",{originalErrorMessage:n.message})})),mo}async function $m(n){try{const t=(await Rh()).transaction(xs),s=await t.objectStore(xs).get(Sh(n));return await t.done,s}catch(e){if(e instanceof cn)Zt.warn(e.message);else{const t=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(t.message)}}}async function qc(n,e){try{const s=(await Rh()).transaction(xs,"readwrite");await s.objectStore(xs).put(e,Sh(n)),await s.done}catch(t){if(t instanceof cn)Zt.warn(t.message);else{const s=Pt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Zt.warn(s.message)}}}function Sh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=1024,Gm=30*24*60*60*1e3;class Km{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ym(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Gm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jc(),{heartbeatsToSend:s,unsentEntries:i}=Qm(this._heartbeatsCache.heartbeats),r=ji(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function jc(){return new Date().toISOString().substring(0,10)}function Qm(n,e=Hm){const t=[];let s=n.slice();for(const i of n){const r=t.find(a=>a.agent===i.agent);if(r){if(r.dates.push(i.date),Wc(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Wc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Ym{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mp()?Lp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $m(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return qc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return qc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wc(n){return ji(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(n){bn(new Jt("platform-logger",e=>new hm(e),"PRIVATE")),bn(new Jt("heartbeat",e=>new Km(e),"PRIVATE")),rt(Vo,Uc,n),rt(Vo,Uc,"esm2017"),rt("fire-js","")}Xm("");var Jm="firebase",Zm="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt(Jm,Zm,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="firebasestorage.googleapis.com",Ph="storageBucket",eg=2*60*1e3,tg=10*60*1e3,ng=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends cn{constructor(e,t,s=0){super(go(e),`Firebase Storage: ${t} (${go(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return go(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var oe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(oe||(oe={}));function go(n){return"storage/"+n}function Ta(){const n="An unknown error occurred, please check the error payload for server response.";return new ue(oe.UNKNOWN,n)}function sg(n){return new ue(oe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function ig(n){return new ue(oe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rg(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ue(oe.UNAUTHENTICATED,n)}function og(){return new ue(oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ag(n){return new ue(oe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Nh(){return new ue(oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kh(){return new ue(oe.CANCELED,"User canceled the upload/download.")}function lg(n){return new ue(oe.INVALID_URL,"Invalid URL '"+n+"'.")}function cg(n){return new ue(oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ug(){return new ue(oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ph+"' property when initializing the app?")}function Dh(){return new ue(oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function hg(){return new ue(oe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function dg(){return new ue(oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function fg(n){return new ue(oe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fo(n){return new ue(oe.INVALID_ARGUMENT,n)}function xh(){return new ue(oe.APP_DELETED,"The Firebase app was deleted.")}function _g(n){return new ue(oe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ws(n,e){return new ue(oe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function hs(n){throw new ue(oe.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Ke.makeFromUrl(e,t)}catch{return new Ke(e,"")}if(s.path==="")return s;throw cg(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+i+a,"i"),c={bucket:1,path:3};function h(z){z.path_=decodeURIComponent(z.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${f}/b/${i}/o${m}`,"i"),S={bucket:1,path:3},k=t===bh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,b="([^?#]*)",F=new RegExp(`^https?://${k}/${i}/${b}`,"i"),U=[{regex:l,indices:c,postModify:r},{regex:T,indices:S,postModify:h},{regex:F,indices:{bucket:1,path:2},postModify:h}];for(let z=0;z<U.length;z++){const Se=U[z],ae=Se.regex.exec(e);if(ae){const w=ae[Se.indices.bucket];let g=ae[Se.indices.path];g||(g=""),s=new Ke(w,g),Se.postModify(s);break}}if(s==null)throw lg(e);return s}}class pg{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n,e,t){let s=1,i=null,r=null,a=!1,l=0;function c(){return l===2}let h=!1;function f(...b){h||(h=!0,e.apply(null,b))}function p(b){i=setTimeout(()=>{i=null,n(T,c())},b)}function m(){r&&clearTimeout(r)}function T(b,...F){if(h){m();return}if(b){m(),f.call(null,b,...F);return}if(c()||a){m(),f.call(null,b,...F);return}s<64&&(s*=2);let U;l===1?(l=2,U=0):U=(s+Math.random())*1e3,p(U)}let S=!1;function k(b){S||(S=!0,m(),!h&&(i!==null?(b||(l=2),clearTimeout(i),p(0)):b||(l=1)))}return p(0),r=setTimeout(()=>{a=!0,k(!0)},t),k}function gg(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n){return n!==void 0}function Eg(n){return typeof n=="function"}function vg(n){return typeof n=="object"&&!Array.isArray(n)}function pr(n){return typeof n=="string"||n instanceof String}function zc(n){return wa()&&n instanceof Blob}function wa(){return typeof Blob<"u"}function $c(n,e,t,s){if(s<e)throw Fo(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Fo(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function Oh(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Yt||(Yt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t,s,i,r,a,l,c,h,f,p,m=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,S)=>{this.resolve_=T,this.reject_=S,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Si(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const a=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&r.addUploadProgressListener(a),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(a),this.pendingConnection_=null;const l=r.getErrorCode()===Yt.NO_ERROR,c=r.getStatus();if(!l||Vh(c,this.additionalRetryCodes_)&&this.retry){const f=r.getErrorCode()===Yt.ABORT;s(!1,new Si(!1,null,f));return}const h=this.successCodes_.indexOf(c)!==-1;s(!0,new Si(h,r))})},t=(s,i)=>{const r=this.resolve_,a=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());yg(c)?r(c):r()}catch(c){a(c)}else if(l!==null){const c=Ta();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(i.canceled){const c=this.appDelete_?xh():kh();a(c)}else{const c=Nh();a(c)}};this.canceled_?t(!1,new Si(!1,null,!0)):this.backoffId_=mg(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gg(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Si{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function wg(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Ig(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Cg(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Ag(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Rg(n,e,t,s,i,r,a=!0){const l=Oh(n.urlParams),c=n.url+l,h=Object.assign({},n.headers);return Cg(h,e),wg(h,t),Ig(h,r),Ag(h,s),new Tg(c,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bg(...n){const e=Sg();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(wa())return new Blob(n);throw new ue(oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Pg(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(n){if(typeof atob>"u")throw fg("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class yo{constructor(e,t){this.data=e,this.contentType=t||null}}function kg(n,e){switch(n){case st.RAW:return new yo(Mh(e));case st.BASE64:case st.BASE64URL:return new yo(Lh(n,e));case st.DATA_URL:return new yo(xg(e),Og(e))}throw Ta()}function Mh(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=s,a=n.charCodeAt(++t);s=65536|(r&1023)<<10|a&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Dg(n){let e;try{e=decodeURIComponent(n)}catch{throw ws(st.DATA_URL,"Malformed data URL.")}return Mh(e)}function Lh(n,e){switch(n){case st.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw ws(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case st.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw ws(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Ng(e)}catch(i){throw i.message.includes("polyfill")?i:ws(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}class Fh{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ws(st.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=Vg(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function xg(n){const e=new Fh(n);return e.base64?Lh(st.BASE64,e.rest):Dg(e.rest)}function Og(n){return new Fh(n).contentType}function Vg(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t){let s=0,i="";zc(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(zc(this.data_)){const s=this.data_,i=Pg(s,e,t);return i===null?null:new Rt(i)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Rt(s,!0)}}static getBlob(...e){if(wa()){const t=e.map(s=>s instanceof Rt?s.data_:s);return new Rt(bg.apply(null,t))}else{const t=e.map(a=>pr(a)?kg(st.RAW,a).data:a.data_);let s=0;t.forEach(a=>{s+=a.byteLength});const i=new Uint8Array(s);let r=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)i[r++]=a[l]}),new Rt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(n){let e;try{e=JSON.parse(n)}catch{return null}return vg(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Lg(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function Bh(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(n,e){return e}class Ue{constructor(e,t,s,i){this.server=e,this.local=t||e,this.writable=!!s,this.xform=i||Fg}}let bi=null;function Ug(n){return!pr(n)||n.length<2?n:Bh(n)}function qh(){if(bi)return bi;const n=[];n.push(new Ue("bucket")),n.push(new Ue("generation")),n.push(new Ue("metageneration")),n.push(new Ue("name","fullPath",!0));function e(r,a){return Ug(a)}const t=new Ue("name");t.xform=e,n.push(t);function s(r,a){return a!==void 0?Number(a):a}const i=new Ue("size");return i.xform=s,n.push(i),n.push(new Ue("timeCreated")),n.push(new Ue("updated")),n.push(new Ue("md5Hash",null,!0)),n.push(new Ue("cacheControl",null,!0)),n.push(new Ue("contentDisposition",null,!0)),n.push(new Ue("contentEncoding",null,!0)),n.push(new Ue("contentLanguage",null,!0)),n.push(new Ue("contentType",null,!0)),n.push(new Ue("metadata","customMetadata",!0)),bi=n,bi}function Bg(n,e){function t(){const s=n.bucket,i=n.fullPath,r=new Ke(s,i);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function qg(n,e,t){const s={};s.type="file";const i=t.length;for(let r=0;r<i;r++){const a=t[r];s[a.local]=a.xform(s,e[a.server])}return Bg(s,n),s}function jh(n,e,t){const s=Uh(e);return s===null?null:qg(n,s,t)}function jg(n,e,t,s){const i=Uh(e);if(i===null||!pr(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const a=encodeURIComponent;return r.split(",").map(h=>{const f=n.bucket,p=n.fullPath,m="/b/"+a(f)+"/o/"+a(p),T=Qs(m,t,s),S=Oh({alt:"media",token:h});return T+S})[0]}function Wh(n,e){const t={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class Bn{constructor(e,t,s,i){this.url=e,this.method=t,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n){if(!n)throw Ta()}function Ia(n,e){function t(s,i){const r=jh(n,i,e);return pt(r!==null),r}return t}function Wg(n,e){function t(s,i){const r=jh(n,i,e);return pt(r!==null),jg(r,i,n.host,n._protocol)}return t}function Ys(n){function e(t,s){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=og():i=rg():t.getStatus()===402?i=ig(n.bucket):t.getStatus()===403?i=ag(n.path):i=s,i.status=t.getStatus(),i.serverResponse=s.serverResponse,i}return e}function zh(n){const e=Ys(n);function t(s,i){let r=e(s,i);return s.getStatus()===404&&(r=sg(n.path)),r.serverResponse=i.serverResponse,r}return t}function zg(n,e,t){const s=e.fullServerUrl(),i=Qs(s,n.host,n._protocol),r="GET",a=n.maxOperationRetryTime,l=new Bn(i,r,Ia(n,t),a);return l.errorHandler=zh(e),l}function $g(n,e,t){const s=e.fullServerUrl(),i=Qs(s,n.host,n._protocol),r="GET",a=n.maxOperationRetryTime,l=new Bn(i,r,Wg(n,t),a);return l.errorHandler=zh(e),l}function Hg(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function $h(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=Hg(null,e)),s}function Gg(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let U="";for(let z=0;z<2;z++)U=U+Math.random().toString().slice(2);return U}const c=l();a["Content-Type"]="multipart/related; boundary="+c;const h=$h(e,s,i),f=Wh(h,t),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+h.contentType+`\r
\r
`,m=`\r
--`+c+"--",T=Rt.getBlob(p,s,m);if(T===null)throw Dh();const S={name:h.fullPath},k=Qs(r,n.host,n._protocol),b="POST",F=n.maxUploadRetryTime,j=new Bn(k,b,Ia(n,t),F);return j.urlParams=S,j.headers=a,j.body=T.uploadData(),j.errorHandler=Ys(e),j}class $i{constructor(e,t,s,i){this.current=e,this.total=t,this.finalized=!!s,this.metadata=i||null}}function Ca(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{pt(!1)}return pt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function Kg(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),a=$h(e,s,i),l={name:a.fullPath},c=Qs(r,n.host,n._protocol),h="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},p=Wh(a,t),m=n.maxUploadRetryTime;function T(k){Ca(k);let b;try{b=k.getResponseHeader("X-Goog-Upload-URL")}catch{pt(!1)}return pt(pr(b)),b}const S=new Bn(c,h,T,m);return S.urlParams=l,S.headers=f,S.body=p,S.errorHandler=Ys(e),S}function Qg(n,e,t,s){const i={"X-Goog-Upload-Command":"query"};function r(h){const f=Ca(h,["active","final"]);let p=null;try{p=h.getResponseHeader("X-Goog-Upload-Size-Received")}catch{pt(!1)}p||pt(!1);const m=Number(p);return pt(!isNaN(m)),new $i(m,s.size(),f==="final")}const a="POST",l=n.maxUploadRetryTime,c=new Bn(t,a,r,l);return c.headers=i,c.errorHandler=Ys(e),c}const Hc=256*1024;function Yg(n,e,t,s,i,r,a,l){const c=new $i(0,0);if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw hg();const h=c.total-c.current;let f=h;i>0&&(f=Math.min(f,i));const p=c.current,m=p+f;let T="";f===0?T="finalize":h===f?T="upload, finalize":T="upload";const S={"X-Goog-Upload-Command":T,"X-Goog-Upload-Offset":`${c.current}`},k=s.slice(p,m);if(k===null)throw Dh();function b(z,Se){const ae=Ca(z,["active","final"]),w=c.current+f,g=s.size();let E;return ae==="final"?E=Ia(e,r)(z,Se):E=null,new $i(w,g,ae==="final",E)}const F="POST",j=e.maxUploadRetryTime,U=new Bn(t,F,b,j);return U.headers=S,U.body=k.uploadData(),U.progressCallback=l||null,U.errorHandler=Ys(n),U}const je={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Eo(n){switch(n){case"running":case"pausing":case"canceling":return je.RUNNING;case"paused":return je.PAUSED;case"success":return je.SUCCESS;case"canceled":return je.CANCELED;case"error":return je.ERROR;default:return je.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,t,s){if(Eg(e)||t!=null||s!=null)this.next=e,this.error=t??void 0,this.complete=s??void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class Jg{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,i){if(this.sent_)throw hs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw hs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw hs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw hs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw hs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Zg extends Jg{initXhr(){this.xhr_.responseType="text"}}function En(){return new Zg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=qh(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(oe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(Vh(i.status,[]))if(r)i=Nh();else{this.sleepTime=Math.max(this.sleepTime*2,ng),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(oe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=Kg(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,En,e,t);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const i=Qg(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,En,t,s);this._request=r,r.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Hc*this._chunkMultiplier,t=new $i(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let a;try{a=Yg(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const l=this._ref.storage._makeRequest(a,En,i,r,!1);this._request=l,l.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Hc*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=zg(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,En,e,t);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=Gg(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,En,e,t);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=kh(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Eo(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,i){const r=new Xg(t||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Eo(this._state)){case je.SUCCESS:gn(this._resolve.bind(null,this.snapshot))();break;case je.CANCELED:case je.ERROR:const t=this._reject;gn(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Eo(this._state)){case je.RUNNING:case je.PAUSED:e.next&&gn(e.next.bind(e,this.snapshot))();break;case je.SUCCESS:e.complete&&gn(e.complete.bind(e))();break;case je.CANCELED:case je.ERROR:e.error&&gn(e.error.bind(e,this._error))();break;default:e.error&&gn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this._service=e,t instanceof Ke?this._location=t:this._location=Ke.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new en(e,t)}get root(){const e=new Ke(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bh(this._location.path)}get storage(){return this._service}get parent(){const e=Mg(this._location.path);if(e===null)return null;const t=new Ke(this._location.bucket,e);return new en(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw _g(e)}}function ty(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new ey(n,new Rt(e),t)}function ny(n){n._throwIfRoot("getDownloadURL");const e=$g(n.storage,n._location,qh());return n.storage.makeRequestWithTokens(e,En).then(t=>{if(t===null)throw dg();return t})}function sy(n,e){const t=Lg(n._location.path,e),s=new Ke(n._location.bucket,t);return new en(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(n){return/^[A-Za-z]+:\/\//.test(n)}function ry(n,e){return new en(n,e)}function Hh(n,e){if(n instanceof Aa){const t=n;if(t._bucket==null)throw ug();const s=new en(t,t._bucket);return e!=null?Hh(s,e):s}else return e!==void 0?sy(n,e):n}function oy(n,e){if(e&&iy(e)){if(n instanceof Aa)return ry(n,e);throw Fo("To use ref(service, url), the first argument must be a Storage instance.")}else return Hh(n,e)}function Gc(n,e){const t=e==null?void 0:e[Ph];return t==null?null:Ke.makeFromBucketSpec(t,n)}function ay(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:_a(i,n.app.options.projectId))}class Aa{constructor(e,t,s,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=bh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eg,this._maxUploadRetryTime=tg,this._requests=new Set,i!=null?this._bucket=Ke.makeFromBucketSpec(i,this._host):this._bucket=Gc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ke.makeFromBucketSpec(this._url,e):this._bucket=Gc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$c("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$c("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new en(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new pg(xh());{const a=Rg(e,this._appId,s,i,t,this._firebaseVersion,r);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const Kc="@firebase/storage",Qc="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="storage";function ly(n,e,t){return n=pe(n),ty(n,e,t)}function cy(n){return n=pe(n),ny(n)}function Kh(n,e){return n=pe(n),oy(n,e)}function uy(n=va(),e){n=pe(n);const s=ya(n,Gh).getImmediate({identifier:e}),i=fa("storage");return i&&hy(s,...i),s}function hy(n,e,t,s={}){ay(n,e,t,s)}function dy(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Aa(t,s,i,e,Ea)}function fy(){bn(new Jt(Gh,dy,"PUBLIC").setMultipleInstances(!0)),rt(Kc,Qc,""),rt(Kc,Qc,"esm2017")}fy();var Yc={};const Xc="@firebase/database",Jc="1.0.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qh="";function _y(n){Qh=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ds(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new py(e)}}catch{}return new my},Gt=Yh("localStorage"),gy=Yh("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new ma("@firebase/database"),yy=function(){let n=1;return function(){return n++}}(),Xh=function(n){const e=$p(n),t=new zp;t.update(e);const s=t.digest();return ha.encodeByteArray(s)},Xs=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Xs.apply(null,s):typeof s=="object"?e+=me(s):e+=s,e+=" "}return e};let Is=null,Zc=!0;const Ey=function(n,e){D(!e,"Can't turn on custom loggers persistently."),Cn.logLevel=Y.VERBOSE,Is=Cn.log.bind(Cn)},Oe=function(...n){if(Zc===!0&&(Zc=!1,Is===null&&gy.get("logging_enabled")===!0&&Ey()),Is){const e=Xs.apply(null,n);Is(e)}},Js=function(n){return function(...e){Oe(n,...e)}},Uo=function(...n){const e="FIREBASE INTERNAL ERROR: "+Xs(...n);Cn.error(e)},gt=function(...n){const e=`FIREBASE FATAL ERROR: ${Xs(...n)}`;throw Cn.error(e),new Error(e)},ze=function(...n){const e="FIREBASE WARNING: "+Xs(...n);Cn.warn(e)},vy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jh=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Ty=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Pn="[MIN_NAME]",tn="[MAX_NAME]",qn=function(n,e){if(n===e)return 0;if(n===Pn||e===tn)return-1;if(e===Pn||n===tn)return 1;{const t=eu(n),s=eu(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},wy=function(n,e){return n===e?0:n<e?-1:1},ds=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+me(e))},Ra=function(n){if(typeof n!="object"||n===null)return me(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=me(e[s]),t+=":",t+=Ra(n[e[s]]);return t+="}",t},Zh=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function $e(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ed=function(n){D(!Jh(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,a,l,c;n===0?(r=0,a=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,a=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,a=Math.round(n/Math.pow(2,1-s-t))));const h=[];for(c=t;c;c-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(c=e;c;c-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(i?1:0),h.reverse();const f=h.join("");let p="";for(c=0;c<64;c+=8){let m=parseInt(f.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},Iy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Cy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ay(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Ry=new RegExp("^-?(0*)\\d{1,10}$"),Sy=-2147483648,by=2147483647,eu=function(n){if(Ry.test(n)){const e=Number(n);if(e>=Sy&&e<=by)return e}return null},jn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ze("Exception was thrown by user callback.",t),e},Math.floor(0))}},Py=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Cs=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Oe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class Vi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="5",td="v",nd="s",sd="r",id="f",rd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,od="ls",ad="p",Bo="ac",ld="websocket",cd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,s,i,r=!1,a="",l=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Dy(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function hd(n,e,t){D(typeof e=="string","typeof type must == string"),D(typeof t=="object","typeof params must == object");let s;if(e===ld)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===cd)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Dy(n)&&(t.ns=n.namespace);const i=[];return $e(t,(r,a)=>{i.push(r+"="+a)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.counters_={}}incrementCounter(e,t=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Rp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo={},To={};function ba(n){const e=n.toString();return vo[e]||(vo[e]=new xy),vo[e]}function Oy(n,e){const t=n.toString();return To[t]||(To[t]=e()),To[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&jn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="start",My="close",Ly="pLPCommand",Fy="pRTLPCB",dd="id",fd="pw",_d="ser",Uy="cb",By="seg",qy="ts",jy="d",Wy="dframe",pd=1870,md=30,zy=pd-md,$y=25e3,Hy=3e4;class In{constructor(e,t,s,i,r,a,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Js(e),this.stats_=ba(t),this.urlFn=c=>(this.appCheckToken&&(c[Bo]=this.appCheckToken),hd(t,cd,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Vy(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Hy)),Ty(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pa((...r)=>{const[a,l,c,h,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===tu)this.id=l,this.password=c;else if(a===My)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...r)=>{const[a,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[tu]="t",s[_d]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Uy]=this.scriptTagHolder.uniqueCallbackIdentifier),s[td]=Sa,this.transportSessionId&&(s[nd]=this.transportSessionId),this.lastSessionId&&(s[od]=this.lastSessionId),this.applicationId&&(s[ad]=this.applicationId),this.appCheckToken&&(s[Bo]=this.appCheckToken),typeof location<"u"&&location.hostname&&rd.test(location.hostname)&&(s[sd]=id);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){In.forceAllow_=!0}static forceDisallow(){In.forceDisallow_=!0}static isAvailable(){return In.forceAllow_?!0:!In.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Iy()&&!Cy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=me(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ph(t),i=Zh(s,zy);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Wy]="t",s[dd]=e,s[fd]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=me(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Pa{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yy(),window[Ly+this.uniqueCallbackIdentifier]=e,window[Fy+this.uniqueCallbackIdentifier]=t,this.myIFrame=Pa.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){Oe("frame writing exception"),l.stack&&Oe(l.stack),Oe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Oe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[dd]=this.myID,e[fd]=this.myPW,e[_d]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+md+s.length<=pd;){const a=this.pendingSegs.shift();s=s+"&"+By+i+"="+a.seg+"&"+qy+i+"="+a.ts+"&"+jy+i+"="+a.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor($y)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Oe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=16384,Ky=45e3;let Hi=null;typeof MozWebSocket<"u"?Hi=MozWebSocket:typeof WebSocket<"u"&&(Hi=WebSocket);class Xe{constructor(e,t,s,i,r,a,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Js(this.connId),this.stats_=ba(t),this.connURL=Xe.connectionURL_(t,a,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const a={};return a[td]=Sa,typeof location<"u"&&location.hostname&&rd.test(location.hostname)&&(a[sd]=id),t&&(a[nd]=t),s&&(a[od]=s),i&&(a[Bo]=i),r&&(a[ad]=r),hd(e,ld,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gt.set("previous_websocket_failure",!0);try{let s;vh(),this.mySock=new Hi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Hi!==null&&!Xe.forceDisallow_}static previouslyFailed(){return Gt.isInMemoryStorage||Gt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ds(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=me(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Zh(t,Gy);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ky))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xe.responsesRequiredToBeHealthy=2;Xe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[In,Xe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Xe&&Xe.isAvailable();let s=t&&!Xe.previouslyFailed();if(e.webSocketOnly&&(t||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Xe];else{const i=this.transports_=[];for(const r of Os.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Os.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Os.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=6e4,Yy=5e3,Xy=10*1024,Jy=100*1024,wo="t",nu="d",Zy="s",su="r",eE="e",iu="o",ru="a",ou="n",au="p",tE="h";class nE{constructor(e,t,s,i,r,a,l,c,h,f){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=c,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Js("c:"+this.id+":"),this.transportManager_=new Os(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Cs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wo in e){const t=e[wo];t===ru?this.upgradeIfSecondaryHealthy_():t===su?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===iu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ds("t",e),s=ds("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:au,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ru,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ou,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ds("t",e),s=ds("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ds(wo,e);if(nu in e){const s=e[nu];if(t===tE){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===ou){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Zy?this.onConnectionShutdown_(s):t===su?this.onReset_(s):t===eE?Uo("Server Error: "+s):t===iu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Uo("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Sa!==s&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Cs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Qy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Cs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:au,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){D(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends yd{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Eh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Gi}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=32,cu=768;class te{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function J(){return new te("")}function $(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ot(n){return n.pieces_.length-n.pieceNum_}function ne(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new te(n.pieces_,e)}function Ed(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function sE(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function vd(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Td(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new te(e,0)}function ge(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new te(t,0)}function G(n){return n.pieceNum_>=n.pieces_.length}function Be(n,e){const t=$(n),s=$(e);if(t===null)return e;if(t===s)return Be(ne(n),ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Na(n,e){if(Ot(n)!==Ot(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Je(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ot(n)>Ot(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class iE{constructor(e,t){this.errorPrefix_=t,this.parts_=vd(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_r(this.parts_[s]);wd(this)}}function rE(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=_r(e),wd(n)}function oE(n){const e=n.parts_.pop();n.byteLength_-=_r(e),n.parts_.length>0&&(n.byteLength_-=1)}function wd(n){if(n.byteLength_>cu)throw new Error(n.errorPrefix_+"has a key path longer than "+cu+" bytes ("+n.byteLength_+").");if(n.parts_.length>lu)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lu+") or object contains a cycle "+Ht(n))}function Ht(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends yd{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ka}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=1e3,aE=60*5*1e3,uu=30*1e3,lE=1.3,cE=3e4,uE="server_kill",hu=3;class mt extends gd{constructor(e,t,s,i,r,a,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=mt.nextPersistentConnectionId_++,this.log_=Js("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fs,this.maxReconnectDelay_=aE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!vh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ka.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Gi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(me(r)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new fr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const l=a.d;a.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+r),this.listens.has(a)||this.listens.set(a,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(a).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(a).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},a="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(a,r,l=>{const c=l.d,h=l.s;mt.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(h,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&vt(e,"w")){const s=Sn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=uu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=qp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,a=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},a="n";i&&(r.q=s,r.t=i),this.sendRequest(a,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,a=>{i&&setTimeout(()=>{i(a.s,a.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const a={p:t,d:s};r!==void 0&&(a.h=r),this.outstandingPuts_.push({action:e,request:a,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Uo("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cE&&(this.reconnectDelay_=fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+mt.nextConnectionId_++,r=this.lastSessionId;let a=!1,l=null;const c=function(){l?l.close():(a=!0,s())},h=function(p){D(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);a?Oe("getToken() completed but was canceled"):(Oe("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,l=new nE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,T=>{ze(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(uE)},r))}catch(p){this.log_("Failed to get token: "+p),a||(this.repoInfo_.nodeAdmin&&ze(p),c())}}}interrupt(e){Oe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Oe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Oc(this.interruptReasons_)&&(this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ra(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Oe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hu&&(this.reconnectDelay_=uu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Oe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Qh.replace(/\./g,"-")]=1,Eh()?e["framework.cordova"]=1:Op()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gi.getInstance().currentlyOnline();return Oc(this.interruptReasons_)&&e}}mt.nextPersistentConnectionId_=0;mt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new H(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new H(Pn,e),i=new H(Pn,t);return this.compare(s,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi;class Id extends mr{static get __EMPTY_NODE(){return Pi}static set __EMPTY_NODE(e){Pi=e}compare(e,t){return qn(e.name,t.name)}isDefinedOn(e){throw Un("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return H.MIN}maxPost(){return new H(tn,Pi)}makePost(e,t){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,Pi)}toString(){return".key"}}const An=new Id;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni=class{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?s(e.key,t):1,i&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Ge=class gs{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??gs.RED,this.left=i??it.EMPTY_NODE,this.right=r??it.EMPTY_NODE}copy(e,t,s,i,r){return new gs(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return it.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,gs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,gs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Ge.RED=!0;Ge.BLACK=!1;class hE{copy(e,t,s,i,r){return this}insert(e,t,s){return new Ge(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let it=class Mi{constructor(e,t=Mi.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Mi(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Mi(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ge.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ni(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ni(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ni(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ni(this.root_,null,this.comparator_,!0,e)}};it.EMPTY_NODE=new hE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n,e){return qn(n.name,e.name)}function Da(n,e){return qn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo;function fE(n){qo=n}const Cd=function(n){return typeof n=="number"?"number:"+ed(n):"string:"+n},Ad=function(n){if(n.isLeafNode()){const e=n.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else D(n===qo||n.isEmpty(),"priority of unexpected type.");D(n===qo||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du;class ve{constructor(e,t=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ad(this.priorityNode_)}static set __childrenNodeConstructor(e){du=e}static get __childrenNodeConstructor(){return du}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:$(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=$(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||Ot(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(ne(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cd(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ed(this.value_):e+=this.value_,this.lazyHash_=Xh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(t),r=ve.VALUE_TYPE_ORDER.indexOf(s);return D(i>=0,"Unknown leaf type: "+t),D(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rd,Sd;function _E(n){Rd=n}function pE(n){Sd=n}class mE extends mr{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?qn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return H.MIN}maxPost(){return new H(tn,new ve("[PRIORITY-POST]",Sd))}makePost(e,t){const s=Rd(e);return new H(t,new ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const de=new mE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=Math.log(2);class yE{constructor(e){const t=r=>parseInt(Math.log(r)/gE,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ki=function(n,e,t,s){n.sort(e);const i=function(c,h){const f=h-c;let p,m;if(f===0)return null;if(f===1)return p=n[c],m=t?t(p):p,new Ge(m,p.node,Ge.BLACK,null,null);{const T=parseInt(f/2,10)+c,S=i(c,T),k=i(T+1,h);return p=n[T],m=t?t(p):p,new Ge(m,p.node,Ge.BLACK,S,k)}},r=function(c){let h=null,f=null,p=n.length;const m=function(S,k){const b=p-S,F=p;p-=S;const j=i(b+1,F),U=n[b],z=t?t(U):U;T(new Ge(z,U.node,k,null,j))},T=function(S){h?(h.left=S,h=S):(f=S,h=S)};for(let S=0;S<c.count;++S){const k=c.nextBitIsOne(),b=Math.pow(2,c.count-(S+1));k?m(b,Ge.BLACK):(m(b,Ge.BLACK),m(b,Ge.RED))}return f},a=new yE(n.length),l=r(a);return new it(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io;const yn={};class _t{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return D(yn&&de,"ChildrenNode.ts has not been loaded"),Io=Io||new _t({".priority":yn},{".priority":de}),Io}get(e){const t=Sn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof it?t:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,t){D(e!==An,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(H.Wrap);let a=r.getNext();for(;a;)i=i||e.isDefinedOn(a.node),s.push(a),a=r.getNext();let l;i?l=Ki(s,e.getCompare()):l=yn;const c=e.toString(),h=Object.assign({},this.indexSet_);h[c]=e;const f=Object.assign({},this.indexes_);return f[c]=l,new _t(f,h)}addToIndexes(e,t){const s=Wi(this.indexes_,(i,r)=>{const a=Sn(this.indexSet_,r);if(D(a,"Missing index implementation for "+r),i===yn)if(a.isDefinedOn(e.node)){const l=[],c=t.getIterator(H.Wrap);let h=c.getNext();for(;h;)h.name!==e.name&&l.push(h),h=c.getNext();return l.push(e),Ki(l,a.getCompare())}else return yn;else{const l=t.get(e.name);let c=i;return l&&(c=c.remove(new H(e.name,l))),c.insert(e,e.node)}});return new _t(s,this.indexSet_)}removeFromIndexes(e,t){const s=Wi(this.indexes_,i=>{if(i===yn)return i;{const r=t.get(e.name);return r?i.remove(new H(e.name,r)):i}});return new _t(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s;class L{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ad(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _s||(_s=new L(new it(Da),null,_t.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_s}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?_s:t}}getChild(e){const t=$(e);return t===null?this:this.getImmediateChild(t).getChild(ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(D(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new H(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const a=i.isEmpty()?_s:this.priorityNode_;return new L(i,a,r)}}updateChild(e,t){const s=$(e);if(s===null)return t;{D($(e)!==".priority"||Ot(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ne(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(de,(a,l)=>{t[a]=l.val(e),s++,r&&L.INTEGER_REGEXP_.test(a)?i=Math.max(i,Number(a)):r=!1}),!e&&r&&i<2*s){const a=[];for(const l in t)a[l]=t[l];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cd(this.getPriority().val())+":"),this.forEachChild(de,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Xh(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new H(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new H(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new H(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zs?-1:0}withIndex(e){if(e===An||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===An||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(de),i=t.getIterator(de);let r=s.getNext(),a=i.getNext();for(;r&&a;){if(r.name!==a.name||!r.node.equals(a.node))return!1;r=s.getNext(),a=i.getNext()}return r===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===An?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class EE extends L{constructor(){super(new it(Da),L.EMPTY_NODE,_t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Zs=new EE;Object.defineProperties(H,{MIN:{value:new H(Pn,L.EMPTY_NODE)},MAX:{value:new H(tn,Zs)}});Id.__EMPTY_NODE=L.EMPTY_NODE;ve.__childrenNodeConstructor=L;fE(Zs);pE(Zs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=!0;function we(n,e=null){if(n===null)return L.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ve(t,we(e))}if(!(n instanceof Array)&&vE){const t=[];let s=!1;if($e(n,(a,l)=>{if(a.substring(0,1)!=="."){const c=we(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new H(a,c)))}}),t.length===0)return L.EMPTY_NODE;const r=Ki(t,dE,a=>a.name,Da);if(s){const a=Ki(t,de.getCompare());return new L(r,we(e),new _t({".priority":a},{".priority":de}))}else return new L(r,we(e),_t.Default)}else{let t=L.EMPTY_NODE;return $e(n,(s,i)=>{if(vt(n,s)&&s.substring(0,1)!=="."){const r=we(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(we(e))}}_E(we);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE extends mr{constructor(e){super(),this.indexPath_=e,D(!G(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?qn(e.name,t.name):r}makePost(e,t){const s=we(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new H(t,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Zs);return new H(tn,e)}toString(){return vd(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE extends mr{compare(e,t){const s=e.node.compareTo(t.node);return s===0?qn(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,t){const s=we(e);return new H(t,s)}toString(){return".value"}}const IE=new wE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(n){return{type:"value",snapshotNode:n}}function Nn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Vs(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ms(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function CE(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.index_=e}updateChild(e,t,s,i,r,a){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(a!=null&&(s.isEmpty()?e.hasChild(t)?a.trackChildChange(Vs(t,l)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?a.trackChildChange(Nn(t,s)):a.trackChildChange(Ms(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(de,(i,r)=>{t.hasChild(i)||s.trackChildChange(Vs(i,r))}),t.isLeafNode()||t.forEachChild(de,(i,r)=>{if(e.hasChild(i)){const a=e.getImmediateChild(i);a.equals(r)||s.trackChildChange(Ms(i,r,a))}else s.trackChildChange(Nn(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.indexedFilter_=new xa(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ls.getStartPost_(e),this.endPost_=Ls.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,a){return this.matches(new H(t,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,a)}updateFullNode(e,t,s){t.isLeafNode()&&(t=L.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return t.forEachChild(de,(a,l)=>{r.matches(new H(a,l))||(i=i.updateImmediateChild(a,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ls(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,a){return this.rangedFilter_.matches(new H(t,s))||(s=L.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,a):this.fullLimitUpdateChild_(e,t,s,r,a)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;r.hasNext()&&a<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),a++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let a=0;for(;r.hasNext();){const l=r.getNext();a<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?a++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let a;if(this.reverse_){const p=this.index_.getCompare();a=(m,T)=>p(T,m)}else a=this.index_.getCompare();const l=e;D(l.numChildren()===this.limit_,"");const c=new H(t,s),h=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(c);if(l.hasChild(t)){const p=l.getImmediateChild(t);let m=i.getChildAfterChild(this.index_,h,this.reverse_);for(;m!=null&&(m.name===t||l.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const T=m==null?1:a(m,c);if(f&&!s.isEmpty()&&T>=0)return r!=null&&r.trackChildChange(Ms(t,s,p)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Vs(t,p));const k=l.updateImmediateChild(t,L.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(r!=null&&r.trackChildChange(Nn(m.name,m.node)),k.updateImmediateChild(m.name,m.node)):k}}else return s.isEmpty()?e:f&&a(h,c)>=0?(r!=null&&(r.trackChildChange(Vs(h.name,h.node)),r.trackChildChange(Nn(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(h.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pn}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new Oa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function RE(n){return n.loadsAllData()?new xa(n.getIndex()):n.hasLimit()?new AE(n):new Ls(n)}function fu(n){const e={};if(n.isDefault())return e;let t;if(n.index_===de?t="$priority":n.index_===IE?t="$value":n.index_===An?t="$key":(D(n.index_ instanceof TE,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=me(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=me(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+me(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=me(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+me(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function _u(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==de&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends gd{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Js("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const a=Qi.getListenId_(e,s),l={};this.listens_[a]=l;const c=fu(e._queryParams);this.restRequest_(r+".json",c,(h,f)=>{let p=f;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(r,p,!1,s),Sn(this.listens_,a)===l){let m;h?h===401?m="permission_denied":m="rest_error:"+h:m="ok",i(m,null)}})}unlisten(e,t){const s=Qi.getListenId_(e,t);delete this.listens_[s]}get(e){const t=fu(e._queryParams),s=e._path.toString(),i=new fr;return this.restRequest_(s+".json",t,(r,a)=>{let l=a;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wp(t);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Ds(l.responseText)}catch{ze("Failed to parse JSON response for "+a+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&ze("Got unsuccessful REST response for "+a+" Status: "+l.status),s(l.status);s=null}},l.open("GET",a,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return{value:null,children:new Map}}function Pd(n,e,t){if(G(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=$(e);n.children.has(s)||n.children.set(s,Yi());const i=n.children.get(s);e=ne(e),Pd(i,e,t)}}function jo(n,e,t){n.value!==null?t(e,n.value):bE(n,(s,i)=>{const r=new te(e.toString()+"/"+s);jo(i,r,t)})}function bE(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&$e(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=10*1e3,NE=30*1e3,kE=5*60*1e3;class DE{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new PE(e);const s=pu+(NE-pu)*Math.random();Cs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;$e(e,(i,r)=>{r>0&&vt(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Cs(this.reportStats_.bind(this),Math.floor(Math.random()*2*kE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ze||(Ze={}));function Nd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Va(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ma(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ze.ACK_USER_WRITE,this.source=Nd()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new te(e));return new Xi(J(),t,this.revert)}}else return D($(this.path)===e,"operationForChild called for unrelated child."),new Xi(ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t){this.source=e,this.path=t,this.type=Ze.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Fs(this.source,J()):new Fs(this.source,ne(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ze.OVERWRITE}operationForChild(e){return G(this.path)?new nn(this.source,J(),this.snap.getImmediateChild(e)):new nn(this.source,ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ze.MERGE}operationForChild(e){if(G(this.path)){const t=this.children.subtree(new te(e));return t.isEmpty()?null:t.value?new nn(this.source,J(),t.value):new Us(this.source,J(),t)}else return D($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Us(this.source,ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const t=$(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function OE(n,e,t,s){const i=[],r=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&r.push(CE(a.childName,a.snapshotNode))}),ps(n,i,"child_removed",e,s,t),ps(n,i,"child_added",e,s,t),ps(n,i,"child_moved",r,s,t),ps(n,i,"child_changed",e,s,t),ps(n,i,"value",e,s,t),i}function ps(n,e,t,s,i,r){const a=s.filter(l=>l.type===t);a.sort((l,c)=>ME(n,l,c)),a.forEach(l=>{const c=VE(n,l,r);i.forEach(h=>{h.respondsTo(l.type)&&e.push(h.createEvent(c,n.query_))})})}function VE(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ME(n,e,t){if(e.childName==null||t.childName==null)throw Un("Should only compare child_ events.");const s=new H(e.childName,e.snapshotNode),i=new H(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(n,e){return{eventCache:n,serverCache:e}}function As(n,e,t,s){return gr(new Vt(e,t,s),n.serverCache)}function kd(n,e,t,s){return gr(n.eventCache,new Vt(e,t,s))}function Ji(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function sn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co;const LE=()=>(Co||(Co=new it(wy)),Co);class re{constructor(e,t=LE()){this.value=e,this.children=t}static fromObject(e){let t=new re(null);return $e(e,(s,i)=>{t=t.set(new te(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:J(),value:this.value};if(G(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ne(e),t);return r!=null?{path:ge(new te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const t=$(e),s=this.children.get(t);return s!==null?s.subtree(ne(e)):new re(null)}}set(e,t){if(G(e))return new re(t,this.children);{const s=$(e),r=(this.children.get(s)||new re(null)).set(ne(e),t),a=this.children.insert(s,r);return new re(this.value,a)}}remove(e){if(G(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const t=$(e),s=this.children.get(t);if(s){const i=s.remove(ne(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const t=$(e),s=this.children.get(t);return s?s.get(ne(e)):null}}setTree(e,t){if(G(e))return t;{const s=$(e),r=(this.children.get(s)||new re(null)).setTree(ne(e),t);let a;return r.isEmpty()?a=this.children.remove(s):a=this.children.insert(s,r),new re(this.value,a)}}fold(e){return this.fold_(J(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ge(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,J(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(G(e))return null;{const r=$(e),a=this.children.get(r);return a?a.findOnPath_(ne(e),ge(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,J(),t)}foreachOnPath_(e,t,s){if(G(e))return this;{this.value&&s(t,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(ne(e),ge(t,i),s):new re(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(ge(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new re(null))}}function Rs(n,e,t){if(G(e))return new et(new re(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const a=Be(i,e);return r=r.updateChild(a,t),new et(n.writeTree_.set(i,r))}else{const i=new re(t),r=n.writeTree_.setTree(e,i);return new et(r)}}}function mu(n,e,t){let s=n;return $e(t,(i,r)=>{s=Rs(s,ge(e,i),r)}),s}function gu(n,e){if(G(e))return et.empty();{const t=n.writeTree_.setTree(e,new re(null));return new et(t)}}function Wo(n,e){return un(n,e)!=null}function un(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Be(t.path,e)):null}function yu(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(de,(s,i)=>{e.push(new H(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new H(s,i.value))}),e}function Nt(n,e){if(G(e))return n;{const t=un(n,e);return t!=null?new et(new re(t)):new et(n.writeTree_.subtree(e))}}function zo(n){return n.writeTree_.isEmpty()}function kn(n,e){return Dd(J(),n.writeTree_,e)}function Dd(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(D(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Dd(ge(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ge(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(n,e){return Md(e,n)}function FE(n,e,t,s,i){D(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Rs(n.visibleWrites,e,t)),n.lastWriteId=s}function UE(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function BE(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);D(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,a=n.allWrites.length-1;for(;i&&a>=0;){const l=n.allWrites[a];l.visible&&(a>=t&&qE(l,s.path)?i=!1:Je(s.path,l.path)&&(r=!0)),a--}if(i){if(r)return jE(n),!0;if(s.snap)n.visibleWrites=gu(n.visibleWrites,s.path);else{const l=s.children;$e(l,c=>{n.visibleWrites=gu(n.visibleWrites,ge(s.path,c))})}return!0}else return!1}function qE(n,e){if(n.snap)return Je(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Je(ge(n.path,t),e))return!0;return!1}function jE(n){n.visibleWrites=xd(n.allWrites,WE,J()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function WE(n){return n.visible}function xd(n,e,t){let s=et.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const a=r.path;let l;if(r.snap)Je(t,a)?(l=Be(t,a),s=Rs(s,l,r.snap)):Je(a,t)&&(l=Be(a,t),s=Rs(s,J(),r.snap.getChild(l)));else if(r.children){if(Je(t,a))l=Be(t,a),s=mu(s,l,r.children);else if(Je(a,t))if(l=Be(a,t),G(l))s=mu(s,J(),r.children);else{const c=Sn(r.children,$(l));if(c){const h=c.getChild(ne(l));s=Rs(s,J(),h)}}}else throw Un("WriteRecord should have .snap or .children")}}return s}function Od(n,e,t,s,i){if(!s&&!i){const r=un(n.visibleWrites,e);if(r!=null)return r;{const a=Nt(n.visibleWrites,e);if(zo(a))return t;if(t==null&&!Wo(a,J()))return null;{const l=t||L.EMPTY_NODE;return kn(a,l)}}}else{const r=Nt(n.visibleWrites,e);if(!i&&zo(r))return t;if(!i&&t==null&&!Wo(r,J()))return null;{const a=function(h){return(h.visible||i)&&(!s||!~s.indexOf(h.writeId))&&(Je(h.path,e)||Je(e,h.path))},l=xd(n.allWrites,a,e),c=t||L.EMPTY_NODE;return kn(l,c)}}}function zE(n,e,t){let s=L.EMPTY_NODE;const i=un(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(de,(r,a)=>{s=s.updateImmediateChild(r,a)}),s;if(t){const r=Nt(n.visibleWrites,e);return t.forEachChild(de,(a,l)=>{const c=kn(Nt(r,new te(a)),l);s=s.updateImmediateChild(a,c)}),yu(r).forEach(a=>{s=s.updateImmediateChild(a.name,a.node)}),s}else{const r=Nt(n.visibleWrites,e);return yu(r).forEach(a=>{s=s.updateImmediateChild(a.name,a.node)}),s}}function $E(n,e,t,s,i){D(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ge(e,t);if(Wo(n.visibleWrites,r))return null;{const a=Nt(n.visibleWrites,r);return zo(a)?i.getChild(t):kn(a,i.getChild(t))}}function HE(n,e,t,s){const i=ge(e,t),r=un(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const a=Nt(n.visibleWrites,i);return kn(a,s.getNode().getImmediateChild(t))}else return null}function GE(n,e){return un(n.visibleWrites,e)}function KE(n,e,t,s,i,r,a){let l;const c=Nt(n.visibleWrites,e),h=un(c,J());if(h!=null)l=h;else if(t!=null)l=kn(c,t);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=a.getCompare(),m=r?l.getReverseIteratorFrom(s,a):l.getIteratorFrom(s,a);let T=m.getNext();for(;T&&f.length<i;)p(T,s)!==0&&f.push(T),T=m.getNext();return f}else return[]}function QE(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function Zi(n,e,t,s){return Od(n.writeTree,n.treePath,e,t,s)}function La(n,e){return zE(n.writeTree,n.treePath,e)}function Eu(n,e,t,s){return $E(n.writeTree,n.treePath,e,t,s)}function er(n,e){return GE(n.writeTree,ge(n.treePath,e))}function YE(n,e,t,s,i,r){return KE(n.writeTree,n.treePath,e,t,s,i,r)}function Fa(n,e,t){return HE(n.writeTree,n.treePath,e,t)}function Vd(n,e){return Md(ge(n.treePath,e),n.writeTree)}function Md(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;D(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Ms(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Vs(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Nn(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ms(s,e.snapshotNode,i.oldSnap));else throw Un("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Ld=new JE;class Ua{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Vt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fa(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:sn(this.viewCache_),r=YE(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(n){return{filter:n}}function ev(n,e){D(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function tv(n,e,t,s,i){const r=new XE;let a,l;if(t.type===Ze.OVERWRITE){const h=t;h.source.fromUser?a=$o(n,e,h.path,h.snap,s,i,r):(D(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered()&&!G(h.path),a=tr(n,e,h.path,h.snap,s,i,l,r))}else if(t.type===Ze.MERGE){const h=t;h.source.fromUser?a=sv(n,e,h.path,h.children,s,i,r):(D(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered(),a=Ho(n,e,h.path,h.children,s,i,l,r))}else if(t.type===Ze.ACK_USER_WRITE){const h=t;h.revert?a=ov(n,e,h.path,s,i,r):a=iv(n,e,h.path,h.affectedTree,s,i,r)}else if(t.type===Ze.LISTEN_COMPLETE)a=rv(n,e,t.path,s,r);else throw Un("Unknown operation type: "+t.type);const c=r.getChanges();return nv(e,a,c),{viewCache:a,changes:c}}function nv(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ji(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(bd(Ji(e)))}}function Fd(n,e,t,s,i,r){const a=e.eventCache;if(er(s,t)!=null)return e;{let l,c;if(G(t))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=sn(e),f=h instanceof L?h:L.EMPTY_NODE,p=La(s,f);l=n.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const h=Zi(s,sn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=$(t);if(h===".priority"){D(Ot(t)===1,"Can't have a priority with additional path components");const f=a.getNode();c=e.serverCache.getNode();const p=Eu(s,t,f,c);p!=null?l=n.filter.updatePriority(f,p):l=a.getNode()}else{const f=ne(t);let p;if(a.isCompleteForChild(h)){c=e.serverCache.getNode();const m=Eu(s,t,a.getNode(),c);m!=null?p=a.getNode().getImmediateChild(h).updateChild(f,m):p=a.getNode().getImmediateChild(h)}else p=Fa(s,h,e.serverCache);p!=null?l=n.filter.updateChild(a.getNode(),h,p,f,i,r):l=a.getNode()}}return As(e,l,a.isFullyInitialized()||G(t),n.filter.filtersNodes())}}function tr(n,e,t,s,i,r,a,l){const c=e.serverCache;let h;const f=a?n.filter:n.filter.getIndexedFilter();if(G(t))h=f.updateFullNode(c.getNode(),s,null);else if(f.filtersNodes()&&!c.isFiltered()){const T=c.getNode().updateChild(t,s);h=f.updateFullNode(c.getNode(),T,null)}else{const T=$(t);if(!c.isCompleteForPath(t)&&Ot(t)>1)return e;const S=ne(t),b=c.getNode().getImmediateChild(T).updateChild(S,s);T===".priority"?h=f.updatePriority(c.getNode(),b):h=f.updateChild(c.getNode(),T,b,S,Ld,null)}const p=kd(e,h,c.isFullyInitialized()||G(t),f.filtersNodes()),m=new Ua(i,p,r);return Fd(n,p,t,i,m,l)}function $o(n,e,t,s,i,r,a){const l=e.eventCache;let c,h;const f=new Ua(i,e,r);if(G(t))h=n.filter.updateFullNode(e.eventCache.getNode(),s,a),c=As(e,h,!0,n.filter.filtersNodes());else{const p=$(t);if(p===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),s),c=As(e,h,l.isFullyInitialized(),l.isFiltered());else{const m=ne(t),T=l.getNode().getImmediateChild(p);let S;if(G(m))S=s;else{const k=f.getCompleteChild(p);k!=null?Ed(m)===".priority"&&k.getChild(Td(m)).isEmpty()?S=k:S=k.updateChild(m,s):S=L.EMPTY_NODE}if(T.equals(S))c=e;else{const k=n.filter.updateChild(l.getNode(),p,S,m,f,a);c=As(e,k,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function vu(n,e){return n.eventCache.isCompleteForChild(e)}function sv(n,e,t,s,i,r,a){let l=e;return s.foreach((c,h)=>{const f=ge(t,c);vu(e,$(f))&&(l=$o(n,l,f,h,i,r,a))}),s.foreach((c,h)=>{const f=ge(t,c);vu(e,$(f))||(l=$o(n,l,f,h,i,r,a))}),l}function Tu(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ho(n,e,t,s,i,r,a,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,h;G(t)?h=s:h=new re(null).setTree(t,s);const f=e.serverCache.getNode();return h.children.inorderTraversal((p,m)=>{if(f.hasChild(p)){const T=e.serverCache.getNode().getImmediateChild(p),S=Tu(n,T,m);c=tr(n,c,new te(p),S,i,r,a,l)}}),h.children.inorderTraversal((p,m)=>{const T=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!f.hasChild(p)&&!T){const S=e.serverCache.getNode().getImmediateChild(p),k=Tu(n,S,m);c=tr(n,c,new te(p),k,i,r,a,l)}}),c}function iv(n,e,t,s,i,r,a){if(er(i,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(G(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return tr(n,e,t,c.getNode().getChild(t),i,r,l,a);if(G(t)){let h=new re(null);return c.getNode().forEachChild(An,(f,p)=>{h=h.set(new te(f),p)}),Ho(n,e,t,h,i,r,l,a)}else return e}else{let h=new re(null);return s.foreach((f,p)=>{const m=ge(t,f);c.isCompleteForPath(m)&&(h=h.set(f,c.getNode().getChild(m)))}),Ho(n,e,t,h,i,r,l,a)}}function rv(n,e,t,s,i){const r=e.serverCache,a=kd(e,r.getNode(),r.isFullyInitialized()||G(t),r.isFiltered());return Fd(n,a,t,s,Ld,i)}function ov(n,e,t,s,i,r){let a;if(er(s,t)!=null)return e;{const l=new Ua(s,e,i),c=e.eventCache.getNode();let h;if(G(t)||$(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Zi(s,sn(e));else{const p=e.serverCache.getNode();D(p instanceof L,"serverChildren would be complete if leaf node"),f=La(s,p)}f=f,h=n.filter.updateFullNode(c,f,r)}else{const f=$(t);let p=Fa(s,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=c.getImmediateChild(f)),p!=null?h=n.filter.updateChild(c,f,p,ne(t),l,r):e.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(c,f,L.EMPTY_NODE,ne(t),l,r):h=c,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Zi(s,sn(e)),a.isLeafNode()&&(h=n.filter.updateFullNode(h,a,r)))}return a=e.serverCache.isFullyInitialized()||er(s,J())!=null,As(e,h,a,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new xa(s.getIndex()),r=RE(s);this.processor_=ZE(r);const a=t.serverCache,l=t.eventCache,c=i.updateFullNode(L.EMPTY_NODE,a.getNode(),null),h=r.updateFullNode(L.EMPTY_NODE,l.getNode(),null),f=new Vt(c,a.isFullyInitialized(),i.filtersNodes()),p=new Vt(h,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=gr(p,f),this.eventGenerator_=new xE(this.query_)}get query(){return this.query_}}function lv(n){return n.viewCache_.serverCache.getNode()}function cv(n){return Ji(n.viewCache_)}function uv(n,e){const t=sn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!G(e)&&!t.getImmediateChild($(e)).isEmpty())?t.getChild(e):null}function wu(n){return n.eventRegistrations_.length===0}function hv(n,e){n.eventRegistrations_.push(e)}function Iu(n,e,t){const s=[];if(t){D(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const a=r.createCancelEvent(t,i);a&&s.push(a)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const a=n.eventRegistrations_[r];if(!a.matches(e))i.push(a);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Cu(n,e,t,s){e.type===Ze.MERGE&&e.source.queryId!==null&&(D(sn(n.viewCache_),"We should always have a full cache before handling merges"),D(Ji(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=tv(n.processor_,i,e,t,s);return ev(n.processor_,r.viewCache),D(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ud(n,r.changes,r.viewCache.eventCache.getNode(),null)}function dv(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(de,(r,a)=>{s.push(Nn(r,a))}),t.isFullyInitialized()&&s.push(bd(t.getNode())),Ud(n,s,t.getNode(),e)}function Ud(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return OE(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr;class Bd{constructor(){this.views=new Map}}function fv(n){D(!nr,"__referenceConstructor has already been defined"),nr=n}function _v(){return D(nr,"Reference.ts has not been loaded"),nr}function pv(n){return n.views.size===0}function Ba(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return D(r!=null,"SyncTree gave us an op for an invalid query."),Cu(r,e,t,s)}else{let r=[];for(const a of n.views.values())r=r.concat(Cu(a,e,t,s));return r}}function qd(n,e,t,s,i){const r=e._queryIdentifier,a=n.views.get(r);if(!a){let l=Zi(t,i?s:null),c=!1;l?c=!0:s instanceof L?(l=La(t,s),c=!1):(l=L.EMPTY_NODE,c=!1);const h=gr(new Vt(l,c,!1),new Vt(s,i,!1));return new av(e,h)}return a}function mv(n,e,t,s,i,r){const a=qd(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,a),hv(a,t),dv(a,t)}function gv(n,e,t,s){const i=e._queryIdentifier,r=[];let a=[];const l=Mt(n);if(i==="default")for(const[c,h]of n.views.entries())a=a.concat(Iu(h,t,s)),wu(h)&&(n.views.delete(c),h.query._queryParams.loadsAllData()||r.push(h.query));else{const c=n.views.get(i);c&&(a=a.concat(Iu(c,t,s)),wu(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Mt(n)&&r.push(new(_v())(e._repo,e._path)),{removed:r,events:a}}function jd(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function kt(n,e){let t=null;for(const s of n.views.values())t=t||uv(s,e);return t}function Wd(n,e){if(e._queryParams.loadsAllData())return Er(n);{const s=e._queryIdentifier;return n.views.get(s)}}function zd(n,e){return Wd(n,e)!=null}function Mt(n){return Er(n)!=null}function Er(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr;function yv(n){D(!sr,"__referenceConstructor has already been defined"),sr=n}function Ev(){return D(sr,"Reference.ts has not been loaded"),sr}let vv=1;class Au{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=QE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $d(n,e,t,s,i){return FE(n.pendingWriteTree_,e,t,s,i),i?ti(n,new nn(Nd(),e,t)):[]}function Kt(n,e,t=!1){const s=UE(n.pendingWriteTree_,e);if(BE(n.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(J(),!0):$e(s.children,a=>{r=r.set(new te(a),!0)}),ti(n,new Xi(s.path,r,t))}else return[]}function ei(n,e,t){return ti(n,new nn(Va(),e,t))}function Tv(n,e,t){const s=re.fromObject(t);return ti(n,new Us(Va(),e,s))}function wv(n,e){return ti(n,new Fs(Va(),e))}function Iv(n,e,t){const s=ja(n,t);if(s){const i=Wa(s),r=i.path,a=i.queryId,l=Be(r,e),c=new Fs(Ma(a),l);return za(n,r,c)}else return[]}function ir(n,e,t,s,i=!1){const r=e._path,a=n.syncPointTree_.get(r);let l=[];if(a&&(e._queryIdentifier==="default"||zd(a,e))){const c=gv(a,e,t,s);pv(a)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const h=c.removed;if(l=c.events,!i){const f=h.findIndex(m=>m._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(r,(m,T)=>Mt(T));if(f&&!p){const m=n.syncPointTree_.subtree(r);if(!m.isEmpty()){const T=Rv(m);for(let S=0;S<T.length;++S){const k=T[S],b=k.query,F=Qd(n,k);n.listenProvider_.startListening(Ss(b),Bs(n,b),F.hashFn,F.onComplete)}}}!p&&h.length>0&&!s&&(f?n.listenProvider_.stopListening(Ss(e),null):h.forEach(m=>{const T=n.queryToTagMap.get(vr(m));n.listenProvider_.stopListening(Ss(m),T)}))}Sv(n,h)}return l}function Hd(n,e,t,s){const i=ja(n,s);if(i!=null){const r=Wa(i),a=r.path,l=r.queryId,c=Be(a,e),h=new nn(Ma(l),c,t);return za(n,a,h)}else return[]}function Cv(n,e,t,s){const i=ja(n,s);if(i){const r=Wa(i),a=r.path,l=r.queryId,c=Be(a,e),h=re.fromObject(t),f=new Us(Ma(l),c,h);return za(n,a,f)}else return[]}function Go(n,e,t,s=!1){const i=e._path;let r=null,a=!1;n.syncPointTree_.foreachOnPath(i,(m,T)=>{const S=Be(m,i);r=r||kt(T,S),a=a||Mt(T)});let l=n.syncPointTree_.get(i);l?(a=a||Mt(l),r=r||kt(l,J())):(l=new Bd,n.syncPointTree_=n.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=L.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((T,S)=>{const k=kt(S,J());k&&(r=r.updateImmediateChild(T,k))}));const h=zd(l,e);if(!h&&!e._queryParams.loadsAllData()){const m=vr(e);D(!n.queryToTagMap.has(m),"View does not exist, but we have a tag");const T=bv();n.queryToTagMap.set(m,T),n.tagToQueryMap.set(T,m)}const f=yr(n.pendingWriteTree_,i);let p=mv(l,e,t,f,r,c);if(!h&&!a&&!s){const m=Wd(l,e);p=p.concat(Pv(n,e,m))}return p}function qa(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(a,l)=>{const c=Be(a,e),h=kt(l,c);if(h)return h});return Od(i,e,r,t,!0)}function Av(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(h,f)=>{const p=Be(h,t);s=s||kt(f,p)});let i=n.syncPointTree_.get(t);i?s=s||kt(i,J()):(i=new Bd,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,a=r?new Vt(s,!0,!1):null,l=yr(n.pendingWriteTree_,e._path),c=qd(i,e,l,r?a.getNode():L.EMPTY_NODE,r);return cv(c)}function ti(n,e){return Gd(e,n.syncPointTree_,null,yr(n.pendingWriteTree_,J()))}function Gd(n,e,t,s){if(G(n.path))return Kd(n,e,t,s);{const i=e.get(J());t==null&&i!=null&&(t=kt(i,J()));let r=[];const a=$(n.path),l=n.operationForChild(a),c=e.children.get(a);if(c&&l){const h=t?t.getImmediateChild(a):null,f=Vd(s,a);r=r.concat(Gd(l,c,h,f))}return i&&(r=r.concat(Ba(i,n,s,t))),r}}function Kd(n,e,t,s){const i=e.get(J());t==null&&i!=null&&(t=kt(i,J()));let r=[];return e.children.inorderTraversal((a,l)=>{const c=t?t.getImmediateChild(a):null,h=Vd(s,a),f=n.operationForChild(a);f&&(r=r.concat(Kd(f,l,c,h)))}),i&&(r=r.concat(Ba(i,n,s,t))),r}function Qd(n,e){const t=e.query,s=Bs(n,t);return{hashFn:()=>(lv(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Iv(n,t._path,s):wv(n,t._path);{const r=Ay(i,t);return ir(n,t,null,r)}}}}function Bs(n,e){const t=vr(e);return n.queryToTagMap.get(t)}function vr(n){return n._path.toString()+"$"+n._queryIdentifier}function ja(n,e){return n.tagToQueryMap.get(e)}function Wa(n){const e=n.indexOf("$");return D(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new te(n.substr(0,e))}}function za(n,e,t){const s=n.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const i=yr(n.pendingWriteTree_,e);return Ba(s,t,i,null)}function Rv(n){return n.fold((e,t,s)=>{if(t&&Mt(t))return[Er(t)];{let i=[];return t&&(i=jd(t)),$e(s,(r,a)=>{i=i.concat(a)}),i}})}function Ss(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Ev())(n._repo,n._path):n}function Sv(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=vr(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function bv(){return vv++}function Pv(n,e,t){const s=e._path,i=Bs(n,e),r=Qd(n,t),a=n.listenProvider_.startListening(Ss(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)D(!Mt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((h,f,p)=>{if(!G(h)&&f&&Mt(f))return[Er(f).query];{let m=[];return f&&(m=m.concat(jd(f).map(T=>T.query))),$e(p,(T,S)=>{m=m.concat(S)}),m}});for(let h=0;h<c.length;++h){const f=c[h];n.listenProvider_.stopListening(Ss(f),Bs(n,f))}}return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new $a(t)}node(){return this.node_}}class Ha{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ge(this.path_,e);return new Ha(this.syncTree_,t)}node(){return qa(this.syncTree_,this.path_)}}const Nv=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ru=function(n,e,t){if(!n||typeof n!="object")return n;if(D(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return kv(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Dv(n[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},kv=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:D(!1,"Unexpected server value: "+n)}},Dv=function(n,e,t){n.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const i=e.node();if(D(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const a=i.getValue();return typeof a!="number"?s:a+s},xv=function(n,e,t,s){return Ga(e,new Ha(t,n),s)},Yd=function(n,e,t){return Ga(n,new $a(e),t)};function Ga(n,e,t){const s=n.getPriority().val(),i=Ru(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const a=n,l=Ru(a.getValue(),e,t);return l!==a.getValue()||i!==a.getPriority().val()?new ve(l,we(i)):n}else{const a=n;return r=a,i!==a.getPriority().val()&&(r=r.updatePriority(new ve(i))),a.forEachChild(de,(l,c)=>{const h=Ga(c,e.getImmediateChild(l),t);h!==c&&(r=r.updateImmediateChild(l,h))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Qa(n,e){let t=e instanceof te?e:new te(e),s=n,i=$(t);for(;i!==null;){const r=Sn(s.node.children,i)||{children:{},childCount:0};s=new Ka(i,s,r),t=ne(t),i=$(t)}return s}function Wn(n){return n.node.value}function Xd(n,e){n.node.value=e,Ko(n)}function Jd(n){return n.node.childCount>0}function Ov(n){return Wn(n)===void 0&&!Jd(n)}function Tr(n,e){$e(n.node.children,(t,s)=>{e(new Ka(t,n,s))})}function Zd(n,e,t,s){t&&!s&&e(n),Tr(n,i=>{Zd(i,e,!0,s)}),t&&s&&e(n)}function Vv(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ni(n){return new te(n.parent===null?n.name:ni(n.parent)+"/"+n.name)}function Ko(n){n.parent!==null&&Mv(n.parent,n.name,n)}function Mv(n,e,t){const s=Ov(t),i=vt(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Ko(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Ko(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=/[\[\].#$\/\u0000-\u001F\u007F]/,Fv=/[\[\].#$\u0000-\u001F\u007F]/,Ao=10*1024*1024,ef=function(n){return typeof n=="string"&&n.length!==0&&!Lv.test(n)},tf=function(n){return typeof n=="string"&&n.length!==0&&!Fv.test(n)},Uv=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tf(n)},nf=function(n,e,t,s){s&&e===void 0||Ya(pa(n,"value"),e,t)},Ya=function(n,e,t){const s=t instanceof te?new iE(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ht(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ht(s)+" with contents = "+e.toString());if(Jh(e))throw new Error(n+"contains "+e.toString()+" "+Ht(s));if(typeof e=="string"&&e.length>Ao/3&&_r(e)>Ao)throw new Error(n+"contains a string greater than "+Ao+" utf8 bytes "+Ht(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if($e(e,(a,l)=>{if(a===".value")i=!0;else if(a!==".priority"&&a!==".sv"&&(r=!0,!ef(a)))throw new Error(n+" contains an invalid key ("+a+") "+Ht(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rE(s,a),Ya(n,l,s),oE(s)}),i&&r)throw new Error(n+' contains ".value" child '+Ht(s)+" in addition to actual children.")}},sf=function(n,e,t,s){if(!tf(t))throw new Error(pa(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Bv=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sf(n,e,t)},rf=function(n,e){if($(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},qv=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ef(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Uv(t))throw new Error(pa(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xa(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Na(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function of(n,e,t){Xa(n,t),af(n,s=>Na(s,e))}function lt(n,e,t){Xa(n,t),af(n,s=>Je(s,e)||Je(e,s))}function af(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Wv(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Wv(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Is&&Oe("event: "+t.toString()),jn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="repo_interrupt",$v=25;class Hv{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yi(),this.transactionQueueTree_=new Ka,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Gv(n,e,t){if(n.stats_=ba(n.repoInfo_),n.forceRestClient_||Py())n.server_=new Qi(n.repoInfo_,(s,i,r,a)=>{Su(n,s,i,r,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>bu(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new mt(n.repoInfo_,e,(s,i,r,a)=>{Su(n,s,i,r,a)},s=>{bu(n,s)},s=>{Kv(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Oy(n.repoInfo_,()=>new DE(n.stats_,n.server_)),n.infoData_=new SE,n.infoSyncTree_=new Au({startListening:(s,i,r,a)=>{let l=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(l=ei(n.infoSyncTree_,s._path,c),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),Za(n,"connected",!1),n.serverSyncTree_=new Au({startListening:(s,i,r,a)=>(n.server_.listen(s,r,i,(l,c)=>{const h=a(l,c);lt(n.eventQueue_,s._path,h)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function lf(n){const t=n.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ja(n){return Nv({timestamp:lf(n)})}function Su(n,e,t,s,i){n.dataUpdateCount++;const r=new te(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(i)if(s){const c=Wi(t,h=>we(h));a=Cv(n.serverSyncTree_,r,c,i)}else{const c=we(t);a=Hd(n.serverSyncTree_,r,c,i)}else if(s){const c=Wi(t,h=>we(h));a=Tv(n.serverSyncTree_,r,c)}else{const c=we(t);a=ei(n.serverSyncTree_,r,c)}let l=r;a.length>0&&(l=Ir(n,r)),lt(n.eventQueue_,l,a)}function bu(n,e){Za(n,"connected",e),e===!1&&Xv(n)}function Kv(n,e){$e(e,(t,s)=>{Za(n,t,s)})}function Za(n,e,t){const s=new te("/.info/"+e),i=we(t);n.infoData_.updateSnapshot(s,i);const r=ei(n.infoSyncTree_,s,i);lt(n.eventQueue_,s,r)}function cf(n){return n.nextWriteId_++}function Qv(n,e,t){const s=Av(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=we(i).withIndex(e._queryParams.getIndex());Go(n.serverSyncTree_,e,t,!0);let a;if(e._queryParams.loadsAllData())a=ei(n.serverSyncTree_,e._path,r);else{const l=Bs(n.serverSyncTree_,e);a=Hd(n.serverSyncTree_,e._path,r,l)}return lt(n.eventQueue_,e._path,a),ir(n.serverSyncTree_,e,t,null,!0),r},i=>(wr(n,"get for query "+me(e)+" failed: "+i),Promise.reject(new Error(i))))}function Yv(n,e,t,s,i){wr(n,"set",{path:e.toString(),value:t,priority:s});const r=Ja(n),a=we(t,s),l=qa(n.serverSyncTree_,e),c=Yd(a,l,r),h=cf(n),f=$d(n.serverSyncTree_,e,c,h,!0);Xa(n.eventQueue_,f),n.server_.put(e.toString(),a.val(!0),(m,T)=>{const S=m==="ok";S||ze("set at "+e+" failed: "+m);const k=Kt(n.serverSyncTree_,h,!S);lt(n.eventQueue_,e,k),tT(n,i,m,T)});const p=_f(n,e);Ir(n,p),lt(n.eventQueue_,p,[])}function Xv(n){wr(n,"onDisconnectEvents");const e=Ja(n),t=Yi();jo(n.onDisconnect_,J(),(i,r)=>{const a=xv(i,r,n.serverSyncTree_,e);Pd(t,i,a)});let s=[];jo(t,J(),(i,r)=>{s=s.concat(ei(n.serverSyncTree_,i,r));const a=_f(n,i);Ir(n,a)}),n.onDisconnect_=Yi(),lt(n.eventQueue_,J(),s)}function Jv(n,e,t){let s;$(e._path)===".info"?s=Go(n.infoSyncTree_,e,t):s=Go(n.serverSyncTree_,e,t),of(n.eventQueue_,e._path,s)}function Zv(n,e,t){let s;$(e._path)===".info"?s=ir(n.infoSyncTree_,e,t):s=ir(n.serverSyncTree_,e,t),of(n.eventQueue_,e._path,s)}function eT(n){n.persistentConnection_&&n.persistentConnection_.interrupt(zv)}function wr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Oe(t,...e)}function tT(n,e,t,s){e&&jn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const a=new Error(r);a.code=i,e(a)}})}function uf(n,e,t){return qa(n.serverSyncTree_,e,t)||L.EMPTY_NODE}function el(n,e=n.transactionQueueTree_){if(e||Cr(n,e),Wn(e)){const t=df(n,e);D(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&nT(n,ni(e),t)}else Jd(e)&&Tr(e,t=>{el(n,t)})}function nT(n,e,t){const s=t.map(h=>h.currentWriteId),i=uf(n,e,s);let r=i;const a=i.hash();for(let h=0;h<t.length;h++){const f=t[h];D(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Be(e,f.path);r=r.updateChild(p,f.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;n.server_.put(c.toString(),l,h=>{wr(n,"transaction put response",{path:c.toString(),status:h});let f=[];if(h==="ok"){const p=[];for(let m=0;m<t.length;m++)t[m].status=2,f=f.concat(Kt(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&p.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();Cr(n,Qa(n.transactionQueueTree_,e)),el(n,n.transactionQueueTree_),lt(n.eventQueue_,e,f);for(let m=0;m<p.length;m++)jn(p[m])}else{if(h==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{ze("transaction at "+c.toString()+" failed: "+h);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=h}Ir(n,e)}},a)}function Ir(n,e){const t=hf(n,e),s=ni(t),i=df(n,t);return sT(n,i,s),s}function sT(n,e,t){if(e.length===0)return;const s=[];let i=[];const a=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],h=Be(t,c.path);let f=!1,p;if(D(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,p=c.abortReason,i=i.concat(Kt(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=$v)f=!0,p="maxretry",i=i.concat(Kt(n.serverSyncTree_,c.currentWriteId,!0));else{const m=uf(n,c.path,a);c.currentInputSnapshot=m;const T=e[l].update(m.val());if(T!==void 0){Ya("transaction failed: Data returned ",T,c.path);let S=we(T);typeof T=="object"&&T!=null&&vt(T,".priority")||(S=S.updatePriority(m.getPriority()));const b=c.currentWriteId,F=Ja(n),j=Yd(S,m,F);c.currentOutputSnapshotRaw=S,c.currentOutputSnapshotResolved=j,c.currentWriteId=cf(n),a.splice(a.indexOf(b),1),i=i.concat($d(n.serverSyncTree_,c.path,j,c.currentWriteId,c.applyLocally)),i=i.concat(Kt(n.serverSyncTree_,b,!0))}else f=!0,p="nodata",i=i.concat(Kt(n.serverSyncTree_,c.currentWriteId,!0))}lt(n.eventQueue_,t,i),i=[],f&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}Cr(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)jn(s[l]);el(n,n.transactionQueueTree_)}function hf(n,e){let t,s=n.transactionQueueTree_;for(t=$(e);t!==null&&Wn(s)===void 0;)s=Qa(s,t),e=ne(e),t=$(e);return s}function df(n,e){const t=[];return ff(n,e,t),t.sort((s,i)=>s.order-i.order),t}function ff(n,e,t){const s=Wn(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Tr(e,i=>{ff(n,i,t)})}function Cr(n,e){const t=Wn(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Xd(e,t.length>0?t:void 0)}Tr(e,s=>{Cr(n,s)})}function _f(n,e){const t=ni(hf(n,e)),s=Qa(n.transactionQueueTree_,e);return Vv(s,i=>{Ro(n,i)}),Ro(n,s),Zd(s,i=>{Ro(n,i)}),t}function Ro(n,e){const t=Wn(e);if(t){const s=[];let i=[],r=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(D(r===a-1,"All SENT items should be at beginning of queue."),r=a,t[a].status=3,t[a].abortReason="set"):(D(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),i=i.concat(Kt(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&s.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Xd(e,void 0):t.length=r+1,lt(n.eventQueue_,ni(e),i);for(let a=0;a<s.length;a++)jn(s[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function rT(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ze(`Invalid query segment '${t}' in query '${n}'`)}return e}const Pu=function(n,e){const t=oT(n),s=t.namespace;t.domain==="firebase.com"&&gt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||vy();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ud(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new te(t.pathString)}},oT=function(n){let e="",t="",s="",i="",r="",a=!0,l="https",c=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(l=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(i=iT(n.substring(f,p)));const m=rT(n.substring(Math.min(n.length,p)));h=e.indexOf(":"),h>=0?(a=l==="https"||l==="wss",c=parseInt(e.substring(h+1),10)):h=e.length;const T=e.slice(0,h);if(T.toLowerCase()==="localhost")t="localhost";else if(T.split(".").length<=2)t=T;else{const S=e.indexOf(".");s=e.substring(0,S).toLowerCase(),t=e.substring(S+1),r=s}"ns"in m&&(r=m.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:a,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",aT=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Nu.charAt(t%64),t=Math.floor(t/64);D(t===0,"Cannot push at time == 0");let a=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)a+=Nu.charAt(e[i]);return D(a.length===20,"nextPushId: Length should be 20."),a}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class cT{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return G(this._path)?null:Ed(this._path)}get ref(){return new Tt(this._repo,this._path)}get _queryIdentifier(){const e=_u(this._queryParams),t=Ra(e);return t==="{}"?"default":t}get _queryObject(){return _u(this._queryParams)}isEqual(e){if(e=pe(e),!(e instanceof tl))return!1;const t=this._repo===e._repo,s=Na(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+sE(this._path)}}class Tt extends tl{constructor(e,t){super(e,t,new Oa,!1)}get parent(){const e=Td(this._path);return e===null?null:new Tt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qs{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new te(e),s=js(this.ref,e);return new qs(this._node.getChild(t),s,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new qs(i,js(this.ref,s),de)))}hasChild(e){const t=new te(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function uT(n,e){return n=pe(n),n._checkNotDeleted("ref"),e!==void 0?js(n._root,e):n._root}function js(n,e){return n=pe(n),$(n._path)===null?Bv("child","path",e):sf("child","path",e),new Tt(n._repo,ge(n._path,e))}function hT(n,e){n=pe(n),rf("push",n._path),nf("push",e,n._path,!0);const t=lf(n._repo),s=aT(t),i=js(n,s),r=js(n,s);let a;return e!=null?a=dT(r,e).then(()=>r):a=Promise.resolve(r),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function dT(n,e){n=pe(n),rf("set",n._path),nf("set",e,n._path,!1);const t=new fr;return Yv(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function AC(n){n=pe(n);const e=new pf(()=>{}),t=new Ar(e);return Qv(n._repo,n,t).then(s=>new qs(s,new Tt(n._repo,n._path),n._queryParams.getIndex()))}class Ar{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new lT("value",this,new qs(e.snapshotNode,new Tt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new cT(this,e,t):null}matches(e){return e instanceof Ar?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function fT(n,e,t,s,i){const r=new pf(t,void 0),a=new Ar(r);return Jv(n._repo,n,a),()=>Zv(n._repo,n,a)}function RC(n,e,t,s){return fT(n,"value",e)}fv(Tt);yv(Tt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="FIREBASE_DATABASE_EMULATOR_HOST",Qo={};let pT=!1;function mT(n,e,t,s){n.repoInfo_=new ud(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function gT(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Oe("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=Pu(r,i),l=a.repoInfo,c;typeof process<"u"&&Yc&&(c=Yc[_T]),c?(r=`http://${c}?ns=${l.namespace}`,a=Pu(r,i),l=a.repoInfo):a.repoInfo.secure;const h=new ky(n.name,n.options,e);qv("Invalid Firebase Database URL",a),G(a.path)||gt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=ET(l,n,h,new Ny(n.name,t));return new vT(f,n)}function yT(n,e){const t=Qo[e];(!t||t[n.key]!==n)&&gt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),eT(n),delete t[n.key]}function ET(n,e,t,s){let i=Qo[e.name];i||(i={},Qo[e.name]=i);let r=i[n.toURLString()];return r&&gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Hv(n,pT,t,s),i[n.toURLString()]=r,r}class vT{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Gv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gt("Cannot call "+e+" on a deleted database.")}}function TT(n=va(),e){const t=ya(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=fa("database");s&&wT(t,...s)}return t}function wT(n,e,t,s={}){n=pe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&gt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Vi(Vi.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:_a(s.mockUserToken,n.app.options.projectId);r=new Vi(a)}mT(i,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n){_y(Ea),bn(new Jt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return gT(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),rt(Xc,Jc,n),rt(Xc,Jc,"esm2017")}mt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};mt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};IT();var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xt,mf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function E(){}E.prototype=g.prototype,w.D=g.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(v,I,A){for(var y=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)y[ht-2]=arguments[ht];return g.prototype[I].apply(v,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,E){E||(E=0);var v=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)v[I]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(I=0;16>I;++I)v[I]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=w.g[0],E=w.g[1],I=w.g[2];var A=w.g[3],y=g+(A^E&(I^A))+v[0]+3614090360&4294967295;g=E+(y<<7&4294967295|y>>>25),y=A+(I^g&(E^I))+v[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(E^A&(g^E))+v[2]+606105819&4294967295,I=A+(y<<17&4294967295|y>>>15),y=E+(g^I&(A^g))+v[3]+3250441966&4294967295,E=I+(y<<22&4294967295|y>>>10),y=g+(A^E&(I^A))+v[4]+4118548399&4294967295,g=E+(y<<7&4294967295|y>>>25),y=A+(I^g&(E^I))+v[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(E^A&(g^E))+v[6]+2821735955&4294967295,I=A+(y<<17&4294967295|y>>>15),y=E+(g^I&(A^g))+v[7]+4249261313&4294967295,E=I+(y<<22&4294967295|y>>>10),y=g+(A^E&(I^A))+v[8]+1770035416&4294967295,g=E+(y<<7&4294967295|y>>>25),y=A+(I^g&(E^I))+v[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(E^A&(g^E))+v[10]+4294925233&4294967295,I=A+(y<<17&4294967295|y>>>15),y=E+(g^I&(A^g))+v[11]+2304563134&4294967295,E=I+(y<<22&4294967295|y>>>10),y=g+(A^E&(I^A))+v[12]+1804603682&4294967295,g=E+(y<<7&4294967295|y>>>25),y=A+(I^g&(E^I))+v[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=I+(E^A&(g^E))+v[14]+2792965006&4294967295,I=A+(y<<17&4294967295|y>>>15),y=E+(g^I&(A^g))+v[15]+1236535329&4294967295,E=I+(y<<22&4294967295|y>>>10),y=g+(I^A&(E^I))+v[1]+4129170786&4294967295,g=E+(y<<5&4294967295|y>>>27),y=A+(E^I&(g^E))+v[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^E&(A^g))+v[11]+643717713&4294967295,I=A+(y<<14&4294967295|y>>>18),y=E+(A^g&(I^A))+v[0]+3921069994&4294967295,E=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(E^I))+v[5]+3593408605&4294967295,g=E+(y<<5&4294967295|y>>>27),y=A+(E^I&(g^E))+v[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^E&(A^g))+v[15]+3634488961&4294967295,I=A+(y<<14&4294967295|y>>>18),y=E+(A^g&(I^A))+v[4]+3889429448&4294967295,E=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(E^I))+v[9]+568446438&4294967295,g=E+(y<<5&4294967295|y>>>27),y=A+(E^I&(g^E))+v[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^E&(A^g))+v[3]+4107603335&4294967295,I=A+(y<<14&4294967295|y>>>18),y=E+(A^g&(I^A))+v[8]+1163531501&4294967295,E=I+(y<<20&4294967295|y>>>12),y=g+(I^A&(E^I))+v[13]+2850285829&4294967295,g=E+(y<<5&4294967295|y>>>27),y=A+(E^I&(g^E))+v[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=I+(g^E&(A^g))+v[7]+1735328473&4294967295,I=A+(y<<14&4294967295|y>>>18),y=E+(A^g&(I^A))+v[12]+2368359562&4294967295,E=I+(y<<20&4294967295|y>>>12),y=g+(E^I^A)+v[5]+4294588738&4294967295,g=E+(y<<4&4294967295|y>>>28),y=A+(g^E^I)+v[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^E)+v[11]+1839030562&4294967295,I=A+(y<<16&4294967295|y>>>16),y=E+(I^A^g)+v[14]+4259657740&4294967295,E=I+(y<<23&4294967295|y>>>9),y=g+(E^I^A)+v[1]+2763975236&4294967295,g=E+(y<<4&4294967295|y>>>28),y=A+(g^E^I)+v[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^E)+v[7]+4139469664&4294967295,I=A+(y<<16&4294967295|y>>>16),y=E+(I^A^g)+v[10]+3200236656&4294967295,E=I+(y<<23&4294967295|y>>>9),y=g+(E^I^A)+v[13]+681279174&4294967295,g=E+(y<<4&4294967295|y>>>28),y=A+(g^E^I)+v[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^E)+v[3]+3572445317&4294967295,I=A+(y<<16&4294967295|y>>>16),y=E+(I^A^g)+v[6]+76029189&4294967295,E=I+(y<<23&4294967295|y>>>9),y=g+(E^I^A)+v[9]+3654602809&4294967295,g=E+(y<<4&4294967295|y>>>28),y=A+(g^E^I)+v[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=I+(A^g^E)+v[15]+530742520&4294967295,I=A+(y<<16&4294967295|y>>>16),y=E+(I^A^g)+v[2]+3299628645&4294967295,E=I+(y<<23&4294967295|y>>>9),y=g+(I^(E|~A))+v[0]+4096336452&4294967295,g=E+(y<<6&4294967295|y>>>26),y=A+(E^(g|~I))+v[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~E))+v[14]+2878612391&4294967295,I=A+(y<<15&4294967295|y>>>17),y=E+(A^(I|~g))+v[5]+4237533241&4294967295,E=I+(y<<21&4294967295|y>>>11),y=g+(I^(E|~A))+v[12]+1700485571&4294967295,g=E+(y<<6&4294967295|y>>>26),y=A+(E^(g|~I))+v[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~E))+v[10]+4293915773&4294967295,I=A+(y<<15&4294967295|y>>>17),y=E+(A^(I|~g))+v[1]+2240044497&4294967295,E=I+(y<<21&4294967295|y>>>11),y=g+(I^(E|~A))+v[8]+1873313359&4294967295,g=E+(y<<6&4294967295|y>>>26),y=A+(E^(g|~I))+v[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~E))+v[6]+2734768916&4294967295,I=A+(y<<15&4294967295|y>>>17),y=E+(A^(I|~g))+v[13]+1309151649&4294967295,E=I+(y<<21&4294967295|y>>>11),y=g+(I^(E|~A))+v[4]+4149444226&4294967295,g=E+(y<<6&4294967295|y>>>26),y=A+(E^(g|~I))+v[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=I+(g^(A|~E))+v[2]+718787259&4294967295,I=A+(y<<15&4294967295|y>>>17),y=E+(A^(I|~g))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+A&4294967295}s.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var E=g-this.blockSize,v=this.B,I=this.h,A=0;A<g;){if(I==0)for(;A<=E;)i(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<g;)if(v[I++]=w.charCodeAt(A++),I==this.blockSize){i(this,v),I=0;break}}else for(;A<g;)if(v[I++]=w[A++],I==this.blockSize){i(this,v),I=0;break}}this.h=I,this.o+=g},s.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var E=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=E&255,E/=256;for(this.u(w),w=Array(16),g=E=0;4>g;++g)for(var v=0;32>v;v+=8)w[E++]=this.g[g]>>>v&255;return w};function r(w,g){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=g(w)}function a(w,g){this.h=g;for(var E=[],v=!0,I=w.length-1;0<=I;I--){var A=w[I]|0;v&&A==g||(E[I]=A,v=!1)}this.g=E}var l={};function c(w){return-128<=w&&128>w?r(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return b(h(-w));for(var g=[],E=1,v=0;w>=E;v++)g[v]=w/E|0,E*=4294967296;return new a(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return b(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(g,8)),v=p,I=0;I<w.length;I+=8){var A=Math.min(8,w.length-I),y=parseInt(w.substring(I,I+A),g);8>A?(A=h(Math.pow(g,A)),v=v.j(A).add(h(y))):(v=v.j(E),v=v.add(h(y)))}return v}var p=c(0),m=c(1),T=c(16777216);n=a.prototype,n.m=function(){if(k(this))return-b(this).m();for(var w=0,g=1,E=0;E<this.g.length;E++){var v=this.i(E);w+=(0<=v?v:4294967296+v)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(k(this))return"-"+b(this).toString(w);for(var g=h(Math.pow(w,6)),E=this,v="";;){var I=z(E,g).g;E=F(E,I.j(g));var A=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=I,S(E))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function k(w){return w.h==-1}n.l=function(w){return w=F(this,w),k(w)?-1:S(w)?0:1};function b(w){for(var g=w.g.length,E=[],v=0;v<g;v++)E[v]=~w.g[v];return new a(E,~w.h).add(m)}n.abs=function(){return k(this)?b(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],v=0,I=0;I<=g;I++){var A=v+(this.i(I)&65535)+(w.i(I)&65535),y=(A>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);v=y>>>16,A&=65535,y&=65535,E[I]=y<<16|A}return new a(E,E[E.length-1]&-2147483648?-1:0)};function F(w,g){return w.add(b(g))}n.j=function(w){if(S(this)||S(w))return p;if(k(this))return k(w)?b(this).j(b(w)):b(b(this).j(w));if(k(w))return b(this.j(b(w)));if(0>this.l(T)&&0>w.l(T))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,E=[],v=0;v<2*g;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<w.g.length;I++){var A=this.i(v)>>>16,y=this.i(v)&65535,ht=w.i(I)>>>16,Gn=w.i(I)&65535;E[2*v+2*I]+=y*Gn,j(E,2*v+2*I),E[2*v+2*I+1]+=A*Gn,j(E,2*v+2*I+1),E[2*v+2*I+1]+=y*ht,j(E,2*v+2*I+1),E[2*v+2*I+2]+=A*ht,j(E,2*v+2*I+2)}for(v=0;v<g;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=g;v<2*g;v++)E[v]=0;return new a(E,0)};function j(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function U(w,g){this.g=w,this.h=g}function z(w,g){if(S(g))throw Error("division by zero");if(S(w))return new U(p,p);if(k(w))return g=z(b(w),g),new U(b(g.g),b(g.h));if(k(g))return g=z(w,b(g)),new U(b(g.g),g.h);if(30<w.g.length){if(k(w)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var E=m,v=g;0>=v.l(w);)E=Se(E),v=Se(v);var I=ae(E,1),A=ae(v,1);for(v=ae(v,2),E=ae(E,2);!S(v);){var y=A.add(v);0>=y.l(w)&&(I=I.add(E),A=y),v=ae(v,1),E=ae(E,1)}return g=F(w,I.j(g)),new U(I,g)}for(I=p;0<=w.l(g);){for(E=Math.max(1,Math.floor(w.m()/g.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=h(E),y=A.j(g);k(y)||0<y.l(w);)E-=v,A=h(E),y=A.j(g);S(A)&&(A=m),I=I.add(A),w=F(w,y)}return new U(I,w)}n.A=function(w){return z(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],v=0;v<g;v++)E[v]=this.i(v)&w.i(v);return new a(E,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],v=0;v<g;v++)E[v]=this.i(v)|w.i(v);return new a(E,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],v=0;v<g;v++)E[v]=this.i(v)^w.i(v);return new a(E,this.h^w.h)};function Se(w){for(var g=w.g.length+1,E=[],v=0;v<g;v++)E[v]=w.i(v)<<1|w.i(v-1)>>>31;return new a(E,w.h)}function ae(w,g){var E=g>>5;g%=32;for(var v=w.g.length-E,I=[],A=0;A<v;A++)I[A]=0<g?w.i(A+E)>>>g|w.i(A+E+1)<<32-g:w.i(A+E);return new a(I,w.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,mf=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Xt=a}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});var ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gf,yf,ys,Ef,Li,Yo,vf,Tf,wf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ki=="object"&&ki];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function i(o,u){if(u)e:{var d=s;o=o.split(".");for(var _=0;_<o.length-1;_++){var C=o[_];if(!(C in d))break e;d=d[C]}o=o[o.length-1],_=d[o],u=u(_),u!=_&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function r(o,u){o instanceof String&&(o+="");var d=0,_=!1,C={next:function(){if(!_&&d<o.length){var R=d++;return{value:u(R,o[R]),done:!1}}return _=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(o){return o||function(){return r(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,_),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function m(o,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function T(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),o.apply(this,_)}}function S(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(_,C,R){for(var x=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)x[ee-2]=arguments[ee];return u.prototype[C].apply(_,x)}}function k(o){const u=o.length;if(0<u){const d=Array(u);for(let _=0;_<u;_++)d[_]=o[_];return d}return[]}function b(o,u){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(c(_)){const C=o.length||0,R=_.length||0;o.length=C+R;for(let x=0;x<R;x++)o[C+x]=_[x]}else o.push(_)}}class F{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var Se=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function ae(o,u,d){for(const _ in o)u.call(d,o[_],_,o)}function w(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function g(o){const u={};for(const d in o)u[d]=o[d];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,u){let d,_;for(let C=1;C<arguments.length;C++){_=arguments[C];for(d in _)o[d]=_[d];for(let R=0;R<E.length;R++)d=E[R],Object.prototype.hasOwnProperty.call(_,d)&&(o[d]=_[d])}}function I(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function y(){var o=jr;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,d){const _=Gn.get();_.set(u,d),this.h?this.h.next=_:this.g=_,this.h=_}}var Gn=new F(()=>new W_,o=>o.reset());class W_{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Kn,Qn=!1,jr=new ht,xl=()=>{const o=l.Promise.resolve(void 0);Kn=()=>{o.then(z_)}};var z_=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){A(d)}var u=Gn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Qn=!1};function wt(){this.s=this.s,this.C=this.C}wt.prototype.s=!1,wt.prototype.ma=function(){this.s||(this.s=!0,this.N())},wt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var $_=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Yn(o,u){if(be.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,_=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Se){e:{try{z(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:H_[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Yn.aa.h.call(this)}}S(Yn,be);var H_={2:"touch",3:"pen",4:"mouse"};Yn.prototype.h=function(){Yn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ci="closure_listenable_"+(1e6*Math.random()|0),G_=0;function K_(o,u,d,_,C){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!_,this.ha=C,this.key=++G_,this.da=this.fa=!1}function ui(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function hi(o){this.src=o,this.g={},this.h=0}hi.prototype.add=function(o,u,d,_,C){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var x=zr(o,u,_,C);return-1<x?(u=o[x],d||(u.fa=!1)):(u=new K_(u,this.src,R,!!_,C),u.fa=d,o.push(u)),u};function Wr(o,u){var d=u.type;if(d in o.g){var _=o.g[d],C=Array.prototype.indexOf.call(_,u,void 0),R;(R=0<=C)&&Array.prototype.splice.call(_,C,1),R&&(ui(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function zr(o,u,d,_){for(var C=0;C<o.length;++C){var R=o[C];if(!R.da&&R.listener==u&&R.capture==!!d&&R.ha==_)return C}return-1}var $r="closure_lm_"+(1e6*Math.random()|0),Hr={};function Ol(o,u,d,_,C){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Ol(o,u[R],d,_,C);return null}return d=Ll(d),o&&o[ci]?o.K(u,d,h(_)?!!_.capture:!!_,C):Q_(o,u,d,!1,_,C)}function Q_(o,u,d,_,C,R){if(!u)throw Error("Invalid event type");var x=h(C)?!!C.capture:!!C,ee=Kr(o);if(ee||(o[$r]=ee=new hi(o)),d=ee.add(u,d,_,x,R),d.proxy)return d;if(_=Y_(),d.proxy=_,_.src=o,_.listener=d,o.addEventListener)$_||(C=x),C===void 0&&(C=!1),o.addEventListener(u.toString(),_,C);else if(o.attachEvent)o.attachEvent(Ml(u.toString()),_);else if(o.addListener&&o.removeListener)o.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Y_(){function o(d){return u.call(o.src,o.listener,d)}const u=X_;return o}function Vl(o,u,d,_,C){if(Array.isArray(u))for(var R=0;R<u.length;R++)Vl(o,u[R],d,_,C);else _=h(_)?!!_.capture:!!_,d=Ll(d),o&&o[ci]?(o=o.i,u=String(u).toString(),u in o.g&&(R=o.g[u],d=zr(R,d,_,C),-1<d&&(ui(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete o.g[u],o.h--)))):o&&(o=Kr(o))&&(u=o.g[u.toString()],o=-1,u&&(o=zr(u,d,_,C)),(d=-1<o?u[o]:null)&&Gr(d))}function Gr(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ci])Wr(u.i,o);else{var d=o.type,_=o.proxy;u.removeEventListener?u.removeEventListener(d,_,o.capture):u.detachEvent?u.detachEvent(Ml(d),_):u.addListener&&u.removeListener&&u.removeListener(_),(d=Kr(u))?(Wr(d,o),d.h==0&&(d.src=null,u[$r]=null)):ui(o)}}}function Ml(o){return o in Hr?Hr[o]:Hr[o]="on"+o}function X_(o,u){if(o.da)o=!0;else{u=new Yn(u,this);var d=o.listener,_=o.ha||o.src;o.fa&&Gr(o),o=d.call(_,u)}return o}function Kr(o){return o=o[$r],o instanceof hi?o:null}var Qr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ll(o){return typeof o=="function"?o:(o[Qr]||(o[Qr]=function(u){return o.handleEvent(u)}),o[Qr])}function Pe(){wt.call(this),this.i=new hi(this),this.M=this,this.F=null}S(Pe,wt),Pe.prototype[ci]=!0,Pe.prototype.removeEventListener=function(o,u,d,_){Vl(this,o,u,d,_)};function Le(o,u){var d,_=o.F;if(_)for(d=[];_;_=_.F)d.push(_);if(o=o.M,_=u.type||u,typeof u=="string")u=new be(u,o);else if(u instanceof be)u.target=u.target||o;else{var C=u;u=new be(_,o),v(u,C)}if(C=!0,d)for(var R=d.length-1;0<=R;R--){var x=u.g=d[R];C=di(x,_,!0,u)&&C}if(x=u.g=o,C=di(x,_,!0,u)&&C,C=di(x,_,!1,u)&&C,d)for(R=0;R<d.length;R++)x=u.g=d[R],C=di(x,_,!1,u)&&C}Pe.prototype.N=function(){if(Pe.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],_=0;_<d.length;_++)ui(d[_]);delete o.g[u],o.h--}}this.F=null},Pe.prototype.K=function(o,u,d,_){return this.i.add(String(o),u,!1,d,_)},Pe.prototype.L=function(o,u,d,_){return this.i.add(String(o),u,!0,d,_)};function di(o,u,d,_){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,R=0;R<u.length;++R){var x=u[R];if(x&&!x.da&&x.capture==d){var ee=x.listener,Ie=x.ha||x.src;x.fa&&Wr(o.i,x),C=ee.call(Ie,_)!==!1&&C}}return C&&!_.defaultPrevented}function Fl(o,u,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ul(o){o.g=Fl(()=>{o.g=null,o.i&&(o.i=!1,Ul(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class J_ extends wt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ul(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xn(o){wt.call(this),this.h=o,this.g={}}S(Xn,wt);var Bl=[];function ql(o){ae(o.g,function(u,d){this.g.hasOwnProperty(d)&&Gr(u)},o),o.g={}}Xn.prototype.N=function(){Xn.aa.N.call(this),ql(this)},Xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yr=l.JSON.stringify,Z_=l.JSON.parse,ep=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Xr(){}Xr.prototype.h=null;function jl(o){return o.h||(o.h=o.i())}function Wl(){}var Jn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Jr(){be.call(this,"d")}S(Jr,be);function Zr(){be.call(this,"c")}S(Zr,be);var qt={},zl=null;function fi(){return zl=zl||new Pe}qt.La="serverreachability";function $l(o){be.call(this,qt.La,o)}S($l,be);function Zn(o){const u=fi();Le(u,new $l(u))}qt.STAT_EVENT="statevent";function Hl(o,u){be.call(this,qt.STAT_EVENT,o),this.stat=u}S(Hl,be);function Fe(o){const u=fi();Le(u,new Hl(u,o))}qt.Ma="timingevent";function Gl(o,u){be.call(this,qt.Ma,o),this.size=u}S(Gl,be);function es(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ts(){this.g=!0}ts.prototype.xa=function(){this.g=!1};function tp(o,u,d,_,C,R){o.info(function(){if(o.g)if(R)for(var x="",ee=R.split("&"),Ie=0;Ie<ee.length;Ie++){var X=ee[Ie].split("=");if(1<X.length){var Ne=X[0];X=X[1];var ke=Ne.split("_");x=2<=ke.length&&ke[1]=="type"?x+(Ne+"="+X+"&"):x+(Ne+"=redacted&")}}else x=null;else x=R;return"XMLHTTP REQ ("+_+") [attempt "+C+"]: "+u+`
`+d+`
`+x})}function np(o,u,d,_,C,R,x){o.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+C+"]: "+u+`
`+d+`
`+R+" "+x})}function fn(o,u,d,_){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+ip(o,d)+(_?" "+_:"")})}function sp(o,u){o.info(function(){return"TIMEOUT: "+u})}ts.prototype.info=function(){};function ip(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var _=d[o];if(!(2>_.length)){var C=_[1];if(Array.isArray(C)&&!(1>C.length)){var R=C[0];if(R!="noop"&&R!="stop"&&R!="close")for(var x=1;x<C.length;x++)C[x]=""}}}}return Yr(d)}catch{return u}}var _i={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Kl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},eo;function pi(){}S(pi,Xr),pi.prototype.g=function(){return new XMLHttpRequest},pi.prototype.i=function(){return{}},eo=new pi;function It(o,u,d,_){this.j=o,this.i=u,this.l=d,this.R=_||1,this.U=new Xn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ql}function Ql(){this.i=null,this.g="",this.h=!1}var Yl={},to={};function no(o,u,d){o.L=1,o.v=Ei(dt(u)),o.m=d,o.P=!0,Xl(o,null)}function Xl(o,u){o.F=Date.now(),mi(o),o.A=dt(o.v);var d=o.A,_=o.R;Array.isArray(_)||(_=[String(_)]),hc(d.i,"t",_),o.C=0,d=o.j.J,o.h=new Ql,o.g=Pc(o.j,d?u:null,!o.m),0<o.O&&(o.M=new J_(m(o.Y,o,o.g),o.O)),u=o.U,d=o.g,_=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Bl[0]=C.toString()),C=Bl);for(var R=0;R<C.length;R++){var x=Ol(d,C[R],_||u.handleEvent,!1,u.h||u);if(!x)break;u.g[x.key]=x}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Zn(),tp(o.i,o.u,o.A,o.l,o.R,o.m)}It.prototype.ca=function(o){o=o.target;const u=this.M;u&&ft(o)==3?u.j():this.Y(o)},It.prototype.Y=function(o){try{if(o==this.g)e:{const ke=ft(this.g);var u=this.g.Ba();const mn=this.g.Z();if(!(3>ke)&&(ke!=3||this.g&&(this.h.h||this.g.oa()||yc(this.g)))){this.J||ke!=4||u==7||(u==8||0>=mn?Zn(3):Zn(2)),so(this);var d=this.g.Z();this.X=d;t:if(Jl(this)){var _=yc(this.g);o="";var C=_.length,R=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jt(this),ns(this);var x="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(_[u],{stream:!(R&&u==C-1)});_.length=0,this.h.g+=o,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=d==200,np(this.i,this.u,this.A,this.l,this.R,ke,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,Ie=this.g;if((ee=Ie.g?Ie.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(ee)){var X=ee;break t}}X=null}if(d=X)fn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,io(this,d);else{this.o=!1,this.s=3,Fe(12),jt(this),ns(this);break e}}if(this.P){d=!0;let Ye;for(;!this.J&&this.C<x.length;)if(Ye=rp(this,x),Ye==to){ke==4&&(this.s=4,Fe(14),d=!1),fn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==Yl){this.s=4,Fe(15),fn(this.i,this.l,x,"[Invalid Chunk]"),d=!1;break}else fn(this.i,this.l,Ye,null),io(this,Ye);if(Jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ke!=4||x.length!=0||this.h.h||(this.s=1,Fe(16),d=!1),this.o=this.o&&d,!d)fn(this.i,this.l,x,"[Invalid Chunked Response]"),jt(this),ns(this);else if(0<x.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),uo(Ne),Ne.M=!0,Fe(11))}}else fn(this.i,this.l,x,null),io(this,x);ke==4&&jt(this),this.o&&!this.J&&(ke==4?Ac(this.j,this):(this.o=!1,mi(this)))}else wp(this.g),d==400&&0<x.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),jt(this),ns(this)}}}catch{}finally{}};function Jl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function rp(o,u){var d=o.C,_=u.indexOf(`
`,d);return _==-1?to:(d=Number(u.substring(d,_)),isNaN(d)?Yl:(_+=1,_+d>u.length?to:(u=u.slice(_,_+d),o.C=_+d,u)))}It.prototype.cancel=function(){this.J=!0,jt(this)};function mi(o){o.S=Date.now()+o.I,Zl(o,o.I)}function Zl(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=es(m(o.ba,o),u)}function so(o){o.B&&(l.clearTimeout(o.B),o.B=null)}It.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(sp(this.i,this.A),this.L!=2&&(Zn(),Fe(17)),jt(this),this.s=2,ns(this)):Zl(this,this.S-o)};function ns(o){o.j.G==0||o.J||Ac(o.j,o)}function jt(o){so(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ql(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function io(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||ro(d.h,o))){if(!o.K&&ro(d.h,o)&&d.G==3){try{var _=d.Da.g.parse(u)}catch{_=null}if(Array.isArray(_)&&_.length==3){var C=_;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ci(d),wi(d);else break e;co(d),Fe(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=es(m(d.Za,d),6e3));if(1>=nc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else zt(d,11)}else if((o.K||d.g==o)&&Ci(d),!j(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let X=C[u];if(d.T=X[0],X=X[1],d.G==2)if(X[0]=="c"){d.K=X[1],d.ia=X[2];const Ne=X[3];Ne!=null&&(d.la=Ne,d.j.info("VER="+d.la));const ke=X[4];ke!=null&&(d.Aa=ke,d.j.info("SVER="+d.Aa));const mn=X[5];mn!=null&&typeof mn=="number"&&0<mn&&(_=1.5*mn,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const Ye=o.g;if(Ye){const Ri=Ye.g?Ye.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var R=_.h;R.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(oo(R,R.h),R.h=null))}if(_.D){const ho=Ye.g?Ye.g.getResponseHeader("X-HTTP-Session-Id"):null;ho&&(_.ya=ho,ie(_.I,_.D,ho))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var x=o;if(_.qa=bc(_,_.J?_.ia:null,_.W),x.K){sc(_.h,x);var ee=x,Ie=_.L;Ie&&(ee.I=Ie),ee.B&&(so(ee),mi(ee)),_.g=x}else Ic(_);0<d.i.length&&Ii(d)}else X[0]!="stop"&&X[0]!="close"||zt(d,7);else d.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?zt(d,7):lo(d):X[0]!="noop"&&d.l&&d.l.ta(X),d.v=0)}}Zn(4)}catch{}}var op=class{constructor(o,u){this.g=o,this.map=u}};function ec(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function nc(o){return o.h?1:o.g?o.g.size:0}function ro(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function oo(o,u){o.g?o.g.add(u):o.h=u}function sc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ec.prototype.cancel=function(){if(this.i=ic(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ic(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return k(o.i)}function ap(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,_=0;_<d;_++)u.push(o[_]);return u}u=[],d=0;for(_ in o)u[d++]=o[_];return u}function lp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const _ in o)u[d++]=_;return u}}}function rc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=lp(o),_=ap(o),C=_.length,R=0;R<C;R++)u.call(void 0,_[R],d&&d[R],o)}var oc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cp(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var _=o[d].indexOf("="),C=null;if(0<=_){var R=o[d].substring(0,_);C=o[d].substring(_+1)}else R=o[d];u(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Wt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Wt){this.h=o.h,gi(this,o.j),this.o=o.o,this.g=o.g,yi(this,o.s),this.l=o.l;var u=o.i,d=new rs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),ac(this,d),this.m=o.m}else o&&(u=String(o).match(oc))?(this.h=!1,gi(this,u[1]||"",!0),this.o=ss(u[2]||""),this.g=ss(u[3]||"",!0),yi(this,u[4]),this.l=ss(u[5]||"",!0),ac(this,u[6]||"",!0),this.m=ss(u[7]||"")):(this.h=!1,this.i=new rs(null,this.h))}Wt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(is(u,lc,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(is(u,lc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(is(d,d.charAt(0)=="/"?dp:hp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",is(d,_p)),o.join("")};function dt(o){return new Wt(o)}function gi(o,u,d){o.j=d?ss(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function yi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function ac(o,u,d){u instanceof rs?(o.i=u,pp(o.i,o.h)):(d||(u=is(u,fp)),o.i=new rs(u,o.h))}function ie(o,u,d){o.i.set(u,d)}function Ei(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ss(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function is(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,up),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function up(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var lc=/[#\/\?@]/g,hp=/[#\?:]/g,dp=/[#\?]/g,fp=/[#\?@]/g,_p=/#/g;function rs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Ct(o){o.g||(o.g=new Map,o.h=0,o.i&&cp(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=rs.prototype,n.add=function(o,u){Ct(this),this.i=null,o=_n(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function cc(o,u){Ct(o),u=_n(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function uc(o,u){return Ct(o),u=_n(o,u),o.g.has(u)}n.forEach=function(o,u){Ct(this),this.g.forEach(function(d,_){d.forEach(function(C){o.call(u,C,_,this)},this)},this)},n.na=function(){Ct(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let _=0;_<u.length;_++){const C=o[_];for(let R=0;R<C.length;R++)d.push(u[_])}return d},n.V=function(o){Ct(this);let u=[];if(typeof o=="string")uc(this,o)&&(u=u.concat(this.g.get(_n(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return Ct(this),this.i=null,o=_n(this,o),uc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function hc(o,u,d){cc(o,u),0<d.length&&(o.i=null,o.g.set(_n(o,u),k(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var _=u[d];const R=encodeURIComponent(String(_)),x=this.V(_);for(_=0;_<x.length;_++){var C=R;x[_]!==""&&(C+="="+encodeURIComponent(String(x[_]))),o.push(C)}}return this.i=o.join("&")};function _n(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function pp(o,u){u&&!o.j&&(Ct(o),o.i=null,o.g.forEach(function(d,_){var C=_.toLowerCase();_!=C&&(cc(this,_),hc(this,C,d))},o)),o.j=u}function mp(o,u){const d=new ts;if(l.Image){const _=new Image;_.onload=T(At,d,"TestLoadImage: loaded",!0,u,_),_.onerror=T(At,d,"TestLoadImage: error",!1,u,_),_.onabort=T(At,d,"TestLoadImage: abort",!1,u,_),_.ontimeout=T(At,d,"TestLoadImage: timeout",!1,u,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=o}else u(!1)}function gp(o,u){const d=new ts,_=new AbortController,C=setTimeout(()=>{_.abort(),At(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:_.signal}).then(R=>{clearTimeout(C),R.ok?At(d,"TestPingServer: ok",!0,u):At(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),At(d,"TestPingServer: error",!1,u)})}function At(o,u,d,_,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),_(d)}catch{}}function yp(){this.g=new ep}function Ep(o,u,d){const _=d||"";try{rc(o,function(C,R){let x=C;h(C)&&(x=Yr(C)),u.push(_+R+"="+encodeURIComponent(x))})}catch(C){throw u.push(_+"type="+encodeURIComponent("_badmap")),C}}function os(o){this.l=o.Ub||null,this.j=o.eb||!1}S(os,Xr),os.prototype.g=function(){return new vi(this.l,this.j)},os.prototype.i=function(o){return function(){return o}}({});function vi(o,u){Pe.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(vi,Pe),n=vi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ls(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,as(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ls(this)),this.g&&(this.readyState=3,ls(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function dc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?as(this):ls(this),this.readyState==3&&dc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,as(this))},n.Qa=function(o){this.g&&(this.response=o,as(this))},n.ga=function(){this.g&&as(this)};function as(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ls(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function ls(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function fc(o){let u="";return ae(o,function(d,_){u+=_,u+=":",u+=d,u+=`\r
`}),u}function ao(o,u,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=fc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ie(o,u,d))}function he(o){Pe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(he,Pe);var vp=/^https?$/i,Tp=["POST","PUT"];n=he.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():eo.g(),this.v=this.o?jl(this.o):jl(eo),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(R){_c(this,R);return}if(o=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var C in _)d.set(C,_[C]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const R of _.keys())d.set(R,_.get(R));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Tp,u,void 0))||_||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,x]of d)this.g.setRequestHeader(R,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gc(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){_c(this,R)}};function _c(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,pc(o),Ti(o)}function pc(o){o.A||(o.A=!0,Le(o,"complete"),Le(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Le(this,"complete"),Le(this,"abort"),Ti(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ti(this,!0)),he.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?mc(this):this.bb())},n.bb=function(){mc(this)};function mc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ft(o)!=4||o.Z()!=2)){if(o.u&&ft(o)==4)Fl(o.Ea,0,o);else if(Le(o,"readystatechange"),ft(o)==4){o.h=!1;try{const x=o.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var _;if(_=x===0){var C=String(o.D).match(oc)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),_=!vp.test(C?C.toLowerCase():"")}d=_}if(d)Le(o,"complete"),Le(o,"success");else{o.m=6;try{var R=2<ft(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",pc(o)}}finally{Ti(o)}}}}function Ti(o,u){if(o.g){gc(o);const d=o.g,_=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Le(o,"ready");try{d.onreadystatechange=_}catch{}}}function gc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ft(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Z_(u)}};function yc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function wp(o){const u={};o=(o.g&&2<=ft(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<o.length;_++){if(j(o[_]))continue;var d=I(o[_]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=u[C]||[];u[C]=R,R.push(d)}w(u,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Ec(o){this.Aa=0,this.i=[],this.j=new ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cs("baseRetryDelayMs",5e3,o),this.cb=cs("retryDelaySeedMs",1e4,o),this.Wa=cs("forwardChannelMaxRetries",2,o),this.wa=cs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ec(o&&o.concurrentRequestLimit),this.Da=new yp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ec.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,_){Fe(0),this.W=o,this.H=u||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=bc(this,null,this.W),Ii(this)};function lo(o){if(vc(o),o.G==3){var u=o.U++,d=dt(o.I);if(ie(d,"SID",o.K),ie(d,"RID",u),ie(d,"TYPE","terminate"),us(o,d),u=new It(o,o.j,u),u.L=2,u.v=Ei(dt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Pc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),mi(u)}Sc(o)}function wi(o){o.g&&(uo(o),o.g.cancel(),o.g=null)}function vc(o){wi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ci(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ii(o){if(!tc(o.h)&&!o.s){o.s=!0;var u=o.Ga;Kn||xl(),Qn||(Kn(),Qn=!0),jr.add(u,o),o.B=0}}function Ip(o,u){return nc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=es(m(o.Ga,o,u),Rc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new It(this,this.j,o);let R=this.o;if(this.S&&(R?(R=g(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(C.H=R,R=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(u+=_,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=wc(this,C,u),d=dt(this.I),ie(d,"RID",o),ie(d,"CVER",22),this.D&&ie(d,"X-HTTP-Session-Id",this.D),us(this,d),R&&(this.O?u="headers="+encodeURIComponent(String(fc(R)))+"&"+u:this.m&&ao(d,this.m,R)),oo(this.h,C),this.Ua&&ie(d,"TYPE","init"),this.P?(ie(d,"$req",u),ie(d,"SID","null"),C.T=!0,no(C,d,null)):no(C,d,u),this.G=2}}else this.G==3&&(o?Tc(this,o):this.i.length==0||tc(this.h)||Tc(this))};function Tc(o,u){var d;u?d=u.l:d=o.U++;const _=dt(o.I);ie(_,"SID",o.K),ie(_,"RID",d),ie(_,"AID",o.T),us(o,_),o.m&&o.o&&ao(_,o.m,o.o),d=new It(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=wc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),oo(o.h,d),no(d,_,u)}function us(o,u){o.H&&ae(o.H,function(d,_){ie(u,_,d)}),o.l&&rc({},function(d,_){ie(u,_,d)})}function wc(o,u,d){d=Math.min(o.i.length,d);var _=o.l?m(o.l.Na,o.l,o):null;e:{var C=o.i;let R=-1;for(;;){const x=["count="+d];R==-1?0<d?(R=C[0].g,x.push("ofs="+R)):R=0:x.push("ofs="+R);let ee=!0;for(let Ie=0;Ie<d;Ie++){let X=C[Ie].g;const Ne=C[Ie].map;if(X-=R,0>X)R=Math.max(0,C[Ie].g-100),ee=!1;else try{Ep(Ne,x,"req"+X+"_")}catch{_&&_(Ne)}}if(ee){_=x.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,_}function Ic(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Kn||xl(),Qn||(Kn(),Qn=!0),jr.add(u,o),o.v=0}}function co(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=es(m(o.Fa,o),Rc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Cc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=es(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),wi(this),Cc(this))};function uo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Cc(o){o.g=new It(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=dt(o.qa);ie(u,"RID","rpc"),ie(u,"SID",o.K),ie(u,"AID",o.T),ie(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(u,"TO",o.ja),ie(u,"TYPE","xmlhttp"),us(o,u),o.m&&o.o&&ao(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ei(dt(u)),d.m=null,d.P=!0,Xl(d,o)}n.Za=function(){this.C!=null&&(this.C=null,wi(this),co(this),Fe(19))};function Ci(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Ac(o,u){var d=null;if(o.g==u){Ci(o),uo(o),o.g=null;var _=2}else if(ro(o.h,u))d=u.D,sc(o.h,u),_=1;else return;if(o.G!=0){if(u.o)if(_==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;_=fi(),Le(_,new Gl(_,d)),Ii(o)}else Ic(o);else if(C=u.s,C==3||C==0&&0<u.X||!(_==1&&Ip(o,u)||_==2&&co(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),C){case 1:zt(o,5);break;case 4:zt(o,10);break;case 3:zt(o,6);break;default:zt(o,2)}}}function Rc(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function zt(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.fb,o),_=o.Xa;const C=!_;_=new Wt(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||gi(_,"https"),Ei(_),C?mp(_.toString(),d):gp(_.toString(),d)}else Fe(2);o.G=0,o.l&&o.l.sa(u),Sc(o),vc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function Sc(o){if(o.G=0,o.ka=[],o.l){const u=ic(o.h);(u.length!=0||o.i.length!=0)&&(b(o.ka,u),b(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function bc(o,u,d){var _=d instanceof Wt?dt(d):new Wt(d);if(_.g!="")u&&(_.g=u+"."+_.g),yi(_,_.s);else{var C=l.location;_=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var R=new Wt(null);_&&gi(R,_),u&&(R.g=u),C&&yi(R,C),d&&(R.l=d),_=R}return d=o.D,u=o.ya,d&&u&&ie(_,d,u),ie(_,"VER",o.la),us(o,_),_}function Pc(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new he(new os({eb:d})):new he(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nc(){}n=Nc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ai(){}Ai.prototype.g=function(o,u){return new He(o,u)};function He(o,u){Pe.call(this),this.g=new Ec(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!j(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new pn(this)}S(He,Pe),He.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},He.prototype.close=function(){lo(this.g)},He.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Yr(o),o=d);u.i.push(new op(u.Ya++,o)),u.G==3&&Ii(u)},He.prototype.N=function(){this.g.l=null,delete this.j,lo(this.g),delete this.g,He.aa.N.call(this)};function kc(o){Jr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}S(kc,Jr);function Dc(){Zr.call(this),this.status=1}S(Dc,Zr);function pn(o){this.g=o}S(pn,Nc),pn.prototype.ua=function(){Le(this.g,"a")},pn.prototype.ta=function(o){Le(this.g,new kc(o))},pn.prototype.sa=function(o){Le(this.g,new Dc)},pn.prototype.ra=function(){Le(this.g,"b")},Ai.prototype.createWebChannel=Ai.prototype.g,He.prototype.send=He.prototype.o,He.prototype.open=He.prototype.m,He.prototype.close=He.prototype.close,wf=function(){return new Ai},Tf=function(){return fi()},vf=qt,Yo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_i.NO_ERROR=0,_i.TIMEOUT=8,_i.HTTP_ERROR=6,Li=_i,Kl.COMPLETE="complete",Ef=Kl,Wl.EventType=Jn,Jn.OPEN="a",Jn.CLOSE="b",Jn.ERROR="c",Jn.MESSAGE="d",Pe.prototype.listen=Pe.prototype.K,ys=Wl,yf=os,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,gf=he}).apply(typeof ki<"u"?ki:typeof self<"u"?self:typeof window<"u"?window:{});const Du="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new ma("@firebase/firestore");function ms(){return rn.logLevel}function O(n,...e){if(rn.logLevel<=Y.DEBUG){const t=e.map(nl);rn.debug(`Firestore (${zn}): ${n}`,...t)}}function yt(n,...e){if(rn.logLevel<=Y.ERROR){const t=e.map(nl);rn.error(`Firestore (${zn}): ${n}`,...t)}}function Dn(n,...e){if(rn.logLevel<=Y.WARN){const t=e.map(nl);rn.warn(`Firestore (${zn}): ${n}`,...t)}}function nl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(n="Unexpected state"){const e=`FIRESTORE (${zn}) INTERNAL ASSERTION FAILED: `+n;throw yt(e),new Error(e)}function se(n,e){n||B()}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends cn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(xe.UNAUTHENTICATED))}shutdown(){}}class AT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class RT{constructor(e){this.t=e,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Dt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Dt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(se(typeof s.accessToken=="string"),new If(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new xe(e)}}class ST{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class bT{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new ST(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const s=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.R;return this.R=r.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(se(typeof t.token=="string"),this.R=t.token,new PT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=kT(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function Z(n,e){return n<e?-1:n>e?1:0}function xn(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Ee(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Ee(0,0))}static max(){return new q(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,s){t===void 0?t=0:t>e.length&&B(),s===void 0?s=e.length-t:s>e.length-t&&B(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ws.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ws?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),a=t.get(i);if(r<a)return-1;if(r>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class le extends Ws{construct(e,t,s){return new le(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(P.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new le(t)}static emptyPath(){return new le([])}}const DT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends Ws{construct(e,t,s){return new Ae(e,t,s)}static isValidIdentifier(e){return DT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new V(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(s+=l,i++):(r(),i++)}if(r(),a)throw new V(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(le.fromString(e))}static fromName(e){return new M(le.fromString(e).popFirst(5))}static empty(){return new M(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new le(e.slice()))}}function xT(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(s===1e9?new Ee(t+1,0):new Ee(t,s));return new Lt(i,M.empty(),e)}function OT(n){return new Lt(n.readTime,n.key,-1)}class Lt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Lt(q.min(),M.empty(),-1)}static max(){return new Lt(q.max(),M.empty(),-1)}}function VT(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==MT)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,s)=>{t(e)})}static reject(e){return new N((t,s)=>{s(e)})}static waitFor(e){return new N((t,s)=>{let i=0,r=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++r,a&&r===i&&t()},c=>s(c))}),a=!0,r===i&&t()})}static or(e){let t=N.resolve(!1);for(const s of e)t=t.next(i=>i?N.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new N((s,i)=>{const r=e.length,a=new Array(r);let l=0;for(let c=0;c<r;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===r&&s(a)},f=>i(f))}})}static doWhile(e,t){return new N((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function FT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ii(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}sl.oe=-1;function Rr(n){return n==null}function rr(n){return n===0&&1/n==-1/0}function UT(n){return typeof n=="number"&&Number.isInteger(n)&&!rr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function hn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Af(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.comparator=e,this.root=t||Ce.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Di(this.root,e,this.comparator,!1)}getReverseIterator(){return new Di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Di(this.root,e,this.comparator,!0)}}class Di{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Ce.RED,this.left=i??Ce.EMPTY,this.right=r??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new Ce(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ce.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,t,s,i,r){return this}insert(e,t,s){return new Ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ou(this.data.getIterator())}getIteratorFrom(e){return new Ou(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Re(this.comparator);return t.data=e,t}}class Ou{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new Re(Ae.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Rf("Invalid base64 string: "+r):r}}(e);return new Me(t)}static fromUint8Array(e){const t=function(i){let r="";for(let a=0;a<i.length;++a)r+=String.fromCharCode(i[a]);return r}(e);return new Me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const BT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ft(n){if(se(!!n),typeof n=="string"){let e=0;const t=BT.exec(n);if(se(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function on(n){return typeof n=="string"?Me.fromBase64String(n):Me.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function rl(n){const e=n.mapValue.fields.__previous_value__;return il(e)?rl(e):e}function zs(n){const e=Ft(n.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,t,s,i,r,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class $s{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new $s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $s&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function an(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?il(n)?4:jT(n)?9007199254740991:10:B()}function ct(n,e){if(n===e)return!0;const t=an(n);if(t!==an(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zs(n).isEqual(zs(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const a=Ft(i.timestampValue),l=Ft(r.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return on(i.bytesValue).isEqual(on(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return _e(i.geoPointValue.latitude)===_e(r.geoPointValue.latitude)&&_e(i.geoPointValue.longitude)===_e(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return _e(i.integerValue)===_e(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const a=_e(i.doubleValue),l=_e(r.doubleValue);return a===l?rr(a)===rr(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return xn(n.arrayValue.values||[],e.arrayValue.values||[],ct);case 10:return function(i,r){const a=i.mapValue.fields||{},l=r.mapValue.fields||{};if(xu(a)!==xu(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!ct(a[c],l[c])))return!1;return!0}(n,e);default:return B()}}function Hs(n,e){return(n.values||[]).find(t=>ct(t,e))!==void 0}function On(n,e){if(n===e)return 0;const t=an(n),s=an(e);if(t!==s)return Z(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return function(r,a){const l=_e(r.integerValue||r.doubleValue),c=_e(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Vu(n.timestampValue,e.timestampValue);case 4:return Vu(zs(n),zs(e));case 5:return Z(n.stringValue,e.stringValue);case 6:return function(r,a){const l=on(r),c=on(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(r,a){const l=r.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Z(l[h],c[h]);if(f!==0)return f}return Z(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,a){const l=Z(_e(r.latitude),_e(a.latitude));return l!==0?l:Z(_e(r.longitude),_e(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,a){const l=r.values||[],c=a.values||[];for(let h=0;h<l.length&&h<c.length;++h){const f=On(l[h],c[h]);if(f)return f}return Z(l.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,a){if(r===xi.mapValue&&a===xi.mapValue)return 0;if(r===xi.mapValue)return 1;if(a===xi.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Z(c[p],f[p]);if(m!==0)return m;const T=On(l[c[p]],h[f[p]]);if(T!==0)return T}return Z(c.length,f.length)}(n.mapValue,e.mapValue);default:throw B()}}function Vu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=Ft(n),s=Ft(e),i=Z(t.seconds,s.seconds);return i!==0?i:Z(t.nanos,s.nanos)}function Vn(n){return Xo(n)}function Xo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Ft(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return on(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=Xo(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const a of s)r?r=!1:i+=",",i+=`${a}:${Xo(t.fields[a])}`;return i+"}"}(n.mapValue):B()}function Jo(n){return!!n&&"integerValue"in n}function ol(n){return!!n&&"arrayValue"in n}function Mu(n){return!!n&&"nullValue"in n}function Lu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fi(n){return!!n&&"mapValue"in n}function bs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return hn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=bs(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=bs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function jT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bs(t)}setAll(e){let t=Ae.emptyPath(),s={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=l.popLast()}a?s[l.lastSegment()]=bs(a):i.push(l.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Fi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ct(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Fi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){hn(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new We(bs(this.value))}}function Sf(n){const e=[];return hn(n.fields,(t,s)=>{const i=new Ae([t]);if(Fi(s)){const r=Sf(s.mapValue).fields;if(r.length===0)e.push(i);else for(const a of r)e.push(i.child(a))}else e.push(i)}),new Qe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t,s,i,r,a,l){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ve(e,0,q.min(),q.min(),q.min(),We.empty(),0)}static newFoundDocument(e,t,s,i){return new Ve(e,1,t,q.min(),s,i,0)}static newNoDocument(e,t){return new Ve(e,2,t,q.min(),q.min(),We.empty(),0)}static newUnknownDocument(e,t){return new Ve(e,3,t,q.min(),q.min(),We.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){this.position=e,this.inclusive=t}}function Fu(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],a=n.position[i];if(r.field.isKeyField()?s=M.comparator(M.fromName(a.referenceValue),t.key):s=On(a,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Uu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ct(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t="asc"){this.field=e,this.dir=t}}function WT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{}class ye extends bf{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new $T(e,t,s):t==="array-contains"?new KT(e,s):t==="in"?new QT(e,s):t==="not-in"?new YT(e,s):t==="array-contains-any"?new XT(e,s):new ye(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new HT(e,s):new GT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(On(t,this.value)):t!==null&&an(this.value)===an(t)&&this.matchesComparison(On(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ut extends bf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ut(e,t)}matches(e){return Pf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Pf(n){return n.op==="and"}function Nf(n){return zT(n)&&Pf(n)}function zT(n){for(const e of n.filters)if(e instanceof ut)return!1;return!0}function Zo(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+Vn(n.value);if(Nf(n))return n.filters.map(e=>Zo(e)).join(",");{const e=n.filters.map(t=>Zo(t)).join(",");return`${n.op}(${e})`}}function kf(n,e){return n instanceof ye?function(s,i){return i instanceof ye&&s.op===i.op&&s.field.isEqual(i.field)&&ct(s.value,i.value)}(n,e):n instanceof ut?function(s,i){return i instanceof ut&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,a,l)=>r&&kf(a,i.filters[l]),!0):!1}(n,e):void B()}function Df(n){return n instanceof ye?function(t){return`${t.field.canonicalString()} ${t.op} ${Vn(t.value)}`}(n):n instanceof ut?function(t){return t.op.toString()+" {"+t.getFilters().map(Df).join(" ,")+"}"}(n):"Filter"}class $T extends ye{constructor(e,t,s){super(e,t,s),this.key=M.fromName(s.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class HT extends ye{constructor(e,t){super(e,"in",t),this.keys=xf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class GT extends ye{constructor(e,t){super(e,"not-in",t),this.keys=xf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function xf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>M.fromName(s.referenceValue))}class KT extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ol(t)&&Hs(t.arrayValue,this.value)}}class QT extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Hs(this.value.arrayValue,t)}}class YT extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(Hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Hs(this.value.arrayValue,t)}}class XT extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ol(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Hs(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,t=null,s=[],i=[],r=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=a,this.endAt=l,this.ue=null}}function Bu(n,e=null,t=[],s=[],i=null,r=null,a=null){return new JT(n,e,t,s,i,r,a)}function al(n){const e=W(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Zo(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Rr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Vn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Vn(s)).join(",")),e.ue=t}return e.ue}function ll(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!WT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!kf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uu(n.startAt,e.startAt)&&Uu(n.endAt,e.endAt)}function ea(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t=null,s=[],i=[],r=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ZT(n,e,t,s,i,r,a,l){return new Sr(n,e,t,s,i,r,a,l)}function br(n){return new Sr(n)}function qu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ew(n){return n.collectionGroup!==null}function Ps(n){const e=W(n);if(e.ce===null){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Re(Ae.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new ar(r,s))}),t.has(Ae.keyField().canonicalString())||e.ce.push(new ar(Ae.keyField(),s))}return e.ce}function ot(n){const e=W(n);return e.le||(e.le=tw(e,Ps(n))),e.le}function tw(n,e){if(n.limitType==="F")return Bu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new ar(i.field,r)});const t=n.endAt?new or(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new or(n.startAt.position,n.startAt.inclusive):null;return Bu(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ta(n,e,t){return new Sr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Pr(n,e){return ll(ot(n),ot(e))&&n.limitType===e.limitType}function Of(n){return`${al(ot(n))}|lt:${n.limitType}`}function vn(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(i=>Df(i)).join(", ")}]`),Rr(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(i=>Vn(i)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(i=>Vn(i)).join(",")),`Target(${s})`}(ot(n))}; limitType=${n.limitType})`}function Nr(n,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):M.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,e)&&function(s,i){for(const r of Ps(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,e)&&function(s,i){return!(s.startAt&&!function(a,l,c){const h=Fu(a,l,c);return a.inclusive?h<=0:h<0}(s.startAt,Ps(s),i)||s.endAt&&!function(a,l,c){const h=Fu(a,l,c);return a.inclusive?h>=0:h>0}(s.endAt,Ps(s),i))}(n,e)}function nw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vf(n){return(e,t)=>{let s=!1;for(const i of Ps(n)){const r=sw(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function sw(n,e,t){const s=n.field.isKeyField()?M.comparator(e.key,t.key):function(r,a,l){const c=a.data.field(r),h=l.data.field(r);return c!==null&&h!==null?On(c,h):B()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return B()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hn(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Af(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=new ce(M.comparator);function Et(){return iw}const Mf=new ce(M.comparator);function Es(...n){let e=Mf;for(const t of n)e=e.insert(t.key,t);return e}function Lf(n){let e=Mf;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Qt(){return Ns()}function Ff(){return Ns()}function Ns(){return new $n(n=>n.toString(),(n,e)=>n.isEqual(e))}const rw=new ce(M.comparator),ow=new Re(M.comparator);function K(...n){let e=ow;for(const t of n)e=e.add(t);return e}const aw=new Re(Z);function lw(){return aw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rr(e)?"-0":e}}function Bf(n){return{integerValue:""+n}}function cw(n,e){return UT(e)?Bf(e):Uf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this._=void 0}}function uw(n,e,t){return n instanceof lr?function(i,r){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&il(r)&&(r=rl(r)),r&&(a.fields.__previous_value__=r),{mapValue:a}}(t,e):n instanceof Gs?jf(n,e):n instanceof Ks?Wf(n,e):function(i,r){const a=qf(i,r),l=ju(a)+ju(i.Pe);return Jo(a)&&Jo(i.Pe)?Bf(l):Uf(i.serializer,l)}(n,e)}function hw(n,e,t){return n instanceof Gs?jf(n,e):n instanceof Ks?Wf(n,e):t}function qf(n,e){return n instanceof cr?function(s){return Jo(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class lr extends kr{}class Gs extends kr{constructor(e){super(),this.elements=e}}function jf(n,e){const t=zf(e);for(const s of n.elements)t.some(i=>ct(i,s))||t.push(s);return{arrayValue:{values:t}}}class Ks extends kr{constructor(e){super(),this.elements=e}}function Wf(n,e){let t=zf(e);for(const s of n.elements)t=t.filter(i=>!ct(i,s));return{arrayValue:{values:t}}}class cr extends kr{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ju(n){return _e(n.integerValue||n.doubleValue)}function zf(n){return ol(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function dw(n,e){return n.field.isEqual(e.field)&&function(s,i){return s instanceof Gs&&i instanceof Gs||s instanceof Ks&&i instanceof Ks?xn(s.elements,i.elements,ct):s instanceof cr&&i instanceof cr?ct(s.Pe,i.Pe):s instanceof lr&&i instanceof lr}(n.transform,e.transform)}class fw{constructor(e,t){this.version=e,this.transformResults=t}}class tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tt}static exists(e){return new tt(void 0,e)}static updateTime(e){return new tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ui(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Dr{}function $f(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Gf(n.key,tt.none()):new ri(n.key,n.data,tt.none());{const t=n.data,s=We.empty();let i=new Re(Ae.comparator);for(let r of e.fields)if(!i.has(r)){let a=t.field(r);a===null&&r.length>1&&(r=r.popLast(),a=t.field(r)),a===null?s.delete(r):s.set(r,a),i=i.add(r)}return new Bt(n.key,s,new Qe(i.toArray()),tt.none())}}function _w(n,e,t){n instanceof ri?function(i,r,a){const l=i.value.clone(),c=zu(i.fieldTransforms,r,a.transformResults);l.setAll(c),r.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Bt?function(i,r,a){if(!Ui(i.precondition,r))return void r.convertToUnknownDocument(a.version);const l=zu(i.fieldTransforms,r,a.transformResults),c=r.data;c.setAll(Hf(i)),c.setAll(l),r.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(i,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ks(n,e,t,s){return n instanceof ri?function(r,a,l,c){if(!Ui(r.precondition,a))return l;const h=r.value.clone(),f=$u(r.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,s):n instanceof Bt?function(r,a,l,c){if(!Ui(r.precondition,a))return l;const h=$u(r.fieldTransforms,c,a),f=a.data;return f.setAll(Hf(r)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(n,e,t,s):function(r,a,l){return Ui(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function pw(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=qf(s.transform,i||null);r!=null&&(t===null&&(t=We.empty()),t.set(s.field,r))}return t||null}function Wu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&xn(s,i,(r,a)=>dw(r,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ri extends Dr{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bt extends Dr{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Hf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function zu(n,e,t){const s=new Map;se(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],a=r.transform,l=e.data.field(r.field);s.set(r.field,hw(a,l,t[i]))}return s}function $u(n,e,t){const s=new Map;for(const i of n){const r=i.transform,a=t.data.field(i.field);s.set(i.field,uw(r,a,e))}return s}class Gf extends Dr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mw extends Dr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&_w(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ks(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ks(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ff();return this.mutations.forEach(i=>{const r=e.get(i.key),a=r.overlayedDocument;let l=this.applyToLocalView(a,r.mutatedFields);l=t.has(i.key)?null:l;const c=$f(a,l);c!==null&&s.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(q.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&xn(this.mutations,e.mutations,(t,s)=>Wu(t,s))&&xn(this.baseMutations,e.baseMutations,(t,s)=>Wu(t,s))}}class cl{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){se(e.mutations.length===s.length);let i=function(){return rw}();const r=e.mutations;for(let a=0;a<r.length;a++)i=i.insert(r[a].key,s[a].version);return new cl(e,t,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,Q;function vw(n){switch(n){default:return B();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Kf(n){if(n===void 0)return yt("GRPC error has no .code"),P.UNKNOWN;switch(n){case fe.OK:return P.OK;case fe.CANCELLED:return P.CANCELLED;case fe.UNKNOWN:return P.UNKNOWN;case fe.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case fe.INTERNAL:return P.INTERNAL;case fe.UNAVAILABLE:return P.UNAVAILABLE;case fe.UNAUTHENTICATED:return P.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case fe.NOT_FOUND:return P.NOT_FOUND;case fe.ALREADY_EXISTS:return P.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return P.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case fe.ABORTED:return P.ABORTED;case fe.OUT_OF_RANGE:return P.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return P.UNIMPLEMENTED;case fe.DATA_LOSS:return P.DATA_LOSS;default:return B()}}(Q=fe||(fe={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=new Xt([4294967295,4294967295],0);function Hu(n){const e=Tw().encode(n),t=new mf;return t.update(e),new Uint8Array(t.digest())}function Gu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Xt([t,s],0),new Xt([i,r],0)]}class ul{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new vs(`Invalid padding: ${t}`);if(s<0)throw new vs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new vs(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new vs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Xt.fromNumber(this.Ie)}Ee(e,t,s){let i=e.add(t.multiply(Xt.fromNumber(s)));return i.compare(ww)===1&&(i=new Xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Hu(e),[s,i]=Gu(t);for(let r=0;r<this.hashCount;r++){const a=this.Ee(s,i,r);if(!this.de(a))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),a=new ul(r,i,t);return s.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Hu(e),[s,i]=Gu(t);for(let r=0;r<this.hashCount;r++){const a=this.Ee(s,i,r);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,oi.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new xr(q.min(),i,new ce(Z),Et(),K())}}class oi{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new oi(s,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,s,i){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=i}}class Qf{constructor(e,t){this.targetId=e,this.me=t}}class Yf{constructor(e,t,s=Me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Ku{constructor(){this.fe=0,this.ge=Yu(),this.pe=Me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=K(),t=K(),s=K();return this.ge.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:B()}}),new oi(this.pe,this.ye,e,t,s)}ve(){this.we=!1,this.ge=Yu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Iw{constructor(e){this.Le=e,this.Be=new Map,this.ke=Et(),this.qe=Qu(),this.Qe=new ce(Z)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.ve(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:B()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,s=e.me.count,i=this.Je(t);if(i){const r=i.target;if(ea(r))if(s===0){const a=new M(r.path);this.Ue(t,a,Ve.newNoDocument(a,q.min()))}else se(s===1);else{const a=this.Ye(t);if(a!==s){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let a,l;try{a=on(s).toUint8Array()}catch(c){if(c instanceof Rf)return Dn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ul(a,i,r)}catch(c){return Dn(c instanceof vs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,r,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((r,a)=>{const l=this.Je(a);if(l){if(r.current&&ea(l.target)){const c=new M(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,Ve.newNoDocument(c,e))}r.be&&(t.set(a,r.Ce()),r.ve())}});let s=K();this.qe.forEach((r,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(r))}),this.ke.forEach((r,a)=>a.setReadTime(e));const i=new xr(e,t,this.Qe,this.ke,s);return this.ke=Et(),this.qe=Qu(),this.Qe=new ce(Z),i}$e(e,t){if(!this.ze(e))return;const s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Ku,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Re(Z),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ku),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Qu(){return new ce(M.comparator)}function Yu(){return new ce(M.comparator)}const Cw={asc:"ASCENDING",desc:"DESCENDING"},Aw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Rw={and:"AND",or:"OR"};class Sw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function na(n,e){return n.useProto3Json||Rr(e)?e:{value:e}}function ur(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bw(n,e){return ur(n,e.toTimestamp())}function at(n){return se(!!n),q.fromTimestamp(function(t){const s=Ft(t);return new Ee(s.seconds,s.nanos)}(n))}function hl(n,e){return sa(n,e).canonicalString()}function sa(n,e){const t=function(i){return new le(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Jf(n){const e=le.fromString(n);return se(s_(e)),e}function ia(n,e){return hl(n.databaseId,e.path)}function So(n,e){const t=Jf(e);if(t.get(1)!==n.databaseId.projectId)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(e_(t))}function Zf(n,e){return hl(n.databaseId,e)}function Pw(n){const e=Jf(n);return e.length===4?le.emptyPath():e_(e)}function ra(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function e_(n){return se(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Xu(n,e,t){return{name:ia(n,e),fields:t.value.mapValue.fields}}function Nw(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(h,f){return h.useProto3Json?(se(f===void 0||typeof f=="string"),Me.fromBase64String(f||"")):(se(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Me.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?P.UNKNOWN:Kf(h.code);return new V(f,h.message||"")}(a);t=new Yf(s,i,r,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=So(n,s.document.name),r=at(s.document.updateTime),a=s.document.createTime?at(s.document.createTime):q.min(),l=new We({mapValue:{fields:s.document.fields}}),c=Ve.newFoundDocument(i,r,a,l),h=s.targetIds||[],f=s.removedTargetIds||[];t=new Bi(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=So(n,s.document),r=s.readTime?at(s.readTime):q.min(),a=Ve.newNoDocument(i,r),l=s.removedTargetIds||[];t=new Bi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=So(n,s.document),r=s.removedTargetIds||[];t=new Bi([],r,i,null)}else{if(!("filter"in e))return B();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,a=new Ew(i,r),l=s.targetId;t=new Qf(l,a)}}return t}function kw(n,e){let t;if(e instanceof ri)t={update:Xu(n,e.key,e.value)};else if(e instanceof Gf)t={delete:ia(n,e.key)};else if(e instanceof Bt)t={update:Xu(n,e.key,e.data),updateMask:Bw(e.fieldMask)};else{if(!(e instanceof mw))return B();t={verify:ia(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,a){const l=a.transform;if(l instanceof lr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Gs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ks)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof cr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw B()}(0,s))),e.precondition.isNone||(t.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:bw(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:B()}(n,e.precondition)),t}function Dw(n,e){return n&&n.length>0?(se(e!==void 0),n.map(t=>function(i,r){let a=i.updateTime?at(i.updateTime):at(r);return a.isEqual(q.min())&&(a=at(r)),new fw(a,i.transformResults||[])}(t,e))):[]}function xw(n,e){return{documents:[Zf(n,e.path)]}}function Ow(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Zf(n,i);const r=function(h){if(h.length!==0)return n_(ut.create(h,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Tn(m.field),direction:Lw(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=na(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function Vw(n){let e=Pw(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){se(s===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let r=[];t.where&&(r=function(p){const m=t_(p);return m instanceof ut&&Nf(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(m=>function(S){return new ar(wn(S.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Rr(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(p){const m=!!p.before,T=p.values||[];return new or(T,m)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const m=!p.before,T=p.values||[];return new or(T,m)}(t.endAt)),ZT(e,i,a,r,l,"F",c,h)}function Mw(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function t_(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=wn(t.unaryFilter.field);return ye.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=wn(t.unaryFilter.field);return ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=wn(t.unaryFilter.field);return ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=wn(t.unaryFilter.field);return ye.create(a,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(n):n.fieldFilter!==void 0?function(t){return ye.create(wn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ut.create(t.compositeFilter.filters.map(s=>t_(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return B()}}(t.compositeFilter.op))}(n):B()}function Lw(n){return Cw[n]}function Fw(n){return Aw[n]}function Uw(n){return Rw[n]}function Tn(n){return{fieldPath:n.canonicalString()}}function wn(n){return Ae.fromServerFormat(n.fieldPath)}function n_(n){return n instanceof ye?function(t){if(t.op==="=="){if(Lu(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NAN"}};if(Mu(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lu(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NAN"}};if(Mu(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(t.field),op:Fw(t.op),value:t.value}}}(n):n instanceof ut?function(t){const s=t.getFilters().map(i=>n_(i));return s.length===1?s[0]:{compositeFilter:{op:Uw(t.op),filters:s}}}(n):B()}function Bw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function s_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,s,i,r=q.min(),a=q.min(),l=Me.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new St(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.ct=e}}function jw(n){const e=Vw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ta(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(){this._n=new zw}addToCollectionParentIndex(e,t){return this._n.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Lt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Lt.min())}updateCollectionGroup(e,t,s){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class zw{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new Re(le.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Re(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Mn(0)}static Ln(){return new Mn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(){this.changes=new $n(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?N.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&ks(s.mutation,i,Qe.empty(),Ee.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,K()).next(()=>s))}getLocalViewOfDocuments(e,t,s=K()){const i=Qt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let a=Es();return r.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=Qt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,K()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,s,i){let r=Et();const a=Ns(),l=function(){return Ns()}();return t.forEach((c,h)=>{const f=s.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Bt)?r=r.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ks(f.mutation,h,f.mutation.getFieldMask(),Ee.now())):a.set(h.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var p;return l.set(h,new Hw(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const s=Ns();let i=new ce((a,l)=>a-l),r=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=s.get(c)||Qe.empty();f=l.applyToLocalView(h,f),s.set(c,f);const p=(i.get(l.batchId)||K()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=Ff();f.forEach(m=>{if(!r.has(m)){const T=$f(t.get(m),s.get(m));T!==null&&p.set(m,T),r=r.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return N.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,i){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ew(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const a=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):N.resolve(Qt());let l=-1,c=r;return a.next(h=>N.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,h,r)).next(()=>this.computeViews(e,c,h,K())).next(f=>({batchId:l,changes:Lf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(s=>{let i=Es();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let a=Es();return this.indexManager.getCollectionParents(e,r).next(l=>N.forEach(l,c=>{const h=function(p,m){return new Sr(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,h,s,i).next(f=>{f.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i))).next(a=>{r.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ve.newInvalidDocument(f)))});let l=Es();return a.forEach((c,h)=>{const f=r.get(c);f!==void 0&&ks(f.mutation,h,Qe.empty(),Ee.now()),Nr(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return N.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:at(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:jw(i.bundledQuery),readTime:at(i.readTime)}}(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.overlays=new ce(M.comparator),this.hr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Qt();return N.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.ht(e,t,r)}),N.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.hr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(s)),N.resolve()}getOverlaysForCollection(e,t,s){const i=Qt(),r=t.length+1,a=new M(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new ce((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let f=r.get(h.largestBatchId);f===null&&(f=Qt(),r=r.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Qt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return N.resolve(l)}ht(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(s.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new yw(t,s));let r=this.hr.get(t);r===void 0&&(r=K(),this.hr.set(t,r)),this.hr.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.Pr=new Re(Te.Ir),this.Tr=new Re(Te.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const s=new Te(e,t);this.Pr=this.Pr.add(s),this.Tr=this.Tr.add(s)}dr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Ar(new Te(e,t))}Rr(e,t){e.forEach(s=>this.removeReference(s,t))}Vr(e){const t=new M(new le([])),s=new Te(t,e),i=new Te(t,e+1),r=[];return this.Tr.forEachInRange([s,i],a=>{this.Ar(a),r.push(a.key)}),r}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new M(new le([])),s=new Te(t,e),i=new Te(t,e+1);let r=K();return this.Tr.forEachInRange([s,i],a=>{r=r.add(a.key)}),r}containsKey(e){const t=new Te(e,0),s=this.Pr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Te{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return M.comparator(e.key,t.key)||Z(e.pr,t.pr)}static Er(e,t){return Z(e.pr,t.pr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new Re(Te.Ir)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new gw(r,t,s,i);this.mutationQueue.push(a);for(const l of i)this.wr=this.wr.add(new Te(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.br(s),r=i<0?0:i;return N.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Te(t,0),i=new Te(t,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([s,i],a=>{const l=this.Sr(a.pr);r.push(l)}),N.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Re(Z);return t.forEach(i=>{const r=new Te(i,0),a=new Te(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,a],l=>{s=s.add(l.pr)})}),N.resolve(this.Dr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;M.isDocumentKey(r)||(r=r.child(""));const a=new Te(new M(r),0);let l=new Re(Z);return this.wr.forEachWhile(c=>{const h=c.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.pr)),!0)},a),N.resolve(this.Dr(l))}Dr(e){const t=[];return e.forEach(s=>{const i=this.Sr(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){se(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.wr;return N.forEach(t.mutations,i=>{const r=new Te(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=s})}Mn(e){}containsKey(e,t){const s=new Te(t,0),i=this.wr.firstAfterOrEqual(s);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.vr=e,this.docs=function(){return new ce(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,a=this.vr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return N.resolve(s?s.document.mutableCopy():Ve.newInvalidDocument(t))}getEntries(e,t){let s=Et();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ve.newInvalidDocument(i))}),N.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=Et();const a=t.path,l=new M(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||VT(OT(f),s)<=0||(i.has(f.key)||Nr(t,f))&&(r=r.insert(f.key,f.mutableCopy()))}return N.resolve(r)}getAllFromCollectionGroup(e,t,s,i){B()}Fr(e,t){return N.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Jw(this)}getSize(e){return N.resolve(this.size)}}class Jw extends $w{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(s)}),N.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.persistence=e,this.Mr=new $n(t=>al(t),ll),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Or=0,this.Nr=new dl,this.targetCount=0,this.Lr=Mn.Nn()}forEachTarget(e,t){return this.Mr.forEach((s,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Or&&(this.Or=t),N.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Mn(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.qn(t),N.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.Mr.delete(a),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),N.waitFor(r).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const s=this.Mr.get(t)||null;return N.resolve(s)}addMatchingKeys(e,t,s){return this.Nr.dr(t,s),N.resolve()}removeMatchingKeys(e,t,s){this.Nr.Rr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(a=>{r.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Nr.gr(t);return N.resolve(s)}containsKey(e,t){return N.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t){this.Br={},this.overlays={},this.kr=new sl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Zw(this),this.indexManager=new Ww,this.remoteDocumentCache=function(i){return new Xw(i)}(s=>this.referenceDelegate.Kr(s)),this.serializer=new qw(t),this.$r=new Kw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Br[e.toKey()];return s||(s=new Yw(t,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,s){O("MemoryPersistence","Starting transaction:",e);const i=new tI(this.kr.next());return this.referenceDelegate.Ur(),s(i).next(r=>this.referenceDelegate.Wr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gr(e,t){return N.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,t)))}}class tI extends LT{constructor(e){super(),this.currentSequenceNumber=e}}class fl{constructor(e){this.persistence=e,this.zr=new dl,this.jr=null}static Hr(e){return new fl(e)}get Jr(){if(this.jr)return this.jr;throw B()}addReference(e,t,s){return this.zr.addReference(s,t),this.Jr.delete(s.toString()),N.resolve()}removeReference(e,t,s){return this.zr.removeReference(s,t),this.Jr.add(s.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),N.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Jr.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Jr,s=>{const i=M.fromPath(s);return this.Yr(e,i).next(r=>{r||t.removeEntry(i,q.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(s=>{s?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return N.or([()=>N.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.qi=s,this.Qi=i}static Ki(e,t){let s=K(),i=K();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new _l(e,t.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Vp()?8:FT(yh())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.ji(e,t).next(a=>{r.result=a}).next(()=>{if(!r.result)return this.Hi(e,t,i,s).next(a=>{r.result=a})}).next(()=>{if(r.result)return;const a=new nI;return this.Ji(e,t,a).next(l=>{if(r.result=l,this.Ui)return this.Yi(e,t,a,l.size)})}).next(()=>r.result)}Yi(e,t,s,i){return s.documentReadCount<this.Wi?(ms()<=Y.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",vn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),N.resolve()):(ms()<=Y.DEBUG&&O("QueryEngine","Query:",vn(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Gi*i?(ms()<=Y.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",vn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ot(t))):N.resolve())}ji(e,t){if(qu(t))return N.resolve(null);let s=ot(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ta(t,null,"F"),s=ot(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const a=K(...r);return this.zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const h=this.Zi(t,l);return this.Xi(t,h,a,c.readTime)?this.ji(e,ta(t,null,"F")):this.es(e,h,t,c)}))})))}Hi(e,t,s,i){return qu(t)||i.isEqual(q.min())?N.resolve(null):this.zi.getDocuments(e,s).next(r=>{const a=this.Zi(t,r);return this.Xi(t,a,s,i)?N.resolve(null):(ms()<=Y.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vn(t)),this.es(e,a,t,xT(i,-1)).next(l=>l))})}Zi(e,t){let s=new Re(Vf(e));return t.forEach((i,r)=>{Nr(e,r)&&(s=s.add(r))}),s}Xi(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(e,t,s){return ms()<=Y.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",vn(t)),this.zi.getDocumentsMatchingQuery(e,t,Lt.min(),s)}es(e,t,s,i){return this.zi.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(a=>{r=r.insert(a.key,a)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t,s,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new ce(Z),this.rs=new $n(r=>al(r),ll),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(s)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gw(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function rI(n,e,t,s){return new iI(n,e,t,s)}async function i_(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t._s(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const a=[],l=[];let c=K();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of r){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(s,c).next(h=>({us:h,removedBatchIds:a,addedBatchIds:l}))})})}function oI(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,m=p.keys();let T=N.resolve();return m.forEach(S=>{T=T.next(()=>f.getEntry(c,S)).next(k=>{const b=h.docVersions.get(S);se(b!==null),k.version.compareTo(b)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=K();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function r_(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function aI(n,e){const t=W(n),s=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(t.Qr.removeMatchingKeys(r,f.removedDocuments,p).next(()=>t.Qr.addMatchingKeys(r,f.addedDocuments,p)));let T=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Me.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,s)),i=i.insert(p,T),function(k,b,F){return k.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(m,T,f)&&l.push(t.Qr.updateTargetData(r,T))});let c=Et(),h=K();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,f))}),l.push(lI(r,a,e.documentUpdates).next(f=>{c=f.cs,h=f.ls})),!s.isEqual(q.min())){const f=t.Qr.getLastRemoteSnapshotVersion(r).next(p=>t.Qr.setTargetsMetadata(r,r.currentSequenceNumber,s));l.push(f)}return N.waitFor(l).next(()=>a.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,h)).next(()=>c)}).then(r=>(t.ns=i,r))}function lI(n,e,t){let s=K(),i=K();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let a=Et();return t.forEach((l,c)=>{const h=r.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(q.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):O("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{cs:a,ls:i}})}function cI(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function uI(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Qr.getTargetData(s,e).next(r=>r?(i=r,N.resolve(i)):t.Qr.allocateTargetId(s).next(a=>(i=new St(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.Qr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.ns.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(s.targetId,s),t.rs.set(e,s.targetId)),s})}async function oa(n,e,t){const s=W(n),i=s.ns.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,a=>s.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!ii(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}s.ns=s.ns.remove(e),s.rs.delete(i.target)}function Ju(n,e,t){const s=W(n);let i=q.min(),r=K();return s.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const p=W(c),m=p.rs.get(f);return m!==void 0?N.resolve(p.ns.get(m)):p.Qr.getTargetData(h,f)}(s,a,ot(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Qr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{r=c})}).next(()=>s.ts.getDocumentsMatchingQuery(a,e,t?i:q.min(),t?r:K())).next(l=>(hI(s,nw(e),l),{documents:l,hs:r})))}function hI(n,e,t){let s=n.ss.get(e)||q.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.ss.set(e,s)}class Zu{constructor(){this.activeTargetIds=lw()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dI{constructor(){this.no=new Zu,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,s){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Zu,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi=null;function bo(){return Oi===null?Oi=function(){return 268435456+Math.round(2147483648*Math.random())}():Oi++,"0x"+Oi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="WebChannelConnection";class mI extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.wo=s+"://"+t.host,this.So=`projects/${i}/databases/${r}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Do(){return!1}Co(t,s,i,r,a){const l=bo(),c=this.vo(t,s.toUriEncodedString());O("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,r,a),this.Mo(t,c,h,i).then(f=>(O("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Dn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}xo(t,s,i,r,a,l){return this.Co(t,s,i,r,a)}Fo(t,s,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,a)=>t[a]=r),i&&i.headers.forEach((r,a)=>t[a]=r)}vo(t,s){const i=_I[t];return`${this.wo}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,s,i){const r=bo();return new Promise((a,l)=>{const c=new gf;c.setWithCredentials(!0),c.listenOnce(Ef.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Li.NO_ERROR:const f=c.getResponseJson();O(De,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),a(f);break;case Li.TIMEOUT:O(De,`RPC '${e}' ${r} timed out`),l(new V(P.DEADLINE_EXCEEDED,"Request time out"));break;case Li.HTTP_ERROR:const p=c.getStatus();if(O(De,`RPC '${e}' ${r} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const S=function(b){const F=b.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(F)>=0?F:P.UNKNOWN}(T.status);l(new V(S,T.message))}else l(new V(P.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new V(P.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{O(De,`RPC '${e}' ${r} completed.`)}});const h=JSON.stringify(i);O(De,`RPC '${e}' ${r} sending request:`,i),c.send(t,"POST",h,s,15)})}Oo(e,t,s){const i=bo(),r=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=wf(),l=Tf(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new yf({})),this.Fo(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const f=r.join("");O(De,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=a.createWebChannel(f,c);let m=!1,T=!1;const S=new pI({lo:b=>{T?O(De,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(O(De,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),O(De,`RPC '${e}' stream ${i} sending:`,b),p.send(b))},ho:()=>p.close()}),k=(b,F,j)=>{b.listen(F,U=>{try{j(U)}catch(z){setTimeout(()=>{throw z},0)}})};return k(p,ys.EventType.OPEN,()=>{T||(O(De,`RPC '${e}' stream ${i} transport opened.`),S.mo())}),k(p,ys.EventType.CLOSE,()=>{T||(T=!0,O(De,`RPC '${e}' stream ${i} transport closed`),S.po())}),k(p,ys.EventType.ERROR,b=>{T||(T=!0,Dn(De,`RPC '${e}' stream ${i} transport errored:`,b),S.po(new V(P.UNAVAILABLE,"The operation could not be completed")))}),k(p,ys.EventType.MESSAGE,b=>{var F;if(!T){const j=b.data[0];se(!!j);const U=j,z=U.error||((F=U[0])===null||F===void 0?void 0:F.error);if(z){O(De,`RPC '${e}' stream ${i} received error:`,z);const Se=z.status;let ae=function(E){const v=fe[E];if(v!==void 0)return Kf(v)}(Se),w=z.message;ae===void 0&&(ae=P.INTERNAL,w="Unknown error status: "+Se+" with message "+z.message),T=!0,S.po(new V(ae,w)),p.close()}else O(De,`RPC '${e}' stream ${i} received:`,j),S.yo(j)}}),k(l,vf.STAT_EVENT,b=>{b.stat===Yo.PROXY?O(De,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Yo.NOPROXY&&O(De,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function Po(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(n){return new Sw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t,s=1e3,i=1.5,r=6e4){this.oi=e,this.timerId=t,this.No=s,this.Lo=i,this.Bo=r,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),s=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-s);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t,s,i,r,a,l,c){this.oi=e,this.Go=s,this.zo=i,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new o_(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(yt(t.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.jo===t&&this.u_(s,i)},s=>{e(()=>{const i=new V(P.UNKNOWN,"Fetching auth token failed: "+s.message);return this.c_(i)})})}u_(e,t){const s=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{s(()=>this.listener.Po())}),this.stream.To(()=>{s(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{s(()=>this.c_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gI extends a_{constructor(e,t,s,i,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,a),this.serializer=r}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=Nw(this.serializer,e),s=function(r){if(!("targetChange"in r))return q.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?at(a.readTime):q.min()}(e);return this.listener.h_(t,s)}P_(e){const t={};t.database=ra(this.serializer),t.addTarget=function(r,a){let l;const c=a.target;if(l=ea(c)?{documents:xw(r,c)}:{query:Ow(r,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Xf(r,a.resumeToken);const h=na(r,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(q.min())>0){l.readTime=ur(r,a.snapshotVersion.toTimestamp());const h=na(r,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const s=Mw(this.serializer,e);s&&(t.labels=s),this.i_(t)}I_(e){const t={};t.database=ra(this.serializer),t.removeTarget=e,this.i_(t)}}class yI extends a_{constructor(e,t,s,i,r,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,a),this.serializer=r,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=Dw(e.writeResults,e.commitTime),s=at(e.commitTime);return this.listener.A_(s,t)}return se(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=ra(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>kw(this.serializer,s))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.connection.Co(e,sa(t,s),i,r,a)).catch(r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(P.UNKNOWN,r.toString())})}xo(e,t,s,i,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(e,sa(t,s),i,a,l,r)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(P.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class vI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(yt(t),this.y_=!1):O("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=r,this.O_.io(a=>{s.enqueueAndForget(async()=>{dn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=W(c);h.M_.add(4),await ai(h),h.N_.set("Unknown"),h.M_.delete(4),await Vr(h)}(this))})}),this.N_=new vI(s,i)}}async function Vr(n){if(dn(n))for(const e of n.x_)await e(!0)}async function ai(n){for(const e of n.x_)await e(!1)}function l_(n,e){const t=W(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),yl(t)?gl(t):Hn(t).Xo()&&ml(t,e))}function pl(n,e){const t=W(n),s=Hn(t);t.F_.delete(e),s.Xo()&&c_(t,e),t.F_.size===0&&(s.Xo()?s.n_():dn(t)&&t.N_.set("Unknown"))}function ml(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Hn(n).P_(e)}function c_(n,e){n.L_.xe(e),Hn(n).I_(e)}function gl(n){n.L_=new Iw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Hn(n).start(),n.N_.w_()}function yl(n){return dn(n)&&!Hn(n).Zo()&&n.F_.size>0}function dn(n){return W(n).M_.size===0}function u_(n){n.L_=void 0}async function wI(n){n.N_.set("Online")}async function II(n){n.F_.forEach((e,t)=>{ml(n,e)})}async function CI(n,e){u_(n),yl(n)?(n.N_.D_(e),gl(n)):n.N_.set("Unknown")}async function AI(n,e,t){if(n.N_.set("Online"),e instanceof Yf&&e.state===2&&e.cause)try{await async function(i,r){const a=r.cause;for(const l of r.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.F_.delete(l),i.L_.removeTarget(l))}(n,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await hr(n,s)}else if(e instanceof Bi?n.L_.Ke(e):e instanceof Qf?n.L_.He(e):n.L_.We(e),!t.isEqual(q.min()))try{const s=await r_(n.localStore);t.compareTo(s)>=0&&await function(r,a){const l=r.L_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=r.F_.get(h);f&&r.F_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=r.F_.get(c);if(!f)return;r.F_.set(c,f.withResumeToken(Me.EMPTY_BYTE_STRING,f.snapshotVersion)),c_(r,c);const p=new St(f.target,c,h,f.sequenceNumber);ml(r,p)}),r.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await hr(n,s)}}async function hr(n,e,t){if(!ii(e))throw e;n.M_.add(1),await ai(n),n.N_.set("Offline"),t||(t=()=>r_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Vr(n)})}function h_(n,e){return e().catch(t=>hr(n,t,e))}async function Mr(n){const e=W(n),t=Ut(e);let s=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;RI(e);)try{const i=await cI(e.localStore,s);if(i===null){e.v_.length===0&&t.n_();break}s=i.batchId,SI(e,i)}catch(i){await hr(e,i)}d_(e)&&f_(e)}function RI(n){return dn(n)&&n.v_.length<10}function SI(n,e){n.v_.push(e);const t=Ut(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function d_(n){return dn(n)&&!Ut(n).Zo()&&n.v_.length>0}function f_(n){Ut(n).start()}async function bI(n){Ut(n).V_()}async function PI(n){const e=Ut(n);for(const t of n.v_)e.d_(t.mutations)}async function NI(n,e,t){const s=n.v_.shift(),i=cl.from(s,e,t);await h_(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Mr(n)}async function kI(n,e){e&&Ut(n).E_&&await async function(s,i){if(function(a){return vw(a)&&a!==P.ABORTED}(i.code)){const r=s.v_.shift();Ut(s).t_(),await h_(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Mr(s)}}(n,e),d_(n)&&f_(n)}async function th(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=dn(t);t.M_.add(3),await ai(t),s&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Vr(t)}async function DI(n,e){const t=W(n);e?(t.M_.delete(2),await Vr(t)):e||(t.M_.add(2),await ai(t),t.N_.set("Unknown"))}function Hn(n){return n.B_||(n.B_=function(t,s,i){const r=W(t);return r.f_(),new gI(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Po:wI.bind(null,n),To:II.bind(null,n),Ao:CI.bind(null,n),h_:AI.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),yl(n)?gl(n):n.N_.set("Unknown")):(await n.B_.stop(),u_(n))})),n.B_}function Ut(n){return n.k_||(n.k_=function(t,s,i){const r=W(t);return r.f_(),new yI(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:bI.bind(null,n),Ao:kI.bind(null,n),R_:PI.bind(null,n),A_:NI.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await Mr(n)):(await n.k_.stop(),n.v_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const a=Date.now()+s,l=new El(e,t,a,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vl(n,e){if(yt("AsyncQueue",`${e}: ${n}`),ii(n))return new V(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.comparator=e?(t,s)=>e(t,s)||M.comparator(t.key,s.key):(t,s)=>M.comparator(t.key,s.key),this.keyedMap=Es(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new Rn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Rn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.q_=new ce(M.comparator)}track(e){const t=e.doc.key,s=this.q_.get(t);s?e.type!==0&&s.type===3?this.q_=this.q_.insert(t,e):e.type===3&&s.type!==1?this.q_=this.q_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.q_=this.q_.remove(t):e.type===1&&s.type===2?this.q_=this.q_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):B():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,s)=>{e.push(s)}),e}}class Ln{constructor(e,t,s,i,r,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,i,r){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Ln(e,t,Rn.emptySet(t),a,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class OI{constructor(){this.queries=new $n(e=>Of(e),Pr),this.onlineState="Unknown",this.z_=new Set}}async function __(n,e){const t=W(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.W_()&&e.G_()&&(s=2):(r=new xI,s=e.G_()?0:1);try{switch(s){case 0:r.K_=await t.onListen(i,!0);break;case 1:r.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=vl(a,`Initialization of query '${vn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,r),r.U_.push(e),e.j_(t.onlineState),r.K_&&e.H_(r.K_)&&Tl(t)}async function p_(n,e){const t=W(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const a=r.U_.indexOf(e);a>=0&&(r.U_.splice(a,1),r.U_.length===0?i=e.G_()?0:1:!r.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function VI(n,e){const t=W(n);let s=!1;for(const i of e){const r=i.query,a=t.queries.get(r);if(a){for(const l of a.U_)l.H_(i)&&(s=!0);a.K_=i}}s&&Tl(t)}function MI(n,e,t){const s=W(n),i=s.queries.get(e);if(i)for(const r of i.U_)r.onError(t);s.queries.delete(e)}function Tl(n){n.z_.forEach(e=>{e.next()})}var aa,sh;(sh=aa||(aa={})).J_="default",sh.Cache="cache";class m_{constructor(e,t,s){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=s||{}}H_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ln(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const s=t!=="Offline";return(!this.options.ra||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Ln.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==aa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.key=e}}class y_{constructor(e){this.key=e}}class LI{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=K(),this.mutatedKeys=K(),this.Ia=Vf(e),this.Ta=new Rn(this.Ia)}get Ea(){return this.la}da(e,t){const s=t?t.Aa:new nh,i=t?t.Ta:this.Ta;let r=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),T=Nr(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let b=!1;m&&T?m.data.isEqual(T.data)?S!==k&&(s.track({type:3,doc:T}),b=!0):this.Ra(m,T)||(s.track({type:2,doc:T}),b=!0,(c&&this.Ia(T,c)>0||h&&this.Ia(T,h)<0)&&(l=!0)):!m&&T?(s.track({type:0,doc:T}),b=!0):m&&!T&&(s.track({type:1,doc:m}),b=!0,(c||h)&&(l=!0)),b&&(T?(a=a.add(T),r=k?r.add(f):r.delete(f)):(a=a.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{Ta:a,Aa:s,Xi:l,mutatedKeys:r}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((f,p)=>function(T,S){const k=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return k(T)-k(S)}(f.type,p.type)||this.Ia(f.doc,p.doc)),this.Va(s),i=i!=null&&i;const l=t&&!i?this.ma():[],c=this.Pa.size===0&&this.current&&!i?1:0,h=c!==this.ha;return this.ha=c,a.length!==0||h?{snapshot:new Ln(this.query,e.Ta,r,a,e.mutatedKeys,c===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new nh,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=K(),this.Ta.forEach(s=>{this.ga(s.key)&&(this.Pa=this.Pa.add(s.key))});const t=[];return e.forEach(s=>{this.Pa.has(s)||t.push(new y_(s))}),this.Pa.forEach(s=>{e.has(s)||t.push(new g_(s))}),t}pa(e){this.la=e.hs,this.Pa=K();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Ln.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class FI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class UI{constructor(e){this.key=e,this.wa=!1}}class BI{constructor(e,t,s,i,r,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new $n(l=>Of(l),Pr),this.Da=new Map,this.Ca=new Set,this.va=new ce(M.comparator),this.Fa=new Map,this.Ma=new dl,this.xa={},this.Oa=new Map,this.Na=Mn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function qI(n,e,t=!0){const s=C_(n);let i;const r=s.ba.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.ya()):i=await E_(s,e,t,!0),i}async function jI(n,e){const t=C_(n);await E_(t,e,!0,!1)}async function E_(n,e,t,s){const i=await uI(n.localStore,ot(e)),r=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(r):"not-current";let l;return s&&(l=await WI(n,e,r,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&l_(n.remoteStore,i),l}async function WI(n,e,t,s,i){n.Ba=(p,m,T)=>async function(k,b,F,j){let U=b.view.da(F);U.Xi&&(U=await Ju(k.localStore,b.query,!1).then(({documents:w})=>b.view.da(w,U)));const z=j&&j.targetChanges.get(b.targetId),Se=j&&j.targetMismatches.get(b.targetId)!=null,ae=b.view.applyChanges(U,k.isPrimaryClient,z,Se);return rh(k,b.targetId,ae.fa),ae.snapshot}(n,p,m,T);const r=await Ju(n.localStore,e,!0),a=new LI(e,r.hs),l=a.da(r.documents),c=oi.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,c);rh(n,t,h.fa);const f=new FI(e,t,a);return n.ba.set(e,f),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),h.snapshot}async function zI(n,e,t){const s=W(n),i=s.ba.get(e),r=s.Da.get(i.targetId);if(r.length>1)return s.Da.set(i.targetId,r.filter(a=>!Pr(a,e))),void s.ba.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await oa(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),t&&pl(s.remoteStore,i.targetId),la(s,i.targetId)}).catch(si)):(la(s,i.targetId),await oa(s.localStore,i.targetId,!0))}async function $I(n,e){const t=W(n),s=t.ba.get(e),i=t.Da.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),pl(t.remoteStore,s.targetId))}async function HI(n,e,t){const s=ZI(n);try{const i=await function(a,l){const c=W(a),h=Ee.now(),f=l.reduce((T,S)=>T.add(S.key),K());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let S=Et(),k=K();return c.os.getEntries(T,f).next(b=>{S=b,S.forEach((F,j)=>{j.isValidDocument()||(k=k.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,S)).next(b=>{p=b;const F=[];for(const j of l){const U=pw(j,p.get(j.key).overlayedDocument);U!=null&&F.push(new Bt(j.key,U,Sf(U.value.mapValue),tt.exists(!0)))}return c.mutationQueue.addMutationBatch(T,h,F,l)}).next(b=>{m=b;const F=b.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(T,b.batchId,F)})}).then(()=>({batchId:m.batchId,changes:Lf(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let h=a.xa[a.currentUser.toKey()];h||(h=new ce(Z)),h=h.insert(l,c),a.xa[a.currentUser.toKey()]=h}(s,i.batchId,t),await li(s,i.changes),await Mr(s.remoteStore)}catch(i){const r=vl(i,"Failed to persist write");t.reject(r)}}async function v_(n,e){const t=W(n);try{const s=await aI(t.localStore,e);e.targetChanges.forEach((i,r)=>{const a=t.Fa.get(r);a&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?se(a.wa):i.removedDocuments.size>0&&(se(a.wa),a.wa=!1))}),await li(t,s,e)}catch(s){await si(s)}}function ih(n,e,t){const s=W(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.ba.forEach((r,a)=>{const l=a.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=W(a);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const m of p.U_)m.j_(l)&&(h=!0)}),h&&Tl(c)}(s.eventManager,e),i.length&&s.Sa.h_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function GI(n,e,t){const s=W(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Fa.get(e),r=i&&i.key;if(r){let a=new ce(M.comparator);a=a.insert(r,Ve.newNoDocument(r,q.min()));const l=K().add(r),c=new xr(q.min(),new Map,new ce(Z),a,l);await v_(s,c),s.va=s.va.remove(r),s.Fa.delete(e),wl(s)}else await oa(s.localStore,e,!1).then(()=>la(s,e,t)).catch(si)}async function KI(n,e){const t=W(n),s=e.batch.batchId;try{const i=await oI(t.localStore,e);w_(t,s,null),T_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await li(t,i)}catch(i){await si(i)}}async function QI(n,e,t){const s=W(n);try{const i=await function(a,l){const c=W(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(se(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(s.localStore,e);w_(s,e,t),T_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await li(s,i)}catch(i){await si(i)}}function T_(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function w_(n,e,t){const s=W(n);let i=s.xa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.xa[s.currentUser.toKey()]=i}}function la(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Da.get(e))n.ba.delete(s),t&&n.Sa.ka(s,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(s=>{n.Ma.containsKey(s)||I_(n,s)})}function I_(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(pl(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),wl(n))}function rh(n,e,t){for(const s of t)s instanceof g_?(n.Ma.addReference(s.key,e),YI(n,s)):s instanceof y_?(O("SyncEngine","Document no longer in limbo: "+s.key),n.Ma.removeReference(s.key,e),n.Ma.containsKey(s.key)||I_(n,s.key)):B()}function YI(n,e){const t=e.key,s=t.path.canonicalString();n.va.get(t)||n.Ca.has(s)||(O("SyncEngine","New document in limbo: "+t),n.Ca.add(s),wl(n))}function wl(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new M(le.fromString(e)),s=n.Na.next();n.Fa.set(s,new UI(t)),n.va=n.va.insert(t,s),l_(n.remoteStore,new St(ot(br(t.path)),s,"TargetPurposeLimboResolution",sl.oe))}}async function li(n,e,t){const s=W(n),i=[],r=[],a=[];s.ba.isEmpty()||(s.ba.forEach((l,c)=>{a.push(s.Ba(c,e,t).then(h=>{if((h||t)&&s.isPrimaryClient){const f=h&&!h.fromCache;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(h){i.push(h);const f=_l.Ki(c.targetId,h);r.push(f)}}))}),await Promise.all(a),s.Sa.h_(i),await async function(c,h){const f=W(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(h,m=>N.forEach(m.qi,T=>f.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>N.forEach(m.Qi,T=>f.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!ii(p))throw p;O("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const T=f.ns.get(m),S=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(S);f.ns=f.ns.insert(m,k)}}}(s.localStore,r))}async function XI(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await i_(t.localStore,e);t.currentUser=e,function(r,a){r.Oa.forEach(l=>{l.forEach(c=>{c.reject(new V(P.CANCELLED,a))})}),r.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await li(t,s.us)}}function JI(n,e){const t=W(n),s=t.Fa.get(e);if(s&&s.wa)return K().add(s.key);{let i=K();const r=t.Da.get(e);if(!r)return i;for(const a of r){const l=t.ba.get(a);i=i.unionWith(l.view.Ea)}return i}}function C_(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=v_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GI.bind(null,e),e.Sa.h_=VI.bind(null,e.eventManager),e.Sa.ka=MI.bind(null,e.eventManager),e}function ZI(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QI.bind(null,e),e}class oh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Or(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return rI(this.persistence,new sI,e.initialUser,this.serializer)}createPersistence(e){return new eI(fl.Hr,this.serializer)}createSharedClientState(e){return new dI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eC{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ih(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=XI.bind(null,this.syncEngine),await DI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OI}()}createDatastore(e){const t=Or(e.databaseInfo.databaseId),s=function(r){return new mI(r)}(e.databaseInfo);return function(r,a,l,c){return new EI(r,a,l,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,i,r,a,l){return new TI(s,i,r,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>ih(this.syncEngine,t,0),function(){return eh.D()?new eh:new fI}())}createSyncEngine(e,t){return function(i,r,a,l,c,h,f){const p=new BI(i,r,a,l,c,h);return f&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(s){const i=W(s);O("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await ai(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):yt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=xe.UNAUTHENTICATED,this.clientId=Cf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{O("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(O("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=vl(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function No(n,e){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await i_(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ah(n,e){n.asyncQueue.verifyOperationInProgress();const t=await sC(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>th(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>th(e.remoteStore,i)),n._onlineComponents=e}function nC(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function sC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await No(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!nC(t))throw t;Dn("Error using user provided cache. Falling back to memory cache: "+t),await No(n,new oh)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await No(n,new oh);return n._offlineComponents}async function R_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await ah(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await ah(n,new eC))),n._onlineComponents}function iC(n){return R_(n).then(e=>e.syncEngine)}async function ca(n){const e=await R_(n),t=e.eventManager;return t.onListen=qI.bind(null,e.syncEngine),t.onUnlisten=zI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$I.bind(null,e.syncEngine),t}function rC(n,e,t={}){const s=new Dt;return n.asyncQueue.enqueueAndForget(async()=>function(r,a,l,c,h){const f=new A_({next:m=>{a.enqueueAndForget(()=>p_(r,p));const T=m.docs.has(l);!T&&m.fromCache?h.reject(new V(P.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&c&&c.source==="server"?h.reject(new V(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new m_(br(l.path),f,{includeMetadataChanges:!0,ra:!0});return __(r,p)}(await ca(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n,e,t){if(!t)throw new V(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function oC(n,e,t,s){if(e===!0&&s===!0)throw new V(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ch(n){if(!M.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function uh(n){if(M.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Il(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B()}function nt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Il(n);throw new V(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new V(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=S_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lr{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hh(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new CT;switch(s.type){case"firstParty":return new bT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new V(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=lh.get(t);s&&(O("ComponentProvider","Removing Datastore"),lh.delete(t),s.terminate())}(this),Promise.resolve()}}function aC(n,e,t,s={}){var i;const r=(n=nt(n,Lr))._getSettings(),a=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==a&&Dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:a,ssl:!1})),s.mockUserToken){let l,c;if(typeof s.mockUserToken=="string")l=s.mockUserToken,c=xe.MOCK_USER;else{l=_a(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=s.mockUserToken.sub||s.mockUserToken.user_id;if(!h)throw new V(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new xe(h)}n._authCredentials=new AT(new If(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Fr(this.firestore,e,this._query)}}class qe{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class xt extends Fr{constructor(e,t,s){super(e,t,br(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new M(e))}withConverter(e){return new xt(this.firestore,e,this._path)}}function NC(n,e,...t){if(n=pe(n),b_("collection","path",e),n instanceof Lr){const s=le.fromString(e,...t);return uh(s),new xt(n,null,s)}{if(!(n instanceof qe||n instanceof xt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(le.fromString(e,...t));return uh(s),new xt(n.firestore,null,s)}}function lC(n,e,...t){if(n=pe(n),arguments.length===1&&(e=Cf.newId()),b_("doc","path",e),n instanceof Lr){const s=le.fromString(e,...t);return ch(s),new qe(n,null,new M(s))}{if(!(n instanceof qe||n instanceof xt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(le.fromString(e,...t));return ch(s),new qe(n.firestore,n instanceof xt?n.converter:null,new M(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new o_(this,"async_queue_retry"),this.hu=()=>{const t=Po();t&&O("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=Po();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=Po();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new Dt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!ii(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(s=>{this.au=s,this.uu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(s);throw yt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.uu=!1,s))));return this.iu=t,t}enqueueAfterDelay(e,t,s){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=El.createAndSchedule(this,e,t,s,r=>this.Eu(r));return this._u.push(i),i}Pu(){this.au&&B()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}function dh(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(n,["next","error","complete"])}class ln extends Lr{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=function(){return new cC}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||P_(this),this._firestoreClient.terminate()}}function uC(n,e){const t=typeof n=="object"?n:va(),s=typeof n=="string"?n:"(default)",i=ya(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=fa("firestore");r&&aC(i,...r)}return i}function Cl(n){return n._firestoreClient||P_(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function P_(n){var e,t,s;const i=n._freezeSettings(),r=function(l,c,h,f){return new qT(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,S_(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new tC(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fn(Me.fromBase64String(e))}catch(t){throw new V(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fn(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=/^__.*__$/;class dC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms):new ri(e,this.data,t,this.fieldTransforms)}}class N_{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function k_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Sl{constructor(e,t,s,i,r,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.mu(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Sl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:s,yu:!1});return i.wu(e),i}Su(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:s,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return dr(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(k_(this.fu)&&hC.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class fC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Or(e)}Fu(e,t,s,i=!1){return new Sl({fu:e,methodName:t,vu:s,path:Ae.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bl(n){const e=n._freezeSettings(),t=Or(n._databaseId);return new fC(n._databaseId,!!e.ignoreUndefinedProperties,t)}function D_(n,e,t,s,i,r={}){const a=n.Fu(r.merge||r.mergeFields?2:0,e,t,i);Pl("Data must be an object, but it was:",a,s);const l=x_(s,a);let c,h;if(r.merge)c=new Qe(a.fieldMask),h=a.fieldTransforms;else if(r.mergeFields){const f=[];for(const p of r.mergeFields){const m=ua(e,p,t);if(!a.contains(m))throw new V(P.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);V_(f,m)||f.push(m)}c=new Qe(f),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new dC(new We(l),c,h)}class Br extends Al{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Br}}function _C(n,e,t,s){const i=n.Fu(1,e,t);Pl("Data must be an object, but it was:",i,s);const r=[],a=We.empty();hn(s,(c,h)=>{const f=Nl(e,c,t);h=pe(h);const p=i.Su(f);if(h instanceof Br)r.push(f);else{const m=qr(h,p);m!=null&&(r.push(f),a.set(f,m))}});const l=new Qe(r);return new N_(a,l,i.fieldTransforms)}function pC(n,e,t,s,i,r){const a=n.Fu(1,e,t),l=[ua(e,s,t)],c=[i];if(r.length%2!=0)throw new V(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)l.push(ua(e,r[m])),c.push(r[m+1]);const h=[],f=We.empty();for(let m=l.length-1;m>=0;--m)if(!V_(h,l[m])){const T=l[m];let S=c[m];S=pe(S);const k=a.Su(T);if(S instanceof Br)h.push(T);else{const b=qr(S,k);b!=null&&(h.push(T),f.set(T,b))}}const p=new Qe(h);return new N_(f,p,a.fieldTransforms)}function qr(n,e){if(O_(n=pe(n)))return Pl("Unsupported field value:",e,n),x_(n,e);if(n instanceof Al)return function(s,i){if(!k_(i.fu))throw i.Du(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(s,i){const r=[];let a=0;for(const l of s){let c=qr(l,i.bu(a));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),a++}return{arrayValue:{values:r}}}(n,e)}return function(s,i){if((s=pe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return cw(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Ee.fromDate(s);return{timestampValue:ur(i.serializer,r)}}if(s instanceof Ee){const r=new Ee(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ur(i.serializer,r)}}if(s instanceof Rl)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Fn)return{bytesValue:Xf(i.serializer,s._byteString)};if(s instanceof qe){const r=i.databaseId,a=s.firestore._databaseId;if(!a.isEqual(r))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:hl(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.Du(`Unsupported field value: ${Il(s)}`)}(n,e)}function x_(n,e){const t={};return Af(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hn(n,(s,i)=>{const r=qr(i,e.pu(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function O_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ee||n instanceof Rl||n instanceof Fn||n instanceof qe||n instanceof Al)}function Pl(n,e,t){if(!O_(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const s=Il(t);throw s==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+s)}}function ua(n,e,t){if((e=pe(e))instanceof Ur)return e._internalPath;if(typeof e=="string")return Nl(n,e);throw dr("Field path arguments must be of type string or ",n,!1,void 0,t)}const mC=new RegExp("[~\\*/\\[\\]]");function Nl(n,e,t){if(e.search(mC)>=0)throw dr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ur(...e.split("."))._internalPath}catch{throw dr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function dr(n,e,t,s,i){const r=s&&!s.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||a)&&(c+=" (found",r&&(c+=` in field ${s}`),a&&(c+=` in document ${i}`),c+=")"),new V(P.INVALID_ARGUMENT,l+n+c)}function V_(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(L_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gC extends M_{data(){return super.data()}}function L_(n,e){return typeof e=="string"?Nl(n,e):e instanceof Ur?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class EC{convertValue(e,t="none"){switch(an(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(on(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw B()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return hn(e,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new Rl(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=rl(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const t=Ft(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=le.fromString(e);se(s_(s));const i=new $s(s.get(1),s.get(3)),r=new M(s.popFirst(5));return i.isEqual(t)||yt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class U_ extends M_{constructor(e,t,s,i,r,a){super(e,t,s,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(L_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class qi extends U_{data(e={}){return super.data(e)}}class vC{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ts(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new qi(this._firestore,this._userDataWriter,s.key,s,new Ts(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const c=new qi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ts(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const c=new qi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ts(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:TC(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function TC(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(n){n=nt(n,qe);const e=nt(n.firestore,ln);return rC(Cl(e),n._key).then(t=>q_(e,n,t))}class B_ extends EC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function DC(n,e,t){n=nt(n,qe);const s=nt(n.firestore,ln),i=F_(n.converter,e);return kl(s,[D_(bl(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,tt.none())])}function xC(n,e,t,...s){n=nt(n,qe);const i=nt(n.firestore,ln),r=bl(i);let a;return a=typeof(e=pe(e))=="string"||e instanceof Ur?pC(r,"updateDoc",n._key,e,t,s):_C(r,"updateDoc",n._key,e),kl(i,[a.toMutation(n._key,tt.exists(!0))])}function OC(n,e){const t=nt(n.firestore,ln),s=lC(n),i=F_(n.converter,e);return kl(t,[D_(bl(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,tt.exists(!1))]).then(()=>s)}function VC(n,...e){var t,s,i;n=pe(n);let r={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||dh(e[a])||(r=e[a],a++);const l={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(dh(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(s=p.error)===null||s===void 0?void 0:s.bind(p),e[a+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,h,f;if(n instanceof qe)h=nt(n.firestore,ln),f=br(n._key.path),c={next:p=>{e[a]&&e[a](q_(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=nt(n,Fr);h=nt(p.firestore,ln),f=p._query;const m=new B_(h);c={next:T=>{e[a]&&e[a](new vC(h,m,p,T))},error:e[a+1],complete:e[a+2]},yC(n._query)}return function(m,T,S,k){const b=new A_(k),F=new m_(T,b,S);return m.asyncQueue.enqueueAndForget(async()=>__(await ca(m),F)),()=>{b.$a(),m.asyncQueue.enqueueAndForget(async()=>p_(await ca(m),F))}}(Cl(h),f,l,c)}function kl(n,e){return function(s,i){const r=new Dt;return s.asyncQueue.enqueueAndForget(async()=>HI(await iC(s),i,r)),r.promise}(Cl(n),e)}function q_(n,e,t){const s=t.docs.get(e._key),i=new B_(n);return new U_(n,i,e._key,s,new Ts(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){zn=i})(Ea),bn(new Jt("firestore",(s,{instanceIdentifier:i,options:r})=>{const a=s.getProvider("app").getImmediate(),l=new ln(new RT(s.getProvider("auth-internal")),new NT(s.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new V(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $s(h.options.projectId,f)}(a,i),a);return r=Object.assign({useFetchStreams:t},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),rt(Du,"4.6.3",e),rt(Du,"4.6.3","esm2017")})();const wC={apiKey:"AIzaSyAcbJYY5cCHWPyf1u62eq-UIpbrMtWLaEE",authDomain:"cs490ap.firebaseapp.com",databaseURL:"https://cs490ap-default-rtdb.firebaseio.com",projectId:"cs490ap",storageBucket:"cs490ap.appspot.com",messagingSenderId:"216777373794",appId:"1:216777373794:web:f3eea8a98ea038fb79393b",measurementId:"G-SGN59VKKS6"},Dl=Ah(wC),j_=uy(Dl);function MC(){const n=uC(Dl);return console.log(n),n}async function LC(n){if(n){const e=Kh(j_,"uploads/"+n.name),t={contentType:n.type};ly(e,n,t)}}async function FC(n){const e=Kh(j_,n),t=await cy(e);console.log(t);const i=await(await fetch(t)).blob(),r=document.createElement("a");r.href=URL.createObjectURL(i),r.download=n.split("/").pop(),document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(r.href)}function IC(n){const e=TT(Dl),t=`/canvas/${n}/stroke`;return uT(e,t)}function UC(n,e){const t=IC(e);hT(t,n).then(()=>console.log("Value updated successfully")).catch(s=>console.error(s))}export{OC as a,lC as b,NC as c,FC as d,xC as e,UC as f,kC as g,RC as h,IC as i,AC as j,VC as o,MC as r,DC as s,LC as u};
