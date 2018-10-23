(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n    font-family: AvenirNext;\n    src: url('AvenirNext-Regular.ttf');\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lottie_angular2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-angular2 */ "./node_modules/lottie-angular2/dist/esm/src/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/routes */ "./src/app/components/routes.ts");
/* harmony import */ var _components_hand_button_hand_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hand-button/hand-button.component */ "./src/app/components/hand-button/hand-button.component.ts");
/* harmony import */ var _components_spaceship_spaceship_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/spaceship/spaceship.component */ "./src/app/components/spaceship/spaceship.component.ts");
/* harmony import */ var _components_boarding_boarding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/boarding/boarding.component */ "./src/app/components/boarding/boarding.component.ts");
/* harmony import */ var _components_takeoff_takeoff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/takeoff/takeoff.component */ "./src/app/components/takeoff/takeoff.component.ts");
/* harmony import */ var _components_jeep_jeep_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/jeep/jeep.component */ "./src/app/components/jeep/jeep.component.ts");
/* harmony import */ var _components_profs_profs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profs/profs.component */ "./src/app/components/profs/profs.component.ts");
/* harmony import */ var _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/splash/splash.component */ "./src/app/components/splash/splash.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_crash_crash_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/crash/crash.component */ "./src/app/components/crash/crash.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["LinkedInLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["LinkedInLoginProvider"]("LinkedIn-client-Id", false, 'en_US')
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_hand_button_hand_button_component__WEBPACK_IMPORTED_MODULE_7__["HandButtonComponent"],
                _components_spaceship_spaceship_component__WEBPACK_IMPORTED_MODULE_8__["SpaceshipComponent"],
                _components_boarding_boarding_component__WEBPACK_IMPORTED_MODULE_9__["BoardingComponent"],
                _components_takeoff_takeoff_component__WEBPACK_IMPORTED_MODULE_10__["TakeoffComponent"],
                _components_jeep_jeep_component__WEBPACK_IMPORTED_MODULE_11__["JeepComponent"],
                _components_profs_profs_component__WEBPACK_IMPORTED_MODULE_12__["ProfsComponent"],
                _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_13__["SplashComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
                _components_crash_crash_component__WEBPACK_IMPORTED_MODULE_18__["CrashComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                lottie_angular2__WEBPACK_IMPORTED_MODULE_2__["LottieAnimationViewModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_components_routes__WEBPACK_IMPORTED_MODULE_6__["routes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_16__["HttpModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["SocialLoginModule"]
            ],
            providers: [
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  background-color: #f4f7fc;\n}\n\n.row {\n  display: flex;\n  justify-content: space-around;\n  padding-bottom: 1%;\n}\n\nh1 {\n  width: 100%;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 14%;\n  background-color: #ffffff;\n  padding: 2%;\n  border-radius: 3px;\n  box-shadow: 0 2px 6px 0 rgba(47, 83, 151, 0.1);\n}\n\n.linkedin {\n  color: #ffffff;\n  background-color: #0077b5;\n  opacity: 1;\n  border-radius: 5.1px;\n}\n\n.github {\n  color: #ffffff;\n  background-color: #24292e;\n  opacity: 1;\n  border-radius: 5.1px;\n}\n\nimg {\n  width: 100px;\n  height: 100px;\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nh1 {\n  padding-bottom: 10px;\n}\n\n.inline {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\np {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\nbutton {\n  height: 100%;\n}\n\n@media (min-width: 681px) and (max-width: 900px) {\n  .container {\n    height: 100%;\n    flex-flow: column;\n    width: 100%;\n    background-color: #f4f7fc;\n  }\n\n  .row {\n    display: flex;\n    justify-content: space-around;\n    padding-bottom: 1%;\n  }\n  .card {\n    display: flex;\n    justify-content: space-around;\n    width: 15%;\n    background-color: #ffffff;\n    padding: 2%;\n    border-radius: 3px;\n    box-shadow: 0 2px 6px 0 rgba(47, 83, 151, 0.1);\n  }\n  p {\n    font-family: AvenirNext;\n    font-size: 14px !important;\n  }\n  button {\n    margin-top: 0;\n    width: 100%;\n  }\n}\n\n@media (max-width: 680px) {\n  .container {\n    display: flex;\n    padding-left: 0;\n    width: 100% !important;\n    height: 100%;\n    flex-flow: row wrap;\n    zoom: 90%;\n    justify-content: center;\n    align-items: center;\n  }\n  .row {\n    display: flex;\n    justify-content: space-around;\n    padding-bottom: 1%;\n    flex-wrap: wrap;\n  }\n\n  .card {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    width: 70%;\n    background-color: #ffffff;\n    padding: 2%;\n    border-radius: 3px;\n    box-shadow: 0 2px 6px 0 rgba(47, 83, 151, 0.1);\n    margin-bottom: 2%;\n  }\n\n  h1 {\n    text-align: center;\n  }\n\n  button {\n    margin-top: 0;\n    width: 75%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Squad Team</h1>\n  <h3>UX/UI Design</h3>\n  <div class=\"row\">\n    <div class=\"card\" *ngFor=\"let member of ux\">\n      <img src=\"{{member.img}}\" alt=\"\">\n      <p>\n        {{member.name}}\n      </p>\n      <button class=\"linkedin inline\" (click)=\"link(member.url)\">\n        <svg width=\"48px\" height=\"48px\" viewBox=\"0 0 48 48\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n          xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <defs>\n            <filter x=\"-4.3%\" y=\"-15.6%\" width=\"108.6%\" height=\"143.8%\" filterUnits=\"objectBoundingBox\" id=\"filter-1\">\n              <feOffset dx=\"0\" dy=\"4\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n              <feGaussianBlur stdDeviation=\"4\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur>\n              <feColorMatrix values=\"0 0 0 0 0.690196078   0 0 0 0 0.733333333   0 0 0 0 0.784313725  0 0 0 0.24 0\"\n                type=\"matrix\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"></feColorMatrix>\n              <feMerge>\n                <feMergeNode in=\"shadowMatrixOuter1\"></feMergeNode>\n                <feMergeNode in=\"SourceGraphic\"></feMergeNode>\n              </feMerge>\n            </filter>\n          </defs>\n          <g id=\"Final-Design\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"01_step1_002\" transform=\"translate(-1106.000000, -452.000000)\" fill=\"#FFFFFF\" fill-rule=\"nonzero\">\n              <g id=\"formulary\" transform=\"translate(1000.000000, 0.000000)\">\n                <g id=\"button/linkedin\" filter=\"url(#filter-1)\" transform=\"translate(57.000000, 440.000000)\">\n                  <g id=\"text\" transform=\"translate(57.000000, 16.000000)\">\n                    <g id=\"linkedin\">\n                      <path d=\"M29.1053403,0 L2.89465969,0 C1.296,0 0,1.296 0,2.89465969 L0,29.1052565 C0,30.704 1.296,32 2.89465969,32 L29.1052565,32 C30.704,32 32,30.704 32,29.1052565 L32,2.89465969 C32,1.296 30.704,0 29.1053403,0 Z M9.90215707,27.630911 C9.90215707,28.0961675 9.52502618,28.4732984 9.05976963,28.4732984 L5.4739267,28.4732984 C5.00867016,28.4732984 4.63153927,28.0961675 4.63153927,27.630911 L4.63153927,12.5992042 C4.63153927,12.1339476 5.00867016,11.7568168 5.4739267,11.7568168 L9.05976963,11.7568168 C9.52502618,11.7568168 9.90215707,12.1339476 9.90215707,12.5992042 L9.90215707,27.630911 Z M7.26684817,10.3398534 C5.38546597,10.3398534 3.86027225,8.81465969 3.86027225,6.93327749 C3.86027225,5.05189529 5.38546597,3.52670157 7.26684817,3.52670157 C9.14823037,3.52670157 10.6734241,5.05189529 10.6734241,6.93327749 C10.6734241,8.81465969 9.14831414,10.3398534 7.26684817,10.3398534 Z M28.6416754,27.6987644 C28.6416754,28.1264921 28.2948691,28.4732984 27.8671414,28.4732984 L24.019267,28.4732984 C23.5915393,28.4732984 23.244733,28.1264921 23.244733,27.6987644 L23.244733,20.6480419 C23.244733,19.5962304 23.5532565,16.0389529 20.496,16.0389529 C18.1245654,16.0389529 17.6435602,18.473801 17.5469738,19.5664921 L17.5469738,27.6987644 C17.5469738,28.1264921 17.2002513,28.4732984 16.7724398,28.4732984 L13.0508901,28.4732984 C12.6231623,28.4732984 12.276356,28.1264921 12.276356,27.6987644 L12.276356,12.5313508 C12.276356,12.103623 12.6231623,11.7568168 13.0508901,11.7568168 L16.7724398,11.7568168 C17.2001675,11.7568168 17.5469738,12.103623 17.5469738,12.5313508 L17.5469738,13.8427644 C18.4263037,12.5231414 19.7331099,11.5045864 22.5155183,11.5045864 C28.6769424,11.5045864 28.6416754,17.2609005 28.6416754,20.4237068 L28.6416754,27.6987644 Z\"\n                        id=\"Shape\"></path>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </g>\n        </svg>\n        <p>\n          Linkedin Profile\n        </p>\n      </button>\n    </div>\n  </div>\n\n  <h3>Web Development</h3>\n  <div class=\"row\">\n    <div class=\"card\" *ngFor=\"let member of web\">\n      <img src=\"{{member.img}}\" alt=\"\">\n      <p>\n        {{member.name}}\n      </p>\n      <button class=\"github inline\" (click)=\"link(member.url)\">\n        <svg width=\"34px\" height=\"33px\" viewBox=\"0 0 34 33\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n          xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->\n          <desc>Created with Sketch.</desc>\n          <defs>\n            <filter x=\"-4.0%\" y=\"-15.9%\" width=\"108.1%\" height=\"141.5%\" filterUnits=\"objectBoundingBox\" id=\"filter-1\">\n              <feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n              <feGaussianBlur stdDeviation=\"2.5\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur>\n              <feColorMatrix values=\"0 0 0 0 0.690196078   0 0 0 0 0.733333333   0 0 0 0 0.784313725  0 0 0 0.24 0\"\n                type=\"matrix\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"></feColorMatrix>\n              <feMerge>\n                <feMergeNode in=\"shadowMatrixOuter1\"></feMergeNode>\n                <feMergeNode in=\"SourceGraphic\"></feMergeNode>\n              </feMerge>\n            </filter>\n          </defs>\n          <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"001-step2-copy-15\" transform=\"translate(-108.000000, -1016.000000)\">\n              <g id=\"Group\" transform=\"translate(39.000000, 759.000000)\">\n                <g id=\"button/linkedin-copy-5\" filter=\"url(#filter-1)\" transform=\"translate(20.000000, 252.000000)\">\n                  <g id=\"Group-9\">\n                    <g id=\"Group-8\" transform=\"translate(54.000000, 8.000000)\">\n                      <image id=\"github-logo-1\" x=\"0\" y=\"0\" width=\"24\" height=\"24\" xlink:href=\"data:image/png;base64,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\"></image>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </g>\n        </svg>\n        <p>\n          Github Profile\n        </p>\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.ux = [
            { name: 'Santiago Becerra', img: '../../../assets/img/santiago.png', url: '' },
            { name: 'Jose Gómez', img: '../../../assets/img/jose.png', url: '' },
            { name: 'Alba Balbás', img: '../../../assets/img/alba.png', url: '' },
            { name: 'Esther Correa', img: '../../../assets/img/esther.png', url: '' },
            { name: 'Luis Rollón', img: '../../../assets/img/luis.png', url: '' },
        ];
        this.web = [
            { name: 'Victor Rodríguez', img: '../../../assets/img/victor.png', url: 'www.github.com/Girgetto' },
            { name: 'Giorgio Grassini', img: '../../../assets/img/giorgio.png', url: 'www.github.com/Girgetto' },
            { name: 'Diego Méndez', img: '../../../assets/img/diego.png', url: 'www.github.com/diegomendezp' },
            { name: 'Juan Sánchez', img: '../../../assets/img/juan.png', url: 'www.github.com/Girgetto' },
            { name: 'Gabriel Cebrián', img: '../../../assets/img/gabriel.png', url: 'www.github.com/Girgetto' },
        ];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.link = function (link) {
        window.location.href = "https://" + link;
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/boarding/boarding.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/boarding/boarding.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\n  width: 327px;\n  height: 64px;\n  border-radius: 8px;\n  background-color: #ffffff;\n  border: solid 1px #f5f5f5;\n}\n\n.color {\n  opacity: 100;\n}\n\n.row {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n}\n\n.missingCity {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 5px;\n}\n\n.selected-color > span {\n  color: #000;\n}"

/***/ }),

/***/ "./src/app/components/boarding/boarding.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/boarding/boarding.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container reverse\">\n    <div class=\"right-bar\">\n        <div class=\"top\">\n            <div class=\"-Go-back\"><a [routerLink]=\"['/jeep']\">\n                    < Go back</a> </div> <div class=\"row\">\n\n                        <svg width=\"28px\" height=\"48px\" viewBox=\"0 0 28 48\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n                            xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                            <desc>Created with Sketch.</desc>\n                            <defs></defs>\n                            <g id=\"Final-Design\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                                <g id=\"01_step1_002\" transform=\"translate(-1057.000000, -200.000000)\" fill=\"#008D9C\">\n                                    <g id=\"formulary\" transform=\"translate(1000.000000, 0.000000)\">\n                                        <path d=\"M69.3715977,241.271365 C68.5550606,241.30911 67.7414481,241.375928 66.9352954,241.471827 L66.8654581,241.480139 C66.5955425,241.480139 66.3504206,241.289591 66.2382068,241.145818 L66.0073176,240.850071 L65.1531657,240.859326 C64.8930293,240.862153 64.6590695,240.652045 64.5663647,240.333428 C64.5151965,240.157566 64.4648515,239.982363 64.4153214,239.807819 C64.0675741,239.936318 63.7254649,240.080017 63.3934985,240.244746 C63.280939,240.295998 63.1720344,240.354579 63.0628334,240.41257 C62.9539781,240.471151 62.8429003,240.52565 62.7373047,240.589986 L62.4170608,240.776846 L62.1050156,240.97674 C61.693845,241.250463 61.2955651,241.544106 60.9223258,241.867311 C60.5500744,242.191303 60.1950106,242.53492 59.8651357,242.901507 C59.5397552,243.270849 59.2305253,243.658586 58.9156649,244.040323 L57.9739482,245.188484 L57.9680215,245.195666 L57.9606624,245.200191 C57.8561534,245.264527 57.7398897,245.322764 57.6046602,245.332995 C57.5882628,245.335897 57.5706306,245.332355 57.5537392,245.332158 C57.5366997,245.330437 57.5194133,245.33147 57.5026701,245.327141 C57.469332,245.317845 57.4344133,245.31209 57.4044337,245.294285 C57.3399799,245.266642 57.2911827,245.217849 57.2473245,245.169548 C57.1643495,245.067977 57.116145,244.95111 57.0794483,244.834981 C57.0436407,244.718163 57.0199335,244.599722 57.0011654,244.481084 L57.0016593,244.46072 L57.0005233,244.473017 C56.993263,243.762272 57.061668,243.051231 57.198231,242.353717 C57.3399305,241.657137 57.5460838,240.97428 57.8058251,240.312918 C58.0684311,239.65254 58.3818592,239.013213 58.7312431,238.394889 C59.0837386,237.778139 59.472832,237.182835 59.8883489,236.607057 C60.7219511,235.456781 61.6603093,234.385695 62.656009,233.37496 C62.7203663,233.30921 62.7851817,233.243926 62.8503398,233.178994 C58.9835034,212.401526 67.4409051,202.771578 69.3572313,200.785703 C70.2501508,199.7249 71.6146447,199.740008 72.4937843,200.820445 L72.5181829,200.85046 C72.5181829,200.85046 83.4790351,210.063674 79.1239067,233.24066 C79.1604257,233.278563 79.1963869,233.316994 79.2314465,233.356279 C80.1951416,234.382065 81.0709227,235.491467 81.8229329,236.679764 C82.005873,236.979852 82.1984934,237.274135 82.3664684,237.582928 L82.6261603,238.041494 L82.8683682,238.509553 L82.9893734,238.743484 C83.0306633,238.821002 83.0651375,238.901914 83.1033652,238.980957 L83.327694,239.457476 L83.3834552,239.576802 L83.4349688,239.697998 L83.5379467,239.94034 C83.6053639,240.10241 83.6780164,240.262315 83.7410872,240.426106 C84.2571126,241.732009 84.6534663,243.084098 84.9235301,244.460632 L84.9156771,244.440515 C84.9888235,244.55812 85.0218159,244.71045 84.9845759,244.849894 C84.9489165,244.98919 84.8571007,245.105959 84.7442942,245.185051 C84.6310926,245.264684 84.4944803,245.309493 84.3561392,245.312149 C84.2175513,245.315494 84.0793584,245.273685 83.9640825,245.20025 L83.956427,245.19538 L83.950846,245.188544 L83.0091294,244.040382 C82.6942196,243.658645 82.3849402,243.270908 82.0596585,242.901566 C81.7297342,242.53493 81.3746704,242.191362 81.002419,241.867321 C80.6291798,241.544116 80.2308999,241.250522 79.8197786,240.976799 L79.507684,240.776905 L79.1874895,240.589996 C79.0819433,240.52566 78.9708161,240.471161 78.8619609,240.41258 C78.7527599,240.354589 78.6438552,240.296057 78.5312957,240.244755 C78.2156628,240.088167 77.8908607,239.95054 77.5607612,239.826916 C77.5159155,239.984548 77.470406,240.14272 77.4242267,240.301433 C77.3315713,240.619929 77.0975128,240.829795 76.8375245,240.826967 L75.9624079,240.817485 L75.5227612,241.347532 C75.4392924,241.448168 75.2497834,241.502814 75.0626452,241.480139 C74.2024389,241.375986 73.3335338,241.304966 72.4614513,241.267085 C72.4612737,242.779197 72.2463005,244.290464 71.81727,245.765637 L71.2199328,247.819553 C71.1515321,248.054737 70.772705,248.062011 70.6925704,247.829714 L70.2611787,246.57908 C69.6645653,244.84952 69.367687,243.06075 69.3715977,241.271365 Z\"\n                                            id=\"Combined-Shape\"></path>\n                                    </g>\n                                </g>\n                            </g>\n                        </svg>\n\n                        <div class=\"Step-1-of-5\">Step 2 <span>of 5</span></div>\n            </div>\n            <div class=\"title\">\n                <h3>Prepare to jump aboard</h3>\n            </div>\n            <div class=\"description\">\n                <p>Before going inside, you have to select the campus/city where you have completed your bootcamp</p>\n            </div>\n\n            <div [ngClass]=\"{'missing': missingSelect, 'selected-color': color}\" [ngClass]=\"{}\" class=\"select\" tabindex=\"0\" (click)=\"toggleOptList(select)\"\n                #select>\n                <span class=\"value\">Select city</span>\n                <ul class=\"optList hidden\">\n                    <li class=\"option\" *ngFor=\"let c of campus\" (click)=\"prueba(c.name)\">{{c.name}}</li>\n                </ul>\n            </div>\n            <div *ngIf=\"missingCity\" class=\"missingCity\">\n                <p>\n                    Select your city\n                </p>\n            </div>\n        </div>\n        <div class=\"bottom\">\n            <button (click)=\"scroll(target)\" [disabled]=\"!submit\" (click)=\"onConfirm()\" [ngClass]=\"{'color' : color}\"\n                class=\"button main-button\">\n                <p>Confirm campus</p>\n            </button>\n        </div>\n\n    </div>\n    <div class=\"left-part\">\n        <h1>Welcome aboard {{name}}!</h1>\n        <h2>you have to select the Campus where you studied</h2>\n        <div #target class=\"animation\">\n            <lottie-animation-view [options]=\"lottieConfig\" (animCreated)=\"handleAnimation($event)\">\n            </lottie-animation-view>\n            <div id=\"player\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/boarding/boarding.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/boarding/boarding.component.ts ***!
  \***********************************************************/
/*! exports provided: BoardingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardingComponent", function() { return BoardingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardingComponent = /** @class */ (function () {
    function BoardingComponent(router, route, data) {
        this.router = router;
        this.route = route;
        this.data = data;
        this.animationSpeed = 1;
        this.campus = [
            { name: "Madrid" },
            { name: "Barcelona" },
            { name: "Miami" },
            { name: "Amsterdam" },
            { name: "Paris" }
        ];
        this.selectedValue = "";
        this.color = false;
        this.submit = true;
        this.missingSelect = false;
        this.missingCity = false;
        this.name = '';
        this.lottieConfig = {
            path: "../../../assets/animations/boarding/boarding.json",
            autoplay: false,
            loop: false
        };
    }
    BoardingComponent.prototype.ngOnInit = function () {
        this.name = this.data.getData().name;
    };
    BoardingComponent.prototype.scroll = function (el) {
        if (this.selectedValue !== '')
            el.scrollIntoView();
    };
    BoardingComponent.prototype.onConfirm = function () {
        var _this = this;
        if (this.selectedValue != "") {
            this.submit = false;
            this.play();
            setTimeout(function () {
                _this.router.navigate(["/handButton"]);
            }, 4700);
        }
        else {
            this.missingSelect = true;
            this.missingCity = true;
        }
    };
    BoardingComponent.prototype.handleAnimation = function (anim) {
        this.anim = anim;
    };
    BoardingComponent.prototype.stop = function () {
        this.anim.stop();
    };
    BoardingComponent.prototype.play = function () {
        this.anim.play();
    };
    BoardingComponent.prototype.pause = function () {
        this.anim.pause();
    };
    BoardingComponent.prototype.setSpeed = function (speed) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    };
    BoardingComponent.prototype.toggleOptList = function (select) {
        var optList = select.querySelector(".optList");
        optList.classList.toggle("hidden");
    };
    BoardingComponent.prototype.prueba = function (course) {
        var value = document.querySelector(".value");
        value.innerHTML = course;
        this.color = true;
        this.missingSelect = false;
        this.missingCity = false;
        this.selectedValue = course;
        this.data.addCity(this.selectedValue);
    };
    BoardingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-boarding",
            template: __webpack_require__(/*! ./boarding.component.html */ "./src/app/components/boarding/boarding.component.html"),
            styles: [__webpack_require__(/*! ./boarding.component.css */ "./src/app/components/boarding/boarding.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], BoardingComponent);
    return BoardingComponent;
}());



/***/ }),

/***/ "./src/app/components/crash/crash.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/crash/crash.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 100%;\n  height: 48px;\n  padding-left: 10px;\n  border-radius: 24px;\n  margin-bottom: 10px;\n}\n\n.grey {\n  color: #b0bbc8;\n}\n\n.rectangle {\n  border-radius: 8px;\n  background-color: #fff;\n  border: solid 1px #f5f5f5;\n  color: #4f5b77;\n  font-family: AvenirNext;\n  font-size: 16px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  text-align: left;\n  outline: none;\n}\n\n.color {\n  opacity: 100;\n}\n\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #b0bbc8;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #b0bbc8;\n}\n\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #b0bbc8;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #b0bbc8;\n}\n\n.Rectangle-6 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 80px;\n  border-radius: 8px;\n  background-color: #ffffff;\n}\n\n.center {\n  max-width: 50%;\n}\n\n.missing {\n  border: 1px solid red;\n}\n\n.missingName {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 5px;\n}\n\n.missingSurname {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 5px;\n}\n\n.inline {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.animation {\n  width: 80% !important;\n  margin-left: -8rem !important;\n  margin-top: -1rem !important;\n}"

/***/ }),

/***/ "./src/app/components/crash/crash.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/crash/crash.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container reverse\">\n    <div class=\"right-bar\">\n        <div class=\"top\">\n            <div class=\"-Go-back\"><a [routerLink]=\"['/jeep']\">\n                    < Go back</a> </div> <div class=\"row\">\n\n                        <svg width=\"28px\" height=\"48px\" viewBox=\"0 0 28 48\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n                            xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                            <desc>Created with Sketch.</desc>\n                            <defs></defs>\n                            <g id=\"Final-Design\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                                <g id=\"01_step1_002\" transform=\"translate(-1057.000000, -200.000000)\" fill=\"#008D9C\">\n                                    <g id=\"formulary\" transform=\"translate(1000.000000, 0.000000)\">\n                                        <path d=\"M69.3715977,241.271365 C68.5550606,241.30911 67.7414481,241.375928 66.9352954,241.471827 L66.8654581,241.480139 C66.5955425,241.480139 66.3504206,241.289591 66.2382068,241.145818 L66.0073176,240.850071 L65.1531657,240.859326 C64.8930293,240.862153 64.6590695,240.652045 64.5663647,240.333428 C64.5151965,240.157566 64.4648515,239.982363 64.4153214,239.807819 C64.0675741,239.936318 63.7254649,240.080017 63.3934985,240.244746 C63.280939,240.295998 63.1720344,240.354579 63.0628334,240.41257 C62.9539781,240.471151 62.8429003,240.52565 62.7373047,240.589986 L62.4170608,240.776846 L62.1050156,240.97674 C61.693845,241.250463 61.2955651,241.544106 60.9223258,241.867311 C60.5500744,242.191303 60.1950106,242.53492 59.8651357,242.901507 C59.5397552,243.270849 59.2305253,243.658586 58.9156649,244.040323 L57.9739482,245.188484 L57.9680215,245.195666 L57.9606624,245.200191 C57.8561534,245.264527 57.7398897,245.322764 57.6046602,245.332995 C57.5882628,245.335897 57.5706306,245.332355 57.5537392,245.332158 C57.5366997,245.330437 57.5194133,245.33147 57.5026701,245.327141 C57.469332,245.317845 57.4344133,245.31209 57.4044337,245.294285 C57.3399799,245.266642 57.2911827,245.217849 57.2473245,245.169548 C57.1643495,245.067977 57.116145,244.95111 57.0794483,244.834981 C57.0436407,244.718163 57.0199335,244.599722 57.0011654,244.481084 L57.0016593,244.46072 L57.0005233,244.473017 C56.993263,243.762272 57.061668,243.051231 57.198231,242.353717 C57.3399305,241.657137 57.5460838,240.97428 57.8058251,240.312918 C58.0684311,239.65254 58.3818592,239.013213 58.7312431,238.394889 C59.0837386,237.778139 59.472832,237.182835 59.8883489,236.607057 C60.7219511,235.456781 61.6603093,234.385695 62.656009,233.37496 C62.7203663,233.30921 62.7851817,233.243926 62.8503398,233.178994 C58.9835034,212.401526 67.4409051,202.771578 69.3572313,200.785703 C70.2501508,199.7249 71.6146447,199.740008 72.4937843,200.820445 L72.5181829,200.85046 C72.5181829,200.85046 83.4790351,210.063674 79.1239067,233.24066 C79.1604257,233.278563 79.1963869,233.316994 79.2314465,233.356279 C80.1951416,234.382065 81.0709227,235.491467 81.8229329,236.679764 C82.005873,236.979852 82.1984934,237.274135 82.3664684,237.582928 L82.6261603,238.041494 L82.8683682,238.509553 L82.9893734,238.743484 C83.0306633,238.821002 83.0651375,238.901914 83.1033652,238.980957 L83.327694,239.457476 L83.3834552,239.576802 L83.4349688,239.697998 L83.5379467,239.94034 C83.6053639,240.10241 83.6780164,240.262315 83.7410872,240.426106 C84.2571126,241.732009 84.6534663,243.084098 84.9235301,244.460632 L84.9156771,244.440515 C84.9888235,244.55812 85.0218159,244.71045 84.9845759,244.849894 C84.9489165,244.98919 84.8571007,245.105959 84.7442942,245.185051 C84.6310926,245.264684 84.4944803,245.309493 84.3561392,245.312149 C84.2175513,245.315494 84.0793584,245.273685 83.9640825,245.20025 L83.956427,245.19538 L83.950846,245.188544 L83.0091294,244.040382 C82.6942196,243.658645 82.3849402,243.270908 82.0596585,242.901566 C81.7297342,242.53493 81.3746704,242.191362 81.002419,241.867321 C80.6291798,241.544116 80.2308999,241.250522 79.8197786,240.976799 L79.507684,240.776905 L79.1874895,240.589996 C79.0819433,240.52566 78.9708161,240.471161 78.8619609,240.41258 C78.7527599,240.354589 78.6438552,240.296057 78.5312957,240.244755 C78.2156628,240.088167 77.8908607,239.95054 77.5607612,239.826916 C77.5159155,239.984548 77.470406,240.14272 77.4242267,240.301433 C77.3315713,240.619929 77.0975128,240.829795 76.8375245,240.826967 L75.9624079,240.817485 L75.5227612,241.347532 C75.4392924,241.448168 75.2497834,241.502814 75.0626452,241.480139 C74.2024389,241.375986 73.3335338,241.304966 72.4614513,241.267085 C72.4612737,242.779197 72.2463005,244.290464 71.81727,245.765637 L71.2199328,247.819553 C71.1515321,248.054737 70.772705,248.062011 70.6925704,247.829714 L70.2611787,246.57908 C69.6645653,244.84952 69.367687,243.06075 69.3715977,241.271365 Z\"\n                                            id=\"Combined-Shape\"></path>\n                                    </g>\n                                </g>\n                            </g>\n                        </svg>\n\n                        <div class=\"Step-1-of-5\">Step 2 <span>of 5</span></div>\n            </div>\n            <div class=\"title\">\n                <h3>Prepare to jump aboard</h3>\n            </div>\n            <div class=\"description\">\n                <p>Before going inside, you have to select the campus/city where you have completed your bootcamp</p>\n            </div>\n            <input [ngClass]=\"{'missing': missingName}\" class=\"rectangle\" #box1 name=\"username\" placeholder=\"Name\" id=\"username\"\n                (input)=\"onNameChange($event.target.value)\" required>\n            <div *ngIf=\"missingName\" class=\"missingName\">\n                <p>\n                    Missing Name\n                </p>\n            </div>\n            <input [ngClass]=\"{'missing': missingSurname}\" class=\"rectangle\" #box2 name=\"surname\" placeholder=\"Surname\"\n                (input)=\"onSurnameChange($event.target.value)\" required>\n            <div *ngIf=\"missingSurname\" class=\"missingSurname\">\n                <p>\n                    Missing Surname\n                </p>\n            </div>\n\n        </div>\n        <div class=\"bottom\">\n            <button (click)=\"scroll(target)\" [disabled]=\"!submit\" [ngClass]=\"{'color': color}\" (click)=\"onConfirm()\"\n                class=\"main-button\">\n                <p class=\"Confirm\">Confirm</p>\n            </button>\n        </div>\n        <div class=\"left-part\">\n            <div #target class=\"animation\">\n                <lottie-animation-view [options]=\"lottieConfig\" (animCreated)=\"handleAnimation($event)\">\n                </lottie-animation-view>\n                <div id=\"player\">\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/components/crash/crash.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/crash/crash.component.ts ***!
  \*****************************************************/
