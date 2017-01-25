"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AutoGrowDirective = (function () {
    function AutoGrowDirective(el) {
        this.el = el;
    }
    AutoGrowDirective.prototype.onFocus = function () {
        this.el.nativeElement.style.width = '100%';
    };
    AutoGrowDirective.prototype.onBlur = function () {
        this.el.nativeElement.style.width = '500px';
    };
    __decorate([
        core_1.HostListener('focus'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AutoGrowDirective.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('blur'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AutoGrowDirective.prototype, "onBlur", null);
    AutoGrowDirective = __decorate([
        core_1.Directive({
            selector: '[autoGrow]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AutoGrowDirective);
    return AutoGrowDirective;
}());
exports.AutoGrowDirective = AutoGrowDirective;
//# sourceMappingURL=autogrow.directive.js.map