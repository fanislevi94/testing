"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./component/layout/main-navigation.js":
/*!*********************************************!*\
  !*** ./component/layout/main-navigation.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-navigation.module.css */ \"./component/layout/main-navigation.module.css\");\n/* harmony import */ var _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MainNavigation() {\n    _s();\n    const { push } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    function redirect() {\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(\"google\");\n        alert(\"By By\");\n        window.location.href = \"/index\";\n    }\n    function redirectSignin() {\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"google\");\n        alert(\"By By\");\n        window.location.href = \"/main\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                    children: \"FANIS BLOG\"\n                }, void 0, false, {\n                    fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: \"Index\"\n                            }, void 0, false, {\n                                fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/post\",\n                                children: \"Post\"\n                            }, void 0, false, {\n                                fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/edit\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/contact\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        status === \"authenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>redirect(),\n                                children: \"Signout\"\n                            }, void 0, false, {\n                                fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this),\n                        status != \"authenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>redirectSignin(),\n                                children: \"Signin\"\n                            }, void 0, false, {\n                                fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/fanis/Desktop/udemy/test2/test2/component/layout/main-navigation.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(MainNavigation, \"f0eLyPEhrRpqjTi0dkfA09uJzQs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = MainNavigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNavigation);\nvar _c;\n$RefreshReg$(_c, \"MainNavigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbGF5b3V0L21haW4tbmF2aWdhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ3NCO0FBQ1c7QUFDbEI7QUFDTTtBQUNsRCxTQUFTTzs7SUFDUCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHSCwwREFBU0E7SUFDMUIsTUFBTSxFQUFFSSxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHUiwyREFBVUE7SUFFbkMsU0FBU1M7UUFDUFAsd0RBQU9BLENBQUM7UUFDUlEsTUFBTTtRQUNOQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztJQUN6QjtJQUNBLFNBQVNDO1FBQ1BiLHVEQUFNQSxDQUFDO1FBQ1BTLE1BQU07UUFDTkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7SUFDekI7SUFDQSxxQkFDRSw4REFBQ0U7UUFBT0MsV0FBV2pCLDJFQUFjOzswQkFDL0IsOERBQUNELGtEQUFJQTtnQkFBQ2UsTUFBSzswQkFDVCw0RUFBQ0k7b0JBQUlELFdBQVdqQix5RUFBWTs4QkFBRTs7Ozs7Ozs7Ozs7MEJBRWhDLDhEQUFDb0I7MEJBQ0MsNEVBQUNDOztzQ0FDQyw4REFBQ0M7c0NBQ0MsNEVBQUN2QixrREFBSUE7Z0NBQUNlLE1BQUs7MENBQUk7Ozs7Ozs7Ozs7O3NDQUdmLDhEQUFDUTtzQ0FDQyw0RUFBQ3ZCLGtEQUFJQTtnQ0FBQ2UsTUFBSzswQ0FBUTs7Ozs7Ozs7Ozs7c0NBSXJCLDhEQUFDUTtzQ0FDQyw0RUFBQ3ZCLGtEQUFJQTtnQ0FBQ2UsTUFBSzswQ0FBUTs7Ozs7Ozs7Ozs7c0NBR3ZCLDhEQUFDUTtzQ0FDQyw0RUFBQ3ZCLGtEQUFJQTtnQ0FBQ2UsTUFBSzswQ0FBVzs7Ozs7Ozs7Ozs7d0JBRXZCTCxXQUFXLGlDQUNWLDhEQUFDYTtzQ0FDQyw0RUFBQ0M7Z0NBQU9DLFNBQVMsSUFBTWQ7MENBQVk7Ozs7Ozs7Ozs7O3dCQUl0Q0QsVUFBVSxpQ0FDVCw4REFBQ2E7c0NBQ0MsNEVBQUNDO2dDQUFPQyxTQUFTLElBQU1UOzBDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92RDtHQXBEU1Q7O1FBQ1VGLHNEQUFTQTtRQUNESCx1REFBVUE7OztLQUY1Qks7QUFzRFQsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2xheW91dC9tYWluLW5hdmlnYXRpb24uanM/MDRmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9tYWluLW5hdmlnYXRpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuZnVuY3Rpb24gTWFpbk5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgZnVuY3Rpb24gcmVkaXJlY3QoKSB7XG4gICAgc2lnbk91dChcImdvb2dsZVwiKTtcbiAgICBhbGVydChcIkJ5IEJ5XCIpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvaW5kZXhcIjtcbiAgfVxuICBmdW5jdGlvbiByZWRpcmVjdFNpZ25pbigpIHtcbiAgICBzaWduSW4oXCJnb29nbGVcIik7XG4gICAgYWxlcnQoXCJCeSBCeVwiKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL21haW5cIjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5GQU5JUyBCTE9HPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5JbmRleDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0XCI+UG9zdDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9lZGl0XCI+RWRpdDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7c3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIiAmJiAoXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVkaXJlY3QoKX0+U2lnbm91dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge3N0YXR1cyAhPSBcImF1dGhlbnRpY2F0ZWRcIiAmJiAoXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVkaXJlY3RTaWduaW4oKX0+U2lnbmluPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdmlnYXRpb247XG4iXSwibmFtZXMiOlsiTGluayIsImNsYXNzZXMiLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsInVzZVJvdXRlciIsIlNlc3Npb25Qcm92aWRlciIsIk1haW5OYXZpZ2F0aW9uIiwicHVzaCIsImRhdGEiLCJzdGF0dXMiLCJyZWRpcmVjdCIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmVkaXJlY3RTaWduaW4iLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJsb2dvIiwibmF2IiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/layout/main-navigation.js\n"));

/***/ })

});