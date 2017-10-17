var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';
var F7NavLeft = /** @class */ (function () {
    function F7NavLeft() {
        this.backLink = false;
    }
    __decorate([
        bindable
    ], F7NavLeft.prototype, "backLink", void 0);
    F7NavLeft = __decorate([
        containerless,
        customElement('f7-nav-left'),
        inlineView("\n<template>\n<div class=\"left\">        \n    <a if.bind=\"backLink\" href=\"#\" class=\"back link icon-only\">\n        <i class=\"icon icon-back\"></i>\n    </a>\n    <slot>\n    </slot>\n</div>\n</template>\n")
    ], F7NavLeft);
    return F7NavLeft;
}());
export { F7NavLeft };
