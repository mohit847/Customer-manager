"use strict";
(self["webpackChunkangular_jumpstart"] = self["webpackChunkangular_jumpstart"] || []).push([["src_app_customer_customer_module_ts"],{

/***/ 267:
/*!*************************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailsComponent": () => (/* binding */ CustomerDetailsComponent)
/* harmony export */ });
/* harmony import */ var D_Ang_project_Customer_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/data.service */ 5925);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pipes/capitalize.pipe */ 8750);







const _c0 = ["mapsContainer"];

function CustomerDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 8)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/images/", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, ctx_r0.customer.gender), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 8, ctx_r0.customer.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 10, ctx_r0.customer.lastName), "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r0.customer.city, ", ", ctx_r0.customer.state.name, " ");
  }
}

function CustomerDetailsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No customer found\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

class CustomerDetailsComponent {
  constructor(route, dataService, componentFactoryResolver) {
    this.route = route;
    this.dataService = dataService;
    this.componentFactoryResolver = componentFactoryResolver;
    this.customer = null;
    this.mapEnabled = false;
    this.mapComponentRef = {};
    this.mapsViewContainerRef = {};
  }

  ngOnInit() {
    var _a; // Subscribe to params so if it changes we pick it up. Could use this.route.parent.snapshot.params["id"] to simplify it.


    (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.params.subscribe(params => {
      const id = +params['id'];

      if (id) {
        this.dataService.getCustomer(id).subscribe(customer => {
          this.customer = customer;

          if (this.customer && this.customer.latitude) {
            this.lazyLoadMapComponent(); // this.mapEnabled = true; // For eager loading map
          }
        });
      }
    });
  }

  lazyLoadMapComponent() {
    var _this = this;

    return (0,D_Ang_project_Customer_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.mapsViewContainerRef.length) {
        // Lazy load MapComponent
        const {
          MapComponent
        } = yield __webpack_require__.e(/*! import() */ "src_app_shared_map_map_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../shared/map/map.component */ 8088));
        console.log('Lazy loaded map component for customer!');
        _this.mapComponentRef = _this.mapsViewContainerRef.createComponent(MapComponent);
        _this.mapComponentRef.instance.zoom = 10;
        _this.mapComponentRef.instance.customer = _this.customer;
        _this.mapComponentRef.instance.enabled = true;
      }
    })();
  }

}

CustomerDetailsComponent.ɵfac = function CustomerDetailsComponent_Factory(t) {
  return new (t || CustomerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ComponentFactoryResolver));
};

CustomerDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CustomerDetailsComponent,
  selectors: [["cm-customer-details"]],
  viewQuery: function CustomerDetailsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mapsViewContainerRef = _t.first);
    }
  },
  decls: 10,
  vars: 2,
  consts: [[1, "container"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], ["mapsContainer", ""], ["class", "container", 4, "ngIf"], [1, "col-md-2"], ["title", "customer picture", 1, "details-image", 3, "src"], [1, "col-md-10"]],
  template: function CustomerDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CustomerDetailsComponent_div_1_Template, 13, 12, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br")(3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](7, null, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CustomerDetailsComponent_div_9_Template, 2, 0, "div", 5);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.customer);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.customer);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.LowerCasePipe, _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__.CapitalizePipe],
  styles: [".details-image[_ngcontent-%COMP%] {\n    height:100px;width:100px;margin-top:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZTtBQUM1QyIsImZpbGUiOiJjdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscy1pbWFnZSB7XG4gICAgaGVpZ2h0OjEwMHB4O3dpZHRoOjEwMHB4O21hcmdpbi10b3A6MTBweDtcbn0iXX0= */"]
});

/***/ }),

/***/ 2068:
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerEditComponent": () => (/* binding */ CustomerEditComponent)
/* harmony export */ });
/* harmony import */ var _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/growler/growler.service */ 4938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/data.service */ 5925);
/* harmony import */ var _core_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/modal/modal.service */ 9287);
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/logger.service */ 4080);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);









