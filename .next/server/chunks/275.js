exports.id = 275;
exports.ids = [275];
exports.modules = {

/***/ 1415:
/***/ ((module) => {

// Exports
module.exports = {
	"back-button": "BackButton_back-button__uXnvV",
	"back-icon": "BackButton_back-icon__N2MjL"
};


/***/ }),

/***/ 7847:
/***/ ((module) => {

// Exports
module.exports = {
	"video-responsive": "Youtube_video-responsive___Ybq_"
};


/***/ }),

/***/ 8797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_BackButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1415);
/* harmony import */ var _styles_BackButton_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_BackButton_module_css__WEBPACK_IMPORTED_MODULE_3__);




const BackButton = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            title: "Go back",
            type: "button",
            onClick: ()=>router.back(),
            className: `${(_styles_BackButton_module_css__WEBPACK_IMPORTED_MODULE_3___default()["back-button"])}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_BackButton_module_css__WEBPACK_IMPORTED_MODULE_3___default()["back-icon"])}`,
                children: "‹"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackButton);


/***/ }),

/***/ 8350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Youtube_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7847);
/* harmony import */ var _styles_Youtube_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Youtube_module_css__WEBPACK_IMPORTED_MODULE_2__);



const YoutubeEmbed = ({ embedId  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Youtube_module_css__WEBPACK_IMPORTED_MODULE_2___default()["video-responsive"]),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
            width: "853",
            height: "480",
            src: `https://www.youtube.com/embed/${embedId}`,
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true,
            title: "Embedded youtube"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YoutubeEmbed);


/***/ })

};
;