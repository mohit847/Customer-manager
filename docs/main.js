"use strict";
(self["webpackChunkangular_jumpstart"] = self["webpackChunkangular_jumpstart"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/strategies/preload-modules.strategy */ 9380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const app_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers' },
    { path: 'customers/:id', data: { preload: true }, loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_customer_customer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./customer/customer.module */ 505)).then(m => m.CustomerModule) },
    { path: 'customers', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_customers_customers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./customers/customers.module */ 7258)).then(m => m.CustomersModule) },
    { path: 'orders', data: { preload: true }, loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_orders_orders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./orders/orders.module */ 4819)).then(m => m.OrdersModule) },
    { path: 'about', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 6985)).then(m => m.AboutModule) },
    { path: '**', pathMatch: 'full', redirectTo: '/customers' } // catch any unfound routes and redirect to home page
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_0__.PreloadModulesStrategy], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(app_routes, { preloadingStrategy: _core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_0__.PreloadModulesStrategy, relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_growler_growler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/growler/growler.component */ 4649);
/* harmony import */ var _core_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/modal/modal.component */ 6786);
/* harmony import */ var _core_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/overlay/overlay.component */ 6831);
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/navbar/navbar.component */ 1239);






class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["cm-app-component"]], decls: 10, vars: 2, consts: [[1, "container"], ["position", "top-right", 3, "timeout"], [3, "delay"], [1, "spinner"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "cm-navbar")(2, "router-outlet")(3, "cm-growler", 1)(4, "cm-modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "cm-overlay", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u00A0\u00A0\u00A0Loading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br")(9, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("timeout", 2000);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("delay", 300);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _core_growler_growler_component__WEBPACK_IMPORTED_MODULE_0__.GrowlerComponent, _core_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent, _core_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_2__.OverlayComponent, _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.module */ 107);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _login_login_module__WEBPACK_IMPORTED_MODULE_2__.LoginModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule // Shared (multi-instance) objects
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _login_login_module__WEBPACK_IMPORTED_MODULE_2__.LoginModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule // Shared (multi-instance) objects
    ] }); })();


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _growler_growler_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./growler/growler.module */ 2987);
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/modal.module */ 2135);
/* harmony import */ var _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay/overlay.module */ 6459);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data.service */ 5925);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ 1239);
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/filter.service */ 1375);
/* harmony import */ var _services_sorter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/sorter.service */ 4490);
/* harmony import */ var _services_trackby_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/trackby.service */ 6633);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/dialog.service */ 6797);
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ensure-module-loaded-once.guard */ 8352);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ 263);
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/event-bus.service */ 7650);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 1603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);

















class CoreModule extends _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_9__.EnsureModuleLoadedOnceGuard {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](CoreModule, 12)); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [_services_sorter_service__WEBPACK_IMPORTED_MODULE_6__.SorterService, _services_filter_service__WEBPACK_IMPORTED_MODULE_5__.FilterService, _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService, _services_trackby_service__WEBPACK_IMPORTED_MODULE_7__.TrackByService,
        _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__.DialogService, _services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService, _services_event_bus_service__WEBPACK_IMPORTED_MODULE_11__.EventBusService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
            useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__.AuthInterceptor,
            multi: true,
        },
        { provide: 'Window', useFactory: () => window }
    ] // these should be singleton
    , imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _growler_growler_module__WEBPACK_IMPORTED_MODULE_0__.GrowlerModule, _modal_modal_module__WEBPACK_IMPORTED_MODULE_1__.ModalModule, _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_2__.OverlayModule, _growler_growler_module__WEBPACK_IMPORTED_MODULE_0__.GrowlerModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _modal_modal_module__WEBPACK_IMPORTED_MODULE_1__.ModalModule, _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_2__.OverlayModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _growler_growler_module__WEBPACK_IMPORTED_MODULE_0__.GrowlerModule, _modal_modal_module__WEBPACK_IMPORTED_MODULE_1__.ModalModule, _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_2__.OverlayModule], exports: [_growler_growler_module__WEBPACK_IMPORTED_MODULE_0__.GrowlerModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _modal_modal_module__WEBPACK_IMPORTED_MODULE_1__.ModalModule, _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_2__.OverlayModule, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent] }); })();


/***/ }),

/***/ 8352:
/*!*********************************************************!*\
  !*** ./src/app/core/ensure-module-loaded-once.guard.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnsureModuleLoadedOnceGuard": () => (/* binding */ EnsureModuleLoadedOnceGuard)
/* harmony export */ });
class EnsureModuleLoadedOnceGuard {
    constructor(targetModule) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}


/***/ }),

/***/ 4649:
/*!***************************************************!*\
  !*** ./src/app/core/growler/growler.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrowlerComponent": () => (/* binding */ GrowlerComponent)
/* harmony export */ });
/* harmony import */ var _growler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./growler.service */ 4938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/logger.service */ 4080);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





