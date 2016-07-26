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
var router_1 = require('@angular/router');
var items_service_1 = require('../services/items.service');
var item_1 = require('../modals/item');
var platform_browser_1 = require('@angular/platform-browser');
var ItemsComponent = (function () {
    function ItemsComponent(itemService, router, titleService) {
        this.itemService = itemService;
        this.router = router;
        this.titleService = titleService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('BMS | Items');
        this.itemService.getItems()
            .subscribe(function (items) { return _this.items = items; }, function (error) { return _this.errorMessage = error; });
    };
    ItemsComponent.prototype.gotoDetail = function (item) {
        var link = ['/item-detail', item.id];
        this.router.navigate(link);
    };
    ItemsComponent.prototype.deleteItem = function (item) {
        var _this = this;
        this.itemService.deleteItem(item).toPromise().then(function (items) {
            _this.items = items;
            console.log(items);
        });
    };
    ItemsComponent.prototype.createItem = function () {
        var item = new item_1.Item();
        var link = ['/item-detail'];
        this.router.navigate(link);
    };
    ItemsComponent.prototype.getSNo = function (index) {
        return index + 1;
    };
    ItemsComponent.prototype.formClosed = function (item) {
        console.log(item);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/items/items.component.html',
        }), 
        __metadata('design:paramtypes', [items_service_1.BmsApiService, router_1.Router, platform_browser_1.Title])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map