"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/home/layout",{

/***/ "(app-pages-browser)/./app/[locale]/ui/homepage/nav-links.tsx":
/*!************************************************!*\
  !*** ./app/[locale]/ui/homepage/nav-links.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/DocumentDuplicateIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// Map of links to display in the side navigation.\n// Depending on the size of the application, this would be stored in a database.\nconst links = [\n    {\n        name: \"Dashboard\",\n        href: \"/dashboard\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        name: \"Products\",\n        href: \"/products\",\n        icon: _barrel_optimize_names_DocumentDuplicateIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }\n];\nfunction NavLinks() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: links.map((link)=>{\n            const LinkIcon = link.icon;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: link.href,\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium\", {\n                    \"bg-sky-100 text-slate-900\": pathname === link.href\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkIcon, {\n                        className: \"w-6\"\n                    }, void 0, false, {\n                        fileName: \"/home/doriass/P\\xfablico/next-course/nextjs-technology-pages/app/[locale]/ui/homepage/nav-links.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" md:block\",\n                        children: link.name\n                    }, void 0, false, {\n                        fileName: \"/home/doriass/P\\xfablico/next-course/nextjs-technology-pages/app/[locale]/ui/homepage/nav-links.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, link.name, true, {\n                fileName: \"/home/doriass/P\\xfablico/next-course/nextjs-technology-pages/app/[locale]/ui/homepage/nav-links.tsx\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(NavLinks, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = NavLinks;\nvar _c;\n$RefreshReg$(_c, \"NavLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYWxlXS91aS9ob21lcGFnZS9uYXYtbGlua3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXdCO0FBQ0s7QUFDaUI7QUFLVDtBQUVyQyxrREFBa0Q7QUFDbEQsZ0ZBQWdGO0FBQ2hGLE1BQU1LLFFBQVE7SUFFWjtRQUNFQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTUwsNkhBQXFCQTtJQUM3QjtJQUNBO1FBQUVHLE1BQU07UUFBWUMsTUFBTTtRQUFhQyxNQUFNSiw2SEFBYUE7SUFBQztDQUM1RDtBQUVjLFNBQVNLOztJQUN0QixNQUFNQyxXQUFXUiw0REFBV0E7SUFFNUIscUJBQ0U7a0JBQ0dHLE1BQU1NLEdBQUcsQ0FBQyxDQUFDQztZQUNWLE1BQU1DLFdBQVdELEtBQUtKLElBQUk7WUFDMUIscUJBQ0UsOERBQUNQLGtEQUFJQTtnQkFFSE0sTUFBTUssS0FBS0wsSUFBSTtnQkFDZk8sV0FBV2QsZ0RBQUlBLENBQ2IscUdBQ0E7b0JBQ0UsNkJBQTZCVSxhQUFhRSxLQUFLTCxJQUFJO2dCQUNyRDs7a0NBRUYsOERBQUNNO3dCQUFTQyxXQUFVOzs7Ozs7a0NBQ3BCLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBYUYsS0FBS04sSUFBSTs7Ozs7OztlQVQ5Qk0sS0FBS04sSUFBSTs7Ozs7UUFZcEI7O0FBR047R0F4QndCRzs7UUFDTFAsd0RBQVdBOzs7S0FETk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tsb2NhbGVdL3VpL2hvbWVwYWdlL25hdi1saW5rcy50c3g/Y2FkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuaW1wb3J0IHtcbiAgRG9jdW1lbnREdXBsaWNhdGVJY29uLFxuICBVc2VyR3JvdXBJY29uLFxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xuXG4vLyBNYXAgb2YgbGlua3MgdG8gZGlzcGxheSBpbiB0aGUgc2lkZSBuYXZpZ2F0aW9uLlxuLy8gRGVwZW5kaW5nIG9uIHRoZSBzaXplIG9mIHRoZSBhcHBsaWNhdGlvbiwgdGhpcyB3b3VsZCBiZSBzdG9yZWQgaW4gYSBkYXRhYmFzZS5cbmNvbnN0IGxpbmtzID0gW1xuXG4gIHtcbiAgICBuYW1lOiAnRGFzaGJvYXJkJyxcbiAgICBocmVmOiAnL2Rhc2hib2FyZCcsXG4gICAgaWNvbjogRG9jdW1lbnREdXBsaWNhdGVJY29uLFxuICB9LFxuICB7IG5hbWU6ICdQcm9kdWN0cycsIGhyZWY6ICcvcHJvZHVjdHMnLCBpY29uOiBVc2VyR3JvdXBJY29uIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZMaW5rcygpIHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IHtcbiAgICAgICAgY29uc3QgTGlua0ljb24gPSBsaW5rLmljb247XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGtleT17bGluay5uYW1lfVxuICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAndGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGJsb2NrIHJvdW5kZWQtbWQgcHgtMyBweS0yIHRleHQtYmFzZSBmb250LW1lZGl1bScsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnYmctc2t5LTEwMCB0ZXh0LXNsYXRlLTkwMCc6IHBhdGhuYW1lID09PSBsaW5rLmhyZWYsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApfSAgICAgICAgICA+XG4gICAgICAgICAgICA8TGlua0ljb24gY2xhc3NOYW1lPVwidy02XCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBtZDpibG9ja1wiPntsaW5rLm5hbWV9PC9wPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJMaW5rIiwidXNlUGF0aG5hbWUiLCJEb2N1bWVudER1cGxpY2F0ZUljb24iLCJVc2VyR3JvdXBJY29uIiwibGlua3MiLCJuYW1lIiwiaHJlZiIsImljb24iLCJOYXZMaW5rcyIsInBhdGhuYW1lIiwibWFwIiwibGluayIsIkxpbmtJY29uIiwiY2xhc3NOYW1lIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[locale]/ui/homepage/nav-links.tsx\n"));

/***/ })

});