(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'secutrixdapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _logincomp_logincomp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logincomp/logincomp.component */ "./src/app/logincomp/logincomp.component.ts");
/* harmony import */ var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userpage/userpage.component */ "./src/app/userpage/userpage.component.ts");
/* harmony import */ var _app_secutrix_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/secutrix.service */ "./src/app/secutrix.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _secutrix_gaurd_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./secutrix-gaurd.guard */ "./src/app/secutrix-gaurd.guard.ts");
/* harmony import */ var _logincheck_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logincheck.guard */ "./src/app/logincheck.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var Routes = [
    { path: 'login', component: _logincomp_logincomp_component__WEBPACK_IMPORTED_MODULE_5__["LogincompComponent"], canActivate: [_logincheck_guard__WEBPACK_IMPORTED_MODULE_10__["LogincheckGuard"]] },
    {
        path: '', component: _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_6__["UserpageComponent"], canActivate: [_secutrix_gaurd_guard__WEBPACK_IMPORTED_MODULE_9__["SecutrixGaurdGuard"]]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _logincomp_logincomp_component__WEBPACK_IMPORTED_MODULE_5__["LogincompComponent"],
                _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_6__["UserpageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(Routes)
            ],
            providers: [_app_secutrix_service__WEBPACK_IMPORTED_MODULE_7__["SecutrixService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/logincheck.guard.ts":
/*!*************************************!*\
  !*** ./src/app/logincheck.guard.ts ***!
  \*************************************/
/*! exports provided: LogincheckGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogincheckGuard", function() { return LogincheckGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogincheckGuard = /** @class */ (function () {
    function LogincheckGuard(router) {
        this.router = router;
    }
    LogincheckGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("accountName") == undefined && localStorage.getItem("privatekey") == undefined) {
            console.log("true");
            return true;
        }
        else {
            console.log("false");
            this.router.navigate(['']);
            return false;
        }
    };
    LogincheckGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogincheckGuard);
    return LogincheckGuard;
}());



/***/ }),