const _c0 = function (a0) { return { active: a0 }; };
function GrowlerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const growl_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("growl alert ", growl_r1.messageType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, growl_r1.enabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](growl_r1.message);
} }
class GrowlerComponent {
    constructor(growlerService, logger) {
        this.growlerService = growlerService;
        this.logger = logger;
        this.growlCount = 0;
        this.growls = [];
        this.position = 'bottom-right';
        this.timeout = 3000;
        growlerService.growl = this.growl.bind(this);
    }
    ngOnInit() { }
    /**
    * Displays a growl message.
    *
    * @param {string} message - The message to display.
    * @param {GrowlMessageType} growlType - The type of message to display (a GrowlMessageType enumeration)
    * @return {number} id - Returns the ID for the generated growl
    */
    growl(message, growlType) {
        this.growlCount++;
        const bootstrapAlertType = _growler_service__WEBPACK_IMPORTED_MODULE_0__.GrowlerMessageType[growlType].toLowerCase();
        const messageType = `alert-${bootstrapAlertType}`;
        const growl = new Growl(this.growlCount, message, messageType, this.timeout, this);
        this.growls.push(growl);
        return growl.id;
    }
    removeGrowl(id) {
        this.growls.forEach((growl, index) => {
            if (growl.id === id) {
                this.growls.splice(index, 1);
                this.growlCount--;
                this.logger.log('removed ' + id);
            }
        });
    }
}
GrowlerComponent.ɵfac = function GrowlerComponent_Factory(t) { return new (t || GrowlerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_growler_service__WEBPACK_IMPORTED_MODULE_0__.GrowlerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerService)); };
GrowlerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GrowlerComponent, selectors: [["cm-growler"]], inputs: { position: "position", timeout: "timeout" }, decls: 2, vars: 2, consts: [[1, "growler", 3, "ngClass"], [3, "ngClass", "class", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "growl-message"]], template: function GrowlerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GrowlerComponent_div_1_Template, 3, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.growls);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".growler[_ngcontent-%COMP%] {\n      position: fixed;\n      z-index: 999999;\n    }\n    \n    .growler.close-button[_ngcontent-%COMP%]:focus {\n      outline: 0;\n    }\n    \n    .growler.top-left[_ngcontent-%COMP%] {\n      top: 12px;\n      left: 12px;\n    }\n    \n    .growler.top-right[_ngcontent-%COMP%] {\n      top: 12px;\n      right: 12px;\n    }\n    \n    .growler.bottom-right[_ngcontent-%COMP%] {\n      bottom: 12px;\n      right: 12px;\n    }\n    \n    .growler.bottom-left[_ngcontent-%COMP%] {\n      bottom: 12px;\n      left: 12px;\n    }\n    \n    .growler.top-center[_ngcontent-%COMP%] {\n      top: 12px;\n      left: 50%;\n      transform: translate(-50%, 0%);\n    }\n    \n    .growler.bottom-center[_ngcontent-%COMP%] {\n      bottom: 12px;\n      left: 50%;\n      transform: translate(-50%, 0%);\n    }\n    \n    .growl[_ngcontent-%COMP%] {\n      cursor: pointer;\n      padding: 5;\n      width: 285px;\n      height: 65px; \n      opacity: 0;      \n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: opacity 1s;        \n    }\n    \n    .growl.active[_ngcontent-%COMP%] {        \n      opacity: 1;\n    }\n    \n    .growl-message[_ngcontent-%COMP%] {\n\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3dsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiSUFBSTtNQUNFLGVBQWU7TUFDZixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsVUFBVTtJQUNaOztJQUVBO01BQ0UsU0FBUztNQUNULFVBQVU7SUFDWjs7SUFFQTtNQUNFLFNBQVM7TUFDVCxXQUFXO0lBQ2I7O0lBRUE7TUFDRSxZQUFZO01BQ1osV0FBVztJQUNiOztJQUVBO01BQ0UsWUFBWTtNQUNaLFVBQVU7SUFDWjs7SUFFQTtNQUNFLFNBQVM7TUFDVCxTQUFTO01BRUQsOEJBQThCO0lBQ3hDOztJQUVBO01BQ0UsWUFBWTtNQUNaLFNBQVM7TUFFRCw4QkFBOEI7SUFDeEM7O0lBRUE7TUFDRSxlQUFlO01BQ2YsVUFBVTtNQUNWLFlBQVk7TUFDWixZQUFZO01BQ1osVUFBVTtNQUNWLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BS3ZCLHNCQUFzQjtJQUN4Qjs7SUFFQTtNQUNFLFVBQVU7SUFDWjs7SUFFQTs7SUFFQSIsImZpbGUiOiJncm93bGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmdyb3dsZXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgei1pbmRleDogOTk5OTk5O1xuICAgIH1cbiAgICBcbiAgICAuZ3Jvd2xlci5jbG9zZS1idXR0b246Zm9jdXMge1xuICAgICAgb3V0bGluZTogMDtcbiAgICB9XG4gICAgXG4gICAgLmdyb3dsZXIudG9wLWxlZnQge1xuICAgICAgdG9wOiAxMnB4O1xuICAgICAgbGVmdDogMTJweDtcbiAgICB9XG4gICAgXG4gICAgLmdyb3dsZXIudG9wLXJpZ2h0IHtcbiAgICAgIHRvcDogMTJweDtcbiAgICAgIHJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgICBcbiAgICAuZ3Jvd2xlci5ib3R0b20tcmlnaHQge1xuICAgICAgYm90dG9tOiAxMnB4O1xuICAgICAgcmlnaHQ6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIC5ncm93bGVyLmJvdHRvbS1sZWZ0IHtcbiAgICAgIGJvdHRvbTogMTJweDtcbiAgICAgIGxlZnQ6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIC5ncm93bGVyLnRvcC1jZW50ZXIge1xuICAgICAgdG9wOiAxMnB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICB9XG4gICAgXG4gICAgLmdyb3dsZXIuYm90dG9tLWNlbnRlciB7XG4gICAgICBib3R0b206IDEycHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICAgIH1cbiAgICBcbiAgICAuZ3Jvd2wge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogNTtcbiAgICAgIHdpZHRoOiAyODVweDtcbiAgICAgIGhlaWdodDogNjVweDsgXG4gICAgICBvcGFjaXR5OiAwOyAgICAgIFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzOyBcbiAgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzOyAgICAgICAgXG4gICAgfSAgIFxuICAgIFxuICAgIC5ncm93bC5hY3RpdmUgeyAgICAgICAgXG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH0gXG4gICAgXG4gICAgLmdyb3dsLW1lc3NhZ2Uge1xuXG4gICAgfSJdfQ== */"] });
class Growl {
    constructor(id, message, messageType, timeout, growlerContainer) {
        this.id = id;
        this.message = message;
        this.messageType = messageType;
        this.timeout = timeout;
        this.growlerContainer = growlerContainer;
        this.enabled = false;
        this.timeoutId = 0;
        this.show();
    }
    show() {
        window.setTimeout(() => {
            this.enabled = true;
            this.setTimeout();
        }, 0);
    }
    setTimeout() {
        window.setTimeout(() => {
            this.hide();
        }, this.timeout);
    }
    hide() {
        this.enabled = false;
        window.setTimeout(() => {
            this.growlerContainer.removeGrowl(this.id);
        }, this.timeout);
    }
}


