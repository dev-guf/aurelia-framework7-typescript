"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Framework7Engine_1 = require("./services/Framework7Engine");
exports.Framework7Engine = Framework7Engine_1.Framework7Engine;
var aurelia_framework_1 = require("aurelia-framework");
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