/***/ "./src/app/logincomp/logincomp.component.css":
/*!***************************************************!*\
  !*** ./src/app/logincomp/logincomp.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------------------------------------------------------\n * Theme Name: iofrm - theme\n * Theme URI: http://www.brandio.io/envato/iofrm\n * Author: Brandio\n * Author URI: http://www.brandio.io/\n * Copyright 2018 Brandio.\n -------------------------------------------------------------------*/\n/*------------------------------------------------------------------\n[Table of contents]\n\n1. General Styles.\n2. Responsive Styles.\n-------------------------------------------------------------------*/\n/* -----------------------------------\n    1 - General Styles\n------------------------------------*/\n#ig{\n\twidth: 50px;\n\theight: 50px;\n}\n.form-body {\n    background-color: #fff;\n}\n.website-logo {\n    display: inline-block;\n    top: 50px;\n    left: initial;\n    right: 50px;\n    bottom: initial;\n}\n.website-logo img {\n    width: 100px;\n}\n.website-logo .logo {\n    background-image: url(\"/src/assets/img/murmur.svg\");\n}\n.website-logo .logo img {\n    width: 100px;\n}\n.website-logo-inside img {\n    width: 100px;\n}\n.website-logo-inside .logo {\n    background-image: url(\"/src/assets/img/murmur.svg\");\n}\n.website-logo-inside .logo img {\n    width: 100px;\n}\n.img-holder {\n    width: 550px;\n    background-color: #FAFAFA;\n}\n.img-holder .info-holder h3 {\n    color: #000;\n}\n.img-holder .info-holder p {\n    color: #000;\n}\n.img-holder .bg {\n    opacity: 1;\n    background-image: none;\n}\n.form-holder {\n    margin-left: 550px;\n}\n.form-holder .form-content ::-webkit-input-placeholder {\n    color: #000000;\n}\n.form-holder .form-content :-moz-placeholder {\n    color: #000000;\n}\n.form-holder .form-content ::-moz-placeholder {\n    color: #000000;\n}\n.form-holder .form-content :-ms-input-placeholder {\n    color: #000000;\n}\n.form-control ::-webkit-input-placeholder {\n    color: #000000;\n}\n.form-control :-moz-placeholder {\n    color: #000000;\n}\n.form-control ::-moz-placeholder {\n    color: #000000;\n}\n.form-control :-ms-input-placeholder {\n    color: #000000;\n}\n.form-content {\n    background-color: #fff;\n}\n.form-content .form-group {\n    color: #000;\n}\n.form-content .form-items {\n    max-width: 340px;\n    text-align: left;\n}\n.form-content h3 {\n    color: #000;\n    text-align: left;\n}\n.form-content p {\n    color: #000;\n    text-align: left;\n}\n.form-content label {\n    color: #000;\n    text-align: left;\n}\n.form-content .page-links a {\n    color: #000;\n}\n.form-content .page-links a:after {\n    background-color: rgba(222, 222, 222, 0.7);\n}\n.form-content .page-links a.active:after {\n    background-color: #0092FE;\n}\n.form-content .page-links a:hover:after, .form-content .page-links a:focus:after {\n    background-color: #0092FE;\n}\n.form-content input, .form-content .dropdown-toggle.btn-default {\n    border: 1px solid rgba(0, 149, 255, 0);\n    background-color: #F7F7F7;\n    color: #000000;\n}\n.form-content input:hover, .form-content input:focus, .form-content .dropdown-toggle.btn-default:hover, .form-content .dropdown-toggle.btn-default:focus {\n    border: 1px solid #0093FF;\n    background-color: #fff;\n    color: #000000;\n}\n.form-content textarea {\n    background-color: #F7F7F7;\n    border: 1px solid rgba(0, 149, 255, 0);\n    color: #000000;\n}\n.form-content textarea:hover, .form-content textarea:focus {\n    border: 1px solid #0093FF;\n    background-color: #fff;\n    color: #000000;\n}\n.form-content input[type=\"checkbox\"]:not(:checked) + label, .form-content input[type=\"checkbox\"]:checked + label, .form-content input[type=\"radio\"]:not(:checked) + label, .form-content input[type=\"radio\"]:checked + label {\n    color: #000;\n}\n.form-content input[type=\"checkbox\"]:checked + label, .form-content input[type=\"radio\"]:checked + label {\n    color: #000;\n}\n.form-content input[type=\"checkbox\"]:checked + label:before, .form-content input[type=\"radio\"]:checked + label:before {\n    background: #000;\n    border: 0px solid #000;\n}\n.form-content input[type=\"checkbox\"]:not(:checked) + label:before, .form-content input[type=\"radio\"]:not(:checked) + label:before {\n    background: transparent;\n    border: 2px solid #000;\n}\n.form-content input[type=\"checkbox\"]:checked + label:after, .form-content input[type=\"checkbox\"]:not(:checked) + label:after {\n    color: #fff;\n}\n.form-content input[type=\"radio\"]:checked + label:after, .form-content input[type=\"radio\"]:not(:checked) + label:after {\n    background-color: #fff;\n}\n.form-content .custom-options input[type=\"checkbox\"]:not(:checked) + label, .form-content .custom-options input[type=\"checkbox\"]:checked + label, .form-content .custom-options input[type=\"radio\"]:not(:checked) + label, .form-content .custom-options input[type=\"radio\"]:checked + label {\n    color: #606060;\n    background-color: #F7F7F7;\n}\n.form-content .custom-options input[type=\"checkbox\"]:checked + label, .form-content .custom-options input[type=\"radio\"]:checked + label {\n    color: #fff;\n    background-color: #57D38C;\n    box-shadow: 0 3px 8px rgba(74, 230, 142, 0.35);\n}\n.form-content .form-button .ibtn {\n    background-color: #0093FF;\n    color: #fff;\n    box-shadow: 0 0 0 rgba(80, 182, 255, 0.31);\n}\n.form-content .form-button .ibtn:hover, .form-content .form-button .ibtn:focus {\n    box-shadow: 0 5px 6px rgba(80, 182, 255, 0.31);\n}\n.form-content .form-button a {\n    color: #000;\n}\n.form-content .other-links span {\n    color: #000;\n}\n.form-content .other-links a {\n    color: #000;\n}\n.form-content .form-sent .tick-holder .tick-icon {\n    background-color: rgba(233, 253, 214, 0);\n}\n.form-content .form-sent .tick-holder .tick-icon:before {\n    background-color: #8CCB57;\n}\n.form-content .form-sent .tick-holder .tick-icon:after {\n    background-color: #8CCB57;\n}\n.form-content .form-sent h3 {\n    color: #000;\n}\n.form-content .form-sent p {\n    color: #000;\n}\n.form-content .form-sent .info-holder {\n    color: #000;\n    border-top: 1px solid rgba(0, 0, 0, 0.5);\n}\n.form-content .form-sent .info-holder span {\n    color: #000;\n}\n.form-content .form-sent .info-holder a {\n    color: #000;\n}\n@-webkit-keyframes tick-anime3 {\n    0% {\n        background-color: rgba(233, 253, 214, 0);\n        -webkit-transform: rotate(35deg) scale(2);\n        transform: rotate(35deg) scale(2);\n    }\n\n    100% {\n        background-color: #E9FDD6;\n        -webkit-transform: rotate(45deg) scale(1);\n        transform: rotate(45deg) scale(1);\n    }\n}\n@keyframes tick-anime3 {\n    0% {\n        background-color: rgba(233, 253, 214, 0);\n        -webkit-transform: rotate(35deg) scale(2);\n        transform: rotate(35deg) scale(2);\n    }\n\n    100% {\n        background-color: #E9FDD6;\n        -webkit-transform: rotate(45deg) scale(1);\n        transform: rotate(45deg) scale(1);\n    }\n}\n.alert {\n    color: #000000;\n}\n.alert.alert-primary {\n    background-color: #e2f0ff;\n    border-color: #3a86d6;\n}\n.alert.alert-primary hr {\n    border-top-color: #3a86d6;\n}\n.alert.alert-secondary {\n    background-color: #f0f0f0;\n    border-color: #8e9396;\n}\n.alert.alert-secondary hr {\n    border-top-color: #8e9396;\n}\n.alert.alert-success {\n    background-color: #F7FFF0;\n    border-color: #8CCB57;\n}\n.alert.alert-success hr {\n    border-top-color: #8CCB57;\n}\n.alert.alert-danger {\n    background-color: #FFFAFA;\n    border-color: #F55050;\n}\n.alert.alert-danger hr {\n    border-top-color: #F55050;\n}\n.alert.alert-warning {\n    background-color: #fff8e1;\n    border-color: #f1cb4b;\n}\n.alert.alert-warning hr {\n    border-top-color: #f1cb4b;\n}\n.alert.alert-info {\n    background-color: #dcedf1;\n    border-color: #42bfdb;\n}\n.alert.alert-info hr {\n    border-top-color: #42bfdb;\n}\n.alert.alert-light {\n    background-color: #fefefe;\n    border-color: #a7a4a4;\n}\n.alert.alert-light hr {\n    border-top-color: #a7a4a4;\n}\n.alert.alert-dark {\n    background-color: #d6d8d9;\n    border-color: #525557;\n}\n.alert.alert-dark hr {\n    border-top-color: #525557;\n}\n.alert.with-icon.alert-primary:before {\n    color: #3a86d6;\n}\n.alert.with-icon.alert-secondary:before {\n    color: #8e9396;\n}\n.alert.with-icon.alert-success:before {\n    color: #8CCB57;\n}\n.alert.with-icon.alert-danger:before {\n    color: #F55050;\n}\n.alert.with-icon.alert-warning:before {\n    color: #f1cb4b;\n}\n.alert.with-icon.alert-info:before {\n    color: #42bfdb;\n}\n.alert.with-icon.alert-light:before {\n    color: #a7a4a4;\n}\n.alert.with-icon.alert-dark:before {\n    color: #525557;\n}\n.alert a.alert-link, .alert a {\n    color: #000000;\n}\n.alert .close {\n    color: #727272;\n}\n.alert .close span {\n    color: #727272;\n}\n.form-body.without-side .img-holder .info-holder img {\n    display: inline-block;\n}\n.form-body.without-side .form-content .page-links a:after {\n    background-color: rgba(222, 222, 222, 0.7);\n}\n.form-body.without-side .form-content .page-links a.active:after {\n    background-color: #0093FF;\n}\n.form-body.without-side .form-content .page-links a:hover:after, .form-body.without-side .form-content .page-links a:focus:after {\n    background-color: #0093FF;\n}\n.form-body.without-side .form-content .form-button .ibtn {\n    background-color: #0093FF;\n    color: #fff;\n    box-shadow: 0 0 0 rgba(80, 182, 255, 0.31);\n}\n.form-body.without-side .form-content .form-button .ibtn:hover, .form-body.without-side .form-content .form-button .ibtn:focus {\n    box-shadow: 0 5px 6px rgba(80, 182, 255, 0.31);\n}\n/* -----------------------------------\n    2 - Responsive Styles\n------------------------------------*/\n@media (max-width: 992px) {\n    .form-holder {\n        margin-left: 0;\n    }\n\n    .website-logo {\n        top: 50px;\n        left: 50px;\n        right: initial;\n        bottom: initial;\n    }\n\n    .website-logo .logo {\n        background-image: url(\"/src/assets/img/murmur.svg\");\n    }\n\n    .form-body.without-side .website-logo .logo {\n        background-image: url(\"/src/assets/img/murmur.svg\");\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5jb21wL2xvZ2luY29tcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7c0VBTXNFO0FBQ3RFOzs7OztxRUFLcUU7QUFDckU7O3NDQUVzQztBQUV0QztDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2I7QUFDRDtJQUNJLHVCQUF1QjtDQUMxQjtBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksYUFBYTtDQUNoQjtBQUVEO0lBQ0ksb0RBQW9EO0NBQ3ZEO0FBRUQ7SUFDSSxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxvREFBb0Q7Q0FDdkQ7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjtBQUVEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7QUFFRDtJQUNJLDJDQUEyQztDQUM5QztBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLHVDQUF1QztJQUN2QywwQkFBMEI7SUFDMUIsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsdUNBQXVDO0lBQ3ZDLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7Q0FDMUI7QUFFRDtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7Q0FDMUI7QUFFRDtJQUNJLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBRTFCLCtDQUErQztDQUNsRDtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFFWiwyQ0FBMkM7Q0FDOUM7QUFFRDtJQUVJLCtDQUErQztDQUNsRDtBQUVEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7QUFFRDtJQUNJLFlBQVk7Q0FDZjtBQUVEO0lBQ0kseUNBQXlDO0NBQzVDO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7QUFFRDtJQUNJLFlBQVk7SUFDWix5Q0FBeUM7Q0FDNUM7QUFFRDtJQUNJLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7SUFDSTtRQUNJLHlDQUF5QztRQUN6QywwQ0FBMEM7UUFHMUMsa0NBQWtDO0tBQ3JDOztJQUVEO1FBQ0ksMEJBQTBCO1FBQzFCLDBDQUEwQztRQUcxQyxrQ0FBa0M7S0FDckM7Q0FDSjtBQWhCRDtJQUNJO1FBQ0kseUNBQXlDO1FBQ3pDLDBDQUEwQztRQUcxQyxrQ0FBa0M7S0FDckM7O0lBRUQ7UUFDSSwwQkFBMEI7UUFDMUIsMENBQTBDO1FBRzFDLGtDQUFrQztLQUNyQztDQUNKO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSwyQ0FBMkM7Q0FDOUM7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUVaLDJDQUEyQztDQUM5QztBQUVEO0lBRUksK0NBQStDO0NBQ2xEO0FBRUQ7O3NDQUVzQztBQUN0QztJQUNJO1FBQ0ksZUFBZTtLQUNsQjs7SUFFRDtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsZUFBZTtRQUNmLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLG9EQUFvRDtLQUN2RDs7SUFFRDtRQUNJLG9EQUFvRDtLQUN2RDtDQUNKIiwiZmlsZSI6InNyYy9hcHAvbG9naW5jb21wL2xvZ2luY29tcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRoZW1lIE5hbWU6IGlvZnJtIC0gdGhlbWVcbiAqIFRoZW1lIFVSSTogaHR0cDovL3d3dy5icmFuZGlvLmlvL2VudmF0by9pb2ZybVxuICogQXV0aG9yOiBCcmFuZGlvXG4gKiBBdXRob3IgVVJJOiBodHRwOi8vd3d3LmJyYW5kaW8uaW8vXG4gKiBDb3B5cmlnaHQgMjAxOCBCcmFuZGlvLlxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbltUYWJsZSBvZiBjb250ZW50c11cblxuMS4gR2VuZXJhbCBTdHlsZXMuXG4yLiBSZXNwb25zaXZlIFN0eWxlcy5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAxIC0gR2VuZXJhbCBTdHlsZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiNpZ3tcblx0d2lkdGg6IDUwcHg7XG5cdGhlaWdodDogNTBweDtcbn1cbi5mb3JtLWJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi53ZWJzaXRlLWxvZ28ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogaW5pdGlhbDtcbiAgICByaWdodDogNTBweDtcbiAgICBib3R0b206IGluaXRpYWw7XG59XG5cbi53ZWJzaXRlLWxvZ28gaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi53ZWJzaXRlLWxvZ28gLmxvZ28ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zcmMvYXNzZXRzL2ltZy9tdXJtdXIuc3ZnXCIpO1xufVxuXG4ud2Vic2l0ZS1sb2dvIC5sb2dvIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4ud2Vic2l0ZS1sb2dvLWluc2lkZSBpbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLndlYnNpdGUtbG9nby1pbnNpZGUgLmxvZ28ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zcmMvYXNzZXRzL2ltZy9tdXJtdXIuc3ZnXCIpO1xufVxuXG4ud2Vic2l0ZS1sb2dvLWluc2lkZSAubG9nbyBpbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLmltZy1ob2xkZXIge1xuICAgIHdpZHRoOiA1NTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG4uaW1nLWhvbGRlciAuaW5mby1ob2xkZXIgaDMge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uaW1nLWhvbGRlciAuaW5mby1ob2xkZXIgcCB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5pbWctaG9sZGVyIC5iZyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4uZm9ybS1ob2xkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA1NTBweDtcbn1cblxuLmZvcm0taG9sZGVyIC5mb3JtLWNvbnRlbnQgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZvcm0taG9sZGVyIC5mb3JtLWNvbnRlbnQgOi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9ybS1ob2xkZXIgLmZvcm0tY29udGVudCA6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9ybS1ob2xkZXIgLmZvcm0tY29udGVudCA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZvcm0tY29udHJvbCA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9ybS1jb250cm9sIDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZvcm0tY29udHJvbCA6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9ybS1jb250cm9sIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZm9ybS1jb250ZW50IC5mb3JtLWdyb3VwIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmZvcm0tY29udGVudCAuZm9ybS1pdGVtcyB7XG4gICAgbWF4LXdpZHRoOiAzNDBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZm9ybS1jb250ZW50IGgzIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZm9ybS1jb250ZW50IHAge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5mb3JtLWNvbnRlbnQgbGFiZWwge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5mb3JtLWNvbnRlbnQgLnBhZ2UtbGlua3MgYSB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5mb3JtLWNvbnRlbnQgLnBhZ2UtbGlua3MgYTphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsIDIyMiwgMjIyLCAwLjcpO1xufVxuXG4uZm9ybS1jb250ZW50IC5wYWdlLWxpbmtzIGEuYWN0aXZlOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5MkZFO1xufVxuXG4uZm9ybS1jb250ZW50IC5wYWdlLWxpbmtzIGE6aG92ZXI6YWZ0ZXIsIC5mb3JtLWNvbnRlbnQgLnBhZ2UtbGlua3MgYTpmb2N1czphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTJGRTtcbn1cblxuLmZvcm0tY29udGVudCBpbnB1dCwgLmZvcm0tY29udGVudCAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1kZWZhdWx0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDE0OSwgMjU1LCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IGlucHV0OmhvdmVyLCAuZm9ybS1jb250ZW50IGlucHV0OmZvY3VzLCAuZm9ybS1jb250ZW50IC5kcm9wZG93bi10b2dnbGUuYnRuLWRlZmF1bHQ6aG92ZXIsIC5mb3JtLWNvbnRlbnQgLmRyb3Bkb3duLXRvZ2dsZS5idG4tZGVmYXVsdDpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOTNGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IHRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMTQ5LCAyNTUsIDApO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IHRleHRhcmVhOmhvdmVyLCAuZm9ybS1jb250ZW50IHRleHRhcmVhOmZvY3VzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5M0ZGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCwgLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsLCAuZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWwsIC5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCwgLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSwgLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlLCAuZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsIC5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciwgLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZm9ybS1jb250ZW50IC5jdXN0b20tb3B0aW9ucyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKSArIGxhYmVsLCAuZm9ybS1jb250ZW50IC5jdXN0b20tb3B0aW9ucyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsLCAuZm9ybS1jb250ZW50IC5jdXN0b20tb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsLCAuZm9ybS1jb250ZW50IC5jdXN0b20tb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcbiAgICBjb2xvcjogIzYwNjA2MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xufVxuXG4uZm9ybS1jb250ZW50IC5jdXN0b20tb3B0aW9ucyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsLCAuZm9ybS1jb250ZW50IC5jdXN0b20tb3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdEMzhDO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoNzQsIDIzMCwgMTQyLCAwLjM1KTtcbiAgICBib3gtc2hhZG93OiAwIDNweCA4cHggcmdiYSg3NCwgMjMwLCAxNDIsIDAuMzUpO1xufVxuXG4uZm9ybS1jb250ZW50IC5mb3JtLWJ1dHRvbiAuaWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTNGRjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIHJnYmEoODAsIDE4MiwgMjU1LCAwLjMxKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCByZ2JhKDgwLCAxODIsIDI1NSwgMC4zMSk7XG59XG5cbi5mb3JtLWNvbnRlbnQgLmZvcm0tYnV0dG9uIC5pYnRuOmhvdmVyLCAuZm9ybS1jb250ZW50IC5mb3JtLWJ1dHRvbiAuaWJ0bjpmb2N1cyB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCA2cHggcmdiYSg4MCwgMTgyLCAyNTUsIDAuMzEpO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDZweCByZ2JhKDgwLCAxODIsIDI1NSwgMC4zMSk7XG59XG5cbi5mb3JtLWNvbnRlbnQgLmZvcm0tYnV0dG9uIGEge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IC5vdGhlci1saW5rcyBzcGFuIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmZvcm0tY29udGVudCAub3RoZXItbGlua3MgYSB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5mb3JtLWNvbnRlbnQgLmZvcm0tc2VudCAudGljay1ob2xkZXIgLnRpY2staWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDI1MywgMjE0LCAwKTtcbn1cblxuLmZvcm0tY29udGVudCAuZm9ybS1zZW50IC50aWNrLWhvbGRlciAudGljay1pY29uOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhDQ0I1Nztcbn1cblxuLmZvcm0tY29udGVudCAuZm9ybS1zZW50IC50aWNrLWhvbGRlciAudGljay1pY29uOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOENDQjU3O1xufVxuXG4uZm9ybS1jb250ZW50IC5mb3JtLXNlbnQgaDMge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IC5mb3JtLXNlbnQgcCB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5mb3JtLWNvbnRlbnQgLmZvcm0tc2VudCAuaW5mby1ob2xkZXIge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5mb3JtLWNvbnRlbnQgLmZvcm0tc2VudCAuaW5mby1ob2xkZXIgc3BhbiB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5mb3JtLWNvbnRlbnQgLmZvcm0tc2VudCAuaW5mby1ob2xkZXIgYSB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbkBrZXlmcmFtZXMgdGljay1hbmltZTMge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDI1MywgMjE0LCAwKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNWRlZykgc2NhbGUoMik7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzVkZWcpIHNjYWxlKDIpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzVkZWcpIHNjYWxlKDIpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNWRlZykgc2NhbGUoMik7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUZERDY7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDEpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgxKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDEpO1xuICAgIH1cbn1cblxuLmFsZXJ0IHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmFsZXJ0LmFsZXJ0LXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmYwZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2E4NmQ2O1xufVxuXG4uYWxlcnQuYWxlcnQtcHJpbWFyeSBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzNhODZkNjtcbn1cblxuLmFsZXJ0LmFsZXJ0LXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBib3JkZXItY29sb3I6ICM4ZTkzOTY7XG59XG5cbi5hbGVydC5hbGVydC1zZWNvbmRhcnkgaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICM4ZTkzOTY7XG59XG5cbi5hbGVydC5hbGVydC1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGRkYwO1xuICAgIGJvcmRlci1jb2xvcjogIzhDQ0I1Nztcbn1cblxuLmFsZXJ0LmFsZXJ0LXN1Y2Nlc3MgaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICM4Q0NCNTc7XG59XG5cbi5hbGVydC5hbGVydC1kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZBRkE7XG4gICAgYm9yZGVyLWNvbG9yOiAjRjU1MDUwO1xufVxuXG4uYWxlcnQuYWxlcnQtZGFuZ2VyIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjRjU1MDUwO1xufVxuXG4uYWxlcnQuYWxlcnQtd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjhlMTtcbiAgICBib3JkZXItY29sb3I6ICNmMWNiNGI7XG59XG5cbi5hbGVydC5hbGVydC13YXJuaW5nIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZjFjYjRiO1xufVxuXG4uYWxlcnQuYWxlcnQtaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZWRmMTtcbiAgICBib3JkZXItY29sb3I6ICM0MmJmZGI7XG59XG5cbi5hbGVydC5hbGVydC1pbmZvIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNDJiZmRiO1xufVxuXG4uYWxlcnQuYWxlcnQtbGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjYTdhNGE0O1xufVxuXG4uYWxlcnQuYWxlcnQtbGlnaHQgaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNhN2E0YTQ7XG59XG5cbi5hbGVydC5hbGVydC1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkOGQ5O1xuICAgIGJvcmRlci1jb2xvcjogIzUyNTU1Nztcbn1cblxuLmFsZXJ0LmFsZXJ0LWRhcmsgaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICM1MjU1NTc7XG59XG5cbi5hbGVydC53aXRoLWljb24uYWxlcnQtcHJpbWFyeTpiZWZvcmUge1xuICAgIGNvbG9yOiAjM2E4NmQ2O1xufVxuXG4uYWxlcnQud2l0aC1pY29uLmFsZXJ0LXNlY29uZGFyeTpiZWZvcmUge1xuICAgIGNvbG9yOiAjOGU5Mzk2O1xufVxuXG4uYWxlcnQud2l0aC1pY29uLmFsZXJ0LXN1Y2Nlc3M6YmVmb3JlIHtcbiAgICBjb2xvcjogIzhDQ0I1Nztcbn1cblxuLmFsZXJ0LndpdGgtaWNvbi5hbGVydC1kYW5nZXI6YmVmb3JlIHtcbiAgICBjb2xvcjogI0Y1NTA1MDtcbn1cblxuLmFsZXJ0LndpdGgtaWNvbi5hbGVydC13YXJuaW5nOmJlZm9yZSB7XG4gICAgY29sb3I6ICNmMWNiNGI7XG59XG5cbi5hbGVydC53aXRoLWljb24uYWxlcnQtaW5mbzpiZWZvcmUge1xuICAgIGNvbG9yOiAjNDJiZmRiO1xufVxuXG4uYWxlcnQud2l0aC1pY29uLmFsZXJ0LWxpZ2h0OmJlZm9yZSB7XG4gICAgY29sb3I6ICNhN2E0YTQ7XG59XG5cbi5hbGVydC53aXRoLWljb24uYWxlcnQtZGFyazpiZWZvcmUge1xuICAgIGNvbG9yOiAjNTI1NTU3O1xufVxuXG4uYWxlcnQgYS5hbGVydC1saW5rLCAuYWxlcnQgYSB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5hbGVydCAuY2xvc2Uge1xuICAgIGNvbG9yOiAjNzI3MjcyO1xufVxuXG4uYWxlcnQgLmNsb3NlIHNwYW4ge1xuICAgIGNvbG9yOiAjNzI3MjcyO1xufVxuXG4uZm9ybS1ib2R5LndpdGhvdXQtc2lkZSAuaW1nLWhvbGRlciAuaW5mby1ob2xkZXIgaW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mb3JtLWJvZHkud2l0aG91dC1zaWRlIC5mb3JtLWNvbnRlbnQgLnBhZ2UtbGlua3MgYTphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsIDIyMiwgMjIyLCAwLjcpO1xufVxuXG4uZm9ybS1ib2R5LndpdGhvdXQtc2lkZSAuZm9ybS1jb250ZW50IC5wYWdlLWxpbmtzIGEuYWN0aXZlOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5M0ZGO1xufVxuXG4uZm9ybS1ib2R5LndpdGhvdXQtc2lkZSAuZm9ybS1jb250ZW50IC5wYWdlLWxpbmtzIGE6aG92ZXI6YWZ0ZXIsIC5mb3JtLWJvZHkud2l0aG91dC1zaWRlIC5mb3JtLWNvbnRlbnQgLnBhZ2UtbGlua3MgYTpmb2N1czphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTNGRjtcbn1cblxuLmZvcm0tYm9keS53aXRob3V0LXNpZGUgLmZvcm0tY29udGVudCAuZm9ybS1idXR0b24gLmlidG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDkzRkY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCByZ2JhKDgwLCAxODIsIDI1NSwgMC4zMSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgcmdiYSg4MCwgMTgyLCAyNTUsIDAuMzEpO1xufVxuXG4uZm9ybS1ib2R5LndpdGhvdXQtc2lkZSAuZm9ybS1jb250ZW50IC5mb3JtLWJ1dHRvbiAuaWJ0bjpob3ZlciwgLmZvcm0tYm9keS53aXRob3V0LXNpZGUgLmZvcm0tY29udGVudCAuZm9ybS1idXR0b24gLmlidG46Zm9jdXMge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggNnB4IHJnYmEoODAsIDE4MiwgMjU1LCAwLjMxKTtcbiAgICBib3gtc2hhZG93OiAwIDVweCA2cHggcmdiYSg4MCwgMTgyLCAyNTUsIDAuMzEpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIDIgLSBSZXNwb25zaXZlIFN0eWxlc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5mb3JtLWhvbGRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC53ZWJzaXRlLWxvZ28ge1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgIHJpZ2h0OiBpbml0aWFsO1xuICAgICAgICBib3R0b206IGluaXRpYWw7XG4gICAgfVxuXG4gICAgLndlYnNpdGUtbG9nbyAubG9nbyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zcmMvYXNzZXRzL2ltZy9tdXJtdXIuc3ZnXCIpO1xuICAgIH1cblxuICAgIC5mb3JtLWJvZHkud2l0aG91dC1zaWRlIC53ZWJzaXRlLWxvZ28gLmxvZ28ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3JjL2Fzc2V0cy9pbWcvbXVybXVyLnN2Z1wiKTtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/logincomp/logincomp.component.html":
