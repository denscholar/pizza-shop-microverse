/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/comment.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/comment.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".comment-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  margin-left: 12em;\r\n  padding-top: 2rem;\r\n  justify-content: center;\r\n  justify-items: center;\r\n  color: cornsilk;\r\n}\r\n\r\n.comment-section form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  min-height: 20vh;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 1.5rem;\r\n  gap: 1rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/comment.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;EACvB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX","sourcesContent":[".comment-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  margin-left: 12em;\r\n  padding-top: 2rem;\r\n  justify-content: center;\r\n  justify-items: center;\r\n  color: cornsilk;\r\n}\r\n\r\n.comment-section form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  min-height: 20vh;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 1.5rem;\r\n  gap: 1rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popupStyle.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popupStyle.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n#overlay {\r\n  width: 100%;\r\n  position: fixed;\r\n  left: 0;\r\n  z-index: 9999;\r\n  background-color: rgb(26, 26, 27);\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n  top: 0 !important;\r\n  max-height: 100vh !important;\r\n  overflow-y: scroll !important;\r\n}\r\n\r\n.popupHeader {\r\n  width: 100%;\r\n  display: flex;\r\n  padding-left: 15%;\r\n  gap: 10rem;\r\n  justify-content: center;\r\n}\r\n\r\n.popupHeader img {\r\n  width: 20vw;\r\n  height: auto;\r\n}\r\n\r\n.fa-times {\r\n  font-size: 5rem;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  height: auto;\r\n  width: auto;\r\n}\r\n\r\n.popupLabel p {\r\n  text-align: center;\r\n  font-size: 40px;\r\n  color: whitesmoke;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.popupInfo {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.popupInfo table {\r\n  width: 70%;\r\n}\r\n\r\ntable tr {\r\n  width: 100%;\r\n}\r\n\r\ntd {\r\n  width: 48%;\r\n  text-align: left;\r\n  font-size: 1.5rem;\r\n  padding: 10px;\r\n  background-color: #404041;\r\n  color: white;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  margin-top: 1.1rem;\r\n}\r\n\r\n.popupReservation {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 30vh;\r\n}\r\n\r\n.popupReservation form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 70%;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  padding-top: 1.5rem;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.userInput {\r\n  font-size: 1.5rem;\r\n  padding: 0.8rem;\r\n  background-color: #404041;\r\n  color: white;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  width: 35%;\r\n}\r\n\r\n.popupReservation h2 {\r\n  text-align: center;\r\n  font-size: 40px;\r\n  color: whitesmoke;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.submitBtn {\r\n  width: 35%;\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.displayCounter p {\r\n  text-align: center;\r\n  font-size: 40px;\r\n  color: whitesmoke;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.show ul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.show ul li {\r\n  font-size: 1.5rem;\r\n  padding: 10px;\r\n  background-color: #404041;\r\n  color: #fff;\r\n  width: 35%;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  margin-top: 1.1rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/popupStyle.css"],"names":[],"mappings":";AACA;EACE,WAAW;EACX,eAAe;EACf,OAAO;EACP,aAAa;EACb,iCAAiC;EACjC,iBAAiB;EACjB,oBAAoB;EACpB,iBAAiB;EACjB,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,yBAAyB;EACzB,WAAW;EACX,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB","sourcesContent":["\r\n#overlay {\r\n  width: 100%;\r\n  position: fixed;\r\n  left: 0;\r\n  z-index: 9999;\r\n  background-color: rgb(26, 26, 27);\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n  top: 0 !important;\r\n  max-height: 100vh !important;\r\n  overflow-y: scroll !important;\r\n}\r\n\r\n.popupHeader {\r\n  width: 100%;\r\n  display: flex;\r\n  padding-left: 15%;\r\n  gap: 10rem;\r\n  justify-content: center;\r\n}\r\n\r\n.popupHeader img {\r\n  width: 20vw;\r\n  height: auto;\r\n}\r\n\r\n.fa-times {\r\n  font-size: 5rem;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  height: auto;\r\n  width: auto;\r\n}\r\n\r\n.popupLabel p {\r\n  text-align: center;\r\n  font-size: 40px;\r\n  color: whitesmoke;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.popupInfo {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.popupInfo table {\r\n  width: 70%;\r\n}\r\n\r\ntable tr {\r\n  width: 100%;\r\n}\r\n\r\ntd {\r\n  width: 48%;\r\n  text-align: left;\r\n  font-size: 1.5rem;\r\n  padding: 10px;\r\n  background-color: #404041;\r\n  color: white;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  margin-top: 1.1rem;\r\n}\r\n\r\n.popupReservation {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 30vh;\r\n}\r\n\r\n.popupReservation form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 70%;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  padding-top: 1.5rem;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.userInput {\r\n  font-size: 1.5rem;\r\n  padding: 0.8rem;\r\n  background-color: #404041;\r\n  color: white;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  width: 35%;\r\n}\r\n\r\n.popupReservation h2 {\r\n  text-align: center;\r\n  font-size: 40px;\r\n  color: whitesmoke;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.submitBtn {\r\n  width: 35%;\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.displayCounter p {\r\n  text-align: center;\r\n  font-size: 40px;\r\n  color: whitesmoke;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.show ul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.show ul li {\r\n  font-size: 1.5rem;\r\n  padding: 10px;\r\n  background-color: #404041;\r\n  color: #fff;\r\n  width: 35%;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  margin-top: 1.1rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: \"Poppins\", sans-serif;\r\n  color: white;\r\n  font-size: 20px;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n}\r\n\r\n.title-cover {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n.title-cover .counter {\r\n  font-size: 25px;\r\n  color: whitesmoke;\r\n}\r\n\r\n.img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.navbar {\r\n  width: 80%;\r\n  margin-left: 6rem;\r\n}\r\n\r\n.nav-brand {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.navlinks {\r\n  text-decoration: none;\r\n  font-size: 2rem;\r\n}\r\n\r\n.navbar-brand img {\r\n  width: 10rem;\r\n}\r\n\r\nsection {\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 100px 0;\r\n  background-color: rgb(26, 26, 27);\r\n}\r\n\r\n.container {\r\n  width: 90%;\r\n  height: auto;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.brand {\r\n  text-align: center;\r\n  font-size: 40px;\r\n  color: whitesmoke;\r\n}\r\n\r\n.search-result {\r\n  margin-top: 50px;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-gap: 15px;\r\n  grid-template: auto / repeat(auto-fit, minmax(300px, 1fr));\r\n}\r\n\r\n.item {\r\n  width: 100%;\r\n  border-radius: 8px;\r\n  background: rgb(37, 37, 37);\r\n  padding: 13px;\r\n  overflow: hidden;\r\n}\r\n\r\n.item img {\r\n  width: 100%;\r\n  height: 300px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.item .flex-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.item .title {\r\n  color: white;\r\n  font-size: 18px;\r\n}\r\n\r\n.item .view-btn {\r\n  padding: 10px;\r\n  background-color: #404041;\r\n  color: white;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n}\r\n\r\n.item .item-data {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.likes {\r\n  font-size: 20px;\r\n  color: whitesmoke;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.item .comment,\r\n.reserve {\r\n  padding: 10px;\r\n  background-color: #404041;\r\n  color: white;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n}\r\n\r\n.heart {\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n.likes-div {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 5px;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  background-color: rgb(26, 26, 27);\r\n  border: 3px solid whitesmoke;\r\n  height: 10vh;\r\n  padding-left: 100px;\r\n  align-items: center;\r\n}\r\n\r\nfooter p {\r\n  font-size: 1.5rem;\r\n  color: white;\r\n}\r\n\r\n.icon {\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 25px;\r\n  color: white;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,cAAc;EACd,0DAA0D;AAC5D;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,2BAA2B;EAC3B,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,QAAQ;EACR,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,4BAA4B;EAC5B,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,YAAY;EACZ,eAAe;EACf,YAAY;AACd","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400&display=swap\");\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  color: white;\r\n  font-size: 20px;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n}\r\n\r\n.title-cover {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n.title-cover .counter {\r\n  font-size: 25px;\r\n  color: whitesmoke;\r\n}\r\n\r\n.img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.navbar {\r\n  width: 80%;\r\n  margin-left: 6rem;\r\n}\r\n\r\n.nav-brand {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.navlinks {\r\n  text-decoration: none;\r\n  font-size: 2rem;\r\n}\r\n\r\n.navbar-brand img {\r\n  width: 10rem;\r\n}\r\n\r\nsection {\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 100px 0;\r\n  background-color: rgb(26, 26, 27);\r\n}\r\n\r\n.container {\r\n  width: 90%;\r\n  height: auto;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.brand {\r\n  text-align: center;\r\n  font-size: 40px;\r\n  color: whitesmoke;\r\n}\r\n\r\n.search-result {\r\n  margin-top: 50px;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-gap: 15px;\r\n  grid-template: auto / repeat(auto-fit, minmax(300px, 1fr));\r\n}\r\n\r\n.item {\r\n  width: 100%;\r\n  border-radius: 8px;\r\n  background: rgb(37, 37, 37);\r\n  padding: 13px;\r\n  overflow: hidden;\r\n}\r\n\r\n.item img {\r\n  width: 100%;\r\n  height: 300px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.item .flex-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.item .title {\r\n  color: white;\r\n  font-size: 18px;\r\n}\r\n\r\n.item .view-btn {\r\n  padding: 10px;\r\n  background-color: #404041;\r\n  color: white;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n}\r\n\r\n.item .item-data {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.likes {\r\n  font-size: 20px;\r\n  color: whitesmoke;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.item .comment,\r\n.reserve {\r\n  padding: 10px;\r\n  background-color: #404041;\r\n  color: white;\r\n  font-weight: 600;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n}\r\n\r\n.heart {\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n.likes-div {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 5px;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  background-color: rgb(26, 26, 27);\r\n  border: 3px solid whitesmoke;\r\n  height: 10vh;\r\n  padding-left: 100px;\r\n  align-items: center;\r\n}\r\n\r\nfooter p {\r\n  font-size: 1.5rem;\r\n  color: white;\r\n}\r\n\r\n.icon {\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 25px;\r\n  color: white;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/comment.css":
/*!*************************!*\
  !*** ./src/comment.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./comment.css */ "./node_modules/css-loader/dist/cjs.js!./src/comment.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/popupStyle.css":
/*!****************************!*\
  !*** ./src/popupStyle.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popupStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./popupStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/popupStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popupStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popupStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popupStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popupStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/apis.js":
/*!*****************************!*\
  !*** ./src/modules/apis.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "likesUrl": () => (/* binding */ likesUrl),