/***/ }),

/***/ 2987:
/*!************************************************!*\
  !*** ./src/app/core/growler/growler.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrowlerModule": () => (/* binding */ GrowlerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _growler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./growler.component */ 4649);
/* harmony import */ var _growler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./growler.service */ 4938);
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ensure-module-loaded-once.guard */ 8352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class GrowlerModule extends _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_2__.EnsureModuleLoadedOnceGuard {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
}
GrowlerModule.ɵfac = function GrowlerModule_Factory(t) { return new (t || GrowlerModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](GrowlerModule, 12)); };
GrowlerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GrowlerModule });
GrowlerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_growler_service__WEBPACK_IMPORTED_MODULE_1__.GrowlerService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GrowlerModule, { declarations: [_growler_component__WEBPACK_IMPORTED_MODULE_0__.GrowlerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_growler_component__WEBPACK_IMPORTED_MODULE_0__.GrowlerComponent] }); })();


/***/ }),

/***/ 4938:
/*!*************************************************!*\
  !*** ./src/app/core/growler/growler.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrowlerMessageType": () => (/* binding */ GrowlerMessageType),
/* harmony export */   "GrowlerService": () => (/* binding */ GrowlerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class GrowlerService {
    constructor() {
        this.growl = () => 0;
    }
}
GrowlerService.ɵfac = function GrowlerService_Factory(t) { return new (t || GrowlerService)(); };
GrowlerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GrowlerService, factory: GrowlerService.ɵfac });
var GrowlerMessageType;
(function (GrowlerMessageType) {
    GrowlerMessageType[GrowlerMessageType["Success"] = 0] = "Success";
    GrowlerMessageType[GrowlerMessageType["Danger"] = 1] = "Danger";
    GrowlerMessageType[GrowlerMessageType["Warning"] = 2] = "Warning";
    GrowlerMessageType[GrowlerMessageType["Info"] = 3] = "Info";
})(GrowlerMessageType || (GrowlerMessageType = {}));


/***/ }),

/***/ 1603:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class AuthInterceptor {
    constructor() { }
    intercept(req, next) {
        // Get the auth header (fake value is shown here)
        const authHeader = '49a5kdkv409fd39'; // this.authService.getAuthHeader();
        const authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
        return next.handle(authReq);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 6786:
/*!***********************************************!*\
  !*** ./src/app/core/modal/modal.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.service */ 9287);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function ModalComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalContent.cancelButtonText);
} }
const _c0 = function (a0) { return { "in": a0 }; };
const _c1 = function (a0, a1) { return { "display": a0, "opacity": a1 }; };
class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.modalVisible = false;
        this.modalVisibleAnimate = false;
        this.modalContent = {};
        this.cancel = () => { };
        this.ok = () => { };
        this.defaultModalContent = {
            header: 'Please Confirm',
            body: 'Are you sure you want to continue?',
            cancelButtonText: 'Cancel',
            OKButtonText: 'OK',
            cancelButtonVisible: true
        };
        modalService.show = this.show.bind(this);
        modalService.hide = this.hide.bind(this);
    }
    ngOnInit() {
    }
    show(modalContent) {
        this.modalContent = Object.assign(this.defaultModalContent, modalContent);
        this.modalVisible = true;
        setTimeout(() => this.modalVisibleAnimate = true);
        const promise = new Promise((resolve, reject) => {
            this.cancel = () => {
                this.hide();
                resolve(false);
            };
            this.ok = () => {
                this.hide();
                resolve(true);
            };
        });
        return promise;
    }
    hide() {
        this.modalVisibleAnimate = false;
        setTimeout(() => this.modalVisible = false, 300);
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService)); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["cm-modal"]], decls: 15, vars: 11, consts: [["tabindex", "-1", 1, "modal", "fade", 3, "ngClass", "ngStyle"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "class", "btn btn-default", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ModalComponent_button_12_Template, 2, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_13_listener() { return ctx.ok(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.modalVisibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c1, ctx.modalVisible ? "block" : "none", ctx.modalVisibleAnimate ? 1 : 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.modalContent.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.modalContent.body, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalContent.cancelButtonVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.modalContent.OKButtonText);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle], styles: [".modal[_ngcontent-%COMP%] {\n  background: rgba(0,0,0,0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbn0iXX0= */"] });


/***/ }),

/***/ 2135:
/*!********************************************!*\
  !*** ./src/app/core/modal/modal.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalModule": () => (/* binding */ ModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.component */ 6786);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ 9287);
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ensure-module-loaded-once.guard */ 8352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class ModalModule extends _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_2__.EnsureModuleLoadedOnceGuard {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
}
ModalModule.ɵfac = function ModalModule_Factory(t) { return new (t || ModalModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ModalModule, 12)); };
ModalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ModalModule });
ModalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ModalModule, { declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent] }); })();


/***/ }),

