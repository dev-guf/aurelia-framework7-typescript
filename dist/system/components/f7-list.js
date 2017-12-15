System.register(["aurelia-framework", "aurelia-templating"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_templating_1, F7List;
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
            F7List = /** @class */ (function () {
                function F7List() {
                }
                F7List = __decorate([
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.customElement('f7-list'),
                    aurelia_templating_1.inlineView("\n<template>\n<div class=\"list-block\">\n    <ul>\n        <slot></slot>\n    </ul>\n</div>\n</template>\n")
                ], F7List);
                return F7List;
            }());
            exports_1("F7List", F7List);
        }
    };
});
