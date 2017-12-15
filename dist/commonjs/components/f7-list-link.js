"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_templating_1 = require("aurelia-templating");
var F7ListLink = /** @class */ (function () {
    function F7ListLink() {
        this.close = '';
        this.closePanel = false;
        this.href = '#';
    }
    F7ListLink.prototype.attached = function () {
        if (this.closePanel !== false) {
            this.close = ' close-panel';
        }
    };
    __decorate([
        aurelia_framework_1.bindable
    ], F7ListLink.prototype, "close", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], F7ListLink.prototype, "closePanel", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], F7ListLink.prototype, "href", void 0);
    F7ListLink = __decorate([
        aurelia_framework_1.containerless,
        aurelia_framework_1.customElement('f7-list-link'),
        aurelia_templating_1.inlineView("\n<template>\n<li>\n    <a class=\"item-content item-link${close}\" href=\"${href}\">\n        <div class=\"item-inner\">\n            <div class=\"item-title\"><slot></slot></div>\n        </div>\n    </a>\n</li>\n</template>\n")
    ], F7ListLink);
    return F7ListLink;
}());
exports.F7ListLink = F7ListLink;