/*! exports provided: CrashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrashComponent", function() { return CrashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrashComponent = /** @class */ (function () {
    function CrashComponent(route, data, activatedRoute) {
        this.route = route;
        this.data = data;
        this.activatedRoute = activatedRoute;
        this.animationSpeed = 1;
        this.name = "";
        this.surname = "";
        this.color = false;
        this.submit = true;
        this.missingName = false;
        this.missingSurname = false;
        this.user = {};
        this.empty = false;
        this.lottieConfig = {
            path: "../../../assets/animations/crash/crash.json",
            autoplay: true,
            loop: false
        };
    }
    CrashComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setSpeed(3);
        }, 1);
    };
    CrashComponent.prototype.onNameChange = function (name) {
        this.name = name;
        this.name !== "" && this.surname !== ""
            ? (this.color = true)
            : (this.color = false);
        if (this.name !== "")
            this.missingName = false;
    };
    CrashComponent.prototype.onSurnameChange = function (surname) {
        this.surname = surname;
        this.name !== "" && this.surname !== ""
            ? (this.color = true)
            : (this.color = false);
        if (this.surname !== "")
            this.missingSurname = false;
    };
    CrashComponent.prototype.onConfirm = function () {
        if (this.name !== "" && this.surname !== "") {
            this.submit = false;
            this.data.addName(this.name, this.surname);
            this.play();
            this.route.navigate(["/boarding"]);
        }
        else if (this.name == "" && this.surname == "") {
            this.missingName = true;
            this.missingSurname = true;
        }
        else if (this.surname == "") {
            this.missingSurname = true;
        }
        else if (this.name == "") {
            this.missingName = true;
        }
    };
    CrashComponent.prototype.scroll = function (el) {
        if (this.name !== "" && this.surname !== "")
            el.scrollIntoView();
    };
    CrashComponent.prototype.handleAnimation = function (anim) {
        this.anim = anim;
    };
    CrashComponent.prototype.stop = function () {
        this.anim.stop();
    };
    CrashComponent.prototype.play = function () {
        this.anim.play();
    };
    CrashComponent.prototype.pause = function () {
        this.anim.pause();
    };
    CrashComponent.prototype.setSpeed = function (speed) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    };
    CrashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-crash",
            template: __webpack_require__(/*! ./crash.component.html */ "./src/app/components/crash/crash.component.html"),
            styles: [__webpack_require__(/*! ./crash.component.css */ "./src/app/components/crash/crash.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CrashComponent);
    return CrashComponent;
}());



/***/ }),

/***/ "./src/app/components/hand-button/hand-button.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/hand-button/hand-button.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  opacity: 100;\n}\n\n.Step-1-of-5 span {\n  color: #b0bbc8;\n}\n\n.row {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n}\n\n.right-bar h3 {\n  color: #4f5b77;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.33;\n}\n\n.right-bar .info {\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.select-container {\n  position: relative;\n}\n\n.selected-color > span {\n  color: #000 !important;\n}\n\n/**********************************************/\n\n.select {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 1px 25px 2px 5px;\n  width: 100%;\n  border-radius: 8px;\n\n  background: #fff;\n  background-image: url('arrow-down.png');\n  background-repeat: no-repeat;\n  background-position-x: 95%;\n  background-position-y: center;\n  background-size: 16px;\n}\n\n.select.active,\n.select:focus {\n  outline: none;\n  box-shadow: 0 0 3px 1px #4f5b77;\n}\n\n.select .value {\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  vertical-align: top;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  line-height: 24px;\n  font-size: 16px;\n  padding: 10px 20px;\n  font-family: \"AvenirNext\";\n  color: #b0bbc8;\n}\n\n.select .optList {\n  position: absolute;\n  top: 100%;\n  left: 0;\n}\n\n.select .optList.hidden {\n  max-height: 0;\n  visibility: hidden;\n}\n\n.select .optList {\n  z-index: 2;\n  list-style: none;\n  margin: 0;\n  margin-top: 5px !important;\n  padding: 0;\n  box-sizing: border-box;\n  min-width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  border-radius: 8px;\n  background: #fff;\n}\n\n.select .option {\n  line-height: 24px;\n  font-size: 16px;\n  padding: 20px;\n  font-family: \"AvenirNext\";\n}\n\n.option:hover {\n  background: #b0bbc8;\n  color: #ffffff;\n  cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/components/hand-button/hand-button.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/hand-button/hand-button.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container reverse\">\n    <div class=\"right-bar\">\n        <div class=\"top\">\n            <div class=\"-Go-back\"><a [routerLink]=\"['/boarding']\">< Go back</a>\n            </div>\n            <div class=\"row\">\n    \n                <svg width=\"28px\" height=\"48px\" viewBox=\"0 0 28 48\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                    <desc>Created with Sketch.</desc>\n                    <defs></defs>\n                    <g id=\"Final-Design\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <g id=\"01_step1_002\" transform=\"translate(-1057.000000, -200.000000)\" fill=\"#008D9C\">\n                            <g id=\"formulary\" transform=\"translate(1000.000000, 0.000000)\">\n                                <path d=\"M69.3715977,241.271365 C68.5550606,241.30911 67.7414481,241.375928 66.9352954,241.471827 L66.8654581,241.480139 C66.5955425,241.480139 66.3504206,241.289591 66.2382068,241.145818 L66.0073176,240.850071 L65.1531657,240.859326 C64.8930293,240.862153 64.6590695,240.652045 64.5663647,240.333428 C64.5151965,240.157566 64.4648515,239.982363 64.4153214,239.807819 C64.0675741,239.936318 63.7254649,240.080017 63.3934985,240.244746 C63.280939,240.295998 63.1720344,240.354579 63.0628334,240.41257 C62.9539781,240.471151 62.8429003,240.52565 62.7373047,240.589986 L62.4170608,240.776846 L62.1050156,240.97674 C61.693845,241.250463 61.2955651,241.544106 60.9223258,241.867311 C60.5500744,242.191303 60.1950106,242.53492 59.8651357,242.901507 C59.5397552,243.270849 59.2305253,243.658586 58.9156649,244.040323 L57.9739482,245.188484 L57.9680215,245.195666 L57.9606624,245.200191 C57.8561534,245.264527 57.7398897,245.322764 57.6046602,245.332995 C57.5882628,245.335897 57.5706306,245.332355 57.5537392,245.332158 C57.5366997,245.330437 57.5194133,245.33147 57.5026701,245.327141 C57.469332,245.317845 57.4344133,245.31209 57.4044337,245.294285 C57.3399799,245.266642 57.2911827,245.217849 57.2473245,245.169548 C57.1643495,245.067977 57.116145,244.95111 57.0794483,244.834981 C57.0436407,244.718163 57.0199335,244.599722 57.0011654,244.481084 L57.0016593,244.46072 L57.0005233,244.473017 C56.993263,243.762272 57.061668,243.051231 57.198231,242.353717 C57.3399305,241.657137 57.5460838,240.97428 57.8058251,240.312918 C58.0684311,239.65254 58.3818592,239.013213 58.7312431,238.394889 C59.0837386,237.778139 59.472832,237.182835 59.8883489,236.607057 C60.7219511,235.456781 61.6603093,234.385695 62.656009,233.37496 C62.7203663,233.30921 62.7851817,233.243926 62.8503398,233.178994 C58.9835034,212.401526 67.4409051,202.771578 69.3572313,200.785703 C70.2501508,199.7249 71.6146447,199.740008 72.4937843,200.820445 L72.5181829,200.85046 C72.5181829,200.85046 83.4790351,210.063674 79.1239067,233.24066 C79.1604257,233.278563 79.1963869,233.316994 79.2314465,233.356279 C80.1951416,234.382065 81.0709227,235.491467 81.8229329,236.679764 C82.005873,236.979852 82.1984934,237.274135 82.3664684,237.582928 L82.6261603,238.041494 L82.8683682,238.509553 L82.9893734,238.743484 C83.0306633,238.821002 83.0651375,238.901914 83.1033652,238.980957 L83.327694,239.457476 L83.3834552,239.576802 L83.4349688,239.697998 L83.5379467,239.94034 C83.6053639,240.10241 83.6780164,240.262315 83.7410872,240.426106 C84.2571126,241.732009 84.6534663,243.084098 84.9235301,244.460632 L84.9156771,244.440515 C84.9888235,244.55812 85.0218159,244.71045 84.9845759,244.849894 C84.9489165,244.98919 84.8571007,245.105959 84.7442942,245.185051 C84.6310926,245.264684 84.4944803,245.309493 84.3561392,245.312149 C84.2175513,245.315494 84.0793584,245.273685 83.9640825,245.20025 L83.956427,245.19538 L83.950846,245.188544 L83.0091294,244.040382 C82.6942196,243.658645 82.3849402,243.270908 82.0596585,242.901566 C81.7297342,242.53493 81.3746704,242.191362 81.002419,241.867321 C80.6291798,241.544116 80.2308999,241.250522 79.8197786,240.976799 L79.507684,240.776905 L79.1874895,240.589996 C79.0819433,240.52566 78.9708161,240.471161 78.8619609,240.41258 C78.7527599,240.354589 78.6438552,240.296057 78.5312957,240.244755 C78.2156628,240.088167 77.8908607,239.95054 77.5607612,239.826916 C77.5159155,239.984548 77.470406,240.14272 77.4242267,240.301433 C77.3315713,240.619929 77.0975128,240.829795 76.8375245,240.826967 L75.9624079,240.817485 L75.5227612,241.347532 C75.4392924,241.448168 75.2497834,241.502814 75.0626452,241.480139 C74.2024389,241.375986 73.3335338,241.304966 72.4614513,241.267085 C72.4612737,242.779197 72.2463005,244.290464 71.81727,245.765637 L71.2199328,247.819553 C71.1515321,248.054737 70.772705,248.062011 70.6925704,247.829714 L70.2611787,246.57908 C69.6645653,244.84952 69.367687,243.06075 69.3715977,241.271365 Z\"\n                                    id=\"Combined-Shape\"></path>\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n    \n            <div class=\"Step-1-of-5\">Step 3 <span>of 5</span></div>\n            </div>\n            <div class=\"title\">\n                <h3>Press the button to take off</h3>\n            </div>\n            <div class=\"description\">\n                <p class=\"info\">To continous with the proccess you have to select which Bootcamp have you coursed, and specify if\n                    it was full time or part time</p>\n            </div>\n            \n            <div class=\"select\" [ngClass]=\"{'selected-color': color}\" tabindex=\"0\" (click)=\"toggleOptList(select)\" #select>\n                <span class=\"value\">Select course</span>\n                <ul class=\"optList hidden\">\n                    <li class=\"option\" *ngFor=\"let c of campus\" (click)=\"prueba(c.name)\">{{c.name}}</li>\n                </ul>\n            </div>\n        </div>\n\n        <div class=\"bottom\">\n            <button (click)=\"scroll(target)\" (click)=\"onConfirm()\" [ngClass]=\"{'color' : color}\" class=\"button main-button\"><p>Confirm course</p></button>\n        </div>\n\n    </div>\n\n    <div class=\"main-content left-part\">\n        <h1>Humm..</h1>\n        <h2>try to remember when have<br>you studied at Ironhack</h2>\n        <div #target class=\"animation\">\n            <lottie-animation-view class=\"animationContainer\" [options]=\"lottieConfig\"  [ngStyle]=\"{'display': displayAnimation2}\">\n            </lottie-animation-view>\n            <lottie-animation-view class=\"animationContainer\" [options]=\"lottieConfig2\" (animCreated)=\"handleAnimation($event)\" [ngStyle]=\"{'display': displayAnimation}\">\n            </lottie-animation-view>\n        </div>\n    </div>\n\n\n    <div id=\"player\">\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/hand-button/hand-button.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/hand-button/hand-button.component.ts ***!
  \*****************************************************************/
/*! exports provided: HandButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandButtonComponent", function() { return HandButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HandButtonComponent = /** @class */ (function () {
    function HandButtonComponent(router, data) {
        this.router = router;
        this.data = data;
        this.displayAnimation = "none";
        this.displayAnimation2 = "block";
        this.animationSpeed = 1;
        this.campus = [
            { name: "Web Development Full-Time" },
            { name: "Web Development Part-Time" },
            { name: "UX/UI Full-Time" },
            { name: "UX/UI Part-Time" }
        ];
        this.selectedValue = "";
        this.color = false;
        this.lottieConfig = {
            path: "../../../assets/animations/handButton/button.json",
            autoplay: true,
            loop: true
        };
        this.lottieConfig2 = {
            path: "../../../assets/animations/handButton/pushButton.json",
            autoplay: false,
            loop: false
        };
    }
    HandButtonComponent.prototype.scroll = function (el) {
        if (this.selectedValue !== '')
            el.scrollIntoView();
    };
    HandButtonComponent.prototype.onClick = function () {
        this.color = true;
    };
    HandButtonComponent.prototype.onConfirm = function () {
        var _this = this;
        this.displayAnimation = "block";
        this.displayAnimation2 = "none";
        if (this.selectedValue != "") {
            this.play();
            setTimeout(function () {
                _this.router.navigate(["/takeoff"]);
            }, 2700);
        }
    };
    HandButtonComponent.prototype.ngOnInit = function () { };
    HandButtonComponent.prototype.handleAnimation = function (anim) {
        this.anim = anim;
    };
    HandButtonComponent.prototype.stop = function () {
        this.anim.stop();
    };
    HandButtonComponent.prototype.play = function () {
        this.anim.play();
    };
    HandButtonComponent.prototype.pause = function () {
        this.anim.pause();
    };
    HandButtonComponent.prototype.setSpeed = function (speed) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    };
    HandButtonComponent.prototype.toggleOptList = function (select) {
        var optList = select.querySelector(".optList");
        optList.classList.toggle("hidden");
    };
    HandButtonComponent.prototype.prueba = function (course) {
        var value = document.querySelector(".value");
        value.innerHTML = course;
        this.color = true;
        this.selectedValue = course;
        this.data.addCourse(this.selectedValue);
    };
    HandButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-hand-button",
            template: __webpack_require__(/*! ./hand-button.component.html */ "./src/app/components/hand-button/hand-button.component.html"),
            styles: [__webpack_require__(/*! ./hand-button.component.css */ "./src/app/components/hand-button/hand-button.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HandButtonComponent);
    return HandButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/jeep/jeep.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/jeep/jeep.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input{\n  width: 100%;\n  height: 48px;\n  padding-left:10px;\n  border-radius: 24px;\n  margin-bottom: 10px;\n}\n\n.grey{\n  color: #b0bbc8;\n}\n\n.rectangle{\n  border-radius: 8px;\n  background-color: #fff;\n  border: solid 1px #f5f5f5;\n  color:#4f5b77;\n  font-family: AvenirNext;\n  font-size: 16px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  text-align: left;\n  outline: none;\n}\n\n.color {\n  opacity: 100;\n}\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #b0bbc8;\n}\n\n::-moz-placeholder { /* Firefox 19+ */\n  color: #b0bbc8;\n}\n\n:-ms-input-placeholder { /* IE 10+ */\n  color: #b0bbc8;\n}\n\n:-moz-placeholder { /* Firefox 18- */\n  color: #b0bbc8;\n}\n\n.Rectangle-6 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 80px;\n  border-radius: 8px;\n  background-color: #ffffff;\n}\n\n.center {\n  max-width: 50%;\n}\n\n.missing {\n  border:1px solid red;\n}\n\n.missingName{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 5px;\n}\n\n.missingSurname{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 5px;\n}\n\n.inline {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.linkedin {\n  background-color: #0077b5;\n  opacity: 1;\n  height: 64px;\n  border-radius: 8px;\n  margin-top: 10px;\n}\n\n.user-box {\n  display: flex;\n  background-color: #ffffff;\n  padding: 10px;\n}\n\n.profile-img {\n  border-radius: 50%;\n  width: 3rem;\n}"

/***/ }),

/***/ "./src/app/components/jeep/jeep.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/jeep/jeep.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container reverse\">\n  <div class=\"Rectangle-4 right-bar\">\n    <div class=\"top\">\n      <div class=\"-Go-back\">\n        <a [routerLink]=\"['/splash']\">\n          < Go back</a> </div> <div class=\"row\">\n            <svg width=\"28px\" height=\"48px\" viewBox=\"0 0 28 48\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n              <desc>Created with Sketch.</desc>\n              <defs></defs>\n              <g id=\"Final-Design\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                <g id=\"01_step1_002\" transform=\"translate(-1057.000000, -200.000000)\" fill=\"#008D9C\">\n                  <g id=\"formulary\" transform=\"translate(1000.000000, 0.000000)\">\n                    <path d=\"M69.3715977,241.271365 C68.5550606,241.30911 67.7414481,241.375928 66.9352954,241.471827 L66.8654581,241.480139 C66.5955425,241.480139 66.3504206,241.289591 66.2382068,241.145818 L66.0073176,240.850071 L65.1531657,240.859326 C64.8930293,240.862153 64.6590695,240.652045 64.5663647,240.333428 C64.5151965,240.157566 64.4648515,239.982363 64.4153214,239.807819 C64.0675741,239.936318 63.7254649,240.080017 63.3934985,240.244746 C63.280939,240.295998 63.1720344,240.354579 63.0628334,240.41257 C62.9539781,240.471151 62.8429003,240.52565 62.7373047,240.589986 L62.4170608,240.776846 L62.1050156,240.97674 C61.693845,241.250463 61.2955651,241.544106 60.9223258,241.867311 C60.5500744,242.191303 60.1950106,242.53492 59.8651357,242.901507 C59.5397552,243.270849 59.2305253,243.658586 58.9156649,244.040323 L57.9739482,245.188484 L57.9680215,245.195666 L57.9606624,245.200191 C57.8561534,245.264527 57.7398897,245.322764 57.6046602,245.332995 C57.5882628,245.335897 57.5706306,245.332355 57.5537392,245.332158 C57.5366997,245.330437 57.5194133,245.33147 57.5026701,245.327141 C57.469332,245.317845 57.4344133,245.31209 57.4044337,245.294285 C57.3399799,245.266642 57.2911827,245.217849 57.2473245,245.169548 C57.1643495,245.067977 57.116145,244.95111 57.0794483,244.834981 C57.0436407,244.718163 57.0199335,244.599722 57.0011654,244.481084 L57.0016593,244.46072 L57.0005233,244.473017 C56.993263,243.762272 57.061668,243.051231 57.198231,242.353717 C57.3399305,241.657137 57.5460838,240.97428 57.8058251,240.312918 C58.0684311,239.65254 58.3818592,239.013213 58.7312431,238.394889 C59.0837386,237.778139 59.472832,237.182835 59.8883489,236.607057 C60.7219511,235.456781 61.6603093,234.385695 62.656009,233.37496 C62.7203663,233.30921 62.7851817,233.243926 62.8503398,233.178994 C58.9835034,212.401526 67.4409051,202.771578 69.3572313,200.785703 C70.2501508,199.7249 71.6146447,199.740008 72.4937843,200.820445 L72.5181829,200.85046 C72.5181829,200.85046 83.4790351,210.063674 79.1239067,233.24066 C79.1604257,233.278563 79.1963869,233.316994 79.2314465,233.356279 C80.1951416,234.382065 81.0709227,235.491467 81.8229329,236.679764 C82.005873,236.979852 82.1984934,237.274135 82.3664684,237.582928 L82.6261603,238.041494 L82.8683682,238.509553 L82.9893734,238.743484 C83.0306633,238.821002 83.0651375,238.901914 83.1033652,238.980957 L83.327694,239.457476 L83.3834552,239.576802 L83.4349688,239.697998 L83.5379467,239.94034 C83.6053639,240.10241 83.6780164,240.262315 83.7410872,240.426106 C84.2571126,241.732009 84.6534663,243.084098 84.9235301,244.460632 L84.9156771,244.440515 C84.9888235,244.55812 85.0218159,244.71045 84.9845759,244.849894 C84.9489165,244.98919 84.8571007,245.105959 84.7442942,245.185051 C84.6310926,245.264684 84.4944803,245.309493 84.3561392,245.312149 C84.2175513,245.315494 84.0793584,245.273685 83.9640825,245.20025 L83.956427,245.19538 L83.950846,245.188544 L83.0091294,244.040382 C82.6942196,243.658645 82.3849402,243.270908 82.0596585,242.901566 C81.7297342,242.53493 81.3746704,242.191362 81.002419,241.867321 C80.6291798,241.544116 80.2308999,241.250522 79.8197786,240.976799 L79.507684,240.776905 L79.1874895,240.589996 C79.0819433,240.52566 78.9708161,240.471161 78.8619609,240.41258 C78.7527599,240.354589 78.6438552,240.296057 78.5312957,240.244755 C78.2156628,240.088167 77.8908607,239.95054 77.5607612,239.826916 C77.5159155,239.984548 77.470406,240.14272 77.4242267,240.301433 C77.3315713,240.619929 77.0975128,240.829795 76.8375245,240.826967 L75.9624079,240.817485 L75.5227612,241.347532 C75.4392924,241.448168 75.2497834,241.502814 75.0626452,241.480139 C74.2024389,241.375986 73.3335338,241.304966 72.4614513,241.267085 C72.4612737,242.779197 72.2463005,244.290464 71.81727,245.765637 L71.2199328,247.819553 C71.1515321,248.054737 70.772705,248.062011 70.6925704,247.829714 L70.2611787,246.57908 C69.6645653,244.84952 69.367687,243.06075 69.3715977,241.271365 Z\"\n                      id=\"Combined-Shape\"></path>\n                  </g>\n                </g>\n              </g>\n            </svg>\n\n            <div class=\"Step-1-of-5\">Step 1<span class=\"grey\"> of 5</span></div>\n      </div>\n      <h3 class=\"title\">Drive to the rocket </h3>\n      <p class=\"description\">We need to register how many students accomplish this adventure, so we have to know who\n        you are\n      </p>\n      <div class=\"input-box\">\n        <div *ngIf=\"empty\" class=\"user-box inline\">\n          <img src=\"{{user.pictureUrl}}\" alt=\"\" class=\"profile-img\">\n          <p>\n            Hi {{user.firstName}}!\n          </p>\n        </div>\n      </div>\n      <div>\n        <button (click)=\"Login()\" class=\"main-button linkedin inline\">\n          <svg width=\"48px\" height=\"48px\" viewBox=\"0 0 48 48\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <defs>\n              <filter x=\"-4.3%\" y=\"-15.6%\" width=\"108.6%\" height=\"143.8%\" filterUnits=\"objectBoundingBox\" id=\"filter-1\">\n                <feOffset dx=\"0\" dy=\"4\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n                <feGaussianBlur stdDeviation=\"4\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur>\n                <feColorMatrix values=\"0 0 0 0 0.690196078   0 0 0 0 0.733333333   0 0 0 0 0.784313725  0 0 0 0.24 0\"\n                  type=\"matrix\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"></feColorMatrix>\n                <feMerge>\n                  <feMergeNode in=\"shadowMatrixOuter1\"></feMergeNode>\n                  <feMergeNode in=\"SourceGraphic\"></feMergeNode>\n                </feMerge>\n              </filter>\n            </defs>\n            <g id=\"Final-Design\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"01_step1_002\" transform=\"translate(-1106.000000, -452.000000)\" fill=\"#FFFFFF\" fill-rule=\"nonzero\">\n                <g id=\"formulary\" transform=\"translate(1000.000000, 0.000000)\">\n                  <g id=\"button/linkedin\" filter=\"url(#filter-1)\" transform=\"translate(57.000000, 440.000000)\">\n                    <g id=\"text\" transform=\"translate(57.000000, 16.000000)\">\n                      <g id=\"linkedin\">\n                        <path d=\"M29.1053403,0 L2.89465969,0 C1.296,0 0,1.296 0,2.89465969 L0,29.1052565 C0,30.704 1.296,32 2.89465969,32 L29.1052565,32 C30.704,32 32,30.704 32,29.1052565 L32,2.89465969 C32,1.296 30.704,0 29.1053403,0 Z M9.90215707,27.630911 C9.90215707,28.0961675 9.52502618,28.4732984 9.05976963,28.4732984 L5.4739267,28.4732984 C5.00867016,28.4732984 4.63153927,28.0961675 4.63153927,27.630911 L4.63153927,12.5992042 C4.63153927,12.1339476 5.00867016,11.7568168 5.4739267,11.7568168 L9.05976963,11.7568168 C9.52502618,11.7568168 9.90215707,12.1339476 9.90215707,12.5992042 L9.90215707,27.630911 Z M7.26684817,10.3398534 C5.38546597,10.3398534 3.86027225,8.81465969 3.86027225,6.93327749 C3.86027225,5.05189529 5.38546597,3.52670157 7.26684817,3.52670157 C9.14823037,3.52670157 10.6734241,5.05189529 10.6734241,6.93327749 C10.6734241,8.81465969 9.14831414,10.3398534 7.26684817,10.3398534 Z M28.6416754,27.6987644 C28.6416754,28.1264921 28.2948691,28.4732984 27.8671414,28.4732984 L24.019267,28.4732984 C23.5915393,28.4732984 23.244733,28.1264921 23.244733,27.6987644 L23.244733,20.6480419 C23.244733,19.5962304 23.5532565,16.0389529 20.496,16.0389529 C18.1245654,16.0389529 17.6435602,18.473801 17.5469738,19.5664921 L17.5469738,27.6987644 C17.5469738,28.1264921 17.2002513,28.4732984 16.7724398,28.4732984 L13.0508901,28.4732984 C12.6231623,28.4732984 12.276356,28.1264921 12.276356,27.6987644 L12.276356,12.5313508 C12.276356,12.103623 12.6231623,11.7568168 13.0508901,11.7568168 L16.7724398,11.7568168 C17.2001675,11.7568168 17.5469738,12.103623 17.5469738,12.5313508 L17.5469738,13.8427644 C18.4263037,12.5231414 19.7331099,11.5045864 22.5155183,11.5045864 C28.6769424,11.5045864 28.6416754,17.2609005 28.6416754,20.4237068 L28.6416754,27.6987644 Z\"\n                          id=\"Shape\"></path>\n                      </g>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n          <p class=\"Confirm\">\n            <span *ngIf=\"!submit\">Login Linkedin</span>\n            <span *ngIf=\"submit\">Login with another account</span>\n          </p>\n        </button>\n        <p *ngIf=\"error\">There was an error with the connection please try to login again</p>\n      </div>\n    </div>\n    <div class=\"bottom\">\n      <button (click)=\"scroll(target)\" [disabled]=\"!submit\" [ngClass]=\"{'color': color}\" (click)=\"onConfirm()\" class=\"main-button\">\n        <p class=\"Confirm\">Confirm</p>\n      </button>\n    </div>\n  </div>\n  <div class=\"left-part\">\n    <h1 class=\"Get-ready\">Get ready!</h1>\n    <h2 class=\"to-start-this-advent\">to start this adventure, we need first to identify you</h2>\n    <div #target class=\"animation\">\n      <lottie-animation-view [options]=\"lottieConfig\" (animCreated)=\"handleAnimation($event)\">\n      </lottie-animation-view>\n      <div id=\"player\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/jeep/jeep.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/jeep/jeep.component.ts ***!
  \***************************************************/
/*! exports provided: JeepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JeepComponent", function() { return JeepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_linkedin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/linkedin.service */ "./src/app/services/linkedin.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JeepComponent = /** @class */ (function () {
    function JeepComponent(route, data, activatedRoute, linkedin) {
        this.route = route;
        this.data = data;
        this.activatedRoute = activatedRoute;
        this.linkedin = linkedin;
        this.animationSpeed = 1;
        this.name = "";
        this.surname = "";
        this.color = false;
        this.submit = false;
        this.user = {};
        this.empty = false;
        this.error = false;
        this.lottieConfig = {
            path: "../../../assets/animations/jeep/jeep.json",
            autoplay: false,
            loop: false
        };
    }
    JeepComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (!lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](params)) {
                _this.linkedin.getToken(params).subscribe(function (user) {
                    _this.empty = true;
                    _this.user = user["$in"];
                    if (_this.user) {
                        _this.submit = true;
                        _this.color = true;
                        _this.data.addNameLinkedin(user["$in"]);
                        _this.data.addToken(user["token"]);
                        _this.play();
                        setTimeout(function () {
                            _this.route.navigate(["/boarding"]);
                        }, 3000);
                    }
                }, function (err) { return _this.Login(); });
            }
        });
    };
    JeepComponent.prototype.Login = function () {
        var _this = this;
        this.linkedin
            .getCode()
            .subscribe(function (data) { return (window.location.href = data.toString()); }, function (error) { return (error ? (_this.error = true) : (_this.error = false)); });
    };
    JeepComponent.prototype.scroll = function (el) {
        if (this.name !== "" && this.surname !== "")
            el.scrollIntoView();
    };
    JeepComponent.prototype.onConfirm = function () {
        this.route.navigate(["/boarding"]);
    };
    JeepComponent.prototype.handleAnimation = function (anim) {
        this.anim = anim;
    };
    JeepComponent.prototype.stop = function () {
        this.anim.stop();
    };
    JeepComponent.prototype.play = function () {
        this.anim.play();
    };
    JeepComponent.prototype.pause = function () {
        this.anim.pause();
    };
    JeepComponent.prototype.setSpeed = function (speed) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    };
    JeepComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-jeep",
            template: __webpack_require__(/*! ./jeep.component.html */ "./src/app/components/jeep/jeep.component.html"),
            styles: [__webpack_require__(/*! ./jeep.component.css */ "./src/app/components/jeep/jeep.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_linkedin_service__WEBPACK_IMPORTED_MODULE_3__["LinkedinService"]])
    ], JeepComponent);
    return JeepComponent;
}());



