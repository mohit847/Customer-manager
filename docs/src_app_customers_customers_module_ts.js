"use strict";
(self["webpackChunkangular_jumpstart"] = self["webpackChunkangular_jumpstart"] || []).push([["src_app_customers_customers_module_ts"],{

/***/ 3674:
/*!**********************************************************************!*\
  !*** ./src/app/customers/customers-card/customers-card.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersCardComponent": () => (/* binding */ CustomersCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/trackby.service */ 6633);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pipes/capitalize.pipe */ 8750);
/* harmony import */ var _shared_pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pipes/trim.pipe */ 2586);






const _c0 = function (a1) { return ["/customers", a1, "details"]; };
const _c1 = function (a1) { return ["/customers", a1, "edit"]; };
const _c2 = function (a1) { return ["/customers", a1, "orders"]; };
function CustomersCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 10)(10, "div", 11)(11, "div", 12)(12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 15)(16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "trim");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "View Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const customer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c0, customer_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 8, customer_r2.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 10, customer_r2.lastName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c1, customer_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/images/", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 12, customer_r2.gender), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 14, customer_r2.city), ", ", customer_r2.state.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c2, customer_r2.id));
} }
function CustomersCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CustomersCardComponent {
    constructor(trackbyService) {
        this.trackbyService = trackbyService;
        this.customers = [];
    }
    ngOnInit() {
    }
}
CustomersCardComponent.ɵfac = function CustomersCardComponent_Factory(t) { return new (t || CustomersCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_trackby_service__WEBPACK_IMPORTED_MODULE_0__.TrackByService)); };
CustomersCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CustomersCardComponent, selectors: [["cm-customers-card"]], inputs: { customers: "customers" }, decls: 4, vars: 3, consts: [[1, "container"], [1, "row", "card-container"], ["class", "col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "card"], [1, "card-header"], [1, "white", 3, "routerLink"], [3, "routerLink"], ["title", "Edit", 1, "pull-right", "glyphicon", "glyphicon-edit", "edit-icon", "white"], [1, "card-body"], [1, "clearfix"], [1, "pull-left", "card-body-left"], ["href", "#", 1, "white"], [1, "card-image", 3, "src"], [1, "pull-left", "card-body-right"], [1, "card-body-content"]], template: function CustomersCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CustomersCardComponent_div_2_Template, 21, 22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CustomersCardComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.customers)("ngForTrackBy", ctx.trackbyService.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.customers.length);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.LowerCasePipe, _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_1__.CapitalizePipe, _shared_pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_2__.TrimPipe], styles: [".card-container[_ngcontent-%COMP%] {\n    width:85%;\n}\n\n.card[_ngcontent-%COMP%] {\n    background-color:#fff;\n    border: 1px solid #d4d4d4;\n    height:120px;\n    margin-bottom: 20px;\n    position: relative;\n}\n\n.card-header[_ngcontent-%COMP%] {\n    background-color:#1bcb41;\n    font-size:14pt;\n    color:white;\n    padding:5px;\n    width:100%;\n}\n\n.card-close[_ngcontent-%COMP%] {\n    color: white;\n    font-weight:bold;\n    margin-right:5px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n    padding-left: 5px;\n}\n\n.card-body-left[_ngcontent-%COMP%] {\n    margin-top: -5px;\n}\n\n.card-body-right[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    margin-top: 2px;\n}\n\n.card-body-content[_ngcontent-%COMP%] {\n    width: 100px;\n}\n\n.card-image[_ngcontent-%COMP%] {\n    height:50px;width:50px;margin-top:10px;\n}\n\n.white[_ngcontent-%COMP%] {\n    color: white;\n}\n\n.white[_ngcontent-%COMP%]:hover {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVycy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlO0FBQzFDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiY3VzdG9tZXJzLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6ODUlO1xufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgaGVpZ2h0OjEyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzFiY2I0MTtcbiAgICBmb250LXNpemU6MTRwdDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOjVweDtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4uY2FyZC1jbG9zZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5jYXJkLWJvZHktbGVmdCB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLmNhcmQtYm9keS1yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uY2FyZC1ib2R5LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLmNhcmQtaW1hZ2Uge1xuICAgIGhlaWdodDo1MHB4O3dpZHRoOjUwcHg7bWFyZ2luLXRvcDoxMHB4O1xufVxuXG4ud2hpdGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndoaXRlOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ 2685:
/*!**********************************************************************!*\
  !*** ./src/app/customers/customers-grid/customers-grid.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersGridComponent": () => (/* binding */ CustomersGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_sorter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/sorter.service */ 4490);
/* harmony import */ var _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/trackby.service */ 6633);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_directives_sortby_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/sortby.directive */ 5813);
/* harmony import */ var _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/capitalize.pipe */ 8750);
/* harmony import */ var _shared_pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/trim.pipe */ 2586);








