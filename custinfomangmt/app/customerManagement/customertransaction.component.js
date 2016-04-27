System.register(['angular2/core', './customerform', './customerTransaction', 'angular2/http', './customerform.service', './currentcustomer.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, customerform_1, customerTransaction_1, http_1, customerform_service_1, currentcustomer_service_1, router_1;
    var CustomerTransactionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customerform_1_1) {
                customerform_1 = customerform_1_1;
            },
            function (customerTransaction_1_1) {
                customerTransaction_1 = customerTransaction_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (customerform_service_1_1) {
                customerform_service_1 = customerform_service_1_1;
            },
            function (currentcustomer_service_1_1) {
                currentcustomer_service_1 = currentcustomer_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CustomerTransactionComponent = (function () {
                function CustomerTransactionComponent(_routeParams, _customerformservice, _router, _currentcustomerservice) {
                    var _this = this;
                    this._routeParams = _routeParams;
                    this._customerformservice = _customerformservice;
                    this._router = _router;
                    this._currentcustomerservice = _currentcustomerservice;
                    this.noTransaction = false;
                    this.goBack = false;
                    this.transactionEdit = false;
                    this.productDetails = false;
                    this.newModelTransaction = new customerTransaction_1.CustomerTransaction('');
                    this._currentcustomerservice.announcefirstName("AAA");
                    this._currentcustomerservice.firstName$.subscribe(function (displayData) { _this.displayData = displayData; });
                }
                CustomerTransactionComponent.prototype.ngOnInit = function () {
                    this.model = this._routeParams.get("transactionEdit");
                    if (this.model == null) {
                        this.noTransaction = true;
                    }
                };
                CustomerTransactionComponent.prototype.onSelectTransactionDetails = function (customertransaction) {
                    this.transactionEdit = true;
                    this.modelTransaction = customertransaction;
                    //console.log(customertransaction);
                };
                CustomerTransactionComponent.prototype.productDetail = function (cusP) {
                    this.productDetails = true;
                    this.selectedProduct = cusP;
                };
                CustomerTransactionComponent.prototype.onUpdate123 = function () {
                    var _this = this;
                    console.log(this.model);
                    this._customerformservice.postUpdateCustomer(this.model)
                        .subscribe(function (data) { return _this.loggedIn(data); });
                };
                CustomerTransactionComponent.prototype.loggedIn = function (data) {
                    alert(data);
                    this._router.navigate(['FindCustomer']);
                };
                CustomerTransactionComponent.prototype.onGoBack = function () { this.transactionEdit = false; };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', customerform_1.Customer)
                ], CustomerTransactionComponent.prototype, "modelChange", void 0);
                CustomerTransactionComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-transaction',
                        templateUrl: 'app/customerManagement/customertransaction.html',
                        inputs: ['modelChange'],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            customerform_service_1.CustomerFormService,
                            currentcustomer_service_1.CurrentCustomerService
                        ],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, customerform_service_1.CustomerFormService, router_1.Router, currentcustomer_service_1.CurrentCustomerService])
                ], CustomerTransactionComponent);
                return CustomerTransactionComponent;
            }());
            exports_1("CustomerTransactionComponent", CustomerTransactionComponent);
        }
    }
});
//# sourceMappingURL=customertransaction.component.js.map