"use strict";
(self["webpackChunkangular_jumpstart"] = self["webpackChunkangular_jumpstart"] || []).push([["src_app_orders_orders_module_ts"],{

/***/ 5674:
/*!*************************************************!*\
  !*** ./src/app/orders/orders-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersRoutingModule": () => (/* binding */ OrdersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.component */ 8686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _orders_component__WEBPACK_IMPORTED_MODULE_0__.OrdersComponent }
];
class OrdersRoutingModule {
}
OrdersRoutingModule.components = [_orders_component__WEBPACK_IMPORTED_MODULE_0__.OrdersComponent];
OrdersRoutingModule.ɵfac = function OrdersRoutingModule_Factory(t) { return new (t || OrdersRoutingModule)(); };
OrdersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrdersRoutingModule });
OrdersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrdersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8686:
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersComponent": () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services/data.service */ 5925);
/* harmony import */ var _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/trackby.service */ 6633);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/pagination/pagination.component */ 5748);
/* harmony import */ var _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pipes/capitalize.pipe */ 8750);






function OrdersComponent_div_8_div_1_table_6_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](order_r7.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](5, 2, order_r7.itemCost, "\u20B9", "symbol"));
} }
function OrdersComponent_div_8_div_1_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OrdersComponent_div_8_div_1_table_6_tr_1_Template, 6, 6, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr", 10)(3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const customer_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", customer_r3.orders)("ngForTrackBy", ctx_r4.trackbyService.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](7, 3, customer_r3.orderTotal, "\u20B9", "symbol"), " ");
} }
function OrdersComponent_div_8_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No orders found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OrdersComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, OrdersComponent_div_8_div_1_table_6_Template, 8, 7, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, OrdersComponent_div_8_div_1_div_7_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, customer_r3.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, customer_r3.lastName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", customer_r3.orders && customer_r3.orders.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !customer_r3.orders || !customer_r3.orders.length);
} }
function OrdersComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OrdersComponent_div_8_div_1_Template, 8, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "cm-pagination", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChanged", function OrdersComponent_div_8_Template_cm_pagination_pageChanged_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.pageChanged($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.customers)("ngForTrackBy", ctx_r0.trackbyService.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx_r0.customers || !ctx_r0.customers.length)("totalItems", ctx_r0.totalRecords)("pageSize", ctx_r0.pageSize);
} }
function OrdersComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No customers found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class OrdersComponent {
    constructor(dataService, trackbyService) {
        this.dataService = dataService;
        this.trackbyService = trackbyService;
        this.customers = [];
        this.totalRecords = 0;
        this.pageSize = 5;
    }
    ngOnInit() {
        this.getCustomersPage(1);
    }
    pageChanged(page) {
        this.getCustomersPage(page);
    }
    getCustomersPage(page) {
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response) => {
            this.totalRecords = response.totalRecords;
            this.customers = response.results;
        });
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_trackby_service__WEBPACK_IMPORTED_MODULE_1__.TrackByService)); };
OrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["cm-customers-orders"]], decls: 10, vars: 2, consts: [[1, "customers", "view", "indent"], [1, "container"], [1, "glyphicon", "glyphicon-folder-open"], [4, "ngIf"], ["class", "row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "hidden", "totalItems", "pageSize", "pageChanged"], [1, "row"], ["class", "table table-striped table-hover orders-table", 4, "ngIf"], [1, "table", "table-striped", "table-hover", "orders-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "summary-border"], [1, "text-right"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "header")(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u00A0\u00A0Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, OrdersComponent_div_8_Template, 3, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, OrdersComponent_div_9_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.customers && ctx.customers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.customers || !ctx.customers.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__.CapitalizePipe], encapsulation: 2 });


/***/ }),

/***/ 4819:
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersModule": () => (/* binding */ OrdersModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders-routing.module */ 5674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.component */ 8686);




class OrdersModule {
}
OrdersModule.ɵfac = function OrdersModule_Factory(t) { return new (t || OrdersModule)(); };
OrdersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: OrdersModule });
OrdersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _orders_routing_module__WEBPACK_IMPORTED_MODULE_1__.OrdersRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OrdersModule, { declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_2__.OrdersComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _orders_routing_module__WEBPACK_IMPORTED_MODULE_1__.OrdersRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_orders_orders_module_ts.js.map