const _c0 = function (a1) { return ["/customers", a1, "details"]; };
const _c1 = function (a1) { return ["/customers", a1, "orders"]; };
function CustomersGridComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td")(5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "trim");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td")(22, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "View Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const customer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "assets/images/", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 9, customer_r2.gender), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](21, _c0, customer_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 11, customer_r2.firstName));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 13, customer_r2.lastName));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](customer_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 15, customer_r2.city));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](customer_r2.state.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](20, 17, customer_r2.orderTotal, "\u20B9", "symbol"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](23, _c1, customer_r2.id));
} }
function CustomersGridComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
class CustomersGridComponent {
    constructor(sorterService, trackbyService) {
        this.sorterService = sorterService;
        this.trackbyService = trackbyService;
        this.customers = [];
    }
    ngOnInit() {
    }
    sort(prop) {
        this.customers = this.sorterService.sort(this.customers, prop);
    }
}
CustomersGridComponent.ɵfac = function CustomersGridComponent_Factory(t) { return new (t || CustomersGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_sorter_service__WEBPACK_IMPORTED_MODULE_0__.SorterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_trackby_service__WEBPACK_IMPORTED_MODULE_1__.TrackByService)); };
CustomersGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CustomersGridComponent, selectors: [["cm-customers-grid"]], inputs: { customers: "customers" }, decls: 26, vars: 3, consts: [[1, "container"], [1, "row", "grid-container"], [1, "col-md-10"], [1, "table"], [1, "table", "table-striped", "table-hover"], ["cmSortBy", "firstName", 3, "sorted"], ["cmSortBy", "lastName", 3, "sorted"], ["cmSortBy", "address", 3, "sorted"], ["cmSortBy", "city", 3, "sorted"], ["cmSortBy", "state.name", 3, "sorted"], [3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["alt", "Customer Image", 1, "grid-image", 3, "src"], [3, "routerLink"], ["colspan", "7"]], template: function CustomersGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "table", 4)(5, "thead")(6, "tr")(7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sorted", function CustomersGridComponent_Template_th_sorted_9_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sorted", function CustomersGridComponent_Template_th_sorted_11_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sorted", function CustomersGridComponent_Template_th_sorted_13_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sorted", function CustomersGridComponent_Template_th_sorted_15_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sorted", function CustomersGridComponent_Template_th_sorted_17_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomersGridComponent_Template_th_click_19_listener() { return ctx.sort("orderTotal"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Order Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, CustomersGridComponent_tr_24_Template, 24, 25, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, CustomersGridComponent_tr_25_Template, 5, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.customers)("ngForTrackBy", ctx.trackbyService.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.customers.length);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_directives_sortby_directive__WEBPACK_IMPORTED_MODULE_2__.SortByDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__.CapitalizePipe, _shared_pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_4__.TrimPipe], styles: [".grid-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding-left: 0px;\n}\n\n.grid-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    vertical-align: middle;\n}\n\n.grid-image[_ngcontent-%COMP%] {\n    height:50px;width:50px;margin-top:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVycy1ncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWU7QUFDMUMiLCJmaWxlIjoiY3VzdG9tZXJzLWdyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciAgZGl2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLmdyaWQtY29udGFpbmVyIHRkIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZ3JpZC1pbWFnZSB7XG4gICAgaGVpZ2h0OjUwcHg7d2lkdGg6NTBweDttYXJnaW4tdG9wOjEwcHg7XG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ 6719:
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersRoutingModule": () => (/* binding */ CustomersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.component */ 4643);
/* harmony import */ var _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers-card/customers-card.component */ 3674);
/* harmony import */ var _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers-grid/customers-grid.component */ 2685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: '', component: _customers_component__WEBPACK_IMPORTED_MODULE_0__.CustomersComponent }
];
class CustomersRoutingModule {
}
CustomersRoutingModule.components = [_customers_component__WEBPACK_IMPORTED_MODULE_0__.CustomersComponent, _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_1__.CustomersCardComponent, _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_2__.CustomersGridComponent];
CustomersRoutingModule.ɵfac = function CustomersRoutingModule_Factory(t) { return new (t || CustomersRoutingModule)(); };
CustomersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CustomersRoutingModule });
CustomersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CustomersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 4643:
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersComponent": () => (/* binding */ CustomersComponent)
/* harmony export */ });
/* harmony import */ var D_Ang_project_Customer_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/data.service */ 5925);
/* harmony import */ var _core_services_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/filter.service */ 1375);
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/logger.service */ 4080);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/filter-textbox/filter-textbox.component */ 7598);
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/pagination/pagination.component */ 5748);
/* harmony import */ var _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers-card/customers-card.component */ 3674);
/* harmony import */ var _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customers-grid/customers-grid.component */ 2685);