/* harmony export */   "baseURL": () => (/* binding */ baseURL)
/* harmony export */ });
const appId = '2d879374';
const appKey = 'f1a2011b05e44970c7a43ac9a5a11568';
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0d3DbQnYMZogCXHjeUdu/likes';
const baseURL = `https://api.edamam.com/api/food-database/v2/parser?ingr=pizza&app_id=${appId}&app_key=${appKey}&to=13`;


/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apis.js */ "./src/modules/apis.js");


const counter = async () => {
  const res = await fetch(_apis_js__WEBPACK_IMPORTED_MODULE_0__.baseURL);
  const json = await res.json();
  return json;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);

/***/ }),

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const appId = '2d879374';
const appKey = 'f1a2011b05e44970c7a43ac9a5a11568';
let comStr = '';
let counter = 0;

const displayComments = async (event) => {
  if (event.target.classList.contains('comment')) {
    const sourceId = event.target.id;
    const popup = document.createElement('div');
    const parentNode = document.querySelector('body');
    const existingNode = document.querySelector('section');

    popup.setAttribute('id', 'overlay');
    existingNode.parentNode.insertBefore(popup, existingNode);

    const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/comments?item_id=${sourceId}`);
    const commentItem = await comments.json();

    commentItem.forEach((element) => {
      comStr += `<div> ${element.username} : ${element.comment} </div>`;
    });

    counter = commentItem.length;

    const baseURL = `https://api.edamam.com/api/food-database/v2/parser?ingr=pizza&app_id=${appId}&app_key=${appKey}&to=13`;
    const response = await fetch(baseURL);
    const data = await response.json();
    let itemCode;

    data.hints.forEach((element) => {
      if (element.food.foodId === sourceId) {
        itemCode = element.food.foodId;

        popup.innerHTML = `
            <div class="popupHeader">
              <img src="${element.food.image}" alt="food image">
              <i class="fas fa-times"></i>
              </div>
              <div class="popupLabel">
              <p>${element.food.label}</p>
              </div>
              <div class="popupInfo">
              <table>
              <tr>
              <td>Category: ${element.food.category} </td><td>Fat: ${element.food.nutrients.FAT}</td>
              </tr>
              <tr>
              <td>Weight: ${element.measures[0].weight} </td><td>Calories (kcal): ${element.food.nutrients.ENERC_KCAL}</td>
              </tr>
              </table>
            </div>
            
          <div class="comment-section">

            <div>
              <p>Comments (${counter})</p>
            </div>

            <div>
            ${comStr}
            </div>
            
                      

            <form class="form-comment">
              <h4>Add a comment </h4>
              <input type="text" placeholder="Name" id="username" name="username" maxlength="20 required"/>
              <textarea name="text-area" maxlength="300" id:"comment" placeholder="Leave a comment" required></textarea>
              <button type="submit" class="add-btn">Comment</button>
            </form>
          </div>
        `;
      }
    });

    const submitButton = document.querySelector('.add-btn');
    const createComments = async (obj) => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify(obj);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/comments/', requestOptions);
    };

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const user = document.querySelector('#username').value;
      const comt = document.querySelector('textarea').value;
      const obj = {
        item_id: itemCode,
        username: user,
        comment: comt,
      };

      createComments(obj);
      document.querySelector('.form-comment').reset();
      displayComments(event);
    });

    const closeBtn = document.querySelector('.fa-times');

    closeBtn.addEventListener('click', () => {
      parentNode.removeChild(popup);
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);

/***/ }),

