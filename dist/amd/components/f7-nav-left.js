var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "aurelia-templating"], function (require, exports, aurelia_framework_1, aurelia_templating_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var F7NavLeft = /** @class */ (function () {
        function F7NavLeft() {
            this.backLink = false;
        }
        __decorate([
            aurelia_framework_1.bindable
        ], F7NavLeft.prototype, "backLink", void 0);
        F7NavLeft = __decorate([
            aurelia_framework_1.containerless,
            aurelia_framework_1.customElement('f7-nav-left'),
            aurelia_templating_1.inlineView("\n<template>\n<div class=\"left\">        \n    <a if.bind=\"backLink\" href=\"#\" class=\"back link icon-only\">\n        <i class=\"icon icon-back\"></i>\n    </a>\n    <slot>\n    </slot>\n</div>\n</template>\n")
        ], F7NavLeft);
        return F7NavLeft;
    }());
    exports.F7NavLeft = F7NavLeft;
});