/***/ }),

/***/ "./src/app/components/profs/profs.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/profs/profs.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\n  width: 100%;\n}\n\n.layer {\n  width: 90px;\n  height: 98px;\n  font-family: AvenirNext;\n  font-size: 72px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #008d9c;\n}\n\n.text-animation {\n  padding-left: 50px;\n  position: relative;\n  z-index: 1;\n}\n\n.animation {\n  width: 95%;\n  top: 0%;\n}\n\n.space {\n  padding-top: 52px;\n}\n\n.color {\n  opacity: 100;\n}\n\n.about-the-squad {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 2rem;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin-top:1rem;\n}\n\n.center {\n  justify-content: center;\n  align-content: center;\n}\n\n.inline {\n  display: flex;\n}"

/***/ }),

/***/ "./src/app/components/profs/profs.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/profs/profs.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"right-bar\">\n    <h2 style=\"width:100%\">This is your Squad:</h2>\n    <h1 class=\"layer\">#{{squad}}</h1>\n    <div class=\"space\">\n\n      <svg width=\"345px\" height=\"77px\" viewBox=\"0 0 345 77\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->\n        <desc>Created with Sketch.</desc>\n        <defs></defs>\n        <g id=\"Final-Design\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"05_step05_002\" transform=\"translate(-1048.000000, -357.000000)\">\n            <g id=\"formulary\" transform=\"translate(1000.000000, 0.000000)\">\n              <g id=\"Group-4\" transform=\"translate(48.000000, 355.000000)\">\n                <g id=\"moon\" transform=\"translate(0.000000, 2.942029)\">\n                  <ellipse id=\"Oval-3\" fill-opacity=\"0.1\" fill=\"#ADDADF\" cx=\"32\" cy=\"32.1891304\" rx=\"32\" ry=\"32.1891304\"></ellipse>\n                  <g id=\"Group\" fill=\"#ADDADF\" fill-opacity=\"0.1\">\n                    <ellipse id=\"Oval-3-Copy-3\" cx=\"32\" cy=\"32.1891304\" rx=\"32\" ry=\"32.1891304\"></ellipse>\n                  </g>\n                  <ellipse id=\"Oval-3\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(36.129032, 7.865217) rotate(-9.000000) translate(-36.129032, -7.865217) \"\n                    cx=\"36.1290323\" cy=\"7.86521739\" rx=\"4.065631\" ry=\"2.53619319\"></ellipse>\n                  <ellipse id=\"Oval-3\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(49.836618, 14.105617) rotate(-9.000000) translate(-49.836618, -14.105617) \"\n                    cx=\"49.8366184\" cy=\"14.1056166\" rx=\"1.31195721\" ry=\"1\"></ellipse>\n                  <ellipse id=\"Oval-3\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(50.580573, 14.119747) rotate(-9.000000) translate(-50.580573, -14.119747) \"\n                    cx=\"50.5805731\" cy=\"14.1197472\" rx=\"1.31195721\" ry=\"1\"></ellipse>\n                  <ellipse id=\"Oval-3-Copy-4\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(18.629728, 7.905254) rotate(-9.000000) translate(-18.629728, -7.905254) \"\n                    cx=\"18.6297282\" cy=\"7.90525442\" rx=\"1.31195721\" ry=\"1\"></ellipse>\n                  <ellipse id=\"Oval-3-Copy-7\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(13.124352, 39.851631) rotate(-9.000000) translate(-13.124352, -39.851631) \"\n                    cx=\"13.1243519\" cy=\"39.8516312\" rx=\"1.31195721\" ry=\"1\"></ellipse>\n                  <ellipse id=\"Oval-3-Copy-7\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(13.124352, 39.851631) rotate(-9.000000) translate(-13.124352, -39.851631) \"\n                    cx=\"13.1243519\" cy=\"39.8516312\" rx=\"1.31195721\" ry=\"1\"></ellipse>\n                  <ellipse id=\"Oval-3-Copy-5\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(55.201157, 45.289312) rotate(-9.000000) translate(-55.201157, -45.289312) \"\n                    cx=\"55.2011568\" cy=\"45.2893124\" rx=\"1.31195721\" ry=\"1\"></ellipse>\n                  <ellipse id=\"Oval-3-Copy-6\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(30.623584, 31.209602) rotate(-9.000000) translate(-30.623584, -31.209602) \"\n                    cx=\"30.6235838\" cy=\"31.2096022\" rx=\"1\" ry=\"1\"></ellipse>\n                  <ellipse id=\"Oval-3-Copy-6\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(30.623584, 31.209602) rotate(-9.000000) translate(-30.623584, -31.209602) \"\n                    cx=\"30.6235838\" cy=\"31.2096022\" rx=\"1\" ry=\"1\"></ellipse>\n                  <g id=\"Group-2\" transform=\"translate(9.831029, 27.916667) rotate(44.000000) translate(-9.831029, -27.916667) translate(3.539171, 22.333333)\"\n                    fill=\"#B0BBC8\" fill-opacity=\"0.199999988\">\n                    <path d=\"M7.06456614,8.18534691 C9.74694323,8.18534691 11.9214395,7.02041791 11.9214395,5.58340516 C11.9214395,4.14639242 9.74694323,2.98146342 7.06456614,2.98146342 C4.38218905,2.98146342 2.18018169,4.66120876 2.20769277,5.58340516 C2.23520385,6.50560157 4.38218905,8.18534691 7.06456614,8.18534691 Z\"\n                      id=\"Oval-3\" transform=\"translate(7.064439, 5.583405) rotate(-35.000000) translate(-7.064439, -5.583405) \"></path>\n                    <path d=\"M6.28144055,8.53342709 C9.34588971,8.53342709 11.8301166,7.20256809 11.8301166,5.56087031 C11.8301166,3.91917254 9.34588971,2.58831354 6.28144055,2.58831354 C3.21699139,2.58831354 0.701334812,4.50731822 0.73276451,5.56087031 C0.764194207,6.61442241 3.21699139,8.53342709 6.28144055,8.53342709 Z\"\n                      id=\"Oval-3\" transform=\"translate(6.281295, 5.560870) rotate(-35.000000) translate(-6.281295, -5.560870) \"></path>\n                  </g>\n                  <path d=\"M52.295803,33.8526162 C56.5040291,33.8526162 59.9154705,31.4686426 59.9154705,28.5278623 C59.9154705,25.5870819 56.5040291,23.2031084 52.295803,23.2031084 C48.0875768,23.2031084 44.632975,26.6406298 44.6761355,28.5278623 C44.719296,30.4150947 48.0875768,33.8526162 52.295803,33.8526162 Z\"\n                    id=\"Oval-3\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(52.295603, 28.527862) rotate(-27.000000) translate(-52.295603, -28.527862) \"></path>\n                  <ellipse id=\"Oval-3\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(42.010670, 55.268997) rotate(1.000000) translate(-42.010670, -55.268997) \"\n                    cx=\"42.0106699\" cy=\"55.2689971\" rx=\"6.73425499\" ry=\"4.66086957\"></ellipse>\n                  <ellipse id=\"Oval-3\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(41.519118, 54.686388) rotate(1.000000) translate(-41.519118, -54.686388) \"\n                    cx=\"41.5191184\" cy=\"54.6863884\" rx=\"5.97293057\" ry=\"4.13394657\"></ellipse>\n                  <ellipse id=\"Oval-3-Copy-2\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(17.212951, 51.301237) rotate(10.000000) translate(-17.212951, -51.301237) \"\n                    cx=\"17.212951\" cy=\"51.301237\" rx=\"4.71889401\" ry=\"3.25289855\"></ellipse>\n                  <ellipse id=\"Oval-3-Copy-2\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(17.832847, 51.134818) rotate(10.000000) translate(-17.832847, -51.134818) \"\n                    cx=\"17.8328471\" cy=\"51.1348177\" rx=\"4.00110244\" ry=\"2.75809974\"></ellipse>\n                  <ellipse id=\"Oval-3-Copy\" fill-opacity=\"0.199999988\" fill=\"#B0BBC8\" transform=\"translate(52.055300, 28.450725) rotate(-24.000000) translate(-52.055300, -28.450725) \"\n                    cx=\"52.0552995\" cy=\"28.4507246\" rx=\"6.73425499\" ry=\"4.66086957\"></ellipse>\n                </g>\n                <g id=\"moon\" transform=\"translate(277.000000, 0.000000)\">\n                  <ellipse id=\"Oval-3\" fill=\"#C1EDFF\" cx=\"35.3841186\" cy=\"36.0306265\" rx=\"32.3672001\" ry=\"32.9192575\"></ellipse>\n                  <g id=\"Group\" transform=\"translate(0.030856, 0.063805)\" fill=\"#72C0BC\">\n                    <path d=\"M47.3995028,31.7928663 C48.0153908,31.7928663 48.9382656,28.9468171 50.1128261,28.4879245 C51.5266613,27.9355489 53.3025659,29.6410859 55.3122413,28.0505544 C55.6597267,27.7755416 56.7513909,31.8595182 57.665503,32.1285445 C58.4186697,32.3502041 56.7678657,28.7561989 57.4948327,28.1479395 C58.479126,27.324373 61.7860947,29.3199336 62.2647334,28.8305038 C63.4396155,27.6291338 61.2361333,22.2478035 61.4487339,21.7486837 C62.9049726,18.3298899 54.1804911,3.00593967 49.6911199,3.00593967 C46.3537752,3.00593967 46.0086523,4.59860654 45.1291944,7.32532957 C44.8256121,8.26657402 42.8757742,9.00739837 42.8757742,10.3221659 C42.8757742,11.212882 40.3752353,11.5552721 40.1575566,13.1343258 C39.9274863,14.803268 42.0010399,17.7285857 42.8429012,19.358455 C43.4281277,20.4914715 46.25661,12.9577903 54.1722213,13.2108979 C55.6375229,13.257752 49.6826325,18.871847 50.6221447,19.1753292 C52.39336,19.7474689 49.3074291,22.4007312 48.8766266,23.9644199 C48.3432447,25.9004423 44.18145,25.5640107 45.0928209,26.6633375 C46.7614958,28.6761503 46.1031897,31.7928663 47.3995028,31.7928663 Z\"\n                      id=\"Oval-2\" transform=\"translate(51.375758, 17.572158) rotate(-20.000000) translate(-51.375758, -17.572158) \"></path>\n                    <path d=\"M24.2124385,67.7666825 C25.6757269,67.7666825 28.8555572,49.6848085 29.7418371,47.6136309 C30.7638233,45.2253168 24.6409954,34.5202531 21.4903615,34.5202531 C18.3397276,34.5202531 12.2179751,33.2083315 12.2179751,36.7875693 C12.2179751,38.0674704 8.52467049,40.9653789 9.67448332,43.181255 C10.3045569,44.3955092 12.6383535,48.7872351 14.5321399,49.6970076 C18.8469438,51.7698336 22.8058145,67.7666825 24.2124385,67.7666825 Z\"\n                      id=\"Oval-2\" transform=\"translate(19.654046, 51.026103) scale(-1, 1) rotate(56.000000) translate(-19.654046, -51.026103) \"></path>\n                    <path d=\"M52.3474963,64.1120873 C53.8107847,64.1120873 63.4129263,49.2476342 64.2992062,47.1764566 C65.3211924,44.7881425 67.6758077,34.2488202 64.5251738,34.2488202 C61.3745399,34.2488202 44.1877749,35.712036 44.1877749,39.2912737 C44.1877749,40.5711748 39.190883,42.7973486 40.3406958,45.0132247 C40.9707694,46.2274788 42.0848302,50.3474765 43.9786166,51.2572489 C48.2934205,53.3300749 50.9408723,64.1120873 52.3474963,64.1120873 Z\"\n                      id=\"Oval-2\" transform=\"translate(53.138315, 49.180454) rotate(6.000000) translate(-53.138315, -49.180454) \"></path>\n                  </g>\n                </g>\n                <g id=\"Group-3\" transform=\"translate(68.000000, 26.000000)\">\n                  <rect id=\"Rectangle-7\" fill-opacity=\"0.3\" fill=\"#D8D8D8\" x=\"0\" y=\"9\" width=\"204\" height=\"6\" rx=\"3\"></rect>\n                  <rect id=\"Rectangle-7\" fill=\"#FFD26F\" x=\"0\" y=\"9\" [ngStyle]=\"{'width' : p }\" height=\"6\" rx=\"3\"></rect>\n                  <text id=\"10%\" font-family=\".AppleSystemUIFont\" font-size=\"16\" font-weight=\"normal\" fill=\"#4F5B77\">\n                    <tspan x=\"187.085938\" y=\"34\">{{p}}</tspan>\n                    <tspan x=\"190.875\" y=\"52\">%</tspan>\n                  </text>\n                  <g id=\"rocket\" [ngStyle]=\"{'transform': 'translate('+rocket+'px, 12px)' + 'rotate(90deg)' + 'translate(-48.000000px, -12.000000px)' + 'translate(36.000000px, -8.000000px)'}\">\n                    <path d=\"M10.6042266,34.3928042 C9.90433765,34.4242579 9.20695555,34.4799399 8.51596748,34.5598557 L8.45610696,34.5667828 C8.2247507,34.5667828 8.0146462,34.4079922 7.91846296,34.288182 L7.72055798,34.0417258 L6.98842775,34.049438 C6.76545366,34.0517945 6.56491668,33.8767042 6.48545544,33.6111903 C6.44159699,33.464638 6.3984441,33.3186359 6.35598976,33.1731828 C6.05792062,33.280265 5.76468421,33.4000141 5.48014159,33.537288 C5.38366201,33.5799984 5.29031516,33.628816 5.1967143,33.6771418 C5.10340979,33.7259594 5.00820023,33.771375 4.91768977,33.8249883 L4.64319499,33.9807047 L4.37572768,34.1472831 C4.02329569,34.3753856 3.68191292,34.6200887 3.36199358,34.8894259 C3.04292091,35.159419 2.73858054,35.4457667 2.4558306,35.7512561 C2.17693307,36.0590408 1.91187881,36.3821554 1.64199846,36.7002693 L0.834812777,37.6570704 L0.829732676,37.6630548 L0.823424884,37.6668257 C0.733845774,37.7204391 0.63419113,37.7689698 0.518280164,37.7774954 C0.504225219,37.7799138 0.489111919,37.7769626 0.474633632,37.7767986 C0.460028342,37.775364 0.445211381,37.7762248 0.430860097,37.7726178 C0.40228453,37.7648709 0.37235427,37.7600752 0.346657426,37.7452373 C0.291411331,37.7222016 0.249585167,37.6815407 0.211992422,37.6412897 C0.140871011,37.5566479 0.0995528579,37.4592586 0.0680985673,37.362484 C0.0374062918,37.2651357 0.0170858887,37.1664347 0.000998902927,37.0675698 L0.00142224466,37.0506004 L0.000448558676,37.0608476 C-0.00577456477,36.4685597 0.052858265,35.8760259 0.169912254,35.294764 C0.291368996,34.7142809 0.468071835,34.1452336 0.690707251,33.5940985 C0.91579805,33.0437831 1.18445071,32.511011 1.48392265,31.995741 C1.78606165,31.4817827 2.11957026,30.9856955 2.47572766,30.5058808 C3.19024383,29.5473172 3.99455079,28.6547455 4.84800772,27.812467 C4.90317108,27.7576753 4.95872713,27.703272 5.01457701,27.6491615 C1.7001458,10.3346048 8.94934722,2.30964826 10.5919126,0.654752122 C11.3572721,-0.229250402 12.5268383,-0.216659788 13.2803866,0.683703802 L13.3012996,0.708716707 C13.3012996,0.708716707 22.6963158,8.38639503 18.9633486,27.7005502 C18.9946506,27.7321357 19.0254745,27.7641618 19.0555256,27.7968995 C19.8815499,28.6517205 20.6322195,29.5762224 21.2767996,30.5664704 C21.4336054,30.816543 21.5987087,31.0617788 21.7426872,31.3191064 L21.9652803,31.7012448 L22.1728871,32.091294 L22.2766058,32.2862367 C22.3119972,32.350835 22.3415464,32.4182615 22.3743131,32.4841305 L22.5665949,32.8812298 L22.6143902,32.9806686 L22.6585447,33.081665 L22.7468114,33.2836167 C22.8045976,33.4186747 22.8668712,33.5519292 22.9209319,33.6884219 C23.3632393,34.776674 23.7029711,35.9034146 23.9344543,37.0505266 L23.9277232,37.0337622 C23.9904201,37.1317664 24.0186993,37.2587086 23.9867794,37.3749118 C23.9562141,37.4909921 23.8775149,37.5882994 23.7808236,37.6542094 C23.6837937,37.7205702 23.5666974,37.757911 23.4481194,37.7601244 C23.3293297,37.7629116 23.2108787,37.7280712 23.1120707,37.6668749 L23.1055089,37.662817 L23.1007251,37.6571196 L22.2935395,36.7003185 C22.0236168,36.3822046 21.7585202,36.05909 21.4797073,35.7513052 C21.196915,35.4457749 20.8925747,35.1594682 20.573502,34.8894341 C20.2535827,34.6200969 19.9121999,34.3754348 19.5598102,34.1473323 L19.2923006,33.9807539 L19.0178481,33.8249965 C18.92738,33.7713832 18.8321281,33.7259676 18.7388236,33.67715 C18.6452227,33.6288242 18.5518759,33.5800475 18.4553963,33.5372962 C18.1848538,33.4068056 17.906452,33.2921163 17.6235096,33.1890969 C17.5850704,33.3204566 17.5460623,33.4522666 17.5064801,33.5845278 C17.4270612,33.8499407 17.2264395,34.024829 17.0035924,34.0224725 L16.2534925,34.0145711 L15.8766525,34.456277 C15.8051077,34.5401401 15.6426715,34.5856786 15.4822673,34.5667828 C14.7449477,34.4799887 14.0001718,34.4208047 13.2526726,34.3892376 C13.2525203,35.6493309 13.0682575,36.9087201 12.7005171,38.1380309 L12.1885138,39.8496272 C12.1298847,40.0456144 11.8051757,40.0516761 11.7364889,39.8580951 L11.3667246,38.8158998 C10.8553417,37.3746003 10.6008746,35.8839585 10.6042266,34.3928042 Z\"\n                      id=\"Combined-Shape\" fill=\"#72C0BC\"></path>\n                    <text id=\"#8\" transform=\"translate(12.500000, 20.500000) rotate(270.000000) translate(-12.500000, -20.500000) \"\n                      font-family=\".AppleSystemUIFont\" font-size=\"13\" font-weight=\"normal\" fill=\"#FFFFFF\">\n                      <tspan x=\"4\" y=\"25\">#{{squad}}</tspan>\n                    </text>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </g>\n        </g>\n      </svg>\n    </div>\n    <h3 class=\"You-are-in-3rd-posit\">You are in 3rd position!</h3>\n    <p>To go back to earth with your teacher all of your squad has to complete this adventure, so you can all go\n      back together. Share this link with your squad mates to win the competition!</p>\n    <div class=\"bottom\">\n      <button class=\"button main-button\" (click)=\"linkedinPost()\" [ngClass]=\"{'color': color}\">\n        <p>\n          Share post in linkedIn\n        </p>\n      </button>\n      <div *ngIf=\"isShareClicked\" class=\"modal\">\n        <div class=\"center\">\n            <p>Are you sure to post?</p>\n        </div>\n        <div class=\"inline\">\n            <button>YES</button>\n            <button>NO</button>\n        </div>\n      </div>\n      <div class=\"center\">\n        <a [routerLink]=\"['/about']\">About the squad</a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"left-part padding\">\n    <div>\n      <h1>Congratulations!</h1>\n      <h2>…to save your teacher, you have to go back to earth</h2>\n    </div>\n    <div class=\"animation\">\n\n      <lottie-animation-view [options]=\"lottieConfig\" (animCreated)=\"handleAnimation($event)\">\n      </lottie-animation-view>\n    </div>\n    <div id=\"player\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profs/profs.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/profs/profs.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfsComponent", function() { return ProfsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_linkedin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/linkedin.service */ "./src/app/services/linkedin.service.ts");
/* harmony import */ var _enviroments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../enviroments/environment */ "./src/enviroments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfsComponent = /** @class */ (function () {
    function ProfsComponent(http, route, data, linkedIn) {
        this.http = http;
        this.route = route;
        this.data = data;
        this.linkedIn = linkedIn;
        this.animationSpeed = 5;
        this.url = _enviroments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].DB;
        this.color = true;
        this.isShareClicked = false;
        this.datas = {
            name: "",
            surname: "",
            city: "",
            date: "",
            course: "",
            token: ""
        };
        this.percentage = 0;
        this.squad = 0;
        this.course = "";
        this.rocket = "78";
        this.monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        this.webText = "Ironhack is a Global Tech School offering intensive & immersive in-person courses in Web Development, UX/UI Design & Data Analytics.";
        this.webLink = "https://www.ironhack.com/en/courses/web-development-bootcamp";
        this.uxLink = "https://www.ironhack.com/en/courses/ux-ui-design-bootcamp-learn-ux-design";
        this.lottieConfig = {
            path: "../../../assets/animations/profs/profs.json",
            autoplay: true,
            loop: true
        };
        this.p = (2.04 * this.percentage).toString();
        this.rocket = (2.04 * this.percentage + 7).toString();
    }
    ProfsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datas = this.data.getData();
        this.course = this.getCourseCode(this.datas.course);
        return this.http.get(this.url).subscribe(function (data) {
            Object.values(data).forEach(function (e) {
                var course = _this.getCourseCode(_this.datas.course);
                var year = new Date(e["start_at"]).getFullYear().toString();
                if (e["campus"].name == _this.datas.city &&
                    course == e["course"].course_code &&
                    _this.datas.date.includes(_this.monthNames[new Date(e["start_at"]).getMonth()]) &&
                    _this.datas.date.includes(year)) {
                    var squadName = e["squap_name"];
                    _this.squad = parseInt(squadName.replace(/[^0-9]/g, ""));
                }
            });
        });
    };
    ProfsComponent.prototype.linkedinPost = function () {
        if (!this.isShareClicked) {
            var data = {
                token: this.datas.token,
                header: this.course.includes("web")
                    ? "Ironhack " + this.datas.city + " - Developer Squad " + this.squad
                    : "Ironhack " + this.datas.city + " - Designer Squad " + this.squad,
                url: this.course.includes("web") ? this.webLink : this.uxLink,
                text: this.webText
            };
            this.linkedIn.sharePost(data).subscribe(function (data) { return console.log(data); });
            this.isShareClicked = true;
        }
    };
    ProfsComponent.prototype.handleAnimation = function (anim) {
        this.anim = anim;
    };
    ProfsComponent.prototype.stop = function () {
        this.anim.stop();
    };
    ProfsComponent.prototype.play = function () {
        this.anim.play();
    };
    ProfsComponent.prototype.pause = function () {
        this.anim.pause();
    };
    ProfsComponent.prototype.setSpeed = function (speed) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    };
    ProfsComponent.prototype.getCourseCode = function (course) {
        if (course.includes("Full-Time") && course.includes("Web Development")) {
            return "webft";
        }
        else if (course.includes("Web Development")) {
            return "webpt";
        }
        else if (course.includes("Full-Time") && course.includes("UX/UI")) {
            return "uxft";
        }
        else if (course.includes("UX/UI")) {
            return "uxpt";
        }
        else if (course.includes("Full-Time") &&
            course.includes("Data Analytics")) {
            return "dataft";
        }
        else if (course.includes("Data Analytics")) {
            return "datapt";
        }
    };
    ProfsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-profs",
            template: __webpack_require__(/*! ./profs.component.html */ "./src/app/components/profs/profs.component.html"),
            styles: [__webpack_require__(/*! ./profs.component.css */ "./src/app/components/profs/profs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _services_linkedin_service__WEBPACK_IMPORTED_MODULE_4__["LinkedinService"]])
    ], ProfsComponent);
    return ProfsComponent;
}());



