(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33543064","chunk-beed68c2","chunk-2d21006e"],{"4c92":function(e,t,a){"use strict";var n=a("a5a9"),l=a.n(n);l.a},"6eb7":function(e,t,a){},"7d56":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("wake-form",{ref:"realForm",attrs:{disabled:e.disableSubmit},on:{ok:e.submitCallback}})],1)},l=[],i=a("b5af"),o={name:"WakeModal",components:{WakeForm:i["default"]},data:function(){return{title:"",width:800,visible:!1,disableSubmit:!1}},methods:{add:function(){var e=this;this.visible=!0,this.$nextTick((function(){e.$refs.realForm.add()}))},edit:function(e){var t=this;this.visible=!0,this.$nextTick((function(){t.$refs.realForm.edit(e)}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){this.$refs.realForm.submitForm()},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},r=o,s=a("2877"),c=Object(s["a"])(r,n,l,!1,null,null,null);t["default"]=c.exports},a5a9:function(e,t,a){},b5af:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("j-form-container",{attrs:{disabled:e.formDisabled}},[a("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"name"}},[a("a-input",{attrs:{placeholder:"请输入名称"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"mac",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"mac"}},[a("a-input",{attrs:{placeholder:"请输入mac"},model:{value:e.model.mac,callback:function(t){e.$set(e.model,"mac",t)},expression:"model.mac"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"ip",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"ip"}},[a("a-input",{attrs:{placeholder:"请输入ip"},model:{value:e.model.ip,callback:function(t){e.$set(e.model,"ip",t)},expression:"model.ip"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"PingIP",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"pingIp"}},[a("a-input",{attrs:{placeholder:"请输入PingIP"},model:{value:e.model.pingIp,callback:function(t){e.$set(e.model,"pingIp",t)},expression:"model.pingIp"}})],1)],1)],1)],1)],1)],1)},l=[],i=a("0fea"),o=(a("ca00"),{name:"WakeForm",components:{},props:{disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{},url:{add:"/wake/add",edit:"/wake/edit",queryById:"/wake/queryById"}}},computed:{formDisabled:function(){return this.disabled}},created:function(){this.modelDefault=JSON.parse(JSON.stringify(this.model))},methods:{add:function(){this.edit(this.modelDefault)},edit:function(e){this.model=Object.assign({},e),this.visible=!0},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(a){t.confirmLoading=!0;var n="",l="";e.model.id?(n+=e.url.edit,l="put"):(n+=e.url.add,l="post"),Object(i["h"])(n,e.model,l).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}))}}}),r=o,s=a("2877"),c=Object(s["a"])(r,n,l,!1,null,null,null);t["default"]=c.exports},f4c7:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{attrs:{placeholder:"请输入名称"},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"mac"}},[a("a-input",{attrs:{placeholder:"请输入mac"},model:{value:e.queryParam.mac,callback:function(t){e.$set(e.queryParam,"mac",t)},expression:"queryParam.mac"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"ip"}},[a("a-input",{attrs:{placeholder:"请输入ip"},model:{value:e.queryParam.ip,callback:function(t){e.$set(e.queryParam,"ip",t)},expression:"queryParam.ip"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"PingIP"}},[a("a-input",{attrs:{placeholder:"请输入PingIP"},model:{value:e.queryParam.pingIp,callback:function(t){e.$set(e.queryParam,"pingIp",t)},expression:"queryParam.pingIp"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n              "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n              "),a("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("信息")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),a("j-super-query",{ref:"superQueryModal",attrs:{fieldList:e.superFieldList},on:{handleSuperQuery:e.handleSuperQuery}}),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",staticClass:"j-table-force-nowrap",attrs:{size:"middle",scroll:{x:!0},bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"htmlSlot",fn:function(t){return[a("div",{domProps:{innerHTML:e._s(t)}})]}},{key:"imgSlot",fn:function(t){return[t?a("img",{staticStyle:{"max-width":"80px","font-size":"12px","font-style":"italic"},attrs:{src:e.getImgView(t),height:"25px",alt:""}}):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无图片")])]}},{key:"fileSlot",fn:function(t){return[t?a("a-button",{attrs:{ghost:!0,type:"primary",icon:"download",size:"small"},on:{click:function(a){return e.downloadFile(t)}}},[e._v("\n          下载\n        ")]):a("span",{staticStyle:{"font-size":"12px","font-style":"italic"}},[e._v("无文件")])]}},{key:"status",fn:function(t,n,l){return a("span",{},[0==t?a("a-tag",{attrs:{color:"pink"}},[e._v("离线")]):e._e(),1==t?a("a-tag",{attrs:{color:"#87d068"}},[e._v("在线")]):e._e()],1)}},{key:"action",fn:function(t,n){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.wake(n)}}},[e._v("唤醒")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(t){return e.handleDetail(n)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(n.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("wake-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},l=[],i=(a("6eb7"),a("ac0d")),o=a("b65a"),r=a("7d56"),s=a("0fea"),c=(a("ca00"),{name:"WakeList",mixins:[o["a"],i["b"]],components:{WakeModal:r["default"]},data:function(){return{description:"信息管理页面",columns:[{title:"名称",align:"center",sorter:!0,dataIndex:"name"},{title:"mac",align:"center",sorter:!0,dataIndex:"mac"},{title:"ip",align:"center",sorter:!0,dataIndex:"ip"},{title:"PingIP",align:"center",sorter:!0,dataIndex:"pingIp"},{title:"状态",align:"center",sorter:!0,dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",dataIndex:"action",align:"center",fixed:"right",width:147,scopedSlots:{customRender:"action"}}],url:{list:"/wake/list",delete:"/wake/delete",deleteBatch:"/wake/deleteBatch",exportXlsUrl:"/wake/exportXls",importExcelUrl:"wake/importExcel",wake:"/wake/wake"},dictOptions:{},superFieldList:[]}},created:function(){this.getSuperFieldList()},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{initDictConfig:function(){},getSuperFieldList:function(){var e=[];e.push({type:"string",value:"name",text:"名称",dictCode:""}),e.push({type:"string",value:"mac",text:"mac",dictCode:""}),e.push({type:"string",value:"ip",text:"ip",dictCode:""}),e.push({type:"string",value:"pingIp",text:"PingIP",dictCode:""}),e.push({type:"string",value:"status",text:"状态",dictCode:""}),this.superFieldList=e},wake:function(e){var t=this,a=Object.assign({},e),n="",l=this;n+=this.url.wake,Object(s["c"])(n,{id:a.id}).then((function(e){e.success?(t.$message.success(e.message),l.$emit("ok")):l.$message.warning(e.message)})).finally((function(){}))}}}),d=c,u=(a("4c92"),a("2877")),m=Object(u["a"])(d,n,l,!1,null,"0e1f5caf",null);t["default"]=m.exports}}]);