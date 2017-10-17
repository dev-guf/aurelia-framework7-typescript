System.register(["aurelia-framework", "aurelia-templating"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_templating_1, F7Page;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            }
        ],
        execute: function () {
            F7Page = /** @class */ (function () {
                function F7Page() {
                    this.name = '';
                    this.cached = false;
                    this.navbarThrough = false;
                    this.toolbarThrough = false;
                    this.navbarFixed = false;
                }
                Object.defineProperty(F7Page.prototype, "classes", {
                    get: function () {
                        var output = 'page ';
                        if (this.navbarThrough) {
                            output += 'navbar-through ';
                        }
                        if (this.toolbarThrough) {
                            output += 'toolbar-through ';
                        }
                        if (this.navbarFixed) {
                            output += 'navbar-fixed ';
                        }
                        if (this.cached) {
                            output += 'cached ';
                        }
                        return output;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    aurelia_framework_1.bindable
                ], F7Page.prototype, "name", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], F7Page.prototype, "cached", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], F7Page.prototype, "navbarThrough", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], F7Page.prototype, "toolbarThrough", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], F7Page.prototype, "navbarFixed", void 0);
                F7Page = __decorate([
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.customElement('f7-page'),
                    aurelia_templating_1.inlineView("\n<template>\n<div data-page.bind=\"name\" class.bind=\"classes\">\n        <slot></slot>\n</div>  \n</template>\n")
                ], F7Page);
                return F7Page;
            }());
            exports_1("F7Page", F7Page);
        }
    };
});
