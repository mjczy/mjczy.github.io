(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-797bec09","chunk-6cb1c543","chunk-2d0aabb3"],{"11eb":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("j-form-container",{attrs:{disabled:e.formDisabled}},[a("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"描述",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"description"}},[a("a-input",{attrs:{placeholder:"请输入描述"},model:{value:e.model.description,callback:function(t){e.$set(e.model,"description",t)},expression:"model.description"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"设备id",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"deviceId"}},[a("a-input",{attrs:{placeholder:"请输入设备id"},model:{value:e.model.deviceId,callback:function(t){e.$set(e.model,"deviceId",t)},expression:"model.deviceId"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"定时任务",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"scheduleString"}},[a("a-input",{attrs:{placeholder:"请输入定时任务"},model:{value:e.model.scheduleString,callback:function(t){e.$set(e.model,"scheduleString",t)},expression:"model.scheduleString"}})],1)],1)],1)],1)],1)],1)},l=[],n=a("0fea"),o=(a("ca00"),{name:"ElcDeviceForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/device/elcDevice/add",edit:"/device/elcDevice/edit",queryById:"/device/elcDevice/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(a){t.confirmLoading=!0;var i="",l="";e.model.id?(i+=e.url.edit,l="put"):(i+=e.url.add,l="post"),Object(n["h"])(i,e.model,l).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}))}}}),r=o,s=a("2877"),c=Object(s["a"])(r,i,l,!1,null,null,null);t["default"]=c.exports},1829:function(e,t,a){"use strict";var i=a("939c"),l=a.n(i);l.a},"6eb7":function(e,t,a){},"939c":function(e,t,a){},"9b8f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("elc-device-form",{ref:"realForm",attrs:{disabled:e.disableSubmit},on:{ok:e.submitCallback}})],1)},l=[],n=a("11eb"),o={name:"ElcDeviceModal",components:{ElcDeviceForm:n["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},r=o,s=a("2877"),c=Object(s["a"])(r,i,l,!1,null,null,null);t["default"]=c.exports},a2b8:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"描述"}},[a("a-input",{attrs:{placeholder:"请输入描述"},model:{value:e.queryParam.description,callback:function(t){e.$set(e.queryParam,"description",t)},expression:"queryParam.description"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"设备id"}},[a("a-input",{attrs:{placeholder:"请输入设备id"},model:{value:e.queryParam.deviceId,callback:function(t){e.$set(e.queryParam,"deviceId",t)},expression:"queryParam.deviceId"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n              "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n              "),a("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("飞跃云控设备")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),a("j-super-query",{ref:"superQueryModal",attrs:{fieldList:e.superFieldList},on:{handleSuperQuery:e.handleSuperQuery}}),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",scroll:{x:!0},bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"htmlSlot",fn:function(t){return[a("div",{domProps:{innerHTML:e._s(t)}})]}},{key:"imgSlot",fn:function(t){return[t?a("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:e.getImgView(t),height:"25px",alt:""}}):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无图片")])]}},{key:"fileSlot",fn:function(t){return[t?a("a-button",{attrs:{ghost:!0,type:"primary",icon:"download",size:"small"},on:{click:function(a){return e.downloadFile(t)}}},[e._v("\n          下载\n        ")]):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无文件")])]}},{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(i)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(t){return e.handleDetail(i)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(i.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("elc-device-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},l=[],n=(a("6eb7"),a("ac0d")),o=a("b65a"),r=a("9b8f"),s={name:"ElcDeviceList",mixins:[o["a"],n["b"]],components:{ElcDeviceModal:r["default"]},data:function(){return{description:"飞跃云控设备管理页面",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"描述",align:"center",sorter:!0,dataIndex:"description"},{title:"设备id",align:"center",sorter:!0,dataIndex:"deviceId"},{title:"定时任务",align:"center",dataIndex:"scheduleString"},{title:"操作",dataIndex:"action",align:"center",fixed:"right",width:147,scopedSlots:{customRender:"action"}}],url:{list:"/device/elcDevice/list",delete:"/device/elcDevice/delete",deleteBatch:"/device/elcDevice/deleteBatch",exportXlsUrl:"/device/elcDevice/exportXls",importExcelUrl:"device/elcDevice/importExcel"},dictOptions:{},superFieldList:[]}},created:function(){this.getSuperFieldList()},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{initDictConfig:function(){},getSuperFieldList:function(){var e=[];e.push({type:"string",value:"description",text:"描述",dictCode:""}),e.push({type:"string",value:"deviceId",text:"设备id",dictCode:""}),e.push({type:"Blob",value:"schedule",text:"定时任务",dictCode:""}),this.superFieldList=e}}},c=s,d=(a("1829"),a("2877")),u=Object(d["a"])(c,i,l,!1,null,"03686a84",null);t["default"]=u.exports}}]);