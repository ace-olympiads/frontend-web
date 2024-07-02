(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2880:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Courses_container__BaS8D",
	"main_new": "Courses_main_new__yXJDh",
	"head": "Courses_head__W8tA_",
	"head2": "Courses_head2__639Ap",
	"para": "Courses_para__Nm4TJ",
	"examcard": "Courses_examcard__hJZD_",
	"cardsgrid": "Courses_cardsgrid__RvpYw",
	"card": "Courses_card__vfeDc",
	"card2": "Courses_card2__NTa5R",
	"cardContent": "Courses_cardContent__W5Jfk",
	"logos-slide": "Courses_logos-slide__QVc3w",
	"scroll": "Courses_scroll__4d1iA",
	"footer": "Courses_footer__yahaZ",
	"code": "Courses_code__MVs_r",
	"logo": "Courses_logo__g0TWm",
	"logos": "Courses_logos__8jF3P"
};


/***/ }),

/***/ 3579:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"head": "Home_head__IrBKJ",
	"head2": "Home_head2__8OP_h",
	"searchbar": "Home_searchbar__2X21B",
	"examcard": "Home_examcard__b36di",
	"cardsgrid": "Home_cardsgrid__kdKYD",
	"downcard": "Home_downcard__91l1G",
	"card": "Home_card___LpL1",
	"card2": "Home_card2___9f4Z",
	"cardContent": "Home_cardContent__p_dOW",
	"logos-slide": "Home_logos-slide__DK_lu",
	"scroll": "Home_scroll__lfp6U",
	"footer": "Home_footer____T7K",
	"code": "Home_code__suPER",
	"logo": "Home_logo__27_tb",
	"logos": "Home_logos__n5bJj"
};


/***/ }),

/***/ 4793:
/***/ ((module) => {

// Exports
module.exports = {
	"home_wrapper": "Welcome_home_wrapper__pl_z1",
	"content": "Welcome_content__B4XMV",
	"head_left": "Welcome_head_left__fqZNt",
	"head_right": "Welcome_head_right__h_vTU",
	"left_up": "Welcome_left_up__1fBw9",
	"left_up_head": "Welcome_left_up_head__EXQuH",
	"left_up_para": "Welcome_left_up_para__I_clH",
	"left_up_button": "Welcome_left_up_button__6GziU",
	"left_up_button_div": "Welcome_left_up_button_div__mtBly",
	"left_logo": "Welcome_left_logo__n5hwD"
};


/***/ }),

/***/ 6163:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2603);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

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
const baseURL = `${"https://backend.aceacad.com"}`;
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

