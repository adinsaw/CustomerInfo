System.register(['angular2/core', './customerform', 'angular2/http', './customerform.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, customerform_1, http_1, customerform_service_1, router_1;
    var DeleteCustomerFormComponent;
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
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DeleteCustomerFormComponent = (function () {
                function DeleteCustomerFormComponent(_customerformservice) {
                    this._customerformservice = _customerformservice;
                    this.edit = false;
                    this.model = new customerform_1.Customer('ADAM', 'SMITH');
                }
                DeleteCustomerFormComponent.prototype.ngOnInit = function () {
                    //   this.getCustomerDetails(); 
                };
                DeleteCustomerFormComponent.prototype.getCustomerByFirstLastName = function (findcustomer) {
                    var _this = this;
                    this._customerformservice.findCustomerByFirstLastName(findcustomer)
                        .subscribe(function (customer) { return _this.customer = customer; });
                };
                DeleteCustomerFormComponent.prototype.response = function (customer) {
                    console.log(customer);
                };
                DeleteCustomerFormComponent.prototype.onSelect = function (customer) {
                    this.model = customer;
                    console.log(this.model);
                    this.edit = true;
                    //@RouteConfig([     {path:'/updatecustomer', name: 'UpdateCustomer', component:CustomerFormComponent} ])
                };
                DeleteCustomerFormComponent.prototype.onSubmit = function () { console.log(this.model); this.getCustomerByFirstLastName(this.model); };
                //onEdit(customerReq:Customer){console.log(this.payload);}
                DeleteCustomerFormComponent.prototype.onDelete = function () {
                    var _this = this;
                    this._customerformservice.postDeleteCustomer(this.model)
                        .subscribe(function (data) { return _this.loggedIn(data); });
                };
                DeleteCustomerFormComponent.prototype.loggedIn = function (data) {
                    alert(data);
                    console.log(data.statusCode);
                    this.edit = false;
                    this.model = new customerform_1.Customer('ADAM', 'SMITH');
                };
                DeleteCustomerFormComponent = __decorate([
                    core_1.Component({
                        selector: 'findCustomer',
                        templateUrl: 'app/customerManagement/deletecustomer.html',
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            customerform_service_1.CustomerFormService
                        ],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [customerform_service_1.CustomerFormService])
                ], DeleteCustomerFormComponent);
                return DeleteCustomerFormComponent;
            }());
            exports_1("DeleteCustomerFormComponent", DeleteCustomerFormComponent);
        }
    }
});
//# sourceMappingURL=deletecustomer.component.js.map