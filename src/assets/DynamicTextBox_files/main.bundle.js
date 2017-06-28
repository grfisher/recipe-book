webpackJsonp([2,4],{

/***/ 364:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 364;


/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(472);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/gregor/Documents/workspace/dynamicTextBox/src/main.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddressComponent = (function () {
    function AddressComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]) === 'function' && _a) || Object)
    ], AddressComponent.prototype, "adressForm", void 0);
    AddressComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'address',
            template: __webpack_require__(636),
        }), 
        __metadata('design:paramtypes', [])
    ], AddressComponent);
    return AddressComponent;
    var _a;
}());
//# sourceMappingURL=/home/gregor/Documents/workspace/dynamicTextBox/src/address.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_fb) {
        this._fb = _fb;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5)]],
            addresses: this._fb.array([])
        });
        // add address
        this.addAddress();
        /* subscribe to addresses value changes */
        // this.myForm.controls['addresses'].valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    };
    AppComponent.prototype.initAddress = function () {
        return this._fb.group({
            street: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            postcode: ['']
        });
    };
    AppComponent.prototype.addAddress = function () {
        var control = this.myForm.controls['addresses'];
        var addrCtrl = this.initAddress();
        control.push(addrCtrl);
        /* subscribe to individual address value changes */
        // addrCtrl.valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    };
    AppComponent.prototype.removeAddress = function (i) {
        var control = this.myForm.controls['addresses'];
        control.removeAt(i);
    };
    AppComponent.prototype.save = function (model) {
        // call API to save
        // ...
        console.log(model);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__(637),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/gregor/Documents/workspace/dynamicTextBox/src/app.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__address_component__ = __webpack_require__(470);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__address_component__["a" /* AddressComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/gregor/Documents/workspace/dynamicTextBox/src/app.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/gregor/Documents/workspace/dynamicTextBox/src/environment.js.map

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"adressForm\">\n    <div class=\"form-group col-xs-6\">\n        <label>street</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"street\">\n        <small [hidden]=\"adressForm.controls.street.valid\" class=\"text-danger\">\n            Street is required\n        </small>\n    </div>\n    <div class=\"form-group col-xs-6\">\n        <label>postcode</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"postcode\">\n    </div>\n</div>"

/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"margin-20\">\n        <h4>Add customer</h4>\n      </div>\n      <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"save(myForm)\">\n        <div class=\"form-group\">\n          <label>Name</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n          <small *ngIf=\"!myForm.controls.name.valid\" class=\"text-danger\">\n              Name is required (minimum 5 characters).\n            </small>\n        </div>\n        <!--addresses-->\n        <div formArrayName=\"addresses\">\n          <div *ngFor=\"let address of myForm.controls.addresses.controls; let i=index\" class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <span>Address {{i + 1}}</span>\n              <span class=\"glyphicon glyphicon-remove pull-right\" *ngIf=\"myForm.controls.addresses.controls.length > 1\" (click)=\"removeAddress(i)\"></span>\n            </div>\n            <div class=\"panel-body\" [formGroupName]=\"i\">\n              <addressx [group]=\"myForm.controls.addresses.controls[i]\"></addresx>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"margin-20\">\n          <a (click)=\"addAddress()\" style=\"cursor: default\">\n            Add another address +\n          </a>\n        </div>\n\n        <div class=\"margin-20\">\n          <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!myForm.valid\">Submit</button>\n        </div>\n        <div class=\"clearfix\"></div>\n\n        <div class=\"margin-20\">\n          <div>myForm details:-</div>\n          <pre>Is myForm valid?: <br>{{myForm.valid | json}}</pre>\n          <pre>form value: <br>{{myForm.value | json}}</pre>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(369);
module.exports = __webpack_require__(365);


/***/ })

},[687]);
//# sourceMappingURL=main.bundle.map