/*!****************************************************!*\
  !*** ./src/app/logincomp/logincomp.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-body\">\n    <div class=\"website-logo\">\n        <a href=\"#\">\n            <div class=\"logo\">\n                 <img  src=\"https://img.icons8.com/cotton/64/000000/secured-file.png\" id=\"ig\"> \n               \n            </div>\n        </a>\n    </div>\n    <div class=\"row\">\n        <div class=\"img-holder\">\n            <div class=\"bg\"></div>\n            <div class=\"info-holder\">\n                <img src=\"assets/img/semo.jpg\" >\n            </div>\n        </div>\n        <div class=\"form-holder\">\n            <div class=\"form-content\">\n                <div class=\"form-items\">\n                    <h3>Get more Security of your digital assets.</h3>\n                    <p>Access to the most powerfull tool & keep your assets securely in anywhere in the world.</p>\n                    <div class=\"page-links\">\n                        <a  class=\"active\">Login</a>\n                    </div>\n                    <form>\n                        <input class=\"form-control\" type=\"text\" name=\"username\"  #a placeholder=\"username\" required>\n                        <input class=\"form-control\" type=\"password\" name=\"password\" #b placeholder=\"privatekey\" required>\n                        <div class=\"form-button\">\n                            <button id=\"submit\" type=\"button\" (click)=\"loginCheck(a.value,b.value)\" class=\"ibtn\">Login</button>\n                        </div>\n                    </form>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/logincomp/logincomp.component.ts":
/*!**************************************************!*\
  !*** ./src/app/logincomp/logincomp.component.ts ***!
  \**************************************************/
