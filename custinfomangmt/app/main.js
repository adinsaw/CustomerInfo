System.register(['./app.component', 'angular2/platform/browser', 'angular2/router', './customerManagement/currentcustomer.service', 'angular2/http', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1, browser_1, router_1, currentcustomer_service_1, http_1, core_1;
    var _currentcustomerservice;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (currentcustomer_service_1_1) {
                currentcustomer_service_1 = currentcustomer_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //to define a common service bootstrap the service;
            _currentcustomerservice = new currentcustomer_service_1.CurrentCustomerService();
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, core_1.provide(currentcustomer_service_1.CurrentCustomerService, { useValue: _currentcustomerservice })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map