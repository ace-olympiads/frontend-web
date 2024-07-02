exports.id = 142;
exports.ids = [142];
exports.modules = {

/***/ 5780:
/***/ ((module) => {

// Exports
module.exports = {
	"question": "mycomments_question__qaFGj",
	"head": "mycomments_head__oIseH"
};


/***/ }),

/***/ 4142:
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
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6131);
/* harmony import */ var _components_Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9179);
/* harmony import */ var _styles_mycomments_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5780);
/* harmony import */ var _styles_mycomments_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_mycomments_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_datacontext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2449);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_3__, _components_Comment__WEBPACK_IMPORTED_MODULE_4__]);
([_axios__WEBPACK_IMPORTED_MODULE_3__, _components_Comment__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const MyComments = ()=>{
    const { refetch , setRefetch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_datacontext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const fetchComments = async ()=>{
            try {
                if (session.status != "loading") {
                    const mail = session?.data?.user?.email;
                    const getDetails = await _axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`question/user-comments/${mail}`);
                    const user = getDetails.data;
                    setComments(user);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchComments();
    }, [
        session?.data?.user?.email,
        session.status,
        refetch
    ]);
    console.log(session);
    const groupCommentsByQuestion = ()=>{
        const commentGroups = {};
        comments?.forEach((comment)=>{
            const questionId = comment.question.id.toString();
            if (!commentGroups[questionId]) {
                commentGroups[questionId] = [];
            }
            commentGroups[questionId].push(comment);
        });
        return commentGroups;
    };
    // Group the comments
    const commentGroups = groupCommentsByQuestion();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_styles_mycomments_module_css__WEBPACK_IMPORTED_MODULE_6___default().head),
                children: "Below are all your comments "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: Object.keys(commentGroups).map((questionId)=>{
                    const question = comments?.find((comment)=>comment.question.id === parseInt(questionId));
                    const questionText = question?.question.question_text;
                    const questionComments = commentGroups[questionId];
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_mycomments_module_css__WEBPACK_IMPORTED_MODULE_6___default().question),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Q. ",
                                    questionText
                                ]
                            }),
                            questionComments.map((comment, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Comment__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    id: comment.id,
                                    commenter: comment.commenter,
                                    email: comment.email,
                                    content: comment.content,
                                    published_at: comment.published_at
                                }, index))
                        ]
                    }, questionId);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyComments);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;