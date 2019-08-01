(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height\">\r\n  <app-navbar></app-navbar>\r\n  <div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-strategy-list></app-strategy-list>\r\n<app-strategy-detail></app-strategy-detail>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar\">\r\n    <div class=\"logo\">\r\n      <p>Velociti</p>\r\n    </div>\r\n    <div class=\"menu\">\r\n      <span class=\"menu-item\" [routerLink]=\"['']\">Dashboard</span>\r\n      <span class=\"menu-item\">Notifications</span>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/strategy/strategy-create/strategy-create.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/strategy/strategy-create/strategy-create.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>strategy create</h1>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/strategy/strategy-detail/strategy-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/strategy/strategy-detail/strategy-detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"strategy-details\">\r\n  <div class=\"preformance-graph\">\r\n\r\n  </div>\r\n  <div class=\"menu\">\r\n    <a (click)=\"toggelDetails()\" [ngClass]=\"showDetails ? 'active' : ''\">Details</a>\r\n    <a (click)=\"toggelStatistics()\" [ngClass]=\"showStatitics ? 'active' : ''\">Statistics</a>\r\n    <a (click)=\"toggelTrades()\" [ngClass]=\"showTrades ? 'active' : ''\">Trades</a>\r\n  </div>\r\n  <div *ngIf=\"showDetails\" class=\"details\">\r\n    <h1>Details</h1>\r\n  </div>\r\n  <div *ngIf=\"showStatitics\" class=\"statistics\">\r\n    <h1>Statistics</h1>\r\n    <div class=\"statistics-item\">\r\n      <span class=\"label\">Strategy Balance</span>\r\n      <span class=\"value\">$1000.55</span>\r\n    </div>\r\n    <div class=\"statistics-item\">\r\n      <span class=\"label\">Number of Trades</span>\r\n      <span class=\"value\">2</span>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"showTrades\" class=\"trades\">\r\n    <h1>Trades</h1>\r\n    <table class=\"trades-table\">\r\n      <tr class=\"trades-table-header\">\r\n        <th align=\"left\">Action</th>\r\n        <th align=\"left\">Market</th>\r\n        <th align=\"left\">Quantity</th>\r\n        <th align=\"left\">Price</th>\r\n        <th align=\"left\">Time</th>\r\n        <th align=\"left\">Performance</th>\r\n      </tr>\r\n      <tr class=\"trade-row\">\r\n        <td>Sell</td>\r\n        <td>NASDAQ</td>\r\n        <td>1000</td>\r\n        <td>$390.48</td>\r\n        <td>7/20/19 3:00AM</td>\r\n        <td>0.5% ^ +$5.00</td>\r\n      </tr>\r\n      <tr class=\"trade-row\">\r\n        <td>Buy</td>\r\n        <td>NASDAQ</td>\r\n        <td>1000</td>\r\n        <td>$385.33</td>\r\n        <td>7/20/19 6:22AM</td>\r\n        <td>0.48% ^ $4.80</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/strategy/strategy-list/strategy-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/strategy/strategy-list/strategy-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"strategy-list\">\r\n  <div class=\"header\">\r\n    <div class=\"strategy-title\">Strategies</div>\r\n    <button href=\"/strategy/new\" type=\"button\" name=\"button\" class=\"green-button\" [routerLink]=\"['./strategy/new']\">New</button>\r\n  </div>\r\n  <div class=\"strategy\">\r\n    <span>APPL TMA</span>\r\n    <span>$3.2M</span>\r\n    <p class=\"status active\">Active</p>\r\n  </div>\r\n  <div class=\"strategy\">\r\n    <span>GOOG PB</span>\r\n    <span>$29.8M</span>\r\n    <p class=\"status stopped\">Stopped</p>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _strategy_strategy_create_strategy_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./strategy/strategy-create/strategy-create.component */ "./src/app/strategy/strategy-create/strategy-create.component.ts");





var routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: 'strategy/new',
        component: _strategy_strategy_create_strategy_create_component__WEBPACK_IMPORTED_MODULE_4__["StrategyCreateComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".content {\r\n  clear: both;\r\n  margin: 90px;\r\n  padding-top: 25px;\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBjbGVhcjogYm90aDtcclxuICBtYXJnaW46IDkwcHg7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'velociti-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _strategy_strategy_list_strategy_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strategy/strategy-list/strategy-list.component */ "./src/app/strategy/strategy-list/strategy-list.component.ts");
/* harmony import */ var _strategy_strategy_detail_strategy_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./strategy/strategy-detail/strategy-detail.component */ "./src/app/strategy/strategy-detail/strategy-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _strategy_strategy_create_strategy_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./strategy/strategy-create/strategy-create.component */ "./src/app/strategy/strategy-create/strategy-create.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _strategy_strategy_list_strategy_list_component__WEBPACK_IMPORTED_MODULE_6__["StrategyListComponent"],
                _strategy_strategy_detail_strategy_detail_component__WEBPACK_IMPORTED_MODULE_7__["StrategyDetailComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _strategy_strategy_create_strategy_create_component__WEBPACK_IMPORTED_MODULE_9__["StrategyCreateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar {\r\n  margin: 0 40px;\r\n}\r\n\r\n.logo {\r\n  float: left;\r\n}\r\n\r\n.menu {\r\n  float: right;\r\n  margin-top: 20px;\r\n}\r\n\r\n.menu-item {\r\n  margin: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu-item:focus {\r\n  outline: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFyIHtcclxuICBtYXJnaW46IDAgNDBweDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0ge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW06Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/strategy/strategy-create/strategy-create.component.css":
/*!************************************************************************!*\
  !*** ./src/app/strategy/strategy-create/strategy-create.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cmF0ZWd5L3N0cmF0ZWd5LWNyZWF0ZS9zdHJhdGVneS1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/strategy/strategy-create/strategy-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/strategy/strategy-create/strategy-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: StrategyCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyCreateComponent", function() { return StrategyCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StrategyCreateComponent = /** @class */ (function () {
    function StrategyCreateComponent() {
    }
    StrategyCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-strategy-create',
            template: __webpack_require__(/*! raw-loader!./strategy-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/strategy/strategy-create/strategy-create.component.html"),
            styles: [__webpack_require__(/*! ./strategy-create.component.css */ "./src/app/strategy/strategy-create/strategy-create.component.css")]
        })
    ], StrategyCreateComponent);
    return StrategyCreateComponent;
}());



/***/ }),

