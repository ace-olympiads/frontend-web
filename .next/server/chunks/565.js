"use strict";
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 1120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/userImg.7456de8a.png","height":349,"width":348,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAUUlEQVR42mP4e3vNsWOrb/9luL3l0/79n7bcZlj+ax8Dw/5fyxl2/l/LwLD2/06G3f8fZmc//L+bYc3SoL6+oKVrGe4zgACQ+vu4TlWt/vFfADTZJ9KiE8OcAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 6131:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3685);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

 // Import the 'http' module
const baseURL = `${"https://backend.aceacad.com/"}`;
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    },
    httpAgent: new (http__WEBPACK_IMPORTED_MODULE_1___default().Agent)({
        keepAlive: true
    })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ extractEmbedIdFromYouTubeLink)
/* harmony export */ });
function extractEmbedIdFromYouTubeLink(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|youtu\.be\/|\/v\/|watch\?v%3D|watch\?feature=player_embedded&v=|%2Fvideos%2F|embed%\?i=|%2Fv%2F|e\/|embed\?video_id=|user\/)([^\#\&\?\/\s]{11})/;
    const match = url?.match(regex);
    if (match && match.length > 1) {
        return match[1];
    }
    return null; // Return null if no embedId is found
}


/***/ })

};
;