var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, containerless } from 'aurelia-framework';
var F7Page = /** @class */ (function () {
    function F7Page() {
        this.name = '';
        this.cached = false;
        this.navbarThrough = false;
        this.toolbarThrough = false;
        this.navbarFixed = false;
    }
    Object.defineProperty(F7Page.prototype, "classes", {
        get: function () {
            var output = 'page ';
            if (this.navbarThrough) {
                output += 'navbar-through ';
            }
            if (this.toolbarThrough) {
                output += 'toolbar-through ';
            }
            if (this.navbarFixed) {
                output += 'navbar-fixed ';
            }
            if (this.cached) {
                output += 'cached ';
            }
            return output;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        bindable
    ], F7Page.prototype, "name", void 0);
    __decorate([
        bindable
    ], F7Page.prototype, "cached", void 0);
    __decorate([
        bindable
    ], F7Page.prototype, "navbarThrough", void 0);
    __decorate([
        bindable
    ], F7Page.prototype, "toolbarThrough", void 0);
    __decorate([
        bindable
    ], F7Page.prototype, "navbarFixed", void 0);
    F7Page = __decorate([
        containerless,
        customElement('f7-page')
    ], F7Page);
    return F7Page;
}());
export { F7Page };
