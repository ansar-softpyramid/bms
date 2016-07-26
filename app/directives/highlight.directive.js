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
var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this._defaultcolor = 'red';
        this.el = el.nativeElement;
    }
    Object.defineProperty(HighlightDirective.prototype, "defaultcolor", {
        set: function (colorName) {
            this._defaultcolor = colorName || this._defaultcolor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighlightDirective.prototype, "highlightcolor", {
        set: function (highlightcolor) {
            this._highlightcolor = highlightcolor;
        },
        enumerable: true,
        configurable: true
    });
    HighlightDirective.prototype.onmouseenter = function () {
        this.highlight(this._highlightcolor || this._defaultcolor);
    };
    HighlightDirective.prototype.onmouseleave = function () {
        this.highlight(null);
    };
    HighlightDirective.prototype.highlight = function (color) {
        this.el.style.backgroundColor = color;
        if (color)
            this.el.style.color = 'white';
        else
            this.el.style.color = 'black';
    };
    __decorate([
        core_1.Input('defaultcolor'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], HighlightDirective.prototype, "defaultcolor", null);
    __decorate([
        core_1.Input('highlightcolor'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], HighlightDirective.prototype, "highlightcolor", null);
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HighlightDirective.prototype, "onmouseenter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HighlightDirective.prototype, "onmouseleave", null);
    HighlightDirective = __decorate([
        core_1.Directive({
            selector: '[amHighlight]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HighlightDirective);
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map