/*! exports provided: LogincompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogincompComponent", function() { return LogincompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _secutrix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../secutrix.service */ "./src/app/secutrix.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogincompComponent = /** @class */ (function () {
    function LogincompComponent(sec, route) {
        var _this = this;
        this.sec = sec;
        this.route = route;
        this.loginCheck = function (a, b) {
            var username = a;
            var privatekey = b;
            console.log(b);
            //console.log("username",username)
            //console.log("privatekey",privatekey)
            _this.sec.isValid(privatekey).then(function (c) {
                //console.log("valid",c);
                if (c == true) {
                    console.log("pri-true");
                    _this.sec.AccToPub(username).then(function (name) {
                        var publikey = name;
                        _this.sec.PriToPub(privatekey).then(function (pub) {
                            if (publikey == pub) {
                                console.log("samepub");
                                _this.sec.Login(username, privatekey).then(function (c) {
                                    if (c == true) {
                                        _this.route.navigate(['']);
                                    }
                                    else {
                                        console.log("Not worked");
                                    }
                                });
                            }
                            else if (publikey !== pub) {
                                console.log("Please Check your key or accountname");
                            }
                        });
                    });
                }
            });
        };
    }
    LogincompComponent.prototype.ngOnInit = function () {
    };
    LogincompComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logincomp',
            template: __webpack_require__(/*! ./logincomp.component.html */ "./src/app/logincomp/logincomp.component.html"),
            styles: [__webpack_require__(/*! ./logincomp.component.css */ "./src/app/logincomp/logincomp.component.css")]
        }),
        __metadata("design:paramtypes", [_secutrix_service__WEBPACK_IMPORTED_MODULE_1__["SecutrixService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogincompComponent);
    return LogincompComponent;
}());



/***/ }),