/***/ 7205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Bookpage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/book.svg
/* harmony default export */ const book = ({"src":"/_next/static/media/book.424ca075.svg","height":167,"width":167,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/Bookpage.tsx




const Bookpage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-white mt-[15vh] gap-[120px] p-10 min-h-screen flex flex-col md:flex-row items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "w-full md:w-[40%]",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "text-[#560FD7] font-[Inter] font-medium text-[18px]",
                        children: "Solve questions"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "text-[36px] font-bold text-gray-900 my-4",
                        children: "Enhance knowledge with our Amazing Solutions"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-gray-600 text-[16px] mb-8",
                        children: "Elevate learning with our Brilliant Solutions: Empowering students with extraordinary insights and comprehensive solutions for JEE, NEET, and school studies."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "bg-[#560FD7] text-white py-3 px-6 rounded-lg font-medium text-[16px]",
                        children: "Discover more →"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col md:flex-row gap-8 w-full md:w-[60%]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(QuestionCard, {
                                rotate: "-9.17"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(QuestionCard, {
                                rotate: "-9.17"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex flex-col justify-center items-center flex-grow",
                        children: /*#__PURE__*/ jsx_runtime.jsx(QuestionCard, {})
                    })
                ]
            })
        ]
    });
};
const QuestionCard = ({ rotate ="0"  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-white md:h-[39vh] md:w-[24vw] shadow-lg rounded-lg p-6 flex flex-col justify-between transform",
        style: {
            transform: `rotate(${rotate}deg)`
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-purple-600 font-semibold text-lg mb-2",
                                children: "Question"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-[#7A7A7A] mb-4 text-[14px]",
                                children: "The angular speed of the rod just after the collision is ...."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: book,
                                alt: "Books",
                                width: 150,
                                height: 150,
                                className: "mr-4"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: " bg-purple-100 h-[40px]  text-[#560FD7] py-2 px-4 rounded-full text-[12px]",
                                        children: "JEE-Mains"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: " bg-purple-100 h-[40px] text-[#560FD7] py-2 px-4 rounded-full text-[12px]",
                                        children: "NEET"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: " space-x-4",
                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                    href: "#",
                    className: "text-[#4A4A56]  text-[11px] inline-block",
                    children: "View Solution →"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Bookpage = (Bookpage);


/***/ }),

/***/ 8074:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const tabs = [
    "Newest",
    "Popular",
    "Active"
];
const Chip = ({ text , selected , setSelected  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: ()=>setSelected(text),
        className: `${selected ? "text-white" : "text-black"} text-sm transition-colors px-[30px] py-[15px] rounded-md relative`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "relative z-10",
                children: text
            }),
            selected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
                layoutId: "pill-tab",
                transition: {
                    type: "spring",
                    duration: 0.5
                },
                className: "absolute inset-0 z-0 bg-[#560FD7] rounded-lg"
            })
        ]
    });
};
const Card = ({ title , subtitle , videoUrl  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full md:w-[580px] h-[400px] md:h-[240px] bg-white shadow-md rounded-lg p-4 m-2 flex flex-col md:flex-row items-center gap-[50px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "rounded-md w-full md:w-[190px] h-[162px] md:mr-4 border-[10px] border-[#e5d7fa]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    width: "100%",
                    height: "100%",
                    src: videoUrl + "?controls=0&showinfo=0",
                    title: "YouTube video player",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    referrerPolicy: "strict-origin-when-cross-origin",
                    allowFullScreen: true
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-[14px] font-bold text-purple-700 font-[Inter]",
                        children: "INTRODUCING ✨"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-[24px] font-bold text-gray-900",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-[14px] text-gray-500",
                        children: subtitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "w-full md:w-[124px] h-[47px] mt-2 px-4 py-1 bg-[#560FD7] text-white text-[13px] rounded-md",
                        children: "Watch"
                    })
                ]
            })
        ]
    });
};
const ChipTabs = ()=>{
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(tabs[0]);
    const cards = {
        Newest: [
            {
                title: "Area Under Curve",
                subtitle: "3 Videos Available",
                videoUrl: "https://www.youtube.com/embed/xec6HTcn2M8?controls=0"
            },
            {
                title: "Definite Integral",
                subtitle: "2 Videos Available",
                videoUrl: "https://www.youtube.com/embed/xec6HTcn2M8?controls=0"
            }
        ],
        Popular: [
            {
                title: "Probability and Statistics",
                subtitle: "5 Videos Available",
                videoUrl: "https://www.youtube.com/embed/xec6HTcn2M8?controls=0"
            },
            {
                title: "Vector and 3D Geometry",
                subtitle: "4 Videos Available",
                videoUrl: "https://www.youtube.com/embed/xec6HTcn2M8?controls=0"
            }
        ],
        Active: [
            {
                title: "Set and Relations",
                subtitle: "6 Videos Available",
                videoUrl: "https://www.youtube.com/embed/xec6HTcn2M8?controls=0"
            },
            {
                title: "Indefinite Integral",
                subtitle: "1 Video Available",
                videoUrl: "https://www.youtube.com/embed/xec6HTcn2M8?controls=0"
            }
        ]
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col w-full justify-center items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full md:w-[30%] px-2 my-3 py-2 bg-[#F5F0FD] flex items-center justify-between flex-wrap rounded-lg",
                children: tabs.map((tab)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Chip, {
                        text: tab,
                        selected: selected === tab,
                        setSelected: setSelected
                    }, tab))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4 flex flex-col md:flex-row w-full justify-center gap-4 md:gap-0",
                children: cards[selected].map((card, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
                        title: card.title,
                        subtitle: card.subtitle,
                        videoUrl: card.videoUrl
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChipTabs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Courses_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2880);
/* harmony import */ var _styles_Courses_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Courses_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Courses() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Courses_module_css__WEBPACK_IMPORTED_MODULE_2___default().main_new),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_styles_Courses_module_css__WEBPACK_IMPORTED_MODULE_2___default().head),
                    children: "Enhance your knowledge with"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_styles_Courses_module_css__WEBPACK_IMPORTED_MODULE_2___default().head2),
                    children: "Our Courses"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_styles_Courses_module_css__WEBPACK_IMPORTED_MODULE_2___default().para),
                    children: "Your path to academic excellence begins here. Discover specialized courses for JEE, NEET, and school curriculums, tailored for your success."
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Courses);


/***/ }),