const _c0 = ["customerForm"];
function CustomerEditComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", state_r8.abbreviation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](state_r8.name);
} }
function CustomerEditComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Delete Customer?\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomerEditComponent_div_36_div_1_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.delete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomerEditComponent_div_36_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.deleteMessageEnabled = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function CustomerEditComponent_div_36_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomerEditComponent_div_36_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.deleteMessageEnabled = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CustomerEditComponent_div_36_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23)(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomerEditComponent_div_36_div_4_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.cancel($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _r0.pristine || !_r0.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r11.operationText);
} }
function CustomerEditComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CustomerEditComponent_div_36_div_1_Template, 7, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CustomerEditComponent_div_36_button_2_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CustomerEditComponent_div_36_div_4_Template, 6, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.customer.id && ctx_r6.deleteMessageEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.customer.id && !ctx_r6.deleteMessageEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r6.deleteMessageEnabled);
} }
function CustomerEditComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r7.errorMessage);
} }
class CustomerEditComponent {
    constructor(router, route, dataService, growler, modalService, logger) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.growler = growler;
        this.modalService = modalService;
        this.logger = logger;
        this.customer = {
            id: 0,
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            city: '',
            state: {
                abbreviation: '',
                name: ''
            }
        };
        this.states = [];
        this.errorMessage = '';
        this.deleteMessageEnabled = false;
        this.operationText = 'Insert';
        this.customerForm = {};
    }
    ngOnInit() {
        var _a;
        // Subscribe to params so if it changes we pick it up. Don't technically need that here
        // since param won't be changing while component is alive.
        // Could use this.route.parent.snapshot.params["id"] to simplify it.
        (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.params.subscribe((params) => {
            const id = +params['id'];
            if (id !== 0) {
                this.operationText = 'Update';
                this.getCustomer(id);
            }
        });
        this.dataService.getStates().subscribe((states) => this.states = states);
    }
    getCustomer(id) {
        this.dataService.getCustomer(id).subscribe((customer) => {
            this.customer = customer;
        });
    }
    submit() {
        if (this.customer.id === 0) {
            this.dataService.insertCustomer(this.customer)
                .subscribe((insertedCustomer) => {
                if (insertedCustomer) {
                    // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    this.customerForm.form.markAsPristine();
                    this.router.navigate(['/customers']);
                }
                else {
                    const msg = 'Unable to insert customer';
                    this.growler.growl(msg, _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_0__.GrowlerMessageType.Danger);
                    this.errorMessage = msg;
                }
            }, (err) => this.logger.log(err));
        }
        else {
            this.dataService.updateCustomer(this.customer)
                .subscribe((status) => {
                if (status) {
                    // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    this.customerForm.form.markAsPristine();
                    this.growler.growl('Operation performed successfully.', _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_0__.GrowlerMessageType.Success);
                    // this.router.navigate(['/customers']);
                }
                else {
                    const msg = 'Unable to update customer';
                    this.growler.growl(msg, _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_0__.GrowlerMessageType.Danger);
                    this.errorMessage = msg;
                }
            }, (err) => this.logger.log(err));
        }
    }
    cancel(event) {
        event.preventDefault();
        // Route guard will take care of showing modal dialog service if data is dirty
        this.router.navigate(['/customers']);
    }
    delete(event) {
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer.id)
            .subscribe((status) => {
            if (status) {
                this.router.navigate(['/customers']);
            }
            else {
                this.errorMessage = 'Unable to delete customer';
            }
        }, (err) => this.logger.log(err));
    }
    canDeactivate() {
        if (!this.customerForm.dirty) {
            return true;
        }
        // Dirty show display modal dialog to user to confirm leaving
        const modalContent = {
            header: 'Lose Unsaved Changes?',
            body: 'You have unsaved changes! Would you like to leave the page and lose them?',
            cancelButtonText: 'Cancel',
            OKButtonText: 'Leave'
        };
        return this.modalService.show(modalContent);
    }
}
CustomerEditComponent.ɵfac = function CustomerEditComponent_Factory(t) { return new (t || CustomerEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_growler_growler_service__WEBPACK_IMPORTED_MODULE_0__.GrowlerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_logger_service__WEBPACK_IMPORTED_MODULE_3__.LoggerService)); };
CustomerEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CustomerEditComponent, selectors: [["cm-customer-edit"]], viewQuery: function CustomerEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.customerForm = _t.first);
    } }, decls: 39, vars: 12, consts: [["novalidate", "", 1, "customer-form", 3, "ngSubmit"], ["customerForm", "ngForm"], [1, "form-group"], ["title", "first name", "type", "text", "name", "firstName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["title", "last name", "type", "text", "name", "lastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["title", "address", "type", "text", "name", "address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["title", "city", "type", "text", "name", "city", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["title", "states", "name", "state", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngValue"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], [1, "alert", "alert-warning"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-default", 3, "click"], [1, "pull-right"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "alert", "alert-danger"]], template: function CustomerEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CustomerEditComponent_Template_form_ngSubmit_1_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_6_listener($event) { return ctx.customer.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "First Name is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2)(11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_13_listener($event) { return ctx.customer.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Last Name is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 2)(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_20_listener($event) { return ctx.customer.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Address is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 2)(25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_27_listener($event) { return ctx.customer.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "City is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 2)(32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CustomerEditComponent_Template_select_ngModelChange_34_listener($event) { return ctx.customer.state.abbreviation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, CustomerEditComponent_option_35_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, CustomerEditComponent_div_36_Template, 5, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, CustomerEditComponent_div_37_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.customer.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", _r1.pristine || _r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.customer.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", _r2.pristine || _r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.customer.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", _r3.pristine || _r3.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.customer.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", _r4.pristine || _r4.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.customer.state.abbreviation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm], styles: [".customer-form[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   input[type='number'][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   input[type='email'][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width:100%;\n}\n\n.customer-form[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%] {\n  border-left: 5px solid #a94442;\n}\n\n.customer-form[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%] {\n  border-left: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztJQUlJLFVBQVU7QUFDZDs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJjdXN0b21lci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tZXItZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10sIFxuLmN1c3RvbWVyLWZvcm0gaW5wdXRbdHlwZT0nbnVtYmVyJ10sXG4uY3VzdG9tZXItZm9ybSBpbnB1dFt0eXBlPSdlbWFpbCddLFxuLmN1c3RvbWVyLWZvcm0gc2VsZWN0IHtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4uY3VzdG9tZXItZm9ybSAubmctaW52YWxpZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0Mjtcbn1cblxuLmN1c3RvbWVyLWZvcm0gLm5nLXZhbGlkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xufSJdfQ== */"] });


/***/ }),

/***/ 7319:
/*!***********************************************************************!*\
  !*** ./src/app/customer/customer-orders/customer-orders.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerOrdersComponent": () => (/* binding */ CustomerOrdersComponent)
/* harmony export */ });
/* harmony import */ var _shared_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/interfaces */ 4444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/data.service */ 5925);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pipes/capitalize.pipe */ 8750);






function CustomerOrdersComponent_div_1_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const order_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](order_r4.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](5, 2, order_r4.itemCost, "\u20B9", "symbol"));
} }
function CustomerOrdersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CustomerOrdersComponent_div_1_tr_7_Template, 6, 6, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "tr", 5)(9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Orders for ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 5, ctx_r0.customer.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 7, ctx_r0.customer.lastName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.customer.orders)("ngForTrackBy", ctx_r0.ordersTrackBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](13, 9, ctx_r0.customer.orderTotal, "\u20B9", "symbol"));
} }
function CustomerOrdersComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No orders found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CustomerOrdersComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No customer found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CustomerOrdersComponent {
    constructor(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.orders = [];
        this.customer = {};
    }
    ngOnInit() {
        var _a;
        // Subscribe to params so if it changes we pick it up.  Could use this.route.parent.snapshot.params["id"] to simplify it.
        (_a = this.route.parent) === null || _a === void 0 ? void 0 : _a.params.subscribe((params) => {
            const id = +params['id'];
            this.dataService.getCustomer(id).subscribe((customer) => {
                this.customer = customer;
            });
        });
    }
    ordersTrackBy(index, orderItem) {
        return index;
    }
}
CustomerOrdersComponent.ɵfac = function CustomerOrdersComponent_Factory(t) { return new (t || CustomerOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
CustomerOrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CustomerOrdersComponent, selectors: [["cm-customer-orders"]], decls: 4, vars: 3, consts: [[1, "container"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "table", "table-striped", "table-hover", "orders-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "summary-border"], [1, "text-right"]], template: function CustomerOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CustomerOrdersComponent_div_1_Template, 14, 13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CustomerOrdersComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CustomerOrdersComponent_div_3_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.customer && ctx.customer.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.customer && !ctx.customer.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.customer);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__.CapitalizePipe], encapsulation: 2 });


/***/ }),

/***/ 2176:
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerRoutingModule": () => (/* binding */ CustomerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.component */ 3033);
/* harmony import */ var _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-orders/customer-orders.component */ 7319);
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-details/customer-details.component */ 267);
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ 2068);
/* harmony import */ var _guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/can-activate.guard */ 714);
/* harmony import */ var _guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/can-deactivate.guard */ 7812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_0__.CustomerComponent,
        children: [
            { path: 'orders', component: _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_1__.CustomerOrdersComponent },
            { path: 'details', component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_2__.CustomerDetailsComponent },
            {
                path: 'edit',
                component: _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_3__.CustomerEditComponent,
                canActivate: [_guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_4__.CanActivateGuard],
                canDeactivate: [_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__.CanDeactivateGuard]
            }
        ]
    }
];
class CustomerRoutingModule {
}
CustomerRoutingModule.components = [_customer_component__WEBPACK_IMPORTED_MODULE_0__.CustomerComponent, _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_1__.CustomerOrdersComponent, _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_2__.CustomerDetailsComponent, _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_3__.CustomerEditComponent];
CustomerRoutingModule.ɵfac = function CustomerRoutingModule_Factory(t) { return new (t || CustomerRoutingModule)(); };
CustomerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CustomerRoutingModule });
CustomerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_4__.CanActivateGuard, _guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__.CanDeactivateGuard], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CustomerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 3033:
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerComponent": () => (/* binding */ CustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class CustomerComponent {
    // displayMode: CustomerDisplayModeEnum;
    // displayModeEnum = CustomerDisplayModeEnum;
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // No longer needed due to routerLinkActive feature in Angular
        // const path = this.router.url.split('/')[3];
        // switch (path) {
        //   case 'details':
        //     this.displayMode = CustomerDisplayModeEnum.Details;
        //     break;
        //   case 'orders':
        //     this.displayMode = CustomerDisplayModeEnum.Orders;
        //     break;
        //   case 'edit':
        //     this.displayMode = CustomerDisplayModeEnum.Edit;
        //     break;
        // }
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
CustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["cm-orders"]], decls: 27, vars: 0, consts: [[1, "orders", "view"], [1, "container"], [1, "glyphicon", "glyphicon-user"], [1, "navbar"], [1, "nav", "navbar-nav"], [1, "toolbar-item"], ["routerLink", "details", "routerLinkActive", "active"], [1, "glyphicon", "glyphicon-list"], ["routerLink", "orders", "routerLinkActive", "active"], [1, "glyphicon", "glyphicon-tags"], ["routerLink", "edit", "routerLinkActive", "active"], [1, "glyphicon", "glyphicon-edit"], ["routerLink", "/customers"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "header")(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0\u00A0Customer Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "ul", 4)(9, "li", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0\u00A0Customer Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5)(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0\u00A0Customer Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 5)(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0\u00A0Edit Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet")(23, "br")(24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "View all Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], encapsulation: 2 });