/***/ "./src/app/secutrix-gaurd.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/secutrix-gaurd.guard.ts ***!
  \*****************************************/
/*! exports provided: SecutrixGaurdGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecutrixGaurdGuard", function() { return SecutrixGaurdGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecutrixGaurdGuard = /** @class */ (function () {
    function SecutrixGaurdGuard(router) {
        this.router = router;
    }
    SecutrixGaurdGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("accountName") != undefined && localStorage.getItem("privatekey") != undefined) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    SecutrixGaurdGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SecutrixGaurdGuard);
    return SecutrixGaurdGuard;
}());



/***/ }),

/***/ "./src/app/secutrix.service.ts":
/*!*************************************!*\
  !*** ./src/app/secutrix.service.ts ***!
  \*************************************/
/*! exports provided: SecutrixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecutrixService", function() { return SecutrixService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! eosjs */ "./node_modules/eosjs/lib/index.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(eosjs__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SecutrixService = /** @class */ (function () {
    function SecutrixService(http, spin, router, location) {
        this.http = http;
        this.spin = spin;
        this.router = router;
        this.location = location;
        this.config = {};
        this.globalset = [];
        this.config = {
            chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
            httpEndpoint: 'http://jungle2.cryptolions.io:80',
            broadcast: true,
            debug: true,
            sign: true
        };
        this.eos = eosjs__WEBPACK_IMPORTED_MODULE_5__(this.config);
    }
    //check the key is valid or not
    SecutrixService.prototype.isValid = function (privKey) {
        return __awaiter(this, void 0, void 0, function () {
            var ecc;
            return __generator(this, function (_a) {
                ecc = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (ecc.isValidPrivate(privKey))
                            resolve(true);
                        else
                            resolve(false);
                    })];
            });
        });
    };
    //change the privae key public key
    SecutrixService.prototype.PriToPub = function (privKey) {
        return __awaiter(this, void 0, void 0, function () {
            var ecc;
            return __generator(this, function (_a) {
                ecc = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var pubKey = ecc.privateToPublic(privKey);
                        resolve(pubKey);
                    })];
            });
        });
    };
    //change the account to public key
    SecutrixService.prototype.AccToPub = function (acc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.eos.getAccount(acc).then(function (res) {
                            resolve(res.permissions[0].required_auth.keys[0].key);
                        });
                    })];
            });
        });
    };
    SecutrixService.prototype.Login = function (acc, prikey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        localStorage.setItem("accountName", acc);
                        localStorage.setItem("privatekey", prikey);
                        if (localStorage.getItem("accountName") == acc) {
                            if (localStorage.getItem("privatekey") == prikey) {
                                resolve(true);
                            }
                            else if (localStorage.getItem("privatekey") !== prikey) {
                                resolve(false);
                            }
                            else {
                                resolve(false);
                            }
                        }
                    })];
            });
        });
    };
    SecutrixService.prototype.SetConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var config = {
                            chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
                            keyProvider: localStorage.getItem("privatekey"),
                            httpEndpoint: 'http://jungle2.cryptolions.io:80',
                            expireInSeconds: 60,
                            broadcast: true,
                            verbose: false,
                            sign: true
                        };
                        var eos = eosjs__WEBPACK_IMPORTED_MODULE_5__(config);
                        resolve(eos);
                    })];
            });
        });
    };
    SecutrixService.prototype.GetUsername = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        resolve(localStorage.getItem("accountName"));
                    })];
            });
        });
    };
    SecutrixService.prototype.GetPrivateKey = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        resolve(localStorage.getItem("privatekey"));
                    })];
            });
        });
    };
    SecutrixService.prototype.UploadFile = function (certname, des, hash) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var accname = localStorage.getItem("accountName");
                        _this.SetConfig().then(function (c) {
                            c.transaction("secutrixdapp", function (da) {
                                da.uploader(accname, certname, des, hash, { authorization: [accname] });
                            }).then(function (cd) {
                                resolve(cd);
                            });
                        });
                    })];
            });
        });
    };
    SecutrixService.prototype.MessageEncrpyter = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var ecc = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc;
                        _this.PriToPub(localStorage.getItem("privatekey")).then(function (pri) {
                            var encrypted_message = ecc.Aes.encrypt(localStorage.getItem("privatekey"), pri, message);
                            encrypted_message.nonce = encrypted_message.nonce.toString();
                            encrypted_message.message = encrypted_message.message.toString("binary");
                            encrypted_message = JSON.stringify(encrypted_message);
                            resolve(encrypted_message);
                        });
                    })];
            });
        });
    };
    //ipfshashdecryptor
    SecutrixService.prototype.MessageDecryptor = function (encrymess) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var ecc = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc;
                        _this.PriToPub(localStorage.getItem("privatekey")).then(function (pri) {
                            var encrypted_message = JSON.parse(encrymess);
                            var decrypted_message = ecc.Aes.decrypt(localStorage.getItem("privatekey"), pri, encrypted_message.nonce, encrypted_message.message, encrypted_message.checksum);
                            var dechash = decrypted_message.toString();
                            resolve(dechash);
                        });
                    })];
            });
        });
    };
    //Get the user Details from DB
    SecutrixService.prototype.GetDataFromDB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var from = localStorage.getItem("accountName");
                        _this.http.get('https://secutrix.herokuapp.com/file/getAlldetail/?from=' + from).subscribe(function (c) {
                            // console.log(Object.values(c).length);
                            console.log(c);
                            var gethash = [];
                            var sum = 0;
                            for (var i = 0; i < Object.values(c).length; i++) {
                                console.log(new Date(c[i].createdAt));
                                var obj = {
                                    "blockno": c[i].blockno,
                                    "certname": c[i].certname,
                                    "from": c[i].from,
                                    "ipfs": c[i].ipfshash,
                                    "time": new Date(c[i].createdAt),
                                    "transid": c[i].transid,
                                    "openstatus": false,
                                    "imagestring": "",
                                    "description": c[i].description,
                                    "base64String": ""
                                };
                                gethash.push(obj);
                                sum = sum + 1;
                            }
                            if (sum == Object.values(c).length) {
                                setTimeout(function () {
                                    _this.globalset = gethash;
                                    resolve(_this.globalset);
                                }, 2000);
                            }
                        });
                    })];
            });
        });
    };
    SecutrixService.prototype.GetBase64Decryptor = function (mess, pubKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var ecc = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc;
                        var encrypted_message = JSON.parse(mess);
                        var decrypted_message = ecc.Aes.decrypt(localStorage.getItem("privatekey"), pubKey, encrypted_message.nonce, encrypted_message.message, encrypted_message.checksum);
                        var dechash = decrypted_message.toString();
                        resolve(dechash);
                    })];
            });
        });
    };
    SecutrixService.prototype.GetBlocDatas = function (transid, blockno) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.SetConfig().then(function (c) {
                            c.getTransaction(transid, blockno, function (err, data) {
                                if (err)
                                    console.log(err);
                                resolve(data);
                            });
                        });
                    })];
            });
        });
    };
    SecutrixService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], SecutrixService);
    return SecutrixService;
}());