/***/ "./src/modules/display_reservations.js":
/*!*********************************************!*\
  !*** ./src/modules/display_reservations.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reservationCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservationCounter.js */ "./src/modules/reservationCounter.js");


const appId = '2d879374';
const appKey = 'f1a2011b05e44970c7a43ac9a5a11568';
let str1 = '';
let counter;

const displayReservations = async (event) => {
  if (event.target.classList.contains('reserve')) {
    const sourceId = event.target.id;
    const popup = document.createElement('div');
    const parentNode = document.querySelector('body');
    const existingNode = document.querySelector('section');

    popup.setAttribute('id', 'overlay');
    existingNode.parentNode.insertBefore(popup, existingNode);

    const reservations = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/reservations?item_id=${sourceId}`);
    const reservItem = await reservations.json();

    reservItem.forEach((element) => {
      str1 += `<li> ${element.date_start.toLocaleString().split(',')[0]} - ${element.date_end.toLocaleString().split(',')[0]} by ${element.username} </li>`;
    });

    counter = (0,_reservationCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(reservItem);

    const baseURL = `https://api.edamam.com/api/food-database/v2/parser?ingr=pizza&app_id=${appId}&app_key=${appKey}&to=13`;
    const response = await fetch(baseURL);
    const data = await response.json();
    let itemCode;

    data.hints.forEach((element) => {
      if (element.food.foodId === sourceId) {
        itemCode = element.food.foodId;

        popup.innerHTML = `
            <div class="popupHeader">
            <img src="${element.food.image}" alt="food image">
            <i class="fas fa-times"></i>
            </div>
            <div class="popupLabel">
            <p>${element.food.label}</p>
            </div>
            <div class="popupInfo">
            <table>
            <tr>
            <td>Category: ${element.food.category} </td><td>Fat: ${element.food.nutrients.FAT}</td>
            </tr>
            <tr>
            <td>Weight: ${element.measures[0].weight} </td><td>Calories (kcal): ${element.food.nutrients.ENERC_KCAL}</td>
            </tr>
            </table>
            </div>
<div class = "displayCounter">
<p><span>Reservations</span> (<span id="counterPlace">${counter}</span>)</p>

</div>

            <div class="show">
            <ul id="showContent">
            ${str1}
            </ul>>
            </div>
            <div class="popupReservation">
            <h2>Add a reservation</h2>
            <form class="reservationForm">
            <input type="text" name="userName" id="userName" placeholder="Your name" class="userInput" required>
            <input type="date" name="startDate" id="startDate" placeholder="Start date" class="userInput" required>
            <input type="date" name="endDate" id="endDate" placeholder="End date" class="userInput" required>
            <button type="button" class="reserve submitBtn" id=${element.food.foodId}>Reserve</button>
            </form>      
            </div>   
            `;
      }
    });

    const submitButton = document.querySelector('.submitBtn');

    const createReservation = async (obj) => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify(obj);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/reservations/', requestOptions);
    };

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const nameOfUser = document.querySelector('#userName').value;
      const starting = document.querySelector('#startDate').value;
      const ending = document.querySelector('#endDate').value;
      const counterContent = document.querySelector('#counterPlace');
      const contentShow = document.querySelector('#showContent');

      localStorage.setItem('session', event);
      const obj = {
        item_id: itemCode,
        username: nameOfUser,
        date_start: starting,
        date_end: ending,
      };

      createReservation(obj);
      counterContent.innerHTML = counter + 1;
      counter = counter + 1;
      contentShow.innerHTML = str1 + `<li> ${starting.toLocaleString().split(',')[0]} - ${ending.toLocaleString().split(',')[0]} by ${nameOfUser} </li>`;
      str1 = str1 + `<li> ${starting.toLocaleString().split(',')[0]} - ${ending.toLocaleString().split(',')[0]} by ${nameOfUser} </li>`;
      document.querySelector('.reservationForm').reset();


    });

    const closeBtn = document.querySelector('.fa-times');

    closeBtn.addEventListener('click', () => {
      parentNode.removeChild(popup);
      str1 = '';
      counter = 0;
    });
  }

  return event;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayReservations);

