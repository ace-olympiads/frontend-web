exports.id = 315;
exports.ids = [315];
exports.modules = {

/***/ 6939:
/***/ ((module) => {

// Exports
module.exports = {
	"video": "video_video__dvLBC",
	"title": "video_title___YyRy",
	"content": "video_content___c_cj"
};


/***/ }),

/***/ 315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_youtubeId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1066);
/* harmony import */ var _styles_video_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6939);
/* harmony import */ var _styles_video_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_video_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_userImg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1120);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);







const VideoCard = ({ video  })=>{
    const [thumbnailUrl, setThumbnail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setThumbnail(`https://img.youtube.com/vi/${(0,_utils_youtubeId__WEBPACK_IMPORTED_MODULE_5__/* .extractEmbedIdFromYouTubeLink */ .z)(`${video?.youtube_url}`)}/0.jpg`);
        console.log(thumbnailUrl);
    }, [
        video,
        thumbnailUrl
    ]);
    console.log(thumbnailUrl);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_video_module_css__WEBPACK_IMPORTED_MODULE_6___default().video),
            children: [
                thumbnailUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: thumbnailUrl,
                    alt: "Thumbnail",
                    width: 300,
                    height: 200
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: _public_assets_userImg_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    alt: "Thumbnail",
                    width: 300,
                    height: 200
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>{
                        router.push(`/concept/${video.concept}/video/${video.id}`);
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_video_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                            children: [
                                "Video ",
                                `${video?.id}`
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_video_module_css__WEBPACK_IMPORTED_MODULE_6___default().content),
                            children: video?.title
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoCard);


/***/ })

};
;