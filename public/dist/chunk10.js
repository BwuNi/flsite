webpackJsonp([10],{203:function(t,s,a){"use strict";function r(t){a(204)}Object.defineProperty(s,"__esModule",{value:!0});var i=a(206),c=a(207),n=a(7),e=r,l=n(i.a,c.a,!1,e,"data-v-705b0fac",null);s.default=l.exports},204:function(t,s,a){var r=a(205);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(6)("337d4eb8",r,!0)},205:function(t,s,a){s=t.exports=a(5)(void 0),s.push([t.i,"",""])},206:function(t,s,a){"use strict";var r=function(){var t="D:\\Code_Space\\flsite\\public\\src\\pc\\components\\modules\\home\\Form.vue",s="24d3d58bafdc2f312bf8a9a493ccb017524f5c84",a=function(){}.constructor,r=new a("return this")(),i="__coverage__",c={path:"D:\\Code_Space\\flsite\\public\\src\\pc\\components\\modules\\home\\Form.vue",statementMap:{0:{start:{line:57,column:11},end:{line:60,column:5}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},inputSourceMap:{version:3,sources:["Form.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuDA;AACA;AACA;AACA;AACA;AACA",sourceRoot:"src\\pc\\components\\modules\\home",sourcesContent:['<template>\r\n<div>\r\n    <div style="postion:absolue;top:0;left:0;width:100%;height:42px;background:#fff;padding:6px;border-bottom:1px solid #cccccc;">\r\n        <div style="float:left;height:30px;line-height:30px;padding:0 12px;background:#4caaff;color:#fff;border-radius:2px;margin-right:6px;box-shadow:0 2px 4px 0 #cccccc">按钮1</div>\r\n        <div style="float:left;height:30px;line-height:30px;padding:0 12px;background:#4caaff;color:#fff;border-radius:2px;margin-right:6px;box-shadow:0 2px 4px 0 #cccccc">按钮2</div>\r\n    </div>\r\n\r\n    <bwu-fieldset :title=\'"Websocket连接"\'>\r\n        <div class="row">\r\n            <bwu-input :title="\'部门\'" class="col-3_1"></bwu-input>\r\n            <bwu-input :title="\'存放地址\'" class="col-3_2"></bwu-input>\r\n        </div>\r\n        <div class="row">\r\n            <bwu-input :title="\'型号\'" class="col-3_1"></bwu-input>\r\n            <bwu-input :title="\'计量单位\'" class="col-3_1"></bwu-input>\r\n            <bwu-input :title="\'设备类别\'" class="col-3_1"></bwu-input>\r\n        </div>\r\n        \r\n        <div class="row">\r\n            <bwu-input :title="\'设备类别\'" class="col-1_1" :type=\'"textarea"\'></bwu-input>\r\n        </div>\r\n\r\n    </bwu-fieldset>\r\n    \r\n    \r\n    <bwu-fieldset :title=\'"Websocket连接"\'>\r\n        <div class="row">\r\n            <bwu-input :title="\'部门\'" class="col-3_1"></bwu-input>\r\n            <bwu-input :title="\'存放地址\'" class="col-3_2"></bwu-input>\r\n        </div>\r\n        <div class="row">\r\n            <bwu-input :title="\'型号\'" class="col-3_1"></bwu-input>\r\n            <bwu-input :title="\'计量单位\'" class="col-3_1"></bwu-input>\r\n            <bwu-input :title="\'设备类别\'" class="col-3_1"></bwu-input>\r\n        </div>\r\n        \r\n        <div class="row">\r\n            <bwu-radio :title="\'设备类别\'" class="col-1_1" :array="[\'splatoon\',\'splashoot\',\'splatest\',\'splatrun\']" :val.sync = \'radio_value\'></bwu-radio>\r\n        </div>\r\n        \r\n        <div class="row">\r\n            <bwu-checkbox :title="\'设备类别\'" class="col-1_1" :array="[\'splatoon\',\'splashoot\',\'splatest\',\'splatrun\']" :vals.sync = \'checkbox_value\'></bwu-checkbox>\r\n        </div>\r\n\r\n    </bwu-fieldset>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n    data(){return {\r\n        radio_value:\'splatrun\',\r\n        checkbox_value:[\'splatrun\']\r\n    }}\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n\r\n</style>\r\n\r\n']},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},n=r[i]||(r[i]={});return n[t]&&n[t].hash===s?n[t]:(c.hash=s,n[t]=c)}();s.a={data:function(){return r.s[0]++,{radio_value:"splatrun",checkbox_value:["splatrun"]}}}},207:function(t,s,a){"use strict";var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),t._v(" "),a("bwu-fieldset",{attrs:{title:"Websocket连接"}},[a("div",{staticClass:"row"},[a("bwu-input",{staticClass:"col-3_1",attrs:{title:"部门"}}),t._v(" "),a("bwu-input",{staticClass:"col-3_2",attrs:{title:"存放地址"}})],1),t._v(" "),a("div",{staticClass:"row"},[a("bwu-input",{staticClass:"col-3_1",attrs:{title:"型号"}}),t._v(" "),a("bwu-input",{staticClass:"col-3_1",attrs:{title:"计量单位"}}),t._v(" "),a("bwu-input",{staticClass:"col-3_1",attrs:{title:"设备类别"}})],1),t._v(" "),a("div",{staticClass:"row"},[a("bwu-input",{staticClass:"col-1_1",attrs:{title:"设备类别",type:"textarea"}})],1)]),t._v(" "),a("bwu-fieldset",{attrs:{title:"Websocket连接"}},[a("div",{staticClass:"row"},[a("bwu-input",{staticClass:"col-3_1",attrs:{title:"部门"}}),t._v(" "),a("bwu-input",{staticClass:"col-3_2",attrs:{title:"存放地址"}})],1),t._v(" "),a("div",{staticClass:"row"},[a("bwu-input",{staticClass:"col-3_1",attrs:{title:"型号"}}),t._v(" "),a("bwu-input",{staticClass:"col-3_1",attrs:{title:"计量单位"}}),t._v(" "),a("bwu-input",{staticClass:"col-3_1",attrs:{title:"设备类别"}})],1),t._v(" "),a("div",{staticClass:"row"},[a("bwu-radio",{staticClass:"col-1_1",attrs:{title:"设备类别",array:["splatoon","splashoot","splatest","splatrun"],val:t.radio_value},on:{"update:val":function(s){t.radio_value=s}}})],1),t._v(" "),a("div",{staticClass:"row"},[a("bwu-checkbox",{staticClass:"col-1_1",attrs:{title:"设备类别",array:["splatoon","splashoot","splatest","splatrun"],vals:t.checkbox_value},on:{"update:vals":function(s){t.checkbox_value=s}}})],1)])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticStyle:{postion:"absolue",top:"0",left:"0",width:"100%",height:"42px",background:"#fff",padding:"6px","border-bottom":"1px solid #cccccc"}},[a("div",{staticStyle:{float:"left",height:"30px","line-height":"30px",padding:"0 12px",background:"#4caaff",color:"#fff","border-radius":"2px","margin-right":"6px","box-shadow":"0 2px 4px 0 #cccccc"}},[t._v("按钮1")]),t._v(" "),a("div",{staticStyle:{float:"left",height:"30px","line-height":"30px",padding:"0 12px",background:"#4caaff",color:"#fff","border-radius":"2px","margin-right":"6px","box-shadow":"0 2px 4px 0 #cccccc"}},[t._v("按钮2")])])}],c={render:r,staticRenderFns:i};s.a=c}});
//# sourceMappingURL=chunk10.js.map?3e9efdc93b7b8e6e53eb