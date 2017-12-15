System.register(["aurelia-framework", "aurelia-templating"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_templating_1, F7Block;
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
            F7Block = /** @class */ (function () {
                function F7Block() {
                    this.titleStr = '';
                    this.innerStr = '';
                    this.insetStr = '';
                    this.title = false;
                    this.inner = false;
                    this.inset = false;
                }
                F7Block.prototype.attached = function () {
                    if (this.title !== false) {
                        this.titleStr = '-title';
                    }
                    if (this.inner !== false) {
                        this.innerStr = ' inner';
                    }
                    if (this.inset !== false) {
                        this.insetStr = ' inset';
                    }
                };
                __decorate([
                    aurelia_framework_1.bindable
                ], F7Block.prototype, "titleStr", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], F7Block.prototype, "innerStr", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], F7Block.prototype, "insetStr", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], F7Block.prototype, "title", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], F7Block.prototype, "inner", void 0);
                __decorate([
                    aurelia_framework_1.bindable
                ], F7Block.prototype, "inset", void 0);
                F7Block = __decorate([
                    aurelia_framework_1.containerless,
                    aurelia_framework_1.customElement('f7-block'),
                    aurelia_templating_1.inlineView("\n<template>\n<div class=\"content-block${titleStr}${innerStr}${insetStr}\">\n    <slot></slot>\n</div>\n</template>\n")
                ], F7Block);
                return F7Block;
            }());
            exports_1("F7Block", F7Block);
        }
    };
});
