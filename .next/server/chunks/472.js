exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 7767:
/***/ ((module) => {

// Exports
module.exports = {
	"question": "profile_question__rGTTV",
	"head": "profile_head__4zwwd"
};


/***/ }),

/***/ 4472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7767);
/* harmony import */ var _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_profile_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6131);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_3__, _components_Question__WEBPACK_IMPORTED_MODULE_4__]);
([_axios__WEBPACK_IMPORTED_MODULE_3__, _components_Question__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const VisQuestions = ()=>{
    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchUser = async ()=>{
            try {
                if (session.status != "loading") {
                    const mail = session?.data?.user?.email;
                    const getDetails = await _axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`/users/account/?email=${mail}`);
                    const user = getDetails.data;
                    setUser(user);
                    console.log(user);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, [
        session.status,
        session?.data?.user?.email
    ]);
    console.log(session);
    console.log(user?.last_viewed_concept_videos);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_styles_profile_module_css__WEBPACK_IMPORTED_MODULE_5___default().head),
                children: "Recently seen questions"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_profile_module_css__WEBPACK_IMPORTED_MODULE_5___default().question),
                children: user?.last_viewed_questions?.length != 0 ? (user?.last_viewed_questions?.map((question, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Question__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        question: question
                    }, index);
                })) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: "No questions Viewed yet"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VisQuestions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;