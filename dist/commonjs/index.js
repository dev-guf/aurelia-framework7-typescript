"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Framework7Engine_1 = require("./services/Framework7Engine");
exports.Framework7Engine = Framework7Engine_1.Framework7Engine;
var aurelia_framework_1 = require("aurelia-framework");
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
exports.configure = configure;
