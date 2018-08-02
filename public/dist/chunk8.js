webpackJsonp([8],{

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_Form_vue__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d90c6e6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_Form_vue__ = __webpack_require__(262);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(259)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d90c6e6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_Form_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d90c6e6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_Form_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\modules\\home\\Form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d90c6e6", Component.options)
  } else {
    hotAPI.reload("data-v-2d90c6e6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(260);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("7c7ab735", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d90c6e6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Form.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d90c6e6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Form.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var cov_2i8dbdcuvp = function () {
    var path = 'D:\\Code_Space\\flsite\\public\\src\\components\\modules\\home\\Form.vue',
        hash = 'e611fa2aae1ea75804ea3722878a1a65d42d75a4',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'D:\\Code_Space\\flsite\\public\\src\\components\\modules\\home\\Form.vue',
        statementMap: {
            '0': {
                start: {
                    line: 57,
                    column: 11
                },
                end: {
                    line: 60,
                    column: 5
                }
            }
        },
        fnMap: {},
        branchMap: {},
        s: {
            '0': 0
        },
        f: {},
        b: {},
        inputSourceMap: {
            version: 3,
            sources: ['Form.vue?6c7a0b86'],
            names: [],
            mappings: ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuDA;AACA;AACA;AACA;AACA;AACA',
            sourceRoot: 'src\\components\\modules\\home',
            sourcesContent: ['<template>\r\n<div>\r\n    <div style="postion:absolue;top:0;left:0;width:100%;height:42px;background:#fff;padding:6px;border-bottom:1px solid #cccccc;">\r\n        <div style="float:left;height:30px;line-height:30px;padding:0 12px;background:#4caaff;color:#fff;border-radius:2px;margin-right:6px;box-shadow:0 2px 4px 0 #cccccc">\u6309\u94AE1</div>\r\n        <div style="float:left;height:30px;line-height:30px;padding:0 12px;background:#4caaff;color:#fff;border-radius:2px;margin-right:6px;box-shadow:0 2px 4px 0 #cccccc">\u6309\u94AE2</div>\r\n    </div>\r\n\r\n    <bwu-fieldset :title=\'"Websocket\u8FDE\u63A5"\'>\r\n        <div class="row">\r\n            <bwu-input :title="\'\u90E8\u95E8\'" class="col-3_1"></bwu-input>\r\n            <bwu-input :title="\'\u5B58\u653E\u5730\u5740\'" class="col-3_2"></bwu-input>\r\n        </div>\r\n        <div class="row">\r\n            <bwu-input :title="\'\u578B\u53F7\'" class="col-3_1"></bwu-input>\r\n            <bwu-input :title="\'\u8BA1\u91CF\u5355\u4F4D\'" class="col-3_1"></bwu-input>\r\n            <bwu-input :title="\'\u8BBE\u5907\u7C7B\u522B\'" class="col-3_1"></bwu-input>\r\n        </div>\r\n        \r\n        <div class="row">\r\n            <bwu-input :title="\'\u8BBE\u5907\u7C7B\u522B\'" class="col-1_1" :type=\'"textarea"\'></bwu-input>\r\n        </div>\r\n\r\n    </bwu-fieldset>\r\n    \r\n    \r\n    <bwu-fieldset :title=\'"Websocket\u8FDE\u63A5"\'>\r\n        <div class="row">\r\n            <bwu-input :title="\'\u90E8\u95E8\'" class="col-3_1"></bwu-input>\r\n            <bwu-input :title="\'\u5B58\u653E\u5730\u5740\'" class="col-3_2"></bwu-input>\r\n        </div>\r\n        <div class="row">\r\n            <bwu-input :title="\'\u578B\u53F7\'" class="col-3_1"></bwu-input>\r\n            <bwu-input :title="\'\u8BA1\u91CF\u5355\u4F4D\'" class="col-3_1"></bwu-input>\r\n            <bwu-input :title="\'\u8BBE\u5907\u7C7B\u522B\'" class="col-3_1"></bwu-input>\r\n        </div>\r\n        \r\n        <div class="row">\r\n            <bwu-radio :title="\'\u8BBE\u5907\u7C7B\u522B\'" class="col-1_1" :array="[\'splatoon\',\'splashoot\',\'splatest\',\'splatrun\']" :val.sync = \'radio_value\'></bwu-radio>\r\n        </div>\r\n        \r\n        <div class="row">\r\n            <bwu-checkbox :title="\'\u8BBE\u5907\u7C7B\u522B\'" class="col-1_1" :array="[\'splatoon\',\'splashoot\',\'splatest\',\'splatrun\']" :vals.sync = \'checkbox_value\'></bwu-checkbox>\r\n        </div>\r\n\r\n    </bwu-fieldset>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n    data(){return {\r\n        radio_value:\'splatrun\',\r\n        checkbox_value:[\'splatrun\']\r\n    }}\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n\r\n</style>\r\n\r\n']
        },
        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        cov_2i8dbdcuvp.s[0]++;
        return {
            radio_value: 'splatrun',
            checkbox_value: ['splatrun']
        };
    }
});

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("bwu-fieldset", { attrs: { title: "Websocket连接" } }, [
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("bwu-input", { staticClass: "col-3_1", attrs: { title: "部门" } }),
            _vm._v(" "),
            _c("bwu-input", {
              staticClass: "col-3_2",
              attrs: { title: "存放地址" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("bwu-input", { staticClass: "col-3_1", attrs: { title: "型号" } }),
            _vm._v(" "),
            _c("bwu-input", {
              staticClass: "col-3_1",
              attrs: { title: "计量单位" }
            }),
            _vm._v(" "),
            _c("bwu-input", {
              staticClass: "col-3_1",
              attrs: { title: "设备类别" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("bwu-input", {
              staticClass: "col-1_1",
              attrs: { title: "设备类别", type: "textarea" }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("bwu-fieldset", { attrs: { title: "Websocket连接" } }, [
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("bwu-input", { staticClass: "col-3_1", attrs: { title: "部门" } }),
            _vm._v(" "),
            _c("bwu-input", {
              staticClass: "col-3_2",
              attrs: { title: "存放地址" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("bwu-input", { staticClass: "col-3_1", attrs: { title: "型号" } }),
            _vm._v(" "),
            _c("bwu-input", {
              staticClass: "col-3_1",
              attrs: { title: "计量单位" }
            }),
            _vm._v(" "),
            _c("bwu-input", {
              staticClass: "col-3_1",
              attrs: { title: "设备类别" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("bwu-radio", {
              staticClass: "col-1_1",
              attrs: {
                title: "设备类别",
                array: ["splatoon", "splashoot", "splatest", "splatrun"],
                val: _vm.radio_value
              },
              on: {
                "update:val": function($event) {
                  _vm.radio_value = $event
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("bwu-checkbox", {
              staticClass: "col-1_1",
              attrs: {
                title: "设备类别",
                array: ["splatoon", "splashoot", "splatest", "splatrun"],
                vals: _vm.checkbox_value
              },
              on: {
                "update:vals": function($event) {
                  _vm.checkbox_value = $event
                }
              }
            })
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          postion: "absolue",
          top: "0",
          left: "0",
          width: "100%",
          height: "42px",
          background: "#fff",
          padding: "6px",
          "border-bottom": "1px solid #cccccc"
        }
      },
      [
        _c(
          "div",
          {
            staticStyle: {
              float: "left",
              height: "30px",
              "line-height": "30px",
              padding: "0 12px",
              background: "#4caaff",
              color: "#fff",
              "border-radius": "2px",
              "margin-right": "6px",
              "box-shadow": "0 2px 4px 0 #cccccc"
            }
          },
          [_vm._v("按钮1")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticStyle: {
              float: "left",
              height: "30px",
              "line-height": "30px",
              padding: "0 12px",
              background: "#4caaff",
              color: "#fff",
              "border-radius": "2px",
              "margin-right": "6px",
              "box-shadow": "0 2px 4px 0 #cccccc"
            }
          },
          [_vm._v("按钮2")]
        )
      ]
    )
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2d90c6e6", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=chunk8.js.map?28f9681e2946cf4354a4