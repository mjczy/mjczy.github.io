(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1b62"],{"7c33":function(e,l,o){"use strict";o.r(l);var i=function(){var e=this,l=e.$createElement,o=e._self._c||l;return o("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[o("a-spin",{attrs:{spinning:e.confirmLoading}},[o("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[o("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"ruleName",label:"规则名称"}},[o("a-input",{attrs:{placeholder:"请输入规则名称"},model:{value:e.model.ruleName,callback:function(l){e.$set(e.model,"ruleName",l)},expression:"model.ruleName"}})],1),o("a-form-model-item",{directives:[{name:"show",rawName:"v-show",value:e.showRuleColumn,expression:"showRuleColumn"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"ruleColumn",label:"规则字段"}},[o("a-input",{attrs:{placeholder:"请输入规则字段"},model:{value:e.model.ruleColumn,callback:function(l){e.$set(e.model,"ruleColumn","string"===typeof l?l.trim():l)},expression:"model.ruleColumn"}})],1),o("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"ruleConditions",label:"条件规则"}},[o("j-dict-select-tag",{attrs:{placeholder:"请输入条件规则",dictCode:"rule_conditions"},on:{input:e.handleChangeRuleCondition},model:{value:e.model.ruleConditions,callback:function(l){e.$set(e.model,"ruleConditions",l)},expression:"model.ruleConditions"}})],1),o("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"ruleValue",label:"规则值"}},[o("a-input",{attrs:{placeholder:"请输入规则值"},model:{value:e.model.ruleValue,callback:function(l){e.$set(e.model,"ruleValue",l)},expression:"model.ruleValue"}})],1),o("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态"}},[o("a-radio-group",{attrs:{buttonStyle:"solid"},model:{value:e.model.status,callback:function(l){e.$set(e.model,"status",l)},expression:"model.status"}},[o("a-radio-button",{attrs:{value:"1"}},[e._v("有效")]),o("a-radio-button",{attrs:{value:"0"}},[e._v("无效")])],1)],1)],1)],1)],1)},s=[],t=o("0fea"),a={name:"PermissionDataRuleModal",data:function(){return{queryParam:{},title:"操作",visible:!1,model:{},ruleConditionList:[],labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,permissionId:"",validatorRules:{ruleConditions:[{required:!0,message:"请选择条件!"}],ruleName:[{required:!0,message:"请输入规则名称!"}],ruleValue:[{required:!0,message:"请输入规则值!"}],ruleColumn:[]},url:{list:"/sys/dictItem/list",add:"/sys/permission/addPermissionRule",edit:"/sys/permission/editPermissionRule"},showRuleColumn:!0}},created:function(){},methods:{add:function(e){this.permissionId=e,this.edit({status:"1"})},edit:function(e){this.model=Object.assign({},e),e.permissionId?this.model.permissionId=e.permissionId:this.model.permissionId=this.permissionId,this.visible=!0,this.initRuleCondition()},close:function(){this.$emit("close"),this.visible=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this,l=this;this.$refs.form.validate((function(o){if(!o)return!1;l.confirmLoading=!0;var i="",s="";e.model.id?(i+=e.url.edit,s="put"):(i+=e.url.add,s="post"),Object(t["h"])(i,e.model,s).then((function(e){e.success?(l.$message.success(e.message),l.$emit("ok")):l.$message.warning(e.message)})).finally((function(){l.confirmLoading=!1,l.close()}))}))},handleCancel:function(){this.close()},initRuleCondition:function(){this.model.ruleConditions&&"USE_SQL_RULES"==this.model.ruleConditions?this.showRuleColumn=!1:this.showRuleColumn=!0},handleChangeRuleCondition:function(e){"USE_SQL_RULES"==e?(this.model.ruleColumn="",this.showRuleColumn=!1):this.showRuleColumn=!0}}},n=a,r=o("2877"),u=Object(r["a"])(n,i,s,!1,null,"63499f6b",null);l["default"]=u.exports}}]);