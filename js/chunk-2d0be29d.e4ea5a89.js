(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be29d"],{"2ea5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,width:450,visible:t.visible,closable:!1,maskClosable:!1}},[a("template",{slot:"footer"},[a("a-button",{attrs:{type:"primary"},on:{click:t.selectOk}},[t._v("确认")])],1),a("a-form-model",[t.isMultiTenant?a("a-form-model-item",{staticStyle:{"margin-bottom":"10px"},attrs:{labelCol:{span:4},wrapperCol:{span:20},"validate-status":t.validate_status1}},[a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[t._v("您有多个租户，请选择登录租户")])]),a("a-avatar",{staticStyle:{backgroundColor:"#87d068"},attrs:{icon:"gold"}})],2),a("a-select",{class:{"valid-error":"error"==t.validate_status1},staticStyle:{"margin-left":"10px",width:"80%"},attrs:{placeholder:"请选择登录租户"},on:{change:t.handleTenantChange}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"gold"},slot:"suffixIcon"}),t._l(t.tenantList,(function(e){return a("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))],2)],1):t._e(),t.isMultiDepart?a("a-form-model-item",{staticStyle:{"margin-bottom":"10px"},attrs:{labelCol:{span:4},wrapperCol:{span:20},"validate-status":t.validate_status2}},[a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[t._v("您有多个部门，请选择登录部门")])]),a("a-avatar",{staticStyle:{backgroundColor:"rgb(104, 208, 203)"},attrs:{icon:"gold"}})],2),a("a-select",{class:{"valid-error":"error"==t.validate_status2},staticStyle:{"margin-left":"10px",width:"80%"},attrs:{placeholder:"请选择登录部门"},on:{change:t.handleDepartChange}},[a("a-icon",{attrs:{slot:"suffixIcon",type:"gold"},slot:"suffixIcon"}),t._l(t.departList,(function(e){return a("a-select-option",{key:e.id,attrs:{value:e.orgCode}},[t._v("\n          "+t._s(e.departName)+"\n        ")])}))],2)],1):t._e()],1)],2)},s=[],n=a("2b0e"),r=a("0fea"),l=a("9fb0"),o={name:"LoginSelectTenant",data:function(){return{visible:!1,isMultiDepart:!1,departList:[],isMultiTenant:!1,tenantList:[],username:"",orgCode:"",tenant_id:"",validate_status1:"",validate_status2:""}},computed:{title:function(){return this.isMultiDepart&&this.isMultiTenant?"请选择租户和部门":this.isMultiDepart&&!this.isMultiTenant?"请选择部门":!this.isMultiDepart&&this.isMultiTenant?"请选择租户":void 0}},methods:{clear:function(){this.departList=[],this.tenantList=[],this.visible=!1,this.validate_status1="",this.validate_status2=""},bizDepart:function(t){var e=t.multi_depart;0==e?(this.$notification.warn({message:"提示",description:"您尚未归属部门,请确认账号信息",duration:3}),this.isMultiDepart=!1):2==e?(this.visible=!0,this.isMultiDepart=!0,this.departList=t.departs):this.isMultiDepart=!1},bizTenantList:function(t){var e=t.tenantList;Array.isArray(e)&&(0===e.length?this.isMultiTenant=!1:1===e.length?(this.tenant_id=e[0].id,this.isMultiTenant=!1):(this.visible=!0,this.isMultiTenant=!0,this.tenantList=e))},show:function(t){this.clear(),this.bizDepart(t);var e=n["default"].ls.get(l["u"]);this.username=e.username,this.bizTenantList(t),!1===this.visible&&(this.$store.dispatch("saveTenant",this.tenant_id),this.$emit("success"))},requestFailed:function(t){this.$notification["error"]({message:"登录失败",description:((t.response||{}).data||{}).message||t.message||"请求出现错误，请稍后再试",duration:4}),this.loginBtn=!1},departResolve:function(){var t=this;return new Promise((function(e,a){if(!1===t.isMultiDepart)e();else{var i={orgCode:t.orgCode,username:t.username};Object(r["j"])("/sys/selectDepart",i).then((function(i){if(i.success){var s=i.result.userInfo;n["default"].ls.set(l["u"],s,6048e5),t.$store.commit("SET_INFO",s),e()}else t.requestFailed(i),t.$store.dispatch("Logout"),a()}))}}))},selectOk:function(){var t=this;return this.isMultiTenant&&!this.tenant_id?(this.validate_status1="error",!1):this.isMultiDepart&&!this.orgCode?(this.validate_status2="error",!1):void this.departResolve().then((function(){t.$store.dispatch("saveTenant",t.tenant_id),t.isMultiTenant,t.$emit("success")})).catch((function(){}))},handleTenantChange:function(t){this.validate_status1="",this.tenant_id=t},handleDepartChange:function(t){this.validate_status2="",this.orgCode=t}}},u=o,d=a("2877"),c=Object(d["a"])(u,i,s,!1,null,"25625f86",null);e["default"]=c.exports}}]);