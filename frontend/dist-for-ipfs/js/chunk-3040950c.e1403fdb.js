(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3040950c"],{"07ac":function(e,t,n){var a=n("23e7"),r=n("6f53").values;a({target:"Object",stat:!0},{values:function(e){return r(e)}})},"1ec3":function(e,t,n){"use strict";n("998a")},"4fadc":function(e,t,n){var a=n("23e7"),r=n("6f53").entries;a({target:"Object",stat:!0},{entries:function(e){return r(e)}})},"6f53":function(e,t,n){var a=n("83ab"),r=n("e330"),i=n("df75"),s=n("fc6a"),l=n("d1e7").f,c=r(l),o=r([].push),u=function(e){return function(t){var n,r=s(t),l=i(r),u=l.length,d=0,p=[];while(u>d)n=l[d++],a&&!c(r,n)||o(p,e?[n,r[n]]:r[n]);return p}};e.exports={entries:u(!0),values:u(!1)}},"998a":function(e,t,n){},bef9:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{key:e.compID,staticClass:"view-language-details",attrs:{content:""}},[e.language?n("div",{attrs:{"max-width":""}},[n("tl-flow",{staticClass:"head"},[n("div",{staticClass:"flag"},[n("img",{attrs:{src:"assets/flags/"+e.language.file+".svg",alt:""}})]),n("div",{staticClass:"name"},[e._v(e._s(e.language.title)+" ("+e._s(e.language.short)+")")])]),n("tc-divider",{attrs:{dark:e.$store.getters.darkmode}}),n("br"),n("tc-segments",{attrs:{dark:e.$store.getters.darkmode},on:{input:e.reset},model:{value:e.segment,callback:function(t){e.segment=t},expression:"segment"}},[n("tc-segment-item",{attrs:{title:"General"}}),n("tc-segment-item",{attrs:{title:"UI Elements"}}),n("tc-segment-item",{attrs:{title:"Position"}})],1),n("br"),0===e.segment?n("div",[n("h2",[e._v("General")]),e._l(Object.keys(e.generalElement),(function(t){return n("tc-revealer",{key:t,attrs:{title:t,dark:e.$store.getters.darkmode}},[e._l(Object.values(e.generalElement[t]),(function(a,r){return n("tc-input",{key:a+t+r,attrs:{title:Object.keys(e.generalElement[t])[r],placeholder:e.$getText(a.key,"~"+a.key,e.langId),dark:e.$store.getters.darkmode},model:{value:e.generalElement[t][Object.keys(e.generalElement[t])[r]].value,callback:function(n){e.$set(e.generalElement[t][Object.keys(e.generalElement[t])[r]],"value",n)},expression:"generalElement[n][Object.keys(generalElement[n])[i]].value"}})})),n("br"),n("tc-button",{attrs:{variant:"filled",tfbackground:"success",name:"update",icon:"cloud-upload"},on:{click:function(n){return e.updateGeneral(t)}}})],2)}))],2):e._e(),1===e.segment?n("div",[n("h2",[e._v("UI Elements")]),e._l(Object.keys(e.uiElement),(function(t){return n("tc-revealer",{key:t,attrs:{title:t,dark:e.$store.getters.darkmode}},[e._l(Object.values(e.uiElement[t]),(function(a,r){return n("tc-input",{key:a+t+r,attrs:{title:Object.keys(e.uiElement[t])[r],placeholder:e.$getText(a.key,"~"+a.key,e.langId),dark:e.$store.getters.darkmode},model:{value:e.uiElement[t][Object.keys(e.uiElement[t])[r]].value,callback:function(n){e.$set(e.uiElement[t][Object.keys(e.uiElement[t])[r]],"value",n)},expression:"uiElement[n][Object.keys(uiElement[n])[i]].value"}})})),n("br"),n("tc-button",{attrs:{variant:"filled",tfbackground:"success",name:"update",icon:"cloud-upload"},on:{click:function(n){return e.updateUI(t)}}})],2)}))],2):e._e(),2===e.segment?n("div",[e.selectedPosition?[n("tl-flow",{attrs:{horizontal:"space-between"}},[n("h2",[e._v("Position")]),n("tc-link",{on:{click:e.openSelectPosition}},[e._v("other position")])],1),n("br"),n("tc-input",{attrs:{title:"Title",dark:e.$store.getters.darkmode,placeholder:e.selectedPosition.title},model:{value:e.newTitle,callback:function(t){e.newTitle=t},expression:"newTitle"}}),n("br"),n("tc-textarea",{attrs:{title:"Description",dark:e.$store.getters.darkmode,placeholder:e.selectedPosition.description},model:{value:e.newDescription,callback:function(t){e.newDescription=t},expression:"newDescription"}}),n("br"),n("tl-grid",{attrs:{"max-width":""}},[n("tc-button",{attrs:{name:"Update translation",icon:"cloud-upload",variant:"filled",tfbackground:"success"},on:{click:e.updatePosition}})],1)]:[n("h2",[e._v("Position")]),n("br"),n("tc-button",{attrs:{variant:"filled",name:"Select a position"},on:{click:e.openSelectPosition}})]],2):e._e()],1):e._e()])},r=[];function i(e){if(Array.isArray(e))return e}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(a=n.next()).done);s=!0)if(i.push(a.value),t&&i.length===t)break}catch(c){l=!0,r=c}finally{try{s||null==n["return"]||n["return"]()}finally{if(l)throw r}}return i}}var l=n("06c5");n("d9e2");function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){return i(e)||s(e,t)||Object(l["a"])(e,t)||c()}var u=n("c7eb"),d=n("1da1"),p=n("d4ec"),f=n("bee2"),g=n("262e"),v=n("2caf"),b=(n("4fadc"),n("07ac"),n("159b"),n("4de4"),n("9ab4")),h=n("78b1"),m=n("9613"),k=n("ef15"),y=n("60a3"),w=function(e){Object(g["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.segment=1,e.selectedPosition=null,e.newTitle="",e.newDescription="",e.uiElement=m["c"],e.generalElement=m["b"],e.compID="1704",e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=Object(d["a"])(Object(u["a"])().mark((function e(){var t,n,a=this;return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return k["a"].$on("sk-select-position-return",(function(e){a.selectedPosition=a.$store.getters.position(e)})),e.next=3,h["a"].get("lang/"+this.langId);case 3:t=e.sent,n=t.data,n&&n.data&&(this.$store.commit("langLoadedNAS",n),this.compID="1705");case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"langId",get:function(){return this.$route.params.id}},{key:"reset",value:function(){this.newTitle="",this.newDescription=""}},{key:"openSelectPosition",value:function(){k["a"].$emit("sk-select-position")}},{key:"updatePosition",value:function(){var e=Object(d["a"])(Object(u["a"])().mark((function e(){var t,n,a;return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.langId,this.newTitle.length>0&&h["a"].put("lang/update/"+t,{key:"position."+(null===(n=this.selectedPosition)||void 0===n?void 0:n._id)+".title",value:this.newTitle}),this.newDescription.length>0&&h["a"].put("lang/update/"+t,{key:"position."+(null===(a=this.selectedPosition)||void 0===a?void 0:a._id)+".description",value:this.newDescription});case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"updateUI",value:function(){var e=Object(d["a"])(Object(u["a"])().mark((function e(t){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.update(t,this.uiElement);case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateGeneral",value:function(){var e=Object(d["a"])(Object(u["a"])().mark((function e(t){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.update(t,this.generalElement);case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(d["a"])(Object(u["a"])().mark((function e(t,n){var a,r,i,s,l,c,d;return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(a=[],r=0,i=Object.entries(n);r<i.length;r++)s=o(i[r],2),l=s[0],c=s[1],l===t&&(a=Object.values(c));d=this.langId,a.filter((function(e){return 0!==e.value.length})).forEach((function(e){h["a"].put("lang/update/"+d,e),e.value=""}));case 4:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"languages",get:function(){return this.$store.getters.langs}},{key:"language",get:function(){var e=this,t=this.languages.filter((function(t){return t._id===e.langId}));return t&&t.length>0?t[0]:(this.$router.push({name:"languages"}),this.languages[0])}}]),n}(y["d"]);w=Object(b["a"])([y["a"]],w);var j=w,O=j,E=(n("1ec3"),n("2877")),_=Object(E["a"])(O,a,r,!1,null,"01fa832a",null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-3040950c.e1403fdb.js.map