/***/ "./src/app/strategy/strategy-detail/strategy-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/strategy/strategy-detail/strategy-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".strategy-details {\r\n  float: right;\r\n  min-width: 660px;\r\n}\r\n\r\n.menu {\r\n  margin-bottom: 20px;\r\n  padding-bottom: 4px;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.menu a {\r\n  color: white;\r\n  text-decoration: none;\r\n  margin: 18px;\r\n  border-bottom: 1px solid black;\r\n  padding: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu > a.active {\r\n  color: #21CE99;\r\n  border-bottom: 1px solid #21CE99;\r\n}\r\n\r\n.menu a:hover {\r\n  color: #21CE99;\r\n  border-bottom: 1px solid #21CE99;\r\n}\r\n\r\n.statistics {\r\n\r\n}\r\n\r\n.statistics-item {\r\n  display: flow-root;\r\n  padding: 10px 0px;\r\n  border-top: 1px solid black;\r\n}\r\n\r\n.statistics-item .label {\r\n  float: left;\r\n  color: #CBCBCD;\r\n  font-weight: 400;\r\n}\r\n\r\n.statistics-item .value {\r\n  float: right;\r\n}\r\n\r\n.trades-table {\r\n  width: 100%;\r\n}\r\n\r\n.trades-table-header th {\r\n  color: #CBCBCD;\r\n  font-weight: 400;\r\n}\r\n\r\n.trade-row {\r\n\r\n}\r\n\r\n.trade-row:hover {\r\n  background-color: #171718;\r\n}\r\n\r\n.trade-row td {\r\n  font-weight: 100;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\ntd {\r\n  margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RyYXRlZ3kvc3RyYXRlZ3ktZGV0YWlsL3N0cmF0ZWd5LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTs7QUFFQTs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc3RyYXRlZ3kvc3RyYXRlZ3ktZGV0YWlsL3N0cmF0ZWd5LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0cmF0ZWd5LWRldGFpbHMge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtaW4td2lkdGg6IDY2MHB4O1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLm1lbnUgYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDE4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZW51ID4gYS5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMjFDRTk5O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjFDRTk5O1xyXG59XHJcblxyXG4ubWVudSBhOmhvdmVyIHtcclxuICBjb2xvcjogIzIxQ0U5OTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIxQ0U5OTtcclxufVxyXG5cclxuLnN0YXRpc3RpY3Mge1xyXG5cclxufVxyXG5cclxuLnN0YXRpc3RpY3MtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxvdy1yb290O1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnN0YXRpc3RpY3MtaXRlbSAubGFiZWwge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiAjQ0JDQkNEO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5zdGF0aXN0aWNzLWl0ZW0gLnZhbHVlIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi50cmFkZXMtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udHJhZGVzLXRhYmxlLWhlYWRlciB0aCB7XHJcbiAgY29sb3I6ICNDQkNCQ0Q7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnRyYWRlLXJvdyB7XHJcblxyXG59XHJcblxyXG4udHJhZGUtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE4O1xyXG59XHJcblxyXG4udHJhZGUtcm93IHRkIHtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/strategy/strategy-detail/strategy-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/strategy/strategy-detail/strategy-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: StrategyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyDetailComponent", function() { return StrategyDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StrategyDetailComponent = /** @class */ (function () {
    function StrategyDetailComponent() {
        this.showDetails = true;
        this.showStatitics = false;
        this.showTrades = false;
    }
    StrategyDetailComponent.prototype.ngOnInit = function () {
    };
    StrategyDetailComponent.prototype.toggelDetails = function () {
        this.showTrades = false;
        this.showStatitics = false;
        this.showDetails = true;
    };
    StrategyDetailComponent.prototype.toggelStatistics = function () {
        this.showTrades = false;
        this.showDetails = false;
        this.showStatitics = true;
    };
    StrategyDetailComponent.prototype.toggelTrades = function () {
        this.showStatitics = false;
        this.showDetails = false;
        this.showTrades = true;
    };
    StrategyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-strategy-detail',
            template: __webpack_require__(/*! raw-loader!./strategy-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/strategy/strategy-detail/strategy-detail.component.html"),
            styles: [__webpack_require__(/*! ./strategy-detail.component.css */ "./src/app/strategy/strategy-detail/strategy-detail.component.css")]
        })
    ], StrategyDetailComponent);
    return StrategyDetailComponent;
}());



