(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-612162bf","chunk-2d0e648a"],{"72b1":function(e,l,a){"use strict";a.r(l);var o=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("login-info-form",{ref:"realForm",attrs:{disabled:e.disableSubmit},on:{ok:e.submitCallback}})],1)},t=[],i=a("97a7"),s={name:"LoginInfoModal",components:{LoginInfoForm:i["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var l=this;this.visible=!0,this.$nextTick((function(){l.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},n=s,r=a("2877"),d=Object(r["a"])(n,o,t,!1,null,null,null);l["default"]=d.exports},"97a7":function(e,l,a){"use strict";a.r(l);var o=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("j-form-container",{attrs:{disabled:e.formDisabled}},[a("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"最后登录时间",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"lastTime"}},[a("a-input",{attrs:{placeholder:"请输入最后登录时间"},model:{value:e.model.lastTime,callback:function(l){e.$set(e.model,"lastTime",l)},expression:"model.lastTime"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"用户ID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"userId"}},[a("a-input",{attrs:{placeholder:"请输入用户ID"},model:{value:e.model.userId,callback:function(l){e.$set(e.model,"userId",l)},expression:"model.userId"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"用户名",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"username"}},[a("a-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.model.username,callback:function(l){e.$set(e.model,"username",l)},expression:"model.username"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"地区",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"location"}},[a("a-input",{attrs:{placeholder:"请输入地区"},model:{value:e.model.location,callback:function(l){e.$set(e.model,"location",l)},expression:"model.location"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"设备",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"device"}},[a("a-input",{attrs:{placeholder:"请输入设备"},model:{value:e.model.device,callback:function(l){e.$set(e.model,"device",l)},expression:"model.device"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"版本",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"version"}},[a("a-input",{attrs:{placeholder:"请输入版本"},model:{value:e.model.version,callback:function(l){e.$set(e.model,"version",l)},expression:"model.version"}})],1)],1)],1)],1)],1)],1)},t=[],i=a("0fea"),s=(a("ca00"),{name:"LoginInfoForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/ddz/loginInfo/add",edit:"/ddz/loginInfo/edit",queryById:"/ddz/loginInfo/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,l=this;this.$refs.form.validate((function(a){if(a){l.confirmLoading=!0;var o="",t="";e.model.id?(o+=e.url.edit,t="put"):(o+=e.url.add,t="post"),Object(i["h"])(o,e.model,t).then((function(e){e.success?(l.$message.success(e.message),l.$emit("ok")):l.$message.warning(e.message)})).finally((function(){l.confirmLoading=!1}))}}))}}}),n=s,r=a("2877"),d=Object(r["a"])(n,o,t,!1,null,null,null);l["default"]=d.exports}}]);