/***/ 9287:
/*!*********************************************!*\
  !*** ./src/app/core/modal/modal.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ModalService {
    constructor() {
        this.show = () => { return {}; };
        this.hide = () => { };
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac });


/***/ }),

/***/ 1239:
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _growler_growler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../growler/growler.service */ 4938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 263);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/logger.service */ 4080);






class NavbarComponent {
    constructor(router, authservice, growler, logger) {
        this.router = router;
        this.authservice = authservice;
        this.growler = growler;
        this.logger = logger;
        this.isCollapsed = false;
        this.loginLogoutText = 'Login';
        this.sub = {};
    }
    ngOnInit() {
        this.sub = this.authservice.authChanged
            .subscribe((loggedIn) => {
            this.setLoginLogoutText();
        }, (err) => this.logger.log(err));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    loginOrOut() {
        const isAuthenticated = this.authservice.isAuthenticated;
        if (isAuthenticated) {
            this.authservice.logout()
                .subscribe((status) => {
                this.setLoginLogoutText();
                this.growler.growl('Logged Out', _growler_growler_service__WEBPACK_IMPORTED_MODULE_0__.GrowlerMessageType.Info);
                this.router.navigate(['/customers']);
                return;
            }, (err) => this.logger.log(err));
        }
        this.redirectToLogin();
    }
    redirectToLogin() {
        this.router.navigate(['/login']);
    }
    setLoginLogoutText() {
        this.loginLogoutText = (this.authservice.isAuthenticated) ? 'Logout' : 'Login';
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_growler_growler_service__WEBPACK_IMPORTED_MODULE_0__.GrowlerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["cm-navbar"]], decls: 27, vars: 2, consts: [[1, "navbar", "navbar-inner", "navbar-fixed-top"], [1, "container"], [1, "navbar-header"], ["type", "button", 1, "navbar-toggle", 3, "click"], [1, "sr-only"], [1, "icon-bar"], ["routerLink", "/customers", 1, "navbar-brand"], ["src", "assets/images/people.png", "alt", "logo"], [1, "app-title"], [1, "navbar-collapse"], [1, "nav", "navbar-nav", "nav-pills", "navBarPadding"], ["routerLinkActive", "active"], ["routerLink", "/customers"], ["routerLink", "/orders"], ["routerLink", "/about"], ["routerLinkActive", "active", "data-cy", "login-logout", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Toggle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 5)(7, "span", 5)(8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Customer Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 9)(14, "ul", 10)(15, "li", 11)(16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 11)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li", 11)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_24_listener() { return ctx.loginOrOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-collapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.loginLogoutText);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive], encapsulation: 2 });


/***/ }),

/***/ 3941:
/*!**********************************************************************!*\
  !*** ./src/app/core/overlay/overlay-request-response.interceptor.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlayRequestResponseInterceptor": () => (/* binding */ OverlayRequestResponseInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/event-bus.service */ 7650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






class OverlayRequestResponseInterceptor {
    constructor(eventBus) {
        this.eventBus = eventBus;
    }
    intercept(req, next) {
        const randomTime = this.getRandomIntInclusive(0, 1500);
        const started = Date.now();
        this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_0__.EmitEvent(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_0__.Events.httpRequest));
        return next
            .handle(req)
            .pipe(
        // delay(randomTime),  // Simulate random Http call delays
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
                const elapsed = Date.now() - started;
                this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_0__.EmitEvent(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_0__.Events.httpResponse));
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_0__.EmitEvent(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_0__.Events.httpResponse));
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({});
        }));
    }
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
    }
}
OverlayRequestResponseInterceptor.ɵfac = function OverlayRequestResponseInterceptor_Factory(t) { return new (t || OverlayRequestResponseInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_0__.EventBusService)); };
OverlayRequestResponseInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: OverlayRequestResponseInterceptor, factory: OverlayRequestResponseInterceptor.ɵfac });


/***/ }),

/***/ 6831:
/*!***************************************************!*\
  !*** ./src/app/core/overlay/overlay.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlayComponent": () => (/* binding */ OverlayComponent)
/* harmony export */ });
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/event-bus.service */ 7650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



const _c0 = ["*"];
class OverlayComponent {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.httpRequestSub = {};
        this.httpResponseSub = {};
        this.enabled = false;
        this.queue = [];
        this.timerId = 0;
        this.timerHideId = 0;
        this.delay = 500;
    }
    ngOnInit() {
        // Handle request
        this.httpRequestSub = this.eventBus.on(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_0__.Events.httpRequest, (() => {
            this.queue.push({});
            if (this.queue.length === 1) {
                // Only show if we have an item in the queue after the delay time
                setTimeout(() => {
                    if (this.queue.length) {
                        this.enabled = true;
                    }
                }, this.delay);
            }
        }));
        // Handle response
        this.httpResponseSub = this.eventBus.on(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_0__.Events.httpResponse, (() => {
            this.queue.pop();
            if (this.queue.length === 0) {
                // Since we don't know if another XHR request will be made, pause before
                // hiding the overlay. If another XHR request comes in then the overlay
                // will stay visible which prevents a flicker
                setTimeout(() => {
                    // Make sure queue is still 0 since a new XHR request may have come in
                    // while timer was running
                    if (this.queue.length === 0) {
                        this.enabled = false;
                    }
                }, this.delay);
            }
        }));
    }
    ngOnDestroy() {
        this.httpRequestSub.unsubscribe();
        this.httpResponseSub.unsubscribe();
    }
}
OverlayComponent.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_0__.EventBusService)); };
OverlayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OverlayComponent, selectors: [["cm-overlay"]], inputs: { delay: "delay" }, ngContentSelectors: _c0, decls: 4, vars: 2, consts: [[1, "overlay"], [1, "overlay-background"], [1, "overlay-content"]], template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.enabled);
    } }, styles: [".overlay[_ngcontent-%COMP%] {\n  display:none;\n}\n\n.overlay.active[_ngcontent-%COMP%] {        \n  display: block;\n}\n\n.overlay-background[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: block;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  background-color:rgba(0,0,0,0.6);\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 999999;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border: 1px solid rgb(94, 94, 94);\n  transform: translate(-50%, 0%);\n\n  cursor: pointer;\n  padding: 5;\n  width: 285px;\n  height: 100px;    \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 1s;        \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBOztBQUVBOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFFekIsOEJBQThCOztFQUV0QyxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFNdkIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6Im92ZXJsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcbiAgZGlzcGxheTpub25lO1xufVxuXG4ub3ZlcmxheS5hY3RpdmUgeyAgICAgICAgXG4gIGRpc3BsYXk6IGJsb2NrO1xufSBcblxuLm92ZXJsYXktYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDUwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC42KTtcbn1cblxuLm92ZXJsYXktY29udGVudCB7XG5cbn1cblxuLm92ZXJsYXktY29udGVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTk5O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk0LCA5NCwgOTQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1O1xuICB3aWR0aDogMjg1cHg7XG4gIGhlaWdodDogMTAwcHg7ICAgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gIFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxczsgXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7ICAgICAgICBcbn0gXG4iXX0= */"] });


