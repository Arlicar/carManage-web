require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["managePages/fixRecord/fixDetail/fixDetail"],{409:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/16488/Desktop/demo/carManage_final_3.0/main.js?{"page":"managePages%2FfixRecord%2FfixDetail%2FfixDetail"} ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){n(/*! uni-pages */5);r(n(/*! vue */2));var t=r(n(/*! ./managePages/fixRecord/fixDetail/fixDetail.vue */410));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createPage"])},410:
/*!*****************************************************************************************************!*\
  !*** C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/fixRecord/fixDetail/fixDetail.vue ***!
  \*****************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./fixDetail.vue?vue&type=template&id=04dbc3a6& */411),a=n(/*! ./fixDetail.vue?vue&type=script&lang=js& */413);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n(/*! ./fixDetail.vue?vue&type=style&index=0&lang=css& */415);var o,u=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */11),c=Object(u["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],o);c.options.__file="managePages/fixRecord/fixDetail/fixDetail.vue",t["default"]=c.exports},411:
/*!************************************************************************************************************************************!*\
  !*** C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/fixRecord/fixDetail/fixDetail.vue?vue&type=template&id=04dbc3a6& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";n.r(t);var r=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./fixDetail.vue?vue&type=template&id=04dbc3a6& */412);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},412:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/fixRecord/fixDetail/fixDetail.vue?vue&type=template&id=04dbc3a6& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=!1,o=[];a._withStripped=!0},413:
/*!******************************************************************************************************************************!*\
  !*** C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/fixRecord/fixDetail/fixDetail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var r=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./fixDetail.vue?vue&type=script&lang=js& */414),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},414:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/fixRecord/fixDetail/fixDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLoad:function(e){console.log("onload"),this.repairId=e.repairId,this.getRepairDetail()},data:function(){return{repairId:"",name:this.$store.state.userInfo.name,no:this.$store.state.userInfo.no,position:this.$store.state.userInfo.position,surveyTime:"",repairLicense:"",repairMsg:"",vetNo:""}},methods:{getRepairDetail:function(){var t=this;e.request({url:t.apiServer+"/api/get/getDetail/repair",method:"POST",header:{"content-type":"application/x-www-form-urlencoded",enctype:"multipart/form-data"},data:{repairId:t.repairId},success:function(e){console.log(e.data.data),t.surveyTime=e.data.data.surveyTime,t.repairLicense=e.data.data.repairLicense,t.repairMsg=e.data.data.repairMsg,t.vetNo=e.data.data.vetNo},fail:function(e){console.log("发生了错误")}})}}};t.default=n}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},415:
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/fixRecord/fixDetail/fixDetail.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var r=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./fixDetail.vue?vue&type=style&index=0&lang=css& */416),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},416:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/fixRecord/fixDetail/fixDetail.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){}},[[409,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/managePages/fixRecord/fixDetail/fixDetail.js.map