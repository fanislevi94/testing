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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction EditItem(props) {\n    _s();\n    const { items } = props;\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    var all = 0;\n    const handleClick = (value)=>{\n        console.log(\"click value\" + value);\n        // setIsOpen((isOpen) => !isOpen);\n        if (!isOpen) {\n            all = 1;\n            setIsOpen((isOpen)=>!isOpen);\n            var editableText = jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"<textarea />\").val(\"DESCRIPTION...\");\n            jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"#\" + value).replaceWith(editableText);\n        } else {\n            alert(\"saved\");\n            window.location.href = \"http://localhost:3001/edit\";\n        }\n    };\n    const handleClickSec = (value)=>{\n        var editableText = jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"<textarea />\").val(\"DESCRIPTION...\");\n        jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"#\" + value).replaceWith(editableText);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-wrap gap-10 pl-40 pt-10\",\n            children: items.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: data.imageUrl,\n                            width: 400,\n                            height: 600,\n                            alt: \"Picture of the author\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"get/\" + data.title,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pt-10 text-4xl text-white\",\n                                    children: data.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this)\n                        }, data.id, false, {\n                            fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this),\n                        console.log(\"data.id======>\" + data.id),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white word \",\n                            id: data.id,\n                            children: [\n                                data.description,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"editClass\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: data.id,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>handleClick(data.id),\n                                className: \"bg-zinc-950\",\n                                children: \"EDIT/SAVE\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, data.id, true, {\n                    fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(EditItem, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = EditItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditItem);\nvar _c;\n$RefreshReg$(_c, \"EditItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbGF5b3V0L2VkaXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBQ1I7QUFDVTtBQUNqQyxTQUFTSSxTQUFTQyxLQUFLOztJQUNyQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRDtJQUVsQixNQUFNLENBQUNFLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFDckMsSUFBSU0sTUFBTTtJQUNWLE1BQU1DLGNBQWMsQ0FBQ0M7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JGO1FBQzVCLGtDQUFrQztRQUNsQyxJQUFJLENBQUNKLFFBQVE7WUFDWEUsTUFBTTtZQUNORCxVQUFVLENBQUNELFNBQVcsQ0FBQ0E7WUFDdkIsSUFBSU8sZUFBZVosNkNBQUNBLENBQUMsZ0JBQWdCYSxHQUFHLENBQUM7WUFDekNiLDZDQUFDQSxDQUFDLE1BQU1TLE9BQU9LLFdBQVcsQ0FBQ0Y7UUFDN0IsT0FBTztZQUNMRyxNQUFNO1lBQ05DLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHQyw0QkFBbUI7UUFDNUM7SUFDRjtJQUVBLE1BQU1HLGlCQUFpQixDQUFDYjtRQUN0QixJQUFJRyxlQUFlWiw2Q0FBQ0EsQ0FBQyxnQkFBZ0JhLEdBQUcsQ0FBQztRQUN6Q2IsNkNBQUNBLENBQUMsTUFBTVMsT0FBT0ssV0FBVyxDQUFDRjtJQUM3QjtJQUNBLHFCQUNFLDhEQUFDVztrQkFDQyw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFDWnJCLE1BQU1zQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNIO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQzFCLG1EQUFLQTs0QkFDSjZCLEtBQUtELEtBQUtFLFFBQVE7NEJBQ2xCQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxLQUFJOzs7Ozs7c0NBRU4sOERBQUNDO3NDQUNDLDRFQUFDbkMsa0RBQUlBO2dDQUFDb0IsTUFBTSxTQUFTUyxLQUFLTyxLQUFLOzBDQUM3Qiw0RUFBQ1Y7b0NBQUlDLFdBQVU7OENBQTZCRSxLQUFLTyxLQUFLOzs7Ozs7Ozs7OzsyQkFGakRQLEtBQUtRLEVBQUU7Ozs7O3dCQUtmekIsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQmdCLEtBQUtRLEVBQUU7c0NBQ3ZDLDhEQUFDWDs0QkFBSUMsV0FBVTs0QkFBbUJVLElBQUlSLEtBQUtRLEVBQUU7O2dDQUMxQ1IsS0FBS1MsV0FBVzs4Q0FDakIsOERBQUNaO29DQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7c0NBRWpCLDhEQUFDRDs0QkFBSVcsSUFBSVIsS0FBS1EsRUFBRTtzQ0FDZCw0RUFBQ0U7Z0NBQ0NDLFNBQVMsQ0FBQ0MsSUFBTS9CLFlBQVltQixLQUFLUSxFQUFFO2dDQUNuQ1YsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7O21CQXJCNkJFLEtBQUtRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQThCbkQ7R0F6RFNqQztLQUFBQTtBQTBEVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvbGF5b3V0L2VkaXQuanM/MjNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5mdW5jdGlvbiBFZGl0SXRlbShwcm9wcykge1xuICBjb25zdCB7IGl0ZW1zIH0gPSBwcm9wcztcblxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICB2YXIgYWxsID0gMDtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIHZhbHVlXCIgKyB2YWx1ZSk7XG4gICAgLy8gc2V0SXNPcGVuKChpc09wZW4pID0+ICFpc09wZW4pO1xuICAgIGlmICghaXNPcGVuKSB7XG4gICAgICBhbGwgPSAxO1xuICAgICAgc2V0SXNPcGVuKChpc09wZW4pID0+ICFpc09wZW4pO1xuICAgICAgdmFyIGVkaXRhYmxlVGV4dCA9ICQoXCI8dGV4dGFyZWEgLz5cIikudmFsKFwiREVTQ1JJUFRJT04uLi5cIik7XG4gICAgICAkKFwiI1wiICsgdmFsdWUpLnJlcGxhY2VXaXRoKGVkaXRhYmxlVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwic2F2ZWRcIik7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHByb2Nlc3MuZW52LnVyaUVkaXQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrU2VjID0gKHZhbHVlKSA9PiB7XG4gICAgdmFyIGVkaXRhYmxlVGV4dCA9ICQoXCI8dGV4dGFyZWEgLz5cIikudmFsKFwiREVTQ1JJUFRJT04uLi5cIik7XG4gICAgJChcIiNcIiArIHZhbHVlKS5yZXBsYWNlV2l0aChlZGl0YWJsZVRleHQpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTEwIHBsLTQwIHB0LTEwXCI+XG4gICAgICAgIHtpdGVtcy5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIga2V5PXtkYXRhLmlkfT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1hZ2VVcmx9XG4gICAgICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgICAgIGhlaWdodD17NjAwfVxuICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsaSBrZXk9e2RhdGEuaWR9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtcImdldC9cIiArIGRhdGEudGl0bGV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTAgdGV4dC00eGwgdGV4dC13aGl0ZVwiPntkYXRhLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAge2NvbnNvbGUubG9nKFwiZGF0YS5pZD09PT09PT5cIiArIGRhdGEuaWQpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHdvcmQgXCIgaWQ9e2RhdGEuaWR9PlxuICAgICAgICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q2xhc3NcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD17ZGF0YS5pZH0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZGF0YS5pZCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctemluYy05NTBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRURJVC9TQVZFXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC91bD5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEVkaXRJdGVtO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsIiQiLCJ1c2VTdGF0ZSIsIkVkaXRJdGVtIiwicHJvcHMiLCJpdGVtcyIsImlzT3BlbiIsInNldElzT3BlbiIsImFsbCIsImhhbmRsZUNsaWNrIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZWRpdGFibGVUZXh0IiwidmFsIiwicmVwbGFjZVdpdGgiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInByb2Nlc3MiLCJlbnYiLCJ1cmlFZGl0IiwiaGFuZGxlQ2xpY2tTZWMiLCJ1bCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImRhdGEiLCJzcmMiLCJpbWFnZVVybCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibGkiLCJ0aXRsZSIsImlkIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/layout/edit.js\n"));

/***/ })

});