/***/ }),

/***/ "./src/app/components/routes.ts":
/*!**************************************!*\
  !*** ./src/app/components/routes.ts ***!
  \**************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _hand_button_hand_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hand-button/hand-button.component */ "./src/app/components/hand-button/hand-button.component.ts");
/* harmony import */ var _spaceship_spaceship_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spaceship/spaceship.component */ "./src/app/components/spaceship/spaceship.component.ts");
/* harmony import */ var _boarding_boarding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boarding/boarding.component */ "./src/app/components/boarding/boarding.component.ts");
/* harmony import */ var _takeoff_takeoff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./takeoff/takeoff.component */ "./src/app/components/takeoff/takeoff.component.ts");
/* harmony import */ var _jeep_jeep_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jeep/jeep.component */ "./src/app/components/jeep/jeep.component.ts");
/* harmony import */ var _profs_profs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profs/profs.component */ "./src/app/components/profs/profs.component.ts");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash/splash.component */ "./src/app/components/splash/splash.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _crash_crash_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crash/crash.component */ "./src/app/components/crash/crash.component.ts");









var routes = [
    { path: '', redirectTo: "splash", pathMatch: "prefix" },
    { path: "handButton", component: _hand_button_hand_button_component__WEBPACK_IMPORTED_MODULE_0__["HandButtonComponent"] },
    { path: "spaceship", component: _spaceship_spaceship_component__WEBPACK_IMPORTED_MODULE_1__["SpaceshipComponent"] },
    { path: "boarding", component: _boarding_boarding_component__WEBPACK_IMPORTED_MODULE_2__["BoardingComponent"] },
    { path: "takeoff", component: _takeoff_takeoff_component__WEBPACK_IMPORTED_MODULE_3__["TakeoffComponent"] },
    { path: "jeep", component: _jeep_jeep_component__WEBPACK_IMPORTED_MODULE_4__["JeepComponent"] },
    { path: "profs", component: _profs_profs_component__WEBPACK_IMPORTED_MODULE_5__["ProfsComponent"] },
    { path: "splash", component: _splash_splash_component__WEBPACK_IMPORTED_MODULE_6__["SplashComponent"] },
    { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: "crash", component: _crash_crash_component__WEBPACK_IMPORTED_MODULE_8__["CrashComponent"] },
    { path: "**", redirectTo: "splash" },
];


/***/ }),

/***/ "./src/app/components/spaceship/spaceship.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/spaceship/spaceship.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n    opacity: 100;\n  }\n\nul {\n  max-height: 25rem;\n}\n\n.row {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n}\n\n.selected-color > span {\n  color: #000;\n}"

/***/ }),

/***/ "./src/app/components/spaceship/spaceship.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/spaceship/spaceship.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container reverse\">\n    <div class=\"right-bar\">\n        <div class=\"top\">\n            <div class=\"-Go-back\"><a [routerLink]=\"['/handButton']\">< Go back</a>\n            </div>\n            <div class=\"row\">\n    \n                <svg width=\"28px\" height=\"48px\" viewBox=\"0 0 28 48\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                    <desc>Created with Sketch.</desc>\n                    <defs></defs>\n                    <g id=\"Final-Design\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <g id=\"01_step1_002\" transform=\"translate(-1057.000000, -200.000000)\" fill=\"#008D9C\">\n                            <g id=\"formulary\" transform=\"translate(1000.000000, 0.000000)\">\n                                <path d=\"M69.3715977,241.271365 C68.5550606,241.30911 67.7414481,241.375928 66.9352954,241.471827 L66.8654581,241.480139 C66.5955425,241.480139 66.3504206,241.289591 66.2382068,241.145818 L66.0073176,240.850071 L65.1531657,240.859326 C64.8930293,240.862153 64.6590695,240.652045 64.5663647,240.333428 C64.5151965,240.157566 64.4648515,239.982363 64.4153214,239.807819 C64.0675741,239.936318 63.7254649,240.080017 63.3934985,240.244746 C63.280939,240.295998 63.1720344,240.354579 63.0628334,240.41257 C62.9539781,240.471151 62.8429003,240.52565 62.7373047,240.589986 L62.4170608,240.776846 L62.1050156,240.97674 C61.693845,241.250463 61.2955651,241.544106 60.9223258,241.867311 C60.5500744,242.191303 60.1950106,242.53492 59.8651357,242.901507 C59.5397552,243.270849 59.2305253,243.658586 58.9156649,244.040323 L57.9739482,245.188484 L57.9680215,245.195666 L57.9606624,245.200191 C57.8561534,245.264527 57.7398897,245.322764 57.6046602,245.332995 C57.5882628,245.335897 57.5706306,245.332355 57.5537392,245.332158 C57.5366997,245.330437 57.5194133,245.33147 57.5026701,245.327141 C57.469332,245.317845 57.4344133,245.31209 57.4044337,245.294285 C57.3399799,245.266642 57.2911827,245.217849 57.2473245,245.169548 C57.1643495,245.067977 57.116145,244.95111 57.0794483,244.834981 C57.0436407,244.718163 57.0199335,244.599722 57.0011654,244.481084 L57.0016593,244.46072 L57.0005233,244.473017 C56.993263,243.762272 57.061668,243.051231 57.198231,242.353717 C57.3399305,241.657137 57.5460838,240.97428 57.8058251,240.312918 C58.0684311,239.65254 58.3818592,239.013213 58.7312431,238.394889 C59.0837386,237.778139 59.472832,237.182835 59.8883489,236.607057 C60.7219511,235.456781 61.6603093,234.385695 62.656009,233.37496 C62.7203663,233.30921 62.7851817,233.243926 62.8503398,233.178994 C58.9835034,212.401526 67.4409051,202.771578 69.3572313,200.785703 C70.2501508,199.7249 71.6146447,199.740008 72.4937843,200.820445 L72.5181829,200.85046 C72.5181829,200.85046 83.4790351,210.063674 79.1239067,233.24066 C79.1604257,233.278563 79.1963869,233.316994 79.2314465,233.356279 C80.1951416,234.382065 81.0709227,235.491467 81.8229329,236.679764 C82.005873,236.979852 82.1984934,237.274135 82.3664684,237.582928 L82.6261603,238.041494 L82.8683682,238.509553 L82.9893734,238.743484 C83.0306633,238.821002 83.0651375,238.901914 83.1033652,238.980957 L83.327694,239.457476 L83.3834552,239.576802 L83.4349688,239.697998 L83.5379467,239.94034 C83.6053639,240.10241 83.6780164,240.262315 83.7410872,240.426106 C84.2571126,241.732009 84.6534663,243.084098 84.9235301,244.460632 L84.9156771,244.440515 C84.9888235,244.55812 85.0218159,244.71045 84.9845759,244.849894 C84.9489165,244.98919 84.8571007,245.105959 84.7442942,245.185051 C84.6310926,245.264684 84.4944803,245.309493 84.3561392,245.312149 C84.2175513,245.315494 84.0793584,245.273685 83.9640825,245.20025 L83.956427,245.19538 L83.950846,245.188544 L83.0091294,244.040382 C82.6942196,243.658645 82.3849402,243.270908 82.0596585,242.901566 C81.7297342,242.53493 81.3746704,242.191362 81.002419,241.867321 C80.6291798,241.544116 80.2308999,241.250522 79.8197786,240.976799 L79.507684,240.776905 L79.1874895,240.589996 C79.0819433,240.52566 78.9708161,240.471161 78.8619609,240.41258 C78.7527599,240.354589 78.6438552,240.296057 78.5312957,240.244755 C78.2156628,240.088167 77.8908607,239.95054 77.5607612,239.826916 C77.5159155,239.984548 77.470406,240.14272 77.4242267,240.301433 C77.3315713,240.619929 77.0975128,240.829795 76.8375245,240.826967 L75.9624079,240.817485 L75.5227612,241.347532 C75.4392924,241.448168 75.2497834,241.502814 75.0626452,241.480139 C74.2024389,241.375986 73.3335338,241.304966 72.4614513,241.267085 C72.4612737,242.779197 72.2463005,244.290464 71.81727,245.765637 L71.2199328,247.819553 C71.1515321,248.054737 70.772705,248.062011 70.6925704,247.829714 L70.2611787,246.57908 C69.6645653,244.84952 69.367687,243.06075 69.3715977,241.271365 Z\"\n                                    id=\"Combined-Shape\"></path>\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n                <div class=\"Step-1-of-5\">Step 4 <span>of 5</span></div>\n            </div>\n            <div class=\"title\">\n                <h3>Propel the rocket</h3>\n            </div>\n            <div class=\"description\">\n                <p>The last step! Please, select the month when you started the bootcamp and pick up your teachers!</p>\n            </div>\n            <div class=\"select\" [ngClass]=\"{'selected-color': color}\" tabindex=\"0\" (click)=\"toggleOptList(select)\" #select>\n                    <span class=\"value\">Select date</span>\n                    <ul class=\"optList hidden\">\n                        <li class=\"option\" *ngFor=\"let c of campus\" (click)=\"prueba(c.name)\">{{c.name}}</li>\n                    </ul>\n                </div>\n        </div>\n        <div class=\"bottom\">\n            <button (click)=\"scroll(target)\" [disabled]=\"!submit\" (click)=\"onConfirm()\" [ngClass]=\"{'color' : color}\" class=\"button main-button\"><p>Confirm campus</p></button>\n        </div>\n    </div>\n    <div class=\"left-part\">\n        <h1>Rocket on its way!</h1>\n        <h2>tell us what month you started your bootcamp</h2>\n        <div #target class=\"animation\">\n            <lottie-animation-view [options]=\"lottieConfig\" (animCreated)=\"handleAnimation($event)\">\n            </lottie-animation-view>\n            <div id=\"player\">\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/spaceship/spaceship.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/spaceship/spaceship.component.ts ***!
  \*************************************************************/
/*! exports provided: SpaceshipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceshipComponent", function() { return SpaceshipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpaceshipComponent = /** @class */ (function () {
    function SpaceshipComponent(router, data) {
        this.router = router;
        this.data = data;
        this.animationSpeed = 1;
        this.campus = [
            { name: "2017 - September" },
            { name: "2017 - October" },
            { name: "2017 - November" },
            { name: "2017 - December" },
            { name: "2018 - January" },
            { name: "2018 - February" },
            { name: "2018 - March" },
            { name: "2018 - April" },
            { name: "2018 - May" },
            { name: "2018 - June" },
            { name: "2018 - July" },
            { name: "2018 - August" },
            { name: "2018 - September" }
        ];
        this.selectedValue = "";
        this.color = false;
        this.submit = true;
        this.lottieConfig = {
            path: '../../../assets/animations/spaceship/spaceship.json',
            autoplay: false,
            loop: false
        };
    }
    SpaceshipComponent.prototype.scroll = function (el) {
        if (this.selectedValue !== '')
            el.scrollIntoView();
    };
    SpaceshipComponent.prototype.onClick = function () {
        this.color = true;
    };
    SpaceshipComponent.prototype.onConfirm = function () {
        var _this = this;
        if (this.selectedValue != "") {
            this.submit = false;
            this.play();
            setTimeout(function () {
                _this.router.navigate(["/profs"]);
            }, 2000);
        }
    };
    SpaceshipComponent.prototype.ngOnInit = function () {
    };
    SpaceshipComponent.prototype.handleAnimation = function (anim) {
        this.anim = anim;
    };
    SpaceshipComponent.prototype.stop = function () {
        this.anim.stop();
    };
    SpaceshipComponent.prototype.play = function () {
        this.anim.play();
    };
    SpaceshipComponent.prototype.pause = function () {
        this.anim.pause();
    };
    SpaceshipComponent.prototype.setSpeed = function (speed) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    };
    SpaceshipComponent.prototype.toggleOptList = function (select) {
        var optList = select.querySelector(".optList");
        optList.classList.toggle("hidden");
    };
    SpaceshipComponent.prototype.prueba = function (course) {
        var value = document.querySelector(".value");
        value.innerHTML = course;
        this.color = true;
        this.selectedValue = course;
        this.data.addDate(this.selectedValue);
    };
    SpaceshipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spaceship',
            template: __webpack_require__(/*! ./spaceship.component.html */ "./src/app/components/spaceship/spaceship.component.html"),
            styles: [__webpack_require__(/*! ./spaceship.component.css */ "./src/app/components/spaceship/spaceship.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SpaceshipComponent);
    return SpaceshipComponent;
}());



/***/ }),

/***/ "./src/app/components/splash/splash.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/splash/splash.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n    padding-top: 40px;\n  }\n  \n  .space-man {\n    float: left;\n    width: 55%;\n  }\n  \n  button {\n    opacity: 100;\n  }\n  \n  .inline {\n      display: inline\n  }\n  \n  .paragraph {\n    padding-bottom: 20px;\n  }\n  \n  a {\n    color: #57cfff;\n  }\n  "

/***/ }),

