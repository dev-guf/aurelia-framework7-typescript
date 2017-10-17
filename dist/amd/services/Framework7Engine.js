/// <reference path="../../typings/index.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Framework7Engine = /** @class */ (function () {
        function Framework7Engine() {
        }
        Framework7Engine.prototype.setUpFramework7 = function () {
            this.instance = new Framework7({
                material: true,
                animateNavBackIcon: true
            });
            this.mainView = this.instance.addView('.view-main', {
                domCache: true,
                main: true
            });
        };
        Framework7Engine = __decorate([
            aurelia_framework_1.singleton()
        ], Framework7Engine);
        return Framework7Engine;
    }());
    exports.Framework7Engine = Framework7Engine;
});
