System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var CustomerFormService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            CustomerFormService = (function () {
                function CustomerFormService(http) {
                    this.http = http;
                    this._customerformUrl = 'http://localhost:8080/customerInfoManagement';
                    this._customerformUrl1 = 'app/customerManagement/customerform.json';
                }
                CustomerFormService.prototype.postUpdateCustomer = function (customer) {
                    var body = JSON.stringify({ customer: customer });
                    console.log(body);
                    var headers = new http_1.Headers();
                    headers.append('content-type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._customerformUrl + '/updatecustomer', body, options)
                        .map(function (res) { return res.text(); });
                    //  .do(data => console.log(data))
                };
                CustomerFormService.prototype.postDeleteCustomer = function (customer) {
                    var body = JSON.stringify({ customer: customer });
                    console.log(body);
                    var headers = new http_1.Headers();
                    headers.append('content-type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._customerformUrl + '/deletecustomer', body, options)
                        .map(function (res) { return res.text(); });
                    //  .do(data => console.log(data))
                };
                CustomerFormService.prototype.findCustomerByFirstLastName = function (customer) {
                    return this.http.get(this._customerformUrl + '/findcustomerbyfirstlastname/' + customer.firstName + "&" + customer.lastName)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); }); // eyeball results in the console
                };
                CustomerFormService.prototype.createNewCustomer = function (customer) {
                    var body = JSON.stringify({ customer: customer });
                    console.log(body);
                    var headers = new http_1.Headers();
                    headers.append('content-type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._customerformUrl + '/createcustomer', body, options)
                        .map(function (res) { return res.text(); });
                    //  .do(data => console.log(data))
                };
                CustomerFormService.prototype.getAllCustomers = function () {
                    return this.http.get(this._customerformUrl + '/findallcustomers')
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); }); // eyeball results in the console
                };
                CustomerFormService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                CustomerFormService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CustomerFormService);
                return CustomerFormService;
            }());
            exports_1("CustomerFormService", CustomerFormService);
        }
    }
});
//# sourceMappingURL=customerform.service.js.map