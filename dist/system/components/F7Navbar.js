System.register(["aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, F7Navbar;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            F7Navbar = /** @class */ (function () {
                function F7Navbar() {
                    this.title = '';
                }
                __decorate([
                    aurelia_framework_1.bindable
                ], F7Navbar.prototype, "title", void 0);
                F7Navbar = __decorate([
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.customElement('f7-navbar')
                ], F7Navbar);
                return F7Navbar;
            }());
            exports_1("F7Navbar", F7Navbar);
        }
    };
});
