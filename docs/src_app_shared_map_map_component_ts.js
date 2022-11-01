"use strict";
(self["webpackChunkangular_jumpstart"] = self["webpackChunkangular_jumpstart"] || []).push([["src_app_shared_map_map_component_ts"],{

/***/ 6242:
/*!***************************************************!*\
  !*** ./src/app/shared/map/map-point.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPointComponent": () => (/* binding */ MapPointComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MapPointComponent {
    constructor() {
        this.longitude = 0;
        this.latitude = 0;
        this.markerText = '';
    }
    ngOnInit() {
    }
}
MapPointComponent.ɵfac = function MapPointComponent_Factory(t) { return new (t || MapPointComponent)(); };
MapPointComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapPointComponent, selectors: [["cm-map-point"]], inputs: { longitude: "longitude", latitude: "latitude", markerText: "markerText" }, decls: 0, vars: 0, template: function MapPointComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 8088:
/*!*********************************************!*\
  !*** ./src/app/shared/map/map.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var _map_point_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-point.component */ 6242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />
/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />




const _c0 = ["mapContainer"];
class MapComponent {
  constructor() {
    this.isEnabled = false;
    this.loadingScript = false;
    this.map = {};
    this.markers = [];
    this.mapHeight = null;
    this.mapWidth = null;
    this.height = 0;
    this.width = 0;
    this.latitude = 34.5133;
    this.longitude = -94.1629;
    this.markerText = 'Your Location';
    this.zoom = 8;
    this._dataPoints = [];
    this.mapDiv = {};
    this.mapPoints = {};
  }

  get dataPoints() {
    return this._dataPoints;
  }

  set dataPoints(value) {
    this._dataPoints = value;
    this.renderMapPoints();
  } // Necessary since a map rendered while container is hidden
  // will not load the map tiles properly and show a grey screen


  get enabled() {
    return this.isEnabled;
  }

  set enabled(isEnabled) {
    this.isEnabled = isEnabled;
    this.init();
  }

  ngOnInit() {
    if (this.latitude && this.longitude) {
      if (this.mapHeight && this.mapWidth) {
        this.mapHeight = this.height + 'px';
        this.mapWidth = this.width + 'px';
      } else {
        const hw = this.getWindowHeightWidth(this.mapDiv.nativeElement.ownerDocument);
        this.mapHeight = hw.height / 2 + 'px';
        this.mapWidth = hw.width + 'px';
      }
    }
  }

  ngAfterContentInit() {
    this.mapPoints.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(500)).subscribe(() => {
      if (this.enabled) {
        this.renderMapPoints();
      }
    });
  }

  init() {
    // Need slight delay to avoid grey box when google script has previously been loaded.
    // Otherwise map <div> container may not be visible yet which causes the grey box.
    setTimeout(() => {
      this.ensureScript();
    }, 200);
  }

  getWindowHeightWidth(document) {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (width > 900) {
      width = 900;
    }

    return {
      height: height,
      width: width
    };
  }

  ensureScript() {
    this.loadingScript = true;
    const document = this.mapDiv.nativeElement.ownerDocument;
    const script = document.querySelector('script[id="googlemaps"]');

    if (script) {
      if (this.isEnabled) {
        this.renderMap();
      }
    } else {
      const mapsScript = document.createElement('script');
      mapsScript.id = 'googlemaps';
      mapsScript.type = 'text/javascript';
      mapsScript.async = true;
      mapsScript.defer = true;
      mapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCG1KDldeF_2GzaTXrEHR0l6cyCS7AnmBw';

      mapsScript.onload = () => {
        this.loadingScript = false;

        if (this.isEnabled) {
          this.renderMap();
        }
      };

      document.body.appendChild(mapsScript);
    }
  }

  renderMap() {
    const latlng = this.createLatLong(this.latitude, this.longitude);
    const options = {
      zoom: this.zoom,
      center: latlng,
      mapTypeControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapDiv.nativeElement, options); // See if we have any mapPoints (child content) or dataPoints (@Input property)

    if (this.mapPoints && this.mapPoints.length || this.dataPoints && this.dataPoints.length) {
      this.renderMapPoints();
    } else {
      this.createMarker(latlng, this.markerText);
    }
  }

  createLatLong(latitude, longitude) {
    return latitude && longitude ? new google.maps.LatLng(latitude, longitude) : null;
  }

  renderMapPoints() {
    if (this.map && this.isEnabled) {
      this.clearMapPoints(); // lon/lat can be passed as child content or via the dataPoints @Input property

      const mapPoints = this.mapPoints && this.mapPoints.length ? this.mapPoints : this.dataPoints;

      if (mapPoints) {
        for (const point of mapPoints) {
          let markerText = point.markerText ? point.markerText : `<h3>${point.firstName} ${point.lastName}</h3>`;
          const mapPointLatlng = this.createLatLong(point.latitude, point.longitude);
          this.createMarker(mapPointLatlng, markerText);
        }
      }
    }
  }

  clearMapPoints() {
    this.markers.forEach(marker => {
      marker.setMap(null);
    });
    this.markers = [];
  }

  createMarker(position, title) {
    const infowindow = new google.maps.InfoWindow({
      content: title
    });
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      title: title,
      animation: google.maps.Animation.DROP
    });
    this.markers.push(marker);
    marker.addListener('click', () => {
      infowindow.open(this.map, marker);
    });
  }

}

MapComponent.ɵfac = function MapComponent_Factory(t) {
  return new (t || MapComponent)();
};

MapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MapComponent,
  selectors: [["cm-map"]],
  contentQueries: function MapComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _map_point_component__WEBPACK_IMPORTED_MODULE_0__.MapPointComponent, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mapPoints = _t);
    }
  },
  viewQuery: function MapComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mapDiv = _t.first);
    }
  },
  inputs: {
    height: "height",
    width: "width",
    latitude: "latitude",
    longitude: "longitude",
    markerText: "markerText",
    zoom: "zoom",
    dataPoints: "dataPoints",
    enabled: "enabled"
  },
  decls: 0,
  vars: 0,
  template: function MapComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 5014:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 7654);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }

  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }

}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;

/***/ }),

/***/ 1989:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 6936);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;

    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };

    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();

      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }

      emit();
    }

    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();

      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}

/***/ }),

/***/ 6733:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 6078);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }

  schedule(state, delay = 0) {
    return this;
  }

}

/***/ }),

/***/ 5198:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 6733);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 1103);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 9663);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }

  schedule(state, delay = 0) {
    if (this.closed) {
      return this;
    }

    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }

    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }

  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }

  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }

    _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    return undefined;
  }

  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }

    this.pending = false;

    const error = this._execute(state, delay);

    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }

  _execute(state, _delay) {
    let errored = false;
    let errorValue;

    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }

    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }

  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);

      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }

      this.delay = null;
      super.unsubscribe();
    }
  }

}

/***/ }),

/***/ 5744:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 5014);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
    this._scheduled = undefined;
  }

  flush(action) {
    const {
      actions
    } = this;

    if (this._active) {
      actions.push(action);
      return;
    }

    let error;
    this._active = true;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());

    this._active = false;

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  }

}

/***/ }),

/***/ 6936:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 5198);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 5744);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 7654:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateTimestampProvider": () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },

  delegate: undefined
};

/***/ }),

/***/ 1103:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "intervalProvider": () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;

    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }

    return setInterval(handler, timeout, ...args);
  },

  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },

  delegate: undefined
};

/***/ })

}]);
//# sourceMappingURL=src_app_shared_map_map_component_ts.js.map