/***/ }),

/***/ "./src/app/userpage/userpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/userpage/userpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.item{\n\n        font-weight: 700;\n        font-size: 20px;\n        box-shadow: 2px 1px black,0px 0px black;\n        align-content: center;\n}\n.loginBox{\n\t\n\ttext-align: center;\n}\n.user\n{\n    padding: 20px;\n\twidth: 200px;\n\theight: 200px;\n\tborder-radius: 60%;\n\toverflow: hidden;\n\ttop: calc(-100px/2);\n\tleft: calc(50% - 50px);\n}\n.fileupload{\n\n    font-weight: 200;\n    font-size: 15px;\n}\n.card1{\n\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n}\n.card2{\n\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    margin-top: 20px; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBhZ2UvdXNlcnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOztRQUVRLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsd0NBQXdDO1FBQ3hDLHNCQUFzQjtDQUM3QjtBQUNEOztDQUVDLG1CQUFtQjtDQUNuQjtBQUVEOztJQUVJLGNBQWM7Q0FDakIsYUFBYTtDQUNiLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQix1QkFBdUI7Q0FDdkI7QUFFRDs7SUFFSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25CO0FBRUQ7O0lBRUksd0NBQXdDO0lBQ3hDLGlCQUFpQjtDQUNwQjtBQUVEOztJQUVJLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdXNlcnBhZ2UvdXNlcnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uaXRlbXtcblxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggYmxhY2ssMHB4IDBweCBibGFjaztcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLmxvZ2luQm94e1xuXHRcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXNlclxue1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cdHdpZHRoOiAyMDBweDtcblx0aGVpZ2h0OiAyMDBweDtcblx0Ym9yZGVyLXJhZGl1czogNjAlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0b3A6IGNhbGMoLTEwMHB4LzIpO1xuXHRsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xufVxuXG4uZmlsZXVwbG9hZHtcblxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY2FyZDF7XG5cbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmNhcmQye1xuXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgXG59Il19 */"