/***/ }),

/***/ 6459:
/*!************************************************!*\
  !*** ./src/app/core/overlay/overlay.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlayModule": () => (/* binding */ OverlayModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _overlay_request_response_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay-request-response.interceptor */ 3941);
/* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay.component */ 6831);
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ensure-module-loaded-once.guard */ 8352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class OverlayModule extends _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_2__.EnsureModuleLoadedOnceGuard {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
}
OverlayModule.ɵfac = function OverlayModule_Factory(t) { return new (t || OverlayModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](OverlayModule, 12)); };
OverlayModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: OverlayModule });
OverlayModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
            useClass: _overlay_request_response_interceptor__WEBPACK_IMPORTED_MODULE_0__.OverlayRequestResponseInterceptor,
            multi: true,
        }
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OverlayModule, { declarations: [_overlay_component__WEBPACK_IMPORTED_MODULE_1__.OverlayComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule], exports: [_overlay_component__WEBPACK_IMPORTED_MODULE_1__.OverlayComponent] }); })();


/***/ }),

/***/ 263:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.service */ 3623);






class AuthService {
    constructor(http, utilitiesService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.baseUrl = this.utilitiesService.getApiUrl();
        this.authUrl = this.baseUrl + '/api/auth';
        this.isAuthenticated = false;
        this.redirectUrl = '';
        this.authChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    userAuthChanged(status) {
        this.authChanged.emit(status); // Raise changed event
    }
    login(userLogin) {
        return this.http.post(this.authUrl + '/login', userLogin)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(loggedIn => {
            this.isAuthenticated = loggedIn;
            this.userAuthChanged(loggedIn);
            return loggedIn;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    logout() {
        return this.http.post(this.authUrl + '/logout', null)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(loggedOut => {
            this.isAuthenticated = !loggedOut;
            this.userAuthChanged(!loggedOut); // Return loggedIn status
            return loggedOut;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => errMessage);
            // return Observable.throw(err.text() || 'backend server error');
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error || 'Server error');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ 5925:
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.service */ 3623);





class DataService {
    constructor(http, utilitiesService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.baseUrl = this.utilitiesService.getApiUrl();
        this.customersBaseUrl = this.baseUrl + '/api/customers';
        this.ordersBaseUrl = this.baseUrl + '/api/orders';
        this.orders = [];
        this.states = [];
    }
    getCustomersPage(page, pageSize) {
        return this.http.get(`${this.customersBaseUrl}/page/${page}/${pageSize}`, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            const xInlineCount = res.headers.get('X-InlineCount');
            const totalRecords = Number(xInlineCount);
            const customers = res.body;
            this.calculateCustomersOrderTotal(customers);
            return {
                results: customers,
                totalRecords: totalRecords
            };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getCustomers() {
        return this.http.get(this.customersBaseUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(customers => {
            this.calculateCustomersOrderTotal(customers);
            return customers;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getCustomer(id) {
        return this.http.get(this.customersBaseUrl + '/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(customer => {
            this.calculateCustomersOrderTotal([customer]);
            return customer;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    insertCustomer(customer) {
        return this.http.post(this.customersBaseUrl, customer)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    updateCustomer(customer) {
        return this.http.put(this.customersBaseUrl + '/' + customer.id, customer)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.status), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    deleteCustomer(id) {
        return this.http.delete(this.customersBaseUrl + '/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.status), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getStates() {
        return this.http.get(this.baseUrl + '/api/states')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error || 'Node.js server error');
    }
    calculateCustomersOrderTotal(customers) {
        for (const customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (const order of customer.orders) {
                    total += order.itemCost;
                }
                customer.orderTotal = total;
            }
        }
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });


/***/ }),

/***/ 6797:
/*!*************************************************!*\
  !*** ./src/app/core/services/dialog.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogService": () => (/* binding */ DialogService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DialogService {
    constructor() {
        this.promise = {};
        this.message = 'Is it OK?';
    }
    confirm(message) {
        if (message) {
            this.message = message;
        }
        this.promise = new Promise(this.resolver);
        return this.promise;
    }
    resolver(resolve) {
        return resolve(window.confirm('Is it OK?'));
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(); };
DialogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac });


/***/ }),

/***/ 7650:
/*!****************************************************!*\
  !*** ./src/app/core/services/event-bus.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmitEvent": () => (/* binding */ EmitEvent),
/* harmony export */   "EventBusService": () => (/* binding */ EventBusService),
/* harmony export */   "Events": () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



class EventBusService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    on(event, action) {
        return this.subject
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((e) => {
            return e.name === event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((e) => {
            return e.value;
        }))
            .subscribe(action);
    }
    emit(event) {
        this.subject.next(event);
    }
}
EventBusService.ɵfac = function EventBusService_Factory(t) { return new (t || EventBusService)(); };
EventBusService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EventBusService, factory: EventBusService.ɵfac });
class EmitEvent {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
var Events;
(function (Events) {
    Events[Events["httpRequest"] = 0] = "httpRequest";
    Events[Events["httpResponse"] = 1] = "httpResponse";
})(Events || (Events = {}));


/***/ }),

/***/ 1375:
/*!*************************************************!*\
  !*** ./src/app/core/services/filter.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterService": () => (/* binding */ FilterService)
/* harmony export */ });
/* harmony import */ var _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/property-resolver */ 7176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class FilterService {
    constructor() { }
    filter(items, data, props) {
        return items.filter((item) => {
            let match = false;
            for (const prop of props) {
                if (prop.indexOf('.') > -1) {
                    const value = _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_0__.PropertyResolver.resolve(prop, item);
                    if (value && value.toUpperCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                    continue;
                }
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                    match = true;
                    break;
                }
            }
            return match;
        });
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(); };
FilterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac });


