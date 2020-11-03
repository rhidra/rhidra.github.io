webpackHotUpdate_N_E("pages/index",{

/***/ "./components/contact-form.js":
/*!************************************!*\
  !*** ./components/contact-form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactForm; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/esm/index.js\");\n\n\nvar _jsxFileName = \"/home/rhidra/portfolio/components/contact-form.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction ContactForm() {\n  var _this = this;\n\n  function validate(values) {\n    var errors = {};\n\n    if (!values.email) {\n      errors.email = 'Required';\n    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {\n      errors.email = 'Invalid email address';\n    }\n\n    return errors;\n  }\n\n  function submit(values, _ref) {\n    var setSubmitting = _ref.setSubmitting;\n    setTimeout(function () {\n      alert(JSON.stringify(values, null, 2));\n      setSubmitting(false);\n    }, 400);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_2__[\"Formik\"], {\n    initialValues: {\n      email: '',\n      name: '',\n      msg: ''\n    },\n    validate: validate,\n    onSubmit: submit,\n    children: function children(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n          name: \"name\",\n          validate: validateName,\n          children: function children(_ref2) {\n            var field = _ref2.field,\n                form = _ref2.form;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"FormControl\"], {\n              isInvalid: form.errors.name && form.touched.name,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"FormLabel\"], {\n                htmlFor: \"name\",\n                children: \"First name\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Input, _objectSpread(_objectSpread({}, field), {}, {\n                id: \"name\",\n                placeholder: \"name\"\n              }), void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"FormErrorMessage\"], {\n                children: form.errors.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 15\n            }, _this);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Button, {\n          mt: 4,\n          colorScheme: \"teal\",\n          isLoading: props.isSubmitting,\n          type: \"submit\",\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}\n_c = ContactForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LWZvcm0uanM/N2ZhOCJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsInZhbGlkYXRlIiwidmFsdWVzIiwiZXJyb3JzIiwiZW1haWwiLCJ0ZXN0Iiwic3VibWl0Iiwic2V0U3VibWl0dGluZyIsInNldFRpbWVvdXQiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwibXNnIiwicHJvcHMiLCJ2YWxpZGF0ZU5hbWUiLCJmaWVsZCIsImZvcm0iLCJ0b3VjaGVkIiwiaXNTdWJtaXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUNwQyxXQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtBQUN4QixRQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFDQSxRQUFJLENBQUNELE1BQU0sQ0FBQ0UsS0FBWixFQUFtQjtBQUNqQkQsWUFBTSxDQUFDQyxLQUFQLEdBQWUsVUFBZjtBQUNELEtBRkQsTUFFTyxJQUNMLENBQUMsMkNBQTJDQyxJQUEzQyxDQUFnREgsTUFBTSxDQUFDRSxLQUF2RCxDQURJLEVBRUw7QUFDQUQsWUFBTSxDQUFDQyxLQUFQLEdBQWUsdUJBQWY7QUFDRDs7QUFDRCxXQUFPRCxNQUFQO0FBQ0Q7O0FBRUQsV0FBU0csTUFBVCxDQUFnQkosTUFBaEIsUUFBeUM7QUFBQSxRQUFoQkssYUFBZ0IsUUFBaEJBLGFBQWdCO0FBQ3ZDQyxjQUFVLENBQUMsWUFBTTtBQUNmQyxXQUFLLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVCxNQUFmLEVBQXVCLElBQXZCLEVBQTZCLENBQTdCLENBQUQsQ0FBTDtBQUNBSyxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNELEtBSFMsRUFHUCxHQUhPLENBQVY7QUFJRDs7QUFFRCxzQkFDRSxxRUFBQyw2Q0FBRDtBQUFRLGlCQUFhLEVBQUU7QUFBQ0gsV0FBSyxFQUFFLEVBQVI7QUFBWVEsVUFBSSxFQUFFLEVBQWxCO0FBQXNCQyxTQUFHLEVBQUU7QUFBM0IsS0FBdkI7QUFBdUQsWUFBUSxFQUFFWixRQUFqRTtBQUEyRSxZQUFRLEVBQUVLLE1BQXJGO0FBQUEsY0FDRyxrQkFBQ1EsS0FBRDtBQUFBLDBCQUNDLHFFQUFDLDJDQUFEO0FBQUEsZ0NBQ0UscUVBQUMsNENBQUQ7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBUSxFQUFFQyxZQUE3QjtBQUFBLG9CQUNHO0FBQUEsZ0JBQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLGdCQUFVQyxJQUFWLFNBQVVBLElBQVY7QUFBQSxnQ0FDQyxxRUFBQywyREFBRDtBQUFhLHVCQUFTLEVBQUVBLElBQUksQ0FBQ2QsTUFBTCxDQUFZUyxJQUFaLElBQW9CSyxJQUFJLENBQUNDLE9BQUwsQ0FBYU4sSUFBekQ7QUFBQSxzQ0FDRSxxRUFBQyx5REFBRDtBQUFXLHVCQUFPLEVBQUMsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRSxxRUFBQyxLQUFELGtDQUFXSSxLQUFYO0FBQWtCLGtCQUFFLEVBQUMsTUFBckI7QUFBNEIsMkJBQVcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBR0UscUVBQUMsZ0VBQUQ7QUFBQSwwQkFBbUJDLElBQUksQ0FBQ2QsTUFBTCxDQUFZUztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVdFLHFFQUFDLE1BQUQ7QUFBUSxZQUFFLEVBQUUsQ0FBWjtBQUFlLHFCQUFXLEVBQUMsTUFBM0I7QUFBa0MsbUJBQVMsRUFBRUUsS0FBSyxDQUFDSyxZQUFuRDtBQUFpRSxjQUFJLEVBQUMsUUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDtLQXpDdUJuQixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250YWN0LWZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkLCBFcnJvck1lc3NhZ2UgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCwgRm9ybUVycm9yTWVzc2FnZSB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuICBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZXMpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgICBpZiAoIXZhbHVlcy5lbWFpbCkge1xuICAgICAgZXJyb3JzLmVtYWlsID0gJ1JlcXVpcmVkJztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpXG4gICAgKSB7XG4gICAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJztcbiAgICB9XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1Ym1pdCh2YWx1ZXMsIHtzZXRTdWJtaXR0aW5nfSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG4gICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICB9LCA0MDApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3tlbWFpbDogJycsIG5hbWU6ICcnLCBtc2c6ICcnfX0gdmFsaWRhdGU9e3ZhbGlkYXRlfSBvblN1Ym1pdD17c3VibWl0fT5cbiAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPEZpZWxkIG5hbWU9XCJuYW1lXCIgdmFsaWRhdGU9e3ZhbGlkYXRlTmFtZX0+XG4gICAgICAgICAgICB7KHsgZmllbGQsIGZvcm0gfSkgPT4gKFxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNJbnZhbGlkPXtmb3JtLmVycm9ycy5uYW1lICYmIGZvcm0udG91Y2hlZC5uYW1lfT5cbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+Rmlyc3QgbmFtZTwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgIDxJbnB1dCB7Li4uZmllbGR9IGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2Zvcm0uZXJyb3JzLm5hbWV9PC9Gb3JtRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgPEJ1dHRvbiBtdD17NH0gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgaXNMb2FkaW5nPXtwcm9wcy5pc1N1Ym1pdHRpbmd9IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contact-form.js\n");

/***/ })

})