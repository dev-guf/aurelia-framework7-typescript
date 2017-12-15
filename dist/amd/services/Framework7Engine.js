/// <reference path="../../typings/index.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Framework7Engine = /** @class */ (function () {
        function Framework7Engine(ea) {
            this.ea = ea;
        }
        Framework7Engine.prototype.setUpFramework7 = function () {
            var _this = this;
            this.ea.subscribe('view-main-attached', function () {
                _this.mainView = _this.instance.addView('.view-main', {
                    domCache: true,
                    main: true
                });
            });
            this.instance = new Framework7({
                material: true,
                animateNavBackIcon: true
            });
        };
        Framework7Engine = __decorate([
            aurelia_framework_1.singleton(),
            aurelia_framework_2.inject(aurelia_event_aggregator_1.EventAggregator)
        ], Framework7Engine);
        return Framework7Engine;
    }());
    exports.Framework7Engine = Framework7Engine;
});
