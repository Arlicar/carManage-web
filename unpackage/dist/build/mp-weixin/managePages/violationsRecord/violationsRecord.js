(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["managePages/violationsRecord/violationsRecord"],{"0c69":function(t,n,a){"use strict";a.r(n);var e=a("ca7a"),o=a("aa22");for(var c in o)"default"!==c&&function(t){a.d(n,t,(function(){return o[t]}))}(c);a("711f");var u,r=a("f0c5"),i=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);n["default"]=i.exports},"2c96":function(t,n,a){"use strict";(function(t){a("a252");e(a("66fd"));var n=e(a("0c69"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("543d")["createPage"])},"56dc":function(t,n,a){},"711f":function(t,n,a){"use strict";var e=a("56dc"),o=a.n(e);o.a},"741b":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{productList:[]}},onLoad:function(){this.getList()},methods:{getList:function(){var n=this;t.request({url:n.apiServer+"/api/get/getAll/punish",method:"POST",header:{"content-type":"application/x-www-form-urlencoded",enctype:"multipart/form-data"},data:{no:n.$store.state.userInfo.no,filter:"all"},success:function(t){console.log(t.data.data),n.productList=t.data.data},fail:function(t){console.log("发生了错误")}})}}};n.default=a}).call(this,a("543d")["default"])},aa22:function(t,n,a){"use strict";a.r(n);var e=a("741b"),o=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,(function(){return e[t]}))}(c);n["default"]=o.a},ca7a:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement;t._self._c},c=[]}},[["2c96","common/runtime","common/vendor"]]]);