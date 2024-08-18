exports.id = 183;
exports.ids = [183];
exports.modules = {

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

/***/ 7183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Examlist)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3579);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function Examlist() {
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().examcard),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardsgrid),
            children: cards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: index == 2 ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card2) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardIcon),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: card.icon,
                                alt: `${card.title} icon`,
                                width: card.width,
                                height: card.height
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardContent),
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
    });
}


/***/ })

};
;