/***/ "./src/app/components/splash/splash.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/splash/splash.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"right-bar\">\n      <div class=\"section\">\n        <h3 class=\"paragraph\">How to win</h3>\n        <p>To win the competition all your mates from your bootcamp have to fulfill this adventure. All teachers are\n          prisoners of the moon and you have to go there to save them and come back to earth. You\n          will reach the moon by following the next 5 steps. The thing is, you only can go back to earth if your whole\n          squad\n          finishes this adventure.</p>\n      </div>\n      <div class=\"section\">\n        <h3  class=\"paragraph\">Price</h3>\n        <p>The first squad to save their teacher will win a ticket for karts for each one.</p>\n      </div>\n      \n      <div class=\"section\">\n          <input [(ngModel)]=\"checkboxValue\" (change)=\"togle()\" type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\"\n            id=\"myonoffswitch\" checked><label for=\"\"><p class=\"inline\" for=\"\">I agree to terms. <a href=\"/client/src/assets/pdf/Terms & Conditions Squad competition.pdf\" download>Download</a></p></label>\n      </div>\n      <div class=\"center\">\n        <button (click)=\"onClick()\" class=\"main-button\">\n          <p>Start Now</p>\n        </button>\n      </div>\n    </div>\n    <div class=\"left-part\">\n      <div>\n        <h1>Hi Ironhacker!</h1>\n        <h2>Participate in this competition and be the faster squad to save his teacher!</h2>\n  \n      </div>\n      <div class=\"space-man\">\n        <!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n          y=\"0px\" viewBox=\"0 0 632 400\" style=\"enable-background:new 0 0 632 400;\" xml:space=\"preserve\">\n          <style type=\"text/css\">\n            .st0 {\n              fill: #4F5B77;\n              stroke: #4F5B77;\n              stroke-width: 0.5;\n            }\n  \n            .st1 {\n              fill: #E5CDF8;\n            }\n  \n            .st2 {\n              opacity: 0.2;\n              fill: #FFFFFF;\n              enable-background: new;\n            }\n  \n            .st3 {\n              fill: #B0BBC8;\n              fill-opacity: 0.2;\n            }\n  \n            .st4 {\n              fill: #ADDADF;\n              fill-opacity: 0.1;\n            }\n  \n            .st5 {\n              fill: #4F5B77;\n            }\n  \n            .st6 {\n              fill: #D1EAE9;\n            }\n  \n            .st7 {\n              fill: none;\n              stroke: #4F5B77;\n              stroke-width: 0.5234;\n            }\n  \n            .st8 {\n              fill: #FFFFFF;\n              stroke: #4F5B77;\n              stroke-width: 0.5234;\n            }\n  \n            .st9 {\n              fill: #F67373;\n              fill-opacity: 0.32;\n            }\n  \n            .st10 {\n              fill: #FFFFFF;\n              stroke: #FFFEFD;\n              stroke-width: 0.5;\n            }\n  \n            .st11 {\n              fill: #FCD2D2;\n            }\n  \n            .st12 {\n              fill: none;\n              stroke: #4F5B77;\n              stroke-width: 0.5;\n            }\n  \n            .st13 {\n              fill: #FFFFFF;\n            }\n  \n            .st14 {\n              fill: none;\n            }\n  \n            .st15 {\n              fill: #2D354D;\n              stroke: #2D354D;\n              stroke-width: 0.5;\n            }\n  \n            .st16 {\n              fill: #4F5B77;\n              stroke: #4F5B77;\n              stroke-width: 0.8571;\n            }\n  \n            .st17 {\n              fill: #C6CAD3;\n            }\n  \n            .st18 {\n              fill: #FFD26F;\n            }\n  \n            .st19 {\n              fill: #C1EDFF;\n            }\n  \n          </style>\n          <title>00_splash_002 copy</title>\n          <desc>Created with Sketch.</desc>\n          <g id=\"_x30_0_x5F_splash_x5F_002-copy\">\n            <g id=\"jupiter\" transform=\"translate(40.000000, 85.000000)\">\n              <path id=\"Shape\" class=\"st0\" d=\"M28.6,10.6c0,1.3-0.2,2.6-0.7,3.8c-0.4,1.2-1.1,2.4-1.9,3.3c-0.8,1-1.9,1.8-3.1,2.4\n              c-1.2,0.6-2.5,0.9-3.8,0.9c-1.3,0-2.7-0.3-3.9-0.8c-1.2-0.6-2.3-1.4-3.2-2.4c-0.9-1-1.6-2.1-2-3.4c-0.5-1.2-0.7-2.5-0.7-3.9\n              S9.5,8,9.9,6.7c0.5-1.3,1.1-2.4,2-3.4c0.9-1,2-1.8,3.2-2.4c1.2-0.6,2.6-0.9,4-0.9c0.7,0,1.4,0.1,2,0.3c0.7,0.2,1.3,0.4,1.9,0.7\n              c1.2,0.6,2.3,1.5,3.1,2.5s1.5,2.2,1.9,3.4C28.5,8,28.7,9.3,28.6,10.6z M28.6,10.6c0-1.3-0.3-2.5-0.7-3.7c-0.5-1.2-1.2-2.3-2-3.2\n              c-1.7-1.8-4.2-2.9-6.7-2.9c-2.5,0-4.9,1.2-6.6,3c-0.8,0.9-1.5,2-1.9,3.2s-0.7,2.4-0.7,3.6c0,1.3,0.2,2.5,0.6,3.7\n              c0.4,1.2,1.1,2.3,1.9,3.2c0.8,0.9,1.8,1.7,3,2.3c1.1,0.5,2.4,0.8,3.7,0.8c1.3,0,2.5-0.3,3.7-0.8c1.2-0.5,2.2-1.3,3.1-2.2\n              s1.5-2.1,2-3.3C28.4,13.2,28.6,11.9,28.6,10.6z\" />\n              <ellipse id=\"Oval-3\" class=\"st1\" cx=\"19\" cy=\"10.3\" rx=\"9.2\" ry=\"9.7\" />\n  \n              <ellipse id=\"Oval-3_1_\" transform=\"matrix(0.9613 -0.2756 0.2756 0.9613 -0.5758 5.0071)\" class=\"st2\" cx=\"17.5\"\n                cy=\"4.6\" rx=\"7.2\" ry=\"1\" />\n  \n              <ellipse id=\"Oval-3-Copy-2\" transform=\"matrix(0.9613 -0.2756 0.2756 0.9613 -3.77 6.2752)\" class=\"st2\" cx=\"20.4\"\n                cy=\"16.5\" rx=\"7.2\" ry=\"1\" />\n  \n              <ellipse id=\"Oval-3_2_\" transform=\"matrix(0.9613 -0.2756 0.2756 0.9613 -2.0709 5.5567)\" class=\"st2\" cx=\"18.7\"\n                cy=\"10.1\" rx=\"9.2\" ry=\"1\" />\n  \n              <ellipse id=\"Oval-3_3_\" transform=\"matrix(0.9659 -0.2588 0.2588 0.9659 -1.3027 4.9901)\" class=\"st3\" cx=\"18.3\"\n                cy=\"7.4\" rx=\"8.9\" ry=\"1\" />\n  \n              <ellipse id=\"Oval-3-Copy\" transform=\"matrix(0.9659 -0.2588 0.2588 0.9659 -2.7592 5.5197)\" class=\"st3\" cx=\"19.6\"\n                cy=\"13.2\" rx=\"8.7\" ry=\"1\" />\n              <path id=\"Shape_1_\" class=\"st0\" d=\"M31.4,5.3c1.3-0.1,2.6,0,3.8,0.4C35.8,5.8,36.4,6,37,6.4c0.1,0.1,0.4,0.3,0.5,0.7\n              c0.1,0.3,0,0.5-0.1,0.7c-0.1,0.2-0.2,0.3-0.3,0.4c-0.4,0.5-0.9,0.9-1.5,1.3c-0.5,0.4-1.1,0.7-1.6,1c-1.1,0.6-2.6,1.4-2.9,1.5\n              c-1,0.5-2.1,0.8-2.4,0.9c-0.6,0.2-1.2,0.4-1.8,0.5c-2.5,0.7-4.9,1.3-7.4,1.9c-2.5,0.5-5,1-7.6,1.3c-1.3,0.2-2.6,0.3-3.8,0.4\n              c-1.3,0.1-2.6,0.1-3.8,0.1c-0.6,0-1.3,0-2-0.1c-0.3,0-0.7-0.1-1-0.2c-0.2-0.1-0.3-0.1-0.5-0.3c-0.2-0.1-0.3-0.3-0.4-0.5\n              c-0.1-0.2-0.1-0.5,0-0.7s0.1-0.4,0.2-0.5c0.2-0.3,0.4-0.6,0.6-0.8c0.5-0.5,1-0.9,1.5-1.2C3.7,12,4.9,11.4,6,10.9\n              c0.6-0.3,1.2-0.5,1.8-0.7c0.3-0.1,0.6-0.2,0.9-0.3c0.2,0,0.3-0.1,0.5-0.1c0.2,0,0.3,0,0.5,0l0,0.1C9.4,9.9,9.1,10,8.8,10\n              c-0.3,0.1-0.6,0.2-0.9,0.3c-0.6,0.2-1.2,0.5-1.7,0.8c-1.1,0.6-2.2,1.3-3.2,2c-0.5,0.4-1,0.8-1.4,1.2c-0.2,0.2-0.4,0.4-0.5,0.7\n              C1,15.3,1,15.5,1,15.7C1.1,15.8,1.3,16,1.6,16c0.3,0.1,0.5,0.1,0.8,0.2c0.6,0.1,1.2,0.1,1.9,0.1c1.3,0,2.5-0.1,3.8-0.2\n              c1.3-0.1,2.5-0.2,3.8-0.3c2.5-0.3,5-0.6,7.5-1.1c2.5-0.5,5-1.1,7.4-1.8c0.6-0.2,1.2-0.3,1.8-0.5c0.9-0.2,1.7-0.5,2.4-0.8\n              c0.2-0.1,1.7-0.8,2.8-1.4c0.5-0.3,1.1-0.6,1.6-1c0.5-0.3,1-0.7,1.4-1.2c0.1-0.1,0.3-0.5,0.3-0.9c-0.1-0.2-0.2-0.4-0.4-0.5\n              c-0.5-0.4-1.1-0.6-1.7-0.8c-1.2-0.3-2.5-0.5-3.7-0.4c-1.3,0.1-2.5,0.3-3.7,0.8C28.8,5.6,30.1,5.4,31.4,5.3z\" />\n            </g>\n            <g id=\"tree\" transform=\"translate(116.000000, 129.000000)\">\n              <path id=\"Shape_2_\" class=\"st0\" d=\"M8.5,0.1c0.1,0.6-0.2,1.1-0.4,1.6C7.8,2.2,7.5,2.7,7.2,3.1C6.9,3.5,6.6,4,6.2,4.4\n              C5.9,4.7,5.5,5.1,5.1,5.5L5,5.4C5,5.3,5,5.1,5,5c0-0.1,0-0.3,0.1-0.5C5.2,4.2,5.3,4,5.5,3.7c0.3-0.5,0.7-0.8,1.1-1.2\n              C7,2.2,7.3,1.8,7.7,1.4s0.6-0.8,0.7-1.4L8.5,0.1L8.5,0.1z\" />\n              <path id=\"Shape_3_\" class=\"st0\" d=\"M8.5,0c0.1,0.5,0.4,1,0.7,1.4c0.3,0.4,0.7,0.7,1.1,1.1c0.4,0.4,0.8,0.7,1.1,1.2\n              c0.2,0.2,0.3,0.5,0.4,0.8c0.1,0.1,0.1,0.3,0.1,0.5c0,0.2,0,0.3,0,0.5l-0.1,0C11.4,5,11,4.7,10.7,4.3C10.3,4,10.1,3.5,9.7,3\n              C9.4,2.6,9.1,2.2,8.8,1.7S8.3,0.6,8.4,0L8.5,0L8.5,0z\" />\n              <path id=\"Shape_4_\" class=\"st0\" d=\"M8.5,0.1c0.1,6.2,0.5,12.5,1,18.7c0.2,3.1,0.4,6.2,0.6,9.4c0.1,3.1,0.2,6.2,0.2,9.4\n              c0.1,6.2,0,12.5,0.1,18.7c0,3.1,0.1,6.2,0.1,9.4c0,1.6,0.1,3.1,0.2,4.7c0,0.8,0.1,1.6,0.2,2.3c0,0.4,0.1,0.8,0.1,1.2\n              c0,0.2,0.1,0.4,0.1,0.6c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2V75c-0.2,0-0.2-0.1-0.3-0.2C11,74.7,11,74.6,11,74.5\n              c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.4-0.2-0.8-0.2-1.2c-0.1-0.8-0.2-1.6-0.3-2.3c-0.2-1.6-0.3-3.1-0.4-4.7c-0.2-3.1-0.3-6.2-0.4-9.4\n              C9.3,50,9.5,43.8,9.6,37.5c0-3.1,0-6.2-0.1-9.4s-0.3-6.2-0.4-9.4C8.7,12.5,8.4,6.3,8.5,0.1L8.5,0.1L8.5,0.1z\" />\n              <path id=\"Shape_5_\" class=\"st0\" d=\"M8.7,10.9c0.1,0,0.2,0,0.3,0.1c0.1,0,0.1,0.1,0.2,0.1c0.1,0.1,0.3,0.2,0.4,0.3\n              c0.2,0.2,0.4,0.5,0.6,0.7c0.4,0.5,0.8,1,1.2,1.5c0.4,0.5,0.9,0.9,1.2,1.4c0.4,0.5,0.6,1,1,1.6l-0.1,0.1c-0.4-0.1-0.6-0.2-0.9-0.4\n              c-0.3-0.2-0.5-0.4-0.7-0.7c-0.4-0.5-0.7-1-1.1-1.6c-0.3-0.6-0.6-1.1-1-1.6c-0.2-0.3-0.3-0.6-0.5-0.8c-0.1-0.1-0.2-0.3-0.3-0.4\n              C8.9,11.2,8.8,11,8.7,10.9L8.7,10.9z\" />\n              <path id=\"Shape_6_\" class=\"st0\" d=\"M8.8,10.8c0.1,0,0.1,0.1,0.1,0.1c0,0.1,0,0.1,0,0.1c0,0.1,0,0.2-0.1,0.3\n              c-0.1,0.2-0.1,0.3-0.2,0.5c-0.1,0.3-0.3,0.6-0.5,0.8c-0.4,0.6-0.7,1.1-1.1,1.6c-0.4,0.5-0.8,1.1-1.3,1.5c-0.3,0.2-0.5,0.4-0.8,0.6\n              c-0.3,0.2-0.6,0.3-1,0.3L4,16.5c0.4-0.6,0.8-1,1.2-1.5c0.4-0.5,0.9-0.8,1.3-1.3c0.4-0.5,0.9-0.9,1.3-1.4c0.2-0.2,0.4-0.5,0.6-0.7\n              c0.1-0.1,0.2-0.3,0.3-0.4c0-0.1,0.1-0.1,0.1-0.2C8.8,11,8.8,10.9,8.8,10.8L8.8,10.8z\" />\n              <path id=\"Shape_7_\" class=\"st0\" d=\"M9.6,24.2c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.1,0.3,0.2c0.2,0.1,0.3,0.3,0.5,0.4\n              c0.3,0.3,0.6,0.6,0.9,0.9c0.5,0.7,1.1,1.3,1.6,2c0.5,0.7,1.1,1.2,1.6,1.9c0.5,0.7,0.9,1.3,1.5,2l0,0.1c-0.4-0.1-0.8-0.3-1.2-0.6\n              c-0.4-0.3-0.7-0.6-1-0.8c-0.6-0.6-1-1.4-1.5-2.1c-0.5-0.7-0.9-1.4-1.4-2.1c-0.2-0.4-0.4-0.7-0.7-1c-0.1-0.2-0.3-0.3-0.4-0.5\n              C10,24.5,9.8,24.3,9.6,24.2L9.6,24.2z\" />\n              <path id=\"Shape_8_\" class=\"st0\" d=\"M9.7,24.2c-0.2,0-0.3,0.2-0.4,0.3C9.2,24.7,9,24.9,8.9,25c-0.3,0.3-0.5,0.7-0.7,1\n              c-0.4,0.7-0.9,1.4-1.4,2.1c-0.4,0.7-0.9,1.5-1.5,2.1c-0.3,0.3-0.6,0.6-1,0.8c-0.4,0.3-0.7,0.5-1.2,0.6l0-0.1c0.5-0.7,1-1.3,1.5-2\n              c0.5-0.7,1.1-1.3,1.6-1.9c0.5-0.7,1.1-1.3,1.6-2c0.3-0.3,0.5-0.7,0.9-0.9c0.2-0.2,0.3-0.3,0.5-0.4c0.1-0.1,0.2-0.1,0.3-0.2\n              C9.5,24.2,9.7,24.1,9.7,24.2L9.7,24.2z\" />\n              <path id=\"Shape_9_\" class=\"st0\" d=\"M9.9,40.1c0.2,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.2,0.4,0.4,0.5,0.6\n              c0.4,0.4,0.7,0.8,1,1.2l1.9,2.5c0.6,0.8,1.3,1.6,1.9,2.4c0.6,0.8,1.1,1.7,1.8,2.4l-0.1,0.1c-0.5-0.2-1-0.5-1.4-0.8\n              c-0.4-0.3-0.8-0.7-1.2-1.1c-0.7-0.8-1.2-1.7-1.8-2.6l-1.6-2.6c-0.3-0.4-0.5-0.9-0.8-1.3c-0.2-0.2-0.3-0.4-0.5-0.6\n              c-0.1-0.1-0.2-0.2-0.3-0.3C10.1,40.2,10,40.2,9.9,40.1L9.9,40.1z\" />\n              <path id=\"Shape_10_\" class=\"st0\" d=\"M10.1,40.2c-0.1,0-0.3,0.1-0.4,0.1c-0.1,0.1-0.2,0.2-0.3,0.3C9.2,40.8,9,41,8.8,41.2\n              c-0.4,0.5-0.7,0.9-1,1.4c-0.7,0.9-1.3,1.9-2,2.8c-0.7,0.9-1.3,2-2.1,2.8c-0.4,0.4-0.8,0.8-1.3,1.2s-1,0.7-1.6,0.8l0-0.1\n              c0.8-0.8,1.5-1.7,2.2-2.6s1.5-1.7,2.2-2.6c0.7-0.9,1.5-1.8,2.2-2.7c0.4-0.4,0.8-0.9,1.2-1.3c0.2-0.2,0.4-0.4,0.6-0.6\n              c0.1-0.1,0.2-0.2,0.4-0.3c0.1-0.1,0.3-0.1,0.4-0.1L10.1,40.2z\" />\n              <path id=\"Shape_11_\" class=\"st0\" d=\"M9.9,54.2c0.2,0,0.4,0,0.5,0.1c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.2,0.5,0.4,0.7,0.6\n              c0.4,0.5,0.9,0.9,1.3,1.4c0.8,0.9,1.6,1.9,2.4,2.8c0.8,0.9,1.7,1.8,2.4,2.8c0.8,0.9,1.5,1.9,2.4,2.7l0,0.1\n              c-0.6-0.2-1.2-0.5-1.7-0.9c-0.5-0.4-1-0.8-1.4-1.3c-0.9-0.9-1.6-2-2.3-3c-0.7-1-1.4-2-2.2-3c-0.4-0.5-0.7-1-1.1-1.5\n              c-0.2-0.2-0.4-0.5-0.6-0.7c-0.1-0.1-0.2-0.2-0.4-0.3S10.1,54.2,9.9,54.2L9.9,54.2z\" />\n              <path id=\"Shape_12_\" class=\"st0\" d=\"M10.1,54.2c-0.1,0-0.3,0.1-0.4,0.1c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.2-0.4,0.5-0.6,0.7\n              c-0.4,0.5-0.8,1-1.1,1.5c-0.7,1-1.4,2-2.2,3c-0.7,1-1.4,2.1-2.3,3c-0.4,0.5-0.9,0.9-1.4,1.3S0.7,64.7,0,64.9l0-0.1\n              c0.9-0.8,1.7-1.8,2.4-2.7s1.6-1.8,2.4-2.8c0.8-0.9,1.6-1.9,2.4-2.8c0.4-0.5,0.8-0.9,1.3-1.4c0.2-0.2,0.4-0.4,0.7-0.6\n              c0.1-0.1,0.3-0.2,0.4-0.3C9.8,54.2,9.9,54.1,10.1,54.2L10.1,54.2z\" />\n            </g>\n            <g id=\"tree_1_\" transform=\"translate(333.000000, 154.000000)\">\n              <path id=\"Shape_13_\" class=\"st0\" d=\"M5.4,0.1c0,0.3-0.1,0.7-0.3,1S4.8,1.6,4.6,1.9C4.4,2.1,4.2,2.4,4,2.6C3.7,2.8,3.5,3,3.2,3.3\n              l-0.1,0c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0.1-0.3c0.1-0.2,0.1-0.3,0.2-0.5c0.2-0.3,0.5-0.5,0.7-0.7s0.5-0.4,0.7-0.7\n              C5.1,0.6,5.3,0.4,5.4,0.1L5.4,0.1L5.4,0.1z\" />\n              <path id=\"Shape_14_\" class=\"st0\" d=\"M5.4,0c0.1,0.3,0.2,0.6,0.4,0.8c0.2,0.2,0.4,0.4,0.7,0.7c0.2,0.2,0.5,0.4,0.7,0.7\n              c0.1,0.1,0.2,0.3,0.2,0.5c0,0.1,0,0.2,0.1,0.3c0,0.1,0,0.2,0,0.3l-0.1,0C7.3,3,7,2.8,6.8,2.6C6.6,2.4,6.4,2.1,6.2,1.8\n              C6,1.6,5.8,1.3,5.6,1C5.4,0.7,5.3,0.4,5.4,0L5.4,0L5.4,0z\" />\n              <path id=\"Shape_15_\" class=\"st0\" d=\"M5.4,0.1c0,3.7,0.3,7.5,0.7,11.2c0.1,1.9,0.3,3.7,0.4,5.6c0.1,1.9,0.1,3.7,0.1,5.6\n              c0,3.7,0,7.5,0,11.2c0,1.9,0,3.7,0.1,5.6c0,0.9,0,1.9,0.1,2.8c0,0.5,0.1,0.9,0.1,1.4c0,0.2,0.1,0.5,0.1,0.7c0,0.1,0,0.2,0.1,0.3\n              c0,0.1,0,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1v0.1c-0.1,0-0.1-0.1-0.2-0.1S7,44.6,7,44.5c0-0.1-0.1-0.2-0.1-0.4\n              c-0.1-0.2-0.1-0.5-0.1-0.7c-0.1-0.5-0.1-0.9-0.2-1.4c-0.1-0.9-0.2-1.9-0.2-2.8c-0.1-1.9-0.2-3.7-0.3-5.6c-0.1-3.8,0-7.5,0.1-11.2\n              c0-1.9,0-3.7,0-5.6s-0.2-3.7-0.3-5.6C5.6,7.5,5.3,3.8,5.4,0.1L5.4,0.1L5.4,0.1z\" />\n              <path id=\"Shape_16_\" class=\"st0\" d=\"M5.5,6.5c0.1,0,0.1,0,0.2,0c0,0,0.1,0.1,0.1,0.1C5.9,6.7,6,6.8,6,6.8C6.2,7,6.3,7.1,6.5,7.3\n              C6.7,7.5,7,7.8,7.2,8.1C7.5,8.4,7.8,8.7,8,9c0.2,0.3,0.4,0.6,0.6,1l0,0.1C8.3,10,8.1,9.9,8,9.7C7.8,9.6,7.6,9.5,7.5,9.4\n              C7.2,9.1,7,8.7,6.8,8.4c-0.2-0.3-0.4-0.6-0.6-1C6.1,7.3,6,7.1,5.9,6.9C5.8,6.9,5.8,6.8,5.7,6.7C5.7,6.7,5.6,6.6,5.5,6.5L5.5,6.5z\" />\n              <path id=\"Shape_17_\" class=\"st0\" d=\"M5.6,6.5C5.7,6.5,5.7,6.5,5.6,6.5c0.1,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2\n              c0,0.1-0.1,0.2-0.1,0.3C5.5,7.2,5.4,7.4,5.2,7.6C5,7.9,4.8,8.2,4.5,8.5C4.3,8.8,4,9.1,3.7,9.4C3.6,9.5,3.4,9.6,3.2,9.7\n              C3,9.8,2.8,9.9,2.6,9.9l0-0.1C2.8,9.5,3,9.2,3.3,9c0.2-0.3,0.6-0.5,0.9-0.8C4.4,7.9,4.7,7.6,5,7.4c0.1-0.1,0.3-0.3,0.4-0.4\n              c0.1-0.1,0.1-0.2,0.2-0.2c0,0,0-0.1,0.1-0.1C5.6,6.6,5.6,6.5,5.6,6.5L5.6,6.5z\" />\n              <path id=\"Shape_18_\" class=\"st0\" d=\"M6.1,14.4c0.1,0,0.2,0,0.2,0c0.1,0,0.1,0.1,0.2,0.1c0.1,0.1,0.2,0.2,0.3,0.3\n              C7,15,7.2,15.2,7.3,15.4c0.3,0.4,0.7,0.8,1,1.2c0.3,0.4,0.7,0.7,1,1.1s0.6,0.8,0.9,1.2l0,0.1c-0.3-0.1-0.5-0.2-0.8-0.4\n              c-0.2-0.2-0.4-0.3-0.6-0.5c-0.4-0.4-0.7-0.8-0.9-1.2c-0.3-0.4-0.6-0.9-0.9-1.3C7,15.4,6.8,15.2,6.7,15c-0.1-0.1-0.2-0.2-0.2-0.3\n              C6.3,14.6,6.2,14.5,6.1,14.4L6.1,14.4z\" />\n              <path id=\"Shape_19_\" class=\"st0\" d=\"M6.2,14.5c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.2-0.2,0.3c-0.2,0.2-0.3,0.4-0.4,0.6\n              c-0.3,0.4-0.6,0.8-0.9,1.3c-0.3,0.4-0.6,0.9-0.9,1.2c-0.2,0.2-0.4,0.4-0.6,0.5c-0.2,0.2-0.5,0.3-0.8,0.4l0-0.1\n              c0.3-0.4,0.6-0.8,0.9-1.2c0.3-0.4,0.7-0.8,1-1.1c0.3-0.4,0.7-0.8,1-1.2c0.2-0.2,0.3-0.4,0.6-0.6c0.1-0.1,0.2-0.2,0.3-0.3\n              c0.1,0,0.1-0.1,0.2-0.1C6.1,14.4,6.2,14.4,6.2,14.5L6.2,14.5z\" />\n              <path id=\"Shape_20_\" class=\"st0\" d=\"M6.3,24c0.1,0,0.2,0,0.3,0.1c0.1,0,0.1,0.1,0.2,0.1c0.1,0.1,0.2,0.2,0.3,0.3\n              c0.2,0.2,0.4,0.5,0.6,0.7L9,26.7c0.4,0.5,0.8,1,1.2,1.4c0.4,0.5,0.7,1,1.2,1.5l0,0.1c-0.3-0.1-0.6-0.3-0.9-0.5\n              c-0.3-0.2-0.5-0.4-0.7-0.7c-0.4-0.5-0.8-1-1.1-1.5l-1-1.6c-0.2-0.3-0.3-0.5-0.5-0.8c-0.1-0.1-0.2-0.3-0.3-0.4\n              c-0.1-0.1-0.1-0.1-0.2-0.2C6.4,24,6.4,24,6.3,24L6.3,24z\" />\n              <path id=\"Shape_21_\" class=\"st0\" d=\"M6.4,24c-0.1,0-0.2,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.2c-0.1,0.1-0.2,0.3-0.4,0.4\n              c-0.2,0.3-0.4,0.5-0.7,0.8c-0.4,0.6-0.8,1.1-1.3,1.7c-0.4,0.6-0.8,1.2-1.3,1.7c-0.3,0.3-0.5,0.5-0.8,0.7s-0.6,0.4-1,0.5l0-0.1\n              c0.5-0.5,1-1,1.4-1.6s1-1,1.4-1.6c0.5-0.5,0.9-1.1,1.4-1.6C5,25,5.2,24.7,5.5,24.5c0.1-0.1,0.3-0.3,0.4-0.4C6,24.1,6,24.1,6.1,24\n              C6.2,24,6.3,23.9,6.4,24L6.4,24z\" />\n              <path id=\"Shape_22_\" class=\"st0\" d=\"M6.3,32.4c0.1,0,0.2,0,0.3,0.1s0.2,0.1,0.2,0.2C7,32.7,7.2,32.9,7.3,33\n              c0.3,0.3,0.6,0.5,0.8,0.8c0.5,0.6,1,1.1,1.5,1.7c0.5,0.6,1.1,1.1,1.5,1.7c0.5,0.6,1,1.1,1.5,1.6l0,0.1c-0.4-0.1-0.8-0.3-1.1-0.5\n              c-0.3-0.2-0.6-0.5-0.9-0.8c-0.6-0.5-1-1.2-1.5-1.8c-0.5-0.6-0.9-1.2-1.4-1.8c-0.2-0.3-0.5-0.6-0.7-0.9C7.1,33,7,32.8,6.8,32.7\n              c-0.1-0.1-0.1-0.1-0.2-0.2S6.4,32.4,6.3,32.4L6.3,32.4z\" />\n              <path id=\"Shape_23_\" class=\"st0\" d=\"M6.4,32.4c-0.1,0-0.2,0-0.2,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.3,0.3-0.4,0.4\n              c-0.2,0.3-0.5,0.6-0.7,0.9c-0.5,0.6-0.9,1.2-1.4,1.8S2.6,37,2,37.5c-0.3,0.3-0.6,0.5-0.9,0.8S0.4,38.7,0,38.8l0-0.1\n              c0.6-0.5,1.1-1.1,1.5-1.6c0.5-0.6,1-1.1,1.5-1.7c0.5-0.6,1-1.1,1.5-1.7c0.3-0.3,0.5-0.6,0.8-0.8c0.1-0.1,0.3-0.3,0.4-0.4\n              c0.1-0.1,0.2-0.1,0.2-0.2S6.3,32.3,6.4,32.4L6.4,32.4z\" />\n            </g>\n            <g id=\"cloud\" transform=\"translate(325.000000, 100.000000)\">\n              <path id=\"Shape_24_\" class=\"st0\" d=\"M0,20.6c0.6-0.4,1.6-0.6,2.9-0.6c1-0.1,9.3-0.4,9.6-0.4c0.2,0,0.5,0,0.6-0.2\n              c0.1-0.1,0-0.4-0.3-0.9c-0.4-0.9-0.6-1.9-0.5-2.9c0.1-1,0.4-2,1-2.8s1.2-1.6,1.9-2.3s1.6-1.2,2.5-1.6s1.9-0.6,2.9-0.6\n              c1,0,2.1,0.2,3,0.5c0.2,0.1,0.5,0.2,0.7,0.3c0.2,0.1,0.4,0.2,0.7,0.4l0.3,0.2c0.1,0,0.1,0.1,0.2,0.1c0,0,0,0-0.2,0.1\n              c-0.2,0.1-0.1,0.3-0.1,0.3l-0.1-0.7c-0.1-1-0.1-2,0.1-3c0.2-1,0.7-1.9,1.2-2.7c1.2-1.6,3-2.7,5-3.3s4.1-0.6,6,0\n              c1,0.3,1.9,0.8,2.7,1.4c0.2,0.2,0.4,0.3,0.6,0.5c0.2,0.2,0.4,0.4,0.5,0.6c0.1,0.2,0.3,0.4,0.5,0.6l0.2,0.3l0.1,0.1\n              c0,0.1,0,0.1,0.1,0.1C42.1,4,42,4,42,4C41.8,4,41.8,4,41.7,4c0,0,0,0,0.2-0.1l0.3-0.2c0.2-0.1,0.4-0.3,0.6-0.4l0.7-0.4\n              c0.2-0.1,0.4-0.2,0.7-0.4C45,2,46,1.6,47.1,1.4c1-0.2,2.1-0.1,3.2,0.3c0.5,0.2,1,0.5,1.4,0.8c0.4,0.3,0.8,0.7,1.1,1.1\n              c0.7,0.8,1.2,1.7,1.5,2.7c0.4,0.9,0.5,2,0.6,3c0,0.5,0,1-0.1,1.5c0,0.1-0.1,0.3-0.1,0.4c-0.1,0.1-0.1,0.3-0.2,0.4l-0.1,0.2\n              l-0.1,0.1c0.1,0.2-0.1-0.9-0.2-0.5c0.1,0,0.2,0,0.3,0c1,0,2,0,2.9,0l5.9-0.1h2.9h1.5h0.7h0.4h0.3c0.1,0.1,0.1,0.1,0.1,0.1h-0.4\n              l-0.4,0l-0.7,0l-1.5,0.1l-2.9,0.1l-5.9,0.3c-1,0-2,0.1-3,0.1c-0.1,0-0.2,0-0.4,0c0,0,0.1-0.1,0-0.1c0,0.4-0.4-0.7-0.3-0.5l0-0.1\n              l0.1-0.1c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.2,0.1-0.3C54,10.1,54,9.7,54,9.2c0-0.9-0.2-1.8-0.6-2.7c-0.3-0.9-0.8-1.7-1.4-2.4\n              c-0.3-0.4-0.6-0.6-1-0.9c-0.4-0.3-0.8-0.5-1.2-0.6c-0.8-0.3-1.8-0.4-2.7-0.2c-0.9,0.1-1.8,0.5-2.6,0.9c-0.2,0.1-0.4,0.2-0.6,0.3\n              L43.3,4c-0.2,0.1-0.4,0.3-0.6,0.4l-0.3,0.2l-0.1,0.1l-0.1,0.1c0,0-0.1,0-0.1,0.1c-0.1,0-0.2,0.1-0.3,0c-0.1,0-0.2-0.1-0.2-0.1\n              c-0.1-0.1-0.1-0.1-0.2-0.2c0-0.1-0.1-0.1-0.1-0.1c0,0,0,0-0.1-0.1L41.1,4c-0.1-0.2-0.3-0.4-0.4-0.6c-0.1-0.2-0.3-0.4-0.5-0.5\n              c-0.1-0.2-0.3-0.3-0.5-0.5c-0.7-0.6-1.5-1-2.4-1.3c-1.8-0.6-3.8-0.6-5.6-0.1s-3.5,1.5-4.7,3c-0.6,0.7-1,1.6-1.2,2.5\n              c-0.2,0.9-0.3,1.8-0.1,2.8l0.1,0.7c0,0,0.1,0.1-0.1,0.3c-0.2,0.1-0.2,0-0.2,0c-0.1-0.1-0.1-0.1-0.2-0.1l-0.1-0.1l-0.3-0.2\n              c-0.2-0.1-0.4-0.2-0.6-0.4c-0.2-0.1-0.4-0.2-0.7-0.3c-0.9-0.4-1.8-0.5-2.8-0.5c-1.9,0-3.7,0.8-5.2,2.1c-1.4,1.2-2.6,2.9-2.9,4.8\n              c-0.1,0.9,0.1,1.9,0.4,2.7c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0,0.3s-0.1,0.1-0.1,0.1\n              c-0.1,0.1-0.1,0.1-0.2,0.1C13,20,12.7,20,12.5,20c-0.2,0-8.6,0.2-9.6,0.3c-1.3,0-2.3,0.2-2.9,0.5V20.6z\" />\n            </g>\n            <g id=\"moon\" transform=\"translate(391.000000, 62.000000)\">\n              <path id=\"Shape_25_\" class=\"st0\" d=\"M25,13.1c0,1.6-0.3,3.2-0.9,4.7c-0.6,1.5-1.4,2.9-2.5,4.1c-1.1,1.2-2.5,2.2-4,3\n              c-1.5,0.7-3.2,1.1-5,1.1s-3.4-0.3-5-1s-3-1.7-4.1-2.9s-2.1-2.6-2.6-4.2C0.3,16.4,0,14.8,0,13.1s0.3-3.3,0.8-4.8s1.4-3,2.6-4.2\n              c1.1-1.2,2.6-2.3,4.1-3C9.1,0.4,10.9,0,12.7,0c0.9,0,1.7,0.1,2.6,0.3c0.9,0.2,1.7,0.5,2.5,0.9c1.6,0.7,2.9,1.8,4,3.1\n              s1.9,2.7,2.5,4.2C24.7,9.9,25,11.5,25,13.1z M24.8,13.1c0-1.6-0.3-3.1-0.9-4.6c-0.6-1.5-1.5-2.8-2.6-4c-2.2-2.3-5.4-3.6-8.7-3.6\n              c-3.2,0-6.4,1.5-8.5,3.7C3,5.8,2.1,7.2,1.6,8.6s-0.9,3-0.9,4.5c0,1.6,0.3,3.1,0.8,4.5s1.4,2.8,2.5,4c1.1,1.2,2.4,2.1,3.9,2.8\n              c1.5,0.7,3.1,1,4.8,1c1.6,0,3.3-0.3,4.8-1c1.5-0.6,2.9-1.6,4-2.8c1.1-1.2,2-2.6,2.6-4C24.5,16.3,24.8,14.7,24.8,13.1z\" />\n              <ellipse id=\"Oval-3_4_\" class=\"st4\" cx=\"12.6\" cy=\"12.8\" rx=\"11.9\" ry=\"12.1\" />\n              <g id=\"Group\" transform=\"translate(0.657895, 0.728291)\">\n                <ellipse id=\"Oval-3-Copy-3\" class=\"st4\" cx=\"11.9\" cy=\"12.1\" rx=\"11.9\" ry=\"12.1\" />\n              </g>\n  \n              <ellipse id=\"Oval-3_5_\" transform=\"matrix(0.9877 -0.1564 0.1564 0.9877 -0.3983 2.2952)\" class=\"st3\" cx=\"14.4\"\n                cy=\"3.7\" rx=\"1.7\" ry=\"1.1\" />\n  \n              <ellipse id=\"Oval-3_6_\" transform=\"matrix(0.9877 -0.1564 0.1564 0.9877 -0.4019 2.2494)\" class=\"st3\" cx=\"14.1\"\n                cy=\"3.7\" rx=\"1.5\" ry=\"1\" />\n              <ellipse id=\"Oval-3_7_\" class=\"st3\" cx=\"19.2\" cy=\"6\" rx=\"1\" ry=\"1\" />\n              <ellipse id=\"Oval-3_8_\" class=\"st3\" cx=\"19.5\" cy=\"6\" rx=\"1\" ry=\"1\" />\n              <ellipse id=\"Oval-3-Copy-4\" class=\"st3\" cx=\"7.6\" cy=\"3.7\" rx=\"1\" ry=\"1\" />\n              <ellipse id=\"Oval-3-Copy-7\" class=\"st3\" cx=\"5.5\" cy=\"15.7\" rx=\"1\" ry=\"1\" />\n              <ellipse id=\"Oval-3-Copy-7_1_\" class=\"st3\" cx=\"5.5\" cy=\"15.7\" rx=\"1\" ry=\"1\" />\n              <ellipse id=\"Oval-3-Copy-5\" class=\"st3\" cx=\"21.2\" cy=\"17.7\" rx=\"1\" ry=\"1\" />\n  \n              <g id=\"Group-2\" transform=\"translate(4.312865, 11.197479) rotate(44.000000) translate(-4.312865, -11.197479) translate(1.973684, 9.103641)\">\n                <path id=\"Oval-3_9_\" class=\"st3\" d=\"M3.2,2.9C4,2.3,4.4,1.5,4.1,1.1s-1.2-0.3-2,0.2S0.9,2.9,1.1,3.1S2.4,3.5,3.2,2.9z\" />\n                <path id=\"Oval-3_10_\" class=\"st3\" d=\"M3,3C3.9,2.3,4.4,1.4,4,0.9S2.6,0.5,1.7,1.2S0.4,3,0.6,3.3S2,3.7,3,3z\" />\n              </g>\n              <path id=\"Oval-3_11_\" class=\"st3\" d=\"M21,13.2c1.4-0.7,2.1-2.1,1.6-3.1c-0.5-1-2-1.2-3.4-0.5c-1.4,0.7-2,2.4-1.6,3.1\n              S19.6,13.9,21,13.2z\" />\n  \n              <ellipse id=\"Oval-3_12_\" transform=\"matrix(1.745241e-02 -0.9998 0.9998 1.745241e-02 -5.4592 37.3547)\" class=\"st3\"\n                cx=\"16.3\" cy=\"21.5\" rx=\"1.7\" ry=\"2.5\" />\n  \n              <ellipse id=\"Oval-3_13_\" transform=\"matrix(1.745226e-02 -0.9998 0.9998 1.745226e-02 -5.4204 36.9573)\" class=\"st3\"\n                cx=\"16.1\" cy=\"21.2\" rx=\"1.6\" ry=\"2.2\" />\n  \n              <ellipse id=\"Oval-3-Copy-2_1_\" transform=\"matrix(0.1736 -0.9848 0.9848 0.1736 -13.8319 23.4499)\" class=\"st3\"\n                cx=\"7.1\" cy=\"20\" rx=\"1.2\" ry=\"1.8\" />\n  \n              <ellipse id=\"Oval-3-Copy-2_2_\" transform=\"matrix(0.1736 -0.9848 0.9848 0.1736 -13.58 23.6253)\" class=\"st3\"\n                cx=\"7.3\" cy=\"19.9\" rx=\"1\" ry=\"1.5\" />\n  \n              <ellipse id=\"Oval-3-Copy_1_\" transform=\"matrix(0.9135 -0.4067 0.4067 0.9135 -2.9058 9.1246)\" class=\"st3\" cx=\"20\"\n                cy=\"11.4\" rx=\"2.5\" ry=\"1.7\" />\n            </g>\n            <g id=\"birds\" transform=\"translate(154.000000, 67.000000)\">\n              <path id=\"Shape_26_\" class=\"st0\" d=\"M0,4.6c0.4-0.1,0.7-0.3,1.1-0.4c0.4-0.1,0.8-0.1,1.2,0c0.8,0.2,1.5,0.5,2.2,0.9\n              c0.7,0.4,1.4,0.8,2,1.3C6.7,6.5,6.9,6.6,7,6.7c0.2,0.1,0.3,0.1,0.5,0.1c0.1,0,0.3-0.1,0.4-0.1C8,6.6,8.2,6.5,8.3,6.4\n              c0.5-0.5,0.9-1.2,1.3-2C10,3.7,10.4,3,10.9,2.3c0.5-0.7,1.1-1.3,1.8-1.7C13.4,0.2,14.2,0,15,0v0.1c-0.7,0.2-1.4,0.5-2,1\n              c-0.6,0.5-1.1,1.1-1.5,1.7c-0.4,0.7-0.9,1.3-1.3,2c-0.2,0.3-0.5,0.7-0.7,1S9,6.6,8.7,6.9C8.5,7,8.4,7.1,8.1,7.2\n              C7.9,7.3,7.7,7.4,7.4,7.4C7.2,7.4,7,7.3,6.8,7.2C6.6,7.1,6.4,6.9,6.3,6.8C5.7,6.3,5,5.9,4.4,5.5C3.7,5,3,4.7,2.3,4.4\n              C1.9,4.3,1.6,4.3,1.2,4.3C0.8,4.4,0.4,4.5,0,4.6L0,4.6z\" />\n              <path id=\"Shape_27_\" class=\"st0\" d=\"M8.9,11.8c0.2-0.3,0.3-0.5,0.4-0.8c0.1-0.3,0.3-0.5,0.6-0.7c0.3-0.2,0.6-0.1,0.9-0.1l0.2,0.1\n              l0.2,0.1c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0.1,0.2,0.1,0.4,0.2c0.2,0.1,0.5,0.3,0.6,0.4\n              c0.3,0.1,0.6-0.4,0.8-0.9c0.2-0.5,0.4-1.1,0.6-1.6c0.2-0.6,0.4-1.1,0.7-1.6c0.3-0.5,0.6-1.1,1.1-1.4c0.2-0.2,0.5-0.4,0.8-0.5\n              c0.3-0.1,0.6-0.1,0.9-0.1v0.1c-1.1,0.3-1.6,1.3-2.1,2.4c-0.5,1-0.9,2.1-1.4,3.2c-0.1,0.3-0.3,0.5-0.5,0.8\n              c-0.1,0.1-0.1,0.1-0.2,0.2c0,0-0.1,0.1-0.1,0.1l-0.1,0.1c-0.1,0-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1c-0.1,0-0.1,0-0.1-0.1l-0.1-0.1\n              c-0.1-0.1-0.1-0.1-0.2-0.1l-0.3-0.3c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1-0.1-0.2-0.1-0.3-0.2L11,10.6\n              l-0.2-0.1c-0.2-0.1-0.5-0.1-0.7,0c-0.2,0.1-0.4,0.3-0.6,0.6c-0.2,0.2-0.3,0.5-0.5,0.7L8.9,11.8z\" />\n            </g>\n            <path id=\"Rectangle-3\" class=\"st5\" d=\"M288.3,198c60.6,0,125.5,5,194.7,15l0,0c0.6,0.1,1,0.6,1,1.1l0,0c0,0.5-0.4,0.9-0.9,0.9\n            c0,0-0.1,0-0.1,0c-38.2-5.3-65.5-8.7-81.8-10.2c-47-4.3-84.7-4.9-113-4.9c-43.2,0-134.9,4.4-273.3,13.2\n            C14.7,213.2,197,198,288.3,198z\" />\n            <g id=\"rocket\" transform=\"translate(214.000000, 32.000000)\">\n              <g id=\"right\" transform=\"translate(47.419507, 129.102826)\">\n                <path id=\"Fill-3\" class=\"st6\" d=\"M0.9,21.2l4.5,0.9c6.8,1.4,13,5.2,17.4,10.5l4.2,5c1.4,0.9,3.1-0.5,2.3-1.8\n                c-2.4-12-8.4-23-17.3-31.5C10.6,3,9,1.9,7.2,1.1L4.8,0.1L0.9,21.2z\" />\n                <path id=\"Fill-3_1_\" class=\"st7\" d=\"M0,21.6l4.5,0.9c6.8,1.4,13,5.2,17.4,10.5l4.2,5c1.4,0.9,3.1-0.5,2.3-1.8\n                c-2.4-12-8.4-23-17.3-31.5c-1.4-1.3-3-2.4-4.8-3.2L3.9,0.5L0,21.6z\" />\n                <path id=\"Fill-5\" class=\"st5\" d=\"M0,21.6l1.8-10.5c0.3-1.8,0.6-3.5,0.9-5.3l0.9-5.3l0.1-0.3L4,0.3l2.6,1.1\n                c0.9,0.4,1.7,0.9,2.5,1.4c0.8,0.5,1.5,1.1,2.2,1.8l1,1c0.3,0.3,0.7,0.7,1,1c2.6,2.7,4.9,5.7,6.9,8.9c0.5,0.8,1,1.6,1.5,2.4\n                l0.7,1.2l0.6,1.2l0.3,0.6c0.1,0.2,0.2,0.4,0.3,0.6l0.6,1.3l0.1,0.3l0.1,0.3l0.3,0.6c0.2,0.4,0.4,0.9,0.5,1.3\n                c1.4,3.5,2.4,7.1,3.2,10.8l0-0.1c0.2,0.3,0.3,0.7,0.2,1.1c-0.1,0.4-0.3,0.7-0.6,0.9c-0.3,0.2-0.7,0.3-1,0.3\n                c-0.4,0-0.7-0.1-1.1-0.3l0,0l0,0l-2.5-3.1c-0.8-1-1.7-2.1-2.5-3c-0.9-1-1.8-1.9-2.8-2.8c-1-0.9-2.1-1.6-3.2-2.4l-0.8-0.5\n                l-0.9-0.5c-0.3-0.2-0.6-0.3-0.9-0.5c-0.3-0.2-0.6-0.3-0.9-0.4c-1.2-0.6-2.4-1.1-3.7-1.5c-0.3-0.1-0.6-0.2-0.9-0.3l-1-0.3\n                c-0.3-0.1-0.6-0.2-1-0.2c-0.3-0.1-0.6-0.2-1-0.2L0,21.6z M0.1,21.6l3.9,0.8c0.3,0.1,0.6,0.1,1,0.2c0.3,0.1,0.6,0.1,1,0.2l1,0.3\n                c0.3,0.1,0.6,0.2,1,0.3c1.3,0.4,2.5,0.9,3.7,1.5c0.3,0.1,0.6,0.3,0.9,0.4c0.3,0.2,0.6,0.3,0.9,0.5l0.9,0.5l0.8,0.5\n                c1.1,0.7,2.2,1.5,3.2,2.4c1,0.9,2,1.8,2.9,2.8c0.9,1,1.7,2,2.6,3l2.5,3l0,0c0.3,0.2,0.6,0.3,0.9,0.2c0.3,0,0.6-0.1,0.9-0.3\n                c0.2-0.2,0.4-0.4,0.5-0.7c0.1-0.3,0-0.6-0.2-0.8l0,0l0,0c-0.7-3.6-1.8-7.2-3.2-10.7c-1.4-3.4-3.2-6.8-5.2-9.9l-0.2-0.3l-0.2-0.3\n                l-0.4-0.6c-0.3-0.4-0.5-0.8-0.8-1.1l-0.8-1.1L17,11.8l-0.4-0.5l-0.9-1.1c-0.3-0.4-0.6-0.7-0.9-1.1l-0.5-0.5l-0.2-0.3L13.9,8l-1-1\n                c-0.3-0.3-0.6-0.7-1-1l-1-1c-0.7-0.6-1.4-1.2-2.1-1.7C8,2.7,7.2,2.3,6.4,1.9L3.8,0.7l0.3-0.2l-1,5.2c-0.3,1.7-0.7,3.5-1,5.2\n                L0.1,21.6z\" />\n              </g>\n              <g id=\"left\" transform=\"translate(0.000000, 129.221964)\">\n                <path id=\"Fill-7\" class=\"st8\" d=\"M29.7,21.5l-4.5,0.9c-6.8,1.4-13,5.2-17.4,10.5l-4.2,5c-1.4,0.9-2.1-0.1-2.3-1.8\n                C1.2,24,9.8,13.2,18.6,4.7c1.4-1.3,3-2.4,4.8-3.2l2.4-1.1L29.7,21.5z\" />\n                <path id=\"Fill-7_1_\" class=\"st6\" d=\"M28.4,21.2L24,22.2c-6.8,1.4-13,5.2-17.4,10.5l-4.2,5C1,38.6,0.3,37.7,0,35.9\n                c-0.1-12.2,8.4-23,17.3-31.5c1.4-1.3,3-2.4,4.8-3.2l2.4-1.1L28.4,21.2z\" />\n                <path id=\"Fill-9\" class=\"st5\" d=\"M29.7,21.5l-2.1-10.6c-0.3-1.8-0.7-3.5-1-5.2l-1-5.2l0.3,0.2l-2.6,1.2c-0.8,0.4-1.7,0.9-2.4,1.4\n                c-0.8,0.5-1.5,1.1-2.2,1.8c-0.7,0.7-1.4,1.3-2,2c-1.3,1.3-2.6,2.7-3.9,4.1c-1.2,1.4-2.4,2.9-3.6,4.4c-1.1,1.5-2.2,3.1-3.1,4.7\n                c-0.9,1.6-1.8,3.3-2.5,5c-0.7,1.7-1.3,3.5-1.6,5.4c-0.4,1.8-0.6,3.7-0.6,5.6l0,0l0-0.1c0,0.3,0.1,0.6,0.2,0.9\n                c0.1,0.3,0.2,0.6,0.4,0.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.6-0.1,0.8-0.3l0,0l2.5-3c0.8-1,1.7-2,2.6-3c0.9-1,1.9-1.9,2.9-2.8\n                c1-0.9,2.1-1.6,3.2-2.4l0.8-0.5l0.9-0.5c0.3-0.2,0.6-0.3,0.9-0.5c0.3-0.2,0.6-0.3,0.9-0.4c1.2-0.6,2.4-1.1,3.7-1.5\n                c0.3-0.1,0.6-0.2,1-0.3l1-0.3c0.3-0.1,0.6-0.2,1-0.2c0.3-0.1,0.6-0.1,1-0.2L29.7,21.5z M29.7,21.5l-3.9,0.9\n                c-0.3,0.1-0.7,0.1-1,0.2c-0.3,0.1-0.6,0.1-1,0.2l-1,0.3c-0.3,0.1-0.6,0.2-0.9,0.3c-1.3,0.4-2.5,0.9-3.7,1.5\n                c-0.3,0.1-0.6,0.3-0.9,0.4c-0.3,0.2-0.6,0.3-0.9,0.5l-0.9,0.5l-0.8,0.5c-1.1,0.7-2.2,1.5-3.2,2.4c-1,0.9-1.9,1.8-2.8,2.8\n                c-0.9,1-1.7,2-2.5,3l-2.5,3.1l0,0l0,0c-0.3,0.2-0.6,0.3-1,0.4c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3-0.1\n                C2.1,38.3,2,38.1,1.9,38c-0.2-0.3-0.4-0.6-0.4-0.9c-0.1-0.3-0.2-0.6-0.2-0.9l0-0.1l0,0c0-1.9,0.2-3.8,0.5-5.7\n                c0.4-1.9,0.9-3.7,1.6-5.4c0.7-1.8,1.5-3.5,2.5-5.1c0.9-1.6,2-3.2,3.1-4.8c2.2-3.1,4.7-5.9,7.4-8.6c0.7-0.7,1.3-1.3,2-2\n                c0.7-0.7,1.4-1.3,2.2-1.8c0.8-0.5,1.6-1,2.5-1.4l2.6-1.2L26,0l0.1,0.3L27,5.7c0.3,1.8,0.6,3.5,0.9,5.3L29.7,21.5z\" />\n              </g>\n              <g id=\"body\" transform=\"translate(13.889990, 0.000000)\">\n                <path id=\"Fill-11\" class=\"st8\" d=\"M28.9,3.9c0,0,35.3,42,13.1,149.6c-0.2,1.2-0.9,2-1.6,2l-6.9-0.1H16l0,0.1l-6.9,0.1\n                c-0.7,0-1.3-0.8-1.6-2C-12.5,56,14.7,12,20.4,3.7c2.4-4,6-4,8.4,0.1L28.9,3.9\" />\n                <path id=\"Triangle\" class=\"st9\" d=\"M26.7,0.9c6,5.7,10.3,13.3,12.7,22.7c-10.2-3.3-20-3.1-29.6,0.7c0.9-6.5,4.9-14.2,12.1-23.1\n                l0,0c1.1-1.4,3.1-1.6,4.5-0.5C26.5,0.8,26.6,0.8,26.7,0.9z\" />\n                <path id=\"Fill-24\" class=\"st0\" d=\"M8.6,25.6c0.7-0.3,1.3-0.6,2-0.9c0.7-0.3,1.4-0.5,2.1-0.7c1.4-0.4,2.8-0.8,4.3-1\n                c2.9-0.5,5.8-0.8,8.7-0.8c1.5,0,2.9,0.1,4.4,0.2c0.7,0.1,1.5,0.1,2.2,0.3l1.1,0.2l1.1,0.2c1.4,0.3,2.8,0.7,4.2,1.1\n                c0.3,0.1,0.7,0.2,1,0.3c0.3,0.1,0.7,0.2,1,0.4c0.7,0.3,1.4,0.5,2,0.8l0,0c-0.7-0.2-1.4-0.4-2.1-0.6c-0.3-0.1-0.7-0.2-1-0.3\n                c-0.4-0.1-0.7-0.2-1.1-0.3c-1.4-0.4-2.8-0.7-4.2-1l-1.1-0.2l-1.1-0.2c-0.4,0-0.7-0.1-1.1-0.1c-0.4,0-0.7-0.1-1.1-0.1\n                c-1.4-0.2-2.9-0.2-4.3-0.3c-2.9-0.1-5.8,0.1-8.7,0.6c-1.4,0.2-2.9,0.5-4.3,0.9c-0.7,0.2-1.4,0.4-2.1,0.6\n                C9.9,25,9.2,25.3,8.6,25.6L8.6,25.6z\" />\n                <path id=\"Fill-13\" class=\"st5\" d=\"M28.9,3.9c2.3,2.9,4.1,6.2,5.8,9.5c1.7,3.4,3.2,6.8,4.5,10.4c1.4,3.6,2.5,7.2,3.6,10.9\n                c0.5,1.9,1,3.7,1.4,5.6l0.7,2.8l0.6,2.8c1.5,7.6,2.6,15.3,3.2,23c0.6,7.7,0.8,15.5,0.7,23.3L49.2,98l0,1.5c0,0.5-0.1,1-0.1,1.5\n                l-0.2,2.9c-0.2,3.9-0.6,7.7-0.9,11.6l-0.1,0.7l-0.1,0.7l-0.2,1.4l-0.3,2.9l-0.3,2.9l-0.1,0.7c0,0.2-0.1,0.5-0.1,0.7l-0.2,1.4\n                l-0.8,5.8l-0.2,1.4l-0.2,1.4l-0.5,2.9l-0.5,2.9l-0.2,1.4c-0.1,0.5-0.2,1-0.3,1.4l-1.1,5.7l-0.5,2.8l-0.1,0.7\n                c0,0.2-0.1,0.5-0.2,0.7c-0.2,0.5-0.4,0.9-0.8,1.3c-0.2,0.2-0.4,0.3-0.7,0.3l-0.1,0l-0.1,0l-0.2,0l-0.3,0l-1.3,0l-2.5,0l-2.5,0\n                l-2.5,0l-5,0l-10.1,0l0.2-0.2l0,0.1l0,0.2l-0.2,0l-4.8,0.1l-1.2,0l-0.6,0l-0.2,0l-0.1,0c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.4-0.1\n                c-0.2-0.1-0.4-0.2-0.6-0.4c-0.2-0.2-0.3-0.4-0.4-0.6c-0.1-0.2-0.2-0.4-0.3-0.7c0-0.1-0.1-0.2-0.1-0.4c0-0.1,0-0.2-0.1-0.3\n                L6.2,148l-0.5-2.7c-0.1-0.5-0.2-0.9-0.2-1.4l-0.2-1.4L4.3,137c-0.1-0.5-0.2-0.9-0.2-1.4l-0.2-1.4l-0.4-2.7L3,128.8\n                c-0.1-0.5-0.1-0.9-0.2-1.4L2.7,126L2,120.5c-0.1-0.9-0.2-1.8-0.3-2.8L1.4,115l-0.3-2.8c-0.1-0.5-0.1-0.9-0.1-1.4l-0.1-1.4\n                l-0.2-2.8l-0.1-1.4c0-0.5-0.1-0.9-0.1-1.4l-0.3-5.6C0,90.9,0,83.4,0.3,76c0.4-7.4,1.1-14.8,2.2-22.2L3,51.1l0.2-1.4l0.3-1.4\n                L4,45.7c0-0.2,0.1-0.5,0.1-0.7l0.2-0.7l0.3-1.4l0.3-1.4c0.1-0.4,0.2-0.9,0.3-1.3l0.7-2.7c0.1-0.4,0.2-0.9,0.3-1.3l0.4-1.3L7,33.6\n                l0.2-0.7l0.1-0.3l0.1-0.3c2.1-7,4.7-13.9,8-20.3l0.6-1.2l0.3-0.6l0.3-0.6l0.7-1.2L18,7.3c0.2-0.4,0.5-0.8,0.7-1.1L19,5.6L19.4,5\n                l0.4-0.6l0.4-0.5c0.3-0.4,0.5-0.7,0.7-1.1c0.5-0.7,1.2-1.3,1.9-1.7c0.7-0.4,1.6-0.6,2.4-0.4c0.8,0.1,1.6,0.6,2.2,1.1\n                C27.9,2.4,28.5,3.1,28.9,3.9L28.9,3.9c-0.5-0.7-1-1.4-1.6-2c-0.6-0.6-1.4-1-2.2-1.1c-0.8-0.1-1.6,0.1-2.3,0.5\n                c-0.7,0.4-1.3,1-1.8,1.7c-0.3,0.3-0.5,0.7-0.7,1.1l-0.4,0.6l-0.4,0.6l-0.4,0.6l-0.3,0.6c-0.2,0.4-0.5,0.8-0.7,1.1l-0.7,1.2\n                l-0.6,1.2l-0.3,0.6l-0.3,0.6l-0.6,1.2c-1.6,3.2-3.1,6.5-4.4,9.9c-0.2,0.4-0.3,0.8-0.5,1.3l-0.5,1.3c-0.2,0.4-0.3,0.9-0.5,1.3\n                l-0.4,1.3l-0.4,1.3l-0.2,0.6l-0.2,0.7l-0.8,2.6l-0.1,0.3l-0.1,0.3l-0.2,0.7L7,35l-0.4,1.3c-0.1,0.4-0.2,0.9-0.3,1.3l-0.7,2.7\n                c-0.1,0.4-0.2,0.9-0.3,1.3L5,43.1l-0.3,1.3l-0.1,0.7c0,0.2-0.1,0.5-0.1,0.7l-0.5,2.7l-0.3,1.4l-0.2,1.4L3,53.9\n                C1.9,61.2,1.2,68.6,0.8,76c-0.3,7.4-0.3,14.8,0,22.2l0.3,5.6c0,0.5,0.1,0.9,0.1,1.4l0.1,1.4l0.2,2.8l0.1,1.4\n                c0,0.5,0.1,0.9,0.1,1.4l0.3,2.8l0.3,2.8c0.1,0.9,0.2,1.8,0.3,2.8l0.7,5.5l0.2,1.4c0.1,0.5,0.1,0.9,0.2,1.4l0.4,2.7l0.4,2.7\n                l0.2,1.4c0.1,0.5,0.2,0.9,0.2,1.4l0.9,5.5l0.2,1.4c0.1,0.5,0.2,0.9,0.2,1.4l0.5,2.7l1,5.4c0,0.1,0,0.2,0.1,0.3\n                c0,0.1,0,0.2,0.1,0.3c0.1,0.2,0.1,0.4,0.2,0.6c0.2,0.4,0.4,0.7,0.7,0.8c0.1,0,0.2,0.1,0.2,0.1c0,0,0,0,0.1,0l0.1,0l0.2,0l0.6,0\n                l1.2,0l4.8-0.1l-0.2,0.2l0-0.1l0-0.2l0.2,0l10.1,0l5,0l2.5,0l2.5,0l2.5,0l1.3,0l0.3,0l0.2,0l0.1,0l0.1,0c0.2,0,0.3-0.1,0.5-0.2\n                c0.3-0.2,0.5-0.6,0.7-1.1c0.1-0.2,0.1-0.4,0.2-0.7l0.1-0.7l0.6-2.8l1.1-5.7c0.1-0.5,0.2-0.9,0.3-1.4l0.2-1.4l0.5-2.9l0.5-2.9\n                l0.2-1.4l0.2-1.4l0.8-5.7l0.2-1.4c0-0.2,0.1-0.5,0.1-0.7l0.1-0.7l0.3-2.9l0.3-2.9l0.2-1.4l0.1-0.7l0.1-0.7\n                c0.3-3.9,0.7-7.7,0.9-11.6l0.2-2.9c0-0.5,0.1-1,0.1-1.5l0-1.5l0.2-5.8c0.1-7.8-0.1-15.5-0.6-23.3c-0.6-7.7-1.6-15.4-3.1-23\n                l-0.6-2.8l-0.7-2.8c-0.4-1.9-0.9-3.7-1.4-5.6c-1.1-3.7-2.2-7.3-3.5-10.9c-1.3-3.6-2.8-7-4.5-10.4C32.9,10.1,31.1,6.8,28.9,3.9\n                L28.9,3.9z\" />\n              </g>\n              <g id=\"propulsor\" transform=\"translate(23.149983, 153.370421)\">\n                <path id=\"Fill-16\" class=\"st10\" d=\"M0.1,2.5l2.7,3.4c0.3,0.4,1,0.9,1.7,0.9l0.2,0c7.2-0.9,14.6-0.8,21.8,0c0.5,0.1,1-0.1,1.2-0.4\n                l3.3-3.9C31.2,2.3,30.8,2,30.3,2l-1.2-0.2c-9-1.4-18.4-1.4-27.4,0L0.7,2C0.2,2-0.1,2.2,0.1,2.5\" />\n                <path id=\"Fill-16_1_\" class=\"st11\" d=\"M0.1,1.8l2.7,3.4c0.3,0.4,1,0.9,1.7,0.9l0.2,0c7.2-0.9,14.6-0.8,21.8,0\n                c0.5,0.1,1-0.1,1.2-0.4l3.3-3.9c0.2-0.3-0.1-0.6-0.6-0.6l-1.2-0.2c-9-1.4-18.4-1.4-27.4,0l-1,0.2C0.2,1.3-0.1,1.5,0.1,1.8\" />\n                <path id=\"Fill-16_2_\" class=\"st12\" d=\"M0.1,2.5l2.7,3.4c0.3,0.4,1,0.9,1.7,0.9l0.2,0c7.2-0.9,14.6-0.8,21.8,0\n                c0.5,0.1,1-0.1,1.2-0.4l3.3-3.9C31.2,2.3,30.8,2,30.3,2l-1.2-0.2c-9-1.4-18.4-1.4-27.4,0L0.7,2C0.2,2-0.1,2.2,0.1,2.5\" />\n                <path id=\"Fill-18\" class=\"st5\" d=\"M0.1,2.7C0,2.6,0,2.5,0,2.4c0-0.1,0.1-0.2,0.2-0.2c0.2-0.1,0.3-0.1,0.5-0.1l0,0\n                c2.4-0.4,4.9-0.8,7.4-1l0.5,0l0.5,0l0.9-0.1c0.6-0.1,1.2-0.1,1.9-0.1c0.6,0,1.2-0.1,1.9-0.1l1.9,0c0.6,0,1.2,0,1.9,0\n                c0.6,0,1.2,0,1.9,0.1c1.2,0,2.5,0.1,3.7,0.2L23.9,1c0.3,0,0.6,0.1,0.9,0.1l0.9,0.1l0.9,0.1c0.3,0,0.6,0.1,0.9,0.1l0.9,0.1\n                c0.6,0.1,1.2,0.2,1.8,0.3l0,0c0.2,0,0.4,0,0.6,0.1c0.1,0,0.2,0.1,0.3,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1\n                c0,0.1-0.1,0.1-0.1,0.2L31,2.9l-0.1,0.2l-0.3,0.4l-1.2,1.4l-1.2,1.4l-0.3,0.4l-0.1,0.1c0,0,0,0.1-0.1,0.1\n                c-0.1,0.1-0.1,0.1-0.2,0.2c-0.3,0.2-0.7,0.2-1,0.2c-0.2,0-0.3,0-0.5-0.1L25.6,7C25.3,7,25,7,24.7,6.9l-0.9-0.1l-0.9-0.1\n                c-0.6-0.1-1.2-0.1-1.8-0.1c-0.6,0-1.2-0.1-1.8-0.1c-1.2-0.1-2.5-0.1-3.7-0.1c-1.2,0-2.5,0-3.7,0C9.4,6.5,6.9,6.7,4.5,7l0,0h0\n                C4.3,7,4.2,7,4.1,6.9c-0.1,0-0.3-0.1-0.4-0.1C3.4,6.7,3.2,6.5,3,6.4C2.8,6.2,2.7,6,2.5,5.8L2,5.1L0.1,2.7z M0.1,2.6l1.9,2.5\n                l0.5,0.6c0.2,0.2,0.3,0.4,0.5,0.6c0.4,0.3,0.9,0.6,1.4,0.6l0,0c2.4-0.3,4.9-0.5,7.4-0.7l0.9,0l0.9,0c0.6,0,1.2,0,1.8,0\n                c1.2,0,2.5,0,3.7,0.1c0.6,0,1.2,0.1,1.8,0.1c0.6,0,1.2,0.1,1.8,0.1l0.9,0.1l0.9,0.1c0.3,0,0.6,0.1,0.9,0.1l0.5,0\n                c0.2,0,0.3,0,0.4,0c0.3,0,0.6,0,0.8-0.2c0.1,0,0.1-0.1,0.1-0.1c0,0,0,0,0.1-0.1l0.1-0.1L27.9,6l1.2-1.4l1.2-1.4l0.3-0.4l0.1-0.2\n                l0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1-0.1-0.1c-0.1,0-0.2-0.1-0.3-0.1l0,0l0,0c-0.6-0.1-1.2-0.2-1.8-0.3l-0.9-0.1\n                c-0.3,0-0.6-0.1-0.9-0.1l-0.9-0.1l-0.9-0.1c-0.3,0-0.6-0.1-0.9-0.1l-0.9-0.1c-0.6-0.1-1.2-0.1-1.8-0.1c-0.6,0-1.2-0.1-1.9-0.1\n                c-0.6,0-1.2,0-1.9-0.1c-0.6,0-1.2,0-1.9,0l-1.9,0c-0.6,0-1.2,0-1.9,0c-0.6,0-1.2,0-1.9,0.1L9,1.2l-0.5,0l-0.5,0\n                c-0.6,0-1.2,0.1-1.9,0.1C5.6,1.5,5,1.5,4.4,1.6L3.5,1.7L2.6,1.8C1.9,1.9,1.3,2,0.7,2.1l0,0h0c-0.2,0-0.3,0-0.5,0.1\n                c-0.1,0-0.1,0.1-0.2,0.2C0.1,2.5,0.1,2.6,0.1,2.6z\" />\n              </g>\n              <g id=\"window\" transform=\"translate(29.102835, 55.464177)\">\n                <path id=\"Fill-20\" class=\"st13\" d=\"M18.1,9.4c0,4.8-3.9,8.6-8.7,8.6c-4.8,0-8.7-3.9-8.7-8.6s3.9-8.6,8.7-8.6\n                C14.2,0.7,18.1,4.6,18.1,9.4\" />\n                <path id=\"Fill-20_1_\" class=\"st14\" d=\"M17.4,8.6c0,4.8-3.9,8.6-8.7,8.6C3.9,17.3,0,13.4,0,8.6S3.9,0,8.7,0\n                C13.5,0,17.4,3.9,17.4,8.6\" />\n                <path id=\"Fill-22\" class=\"st15\" d=\"M18.2,9.4c0-0.6-0.1-1.1-0.2-1.7c-0.1-0.6-0.3-1.1-0.5-1.6c-0.5-1-1.1-2-1.9-2.7\n                C14,1.9,11.7,1,9.5,1c-2.2,0-4.4,0.9-6,2.5C2.8,4.3,2.1,5.2,1.7,6.2C1.3,7.2,1,8.3,1,9.4c0,1.1,0.2,2.2,0.6,3.2\n                c0.4,1,1,2,1.8,2.8c0.8,0.8,1.7,1.4,2.8,1.9c1,0.4,2.2,0.7,3.3,0.7c1.1,0,2.2-0.2,3.3-0.6c1-0.4,2-1,2.8-1.8\n                c0.8-0.8,1.5-1.7,1.9-2.8C18,11.7,18.2,10.6,18.2,9.4 M18.2,9.4c0,2.3-0.9,4.5-2.5,6.2c-0.8,0.8-1.8,1.5-2.8,1.9\n                c-1.1,0.4-2.2,0.7-3.4,0.7c-1.2,0-2.3-0.2-3.4-0.6c-1.1-0.4-2.1-1.1-2.9-1.9c-0.8-0.8-1.5-1.8-1.9-2.8c-0.5-1.1-0.7-2.2-0.7-3.4\n                c0-1.2,0.2-2.3,0.7-3.4C1.7,5,2.4,4,3.2,3.2C4,2.3,5,1.7,6.1,1.2c1.1-0.4,2.3-0.7,3.4-0.7c0.6,0,1.2,0.1,1.7,0.2\n                c0.6,0.1,1.1,0.3,1.7,0.5c1.1,0.5,2,1.1,2.8,2C17.4,4.9,18.3,7.2,18.2,9.4\" />\n              </g>\n              <g id=\"middle\" transform=\"translate(33.732832, 133.727609)\">\n                <path id=\"Fill-28\" class=\"st13\" d=\"M4.2,1.7L2.5,7.3C-0.2,16.1,0,25.3,3,34l1.2,3.3c0.2,0.6,1.2,0.6,1.4,0l1.6-5.5\n                c2.1-7.3,2.3-14.9,0.5-22.3L5.7,1.7C5.5,1,4.4,1,4.2,1.7\" />\n                <path id=\"Fill-28_1_\" class=\"st6\" d=\"M3.6,0.5L1.9,6.1c-2.7,8.8-2.5,18,0.5,26.7l1.2,3.3c0.2,0.6,1.2,0.6,1.4,0l1.6-5.5\n                C8.7,23.3,8.8,15.7,7,8.3L5.1,0.5C4.9-0.2,3.8-0.2,3.6,0.5\" />\n                <path id=\"Fill-28_2_\" class=\"st12\" d=\"M4.2,1.7L2.5,7.3C-0.2,16.1,0,25.3,3,34l1.2,3.3c0.2,0.6,1.2,0.6,1.4,0l1.6-5.5\n                c2.1-7.3,2.3-14.9,0.5-22.3L5.7,1.7C5.5,1,4.4,1,4.2,1.7\" />\n                <path id=\"Fill-30\" class=\"st5\" d=\"M4.2,1.7c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.4-0.2c0.2,0,0.4,0,0.5,0\n                c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0.1,0.3l0.1,0.3l0.1,0.6l0.6,2.3l1.2,4.6c0.4,1.5,0.7,3.1,1,4.6l0.1,0.6\n                c0,0.2,0.1,0.4,0.1,0.6l0.1,1.2L9,17.7c0,0.4,0,0.8,0.1,1.2c0,1.6,0,3.1-0.1,4.7c-0.1,1.6-0.4,3.1-0.7,4.7\n                c-0.1,0.4-0.2,0.8-0.3,1.2l-0.3,1.2l-0.3,1.2c-0.1,0.4-0.2,0.8-0.3,1.1l-1.4,4.6l0,0.1l0,0.1c0,0,0,0.1-0.1,0.1\n                c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.5,0-0.6-0.1C4.2,37.7,4,37.6,4,37.5c0-0.1-0.1-0.1-0.1-0.2l0-0.1l-0.1-0.3\n                l-0.2-0.6l-0.8-2.3l-0.4-1.1l-0.2-0.6l-0.2-0.6C2,31.4,1.9,31,1.8,30.6l-0.3-1.2c-0.1-0.4-0.2-0.8-0.2-1.2l-0.1-0.6l-0.1-0.3\n                l0-0.3L0.9,26c0-0.2-0.1-0.4-0.1-0.6l-0.1-0.6c-0.1-0.8-0.1-1.6-0.2-2.3c0-0.4,0-0.8,0-1.2l0-0.6l0-0.6l0-1.2l0.1-1.2\n                c0-0.2,0-0.4,0-0.6l0.1-0.6c0-0.4,0.1-0.8,0.1-1.2C0.8,14.7,0.9,14,1,13.2l0.1-0.6l0-0.3L1.3,12l0.2-1.2c0-0.2,0.1-0.4,0.1-0.6\n                l0.1-0.6C1.9,9.3,2,8.9,2.1,8.6l0.3-1.1l0.4-1.1L4.2,1.7z M4.2,1.7L2.8,6.3L2.5,7.4L2.2,8.6C2,8.9,2,9.3,1.9,9.7l-0.1,0.6\n                c0,0.2-0.1,0.4-0.1,0.6L1.4,12l-0.1,0.3l0,0.3l-0.1,0.6C1.1,14,1,14.7,0.9,15.5c0,0.4-0.1,0.8-0.1,1.2l0,0.6c0,0.2,0,0.4,0,0.6\n                l0,1.2l0,1.2l0,0.6l0,0.6c0,0.4,0,0.8,0.1,1.2C0.9,23.3,0.9,24,1,24.8l0.1,0.6c0,0.2,0,0.4,0.1,0.6l0.2,1.2l0,0.3l0.1,0.3\n                l0.1,0.6c0.1,0.4,0.1,0.8,0.3,1.2l0.3,1.2c0.1,0.4,0.2,0.8,0.3,1.1l0.2,0.6l0.2,0.6L3.1,34l0.8,2.3l0.2,0.6l0.1,0.3l0.1,0.1\n                c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2,0.1,0.3,0c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.1-0.1,0.2-0.2l1.3-4.6\n                c0.1-0.4,0.2-0.8,0.3-1.1l0.3-1.1l0.3-1.2c0.1-0.4,0.2-0.8,0.2-1.2c0.3-1.5,0.5-3.1,0.7-4.6c0.1-1.5,0.2-3.1,0.2-4.6\n                c0-0.4,0-0.8,0-1.2l-0.1-1.2l-0.1-1.2c0-0.2,0-0.4-0.1-0.6l-0.1-0.6c-0.2-1.5-0.4-3.1-0.8-4.6L6.4,4.9L5.8,2.6L5.7,2.1L5.6,1.8\n                c0-0.1-0.1-0.2-0.1-0.3C5.4,1.4,5.3,1.3,5.2,1.3c-0.1-0.1-0.3-0.1-0.4,0c-0.2,0-0.3,0.1-0.4,0.2C4.3,1.5,4.3,1.6,4.2,1.7z\" />\n              </g>\n            </g>\n            <g id=\"astronaut-front\" transform=\"translate(404.000000, 88.000000)\">\n              <path id=\"Oval-14\" class=\"st13\" d=\"M47.6,297.6c5.5,0,5.2,2.3,14-0.9c4-5.6,2.2-42.4,7.2-54c2.5-5.7,0.7-46,10.5-43.8\n              c15.7,61.4,16.4,95.6,24.4,97.8c6.8,1.9,7.5-0.9,9.4-2.5c4.4-3.4,13.5-52,16.6-98c18.4,24.8,48.6-3.5,51.5-13.6\n              c1.1-3.9,19.7-9.7-2.4-47.1c-11.5-22.9-38.5-67-46.8-70.6c-1.5-4.6-17-29.6-19.8-30.7c-1.1-0.4-1.3,0-2.3-0.8\n              c-2.3-4.7-10.9-36.7-24.1-33.1c-16,3.3-21.6,29-24.3,33.1c-13.3,2-27.6,13.7-27.8,14.4c-2.7,8.9,4.3,10.6,3.6,21.1\n              C15.5,89.3,4.2,131.1,1.9,162.4c-0.2,3.2,0.7,8.4,0.3,14.1c-4,23.7,3.5,39.6,6.2,39.6c5-0.9,5.7-12.9,8.2-23.2\n              c3.4,1.8,2.8,1.5,5.3,0c2-3.7,3.9-8.9,0-18.3c1.8-4,6.7-13.5,8.7-18.8c2-5.3,2.6-3.1,2.5,0C31.6,238.5,42.1,291.6,47.6,297.6z\" />\n              <path id=\"Fill-1\" class=\"st16\" d=\"M57.7,52.5c-5.6,3.3-10.7,7.4-15.3,12c-4.6,4.6-8.7,9.6-12.4,14.9\n              c-7.4,10.6-13.2,22.3-17.7,34.5c-2.2,6.1-4.1,12.3-5.5,18.6c-0.4,1.6-0.7,3.1-1.1,4.7c-0.3,1.6-0.6,3.2-0.9,4.7\n              c-0.5,3.2-1,6.4-1.3,9.6c-0.2,1.6-0.3,3.2-0.4,4.8c0,0.8,0,1.6-0.1,2.4l0,1.2l0,1.2c0,3.2,0.3,6.4,1.1,9.4\n              c0.1,0.3,0.2,0.5,0.4,0.8c0.2,0.2,0.5,0.5,0.7,0.7c0.6,0.4,1.3,0.7,2,1c1.5,0.5,3,0.8,4.6,1.1c3.2,0.5,6.4,0.7,9.7,0.8v0.2\n              c-3.3,0.2-6.5,0.2-9.8,0c-1.6-0.1-3.3-0.4-4.9-0.8c-0.8-0.2-1.6-0.5-2.4-1c-0.4-0.2-0.8-0.5-1.1-0.9c-0.3-0.4-0.6-0.8-0.8-1.3\n              c-1.1-3.3-1.4-6.6-1.6-9.9l-0.1-1.2l0-1.2c0-0.8,0-1.7,0-2.5c0.1-1.6,0.1-3.3,0.3-4.9c0.3-3.3,0.7-6.5,1.3-9.8\n              c0.6-3.2,1.3-6.4,2.1-9.6c1.7-6.3,3.7-12.6,6.1-18.7C15.2,101,21.3,89.3,29,78.7c3.9-5.3,8.1-10.3,12.9-14.7\n              c4.7-4.5,10-8.5,15.7-11.7L57.7,52.5z\" />\n              <path id=\"Fill-3_2_\" class=\"st5\" d=\"M21.6,174.8c0.1,0,0.3-0.2,0.4-0.4c0.1-0.2,0.2-0.4,0.3-0.6c0.2-0.4,0.4-0.8,0.6-1.2\n              c0.4-0.8,0.7-1.6,1.1-2.4c0.3-0.8,0.7-1.6,1-2.4l1-2.4c0.3-0.8,0.6-1.7,0.9-2.5c0.3-0.8,0.6-1.6,1-2.4c0.8-1.6,1.8-3,2.8-4.5\n              l0.2,0c0.1,1,0,1.9-0.1,2.8c-0.2,0.9-0.4,1.8-0.7,2.6c-0.3,0.8-0.6,1.7-1.1,2.4c-0.4,0.8-0.9,1.5-1.3,2.3\n              c-0.8,1.6-1.7,3.1-2.7,4.6c-0.5,0.8-1,1.5-1.5,2.2c-0.3,0.4-0.5,0.7-0.8,1.1c-0.1,0.2-0.3,0.3-0.5,0.5c-0.1,0.1-0.2,0.2-0.3,0.2\n              c-0.1,0.1-0.2,0.2-0.4,0.2V174.8z\" />\n              <path id=\"Fill-5_1_\" class=\"st16\" d=\"M34.5,115.8c-0.6,6.2-0.8,12.4-1,18.6c-0.2,6.2-0.3,12.4-0.3,18.6c-0.1,12.4,0,24.8,0.2,37.2\n              c0.3,12.4,0.7,24.8,1.5,37.1c0.8,12.4,1.8,24.7,3.6,36.9c0.9,6.1,2,12.2,3.6,18.1c0.8,3,1.7,5.9,3,8.6c0.6,1.3,1.3,2.7,2.2,3.8\n              c0.2,0.3,0.4,0.5,0.7,0.8c0.2,0.3,0.5,0.5,0.7,0.7c0.1,0.1,0.2,0.2,0.4,0.3l0.4,0.3c0.3,0.2,0.5,0.3,0.8,0.4c1,0.4,2.4,0,4-0.2\n              c0.8-0.1,1.7-0.2,2.4-0.3c0.7-0.1,1.3-0.2,1.9-0.5c0.5-0.3,1-0.6,1.5-1.1c0.4-0.5,0.8-1.1,1.2-1.7c0.3-0.6,0.6-1.3,0.9-1.9l0.3-1\n              c0.1-0.3,0.2-0.7,0.3-1.1c0.8-2.9,1.2-5.9,1.6-9c0.4-3,0.7-6.1,1-9.2c1.2-12.3,1.9-24.7,3.5-37c0.8-6.2,1.7-12.3,3-18.4\n              c0.7-3,1.4-6.1,2.3-9.1c0.4-1.5,0.8-3,1.3-4.5c0.3-0.7,0.5-1.5,0.9-2.2c0.2-0.3,0.4-0.7,0.7-1c0.3-0.3,0.7-0.5,1.1-0.5v0.2\n              c-0.7,0-1.2,0.8-1.5,1.4c-0.3,0.7-0.5,1.4-0.8,2.2c-0.4,1.5-0.7,3-1.1,4.5c-0.7,3-1.3,6-1.9,9.1c-1.1,6.1-1.8,12.2-2.4,18.4\n              c-0.6,6.2-1.1,12.3-1.5,18.5c-0.4,6.2-0.8,12.4-1.3,18.6c-0.3,3.1-0.5,6.2-0.9,9.3c-0.4,3.1-0.8,6.2-1.6,9.3\n              c-0.1,0.4-0.2,0.8-0.3,1.2l-0.4,1.2c-0.3,0.8-0.6,1.6-1,2.3c-0.4,0.7-0.9,1.5-1.5,2.1c-0.6,0.7-1.4,1.3-2.2,1.7\n              c-0.9,0.4-1.8,0.6-2.6,0.7c-0.9,0.1-1.5,0.1-2.3,0.3c-0.7,0.1-1.5,0.3-2.4,0.4c-0.8,0.1-1.8,0.1-2.8-0.2c-0.5-0.2-0.9-0.4-1.3-0.7\n              l-0.6-0.4c-0.2-0.1-0.3-0.3-0.5-0.4c-0.3-0.3-0.6-0.6-0.9-0.9c-0.3-0.3-0.6-0.6-0.8-1c-1-1.4-1.7-2.8-2.4-4.3c-1.3-2.9-2.2-6-3-9\n              c-1.5-6.1-2.6-12.2-3.4-18.4c-1.7-12.3-2.6-24.7-3.2-37.1c-0.6-12.4-1-24.8-1.1-37.2c-0.1-12.4,0-24.8,0.2-37.2\n              c0.1-6.2,0.3-12.4,0.6-18.6c0.3-6.2,0.6-12.4,1.2-18.6L34.5,115.8z\" />\n              <path id=\"Fill-7_2_\" class=\"st16\" d=\"M132.8,102.3c1.2,3,1.7,6.3,2,9.5c0.3,3.2,0.4,6.4,0.5,9.7c0.1,6.5-0.1,12.9-0.4,19.3\n              c-0.7,12.9-1.7,25.7-2.8,38.6l-3.5,38.5c-1.1,12.8-2.2,25.7-3.7,38.5c-0.8,6.4-1.6,12.8-2.9,19.2c-0.6,3.2-1.4,6.4-2.3,9.5\n              c-1,3.1-2.1,6.3-4.2,9.1c-0.5,0.7-1.1,1.4-1.8,2c-0.4,0.3-0.7,0.6-1.1,0.8l-0.6,0.4c-0.2,0.1-0.4,0.2-0.6,0.3\n              c-0.9,0.4-1.8,0.5-2.7,0.6c-0.9,0.1-1.8,0-2.6,0l-1.2-0.1l-1.2-0.1c-0.4,0-0.9-0.1-1.4-0.3c-0.5-0.2-1-0.4-1.5-0.8\n              c-0.9-0.7-1.4-1.4-1.9-2.1c-0.5-0.7-0.9-1.5-1.3-2.2c-0.8-1.6-1.3-3.2-1.8-4.7c-0.5-1.6-0.9-3.2-1.2-4.8c-0.7-3.2-1.3-6.4-1.8-9.6\n              c-1-6.4-1.8-12.8-2.6-19.2c-0.8-6.4-1.7-12.8-2.7-19.1c-1-6.4-2-12.7-3.4-19c-0.7-3.1-1.4-6.3-2.3-9.4c-0.4-1.6-0.8-3.1-1.3-4.7\n              c-0.2-0.8-0.5-1.5-0.9-2.2c-0.2-0.3-0.4-0.6-0.7-0.9c-0.3-0.2-0.7-0.4-1-0.4v-0.2c0.4,0,0.9,0.1,1.2,0.4c0.3,0.3,0.6,0.6,0.9,0.9\n              c0.5,0.7,0.8,1.5,1.1,2.2c0.6,1.5,1,3.1,1.5,4.6c1,3.1,1.9,6.2,2.7,9.3c1.6,6.3,2.8,12.6,4,19c2.3,12.7,3.9,25.5,6,38.2\n              c0.5,3.2,1.1,6.3,1.8,9.4c0.4,1.5,0.7,3.1,1.2,4.6c0.5,1.5,1,3,1.7,4.3c0.4,0.7,0.8,1.4,1.2,2c0.4,0.6,0.8,1.2,1.3,1.5\n              c0.4,0.3,0.8,0.5,1.6,0.5l1.2,0.1l1.2,0.1c1.5,0.1,3,0.1,4.2-0.4c1.2-0.5,2.3-1.4,3.1-2.6c1.8-2.4,2.9-5.4,3.9-8.4\n              c1-3,1.7-6.1,2.4-9.2c1.3-6.3,2.3-12.6,3.1-19c1.6-12.8,2.8-25.6,4-38.4l3.9-38.5c1.3-12.8,2.5-25.6,3.3-38.5\n              c0.4-6.4,0.7-12.9,0.7-19.3c0-3.2-0.1-6.4-0.4-9.6c-0.3-3.2-0.7-6.4-1.8-9.4L132.8,102.3z\" />\n              <path id=\"Fill-9_1_\" class=\"st16\" d=\"M80.9,71.3c-1.1,4.8-1.9,9.7-2.4,14.5c-0.6,4.9-0.9,9.8-1.1,14.7c-0.1,2.5-0.1,4.9-0.1,7.4\n              c0,2.5,0,4.9,0,7.3c0,2.4,0,4.9-0.1,7.3c0,1.2,0,2.4,0,3.7c0,0.6,0,1.2,0.1,1.8c0,0.3,0.1,0.6,0.1,0.9c0,0.1,0,0.3,0.1,0.4\n              c0,0.1,0.1,0.3,0.1,0.3v0.2c-0.2,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.2-0.3-0.2-0.4c-0.1-0.3-0.2-0.6-0.3-0.9\n              c-0.2-0.6-0.3-1.2-0.5-1.8c-0.3-1.2-0.5-2.5-0.7-3.7c-0.4-2.5-0.5-4.9-0.7-7.4c-0.3-5,0.2-9.9,0.5-14.9c0.4-4.9,1-9.9,1.8-14.7\n              c0.9-4.9,1.9-9.7,3.4-14.4L80.9,71.3z\" />\n              <path id=\"Fill-11_1_\" class=\"st5\" d=\"M33.1,143.8c1.3-0.7,2.7-1.2,4.1-1.7c1.4-0.5,2.8-0.9,4.3-1.3c1.4-0.4,2.9-0.7,4.3-1.1\n              c1.4-0.3,2.9-0.7,4.3-1c2.9-0.6,5.8-1.4,8.8-1.5c1.5-0.1,3-0.1,4.5-0.1c1.5,0.1,3,0.2,4.5,0.5v0.2c-2.9,0.7-5.8,1.2-8.7,1.7\n              c-1.4,0.2-2.9,0.4-4.4,0.6c-1.5,0.1-2.9,0.3-4.4,0.5c-2.9,0.4-5.8,0.8-8.7,1.3c-1.5,0.2-2.9,0.5-4.3,0.8c-0.7,0.2-1.4,0.3-2.1,0.5\n              c-0.7,0.2-1.4,0.4-2.1,0.7L33.1,143.8z\" />\n              <path id=\"Fill-13_1_\" class=\"st5\" d=\"M33.1,152.9c1.4-0.4,2.8-0.9,4.3-1.4c1.4-0.5,2.9-1,4.3-1.5c1.4-0.4,2.9-0.9,4.4-1.2\n              c1.5-0.4,3-0.7,4.5-1c3-0.5,5.9-1.3,8.9-1.6c1.5-0.1,3-0.3,4.5-0.3c1.5,0,3.1-0.1,4.6,0.3v0.2c-2.9,0.8-5.8,1.6-8.8,2.2\n              c-1.5,0.3-3,0.5-4.5,0.7l-4.5,0.4c-3,0.3-5.9,0.8-8.8,1.4c-1.5,0.3-2.9,0.6-4.4,1c-1.5,0.3-2.9,0.7-4.4,1L33.1,152.9z\" />\n              <path id=\"Fill-15\" class=\"st5\" d=\"M90.1,147.1l-18.3,1.3c-1.8,0.1-3.5-1.3-3.6-3.1l-0.4-6.1c-0.1-1.8,1.3-3.5,3.1-3.6l18.3-1.3\n              c1.8-0.1,3.5,1.3,3.6,3.1l0.4,6.1C93.3,145.4,91.9,147,90.1,147.1\" />\n              <path id=\"Fill-15_1_\" class=\"st17\" d=\"M87.5,145.9l-18.3,1.4c-1.8,0.1-3.5-1.4-3.6-3.3l-0.4-6.5c-0.1-2,1.3-3.7,3.1-3.8l18.3-1.4\n              c1.8-0.1,3.5,1.4,3.6,3.3l0.4,6.5C90.7,144.1,89.3,145.8,87.5,145.9\" />\n              <path id=\"Fill-17\" class=\"st5\" d=\"M90.1,147c0.7-0.1,1.4-0.4,1.9-0.9c0.5-0.5,0.8-1.1,0.9-1.8c0.1-0.3,0-0.6,0-1l-0.2-1.1\n              l-0.3-2.2L92,138c0-0.2-0.1-0.4-0.1-0.5c0-0.1-0.1-0.3-0.1-0.4c-0.1-0.2-0.2-0.5-0.4-0.7c-0.3-0.4-0.8-0.7-1.2-0.8\n              c-0.2-0.1-0.5-0.1-0.7-0.1l-0.2,0l-0.3,0l-0.5,0.1c-5.8,0.6-11.6,0.7-17.5,1c-1,0-2,0.8-2.3,1.9c0,0.1,0,0.3-0.1,0.4\n              c0,0.1,0,0.3,0,0.5l0.1,1.1l0.1,2.2l0.1,2.2c0,0.2,0,0.4,0,0.5c0,0.1,0,0.3,0.1,0.4c0.1,0.3,0.2,0.5,0.3,0.8\n              c0.3,0.5,0.8,0.9,1.3,1.1c0.3,0.1,0.6,0.2,0.9,0.2l0.2,0l0.3,0l0.5,0c2.9-0.1,5.8-0.2,8.7-0.3C84.3,147.4,87.2,147.3,90.1,147\n               M90.1,147.3c-2.9,0.2-5.8,0.4-8.7,0.7c-2.9,0.3-5.8,0.7-8.7,1l-0.5,0l-0.3,0l-0.3,0c-0.4,0-0.9-0.1-1.3-0.2\n              c-0.8-0.3-1.6-0.8-2.1-1.5c-0.2-0.4-0.4-0.8-0.6-1.2c-0.1-0.2-0.1-0.4-0.1-0.7c0-0.2,0-0.4-0.1-0.6l-0.2-2.2l-0.2-2.2l-0.1-1.1\n              c0-0.2,0-0.4,0-0.6c0-0.2,0-0.5,0.1-0.7c0.3-1.8,2-3.3,3.9-3.5c5.8-0.5,11.6-1.2,17.4-1.5l0.5,0l0.3,0l0.4,0c0.5,0,1,0.1,1.4,0.3\n              c0.9,0.4,1.7,1,2.2,1.8c0.2,0.4,0.4,0.9,0.5,1.3c0,0.2,0.1,0.5,0.1,0.7c0,0.2,0,0.4,0,0.6l0,2.2l0,2.2l0,1.1c0,0.4,0,0.8-0.1,1.2\n              C93.1,146.1,91.6,147.2,90.1,147.3\" />\n              <path id=\"Fill-19\" class=\"st5\" d=\"M134.5,142.1c-0.8-0.3-1.6-0.5-2.5-0.7c-0.8-0.2-1.7-0.3-2.6-0.5c-1.7-0.3-3.4-0.5-5.2-0.7\n              c-3.5-0.4-6.9-0.6-10.4-0.8c-1.7-0.1-3.5-0.1-5.2-0.2c-1.7-0.1-3.5-0.2-5.2-0.3c-1.7-0.2-3.5-0.4-5.2-0.6l-2.6-0.3\n              c-0.9-0.1-1.7-0.2-2.6-0.2l-0.1-0.2c0.8-0.4,1.7-0.5,2.6-0.7c0.9-0.1,1.8-0.2,2.7-0.3c1.8-0.1,3.5-0.1,5.3-0.1c3.5,0,7,0.6,10.5,1\n              c3.5,0.4,7,0.9,10.4,1.6c1.7,0.3,3.4,0.7,5.2,1.1c0.9,0.2,1.7,0.4,2.5,0.7c0.8,0.3,1.7,0.5,2.5,1L134.5,142.1z\" />\n              <path id=\"Fill-21\" class=\"st5\" d=\"M133.9,150.1c-3.4-0.4-6.8-0.6-10.3-0.8c-3.4-0.2-6.9-0.5-10.3-0.8c-1.7-0.2-3.4-0.3-5.1-0.4\n              c-1.7-0.1-3.4-0.3-5.1-0.5c-1.7-0.3-3.4-0.5-5.1-0.9c-1.7-0.4-3.4-0.7-5-1.4l0-0.2c3.5-0.1,6.9-0.1,10.3,0.1\n              c3.4,0.2,6.8,0.9,10.2,1.4c3.4,0.6,6.7,1.1,10.2,1.6c3.4,0.5,6.8,1,10.2,1.8L133.9,150.1z\" />\n              <path id=\"Fill-23\" class=\"st16\" d=\"M57.7,52.4c-0.5-0.1-0.1,0-0.2,0l0,0l0-0.1l0-0.1l0-0.2l0.1-0.5l0.1-1l0.3-1.9\n              c0.2-1.3,0.4-2.6,0.7-3.9c0.5-2.6,1-5.1,1.6-7.7c1.2-5.1,2.7-10.1,4.7-15c2-4.9,4.3-9.7,7.7-13.9c1.7-2.1,3.7-4,6-5.4\n              c2.3-1.4,5.1-2.3,7.9-2.4c0.7,0,1.4,0.1,2.1,0.1c0.7,0.1,1.4,0.2,2.1,0.4c0.7,0.2,1.4,0.4,2,0.7l1,0.5c0.3,0.1,0.6,0.3,0.9,0.5\n              c2.4,1.4,4.4,3.4,6.1,5.6c3.3,4.4,5.4,9.4,6.9,14.5c0.7,2.5,1.4,5.1,1.9,7.7c0.5,2.6,0.9,5.2,1.2,7.8c0.6,5.2,1,10.5,0.7,15.7\n              h-0.2c-0.2-2.6-0.5-5.2-0.9-7.8c-0.4-2.6-0.8-5.1-1.3-7.7c-1-5.1-2.2-10.2-3.8-15c-0.8-2.4-1.7-4.9-2.8-7.2\n              c-1.1-2.3-2.3-4.6-3.7-6.6c-1.5-2-3.2-3.9-5.2-5.2C93.3,4,93,3.8,92.8,3.7l-0.8-0.4c-0.5-0.3-1.1-0.4-1.7-0.6\n              c-0.6-0.1-1.2-0.3-1.8-0.4c-0.6,0-1.2-0.1-1.8-0.1c-2.4,0-4.9,0.7-7,2c-2.1,1.3-4,3-5.7,4.9c-3.3,3.9-5.7,8.5-7.8,13.3\n              c-2.1,4.8-3.7,9.7-5.1,14.8c-0.7,2.5-1.3,5-1.9,7.6c-0.3,1.3-0.5,2.6-0.8,3.8l-0.4,1.9l-0.2,1l-0.1,0.5l0,0.2L57.7,52.4L57.7,52.4\n              L57.7,52.4c-0.1,0,0.2,0.1-0.2,0H57.7z\" />\n              <path id=\"Fill-25\" class=\"st16\" d=\"M57.7,52.4c0,0,0.1,0.1,0.1,0.1l0.2,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0.2,0.2,0.5,0.4,0.7,0.5\n              c0.5,0.3,1,0.7,1.5,1c1,0.6,2.1,1.2,3.1,1.8c2.1,1.1,4.4,2,6.6,2.7c4.5,1.5,9.3,2.2,14,2.2c2.3,0,4.7-0.3,7-0.7\n              c2.3-0.4,4.6-0.9,6.9-1.5c4.6-1.2,9-2.9,13.1-5.4l0.2,0.2c-1.6,1.8-3.7,3.3-5.8,4.6c-2.1,1.2-4.4,2.2-6.8,3\n              c-4.7,1.6-9.7,2-14.6,1.9c-4.9-0.2-9.8-1.3-14.4-3c-2.3-0.9-4.5-2-6.6-3.2c-1-0.6-2.1-1.3-3.1-2c-0.5-0.4-1-0.7-1.4-1.1\n              c-0.2-0.2-0.5-0.4-0.7-0.6c-0.1-0.1-0.2-0.2-0.3-0.3l-0.2-0.2c0-0.1-0.1-0.1-0.2-0.3H57.7z\" />\n              <path id=\"Fill-27\" class=\"st5\" d=\"M75.4,43.2c0.1,0.4,0.3,0.7,0.6,1c0.3,0.3,0.6,0.5,0.9,0.8c0.7,0.4,1.4,0.8,2.2,1.1\n              c1.5,0.6,3.1,1,4.7,1.2c0.8,0.1,1.6,0.1,2.3,0c0.8-0.1,1.5-0.2,2.2-0.3c0.7-0.1,1.4-0.3,2-0.6c0.7-0.3,1.3-0.8,2-1.4l0.2,0.1\n              c-0.1,0.9-0.5,1.8-1.1,2.6c-0.6,0.8-1.5,1.3-2.4,1.7c-0.9,0.3-1.9,0.5-2.8,0.4c-0.9-0.1-1.8-0.3-2.7-0.5c-1.7-0.4-3.4-1.1-4.9-2.1\n              c-0.7-0.5-1.4-1-2.1-1.6c-0.3-0.3-0.6-0.6-0.9-1c-0.2-0.4-0.5-0.8-0.4-1.3H75.4z\" />\n              <path id=\"Fill-29\" class=\"st18\" d=\"M37.8,67.9C35.3,64.2,27.3,54,29,48.7c0.6-1.8,2-1.9,3.7-3c2.8-2,6.7-4.3,11-6.1\n              c6.9-3,14.3-4.6,16.5-4.3c-2.2,5.5-3.5,11-3.9,16.3C51.5,53.2,45.4,58.6,37.8,67.9z\" />\n              <path id=\"Fill-31\" class=\"st5\" d=\"M37.9,68.3c-1.4-2-2.6-4.1-3.8-6.2c-1.1-2.1-2.2-4.3-3-6.6c-0.4-1.1-0.8-2.3-1.1-3.5\n              c-0.3-1.2-0.5-2.5-0.4-3.8c0-0.7,0.1-1.3,0.4-2c0.3-0.7,0.9-1.4,1.5-1.7c0.6-0.4,1.1-0.6,1.6-0.9c0.2-0.1,0.5-0.3,0.7-0.5l0.7-0.5\n              c4-2.8,8.2-5.4,12.9-6.9c2.3-0.8,4.7-1.4,7.1-1.9c1.2-0.2,2.4-0.4,3.6-0.5c1.2-0.1,2.5-0.2,3.7,0.1l0,0.2\n              c-1.2,0.1-2.3,0.4-3.5,0.7c-1.1,0.3-2.3,0.7-3.4,1.1c-1.1,0.4-2.2,0.8-3.4,1.2c-1.1,0.4-2.2,0.8-3.3,1.3c-2.2,0.9-4.3,1.8-6.5,2.9\n              c-2.1,1-4.2,2.1-6.2,3.4l-0.7,0.5c-0.3,0.2-0.6,0.4-0.8,0.5c-0.6,0.3-1.1,0.5-1.6,0.8c-0.4,0.3-0.7,0.5-0.9,0.9\n              c-0.2,0.4-0.3,0.9-0.4,1.5c-0.1,1.1,0,2.2,0.2,3.4c0.2,1.1,0.5,2.3,0.9,3.4c0.7,2.3,1.6,4.5,2.6,6.7c1,2.2,2.1,4.3,3.3,6.4\n              L37.9,68.3z\" />\n              <path id=\"Fill-33\" class=\"st5\" d=\"M41.7,64.7c-0.3-0.2-0.5-0.4-0.7-0.7c-0.2-0.2-0.4-0.5-0.6-0.7c-0.4-0.5-0.7-1-1-1.5\n              c-0.6-1-1.2-2.1-1.7-3.2c-1-2.2-1.8-4.5-2-7.1l0-1c0-0.3,0-0.7,0.1-1l0-0.5c0-0.2,0.1-0.4,0.1-0.6c0-0.2,0.1-0.4,0.2-0.6\n              c0.1-0.2,0.1-0.4,0.2-0.5c0.8-1.4,2-2.1,3.1-2.7c1.2-0.5,2.3-0.9,3.5-1.1c1.2-0.3,2.4-0.5,3.6-0.5l0.1,0.2c-2,1.5-4.2,2.4-6.1,3.6\n              c-0.9,0.6-1.8,1.2-2.2,1.8c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.1,0.2-0.1,0.3l-0.1,0.3L37.8,50c0,0.3-0.1,0.5-0.1,0.8l-0.1,0.8\n              c0,1.1,0.1,2.2,0.3,3.3c0.2,1.1,0.5,2.2,0.9,3.3c0.3,1.1,0.8,2.2,1.3,3.3c0.2,0.5,0.5,1.1,0.8,1.6c0.1,0.3,0.3,0.5,0.4,0.8\n              c0.1,0.2,0.3,0.5,0.5,0.7L41.7,64.7z\" />\n              <path id=\"Fill-37\" class=\"st18\" d=\"M134,64.4c1.2-11.6,2.5-19.6-0.6-23.8c-5.5-7.3-17.1-6.5-22-7.3c1.1,7.8,1.7,14,1.7,18.5\n              C119.3,52.2,126.2,56.4,134,64.4z\" />\n              <path id=\"Fill-35\" class=\"st5\" d=\"M126.5,59.6c0.1-0.1,0.1-0.4,0.1-0.7c0-0.2,0-0.5,0-0.8c0-0.5-0.1-1-0.1-1.5\n              c-0.1-1-0.2-2-0.3-3.1c-0.2-2-0.4-4.1-0.5-6.2l-0.1-0.8l0-0.4l-0.1-0.3c-0.1-0.4-0.2-0.6-0.4-0.9c-0.4-0.5-1.1-1-1.9-1.5\n              c-1.6-1-3.5-1.9-5.2-3.3l0.1-0.2c1.1,0,2.1,0.2,3.2,0.4c1,0.2,2.1,0.5,3.1,1c0.5,0.2,1,0.5,1.5,0.9c0.2,0.2,0.5,0.4,0.7,0.6\n              c0.2,0.3,0.4,0.5,0.6,0.8c0.3,0.6,0.5,1.3,0.5,2l0,0.5l0,0.4l0,0.8l-0.2,6.1c0,1-0.1,2.1-0.1,3.1c0,0.5-0.1,1-0.1,1.6\n              c0,0.3-0.1,0.5-0.1,0.8c-0.1,0.3-0.1,0.5-0.3,0.8L126.5,59.6z\" />\n              <path id=\"Fill-37_1_\" class=\"st14\" d=\"M131.5,64.6c1.2-11.6,2.5-19.6-0.6-23.8c-5.5-7.3-17.1-6.5-22-7.3\" />\n              <path id=\"Fill-39\" class=\"st5\" d=\"M131.4,64.6c0.2-4,0.6-8,0.7-12c0.1-2,0.1-4-0.1-5.9l-0.1-0.7l-0.1-0.7\n              c-0.1-0.5-0.2-0.9-0.3-1.4c-0.3-0.9-0.7-1.7-1.2-2.4c-1.1-1.4-2.6-2.6-4.3-3.4c-1.7-0.8-3.5-1.4-5.3-2c-1.9-0.5-3.8-0.9-5.7-1.2\n              c-2-0.4-4-0.7-5.9-1.3l0-0.2c2-0.1,4-0.2,6.1-0.2c2,0,4.1,0.2,6.1,0.6c2,0.4,4.1,1.1,5.9,2.2c1.8,1.1,3.5,2.6,4.7,4.4\n              c0.7,0.9,1,2,1.3,3c0.1,0.5,0.2,1,0.3,1.6l0.1,0.8l0,0.8c0.1,2.1,0,4.1-0.2,6.1c-0.4,4-1.1,8-1.7,11.9L131.4,64.6z\" />\n              <path id=\"Fill-41\" class=\"st16\" d=\"M111.3,53.5c1.1-0.3,2.3-0.3,3.5-0.1c1.2,0.2,2.3,0.5,3.3,0.9c2.2,0.9,4.1,2.1,6,3.4\n              c3.8,2.7,7.2,5.8,10.4,9c6.4,6.6,12.2,13.7,17.6,21.1c5.5,7.4,10.8,14.8,15.4,22.7c2.3,4,4.5,8,6.6,12.1c1,2,2,4.1,2.9,6.2\n              c0.4,1.1,0.9,2.1,1.3,3.2c0.4,1.1,0.8,2.2,0.9,3.3l-0.2,0c-0.7-2.1-1.8-4.1-2.9-6.1c-1.1-2-2.3-3.9-3.4-5.9\n              c-2.3-3.9-4.7-7.8-7.2-11.6l-3.7-5.8c-1.2-1.9-2.4-3.8-3.7-5.8c-2.4-3.8-5-7.6-7.6-11.3c-5.2-7.4-10.8-14.7-16.9-21.4\n              c-3.1-3.3-6.3-6.5-9.9-9.3c-1.8-1.4-3.7-2.6-5.8-3.5c-1-0.5-2.1-0.8-3.2-1c-1.1-0.2-2.2-0.2-3.3,0L111.3,53.5z\" />\n              <path id=\"Fill-43\" class=\"st16\" d=\"M134.5,123c6.2-1.1,12.6-1.4,18.9-0.5c3.1,0.5,6.2,1.3,9.2,2.5c2.9,1.3,5.7,2.9,8.2,5\n              c2.5,2.1,4.6,4.5,6.4,7.1c1.8,2.7,3.2,5.6,4.3,8.6c2.2,6,3,12.5,2.8,18.9c-0.1,3.2-0.4,6.4-1,9.5c-0.6,3.2-1.4,6.3-2.5,9.3\n              c-2.3,6.1-6.2,11.6-11.2,15.7c-5,4.1-10.9,7.2-17.4,8.3c-3.2,0.5-6.5,0.5-9.7-0.4c-3.1-0.9-5.9-3-7.5-5.8l0.2-0.1\n              c1.9,2.5,4.6,4.3,7.6,4.9c3,0.7,6.1,0.5,9.1-0.2c6-1.4,11.5-4.5,16.1-8.5c2.3-2,4.4-4.3,6.2-6.7c1.8-2.5,3.3-5.1,4.4-8\n              c2.2-5.8,3.5-11.9,3.8-18.1c0.3-6.2-0.4-12.4-2.3-18.3c-1-2.9-2.3-5.8-3.9-8.4c-1.6-2.6-3.7-5-6-7c-2.3-2-5-3.7-7.8-5\n              c-2.8-1.3-5.9-2.1-8.9-2.7c-6.2-1-12.5-0.9-18.8,0L134.5,123z\" />\n              <path id=\"Fill-45\" class=\"st5\" d=\"M130.3,192c1.5,2.3,8.3,7.8,21.4,5.5c5.2-0.9,13.5-4.6,18.9-11c5.5-6.4,8.1-15.5,4.3-18.3\n              c-24-18-18.9-50-39.7-36\" />\n              <path id=\"Fill-45_1_\" class=\"st6\" d=\"M130.3,195c1.5,2.3,8.3,7.8,21.4,5.5c5.2-0.9,13.5-4.6,18.9-11c5.5-6.4,8.1-15.5,4.3-18.3\n              c-24-18-18.9-50-39.7-36\" />\n              <path id=\"Fill-47\" class=\"st16\" d=\"M130.4,192c0.8,1,1.8,1.9,2.9,2.6c1.1,0.7,2.3,1.3,3.5,1.7c2.5,0.9,5.1,1.3,7.7,1.4\n              c2.6,0.1,5.2-0.2,7.8-0.8c2.5-0.6,5-1.6,7.3-2.7c4.6-2.4,8.8-5.6,11.8-9.8c1.5-2.1,2.7-4.4,3.5-6.8c0.4-1.2,0.7-2.4,0.8-3.7\n              c0.1-1.2,0.1-2.4-0.3-3.5c-0.2-0.5-0.5-0.9-0.8-1.2c-0.1-0.1-0.2-0.1-0.3-0.2l-0.4-0.3c-0.3-0.2-0.5-0.4-0.8-0.6\n              c-1.1-0.8-2.1-1.7-3.1-2.6c-2-1.8-3.8-3.8-5.5-5.9c-1.7-2.1-3.2-4.4-4.5-6.7c-1.4-2.3-2.6-4.7-3.7-7.1c-1.1-2.4-2.2-4.8-3.3-7.2\n              c-1.1-2.3-2.3-4.7-3.9-6.5c-0.8-0.9-1.8-1.7-2.8-2.2c-1.1-0.4-2.3-0.6-3.6-0.4c-2.5,0.3-4.9,1.6-7.2,2.9l-0.1-0.2\n              c1-0.8,2.1-1.6,3.3-2.2c1.2-0.7,2.4-1.2,3.8-1.5c1.4-0.3,2.9-0.3,4.3,0.1c1.4,0.5,2.6,1.3,3.6,2.3c2,2,3.3,4.4,4.6,6.7\n              c1.3,2.4,2.4,4.7,3.6,7.1c2.4,4.7,4.9,9.2,8,13.4c1.5,2.1,3.2,4,5.1,5.8c0.9,0.9,1.9,1.8,2.9,2.6c0.2,0.2,0.5,0.4,0.8,0.6l0.4,0.3\n              c0.1,0.1,0.3,0.3,0.5,0.4c0.6,0.6,1,1.3,1.3,2c0.5,1.5,0.5,3,0.4,4.4c-0.2,1.4-0.5,2.7-1,4c-0.9,2.6-2.3,5-3.9,7.1\n              c-3.3,4.4-7.7,7.6-12.6,10c-2.4,1.1-5,2.1-7.6,2.6c-2.6,0.5-5.3,0.7-8,0.5c-2.7-0.1-5.3-0.7-7.8-1.7c-1.2-0.5-2.4-1.1-3.5-1.9\n              c-1.1-0.8-2.1-1.6-2.9-2.8L130.4,192z\" />\n              <path id=\"Fill-49\" class=\"st16\" d=\"M181.6,182.2c1.7-1.2,3.3-2.7,4.5-4.5c1.2-1.8,2.1-3.8,2.6-6c1.1-4.3,0.9-8.9,0.1-13.3\n              c-0.4-2.2-1-4.4-1.7-6.5c-0.7-2.1-1.5-4.2-2.3-6.2c-0.8-2-1.8-4-2.8-5.9c-0.5-0.9-1.1-1.8-1.8-2.6c-0.3-0.4-0.7-0.8-1.1-1.1\n              c-0.4-0.3-0.8-0.6-1.3-0.6l0-0.2c0.5-0.1,1.1,0,1.6,0.2c0.5,0.2,1,0.6,1.4,0.9c0.9,0.7,1.6,1.5,2.3,2.4c1.4,1.8,2.5,3.8,3.6,5.8\n              c2,4.2,3.1,8.8,3.7,13.4c0.6,4.6,0.6,9.5-0.8,14c-0.7,2.2-1.8,4.3-3.1,6.1c-1.4,1.8-3.1,3.2-4.9,4.2L181.6,182.2z\" />\n              <path id=\"Fill-53\" class=\"st16\" d=\"M3.4,170.7c-0.6,1.5-0.9,3.2-1.2,4.8c-0.1,0.8-0.3,1.6-0.4,2.5c-0.1,0.8-0.2,1.7-0.3,2.5\n              c-0.3,3.3-0.4,6.6-0.3,10c0.1,3.3,0.3,6.6,0.8,9.9c0.1,0.8,0.3,1.6,0.4,2.4c0.1,0.8,0.3,1.6,0.5,2.4c0.4,1.6,0.8,3.2,1.2,4.8\n              c0.2,0.8,0.5,1.5,0.8,2.2c0.3,0.7,0.7,1.4,1.1,1.8c0.5,0.5,1,0.8,1.6,1c0.3,0.1,0.7,0.1,1,0.2c0.4,0,0.8,0,1,0\n              c0.6-0.1,1-0.3,1.4-0.8c0.4-0.4,0.8-1.1,1.1-1.8c0.3-0.7,0.5-1.4,0.7-2.2c0.2-0.8,0.4-1.5,0.5-2.3c0.3-1.6,0.6-3.2,0.8-4.9\n              c0.2-1.6,0.4-3.3,0.6-4.9c0.4-3.3,0.7-6.6,1.2-10l0.2,0c0.2,3.4,0.3,6.7,0.3,10.1c0,3.4-0.2,6.7-0.7,10.1\n              c-0.3,1.7-0.6,3.4-1.3,5.1c-0.4,0.8-0.8,1.7-1.6,2.5c-0.4,0.4-0.8,0.7-1.3,1c-0.5,0.3-1.1,0.4-1.6,0.5c-0.6,0-1,0-1.5,0\n              c-0.5-0.1-1-0.1-1.5-0.3c-1-0.3-1.9-0.9-2.5-1.7c-0.7-0.8-1.1-1.6-1.4-2.5c-0.3-0.8-0.6-1.7-0.8-2.5c-0.4-1.7-0.7-3.3-1.1-5\n              c-0.1-0.8-0.3-1.7-0.4-2.5c-0.1-0.8-0.2-1.7-0.3-2.5c-0.3-3.4-0.5-6.7-0.4-10.1c0.1-3.4,0.3-6.7,0.7-10c0.1-0.8,0.2-1.7,0.4-2.5\n              c0.1-0.8,0.3-1.7,0.5-2.5c0.4-1.6,0.8-3.3,1.5-4.8L3.4,170.7z\" />\n              <path id=\"Fill-55\" class=\"st16\" d=\"M21.6,174.8c0.3,0,0.5,0.1,0.7,0.3c0.2,0.2,0.3,0.4,0.5,0.6c0.2,0.4,0.4,0.8,0.6,1.3\n              c0.3,0.9,0.5,1.8,0.6,2.7c0.3,1.8,0.4,3.6,0.4,5.4c0,0.9,0,1.8-0.1,2.7c0,0.5-0.1,0.9-0.2,1.4c-0.1,0.4-0.2,0.8-0.3,1.3\n              c-0.1,0.4-0.2,0.9-0.4,1.3c-0.2,0.5-0.3,1-0.7,1.4c-0.3,0.5-0.9,0.9-1.5,1c-0.6,0.1-1.1,0-1.5-0.2v-0.2c0.4-0.2,0.8-0.4,1.1-0.6\n              c0.3-0.2,0.3-0.5,0.4-0.8c0.1-0.6,0.1-1.5,0.2-2.4c0-0.4,0.1-0.9,0.2-1.3c0.1-0.4,0.2-0.8,0.3-1.2c0.2-0.8,0.4-1.7,0.5-2.5\n              c0.1-0.9,0.2-1.7,0.3-2.6c0.1-0.9,0.1-1.7,0.1-2.6c0-0.9,0-1.7-0.1-2.6c-0.1-0.4-0.2-0.8-0.3-1.2c-0.1-0.4-0.4-0.8-0.7-0.8V174.8z\n              \" />\n              <path id=\"Fill-57\" class=\"st5\" d=\"M15.9,188.4c-0.1-0.4-0.2-0.9,0.2-1.4c0.1-0.1,0.3-0.3,0.6-0.3c0.1,0,0.2,0.1,0.4,0.1\n              c0.1,0.1,0.2,0.1,0.2,0.2c0.2,0.2,0.4,0.5,0.5,0.7c0.2,0.5,0.3,0.9,0.4,1.4c0,0.5,0.1,0.9,0.1,1.3c0,0.4,0.2,0.7,0.3,1.1\n              c0.1,0.3,0.2,0.6,0.2,0.8c0,0.2,0.1,0.4,0.2,0.7c0.1,0.3,0.4,0.5,0.8,0.9v0.2c-0.4,0.3-1,0.5-1.6,0.4c-0.6-0.1-1.2-0.5-1.5-1.1\n              c-0.3-0.5-0.5-1.1-0.5-1.6c0-0.5,0.1-1,0.2-1.4c0.1-0.9,0.3-1.6,0.3-2.3c0-0.2,0-0.3,0-0.4c0,0,0,0,0,0c0,0,0,0,0.1,0\n              c0.1,0,0.1-0.1,0.1-0.1c-0.1,0-0.2,0.2-0.3,0.4c-0.1,0.2-0.1,0.4-0.2,0.6H15.9z\" />\n              <path id=\"Polygon\" class=\"st19\" d=\"M112.2,84.7l5.5,5c0.6,0.6,0.9,1.4,0.7,2.3l-1.5,7.2c-0.2,0.8-0.8,1.5-1.6,1.8l-7,2.3\n              c-0.8,0.3-1.7,0.1-2.4-0.5l-5.5-5c-0.6-0.6-0.9-1.4-0.7-2.3l1.5-7.2c0.2-0.8,0.8-1.5,1.6-1.8l7-2.3\n              C110.7,83.9,111.6,84.1,112.2,84.7z\" />\n            </g>\n          </g>\n        </svg>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/splash/splash.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/splash/splash.component.ts ***!
  \*******************************************************/
