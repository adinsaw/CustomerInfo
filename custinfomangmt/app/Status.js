System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Customer;
    return {
        setters:[],
        execute: function() {
            Customer = (function () {
                function Customer(statusCode, message) {
                    this.statusCode = statusCode;
                    this.message = message;
                }
                return Customer;
            }());
            exports_1("Customer", Customer);
        }
    }
});
//# sourceMappingURL=Status.js.map