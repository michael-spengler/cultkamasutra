(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10e7ab0d"],{2706:function(t,e,i){},"2d03":function(t,e,i){"use strict";i("2706")},8021:function(t,e,i){"use strict";i("decc")},8639:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sk-header",class:{"sk-header__enhanced":t.enhanced,"sk-header__dark":t.dark}},[i("div",{staticClass:"sk-header--container",class:{dark:t.$store.getters.darkmode}},[t._v(" "+t._s(t.title)+" ")]),t.isRoot?t._e():i("router-link",{attrs:{to:{name:t.rootRoute}}},[i("i",{staticClass:"ti-chevron-left"}),t._v(" "+t._s(t.backTitle)+" ")]),i("div",{staticClass:"slot"},[t._t("default")],2)],1)},o=[],s=i("d4ec"),n=i("bee2"),c=i("262e"),r=i("2caf"),l=(i("b0c0"),i("9ab4")),d=i("60a3"),u=function(t){Object(c["a"])(i,t);var e=Object(r["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.TRIGGER=t.trigger,t.enhanced=window.scrollY>t.TRIGGER,t}return Object(n["a"])(i,[{key:"isRoot",get:function(){return this.$route.name===this.rootRoute}},{key:"mounted",value:function(){window.addEventListener("scroll",this.scroll)}},{key:"beforeDestroy",value:function(){window.removeEventListener("scroll",this.scroll)}},{key:"scroll",value:function(){this.enhanced=window.scrollY>this.TRIGGER}}]),i}(d["d"]);Object(l["a"])([Object(d["c"])()],u.prototype,"title",void 0),Object(l["a"])([Object(d["c"])()],u.prototype,"rootRoute",void 0),Object(l["a"])([Object(d["c"])()],u.prototype,"backTitle",void 0),Object(l["a"])([Object(d["c"])({default:150})],u.prototype,"trigger",void 0),Object(l["a"])([Object(d["c"])()],u.prototype,"dark",void 0),u=Object(l["a"])([d["a"]],u);var p=u,v=p,m=(i("8021"),i("2877")),f=Object(m["a"])(v,a,o,!1,null,"047c8591",null);e["a"]=f.exports},decc:function(t,e,i){},e7d2:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"view-positions-detail"},[i("SKHeader",{attrs:{backTitle:this.$route.meta.prev.title(),rootRoute:this.$route.meta.prev.name,title:t.title||"Details",trigger:180}},[i("tc-button",{attrs:{variant:"opaque",color:"#111",background:"#fff",icon:"share"},on:{click:t.share}})],1),t.position?[i("div",{staticClass:"detail-hero",class:{dark:t.$store.getters.darkmode}},[i("div",{staticClass:"image-container"},[i("img",{attrs:{src:"assets/positions/"+t.position.thumbnail,alt:""}})]),i("div",{staticClass:"overlay"},[i("tl-grid",{attrs:{minWidth:"100",gap:"0"}},[i("tc-button",{attrs:{variant:t.liked&&"filled",background:t.liked?"#fff":"#aaa",color:"#111",name:t.liked?"Liked":"Like",icon:t.liked?"heart":"heart-empty"},on:{click:t.like}}),i("tc-button",{attrs:{variant:t.completed&&"filled",background:t.completed?"#fff":"#aaa",color:"#111",name:t.completed?"Completed":"Complete",icon:t.completed&&"checkmark"},on:{click:t.complete}})],1)],1)]),i("div",{attrs:{content:""}},[i("h1",{attrs:{center:""}},[t._v(t._s(t.$getText("position."+t.id+".title")))]),i("div",{staticClass:"information-wrapper",class:{dark:t.$store.getters.darkmode}},[i("div",{staticClass:"information"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.$getText("general.position-detail.Level","Level"))+" ")]),i("div",{staticClass:"icon"},[t._v(" "+t._s(t.position.level)+" ")]),i("div",{staticClass:"description"},[t._v(" "+t._s(t.$getText("general.position-detail.out-of","out of"))+" 3 ")])]),i("div",{staticClass:"information"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.$getText("general.position-detail.Intimacy","Intimacy"))+" ")]),i("div",{staticClass:"icon"},[t._v(" "+t._s(t.position.intimacy)+" ")]),i("div",{staticClass:"description"},[t._v(" "+t._s(t.$getText("general.position-detail.out-of","out of"))+" 3 ")])]),i("router-link",{directives:[{name:"group",rawName:"v-group.admin.moderator",modifiers:{admin:!0,moderator:!0}}],staticClass:"information",attrs:{tag:"div",to:{name:"edit-position",params:{id:t.position._id}}}},[i("div",{staticClass:"title"},[t._v("Edit")]),i("div",{staticClass:"icon"},[i("i",{staticClass:"ti-pencil"})]),i("div",{staticClass:"description"},[t._v("position")])])],1),i("p",[t._v(t._s(t.$getText("position."+t.id+".description")))]),i("tc-divider",{attrs:{dark:t.$store.getters.darkmode}}),i("h3",{attrs:{center:""}},[t._v(" "+t._s(t.$getText("general.position-detail.training-effect","Training Effect"))+" ")]),i("tl-grid",{attrs:{gap:"20"}},[i("div",{staticClass:"sex"},[i("div",{staticClass:"muscles"},[i("p",{attrs:{center:""}},[t._v(" "+t._s(t.musclesWoman)+" ")])]),i("tl-flow",{staticClass:"image-wrapper",attrs:{horizontal:"space-around"}},[i("SKBodyFrontMale",{attrs:{primary:t.position.primaryMusclesMan,secondary:t.position.secondaryMusclesMan}}),i("SKBodyBackMale",{attrs:{primary:t.position.primaryMusclesMan,secondary:t.position.secondaryMusclesMan}})],1)],1),i("div",{staticClass:"sex"},[i("div",{staticClass:"muscles"},[i("p",{attrs:{center:""}},[t._v(" "+t._s(t.musclesMan)+" ")])]),i("tl-flow",{staticClass:"image-wrapper",attrs:{horizontal:"space-around"}},[i("SKBodyFrontFemale",{attrs:{primary:t.position.primaryMusclesWoman,secondary:t.position.secondaryMusclesWoman}}),i("SKBodyBackFemale",{attrs:{primary:t.position.primaryMusclesWoman,secondary:t.position.secondaryMusclesWoman}})],1)],1)])],1)]:i("div",[t._v("Loading")])],2)},o=[],s=i("2909"),n=i("d4ec"),c=i("bee2"),r=i("262e"),l=i("2caf"),d=(i("a15b"),i("99af"),i("9ab4")),u=i("8639"),p=i("60a3"),v=i("a0aa"),m=i("6f36"),f=i("4561"),h=i("2e3e"),y=i("b3e7"),k=i("e0d7"),b=function(t){Object(r["a"])(i,t);var e=Object(l["a"])(i);function i(){var t;return Object(n["a"])(this,i),t=e.apply(this,arguments),t.position=null,t}return Object(c["a"])(i,[{key:"mounted",value:function(){this.loadPosition()}},{key:"loadPosition",value:function(){var t=this;this.position=this.$store.getters.position(this.id),this.position||setTimeout((function(){t.loadPosition()}),200)}},{key:"title",get:function(){if(this.position)return Object(k["a"])("position.".concat(this.id,".title"))}},{key:"id",get:function(){return this.$route.params.id}},{key:"musclesMan",get:function(){return this.position?[].concat(Object(s["a"])(this.position.primaryMusclesMan),Object(s["a"])(this.position.secondaryMusclesMan)).join(", "):""}},{key:"musclesWoman",get:function(){return this.position?[].concat(Object(s["a"])(this.position.primaryMusclesWoman),Object(s["a"])(this.position.secondaryMusclesWoman)).join(", "):""}},{key:"liked",get:function(){return Object(y["e"])(this.id)}},{key:"completed",get:function(){return Object(y["d"])(this.id)}},{key:"like",value:function(){Object(y["f"])(this.id)}},{key:"complete",value:function(){Object(y["a"])(this.id)}},{key:"share",value:function(){if(this.position){var t=window.location.href,e={title:"SportKamasutra",text:Object(k["a"])("position.".concat(this.id,".title")),url:t};try{navigator.share(e).then((function(){})).catch(this.copyToClip)}catch(i){this.copyToClip()}}}},{key:"copyToClip",value:function(){Object(y["b"])(window.location.href),this.$store.commit("sendNotification",{text:window.location.href,title:"Copied URL to your clipboard"})}}]),i}(p["d"]);b=Object(d["a"])([Object(p["a"])({components:{SKHeader:u["a"],SKBodyFrontMale:v["a"],SKBodyFrontFemale:m["a"],SKBodyBackMale:f["a"],SKBodyBackFemale:h["a"]}})],b);var g=b,_=g,j=(i("2d03"),i("2877")),C=Object(j["a"])(_,a,o,!1,null,"3b1fd4d3",null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-10e7ab0d.23896008.js.map