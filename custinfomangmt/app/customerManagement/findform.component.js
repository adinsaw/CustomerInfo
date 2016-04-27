System.register(['angular2/core', './customerform', 'angular2/http', './customerform.service', './customertransaction.component', 'angular2/router', './currentcustomer.service'], function(exports_1, context_1) {
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
    var core_1, customerform_1, http_1, customerform_service_1, customertransaction_component_1, router_1, currentcustomer_service_1;
    var FindFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customerform_1_1) {
                customerform_1 = customerform_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (customerform_service_1_1) {
                customerform_service_1 = customerform_service_1_1;
            },
            function (customertransaction_component_1_1) {
                customertransaction_component_1 = customertransaction_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (currentcustomer_service_1_1) {
                currentcustomer_service_1 = currentcustomer_service_1_1;
            }],
        execute: function() {
            FindFormComponent = (function () {
                function FindFormComponent(_customerformservice, _router, _currentcustomerservice) {
                    var _this = this;
                    this._customerformservice = _customerformservice;
                    this._router = _router;
                    this._currentcustomerservice = _currentcustomerservice;
                    this.selectedChange = new core_1.EventEmitter();
                    this.specificTransactionUpdate = false;
                    this.edit = false;
                    this.parentModel = new customerform_1.Customer('');
                    this.transactionEdit = false;
                    this.model = new customerform_1.Customer('ADAM', 'SMITH');
                    this._currentcustomerservice.firstName$.subscribe(function (displayData) { _this.displayData = displayData; });
                    console.log(this.displayData);
                    this._currentcustomerservice.announcefirstName("TEST");
                }
                FindFormComponent.prototype.ngOnInit = function () {
                    //   this.getCustomerDetails(); 
                };
                FindFormComponent.prototype.getCustomerByFirstLastName = function (findcustomer) {
                    var _this = this;
                    this._customerformservice.findCustomerByFirstLastName(findcustomer)
                        .subscribe(function (customer) { return _this.customer = customer; });
                };
                FindFormComponent.prototype.response = function (customer) {
                    console.log(customer);
                };
                FindFormComponent.prototype.onSelect = function (customer) {
                    this.model = customer;
                    console.log(this.model);
                    this.edit = true;
                    //@RouteConfig([     {path:'/updatecustomer', name: 'UpdateCustomer', component:CustomerFormComponent} ])
                };
                FindFormComponent.prototype.onSelectTransactionUpdate = function (customerTransaction) {
                    this.modelTransaction = customerTransaction;
                    this.specificTransactionUpdate = true;
                };
                FindFormComponent.prototype.onSelectTransaction = function () { this.transactionEdit = true; };
                FindFormComponent.prototype.onSelectYES = function (newcustomer) {
                    this.transactionEdit = true;
                    //    this._currentcustomerservice.setCurrentCustomerDetails(newcustomer);
                    this._router.navigate(['CustomerTransaction', { transactionEdit: newcustomer }]);
                    console.log(this.displayData);
                };
                FindFormComponent.prototype.onSubmit = function () { console.log(this.model); this.getCustomerByFirstLastName(this.model); };
                //onEdit(customerReq:Customer){console.log(this.payload);}
                FindFormComponent.prototype.onUpdate = function () {
                    var _this = this;
                    this._customerformservice.postUpdateCustomer(this.model)
                        .subscribe(function (data) { return _this.loggedIn(data); });
                };
                FindFormComponent.prototype.loggedIn = function (data) {
                    alert(data);
                    console.log(data.statusCode);
                    this.edit = false;
                    this.model = new customerform_1.Customer('ADAM', 'SMITH');
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], FindFormComponent.prototype, "selectedChange", void 0);
                FindFormComponent = __decorate([
                    core_1.Component({
                        selector: 'findCustomer',
                        templateUrl: 'app/customerManagement/findform.html',
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            customerform_service_1.CustomerFormService,
                            currentcustomer_service_1.CurrentCustomerService
                        ],
                        directives: [router_1.ROUTER_DIRECTIVES, customertransaction_component_1.CustomerTransactionComponent]
                    }), 
                    __metadata('design:paramtypes', [customerform_service_1.CustomerFormService, router_1.Router, currentcustomer_service_1.CurrentCustomerService])
                ], FindFormComponent);
                return FindFormComponent;
            }());
            exports_1("FindFormComponent", FindFormComponent);
        }
    }
});
//# sourceMappingURL=findform.component.js.map