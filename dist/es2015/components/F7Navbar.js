var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, containerless } from 'aurelia-framework';
var F7Navbar = /** @class */ (function () {
    function F7Navbar() {
        this.title = '';
    }
    __decorate([
        bindable
    ], F7Navbar.prototype, "title", void 0);
    F7Navbar = __decorate([
        containerless,
        customElement('f7-navbar')
    ], F7Navbar);
    return F7Navbar;
}());
export { F7Navbar };
