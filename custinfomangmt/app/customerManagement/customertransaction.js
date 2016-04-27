System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomerTransaction;
    return {
        setters:[],
        execute: function() {
            CustomerTransaction = (function () {
                function CustomerTransaction(transactionDate, customerProductInformation) {
                    this.transactionDate = transactionDate;
                    this.customerProductInformation = customerProductInformation;
                }
                return CustomerTransaction;
            }());
            exports_1("CustomerTransaction", CustomerTransaction);
        }
    }
});
//# sourceMappingURL=customertransaction.js.map