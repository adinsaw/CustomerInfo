System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Status;
    return {
        setters:[],
        execute: function() {
            Status = (function () {
                function Status(statusCode, message) {
                    this.statusCode = statusCode;
                    this.message = message;
                }
                return Status;
            }());
            exports_1("Status", Status);
        }
    }
});
//# sourceMappingURL=status.js.map