/***/ }),

/***/ "./src/modules/reservationCounter.js":
/*!*******************************************!*\
  !*** ./src/modules/reservationCounter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reservationCounter = (reservation) => {
  let counter;
  if (reservation.length) {
    counter = reservation.length;
  } else {
    counter = 0;
  }
  return counter;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationCounter);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _popupStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popupStyle.css */ "./src/popupStyle.css");
/* harmony import */ var _comment_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.css */ "./src/comment.css");
/* harmony import */ var _modules_display_reservations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display_reservations.js */ "./src/modules/display_reservations.js");
/* harmony import */ var _modules_counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/counter.js */ "./src/modules/counter.js");
/* harmony import */ var _modules_apis_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/apis.js */ "./src/modules/apis.js");
/* harmony import */ var _modules_displayComments_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/displayComments.js */ "./src/modules/displayComments.js");
/* eslint-disable no-plusplus */








const header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });
const searchResult = document.querySelector('.search-result');

const getLikes = async () => {
  try {
    const response = await fetch(_modules_apis_js__WEBPACK_IMPORTED_MODULE_5__.likesUrl);
    return await response.json();
  } catch (err) {
    return err;
  }
};

const addLikes = async (e) => {
  const element = e.target.parentNode.children[1].id;
  const fetchLikes = await fetch(_modules_apis_js__WEBPACK_IMPORTED_MODULE_5__.likesUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: element,
    }),
    headers: header,
  });
  return fetchLikes;
};

const generateHtml = (results) => {
  results.slice(3, 12).forEach((result) => {
    const divItem = document.createElement('div');
    divItem.classList.add('item');
    divItem.innerHTML = `
    <img src="${result.food.image}" alt="${result.food.label}">
    <div class="flex-container">
      <h1 class="title">${result.food.label}</h1>
      <div class="likes-div">
        <button class="icon" type="button">&#10084;</button>
        <p class="likes" id="${result.food.foodId}"></p>Likes
      </div>
    </div>
    <div class="item-data">
        <a class="comment" id=${result.food.foodId} href="">Comment</a>
        <a class="reserve" id=${result.food.foodId} href="">Reservation</a>
    </div>
        `;
    searchResult.appendChild(divItem);
  });
  getLikes().then((response) => {
    const likes = document.querySelectorAll('.likes');
    for (let i = 0; i < response.length; i++) {
      likes[i].textContent = `
        ${response[i].likes}
      `;
    }
  });

  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      addLikes(e);
      const numOfLikes = e.target.parentNode.children[1];
      numOfLikes.textContent = +numOfLikes.textContent + 1;
    });
  });
};

const desplayResult = async () => {
  const response = await fetch(_modules_apis_js__WEBPACK_IMPORTED_MODULE_5__.baseURL);
  const data = await response.json();
  generateHtml(data.hints);
};

desplayResult();

document.querySelector('.search-result').addEventListener('click', (event) => {
  event.preventDefault();

  (0,_modules_display_reservations_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event);
  (0,_modules_displayComments_js__WEBPACK_IMPORTED_MODULE_6__["default"])(event);
});

