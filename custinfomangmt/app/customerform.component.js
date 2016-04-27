System.register(['angular2/core', './customerform'], function(exports_1, context_1) {
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
    var core_1, customerform_1;
    var CustomerFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customerform_1_1) {
                customerform_1 = customerform_1_1;
            }],
        execute: function() {
            CustomerFormComponent = (function () {
                function CustomerFormComponent() {
                    this.model = new customerform_1.CustomerForm('ADAM', 'SMITH', 'MR');
                    this.submitted = false;
                }
                CustomerFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                Object.defineProperty(CustomerFormComponent.prototype, "diagnostic", {
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                CustomerFormComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-form',
                        templateUrl: 'app/customerform.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomerFormComponent);
                return CustomerFormComponent;
            }());
            exports_1("CustomerFormComponent", CustomerFormComponent);
        }
    }
});
//# sourceMappingURL=customerform.component.js.map