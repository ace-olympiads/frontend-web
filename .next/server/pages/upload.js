(() => {
var exports = {};
exports.id = 863;
exports.ids = [863];
exports.modules = {

/***/ 1415:
/***/ ((module) => {

// Exports
module.exports = {
	"back-button": "BackButton_back-button__uXnvV",
	"back-icon": "BackButton_back-icon__N2MjL"
};


/***/ }),

/***/ 5852:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Upload_container__37BOW",
	"error": "Upload_error__ny3NB",
	"base": "Upload_base__H_WnM",
	"item-element": "Upload_item-element__evEKB",
	"item-individual-element": "Upload_item-individual-element__gzJSV",
	"selected-item": "Upload_selected-item__5WeEO",
	"latex": "Upload_latex__Yf3sp",
	"new-item-input": "Upload_new-item-input__Pr3LF",
	"add-new-item-button": "Upload_add-new-item-button__hF9Yu"
};


/***/ }),

/***/ 3702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_upload_tsx__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ private_next_pages_upload_tsx__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var private_next_pages_upload_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5809);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_upload_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_upload_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

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

/***/ 6301:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5852);
/* harmony import */ var _styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4810);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_katex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2293);
/* harmony import */ var react_katex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_katex__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const UploadForm = ({ user  })=>{
    const [uploadType, setUploadType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [concepts, setConcepts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedTags, setSelectedTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [newTagInputVisible, setNewTagInputVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [newTagInputValue, setNewTagInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [examinations, setExaminations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedExaminations, setSelectedExaminations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [newExaminationInputVisible, setNewExaminationInputVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [newExaminationInputValue, setNewExaminationInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [questionData, setQuestionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        question_text: "",
        question_text_latex: "",
        video_solution_url: "",
        text_solution: "",
        text_solution_latex: "",
        tags: selectedTags,
        examinations: selectedExaminations,
        category: "",
        concept: null
    });
    const [conceptData, setConceptData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: -1,
        title: "",
        description: ""
    });
    const [videoData, setVideoData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        concept: null,
        title: "",
        youtube_url: "",
        thumbnail_url: ""
    });
    const selectTag = (tag)=>{
        setSelectedTags((prevTags)=>{
            const isSelected = prevTags.some((t)=>t.name === tag.name);
            if (isSelected) {
                return prevTags.filter((t)=>t.name !== tag.name);
            } else {
                return [
                    tag,
                    ...prevTags
                ];
            }
        });
    };
    const toggleNewTagInput = ()=>{
        setNewTagInputVisible(!newTagInputVisible);
        setNewTagInputValue("");
    };
    const addNewTag = ()=>{
        const trimmedValue = newTagInputValue.trim();
        if (trimmedValue !== "" && !tags.some((tag)=>tag.name === trimmedValue)) {
            const newTag = {
                name: trimmedValue
            };
            setTags([
                ...tags,
                newTag
            ]);
            selectTag(newTag);
        }
        toggleNewTagInput();
    };
    const fetchTags = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`${"https://backend.aceacad.com/"}question/tags/`);
            setTags(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const selectExamination = (examination)=>{
        setSelectedExaminations((prevExaminations)=>{
            const isSelected = prevExaminations.some((t)=>t.name === examination.name);
            if (isSelected) {
                return prevExaminations.filter((e)=>e.name !== examination.name);
            } else {
                return [
                    examination,
                    ...prevExaminations
                ];
            }
        });
    };
    const toggleNewExaminationInput = ()=>{
        setNewExaminationInputVisible(!newExaminationInputVisible);
        setNewExaminationInputValue("");
    };
    const addNewExamination = ()=>{
        const trimmedValue = newExaminationInputValue.trim();
        if (trimmedValue !== "" && !examinations.some((examination)=>examination.name === trimmedValue)) {
            const newExamination = {
                name: trimmedValue
            };
            setExaminations([
                ...examinations,
                newExamination
            ]);
            selectExamination(newExamination);
        }
        toggleNewExaminationInput();
    };
    const fetchExaminations = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`${"https://backend.aceacad.com/"}question/examinations/`);
            setExaminations(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchConcepts();
        fetchTags();
        fetchExaminations();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setQuestionData((prevData)=>({
                ...prevData,
                tags: selectedTags,
                examinations: selectedExaminations
            }));
        console.log(selectedExaminations);
        console.log(selectedTags);
    }, [
        selectedTags,
        selectedExaminations
    ]);
    const fetchConcepts = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`${"https://backend.aceacad.com/"}concepts/`);
            setConcepts(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (uploadType === "question") {
            try {
                await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(`${"https://backend.aceacad.com/"}question/add/`, {
                    ...questionData,
                    author: user?.id
                });
                setQuestionData({
                    question_text: "",
                    question_text_latex: "",
                    video_solution_url: "",
                    tags: [],
                    examinations: [],
                    text_solution: "",
                    text_solution_latex: "",
                    category: "",
                    concept: null
                });
                setSelectedTags([]);
                setSelectedExaminations([]);
            } catch (error) {
                console.error(error);
            }
        } else if (uploadType === "concept") {
            try {
                await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(`${"https://backend.aceacad.com/"}concepts/`, conceptData);
                setConceptData({
                    id: -1,
                    title: "",
                    description: ""
                });
                fetchConcepts();
            } catch (error) {
                console.error(error);
            }
        } else if (uploadType === "video") {
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(`${"https://backend.aceacad.com/"}concepts/${videoData.concept}/videos/`, {
                    ...videoData,
                    author: user?.id
                });
                setVideoData({
                    concept: null,
                    title: "",
                    youtube_url: "",
                    thumbnail_url: ""
                });
            } catch (error) {
                console.error(error);
            }
        }
    };
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        if (uploadType === "question") {
            setQuestionData((prevData)=>({
                    ...prevData,
                    [name]: value
                }));
        } else if (uploadType === "concept") {
            setConceptData((prevData)=>({
                    ...prevData,
                    [name]: value
                }));
        } else if (uploadType === "video") {
            setVideoData((prevData)=>({
                    ...prevData,
                    [name]: value
                }));
        }
    };
    function preprocessLatex(latex) {
        const replacedNewlines = latex.replace(/\n/g, "$\\\\$");
        const parts = replacedNewlines.split("$");
        const processedParts = parts.map((part, index)=>{
            if (index % 2 === 0) {
                return `\\text{${part}}`;
            } else {
                return part;
            }
        });
        return processedParts.join("");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Upload Form"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            children: [
                                "Select upload type:",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    value: uploadType,
                                    onChange: (e)=>setUploadType(e.target.value),
                                    className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().select),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "",
                                            children: "Select"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "question",
                                            children: "Question"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "concept",
                                            children: "Concept"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "video",
                                            children: "Video for Concept"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    uploadType === "question" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Question Form"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Question Text:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            name: "question_text",
                                            value: questionData.question_text,
                                            onChange: handleChange,
                                            className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().input)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        children: [
                                            "Question Text Latex:",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                name: "question_text_latex",
                                                value: questionData.question_text_latex,
                                                onChange: handleChange,
                                                className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().textarea)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().latex),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_katex__WEBPACK_IMPORTED_MODULE_4__.BlockMath, {
                                            math: preprocessLatex(questionData.question_text_latex)
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Video Solution URL:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            name: "video_solution_url",
                                            value: questionData.video_solution_url,
                                            onChange: handleChange,
                                            className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().input)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Text Solution:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            name: "text_solution",
                                            value: questionData.text_solution,
                                            onChange: handleChange,
                                            className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().textarea)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        children: [
                                            "Text Solution (Latex):",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                name: "text_solution_latex",
                                                value: questionData.text_solution_latex,
                                                onChange: handleChange,
                                                className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().textarea)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().latex),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_katex__WEBPACK_IMPORTED_MODULE_4__.BlockMath, {
                                            math: preprocessLatex(questionData.text_solution_latex)
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Category:",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            name: "category",
                                            value: questionData.category,
                                            onChange: handleChange,
                                            className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().select),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "",
                                                    selected: true,
                                                    children: "Select Category"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "G",
                                                    children: "General User"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "P",
                                                    children: "Premium User"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Concept:",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            name: "concept",
                                            value: questionData.concept || "",
                                            onChange: handleChange,
                                            className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().select),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "",
                                                    children: "Select Concept"
                                                }),
                                                concepts.map((concept)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: concept.id,
                                                        children: concept.title
                                                    }, concept.id))
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Tags"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default()["item-element"]),
                                        children: [
                                            tags?.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${(_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default()["item-individual-element"])} ${selectedTags.some((t)=>t.name === tag.name) ? (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default()["selected-item"]) : ""}`,
                                                    onClick: ()=>selectTag(tag),
                                                    children: tag.name
                                                }, tag.name)),
                                            newTagInputVisible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                value: newTagInputValue,
                                                onChange: (e)=>setNewTagInputValue(e.target.value),
                                                onKeyDown: (e)=>{
                                                    if (e.key === "Enter") {
                                                        addNewTag();
                                                    }
                                                },
                                                className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default()["new-item-input"]),
                                                autoFocus: true
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default()["add-new-item-button"]),
                                                onClick: toggleNewTagInput,
                                                children: "+"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Examinations"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default()["item-element"]),
                                        children: [
                                            examinations?.map((examination)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${(_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default()["item-individual-element"])} ${selectedExaminations.some((e)=>e.name === examination.name) ? (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default()["selected-item"]) : ""}`,
                                                    onClick: ()=>selectExamination(examination),
                                                    children: examination.name
                                                }, examination.name)),
                                            newExaminationInputVisible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                value: newExaminationInputValue,
                                                onChange: (e)=>setNewExaminationInputValue(e.target.value),
                                                onKeyDown: (e)=>{
                                                    if (e.key === "Enter") {
                                                        addNewExamination();
                                                    }
                                                },
                                                className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default()["new-item-input"]),
                                                autoFocus: true
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default()["add-new-item-button"]),
                                                onClick: toggleNewExaminationInput,
                                                children: "+"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    uploadType === "concept" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Concept Form"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Title:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            name: "title",
                                            value: conceptData.title,
                                            onChange: handleChange,
                                            className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().input)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Description:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            name: "description",
                                            value: conceptData.description,
                                            onChange: handleChange,
                                            className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().textarea)
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    uploadType === "video" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Video Form"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Concept:",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            name: "concept",
                                            value: videoData.concept ?? "",
                                            onChange: handleChange,
                                            className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().select),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "",
                                                    selected: true,
                                                    children: "Select Concept"
                                                }),
                                                concepts.map((concept)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: concept.id,
                                                        children: concept.title
                                                    }, concept.id))
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Title:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            name: "title",
                                            value: videoData.title,
                                            onChange: handleChange,
                                            className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().input)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "YouTube URL:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            name: "youtube_url",
                                            value: videoData.youtube_url,
                                            onChange: handleChange,
                                            className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().input)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Thumbnail URL:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            name: "thumbnail_url",
                                            value: videoData.thumbnail_url,
                                            onChange: handleChange,
                                            className: (_styles_Upload_module_css__WEBPACK_IMPORTED_MODULE_5___default().input)
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        children: "Submit"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5809:
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
/* harmony import */ var _components_UploadForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6301);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6131);
/* harmony import */ var _components_BackButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8797);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_UploadForm__WEBPACK_IMPORTED_MODULE_2__, _axios__WEBPACK_IMPORTED_MODULE_5__]);
([_components_UploadForm__WEBPACK_IMPORTED_MODULE_2__, _axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function getServerSideProps(context) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);
    try {
        const mail = session?.user?.email;
        const getDetails = await _axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get(`/users/account/?email=${mail}`);
        const user = getDetails.data;
        return {
            props: {
                user
            }
        };
    } catch (error) {
        console.log(error);
    }
    return {
        props: {}
    };
}
const UploadPage = ({ user  })=>{
    console.log(user);
    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        console.log(session?.status);
        if (session?.status !== "authenticated") {
            router.push("/");
        }
    }, [
        session?.status,
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BackButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UploadForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                user: user
            }),
            ";"
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4810:
/***/ (() => {



/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

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

/***/ 2293:
/***/ ((module) => {

"use strict";
module.exports = require("react-katex");

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

/***/ }),

/***/ 167:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,332], () => (__webpack_exec__(3702)));
module.exports = __webpack_exports__;

})();