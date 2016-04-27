System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomerForm;
    return {
        setters:[],
        execute: function() {
            CustomerForm = (function () {
                function CustomerForm(firstName, lastName, middleName) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.middleName = middleName;
                }
                return CustomerForm;
            }());
            exports_1("CustomerForm", CustomerForm);
        }
    }
});
//# sourceMappingURL=customerform.js.map