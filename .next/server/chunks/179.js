exports.id = 179;
exports.ids = [179];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

// Exports
module.exports = {
	"comment-box": "Comment_comment-box__aosbT",
	"commenter-details": "Comment_commenter-details__0KPid",
	"comment-content": "Comment_comment-content__YHumL",
	"cross": "Comment_cross__xthmO"
};


/***/ }),

/***/ 7677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/avatar.9aab47c1.svg","height":128,"width":128,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/cross.3eceb04d.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 9179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1185);
/* harmony import */ var _styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_avatar_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7677);
/* harmony import */ var _public_assets_cross_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1818);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6131);
/* harmony import */ var _context_datacontext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2449);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_6__]);
_axios__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Comment = (props)=>{
    const { id , commenter , email , content , published_at  } = props;
    const date = new Date(published_at);
    const { refetch , setRefetch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_datacontext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    const handleDelete = async ()=>{
        try {
            const resp = await _axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"]["delete"] */ .Z["delete"](`/question/comments/${id}/`);
            setRefetch((prev)=>!prev);
            console.log(resp);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(session);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_8___default()["comment-box"]),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_8___default()["commenter-details"]),
                children: [
                    commenter?.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        height: 30,
                        width: 30,
                        src: commenter.image,
                        alt: "user image"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        height: 30,
                        width: 30,
                        src: _public_assets_avatar_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                        alt: "user image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: commenter.username
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            date.toLocaleDateString(),
                            " ",
                            date.toLocaleTimeString()
                        ]
                    })
                ]
            }),
            session?.user?.name === commenter.username && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_8___default().cross),
                onClick: ()=>handleDelete(),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    height: 30,
                    width: 30,
                    src: _public_assets_cross_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                    alt: "user image"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Comment_module_css__WEBPACK_IMPORTED_MODULE_8___default()["comment-content"]),
                children: content
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const dataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataContext);


/***/ })

};
;