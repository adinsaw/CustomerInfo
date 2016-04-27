System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomerProductInformation;
    return {
        setters:[],
        execute: function() {
            CustomerProductInformation = (function () {
                function CustomerProductInformation(customerProductInfoId, productId, quantity, productDescription, productName) {
                    this.customerProductInfoId = customerProductInfoId;
                    this.productId = productId;
                    this.quantity = quantity;
                    this.productDescription = productDescription;
                    this.productName = productName;
                }
                return CustomerProductInformation;
            }());
            exports_1("CustomerProductInformation", CustomerProductInformation);
        }
    }
});
//# sourceMappingURL=customerproductinformation.js.map