/*! exports provided: SplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashComponent", function() { return SplashComponent; });
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


var SplashComponent = /** @class */ (function () {
    function SplashComponent(route) {
        this.route = route;
    }
    SplashComponent.prototype.ngOnInit = function () { };
    SplashComponent.prototype.onClick = function () {
        if (this.checkboxValue) {
            this.route.navigate(["/jeep"]);
        }
    };
    SplashComponent.prototype.togle = function () { };
    SplashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-splash",
            template: __webpack_require__(/*! ./splash.component.html */ "./src/app/components/splash/splash.component.html"),
            styles: [__webpack_require__(/*! ./splash.component.css */ "./src/app/components/splash/splash.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SplashComponent);
    return SplashComponent;
}());



/***/ }),

/***/ "./src/app/components/takeoff/takeoff.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/takeoff/takeoff.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-left:20%; \n}\n\n.item {\n    width: 100vw;\n}"

/***/ }),

/***/ "./src/app/components/takeoff/takeoff.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/takeoff/takeoff.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"item\">\n    <lottie-animation-view [options]=\"lottieConfig\" (animCreated)=\"handleAnimation($event)\">\n    </lottie-animation-view>\n    <div id=\"player\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/takeoff/takeoff.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/takeoff/takeoff.component.ts ***!
  \*********************************************************/
