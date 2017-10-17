define(["require", "exports", "./services/Framework7Engine", "aurelia-framework"], function (require, exports, Framework7Engine_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Framework7Engine = Framework7Engine_1.Framework7Engine;
    function configure(aurelia) {
        aurelia.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./components/F7View'),
            aurelia_framework_1.PLATFORM.moduleName('./components/F7Pages'),
            aurelia_framework_1.PLATFORM.moduleName('./components/F7Page'),
            aurelia_framework_1.PLATFORM.moduleName('./components/F7Navbar'),
            aurelia_framework_1.PLATFORM.moduleName('./components/F7NavLeft')
        ]);
    }
    exports.configure = configure;
});