/***/ }),

/***/ "./src/app/userpage/userpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/userpage/userpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">SecutrixDapp</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n          \n                    \n           \n        \n      </ul>\n      \n      <button style=\"float: right;\" class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"CreateUpload()\">Upload</button>\n    </div>\n  </nav>\n\n\n  <div class=\"grid\">\n      <div class=\"item item-1\">\n          <div class=\"loginBox\">\n              <h1>Profile</h1>\n              <img src=\"./assets/img/bgimg.jpeg\" class=\"user\">\n              <form>\n                  <p>AccountName</p>\n                  <label class=\"acc_name\">{{username}}</label>\n             </form> \n             <hr/>\n          </div>\n\n            <div class=\"logoutbut\" style=\"align-content: center;align-items: center; text-align: center;\">\n                    <button  type=\"button\" class=\"btn btn-primary\" (click)=\"TeraLogout()\">Logout</button>\n            </div>\n\n      </div>\n      <div class=\"item item-2\"style=\"padding:10px;\" >\n\n      \n        <div *ngFor=\"let sec of initial_cert; let i = index\">\n          <div class=\"card card1\" style=\"margin-top: 7px;\">\n             \n            <div class=\"card\">\n                <div class=\"card-header\">\n                        <div>\n                               certname: {{sec.certname}}\n                                <div style=\"float:right;align-content: center;text-align: center;\">\n                                        createdTime: {{sec.time|date :'dd-MM-yyyy'\t}} | {{sec.time|date:'shortTime'}}  \n                                </div>\n                        </div>\n                </div>\n                <div class=\"card-body\">\n                        <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\"> <h5 class=\"card-title\"> Description</h5></li>\n                                <li class=\"list-group-item\"> <p class=\"card-text\">{{sec.description}}</p></li>\n\n                        </ul>\n\n                        <a  (click)=\"checks(i,sec.ipfs,sec.certname)\" style=\"margin-top:10px;\" class=\"btn btn-primary\">Display Cert</a>\n                 \n\n                  <div>\n                 \n                        <div style=\"float:right;align-content: center;text-align: center;\">\n                  <label *ngIf = \"sec.openstatus\">\n                        <a><i class=\"material-icons mt-3 cursor\" (click)=\"certdisplayoff(i)\" style=\"color: #a09fed;\">clear</i></a>\n                    </label>\n                        </div>\n                </div>\n                  <img class=\"card-img-top\" src=\"{{sec.imagestring}}\"  alt=\"Card image cap\" *ngIf=\"sec.openstatus\" style=\"width: 500px;align-items: center;margin-left: 150px;margin:5% 28%\" >\n\n                    <div style=\"text-align:center;align-items: center;\">\n                    \n                        <a  id=\"atname\" href=\"{{sec.imagestring}}\" download=\"{{sec.certname}}\"><i class=\"material-icons\"  *ngIf=\"sec.openstatus\">cloud_download</i></a>\n                    </div>\n                    </div>\n              </div>\n          </div>\n          \n          <br/>\n        </div>\n    </div>\n\n    <button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Open Modal</button>\n\n\n    <!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\"   tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" #closeBtn>\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n        <div class=\"modal-body\" style=\"font-size: 20px;margin: auto;\">\n            \n\n                      <div class=\"card\" >\n                            <div class=\"card-header\">\n\n                                    <h5 class=\"card-title\"> Select Record</h5>\n                            </div>\n                            \n                            <div class=\"card-body\">\n                             \n                                    <a><img style=\"width: 300px;height:280px; border-radius: 40px;padding: 10px 16px;\" alt=\"\" class=\"mb-4\" src={{url}}></a>\n                            </div>\n                            <ul class=\"list-group list-group-flush\">\n                              <li class=\"list-group-item\"><input type=\"text\" style=\"width:400px;\" id=\"filenames\" placeholder=\"certname\" (input)=\"somevalue($event.target.value);\"></li>\n                              <li class=\"list-group-item\" ><input style=\"width:400px;\" type=\"text\" id=\"filenames\" placeholder=\"description\" (input)=\"somevalues($event.target.value);\"></li>\n                              <li class=\"list-group-item\"><label for=\"fileToUpload\">\n                                    <a><i class=\"material-icons mt-3 cursor\" style=\"color: #a09fed;\">image</i></a>\n                            </label>\n                            <a style=\"padding: 15px\">&nbsp;{{fileName}}&nbsp;</a>\n                            <input id=\"fileToUpload\" type=\"file\" (change)=\"onFileChanged($event)\" accept=\"image/*\" style=\"display:none;\">\n                            <label *ngIf = \"File_select\">\n                                <a><i class=\"material-icons mt-3 cursor\" (click)=\"file_clear()\" style=\"color: #a09fed;\">clear</i></a>\n                            </label></li>\n                            <li class=\"list-group-item\" style=\"margin: auto;align-items: center;text-align: center;\"> <button  type=\"button\" class=\"btn btn-success\" (click)=\"UploderPost()\">Upload</button></li>\n                            </ul>\n                    \n                          </div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"modal-footer\" style=\"margin: auto;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" id=\"modelclose\" data-dismiss=\"modal\">Close</button>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>  "

