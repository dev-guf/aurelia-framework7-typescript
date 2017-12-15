/// <reference path="../../typings/index.d.ts" />
System.register(["aurelia-framework", "aurelia-event-aggregator"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1, Framework7Engine;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
                aurelia_framework_2 = aurelia_framework_1_1;
            },
            function (aurelia_event_aggregator_1_1) {
                aurelia_event_aggregator_1 = aurelia_event_aggregator_1_1;
            }
        ],
        execute: function () {/// <reference path="../../typings/index.d.ts" />
            Framework7Engine = /** @class */ (function () {
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
            exports_1("Framework7Engine", Framework7Engine);
        }
    };
});
