var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, containerless, TaskQueue } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
var F7View = /** @class */ (function () {
    function F7View(EventAggregator, taskQueue) {
        this.taskQueue = taskQueue;
        this.name = '';
        this.isMainView = false; //todo: this is coming as a string see this issue:
        this.ea = EventAggregator;
    }
    F7View.prototype.attached = function () {
        var _this = this;
        if (this.isMainView !== false) {
            this.name = 'view-main';
            this.taskQueue.queueMicroTask(function () {
                _this.ea.publish('view-main-attached');
            });
        }
    };
    __decorate([
        bindable
    ], F7View.prototype, "name", void 0);
    __decorate([
        bindable
    ], F7View.prototype, "isMainView", void 0);
    F7View = __decorate([
        containerless,
        customElement('f7-view'),
        inlineView("\n<template>\n<div class=\"view ${name}\">\n    <slot></slot>\n</div>\n</template>\n"),
        inject(EventAggregator, TaskQueue)
    ], F7View);
    return F7View;
}());
export { F7View };