const _c0 = ["mapsContainer"];
class CustomersComponent {
  constructor(componentFactoryResolver, dataService, filterService, logger) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.dataService = dataService;
    this.filterService = filterService;
    this.logger = logger;
    this.title = '';
    this.filterText = '';
    this.customers = [];
    this.displayMode = DisplayModeEnum.Card;
    this.displayModeEnum = DisplayModeEnum;
    this.totalRecords = 0;
    this.pageSize = 10;
    this.mapComponentRef = {};
    this._filteredCustomers = [];
    this.mapsViewContainerRef = {};
  }

  get filteredCustomers() {
    return this._filteredCustomers;
  }

  set filteredCustomers(value) {
    this._filteredCustomers = value;
    this.updateMapComponentDataPoints();
  }

  ngOnInit() {
    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    this.displayMode = DisplayModeEnum.Card;
    this.getCustomersPage(1);
  }

  changeDisplayMode(mode) {
    this.displayMode = mode;
  }

  pageChanged(page) {
    this.getCustomersPage(page);
  }

  getCustomersPage(page) {
    this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize).subscribe(response => {
      this.customers = this.filteredCustomers = response.results;
      this.totalRecords = response.totalRecords;
    }, err => this.logger.log(err), () => this.logger.log('getCustomersPage() retrieved customers for page: ' + page));
  }

  filterChanged(data) {
    if (data && this.customers) {
      data = data.toUpperCase();
      const props = ['firstName', 'lastName', 'city', 'state.name'];
      this.filteredCustomers = this.filterService.filter(this.customers, data, props);
    } else {
      this.filteredCustomers = this.customers;
    }
  }

  lazyLoadMapComponent() {
    var _this = this;

    return (0,D_Ang_project_Customer_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.changeDisplayMode(DisplayModeEnum.Map);

      if (!_this.mapsViewContainerRef.length) {
        // Lazy load MapComponent
        const {
          MapComponent
        } = yield __webpack_require__.e(/*! import() */ "src_app_shared_map_map_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../shared/map/map.component */ 8088));
        console.log('Lazy loaded map component!');
        _this.mapComponentRef = _this.mapsViewContainerRef.createComponent(MapComponent);
        _this.mapComponentRef.instance.zoom = 2;
        _this.mapComponentRef.instance.dataPoints = _this.filteredCustomers;
        _this.mapComponentRef.instance.enabled = true;
      }
    })();
  }

  updateMapComponentDataPoints() {
    if (this.mapComponentRef && this.mapComponentRef.instance) {
      this.mapComponentRef.instance.dataPoints = this.filteredCustomers;
    }
  }

}

