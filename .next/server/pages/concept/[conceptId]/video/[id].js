(() => {
var exports = {};
exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 8873:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "VideoId_container__vG_lc",
	"sidebar": "VideoId_sidebar__rkxrG",
	"scrolling-effect": "VideoId_scrolling-effect__8XJYQ",
	"conceptName": "VideoId_conceptName__KVrbc",
	"video-boxes": "VideoId_video-boxes__5cwKE",
	"mainContent": "VideoId_mainContent__tJYJN",
	"titleBar": "VideoId_titleBar__uvp7R",
	"videoTitle": "VideoId_videoTitle__KrBQk",
	"videoAuthor": "VideoId_videoAuthor__uEPrw"
};


/***/ }),

/***/ 6685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_concept_conceptId_video_id_tsx__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ private_next_pages_concept_conceptId_video_id_tsx__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var private_next_pages_concept_conceptId_video_id_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(989);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_concept_conceptId_video_id_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_concept_conceptId_video_id_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6131:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6131);
/* harmony import */ var _styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8873);
/* harmony import */ var _styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_YoutubeEmbed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8350);
/* harmony import */ var _utils_youtubeId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1066);
/* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8797);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_3__]);
_axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








async function getServerSideProps(context) {
    console.log(context.query);
    const { conceptId , id  } = context.query;
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);
    try {
        const getVideos = await _axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`/concepts/${conceptId}/videos/${id}`);
        const conceptsFetch = await _axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`concepts/`);
        const concepts = conceptsFetch.data;
        const video = getVideos.data;
        return {
            props: {
                video,
                concepts
            }
        };
    } catch (error) {}
}
const Video = ({ video , concepts  })=>{
    const arr = [
        1,
        2,
        32,
        3,
        23,
        23,
        12,
        31,
        23,
        12,
        312,
        13,
        14,
        15,
        18
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6___default().sidebar),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6___default().videoList),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6___default().conceptName),
                            children: video?.concept
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6___default()["scrolling-effect"]),
                            children: arr.map((e)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6___default()["video-boxes"]),
                                    children: "Lorem ipsum dolor"
                                }, e);
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainContent),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6___default().titleBar),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BackButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6___default().videoTitle),
                                children: video?.title
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6___default().videoPlayer),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_YoutubeEmbed__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            embedId: `${(0,_utils_youtubeId__WEBPACK_IMPORTED_MODULE_7__/* .extractEmbedIdFromYouTubeLink */ .z)(`${video?.youtube_url}`)}`
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_VideoId_module_css__WEBPACK_IMPORTED_MODULE_6___default().videoAuthor),
                        children: video?.title
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 3685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,275], () => (__webpack_exec__(6685)));
module.exports = __webpack_exports__;

})();