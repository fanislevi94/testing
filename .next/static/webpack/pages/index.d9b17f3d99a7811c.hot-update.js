/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/layout/index.js":
/*!***********************************!*\
  !*** ./component/layout/index.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_layout_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/layout/index */ \"./component/layout/index.js\");\n/* harmony import */ var _component_layout_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_component_layout_index__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar __N_SSP = true;\nfunction Home(props) {\n    const { allDatas } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/6 mx-auto text-center  pt-10 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/fanis.jpg\",\n                    width: 900,\n                    height: 900,\n                    alt: \"Picture of the author\",\n                    className: \"image\"\n                }, void 0, false, {\n                    fileName: \"/home/fanis/Desktop/udemy/test2/test2/pages/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/fanis/Desktop/udemy/test2/test2/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-5xl text-center \",\n                children: \"Hi, I'm Fanis\"\n            }, void 0, false, {\n                fileName: \"/home/fanis/Desktop/udemy/test2/test2/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-1xl text-center pb-5\",\n                children: \"Hi, I'm a passionate web developer and here is my blog\"\n            }, void 0, false, {\n                fileName: \"/home/fanis/Desktop/udemy/test2/test2/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-stone-500\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-5xl text-center pt-10 text-white\",\n                        children: \"My projects\"\n                    }, void 0, false, {\n                        fileName: \"/home/fanis/Desktop/udemy/test2/test2/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_component_layout_index__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        items: allDatas\n                    }, void 0, false, {\n                        fileName: \"/home/fanis/Desktop/udemy/test2/test2/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fanis/Desktop/udemy/test2/test2/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fanis/Desktop/udemy/test2/test2/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBR21COztBQUVuQyxTQUFTRSxLQUFLQyxLQUFVO0lBQ3JDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdEO0lBRXJCLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDTixtREFBS0E7b0JBQ0pPLEtBQUk7b0JBQ0pDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLEtBQUk7b0JBQ0pKLFdBQVU7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBd0I7Ozs7OzswQkFDdkMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUE0Qjs7Ozs7OzBCQUczQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBd0M7Ozs7OztrQ0FDdkQsOERBQUNMLGdFQUFTQTt3QkFBQ1UsT0FBT1A7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCMUI7S0FoRHdCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBhcGkgZnJvbSBcIi4vc2VydmljZXMvYXBpXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW5kZXhJdGVtIGZyb20gXCIuLi9jb21wb25lbnQvbGF5b3V0L2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHM6IGFueSkge1xuICBjb25zdCB7IGFsbERhdGFzIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS82IG14LWF1dG8gdGV4dC1jZW50ZXIgIHB0LTEwIFwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvZmFuaXMuanBnXCJcbiAgICAgICAgICB3aWR0aD17OTAwfVxuICAgICAgICAgIGhlaWdodD17OTAwfVxuICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtY2VudGVyIFwiPkhpLCBJJ20gRmFuaXM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0xeGwgdGV4dC1jZW50ZXIgcGItNVwiPlxuICAgICAgICBIaSwgSSdtIGEgcGFzc2lvbmF0ZSB3ZWIgZGV2ZWxvcGVyIGFuZCBoZXJlIGlzIG15IGJsb2dcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS01MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LWNlbnRlciBwdC0xMCB0ZXh0LXdoaXRlXCI+TXkgcHJvamVjdHM8L2Rpdj5cbiAgICAgICAgPEluZGV4SXRlbSBpdGVtcz17YWxsRGF0YXN9IC8+XG5cbiAgICAgICAgey8qPHVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTEwIHBsLTQwIHB0LTEwXCI+XG4gICAgICAgICAgICB7YWxsRGF0YXMubWFwKChkYXRhOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIGtleT17ZGF0YS5pZH0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs2MDB9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxpIGtleT17ZGF0YS5pZH0+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcImdldC9cIiArIGRhdGEudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIHRleHQtNHhsIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB3b3JkXCI+e2RhdGEuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3VsPiovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHByb2Nlc3MuZW52LmN1c3RvbUtleSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsRGF0YXM6IGRhdGEucHJvamVjdHMgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkluZGV4SXRlbSIsIkhvbWUiLCJwcm9wcyIsImFsbERhdGFzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});