/*! exports provided: TakeoffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeoffComponent", function() { return TakeoffComponent; });
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


var TakeoffComponent = /** @class */ (function () {
    function TakeoffComponent(router) {
        this.router = router;
        this.animationSpeed = 1;
        this.lottieConfig = {
            path: "../../../assets/animations/takeoff/takeoff.json",
            autoplay: true,
            loop: true
        };
    }
    TakeoffComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(["/spaceship"]);
        }, 4700);
    };
    TakeoffComponent.prototype.handleAnimation = function (anim) {
        this.anim = anim;
    };
    TakeoffComponent.prototype.stop = function () {
        this.anim.stop();
    };
    TakeoffComponent.prototype.play = function () {
        this.anim.play();
    };
    TakeoffComponent.prototype.pause = function () {
        this.anim.pause();
    };
    TakeoffComponent.prototype.setSpeed = function (speed) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    };
    TakeoffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-takeoff",
            template: __webpack_require__(/*! ./takeoff.component.html */ "./src/app/components/takeoff/takeoff.component.html"),
            styles: [__webpack_require__(/*! ./takeoff.component.css */ "./src/app/components/takeoff/takeoff.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TakeoffComponent);
    return TakeoffComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
        this.data = {
            name: "",
            surname: "",
            city: "",
            date: "",
            course: "",
            token: "",
        };
    }
    DataService.prototype.addToken = function (token) {
        Object.assign(this.data, { token: token });
    };
    DataService.prototype.addName = function (name, surname) {
        Object.assign(this.data, { name: name, surname: surname });
    };
    DataService.prototype.addCity = function (city) {
        Object.assign(this.data, { city: city });
    };
    DataService.prototype.addDate = function (date) {
        Object.assign(this.data, { date: date });
    };
    DataService.prototype.addCourse = function (course) {
        Object.assign(this.data, { course: course });
    };
    DataService.prototype.getData = function () {
        return this.data;
    };
    DataService.prototype.addNameLinkedin = function (user) {
        Object.assign(this.data, { name: user.firstName, surname: user.lastName });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/linkedin.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/linkedin.service.ts ***!
  \**********************************************/
/*! exports provided: LinkedinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinService", function() { return LinkedinService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enviroments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enviroments/environment */ "./src/enviroments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LinkedinService = /** @class */ (function () {
    function LinkedinService(http, Http) {
        this.http = http;
        this.Http = Http;
        this.person = [];
    }
    LinkedinService.prototype.handleError = function (e) {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(e);
    };
    LinkedinService.prototype.getToken = function (params) {
        return this.http
            .get(_enviroments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + "/api/oauth/linkedin/callback/?code=" + params.code + "&state=" + params.state)
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    LinkedinService.prototype.getCode = function () {
        return this.http
            .get(_enviroments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + "/api/oauth/linkedin")
            .map(function (res) { return res; });
    };
    LinkedinService.prototype.sharePost = function (data) {
        return this.http
            .post(_enviroments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL + "/api/submit", { data: data })
            .map(function (res) { return res; });
    };
    LinkedinService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], LinkedinService);
    return LinkedinService;
}());



/***/ }),

/***/ "./src/enviroments/environment.ts":
/*!****************************************!*\
  !*** ./src/enviroments/environment.ts ***!
  \****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    BASE_URL: '',
    DB: "http://localhost:4000/courseEditions"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _enviroments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enviroments/environment */ "./src/enviroments/environment.ts");




if (_enviroments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/giorgio/coding/projects/squad-converter/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map