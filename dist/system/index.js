System.register(["./services/Framework7Engine", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-nav-bar'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-nav-left'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-nav-right'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-page'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-pages'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-view')
        ]);
    }
    exports_1("configure", configure);
    var aurelia_framework_1;
    return {
        setters: [
            function (Framework7Engine_1_1) {
                exports_1({
                    "Framework7Engine": Framework7Engine_1_1["Framework7Engine"]
                });
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
        }
    };
});
