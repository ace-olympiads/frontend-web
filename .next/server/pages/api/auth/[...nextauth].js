"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 6209:
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ 3598:
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ 6520:
/***/ ((module) => {

module.exports = require("next-auth/providers/instagram");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 1219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ 6164:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3598);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_providers_instagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6520);
/* harmony import */ var next_auth_providers_instagram__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_instagram__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6209);
/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7449);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1219);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_5__]);
_axios__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({
    providers: [
        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default()({
            name: "credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    placeholder: "jsmith@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                console.log("auth runs successfully");
                const payload = {
                    username: credentials.email,
                    password: credentials.password,
                    grant_type: "password",
                    client_id: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
                    client_secret: `${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
                };
                try {
                    const resUser = await _axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].post */ .Z.post("auth/token/", payload);
                    console.log("ajeeeb hai!!!!!!!");
                    if (resUser.data) {
                        console.log(credentials);
                        const userDets = await _axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get(`/users/account/?email=${credentials.email}`);
                        console.log(resUser.data);
                        const FinalUserDetails = {
                            ...resUser.data,
                            ...userDets.data
                        };
                        console.log(FinalUserDetails);
                        return FinalUserDetails;
                    }
                } catch (error) {
                    return null;
                }
            }
        }),
        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0___default()({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_3___default()({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        next_auth_providers_instagram__WEBPACK_IMPORTED_MODULE_2___default()({
            clientId: process.env.INSTAGRAM_CLIENT_ID,
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn ({ account , profile , user  }) {
            if (account.provider === "google") {
                try {
                    const payload = {
                        username: user.name,
                        email: user.email,
                        image: user.image,
                        provider: account.provider
                    };
                    console.log("pata chalega");
                    console.log(payload);
                    console.log("item 2");
                    const makeNewUser = await _axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].post */ .Z.post("/users/account/", payload);
                    const sendingData = {
                        token: account?.access_token,
                        backend: "google-oauth2",
                        grant_type: "convert_token",
                        client_id: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
                        client_secret: `${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
                    };
                    console.log("item 3");
                    const convertToken = await _axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].post */ .Z.post("/auth/convert-token/", sendingData);
                    console.log("item 4");
                    const FinalUserDetails = {
                        ...makeNewUser.data,
                        ...convertToken.data
                    };
                    return FinalUserDetails;
                } catch (error) {
                    console.log(error);
                    const getDetails = await _axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get(`/users/account/?email=${profile.email}`);
                    const sendingData = {
                        token: account?.access_token,
                        backend: "google-oauth2",
                        grant_type: "convert_token",
                        client_id: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
                        client_secret: `${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
                    };
                    const convertToken = await _axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].post */ .Z.post("/auth/convert-token/", sendingData);
                    return getDetails.data;
                }
            } else if (account.provider === "facebook") {
                try {
                    const payload = {
                        username: user.name,
                        email: user.email,
                        image: user.image,
                        provider: account.provider
                    };
                    console.log("pata chalega");
                    console.log(payload);
                    console.log("item 2");
                    const makeNewUser = await _axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].post */ .Z.post("/users/account/", payload);
                    const sendingData = {
                        token: account?.access_token,
                        backend: "facebook",
                        grant_type: "convert_token",
                        client_id: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
                        client_secret: `${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
                    };
                    console.log("item 3");
                    const convertToken = await _axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].post */ .Z.post("/auth/convert-token/", sendingData);
                    const FinalUserDetails = {
                        ...makeNewUser.data,
                        ...convertToken.data
                    };
                    return FinalUserDetails;
                } catch (error) {
                    console.log(error);
                    const getDetails = await _axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get(`/users/account/?email=${profile.email}`);
                    // const sendingData = {
                    //   token: account?.access_token,
                    //   backend: "facebook",
                    //   grant_type: "convert_token",
                    //   client_id: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
                    //   client_secret: `${process.env.NEXT_PUBLIC_CLIENT_SECRET}`,
                    // };
                    // const convertToken = await axiosInstance.post(
                    //   "/auth/convert-token/",
                    //   sendingData
                    // );
                    return getDetails.data;
                }
            } else {
                console.log("object not found");
                return {
                    ...profile,
                    ...account
                };
            }
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6164));
module.exports = __webpack_exports__;

})();