/***/ }),

/***/ 4080:
/*!*************************************************!*\
  !*** ./src/app/core/services/logger.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggerService": () => (/* binding */ LoggerService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class LoggerService {
    constructor() { }
    log(msg) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
            console.log(msg);
        }
        else {
            // AppInsights
        }
    }
    logError(msg) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
            console.error(msg);
        }
        else {
            // AppInsights
        }
    }
}
LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(); };
LoggerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7176:
/*!****************************************************!*\
  !*** ./src/app/core/services/property-resolver.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyResolver": () => (/* binding */ PropertyResolver)
/* harmony export */ });
class PropertyResolver {
    static resolve(path, obj) {
        return path.split('.').reduce((prev, curr) => {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    }
}


/***/ }),

/***/ 4490:
/*!*************************************************!*\
  !*** ./src/app/core/services/sorter.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SorterService": () => (/* binding */ SorterService)
/* harmony export */ });
/* harmony import */ var _property_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-resolver */ 7176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class SorterService {
    constructor() {
        this.property = '';
        this.direction = 1;
    }
    sort(collection, prop, reverseSort = true) {
        this.property = prop;
        if (reverseSort) {
            this.direction = (this.property === prop) ? this.direction * -1 : 1;
        }
        return collection.sort((a, b) => {
            let aVal;
            let bVal;
            // Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = _property_resolver__WEBPACK_IMPORTED_MODULE_0__.PropertyResolver.resolve(prop, a);
                bVal = _property_resolver__WEBPACK_IMPORTED_MODULE_0__.PropertyResolver.resolve(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            // Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (this.isString(aVal)) {
                aVal = aVal.trim().toUpperCase();
            }
            if (this.isString(bVal)) {
                bVal = bVal.trim().toUpperCase();
            }
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return this.direction * -1;
            }
            else {
                return this.direction * 1;
            }
        });
    }
    isString(val) {
        return (val && (typeof val === 'string' || val instanceof String));
    }
}
SorterService.ɵfac = function SorterService_Factory(t) { return new (t || SorterService)(); };
SorterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SorterService, factory: SorterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6633:
/*!**************************************************!*\
  !*** ./src/app/core/services/trackby.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackByService": () => (/* binding */ TrackByService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TrackByService {
    customer(index, customer) {
        return customer.id;
    }
    order(index, order) {
        return index;
    }
}
TrackByService.ɵfac = function TrackByService_Factory(t) { return new (t || TrackByService)(); };
TrackByService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrackByService, factory: TrackByService.ɵfac });


/***/ }),

/***/ 3623:
/*!****************************************************!*\
  !*** ./src/app/core/services/utilities.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilitiesService": () => (/* binding */ UtilitiesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class UtilitiesService {
    constructor(window) {
        this.window = window;
    }
    getApiUrl() {
        const port = this.getPort();
        if (({"NG_APP_ENV":undefined}).NG_APP_API_URL) {
            return ({"NG_APP_ENV":undefined}).NG_APP_API_URL;
        }
        return `${this.window.location.protocol}//${this.window.location.hostname}${port}`;
    }
    getPort() {
        const port = this.window.location.port;
        if (port) {
            // for running with Azure Functions local emulator
            if (port === '4200') {
                // Local run with 'npm run' also started in api folder for Azure Functions
                return ':7071'; // for debugging Azure Functions locally
            }
            // Running with local node (which serves Angular and the API)
            return ':' + this.window.location.port;
        }
        else {
            // for running locally with Docker/Kubernetes
            if (this.window.location.hostname === 'localhost') {
                return ':8080';
            }
        }
        return '';
    }
}
UtilitiesService.ɵfac = function UtilitiesService_Factory(t) { return new (t || UtilitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('Window')); };
UtilitiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilitiesService, factory: UtilitiesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 751:
/*!*****************************************************!*\
  !*** ./src/app/core/services/validation.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationService": () => (/* binding */ ValidationService)
/* harmony export */ });
class ValidationService {
    static getValidatorErrorMessage(code) {
        const config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    }
    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        // tslint:disable-next-line
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    }
    static emailValidator(control) {
        // RFC 2822 compliant regex
        // tslint:disable-next-line
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    }
    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        // (?!.*\s)          - Spaces are not allowed
        // tslint:disable-next-line
        if (control.value.match(/^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    }
}


