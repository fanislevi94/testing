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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction EditItem(props) {\n    _s();\n    const { items } = props;\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    var value = null;\n    const handleClick = (value)=>{\n        console.log(\"click value\" + value);\n        // setIsOpen((isOpen) => !isOpen);\n        if (!isOpen) {\n            setIsOpen((isOpen)=>!isOpen);\n            var editableText = jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"<textarea />\").val(\"DESCRIPTION...\");\n            jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"#\" + value).replaceWith(editableText);\n            value = jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"#\" + value).replaceWith(editableText);\n        } else {\n            alert(value);\n            alert(\"saved\");\n        //window.location.href = process.env.uriEdit;\n        }\n    };\n    const handleClickSec = (value)=>{\n        var editableText = jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"<textarea />\").val(\"DESCRIPTION...\");\n        jquery__WEBPACK_IMPORTED_MODULE_3___default()(\"#\" + value).replaceWith(editableText);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-wrap gap-10 pl-40 pt-10\",\n            children: items.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: data.imageUrl,\n                            width: 400,\n                            height: 600,\n                            alt: \"Picture of the author\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"get/\" + data.title,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pt-10 text-4xl text-white\",\n                                    children: data.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this)\n                        }, data.id, false, {\n                            fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this),\n                        console.log(\"data.id======>\" + data.id),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white word \",\n                            id: data.id,\n                            children: [\n                                data.description,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"editClass\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: data.id,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>handleClick(data.id),\n                                className: \"bg-zinc-950\",\n                                children: \"EDIT/SAVE\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, data.id, true, {\n                    fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\30694\\\\Downloads\\\\marinatos\\\\testing-main-new\\\\testing-master\\\\testing-master\\\\component\\\\layout\\\\edit.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(EditItem, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = EditItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditItem);\nvar _c;\n$RefreshReg$(_c, \"EditItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbGF5b3V0L2VkaXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBQ1I7QUFDVTtBQUNqQyxTQUFTSSxTQUFTQyxLQUFLOztJQUNyQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRDtJQUVsQixNQUFNLENBQUNFLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFDckMsSUFBSU0sUUFBTTtJQUNWLE1BQU1DLGNBQWMsQ0FBQ0Q7UUFDbkJFLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JIO1FBQzVCLGtDQUFrQztRQUNsQyxJQUFJLENBQUNGLFFBQVE7WUFDWEMsVUFBVSxDQUFDRCxTQUFXLENBQUNBO1lBQ3ZCLElBQUlNLGVBQWVYLDZDQUFDQSxDQUFDLGdCQUFnQlksR0FBRyxDQUFDO1lBQ3pDWiw2Q0FBQ0EsQ0FBQyxNQUFNTyxPQUFPTSxXQUFXLENBQUNGO1lBQzNCSixRQUFNUCw2Q0FBQ0EsQ0FBQyxNQUFNTyxPQUFPTSxXQUFXLENBQUNGO1FBR25DLE9BQU87WUFDTEcsTUFBTVA7WUFDTk8sTUFBTTtRQUNOLDZDQUE2QztRQUMvQztJQUNGO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNSO1FBQ3RCLElBQUlJLGVBQWVYLDZDQUFDQSxDQUFDLGdCQUFnQlksR0FBRyxDQUFDO1FBQ3pDWiw2Q0FBQ0EsQ0FBQyxNQUFNTyxPQUFPTSxXQUFXLENBQUNGO0lBQzdCO0lBQ0EscUJBQ0UsOERBQUNLO2tCQUNDLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNaZCxNQUFNZSxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNIO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ25CLG1EQUFLQTs0QkFDSnNCLEtBQUtELEtBQUtFLFFBQVE7NEJBQ2xCQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxLQUFJOzs7Ozs7c0NBRU4sOERBQUNDO3NDQUNDLDRFQUFDNUIsa0RBQUlBO2dDQUFDNkIsTUFBTSxTQUFTUCxLQUFLUSxLQUFLOzBDQUM3Qiw0RUFBQ1g7b0NBQUlDLFdBQVU7OENBQTZCRSxLQUFLUSxLQUFLOzs7Ozs7Ozs7OzsyQkFGakRSLEtBQUtTLEVBQUU7Ozs7O3dCQUtmcEIsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQlUsS0FBS1MsRUFBRTtzQ0FDdkMsOERBQUNaOzRCQUFJQyxXQUFVOzRCQUFtQlcsSUFBSVQsS0FBS1MsRUFBRTs7Z0NBQzFDVCxLQUFLVSxXQUFXOzhDQUNqQiw4REFBQ2I7b0NBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FFakIsOERBQUNEOzRCQUFJWSxJQUFJVCxLQUFLUyxFQUFFO3NDQUNkLDRFQUFDRTtnQ0FDQ0MsU0FBUyxDQUFDQyxJQUFNekIsWUFBWVksS0FBS1MsRUFBRTtnQ0FDbkNYLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7OzttQkFyQjZCRSxLQUFLUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUE4Qm5EO0dBNURTM0I7S0FBQUE7QUE2RFQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xheW91dC9lZGl0LmpzPzIzZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gRWRpdEl0ZW0ocHJvcHMpIHtcbiAgY29uc3QgeyBpdGVtcyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdmFyIHZhbHVlPW51bGw7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayB2YWx1ZVwiICsgdmFsdWUpO1xuICAgIC8vIHNldElzT3BlbigoaXNPcGVuKSA9PiAhaXNPcGVuKTtcbiAgICBpZiAoIWlzT3Blbikge1xuICAgICAgc2V0SXNPcGVuKChpc09wZW4pID0+ICFpc09wZW4pO1xuICAgICAgdmFyIGVkaXRhYmxlVGV4dCA9ICQoXCI8dGV4dGFyZWEgLz5cIikudmFsKFwiREVTQ1JJUFRJT04uLi5cIik7XG4gICAgICAkKFwiI1wiICsgdmFsdWUpLnJlcGxhY2VXaXRoKGVkaXRhYmxlVGV4dCk7XG4gICAgICB2YWx1ZT0kKFwiI1wiICsgdmFsdWUpLnJlcGxhY2VXaXRoKGVkaXRhYmxlVGV4dCk7XG5cbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCh2YWx1ZSlcbiAgICAgIGFsZXJ0KFwic2F2ZWRcIik7XG4gICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gcHJvY2Vzcy5lbnYudXJpRWRpdDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tTZWMgPSAodmFsdWUpID0+IHtcbiAgICB2YXIgZWRpdGFibGVUZXh0ID0gJChcIjx0ZXh0YXJlYSAvPlwiKS52YWwoXCJERVNDUklQVElPTi4uLlwiKTtcbiAgICAkKFwiI1wiICsgdmFsdWUpLnJlcGxhY2VXaXRoKGVkaXRhYmxlVGV4dCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMTAgcGwtNDAgcHQtMTBcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoZGF0YSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBrZXk9e2RhdGEuaWR9PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17ZGF0YS5pbWFnZVVybH1cbiAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs2MDB9XG4gICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxpIGtleT17ZGF0YS5pZH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiZ2V0L1wiICsgZGF0YS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCB0ZXh0LTR4bCB0ZXh0LXdoaXRlXCI+e2RhdGEudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB7Y29uc29sZS5sb2coXCJkYXRhLmlkPT09PT09PlwiICsgZGF0YS5pZCl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgd29yZCBcIiBpZD17ZGF0YS5pZH0+XG4gICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDbGFzc1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPXtkYXRhLmlkfT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhkYXRhLmlkKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy16aW5jLTk1MFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFRElUL1NBVkVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3VsPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgRWRpdEl0ZW07XG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiJCIsInVzZVN0YXRlIiwiRWRpdEl0ZW0iLCJwcm9wcyIsIml0ZW1zIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidmFsdWUiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJlZGl0YWJsZVRleHQiLCJ2YWwiLCJyZXBsYWNlV2l0aCIsImFsZXJ0IiwiaGFuZGxlQ2xpY2tTZWMiLCJ1bCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImRhdGEiLCJzcmMiLCJpbWFnZVVybCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibGkiLCJocmVmIiwidGl0bGUiLCJpZCIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwib25DbGljayIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/layout/edit.js\n"));

/***/ })

});