/***/ }),

/***/ "./src/app/userpage/userpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/userpage/userpage.component.ts ***!
  \************************************************/
/*! exports provided: UserpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpageComponent", function() { return UserpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _secutrix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../secutrix.service */ "./src/app/secutrix.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserpageComponent = /** @class */ (function () {
    function UserpageComponent(sec, router, spin, http) {
        var _this = this;
        this.sec = sec;
        this.router = router;
        this.spin = spin;
        this.http = http;
        this.initial_cert = [];
        this.check = false;
        this.imagestatus = false;
        this.myFile = false;
        this.readerFile = function (eventF) {
            var reader = new FileReader();
            reader.onload = _this._handleReaderLoaded.bind(_this);
            reader.readAsBinaryString(_this.selectedFile);
        };
        this.somevalue = function (text) {
            _this.certnameBase = text;
        };
        this.somevalues = function (text) {
            _this.description = text;
        };
        this.UploderPost = function () {
            if (_this.File_select == true && _this.base64textString !== "") {
                _this.sec.MessageEncrpyter(_this.base64textString).then(function (encrypthash) {
                    var stringer = JSON.stringify(encrypthash);
                    var data = new FormData();
                    data.append('string', stringer);
                    _this.http.post("https://ipfs.infura.io:5001/api/v0/add?stream-channels=true", data).subscribe(function (r) {
                        console.log(r['Hash']);
                        if (_this.certnameBase !== "" && _this.description !== "") {
                            var cname = _this.certnameBase;
                            var ipfshash = r['Hash'];
                            var descript = _this.description;
                            _this.sec.UploadFile(cname, descript, ipfshash).then(function (transd) {
                                var obj = {
                                    "blockNo": transd.processed.block_num,
                                    "console": (transd.processed.action_traces[0].console).split(";;"),
                                    "transid": transd.transaction_id,
                                    "executor": transd.processed.action_traces[0].act.data.owner
                                };
                                _this.http.post("https://secutrix.herokuapp.com/file/postblockD/", obj).subscribe(function (r) {
                                    if (r == "success") {
                                        _this.url = "";
                                        _this.certnameBase = "";
                                        _this.fileName = "";
                                        _this.description = "";
                                        _this.file_clear();
                                        document.getElementById("modelclose").click();
                                        _this.sec.GetDataFromDB().then(function (c) {
                                            if (_this.initial_cert.length != Object.values(c).length) {
                                                for (var i = _this.initial_cert.length; i < Object.values(c).length; i++) {
                                                    _this.initial_cert[i] = c[i];
                                                }
                                            }
                                        });
                                    }
                                });
                            });
                        }
                    });
                });
            }
        };
        this.GetFormData = function () {
            _this.sec.GetDataFromDB().then(function (c) {
                _this.initial_cert = c;
                console.log(c);
            });
        };
        this.checks = function (id, ipfshash, certName) {
            _this.http.get("http://ipfs.io/ipfs/" + _this.initial_cert[id].ipfs).subscribe(function (r) {
                _this.sec.MessageDecryptor(r).then(function (decryptbase64) {
                    console.log(decryptbase64);
                    _this.initial_cert[id].imagestring = "data:image/png;base64," + decryptbase64;
                    _this.initial_cert[id].openstatus = true;
                });
            });
        };
        this.certdisplayoff = function (id) {
            _this.initial_cert[id].openstatus = false;
            _this.initial_cert[id].imagestring = "";
        };
        this.CreateUpload = function () {
            document.getElementById("openModalButton").click();
        };
        this.downloadImage = function (id) {
            console.log(_this.initial_cert[id].imagestring);
        };
        this.TeraLogout = function () {
            localStorage.clear();
            _this.router.navigate(['login']);
        };
        this.GetFormData();
    }
    UserpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sec.GetUsername().then(function (cname) {
            if (cname !== 'undefined') {
                _this.username = cname;
            }
        });
    };
    UserpageComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        this.selectedFile = {};
        this.selectedFile = event.target.files[0];
        this.File_select = true;
        this.fileName = this.selectedFile['name'];
        if (this.fileName.length > 35) {
            this.fileName = this.fileName.slice(0, 30) + '.....' + this.fileName.slice(this.fileName.length - 10, this.fileName.length);
        }
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.url = event.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
        this.readerFile(event);
    };
    UserpageComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
        console.log(this.base64textString);
    };
    UserpageComponent.prototype.file_clear = function () {
        this.selectedFile = {};
        this.File_select = false;
        this.url = "";
        this.fileName = "";
        console.log("Cleared");
        this.base64textString = "";
    };
    UserpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userpage',
            template: __webpack_require__(/*! ./userpage.component.html */ "./src/app/userpage/userpage.component.html"),
            styles: [__webpack_require__(/*! ./userpage.component.css */ "./src/app/userpage/userpage.component.css"), __webpack_require__(/*! ./userpage.style.css */ "./src/app/userpage/userpage.style.css")]
        }),
        __metadata("design:paramtypes", [_secutrix_service__WEBPACK_IMPORTED_MODULE_1__["SecutrixService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserpageComponent);
    return UserpageComponent;
}());



/***/ }),

/***/ "./src/app/userpage/userpage.style.css":
/*!*********************************************!*\
  !*** ./src/app/userpage/userpage.style.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid{\n\n    display: grid;\n    grid-template-columns: 400px 1fr;\n    height: 920px;\n}\n\n.item-1{\n\n    background: gray;\n    color: white;\n}\n\n.item-2{\n\n    overflow: scroll;\n    align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBhZ2UvdXNlcnBhZ2Uuc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsY0FBYztDQUNqQjs7QUFFRDs7SUFFSSxpQkFBaUI7SUFDakIsYUFBYTtDQUNoQjs7QUFDRDs7SUFFSSxpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdXNlcnBhZ2UvdXNlcnBhZ2Uuc3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWR7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAwcHggMWZyO1xuICAgIGhlaWdodDogOTIwcHg7XG59XG5cbi5pdGVtLTF7XG5cbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5pdGVtLTJ7XG5cbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chainflux/BALAVIGNESHDOSTRIX/CertAuthFy/secutrixdapp/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map