/***/ }),

/***/ 9380:
/*!*************************************************************!*\
  !*** ./src/app/core/strategies/preload-modules.strategy.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloadModulesStrategy": () => (/* binding */ PreloadModulesStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/logger.service */ 4080);




class PreloadModulesStrategy {
    constructor(logger) {
        this.logger = logger;
    }
    preload(route, load) {
        if (route.data && route.data['preload']) {
            this.logger.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
        }
    }
}
PreloadModulesStrategy.ɵfac = function PreloadModulesStrategy_Factory(t) { return new (t || PreloadModulesStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerService)); };
PreloadModulesStrategy.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PreloadModulesStrategy, factory: PreloadModulesStrategy.ɵfac });


/***/ }),

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 8458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent }
];
class LoginRoutingModule {
}
LoginRoutingModule.components = [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent];
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); };
LoginRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _core_services_validation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services/validation.service */ 751);
/* harmony import */ var _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/growler/growler.service */ 4938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/auth.service */ 263);
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/logger.service */ 4080);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);










function LoginComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A0\u00A0Error: ", ctx_r0.errorMessage, " ");
} }
class LoginComponent {
    constructor(formBuilder, router, authService, growler, logger) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.growler = growler;
        this.logger = logger;
        this.loginForm = {};
        this.errorMessage = '';
    }
    get f() {
        return this.loginForm.controls;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _core_services_validation_service__WEBPACK_IMPORTED_MODULE_0__.ValidationService.emailValidator]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _core_services_validation_service__WEBPACK_IMPORTED_MODULE_0__.ValidationService.passwordValidator]]
        });
    }
    submit({ value, valid }) {
        this.authService.login(value)
            .subscribe((status) => {
            if (status) {
                this.growler.growl('Logged in', _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_1__.GrowlerMessageType.Info);
                if (this.authService.redirectUrl) {
                    const redirectUrl = this.authService.redirectUrl;
                    this.authService.redirectUrl = '';
                    this.router.navigate([redirectUrl]);
                }
                else {
                    this.router.navigate(['/customers']);
                }
            }
            else {
                const loginError = 'Unable to login';
                this.errorMessage = loginError;
                this.growler.growl(loginError, _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_1__.GrowlerMessageType.Danger);
            }
        }, (err) => this.logger.log(err));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_growler_growler_service__WEBPACK_IMPORTED_MODULE_1__.GrowlerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["cm-login"]], decls: 33, vars: 5, consts: [[1, "view"], [1, "container"], [1, "glyphicon", "glyphicon-lock"], ["novalidate", "", 1, "login-form", 3, "formGroup", "ngSubmit"], [1, "login"], [1, "row"], [1, "col-md-2"], [1, "col-md-10"], ["title", "email", "type", "email", "name", "email", "formControlName", "email", 1, "form-control"], ["data-cy", "email-error", 1, "alert", "alert-danger", 3, "hidden"], ["title", "password", "type", "password", "name", "password", "formControlName", "password", 1, "form-control"], ["data-cy", "password-error", 1, "alert", "alert-danger", 3, "hidden"], [1, "col-md-12"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "statusRow"], ["class", "label label-important", 4, "ngIf"], [1, "label", "label-important"], [1, "glyphicon", "glyphicon-thumbs-down", "icon-white"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "header")(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(ctx.loginForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " A valid email address is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 5)(18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Password is required (6 or more characters with at least one number) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 5)(26, "div", 12)(27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, LoginComponent_div_32_Template, 3, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.f["email"].untouched || ctx.f["email"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.f["password"].untouched || ctx.f["password"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: [".login-form[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   input[type='email'][_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   input[type='password'][_ngcontent-%COMP%] {\n    width:75%;\n}\n\n.login-form[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%] {\n  border-left: 5px solid #a94442;\n}\n\n.login-form[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%] {\n  border-left: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLFNBQVM7QUFDYjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT0ndGV4dCddLCBcbi5sb2dpbi1mb3JtIGlucHV0W3R5cGU9J2VtYWlsJ10sXG4ubG9naW4tZm9ybSBpbnB1dFt0eXBlPSdwYXNzd29yZCddIHtcbiAgICB3aWR0aDo3NSU7XG59XG5cbi5sb2dpbi1mb3JtIC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xufVxuXG4ubG9naW4tZm9ybSAubmctdmFsaWQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ 8458);





class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginRoutingModule] }); })();


/***/ }),

/***/ 5813:
/*!*******************************************************!*\
  !*** ./src/app/shared/directives/sortby.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortByDirective": () => (/* binding */ SortByDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class SortByDirective {
    constructor() {
        this.sortProperty = '';
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    set sortBy(value) {
        this.sortProperty = value;
    }
    onClick(e) {
        e.preventDefault();
        this.sorted.next(this.sortProperty); // Raise clicked event
    }
}
SortByDirective.ɵfac = function SortByDirective_Factory(t) { return new (t || SortByDirective)(); };
SortByDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SortByDirective, selectors: [["", "cmSortBy", ""]], hostBindings: function SortByDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortByDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { sortBy: ["cmSortBy", "sortBy"] }, outputs: { sorted: "sorted" } });


/***/ }),

/***/ 7598:
/*!*******************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterTextboxComponent": () => (/* binding */ FilterTextboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);



