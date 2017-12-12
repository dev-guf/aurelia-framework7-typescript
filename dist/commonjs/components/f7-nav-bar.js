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
var F7Navbar = /** @class */ (function () {
    function F7Navbar() {
        this.title = '';
    }
    __decorate([
        aurelia_framework_1.bindable
    ], F7Navbar.prototype, "title", void 0);
    F7Navbar = __decorate([
        aurelia_framework_1.containerless,
        aurelia_framework_1.customElement('f7-navbar'),
        aurelia_templating_1.inlineView("\n<template>\n<div class=\"navbar\">\n    <div class=\"navbar-inner\">\n        <slot></slot>\n        <div class=\"center\">\"${title}\"</div>\n    </div>\n</div>\n</template>\n")
    ], F7Navbar);
    return F7Navbar;
}());
exports.F7Navbar = F7Navbar;
