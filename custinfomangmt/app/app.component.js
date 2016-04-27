System.register(['angular2/core', 'angular2/router', './customerManagement/deletecustomer.component', './customerManagement/customerform.component', './customerManagement/findform.component', './customerManagement/customermanagement', './customerManagement/customertransaction.component'], function(exports_1, context_1) {
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
    var core_1, router_1, deletecustomer_component_1, customerform_component_1, findform_component_1, customermanagement_1, customertransaction_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (deletecustomer_component_1_1) {
                deletecustomer_component_1 = deletecustomer_component_1_1;
            },
            function (customerform_component_1_1) {
                customerform_component_1 = customerform_component_1_1;
            },
            function (findform_component_1_1) {
                findform_component_1 = findform_component_1_1;
            },
            function (customermanagement_1_1) {
                customermanagement_1 = customermanagement_1_1;
            },
            function (customertransaction_component_1_1) {
                customertransaction_component_1 = customertransaction_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<a>Customer Information Management</a>\n \n        <nav>\n    <a><h3>List Of Operations</h3></a>\n<br>     <a [routerLink]=\"['Home']\">Home</a>\n<br>\n<br><br>          <a [routerLink]=\"['CreateCustomer']\">Create Customer Info</a>\n          <br>\n\n            <a [routerLink]=\"['FindCustomer']\">Find/Update Customer Info</a>\n          <br>\n            <a [routerLink]=\"['DeleteCustomer']\">Delete Customer Info</a>\n        \n        </nav>\n        <router-outlet></router-outlet>\n      ",
                        directives: [router_1.ROUTER_DIRECTIVES, customertransaction_component_1.CustomerTransactionComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: customermanagement_1.CustomerManagementComponent, useAsDefault: true },
                        { path: '/customerform', name: 'CreateCustomer', component: customerform_component_1.CustomerFormComponent },
                        { path: '/findCustomer', name: 'FindCustomer', component: findform_component_1.FindFormComponent },
                        { path: '/deleteCustomer', name: 'DeleteCustomer', component: deletecustomer_component_1.DeleteCustomerFormComponent },
                        { path: '/transactionDetails:transactionEdit', name: 'CustomerTransaction', component: customertransaction_component_1.CustomerTransactionComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map