/***/ }),

/***/ 505:
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerModule": () => (/* binding */ CustomerModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-routing.module */ 2176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.component */ 3033);
/* harmony import */ var _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-orders/customer-orders.component */ 7319);
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-details/customer-details.component */ 267);
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ 2068);







class CustomerModule {
}
CustomerModule.ɵfac = function CustomerModule_Factory(t) { return new (t || CustomerModule)(); };
CustomerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CustomerModule });
CustomerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_customer_routing_module__WEBPACK_IMPORTED_MODULE_1__.CustomerRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CustomerModule, { declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_2__.CustomerComponent, _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_3__.CustomerOrdersComponent, _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__.CustomerDetailsComponent, _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__.CustomerEditComponent], imports: [_customer_routing_module__WEBPACK_IMPORTED_MODULE_1__.CustomerRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 714:
/*!*******************************************************!*\
  !*** ./src/app/customer/guards/can-activate.guard.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanActivateGuard": () => (/* binding */ CanActivateGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/auth.service */ 263);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);




class CanActivateGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isAuthenticated) {
            return true;
        }
        // Track URL user is trying to go to so we can send them there after logging in
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    }
}
CanActivateGuard.ɵfac = function CanActivateGuard_Factory(t) { return new (t || CanActivateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
CanActivateGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CanActivateGuard, factory: CanActivateGuard.ɵfac });


/***/ }),

/***/ 7812:
/*!*********************************************************!*\
  !*** ./src/app/customer/guards/can-deactivate.guard.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanDeactivateGuard": () => (/* binding */ CanDeactivateGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/logger.service */ 4080);



class CanDeactivateGuard {
    constructor(logger) {
        this.logger = logger;
    }
    canDeactivate(component, route, state) {
        var _a;
        this.logger.log(`CustomerId: ${(_a = route.parent) === null || _a === void 0 ? void 0 : _a.params['id']} URL: ${state.url}`);
        // Check with component to see if we're able to deactivate
        return component.canDeactivate();
    }
}
CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) { return new (t || CanDeactivateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_logger_service__WEBPACK_IMPORTED_MODULE_0__.LoggerService)); };
CanDeactivateGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CanDeactivateGuard, factory: CanDeactivateGuard.ɵfac });


/***/ }),

/***/ 4444:
/*!**************************************!*\
  !*** ./src/app/shared/interfaces.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ })

}]);
//# sourceMappingURL=src_app_customer_customer_module_ts.js.map