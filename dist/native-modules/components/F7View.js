var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, containerless } from 'aurelia-framework';
var F7View = /** @class */ (function () {
    function F7View() {
        this.isMainView = false; //todo: this is coming as a string see this issue: 
    }
    Object.defineProperty(F7View.prototype, "viewName", {
        get: function () {
            if (this.isMainView) {
                return 'view-main';
            }
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        bindable
    ], F7View.prototype, "name", void 0);
    __decorate([
        bindable
    ], F7View.prototype, "isMainView", void 0);
    F7View = __decorate([
        containerless,
        customElement('f7-view')
    ], F7View);
    return F7View;
}());
export { F7View };
