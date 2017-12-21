System.register(["aurelia-framework", "aurelia-templating"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_templating_1, F7ListItem;
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
            F7ListItem = /** @class */ (function () {
                function F7ListItem() {
                }
                F7ListItem = __decorate([
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.customElement('f7-list-item'),
                    aurelia_templating_1.inlineView("\n<template>\n<li class=\"item-content\">\n    <div class=\"item-inner\">\n        <div class=\"item-title\"><slot></slot></div>\n    </div>\n</li>\n</template>\n")
                ], F7ListItem);
                return F7ListItem;
            }());
            exports_1("F7ListItem", F7ListItem);
        }
    };
});