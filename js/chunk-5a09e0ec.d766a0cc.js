(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a09e0ec","chunk-2d22c324"],{"82ce":function(e,t,n){"use strict";var a=n("bbda"),i=n.n(a);i.a},bbda:function(e,t,n){},ddf2:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-operator"},[n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),n("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("分类字典")}}},[e._v("导出")]),n("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[n("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?n("a-dropdown",[n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{key:"1",on:{click:e.batchDel}},[n("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),n("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),n("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),n("div",[n("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[n("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),n("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),n("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),n("a-table",e._b({ref:"table",attrs:{size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,expandedRowKeys:e.expandedRowKeys},on:{change:e.handleTableChange,expand:e.handleExpand},scopedSlots:e._u([{key:"action",fn:function(t,a){return n("span",{},[n("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(a)}}},[n("a",[e._v("删除")])]),n("a-divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(t){return e.handleAddSub(a)}}},[e._v("添加下级")])],1)}}])},"a-table",e.tableProps,!1))],1),n("sysCategory-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},i=[],r=n("a34a"),o=n.n(r),s=n("0fea"),d=n("b65a"),l=n("f1cf");function c(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=y(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,r=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw r}}}}function u(e,t,n,a,i,r,o){try{var s=e[r](o),d=s.value}catch(l){return void n(l)}s.done?t(d):Promise.resolve(d).then(a,i)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var r=e.apply(t,n);function o(e){u(r,a,i,o,s,"next",e)}function s(e){u(r,a,i,o,s,"throw",e)}o(void 0)}))}}function p(e){return g(e)||m(e)||y(e)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,t){if(e){if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function m(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function g(e){if(Array.isArray(e))return b(e)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var v={name:"SysCategoryList",mixins:[d["a"]],components:{SysCategoryModal:l["default"]},data:function(){return{description:"分类字典管理页面",columns:[{title:"分类名称",align:"left",dataIndex:"name"},{title:"分类编码",align:"left",dataIndex:"code"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/sys/category/rootList",childList:"/sys/category/childList",getChildListBatch:"/sys/category/getChildListBatch",delete:"/sys/category/delete",deleteBatch:"/sys/category/deleteBatch",exportXlsUrl:"/sys/category/exportXls",importExcelUrl:"sys/category/importExcel"},expandedRowKeys:[],hasChildrenField:"hasChild",pidField:"pid",dictOptions:{},subExpandedKeys:[]}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)},tableProps:function(){var e=this;return{rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:function(t){return e.selectedRowKeys=t}}}}},methods:{loadData:function(e){var t=this;1==e&&(this.ipagination.current=1),this.loading=!0;var n=this.getQueryParams();return new Promise((function(e){Object(s["c"])(t.url.list,n).then((function(e){if(e.success){var n=e.result;if(Number(n.total)>0)return t.ipagination.total=Number(n.total),t.dataSource=t.getDataByResult(e.result.records),t.loadDataByExpandedRows(t.dataSource);t.ipagination.total=0,t.dataSource=[]}else t.$message.warning(e.message)})).finally((function(){t.loading=!1}))}))},getDataByResult:function(e){var t=this;if(e&&e.length>0)return e.map((function(e){if("1"==e[t.hasChildrenField]){var n={id:e.id+"_loadChild",name:"loading...",isLoading:!0};e.children=[n]}return e}))},handleExpand:function(e,t){var n=this;if(e){if(this.expandedRowKeys.push(t.id),t.children.length>0&&!0===t.children[0].isLoading){var a=this.getQueryParams();a[this.pidField]=t.id,Object(s["c"])(this.url.childList,a).then((function(e){e.success?e.result&&e.result.length>0?(t.children=n.getDataByResult(e.result),n.dataSource=p(n.dataSource)):(t.children="",t.hasChildrenField="0"):n.$message.warning(e.message)}))}}else{var i=this.expandedRowKeys.indexOf(t.id);i>=0&&this.expandedRowKeys.splice(i,1)}},initDictConfig:function(){},modalFormOk:function(e,t){e.id?(this.editOk(e,this.dataSource),this.dataSource=p(this.dataSource)):this.addOk(e,t)},editOk:function(e,t){if(t&&t.length>0)for(var n=0;n<t.length;n++){if(t[n].id==e.id){t[n]=e;break}this.editOk(e,t[n].children)}},addOk:function(){var e=h(o.a.mark((function e(t,n){var a,i,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t[this.pidField]){e.next=4;break}this.loadData(),e.next=23;break;case 4:this.expandedRowKeys=[],a=c(n),e.prev=7,a.s();case 9:if((i=a.n()).done){e.next=15;break}return r=i.value,e.next=13,this.expandTreeNode(r);case 13:e.next=9;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](7),a.e(e.t0);case 20:return e.prev=20,a.f(),e.finish(20);case 23:case"end":return e.stop()}}),e,this,[[7,17,20,23]])})));function t(t,n){return e.apply(this,arguments)}return t}(),expandTreeNode:function(e){var t=this;return new Promise((function(n,a){t.getFormDataById(e,t.dataSource);var i=t.parentFormData;t.expandedRowKeys.push(e);var r=t.getQueryParams();r[t.pidField]=e,Object(s["c"])(t.url.childList,r).then((function(e){e.success?e.result&&e.result.length>0?(i.children=t.getDataByResult(e.result),t.dataSource=p(t.dataSource),n()):(i.children="",i.hasChildrenField="0",a()):a()}))}))},getFormDataById:function(e,t){if(t&&t.length>0)for(var n=0;n<t.length;n++)t[n].id==e?this.parentFormData=t[n]:this.getFormDataById(e,t[n].children)},handleAddSub:function(e){this.subExpandedKeys=[],this.getExpandKeysByPid(e.id,this.dataSource,this.dataSource),this.$refs.modalForm.subExpandedKeys=this.subExpandedKeys,this.$refs.modalForm.title="添加子分类",this.$refs.modalForm.edit({pid:e.id}),this.$refs.modalForm.disableSubmit=!1},handleDelete:function(e){var t=this;Object(s["a"])(t.url.delete,{id:e.id}).then((function(e){e.success?t.loadData():t.$message.warning(e.message)}))},getExpandKeysByPid:function(e,t,n){if(e&&t&&t.length>0)for(var a=0;a<t.length;a++)t[a].id==e?(this.subExpandedKeys.push(t[a].id),this.getExpandKeysByPid(t[a]["pid"],n,n)):this.getExpandKeysByPid(e,t[a].children,n)},loadDataByExpandedRows:function(e){var t=this;return this.expandedRowKeys.length>0?Object(s["c"])(this.url.getChildListBatch,{parentIds:this.expandedRowKeys.join(",")}).then((function(n){if(n.success&&n.result.records.length>0){var a,i=n.result.records,r=new Map,o=c(i);try{for(o.s();!(a=o.n()).done;){var s=a.value,d=s[t.pidField];if(t.expandedRowKeys.join(",").includes(d)){var l=r.get(d);null==l&&(l=[]),l.push(s),r.set(d,l)}}}catch(p){o.e(p)}finally{o.f()}var u=r,h=function e(n){n&&n.forEach((function(n){t.expandedRowKeys.includes(n.id)&&(n.children=t.getDataByResult(u.get(n.id)),e(n.children))}))};h(e)}})):Promise.resolve()}}},w=v,x=(n("82ce"),n("2877")),S=Object(x["a"])(w,a,i,!1,null,"256f2e34",null);t["default"]=S.exports},f1cf:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,confirmLoading:e.confirmLoading,destroyOnClose:!0,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[n("a-spin",{attrs:{spinning:e.confirmLoading}},[n("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[n("a-form-model-item",{attrs:{label:"父级节点",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"pid"}},[n("j-tree-select",{ref:"treeSelect",attrs:{placeholder:"请选择父级节点",dict:"sys_category,name,id",pidField:"pid",pidValue:"0",disabled:e.disabled},model:{value:e.model.pid,callback:function(t){e.$set(e.model,"pid",t)},expression:"model.pid"}})],1),n("a-form-model-item",{attrs:{label:"分类名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"name"}},[n("a-input",{attrs:{placeholder:"请输入分类名称"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1)],1)],1)],1)},i=[],r=n("0fea"),o=n("b098");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={name:"SysCategoryModal",components:{JTreeSelect:o["default"]},data:function(){return{title:"操作",width:800,visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{pid:{},name:[{required:!0,message:"请输入类型名称!"}]},url:{add:"/sys/category/add",edit:"/sys/category/edit",checkCode:"/sys/category/checkCode"},expandedRowKeys:[],pidField:"pid",subExpandedKeys:[]}},created:function(){},computed:{disabled:function(){return!!this.model.id}},methods:{add:function(){this.edit({})},edit:function(e){this.model=Object.assign({},e),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(n){if(!n)return!1;t.confirmLoading=!0;var a="",i="";e.model.id?(a+=e.url.edit,i="put"):(a+=e.url.add,i="post"),Object(r["h"])(a,e.model,i).then((function(n){n.success?(t.$message.success(n.message),t.submitSuccess(d({},e.model))):t.$message.warning(n.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()},submitSuccess:function(e){if(e.id)this.$emit("ok",e);else{var t=this.$refs.treeSelect.getCurrTreeData();this.expandedRowKeys=[],this.getExpandKeysByPid(e[this.pidField],t,t),e.pid&&0==this.expandedRowKeys.length&&(this.expandedRowKeys=this.subExpandedKeys),this.$emit("ok",e,this.expandedRowKeys.reverse())}},getExpandKeysByPid:function(e,t,n){if(e&&t&&t.length>0)for(var a=0;a<t.length;a++)t[a].key==e?(this.expandedRowKeys.push(t[a].key),this.getExpandKeysByPid(t[a]["parentId"],n,n)):this.getExpandKeysByPid(e,t[a].children,n)}}},u=c,h=n("2877"),p=Object(h["a"])(u,a,i,!1,null,null,null);t["default"]=p.exports}}]);