(0,_modules_counter_js__WEBPACK_IMPORTED_MODULE_4__["default"])().then((data) => {
  const counter = data.hints.slice(3, 12).length;
  const countHeader = document.querySelector('.counter');
  countHeader.textContent = `
    ${counter} Pizzers available
  `;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNzQjtBQUNJO0FBQ0g7QUFDNkM7QUFDekI7QUFDVztBQUNLOztBQUUzRCw2QkFBNkIsbUNBQW1DLGdCQUFnQjtBQUNoRjs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLHNEQUFRO0FBQ3pDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLHNEQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCLFNBQVMsa0JBQWtCO0FBQzdEO0FBQ0EsMEJBQTBCLGtCQUFrQjtBQUM1QztBQUNBLG1EQUFtRDtBQUNuRCwrQkFBK0IsbUJBQW1CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBLCtCQUErQixxREFBTztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLDRFQUFtQjtBQUNyQixFQUFFLHVFQUFlO0FBQ2pCLENBQUM7O0FBRUQsK0RBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNLFNBQVM7QUFDZjtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BpenphLXNob3AtbWljcm92ZXJzZS8uL3NyYy9jb21tZW50LmNzcyIsIndlYnBhY2s6Ly9waXp6YS1zaG9wLW1pY3JvdmVyc2UvLi9zcmMvcG9wdXBTdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcGl6emEtc2hvcC1taWNyb3ZlcnNlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcGl6emEtc2hvcC1taWNyb3ZlcnNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9waXp6YS1zaG9wLW1pY3JvdmVyc2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9waXp6YS1zaG9wLW1pY3JvdmVyc2UvLi9zcmMvY29tbWVudC5jc3M/ODNkYSIsIndlYnBhY2s6Ly9waXp6YS1zaG9wLW1pY3JvdmVyc2UvLi9zcmMvcG9wdXBTdHlsZS5jc3M/MzQ5NCIsIndlYnBhY2s6Ly9waXp6YS1zaG9wLW1pY3JvdmVyc2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3BpenphLXNob3AtbWljcm92ZXJzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9waXp6YS1zaG9wLW1pY3JvdmVyc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BpenphLXNob3AtbWljcm92ZXJzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9waXp6YS1zaG9wLW1pY3JvdmVyc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcGl6emEtc2hvcC1taWNyb3ZlcnNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGl6emEtc2hvcC1taWNyb3ZlcnNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGl6emEtc2hvcC1taWNyb3ZlcnNlLy4vc3JjL21vZHVsZXMvYXBpcy5qcyIsIndlYnBhY2s6Ly9waXp6YS1zaG9wLW1pY3JvdmVyc2UvLi9zcmMvbW9kdWxlcy9jb3VudGVyLmpzIiwid2VicGFjazovL3BpenphLXNob3AtbWljcm92ZXJzZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9waXp6YS1zaG9wLW1pY3JvdmVyc2UvLi9zcmMvbW9kdWxlcy9kaXNwbGF5X3Jlc2VydmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9waXp6YS1zaG9wLW1pY3JvdmVyc2UvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbkNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vcGl6emEtc2hvcC1taWNyb3ZlcnNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BpenphLXNob3AtbWljcm92ZXJzZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9waXp6YS1zaG9wLW1pY3JvdmVyc2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BpenphLXNob3AtbWljcm92ZXJzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BpenphLXNob3AtbWljcm92ZXJzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BpenphLXNob3AtbWljcm92ZXJzZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IGNvcm5zaWxrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDIwdmg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tbWVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogMTJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogY29ybnNpbGs7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24gZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMjB2aDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbiNvdmVybGF5IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsIDI2LCAyNyk7XFxyXFxuICBwYWRkaW5nLXRvcDogM3JlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcclxcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cEhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE1JTtcXHJcXG4gIGdhcDogMTByZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwSGVhZGVyIGltZyB7XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRpbWVzIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wb3B1cExhYmVsIHAge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBJbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwSW5mbyB0YWJsZSB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0ciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxudGQge1xcclxcbiAgd2lkdGg6IDQ4JTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQxO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwUmVzZXJ2YXRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwdmg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFJlc2VydmF0aW9uIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJJbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwUmVzZXJ2YXRpb24gaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0QnRuIHtcXHJcXG4gIHdpZHRoOiAzNSU7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheUNvdW50ZXIgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB1bCBsaSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQxO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogMzUlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEuMXJlbTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BvcHVwU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsT0FBTztFQUNQLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4jb3ZlcmxheSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LCAyNiwgMjcpO1xcclxcbiAgcGFkZGluZy10b3A6IDNyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXHJcXG4gIHRvcDogMCAhaW1wb3J0YW50O1xcclxcbiAgbWF4LWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBIZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XFxyXFxuICBnYXA6IDEwcmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cEhlYWRlciBpbWcge1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mYS10aW1lcyB7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBMYWJlbCBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwSW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cEluZm8gdGFibGUge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdHIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnRkIHtcXHJcXG4gIHdpZHRoOiA0OCU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFJlc2VydmF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAzMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBSZXNlcnZhdGlvbiBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi51c2VySW5wdXQge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjhyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQxO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHdpZHRoOiAzNSU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFJlc2VydmF0aW9uIGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ0biB7XFxyXFxuICB3aWR0aDogMzUlO1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXlDb3VudGVyIHAge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB1bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3cgdWwgbGkge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgd2lkdGg6IDM1JTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxLjFyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsOTAwOzEsNDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvdmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY292ZXIgLmNvdW50ZXIge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi5pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDZyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnJhbmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rcyB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItYnJhbmQgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsIDI2LCAyNyk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5icmFuZCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQge1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtZ2FwOiAxNXB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMzcsIDM3LCAzNyk7XFxyXFxuICBwYWRkaW5nOiAxM3B4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gLmZsZXgtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gLnRpdGxlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gLnZpZXctYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQxO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gLml0ZW0tZGF0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSAuY29tbWVudCxcXHJcXG4ucmVzZXJ2ZSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwgMjYsIDI3KTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsOTAwOzEsNDAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvdmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY292ZXIgLmNvdW50ZXIge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi5pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDZyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnJhbmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rcyB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItYnJhbmQgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsIDI2LCAyNyk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5icmFuZCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQge1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtZ2FwOiAxNXB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMzcsIDM3LCAzNyk7XFxyXFxuICBwYWRkaW5nOiAxM3B4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gLmZsZXgtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gLnRpdGxlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gLnZpZXctYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQxO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gLml0ZW0tZGF0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSAuY29tbWVudCxcXHJcXG4ucmVzZXJ2ZSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwgMjYsIDI3KTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tZW50LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbWVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXBTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwU3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYXBwSWQgPSAnMmQ4NzkzNzQnO1xuY29uc3QgYXBwS2V5ID0gJ2YxYTIwMTFiMDVlNDQ5NzBjN2E0M2FjOWE1YTExNTY4JztcbmV4cG9ydCBjb25zdCBsaWtlc1VybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8wZDNEYlFuWU1ab2dDWEhqZVVkdS9saWtlcyc7XG5leHBvcnQgY29uc3QgYmFzZVVSTCA9IGBodHRwczovL2FwaS5lZGFtYW0uY29tL2FwaS9mb29kLWRhdGFiYXNlL3YyL3BhcnNlcj9pbmdyPXBpenphJmFwcF9pZD0ke2FwcElkfSZhcHBfa2V5PSR7YXBwS2V5fSZ0bz0xM2A7XG4iLCJpbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi9hcGlzLmpzJztcblxuY29uc3QgY291bnRlciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYmFzZVVSTCk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ganNvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXI7IiwiY29uc3QgYXBwSWQgPSAnMmQ4NzkzNzQnO1xuY29uc3QgYXBwS2V5ID0gJ2YxYTIwMTFiMDVlNDQ5NzBjN2E0M2FjOWE1YTExNTY4JztcbmxldCBjb21TdHIgPSAnJztcbmxldCBjb3VudGVyID0gMDtcblxuY29uc3QgZGlzcGxheUNvbW1lbnRzID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21tZW50JykpIHtcbiAgICBjb25zdCBzb3VyY2VJZCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgZXhpc3RpbmdOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuXG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdpZCcsICdvdmVybGF5Jyk7XG4gICAgZXhpc3RpbmdOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBvcHVwLCBleGlzdGluZ05vZGUpO1xuXG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvSXZQNDJ4TmNtWjdzVDVycDg3d0wvY29tbWVudHM/aXRlbV9pZD0ke3NvdXJjZUlkfWApO1xuICAgIGNvbnN0IGNvbW1lbnRJdGVtID0gYXdhaXQgY29tbWVudHMuanNvbigpO1xuXG4gICAgY29tbWVudEl0ZW0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29tU3RyICs9IGA8ZGl2PiAke2VsZW1lbnQudXNlcm5hbWV9IDogJHtlbGVtZW50LmNvbW1lbnR9IDwvZGl2PmA7XG4gICAgfSk7XG5cbiAgICBjb3VudGVyID0gY29tbWVudEl0ZW0ubGVuZ3RoO1xuXG4gICAgY29uc3QgYmFzZVVSTCA9IGBodHRwczovL2FwaS5lZGFtYW0uY29tL2FwaS9mb29kLWRhdGFiYXNlL3YyL3BhcnNlcj9pbmdyPXBpenphJmFwcF9pZD0ke2FwcElkfSZhcHBfa2V5PSR7YXBwS2V5fSZ0bz0xM2A7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChiYXNlVVJMKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGxldCBpdGVtQ29kZTtcblxuICAgIGRhdGEuaGludHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuZm9vZC5mb29kSWQgPT09IHNvdXJjZUlkKSB7XG4gICAgICAgIGl0ZW1Db2RlID0gZWxlbWVudC5mb29kLmZvb2RJZDtcblxuICAgICAgICBwb3B1cC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2VsZW1lbnQuZm9vZC5pbWFnZX1cIiBhbHQ9XCJmb29kIGltYWdlXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwTGFiZWxcIj5cbiAgICAgICAgICAgICAgPHA+JHtlbGVtZW50LmZvb2QubGFiZWx9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwSW5mb1wiPlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPkNhdGVnb3J5OiAke2VsZW1lbnQuZm9vZC5jYXRlZ29yeX0gPC90ZD48dGQ+RmF0OiAke2VsZW1lbnQuZm9vZC5udXRyaWVudHMuRkFUfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPldlaWdodDogJHtlbGVtZW50Lm1lYXN1cmVzWzBdLndlaWdodH0gPC90ZD48dGQ+Q2Fsb3JpZXMgKGtjYWwpOiAke2VsZW1lbnQuZm9vZC5udXRyaWVudHMuRU5FUkNfS0NBTH08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1zZWN0aW9uXCI+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPkNvbW1lbnRzICgke2NvdW50ZXJ9KTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgJHtjb21TdHJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0tY29tbWVudFwiPlxuICAgICAgICAgICAgICA8aDQ+QWRkIGEgY29tbWVudCA8L2g0PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgbWF4bGVuZ3RoPVwiMjAgcmVxdWlyZWRcIi8+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwidGV4dC1hcmVhXCIgbWF4bGVuZ3RoPVwiMzAwXCIgaWQ6XCJjb21tZW50XCIgcGxhY2Vob2xkZXI9XCJMZWF2ZSBhIGNvbW1lbnRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImFkZC1idG5cIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bicpO1xuICAgIGNvbnN0IGNyZWF0ZUNvbW1lbnRzID0gYXN5bmMgKG9iaikgPT4ge1xuICAgICAgY29uc3QgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgIG15SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICAgIGNvbnN0IHJhdyA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG5cbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgICBib2R5OiByYXcsXG4gICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgIH07XG5cbiAgICAgIGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9JdlA0MnhOY21aN3NUNXJwODd3TC9jb21tZW50cy8nLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgfTtcblxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUnKS52YWx1ZTtcbiAgICAgIGNvbnN0IGNvbXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlO1xuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBpdGVtX2lkOiBpdGVtQ29kZSxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIsXG4gICAgICAgIGNvbW1lbnQ6IGNvbXQsXG4gICAgICB9O1xuXG4gICAgICBjcmVhdGVDb21tZW50cyhvYmopO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29tbWVudCcpLnJlc2V0KCk7XG4gICAgICBkaXNwbGF5Q29tbWVudHMoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtdGltZXMnKTtcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwb3B1cCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb21tZW50czsiLCJpbXBvcnQgcmVzZXJ2YXRpb25Db3VudGVyIGZyb20gJy4vcmVzZXJ2YXRpb25Db3VudGVyLmpzJztcblxuY29uc3QgYXBwSWQgPSAnMmQ4NzkzNzQnO1xuY29uc3QgYXBwS2V5ID0gJ2YxYTIwMTFiMDVlNDQ5NzBjN2E0M2FjOWE1YTExNTY4JztcbmxldCBzdHIxID0gJyc7XG5sZXQgY291bnRlcjtcblxuY29uc3QgZGlzcGxheVJlc2VydmF0aW9ucyA9IGFzeW5jIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVzZXJ2ZScpKSB7XG4gICAgY29uc3Qgc291cmNlSWQgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcblxuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3ZlcmxheScpO1xuICAgIGV4aXN0aW5nTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwb3B1cCwgZXhpc3RpbmdOb2RlKTtcblxuICAgIGNvbnN0IHJlc2VydmF0aW9ucyA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9JdlA0MnhOY21aN3NUNXJwODd3TC9yZXNlcnZhdGlvbnM/aXRlbV9pZD0ke3NvdXJjZUlkfWApO1xuICAgIGNvbnN0IHJlc2Vydkl0ZW0gPSBhd2FpdCByZXNlcnZhdGlvbnMuanNvbigpO1xuXG4gICAgcmVzZXJ2SXRlbS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBzdHIxICs9IGA8bGk+ICR7ZWxlbWVudC5kYXRlX3N0YXJ0LnRvTG9jYWxlU3RyaW5nKCkuc3BsaXQoJywnKVswXX0gLSAke2VsZW1lbnQuZGF0ZV9lbmQudG9Mb2NhbGVTdHJpbmcoKS5zcGxpdCgnLCcpWzBdfSBieSAke2VsZW1lbnQudXNlcm5hbWV9IDwvbGk+YDtcbiAgICB9KTtcblxuICAgIGNvdW50ZXIgPSByZXNlcnZhdGlvbkNvdW50ZXIocmVzZXJ2SXRlbSk7XG5cbiAgICBjb25zdCBiYXNlVVJMID0gYGh0dHBzOi8vYXBpLmVkYW1hbS5jb20vYXBpL2Zvb2QtZGF0YWJhc2UvdjIvcGFyc2VyP2luZ3I9cGl6emEmYXBwX2lkPSR7YXBwSWR9JmFwcF9rZXk9JHthcHBLZXl9JnRvPTEzYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhc2VVUkwpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgbGV0IGl0ZW1Db2RlO1xuXG4gICAgZGF0YS5oaW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5mb29kLmZvb2RJZCA9PT0gc291cmNlSWQpIHtcbiAgICAgICAgaXRlbUNvZGUgPSBlbGVtZW50LmZvb2QuZm9vZElkO1xuXG4gICAgICAgIHBvcHVwLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2VsZW1lbnQuZm9vZC5pbWFnZX1cIiBhbHQ9XCJmb29kIGltYWdlXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwTGFiZWxcIj5cbiAgICAgICAgICAgIDxwPiR7ZWxlbWVudC5mb29kLmxhYmVsfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwSW5mb1wiPlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPkNhdGVnb3J5OiAke2VsZW1lbnQuZm9vZC5jYXRlZ29yeX0gPC90ZD48dGQ+RmF0OiAke2VsZW1lbnQuZm9vZC5udXRyaWVudHMuRkFUfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPldlaWdodDogJHtlbGVtZW50Lm1lYXN1cmVzWzBdLndlaWdodH0gPC90ZD48dGQ+Q2Fsb3JpZXMgKGtjYWwpOiAke2VsZW1lbnQuZm9vZC5udXRyaWVudHMuRU5FUkNfS0NBTH08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbjxkaXYgY2xhc3MgPSBcImRpc3BsYXlDb3VudGVyXCI+XG48cD48c3Bhbj5SZXNlcnZhdGlvbnM8L3NwYW4+ICg8c3BhbiBpZD1cImNvdW50ZXJQbGFjZVwiPiR7Y291bnRlcn08L3NwYW4+KTwvcD5cblxuPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG93XCI+XG4gICAgICAgICAgICA8dWwgaWQ9XCJzaG93Q29udGVudFwiPlxuICAgICAgICAgICAgJHtzdHIxfVxuICAgICAgICAgICAgPC91bD4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cFJlc2VydmF0aW9uXCI+XG4gICAgICAgICAgICA8aDI+QWRkIGEgcmVzZXJ2YXRpb248L2gyPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJyZXNlcnZhdGlvbkZvcm1cIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyTmFtZVwiIGlkPVwidXNlck5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIGNsYXNzPVwidXNlcklucHV0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwic3RhcnREYXRlXCIgaWQ9XCJzdGFydERhdGVcIiBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIiBjbGFzcz1cInVzZXJJbnB1dFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImVuZERhdGVcIiBpZD1cImVuZERhdGVcIiBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlXCIgY2xhc3M9XCJ1c2VySW5wdXRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicmVzZXJ2ZSBzdWJtaXRCdG5cIiBpZD0ke2VsZW1lbnQuZm9vZC5mb29kSWR9PlJlc2VydmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT4gICAgICBcbiAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgICAgICAgYDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdG4nKTtcblxuICAgIGNvbnN0IGNyZWF0ZVJlc2VydmF0aW9uID0gYXN5bmMgKG9iaikgPT4ge1xuICAgICAgY29uc3QgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgIG15SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICAgIGNvbnN0IHJhdyA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG5cbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgICBib2R5OiByYXcsXG4gICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgIH07XG5cbiAgICAgIGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9JdlA0MnhOY21aN3NUNXJwODd3TC9yZXNlcnZhdGlvbnMvJywgcmVxdWVzdE9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBuYW1lT2ZVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJOYW1lJykudmFsdWU7XG4gICAgICBjb25zdCBzdGFydGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydERhdGUnKS52YWx1ZTtcbiAgICAgIGNvbnN0IGVuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmREYXRlJykudmFsdWU7XG4gICAgICBjb25zdCBjb3VudGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudGVyUGxhY2UnKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3dDb250ZW50Jyk7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXNzaW9uJywgZXZlbnQpO1xuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBpdGVtX2lkOiBpdGVtQ29kZSxcbiAgICAgICAgdXNlcm5hbWU6IG5hbWVPZlVzZXIsXG4gICAgICAgIGRhdGVfc3RhcnQ6IHN0YXJ0aW5nLFxuICAgICAgICBkYXRlX2VuZDogZW5kaW5nLFxuICAgICAgfTtcblxuICAgICAgY3JlYXRlUmVzZXJ2YXRpb24ob2JqKTtcbiAgICAgIGNvdW50ZXJDb250ZW50LmlubmVySFRNTCA9IGNvdW50ZXIgKyAxO1xuICAgICAgY291bnRlciA9IGNvdW50ZXIgKyAxO1xuICAgICAgY29udGVudFNob3cuaW5uZXJIVE1MID0gc3RyMSArIGA8bGk+ICR7c3RhcnRpbmcudG9Mb2NhbGVTdHJpbmcoKS5zcGxpdCgnLCcpWzBdfSAtICR7ZW5kaW5nLnRvTG9jYWxlU3RyaW5nKCkuc3BsaXQoJywnKVswXX0gYnkgJHtuYW1lT2ZVc2VyfSA8L2xpPmA7XG4gICAgICBzdHIxID0gc3RyMSArIGA8bGk+ICR7c3RhcnRpbmcudG9Mb2NhbGVTdHJpbmcoKS5zcGxpdCgnLCcpWzBdfSAtICR7ZW5kaW5nLnRvTG9jYWxlU3RyaW5nKCkuc3BsaXQoJywnKVswXX0gYnkgJHtuYW1lT2ZVc2VyfSA8L2xpPmA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb25Gb3JtJykucmVzZXQoKTtcblxuXG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS10aW1lcycpO1xuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBvcHVwKTtcbiAgICAgIHN0cjEgPSAnJztcbiAgICAgIGNvdW50ZXIgPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVJlc2VydmF0aW9uczsiLCJjb25zdCByZXNlcnZhdGlvbkNvdW50ZXIgPSAocmVzZXJ2YXRpb24pID0+IHtcbiAgbGV0IGNvdW50ZXI7XG4gIGlmIChyZXNlcnZhdGlvbi5sZW5ndGgpIHtcbiAgICBjb3VudGVyID0gcmVzZXJ2YXRpb24ubGVuZ3RoO1xuICB9IGVsc2Uge1xuICAgIGNvdW50ZXIgPSAwO1xuICB9XG4gIHJldHVybiBjb3VudGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzZXJ2YXRpb25Db3VudGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL3BvcHVwU3R5bGUuY3NzJztcbmltcG9ydCAnLi9jb21tZW50LmNzcyc7XG5pbXBvcnQgZGlzcGxheVJlc2VydmF0aW9ucyBmcm9tICcuL21vZHVsZXMvZGlzcGxheV9yZXNlcnZhdGlvbnMuanMnO1xuaW1wb3J0IGNvdW50ZXIgZnJvbSAnLi9tb2R1bGVzL2NvdW50ZXIuanMnO1xuaW1wb3J0IHsgYmFzZVVSTCwgbGlrZXNVcmwgfSBmcm9tICcuL21vZHVsZXMvYXBpcy5qcyc7XG5pbXBvcnQgZGlzcGxheUNvbW1lbnRzIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5Q29tbWVudHMuanMnO1xuXG5jb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSk7XG5jb25zdCBzZWFyY2hSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJlc3VsdCcpO1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpa2VzVXJsKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59O1xuXG5jb25zdCBhZGRMaWtlcyA9IGFzeW5jIChlKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdLmlkO1xuICBjb25zdCBmZXRjaExpa2VzID0gYXdhaXQgZmV0Y2gobGlrZXNVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBlbGVtZW50LFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IGhlYWRlcixcbiAgfSk7XG4gIHJldHVybiBmZXRjaExpa2VzO1xufTtcblxuY29uc3QgZ2VuZXJhdGVIdG1sID0gKHJlc3VsdHMpID0+IHtcbiAgcmVzdWx0cy5zbGljZSgzLCAxMikuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgZGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgIGRpdkl0ZW0uaW5uZXJIVE1MID0gYFxuICAgIDxpbWcgc3JjPVwiJHtyZXN1bHQuZm9vZC5pbWFnZX1cIiBhbHQ9XCIke3Jlc3VsdC5mb29kLmxhYmVsfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj4ke3Jlc3VsdC5mb29kLmxhYmVsfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPVwibGlrZXMtZGl2XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJpY29uXCIgdHlwZT1cImJ1dHRvblwiPiYjMTAwODQ7PC9idXR0b24+XG4gICAgICAgIDxwIGNsYXNzPVwibGlrZXNcIiBpZD1cIiR7cmVzdWx0LmZvb2QuZm9vZElkfVwiPjwvcD5MaWtlc1xuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIml0ZW0tZGF0YVwiPlxuICAgICAgICA8YSBjbGFzcz1cImNvbW1lbnRcIiBpZD0ke3Jlc3VsdC5mb29kLmZvb2RJZH0gaHJlZj1cIlwiPkNvbW1lbnQ8L2E+XG4gICAgICAgIDxhIGNsYXNzPVwicmVzZXJ2ZVwiIGlkPSR7cmVzdWx0LmZvb2QuZm9vZElkfSBocmVmPVwiXCI+UmVzZXJ2YXRpb248L2E+XG4gICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgc2VhcmNoUmVzdWx0LmFwcGVuZENoaWxkKGRpdkl0ZW0pO1xuICB9KTtcbiAgZ2V0TGlrZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IGxpa2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKykge1xuICAgICAgbGlrZXNbaV0udGV4dENvbnRlbnQgPSBgXG4gICAgICAgICR7cmVzcG9uc2VbaV0ubGlrZXN9XG4gICAgICBgO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbicpO1xuICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBhZGRMaWtlcyhlKTtcbiAgICAgIGNvbnN0IG51bU9mTGlrZXMgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdO1xuICAgICAgbnVtT2ZMaWtlcy50ZXh0Q29udGVudCA9ICtudW1PZkxpa2VzLnRleHRDb250ZW50ICsgMTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBkZXNwbGF5UmVzdWx0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhc2VVUkwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBnZW5lcmF0ZUh0bWwoZGF0YS5oaW50cyk7XG59O1xuXG5kZXNwbGF5UmVzdWx0KCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtcmVzdWx0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBkaXNwbGF5UmVzZXJ2YXRpb25zKGV2ZW50KTtcbiAgZGlzcGxheUNvbW1lbnRzKGV2ZW50KTtcbn0pO1xuXG5jb3VudGVyKCkudGhlbigoZGF0YSkgPT4ge1xuICBjb25zdCBjb3VudGVyID0gZGF0YS5oaW50cy5zbGljZSgzLCAxMikubGVuZ3RoO1xuICBjb25zdCBjb3VudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyJyk7XG4gIGNvdW50SGVhZGVyLnRleHRDb250ZW50ID0gYFxuICAgICR7Y291bnRlcn0gUGl6emVycyBhdmFpbGFibGVcbiAgYDtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==