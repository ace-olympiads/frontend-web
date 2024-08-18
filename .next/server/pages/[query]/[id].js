(() => {
var exports = {};
exports.id = 917;
exports.ids = [917];
exports.modules = {

/***/ 1415:
/***/ ((module) => {

// Exports
module.exports = {
	"back-button": "BackButton_back-button__uXnvV",
	"back-icon": "BackButton_back-icon__N2MjL"
};


/***/ }),

/***/ 3018:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "query_title__H1oxv",
	"question-container": "query_question-container___Ot7l"
};


/***/ }),

/***/ 4085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_query_id_tsx__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ private_next_pages_query_id_tsx__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var private_next_pages_query_id_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7404);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_query_id_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_query_id_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 7404:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6131);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(191);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_query_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3018);
/* harmony import */ var _styles_query_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_query_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_VideoCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(315);
/* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8797);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_2__, _components_Question__WEBPACK_IMPORTED_MODULE_3__]);
([_axios__WEBPACK_IMPORTED_MODULE_2__, _components_Question__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const getServerSideProps = async (context)=>{
    const { query , id  } = context.query;
    return {
        props: {
            query: query,
            id: id
        }
    };
};
//
const QueryPage = ({ id , query  })=>{
    const [object, setObjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [videos, setVideos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [examQues, setExamQues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchParticularData = async ()=>{
            if (query === "tag") {
                const response = await _axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/question/${query}/${id}`);
                console.log("tag waala response");
                console.log(response.data);
                setObjects(response.data);
            } else if (query === "concept") {
                const response = await _axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/concepts/${id}`, {
                    data: {
                        email: session?.data?.user?.email
                    }
                });
                const videoList = response.data.videos;
                console.log(videoList);
                setVideos(videoList);
            } else if (query === "exam") {
                const response = await _axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/question/examination/${id}`);
                console.log(response.data);
                console.log("exam ki response");
                setObjects(response.data);
            }
        };
        fetchParticularData();
    }, [
        id,
        query,
        session?.data?.user?.email
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BackButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            query === "tag" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_query_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
                children: [
                    "Here are all the questions having the tag",
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "#",
                            router.query.name
                        ]
                    })
                ]
            }),
            query === "concept" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_query_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
                children: [
                    "Here are all the concept videos for ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: router.query.name
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_query_module_css__WEBPACK_IMPORTED_MODULE_8___default()["question-container"]),
                children: [
                    object?.map((e)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Question__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            question: e
                        }, e.id);
                    }),
                    videos?.map((video)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            video: video
                        }, video.id);
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueryPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

"use strict";
module.exports = import("react-intersection-observer");;

/***/ }),

/***/ 3685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,675,565,191,315], () => (__webpack_exec__(4085)));
module.exports = __webpack_exports__;

})();