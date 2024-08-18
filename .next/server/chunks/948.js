exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 5714:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "SearchBar_container__Zar2_",
	"logo_icon": "SearchBar_logo_icon__mrCLn",
	"input": "SearchBar_input__v48Pu",
	"dropdown": "SearchBar_dropdown__dK3gi",
	"dropdownItem": "SearchBar_dropdownItem__4p09U",
	"result-item": "SearchBar_result-item__y8pDx"
};


/***/ }),

/***/ 2948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8625);
/* harmony import */ var react_icons_ci__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ci__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5714);
/* harmony import */ var _styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const SearchBar = ({ onSearchResults , onSearchQueryChange , searchQuery , inputplaceholder  })=>{
    const [showDropdown, setShowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleClickOutside = (event)=>{
        if (inputRef.current && event.target instanceof Node && !inputRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    // highlight the text that matches the query in the search results
    const highlightText = (text, query)=>{
        const regex = new RegExp(query, "gi");
        return text?.replace(regex, (match)=>`<mark>${match}</mark>`);
    };
    // truncate the text to a certain number of words and if more than a words numbner then add "..." at the end
    const truncateText = (text, maxWords)=>{
        const words = text.split(" ");
        if (words.length <= maxWords) {
            return text;
        }
        return words.slice(0, maxWords).join(" ") + "...";
    };
    const handleInputChange = async (e)=>{
        const newQuery = e.target.value;
        onSearchQueryChange(newQuery);
        if (newQuery.trim() === "") {
            onSearchResults([]);
            setSearchResults([]);
            setShowDropdown(false);
            return;
        }
        setLoading(true);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`${"https://backend.aceacad.com/"}question/search/`, {
                params: {
                    query: newQuery
                }
            });
            onSearchResults(response.data);
            setSearchResults(response.data);
            setShowDropdown(true);
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }
    };
    const handleClickQuestion = (questionId)=>{
        router.push(`/question/${questionId}`);
    };
    const handleInputClick = ()=>{
        setShowDropdown(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
        ref: inputRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo_icon),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ci__WEBPACK_IMPORTED_MODULE_4__.CiSearch, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                value: searchQuery,
                onChange: handleInputChange,
                onClick: handleInputClick,
                className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
                placeholder: inputplaceholder
            }),
            showDropdown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropdown),
                children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropdownItem),
                    children: "Loading..."
                }) : searchResults.map((result)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: (_styles_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_5___default()["result-item"]),
                        onClick: ()=>handleClickQuestion(result.id),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                dangerouslySetInnerHTML: {
                                    __html: highlightText(result.title, searchQuery)
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                dangerouslySetInnerHTML: {
                                    __html: highlightText(truncateText(result.question_latex || "", 10), searchQuery)
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                dangerouslySetInnerHTML: {
                                    __html: highlightText(truncateText(result.solution, 20), searchQuery)
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                dangerouslySetInnerHTML: {
                                    __html: highlightText(truncateText(result.solution_latex, 15), searchQuery)
                                }
                            })
                        ]
                    }, result.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;