"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/edit",{

/***/ "./component/layout/edit.js":
/*!**********************************!*\
  !*** ./component/layout/edit.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pages_services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/services/api */ \"./pages/services/api.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction EditItem(props) {\n    _s();\n    const { items } = props;\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    var all = 0;\n    const handleClick = (value)=>{\n        setIsOpen((isOpen)=>!isOpen);\n        var editableText = jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"<textarea />\").val(\"DESCRIPTION...\");\n        editableText.css(\"background-color\", \"rgb(87 83 78)\");\n        jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"#\" + value).replaceWith(editableText);\n        jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"#\" + value).on(\"click\", function() {\n            editableText.hide();\n            //alert(\"Handler for `click` called.\" + editableText.val());\n            _pages_services_api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put({\n                id: value,\n                description: editableText.val()\n            }, \"api/put\");\n            window.location.href = \"http://localhost:3000/edit\";\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-wrap gap-10 pl-40 pt-10\",\n            children: items.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: data.imageUrl,\n                            width: 400,\n                            height: 600,\n                            alt: \"Picture of the author\"\n                        }, void 0, false, {\n                            fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/edit.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pt-10 text-4xl text-white\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/edit.js\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this)\n                        }, data.id, false, {\n                            fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/edit.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this),\n                        console.log(\"data.id======>\" + data.id),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white word \",\n                            id: data.id,\n                            children: [\n                                data.description,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"editClass\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/edit.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/edit.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: data.id,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>handleClick(data.id),\n                                className: \"bg-zinc-950\",\n                                children: \"EDIT/SAVE\"\n                            }, void 0, false, {\n                                fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/edit.js\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/edit.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, data.id, true, {\n                    fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/edit.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/edit.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/edit.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(EditItem, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = EditItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditItem);\nvar _c;\n$RefreshReg$(_c, \"EditItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbGF5b3V0L2VkaXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRTtBQUNSO0FBQ1U7QUFDVTtBQUMzQyxTQUFTSyxTQUFTQyxLQUFLOztJQUNyQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRDtJQUVsQixNQUFNLENBQUNFLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUM7SUFDckMsSUFBSU8sTUFBTTtJQUVWLE1BQU1DLGNBQWMsQ0FBQ0M7UUFDbkJILFVBQVUsQ0FBQ0QsU0FBVyxDQUFDQTtRQUN2QixJQUFJSyxlQUFlWCw2Q0FBQ0EsQ0FBQyxnQkFBZ0JZLEdBQUcsQ0FBQztRQUN6Q0QsYUFBYUUsR0FBRyxDQUFDLG9CQUFvQjtRQUNyQ2IsNkNBQUNBLENBQUMsTUFBTVUsT0FBT0ksV0FBVyxDQUFDSDtRQUMzQlgsNkNBQUNBLENBQUMsTUFBTVUsT0FBT0ssRUFBRSxDQUFDLFNBQVM7WUFDekJKLGFBQWFLLElBQUk7WUFDakIsNERBQTREO1lBRTVEZCwrREFBTyxDQUNMO2dCQUNFZ0IsSUFBSVI7Z0JBQ0pTLGFBQWFSLGFBQWFDLEdBQUc7WUFDL0IsR0FDQTtZQUdGUSxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBR0MsNEJBQW1CO1FBQzVDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ1p2QixNQUFNd0IsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDSDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUM3QixtREFBS0E7NEJBQ0pnQyxLQUFLRCxLQUFLRSxRQUFROzRCQUNsQkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsS0FBSTs7Ozs7O3NDQUVOLDhEQUFDQztzQ0FDQyw0RUFBQ1Q7Z0NBQUlDLFdBQVU7MENBQTZCRSxLQUFLTyxLQUFLOzs7Ozs7MkJBRC9DUCxLQUFLWixFQUFFOzs7Ozt3QkFHZm9CLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJULEtBQUtaLEVBQUU7c0NBQ3ZDLDhEQUFDUzs0QkFBSUMsV0FBVTs0QkFBbUJWLElBQUlZLEtBQUtaLEVBQUU7O2dDQUMxQ1ksS0FBS1gsV0FBVzs4Q0FDakIsOERBQUNRO29DQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7c0NBRWpCLDhEQUFDRDs0QkFBSVQsSUFBSVksS0FBS1osRUFBRTtzQ0FDZCw0RUFBQ3NCO2dDQUNDQyxTQUFTLENBQUNDLElBQU1qQyxZQUFZcUIsS0FBS1osRUFBRTtnQ0FDbkNVLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7OzttQkFuQjZCRSxLQUFLWixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUE0Qm5EO0dBM0RTZjtLQUFBQTtBQTREVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvbGF5b3V0L2VkaXQuanM/MjNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9wYWdlcy9zZXJ2aWNlcy9hcGlcIjtcbmZ1bmN0aW9uIEVkaXRJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHZhciBhbGwgPSAwO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0SXNPcGVuKChpc09wZW4pID0+ICFpc09wZW4pO1xuICAgIHZhciBlZGl0YWJsZVRleHQgPSAkKFwiPHRleHRhcmVhIC8+XCIpLnZhbChcIkRFU0NSSVBUSU9OLi4uXCIpO1xuICAgIGVkaXRhYmxlVGV4dC5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwicmdiKDg3IDgzIDc4KVwiKTtcbiAgICAkKFwiI1wiICsgdmFsdWUpLnJlcGxhY2VXaXRoKGVkaXRhYmxlVGV4dCk7XG4gICAgJChcIiNcIiArIHZhbHVlKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGVkaXRhYmxlVGV4dC5oaWRlKCk7XG4gICAgICAvL2FsZXJ0KFwiSGFuZGxlciBmb3IgYGNsaWNrYCBjYWxsZWQuXCIgKyBlZGl0YWJsZVRleHQudmFsKCkpO1xuXG4gICAgICBhcGkucHV0KFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHZhbHVlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBlZGl0YWJsZVRleHQudmFsKCksXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXBpL3B1dFwiXG4gICAgICApO1xuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHByb2Nlc3MuZW52LnVyaUVkaXQ7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0xMCBwbC00MCBwdC0xMFwiPlxuICAgICAgICB7aXRlbXMubWFwKChkYXRhKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIGtleT17ZGF0YS5pZH0+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlVXJsfVxuICAgICAgICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezYwMH1cbiAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGkga2V5PXtkYXRhLmlkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCB0ZXh0LTR4bCB0ZXh0LXdoaXRlXCI+e2RhdGEudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAge2NvbnNvbGUubG9nKFwiZGF0YS5pZD09PT09PT5cIiArIGRhdGEuaWQpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHdvcmQgXCIgaWQ9e2RhdGEuaWR9PlxuICAgICAgICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q2xhc3NcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD17ZGF0YS5pZH0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZGF0YS5pZCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctemluYy05NTBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRURJVC9TQVZFXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC91bD5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEVkaXRJdGVtO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsIiQiLCJ1c2VTdGF0ZSIsImFwaSIsIkVkaXRJdGVtIiwicHJvcHMiLCJpdGVtcyIsImlzT3BlbiIsInNldElzT3BlbiIsImFsbCIsImhhbmRsZUNsaWNrIiwidmFsdWUiLCJlZGl0YWJsZVRleHQiLCJ2YWwiLCJjc3MiLCJyZXBsYWNlV2l0aCIsIm9uIiwiaGlkZSIsInB1dCIsImlkIiwiZGVzY3JpcHRpb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJwcm9jZXNzIiwiZW52IiwidXJpRWRpdCIsInVsIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiZGF0YSIsInNyYyIsImltYWdlVXJsIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJsaSIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/layout/edit.js\n"));

/***/ })

});