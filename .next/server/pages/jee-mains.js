(() => {
var exports = {};
exports.id = 875;
exports.ids = [875];
exports.modules = {

/***/ 3274:
/***/ ((module) => {

// Exports
module.exports = {
	"cover": "mains_cover__AkzVJ",
	"mains_wrapper": "mains_mains_wrapper__vneWg",
	"header": "mains_header__aXxAo",
	"header_wrapper": "mains_header_wrapper__5SMig",
	"searchWrap": "mains_searchWrap__cTzsq",
	"content": "mains_content___qfRp",
	"question_paginate_container": "mains_question_paginate_container__sFH97",
	"question_tags_container": "mains_question_tags_container__zgE_y",
	"question_tags_element": "mains_question_tags_element__i84nS",
	"page-link": "mains_page-link__MV4A2",
	"page-item": "mains_page-item__5J8qz",
	"disabled": "mains_disabled__5bkvL",
	"pagination": "mains_pagination__kC_1f",
	"question_wrap": "mains_question_wrap__PMFkp",
	"searchInput": "mains_searchInput__FqJqh"
};


/***/ }),

/***/ 8761:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_jee_mains_tsx__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ private_next_pages_jee_mains_tsx__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var private_next_pages_jee_mains_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_jee_mains_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_jee_mains_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6763:
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
/* harmony import */ var _styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3274);
/* harmony import */ var _styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6131);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(191);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9700);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_2__, _components_Question__WEBPACK_IMPORTED_MODULE_3__]);
([_axios__WEBPACK_IMPORTED_MODULE_2__, _components_Question__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






async function getServerSideProps(context) {
    try {
        const response = await _axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/question/add`);
        const questions = response.data;
        return {
            props: {
                questions
            }
        };
    } catch (error) {
        console.log(error);
    }
    return {
        props: {}
    };
}
const JeeMains = ({ questions  })=>{
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const itemsPerPage = 10;
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // ...
    // Filter questions based on search query
    // const filteredQuestions = questions.filter((question) =>
    //   question.question_text.toLowerCase().includes(searchQuery.toLowerCase())
    // );
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Fetch all questions (without filtering) from props
        const allQuestions = questions;
        // Filter the questions based on the search query
        const filteredQuestions = allQuestions.filter((question)=>question.question_text.toLowerCase().includes(searchQuery.toLowerCase()));
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(filteredQuestions.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredQuestions.length / itemsPerPage));
    }, [
        itemOffset,
        itemsPerPage,
        searchQuery,
        questions
    ]);
    const handlePageClick = (event)=>{
        const newOffset = event.selected * itemsPerPage % questions.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default().mains_wrapper),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default().cover),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_wrapper),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        children: "JEE Mains"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        children: [
                                            questions.length,
                                            " Questions"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchWrap),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "Courses that help beginner designers become true unicorns."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value),
                                            placeholder: "Search questions...",
                                            className: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchInput)
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default().question_wrap),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default().question_paginate_container),
                                children: currentItems?.map((question)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Question__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        question: question
                                    }, question.id);
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_paginate__WEBPACK_IMPORTED_MODULE_4___default()), {
                                nextLabel: ">",
                                onPageChange: handlePageClick,
                                pageRangeDisplayed: 5,
                                marginPagesDisplayed: 4,
                                pageCount: pageCount,
                                previousLabel: "<",
                                pageClassName: "page-item",
                                pageLinkClassName: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default()["page-link"]),
                                previousClassName: "page-item",
                                previousLinkClassName: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default()["page-link"]),
                                nextClassName: "page-item",
                                nextLinkClassName: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default()["page-link"]),
                                breakLabel: "...",
                                breakClassName: "page-item",
                                breakLinkClassName: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default()["page-link"]),
                                containerClassName: (_styles_mains_module_css__WEBPACK_IMPORTED_MODULE_5___default().pagination),
                                activeClassName: "active",
                                renderOnZeroPageCount: null
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JeeMains);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 9700:
/***/ ((module) => {

"use strict";
module.exports = require("react-paginate");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,675,565,191], () => (__webpack_exec__(8761)));
module.exports = __webpack_exports__;

})();