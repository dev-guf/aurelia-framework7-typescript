System.register(["./services/Framework7Engine", "aurelia-framework", "../node_modules/framework7/dist/css/framework7.material.css", "../node_modules/framework7/dist/js/framework7.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-block'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-center'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-input'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-label'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-link'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-list-item'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-list-link'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-list'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-nav-left'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-nav-right'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-navbar'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-page-content'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-page'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-pages'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-panel-left'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-panel-overlay'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-panel-right'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-statusbar'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-view'),
            aurelia_framework_1.PLATFORM.moduleName('./components/f7-views')
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
            },
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {
        }
    };
});
