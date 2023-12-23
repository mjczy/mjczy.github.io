(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-059c2844","chunk-d87d8f30","chunk-2d0c1d91"],{4890:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-spin",{attrs:{spinning:t.confirmLoading}},[a("j-form-container",{attrs:{disabled:t.formDisabled}},[a("a-form-model",{ref:"form",attrs:{slot:"detail",model:t.model,rules:t.validatorRules},slot:"detail"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"租户名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入租户名称"},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"租户编号",labelCol:t.labelCol,wrapperCol:t.wrapperCol,prop:"id"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:1,placeholder:"请输入租户编号",disabled:t.disabledId},model:{value:t.model.id,callback:function(e){t.$set(t.model,"id",e)},expression:"model.id"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"开始时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("j-date",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择开始时间","show-time":!0,"date-format":"YYYY-MM-DD HH:mm:ss"},model:{value:t.model.beginDate,callback:function(e){t.$set(t.model,"beginDate",e)},expression:"model.beginDate"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"结束时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("j-date",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择结束时间","show-time":!0,"date-format":"YYYY-MM-DD HH:mm:ss"},model:{value:t.model.endDate,callback:function(e){t.$set(t.model,"endDate",e)},expression:"model.endDate"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"状态",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[a("a-radio-group",{attrs:{name:"tenantStatus"},model:{value:t.model.status,callback:function(e){t.$set(t.model,"status",e)},expression:"model.status"}},[a("a-radio",{attrs:{value:1}},[t._v("正常")]),a("a-radio",{attrs:{value:0}},[t._v("冻结")])],1)],1)],1),t.showFlowSubmitButton?a("a-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[a("a-button",{on:{click:t.submitForm}},[t._v("提 交")])],1):t._e()],1)],1)],1)],1)},l=[],i=a("0fea"),o=(a("ca00"),a("c681")),s=a("2dab"),r=a("7b16"),d={name:"TenantForm",components:{JFormContainer:o["default"],JDate:s["default"],JDictSelectTag:r["default"]},props:{formData:{type:Object,default:function(){},required:!1},normal:{type:Boolean,default:!1,required:!1},disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{status:1},id:"",labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{id:[{required:!0,message:"请输入租户编号!"}]},url:{add:"/sys/tenant/add",edit:"/sys/tenant/edit",queryById:"/sys/tenant/queryById"}}},computed:{formDisabled:function(){return!1===this.normal?!1!==this.formData.disabled:this.disabled},disabledId:function(){return!!this.id},showFlowSubmitButton:function(){return!1===this.normal&&!1===this.formData.disabled}},created:function(){this.showFlowData()},methods:{show:function(t){this.model=t?Object.assign({},t):this.model,this.id=t?t.id:"",this.visible=!0},showFlowData:function(){var t=this;if(!1===this.normal){var e={id:this.formData.dataId};Object(i["c"])(this.url.queryById,e).then((function(e){e.success&&t.edit(e.result)}))}},submitForm:function(){var t=this,e=this;e.$refs.form.validate((function(a){if(!a)return!1;e.confirmLoading=!0;var n="",l="";t.id?(n+=t.url.edit,l="put"):(n+=t.url.add,l="post"),Object(i["h"])(n,t.model,l).then((function(a){a.success?(e.$message.success(a.message),e.$emit("ok")):("该编号已存在!"==a.message&&(t.model.id=""),e.$message.warning(a.message))})).finally((function(){e.confirmLoading=!1}))}))},popupCallback:function(t){this.model=Object.assign(this.model,t)}}},c=d,u=a("2877"),m=Object(u["a"])(c,n,l,!1,null,null,null);e["default"]=m.exports},"48e9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchQuery(e)}}},[a("a-row",{attrs:{gutter:24}})],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.handleAdd}},[t._v("新增")]),t.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:t.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),t._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[t._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):t._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),t._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.selectedRowKeys.length))]),t._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:t.onClearSelected}},[t._v("清空")])]),a("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",scroll:{x:!0},bordered:"",rowKey:"id",columns:t.columns,dataSource:t.dataSource,pagination:t.ipagination,loading:t.loading,rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"htmlSlot",fn:function(e){return[a("div",{domProps:{innerHTML:t._s(e)}})]}},{key:"imgSlot",fn:function(e){return[e?a("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:t.getImgView(e),height:"25px",alt:""}}):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[t._v("无图片")])]}},{key:"fileSlot",fn:function(e){return[e?a("a-button",{attrs:{ghost:!0,type:"primary",icon:"download",size:"small"},on:{click:function(a){return t.uploadFile(e)}}},[t._v("\n          下载\n        ")]):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[t._v("无文件")])]}},{key:"action",fn:function(e,n){return a("span",{},[a("a",{on:{click:function(e){return t.handleEdit(n)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[t._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(e){return t.handleDetail(n)}}},[t._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return t.handleDelete(n.id)}}},[a("a",[t._v("删除")])])],1)],1)],1)],1)}}])})],1),a("tenant-modal",{ref:"modalForm",on:{ok:t.modalFormOk}})],1)},l=[],i=(a("6eb7"),a("ac0d")),o=a("b65a"),s=a("7474"),r={name:"TenantList",mixins:[o["a"],i["b"]],components:{TenantModal:s["default"]},data:function(){return{description:"adad管理页面",columns:[{title:"租户名称",align:"center",dataIndex:"name"},{title:"租户编号",align:"center",dataIndex:"id"},{title:"开始时间",align:"center",dataIndex:"beginDate"},{title:"结束时间",align:"center",dataIndex:"endDate"},{title:"状态",align:"center",dataIndex:"status_dictText"},{title:"操作",dataIndex:"action",align:"center",fixed:"right",width:147,scopedSlots:{customRender:"action"}}],url:{list:"/sys/tenant/list",delete:"/sys/tenant/delete",deleteBatch:"/sys/tenant/deleteBatch"},dictOptions:{}}},created:function(){},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{initDictConfig:function(){}}},d=r,c=(a("f4c9"),a("2877")),u=Object(c["a"])(d,n,l,!1,null,"4b97cd6e",null);e["default"]=u.exports},"6eb7":function(t,e,a){},7474:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("j-modal",{attrs:{title:t.title,width:t.width,visible:t.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":t.disableSubmit}},cancelText:"关闭"},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("tenant-form",{ref:"realForm",attrs:{disabled:t.disableSubmit,normal:""},on:{ok:t.submitCallback}})],1)},l=[],i=a("4890"),o={name:"TenantModal",components:{TenantForm:i["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.show()}))},edit:function(t){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.show(t)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},s=o,r=a("2877"),d=Object(r["a"])(s,n,l,!1,null,null,null);e["default"]=d.exports},"7ce2":function(t,e,a){},f4c9:function(t,e,a){"use strict";var n=a("7ce2"),l=a.n(n);l.a}}]);