System.register(['angular2/core', './customerform', 'angular2/http', './customerform.service', 'angular2/router', './customertransaction', './customerproductinformation'], function(exports_1, context_1) {
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
    var core_1, customerform_1, http_1, customerform_service_1, router_1, customertransaction_1, customerproductinformation_1;
    var CustomerFormComponent;
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
            },
            function (customertransaction_1_1) {
                customertransaction_1 = customertransaction_1_1;
            },
            function (customerproductinformation_1_1) {
                customerproductinformation_1 = customerproductinformation_1_1;
            }],
        execute: function() {
            CustomerFormComponent = (function () {
                function CustomerFormComponent(_customerformservice) {
                    this._customerformservice = _customerformservice;
                    this.modelTransactionProduct = new customerproductinformation_1.CustomerProductInformation("");
                    this.modelTransaction = new customertransaction_1.CustomerTransaction('Enter date', this.modelTransactionProduct);
                    this.model = new customerform_1.Customer('', '', '', '', '', '', '', '', '', '', this.modelTransaction);
                    this.isNewTransaction = false;
                    this.active = true;
                    this.submitted = false;
                }
                CustomerFormComponent.prototype.ngOnInit = function () {
                    //   this.getCustomerDetails(); 
                };
                CustomerFormComponent.prototype.getCustomerDetails = function () {
                    var _this = this;
                    this._customerformservice.getAllCustomers()
                        .subscribe(function (customer) { _this.customer = customer; });
                };
                CustomerFormComponent.prototype.postCreateCustomer = function (customer) {
                    var _this = this;
                    console.log(customer);
                    this._customerformservice.createNewCustomer(customer)
                        .subscribe(function (data) { return _this.loggedIn(data); });
                };
                CustomerFormComponent.prototype.newCustomer = function () {
                    this.model = new customerform_1.Customer('', '', '', '', '', '', '', '', '', '', this.modelTransaction);
                    this.active = true;
                    this.isNewTransaction = false;
                };
                CustomerFormComponent.prototype.loggedIn = function (data) {
                    alert(data);
                    console.log(data);
                    //   if(data===200){alert(data);this.newCustomer();}
                    //if(!(data.statusCode==200)){alert(data);alert("check the data");}
                    //else{alert(data+"FGSDFGDGDS");this.model;}
                    // console.log(data+"");
                };
                CustomerFormComponent.prototype.onSubmit = function () { console.log(this.model); this.postCreateCustomer(this.model); };
                CustomerFormComponent.prototype.newTransaction = function () { this.isNewTransaction = true; };
                CustomerFormComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-form',
                        templateUrl: 'app/customerManagement/customerform.html',
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            customerform_service_1.CustomerFormService
                        ],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [customerform_service_1.CustomerFormService])
                ], CustomerFormComponent);
                return CustomerFormComponent;
            }());
            exports_1("CustomerFormComponent", CustomerFormComponent);
        }
    }
});
//# sourceMappingURL=customerform.component.js.map