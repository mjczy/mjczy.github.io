(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3370be79","chunk-2d0d603e"],{"716d":function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("a-spin",{attrs:{spinning:e.confirmLoading}},[l("j-form-container",{attrs:{disabled:e.formDisabled}},[l("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[l("a-row",[l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"地区ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"locationId"}},[l("a-input",{attrs:{placeholder:"请输入地区ID"},model:{value:e.model.locationId,callback:function(t){e.$set(e.model,"locationId",t)},expression:"model.locationId"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"地区名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"locationName"}},[l("a-input",{attrs:{placeholder:"请输入地区名称"},model:{value:e.model.locationName,callback:function(t){e.$set(e.model,"locationName",t)},expression:"model.locationName"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"地区类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"locationType"}},[l("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入地区类型"},model:{value:e.model.locationType,callback:function(t){e.$set(e.model,"locationType",t)},expression:"model.locationType"}})],1)],1),l("a-col",{attrs:{span:24}},[l("a-form-model-item",{attrs:{label:"类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"type"}},[l("a-input",{attrs:{placeholder:"请输入类型"},model:{value:e.model.type,callback:function(t){e.$set(e.model,"type",t)},expression:"model.type"}})],1)],1)],1)],1)],1)],1)},a=[],i=l("0fea"),n=(l("ca00"),{name:"LocationForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/bestvpn/location/add",edit:"/bestvpn/location/edit",queryById:"/bestvpn/location/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(l){if(l){t.confirmLoading=!0;var o="",a="";e.model.id?(o+=e.url.edit,a="put"):(o+=e.url.add,a="post"),Object(i["h"])(o,e.model,a).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}))}}}),s=n,r=l("2877"),d=Object(r["a"])(s,o,a,!1,null,null,null);t["default"]=d.exports},"8c4a":function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[l("location-form",{ref:"realForm",attrs:{disabled:e.disableSubmit},on:{ok:e.submitCallback}})],1)},a=[],i=l("716d"),n={name:"LocationModal",components:{LocationForm:i["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},s=n,r=l("2877"),d=Object(r["a"])(s,o,a,!1,null,null,null);t["default"]=d.exports}}]);