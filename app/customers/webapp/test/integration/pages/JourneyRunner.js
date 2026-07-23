sap.ui.define([
    "sap/fe/test/JourneyRunner",
    "com/personal/customers/test/integration/pages/CustomersList"
], function (JourneyRunner, CustomersList) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/personal/customers') + '/test/flp.html#app-preview',
        pages: {
            onTheCustomersList: CustomersList
        },
        async: true
    });

    return runner;
});
