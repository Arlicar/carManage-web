require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["managePages/declareRecord/declareRecord"],{377:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/16488/Desktop/demo/carManage_final_3.0/main.js?{"page":"managePages%2FdeclareRecord%2FdeclareRecord"} ***!
  \**********************************************************************************************************************/
/*! no static exports found */function(n,e,t){"use strict";(function(n){t(/*! uni-pages */5);r(t(/*! vue */2));var e=r(t(/*! ./managePages/declareRecord/declareRecord.vue */378));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createPage"])},378:
/*!***************************************************************************************************!*\
  !*** C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/declareRecord/declareRecord.vue ***!
  \***************************************************************************************************/
/*! no static exports found */function(n,e,t){"use strict";t.r(e);var r=t(/*! ./declareRecord.vue?vue&type=template&id=3350ea59& */379),c=t(/*! ./declareRecord.vue?vue&type=script&lang=js& */381);for(var a in c)"default"!==a&&function(n){t.d(e,n,(function(){return c[n]}))}(a);t(/*! ./declareRecord.vue?vue&type=style&index=0&lang=css& */383);var u,o=t(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */11),i=Object(o["default"])(c["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);i.options.__file="managePages/declareRecord/declareRecord.vue",e["default"]=i.exports},379:
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/declareRecord/declareRecord.vue?vue&type=template&id=3350ea59& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(n,e,t){"use strict";t.r(e);var r=t(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./declareRecord.vue?vue&type=template&id=3350ea59& */380);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},380:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/declareRecord/declareRecord.vue?vue&type=template&id=3350ea59& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return c})),t.d(e,"staticRenderFns",(function(){return u})),t.d(e,"recyclableRender",(function(){return a})),t.d(e,"components",(function(){return r}));var c=function(){var n=this,e=n.$createElement;n._self._c},a=!1,u=[];c._withStripped=!0},381:
/*!****************************************************************************************************************************!*\
  !*** C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/declareRecord/declareRecord.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */function(n,e,t){"use strict";t.r(e);var r=t(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./declareRecord.vue?vue&type=script&lang=js& */382),c=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);e["default"]=c.a},382:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/declareRecord/declareRecord.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{meunsList:[{icon:"/static/data.png",msg:"借车申报",id:"lendCarDeclare"},{icon:"/static/baoyang.png",msg:"保养申报",id:"protectDeclare"},{icon:"/static/car3.png",msg:"派车申报",id:"sendCarDeclare"}]}},methods:{goDetailPage:function(e){var t=e+"/"+e;n.navigateTo({url:t})}}};e.default=t}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},383:
/*!************************************************************************************************************************************!*\
  !*** C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/declareRecord/declareRecord.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************/
/*! no static exports found */function(n,e,t){"use strict";t.r(e);var r=t(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./declareRecord.vue?vue&type=style&index=0&lang=css& */384),c=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);e["default"]=c.a},384:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/16488/Desktop/demo/carManage_final_3.0/managePages/declareRecord/declareRecord.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,e,t){}},[[377,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/managePages/declareRecord/declareRecord.js.map