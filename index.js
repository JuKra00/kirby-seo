(function(){"use strict";const Q="";function c(s,e,t,i,r,n,_,u){var a=typeof s=="function"?s.options:s;e&&(a.render=e,a.staticRenderFns=t,a._compiled=!0),i&&(a.functional=!0),n&&(a._scopeId="data-v-"+n);var l;if(_?(l=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__<"u"&&(o=__VUE_SSR_CONTEXT__),r&&r.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(_)},a._ssrRegister=l):r&&(l=u?function(){r.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(a.functional){a._injectStyles=l;var J=a.render;a.render=function(K,v){return l.call(v),J(K,v)}}else{var p=a.beforeCreate;a.beforeCreate=p?[].concat(p,l):[l]}return{exports:s,options:a}}const d={data(){return{label:null,value:null,isLoading:!0}},created(){this.isLoading=!0,this.load().then(s=>{this.label=s.label}),this.handleLoad(),this.debouncedLoad=this.$helper.debounce(s=>{this.handleLoad(s)},200)},computed:{changes(){return this.$store.getters["content/changes"]()},incorrectOrder(){var s;return(s=this.value)==null?void 0:s.some((e,t)=>{var i;return e.level>(((i=this.value[t-1])==null?void 0:i.level)??0)+1})},multipleH1(){var s;return((s=this.value)==null?void 0:s.filter(e=>e.level===1).length)>1},noH1(){var s;return((s=this.value)==null?void 0:s.filter(e=>e.level===1).length)===0}},methods:{async handleLoad(s){this.isLoading=!0;const e=this.parent.toString().split("/").pop(),t=await this.$api.post(`/k-seo/${e}/heading-structure`,s??this.changes);this.value=t,this.isLoading=!1},itemInvalid(s,e){var t;return!!(s.level>(((t=this.value[e-1])==null?void 0:t.level)??0)+1||s.level===1&&this.value[e-1]||s.level===1&&this.value.filter(i=>i.level===1).length>1)}},watch:{changes(s){this.debouncedLoad(s)}}};var g=function(){var e=this,t=e._self._c;return e.value?t("div",{staticClass:"k-heading-structure"},[t("div",{staticClass:"k-heading-structure-label k-field-label"},[t("k-icon",{attrs:{type:"headline"}}),t("span",[e._v(e._s(e.label||e.$t("heading-structure")))]),e.isLoading?t("k-loader"):e._e()],1),t("k-box",{attrs:{theme:""}},[t("ol",{staticClass:"k-heading-structure-list"},e._l(e.value,function(i,r){return t("li",{key:r,class:`k-heading-structure-item level-${i.level} ${e.itemInvalid(i,r)?"is-invalid":""}`,style:`z-index: ${e.value.length-r}`},[t("span",{staticClass:"k-heading-structure-item-level"},[e._v("H"+e._s(i.level))]),t("span",{staticClass:"k-heading-structure-item-text"},[e._v(e._s(i.text))])])}),0)]),e.incorrectOrder&&!e.noH1?t("k-box",{staticClass:"k-heading-structure-notice",attrs:{theme:"negative"}},[t("k-icon",{attrs:{type:"alert"}}),t("k-text",[e._v(e._s(e.$t("incorrect-heading-order")))])],1):e._e(),e.multipleH1?t("k-box",{staticClass:"k-heading-structure-notice",attrs:{theme:"negative"}},[t("k-icon",{attrs:{type:"alert"}}),t("k-text",[e._v(e._s(e.$t("multiple-h1-tags")))])],1):e._e(),e.noH1?t("k-box",{staticClass:"k-heading-structure-notice",attrs:{theme:"negative"}},[t("k-icon",{attrs:{type:"alert"}}),t("k-text",[e._v(e._s(e.$t("missing-h1-tag")))])],1):e._e()],1):e._e()},h=[],f=c(d,g,h,!1,null,null,null,null);const k=f.exports,m=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),Y="",w={props:{ogTitle:String,url:String,ogDescription:String,ogImage:String},computed:{host(){return new URL(this.url).host}}};var b=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"k-facebook-preview"},[e.ogImage?t("div",{staticClass:"k-facebook-preview__image"},[t("img",{staticClass:"k-facebook-preview__img",attrs:{src:e.ogImage}})]):e._e(),t("div",{staticClass:"k-facebook-preview__content"},[t("span",{staticClass:"k-facebook-preview__url"},[e._v(e._s(e.host))]),t("span",{staticClass:"k-facebook-preview__title"},[e._v(e._s(e.ogTitle))]),t("p",{staticClass:"k-facebook-preview__description"},[e._v(e._s(e.ogDescription))])])]),t("a",{staticClass:"k-seo-preview__debugger",attrs:{href:"https://developers.facebook.com/tools/debug/","aria-label":"Facebook Sharing Debugger",target:"_blank",rel:"noopener noreferrer"}},[e._v(" "+e._s(e.$t("open-debugger"))+" "),t("k-icon",{attrs:{type:"open"}})],1)])},y=[],C=c(w,b,y,!1,null,null,null,null);const $=C.exports,Z="",S={props:{title:String,url:String,description:String},computed:{origin(){return new URL(this.url).origin},breadcrumbs(){return this.url.split("/").slice(3)}}};var x=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"k-google-search-preview"},[t("span",{staticClass:"k-google-search-preview__url"},[t("span",[e._v(e._s(e.origin))]),e._l(e.breadcrumbs,function(i,r){return t("span",{key:r,staticClass:"k-google-search-preview__url__breadcrumb"},[e._v(" "+e._s(i)+" ")])})],2),t("h2",{staticClass:"k-google-search-preview__headline"},[e._v(e._s(e.title))]),t("p",{staticClass:"k-google-search-preview__paragraph"},[e._v(" "+e._s(e.description)+" ")])]),t("a",{staticClass:"k-seo-preview__debugger",attrs:{href:"https://search.google.com/search-console","aria-label":"Google Search Console",target:"_blank",rel:"noopener noreferrer"}},[e._v(" "+e._s(e.$t("open-search-console"))+" "),t("k-icon",{attrs:{type:"open"}})],1)])},L=[],T=c(S,x,L,!1,null,null,null,null);const I=T.exports,ee="",O={props:{ogTitle:String,url:String,ogDescription:String,twitterCardType:String,ogImage:String},computed:{host(){return new URL(this.url).host}}};var R=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"k-twitter-preview",class:{"is-horizontal":e.twitterCardType!=="summary_large_image"||!e.ogImage}},[t("div",{staticClass:"k-twitter-preview__image"},[t("img",{staticClass:"k-twitter-preview__img",class:{"is-hidden":!e.ogImage},attrs:{src:e.ogImage}})]),t("div",{staticClass:"k-twitter-preview__content"},[t("span",{staticClass:"k-twitter-preview__url"},[e._v(e._s(e.host))]),t("span",{staticClass:"k-twitter-preview__title"},[e._v(e._s(e.ogTitle))]),t("p",{staticClass:"k-twitter-preview__description"},[e._v(e._s(e.ogDescription))])])]),e.twitterCardType==="summary_large_image"&&!e.ogImage?t("k-box",{staticClass:"k-twitter-preview-notice",attrs:{theme:"info"}},[t("k-icon",{attrs:{type:"alert"}}),t("k-text",[e._v(e._s(e.$t("twitter-card-type-not-respected")))])],1):e._e(),t("a",{staticClass:"k-seo-preview__debugger",attrs:{href:"https://cards-dev.twitter.com/validator","aria-label":"Twitter Card Validator",target:"_blank",rel:"noopener noreferrer"}},[e._v(" "+e._s(e.$t("open-debugger"))+" "),t("k-icon",{attrs:{type:"open"}})],1)],1)},P=[],F=c(O,R,P,!1,null,null,null,null);const D=F.exports,te="",j={props:{ogTitle:String,ogSiteName:String,ogDescription:String,ogImage:String},computed:{origin(){return new URL(this.url).origin}}};var z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"k-slack-preview"},[t("div",{staticClass:"k-slack-preview__content"},[t("div",{staticClass:"k-slack-preview__site-name"},[e._v(e._s(e.ogSiteName||e.origin))]),t("span",{staticClass:"k-slack-preview__title"},[e._v(e._s(e.ogTitle))]),t("p",{staticClass:"k-slack-preview__description"},[e._v(e._s(e.ogDescription))])]),e.ogImage?t("div",{staticClass:"k-slack-preview__image"},[t("img",{attrs:{src:e.ogImage}})]):e._e()])},H=[],U=c(j,z,H,!1,null,null,null,null);const N=U.exports,se="",A={components:{GooglePreview:I,TwitterPreview:D,FacebookPreview:$,SlackPreview:N},data(){return{label:null,value:null,isLoading:!0,type:localStorage.getItem("kSEOPreviewType")??"google"}},created(){this.isLoading=!0,this.load().then(s=>{this.label=s.label}),this.handleLoad(),this.debouncedLoad=this.$helper.debounce(s=>{this.handleLoad(s)},200)},computed:{changes(){return this.$store.getters["content/changes"]()},options(){return[{value:"google",text:"Google"},{value:"twitter",text:"Twitter"},{value:"facebook",text:"Facebook"},{value:"slack",text:"Slack"}]}},methods:{async handleLoad(s){this.isLoading=!0;const e=this.parent.toString().split("/").pop(),t=await this.$api.post(`/k-seo/${e}/seo-preview`,s??this.changes);this.value=t,this.isLoading=!1}},watch:{changes(s){this.debouncedLoad(s)},type(){localStorage.setItem("kSEOPreviewType",this.type)}}};var E=function(){var e=this,t=e._self._c;return t("div",{staticClass:"k-seo-preview"},[t("div",{staticClass:"k-seo-preview__label k-field-label"},[t("k-icon",{attrs:{type:"preview"}}),t("span",[e._v(e._s(e.label||e.$t("seo-preview")))]),e.isLoading?t("k-loader"):e._e()],1),t("k-select-field",{attrs:{type:"select",before:e.$t("seo-preview-for"),options:e.options,empty:!1},model:{value:e.type,callback:function(i){e.type=i},expression:"type"}}),e.value?t("div",{staticClass:"k-seo-preview__inner"},[e.type==="google"?t("google-preview",e._b({},"google-preview",e.value,!1)):e._e(),e.type==="twitter"?t("twitter-preview",e._b({},"twitter-preview",e.value,!1)):e._e(),e.type==="facebook"?t("facebook-preview",e._b({},"facebook-preview",e.value,!1)):e._e(),e.type==="slack"?t("slack-preview",e._b({},"slack-preview",e.value,!1)):e._e()],1):e._e()],1)},G=[],V=c(A,E,G,!1,null,null,null,null);const q=V.exports,M=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),X=Object.freeze({import(s){return Object.entries(s).reduce((t,[i,r])=>(t[W(i)]=r.default,t),{})}});function W(s){return s.substring(s.lastIndexOf("/")+1,s.lastIndexOf(".")).toLowerCase()}const B=()=>({extends:"k-page-view",async mounted(){await this.handleLoad()},computed:{changes(){return this.$store.getters["content/changes"]()}},watch:{changes(s){(Object.keys(s).some(e=>e.includes("robots"))||this.dirty)&&(this.dirty=!1,this.handleLoad(s),s&&(this.dirty=!0))}},methods:{async handleLoad(s){if(!this.tabs.some(n=>n.name==="seo"))return;const e=this.model.id.replaceAll("/","+"),t=await this.$api.post(`/k-seo/${e}/robots`,s??this.changes);if(!t.active)return;const i=this.$el.querySelector(".k-button.k-status-icon");i.setAttribute("data-robots",t.state);let r=this.$t("indicator-index");t.state.includes("no")&&(r=this.$t("indicator-any")),t.state.includes("noindex")&&(r=this.$t("indicator-noindex")),i.setAttribute("data-robots-label",r),document.querySelectorAll(".k-toggles-text").forEach(n=>{if(n.textContent.includes("page:")){const _=n.textContent.split("page:")[1];let u=this.$t("yes");t.defaults.includes(`no${_}`)&&(u=this.$t("no")),n.textContent=n.textContent.replace(`page:${_}`,u)}})}}}),ie="";panel.plugin("tobimori/seo",{sections:X.import(Object.assign({"./sections/heading-structure.vue":m,"./sections/seo-preview.vue":M})),components:{"k-page-view":B()}})})();
