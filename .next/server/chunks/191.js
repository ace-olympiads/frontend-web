exports.id = 191;
exports.ids = [191];
exports.modules = {

/***/ 1202:
/***/ ((module) => {

// Exports
module.exports = {
	"question-card": "Question_question-card__6Jkny",
	"thumb-question": "Question_thumb-question__JPa5k",
	"question-title": "Question_question-title___xN1s",
	"question-title-wrap": "Question_question-title-wrap__LnSgW",
	"question-content": "Question_question-content__qihgA",
	"question_tags_container": "Question_question_tags_container__SXC8T",
	"icons_wrapper": "Question_icons_wrapper__Tqgbd",
	"go_to_question": "Question_go_to_question__BWuo_",
	"question_tags_element": "Question_question_tags_element__KelMc"
};


/***/ }),

/***/ 191:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Question_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1202);
/* harmony import */ var _styles_Question_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Question_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_youtubeId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1066);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_userImg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1120);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_5__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Question = ({ question  })=>{
    const [thumbnailUrl, setThumbnail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const boxVariant = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        },
        hidden: {
            opacity: 0,
            x: 100
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setThumbnail(`https://img.youtube.com/vi/${(0,_utils_youtubeId__WEBPACK_IMPORTED_MODULE_7__/* .extractEmbedIdFromYouTubeLink */ .z)(`${question?.video_solution_url}`)}/0.jpg`);
        console.log(thumbnailUrl);
    }, [
        question,
        thumbnailUrl
    ]);
    console.log(thumbnailUrl);
    const control = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [
        control,
        inView,
        thumbnailUrl
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
        ref: ref,
        variants: boxVariant,
        initial: "hidden",
        animate: control,
        style: {
            display: "flex",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            onClick: ()=>router.push(`/question/${question.id}`),
            className: (_styles_Question_module_css__WEBPACK_IMPORTED_MODULE_8___default()["question-card"]),
            children: [
                thumbnailUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: (_styles_Question_module_css__WEBPACK_IMPORTED_MODULE_8___default()["thumb-question"]),
                    src: thumbnailUrl,
                    alt: "Thumbnail",
                    width: 100,
                    height: 400
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: (_styles_Question_module_css__WEBPACK_IMPORTED_MODULE_8___default()["thumb-question"]),
                    src: _public_assets_userImg_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                    alt: "Thumbnail",
                    width: 100,
                    height: 100
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Question_module_css__WEBPACK_IMPORTED_MODULE_8___default()["question-title-wrap"]),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_Question_module_css__WEBPACK_IMPORTED_MODULE_8___default()["question-title"]),
                            children: "Ques."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_Question_module_css__WEBPACK_IMPORTED_MODULE_8___default()["question-content"]),
                            children: question?.question_text.length < 80 ? question.question_text : `${question.question_text.substring(0, 80)}..`
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Question_module_css__WEBPACK_IMPORTED_MODULE_8___default().question_tags_container),
                    children: question?.tags?.slice(0, 3).map((tag)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Question_module_css__WEBPACK_IMPORTED_MODULE_8___default().question_tags_element),
                            children: tag.name.length < 8 ? `#${tag.name}` : `#${tag.name.substring(0, 7)}...`
                        }, tag.id);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Question);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;