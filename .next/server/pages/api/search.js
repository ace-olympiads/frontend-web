"use strict";
(() => {
var exports = {};
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 1518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const searchHandler = async (req, res)=>{
    const { query  } = req.query;
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${"https://backend.aceacad.com/"}question/search/`, {
            params: {
                query
            }
        });
        const searchResults = response.data;
        res.status(200).json(searchResults);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred during the search."
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1518));
module.exports = __webpack_exports__;

})();