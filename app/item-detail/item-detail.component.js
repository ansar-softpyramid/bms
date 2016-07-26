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
//Font Awesome -- Not working
var components_1 = require('angular2-fontawesome/components');
var platform_browser_1 = require('@angular/platform-browser');
var ItemDetailComponent = (function () {
    function ItemDetailComponent(router, bms_api, titleService, route) {
        this.router = router;
        this.bms_api = bms_api;
        this.titleService = titleService;
        this.route = route;
        this.item = new item_1.Item();
        this.close = new core_1.EventEmitter();
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('BMS | Item Detail');
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id !== undefined) {
                id = +id;
                _this.title = "Update item detail";
                _this.bms_api.findItem(id).toPromise().then(function (item) { return _this.item = item; });
            }
            else {
                _this.title = "Create item detail";
                _this.item = new item_1.Item();
            }
        });
    };
    ItemDetailComponent.prototype.saveItem = function (item) {
        var _this = this;
        item.unit = item.unit.toUpperCase();
        if (item.id == null)
            this.bms_api.saveItem(item).toPromise().then(function (item) {
                _this.item = item;
                _this.goBack(item);
            });
        else
            this.updateItem(item);
    };
    ItemDetailComponent.prototype.updateItem = function (item) {
        var _this = this;
        item.unit = item.unit.toUpperCase();
        this.bms_api.updateItem(item).toPromise().then(function (item) {
            _this.item = item;
            _this.goBack(item);
        });
    };
    ItemDetailComponent.prototype.deleteItem = function (item) {
        var _this = this;
        this.bms_api.deleteItem(item).toPromise().then(function (items) {
            _this.goBack();
        });
    };
    ItemDetailComponent.prototype.goBack = function (item) {
        if (item === void 0) { item = null; }
        this.close.emit(item);
        window.history.back();
    };
    ItemDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemDetailComponent.prototype, "close", void 0);
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: 'item-detail',
            templateUrl: '/app/item-detail/item-form.component.html',
            directives: [components_1.FaComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, items_service_1.BmsApiService, platform_browser_1.Title, router_1.ActivatedRoute])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=item-detail.component.js.map