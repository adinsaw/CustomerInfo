System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Customer;
    return {
        setters:[],
        execute: function() {
            Customer = (function () {
                function Customer(firstName, lastName, middleName, emailId, phoneNumber, houseNumber, addressLine1, addressLine2, cityName, pinCode, customerId, customerTransaction) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.middleName = middleName;
                    this.emailId = emailId;
                    this.phoneNumber = phoneNumber;
                    this.houseNumber = houseNumber;
                    this.addressLine1 = addressLine1;
                    this.addressLine2 = addressLine2;
                    this.cityName = cityName;
                    this.pinCode = pinCode;
                    this.customerId = customerId;
                    this.customerTransaction = customerTransaction;
                }
                return Customer;
            }());
            exports_1("Customer", Customer);
        }
    }
});
//# sourceMappingURL=customerform.js.map