/***/ 8646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Welcome)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/Welcome.module.css
var Welcome_module = __webpack_require__(4793);
var Welcome_module_default = /*#__PURE__*/__webpack_require__.n(Welcome_module);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./assets/home-page.svg
/* harmony default export */ const home_page = ({"src":"/_next/static/media/home-page.5f35210e.svg","height":418,"width":514,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Welcome.tsx
// Import necessary dependencies and styles

 // Update import to use "next/router" instead of "next/navigation"


 // Update import to use a proper image path
 // Import the Image component from next/image
const Welcome = ()=>{
    const router = (0,router_.useRouter)();
    // Define a function to handle navigation to the "/auth" route
    const handleStart = ()=>{
        router.push("/auth");
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (Welcome_module_default()).home_wrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (Welcome_module_default()).content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Welcome_module_default()).head_left,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (Welcome_module_default()).left_up,
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: "Interactive Learning"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (Welcome_module_default()).left_up_head,
                            children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: "Unlock Potential with AceAcad"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (Welcome_module_default()).left_up_para,
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: "Explore a wealth of knowledge with our comprehensive content library tailored for JEE, NEET, and school curriculums."
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (Welcome_module_default()).left_up_button,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (Welcome_module_default()).left_up_button_div,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                children: "Join us"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: (Welcome_module_default()).left_logo,
                                            children: /*#__PURE__*/ jsx_runtime.jsx(fa_.FaLongArrowAltRight, {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    children: "Login"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (Welcome_module_default()).head_right,
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: home_page,
                        alt: "Home Page"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Welcome = (Welcome);
{}

/***/ }),

/***/ 2603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6131);
/* harmony import */ var _components_Courses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6042);
/* harmony import */ var _components_Welcome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8646);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2948);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3579);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ChipTabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8074);
/* harmony import */ var _components_Bookpage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7205);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_4__, _components_SearchBar__WEBPACK_IMPORTED_MODULE_7__, _components_ChipTabs__WEBPACK_IMPORTED_MODULE_9__]);
([_axios__WEBPACK_IMPORTED_MODULE_4__, _components_SearchBar__WEBPACK_IMPORTED_MODULE_7__, _components_ChipTabs__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const cards = [
    // {
    //   title: 'NMTC',
    //   description: 'Members, Friends Connection (like followers), Private Message',
    //   icon: '/assets/examicons.svg',
    //   width: 50, // Add appropriate width
    //   height: 50, // Add appropriate height
    // },
    // {
    //   title: 'IJSO',
    //   description: 'You can create Members, Groups Module. We already created 3 modules. It\'s by drag & drop live builder.',
    //   icon: '/assets/examicons.svg',
    //   width: 50, // Add appropriate width
    //   height: 50, // Add appropriate height
    // },
    {
        title: "JEE-Advanced",
        description: "Forum is ready by BBPress. Your users can make topics and talk.",
        icon: "/assets/adv.svg",
        width: 50,
        height: 50
    },
    {
        title: "JEE-Mains",
        description: "Your users can create groups to let other users to join and talk",
        icon: "/assets/mains.svg",
        width: 50,
        height: 50
    },
    {
        title: "NEET",
        description: "Members, Groups list can be modified by drag & drop live builder.",
        icon: "/assets/neet.svg",
        width: 50,
        height: 50
    }
];
async function getServerSideProps(context) {
    try {
        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)(context);
        const [conceptsResponse, testimonialsResponse, questionsResponse] = await Promise.all([
            _axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get("/concepts/"),
            _axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get("/testimonials/"),
            _axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get("/question/add")
        ]);
        const concepts = conceptsResponse.data;
        const testimonials = testimonialsResponse.data;
        const questions = questionsResponse.data;
        if (session) {
            const email = session.user?.email;
            const userResponse = await _axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get(`/users/account/?email=${email}`);
            const user = userResponse.data;
            return {
                props: {
                    user,
                    concepts,
                    testimonials,
                    questions
                }
            };
        }
        return {
            props: {
                concepts,
                testimonials,
                questions
            }
        };
    } catch (error) {
        console.error(error);
        return {
            props: {}
        };
    }
}
const HomePage = ({ user , concepts , testimonials , questions  })=>{
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const handleSearchQueryChange = (newQuery)=>{
        setSearchQuery(newQuery);
    };
    const handleSearchResults = (results)=>{
        setSearchResults(results);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().main),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Welcome__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Courses__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ChipTabs__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().head),
                children: "Select for exam"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().head2),
                children: "What are you looking for"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().searchbar),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    searchQuery: searchQuery,
                    onSearchQueryChange: handleSearchQueryChange,
                    onSearchResults: handleSearchResults,
                    inputplaceholder: "Type the class / exam you're preparing for"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().examcard),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().cardsgrid),
                    children: cards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: index == 2 ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().card2) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().card),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().cardIcon),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        src: card.icon,
                                        alt: `${card.title} icon`,
                                        width: card.width,
                                        height: card.height
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().cardContent),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: card.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: card.description
                                        })
                                    ]
                                })
                            ]
                        }, index))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().downcard),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Bookpage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

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

/***/ 8625:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ci");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

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
var __webpack_exports__ = __webpack_require__.X(0, [893,636,675,948], () => (__webpack_exec__(6163)));
module.exports = __webpack_exports__;

})();