(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d603e"],{"716d":function(e,o,l){"use strict";l.r(o);var a=function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("a-spin",{attrs:{spinning:e.confirmLoading}},[l("j-form-container",{attrs:{disabled:e.formDisabled}},[l("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[l("a-row",[l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"地区ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"locationId"}},[l("a-input",{attrs:{placeholder:"请输入地区ID"},model:{value:e.model.locationId,callback:function(o){e.$set(e.model,"locationId",o)},expression:"model.locationId"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"地区名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"locationName"}},[l("a-input",{attrs:{placeholder:"请输入地区名称"},model:{value:e.model.locationName,callback:function(o){e.$set(e.model,"locationName",o)},expression:"model.locationName"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"地区类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"locationType"}},[l("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入地区类型"},model:{value:e.model.locationType,callback:function(o){e.$set(e.model,"locationType",o)},expression:"model.locationType"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"type"}},[l("a-input",{attrs:{placeholder:"请输入类型"},model:{value:e.model.type,callback:function(o){e.$set(e.model,"type",o)},expression:"model.type"}})],1)],1)],1)],1)],1)],1)},t=[],n=l("0fea"),i=(l("ca00"),{name:"LocationForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/bestvpn/location/add",edit:"/bestvpn/location/edit",queryById:"/bestvpn/location/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,o=this;this.$refs.form.validate((function(l){if(l){o.confirmLoading=!0;var a="",t="";e.model.id?(a+=e.url.edit,t="put"):(a+=e.url.add,t="post"),Object(n["h"])(a,e.model,t).then((function(e){e.success?(o.$message.success(e.message),o.$emit("ok")):o.$message.warning(e.message)})).finally((function(){o.confirmLoading=!1}))}}))}}}),s=i,r=l("2877"),d=Object(r["a"])(s,a,t,!1,null,null,null);o["default"]=d.exports}}]);