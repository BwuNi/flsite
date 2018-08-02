webpackJsonp([0],{

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76edcf2f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(274);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(263)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-76edcf2f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76edcf2f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\modules\\home\\_menu\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76edcf2f", Component.options)
  } else {
    hotAPI.reload("data-v-76edcf2f", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(264);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("6f0c3078", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76edcf2f\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76edcf2f\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"index.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart__ = __webpack_require__(266);
var cov_nbf7674l = function () {
  var path = 'D:\\Code_Space\\flsite\\public\\src\\components\\modules\\home\\_menu\\index.vue',
      hash = '0016ff04a8b04ca1b15f22b580b56eef031bb35d',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'D:\\Code_Space\\flsite\\public\\src\\components\\modules\\home\\_menu\\index.vue',
    statementMap: {
      '0': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 16,
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
      sources: ['index.vue?6bc52fc3'],
      names: [],
      mappings: ';;;;;;;AAOA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA',
      sourceRoot: 'src\\components\\modules\\home\\_menu',
      sourcesContent: ['<template>\r\n\t\t<div class="pmenu">\r\n      <wu-chart></wu-chart>\r\n\t\t</div>\r\n</template>\r\n\t\r\n<script>\r\nimport chart from \'./chart\'\r\nexport default {\r\n  name: \'page_1\',\r\n  components: {\r\n    [\'wu-chart\']: chart\r\n  },\r\n  data() {\r\n    return {\r\n    }\r\n  }\r\n}\r\n\r\n</script>\r\n\t\r\n\t<!-- Add "scoped" attribute to limit CSS to this component only -->\r\n\t<style scoped>\r\n\r\n</style>']
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'page_1',
  components: _defineProperty({}, 'wu-chart', __WEBPACK_IMPORTED_MODULE_0__chart__["a" /* default */]),
  data: function data() {
    cov_nbf7674l.s[0]++;

    return {};
  }
});

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_chart_vue__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0550183b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_chart_vue__ = __webpack_require__(273);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(267)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_chart_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0550183b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_chart_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\modules\\home\\_menu\\chart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0550183b", Component.options)
  } else {
    hotAPI.reload("data-v-0550183b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(268);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("3d2617fc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0550183b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./chart.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0550183b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./chart.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n.custom-tree-node {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n  padding-right: 8px;\n}\n", "", {"version":3,"sources":["D:/Code_Space/flsite/public/src/components/modules/home/_menu/src/components/modules/home/_menu/chart.vue?06c27b66"],"names":[],"mappings":";AAwEA;EACA,QAAA;EACA,cAAA;EACA,oBAAA;EACA,+BAAA;EACA,gBAAA;EACA,mBAAA;CACA","file":"chart.vue","sourcesContent":["<template>\r\n\t\t<div class=\"page_1\">\r\n      <el-tree :data='menu' node-key=\"id\" :expand-on-click-node=\"false\" :props=\"{children: 'children',label: 'title'}\" default-expand-all :render-content=\"renderContent\"></el-tree>\r\n\t\t</div>\r\n\t</template>\r\n\t\r\n<script>\r\nimport uuid from 'uuid/v1'\r\n\r\nexport default {\r\n  name: 'page_1',\r\n  computed: {\r\n  },\r\n  data() {\r\n    return {\r\n      menu:[]\r\n    }\r\n  },\r\n  mounted(){\r\n\r\n    // 拷贝一份 menu 副本\r\n    const menu = JSON.parse(\r\n      JSON.stringify(\r\n        this.$store.state.User.System.modules.map(v => ({ title: v.name, children: v.pages }))\r\n      )\r\n    )\r\n\r\n    // 给 menu 加 id （匿名递归）\r\n    this.menu = (y=>y(y,menu))(\r\n      (y,i)=> i.map(item=>({\r\n        id:uuid(),\r\n        title:item.title,\r\n        src:item.src,\r\n        children:item.children?y(y,item.children):null\r\n      }))\r\n    )\r\n\r\n  },\r\n  methods: {\r\n    append(data) {\r\n      const newChild = { id: uuid(), title: 'testtest', children: [] };\r\n      if (!data.children) {\r\n        this.$set(data, 'children', []);\r\n      }\r\n      data.children.push(newChild);\r\n    },\r\n\r\n    remove(node, data) {\r\n      const parent = node.parent;\r\n      const children = parent.data.children || parent.data;\r\n      const index = children.findIndex(d => d.id === data.id);\r\n      children.splice(index, 1);\r\n    },\r\n\r\n\r\n    renderContent(h, { node, data, store }) {\r\n      return (\r\n        <span class=\"custom-tree-node\">\r\n          <span>{node.label}</span>\r\n          <span>\r\n            <el-button size=\"mini\" type=\"text\" on-click={() => this.append(data)}>Append</el-button>\r\n            <el-button size=\"mini\" type=\"text\" on-click={() => this.remove(node, data)}>Delete</el-button>\r\n          </span>\r\n        </span>)\r\n    }\r\n  }\r\n}\r\n\r\n</script>\r\n\t\r\n\t<style>\r\n\r\n  .custom-tree-node {\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 14px;\r\n    padding-right: 8px;\r\n  }\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v1__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid_v1__);
var cov_x4dmvpwe1 = function () {
  var path = 'D:\\Code_Space\\flsite\\public\\src\\components\\modules\\home\\_menu\\chart.vue',
      hash = '34d08c8f79d20626bbfbe7d0d9699816d6e1a146',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'D:\\Code_Space\\flsite\\public\\src\\components\\modules\\home\\_menu\\chart.vue',
    statementMap: {
      '0': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 17,
          column: 5
        }
      },
      '1': {
        start: {
          line: 22,
          column: 17
        },
        end: {
          line: 26,
          column: 5
        }
      },
      '2': {
        start: {
          line: 24,
          column: 56
        },
        end: {
          line: 24,
          column: 92
        }
      },
      '3': {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 36,
          column: 5
        }
      },
      '4': {
        start: {
          line: 29,
          column: 20
        },
        end: {
          line: 29,
          column: 29
        }
      },
      '5': {
        start: {
          line: 30,
          column: 14
        },
        end: {
          line: 35,
          column: 9
        }
      },
      '6': {
        start: {
          line: 30,
          column: 27
        },
        end: {
          line: 35,
          column: 7
        }
      },
      '7': {
        start: {
          line: 41,
          column: 23
        },
        end: {
          line: 41,
          column: 70
        }
      },
      '8': {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 44,
          column: 7
        }
      },
      '9': {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 40
        }
      },
      '10': {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 45,
          column: 35
        }
      },
      '11': {
        start: {
          line: 49,
          column: 21
        },
        end: {
          line: 49,
          column: 32
        }
      },
      '12': {
        start: {
          line: 50,
          column: 23
        },
        end: {
          line: 50,
          column: 58
        }
      },
      '13': {
        start: {
          line: 51,
          column: 20
        },
        end: {
          line: 51,
          column: 61
        }
      },
      '14': {
        start: {
          line: 51,
          column: 44
        },
        end: {
          line: 51,
          column: 60
        }
      },
      '15': {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 52,
          column: 32
        }
      },
      '16': {
        start: {
          line: 57,
          column: 6
        },
        end: {
          line: 64,
          column: 16
        }
      },
      '17': {
        start: {
          line: 61,
          column: 63
        },
        end: {
          line: 61,
          column: 80
        }
      },
      '18': {
        start: {
          line: 62,
          column: 63
        },
        end: {
          line: 62,
          column: 86
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 24,
            column: 50
          },
          end: {
            line: 24,
            column: 51
          }
        },
        loc: {
          start: {
            line: 24,
            column: 56
          },
          end: {
            line: 24,
            column: 92
          }
        },
        line: 24
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 29,
            column: 17
          },
          end: {
            line: 29,
            column: 18
          }
        },
        loc: {
          start: {
            line: 29,
            column: 20
          },
          end: {
            line: 29,
            column: 29
          }
        },
        line: 29
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 30,
            column: 7
          }
        },
        loc: {
          start: {
            line: 30,
            column: 14
          },
          end: {
            line: 35,
            column: 9
          }
        },
        line: 30
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 30,
            column: 20
          },
          end: {
            line: 30,
            column: 21
          }
        },
        loc: {
          start: {
            line: 30,
            column: 27
          },
          end: {
            line: 35,
            column: 7
          }
        },
        line: 30
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 51,
            column: 39
          },
          end: {
            line: 51,
            column: 40
          }
        },
        loc: {
          start: {
            line: 51,
            column: 44
          },
          end: {
            line: 51,
            column: 60
          }
        },
        line: 51
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 61,
            column: 57
          },
          end: {
            line: 61,
            column: 58
          }
        },
        loc: {
          start: {
            line: 61,
            column: 63
          },
          end: {
            line: 61,
            column: 80
          }
        },
        line: 61
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 62,
            column: 57
          },
          end: {
            line: 62,
            column: 58
          }
        },
        loc: {
          start: {
            line: 62,
            column: 63
          },
          end: {
            line: 62,
            column: 86
          }
        },
        line: 62
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 34,
            column: 17
          },
          end: {
            line: 34,
            column: 54
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 34,
            column: 31
          },
          end: {
            line: 34,
            column: 49
          }
        }, {
          start: {
            line: 34,
            column: 50
          },
          end: {
            line: 34,
            column: 54
          }
        }],
        line: 34
      },
      '1': {
        loc: {
          start: {
            line: 42,
            column: 6
          },
          end: {
            line: 44,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 42,
            column: 6
          },
          end: {
            line: 44,
            column: 7
          }
        }, {
          start: {
            line: 42,
            column: 6
          },
          end: {
            line: 44,
            column: 7
          }
        }],
        line: 42
      },
      '2': {
        loc: {
          start: {
            line: 50,
            column: 23
          },
          end: {
            line: 50,
            column: 58
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 50,
            column: 23
          },
          end: {
            line: 50,
            column: 43
          }
        }, {
          start: {
            line: 50,
            column: 47
          },
          end: {
            line: 50,
            column: 58
          }
        }],
        line: 50
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    inputSourceMap: {
      version: 3,
      sources: ['chart.vue?06c27b66'],
      names: [],
      mappings: ';;;;;;;AAOA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;;;AAGA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA',
      sourceRoot: 'src\\components\\modules\\home\\_menu',
      sourcesContent: ['<template>\r\n\t\t<div class="page_1">\r\n      <el-tree :data=\'menu\' node-key="id" :expand-on-click-node="false" :props="{children: \'children\',label: \'title\'}" default-expand-all :render-content="renderContent"></el-tree>\r\n\t\t</div>\r\n\t</template>\r\n\t\r\n<script>\r\nimport uuid from \'uuid/v1\'\r\n\r\nexport default {\r\n  name: \'page_1\',\r\n  computed: {\r\n  },\r\n  data() {\r\n    return {\r\n      menu:[]\r\n    }\r\n  },\r\n  mounted(){\r\n\r\n    // \u62F7\u8D1D\u4E00\u4EFD menu \u526F\u672C\r\n    const menu = JSON.parse(\r\n      JSON.stringify(\r\n        this.$store.state.User.System.modules.map(v => ({ title: v.name, children: v.pages }))\r\n      )\r\n    )\r\n\r\n    // \u7ED9 menu \u52A0 id \uFF08\u533F\u540D\u9012\u5F52\uFF09\r\n    this.menu = (y=>y(y,menu))(\r\n      (y,i)=> i.map(item=>({\r\n        id:uuid(),\r\n        title:item.title,\r\n        src:item.src,\r\n        children:item.children?y(y,item.children):null\r\n      }))\r\n    )\r\n\r\n  },\r\n  methods: {\r\n    append(data) {\r\n      const newChild = { id: uuid(), title: \'testtest\', children: [] };\r\n      if (!data.children) {\r\n        this.$set(data, \'children\', []);\r\n      }\r\n      data.children.push(newChild);\r\n    },\r\n\r\n    remove(node, data) {\r\n      const parent = node.parent;\r\n      const children = parent.data.children || parent.data;\r\n      const index = children.findIndex(d => d.id === data.id);\r\n      children.splice(index, 1);\r\n    },\r\n\r\n\r\n    renderContent(h, { node, data, store }) {\r\n      return (\r\n        <span class="custom-tree-node">\r\n          <span>{node.label}</span>\r\n          <span>\r\n            <el-button size="mini" type="text" on-click={() => this.append(data)}>Append</el-button>\r\n            <el-button size="mini" type="text" on-click={() => this.remove(node, data)}>Delete</el-button>\r\n          </span>\r\n        </span>)\r\n    }\r\n  }\r\n}\r\n\r\n</script>\r\n\t\r\n\t<style>\r\n\r\n  .custom-tree-node {\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 14px;\r\n    padding-right: 8px;\r\n  }\r\n</style>']
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'page_1',
  computed: {},
  data: function data() {
    cov_x4dmvpwe1.s[0]++;

    return {
      menu: []
    };
  },
  mounted: function mounted() {

    // 拷贝一份 menu 副本
    var menu = (cov_x4dmvpwe1.s[1]++, JSON.parse(JSON.stringify(this.$store.state.User.System.modules.map(function (v) {
      cov_x4dmvpwe1.f[0]++;
      cov_x4dmvpwe1.s[2]++;
      return { title: v.name, children: v.pages };
    }))));

    // 给 menu 加 id （匿名递归）
    cov_x4dmvpwe1.s[3]++;
    this.menu = function (y) {
      cov_x4dmvpwe1.f[1]++;
      cov_x4dmvpwe1.s[4]++;
      return y(y, menu);
    }(function (y, i) {
      cov_x4dmvpwe1.f[2]++;
      cov_x4dmvpwe1.s[5]++;
      return i.map(function (item) {
        cov_x4dmvpwe1.f[3]++;
        cov_x4dmvpwe1.s[6]++;
        return {
          id: __WEBPACK_IMPORTED_MODULE_0_uuid_v1___default()(),
          title: item.title,
          src: item.src,
          children: item.children ? (cov_x4dmvpwe1.b[0][0]++, y(y, item.children)) : (cov_x4dmvpwe1.b[0][1]++, null)
        };
      });
    });
  },

  methods: {
    append: function append(data) {
      var newChild = (cov_x4dmvpwe1.s[7]++, { id: __WEBPACK_IMPORTED_MODULE_0_uuid_v1___default()(), title: 'testtest', children: [] });
      cov_x4dmvpwe1.s[8]++;
      if (!data.children) {
        cov_x4dmvpwe1.b[1][0]++;
        cov_x4dmvpwe1.s[9]++;

        this.$set(data, 'children', []);
      } else {
        cov_x4dmvpwe1.b[1][1]++;
      }
      cov_x4dmvpwe1.s[10]++;
      data.children.push(newChild);
    },
    remove: function remove(node, data) {
      var parent = (cov_x4dmvpwe1.s[11]++, node.parent);
      var children = (cov_x4dmvpwe1.s[12]++, (cov_x4dmvpwe1.b[2][0]++, parent.data.children) || (cov_x4dmvpwe1.b[2][1]++, parent.data));
      var index = (cov_x4dmvpwe1.s[13]++, children.findIndex(function (d) {
        cov_x4dmvpwe1.f[4]++;
        cov_x4dmvpwe1.s[14]++;
        return d.id === data.id;
      }));
      cov_x4dmvpwe1.s[15]++;
      children.splice(index, 1);
    },
    renderContent: function renderContent(h, _ref) {
      var _this = this;

      var node = _ref.node,
          data = _ref.data,
          store = _ref.store;
      cov_x4dmvpwe1.s[16]++;

      return h(
        'span',
        { 'class': 'custom-tree-node' },
        [h('span', [node.label]), h('span', [h(
          'el-button',
          {
            attrs: { size: 'mini', type: 'text' },
            on: {
              'click': function click() {
                cov_x4dmvpwe1.f[5]++;
                cov_x4dmvpwe1.s[17]++;
                return _this.append(data);
              }
            }
          },
          ['Append']
        ), h(
          'el-button',
          {
            attrs: { size: 'mini', type: 'text' },
            on: {
              'click': function click() {
                cov_x4dmvpwe1.f[6]++;
                cov_x4dmvpwe1.s[18]++;
                return _this.remove(node, data);
              }
            }
          },
          ['Delete']
        )])]
      );
    }
  }
});

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(271);
var bytesToUuid = __webpack_require__(272);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ 271:
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ 272:
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page_1" },
    [
      _c("el-tree", {
        attrs: {
          data: _vm.menu,
          "node-key": "id",
          "expand-on-click-node": false,
          props: { children: "children", label: "title" },
          "default-expand-all": "",
          "render-content": _vm.renderContent
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0550183b", esExports)
  }
}

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "pmenu" }, [_c("wu-chart")], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-76edcf2f", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=chunk0.js.map?2eff3638537e1d129b2d