class FilterTextboxComponent {
    constructor() {
        this.model = { filter: '' };
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    filterChanged(event) {
        event.preventDefault();
        this.changed.emit(this.model.filter); // Raise changed event
    }
}
FilterTextboxComponent.ɵfac = function FilterTextboxComponent_Factory(t) { return new (t || FilterTextboxComponent)(); };
FilterTextboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterTextboxComponent, selectors: [["cm-filter-textbox"]], outputs: { changed: "changed" }, decls: 3, vars: 1, consts: [["type", "text", "name", "filter", 3, "ngModel", "ngModelChange", "keyup"]], template: function FilterTextboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Search: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterTextboxComponent_Template_input_ngModelChange_2_listener($event) { return ctx.model.filter = $event; })("keyup", function FilterTextboxComponent_Template_input_keyup_2_listener($event) { return ctx.filterChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.filter);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["cm-filter-textbox[_ngcontent-%COMP%] {\n    margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci10ZXh0Ym94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImZpbHRlci10ZXh0Ym94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjbS1maWx0ZXItdGV4dGJveCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 8677:
/*!****************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterTextboxModule": () => (/* binding */ FilterTextboxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _filter_textbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-textbox.component */ 7598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class FilterTextboxModule {
}
FilterTextboxModule.ɵfac = function FilterTextboxModule_Factory(t) { return new (t || FilterTextboxModule)(); };
FilterTextboxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FilterTextboxModule });
FilterTextboxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FilterTextboxModule, { declarations: [_filter_textbox_component__WEBPACK_IMPORTED_MODULE_0__.FilterTextboxComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule], exports: [_filter_textbox_component__WEBPACK_IMPORTED_MODULE_0__.FilterTextboxComponent] }); })();


/***/ }),

/***/ 5748:
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);



function PaginationComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_6_Template_li_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const page_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.changePage(page_r1, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.currentPage === page_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r1);
} }
class PaginationComponent {
    constructor() {
        this.pagerTotalItems = 0;
        this.pagerPageSize = 0;
        this.totalPages = 0;
        this.pages = [];
        this.currentPage = 1;
        this.isVisible = false;
        this.previousEnabled = false;
        this.nextEnabled = true;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get pageSize() {
        return this.pagerPageSize;
    }
    set pageSize(size) {
        this.pagerPageSize = size;
        this.update();
    }
    get totalItems() {
        return this.pagerTotalItems;
    }
    set totalItems(itemCount) {
        this.pagerTotalItems = itemCount;
        this.update();
    }
    ngOnInit() {
    }
    update() {
        if (this.pagerTotalItems && this.pagerPageSize) {
            this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
            this.isVisible = true;
            if (this.totalItems >= this.pageSize) {
                for (let i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    }
    previousNext(direction, event) {
        let page = this.currentPage;
        if (direction === -1) {
            if (page > 1) {
                page--;
            }
        }
        else {
            if (page < this.totalPages) {
                page++;
            }
        }
        this.changePage(page, event);
    }
    changePage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page) {
            return;
        }
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;
        this.pageChanged.emit(page);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["cm-pagination"]], inputs: { pageSize: "pageSize", totalItems: "totalItems" }, outputs: { pageChanged: "pageChanged" }, decls: 11, vars: 6, consts: [[3, "hidden"], [1, "pagination"], [3, "click"], ["aria-label", "Previous"], ["aria-hidden", "true"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["aria-label", "Next"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "ul", 1)(2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_li_click_2_listener($event) { return ctx.previousNext(-1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_li_6_Template, 3, 3, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_li_click_7_listener($event) { return ctx.previousNext(1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6)(9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.previousEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.nextEnabled);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:focus, .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:hover {\n  background-color: #1bcb41;\n  border-color: #1bcb41;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUUseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24+LmFjdGl2ZT5hLCBcbi5wYWdpbmF0aW9uPi5hY3RpdmU+YTpmb2N1cywgXG4ucGFnaW5hdGlvbj4uYWN0aXZlPmE6aG92ZXIsIFxuLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuLCBcbi5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1cywgXG4ucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWJjYjQxO1xuICBib3JkZXItY29sb3I6ICMxYmNiNDE7XG59XG5cbi5wYWdpbmF0aW9uIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 5614:
/*!********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationModule": () => (/* binding */ PaginationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.component */ 5748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class PaginationModule {
}
PaginationModule.ɵfac = function PaginationModule_Factory(t) { return new (t || PaginationModule)(); };
PaginationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PaginationModule });
PaginationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaginationModule, { declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_0__.PaginationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_0__.PaginationComponent] }); })();


/***/ }),

/***/ 8750:
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapitalizePipe": () => (/* binding */ CapitalizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CapitalizePipe {
    transform(value) {
        return typeof value === 'string' && value.charAt(0).toUpperCase() + value.slice(1) || value;
    }
}
CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) { return new (t || CapitalizePipe)(); };
CapitalizePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "capitalize", type: CapitalizePipe, pure: true });


/***/ }),

/***/ 2586:
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/trim.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrimPipe": () => (/* binding */ TrimPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TrimPipe {
    transform(value) {
        if (!value) {
            return '';
        }
        return value.trim();
    }
}
TrimPipe.ɵfac = function TrimPipe_Factory(t) { return new (t || TrimPipe)(); };
TrimPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "trim", type: TrimPipe, pure: true });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-textbox/filter-textbox.module */ 8677);
/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination/pagination.module */ 5614);
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ 8750);
/* harmony import */ var _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/trim.pipe */ 2586);
/* harmony import */ var _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/sortby.directive */ 5813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_0__.FilterTextboxModule, _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_1__.PaginationModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_0__.FilterTextboxModule, _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_1__.PaginationModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__.CapitalizePipe, _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_3__.TrimPipe, _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_4__.SortByDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_0__.FilterTextboxModule, _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_1__.PaginationModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__.CapitalizePipe, _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_3__.TrimPipe, _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_4__.SortByDirective, _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_0__.FilterTextboxModule, _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_1__.PaginationModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map