CustomersComponent.ɵfac = function CustomersComponent_Factory(t) {
  return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_filter_service__WEBPACK_IMPORTED_MODULE_2__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerService));
};

CustomersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CustomersComponent,
  selectors: [["cm-customers"]],
  viewQuery: function CustomersComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.mapsViewContainerRef = _t.first);
    }
  },
  decls: 30,
  vars: 12,
  consts: [[1, "customers", "view", "indent"], [1, "container"], [1, "glyphicon", "glyphicon-user"], [1, "row"], [1, "col-md-10"], [1, "navbar"], [1, "nav", "navbar-nav"], [1, "toolbar-item"], [3, "click"], [1, "glyphicon", "glyphicon-th-large"], [1, "glyphicon", "glyphicon-align-justify"], ["routerLink", "/customers/0/edit"], [1, "glyphicon", "glyphicon-plus"], [1, "navbar-right", 3, "changed"], [3, "customers", "hidden"], [3, "hidden"], ["mapsContainer", ""], [3, "totalItems", "pageSize", "pageChanged"]],
  template: function CustomersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "header")(3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "ul", 6)(11, "li", 7)(12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomersComponent_Template_a_click_12_listener() {
        return ctx.changeDisplayMode(ctx.displayModeEnum.Card);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Card View ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "li", 7)(16, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomersComponent_Template_a_click_16_listener() {
        return ctx.changeDisplayMode(ctx.displayModeEnum.Grid);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " List View ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "li", 7)(20, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " New Customer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "cm-filter-textbox", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("changed", function CustomersComponent_Template_cm_filter_textbox_changed_23_listener($event) {
        return ctx.filterChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "cm-customers-card", 14)(25, "cm-customers-grid", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](27, null, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "cm-pagination", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChanged", function CustomersComponent_Template_cm_pagination_pageChanged_29_listener($event) {
        return ctx.pageChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx.displayMode === ctx.displayModeEnum.Card);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx.displayMode === ctx.displayModeEnum.Grid);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("customers", ctx.filteredCustomers)("hidden", ctx.displayMode !== ctx.displayModeEnum.Card);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("customers", ctx.filteredCustomers)("hidden", ctx.displayMode !== ctx.displayModeEnum.Grid);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.displayMode !== ctx.displayModeEnum.Map);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("totalItems", ctx.totalRecords)("pageSize", ctx.pageSize);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _shared_filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_4__.FilterTextboxComponent, _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent, _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_6__.CustomersCardComponent, _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_7__.CustomersGridComponent],
  encapsulation: 2
});
var DisplayModeEnum;

(function (DisplayModeEnum) {
  DisplayModeEnum[DisplayModeEnum["Card"] = 0] = "Card";
  DisplayModeEnum[DisplayModeEnum["Grid"] = 1] = "Grid";
  DisplayModeEnum[DisplayModeEnum["Map"] = 2] = "Map";
})(DisplayModeEnum || (DisplayModeEnum = {}));

/***/ }),

/***/ 7258:
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersModule": () => (/* binding */ CustomersModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers-routing.module */ 6719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers.component */ 4643);
/* harmony import */ var _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers-card/customers-card.component */ 3674);
/* harmony import */ var _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers-grid/customers-grid.component */ 2685);






class CustomersModule {
}
CustomersModule.ɵfac = function CustomersModule_Factory(t) { return new (t || CustomersModule)(); };
CustomersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CustomersModule });
CustomersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_customers_routing_module__WEBPACK_IMPORTED_MODULE_1__.CustomersRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CustomersModule, { declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_2__.CustomersComponent, _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_3__.CustomersCardComponent, _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_4__.CustomersGridComponent], imports: [_customers_routing_module__WEBPACK_IMPORTED_MODULE_1__.CustomersRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_customers_customers_module_ts.js.map