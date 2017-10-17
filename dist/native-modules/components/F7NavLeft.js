var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, containerless } from 'aurelia-framework';
var F7NavLeft = /** @class */ (function () {
    function F7NavLeft() {
        this.backLink = false;
    }
    __decorate([
        bindable
    ], F7NavLeft.prototype, "backLink", void 0);
    F7NavLeft = __decorate([
        containerless,
        customElement('f7-nav-left')
    ], F7NavLeft);
    return F7NavLeft;
}());
export { F7NavLeft };