/***/ }),

/***/ "./src/app/strategy/strategy-list/strategy-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/strategy/strategy-list/strategy-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".strategy-list {\r\n  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.01), 0 3px 24px rgba(0, 0, 0, 0.6);\r\n  width: 350px;\r\n  float: left;\r\n  height: 80%;\r\n}\r\n\r\n.header {\r\n  padding: 15px;\r\n  border-bottom: 1px solid #0e0d0d;\r\n  padding-bottom: 45px;\r\n}\r\n\r\n.strategy-title {\r\n  float: left;\r\n  margin-top: 6px;\r\n}\r\n\r\n.strategy {\r\n  padding: 16px 28px;\r\n  cursor: pointer;\r\n}\r\n\r\n.strategy:hover {\r\n  background-color: #171718;\r\n}\r\n\r\n.green-button {\r\n  float: right;\r\n  background: #21CE99;\r\n  border-radius: 25px;\r\n  border: none;\r\n  padding: 9px 21px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n.green-button:hover {\r\n  color: #21ce99;\r\n  background: #182b27;\r\n}\r\n\r\nbutton:focus {outline:0;}\r\n\r\n.strategy span {\r\n  padding-right: 40px;\r\n}\r\n\r\n.strategy > .status.active {\r\n  display: inline-block;\r\n  color: #21ce99;\r\n  background: #182b27;\r\n  padding: 7px;\r\n  border-radius: 225px;\r\n}\r\n\r\n.strategy > .status.stopped {\r\n  display: inline-block;\r\n  color: #f45531;\r\n  background: #2d201f;;\r\n  padding: 7px;\r\n  border-radius: 225px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RyYXRlZ3kvc3RyYXRlZ3ktbGlzdC9zdHJhdGVneS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwRUFBMEU7RUFDMUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQSxjQUFjLFNBQVMsQ0FBQzs7QUFFeEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3N0cmF0ZWd5L3N0cmF0ZWd5LWxpc3Qvc3RyYXRlZ3ktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0cmF0ZWd5LWxpc3Qge1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMSksIDAgM3B4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDgwJTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBlMGQwZDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDVweDtcclxufVxyXG5cclxuLnN0cmF0ZWd5LXRpdGxlIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5zdHJhdGVneSB7XHJcbiAgcGFkZGluZzogMTZweCAyOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN0cmF0ZWd5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE4O1xyXG59XHJcblxyXG4uZ3JlZW4tYnV0dG9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZDogIzIxQ0U5OTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA5cHggMjFweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmdyZWVuLWJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6ICMyMWNlOTk7XHJcbiAgYmFja2dyb3VuZDogIzE4MmIyNztcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzIHtvdXRsaW5lOjA7fVxyXG5cclxuLnN0cmF0ZWd5IHNwYW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zdHJhdGVneSA+IC5zdGF0dXMuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICMyMWNlOTk7XHJcbiAgYmFja2dyb3VuZDogIzE4MmIyNztcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjI1cHg7XHJcbn1cclxuXHJcbi5zdHJhdGVneSA+IC5zdGF0dXMuc3RvcHBlZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjZjQ1NTMxO1xyXG4gIGJhY2tncm91bmQ6ICMyZDIwMWY7O1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBib3JkZXItcmFkaXVzOiAyMjVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/strategy/strategy-list/strategy-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/strategy/strategy-list/strategy-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: StrategyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyListComponent", function() { return StrategyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StrategyListComponent = /** @class */ (function () {
    function StrategyListComponent() {
    }
    StrategyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-strategy-list',
            template: __webpack_require__(/*! raw-loader!./strategy-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/strategy/strategy-list/strategy-list.component.html"),
            styles: [__webpack_require__(/*! ./strategy-list.component.css */ "./src/app/strategy/strategy-list/strategy-list.component.css")]
        })
    ], StrategyListComponent);
    return StrategyListComponent;
}());



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

module.exports = __webpack_require__(/*! C:\Users\Administrator\Desktop\VeloCiti\VelocitiFrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map